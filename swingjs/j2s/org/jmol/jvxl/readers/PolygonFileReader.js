(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.SB','java.util.Date']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PolygonFileReader", null, 'org.jmol.jvxl.readers.SurfaceFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nVertices=0;
this.nTriangles=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2PFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2SFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1));
this.jvxlFileHeaderBuffer.append$S("#created ").append$S("" + Clazz.new_($I$(2))).append$S("\n");
this.vertexDataOnly=true;
});

Clazz.newMeth(C$, 'readVolumeParameters$Z', function (isMapData) {
return true;
});

Clazz.newMeth(C$, 'readVolumeData$Z', function (isMapData) {
return true;
});

Clazz.newMeth(C$, 'readSurfaceData$Z', function (isMapData) {
this.getSurfaceData$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:21 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
