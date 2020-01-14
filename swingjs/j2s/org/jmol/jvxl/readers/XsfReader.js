(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.SB','org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "XsfReader", null, 'org.jmol.jvxl.readers.VolumeFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isBXSF=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isBXSF=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
});

Clazz.newMeth(C$, 'readParameters$', function () {
this.isAngstroms=false;
this.params.blockCubeData=true;
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1));
this.jvxlFileHeaderBuffer.append$S("XsfReader file\n");
var needCutoff=this.params.cutoffAutomatic;
this.isAngstroms=true;
var beginKey="BEGIN_DATAGRID_3D";
this.nSurfaces=1;
while (this.rd$() != null  && this.line.indexOf$S(beginKey) < 0 ){
$I$(2).info$S(this.line);
if (this.line.indexOf$S("Fermi Energy:") >= 0) {
this.isBXSF=true;
beginKey="BEGIN_BANDGRID_3D";
if (needCutoff) {
this.params.cutoff=this.parseFloatStr$S(this.getTokens$()[2]);
needCutoff=false;
}}continue;
}
if (needCutoff) this.params.cutoff=0.05;
if (this.isBXSF) this.nSurfaces=this.parseIntStr$S(this.rd$());
this.voxelCounts[0]=this.parseIntStr$S(this.rd$());
this.voxelCounts[1]=this.parseInt$();
this.voxelCounts[2]=this.parseInt$();
this.volumetricOrigin.set$F$F$F(this.parseFloatStr$S(this.rd$()), this.parseFloat$(), this.parseFloat$());
for (var i=0; i < 3; ++i) {
this.volumetricVectors[i].set$F$F$F(this.parseFloatStr$S(this.rd$()), this.parseFloat$(), this.parseFloat$());
this.volumetricVectors[i].scale$F(1.0 / (this.voxelCounts[i] - 1));
}
if (this.isBXSF) {
} else {
this.swapXZ$();
}});

Clazz.newMeth(C$, 'gotoData$I$I', function (n, nPoints) {
if (!this.params.blockCubeData) return;
if (n > 0) $I$(2).info$S("skipping " + n + " data sets, " + nPoints + " points each" );
if (this.isBXSF) $I$(2).info$S(this.rd$());
for (var i=0; i < n; i++) this.skipData$I(nPoints);

});

Clazz.newMeth(C$, 'skipData$I', function (nPoints) {
this.skipDataVFR$I(nPoints);
if (this.isBXSF) $I$(2).info$S(this.rd$());
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
