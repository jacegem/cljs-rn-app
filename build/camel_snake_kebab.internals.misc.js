goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43606 = arguments.length;
var i__4737__auto___43607 = (0);
while(true){
if((i__4737__auto___43607 < len__4736__auto___43606)){
args__4742__auto__.push((arguments[i__4737__auto___43607]));

var G__43608 = (i__4737__auto___43607 + (1));
i__4737__auto___43607 = G__43608;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__43590){
var map__43591 = p__43590;
var map__43591__$1 = (((((!((map__43591 == null))))?(((((map__43591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43591):map__43591);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43591__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__43593 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__43594 = cljs.core.seq(vec__43593);
var first__43595 = cljs.core.first(seq__43594);
var seq__43594__$1 = cljs.core.next(seq__43594);
var first = first__43595;
var rest = seq__43594__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq43582){
var G__43583 = cljs.core.first(seq43582);
var seq43582__$1 = cljs.core.next(seq43582);
var G__43584 = cljs.core.first(seq43582__$1);
var seq43582__$2 = cljs.core.next(seq43582__$1);
var G__43585 = cljs.core.first(seq43582__$2);
var seq43582__$3 = cljs.core.next(seq43582__$2);
var G__43586 = cljs.core.first(seq43582__$3);
var seq43582__$4 = cljs.core.next(seq43582__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43583,G__43584,G__43585,G__43586,seq43582__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4126__auto__ = (function (){var G__43604 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__43604) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__43604));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
