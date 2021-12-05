goog.provide('app.index');
app.index.tw = (function app$index$tw(style_str){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(shadow.js.shim.module$tailwind_rn.default(style_str),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});
if((typeof app !== 'undefined') && (typeof app.index !== 'undefined') && (typeof app.index.splash_img !== 'undefined')){
} else {
app.index.splash_img = require("../assets/shadow-cljs.png");
}
app.index.screen_main = (function app$index$screen_main(props){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var version = app.helpers._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698)], null));
var theme_selection = app.helpers._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880)], null));
var theme = (function (){var obj61975 = props;
var k61976 = "theme";
if((function (){var obj61977 = obj61975;
return (((!((obj61977 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k61976,obj61977)));
})()){
return (obj61975[k61976]);
} else {
return undefined;
}
})();
var expo_version = (function (){var obj61978 = (function (){var obj61980 = (function (){var obj61982 = shadow.js.shim.module$expo_constants;
var k61983 = "default";
if((function (){var obj61984 = obj61982;
return (((!((obj61984 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k61983,obj61984)));
})()){
return (obj61982[k61983]);
} else {
return undefined;
}
})();
var k61981 = "manifest";
if((function (){var obj61985 = obj61980;
return (((!((obj61985 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k61981,obj61985)));
})()){
return (obj61980[k61981]);
} else {
return undefined;
}
})();
var k61979 = "sdkVersion";
if((function (){var obj61986 = obj61978;
return (((!((obj61986 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k61979,obj61986)));
})()){
return (obj61978[k61979]);
} else {
return undefined;
}
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.SafeAreaView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),app.index.tw("flex flex-1")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.StatusBar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native_paper.Surface,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),app.index.tw("flex flex-1 justify-center")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native_paper.Card,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native_paper.Card.Cover,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),app.index.splash_img], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native_paper.Card.Title,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"My new expo cljs app!",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),["Version: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join('')], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native_paper.Card.Content,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native_paper.Paragraph,["Using Expo SDK: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expo_version)].join('')], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),app.index.tw("flex flex-row justify-between")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native_paper.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(function (){var obj61987 = (function (){var obj61989 = theme;
var k61990 = "colors";
if((function (){var obj61991 = obj61989;
return (((!((obj61991 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k61990,obj61991)));
})()){
return (obj61989[k61990]);
} else {
return undefined;
}
})();
var k61988 = "accent";
if((function (){var obj61992 = obj61987;
return (((!((obj61992 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k61988,obj61992)));
})()){
return (obj61987[k61988]);
} else {
return undefined;
}
})()], null)], null),"Dark mode"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native_paper.Switch,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme_selection,new cljs.core.Keyword(null,"dark","dark",1818973999)),new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (){
var G__61993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-theme","set-theme",-1528906877),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme_selection,new cljs.core.Keyword(null,"dark","dark",1818973999)))?new cljs.core.Keyword(null,"light","light",1918998747):new cljs.core.Keyword(null,"dark","dark",1818973999))], null);
return (app.helpers._GT_evt.cljs$core$IFn$_invoke$arity$1 ? app.helpers._GT_evt.cljs$core$IFn$_invoke$arity$1(G__61993) : app.helpers._GT_evt.call(null,G__61993));
})], null)], null)], null)], null)], null)], null)], null)], null);
})());
});
app.index.stack = shadow.js.shim.module$$react_navigation$stack.createStackNavigator();
app.index.navigator = (function app$index$navigator(){
var obj61994 = app.index.stack;
var k61995 = "Navigator";
if((function (){var obj61996 = obj61994;
return (((!((obj61996 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k61995,obj61996)));
})()){
return (obj61994[k61995]);
} else {
return undefined;
}
});
app.index.screen = (function app$index$screen(props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),(function (){var obj61997 = app.index.stack;
var k61998 = "Screen";
if((function (){var obj61999 = obj61997;
return (((!((obj61999 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k61998,obj61999)));
})()){
return (obj61997[k61998]);
} else {
return undefined;
}
})(),props], null);
});
app.index.root = (function app$index$root(){
var theme = app.helpers._LT_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme","theme",-1247880880)], null));
var _BANG_route_name_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _BANG_navigation_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native_paper.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),(function (){var G__62000 = theme;
var G__62000__$1 = (((G__62000 instanceof cljs.core.Keyword))?G__62000.fqn:null);
switch (G__62000__$1) {
case "light":
return shadow.js.shim.module$react_native_paper.DefaultTheme;

break;
case "dark":
return shadow.js.shim.module$react_native_paper.DarkTheme;

break;
default:
return shadow.js.shim.module$react_native_paper.DarkTheme;

}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$react_navigation$native.NavigationContainer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
return cljs.core.reset_BANG_(_BANG_navigation_ref,el);
}),new cljs.core.Keyword(null,"on-ready","on-ready",628441937),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_route_name_ref,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),(function (){var obj62001 = (function (){var obj__51800__auto__ = cljs.core.deref(_BANG_navigation_ref);
var f__51801__auto__ = (obj__51800__auto__["getCurrentRoute"]);
return f__51801__auto__.call(obj__51800__auto__);
})();
var k62002 = "name";
if((function (){var obj62003 = obj62001;
return (((!((obj62003 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k62002,obj62003)));
})()){
return (obj62001[k62002]);
} else {
return undefined;
}
})()], null));
}),new cljs.core.Keyword(null,"on-state-change","on-state-change",619811967),(function (){
var prev_route_name = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(_BANG_route_name_ref));
var current_route_name = (function (){var obj62004 = (function (){var obj__51800__auto__ = cljs.core.deref(_BANG_navigation_ref);
var f__51801__auto__ = (obj__51800__auto__["getCurrentRoute"]);
return f__51801__auto__.call(obj__51800__auto__);
})();
var k62005 = "name";
if((function (){var obj62006 = obj62004;
return (((!((obj62006 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k62005,obj62006)));
})()){
return (obj62004[k62005]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_route_name,current_route_name)){
var G__62007_62018 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"some-fx-example","some-fx-example",-577842969),["New screen encountered ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_route_name)].join('')], null);
(app.helpers._GT_evt.cljs$core$IFn$_invoke$arity$1 ? app.helpers._GT_evt.cljs$core$IFn$_invoke$arity$1(G__62007_62018) : app.helpers._GT_evt.call(null,G__62007_62018));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_route_name_ref,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"current","current",-1088038603),current_route_name], null));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),app.index.navigator(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header-mode","header-mode",-678453826),"none"], null),app.index.screen(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Screen1",new cljs.core.Keyword(null,"component","component",1555936782),shadow.js.shim.module$react_native_paper.withTheme(app.index.screen_main)], null))], null)], null)], null);
});
app.index.start = (function app$index$start(){
return shadow.expo.render_root(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.index.root], null)));
});
app.index.version = (function (){var obj62008 = (function (){var obj62010 = (function (){var obj62012 = shadow.js.shim.module$expo_constants;
var k62013 = "default";
if((function (){var obj62014 = obj62012;
return (((!((obj62014 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k62013,obj62014)));
})()){
return (obj62012[k62013]);
} else {
return undefined;
}
})();
var k62011 = "manifest";
if((function (){var obj62015 = obj62010;
return (((!((obj62015 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k62011,obj62015)));
})()){
return (obj62010[k62011]);
} else {
return undefined;
}
})();
var k62009 = "version";
if((function (){var obj62016 = obj62008;
return (((!((obj62016 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k62009,obj62016)));
})()){
return (obj62008[k62009]);
} else {
return undefined;
}
})();
app.index.init = (function app$index$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-version","set-version",-1934891967),app.index.version], null));

return app.index.start();
});

//# sourceMappingURL=app.index.js.map
