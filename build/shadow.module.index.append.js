
shadow.cljs.devtools.client.env.module_loaded('index');

try { app.index.init(); } catch (e) { console.error("An error occurred when calling (app.index/init)"); throw(e); }