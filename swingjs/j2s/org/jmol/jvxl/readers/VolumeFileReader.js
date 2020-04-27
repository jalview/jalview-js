(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.util.Logger','javajs.util.SB','javajs.util.AU','org.jmol.api.Interface','org.jmol.atomdata.AtomData','javajs.util.PT']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "VolumeFileReader", null, 'org.jmol.jvxl.readers.SurfaceFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['endOfData','negativeAtomCount','isAngstroms','canDownsample','getNCIPlanes','readerClosed','isScaledAlready'],'I',['ac','nSurfaces','nData','downsampleFactor','nSkipX','nSkipY','nSkipZ','iPlaneNCI'],'O',['downsampleRemainders','int[]','yzPlanesRaw','float[][]','boundingBox','javajs.util.P3[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
});

Clazz.newMeth(C$, 'init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2SFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.canDownsample=this.isProgressive=this.isXLowToHigh=true;
this.jvxlData.wasCubic=true;
this.boundingBox=this.params.boundingBox;
if (this.params.qmOrbitalType == 4) {
this.hasColorData=(this.params.parameters == null  || this.params.parameters[1] >= 0  );
this.getNCIPlanes=true;
this.params.insideOut=!this.params.insideOut;
}});

Clazz.newMeth(C$, 'recordData$F', function (value) {
if (Float.isNaN$F(value)) return value;
if (value < this.dataMin ) this.dataMin=value;
if (value > this.dataMax ) this.dataMax=value;
this.dataMean += value;
this.nData++;
return value;
});

Clazz.newMeth(C$, 'closeReader$', function () {
if (this.readerClosed) return;
this.readerClosed=true;
this.closeReaderSFR$();
if (this.nData == 0 || this.dataMax == -3.4028235E38  ) return;
this.dataMean /= this.nData;
(function(a,f){return f.apply(null,a)})(["VolumeFileReader closing file: " + this.nData + " points read \ndata min/max/mean = " + new Float(this.dataMin).toString() + "/" + new Float(this.dataMax).toString() + "/" + new Float(this.dataMean).toString() ],$I$(1).info$S);
});

Clazz.newMeth(C$, 'readVolumeParameters$Z', function (isMapData) {
this.endOfData=false;
this.nSurfaces=p$1.readVolumetricHeader.apply(this, []);
if (this.nSurfaces == 0) return false;
if (this.nSurfaces < this.params.fileIndex) {
$I$(1).warn$S("not enough surfaces in file -- resetting params.fileIndex to " + this.nSurfaces);
this.params.fileIndex=this.nSurfaces;
}return true;
});

Clazz.newMeth(C$, 'readVolumeData$Z', function (isMapData) {
return this.readVolumeDataVFR$Z(isMapData);
});

Clazz.newMeth(C$, 'readVolumeDataVFR$Z', function (isMapData) {
if (!this.gotoAndReadVoxelData$Z(isMapData)) return false;
if (!this.vertexDataOnly) $I$(1).info$S("JVXL read: " + this.nPointsX + " x " + this.nPointsY + " x " + this.nPointsZ + " data points" );
return true;
});

Clazz.newMeth(C$, 'readVolumetricHeader', function () {
try {
this.readParameters$();
if (this.ac == -2147483648) return 0;
if (!this.vertexDataOnly) $I$(1).info$S("voxel grid origin:" + this.volumetricOrigin);
var downsampleFactor=this.params.downsampleFactor;
var downsampling=(this.canDownsample && downsampleFactor > 1 );
if (downsampleFactor > 1 && !this.canDownsample ) this.jvxlData.msg += "\ncannot downsample this file type";
if (downsampling) {
this.downsampleRemainders=Clazz.array(Integer.TYPE, [3]);
(function(a,f){return f.apply(null,a)})(["downsample factor = " + downsampleFactor],$I$(1).info$S);
for (var i=0; i < 3; ++i) {
var n=this.voxelCounts[i];
this.downsampleRemainders[i]=n % downsampleFactor;
this.voxelCounts[i]=(this.voxelCounts[i]/(downsampleFactor)|0);
if (this.isPeriodic) {
this.voxelCounts[i]++;
this.downsampleRemainders[i]--;
}this.volumetricVectors[i].scale$F(downsampleFactor);
(function(a,f){return f.apply(null,a)})(["downsampling axis " + (i + 1) + " from " + n + " to " + this.voxelCounts[i] ],$I$(1).info$S);
}
}if (!this.vertexDataOnly) for (var i=0; i < 3; ++i) {
if (!this.isAngstroms) this.volumetricVectors[i].scale$F(0.5291772);
this.line=this.voxelCounts[i] + " " + new Float(this.volumetricVectors[i].x).toString() + " " + new Float(this.volumetricVectors[i].y).toString() + " " + new Float(this.volumetricVectors[i].z).toString() ;
this.jvxlFileHeaderBuffer.append$S(this.line).appendC$C("\n");
$I$(1).info$S("voxel grid count/vector:" + this.line);
}
p$1.scaleIsosurface$F.apply(this, [this.params.scale]);
this.volumeData.setVolumetricXml$();
return this.nSurfaces;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
(function(a,f){return f.apply(null,a)})([e.toString()],$I$(1).error$S);
return 0;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'skipComments$Z', function (allowBlankLines) {
var sb=Clazz.new_($I$(2,1));
while (this.rd$() != null  && (allowBlankLines && this.line.length$() == 0  || this.line.indexOf$S("#") == 0 ) )sb.append$S(this.line).appendC$C("\n");

return sb.toString();
});

Clazz.newMeth(C$, 'readVoxelVector$I', function (voxelVectorIndex) {
this.rd$();
var voxelVector=this.volumetricVectors[voxelVectorIndex];
if ((this.voxelCounts[voxelVectorIndex]=this.parseIntStr$S(this.line)) == -2147483648) this.next[0]=this.line.indexOf$S(" ");
voxelVector.set$F$F$F(this.parseFloat$(), this.parseFloat$(), this.parseFloat$());
if (this.isAnisotropic) this.setVectorAnisotropy$javajs_util_T3(voxelVector);
});

Clazz.newMeth(C$, 'initializeSurfaceData$', function () {
this.downsampleFactor=this.params.downsampleFactor;
this.nSkipX=0;
this.nSkipY=0;
this.nSkipZ=0;
if (this.canDownsample && this.downsampleFactor > 0 ) {
this.nSkipX=this.downsampleFactor - 1;
this.nSkipY=this.downsampleRemainders[2] + (this.downsampleFactor - 1) * (this.nSkipZ=((this.nPointsZ - (this.isPeriodic ? 1 : 0)) * this.downsampleFactor + this.downsampleRemainders[2]));
this.nSkipZ=this.downsampleRemainders[1] * this.nSkipZ + (this.downsampleFactor - 1) * this.nSkipZ * ((this.nPointsY - (this.isPeriodic ? 1 : 0)) * this.downsampleFactor + this.downsampleRemainders[1]) ;
}if (this.params.thePlane != null ) {
this.params.cutoff=0.0;
} else if (this.isJvxl) {
this.params.cutoff=(this.params.isBicolorMap || this.params.colorBySign  ? 0.01 : 0.5);
}this.nDataPoints=0;
this.next[0]=0;
this.line="";
this.jvxlNSurfaceInts=0;
});

Clazz.newMeth(C$, 'readSurfaceData$Z', function (isMapData) {
this.readSurfaceDataVFR$Z(isMapData);
});

Clazz.newMeth(C$, 'readSurfaceDataVFR$Z', function (isMapData) {
this.initializeSurfaceData$();
if (this.isProgressive && !isMapData  || this.isJvxl ) {
this.nDataPoints=this.volumeData.setVoxelCounts$I$I$I(this.nPointsX, this.nPointsY, this.nPointsZ);
this.voxelData=null;
if (this.isJvxl) this.jvxlVoxelBitSet=this.getVoxelBitSet$I(this.nDataPoints);
} else if (isMapData && this.volumeData.hasPlane$() ) {
this.volumeData.setVoxelMap$();
var f=this.volumeData.getToPlaneParameter$();
for (var x=0; x < this.nPointsX; ++x) {
for (var y=0; y < this.nPointsY; ++y) {
for (var z=0; z < this.nPointsZ; ++z) {
var v=this.recordData$F(this.getNextVoxelValue$());
if (this.volumeData.isNearPlane$I$I$I$F(x, y, z, f)) this.volumeData.setVoxelMapValue$I$I$I$F(x, y, z, v);
if (this.nSkipX != 0) p$1.skipVoxels$I.apply(this, [this.nSkipX]);
}
if (this.nSkipY != 0) p$1.skipVoxels$I.apply(this, [this.nSkipY]);
}
if (this.nSkipZ != 0) p$1.skipVoxels$I.apply(this, [this.nSkipZ]);
}
} else {
this.voxelData=$I$(3).newFloat3$I$I(this.nPointsX, -1);
for (var x=0; x < this.nPointsX; ++x) {
var plane=$I$(3).newFloat2$I(this.nPointsY);
this.voxelData[x]=plane;
for (var y=0; y < this.nPointsY; ++y) {
var strip=Clazz.array(Float.TYPE, [this.nPointsZ]);
plane[y]=strip;
for (var z=0; z < this.nPointsZ; ++z) {
strip[z]=this.recordData$F(this.getNextVoxelValue$());
if (this.nSkipX != 0) p$1.skipVoxels$I.apply(this, [this.nSkipX]);
}
if (this.nSkipY != 0) p$1.skipVoxels$I.apply(this, [this.nSkipY]);
}
if (this.nSkipZ != 0) p$1.skipVoxels$I.apply(this, [this.nSkipZ]);
}
}this.volumeData.setVoxelDataAsArray$FAAA(this.voxelData);
});

Clazz.newMeth(C$, 'getPlane$I', function (x) {
if (x == 0) this.initPlanes$();
if (this.getNCIPlanes) return this.getPlaneNCI$I(x);
var plane=this.getPlaneSR$I(x);
if (this.qpc == null ) p$1.getPlaneVFR$FA$Z.apply(this, [plane, true]);
return plane;
});

Clazz.newMeth(C$, 'getPlaneNCI$I', function (x) {
var plane;
if (this.iPlaneNCI == 0) {
this.qpc=$I$(4).getOption$S$org_jmol_viewer_Viewer$S("quantum.NciCalculation", this.sg.atomDataServer, null);
var atomData=Clazz.new_($I$(5,1));
atomData.modelIndex=-1;
atomData.bsSelected=this.params.bsSelected;
this.sg.fillAtomData$org_jmol_atomdata_AtomData$I(atomData, 1);
(this.qpc).setupCalculation$org_jmol_jvxl_data_VolumeData$javajs_util_BS$javajs_util_BS$javajs_util_BSA$javajs_util_T3A$I$Z$javajs_util_T3A$FA$I(this.volumeData, this.sg.params.bsSelected, null, null, atomData.atoms, -1, true, null, this.params.parameters, this.params.testFlags);
this.iPlaneNCI=1;
this.qpc.setPlanes$FAA(this.yzPlanesRaw=Clazz.array(Float.TYPE, [4, this.yzCount]));
if (this.hasColorData) {
p$1.getPlaneVFR$FA$Z.apply(this, [this.yzPlanesRaw[0], false]);
p$1.getPlaneVFR$FA$Z.apply(this, [this.yzPlanesRaw[1], false]);
plane=this.yzPlanes[0];
for (var i=0; i < this.yzCount; i++) plane[i]=NaN;

return plane;
}this.iPlaneNCI=-1;
}var nan=this.qpc.getNoValue$();
var x1=this.nPointsX - 1;
switch (this.iPlaneNCI) {
case -1:
plane=this.yzPlanes[x % 2];
x1++;
break;
case 3:
plane=this.yzPlanesRaw[0];
this.yzPlanesRaw[0]=this.yzPlanesRaw[1];
this.yzPlanesRaw[1]=this.yzPlanesRaw[2];
this.yzPlanesRaw[2]=this.yzPlanesRaw[3];
this.yzPlanesRaw[3]=plane;
plane=this.yzPlanesRaw[this.iPlaneNCI];
break;
default:
this.iPlaneNCI++;
plane=this.yzPlanesRaw[this.iPlaneNCI];
}
if (x < x1) {
p$1.getPlaneVFR$FA$Z.apply(this, [plane, false]);
this.qpc.calcPlane$I$FA(x, plane=this.yzPlanes[x % 2]);
for (var i=0; i < this.yzCount; i++) if (plane[i] != nan ) this.recordData$F(plane[i]);

} else {
for (var i=0; i < this.yzCount; i++) plane[i]=NaN;

}return plane;
});

Clazz.newMeth(C$, 'getPlaneVFR$FA$Z', function (plane, doRecord) {
try {
for (var y=0, ptyz=0; y < this.nPointsY; ++y) {
for (var z=0; z < this.nPointsZ; ++z) {
var v=this.getNextVoxelValue$();
if (doRecord) this.recordData$F(v);
plane[ptyz++]=v;
if (this.nSkipX != 0) p$1.skipVoxels$I.apply(this, [this.nSkipX]);
}
if (this.nSkipY != 0) p$1.skipVoxels$I.apply(this, [this.nSkipY]);
}
if (this.nSkipZ != 0) p$1.skipVoxels$I.apply(this, [this.nSkipZ]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getValue$I$I$I$I', function (x, y, z, ptyz) {
if (this.boundingBox != null ) {
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, this.ptTemp);
if (this.ptTemp.x < this.boundingBox[0].x  || this.ptTemp.x > this.boundingBox[1].x   || this.ptTemp.y < this.boundingBox[0].y   || this.ptTemp.y > this.boundingBox[1].y   || this.ptTemp.z < this.boundingBox[0].z   || this.ptTemp.z > this.boundingBox[1].z  ) return NaN;
}return this.getValue2$I$I$I$I(x, y, z, ptyz);
});

Clazz.newMeth(C$, 'skipVoxels$I', function (n) {
for (var i=n; --i >= 0; ) this.getNextVoxelValue$();

}, p$1);

Clazz.newMeth(C$, 'getVoxelBitSet$I', function (nPoints) {
return null;
});

Clazz.newMeth(C$, 'getNextVoxelValue$', function () {
var voxelValue=0;
if (this.nSurfaces > 1 && !this.params.blockCubeData ) {
for (var i=1; i < this.params.fileIndex; i++) this.nextVoxel$();

voxelValue=this.nextVoxel$();
for (var i=this.params.fileIndex; i < this.nSurfaces; i++) this.nextVoxel$();

} else {
voxelValue=this.nextVoxel$();
}return voxelValue;
});

Clazz.newMeth(C$, 'nextVoxel$', function () {
var voxelValue=this.parseFloat$();
if (Float.isNaN$F(voxelValue)) {
while (this.rd$() != null  && Float.isNaN$F(voxelValue=this.parseFloatStr$S(this.line)) ){
}
if (this.line == null ) {
if (!this.endOfData) (function(a,f){return f.apply(null,a)})(["end of file reading cube voxel data? nBytes=" + this.nBytes + " nDataPoints=" + this.nDataPoints + " (line):" + this.line ],$I$(1).warn$S);
this.endOfData=true;
this.line="0 0 0 0 0 0 0 0 0 0";
}}return voxelValue;
});

Clazz.newMeth(C$, 'gotoData$I$I', function (n, nPoints) {
if (!this.params.blockCubeData) return;
if (n > 0) $I$(1).info$S("skipping " + n + " data sets, " + nPoints + " points each" );
for (var i=0; i < n; i++) this.skipData$I(nPoints);

});

Clazz.newMeth(C$, 'skipData$I', function (nPoints) {
this.skipDataVFR$I(nPoints);
});

Clazz.newMeth(C$, 'skipDataVFR$I', function (nPoints) {
var iV=0;
while (iV < nPoints)iV+=p$1.countData$S.apply(this, [this.rd$()]);

});

Clazz.newMeth(C$, 'countData$S', function (str) {
var count=0;
var ich=0;
var ichMax=str.length$();
var ch;
while (ich < ichMax){
while (ich < ichMax && ((ch=str.charAt$I(ich)) == " " || ch == "\t" ) )++ich;

if (ich < ichMax) ++count;
while (ich < ichMax && ((ch=str.charAt$I(ich)) != " " && ch != "\t" ) )++ich;

}
return count;
}, p$1);

Clazz.newMeth(C$, 'checkAtomLine$Z$Z$S$S$javajs_util_SB', function (isXLowToHigh, isAngstroms, strAtomCount, atomLine, bs) {
if (atomLine.indexOf$S("ANGSTROMS") >= 0) isAngstroms=true;
var ac=(strAtomCount == null  ? 2147483647 : $I$(6).parseInt$S(strAtomCount));
switch (ac) {
case -2147483648:
ac=0;
atomLine=" " + atomLine.substring$I(atomLine.indexOf$S(" ") + 1);
break;
case 2147483647:
ac=-2147483648;
break;
default:
var s="" + ac;
atomLine=atomLine.substring$I(atomLine.indexOf$S(s) + s.length$());
}
if (isAngstroms) {
if (atomLine.indexOf$S("ANGSTROM") < 0) atomLine += " ANGSTROMS";
} else {
if (atomLine.indexOf$S("BOHR") < 0) atomLine += " BOHR";
}atomLine=(ac == -2147483648 ? "" : (isXLowToHigh ? "+" : "-") + Math.abs(ac)) + atomLine + "\n" ;
bs.append$S(atomLine);
return isAngstroms;
}, 1);

Clazz.newMeth(C$, 'getSurfacePointAndFraction$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3', function (cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn) {
return this.getSPFv$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3(cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn);
});

Clazz.newMeth(C$, 'getSPFv$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3', function (cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn) {
var zero=this.getSPF$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3(cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn);
if (this.qpc == null  || Float.isNaN$F(zero)  || !this.hasColorData ) return zero;
vA=this.marchingCubes.getLinearOffset$I$I$I$I(x, y, z, vA);
vB=this.marchingCubes.getLinearOffset$I$I$I$I(x, y, z, vB);
return this.qpc.process$I$I$F(vA, vB, fReturn[0]);
});

Clazz.newMeth(C$, 'scaleIsosurface$F', function (scale) {
if (this.isScaledAlready) return;
this.isScaledAlready=true;
if (this.isAnisotropic) this.setVolumetricAnisotropy$();
if (Float.isNaN$F(scale)) return;
(function(a,f){return f.apply(null,a)})(["applying scaling factor of " + new Float(scale).toString()],$I$(1).info$S);
this.volumetricOrigin.scaleAdd2$F$javajs_util_T3$javajs_util_T3((1 - scale) / 2, this.volumetricVectors[0], this.volumetricOrigin);
this.volumetricOrigin.scaleAdd2$F$javajs_util_T3$javajs_util_T3((1 - scale) / 2, this.volumetricVectors[1], this.volumetricOrigin);
this.volumetricOrigin.scaleAdd2$F$javajs_util_T3$javajs_util_T3((1 - scale) / 2, this.volumetricVectors[2], this.volumetricOrigin);
this.volumetricVectors[0].scale$F(scale);
this.volumetricVectors[1].scale$F(scale);
this.volumetricVectors[2].scale$F(scale);
}, p$1);

Clazz.newMeth(C$, 'swapXZ$', function () {
var v=this.volumetricVectors[0];
this.volumetricVectors[0]=this.volumetricVectors[2];
this.volumetricVectors[2]=v;
var n=this.voxelCounts[0];
this.voxelCounts[0]=this.voxelCounts[2];
this.voxelCounts[2]=n;
this.params.insideOut=!this.params.insideOut;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:11 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
