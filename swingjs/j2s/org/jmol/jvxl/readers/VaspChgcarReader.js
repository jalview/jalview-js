(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.SB','org.jmol.util.SimpleUnitCell','org.jmol.util.Logger','javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "VaspChgcarReader", null, 'org.jmol.jvxl.readers.PeriodicVolumeFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['volume'],'I',['pt','nPerLine']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.isAngstroms=true;
this.isPeriodic=true;
this.isProgressive=false;
this.nSurfaces=1;
});

Clazz.newMeth(C$, 'readParameters$', function () {
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1,1));
this.jvxlFileHeaderBuffer.append$S("Vasp CHGCAR format\n\n\n");
this.rd$();
var scale=this.parseFloatStr$S(this.rd$());
var data=Clazz.array(Float.TYPE, [15]);
data[0]=-1;
for (var i=0, pt=6; i < 3; ++i) this.volumetricVectors[i].set$F$F$F(data[pt++]=this.parseFloatStr$S(this.rd$()) * scale, data[pt++]=this.parseFloat$() * scale, data[pt++]=this.parseFloat$() * scale);

this.volume=$I$(2).newA$FA(data).volume;
while (this.rd$().length$() > 2){
}
this.rd$();
var counts=this.getTokens$();
for (var i=0; i < 3; ++i) {
this.volumetricVectors[i].scale$F(1.0 / ((this.voxelCounts[i]=this.parseIntStr$S(counts[i]) + 1) - 1));
if (this.isAnisotropic) this.setVectorAnisotropy$javajs_util_T3(this.volumetricVectors[i]);
}
this.swapXZ$();
this.volumetricOrigin.set$F$F$F(0, 0, 0);
if (this.params.thePlane == null  && (this.params.cutoffAutomatic || !Float.isNaN$F(this.params.sigma) ) ) {
this.params.cutoff=0.5;
(function(a,f){return f.apply(null,a)})(["Cutoff set to " + new Float(this.params.cutoff).toString()],$I$(3).info$S);
}});

Clazz.newMeth(C$, 'nextVoxel$', function () {
if (this.pt++ % this.nPerLine == 0 && this.nData > 0 ) {
this.rd$();
this.next[0]=0;
}return this.parseFloat$() / this.volume;
});

Clazz.newMeth(C$, 'getPeriodicVoxels$', function () {
var ni=this.voxelCounts[0] - 1;
var nj=this.voxelCounts[1] - 1;
var nk=this.voxelCounts[2] - 1;
var downSampling=(this.nSkipX > 0);
this.nPerLine=(function(a,f){return f.apply(null,a)})([this.rd$(), 0],$I$(4).countTokens$S$I);
for (var i=0; i < ni; i++) {
for (var j=0; j < nj; j++) {
for (var k=0; k < nk; k++) {
this.voxelData[i][j][k]=this.recordData$F(this.nextVoxel$());
if (downSampling) for (var m=this.nSkipX; --m >= 0; ) this.nextVoxel$();

}
if (downSampling) for (var m=this.nSkipY; --m >= 0; ) this.nextVoxel$();

}
if (downSampling) for (var m=this.nSkipZ; --m >= 0; ) this.nextVoxel$();

}
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
