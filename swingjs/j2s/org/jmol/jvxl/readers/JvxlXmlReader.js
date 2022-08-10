(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'org.jmol.jvxl.readers.XmlReader','javajs.util.BS','org.jmol.jvxl.data.JvxlCoder','java.util.Hashtable','org.jmol.util.Logger','javajs.util.SB','org.jmol.util.Escape','org.jmol.util.C','javajs.util.CU','javajs.util.P4','javajs.util.PT','org.jmol.util.ColorEncoder','javajs.util.P3','javajs.util.Lst','org.jmol.shapesurface.IsosurfaceMesh','javajs.util.AU','org.jmol.jvxl.data.MeshData']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JvxlXmlReader", null, 'org.jmol.jvxl.readers.VolumeFileReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.JVXL_VERSION="2.3";
this.isXmlFile=true;
this.includeValueNaN=true;
this.valueMin=NaN;
this.valueRange=NaN;
this.strFractionTemp="";
},1);

C$.$fields$=[['Z',['haveContourData','isXmlFile','thisInside','includeValueNaN','haveReadColorData'],'F',['valueMin','valueRange'],'I',['surfaceDataCount','edgeDataCount','colorDataCount','excludedTriangleCount','excludedVertexCount','invalidatedVertexCount','valueCount','fractionPtr','colorPtr'],'S',['JVXL_VERSION','tempDataXml','strFractionTemp','jvxlColorEncodingRead'],'O',['xr','org.jmol.jvxl.readers.XmlReader','bsVoxelBitSet','javajs.util.BS']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2JXR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
});

Clazz.newMeth(C$, 'init2JXR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2VFR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.jvxlData.wasJvxl=this.isJvxl=true;
this.isXLowToHigh=this.canDownsample=false;
this.xr=Clazz.new_($I$(1,1).c$$java_io_BufferedReader,[br]);
});

Clazz.newMeth(C$, 'readVolumeData$Z', function (isMapData) {
if (!this.readVolumeDataVFR$Z(isMapData)) return false;
this.strFractionTemp=this.jvxlEdgeDataRead;
this.fractionPtr=0;
return true;
});

Clazz.newMeth(C$, 'gotoAndReadVoxelData$Z', function (isMapData) {
this.initializeVolumetricData$();
if (this.nPointsX < 0 || this.nPointsY < 0  || this.nPointsZ < 0 ) return true;
try {
this.gotoData$I$I(this.params.fileIndex - 1, this.nPointsX * this.nPointsY * this.nPointsZ );
if (this.vertexDataOnly) return true;
this.volumeData.setMappingPlane$javajs_util_P4(this.params.thePlane);
this.readSurfaceData$Z(isMapData);
this.volumeData.setMappingPlane$javajs_util_P4(null);
if (this.edgeDataCount > 0) this.jvxlEdgeDataRead=this.jvxlReadFractionData$S$I("edge", this.edgeDataCount);
this.params.bsExcluded=this.jvxlData.jvxlExcluded=Clazz.array($I$(2), [4]);
this.hasColorData=(this.colorDataCount > 0);
if (this.hasColorData) this.jvxlColorDataRead=this.jvxlReadFractionData$S$I("color", this.colorDataCount);
if (this.excludedVertexCount > 0) {
this.jvxlData.jvxlExcluded[0]=$I$(3,"jvxlDecodeBitSet$S",[this.xr.getXmlData$S$S$Z$Z("jvxlExcludedVertexData", null, false, false)]);
if (this.xr.isNext$S("jvxlExcludedPlaneData")) this.jvxlData.jvxlExcluded[2]=$I$(3,"jvxlDecodeBitSet$S",[this.xr.getXmlData$S$S$Z$Z("jvxlExcludedPlaneData", null, false, false)]);
}if (this.excludedTriangleCount > 0) this.jvxlData.jvxlExcluded[3]=$I$(3,"jvxlDecodeBitSet$S",[this.xr.getXmlData$S$S$Z$Z("jvxlExcludedTriangleData", null, false, false)]);
if (this.invalidatedVertexCount > 0) this.jvxlData.jvxlExcluded[1]=$I$(3,"jvxlDecodeBitSet$S",[this.xr.getXmlData$S$S$Z$Z("jvxlInvalidatedVertexData", null, false, false)]);
if (this.haveContourData) this.jvxlDecodeContourData$org_jmol_jvxl_data_JvxlData$S(this.jvxlData, this.xr.getXmlData$S$S$Z$Z("jvxlContourData", null, false, false));
if (this.jvxlDataIsColorMapped && this.jvxlData.nVertexColors > 0 ) {
this.jvxlData.vertexColorMap=Clazz.new_($I$(4,1));
var vdata=this.xr.getXmlData$S$S$Z$Z("jvxlVertexColorData", null, true, false);
var baseColor=$I$(1).getXmlAttrib$S$S(vdata, "baseColor");
this.jvxlData.baseColor=(baseColor.length$() > 0 ? baseColor : null);
for (var i=0; i < this.jvxlData.nVertexColors; i++) {
var s=this.xr.getXmlData$S$S$Z$Z("jvxlColorMap", vdata, true, false);
var color=$I$(1).getXmlAttrib$S$S(s, "color");
var bs=$I$(3,"jvxlDecodeBitSet$S",[this.xr.getXmlData$S$S$Z$Z("jvxlColorMap", s, false, false)]);
this.jvxlData.vertexColorMap.put$O$O(color, bs);
}
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5,"error$S",[e.toString()]);
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'readParameters$', function () {
var s=this.xr.getXmlData$S$S$Z$Z("jvxlFileTitle", null, false, false);
this.jvxlFileHeaderBuffer=$I$(6,"newS$S",[s == null  ? "" : s]);
this.xr.toTag$S("jvxlVolumeData");
var data=this.tempDataXml=this.xr.getXmlData$S$S$Z$Z("jvxlVolumeData", null, true, false);
this.volumetricOrigin.setT$javajs_util_T3(this.xr.getXmlPoint$S$S(data, "origin"));
this.isAngstroms=true;
this.readVector$I(0);
this.readVector$I(1);
this.readVector$I(2);
this.line=this.xr.toTag$S("jvxlSurfaceSet");
this.nSurfaces=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(this.line, "count"));
$I$(5).info$S("jvxl file surfaces: " + this.nSurfaces);
$I$(5).info$S("using default edge fraction base and range");
$I$(5).info$S("using default color fraction base and range");
this.cJvxlEdgeNaN=String.fromCharCode((this.edgeFractionBase + this.edgeFractionRange));
});

Clazz.newMeth(C$, 'readVector$I', function (voxelVectorIndex) {
var data=this.xr.getXmlData$S$S$Z$Z("jvxlVolumeVector", this.tempDataXml, true, true);
this.tempDataXml=this.tempDataXml.substring$I(this.tempDataXml.indexOf$S(data) + data.length$());
var n=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "count"));
if (n == -2147483648) this.vertexDataOnly=true;
this.voxelCounts[voxelVectorIndex]=(n < 0 ? 0 : n);
this.volumetricVectors[voxelVectorIndex].setT$javajs_util_T3(this.xr.getXmlPoint$S$S(data, "vector"));
if (this.isAnisotropic) this.setVectorAnisotropy$javajs_util_T3(this.volumetricVectors[voxelVectorIndex]);
});

Clazz.newMeth(C$, 'gotoData$I$I', function (n, nPoints) {
if (n > 0) $I$(5).info$S("skipping " + n + " data sets, " + nPoints + " points each" );
this.vertexDataOnly=this.jvxlData.vertexDataOnly=(nPoints == 0);
for (var i=0; i < n; i++) {
this.jvxlSkipData$I$Z(nPoints, true);
}
this.xr.toTag$S("jvxlSurface");
this.jvxlReadSurfaceInfo$();
});

Clazz.newMeth(C$, 'jvxlSkipData$I$Z', function (nPoints, doSkipColorData) {
this.rd$();
this.xr.skipTag$S("jvxlSurface");
});

Clazz.newMeth(C$, 'jvxlReadSurfaceInfo$', function () {
var s;
var data=this.xr.getXmlData$S$S$Z$Z("jvxlSurfaceInfo", null, true, true);
this.isXLowToHigh=$I$(1).getXmlAttrib$S$S(data, "isXLowToHigh").equals$O("true");
this.jvxlCutoff=this.parseFloatStr$S($I$(1).getXmlAttrib$S$S(data, "cutoff"));
if (!Float.isNaN$F(this.jvxlCutoff)) $I$(5,"info$S",["JVXL read: cutoff " + new Float(this.jvxlCutoff).toString()]);
var nContourData=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "nContourData"));
this.haveContourData=(nContourData > 0);
this.params.isContoured=this.jvxlData.isModelConnected=$I$(1).getXmlAttrib$S$S(data, "contoured").equals$O("true");
this.params.isModelConnected=$I$(1).getXmlAttrib$S$S(data, "isModelConnected").equals$O("true");
if (this.params.isContoured) {
var nContoursRead=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "nContours"));
if (nContoursRead <= 0) {
nContoursRead=0;
} else {
if (this.params.thisContour < 0) this.params.thisContour=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "thisContour"));
s=$I$(1).getXmlAttrib$S$S(data, "contourValues");
if (s.length$() > 0) {
s=s.replace$C$C("[", " ").replace$C$C("]", " ");
this.jvxlData.contourValues=this.params.contoursDiscrete=this.parseFloatArrayStr$S(s);
$I$(5,"info$S",["JVXL read: contourValues " + $I$(7).eAF$FA(this.jvxlData.contourValues)]);
}s=$I$(1).getXmlAttrib$S$S(data, "contourColors");
if (s.length$() > 0) {
this.jvxlData.contourColixes=this.params.contourColixes=$I$(8).getColixArray$S(s);
this.jvxlData.contourColors=$I$(8).getHexCodes$HA(this.jvxlData.contourColixes);
$I$(5,"info$S",["JVXL read: contourColixes " + $I$(8).getHexCodes$HA(this.jvxlData.contourColixes)]);
}this.params.contourFromZero=$I$(1).getXmlAttrib$S$S(data, "contourFromZero").equals$O("true");
}this.params.nContours=(this.haveContourData ? nContourData : nContoursRead);
}this.jvxlData.nVertexColors=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "nVertexColors"));
this.params.isBicolorMap=$I$(1).getXmlAttrib$S$S(data, "bicolorMap").equals$O("true");
if (this.params.isBicolorMap) {
s=$I$(1).getXmlAttrib$S$S(data, "colorPositive");
if (s.length$() > 0 && this.params.colorRgb == -2147483648  && this.params.colorPos == -16776961 ) this.params.colorPos=$I$(9).getArgbFromString$S(s);
s=$I$(1).getXmlAttrib$S$S(data, "colorNegative");
if (s.length$() > 0 && this.params.colorRgb == -2147483648  && this.params.colorNeg == -65536 ) this.params.colorNeg=$I$(9).getArgbFromString$S(s);
}if (this.params.isBicolorMap || this.params.colorBySign ) this.jvxlCutoff=0;
this.jvxlDataIsColorMapped=((this.params.colorRgb == -2147483648 || this.params.colorRgb == 2147483647 ) && (this.params.isBicolorMap || $I$(1).getXmlAttrib$S$S(data, "colorMapped").equals$O("true") ) );
this.jvxlData.isJvxlPrecisionColor=$I$(1).getXmlAttrib$S$S(data, "precisionColor").equals$O("true");
this.jvxlData.jvxlDataIsColorDensity=this.params.colorDensity=(this.params.colorRgb == -2147483648 && $I$(1).getXmlAttrib$S$S(data, "colorDensity").equals$O("true") );
if (this.jvxlData.jvxlDataIsColorDensity && Float.isNaN$F(this.params.pointSize) ) {
s=$I$(1).getXmlAttrib$S$S(data, "pointSize");
if (s.length$() > 0) this.jvxlData.pointSize=this.params.pointSize=this.parseFloatStr$S(s);
}s=$I$(1).getXmlAttrib$S$S(data, "allowVolumeRender");
this.jvxlData.allowVolumeRender=this.params.allowVolumeRender=(s.length$() == 0 || s.equalsIgnoreCase$S("true") );
s=$I$(1).getXmlAttrib$S$S(data, "plane");
if (s.indexOf$S("{") >= 0) {
this.params.thePlane=null;
this.params.mapLattice=null;
try {
this.params.thePlane=$I$(7).uP$S(s);
s=$I$(1).getXmlAttrib$S$S(data, "maplattice");
$I$(5).info$S("JVXL read: plane " + this.params.thePlane);
if (s.indexOf$S("{") >= 0) {
this.params.mapLattice=$I$(7).uP$S(s);
$I$(5).info$S("JVXL read: mapLattice " + this.params.mapLattice);
}if (this.params.scale3d == 0 ) this.params.scale3d=this.parseFloatStr$S($I$(1).getXmlAttrib$S$S(data, "scale3d"));
if (Float.isNaN$F(this.params.scale3d)) this.params.scale3d=0;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (this.params.thePlane == null ) {
$I$(5,"error$S",["JVXL Error reading plane definition -- setting to 0 0 1 0  (z=0)"]);
this.params.thePlane=$I$(10).new4$F$F$F$F(0, 0, 1, 0);
} else {
$I$(5).error$S("JVXL Error reading mapLattice definition -- ignored");
}} else {
throw e;
}
}
this.surfaceDataCount=0;
this.edgeDataCount=0;
} else {
this.params.thePlane=null;
this.surfaceDataCount=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "nSurfaceInts"));
this.edgeDataCount=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "nBytesUncompressedEdgeData"));
s=$I$(1).getXmlAttrib$S$S(data, "fixedLattice");
if (s.indexOf$S("{") >= 0) this.jvxlData.fixedLattice=$I$(7).uP$S(s);
}this.excludedVertexCount=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "nExcludedVertexes"));
this.excludedTriangleCount=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "nExcludedTriangles"));
this.invalidatedVertexCount=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "nInvalidatedVertexes"));
s=$I$(1).getXmlAttrib$S$S(data, "slabInfo");
if (s.length$() > 0) this.jvxlData.slabInfo=s;
this.colorDataCount=Math.max(0, this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "nBytesUncompressedColorData")));
this.jvxlDataIs2dContour=(this.params.thePlane != null  && this.jvxlDataIsColorMapped );
this.jvxlData.color=$I$(1).getXmlAttrib$S$S(data, "color");
if (this.jvxlData.color.length$() == 0 || this.jvxlData.color.indexOf$S("null") >= 0 ) this.jvxlData.color="orange";
this.jvxlData.translucency=this.parseFloatStr$S($I$(1).getXmlAttrib$S$S(data, "translucency"));
if (Float.isNaN$F(this.jvxlData.translucency)) this.jvxlData.translucency=0;
s=$I$(1).getXmlAttrib$S$S(data, "meshColor");
if (s.length$() > 0) this.jvxlData.meshColor=s;
s=$I$(1).getXmlAttrib$S$S(data, "rendering");
if (s.length$() > 0) this.jvxlData.rendering=s;
this.jvxlData.colorScheme=$I$(1).getXmlAttrib$S$S(data, "colorScheme");
if (this.jvxlData.colorScheme.length$() == 0) this.jvxlData.colorScheme=(this.jvxlDataIsColorMapped ? "roygb" : null);
if (this.jvxlData.thisSet < 0) {
var n=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "set"));
if (n > 0) this.jvxlData.thisSet=n - 1;
}this.jvxlData.slabValue=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "slabValue"));
this.jvxlData.isSlabbable=($I$(1).getXmlAttrib$S$S(data, "slabbable").equalsIgnoreCase$S("true"));
this.jvxlData.diameter=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "diameter"));
if (this.jvxlData.diameter == -2147483648) this.jvxlData.diameter=0;
if (this.jvxlDataIs2dContour) this.params.isContoured=true;
if (this.params.colorBySign) this.params.isBicolorMap=true;
var insideOut=$I$(1).getXmlAttrib$S$S(data, "insideOut").equals$O("true");
var dataMin=NaN;
var dataMax=NaN;
var red=NaN;
var blue=NaN;
if (this.jvxlDataIsColorMapped) {
dataMin=this.parseFloatStr$S($I$(1).getXmlAttrib$S$S(data, "dataMinimum"));
dataMax=this.parseFloatStr$S($I$(1).getXmlAttrib$S$S(data, "dataMaximum"));
red=this.parseFloatStr$S($I$(1).getXmlAttrib$S$S(data, "valueMappedToRed"));
blue=this.parseFloatStr$S($I$(1).getXmlAttrib$S$S(data, "valueMappedToBlue"));
if (Float.isNaN$F(dataMin)) {
dataMin=red=-1.0;
dataMax=blue=1.0;
}}this.jvxlSetColorRanges$F$F$F$F$Z(dataMin, dataMax, red, blue, insideOut);
});

Clazz.newMeth(C$, 'jvxlSetColorRanges$F$F$F$F$Z', function (dataMin, dataMax, red, blue, insideOut) {
if (this.jvxlDataIsColorMapped) {
if (!Float.isNaN$F(dataMin) && !Float.isNaN$F(dataMax) ) {
if (dataMax == 0  && dataMin == 0  ) {
dataMin=-1;
dataMax=1;
}this.params.mappedDataMin=dataMin;
this.params.mappedDataMax=dataMax;
$I$(5,"info$S",["JVXL read: data_min/max " + new Float(this.params.mappedDataMin).toString() + "/" + new Float(this.params.mappedDataMax).toString() ]);
}if (!this.params.rangeDefined) if (!Float.isNaN$F(red) && !Float.isNaN$F(blue) ) {
if (red == 0  && blue == 0  ) {
red=-1;
blue=1;
}this.params.valueMappedToRed=Math.min(red, blue);
this.params.valueMappedToBlue=Math.max(red, blue);
this.params.isColorReversed=(red > blue );
this.params.rangeDefined=true;
} else {
this.params.valueMappedToRed=0.0;
this.params.valueMappedToBlue=1.0;
this.params.rangeDefined=true;
}$I$(5,"info$S",["JVXL read: color red/blue: " + new Float(this.params.valueMappedToRed).toString() + "/" + new Float(this.params.valueMappedToBlue).toString() ]);
}this.jvxlData.valueMappedToRed=this.params.valueMappedToRed;
this.jvxlData.valueMappedToBlue=this.params.valueMappedToBlue;
this.jvxlData.mappedDataMin=this.params.mappedDataMin;
this.jvxlData.mappedDataMax=this.params.mappedDataMax;
this.jvxlData.isColorReversed=this.params.isColorReversed;
if (this.params.insideOut) insideOut=!insideOut;
this.params.insideOut=this.jvxlData.insideOut=insideOut;
});

Clazz.newMeth(C$, 'readSurfaceData$Z', function (isMapDataIgnored) {
this.thisInside=!this.params.isContoured;
if (this.readSurfaceDataXML$()) return;
this.tempDataXml=this.xr.getXmlData$S$S$Z$Z("jvxlEdgeData", null, true, false);
this.bsVoxelBitSet=$I$(3,"jvxlDecodeBitSet$S",[this.xr.getXmlData$S$S$Z$Z("jvxlEdgeData", this.tempDataXml, false, false)]);
this.readSurfaceDataJXR$();
});

Clazz.newMeth(C$, 'readSurfaceDataXML$', function () {
if (this.vertexDataOnly) {
this.getEncodedVertexData$();
return true;
}if (this.params.thePlane != null ) {
this.volumeData.setDataDistanceToPlane$javajs_util_P4(this.params.thePlane);
this.setVolumeDataV$org_jmol_jvxl_data_VolumeData(this.volumeData);
this.params.cutoff=0.0;
this.jvxlData.setSurfaceInfo$javajs_util_P4$javajs_util_P3$I$S(this.params.thePlane, this.params.mapLattice, 0, "");
this.jvxlData.scale3d=this.params.scale3d;
return true;
}return false;
});

Clazz.newMeth(C$, 'readSurfaceDataJXR$', function () {
this.readSurfaceDataVFR$Z(false);
this.volumeData.setMappingPlane$javajs_util_P4(null);
});

Clazz.newMeth(C$, 'jvxlReadFractionData$S$I', function (type, nPoints) {
var str;
try {
if (type.equals$O("edge")) {
str=$I$(3,"jvxlDecompressString$S",[$I$(1).getXmlAttrib$S$S(this.tempDataXml, "data")]);
} else {
var data=this.xr.getXmlData$S$S$Z$Z("jvxlColorData", null, true, false);
this.jvxlData.isJvxlPrecisionColor=C$.getEncoding$S(data).endsWith$S("2");
str=$I$(3,"jvxlDecompressString$S",[$I$(1).getXmlAttrib$S$S(data, "data")]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).error$S("Error reading " + type + " data " + e );
throw Clazz.new_(Clazz.load('NullPointerException'));
} else {
throw e;
}
}
return str;
});

Clazz.newMeth(C$, 'getVoxelBitSet$I', function (nPoints) {
if (this.bsVoxelBitSet != null ) return this.bsVoxelBitSet;
var bs=Clazz.new_($I$(2,1));
var bsVoxelPtr=0;
if (this.surfaceDataCount <= 0) return bs;
var nThisValue=0;
while (bsVoxelPtr < nPoints){
nThisValue=this.parseInt$();
if (nThisValue == -2147483648) {
this.rd$();
if (this.line == null  || (nThisValue=this.parseIntStr$S(this.line)) == -2147483648 ) {
if (!this.endOfData) $I$(5,"error$S",["end of file in JvxlReader?" + " line=" + this.line ]);
this.endOfData=true;
nThisValue=10000;
}}this.thisInside=!this.thisInside;
++this.jvxlNSurfaceInts;
if (this.thisInside) bs.setBits$I$I(bsVoxelPtr, bsVoxelPtr + nThisValue);
bsVoxelPtr+=nThisValue;
}
return bs;
});

Clazz.newMeth(C$, 'getSurfacePointAndFraction$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3', function (cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn) {
if (this.edgeDataCount <= 0) return this.getSPFv$F$Z$F$F$javajs_util_T3$javajs_util_V3$I$I$I$I$I$FA$javajs_util_T3(cutoff, isCutoffAbsolute, valueA, valueB, pointA, edgeVector, x, y, z, vA, vB, fReturn, ptReturn);
ptReturn.scaleAdd2$F$javajs_util_T3$javajs_util_T3(fReturn[0]=p$1.jvxlGetNextFraction$I$I$F.apply(this, [this.edgeFractionBase, this.edgeFractionRange, 0.5]), edgeVector, pointA);
if (Float.isNaN$F(this.valueMin)) p$1.setValueMinMax.apply(this, []);
return (this.valueCount == 0 || this.includeValueNaN && Float.isNaN$F(fReturn[0])   ? fReturn[0] : p$1.getNextValue.apply(this, []));
});

Clazz.newMeth(C$, 'getNextValue', function () {
var fraction=NaN;
while (this.colorPtr < this.valueCount && Float.isNaN$F(fraction) ){
if (this.jvxlData.isJvxlPrecisionColor) {
fraction=$I$(3,"jvxlFractionFromCharacter2$I$I$I$I",[this.jvxlColorDataRead.charAt$I(this.colorPtr).$c(), this.jvxlColorDataRead.charAt$I((this.colorPtr++) + this.valueCount).$c(), this.colorFractionBase, this.colorFractionRange]);
} else {
fraction=$I$(3,"jvxlFractionFromCharacter$I$I$I$F",[this.jvxlColorDataRead.charAt$I(this.colorPtr++).$c(), this.colorFractionBase, this.colorFractionRange, 0.5]);
}break;
}
return this.valueMin + fraction * this.valueRange;
}, p$1);

Clazz.newMeth(C$, 'setValueMinMax', function () {
this.valueCount=this.jvxlColorDataRead.length$();
if (this.jvxlData.isJvxlPrecisionColor) this.valueCount=(this.valueCount/(2)|0);
this.includeValueNaN=(this.valueCount != this.jvxlEdgeDataRead.length$());
this.valueMin=(!this.jvxlData.isJvxlPrecisionColor ? this.params.valueMappedToRed : this.params.mappedDataMin == 3.4028235E38  ? 0.0 : this.params.mappedDataMin);
this.valueRange=(!this.jvxlData.isJvxlPrecisionColor ? this.params.valueMappedToBlue : this.params.mappedDataMin == 3.4028235E38  ? 1.0 : this.params.mappedDataMax) - this.valueMin;
this.haveReadColorData=true;
}, p$1);

Clazz.newMeth(C$, 'jvxlGetNextFraction$I$I$F', function (base, range, fracOffset) {
if (this.fractionPtr >= this.strFractionTemp.length$()) {
if (!this.endOfData) $I$(5).error$S("end of file reading compressed fraction data");
this.endOfData=true;
this.strFractionTemp="" + String.fromCharCode(base);
this.fractionPtr=0;
}return $I$(3,"jvxlFractionFromCharacter$I$I$I$F",[this.strFractionTemp.charAt$I(this.fractionPtr++).$c(), base, range, fracOffset]);
}, p$1);

Clazz.newMeth(C$, 'readColorData$', function () {
if (!this.jvxlDataIsColorMapped) return "";
var vertexCount=this.jvxlData.vertexCount=this.meshData.vc;
var colixes=this.meshData.vcs;
var vertexValues=this.meshData.vvs;
if ("none".equals$O(this.jvxlColorEncodingRead)) {
this.jvxlData.vertexColors=Clazz.array(Integer.TYPE, [vertexCount]);
var nextc=Clazz.array(Integer.TYPE, [1]);
var n=$I$(11).parseIntNext$S$IA(this.jvxlColorDataRead, nextc);
n=Math.min(n, vertexCount);
var tokens=$I$(11,"getTokens$S",[this.jvxlColorDataRead.substring$I(nextc[0])]);
var haveTranslucent=false;
var trans=this.jvxlData.translucency;
var lastColor=0;
for (var i=0; i < n; i++) try {
var c=C$.getColor$S(tokens[i]);
if (c == 0) c=lastColor;
 else lastColor=c;
colixes[i]=$I$(8,"getColixTranslucent$I",[this.jvxlData.vertexColors[i]=c]);
if ($I$(8).isColixTranslucent$H(colixes[i])) haveTranslucent=true;
 else if (trans != 0 ) colixes[i]=$I$(8).getColixTranslucent3$H$Z$F(colixes[i], true, trans);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(5).info$S("JvxlXmlReader: Cannot interpret color code: " + tokens[i]);
} else {
throw e;
}
}

if (haveTranslucent && trans == 0  ) {
this.jvxlData.translucency=0.5;
}return "-";
}if (this.params.colorEncoder == null ) this.params.colorEncoder=Clazz.new_($I$(12,1).c$$org_jmol_util_ColorEncoder$org_jmol_viewer_Viewer,[null, null]);
this.params.colorEncoder.setColorScheme$S$Z(null, false);
this.params.colorEncoder.setRange$F$F$Z(this.params.valueMappedToRed, this.params.valueMappedToBlue, this.params.isColorReversed);
$I$(5,"info$S",["JVXL reading color data mapped min/max: " + new Float(this.params.mappedDataMin).toString() + "/" + new Float(this.params.mappedDataMax).toString() + " for " + vertexCount + " vertices." + " using encoding keys " + this.colorFractionBase + " " + this.colorFractionRange ]);
$I$(5,"info$S",["mapping red-->blue for " + new Float(this.params.valueMappedToRed).toString() + " to " + new Float(this.params.valueMappedToBlue).toString() + " colorPrecision:" + this.jvxlData.isJvxlPrecisionColor ]);
var getValues=(Float.isNaN$F(this.valueMin));
if (getValues) p$1.setValueMinMax.apply(this, []);
var contourPlaneMinimumValue=3.4028235E38;
var contourPlaneMaximumValue=-3.4028235E38;
if (colixes == null  || colixes.length < vertexCount ) this.meshData.vcs=colixes=Clazz.array(Short.TYPE, [vertexCount]);
var colixNeg=($s$[0] = 0, $s$[0]);
var colixPos=($s$[0] = 0, $s$[0]);
if (this.params.colorBySign) {
colixPos=$I$(8).getColix$I(this.params.isColorReversed ? this.params.colorNeg : this.params.colorPos);
colixNeg=$I$(8).getColix$I(this.params.isColorReversed ? this.params.colorPos : this.params.colorNeg);
}var vertexIncrement=this.meshData.vertexIncrement;
var needContourMinMax=(this.params.mappedDataMin == 3.4028235E38 );
for (var i=0; i < vertexCount; i+=vertexIncrement) {
var value;
if (getValues) value=vertexValues[i]=p$1.getNextValue.apply(this, []);
 else value=vertexValues[i];
if (needContourMinMax) {
if (value < contourPlaneMinimumValue ) contourPlaneMinimumValue=value;
if (value > contourPlaneMaximumValue ) contourPlaneMaximumValue=value;
}}
if (needContourMinMax) {
this.params.mappedDataMin=contourPlaneMinimumValue;
this.params.mappedDataMax=contourPlaneMaximumValue;
}if (this.jvxlData.colorScheme != null ) {
var setContourValue=(this.marchingSquares != null  && this.params.isContoured );
for (var i=0; i < vertexCount; i+=vertexIncrement) {
var value=vertexValues[i];
if (setContourValue) {
this.marchingSquares.setContourData$I$F(i, value);
continue;
}var colix=(!this.params.colorBySign ? this.params.colorEncoder.getColorIndex$F(value) : (this.params.isColorReversed ? value > 0  : value <= 0 ) ? colixNeg : colixPos);
colixes[i]=$I$(8).getColixTranslucent3$H$Z$F(colix, true, this.jvxlData.translucency);
}
}return this.jvxlColorDataRead + "\n";
});

Clazz.newMeth(C$, 'getColor$S', function (c) {
var n=0;
try {
switch ((c.charCodeAt$I(0))) {
case 91:
n=$I$(9).getArgbFromString$S(c);
break;
case 48:
n=$I$(11,"parseIntRadix$S$I",[c.substring$I(2), 16]);
break;
default:
n=$I$(11).parseIntRadix$S$I(c, 10);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return n;
}, 1);

Clazz.newMeth(C$, 'getEncodedVertexData$', function () {
var sdata=this.xr.getXmlData$S$S$Z$Z("jvxlSurfaceData", null, true, false);
this.jvxlDecodeVertexData$S$Z(this.xr.getXmlData$S$S$Z$Z("jvxlVertexData", sdata, true, false), false);
var tData=this.xr.getXmlData$S$S$Z$Z("jvxlTriangleData", sdata, true, false);
var edgeData=this.xr.getXmlData$S$S$Z$Z("jvxlTriangleEdgeData", sdata, true, false);
var polygonColorData=this.xr.getXmlData$S$S$Z$Z("jvxlPolygonColorData", sdata, false, false);
this.jvxlDecodeTriangleData$S$S$S(tData, edgeData, polygonColorData);
var cData=this.xr.getXmlData$S$S$Z$Z("jvxlColorData", sdata, true, false);
this.jvxlColorEncodingRead=C$.getEncoding$S(cData);
this.jvxlData.isJvxlPrecisionColor=this.jvxlColorEncodingRead.endsWith$S("2");
cData=p$1.getData$S$S.apply(this, [cData, "jvxlColorData"]);
this.jvxlColorDataRead=(this.jvxlColorEncodingRead.equals$O("none") ? cData : $I$(3).jvxlDecompressString$S(cData));
this.jvxlDataIsColorMapped=((this.params.colorRgb == -2147483648 || this.params.colorRgb == 2147483647 ) && this.jvxlColorDataRead.length$() > 0 );
if (this.haveContourData) this.jvxlDecodeContourData$org_jmol_jvxl_data_JvxlData$S(this.jvxlData, this.xr.getXmlData$S$S$Z$Z("jvxlContourData", null, false, false));
});

Clazz.newMeth(C$, 'getData$S$S', function (sdata, name) {
var data=$I$(1).getXmlAttrib$S$S(sdata, "data");
if (data.length$() == 0) data=this.xr.getXmlData$S$S$Z$Z(name, sdata, false, false);
return data;
}, p$1);

Clazz.newMeth(C$, 'getEncoding$S', function (data) {
if ($I$(1).getXmlAttrib$S$S(data, "len").length$() > 0) return "";
var s=$I$(1).getXmlAttrib$S$S(data, "encoding");
return (s.length$() == 0 ? "none" : s);
}, 1);

Clazz.newMeth(C$, 'jvxlDecodeVertexData$S$Z', function (data, asArray) {
var vertexCount=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(data, "count"));
if (!asArray) $I$(5).info$S("Reading " + vertexCount + " vertices" );
var ptCount=vertexCount * 3;
var vertices=(asArray ? Clazz.array($I$(13), [vertexCount]) : null);
var fraction;
var vData=$I$(1).getXmlAttrib$S$S(data, "data");
var encoding=C$.getEncoding$S(data);
if ("none".equals$O(encoding)) {
if (vData.length$() == 0) vData=this.xr.getXmlData$S$S$Z$Z("jvxlVertexData", data, false, false);
var fdata=$I$(11).parseFloatArray$S(vData);
if (fdata[0] != vertexCount * 3 ) $I$(5,"info$S",["JvxlXmlReader: vertexData count=" + ((fdata[0]|0)) + "; expected " + (vertexCount * 3) ]);
for (var i=0, pt=1; i < vertexCount; i++) {
var p=$I$(13).new3$F$F$F(fdata[pt++], fdata[pt++], fdata[pt++]);
if (asArray) vertices[i]=p;
 else this.addVertexCopy$javajs_util_T3$F$I$Z(p, 0, i, false);
}
} else {
var min=this.xr.getXmlPoint$S$S(data, "min");
var range=this.xr.getXmlPoint$S$S(data, "max");
range.sub$javajs_util_T3(min);
var colorFractionBase=this.jvxlData.colorFractionBase;
var colorFractionRange=this.jvxlData.colorFractionRange;
var s=$I$(3).jvxlDecompressString$S(vData);
if (s.length$() == 0) s=this.xr.getXmlData$S$S$Z$Z("jvxlVertexData", data, false, false);
for (var i=0, pt=-1; i < vertexCount; i++) {
var p=Clazz.new_($I$(13,1));
fraction=$I$(3,"jvxlFractionFromCharacter2$I$I$I$I",[s.charAt$I(++pt).$c(), s.charAt$I(pt + ptCount).$c(), colorFractionBase, colorFractionRange]);
p.x=min.x + fraction * range.x;
fraction=$I$(3,"jvxlFractionFromCharacter2$I$I$I$I",[s.charAt$I(++pt).$c(), s.charAt$I(pt + ptCount).$c(), colorFractionBase, colorFractionRange]);
p.y=min.y + fraction * range.y;
fraction=$I$(3,"jvxlFractionFromCharacter2$I$I$I$I",[s.charAt$I(++pt).$c(), s.charAt$I(pt + ptCount).$c(), colorFractionBase, colorFractionRange]);
p.z=min.z + fraction * range.z;
if (asArray) vertices[i]=p;
 else this.addVertexCopy$javajs_util_T3$F$I$Z(p, 0, i, false);
}
}return vertices;
});

Clazz.newMeth(C$, 'jvxlDecodeTriangleData$S$S$S', function (tdata, edgeData, colorData) {
var nTriangles=this.parseIntStr$S($I$(1).getXmlAttrib$S$S(tdata, "count"));
if (nTriangles < 0) return;
var nextc=Clazz.array(Integer.TYPE, [1]);
var nColors=(colorData == null  ? -1 : 1);
var color=0;
$I$(5).info$S("Reading " + nTriangles + " triangles" );
var encoding=C$.getEncoding$S(tdata);
tdata=p$1.getData$S$S.apply(this, [tdata, "jvxlTriangleData"]);
var edata=p$1.getData$S$S.apply(this, [edgeData, "jvxlTriangleEdgeData"]);
var vertex=Clazz.array(Integer.TYPE, [3]);
var nextp=Clazz.array(Integer.TYPE, [1]);
var nexte=null;
var edgeMask=7;
var haveEdgeInfo;
var haveEncoding=!"none".equals$O(encoding);
if (haveEncoding) {
tdata=$I$(3).jvxlDecompressString$S(tdata);
edata=$I$(3).jvxlDecompressString$S(edata).trim$();
haveEdgeInfo=(edata.length$() == nTriangles);
} else {
var n=$I$(11).parseIntNext$S$IA(tdata, nextp);
haveEdgeInfo=(edata.length$() > 0);
if (haveEdgeInfo) {
nexte=Clazz.array(Integer.TYPE, [1]);
$I$(11).parseIntNext$S$IA(edata, nexte);
} else if (n > 0) {
$I$(5,"info$S",["JvxlXmlReader: jvxlTriangleEdgeData count=" + n + "; expected " + nTriangles ]);
}}for (var i=0, v=0, p=0, pt=-1; i < nTriangles; ) {
if (haveEncoding) {
var ch=tdata.charAt$I(++pt);
var diff;
switch (ch.$c()) {
case 33:
diff=0;
break;
case 43:
case 46:
case 32:
case 10:
case 13:
case 9:
case 44:
continue;
case 45:
case 48:
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
nextp[0]=pt;
diff=$I$(11).parseIntNext$S$IA(tdata, nextp);
pt=nextp[0] - 1;
break;
default:
diff=ch.$c() - 92;
}
v+=diff;
} else {
v=$I$(11).parseIntNext$S$IA(tdata, nextp) - 1;
}vertex[p]=v;
if (++p == 3) {
p=0;
if (haveEdgeInfo) {
edgeMask=(nexte == null  ? (edata.charCodeAt$I(i)) - 48 : $I$(11).parseIntNext$S$IA(edata, nexte));
if (edgeMask < 0 || edgeMask > 7 ) edgeMask=7;
}if (--nColors == 0) {
nColors=($I$(11).parseIntNext$S$IA(colorData, nextc));
var c=$I$(11).parseIntNext$S$IA(colorData, nextc);
if (c == -2147483648) nColors=0;
 else color=c | -16777216;
}this.addTriangleCheck$I$I$I$I$I$Z$I(vertex[0], vertex[1], vertex[2], edgeMask, color, false, color);
i++;
}}
});

Clazz.newMeth(C$, 'jvxlDecodeContourData$org_jmol_jvxl_data_JvxlData$S', function (jvxlData, data) {
var vs=Clazz.new_($I$(14,1));
var values=Clazz.new_($I$(6,1));
var colors=Clazz.new_($I$(6,1));
var pt=-1;
jvxlData.vContours=null;
if (data == null ) return;
while ((pt=data.indexOf$S$I("<jvxlContour", pt + 1)) >= 0){
var v=Clazz.new_($I$(14,1));
var s=this.xr.getXmlData$S$S$Z$Z("jvxlContour", data.substring$I(pt), true, false);
var value=this.parseFloatStr$S($I$(1).getXmlAttrib$S$S(s, "value"));
values.append$S(" ").appendF$F(value);
var color=C$.getColor$S($I$(1).getXmlAttrib$S$S(s, "color"));
var colix=$I$(8).getColix$I(color);
colors.append$S(" ").append$S($I$(7).escapeColor$I(color));
var fData=$I$(3,"jvxlDecompressString$S",[$I$(1).getXmlAttrib$S$S(s, "data")]);
var bs=$I$(3,"jvxlDecodeBitSet$S",[this.xr.getXmlData$S$S$Z$Z("jvxlContour", s, false, false)]);
var n=bs.length$();
$I$(15,"setContourVector$javajs_util_Lst$I$javajs_util_BS$F$H$I$javajs_util_SB",[v, n, bs, value, colix, color, $I$(6).newS$S(fData)]);
vs.addLast$O(v);
}
var n=vs.size$();
if (n > 0) {
jvxlData.vContours=$I$(16).createArrayOfArrayList$I(n);
jvxlData.contourColixes=this.params.contourColixes=Clazz.array(Short.TYPE, [n]);
jvxlData.contourValues=this.params.contoursDiscrete=Clazz.array(Float.TYPE, [n]);
for (var i=0; i < n; i++) {
jvxlData.vContours[i]=vs.get$I(i);
jvxlData.contourValues[i]=(jvxlData.vContours[i].get$I(2)).floatValue$();
jvxlData.contourColixes[i]=(jvxlData.vContours[i].get$I(3))[0];
}
jvxlData.contourColors=$I$(8).getHexCodes$HA(jvxlData.contourColixes);
$I$(5).info$S("JVXL read: " + n + " discrete contours" );
$I$(5).info$S("JVXL read: contour values: " + values);
$I$(5).info$S("JVXL read: contour colors: " + colors);
}});

Clazz.newMeth(C$, 'postProcessVertices$', function () {
var bsInvalid=this.params.bsExcluded[1];
if (bsInvalid != null ) {
if (this.meshDataServer != null ) this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 1, null);
this.meshData.invalidateVertices$javajs_util_BS(bsInvalid);
if (this.meshDataServer != null ) {
this.meshDataServer.fillMeshData$org_jmol_jvxl_data_MeshData$I$org_jmol_shapesurface_IsosurfaceMesh(this.meshData, 4, null);
this.meshData=Clazz.new_($I$(17,1));
}this.updateTriangles$();
}});
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
