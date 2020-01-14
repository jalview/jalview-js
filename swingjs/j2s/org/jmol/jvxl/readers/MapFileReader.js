(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.P3','org.jmol.util.Logger','org.jmol.util.SimpleUnitCell']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MapFileReader", null, 'org.jmol.jvxl.readers.VolumeFileReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dmin=0;
this.dmax=0;
this.dmean=0;
this.drange=0;
this.mapc=0;
this.mapr=0;
this.maps=0;
this.n0=0;
this.n1=0;
this.n2=0;
this.mode=0;
this.xyzStart=null;
this.na=0;
this.nb=0;
this.nc=0;
this.a=0;
this.b=0;
this.c=0;
this.alpha=0;
this.beta=0;
this.gamma=0;
this.origin=null;
this.vectors=null;
this.xIndex=0;
this.yIndex=0;
this.zIndex=0;
this.p3=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.dmin=3.4028235E38;
this.xyzStart=Clazz.array(Float.TYPE, [3]);
this.origin=Clazz.new_($I$(1));
this.vectors=Clazz.array($I$(1), [3]);
this.xIndex=-1;
this.p3=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2MFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
});

Clazz.newMeth(C$, 'init2MFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.isAngstroms=true;
});

Clazz.newMeth(C$, 'checkInsideOut$I$I$I', function (mapc, mapr, maps) {
if (this.params.thePlane == null ) this.params.insideOut=(";123;231;312;".indexOf$S(";" + mapc + mapr + maps ) >= 0);
});

Clazz.newMeth(C$, 'getVectorsAndOrigin$', function () {
this.checkInsideOut$I$I$I(this.mapc, this.mapr, this.maps);
$I$(2).info$S("grid parameters: nx,ny,nz: " + this.n0 + "," + this.n1 + "," + this.n2 );
$I$(2).info$S("grid parameters: nxStart,nyStart,nzStart: " + new Float(this.xyzStart[0]).toString() + "," + new Float(this.xyzStart[1]).toString() + "," + new Float(this.xyzStart[2]).toString() );
$I$(2).info$S("grid parameters: mx,my,mz: " + this.na + "," + this.nb + "," + this.nc );
$I$(2).info$S("grid parameters: a,b,c,alpha,beta,gamma: " + new Float(this.a).toString() + "," + new Float(this.b).toString() + "," + new Float(this.c).toString() + "," + new Float(this.alpha).toString() + "," + new Float(this.beta).toString() + "," + new Float(this.gamma).toString() );
$I$(2).info$S("grid parameters: mapc,mapr,maps: " + this.mapc + "," + this.mapr + "," + this.maps );
$I$(2).info$S("grid parameters: originX,Y,Z: " + this.origin);
var unitCell=$I$(3).newA$FA(Clazz.array(Float.TYPE, -1, [this.a / this.na, this.b / this.nb, this.c / this.nc, this.alpha, this.beta, this.gamma]));
this.vectors[0]=$I$(1).new3$F$F$F(1, 0, 0);
this.vectors[1]=$I$(1).new3$F$F$F(0, 1, 0);
this.vectors[2]=$I$(1).new3$F$F$F(0, 0, 1);
unitCell.toCartesian$javajs_util_T3$Z(this.vectors[0], false);
unitCell.toCartesian$javajs_util_T3$Z(this.vectors[1], false);
unitCell.toCartesian$javajs_util_T3$Z(this.vectors[2], false);
$I$(2).info$S("Jmol unit cell vectors:");
$I$(2).info$S("    a: " + this.vectors[0]);
$I$(2).info$S("    b: " + this.vectors[1]);
$I$(2).info$S("    c: " + this.vectors[2]);
this.voxelCounts[0]=this.n2;
this.voxelCounts[1]=this.n1;
this.voxelCounts[2]=this.n0;
this.volumetricVectors[0].setT$javajs_util_T3(this.vectors[this.maps - 1]);
this.volumetricVectors[1].setT$javajs_util_T3(this.vectors[this.mapr - 1]);
this.volumetricVectors[2].setT$javajs_util_T3(this.vectors[this.mapc - 1]);
if (this.origin.x == 0  && this.origin.y == 0   && this.origin.z == 0  ) {
if (this.xIndex == -1) {
var xyz2crs=Clazz.array(Integer.TYPE, [3]);
xyz2crs[this.mapc - 1]=0;
xyz2crs[this.mapr - 1]=1;
xyz2crs[this.maps - 1]=2;
this.xIndex=xyz2crs[0];
this.yIndex=xyz2crs[1];
this.zIndex=xyz2crs[2];
}this.origin.scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.xyzStart[this.xIndex], this.vectors[0], this.origin);
this.origin.scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.xyzStart[this.yIndex], this.vectors[1], this.origin);
this.origin.scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.xyzStart[this.zIndex], this.vectors[2], this.origin);
}this.volumetricOrigin.setT$javajs_util_T3(this.origin);
$I$(2).info$S("Jmol grid origin in Cartesian coordinates: " + this.origin);
$I$(2).info$S("Use  isosurface OFFSET {x y z}  if you want to shift it.\n");
this.p3.set$F$F$F(this.na, this.nb, this.nc);
unitCell.toCartesian$javajs_util_T3$Z(this.p3, true);
this.p3.add$javajs_util_T3(this.origin);
$I$(2).info$S("boundbox corners " + this.origin + " " + this.p3 + ";draw bbox boundbox mesh nofill" );
});

Clazz.newMeth(C$, 'setCutoffAutomatic$', function () {
if (this.params.thePlane == null  && this.params.cutoffAutomatic ) {
this.params.cutoff=-1.0;
$I$(2).info$S("MapReader: setting cutoff to default value of " + new Float(this.params.cutoff).toString() + (this.boundingBox == null  ? " (no BOUNDBOX parameter)\n" : "\n") );
}});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
