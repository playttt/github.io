// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.audio');
goog.require('cljs.core');
ttt.audio.clips = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"drop-piece","drop-piece",-929963324),new cljs.core.Keyword(null,"level-removed","level-removed",280714983),new cljs.core.Keyword(null,"menu-change","menu-change",2011053067),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"value-change","value-change",-895685042),new cljs.core.Keyword(null,"menu-accept","menu-accept",1252857456),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"new-level","new-level",-413054535)],["audio/tick.wav","audio/droppiece.wav","audio/levelremoved.wav","audio/menuchange.wav","audio/move.wav","audio/valuechange.wav","audio/menuaccept.wav","audio/rotate.wav","audio/error.wav","audio/newlevel.wav"]);
/**
 * plays an audio clip. The volume of the clip is retrieved from the options map in the db.
 */
ttt.audio.play = (function ttt$audio$play(db,clip_key){
if(cljs.core.truth_(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"sound-on?","sound-on?",-1242747885)], null)))){
var sound = (new Audio(ttt.audio.clips.call(null,clip_key)));
var vol = Math.pow(0.8,((3) * ((4) - cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"volume","volume",1900330799)], null)))));
sound.volume = vol;

return sound.play();
} else {
return null;
}
});

//# sourceMappingURL=audio.js.map?rel=1464143784284