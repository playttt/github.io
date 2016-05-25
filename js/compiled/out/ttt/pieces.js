// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.pieces');
goog.require('cljs.core');
goog.require('ttt.edges');
ttt.pieces.move_point = (function ttt$pieces$move_point(p__5831,p__5832){
var vec__5835 = p__5831;
var x = cljs.core.nth.call(null,vec__5835,(0),null);
var y = cljs.core.nth.call(null,vec__5835,(1),null);
var z = cljs.core.nth.call(null,vec__5835,(2),null);
var vec__5836 = p__5832;
var dx = cljs.core.nth.call(null,vec__5836,(0),null);
var dy = cljs.core.nth.call(null,vec__5836,(1),null);
var dz = cljs.core.nth.call(null,vec__5836,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy),(z + dz)], null);
});
ttt.pieces.move_piece = (function ttt$pieces$move_piece(piece,delta){
return cljs.core.update_in.call(null,piece,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null),ttt.pieces.move_point,delta);
});
ttt.pieces.place_piece = (function ttt$pieces$place_piece(point,piece){
return cljs.core.assoc_in.call(null,piece,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null),point);
});
ttt.pieces.block_rotations = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),(function (p__5837){
var vec__5838 = p__5837;
var bx = cljs.core.nth.call(null,vec__5838,(0),null);
var by = cljs.core.nth.call(null,vec__5838,(1),null);
var bz = cljs.core.nth.call(null,vec__5838,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx,(- bz),by], null);
}),new cljs.core.Keyword(null,"counterclockwise","counterclockwise",63857611),(function (p__5839){
var vec__5840 = p__5839;
var bx = cljs.core.nth.call(null,vec__5840,(0),null);
var by = cljs.core.nth.call(null,vec__5840,(1),null);
var bz = cljs.core.nth.call(null,vec__5840,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx,bz,(- by)], null);
})], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),(function (p__5841){
var vec__5842 = p__5841;
var bx = cljs.core.nth.call(null,vec__5842,(0),null);
var by = cljs.core.nth.call(null,vec__5842,(1),null);
var bz = cljs.core.nth.call(null,vec__5842,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- bz),by,bx], null);
}),new cljs.core.Keyword(null,"counterclockwise","counterclockwise",63857611),(function (p__5843){
var vec__5844 = p__5843;
var bx = cljs.core.nth.call(null,vec__5844,(0),null);
var by = cljs.core.nth.call(null,vec__5844,(1),null);
var bz = cljs.core.nth.call(null,vec__5844,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bz,by,(- bx)], null);
})], null),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),(function (p__5845){
var vec__5846 = p__5845;
var bx = cljs.core.nth.call(null,vec__5846,(0),null);
var by = cljs.core.nth.call(null,vec__5846,(1),null);
var bz = cljs.core.nth.call(null,vec__5846,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [by,(- bx),bz], null);
}),new cljs.core.Keyword(null,"counterclockwise","counterclockwise",63857611),(function (p__5847){
var vec__5848 = p__5847;
var bx = cljs.core.nth.call(null,vec__5848,(0),null);
var by = cljs.core.nth.call(null,vec__5848,(1),null);
var bz = cljs.core.nth.call(null,vec__5848,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- by),bx,bz], null);
})], null)], null);
ttt.pieces.rotate_block = (function ttt$pieces$rotate_block(block,axis,direction){
return cljs.core.get_in.call(null,ttt.pieces.block_rotations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [axis,direction], null)).call(null,block);
});
ttt.pieces.rotate_piece = (function ttt$pieces$rotate_piece(piece,axis,direction){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,piece,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blocks","blocks",-610462153)], null),(function (blocks){
return cljs.core.mapv.call(null,(function (block){
return ttt.pieces.rotate_block.call(null,block,axis,direction);
}),blocks);
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edges","edges",-694791395)], null),(function (edges){
return cljs.core.mapv.call(null,(function (edge_list){
return cljs.core.mapv.call(null,(function (p1__5849_SHARP_){
return ttt.edges.rotate_edge.call(null,axis,direction,p1__5849_SHARP_);
}),edge_list);
}),edges);
}));
});
ttt.pieces.piece_span = (function ttt$pieces$piece_span(plane,piece){
var coord_index = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(1),new cljs.core.Keyword(null,"z","z",-789527183),(2)], null).call(null,plane);
var coords_list = cljs.core.map.call(null,((function (coord_index){
return (function (p1__5850_SHARP_){
return cljs.core.nth.call(null,p1__5850_SHARP_,coord_index);
});})(coord_index))
,new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(piece));
return (cljs.core.reduce.call(null,cljs.core.max,coords_list) - cljs.core.reduce.call(null,cljs.core.min,coords_list));
});
ttt.pieces.get_blocks = (function ttt$pieces$get_blocks(piece){
var start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(piece);
return cljs.core.mapv.call(null,((function (start){
return (function (p1__5851_SHARP_){
return ttt.pieces.move_point.call(null,start,p1__5851_SHARP_);
});})(start))
,new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(piece));
});
ttt.pieces.get_blocks_under_piece = (function ttt$pieces$get_blocks_under_piece(piece){
return cljs.core.map.call(null,(function (p__5854){
var vec__5855 = p__5854;
var bx = cljs.core.nth.call(null,vec__5855,(0),null);
var by = cljs.core.nth.call(null,vec__5855,(1),null);
var bz = cljs.core.nth.call(null,vec__5855,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx,by,(bz - (1))], null);
}),ttt.pieces.get_blocks.call(null,piece));
});
ttt.pieces.contains_point = (function ttt$pieces$contains_point(piece,point){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([point], true),new cljs.core.Keyword(null,"blocs","blocs",-76121678).cljs$core$IFn$_invoke$arity$1(piece));
});
ttt.pieces.get_neighbor_blocks = (function ttt$pieces$get_neighbor_blocks(blocks,p__5858,edge){
var vec__5860 = p__5858;
var x = cljs.core.nth.call(null,vec__5860,(0),null);
var y = cljs.core.nth.call(null,vec__5860,(1),null);
var z = cljs.core.nth.call(null,vec__5860,(2),null);
var targets = cljs.core.map.call(null,((function (vec__5860,x,y,z){
return (function (p1__5856_SHARP_){
return ttt.pieces.move_point.call(null,p1__5856_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null));
});})(vec__5860,x,y,z))
,cljs.core.get.call(null,ttt.edges.edge_neighbors,edge));
return cljs.core.filter.call(null,((function (targets,vec__5860,x,y,z){
return (function (p1__5857_SHARP_){
return cljs.core.some.call(null,cljs.core.set.call(null,targets),cljs.core.PersistentHashSet.fromArray([p1__5857_SHARP_], true));
});})(targets,vec__5860,x,y,z))
,blocks);
});
ttt.pieces.edge_visible_QMARK_ = (function ttt$pieces$edge_visible_QMARK_(blocks,point,edge){
var sb = ttt.pieces.get_neighbor_blocks.call(null,blocks,point,edge);
return cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,sb));
});
ttt.pieces.calculate_piece_edges = (function ttt$pieces$calculate_piece_edges(piece){
var edges = cljs.core.map.call(null,(function (b){
return cljs.core.vec.call(null,cljs.core.filter.call(null,(function (p1__5861_SHARP_){
return ttt.pieces.edge_visible_QMARK_.call(null,new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(piece),b,p1__5861_SHARP_);
}),cljs.core.keys.call(null,ttt.edges.edge_neighbors)));
}),new cljs.core.Keyword(null,"blocks","blocks",-610462153).cljs$core$IFn$_invoke$arity$1(piece));
return cljs.core.assoc.call(null,piece,new cljs.core.Keyword(null,"edges","edges",-694791395),edges);
});
ttt.pieces.min_max_vals = (function ttt$pieces$min_max_vals(vs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,vs),cljs.core.reduce.call(null,cljs.core.max,vs)], null);
});
ttt.pieces.calculate_center = (function ttt$pieces$calculate_center(vs){
return cljs.core.quot.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,ttt.pieces.min_max_vals.call(null,vs)),(2));
});
ttt.pieces.center_piece = (function ttt$pieces$center_piece(p__5863){
var map__5868 = p__5863;
var map__5868__$1 = ((((!((map__5868 == null)))?((((map__5868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5868):map__5868);
var piece = map__5868__$1;
var blocks = cljs.core.get.call(null,map__5868__$1,new cljs.core.Keyword(null,"blocks","blocks",-610462153));
var center_x = ttt.pieces.calculate_center.call(null,cljs.core.map.call(null,cljs.core.first,blocks));
var center_y = ttt.pieces.calculate_center.call(null,cljs.core.map.call(null,cljs.core.second,blocks));
var center_z = ttt.pieces.calculate_center.call(null,cljs.core.map.call(null,((function (center_x,center_y,map__5868,map__5868__$1,piece,blocks){
return (function (p__5870){
var vec__5871 = p__5870;
var _ = cljs.core.nth.call(null,vec__5871,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__5871,(1),null);
var z = cljs.core.nth.call(null,vec__5871,(2),null);
return z;
});})(center_x,center_y,map__5868,map__5868__$1,piece,blocks))
,blocks));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.map.call(null,((function (center_x,center_y,center_z,map__5868,map__5868__$1,piece,blocks){
return (function (p1__5862_SHARP_){
return ttt.pieces.move_point.call(null,p1__5862_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- center_x),(- center_y),(- center_z)], null));
});})(center_x,center_y,center_z,map__5868,map__5868__$1,piece,blocks))
,blocks)], null);
});
ttt.pieces.create_piece = (function ttt$pieces$create_piece(var_args){
var args__5733__auto__ = [];
var len__5726__auto___5873 = arguments.length;
var i__5727__auto___5874 = (0);
while(true){
if((i__5727__auto___5874 < len__5726__auto___5873)){
args__5733__auto__.push((arguments[i__5727__auto___5874]));

var G__5875 = (i__5727__auto___5874 + (1));
i__5727__auto___5874 = G__5875;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((0) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((0)),(0))):null);
return ttt.pieces.create_piece.cljs$core$IFn$_invoke$arity$variadic(argseq__5734__auto__);
});

ttt.pieces.create_piece.cljs$core$IFn$_invoke$arity$variadic = (function (blocks){
return ttt.pieces.calculate_piece_edges.call(null,cljs.core.assoc.call(null,ttt.pieces.center_piece.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),blocks], null)),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)));
});

ttt.pieces.create_piece.cljs$lang$maxFixedArity = (0);

ttt.pieces.create_piece.cljs$lang$applyTo = (function (seq5872){
return ttt.pieces.create_piece.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq5872));
});
ttt.pieces.bar_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(0)], null));
ttt.pieces.cube_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null));
ttt.pieces.l_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null));
ttt.pieces.s_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0)], null));
ttt.pieces.dot_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));
ttt.pieces.t_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null));
ttt.pieces.short_bar_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null));
ttt.pieces.short_l_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null));
ttt.pieces.square_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null));
ttt.pieces.extended_bar_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4),(0)], null));
ttt.pieces.bumpy_cube_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1),(1)], null));
ttt.pieces.right_l_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null));
ttt.pieces.left_l_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-1)], null));
ttt.pieces.w_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(0)], null));
ttt.pieces.long_t_piece = ttt.pieces.create_piece.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3),(0)], null));
ttt.pieces.create_random_piece = (function ttt$pieces$create_random_piece(size){
var random_blocks = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.take.call(null,size,cljs.core.iterate.call(null,(function (p__5878){
var vec__5879 = p__5878;
var x = cljs.core.nth.call(null,vec__5879,(0),null);
var y = cljs.core.nth.call(null,vec__5879,(1),null);
var z = cljs.core.nth.call(null,vec__5879,(2),null);
var delta = (((0.5 < cljs.core.rand.call(null)))?(-1):(1));
var axis = cljs.core.rand.call(null);
if((axis < ((1) / (3)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + delta),y,z], null);
} else {
if((axis < ((2) / (3)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + delta),z], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(z + delta)], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)))));
return cljs.core.apply.call(null,ttt.pieces.create_piece,random_blocks);
});
ttt.pieces.pieces = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.bar_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.cube_piece,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.l_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.s_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.dot_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.t_piece,(3)], null)], null);
ttt.pieces.small_pieces = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.cube_piece,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.l_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.s_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.dot_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.t_piece,(3)], null)], null);
ttt.pieces.flat_pieces = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.square_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.short_l_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.short_bar_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.dot_piece,(3)], null)], null);
ttt.pieces.extended_pieces = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.extended_bar_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.right_l_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.left_l_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.w_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.long_t_piece,(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.pieces.bumpy_cube_piece,(1)], null)], null);
ttt.pieces.piece_sets = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"standard","standard",-1769206695),ttt.pieces.pieces,new cljs.core.Keyword(null,"small","small",2133478704),ttt.pieces.small_pieces,new cljs.core.Keyword(null,"flat","flat",577594262),ttt.pieces.flat_pieces,new cljs.core.Keyword(null,"extended","extended",-1515212057),ttt.pieces.extended_pieces,new cljs.core.Keyword(null,"random4","random4",1102418757),(function (){
return ttt.pieces.create_random_piece.call(null,(4));
}),new cljs.core.Keyword(null,"random5","random5",500081788),(function (){
return ttt.pieces.create_random_piece.call(null,(5));
})], null);

//# sourceMappingURL=pieces.js.map?rel=1464143784266