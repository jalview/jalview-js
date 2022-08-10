(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.P3','javajs.util.PT']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CifDensityReader", null, 'org.jmol.jvxl.readers.BCifDensityReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getCifData$S$O', function (fileName, data) {
this.cifData=this.sg.atomDataServer.readCifData$S$O$S(fileName, data, "CIF");
});

Clazz.newMeth(C$, 'readCifP3$S$javajs_util_P3', function (key, p3) {
if (p3 == null ) p3=Clazz.new_($I$(1,1));
var x=this.getCifFloat$S(key + "[0]");
if (Float.isNaN$F(x)) {
p3.x=NaN;
} else {
p3.x=x;
p3.y=this.getCifFloat$S(key + "[1]");
p3.z=this.getCifFloat$S(key + "[2]");
}return p3;
});

Clazz.newMeth(C$, 'getCifMap$S', function (type) {
type="data_" + type;
var list=this.cifData.get$O("models");
for (var i=0; i < list.size$(); i++) {
var map=list.get$I(i);
if (type.equalsIgnoreCase$S(map.get$O("name").toString())) return this.thisData=map;
}
return null;
});

Clazz.newMeth(C$, 'getCifFloat$S', function (key) {
var o=this.thisData.get$O(key);
var x=NaN;
if (o != null ) {
if (Clazz.instanceOf(o, "java.lang.String")) {
x=$I$(2).parseFloat$S(o);
} else if (Clazz.instanceOf(o, "java.lang.Number")) {
x=(o).floatValue$();
}}return x;
});

Clazz.newMeth(C$, 'readCifFloats$S$FA', function (key, values) {
var list=this.thisData.get$O(key);
for (var i=0, n=values.length; i < n; i++) values[i]=$I$(2,"parseFloat$S",[list.get$I(i)]);

return values;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
