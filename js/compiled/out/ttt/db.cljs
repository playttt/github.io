(ns ttt.db)


(def pit-sizes [[3 3 10] [5 5 12] [7 7 15]])
(def levels (range 10))
(def handicaps (range 19))
(def drop-times [3 2.5 2 1.5 1 0.85 0.75 0.5 0.3 0.15])
(def level-scores [0,1000,2000,3000,4000,5000,6000,7000,8000,9000])
(def modes [:normal :hard])

(def default-key-bindings  {
    13 :accept            ;; enter
    27 :menu              ;; esc
    37 :left              ;; left
    38 :up                ;; up
    39 :right             ;; right
    40 :down              ;; down
    32 :drop              ;; space
    65 :rotate-x-reverse  ;; a
    68 :rotate-z-reverse  ;; d
    69 :rotate-z          ;; e
    81 :rotate-x          ;; q
    87 :rotate-y          ;; w
    83 :rotate-y-reverse  ;; s
    8  :backspace         ;; backspace
})

(def default-high-scores [
  ["ms fantastic" 8000]
  ["mr awesome" 7000]
  ["awesome jr" 6000]
  ["mini awesome" 5000]
  ["plain great" 4000]
  ["not so great" 3000]
  ["so-so" 2000]
  ["mr n00b" 1000]
])

(def default-options {
  :sound-on? true
  :volume 2
  :key-bindings default-key-bindings
})

(def default-db
  {:app-data {
        :window-size {:width (.-innerWidth js/window)
                      :height (.-innerHeight js/window)}
        :game-state {:level 0
                   :pit-size [5 5 12]
                   :score 0
                   :anchored-blocks []
                   :falling-piece nil
                   :next-piece nil
                   :playing? true
                  }
        :high-scores default-high-scores
        :options default-options
      }
   :panel-data {}})
