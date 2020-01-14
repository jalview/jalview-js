(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),I$=[[0,'javajs.util.SB','org.jmol.jvxl.data.JvxlCoder','javajs.util.AU','org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VolumeDataReader", null, 'org.jmol.jvxl.readers.SurfaceReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dataType=0;
this.precalculateVoxelData=false;
this.allowMapData=false;
this.point=null;
this.ptsPerAngstrom=0;
this.maxGrid=0;
this.useOriginStepsPoints=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initVDR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
});

Clazz.newMeth(C$, 'initVDR$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initSR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
this.useOriginStepsPoints=(this.params.origin != null  && this.params.points != null   && this.params.steps != null  );
this.dataType=this.params.dataType;
this.precalculateVoxelData=true;
this.allowMapData=true;
});

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1)).append$S("volume data read from file\n\n");
$I$(2).jvxlCreateHeaderWithoutTitleOrAtoms$org_jmol_jvxl_data_VolumeData$javajs_util_SB(this.volumeData, this.jvxlFileHeaderBuffer);
});

Clazz.newMeth(C$, 'readVolumeParameters$Z', function (isMapData) {
this.setup$Z(isMapData);
this.initializeVolumetricData$();
return true;
});

Clazz.newMeth(C$, 'readVolumeData$Z', function (isMapData) {
try {
this.readSurfaceData$Z(isMapData);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
{

}
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'readVoxelDataIndividually$Z', function (isMapData) {
if (isMapData && !this.allowMapData ) return;
if (!isMapData || this.volumeData.sr != null  ) {
this.volumeData.setVoxelDataAsArray$FAAA(this.voxelData=null);
return;
}this.newVoxelDataCube$();
for (var x=0; x < this.nPointsX; ++x) {
var plane=$I$(3).newFloat2$I(this.nPointsY);
this.voxelData[x]=plane;
var ptyz=0;
for (var y=0; y < this.nPointsY; ++y) {
var strip=plane[y]=Clazz.array(Float.TYPE, [this.nPointsZ]);
for (var z=0; z < this.nPointsZ; ++z, ++ptyz) {
strip[z]=this.getValue$I$I$I$I(x, y, z, ptyz);
}
}
}
});

Clazz.newMeth(C$, 'setVolumeData$', function () {
});

Clazz.newMeth(C$, 'setVolumeDataParams$', function () {
if (this.params.volumeData != null ) {
this.setVolumeDataV$org_jmol_jvxl_data_VolumeData(this.params.volumeData);
return true;
}if (!this.useOriginStepsPoints) {
return false;
}this.volumetricOrigin.setT$javajs_util_T3(this.params.origin);
this.volumetricVectors[0].set$F$F$F(this.params.steps.x, 0, 0);
this.volumetricVectors[1].set$F$F$F(0, this.params.steps.y, 0);
this.volumetricVectors[2].set$F$F$F(0, 0, this.params.steps.z);
this.voxelCounts[0]=(this.params.points.x|0);
this.voxelCounts[1]=(this.params.points.y|0);
this.voxelCounts[2]=(this.params.points.z|0);
if (this.voxelCounts[0] < 1 || this.voxelCounts[1] < 1  || this.voxelCounts[2] < 1 ) return false;
this.showGridInfo$();
return true;
});

Clazz.newMeth(C$, 'showGridInfo$', function () {
$I$(4).info$S("grid origin  = " + this.params.origin);
$I$(4).info$S("grid steps   = " + this.params.steps);
$I$(4).info$S("grid points  = " + this.params.points);
this.ptTemp.x=this.params.steps.x * this.params.points.x;
this.ptTemp.y=this.params.steps.y * this.params.points.y;
this.ptTemp.z=this.params.steps.z * this.params.points.z;
$I$(4).info$S("grid lengths = " + this.ptTemp);
this.ptTemp.add$javajs_util_T3(this.params.origin);
$I$(4).info$S("grid max xyz = " + this.ptTemp);
});

Clazz.newMeth(C$, 'setVoxelRange$I$F$F$F$I$F', function (index, min, max, ptsPerAngstrom, gridMax, minPointsPerAngstrom) {
var nGrid;
var d;
if (min - max >= -1.0E-4 ) {
min=-10;
max=10;
}var range=max - min;
var resolution=this.params.resolution;
if (resolution != 3.4028235E38 ) ptsPerAngstrom=resolution;
nGrid=(Math.floor(range * ptsPerAngstrom)|0) + 1;
if (nGrid > gridMax) {
if ((this.dataType & 256) > 0) {
if (resolution == 3.4028235E38 ) {
if (!this.isQuiet) $I$(4).info$S("Maximum number of voxels for index=" + index + " exceeded (" + nGrid + ") -- set to " + gridMax );
nGrid=gridMax;
} else {
if (!this.isQuiet) $I$(4).info$S("Warning -- high number of grid points: " + nGrid);
}} else if (resolution == 3.4028235E38 ) {
nGrid=gridMax;
}}if (nGrid == 1) nGrid=2;
ptsPerAngstrom=(nGrid - 1) / range;
if (ptsPerAngstrom < minPointsPerAngstrom ) {
ptsPerAngstrom=minPointsPerAngstrom;
nGrid=(Math.floor(ptsPerAngstrom * range + 1)|0);
ptsPerAngstrom=(nGrid - 1) / range;
}d=this.volumeData.volumetricVectorLengths[index]=1.0 / ptsPerAngstrom;
this.voxelCounts[index]=nGrid;
if (!this.isQuiet) $I$(4).info$S("isosurface resolution for axis " + (index + 1) + " set to " + new Float(ptsPerAngstrom).toString() + " points/Angstrom; " + this.voxelCounts[index] + " voxels" );
switch (index) {
case 0:
this.volumetricVectors[0].set$F$F$F(d, 0, 0);
this.volumetricOrigin.x=min;
break;
case 1:
this.volumetricVectors[1].set$F$F$F(0, d, 0);
this.volumetricOrigin.y=min;
break;
case 2:
this.volumetricVectors[2].set$F$F$F(0, 0, d);
this.volumetricOrigin.z=min;
if (this.isEccentric) this.eccentricityMatrix.rotate$javajs_util_T3(this.volumetricOrigin);
if (this.center != null  && !Float.isNaN$F(this.center.x) ) this.volumetricOrigin.add$javajs_util_T3(this.center);
}
if (this.isEccentric) this.eccentricityMatrix.rotate$javajs_util_T3(this.volumetricVectors[index]);
return this.voxelCounts[index];
});

Clazz.newMeth(C$, 'readSurfaceData$Z', function (isMapData) {
this.readSurfaceDataVDR$Z(isMapData);
});

Clazz.newMeth(C$, 'readSurfaceDataVDR$Z', function (isMapData) {
if (this.isProgressive && !isMapData ) {
this.nDataPoints=this.volumeData.setVoxelCounts$I$I$I(this.nPointsX, this.nPointsY, this.nPointsZ);
this.voxelData=null;
return;
}if (this.precalculateVoxelData) this.generateCube$();
 else this.readVoxelDataIndividually$Z(isMapData);
});

Clazz.newMeth(C$, 'generateCube$', function () {
$I$(4).info$S("data type: user volumeData");
$I$(4).info$S("voxel grid origin:" + this.volumetricOrigin);
for (var i=0; i < 3; ++i) $I$(4).info$S("voxel grid vector:" + this.volumetricVectors[i]);

$I$(4).info$S("Read " + this.nPointsX + " x " + this.nPointsY + " x " + this.nPointsZ + " data points" );
});

Clazz.newMeth(C$, 'closeReader$', function () {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
