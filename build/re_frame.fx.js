goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__49028 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__49030 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__49030);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___49148 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___49148)){
var new_db_49149 = temp__5735__auto___49148;
var fexpr__49034_49150 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__49034_49150.cljs$core$IFn$_invoke$arity$1 ? fexpr__49034_49150.cljs$core$IFn$_invoke$arity$1(new_db_49149) : fexpr__49034_49150.call(null,new_db_49149));
} else {
}

var seq__49036 = cljs.core.seq(effects_without_db);
var chunk__49037 = null;
var count__49038 = (0);
var i__49039 = (0);
while(true){
if((i__49039 < count__49038)){
var vec__49053 = chunk__49037.cljs$core$IIndexed$_nth$arity$2(null,i__49039);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49053,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49053,(1),null);
var temp__5733__auto___49152 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49152)){
var effect_fn_49153 = temp__5733__auto___49152;
(effect_fn_49153.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49153.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49153.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49154 = seq__49036;
var G__49155 = chunk__49037;
var G__49156 = count__49038;
var G__49157 = (i__49039 + (1));
seq__49036 = G__49154;
chunk__49037 = G__49155;
count__49038 = G__49156;
i__49039 = G__49157;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49036);
if(temp__5735__auto__){
var seq__49036__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49036__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49036__$1);
var G__49159 = cljs.core.chunk_rest(seq__49036__$1);
var G__49160 = c__4556__auto__;
var G__49161 = cljs.core.count(c__4556__auto__);
var G__49162 = (0);
seq__49036 = G__49159;
chunk__49037 = G__49160;
count__49038 = G__49161;
i__49039 = G__49162;
continue;
} else {
var vec__49057 = cljs.core.first(seq__49036__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49057,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49057,(1),null);
var temp__5733__auto___49165 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49165)){
var effect_fn_49166 = temp__5733__auto___49165;
(effect_fn_49166.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49166.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49166.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49167 = cljs.core.next(seq__49036__$1);
var G__49168 = null;
var G__49169 = (0);
var G__49170 = (0);
seq__49036 = G__49167;
chunk__49037 = G__49168;
count__49038 = G__49169;
i__49039 = G__49170;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__47248__auto___49171 = re_frame.interop.now();
var duration__47249__auto___49172 = (end__47248__auto___49171 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47249__auto___49172,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__47248__auto___49171);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__49028);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___49175 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___49175)){
var new_db_49176 = temp__5735__auto___49175;
var fexpr__49063_49177 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__49063_49177.cljs$core$IFn$_invoke$arity$1 ? fexpr__49063_49177.cljs$core$IFn$_invoke$arity$1(new_db_49176) : fexpr__49063_49177.call(null,new_db_49176));
} else {
}

var seq__49064 = cljs.core.seq(effects_without_db);
var chunk__49065 = null;
var count__49066 = (0);
var i__49067 = (0);
while(true){
if((i__49067 < count__49066)){
var vec__49074 = chunk__49065.cljs$core$IIndexed$_nth$arity$2(null,i__49067);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49074,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49074,(1),null);
var temp__5733__auto___49180 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49180)){
var effect_fn_49182 = temp__5733__auto___49180;
(effect_fn_49182.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49182.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49182.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49183 = seq__49064;
var G__49184 = chunk__49065;
var G__49185 = count__49066;
var G__49186 = (i__49067 + (1));
seq__49064 = G__49183;
chunk__49065 = G__49184;
count__49066 = G__49185;
i__49067 = G__49186;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49064);
if(temp__5735__auto__){
var seq__49064__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49064__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49064__$1);
var G__49187 = cljs.core.chunk_rest(seq__49064__$1);
var G__49188 = c__4556__auto__;
var G__49189 = cljs.core.count(c__4556__auto__);
var G__49190 = (0);
seq__49064 = G__49187;
chunk__49065 = G__49188;
count__49066 = G__49189;
i__49067 = G__49190;
continue;
} else {
var vec__49079 = cljs.core.first(seq__49064__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49079,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49079,(1),null);
var temp__5733__auto___49192 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49192)){
var effect_fn_49194 = temp__5733__auto___49192;
(effect_fn_49194.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49194.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49194.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49196 = cljs.core.next(seq__49064__$1);
var G__49197 = null;
var G__49198 = (0);
var G__49199 = (0);
seq__49064 = G__49196;
chunk__49065 = G__49197;
count__49066 = G__49198;
i__49067 = G__49199;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__49084){
var map__49085 = p__49084;
var map__49085__$1 = (((((!((map__49085 == null))))?(((((map__49085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49085):map__49085);
var effect = map__49085__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49085__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49085__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__49087 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49089 = null;
var count__49090 = (0);
var i__49091 = (0);
while(true){
if((i__49091 < count__49090)){
var effect = chunk__49089.cljs$core$IIndexed$_nth$arity$2(null,i__49091);
re_frame.fx.dispatch_later(effect);


var G__49205 = seq__49087;
var G__49206 = chunk__49089;
var G__49207 = count__49090;
var G__49208 = (i__49091 + (1));
seq__49087 = G__49205;
chunk__49089 = G__49206;
count__49090 = G__49207;
i__49091 = G__49208;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49087);
if(temp__5735__auto__){
var seq__49087__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49087__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49087__$1);
var G__49210 = cljs.core.chunk_rest(seq__49087__$1);
var G__49211 = c__4556__auto__;
var G__49212 = cljs.core.count(c__4556__auto__);
var G__49213 = (0);
seq__49087 = G__49210;
chunk__49089 = G__49211;
count__49090 = G__49212;
i__49091 = G__49213;
continue;
} else {
var effect = cljs.core.first(seq__49087__$1);
re_frame.fx.dispatch_later(effect);


var G__49214 = cljs.core.next(seq__49087__$1);
var G__49215 = null;
var G__49216 = (0);
var G__49217 = (0);
seq__49087 = G__49214;
chunk__49089 = G__49215;
count__49090 = G__49216;
i__49091 = G__49217;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__49102 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__49103 = null;
var count__49104 = (0);
var i__49105 = (0);
while(true){
if((i__49105 < count__49104)){
var vec__49114 = chunk__49103.cljs$core$IIndexed$_nth$arity$2(null,i__49105);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49114,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49114,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___49220 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49220)){
var effect_fn_49221 = temp__5733__auto___49220;
(effect_fn_49221.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49221.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49221.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__49222 = seq__49102;
var G__49223 = chunk__49103;
var G__49224 = count__49104;
var G__49225 = (i__49105 + (1));
seq__49102 = G__49222;
chunk__49103 = G__49223;
count__49104 = G__49224;
i__49105 = G__49225;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49102);
if(temp__5735__auto__){
var seq__49102__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49102__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49102__$1);
var G__49229 = cljs.core.chunk_rest(seq__49102__$1);
var G__49230 = c__4556__auto__;
var G__49231 = cljs.core.count(c__4556__auto__);
var G__49232 = (0);
seq__49102 = G__49229;
chunk__49103 = G__49230;
count__49104 = G__49231;
i__49105 = G__49232;
continue;
} else {
var vec__49120 = cljs.core.first(seq__49102__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49120,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49120,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___49238 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49238)){
var effect_fn_49239 = temp__5733__auto___49238;
(effect_fn_49239.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49239.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49239.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__49240 = cljs.core.next(seq__49102__$1);
var G__49241 = null;
var G__49242 = (0);
var G__49243 = (0);
seq__49102 = G__49240;
chunk__49103 = G__49241;
count__49104 = G__49242;
i__49105 = G__49243;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__49125 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49126 = null;
var count__49127 = (0);
var i__49128 = (0);
while(true){
if((i__49128 < count__49127)){
var event = chunk__49126.cljs$core$IIndexed$_nth$arity$2(null,i__49128);
re_frame.router.dispatch(event);


var G__49250 = seq__49125;
var G__49251 = chunk__49126;
var G__49252 = count__49127;
var G__49253 = (i__49128 + (1));
seq__49125 = G__49250;
chunk__49126 = G__49251;
count__49127 = G__49252;
i__49128 = G__49253;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49125);
if(temp__5735__auto__){
var seq__49125__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49125__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49125__$1);
var G__49256 = cljs.core.chunk_rest(seq__49125__$1);
var G__49257 = c__4556__auto__;
var G__49258 = cljs.core.count(c__4556__auto__);
var G__49259 = (0);
seq__49125 = G__49256;
chunk__49126 = G__49257;
count__49127 = G__49258;
i__49128 = G__49259;
continue;
} else {
var event = cljs.core.first(seq__49125__$1);
re_frame.router.dispatch(event);


var G__49263 = cljs.core.next(seq__49125__$1);
var G__49264 = null;
var G__49265 = (0);
var G__49266 = (0);
seq__49125 = G__49263;
chunk__49126 = G__49264;
count__49127 = G__49265;
i__49128 = G__49266;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__49136 = cljs.core.seq(value);
var chunk__49137 = null;
var count__49138 = (0);
var i__49139 = (0);
while(true){
if((i__49139 < count__49138)){
var event = chunk__49137.cljs$core$IIndexed$_nth$arity$2(null,i__49139);
clear_event(event);


var G__49268 = seq__49136;
var G__49269 = chunk__49137;
var G__49270 = count__49138;
var G__49271 = (i__49139 + (1));
seq__49136 = G__49268;
chunk__49137 = G__49269;
count__49138 = G__49270;
i__49139 = G__49271;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49136);
if(temp__5735__auto__){
var seq__49136__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49136__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49136__$1);
var G__49273 = cljs.core.chunk_rest(seq__49136__$1);
var G__49274 = c__4556__auto__;
var G__49275 = cljs.core.count(c__4556__auto__);
var G__49276 = (0);
seq__49136 = G__49273;
chunk__49137 = G__49274;
count__49138 = G__49275;
i__49139 = G__49276;
continue;
} else {
var event = cljs.core.first(seq__49136__$1);
clear_event(event);


var G__49277 = cljs.core.next(seq__49136__$1);
var G__49278 = null;
var G__49279 = (0);
var G__49280 = (0);
seq__49136 = G__49277;
chunk__49137 = G__49278;
count__49138 = G__49279;
i__49139 = G__49280;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
