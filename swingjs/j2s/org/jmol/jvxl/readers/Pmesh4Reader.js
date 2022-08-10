(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.jvxl.data.JvxlCoder','org.jmol.util.Logger','javajs.util.CU','javajs.util.P4']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Pmesh4Reader", null, 'org.jmol.jvxl.readers.PolygonFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tokens=Clazz.array(String, [0]);
this.iToken=0;
},1);

C$.$fields$=[['F',['transparency'],'I',['nPolygons','color','nX','nY','iToken'],'S',['pmeshError','type'],'O',['tokens','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2PFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
var fileName=(sg.getReaderData$())[0];
if (fileName == null ) return;
this.params.fullyLit=true;
this.type="pmesh4";
this.jvxlFileHeaderBuffer.append$S(this.type + " file format\nvertices and triangles only\n");
$I$(1).jvxlCreateHeaderWithoutTitleOrAtoms$org_jmol_jvxl_data_VolumeData$javajs_util_SB(this.volumeData, this.jvxlFileHeaderBuffer);
});

Clazz.newMeth(C$, 'getSurfaceData$', function () {
this.rd$();
if (p$1.readVerticesAndPolygons.apply(this, [])) $I$(2).info$S(this.type + " file contains " + this.nVertices + " 4D vertices and " + this.nPolygons + " polygons for " + this.nTriangles + " triangles" );
 else $I$(2,"error$S",[this.params.fileName + ": " + (this.pmeshError == null  ? "Error reading pmesh4 data " : this.pmeshError) ]);
});

Clazz.newMeth(C$, 'readVerticesAndPolygons', function () {
try {
p$1.readColor.apply(this, []);
this.nY=p$1.getInt.apply(this, []);
this.nX=p$1.getInt.apply(this, []);
p$1.readVertices.apply(this, []);
p$1.createMesh.apply(this, []);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (this.pmeshError == null ) this.pmeshError=this.type + " ERROR: " + e ;
} else {
throw e;
}
}
return false;
}, p$1);

Clazz.newMeth(C$, 'readColor', function () {
this.color=$I$(3,"colorTriadToFFRGB$F$F$F",[p$1.getFloat.apply(this, []), p$1.getFloat.apply(this, []), p$1.getFloat.apply(this, [])]);
this.transparency=p$1.getFloat.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'readVertices', function () {
this.nVertices=this.nX * this.nY;
this.iToken=2147483647;
this.pmeshError=this.type + " ERROR: invalid vertex list";
for (var i=0; i < this.nVertices; i++) {
var pt=$I$(4,"new4$F$F$F$F",[p$1.getFloat.apply(this, []), p$1.getFloat.apply(this, []), p$1.getFloat.apply(this, []), p$1.getFloat.apply(this, [])]);
if ($I$(2).debugging) $I$(2).debug$S(i + ": " + pt );
this.addVertexCopy$javajs_util_T3$F$I$Z(pt, 0, i, false);
this.iToken=2147483647;
}
this.pmeshError=null;
return true;
}, p$1);

Clazz.newMeth(C$, 'createMesh', function () {
for (var i=0; i < this.nX - 1; i++) {
for (var j=0; j < this.nY - 1; j++) {
this.nTriangles+=2;
this.addTriangleCheck$I$I$I$I$I$Z$I(i * this.nY + j, (i + 1) * this.nY + j, (i + 1) * this.nY + j + 1, 3, 0, false, this.color);
this.addTriangleCheck$I$I$I$I$I$Z$I((i + 1) * this.nY + j + 1, i * this.nY + j + 1, i * this.nY + j, 3, 0, false, this.color);
}
}
}, p$1);

Clazz.newMeth(C$, 'nextToken', function () {
while (this.iToken >= this.tokens.length){
this.iToken=0;
this.rd$();
this.tokens=this.getTokens$();
}
return this.tokens[this.iToken++];
}, p$1);

Clazz.newMeth(C$, 'getInt', function () {
return this.parseIntStr$S(p$1.nextToken.apply(this, []));
}, p$1);

Clazz.newMeth(C$, 'getFloat', function () {
return this.parseFloatStr$S(p$1.nextToken.apply(this, []));
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:36 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
