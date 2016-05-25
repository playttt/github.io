// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async7246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7246 = (function (fn_handler,f,meta7247){
this.fn_handler = fn_handler;
this.f = f;
this.meta7247 = meta7247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7248,meta7247__$1){
var self__ = this;
var _7248__$1 = this;
return (new cljs.core.async.t_cljs$core$async7246(self__.fn_handler,self__.f,meta7247__$1));
});

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7248){
var self__ = this;
var _7248__$1 = this;
return self__.meta7247;
});

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7246.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7246.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta7247","meta7247",1297596719,null)], null);
});

cljs.core.async.t_cljs$core$async7246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7246";

cljs.core.async.t_cljs$core$async7246.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7246");
});

cljs.core.async.__GT_t_cljs$core$async7246 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async7246(fn_handler__$1,f__$1,meta7247){
return (new cljs.core.async.t_cljs$core$async7246(fn_handler__$1,f__$1,meta7247));
});

}

return (new cljs.core.async.t_cljs$core$async7246(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args7251 = [];
var len__5726__auto___7254 = arguments.length;
var i__5727__auto___7255 = (0);
while(true){
if((i__5727__auto___7255 < len__5726__auto___7254)){
args7251.push((arguments[i__5727__auto___7255]));

var G__7256 = (i__5727__auto___7255 + (1));
i__5727__auto___7255 = G__7256;
continue;
} else {
}
break;
}

var G__7253 = args7251.length;
switch (G__7253) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7251.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args7258 = [];
var len__5726__auto___7261 = arguments.length;
var i__5727__auto___7262 = (0);
while(true){
if((i__5727__auto___7262 < len__5726__auto___7261)){
args7258.push((arguments[i__5727__auto___7262]));

var G__7263 = (i__5727__auto___7262 + (1));
i__5727__auto___7262 = G__7263;
continue;
} else {
}
break;
}

var G__7260 = args7258.length;
switch (G__7260) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7258.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7265 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7265);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7265,ret){
return (function (){
return fn1.call(null,val_7265);
});})(val_7265,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args7266 = [];
var len__5726__auto___7269 = arguments.length;
var i__5727__auto___7270 = (0);
while(true){
if((i__5727__auto___7270 < len__5726__auto___7269)){
args7266.push((arguments[i__5727__auto___7270]));

var G__7271 = (i__5727__auto___7270 + (1));
i__5727__auto___7270 = G__7271;
continue;
} else {
}
break;
}

var G__7268 = args7266.length;
switch (G__7268) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7266.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5571__auto___7273 = n;
var x_7274 = (0);
while(true){
if((x_7274 < n__5571__auto___7273)){
(a[x_7274] = (0));

var G__7275 = (x_7274 + (1));
x_7274 = G__7275;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7276 = (i + (1));
i = G__7276;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7280 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7280 = (function (alt_flag,flag,meta7281){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7281 = meta7281;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7282,meta7281__$1){
var self__ = this;
var _7282__$1 = this;
return (new cljs.core.async.t_cljs$core$async7280(self__.alt_flag,self__.flag,meta7281__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7282){
var self__ = this;
var _7282__$1 = this;
return self__.meta7281;
});})(flag))
;

cljs.core.async.t_cljs$core$async7280.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7280.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7281","meta7281",173581523,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7280.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7280.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7280";

cljs.core.async.t_cljs$core$async7280.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7280");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7280 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7280(alt_flag__$1,flag__$1,meta7281){
return (new cljs.core.async.t_cljs$core$async7280(alt_flag__$1,flag__$1,meta7281));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7280(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7286 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7286 = (function (alt_handler,flag,cb,meta7287){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7287 = meta7287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7288,meta7287__$1){
var self__ = this;
var _7288__$1 = this;
return (new cljs.core.async.t_cljs$core$async7286(self__.alt_handler,self__.flag,self__.cb,meta7287__$1));
});

cljs.core.async.t_cljs$core$async7286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7288){
var self__ = this;
var _7288__$1 = this;
return self__.meta7287;
});

cljs.core.async.t_cljs$core$async7286.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7286.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7286.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7287","meta7287",-2087948975,null)], null);
});

cljs.core.async.t_cljs$core$async7286.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7286";

cljs.core.async.t_cljs$core$async7286.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async7286");
});

cljs.core.async.__GT_t_cljs$core$async7286 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7286(alt_handler__$1,flag__$1,cb__$1,meta7287){
return (new cljs.core.async.t_cljs$core$async7286(alt_handler__$1,flag__$1,cb__$1,meta7287));
});

}

return (new cljs.core.async.t_cljs$core$async7286(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7289_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7289_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7290_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7290_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4668__auto__ = wport;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7291 = (i + (1));
i = G__7291;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4668__auto__ = ret;
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4656__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___7297 = arguments.length;
var i__5727__auto___7298 = (0);
while(true){
if((i__5727__auto___7298 < len__5726__auto___7297)){
args__5733__auto__.push((arguments[i__5727__auto___7298]));

var G__7299 = (i__5727__auto___7298 + (1));
i__5727__auto___7298 = G__7299;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((1) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7294){
var map__7295 = p__7294;
var map__7295__$1 = ((((!((map__7295 == null)))?((((map__7295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7295):map__7295);
var opts = map__7295__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7292){
var G__7293 = cljs.core.first.call(null,seq7292);
var seq7292__$1 = cljs.core.next.call(null,seq7292);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7293,seq7292__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7300 = [];
var len__5726__auto___7350 = arguments.length;
var i__5727__auto___7351 = (0);
while(true){
if((i__5727__auto___7351 < len__5726__auto___7350)){
args7300.push((arguments[i__5727__auto___7351]));

var G__7352 = (i__5727__auto___7351 + (1));
i__5727__auto___7351 = G__7352;
continue;
} else {
}
break;
}

var G__7302 = args7300.length;
switch (G__7302) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7300.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7198__auto___7354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___7354){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___7354){
return (function (state_7326){
var state_val_7327 = (state_7326[(1)]);
if((state_val_7327 === (7))){
var inst_7322 = (state_7326[(2)]);
var state_7326__$1 = state_7326;
var statearr_7328_7355 = state_7326__$1;
(statearr_7328_7355[(2)] = inst_7322);

(statearr_7328_7355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7327 === (1))){
var state_7326__$1 = state_7326;
var statearr_7329_7356 = state_7326__$1;
(statearr_7329_7356[(2)] = null);

(statearr_7329_7356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7327 === (4))){
var inst_7305 = (state_7326[(7)]);
var inst_7305__$1 = (state_7326[(2)]);
var inst_7306 = (inst_7305__$1 == null);
var state_7326__$1 = (function (){var statearr_7330 = state_7326;
(statearr_7330[(7)] = inst_7305__$1);

return statearr_7330;
})();
if(cljs.core.truth_(inst_7306)){
var statearr_7331_7357 = state_7326__$1;
(statearr_7331_7357[(1)] = (5));

} else {
var statearr_7332_7358 = state_7326__$1;
(statearr_7332_7358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7327 === (13))){
var state_7326__$1 = state_7326;
var statearr_7333_7359 = state_7326__$1;
(statearr_7333_7359[(2)] = null);

(statearr_7333_7359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7327 === (6))){
var inst_7305 = (state_7326[(7)]);
var state_7326__$1 = state_7326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7326__$1,(11),to,inst_7305);
} else {
if((state_val_7327 === (3))){
var inst_7324 = (state_7326[(2)]);
var state_7326__$1 = state_7326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7326__$1,inst_7324);
} else {
if((state_val_7327 === (12))){
var state_7326__$1 = state_7326;
var statearr_7334_7360 = state_7326__$1;
(statearr_7334_7360[(2)] = null);

(statearr_7334_7360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7327 === (2))){
var state_7326__$1 = state_7326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7326__$1,(4),from);
} else {
if((state_val_7327 === (11))){
var inst_7315 = (state_7326[(2)]);
var state_7326__$1 = state_7326;
if(cljs.core.truth_(inst_7315)){
var statearr_7335_7361 = state_7326__$1;
(statearr_7335_7361[(1)] = (12));

} else {
var statearr_7336_7362 = state_7326__$1;
(statearr_7336_7362[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7327 === (9))){
var state_7326__$1 = state_7326;
var statearr_7337_7363 = state_7326__$1;
(statearr_7337_7363[(2)] = null);

(statearr_7337_7363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7327 === (5))){
var state_7326__$1 = state_7326;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7338_7364 = state_7326__$1;
(statearr_7338_7364[(1)] = (8));

} else {
var statearr_7339_7365 = state_7326__$1;
(statearr_7339_7365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7327 === (14))){
var inst_7320 = (state_7326[(2)]);
var state_7326__$1 = state_7326;
var statearr_7340_7366 = state_7326__$1;
(statearr_7340_7366[(2)] = inst_7320);

(statearr_7340_7366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7327 === (10))){
var inst_7312 = (state_7326[(2)]);
var state_7326__$1 = state_7326;
var statearr_7341_7367 = state_7326__$1;
(statearr_7341_7367[(2)] = inst_7312);

(statearr_7341_7367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7327 === (8))){
var inst_7309 = cljs.core.async.close_BANG_.call(null,to);
var state_7326__$1 = state_7326;
var statearr_7342_7368 = state_7326__$1;
(statearr_7342_7368[(2)] = inst_7309);

(statearr_7342_7368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___7354))
;
return ((function (switch__7086__auto__,c__7198__auto___7354){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_7346 = [null,null,null,null,null,null,null,null];
(statearr_7346[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_7346[(1)] = (1));

return statearr_7346;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_7326){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_7326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e7347){if((e7347 instanceof Object)){
var ex__7090__auto__ = e7347;
var statearr_7348_7369 = state_7326;
(statearr_7348_7369[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7370 = state_7326;
state_7326 = G__7370;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_7326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_7326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___7354))
})();
var state__7200__auto__ = (function (){var statearr_7349 = f__7199__auto__.call(null);
(statearr_7349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___7354);

return statearr_7349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___7354))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7554){
var vec__7555 = p__7554;
var v = cljs.core.nth.call(null,vec__7555,(0),null);
var p = cljs.core.nth.call(null,vec__7555,(1),null);
var job = vec__7555;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7198__auto___7737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___7737,res,vec__7555,v,p,job,jobs,results){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___7737,res,vec__7555,v,p,job,jobs,results){
return (function (state_7560){
var state_val_7561 = (state_7560[(1)]);
if((state_val_7561 === (1))){
var state_7560__$1 = state_7560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7560__$1,(2),res,v);
} else {
if((state_val_7561 === (2))){
var inst_7557 = (state_7560[(2)]);
var inst_7558 = cljs.core.async.close_BANG_.call(null,res);
var state_7560__$1 = (function (){var statearr_7562 = state_7560;
(statearr_7562[(7)] = inst_7557);

return statearr_7562;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7560__$1,inst_7558);
} else {
return null;
}
}
});})(c__7198__auto___7737,res,vec__7555,v,p,job,jobs,results))
;
return ((function (switch__7086__auto__,c__7198__auto___7737,res,vec__7555,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0 = (function (){
var statearr_7566 = [null,null,null,null,null,null,null,null];
(statearr_7566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__);

(statearr_7566[(1)] = (1));

return statearr_7566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1 = (function (state_7560){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_7560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e7567){if((e7567 instanceof Object)){
var ex__7090__auto__ = e7567;
var statearr_7568_7738 = state_7560;
(statearr_7568_7738[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7739 = state_7560;
state_7560 = G__7739;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__ = function(state_7560){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1.call(this,state_7560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___7737,res,vec__7555,v,p,job,jobs,results))
})();
var state__7200__auto__ = (function (){var statearr_7569 = f__7199__auto__.call(null);
(statearr_7569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___7737);

return statearr_7569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___7737,res,vec__7555,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7570){
var vec__7571 = p__7570;
var v = cljs.core.nth.call(null,vec__7571,(0),null);
var p = cljs.core.nth.call(null,vec__7571,(1),null);
var job = vec__7571;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5571__auto___7740 = n;
var __7741 = (0);
while(true){
if((__7741 < n__5571__auto___7740)){
var G__7572_7742 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7572_7742) {
case "compute":
var c__7198__auto___7744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7741,c__7198__auto___7744,G__7572_7742,n__5571__auto___7740,jobs,results,process,async){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (__7741,c__7198__auto___7744,G__7572_7742,n__5571__auto___7740,jobs,results,process,async){
return (function (state_7585){
var state_val_7586 = (state_7585[(1)]);
if((state_val_7586 === (1))){
var state_7585__$1 = state_7585;
var statearr_7587_7745 = state_7585__$1;
(statearr_7587_7745[(2)] = null);

(statearr_7587_7745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7586 === (2))){
var state_7585__$1 = state_7585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7585__$1,(4),jobs);
} else {
if((state_val_7586 === (3))){
var inst_7583 = (state_7585[(2)]);
var state_7585__$1 = state_7585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7585__$1,inst_7583);
} else {
if((state_val_7586 === (4))){
var inst_7575 = (state_7585[(2)]);
var inst_7576 = process.call(null,inst_7575);
var state_7585__$1 = state_7585;
if(cljs.core.truth_(inst_7576)){
var statearr_7588_7746 = state_7585__$1;
(statearr_7588_7746[(1)] = (5));

} else {
var statearr_7589_7747 = state_7585__$1;
(statearr_7589_7747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7586 === (5))){
var state_7585__$1 = state_7585;
var statearr_7590_7748 = state_7585__$1;
(statearr_7590_7748[(2)] = null);

(statearr_7590_7748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7586 === (6))){
var state_7585__$1 = state_7585;
var statearr_7591_7749 = state_7585__$1;
(statearr_7591_7749[(2)] = null);

(statearr_7591_7749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7586 === (7))){
var inst_7581 = (state_7585[(2)]);
var state_7585__$1 = state_7585;
var statearr_7592_7750 = state_7585__$1;
(statearr_7592_7750[(2)] = inst_7581);

(statearr_7592_7750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7741,c__7198__auto___7744,G__7572_7742,n__5571__auto___7740,jobs,results,process,async))
;
return ((function (__7741,switch__7086__auto__,c__7198__auto___7744,G__7572_7742,n__5571__auto___7740,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0 = (function (){
var statearr_7596 = [null,null,null,null,null,null,null];
(statearr_7596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__);

(statearr_7596[(1)] = (1));

return statearr_7596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1 = (function (state_7585){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_7585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e7597){if((e7597 instanceof Object)){
var ex__7090__auto__ = e7597;
var statearr_7598_7751 = state_7585;
(statearr_7598_7751[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7752 = state_7585;
state_7585 = G__7752;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__ = function(state_7585){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1.call(this,state_7585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__;
})()
;})(__7741,switch__7086__auto__,c__7198__auto___7744,G__7572_7742,n__5571__auto___7740,jobs,results,process,async))
})();
var state__7200__auto__ = (function (){var statearr_7599 = f__7199__auto__.call(null);
(statearr_7599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___7744);

return statearr_7599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(__7741,c__7198__auto___7744,G__7572_7742,n__5571__auto___7740,jobs,results,process,async))
);


break;
case "async":
var c__7198__auto___7753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7741,c__7198__auto___7753,G__7572_7742,n__5571__auto___7740,jobs,results,process,async){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (__7741,c__7198__auto___7753,G__7572_7742,n__5571__auto___7740,jobs,results,process,async){
return (function (state_7612){
var state_val_7613 = (state_7612[(1)]);
if((state_val_7613 === (1))){
var state_7612__$1 = state_7612;
var statearr_7614_7754 = state_7612__$1;
(statearr_7614_7754[(2)] = null);

(statearr_7614_7754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7613 === (2))){
var state_7612__$1 = state_7612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7612__$1,(4),jobs);
} else {
if((state_val_7613 === (3))){
var inst_7610 = (state_7612[(2)]);
var state_7612__$1 = state_7612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7612__$1,inst_7610);
} else {
if((state_val_7613 === (4))){
var inst_7602 = (state_7612[(2)]);
var inst_7603 = async.call(null,inst_7602);
var state_7612__$1 = state_7612;
if(cljs.core.truth_(inst_7603)){
var statearr_7615_7755 = state_7612__$1;
(statearr_7615_7755[(1)] = (5));

} else {
var statearr_7616_7756 = state_7612__$1;
(statearr_7616_7756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7613 === (5))){
var state_7612__$1 = state_7612;
var statearr_7617_7757 = state_7612__$1;
(statearr_7617_7757[(2)] = null);

(statearr_7617_7757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7613 === (6))){
var state_7612__$1 = state_7612;
var statearr_7618_7758 = state_7612__$1;
(statearr_7618_7758[(2)] = null);

(statearr_7618_7758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7613 === (7))){
var inst_7608 = (state_7612[(2)]);
var state_7612__$1 = state_7612;
var statearr_7619_7759 = state_7612__$1;
(statearr_7619_7759[(2)] = inst_7608);

(statearr_7619_7759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7741,c__7198__auto___7753,G__7572_7742,n__5571__auto___7740,jobs,results,process,async))
;
return ((function (__7741,switch__7086__auto__,c__7198__auto___7753,G__7572_7742,n__5571__auto___7740,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0 = (function (){
var statearr_7623 = [null,null,null,null,null,null,null];
(statearr_7623[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__);

(statearr_7623[(1)] = (1));

return statearr_7623;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1 = (function (state_7612){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_7612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e7624){if((e7624 instanceof Object)){
var ex__7090__auto__ = e7624;
var statearr_7625_7760 = state_7612;
(statearr_7625_7760[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7761 = state_7612;
state_7612 = G__7761;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__ = function(state_7612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1.call(this,state_7612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__;
})()
;})(__7741,switch__7086__auto__,c__7198__auto___7753,G__7572_7742,n__5571__auto___7740,jobs,results,process,async))
})();
var state__7200__auto__ = (function (){var statearr_7626 = f__7199__auto__.call(null);
(statearr_7626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___7753);

return statearr_7626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(__7741,c__7198__auto___7753,G__7572_7742,n__5571__auto___7740,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__7762 = (__7741 + (1));
__7741 = G__7762;
continue;
} else {
}
break;
}

var c__7198__auto___7763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___7763,jobs,results,process,async){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___7763,jobs,results,process,async){
return (function (state_7648){
var state_val_7649 = (state_7648[(1)]);
if((state_val_7649 === (1))){
var state_7648__$1 = state_7648;
var statearr_7650_7764 = state_7648__$1;
(statearr_7650_7764[(2)] = null);

(statearr_7650_7764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7649 === (2))){
var state_7648__$1 = state_7648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7648__$1,(4),from);
} else {
if((state_val_7649 === (3))){
var inst_7646 = (state_7648[(2)]);
var state_7648__$1 = state_7648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7648__$1,inst_7646);
} else {
if((state_val_7649 === (4))){
var inst_7629 = (state_7648[(7)]);
var inst_7629__$1 = (state_7648[(2)]);
var inst_7630 = (inst_7629__$1 == null);
var state_7648__$1 = (function (){var statearr_7651 = state_7648;
(statearr_7651[(7)] = inst_7629__$1);

return statearr_7651;
})();
if(cljs.core.truth_(inst_7630)){
var statearr_7652_7765 = state_7648__$1;
(statearr_7652_7765[(1)] = (5));

} else {
var statearr_7653_7766 = state_7648__$1;
(statearr_7653_7766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7649 === (5))){
var inst_7632 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7648__$1 = state_7648;
var statearr_7654_7767 = state_7648__$1;
(statearr_7654_7767[(2)] = inst_7632);

(statearr_7654_7767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7649 === (6))){
var inst_7634 = (state_7648[(8)]);
var inst_7629 = (state_7648[(7)]);
var inst_7634__$1 = cljs.core.async.chan.call(null,(1));
var inst_7635 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7636 = [inst_7629,inst_7634__$1];
var inst_7637 = (new cljs.core.PersistentVector(null,2,(5),inst_7635,inst_7636,null));
var state_7648__$1 = (function (){var statearr_7655 = state_7648;
(statearr_7655[(8)] = inst_7634__$1);

return statearr_7655;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7648__$1,(8),jobs,inst_7637);
} else {
if((state_val_7649 === (7))){
var inst_7644 = (state_7648[(2)]);
var state_7648__$1 = state_7648;
var statearr_7656_7768 = state_7648__$1;
(statearr_7656_7768[(2)] = inst_7644);

(statearr_7656_7768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7649 === (8))){
var inst_7634 = (state_7648[(8)]);
var inst_7639 = (state_7648[(2)]);
var state_7648__$1 = (function (){var statearr_7657 = state_7648;
(statearr_7657[(9)] = inst_7639);

return statearr_7657;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7648__$1,(9),results,inst_7634);
} else {
if((state_val_7649 === (9))){
var inst_7641 = (state_7648[(2)]);
var state_7648__$1 = (function (){var statearr_7658 = state_7648;
(statearr_7658[(10)] = inst_7641);

return statearr_7658;
})();
var statearr_7659_7769 = state_7648__$1;
(statearr_7659_7769[(2)] = null);

(statearr_7659_7769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___7763,jobs,results,process,async))
;
return ((function (switch__7086__auto__,c__7198__auto___7763,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0 = (function (){
var statearr_7663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__);

(statearr_7663[(1)] = (1));

return statearr_7663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1 = (function (state_7648){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_7648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e7664){if((e7664 instanceof Object)){
var ex__7090__auto__ = e7664;
var statearr_7665_7770 = state_7648;
(statearr_7665_7770[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7771 = state_7648;
state_7648 = G__7771;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__ = function(state_7648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1.call(this,state_7648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___7763,jobs,results,process,async))
})();
var state__7200__auto__ = (function (){var statearr_7666 = f__7199__auto__.call(null);
(statearr_7666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___7763);

return statearr_7666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___7763,jobs,results,process,async))
);


var c__7198__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto__,jobs,results,process,async){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto__,jobs,results,process,async){
return (function (state_7704){
var state_val_7705 = (state_7704[(1)]);
if((state_val_7705 === (7))){
var inst_7700 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
var statearr_7706_7772 = state_7704__$1;
(statearr_7706_7772[(2)] = inst_7700);

(statearr_7706_7772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (20))){
var state_7704__$1 = state_7704;
var statearr_7707_7773 = state_7704__$1;
(statearr_7707_7773[(2)] = null);

(statearr_7707_7773[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (1))){
var state_7704__$1 = state_7704;
var statearr_7708_7774 = state_7704__$1;
(statearr_7708_7774[(2)] = null);

(statearr_7708_7774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (4))){
var inst_7669 = (state_7704[(7)]);
var inst_7669__$1 = (state_7704[(2)]);
var inst_7670 = (inst_7669__$1 == null);
var state_7704__$1 = (function (){var statearr_7709 = state_7704;
(statearr_7709[(7)] = inst_7669__$1);

return statearr_7709;
})();
if(cljs.core.truth_(inst_7670)){
var statearr_7710_7775 = state_7704__$1;
(statearr_7710_7775[(1)] = (5));

} else {
var statearr_7711_7776 = state_7704__$1;
(statearr_7711_7776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (15))){
var inst_7682 = (state_7704[(8)]);
var state_7704__$1 = state_7704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7704__$1,(18),to,inst_7682);
} else {
if((state_val_7705 === (21))){
var inst_7695 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
var statearr_7712_7777 = state_7704__$1;
(statearr_7712_7777[(2)] = inst_7695);

(statearr_7712_7777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (13))){
var inst_7697 = (state_7704[(2)]);
var state_7704__$1 = (function (){var statearr_7713 = state_7704;
(statearr_7713[(9)] = inst_7697);

return statearr_7713;
})();
var statearr_7714_7778 = state_7704__$1;
(statearr_7714_7778[(2)] = null);

(statearr_7714_7778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (6))){
var inst_7669 = (state_7704[(7)]);
var state_7704__$1 = state_7704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7704__$1,(11),inst_7669);
} else {
if((state_val_7705 === (17))){
var inst_7690 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
if(cljs.core.truth_(inst_7690)){
var statearr_7715_7779 = state_7704__$1;
(statearr_7715_7779[(1)] = (19));

} else {
var statearr_7716_7780 = state_7704__$1;
(statearr_7716_7780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (3))){
var inst_7702 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7704__$1,inst_7702);
} else {
if((state_val_7705 === (12))){
var inst_7679 = (state_7704[(10)]);
var state_7704__$1 = state_7704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7704__$1,(14),inst_7679);
} else {
if((state_val_7705 === (2))){
var state_7704__$1 = state_7704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7704__$1,(4),results);
} else {
if((state_val_7705 === (19))){
var state_7704__$1 = state_7704;
var statearr_7717_7781 = state_7704__$1;
(statearr_7717_7781[(2)] = null);

(statearr_7717_7781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (11))){
var inst_7679 = (state_7704[(2)]);
var state_7704__$1 = (function (){var statearr_7718 = state_7704;
(statearr_7718[(10)] = inst_7679);

return statearr_7718;
})();
var statearr_7719_7782 = state_7704__$1;
(statearr_7719_7782[(2)] = null);

(statearr_7719_7782[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (9))){
var state_7704__$1 = state_7704;
var statearr_7720_7783 = state_7704__$1;
(statearr_7720_7783[(2)] = null);

(statearr_7720_7783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (5))){
var state_7704__$1 = state_7704;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7721_7784 = state_7704__$1;
(statearr_7721_7784[(1)] = (8));

} else {
var statearr_7722_7785 = state_7704__$1;
(statearr_7722_7785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (14))){
var inst_7682 = (state_7704[(8)]);
var inst_7684 = (state_7704[(11)]);
var inst_7682__$1 = (state_7704[(2)]);
var inst_7683 = (inst_7682__$1 == null);
var inst_7684__$1 = cljs.core.not.call(null,inst_7683);
var state_7704__$1 = (function (){var statearr_7723 = state_7704;
(statearr_7723[(8)] = inst_7682__$1);

(statearr_7723[(11)] = inst_7684__$1);

return statearr_7723;
})();
if(inst_7684__$1){
var statearr_7724_7786 = state_7704__$1;
(statearr_7724_7786[(1)] = (15));

} else {
var statearr_7725_7787 = state_7704__$1;
(statearr_7725_7787[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (16))){
var inst_7684 = (state_7704[(11)]);
var state_7704__$1 = state_7704;
var statearr_7726_7788 = state_7704__$1;
(statearr_7726_7788[(2)] = inst_7684);

(statearr_7726_7788[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (10))){
var inst_7676 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
var statearr_7727_7789 = state_7704__$1;
(statearr_7727_7789[(2)] = inst_7676);

(statearr_7727_7789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (18))){
var inst_7687 = (state_7704[(2)]);
var state_7704__$1 = state_7704;
var statearr_7728_7790 = state_7704__$1;
(statearr_7728_7790[(2)] = inst_7687);

(statearr_7728_7790[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7705 === (8))){
var inst_7673 = cljs.core.async.close_BANG_.call(null,to);
var state_7704__$1 = state_7704;
var statearr_7729_7791 = state_7704__$1;
(statearr_7729_7791[(2)] = inst_7673);

(statearr_7729_7791[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto__,jobs,results,process,async))
;
return ((function (switch__7086__auto__,c__7198__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0 = (function (){
var statearr_7733 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__);

(statearr_7733[(1)] = (1));

return statearr_7733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1 = (function (state_7704){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_7704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e7734){if((e7734 instanceof Object)){
var ex__7090__auto__ = e7734;
var statearr_7735_7792 = state_7704;
(statearr_7735_7792[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7793 = state_7704;
state_7704 = G__7793;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__ = function(state_7704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1.call(this,state_7704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7087__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto__,jobs,results,process,async))
})();
var state__7200__auto__ = (function (){var statearr_7736 = f__7199__auto__.call(null);
(statearr_7736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto__);

return statearr_7736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto__,jobs,results,process,async))
);

return c__7198__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args7794 = [];
var len__5726__auto___7797 = arguments.length;
var i__5727__auto___7798 = (0);
while(true){
if((i__5727__auto___7798 < len__5726__auto___7797)){
args7794.push((arguments[i__5727__auto___7798]));

var G__7799 = (i__5727__auto___7798 + (1));
i__5727__auto___7798 = G__7799;
continue;
} else {
}
break;
}

var G__7796 = args7794.length;
switch (G__7796) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7794.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args7801 = [];
var len__5726__auto___7804 = arguments.length;
var i__5727__auto___7805 = (0);
while(true){
if((i__5727__auto___7805 < len__5726__auto___7804)){
args7801.push((arguments[i__5727__auto___7805]));

var G__7806 = (i__5727__auto___7805 + (1));
i__5727__auto___7805 = G__7806;
continue;
} else {
}
break;
}

var G__7803 = args7801.length;
switch (G__7803) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7801.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args7808 = [];
var len__5726__auto___7861 = arguments.length;
var i__5727__auto___7862 = (0);
while(true){
if((i__5727__auto___7862 < len__5726__auto___7861)){
args7808.push((arguments[i__5727__auto___7862]));

var G__7863 = (i__5727__auto___7862 + (1));
i__5727__auto___7862 = G__7863;
continue;
} else {
}
break;
}

var G__7810 = args7808.length;
switch (G__7810) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7808.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7198__auto___7865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___7865,tc,fc){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___7865,tc,fc){
return (function (state_7836){
var state_val_7837 = (state_7836[(1)]);
if((state_val_7837 === (7))){
var inst_7832 = (state_7836[(2)]);
var state_7836__$1 = state_7836;
var statearr_7838_7866 = state_7836__$1;
(statearr_7838_7866[(2)] = inst_7832);

(statearr_7838_7866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7837 === (1))){
var state_7836__$1 = state_7836;
var statearr_7839_7867 = state_7836__$1;
(statearr_7839_7867[(2)] = null);

(statearr_7839_7867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7837 === (4))){
var inst_7813 = (state_7836[(7)]);
var inst_7813__$1 = (state_7836[(2)]);
var inst_7814 = (inst_7813__$1 == null);
var state_7836__$1 = (function (){var statearr_7840 = state_7836;
(statearr_7840[(7)] = inst_7813__$1);

return statearr_7840;
})();
if(cljs.core.truth_(inst_7814)){
var statearr_7841_7868 = state_7836__$1;
(statearr_7841_7868[(1)] = (5));

} else {
var statearr_7842_7869 = state_7836__$1;
(statearr_7842_7869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7837 === (13))){
var state_7836__$1 = state_7836;
var statearr_7843_7870 = state_7836__$1;
(statearr_7843_7870[(2)] = null);

(statearr_7843_7870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7837 === (6))){
var inst_7813 = (state_7836[(7)]);
var inst_7819 = p.call(null,inst_7813);
var state_7836__$1 = state_7836;
if(cljs.core.truth_(inst_7819)){
var statearr_7844_7871 = state_7836__$1;
(statearr_7844_7871[(1)] = (9));

} else {
var statearr_7845_7872 = state_7836__$1;
(statearr_7845_7872[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7837 === (3))){
var inst_7834 = (state_7836[(2)]);
var state_7836__$1 = state_7836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7836__$1,inst_7834);
} else {
if((state_val_7837 === (12))){
var state_7836__$1 = state_7836;
var statearr_7846_7873 = state_7836__$1;
(statearr_7846_7873[(2)] = null);

(statearr_7846_7873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7837 === (2))){
var state_7836__$1 = state_7836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7836__$1,(4),ch);
} else {
if((state_val_7837 === (11))){
var inst_7813 = (state_7836[(7)]);
var inst_7823 = (state_7836[(2)]);
var state_7836__$1 = state_7836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7836__$1,(8),inst_7823,inst_7813);
} else {
if((state_val_7837 === (9))){
var state_7836__$1 = state_7836;
var statearr_7847_7874 = state_7836__$1;
(statearr_7847_7874[(2)] = tc);

(statearr_7847_7874[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7837 === (5))){
var inst_7816 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7817 = cljs.core.async.close_BANG_.call(null,fc);
var state_7836__$1 = (function (){var statearr_7848 = state_7836;
(statearr_7848[(8)] = inst_7816);

return statearr_7848;
})();
var statearr_7849_7875 = state_7836__$1;
(statearr_7849_7875[(2)] = inst_7817);

(statearr_7849_7875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7837 === (14))){
var inst_7830 = (state_7836[(2)]);
var state_7836__$1 = state_7836;
var statearr_7850_7876 = state_7836__$1;
(statearr_7850_7876[(2)] = inst_7830);

(statearr_7850_7876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7837 === (10))){
var state_7836__$1 = state_7836;
var statearr_7851_7877 = state_7836__$1;
(statearr_7851_7877[(2)] = fc);

(statearr_7851_7877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7837 === (8))){
var inst_7825 = (state_7836[(2)]);
var state_7836__$1 = state_7836;
if(cljs.core.truth_(inst_7825)){
var statearr_7852_7878 = state_7836__$1;
(statearr_7852_7878[(1)] = (12));

} else {
var statearr_7853_7879 = state_7836__$1;
(statearr_7853_7879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___7865,tc,fc))
;
return ((function (switch__7086__auto__,c__7198__auto___7865,tc,fc){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_7857 = [null,null,null,null,null,null,null,null,null];
(statearr_7857[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_7857[(1)] = (1));

return statearr_7857;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_7836){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_7836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e7858){if((e7858 instanceof Object)){
var ex__7090__auto__ = e7858;
var statearr_7859_7880 = state_7836;
(statearr_7859_7880[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7881 = state_7836;
state_7836 = G__7881;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_7836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_7836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___7865,tc,fc))
})();
var state__7200__auto__ = (function (){var statearr_7860 = f__7199__auto__.call(null);
(statearr_7860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___7865);

return statearr_7860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___7865,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7198__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto__){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto__){
return (function (state_7928){
var state_val_7929 = (state_7928[(1)]);
if((state_val_7929 === (1))){
var inst_7914 = init;
var state_7928__$1 = (function (){var statearr_7930 = state_7928;
(statearr_7930[(7)] = inst_7914);

return statearr_7930;
})();
var statearr_7931_7946 = state_7928__$1;
(statearr_7931_7946[(2)] = null);

(statearr_7931_7946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7929 === (2))){
var state_7928__$1 = state_7928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7928__$1,(4),ch);
} else {
if((state_val_7929 === (3))){
var inst_7926 = (state_7928[(2)]);
var state_7928__$1 = state_7928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7928__$1,inst_7926);
} else {
if((state_val_7929 === (4))){
var inst_7917 = (state_7928[(8)]);
var inst_7917__$1 = (state_7928[(2)]);
var inst_7918 = (inst_7917__$1 == null);
var state_7928__$1 = (function (){var statearr_7932 = state_7928;
(statearr_7932[(8)] = inst_7917__$1);

return statearr_7932;
})();
if(cljs.core.truth_(inst_7918)){
var statearr_7933_7947 = state_7928__$1;
(statearr_7933_7947[(1)] = (5));

} else {
var statearr_7934_7948 = state_7928__$1;
(statearr_7934_7948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7929 === (5))){
var inst_7914 = (state_7928[(7)]);
var state_7928__$1 = state_7928;
var statearr_7935_7949 = state_7928__$1;
(statearr_7935_7949[(2)] = inst_7914);

(statearr_7935_7949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7929 === (6))){
var inst_7914 = (state_7928[(7)]);
var inst_7917 = (state_7928[(8)]);
var inst_7921 = f.call(null,inst_7914,inst_7917);
var inst_7914__$1 = inst_7921;
var state_7928__$1 = (function (){var statearr_7936 = state_7928;
(statearr_7936[(7)] = inst_7914__$1);

return statearr_7936;
})();
var statearr_7937_7950 = state_7928__$1;
(statearr_7937_7950[(2)] = null);

(statearr_7937_7950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7929 === (7))){
var inst_7924 = (state_7928[(2)]);
var state_7928__$1 = state_7928;
var statearr_7938_7951 = state_7928__$1;
(statearr_7938_7951[(2)] = inst_7924);

(statearr_7938_7951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7198__auto__))
;
return ((function (switch__7086__auto__,c__7198__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7087__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7087__auto____0 = (function (){
var statearr_7942 = [null,null,null,null,null,null,null,null,null];
(statearr_7942[(0)] = cljs$core$async$reduce_$_state_machine__7087__auto__);

(statearr_7942[(1)] = (1));

return statearr_7942;
});
var cljs$core$async$reduce_$_state_machine__7087__auto____1 = (function (state_7928){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_7928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e7943){if((e7943 instanceof Object)){
var ex__7090__auto__ = e7943;
var statearr_7944_7952 = state_7928;
(statearr_7944_7952[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7953 = state_7928;
state_7928 = G__7953;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7087__auto__ = function(state_7928){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7087__auto____1.call(this,state_7928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7087__auto____0;
cljs$core$async$reduce_$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7087__auto____1;
return cljs$core$async$reduce_$_state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto__))
})();
var state__7200__auto__ = (function (){var statearr_7945 = f__7199__auto__.call(null);
(statearr_7945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto__);

return statearr_7945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto__))
);

return c__7198__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args7954 = [];
var len__5726__auto___8006 = arguments.length;
var i__5727__auto___8007 = (0);
while(true){
if((i__5727__auto___8007 < len__5726__auto___8006)){
args7954.push((arguments[i__5727__auto___8007]));

var G__8008 = (i__5727__auto___8007 + (1));
i__5727__auto___8007 = G__8008;
continue;
} else {
}
break;
}

var G__7956 = args7954.length;
switch (G__7956) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7954.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7198__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto__){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto__){
return (function (state_7981){
var state_val_7982 = (state_7981[(1)]);
if((state_val_7982 === (7))){
var inst_7963 = (state_7981[(2)]);
var state_7981__$1 = state_7981;
var statearr_7983_8010 = state_7981__$1;
(statearr_7983_8010[(2)] = inst_7963);

(statearr_7983_8010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7982 === (1))){
var inst_7957 = cljs.core.seq.call(null,coll);
var inst_7958 = inst_7957;
var state_7981__$1 = (function (){var statearr_7984 = state_7981;
(statearr_7984[(7)] = inst_7958);

return statearr_7984;
})();
var statearr_7985_8011 = state_7981__$1;
(statearr_7985_8011[(2)] = null);

(statearr_7985_8011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7982 === (4))){
var inst_7958 = (state_7981[(7)]);
var inst_7961 = cljs.core.first.call(null,inst_7958);
var state_7981__$1 = state_7981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7981__$1,(7),ch,inst_7961);
} else {
if((state_val_7982 === (13))){
var inst_7975 = (state_7981[(2)]);
var state_7981__$1 = state_7981;
var statearr_7986_8012 = state_7981__$1;
(statearr_7986_8012[(2)] = inst_7975);

(statearr_7986_8012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7982 === (6))){
var inst_7966 = (state_7981[(2)]);
var state_7981__$1 = state_7981;
if(cljs.core.truth_(inst_7966)){
var statearr_7987_8013 = state_7981__$1;
(statearr_7987_8013[(1)] = (8));

} else {
var statearr_7988_8014 = state_7981__$1;
(statearr_7988_8014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7982 === (3))){
var inst_7979 = (state_7981[(2)]);
var state_7981__$1 = state_7981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7981__$1,inst_7979);
} else {
if((state_val_7982 === (12))){
var state_7981__$1 = state_7981;
var statearr_7989_8015 = state_7981__$1;
(statearr_7989_8015[(2)] = null);

(statearr_7989_8015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7982 === (2))){
var inst_7958 = (state_7981[(7)]);
var state_7981__$1 = state_7981;
if(cljs.core.truth_(inst_7958)){
var statearr_7990_8016 = state_7981__$1;
(statearr_7990_8016[(1)] = (4));

} else {
var statearr_7991_8017 = state_7981__$1;
(statearr_7991_8017[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7982 === (11))){
var inst_7972 = cljs.core.async.close_BANG_.call(null,ch);
var state_7981__$1 = state_7981;
var statearr_7992_8018 = state_7981__$1;
(statearr_7992_8018[(2)] = inst_7972);

(statearr_7992_8018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7982 === (9))){
var state_7981__$1 = state_7981;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7993_8019 = state_7981__$1;
(statearr_7993_8019[(1)] = (11));

} else {
var statearr_7994_8020 = state_7981__$1;
(statearr_7994_8020[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7982 === (5))){
var inst_7958 = (state_7981[(7)]);
var state_7981__$1 = state_7981;
var statearr_7995_8021 = state_7981__$1;
(statearr_7995_8021[(2)] = inst_7958);

(statearr_7995_8021[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7982 === (10))){
var inst_7977 = (state_7981[(2)]);
var state_7981__$1 = state_7981;
var statearr_7996_8022 = state_7981__$1;
(statearr_7996_8022[(2)] = inst_7977);

(statearr_7996_8022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7982 === (8))){
var inst_7958 = (state_7981[(7)]);
var inst_7968 = cljs.core.next.call(null,inst_7958);
var inst_7958__$1 = inst_7968;
var state_7981__$1 = (function (){var statearr_7997 = state_7981;
(statearr_7997[(7)] = inst_7958__$1);

return statearr_7997;
})();
var statearr_7998_8023 = state_7981__$1;
(statearr_7998_8023[(2)] = null);

(statearr_7998_8023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto__))
;
return ((function (switch__7086__auto__,c__7198__auto__){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_8002 = [null,null,null,null,null,null,null,null];
(statearr_8002[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_8002[(1)] = (1));

return statearr_8002;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_7981){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_7981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e8003){if((e8003 instanceof Object)){
var ex__7090__auto__ = e8003;
var statearr_8004_8024 = state_7981;
(statearr_8004_8024[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8025 = state_7981;
state_7981 = G__8025;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_7981){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_7981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto__))
})();
var state__7200__auto__ = (function (){var statearr_8005 = f__7199__auto__.call(null);
(statearr_8005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto__);

return statearr_8005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto__))
);

return c__7198__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5323__auto__ = (((_ == null))?null:_);
var m__5324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,_);
} else {
var m__5324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8247 = (function (mult,ch,cs,meta8248){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8248 = meta8248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8249,meta8248__$1){
var self__ = this;
var _8249__$1 = this;
return (new cljs.core.async.t_cljs$core$async8247(self__.mult,self__.ch,self__.cs,meta8248__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8249){
var self__ = this;
var _8249__$1 = this;
return self__.meta8248;
});})(cs))
;

cljs.core.async.t_cljs$core$async8247.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8247.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8247.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8247.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8247.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8247.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8248","meta8248",-1890721291,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8247";

cljs.core.async.t_cljs$core$async8247.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8247");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8247 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8247(mult__$1,ch__$1,cs__$1,meta8248){
return (new cljs.core.async.t_cljs$core$async8247(mult__$1,ch__$1,cs__$1,meta8248));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8247(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7198__auto___8468 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___8468,cs,m,dchan,dctr,done){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___8468,cs,m,dchan,dctr,done){
return (function (state_8380){
var state_val_8381 = (state_8380[(1)]);
if((state_val_8381 === (7))){
var inst_8376 = (state_8380[(2)]);
var state_8380__$1 = state_8380;
var statearr_8382_8469 = state_8380__$1;
(statearr_8382_8469[(2)] = inst_8376);

(statearr_8382_8469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (20))){
var inst_8281 = (state_8380[(7)]);
var inst_8291 = cljs.core.first.call(null,inst_8281);
var inst_8292 = cljs.core.nth.call(null,inst_8291,(0),null);
var inst_8293 = cljs.core.nth.call(null,inst_8291,(1),null);
var state_8380__$1 = (function (){var statearr_8383 = state_8380;
(statearr_8383[(8)] = inst_8292);

return statearr_8383;
})();
if(cljs.core.truth_(inst_8293)){
var statearr_8384_8470 = state_8380__$1;
(statearr_8384_8470[(1)] = (22));

} else {
var statearr_8385_8471 = state_8380__$1;
(statearr_8385_8471[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (27))){
var inst_8323 = (state_8380[(9)]);
var inst_8328 = (state_8380[(10)]);
var inst_8252 = (state_8380[(11)]);
var inst_8321 = (state_8380[(12)]);
var inst_8328__$1 = cljs.core._nth.call(null,inst_8321,inst_8323);
var inst_8329 = cljs.core.async.put_BANG_.call(null,inst_8328__$1,inst_8252,done);
var state_8380__$1 = (function (){var statearr_8386 = state_8380;
(statearr_8386[(10)] = inst_8328__$1);

return statearr_8386;
})();
if(cljs.core.truth_(inst_8329)){
var statearr_8387_8472 = state_8380__$1;
(statearr_8387_8472[(1)] = (30));

} else {
var statearr_8388_8473 = state_8380__$1;
(statearr_8388_8473[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (1))){
var state_8380__$1 = state_8380;
var statearr_8389_8474 = state_8380__$1;
(statearr_8389_8474[(2)] = null);

(statearr_8389_8474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (24))){
var inst_8281 = (state_8380[(7)]);
var inst_8298 = (state_8380[(2)]);
var inst_8299 = cljs.core.next.call(null,inst_8281);
var inst_8261 = inst_8299;
var inst_8262 = null;
var inst_8263 = (0);
var inst_8264 = (0);
var state_8380__$1 = (function (){var statearr_8390 = state_8380;
(statearr_8390[(13)] = inst_8262);

(statearr_8390[(14)] = inst_8298);

(statearr_8390[(15)] = inst_8263);

(statearr_8390[(16)] = inst_8261);

(statearr_8390[(17)] = inst_8264);

return statearr_8390;
})();
var statearr_8391_8475 = state_8380__$1;
(statearr_8391_8475[(2)] = null);

(statearr_8391_8475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (39))){
var state_8380__$1 = state_8380;
var statearr_8395_8476 = state_8380__$1;
(statearr_8395_8476[(2)] = null);

(statearr_8395_8476[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (4))){
var inst_8252 = (state_8380[(11)]);
var inst_8252__$1 = (state_8380[(2)]);
var inst_8253 = (inst_8252__$1 == null);
var state_8380__$1 = (function (){var statearr_8396 = state_8380;
(statearr_8396[(11)] = inst_8252__$1);

return statearr_8396;
})();
if(cljs.core.truth_(inst_8253)){
var statearr_8397_8477 = state_8380__$1;
(statearr_8397_8477[(1)] = (5));

} else {
var statearr_8398_8478 = state_8380__$1;
(statearr_8398_8478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (15))){
var inst_8262 = (state_8380[(13)]);
var inst_8263 = (state_8380[(15)]);
var inst_8261 = (state_8380[(16)]);
var inst_8264 = (state_8380[(17)]);
var inst_8277 = (state_8380[(2)]);
var inst_8278 = (inst_8264 + (1));
var tmp8392 = inst_8262;
var tmp8393 = inst_8263;
var tmp8394 = inst_8261;
var inst_8261__$1 = tmp8394;
var inst_8262__$1 = tmp8392;
var inst_8263__$1 = tmp8393;
var inst_8264__$1 = inst_8278;
var state_8380__$1 = (function (){var statearr_8399 = state_8380;
(statearr_8399[(18)] = inst_8277);

(statearr_8399[(13)] = inst_8262__$1);

(statearr_8399[(15)] = inst_8263__$1);

(statearr_8399[(16)] = inst_8261__$1);

(statearr_8399[(17)] = inst_8264__$1);

return statearr_8399;
})();
var statearr_8400_8479 = state_8380__$1;
(statearr_8400_8479[(2)] = null);

(statearr_8400_8479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (21))){
var inst_8302 = (state_8380[(2)]);
var state_8380__$1 = state_8380;
var statearr_8404_8480 = state_8380__$1;
(statearr_8404_8480[(2)] = inst_8302);

(statearr_8404_8480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (31))){
var inst_8328 = (state_8380[(10)]);
var inst_8332 = done.call(null,null);
var inst_8333 = cljs.core.async.untap_STAR_.call(null,m,inst_8328);
var state_8380__$1 = (function (){var statearr_8405 = state_8380;
(statearr_8405[(19)] = inst_8332);

return statearr_8405;
})();
var statearr_8406_8481 = state_8380__$1;
(statearr_8406_8481[(2)] = inst_8333);

(statearr_8406_8481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (32))){
var inst_8323 = (state_8380[(9)]);
var inst_8321 = (state_8380[(12)]);
var inst_8322 = (state_8380[(20)]);
var inst_8320 = (state_8380[(21)]);
var inst_8335 = (state_8380[(2)]);
var inst_8336 = (inst_8323 + (1));
var tmp8401 = inst_8321;
var tmp8402 = inst_8322;
var tmp8403 = inst_8320;
var inst_8320__$1 = tmp8403;
var inst_8321__$1 = tmp8401;
var inst_8322__$1 = tmp8402;
var inst_8323__$1 = inst_8336;
var state_8380__$1 = (function (){var statearr_8407 = state_8380;
(statearr_8407[(9)] = inst_8323__$1);

(statearr_8407[(22)] = inst_8335);

(statearr_8407[(12)] = inst_8321__$1);

(statearr_8407[(20)] = inst_8322__$1);

(statearr_8407[(21)] = inst_8320__$1);

return statearr_8407;
})();
var statearr_8408_8482 = state_8380__$1;
(statearr_8408_8482[(2)] = null);

(statearr_8408_8482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (40))){
var inst_8348 = (state_8380[(23)]);
var inst_8352 = done.call(null,null);
var inst_8353 = cljs.core.async.untap_STAR_.call(null,m,inst_8348);
var state_8380__$1 = (function (){var statearr_8409 = state_8380;
(statearr_8409[(24)] = inst_8352);

return statearr_8409;
})();
var statearr_8410_8483 = state_8380__$1;
(statearr_8410_8483[(2)] = inst_8353);

(statearr_8410_8483[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (33))){
var inst_8339 = (state_8380[(25)]);
var inst_8341 = cljs.core.chunked_seq_QMARK_.call(null,inst_8339);
var state_8380__$1 = state_8380;
if(inst_8341){
var statearr_8411_8484 = state_8380__$1;
(statearr_8411_8484[(1)] = (36));

} else {
var statearr_8412_8485 = state_8380__$1;
(statearr_8412_8485[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (13))){
var inst_8271 = (state_8380[(26)]);
var inst_8274 = cljs.core.async.close_BANG_.call(null,inst_8271);
var state_8380__$1 = state_8380;
var statearr_8413_8486 = state_8380__$1;
(statearr_8413_8486[(2)] = inst_8274);

(statearr_8413_8486[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (22))){
var inst_8292 = (state_8380[(8)]);
var inst_8295 = cljs.core.async.close_BANG_.call(null,inst_8292);
var state_8380__$1 = state_8380;
var statearr_8414_8487 = state_8380__$1;
(statearr_8414_8487[(2)] = inst_8295);

(statearr_8414_8487[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (36))){
var inst_8339 = (state_8380[(25)]);
var inst_8343 = cljs.core.chunk_first.call(null,inst_8339);
var inst_8344 = cljs.core.chunk_rest.call(null,inst_8339);
var inst_8345 = cljs.core.count.call(null,inst_8343);
var inst_8320 = inst_8344;
var inst_8321 = inst_8343;
var inst_8322 = inst_8345;
var inst_8323 = (0);
var state_8380__$1 = (function (){var statearr_8415 = state_8380;
(statearr_8415[(9)] = inst_8323);

(statearr_8415[(12)] = inst_8321);

(statearr_8415[(20)] = inst_8322);

(statearr_8415[(21)] = inst_8320);

return statearr_8415;
})();
var statearr_8416_8488 = state_8380__$1;
(statearr_8416_8488[(2)] = null);

(statearr_8416_8488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (41))){
var inst_8339 = (state_8380[(25)]);
var inst_8355 = (state_8380[(2)]);
var inst_8356 = cljs.core.next.call(null,inst_8339);
var inst_8320 = inst_8356;
var inst_8321 = null;
var inst_8322 = (0);
var inst_8323 = (0);
var state_8380__$1 = (function (){var statearr_8417 = state_8380;
(statearr_8417[(9)] = inst_8323);

(statearr_8417[(27)] = inst_8355);

(statearr_8417[(12)] = inst_8321);

(statearr_8417[(20)] = inst_8322);

(statearr_8417[(21)] = inst_8320);

return statearr_8417;
})();
var statearr_8418_8489 = state_8380__$1;
(statearr_8418_8489[(2)] = null);

(statearr_8418_8489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (43))){
var state_8380__$1 = state_8380;
var statearr_8419_8490 = state_8380__$1;
(statearr_8419_8490[(2)] = null);

(statearr_8419_8490[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (29))){
var inst_8364 = (state_8380[(2)]);
var state_8380__$1 = state_8380;
var statearr_8420_8491 = state_8380__$1;
(statearr_8420_8491[(2)] = inst_8364);

(statearr_8420_8491[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (44))){
var inst_8373 = (state_8380[(2)]);
var state_8380__$1 = (function (){var statearr_8421 = state_8380;
(statearr_8421[(28)] = inst_8373);

return statearr_8421;
})();
var statearr_8422_8492 = state_8380__$1;
(statearr_8422_8492[(2)] = null);

(statearr_8422_8492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (6))){
var inst_8312 = (state_8380[(29)]);
var inst_8311 = cljs.core.deref.call(null,cs);
var inst_8312__$1 = cljs.core.keys.call(null,inst_8311);
var inst_8313 = cljs.core.count.call(null,inst_8312__$1);
var inst_8314 = cljs.core.reset_BANG_.call(null,dctr,inst_8313);
var inst_8319 = cljs.core.seq.call(null,inst_8312__$1);
var inst_8320 = inst_8319;
var inst_8321 = null;
var inst_8322 = (0);
var inst_8323 = (0);
var state_8380__$1 = (function (){var statearr_8423 = state_8380;
(statearr_8423[(9)] = inst_8323);

(statearr_8423[(29)] = inst_8312__$1);

(statearr_8423[(12)] = inst_8321);

(statearr_8423[(30)] = inst_8314);

(statearr_8423[(20)] = inst_8322);

(statearr_8423[(21)] = inst_8320);

return statearr_8423;
})();
var statearr_8424_8493 = state_8380__$1;
(statearr_8424_8493[(2)] = null);

(statearr_8424_8493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (28))){
var inst_8339 = (state_8380[(25)]);
var inst_8320 = (state_8380[(21)]);
var inst_8339__$1 = cljs.core.seq.call(null,inst_8320);
var state_8380__$1 = (function (){var statearr_8425 = state_8380;
(statearr_8425[(25)] = inst_8339__$1);

return statearr_8425;
})();
if(inst_8339__$1){
var statearr_8426_8494 = state_8380__$1;
(statearr_8426_8494[(1)] = (33));

} else {
var statearr_8427_8495 = state_8380__$1;
(statearr_8427_8495[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (25))){
var inst_8323 = (state_8380[(9)]);
var inst_8322 = (state_8380[(20)]);
var inst_8325 = (inst_8323 < inst_8322);
var inst_8326 = inst_8325;
var state_8380__$1 = state_8380;
if(cljs.core.truth_(inst_8326)){
var statearr_8428_8496 = state_8380__$1;
(statearr_8428_8496[(1)] = (27));

} else {
var statearr_8429_8497 = state_8380__$1;
(statearr_8429_8497[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (34))){
var state_8380__$1 = state_8380;
var statearr_8430_8498 = state_8380__$1;
(statearr_8430_8498[(2)] = null);

(statearr_8430_8498[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (17))){
var state_8380__$1 = state_8380;
var statearr_8431_8499 = state_8380__$1;
(statearr_8431_8499[(2)] = null);

(statearr_8431_8499[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (3))){
var inst_8378 = (state_8380[(2)]);
var state_8380__$1 = state_8380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8380__$1,inst_8378);
} else {
if((state_val_8381 === (12))){
var inst_8307 = (state_8380[(2)]);
var state_8380__$1 = state_8380;
var statearr_8432_8500 = state_8380__$1;
(statearr_8432_8500[(2)] = inst_8307);

(statearr_8432_8500[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (2))){
var state_8380__$1 = state_8380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8380__$1,(4),ch);
} else {
if((state_val_8381 === (23))){
var state_8380__$1 = state_8380;
var statearr_8433_8501 = state_8380__$1;
(statearr_8433_8501[(2)] = null);

(statearr_8433_8501[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (35))){
var inst_8362 = (state_8380[(2)]);
var state_8380__$1 = state_8380;
var statearr_8434_8502 = state_8380__$1;
(statearr_8434_8502[(2)] = inst_8362);

(statearr_8434_8502[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (19))){
var inst_8281 = (state_8380[(7)]);
var inst_8285 = cljs.core.chunk_first.call(null,inst_8281);
var inst_8286 = cljs.core.chunk_rest.call(null,inst_8281);
var inst_8287 = cljs.core.count.call(null,inst_8285);
var inst_8261 = inst_8286;
var inst_8262 = inst_8285;
var inst_8263 = inst_8287;
var inst_8264 = (0);
var state_8380__$1 = (function (){var statearr_8435 = state_8380;
(statearr_8435[(13)] = inst_8262);

(statearr_8435[(15)] = inst_8263);

(statearr_8435[(16)] = inst_8261);

(statearr_8435[(17)] = inst_8264);

return statearr_8435;
})();
var statearr_8436_8503 = state_8380__$1;
(statearr_8436_8503[(2)] = null);

(statearr_8436_8503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (11))){
var inst_8281 = (state_8380[(7)]);
var inst_8261 = (state_8380[(16)]);
var inst_8281__$1 = cljs.core.seq.call(null,inst_8261);
var state_8380__$1 = (function (){var statearr_8437 = state_8380;
(statearr_8437[(7)] = inst_8281__$1);

return statearr_8437;
})();
if(inst_8281__$1){
var statearr_8438_8504 = state_8380__$1;
(statearr_8438_8504[(1)] = (16));

} else {
var statearr_8439_8505 = state_8380__$1;
(statearr_8439_8505[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (9))){
var inst_8309 = (state_8380[(2)]);
var state_8380__$1 = state_8380;
var statearr_8440_8506 = state_8380__$1;
(statearr_8440_8506[(2)] = inst_8309);

(statearr_8440_8506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (5))){
var inst_8259 = cljs.core.deref.call(null,cs);
var inst_8260 = cljs.core.seq.call(null,inst_8259);
var inst_8261 = inst_8260;
var inst_8262 = null;
var inst_8263 = (0);
var inst_8264 = (0);
var state_8380__$1 = (function (){var statearr_8441 = state_8380;
(statearr_8441[(13)] = inst_8262);

(statearr_8441[(15)] = inst_8263);

(statearr_8441[(16)] = inst_8261);

(statearr_8441[(17)] = inst_8264);

return statearr_8441;
})();
var statearr_8442_8507 = state_8380__$1;
(statearr_8442_8507[(2)] = null);

(statearr_8442_8507[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (14))){
var state_8380__$1 = state_8380;
var statearr_8443_8508 = state_8380__$1;
(statearr_8443_8508[(2)] = null);

(statearr_8443_8508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (45))){
var inst_8370 = (state_8380[(2)]);
var state_8380__$1 = state_8380;
var statearr_8444_8509 = state_8380__$1;
(statearr_8444_8509[(2)] = inst_8370);

(statearr_8444_8509[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (26))){
var inst_8312 = (state_8380[(29)]);
var inst_8366 = (state_8380[(2)]);
var inst_8367 = cljs.core.seq.call(null,inst_8312);
var state_8380__$1 = (function (){var statearr_8445 = state_8380;
(statearr_8445[(31)] = inst_8366);

return statearr_8445;
})();
if(inst_8367){
var statearr_8446_8510 = state_8380__$1;
(statearr_8446_8510[(1)] = (42));

} else {
var statearr_8447_8511 = state_8380__$1;
(statearr_8447_8511[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (16))){
var inst_8281 = (state_8380[(7)]);
var inst_8283 = cljs.core.chunked_seq_QMARK_.call(null,inst_8281);
var state_8380__$1 = state_8380;
if(inst_8283){
var statearr_8448_8512 = state_8380__$1;
(statearr_8448_8512[(1)] = (19));

} else {
var statearr_8449_8513 = state_8380__$1;
(statearr_8449_8513[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (38))){
var inst_8359 = (state_8380[(2)]);
var state_8380__$1 = state_8380;
var statearr_8450_8514 = state_8380__$1;
(statearr_8450_8514[(2)] = inst_8359);

(statearr_8450_8514[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (30))){
var state_8380__$1 = state_8380;
var statearr_8451_8515 = state_8380__$1;
(statearr_8451_8515[(2)] = null);

(statearr_8451_8515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (10))){
var inst_8262 = (state_8380[(13)]);
var inst_8264 = (state_8380[(17)]);
var inst_8270 = cljs.core._nth.call(null,inst_8262,inst_8264);
var inst_8271 = cljs.core.nth.call(null,inst_8270,(0),null);
var inst_8272 = cljs.core.nth.call(null,inst_8270,(1),null);
var state_8380__$1 = (function (){var statearr_8452 = state_8380;
(statearr_8452[(26)] = inst_8271);

return statearr_8452;
})();
if(cljs.core.truth_(inst_8272)){
var statearr_8453_8516 = state_8380__$1;
(statearr_8453_8516[(1)] = (13));

} else {
var statearr_8454_8517 = state_8380__$1;
(statearr_8454_8517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (18))){
var inst_8305 = (state_8380[(2)]);
var state_8380__$1 = state_8380;
var statearr_8455_8518 = state_8380__$1;
(statearr_8455_8518[(2)] = inst_8305);

(statearr_8455_8518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (42))){
var state_8380__$1 = state_8380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8380__$1,(45),dchan);
} else {
if((state_val_8381 === (37))){
var inst_8339 = (state_8380[(25)]);
var inst_8252 = (state_8380[(11)]);
var inst_8348 = (state_8380[(23)]);
var inst_8348__$1 = cljs.core.first.call(null,inst_8339);
var inst_8349 = cljs.core.async.put_BANG_.call(null,inst_8348__$1,inst_8252,done);
var state_8380__$1 = (function (){var statearr_8456 = state_8380;
(statearr_8456[(23)] = inst_8348__$1);

return statearr_8456;
})();
if(cljs.core.truth_(inst_8349)){
var statearr_8457_8519 = state_8380__$1;
(statearr_8457_8519[(1)] = (39));

} else {
var statearr_8458_8520 = state_8380__$1;
(statearr_8458_8520[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8381 === (8))){
var inst_8263 = (state_8380[(15)]);
var inst_8264 = (state_8380[(17)]);
var inst_8266 = (inst_8264 < inst_8263);
var inst_8267 = inst_8266;
var state_8380__$1 = state_8380;
if(cljs.core.truth_(inst_8267)){
var statearr_8459_8521 = state_8380__$1;
(statearr_8459_8521[(1)] = (10));

} else {
var statearr_8460_8522 = state_8380__$1;
(statearr_8460_8522[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___8468,cs,m,dchan,dctr,done))
;
return ((function (switch__7086__auto__,c__7198__auto___8468,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7087__auto__ = null;
var cljs$core$async$mult_$_state_machine__7087__auto____0 = (function (){
var statearr_8464 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8464[(0)] = cljs$core$async$mult_$_state_machine__7087__auto__);

(statearr_8464[(1)] = (1));

return statearr_8464;
});
var cljs$core$async$mult_$_state_machine__7087__auto____1 = (function (state_8380){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_8380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e8465){if((e8465 instanceof Object)){
var ex__7090__auto__ = e8465;
var statearr_8466_8523 = state_8380;
(statearr_8466_8523[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8524 = state_8380;
state_8380 = G__8524;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7087__auto__ = function(state_8380){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7087__auto____1.call(this,state_8380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7087__auto____0;
cljs$core$async$mult_$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7087__auto____1;
return cljs$core$async$mult_$_state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___8468,cs,m,dchan,dctr,done))
})();
var state__7200__auto__ = (function (){var statearr_8467 = f__7199__auto__.call(null);
(statearr_8467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___8468);

return statearr_8467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___8468,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args8525 = [];
var len__5726__auto___8528 = arguments.length;
var i__5727__auto___8529 = (0);
while(true){
if((i__5727__auto___8529 < len__5726__auto___8528)){
args8525.push((arguments[i__5727__auto___8529]));

var G__8530 = (i__5727__auto___8529 + (1));
i__5727__auto___8529 = G__8530;
continue;
} else {
}
break;
}

var G__8527 = args8525.length;
switch (G__8527) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8525.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m);
} else {
var m__5324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,state_map);
} else {
var m__5324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5323__auto__ = (((m == null))?null:m);
var m__5324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,m,mode);
} else {
var m__5324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5733__auto__ = [];
var len__5726__auto___8542 = arguments.length;
var i__5727__auto___8543 = (0);
while(true){
if((i__5727__auto___8543 < len__5726__auto___8542)){
args__5733__auto__.push((arguments[i__5727__auto___8543]));

var G__8544 = (i__5727__auto___8543 + (1));
i__5727__auto___8543 = G__8544;
continue;
} else {
}
break;
}

var argseq__5734__auto__ = ((((3) < args__5733__auto__.length))?(new cljs.core.IndexedSeq(args__5733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8536){
var map__8537 = p__8536;
var map__8537__$1 = ((((!((map__8537 == null)))?((((map__8537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8537):map__8537);
var opts = map__8537__$1;
var statearr_8539_8545 = state;
(statearr_8539_8545[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__8537,map__8537__$1,opts){
return (function (val){
var statearr_8540_8546 = state;
(statearr_8540_8546[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8537,map__8537__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_8541_8547 = state;
(statearr_8541_8547[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8532){
var G__8533 = cljs.core.first.call(null,seq8532);
var seq8532__$1 = cljs.core.next.call(null,seq8532);
var G__8534 = cljs.core.first.call(null,seq8532__$1);
var seq8532__$2 = cljs.core.next.call(null,seq8532__$1);
var G__8535 = cljs.core.first.call(null,seq8532__$2);
var seq8532__$3 = cljs.core.next.call(null,seq8532__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8533,G__8534,G__8535,seq8532__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8711 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8711 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8712){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta8712 = meta8712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8713,meta8712__$1){
var self__ = this;
var _8713__$1 = this;
return (new cljs.core.async.t_cljs$core$async8711(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8712__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8713){
var self__ = this;
var _8713__$1 = this;
return self__.meta8712;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8711.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8711.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async8711.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8711.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8711.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8711.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8711.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8711.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta8712","meta8712",-110275481,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8711";

cljs.core.async.t_cljs$core$async8711.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8711");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async8711 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8711(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8712){
return (new cljs.core.async.t_cljs$core$async8711(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8712));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8711(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7198__auto___8874 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___8874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___8874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8811){
var state_val_8812 = (state_8811[(1)]);
if((state_val_8812 === (7))){
var inst_8729 = (state_8811[(2)]);
var state_8811__$1 = state_8811;
var statearr_8813_8875 = state_8811__$1;
(statearr_8813_8875[(2)] = inst_8729);

(statearr_8813_8875[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (20))){
var inst_8741 = (state_8811[(7)]);
var state_8811__$1 = state_8811;
var statearr_8814_8876 = state_8811__$1;
(statearr_8814_8876[(2)] = inst_8741);

(statearr_8814_8876[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (27))){
var state_8811__$1 = state_8811;
var statearr_8815_8877 = state_8811__$1;
(statearr_8815_8877[(2)] = null);

(statearr_8815_8877[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (1))){
var inst_8717 = (state_8811[(8)]);
var inst_8717__$1 = calc_state.call(null);
var inst_8719 = (inst_8717__$1 == null);
var inst_8720 = cljs.core.not.call(null,inst_8719);
var state_8811__$1 = (function (){var statearr_8816 = state_8811;
(statearr_8816[(8)] = inst_8717__$1);

return statearr_8816;
})();
if(inst_8720){
var statearr_8817_8878 = state_8811__$1;
(statearr_8817_8878[(1)] = (2));

} else {
var statearr_8818_8879 = state_8811__$1;
(statearr_8818_8879[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (24))){
var inst_8785 = (state_8811[(9)]);
var inst_8771 = (state_8811[(10)]);
var inst_8764 = (state_8811[(11)]);
var inst_8785__$1 = inst_8764.call(null,inst_8771);
var state_8811__$1 = (function (){var statearr_8819 = state_8811;
(statearr_8819[(9)] = inst_8785__$1);

return statearr_8819;
})();
if(cljs.core.truth_(inst_8785__$1)){
var statearr_8820_8880 = state_8811__$1;
(statearr_8820_8880[(1)] = (29));

} else {
var statearr_8821_8881 = state_8811__$1;
(statearr_8821_8881[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (4))){
var inst_8732 = (state_8811[(2)]);
var state_8811__$1 = state_8811;
if(cljs.core.truth_(inst_8732)){
var statearr_8822_8882 = state_8811__$1;
(statearr_8822_8882[(1)] = (8));

} else {
var statearr_8823_8883 = state_8811__$1;
(statearr_8823_8883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (15))){
var inst_8758 = (state_8811[(2)]);
var state_8811__$1 = state_8811;
if(cljs.core.truth_(inst_8758)){
var statearr_8824_8884 = state_8811__$1;
(statearr_8824_8884[(1)] = (19));

} else {
var statearr_8825_8885 = state_8811__$1;
(statearr_8825_8885[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (21))){
var inst_8763 = (state_8811[(12)]);
var inst_8763__$1 = (state_8811[(2)]);
var inst_8764 = cljs.core.get.call(null,inst_8763__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8765 = cljs.core.get.call(null,inst_8763__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8766 = cljs.core.get.call(null,inst_8763__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8811__$1 = (function (){var statearr_8826 = state_8811;
(statearr_8826[(13)] = inst_8765);

(statearr_8826[(12)] = inst_8763__$1);

(statearr_8826[(11)] = inst_8764);

return statearr_8826;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8811__$1,(22),inst_8766);
} else {
if((state_val_8812 === (31))){
var inst_8793 = (state_8811[(2)]);
var state_8811__$1 = state_8811;
if(cljs.core.truth_(inst_8793)){
var statearr_8827_8886 = state_8811__$1;
(statearr_8827_8886[(1)] = (32));

} else {
var statearr_8828_8887 = state_8811__$1;
(statearr_8828_8887[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (32))){
var inst_8770 = (state_8811[(14)]);
var state_8811__$1 = state_8811;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8811__$1,(35),out,inst_8770);
} else {
if((state_val_8812 === (33))){
var inst_8763 = (state_8811[(12)]);
var inst_8741 = inst_8763;
var state_8811__$1 = (function (){var statearr_8829 = state_8811;
(statearr_8829[(7)] = inst_8741);

return statearr_8829;
})();
var statearr_8830_8888 = state_8811__$1;
(statearr_8830_8888[(2)] = null);

(statearr_8830_8888[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (13))){
var inst_8741 = (state_8811[(7)]);
var inst_8748 = inst_8741.cljs$lang$protocol_mask$partition0$;
var inst_8749 = (inst_8748 & (64));
var inst_8750 = inst_8741.cljs$core$ISeq$;
var inst_8751 = (inst_8749) || (inst_8750);
var state_8811__$1 = state_8811;
if(cljs.core.truth_(inst_8751)){
var statearr_8831_8889 = state_8811__$1;
(statearr_8831_8889[(1)] = (16));

} else {
var statearr_8832_8890 = state_8811__$1;
(statearr_8832_8890[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (22))){
var inst_8770 = (state_8811[(14)]);
var inst_8771 = (state_8811[(10)]);
var inst_8769 = (state_8811[(2)]);
var inst_8770__$1 = cljs.core.nth.call(null,inst_8769,(0),null);
var inst_8771__$1 = cljs.core.nth.call(null,inst_8769,(1),null);
var inst_8772 = (inst_8770__$1 == null);
var inst_8773 = cljs.core._EQ_.call(null,inst_8771__$1,change);
var inst_8774 = (inst_8772) || (inst_8773);
var state_8811__$1 = (function (){var statearr_8833 = state_8811;
(statearr_8833[(14)] = inst_8770__$1);

(statearr_8833[(10)] = inst_8771__$1);

return statearr_8833;
})();
if(cljs.core.truth_(inst_8774)){
var statearr_8834_8891 = state_8811__$1;
(statearr_8834_8891[(1)] = (23));

} else {
var statearr_8835_8892 = state_8811__$1;
(statearr_8835_8892[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (36))){
var inst_8763 = (state_8811[(12)]);
var inst_8741 = inst_8763;
var state_8811__$1 = (function (){var statearr_8836 = state_8811;
(statearr_8836[(7)] = inst_8741);

return statearr_8836;
})();
var statearr_8837_8893 = state_8811__$1;
(statearr_8837_8893[(2)] = null);

(statearr_8837_8893[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (29))){
var inst_8785 = (state_8811[(9)]);
var state_8811__$1 = state_8811;
var statearr_8838_8894 = state_8811__$1;
(statearr_8838_8894[(2)] = inst_8785);

(statearr_8838_8894[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (6))){
var state_8811__$1 = state_8811;
var statearr_8839_8895 = state_8811__$1;
(statearr_8839_8895[(2)] = false);

(statearr_8839_8895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (28))){
var inst_8781 = (state_8811[(2)]);
var inst_8782 = calc_state.call(null);
var inst_8741 = inst_8782;
var state_8811__$1 = (function (){var statearr_8840 = state_8811;
(statearr_8840[(7)] = inst_8741);

(statearr_8840[(15)] = inst_8781);

return statearr_8840;
})();
var statearr_8841_8896 = state_8811__$1;
(statearr_8841_8896[(2)] = null);

(statearr_8841_8896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (25))){
var inst_8807 = (state_8811[(2)]);
var state_8811__$1 = state_8811;
var statearr_8842_8897 = state_8811__$1;
(statearr_8842_8897[(2)] = inst_8807);

(statearr_8842_8897[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (34))){
var inst_8805 = (state_8811[(2)]);
var state_8811__$1 = state_8811;
var statearr_8843_8898 = state_8811__$1;
(statearr_8843_8898[(2)] = inst_8805);

(statearr_8843_8898[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (17))){
var state_8811__$1 = state_8811;
var statearr_8844_8899 = state_8811__$1;
(statearr_8844_8899[(2)] = false);

(statearr_8844_8899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (3))){
var state_8811__$1 = state_8811;
var statearr_8845_8900 = state_8811__$1;
(statearr_8845_8900[(2)] = false);

(statearr_8845_8900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (12))){
var inst_8809 = (state_8811[(2)]);
var state_8811__$1 = state_8811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8811__$1,inst_8809);
} else {
if((state_val_8812 === (2))){
var inst_8717 = (state_8811[(8)]);
var inst_8722 = inst_8717.cljs$lang$protocol_mask$partition0$;
var inst_8723 = (inst_8722 & (64));
var inst_8724 = inst_8717.cljs$core$ISeq$;
var inst_8725 = (inst_8723) || (inst_8724);
var state_8811__$1 = state_8811;
if(cljs.core.truth_(inst_8725)){
var statearr_8846_8901 = state_8811__$1;
(statearr_8846_8901[(1)] = (5));

} else {
var statearr_8847_8902 = state_8811__$1;
(statearr_8847_8902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (23))){
var inst_8770 = (state_8811[(14)]);
var inst_8776 = (inst_8770 == null);
var state_8811__$1 = state_8811;
if(cljs.core.truth_(inst_8776)){
var statearr_8848_8903 = state_8811__$1;
(statearr_8848_8903[(1)] = (26));

} else {
var statearr_8849_8904 = state_8811__$1;
(statearr_8849_8904[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (35))){
var inst_8796 = (state_8811[(2)]);
var state_8811__$1 = state_8811;
if(cljs.core.truth_(inst_8796)){
var statearr_8850_8905 = state_8811__$1;
(statearr_8850_8905[(1)] = (36));

} else {
var statearr_8851_8906 = state_8811__$1;
(statearr_8851_8906[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (19))){
var inst_8741 = (state_8811[(7)]);
var inst_8760 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8741);
var state_8811__$1 = state_8811;
var statearr_8852_8907 = state_8811__$1;
(statearr_8852_8907[(2)] = inst_8760);

(statearr_8852_8907[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (11))){
var inst_8741 = (state_8811[(7)]);
var inst_8745 = (inst_8741 == null);
var inst_8746 = cljs.core.not.call(null,inst_8745);
var state_8811__$1 = state_8811;
if(inst_8746){
var statearr_8853_8908 = state_8811__$1;
(statearr_8853_8908[(1)] = (13));

} else {
var statearr_8854_8909 = state_8811__$1;
(statearr_8854_8909[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (9))){
var inst_8717 = (state_8811[(8)]);
var state_8811__$1 = state_8811;
var statearr_8855_8910 = state_8811__$1;
(statearr_8855_8910[(2)] = inst_8717);

(statearr_8855_8910[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (5))){
var state_8811__$1 = state_8811;
var statearr_8856_8911 = state_8811__$1;
(statearr_8856_8911[(2)] = true);

(statearr_8856_8911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (14))){
var state_8811__$1 = state_8811;
var statearr_8857_8912 = state_8811__$1;
(statearr_8857_8912[(2)] = false);

(statearr_8857_8912[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (26))){
var inst_8771 = (state_8811[(10)]);
var inst_8778 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8771);
var state_8811__$1 = state_8811;
var statearr_8858_8913 = state_8811__$1;
(statearr_8858_8913[(2)] = inst_8778);

(statearr_8858_8913[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (16))){
var state_8811__$1 = state_8811;
var statearr_8859_8914 = state_8811__$1;
(statearr_8859_8914[(2)] = true);

(statearr_8859_8914[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (38))){
var inst_8801 = (state_8811[(2)]);
var state_8811__$1 = state_8811;
var statearr_8860_8915 = state_8811__$1;
(statearr_8860_8915[(2)] = inst_8801);

(statearr_8860_8915[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (30))){
var inst_8765 = (state_8811[(13)]);
var inst_8771 = (state_8811[(10)]);
var inst_8764 = (state_8811[(11)]);
var inst_8788 = cljs.core.empty_QMARK_.call(null,inst_8764);
var inst_8789 = inst_8765.call(null,inst_8771);
var inst_8790 = cljs.core.not.call(null,inst_8789);
var inst_8791 = (inst_8788) && (inst_8790);
var state_8811__$1 = state_8811;
var statearr_8861_8916 = state_8811__$1;
(statearr_8861_8916[(2)] = inst_8791);

(statearr_8861_8916[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (10))){
var inst_8717 = (state_8811[(8)]);
var inst_8737 = (state_8811[(2)]);
var inst_8738 = cljs.core.get.call(null,inst_8737,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8739 = cljs.core.get.call(null,inst_8737,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8740 = cljs.core.get.call(null,inst_8737,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8741 = inst_8717;
var state_8811__$1 = (function (){var statearr_8862 = state_8811;
(statearr_8862[(16)] = inst_8738);

(statearr_8862[(7)] = inst_8741);

(statearr_8862[(17)] = inst_8740);

(statearr_8862[(18)] = inst_8739);

return statearr_8862;
})();
var statearr_8863_8917 = state_8811__$1;
(statearr_8863_8917[(2)] = null);

(statearr_8863_8917[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (18))){
var inst_8755 = (state_8811[(2)]);
var state_8811__$1 = state_8811;
var statearr_8864_8918 = state_8811__$1;
(statearr_8864_8918[(2)] = inst_8755);

(statearr_8864_8918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (37))){
var state_8811__$1 = state_8811;
var statearr_8865_8919 = state_8811__$1;
(statearr_8865_8919[(2)] = null);

(statearr_8865_8919[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8812 === (8))){
var inst_8717 = (state_8811[(8)]);
var inst_8734 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8717);
var state_8811__$1 = state_8811;
var statearr_8866_8920 = state_8811__$1;
(statearr_8866_8920[(2)] = inst_8734);

(statearr_8866_8920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___8874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7086__auto__,c__7198__auto___8874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7087__auto__ = null;
var cljs$core$async$mix_$_state_machine__7087__auto____0 = (function (){
var statearr_8870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8870[(0)] = cljs$core$async$mix_$_state_machine__7087__auto__);

(statearr_8870[(1)] = (1));

return statearr_8870;
});
var cljs$core$async$mix_$_state_machine__7087__auto____1 = (function (state_8811){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_8811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e8871){if((e8871 instanceof Object)){
var ex__7090__auto__ = e8871;
var statearr_8872_8921 = state_8811;
(statearr_8872_8921[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8922 = state_8811;
state_8811 = G__8922;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7087__auto__ = function(state_8811){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7087__auto____1.call(this,state_8811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7087__auto____0;
cljs$core$async$mix_$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7087__auto____1;
return cljs$core$async$mix_$_state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___8874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7200__auto__ = (function (){var statearr_8873 = f__7199__auto__.call(null);
(statearr_8873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___8874);

return statearr_8873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___8874,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v,ch);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args8923 = [];
var len__5726__auto___8926 = arguments.length;
var i__5727__auto___8927 = (0);
while(true){
if((i__5727__auto___8927 < len__5726__auto___8926)){
args8923.push((arguments[i__5727__auto___8927]));

var G__8928 = (i__5727__auto___8927 + (1));
i__5727__auto___8927 = G__8928;
continue;
} else {
}
break;
}

var G__8925 = args8923.length;
switch (G__8925) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8923.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5323__auto__ = (((p == null))?null:p);
var m__5324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5323__auto__)]);
if(!((m__5324__auto__ == null))){
return m__5324__auto__.call(null,p,v);
} else {
var m__5324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5324__auto____$1 == null))){
return m__5324__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args8931 = [];
var len__5726__auto___9056 = arguments.length;
var i__5727__auto___9057 = (0);
while(true){
if((i__5727__auto___9057 < len__5726__auto___9056)){
args8931.push((arguments[i__5727__auto___9057]));

var G__9058 = (i__5727__auto___9057 + (1));
i__5727__auto___9057 = G__9058;
continue;
} else {
}
break;
}

var G__8933 = args8931.length;
switch (G__8933) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8931.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4668__auto__)){
return or__4668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4668__auto__,mults){
return (function (p1__8930_SHARP_){
if(cljs.core.truth_(p1__8930_SHARP_.call(null,topic))){
return p1__8930_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8930_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8934 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8935){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8935 = meta8935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8936,meta8935__$1){
var self__ = this;
var _8936__$1 = this;
return (new cljs.core.async.t_cljs$core$async8934(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8935__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8936){
var self__ = this;
var _8936__$1 = this;
return self__.meta8935;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8934.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8934.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async8934.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8934.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8934.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8935","meta8935",56514966,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8934";

cljs.core.async.t_cljs$core$async8934.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async8934");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async8934 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8934(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8935){
return (new cljs.core.async.t_cljs$core$async8934(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8935));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8934(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7198__auto___9060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___9060,mults,ensure_mult,p){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___9060,mults,ensure_mult,p){
return (function (state_9008){
var state_val_9009 = (state_9008[(1)]);
if((state_val_9009 === (7))){
var inst_9004 = (state_9008[(2)]);
var state_9008__$1 = state_9008;
var statearr_9010_9061 = state_9008__$1;
(statearr_9010_9061[(2)] = inst_9004);

(statearr_9010_9061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (20))){
var state_9008__$1 = state_9008;
var statearr_9011_9062 = state_9008__$1;
(statearr_9011_9062[(2)] = null);

(statearr_9011_9062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (1))){
var state_9008__$1 = state_9008;
var statearr_9012_9063 = state_9008__$1;
(statearr_9012_9063[(2)] = null);

(statearr_9012_9063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (24))){
var inst_8987 = (state_9008[(7)]);
var inst_8996 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_8987);
var state_9008__$1 = state_9008;
var statearr_9013_9064 = state_9008__$1;
(statearr_9013_9064[(2)] = inst_8996);

(statearr_9013_9064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (4))){
var inst_8939 = (state_9008[(8)]);
var inst_8939__$1 = (state_9008[(2)]);
var inst_8940 = (inst_8939__$1 == null);
var state_9008__$1 = (function (){var statearr_9014 = state_9008;
(statearr_9014[(8)] = inst_8939__$1);

return statearr_9014;
})();
if(cljs.core.truth_(inst_8940)){
var statearr_9015_9065 = state_9008__$1;
(statearr_9015_9065[(1)] = (5));

} else {
var statearr_9016_9066 = state_9008__$1;
(statearr_9016_9066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (15))){
var inst_8981 = (state_9008[(2)]);
var state_9008__$1 = state_9008;
var statearr_9017_9067 = state_9008__$1;
(statearr_9017_9067[(2)] = inst_8981);

(statearr_9017_9067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (21))){
var inst_9001 = (state_9008[(2)]);
var state_9008__$1 = (function (){var statearr_9018 = state_9008;
(statearr_9018[(9)] = inst_9001);

return statearr_9018;
})();
var statearr_9019_9068 = state_9008__$1;
(statearr_9019_9068[(2)] = null);

(statearr_9019_9068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (13))){
var inst_8963 = (state_9008[(10)]);
var inst_8965 = cljs.core.chunked_seq_QMARK_.call(null,inst_8963);
var state_9008__$1 = state_9008;
if(inst_8965){
var statearr_9020_9069 = state_9008__$1;
(statearr_9020_9069[(1)] = (16));

} else {
var statearr_9021_9070 = state_9008__$1;
(statearr_9021_9070[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (22))){
var inst_8993 = (state_9008[(2)]);
var state_9008__$1 = state_9008;
if(cljs.core.truth_(inst_8993)){
var statearr_9022_9071 = state_9008__$1;
(statearr_9022_9071[(1)] = (23));

} else {
var statearr_9023_9072 = state_9008__$1;
(statearr_9023_9072[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (6))){
var inst_8989 = (state_9008[(11)]);
var inst_8987 = (state_9008[(7)]);
var inst_8939 = (state_9008[(8)]);
var inst_8987__$1 = topic_fn.call(null,inst_8939);
var inst_8988 = cljs.core.deref.call(null,mults);
var inst_8989__$1 = cljs.core.get.call(null,inst_8988,inst_8987__$1);
var state_9008__$1 = (function (){var statearr_9024 = state_9008;
(statearr_9024[(11)] = inst_8989__$1);

(statearr_9024[(7)] = inst_8987__$1);

return statearr_9024;
})();
if(cljs.core.truth_(inst_8989__$1)){
var statearr_9025_9073 = state_9008__$1;
(statearr_9025_9073[(1)] = (19));

} else {
var statearr_9026_9074 = state_9008__$1;
(statearr_9026_9074[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (25))){
var inst_8998 = (state_9008[(2)]);
var state_9008__$1 = state_9008;
var statearr_9027_9075 = state_9008__$1;
(statearr_9027_9075[(2)] = inst_8998);

(statearr_9027_9075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (17))){
var inst_8963 = (state_9008[(10)]);
var inst_8972 = cljs.core.first.call(null,inst_8963);
var inst_8973 = cljs.core.async.muxch_STAR_.call(null,inst_8972);
var inst_8974 = cljs.core.async.close_BANG_.call(null,inst_8973);
var inst_8975 = cljs.core.next.call(null,inst_8963);
var inst_8949 = inst_8975;
var inst_8950 = null;
var inst_8951 = (0);
var inst_8952 = (0);
var state_9008__$1 = (function (){var statearr_9028 = state_9008;
(statearr_9028[(12)] = inst_8974);

(statearr_9028[(13)] = inst_8952);

(statearr_9028[(14)] = inst_8949);

(statearr_9028[(15)] = inst_8951);

(statearr_9028[(16)] = inst_8950);

return statearr_9028;
})();
var statearr_9029_9076 = state_9008__$1;
(statearr_9029_9076[(2)] = null);

(statearr_9029_9076[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (3))){
var inst_9006 = (state_9008[(2)]);
var state_9008__$1 = state_9008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9008__$1,inst_9006);
} else {
if((state_val_9009 === (12))){
var inst_8983 = (state_9008[(2)]);
var state_9008__$1 = state_9008;
var statearr_9030_9077 = state_9008__$1;
(statearr_9030_9077[(2)] = inst_8983);

(statearr_9030_9077[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (2))){
var state_9008__$1 = state_9008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9008__$1,(4),ch);
} else {
if((state_val_9009 === (23))){
var state_9008__$1 = state_9008;
var statearr_9031_9078 = state_9008__$1;
(statearr_9031_9078[(2)] = null);

(statearr_9031_9078[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (19))){
var inst_8989 = (state_9008[(11)]);
var inst_8939 = (state_9008[(8)]);
var inst_8991 = cljs.core.async.muxch_STAR_.call(null,inst_8989);
var state_9008__$1 = state_9008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9008__$1,(22),inst_8991,inst_8939);
} else {
if((state_val_9009 === (11))){
var inst_8963 = (state_9008[(10)]);
var inst_8949 = (state_9008[(14)]);
var inst_8963__$1 = cljs.core.seq.call(null,inst_8949);
var state_9008__$1 = (function (){var statearr_9032 = state_9008;
(statearr_9032[(10)] = inst_8963__$1);

return statearr_9032;
})();
if(inst_8963__$1){
var statearr_9033_9079 = state_9008__$1;
(statearr_9033_9079[(1)] = (13));

} else {
var statearr_9034_9080 = state_9008__$1;
(statearr_9034_9080[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (9))){
var inst_8985 = (state_9008[(2)]);
var state_9008__$1 = state_9008;
var statearr_9035_9081 = state_9008__$1;
(statearr_9035_9081[(2)] = inst_8985);

(statearr_9035_9081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (5))){
var inst_8946 = cljs.core.deref.call(null,mults);
var inst_8947 = cljs.core.vals.call(null,inst_8946);
var inst_8948 = cljs.core.seq.call(null,inst_8947);
var inst_8949 = inst_8948;
var inst_8950 = null;
var inst_8951 = (0);
var inst_8952 = (0);
var state_9008__$1 = (function (){var statearr_9036 = state_9008;
(statearr_9036[(13)] = inst_8952);

(statearr_9036[(14)] = inst_8949);

(statearr_9036[(15)] = inst_8951);

(statearr_9036[(16)] = inst_8950);

return statearr_9036;
})();
var statearr_9037_9082 = state_9008__$1;
(statearr_9037_9082[(2)] = null);

(statearr_9037_9082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (14))){
var state_9008__$1 = state_9008;
var statearr_9041_9083 = state_9008__$1;
(statearr_9041_9083[(2)] = null);

(statearr_9041_9083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (16))){
var inst_8963 = (state_9008[(10)]);
var inst_8967 = cljs.core.chunk_first.call(null,inst_8963);
var inst_8968 = cljs.core.chunk_rest.call(null,inst_8963);
var inst_8969 = cljs.core.count.call(null,inst_8967);
var inst_8949 = inst_8968;
var inst_8950 = inst_8967;
var inst_8951 = inst_8969;
var inst_8952 = (0);
var state_9008__$1 = (function (){var statearr_9042 = state_9008;
(statearr_9042[(13)] = inst_8952);

(statearr_9042[(14)] = inst_8949);

(statearr_9042[(15)] = inst_8951);

(statearr_9042[(16)] = inst_8950);

return statearr_9042;
})();
var statearr_9043_9084 = state_9008__$1;
(statearr_9043_9084[(2)] = null);

(statearr_9043_9084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (10))){
var inst_8952 = (state_9008[(13)]);
var inst_8949 = (state_9008[(14)]);
var inst_8951 = (state_9008[(15)]);
var inst_8950 = (state_9008[(16)]);
var inst_8957 = cljs.core._nth.call(null,inst_8950,inst_8952);
var inst_8958 = cljs.core.async.muxch_STAR_.call(null,inst_8957);
var inst_8959 = cljs.core.async.close_BANG_.call(null,inst_8958);
var inst_8960 = (inst_8952 + (1));
var tmp9038 = inst_8949;
var tmp9039 = inst_8951;
var tmp9040 = inst_8950;
var inst_8949__$1 = tmp9038;
var inst_8950__$1 = tmp9040;
var inst_8951__$1 = tmp9039;
var inst_8952__$1 = inst_8960;
var state_9008__$1 = (function (){var statearr_9044 = state_9008;
(statearr_9044[(13)] = inst_8952__$1);

(statearr_9044[(14)] = inst_8949__$1);

(statearr_9044[(17)] = inst_8959);

(statearr_9044[(15)] = inst_8951__$1);

(statearr_9044[(16)] = inst_8950__$1);

return statearr_9044;
})();
var statearr_9045_9085 = state_9008__$1;
(statearr_9045_9085[(2)] = null);

(statearr_9045_9085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (18))){
var inst_8978 = (state_9008[(2)]);
var state_9008__$1 = state_9008;
var statearr_9046_9086 = state_9008__$1;
(statearr_9046_9086[(2)] = inst_8978);

(statearr_9046_9086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9009 === (8))){
var inst_8952 = (state_9008[(13)]);
var inst_8951 = (state_9008[(15)]);
var inst_8954 = (inst_8952 < inst_8951);
var inst_8955 = inst_8954;
var state_9008__$1 = state_9008;
if(cljs.core.truth_(inst_8955)){
var statearr_9047_9087 = state_9008__$1;
(statearr_9047_9087[(1)] = (10));

} else {
var statearr_9048_9088 = state_9008__$1;
(statearr_9048_9088[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___9060,mults,ensure_mult,p))
;
return ((function (switch__7086__auto__,c__7198__auto___9060,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_9052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9052[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_9052[(1)] = (1));

return statearr_9052;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_9008){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_9008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e9053){if((e9053 instanceof Object)){
var ex__7090__auto__ = e9053;
var statearr_9054_9089 = state_9008;
(statearr_9054_9089[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9090 = state_9008;
state_9008 = G__9090;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_9008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_9008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___9060,mults,ensure_mult,p))
})();
var state__7200__auto__ = (function (){var statearr_9055 = f__7199__auto__.call(null);
(statearr_9055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___9060);

return statearr_9055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___9060,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args9091 = [];
var len__5726__auto___9094 = arguments.length;
var i__5727__auto___9095 = (0);
while(true){
if((i__5727__auto___9095 < len__5726__auto___9094)){
args9091.push((arguments[i__5727__auto___9095]));

var G__9096 = (i__5727__auto___9095 + (1));
i__5727__auto___9095 = G__9096;
continue;
} else {
}
break;
}

var G__9093 = args9091.length;
switch (G__9093) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9091.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args9098 = [];
var len__5726__auto___9101 = arguments.length;
var i__5727__auto___9102 = (0);
while(true){
if((i__5727__auto___9102 < len__5726__auto___9101)){
args9098.push((arguments[i__5727__auto___9102]));

var G__9103 = (i__5727__auto___9102 + (1));
i__5727__auto___9102 = G__9103;
continue;
} else {
}
break;
}

var G__9100 = args9098.length;
switch (G__9100) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9098.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args9105 = [];
var len__5726__auto___9176 = arguments.length;
var i__5727__auto___9177 = (0);
while(true){
if((i__5727__auto___9177 < len__5726__auto___9176)){
args9105.push((arguments[i__5727__auto___9177]));

var G__9178 = (i__5727__auto___9177 + (1));
i__5727__auto___9177 = G__9178;
continue;
} else {
}
break;
}

var G__9107 = args9105.length;
switch (G__9107) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9105.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7198__auto___9180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___9180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___9180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9146){
var state_val_9147 = (state_9146[(1)]);
if((state_val_9147 === (7))){
var state_9146__$1 = state_9146;
var statearr_9148_9181 = state_9146__$1;
(statearr_9148_9181[(2)] = null);

(statearr_9148_9181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (1))){
var state_9146__$1 = state_9146;
var statearr_9149_9182 = state_9146__$1;
(statearr_9149_9182[(2)] = null);

(statearr_9149_9182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (4))){
var inst_9110 = (state_9146[(7)]);
var inst_9112 = (inst_9110 < cnt);
var state_9146__$1 = state_9146;
if(cljs.core.truth_(inst_9112)){
var statearr_9150_9183 = state_9146__$1;
(statearr_9150_9183[(1)] = (6));

} else {
var statearr_9151_9184 = state_9146__$1;
(statearr_9151_9184[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (15))){
var inst_9142 = (state_9146[(2)]);
var state_9146__$1 = state_9146;
var statearr_9152_9185 = state_9146__$1;
(statearr_9152_9185[(2)] = inst_9142);

(statearr_9152_9185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (13))){
var inst_9135 = cljs.core.async.close_BANG_.call(null,out);
var state_9146__$1 = state_9146;
var statearr_9153_9186 = state_9146__$1;
(statearr_9153_9186[(2)] = inst_9135);

(statearr_9153_9186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (6))){
var state_9146__$1 = state_9146;
var statearr_9154_9187 = state_9146__$1;
(statearr_9154_9187[(2)] = null);

(statearr_9154_9187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (3))){
var inst_9144 = (state_9146[(2)]);
var state_9146__$1 = state_9146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9146__$1,inst_9144);
} else {
if((state_val_9147 === (12))){
var inst_9132 = (state_9146[(8)]);
var inst_9132__$1 = (state_9146[(2)]);
var inst_9133 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9132__$1);
var state_9146__$1 = (function (){var statearr_9155 = state_9146;
(statearr_9155[(8)] = inst_9132__$1);

return statearr_9155;
})();
if(cljs.core.truth_(inst_9133)){
var statearr_9156_9188 = state_9146__$1;
(statearr_9156_9188[(1)] = (13));

} else {
var statearr_9157_9189 = state_9146__$1;
(statearr_9157_9189[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (2))){
var inst_9109 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9110 = (0);
var state_9146__$1 = (function (){var statearr_9158 = state_9146;
(statearr_9158[(9)] = inst_9109);

(statearr_9158[(7)] = inst_9110);

return statearr_9158;
})();
var statearr_9159_9190 = state_9146__$1;
(statearr_9159_9190[(2)] = null);

(statearr_9159_9190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (11))){
var inst_9110 = (state_9146[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9146,(10),Object,null,(9));
var inst_9119 = chs__$1.call(null,inst_9110);
var inst_9120 = done.call(null,inst_9110);
var inst_9121 = cljs.core.async.take_BANG_.call(null,inst_9119,inst_9120);
var state_9146__$1 = state_9146;
var statearr_9160_9191 = state_9146__$1;
(statearr_9160_9191[(2)] = inst_9121);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (9))){
var inst_9110 = (state_9146[(7)]);
var inst_9123 = (state_9146[(2)]);
var inst_9124 = (inst_9110 + (1));
var inst_9110__$1 = inst_9124;
var state_9146__$1 = (function (){var statearr_9161 = state_9146;
(statearr_9161[(10)] = inst_9123);

(statearr_9161[(7)] = inst_9110__$1);

return statearr_9161;
})();
var statearr_9162_9192 = state_9146__$1;
(statearr_9162_9192[(2)] = null);

(statearr_9162_9192[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (5))){
var inst_9130 = (state_9146[(2)]);
var state_9146__$1 = (function (){var statearr_9163 = state_9146;
(statearr_9163[(11)] = inst_9130);

return statearr_9163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9146__$1,(12),dchan);
} else {
if((state_val_9147 === (14))){
var inst_9132 = (state_9146[(8)]);
var inst_9137 = cljs.core.apply.call(null,f,inst_9132);
var state_9146__$1 = state_9146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9146__$1,(16),out,inst_9137);
} else {
if((state_val_9147 === (16))){
var inst_9139 = (state_9146[(2)]);
var state_9146__$1 = (function (){var statearr_9164 = state_9146;
(statearr_9164[(12)] = inst_9139);

return statearr_9164;
})();
var statearr_9165_9193 = state_9146__$1;
(statearr_9165_9193[(2)] = null);

(statearr_9165_9193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (10))){
var inst_9114 = (state_9146[(2)]);
var inst_9115 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9146__$1 = (function (){var statearr_9166 = state_9146;
(statearr_9166[(13)] = inst_9114);

return statearr_9166;
})();
var statearr_9167_9194 = state_9146__$1;
(statearr_9167_9194[(2)] = inst_9115);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9146__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9147 === (8))){
var inst_9128 = (state_9146[(2)]);
var state_9146__$1 = state_9146;
var statearr_9168_9195 = state_9146__$1;
(statearr_9168_9195[(2)] = inst_9128);

(statearr_9168_9195[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___9180,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7086__auto__,c__7198__auto___9180,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_9172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9172[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_9172[(1)] = (1));

return statearr_9172;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_9146){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_9146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e9173){if((e9173 instanceof Object)){
var ex__7090__auto__ = e9173;
var statearr_9174_9196 = state_9146;
(statearr_9174_9196[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9197 = state_9146;
state_9146 = G__9197;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_9146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_9146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___9180,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7200__auto__ = (function (){var statearr_9175 = f__7199__auto__.call(null);
(statearr_9175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___9180);

return statearr_9175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___9180,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args9199 = [];
var len__5726__auto___9255 = arguments.length;
var i__5727__auto___9256 = (0);
while(true){
if((i__5727__auto___9256 < len__5726__auto___9255)){
args9199.push((arguments[i__5727__auto___9256]));

var G__9257 = (i__5727__auto___9256 + (1));
i__5727__auto___9256 = G__9257;
continue;
} else {
}
break;
}

var G__9201 = args9199.length;
switch (G__9201) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9199.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7198__auto___9259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___9259,out){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___9259,out){
return (function (state_9231){
var state_val_9232 = (state_9231[(1)]);
if((state_val_9232 === (7))){
var inst_9210 = (state_9231[(7)]);
var inst_9211 = (state_9231[(8)]);
var inst_9210__$1 = (state_9231[(2)]);
var inst_9211__$1 = cljs.core.nth.call(null,inst_9210__$1,(0),null);
var inst_9212 = cljs.core.nth.call(null,inst_9210__$1,(1),null);
var inst_9213 = (inst_9211__$1 == null);
var state_9231__$1 = (function (){var statearr_9233 = state_9231;
(statearr_9233[(7)] = inst_9210__$1);

(statearr_9233[(8)] = inst_9211__$1);

(statearr_9233[(9)] = inst_9212);

return statearr_9233;
})();
if(cljs.core.truth_(inst_9213)){
var statearr_9234_9260 = state_9231__$1;
(statearr_9234_9260[(1)] = (8));

} else {
var statearr_9235_9261 = state_9231__$1;
(statearr_9235_9261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (1))){
var inst_9202 = cljs.core.vec.call(null,chs);
var inst_9203 = inst_9202;
var state_9231__$1 = (function (){var statearr_9236 = state_9231;
(statearr_9236[(10)] = inst_9203);

return statearr_9236;
})();
var statearr_9237_9262 = state_9231__$1;
(statearr_9237_9262[(2)] = null);

(statearr_9237_9262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (4))){
var inst_9203 = (state_9231[(10)]);
var state_9231__$1 = state_9231;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9231__$1,(7),inst_9203);
} else {
if((state_val_9232 === (6))){
var inst_9227 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9238_9263 = state_9231__$1;
(statearr_9238_9263[(2)] = inst_9227);

(statearr_9238_9263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (3))){
var inst_9229 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9231__$1,inst_9229);
} else {
if((state_val_9232 === (2))){
var inst_9203 = (state_9231[(10)]);
var inst_9205 = cljs.core.count.call(null,inst_9203);
var inst_9206 = (inst_9205 > (0));
var state_9231__$1 = state_9231;
if(cljs.core.truth_(inst_9206)){
var statearr_9240_9264 = state_9231__$1;
(statearr_9240_9264[(1)] = (4));

} else {
var statearr_9241_9265 = state_9231__$1;
(statearr_9241_9265[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (11))){
var inst_9203 = (state_9231[(10)]);
var inst_9220 = (state_9231[(2)]);
var tmp9239 = inst_9203;
var inst_9203__$1 = tmp9239;
var state_9231__$1 = (function (){var statearr_9242 = state_9231;
(statearr_9242[(10)] = inst_9203__$1);

(statearr_9242[(11)] = inst_9220);

return statearr_9242;
})();
var statearr_9243_9266 = state_9231__$1;
(statearr_9243_9266[(2)] = null);

(statearr_9243_9266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (9))){
var inst_9211 = (state_9231[(8)]);
var state_9231__$1 = state_9231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9231__$1,(11),out,inst_9211);
} else {
if((state_val_9232 === (5))){
var inst_9225 = cljs.core.async.close_BANG_.call(null,out);
var state_9231__$1 = state_9231;
var statearr_9244_9267 = state_9231__$1;
(statearr_9244_9267[(2)] = inst_9225);

(statearr_9244_9267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (10))){
var inst_9223 = (state_9231[(2)]);
var state_9231__$1 = state_9231;
var statearr_9245_9268 = state_9231__$1;
(statearr_9245_9268[(2)] = inst_9223);

(statearr_9245_9268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9232 === (8))){
var inst_9210 = (state_9231[(7)]);
var inst_9203 = (state_9231[(10)]);
var inst_9211 = (state_9231[(8)]);
var inst_9212 = (state_9231[(9)]);
var inst_9215 = (function (){var cs = inst_9203;
var vec__9208 = inst_9210;
var v = inst_9211;
var c = inst_9212;
return ((function (cs,vec__9208,v,c,inst_9210,inst_9203,inst_9211,inst_9212,state_val_9232,c__7198__auto___9259,out){
return (function (p1__9198_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9198_SHARP_);
});
;})(cs,vec__9208,v,c,inst_9210,inst_9203,inst_9211,inst_9212,state_val_9232,c__7198__auto___9259,out))
})();
var inst_9216 = cljs.core.filterv.call(null,inst_9215,inst_9203);
var inst_9203__$1 = inst_9216;
var state_9231__$1 = (function (){var statearr_9246 = state_9231;
(statearr_9246[(10)] = inst_9203__$1);

return statearr_9246;
})();
var statearr_9247_9269 = state_9231__$1;
(statearr_9247_9269[(2)] = null);

(statearr_9247_9269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___9259,out))
;
return ((function (switch__7086__auto__,c__7198__auto___9259,out){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_9251 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9251[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_9251[(1)] = (1));

return statearr_9251;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_9231){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_9231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e9252){if((e9252 instanceof Object)){
var ex__7090__auto__ = e9252;
var statearr_9253_9270 = state_9231;
(statearr_9253_9270[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9271 = state_9231;
state_9231 = G__9271;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_9231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_9231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___9259,out))
})();
var state__7200__auto__ = (function (){var statearr_9254 = f__7199__auto__.call(null);
(statearr_9254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___9259);

return statearr_9254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___9259,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args9272 = [];
var len__5726__auto___9321 = arguments.length;
var i__5727__auto___9322 = (0);
while(true){
if((i__5727__auto___9322 < len__5726__auto___9321)){
args9272.push((arguments[i__5727__auto___9322]));

var G__9323 = (i__5727__auto___9322 + (1));
i__5727__auto___9322 = G__9323;
continue;
} else {
}
break;
}

var G__9274 = args9272.length;
switch (G__9274) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9272.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7198__auto___9325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___9325,out){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___9325,out){
return (function (state_9298){
var state_val_9299 = (state_9298[(1)]);
if((state_val_9299 === (7))){
var inst_9280 = (state_9298[(7)]);
var inst_9280__$1 = (state_9298[(2)]);
var inst_9281 = (inst_9280__$1 == null);
var inst_9282 = cljs.core.not.call(null,inst_9281);
var state_9298__$1 = (function (){var statearr_9300 = state_9298;
(statearr_9300[(7)] = inst_9280__$1);

return statearr_9300;
})();
if(inst_9282){
var statearr_9301_9326 = state_9298__$1;
(statearr_9301_9326[(1)] = (8));

} else {
var statearr_9302_9327 = state_9298__$1;
(statearr_9302_9327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9299 === (1))){
var inst_9275 = (0);
var state_9298__$1 = (function (){var statearr_9303 = state_9298;
(statearr_9303[(8)] = inst_9275);

return statearr_9303;
})();
var statearr_9304_9328 = state_9298__$1;
(statearr_9304_9328[(2)] = null);

(statearr_9304_9328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9299 === (4))){
var state_9298__$1 = state_9298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9298__$1,(7),ch);
} else {
if((state_val_9299 === (6))){
var inst_9293 = (state_9298[(2)]);
var state_9298__$1 = state_9298;
var statearr_9305_9329 = state_9298__$1;
(statearr_9305_9329[(2)] = inst_9293);

(statearr_9305_9329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9299 === (3))){
var inst_9295 = (state_9298[(2)]);
var inst_9296 = cljs.core.async.close_BANG_.call(null,out);
var state_9298__$1 = (function (){var statearr_9306 = state_9298;
(statearr_9306[(9)] = inst_9295);

return statearr_9306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9298__$1,inst_9296);
} else {
if((state_val_9299 === (2))){
var inst_9275 = (state_9298[(8)]);
var inst_9277 = (inst_9275 < n);
var state_9298__$1 = state_9298;
if(cljs.core.truth_(inst_9277)){
var statearr_9307_9330 = state_9298__$1;
(statearr_9307_9330[(1)] = (4));

} else {
var statearr_9308_9331 = state_9298__$1;
(statearr_9308_9331[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9299 === (11))){
var inst_9275 = (state_9298[(8)]);
var inst_9285 = (state_9298[(2)]);
var inst_9286 = (inst_9275 + (1));
var inst_9275__$1 = inst_9286;
var state_9298__$1 = (function (){var statearr_9309 = state_9298;
(statearr_9309[(8)] = inst_9275__$1);

(statearr_9309[(10)] = inst_9285);

return statearr_9309;
})();
var statearr_9310_9332 = state_9298__$1;
(statearr_9310_9332[(2)] = null);

(statearr_9310_9332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9299 === (9))){
var state_9298__$1 = state_9298;
var statearr_9311_9333 = state_9298__$1;
(statearr_9311_9333[(2)] = null);

(statearr_9311_9333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9299 === (5))){
var state_9298__$1 = state_9298;
var statearr_9312_9334 = state_9298__$1;
(statearr_9312_9334[(2)] = null);

(statearr_9312_9334[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9299 === (10))){
var inst_9290 = (state_9298[(2)]);
var state_9298__$1 = state_9298;
var statearr_9313_9335 = state_9298__$1;
(statearr_9313_9335[(2)] = inst_9290);

(statearr_9313_9335[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9299 === (8))){
var inst_9280 = (state_9298[(7)]);
var state_9298__$1 = state_9298;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9298__$1,(11),out,inst_9280);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___9325,out))
;
return ((function (switch__7086__auto__,c__7198__auto___9325,out){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_9317 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9317[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_9317[(1)] = (1));

return statearr_9317;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_9298){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_9298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e9318){if((e9318 instanceof Object)){
var ex__7090__auto__ = e9318;
var statearr_9319_9336 = state_9298;
(statearr_9319_9336[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9337 = state_9298;
state_9298 = G__9337;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_9298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_9298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___9325,out))
})();
var state__7200__auto__ = (function (){var statearr_9320 = f__7199__auto__.call(null);
(statearr_9320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___9325);

return statearr_9320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___9325,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9345 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9345 = (function (map_LT_,f,ch,meta9346){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9346 = meta9346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9347,meta9346__$1){
var self__ = this;
var _9347__$1 = this;
return (new cljs.core.async.t_cljs$core$async9345(self__.map_LT_,self__.f,self__.ch,meta9346__$1));
});

cljs.core.async.t_cljs$core$async9345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9347){
var self__ = this;
var _9347__$1 = this;
return self__.meta9346;
});

cljs.core.async.t_cljs$core$async9345.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9348 = (function (map_LT_,f,ch,meta9346,_,fn1,meta9349){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9346 = meta9346;
this._ = _;
this.fn1 = fn1;
this.meta9349 = meta9349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9350,meta9349__$1){
var self__ = this;
var _9350__$1 = this;
return (new cljs.core.async.t_cljs$core$async9348(self__.map_LT_,self__.f,self__.ch,self__.meta9346,self__._,self__.fn1,meta9349__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9350){
var self__ = this;
var _9350__$1 = this;
return self__.meta9349;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9348.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9348.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9348.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9338_SHARP_){
return f1.call(null,(((p1__9338_SHARP_ == null))?null:self__.f.call(null,p1__9338_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9348.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9346","meta9346",1504485646,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9345","cljs.core.async/t_cljs$core$async9345",1556185848,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9349","meta9349",771232345,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9348.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9348.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9348";

cljs.core.async.t_cljs$core$async9348.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9348");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9348 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9348(map_LT___$1,f__$1,ch__$1,meta9346__$1,___$2,fn1__$1,meta9349){
return (new cljs.core.async.t_cljs$core$async9348(map_LT___$1,f__$1,ch__$1,meta9346__$1,___$2,fn1__$1,meta9349));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9348(self__.map_LT_,self__.f,self__.ch,self__.meta9346,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4656__auto__ = ret;
if(cljs.core.truth_(and__4656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9346","meta9346",1504485646,null)], null);
});

cljs.core.async.t_cljs$core$async9345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9345";

cljs.core.async.t_cljs$core$async9345.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9345");
});

cljs.core.async.__GT_t_cljs$core$async9345 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9345(map_LT___$1,f__$1,ch__$1,meta9346){
return (new cljs.core.async.t_cljs$core$async9345(map_LT___$1,f__$1,ch__$1,meta9346));
});

}

return (new cljs.core.async.t_cljs$core$async9345(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9354 = (function (map_GT_,f,ch,meta9355){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9355 = meta9355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9356,meta9355__$1){
var self__ = this;
var _9356__$1 = this;
return (new cljs.core.async.t_cljs$core$async9354(self__.map_GT_,self__.f,self__.ch,meta9355__$1));
});

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9356){
var self__ = this;
var _9356__$1 = this;
return self__.meta9355;
});

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9354.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9355","meta9355",189286096,null)], null);
});

cljs.core.async.t_cljs$core$async9354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9354";

cljs.core.async.t_cljs$core$async9354.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9354");
});

cljs.core.async.__GT_t_cljs$core$async9354 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9354(map_GT___$1,f__$1,ch__$1,meta9355){
return (new cljs.core.async.t_cljs$core$async9354(map_GT___$1,f__$1,ch__$1,meta9355));
});

}

return (new cljs.core.async.t_cljs$core$async9354(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9360 = (function (filter_GT_,p,ch,meta9361){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9361 = meta9361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9362,meta9361__$1){
var self__ = this;
var _9362__$1 = this;
return (new cljs.core.async.t_cljs$core$async9360(self__.filter_GT_,self__.p,self__.ch,meta9361__$1));
});

cljs.core.async.t_cljs$core$async9360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9362){
var self__ = this;
var _9362__$1 = this;
return self__.meta9361;
});

cljs.core.async.t_cljs$core$async9360.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9360.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9361","meta9361",-2088830199,null)], null);
});

cljs.core.async.t_cljs$core$async9360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9360";

cljs.core.async.t_cljs$core$async9360.cljs$lang$ctorPrWriter = (function (this__5266__auto__,writer__5267__auto__,opt__5268__auto__){
return cljs.core._write.call(null,writer__5267__auto__,"cljs.core.async/t_cljs$core$async9360");
});

cljs.core.async.__GT_t_cljs$core$async9360 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9360(filter_GT___$1,p__$1,ch__$1,meta9361){
return (new cljs.core.async.t_cljs$core$async9360(filter_GT___$1,p__$1,ch__$1,meta9361));
});

}

return (new cljs.core.async.t_cljs$core$async9360(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args9363 = [];
var len__5726__auto___9407 = arguments.length;
var i__5727__auto___9408 = (0);
while(true){
if((i__5727__auto___9408 < len__5726__auto___9407)){
args9363.push((arguments[i__5727__auto___9408]));

var G__9409 = (i__5727__auto___9408 + (1));
i__5727__auto___9408 = G__9409;
continue;
} else {
}
break;
}

var G__9365 = args9363.length;
switch (G__9365) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9363.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7198__auto___9411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___9411,out){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___9411,out){
return (function (state_9386){
var state_val_9387 = (state_9386[(1)]);
if((state_val_9387 === (7))){
var inst_9382 = (state_9386[(2)]);
var state_9386__$1 = state_9386;
var statearr_9388_9412 = state_9386__$1;
(statearr_9388_9412[(2)] = inst_9382);

(statearr_9388_9412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (1))){
var state_9386__$1 = state_9386;
var statearr_9389_9413 = state_9386__$1;
(statearr_9389_9413[(2)] = null);

(statearr_9389_9413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (4))){
var inst_9368 = (state_9386[(7)]);
var inst_9368__$1 = (state_9386[(2)]);
var inst_9369 = (inst_9368__$1 == null);
var state_9386__$1 = (function (){var statearr_9390 = state_9386;
(statearr_9390[(7)] = inst_9368__$1);

return statearr_9390;
})();
if(cljs.core.truth_(inst_9369)){
var statearr_9391_9414 = state_9386__$1;
(statearr_9391_9414[(1)] = (5));

} else {
var statearr_9392_9415 = state_9386__$1;
(statearr_9392_9415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (6))){
var inst_9368 = (state_9386[(7)]);
var inst_9373 = p.call(null,inst_9368);
var state_9386__$1 = state_9386;
if(cljs.core.truth_(inst_9373)){
var statearr_9393_9416 = state_9386__$1;
(statearr_9393_9416[(1)] = (8));

} else {
var statearr_9394_9417 = state_9386__$1;
(statearr_9394_9417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (3))){
var inst_9384 = (state_9386[(2)]);
var state_9386__$1 = state_9386;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9386__$1,inst_9384);
} else {
if((state_val_9387 === (2))){
var state_9386__$1 = state_9386;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9386__$1,(4),ch);
} else {
if((state_val_9387 === (11))){
var inst_9376 = (state_9386[(2)]);
var state_9386__$1 = state_9386;
var statearr_9395_9418 = state_9386__$1;
(statearr_9395_9418[(2)] = inst_9376);

(statearr_9395_9418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (9))){
var state_9386__$1 = state_9386;
var statearr_9396_9419 = state_9386__$1;
(statearr_9396_9419[(2)] = null);

(statearr_9396_9419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (5))){
var inst_9371 = cljs.core.async.close_BANG_.call(null,out);
var state_9386__$1 = state_9386;
var statearr_9397_9420 = state_9386__$1;
(statearr_9397_9420[(2)] = inst_9371);

(statearr_9397_9420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (10))){
var inst_9379 = (state_9386[(2)]);
var state_9386__$1 = (function (){var statearr_9398 = state_9386;
(statearr_9398[(8)] = inst_9379);

return statearr_9398;
})();
var statearr_9399_9421 = state_9386__$1;
(statearr_9399_9421[(2)] = null);

(statearr_9399_9421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9387 === (8))){
var inst_9368 = (state_9386[(7)]);
var state_9386__$1 = state_9386;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9386__$1,(11),out,inst_9368);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___9411,out))
;
return ((function (switch__7086__auto__,c__7198__auto___9411,out){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_9403 = [null,null,null,null,null,null,null,null,null];
(statearr_9403[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_9403[(1)] = (1));

return statearr_9403;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_9386){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_9386);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e9404){if((e9404 instanceof Object)){
var ex__7090__auto__ = e9404;
var statearr_9405_9422 = state_9386;
(statearr_9405_9422[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9386);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9423 = state_9386;
state_9386 = G__9423;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_9386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_9386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___9411,out))
})();
var state__7200__auto__ = (function (){var statearr_9406 = f__7199__auto__.call(null);
(statearr_9406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___9411);

return statearr_9406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___9411,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9424 = [];
var len__5726__auto___9427 = arguments.length;
var i__5727__auto___9428 = (0);
while(true){
if((i__5727__auto___9428 < len__5726__auto___9427)){
args9424.push((arguments[i__5727__auto___9428]));

var G__9429 = (i__5727__auto___9428 + (1));
i__5727__auto___9428 = G__9429;
continue;
} else {
}
break;
}

var G__9426 = args9424.length;
switch (G__9426) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9424.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7198__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto__){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto__){
return (function (state_9596){
var state_val_9597 = (state_9596[(1)]);
if((state_val_9597 === (7))){
var inst_9592 = (state_9596[(2)]);
var state_9596__$1 = state_9596;
var statearr_9598_9639 = state_9596__$1;
(statearr_9598_9639[(2)] = inst_9592);

(statearr_9598_9639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (20))){
var inst_9562 = (state_9596[(7)]);
var inst_9573 = (state_9596[(2)]);
var inst_9574 = cljs.core.next.call(null,inst_9562);
var inst_9548 = inst_9574;
var inst_9549 = null;
var inst_9550 = (0);
var inst_9551 = (0);
var state_9596__$1 = (function (){var statearr_9599 = state_9596;
(statearr_9599[(8)] = inst_9549);

(statearr_9599[(9)] = inst_9573);

(statearr_9599[(10)] = inst_9550);

(statearr_9599[(11)] = inst_9548);

(statearr_9599[(12)] = inst_9551);

return statearr_9599;
})();
var statearr_9600_9640 = state_9596__$1;
(statearr_9600_9640[(2)] = null);

(statearr_9600_9640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (1))){
var state_9596__$1 = state_9596;
var statearr_9601_9641 = state_9596__$1;
(statearr_9601_9641[(2)] = null);

(statearr_9601_9641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (4))){
var inst_9537 = (state_9596[(13)]);
var inst_9537__$1 = (state_9596[(2)]);
var inst_9538 = (inst_9537__$1 == null);
var state_9596__$1 = (function (){var statearr_9602 = state_9596;
(statearr_9602[(13)] = inst_9537__$1);

return statearr_9602;
})();
if(cljs.core.truth_(inst_9538)){
var statearr_9603_9642 = state_9596__$1;
(statearr_9603_9642[(1)] = (5));

} else {
var statearr_9604_9643 = state_9596__$1;
(statearr_9604_9643[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (15))){
var state_9596__$1 = state_9596;
var statearr_9608_9644 = state_9596__$1;
(statearr_9608_9644[(2)] = null);

(statearr_9608_9644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (21))){
var state_9596__$1 = state_9596;
var statearr_9609_9645 = state_9596__$1;
(statearr_9609_9645[(2)] = null);

(statearr_9609_9645[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (13))){
var inst_9549 = (state_9596[(8)]);
var inst_9550 = (state_9596[(10)]);
var inst_9548 = (state_9596[(11)]);
var inst_9551 = (state_9596[(12)]);
var inst_9558 = (state_9596[(2)]);
var inst_9559 = (inst_9551 + (1));
var tmp9605 = inst_9549;
var tmp9606 = inst_9550;
var tmp9607 = inst_9548;
var inst_9548__$1 = tmp9607;
var inst_9549__$1 = tmp9605;
var inst_9550__$1 = tmp9606;
var inst_9551__$1 = inst_9559;
var state_9596__$1 = (function (){var statearr_9610 = state_9596;
(statearr_9610[(8)] = inst_9549__$1);

(statearr_9610[(10)] = inst_9550__$1);

(statearr_9610[(11)] = inst_9548__$1);

(statearr_9610[(14)] = inst_9558);

(statearr_9610[(12)] = inst_9551__$1);

return statearr_9610;
})();
var statearr_9611_9646 = state_9596__$1;
(statearr_9611_9646[(2)] = null);

(statearr_9611_9646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (22))){
var state_9596__$1 = state_9596;
var statearr_9612_9647 = state_9596__$1;
(statearr_9612_9647[(2)] = null);

(statearr_9612_9647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (6))){
var inst_9537 = (state_9596[(13)]);
var inst_9546 = f.call(null,inst_9537);
var inst_9547 = cljs.core.seq.call(null,inst_9546);
var inst_9548 = inst_9547;
var inst_9549 = null;
var inst_9550 = (0);
var inst_9551 = (0);
var state_9596__$1 = (function (){var statearr_9613 = state_9596;
(statearr_9613[(8)] = inst_9549);

(statearr_9613[(10)] = inst_9550);

(statearr_9613[(11)] = inst_9548);

(statearr_9613[(12)] = inst_9551);

return statearr_9613;
})();
var statearr_9614_9648 = state_9596__$1;
(statearr_9614_9648[(2)] = null);

(statearr_9614_9648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (17))){
var inst_9562 = (state_9596[(7)]);
var inst_9566 = cljs.core.chunk_first.call(null,inst_9562);
var inst_9567 = cljs.core.chunk_rest.call(null,inst_9562);
var inst_9568 = cljs.core.count.call(null,inst_9566);
var inst_9548 = inst_9567;
var inst_9549 = inst_9566;
var inst_9550 = inst_9568;
var inst_9551 = (0);
var state_9596__$1 = (function (){var statearr_9615 = state_9596;
(statearr_9615[(8)] = inst_9549);

(statearr_9615[(10)] = inst_9550);

(statearr_9615[(11)] = inst_9548);

(statearr_9615[(12)] = inst_9551);

return statearr_9615;
})();
var statearr_9616_9649 = state_9596__$1;
(statearr_9616_9649[(2)] = null);

(statearr_9616_9649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (3))){
var inst_9594 = (state_9596[(2)]);
var state_9596__$1 = state_9596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9596__$1,inst_9594);
} else {
if((state_val_9597 === (12))){
var inst_9582 = (state_9596[(2)]);
var state_9596__$1 = state_9596;
var statearr_9617_9650 = state_9596__$1;
(statearr_9617_9650[(2)] = inst_9582);

(statearr_9617_9650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (2))){
var state_9596__$1 = state_9596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9596__$1,(4),in$);
} else {
if((state_val_9597 === (23))){
var inst_9590 = (state_9596[(2)]);
var state_9596__$1 = state_9596;
var statearr_9618_9651 = state_9596__$1;
(statearr_9618_9651[(2)] = inst_9590);

(statearr_9618_9651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (19))){
var inst_9577 = (state_9596[(2)]);
var state_9596__$1 = state_9596;
var statearr_9619_9652 = state_9596__$1;
(statearr_9619_9652[(2)] = inst_9577);

(statearr_9619_9652[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (11))){
var inst_9548 = (state_9596[(11)]);
var inst_9562 = (state_9596[(7)]);
var inst_9562__$1 = cljs.core.seq.call(null,inst_9548);
var state_9596__$1 = (function (){var statearr_9620 = state_9596;
(statearr_9620[(7)] = inst_9562__$1);

return statearr_9620;
})();
if(inst_9562__$1){
var statearr_9621_9653 = state_9596__$1;
(statearr_9621_9653[(1)] = (14));

} else {
var statearr_9622_9654 = state_9596__$1;
(statearr_9622_9654[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (9))){
var inst_9584 = (state_9596[(2)]);
var inst_9585 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9596__$1 = (function (){var statearr_9623 = state_9596;
(statearr_9623[(15)] = inst_9584);

return statearr_9623;
})();
if(cljs.core.truth_(inst_9585)){
var statearr_9624_9655 = state_9596__$1;
(statearr_9624_9655[(1)] = (21));

} else {
var statearr_9625_9656 = state_9596__$1;
(statearr_9625_9656[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (5))){
var inst_9540 = cljs.core.async.close_BANG_.call(null,out);
var state_9596__$1 = state_9596;
var statearr_9626_9657 = state_9596__$1;
(statearr_9626_9657[(2)] = inst_9540);

(statearr_9626_9657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (14))){
var inst_9562 = (state_9596[(7)]);
var inst_9564 = cljs.core.chunked_seq_QMARK_.call(null,inst_9562);
var state_9596__$1 = state_9596;
if(inst_9564){
var statearr_9627_9658 = state_9596__$1;
(statearr_9627_9658[(1)] = (17));

} else {
var statearr_9628_9659 = state_9596__$1;
(statearr_9628_9659[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (16))){
var inst_9580 = (state_9596[(2)]);
var state_9596__$1 = state_9596;
var statearr_9629_9660 = state_9596__$1;
(statearr_9629_9660[(2)] = inst_9580);

(statearr_9629_9660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9597 === (10))){
var inst_9549 = (state_9596[(8)]);
var inst_9551 = (state_9596[(12)]);
var inst_9556 = cljs.core._nth.call(null,inst_9549,inst_9551);
var state_9596__$1 = state_9596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9596__$1,(13),out,inst_9556);
} else {
if((state_val_9597 === (18))){
var inst_9562 = (state_9596[(7)]);
var inst_9571 = cljs.core.first.call(null,inst_9562);
var state_9596__$1 = state_9596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9596__$1,(20),out,inst_9571);
} else {
if((state_val_9597 === (8))){
var inst_9550 = (state_9596[(10)]);
var inst_9551 = (state_9596[(12)]);
var inst_9553 = (inst_9551 < inst_9550);
var inst_9554 = inst_9553;
var state_9596__$1 = state_9596;
if(cljs.core.truth_(inst_9554)){
var statearr_9630_9661 = state_9596__$1;
(statearr_9630_9661[(1)] = (10));

} else {
var statearr_9631_9662 = state_9596__$1;
(statearr_9631_9662[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto__))
;
return ((function (switch__7086__auto__,c__7198__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7087__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7087__auto____0 = (function (){
var statearr_9635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9635[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7087__auto__);

(statearr_9635[(1)] = (1));

return statearr_9635;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7087__auto____1 = (function (state_9596){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_9596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e9636){if((e9636 instanceof Object)){
var ex__7090__auto__ = e9636;
var statearr_9637_9663 = state_9596;
(statearr_9637_9663[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9664 = state_9596;
state_9596 = G__9664;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7087__auto__ = function(state_9596){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7087__auto____1.call(this,state_9596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7087__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7087__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto__))
})();
var state__7200__auto__ = (function (){var statearr_9638 = f__7199__auto__.call(null);
(statearr_9638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto__);

return statearr_9638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto__))
);

return c__7198__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args9665 = [];
var len__5726__auto___9668 = arguments.length;
var i__5727__auto___9669 = (0);
while(true){
if((i__5727__auto___9669 < len__5726__auto___9668)){
args9665.push((arguments[i__5727__auto___9669]));

var G__9670 = (i__5727__auto___9669 + (1));
i__5727__auto___9669 = G__9670;
continue;
} else {
}
break;
}

var G__9667 = args9665.length;
switch (G__9667) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9665.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args9672 = [];
var len__5726__auto___9675 = arguments.length;
var i__5727__auto___9676 = (0);
while(true){
if((i__5727__auto___9676 < len__5726__auto___9675)){
args9672.push((arguments[i__5727__auto___9676]));

var G__9677 = (i__5727__auto___9676 + (1));
i__5727__auto___9676 = G__9677;
continue;
} else {
}
break;
}

var G__9674 = args9672.length;
switch (G__9674) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9672.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args9679 = [];
var len__5726__auto___9730 = arguments.length;
var i__5727__auto___9731 = (0);
while(true){
if((i__5727__auto___9731 < len__5726__auto___9730)){
args9679.push((arguments[i__5727__auto___9731]));

var G__9732 = (i__5727__auto___9731 + (1));
i__5727__auto___9731 = G__9732;
continue;
} else {
}
break;
}

var G__9681 = args9679.length;
switch (G__9681) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9679.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7198__auto___9734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___9734,out){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___9734,out){
return (function (state_9705){
var state_val_9706 = (state_9705[(1)]);
if((state_val_9706 === (7))){
var inst_9700 = (state_9705[(2)]);
var state_9705__$1 = state_9705;
var statearr_9707_9735 = state_9705__$1;
(statearr_9707_9735[(2)] = inst_9700);

(statearr_9707_9735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9706 === (1))){
var inst_9682 = null;
var state_9705__$1 = (function (){var statearr_9708 = state_9705;
(statearr_9708[(7)] = inst_9682);

return statearr_9708;
})();
var statearr_9709_9736 = state_9705__$1;
(statearr_9709_9736[(2)] = null);

(statearr_9709_9736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9706 === (4))){
var inst_9685 = (state_9705[(8)]);
var inst_9685__$1 = (state_9705[(2)]);
var inst_9686 = (inst_9685__$1 == null);
var inst_9687 = cljs.core.not.call(null,inst_9686);
var state_9705__$1 = (function (){var statearr_9710 = state_9705;
(statearr_9710[(8)] = inst_9685__$1);

return statearr_9710;
})();
if(inst_9687){
var statearr_9711_9737 = state_9705__$1;
(statearr_9711_9737[(1)] = (5));

} else {
var statearr_9712_9738 = state_9705__$1;
(statearr_9712_9738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9706 === (6))){
var state_9705__$1 = state_9705;
var statearr_9713_9739 = state_9705__$1;
(statearr_9713_9739[(2)] = null);

(statearr_9713_9739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9706 === (3))){
var inst_9702 = (state_9705[(2)]);
var inst_9703 = cljs.core.async.close_BANG_.call(null,out);
var state_9705__$1 = (function (){var statearr_9714 = state_9705;
(statearr_9714[(9)] = inst_9702);

return statearr_9714;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9705__$1,inst_9703);
} else {
if((state_val_9706 === (2))){
var state_9705__$1 = state_9705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9705__$1,(4),ch);
} else {
if((state_val_9706 === (11))){
var inst_9685 = (state_9705[(8)]);
var inst_9694 = (state_9705[(2)]);
var inst_9682 = inst_9685;
var state_9705__$1 = (function (){var statearr_9715 = state_9705;
(statearr_9715[(10)] = inst_9694);

(statearr_9715[(7)] = inst_9682);

return statearr_9715;
})();
var statearr_9716_9740 = state_9705__$1;
(statearr_9716_9740[(2)] = null);

(statearr_9716_9740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9706 === (9))){
var inst_9685 = (state_9705[(8)]);
var state_9705__$1 = state_9705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9705__$1,(11),out,inst_9685);
} else {
if((state_val_9706 === (5))){
var inst_9685 = (state_9705[(8)]);
var inst_9682 = (state_9705[(7)]);
var inst_9689 = cljs.core._EQ_.call(null,inst_9685,inst_9682);
var state_9705__$1 = state_9705;
if(inst_9689){
var statearr_9718_9741 = state_9705__$1;
(statearr_9718_9741[(1)] = (8));

} else {
var statearr_9719_9742 = state_9705__$1;
(statearr_9719_9742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9706 === (10))){
var inst_9697 = (state_9705[(2)]);
var state_9705__$1 = state_9705;
var statearr_9720_9743 = state_9705__$1;
(statearr_9720_9743[(2)] = inst_9697);

(statearr_9720_9743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9706 === (8))){
var inst_9682 = (state_9705[(7)]);
var tmp9717 = inst_9682;
var inst_9682__$1 = tmp9717;
var state_9705__$1 = (function (){var statearr_9721 = state_9705;
(statearr_9721[(7)] = inst_9682__$1);

return statearr_9721;
})();
var statearr_9722_9744 = state_9705__$1;
(statearr_9722_9744[(2)] = null);

(statearr_9722_9744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___9734,out))
;
return ((function (switch__7086__auto__,c__7198__auto___9734,out){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_9726 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9726[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_9726[(1)] = (1));

return statearr_9726;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_9705){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_9705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e9727){if((e9727 instanceof Object)){
var ex__7090__auto__ = e9727;
var statearr_9728_9745 = state_9705;
(statearr_9728_9745[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9746 = state_9705;
state_9705 = G__9746;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_9705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_9705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___9734,out))
})();
var state__7200__auto__ = (function (){var statearr_9729 = f__7199__auto__.call(null);
(statearr_9729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___9734);

return statearr_9729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___9734,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args9747 = [];
var len__5726__auto___9817 = arguments.length;
var i__5727__auto___9818 = (0);
while(true){
if((i__5727__auto___9818 < len__5726__auto___9817)){
args9747.push((arguments[i__5727__auto___9818]));

var G__9819 = (i__5727__auto___9818 + (1));
i__5727__auto___9818 = G__9819;
continue;
} else {
}
break;
}

var G__9749 = args9747.length;
switch (G__9749) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9747.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7198__auto___9821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___9821,out){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___9821,out){
return (function (state_9787){
var state_val_9788 = (state_9787[(1)]);
if((state_val_9788 === (7))){
var inst_9783 = (state_9787[(2)]);
var state_9787__$1 = state_9787;
var statearr_9789_9822 = state_9787__$1;
(statearr_9789_9822[(2)] = inst_9783);

(statearr_9789_9822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9788 === (1))){
var inst_9750 = (new Array(n));
var inst_9751 = inst_9750;
var inst_9752 = (0);
var state_9787__$1 = (function (){var statearr_9790 = state_9787;
(statearr_9790[(7)] = inst_9752);

(statearr_9790[(8)] = inst_9751);

return statearr_9790;
})();
var statearr_9791_9823 = state_9787__$1;
(statearr_9791_9823[(2)] = null);

(statearr_9791_9823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9788 === (4))){
var inst_9755 = (state_9787[(9)]);
var inst_9755__$1 = (state_9787[(2)]);
var inst_9756 = (inst_9755__$1 == null);
var inst_9757 = cljs.core.not.call(null,inst_9756);
var state_9787__$1 = (function (){var statearr_9792 = state_9787;
(statearr_9792[(9)] = inst_9755__$1);

return statearr_9792;
})();
if(inst_9757){
var statearr_9793_9824 = state_9787__$1;
(statearr_9793_9824[(1)] = (5));

} else {
var statearr_9794_9825 = state_9787__$1;
(statearr_9794_9825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9788 === (15))){
var inst_9777 = (state_9787[(2)]);
var state_9787__$1 = state_9787;
var statearr_9795_9826 = state_9787__$1;
(statearr_9795_9826[(2)] = inst_9777);

(statearr_9795_9826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9788 === (13))){
var state_9787__$1 = state_9787;
var statearr_9796_9827 = state_9787__$1;
(statearr_9796_9827[(2)] = null);

(statearr_9796_9827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9788 === (6))){
var inst_9752 = (state_9787[(7)]);
var inst_9773 = (inst_9752 > (0));
var state_9787__$1 = state_9787;
if(cljs.core.truth_(inst_9773)){
var statearr_9797_9828 = state_9787__$1;
(statearr_9797_9828[(1)] = (12));

} else {
var statearr_9798_9829 = state_9787__$1;
(statearr_9798_9829[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9788 === (3))){
var inst_9785 = (state_9787[(2)]);
var state_9787__$1 = state_9787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9787__$1,inst_9785);
} else {
if((state_val_9788 === (12))){
var inst_9751 = (state_9787[(8)]);
var inst_9775 = cljs.core.vec.call(null,inst_9751);
var state_9787__$1 = state_9787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9787__$1,(15),out,inst_9775);
} else {
if((state_val_9788 === (2))){
var state_9787__$1 = state_9787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9787__$1,(4),ch);
} else {
if((state_val_9788 === (11))){
var inst_9767 = (state_9787[(2)]);
var inst_9768 = (new Array(n));
var inst_9751 = inst_9768;
var inst_9752 = (0);
var state_9787__$1 = (function (){var statearr_9799 = state_9787;
(statearr_9799[(10)] = inst_9767);

(statearr_9799[(7)] = inst_9752);

(statearr_9799[(8)] = inst_9751);

return statearr_9799;
})();
var statearr_9800_9830 = state_9787__$1;
(statearr_9800_9830[(2)] = null);

(statearr_9800_9830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9788 === (9))){
var inst_9751 = (state_9787[(8)]);
var inst_9765 = cljs.core.vec.call(null,inst_9751);
var state_9787__$1 = state_9787;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9787__$1,(11),out,inst_9765);
} else {
if((state_val_9788 === (5))){
var inst_9752 = (state_9787[(7)]);
var inst_9755 = (state_9787[(9)]);
var inst_9751 = (state_9787[(8)]);
var inst_9760 = (state_9787[(11)]);
var inst_9759 = (inst_9751[inst_9752] = inst_9755);
var inst_9760__$1 = (inst_9752 + (1));
var inst_9761 = (inst_9760__$1 < n);
var state_9787__$1 = (function (){var statearr_9801 = state_9787;
(statearr_9801[(12)] = inst_9759);

(statearr_9801[(11)] = inst_9760__$1);

return statearr_9801;
})();
if(cljs.core.truth_(inst_9761)){
var statearr_9802_9831 = state_9787__$1;
(statearr_9802_9831[(1)] = (8));

} else {
var statearr_9803_9832 = state_9787__$1;
(statearr_9803_9832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9788 === (14))){
var inst_9780 = (state_9787[(2)]);
var inst_9781 = cljs.core.async.close_BANG_.call(null,out);
var state_9787__$1 = (function (){var statearr_9805 = state_9787;
(statearr_9805[(13)] = inst_9780);

return statearr_9805;
})();
var statearr_9806_9833 = state_9787__$1;
(statearr_9806_9833[(2)] = inst_9781);

(statearr_9806_9833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9788 === (10))){
var inst_9771 = (state_9787[(2)]);
var state_9787__$1 = state_9787;
var statearr_9807_9834 = state_9787__$1;
(statearr_9807_9834[(2)] = inst_9771);

(statearr_9807_9834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9788 === (8))){
var inst_9751 = (state_9787[(8)]);
var inst_9760 = (state_9787[(11)]);
var tmp9804 = inst_9751;
var inst_9751__$1 = tmp9804;
var inst_9752 = inst_9760;
var state_9787__$1 = (function (){var statearr_9808 = state_9787;
(statearr_9808[(7)] = inst_9752);

(statearr_9808[(8)] = inst_9751__$1);

return statearr_9808;
})();
var statearr_9809_9835 = state_9787__$1;
(statearr_9809_9835[(2)] = null);

(statearr_9809_9835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___9821,out))
;
return ((function (switch__7086__auto__,c__7198__auto___9821,out){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_9813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9813[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_9813[(1)] = (1));

return statearr_9813;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_9787){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_9787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e9814){if((e9814 instanceof Object)){
var ex__7090__auto__ = e9814;
var statearr_9815_9836 = state_9787;
(statearr_9815_9836[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9837 = state_9787;
state_9787 = G__9837;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_9787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_9787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___9821,out))
})();
var state__7200__auto__ = (function (){var statearr_9816 = f__7199__auto__.call(null);
(statearr_9816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___9821);

return statearr_9816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___9821,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args9838 = [];
var len__5726__auto___9912 = arguments.length;
var i__5727__auto___9913 = (0);
while(true){
if((i__5727__auto___9913 < len__5726__auto___9912)){
args9838.push((arguments[i__5727__auto___9913]));

var G__9914 = (i__5727__auto___9913 + (1));
i__5727__auto___9913 = G__9914;
continue;
} else {
}
break;
}

var G__9840 = args9838.length;
switch (G__9840) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9838.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7198__auto___9916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7198__auto___9916,out){
return (function (){
var f__7199__auto__ = (function (){var switch__7086__auto__ = ((function (c__7198__auto___9916,out){
return (function (state_9882){
var state_val_9883 = (state_9882[(1)]);
if((state_val_9883 === (7))){
var inst_9878 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
var statearr_9884_9917 = state_9882__$1;
(statearr_9884_9917[(2)] = inst_9878);

(statearr_9884_9917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (1))){
var inst_9841 = [];
var inst_9842 = inst_9841;
var inst_9843 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9882__$1 = (function (){var statearr_9885 = state_9882;
(statearr_9885[(7)] = inst_9842);

(statearr_9885[(8)] = inst_9843);

return statearr_9885;
})();
var statearr_9886_9918 = state_9882__$1;
(statearr_9886_9918[(2)] = null);

(statearr_9886_9918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (4))){
var inst_9846 = (state_9882[(9)]);
var inst_9846__$1 = (state_9882[(2)]);
var inst_9847 = (inst_9846__$1 == null);
var inst_9848 = cljs.core.not.call(null,inst_9847);
var state_9882__$1 = (function (){var statearr_9887 = state_9882;
(statearr_9887[(9)] = inst_9846__$1);

return statearr_9887;
})();
if(inst_9848){
var statearr_9888_9919 = state_9882__$1;
(statearr_9888_9919[(1)] = (5));

} else {
var statearr_9889_9920 = state_9882__$1;
(statearr_9889_9920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (15))){
var inst_9872 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
var statearr_9890_9921 = state_9882__$1;
(statearr_9890_9921[(2)] = inst_9872);

(statearr_9890_9921[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (13))){
var state_9882__$1 = state_9882;
var statearr_9891_9922 = state_9882__$1;
(statearr_9891_9922[(2)] = null);

(statearr_9891_9922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (6))){
var inst_9842 = (state_9882[(7)]);
var inst_9867 = inst_9842.length;
var inst_9868 = (inst_9867 > (0));
var state_9882__$1 = state_9882;
if(cljs.core.truth_(inst_9868)){
var statearr_9892_9923 = state_9882__$1;
(statearr_9892_9923[(1)] = (12));

} else {
var statearr_9893_9924 = state_9882__$1;
(statearr_9893_9924[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (3))){
var inst_9880 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9882__$1,inst_9880);
} else {
if((state_val_9883 === (12))){
var inst_9842 = (state_9882[(7)]);
var inst_9870 = cljs.core.vec.call(null,inst_9842);
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9882__$1,(15),out,inst_9870);
} else {
if((state_val_9883 === (2))){
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9882__$1,(4),ch);
} else {
if((state_val_9883 === (11))){
var inst_9850 = (state_9882[(10)]);
var inst_9846 = (state_9882[(9)]);
var inst_9860 = (state_9882[(2)]);
var inst_9861 = [];
var inst_9862 = inst_9861.push(inst_9846);
var inst_9842 = inst_9861;
var inst_9843 = inst_9850;
var state_9882__$1 = (function (){var statearr_9894 = state_9882;
(statearr_9894[(11)] = inst_9862);

(statearr_9894[(12)] = inst_9860);

(statearr_9894[(7)] = inst_9842);

(statearr_9894[(8)] = inst_9843);

return statearr_9894;
})();
var statearr_9895_9925 = state_9882__$1;
(statearr_9895_9925[(2)] = null);

(statearr_9895_9925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (9))){
var inst_9842 = (state_9882[(7)]);
var inst_9858 = cljs.core.vec.call(null,inst_9842);
var state_9882__$1 = state_9882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9882__$1,(11),out,inst_9858);
} else {
if((state_val_9883 === (5))){
var inst_9850 = (state_9882[(10)]);
var inst_9843 = (state_9882[(8)]);
var inst_9846 = (state_9882[(9)]);
var inst_9850__$1 = f.call(null,inst_9846);
var inst_9851 = cljs.core._EQ_.call(null,inst_9850__$1,inst_9843);
var inst_9852 = cljs.core.keyword_identical_QMARK_.call(null,inst_9843,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9853 = (inst_9851) || (inst_9852);
var state_9882__$1 = (function (){var statearr_9896 = state_9882;
(statearr_9896[(10)] = inst_9850__$1);

return statearr_9896;
})();
if(cljs.core.truth_(inst_9853)){
var statearr_9897_9926 = state_9882__$1;
(statearr_9897_9926[(1)] = (8));

} else {
var statearr_9898_9927 = state_9882__$1;
(statearr_9898_9927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (14))){
var inst_9875 = (state_9882[(2)]);
var inst_9876 = cljs.core.async.close_BANG_.call(null,out);
var state_9882__$1 = (function (){var statearr_9900 = state_9882;
(statearr_9900[(13)] = inst_9875);

return statearr_9900;
})();
var statearr_9901_9928 = state_9882__$1;
(statearr_9901_9928[(2)] = inst_9876);

(statearr_9901_9928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (10))){
var inst_9865 = (state_9882[(2)]);
var state_9882__$1 = state_9882;
var statearr_9902_9929 = state_9882__$1;
(statearr_9902_9929[(2)] = inst_9865);

(statearr_9902_9929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9883 === (8))){
var inst_9850 = (state_9882[(10)]);
var inst_9842 = (state_9882[(7)]);
var inst_9846 = (state_9882[(9)]);
var inst_9855 = inst_9842.push(inst_9846);
var tmp9899 = inst_9842;
var inst_9842__$1 = tmp9899;
var inst_9843 = inst_9850;
var state_9882__$1 = (function (){var statearr_9903 = state_9882;
(statearr_9903[(7)] = inst_9842__$1);

(statearr_9903[(8)] = inst_9843);

(statearr_9903[(14)] = inst_9855);

return statearr_9903;
})();
var statearr_9904_9930 = state_9882__$1;
(statearr_9904_9930[(2)] = null);

(statearr_9904_9930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7198__auto___9916,out))
;
return ((function (switch__7086__auto__,c__7198__auto___9916,out){
return (function() {
var cljs$core$async$state_machine__7087__auto__ = null;
var cljs$core$async$state_machine__7087__auto____0 = (function (){
var statearr_9908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9908[(0)] = cljs$core$async$state_machine__7087__auto__);

(statearr_9908[(1)] = (1));

return statearr_9908;
});
var cljs$core$async$state_machine__7087__auto____1 = (function (state_9882){
while(true){
var ret_value__7088__auto__ = (function (){try{while(true){
var result__7089__auto__ = switch__7086__auto__.call(null,state_9882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7089__auto__;
}
break;
}
}catch (e9909){if((e9909 instanceof Object)){
var ex__7090__auto__ = e9909;
var statearr_9910_9931 = state_9882;
(statearr_9910_9931[(5)] = ex__7090__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7088__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9932 = state_9882;
state_9882 = G__9932;
continue;
} else {
return ret_value__7088__auto__;
}
break;
}
});
cljs$core$async$state_machine__7087__auto__ = function(state_9882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7087__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7087__auto____1.call(this,state_9882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7087__auto____0;
cljs$core$async$state_machine__7087__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7087__auto____1;
return cljs$core$async$state_machine__7087__auto__;
})()
;})(switch__7086__auto__,c__7198__auto___9916,out))
})();
var state__7200__auto__ = (function (){var statearr_9911 = f__7199__auto__.call(null);
(statearr_9911[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7198__auto___9916);

return statearr_9911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7200__auto__);
});})(c__7198__auto___9916,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1464143785999