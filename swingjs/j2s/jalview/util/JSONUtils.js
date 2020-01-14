(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.util.Platform','org.json.JSONObject']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSONUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'arrayToStringList$java_util_List', function (jsonArray) {
var n;
if (jsonArray == null  || (n=jsonArray.size$()) == 0 ) {
return null;
}{
return jsonArray.elementData.slice(0, n).join(",");
}
}, 1);

Clazz.newMeth(C$, 'parse$java_io_Reader', function (r) {
return $I$(1).parseJSON$java_io_Reader(r);
}, 1);

Clazz.newMeth(C$, 'parse$S', function (json) {
return $I$(1).parseJSON$S(json);
}, 1);

Clazz.newMeth(C$, 'stringify$O', function (obj) {
return Clazz.new_($I$(2).c$$O,[obj]).toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
