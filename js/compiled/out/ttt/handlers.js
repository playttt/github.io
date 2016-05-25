// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.handlers');
goog.require('cljs.core');
goog.require('ttt.pieces');
goog.require('ttt.audio');
goog.require('ttt.gamelogic');
goog.require('ttt.urls');
goog.require('alandipert.storage_atom');
goog.require('ttt.db');
goog.require('accountant.core');
goog.require('re_frame.core');
ttt.handlers.durable_data = alandipert.storage_atom.local_storage.call(null,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auth-data","auth-data",1025396632),cljs.core.PersistentVector.EMPTY], null)),new cljs.core.Keyword(null,"prefs","prefs",-1818938470));
ttt.handlers.menu_entries;
ttt.handlers.resume = (function ttt$handlers$resume(db){
if(cljs.core.truth_(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"paused","paused",-1710376127)], null)))){
accountant.core.navigate_BANG_.call(null,ttt.urls.game.call(null));

cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"paused","paused",-1710376127)], null),false);
} else {
}

return db;
});
ttt.handlers.select_next_entry = (function ttt$handlers$select_next_entry(db){
var entries = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"entries","entries",-86943161)], null));
var selected_entry = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636)], null));
ttt.audio.play.call(null,db,new cljs.core.Keyword(null,"menu-change","menu-change",2011053067));

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636)], null),cljs.core.rem.call(null,(selected_entry + (1)),cljs.core.count.call(null,entries)));
});
ttt.handlers.select_previous_entry = (function ttt$handlers$select_previous_entry(db){
var entries = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"entries","entries",-86943161)], null));
var selected_entry = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636)], null));
ttt.audio.play.call(null,db,new cljs.core.Keyword(null,"menu-change","menu-change",2011053067));

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636)], null),cljs.core.rem.call(null,(cljs.core.count.call(null,entries) + (selected_entry - (1))),cljs.core.count.call(null,entries)));
});
ttt.handlers.fire_entry_action = (function ttt$handlers$fire_entry_action(db){
var entries = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"entries","entries",-86943161)], null));
var selected_entry = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636)], null));
var entry_name = cljs.core.nth.call(null,entries,selected_entry);
ttt.audio.play.call(null,db,new cljs.core.Keyword(null,"menu-accept","menu-accept",1252857456));

return cljs.core.get_in.call(null,ttt.handlers.menu_entries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [entry_name,new cljs.core.Keyword(null,"action","action",-811238024)], null)).call(null,db);
});
ttt.handlers.validate_menu_options = (function ttt$handlers$validate_menu_options(db){
var panel_data = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null));
var pit_size_option = new cljs.core.Keyword(null,"pit-size","pit-size",588130476).cljs$core$IFn$_invoke$arity$1(panel_data);
var handicap_option = new cljs.core.Keyword(null,"handicap","handicap",653637002).cljs$core$IFn$_invoke$arity$1(panel_data);
if(cljs.core.truth_((function (){var and__4656__auto__ = pit_size_option;
if(cljs.core.truth_(and__4656__auto__)){
return handicap_option;
} else {
return and__4656__auto__;
}
})())){
var vec__12428 = cljs.core.nth.call(null,ttt.db.pit_sizes,pit_size_option);
var _ = cljs.core.nth.call(null,vec__12428,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12428,(1),null);
var d = cljs.core.nth.call(null,vec__12428,(2),null);
if((handicap_option >= d)){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"handicap","handicap",653637002)], null),(d - (1)));
} else {
return db;
}
} else {
return db;
}
});
ttt.handlers.update_selected_option = (function ttt$handlers$update_selected_option(db,update_fn){
var entries = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"entries","entries",-86943161)], null));
var selected_entry = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636)], null));
var entry_name = cljs.core.nth.call(null,entries,selected_entry);
var map__12431 = cljs.core.get.call(null,ttt.handlers.menu_entries,entry_name);
var map__12431__$1 = ((((!((map__12431 == null)))?((((map__12431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12431):map__12431);
var path = cljs.core.get.call(null,map__12431__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__12431__$1,new cljs.core.Keyword(null,"options","options",99638489));
var switch_fn = cljs.core.get.call(null,map__12431__$1,new cljs.core.Keyword(null,"switch-fn","switch-fn",425473120));
var change_value_fn = ((function (entries,selected_entry,entry_name,map__12431,map__12431__$1,path,options,switch_fn){
return (function (db__$1){
if(cljs.core.truth_(switch_fn)){
return cljs.core.assoc_in.call(null,db__$1,path,switch_fn.call(null,cljs.core.get_in.call(null,db__$1,path)));
} else {
var option_count = cljs.core.count.call(null,options.call(null,db__$1));
return cljs.core.assoc_in.call(null,db__$1,path,cljs.core.rem.call(null,(option_count + update_fn.call(null,cljs.core.get_in.call(null,db__$1,path))),option_count));
}
});})(entries,selected_entry,entry_name,map__12431,map__12431__$1,path,options,switch_fn))
;
ttt.audio.play.call(null,db,new cljs.core.Keyword(null,"value-change","value-change",-895685042));

return ttt.handlers.validate_menu_options.call(null,change_value_fn.call(null,db));
});
ttt.handlers.replace_label_key = (function ttt$handlers$replace_label_key(m,label,new_key){
if(cljs.core.truth_(m.call(null,new_key))){
return m;
} else {
return cljs.core.reduce.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__12435){
var vec__12436 = p__12435;
var k = cljs.core.nth.call(null,vec__12436,(0),null);
var v = cljs.core.nth.call(null,vec__12436,(1),null);
if(cljs.core._EQ_.call(null,v,label)){
return cljs.core.PersistentArrayMap.fromArray([new_key,v], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([k,v], true, false);
}
}),m));
}
});
ttt.handlers.set_key_binding = (function ttt$handlers$set_key_binding(db,kc){
var entries = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"entries","entries",-86943161)], null));
var selected_entry = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636)], null));
var entry_name = cljs.core.nth.call(null,entries,selected_entry);
var map__12439 = cljs.core.get.call(null,ttt.handlers.menu_entries,entry_name);
var map__12439__$1 = ((((!((map__12439 == null)))?((((map__12439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12439):map__12439);
var path = cljs.core.get.call(null,map__12439__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var binding_label = cljs.core.get.call(null,map__12439__$1,new cljs.core.Keyword(null,"binding-label","binding-label",-1884240282));
ttt.audio.play.call(null,db,new cljs.core.Keyword(null,"value-change","value-change",-895685042));

return cljs.core.update_in.call(null,db,path,ttt.handlers.replace_label_key,binding_label,kc);
});
ttt.handlers.back_fn = (function ttt$handlers$back_fn(db){
accountant.core.navigate_BANG_.call(null,ttt.urls.menu.call(null));

return db;
});
ttt.handlers.key_binding_specs = (function ttt$handlers$key_binding_specs(label){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"locked-entry?","locked-entry?",1130188158)], null),true);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null),new cljs.core.Keyword(null,"binding-label","binding-label",-1884240282),label], null);
});
ttt.handlers.menu_entries = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"rotate-z-entry","rotate-z-entry",-1097447744),new cljs.core.Keyword(null,"options-entry","options-entry",-279954560),new cljs.core.Keyword(null,"new-game-level-entry","new-game-level-entry",459789889),new cljs.core.Keyword(null,"new-game-start-game-entry","new-game-start-game-entry",-1827555004),new cljs.core.Keyword(null,"volume-entry","volume-entry",305285062),new cljs.core.Keyword(null,"rotate-y-entry","rotate-y-entry",1436500295),new cljs.core.Keyword(null,"reset-defaults-entry","reset-defaults-entry",333936680),new cljs.core.Keyword(null,"option-accept-entry","option-accept-entry",1171803112),new cljs.core.Keyword(null,"sound-on-entry","sound-on-entry",-811755095),new cljs.core.Keyword(null,"credits-cancel-entry","credits-cancel-entry",1478873099),new cljs.core.Keyword(null,"new-game-cancel-entry","new-game-cancel-entry",2017950417),new cljs.core.Keyword(null,"rotate-x-reverse-entry","rotate-x-reverse-entry",-1550251790),new cljs.core.Keyword(null,"move-right-entry","move-right-entry",748674418),new cljs.core.Keyword(null,"option-cancel-entry","option-cancel-entry",-1526876270),new cljs.core.Keyword(null,"new-game-handicap-entry","new-game-handicap-entry",-1101710414),new cljs.core.Keyword(null,"game-over-entry","game-over-entry",511405459),new cljs.core.Keyword(null,"rotate-x-entry","rotate-x-entry",389895189),new cljs.core.Keyword(null,"resume-entry","resume-entry",1928610869),new cljs.core.Keyword(null,"credits-entry","credits-entry",2029900149),new cljs.core.Keyword(null,"new-game-pit-size-entry","new-game-pit-size-entry",800323254),new cljs.core.Keyword(null,"new-game-entry","new-game-entry",-583320456),new cljs.core.Keyword(null,"move-left-entry","move-left-entry",1690347800),new cljs.core.Keyword(null,"rotate-y-reverse-entry","rotate-y-reverse-entry",102657433),new cljs.core.Keyword(null,"new-game-mode-entry","new-game-mode-entry",728259321),new cljs.core.Keyword(null,"rotate-z-reverse-entry","rotate-z-reverse-entry",389861209),new cljs.core.Keyword(null,"move-down-entry","move-down-entry",639232733),new cljs.core.Keyword(null,"move-up-entry","move-up-entry",1018306397),new cljs.core.Keyword(null,"new-game-piece-set-entry","new-game-piece-set-entry",996262398),new cljs.core.Keyword(null,"drop-entry","drop-entry",-1166023201)],[ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"rotate-z","rotate-z",-1639598055)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
accountant.core.navigate_BANG_.call(null,ttt.urls.options.call(null));

return db;
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
return ttt.handlers.update_selected_option.call(null,db,cljs.core.inc);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"level","level",1290497552)], null),new cljs.core.Keyword(null,"options","options",99638489),(function (db){
return ttt.db.levels;
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-game","start-game",115628303)], null));

return db;
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
return ttt.handlers.update_selected_option.call(null,db,cljs.core.inc);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"volume","volume",1900330799)], null),new cljs.core.Keyword(null,"options","options",99638489),(function (){
return cljs.core.range.call(null,(5));
})], null),ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"rotate-y","rotate-y",-463882110)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-default-options","reset-default-options",-2089694881)], null));

return db;
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-options","commit-options",421102942)], null));

return ttt.handlers.back_fn.call(null,db);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-sound","toggle-sound",1613197294)], null));

return db;
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"sound-on?","sound-on?",-1242747885)], null),new cljs.core.Keyword(null,"switch-fn","switch-fn",425473120),cljs.core.not], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),ttt.handlers.back_fn], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),ttt.handlers.back_fn], null),ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"rotate-x-reverse","rotate-x-reverse",596929270)),ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"right","right",-452581833)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),ttt.handlers.back_fn], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
return ttt.handlers.update_selected_option.call(null,db,cljs.core.inc);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"handicap","handicap",653637002)], null),new cljs.core.Keyword(null,"options","options",99638489),(function (db){
var vec__12441 = cljs.core.nth.call(null,ttt.db.pit_sizes,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"pit-size","pit-size",588130476)], null)));
var _ = cljs.core.nth.call(null,vec__12441,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__12441,(1),null);
var d = cljs.core.nth.call(null,vec__12441,(2),null);
return cljs.core.range.call(null,d);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-high-score","add-high-score",795483662),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"player-name","player-name",-823697956)], null)),cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"score","score",-1963588780)], null))], null));

accountant.core.navigate_BANG_.call(null,ttt.urls.menu.call(null));

return db;
})], null),ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"rotate-x","rotate-x",662700473)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),ttt.handlers.resume], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
accountant.core.navigate_BANG_.call(null,ttt.urls.credits.call(null));

return db;
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
return ttt.handlers.update_selected_option.call(null,db,cljs.core.inc);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"pit-size","pit-size",588130476)], null),new cljs.core.Keyword(null,"options","options",99638489),(function (db){
return ttt.db.pit_sizes;
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
accountant.core.navigate_BANG_.call(null,ttt.urls.new_game.call(null));

return db;
})], null),ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"left","left",-399115937)),ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"rotate-y-reverse","rotate-y-reverse",545446234)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
return ttt.handlers.update_selected_option.call(null,db,cljs.core.inc);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"options","options",99638489),(function (db){
return ttt.db.modes;
})], null),ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"rotate-z-reverse","rotate-z-reverse",-1131821843)),ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"down","down",1565245570)),ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"up","up",-269712113)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),(function (db){
return ttt.handlers.update_selected_option.call(null,db,cljs.core.inc);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"piece-set","piece-set",-133770732)], null),new cljs.core.Keyword(null,"options","options",99638489),(function (db){
return cljs.core.keys.call(null,ttt.pieces.piece_sets);
})], null),ttt.handlers.key_binding_specs.call(null,new cljs.core.Keyword(null,"drop","drop",364481611))]);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"toggle-sound","toggle-sound",1613197294),(function (db,_){
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"sound-on?","sound-on?",-1242747885)], null),cljs.core.not);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"reset-default-options","reset-default-options",-2089694881),(function (db,_){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null),cljs.core.merge.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null)),ttt.db.default_options));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"commit-options","commit-options",421102942),(function (db,_){
var new_options = cljs.core.dissoc.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null)),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149));
cljs.core.swap_BANG_.call(null,ttt.handlers.durable_data,cljs.core.assoc,new cljs.core.Keyword(null,"options","options",99638489),new_options);

return ttt.handlers.back_fn.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489)], null),new_options));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"select-menu-entry","select-menu-entry",-1757851637),(function (db,p__12442){
var vec__12443 = p__12442;
var _ = cljs.core.nth.call(null,vec__12443,(0),null);
var name = cljs.core.nth.call(null,vec__12443,(1),null);
var entries = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"entries","entries",-86943161)], null));
var index = cljs.core.clj__GT_js.call(null,entries).indexOf(cljs.core.clj__GT_js.call(null,name));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636)], null),index);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"fire-selected-menu-entry","fire-selected-menu-entry",1682831416),(function (db,_){
return ttt.handlers.fire_entry_action.call(null,db);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-selected-menu-entry","update-selected-menu-entry",1755130172),(function (db,p__12444){
var vec__12445 = p__12444;
var _ = cljs.core.nth.call(null,vec__12445,(0),null);
var action = cljs.core.nth.call(null,vec__12445,(1),null);
return ttt.handlers.update_selected_option.call(null,db,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inc","inc",-1316026094),cljs.core.inc,new cljs.core.Keyword(null,"dec","dec",1888433436),cljs.core.dec], null).call(null,action));
}));
ttt.handlers.start_caret_timer = (function ttt$handlers$start_caret_timer(db,timer_field_id,field_id){
var delay = (300);
var timer_id = setInterval(((function (delay){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"caret-tick","caret-tick",2126017173),field_id], null));
});})(delay))
,delay);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),timer_field_id], null),timer_id);
});
ttt.handlers.stop_caret_timer = (function ttt$handlers$stop_caret_timer(db,timer_field_id){
var temp__4423__auto__ = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),timer_field_id], null));
if(cljs.core.truth_(temp__4423__auto__)){
var timer_id = temp__4423__auto__;
clearInterval(timer_id);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),timer_field_id], null),null);
} else {
return db;
}
});
ttt.handlers.in_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"new-game-panel","new-game-panel",-691893952),(function (p1__12446_SHARP_){
return cljs.core.assoc_in.call(null,p1__12446_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"pit-size","pit-size",588130476),(1),new cljs.core.Keyword(null,"level","level",1290497552),(0),new cljs.core.Keyword(null,"mode","mode",654403691),(0),new cljs.core.Keyword(null,"handicap","handicap",653637002),(0),new cljs.core.Keyword(null,"piece-set","piece-set",-133770732),(0),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-game-pit-size-entry","new-game-pit-size-entry",800323254),new cljs.core.Keyword(null,"new-game-level-entry","new-game-level-entry",459789889),new cljs.core.Keyword(null,"new-game-mode-entry","new-game-mode-entry",728259321),new cljs.core.Keyword(null,"new-game-handicap-entry","new-game-handicap-entry",-1101710414),new cljs.core.Keyword(null,"new-game-piece-set-entry","new-game-piece-set-entry",996262398),new cljs.core.Keyword(null,"new-game-start-game-entry","new-game-start-game-entry",-1827555004),new cljs.core.Keyword(null,"new-game-cancel-entry","new-game-cancel-entry",2017950417)], null),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636),(0)], null)], null));
}),new cljs.core.Keyword(null,"game-panel","game-panel",1331591233),ttt.gamelogic.start_timer,new cljs.core.Keyword(null,"menu-panel","menu-panel",-621117001),(function (p1__12447_SHARP_){
return cljs.core.assoc_in.call(null,p1__12447_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entries","entries",-86943161),(cljs.core.truth_(cljs.core.get_in.call(null,p1__12447_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"paused","paused",-1710376127)], null)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-game-entry","new-game-entry",-583320456),new cljs.core.Keyword(null,"resume-entry","resume-entry",1928610869),new cljs.core.Keyword(null,"options-entry","options-entry",-279954560),new cljs.core.Keyword(null,"credits-entry","credits-entry",2029900149)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-game-entry","new-game-entry",-583320456),new cljs.core.Keyword(null,"options-entry","options-entry",-279954560),new cljs.core.Keyword(null,"credits-entry","credits-entry",2029900149)], null)),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636),(0)], null)], null));
}),new cljs.core.Keyword(null,"game-over-panel","game-over-panel",454405864),(function (p1__12448_SHARP_){
return ttt.handlers.start_caret_timer.call(null,cljs.core.assoc_in.call(null,p1__12448_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-name","player-name",-823697956),"",new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name-field","name-field",-1347695388),false,new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-over-entry","game-over-entry",511405459)], null),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636),(0)], null)], null)),new cljs.core.Keyword(null,"name-field-timer","name-field-timer",-1262022875),new cljs.core.Keyword(null,"name-field","name-field",-1347695388));
}),new cljs.core.Keyword(null,"options-panel","options-panel",-1736521983),(function (p1__12449_SHARP_){
return ttt.handlers.start_caret_timer.call(null,cljs.core.assoc_in.call(null,p1__12449_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null),cljs.core.merge.call(null,cljs.core.get_in.call(null,p1__12449_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sound-on-entry","sound-on-entry",-811755095),new cljs.core.Keyword(null,"volume-entry","volume-entry",305285062),new cljs.core.Keyword(null,"move-left-entry","move-left-entry",1690347800),new cljs.core.Keyword(null,"move-right-entry","move-right-entry",748674418),new cljs.core.Keyword(null,"move-up-entry","move-up-entry",1018306397),new cljs.core.Keyword(null,"move-down-entry","move-down-entry",639232733),new cljs.core.Keyword(null,"rotate-x-entry","rotate-x-entry",389895189),new cljs.core.Keyword(null,"rotate-y-entry","rotate-y-entry",1436500295),new cljs.core.Keyword(null,"rotate-z-entry","rotate-z-entry",-1097447744),new cljs.core.Keyword(null,"rotate-x-reverse-entry","rotate-x-reverse-entry",-1550251790),new cljs.core.Keyword(null,"rotate-y-reverse-entry","rotate-y-reverse-entry",102657433),new cljs.core.Keyword(null,"rotate-z-reverse-entry","rotate-z-reverse-entry",389861209),new cljs.core.Keyword(null,"drop-entry","drop-entry",-1166023201),new cljs.core.Keyword(null,"reset-defaults-entry","reset-defaults-entry",333936680),new cljs.core.Keyword(null,"option-accept-entry","option-accept-entry",1171803112),new cljs.core.Keyword(null,"option-cancel-entry","option-cancel-entry",-1526876270)], null),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636),(0),new cljs.core.Keyword(null,"locked-entry?","locked-entry?",1130188158),false], null)], null))),new cljs.core.Keyword(null,"binding-timer","binding-timer",-951038871),new cljs.core.Keyword(null,"binding-field","binding-field",1723191660));
}),new cljs.core.Keyword(null,"credits-panel","credits-panel",-770486210),(function (p1__12450_SHARP_){
return cljs.core.assoc_in.call(null,p1__12450_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entries","entries",-86943161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"credits-cancel-entry","credits-cancel-entry",1478873099)], null),new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636),(0)], null)], null));
})], null);
ttt.handlers.out_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"game-panel","game-panel",1331591233),ttt.gamelogic.stop_timer,new cljs.core.Keyword(null,"game-over-panel","game-over-panel",454405864),(function (p1__12451_SHARP_){
return ttt.handlers.stop_caret_timer.call(null,p1__12451_SHARP_,new cljs.core.Keyword(null,"name-field-timer","name-field-timer",-1262022875));
}),new cljs.core.Keyword(null,"options-panel","options-panel",-1736521983),(function (p1__12452_SHARP_){
return ttt.handlers.stop_caret_timer.call(null,p1__12452_SHARP_,new cljs.core.Keyword(null,"binding-timer","binding-timer",-951038871));
})], null);
ttt.handlers.accepted_keys_name = cljs.core.set.call(null,cljs.core.concat.call(null,cljs.core.range.call(null,(65),(91)),cljs.core.range.call(null,(48),(58)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32)], null)));
ttt.handlers.key_down_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"credits-panel","credits-panel",-770486210),(function (db,kc){
var G__12454 = (((cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)) instanceof cljs.core.Keyword))?cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)).fqn:null);
switch (G__12454) {
case "menu":
accountant.core.navigate_BANG_.call(null,ttt.urls.menu.call(null));

return db;

break;
case "accept":
return ttt.handlers.fire_entry_action.call(null,db);

break;
default:
return db;

}
}),new cljs.core.Keyword(null,"new-game-panel","new-game-panel",-691893952),(function (db,kc){
var G__12455 = (((cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)) instanceof cljs.core.Keyword))?cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)).fqn:null);
switch (G__12455) {
case "menu":
accountant.core.navigate_BANG_.call(null,ttt.urls.menu.call(null));

return db;

break;
case "right":
return ttt.handlers.update_selected_option.call(null,db,cljs.core.inc);

break;
case "left":
return ttt.handlers.update_selected_option.call(null,db,cljs.core.dec);

break;
case "up":
return ttt.handlers.select_previous_entry.call(null,db);

break;
case "down":
return ttt.handlers.select_next_entry.call(null,db);

break;
case "accept":
return ttt.handlers.fire_entry_action.call(null,db);

break;
default:
return db;

}
}),new cljs.core.Keyword(null,"game-panel","game-panel",1331591233),(function (db,kc){
var G__12456 = (((cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)) instanceof cljs.core.Keyword))?cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)).fqn:null);
switch (G__12456) {
case "rotate-y":
return ttt.gamelogic.rotate_piece.call(null,db,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918));

break;
case "down":
return ttt.gamelogic.move_piece.call(null,db,new cljs.core.Keyword(null,"down","down",1565245570));

break;
case "drop":
return ttt.gamelogic.drop_piece.call(null,db);

break;
case "rotate-z-reverse":
return ttt.gamelogic.rotate_piece.call(null,db,new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"counterclockwise","counterclockwise",63857611));

break;
case "up":
return ttt.gamelogic.move_piece.call(null,db,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case "rotate-x-reverse":
return ttt.gamelogic.rotate_piece.call(null,db,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"counterclockwise","counterclockwise",63857611));

break;
case "right":
return ttt.gamelogic.move_piece.call(null,db,new cljs.core.Keyword(null,"right","right",-452581833));

break;
case "rotate-z":
return ttt.gamelogic.rotate_piece.call(null,db,new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918));

break;
case "rotate-x":
return ttt.gamelogic.rotate_piece.call(null,db,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"clockwise","clockwise",-2131077918));

break;
case "rotate-y-reverse":
return ttt.gamelogic.rotate_piece.call(null,db,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"counterclockwise","counterclockwise",63857611));

break;
case "menu":
accountant.core.navigate_BANG_.call(null,ttt.urls.menu.call(null));

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"paused","paused",-1710376127)], null),true);

break;
case "left":
return ttt.gamelogic.move_piece.call(null,db,new cljs.core.Keyword(null,"left","left",-399115937));

break;
default:
return db;

}
}),new cljs.core.Keyword(null,"menu-panel","menu-panel",-621117001),(function (db,kc){
var G__12457 = (((cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)) instanceof cljs.core.Keyword))?cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)).fqn:null);
switch (G__12457) {
case "menu":
return ttt.handlers.resume.call(null,db);

break;
case "up":
return ttt.handlers.select_previous_entry.call(null,db);

break;
case "down":
return ttt.handlers.select_next_entry.call(null,db);

break;
case "accept":
return ttt.handlers.fire_entry_action.call(null,db);

break;
case "right":
return ttt.handlers.fire_entry_action.call(null,db);

break;
default:
return db;

}
}),new cljs.core.Keyword(null,"game-over-panel","game-over-panel",454405864),(function (db,kc){
var G__12458 = (((cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)) instanceof cljs.core.Keyword))?cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)).fqn:null);
switch (G__12458) {
case "accept":
return ttt.handlers.fire_entry_action.call(null,db);

break;
case "backspace":
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"player-name","player-name",-823697956)], null),((function (G__12458){
return (function (p1__12453_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.butlast.call(null,p1__12453_SHARP_));
});})(G__12458))
);

break;
default:
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"player-name","player-name",-823697956)], null),((function (G__12458){
return (function (n){
if(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([kc], true),ttt.handlers.accepted_keys_name);
if(cljs.core.truth_(and__4656__auto__)){
return (cljs.core.count.call(null,n) < (13));
} else {
return and__4656__auto__;
}
})())){
ttt.audio.play.call(null,db,new cljs.core.Keyword(null,"menu-change","menu-change",2011053067));

return clojure.string.lower_case.call(null,[cljs.core.str(n),cljs.core.str(String.fromCharCode(kc))].join(''));
} else {
return n;
}
});})(G__12458))
);

}
}),new cljs.core.Keyword(null,"options-panel","options-panel",-1736521983),(function (db,kc){
if(cljs.core.truth_(cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"locked-entry?","locked-entry?",1130188158)], null)))){
var G__12459 = (((cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)) instanceof cljs.core.Keyword))?cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)).fqn:null);
switch (G__12459) {
case "menu":
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"locked-entry?","locked-entry?",1130188158)], null),false);

break;
default:
var new_db = ttt.handlers.set_key_binding.call(null,db,kc);
if(cljs.core._EQ_.call(null,db,new_db)){
return db;
} else {
return cljs.core.assoc_in.call(null,new_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"locked-entry?","locked-entry?",1130188158)], null),false);
}

}
} else {
var G__12460 = (((cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)) instanceof cljs.core.Keyword))?cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982),kc], null)).fqn:null);
switch (G__12460) {
case "menu":
return ttt.handlers.back_fn.call(null,db);

break;
case "right":
return ttt.handlers.update_selected_option.call(null,db,cljs.core.inc);

break;
case "left":
return ttt.handlers.update_selected_option.call(null,db,cljs.core.dec);

break;
case "up":
return ttt.handlers.select_previous_entry.call(null,db);

break;
case "down":
return ttt.handlers.select_next_entry.call(null,db);

break;
case "accept":
return ttt.handlers.fire_entry_action.call(null,db);

break;
default:
return db;

}
}
})], null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
var hs = cljs.core.get.call(null,cljs.core.deref.call(null,ttt.handlers.durable_data),new cljs.core.Keyword(null,"high-scores","high-scores",-927674421),ttt.db.default_high_scores);
var options = cljs.core.get.call(null,cljs.core.deref.call(null,ttt.handlers.durable_data),new cljs.core.Keyword(null,"options","options",99638489),ttt.db.default_options);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,ttt.db.default_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"high-scores","high-scores",-927674421)], null),hs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"options","options",99638489)], null),options);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"window-resized","window-resized",-729423083),(function (db,p__12468){
var vec__12469 = p__12468;
var _ = cljs.core.nth.call(null,vec__12469,(0),null);
var w = cljs.core.nth.call(null,vec__12469,(1),null);
var h = cljs.core.nth.call(null,vec__12469,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"window-size","window-size",923834855)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null));
}));
ttt.handlers.set_callback_url = (function ttt$handlers$set_callback_url(db,callback){
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-data","navigation-data",1820463149),new cljs.core.Keyword(null,"callback-url","callback-url",-2640317)], null),callback);
});
ttt.handlers.clean_navigation_data = (function ttt$handlers$clean_navigation_data(db){
return ttt.handlers.set_callback_url.call(null,db,null);
});
ttt.handlers.get_callback_url = (function ttt$handlers$get_callback_url(db){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-data","navigation-data",1820463149),new cljs.core.Keyword(null,"callback-url","callback-url",-2640317)], null));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-active-panel","set-active-panel",-965871124),(function (db,p__12470){
var vec__12471 = p__12470;
var _ = cljs.core.nth.call(null,vec__12471,(0),null);
var active_panel = cljs.core.nth.call(null,vec__12471,(1),null);
var params = cljs.core.nth.call(null,vec__12471,(2),null);
var in_fn = (function (){var or__4668__auto__ = ttt.handlers.in_fns.call(null,active_panel);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.identity;
}
})();
var out_fn = (function (){var or__4668__auto__ = ttt.handlers.out_fns.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-data","navigation-data",1820463149),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null)));
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.identity;
}
})();
return in_fn.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,out_fn.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-data","navigation-data",1820463149),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null),active_panel),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-data","navigation-data",1820463149),new cljs.core.Keyword(null,"panel-params","panel-params",1099672237)], null),params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null),cljs.core.PersistentArrayMap.EMPTY));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-panel-data","update-panel-data",-819405036),(function (db,p__12472){
var vec__12473 = p__12472;
var _ = cljs.core.nth.call(null,vec__12473,(0),null);
var path = cljs.core.nth.call(null,vec__12473,(1),null);
var value = cljs.core.nth.call(null,vec__12473,(2),null);
return cljs.core.assoc_in.call(null,db,cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null),path)),value);
}));
ttt.handlers.generate_handicap = (function ttt$handlers$generate_handicap(w,h,d){
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__5440__auto__ = (function ttt$handlers$generate_handicap_$_iter__12482(s__12483){
return (new cljs.core.LazySeq(null,(function (){
var s__12483__$1 = s__12483;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12483__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__5436__auto__ = ((function (s__12483__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function ttt$handlers$generate_handicap_$_iter__12482_$_iter__12484(s__12485){
return (new cljs.core.LazySeq(null,((function (s__12483__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__12485__$1 = s__12485;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__12485__$1);
if(temp__4425__auto____$1){
var xs__4977__auto____$1 = temp__4425__auto____$1;
var y = cljs.core.first.call(null,xs__4977__auto____$1);
var iterys__5436__auto__ = ((function (s__12485__$1,s__12483__$1,y,xs__4977__auto____$1,temp__4425__auto____$1,x,xs__4977__auto__,temp__4425__auto__){
return (function ttt$handlers$generate_handicap_$_iter__12482_$_iter__12484_$_iter__12486(s__12487){
return (new cljs.core.LazySeq(null,((function (s__12485__$1,s__12483__$1,y,xs__4977__auto____$1,temp__4425__auto____$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__12487__$1 = s__12487;
while(true){
var temp__4425__auto____$2 = cljs.core.seq.call(null,s__12487__$1);
if(temp__4425__auto____$2){
var s__12487__$2 = temp__4425__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12487__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__12487__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__12489 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__12488 = (0);
while(true){
if((i__12488 < size__5439__auto__)){
var z = cljs.core._nth.call(null,c__5438__auto__,i__12488);
cljs.core.chunk_append.call(null,b__12489,(((cljs.core.rand.call(null) > 0.75))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null):null));

var G__12490 = (i__12488 + (1));
i__12488 = G__12490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12489),ttt$handlers$generate_handicap_$_iter__12482_$_iter__12484_$_iter__12486.call(null,cljs.core.chunk_rest.call(null,s__12487__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12489),null);
}
} else {
var z = cljs.core.first.call(null,s__12487__$2);
return cljs.core.cons.call(null,(((cljs.core.rand.call(null) > 0.75))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null):null),ttt$handlers$generate_handicap_$_iter__12482_$_iter__12484_$_iter__12486.call(null,cljs.core.rest.call(null,s__12487__$2)));
}
} else {
return null;
}
break;
}
});})(s__12485__$1,s__12483__$1,y,xs__4977__auto____$1,temp__4425__auto____$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__12485__$1,s__12483__$1,y,xs__4977__auto____$1,temp__4425__auto____$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__5437__auto__ = cljs.core.seq.call(null,iterys__5436__auto__.call(null,cljs.core.range.call(null,d)));
if(fs__5437__auto__){
return cljs.core.concat.call(null,fs__5437__auto__,ttt$handlers$generate_handicap_$_iter__12482_$_iter__12484.call(null,cljs.core.rest.call(null,s__12485__$1)));
} else {
var G__12491 = cljs.core.rest.call(null,s__12485__$1);
s__12485__$1 = G__12491;
continue;
}
} else {
return null;
}
break;
}
});})(s__12483__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__12483__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__5437__auto__ = cljs.core.seq.call(null,iterys__5436__auto__.call(null,cljs.core.range.call(null,h)));
if(fs__5437__auto__){
return cljs.core.concat.call(null,fs__5437__auto__,ttt$handlers$generate_handicap_$_iter__12482.call(null,cljs.core.rest.call(null,s__12483__$1)));
} else {
var G__12492 = cljs.core.rest.call(null,s__12483__$1);
s__12483__$1 = G__12492;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5440__auto__.call(null,cljs.core.range.call(null,w));
})()));
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"start-game","start-game",115628303),(function (db,p__12493){
var vec__12494 = p__12493;
var _ = cljs.core.nth.call(null,vec__12494,(0),null);
var panel_data = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null));
var vec__12495 = cljs.core.nth.call(null,ttt.db.pit_sizes,new cljs.core.Keyword(null,"pit-size","pit-size",588130476).cljs$core$IFn$_invoke$arity$1(panel_data));
var w = cljs.core.nth.call(null,vec__12495,(0),null);
var h = cljs.core.nth.call(null,vec__12495,(1),null);
var d = cljs.core.nth.call(null,vec__12495,(2),null);
var game_data = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"next-piece","next-piece",926032416),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pit-size","pit-size",588130476),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"playing?","playing?",-1884542863),new cljs.core.Keyword(null,"piece-set","piece-set",-133770732),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842),new cljs.core.Keyword(null,"anchored-blocks","anchored-blocks",-1283695202)],[null,cljs.core.nth.call(null,ttt.db.modes,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(panel_data)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h,d], null),cljs.core.nth.call(null,ttt.db.levels,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(panel_data)),true,cljs.core.nth.call(null,cljs.core.keys.call(null,ttt.pieces.piece_sets),new cljs.core.Keyword(null,"piece-set","piece-set",-133770732).cljs$core$IFn$_invoke$arity$1(panel_data)),cljs.core.nth.call(null,ttt.db.level_scores,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(panel_data)),null,ttt.handlers.generate_handicap.call(null,w,h,(function (){var x__5006__auto__ = d;
var y__5007__auto__ = cljs.core.nth.call(null,ttt.db.handicaps,new cljs.core.Keyword(null,"handicap","handicap",653637002).cljs$core$IFn$_invoke$arity$1(panel_data));
return ((x__5006__auto__ < y__5007__auto__) ? x__5006__auto__ : y__5007__auto__);
})())]);
accountant.core.navigate_BANG_.call(null,ttt.urls.game.call(null));

return ttt.gamelogic.add_new_piece.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735)], null),game_data));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"key-down","key-down",998681515),(function (db,p__12496){
var vec__12497 = p__12496;
var _ = cljs.core.nth.call(null,vec__12497,(0),null);
var e = cljs.core.nth.call(null,vec__12497,(1),null);
var key_code = e.keyCode;
var key_fn = cljs.core.get.call(null,ttt.handlers.key_down_fns,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigation-data","navigation-data",1820463149),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994)], null)));
var new_value = key_fn.call(null,db,key_code);
if(cljs.core.truth_(new_value)){
return new_value;
} else {
ttt.audio.play.call(null,db,new cljs.core.Keyword(null,"error","error",-978969032));

return db;
}
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"tick","tick",-835886976),(function (db,_){
ttt.audio.play.call(null,db,new cljs.core.Keyword(null,"tick","tick",-835886976));

return ttt.gamelogic.update_game.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"tick","tick",-835886976)], null),(new Date()).getTime()));
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"caret-tick","caret-tick",2126017173),(function (db,p__12499){
var vec__12500 = p__12499;
var _ = cljs.core.nth.call(null,vec__12500,(0),null);
var field_id = cljs.core.nth.call(null,vec__12500,(1),null);
return cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),field_id], null),((function (vec__12500,_,field_id){
return (function (p1__12498_SHARP_){
if((p1__12498_SHARP_ == null)){
return false;
} else {
return cljs.core.not.call(null,p1__12498_SHARP_);
}
});})(vec__12500,_,field_id))
);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"resume-game","resume-game",1362596211),(function (db,_){
accountant.core.navigate_BANG_.call(null,ttt.urls.game.call(null));

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"paused","paused",-1710376127)], null),false);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"add-high-score","add-high-score",795483662),(function (db,p__12501){
var vec__12502 = p__12501;
var _ = cljs.core.nth.call(null,vec__12502,(0),null);
var name = cljs.core.nth.call(null,vec__12502,(1),null);
var high_score = cljs.core.nth.call(null,vec__12502,(2),null);
var new_db = cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"high-scores","high-scores",-927674421)], null),((function (vec__12502,_,name,high_score){
return (function (current){
return cljs.core.take.call(null,(8),cljs.core.reverse.call(null,cljs.core.sort_by.call(null,cljs.core.second,cljs.core.conj.call(null,current,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,high_score], null)))));
});})(vec__12502,_,name,high_score))
);
cljs.core.swap_BANG_.call(null,ttt.handlers.durable_data,cljs.core.assoc,new cljs.core.Keyword(null,"high-scores","high-scores",-927674421),cljs.core.get_in.call(null,new_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.Keyword(null,"high-scores","high-scores",-927674421)], null)));

return new_db;
}));

//# sourceMappingURL=handlers.js.map?rel=1464143791884