(ns ttt.renderer
    (:require
		[ttt.pieces :as pieces]
		[ttt.edges :refer [INFR INDE INTR INIZ SUFR SUDE SUTR SUIZ IZFR IZTR DEFR DETR]]))


(defn calculate-params [[x y z] [width height] [dx dy]]
  (let [az 3
        tam-x (/ x (* 2 az))
        tam-y (/ y (* 2 az))
        correction (min (/ (* 1 width) tam-x) (/ (* 1 height) tam-y))]
    {:tx x :ty y :tz z :w width :h height :cx (/ width 2) :cy (/ height 2) :dx dx :dy dy
     :az az :correction correction}
   ))

(defn screen-coords [{:keys [tx ty tz az cx cy dx dy correction]} [x y z]]
  (let [nz (+ tz az (- z))]
    [(+ cx dx (/ (* correction (- x (/ tx 2))) (+ az nz)))
     (+ cy dy (/ (* correction (- y (/ ty 2))) (+ az nz)))]
     ))

(defn screen-line [params p1 p2]
  (let [[sx1 sy1] (screen-coords params p1)
        [sx2 sy2] (screen-coords params p2)]
    [:line {:class "non-scalable-stroke" :x1 sx1 :y1 sy1 :x2 sx2 :y2 sy2}]))

(defn line [params [x1 y1] [x2 y2]]
    [:line {:class "non-scalable-stroke" :x1 x1 :y1 y1 :x2 x2 :y2 y2}])

(defn fill-quad [color-class & points]
  [:polygon {:class (str "non-scalable-stroke " color-class)
             :points (apply str (interleave (map (fn [[x y]] (str x "," y)) points) (repeat " ")))}])


(defn draw-block-projections [{:keys [tx ty tz] :as params} [x y z]]
    [:g {}
        (apply fill-quad "pit-shadow" (map #(screen-coords params %) [[x 0 z] [(inc x) 0 z] [(inc x) 0 (inc z)] [x 0 (inc z)]]))
        (apply fill-quad "pit-shadow" (map #(screen-coords params %) [[x ty z] [(inc x) ty z] [(inc x) ty (inc z)] [x ty (inc z)]]))
        (apply fill-quad "pit-shadow" (map #(screen-coords params %) [[0 y z] [0 (inc y) z] [0 (inc y) (inc z)] [0 y (inc z)]]))
        (apply fill-quad "pit-shadow" (map #(screen-coords params %) [[tx y z] [tx (inc y) z] [tx (inc y) (inc z)] [tx y (inc z)]]))
        (apply fill-quad "pit-shadow" (map #(screen-coords params %) [[x y 0] [x (inc y) 0] [(inc x) (inc y) 0] [(inc x) y 0]]))])

(defn draw-pit-walls [{:keys [tx ty tz] :as params} piece mode]
  (vec (concat
    [:g {:class "pit-walls"}]
    (apply concat (for [y (range (inc ty))]
      [(screen-line params [0 y 0] [0 y tz])
  		(screen-line params [0 y 0] [tx y 0])
  		(screen-line params [tx y 0] [tx y tz])]))

    (apply concat (for [x (range (inc tx))]
  		[(screen-line params [x 0 0] [x 0 tz])
  		(screen-line params [x 0 0] [x ty 0])
  		(screen-line params [x ty 0] [x ty tz])]))

    (apply concat (for [z (range (inc tz))]
  		[(screen-line params [0 0 z] [tx 0 z])
  		(screen-line params [tx 0 z] [tx ty z])
  		(screen-line params [tx ty z] [0 ty z])
  		(screen-line params [0 ty z] [0 0 z])]))

      (if (and piece (= :normal mode))
        (for [b (pieces/get-blocks piece)] (draw-block-projections params b))
        [])
      )
    ))


(defn screen-cube [params [x y z] top-color-class sides-color-class]
  (let [pisi (screen-coords params [x  y  z])
	      pisd (screen-coords params [(inc x) y z])
    	  piii (screen-coords params [x (inc y) z])
	      piid (screen-coords params [(inc x) (inc y) z])

  	    pssi (screen-coords params [x y (inc z)])
	      pssd (screen-coords params [(inc x) y (inc z)])
	      psii (screen-coords params [x (inc y) (inc z)])
	      psid (screen-coords params [(inc x) (inc y) (inc z)])

        side-quads (if sides-color-class
                      [(if (< x (/ (:tx params) 2))
                  			(fill-quad sides-color-class pisd piid psid pssd)
                  			(fill-quad sides-color-class pisi piii psii pssi))
                      (if (< y (/ (:ty params) 2))
                  			(fill-quad sides-color-class piii psii psid piid)
                  			(fill-quad sides-color-class pisi pssi pssd pisd))]
                      [])

        top-fill (if top-color-class
                      [(fill-quad top-color-class pssi pssd psid psii)]
                      [])]

	       (vec (concat [:g]
           side-quads
           top-fill
           ))))

;; I wonder if we should add a leftpad lib dependency here
(defn abs [n] (if (neg? n) (- n) n))

(defn draw-anchored [params blocks falling-piece mode]
  (let [cx (quot (:tx params) 2)
        cy (quot (:ty params) 2)
        z-fn (fn [[x y z]] z)
        d-fn (fn [[x y _]] (+ (abs (- x  cx)) (abs (- y cy))))
        partitioned-blocks (partition-by z-fn (sort-by z-fn blocks))
        falling-blocks (if falling-piece (set (pieces/get-blocks falling-piece)) #{})
        ]
    (vec (concat [:g]
     (mapcat (fn [bs] (map (fn [[x y z :as b]]
              (screen-cube params b
                 (if
                   (and (= :normal mode) (first (filter (fn [[bx by bz]] (and (> bz z) (= [x y] [bx by]))) falling-blocks)))
                   (str "blockLevel" z "-shadow")
                   (str "blockLevel" z)) (str "blockLevel" z))) (reverse (sort-by d-fn bs))))
          partitioned-blocks)))))


(defn draw-falling-piece [params piece]
	(fn [params piece]
      (let [[min-z max-z] (pieces/min-max-vals (map (fn [[_ _ z]] z) (pieces/get-blocks piece)))]
			(vec (concat [:g {:class "falling-piece"}]
				(mapcat (fn [[x y z] edges]
          					(let [
          						  pisi (screen-coords params [x y z])
          						  pisd (screen-coords params [(inc x) y z])
          						  piii (screen-coords params [x  (inc y) z])
          						  piid (screen-coords params [(inc x) (inc y) z])
          						  pssi (screen-coords params [x y (inc z)])
          						  pssd (screen-coords params [(inc x) y (inc z)])
          						  psii (screen-coords params [x (inc y) (inc z)])
          						  psid (screen-coords params [(inc x) (inc y) (inc z)])
                        ; gray-level (+ 127 (* 128 (/ (float (- z min-z)) (- max-z min-z))))
                        ; color (str "rgb(" gray-level "," gray-level "," gray-level ")")
                        ]
          					(mapv
                        (fn [e]
                          [:g
                          ;  {:stroke color}
                            (cond
                							(= e SUDE) (line params pisd pssd)
                							(= e SUIZ) (line params pssi pisi)
                							(= e SUFR) (line params pssi pssd)
                							(= e SUTR) (line params pisi pisd)
                							(= e INDE) (line params psid piid)
                							(= e INIZ) (line params psii piii)
                							(= e INFR) (line params psii psid)
                							(= e INTR) (line params piii piid)
                							(= e IZFR) (line params pssi psii)
                							(= e IZTR) (line params pisi piii)
                							(= e DEFR) (line params pssd psid)
                							(= e DETR) (line params pisd piid))])
                          edges)
          					)) (pieces/get-blocks piece) (:edges piece)))))))

(defn draw-block-levels [window-height left-column-width [w h d] anchored-blocks]
  (let [left-column-width (max (/ left-column-width 3) 40)
        num-levels (reduce max (map (fn [[_ _ z]] z) anchored-blocks))
        half-screen-height (/ window-height 2)
        wall-width 4
        buffer-width 4
        h (/ (- half-screen-height wall-width) d)]
    (vec (concat [:svg {:x buffer-width :y (- half-screen-height buffer-width) :width (str left-column-width "px") :height (str half-screen-height "px") :preserveAspectRatio "none" :class "overflow"}
                    [:rect {:class "pit-walls-schema" :x 0 :y 0 :width wall-width :height half-screen-height}]
                    [:rect {:class "pit-walls-schema" :x (- left-column-width wall-width) :y 0 :width wall-width :height half-screen-height}]
                    [:rect {:class "pit-walls-schema" :x 0 :y (- half-screen-height wall-width) :width (dec left-column-width) :height wall-width}]]
    				(map (fn [i] [:rect {:class (str "non-scalable-stroke blockLevel" i)  :x (+ wall-width buffer-width) :width (- left-column-width (* 2 (+ wall-width buffer-width)))
                                                                                  :y (- half-screen-height (* h (inc i)) wall-width) :height (- h buffer-width)}])
                                                                                  (range (inc num-levels)))))))
