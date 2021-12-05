goog.provide('com.rpl.specter.impl');
com.rpl.specter.impl.NONE = new cljs.core.Keyword("com.rpl.specter.impl","NONE","com.rpl.specter.impl/NONE",1085349969);
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["SPY:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0))], 0));

return e;
});
com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_(o)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o], 0));
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(o);
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52061 = arguments.length;
var i__4737__auto___52062 = (0);
while(true){
if((i__4737__auto___52062 < len__4736__auto___52061)){
args__4742__auto__.push((arguments[i__4737__auto___52062]));

var G__52063 = (i__4737__auto___52062 + (1));
i__4737__auto___52062 = G__52063;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.smart_str_STAR_,elems));
}));

(com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq49029){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49029));
}));

com.rpl.specter.impl.fast_constantly = (function com$rpl$specter$impl$fast_constantly(v){
return (function() {
var G__52064 = null;
var G__52064__0 = (function (){
return v;
});
var G__52064__1 = (function (a1){
return v;
});
var G__52064__2 = (function (a1,a2){
return v;
});
var G__52064__3 = (function (a1,a2,a3){
return v;
});
var G__52064__4 = (function (a1,a2,a3,a4){
return v;
});
var G__52064__5 = (function (a1,a2,a3,a4,a5){
return v;
});
var G__52064__6 = (function (a1,a2,a3,a4,a5,a6){
return v;
});
var G__52064__7 = (function (a1,a2,a3,a4,a5,a6,a7){
return v;
});
var G__52064__8 = (function (a1,a2,a3,a4,a5,a6,a7,a8){
return v;
});
var G__52064__9 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9){
return v;
});
var G__52064__10 = (function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
return v;
});
var G__52064__11 = (function() { 
var G__52074__delegate = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r){
return v;
};
var G__52074 = function (a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = null;
if (arguments.length > 10) {
var G__52076__i = 0, G__52076__a = new Array(arguments.length -  10);
while (G__52076__i < G__52076__a.length) {G__52076__a[G__52076__i] = arguments[G__52076__i + 10]; ++G__52076__i;}
  r = new cljs.core.IndexedSeq(G__52076__a,0,null);
} 
return G__52074__delegate.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);};
G__52074.cljs$lang$maxFixedArity = 10;
G__52074.cljs$lang$applyTo = (function (arglist__52077){
var a1 = cljs.core.first(arglist__52077);
arglist__52077 = cljs.core.next(arglist__52077);
var a2 = cljs.core.first(arglist__52077);
arglist__52077 = cljs.core.next(arglist__52077);
var a3 = cljs.core.first(arglist__52077);
arglist__52077 = cljs.core.next(arglist__52077);
var a4 = cljs.core.first(arglist__52077);
arglist__52077 = cljs.core.next(arglist__52077);
var a5 = cljs.core.first(arglist__52077);
arglist__52077 = cljs.core.next(arglist__52077);
var a6 = cljs.core.first(arglist__52077);
arglist__52077 = cljs.core.next(arglist__52077);
var a7 = cljs.core.first(arglist__52077);
arglist__52077 = cljs.core.next(arglist__52077);
var a8 = cljs.core.first(arglist__52077);
arglist__52077 = cljs.core.next(arglist__52077);
var a9 = cljs.core.first(arglist__52077);
arglist__52077 = cljs.core.next(arglist__52077);
var a10 = cljs.core.first(arglist__52077);
var r = cljs.core.rest(arglist__52077);
return G__52074__delegate(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,r);
});
G__52074.cljs$core$IFn$_invoke$arity$variadic = G__52074__delegate;
return G__52074;
})()
;
G__52064 = function(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,var_args){
var r = var_args;
switch(arguments.length){
case 0:
return G__52064__0.call(this);
case 1:
return G__52064__1.call(this,a1);
case 2:
return G__52064__2.call(this,a1,a2);
case 3:
return G__52064__3.call(this,a1,a2,a3);
case 4:
return G__52064__4.call(this,a1,a2,a3,a4);
case 5:
return G__52064__5.call(this,a1,a2,a3,a4,a5);
case 6:
return G__52064__6.call(this,a1,a2,a3,a4,a5,a6);
case 7:
return G__52064__7.call(this,a1,a2,a3,a4,a5,a6,a7);
case 8:
return G__52064__8.call(this,a1,a2,a3,a4,a5,a6,a7,a8);
case 9:
return G__52064__9.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9);
case 10:
return G__52064__10.call(this,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
default:
var G__52081 = null;
if (arguments.length > 10) {
var G__52082__i = 0, G__52082__a = new Array(arguments.length -  10);
while (G__52082__i < G__52082__a.length) {G__52082__a[G__52082__i] = arguments[G__52082__i + 10]; ++G__52082__i;}
G__52081 = new cljs.core.IndexedSeq(G__52082__a,0,null);
}
return G__52064__11.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10, G__52081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52064.cljs$lang$maxFixedArity = 10;
G__52064.cljs$lang$applyTo = G__52064__11.cljs$lang$applyTo;
G__52064.cljs$core$IFn$_invoke$arity$0 = G__52064__0;
G__52064.cljs$core$IFn$_invoke$arity$1 = G__52064__1;
G__52064.cljs$core$IFn$_invoke$arity$2 = G__52064__2;
G__52064.cljs$core$IFn$_invoke$arity$3 = G__52064__3;
G__52064.cljs$core$IFn$_invoke$arity$4 = G__52064__4;
G__52064.cljs$core$IFn$_invoke$arity$5 = G__52064__5;
G__52064.cljs$core$IFn$_invoke$arity$6 = G__52064__6;
G__52064.cljs$core$IFn$_invoke$arity$7 = G__52064__7;
G__52064.cljs$core$IFn$_invoke$arity$8 = G__52064__8;
G__52064.cljs$core$IFn$_invoke$arity$9 = G__52064__9;
G__52064.cljs$core$IFn$_invoke$arity$10 = G__52064__10;
G__52064.cljs$core$IFn$_invoke$arity$variadic = G__52064__11.cljs$core$IFn$_invoke$arity$variadic;
return G__52064;
})()
});
com.rpl.specter.impl.throw_illegal_STAR_ = (function com$rpl$specter$impl$throw_illegal_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52085 = arguments.length;
var i__4737__auto___52086 = (0);
while(true){
if((i__4737__auto___52086 < len__4736__auto___52085)){
args__4742__auto__.push((arguments[i__4737__auto___52086]));

var G__52087 = (i__4737__auto___52086 + (1));
i__4737__auto___52086 = G__52087;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)));
}));

(com.rpl.specter.impl.throw_illegal_STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.throw_illegal_STAR_.cljs$lang$applyTo = (function (seq49060){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49060));
}));

com.rpl.specter.impl.cljs_analyzer_macroexpand_1 = (function com$rpl$specter$impl$cljs_analyzer_macroexpand_1(){
return cljs.analyzer.macroexpand_1;
});
com.rpl.specter.impl.clj_macroexpand_all = (function com$rpl$specter$impl$clj_macroexpand_all(form){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["not implemented"], 0));
});
com.rpl.specter.impl.intern_STAR_ = (function com$rpl$specter$impl$intern_STAR_(ns,name,val){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["intern not supported in ClojureScript"], 0));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__4626__auto__ = cljs.core.system_time();
var ret__4627__auto__ = (function (){var n__4613__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__4613__auto__)){
(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null));

var G__52094 = (_ + (1));
_ = G__52094;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Elapsed time: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.system_time() - start__4626__auto__).toFixed((6)))," msecs"].join('')], 0));

return ret__4627__auto__;
});
com.rpl.specter.impl.exec_select_STAR_ = (function com$rpl$specter$impl$exec_select_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4(null,vals,structure,next_fn);
});
com.rpl.specter.impl.exec_transform_STAR_ = (function com$rpl$specter$impl$exec_transform_STAR_(this$,vals,structure,next_fn){
return this$.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4(null,vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

var com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_52108 = (function (paths){
var x__4428__auto__ = (((paths == null))?null:paths);
var m__4429__auto__ = (com.rpl.specter.impl.do_comp_paths[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4429__auto__.call(null,paths));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.do_comp_paths["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(paths) : m__4426__auto__.call(null,paths));
} else {
throw cljs.core.missing_protocol("PathComposer.do-comp-paths",paths);
}
}
});
com.rpl.specter.impl.do_comp_paths = (function com$rpl$specter$impl$do_comp_paths(paths){
if((((!((paths == null)))) && ((!((paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 == null)))))){
return paths.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1(paths);
} else {
return com$rpl$specter$impl$PathComposer$do_comp_paths$dyn_52108(paths);
}
});

com.rpl.specter.impl.rich_nav_QMARK_ = (function com$rpl$specter$impl$rich_nav_QMARK_(n){
if((!((n == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === n.com$rpl$specter$protocols$RichNavigator$)))){
return true;
} else {
if((!n.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,n);
}
});
com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(p){
if(com.rpl.specter.impl.rich_nav_QMARK_(p)){
return p;
} else {
return com.rpl.specter.impl.do_comp_paths(p);
}
});
com.rpl.specter.impl.coerce_object = (function com$rpl$specter$impl$coerce_object(this$){
if(com.rpl.specter.impl.rich_nav_QMARK_(this$)){
return this$;
} else {
if((((!((this$ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.com$rpl$specter$protocols$ImplicitNav$))))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.ImplicitNav,this$))){
return com.rpl.specter.protocols.implicit_nav(this$);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Not a navigator: ",this$," ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(this$)], 0))], 0));

}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

var com$rpl$specter$impl$CoercePath$coerce_path$dyn_52110 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.coerce_path["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("CoercePath.coerce-path",this$);
}
}
});
com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
return com$rpl$specter$impl$CoercePath$coerce_path$dyn_52110(this$);
}
});

goog.object.set(com.rpl.specter.impl.CoercePath,"null",true);

goog.object.set(com.rpl.specter.impl.coerce_path,"null",(function (this$){
return com.rpl.specter.impl.coerce_object(this$);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.do_comp_paths(this$__$1);
}));

(cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.vec(this$__$1));
}));

(cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,this$__$1));
}));

goog.object.set(com.rpl.specter.impl.CoercePath,"_",true);

goog.object.set(com.rpl.specter.impl.coerce_path,"_",(function (this$){
return com.rpl.specter.impl.coerce_object(this$);
}));
com.rpl.specter.impl.STAY_STAR_ = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49132 = (function (meta49133){
this.meta49133 = meta49133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49134,meta49133__$1){
var self__ = this;
var _49134__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49132(meta49133__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49134){
var self__ = this;
var _49134__$1 = this;
return self__.meta49133;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49132.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl49132.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49132.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49132.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta49133","meta49133",-951082773,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49132.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49132.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49132");

(com.rpl.specter.impl.t_com$rpl$specter$impl49132.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49132");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49132.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49132 = (function com$rpl$specter$impl$__GT_t_com$rpl$specter$impl49132(meta49133){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49132(meta49133));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49132(cljs.core.PersistentArrayMap.EMPTY));
})()
;
com.rpl.specter.impl.combine_two_navs = (function com$rpl$specter$impl$combine_two_navs(nav1,nav2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49144 = (function (nav1,nav2,meta49145){
this.nav1 = nav1;
this.nav2 = nav2;
this.meta49145 = meta49145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49146,meta49145__$1){
var self__ = this;
var _49146__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49144(self__.nav1,self__.nav2,meta49145__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49146){
var self__ = this;
var _49146__$1 = this;
return self__.meta49145;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49144.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl49144.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_select_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49144.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav1,vals,structure,(function (vals_next,structure_next){
return com.rpl.specter.impl.exec_transform_STAR_(self__.nav2,vals_next,structure_next,next_fn);
}));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nav1","nav1",-228471230,null),new cljs.core.Symbol(null,"nav2","nav2",2108276356,null),new cljs.core.Symbol(null,"meta49145","meta49145",-81531178,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49144.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49144.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49144");

(com.rpl.specter.impl.t_com$rpl$specter$impl49144.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49144");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49144.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49144 = (function com$rpl$specter$impl$combine_two_navs_$___GT_t_com$rpl$specter$impl49144(nav1__$1,nav2__$1,meta49145){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49144(nav1__$1,nav2__$1,meta49145));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49144(nav1,nav2,cljs.core.PersistentArrayMap.EMPTY));
});
goog.object.set(com.rpl.specter.impl.PathComposer,"null",true);

goog.object.set(com.rpl.specter.impl.do_comp_paths,"null",(function (o){
return com.rpl.specter.impl.coerce_path(o);
}));

goog.object.set(com.rpl.specter.impl.PathComposer,"_",true);

goog.object.set(com.rpl.specter.impl.do_comp_paths,"_",(function (o){
return com.rpl.specter.impl.coerce_path(o);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$do_comp_paths$arity$1 = (function (navigators){
var navigators__$1 = this;
var coerced = cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.coerce_path,navigators__$1);
if(cljs.core.empty_QMARK_(coerced)){
return com.rpl.specter.impl.STAY_STAR_;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(coerced))){
return cljs.core.first(coerced);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.combine_two_navs,coerced);

}
}
}));

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

var com$rpl$specter$impl$PMutableCell$set_cell$dyn_52152 = (function (cell,x){
var x__4428__auto__ = (((cell == null))?null:cell);
var m__4429__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4429__auto__.call(null,cell,x));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.set_cell["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(cell,x) : m__4426__auto__.call(null,cell,x));
} else {
throw cljs.core.missing_protocol("PMutableCell.set_cell",cell);
}
}
});
com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((((!((cell == null)))) && ((!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
return com$rpl$specter$impl$PMutableCell$set_cell$dyn_52152(cell,x);
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
});
(com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return (self__.q = x);
}));

(com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
}));

(com.rpl.specter.impl.MutableCell.cljs$lang$type = true);

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell");

(com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/MutableCell");
}));

/**
 * Positional factory function for com.rpl.specter.impl/MutableCell.
 */
com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var G__49209 = arguments.length;
switch (G__49209) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
}));

(com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
}));

(com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1);

com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell(cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = (function (){var G__49227 = com.rpl.specter.impl.get_cell(cell);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__49227) : afn.call(null,G__49227));
})();
com.rpl.specter.impl.set_cell_BANG_(cell,ret);

return ret;
});
com.rpl.specter.impl.compiled_traverse_with_vals_STAR_ = (function com$rpl$specter$impl$compiled_traverse_with_vals_STAR_(path,result_fn,vals,structure){
return com.rpl.specter.impl.exec_select_STAR_(path,vals,structure,(function (vals__$1,structure__$1){
if((vals__$1 === cljs.core.PersistentVector.EMPTY)){
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : result_fn.call(null,structure__$1));
} else {
var G__49245 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__$1,structure__$1);
return (result_fn.cljs$core$IFn$_invoke$arity$1 ? result_fn.cljs$core$IFn$_invoke$arity$1(G__49245) : result_fn.call(null,G__49245));
}
}));
});
com.rpl.specter.impl.compiled_traverse_STAR_ = (function com$rpl$specter$impl$compiled_traverse_STAR_(path,result_fn,structure){
return com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,result_fn,cljs.core.PersistentVector.EMPTY,structure);
});
com.rpl.specter.impl.do_compiled_traverse_STAR_ = (function com$rpl$specter$impl$do_compiled_traverse_STAR_(apath,structure){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49260 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49260 = (function (apath,structure,meta49261){
this.apath = apath;
this.structure = structure;
this.meta49261 = meta49261;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49262,meta49261__$1){
var self__ = this;
var _49262__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49260(self__.apath,self__.structure,meta49261__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49262){
var self__ = this;
var _49262__$1 = this;
return self__.meta49261;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49260.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49260.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(start);
com.rpl.specter.impl.compiled_traverse_STAR_(self__.apath,(function (elem){
var curr = com.rpl.specter.impl.get_cell(cell);
var newv = (afn.cljs$core$IFn$_invoke$arity$2 ? afn.cljs$core$IFn$_invoke$arity$2(curr,elem) : afn.call(null,curr,elem));
com.rpl.specter.impl.set_cell_BANG_(cell,newv);

return newv;
}),self__.structure);

return com.rpl.specter.impl.get_cell(cell);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49260.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"meta49261","meta49261",-1945599588,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49260.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49260.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49260");

(com.rpl.specter.impl.t_com$rpl$specter$impl49260.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49260");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49260.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49260 = (function com$rpl$specter$impl$do_compiled_traverse_STAR__$___GT_t_com$rpl$specter$impl49260(apath__$1,structure__$1,meta49261){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49260(apath__$1,structure__$1,meta49261));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49260(apath,structure,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.call_reduce_interface = (function com$rpl$specter$impl$call_reduce_interface(traverser,afn,start){
return traverser.cljs$core$IReduce$_reduce$arity$3(null,afn,start);
});
com.rpl.specter.impl.do_compiled_traverse = (function com$rpl$specter$impl$do_compiled_traverse(apath,structure){
var traverser = com.rpl.specter.impl.do_compiled_traverse_STAR_(apath,structure);
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49289 = (function (apath,structure,traverser,meta49290){
this.apath = apath;
this.structure = structure;
this.traverser = traverser;
this.meta49290 = meta49290;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49291,meta49290__$1){
var self__ = this;
var _49291__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49289(self__.apath,self__.structure,self__.traverser,meta49290__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49291){
var self__ = this;
var _49291__$1 = this;
return self__.meta49290;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49289.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,afn){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReduce$_reduce$arity$3(null,afn,(afn.cljs$core$IFn$_invoke$arity$0 ? afn.cljs$core$IFn$_invoke$arity$0() : afn.call(null)));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49289.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,afn,start){
var self__ = this;
var this$__$1 = this;
var res = com.rpl.specter.impl.call_reduce_interface(self__.traverser,afn,start);
return cljs.core.unreduced(res);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"apath","apath",567854908,null),new cljs.core.Symbol(null,"structure","structure",-1090603686,null),new cljs.core.Symbol(null,"traverser","traverser",1631431381,null),new cljs.core.Symbol(null,"meta49290","meta49290",-1543439801,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49289.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49289.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49289");

(com.rpl.specter.impl.t_com$rpl$specter$impl49289.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49289");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49289.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49289 = (function com$rpl$specter$impl$do_compiled_traverse_$___GT_t_com$rpl$specter$impl49289(apath__$1,structure__$1,traverser__$1,meta49290){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49289(apath__$1,structure__$1,traverser__$1,meta49290));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49289(apath,structure,traverser,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.compiled_traverse_all_STAR_ = (function com$rpl$specter$impl$compiled_traverse_all_STAR_(path){
return (function (xf){
return (function() {
var G__52188 = null;
var G__52188__0 = (function (){
return (xf.cljs$core$IFn$_invoke$arity$0 ? xf.cljs$core$IFn$_invoke$arity$0() : xf.call(null));
});
var G__52188__1 = (function (result){
return (xf.cljs$core$IFn$_invoke$arity$1 ? xf.cljs$core$IFn$_invoke$arity$1(result) : xf.call(null,result));
});
var G__52188__2 = (function (result,input){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,i){
return (xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(r,i) : xf.call(null,r,i));
}),result,com.rpl.specter.impl.do_compiled_traverse_STAR_(path,input));
});
G__52188 = function(result,input){
switch(arguments.length){
case 0:
return G__52188__0.call(this);
case 1:
return G__52188__1.call(this,result);
case 2:
return G__52188__2.call(this,result,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__52188.cljs$core$IFn$_invoke$arity$0 = G__52188__0;
G__52188.cljs$core$IFn$_invoke$arity$1 = G__52188__1;
G__52188.cljs$core$IFn$_invoke$arity$2 = G__52188__2;
return G__52188;
})()
});
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
return com.rpl.specter.impl.set_cell_BANG_(res,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(curr,structure__$1));
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

return cljs.core.persistent_BANG_(com.rpl.specter.impl.get_cell(res));
});
com.rpl.specter.impl.compiled_select_one_STAR_ = (function com$rpl$specter$impl$compiled_select_one_STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_select_one_BANG__STAR_ = (function com$rpl$specter$impl$compiled_select_one_BANG__STAR_(path,structure){
var res = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var result_fn = (function (structure__$1){
var curr = com.rpl.specter.impl.get_cell(res);
if((curr === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.set_cell_BANG_(res,structure__$1);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["More than one element found in structure: ",structure__$1], 0));
}
});
com.rpl.specter.impl.compiled_traverse_STAR_(path,result_fn,structure);

var ret = com.rpl.specter.impl.get_cell(res);
if((com.rpl.specter.impl.NONE === ret)){
com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Found no elements for select-one! on ",structure], 0));
} else {
}

return ret;
});
com.rpl.specter.impl.compiled_select_any_STAR_ = (function com$rpl$specter$impl$compiled_select_any_STAR_(var_args){
var G__49334 = arguments.length;
switch (G__49334) {
case 2:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (path,structure){
return com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(path,cljs.core.PersistentVector.EMPTY,structure);
}));

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (path,vals,structure){
return cljs.core.unreduced(com.rpl.specter.impl.compiled_traverse_with_vals_STAR_(path,cljs.core.reduced,vals,structure));
}));

(com.rpl.specter.impl.compiled_select_any_STAR_.cljs$lang$maxFixedArity = 3);

com.rpl.specter.impl.compiled_select_first_STAR_ = (function com$rpl$specter$impl$compiled_select_first_STAR_(path,structure){
var ret = com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure);
if((ret === com.rpl.specter.impl.NONE)){
return null;
} else {
return ret;
}
});
com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_ = (function com$rpl$specter$impl$compiled_selected_any_QMARK__STAR_(path,structure){
return (!((com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$2(path,structure))));
});
com.rpl.specter.impl.terminal_STAR_ = (function com$rpl$specter$impl$terminal_STAR_(afn,vals,structure){
if((vals === cljs.core.PersistentVector.EMPTY)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals,structure));
}
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,(function (vals,structure__$1){
return com.rpl.specter.impl.terminal_STAR_(transform_fn,vals,structure__$1);
}));
});
com.rpl.specter.impl.compiled_vtransform_STAR_ = (function com$rpl$specter$impl$compiled_vtransform_STAR_(nav,transform_fn,structure){
return com.rpl.specter.impl.exec_transform_STAR_(nav,cljs.core.PersistentVector.EMPTY,structure,transform_fn);
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return (((f instanceof cljs.core.LazySeq)) || (cljs.core.list_QMARK_(f)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalSym = (function (val,sym,__meta,__extmap,__hash){
this.val = val;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49350,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49359 = k49350;
var G__49359__$1 = (((G__49359 instanceof cljs.core.Keyword))?G__49359.fqn:null);
switch (G__49359__$1) {
case "val":
return self__.val;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49350,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49363){
var vec__49364 = p__49363;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49364,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49364,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LocalSym{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49349){
var self__ = this;
var G__49349__$1 = this;
return (new cljs.core.RecordIter((0),G__49349__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1023826277 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49351,other49352){
var self__ = this;
var this49351__$1 = this;
return (((!((other49352 == null)))) && ((this49351__$1.constructor === other49352.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49351__$1.val,other49352.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49351__$1.sym,other49352.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49351__$1.__extmap,other49352.__extmap)));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49349){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49374 = cljs.core.keyword_identical_QMARK_;
var expr__49375 = k__4388__auto__;
if(cljs.core.truth_((pred__49374.cljs$core$IFn$_invoke$arity$2 ? pred__49374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__49375) : pred__49374.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__49375)))){
return (new com.rpl.specter.impl.LocalSym(G__49349,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49374.cljs$core$IFn$_invoke$arity$2 ? pred__49374.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__49375) : pred__49374.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__49375)))){
return (new com.rpl.specter.impl.LocalSym(self__.val,G__49349,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49349),null));
}
}
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49349){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LocalSym(self__.val,self__.sym,G__49349,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalSym.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LocalSym.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$type = true);

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalSym",null,(1),null));
}));

(com.rpl.specter.impl.LocalSym.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LocalSym");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LocalSym.
 */
com.rpl.specter.impl.__GT_LocalSym = (function com$rpl$specter$impl$__GT_LocalSym(val,sym){
return (new com.rpl.specter.impl.LocalSym(val,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalSym, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalSym = (function com$rpl$specter$impl$map__GT_LocalSym(G__49353){
var extmap__4419__auto__ = (function (){var G__49392 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49353,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__49353)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49392);
} else {
return G__49392;
}
})();
return (new com.rpl.specter.impl.LocalSym(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__49353),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__49353),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.VarUse = (function (val,avar,sym,__meta,__extmap,__hash){
this.val = val;
this.avar = avar;
this.sym = sym;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49394,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49411 = k49394;
var G__49411__$1 = (((G__49411 instanceof cljs.core.Keyword))?G__49411.fqn:null);
switch (G__49411__$1) {
case "val":
return self__.val;

break;
case "avar":
return self__.avar;

break;
case "sym":
return self__.sym;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49394,else__4383__auto__);

}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49416){
var vec__49417 = p__49416;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49417,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49417,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.VarUse{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49393){
var self__ = this;
var G__49393__$1 = this;
return (new cljs.core.RecordIter((0),G__49393__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1211237282 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49396,other49397){
var self__ = this;
var this49396__$1 = this;
return (((!((other49397 == null)))) && ((this49396__$1.constructor === other49397.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49396__$1.val,other49397.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49396__$1.avar,other49397.avar)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49396__$1.sym,other49397.sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49396__$1.__extmap,other49397.__extmap)));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"avar","avar",1316861611),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49393){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49436 = cljs.core.keyword_identical_QMARK_;
var expr__49437 = k__4388__auto__;
if(cljs.core.truth_((pred__49436.cljs$core$IFn$_invoke$arity$2 ? pred__49436.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__49437) : pred__49436.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__49437)))){
return (new com.rpl.specter.impl.VarUse(G__49393,self__.avar,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49436.cljs$core$IFn$_invoke$arity$2 ? pred__49436.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"avar","avar",1316861611),expr__49437) : pred__49436.call(null,new cljs.core.Keyword(null,"avar","avar",1316861611),expr__49437)))){
return (new com.rpl.specter.impl.VarUse(self__.val,G__49393,self__.sym,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49436.cljs$core$IFn$_invoke$arity$2 ? pred__49436.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__49437) : pred__49436.call(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),expr__49437)))){
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,G__49393,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49393),null));
}
}
}
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"avar","avar",1316861611),self__.avar,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sym","sym",-1444860305),self__.sym,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49393){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.VarUse(self__.val,self__.avar,self__.sym,G__49393,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.VarUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.VarUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"avar","avar",-1337574158,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)], null);
}));

(com.rpl.specter.impl.VarUse.cljs$lang$type = true);

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/VarUse",null,(1),null));
}));

(com.rpl.specter.impl.VarUse.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/VarUse");
}));

/**
 * Positional factory function for com.rpl.specter.impl/VarUse.
 */
com.rpl.specter.impl.__GT_VarUse = (function com$rpl$specter$impl$__GT_VarUse(val,avar,sym){
return (new com.rpl.specter.impl.VarUse(val,avar,sym,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/VarUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_VarUse = (function com$rpl$specter$impl$map__GT_VarUse(G__49400){
var extmap__4419__auto__ = (function (){var G__49446 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49400,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"avar","avar",1316861611),new cljs.core.Keyword(null,"sym","sym",-1444860305)], 0));
if(cljs.core.record_QMARK_(G__49400)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49446);
} else {
return G__49446;
}
})();
return (new com.rpl.specter.impl.VarUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__49400),new cljs.core.Keyword(null,"avar","avar",1316861611).cljs$core$IFn$_invoke$arity$1(G__49400),new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(G__49400),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.SpecialFormUse = (function (val,code,__meta,__extmap,__hash){
this.val = val;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49449,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49455 = k49449;
var G__49455__$1 = (((G__49455 instanceof cljs.core.Keyword))?G__49455.fqn:null);
switch (G__49455__$1) {
case "val":
return self__.val;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49449,else__4383__auto__);

}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49457){
var vec__49458 = p__49457;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49458,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49458,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.SpecialFormUse{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49448){
var self__ = this;
var G__49448__$1 = this;
return (new cljs.core.RecordIter((0),G__49448__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1595666739 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49450,other49451){
var self__ = this;
var this49450__$1 = this;
return (((!((other49451 == null)))) && ((this49450__$1.constructor === other49451.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49450__$1.val,other49451.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49450__$1.code,other49451.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49450__$1.__extmap,other49451.__extmap)));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49448){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49470 = cljs.core.keyword_identical_QMARK_;
var expr__49471 = k__4388__auto__;
if(cljs.core.truth_((pred__49470.cljs$core$IFn$_invoke$arity$2 ? pred__49470.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__49471) : pred__49470.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__49471)))){
return (new com.rpl.specter.impl.SpecialFormUse(G__49448,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49470.cljs$core$IFn$_invoke$arity$2 ? pred__49470.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__49471) : pred__49470.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__49471)))){
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,G__49448,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49448),null));
}
}
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49448){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.SpecialFormUse(self__.val,self__.code,G__49448,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.SpecialFormUse.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.SpecialFormUse.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$type = true);

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/SpecialFormUse",null,(1),null));
}));

(com.rpl.specter.impl.SpecialFormUse.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/SpecialFormUse");
}));

/**
 * Positional factory function for com.rpl.specter.impl/SpecialFormUse.
 */
com.rpl.specter.impl.__GT_SpecialFormUse = (function com$rpl$specter$impl$__GT_SpecialFormUse(val,code){
return (new com.rpl.specter.impl.SpecialFormUse(val,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/SpecialFormUse, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_SpecialFormUse = (function com$rpl$specter$impl$map__GT_SpecialFormUse(G__49453){
var extmap__4419__auto__ = (function (){var G__49486 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49453,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__49453)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49486);
} else {
return G__49486;
}
})();
return (new com.rpl.specter.impl.SpecialFormUse(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__49453),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__49453),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.FnInvocation = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49506,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49539 = k49506;
var G__49539__$1 = (((G__49539 instanceof cljs.core.Keyword))?G__49539.fqn:null);
switch (G__49539__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49506,else__4383__auto__);

}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49542){
var vec__49543 = p__49542;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49543,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49543,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.FnInvocation{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49505){
var self__ = this;
var G__49505__$1 = this;
return (new cljs.core.RecordIter((0),G__49505__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-350872877 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49507,other49508){
var self__ = this;
var this49507__$1 = this;
return (((!((other49508 == null)))) && ((this49507__$1.constructor === other49508.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49507__$1.op,other49508.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49507__$1.params,other49508.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49507__$1.code,other49508.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49507__$1.__extmap,other49508.__extmap)));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49505){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49585 = cljs.core.keyword_identical_QMARK_;
var expr__49586 = k__4388__auto__;
if(cljs.core.truth_((pred__49585.cljs$core$IFn$_invoke$arity$2 ? pred__49585.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955),expr__49586) : pred__49585.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__49586)))){
return (new com.rpl.specter.impl.FnInvocation(G__49505,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49585.cljs$core$IFn$_invoke$arity$2 ? pred__49585.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__49586) : pred__49585.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__49586)))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,G__49505,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49585.cljs$core$IFn$_invoke$arity$2 ? pred__49585.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__49586) : pred__49585.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__49586)))){
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,G__49505,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49505),null));
}
}
}
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49505){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.FnInvocation(self__.op,self__.params,self__.code,G__49505,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.FnInvocation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.FnInvocation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$type = true);

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/FnInvocation",null,(1),null));
}));

(com.rpl.specter.impl.FnInvocation.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/FnInvocation");
}));

/**
 * Positional factory function for com.rpl.specter.impl/FnInvocation.
 */
com.rpl.specter.impl.__GT_FnInvocation = (function com$rpl$specter$impl$__GT_FnInvocation(op,params,code){
return (new com.rpl.specter.impl.FnInvocation(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/FnInvocation, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_FnInvocation = (function com$rpl$specter$impl$map__GT_FnInvocation(G__49519){
var extmap__4419__auto__ = (function (){var G__49595 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49519,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__49519)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49595);
} else {
return G__49595;
}
})();
return (new com.rpl.specter.impl.FnInvocation(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__49519),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__49519),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__49519),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicVal = (function (code,__meta,__extmap,__hash){
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49598,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49602 = k49598;
var G__49602__$1 = (((G__49602 instanceof cljs.core.Keyword))?G__49602.fqn:null);
switch (G__49602__$1) {
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49598,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49604){
var vec__49605 = p__49604;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49605,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49605,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicVal{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49597){
var self__ = this;
var G__49597__$1 = this;
return (new cljs.core.RecordIter((0),G__49597__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (531988365 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49599,other49600){
var self__ = this;
var this49599__$1 = this;
return (((!((other49600 == null)))) && ((this49599__$1.constructor === other49600.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49599__$1.code,other49600.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49599__$1.__extmap,other49600.__extmap)));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49597){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49618 = cljs.core.keyword_identical_QMARK_;
var expr__49619 = k__4388__auto__;
if(cljs.core.truth_((pred__49618.cljs$core$IFn$_invoke$arity$2 ? pred__49618.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__49619) : pred__49618.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__49619)))){
return (new com.rpl.specter.impl.DynamicVal(G__49597,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicVal(self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49597),null));
}
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49597){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicVal(self__.code,G__49597,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicVal.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicVal.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicVal",null,(1),null));
}));

(com.rpl.specter.impl.DynamicVal.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicVal");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicVal.
 */
com.rpl.specter.impl.__GT_DynamicVal = (function com$rpl$specter$impl$__GT_DynamicVal(code){
return (new com.rpl.specter.impl.DynamicVal(code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicVal, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicVal = (function com$rpl$specter$impl$map__GT_DynamicVal(G__49601){
var extmap__4419__auto__ = (function (){var G__49627 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49601,new cljs.core.Keyword(null,"code","code",1586293142));
if(cljs.core.record_QMARK_(G__49601)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49627);
} else {
return G__49627;
}
})();
return (new com.rpl.specter.impl.DynamicVal(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__49601),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicPath = (function (path,__meta,__extmap,__hash){
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49629,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49637 = k49629;
var G__49637__$1 = (((G__49637 instanceof cljs.core.Keyword))?G__49637.fqn:null);
switch (G__49637__$1) {
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49629,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49638){
var vec__49639 = p__49638;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49639,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49639,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicPath{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49628){
var self__ = this;
var G__49628__$1 = this;
return (new cljs.core.RecordIter((0),G__49628__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (297748926 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49630,other49631){
var self__ = this;
var this49630__$1 = this;
return (((!((other49631 == null)))) && ((this49630__$1.constructor === other49631.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49630__$1.path,other49631.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49630__$1.__extmap,other49631.__extmap)));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49628){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49651 = cljs.core.keyword_identical_QMARK_;
var expr__49652 = k__4388__auto__;
if(cljs.core.truth_((pred__49651.cljs$core$IFn$_invoke$arity$2 ? pred__49651.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__49652) : pred__49651.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__49652)))){
return (new com.rpl.specter.impl.DynamicPath(G__49628,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicPath(self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49628),null));
}
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49628){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicPath(self__.path,G__49628,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicPath",null,(1),null));
}));

(com.rpl.specter.impl.DynamicPath.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicPath");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicPath.
 */
com.rpl.specter.impl.__GT_DynamicPath = (function com$rpl$specter$impl$__GT_DynamicPath(path){
return (new com.rpl.specter.impl.DynamicPath(path,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicPath, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicPath = (function com$rpl$specter$impl$map__GT_DynamicPath(G__49634){
var extmap__4419__auto__ = (function (){var G__49654 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__49634,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_(G__49634)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49654);
} else {
return G__49654;
}
})();
return (new com.rpl.specter.impl.DynamicPath(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__49634),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.DynamicFunction = (function (op,params,code,__meta,__extmap,__hash){
this.op = op;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49659,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49668 = k49659;
var G__49668__$1 = (((G__49668 instanceof cljs.core.Keyword))?G__49668.fqn:null);
switch (G__49668__$1) {
case "op":
return self__.op;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49659,else__4383__auto__);

}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49676){
var vec__49677 = p__49676;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49677,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49677,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.DynamicFunction{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"op","op",-1882987955),self__.op],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49658){
var self__ = this;
var G__49658__$1 = this;
return (new cljs.core.RecordIter((0),G__49658__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1045900877 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49660,other49661){
var self__ = this;
var this49660__$1 = this;
return (((!((other49661 == null)))) && ((this49660__$1.constructor === other49661.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49660__$1.op,other49661.op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49660__$1.params,other49661.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49660__$1.code,other49661.code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49660__$1.__extmap,other49661.__extmap)));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"op","op",-1882987955),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49658){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49711 = cljs.core.keyword_identical_QMARK_;
var expr__49712 = k__4388__auto__;
if(cljs.core.truth_((pred__49711.cljs$core$IFn$_invoke$arity$2 ? pred__49711.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955),expr__49712) : pred__49711.call(null,new cljs.core.Keyword(null,"op","op",-1882987955),expr__49712)))){
return (new com.rpl.specter.impl.DynamicFunction(G__49658,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49711.cljs$core$IFn$_invoke$arity$2 ? pred__49711.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__49712) : pred__49711.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__49712)))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,G__49658,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49711.cljs$core$IFn$_invoke$arity$2 ? pred__49711.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"code","code",1586293142),expr__49712) : pred__49711.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__49712)))){
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,G__49658,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49658),null));
}
}
}
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"op","op",-1882987955),self__.op,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"code","code",1586293142),self__.code,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49658){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.DynamicFunction(self__.op,self__.params,self__.code,G__49658,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.DynamicFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.DynamicFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"op","op",-242456428,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$type = true);

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/DynamicFunction",null,(1),null));
}));

(com.rpl.specter.impl.DynamicFunction.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/DynamicFunction");
}));

/**
 * Positional factory function for com.rpl.specter.impl/DynamicFunction.
 */
com.rpl.specter.impl.__GT_DynamicFunction = (function com$rpl$specter$impl$__GT_DynamicFunction(op,params,code){
return (new com.rpl.specter.impl.DynamicFunction(op,params,code,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/DynamicFunction, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_DynamicFunction = (function com$rpl$specter$impl$map__GT_DynamicFunction(G__49662){
var extmap__4419__auto__ = (function (){var G__49739 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49662,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], 0));
if(cljs.core.record_QMARK_(G__49662)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49739);
} else {
return G__49739;
}
})();
return (new com.rpl.specter.impl.DynamicFunction(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(G__49662),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__49662),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__49662),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

com.rpl.specter.impl.dynamic_param_QMARK_ = (function com$rpl$specter$impl$dynamic_param_QMARK_(o){
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([com.rpl.specter.impl.DynamicPath,com.rpl.specter.impl.DynamicFunction,com.rpl.specter.impl.DynamicVal]),cljs.core.type(o));
});
com.rpl.specter.impl.static_path_QMARK_ = (function com$rpl$specter$impl$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.impl.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.impl.late_path = (function com$rpl$specter$impl$late_path(path){
if(com.rpl.specter.impl.static_path_QMARK_(path)){
return com.rpl.specter.impl.comp_paths_STAR_(path);
} else {
return com.rpl.specter.impl.__GT_DynamicPath(path);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CachedPathInfo = (function (dynamic_QMARK_,precompiled,__meta,__extmap,__hash){
this.dynamic_QMARK_ = dynamic_QMARK_;
this.precompiled = precompiled;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k49755,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__49766 = k49755;
var G__49766__$1 = (((G__49766 instanceof cljs.core.Keyword))?G__49766.fqn:null);
switch (G__49766__$1) {
case "dynamic?":
return self__.dynamic_QMARK_;

break;
case "precompiled":
return self__.precompiled;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49755,else__4383__auto__);

}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__49771){
var vec__49772 = p__49771;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49772,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49772,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.CachedPathInfo{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49754){
var self__ = this;
var G__49754__$1 = this;
return (new cljs.core.RecordIter((0),G__49754__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (626511117 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49756,other49757){
var self__ = this;
var this49756__$1 = this;
return (((!((other49757 == null)))) && ((this49756__$1.constructor === other49757.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49756__$1.dynamic_QMARK_,other49757.dynamic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49756__$1.precompiled,other49757.precompiled)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49756__$1.__extmap,other49757.__extmap)));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__49754){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__49796 = cljs.core.keyword_identical_QMARK_;
var expr__49797 = k__4388__auto__;
if(cljs.core.truth_((pred__49796.cljs$core$IFn$_invoke$arity$2 ? pred__49796.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__49797) : pred__49796.call(null,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),expr__49797)))){
return (new com.rpl.specter.impl.CachedPathInfo(G__49754,self__.precompiled,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49796.cljs$core$IFn$_invoke$arity$2 ? pred__49796.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__49797) : pred__49796.call(null,new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),expr__49797)))){
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,G__49754,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__49754),null));
}
}
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),self__.dynamic_QMARK_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609),self__.precompiled,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__49754){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.CachedPathInfo(self__.dynamic_QMARK_,self__.precompiled,G__49754,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.CachedPathInfo.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.CachedPathInfo.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dynamic?","dynamic?",-1973843346,null),new cljs.core.Symbol(null,"precompiled","precompiled",-42622082,null)], null);
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$type = true);

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/CachedPathInfo",null,(1),null));
}));

(com.rpl.specter.impl.CachedPathInfo.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/CachedPathInfo");
}));

/**
 * Positional factory function for com.rpl.specter.impl/CachedPathInfo.
 */
com.rpl.specter.impl.__GT_CachedPathInfo = (function com$rpl$specter$impl$__GT_CachedPathInfo(dynamic_QMARK_,precompiled){
return (new com.rpl.specter.impl.CachedPathInfo(dynamic_QMARK_,precompiled,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/CachedPathInfo, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_CachedPathInfo = (function com$rpl$specter$impl$map__GT_CachedPathInfo(G__49759){
var extmap__4419__auto__ = (function (){var G__49808 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49759,new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609)], 0));
if(cljs.core.record_QMARK_(G__49759)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49808);
} else {
return G__49808;
}
})();
return (new com.rpl.specter.impl.CachedPathInfo(new cljs.core.Keyword(null,"dynamic?","dynamic?",680592423).cljs$core$IFn$_invoke$arity$1(G__49759),new cljs.core.Keyword(null,"precompiled","precompiled",-1683153609).cljs$core$IFn$_invoke$arity$1(G__49759),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

com.rpl.specter.impl.cached_path_info_precompiled = (function com$rpl$specter$impl$cached_path_info_precompiled(c){
return c.precompiled;
});
com.rpl.specter.impl.cached_path_info_dynamic_QMARK_ = (function com$rpl$specter$impl$cached_path_info_dynamic_QMARK_(c){
return c.dynamic_QMARK_;
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,vals,structure,next_fn){
if(cljs.core.truth_((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
});
com.rpl.specter.impl.pred_STAR_ = (function com$rpl$specter$impl$pred_STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49821 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49821 = (function (afn,meta49822){
this.afn = afn;
this.meta49822 = meta49822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49823,meta49822__$1){
var self__ = this;
var _49823__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49821(self__.afn,meta49822__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49823){
var self__ = this;
var _49823__$1 = this;
return self__.meta49822;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49821.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl49821.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49821.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49821.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta49822","meta49822",-937764657,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49821.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49821.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49821");

(com.rpl.specter.impl.t_com$rpl$specter$impl49821.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49821");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49821.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49821 = (function com$rpl$specter$impl$pred_STAR__$___GT_t_com$rpl$specter$impl49821(afn__$1,meta49822){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49821(afn__$1,meta49822));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49821(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.collected_QMARK__STAR_ = (function com$rpl$specter$impl$collected_QMARK__STAR_(afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49842 = (function (afn,meta49843){
this.afn = afn;
this.meta49843 = meta49843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49844,meta49843__$1){
var self__ = this;
var _49844__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49842(self__.afn,meta49843__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49844){
var self__ = this;
var _49844__$1 = this;
return self__.meta49843;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49842.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl49842.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49842.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(vals) : self__.afn.call(null,vals)))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure) : next_fn.call(null,vals,structure));
} else {
return structure;
}
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta49843","meta49843",1911132216,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49842.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49842.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49842");

(com.rpl.specter.impl.t_com$rpl$specter$impl49842.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49842");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49842.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49842 = (function com$rpl$specter$impl$collected_QMARK__STAR__$___GT_t_com$rpl$specter$impl49842(afn__$1,meta49843){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49842(afn__$1,meta49843));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49842(afn,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.cell_nav = (function com$rpl$specter$impl$cell_nav(cell){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.impl !== 'undefined') && (typeof com.rpl.specter.impl.t_com$rpl$specter$impl49866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.impl.t_com$rpl$specter$impl49866 = (function (cell,meta49867){
this.cell = cell;
this.meta49867 = meta49867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.impl.t_com$rpl$specter$impl49866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49868,meta49867__$1){
var self__ = this;
var _49868__$1 = this;
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49866(self__.cell,meta49867__$1));
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49868){
var self__ = this;
var _49868__$1 = this;
return self__.meta49867;
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49866.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.t_com$rpl$specter$impl49866.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_select_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49866.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.exec_transform_STAR_(com.rpl.specter.impl.get_cell(self__.cell),vals,structure,next_fn);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49866.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"meta49867","meta49867",-1673530407,null)], null);
}));

(com.rpl.specter.impl.t_com$rpl$specter$impl49866.cljs$lang$type = true);

(com.rpl.specter.impl.t_com$rpl$specter$impl49866.cljs$lang$ctorStr = "com.rpl.specter.impl/t_com$rpl$specter$impl49866");

(com.rpl.specter.impl.t_com$rpl$specter$impl49866.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.impl/t_com$rpl$specter$impl49866");
}));

/**
 * Positional factory function for com.rpl.specter.impl/t_com$rpl$specter$impl49866.
 */
com.rpl.specter.impl.__GT_t_com$rpl$specter$impl49866 = (function com$rpl$specter$impl$cell_nav_$___GT_t_com$rpl$specter$impl49866(cell__$1,meta49867){
return (new com.rpl.specter.impl.t_com$rpl$specter$impl49866(cell__$1,meta49867));
});

}

return (new com.rpl.specter.impl.t_com$rpl$specter$impl49866(cell,cljs.core.PersistentArrayMap.EMPTY));
});
com.rpl.specter.impl.local_declarepath = (function com$rpl$specter$impl$local_declarepath(){
var cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.impl.cell_nav(cell),cljs.core.assoc,new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671),cell);
});
com.rpl.specter.impl.providepath_STAR_ = (function com$rpl$specter$impl$providepath_STAR_(declared,compiled_path){
var cell = new cljs.core.Keyword("com.rpl.specter.impl","cell","com.rpl.specter.impl/cell",223913671).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(declared));
return com.rpl.specter.impl.set_cell_BANG_(cell,compiled_path);
});
com.rpl.specter.impl.gensyms = (function com$rpl$specter$impl$gensyms(amt){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(amt,cljs.core.gensym));
});
com.rpl.specter.impl.comp_navs = (function com$rpl$specter$impl$comp_navs(var_args){
var G__50143 = arguments.length;
switch (G__50143) {
case 0:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 8:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
case 13:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case 14:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case 15:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]));

break;
case 16:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]));

break;
case 17:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]));

break;
case 18:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]));

break;
case 19:
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___52649 = arguments.length;
var i__4737__auto___52650 = (0);
while(true){
if((i__4737__auto___52650 < len__4736__auto___52649)){
args_arr__4757__auto__.push((arguments[i__4737__auto___52650]));

var G__52652 = (i__4737__auto___52650 + (1));
i__4737__auto___52650 = G__52652;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((19)),(0),null));
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]),argseq__4758__auto__);

}
});

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.STAY_STAR_;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$1 = (function (nav1__47721__auto__){
return nav1__47721__auto__;
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2 = (function (nav1__47721__auto__,nav2__47722__auto__){
return com.rpl.specter.impl.combine_two_navs(nav1__47721__auto__,nav2__47722__auto__);
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3 = (function (G__49918,G__49919,G__49920){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49918,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49919,G__49920));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4 = (function (G__49921,G__49922,G__49923,G__49924){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49921,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$3(G__49922,G__49923,G__49924));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5 = (function (G__49925,G__49926,G__49927,G__49928,G__49929){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49925,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$4(G__49926,G__49927,G__49928,G__49929));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6 = (function (G__49930,G__49931,G__49932,G__49933,G__49934,G__49935){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49930,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$5(G__49931,G__49932,G__49933,G__49934,G__49935));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7 = (function (G__49936,G__49937,G__49938,G__49939,G__49940,G__49941,G__49942){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49936,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$6(G__49937,G__49938,G__49939,G__49940,G__49941,G__49942));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8 = (function (G__49943,G__49944,G__49945,G__49946,G__49947,G__49948,G__49949,G__49950){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49943,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$7(G__49944,G__49945,G__49946,G__49947,G__49948,G__49949,G__49950));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9 = (function (G__49951,G__49952,G__49953,G__49954,G__49955,G__49956,G__49957,G__49958,G__49959){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49951,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$8(G__49952,G__49953,G__49954,G__49955,G__49956,G__49957,G__49958,G__49959));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10 = (function (G__49960,G__49961,G__49962,G__49963,G__49964,G__49965,G__49966,G__49967,G__49968,G__49969){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49960,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$9(G__49961,G__49962,G__49963,G__49964,G__49965,G__49966,G__49967,G__49968,G__49969));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11 = (function (G__49970,G__49971,G__49972,G__49973,G__49974,G__49975,G__49976,G__49977,G__49978,G__49979,G__49980){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49970,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$10(G__49971,G__49972,G__49973,G__49974,G__49975,G__49976,G__49977,G__49978,G__49979,G__49980));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12 = (function (G__49981,G__49982,G__49983,G__49984,G__49985,G__49986,G__49987,G__49988,G__49989,G__49990,G__49991,G__49992){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49981,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$11(G__49982,G__49983,G__49984,G__49985,G__49986,G__49987,G__49988,G__49989,G__49990,G__49991,G__49992));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13 = (function (G__49993,G__49994,G__49995,G__49996,G__49997,G__49998,G__49999,G__50000,G__50001,G__50002,G__50003,G__50004,G__50005){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__49993,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$12(G__49994,G__49995,G__49996,G__49997,G__49998,G__49999,G__50000,G__50001,G__50002,G__50003,G__50004,G__50005));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14 = (function (G__50006,G__50007,G__50008,G__50009,G__50010,G__50011,G__50012,G__50013,G__50014,G__50015,G__50016,G__50017,G__50018,G__50019){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50006,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$13(G__50007,G__50008,G__50009,G__50010,G__50011,G__50012,G__50013,G__50014,G__50015,G__50016,G__50017,G__50018,G__50019));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15 = (function (G__50020,G__50021,G__50022,G__50023,G__50024,G__50025,G__50026,G__50027,G__50028,G__50029,G__50030,G__50031,G__50032,G__50033,G__50034){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50020,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$14(G__50021,G__50022,G__50023,G__50024,G__50025,G__50026,G__50027,G__50028,G__50029,G__50030,G__50031,G__50032,G__50033,G__50034));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16 = (function (G__50035,G__50036,G__50037,G__50038,G__50039,G__50040,G__50041,G__50042,G__50043,G__50044,G__50045,G__50046,G__50047,G__50048,G__50049,G__50050){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50035,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$15(G__50036,G__50037,G__50038,G__50039,G__50040,G__50041,G__50042,G__50043,G__50044,G__50045,G__50046,G__50047,G__50048,G__50049,G__50050));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17 = (function (G__50051,G__50052,G__50053,G__50054,G__50055,G__50056,G__50057,G__50058,G__50059,G__50060,G__50061,G__50062,G__50063,G__50064,G__50065,G__50066,G__50067){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50051,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$16(G__50052,G__50053,G__50054,G__50055,G__50056,G__50057,G__50058,G__50059,G__50060,G__50061,G__50062,G__50063,G__50064,G__50065,G__50066,G__50067));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18 = (function (G__50068,G__50069,G__50070,G__50071,G__50072,G__50073,G__50074,G__50075,G__50076,G__50077,G__50078,G__50079,G__50080,G__50081,G__50082,G__50083,G__50084,G__50085){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50068,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$17(G__50069,G__50070,G__50071,G__50072,G__50073,G__50074,G__50075,G__50076,G__50077,G__50078,G__50079,G__50080,G__50081,G__50082,G__50083,G__50084,G__50085));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19 = (function (G__50086,G__50087,G__50088,G__50089,G__50090,G__50091,G__50092,G__50093,G__50094,G__50095,G__50096,G__50097,G__50098,G__50099,G__50100,G__50101,G__50102,G__50103,G__50104){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(G__50086,com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$18(G__50087,G__50088,G__50089,G__50090,G__50091,G__50092,G__50093,G__50094,G__50095,G__50096,G__50097,G__50098,G__50099,G__50100,G__50101,G__50102,G__50103,G__50104));
}));

(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$variadic = (function (G__49899,G__49900,G__49901,G__49902,G__49903,G__49904,G__49905,G__49906,G__49907,G__49908,G__49909,G__49910,G__49911,G__49912,G__49913,G__49914,G__49915,G__49916,G__49917,rest__47723__auto__){
return com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs.cljs$core$IFn$_invoke$arity$19(G__49899,G__49900,G__49901,G__49902,G__49903,G__49904,G__49905,G__49906,G__49907,G__49908,G__49909,G__49910,G__49911,G__49912,G__49913,G__49914,G__49915,G__49916,G__49917),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.comp_navs,rest__47723__auto__));
}));

/** @this {Function} */
(com.rpl.specter.impl.comp_navs.cljs$lang$applyTo = (function (seq50122){
var G__50123 = cljs.core.first(seq50122);
var seq50122__$1 = cljs.core.next(seq50122);
var G__50124 = cljs.core.first(seq50122__$1);
var seq50122__$2 = cljs.core.next(seq50122__$1);
var G__50125 = cljs.core.first(seq50122__$2);
var seq50122__$3 = cljs.core.next(seq50122__$2);
var G__50126 = cljs.core.first(seq50122__$3);
var seq50122__$4 = cljs.core.next(seq50122__$3);
var G__50127 = cljs.core.first(seq50122__$4);
var seq50122__$5 = cljs.core.next(seq50122__$4);
var G__50128 = cljs.core.first(seq50122__$5);
var seq50122__$6 = cljs.core.next(seq50122__$5);
var G__50129 = cljs.core.first(seq50122__$6);
var seq50122__$7 = cljs.core.next(seq50122__$6);
var G__50130 = cljs.core.first(seq50122__$7);
var seq50122__$8 = cljs.core.next(seq50122__$7);
var G__50131 = cljs.core.first(seq50122__$8);
var seq50122__$9 = cljs.core.next(seq50122__$8);
var G__50132 = cljs.core.first(seq50122__$9);
var seq50122__$10 = cljs.core.next(seq50122__$9);
var G__50133 = cljs.core.first(seq50122__$10);
var seq50122__$11 = cljs.core.next(seq50122__$10);
var G__50134 = cljs.core.first(seq50122__$11);
var seq50122__$12 = cljs.core.next(seq50122__$11);
var G__50135 = cljs.core.first(seq50122__$12);
var seq50122__$13 = cljs.core.next(seq50122__$12);
var G__50136 = cljs.core.first(seq50122__$13);
var seq50122__$14 = cljs.core.next(seq50122__$13);
var G__50137 = cljs.core.first(seq50122__$14);
var seq50122__$15 = cljs.core.next(seq50122__$14);
var G__50138 = cljs.core.first(seq50122__$15);
var seq50122__$16 = cljs.core.next(seq50122__$15);
var G__50139 = cljs.core.first(seq50122__$16);
var seq50122__$17 = cljs.core.next(seq50122__$16);
var G__50140 = cljs.core.first(seq50122__$17);
var seq50122__$18 = cljs.core.next(seq50122__$17);
var G__50141 = cljs.core.first(seq50122__$18);
var seq50122__$19 = cljs.core.next(seq50122__$18);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50123,G__50124,G__50125,G__50126,G__50127,G__50128,G__50129,G__50130,G__50131,G__50132,G__50133,G__50134,G__50135,G__50136,G__50137,G__50138,G__50139,G__50140,G__50141,seq50122__$19);
}));

(com.rpl.specter.impl.comp_navs.cljs$lang$maxFixedArity = (19));

com.rpl.specter.impl.srange_transform_STAR_ = (function com$rpl$specter$impl$srange_transform_STAR_(structure,start,end,next_fn){
if(typeof structure === 'string'){
var newss = (function (){var G__50230 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50230) : next_fn.call(null,G__50230));
})();
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,(0),start),cljs.core.str.cljs$core$IFn$_invoke$arity$1(newss),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,end,((structure).length))].join('');
} else {
var structurev = cljs.core.vec(structure);
var newpart = (function (){var G__50231 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,start,end);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__50231) : next_fn.call(null,G__50231));
})();
var res = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,(0),start),newpart,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(structurev,end,cljs.core.count(structure))], 0));
if(cljs.core.vector_QMARK_(structure)){
return cljs.core.vec(res);
} else {
return res;
}
}
});
com.rpl.specter.impl.matching_indices = (function com$rpl$specter$impl$matching_indices(aseq,p){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,e){
if(cljs.core.truth_((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(e) : p.call(null,e)))){
return i;
} else {
return null;
}
}),aseq);
});
com.rpl.specter.impl.matching_ranges = (function com$rpl$specter$impl$matching_ranges(aseq,p){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50238,i){
var vec__50242 = p__50238;
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50242,(0),null);
var curr_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50242,(1),null);
var curr_last = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50242,(2),null);
var curr = vec__50242;
if((curr_start == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,i,i], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(curr_last + (1)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ranges,curr_start,i], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [curr_start,(curr_last + (1))], null)),i,i], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null,null], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.matching_indices(aseq,p),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1)], null))));
});
com.rpl.specter.impl.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$impl$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (structure__$1,p__50250){
var vec__50251 = p__50250;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50251,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50251,(1),null);
return com.rpl.specter.impl.srange_transform_STAR_(structure__$1,s,e,next_fn);
}),structure,cljs.core.reverse(com.rpl.specter.impl.matching_ranges(structure,pred)));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
var ret = clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(((com.rpl.specter.impl.fn_invocation_QMARK_(structure)) && (com.rpl.specter.impl.fn_invocation_QMARK_(ret)))){
return cljs.core.with_meta(ret,cljs.core.meta(structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.NONE);
var walker = (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure__$1) : pred.call(null,structure__$1)))){
var r = (continue_fn.cljs$core$IFn$_invoke$arity$1 ? continue_fn.cljs$core$IFn$_invoke$arity$1(structure__$1) : continue_fn.call(null,structure__$1));
if((!((r === com.rpl.specter.impl.NONE)))){
com.rpl.specter.impl.set_cell_BANG_(ret,r);
} else {
}

return r;
} else {
return clojure.walk.walk(com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});
walker(structure);

return com.rpl.specter.impl.get_cell(ret);
});
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(structure) : pred.call(null,structure)))){
return (on_match_fn.cljs$core$IFn$_invoke$arity$1 ? on_match_fn.cljs$core$IFn$_invoke$arity$1(structure) : on_match_fn.call(null,structure));
} else {
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.impl.walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.coerce_nav = (function com$rpl$specter$impl$coerce_nav(o){
if((((!((o == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === o.com$rpl$specter$protocols$RichNavigator$))))?true:(((!o.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o):false)):cljs.core.native_satisfies_QMARK_(com.rpl.specter.protocols.RichNavigator,o))){
return o;
} else {
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.comp_paths_STAR_(o);
} else {
return com.rpl.specter.protocols.implicit_nav(o);

}
}
});
com.rpl.specter.impl.dynamic_var_QMARK_ = (function com$rpl$specter$impl$dynamic_var_QMARK_(v){
return new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
});
com.rpl.specter.impl.direct_nav_obj = (function com$rpl$specter$impl$direct_nav_obj(o){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(o,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),true,new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620),o], null));
});
com.rpl.specter.impl.maybe_direct_nav = (function com$rpl$specter$impl$maybe_direct_nav(obj,direct_nav_QMARK_){
if(cljs.core.truth_(direct_nav_QMARK_)){
return com.rpl.specter.impl.direct_nav_obj(obj);
} else {
return obj;
}
});
com.rpl.specter.impl.original_obj = (function com$rpl$specter$impl$original_obj(o){
while(true){
var orig = new cljs.core.Keyword(null,"original-obj","original-obj",-1134279620).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
if(cljs.core.truth_(orig)){
var G__52762 = orig;
o = G__52762;
continue;
} else {
return o;
}
break;
}
});
com.rpl.specter.impl.direct_nav_QMARK_ = (function com$rpl$specter$impl$direct_nav_QMARK_(o){
return new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(o));
});
com.rpl.specter.impl.all_static_QMARK_ = (function com$rpl$specter$impl$all_static_QMARK_(params){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,params));
});
com.rpl.specter.impl.late_resolved_fn = (function com$rpl$specter$impl$late_resolved_fn(afn){
return (function() { 
var G__52766__delegate = function (args){
if(com.rpl.specter.impl.all_static_QMARK_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(afn,args);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(afn,args,null);
}
};
var G__52766 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52767__i = 0, G__52767__a = new Array(arguments.length -  0);
while (G__52767__i < G__52767__a.length) {G__52767__a[G__52767__i] = arguments[G__52767__i + 0]; ++G__52767__i;}
  args = new cljs.core.IndexedSeq(G__52767__a,0,null);
} 
return G__52766__delegate.call(this,args);};
G__52766.cljs$lang$maxFixedArity = 0;
G__52766.cljs$lang$applyTo = (function (arglist__52768){
var args = cljs.core.seq(arglist__52768);
return G__52766__delegate(args);
});
G__52766.cljs$core$IFn$_invoke$arity$variadic = G__52766__delegate;
return G__52766;
})()
;
});
com.rpl.specter.impl.preserve_map = (function com$rpl$specter$impl$preserve_map(afn,o){
if(((cljs.core.list_QMARK_(o)) || (cljs.core.seq_QMARK_(o)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(o),cljs.core.map.cljs$core$IFn$_invoke$arity$2(afn,o));
}
});
com.rpl.specter.impl.magic_precompilation_STAR_ = (function com$rpl$specter$impl$magic_precompilation_STAR_(o){
if(cljs.core.sequential_QMARK_(o)){
return com.rpl.specter.impl.preserve_map(com.rpl.specter.impl.magic_precompilation_STAR_,o);
} else {
if((o instanceof com.rpl.specter.impl.VarUse)){
var v = o.avar;
if(cljs.core.truth_((function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return com.rpl.specter.impl.dynamic_var_QMARK_(v);
} else {
return and__4115__auto__;
}
})())){
return com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.maybe_direct_nav(o.sym,(function (){var or__4126__auto__ = com.rpl.specter.impl.direct_nav_QMARK_(v);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
}
})()));
} else {
return com.rpl.specter.impl.maybe_direct_nav(o.val,(function (){var or__4126__auto__ = (function (){var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return com.rpl.specter.impl.direct_nav_QMARK_(v);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = com.rpl.specter.impl.direct_nav_QMARK_(o.sym);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return com.rpl.specter.impl.direct_nav_QMARK_(o.val);
}
}
})());
}
} else {
if((o instanceof com.rpl.specter.impl.LocalSym)){
return com.rpl.specter.impl.__GT_DynamicVal(o.sym);
} else {
if((o instanceof com.rpl.specter.impl.SpecialFormUse)){
return com.rpl.specter.impl.__GT_DynamicVal(o.code);
} else {
if((o instanceof com.rpl.specter.impl.FnInvocation)){
var op = (function (){var G__50330 = o.op;
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__50330) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__50330));
})();
var params = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.magic_precompilation_STAR_,o.params));
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(op));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return com.rpl.specter.impl.all_static_QMARK_(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,op));
}
})())){
var G__50336 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(op,params);
return (com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.impl.magic_precompilation_STAR_.cljs$core$IFn$_invoke$arity$1(G__50336) : com.rpl.specter.impl.magic_precompilation_STAR_.call(null,G__50336));
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(op,params,o.code);
}
} else {
return o;

}
}
}
}
}
});
com.rpl.specter.impl.static_combine = (function com$rpl$specter$impl$static_combine(var_args){
var G__50344 = arguments.length;
switch (G__50344) {
case 1:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1 = (function (o){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o,true);
}));

(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2 = (function (o,nav_pos_QMARK_){
if(cljs.core.sequential_QMARK_(o)){
if(cljs.core.truth_(nav_pos_QMARK_)){
var res = com.rpl.specter.impl.continuous_subseqs_transform_STAR_(com.rpl.specter.impl.rich_nav_QMARK_,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.impl.static_combine,cljs.core.flatten(o))),(function (s){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.comp_paths_STAR_(s)], null);
}));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(res))){
return cljs.core.first(res);
} else {
return res;
}
} else {
return com.rpl.specter.impl.preserve_map((function (p1__50341_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__50341_SHARP_,false);
}),o);
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
return com.rpl.specter.impl.__GT_DynamicFunction(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(o.op,false),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50342_SHARP_){
return com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$2(p1__50342_SHARP_,false);
}),o.params)),o.code);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return com.rpl.specter.impl.__GT_DynamicPath(com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(o.path));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return o;
} else {
if(cljs.core.truth_(nav_pos_QMARK_)){
return com.rpl.specter.impl.coerce_nav(o);
} else {
return o;
}

}
}
}
}
}));

(com.rpl.specter.impl.static_combine.cljs$lang$maxFixedArity = 2);


/**
 * @interface
 */
com.rpl.specter.impl.LateResolve = function(){};

var com$rpl$specter$impl$LateResolve$late_resolve$dyn_52796 = (function (this$,dynamic_params){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (com.rpl.specter.impl.late_resolve[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4429__auto__.call(null,this$,dynamic_params));
} else {
var m__4426__auto__ = (com.rpl.specter.impl.late_resolve["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,dynamic_params) : m__4426__auto__.call(null,this$,dynamic_params));
} else {
throw cljs.core.missing_protocol("LateResolve.late-resolve",this$);
}
}
});
com.rpl.specter.impl.late_resolve = (function com$rpl$specter$impl$late_resolve(this$,dynamic_params){
if((((!((this$ == null)))) && ((!((this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 == null)))))){
return this$.com$rpl$specter$impl$LateResolve$late_resolve$arity$2(this$,dynamic_params);
} else {
return com$rpl$specter$impl$LateResolve$late_resolve$dyn_52796(this$,dynamic_params);
}
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LocalParam = (function (idx,__meta,__extmap,__hash){
this.idx = idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50358,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50366 = k50358;
var G__50366__$1 = (((G__50366 instanceof cljs.core.Keyword))?G__50366.fqn:null);
switch (G__50366__$1) {
case "idx":
return self__.idx;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50358,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50369){
var vec__50371 = p__50369;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50371,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50371,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LocalParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(dynamic_params,self__.idx);
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LocalParam{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50357){
var self__ = this;
var G__50357__$1 = this;
return (new cljs.core.RecordIter((0),G__50357__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idx","idx",1053688473)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-301692215 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50359,other50360){
var self__ = this;
var this50359__$1 = this;
return (((!((other50360 == null)))) && ((this50359__$1.constructor === other50360.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50359__$1.idx,other50360.idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50359__$1.__extmap,other50360.__extmap)));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"idx","idx",1053688473),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50357){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50379 = cljs.core.keyword_identical_QMARK_;
var expr__50380 = k__4388__auto__;
if(cljs.core.truth_((pred__50379.cljs$core$IFn$_invoke$arity$2 ? pred__50379.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx","idx",1053688473),expr__50380) : pred__50379.call(null,new cljs.core.Keyword(null,"idx","idx",1053688473),expr__50380)))){
return (new com.rpl.specter.impl.LocalParam(G__50357,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LocalParam(self__.idx,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50357),null));
}
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx","idx",1053688473),self__.idx,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50357){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LocalParam(self__.idx,G__50357,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LocalParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LocalParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"idx","idx",-1600747296,null)], null);
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$type = true);

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LocalParam",null,(1),null));
}));

(com.rpl.specter.impl.LocalParam.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LocalParam");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LocalParam.
 */
com.rpl.specter.impl.__GT_LocalParam = (function com$rpl$specter$impl$__GT_LocalParam(idx){
return (new com.rpl.specter.impl.LocalParam(idx,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LocalParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LocalParam = (function com$rpl$specter$impl$map__GT_LocalParam(G__50361){
var extmap__4419__auto__ = (function (){var G__50382 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50361,new cljs.core.Keyword(null,"idx","idx",1053688473));
if(cljs.core.record_QMARK_(G__50361)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50382);
} else {
return G__50382;
}
})();
return (new com.rpl.specter.impl.LocalParam(new cljs.core.Keyword(null,"idx","idx",1053688473).cljs$core$IFn$_invoke$arity$1(G__50361),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.StaticParam = (function (val,__meta,__extmap,__hash){
this.val = val;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50387,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50392 = k50387;
var G__50392__$1 = (((G__50392 instanceof cljs.core.Keyword))?G__50392.fqn:null);
switch (G__50392__$1) {
case "val":
return self__.val;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50387,else__4383__auto__);

}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50399){
var vec__50400 = p__50399;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50400,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50400,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.StaticParam.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this$,dynamic_params){
var self__ = this;
var this$__$1 = this;
return self__.val;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.StaticParam{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"val","val",128701612),self__.val],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50386){
var self__ = this;
var G__50386__$1 = this;
return (new cljs.core.RecordIter((0),G__50386__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (787001817 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50388,other50389){
var self__ = this;
var this50388__$1 = this;
return (((!((other50389 == null)))) && ((this50388__$1.constructor === other50389.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50388__$1.val,other50389.val)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50388__$1.__extmap,other50389.__extmap)));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50386){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50413 = cljs.core.keyword_identical_QMARK_;
var expr__50414 = k__4388__auto__;
if(cljs.core.truth_((pred__50413.cljs$core$IFn$_invoke$arity$2 ? pred__50413.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"val","val",128701612),expr__50414) : pred__50413.call(null,new cljs.core.Keyword(null,"val","val",128701612),expr__50414)))){
return (new com.rpl.specter.impl.StaticParam(G__50386,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.StaticParam(self__.val,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50386),null));
}
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"val","val",128701612),self__.val,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50386){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.StaticParam(self__.val,G__50386,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.StaticParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.StaticParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$type = true);

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/StaticParam",null,(1),null));
}));

(com.rpl.specter.impl.StaticParam.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/StaticParam");
}));

/**
 * Positional factory function for com.rpl.specter.impl/StaticParam.
 */
com.rpl.specter.impl.__GT_StaticParam = (function com$rpl$specter$impl$__GT_StaticParam(val){
return (new com.rpl.specter.impl.StaticParam(val,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/StaticParam, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_StaticParam = (function com$rpl$specter$impl$map__GT_StaticParam(G__50391){
var extmap__4419__auto__ = (function (){var G__50431 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50391,new cljs.core.Keyword(null,"val","val",128701612));
if(cljs.core.record_QMARK_(G__50391)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50431);
} else {
return G__50431;
}
})();
return (new com.rpl.specter.impl.StaticParam(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(G__50391),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn0 = (function (fn,__meta,__extmap,__hash){
this.fn = fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50457,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50465 = k50457;
var G__50465__$1 = (((G__50465 instanceof cljs.core.Keyword))?G__50465.fqn:null);
switch (G__50465__$1) {
case "fn":
return self__.fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50457,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50475){
var vec__50482 = p__50475;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50482,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50482,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn0.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50436){
var self__ = this;
var this__47782__auto____$1 = this;
var fexpr__50491 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50436);
return (fexpr__50491.cljs$core$IFn$_invoke$arity$0 ? fexpr__50491.cljs$core$IFn$_invoke$arity$0() : fexpr__50491.call(null));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn0{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50456){
var self__ = this;
var G__50456__$1 = this;
return (new cljs.core.RecordIter((0),G__50456__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1214220781 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50458,other50459){
var self__ = this;
var this50458__$1 = this;
return (((!((other50459 == null)))) && ((this50458__$1.constructor === other50459.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50458__$1.fn,other50459.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50458__$1.__extmap,other50459.__extmap)));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50456){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50512 = cljs.core.keyword_identical_QMARK_;
var expr__50513 = k__4388__auto__;
if(cljs.core.truth_((pred__50512.cljs$core$IFn$_invoke$arity$2 ? pred__50512.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50513) : pred__50512.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50513)))){
return (new com.rpl.specter.impl.LateFn0(G__50456,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn0(self__.fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50456),null));
}
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50456){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn0(self__.fn,G__50456,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn0.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn0.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null)], null);
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn0",null,(1),null));
}));

(com.rpl.specter.impl.LateFn0.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn0");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn0.
 */
com.rpl.specter.impl.__GT_LateFn0 = (function com$rpl$specter$impl$__GT_LateFn0(fn){
return (new com.rpl.specter.impl.LateFn0(fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn0, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn0 = (function com$rpl$specter$impl$map__GT_LateFn0(G__50463){
var extmap__4419__auto__ = (function (){var G__50521 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50463,new cljs.core.Keyword(null,"fn","fn",-1175266204));
if(cljs.core.record_QMARK_(G__50463)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50521);
} else {
return G__50521;
}
})();
return (new com.rpl.specter.impl.LateFn0(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50463),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn1 = (function (fn,arg0,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50523,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50529 = k50523;
var G__50529__$1 = (((G__50529 instanceof cljs.core.Keyword))?G__50529.fqn:null);
switch (G__50529__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50523,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50532){
var vec__50533 = p__50532;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50533,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn1.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50437){
var self__ = this;
var this__47782__auto____$1 = this;
var G__50537 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50437);
var fexpr__50536 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50437);
return (fexpr__50536.cljs$core$IFn$_invoke$arity$1 ? fexpr__50536.cljs$core$IFn$_invoke$arity$1(G__50537) : fexpr__50536.call(null,G__50537));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn1{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50522){
var self__ = this;
var G__50522__$1 = this;
return (new cljs.core.RecordIter((0),G__50522__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1315140313 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50525,other50526){
var self__ = this;
var this50525__$1 = this;
return (((!((other50526 == null)))) && ((this50525__$1.constructor === other50526.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50525__$1.fn,other50526.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50525__$1.arg0,other50526.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50525__$1.__extmap,other50526.__extmap)));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50522){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50543 = cljs.core.keyword_identical_QMARK_;
var expr__50544 = k__4388__auto__;
if(cljs.core.truth_((pred__50543.cljs$core$IFn$_invoke$arity$2 ? pred__50543.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50544) : pred__50543.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50544)))){
return (new com.rpl.specter.impl.LateFn1(G__50522,self__.arg0,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50543.cljs$core$IFn$_invoke$arity$2 ? pred__50543.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50544) : pred__50543.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50544)))){
return (new com.rpl.specter.impl.LateFn1(self__.fn,G__50522,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50522),null));
}
}
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50522){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn1(self__.fn,self__.arg0,G__50522,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn1.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn1.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)], null);
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn1",null,(1),null));
}));

(com.rpl.specter.impl.LateFn1.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn1");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn1.
 */
com.rpl.specter.impl.__GT_LateFn1 = (function com$rpl$specter$impl$__GT_LateFn1(fn,arg0){
return (new com.rpl.specter.impl.LateFn1(fn,arg0,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn1, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn1 = (function com$rpl$specter$impl$map__GT_LateFn1(G__50527){
var extmap__4419__auto__ = (function (){var G__50555 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50527,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355)], 0));
if(cljs.core.record_QMARK_(G__50527)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50555);
} else {
return G__50555;
}
})();
return (new com.rpl.specter.impl.LateFn1(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50527),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__50527),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn2 = (function (fn,arg0,arg1,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50557,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50561 = k50557;
var G__50561__$1 = (((G__50561 instanceof cljs.core.Keyword))?G__50561.fqn:null);
switch (G__50561__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50557,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50564){
var vec__50565 = p__50564;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50565,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50565,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn2.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50438){
var self__ = this;
var this__47782__auto____$1 = this;
var G__50569 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50438);
var G__50570 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50438);
var fexpr__50568 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50438);
return (fexpr__50568.cljs$core$IFn$_invoke$arity$2 ? fexpr__50568.cljs$core$IFn$_invoke$arity$2(G__50569,G__50570) : fexpr__50568.call(null,G__50569,G__50570));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn2{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50556){
var self__ = this;
var G__50556__$1 = this;
return (new cljs.core.RecordIter((0),G__50556__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1833421521 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50558,other50559){
var self__ = this;
var this50558__$1 = this;
return (((!((other50559 == null)))) && ((this50558__$1.constructor === other50559.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50558__$1.fn,other50559.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50558__$1.arg0,other50559.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50558__$1.arg1,other50559.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50558__$1.__extmap,other50559.__extmap)));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50556){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50587 = cljs.core.keyword_identical_QMARK_;
var expr__50588 = k__4388__auto__;
if(cljs.core.truth_((pred__50587.cljs$core$IFn$_invoke$arity$2 ? pred__50587.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50588) : pred__50587.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50588)))){
return (new com.rpl.specter.impl.LateFn2(G__50556,self__.arg0,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50587.cljs$core$IFn$_invoke$arity$2 ? pred__50587.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50588) : pred__50587.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50588)))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,G__50556,self__.arg1,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50587.cljs$core$IFn$_invoke$arity$2 ? pred__50587.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50588) : pred__50587.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50588)))){
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,G__50556,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50556),null));
}
}
}
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50556){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn2(self__.fn,self__.arg0,self__.arg1,G__50556,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null)], null);
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn2",null,(1),null));
}));

(com.rpl.specter.impl.LateFn2.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn2");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn2.
 */
com.rpl.specter.impl.__GT_LateFn2 = (function com$rpl$specter$impl$__GT_LateFn2(fn,arg0,arg1){
return (new com.rpl.specter.impl.LateFn2(fn,arg0,arg1,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn2, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn2 = (function com$rpl$specter$impl$map__GT_LateFn2(G__50560){
var extmap__4419__auto__ = (function (){var G__50590 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50560,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358)], 0));
if(cljs.core.record_QMARK_(G__50560)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50590);
} else {
return G__50590;
}
})();
return (new com.rpl.specter.impl.LateFn2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50560),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__50560),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__50560),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn3 = (function (fn,arg0,arg1,arg2,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50593,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50604 = k50593;
var G__50604__$1 = (((G__50604 instanceof cljs.core.Keyword))?G__50604.fqn:null);
switch (G__50604__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50593,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50605){
var vec__50606 = p__50605;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50606,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50606,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn3.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50439){
var self__ = this;
var this__47782__auto____$1 = this;
var G__50610 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50439);
var G__50611 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50439);
var G__50612 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50439);
var fexpr__50609 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50439);
return (fexpr__50609.cljs$core$IFn$_invoke$arity$3 ? fexpr__50609.cljs$core$IFn$_invoke$arity$3(G__50610,G__50611,G__50612) : fexpr__50609.call(null,G__50610,G__50611,G__50612));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn3{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50592){
var self__ = this;
var G__50592__$1 = this;
return (new cljs.core.RecordIter((0),G__50592__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1966076701 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50594,other50595){
var self__ = this;
var this50594__$1 = this;
return (((!((other50595 == null)))) && ((this50594__$1.constructor === other50595.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50594__$1.fn,other50595.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50594__$1.arg0,other50595.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50594__$1.arg1,other50595.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50594__$1.arg2,other50595.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50594__$1.__extmap,other50595.__extmap)));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50592){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50623 = cljs.core.keyword_identical_QMARK_;
var expr__50624 = k__4388__auto__;
if(cljs.core.truth_((pred__50623.cljs$core$IFn$_invoke$arity$2 ? pred__50623.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50624) : pred__50623.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50624)))){
return (new com.rpl.specter.impl.LateFn3(G__50592,self__.arg0,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50623.cljs$core$IFn$_invoke$arity$2 ? pred__50623.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50624) : pred__50623.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50624)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,G__50592,self__.arg1,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50623.cljs$core$IFn$_invoke$arity$2 ? pred__50623.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50624) : pred__50623.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50624)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,G__50592,self__.arg2,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50623.cljs$core$IFn$_invoke$arity$2 ? pred__50623.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50624) : pred__50623.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50624)))){
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,G__50592,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50592),null));
}
}
}
}
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50592){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn3(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__50592,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null)], null);
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn3",null,(1),null));
}));

(com.rpl.specter.impl.LateFn3.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn3");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn3.
 */
com.rpl.specter.impl.__GT_LateFn3 = (function com$rpl$specter$impl$__GT_LateFn3(fn,arg0,arg1,arg2){
return (new com.rpl.specter.impl.LateFn3(fn,arg0,arg1,arg2,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn3, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn3 = (function com$rpl$specter$impl$map__GT_LateFn3(G__50599){
var extmap__4419__auto__ = (function (){var G__50628 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50599,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917)], 0));
if(cljs.core.record_QMARK_(G__50599)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50628);
} else {
return G__50628;
}
})();
return (new com.rpl.specter.impl.LateFn3(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50599),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__50599),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__50599),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__50599),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn4 = (function (fn,arg0,arg1,arg2,arg3,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50630,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50637 = k50630;
var G__50637__$1 = (((G__50637 instanceof cljs.core.Keyword))?G__50637.fqn:null);
switch (G__50637__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50630,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50638){
var vec__50639 = p__50638;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50639,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50639,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn4.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50440){
var self__ = this;
var this__47782__auto____$1 = this;
var G__50644 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50440);
var G__50645 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50440);
var G__50646 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50440);
var G__50647 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50440);
var fexpr__50643 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50440);
return (fexpr__50643.cljs$core$IFn$_invoke$arity$4 ? fexpr__50643.cljs$core$IFn$_invoke$arity$4(G__50644,G__50645,G__50646,G__50647) : fexpr__50643.call(null,G__50644,G__50645,G__50646,G__50647));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn4{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50629){
var self__ = this;
var G__50629__$1 = this;
return (new cljs.core.RecordIter((0),G__50629__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1293239800 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50631,other50632){
var self__ = this;
var this50631__$1 = this;
return (((!((other50632 == null)))) && ((this50631__$1.constructor === other50632.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50631__$1.fn,other50632.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50631__$1.arg0,other50632.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50631__$1.arg1,other50632.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50631__$1.arg2,other50632.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50631__$1.arg3,other50632.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50631__$1.__extmap,other50632.__extmap)));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50629){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50655 = cljs.core.keyword_identical_QMARK_;
var expr__50656 = k__4388__auto__;
if(cljs.core.truth_((pred__50655.cljs$core$IFn$_invoke$arity$2 ? pred__50655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50656) : pred__50655.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50656)))){
return (new com.rpl.specter.impl.LateFn4(G__50629,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50655.cljs$core$IFn$_invoke$arity$2 ? pred__50655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50656) : pred__50655.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50656)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,G__50629,self__.arg1,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50655.cljs$core$IFn$_invoke$arity$2 ? pred__50655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50656) : pred__50655.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50656)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,G__50629,self__.arg2,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50655.cljs$core$IFn$_invoke$arity$2 ? pred__50655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50656) : pred__50655.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50656)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,G__50629,self__.arg3,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50655.cljs$core$IFn$_invoke$arity$2 ? pred__50655.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50656) : pred__50655.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50656)))){
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__50629,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50629),null));
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50629){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn4(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__50629,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn4.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null)], null);
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn4",null,(1),null));
}));

(com.rpl.specter.impl.LateFn4.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn4");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn4.
 */
com.rpl.specter.impl.__GT_LateFn4 = (function com$rpl$specter$impl$__GT_LateFn4(fn,arg0,arg1,arg2,arg3){
return (new com.rpl.specter.impl.LateFn4(fn,arg0,arg1,arg2,arg3,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn4, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn4 = (function com$rpl$specter$impl$map__GT_LateFn4(G__50633){
var extmap__4419__auto__ = (function (){var G__50666 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50633,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496)], 0));
if(cljs.core.record_QMARK_(G__50633)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50666);
} else {
return G__50666;
}
})();
return (new com.rpl.specter.impl.LateFn4(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50633),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__50633),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__50633),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__50633),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__50633),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn5 = (function (fn,arg0,arg1,arg2,arg3,arg4,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50668,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50690 = k50668;
var G__50690__$1 = (((G__50690 instanceof cljs.core.Keyword))?G__50690.fqn:null);
switch (G__50690__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50668,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50697){
var vec__50699 = p__50697;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50699,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50699,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn5.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50441){
var self__ = this;
var this__47782__auto____$1 = this;
var G__50703 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50441);
var G__50704 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50441);
var G__50705 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50441);
var G__50706 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50441);
var G__50707 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50441);
var fexpr__50702 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50441);
return (fexpr__50702.cljs$core$IFn$_invoke$arity$5 ? fexpr__50702.cljs$core$IFn$_invoke$arity$5(G__50703,G__50704,G__50705,G__50706,G__50707) : fexpr__50702.call(null,G__50703,G__50704,G__50705,G__50706,G__50707));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn5{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50667){
var self__ = this;
var G__50667__$1 = this;
return (new cljs.core.RecordIter((0),G__50667__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-686294298 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50669,other50670){
var self__ = this;
var this50669__$1 = this;
return (((!((other50670 == null)))) && ((this50669__$1.constructor === other50670.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50669__$1.fn,other50670.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50669__$1.arg0,other50670.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50669__$1.arg1,other50670.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50669__$1.arg2,other50670.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50669__$1.arg3,other50670.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50669__$1.arg4,other50670.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50669__$1.__extmap,other50670.__extmap)));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50667){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50736 = cljs.core.keyword_identical_QMARK_;
var expr__50737 = k__4388__auto__;
if(cljs.core.truth_((pred__50736.cljs$core$IFn$_invoke$arity$2 ? pred__50736.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50737) : pred__50736.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50737)))){
return (new com.rpl.specter.impl.LateFn5(G__50667,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50736.cljs$core$IFn$_invoke$arity$2 ? pred__50736.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50737) : pred__50736.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50737)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,G__50667,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50736.cljs$core$IFn$_invoke$arity$2 ? pred__50736.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50737) : pred__50736.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50737)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,G__50667,self__.arg2,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50736.cljs$core$IFn$_invoke$arity$2 ? pred__50736.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50737) : pred__50736.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50737)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,G__50667,self__.arg3,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50736.cljs$core$IFn$_invoke$arity$2 ? pred__50736.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50737) : pred__50736.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50737)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__50667,self__.arg4,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50736.cljs$core$IFn$_invoke$arity$2 ? pred__50736.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__50737) : pred__50736.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__50737)))){
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__50667,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50667),null));
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50667){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn5(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__50667,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn5.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn5.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null)], null);
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn5",null,(1),null));
}));

(com.rpl.specter.impl.LateFn5.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn5");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn5.
 */
com.rpl.specter.impl.__GT_LateFn5 = (function com$rpl$specter$impl$__GT_LateFn5(fn,arg0,arg1,arg2,arg3,arg4){
return (new com.rpl.specter.impl.LateFn5(fn,arg0,arg1,arg2,arg3,arg4,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn5, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn5 = (function com$rpl$specter$impl$map__GT_LateFn5(G__50672){
var extmap__4419__auto__ = (function (){var G__50739 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50672,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004)], 0));
if(cljs.core.record_QMARK_(G__50672)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50739);
} else {
return G__50739;
}
})();
return (new com.rpl.specter.impl.LateFn5(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50672),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__50672),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__50672),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__50672),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__50672),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__50672),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn6 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50741,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50746 = k50741;
var G__50746__$1 = (((G__50746 instanceof cljs.core.Keyword))?G__50746.fqn:null);
switch (G__50746__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50741,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50747){
var vec__50748 = p__50747;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50748,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50748,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn6.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50442){
var self__ = this;
var this__47782__auto____$1 = this;
var G__50752 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50442);
var G__50753 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50442);
var G__50754 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50442);
var G__50755 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50442);
var G__50756 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50442);
var G__50757 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50442);
var fexpr__50751 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50442);
return (fexpr__50751.cljs$core$IFn$_invoke$arity$6 ? fexpr__50751.cljs$core$IFn$_invoke$arity$6(G__50752,G__50753,G__50754,G__50755,G__50756,G__50757) : fexpr__50751.call(null,G__50752,G__50753,G__50754,G__50755,G__50756,G__50757));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn6{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50740){
var self__ = this;
var G__50740__$1 = this;
return (new cljs.core.RecordIter((0),G__50740__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1454341741 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50742,other50743){
var self__ = this;
var this50742__$1 = this;
return (((!((other50743 == null)))) && ((this50742__$1.constructor === other50743.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50742__$1.fn,other50743.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50742__$1.arg0,other50743.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50742__$1.arg1,other50743.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50742__$1.arg2,other50743.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50742__$1.arg3,other50743.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50742__$1.arg4,other50743.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50742__$1.arg5,other50743.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50742__$1.__extmap,other50743.__extmap)));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50740){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50772 = cljs.core.keyword_identical_QMARK_;
var expr__50773 = k__4388__auto__;
if(cljs.core.truth_((pred__50772.cljs$core$IFn$_invoke$arity$2 ? pred__50772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50773) : pred__50772.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50773)))){
return (new com.rpl.specter.impl.LateFn6(G__50740,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50772.cljs$core$IFn$_invoke$arity$2 ? pred__50772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50773) : pred__50772.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50773)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,G__50740,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50772.cljs$core$IFn$_invoke$arity$2 ? pred__50772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50773) : pred__50772.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50773)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,G__50740,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50772.cljs$core$IFn$_invoke$arity$2 ? pred__50772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50773) : pred__50772.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50773)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,G__50740,self__.arg3,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50772.cljs$core$IFn$_invoke$arity$2 ? pred__50772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50773) : pred__50772.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50773)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__50740,self__.arg4,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50772.cljs$core$IFn$_invoke$arity$2 ? pred__50772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__50773) : pred__50772.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__50773)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__50740,self__.arg5,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50772.cljs$core$IFn$_invoke$arity$2 ? pred__50772.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__50773) : pred__50772.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__50773)))){
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__50740,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50740),null));
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50740){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn6(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__50740,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn6.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn6.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null)], null);
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn6",null,(1),null));
}));

(com.rpl.specter.impl.LateFn6.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn6");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn6.
 */
com.rpl.specter.impl.__GT_LateFn6 = (function com$rpl$specter$impl$__GT_LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5){
return (new com.rpl.specter.impl.LateFn6(fn,arg0,arg1,arg2,arg3,arg4,arg5,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn6, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn6 = (function com$rpl$specter$impl$map__GT_LateFn6(G__50744){
var extmap__4419__auto__ = (function (){var G__50778 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50744,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215)], 0));
if(cljs.core.record_QMARK_(G__50744)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50778);
} else {
return G__50778;
}
})();
return (new com.rpl.specter.impl.LateFn6(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50744),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__50744),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__50744),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__50744),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__50744),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__50744),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__50744),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn7 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50780,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50788 = k50780;
var G__50788__$1 = (((G__50788 instanceof cljs.core.Keyword))?G__50788.fqn:null);
switch (G__50788__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50780,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50790){
var vec__50792 = p__50790;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50792,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50792,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn7.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50443){
var self__ = this;
var this__47782__auto____$1 = this;
var G__50799 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50443);
var G__50800 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50443);
var G__50801 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50443);
var G__50802 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50443);
var G__50803 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50443);
var G__50804 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50443);
var G__50805 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50443);
var fexpr__50798 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50443);
return (fexpr__50798.cljs$core$IFn$_invoke$arity$7 ? fexpr__50798.cljs$core$IFn$_invoke$arity$7(G__50799,G__50800,G__50801,G__50802,G__50803,G__50804,G__50805) : fexpr__50798.call(null,G__50799,G__50800,G__50801,G__50802,G__50803,G__50804,G__50805));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn7{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50779){
var self__ = this;
var G__50779__$1 = this;
return (new cljs.core.RecordIter((0),G__50779__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (2042831251 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50781,other50782){
var self__ = this;
var this50781__$1 = this;
return (((!((other50782 == null)))) && ((this50781__$1.constructor === other50782.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50781__$1.fn,other50782.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50781__$1.arg0,other50782.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50781__$1.arg1,other50782.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50781__$1.arg2,other50782.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50781__$1.arg3,other50782.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50781__$1.arg4,other50782.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50781__$1.arg5,other50782.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50781__$1.arg6,other50782.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50781__$1.__extmap,other50782.__extmap)));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50779){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50813 = cljs.core.keyword_identical_QMARK_;
var expr__50814 = k__4388__auto__;
if(cljs.core.truth_((pred__50813.cljs$core$IFn$_invoke$arity$2 ? pred__50813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50814) : pred__50813.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50814)))){
return (new com.rpl.specter.impl.LateFn7(G__50779,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50813.cljs$core$IFn$_invoke$arity$2 ? pred__50813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50814) : pred__50813.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50814)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,G__50779,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50813.cljs$core$IFn$_invoke$arity$2 ? pred__50813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50814) : pred__50813.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50814)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,G__50779,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50813.cljs$core$IFn$_invoke$arity$2 ? pred__50813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50814) : pred__50813.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50814)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,G__50779,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50813.cljs$core$IFn$_invoke$arity$2 ? pred__50813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50814) : pred__50813.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50814)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__50779,self__.arg4,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50813.cljs$core$IFn$_invoke$arity$2 ? pred__50813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__50814) : pred__50813.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__50814)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__50779,self__.arg5,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50813.cljs$core$IFn$_invoke$arity$2 ? pred__50813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__50814) : pred__50813.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__50814)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__50779,self__.arg6,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50813.cljs$core$IFn$_invoke$arity$2 ? pred__50813.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__50814) : pred__50813.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__50814)))){
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__50779,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50779),null));
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50779){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn7(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__50779,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn7.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn7.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null)], null);
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn7",null,(1),null));
}));

(com.rpl.specter.impl.LateFn7.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn7");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn7.
 */
com.rpl.specter.impl.__GT_LateFn7 = (function com$rpl$specter$impl$__GT_LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6){
return (new com.rpl.specter.impl.LateFn7(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn7, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn7 = (function com$rpl$specter$impl$map__GT_LateFn7(G__50783){
var extmap__4419__auto__ = (function (){var G__50819 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50783,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438)], 0));
if(cljs.core.record_QMARK_(G__50783)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50819);
} else {
return G__50819;
}
})();
return (new com.rpl.specter.impl.LateFn7(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50783),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__50783),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__50783),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__50783),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__50783),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__50783),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__50783),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__50783),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn8 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50821,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50832 = k50821;
var G__50832__$1 = (((G__50832 instanceof cljs.core.Keyword))?G__50832.fqn:null);
switch (G__50832__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50821,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50839){
var vec__50840 = p__50839;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn8.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50444){
var self__ = this;
var this__47782__auto____$1 = this;
var G__50844 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50444);
var G__50845 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50444);
var G__50846 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50444);
var G__50847 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50444);
var G__50848 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50444);
var G__50849 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50444);
var G__50850 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50444);
var G__50851 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50444);
var fexpr__50843 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50444);
return (fexpr__50843.cljs$core$IFn$_invoke$arity$8 ? fexpr__50843.cljs$core$IFn$_invoke$arity$8(G__50844,G__50845,G__50846,G__50847,G__50848,G__50849,G__50850,G__50851) : fexpr__50843.call(null,G__50844,G__50845,G__50846,G__50847,G__50848,G__50849,G__50850,G__50851));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn8{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50820){
var self__ = this;
var G__50820__$1 = this;
return (new cljs.core.RecordIter((0),G__50820__$1,9,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (9 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (170516454 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50822,other50823){
var self__ = this;
var this50822__$1 = this;
return (((!((other50823 == null)))) && ((this50822__$1.constructor === other50823.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50822__$1.fn,other50823.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50822__$1.arg0,other50823.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50822__$1.arg1,other50823.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50822__$1.arg2,other50823.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50822__$1.arg3,other50823.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50822__$1.arg4,other50823.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50822__$1.arg5,other50823.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50822__$1.arg6,other50823.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50822__$1.arg7,other50823.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50822__$1.__extmap,other50823.__extmap)));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50820){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50881 = cljs.core.keyword_identical_QMARK_;
var expr__50882 = k__4388__auto__;
if(cljs.core.truth_((pred__50881.cljs$core$IFn$_invoke$arity$2 ? pred__50881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50882) : pred__50881.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50882)))){
return (new com.rpl.specter.impl.LateFn8(G__50820,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50881.cljs$core$IFn$_invoke$arity$2 ? pred__50881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50882) : pred__50881.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50882)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,G__50820,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50881.cljs$core$IFn$_invoke$arity$2 ? pred__50881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50882) : pred__50881.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50882)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,G__50820,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50881.cljs$core$IFn$_invoke$arity$2 ? pred__50881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50882) : pred__50881.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50882)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,G__50820,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50881.cljs$core$IFn$_invoke$arity$2 ? pred__50881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50882) : pred__50881.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50882)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__50820,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50881.cljs$core$IFn$_invoke$arity$2 ? pred__50881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__50882) : pred__50881.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__50882)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__50820,self__.arg5,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50881.cljs$core$IFn$_invoke$arity$2 ? pred__50881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__50882) : pred__50881.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__50882)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__50820,self__.arg6,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50881.cljs$core$IFn$_invoke$arity$2 ? pred__50881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__50882) : pred__50881.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__50882)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__50820,self__.arg7,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50881.cljs$core$IFn$_invoke$arity$2 ? pred__50881.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__50882) : pred__50881.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__50882)))){
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__50820,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50820),null));
}
}
}
}
}
}
}
}
}
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50820){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn8(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__50820,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn8.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn8.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null)], null);
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn8",null,(1),null));
}));

(com.rpl.specter.impl.LateFn8.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn8");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn8.
 */
com.rpl.specter.impl.__GT_LateFn8 = (function com$rpl$specter$impl$__GT_LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7){
return (new com.rpl.specter.impl.LateFn8(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn8, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn8 = (function com$rpl$specter$impl$map__GT_LateFn8(G__50824){
var extmap__4419__auto__ = (function (){var G__50889 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50824,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509)], 0));
if(cljs.core.record_QMARK_(G__50824)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50889);
} else {
return G__50889;
}
})();
return (new com.rpl.specter.impl.LateFn8(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50824),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__50824),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__50824),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__50824),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__50824),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__50824),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__50824),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__50824),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__50824),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn9 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50891,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50902 = k50891;
var G__50902__$1 = (((G__50902 instanceof cljs.core.Keyword))?G__50902.fqn:null);
switch (G__50902__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50891,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50903){
var vec__50905 = p__50903;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50905,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50905,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn9.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50445){
var self__ = this;
var this__47782__auto____$1 = this;
var G__50920 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50445);
var G__50921 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50445);
var G__50922 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50445);
var G__50923 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50445);
var G__50924 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50445);
var G__50925 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50445);
var G__50926 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50445);
var G__50927 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50445);
var G__50928 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50445);
var fexpr__50919 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50445);
return (fexpr__50919.cljs$core$IFn$_invoke$arity$9 ? fexpr__50919.cljs$core$IFn$_invoke$arity$9(G__50920,G__50921,G__50922,G__50923,G__50924,G__50925,G__50926,G__50927,G__50928) : fexpr__50919.call(null,G__50920,G__50921,G__50922,G__50923,G__50924,G__50925,G__50926,G__50927,G__50928));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn9{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50890){
var self__ = this;
var G__50890__$1 = this;
return (new cljs.core.RecordIter((0),G__50890__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (840896307 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50892,other50893){
var self__ = this;
var this50892__$1 = this;
return (((!((other50893 == null)))) && ((this50892__$1.constructor === other50893.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.fn,other50893.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.arg0,other50893.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.arg1,other50893.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.arg2,other50893.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.arg3,other50893.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.arg4,other50893.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.arg5,other50893.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.arg6,other50893.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.arg7,other50893.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.arg8,other50893.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50892__$1.__extmap,other50893.__extmap)));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50890){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50939 = cljs.core.keyword_identical_QMARK_;
var expr__50940 = k__4388__auto__;
if(cljs.core.truth_((pred__50939.cljs$core$IFn$_invoke$arity$2 ? pred__50939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50940) : pred__50939.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__50940)))){
return (new com.rpl.specter.impl.LateFn9(G__50890,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50939.cljs$core$IFn$_invoke$arity$2 ? pred__50939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50940) : pred__50939.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__50940)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,G__50890,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50939.cljs$core$IFn$_invoke$arity$2 ? pred__50939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50940) : pred__50939.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__50940)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,G__50890,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50939.cljs$core$IFn$_invoke$arity$2 ? pred__50939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50940) : pred__50939.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__50940)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,G__50890,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50939.cljs$core$IFn$_invoke$arity$2 ? pred__50939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50940) : pred__50939.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__50940)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__50890,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50939.cljs$core$IFn$_invoke$arity$2 ? pred__50939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__50940) : pred__50939.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__50940)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__50890,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50939.cljs$core$IFn$_invoke$arity$2 ? pred__50939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__50940) : pred__50939.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__50940)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__50890,self__.arg6,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50939.cljs$core$IFn$_invoke$arity$2 ? pred__50939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__50940) : pred__50939.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__50940)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__50890,self__.arg7,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50939.cljs$core$IFn$_invoke$arity$2 ? pred__50939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__50940) : pred__50939.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__50940)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__50890,self__.arg8,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50939.cljs$core$IFn$_invoke$arity$2 ? pred__50939.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__50940) : pred__50939.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__50940)))){
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__50890,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50890),null));
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
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50890){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn9(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__50890,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn9.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn9.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null)], null);
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn9",null,(1),null));
}));

(com.rpl.specter.impl.LateFn9.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn9");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn9.
 */
com.rpl.specter.impl.__GT_LateFn9 = (function com$rpl$specter$impl$__GT_LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8){
return (new com.rpl.specter.impl.LateFn9(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn9, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn9 = (function com$rpl$specter$impl$map__GT_LateFn9(G__50896){
var extmap__4419__auto__ = (function (){var G__50972 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50896,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218)], 0));
if(cljs.core.record_QMARK_(G__50896)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50972);
} else {
return G__50972;
}
})();
return (new com.rpl.specter.impl.LateFn9(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50896),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__50896),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__50896),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__50896),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__50896),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__50896),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__50896),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__50896),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__50896),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__50896),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn10 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50975,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50979 = k50975;
var G__50979__$1 = (((G__50979 instanceof cljs.core.Keyword))?G__50979.fqn:null);
switch (G__50979__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50975,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50980){
var vec__50983 = p__50980;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50983,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50983,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn10.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50446){
var self__ = this;
var this__47782__auto____$1 = this;
var G__50991 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50446);
var G__50992 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50446);
var G__50993 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50446);
var G__50994 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50446);
var G__50995 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50446);
var G__50996 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50446);
var G__50997 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50446);
var G__50998 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50446);
var G__50999 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50446);
var G__51000 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params50446);
var fexpr__50990 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50446);
return (fexpr__50990.cljs$core$IFn$_invoke$arity$10 ? fexpr__50990.cljs$core$IFn$_invoke$arity$10(G__50991,G__50992,G__50993,G__50994,G__50995,G__50996,G__50997,G__50998,G__50999,G__51000) : fexpr__50990.call(null,G__50991,G__50992,G__50993,G__50994,G__50995,G__50996,G__50997,G__50998,G__50999,G__51000));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn10{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50974){
var self__ = this;
var G__50974__$1 = this;
return (new cljs.core.RecordIter((0),G__50974__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1353979086 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50976,other50977){
var self__ = this;
var this50976__$1 = this;
return (((!((other50977 == null)))) && ((this50976__$1.constructor === other50977.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.fn,other50977.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.arg0,other50977.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.arg1,other50977.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.arg2,other50977.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.arg3,other50977.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.arg4,other50977.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.arg5,other50977.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.arg6,other50977.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.arg7,other50977.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.arg8,other50977.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.arg9,other50977.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50976__$1.__extmap,other50977.__extmap)));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50974){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51033 = cljs.core.keyword_identical_QMARK_;
var expr__51034 = k__4388__auto__;
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(G__50974,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,G__50974,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,G__50974,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,G__50974,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__50974,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__50974,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__50974,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__50974,self__.arg7,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__50974,self__.arg8,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__50974,self__.arg9,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51033.cljs$core$IFn$_invoke$arity$2 ? pred__51033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51034) : pred__51033.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51034)))){
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__50974,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50974),null));
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
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50974){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn10(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__50974,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn10.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn10.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null)], null);
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn10",null,(1),null));
}));

(com.rpl.specter.impl.LateFn10.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn10");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn10.
 */
com.rpl.specter.impl.__GT_LateFn10 = (function com$rpl$specter$impl$__GT_LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9){
return (new com.rpl.specter.impl.LateFn10(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn10, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn10 = (function com$rpl$specter$impl$map__GT_LateFn10(G__50978){
var extmap__4419__auto__ = (function (){var G__51070 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50978,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905)], 0));
if(cljs.core.record_QMARK_(G__50978)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51070);
} else {
return G__51070;
}
})();
return (new com.rpl.specter.impl.LateFn10(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__50978),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__50978),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__50978),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__50978),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__50978),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__50978),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__50978),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__50978),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__50978),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__50978),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__50978),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn11 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51075,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51090 = k51075;
var G__51090__$1 = (((G__51090 instanceof cljs.core.Keyword))?G__51090.fqn:null);
switch (G__51090__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51075,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51093){
var vec__51095 = p__51093;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51095,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51095,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn11.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50447){
var self__ = this;
var this__47782__auto____$1 = this;
var G__51100 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50447);
var G__51101 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50447);
var G__51102 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50447);
var G__51103 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50447);
var G__51104 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50447);
var G__51105 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50447);
var G__51106 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50447);
var G__51107 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50447);
var G__51108 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50447);
var G__51109 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params50447);
var G__51110 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params50447);
var fexpr__51099 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50447);
return (fexpr__51099.cljs$core$IFn$_invoke$arity$11 ? fexpr__51099.cljs$core$IFn$_invoke$arity$11(G__51100,G__51101,G__51102,G__51103,G__51104,G__51105,G__51106,G__51107,G__51108,G__51109,G__51110) : fexpr__51099.call(null,G__51100,G__51101,G__51102,G__51103,G__51104,G__51105,G__51106,G__51107,G__51108,G__51109,G__51110));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn11{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51074){
var self__ = this;
var G__51074__$1 = this;
return (new cljs.core.RecordIter((0),G__51074__$1,12,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (12 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (180129418 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51076,other51077){
var self__ = this;
var this51076__$1 = this;
return (((!((other51077 == null)))) && ((this51076__$1.constructor === other51077.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.fn,other51077.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg0,other51077.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg1,other51077.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg2,other51077.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg3,other51077.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg4,other51077.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg5,other51077.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg6,other51077.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg7,other51077.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg8,other51077.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg9,other51077.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.arg10,other51077.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51076__$1.__extmap,other51077.__extmap)));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 12, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51074){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51138 = cljs.core.keyword_identical_QMARK_;
var expr__51139 = k__4388__auto__;
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(G__51074,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,G__51074,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,G__51074,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,G__51074,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51074,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51074,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51074,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51074,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51074,self__.arg8,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51074,self__.arg9,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51074,self__.arg10,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51138.cljs$core$IFn$_invoke$arity$2 ? pred__51138.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51139) : pred__51138.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51139)))){
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51074,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51074),null));
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
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51074){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn11(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51074,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn11.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn11.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null)], null);
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn11",null,(1),null));
}));

(com.rpl.specter.impl.LateFn11.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn11");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn11.
 */
com.rpl.specter.impl.__GT_LateFn11 = (function com$rpl$specter$impl$__GT_LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10){
return (new com.rpl.specter.impl.LateFn11(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn11, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn11 = (function com$rpl$specter$impl$map__GT_LateFn11(G__51081){
var extmap__4419__auto__ = (function (){var G__51176 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51081,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517)], 0));
if(cljs.core.record_QMARK_(G__51081)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51176);
} else {
return G__51176;
}
})();
return (new com.rpl.specter.impl.LateFn11(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51081),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51081),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn12 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51186,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51196 = k51186;
var G__51196__$1 = (((G__51196 instanceof cljs.core.Keyword))?G__51196.fqn:null);
switch (G__51196__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51186,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51199){
var vec__51200 = p__51199;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51200,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51200,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn12.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50448){
var self__ = this;
var this__47782__auto____$1 = this;
var G__51205 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50448);
var G__51206 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50448);
var G__51207 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50448);
var G__51208 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50448);
var G__51209 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50448);
var G__51210 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50448);
var G__51211 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50448);
var G__51212 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50448);
var G__51213 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50448);
var G__51214 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params50448);
var G__51215 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params50448);
var G__51216 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params50448);
var fexpr__51204 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50448);
return (fexpr__51204.cljs$core$IFn$_invoke$arity$12 ? fexpr__51204.cljs$core$IFn$_invoke$arity$12(G__51205,G__51206,G__51207,G__51208,G__51209,G__51210,G__51211,G__51212,G__51213,G__51214,G__51215,G__51216) : fexpr__51204.call(null,G__51205,G__51206,G__51207,G__51208,G__51209,G__51210,G__51211,G__51212,G__51213,G__51214,G__51215,G__51216));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn12{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51185){
var self__ = this;
var G__51185__$1 = this;
return (new cljs.core.RecordIter((0),G__51185__$1,13,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (13 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1789372539 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51187,other51188){
var self__ = this;
var this51187__$1 = this;
return (((!((other51188 == null)))) && ((this51187__$1.constructor === other51188.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.fn,other51188.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg0,other51188.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg1,other51188.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg2,other51188.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg3,other51188.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg4,other51188.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg5,other51188.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg6,other51188.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg7,other51188.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg8,other51188.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg9,other51188.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg10,other51188.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.arg11,other51188.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51187__$1.__extmap,other51188.__extmap)));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51185){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51260 = cljs.core.keyword_identical_QMARK_;
var expr__51261 = k__4388__auto__;
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(G__51185,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,G__51185,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,G__51185,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,G__51185,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51185,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51185,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51185,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51185,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51185,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51185,self__.arg9,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51185,self__.arg10,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51185,self__.arg11,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51260.cljs$core$IFn$_invoke$arity$2 ? pred__51260.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51261) : pred__51260.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51261)))){
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51185,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51185),null));
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
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51185){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn12(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51185,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn12.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn12.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null)], null);
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn12",null,(1),null));
}));

(com.rpl.specter.impl.LateFn12.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn12");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn12.
 */
com.rpl.specter.impl.__GT_LateFn12 = (function com$rpl$specter$impl$__GT_LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11){
return (new com.rpl.specter.impl.LateFn12(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn12, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn12 = (function com$rpl$specter$impl$map__GT_LateFn12(G__51189){
var extmap__4419__auto__ = (function (){var G__51283 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51189,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070)], 0));
if(cljs.core.record_QMARK_(G__51189)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51283);
} else {
return G__51283;
}
})();
return (new com.rpl.specter.impl.LateFn12(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51189),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51189),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn13 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51287,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51294 = k51287;
var G__51294__$1 = (((G__51294 instanceof cljs.core.Keyword))?G__51294.fqn:null);
switch (G__51294__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51287,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51296){
var vec__51297 = p__51296;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51297,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51297,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn13.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50449){
var self__ = this;
var this__47782__auto____$1 = this;
var G__51304 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50449);
var G__51305 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50449);
var G__51306 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50449);
var G__51307 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50449);
var G__51308 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50449);
var G__51309 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50449);
var G__51310 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50449);
var G__51311 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50449);
var G__51312 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50449);
var G__51313 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params50449);
var G__51314 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params50449);
var G__51315 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params50449);
var G__51316 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params50449);
var fexpr__51303 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50449);
return (fexpr__51303.cljs$core$IFn$_invoke$arity$13 ? fexpr__51303.cljs$core$IFn$_invoke$arity$13(G__51304,G__51305,G__51306,G__51307,G__51308,G__51309,G__51310,G__51311,G__51312,G__51313,G__51314,G__51315,G__51316) : fexpr__51303.call(null,G__51304,G__51305,G__51306,G__51307,G__51308,G__51309,G__51310,G__51311,G__51312,G__51313,G__51314,G__51315,G__51316));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn13{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51286){
var self__ = this;
var G__51286__$1 = this;
return (new cljs.core.RecordIter((0),G__51286__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1059049277 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51288,other51289){
var self__ = this;
var this51288__$1 = this;
return (((!((other51289 == null)))) && ((this51288__$1.constructor === other51289.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.fn,other51289.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg0,other51289.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg1,other51289.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg2,other51289.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg3,other51289.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg4,other51289.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg5,other51289.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg6,other51289.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg7,other51289.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg8,other51289.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg9,other51289.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg10,other51289.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg11,other51289.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.arg12,other51289.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51288__$1.__extmap,other51289.__extmap)));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51286){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51338 = cljs.core.keyword_identical_QMARK_;
var expr__51339 = k__4388__auto__;
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(G__51286,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,G__51286,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,G__51286,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,G__51286,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51286,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51286,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51286,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51286,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51286,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51286,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51286,self__.arg10,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51286,self__.arg11,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51286,self__.arg12,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51338.cljs$core$IFn$_invoke$arity$2 ? pred__51338.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51339) : pred__51338.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51339)))){
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51286,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51286),null));
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
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51286){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn13(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51286,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn13.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn13.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null)], null);
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn13",null,(1),null));
}));

(com.rpl.specter.impl.LateFn13.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn13");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn13.
 */
com.rpl.specter.impl.__GT_LateFn13 = (function com$rpl$specter$impl$__GT_LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12){
return (new com.rpl.specter.impl.LateFn13(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn13, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn13 = (function com$rpl$specter$impl$map__GT_LateFn13(G__51290){
var extmap__4419__auto__ = (function (){var G__51359 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51290,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436)], 0));
if(cljs.core.record_QMARK_(G__51290)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51359);
} else {
return G__51359;
}
})();
return (new com.rpl.specter.impl.LateFn13(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51290),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51290),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn14 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51361,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51365 = k51361;
var G__51365__$1 = (((G__51365 instanceof cljs.core.Keyword))?G__51365.fqn:null);
switch (G__51365__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51361,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51367){
var vec__51368 = p__51367;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51368,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51368,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn14.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50450){
var self__ = this;
var this__47782__auto____$1 = this;
var G__51376 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50450);
var G__51377 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50450);
var G__51378 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50450);
var G__51379 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50450);
var G__51380 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50450);
var G__51381 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50450);
var G__51382 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50450);
var G__51383 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50450);
var G__51384 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50450);
var G__51385 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params50450);
var G__51386 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params50450);
var G__51387 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params50450);
var G__51388 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params50450);
var G__51389 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params50450);
var fexpr__51375 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50450);
return (fexpr__51375.cljs$core$IFn$_invoke$arity$14 ? fexpr__51375.cljs$core$IFn$_invoke$arity$14(G__51376,G__51377,G__51378,G__51379,G__51380,G__51381,G__51382,G__51383,G__51384,G__51385,G__51386,G__51387,G__51388,G__51389) : fexpr__51375.call(null,G__51376,G__51377,G__51378,G__51379,G__51380,G__51381,G__51382,G__51383,G__51384,G__51385,G__51386,G__51387,G__51388,G__51389));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn14{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51360){
var self__ = this;
var G__51360__$1 = this;
return (new cljs.core.RecordIter((0),G__51360__$1,15,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (15 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (448885285 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51362,other51363){
var self__ = this;
var this51362__$1 = this;
return (((!((other51363 == null)))) && ((this51362__$1.constructor === other51363.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.fn,other51363.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg0,other51363.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg1,other51363.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg2,other51363.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg3,other51363.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg4,other51363.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg5,other51363.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg6,other51363.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg7,other51363.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg8,other51363.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg9,other51363.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg10,other51363.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg11,other51363.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg12,other51363.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.arg13,other51363.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51362__$1.__extmap,other51363.__extmap)));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51360){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51397 = cljs.core.keyword_identical_QMARK_;
var expr__51398 = k__4388__auto__;
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(G__51360,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,G__51360,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,G__51360,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,G__51360,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51360,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51360,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51360,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51360,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51360,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51360,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51360,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51360,self__.arg11,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51360,self__.arg12,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51360,self__.arg13,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51397.cljs$core$IFn$_invoke$arity$2 ? pred__51397.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51398) : pred__51397.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51398)))){
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51360,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51360),null));
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
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51360){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn14(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51360,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn14.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn14.getBasis = (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null)], null);
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn14",null,(1),null));
}));

(com.rpl.specter.impl.LateFn14.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn14");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn14.
 */
com.rpl.specter.impl.__GT_LateFn14 = (function com$rpl$specter$impl$__GT_LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13){
return (new com.rpl.specter.impl.LateFn14(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn14, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn14 = (function com$rpl$specter$impl$map__GT_LateFn14(G__51364){
var extmap__4419__auto__ = (function (){var G__51410 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51364,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392)], 0));
if(cljs.core.record_QMARK_(G__51364)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51410);
} else {
return G__51410;
}
})();
return (new com.rpl.specter.impl.LateFn14(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51364),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51364),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn15 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51413,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51421 = k51413;
var G__51421__$1 = (((G__51421 instanceof cljs.core.Keyword))?G__51421.fqn:null);
switch (G__51421__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51413,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51422){
var vec__51423 = p__51422;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51423,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51423,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn15.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50451){
var self__ = this;
var this__47782__auto____$1 = this;
var G__51427 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50451);
var G__51428 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50451);
var G__51429 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50451);
var G__51430 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50451);
var G__51431 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50451);
var G__51432 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50451);
var G__51433 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50451);
var G__51434 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50451);
var G__51435 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50451);
var G__51436 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params50451);
var G__51437 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params50451);
var G__51438 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params50451);
var G__51439 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params50451);
var G__51440 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params50451);
var G__51441 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params50451);
var fexpr__51426 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50451);
return (fexpr__51426.cljs$core$IFn$_invoke$arity$15 ? fexpr__51426.cljs$core$IFn$_invoke$arity$15(G__51427,G__51428,G__51429,G__51430,G__51431,G__51432,G__51433,G__51434,G__51435,G__51436,G__51437,G__51438,G__51439,G__51440,G__51441) : fexpr__51426.call(null,G__51427,G__51428,G__51429,G__51430,G__51431,G__51432,G__51433,G__51434,G__51435,G__51436,G__51437,G__51438,G__51439,G__51440,G__51441));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn15{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51412){
var self__ = this;
var G__51412__$1 = this;
return (new cljs.core.RecordIter((0),G__51412__$1,16,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (16 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (553496616 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51414,other51415){
var self__ = this;
var this51414__$1 = this;
return (((!((other51415 == null)))) && ((this51414__$1.constructor === other51415.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.fn,other51415.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg0,other51415.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg1,other51415.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg2,other51415.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg3,other51415.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg4,other51415.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg5,other51415.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg6,other51415.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg7,other51415.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg8,other51415.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg9,other51415.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg10,other51415.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg11,other51415.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg12,other51415.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg13,other51415.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.arg14,other51415.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51414__$1.__extmap,other51415.__extmap)));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 16, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51412){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51465 = cljs.core.keyword_identical_QMARK_;
var expr__51466 = k__4388__auto__;
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(G__51412,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,G__51412,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,G__51412,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,G__51412,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51412,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51412,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51412,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51412,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51412,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51412,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51412,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51412,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51412,self__.arg12,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51412,self__.arg13,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51412,self__.arg14,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51465.cljs$core$IFn$_invoke$arity$2 ? pred__51465.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51466) : pred__51465.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51466)))){
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51412,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51412),null));
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
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51412){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn15(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__51412,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn15.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn15.getBasis = (function (){
return new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null)], null);
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn15",null,(1),null));
}));

(com.rpl.specter.impl.LateFn15.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn15");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn15.
 */
com.rpl.specter.impl.__GT_LateFn15 = (function com$rpl$specter$impl$__GT_LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14){
return (new com.rpl.specter.impl.LateFn15(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn15, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn15 = (function com$rpl$specter$impl$map__GT_LateFn15(G__51416){
var extmap__4419__auto__ = (function (){var G__51476 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51416,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778)], 0));
if(cljs.core.record_QMARK_(G__51416)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51476);
} else {
return G__51476;
}
})();
return (new com.rpl.specter.impl.LateFn15(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51416),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__51416),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn16 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51479,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51485 = k51479;
var G__51485__$1 = (((G__51485 instanceof cljs.core.Keyword))?G__51485.fqn:null);
switch (G__51485__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51479,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51491){
var vec__51492 = p__51491;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51492,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51492,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn16.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50452){
var self__ = this;
var this__47782__auto____$1 = this;
var G__51499 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50452);
var G__51500 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50452);
var G__51501 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50452);
var G__51502 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50452);
var G__51503 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50452);
var G__51504 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50452);
var G__51505 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50452);
var G__51506 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50452);
var G__51507 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50452);
var G__51508 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params50452);
var G__51509 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params50452);
var G__51510 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params50452);
var G__51511 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params50452);
var G__51512 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params50452);
var G__51513 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params50452);
var G__51514 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params50452);
var fexpr__51498 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50452);
return (fexpr__51498.cljs$core$IFn$_invoke$arity$16 ? fexpr__51498.cljs$core$IFn$_invoke$arity$16(G__51499,G__51500,G__51501,G__51502,G__51503,G__51504,G__51505,G__51506,G__51507,G__51508,G__51509,G__51510,G__51511,G__51512,G__51513,G__51514) : fexpr__51498.call(null,G__51499,G__51500,G__51501,G__51502,G__51503,G__51504,G__51505,G__51506,G__51507,G__51508,G__51509,G__51510,G__51511,G__51512,G__51513,G__51514));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn16{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51478){
var self__ = this;
var G__51478__$1 = this;
return (new cljs.core.RecordIter((0),G__51478__$1,17,new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (17 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-280845773 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51480,other51481){
var self__ = this;
var this51480__$1 = this;
return (((!((other51481 == null)))) && ((this51480__$1.constructor === other51481.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.fn,other51481.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg0,other51481.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg1,other51481.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg2,other51481.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg3,other51481.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg4,other51481.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg5,other51481.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg6,other51481.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg7,other51481.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg8,other51481.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg9,other51481.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg10,other51481.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg11,other51481.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg12,other51481.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg13,other51481.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg14,other51481.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.arg15,other51481.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51480__$1.__extmap,other51481.__extmap)));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 17, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51478){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51524 = cljs.core.keyword_identical_QMARK_;
var expr__51525 = k__4388__auto__;
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(G__51478,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,G__51478,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,G__51478,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,G__51478,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51478,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51478,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51478,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51478,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51478,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51478,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51478,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51478,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51478,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51478,self__.arg13,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51478,self__.arg14,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51478,self__.arg15,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51524.cljs$core$IFn$_invoke$arity$2 ? pred__51524.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51525) : pred__51524.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51525)))){
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__51478,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51478),null));
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
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51478){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn16(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__51478,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn16.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn16.getBasis = (function (){
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null)], null);
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn16",null,(1),null));
}));

(com.rpl.specter.impl.LateFn16.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn16");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn16.
 */
com.rpl.specter.impl.__GT_LateFn16 = (function com$rpl$specter$impl$__GT_LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15){
return (new com.rpl.specter.impl.LateFn16(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn16, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn16 = (function com$rpl$specter$impl$map__GT_LateFn16(G__51482){
var extmap__4419__auto__ = (function (){var G__51555 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51482,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677)], 0));
if(cljs.core.record_QMARK_(G__51482)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51555);
} else {
return G__51555;
}
})();
return (new com.rpl.specter.impl.LateFn16(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__51482),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__51482),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn17 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51558,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51584 = k51558;
var G__51584__$1 = (((G__51584 instanceof cljs.core.Keyword))?G__51584.fqn:null);
switch (G__51584__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51558,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51594){
var vec__51595 = p__51594;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51595,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51595,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn17.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50453){
var self__ = this;
var this__47782__auto____$1 = this;
var G__51601 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50453);
var G__51602 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50453);
var G__51603 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50453);
var G__51604 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50453);
var G__51605 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50453);
var G__51606 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50453);
var G__51607 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50453);
var G__51608 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50453);
var G__51609 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50453);
var G__51610 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params50453);
var G__51611 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params50453);
var G__51612 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params50453);
var G__51613 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params50453);
var G__51614 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params50453);
var G__51615 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params50453);
var G__51616 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params50453);
var G__51617 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params50453);
var fexpr__51600 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50453);
return (fexpr__51600.cljs$core$IFn$_invoke$arity$17 ? fexpr__51600.cljs$core$IFn$_invoke$arity$17(G__51601,G__51602,G__51603,G__51604,G__51605,G__51606,G__51607,G__51608,G__51609,G__51610,G__51611,G__51612,G__51613,G__51614,G__51615,G__51616,G__51617) : fexpr__51600.call(null,G__51601,G__51602,G__51603,G__51604,G__51605,G__51606,G__51607,G__51608,G__51609,G__51610,G__51611,G__51612,G__51613,G__51614,G__51615,G__51616,G__51617));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn17{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51557){
var self__ = this;
var G__51557__$1 = this;
return (new cljs.core.RecordIter((0),G__51557__$1,18,new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (18 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1493409369 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51561,other51562){
var self__ = this;
var this51561__$1 = this;
return (((!((other51562 == null)))) && ((this51561__$1.constructor === other51562.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.fn,other51562.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg0,other51562.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg1,other51562.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg2,other51562.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg3,other51562.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg4,other51562.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg5,other51562.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg6,other51562.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg7,other51562.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg8,other51562.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg9,other51562.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg10,other51562.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg11,other51562.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg12,other51562.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg13,other51562.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg14,other51562.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg15,other51562.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.arg16,other51562.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51561__$1.__extmap,other51562.__extmap)));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51557){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51702 = cljs.core.keyword_identical_QMARK_;
var expr__51703 = k__4388__auto__;
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(G__51557,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,G__51557,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,G__51557,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,G__51557,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51557,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51557,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51557,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51557,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51557,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51557,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51557,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51557,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51557,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51557,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51557,self__.arg14,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51557,self__.arg15,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__51557,self__.arg16,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51702.cljs$core$IFn$_invoke$arity$2 ? pred__51702.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__51703) : pred__51702.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__51703)))){
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__51557,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51557),null));
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
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51557){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn17(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__51557,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn17.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn17.getBasis = (function (){
return new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null)], null);
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn17",null,(1),null));
}));

(com.rpl.specter.impl.LateFn17.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn17");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn17.
 */
com.rpl.specter.impl.__GT_LateFn17 = (function com$rpl$specter$impl$__GT_LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16){
return (new com.rpl.specter.impl.LateFn17(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn17, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn17 = (function com$rpl$specter$impl$map__GT_LateFn17(G__51580){
var extmap__4419__auto__ = (function (){var G__51732 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51580,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546)], 0));
if(cljs.core.record_QMARK_(G__51580)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51732);
} else {
return G__51732;
}
})();
return (new com.rpl.specter.impl.LateFn17(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__51580),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__51580),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn18 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51737,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51742 = k51737;
var G__51742__$1 = (((G__51742 instanceof cljs.core.Keyword))?G__51742.fqn:null);
switch (G__51742__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51737,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51746){
var vec__51750 = p__51746;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51750,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51750,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn18.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50454){
var self__ = this;
var this__47782__auto____$1 = this;
var G__51754 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50454);
var G__51755 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50454);
var G__51756 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50454);
var G__51757 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50454);
var G__51758 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50454);
var G__51759 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50454);
var G__51760 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50454);
var G__51761 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50454);
var G__51762 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50454);
var G__51763 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params50454);
var G__51764 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params50454);
var G__51765 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params50454);
var G__51766 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params50454);
var G__51767 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params50454);
var G__51768 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params50454);
var G__51769 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params50454);
var G__51770 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params50454);
var G__51771 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params50454);
var fexpr__51753 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50454);
return (fexpr__51753.cljs$core$IFn$_invoke$arity$18 ? fexpr__51753.cljs$core$IFn$_invoke$arity$18(G__51754,G__51755,G__51756,G__51757,G__51758,G__51759,G__51760,G__51761,G__51762,G__51763,G__51764,G__51765,G__51766,G__51767,G__51768,G__51769,G__51770,G__51771) : fexpr__51753.call(null,G__51754,G__51755,G__51756,G__51757,G__51758,G__51759,G__51760,G__51761,G__51762,G__51763,G__51764,G__51765,G__51766,G__51767,G__51768,G__51769,G__51770,G__51771));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn18{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51736){
var self__ = this;
var G__51736__$1 = this;
return (new cljs.core.RecordIter((0),G__51736__$1,19,new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (19 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (295131237 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51738,other51739){
var self__ = this;
var this51738__$1 = this;
return (((!((other51739 == null)))) && ((this51738__$1.constructor === other51739.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.fn,other51739.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg0,other51739.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg1,other51739.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg2,other51739.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg3,other51739.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg4,other51739.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg5,other51739.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg6,other51739.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg7,other51739.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg8,other51739.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg9,other51739.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg10,other51739.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg11,other51739.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg12,other51739.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg13,other51739.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg14,other51739.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg15,other51739.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg16,other51739.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.arg17,other51739.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51738__$1.__extmap,other51739.__extmap)));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51736){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51805 = cljs.core.keyword_identical_QMARK_;
var expr__51806 = k__4388__auto__;
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(G__51736,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,G__51736,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,G__51736,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,G__51736,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51736,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51736,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51736,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51736,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51736,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51736,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51736,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51736,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51736,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51736,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51736,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51736,self__.arg15,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__51736,self__.arg16,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__51736,self__.arg17,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51805.cljs$core$IFn$_invoke$arity$2 ? pred__51805.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__51806) : pred__51805.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__51806)))){
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__51736,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51736),null));
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
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51736){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn18(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__51736,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn18.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn18.getBasis = (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null)], null);
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn18",null,(1),null));
}));

(com.rpl.specter.impl.LateFn18.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn18");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn18.
 */
com.rpl.specter.impl.__GT_LateFn18 = (function com$rpl$specter$impl$__GT_LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17){
return (new com.rpl.specter.impl.LateFn18(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn18, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn18 = (function com$rpl$specter$impl$map__GT_LateFn18(G__51741){
var extmap__4419__auto__ = (function (){var G__51826 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51741,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482)], 0));
if(cljs.core.record_QMARK_(G__51741)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51826);
} else {
return G__51826;
}
})();
return (new com.rpl.specter.impl.LateFn18(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__51741),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__51741),null,cljs.core.not_empty(extmap__4419__auto__),null));
});



/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.rpl.specter.impl.LateResolve}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.LateFn19 = (function (fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,__meta,__extmap,__hash){
this.fn = fn;
this.arg0 = arg0;
this.arg1 = arg1;
this.arg2 = arg2;
this.arg3 = arg3;
this.arg4 = arg4;
this.arg5 = arg5;
this.arg6 = arg6;
this.arg7 = arg7;
this.arg8 = arg8;
this.arg9 = arg9;
this.arg10 = arg10;
this.arg11 = arg11;
this.arg12 = arg12;
this.arg13 = arg13;
this.arg14 = arg14;
this.arg15 = arg15;
this.arg16 = arg16;
this.arg17 = arg17;
this.arg18 = arg18;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k51832,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__51840 = k51832;
var G__51840__$1 = (((G__51840 instanceof cljs.core.Keyword))?G__51840.fqn:null);
switch (G__51840__$1) {
case "fn":
return self__.fn;

break;
case "arg0":
return self__.arg0;

break;
case "arg1":
return self__.arg1;

break;
case "arg2":
return self__.arg2;

break;
case "arg3":
return self__.arg3;

break;
case "arg4":
return self__.arg4;

break;
case "arg5":
return self__.arg5;

break;
case "arg6":
return self__.arg6;

break;
case "arg7":
return self__.arg7;

break;
case "arg8":
return self__.arg8;

break;
case "arg9":
return self__.arg9;

break;
case "arg10":
return self__.arg10;

break;
case "arg11":
return self__.arg11;

break;
case "arg12":
return self__.arg12;

break;
case "arg13":
return self__.arg13;

break;
case "arg14":
return self__.arg14;

break;
case "arg15":
return self__.arg15;

break;
case "arg16":
return self__.arg16;

break;
case "arg17":
return self__.arg17;

break;
case "arg18":
return self__.arg18;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51832,else__4383__auto__);

}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__51843){
var vec__51844 = p__51843;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51844,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51844,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.impl.LateFn19.prototype.com$rpl$specter$impl$LateResolve$late_resolve$arity$2 = (function (this__47782__auto__,dynamic_params50455){
var self__ = this;
var this__47782__auto____$1 = this;
var G__51848 = com.rpl.specter.impl.late_resolve(self__.arg0,dynamic_params50455);
var G__51849 = com.rpl.specter.impl.late_resolve(self__.arg1,dynamic_params50455);
var G__51850 = com.rpl.specter.impl.late_resolve(self__.arg2,dynamic_params50455);
var G__51851 = com.rpl.specter.impl.late_resolve(self__.arg3,dynamic_params50455);
var G__51852 = com.rpl.specter.impl.late_resolve(self__.arg4,dynamic_params50455);
var G__51853 = com.rpl.specter.impl.late_resolve(self__.arg5,dynamic_params50455);
var G__51854 = com.rpl.specter.impl.late_resolve(self__.arg6,dynamic_params50455);
var G__51855 = com.rpl.specter.impl.late_resolve(self__.arg7,dynamic_params50455);
var G__51856 = com.rpl.specter.impl.late_resolve(self__.arg8,dynamic_params50455);
var G__51857 = com.rpl.specter.impl.late_resolve(self__.arg9,dynamic_params50455);
var G__51858 = com.rpl.specter.impl.late_resolve(self__.arg10,dynamic_params50455);
var G__51859 = com.rpl.specter.impl.late_resolve(self__.arg11,dynamic_params50455);
var G__51860 = com.rpl.specter.impl.late_resolve(self__.arg12,dynamic_params50455);
var G__51861 = com.rpl.specter.impl.late_resolve(self__.arg13,dynamic_params50455);
var G__51862 = com.rpl.specter.impl.late_resolve(self__.arg14,dynamic_params50455);
var G__51863 = com.rpl.specter.impl.late_resolve(self__.arg15,dynamic_params50455);
var G__51864 = com.rpl.specter.impl.late_resolve(self__.arg16,dynamic_params50455);
var G__51865 = com.rpl.specter.impl.late_resolve(self__.arg17,dynamic_params50455);
var G__51866 = com.rpl.specter.impl.late_resolve(self__.arg18,dynamic_params50455);
var fexpr__51847 = com.rpl.specter.impl.late_resolve(self__.fn,dynamic_params50455);
return (fexpr__51847.cljs$core$IFn$_invoke$arity$19 ? fexpr__51847.cljs$core$IFn$_invoke$arity$19(G__51848,G__51849,G__51850,G__51851,G__51852,G__51853,G__51854,G__51855,G__51856,G__51857,G__51858,G__51859,G__51860,G__51861,G__51862,G__51863,G__51864,G__51865,G__51866) : fexpr__51847.call(null,G__51848,G__51849,G__51850,G__51851,G__51852,G__51853,G__51854,G__51855,G__51856,G__51857,G__51858,G__51859,G__51860,G__51861,G__51862,G__51863,G__51864,G__51865,G__51866));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.impl.LateFn19{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18],null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51831){
var self__ = this;
var G__51831__$1 = this;
return (new cljs.core.RecordIter((0),G__51831__$1,20,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (20 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (151103363 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51833,other51834){
var self__ = this;
var this51833__$1 = this;
return (((!((other51834 == null)))) && ((this51833__$1.constructor === other51834.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.fn,other51834.fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg0,other51834.arg0)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg1,other51834.arg1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg2,other51834.arg2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg3,other51834.arg3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg4,other51834.arg4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg5,other51834.arg5)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg6,other51834.arg6)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg7,other51834.arg7)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg8,other51834.arg8)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg9,other51834.arg9)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg10,other51834.arg10)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg11,other51834.arg11)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg12,other51834.arg12)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg13,other51834.arg13)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg14,other51834.arg14)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg15,other51834.arg15)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg16,other51834.arg16)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg17,other51834.arg17)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.arg18,other51834.arg18)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51833__$1.__extmap,other51834.__extmap)));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 20, [new cljs.core.Keyword(null,"arg13","arg13",1606275392),null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"arg7","arg7",932157509),null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),null,new cljs.core.Keyword(null,"arg8","arg8",123916218),null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),null,new cljs.core.Keyword(null,"arg12","arg12",290681436),null,new cljs.core.Keyword(null,"arg1","arg1",951899358),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__51831){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__51877 = cljs.core.keyword_identical_QMARK_;
var expr__51878 = k__4388__auto__;
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(G__51831,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg0","arg0",1629842355),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,G__51831,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg1","arg1",951899358),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,G__51831,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg2","arg2",1729550917),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,G__51831,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg3","arg3",-1486822496),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,G__51831,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg4","arg4",-831640004),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,G__51831,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg5","arg5",-1648794215),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,G__51831,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg6","arg6",-2052656438),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,G__51831,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg7","arg7",932157509),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,G__51831,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg8","arg8",123916218),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,G__51831,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg9","arg9",-95117905),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,G__51831,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg10","arg10",-1230917517),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,G__51831,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg11","arg11",-379524070),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,G__51831,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg12","arg12",290681436),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,G__51831,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg13","arg13",1606275392),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,G__51831,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg14","arg14",-1870980778),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,G__51831,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg15","arg15",1451926677),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,G__51831,self__.arg16,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg16","arg16",-445557546),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,G__51831,self__.arg17,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg17","arg17",-1072183482),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,G__51831,self__.arg18,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51877.cljs$core$IFn$_invoke$arity$2 ? pred__51877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__51878) : pred__51877.call(null,new cljs.core.Keyword(null,"arg18","arg18",1450507352),expr__51878)))){
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,G__51831,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__51831),null));
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
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg0","arg0",1629842355),self__.arg0,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg1","arg1",951899358),self__.arg1,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg2","arg2",1729550917),self__.arg2,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg3","arg3",-1486822496),self__.arg3,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg4","arg4",-831640004),self__.arg4,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg5","arg5",-1648794215),self__.arg5,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg6","arg6",-2052656438),self__.arg6,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg7","arg7",932157509),self__.arg7,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg8","arg8",123916218),self__.arg8,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg9","arg9",-95117905),self__.arg9,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg10","arg10",-1230917517),self__.arg10,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg11","arg11",-379524070),self__.arg11,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg12","arg12",290681436),self__.arg12,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg13","arg13",1606275392),self__.arg13,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg14","arg14",-1870980778),self__.arg14,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg15","arg15",1451926677),self__.arg15,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg16","arg16",-445557546),self__.arg16,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg17","arg17",-1072183482),self__.arg17,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"arg18","arg18",1450507352),self__.arg18,null))], null),self__.__extmap));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__51831){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.impl.LateFn19(self__.fn,self__.arg0,self__.arg1,self__.arg2,self__.arg3,self__.arg4,self__.arg5,self__.arg6,self__.arg7,self__.arg8,self__.arg9,self__.arg10,self__.arg11,self__.arg12,self__.arg13,self__.arg14,self__.arg15,self__.arg16,self__.arg17,self__.arg18,G__51831,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.impl.LateFn19.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.impl.LateFn19.getBasis = (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null),new cljs.core.Symbol(null,"arg2","arg2",-924884852,null),new cljs.core.Symbol(null,"arg3","arg3",153709031,null),new cljs.core.Symbol(null,"arg4","arg4",808891523,null),new cljs.core.Symbol(null,"arg5","arg5",-8262688,null),new cljs.core.Symbol(null,"arg6","arg6",-412124911,null),new cljs.core.Symbol(null,"arg7","arg7",-1722278260,null),new cljs.core.Symbol(null,"arg8","arg8",1764447745,null),new cljs.core.Symbol(null,"arg9","arg9",1545413622,null),new cljs.core.Symbol(null,"arg10","arg10",409614010,null),new cljs.core.Symbol(null,"arg11","arg11",1261007457,null),new cljs.core.Symbol(null,"arg12","arg12",1931212963,null),new cljs.core.Symbol(null,"arg13","arg13",-1048160377,null),new cljs.core.Symbol(null,"arg14","arg14",-230449251,null),new cljs.core.Symbol(null,"arg15","arg15",-1202509092,null),new cljs.core.Symbol(null,"arg16","arg16",1194973981,null),new cljs.core.Symbol(null,"arg17","arg17",568348045,null),new cljs.core.Symbol(null,"arg18","arg18",-1203928417,null)], null);
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$type = true);

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.impl/LateFn19",null,(1),null));
}));

(com.rpl.specter.impl.LateFn19.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.impl/LateFn19");
}));

/**
 * Positional factory function for com.rpl.specter.impl/LateFn19.
 */
com.rpl.specter.impl.__GT_LateFn19 = (function com$rpl$specter$impl$__GT_LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18){
return (new com.rpl.specter.impl.LateFn19(fn,arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9,arg10,arg11,arg12,arg13,arg14,arg15,arg16,arg17,arg18,null,null,null));
});

/**
 * Factory function for com.rpl.specter.impl/LateFn19, taking a map of keywords to field values.
 */
com.rpl.specter.impl.map__GT_LateFn19 = (function com$rpl$specter$impl$map__GT_LateFn19(G__51836){
var extmap__4419__auto__ = (function (){var G__51900 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51836,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arg0","arg0",1629842355),new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.Keyword(null,"arg4","arg4",-831640004),new cljs.core.Keyword(null,"arg5","arg5",-1648794215),new cljs.core.Keyword(null,"arg6","arg6",-2052656438),new cljs.core.Keyword(null,"arg7","arg7",932157509),new cljs.core.Keyword(null,"arg8","arg8",123916218),new cljs.core.Keyword(null,"arg9","arg9",-95117905),new cljs.core.Keyword(null,"arg10","arg10",-1230917517),new cljs.core.Keyword(null,"arg11","arg11",-379524070),new cljs.core.Keyword(null,"arg12","arg12",290681436),new cljs.core.Keyword(null,"arg13","arg13",1606275392),new cljs.core.Keyword(null,"arg14","arg14",-1870980778),new cljs.core.Keyword(null,"arg15","arg15",1451926677),new cljs.core.Keyword(null,"arg16","arg16",-445557546),new cljs.core.Keyword(null,"arg17","arg17",-1072183482),new cljs.core.Keyword(null,"arg18","arg18",1450507352)], 0));
if(cljs.core.record_QMARK_(G__51836)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51900);
} else {
return G__51900;
}
})();
return (new com.rpl.specter.impl.LateFn19(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg0","arg0",1629842355).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg4","arg4",-831640004).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg5","arg5",-1648794215).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg6","arg6",-2052656438).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg7","arg7",932157509).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg8","arg8",123916218).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg9","arg9",-95117905).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg10","arg10",-1230917517).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg11","arg11",-379524070).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg12","arg12",290681436).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg13","arg13",1606275392).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg14","arg14",-1870980778).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg15","arg15",1451926677).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg16","arg16",-445557546).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg17","arg17",-1072183482).cljs$core$IFn$_invoke$arity$1(G__51836),new cljs.core.Keyword(null,"arg18","arg18",1450507352).cljs$core$IFn$_invoke$arity$1(G__51836),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


com.rpl.specter.impl.late_fn = (function com$rpl$specter$impl$late_fn(afn51908,args51909){
var G__51918 = cljs.core.count(args51909);
switch (G__51918) {
case (0):
return com.rpl.specter.impl.__GT_LateFn0(afn51908);

break;
case (1):
return com.rpl.specter.impl.__GT_LateFn1(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)));

break;
case (2):
return com.rpl.specter.impl.__GT_LateFn2(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)));

break;
case (3):
return com.rpl.specter.impl.__GT_LateFn3(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)));

break;
case (4):
return com.rpl.specter.impl.__GT_LateFn4(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)));

break;
case (5):
return com.rpl.specter.impl.__GT_LateFn5(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)));

break;
case (6):
return com.rpl.specter.impl.__GT_LateFn6(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)));

break;
case (7):
return com.rpl.specter.impl.__GT_LateFn7(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)));

break;
case (8):
return com.rpl.specter.impl.__GT_LateFn8(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)));

break;
case (9):
return com.rpl.specter.impl.__GT_LateFn9(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(8)));

break;
case (10):
return com.rpl.specter.impl.__GT_LateFn10(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(9)));

break;
case (11):
return com.rpl.specter.impl.__GT_LateFn11(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(10)));

break;
case (12):
return com.rpl.specter.impl.__GT_LateFn12(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(11)));

break;
case (13):
return com.rpl.specter.impl.__GT_LateFn13(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(12)));

break;
case (14):
return com.rpl.specter.impl.__GT_LateFn14(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(13)));

break;
case (15):
return com.rpl.specter.impl.__GT_LateFn15(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(14)));

break;
case (16):
return com.rpl.specter.impl.__GT_LateFn16(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(15)));

break;
case (17):
return com.rpl.specter.impl.__GT_LateFn17(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(16)));

break;
case (18):
return com.rpl.specter.impl.__GT_LateFn18(afn51908,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(2)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(3)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(4)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(5)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(6)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(7)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(8)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(9)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(10)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(11)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(12)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(13)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(14)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(15)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(16)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args51909,(17)));

break;
default:
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Cannot have late function with more than 18 args"], 0));

}
});
com.rpl.specter.impl.static_fn_code = (function com$rpl$specter$impl$static_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(com.rpl.specter.impl.__GT_StaticParam(afn),args);
});
com.rpl.specter.impl.dynamic_fn_code = (function com$rpl$specter$impl$dynamic_fn_code(afn,args){
return com.rpl.specter.impl.late_fn(afn,args);
});
com.rpl.specter.impl.dynamic_val_code = (function com$rpl$specter$impl$dynamic_val_code(code,possible_params){
var vec__51954 = cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,code)){
return i;
} else {
return null;
}
}),possible_params);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51954,(0),null);
if((i == null)){
com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Could not find ",code," in possible params ",possible_params], 0));
} else {
}

return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_LocalParam(i),com.rpl.specter.impl.direct_nav_QMARK_(code));
});
com.rpl.specter.impl.static_val_code = (function com$rpl$specter$impl$static_val_code(o){
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.__GT_StaticParam(o),com.rpl.specter.impl.direct_nav_QMARK_(o));
});
com.rpl.specter.impl.dynamic__GT_code = (function com$rpl$specter$impl$dynamic__GT_code(o){
return com.rpl.specter.impl.walk_until(com.rpl.specter.impl.dynamic_param_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),o);
});
com.rpl.specter.impl.resolve_arg_code = (function com$rpl$specter$impl$resolve_arg_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var op = (function (){var G__51965 = o.op;
var G__51966 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__51965,G__51966) : com.rpl.specter.impl.resolve_arg_code.call(null,G__51965,G__51966));
})();
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51957_SHARP_){
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(p1__51957_SHARP_,possible_params) : com.rpl.specter.impl.resolve_arg_code.call(null,p1__51957_SHARP_,possible_params));
}),o.params);
return com.rpl.specter.impl.maybe_direct_nav(com.rpl.specter.impl.dynamic_fn_code(com.rpl.specter.impl.original_obj(op),params),com.rpl.specter.impl.direct_nav_QMARK_(o.op));
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
return com.rpl.specter.impl.dynamic_val_code(o.code,possible_params);
} else {
if((o instanceof com.rpl.specter.impl.DynamicPath)){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(o,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,o,possible_params));
} else {
if((com.rpl.specter.impl.NONE === com.rpl.specter.impl.walk_select(com.rpl.specter.impl.dynamic_param_QMARK_,cljs.core.identity,o))){
return com.rpl.specter.impl.static_val_code(o);
} else {
var G__51967 = com.rpl.specter.impl.__GT_DynamicVal(com.rpl.specter.impl.dynamic__GT_code(o));
var G__51968 = possible_params;
return (com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_arg_code.cljs$core$IFn$_invoke$arity$2(G__51967,G__51968) : com.rpl.specter.impl.resolve_arg_code.call(null,G__51967,G__51968));
}

}
}
}
});
com.rpl.specter.impl.resolve_nav_code = (function com$rpl$specter$impl$resolve_nav_code(o,possible_params){
if((o instanceof com.rpl.specter.impl.DynamicPath)){
var path = o.path;
if(cljs.core.sequential_QMARK_(path)){
var resolved = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51969_SHARP_){
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(p1__51969_SHARP_,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,p1__51969_SHARP_,possible_params));
}),path));
if(cljs.core.empty_QMARK_(resolved)){
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.STAY_STAR_);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(resolved))){
return cljs.core.first(resolved);
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.comp_navs,resolved);

}
}
} else {
return (com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.impl.resolve_nav_code.cljs$core$IFn$_invoke$arity$2(path,possible_params) : com.rpl.specter.impl.resolve_nav_code.call(null,path,possible_params));
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicVal)){
var code = o.code;
var d = com.rpl.specter.impl.dynamic_val_code(code,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(code))){
return d;
} else {
if(((cljs.core.set_QMARK_(code)) || (((com.rpl.specter.impl.fn_invocation_QMARK_(code)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.first(code))))))){
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.pred_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [d], null));

}
}
} else {
if((o instanceof com.rpl.specter.impl.DynamicFunction)){
var res = com.rpl.specter.impl.resolve_arg_code(o,possible_params);
if(cljs.core.truth_(com.rpl.specter.impl.direct_nav_QMARK_(res))){
return res;
} else {
return com.rpl.specter.impl.static_fn_code(com.rpl.specter.impl.coerce_nav,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
}
} else {
return com.rpl.specter.impl.static_val_code(com.rpl.specter.impl.coerce_nav(o));

}
}
}
});
com.rpl.specter.impl.used_locals = (function com$rpl$specter$impl$used_locals(locals_set,form){
var used_locals_cell = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (e){
if(cljs.core.contains_QMARK_(locals_set,e)){
return com.rpl.specter.impl.update_cell_BANG_(used_locals_cell,(function (p1__51970_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__51970_SHARP_,e);
}));
} else {
return e;
}
}),form);

return com.rpl.specter.impl.get_cell(used_locals_cell);
});
com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_ = false;
com.rpl.specter.impl.mk_fn_name_strs = (function com$rpl$specter$impl$mk_fn_name_strs(o){
return clojure.walk.postwalk((function (e){
if(cljs.core.fn_QMARK_(e)){
return cljs.core.re_find(/ .*/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0)));
} else {
return e;
}
}),o);
});
com.rpl.specter.impl._STAR_path_compile_files_STAR_ = false;
com.rpl.specter.impl.mk_dynamic_path_maker = (function com$rpl$specter$impl$mk_dynamic_path_maker(resolved_code,ns_str,used_locals_list,possible_params){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Possible params:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([possible_params], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\nProduced dynamic object:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([com.rpl.specter.impl.mk_fn_name_strs(resolved_code)], 0));

cljs.core.println();
} else {
}

return (function (dynamic_params){
return com.rpl.specter.impl.late_resolve(resolved_code,dynamic_params);
});
});
com.rpl.specter.impl.magic_precompilation = (function com$rpl$specter$impl$magic_precompilation(path,ns_str,used_locals_list,possible_params){
var magic_path = com.rpl.specter.impl.static_combine.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.magic_precompilation_STAR_(path));
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Inline caching debug information"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Input path:",path,"\n"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Processed path:",magic_path,"\n"], 0));
} else {
}

if(com.rpl.specter.impl.rich_nav_QMARK_(magic_path)){
if(cljs.core.truth_(com.rpl.specter.impl._STAR_DEBUG_INLINE_CACHING_STAR_)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Static result:",magic_path], 0));
} else {
}

return com.rpl.specter.impl.__GT_CachedPathInfo(false,magic_path);
} else {
var maker = com.rpl.specter.impl.mk_dynamic_path_maker(com.rpl.specter.impl.resolve_nav_code(com.rpl.specter.impl.__GT_DynamicPath(magic_path),possible_params),ns_str,used_locals_list,possible_params);
return com.rpl.specter.impl.__GT_CachedPathInfo(true,maker);
}
});
com.rpl.specter.impl.compiled_setval_STAR_ = (function com$rpl$specter$impl$compiled_setval_STAR_(path,val,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.fast_constantly(val),structure);
});
com.rpl.specter.impl.compiled_replace_in_STAR_ = (function com$rpl$specter$impl$compiled_replace_in_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54395 = arguments.length;
var i__4737__auto___54396 = (0);
while(true){
if((i__4737__auto___54396 < len__4736__auto___54395)){
args__4742__auto__.push((arguments[i__4737__auto___54396]));

var G__54398 = (i__4737__auto___54396 + (1));
i__4737__auto___54396 = G__54398;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__51989){
var map__51990 = p__51989;
var map__51990__$1 = (((((!((map__51990 == null))))?(((((map__51990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51990):map__51990);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51990__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.compiled_transform_STAR_(path,(function() { 
var G__54411__delegate = function (args){
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(transform_fn,args);
if(cljs.core.truth_(res)){
var vec__51993 = res;
var ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51993,(0),null);
var user_ret = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51993,(1),null);
com.rpl.specter.impl.set_cell_BANG_(state,(function (){var G__51997 = com.rpl.specter.impl.get_cell(state);
var G__51998 = user_ret;
return (merge_fn.cljs$core$IFn$_invoke$arity$2 ? merge_fn.cljs$core$IFn$_invoke$arity$2(G__51997,G__51998) : merge_fn.call(null,G__51997,G__51998));
})());

return ret;
} else {
return cljs.core.last(args);
}
};
var G__54411 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54417__i = 0, G__54417__a = new Array(arguments.length -  0);
while (G__54417__i < G__54417__a.length) {G__54417__a[G__54417__i] = arguments[G__54417__i + 0]; ++G__54417__i;}
  args = new cljs.core.IndexedSeq(G__54417__a,0,null);
} 
return G__54411__delegate.call(this,args);};
G__54411.cljs$lang$maxFixedArity = 0;
G__54411.cljs$lang$applyTo = (function (arglist__54418){
var args = cljs.core.seq(arglist__54418);
return G__54411__delegate(args);
});
G__54411.cljs$core$IFn$_invoke$arity$variadic = G__54411__delegate;
return G__54411;
})()
,structure),com.rpl.specter.impl.get_cell(state)], null);
}));

(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.impl.compiled_replace_in_STAR_.cljs$lang$applyTo = (function (seq51985){
var G__51986 = cljs.core.first(seq51985);
var seq51985__$1 = cljs.core.next(seq51985);
var G__51987 = cljs.core.first(seq51985__$1);
var seq51985__$2 = cljs.core.next(seq51985__$1);
var G__51988 = cljs.core.first(seq51985__$2);
var seq51985__$3 = cljs.core.next(seq51985__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51986,G__51987,G__51988,seq51985__$3);
}));

com.rpl.specter.impl.multi_transform_error_fn = (function com$rpl$specter$impl$multi_transform_error_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54426 = arguments.length;
var i__4737__auto___54427 = (0);
while(true){
if((i__4737__auto___54427 < len__4736__auto___54426)){
args__4742__auto__.push((arguments[i__4737__auto___54427]));

var G__54428 = (i__4737__auto___54427 + (1));
i__4737__auto___54427 = G__54428;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.impl.multi_transform_error_fn.cljs$core$IFn$_invoke$arity$variadic = (function (nav){
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["All navigation in multi-transform must end in 'terminal' ","navigators. Instead navigated to: ",nav], 0));
}));

(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.impl.multi_transform_error_fn.cljs$lang$applyTo = (function (seq52002){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52002));
}));

com.rpl.specter.impl.compiled_multi_transform_STAR_ = (function com$rpl$specter$impl$compiled_multi_transform_STAR_(path,structure){
return com.rpl.specter.impl.compiled_transform_STAR_(path,com.rpl.specter.impl.multi_transform_error_fn,structure);
});

//# sourceMappingURL=com.rpl.specter.impl.js.map
