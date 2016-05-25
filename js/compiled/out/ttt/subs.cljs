(ns ttt.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))


(re-frame/register-sub
 :current-panel-data
 (fn [db _]
   (reaction (:navigation-data @db))))


(re-frame/register-sub
 :panel-data
 (fn [db  [_ path]]
   (reaction (get-in @db (vec (concat [:panel-data] (or path [])))))))

(re-frame/register-sub
 :app-data
 (fn [db  [_ path]]
   (reaction (get-in @db (vec (concat [:app-data] (or path [])))))))

(re-frame/register-sub
 :all-data
 (fn [db  _]
   (reaction @db)))
