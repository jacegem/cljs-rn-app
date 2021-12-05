goog.provide('app.subscriptions');
app.subscriptions.version = (function app$subscriptions$version(db,_){
return com.rpl.specter.impl.compiled_select_one_BANG__STAR_((function (){var info__54731__auto__ = app.subscriptions.pathcache61967;
var info__54731__auto____$1 = (((info__54731__auto__ == null))?(function (){var info61968 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null)], null),"app.subscriptions",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null)], null));
app.subscriptions.pathcache61967 = info61968;

return info61968;
})():info__54731__auto__);
var precompiled61969 = com.rpl.specter.impl.cached_path_info_precompiled(info__54731__auto____$1);
var dynamic_QMARK___54732__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__54731__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___54732__auto__)){
var G__61970 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null)], null);
return (precompiled61969.cljs$core$IFn$_invoke$arity$1 ? precompiled61969.cljs$core$IFn$_invoke$arity$1(G__61970) : precompiled61969.call(null,G__61970));
} else {
return precompiled61969;
}
})(),db);
});
app.subscriptions.theme = (function app$subscriptions$theme(db,_){
return com.rpl.specter.impl.compiled_select_one_BANG__STAR_((function (){var info__54731__auto__ = app.subscriptions.pathcache61971;
var info__54731__auto____$1 = (((info__54731__auto__ == null))?(function (){var info61972 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null)], null),"app.subscriptions",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null)], null));
app.subscriptions.pathcache61971 = info61972;

return info61972;
})():info__54731__auto__);
var precompiled61973 = com.rpl.specter.impl.cached_path_info_precompiled(info__54731__auto____$1);
var dynamic_QMARK___54732__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__54731__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___54732__auto__)){
var G__61974 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null)], null);
return (precompiled61973.cljs$core$IFn$_invoke$arity$1 ? precompiled61973.cljs$core$IFn$_invoke$arity$1(G__61974) : precompiled61973.call(null,G__61974));
} else {
return precompiled61973;
}
})(),db);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"version","version",425292698),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.subscriptions.version], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"theme","theme",-1247880880),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.subscriptions.theme], 0));

//# sourceMappingURL=app.subscriptions.js.map
