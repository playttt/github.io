(ns ttt.views
    (:require [re-frame.core :as re-frame]
              [re-com.core :as re-com]
              [re-com.modal-panel :as modal]
              [accountant.core :as accountant]
              [ttt.urls :as urls]
              [ttt.db :as db]
              [ttt.pieces :as pieces]
              [ttt.handlers :as handlers]
              [ttt.renderer :as renderer]
              [cljs.pprint :as pr]
              ))

(defn all-data-explorer []
  (let [db (re-frame/subscribe [:all-data])]
    [:div (with-out-str (pr/pprint @db))]))

(defn t [x y]
  [:g {:dangerouslySetInnerHTML {:__html (str "<use x='" x "' y='" y "' xlink:href='#t'>")}}])

(defn ttt-logo []
  [:svg {:width "295px" :height "170px"}
    [:defs
      [:g {:id "t"}
        [:rect {:fill "white" :stroke "black" :x 0 :y 0 :width 120 :height 40 :stroke-width 10}]
        [:rect {:fill "black" :x 35 :y 45 :width 55 :height 80}]
        [:rect {:fill "white" :x 45 :y 35 :width 35 :height 80}]
      ]]
        [t 5 45]
        [t 85 5]
        [t 170 45]
      ]
  )

;; game
(defn level-display []
  (let [level (re-frame/subscribe [:app-data [:game-state :level]])]
    (fn []
    [:g
      [:text {:x 10 :y 30 :font-size 16 :class "game-score"} "level"]
      [:text {:x 10 :y 50 :font-size 16 :class "game-score"} @level]]
      )))

(defn score-display []
  (let [score (re-frame/subscribe [:app-data [:game-state :score]])]
    (fn []
    [:g
      [:text {:x 10 :y 80 :font-size 16 :class "game-score"} "score"]
      [:text {:x 10 :y 100 :font-size 16 :class "game-score"} @score]]
      )))

(defn next-piece-display []
  (let [next-piece (re-frame/subscribe [:app-data [:game-state :next-piece]])]
    (fn []
    [:g
      [:text {:x 10 :y 130 :font-size 16 :class "game-score"} "next"]
      [:svg {:x -40 :y 120}
        [renderer/draw-falling-piece (renderer/calculate-params [1.5 3 4] [200 200] [0 0]) @next-piece]]
      ]
      )))

(def left-column-width 150)

(defn game-view []
  (let [pit-size (re-frame/subscribe [:app-data [:game-state :pit-size]])
        anchored-blocks (re-frame/subscribe [:app-data [:game-state :anchored-blocks]])
        falling-piece (re-frame/subscribe [:app-data [:game-state :falling-piece]])
        window-size (re-frame/subscribe [:app-data [:window-size]])
        mode (re-frame/subscribe [:app-data [:game-state :mode]])]
    (fn []
      (let [params (renderer/calculate-params @pit-size [600 600] [0 0])]
          [:svg {:x left-column-width :y 0 :width (- (:width @window-size) left-column-width) :height (dec (:height @window-size)) :overflow "hidden" :viewBox "0 0 600 600"}
            [renderer/draw-pit-walls params @falling-piece @mode]
            [renderer/draw-anchored params @anchored-blocks @falling-piece @mode]
  		      (when @falling-piece [renderer/draw-falling-piece params @falling-piece])
          ]
        ))))

(defn game-panel-inner [blurred?]
  (let [anchored-blocks (re-frame/subscribe [:app-data [:game-state :anchored-blocks]])
        pit-size (re-frame/subscribe [:app-data [:game-state :pit-size]])
        window-size (re-frame/subscribe [:app-data [:window-size]])
        mode (re-frame/subscribe [:app-data [:game-state :mode]])]
    (fn [blurred?]
      [:svg {:width (dec (:width @window-size)) :height (dec (:height @window-size)) :overflow "hidden" }
        [:defs
          [:filter {:id "blurFilter" :x "0" :y "0"
            :dangerouslySetInnerHTML {:__html "<feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"5\">"}}
            ]]
        [:g {:class (if blurred? "blurred" "")}
          [level-display]
          [score-display]
          (when (= :normal @mode) [next-piece-display])
          [renderer/draw-block-levels (:height @window-size) left-column-width @pit-size @anchored-blocks]
          [game-view]
          ]])))

(defn game-panel []
  [game-panel-inner false])

;; new game

(defn get-selected-entry-name [menu-data]
  (let [entries (get-in menu-data [:entries])
        selected-index (get-in menu-data [:selected-entry])]
        (nth entries selected-index)))

(defn text-with-spaces [attributes text]
  ;; we want to do this
  ;;[:text {:x 10 :y 25 :font-size 20 :class "option" :xml:space "preserve"} label]
  ;; but alas react does not allow the xml:space attribute, so we have to do this
  [:g {:dangerouslySetInnerHTML {:__html (str "<text x=" (:x attributes)
                                                  " y=" (:y attributes)
                                                  " font-size=" (:font-size attributes)
                                                  " class='" (:class attributes)
                                                  "' xml:space='preserve'>" text "</text>")}}]
  )

(defn menu-label
  ([label] (menu-label label 600))
  ([label width] (menu-label label width 20 0))
  ([label width font-size left-margin]
      [:svg {:width width :height (+ font-size 10)}
        [:rect {:x left-margin :y 0 :width width :height (+ font-size 10) :class "option"}]
        [text-with-spaces {:x (+ left-margin 10) :y (+ font-size 5) :font-size font-size :class "option"} label]
        ]
  ))

(defn menu-item [name label enabled?]
  (let [menu-data (re-frame/subscribe [:panel-data [:menu-data]])]
    (fn [name label enabled?]
      (let [selected? (= name (get-selected-entry-name @menu-data))
            locked? (:locked-entry? @menu-data)
            class (str "action option " (if selected? "selected-option " "") (if (and enabled? (or selected? (not locked?))) "" "disabled-option"))]
      [:svg {:width 600 :height 30 :on-mouse-move #(when (and enabled? (not locked?)) (re-frame/dispatch [:select-menu-entry name]))
        :on-click #(when (not locked?) (re-frame/dispatch [:fire-selected-menu-entry]))}
        [:rect {:x 0 :y 0 :width 600 :height 30 :class class}]
        [:text {:x 10 :y 25 :font-size 20 :class class} label]
        ]

      )
  )))


(defn cycling-menu-item [name label selected-option enabled?]
    (let [menu-data (re-frame/subscribe [:panel-data [:menu-data]])]
      (fn [name label selected-option enabled?]
        (let [selected? (= name (get-selected-entry-name @menu-data))
              locked? (:locked-entry? @menu-data)
              class (str "option " (if selected? "selected-option " "") (if (and enabled? (or selected? (not locked?))) "" "disabled-option"))]
      [:svg {:width 600 :height 30 :on-mouse-move #(when (and enabled? (not locked?)) (re-frame/dispatch [:select-menu-entry name]))}
        [:rect {:x 0 :y 0 :width 600 :height 30 :class class}]
        [:text {:x 10 :y 25 :font-size 20 :class (str "label " class)} label]
        [:text {:x 300 :y 25 :font-size 20 :class (str class " action") :on-click #(when (not locked?) (re-frame/dispatch [:update-selected-menu-entry :dec]))} "<"]
        [:text {:x 340 :y 25 :font-size 20 :class (str "label " class)} selected-option]
        [:text {:x 580 :y 25 :font-size 20 :class (str class " action") :on-click #(when (not locked?) (re-frame/dispatch [:update-selected-menu-entry :inc]))} ">"]
        ]
        )
    )))


(defn set-key-menu-item [name label selected-option enabled?]
    (let [menu-data (re-frame/subscribe [:panel-data [:menu-data]])
          caret-visible? (re-frame/subscribe [:panel-data [:menu-data :binding-field]])]
      (fn [name label selected-option enabled?]
        (let [selected? (= name (get-selected-entry-name @menu-data))
              locked? (:locked-entry? @menu-data)
              class (str "action option " (if selected? "selected-option " "") (if (and enabled? (or selected? (not locked?))) "" "disabled-option"))]
      [:svg {:width 600 :height 30 :on-mouse-move #(when (and enabled? (not locked?)) (re-frame/dispatch [:select-menu-entry name]))
              :on-click #(when (not locked?) (re-frame/dispatch [:fire-selected-menu-entry]))}
        [:rect {:x 0 :y 0 :width 600 :height 30 :class class}]
        [:text {:x 10 :y 25 :font-size 20 :class class} label]
        [text-with-spaces {:x 340 :y 25 :font-size 20 :class class} (cond (and @caret-visible? selected? locked?) "_" (and selected? locked?) " " :else selected-option)]
        ]
        )
    )))


(defn pretty-pit-size [[x y z]] (str x "x" y "x" z))


(defn menu-view  [window-size title & children]
    [re-com/v-box :children [
      [game-panel-inner true]
      [modal/modal-panel
         :backdrop-color "gray"
         :backdrop-opacity 0.4
         :wrap-nicely? false
         :child
      [re-com/v-box
            :width (str (:width window-size) "px")
            :class "menu-background"
            :align :center
            :children (concat [
        [re-com/gap :size "30px"]
        [ttt-logo]
        (when title [re-com/title
         :label title
         :level :level1])
         [re-com/gap :size "30px"]] children)
        ]]]])

(defn new-game-panel []
  (let [panel-data (re-frame/subscribe [:panel-data])
        window-size (re-frame/subscribe [:app-data [:window-size]])]
    (fn []
      [menu-view @window-size "new game"
        [cycling-menu-item :new-game-pit-size-entry "pit size" (pretty-pit-size (nth db/pit-sizes (:pit-size @panel-data))) true]
        [cycling-menu-item :new-game-level-entry "level" (nth db/levels (:level @panel-data)) true]
        [cycling-menu-item :new-game-mode-entry "mode" (name (nth db/modes (:mode @panel-data))) true]
        [cycling-menu-item :new-game-handicap-entry "handicap" (nth db/handicaps (:handicap @panel-data)) true]
        [cycling-menu-item :new-game-piece-set-entry "piece set" (name (nth (keys pieces/piece-sets) (:piece-set @panel-data))) true]
        [menu-item :new-game-start-game-entry "start game" true]
        [menu-item :new-game-cancel-entry "back" true]
        [re-com/gap :size "30px"]
        ])))


(defn pad-left [s n]
  (apply str (concat (take (max 0 (- n (count s))) (repeat " ")) s)))

(defn high-scores-table []
  (let [high-scores (re-frame/subscribe [:app-data [:high-scores]])]
    (fn []
      [re-com/v-box :children
        (concat
          [[menu-label "high scores" 500 12 220]]
          (for [[n h] @high-scores]
            [re-com/h-box :children [
                [menu-label n 400 8 80]
                [menu-label (pad-left (str h) 9) 200 8 0]
            ]]
            ))]
      )))

(defn menu-link [title url]
  [re-com/hyperlink
  :label title
   :on-click #(accountant/navigate! url)])

(defn menu-panel []
  (let [paused (re-frame/subscribe [:app-data [:game-state :paused]])
        window-size (re-frame/subscribe [:app-data [:window-size]])]
    (fn []
      [menu-view @window-size nil
          [menu-item :new-game-entry "new game" true]
          [menu-item :resume-entry "resume" @paused]
          [menu-item :options-entry "options" true]
          [menu-item :credits-entry "credits" true]
          [re-com/gap :size "30px"]
          [high-scores-table]
          [re-com/gap :size "30px"]
;            [all-data-explorer]
        ])))

(defn input-field [name enabled? width]
  (let [value (re-frame/subscribe [:panel-data [name]])
        caret-visible? (re-frame/subscribe [:panel-data [:menu-data :name-field]])]
    (fn [name enabled? width]
      [:svg {:width width :height 30 :on-click #(when enabled? (re-frame/dispatch [:select-menu-entry name]))}
            [:rect {:x 0 :y 0 :width width :height 30 :class "option"}]
            [text-with-spaces {:x 10 :y 25 :font-size 20 :class "option"} (if @caret-visible? (str @value "_") @value)]
            ]
        )))

(defn game-over-panel []
  (let [window-size (re-frame/subscribe [:app-data [:window-size]])]
    (fn []
      [menu-view @window-size "game over"
                  [re-com/h-box :children [
                    [menu-label "your name:" 300]
                    [input-field :player-name true 300]]]
                  [menu-item :game-over-entry "continue" true]
                  [re-com/gap :size "30px"]
        ])))


(def char-codes {
    13 "enter"
    27 "esc"
    37 "left"
    38 "up"
    39 "right"
    40 "down"
    32 "space"
    8  "backspace"
  })

(defn get-key-binding [m label]
  (let [kc (first (first (filter (fn [[k v]] (= v label)) m)))]
    (or (char-codes kc) (. js/String fromCharCode kc))))

(defn options-panel []
  (let [panel-data (re-frame/subscribe [:panel-data])
        window-size (re-frame/subscribe [:app-data [:window-size]])]
    (fn []
      [menu-view @window-size "options"
        [cycling-menu-item :sound-on-entry "sound" ({true "on" false "off"} (:sound-on? @panel-data)) true]
        [cycling-menu-item :volume-entry "volume" ({0 "1/5" 1 "2/5" 2 "3/5" 3 "4/5" 4 "5/5"} (:volume @panel-data)) true]
        [set-key-menu-item :move-left-entry "move left" (get-key-binding (get-in @panel-data [:key-bindings]) :left) true]
        [set-key-menu-item :move-right-entry "move right" (get-key-binding (get-in @panel-data [:key-bindings]) :right) true]
        [set-key-menu-item :move-up-entry "move up" (get-key-binding (get-in @panel-data [:key-bindings]) :up) true]
        [set-key-menu-item :move-down-entry "move down" (get-key-binding (get-in @panel-data [:key-bindings]) :down) true]
        [set-key-menu-item :rotate-x-entry "rotate x+" (get-key-binding (get-in @panel-data [:key-bindings]) :rotate-x) true]
        [set-key-menu-item :rotate-y-entry "rotate y+" (get-key-binding (get-in @panel-data [:key-bindings]) :rotate-y) true]
        [set-key-menu-item :rotate-z-entry "rotate z+" (get-key-binding (get-in @panel-data [:key-bindings]) :rotate-z) true]
        [set-key-menu-item :rotate-x-reverse-entry "rotate x-" (get-key-binding (get-in @panel-data [:key-bindings]) :rotate-x-reverse) true]
        [set-key-menu-item :rotate-y-reverse-entry "rotate y-" (get-key-binding (get-in @panel-data [:key-bindings]) :rotate-y-reverse) true]
        [set-key-menu-item :rotate-z-reverse-entry "rotate z-" (get-key-binding (get-in @panel-data [:key-bindings]) :rotate-z-reverse) true]
        [set-key-menu-item :drop-entry "drop piece" (get-key-binding (get-in @panel-data [:key-bindings]) :drop) true]
        [menu-item :reset-defaults-entry "reset defaults" true]
        [menu-item :option-accept-entry "save" true]
        [menu-item :option-cancel-entry "cancel" true]
        [re-com/gap :size "30px"]
        ])))


;; credits
(defn credits-panel []
  (let [window-size (re-frame/subscribe [:app-data [:window-size]])]
    (fn []
      [menu-view @window-size nil
                    [menu-label "TTT: a clone of 1989's blockout" 600 14 0]
                    [menu-label "by california dreams" 600 14 0]
                                        [re-com/gap :size "30px"]
                    [menu-label "reimagined in 2016 by alberto bengoa" 600 14 0]
                                        [re-com/gap :size "30px"]
                    [menu-label "sounds made with bfxr" 600 14 0]
                    [menu-label "press start 2p font by codeman38" 600 14 0]
                    [menu-label "built with clojurescript" 600 14 0]
                    [menu-label "using re-frame + reagent + react" 600 14 0]

                    [re-com/gap :size "30px"]
                    [menu-item :credits-cancel-entry "back" true]

                    [re-com/gap :size "30px"]
          ])))


;; main
(def panels
  {
    :menu-panel menu-panel
    :credits-panel credits-panel
    :new-game-panel new-game-panel
    :options-panel options-panel
    :game-panel game-panel
    :game-over-panel game-over-panel
  })


(defn main-panel []
  (let [panel-data (re-frame/subscribe [:current-panel-data])]
    (fn []
      (let [{:keys [active-panel panel-params]} @panel-data
            panel (get panels active-panel)]
            [:div {:style {:height "100%" :width "100%"}}
        [re-com/box
          :min-height "100%"
          :min-width "100%"
          :child
          (if panel
            [panel panel-params]
            [:div]
            )]]))))
