goog.provide('spec_tools.core');
spec_tools.core.registry = (function spec_tools$core$registry(var_args){
var G__56066 = arguments.length;
switch (G__56066) {
case 0:
return spec_tools.core.registry.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return spec_tools.core.registry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.registry.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.alpha.registry();
}));

(spec_tools.core.registry.cljs$core$IFn$_invoke$arity$1 = (function (re){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56062_SHARP_){
return cljs.core.re_matches(re,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__56062_SHARP_)),(1)));
}),cljs.spec.alpha.registry()));
}));

(spec_tools.core.registry.cljs$lang$maxFixedArity = 1);

/**
 * Finds recursively a spec implementation from the registry
 */
spec_tools.core.get_spec = (function spec_tools$core$get_spec(name){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha.registry(),name);
if(cljs.core.truth_(temp__5733__auto__)){
var spec = temp__5733__auto__;
if((spec instanceof cljs.core.Keyword)){
return (spec_tools.core.get_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.get_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.get_spec.call(null,spec));
} else {
return spec;
}
} else {
return null;
}
});
/**
 * Returns a spec from a spec name or spec. Throws exception
 *   if no spec was found.
 */
spec_tools.core.coerce_spec = (function spec_tools$core$coerce_spec(name_or_spec){
var or__4126__auto__ = (function (){var and__4115__auto__ = (spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1(name_or_spec) : spec_tools.core.spec_QMARK_.call(null,name_or_spec));
if(cljs.core.truth_(and__4115__auto__)){
return name_or_spec;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = spec_tools.core.get_spec(name_or_spec);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["can't coerce to spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_or_spec)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name-or-spec","name-or-spec",-1287260145),name_or_spec], null));
}
}
});
/**
 * Writes specs into a string that can be read by the reader.
 *   TODO: Should optionally write the related Registry entries.
 */
spec_tools.core.serialize = (function spec_tools$core$serialize(spec){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha.form(spec)], 0));
});
/**
 * Reads specs from a string.
 *   TODO: Should optionally read the related Registry entries.
 */
spec_tools.core.deserialize = (function spec_tools$core$deserialize(s){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
});
spec_tools.core._STAR_transformer_STAR_ = null;
spec_tools.core._STAR_encode_QMARK__STAR_ = null;

/**
 * @interface
 */
spec_tools.core.Coercion = function(){};

var spec_tools$core$Coercion$_coerce$dyn_56262 = (function (this$,value,transformer,options){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (spec_tools.core._coerce[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(this$,value,transformer,options) : m__4429__auto__.call(null,this$,value,transformer,options));
} else {
var m__4426__auto__ = (spec_tools.core._coerce["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(this$,value,transformer,options) : m__4426__auto__.call(null,this$,value,transformer,options));
} else {
throw cljs.core.missing_protocol("Coercion.-coerce",this$);
}
}
});
spec_tools.core._coerce = (function spec_tools$core$_coerce(this$,value,transformer,options){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Coercion$_coerce$arity$4 == null)))))){
return this$.spec_tools$core$Coercion$_coerce$arity$4(this$,value,transformer,options);
} else {
return spec_tools$core$Coercion$_coerce$dyn_56262(this$,value,transformer,options);
}
});


/**
 * @interface
 */
spec_tools.core.Transformer = function(){};

var spec_tools$core$Transformer$_name$dyn_56263 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (spec_tools.core._name[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (spec_tools.core._name["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Transformer.-name",this$);
}
}
});
spec_tools.core._name = (function spec_tools$core$_name(this$){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_name$arity$1 == null)))))){
return this$.spec_tools$core$Transformer$_name$arity$1(this$);
} else {
return spec_tools$core$Transformer$_name$dyn_56263(this$);
}
});

var spec_tools$core$Transformer$_options$dyn_56265 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (spec_tools.core._options[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (spec_tools.core._options["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Transformer.-options",this$);
}
}
});
spec_tools.core._options = (function spec_tools$core$_options(this$){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_options$arity$1 == null)))))){
return this$.spec_tools$core$Transformer$_options$arity$1(this$);
} else {
return spec_tools$core$Transformer$_options$dyn_56265(this$);
}
});

var spec_tools$core$Transformer$_encoder$dyn_56270 = (function (this$,spec,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (spec_tools.core._encoder[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4429__auto__.call(null,this$,spec,value));
} else {
var m__4426__auto__ = (spec_tools.core._encoder["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4426__auto__.call(null,this$,spec,value));
} else {
throw cljs.core.missing_protocol("Transformer.-encoder",this$);
}
}
});
spec_tools.core._encoder = (function spec_tools$core$_encoder(this$,spec,value){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_encoder$arity$3 == null)))))){
return this$.spec_tools$core$Transformer$_encoder$arity$3(this$,spec,value);
} else {
return spec_tools$core$Transformer$_encoder$dyn_56270(this$,spec,value);
}
});

var spec_tools$core$Transformer$_decoder$dyn_56271 = (function (this$,spec,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (spec_tools.core._decoder[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4429__auto__.call(null,this$,spec,value));
} else {
var m__4426__auto__ = (spec_tools.core._decoder["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,spec,value) : m__4426__auto__.call(null,this$,spec,value));
} else {
throw cljs.core.missing_protocol("Transformer.-decoder",this$);
}
}
});
spec_tools.core._decoder = (function spec_tools$core$_decoder(this$,spec,value){
if((((!((this$ == null)))) && ((!((this$.spec_tools$core$Transformer$_decoder$arity$3 == null)))))){
return this$.spec_tools$core$Transformer$_decoder$arity$3(this$,spec,value);
} else {
return spec_tools$core$Transformer$_decoder$dyn_56271(this$,spec,value);
}
});

/**
 * Returns a Transformer instance out of options map or Transformer instances.
 *   Available options:
 * 
 *   | Key                | Description
 *   |--------------------|-----------------
 *   | `:name`            | Name of the transformer
 *   | `:encoders`        | Map of type `type -> transform`
 *   | `:decoders`        | Map of type `type -> transform`
 *   | `:default-encoder` | Default `transform` for encoding
 *   | `:default-decoder` | Default `transform` for decoding
 * 
 *   Example of a JSON type-transformer:
 * 
 *   ```clojure
 *   (require '[spec-tools.core :as st])
 *   (require '[spec-tools.transform :as stt])
 * 
 *   (def json-transformer
 *  (type-transformer
 *    {:name :json
 *     :decoders stt/json-type-decoders
 *     :encoders stt/json-type-encoders
 *     :default-encoder stt/any->any}))
 *   ```
 * 
 *   Composed Strict JSON Transformer:
 * 
 *   ```clojure
 *   (def strict-json-transformer
 *  (st/type-transformer
 *    st/json-transformer
 *    st/strip-extra-keys-transformer
 *    st/strip-extra-values-transformer))
 *   ```
 */
spec_tools.core.type_transformer = (function spec_tools$core$type_transformer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___56272 = arguments.length;
var i__4737__auto___56273 = (0);
while(true){
if((i__4737__auto___56273 < len__4736__auto___56272)){
args__4742__auto__.push((arguments[i__4737__auto___56273]));

var G__56274 = (i__4737__auto___56273 + (1));
i__4737__auto___56273 = G__56274;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic = (function (options_or_transformers){
var __GT_opts = (function (p1__56074_SHARP_){
if((((!((p1__56074_SHARP_ == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__56074_SHARP_.spec_tools$core$Transformer$))))?true:(((!p1__56074_SHARP_.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(spec_tools.core.Transformer,p1__56074_SHARP_):false)):cljs.core.native_satisfies_QMARK_(spec_tools.core.Transformer,p1__56074_SHARP_))){
return spec_tools.core._options(p1__56074_SHARP_);
} else {
return p1__56074_SHARP_;
}
});
var map__56077 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(spec_tools.impl.deep_merge,null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(__GT_opts,options_or_transformers));
var map__56077__$1 = (((((!((map__56077 == null))))?(((((map__56077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56077):map__56077);
var options = map__56077__$1;
var transformer_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var encoders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56077__$1,new cljs.core.Keyword(null,"encoders","encoders",-111722908));
var decoders = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56077__$1,new cljs.core.Keyword(null,"decoders","decoders",1132818244));
var default_encoder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56077__$1,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207));
var default_decoder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56077__$1,new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161));
var encode_key = (function (){var G__56080 = transformer_name;
var G__56080__$1 = (((G__56080 == null))?null:cljs.core.name(G__56080));
var G__56080__$2 = (((G__56080__$1 == null))?null:["encode/",G__56080__$1].join(''));
if((G__56080__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__56080__$2);
}
})();
var decode_key = (function (){var G__56081 = transformer_name;
var G__56081__$1 = (((G__56081 == null))?null:cljs.core.name(G__56081));
var G__56081__$2 = (((G__56081__$1 == null))?null:["decode/",G__56081__$1].join(''));
if((G__56081__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__56081__$2);
}
})();
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.t_spec_tools$core56082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
spec_tools.core.t_spec_tools$core56082 = (function (options,encoders,decoders,default_decoder,transformer_name,map__56077,encode_key,decode_key,__GT_opts,default_encoder,options_or_transformers,meta56083){
this.options = options;
this.encoders = encoders;
this.decoders = decoders;
this.default_decoder = default_decoder;
this.transformer_name = transformer_name;
this.map__56077 = map__56077;
this.encode_key = encode_key;
this.decode_key = decode_key;
this.__GT_opts = __GT_opts;
this.default_encoder = default_encoder;
this.options_or_transformers = options_or_transformers;
this.meta56083 = meta56083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(spec_tools.core.t_spec_tools$core56082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56084,meta56083__$1){
var self__ = this;
var _56084__$1 = this;
return (new spec_tools.core.t_spec_tools$core56082(self__.options,self__.encoders,self__.decoders,self__.default_decoder,self__.transformer_name,self__.map__56077,self__.encode_key,self__.decode_key,self__.__GT_opts,self__.default_encoder,self__.options_or_transformers,meta56083__$1));
}));

(spec_tools.core.t_spec_tools$core56082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56084){
var self__ = this;
var _56084__$1 = this;
return self__.meta56083;
}));

(spec_tools.core.t_spec_tools$core56082.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.t_spec_tools$core56082.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.transformer_name;
}));

(spec_tools.core.t_spec_tools$core56082.prototype.spec_tools$core$Transformer$_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.options;
}));

(spec_tools.core.t_spec_tools$core56082.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,spec,___$1){
var self__ = this;
var ___$2 = this;
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,self__.encode_key);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.encoders,spec_tools.parse.type_dispatch_value(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return self__.default_encoder;
}
}
}));

(spec_tools.core.t_spec_tools$core56082.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,spec,___$1){
var self__ = this;
var ___$2 = this;
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(spec,self__.decode_key);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.decoders,spec_tools.parse.type_dispatch_value(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec)));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return self__.default_decoder;
}
}
}));

(spec_tools.core.t_spec_tools$core56082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"encoders","encoders",1528808619,null),new cljs.core.Symbol(null,"decoders","decoders",-1521617525,null),new cljs.core.Symbol(null,"default-decoder","default-decoder",-1846078608,null),new cljs.core.Symbol(null,"transformer-name","transformer-name",1500736595,null),new cljs.core.Symbol(null,"map__56077","map__56077",781092275,null),new cljs.core.Symbol(null,"encode-key","encode-key",61285653,null),new cljs.core.Symbol(null,"decode-key","decode-key",-1250072619,null),new cljs.core.Symbol(null,"->opts","->opts",-1799002948,null),new cljs.core.Symbol(null,"default-encoder","default-encoder",1758072734,null),new cljs.core.Symbol(null,"options-or-transformers","options-or-transformers",878001150,null),new cljs.core.Symbol(null,"meta56083","meta56083",1851890600,null)], null);
}));

(spec_tools.core.t_spec_tools$core56082.cljs$lang$type = true);

(spec_tools.core.t_spec_tools$core56082.cljs$lang$ctorStr = "spec-tools.core/t_spec_tools$core56082");

(spec_tools.core.t_spec_tools$core56082.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"spec-tools.core/t_spec_tools$core56082");
}));

/**
 * Positional factory function for spec-tools.core/t_spec_tools$core56082.
 */
spec_tools.core.__GT_t_spec_tools$core56082 = (function spec_tools$core$__GT_t_spec_tools$core56082(options__$1,encoders__$1,decoders__$1,default_decoder__$1,transformer_name__$1,map__56077__$2,encode_key__$1,decode_key__$1,__GT_opts__$1,default_encoder__$1,options_or_transformers__$1,meta56083){
return (new spec_tools.core.t_spec_tools$core56082(options__$1,encoders__$1,decoders__$1,default_decoder__$1,transformer_name__$1,map__56077__$2,encode_key__$1,decode_key__$1,__GT_opts__$1,default_encoder__$1,options_or_transformers__$1,meta56083));
});

}

return (new spec_tools.core.t_spec_tools$core56082(options,encoders,decoders,default_decoder,transformer_name,map__56077__$1,encode_key,decode_key,__GT_opts,default_encoder,options_or_transformers,cljs.core.PersistentArrayMap.EMPTY));
}));

(spec_tools.core.type_transformer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(spec_tools.core.type_transformer.cljs$lang$applyTo = (function (seq56076){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56076));
}));

/**
 * Transformer that transforms data between JSON and EDN.
 */
spec_tools.core.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.json_type_decoders,new cljs.core.Keyword(null,"encoders","encoders",-111722908),spec_tools.transform.json_type_encoders,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),spec_tools.transform.any__GT_any], null)], 0));
/**
 * Transformer that transforms data between Strings and EDN.
 */
spec_tools.core.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.string_type_decoders,new cljs.core.Keyword(null,"encoders","encoders",-111722908),spec_tools.transform.string_type_encoders,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),spec_tools.transform.any__GT_any], null)], 0));
/**
 * Transformer that drop extra keys from `s/keys` specs.
 */
spec_tools.core.strip_extra_keys_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("spec-tools.core","strip-extra-keys","spec-tools.core/strip-extra-keys",-1640458075),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.strip_extra_keys_type_decoders], null)], 0));
/**
 * Transformer that drop extra values from `s/tuple` specs.
 */
spec_tools.core.strip_extra_values_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("spec-tools.core","strip-extra-values","spec-tools.core/strip-extra-values",368120531),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.strip_extra_values_type_decoders], null)], 0));
/**
 * Transformer that fails on extra keys in `s/keys` specs.
 */
spec_tools.core.fail_on_extra_keys_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("spec-tools.core","fail-on-extra-keys","spec-tools.core/fail-on-extra-keys",-434971052),new cljs.core.Keyword(null,"decoders","decoders",1132818244),spec_tools.transform.fail_on_extra_keys_type_decoders], null)], 0));
/**
 * Like `clojure.core.alpha/explain` but supports transformers
 */
spec_tools.core.explain = (function spec_tools$core$explain(var_args){
var G__56090 = arguments.length;
switch (G__56090) {
case 2:
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.explain.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3(spec,value,null);
}));

(spec_tools.core.explain.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR__orig_val__56091 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__56092 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__56093 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__56094 = false;
(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__56093);

(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__56094);

try{return cljs.spec.alpha.explain((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value);
}finally {(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__56092);

(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__56091);
}}));

(spec_tools.core.explain.cljs$lang$maxFixedArity = 3);

/**
 * Like `clojure.core.alpha/explain-data` but supports transformers
 */
spec_tools.core.explain_data = (function spec_tools$core$explain_data(var_args){
var G__56096 = arguments.length;
switch (G__56096) {
case 2:
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec,value,null);
}));

(spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR__orig_val__56097 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__56098 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__56099 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__56100 = false;
(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__56099);

(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__56100);

try{return cljs.spec.alpha.explain_data((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value);
}finally {(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__56098);

(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__56097);
}}));

(spec_tools.core.explain_data.cljs$lang$maxFixedArity = 3);

/**
 * Given a spec and a value, returns the possibly destructured value
 * or ::s/invalid
 */
spec_tools.core.conform = (function spec_tools$core$conform(var_args){
var G__56102 = arguments.length;
switch (G__56102) {
case 2:
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec,value,null);
}));

(spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR__orig_val__56103 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__56104 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__56105 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__56106 = false;
(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__56105);

(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__56106);

try{return cljs.spec.alpha.conform((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value);
}finally {(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__56104);

(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__56103);
}}));

(spec_tools.core.conform.cljs$lang$maxFixedArity = 3);

/**
 * Given a spec and a value, returns the possibly destructured value
 * or fails with ex-info with :type of ::conform. ex-data also contains
 * :problems, :spec and :value. call s/unform on the result to get the
 * actual conformed value.
 */
spec_tools.core.conform_BANG_ = (function spec_tools$core$conform_BANG_(var_args){
var G__56108 = arguments.length;
switch (G__56108) {
case 2:
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3(spec,value,null);
}));

(spec_tools.core.conform_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var _STAR_transformer_STAR__orig_val__56109 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__56110 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__56111 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__56112 = false;
(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__56111);

(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__56112);

try{var spec_SINGLEQUOTE_ = (spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec));
var conformed = cljs.spec.alpha.conform(spec_SINGLEQUOTE_,value);
if((!(cljs.spec.alpha.invalid_QMARK_(conformed)))){
return conformed;
} else {
var problems = cljs.spec.alpha.explain_data(spec_SINGLEQUOTE_,value);
var data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("spec-tools.core","conform","spec-tools.core/conform",-97557480),new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(problems),new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"value","value",305978217),value], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Spec conform error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''),data);
}
}finally {(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__56110);

(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__56109);
}}));

(spec_tools.core.conform_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Coerces the value using a [[Transformer]]. Returns original value for
 *   those parts of the value that can't be trasformed.
 */
spec_tools.core.coerce = (function spec_tools$core$coerce(var_args){
var G__56114 = arguments.length;
switch (G__56114) {
case 3:
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4(spec,value,transformer,null);
}));

(spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4 = (function (spec,value,transformer,options){
return spec_tools.core._coerce((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)),value,transformer,options);
}));

(spec_tools.core.coerce.cljs$lang$maxFixedArity = 4);

/**
 * Decodes a value using a [[Transformer]] from external format to a value
 *   defined by the spec. First, calls [[coerce]] and returns the value if it's
 *   valid - otherwise, calls [[conform]] & [[unform]]. Returns `::s/invalid`
 *   if the value can't be decoded to conform the spec.
 */
spec_tools.core.decode = (function spec_tools$core$decode(var_args){
var G__56116 = arguments.length;
switch (G__56116) {
case 2:
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(spec_tools.core.decode.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
return spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3(spec,value,null);
}));

(spec_tools.core.decode.cljs$core$IFn$_invoke$arity$3 = (function (spec,value,transformer){
var spec__$1 = (spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec));
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec__$1,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,coerced)){
return coerced;
} else {
var _STAR_transformer_STAR__orig_val__56117 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__56118 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__56119 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__56120 = false;
(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__56119);

(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__56120);

try{var conformed = cljs.spec.alpha.conform(spec__$1,value);
if(cljs.spec.alpha.invalid_QMARK_(conformed)){
return conformed;
} else {
return cljs.spec.alpha.unform(spec__$1,conformed);
}
}finally {(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__56118);

(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__56117);
}}
}));

(spec_tools.core.decode.cljs$lang$maxFixedArity = 3);

/**
 * Transforms a value (using a [[Transformer]]) from external
 *   format into a value defined by the spec. On error, returns `::s/invalid`.
 */
spec_tools.core.encode = (function spec_tools$core$encode(spec,value,transformer){
var _STAR_transformer_STAR__orig_val__56121 = spec_tools.core._STAR_transformer_STAR_;
var _STAR_encode_QMARK__STAR__orig_val__56122 = spec_tools.core._STAR_encode_QMARK__STAR_;
var _STAR_transformer_STAR__temp_val__56123 = transformer;
var _STAR_encode_QMARK__STAR__temp_val__56124 = true;
(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__temp_val__56123);

(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__temp_val__56124);

try{var spec__$1 = (spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec));
var conformed = cljs.spec.alpha.conform(spec__$1,value);
if(cljs.spec.alpha.invalid_QMARK_(conformed)){
return conformed;
} else {
return cljs.spec.alpha.unform(spec__$1,conformed);
}
}finally {(spec_tools.core._STAR_encode_QMARK__STAR_ = _STAR_encode_QMARK__STAR__orig_val__56122);

(spec_tools.core._STAR_transformer_STAR_ = _STAR_transformer_STAR__orig_val__56121);
}});
/**
 * Best effort to drop recursively all extra keys out of a keys spec value.
 */
spec_tools.core.select_spec = (function spec_tools$core$select_spec(spec,value){
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec,value,spec_tools.core.strip_extra_keys_transformer);
});
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.walk !== 'undefined')){
} else {
spec_tools.core.walk = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("spec-tools.core","default","spec-tools.core/default",501246940)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56125 = cljs.core.get_global_hierarchy;
return (fexpr__56125.cljs$core$IFn$_invoke$arity$0 ? fexpr__56125.cljs$core$IFn$_invoke$arity$0() : fexpr__56125.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("spec-tools.core","walk"),(function (p__56126,_,___$1,___$2){
var map__56127 = p__56126;
var map__56127__$1 = (((((!((map__56127 == null))))?(((((map__56127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56127):map__56127);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56127__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return spec_tools.parse.type_dispatch_value(type);
}),new cljs.core.Keyword("spec-tools.core","default","spec-tools.core/default",501246940),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("spec-tools.core","default","spec-tools.core/default",501246940),(function (spec,value,accept,options){
if(cljs.core.truth_((function (){var and__4115__auto__ = (spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.spec_QMARK_.call(null,spec));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"skip?","skip?",1467795012).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__4115__auto__;
}
})())){
var G__56129 = spec;
var G__56130 = value;
var G__56131 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"skip?","skip?",1467795012),true);
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(G__56129,G__56130,G__56131) : accept.call(null,G__56129,G__56130,G__56131));
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (p__56132,value,accept,options){
var map__56133 = p__56132;
var map__56133__$1 = (((((!((map__56133 == null))))?(((((map__56133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56133):map__56133);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56133__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,item){
var transformed = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
var valid_QMARK_ = (function (){var G__56135 = item;
var G__56135__$1 = (((G__56135 == null))?null:new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__56135));
if((G__56135__$1 == null)){
return null;
} else {
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(G__56135__$1,transformed);
}
})();
if(cljs.core.truth_(valid_QMARK_)){
return cljs.core.reduced(transformed);
} else {
return transformed;
}
}),value,items);
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (p__56136,value,accept,options){
var map__56137 = p__56136;
var map__56137__$1 = (((((!((map__56137 == null))))?(((((map__56137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56137):map__56137);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56137__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (v,item){
var transformed = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
return transformed;
}),value,items);
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nilable","nilable",1842307102),(function (p__56139,value,accept,options){
var map__56140 = p__56139;
var map__56140__$1 = (((((!((map__56140 == null))))?(((((map__56140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56140):map__56140);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56140__$1,new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128));
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,value,options) : accept.call(null,item,value,options));
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__56142,value,accept,options){
var map__56144 = p__56142;
var map__56144__$1 = (((((!((map__56144 == null))))?(((((map__56144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56144):map__56144);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56144__$1,new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128));
if(cljs.core.sequential_QMARK_(value)){
var f = ((cljs.core.seq_QMARK_(value))?cljs.core.reverse:cljs.core.identity);
var G__56146 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(value),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
}),value));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__56146) : f.call(null,G__56146));
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (p__56147,value,accept,options){
var map__56148 = p__56147;
var map__56148__$1 = (((((!((map__56148 == null))))?(((((map__56148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56148):map__56148);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56148__$1,new cljs.core.Keyword("spec-tools.parse","items","spec-tools.parse/items",1255627600));
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(value),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__56153){
var vec__56154 = p__56153;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56154,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56154,(1),null);
if((i < cljs.core.count(items))){
var G__56157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,i);
if((G__56157 == null)){
return null;
} else {
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(G__56157,v,options) : accept.call(null,G__56157,v,options));
}
} else {
return v;
}
}))),value);
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__56159,value,accept,options){
var map__56161 = p__56159;
var map__56161__$1 = (((((!((map__56161 == null))))?(((((map__56161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56161):map__56161);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56161__$1,new cljs.core.Keyword("spec-tools.parse","item","spec-tools.parse/item",-565704128));
if(((cljs.core.set_QMARK_(value)) || (cljs.core.sequential_QMARK_(value)))){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(item,v,options) : accept.call(null,item,v,options));
}),value));
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__56166,value,accept,options){
var map__56167 = p__56166;
var map__56167__$1 = (((((!((map__56167 == null))))?(((((map__56167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56167):map__56167);
var key__GT_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56167__$1,new cljs.core.Keyword("spec-tools.parse","key->spec","spec-tools.parse/key->spec",1347735257));
if(cljs.core.map_QMARK_(value)){
return cljs.core.reduce_kv((function (acc,k,v){
var spec = ((cljs.core.qualified_keyword_QMARK_(k))?cljs.spec.alpha.get_spec(k):cljs.spec.alpha.get_spec(cljs.core.get.cljs$core$IFn$_invoke$arity$2(key__GT_spec,k)));
var value__$1 = (cljs.core.truth_(spec)?(accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(spec,v,options) : accept.call(null,spec,v,options)):v);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,value__$1);
}),value,value);
} else {
return value;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (p__56169,data,accept,options){
var map__56170 = p__56169;
var map__56170__$1 = (((((!((map__56170 == null))))?(((((map__56170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56170):map__56170);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56170__$1,new cljs.core.Keyword("spec-tools.parse","key","spec-tools.parse/key",-753897253));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56170__$1,new cljs.core.Keyword("spec-tools.parse","value","spec-tools.parse/value",-492706501));
if(cljs.core.map_QMARK_(data)){
return cljs.core.reduce_kv((function (acc,k,v){
var k_SINGLEQUOTE_ = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(key,k,options) : accept.call(null,key,k,options));
var v_SINGLEQUOTE_ = (accept.cljs$core$IFn$_invoke$arity$3 ? accept.cljs$core$IFn$_invoke$arity$3(value,v,options) : accept.call(null,value,v,options));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k_SINGLEQUOTE_,v_SINGLEQUOTE_);
}),cljs.core.empty(data),data);
} else {
return data;
}
}));
spec_tools.core.walk.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi-spec","multi-spec",1274719724),(function (p__56173,data,accept,options){
var map__56174 = p__56173;
var map__56174__$1 = (((((!((map__56174 == null))))?(((((map__56174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56174):map__56174);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56174__$1,new cljs.core.Keyword("spec-tools.parse","key","spec-tools.parse/key",-753897253));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56174__$1,new cljs.core.Keyword("spec-tools.parse","dispatch","spec-tools.parse/dispatch",1593226563));
var dispatch_key = (function (p1__56172_SHARP_){
var or__4126__auto__ = (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(p1__56172_SHARP_) : key.call(null,p1__56172_SHARP_));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var fexpr__56176 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key));
return (fexpr__56176.cljs$core$IFn$_invoke$arity$1 ? fexpr__56176.cljs$core$IFn$_invoke$arity$1(p1__56172_SHARP_) : fexpr__56176.call(null,p1__56172_SHARP_));
}
})(data);
var dispatch_spec = (function (){var or__4126__auto__ = (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(dispatch_key) : dispatch.call(null,dispatch_key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__56177 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(dispatch_key);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__56177) : dispatch.call(null,G__56177));
}
})();
return spec_tools.core.walk.cljs$core$IFn$_invoke$arity$4(spec_tools.parse.parse_spec(dispatch_spec),data,accept,options);
}));
spec_tools.core.extra_spec_map = (function spec_tools$core$extra_spec_map(data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__56178){
var vec__56179 = p__56178;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56179,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("spec-tools.parse",cljs.core.namespace(k))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"spec","spec",347520401)], 0)));
});
spec_tools.core.fail_on_invoke = (function spec_tools$core$fail_on_invoke(spec){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't invoke spec with a non-function predicate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
});
spec_tools.core.leaf_QMARK_ = (function spec_tools$core$leaf_QMARK_(spec){
return new cljs.core.Keyword(null,"leaf?","leaf?",445442965).cljs$core$IFn$_invoke$arity$1((spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.into_spec.cljs$core$IFn$_invoke$arity$1(spec) : spec_tools.core.into_spec.call(null,spec)));
});
/**
 * Dynamic conforming can't walk over composite specs like s/and & s/or.
 *   So, we'll use the first type. Examples:
 * 
 *   `[:and [:int :string]]` -> `:int`
 *   `[:or [:string :keyword]]` -> `:string`
 */
spec_tools.core.decompose_spec_type = (function spec_tools$core$decompose_spec_type(spec){
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec);
if(cljs.core.sequential_QMARK_(type)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second));
} else {
return spec;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {spec_tools.core.Coercion}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
spec_tools.core.Spec = (function (spec,form,type,__meta,__extmap,__hash){
this.spec = spec;
this.form = form;
this.type = type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(spec_tools.core.Spec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(spec_tools.core.Spec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k56186,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__56191 = k56186;
var G__56191__$1 = (((G__56191 instanceof cljs.core.Keyword))?G__56191.fqn:null);
switch (G__56191__$1) {
case "spec":
return self__.spec;

break;
case "form":
return self__.form;

break;
case "type":
return self__.type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56186,else__4383__auto__);

}
}));

(spec_tools.core.Spec.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__56192){
var vec__56193 = p__56192;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56193,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56193,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(spec_tools.core.Spec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#spec-tools.core.Spec{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null))], null),self__.__extmap));
}));

(spec_tools.core.Spec.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56185){
var self__ = this;
var G__56185__$1 = this;
return (new cljs.core.RecordIter((0),G__56185__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spec","spec",347520401),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"type","type",1174270348)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(spec_tools.core.Spec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(spec_tools.core.Spec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,self__.__extmap,self__.__hash));
}));

(spec_tools.core.Spec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(spec_tools.core.Spec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (344961240 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(spec_tools.core.Spec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56187,other56188){
var self__ = this;
var this56187__$1 = this;
return (((!((other56188 == null)))) && ((this56187__$1.constructor === other56188.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56187__$1.spec,other56188.spec)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56187__$1.form,other56188.form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56187__$1.type,other56188.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56187__$1.__extmap,other56188.__extmap)));
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var transformer = spec_tools.core._STAR_transformer_STAR_;
var encode_QMARK_ = spec_tools.core._STAR_encode_QMARK__STAR_;
var temp__5733__auto__ = (cljs.core.truth_(transformer)?(function (){var G__56203 = transformer;
var G__56204 = spec_tools.core.decompose_spec_type(this$__$1);
var G__56205 = x;
var fexpr__56202 = (cljs.core.truth_(encode_QMARK_)?spec_tools.core._encoder:spec_tools.core._decoder);
return (fexpr__56202.cljs$core$IFn$_invoke$arity$3 ? fexpr__56202.cljs$core$IFn$_invoke$arity$3(G__56203,G__56204,G__56205) : fexpr__56202.call(null,G__56203,G__56204,G__56205));
})():null);
if(cljs.core.truth_(temp__5733__auto__)){
var transform = temp__5733__auto__;
var transformed = (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(this$__$1,x) : transform.call(null,this$__$1,x));
var or__4126__auto__ = ((cljs.spec.alpha.invalid_QMARK_(transformed))?transformed:false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var conformed = cljs.spec.alpha.conform(self__.spec,transformed);
var or__4126__auto____$1 = (function (){var and__4115__auto__ = encode_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.spec.alpha.invalid_QMARK_(conformed)){
var and__4115__auto____$1 = spec_tools.core.leaf_QMARK_(this$__$1);
if(cljs.core.truth_(and__4115__auto____$1)){
return transformed;
} else {
return and__4115__auto____$1;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return conformed;
}
}
} else {
return cljs.spec.alpha.conform(self__.spec,x);
}
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform(self__.spec,x);
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
var problems = (cljs.core.truth_((function (){var or__4126__auto__ = cljs.spec.alpha.spec_QMARK_(self__.spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.spec.alpha.regex_QMARK_(self__.spec);
}
})())?(function (){var conformed = this$__$1.cljs$spec$alpha$Spec$conform_STAR_$arity$2(null,x);
var vec__56209 = ((cljs.spec.alpha.invalid_QMARK_(conformed))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.invalid_QMARK_(spec_tools.core.conform.cljs$core$IFn$_invoke$arity$2(this$__$1,x)),x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.spec.alpha.unform(self__.spec,conformed)], null));
var explain_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56209,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56209,(1),null);
if(cljs.core.truth_(explain_QMARK_)){
return cljs.spec.alpha.explain_STAR_(cljs.spec.alpha.specize_STAR_(self__.spec),path,via,in$,val);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
})():((cljs.spec.alpha.invalid_QMARK_(this$__$1.cljs$spec$alpha$Spec$conform_STAR_$arity$2(null,x)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null):null));
var spec_reason = new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(this$__$1);
var with_reason = (function (problem){
var G__56213 = problem;
if(cljs.core.truth_(spec_reason)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56213,new cljs.core.Keyword(null,"reason","reason",-2070751759),spec_reason);
} else {
return G__56213;
}
});
if(cljs.core.truth_(problems)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(with_reason,problems);
} else {
return null;
}
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (this$,overrides,path,rmap){
var self__ = this;
var this$__$1 = this;
var temp__5733__auto__ = new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var gen = temp__5733__auto__;
return (gen.cljs$core$IFn$_invoke$arity$0 ? gen.cljs$core$IFn$_invoke$arity$0() : gen.call(null));
} else {
var or__4126__auto__ = cljs.spec.gen.alpha.gen_for_pred(self__.spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.spec.alpha.gen_STAR_((function (){var or__4126__auto____$1 = cljs.spec.alpha.spec_QMARK_(self__.spec);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.spec.alpha.specize_STAR_(self__.spec);
}
})(),overrides,path,rmap);
}
}
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$with_gen_STAR_$arity$2 = (function (this$,gfn){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"gen","gen",142575302),gfn);
}));

(spec_tools.core.Spec.prototype.cljs$spec$alpha$Spec$describe_STAR_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),self__.form], null),spec_tools.core.extra_spec_map(this$__$1)], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("spec-tools.core","spec","spec-tools.core/spec",-497332036,null),null,(1),null)),(new cljs.core.List(null,data,null,(1),null)))));
}));

(spec_tools.core.Spec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"spec","spec",347520401),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(spec_tools.core.Spec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__56185){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__56214 = cljs.core.keyword_identical_QMARK_;
var expr__56215 = k__4388__auto__;
if(cljs.core.truth_((pred__56214.cljs$core$IFn$_invoke$arity$2 ? pred__56214.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"spec","spec",347520401),expr__56215) : pred__56214.call(null,new cljs.core.Keyword(null,"spec","spec",347520401),expr__56215)))){
return (new spec_tools.core.Spec(G__56185,self__.form,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56214.cljs$core$IFn$_invoke$arity$2 ? pred__56214.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471),expr__56215) : pred__56214.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__56215)))){
return (new spec_tools.core.Spec(self__.spec,G__56185,self__.type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__56214.cljs$core$IFn$_invoke$arity$2 ? pred__56214.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__56215) : pred__56214.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__56215)))){
return (new spec_tools.core.Spec(self__.spec,self__.form,G__56185,self__.__meta,self__.__extmap,null));
} else {
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__56185),null));
}
}
}
}));

(spec_tools.core.Spec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"form","form",-1624062471),self__.form,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null))], null),self__.__extmap));
}));

(spec_tools.core.Spec.prototype.spec_tools$core$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.spec_tools$core$Coercion$_coerce$arity$4 = (function (this$,value,transformer,options){
var self__ = this;
var this$__$1 = this;
var specify = (function (x){
while(true){
if((x instanceof cljs.core.Keyword)){
var G__56338 = cljs.spec.alpha.get_spec(x);
x = G__56338;
continue;
} else {
if(cljs.core.truth_((spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.spec_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : spec_tools.core.spec_QMARK_.call(null,x)))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.alpha.spec_QMARK_(x))){
var G__56221 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),x], null);
return (spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1(G__56221) : spec_tools.core.create_spec.call(null,G__56221));
} else {
if(cljs.core.map_QMARK_(x)){
if(cljs.core.qualified_keyword_QMARK_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(x))){
var G__56342 = cljs.spec.alpha.get_spec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(x));
x = G__56342;
continue;
} else {
var G__56222 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(x,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.any_QMARK_));
return (spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1 ? spec_tools.core.create_spec.cljs$core$IFn$_invoke$arity$1(G__56222) : spec_tools.core.create_spec.call(null,G__56222));
}
} else {
return null;
}
}
}
}
break;
}
});
var transformed = (function (){var temp__5733__auto__ = (cljs.core.truth_((function (){var and__4115__auto__ = transformer;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"skip?","skip?",1467795012).cljs$core$IFn$_invoke$arity$1(options));
} else {
return and__4115__auto__;
}
})())?spec_tools.core._decoder(transformer,this$__$1,value):null);
if(cljs.core.truth_(temp__5733__auto__)){
var transform = temp__5733__auto__;
return (transform.cljs$core$IFn$_invoke$arity$2 ? transform.cljs$core$IFn$_invoke$arity$2(this$__$1,value) : transform.call(null,this$__$1,value));
} else {
return value;
}
})();
return spec_tools.core.walk.cljs$core$IFn$_invoke$arity$4(this$__$1,transformed,(function (p1__56182_SHARP_,p2__56183_SHARP_,p3__56184_SHARP_){
return spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$4(specify(p1__56182_SHARP_),p2__56183_SHARP_,transformer,p3__56184_SHARP_);
}),options);
}));

(spec_tools.core.Spec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__56185){
var self__ = this;
var this__4379__auto____$1 = this;
return (new spec_tools.core.Spec(self__.spec,self__.form,self__.type,G__56185,self__.__extmap,self__.__hash));
}));

(spec_tools.core.Spec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(spec_tools.core.Spec.prototype.call = (function (unused__11775__auto__){
var self__ = this;
var self__ = this;
var G__56234 = (arguments.length - (1));
switch (G__56234) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(spec_tools.core.Spec.prototype.apply = (function (self__,args56190){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args56190)));
}));

(spec_tools.core.Spec.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
if(cljs.core.ifn_QMARK_(self__.spec)){
return (self__.spec.cljs$core$IFn$_invoke$arity$1 ? self__.spec.cljs$core$IFn$_invoke$arity$1(x) : self__.spec.call(null,x));
} else {
return spec_tools.core.fail_on_invoke(this$);
}
}));

(spec_tools.core.Spec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"spec","spec",1988051928,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"type","type",-1480165421,null)], null);
}));

(spec_tools.core.Spec.cljs$lang$type = true);

(spec_tools.core.Spec.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"spec-tools.core/Spec",null,(1),null));
}));

(spec_tools.core.Spec.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"spec-tools.core/Spec");
}));

/**
 * Positional factory function for spec-tools.core/Spec.
 */
spec_tools.core.__GT_Spec = (function spec_tools$core$__GT_Spec(spec,form,type){
return (new spec_tools.core.Spec(spec,form,type,null,null,null));
});

/**
 * Factory function for spec-tools.core/Spec, taking a map of keywords to field values.
 */
spec_tools.core.map__GT_Spec = (function spec_tools$core$map__GT_Spec(G__56189){
var extmap__4419__auto__ = (function (){var G__56235 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56189,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"type","type",1174270348)], 0));
if(cljs.core.record_QMARK_(G__56189)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56235);
} else {
return G__56235;
}
})();
return (new spec_tools.core.Spec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__56189),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__56189),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__56189),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

spec_tools.core.spec_QMARK_ = (function spec_tools$core$spec_QMARK_(x){
if((x instanceof spec_tools.core.Spec)){
return x;
} else {
return null;
}
});
/**
 * Returns a spec name. Like the private clojure.spec.alpha/spec-name
 */
spec_tools.core.spec_name = (function spec_tools$core$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.alpha.regex_QMARK_(spec))){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = spec_tools.core.spec_QMARK_(spec);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(spec);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(spec);
} else {
if((((!((spec == null))))?(((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$))))?true:false):false)){
return new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;

}
}
}
}
});
/**
 * Returns a spec description.
 */
spec_tools.core.spec_description = (function spec_tools$core$spec_description(spec){
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(spec))){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(spec);
} else {
return null;
}
});
/**
 * Creates a Spec instance from a map containing the following keys:
 * 
 *         :spec  the wrapped spec predicate (default to `any?`)
 *         :form  source code of the spec predicate, if :spec is a spec,
 *                :form is read with `s/form` out of it. For non-spec
 *                preds, spec-tools.form/resolve-form is called, if still
 *                not available, spec-creation will fail.
 *         :type  optional type for the spec. if not set, will be auto-
 *                resolved via spec-tools.parse/parse-spec (optional)
 *       :reason  reason to be added to problems with s/explain (optional)
 *          :gen  generator function for the spec (optional)
 *         :name  name of the spec (optional)
 *  :description  description of the spec (optional)
 *        :xx/yy  any qualified keys can be added (optional)
 */
spec_tools.core.create_spec = (function spec_tools$core$create_spec(p__56242){
var map__56243 = p__56242;
var map__56243__$1 = (((((!((map__56243 == null))))?(((((map__56243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56243):map__56243);
var m = map__56243__$1;
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
if(cljs.core.qualified_keyword_QMARK_(spec)){
if(cljs.core.truth_(spec_tools.core.get_spec(spec))){
} else {
throw (new Error(["Assert failed: ",[" Unable to resolve spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec)].join(''),"\n","(get-spec spec)"].join('')));
}
} else {
}

var spec__$1 = (function (){var or__4126__auto__ = spec;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.any_QMARK_;
}
})();
var spec__$2 = ((cljs.core.qualified_keyword_QMARK_(spec__$1))?spec_tools.core.get_spec(spec__$1):(((spec__$1 instanceof cljs.core.Symbol))?spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec__$1):spec__$1
));
var form__$1 = (function (){var or__4126__auto__ = ((cljs.core.qualified_keyword_QMARK_(form))?cljs.spec.alpha.form(form):null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = form;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = (function (){var form__$1 = cljs.spec.alpha.form(spec__$2);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form__$1,new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818))))){
return form__$1;
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = spec_tools.form.resolve_form.cljs$core$IFn$_invoke$arity$1(spec__$2);
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
return new cljs.core.Keyword("cljs.spec.alpha","unknown","cljs.spec.alpha/unknown",651034818);
}
}
}
}
})();
var info = spec_tools.parse.parse_spec(form__$1);
var type__$1 = ((cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"type","type",1174270348)))?type:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info));
var name = new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec__$2));
var record = spec_tools.core.map__GT_Spec(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,info,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"spec","spec",347520401),spec__$2,new cljs.core.Keyword(null,"form","form",-1624062471),form__$1,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965),spec_tools.parse.leaf_type_QMARK_(type__$1)], null)], 0)));
var G__56245 = record;
if(cljs.core.truth_(name)){
return cljs.core.with_meta(G__56245,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","name","cljs.spec.alpha/name",205233570),name], null));
} else {
return G__56245;
}
});
spec_tools.core.into_spec = (function spec_tools$core$into_spec(x){
while(true){
if(cljs.core.truth_(spec_tools.core.spec_QMARK_(x))){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
var G__56369 = cljs.spec.alpha.get_spec(x);
x = G__56369;
continue;
} else {
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),x], null));

}
}
break;
}
});
spec_tools.core.map_spec_keys = (function spec_tools$core$map_spec_keys(spec){
var spec__$1 = (function (){var or__4126__auto__ = ((cljs.core.qualified_keyword_QMARK_(spec))?cljs.spec.alpha.form(spec):null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return spec;
}
})();
var info = spec_tools.parse.parse_spec(spec__$1);
return cljs.core.select_keys(info,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460),new cljs.core.Keyword("spec-tools.parse","keys-req","spec-tools.parse/keys-req",-1559250753),new cljs.core.Keyword("spec-tools.parse","keys-opt","spec-tools.parse/keys-opt",-1090203455)], null));
});
spec_tools.core.merge_impl = (function spec_tools$core$merge_impl(forms,spec_form,merge_spec){
var form_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(spec_tools.core.map_spec_keys,forms);
var spec = (function (){
if((typeof spec_tools !== 'undefined') && (typeof spec_tools.core !== 'undefined') && (typeof spec_tools.core.t_spec_tools$core56251 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.spec.alpha.Spec}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
spec_tools.core.t_spec_tools$core56251 = (function (forms,spec_form,merge_spec,form_keys,meta56252){
this.forms = forms;
this.spec_form = spec_form;
this.merge_spec = merge_spec;
this.form_keys = form_keys;
this.meta56252 = meta56252;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(spec_tools.core.t_spec_tools$core56251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56253,meta56252__$1){
var self__ = this;
var _56253__$1 = this;
return (new spec_tools.core.t_spec_tools$core56251(self__.forms,self__.spec_form,self__.merge_spec,self__.form_keys,meta56252__$1));
}));

(spec_tools.core.t_spec_tools$core56251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56253){
var self__ = this;
var _56253__$1 = this;
return self__.meta56252;
}));

(spec_tools.core.t_spec_tools$core56251.prototype.cljs$spec$alpha$Spec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.t_spec_tools$core56251.prototype.cljs$spec$alpha$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var conformed_vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56248_SHARP_){
return cljs.spec.alpha.conform(p1__56248_SHARP_,x);
}),self__.forms);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119),null], null), null),conformed_vals))){
return new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",-1220295119);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,x,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__56249_SHARP_,p2__56250_SHARP_){
return cljs.core.select_keys(p1__56249_SHARP_,p2__56250_SHARP_);
}),conformed_vals,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("spec-tools.parse","keys","spec-tools.parse/keys",1331815460),self__.form_keys)));
}
}));

(spec_tools.core.t_spec_tools$core56251.prototype.cljs$spec$alpha$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.unform_STAR_(self__.merge_spec,x);
}));

(spec_tools.core.t_spec_tools$core56251.prototype.cljs$spec$alpha$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.explain_STAR_(self__.merge_spec,path,via,in$,x);
}));

(spec_tools.core.t_spec_tools$core56251.prototype.cljs$spec$alpha$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.alpha.gen_STAR_(self__.merge_spec,overrides,path,rmap);
}));

(spec_tools.core.t_spec_tools$core56251.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"spec-form","spec-form",-871386429,null),new cljs.core.Symbol(null,"merge-spec","merge-spec",-1220518501,null),new cljs.core.Symbol(null,"form-keys","form-keys",1839414472,null),new cljs.core.Symbol(null,"meta56252","meta56252",-1061298221,null)], null);
}));

(spec_tools.core.t_spec_tools$core56251.cljs$lang$type = true);

(spec_tools.core.t_spec_tools$core56251.cljs$lang$ctorStr = "spec-tools.core/t_spec_tools$core56251");

(spec_tools.core.t_spec_tools$core56251.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"spec-tools.core/t_spec_tools$core56251");
}));

/**
 * Positional factory function for spec-tools.core/t_spec_tools$core56251.
 */
spec_tools.core.__GT_t_spec_tools$core56251 = (function spec_tools$core$merge_impl_$___GT_t_spec_tools$core56251(forms__$1,spec_form__$1,merge_spec__$1,form_keys__$1,meta56252){
return (new spec_tools.core.t_spec_tools$core56251(forms__$1,spec_form__$1,merge_spec__$1,form_keys__$1,meta56252));
});

}

return (new spec_tools.core.t_spec_tools$core56251(forms,spec_form,merge_spec,form_keys,cljs.core.PersistentArrayMap.EMPTY));
})()
;
return spec_tools.core.create_spec(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"form","form",-1624062471),spec_form,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461)], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,clojure.set.union,form_keys)], 0)));
});

//# sourceMappingURL=spec_tools.core.js.map
