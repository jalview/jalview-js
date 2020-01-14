(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.util.Logger','javajs.util.PT','javajs.util.P3','javajs.util.CU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "KinemageReader", null, 'org.jmol.jvxl.readers.PmeshReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nDots=0;
this.vMin=0;
this.vMax=0;
this.pointType=0;
this.findString=null;
this.lastAtom=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.nDots=0;
this.vMin=-3.4028235E38;
this.vMax=3.4028235E38;
this.lastAtom="";
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2PR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.type="kinemage";
this.setHeader$();
});

Clazz.newMeth(C$, 'readVolumeParameters$Z', function (isMapData) {
if (this.params.parameters != null  && this.params.parameters.length >= 2 ) {
this.vMin=this.params.parameters[1];
this.vMax=(this.params.parameters.length >= 3 ? this.params.parameters[2] : this.vMin);
this.pointType=(this.params.parameters.length >= 4 ? (this.params.parameters[3]|0) : 0);
this.findString=this.params.calculationType;
}return true;
});

Clazz.newMeth(C$, 'readVertices$', function () {
this.rd$();
var n0;
while (this.line != null ){
if (this.line.length$() != 0 && this.line.charAt$I(0) == "@" ) {
$I$(1).info$S(this.line);
if (this.line.indexOf$S("contact}") >= 0 || this.line.indexOf$S("overlap}") >= 0  || this.line.indexOf$S("H-bonds}") >= 0 ) {
if (this.line.indexOf$S("@dotlist") == 0) {
n0=this.nDots;
p$1.readDots.apply(this, []);
if (this.nDots > n0) $I$(1).info$S("dots: " + (this.nDots - n0) + "/" + this.nDots );
continue;
} else if (this.line.indexOf$S("@vectorlist") == 0) {
n0=this.nPolygons;
p$1.readVectors.apply(this, []);
if (this.nPolygons > n0) $I$(1).info$S("lines: " + (this.nPolygons - n0) + "/" + this.nPolygons );
continue;
}}}this.rd$();
}
return true;
});

Clazz.newMeth(C$, 'readDots', function () {
var color=Clazz.array(Integer.TYPE, [1]);
while (this.rd$() != null  && this.line.indexOf$I("@") < 0 ){
var i=p$1.getPoint$S$I$IA$Z.apply(this, [this.line, 2, color, true]);
if (i < 0) continue;
this.nDots++;
this.nTriangles=this.addTriangleCheck$I$I$I$I$I$Z$I(i, i, i, 7, 0, false, color[0]);
}
}, p$1);

Clazz.newMeth(C$, 'readVectors', function () {
var color=Clazz.array(Integer.TYPE, [1]);
while (this.rd$() != null  && this.line.indexOf$I("@") < 0 ){
var ia=p$1.getPoint$S$I$IA$Z.apply(this, [this.line, 3, color, true]);
var ib=p$1.getPoint$S$I$IA$Z.apply(this, [this.line.substring$I(this.line.lastIndexOf$I("{")), 2, color, false]);
if (ia < 0 || ib < 0 ) continue;
this.nPolygons++;
this.nTriangles=this.addTriangleCheck$I$I$I$I$I$Z$I(ia, ib, ib, 7, 0, false, color[0]);
}
}, p$1);

Clazz.newMeth(C$, 'getPoint$S$I$IA$Z', function (line, i, retColor, checkType) {
if (this.findString != null ) {
var atom=line.substring$I$I(0, line.indexOf$S("}") + 1);
if (atom.length$() < 4) atom=this.lastAtom;
 else this.lastAtom=atom;
if (atom.indexOf$S(this.findString) < 0) return -1;
}var tokens=$I$(2).getTokens$S(line.substring$I(line.indexOf$S("}") + 1));
var value=p$1.assignValueFromGapColorForKin$S.apply(this, [tokens[0]]);
if (Float.isNaN$F(value)) return -1;
if (checkType && this.pointType != 0 ) {
switch ((tokens[i - 1].charCodeAt$I(1))) {
case 77:
if (this.pointType != 1) return -1;
break;
case 83:
if (this.pointType != 2) return -1;
break;
case 80:
if (this.pointType != 3) return -1;
break;
case 79:
if (this.pointType != 4) return -1;
break;
default:
return -1;
}
}retColor[0]=p$1.getColor$S.apply(this, [tokens[0]]);
tokens=$I$(2).getTokens$S(tokens[i].replace$C$C(",", " "));
var pt=$I$(3).new3$F$F$F($I$(2).parseFloat$S(tokens[0]), $I$(2).parseFloat$S(tokens[1]), $I$(2).parseFloat$S(tokens[2]));
if (this.isAnisotropic) this.setVertexAnisotropy$javajs_util_T3(pt);
return this.addVertexCopy$javajs_util_T3$F$I$Z(pt, value, this.nVertices++, false);
}, p$1);

Clazz.newMeth(C$, 'getColor$S', function (color) {
if (color.equals$O("sky")) color="skyblue";
 else if (color.equals$O("sea")) color="seagreen";
return $I$(4).getArgbFromString$S(color);
}, p$1);

Clazz.newMeth(C$, 'assignValueFromGapColorForKin$S', function (color) {
var value=(color.equals$O("greentint") ? 4.0 : color.equals$O("blue") ? 0.35 : color.equals$O("sky") ? 0.25 : color.equals$O("sea") ? 0.15 : color.equals$O("green") ? 0.0 : color.equals$O("yellowtint") ? -0.1 : color.equals$O("yellow") ? -0.2 : color.equals$O("orange") ? -0.3 : color.equals$O("red") ? -0.4 : -0.5);
return (value >= this.vMin  && value <= this.vMax   ? value : NaN);
}, p$1);

Clazz.newMeth(C$, 'readPolygons$', function () {
return true;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
