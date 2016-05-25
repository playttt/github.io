// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.routes');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('goog.history.EventType');
goog.require('ttt.urls');
goog.require('goog.History');
goog.require('goog.events');
goog.require('accountant.core');
goog.require('re_frame.core');
ttt.routes.hook_browser_navigation_BANG_ = (function ttt$routes$hook_browser_navigation_BANG_(){
var G__12506 = (new goog.History());
goog.events.listen(G__12506,goog.history.EventType.NAVIGATE,((function (G__12506){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__12506))
);

G__12506.setEnabled(true);

return G__12506;
});
ttt.routes.app_routes = (function ttt$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__10003__auto___12543 = (function (params__10004__auto__){
if(cljs.core.map_QMARK_.call(null,params__10004__auto__)){
var map__12525 = params__10004__auto__;
var map__12525__$1 = ((((!((map__12525 == null)))?((((map__12525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12525):map__12525);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menu-panel","menu-panel",-621117001)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10004__auto__)){
var vec__12527 = params__10004__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"menu-panel","menu-panel",-621117001)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,ttt.urls.naked.call(null,ttt.urls.menu.call(null)),action__10003__auto___12543);


var action__10003__auto___12544 = (function (params__10004__auto__){
if(cljs.core.map_QMARK_.call(null,params__10004__auto__)){
var map__12528 = params__10004__auto__;
var map__12528__$1 = ((((!((map__12528 == null)))?((((map__12528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12528):map__12528);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"credits-panel","credits-panel",-770486210)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10004__auto__)){
var vec__12530 = params__10004__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"credits-panel","credits-panel",-770486210)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,ttt.urls.naked.call(null,ttt.urls.credits.call(null)),action__10003__auto___12544);


var action__10003__auto___12545 = (function (params__10004__auto__){
if(cljs.core.map_QMARK_.call(null,params__10004__auto__)){
var map__12531 = params__10004__auto__;
var map__12531__$1 = ((((!((map__12531 == null)))?((((map__12531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12531):map__12531);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"new-game-panel","new-game-panel",-691893952)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10004__auto__)){
var vec__12533 = params__10004__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"new-game-panel","new-game-panel",-691893952)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,ttt.urls.naked.call(null,ttt.urls.new_game.call(null)),action__10003__auto___12545);


var action__10003__auto___12546 = (function (params__10004__auto__){
if(cljs.core.map_QMARK_.call(null,params__10004__auto__)){
var map__12534 = params__10004__auto__;
var map__12534__$1 = ((((!((map__12534 == null)))?((((map__12534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12534):map__12534);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"options-panel","options-panel",-1736521983)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10004__auto__)){
var vec__12536 = params__10004__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"options-panel","options-panel",-1736521983)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,ttt.urls.naked.call(null,ttt.urls.options.call(null)),action__10003__auto___12546);


var action__10003__auto___12547 = (function (params__10004__auto__){
if(cljs.core.map_QMARK_.call(null,params__10004__auto__)){
var map__12537 = params__10004__auto__;
var map__12537__$1 = ((((!((map__12537 == null)))?((((map__12537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12537):map__12537);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"game-panel","game-panel",1331591233)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10004__auto__)){
var vec__12539 = params__10004__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"game-panel","game-panel",1331591233)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,ttt.urls.naked.call(null,ttt.urls.game.call(null)),action__10003__auto___12547);


var action__10003__auto___12548 = (function (params__10004__auto__){
if(cljs.core.map_QMARK_.call(null,params__10004__auto__)){
var map__12540 = params__10004__auto__;
var map__12540__$1 = ((((!((map__12540 == null)))?((((map__12540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12540):map__12540);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"game-over-panel","game-over-panel",454405864)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__10004__auto__)){
var vec__12542 = params__10004__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),new cljs.core.Keyword(null,"game-over-panel","game-over-panel",454405864)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,ttt.urls.naked.call(null,ttt.urls.game_over.call(null)),action__10003__auto___12548);


ttt.routes.hook_browser_navigation_BANG_.call(null);

return accountant.core.configure_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1464143791940