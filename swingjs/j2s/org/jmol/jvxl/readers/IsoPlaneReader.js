(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers");
/*c*/var C$=Clazz.newClass(P$, "IsoPlaneReader", null, 'org.jmol.jvxl.readers.AtomDataReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initADR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
this.precalculateVoxelData=false;
});

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
this.setup2$();
this.setHeader$S$S("PLANE", this.params.thePlane.toString());
this.params.cutoff=0;
this.setVolumeForPlane$();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
