// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.renderer');
goog.require('cljs.core');
goog.require('ttt.pieces');
goog.require('ttt.edges');
ttt.renderer.calculate_params = (function ttt$renderer$calculate_params(p__12130,p__12131,p__12132){
var vec__12136 = p__12130;
var x = cljs.core.nth.call(null,vec__12136,(0),null);
var y = cljs.core.nth.call(null,vec__12136,(1),null);
var z = cljs.core.nth.call(null,vec__12136,(2),null);
var vec__12137 = p__12131;
var width = cljs.core.nth.call(null,vec__12137,(0),null);
var height = cljs.core.nth.call(null,vec__12137,(1),null);
var vec__12138 = p__12132;
var dx = cljs.core.nth.call(null,vec__12138,(0),null);
var dy = cljs.core.nth.call(null,vec__12138,(1),null);
var az = (3);
var tam_x = (x / ((2) * az));
var tam_y = (y / ((2) * az));
var correction = (function (){var x__5006__auto__ = (((1) * width) / tam_x);
var y__5007__auto__ = (((1) * height) / tam_y);
return ((x__5006__auto__ < y__5007__auto__) ? x__5006__auto__ : y__5007__auto__);
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"az","az",1576197474),new cljs.core.Keyword(null,"dx","dx",-381796732),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"tz","tz",278339241),new cljs.core.Keyword(null,"ty","ty",158290825),new cljs.core.Keyword(null,"dy","dy",1719547243),new cljs.core.Keyword(null,"correction","correction",-1158421777),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"h","h",1109658740),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"cy","cy",755331060)],[az,dx,width,z,y,dy,correction,x,height,(width / (2)),(height / (2))]);
});
ttt.renderer.screen_coords = (function ttt$renderer$screen_coords(p__12139,p__12140){
var map__12144 = p__12139;
var map__12144__$1 = ((((!((map__12144 == null)))?((((map__12144.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12144.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12144):map__12144);
var tx = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var tz = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"tz","tz",278339241));
var az = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"az","az",1576197474));
var cx = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var dx = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var dy = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var correction = cljs.core.get.call(null,map__12144__$1,new cljs.core.Keyword(null,"correction","correction",-1158421777));
var vec__12145 = p__12140;
var x = cljs.core.nth.call(null,vec__12145,(0),null);
var y = cljs.core.nth.call(null,vec__12145,(1),null);
var z = cljs.core.nth.call(null,vec__12145,(2),null);
var nz = ((tz + az) + (- z));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cx + dx) + ((correction * (x - (tx / (2)))) / (az + nz))),((cy + dy) + ((correction * (y - (ty / (2)))) / (az + nz)))], null);
});
ttt.renderer.screen_line = (function ttt$renderer$screen_line(params,p1,p2){
var vec__12149 = ttt.renderer.screen_coords.call(null,params,p1);
var sx1 = cljs.core.nth.call(null,vec__12149,(0),null);
var sy1 = cljs.core.nth.call(null,vec__12149,(1),null);
var vec__12150 = ttt.renderer.screen_coords.call(null,params,p2);
var sx2 = cljs.core.nth.call(null,vec__12150,(0),null);
var sy2 = cljs.core.nth.call(null,vec__12150,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"non-scalable-stroke",new cljs.core.Keyword(null,"x1","x1",-1863922247),sx1,new cljs.core.Keyword(null,"y1","y1",589123466),sy1,new cljs.core.Keyword(null,"x2","x2",-1362513475),sx2,new cljs.core.Keyword(null,"y2","y2",-718691301),sy2], null)], null);
});
ttt.renderer.line = (function ttt$renderer$line(params,p__12151,p__12152){
var vec__12155 = p__12151;
var x1 = cljs.core.nth.call(null,vec__12155,(0),null);
var y1 = cljs.core.nth.call(null,vec__12155,(1),null);
var vec__12156 = p__12152;
var x2 = cljs.core.nth.call(null,vec__12156,(0),null);
var y2 = cljs.core.nth.call(null,vec__12156,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"non-scalable-stroke",new cljs.core.Keyword(null,"x1","x1",-1863922247),x1,new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2], null)], null);
});
ttt.renderer.fill_quad = (function ttt$renderer$fill_quad(var_args){
var args__5733__auto__ = [];
var len__5726__auto___12161 = arguments.length;
var i__5727__auto___12162 = (0);
while(true){
if((i__5727__auto___12162 < len__5726__auto___12161)){
args__5733__auto__.push((arguments[i__5727__auto___12162]));

var G__12163 = (i__5727__auto___12162 + (1));
i__5727__auto___12162 = G__12163;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return ttt.renderer.fill_quad.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

ttt.renderer.fill_quad.cljs$core$IFn$_invoke$arity$variadic = (function (color_class,points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("non-scalable-stroke "),cljs.core.str(color_class)].join(''),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,cljs.core.map.call(null,(function (p__12159){
var vec__12160 = p__12159;
var x = cljs.core.nth.call(null,vec__12160,(0),null);
var y = cljs.core.nth.call(null,vec__12160,(1),null);
return [cljs.core.str(x),cljs.core.str(","),cljs.core.str(y)].join('');
}),points),cljs.core.repeat.call(null," ")))], null)], null);
});

ttt.renderer.fill_quad.cljs$lang$maxFixedArity = (1);

ttt.renderer.fill_quad.cljs$lang$applyTo = (function (seq12157){
var G__12158 = cljs.core.first.call(null,seq12157);
var seq12157__$1 = cljs.core.next.call(null,seq12157);
return ttt.renderer.fill_quad.cljs$core$IFn$_invoke$arity$variadic(G__12158,seq12157__$1);
});
ttt.renderer.draw_block_projections = (function ttt$renderer$draw_block_projections(p__12169,p__12170){
var map__12174 = p__12169;
var map__12174__$1 = ((((!((map__12174 == null)))?((((map__12174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12174):map__12174);
var params = map__12174__$1;
var tx = cljs.core.get.call(null,map__12174__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__12174__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var tz = cljs.core.get.call(null,map__12174__$1,new cljs.core.Keyword(null,"tz","tz",278339241));
var vec__12175 = p__12170;
var x = cljs.core.nth.call(null,vec__12175,(0),null);
var y = cljs.core.nth.call(null,vec__12175,(1),null);
var z = cljs.core.nth.call(null,vec__12175,(2),null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,ttt.renderer.fill_quad,"pit-shadow",cljs.core.map.call(null,((function (map__12174,map__12174__$1,params,tx,ty,tz,vec__12175,x,y,z){
return (function (p1__12164_SHARP_){
return ttt.renderer.screen_coords.call(null,params,p1__12164_SHARP_);
});})(map__12174,map__12174__$1,params,tx,ty,tz,vec__12175,x,y,z))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(0),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(0),(z + (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),(z + (1))], null)], null))),cljs.core.apply.call(null,ttt.renderer.fill_quad,"pit-shadow",cljs.core.map.call(null,((function (map__12174,map__12174__$1,params,tx,ty,tz,vec__12175,x,y,z){
return (function (p1__12165_SHARP_){
return ttt.renderer.screen_coords.call(null,params,p1__12165_SHARP_);
});})(map__12174,map__12174__$1,params,tx,ty,tz,vec__12175,x,y,z))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,ty,z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),ty,z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),ty,(z + (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,ty,(z + (1))], null)], null))),cljs.core.apply.call(null,ttt.renderer.fill_quad,"pit-shadow",cljs.core.map.call(null,((function (map__12174,map__12174__$1,params,tx,ty,tz,vec__12175,x,y,z){
return (function (p1__12166_SHARP_){
return ttt.renderer.screen_coords.call(null,params,p1__12166_SHARP_);
});})(map__12174,map__12174__$1,params,tx,ty,tz,vec__12175,x,y,z))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y,z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(y + (1)),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(y + (1)),(z + (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y,(z + (1))], null)], null))),cljs.core.apply.call(null,ttt.renderer.fill_quad,"pit-shadow",cljs.core.map.call(null,((function (map__12174,map__12174__$1,params,tx,ty,tz,vec__12175,x,y,z){
return (function (p1__12167_SHARP_){
return ttt.renderer.screen_coords.call(null,params,p1__12167_SHARP_);
});})(map__12174,map__12174__$1,params,tx,ty,tz,vec__12175,x,y,z))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,y,z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,(y + (1)),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,(y + (1)),(z + (1))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,y,(z + (1))], null)], null))),cljs.core.apply.call(null,ttt.renderer.fill_quad,"pit-shadow",cljs.core.map.call(null,((function (map__12174,map__12174__$1,params,tx,ty,tz,vec__12175,x,y,z){
return (function (p1__12168_SHARP_){
return ttt.renderer.screen_coords.call(null,params,p1__12168_SHARP_);
});})(map__12174,map__12174__$1,params,tx,ty,tz,vec__12175,x,y,z))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1)),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,(0)], null)], null)))], null);
});
ttt.renderer.draw_pit_walls = (function ttt$renderer$draw_pit_walls(p__12177,piece,mode){
var map__12196 = p__12177;
var map__12196__$1 = ((((!((map__12196 == null)))?((((map__12196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12196):map__12196);
var params = map__12196__$1;
var tx = cljs.core.get.call(null,map__12196__$1,new cljs.core.Keyword(null,"tx","tx",466630418));
var ty = cljs.core.get.call(null,map__12196__$1,new cljs.core.Keyword(null,"ty","ty",158290825));
var tz = cljs.core.get.call(null,map__12196__$1,new cljs.core.Keyword(null,"tz","tz",278339241));
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"pit-walls"], null)], null),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__5440__auto__ = ((function (map__12196,map__12196__$1,params,tx,ty,tz){
return (function ttt$renderer$draw_pit_walls_$_iter__12198(s__12199){
return (new cljs.core.LazySeq(null,((function (map__12196,map__12196__$1,params,tx,ty,tz){
return (function (){
var s__12199__$1 = s__12199;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12199__$1);
if(temp__4425__auto__){
var s__12199__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12199__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__12199__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__12201 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__12200 = (0);
while(true){
if((i__12200 < size__5439__auto__)){
var y = cljs.core._nth.call(null,c__5438__auto__,i__12200);
cljs.core.chunk_append.call(null,b__12201,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y,tz], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,y,(0)], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,y,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,y,tz], null))], null));

var G__12214 = (i__12200 + (1));
i__12200 = G__12214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12201),ttt$renderer$draw_pit_walls_$_iter__12198.call(null,cljs.core.chunk_rest.call(null,s__12199__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12201),null);
}
} else {
var y = cljs.core.first.call(null,s__12199__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y,tz], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),y,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,y,(0)], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,y,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,y,tz], null))], null),ttt$renderer$draw_pit_walls_$_iter__12198.call(null,cljs.core.rest.call(null,s__12199__$2)));
}
} else {
return null;
}
break;
}
});})(map__12196,map__12196__$1,params,tx,ty,tz))
,null,null));
});})(map__12196,map__12196__$1,params,tx,ty,tz))
;
return iter__5440__auto__.call(null,cljs.core.range.call(null,(ty + (1))));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__5440__auto__ = ((function (map__12196,map__12196__$1,params,tx,ty,tz){
return (function ttt$renderer$draw_pit_walls_$_iter__12202(s__12203){
return (new cljs.core.LazySeq(null,((function (map__12196,map__12196__$1,params,tx,ty,tz){
return (function (){
var s__12203__$1 = s__12203;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12203__$1);
if(temp__4425__auto__){
var s__12203__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12203__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__12203__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__12205 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__12204 = (0);
while(true){
if((i__12204 < size__5439__auto__)){
var x = cljs.core._nth.call(null,c__5438__auto__,i__12204);
cljs.core.chunk_append.call(null,b__12205,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),tz], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,ty,(0)], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,ty,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,ty,tz], null))], null));

var G__12215 = (i__12204 + (1));
i__12204 = G__12215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12205),ttt$renderer$draw_pit_walls_$_iter__12202.call(null,cljs.core.chunk_rest.call(null,s__12203__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12205),null);
}
} else {
var x = cljs.core.first.call(null,s__12203__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),tz], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,ty,(0)], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,ty,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,ty,tz], null))], null),ttt$renderer$draw_pit_walls_$_iter__12202.call(null,cljs.core.rest.call(null,s__12203__$2)));
}
} else {
return null;
}
break;
}
});})(map__12196,map__12196__$1,params,tx,ty,tz))
,null,null));
});})(map__12196,map__12196__$1,params,tx,ty,tz))
;
return iter__5440__auto__.call(null,cljs.core.range.call(null,(tx + (1))));
})()),cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__5440__auto__ = ((function (map__12196,map__12196__$1,params,tx,ty,tz){
return (function ttt$renderer$draw_pit_walls_$_iter__12206(s__12207){
return (new cljs.core.LazySeq(null,((function (map__12196,map__12196__$1,params,tx,ty,tz){
return (function (){
var s__12207__$1 = s__12207;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12207__$1);
if(temp__4425__auto__){
var s__12207__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12207__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__12207__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__12209 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__12208 = (0);
while(true){
if((i__12208 < size__5439__auto__)){
var z = cljs.core._nth.call(null,c__5438__auto__,i__12208);
cljs.core.chunk_append.call(null,b__12209,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,(0),z], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,(0),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,z], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ty,z], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ty,z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),z], null))], null));

var G__12216 = (i__12208 + (1));
i__12208 = G__12216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12209),ttt$renderer$draw_pit_walls_$_iter__12206.call(null,cljs.core.chunk_rest.call(null,s__12207__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12209),null);
}
} else {
var z = cljs.core.first.call(null,s__12207__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,(0),z], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,(0),z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,z], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty,z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ty,z], null)),ttt.renderer.screen_line.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ty,z], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),z], null))], null),ttt$renderer$draw_pit_walls_$_iter__12206.call(null,cljs.core.rest.call(null,s__12207__$2)));
}
} else {
return null;
}
break;
}
});})(map__12196,map__12196__$1,params,tx,ty,tz))
,null,null));
});})(map__12196,map__12196__$1,params,tx,ty,tz))
;
return iter__5440__auto__.call(null,cljs.core.range.call(null,(tz + (1))));
})()),(cljs.core.truth_((function (){var and__4656__auto__ = piece;
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),mode);
} else {
return and__4656__auto__;
}
})())?(function (){var iter__5440__auto__ = ((function (map__12196,map__12196__$1,params,tx,ty,tz){
return (function ttt$renderer$draw_pit_walls_$_iter__12210(s__12211){
return (new cljs.core.LazySeq(null,((function (map__12196,map__12196__$1,params,tx,ty,tz){
return (function (){
var s__12211__$1 = s__12211;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12211__$1);
if(temp__4425__auto__){
var s__12211__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12211__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__12211__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__12213 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__12212 = (0);
while(true){
if((i__12212 < size__5439__auto__)){
var b = cljs.core._nth.call(null,c__5438__auto__,i__12212);
cljs.core.chunk_append.call(null,b__12213,ttt.renderer.draw_block_projections.call(null,params,b));

var G__12217 = (i__12212 + (1));
i__12212 = G__12217;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12213),ttt$renderer$draw_pit_walls_$_iter__12210.call(null,cljs.core.chunk_rest.call(null,s__12211__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12213),null);
}
} else {
var b = cljs.core.first.call(null,s__12211__$2);
return cljs.core.cons.call(null,ttt.renderer.draw_block_projections.call(null,params,b),ttt$renderer$draw_pit_walls_$_iter__12210.call(null,cljs.core.rest.call(null,s__12211__$2)));
}
} else {
return null;
}
break;
}
});})(map__12196,map__12196__$1,params,tx,ty,tz))
,null,null));
});})(map__12196,map__12196__$1,params,tx,ty,tz))
;
return iter__5440__auto__.call(null,ttt.pieces.get_blocks.call(null,piece));
})():cljs.core.PersistentVector.EMPTY)));
});
ttt.renderer.screen_cube = (function ttt$renderer$screen_cube(params,p__12218,top_color_class,sides_color_class){
var vec__12220 = p__12218;
var x = cljs.core.nth.call(null,vec__12220,(0),null);
var y = cljs.core.nth.call(null,vec__12220,(1),null);
var z = cljs.core.nth.call(null,vec__12220,(2),null);
var pisi = ttt.renderer.screen_coords.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null));
var pisd = ttt.renderer.screen_coords.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,z], null));
var piii = ttt.renderer.screen_coords.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),z], null));
var piid = ttt.renderer.screen_coords.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1)),z], null));
var pssi = ttt.renderer.screen_coords.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(z + (1))], null));
var pssd = ttt.renderer.screen_coords.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,(z + (1))], null));
var psii = ttt.renderer.screen_coords.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),(z + (1))], null));
var psid = ttt.renderer.screen_coords.call(null,params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1)),(z + (1))], null));
var side_quads = (cljs.core.truth_(sides_color_class)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x < (new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(params) / (2))))?ttt.renderer.fill_quad.call(null,sides_color_class,pisd,piid,psid,pssd):ttt.renderer.fill_quad.call(null,sides_color_class,pisi,piii,psii,pssi)),(((y < (new cljs.core.Keyword(null,"ty","ty",158290825).cljs$core$IFn$_invoke$arity$1(params) / (2))))?ttt.renderer.fill_quad.call(null,sides_color_class,piii,psii,psid,piid):ttt.renderer.fill_quad.call(null,sides_color_class,pisi,pssi,pssd,pisd))], null):cljs.core.PersistentVector.EMPTY);
var top_fill = (cljs.core.truth_(top_color_class)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.fill_quad.call(null,top_color_class,pssi,pssd,psid,psii)], null):cljs.core.PersistentVector.EMPTY);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),side_quads,top_fill));
});
ttt.renderer.abs = (function ttt$renderer$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
ttt.renderer.draw_anchored = (function ttt$renderer$draw_anchored(params,blocks,falling_piece,mode){
var cx = cljs.core.quot.call(null,new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(params),(2));
var cy = cljs.core.quot.call(null,new cljs.core.Keyword(null,"ty","ty",158290825).cljs$core$IFn$_invoke$arity$1(params),(2));
var z_fn = ((function (cx,cy){
return (function (p__12231){
var vec__12232 = p__12231;
var x = cljs.core.nth.call(null,vec__12232,(0),null);
var y = cljs.core.nth.call(null,vec__12232,(1),null);
var z = cljs.core.nth.call(null,vec__12232,(2),null);
return z;
});})(cx,cy))
;
var d_fn = ((function (cx,cy,z_fn){
return (function (p__12233){
var vec__12234 = p__12233;
var x = cljs.core.nth.call(null,vec__12234,(0),null);
var y = cljs.core.nth.call(null,vec__12234,(1),null);
var _ = cljs.core.nth.call(null,vec__12234,(2),null);
return (ttt.renderer.abs.call(null,(x - cx)) + ttt.renderer.abs.call(null,(y - cy)));
});})(cx,cy,z_fn))
;
var partitioned_blocks = cljs.core.partition_by.call(null,z_fn,cljs.core.sort_by.call(null,z_fn,blocks));
var falling_blocks = (cljs.core.truth_(falling_piece)?cljs.core.set.call(null,ttt.pieces.get_blocks.call(null,falling_piece)):cljs.core.PersistentHashSet.EMPTY);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null),cljs.core.mapcat.call(null,((function (cx,cy,z_fn,d_fn,partitioned_blocks,falling_blocks){
return (function (bs){
return cljs.core.map.call(null,((function (cx,cy,z_fn,d_fn,partitioned_blocks,falling_blocks){
return (function (p__12235){
var vec__12236 = p__12235;
var x = cljs.core.nth.call(null,vec__12236,(0),null);
var y = cljs.core.nth.call(null,vec__12236,(1),null);
var z = cljs.core.nth.call(null,vec__12236,(2),null);
var b = vec__12236;
return ttt.renderer.screen_cube.call(null,params,b,(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),mode);
if(and__4656__auto__){
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (and__4656__auto__,vec__12236,x,y,z,b,cx,cy,z_fn,d_fn,partitioned_blocks,falling_blocks){
return (function (p__12239){
var vec__12240 = p__12239;
var bx = cljs.core.nth.call(null,vec__12240,(0),null);
var by = cljs.core.nth.call(null,vec__12240,(1),null);
var bz = cljs.core.nth.call(null,vec__12240,(2),null);
return ((bz > z)) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx,by], null)));
});})(and__4656__auto__,vec__12236,x,y,z,b,cx,cy,z_fn,d_fn,partitioned_blocks,falling_blocks))
,falling_blocks));
} else {
return and__4656__auto__;
}
})())?[cljs.core.str("blockLevel"),cljs.core.str(z),cljs.core.str("-shadow")].join(''):[cljs.core.str("blockLevel"),cljs.core.str(z)].join('')),[cljs.core.str("blockLevel"),cljs.core.str(z)].join(''));
});})(cx,cy,z_fn,d_fn,partitioned_blocks,falling_blocks))
,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,d_fn,bs)));
});})(cx,cy,z_fn,d_fn,partitioned_blocks,falling_blocks))
,partitioned_blocks)));
});
ttt.renderer.draw_falling_piece = (function ttt$renderer$draw_falling_piece(params,piece){
return (function (params__$1,piece__$1){
var vec__12246 = ttt.pieces.min_max_vals.call(null,cljs.core.map.call(null,(function (p__12247){
var vec__12248 = p__12247;
var _ = cljs.core.nth.call(null,vec__12248,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12248,(1),null);
var z = cljs.core.nth.call(null,vec__12248,(2),null);
return z;
}),ttt.pieces.get_blocks.call(null,piece__$1)));
var min_z = cljs.core.nth.call(null,vec__12246,(0),null);
var max_z = cljs.core.nth.call(null,vec__12246,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"falling-piece"], null)], null),cljs.core.mapcat.call(null,((function (vec__12246,min_z,max_z){
return (function (p__12249,edges){
var vec__12250 = p__12249;
var x = cljs.core.nth.call(null,vec__12250,(0),null);
var y = cljs.core.nth.call(null,vec__12250,(1),null);
var z = cljs.core.nth.call(null,vec__12250,(2),null);
var pisi = ttt.renderer.screen_coords.call(null,params__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null));
var pisd = ttt.renderer.screen_coords.call(null,params__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,z], null));
var piii = ttt.renderer.screen_coords.call(null,params__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),z], null));
var piid = ttt.renderer.screen_coords.call(null,params__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1)),z], null));
var pssi = ttt.renderer.screen_coords.call(null,params__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(z + (1))], null));
var pssd = ttt.renderer.screen_coords.call(null,params__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y,(z + (1))], null));
var psii = ttt.renderer.screen_coords.call(null,params__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1)),(z + (1))], null));
var psid = ttt.renderer.screen_coords.call(null,params__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1)),(z + (1))], null));
return cljs.core.mapv.call(null,((function (pisi,pisd,piii,piid,pssi,pssd,psii,psid,vec__12250,x,y,z,vec__12246,min_z,max_z){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),((cljs.core._EQ_.call(null,e,ttt.edges.SUDE))?ttt.renderer.line.call(null,params__$1,pisd,pssd):((cljs.core._EQ_.call(null,e,ttt.edges.SUIZ))?ttt.renderer.line.call(null,params__$1,pssi,pisi):((cljs.core._EQ_.call(null,e,ttt.edges.SUFR))?ttt.renderer.line.call(null,params__$1,pssi,pssd):((cljs.core._EQ_.call(null,e,ttt.edges.SUTR))?ttt.renderer.line.call(null,params__$1,pisi,pisd):((cljs.core._EQ_.call(null,e,ttt.edges.INDE))?ttt.renderer.line.call(null,params__$1,psid,piid):((cljs.core._EQ_.call(null,e,ttt.edges.INIZ))?ttt.renderer.line.call(null,params__$1,psii,piii):((cljs.core._EQ_.call(null,e,ttt.edges.INFR))?ttt.renderer.line.call(null,params__$1,psii,psid):((cljs.core._EQ_.call(null,e,ttt.edges.INTR))?ttt.renderer.line.call(null,params__$1,piii,piid):((cljs.core._EQ_.call(null,e,ttt.edges.IZFR))?ttt.renderer.line.call(null,params__$1,pssi,psii):((cljs.core._EQ_.call(null,e,ttt.edges.IZTR))?ttt.renderer.line.call(null,params__$1,pisi,piii):((cljs.core._EQ_.call(null,e,ttt.edges.DEFR))?ttt.renderer.line.call(null,params__$1,pssd,psid):((cljs.core._EQ_.call(null,e,ttt.edges.DETR))?ttt.renderer.line.call(null,params__$1,pisd,piid):null))))))))))))], null);
});})(pisi,pisd,piii,piid,pssi,pssd,psii,psid,vec__12250,x,y,z,vec__12246,min_z,max_z))
,edges);
});})(vec__12246,min_z,max_z))
,ttt.pieces.get_blocks.call(null,piece__$1),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(piece__$1))));
});
});
ttt.renderer.draw_block_levels = (function ttt$renderer$draw_block_levels(window_height,left_column_width,p__12251,anchored_blocks){
var vec__12255 = p__12251;
var w = cljs.core.nth.call(null,vec__12255,(0),null);
var h = cljs.core.nth.call(null,vec__12255,(1),null);
var d = cljs.core.nth.call(null,vec__12255,(2),null);
var left_column_width__$1 = (function (){var x__4999__auto__ = (left_column_width / (3));
var y__5000__auto__ = (40);
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})();
var num_levels = cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,((function (left_column_width__$1,vec__12255,w,h,d){
return (function (p__12256){
var vec__12257 = p__12256;
var _ = cljs.core.nth.call(null,vec__12257,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12257,(1),null);
var z = cljs.core.nth.call(null,vec__12257,(2),null);
return z;
});})(left_column_width__$1,vec__12255,w,h,d))
,anchored_blocks));
var half_screen_height = (window_height / (2));
var wall_width = (4);
var buffer_width = (4);
var h__$1 = ((half_screen_height - wall_width) / d);
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),buffer_width,new cljs.core.Keyword(null,"y","y",-1757859776),(half_screen_height - buffer_width),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(left_column_width__$1),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(half_screen_height),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),"none",new cljs.core.Keyword(null,"class","class",-2030961996),"overflow"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"pit-walls-schema",new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),wall_width,new cljs.core.Keyword(null,"height","height",1025178622),half_screen_height], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"pit-walls-schema",new cljs.core.Keyword(null,"x","x",2099068185),(left_column_width__$1 - wall_width),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),wall_width,new cljs.core.Keyword(null,"height","height",1025178622),half_screen_height], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"pit-walls-schema",new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(half_screen_height - wall_width),new cljs.core.Keyword(null,"width","width",-384071477),(left_column_width__$1 - (1)),new cljs.core.Keyword(null,"height","height",1025178622),wall_width], null)], null)], null),cljs.core.map.call(null,((function (left_column_width__$1,num_levels,half_screen_height,wall_width,buffer_width,h__$1,vec__12255,w,h,d){
return (function (i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("non-scalable-stroke blockLevel"),cljs.core.str(i)].join(''),new cljs.core.Keyword(null,"x","x",2099068185),(wall_width + buffer_width),new cljs.core.Keyword(null,"width","width",-384071477),(left_column_width__$1 - ((2) * (wall_width + buffer_width))),new cljs.core.Keyword(null,"y","y",-1757859776),((half_screen_height - (h__$1 * (i + (1)))) - wall_width),new cljs.core.Keyword(null,"height","height",1025178622),(h__$1 - buffer_width)], null)], null);
});})(left_column_width__$1,num_levels,half_screen_height,wall_width,buffer_width,h__$1,vec__12255,w,h,d))
,cljs.core.range.call(null,(num_levels + (1))))));
});

//# sourceMappingURL=renderer.js.map?rel=1464143791364