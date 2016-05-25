// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-panel-data","current-panel-data",-985621178),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"navigation-data","navigation-data",1820463149).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"panel-data","panel-data",440998509),(function (db,p__12551){
var vec__12552 = p__12551;
var _ = cljs.core.nth.call(null,vec__12552,(0),null);
var path = cljs.core.nth.call(null,vec__12552,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__12552,_,path){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null),(function (){var or__4668__auto__ = path;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())));
});})(vec__12552,_,path))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"app-data","app-data",1586751113),(function (db,p__12553){
var vec__12554 = p__12553;
var _ = cljs.core.nth.call(null,vec__12554,(0),null);
var path = cljs.core.nth.call(null,vec__12554,(1),null);
return reagent.ratom.make_reaction.call(null,((function (vec__12554,_,path){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,db),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113)], null),(function (){var or__4668__auto__ = path;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())));
});})(vec__12554,_,path))
);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"all-data","all-data",649969801),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.deref.call(null,db);
}));
}));

//# sourceMappingURL=subs.js.map?rel=1464143791956