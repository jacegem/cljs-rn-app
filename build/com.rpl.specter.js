goog.provide('com.rpl.specter');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__55954__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__55954 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55955__i = 0, G__55955__a = new Array(arguments.length -  0);
while (G__55955__i < G__55955__a.length) {G__55955__a[G__55955__i] = arguments[G__55955__i + 0]; ++G__55955__i;}
  args = new cljs.core.IndexedSeq(G__55955__a,0,null);
} 
return G__55954__delegate.call(this,args);};
G__55954.cljs$lang$maxFixedArity = 0;
G__55954.cljs$lang$applyTo = (function (arglist__55956){
var args = cljs.core.seq(arglist__55956);
return G__55954__delegate(args);
});
G__55954.cljs$core$IFn$_invoke$arity$variadic = G__55954__delegate;
return G__55954;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55957 = arguments.length;
var i__4737__auto___55959 = (0);
while(true){
if((i__4737__auto___55959 < len__4736__auto___55957)){
args__4742__auto__.push((arguments[i__4737__auto___55959]));

var G__55960 = (i__4737__auto___55959 + (1));
i__4737__auto___55959 = G__55960;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq54921){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54921));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__54931 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__54932 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__54931,G__54932) : com.rpl.specter.compiled_select.call(null,G__54931,G__54932));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__54935 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__54936 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__54935,G__54936) : com.rpl.specter.compiled_select_one.call(null,G__54935,G__54936));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__54939 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__54940 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__54939,G__54940) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__54939,G__54940));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__54942 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__54943 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__54942,G__54943) : com.rpl.specter.compiled_select_first.call(null,G__54942,G__54943));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__54949 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__54950 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__54949,G__54950) : com.rpl.specter.compiled_select_any.call(null,G__54949,G__54950));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__54951 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__54952 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__54951,G__54952) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__54951,G__54952));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__54954 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__54955 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__54954,G__54955) : com.rpl.specter.compiled_traverse.call(null,G__54954,G__54955));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__54958 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__54958) : com.rpl.specter.compiled_traverse_all.call(null,G__54958));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__54963 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__54964 = transform_fn;
var G__54965 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__54963,G__54964,G__54965) : com.rpl.specter.compiled_transform.call(null,G__54963,G__54964,G__54965));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__54968 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__54969 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__54968,G__54969) : com.rpl.specter.compiled_multi_transform.call(null,G__54968,G__54969));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__54973 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__54974 = val;
var G__54975 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__54973,G__54974,G__54975) : com.rpl.specter.compiled_setval.call(null,G__54973,G__54974,G__54975));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55970 = arguments.length;
var i__4737__auto___55971 = (0);
while(true){
if((i__4737__auto___55971 < len__4736__auto___55970)){
args__4742__auto__.push((arguments[i__4737__auto___55971]));

var G__55974 = (i__4737__auto___55971 + (1));
i__4737__auto___55971 = G__55974;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__54984){
var map__54985 = p__54984;
var map__54985__$1 = (((((!((map__54985 == null))))?(((((map__54985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54985):map__54985);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54985__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__54987 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__54988 = transform_fn;
var G__54989 = structure;
var G__54990 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__54991 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__54987,G__54988,G__54989,G__54990,G__54991) : com.rpl.specter.compiled_replace_in.call(null,G__54987,G__54988,G__54989,G__54990,G__54991));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq54977){
var G__54978 = cljs.core.first(seq54977);
var seq54977__$1 = cljs.core.next(seq54977);
var G__54979 = cljs.core.first(seq54977__$1);
var seq54977__$2 = cljs.core.next(seq54977__$1);
var G__54980 = cljs.core.first(seq54977__$2);
var seq54977__$3 = cljs.core.next(seq54977__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54978,G__54979,G__54980,seq54977__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
/**
 * Turns a navigator that takes one argument into a navigator that takes
 *        many arguments and uses the same navigator with each argument. There
 *        is no performance cost to using this. See implementation of `keypath`
 */
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__55981__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__55981 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55982__i = 0, G__55982__a = new Array(arguments.length -  0);
while (G__55982__i < G__55982__a.length) {G__55982__a[G__55982__i] = arguments[G__55982__i + 0]; ++G__55982__i;}
  args = new cljs.core.IndexedSeq(G__55982__a,0,null);
} 
return G__55981__delegate.call(this,args);};
G__55981.cljs$lang$maxFixedArity = 0;
G__55981.cljs$lang$applyTo = (function (arglist__55983){
var args = cljs.core.seq(arglist__55983);
return G__55981__delegate(args);
});
G__55981.cljs$core$IFn$_invoke$arity$variadic = G__55981__delegate;
return G__55981;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;


com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter54999 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter54999 = (function (meta55000){
this.meta55000 = meta55000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter54999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55001,meta55000__$1){
var self__ = this;
var _55001__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter54999(meta55000__$1));
}));

(com.rpl.specter.t_com$rpl$specter54999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55001){
var self__ = this;
var _55001__$1 = this;
return self__.meta55000;
}));

(com.rpl.specter.t_com$rpl$specter54999.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter54999.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter54999.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter54999.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55000","meta55000",-2120353799,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter54999.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter54999.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter54999");

(com.rpl.specter.t_com$rpl$specter54999.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter54999");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter54999.
 */
com.rpl.specter.__GT_t_com$rpl$specter54999 = (function com$rpl$specter$__GT_t_com$rpl$specter54999(meta55000){
return (new com.rpl.specter.t_com$rpl$specter54999(meta55000));
});

}

return (new com.rpl.specter.t_com$rpl$specter54999(null));
})()
;
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;
/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55003 = (function (afn,meta55004){
this.afn = afn;
this.meta55004 = meta55004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55005,meta55004__$1){
var self__ = this;
var _55005__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55003(self__.afn,meta55004__$1));
}));

(com.rpl.specter.t_com$rpl$specter55003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55005){
var self__ = this;
var _55005__$1 = this;
return self__.meta55004;
}));

(com.rpl.specter.t_com$rpl$specter55003.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55003.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter55003.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter55003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta55004","meta55004",-1139738631,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55003.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55003.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55003");

(com.rpl.specter.t_com$rpl$specter55003.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55003");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55003.
 */
com.rpl.specter.__GT_t_com$rpl$specter55003 = (function com$rpl$specter$__GT_t_com$rpl$specter55003(afn__$1,meta55004){
return (new com.rpl.specter.t_com$rpl$specter55003(afn__$1,meta55004));
});

}

return (new com.rpl.specter.t_com$rpl$specter55003(afn,null));
}));
/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55009 = (function (afn,meta55010){
this.afn = afn;
this.meta55010 = meta55010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55011,meta55010__$1){
var self__ = this;
var _55011__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55009(self__.afn,meta55010__$1));
}));

(com.rpl.specter.t_com$rpl$specter55009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55011){
var self__ = this;
var _55011__$1 = this;
return self__.meta55010;
}));

(com.rpl.specter.t_com$rpl$specter55009.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55009.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter55009.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter55009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta55010","meta55010",1632005208,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55009.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55009.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55009");

(com.rpl.specter.t_com$rpl$specter55009.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55009");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55009.
 */
com.rpl.specter.__GT_t_com$rpl$specter55009 = (function com$rpl$specter$__GT_t_com$rpl$specter55009(afn__$1,meta55010){
return (new com.rpl.specter.t_com$rpl$specter55009(afn__$1,meta55010));
});

}

return (new com.rpl.specter.t_com$rpl$specter55009(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__55016 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__55016) : com.rpl.specter.terminal.call(null,G__55016));
});


com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55017 = (function (meta55018){
this.meta55018 = meta55018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55019,meta55018__$1){
var self__ = this;
var _55019__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55017(meta55018__$1));
}));

(com.rpl.specter.t_com$rpl$specter55017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55019){
var self__ = this;
var _55019__$1 = this;
return self__.meta55018;
}));

(com.rpl.specter.t_com$rpl$specter55017.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55017.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55017.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55018","meta55018",521085292,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55017.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55017.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55017");

(com.rpl.specter.t_com$rpl$specter55017.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55017");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55017.
 */
com.rpl.specter.__GT_t_com$rpl$specter55017 = (function com$rpl$specter$__GT_t_com$rpl$specter55017(meta55018){
return (new com.rpl.specter.t_com$rpl$specter55017(meta55018));
});

}

return (new com.rpl.specter.t_com$rpl$specter55017(null));
})()
;


com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55025 = (function (meta55026){
this.meta55026 = meta55026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55027,meta55026__$1){
var self__ = this;
var _55027__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55025(meta55026__$1));
}));

(com.rpl.specter.t_com$rpl$specter55025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55027){
var self__ = this;
var _55027__$1 = this;
return self__.meta55026;
}));

(com.rpl.specter.t_com$rpl$specter55025.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55025.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55025.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter55025.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55026","meta55026",1397143509,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55025.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55025.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55025");

(com.rpl.specter.t_com$rpl$specter55025.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55025");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55025.
 */
com.rpl.specter.__GT_t_com$rpl$specter55025 = (function com$rpl$specter$__GT_t_com$rpl$specter55025(meta55026){
return (new com.rpl.specter.t_com$rpl$specter55025(meta55026));
});

}

return (new com.rpl.specter.t_com$rpl$specter55025(null));
})()
;


com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,v){
var ret__47664__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__47664__auto__ === com.rpl.specter.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55028 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55028 = (function (meta55029){
this.meta55029 = meta55029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55030,meta55029__$1){
var self__ = this;
var _55030__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55028(meta55029__$1));
}));

(com.rpl.specter.t_com$rpl$specter55028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55030){
var self__ = this;
var _55030__$1 = this;
return self__.meta55029;
}));

(com.rpl.specter.t_com$rpl$specter55028.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55028.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,v){
var ret__47664__auto__ = next_fn(v);
if((ret__47664__auto__ === com.rpl.specter.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter55028.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55029","meta55029",-1355048685,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55028.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55028.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55028");

(com.rpl.specter.t_com$rpl$specter55028.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55028");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55028.
 */
com.rpl.specter.__GT_t_com$rpl$specter55028 = (function com$rpl$specter$__GT_t_com$rpl$specter55028(meta55029){
return (new com.rpl.specter.t_com$rpl$specter55028(meta55029));
});

}

return (new com.rpl.specter.t_com$rpl$specter55028(null));
})()
;


com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,k){
var ret__47664__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__47664__auto__ === com.rpl.specter.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55039 = (function (meta55040){
this.meta55040 = meta55040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55041,meta55040__$1){
var self__ = this;
var _55041__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55039(meta55040__$1));
}));

(com.rpl.specter.t_com$rpl$specter55039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55041){
var self__ = this;
var _55041__$1 = this;
return self__.meta55040;
}));

(com.rpl.specter.t_com$rpl$specter55039.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55039.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,k){
var ret__47664__auto__ = next_fn(k);
if((ret__47664__auto__ === com.rpl.specter.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter55039.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55040","meta55040",899718352,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55039.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55039.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55039");

(com.rpl.specter.t_com$rpl$specter55039.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55039");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55039.
 */
com.rpl.specter.__GT_t_com$rpl$specter55039 = (function com$rpl$specter$__GT_t_com$rpl$specter55039(meta55040){
return (new com.rpl.specter.t_com$rpl$specter55039(meta55040));
});

}

return (new com.rpl.specter.t_com$rpl$specter55039(null));
})()
;
com.rpl.specter.VAL = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55047 = (function (meta55048){
this.meta55048 = meta55048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55049,meta55048__$1){
var self__ = this;
var _55049__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55047(meta55048__$1));
}));

(com.rpl.specter.t_com$rpl$specter55047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55049){
var self__ = this;
var _55049__$1 = this;
return self__.meta55048;
}));

(com.rpl.specter.t_com$rpl$specter55047.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55047.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__53219__auto__,vals__53220__auto__,structure,next_fn__53221__auto__){
var self__ = this;
var this__53219__auto____$1 = this;
var G__55050 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__53220__auto__,structure);
var G__55051 = structure;
return (next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2(G__55050,G__55051) : next_fn__53221__auto__.call(null,G__55050,G__55051));
}));

(com.rpl.specter.t_com$rpl$specter55047.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__53219__auto__,vals__53220__auto__,structure,next_fn__53221__auto__){
var self__ = this;
var this__53219__auto____$1 = this;
var G__55052 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__53220__auto__,structure);
var G__55053 = structure;
return (next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2(G__55052,G__55053) : next_fn__53221__auto__.call(null,G__55052,G__55053));
}));

(com.rpl.specter.t_com$rpl$specter55047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55048","meta55048",-1652545275,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55047.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55047.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55047");

(com.rpl.specter.t_com$rpl$specter55047.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55047");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55047.
 */
com.rpl.specter.__GT_t_com$rpl$specter55047 = (function com$rpl$specter$__GT_t_com$rpl$specter55047(meta55048){
return (new com.rpl.specter.t_com$rpl$specter55047(meta55048));
});

}

return (new com.rpl.specter.t_com$rpl$specter55047(null));
})()
;
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));


com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__55054 = structure;
var G__55055 = s;
var G__55056 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__55057 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__55054,G__55055,G__55056,G__55057) : com.rpl.specter.navs.srange_transform.call(null,G__55054,G__55055,G__55056,G__55057));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55058 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55058 = (function (start_index_fn,end_index_fn,meta55059){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta55059 = meta55059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55060,meta55059__$1){
var self__ = this;
var _55060__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55058(self__.start_index_fn,self__.end_index_fn,meta55059__$1));
}));

(com.rpl.specter.t_com$rpl$specter55058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55060){
var self__ = this;
var _55060__$1 = this;
return self__.meta55059;
}));

(com.rpl.specter.t_com$rpl$specter55058.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55058.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55058.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__55061 = structure;
var G__55062 = s;
var G__55063 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__55064 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__55061,G__55062,G__55063,G__55064) : com.rpl.specter.navs.srange_transform.call(null,G__55061,G__55062,G__55063,G__55064));
}));

(com.rpl.specter.t_com$rpl$specter55058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta55059","meta55059",-227373818,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55058.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55058.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55058");

(com.rpl.specter.t_com$rpl$specter55058.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55058");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55058.
 */
com.rpl.specter.__GT_t_com$rpl$specter55058 = (function com$rpl$specter$__GT_t_com$rpl$specter55058(start_index_fn__$1,end_index_fn__$1,meta55059){
return (new com.rpl.specter.t_com$rpl$specter55058(start_index_fn__$1,end_index_fn__$1,meta55059));
});

}

return (new com.rpl.specter.t_com$rpl$specter55058(start_index_fn,end_index_fn,null));
}));


com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55065 = (function (start,end,meta55066){
this.start = start;
this.end = end;
this.meta55066 = meta55066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55067,meta55066__$1){
var self__ = this;
var _55067__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55065(self__.start,self__.end,meta55066__$1));
}));

(com.rpl.specter.t_com$rpl$specter55065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55067){
var self__ = this;
var _55067__$1 = this;
return self__.meta55066;
}));

(com.rpl.specter.t_com$rpl$specter55065.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55065.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55065.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter55065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta55066","meta55066",574868693,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55065.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55065.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55065");

(com.rpl.specter.t_com$rpl$specter55065.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55065");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55065.
 */
com.rpl.specter.__GT_t_com$rpl$specter55065 = (function com$rpl$specter$__GT_t_com$rpl$specter55065(start__$1,end__$1,meta55066){
return (new com.rpl.specter.t_com$rpl$specter55065(start__$1,end__$1,meta55066));
});

}

return (new com.rpl.specter.t_com$rpl$specter55065(start,end,null));
}));


com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,p__55074){
var vec__55075 = p__55074;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55075,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55075,(1),null);
var ret__47664__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__47664__auto__ === com.rpl.specter.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55082 = (function (pred,meta55083){
this.pred = pred;
this.meta55083 = meta55083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55084,meta55083__$1){
var self__ = this;
var _55084__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55082(self__.pred,meta55083__$1));
}));

(com.rpl.specter.t_com$rpl$specter55082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55084){
var self__ = this;
var _55084__$1 = this;
return self__.meta55083;
}));

(com.rpl.specter.t_com$rpl$specter55082.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55082.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,p__55089){
var vec__55090 = p__55089;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55090,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55090,(1),null);
var ret__47664__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__47664__auto__ === com.rpl.specter.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter55082.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta55083","meta55083",1143130579,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55082.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55082.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55082");

(com.rpl.specter.t_com$rpl$specter55082.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55082");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55082.
 */
com.rpl.specter.__GT_t_com$rpl$specter55082 = (function com$rpl$specter$__GT_t_com$rpl$specter55082(pred__$1,meta55083){
return (new com.rpl.specter.t_com$rpl$specter55082(pred__$1,meta55083));
});

}

return (new com.rpl.specter.t_com$rpl$specter55082(pred,null));
}));


com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__55101 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55101) : next_fn.call(null,G__55101));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__55107 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55107) : next_fn.call(null,G__55107));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55108 = (function (meta55109){
this.meta55109 = meta55109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55110,meta55109__$1){
var self__ = this;
var _55110__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55108(meta55109__$1));
}));

(com.rpl.specter.t_com$rpl$specter55108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55110){
var self__ = this;
var _55110__$1 = this;
return self__.meta55109;
}));

(com.rpl.specter.t_com$rpl$specter55108.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55108.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter55108.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter55108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55109","meta55109",600952909,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55108.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55108.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55108");

(com.rpl.specter.t_com$rpl$specter55108.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55108");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55108.
 */
com.rpl.specter.__GT_t_com$rpl$specter55108 = (function com$rpl$specter$__GT_t_com$rpl$specter55108(meta55109){
return (new com.rpl.specter.t_com$rpl$specter55108(meta55109));
});

}

return (new com.rpl.specter.t_com$rpl$specter55108(null));
})()
;


com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__55114 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55114) : next_fn.call(null,G__55114));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__55118 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55118) : next_fn.call(null,G__55118));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55119 = (function (meta55120){
this.meta55120 = meta55120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55121,meta55120__$1){
var self__ = this;
var _55121__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55119(meta55120__$1));
}));

(com.rpl.specter.t_com$rpl$specter55119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55121){
var self__ = this;
var _55121__$1 = this;
return self__.meta55120;
}));

(com.rpl.specter.t_com$rpl$specter55119.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55119.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter55119.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter55119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55120","meta55120",-945995454,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55119.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55119.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55119");

(com.rpl.specter.t_com$rpl$specter55119.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55119");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55119.
 */
com.rpl.specter.__GT_t_com$rpl$specter55119 = (function com$rpl$specter$__GT_t_com$rpl$specter55119(meta55120){
return (new com.rpl.specter.t_com$rpl$specter55119(meta55120));
});

}

return (new com.rpl.specter.t_com$rpl$specter55119(null));
})()
;


com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55128 = (function (meta55129){
this.meta55129 = meta55129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55130,meta55129__$1){
var self__ = this;
var _55130__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55128(meta55129__$1));
}));

(com.rpl.specter.t_com$rpl$specter55128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55130){
var self__ = this;
var _55130__$1 = this;
return self__.meta55129;
}));

(com.rpl.specter.t_com$rpl$specter55128.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55128.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter55128.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter55128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55129","meta55129",589421959,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55128.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55128.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55128");

(com.rpl.specter.t_com$rpl$specter55128.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55128");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55128.
 */
com.rpl.specter.__GT_t_com$rpl$specter55128 = (function com$rpl$specter$__GT_t_com$rpl$specter55128(meta55129){
return (new com.rpl.specter.t_com$rpl$specter55128(meta55129));
});

}

return (new com.rpl.specter.t_com$rpl$specter55128(null));
})()
;


com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55135 = (function (meta55136){
this.meta55136 = meta55136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55137,meta55136__$1){
var self__ = this;
var _55137__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55135(meta55136__$1));
}));

(com.rpl.specter.t_com$rpl$specter55135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55137){
var self__ = this;
var _55137__$1 = this;
return self__.meta55136;
}));

(com.rpl.specter.t_com$rpl$specter55135.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55135.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter55135.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter55135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55136","meta55136",1512289377,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55135.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55135.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55135");

(com.rpl.specter.t_com$rpl$specter55135.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55135");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55135.
 */
com.rpl.specter.__GT_t_com$rpl$specter55135 = (function com$rpl$specter$__GT_t_com$rpl$specter55135(meta55136){
return (new com.rpl.specter.t_com$rpl$specter55135(meta55136));
});

}

return (new com.rpl.specter.t_com$rpl$specter55135(null));
})()
;


com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55144 = (function (meta55145){
this.meta55145 = meta55145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55146,meta55145__$1){
var self__ = this;
var _55146__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55144(meta55145__$1));
}));

(com.rpl.specter.t_com$rpl$specter55144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55146){
var self__ = this;
var _55146__$1 = this;
return self__.meta55145;
}));

(com.rpl.specter.t_com$rpl$specter55144.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55144.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter55144.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter55144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55145","meta55145",-896646374,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55144.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55144.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55144");

(com.rpl.specter.t_com$rpl$specter55144.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55144");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55144.
 */
com.rpl.specter.__GT_t_com$rpl$specter55144 = (function com$rpl$specter$__GT_t_com$rpl$specter55144(meta55145){
return (new com.rpl.specter.t_com$rpl$specter55144(meta55145));
});

}

return (new com.rpl.specter.t_com$rpl$specter55144(null));
})()
;


com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__55150 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55150) : next_fn.call(null,G__55150));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55151 = (function (aset,meta55152){
this.aset = aset;
this.meta55152 = meta55152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55153,meta55152__$1){
var self__ = this;
var _55153__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55151(self__.aset,meta55152__$1));
}));

(com.rpl.specter.t_com$rpl$specter55151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55153){
var self__ = this;
var _55153__$1 = this;
return self__.meta55152;
}));

(com.rpl.specter.t_com$rpl$specter55151.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55151.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter55151.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter55151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta55152","meta55152",77472220,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55151.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55151.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55151");

(com.rpl.specter.t_com$rpl$specter55151.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55151");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55151.
 */
com.rpl.specter.__GT_t_com$rpl$specter55151 = (function com$rpl$specter$__GT_t_com$rpl$specter55151(aset__$1,meta55152){
return (new com.rpl.specter.t_com$rpl$specter55151(aset__$1,meta55152));
});

}

return (new com.rpl.specter.t_com$rpl$specter55151(aset,null));
}));


com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__55166 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55166) : next_fn.call(null,G__55166));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55171 = (function (m_keys,meta55172){
this.m_keys = m_keys;
this.meta55172 = meta55172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55173,meta55172__$1){
var self__ = this;
var _55173__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55171(self__.m_keys,meta55172__$1));
}));

(com.rpl.specter.t_com$rpl$specter55171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55173){
var self__ = this;
var _55173__$1 = this;
return self__.meta55172;
}));

(com.rpl.specter.t_com$rpl$specter55171.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55171.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter55171.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter55171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta55172","meta55172",1254450505,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55171.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55171.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55171");

(com.rpl.specter.t_com$rpl$specter55171.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55171");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55171.
 */
com.rpl.specter.__GT_t_com$rpl$specter55171 = (function com$rpl$specter$__GT_t_com$rpl$specter55171(m_keys__$1,meta55172){
return (new com.rpl.specter.t_com$rpl$specter55171(m_keys__$1,meta55172));
});

}

return (new com.rpl.specter.t_com$rpl$specter55171(m_keys,null));
}));
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56072__delegate = function (path){
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55189 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55189 = (function (path,late,meta55190){
this.path = path;
this.late = late;
this.meta55190 = meta55190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55191,meta55190__$1){
var self__ = this;
var _55191__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55189(self__.path,self__.late,meta55190__$1));
}));

(com.rpl.specter.t_com$rpl$specter55189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55191){
var self__ = this;
var _55191__$1 = this;
return self__.meta55190;
}));

(com.rpl.specter.t_com$rpl$specter55189.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55189.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter55189.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__55199 = self__.late;
var G__55200 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__55201 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__55199,G__55200,G__55201) : com.rpl.specter.compiled_transform.call(null,G__55199,G__55200,G__55201));
}));

(com.rpl.specter.t_com$rpl$specter55189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta55190","meta55190",-341382797,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55189.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55189.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55189");

(com.rpl.specter.t_com$rpl$specter55189.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55189");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55189.
 */
com.rpl.specter.__GT_t_com$rpl$specter55189 = (function com$rpl$specter$__GT_t_com$rpl$specter55189(path__$1,late__$1,meta55190){
return (new com.rpl.specter.t_com$rpl$specter55189(path__$1,late__$1,meta55190));
});

}

return (new com.rpl.specter.t_com$rpl$specter55189(path,late,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
};
var G__56072 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__56073__i = 0, G__56073__a = new Array(arguments.length -  0);
while (G__56073__i < G__56073__a.length) {G__56073__a[G__56073__i] = arguments[G__56073__i + 0]; ++G__56073__i;}
  path = new cljs.core.IndexedSeq(G__56073__a,0,null);
} 
return G__56072__delegate.call(this,path);};
G__56072.cljs$lang$maxFixedArity = 0;
G__56072.cljs$lang$applyTo = (function (arglist__56075){
var path = cljs.core.seq(arglist__56075);
return G__56072__delegate(path);
});
G__56072.cljs$core$IFn$_invoke$arity$variadic = G__56072__delegate;
return G__56072;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55209 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55209 = (function (key,meta55210){
this.key = key;
this.meta55210 = meta55210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55211,meta55210__$1){
var self__ = this;
var _55211__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55209(self__.key,meta55210__$1));
}));

(com.rpl.specter.t_com$rpl$specter55209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55211){
var self__ = this;
var _55211__$1 = this;
return self__.meta55210;
}));

(com.rpl.specter.t_com$rpl$specter55209.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55209.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter55209.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter55209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta55210","meta55210",-2113528279,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55209.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55209.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55209");

(com.rpl.specter.t_com$rpl$specter55209.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55209");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55209.
 */
com.rpl.specter.__GT_t_com$rpl$specter55209 = (function com$rpl$specter$__GT_t_com$rpl$specter55209(key__$1,meta55210){
return (new com.rpl.specter.t_com$rpl$specter55209(key__$1,meta55210));
});

}

return (new com.rpl.specter.t_com$rpl$specter55209(key,null));
}));
/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55224 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55224 = (function (elem,meta55225){
this.elem = elem;
this.meta55225 = meta55225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55226,meta55225__$1){
var self__ = this;
var _55226__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55224(self__.elem,meta55225__$1));
}));

(com.rpl.specter.t_com$rpl$specter55224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55226){
var self__ = this;
var _55226__$1 = this;
return self__.meta55225;
}));

(com.rpl.specter.t_com$rpl$specter55224.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55224.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter55224.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter55224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta55225","meta55225",427573725,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55224.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55224.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55224");

(com.rpl.specter.t_com$rpl$specter55224.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55224");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55224.
 */
com.rpl.specter.__GT_t_com$rpl$specter55224 = (function com$rpl$specter$__GT_t_com$rpl$specter55224(elem__$1,meta55225){
return (new com.rpl.specter.t_com$rpl$specter55224(elem__$1,meta55225));
});

}

return (new com.rpl.specter.t_com$rpl$specter55224(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));
/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55244 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55244 = (function (index,meta55245){
this.index = index;
this.meta55245 = meta55245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55246,meta55245__$1){
var self__ = this;
var _55246__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55244(self__.index,meta55245__$1));
}));

(com.rpl.specter.t_com$rpl$specter55244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55246){
var self__ = this;
var _55246__$1 = this;
return self__.meta55245;
}));

(com.rpl.specter.t_com$rpl$specter55244.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55244.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter55244.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__53229__auto__ = com.rpl.specter.pathcache55255;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55256 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.srange,new cljs.core.Var(function(){return com.rpl.specter.srange;},new cljs.core.Symbol("com.rpl.specter","srange","com.rpl.specter/srange",-978851939,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"srange","srange",-1324254972,null),"com/rpl/specter.cljc",9,1,755,758,cljs.core.List.EMPTY,"Navigates to the subsequence bound by the indexes start (inclusive)\n          and end (exclusive)",(cljs.core.truth_(com.rpl.specter.srange)?com.rpl.specter.srange.cljs$lang$test:null)])),new cljs.core.Symbol(null,"srange","srange",-1324254972,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null)),com.rpl.specter.impl.__GT_LocalSym(self__.index,new cljs.core.Symbol(null,"index","index",108845612,null))], null),cljs.core.list(new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"srange","srange",-1324254972,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"index","index",108845612,null)], null));
com.rpl.specter.pathcache55255 = info55256;

return info55256;
})():info__53229__auto__);
var precompiled55257 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55261 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.srange,self__.index,self__.index], null);
return (precompiled55257.cljs$core$IFn$_invoke$arity$1 ? precompiled55257.cljs$core$IFn$_invoke$arity$1(G__55261) : precompiled55257.call(null,G__55261));
} else {
return precompiled55257;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),structure);
}
}));

(com.rpl.specter.t_com$rpl$specter55244.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta55245","meta55245",2053838529,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55244.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55244.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55244");

(com.rpl.specter.t_com$rpl$specter55244.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55244");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55244.
 */
com.rpl.specter.__GT_t_com$rpl$specter55244 = (function com$rpl$specter$__GT_t_com$rpl$specter55244(index__$1,meta55245){
return (new com.rpl.specter.t_com$rpl$specter55244(index__$1,meta55245));
});

}

return (new com.rpl.specter.t_com$rpl$specter55244(index,null));
}));
/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55271 = (function (i,meta55272){
this.i = i;
this.meta55272 = meta55272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55273,meta55272__$1){
var self__ = this;
var _55273__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55271(self__.i,meta55272__$1));
}));

(com.rpl.specter.t_com$rpl$specter55271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55273){
var self__ = this;
var _55273__$1 = this;
return self__.meta55272;
}));

(com.rpl.specter.t_com$rpl$specter55271.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55271.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter55271.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__56085 = (j - (1));
var G__56086 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__56085;
s = G__56086;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__56087 = (j + (1));
var G__56088 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__56087;
s = G__56088;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__53229__auto__ = com.rpl.specter.pathcache55288;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55289 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,968,971,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache55288 = info55289;

return info55289;
})():info__53229__auto__);
var precompiled55290 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55295 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled55290.cljs$core$IFn$_invoke$arity$1 ? precompiled55290.cljs$core$IFn$_invoke$arity$1(G__55295) : precompiled55290.call(null,G__55295));
} else {
return precompiled55290;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__53229__auto__ = com.rpl.specter.pathcache55297;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55298 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache55297 = info55298;

return info55298;
})():info__53229__auto__);
var precompiled55299 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55304 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled55299.cljs$core$IFn$_invoke$arity$1 ? precompiled55299.cljs$core$IFn$_invoke$arity$1(G__55304) : precompiled55299.call(null,G__55304));
} else {
return precompiled55299;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter55271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta55272","meta55272",-1141855103,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55271.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55271.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55271");

(com.rpl.specter.t_com$rpl$specter55271.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55271");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55271.
 */
com.rpl.specter.__GT_t_com$rpl$specter55271 = (function com$rpl$specter$__GT_t_com$rpl$specter55271(i__$1,meta55272){
return (new com.rpl.specter.t_com$rpl$specter55271(i__$1,meta55272));
});

}

return (new com.rpl.specter.t_com$rpl$specter55271(i,null));
}));


com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,e){
var ret__47664__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__55319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55319) : next_fn.call(null,G__55319));
})()
;
if((ret__47664__auto__ === com.rpl.specter.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__55324 = (function (){var G__55327 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55327) : next_fn.call(null,G__55327));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55324,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55324,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__53229__auto__ = com.rpl.specter.pathcache55331;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55332 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__55313_SHARP_){
return (p1__55313_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__55314_SHARP_){
return (p1__55314_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache55331 = info55332;

return info55332;
})():info__53229__auto__);
var precompiled55333 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55339 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__55313_SHARP_){
return (p1__55313_SHARP_ >= (curri + (1)));
}),(function (p1__55314_SHARP_){
return (p1__55314_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__55313_SHARP_){
return (p1__55313_SHARP_ >= (curri + (1)));
}),(function (p1__55314_SHARP_){
return (p1__55314_SHARP_ <= newi);
})], null);
return (precompiled55333.cljs$core$IFn$_invoke$arity$1 ? precompiled55333.cljs$core$IFn$_invoke$arity$1(G__55339) : precompiled55333.call(null,G__55339));
} else {
return precompiled55333;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__53229__auto__ = com.rpl.specter.pathcache55341;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55342 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache55341 = info55342;

return info55342;
})():info__53229__auto__);
var precompiled55343 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled55343.cljs$core$IFn$_invoke$arity$1 ? precompiled55343.cljs$core$IFn$_invoke$arity$1(G__55348) : precompiled55343.call(null,G__55348));
} else {
return precompiled55343;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__53229__auto__ = com.rpl.specter.pathcache55351;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55352 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache55351 = info55352;

return info55352;
})():info__53229__auto__);
var precompiled55353 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled55353.cljs$core$IFn$_invoke$arity$1 ? precompiled55353.cljs$core$IFn$_invoke$arity$1(G__55356) : precompiled55353.call(null,G__55356));
} else {
return precompiled55353;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55360 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55360 = (function (start,meta55361){
this.start = start;
this.meta55361 = meta55361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55362,meta55361__$1){
var self__ = this;
var _55362__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55360(self__.start,meta55361__$1));
}));

(com.rpl.specter.t_com$rpl$specter55360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55362){
var self__ = this;
var _55362__$1 = this;
return self__.meta55361;
}));

(com.rpl.specter.t_com$rpl$specter55360.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55360.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,e){
var ret__47664__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__47664__auto__ === com.rpl.specter.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter55360.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__55377 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55377,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55377,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__53229__auto__ = com.rpl.specter.pathcache55383;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55384 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__55313_SHARP_){
return (p1__55313_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__55314_SHARP_){
return (p1__55314_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__55313#","p1__55313#",1259792187,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__55314#","p1__55314#",-2118250906,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache55383 = info55384;

return info55384;
})():info__53229__auto__);
var precompiled55385 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55393 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__55313_SHARP_){
return (p1__55313_SHARP_ >= (curri + (1)));
}),(function (p1__55314_SHARP_){
return (p1__55314_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__55313_SHARP_){
return (p1__55313_SHARP_ >= (curri + (1)));
}),(function (p1__55314_SHARP_){
return (p1__55314_SHARP_ <= newi);
})], null);
return (precompiled55385.cljs$core$IFn$_invoke$arity$1 ? precompiled55385.cljs$core$IFn$_invoke$arity$1(G__55393) : precompiled55385.call(null,G__55393));
} else {
return precompiled55385;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__53229__auto__ = com.rpl.specter.pathcache55398;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55399 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,983,986,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache55398 = info55399;

return info55399;
})():info__53229__auto__);
var precompiled55400 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55408 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled55400.cljs$core$IFn$_invoke$arity$1 ? precompiled55400.cljs$core$IFn$_invoke$arity$1(G__55408) : precompiled55400.call(null,G__55408));
} else {
return precompiled55400;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__53229__auto__ = com.rpl.specter.pathcache55410;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55411 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,963,965,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache55410 = info55411;

return info55411;
})():info__53229__auto__);
var precompiled55412 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55418 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled55412.cljs$core$IFn$_invoke$arity$1 ? precompiled55412.cljs$core$IFn$_invoke$arity$1(G__55418) : precompiled55412.call(null,G__55418));
} else {
return precompiled55412;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter55360.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta55361","meta55361",-519649130,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55360.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55360.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55360");

(com.rpl.specter.t_com$rpl$specter55360.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55360");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55360.
 */
com.rpl.specter.__GT_t_com$rpl$specter55360 = (function com$rpl$specter$__GT_t_com$rpl$specter55360(start__$1,meta55361){
return (new com.rpl.specter.t_com$rpl$specter55360(start__$1,meta55361));
});

}

return (new com.rpl.specter.t_com$rpl$specter55360(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));
/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55432 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55432 = (function (afn,meta55434){
this.afn = afn;
this.meta55434 = meta55434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55435,meta55434__$1){
var self__ = this;
var _55435__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55432(self__.afn,meta55434__$1));
}));

(com.rpl.specter.t_com$rpl$specter55432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55435){
var self__ = this;
var _55435__$1 = this;
return self__.meta55434;
}));

(com.rpl.specter.t_com$rpl$specter55432.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55432.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__55445 = vals;
var G__55446 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__55445,G__55446) : next_fn.call(null,G__55445,G__55446));
}));

(com.rpl.specter.t_com$rpl$specter55432.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__55451 = vals;
var G__55452 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__55451,G__55452) : next_fn.call(null,G__55451,G__55452));
}));

(com.rpl.specter.t_com$rpl$specter55432.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta55434","meta55434",1161299009,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55432.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55432.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55432");

(com.rpl.specter.t_com$rpl$specter55432.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55432");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55432.
 */
com.rpl.specter.__GT_t_com$rpl$specter55432 = (function com$rpl$specter$__GT_t_com$rpl$specter55432(afn__$1,meta55434){
return (new com.rpl.specter.t_com$rpl$specter55432(afn__$1,meta55434));
});

}

return (new com.rpl.specter.t_com$rpl$specter55432(afn,null));
}));


com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__55468 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55468) : next_fn.call(null,G__55468));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__55473 = (function (){var G__55474 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55474) : next_fn.call(null,G__55474));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__55473) : unparse_fn.call(null,G__55473));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55478 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55478 = (function (parse_fn,unparse_fn,meta55479){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta55479 = meta55479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55480,meta55479__$1){
var self__ = this;
var _55480__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55478(self__.parse_fn,self__.unparse_fn,meta55479__$1));
}));

(com.rpl.specter.t_com$rpl$specter55478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55480){
var self__ = this;
var _55480__$1 = this;
return self__.meta55479;
}));

(com.rpl.specter.t_com$rpl$specter55478.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55478.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter55478.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var G__55495 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__55495) : self__.unparse_fn.call(null,G__55495));
}));

(com.rpl.specter.t_com$rpl$specter55478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta55479","meta55479",1452354722,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55478.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55478.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55478");

(com.rpl.specter.t_com$rpl$specter55478.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55478");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55478.
 */
com.rpl.specter.__GT_t_com$rpl$specter55478 = (function com$rpl$specter$__GT_t_com$rpl$specter55478(parse_fn__$1,unparse_fn__$1,meta55479){
return (new com.rpl.specter.t_com$rpl$specter55478(parse_fn__$1,unparse_fn__$1,meta55479));
});

}

return (new com.rpl.specter.t_com$rpl$specter55478(parse_fn,unparse_fn,null));
}));


com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__55506 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55506) : next_fn.call(null,G__55506));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55513 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55513 = (function (meta55514){
this.meta55514 = meta55514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55515,meta55514__$1){
var self__ = this;
var _55515__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55513(meta55514__$1));
}));

(com.rpl.specter.t_com$rpl$specter55513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55515){
var self__ = this;
var _55515__$1 = this;
return self__.meta55514;
}));

(com.rpl.specter.t_com$rpl$specter55513.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55513.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter55513.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter55513.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55514","meta55514",-1615107487,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55513.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55513.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55513");

(com.rpl.specter.t_com$rpl$specter55513.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55513");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55513.
 */
com.rpl.specter.__GT_t_com$rpl$specter55513 = (function com$rpl$specter$__GT_t_com$rpl$specter55513(meta55514){
return (new com.rpl.specter.t_com$rpl$specter55513(meta55514));
});

}

return (new com.rpl.specter.t_com$rpl$specter55513(null));
})()
;


com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,s){
var ret__47664__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__47664__auto__ === com.rpl.specter.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55540 = (function (re,meta55541){
this.re = re;
this.meta55541 = meta55541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55542,meta55541__$1){
var self__ = this;
var _55542__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55540(self__.re,meta55541__$1));
}));

(com.rpl.specter.t_com$rpl$specter55540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55542){
var self__ = this;
var _55542__$1 = this;
return self__.meta55541;
}));

(com.rpl.specter.t_com$rpl$specter55540.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55540.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__47662__auto__,s){
var ret__47664__auto__ = next_fn(s);
if((ret__47664__auto__ === com.rpl.specter.NONE)){
return curr__47662__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__47664__auto__)){
return cljs.core.reduced(ret__47664__auto__);
} else {
return ret__47664__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter55540.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta55541","meta55541",1753301878,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55540.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55540.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55540");

(com.rpl.specter.t_com$rpl$specter55540.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55540");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55540.
 */
com.rpl.specter.__GT_t_com$rpl$specter55540 = (function com$rpl$specter$__GT_t_com$rpl$specter55540(re__$1,meta55541){
return (new com.rpl.specter.t_com$rpl$specter55540(re__$1,meta55541));
});

}

return (new com.rpl.specter.t_com$rpl$specter55540(re,null));
}));
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56143__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return afn;
} else {
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55556 = (function (path,temp__5733__auto__,late,meta55557){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta55557 = meta55557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55558,meta55557__$1){
var self__ = this;
var _55558__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55556(self__.path,self__.temp__5733__auto__,self__.late,meta55557__$1));
}));

(com.rpl.specter.t_com$rpl$specter55556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55558){
var self__ = this;
var _55558__$1 = this;
return self__.meta55557;
}));

(com.rpl.specter.t_com$rpl$specter55556.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55556.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__55552_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__55552_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55556.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__55553_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__55553_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta55557","meta55557",-715522940,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55556.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55556.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55556");

(com.rpl.specter.t_com$rpl$specter55556.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55556");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55556.
 */
com.rpl.specter.__GT_t_com$rpl$specter55556 = (function com$rpl$specter$__GT_t_com$rpl$specter55556(path__$1,temp__5733__auto____$1,late__$1,meta55557){
return (new com.rpl.specter.t_com$rpl$specter55556(path__$1,temp__5733__auto____$1,late__$1,meta55557));
});

}

return (new com.rpl.specter.t_com$rpl$specter55556(path,temp__5733__auto__,late,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
}
};
var G__56143 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__56150__i = 0, G__56150__a = new Array(arguments.length -  0);
while (G__56150__i < G__56150__a.length) {G__56150__a[G__56150__i] = arguments[G__56150__i + 0]; ++G__56150__i;}
  path = new cljs.core.IndexedSeq(G__56150__a,0,null);
} 
return G__56143__delegate.call(this,path);};
G__56143.cljs$lang$maxFixedArity = 0;
G__56143.cljs$lang$applyTo = (function (arglist__56151){
var path = cljs.core.seq(arglist__56151);
return G__56143__delegate(path);
});
G__56143.cljs$core$IFn$_invoke$arity$variadic = G__56143__delegate;
return G__56143;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56152__delegate = function (path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55573 = (function (path,temp__5733__auto__,late,meta55574){
this.path = path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late = late;
this.meta55574 = meta55574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55575,meta55574__$1){
var self__ = this;
var _55575__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55573(self__.path,self__.temp__5733__auto__,self__.late,meta55574__$1));
}));

(com.rpl.specter.t_com$rpl$specter55573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55575){
var self__ = this;
var _55575__$1 = this;
return self__.meta55574;
}));

(com.rpl.specter.t_com$rpl$specter55573.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55573.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__55569_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__55569_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55573.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__55570_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__55570_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta55574","meta55574",-267460909,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55573.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55573.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55573");

(com.rpl.specter.t_com$rpl$specter55573.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55573");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55573.
 */
com.rpl.specter.__GT_t_com$rpl$specter55573 = (function com$rpl$specter$__GT_t_com$rpl$specter55573(path__$1,temp__5733__auto____$1,late__$1,meta55574){
return (new com.rpl.specter.t_com$rpl$specter55573(path__$1,temp__5733__auto____$1,late__$1,meta55574));
});

}

return (new com.rpl.specter.t_com$rpl$specter55573(path,temp__5733__auto__,late,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
}
};
var G__56152 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__56158__i = 0, G__56158__a = new Array(arguments.length -  0);
while (G__56158__i < G__56158__a.length) {G__56158__a[G__56158__i] = arguments[G__56158__i + 0]; ++G__56158__i;}
  path = new cljs.core.IndexedSeq(G__56158__a,0,null);
} 
return G__56152__delegate.call(this,path);};
G__56152.cljs$lang$maxFixedArity = 0;
G__56152.cljs$lang$applyTo = (function (arglist__56160){
var path = cljs.core.seq(arglist__56160);
return G__56152__delegate(path);
});
G__56152.cljs$core$IFn$_invoke$arity$variadic = G__56152__delegate;
return G__56152;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56163__delegate = function (path){
var G__55580 = com.rpl.specter.ALL;
var G__55581 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__55580,G__55581) : com.rpl.specter.subselect.call(null,G__55580,G__55581));
};
var G__56163 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__56164__i = 0, G__56164__a = new Array(arguments.length -  0);
while (G__56164__i < G__56164__a.length) {G__56164__a[G__56164__i] = arguments[G__56164__i + 0]; ++G__56164__i;}
  path = new cljs.core.IndexedSeq(G__56164__a,0,null);
} 
return G__56163__delegate.call(this,path);};
G__56163.cljs$lang$maxFixedArity = 0;
G__56163.cljs$lang$applyTo = (function (arglist__56165){
var path = cljs.core.seq(arglist__56165);
return G__56163__delegate(path);
});
G__56163.cljs$core$IFn$_invoke$arity$variadic = G__56163__delegate;
return G__56163;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55582 = (function (path,update_fn,late,late_fn,meta55583){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta55583 = meta55583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55584,meta55583__$1){
var self__ = this;
var _55584__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55582(self__.path,self__.update_fn,self__.late,self__.late_fn,meta55583__$1));
}));

(com.rpl.specter.t_com$rpl$specter55582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55584){
var self__ = this;
var _55584__$1 = this;
return self__.meta55583;
}));

(com.rpl.specter.t_com$rpl$specter55582.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55582.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter55582.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter55582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta55583","meta55583",-2000718461,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55582.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55582.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55582");

(com.rpl.specter.t_com$rpl$specter55582.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55582");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55582.
 */
com.rpl.specter.__GT_t_com$rpl$specter55582 = (function com$rpl$specter$__GT_t_com$rpl$specter55582(path__$1,update_fn__$1,late__$1,late_fn__$1,meta55583){
return (new com.rpl.specter.t_com$rpl$specter55582(path__$1,update_fn__$1,late__$1,late_fn__$1,meta55583));
});

}

return (new com.rpl.specter.t_com$rpl$specter55582(path,update_fn,late,late_fn,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55588 = (function (path,reduce_fn,late,late_fn,meta55589){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta55589 = meta55589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55590,meta55589__$1){
var self__ = this;
var _55590__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55588(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta55589__$1));
}));

(com.rpl.specter.t_com$rpl$specter55588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55590){
var self__ = this;
var _55590__$1 = this;
return self__.meta55589;
}));

(com.rpl.specter.t_com$rpl$specter55588.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55588.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter55588.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter55588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta55589","meta55589",750608681,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55588.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55588.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55588");

(com.rpl.specter.t_com$rpl$specter55588.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55588");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55588.
 */
com.rpl.specter.__GT_t_com$rpl$specter55588 = (function com$rpl$specter$__GT_t_com$rpl$specter55588(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta55589){
return (new com.rpl.specter.t_com$rpl$specter55588(path__$1,reduce_fn__$1,late__$1,late_fn__$1,meta55589));
});

}

return (new com.rpl.specter.t_com$rpl$specter55588(path,reduce_fn,late,late_fn,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__55599 = (function (p1__55596_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__55596_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__55599) : com.rpl.specter.pred.call(null,G__55599));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__55602 = (function (p1__55601_SHARP_){
return (p1__55601_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__55602) : com.rpl.specter.pred.call(null,G__55602));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__55606 = (function (p1__55604_SHARP_){
return (p1__55604_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__55606) : com.rpl.specter.pred.call(null,G__55606));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__55610 = (function (p1__55609_SHARP_){
return (p1__55609_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__55610) : com.rpl.specter.pred.call(null,G__55610));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__55614 = (function (p1__55611_SHARP_){
return (p1__55611_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__55614) : com.rpl.specter.pred.call(null,G__55614));
});
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"null",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"null",(function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"string",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"string",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"number",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"number",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"boolean",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"boolean",(function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
goog.object.set(com.rpl.specter.protocols.ImplicitNav,"function",true);

goog.object.set(com.rpl.specter.protocols.implicit_nav,"function",(function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
}));


com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__55625 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55625) : next_fn.call(null,G__55625));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__55628 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55628) : next_fn.call(null,G__55628));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55629 = (function (v,meta55630){
this.v = v;
this.meta55630 = meta55630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55631,meta55630__$1){
var self__ = this;
var _55631__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55629(self__.v,meta55630__$1));
}));

(com.rpl.specter.t_com$rpl$specter55629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55631){
var self__ = this;
var _55631__$1 = this;
return self__.meta55630;
}));

(com.rpl.specter.t_com$rpl$specter55629.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55629.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter55629.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter55629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta55630","meta55630",-1916598753,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55629.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55629.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55629");

(com.rpl.specter.t_com$rpl$specter55629.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55629");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55629.
 */
com.rpl.specter.__GT_t_com$rpl$specter55629 = (function com$rpl$specter$__GT_t_com$rpl$specter55629(v__$1,meta55630){
return (new com.rpl.specter.t_com$rpl$specter55629(v__$1,meta55630));
});

}

return (new com.rpl.specter.t_com$rpl$specter55629(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__55644 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__55644) : com.rpl.specter.nil__GT_val.call(null,G__55644));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__55646 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__55646) : com.rpl.specter.nil__GT_val.call(null,G__55646));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__55647 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__55647) : com.rpl.specter.nil__GT_val.call(null,G__55647));
})();


com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__55650 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55650) : next_fn.call(null,G__55650));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__55658 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55658) : next_fn.call(null,G__55658));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55660 = (function (meta55661){
this.meta55661 = meta55661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55662,meta55661__$1){
var self__ = this;
var _55662__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55660(meta55661__$1));
}));

(com.rpl.specter.t_com$rpl$specter55660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55662){
var self__ = this;
var _55662__$1 = this;
return self__.meta55661;
}));

(com.rpl.specter.t_com$rpl$specter55660.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55660.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter55660.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter55660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55661","meta55661",-699795891,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55660.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55660.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55660");

(com.rpl.specter.t_com$rpl$specter55660.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55660");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55660.
 */
com.rpl.specter.__GT_t_com$rpl$specter55660 = (function com$rpl$specter$__GT_t_com$rpl$specter55660(meta55661){
return (new com.rpl.specter.t_com$rpl$specter55660(meta55661));
});

}

return (new com.rpl.specter.t_com$rpl$specter55660(null));
})()
;


com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__55689 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55689) : next_fn.call(null,G__55689));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__55690 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55690) : next_fn.call(null,G__55690));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55693 = (function (meta55694){
this.meta55694 = meta55694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55695,meta55694__$1){
var self__ = this;
var _55695__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55693(meta55694__$1));
}));

(com.rpl.specter.t_com$rpl$specter55693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55695){
var self__ = this;
var _55695__$1 = this;
return self__.meta55694;
}));

(com.rpl.specter.t_com$rpl$specter55693.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55693.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter55693.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAME can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter55693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55694","meta55694",-1468478296,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55693.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55693.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55693");

(com.rpl.specter.t_com$rpl$specter55693.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55693");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55693.
 */
com.rpl.specter.__GT_t_com$rpl$specter55693 = (function com$rpl$specter$__GT_t_com$rpl$specter55693(meta55694){
return (new com.rpl.specter.t_com$rpl$specter55693(meta55694));
});

}

return (new com.rpl.specter.t_com$rpl$specter55693(null));
})()
;


com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__55730 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55730) : next_fn.call(null,G__55730));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__55732 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__55732) : next_fn.call(null,G__55732));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55742 = (function (meta55743){
this.meta55743 = meta55743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55744,meta55743__$1){
var self__ = this;
var _55744__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55742(meta55743__$1));
}));

(com.rpl.specter.t_com$rpl$specter55742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55744){
var self__ = this;
var _55744__$1 = this;
return self__.meta55743;
}));

(com.rpl.specter.t_com$rpl$specter55742.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55742.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter55742.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__52090__auto__,vals__52091__auto__,structure,next_fn__52092__auto__){
var self__ = this;
var this__52090__auto____$1 = this;
var next_fn = (function (s__52093__auto__){
return (next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__52092__auto__.cljs$core$IFn$_invoke$arity$2(vals__52091__auto__,s__52093__auto__) : next_fn__52092__auto__.call(null,vals__52091__auto__,s__52093__auto__));
});
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
return com.rpl.specter.impl.throw_illegal_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NAMESPACE can only be used on symbols or keywords - ",structure], 0));

}
}
}));

(com.rpl.specter.t_com$rpl$specter55742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55743","meta55743",-1818678307,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55742.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55742.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55742");

(com.rpl.specter.t_com$rpl$specter55742.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55742");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55742.
 */
com.rpl.specter.__GT_t_com$rpl$specter55742 = (function com$rpl$specter$__GT_t_com$rpl$specter55742(meta55743){
return (new com.rpl.specter.t_com$rpl$specter55742(meta55743));
});

}

return (new com.rpl.specter.t_com$rpl$specter55742(null));
})()
;
/**
 * Adds the result of running select with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56196__delegate = function (path){
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55765 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55765 = (function (path,late,meta55766){
this.path = path;
this.late = late;
this.meta55766 = meta55766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55767,meta55766__$1){
var self__ = this;
var _55767__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55765(self__.path,self__.late,meta55766__$1));
}));

(com.rpl.specter.t_com$rpl$specter55765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55767){
var self__ = this;
var _55767__$1 = this;
return self__.meta55766;
}));

(com.rpl.specter.t_com$rpl$specter55765.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55765.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__53219__auto__,vals__53220__auto__,structure,next_fn__53221__auto__){
var self__ = this;
var this__53219__auto____$1 = this;
var G__55771 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__53220__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__55772 = structure;
return (next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2(G__55771,G__55772) : next_fn__53221__auto__.call(null,G__55771,G__55772));
}));

(com.rpl.specter.t_com$rpl$specter55765.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__53219__auto__,vals__53220__auto__,structure,next_fn__53221__auto__){
var self__ = this;
var this__53219__auto____$1 = this;
var G__55779 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__53220__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__55780 = structure;
return (next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2(G__55779,G__55780) : next_fn__53221__auto__.call(null,G__55779,G__55780));
}));

(com.rpl.specter.t_com$rpl$specter55765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta55766","meta55766",1609073416,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55765.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55765.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55765");

(com.rpl.specter.t_com$rpl$specter55765.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55765");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55765.
 */
com.rpl.specter.__GT_t_com$rpl$specter55765 = (function com$rpl$specter$__GT_t_com$rpl$specter55765(path__$1,late__$1,meta55766){
return (new com.rpl.specter.t_com$rpl$specter55765(path__$1,late__$1,meta55766));
});

}

return (new com.rpl.specter.t_com$rpl$specter55765(path,late,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
};
var G__56196 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__56197__i = 0, G__56197__a = new Array(arguments.length -  0);
while (G__56197__i < G__56197__a.length) {G__56197__a[G__56197__i] = arguments[G__56197__i + 0]; ++G__56197__i;}
  path = new cljs.core.IndexedSeq(G__56197__a,0,null);
} 
return G__56196__delegate.call(this,path);};
G__56196.cljs$lang$maxFixedArity = 0;
G__56196.cljs$lang$applyTo = (function (arglist__56198){
var path = cljs.core.seq(arglist__56198);
return G__56196__delegate(path);
});
G__56196.cljs$core$IFn$_invoke$arity$variadic = G__56196__delegate;
return G__56196;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds the result of running select-one with the given path on the
 *        current value to the collected vals.
 */
com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56199__delegate = function (path){
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55782 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55782 = (function (path,late,meta55783){
this.path = path;
this.late = late;
this.meta55783 = meta55783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55784,meta55783__$1){
var self__ = this;
var _55784__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55782(self__.path,self__.late,meta55783__$1));
}));

(com.rpl.specter.t_com$rpl$specter55782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55784){
var self__ = this;
var _55784__$1 = this;
return self__.meta55783;
}));

(com.rpl.specter.t_com$rpl$specter55782.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55782.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__53219__auto__,vals__53220__auto__,structure,next_fn__53221__auto__){
var self__ = this;
var this__53219__auto____$1 = this;
var G__55786 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__53220__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__55787 = structure;
return (next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2(G__55786,G__55787) : next_fn__53221__auto__.call(null,G__55786,G__55787));
}));

(com.rpl.specter.t_com$rpl$specter55782.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__53219__auto__,vals__53220__auto__,structure,next_fn__53221__auto__){
var self__ = this;
var this__53219__auto____$1 = this;
var G__55788 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__53220__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__55789 = structure;
return (next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2(G__55788,G__55789) : next_fn__53221__auto__.call(null,G__55788,G__55789));
}));

(com.rpl.specter.t_com$rpl$specter55782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta55783","meta55783",1596256634,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55782.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55782.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55782");

(com.rpl.specter.t_com$rpl$specter55782.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55782");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55782.
 */
com.rpl.specter.__GT_t_com$rpl$specter55782 = (function com$rpl$specter$__GT_t_com$rpl$specter55782(path__$1,late__$1,meta55783){
return (new com.rpl.specter.t_com$rpl$specter55782(path__$1,late__$1,meta55783));
});

}

return (new com.rpl.specter.t_com$rpl$specter55782(path,late,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
};
var G__56199 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__56200__i = 0, G__56200__a = new Array(arguments.length -  0);
while (G__56200__i < G__56200__a.length) {G__56200__a[G__56200__i] = arguments[G__56200__i + 0]; ++G__56200__i;}
  path = new cljs.core.IndexedSeq(G__56200__a,0,null);
} 
return G__56199__delegate.call(this,path);};
G__56199.cljs$lang$maxFixedArity = 0;
G__56199.cljs$lang$applyTo = (function (arglist__56201){
var path = cljs.core.seq(arglist__56201);
return G__56199__delegate(path);
});
G__56199.cljs$core$IFn$_invoke$arity$variadic = G__56199__delegate;
return G__56199;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55791 = (function (val,meta55792){
this.val = val;
this.meta55792 = meta55792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55793,meta55792__$1){
var self__ = this;
var _55793__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55791(self__.val,meta55792__$1));
}));

(com.rpl.specter.t_com$rpl$specter55791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55793){
var self__ = this;
var _55793__$1 = this;
return self__.meta55792;
}));

(com.rpl.specter.t_com$rpl$specter55791.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55791.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__53219__auto__,vals__53220__auto__,structure,next_fn__53221__auto__){
var self__ = this;
var this__53219__auto____$1 = this;
var G__55795 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__53220__auto__,self__.val);
var G__55796 = structure;
return (next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2(G__55795,G__55796) : next_fn__53221__auto__.call(null,G__55795,G__55796));
}));

(com.rpl.specter.t_com$rpl$specter55791.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__53219__auto__,vals__53220__auto__,structure,next_fn__53221__auto__){
var self__ = this;
var this__53219__auto____$1 = this;
var G__55798 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__53220__auto__,self__.val);
var G__55799 = structure;
return (next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__53221__auto__.cljs$core$IFn$_invoke$arity$2(G__55798,G__55799) : next_fn__53221__auto__.call(null,G__55798,G__55799));
}));

(com.rpl.specter.t_com$rpl$specter55791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta55792","meta55792",-1027736348,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55791.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55791.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55791");

(com.rpl.specter.t_com$rpl$specter55791.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55791");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55791.
 */
com.rpl.specter.__GT_t_com$rpl$specter55791 = (function com$rpl$specter$__GT_t_com$rpl$specter55791(val__$1,meta55792){
return (new com.rpl.specter.t_com$rpl$specter55791(val__$1,meta55792));
});

}

return (new com.rpl.specter.t_com$rpl$specter55791(val,null));
}));
/**
 * Continues navigating on the given path with the collected vals reset to []. Once
 *   navigation leaves the scope of with-fresh-collected, the collected vals revert
 *   to what they were before.
 */
com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56206__delegate = function (path){
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55801 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55801 = (function (path,late,meta55802){
this.path = path;
this.late = late;
this.meta55802 = meta55802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55803,meta55802__$1){
var self__ = this;
var _55803__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55801(self__.path,self__.late,meta55802__$1));
}));

(com.rpl.specter.t_com$rpl$specter55801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55803){
var self__ = this;
var _55803__$1 = this;
return self__.meta55802;
}));

(com.rpl.specter.t_com$rpl$specter55801.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55801.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter55801.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter55801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta55802","meta55802",-475142767,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55801.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55801.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55801");

(com.rpl.specter.t_com$rpl$specter55801.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55801");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55801.
 */
com.rpl.specter.__GT_t_com$rpl$specter55801 = (function com$rpl$specter$__GT_t_com$rpl$specter55801(path__$1,late__$1,meta55802){
return (new com.rpl.specter.t_com$rpl$specter55801(path__$1,late__$1,meta55802));
});

}

return (new com.rpl.specter.t_com$rpl$specter55801(path,late,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
};
var G__56206 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__56207__i = 0, G__56207__a = new Array(arguments.length -  0);
while (G__56207__i < G__56207__a.length) {G__56207__a[G__56207__i] = arguments[G__56207__i + 0]; ++G__56207__i;}
  path = new cljs.core.IndexedSeq(G__56207__a,0,null);
} 
return G__56206__delegate.call(this,path);};
G__56206.cljs$lang$maxFixedArity = 0;
G__56206.cljs$lang$applyTo = (function (arglist__56208){
var path = cljs.core.seq(arglist__56208);
return G__56206__delegate(path);
});
G__56206.cljs$core$IFn$_invoke$arity$variadic = G__56206__delegate;
return G__56206;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (function (){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55817 = (function (meta55818){
this.meta55818 = meta55818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55819,meta55818__$1){
var self__ = this;
var _55819__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55817(meta55818__$1));
}));

(com.rpl.specter.t_com$rpl$specter55817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55819){
var self__ = this;
var _55819__$1 = this;
return self__.meta55818;
}));

(com.rpl.specter.t_com$rpl$specter55817.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55817.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__55824 = cljs.core.PersistentVector.EMPTY;
var G__55825 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__55824,G__55825) : next_fn.call(null,G__55824,G__55825));
}));

(com.rpl.specter.t_com$rpl$specter55817.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__55827 = cljs.core.PersistentVector.EMPTY;
var G__55828 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__55827,G__55828) : next_fn.call(null,G__55827,G__55828));
}));

(com.rpl.specter.t_com$rpl$specter55817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta55818","meta55818",-1983586998,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55817.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55817.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55817");

(com.rpl.specter.t_com$rpl$specter55817.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55817");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55817.
 */
com.rpl.specter.__GT_t_com$rpl$specter55817 = (function com$rpl$specter$__GT_t_com$rpl$specter55817(meta55818){
return (new com.rpl.specter.t_com$rpl$specter55817(meta55818));
});

}

return (new com.rpl.specter.t_com$rpl$specter55817(null));
})()
;
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__56212 = null;
var G__56212__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__56212__3 = (function (cond_p,then_path,else_path){
var temp__5733__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5733__auto__)){
var afn = temp__5733__auto__;
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55840 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55840 = (function (cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,meta55841){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta55841 = meta55841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55842,meta55841__$1){
var self__ = this;
var _55842__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55840(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.afn,self__.late_then,self__.late_else,meta55841__$1));
}));

(com.rpl.specter.t_com$rpl$specter55840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55842){
var self__ = this;
var _55842__$1 = this;
return self__.meta55841;
}));

(com.rpl.specter.t_com$rpl$specter55840.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55840.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter55840.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter55840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta55841","meta55841",1217119326,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55840.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55840.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55840");

(com.rpl.specter.t_com$rpl$specter55840.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55840");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55840.
 */
com.rpl.specter.__GT_t_com$rpl$specter55840 = (function com$rpl$specter$__GT_t_com$rpl$specter55840(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta55841){
return (new com.rpl.specter.t_com$rpl$specter55840(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,afn__$1,late_then__$1,late_else__$1,meta55841));
});

}

return (new com.rpl.specter.t_com$rpl$specter55840(cond_p,then_path,else_path,temp__5733__auto__,afn,late_then,late_else,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
} else {
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55857 = (function (cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,meta55858){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5733__auto__ = temp__5733__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta55858 = meta55858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55859,meta55858__$1){
var self__ = this;
var _55859__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55857(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5733__auto__,self__.late_cond,self__.late_then,self__.late_else,meta55858__$1));
}));

(com.rpl.specter.t_com$rpl$specter55857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55859){
var self__ = this;
var _55859__$1 = this;
return self__.meta55858;
}));

(com.rpl.specter.t_com$rpl$specter55857.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55857.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__55835_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__55835_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter55857.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__55837_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__55837_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter55857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5733__auto__","temp__5733__auto__",484944449,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta55858","meta55858",44235381,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55857.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55857.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55857");

(com.rpl.specter.t_com$rpl$specter55857.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55857");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55857.
 */
com.rpl.specter.__GT_t_com$rpl$specter55857 = (function com$rpl$specter$__GT_t_com$rpl$specter55857(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta55858){
return (new com.rpl.specter.t_com$rpl$specter55857(cond_p__$1,then_path__$1,else_path__$1,temp__5733__auto____$1,late_cond__$1,late_then__$1,late_else__$1,meta55858));
});

}

return (new com.rpl.specter.t_com$rpl$specter55857(cond_p,then_path,else_path,temp__5733__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
}
});
G__56212 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__56212__2.call(this,cond_p,then_path);
case 3:
return G__56212__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56212.cljs$core$IFn$_invoke$arity$2 = G__56212__2;
G__56212.cljs$core$IFn$_invoke$arity$3 = G__56212__3;
return G__56212;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56217__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__55880){
var vec__55881 = p__55880;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55881,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55881,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__56217 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__56218__i = 0, G__56218__a = new Array(arguments.length -  0);
while (G__56218__i < G__56218__a.length) {G__56218__a[G__56218__i] = arguments[G__56218__i + 0]; ++G__56218__i;}
  conds = new cljs.core.IndexedSeq(G__56218__a,0,null);
} 
return G__56217__delegate.call(this,conds);};
G__56217.cljs$lang$maxFixedArity = 0;
G__56217.cljs$lang$applyTo = (function (arglist__56219){
var conds = cljs.core.seq(arglist__56219);
return G__56217__delegate(conds);
});
G__56217.cljs$core$IFn$_invoke$arity$variadic = G__56217__delegate;
return G__56217;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__56220 = null;
var G__56220__0 = (function (){
return com.rpl.specter.STAY;
});
var G__56220__1 = (function (path){
return path;
});
var G__56220__2 = (function (path1,path2){
var builder__53222__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
if((typeof com !== 'undefined') && (typeof com.rpl !== 'undefined') && (typeof com.rpl.specter !== 'undefined') && (typeof com.rpl.specter.t_com$rpl$specter55890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter55890 = (function (path1,path2,late1,late2,meta55891){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta55891 = meta55891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter55890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55892,meta55891__$1){
var self__ = this;
var _55892__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter55890(self__.path1,self__.path2,self__.late1,self__.late2,meta55891__$1));
}));

(com.rpl.specter.t_com$rpl$specter55890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55892){
var self__ = this;
var _55892__$1 = this;
return self__.meta55891;
}));

(com.rpl.specter.t_com$rpl$specter55890.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter55890.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter55890.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter55890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta55891","meta55891",1980153249,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter55890.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter55890.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter55890");

(com.rpl.specter.t_com$rpl$specter55890.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"com.rpl.specter/t_com$rpl$specter55890");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter55890.
 */
com.rpl.specter.__GT_t_com$rpl$specter55890 = (function com$rpl$specter$__GT_t_com$rpl$specter55890(path1__$1,path2__$1,late1__$1,late2__$1,meta55891){
return (new com.rpl.specter.t_com$rpl$specter55890(path1__$1,path2__$1,late1__$1,late2__$1,meta55891));
});

}

return (new com.rpl.specter.t_com$rpl$specter55890(path1,path2,late1,late2,null));
}));
var curr_params__53223__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__53223__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__53222__auto__,curr_params__53223__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__53222__auto__,curr_params__53223__auto__,null);
}
});
var G__56220__3 = (function() { 
var G__56223__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__56223 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__56224__i = 0, G__56224__a = new Array(arguments.length -  2);
while (G__56224__i < G__56224__a.length) {G__56224__a[G__56224__i] = arguments[G__56224__i + 2]; ++G__56224__i;}
  paths = new cljs.core.IndexedSeq(G__56224__a,0,null);
} 
return G__56223__delegate.call(this,path1,path2,paths);};
G__56223.cljs$lang$maxFixedArity = 2;
G__56223.cljs$lang$applyTo = (function (arglist__56225){
var path1 = cljs.core.first(arglist__56225);
arglist__56225 = cljs.core.next(arglist__56225);
var path2 = cljs.core.first(arglist__56225);
var paths = cljs.core.rest(arglist__56225);
return G__56223__delegate(path1,path2,paths);
});
G__56223.cljs$core$IFn$_invoke$arity$variadic = G__56223__delegate;
return G__56223;
})()
;
G__56220 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__56220__0.call(this);
case 1:
return G__56220__1.call(this,path1);
case 2:
return G__56220__2.call(this,path1,path2);
default:
var G__56226 = null;
if (arguments.length > 2) {
var G__56227__i = 0, G__56227__a = new Array(arguments.length -  2);
while (G__56227__i < G__56227__a.length) {G__56227__a[G__56227__i] = arguments[G__56227__i + 2]; ++G__56227__i;}
G__56226 = new cljs.core.IndexedSeq(G__56227__a,0,null);
}
return G__56220__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__56226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__56220.cljs$lang$maxFixedArity = 2;
G__56220.cljs$lang$applyTo = G__56220__3.cljs$lang$applyTo;
G__56220.cljs$core$IFn$_invoke$arity$0 = G__56220__0;
G__56220.cljs$core$IFn$_invoke$arity$1 = G__56220__1;
G__56220.cljs$core$IFn$_invoke$arity$2 = G__56220__2;
G__56220.cljs$core$IFn$_invoke$arity$variadic = G__56220__3.cljs$core$IFn$_invoke$arity$variadic;
return G__56220;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56228__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__56228 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__56229__i = 0, G__56229__a = new Array(arguments.length -  0);
while (G__56229__i < G__56229__a.length) {G__56229__a[G__56229__i] = arguments[G__56229__i + 0]; ++G__56229__i;}
  path = new cljs.core.IndexedSeq(G__56229__a,0,null);
} 
return G__56228__delegate.call(this,path);};
G__56228.cljs$lang$maxFixedArity = 0;
G__56228.cljs$lang$applyTo = (function (arglist__56230){
var path = cljs.core.seq(arglist__56230);
return G__56228__delegate(path);
});
G__56228.cljs$core$IFn$_invoke$arity$variadic = G__56228__delegate;
return G__56228;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56231__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__56231 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__56232__i = 0, G__56232__a = new Array(arguments.length -  0);
while (G__56232__i < G__56232__a.length) {G__56232__a[G__56232__i] = arguments[G__56232__i + 0]; ++G__56232__i;}
  path = new cljs.core.IndexedSeq(G__56232__a,0,null);
} 
return G__56231__delegate.call(this,path);};
G__56231.cljs$lang$maxFixedArity = 0;
G__56231.cljs$lang$applyTo = (function (arglist__56233){
var path = cljs.core.seq(arglist__56233);
return G__56231__delegate(path);
});
G__56231.cljs$core$IFn$_invoke$arity$variadic = G__56231__delegate;
return G__56231;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__53229__auto__ = com.rpl.specter.pathcache55916;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55917 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,679,682,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache55916 = info55917;

return info55917;
})():info__53229__auto__);
var precompiled55918 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55930 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled55918.cljs$core$IFn$_invoke$arity$1 ? precompiled55918.cljs$core$IFn$_invoke$arity$1(G__55930) : precompiled55918.call(null,G__55930));
} else {
return precompiled55918;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__53229__auto__ = com.rpl.specter.pathcache55931;
var info__53229__auto____$1 = (((info__53229__auto__ == null))?(function (){var info55932 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),"com/rpl/specter.cljc",25,1,1394,1394,cljs.core.List.EMPTY,"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)])),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1175,1179,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,644,646,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2133,2133,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,689,691,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache55931 = info55932;

return info55932;
})():info__53229__auto__);
var precompiled55933 = com.rpl.specter.impl.cached_path_info_precompiled(info__53229__auto____$1);
var dynamic_QMARK___53230__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__53229__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___53230__auto__)){
var G__55942 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled55933.cljs$core$IFn$_invoke$arity$1 ? precompiled55933.cljs$core$IFn$_invoke$arity$1(G__55942) : precompiled55933.call(null,G__55942));
} else {
return precompiled55933;
}
})());

return p;
}));
var empty__GT_NONE_56236 = (function (){var G__55943 = cljs.core.empty_QMARK_;
var G__55944 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__55943,G__55944) : com.rpl.specter.if_path.call(null,G__55943,G__55944));
})();
var compact_STAR__56237 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_56236) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_56236));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__56239__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__56237,path);
};
var G__56239 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__56240__i = 0, G__56240__a = new Array(arguments.length -  0);
while (G__56240__i < G__56240__a.length) {G__56240__a[G__56240__i] = arguments[G__56240__i + 0]; ++G__56240__i;}
  path = new cljs.core.IndexedSeq(G__56240__a,0,null);
} 
return G__56239__delegate.call(this,path);};
G__56239.cljs$lang$maxFixedArity = 0;
G__56239.cljs$lang$applyTo = (function (arglist__56241){
var path = cljs.core.seq(arglist__56241);
return G__56239__delegate(path);
});
G__56239.cljs$core$IFn$_invoke$arity$variadic = G__56239__delegate;
return G__56239;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
