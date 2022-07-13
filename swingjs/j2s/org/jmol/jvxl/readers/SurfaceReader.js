(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.P3','org.jmol.util.Logger','org.jmol.util.Escape','org.jmol.jvxl.data.MeshData','org.jmol.util.C','javajs.util.AU','org.jmol.jvxl.calc.MarchingSquares','org.jmol.jvxl.calc.MarchingCubes','org.jmol.jvxl.data.JvxlCoder','org.jmol.util.ColorEncoder','javajs.util.BS','org.jmol.util.BoxInfo']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SurfaceReader", null, null, 'org.jmol.jvxl.api.VertexDataServer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.haveSurfaceAtoms=false;
this.allowSigma=false;
this.isProgressive=false;
this.isXLowToHigh=false;
this.assocCutoff=0.3;
this.dataMin=3.4028235E38;
this.dataMax=-3.4028235E38;
this.jvxlEdgeDataRead="";
this.jvxlColorDataRead="";
this.cJvxlEdgeNaN="\u0000";
this.ptTemp=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['haveSurfaceAtoms','allowSigma','isProgressive','isXLowToHigh','isQuiet','isPeriodic','vertexDataOnly','hasColorData','isAnisotropic','isEccentric','isJvxl','jvxlDataIsColorMapped','jvxlDataIsPrecisionColor','jvxlDataIs2dContour','jvxlDataIsColorDensity','haveSetAnisotropy'],'C',['cJvxlEdgeNaN'],'F',['assocCutoff','dataMin','dataMax','dataMean','eccentricityScale','eccentricityRatio','jvxlCutoff'],'I',['edgeCount','nDataPoints','nPointsX','nPointsY','nPointsZ','edgeFractionBase','edgeFractionRange','colorFractionBase','colorFractionRange','jvxlNSurfaceInts','contourVertexCount','yzCount'],'J',['nBytes'],'S',['edgeData','jvxlEdgeDataRead','jvxlColorDataRead'],'O',['sg','org.jmol.jvxl.readers.SurfaceGenerator','meshDataServer','org.jmol.jvxl.api.MeshDataServer','params','org.jmol.jvxl.readers.Parameters','meshData','org.jmol.jvxl.data.MeshData','jvxlData','org.jmol.jvxl.data.JvxlData','volumeData','org.jmol.jvxl.data.VolumeData','xyzMin','javajs.util.P3','+xyzMax','+center','anisotropy','float[]','eccentricityMatrix','javajs.util.M3','+eccentricityMatrixInverse','volumetricOrigin','javajs.util.P3','volumetricVectors','javajs.util.V3[]','voxelCounts','int[]','voxelData','float[][][]','jvxlFileHeaderBuffer','javajs.util.SB','+fractionData','jvxlVoxelBitSet','javajs.util.BS','marchingSquares','org.jmol.jvxl.calc.MarchingSquares','marchingCubes','org.jmol.jvxl.calc.MarchingCubes','yzPlanes','float[][]','qpc','org.jmol.quantum.QuantumPlaneCalculation','ptTemp','javajs.util.P3','minMax','float[]']]
,['O',['colorPhases','String[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'initSR$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.sg=sg;
this.params=sg.params;
this.assocCutoff=this.params.assocCutoff;
this.isXLowToHigh=this.params.isXLowToHigh;
this.center=this.params.center;
this.anisotropy=this.params.anisotropy;
this.isAnisotropic=this.params.isAnisotropic;
this.eccentricityMatrix=this.params.eccentricityMatrix;
this.eccentricityMatrixInverse=this.params.eccentricityMatrixInverse;
this.isEccentric=this.params.isEccentric;
this.eccentricityScale=this.params.eccentricityScale;
this.eccentricityRatio=this.params.eccentricityRatio;
this.marchingSquares=sg.marchingSquares;
this.meshData=sg.meshData;
this.jvxlData=sg.jvxlData;
this.setVolumeDataV$org_jmol_jvxl_data_VolumeData(sg.volumeDataTemp);
this.meshDataServer=sg.meshDataServer;
this.cJvxlEdgeNaN="}";
});

Clazz.newMeth(C$, 'setOutputChannel$javajs_util_OC', function (out) {
});

Clazz.newMeth(C$, 'newVoxelDataCube$', function () {
this.volumeData.setVoxelDataAsArray$FAAA(this.voxelData=Clazz.array(Float.TYPE, [this.nPointsX, this.nPointsY, this.nPointsZ]));
});

Clazz.newMeth(C$, 'setVolumeDataV$org_jmol_jvxl_data_VolumeData', function (v) {
this.nBytes=0;
this.volumetricOrigin=v.volumetricOrigin;
this.volumetricVectors=v.volumetricVectors;
this.voxelCounts=v.voxelCounts;
this.voxelData=v.getVoxelData$();
this.volumeData=v;
});

Clazz.newMeth(C$, 'jvxlUpdateInfo$', function () {
this.jvxlData.jvxlUpdateInfo$SA$J(this.params.title, this.nBytes);
});

Clazz.newMeth(C$, 'readAndSetVolumeParameters$Z', function (isMapData) {
if (!this.readVolumeParameters$Z(isMapData)) return false;
if (this.vertexDataOnly) return true;
return (this.volumeData.setUnitVectors$());
});

Clazz.newMeth(C$, 'createIsosurface$Z', function (justForPlane) {
this.resetIsosurface$();
if (this.params.showTiming) $I$(2).startTimer$S("isosurface creation");
this.jvxlData.cutoff=NaN;
if (!this.readAndSetVolumeParameters$Z(justForPlane)) return false;
if (!justForPlane && !Float.isNaN$F(this.params.sigma) && !this.allowSigma  ) {
if (this.params.sigma > 0 ) $I$(2).error$S("Reader does not support SIGMA option -- using cutoff 1.6");
this.params.cutoff=1.6;
}if (this.params.sigma < 0 ) this.params.sigma=-this.params.sigma;
this.nPointsX=this.voxelCounts[0];
this.nPointsY=this.voxelCounts[1];
this.nPointsZ=this.voxelCounts[2];
this.jvxlData.isSlabbable=((this.params.dataType & 1024) != 0);
this.jvxlData.insideOut=this.params.isInsideOut$();
this.jvxlData.isBicolorMap=this.params.isBicolorMap;
this.jvxlData.nPointsX=this.nPointsX;
this.jvxlData.nPointsY=this.nPointsY;
this.jvxlData.nPointsZ=this.nPointsZ;
this.jvxlData.jvxlVolumeDataXml=this.volumeData.xmlData;
this.jvxlData.voxelVolume=this.volumeData.voxelVolume;
if (justForPlane) {
this.volumeData.setMappingPlane$javajs_util_P4(this.params.thePlane);
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
this.params.setMapRanges$org_jmol_jvxl_readers_SurfaceReader$Z(this, false);
p$1.generateSurfaceData.apply(this, []);
this.volumeData.setMappingPlane$javajs_util_P4(null);
} else {
if (!this.readVolumeData$Z(false)) return false;
p$1.generateSurfaceData.apply(this, []);
}if (this.jvxlFileHeaderBuffer == null ) {
this.jvxlData.jvxlFileTitle="";
} else {
var s=this.jvxlFileHeaderBuffer.toString();
var i=s.indexOf$I$I("\n", s.indexOf$I$I("\n", s.indexOf$I("\n") + 1) + 1) + 1;
this.jvxlData.jvxlFileTitle=s.substring$I$I(0, i);
}if (this.params.contactPair == null ) p$1.setBBoxAll.apply(this, []);
this.jvxlData.isValid=(this.xyzMin.x != 3.4028235E38 );
if (!this.params.isSilent) {
if (!this.jvxlData.isValid) $I$(2).error$S("no isosurface points were found!");
 else $I$(2,"info$S",["boundbox corners " + $I$(3).eP$javajs_util_T3(this.xyzMin) + " " + $I$(3).eP$javajs_util_T3(this.xyzMax) ]);
}this.jvxlData.boundingBox=Clazz.array($I$(1), -1, [this.xyzMin, this.xyzMax]);
this.jvxlData.dataMin=this.dataMin;
this.jvxlData.dataMax=this.dataMax;
this.jvxlData.cutoff=(this.isJvxl ? this.jvxlCutoff : this.params.cutoff);
this.jvxlData.isCutoffAbsolute=this.params.isCutoffAbsolute;
this.jvxlData.isModelConnected=this.params.isModelConnected;
this.jvxlData.pointsPerAngstrom=1.0 / this.volumeData.volumetricVectorLengths[0];
this.jvxlData.jvxlColorData="";
this.jvxlData.jvxlPlane=this.params.thePlane;
this.jvxlData.jvxlEdgeData=this.edgeData;
this.jvxlData.isBicolorMap=this.params.isBicolorMap;
this.jvxlData.isContoured=this.params.isContoured;
this.jvxlData.colorDensity=this.params.colorDensity;
this.jvxlData.pointSize=this.params.pointSize;
if (this.jvxlData.vContours != null ) this.params.nContours=this.jvxlData.vContours.length;
this.jvxlData.nContours=(this.params.contourFromZero ? this.params.nContours : -1 - this.params.nContours);
this.jvxlData.thisContour=this.params.thisContour;
this.jvxlData.nEdges=this.edgeCount;
this.jvxlData.edgeFractionBase=this.edgeFractionBase;
this.jvxlData.edgeFractionRange=this.edgeFractionRange;
this.jvxlData.colorFractionBase=this.colorFractionBase;
this.jvxlData.colorFractionRange=this.colorFractionRange;
this.jvxlData.jvxlDataIs2dContour=this.jvxlDataIs2dContour;
this.jvxlData.jvxlDataIsColorMapped=this.jvxlDataIsColorMapped;
this.jvxlData.jvxlDataIsColorDensity=this.jvxlDataIsColorDensity;
this.jvxlData.isXLowToHigh=this.isXLowToHigh;
this.jvxlData.vertexDataOnly=this.vertexDataOnly;
this.jvxlData.saveVertexCount=0;
if (this.jvxlDataIsColorMapped || this.jvxlData.nVertexColors > 0 ) {
if (this.meshDataServer != null ) {
this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 2, null);
}this.jvxlData.jvxlColorData=this.readColorData$();
this.updateSurfaceData$();
if (this.meshDataServer != null ) this.meshDataServer.notifySurfaceMappingCompleted$();
}if (this.params.showTiming) $I$(2).checkTimer$S$Z("isosurface creation", false);
return true;
});

Clazz.newMeth(C$, 'resetIsosurface$', function () {
this.meshData=Clazz.new_($I$(4,1));
this.xyzMin=this.xyzMax=null;
this.jvxlData.isBicolorMap=this.params.isBicolorMap;
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(null, 0, null);
this.contourVertexCount=0;
if (this.params.cutoff == 3.4028235E38 ) this.params.cutoff=0.02;
this.jvxlData.jvxlSurfaceData="";
this.jvxlData.jvxlEdgeData="";
this.jvxlData.jvxlColorData="";
this.edgeCount=0;
this.edgeFractionBase=35;
this.edgeFractionRange=90;
this.colorFractionBase=35;
this.colorFractionRange=90;
this.params.mappedDataMin=3.4028235E38;
});

Clazz.newMeth(C$, 'discardTempData$Z', function (discardAll) {
this.discardTempDataSR$Z(discardAll);
});

Clazz.newMeth(C$, 'discardTempDataSR$Z', function (discardAll) {
if (!discardAll) return;
this.voxelData=null;
this.sg.marchingSquares=this.marchingSquares=null;
this.marchingCubes=null;
});

Clazz.newMeth(C$, 'initializeVolumetricData$', function () {
this.nPointsX=this.voxelCounts[0];
this.nPointsY=this.voxelCounts[1];
this.nPointsZ=this.voxelCounts[2];
this.setVolumeDataV$org_jmol_jvxl_data_VolumeData(this.volumeData);
});

Clazz.newMeth(C$, 'gotoAndReadVoxelData$Z', function (isMapData) {
this.initializeVolumetricData$();
if (this.nPointsX > 0 && this.nPointsY > 0  && this.nPointsZ > 0 ) try {
this.gotoData$I$I(this.params.fileIndex - 1, this.nPointsX * this.nPointsY * this.nPointsZ );
this.readSurfaceData$Z(isMapData);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2,"error$S",[e.toString()]);
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'gotoData$I$I', function (n, nPoints) {
});

Clazz.newMeth(C$, 'readColorData$', function () {
if (this.jvxlData.vertexColors == null ) return "";
var vertexCount=this.jvxlData.vertexCount;
var colixes=this.meshData.vcs;
var vertexValues=this.meshData.vvs;
if (colixes == null  || colixes.length < vertexCount ) this.meshData.vcs=colixes=Clazz.array(Short.TYPE, [vertexCount]);
if (vertexValues == null  || vertexValues.length < vertexCount ) this.meshData.vvs=vertexValues=Clazz.array(Float.TYPE, [vertexCount]);
for (var i=0; i < vertexCount; i++) colixes[i]=$I$(5).getColix$I(this.jvxlData.vertexColors[i]);

return "-";
});

Clazz.newMeth(C$, 'getPlane$I', function (x) {
return this.getPlaneSR$I(x);
});

Clazz.newMeth(C$, 'getPlaneSR$I', function (x) {
if (this.yzCount == 0) this.initPlanes$();
if (this.qpc != null ) this.qpc.getPlane$I$FA(x, this.yzPlanes[x % 2]);
return this.yzPlanes[x % 2];
});

Clazz.newMeth(C$, 'initPlanes$', function () {
this.yzCount=this.nPointsY * this.nPointsZ;
if (!this.isQuiet) $I$(2,"info$S",["reading data progressively -- yzCount = " + this.yzCount]);
this.yzPlanes=$I$(6).newFloat2$I(2);
this.yzPlanes[0]=Clazz.array(Float.TYPE, [this.yzCount]);
this.yzPlanes[1]=Clazz.array(Float.TYPE, [this.yzCount]);
});

Clazz.newMeth(C$, 'getValue$I$I$I$I', function (x, y, z, ptyz) {
return this.getValue2$I$I$I$I(x, y, z, ptyz);
});

Clazz.newMeth(C$, 'getValue2$I$I$I$I', function (x, y, z, ptyz) {
return (this.yzPlanes == null  ? this.voxelData[x][y][z] : this.yzPlanes[x % 2][ptyz]);
});

Clazz.newMeth(C$, 'generateSurfaceData', function () {
this.edgeData="";
if (this.vertexDataOnly) {
try {
this.readSurfaceData$Z(false);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
$I$(2,"error$S",["Exception in SurfaceReader::readSurfaceData: " + e.toString()]);
} else {
throw e;
}
}
return;
}this.contourVertexCount=0;
var contourType=-1;
this.marchingSquares=null;
if (this.params.thePlane != null  || this.params.isContoured ) {
this.marchingSquares=Clazz.new_($I$(7,1).c$$org_jmol_jvxl_api_VertexDataServer$org_jmol_jvxl_data_VolumeData$javajs_util_P4$FA$I$I$Z,[this, this.volumeData, this.params.thePlane, this.params.contoursDiscrete, this.params.nContours, this.params.thisContour, this.params.contourFromZero]);
contourType=this.marchingSquares.contourType;
this.marchingSquares.setMinMax$F$F(this.params.valueMappedToRed, this.params.valueMappedToBlue);
}this.params.contourType=contourType;
this.params.isXLowToHigh=this.isXLowToHigh;
this.marchingCubes=Clazz.new_($I$(8,1).c$$org_jmol_jvxl_api_VertexDataServer$org_jmol_jvxl_data_VolumeData$org_jmol_jvxl_readers_Parameters$javajs_util_BS,[this, this.volumeData, this.params, this.jvxlVoxelBitSet]);
var data=this.marchingCubes.getEdgeData$();
if (this.params.thePlane == null ) this.edgeData=data;
this.jvxlData.setSurfaceInfoFromBitSetPts$javajs_util_BS$javajs_util_P4$javajs_util_P3(this.marchingCubes.bsVoxels, this.params.thePlane, this.params.mapLattice);
this.jvxlData.jvxlExcluded=this.params.bsExcluded;
if (this.isJvxl) this.edgeData=this.jvxlEdgeDataRead;
this.postProcessVertices$();
}, p$1);

Clazz.newMeth(C$, 'postProcessVertices$', function () {
});

Clazz.newMeth(C$, 'getSurfacePointIndexAndFraction$F$Z$I$I$I$javajs_util_P3i$I$I$F$F$javajs_util_T3$javajs_util_V3$Z$FA', function (cutoff, isCutoffAbsolute, x, y, z, offset, vA, vB, valueA, valueB, pointA, edgeVector, isContourType, fReturn) {
var thisValue=this.getSurfacePointAndFraction$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3(cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, this.ptTemp);
if (this.marchingSquares != null  && this.params.isContoured ) return this.marchingSquares.addContourVertex$javajs_util_P3$F(this.ptTemp, cutoff);
var assocVertex=(this.assocCutoff > 0  ? (fReturn[0] < this.assocCutoff  ? vA : fReturn[0] > 1 - this.assocCutoff  ? vB : -1) : -1);
if (assocVertex >= 0) assocVertex=this.marchingCubes.getLinearOffset$I$I$I$I(x, y, z, assocVertex);
var n=this.addVertexCopy$javajs_util_T3$F$I$Z(this.ptTemp, thisValue, assocVertex, true);
if (n >= 0 && this.params.iAddGridPoints ) {
this.marchingCubes.calcVertexPoint$I$I$I$I$javajs_util_P3(x, y, z, vB, this.ptTemp);
this.addVertexCopy$javajs_util_T3$F$I$Z(valueA < valueB  ? pointA : this.ptTemp, Math.min(valueA, valueB), -3, true);
this.addVertexCopy$javajs_util_T3$F$I$Z(valueA < valueB  ? this.ptTemp : pointA, Math.max(valueA, valueB), -3, true);
}return n;
});

Clazz.newMeth(C$, 'getSurfacePointAndFraction$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3', function (cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn) {
return this.getSPF$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3(cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn);
});

Clazz.newMeth(C$, 'getSPF$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3', function (cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn) {
var diff=valueB - valueA;
var fraction=(cutoff - valueA) / diff;
if (isCutoffAbsolute && (fraction < 0  || fraction > 1  ) ) fraction=(-cutoff - valueA) / diff;
if (fraction < 0  || fraction > 1  ) {
fraction=NaN;
}fReturn[0]=fraction;
ptReturn.scaleAdd2$F$javajs_util_T3$javajs_util_T3(fraction, edgeVector, pointA);
return valueA + fraction * diff;
});

Clazz.newMeth(C$, 'addVertexCopy$javajs_util_T3$F$I$Z', function (vertexXYZ, value, assocVertex, asCopy) {
return this.addVC$javajs_util_T3$F$I$Z(vertexXYZ, value, assocVertex, asCopy);
});

Clazz.newMeth(C$, 'addVC$javajs_util_T3$F$I$Z', function (vertexXYZ, value, assocVertex, asCopy) {
return (Float.isNaN$F(value) && assocVertex != -3  ? -1 : this.meshDataServer == null  ? this.meshData.addVertexCopy$javajs_util_T3$F$I$Z(vertexXYZ, value, assocVertex, asCopy) : this.meshDataServer.addVertexCopy$javajs_util_T3$F$I$Z(vertexXYZ, value, assocVertex, asCopy));
});

Clazz.newMeth(C$, 'addTriangleCheck$I$I$I$I$I$Z$I', function (iA, iB, iC, check, iContour, isAbsolute, color) {
if (this.marchingSquares != null  && this.params.isContoured ) {
if (color == 0) return this.marchingSquares.addTriangle$I$I$I$I$I(iA, iB, iC, check, iContour);
color=0;
}return (this.meshDataServer != null  ? this.meshDataServer.addTriangleCheck$I$I$I$I$I$Z$I(iA, iB, iC, check, iContour, isAbsolute, color) : isAbsolute && !$I$(4).checkCutoff$I$I$I$FA(iA, iB, iC, this.meshData.vvs)  ? -1 : this.meshData.addTriangleCheck$I$I$I$I$I$I(iA, iB, iC, check, iContour, color));
});

Clazz.newMeth(C$, 'colorIsosurface$', function () {
if (this.params.isSquared && this.volumeData != null  ) this.volumeData.filterData$Z$F(true, NaN);
if (this.meshDataServer != null ) {
this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
}this.jvxlData.saveVertexCount=0;
if (this.params.isContoured && this.marchingSquares != null  ) {
this.initializeMapping$();
this.params.setMapRanges$org_jmol_jvxl_readers_SurfaceReader$Z(this, false);
this.marchingSquares.setMinMax$F$F(this.params.valueMappedToRed, this.params.valueMappedToBlue);
this.jvxlData.saveVertexCount=this.marchingSquares.contourVertexCount;
this.contourVertexCount=this.marchingSquares.generateContourData$Z$F(this.jvxlDataIs2dContour, (this.params.isSquared ? 1.0E-8 : 1.0E-4));
this.jvxlData.contourValuesUsed=this.marchingSquares.contourValuesUsed;
this.minMax=this.marchingSquares.getMinMax$();
if (this.meshDataServer != null ) this.meshDataServer.notifySurfaceGenerationCompleted$();
this.finalizeMapping$();
}this.applyColorScale$();
this.jvxlData.nContours=(this.params.contourFromZero ? this.params.nContours : -1 - this.params.nContours);
this.jvxlData.thisContour=this.params.thisContour;
this.jvxlData.jvxlFileMessage="mapped: min = " + new Float(this.params.valueMappedToRed).toString() + "; max = " + new Float(this.params.valueMappedToBlue).toString() ;
});

Clazz.newMeth(C$, 'applyColorScale$', function () {
this.colorFractionBase=this.jvxlData.colorFractionBase=35;
this.colorFractionRange=this.jvxlData.colorFractionRange=90;
if (this.params.colorPhase == 0) this.params.colorPhase=1;
if (this.meshDataServer == null ) {
this.meshData.vcs=Clazz.array(Short.TYPE, [this.meshData.vc]);
} else {
this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
if (this.params.contactPair == null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 2, null);
}var saveColorData=(this.params.colorDensity || this.params.isBicolorMap || this.params.colorBySign || !this.params.colorByPhase  );
if (this.params.contactPair != null ) saveColorData=false;
this.jvxlData.isJvxlPrecisionColor=true;
this.jvxlData.vertexCount=(this.contourVertexCount > 0 ? this.contourVertexCount : this.meshData.vc);
this.jvxlData.minColorIndex=($s$[0] = -1, $s$[0]);
this.jvxlData.maxColorIndex=($s$[0] = 0, $s$[0]);
this.jvxlData.contourValues=this.params.contoursDiscrete;
this.jvxlData.isColorReversed=this.params.isColorReversed;
if (!this.params.colorDensity) if (this.params.isBicolorMap && !this.params.isContoured  || this.params.colorBySign ) {
this.jvxlData.minColorIndex=$I$(5,"getColixTranslucent3$H$Z$F",[$I$(5).getColix$I(this.params.isColorReversed ? this.params.colorPos : this.params.colorNeg), this.jvxlData.translucency != 0 , this.jvxlData.translucency]);
this.jvxlData.maxColorIndex=$I$(5,"getColixTranslucent3$H$Z$F",[$I$(5).getColix$I(this.params.isColorReversed ? this.params.colorNeg : this.params.colorPos), this.jvxlData.translucency != 0 , this.jvxlData.translucency]);
}this.jvxlData.isTruncated=(this.jvxlData.minColorIndex >= 0 && !this.params.isContoured );
var useMeshDataValues=this.jvxlDataIs2dContour || this.hasColorData || this.vertexDataOnly || this.params.colorDensity || this.params.isBicolorMap && !this.params.isContoured   ;
if (!useMeshDataValues) {
if (this.haveSurfaceAtoms && this.meshData.vertexSource == null  ) this.meshData.vertexSource=Clazz.array(Integer.TYPE, [this.meshData.vc]);
var min=3.4028235E38;
var max=-3.4028235E38;
var value;
this.initializeMapping$();
for (var i=this.meshData.vc; --i >= this.meshData.mergeVertexCount0; ) {
if (this.params.colorBySets) {
value=this.meshData.vertexSets[i];
} else if (this.params.colorByPhase) {
value=p$1.getPhase$javajs_util_T3.apply(this, [this.meshData.vs[i]]);
} else {
var needSource=this.haveSurfaceAtoms;
value=this.volumeData.lookupInterpolatedVoxelValue$javajs_util_T3$Z(this.meshData.vs[i], needSource);
if (needSource) this.meshData.vertexSource[i]=this.getSurfaceAtomIndex$();
}if (value < min ) min=value;
if (value > max  && value != 3.4028235E38  ) max=value;
this.meshData.vvs[i]=value;
}
if (this.params.rangeSelected && this.minMax == null  ) this.minMax=Clazz.array(Float.TYPE, -1, [min, max]);
this.finalizeMapping$();
}this.params.setMapRanges$org_jmol_jvxl_readers_SurfaceReader$Z(this, true);
this.jvxlData.mappedDataMin=this.params.mappedDataMin;
this.jvxlData.mappedDataMax=this.params.mappedDataMax;
this.jvxlData.valueMappedToRed=this.params.valueMappedToRed;
this.jvxlData.valueMappedToBlue=this.params.valueMappedToBlue;
if (this.params.contactPair == null  && this.jvxlData.vertexColors == null  ) p$1.colorData.apply(this, []);
$I$(9,"jvxlCreateColorData$org_jmol_jvxl_data_JvxlData$FA",[this.jvxlData, (saveColorData ? this.meshData.vvs : null)]);
if (this.haveSurfaceAtoms && this.meshDataServer != null  ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 4, null);
if (this.meshDataServer != null  && this.params.colorBySets ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 3, null);
});

Clazz.newMeth(C$, 'colorData', function () {
var vertexValues=this.meshData.vvs;
var vertexColixes=this.meshData.vcs;
this.meshData.pcs=null;
var valueBlue=this.jvxlData.valueMappedToBlue;
var valueRed=this.jvxlData.valueMappedToRed;
var minColorIndex=this.jvxlData.minColorIndex;
var maxColorIndex=this.jvxlData.maxColorIndex;
if (this.params.colorEncoder == null ) this.params.colorEncoder=Clazz.new_($I$(10,1).c$$org_jmol_util_ColorEncoder$org_jmol_viewer_Viewer,[null, null]);
this.params.colorEncoder.setRange$F$F$Z(this.params.valueMappedToRed, this.params.valueMappedToBlue, this.params.isColorReversed);
for (var i=this.meshData.vc; --i >= 0; ) {
var value=vertexValues[i];
if (minColorIndex >= 0) {
if (value <= 0 ) vertexColixes[i]=minColorIndex;
 else if (value > 0 ) vertexColixes[i]=maxColorIndex;
} else {
if (value <= valueRed ) value=valueRed;
if (value >= valueBlue ) value=valueBlue;
vertexColixes[i]=this.params.colorEncoder.getColorIndex$F(value);
}}
if ((this.params.nContours > 0 || this.jvxlData.contourValues != null  ) && this.jvxlData.contourColixes == null  ) {
var n=(this.jvxlData.contourValues == null  ? this.params.nContours : this.jvxlData.contourValues.length);
var colors=this.jvxlData.contourColixes=Clazz.array(Short.TYPE, [n]);
var values=this.jvxlData.contourValues;
if (values == null ) values=this.jvxlData.contourValuesUsed;
if (this.jvxlData.contourValuesUsed == null ) this.jvxlData.contourValuesUsed=(values == null  ? Clazz.array(Float.TYPE, [n]) : values);
var dv=(valueBlue - valueRed) / (n + 1);
this.params.colorEncoder.setRange$F$F$Z(this.params.valueMappedToRed, this.params.valueMappedToBlue, this.params.isColorReversed);
for (var i=0; i < n; i++) {
var v=(values == null  ? valueRed + (i + 1) * dv : values[i]);
this.jvxlData.contourValuesUsed[i]=v;
colors[i]=$I$(5,"getColixTranslucent$I",[this.params.colorEncoder.getArgb$F(v)]);
}
this.jvxlData.contourColors=$I$(5).getHexCodes$HA(colors);
}}, p$1);

Clazz.newMeth(C$, 'getColorPhaseIndex$S', function (color) {
var colorPhase=-1;
for (var i=0; i < C$.colorPhases.length; i++) if (color.equalsIgnoreCase$S(C$.colorPhases[i])) {
colorPhase=i;
break;
}
return colorPhase;
}, 1);

Clazz.newMeth(C$, 'getPhase$javajs_util_T3', function (pt) {
switch (this.params.colorPhase) {
case 0:
case -1:
case 1:
return (pt.x > 0  ? 1 : -1);
case 2:
return (pt.y > 0  ? 1 : -1);
case 3:
return (pt.z > 0  ? 1 : -1);
case 4:
return (pt.x * pt.y > 0  ? 1 : -1);
case 5:
return (pt.y * pt.z > 0  ? 1 : -1);
case 6:
return (pt.x * pt.z > 0  ? 1 : -1);
case 7:
return (pt.x * pt.x - pt.y * pt.y > 0  ? 1 : -1);
case 8:
return (pt.z * pt.z * 2.0  - pt.x * pt.x - pt.y * pt.y > 0  ? 1 : -1);
}
return 1;
}, p$1);

Clazz.newMeth(C$, 'getMinMaxMappedValues$Z', function (haveData) {
if (this.minMax != null  && this.minMax[0] != 3.4028235E38  ) return this.minMax;
if (this.params.colorBySets) return (this.minMax=Clazz.array(Float.TYPE, -1, [0, Math.max(this.meshData.nSets - 1, 0)]));
var min=3.4028235E38;
var max=-3.4028235E38;
if (this.params.usePropertyForColorRange && this.params.theProperty != null  ) {
for (var i=this.params.theProperty.length; --i >= 0; ) {
if (this.params.rangeSelected && !this.params.bsSelected.get$I(i) ) continue;
var p=this.params.theProperty[i];
if (Float.isNaN$F(p)) continue;
if (p < min ) min=p;
if (p > max ) max=p;
}
return (this.minMax=Clazz.array(Float.TYPE, -1, [min, max]));
}var vertexCount=(this.contourVertexCount > 0 ? this.contourVertexCount : this.meshData.vc);
var vertexes=this.meshData.vs;
var useVertexValue=(haveData || this.jvxlDataIs2dContour || this.vertexDataOnly || this.params.colorDensity  );
for (var i=this.meshData.mergeVertexCount0; i < vertexCount; i++) {
var v;
if (useVertexValue) v=this.meshData.vvs[i];
 else v=this.volumeData.lookupInterpolatedVoxelValue$javajs_util_T3$Z(vertexes[i], false);
if (v < min ) min=v;
if (v > max  && v != 3.4028235E38  ) max=v;
}
return (this.minMax=Clazz.array(Float.TYPE, -1, [min, max]));
});

Clazz.newMeth(C$, 'updateTriangles$', function () {
if (this.meshDataServer == null ) {
this.meshData.invalidatePolygons$();
} else {
this.meshDataServer.invalidateTriangles$();
}});

Clazz.newMeth(C$, 'updateSurfaceData$', function () {
this.meshData.setVertexSets$Z(true);
this.updateTriangles$();
if (this.params.bsExcluded[1] == null ) this.params.bsExcluded[1]=Clazz.new_($I$(11,1));
this.meshData.updateInvalidatedVertices$javajs_util_BS(this.params.bsExcluded[1]);
});

Clazz.newMeth(C$, 'selectPocket$Z', function (doExclude) {
});

Clazz.newMeth(C$, 'excludeMinimumSet$', function () {
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
this.meshData.getSurfaceSet$();
var bs;
for (var i=this.meshData.nSets; --i >= 0; ) if ((bs=this.meshData.surfaceSet[i]) != null  && bs.cardinality$() < this.params.minSet ) this.meshData.invalidateSurfaceSet$I(i);

this.updateSurfaceData$();
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 3, null);
});

Clazz.newMeth(C$, 'excludeMaximumSet$', function () {
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
this.meshData.getSurfaceSet$();
var bs;
for (var i=this.meshData.nSets; --i >= 0; ) if ((bs=this.meshData.surfaceSet[i]) != null  && bs.cardinality$() > this.params.maxSet ) this.meshData.invalidateSurfaceSet$I(i);

this.updateSurfaceData$();
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 3, null);
});

Clazz.newMeth(C$, 'slabIsosurface$javajs_util_Lst', function (slabInfo) {
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
this.meshData.slabPolygonsList$javajs_util_Lst$Z(slabInfo, true);
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 4, null);
});

Clazz.newMeth(C$, 'setVertexAnisotropy$javajs_util_T3', function (pt) {
pt.x *= this.anisotropy[0];
pt.y *= this.anisotropy[1];
pt.z *= this.anisotropy[2];
pt.add$javajs_util_T3(this.center);
});

Clazz.newMeth(C$, 'setVectorAnisotropy$javajs_util_T3', function (v) {
this.haveSetAnisotropy=true;
v.x *= this.anisotropy[0];
v.y *= this.anisotropy[1];
v.z *= this.anisotropy[2];
});

Clazz.newMeth(C$, 'setVolumetricAnisotropy$', function () {
if (this.haveSetAnisotropy) return;
this.setVolumetricOriginAnisotropy$();
this.setVectorAnisotropy$javajs_util_T3(this.volumetricVectors[0]);
this.setVectorAnisotropy$javajs_util_T3(this.volumetricVectors[1]);
this.setVectorAnisotropy$javajs_util_T3(this.volumetricVectors[2]);
});

Clazz.newMeth(C$, 'setVolumetricOriginAnisotropy$', function () {
this.volumetricOrigin.setT$javajs_util_T3(this.center);
});

Clazz.newMeth(C$, 'setBBoxAll', function () {
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
this.xyzMin=Clazz.new_($I$(1,1));
this.xyzMax=Clazz.new_($I$(1,1));
this.meshData.setBox$javajs_util_P3$javajs_util_P3(this.xyzMin, this.xyzMax);
}, p$1);

Clazz.newMeth(C$, 'setBBox$javajs_util_T3$F', function (pt, margin) {
if (this.xyzMin == null ) {
this.xyzMin=$I$(1).new3$F$F$F(3.4028235E38, 3.4028235E38, 3.4028235E38);
this.xyzMax=$I$(1).new3$F$F$F(-3.4028235E38, -3.4028235E38, -3.4028235E38);
}$I$(12).addPoint$javajs_util_T3$javajs_util_T3$javajs_util_T3$F(pt, this.xyzMin, this.xyzMax, margin);
});

Clazz.newMeth(C$, 'getValueAtPoint$javajs_util_T3$Z', function (pt, getSource) {
return 0;
});

Clazz.newMeth(C$, 'initializeMapping$', function () {
});

Clazz.newMeth(C$, 'finalizeMapping$', function () {
});

Clazz.newMeth(C$, 'getSurfaceAtomIndex$', function () {
return -1;
});

C$.$static$=function(){C$.$static$=0;
C$.colorPhases=Clazz.array(String, -1, ["_orb", "x", "y", "z", "xy", "yz", "xz", "x2-y2", "z2"]);
};
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:36 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
