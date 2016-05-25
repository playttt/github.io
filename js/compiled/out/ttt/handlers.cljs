(ns ttt.handlers
    (:require [re-frame.core :as re-frame]
              [ttt.db :as db]
              [ttt.urls :as urls]
              [ttt.pieces :as pieces]
              [ttt.gamelogic :as gamelogic]
              [ttt.audio :as audio]
              [accountant.core :as accountant]
              [alandipert.storage-atom :refer [local-storage]]))

(def durable-data (local-storage (atom {:auth-data []}) :prefs))

(declare menu-entries)

(defn resume [db]
  (when (get-in db [:app-data :game-state :paused])
    (do (accountant/navigate! (urls/game))
      (assoc-in db [:app-data :game-state :paused] false)))
    db)



(defn select-next-entry [db]
  (let [entries (get-in db [:panel-data :menu-data :entries])
        selected-entry (get-in db [:panel-data :menu-data :selected-entry])]
        (audio/play db :menu-change)
        (assoc-in db [:panel-data :menu-data :selected-entry] (rem (inc selected-entry) (count entries)))))

(defn select-previous-entry [db]
  (let [entries (get-in db [:panel-data :menu-data :entries])
        selected-entry (get-in db [:panel-data :menu-data :selected-entry])]
        (audio/play db :menu-change)
        (assoc-in db [:panel-data :menu-data :selected-entry] (rem (+ (count entries) (dec selected-entry)) (count entries)))))

(defn fire-entry-action [db]
  (let [entries (get-in db [:panel-data :menu-data :entries])
        selected-entry (get-in db [:panel-data :menu-data :selected-entry])
        entry-name (nth entries selected-entry)]
        (audio/play db :menu-accept)
        ((get-in menu-entries [entry-name :action]) db)))

(defn validate-menu-options [db]
  (let [panel-data (get-in db [:panel-data])
        pit-size-option (:pit-size panel-data)
        handicap-option (:handicap panel-data)]
    (if (and pit-size-option handicap-option)
      (let [[_ _ d] (nth db/pit-sizes pit-size-option)]
        (if (>= handicap-option d)
          (assoc-in db [:panel-data :handicap] (dec d))
          db))
      db
    )))

(defn update-selected-option [db update-fn]
    (let [entries (get-in db [:panel-data :menu-data :entries])
          selected-entry (get-in db [:panel-data :menu-data :selected-entry])
          entry-name (nth entries selected-entry)
          {:keys [path options switch-fn]} (get menu-entries entry-name)
          change-value-fn (fn [db]
                            (if switch-fn
                              (assoc-in db path (switch-fn (get-in db path)))
                              (let [option-count (count (options db))]
                                (assoc-in db path (rem (+ option-count (update-fn (get-in db path))) option-count)))))]
          (audio/play db :value-change)
          (-> db
            (change-value-fn)
            (validate-menu-options))
  ))

(defn replace-label-key [m label new-key]
  (if (m new-key)
    m
    (reduce merge (map (fn [[k v]] (if (= v label) {new-key v} {k v})) m))))

(defn set-key-binding [db kc]
  (let [entries (get-in db [:panel-data :menu-data :entries])
        selected-entry (get-in db [:panel-data :menu-data :selected-entry])
        entry-name (nth entries selected-entry)
        {:keys [path binding-label]} (get menu-entries entry-name)]
          (audio/play db :value-change)
          (update-in db path replace-label-key binding-label kc)))

(def back-fn (fn [db] (accountant/navigate! (urls/menu)) db))

(defn key-binding-specs [label]
  {:action (fn [db] (assoc-in db [:panel-data :menu-data :locked-entry?] true))
   :path [:panel-data :key-bindings]
   :binding-label label})

(def menu-entries {
  :new-game-entry {:action (fn [db] (accountant/navigate! (urls/new-game)) db)}
  :resume-entry {:action resume}
  :options-entry {:action (fn [db] (accountant/navigate! (urls/options)) db)}
  :credits-entry {:action (fn [db] (accountant/navigate! (urls/credits)) db)}
  :new-game-pit-size-entry {:action (fn [db] (update-selected-option db inc))
                             :path [:panel-data :pit-size]
                             :options (fn [db] db/pit-sizes)}
  :new-game-level-entry  {:action (fn [db] (update-selected-option db inc))
                           :path [:panel-data :level]
                           :options (fn [db] db/levels)}
  :new-game-mode-entry  {:action (fn [db] (update-selected-option db inc))
                         :path [:panel-data :mode]
                         :options (fn [db] db/modes)}
  :new-game-handicap-entry  {:action (fn [db] (update-selected-option db inc))
                             :path [:panel-data :handicap]
                             :options (fn [db]
                                        (let [[_ _ d] (nth db/pit-sizes (get-in db [:panel-data :pit-size]))]
                                          (range d)))}
  :new-game-piece-set-entry  {:action (fn [db] (update-selected-option db inc))
                            :path [:panel-data :piece-set]
                            :options (fn [db] (keys pieces/piece-sets))}
  :new-game-start-game-entry {:action (fn [db] (re-frame/dispatch [:start-game]) db)}
  :new-game-cancel-entry {:action back-fn}
  :game-over-entry {:action (fn [db]
                (re-frame/dispatch [:add-high-score (get-in db [:panel-data :player-name]) (get-in db [:app-data :game-state :score])])
                (accountant/navigate! (urls/menu)) db)}
  ; :player-name-entry  {:action identity
  ;                          :path [:panel-data :player-name]
  ;                          :options (fn [db] [])}

  :sound-on-entry {:action (fn [db] (re-frame/dispatch [:toggle-sound]) db)
                   :path [:panel-data :sound-on?]
                   :switch-fn not}
  :volume-entry {:action (fn [db] (update-selected-option db inc))
                  :path [:panel-data :volume]
                  :options #(range 5)}
  :move-left-entry (key-binding-specs :left)
  :move-right-entry (key-binding-specs :right)
  :move-up-entry (key-binding-specs :up)
  :move-down-entry (key-binding-specs :down)
  :rotate-x-entry (key-binding-specs :rotate-x)
  :rotate-y-entry (key-binding-specs :rotate-y)
  :rotate-z-entry (key-binding-specs :rotate-z)
  :rotate-x-reverse-entry (key-binding-specs :rotate-x-reverse)
  :rotate-y-reverse-entry (key-binding-specs :rotate-y-reverse)
  :rotate-z-reverse-entry (key-binding-specs :rotate-z-reverse)
  :drop-entry (key-binding-specs :drop)
  :reset-defaults-entry {:action (fn [db] (re-frame/dispatch [:reset-default-options]) db)}
  :option-accept-entry {:action (fn [db] (re-frame/dispatch [:commit-options]) (back-fn db))}
  :option-cancel-entry {:action back-fn}
  :credits-cancel-entry {:action back-fn}
  })

(re-frame/register-handler
 :toggle-sound
 (fn  [db _]
      (update-in db [:panel-data :sound-on?] not)))


(re-frame/register-handler
 :reset-default-options
 (fn  [db _]
    (-> db
      ;(assoc-in [:app-data :options] db/default-options)
      (assoc-in [:panel-data] (merge (get-in db [:panel-data]) db/default-options))
      )))


(re-frame/register-handler
 :commit-options
 (fn  [db _]
   (let [new-options (dissoc (get-in db [:panel-data]) :menu-data)]
    (swap! durable-data assoc :options new-options)
    (back-fn
        (assoc-in db [:app-data :options] new-options)))))


(re-frame/register-handler
 :select-menu-entry
 (fn  [db [_ name]]
   (let [entries (get-in db [:panel-data :menu-data :entries])
         index  (.indexOf (clj->js entries) (clj->js name))]
      (assoc-in db [:panel-data :menu-data :selected-entry] index)
   )))

(re-frame/register-handler
 :fire-selected-menu-entry
 (fn  [db _]
   (fire-entry-action db)))


(re-frame/register-handler
 :update-selected-menu-entry
 (fn  [db [_ action]]
   (update-selected-option db ({:inc inc :dec dec} action))))

(defn start-caret-timer [db timer-field-id field-id]
  (let [delay 300
        timer-id (js/setInterval #(re-frame/dispatch [:caret-tick field-id]) delay)]
        (assoc-in db [:panel-data :menu-data timer-field-id] timer-id)))

(defn stop-caret-timer [db timer-field-id]
  (if-let [timer-id (get-in db [:panel-data :menu-data timer-field-id])]
    (do
      (js/clearInterval timer-id)
      (assoc-in db [:panel-data :menu-data timer-field-id] nil))
    db))

(def in-fns {
    :new-game-panel #(assoc-in % [:panel-data]
                { :pit-size 1 :level 0 :mode 0 :handicap 0 :piece-set 0
                  :menu-data {
                        :entries [:new-game-pit-size-entry
                                  :new-game-level-entry
                                  :new-game-mode-entry
                                  :new-game-handicap-entry
                                  :new-game-piece-set-entry
                                  :new-game-start-game-entry
                                  :new-game-cancel-entry]
                        :selected-entry 0}
                })
    :game-panel gamelogic/start-timer
    :menu-panel #(assoc-in % [:panel-data]
          { :menu-data {
                  :entries
                      (if (get-in % [:app-data :game-state :paused])
                        [:new-game-entry :resume-entry :options-entry :credits-entry]
                        [:new-game-entry :options-entry :credits-entry])
                  :selected-entry 0}
          })
    :game-over-panel #(-> %
                        (assoc-in [:panel-data]
                          { :player-name ""
                            :menu-data {
                                  :name-field false
                                  :entries [;:player-name
                                            :game-over-entry]
                                  :selected-entry 0}
                          })
                        (start-caret-timer :name-field-timer :name-field))
    :options-panel #(-> %
                      (assoc-in [:panel-data]
                        (merge (get-in % [:app-data :options])
                          {:menu-data {
                                :entries [:sound-on-entry
                                          :volume-entry
                                          :move-left-entry
                                          :move-right-entry
                                          :move-up-entry
                                          :move-down-entry
                                          :rotate-x-entry
                                          :rotate-y-entry
                                          :rotate-z-entry
                                          :rotate-x-reverse-entry
                                          :rotate-y-reverse-entry
                                          :rotate-z-reverse-entry
                                          :drop-entry
                                          :reset-defaults-entry
                                          :option-accept-entry
                                          :option-cancel-entry]
                                :selected-entry 0
                                :locked-entry? false}}))
                        (start-caret-timer :binding-timer :binding-field)
                        )
    :credits-panel #(assoc-in % [:panel-data]
          { :menu-data {
                  :entries [:credits-cancel-entry]
                  :selected-entry 0}
          })
    })


(def out-fns {
  :game-panel gamelogic/stop-timer
  :game-over-panel #(stop-caret-timer % :name-field-timer)
  :options-panel #(stop-caret-timer % :binding-timer)
  })

(def accepted-keys-name (set (concat (range 65 91) (range 48 58) [32])))

(def key-down-fns {
  :credits-panel (fn [db kc]
                    (case (get-in db [:app-data :options :key-bindings kc])
                      :menu (do (accountant/navigate! (urls/menu)) db)
                      :accept (fire-entry-action db)
                      ;; else
                      db))
  :new-game-panel  (fn [db kc]
                    (case (get-in db [:app-data :options :key-bindings kc])
                      :menu     (do (accountant/navigate! (urls/menu)) db)
                      :right   (update-selected-option db inc)
                      :left (update-selected-option db dec)
                      :up (select-previous-entry db)
                      :down (select-next-entry db)
                      :accept (fire-entry-action db)
                      ;; else
                      db))
  :game-panel (fn [db kc]
                    (case (get-in db [:app-data :options :key-bindings kc])
                        :menu (do
                                  (accountant/navigate! (urls/menu))
                                  (assoc-in db [:app-data :game-state :paused] true))
                        :up  (gamelogic/move-piece db :up)
                        :down (gamelogic/move-piece db :down)
                        :left (gamelogic/move-piece db :left)
                        :right (gamelogic/move-piece db :right)
                        :rotate-x (gamelogic/rotate-piece db :x :clockwise)
                        :rotate-y (gamelogic/rotate-piece db :y :clockwise)
                        :rotate-z (gamelogic/rotate-piece db :z :clockwise)
                        :rotate-x-reverse (gamelogic/rotate-piece db :x :counterclockwise)
                        :rotate-y-reverse (gamelogic/rotate-piece db :y :counterclockwise)
                        :rotate-z-reverse (gamelogic/rotate-piece db :z :counterclockwise)
                        :drop (gamelogic/drop-piece db)
                        ;; else
                        db
                        ))

    :menu-panel (fn [db kc]
                      (case (get-in db [:app-data :options :key-bindings kc])
                        :menu (resume db)
                        :up (select-previous-entry db)
                        :down (select-next-entry db)
                        :accept (fire-entry-action db)
                        :right (fire-entry-action db)
                        ;; else
                        db))
    :game-over-panel (fn [db kc]
                      (case (get-in db [:app-data :options :key-bindings kc])
                        :accept (fire-entry-action db)
                        :backspace (update-in db [:panel-data :player-name] #(apply str (butlast %)))
                        ;; else
                        (update-in db [:panel-data :player-name]
                                   (fn [n]
                                     (if (and (some #{kc} accepted-keys-name) (< (count n) 13))
                                            (do (audio/play db :menu-change)
                                              (clojure.string/lower-case (str n (. js/String fromCharCode kc))))
                                              n)))))
    :options-panel (fn [db kc]
                      (if (get-in db [:panel-data :menu-data :locked-entry?])
                        (case (get-in db [:app-data :options :key-bindings kc])
                          :menu (assoc-in db [:panel-data :menu-data :locked-entry?] false)
                          ;; else
                          (let [new-db (set-key-binding db kc)]
                            (if (= db new-db)
                              db
                              (assoc-in new-db [:panel-data :menu-data :locked-entry?] false))))
                        (case (get-in db [:app-data :options :key-bindings kc])
                          :menu  (back-fn db)
                          :right  (update-selected-option db inc)
                          :left (update-selected-option db dec)
                          :up (select-previous-entry db)
                          :down (select-next-entry db)
                          :accept (fire-entry-action db)
                          ;; else
                          db)))
})

; (def touch-fns {
;   :game-panel (fn [db type direction e]
;       (case type
;           :menu (do
;                     (accountant/navigate! (urls/menu))
;                     (assoc-in db [:app-data :game-state :paused] true))
;           :pan (cond
;                   (= direction (.-DIRECTION_UP js/Hammer)) (gamelogic/move-piece db :up)
;                   (= direction (.-DIRECTION_DOWN js/Hammer)) (gamelogic/move-piece db :down)
;                   (= direction (.-DIRECTION_LEFT js/Hammer)) (gamelogic/move-piece db :left)
;                   (= direction (.-DIRECTION_RIGHT js/Hammer)) (gamelogic/move-piece db :right)
;                   :else db)
;
;           :rotate-x (gamelogic/rotate-piece db :x :clockwise)
;           :rotate-y (gamelogic/rotate-piece db :y :clockwise)
;           :rotate (js/alert (.-rotation e)) ;(gamelogic/rotate-piece db :z :clockwise)
;           :rotate-x-reverse (gamelogic/rotate-piece db :x :counterclockwise)
;           :rotate-y-reverse (gamelogic/rotate-piece db :y :counterclockwise)
;           :rotate-z-reverse (gamelogic/rotate-piece db :z :counterclockwise)
;            :tap (gamelogic/drop-piece db)
;           ;; else
;           db
;           ))
;   })

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   (let [hs (get @durable-data :high-scores db/default-high-scores)
         options (get @durable-data :options db/default-options)]
         (-> db/default-db
           (assoc-in [:app-data :high-scores] hs)
           (assoc-in [:app-data :options] options))
         ;db/default-db
         )))

(re-frame/register-handler
 :window-resized
 (fn  [db [_ w h]]
   (assoc-in db [:app-data :window-size] {:width w :height h})))

(defn set-callback-url [db callback]
  (assoc-in db [:navigation-data :callback-url] callback))

(defn clean-navigation-data [db]
  (set-callback-url db nil))

(defn get-callback-url [db]
  (get-in db [:navigation-data :callback-url]))

(re-frame/register-handler
 :set-active-panel
 (fn [db [_ active-panel params]]
   (let [in-fn (or (in-fns active-panel) identity)
         out-fn (or (out-fns (get-in db [:navigation-data :active-panel])) identity)]
     (-> db
       (out-fn)
       (assoc-in [:navigation-data :active-panel] active-panel)
       (assoc-in [:navigation-data :panel-params] params)
       (assoc-in [:panel-data] {})
       (in-fn)
       ))))

(re-frame/register-handler
 :update-panel-data
 (fn [db [_ path value]]
   (assoc-in db (vec (concat [:panel-data] path)) value)
   ))

(defn generate-handicap [w h d]
  (vec (remove nil?
    (for [x (range w) y (range h) z (range d)]
      (when (> (rand) 0.75) [x y z])))))

(re-frame/register-handler
 :start-game
 (fn [db [_]]
   (let [panel-data (get-in db [:panel-data])
         [w h d] (nth db/pit-sizes (:pit-size panel-data))
         game-data {:level (nth db/levels (:level panel-data))
                    :mode (nth db/modes (:mode panel-data))
                    :pit-size [w h d]
                    :score (nth db/level-scores (:level panel-data))
                    :anchored-blocks (generate-handicap w h (min d (nth db/handicaps (:handicap panel-data))))
                    :falling-piece nil
                    :piece-set (nth (keys pieces/piece-sets) (:piece-set panel-data))
                    :next-piece nil
                    :playing? true
                   }]
     (accountant/navigate! (urls/game))
     (-> db
       (assoc-in [:app-data :game-state] game-data)
       (gamelogic/add-new-piece))
     )))

(re-frame/register-handler
 :key-down
 (fn [db [_ e]]
   (let [key-code (.-keyCode e)
         key-fn (get key-down-fns (get-in db [:navigation-data :active-panel]))
         new-value (key-fn db key-code)]
   (if new-value
     new-value
     (do
        (audio/play db :error)
        db)))))


; (re-frame/register-handler
;  :touch
;  (fn [db [_ type e]]
;    (let [direction (.-offsetDirection e)
;          touch-fn (get touch-fns (get-in db [:navigation-data :active-panel]))
;          new-value (touch-fn db type direction)]
;    (if new-value
;        new-value
;      (do
;         (audio/play db :error)
;         db)))))



(re-frame/register-handler
 :tick
 (fn [db _]
    (audio/play db :tick)
    (-> db
       (assoc-in [:panel-data :tick] (.getTime (js/Date.)))
       (gamelogic/update-game)
    )))


(re-frame/register-handler
 :caret-tick
 (fn [db [_ field-id]]
  (-> db
	   (update-in [:panel-data :menu-data field-id] #(if (nil? %) false (not %))))))

(re-frame/register-handler
 :resume-game
 (fn [db _]
   (accountant/navigate! (urls/game))
   (assoc-in db [:app-data :game-state :paused] false)))


(re-frame/register-handler
 :add-high-score
 (fn [db [_ name high-score]]
   (let [new-db (update-in db [:app-data :high-scores]
                            (fn [current]
                              (take 8 (reverse (sort-by second (conj current [name high-score]))))
                              ))]
      (swap! durable-data assoc :high-scores (get-in new-db [:app-data :high-scores]))
      new-db)))
