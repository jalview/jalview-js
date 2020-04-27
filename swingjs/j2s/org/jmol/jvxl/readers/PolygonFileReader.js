(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.SB','java.util.Date']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PolygonFileReader", null, 'org.jmol.jvxl.readers.SurfaceFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nVertices','nTriangles']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2PFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2SFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1,1));
this.jvxlFileHeaderBuffer.append$S("#created ").append$S("" + Clazz.new_($I$(2,1))).append$S("\n");
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
