(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers");
var C$=Clazz.newClass(P$, "IsoPlaneReader", null, 'org.jmol.jvxl.readers.AtomDataReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
