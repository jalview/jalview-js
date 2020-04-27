(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.SB','org.jmol.viewer.Viewer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PltFormattedReader", null, 'org.jmol.jvxl.readers.VolumeFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.isAngstroms=true;
this.jvxlData.wasCubic=true;
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1,1));
this.nSurfaces=1;
});

Clazz.newMeth(C$, 'readParameters$', function () {
var n1=this.parseIntStr$S(this.rd$());
var n2=this.parseInt$();
this.nPointsX=this.parseIntStr$S(this.rd$());
this.nPointsY=this.parseInt$();
this.nPointsZ=this.parseInt$();
this.jvxlFileHeaderBuffer.append$S("Plt formatted data (" + n1 + "," + n2 + ") " + this.nPointsX + " x " + this.nPointsY + " x " + this.nPointsZ + " \nJmol " + $I$(2).getJmolVersion$() + '\n' );
this.volumetricOrigin.set$F$F$F(0, 0, 0);
var xmin=this.parseFloatStr$S(this.rd$().substring$I$I(0, 12));
var xmax=this.parseFloatRange$S$I$I(this.line, 12, 24);
var ymin=this.parseFloatRange$S$I$I(this.line, 24, 36);
var ymax=this.parseFloatRange$S$I$I(this.line, 36, 48);
var zmin=this.parseFloatRange$S$I$I(this.line, 48, 60);
var zmax=this.parseFloatRange$S$I$I(this.line, 60, 72);
this.volumetricOrigin.set$F$F$F(xmin, ymin, zmin);
this.voxelCounts[0]=this.nPointsX;
this.voxelCounts[1]=this.nPointsY;
this.voxelCounts[2]=this.nPointsZ;
this.volumetricVectors[0].set$F$F$F(0, 0, (xmax - xmin) / this.nPointsX);
this.volumetricVectors[1].set$F$F$F(0, (ymax - ymin) / this.nPointsY, 0);
this.volumetricVectors[2].set$F$F$F((zmax - zmin) / this.nPointsZ, 0, 0);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
