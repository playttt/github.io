(ns ttt.edges)

(def INFR #{:IN :FR}) ;; x axis, max Y, maxZ (top face, bottom edge)
(def INDE #{:IN :DE}) ;; z axis, maxX, maxY (bottom right)
(def INTR #{:IN :TR}) ;; x axis, maxY, minZ (bottom face, bottom edge)
(def INIZ #{:IN :IZ}) ;; z axis, minX, maxY (bottom left)
(def SUFR #{:SU :FR}) ;; x axis, minY, maxZ (top face, top edge)
(def SUDE #{:SU :DE}) ;; z axis, maxX, minY (top right)
(def SUTR #{:SU :TR}) ;; x axis, minY, minZ (bottom face, top edge)
(def SUIZ #{:SU :IZ}) ;; z axis, minX, minY (top left)
(def IZFR #{:IZ :FR}) ;; y axis, minX, maxZ (top face, left edge)
(def IZTR #{:IZ :TR}) ;; y axis, minX, minZ (bottom face, left edge)
(def DEFR #{:DE :FR}) ;; y axis, maxX, maxZ (top face, right edge)
(def DETR #{:DE :TR}) ;; y axis, maxX, minZ (bottom face, right edge)

(def edge-neighbors {
  SUDE [[1 0 0] [0 -1 0] [1 -1 0]]
  INDE [[1 0 0] [0 1 0] [1 1 0]]
  INIZ [[-1 0 0] [0 1 0] [-1 1 0]]
  SUIZ [[-1 0 0] [0 -1 0] [-1 -1 0]]
  DEFR [[1 0 0] [0 0 1] [1 0 1]]
  DETR [[1 0 0] [0 0 -1] [1 0 -1]]
  IZFR [[-1 0 0] [0 0 1] [-1 0 1]]
  IZTR [[-1 0 0] [0 0 -1] [-1 0 -1]]
  INFR [[0 1 0] [0 0 1] [0 1 1]]
  INTR [[0 1 0] [0 0 -1] [0 1 -1]]
  SUFR [[0 -1 0] [0 0 1] [0 -1 1]]
  SUTR [[0 -1 0] [0 0 -1] [0 -1 -1]]
  })

(def rotations {
  :x {
    	:clockwise  {:IN :FR, :SU :TR, :FR :SU, :TR :IN, :IZ :IZ, :DE :DE},
    	:counterclockwise {:IN :TR, :SU :FR, :FR :IN, :TR :SU, :IZ :IZ, :DE :DE}}
  :y {
  	:clockwise {:IN :IN, :SU :SU, :FR :IZ, :TR :DE, :IZ :TR, :DE :FR},
  	:counterclockwise {:IN :IN, :SU :SU, :FR :DE, :TR :IZ, :IZ :FR, :DE :TR}
  }
  :z {
  	:clockwise {:IN :DE, :SU :IZ, :FR :FR, :TR :TR, :IZ :IN, :DE :SU},
  	:counterclockwise {:IN :IZ, :SU :DE, :FR :FR, :TR :TR, :IZ :SU, :DE :IN}
  }
})

(defn rotate-plane [axis direction plane]
  (get-in rotations [axis direction plane]))

(defn rotate-edge [axis direction edge]
  (set (map (partial rotate-plane axis direction) edge)))
