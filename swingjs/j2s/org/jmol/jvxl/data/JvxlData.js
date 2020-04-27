(function(){var P$=Clazz.newPackage("org.jmol.jvxl.data"),I$=[[0,'javajs.util.BS','javajs.util.SB','org.jmol.jvxl.data.JvxlCoder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JvxlData");

C$.$clinit$=2;

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
},1);

C$.$fields$=[['Z',['wasJvxl','wasCubic','isJvxlPrecisionColor','jvxlDataIsColorMapped','jvxlDataIs2dContour','jvxlDataIsColorDensity','isColorReversed','isValid','insideOut','isXLowToHigh','isContoured','isBicolorMap','isTruncated','isCutoffAbsolute','isModelConnected','vertexDataOnly','colorDensity','isSlabbable','allowVolumeRender'],'F',['mappedDataMin','mappedDataMax','valueMappedToRed','valueMappedToBlue','cutoff','pointsPerAngstrom','scale3d','pointSize','dataMin','dataMax','translucency','voxelVolume','integration'],'I',['thisSet','edgeFractionBase','edgeFractionRange','colorFractionBase','colorFractionRange','nPointsX','nPointsY','nPointsZ','nContours','nEdges','nSurfaceInts','vertexCount','thisContour','excludedTriangleCount','excludedVertexCount','saveVertexCount','nVertexColors','slabValue','diameter'],'J',['nBytes'],'H',['minColorIndex','maxColorIndex'],'S',['msg','jvxlFileTitle','jvxlFileMessage','jvxlSurfaceData','jvxlEdgeData','jvxlColorData','jvxlVolumeDataXml','contourColors','version','moleculeXml','color','meshColor','colorScheme','rendering','slabInfo','baseColor'],'O',['jvxlExcluded','javajs.util.BS[]','jvxlPlane','javajs.util.P4','vContours','javajs.util.Lst[]','contourColixes','short[]','contourValues','float[]','+contourValuesUsed','title','String[]','boundingBox','javajs.util.P3[]','vertexColorMap','java.util.Map','vertexColors','int[]','mapLattice','javajs.util.P3','+fixedLattice']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
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
var sb=Clazz.new_($I$(2,1));
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:09 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
