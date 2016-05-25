// Compiled by ClojureScript 1.7.170 {}
goog.provide('ttt.views');
goog.require('cljs.core');
goog.require('ttt.pieces');
goog.require('cljs.pprint');
goog.require('re_com.core');
goog.require('ttt.renderer');
goog.require('ttt.urls');
goog.require('ttt.db');
goog.require('accountant.core');
goog.require('ttt.handlers');
goog.require('re_com.modal_panel');
goog.require('re_frame.core');
ttt.views.all_data_explorer = (function ttt$views$all_data_explorer(){
var db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"all-data","all-data",649969801)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var sb__5642__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_13702_13704 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_13703_13705 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_13702_13704,_STAR_print_fn_STAR_13703_13705,sb__5642__auto__,db){
return (function (x__5643__auto__){
return sb__5642__auto__.append(x__5643__auto__);
});})(_STAR_print_newline_STAR_13702_13704,_STAR_print_fn_STAR_13703_13705,sb__5642__auto__,db))
;

try{cljs.pprint.pprint.call(null,cljs.core.deref.call(null,db));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_13703_13705;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_13702_13704;
}
return [cljs.core.str(sb__5642__auto__)].join('');
})()], null);
});
ttt.views.t = (function ttt$views$t(x,y){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),[cljs.core.str("<use x='"),cljs.core.str(x),cljs.core.str("' y='"),cljs.core.str(y),cljs.core.str("' xlink:href='#t'>")].join('')], null)], null)], null);
});
ttt.views.ttt_logo = (function ttt$views$ttt_logo(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"295px",new cljs.core.Keyword(null,"height","height",1025178622),"170px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"t"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(120),new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"black",new cljs.core.Keyword(null,"x","x",2099068185),(35),new cljs.core.Keyword(null,"y","y",-1757859776),(45),new cljs.core.Keyword(null,"width","width",-384071477),(55),new cljs.core.Keyword(null,"height","height",1025178622),(80)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"white",new cljs.core.Keyword(null,"x","x",2099068185),(45),new cljs.core.Keyword(null,"y","y",-1757859776),(35),new cljs.core.Keyword(null,"width","width",-384071477),(35),new cljs.core.Keyword(null,"height","height",1025178622),(80)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.t,(5),(45)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.t,(85),(5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.t,(170),(45)], null)], null);
});
ttt.views.level_display = (function ttt$views$level_display(){
var level = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"level","level",1290497552)], null)], null));
return ((function (level){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(30),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"game-score"], null),"level"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(50),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"game-score"], null),cljs.core.deref.call(null,level)], null)], null);
});
;})(level))
});
ttt.views.score_display = (function ttt$views$score_display(){
var score = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"score","score",-1963588780)], null)], null));
return ((function (score){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(80),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"game-score"], null),"score"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"game-score"], null),cljs.core.deref.call(null,score)], null)], null);
});
;})(score))
});
ttt.views.next_piece_display = (function ttt$views$next_piece_display(){
var next_piece = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"next-piece","next-piece",926032416)], null)], null));
return ((function (next_piece){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(130),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"class","class",-2030961996),"game-score"], null),"next"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(-40),new cljs.core.Keyword(null,"y","y",-1757859776),(120)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.draw_falling_piece,ttt.renderer.calculate_params.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,(3),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.deref.call(null,next_piece)], null)], null)], null);
});
;})(next_piece))
});
ttt.views.left_column_width = (150);
ttt.views.game_view = (function ttt$views$game_view(){
var pit_size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"pit-size","pit-size",588130476)], null)], null));
var anchored_blocks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"anchored-blocks","anchored-blocks",-1283695202)], null)], null));
var falling_piece = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"falling-piece","falling-piece",2085218842)], null)], null));
var window_size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-size","window-size",923834855)], null)], null));
var mode = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"mode","mode",654403691)], null)], null));
return ((function (pit_size,anchored_blocks,falling_piece,window_size,mode){
return (function (){
var params = ttt.renderer.calculate_params.call(null,cljs.core.deref.call(null,pit_size),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),ttt.views.left_column_width,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,window_size)) - ttt.views.left_column_width),new cljs.core.Keyword(null,"height","height",1025178622),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,window_size)) - (1)),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 600 600"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.draw_pit_walls,params,cljs.core.deref.call(null,falling_piece),cljs.core.deref.call(null,mode)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.draw_anchored,params,cljs.core.deref.call(null,anchored_blocks),cljs.core.deref.call(null,falling_piece),cljs.core.deref.call(null,mode)], null),(cljs.core.truth_(cljs.core.deref.call(null,falling_piece))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.draw_falling_piece,params,cljs.core.deref.call(null,falling_piece)], null):null)], null);
});
;})(pit_size,anchored_blocks,falling_piece,window_size,mode))
});
ttt.views.game_panel_inner = (function ttt$views$game_panel_inner(blurred_QMARK_){
var anchored_blocks = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"anchored-blocks","anchored-blocks",-1283695202)], null)], null));
var pit_size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"pit-size","pit-size",588130476)], null)], null));
var window_size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-size","window-size",923834855)], null)], null));
var mode = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"mode","mode",654403691)], null)], null));
return ((function (anchored_blocks,pit_size,window_size,mode){
return (function (blurred_QMARK___$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,window_size)) - (1)),new cljs.core.Keyword(null,"height","height",1025178622),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,window_size)) - (1)),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"blurFilter",new cljs.core.Keyword(null,"x","x",2099068185),"0",new cljs.core.Keyword(null,"y","y",-1757859776),"0",new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),"<feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"5\">"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(blurred_QMARK___$1)?"blurred":"")], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.level_display], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.score_display], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"normal","normal",-1519123858),cljs.core.deref.call(null,mode)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.next_piece_display], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.renderer.draw_block_levels,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,window_size)),ttt.views.left_column_width,cljs.core.deref.call(null,pit_size),cljs.core.deref.call(null,anchored_blocks)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.game_view], null)], null)], null);
});
;})(anchored_blocks,pit_size,window_size,mode))
});
ttt.views.game_panel = (function ttt$views$game_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.game_panel_inner,false], null);
});
ttt.views.get_selected_entry_name = (function ttt$views$get_selected_entry_name(menu_data){
var entries = cljs.core.get_in.call(null,menu_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entries","entries",-86943161)], null));
var selected_index = cljs.core.get_in.call(null,menu_data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-entry","selected-entry",642178636)], null));
return cljs.core.nth.call(null,entries,selected_index);
});
ttt.views.text_with_spaces = (function ttt$views$text_with_spaces(attributes,text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),[cljs.core.str("<text x="),cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(attributes)),cljs.core.str(" y="),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(attributes)),cljs.core.str(" font-size="),cljs.core.str(new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(attributes)),cljs.core.str(" class='"),cljs.core.str(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attributes)),cljs.core.str("' xml:space='preserve'>"),cljs.core.str(text),cljs.core.str("</text>")].join('')], null)], null)], null);
});
ttt.views.menu_label = (function ttt$views$menu_label(var_args){
var args13706 = [];
var len__5726__auto___13709 = arguments.length;
var i__5727__auto___13710 = (0);
while(true){
if((i__5727__auto___13710 < len__5726__auto___13709)){
args13706.push((arguments[i__5727__auto___13710]));

var G__13711 = (i__5727__auto___13710 + (1));
i__5727__auto___13710 = G__13711;
continue;
} else {
}
break;
}

var G__13708 = args13706.length;
switch (G__13708) {
case 1:
return ttt.views.menu_label.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ttt.views.menu_label.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return ttt.views.menu_label.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13706.length)].join('')));

}
});

ttt.views.menu_label.cljs$core$IFn$_invoke$arity$1 = (function (label){
return ttt.views.menu_label.call(null,label,(600));
});

ttt.views.menu_label.cljs$core$IFn$_invoke$arity$2 = (function (label,width){
return ttt.views.menu_label.call(null,label,width,(20),(0));
});

ttt.views.menu_label.cljs$core$IFn$_invoke$arity$4 = (function (label,width,font_size,left_margin){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(font_size + (10))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),left_margin,new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(font_size + (10)),new cljs.core.Keyword(null,"class","class",-2030961996),"option"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.text_with_spaces,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(left_margin + (10)),new cljs.core.Keyword(null,"y","y",-1757859776),(font_size + (5)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),font_size,new cljs.core.Keyword(null,"class","class",-2030961996),"option"], null),label], null)], null);
});

ttt.views.menu_label.cljs$lang$maxFixedArity = 4;
ttt.views.menu_item = (function ttt$views$menu_item(name,label,enabled_QMARK_){
var menu_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149)], null)], null));
return ((function (menu_data){
return (function (name__$1,label__$1,enabled_QMARK___$1){
var selected_QMARK_ = cljs.core._EQ_.call(null,name__$1,ttt.views.get_selected_entry_name.call(null,cljs.core.deref.call(null,menu_data)));
var locked_QMARK_ = new cljs.core.Keyword(null,"locked-entry?","locked-entry?",1130188158).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,menu_data));
var class$ = [cljs.core.str("action option "),cljs.core.str(((selected_QMARK_)?"selected-option ":"")),cljs.core.str((cljs.core.truth_((function (){var and__4656__auto__ = enabled_QMARK___$1;
if(cljs.core.truth_(and__4656__auto__)){
return (selected_QMARK_) || (cljs.core.not.call(null,locked_QMARK_));
} else {
return and__4656__auto__;
}
})())?"":"disabled-option"))].join('');
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (selected_QMARK_,locked_QMARK_,class$,menu_data){
return (function (){
if(cljs.core.truth_((function (){var and__4656__auto__ = enabled_QMARK___$1;
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.not.call(null,locked_QMARK_);
} else {
return and__4656__auto__;
}
})())){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-menu-entry","select-menu-entry",-1757851637),name__$1], null));
} else {
return null;
}
});})(selected_QMARK_,locked_QMARK_,class$,menu_data))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_QMARK_,locked_QMARK_,class$,menu_data){
return (function (){
if(cljs.core.not.call(null,locked_QMARK_)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fire-selected-menu-entry","fire-selected-menu-entry",1682831416)], null));
} else {
return null;
}
});})(selected_QMARK_,locked_QMARK_,class$,menu_data))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),label__$1], null)], null);
});
;})(menu_data))
});
ttt.views.cycling_menu_item = (function ttt$views$cycling_menu_item(name,label,selected_option,enabled_QMARK_){
var menu_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149)], null)], null));
return ((function (menu_data){
return (function (name__$1,label__$1,selected_option__$1,enabled_QMARK___$1){
var selected_QMARK_ = cljs.core._EQ_.call(null,name__$1,ttt.views.get_selected_entry_name.call(null,cljs.core.deref.call(null,menu_data)));
var locked_QMARK_ = new cljs.core.Keyword(null,"locked-entry?","locked-entry?",1130188158).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,menu_data));
var class$ = [cljs.core.str("option "),cljs.core.str(((selected_QMARK_)?"selected-option ":"")),cljs.core.str((cljs.core.truth_((function (){var and__4656__auto__ = enabled_QMARK___$1;
if(cljs.core.truth_(and__4656__auto__)){
return (selected_QMARK_) || (cljs.core.not.call(null,locked_QMARK_));
} else {
return and__4656__auto__;
}
})())?"":"disabled-option"))].join('');
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (selected_QMARK_,locked_QMARK_,class$,menu_data){
return (function (){
if(cljs.core.truth_((function (){var and__4656__auto__ = enabled_QMARK___$1;
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.not.call(null,locked_QMARK_);
} else {
return and__4656__auto__;
}
})())){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-menu-entry","select-menu-entry",-1757851637),name__$1], null));
} else {
return null;
}
});})(selected_QMARK_,locked_QMARK_,class$,menu_data))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("label "),cljs.core.str(class$)].join('')], null),label__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(300),new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(class$),cljs.core.str(" action")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_QMARK_,locked_QMARK_,class$,menu_data){
return (function (){
if(cljs.core.not.call(null,locked_QMARK_)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-selected-menu-entry","update-selected-menu-entry",1755130172),new cljs.core.Keyword(null,"dec","dec",1888433436)], null));
} else {
return null;
}
});})(selected_QMARK_,locked_QMARK_,class$,menu_data))
], null),"<"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(340),new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("label "),cljs.core.str(class$)].join('')], null),selected_option__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(580),new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(class$),cljs.core.str(" action")].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_QMARK_,locked_QMARK_,class$,menu_data){
return (function (){
if(cljs.core.not.call(null,locked_QMARK_)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-selected-menu-entry","update-selected-menu-entry",1755130172),new cljs.core.Keyword(null,"inc","inc",-1316026094)], null));
} else {
return null;
}
});})(selected_QMARK_,locked_QMARK_,class$,menu_data))
], null),">"], null)], null);
});
;})(menu_data))
});
ttt.views.set_key_menu_item = (function ttt$views$set_key_menu_item(name,label,selected_option,enabled_QMARK_){
var menu_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149)], null)], null));
var caret_visible_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"binding-field","binding-field",1723191660)], null)], null));
return ((function (menu_data,caret_visible_QMARK_){
return (function (name__$1,label__$1,selected_option__$1,enabled_QMARK___$1){
var selected_QMARK_ = cljs.core._EQ_.call(null,name__$1,ttt.views.get_selected_entry_name.call(null,cljs.core.deref.call(null,menu_data)));
var locked_QMARK_ = new cljs.core.Keyword(null,"locked-entry?","locked-entry?",1130188158).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,menu_data));
var class$ = [cljs.core.str("action option "),cljs.core.str(((selected_QMARK_)?"selected-option ":"")),cljs.core.str((cljs.core.truth_((function (){var and__4656__auto__ = enabled_QMARK___$1;
if(cljs.core.truth_(and__4656__auto__)){
return (selected_QMARK_) || (cljs.core.not.call(null,locked_QMARK_));
} else {
return and__4656__auto__;
}
})())?"":"disabled-option"))].join('');
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (selected_QMARK_,locked_QMARK_,class$,menu_data,caret_visible_QMARK_){
return (function (){
if(cljs.core.truth_((function (){var and__4656__auto__ = enabled_QMARK___$1;
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.not.call(null,locked_QMARK_);
} else {
return and__4656__auto__;
}
})())){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-menu-entry","select-menu-entry",-1757851637),name__$1], null));
} else {
return null;
}
});})(selected_QMARK_,locked_QMARK_,class$,menu_data,caret_visible_QMARK_))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selected_QMARK_,locked_QMARK_,class$,menu_data,caret_visible_QMARK_){
return (function (){
if(cljs.core.not.call(null,locked_QMARK_)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fire-selected-menu-entry","fire-selected-menu-entry",1682831416)], null));
} else {
return null;
}
});})(selected_QMARK_,locked_QMARK_,class$,menu_data,caret_visible_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),label__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.text_with_spaces,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(340),new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),(cljs.core.truth_((function (){var and__4656__auto__ = cljs.core.deref.call(null,caret_visible_QMARK_);
if(cljs.core.truth_(and__4656__auto__)){
var and__4656__auto____$1 = selected_QMARK_;
if(and__4656__auto____$1){
return locked_QMARK_;
} else {
return and__4656__auto____$1;
}
} else {
return and__4656__auto__;
}
})())?"_":(cljs.core.truth_((function (){var and__4656__auto__ = selected_QMARK_;
if(and__4656__auto__){
return locked_QMARK_;
} else {
return and__4656__auto__;
}
})())?" ":selected_option__$1
))], null)], null);
});
;})(menu_data,caret_visible_QMARK_))
});
ttt.views.pretty_pit_size = (function ttt$views$pretty_pit_size(p__13713){
var vec__13715 = p__13713;
var x = cljs.core.nth.call(null,vec__13715,(0),null);
var y = cljs.core.nth.call(null,vec__13715,(1),null);
var z = cljs.core.nth.call(null,vec__13715,(2),null);
return [cljs.core.str(x),cljs.core.str("x"),cljs.core.str(y),cljs.core.str("x"),cljs.core.str(z)].join('');
});
ttt.views.menu_view = (function ttt$views$menu_view(var_args){
var args__5733__auto__ = [];
var len__5726__auto___13719 = arguments.length;
var i__5727__auto___13720 = (0);
while(true){
if((i__5727__auto___13720 < len__5726__auto___13719)){
args__5733__auto__.push((arguments[i__5727__auto___13720]));

var G__13721 = (i__5727__auto___13720 + (1));
i__5727__auto___13720 = G__13721;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((2) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((2)),(0))):null);
return ttt.views.menu_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5734__auto__);
});

ttt.views.menu_view.cljs$core$IFn$_invoke$arity$variadic = (function (window_size,title,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.game_panel_inner,true], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.modal_panel.modal_panel,new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"gray",new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.4,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),false,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(window_size)),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-background",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.ttt_logo], null),(cljs.core.truth_(title)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),title,new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null)], null),children)], null)], null)], null)], null);
});

ttt.views.menu_view.cljs$lang$maxFixedArity = (2);

ttt.views.menu_view.cljs$lang$applyTo = (function (seq13716){
var G__13717 = cljs.core.first.call(null,seq13716);
var seq13716__$1 = cljs.core.next.call(null,seq13716);
var G__13718 = cljs.core.first.call(null,seq13716__$1);
var seq13716__$2 = cljs.core.next.call(null,seq13716__$1);
return ttt.views.menu_view.cljs$core$IFn$_invoke$arity$variadic(G__13717,G__13718,seq13716__$2);
});
ttt.views.new_game_panel = (function ttt$views$new_game_panel(){
var panel_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null));
var window_size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-size","window-size",923834855)], null)], null));
return ((function (panel_data,window_size){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_view,cljs.core.deref.call(null,window_size),"new game",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.cycling_menu_item,new cljs.core.Keyword(null,"new-game-pit-size-entry","new-game-pit-size-entry",800323254),"pit size",ttt.views.pretty_pit_size.call(null,cljs.core.nth.call(null,ttt.db.pit_sizes,new cljs.core.Keyword(null,"pit-size","pit-size",588130476).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel_data)))),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.cycling_menu_item,new cljs.core.Keyword(null,"new-game-level-entry","new-game-level-entry",459789889),"level",cljs.core.nth.call(null,ttt.db.levels,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel_data))),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.cycling_menu_item,new cljs.core.Keyword(null,"new-game-mode-entry","new-game-mode-entry",728259321),"mode",cljs.core.name.call(null,cljs.core.nth.call(null,ttt.db.modes,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel_data)))),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.cycling_menu_item,new cljs.core.Keyword(null,"new-game-handicap-entry","new-game-handicap-entry",-1101710414),"handicap",cljs.core.nth.call(null,ttt.db.handicaps,new cljs.core.Keyword(null,"handicap","handicap",653637002).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel_data))),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.cycling_menu_item,new cljs.core.Keyword(null,"new-game-piece-set-entry","new-game-piece-set-entry",996262398),"piece set",cljs.core.name.call(null,cljs.core.nth.call(null,cljs.core.keys.call(null,ttt.pieces.piece_sets),new cljs.core.Keyword(null,"piece-set","piece-set",-133770732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel_data)))),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"new-game-start-game-entry","new-game-start-game-entry",-1827555004),"start game",true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"new-game-cancel-entry","new-game-cancel-entry",2017950417),"back",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null)], null);
});
;})(panel_data,window_size))
});
ttt.views.pad_left = (function ttt$views$pad_left(s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.take.call(null,(function (){var x__4999__auto__ = (0);
var y__5000__auto__ = (n - cljs.core.count.call(null,s));
return ((x__4999__auto__ > y__5000__auto__) ? x__4999__auto__ : y__5000__auto__);
})(),cljs.core.repeat.call(null," ")),s));
});
ttt.views.high_scores_table = (function ttt$views$high_scores_table(){
var high_scores = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-scores","high-scores",-927674421)], null)], null));
return ((function (high_scores){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,"high scores",(500),(12),(220)], null)], null),(function (){var iter__5440__auto__ = ((function (high_scores){
return (function ttt$views$high_scores_table_$_iter__13730(s__13731){
return (new cljs.core.LazySeq(null,((function (high_scores){
return (function (){
var s__13731__$1 = s__13731;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13731__$1);
if(temp__4425__auto__){
var s__13731__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13731__$2)){
var c__5438__auto__ = cljs.core.chunk_first.call(null,s__13731__$2);
var size__5439__auto__ = cljs.core.count.call(null,c__5438__auto__);
var b__13733 = cljs.core.chunk_buffer.call(null,size__5439__auto__);
if((function (){var i__13732 = (0);
while(true){
if((i__13732 < size__5439__auto__)){
var vec__13736 = cljs.core._nth.call(null,c__5438__auto__,i__13732);
var n = cljs.core.nth.call(null,vec__13736,(0),null);
var h = cljs.core.nth.call(null,vec__13736,(1),null);
cljs.core.chunk_append.call(null,b__13733,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,n,(400),(8),(80)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,ttt.views.pad_left.call(null,[cljs.core.str(h)].join(''),(9)),(200),(8),(0)], null)], null)], null));

var G__13738 = (i__13732 + (1));
i__13732 = G__13738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13733),ttt$views$high_scores_table_$_iter__13730.call(null,cljs.core.chunk_rest.call(null,s__13731__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13733),null);
}
} else {
var vec__13737 = cljs.core.first.call(null,s__13731__$2);
var n = cljs.core.nth.call(null,vec__13737,(0),null);
var h = cljs.core.nth.call(null,vec__13737,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,n,(400),(8),(80)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,ttt.views.pad_left.call(null,[cljs.core.str(h)].join(''),(9)),(200),(8),(0)], null)], null)], null),ttt$views$high_scores_table_$_iter__13730.call(null,cljs.core.rest.call(null,s__13731__$2)));
}
} else {
return null;
}
break;
}
});})(high_scores))
,null,null));
});})(high_scores))
;
return iter__5440__auto__.call(null,cljs.core.deref.call(null,high_scores));
})())], null);
});
;})(high_scores))
});
ttt.views.menu_link = (function ttt$views$menu_link(title,url){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"label","label",1718410804),title,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return accountant.core.navigate_BANG_.call(null,url);
})], null);
});
ttt.views.menu_panel = (function ttt$views$menu_panel(){
var paused = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-state","game-state",935682735),new cljs.core.Keyword(null,"paused","paused",-1710376127)], null)], null));
var window_size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-size","window-size",923834855)], null)], null));
return ((function (paused,window_size){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_view,cljs.core.deref.call(null,window_size),null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"new-game-entry","new-game-entry",-583320456),"new game",true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"resume-entry","resume-entry",1928610869),"resume",cljs.core.deref.call(null,paused)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"options-entry","options-entry",-279954560),"options",true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"credits-entry","credits-entry",2029900149),"credits",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.high_scores_table], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null)], null);
});
;})(paused,window_size))
});
ttt.views.input_field = (function ttt$views$input_field(name,enabled_QMARK_,width){
var value = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null)], null));
var caret_visible_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu-data","menu-data",-1577593149),new cljs.core.Keyword(null,"name-field","name-field",-1347695388)], null)], null));
return ((function (value,caret_visible_QMARK_){
return (function (name__$1,enabled_QMARK___$1,width__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value,caret_visible_QMARK_){
return (function (){
if(cljs.core.truth_(enabled_QMARK___$1)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-menu-entry","select-menu-entry",-1757851637),name__$1], null));
} else {
return null;
}
});})(value,caret_visible_QMARK_))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),(30),new cljs.core.Keyword(null,"class","class",-2030961996),"option"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.text_with_spaces,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"class","class",-2030961996),"option"], null),(cljs.core.truth_(cljs.core.deref.call(null,caret_visible_QMARK_))?[cljs.core.str(cljs.core.deref.call(null,value)),cljs.core.str("_")].join(''):cljs.core.deref.call(null,value))], null)], null);
});
;})(value,caret_visible_QMARK_))
});
ttt.views.game_over_panel = (function ttt$views$game_over_panel(){
var window_size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-size","window-size",923834855)], null)], null));
return ((function (window_size){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_view,cljs.core.deref.call(null,window_size),"game over",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,"your name:",(300)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.input_field,new cljs.core.Keyword(null,"player-name","player-name",-823697956),true,(300)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"game-over-entry","game-over-entry",511405459),"continue",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null)], null);
});
;})(window_size))
});
ttt.views.char_codes = new cljs.core.PersistentArrayMap(null, 8, [(13),"enter",(27),"esc",(37),"left",(38),"up",(39),"right",(40),"down",(32),"space",(8),"backspace"], null);
ttt.views.get_key_binding = (function ttt$views$get_key_binding(m,label){
var kc = cljs.core.first.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__13741){
var vec__13742 = p__13741;
var k = cljs.core.nth.call(null,vec__13742,(0),null);
var v = cljs.core.nth.call(null,vec__13742,(1),null);
return cljs.core._EQ_.call(null,v,label);
}),m)));
var or__4668__auto__ = ttt.views.char_codes.call(null,kc);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return String.fromCharCode(kc);
}
});
ttt.views.options_panel = (function ttt$views$options_panel(){
var panel_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"panel-data","panel-data",440998509)], null));
var window_size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-size","window-size",923834855)], null)], null));
return ((function (panel_data,window_size){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_view,cljs.core.deref.call(null,window_size),"options",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.cycling_menu_item,new cljs.core.Keyword(null,"sound-on-entry","sound-on-entry",-811755095),"sound",new cljs.core.PersistentArrayMap(null, 2, [true,"on",false,"off"], null).call(null,new cljs.core.Keyword(null,"sound-on?","sound-on?",-1242747885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel_data))),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.cycling_menu_item,new cljs.core.Keyword(null,"volume-entry","volume-entry",305285062),"volume",new cljs.core.PersistentArrayMap(null, 5, [(0),"1/5",(1),"2/5",(2),"3/5",(3),"4/5",(4),"5/5"], null).call(null,new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,panel_data))),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"move-left-entry","move-left-entry",1690347800),"move left",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"left","left",-399115937)),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"move-right-entry","move-right-entry",748674418),"move right",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"right","right",-452581833)),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"move-up-entry","move-up-entry",1018306397),"move up",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"up","up",-269712113)),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"move-down-entry","move-down-entry",639232733),"move down",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"down","down",1565245570)),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"rotate-x-entry","rotate-x-entry",389895189),"rotate x+",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"rotate-x","rotate-x",662700473)),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"rotate-y-entry","rotate-y-entry",1436500295),"rotate y+",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"rotate-y","rotate-y",-463882110)),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"rotate-z-entry","rotate-z-entry",-1097447744),"rotate z+",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"rotate-z","rotate-z",-1639598055)),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"rotate-x-reverse-entry","rotate-x-reverse-entry",-1550251790),"rotate x-",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"rotate-x-reverse","rotate-x-reverse",596929270)),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"rotate-y-reverse-entry","rotate-y-reverse-entry",102657433),"rotate y-",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"rotate-y-reverse","rotate-y-reverse",545446234)),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"rotate-z-reverse-entry","rotate-z-reverse-entry",389861209),"rotate z-",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"rotate-z-reverse","rotate-z-reverse",-1131821843)),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.set_key_menu_item,new cljs.core.Keyword(null,"drop-entry","drop-entry",-1166023201),"drop piece",ttt.views.get_key_binding.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,panel_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key-bindings","key-bindings",-1464217982)], null)),new cljs.core.Keyword(null,"drop","drop",364481611)),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"reset-defaults-entry","reset-defaults-entry",333936680),"reset defaults",true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"option-accept-entry","option-accept-entry",1171803112),"save",true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"option-cancel-entry","option-cancel-entry",-1526876270),"cancel",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null)], null);
});
;})(panel_data,window_size))
});
ttt.views.credits_panel = (function ttt$views$credits_panel(){
var window_size = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-data","app-data",1586751113),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"window-size","window-size",923834855)], null)], null));
return ((function (window_size){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_view,cljs.core.deref.call(null,window_size),null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,"TTT: a clone of 1989's blockout",(600),(14),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,"by california dreams",(600),(14),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,"reimagined in 2016 by alberto bengoa",(600),(14),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,"sounds made with bfxr",(600),(14),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,"press start 2p font by codeman38",(600),(14),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,"built with clojurescript",(600),(14),(0)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_label,"using re-frame + reagent + react",(600),(14),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ttt.views.menu_item,new cljs.core.Keyword(null,"credits-cancel-entry","credits-cancel-entry",1478873099),"back",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"30px"], null)], null);
});
;})(window_size))
});
ttt.views.panels = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"menu-panel","menu-panel",-621117001),ttt.views.menu_panel,new cljs.core.Keyword(null,"credits-panel","credits-panel",-770486210),ttt.views.credits_panel,new cljs.core.Keyword(null,"new-game-panel","new-game-panel",-691893952),ttt.views.new_game_panel,new cljs.core.Keyword(null,"options-panel","options-panel",-1736521983),ttt.views.options_panel,new cljs.core.Keyword(null,"game-panel","game-panel",1331591233),ttt.views.game_panel,new cljs.core.Keyword(null,"game-over-panel","game-over-panel",454405864),ttt.views.game_over_panel], null);
ttt.views.main_panel = (function ttt$views$main_panel(){
var panel_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-panel-data","current-panel-data",-985621178)], null));
return ((function (panel_data){
return (function (){
var map__13745 = cljs.core.deref.call(null,panel_data);
var map__13745__$1 = ((((!((map__13745 == null)))?((((map__13745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13745):map__13745);
var active_panel = cljs.core.get.call(null,map__13745__$1,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994));
var panel_params = cljs.core.get.call(null,map__13745__$1,new cljs.core.Keyword(null,"panel-params","panel-params",1099672237));
var panel = cljs.core.get.call(null,ttt.views.panels,active_panel);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(panel)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [panel,panel_params], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null))], null)], null);
});
;})(panel_data))
});

//# sourceMappingURL=views.js.map?rel=1464143794414