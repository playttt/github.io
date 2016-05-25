(ns ttt.gamelogic
  (:require [ttt.pieces :as pieces]
            [ttt.db :as db]
            [ttt.urls :as urls]
            [ttt.audio :as audio]
            [accountant.core :as accountant]
            [re-frame.core :as re-frame]))

(defn prevent-collision [db previous-state]
  (let [piece (get-in db [:app-data :game-state :falling-piece])
        anchored (get-in db [:app-data :game-state :anchored-blocks])]
    (if (some identity (mapcat #(some #{%} anchored) (pieces/get-blocks piece)))
        previous-state
        db)))

(defn reposition-piece [db]
  (if-let [piece (get-in db [:app-data :game-state :falling-piece])]
    (let [blocks (pieces/get-blocks piece)
          [mx Mx my My mz Mz] (reduce (fn [[mx Mx my My mz Mz] [x y z]]
                                          [(min mx x) (max Mx x) (min my y) (max My y) (min mz z) (max Mz z)])
                                      [9999 -9999 9999 -9999 9999 -9999] blocks)
          [w h d] (get-in db [:app-data :game-state :pit-size])
          dx (cond (>= Mx w) (- w 1 Mx) (< mx 0) (- mx) :else 0)
          dy (cond (>= My h) (- h 1 My) (< my 0) (- my) :else 0)
          dz (cond (>= Mz d) (- d 1 Mz) (< mz 0) (- mz) :else 0)]
        		(update-in db [:app-data :game-state :falling-piece] pieces/move-piece [dx dy dz]))
    db))


(defn move-piece-inner [db direction]
	(let [dir-map {:up [0 -1 0] :down [0 1 0] :left [-1 0 0] :right [1 0 0] :drop [0 0 -1] :lift [0 0 1]}]
		(if-let [piece (get-in db [:app-data :game-state :falling-piece])]
      (let [new-db (-> db
          			     (update-in [:app-data :game-state :falling-piece] pieces/move-piece (dir-map direction))
                     (reposition-piece)
                     (prevent-collision db)
                     )]
           new-db)
			db)))


(defn move-piece [db direction]
  (let [new-db (move-piece-inner db direction)]
    (audio/play db (if (= db new-db) :error :move))
    new-db))

(defn rotate-piece [db axis direction]
	(if-let [piece (get-in db [:app-data :game-state :falling-piece])]
    (let [new-db (-> db
                    (update-in [:app-data :game-state :falling-piece] pieces/rotate-piece axis direction)
                    (reposition-piece)
                    (prevent-collision db))]
          (audio/play db (if (= db new-db) :error :rotate))
          new-db)
		db))

(defn drop-piece-step [db]
	(if-let [piece (get-in db [:app-data :game-state :falling-piece])]
    (-> db
      (update-in [:app-data :game-state :falling-piece] pieces/move-piece [0 0 -1])
      (reposition-piece)
      (prevent-collision db))
		db))

(defn drop-piece-inner [db]
  (let [db-step (drop-piece-step db)]
        (if (= db-step db)
            db
            (recur db-step))))

(defn drop-piece [db]
  (let [new-db (drop-piece-inner db)]
    (audio/play db (if (= new-db db) :error :drop-piece))
    new-db))

(defn lost-game? [db]
  (let [anchored-blocks (get-in db [:app-data :game-state :anchored-blocks])
        max-anchored-level (reduce max (map (fn [[x y z]] z) anchored-blocks))
        [_ _ d] (get-in db [:app-data :game-state :pit-size])]
    (>= (inc max-anchored-level) d)))

(defn get-random-piece [piece-set-name]
  (let [piece-set (pieces/piece-sets piece-set-name)]
    (if (fn? piece-set)
        (piece-set)
        (let [total-prob (reduce (fn [acc [_ prob]] (+ acc prob)) 0 piece-set)
              r (* total-prob (rand))
              [piece _] (reduce (fn [[cp acc] [p prob]] (cond (> acc r) [cp acc]
                                                        (> (+ acc prob) r) [p (+ acc prob)]
                                                        :else [cp (+ acc prob)])) [nil 0] piece-set)]
              piece))))


(defn add-new-piece [db]
  (if (not (lost-game? db))
    (let [[w h d] (get-in db [:app-data :game-state :pit-size])
          starting-point [(quot w 2) (quot h 2) (dec d)]
          piece-set (get-in db [:app-data :game-state :piece-set])
          next-piece (or (get-in db [:app-data :game-state :next-piece]) (get-random-piece piece-set))]
      (-> db
    	   (assoc-in [:app-data :game-state :falling-piece]
            (pieces/place-piece (pieces/move-point starting-point (map - (:start next-piece))) next-piece))
         (assoc-in [:app-data :game-state :next-piece] (get-random-piece piece-set))
         (reposition-piece)))
    db))

(defn start-timer [db]
  (let [level (get-in db [:app-data :game-state :level])
        delay (* 1000 (nth db/drop-times level))]
        (assoc-in db [:app-data :game-state :timer] (js/setInterval #(re-frame/dispatch [:tick]) delay))))

(defn stop-timer [db]
  (if-let [timer-id (get-in db [:app-data :game-state :timer])]
    (do
      (js/clearInterval timer-id)
      (assoc-in db [:app-data :game-state :timer] nil))
    db))

(defn restart-timer [db]
  (-> db
    stop-timer
    start-timer))


(defn removed-levels-score [db current-level removed-levels]
  (let [[w h d] (get-in db [:app-data :game-state :pit-size])
        level-size (* w h)
        delta-score (reduce (fn [s l] (+ s (* level-size (quot (+ l 2) 2)))) 0 removed-levels)]
    (+ delta-score (* 100 (count removed-levels)))))

(defn get-level-for-score [score]
  (reduce (fn [l [target-level target-score]] (if (>= score target-score) target-level l))
  0 (map vector (range 50) db/level-scores)))

(defn update-game-level [db]
  (let [score (get-in db [:app-data :game-state :score])
        level (get-in db [:app-data :game-state :level])
        new-level (get-level-for-score score)]
    (if (= level new-level)
      db
      (-> db
        (assoc-in [:app-data :game-state :level] new-level)
        (restart-timer)))))

(defn remove-full-levels [db]
  (let [blocks (get-in db [:app-data :game-state :anchored-blocks])
        z-fn (fn [[_ _ z]] z)
        partitioned-blocks (partition-by z-fn (sort-by z-fn blocks))
        [w h] (get-in db [:app-data :game-state :pit-size])
        max-blocks-per-level (* w h)
        [new-blocks removed-levels] (reduce (fn [[nb removed-levels] block-group]
                          (if (= max-blocks-per-level (count (set block-group)))
                            [nb (conj removed-levels (let [[_ _ z] (first block-group)] z))]
                            [(concat nb (map (fn [[x y z]] [x y (- z (count removed-levels))]) block-group)) removed-levels]
                          )) [[] []] partitioned-blocks)]
        (when (not (empty? removed-levels)) (audio/play db :level-removed))
        (-> db
          (assoc-in [:app-data :game-state :anchored-blocks] new-blocks)
          (update-in [:app-data :game-state :score] + (removed-levels-score db (get-in db [:app-data :game-state :level]) removed-levels))
          (update-game-level)
          )
    )
  )


(defn update-game [db]
  (if (get-in db [:app-data :game-state :playing?])
    (let [new-db (if-let [piece (get-in db [:app-data :game-state :falling-piece])]
                    (let [dropped-db (move-piece-inner db :drop)]
                      (if (= db dropped-db)
                        (-> db
                            (update-in [:app-data :game-state :anchored-blocks] concat (pieces/get-blocks piece))
                            (assoc-in [:app-data :game-state :falling-piece] nil)
                            (remove-full-levels)
                            (add-new-piece))
                        dropped-db))
                        (add-new-piece db))]
      (if (lost-game? new-db)
        (do
          (accountant/navigate! (urls/game-over))
          (-> new-db
            (assoc-in [:app-data :game-state :playing?] false)
            (assoc-in [:app-data :game-state :paused] false)))
        new-db))
    db))
