(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.jvxl.data.JvxlCoder','org.jmol.util.Logger','java.util.Hashtable','javajs.util.CU','javajs.util.P3']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Ras3DReader", null, 'org.jmol.jvxl.readers.PolygonFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['asQuads'],'I',['nPolygons'],'S',['pmeshError','type'],'O',['htVertices','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2PR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
});

Clazz.newMeth(C$, 'init2PR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2PFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
var fileName=(sg.getReaderData$())[0];
if (fileName == null ) return;
this.type="ras3d";
this.setHeader$();
});

Clazz.newMeth(C$, 'setHeader$', function () {
this.jvxlFileHeaderBuffer.append$S(this.type + " file format\nvertices and triangles only\n");
$I$(1).jvxlCreateHeaderWithoutTitleOrAtoms$org_jmol_jvxl_data_VolumeData$javajs_util_SB(this.volumeData, this.jvxlFileHeaderBuffer);
});

Clazz.newMeth(C$, 'getSurfaceData$', function () {
if (this.readVerticesAndPolygons$()) $I$(2).info$S(this.type + " file contains " + this.nVertices + " vertices and " + this.nPolygons + " polygons for " + this.nTriangles + " triangles" );
 else (function(a,f){return f.apply(null,a)})([this.params.fileName + ": " + (this.pmeshError == null  ? "Error reading pmesh data " : this.pmeshError) ],$I$(2).error$S);
});

Clazz.newMeth(C$, 'readVerticesAndPolygons$', function () {
try {
if (p$1.readVertices.apply(this, [])) return true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (this.pmeshError == null ) this.pmeshError=this.type + " ERROR: " + e ;
} else {
throw e;
}
}
return false;
});

Clazz.newMeth(C$, 'readVertices', function () {
this.htVertices=Clazz.new_($I$(3,1));
var v0=Clazz.array(Integer.TYPE, [3]);
var v1=Clazz.array(Integer.TYPE, [3]);
var v2;
var c0=0;
var c1=0;
var c2;
if (this.rd$().indexOf$S("DSSR") >= 0) this.asQuads=true;
while (this.rd$() != null ){
while (!this.line.equals$O("1")){
this.rd$();
}
this.rd$();
var tokens=this.getTokens$();
v0[0]=p$1.getPoint$SA$I.apply(this, [tokens, 0]);
v0[1]=p$1.getPoint$SA$I.apply(this, [tokens, 3]);
v0[2]=p$1.getPoint$SA$I.apply(this, [tokens, 6]);
this.nTriangles++;
c0=(function(a,f){return f.apply(null,a)})([this.parseFloatStr$S(tokens[9]), this.parseFloatStr$S(tokens[10]), this.parseFloatStr$S(tokens[11])],$I$(4).colorTriadToFFRGB$F$F$F);
if (this.asQuads) {
if (this.nTriangles % 2 == 1) {
v2=v1;
v1=v0;
v0=v2;
c2=c1;
c1=c0;
c0=c2;
continue;
}this.addTriangleCheck$I$I$I$I$I$Z$I(v0[0], v0[1], v0[2], 6, 0, false, c0);
this.addTriangleCheck$I$I$I$I$I$Z$I(v1[0], v1[1], v1[2], 3, 0, false, c1);
} else {
this.addTriangleCheck$I$I$I$I$I$Z$I(v0[0], v0[1], v0[2], 7, 0, false, c0);
}this.nPolygons++;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'getPoint$SA$I', function (tokens, i) {
var key=tokens[i] + ";" + tokens[i + 1] + ";" + tokens[i + 2] ;
var v=this.htVertices.get$O(key);
if (v == null ) {
this.addVertexCopy$javajs_util_T3$F$I$Z((function(a,f){return f.apply(null,a)})([this.parseFloatStr$S(tokens[i]), this.parseFloatStr$S(tokens[i + 1]), this.parseFloatStr$S(tokens[i + 2])],$I$(5).new3$F$F$F), 0, this.nVertices, false);
this.htVertices.put$O$O(key, v=Integer.valueOf$I(this.nVertices++));
}return v.intValue$();
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
