(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.SB']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UhbdReader", null, 'org.jmol.jvxl.readers.VolumeFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.planeCount=0;
this.voxelCount=0;
this.pt=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
if (this.params.thePlane == null ) this.params.insideOut=!this.params.insideOut;
this.isAngstroms=true;
this.nSurfaces=1;
});

Clazz.newMeth(C$, 'readParameters$', function () {
this.rd$();
this.jvxlFileHeaderBuffer=$I$(1).newS$S(this.line);
this.jvxlFileHeaderBuffer.append$S("UHBD format ").append$S(this.line).append$S("\n");
this.jvxlFileHeaderBuffer.append$S("see http://sourceforge.net/p/apbs/code/ci/9527462a39126fb6cd880924b3cc4880ec4b78a9/tree/src/mg/vgrid.c\n");
this.rd$();
this.rd$();
this.voxelCounts[0]=this.parseIntStr$S(this.line.substring$I$I(0, 7));
this.voxelCounts[1]=this.parseIntStr$S(this.line.substring$I$I(7, 14));
this.voxelCounts[2]=this.parseIntStr$S(this.line.substring$I$I(14, 21));
var dx=this.parseFloatStr$S(this.line.substring$I$I(21, 33));
this.volumetricOrigin.set$F$F$F(this.parseFloatStr$S(this.line.substring$I$I(33, 45)), this.parseFloatStr$S(this.line.substring$I$I(45, 57)), this.parseFloatStr$S(this.line.substring$I$I(57, 69)));
this.volumetricVectors[0].set$F$F$F(0, 0, dx);
this.volumetricVectors[1].set$F$F$F(0, dx, 0);
this.volumetricVectors[2].set$F$F$F(dx, 0, 0);
this.planeCount=this.voxelCounts[0] * this.voxelCounts[1];
this.rd$();
this.rd$();
});

Clazz.newMeth(C$, 'nextVoxel$', function () {
if (this.voxelCount % this.planeCount == 0) {
this.rd$();
this.pt=0;
}if (this.pt % 78 == 0) {
this.rd$();
this.pt=0;
}this.voxelCount++;
var voxelValue=this.parseFloatStr$S(this.line.substring$I$I(this.pt, this.pt + 13));
this.pt+=13;
return voxelValue;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
