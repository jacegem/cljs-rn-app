goog.provide('com.rpl.specter.navs');
com.rpl.specter.navs.not_selected_QMARK__STAR_ = (function com$rpl$specter$navs$not_selected_QMARK__STAR_(compiled_path,vals,structure){
return (com.rpl.specter.impl.NONE === com.rpl.specter.impl.compiled_select_any_STAR_.cljs$core$IFn$_invoke$arity$3(compiled_path,vals,structure));
});
com.rpl.specter.navs.selected_QMARK__STAR_ = (function com$rpl$specter$navs$selected_QMARK__STAR_(compiled_path,vals,structure){
return (!(com.rpl.specter.navs.not_selected_QMARK__STAR_(compiled_path,vals,structure)));
});
com.rpl.specter.navs.all_select = (function com$rpl$specter$navs$all_select(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,e){
var ret__47664__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(e) : next_fn.call(null,e));
if((ret__47664__auto__ === com.rpl.specter.impl.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.impl.NONE,structure);
});
com.rpl.specter.navs.queue_QMARK_ = (function com$rpl$specter$navs$queue_QMARK_(coll){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(coll),cljs.core.type(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});

/**
 * @interface
 */
com.rpl.specter.navs.AllTransformProtocol = function(){};

var com$rpl$specter$navs$AllTransformProtocol$all_transform$dyn_54858 = (function (structure,next_fn){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.all_transform[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4429__auto__.call(null,structure,next_fn));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.all_transform["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4426__auto__.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("AllTransformProtocol.all-transform",structure);
}
}
});
com.rpl.specter.navs.all_transform = (function com$rpl$specter$navs$all_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$AllTransformProtocol$all_transform$dyn_54858(structure,next_fn);
}
});

com.rpl.specter.navs.void_transformed_kv_pair_QMARK_ = (function com$rpl$specter$navs$void_transformed_kv_pair_QMARK_(newkv){
return (((newkv === com.rpl.specter.impl.NONE)) || ((cljs.core.count(newkv) < (2))));
});
com.rpl.specter.navs.non_transient_map_all_transform = (function com$rpl$specter$navs$non_transient_map_all_transform(structure,next_fn,empty_map){
return cljs.core.reduce_kv((function (m,k,v){
var newkv = (function (){var G__54296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__54296) : next_fn.call(null,G__54296));
})();
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
}),empty_map,structure);
});
com.rpl.specter.navs.not_NONE_QMARK_ = (function com$rpl$specter$navs$not_NONE_QMARK_(v){
return (!((v === com.rpl.specter.impl.NONE)));
});
com.rpl.specter.navs.all_transform_list = (function com$rpl$specter$navs$all_transform_list(structure,next_fn){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure));
});
com.rpl.specter.navs.all_transform_record = (function com$rpl$specter$navs$all_transform_record(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,kv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,(next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(kv) : next_fn.call(null,kv)));
}),structure,structure);
});
goog.object.set(com.rpl.specter.navs.AllTransformProtocol,"null",true);

goog.object.set(com.rpl.specter.navs.all_transform,"null",(function (structure,next_fn){
return null;
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
var newk = (function (){var G__54309 = cljs.core.key(structure__$1);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__54309) : next_fn.call(null,G__54309));
})();
var newv = (function (){var G__54311 = cljs.core.val(structure__$1);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__54311) : next_fn.call(null,G__54311));
})();
return cljs.core.__GT_MapEntry(newk,newv,null);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
}));

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure__$1);
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform(structure__$1,next_fn,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.non_transient_map_all_transform(structure__$1,next_fn,cljs.core.empty(structure__$1));
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$AllTransformProtocol$all_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,k,v){
var newkv = (function (){var G__54328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__54328) : next_fn.call(null,G__54328));
})();
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
}),cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

goog.object.set(com.rpl.specter.navs.AllTransformProtocol,"_",true);

goog.object.set(com.rpl.specter.navs.all_transform,"_",(function (structure,next_fn){
if(cljs.core.record_QMARK_(structure)){
return com.rpl.specter.navs.all_transform_record(structure,next_fn);
} else {
var empty_structure = cljs.core.empty(structure);
if(((cljs.core.list_QMARK_(empty_structure)) && ((!(com.rpl.specter.navs.queue_QMARK_(empty_structure)))))){
return com.rpl.specter.navs.all_transform_list(structure,next_fn);
} else {
if(cljs.core.map_QMARK_(structure)){
return cljs.core.reduce_kv((function (m,k,v){
var newkv = (function (){var G__54331 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__54331) : next_fn.call(null,G__54331));
})();
if(com.rpl.specter.navs.void_transformed_kv_pair_QMARK_(newkv)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(newkv,(1)));
}
}),empty_structure,structure);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(empty_structure,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(next_fn),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.not_NONE_QMARK_)),structure);

}
}
}
}));

/**
 * @interface
 */
com.rpl.specter.navs.MapTransformProtocol = function(){};

var com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$dyn_54872 = (function (structure,next_fn){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.map_vals_transform[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4429__auto__.call(null,structure,next_fn));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.map_vals_transform["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4426__auto__.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("MapTransformProtocol.map-vals-transform",structure);
}
}
});
com.rpl.specter.navs.map_vals_transform = (function com$rpl$specter$navs$map_vals_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$dyn_54872(structure,next_fn);
}
});

var com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$dyn_54877 = (function (structure,next_fn){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.map_keys_transform[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4429__auto__.call(null,structure,next_fn));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.map_keys_transform["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : m__4426__auto__.call(null,structure,next_fn));
} else {
throw cljs.core.missing_protocol("MapTransformProtocol.map-keys-transform",structure);
}
}
});
com.rpl.specter.navs.map_keys_transform = (function com$rpl$specter$navs$map_keys_transform(structure,next_fn){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 == null)))))){
return structure.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2(structure,next_fn);
} else {
return com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$dyn_54877(structure,next_fn);
}
});

com.rpl.specter.navs.map_vals_non_transient_transform = (function com$rpl$specter$navs$map_vals_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
}),empty_map,structure);
});
com.rpl.specter.navs.map_keys_non_transient_transform = (function com$rpl$specter$navs$map_keys_non_transient_transform(structure,empty_map,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
}),empty_map,structure);
});
goog.object.set(com.rpl.specter.navs.MapTransformProtocol,"null",true);

goog.object.set(com.rpl.specter.navs.map_vals_transform,"null",(function (structure,next_fn){
return null;
}));

goog.object.set(com.rpl.specter.navs.map_keys_transform,"null",(function (structure,next_fn){
return null;
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform(structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
}));

(cljs.core.PersistentArrayMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform(structure__$1,cljs.core.PersistentArrayMap.EMPTY,next_fn);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_vals_non_transient_transform(structure__$1,cljs.core.empty(structure__$1),next_fn);
}));

(cljs.core.PersistentTreeMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return com.rpl.specter.navs.map_keys_non_transient_transform(structure__$1,cljs.core.empty(structure__$1),next_fn);
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_vals_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
}),cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

(cljs.core.PersistentHashMap.prototype.com$rpl$specter$navs$MapTransformProtocol$map_keys_transform$arity$2 = (function (structure,next_fn){
var structure__$1 = this;
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
}),cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),structure__$1));
}));

goog.object.set(com.rpl.specter.navs.MapTransformProtocol,"_",true);

goog.object.set(com.rpl.specter.navs.map_vals_transform,"_",(function (structure,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newv = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((newv === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newv);
}
}),cljs.core.empty(structure),structure);
}));

goog.object.set(com.rpl.specter.navs.map_keys_transform,"_",(function (structure,next_fn){
return cljs.core.reduce_kv((function (m,k,v){
var newk = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((newk === com.rpl.specter.impl.NONE)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,newk,v);
}
}),cljs.core.empty(structure),structure);
}));
com.rpl.specter.navs.srange_select = (function com$rpl$specter$navs$srange_select(structure,start,end,next_fn){
var G__54397 = ((typeof structure === 'string')?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(structure,start,end):cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(structure),start,end));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__54397) : next_fn.call(null,G__54397));
});
com.rpl.specter.navs.srange_transform = com.rpl.specter.impl.srange_transform_STAR_;
com.rpl.specter.navs.extract_basic_filter_fn = (function com$rpl$specter$navs$extract_basic_filter_fn(path){
if(cljs.core.fn_QMARK_(path)){
return path;
} else {
if(((cljs.core.coll_QMARK_(path)) && (cljs.core.every_QMARK_(cljs.core.fn_QMARK_,path)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (combined,afn){
return (function (structure){
var and__4115__auto__ = (combined.cljs$core$IFn$_invoke$arity$1 ? combined.cljs$core$IFn$_invoke$arity$1(structure) : combined.call(null,structure));
if(cljs.core.truth_(and__4115__auto__)){
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(structure) : afn.call(null,structure));
} else {
return and__4115__auto__;
}
});
}),path);
} else {
return null;
}
}
});
com.rpl.specter.navs.if_select = (function com$rpl$specter$navs$if_select(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.select_STAR_((cljs.core.truth_((then_tester.cljs$core$IFn$_invoke$arity$1 ? then_tester.cljs$core$IFn$_invoke$arity$1(structure) : then_tester.call(null,structure)))?then_nav:else_nav),vals,structure,next_fn);
});
com.rpl.specter.navs.if_transform = (function com$rpl$specter$navs$if_transform(vals,structure,next_fn,then_tester,then_nav,else_nav){
return com.rpl.specter.protocols.transform_STAR_((cljs.core.truth_((then_tester.cljs$core$IFn$_invoke$arity$1 ? then_tester.cljs$core$IFn$_invoke$arity$1(structure) : then_tester.call(null,structure)))?then_nav:else_nav),vals,structure,next_fn);
});

/**
 * @interface
 */
com.rpl.specter.navs.AddExtremes = function(){};

var com$rpl$specter$navs$AddExtremes$append_all$dyn_54894 = (function (structure,elements){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.append_all[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4429__auto__.call(null,structure,elements));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.append_all["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4426__auto__.call(null,structure,elements));
} else {
throw cljs.core.missing_protocol("AddExtremes.append-all",structure);
}
}
});
com.rpl.specter.navs.append_all = (function com$rpl$specter$navs$append_all(structure,elements){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$append_all$arity$2(structure,elements);
} else {
return com$rpl$specter$navs$AddExtremes$append_all$dyn_54894(structure,elements);
}
});

var com$rpl$specter$navs$AddExtremes$prepend_all$dyn_54902 = (function (structure,elements){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.prepend_all[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4429__auto__.call(null,structure,elements));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.prepend_all["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(structure,elements) : m__4426__auto__.call(null,structure,elements));
} else {
throw cljs.core.missing_protocol("AddExtremes.prepend-all",structure);
}
}
});
com.rpl.specter.navs.prepend_all = (function com$rpl$specter$navs$prepend_all(structure,elements){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2(structure,elements);
} else {
return com$rpl$specter$navs$AddExtremes$prepend_all$dyn_54902(structure,elements);
}
});

var com$rpl$specter$navs$AddExtremes$append_one$dyn_54909 = (function (structure,elem){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.append_one[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4429__auto__.call(null,structure,elem));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.append_one["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4426__auto__.call(null,structure,elem));
} else {
throw cljs.core.missing_protocol("AddExtremes.append-one",structure);
}
}
});
com.rpl.specter.navs.append_one = (function com$rpl$specter$navs$append_one(structure,elem){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$append_one$arity$2(structure,elem);
} else {
return com$rpl$specter$navs$AddExtremes$append_one$dyn_54909(structure,elem);
}
});

var com$rpl$specter$navs$AddExtremes$prepend_one$dyn_54913 = (function (structure,elem){
var x__4428__auto__ = (((structure == null))?null:structure);
var m__4429__auto__ = (com.rpl.specter.navs.prepend_one[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4429__auto__.call(null,structure,elem));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.prepend_one["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(structure,elem) : m__4426__auto__.call(null,structure,elem));
} else {
throw cljs.core.missing_protocol("AddExtremes.prepend-one",structure);
}
}
});
com.rpl.specter.navs.prepend_one = (function com$rpl$specter$navs$prepend_one(structure,elem){
if((((!((structure == null)))) && ((!((structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 == null)))))){
return structure.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2(structure,elem);
} else {
return com$rpl$specter$navs$AddExtremes$prepend_one$dyn_54913(structure,elem);
}
});

goog.object.set(com.rpl.specter.navs.AddExtremes,"null",true);

goog.object.set(com.rpl.specter.navs.append_all,"null",(function (_,elements){
return elements;
}));

goog.object.set(com.rpl.specter.navs.prepend_all,"null",(function (_,elements){
return elements;
}));

goog.object.set(com.rpl.specter.navs.append_one,"null",(function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
}));

goog.object.set(com.rpl.specter.navs.prepend_one,"null",(function (_,elem){
return (new cljs.core.List(null,elem,null,(1),null));
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,structure__$1,elements);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_all$arity$2 = (function (structure,elements){
var structure__$1 = this;
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var _LT__GT_ = ret;
var _LT__GT___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,_LT__GT_,elements);
var _LT__GT___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,_LT__GT___$1,structure__$1);
return cljs.core.persistent_BANG_(_LT__GT___$2);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$append_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure__$1,elem);
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$AddExtremes$prepend_one$arity$2 = (function (structure,elem){
var structure__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),structure__$1);
}));

goog.object.set(com.rpl.specter.navs.AddExtremes,"_",true);

goog.object.set(com.rpl.specter.navs.append_all,"_",(function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,elements);
}));

goog.object.set(com.rpl.specter.navs.prepend_all,"_",(function (structure,elements){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(elements,structure);
}));

goog.object.set(com.rpl.specter.navs.append_one,"_",(function (structure,elem){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(structure,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null));
}));

goog.object.set(com.rpl.specter.navs.prepend_one,"_",(function (structure,elem){
return cljs.core.cons(elem,structure);
}));

/**
 * @interface
 */
com.rpl.specter.navs.UpdateExtremes = function(){};

var com$rpl$specter$navs$UpdateExtremes$update_first$dyn_54929 = (function (s,afn){
var x__4428__auto__ = (((s == null))?null:s);
var m__4429__auto__ = (com.rpl.specter.navs.update_first[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4429__auto__.call(null,s,afn));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.update_first["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4426__auto__.call(null,s,afn));
} else {
throw cljs.core.missing_protocol("UpdateExtremes.update-first",s);
}
}
});
com.rpl.specter.navs.update_first = (function com$rpl$specter$navs$update_first(s,afn){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 == null)))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2(s,afn);
} else {
return com$rpl$specter$navs$UpdateExtremes$update_first$dyn_54929(s,afn);
}
});

var com$rpl$specter$navs$UpdateExtremes$update_last$dyn_54930 = (function (s,afn){
var x__4428__auto__ = (((s == null))?null:s);
var m__4429__auto__ = (com.rpl.specter.navs.update_last[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4429__auto__.call(null,s,afn));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.update_last["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(s,afn) : m__4426__auto__.call(null,s,afn));
} else {
throw cljs.core.missing_protocol("UpdateExtremes.update-last",s);
}
}
});
com.rpl.specter.navs.update_last = (function com$rpl$specter$navs$update_last(s,afn){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 == null)))))){
return s.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2(s,afn);
} else {
return com$rpl$specter$navs$UpdateExtremes$update_last$dyn_54930(s,afn);
}
});


/**
 * @interface
 */
com.rpl.specter.navs.GetExtremes = function(){};

var com$rpl$specter$navs$GetExtremes$get_first$dyn_54933 = (function (s){
var x__4428__auto__ = (((s == null))?null:s);
var m__4429__auto__ = (com.rpl.specter.navs.get_first[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4429__auto__.call(null,s));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.get_first["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4426__auto__.call(null,s));
} else {
throw cljs.core.missing_protocol("GetExtremes.get-first",s);
}
}
});
com.rpl.specter.navs.get_first = (function com$rpl$specter$navs$get_first(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$GetExtremes$get_first$arity$1 == null)))))){
return s.com$rpl$specter$navs$GetExtremes$get_first$arity$1(s);
} else {
return com$rpl$specter$navs$GetExtremes$get_first$dyn_54933(s);
}
});

var com$rpl$specter$navs$GetExtremes$get_last$dyn_54937 = (function (s){
var x__4428__auto__ = (((s == null))?null:s);
var m__4429__auto__ = (com.rpl.specter.navs.get_last[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4429__auto__.call(null,s));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.get_last["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4426__auto__.call(null,s));
} else {
throw cljs.core.missing_protocol("GetExtremes.get-last",s);
}
}
});
com.rpl.specter.navs.get_last = (function com$rpl$specter$navs$get_last(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$GetExtremes$get_last$arity$1 == null)))))){
return s.com$rpl$specter$navs$GetExtremes$get_last$arity$1(s);
} else {
return com$rpl$specter$navs$GetExtremes$get_last$dyn_54937(s);
}
});


/**
 * @interface
 */
com.rpl.specter.navs.FastEmpty = function(){};

var com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$dyn_54941 = (function (s){
var x__4428__auto__ = (((s == null))?null:s);
var m__4429__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4429__auto__.call(null,s));
} else {
var m__4426__auto__ = (com.rpl.specter.navs.fast_empty_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4426__auto__.call(null,s));
} else {
throw cljs.core.missing_protocol("FastEmpty.fast-empty?",s);
}
}
});
com.rpl.specter.navs.fast_empty_QMARK_ = (function com$rpl$specter$navs$fast_empty_QMARK_(s){
if((((!((s == null)))) && ((!((s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 == null)))))){
return s.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1(s);
} else {
return com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$dyn_54941(s);
}
});



com.rpl.specter.navs.PosNavigator_select_STAR_ = (function com$rpl$specter$navs$PosNavigator_select_STAR_(getter,updater,structure,next_fn){
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
var G__54602 = (getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(structure) : getter.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__54602) : next_fn.call(null,G__54602));
} else {
return com.rpl.specter.impl.NONE;
}
});

com.rpl.specter.navs.PosNavigator_transform_STAR_ = (function com$rpl$specter$navs$PosNavigator_transform_STAR_(getter,updater,structure,next_fn){
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (updater.cljs$core$IFn$_invoke$arity$2 ? updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : updater.call(null,structure,next_fn));
}
});

com.rpl.specter.navs.PosNavigator = com.rpl.specter.impl.direct_nav_obj((function (getter,updater){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs54608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs54608 = (function (getter,updater,meta54609){
this.getter = getter;
this.updater = updater;
this.meta54609 = meta54609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs54608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54610,meta54609__$1){
var self__ = this;
var _54610__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs54608(self__.getter,self__.updater,meta54609__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54610){
var self__ = this;
var _54610__$1 = this;
return self__.meta54609;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54608.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs54608.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
if(cljs.core.not(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return next_fn((self__.getter.cljs$core$IFn$_invoke$arity$1 ? self__.getter.cljs$core$IFn$_invoke$arity$1(structure) : self__.getter.call(null,structure)));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54608.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
if(cljs.core.truth_(com.rpl.specter.navs.fast_empty_QMARK_(structure))){
return structure;
} else {
return (self__.updater.cljs$core$IFn$_invoke$arity$2 ? self__.updater.cljs$core$IFn$_invoke$arity$2(structure,next_fn) : self__.updater.call(null,structure,next_fn));
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"updater","updater",2107748764,null),new cljs.core.Symbol(null,"meta54609","meta54609",-1018600663,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54608.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs54608.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs54608");

(com.rpl.specter.navs.t_com$rpl$specter$navs54608.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs54608");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs54608.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs54608 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs54608(getter__$1,updater__$1,meta54609){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs54608(getter__$1,updater__$1,meta54609));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs54608(getter,updater,null));
}));
com.rpl.specter.navs.update_first_list = (function com$rpl$specter$navs$update_first_list(l,afn){
var newf = (function (){var G__54637 = cljs.core.first(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__54637) : afn.call(null,G__54637));
})();
var restl = cljs.core.rest(l);
if((com.rpl.specter.impl.NONE === newf)){
return restl;
} else {
return cljs.core.cons(newf,restl);
}
});
com.rpl.specter.navs.update_last_list = (function com$rpl$specter$navs$update_last_list(l,afn){
var lastl = (function (){var G__54642 = cljs.core.last(l);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__54642) : afn.call(null,G__54642));
})();
var bl = cljs.core.butlast(l);
if((com.rpl.specter.impl.NONE === lastl)){
if((bl == null)){
return cljs.core.List.EMPTY;
} else {
return bl;
}
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bl,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lastl], null));
}
});
com.rpl.specter.navs.vec_count = (function com$rpl$specter$navs$vec_count(v){
return cljs.core.count(v);
});
com.rpl.specter.navs.transient_vec_count = (function com$rpl$specter$navs$transient_vec_count(v){
return cljs.core.count(v);
});
(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (v,afn){
var v__$1 = this;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
var newv = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(val) : afn.call(null,val));
if((com.rpl.specter.impl.NONE === newv)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v__$1,(1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,(0),newv);
}
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (v,afn){
var v__$1 = this;
var c = (com.rpl.specter.navs.vec_count(v__$1) | (0));
var G__54661 = c;
switch (G__54661) {
case (1):
var vec__54663 = v__$1;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54663,(0),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e) : afn.call(null,e));
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [newe], null);
}

break;
case (2):
var vec__54667 = v__$1;
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54667,(0),null);
var e2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54667,(1),null);
var newe = (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(e2) : afn.call(null,e2));
if((com.rpl.specter.impl.NONE === newe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,newe], null);
}

break;
default:
var i = (c - (1));
var newe = (function (){var G__54672 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,i);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__54672) : afn.call(null,G__54672));
})();
if((com.rpl.specter.impl.NONE === newe)){
return cljs.core.pop(v__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,i,newe);
}

}
}));

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"string",true);

goog.object.set(com.rpl.specter.navs.update_first,"string",(function (s,afn){
var rests = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),cljs.core.count(s));
var newb = (function (){var G__54677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__54677) : afn.call(null,G__54677));
})();
if((com.rpl.specter.impl.NONE === newb)){
return rests;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(newb),rests].join('');
}
}));

goog.object.set(com.rpl.specter.navs.update_last,"string",(function (s,afn){
var last_idx = (cljs.core.count(s) - (1));
var newl = (function (){var G__54681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,last_idx);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__54681) : afn.call(null,G__54681));
})();
var begins = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_idx);
if((com.rpl.specter.impl.NONE === newl)){
return begins;
} else {
return [begins,cljs.core.str.cljs$core$IFn$_invoke$arity$1(newl)].join('');
}
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_first$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry((function (){var G__54687 = cljs.core.key(e__$1);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__54687) : afn.call(null,G__54687));
})(),cljs.core.val(e__$1),null);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$UpdateExtremes$update_last$arity$2 = (function (e,afn){
var e__$1 = this;
return cljs.core.__GT_MapEntry(cljs.core.key(e__$1),(function (){var G__54690 = cljs.core.val(e__$1);
return (afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(G__54690) : afn.call(null,G__54690));
})(),null);
}));

goog.object.set(com.rpl.specter.navs.UpdateExtremes,"_",true);

goog.object.set(com.rpl.specter.navs.update_first,"_",(function (l,val){
return com.rpl.specter.navs.update_first_list(l,val);
}));

goog.object.set(com.rpl.specter.navs.update_last,"_",(function (l,val){
return com.rpl.specter.navs.update_last_list(l,val);
}));
(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,(0));
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (v){
var v__$1 = this;
return cljs.core.peek(v__$1);
}));

goog.object.set(com.rpl.specter.navs.GetExtremes,"_",true);

goog.object.set(com.rpl.specter.navs.get_first,"_",(function (s){
return cljs.core.first(s);
}));

goog.object.set(com.rpl.specter.navs.get_last,"_",(function (s){
return cljs.core.last(s);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$get_first$arity$1 = (function (e){
var e__$1 = this;
return cljs.core.key(e__$1);
}));

(cljs.core.MapEntry.prototype.com$rpl$specter$navs$GetExtremes$get_last$arity$1 = (function (e){
var e__$1 = this;
return cljs.core.val(e__$1);
}));

goog.object.set(com.rpl.specter.navs.GetExtremes,"string",true);

goog.object.set(com.rpl.specter.navs.get_first,"string",(function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0));
}));

goog.object.set(com.rpl.specter.navs.get_last,"string",(function (s){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
}));
goog.object.set(com.rpl.specter.navs.FastEmpty,"null",true);

goog.object.set(com.rpl.specter.navs.fast_empty_QMARK_,"null",(function (_){
return true;
}));

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),com.rpl.specter.navs.vec_count(v__$1));
}));

(cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.TransientVector.prototype.com$rpl$specter$navs$FastEmpty$fast_empty_QMARK_$arity$1 = (function (v){
var v__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),com.rpl.specter.navs.transient_vec_count(v__$1));
}));

goog.object.set(com.rpl.specter.navs.FastEmpty,"_",true);

goog.object.set(com.rpl.specter.navs.fast_empty_QMARK_,"_",(function (s){
return cljs.core.empty_QMARK_(s);
}));
com.rpl.specter.navs.do_keypath_transform = (function com$rpl$specter$navs$do_keypath_transform(vals,structure,key,next_fn){
var newv = (function (){var G__54727 = vals;
var G__54728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__54727,G__54728) : next_fn.call(null,G__54727,G__54728));
})();
if((newv === com.rpl.specter.impl.NONE)){
if(cljs.core.sequential_QMARK_(structure)){
return com.rpl.specter.impl.srange_transform_STAR_(structure,key,(key + (1)),(function (_){
return cljs.core.PersistentVector.EMPTY;
}));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,key);
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(structure,key,newv);
}
});
/**
 * Navigates to the specified key, navigating to nil if it does not exist.
 *        Setting the value to NONE will remove it from the collection.
 */
com.rpl.specter.navs.keypath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs54734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs54734 = (function (key,meta54735){
this.key = key;
this.meta54735 = meta54735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs54734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54736,meta54735__$1){
var self__ = this;
var _54736__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs54734(self__.key,meta54735__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54736){
var self__ = this;
var _54736__$1 = this;
return self__.meta54735;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54734.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs54734.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__54743 = vals;
var G__54744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__54743,G__54744) : next_fn.call(null,G__54743,G__54744));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54734.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.key,next_fn);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta54735","meta54735",-215482176,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54734.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs54734.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs54734");

(com.rpl.specter.navs.t_com$rpl$specter$navs54734.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs54734");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs54734.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs54734 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs54734(key__$1,meta54735){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs54734(key__$1,meta54735));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs54734(key,null));
}));
/**
 * Navigates to the key only if it exists in the map. Setting the value to NONE
 *        will remove it from the collection.
 */
com.rpl.specter.navs.must_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (k){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs54748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs54748 = (function (k,meta54749){
this.k = k;
this.meta54749 = meta54749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs54748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54750,meta54749__$1){
var self__ = this;
var _54750__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs54748(self__.k,meta54749__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54750){
var self__ = this;
var _54750__$1 = this;
return self__.meta54749;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54748.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs54748.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
var G__54756 = vals;
var G__54757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.k);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__54756,G__54757) : next_fn.call(null,G__54756,G__54757));
} else {
return com.rpl.specter.impl.NONE;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54748.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.k)){
return com.rpl.specter.navs.do_keypath_transform(vals,structure,self__.k,next_fn);
} else {
return structure;
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"meta54749","meta54749",-1217420065,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54748.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs54748.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs54748");

(com.rpl.specter.navs.t_com$rpl$specter$navs54748.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs54748");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs54748.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs54748 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs54748(k__$1,meta54749){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs54748(k__$1,meta54749));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs54748(k,null));
}));
com.rpl.specter.navs.nthpath_STAR_ = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.navs !== 'undefined') && (typeof com.rpl.specter.navs.t_com$rpl$specter$navs54774 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.navs.t_com$rpl$specter$navs54774 = (function (i,meta54775){
this.i = i;
this.meta54775 = meta54775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.navs.t_com$rpl$specter$navs54774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54776,meta54775__$1){
var self__ = this;
var _54776__$1 = this;
return (new com.rpl.specter.navs.t_com$rpl$specter$navs54774(self__.i,meta54775__$1));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54776){
var self__ = this;
var _54776__$1 = this;
return self__.meta54775;
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54774.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.navs.t_com$rpl$specter$navs54774.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__54784 = vals;
var G__54785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__54784,G__54785) : next_fn.call(null,G__54784,G__54785));
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54774.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(structure)){
var newv = (function (){var G__54787 = vals;
var G__54788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__54787,G__54788) : next_fn.call(null,G__54787,G__54788));
})();
if((newv === com.rpl.specter.impl.NONE)){
return com.rpl.specter.impl.srange_transform_STAR_(structure,self__.i,(self__.i + (1)),(function (_){
return cljs.core.PersistentVector.EMPTY;
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(structure,self__.i,newv);
}
} else {
return com.rpl.specter.impl.srange_transform_STAR_(structure,self__.i,(self__.i + (1)),(function (p__54790){
var vec__54792 = p__54790;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54792,(0),null);
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,e) : next_fn.call(null,vals,e));
if((v === com.rpl.specter.impl.NONE)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}));
}
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta54775","meta54775",647569939,null)], null);
}));

(com.rpl.specter.navs.t_com$rpl$specter$navs54774.cljs$lang$type = true);

(com.rpl.specter.navs.t_com$rpl$specter$navs54774.cljs$lang$ctorStr = "com.rpl.specter.navs/t_com$rpl$specter$navs54774");

(com.rpl.specter.navs.t_com$rpl$specter$navs54774.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter.navs/t_com$rpl$specter$navs54774");
}));

/**
 * Positional factory function for com.rpl.specter.navs/t_com$rpl$specter$navs54774.
 */
com.rpl.specter.navs.__GT_t_com$rpl$specter$navs54774 = (function com$rpl$specter$navs$__GT_t_com$rpl$specter$navs54774(i__$1,meta54775){
return (new com.rpl.specter.navs.t_com$rpl$specter$navs54774(i__$1,meta54775));
});

}

return (new com.rpl.specter.navs.t_com$rpl$specter$navs54774(i,null));
}));

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
com.rpl.specter.navs.SrangeEndFunction = (function (end_fn,__meta,__extmap,__hash){
this.end_fn = end_fn;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k54799,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__54808 = k54799;
var G__54808__$1 = (((G__54808 instanceof cljs.core.Keyword))?G__54808.fqn:null);
switch (G__54808__$1) {
case "end-fn":
return self__.end_fn;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54799,else__4383__auto__);

}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__54812){
var vec__54815 = p__54812;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54815,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54815,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.rpl.specter.navs.SrangeEndFunction{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn],null))], null),self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54798){
var self__ = this;
var G__54798__$1 = this;
return (new cljs.core.RecordIter((0),G__54798__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-674086206 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54800,other54801){
var self__ = this;
var this54800__$1 = this;
return (((!((other54801 == null)))) && ((this54800__$1.constructor === other54801.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54800__$1.end_fn,other54801.end_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54800__$1.__extmap,other54801.__extmap)));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-fn","end-fn",54055684),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__54798){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__54838 = cljs.core.keyword_identical_QMARK_;
var expr__54839 = k__4388__auto__;
if(cljs.core.truth_((pred__54838.cljs$core$IFn$_invoke$arity$2 ? pred__54838.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-fn","end-fn",54055684),expr__54839) : pred__54838.call(null,new cljs.core.Keyword(null,"end-fn","end-fn",54055684),expr__54839)))){
return (new com.rpl.specter.navs.SrangeEndFunction(G__54798,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__54798),null));
}
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-fn","end-fn",54055684),self__.end_fn,null))], null),self__.__extmap));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__54798){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.rpl.specter.navs.SrangeEndFunction(self__.end_fn,G__54798,self__.__extmap,self__.__hash));
}));

(com.rpl.specter.navs.SrangeEndFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.rpl.specter.navs.SrangeEndFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"end-fn","end-fn",1694587211,null)], null);
}));

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$type = true);

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.rpl.specter.navs/SrangeEndFunction",null,(1),null));
}));

(com.rpl.specter.navs.SrangeEndFunction.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.rpl.specter.navs/SrangeEndFunction");
}));

/**
 * Positional factory function for com.rpl.specter.navs/SrangeEndFunction.
 */
com.rpl.specter.navs.__GT_SrangeEndFunction = (function com$rpl$specter$navs$__GT_SrangeEndFunction(end_fn){
return (new com.rpl.specter.navs.SrangeEndFunction(end_fn,null,null,null));
});

/**
 * Factory function for com.rpl.specter.navs/SrangeEndFunction, taking a map of keywords to field values.
 */
com.rpl.specter.navs.map__GT_SrangeEndFunction = (function com$rpl$specter$navs$map__GT_SrangeEndFunction(G__54804){
var extmap__4419__auto__ = (function (){var G__54846 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54804,new cljs.core.Keyword(null,"end-fn","end-fn",54055684));
if(cljs.core.record_QMARK_(G__54804)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54846);
} else {
return G__54846;
}
})();
return (new com.rpl.specter.navs.SrangeEndFunction(new cljs.core.Keyword(null,"end-fn","end-fn",54055684).cljs$core$IFn$_invoke$arity$1(G__54804),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

com.rpl.specter.navs.invoke_end_fn = (function com$rpl$specter$navs$invoke_end_fn(end_fn,structure,start){
if((end_fn instanceof com.rpl.specter.navs.SrangeEndFunction)){
var fexpr__54850 = end_fn.end_fn;
return (fexpr__54850.cljs$core$IFn$_invoke$arity$2 ? fexpr__54850.cljs$core$IFn$_invoke$arity$2(structure,start) : fexpr__54850.call(null,structure,start));
} else {
return (end_fn.cljs$core$IFn$_invoke$arity$1 ? end_fn.cljs$core$IFn$_invoke$arity$1(structure) : end_fn.call(null,structure));
}
});

//# sourceMappingURL=com.rpl.specter.navs.js.map
