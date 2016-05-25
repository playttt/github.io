// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.edges');
goog.require('cljs.core');
ttt.edges.INFR = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"IN","IN",766793285),null,new cljs.core.Keyword(null,"FR","FR",-1859255911),null], null), null);
ttt.edges.INDE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"IN","IN",766793285),null,new cljs.core.Keyword(null,"DE","DE",-1642402465),null], null), null);
ttt.edges.INTR = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"IN","IN",766793285),null,new cljs.core.Keyword(null,"TR","TR",-2070262539),null], null), null);
ttt.edges.INIZ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"IZ","IZ",576071649),null,new cljs.core.Keyword(null,"IN","IN",766793285),null], null), null);
ttt.edges.SUFR = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"SU","SU",38647082),null,new cljs.core.Keyword(null,"FR","FR",-1859255911),null], null), null);
ttt.edges.SUDE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"SU","SU",38647082),null,new cljs.core.Keyword(null,"DE","DE",-1642402465),null], null), null);
ttt.edges.SUTR = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"SU","SU",38647082),null,new cljs.core.Keyword(null,"TR","TR",-2070262539),null], null), null);
ttt.edges.SUIZ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"IZ","IZ",576071649),null,new cljs.core.Keyword(null,"SU","SU",38647082),null], null), null);
ttt.edges.IZFR = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"IZ","IZ",576071649),null,new cljs.core.Keyword(null,"FR","FR",-1859255911),null], null), null);
ttt.edges.IZTR = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"IZ","IZ",576071649),null,new cljs.core.Keyword(null,"TR","TR",-2070262539),null], null), null);
ttt.edges.DEFR = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"FR","FR",-1859255911),null,new cljs.core.Keyword(null,"DE","DE",-1642402465),null], null), null);
ttt.edges.DETR = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"TR","TR",-2070262539),null,new cljs.core.Keyword(null,"DE","DE",-1642402465),null], null), null);
ttt.edges.edge_neighbors = cljs.core.PersistentHashMap.fromArrays([ttt.edges.SUDE,ttt.edges.SUFR,ttt.edges.INIZ,ttt.edges.DETR,ttt.edges.IZFR,ttt.edges.IZTR,ttt.edges.DEFR,ttt.edges.SUIZ,ttt.edges.INTR,ttt.edges.SUTR,ttt.edges.INDE,ttt.edges.INFR],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(-1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(-1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(-1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(-1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1),(-1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(1)], null)], null)]);
ttt.edges.rotations = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"DE","DE",-1642402465),new cljs.core.Keyword(null,"DE","DE",-1642402465)], null),new cljs.core.Keyword(null,"counterclockwise","counterclockwise",63857611),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"DE","DE",-1642402465),new cljs.core.Keyword(null,"DE","DE",-1642402465)], null)], null),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"DE","DE",-1642402465),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"DE","DE",-1642402465),new cljs.core.Keyword(null,"FR","FR",-1859255911)], null),new cljs.core.Keyword(null,"counterclockwise","counterclockwise",63857611),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"DE","DE",-1642402465),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"DE","DE",-1642402465),new cljs.core.Keyword(null,"TR","TR",-2070262539)], null)], null),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"DE","DE",-1642402465),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"DE","DE",-1642402465),new cljs.core.Keyword(null,"SU","SU",38647082)], null),new cljs.core.Keyword(null,"counterclockwise","counterclockwise",63857611),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"IN","IN",766793285),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"DE","DE",-1642402465),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"FR","FR",-1859255911),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"TR","TR",-2070262539),new cljs.core.Keyword(null,"IZ","IZ",576071649),new cljs.core.Keyword(null,"SU","SU",38647082),new cljs.core.Keyword(null,"DE","DE",-1642402465),new cljs.core.Keyword(null,"IN","IN",766793285)], null)], null)], null);
ttt.edges.rotate_plane = (function ttt$edges$rotate_plane(axis,direction,plane){
return cljs.core.get_in.call(null,ttt.edges.rotations,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [axis,direction,plane], null));
});
ttt.edges.rotate_edge = (function ttt$edges$rotate_edge(axis,direction,edge){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,ttt.edges.rotate_plane,axis,direction),edge));
});

//# sourceMappingURL=edges.js.map?rel=1464143784176