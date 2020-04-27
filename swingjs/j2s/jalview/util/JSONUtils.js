(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'jalview.util.Platform','org.json.JSONObject']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSONUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

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
return Clazz.new_($I$(2,1).c$$O,[obj]).toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
