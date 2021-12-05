goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__45521,p__45522){
var map__45523 = p__45521;
var map__45523__$1 = (((((!((map__45523 == null))))?(((((map__45523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45523):map__45523);
var svc = map__45523__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45523__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45524 = p__45522;
var map__45524__$1 = (((((!((map__45524 == null))))?(((((map__45524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45524):map__45524);
var msg = map__45524__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45524__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__45545,p__45546){
var map__45547 = p__45545;
var map__45547__$1 = (((((!((map__45547 == null))))?(((((map__45547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45547):map__45547);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45547__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__45548 = p__45546;
var map__45548__$1 = (((((!((map__45548 == null))))?(((((map__45548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45548):map__45548);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45548__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__45557,p__45558){
var map__45559 = p__45557;
var map__45559__$1 = (((((!((map__45559 == null))))?(((((map__45559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45559):map__45559);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45559__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45559__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45560 = p__45558;
var map__45560__$1 = (((((!((map__45560 == null))))?(((((map__45560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45560):map__45560);
var msg = map__45560__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45560__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__45570,tid){
var map__45573 = p__45570;
var map__45573__$1 = (((((!((map__45573 == null))))?(((((map__45573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45573):map__45573);
var svc = map__45573__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45573__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__45586 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__45587 = null;
var count__45588 = (0);
var i__45589 = (0);
while(true){
if((i__45589 < count__45588)){
var vec__45606 = chunk__45587.cljs$core$IIndexed$_nth$arity$2(null,i__45589);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45606,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45606,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45650 = seq__45586;
var G__45651 = chunk__45587;
var G__45652 = count__45588;
var G__45653 = (i__45589 + (1));
seq__45586 = G__45650;
chunk__45587 = G__45651;
count__45588 = G__45652;
i__45589 = G__45653;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45586);
if(temp__5735__auto__){
var seq__45586__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45586__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45586__$1);
var G__45658 = cljs.core.chunk_rest(seq__45586__$1);
var G__45659 = c__4556__auto__;
var G__45660 = cljs.core.count(c__4556__auto__);
var G__45661 = (0);
seq__45586 = G__45658;
chunk__45587 = G__45659;
count__45588 = G__45660;
i__45589 = G__45661;
continue;
} else {
var vec__45609 = cljs.core.first(seq__45586__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45609,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45609,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45664 = cljs.core.next(seq__45586__$1);
var G__45665 = null;
var G__45666 = (0);
var G__45667 = (0);
seq__45586 = G__45664;
chunk__45587 = G__45665;
count__45588 = G__45666;
i__45589 = G__45667;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__45578_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__45578_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__45580_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__45580_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__45581_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__45581_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__45583_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__45583_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__45615){
var map__45616 = p__45615;
var map__45616__$1 = (((((!((map__45616 == null))))?(((((map__45616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45616):map__45616);
var svc = map__45616__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45616__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45616__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
