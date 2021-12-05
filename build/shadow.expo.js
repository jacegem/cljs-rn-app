goog.provide('shadow.expo');
if((typeof shadow !== 'undefined') && (typeof shadow.expo !== 'undefined') && (typeof shadow.expo.root_ref !== 'undefined')){
} else {
shadow.expo.root_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.expo !== 'undefined') && (typeof shadow.expo.root_component_ref !== 'undefined')){
} else {
shadow.expo.root_component_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.expo.render_root = (function shadow$expo$render_root(root){
var first_call_QMARK_ = (cljs.core.deref(shadow.expo.root_ref) == null);
cljs.core.reset_BANG_(shadow.expo.root_ref,root);

if((!(first_call_QMARK_))){
var temp__5735__auto__ = cljs.core.deref(shadow.expo.root_component_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var root__$1 = temp__5735__auto__;
return root__$1.forceUpdate();
} else {
return null;
}
} else {
var Root = shadow.js.shim.module$create_react_class(({"componentDidMount": (function (){
var this$ = this;
return cljs.core.reset_BANG_(shadow.expo.root_component_ref,this$);
}), "componentWillUnmount": (function (){
return cljs.core.reset_BANG_(shadow.expo.root_component_ref,null);
}), "render": (function (){
var body = cljs.core.deref(shadow.expo.root_ref);
if(cljs.core.fn_QMARK_(body)){
return (body.cljs$core$IFn$_invoke$arity$0 ? body.cljs$core$IFn$_invoke$arity$0() : body.call(null));
} else {
return body;
}
})}));
return shadow.js.shim.module$expo.registerRootComponent(Root);
}
});

//# sourceMappingURL=shadow.expo.js.map
