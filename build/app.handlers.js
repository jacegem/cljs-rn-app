goog.provide('app.handlers');
/**
 * Throw an exception if db doesn't have a valid spec.
 */
app.handlers.check_and_throw = (function app$handlers$check_and_throw(spec,db,event){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,db)){
return null;
} else {
cljs.core.tap_GT_(event);

var explanation = cljs.spec.alpha.explain_str(spec,db);
throw ["Spec check failed: ",explanation].join('');

return true;
}
});
app.handlers.validate_spec = (function app$handlers$validate_spec(context){
var db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var old_db = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context));
var event = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context));
if((!((app.handlers.check_and_throw(app.db.app_db_spec,db,event) == null)))){
return cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effects","effects",-282369292),new cljs.core.Keyword(null,"db","db",993250759)], null),old_db);
} else {
return context;
}
});
app.handlers.spec_validation = (cljs.core.truth_(goog.DEBUG)?re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spec-validation","spec-validation",1911265112),new cljs.core.Keyword(null,"after","after",594996914),app.handlers.validate_spec], 0)):re_frame.core.__GT_interceptor);
app.handlers.base_interceptors = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.handlers.spec_validation], null);
app.handlers.initialize_db = (function app$handlers$initialize_db(_,___$1){
return app.db.default_app_db;
});
app.handlers.set_theme = (function app$handlers$set_theme(db,p__58973){
var vec__58974 = p__58973;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58974,(0),null);
var theme = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58974,(1),null);
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__54731__auto__ = app.handlers.pathcache58977;
var info__54731__auto____$1 = (((info__54731__auto__ == null))?(function (){var info58978 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null)], null),"app.handlers",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null)], null));
app.handlers.pathcache58977 = info58978;

return info58978;
})():info__54731__auto__);
var precompiled58979 = com.rpl.specter.impl.cached_path_info_precompiled(info__54731__auto____$1);
var dynamic_QMARK___54732__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__54731__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___54732__auto__)){
var G__58980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"theme","theme",-1247880880)], null)], null);
return (precompiled58979.cljs$core$IFn$_invoke$arity$1 ? precompiled58979.cljs$core$IFn$_invoke$arity$1(G__58980) : precompiled58979.call(null,G__58980));
} else {
return precompiled58979;
}
})(),theme,db);
});
app.handlers.set_version = (function app$handlers$set_version(db,p__58981){
var vec__58982 = p__58981;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58982,(0),null);
var version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58982,(1),null);
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__54731__auto__ = app.handlers.pathcache58985;
var info__54731__auto____$1 = (((info__54731__auto__ == null))?(function (){var info58986 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null)], null),"app.handlers",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null)], null));
app.handlers.pathcache58985 = info58986;

return info58986;
})():info__54731__auto__);
var precompiled58987 = com.rpl.specter.impl.cached_path_info_precompiled(info__54731__auto____$1);
var dynamic_QMARK___54732__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__54731__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___54732__auto__)){
var G__58988 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null)], null);
return (precompiled58987.cljs$core$IFn$_invoke$arity$1 ? precompiled58987.cljs$core$IFn$_invoke$arity$1(G__58988) : precompiled58987.call(null,G__58988));
} else {
return precompiled58987;
}
})(),version,db);
});
app.handlers.some_fx_example = (function app$handlers$some_fx_example(cofx,p__58989){
var vec__58990 = p__58989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58990,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58990,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"some-fx-example","some-fx-example",-577842969),x], null);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.handlers.base_interceptors], null),app.handlers.initialize_db);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-theme","set-theme",-1528906877),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.handlers.base_interceptors], null),app.handlers.set_theme);
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"set-version","set-version",-1934891967),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.handlers.base_interceptors], null),app.handlers.set_version);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"some-fx-example","some-fx-example",-577842969),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.handlers.base_interceptors], null),app.handlers.some_fx_example);

//# sourceMappingURL=app.handlers.js.map
