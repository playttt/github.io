// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.gamelogic');
goog.require('cljs.core');
goog.require('ttt.pieces');
goog.require('ttt.audio');
goog.require('ttt.urls');
goog.require('ttt.db');
goog.require('accountant.core');
goog.require('re_frame.core');
ttt.gamelogic.prevent_collision = (function ttt$gamelogic$prevent_collision(db,previous_state){
var piece = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null));
var anchored = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"anchored-blocks","anchored-blocks",-1283695202)], null));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.mapcat.call(null,((function (piece,anchored){
return (function (p1__10816_SHARP_){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__10816_SHARP_], true),anchored);
});})(piece,anchored))
,ttt.pieces.get_blocks.call(null,piece))))){
return previous_state;
} else {
return db;
}
});
ttt.gamelogic.reposition_piece = (function ttt$gamelogic$reposition_piece(db){
var temp__4423__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var piece = temp__4423__auto__;
var blocks = ttt.pieces.get_blocks.call(null,piece);
var vec__10823 = cljs.core.reduce.call(null,((function (blocks,piece,temp__4423__auto__){
return (function (p__10825,p__10826){
var vec__10827 = p__10825;
var mx = cljs.core.nth.call(null,vec__10827,(0),null);
var Mx = cljs.core.nth.call(null,vec__10827,(1),null);
var my = cljs.core.nth.call(null,vec__10827,(2),null);
var My = cljs.core.nth.call(null,vec__10827,(3),null);
var mz = cljs.core.nth.call(null,vec__10827,(4),null);
var Mz = cljs.core.nth.call(null,vec__10827,(5),null);
var vec__10828 = p__10826;
var x = cljs.core.nth.call(null,vec__10828,(0),null);
var y = cljs.core.nth.call(null,vec__10828,(1),null);
var z = cljs.core.nth.call(null,vec__10828,(2),null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var x__5006__auto__ = mx;
var y__5007__auto__ = x;
return ((x__5006__auto__ < y__5007__auto__) ? x__5006__auto__ : y__5007__auto__);
})(),(function (){var x__4999__auto__ = Mx;
var y__5000__auto__ = x;
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})(),(function (){var x__5006__auto__ = my;
var y__5007__auto__ = y;
return ((x__5006__auto__ < y__5007__auto__) ? x__5006__auto__ : y__5007__auto__);
})(),(function (){var x__4999__auto__ = My;
var y__5000__auto__ = y;
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})(),(function (){var x__5006__auto__ = mz;
var y__5007__auto__ = z;
return ((x__5006__auto__ < y__5007__auto__) ? x__5006__auto__ : y__5007__auto__);
})(),(function (){var x__4999__auto__ = Mz;
var y__5000__auto__ = z;
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})()], null);
});})(blocks,piece,temp__4423__auto__))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9999),(-9999),(9999),(-9999),(9999),(-9999)], null),blocks);
var mx = cljs.core.nth.call(null,vec__10823,(0),null);
var Mx = cljs.core.nth.call(null,vec__10823,(1),null);
var my = cljs.core.nth.call(null,vec__10823,(2),null);
var My = cljs.core.nth.call(null,vec__10823,(3),null);
var mz = cljs.core.nth.call(null,vec__10823,(4),null);
var Mz = cljs.core.nth.call(null,vec__10823,(5),null);
var vec__10824 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"pit-size","pit-size",588130476)], null));
var w = cljs.core.nth.call(null,vec__10824,(0),null);
var h = cljs.core.nth.call(null,vec__10824,(1),null);
var d = cljs.core.nth.call(null,vec__10824,(2),null);
var dx = (((Mx >= w))?((w - (1)) - Mx):(((mx < (0)))?(- mx):(0)
));
var dy = (((My >= h))?((h - (1)) - My):(((my < (0)))?(- my):(0)
));
var dz = (((Mz >= d))?((d - (1)) - Mz):(((mz < (0)))?(- mz):(0)
));
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null),ttt.pieces.move_piece,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy,dz], null));
} else {
return db;
}
});
ttt.gamelogic.move_piece_inner = (function ttt$gamelogic$move_piece_inner(db,direction){
var dir_map = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.Keyword(null,"lift","lift",903632035),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null)], null);
var temp__4423__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var piece = temp__4423__auto__;
var new_db = ttt.gamelogic.prevent_collision.call(null,ttt.gamelogic.reposition_piece.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null),ttt.pieces.move_piece,dir_map.call(null,direction))),db);
return new_db;
} else {
return db;
}
});
ttt.gamelogic.move_piece = (function ttt$gamelogic$move_piece(db,direction){
var new_db = ttt.gamelogic.move_piece_inner.call(null,db,direction);
ttt.audio.play.call(null,db,((cljs.core._EQ_.call(null,db,new_db))?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"move","move",-2110884309)));

return new_db;
});
ttt.gamelogic.rotate_piece = (function ttt$gamelogic$rotate_piece(db,axis,direction){
var temp__4423__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var piece = temp__4423__auto__;
var new_db = ttt.gamelogic.prevent_collision.call(null,ttt.gamelogic.reposition_piece.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null),ttt.pieces.rotate_piece,axis,direction)),db);
ttt.audio.play.call(null,db,((cljs.core._EQ_.call(null,db,new_db))?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"rotate","rotate",152705015)));

return new_db;
} else {
return db;
}
});
ttt.gamelogic.drop_piece_step = (function ttt$gamelogic$drop_piece_step(db){
var temp__4423__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var piece = temp__4423__auto__;
return ttt.gamelogic.prevent_collision.call(null,ttt.gamelogic.reposition_piece.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null),ttt.pieces.move_piece,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null))),db);
} else {
return db;
}
});
ttt.gamelogic.drop_piece_inner = (function ttt$gamelogic$drop_piece_inner(db){
while(true){
var db_step = ttt.gamelogic.drop_piece_step.call(null,db);
if(cljs.core._EQ_.call(null,db_step,db)){
return db;
} else {
var G__10829 = db_step;
db = G__10829;
continue;
}
break;
}
});
ttt.gamelogic.drop_piece = (function ttt$gamelogic$drop_piece(db){
var new_db = ttt.gamelogic.drop_piece_inner.call(null,db);
ttt.audio.play.call(null,db,((cljs.core._EQ_.call(null,new_db,db))?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"drop-piece","drop-piece",-929963324)));

return new_db;
});
ttt.gamelogic.lost_game_QMARK_ = (function ttt$gamelogic$lost_game_QMARK_(db){
var anchored_blocks = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"anchored-blocks","anchored-blocks",-1283695202)], null));
var max_anchored_level = cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,((function (anchored_blocks){
return (function (p__10834){
var vec__10835 = p__10834;
var x = cljs.core.nth.call(null,vec__10835,(0),null);
var y = cljs.core.nth.call(null,vec__10835,(1),null);
var z = cljs.core.nth.call(null,vec__10835,(2),null);
return z;
});})(anchored_blocks))
,anchored_blocks));
var vec__10833 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"pit-size","pit-size",588130476)], null));
var _ = cljs.core.nth.call(null,vec__10833,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10833,(1),null);
var d = cljs.core.nth.call(null,vec__10833,(2),null);
return ((max_anchored_level + (1)) >= d);
});
ttt.gamelogic.get_random_piece = (function ttt$gamelogic$get_random_piece(piece_set_name){
var piece_set = ttt.pieces.piece_sets.call(null,piece_set_name);
if(cljs.core.fn_QMARK_.call(null,piece_set)){
return piece_set.call(null);
} else {
var total_prob = cljs.core.reduce.call(null,((function (piece_set){
return (function (acc,p__10844){
var vec__10845 = p__10844;
var _ = cljs.core.nth.call(null,vec__10845,(0),null);
var prob = cljs.core.nth.call(null,vec__10845,(1),null);
return (acc + prob);
});})(piece_set))
,(0),piece_set);
var r = (total_prob * cljs.core.rand.call(null));
var vec__10843 = cljs.core.reduce.call(null,((function (total_prob,r,piece_set){
return (function (p__10846,p__10847){
var vec__10848 = p__10846;
var cp = cljs.core.nth.call(null,vec__10848,(0),null);
var acc = cljs.core.nth.call(null,vec__10848,(1),null);
var vec__10849 = p__10847;
var p = cljs.core.nth.call(null,vec__10849,(0),null);
var prob = cljs.core.nth.call(null,vec__10849,(1),null);
if((acc > r)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp,acc], null);
} else {
if(((acc + prob) > r)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(acc + prob)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp,(acc + prob)], null);

}
}
});})(total_prob,r,piece_set))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(0)], null),piece_set);
var piece = cljs.core.nth.call(null,vec__10843,(0),null);
var _ = cljs.core.nth.call(null,vec__10843,(1),null);
return piece;
}
});
ttt.gamelogic.add_new_piece = (function ttt$gamelogic$add_new_piece(db){
if(cljs.core.not.call(null,ttt.gamelogic.lost_game_QMARK_.call(null,db))){
var vec__10851 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"pit-size","pit-size",588130476)], null));
var w = cljs.core.nth.call(null,vec__10851,(0),null);
var h = cljs.core.nth.call(null,vec__10851,(1),null);
var d = cljs.core.nth.call(null,vec__10851,(2),null);
var starting_point = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,w,(2)),cljs.core.quot.call(null,h,(2)),(d - (1))], null);
var piece_set = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"piece-set","piece-set",-133770732)], null));
var next_piece = (function (){var or__4668__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"next-piece","next-piece",926032416)], null));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return ttt.gamelogic.get_random_piece.call(null,piece_set);
}
})();
return ttt.gamelogic.reposition_piece.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null),ttt.pieces.place_piece.call(null,ttt.pieces.move_point.call(null,starting_point,cljs.core.map.call(null,cljs.core._,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(next_piece))),next_piece)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"next-piece","next-piece",926032416)], null),ttt.gamelogic.get_random_piece.call(null,piece_set)));
} else {
return db;
}
});
ttt.gamelogic.start_timer = (function ttt$gamelogic$start_timer(db){
var level = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"level","level",1290497552)], null));
var delay = ((1000) * cljs.core.nth.call(null,ttt.db.drop_times,level));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),setInterval(((function (level,delay){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976)], null));
});})(level,delay))
,delay));
});
ttt.gamelogic.stop_timer = (function ttt$gamelogic$stop_timer(db){
var temp__4423__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"timer","timer",-1266967739)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var timer_id = temp__4423__auto__;
clearInterval(timer_id);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"timer","timer",-1266967739)], null),null);
} else {
return db;
}
});
ttt.gamelogic.restart_timer = (function ttt$gamelogic$restart_timer(db){
return ttt.gamelogic.start_timer.call(null,ttt.gamelogic.stop_timer.call(null,db));
});
ttt.gamelogic.removed_levels_score = (function ttt$gamelogic$removed_levels_score(db,current_level,removed_levels){
var vec__10853 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"pit-size","pit-size",588130476)], null));
var w = cljs.core.nth.call(null,vec__10853,(0),null);
var h = cljs.core.nth.call(null,vec__10853,(1),null);
var d = cljs.core.nth.call(null,vec__10853,(2),null);
var level_size = (w * h);
var delta_score = cljs.core.reduce.call(null,((function (vec__10853,w,h,d,level_size){
return (function (s,l){
return (s + (level_size * cljs.core.quot.call(null,(l + (2)),(2))));
});})(vec__10853,w,h,d,level_size))
,(0),removed_levels);
return (delta_score + ((100) * cljs.core.count.call(null,removed_levels)));
});
ttt.gamelogic.get_level_for_score = (function ttt$gamelogic$get_level_for_score(score){
return cljs.core.reduce.call(null,(function (l,p__10856){
var vec__10857 = p__10856;
var target_level = cljs.core.nth.call(null,vec__10857,(0),null);
var target_score = cljs.core.nth.call(null,vec__10857,(1),null);
if((score >= target_score)){
return target_level;
} else {
return l;
}
}),(0),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(50)),ttt.db.level_scores));
});
ttt.gamelogic.update_game_level = (function ttt$gamelogic$update_game_level(db){
var score = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"score","score",-1963588780)], null));
var level = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"level","level",1290497552)], null));
var new_level = ttt.gamelogic.get_level_for_score.call(null,score);
if(cljs.core._EQ_.call(null,level,new_level)){
return db;
} else {
return ttt.gamelogic.restart_timer.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"level","level",1290497552)], null),new_level));
}
});
ttt.gamelogic.remove_full_levels = (function ttt$gamelogic$remove_full_levels(db){
var blocks = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"anchored-blocks","anchored-blocks",-1283695202)], null));
var z_fn = ((function (blocks){
return (function (p__10869){
var vec__10870 = p__10869;
var _ = cljs.core.nth.call(null,vec__10870,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10870,(1),null);
var z = cljs.core.nth.call(null,vec__10870,(2),null);
return z;
});})(blocks))
;
var partitioned_blocks = cljs.core.partition_by.call(null,z_fn,cljs.core.sort_by.call(null,z_fn,blocks));
var vec__10867 = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"pit-size","pit-size",588130476)], null));
var w = cljs.core.nth.call(null,vec__10867,(0),null);
var h = cljs.core.nth.call(null,vec__10867,(1),null);
var max_blocks_per_level = (w * h);
var vec__10868 = cljs.core.reduce.call(null,((function (blocks,z_fn,partitioned_blocks,vec__10867,w,h,max_blocks_per_level){
return (function (p__10871,block_group){
var vec__10872 = p__10871;
var nb = cljs.core.nth.call(null,vec__10872,(0),null);
var removed_levels = cljs.core.nth.call(null,vec__10872,(1),null);
if(cljs.core._EQ_.call(null,max_blocks_per_level,cljs.core.count.call(null,cljs.core.set.call(null,block_group)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nb,cljs.core.conj.call(null,removed_levels,(function (){var vec__10873 = cljs.core.first.call(null,block_group);
var _ = cljs.core.nth.call(null,vec__10873,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__10873,(1),null);
var z = cljs.core.nth.call(null,vec__10873,(2),null);
return z;
})())], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,nb,cljs.core.map.call(null,((function (vec__10872,nb,removed_levels,blocks,z_fn,partitioned_blocks,vec__10867,w,h,max_blocks_per_level){
return (function (p__10874){
var vec__10875 = p__10874;
var x = cljs.core.nth.call(null,vec__10875,(0),null);
var y = cljs.core.nth.call(null,vec__10875,(1),null);
var z = cljs.core.nth.call(null,vec__10875,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(z - cljs.core.count.call(null,removed_levels))], null);
});})(vec__10872,nb,removed_levels,blocks,z_fn,partitioned_blocks,vec__10867,w,h,max_blocks_per_level))
,block_group)),removed_levels], null);
}
});})(blocks,z_fn,partitioned_blocks,vec__10867,w,h,max_blocks_per_level))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),partitioned_blocks);
var new_blocks = cljs.core.nth.call(null,vec__10868,(0),null);
var removed_levels = cljs.core.nth.call(null,vec__10868,(1),null);
if(!(cljs.core.empty_QMARK_.call(null,removed_levels))){
ttt.audio.play.call(null,db,new cljs.core.Keyword(null,"level-removed","level-removed",280714983));
} else {
}

return ttt.gamelogic.update_game_level.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"anchored-blocks","anchored-blocks",-1283695202)], null),new_blocks),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"score","score",-1963588780)], null),cljs.core._PLUS_,ttt.gamelogic.removed_levels_score.call(null,db,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"level","level",1290497552)], null)),removed_levels)));
});
ttt.gamelogic.update_game = (function ttt$gamelogic$update_game(db){
if(cljs.core.truth_(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null)))){
var new_db = (function (){var temp__4423__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null));
if(cljs.core.truth_(temp__4423__auto__)){
var piece = temp__4423__auto__;
var dropped_db = ttt.gamelogic.move_piece_inner.call(null,db,new cljs.core.Keyword(null,"drop","drop",364481611));
if(cljs.core._EQ_.call(null,db,dropped_db)){
return ttt.gamelogic.add_new_piece.call(null,ttt.gamelogic.remove_full_levels.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"anchored-blocks","anchored-blocks",-1283695202)], null),cljs.core.concat,ttt.pieces.get_blocks.call(null,piece)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null),null)));
} else {
return dropped_db;
}
} else {
return ttt.gamelogic.add_new_piece.call(null,db);
}
})();
if(cljs.core.truth_(ttt.gamelogic.lost_game_QMARK_.call(null,new_db))){
accountant.core.navigate_BANG_.call(null,ttt.urls.game_over.call(null));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,new_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"playing?","playing?",-1884542863)], null),false),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"paused","paused",-1710376127)], null),false);
} else {
return new_db;
}
} else {
return db;
}
});

//# sourceMappingURL=gamelogic.js.map?rel=1464143787766