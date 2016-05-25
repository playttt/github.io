(ns ttt.urls)

(def ^dynamic naked-urls? false)

(defn naked [url-str]
  (apply str (rest url-str)))

(defn no-params-url [url-str]
  (fn
    ([] url-str)
    ([params] url-str)))

(def menu (no-params-url "#/"))
(def credits (no-params-url "#/about"))
(def new-game (no-params-url "#/newgame"))
(def options (no-params-url "#/options"))
(def game (no-params-url "#/game"))
(def game-over (no-params-url "#/gameover"))

(def panel-urls {
  :menu-panel menu
  :credits-panel credits
  :new-game-panel new-game
  :options-panel options
  :game-panel game
  :game-over-panel game-over
  })

(defn url-for-panel [panel params]
  (apply (panel-urls panel) params))
