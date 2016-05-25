(ns ttt.pieces
    (:require [ttt.edges :as edges
              :refer [rotate-edge INFR INDE INTR INIZ SUFR SUDE SUTR SUIZ IZFR IZTR DEFR DETR]]))

(defn move-point [[x y z] [dx dy dz]]
  [(+ x dx) (+ y dy) (+ z dz)])

(defn move-piece [piece delta]
  (update-in piece [:start] move-point delta))

(defn place-piece [point piece]
  (assoc-in piece [:start] point))

(def block-rotations {
  :x {
    :clockwise (fn [[bx by bz]] [bx (- bz) by])
    :counterclockwise (fn [[bx by bz]] [bx bz (- by)])
  }
  :y {
    :clockwise (fn [[bx by bz]] [(- bz) by bx])
    :counterclockwise (fn [[bx by bz]] [bz by (- bx)])
  }
  :z {
    :clockwise (fn [[bx by bz]] [by (- bx) bz])
    :counterclockwise (fn [[bx by bz]] [(- by) bx bz])
  }
})

(defn rotate-block [block axis direction]
	((get-in block-rotations [axis direction]) block))

(defn rotate-piece [piece axis direction]
  (-> piece
    (update-in [:blocks] (fn [blocks] (mapv (fn [block] (rotate-block block axis direction)) blocks)))
    (update-in [:edges] (fn [edges] (mapv (fn [edge-list]
											(mapv #(rotate-edge axis direction %) edge-list))
										  edges)))))

(defn piece-span [plane piece]
  (let [coord-index ({:x 0 :y 1 :z 2} plane)
        coords-list (map #(nth % coord-index) (:blocks piece))]
    (- (reduce max coords-list) (reduce min coords-list))))

(defn get-blocks [piece]
  (let [start (:start piece)]
    (mapv #(move-point start %) (:blocks piece))))

(defn get-blocks-under-piece [piece]
  (map (fn [[bx by bz]] [bx by (dec bz)]) (get-blocks piece)))

(defn contains-point [piece point]
  (some #{point} (:blocs piece)))



(defn get-neighbor-blocks [blocks [x y z] edge]
  (let [targets (map #(move-point % [x y z]) (get edges/edge-neighbors edge))]
    (filter #(some (set targets) #{%}) blocks)))

(defn edge-visible? [blocks point edge]
  (let [sb (get-neighbor-blocks blocks point edge)]
    (even? (count sb))))

(defn calculate-piece-edges [piece]
  (let [edges (map (fn [b] (vec (filter #(edge-visible? (:blocks piece) b %) (keys edges/edge-neighbors)))) (:blocks piece))]
    (assoc piece :edges edges)))

(defn min-max-vals [vs]
  [(reduce min vs) (reduce max vs)])

(defn calculate-center [vs]
  (quot (reduce + (min-max-vals vs)) 2)) ;; replace this using the fn piece-span

(defn center-piece [{:keys [blocks] :as piece}]
    (let [center-x (calculate-center (map first blocks))
          center-y (calculate-center (map second blocks))
          center-z (calculate-center (map (fn [[_ _ z]] z) blocks))]
    {:blocks (map #(move-point % [(- center-x) (- center-y) (- center-z)]) blocks)}))


(defn create-piece [& blocks]
  (-> {:blocks blocks}
    (center-piece)
    (assoc :start [0 0 0])
    (calculate-piece-edges)))


(def bar-piece (create-piece [0 0 0] [0 1 0] [0 2 0] [0 3 0]))
(def cube-piece (create-piece [0 0 0] [0 0 1] [1 0 0] [1 0 1] [0 1 0] [0 1 1] [1 1 0] [1 1 1]))
(def l-piece (create-piece [0 0 0] [1 0 0] [0 1 0] [0 2 0]))
(def s-piece (create-piece [0 0 0] [0 1 0] [1 1 0] [1 2 0]))
(def dot-piece (create-piece [0 0 0]))
(def t-piece (create-piece [0 0 0] [0 1 0] [1 1 0] [0 2 0]))





(def short-bar-piece (create-piece [0 0 0] [0 1 0] [0 2 0]))
(def short-l-piece (create-piece [0 0 0] [0 1 0] [1 1 0]))
(def square-piece (create-piece [0 0 0] [1 0 0] [0 1 0] [1 1 0]))


(def extended-bar-piece (create-piece [0 0 0] [0 1 0] [0 2 0] [0 3 0] [0 4 0]))
(def bumpy-cube-piece (create-piece [0 0 0] [0 0 1] [1 0 0] [1 0 1] [0 1 0] [0 1 1] [1 1 0] [1 1 1] [2 1 1]))
(def right-l-piece (create-piece [0 0 0] [1 0 0] [0 1 0] [0 2 0] [1 0 1]))
(def left-l-piece (create-piece [0 0 0] [1 0 0] [0 1 0] [0 2 0] [1 0 -1]))
(def w-piece (create-piece [0 0 0] [0 1 0] [1 1 0] [1 2 0] [2 2 0]))
(def long-t-piece (create-piece [0 0 0] [0 1 0] [1 1 0] [0 2 0] [0 3 0]))

(defn create-random-piece [size]
  (let [random-blocks (vec (set (take size (iterate (fn [[x y z]] (let [delta (if (< 0.5 (rand)) -1 1)
                                                              axis (rand)]
                                                        (cond
                                                          (< axis (/ 1 3)) [(+ x delta) y z]
                                                          (< axis (/ 2 3)) [x (+ y delta) z]
                                                          :else [x y (+ z delta)]
                                                        ))) [0 0 0]))))]
          (apply create-piece random-blocks)))

(def pieces [[bar-piece 3] [cube-piece 1] [l-piece 3] [s-piece 3] [dot-piece 3] [t-piece 3]])
(def small-pieces [[cube-piece 1] [l-piece 3] [s-piece 3] [dot-piece 3] [t-piece 3]])
(def flat-pieces [[square-piece 3] [short-l-piece 3] [short-bar-piece 3] [dot-piece 3]])
(def extended-pieces [[extended-bar-piece 3] [right-l-piece 3] [left-l-piece 3] [w-piece 3] [long-t-piece 3] [bumpy-cube-piece 1]])


(def piece-sets {:standard pieces
                 :small small-pieces
                 :flat flat-pieces
                 :extended extended-pieces
                 :random4 #(create-random-piece 4)
                 :random5 #(create-random-piece 5)})
