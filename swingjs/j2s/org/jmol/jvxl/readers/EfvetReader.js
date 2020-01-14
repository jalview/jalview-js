(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.jvxl.data.JvxlCoder','org.jmol.util.Logger','javajs.util.P3','javajs.util.CU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EfvetReader", null, 'org.jmol.jvxl.readers.PolygonFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vertexMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2PFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.jvxlFileHeaderBuffer.append$S("efvet file format\nvertices and triangles only\n");
$I$(1).jvxlCreateHeaderWithoutTitleOrAtoms$org_jmol_jvxl_data_VolumeData$javajs_util_SB(this.volumeData, this.jvxlFileHeaderBuffer);
this.hasColorData=true;
});

Clazz.newMeth(C$, 'getSurfaceData$', function () {
p$1.getHeader.apply(this, []);
p$1.getVertices.apply(this, []);
p$1.getTriangles.apply(this, []);
$I$(2).info$S("efvet file contains " + this.nVertices + " vertices and " + this.nTriangles + " triangles" );
});

Clazz.newMeth(C$, 'getHeader', function () {
this.skipTo$S$S("<efvet", null);
while (this.rd$().length$() > 0 && this.line.indexOf$S(">") < 0 )this.jvxlFileHeaderBuffer.append$S("# " + this.line + "\n" );

$I$(2).info$S(this.jvxlFileHeaderBuffer.toString());
}, p$1);

Clazz.newMeth(C$, 'getVertices', function () {
var pt=Clazz.new_($I$(3));
var value=0;
this.skipTo$S$S("<vertices", "count");
this.jvxlData.vertexCount=this.nVertices=this.parseInt$();
this.vertexMap=Clazz.array(Integer.TYPE, [this.nVertices + 1]);
this.jvxlData.vertexColors=null;
if (this.params.fileIndex == 0) {
this.jvxlData.vertexColors=Clazz.array(Integer.TYPE, [this.nVertices]);
this.jvxlData.nVertexColors=0;
}var values=Clazz.array(Float.TYPE, [this.jvxlData.vertexColors == null  ? 3 : 9]);
this.skipTo$S$S("property=", null);
this.line=this.line.replace$C$C("\"", " ");
var tokens=this.getTokens$();
var dataIndex=this.params.fileIndex;
if (dataIndex > 0 && dataIndex < tokens.length ) $I$(2).info$S("property " + tokens[dataIndex]);
 else $I$(2).info$S(this.line);
for (var i=0; i < this.nVertices; i++) {
this.skipTo$S$S("<vertex", "image");
this.parseFloatArray$FA$S$S(values, null, ">");
pt.set$F$F$F(values[0], values[1], values[2]);
this.skipTo$S$S(null, "property");
for (var j=0; j < dataIndex; j++) value=this.parseFloat$();

if (this.isAnisotropic) this.setVertexAnisotropy$javajs_util_T3(pt);
var v=this.vertexMap[i + 1]=this.addVC$javajs_util_T3$F$I$Z(pt, value, i, true);
if (v >= 0 && this.jvxlData.vertexColors != null  ) {
this.jvxlData.vertexColors[v]=$I$(4).colorTriadToFFRGB$F$F$F(values[6], values[7], values[8]);
this.jvxlData.nVertexColors++;
}}
}, p$1);

Clazz.newMeth(C$, 'getTriangles', function () {
this.skipTo$S$S("<triangle_array", "count");
this.nTriangles=this.parseInt$();
for (var i=0; i < this.nTriangles; i++) {
this.skipTo$S$S("<triangle", "vertex");
var a=p$1.getInt.apply(this, []);
var b=p$1.getInt.apply(this, []);
var c=p$1.getInt.apply(this, []);
if (a >= 0 && b >= 0  && c >= 0 ) this.addTriangleCheck$I$I$I$I$I$Z$I(a, b, c, 7, 0, false, 0);
}
}, p$1);

Clazz.newMeth(C$, 'getInt', function () {
return this.vertexMap[this.parseInt$()];
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
