goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43321 = arguments.length;
var i__4737__auto___43322 = (0);
while(true){
if((i__4737__auto___43322 < len__4736__auto___43321)){
args__4742__auto__.push((arguments[i__4737__auto___43322]));

var G__43326 = (i__4737__auto___43322 + (1));
i__4737__auto___43322 = G__43326;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__43151_43329 = keyvals;
var vec__43152_43330 = G__43151_43329;
var seq__43153_43331 = cljs.core.seq(vec__43152_43330);
var first__43154_43332 = cljs.core.first(seq__43153_43331);
var seq__43153_43333__$1 = cljs.core.next(seq__43153_43331);
var k_43334 = first__43154_43332;
var first__43154_43335__$1 = cljs.core.first(seq__43153_43333__$1);
var seq__43153_43336__$2 = cljs.core.next(seq__43153_43333__$1);
var v_43337 = first__43154_43335__$1;
var keyvals_43338__$1 = seq__43153_43336__$2;
var G__43151_43342__$1 = G__43151_43329;
while(true){
var vec__43155_43343 = G__43151_43342__$1;
var seq__43156_43344 = cljs.core.seq(vec__43155_43343);
var first__43157_43345 = cljs.core.first(seq__43156_43344);
var seq__43156_43346__$1 = cljs.core.next(seq__43156_43344);
var k_43347__$1 = first__43157_43345;
var first__43157_43348__$1 = cljs.core.first(seq__43156_43346__$1);
var seq__43156_43349__$2 = cljs.core.next(seq__43156_43346__$1);
var v_43350__$1 = first__43157_43348__$1;
var keyvals_43351__$2 = seq__43156_43349__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_43347__$1)] = v_43350__$1);

if(keyvals_43351__$2){
var G__43352 = keyvals_43351__$2;
G__43151_43342__$1 = G__43352;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq43146){
var G__43147 = cljs.core.first(seq43146);
var seq43146__$1 = cljs.core.next(seq43146);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43147,seq43146__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__43159 = arguments.length;
switch (G__43159) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj43160 = obj;
var k43161 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj43162 = obj43160;
return (((!((obj43162 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k43161,obj43162)));
})()){
return (obj43160[k43161]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj43163 = obj;
var k43164 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj43165 = obj43163;
return (((!((obj43165 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k43164,obj43165)));
})()){
return (obj43163[k43164]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__43168 = arguments.length;
switch (G__43168) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj43175 = self__.obj;
var k43176 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj43177 = obj43175;
return (((!((obj43177 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k43176,obj43177)));
})()){
return (obj43175[k43176]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj43181 = self__.obj;
var k43182 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj43185 = obj43181;
return (((!((obj43185 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k43182,obj43185)));
})()){
return (obj43181[k43182]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43364 = arguments.length;
var i__4737__auto___43365 = (0);
while(true){
if((i__4737__auto___43365 < len__4736__auto___43364)){
args__4742__auto__.push((arguments[i__4737__auto___43365]));

var G__43366 = (i__4737__auto___43365 + (1));
i__4737__auto___43365 = G__43366;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__43192 = keyvals;
var vec__43193 = G__43192;
var seq__43194 = cljs.core.seq(vec__43193);
var first__43195 = cljs.core.first(seq__43194);
var seq__43194__$1 = cljs.core.next(seq__43194);
var k = first__43195;
var first__43195__$1 = cljs.core.first(seq__43194__$1);
var seq__43194__$2 = cljs.core.next(seq__43194__$1);
var v = first__43195__$1;
var kvs = seq__43194__$2;
var G__43192__$1 = G__43192;
while(true){
var vec__43196 = G__43192__$1;
var seq__43197 = cljs.core.seq(vec__43196);
var first__43198 = cljs.core.first(seq__43197);
var seq__43197__$1 = cljs.core.next(seq__43197);
var k__$1 = first__43198;
var first__43198__$1 = cljs.core.first(seq__43197__$1);
var seq__43197__$2 = cljs.core.next(seq__43197__$1);
var v__$1 = first__43198__$1;
var kvs__$1 = seq__43197__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__43371 = kvs__$1;
G__43192__$1 = G__43371;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq43186){
var G__43188 = cljs.core.first(seq43186);
var seq43186__$1 = cljs.core.next(seq43186);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43188,seq43186__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43372 = arguments.length;
var i__4737__auto___43373 = (0);
while(true){
if((i__4737__auto___43373 < len__4736__auto___43372)){
args__4742__auto__.push((arguments[i__4737__auto___43373]));

var G__43374 = (i__4737__auto___43373 + (1));
i__4737__auto___43373 = G__43374;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq43201){
var G__43202 = cljs.core.first(seq43201);
var seq43201__$1 = cljs.core.next(seq43201);
var G__43203 = cljs.core.first(seq43201__$1);
var seq43201__$2 = cljs.core.next(seq43201__$1);
var G__43204 = cljs.core.first(seq43201__$2);
var seq43201__$3 = cljs.core.next(seq43201__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43202,G__43203,G__43204,seq43201__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43375 = arguments.length;
var i__4737__auto___43376 = (0);
while(true){
if((i__4737__auto___43376 < len__4736__auto___43375)){
args__4742__auto__.push((arguments[i__4737__auto___43376]));

var G__43378 = (i__4737__auto___43376 + (1));
i__4737__auto___43376 = G__43378;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq43214){
var G__43215 = cljs.core.first(seq43214);
var seq43214__$1 = cljs.core.next(seq43214);
var G__43216 = cljs.core.first(seq43214__$1);
var seq43214__$2 = cljs.core.next(seq43214__$1);
var G__43217 = cljs.core.first(seq43214__$2);
var seq43214__$3 = cljs.core.next(seq43214__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43215,G__43216,G__43217,seq43214__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__43225 = arguments.length;
switch (G__43225) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___43382 = arguments.length;
var i__4737__auto___43383 = (0);
while(true){
if((i__4737__auto___43383 < len__4736__auto___43382)){
args_arr__4757__auto__.push((arguments[i__4737__auto___43383]));

var G__43384 = (i__4737__auto___43383 + (1));
i__4737__auto___43383 = G__43384;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__43231_43385 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__43232_43386 = null;
var count__43233_43387 = (0);
var i__43234_43388 = (0);
while(true){
if((i__43234_43388 < count__43233_43387)){
var k_43389 = chunk__43232_43386.cljs$core$IIndexed$_nth$arity$2(null,i__43234_43388);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_43389,applied_science.js_interop.unchecked_get(x,k_43389)], 0));


var G__43390 = seq__43231_43385;
var G__43391 = chunk__43232_43386;
var G__43392 = count__43233_43387;
var G__43393 = (i__43234_43388 + (1));
seq__43231_43385 = G__43390;
chunk__43232_43386 = G__43391;
count__43233_43387 = G__43392;
i__43234_43388 = G__43393;
continue;
} else {
var temp__5735__auto___43394 = cljs.core.seq(seq__43231_43385);
if(temp__5735__auto___43394){
var seq__43231_43395__$1 = temp__5735__auto___43394;
if(cljs.core.chunked_seq_QMARK_(seq__43231_43395__$1)){
var c__4556__auto___43396 = cljs.core.chunk_first(seq__43231_43395__$1);
var G__43397 = cljs.core.chunk_rest(seq__43231_43395__$1);
var G__43398 = c__4556__auto___43396;
var G__43399 = cljs.core.count(c__4556__auto___43396);
var G__43400 = (0);
seq__43231_43385 = G__43397;
chunk__43232_43386 = G__43398;
count__43233_43387 = G__43399;
i__43234_43388 = G__43400;
continue;
} else {
var k_43401 = cljs.core.first(seq__43231_43395__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_43401,applied_science.js_interop.unchecked_get(x,k_43401)], 0));


var G__43402 = cljs.core.next(seq__43231_43395__$1);
var G__43403 = null;
var G__43404 = (0);
var G__43405 = (0);
seq__43231_43385 = G__43402;
chunk__43232_43386 = G__43403;
count__43233_43387 = G__43404;
i__43234_43388 = G__43405;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq43222){
var G__43223 = cljs.core.first(seq43222);
var seq43222__$1 = cljs.core.next(seq43222);
var G__43224 = cljs.core.first(seq43222__$1);
var seq43222__$2 = cljs.core.next(seq43222__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43223,G__43224,seq43222__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__43236 = array;
G__43236.push(x);

return G__43236;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__43240 = array;
G__43240.unshift(x);

return G__43240;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43406 = arguments.length;
var i__4737__auto___43407 = (0);
while(true){
if((i__4737__auto___43407 < len__4736__auto___43406)){
args__4742__auto__.push((arguments[i__4737__auto___43407]));

var G__43408 = (i__4737__auto___43407 + (1));
i__4737__auto___43407 = G__43408;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj43244 = obj;
var k43245 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj43246 = obj43244;
return (((!((obj43246 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k43245,obj43246)));
})()){
return (obj43244[k43245]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq43241){
var G__43242 = cljs.core.first(seq43241);
var seq43241__$1 = cljs.core.next(seq43241);
var G__43243 = cljs.core.first(seq43241__$1);
var seq43241__$2 = cljs.core.next(seq43241__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43242,G__43243,seq43241__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj43249 = obj;
var k43250 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj43252 = obj43249;
return (((!((obj43252 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k43250,obj43252)));
})()){
return (obj43249[k43250]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43413 = arguments.length;
var i__4737__auto___43414 = (0);
while(true){
if((i__4737__auto___43414 < len__4736__auto___43413)){
args__4742__auto__.push((arguments[i__4737__auto___43414]));

var G__43416 = (i__4737__auto___43414 + (1));
i__4737__auto___43414 = G__43416;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq43253){
var G__43254 = cljs.core.first(seq43253);
var seq43253__$1 = cljs.core.next(seq43253);
var G__43255 = cljs.core.first(seq43253__$1);
var seq43253__$2 = cljs.core.next(seq43253__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43254,G__43255,seq43253__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43417 = arguments.length;
var i__4737__auto___43418 = (0);
while(true){
if((i__4737__auto___43418 < len__4736__auto___43417)){
args__4742__auto__.push((arguments[i__4737__auto___43418]));

var G__43419 = (i__4737__auto___43418 + (1));
i__4737__auto___43418 = G__43419;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__43270_43420 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__43271_43421 = null;
var count__43272_43422 = (0);
var i__43273_43423 = (0);
while(true){
if((i__43273_43423 < count__43272_43422)){
var vec__43293_43424 = chunk__43271_43421.cljs$core$IIndexed$_nth$arity$2(null,i__43273_43423);
var k_43425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43293_43424,(0),null);
var v_43426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43293_43424,(1),null);
var obj43296_43427 = obj;
var obj43299_43428 = (((!((obj43296_43427 == null))))?obj43296_43427:({}));
(obj43299_43428[applied_science.js_interop.impl.wrap_key(k_43425)] = v_43426);



var G__43429 = seq__43270_43420;
var G__43430 = chunk__43271_43421;
var G__43431 = count__43272_43422;
var G__43432 = (i__43273_43423 + (1));
seq__43270_43420 = G__43429;
chunk__43271_43421 = G__43430;
count__43272_43422 = G__43431;
i__43273_43423 = G__43432;
continue;
} else {
var temp__5735__auto___43433 = cljs.core.seq(seq__43270_43420);
if(temp__5735__auto___43433){
var seq__43270_43434__$1 = temp__5735__auto___43433;
if(cljs.core.chunked_seq_QMARK_(seq__43270_43434__$1)){
var c__4556__auto___43435 = cljs.core.chunk_first(seq__43270_43434__$1);
var G__43436 = cljs.core.chunk_rest(seq__43270_43434__$1);
var G__43437 = c__4556__auto___43435;
var G__43438 = cljs.core.count(c__4556__auto___43435);
var G__43439 = (0);
seq__43270_43420 = G__43436;
chunk__43271_43421 = G__43437;
count__43272_43422 = G__43438;
i__43273_43423 = G__43439;
continue;
} else {
var vec__43306_43443 = cljs.core.first(seq__43270_43434__$1);
var k_43444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43306_43443,(0),null);
var v_43445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43306_43443,(1),null);
var obj43309_43446 = obj;
var obj43310_43447 = (((!((obj43309_43446 == null))))?obj43309_43446:({}));
(obj43310_43447[applied_science.js_interop.impl.wrap_key(k_43444)] = v_43445);



var G__43448 = cljs.core.next(seq__43270_43434__$1);
var G__43449 = null;
var G__43450 = (0);
var G__43451 = (0);
seq__43270_43420 = G__43448;
chunk__43271_43421 = G__43449;
count__43272_43422 = G__43450;
i__43273_43423 = G__43451;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq43261){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43261));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
