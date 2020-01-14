(function(){var P$=Clazz.newPackage("org.jmol.jvxl.data"),I$=[[0,'javajs.util.BS','javajs.util.SB','org.jmol.jvxl.data.JvxlCoder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JvxlData");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.msg=null;
this.wasJvxl=false;
this.wasCubic=false;
this.jvxlFileTitle=null;
this.jvxlFileMessage=null;
this.jvxlSurfaceData=null;
this.jvxlEdgeData=null;
this.jvxlColorData=null;
this.jvxlVolumeDataXml=null;
this.jvxlExcluded=null;
this.jvxlPlane=null;
this.isJvxlPrecisionColor=false;
this.jvxlDataIsColorMapped=false;
this.jvxlDataIs2dContour=false;
this.jvxlDataIsColorDensity=false;
this.isColorReversed=false;
this.thisSet=0;
this.edgeFractionBase=0;
this.edgeFractionRange=0;
this.colorFractionBase=0;
this.colorFractionRange=0;
this.isValid=false;
this.insideOut=false;
this.isXLowToHigh=false;
this.isContoured=false;
this.isBicolorMap=false;
this.isTruncated=false;
this.isCutoffAbsolute=false;
this.isModelConnected=false;
this.vertexDataOnly=false;
this.mappedDataMin=0;
this.mappedDataMax=0;
this.valueMappedToRed=0;
this.valueMappedToBlue=0;
this.cutoff=0;
this.pointsPerAngstrom=0;
this.nPointsX=0;
this.nPointsY=0;
this.nPointsZ=0;
this.nBytes=0;
this.nContours=0;
this.nEdges=0;
this.nSurfaceInts=0;
this.vertexCount=0;
this.vContours=null;
this.contourColixes=null;
this.contourColors=null;
this.contourValues=null;
this.contourValuesUsed=null;
this.thisContour=0;
this.scale3d=0;
this.minColorIndex=0;
this.maxColorIndex=0;
this.title=null;
this.version=null;
this.boundingBox=null;
this.excludedTriangleCount=0;
this.excludedVertexCount=0;
this.colorDensity=false;
this.pointSize=0;
this.moleculeXml=null;
this.dataMin=0;
this.dataMax=0;
this.saveVertexCount=0;
this.vertexColorMap=null;
this.nVertexColors=0;
this.vertexColors=null;
this.color=null;
this.meshColor=null;
this.translucency=0;
this.colorScheme=null;
this.rendering=null;
this.slabValue=0;
this.isSlabbable=false;
this.diameter=0;
this.slabInfo=null;
this.allowVolumeRender=false;
this.voxelVolume=0;
this.mapLattice=null;
this.fixedLattice=null;
this.baseColor=null;
this.integration=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.msg="";
this.jvxlExcluded=Clazz.array($I$(1), [4]);
this.thisSet=-2147483648;
this.edgeFractionBase=35;
this.edgeFractionRange=90;
this.colorFractionBase=35;
this.colorFractionRange=90;
this.isValid=true;
this.thisContour=-1;
this.minColorIndex=($s$[0] = -1, $s$[0]);
this.maxColorIndex=($s$[0] = 0, $s$[0]);
this.slabValue=-2147483648;
this.integration=NaN;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clear$', function () {
this.allowVolumeRender=true;
this.jvxlSurfaceData="";
this.jvxlEdgeData="";
this.jvxlColorData="";
this.jvxlVolumeDataXml="";
this.color=null;
this.colorScheme=null;
this.colorDensity=false;
this.pointSize=NaN;
this.contourValues=null;
this.contourValuesUsed=null;
this.contourColixes=null;
this.contourColors=null;
this.integration=NaN;
this.isSlabbable=false;
this.isValid=true;
this.mapLattice=null;
this.meshColor=null;
this.msg="";
this.nPointsX=0;
this.nVertexColors=0;
this.fixedLattice=null;
this.slabInfo=null;
this.slabValue=-2147483648;
this.thisSet=-2147483648;
this.rendering=null;
this.thisContour=-1;
this.translucency=0;
this.vContours=null;
this.vertexColorMap=null;
this.vertexColors=null;
this.voxelVolume=0;
});

Clazz.newMeth(C$, 'setSurfaceInfo$javajs_util_P4$javajs_util_P3$I$S', function (thePlane, mapLattice, nSurfaceInts, surfaceData) {
this.jvxlSurfaceData=surfaceData;
if (this.jvxlSurfaceData.indexOf$S("--") == 0) this.jvxlSurfaceData=this.jvxlSurfaceData.substring$I(2);
this.jvxlPlane=thePlane;
this.mapLattice=mapLattice;
this.nSurfaceInts=nSurfaceInts;
});

Clazz.newMeth(C$, 'setSurfaceInfoFromBitSet$javajs_util_BS$javajs_util_P4', function (bs, thePlane) {
this.setSurfaceInfoFromBitSetPts$javajs_util_BS$javajs_util_P4$javajs_util_P3(bs, thePlane, null);
});

Clazz.newMeth(C$, 'setSurfaceInfoFromBitSetPts$javajs_util_BS$javajs_util_P4$javajs_util_P3', function (bs, thePlane, mapLattice) {
var sb=Clazz.new_($I$(2));
var nSurfaceInts=(thePlane != null  ? 0 : $I$(3).jvxlEncodeBitSetBuffer$javajs_util_BS$I$javajs_util_SB(bs, this.nPointsX * this.nPointsY * this.nPointsZ , sb));
this.setSurfaceInfo$javajs_util_P4$javajs_util_P3$I$S(thePlane, mapLattice, nSurfaceInts, sb.toString());
});

Clazz.newMeth(C$, 'jvxlUpdateInfo$SA$J', function (title, nBytes) {
this.title=title;
this.nBytes=nBytes;
});

Clazz.newMeth(C$, 'updateSurfaceData$S$FA$I$I$C', function (edgeData, vertexValues, vertexCount, vertexIncrement, isNaN) {
if (edgeData.length$() == 0) return "";
var chars=edgeData.toCharArray$();
for (var i=0, ipt=0; i < vertexCount; i+=vertexIncrement, ipt++) if (Float.isNaN$F(vertexValues[i])) chars[ipt]=isNaN;

return String.copyValueOf$CA(chars);
}, 1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
