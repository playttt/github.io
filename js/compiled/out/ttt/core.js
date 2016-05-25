// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ttt.config');
goog.require('ttt.views');
goog.require('ttt.routes');
goog.require('ttt.handlers');
goog.require('re_frame.core');
goog.require('ttt.subs');
if(cljs.core.truth_(ttt.config.debug_QMARK_)){
cljs.core.println.call(null,"dev mode");
} else {
}
ttt.core.mount_root = (function ttt$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.main_panel], null),document.getElementById("app"));
});
ttt.core.handle_keydown = (function ttt$core$handle_keydown(e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-down","key-down",998681515),e], null));

return e.preventDefault();
});
ttt.core.handle_resize = (function ttt$core$handle_resize(e){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-resized","window-resized",-729423083),window.innerWidth,window.innerHeight], null));
});
ttt.core.init = (function ttt$core$init(){
ttt.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

document.addEventListener("keydown",ttt.core.handle_keydown);

window.addEventListener("resize",ttt.core.handle_resize);

return ttt.core.mount_root.call(null);
});
goog.exportSymbol('ttt.core.init', ttt.core.init);

//# sourceMappingURL=core.js.map?rel=1464143794442