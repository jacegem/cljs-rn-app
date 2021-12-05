goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44354 = arguments.length;
var i__4737__auto___44356 = (0);
while(true){
if((i__4737__auto___44356 < len__4736__auto___44354)){
args__4742__auto__.push((arguments[i__4737__auto___44356]));

var G__44358 = (i__4737__auto___44356 + (1));
i__4737__auto___44356 = G__44358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq43936){
var G__43937 = cljs.core.first(seq43936);
var seq43936__$1 = cljs.core.next(seq43936);
var G__43938 = cljs.core.first(seq43936__$1);
var seq43936__$2 = cljs.core.next(seq43936__$1);
var G__43939 = cljs.core.first(seq43936__$2);
var seq43936__$3 = cljs.core.next(seq43936__$2);
var G__43940 = cljs.core.first(seq43936__$3);
var seq43936__$4 = cljs.core.next(seq43936__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43937,G__43938,G__43939,G__43940,seq43936__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44369 = arguments.length;
var i__4737__auto___44370 = (0);
while(true){
if((i__4737__auto___44370 < len__4736__auto___44369)){
args__4742__auto__.push((arguments[i__4737__auto___44370]));

var G__44371 = (i__4737__auto___44370 + (1));
i__4737__auto___44370 = G__44371;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__43877__auto__,rest__43878__auto__){
var convert_case__43879__auto__ = (function (p1__43876__43880__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__43876__43880__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43878__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43877__auto__,convert_case__43879__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq43959){
var G__43960 = cljs.core.first(seq43959);
var seq43959__$1 = cljs.core.next(seq43959);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43960,seq43959__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44378 = arguments.length;
var i__4737__auto___44382 = (0);
while(true){
if((i__4737__auto___44382 < len__4736__auto___44378)){
args__4742__auto__.push((arguments[i__4737__auto___44382]));

var G__44383 = (i__4737__auto___44382 + (1));
i__4737__auto___44382 = G__44383;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq43974){
var G__43975 = cljs.core.first(seq43974);
var seq43974__$1 = cljs.core.next(seq43974);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43975,seq43974__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44390 = arguments.length;
var i__4737__auto___44391 = (0);
while(true){
if((i__4737__auto___44391 < len__4736__auto___44390)){
args__4742__auto__.push((arguments[i__4737__auto___44391]));

var G__44392 = (i__4737__auto___44391 + (1));
i__4737__auto___44391 = G__44392;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq43991){
var G__43992 = cljs.core.first(seq43991);
var seq43991__$1 = cljs.core.next(seq43991);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43992,seq43991__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44402 = arguments.length;
var i__4737__auto___44403 = (0);
while(true){
if((i__4737__auto___44403 < len__4736__auto___44402)){
args__4742__auto__.push((arguments[i__4737__auto___44403]));

var G__44404 = (i__4737__auto___44403 + (1));
i__4737__auto___44403 = G__44404;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq44059){
var G__44061 = cljs.core.first(seq44059);
var seq44059__$1 = cljs.core.next(seq44059);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44061,seq44059__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44405 = arguments.length;
var i__4737__auto___44406 = (0);
while(true){
if((i__4737__auto___44406 < len__4736__auto___44405)){
args__4742__auto__.push((arguments[i__4737__auto___44406]));

var G__44407 = (i__4737__auto___44406 + (1));
i__4737__auto___44406 = G__44407;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__43877__auto__,rest__43878__auto__){
var convert_case__43879__auto__ = (function (p1__43876__43880__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__43876__43880__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43878__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43877__auto__,convert_case__43879__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq44066){
var G__44067 = cljs.core.first(seq44066);
var seq44066__$1 = cljs.core.next(seq44066);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44067,seq44066__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44409 = arguments.length;
var i__4737__auto___44410 = (0);
while(true){
if((i__4737__auto___44410 < len__4736__auto___44409)){
args__4742__auto__.push((arguments[i__4737__auto___44410]));

var G__44411 = (i__4737__auto___44410 + (1));
i__4737__auto___44410 = G__44411;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq44068){
var G__44069 = cljs.core.first(seq44068);
var seq44068__$1 = cljs.core.next(seq44068);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44069,seq44068__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44416 = arguments.length;
var i__4737__auto___44417 = (0);
while(true){
if((i__4737__auto___44417 < len__4736__auto___44416)){
args__4742__auto__.push((arguments[i__4737__auto___44417]));

var G__44419 = (i__4737__auto___44417 + (1));
i__4737__auto___44417 = G__44419;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq44075){
var G__44076 = cljs.core.first(seq44075);
var seq44075__$1 = cljs.core.next(seq44075);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44076,seq44075__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44420 = arguments.length;
var i__4737__auto___44421 = (0);
while(true){
if((i__4737__auto___44421 < len__4736__auto___44420)){
args__4742__auto__.push((arguments[i__4737__auto___44421]));

var G__44422 = (i__4737__auto___44421 + (1));
i__4737__auto___44421 = G__44422;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq44077){
var G__44078 = cljs.core.first(seq44077);
var seq44077__$1 = cljs.core.next(seq44077);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44078,seq44077__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44427 = arguments.length;
var i__4737__auto___44428 = (0);
while(true){
if((i__4737__auto___44428 < len__4736__auto___44427)){
args__4742__auto__.push((arguments[i__4737__auto___44428]));

var G__44429 = (i__4737__auto___44428 + (1));
i__4737__auto___44428 = G__44429;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__43877__auto__,rest__43878__auto__){
var convert_case__43879__auto__ = (function (p1__43876__43880__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__43876__43880__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43878__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43877__auto__,convert_case__43879__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq44086){
var G__44087 = cljs.core.first(seq44086);
var seq44086__$1 = cljs.core.next(seq44086);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44087,seq44086__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44431 = arguments.length;
var i__4737__auto___44433 = (0);
while(true){
if((i__4737__auto___44433 < len__4736__auto___44431)){
args__4742__auto__.push((arguments[i__4737__auto___44433]));

var G__44434 = (i__4737__auto___44433 + (1));
i__4737__auto___44433 = G__44434;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq44092){
var G__44093 = cljs.core.first(seq44092);
var seq44092__$1 = cljs.core.next(seq44092);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44093,seq44092__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44438 = arguments.length;
var i__4737__auto___44439 = (0);
while(true){
if((i__4737__auto___44439 < len__4736__auto___44438)){
args__4742__auto__.push((arguments[i__4737__auto___44439]));

var G__44440 = (i__4737__auto___44439 + (1));
i__4737__auto___44439 = G__44440;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq44100){
var G__44101 = cljs.core.first(seq44100);
var seq44100__$1 = cljs.core.next(seq44100);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44101,seq44100__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44447 = arguments.length;
var i__4737__auto___44448 = (0);
while(true){
if((i__4737__auto___44448 < len__4736__auto___44447)){
args__4742__auto__.push((arguments[i__4737__auto___44448]));

var G__44449 = (i__4737__auto___44448 + (1));
i__4737__auto___44448 = G__44449;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq44103){
var G__44104 = cljs.core.first(seq44103);
var seq44103__$1 = cljs.core.next(seq44103);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44104,seq44103__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44451 = arguments.length;
var i__4737__auto___44452 = (0);
while(true){
if((i__4737__auto___44452 < len__4736__auto___44451)){
args__4742__auto__.push((arguments[i__4737__auto___44452]));

var G__44457 = (i__4737__auto___44452 + (1));
i__4737__auto___44452 = G__44457;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__43877__auto__,rest__43878__auto__){
var convert_case__43879__auto__ = (function (p1__43876__43880__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__43876__43880__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43878__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43877__auto__,convert_case__43879__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq44109){
var G__44110 = cljs.core.first(seq44109);
var seq44109__$1 = cljs.core.next(seq44109);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44110,seq44109__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44459 = arguments.length;
var i__4737__auto___44460 = (0);
while(true){
if((i__4737__auto___44460 < len__4736__auto___44459)){
args__4742__auto__.push((arguments[i__4737__auto___44460]));

var G__44462 = (i__4737__auto___44460 + (1));
i__4737__auto___44460 = G__44462;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq44121){
var G__44122 = cljs.core.first(seq44121);
var seq44121__$1 = cljs.core.next(seq44121);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44122,seq44121__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44471 = arguments.length;
var i__4737__auto___44472 = (0);
while(true){
if((i__4737__auto___44472 < len__4736__auto___44471)){
args__4742__auto__.push((arguments[i__4737__auto___44472]));

var G__44473 = (i__4737__auto___44472 + (1));
i__4737__auto___44472 = G__44473;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq44125){
var G__44126 = cljs.core.first(seq44125);
var seq44125__$1 = cljs.core.next(seq44125);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44126,seq44125__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44475 = arguments.length;
var i__4737__auto___44476 = (0);
while(true){
if((i__4737__auto___44476 < len__4736__auto___44475)){
args__4742__auto__.push((arguments[i__4737__auto___44476]));

var G__44477 = (i__4737__auto___44476 + (1));
i__4737__auto___44476 = G__44477;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq44132){
var G__44133 = cljs.core.first(seq44132);
var seq44132__$1 = cljs.core.next(seq44132);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44133,seq44132__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44479 = arguments.length;
var i__4737__auto___44480 = (0);
while(true){
if((i__4737__auto___44480 < len__4736__auto___44479)){
args__4742__auto__.push((arguments[i__4737__auto___44480]));

var G__44481 = (i__4737__auto___44480 + (1));
i__4737__auto___44480 = G__44481;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__43877__auto__,rest__43878__auto__){
var convert_case__43879__auto__ = (function (p1__43876__43880__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__43876__43880__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43878__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43877__auto__,convert_case__43879__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq44139){
var G__44140 = cljs.core.first(seq44139);
var seq44139__$1 = cljs.core.next(seq44139);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44140,seq44139__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44483 = arguments.length;
var i__4737__auto___44484 = (0);
while(true){
if((i__4737__auto___44484 < len__4736__auto___44483)){
args__4742__auto__.push((arguments[i__4737__auto___44484]));

var G__44485 = (i__4737__auto___44484 + (1));
i__4737__auto___44484 = G__44485;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq44145){
var G__44146 = cljs.core.first(seq44145);
var seq44145__$1 = cljs.core.next(seq44145);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44146,seq44145__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44494 = arguments.length;
var i__4737__auto___44495 = (0);
while(true){
if((i__4737__auto___44495 < len__4736__auto___44494)){
args__4742__auto__.push((arguments[i__4737__auto___44495]));

var G__44496 = (i__4737__auto___44495 + (1));
i__4737__auto___44495 = G__44496;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq44147){
var G__44148 = cljs.core.first(seq44147);
var seq44147__$1 = cljs.core.next(seq44147);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44148,seq44147__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44502 = arguments.length;
var i__4737__auto___44503 = (0);
while(true){
if((i__4737__auto___44503 < len__4736__auto___44502)){
args__4742__auto__.push((arguments[i__4737__auto___44503]));

var G__44504 = (i__4737__auto___44503 + (1));
i__4737__auto___44503 = G__44504;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq44158){
var G__44159 = cljs.core.first(seq44158);
var seq44158__$1 = cljs.core.next(seq44158);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44159,seq44158__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44506 = arguments.length;
var i__4737__auto___44507 = (0);
while(true){
if((i__4737__auto___44507 < len__4736__auto___44506)){
args__4742__auto__.push((arguments[i__4737__auto___44507]));

var G__44508 = (i__4737__auto___44507 + (1));
i__4737__auto___44507 = G__44508;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__43877__auto__,rest__43878__auto__){
var convert_case__43879__auto__ = (function (p1__43876__43880__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__43876__43880__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43878__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43877__auto__,convert_case__43879__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq44174){
var G__44175 = cljs.core.first(seq44174);
var seq44174__$1 = cljs.core.next(seq44174);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44175,seq44174__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44509 = arguments.length;
var i__4737__auto___44510 = (0);
while(true){
if((i__4737__auto___44510 < len__4736__auto___44509)){
args__4742__auto__.push((arguments[i__4737__auto___44510]));

var G__44512 = (i__4737__auto___44510 + (1));
i__4737__auto___44510 = G__44512;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq44194){
var G__44195 = cljs.core.first(seq44194);
var seq44194__$1 = cljs.core.next(seq44194);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44195,seq44194__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44513 = arguments.length;
var i__4737__auto___44514 = (0);
while(true){
if((i__4737__auto___44514 < len__4736__auto___44513)){
args__4742__auto__.push((arguments[i__4737__auto___44514]));

var G__44515 = (i__4737__auto___44514 + (1));
i__4737__auto___44514 = G__44515;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq44215){
var G__44216 = cljs.core.first(seq44215);
var seq44215__$1 = cljs.core.next(seq44215);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44216,seq44215__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44520 = arguments.length;
var i__4737__auto___44521 = (0);
while(true){
if((i__4737__auto___44521 < len__4736__auto___44520)){
args__4742__auto__.push((arguments[i__4737__auto___44521]));

var G__44522 = (i__4737__auto___44521 + (1));
i__4737__auto___44521 = G__44522;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq44247){
var G__44248 = cljs.core.first(seq44247);
var seq44247__$1 = cljs.core.next(seq44247);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44248,seq44247__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44533 = arguments.length;
var i__4737__auto___44534 = (0);
while(true){
if((i__4737__auto___44534 < len__4736__auto___44533)){
args__4742__auto__.push((arguments[i__4737__auto___44534]));

var G__44535 = (i__4737__auto___44534 + (1));
i__4737__auto___44534 = G__44535;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__43877__auto__,rest__43878__auto__){
var convert_case__43879__auto__ = (function (p1__43876__43880__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__43876__43880__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43878__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__43877__auto__,convert_case__43879__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq44272){
var G__44273 = cljs.core.first(seq44272);
var seq44272__$1 = cljs.core.next(seq44272);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44273,seq44272__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44536 = arguments.length;
var i__4737__auto___44540 = (0);
while(true){
if((i__4737__auto___44540 < len__4736__auto___44536)){
args__4742__auto__.push((arguments[i__4737__auto___44540]));

var G__44541 = (i__4737__auto___44540 + (1));
i__4737__auto___44540 = G__44541;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq44291){
var G__44292 = cljs.core.first(seq44291);
var seq44291__$1 = cljs.core.next(seq44291);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44292,seq44291__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44547 = arguments.length;
var i__4737__auto___44551 = (0);
while(true){
if((i__4737__auto___44551 < len__4736__auto___44547)){
args__4742__auto__.push((arguments[i__4737__auto___44551]));

var G__44554 = (i__4737__auto___44551 + (1));
i__4737__auto___44551 = G__44554;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq44307){
var G__44308 = cljs.core.first(seq44307);
var seq44307__$1 = cljs.core.next(seq44307);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44308,seq44307__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44556 = arguments.length;
var i__4737__auto___44557 = (0);
while(true){
if((i__4737__auto___44557 < len__4736__auto___44556)){
args__4742__auto__.push((arguments[i__4737__auto___44557]));

var G__44558 = (i__4737__auto___44557 + (1));
i__4737__auto___44557 = G__44558;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__43889__auto__,rest__43890__auto__){
if((!((s__43889__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__43889__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__43889__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__43890__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq44332){
var G__44333 = cljs.core.first(seq44332);
var seq44332__$1 = cljs.core.next(seq44332);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44333,seq44332__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
