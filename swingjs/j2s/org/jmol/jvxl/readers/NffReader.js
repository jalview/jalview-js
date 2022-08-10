(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.P3','org.jmol.jvxl.data.JvxlCoder','org.jmol.util.Logger','javajs.util.CU']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NffReader", null, 'org.jmol.jvxl.readers.PolygonFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.vertexMap=Clazz.new_($I$(1,1));
this.pt=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['I',['nPolygons'],'O',['vertexMap','java.util.Map','pt','javajs.util.P3']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2PFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
});

Clazz.newMeth(C$, 'setHeader$', function () {
this.jvxlFileHeaderBuffer.append$S("NFF file format\nvertices and triangles only\n");
$I$(3).jvxlCreateHeaderWithoutTitleOrAtoms$org_jmol_jvxl_data_VolumeData$javajs_util_SB(this.volumeData, this.jvxlFileHeaderBuffer);
});

Clazz.newMeth(C$, 'getSurfaceData$', function () {
if (this.readVerticesAndPolygons$()) $I$(4).info$S("NFF file contains " + this.nVertices + " vertices and " + this.nTriangles + " triangles" );
 else $I$(4).error$S(this.params.fileName + ": Error reading Nff data ");
});

Clazz.newMeth(C$, 'readVerticesAndPolygons$', function () {
var color=16711680;
try {
while (this.rd$() != null ){
if (this.line.length$() == 0) continue;
var tokens=this.getTokens$();
switch ((this.line.charCodeAt$I(0))) {
case 35:
this.vertexMap.clear$();
continue;
case 102:
color=$I$(5,"colorTriadToFFRGB$F$F$F",[this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3])]);
continue;
case 112:
if (this.line.equals$O("pp 3")) {
var i1=p$1.getVertex.apply(this, []);
var i2=p$1.getVertex.apply(this, []);
var i3=p$1.getVertex.apply(this, []);
this.nTriangles++;
this.addTriangleCheck$I$I$I$I$I$Z$I(i1, i2, i3, 7, 0, false, color);
}continue;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'getVertex', function () {
var i=this.vertexMap.get$O(this.rd$());
if (i == null ) {
var tokens=this.getTokens$();
this.pt.set$F$F$F(this.parseFloatStr$S(tokens[0]), this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]));
if (!Float.isNaN$F(this.params.scale)) this.pt.scale$F(this.params.scale);
if (this.isAnisotropic) this.setVertexAnisotropy$javajs_util_T3(this.pt);
i=Integer.valueOf$I(this.addVertexCopy$javajs_util_T3$F$I$Z(this.pt, 0, this.nVertices++, true));
this.vertexMap.put$O$O(this.line, i);
}return i.intValue$();
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
