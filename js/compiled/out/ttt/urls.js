// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.urls');
goog.require('cljs.core');
ttt.urls.naked_urls_QMARK_ = false;
ttt.urls.naked = (function ttt$urls$naked(url_str){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,url_str));
});
ttt.urls.no_params_url = (function ttt$urls$no_params_url(url_str){
return (function() {
var G__5884 = null;
var G__5884__0 = (function (){
return url_str;
});
var G__5884__1 = (function (params){
return url_str;
});
G__5884 = function(params){
switch(arguments.length){
case 0:
return G__5884__0.call(this);
case 1:
return G__5884__1.call(this,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__5884.cljs$core$IFn$_invoke$arity$0 = G__5884__0;
G__5884.cljs$core$IFn$_invoke$arity$1 = G__5884__1;
return G__5884;
})()
});
ttt.urls.menu = ttt.urls.no_params_url.call(null,"#/");
ttt.urls.credits = ttt.urls.no_params_url.call(null,"#/about");
ttt.urls.new_game = ttt.urls.no_params_url.call(null,"#/newgame");
ttt.urls.options = ttt.urls.no_params_url.call(null,"#/options");
ttt.urls.game = ttt.urls.no_params_url.call(null,"#/game");
ttt.urls.game_over = ttt.urls.no_params_url.call(null,"#/gameover");
ttt.urls.panel_urls = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"menu-panel","menu-panel",-621117001),ttt.urls.menu,new cljs.core.Keyword(null,"credits-panel","credits-panel",-770486210),ttt.urls.credits,new cljs.core.Keyword(null,"new-game-panel","new-game-panel",-691893952),ttt.urls.new_game,new cljs.core.Keyword(null,"options-panel","options-panel",-1736521983),ttt.urls.options,new cljs.core.Keyword(null,"game-panel","game-panel",1331591233),ttt.urls.game,new cljs.core.Keyword(null,"game-over-panel","game-over-panel",454405864),ttt.urls.game_over], null);
ttt.urls.url_for_panel = (function ttt$urls$url_for_panel(panel,params){
return cljs.core.apply.call(null,ttt.urls.panel_urls.call(null,panel),params);
});

//# sourceMappingURL=urls.js.map?rel=1464143784294