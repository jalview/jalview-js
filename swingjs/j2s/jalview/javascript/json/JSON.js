(function(){var P$=Clazz.newPackage("jalview.javascript.json"),I$=[];
var C$=Clazz.newClass(P$, "JSON");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setAjax$OA', function (keyValues) {
return swingjs.JSUtil.setAjax$OA(keyValues) ||null;
}, 1);

Clazz.newMeth(C$, 'setAjax$java_net_URL', function (url) {

swingjs.JSUtil.setAjax$java_net_URL(url);
}, 1);

Clazz.newMeth(C$, 'getJSONReader$java_io_InputStream', function (is) {
return swingjs.JSUtil.getJSONReader$O(is) ||null;
}, 1);

Clazz.newMeth(C$, 'parse$O', function (obj) {
return swingjs.JSUtil.parseJSON$O(obj) ||null;
}, 1);

Clazz.newMeth(C$, 'stringify$O', function (obj) {
return swingjs.JSUtil.stringifyJSON$O(obj) ||null;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
