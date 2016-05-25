(ns ttt.core
    (:require [reagent.core :as reagent]
              [re-frame.core :as re-frame]
              [ttt.handlers]
              [ttt.subs]
              [ttt.routes :as routes]
              [ttt.views :as views]
              [ttt.config :as config]))

(when config/debug?
  (println "dev mode"))

(defn mount-root []
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn handle-keydown [e]
  (re-frame/dispatch [:key-down e])
  (.preventDefault e))

(defn handle-resize [e]
  (re-frame/dispatch [:window-resized (.-innerWidth js/window) (.-innerHeight js/window)]))

; (defn handle-touch [type e]
;   (re-frame/dispatch [:touch type e])
;   ;; do this only when in the game panel
;   ;(.preventDefault e)
;   )

; (def hammertime (js/Hammer (.getElementById js/document "app") {}))
; (defn set-hammer-option [gesture k v]
;   (-> (.get hammertime gesture) (aget "options") (aset k v)))
;
; (set-hammer-option "swipe" "direction" (.-DIRECTION_ALL js/Hammer))
; (set-hammer-option "pan" "direction" (.-DIRECTION_ALL js/Hammer))
; (set-hammer-option "rotate" "enable" true)
;
; (.on hammertime "tap" #(handle-touch :tap %))
; (.on hammertime "swipe" #(handle-touch :swipe %))
; (.on hammertime "pan" #(handle-touch :pan %))
; (.on hammertime "rotate" #(handle-touch :rotate %))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [:initialize-db])
  (.addEventListener js/document "keydown" handle-keydown)
  (.addEventListener js/window "resize" handle-resize)

  (mount-root)
  )
