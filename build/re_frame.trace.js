goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__47298){
var map__47299 = p__47298;
var map__47299__$1 = (((((!((map__47299 == null))))?(((((map__47299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47299):map__47299);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47299__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47299__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47299__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47299__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__47303_47362 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__47304_47363 = null;
var count__47305_47364 = (0);
var i__47306_47365 = (0);
while(true){
if((i__47306_47365 < count__47305_47364)){
var vec__47327_47366 = chunk__47304_47363.cljs$core$IIndexed$_nth$arity$2(null,i__47306_47365);
var k_47367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47327_47366,(0),null);
var cb_47368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47327_47366,(1),null);
try{var G__47331_47370 = cljs.core.deref(re_frame.trace.traces);
(cb_47368.cljs$core$IFn$_invoke$arity$1 ? cb_47368.cljs$core$IFn$_invoke$arity$1(G__47331_47370) : cb_47368.call(null,G__47331_47370));
}catch (e47330){var e_47371 = e47330;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_47367,"while storing",cljs.core.deref(re_frame.trace.traces),e_47371], 0));
}

var G__47376 = seq__47303_47362;
var G__47377 = chunk__47304_47363;
var G__47378 = count__47305_47364;
var G__47379 = (i__47306_47365 + (1));
seq__47303_47362 = G__47376;
chunk__47304_47363 = G__47377;
count__47305_47364 = G__47378;
i__47306_47365 = G__47379;
continue;
} else {
var temp__5735__auto___47380 = cljs.core.seq(seq__47303_47362);
if(temp__5735__auto___47380){
var seq__47303_47381__$1 = temp__5735__auto___47380;
if(cljs.core.chunked_seq_QMARK_(seq__47303_47381__$1)){
var c__4556__auto___47385 = cljs.core.chunk_first(seq__47303_47381__$1);
var G__47386 = cljs.core.chunk_rest(seq__47303_47381__$1);
var G__47387 = c__4556__auto___47385;
var G__47388 = cljs.core.count(c__4556__auto___47385);
var G__47389 = (0);
seq__47303_47362 = G__47386;
chunk__47304_47363 = G__47387;
count__47305_47364 = G__47388;
i__47306_47365 = G__47389;
continue;
} else {
var vec__47337_47391 = cljs.core.first(seq__47303_47381__$1);
var k_47392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47337_47391,(0),null);
var cb_47393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47337_47391,(1),null);
try{var G__47341_47394 = cljs.core.deref(re_frame.trace.traces);
(cb_47393.cljs$core$IFn$_invoke$arity$1 ? cb_47393.cljs$core$IFn$_invoke$arity$1(G__47341_47394) : cb_47393.call(null,G__47341_47394));
}catch (e47340){var e_47396 = e47340;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_47392,"while storing",cljs.core.deref(re_frame.trace.traces),e_47396], 0));
}

var G__47397 = cljs.core.next(seq__47303_47381__$1);
var G__47398 = null;
var G__47399 = (0);
var G__47400 = (0);
seq__47303_47362 = G__47397;
chunk__47304_47363 = G__47398;
count__47305_47364 = G__47399;
i__47306_47365 = G__47400;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
