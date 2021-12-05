goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__44359__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__44359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44360__i = 0, G__44360__a = new Array(arguments.length -  0);
while (G__44360__i < G__44360__a.length) {G__44360__a[G__44360__i] = arguments[G__44360__i + 0]; ++G__44360__i;}
  args = new cljs.core.IndexedSeq(G__44360__a,0,null);
} 
return G__44359__delegate.call(this,args);};
G__44359.cljs$lang$maxFixedArity = 0;
G__44359.cljs$lang$applyTo = (function (arglist__44365){
var args = cljs.core.seq(arglist__44365);
return G__44359__delegate(args);
});
G__44359.cljs$core$IFn$_invoke$arity$variadic = G__44359__delegate;
return G__44359;
})()
);

(o.error = (function() { 
var G__44366__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__44366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44367__i = 0, G__44367__a = new Array(arguments.length -  0);
while (G__44367__i < G__44367__a.length) {G__44367__a[G__44367__i] = arguments[G__44367__i + 0]; ++G__44367__i;}
  args = new cljs.core.IndexedSeq(G__44367__a,0,null);
} 
return G__44366__delegate.call(this,args);};
G__44366.cljs$lang$maxFixedArity = 0;
G__44366.cljs$lang$applyTo = (function (arglist__44368){
var args = cljs.core.seq(arglist__44368);
return G__44366__delegate(args);
});
G__44366.cljs$core$IFn$_invoke$arity$variadic = G__44366__delegate;
return G__44366;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
