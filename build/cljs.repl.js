goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56500){
var map__56501 = p__56500;
var map__56501__$1 = (((((!((map__56501 == null))))?(((((map__56501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56501):map__56501);
var m = map__56501__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56501__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56501__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56503_56604 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56504_56605 = null;
var count__56505_56606 = (0);
var i__56506_56607 = (0);
while(true){
if((i__56506_56607 < count__56505_56606)){
var f_56608 = chunk__56504_56605.cljs$core$IIndexed$_nth$arity$2(null,i__56506_56607);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56608], 0));


var G__56609 = seq__56503_56604;
var G__56610 = chunk__56504_56605;
var G__56611 = count__56505_56606;
var G__56612 = (i__56506_56607 + (1));
seq__56503_56604 = G__56609;
chunk__56504_56605 = G__56610;
count__56505_56606 = G__56611;
i__56506_56607 = G__56612;
continue;
} else {
var temp__5735__auto___56613 = cljs.core.seq(seq__56503_56604);
if(temp__5735__auto___56613){
var seq__56503_56614__$1 = temp__5735__auto___56613;
if(cljs.core.chunked_seq_QMARK_(seq__56503_56614__$1)){
var c__4556__auto___56615 = cljs.core.chunk_first(seq__56503_56614__$1);
var G__56616 = cljs.core.chunk_rest(seq__56503_56614__$1);
var G__56617 = c__4556__auto___56615;
var G__56618 = cljs.core.count(c__4556__auto___56615);
var G__56619 = (0);
seq__56503_56604 = G__56616;
chunk__56504_56605 = G__56617;
count__56505_56606 = G__56618;
i__56506_56607 = G__56619;
continue;
} else {
var f_56620 = cljs.core.first(seq__56503_56614__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56620], 0));


var G__56621 = cljs.core.next(seq__56503_56614__$1);
var G__56622 = null;
var G__56623 = (0);
var G__56624 = (0);
seq__56503_56604 = G__56621;
chunk__56504_56605 = G__56622;
count__56505_56606 = G__56623;
i__56506_56607 = G__56624;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56625 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_56625], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_56625)))?cljs.core.second(arglists_56625):arglists_56625)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56507_56626 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56508_56627 = null;
var count__56509_56628 = (0);
var i__56510_56629 = (0);
while(true){
if((i__56510_56629 < count__56509_56628)){
var vec__56521_56630 = chunk__56508_56627.cljs$core$IIndexed$_nth$arity$2(null,i__56510_56629);
var name_56631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56521_56630,(0),null);
var map__56524_56632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56521_56630,(1),null);
var map__56524_56633__$1 = (((((!((map__56524_56632 == null))))?(((((map__56524_56632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56524_56632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56524_56632):map__56524_56632);
var doc_56634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56524_56633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56524_56633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56631], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56635], 0));

if(cljs.core.truth_(doc_56634)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56634], 0));
} else {
}


var G__56636 = seq__56507_56626;
var G__56637 = chunk__56508_56627;
var G__56638 = count__56509_56628;
var G__56639 = (i__56510_56629 + (1));
seq__56507_56626 = G__56636;
chunk__56508_56627 = G__56637;
count__56509_56628 = G__56638;
i__56510_56629 = G__56639;
continue;
} else {
var temp__5735__auto___56640 = cljs.core.seq(seq__56507_56626);
if(temp__5735__auto___56640){
var seq__56507_56641__$1 = temp__5735__auto___56640;
if(cljs.core.chunked_seq_QMARK_(seq__56507_56641__$1)){
var c__4556__auto___56642 = cljs.core.chunk_first(seq__56507_56641__$1);
var G__56643 = cljs.core.chunk_rest(seq__56507_56641__$1);
var G__56644 = c__4556__auto___56642;
var G__56645 = cljs.core.count(c__4556__auto___56642);
var G__56646 = (0);
seq__56507_56626 = G__56643;
chunk__56508_56627 = G__56644;
count__56509_56628 = G__56645;
i__56510_56629 = G__56646;
continue;
} else {
var vec__56526_56647 = cljs.core.first(seq__56507_56641__$1);
var name_56648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56526_56647,(0),null);
var map__56529_56649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56526_56647,(1),null);
var map__56529_56650__$1 = (((((!((map__56529_56649 == null))))?(((((map__56529_56649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56529_56649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56529_56649):map__56529_56649);
var doc_56651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56529_56650__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56529_56650__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56648], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56652], 0));

if(cljs.core.truth_(doc_56651)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56651], 0));
} else {
}


var G__56653 = cljs.core.next(seq__56507_56641__$1);
var G__56654 = null;
var G__56655 = (0);
var G__56656 = (0);
seq__56507_56626 = G__56653;
chunk__56508_56627 = G__56654;
count__56509_56628 = G__56655;
i__56510_56629 = G__56656;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__56531 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56532 = null;
var count__56533 = (0);
var i__56534 = (0);
while(true){
if((i__56534 < count__56533)){
var role = chunk__56532.cljs$core$IIndexed$_nth$arity$2(null,i__56534);
var temp__5735__auto___56657__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___56657__$1)){
var spec_56658 = temp__5735__auto___56657__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56658)], 0));
} else {
}


var G__56659 = seq__56531;
var G__56660 = chunk__56532;
var G__56661 = count__56533;
var G__56662 = (i__56534 + (1));
seq__56531 = G__56659;
chunk__56532 = G__56660;
count__56533 = G__56661;
i__56534 = G__56662;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56531);
if(temp__5735__auto____$1){
var seq__56531__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56531__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56531__$1);
var G__56663 = cljs.core.chunk_rest(seq__56531__$1);
var G__56664 = c__4556__auto__;
var G__56665 = cljs.core.count(c__4556__auto__);
var G__56666 = (0);
seq__56531 = G__56663;
chunk__56532 = G__56664;
count__56533 = G__56665;
i__56534 = G__56666;
continue;
} else {
var role = cljs.core.first(seq__56531__$1);
var temp__5735__auto___56667__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___56667__$2)){
var spec_56668 = temp__5735__auto___56667__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56668)], 0));
} else {
}


var G__56669 = cljs.core.next(seq__56531__$1);
var G__56670 = null;
var G__56671 = (0);
var G__56672 = (0);
seq__56531 = G__56669;
chunk__56532 = G__56670;
count__56533 = G__56671;
i__56534 = G__56672;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__56673 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__56674 = cljs.core.ex_cause(t);
via = G__56673;
t = G__56674;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__56537 = datafied_throwable;
var map__56537__$1 = (((((!((map__56537 == null))))?(((((map__56537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56537):map__56537);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56537__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56537__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56538 = cljs.core.last(via);
var map__56538__$1 = (((((!((map__56538 == null))))?(((((map__56538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56538):map__56538);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56538__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56538__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56538__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56539 = data;
var map__56539__$1 = (((((!((map__56539 == null))))?(((((map__56539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56539):map__56539);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56539__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56539__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56539__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56540 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56540__$1 = (((((!((map__56540 == null))))?(((((map__56540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56540):map__56540);
var top_data = map__56540__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56540__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56545 = phase;
var G__56545__$1 = (((G__56545 instanceof cljs.core.Keyword))?G__56545.fqn:null);
switch (G__56545__$1) {
case "read-source":
var map__56546 = data;
var map__56546__$1 = (((((!((map__56546 == null))))?(((((map__56546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56546):map__56546);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56546__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56548 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56548__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56548,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56548);
var G__56548__$2 = (cljs.core.truth_((function (){var fexpr__56549 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56549.cljs$core$IFn$_invoke$arity$1 ? fexpr__56549.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56549.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56548__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56548__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56548__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56550 = top_data;
var G__56550__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56550,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56550);
var G__56550__$2 = (cljs.core.truth_((function (){var fexpr__56551 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56551.cljs$core$IFn$_invoke$arity$1 ? fexpr__56551.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56551.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56550__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56550__$1);
var G__56550__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56550__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56550__$2);
var G__56550__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56550__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56550__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56550__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56550__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56552 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56552,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56552,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56552,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56552,(3),null);
var G__56555 = top_data;
var G__56555__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56555,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56555);
var G__56555__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56555__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56555__$1);
var G__56555__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56555__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56555__$2);
var G__56555__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56555__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56555__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56555__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56555__$4;
}

break;
case "execution":
var vec__56556 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56556,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56556,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56556,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56556,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56536_SHARP_){
var or__4126__auto__ = (p1__56536_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56560 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56560.cljs$core$IFn$_invoke$arity$1 ? fexpr__56560.cljs$core$IFn$_invoke$arity$1(p1__56536_SHARP_) : fexpr__56560.call(null,p1__56536_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56561 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56561__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56561,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56561);
var G__56561__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56561__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56561__$1);
var G__56561__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56561__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56561__$2);
var G__56561__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56561__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56561__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56561__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56561__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56545__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56564){
var map__56565 = p__56564;
var map__56565__$1 = (((((!((map__56565 == null))))?(((((map__56565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56565):map__56565);
var triage_data = map__56565__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56565__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__56567 = phase;
var G__56567__$1 = (((G__56567 instanceof cljs.core.Keyword))?G__56567.fqn:null);
switch (G__56567__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56568 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56569 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56570 = loc;
var G__56571 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56572_56677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56573_56678 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56574_56679 = true;
var _STAR_print_fn_STAR__temp_val__56575_56680 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56574_56679);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56575_56680);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56562_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56562_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56573_56678);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56572_56677);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56568,G__56569,G__56570,G__56571) : format.call(null,G__56568,G__56569,G__56570,G__56571));

break;
case "macroexpansion":
var G__56576 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56577 = cause_type;
var G__56578 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56579 = loc;
var G__56580 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56576,G__56577,G__56578,G__56579,G__56580) : format.call(null,G__56576,G__56577,G__56578,G__56579,G__56580));

break;
case "compile-syntax-check":
var G__56581 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56582 = cause_type;
var G__56583 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56584 = loc;
var G__56585 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56581,G__56582,G__56583,G__56584,G__56585) : format.call(null,G__56581,G__56582,G__56583,G__56584,G__56585));

break;
case "compilation":
var G__56586 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56587 = cause_type;
var G__56588 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56589 = loc;
var G__56590 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56586,G__56587,G__56588,G__56589,G__56590) : format.call(null,G__56586,G__56587,G__56588,G__56589,G__56590));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56591 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56592 = symbol;
var G__56593 = loc;
var G__56594 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56595_56681 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56596_56682 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56597_56683 = true;
var _STAR_print_fn_STAR__temp_val__56598_56684 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56597_56683);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56598_56684);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56563_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56563_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56596_56682);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56595_56681);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56591,G__56592,G__56593,G__56594) : format.call(null,G__56591,G__56592,G__56593,G__56594));
} else {
var G__56599 = "Execution error%s at %s(%s).\n%s\n";
var G__56600 = cause_type;
var G__56601 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56602 = loc;
var G__56603 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56599,G__56600,G__56601,G__56602,G__56603) : format.call(null,G__56599,G__56600,G__56601,G__56602,G__56603));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56567__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
