(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.jvxl.data.JvxlCoder','org.jmol.util.Logger','java.util.Hashtable','javajs.util.CU','javajs.util.P3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Ras3DReader", null, 'org.jmol.jvxl.readers.PolygonFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pmeshError=null;
this.type=null;
this.asQuads=false;
this.nPolygons=0;
this.htVertices=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
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
 else $I$(2).error$S(this.params.fileName + ": " + (this.pmeshError == null  ? "Error reading pmesh data " : this.pmeshError) );
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
this.htVertices=Clazz.new_($I$(3));
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
c0=$I$(4).colorTriadToFFRGB$F$F$F(this.parseFloatStr$S(tokens[9]), this.parseFloatStr$S(tokens[10]), this.parseFloatStr$S(tokens[11]));
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
this.addVertexCopy$javajs_util_T3$F$I$Z($I$(5).new3$F$F$F(this.parseFloatStr$S(tokens[i]), this.parseFloatStr$S(tokens[i + 1]), this.parseFloatStr$S(tokens[i + 2])), 0, this.nVertices, false);
this.htVertices.put$TK$TV(key, v=Integer.valueOf$I(this.nVertices++));
}return v.intValue$();
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
