(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.SB','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CastepDensityReader", null, 'org.jmol.jvxl.readers.PeriodicVolumeFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nFilePoints=0;
this.nSkip=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.isProgressive=false;
this.isAngstroms=true;
});

Clazz.newMeth(C$, 'gotoData$I$I', function (n, nPoints) {
this.nSkip=n;
});

Clazz.newMeth(C$, 'readParameters$', function () {
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1));
while (this.rd$() != null  && this.line.indexOf$S(".") < 0 ){
}
for (var i=0; i < 3; ++i) {
var voxelVector=this.volumetricVectors[i];
voxelVector.set$F$F$F(this.parseFloatStr$S(this.line), this.parseFloat$(), this.parseFloat$());
this.rd$();
}
this.nSurfaces=this.parseIntStr$S(this.rd$());
this.rd$();
this.voxelCounts[0]=(this.nPointsX=this.parseIntStr$S(this.line)) + 1;
this.voxelCounts[1]=(this.nPointsY=this.parseInt$()) + 1;
this.voxelCounts[2]=(this.nPointsZ=this.parseInt$()) + 1;
this.nFilePoints=(this.nPointsX++) * (this.nPointsY++) * (this.nPointsZ++) ;
this.volumetricOrigin.set$F$F$F(0, 0, 0);
for (var i=0; i < 3; i++) {
this.volumetricVectors[i].scale$F(1.0 / (this.voxelCounts[i] - 1));
if (this.isAnisotropic) this.setVectorAnisotropy$javajs_util_T3(this.volumetricVectors[i]);
}
while (this.rd$().trim$().length$() > 0){
}
});

Clazz.newMeth(C$, 'getPeriodicVoxels$', function () {
this.rd$();
var tokens=this.getTokens$();
if (this.nSkip > 0 && tokens.length < 3 + this.nSurfaces ) {
for (var j=0; j < this.nSkip; j++) for (var i=0; i < this.nFilePoints; i++) this.rd$();


this.nSkip=0;
}var dsf=this.downsampleFactor;
if (dsf > 1) {
for (var i=0; i < this.nFilePoints; i++) {
var x=this.parseIntStr$S(this.line) - 1;
var y=this.parseInt$() - 1;
var z=this.parseInt$() - 1;
if (x % dsf == 0 && y % dsf == 0  && z % dsf == 0 ) {
if (this.nSkip > 0) p$1.skipPoints$I.apply(this, [this.nSkip]);
this.voxelData[(x/dsf|0)][(y/dsf|0)][(z/dsf|0)]=this.recordData$F(this.parseFloat$());
}this.rd$();
}
} else {
for (var i=0; i < this.nFilePoints; i++) {
var x=this.parseIntStr$S(this.line) - 1;
var y=this.parseInt$() - 1;
var z=this.parseInt$() - 1;
if (this.nSkip > 0) p$1.skipPoints$I.apply(this, [this.nSkip]);
this.voxelData[x][y][z]=this.recordData$F(this.parseFloat$());
this.rd$();
}
}});

Clazz.newMeth(C$, 'skipPoints$I', function (n) {
var pt=this.next[0];
for (var i=0; i < n; i++) {
while (pt < this.line.length$() && $I$(2).isWhitespace$C(this.line.charAt$I(pt++)) ){
}
while (pt < this.line.length$() && !$I$(2).isWhitespace$C(this.line.charAt$I(pt++)) ){
}
}
this.next[0]=pt;
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
