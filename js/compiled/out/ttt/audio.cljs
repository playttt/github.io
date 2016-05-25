(ns ttt.audio)

(def clips
  {
    :menu-change "audio/menuchange.wav"
    :value-change "audio/valuechange.wav"
    :error "audio/error.wav"
    :menu-accept "audio/menuaccept.wav"
    :new-level "audio/newlevel.wav"
    :move "audio/move.wav"
    :rotate "audio/rotate.wav"
    :tick "audio/tick.wav"
    :level-removed "audio/levelremoved.wav"
    :drop-piece "audio/droppiece.wav"
    })

(defn play
  "plays an audio clip. The volume of the clip is retrieved from the options map in the db."
  [db clip-key]
  (when (get-in db [:app-data :options :sound-on?])
    (let [sound (js/Audio. (clips clip-key))
          vol (.pow js/Math 0.8 (* 3 (- 4 (get-in db [:app-data :options :volume]))))]
      (set! (.-volume sound) vol)
      (.play sound))))
