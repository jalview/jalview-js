(function(){var P$=Clazz.newPackage("org.jmol.jvxl.data"),I$=[[0,'javajs.util.SB','javajs.util.XmlUtil','org.jmol.jvxl.data.VolumeData','org.jmol.util.Escape','org.jmol.util.BSUtil','javajs.util.PT','javajs.util.Lst','org.jmol.util.C','javajs.util.P3','javajs.util.BS','org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JvxlCoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'jvxlGetFile$org_jmol_jvxl_data_VolumeData$org_jmol_jvxl_data_JvxlData$SA', function (volumeData, jvxlData, title) {
var counts=volumeData.getVoxelCounts$();
jvxlData.nPointsX=counts[0];
jvxlData.nPointsY=counts[1];
jvxlData.nPointsZ=counts[2];
jvxlData.jvxlVolumeDataXml=volumeData.setVolumetricXml$();
return C$.jvxlGetFile$org_jmol_jvxl_data_JvxlData$org_jmol_jvxl_data_MeshData$SA$S$Z$I$S$S(jvxlData, null, title, null, true, 1, null, null);
}, 1);

Clazz.newMeth(C$, 'jvxlGetFile$org_jmol_jvxl_data_JvxlData$org_jmol_jvxl_data_MeshData$SA$S$Z$I$S$S', function (jvxlData, meshData, title, msg, includeHeader, nSurfaces, state, comment) {
var data=Clazz.new_($I$(1,1));
if ("TRAILERONLY".equals$O(msg)) {
$I$(2).closeTag$javajs_util_SB$S(data, "jvxlSurfaceSet");
$I$(2).closeTag$javajs_util_SB$S(data, "jvxl");
return data.toString();
}var vertexDataOnly=(meshData != null );
var isHeaderOnly=("HEADERONLY".equals$O(msg));
if (includeHeader) {
$I$(2).openDocument$javajs_util_SB(data);
(function(a,f){return f.apply(null,a)})([data, "jvxl", Clazz.array(String, -1, ["version", "2.3", "jmolVersion", jvxlData.version, "xmlns", "http://jmol.org/jvxl_schema", "xmlns:cml", "http://www.xml-cml.org/schema"])],$I$(2).openTagAttr$javajs_util_SB$S$OA);
(function(a,f){return f.apply(null,a)})([data, "jvxlFileTitle", null, jvxlData.jvxlFileTitle == null  ? "\n" : "\n" + jvxlData.jvxlFileTitle],$I$(2).appendCdata$javajs_util_SB$S$OA$S);
if (jvxlData.moleculeXml != null ) data.append$S(jvxlData.moleculeXml);
var volumeDataXml=(vertexDataOnly ? null : jvxlData.jvxlVolumeDataXml);
if (volumeDataXml == null ) volumeDataXml=(Clazz.new_($I$(3,1))).setVolumetricXml$();
data.append$S(volumeDataXml);
(function(a,f){return f.apply(null,a)})([data, "jvxlSurfaceSet", Clazz.array(String, -1, ["count", "" + (nSurfaces > 0 ? nSurfaces : 1)])],$I$(2).openTagAttr$javajs_util_SB$S$OA);
if (isHeaderOnly) return data.toString();
}var sb;
var type=(vertexDataOnly ? "pmesh" : jvxlData.jvxlPlane == null  ? "isosurface" : "plane");
if (jvxlData.jvxlColorData != null  && jvxlData.jvxlColorData.length$() > 0 ) type="mapped " + type;
(function(a,f){return f.apply(null,a)})([data, "jvxlSurface", Clazz.array(String, -1, ["type", type])],$I$(2).openTagAttr$javajs_util_SB$S$OA);
data.append$S(C$.jvxlGetInfoData$org_jmol_jvxl_data_JvxlData$Z(jvxlData, vertexDataOnly));
C$.jvxlAppendCommandState$javajs_util_SB$S$S(data, comment, state);
if (title != null  || msg != null  && msg.length$() > 0  ) {
sb=Clazz.new_($I$(1,1));
if (msg != null  && msg.length$() > 0 ) sb.append$S(msg).append$S("\n");
if (title != null ) for (var i=0; i < title.length; i++) sb.append$S(title[i]).appendC$C("\n");

(function(a,f){return f.apply(null,a)})([data, "jvxlSurfaceTitle", null, sb.toString()],$I$(2).appendCdata$javajs_util_SB$S$OA$S);
}sb=Clazz.new_($I$(1,1));
(function(a,f){return f.apply(null,a)})([sb, "jvxlSurfaceData", (vertexDataOnly || jvxlData.jvxlPlane == null   ? null : jvxlData.mapLattice == null  ? Clazz.array(String, -1, ["plane", $I$(4).eP4$javajs_util_P4(jvxlData.jvxlPlane)]) : Clazz.array(String, -1, ["plane", $I$(4).eP4$javajs_util_P4(jvxlData.jvxlPlane), "maplattice", $I$(4).eP$javajs_util_T3(jvxlData.mapLattice)]))],$I$(2).openTagAttr$javajs_util_SB$S$OA);
if (vertexDataOnly) {
C$.appendXmlVertexOnlyData$javajs_util_SB$org_jmol_jvxl_data_JvxlData$org_jmol_jvxl_data_MeshData$Z(sb, jvxlData, meshData, true);
} else if (jvxlData.jvxlPlane == null ) {
if (jvxlData.jvxlEdgeData == null ) return "";
C$.appendXmlEdgeData$javajs_util_SB$org_jmol_jvxl_data_JvxlData(sb, jvxlData);
C$.appendXmlColorData$javajs_util_SB$S$Z$Z$F$F(sb, jvxlData.jvxlColorData, true, jvxlData.isJvxlPrecisionColor, jvxlData.valueMappedToRed, jvxlData.valueMappedToBlue);
} else {
C$.appendXmlColorData$javajs_util_SB$S$Z$Z$F$F(sb, jvxlData.jvxlColorData, true, jvxlData.isJvxlPrecisionColor, jvxlData.valueMappedToRed, jvxlData.valueMappedToBlue);
}C$.appendEncodedBitSetTag$javajs_util_SB$S$javajs_util_BS$I$OA(sb, "jvxlInvalidatedVertexData", jvxlData.jvxlExcluded[1], -1, null);
if (jvxlData.excludedVertexCount > 0) {
C$.appendEncodedBitSetTag$javajs_util_SB$S$javajs_util_BS$I$OA(sb, "jvxlExcludedVertexData", jvxlData.jvxlExcluded[0], jvxlData.excludedVertexCount, null);
C$.appendEncodedBitSetTag$javajs_util_SB$S$javajs_util_BS$I$OA(sb, "jvxlExcludedPlaneData", jvxlData.jvxlExcluded[2], -1, null);
}C$.appendEncodedBitSetTag$javajs_util_SB$S$javajs_util_BS$I$OA(sb, "jvxlExcludedTriangleData", jvxlData.jvxlExcluded[3], jvxlData.excludedTriangleCount, null);
$I$(2).closeTag$javajs_util_SB$S(sb, "jvxlSurfaceData");
var len=sb.length$();
data.appendSB$javajs_util_SB(sb);
if (jvxlData.vContours != null  && jvxlData.vContours.length > 0 ) {
C$.jvxlEncodeContourData$javajs_util_LstA$javajs_util_SB(jvxlData.vContours, data);
}if (jvxlData.vertexColorMap != null ) {
if (jvxlData.baseColor == null ) $I$(2).openTag$javajs_util_SB$S(data, "jvxlVertexColorData");
 else (function(a,f){return f.apply(null,a)})([data, "jvxlVertexColorData", Clazz.array(String, -1, ["baseColor", jvxlData.baseColor])],$I$(2).openTagAttr$javajs_util_SB$S$OA);
for (var entry, $entry = jvxlData.vertexColorMap.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) C$.appendEncodedBitSetTag$javajs_util_SB$S$javajs_util_BS$I$OA(data, "jvxlColorMap", entry.getValue$(), -1, Clazz.array(java.lang.Object, -1, ["color", entry.getKey$()]));

jvxlData.vertexColorMap=null;
$I$(2).closeTag$javajs_util_SB$S(data, "jvxlVertexColorData");
}$I$(2).closeTag$javajs_util_SB$S(data, "jvxlSurface");
if (includeHeader) {
$I$(2).closeTag$javajs_util_SB$S(data, "jvxlSurfaceSet");
$I$(2).closeTag$javajs_util_SB$S(data, "jvxl");
}return C$.jvxlSetCompressionRatio$javajs_util_SB$org_jmol_jvxl_data_JvxlData$I(data, jvxlData, len);
}, 1);

Clazz.newMeth(C$, 'appendEncodedBitSetTag$javajs_util_SB$S$javajs_util_BS$I$OA', function (sb, name, bs, count, attribs) {
if (count < 0) count=$I$(5).cardinalityOf$javajs_util_BS(bs);
if (count == 0) return;
var sb1=Clazz.new_($I$(1,1));
sb1.append$S("\n ");
C$.jvxlEncodeBitSetBuffer$javajs_util_BS$I$javajs_util_SB(bs, -1, sb1);
(function(a,f){return f.apply(null,a)})([sb, name, Clazz.array(java.lang.Object, -1, [attribs, "bsEncoding", "base90+35", "count", "" + count, "len", "" + bs.length$()]), C$.jvxlCompressString$S$Z(sb1.toString(), true)],$I$(2).appendTagObj$javajs_util_SB$S$OA$O);
}, 1);

Clazz.newMeth(C$, 'jvxlSetCompressionRatio$javajs_util_SB$org_jmol_jvxl_data_JvxlData$I', function (data, jvxlData, len) {
var s=data.toString();
var r=((jvxlData.nBytes > 0 ? (jvxlData.nBytes) / len : ((jvxlData.nPointsX * jvxlData.nPointsY * jvxlData.nPointsZ * 13 )) / len)|0);
return (function(a,f){return f.apply(null,a)})([s, "\"not calculated\"", (r > 0 ? "\"" + r + ":1\""  : "\"?\"")],$I$(6).rep$S$S$S);
}, 1);

Clazz.newMeth(C$, 'appendXmlEdgeData$javajs_util_SB$org_jmol_jvxl_data_JvxlData', function (sb, jvxlData) {
(function(a,f){return f.apply(null,a)})([sb, "jvxlEdgeData", Clazz.array(String, -1, ["count", "" + (jvxlData.jvxlEdgeData.length$() - 1), "encoding", "base90f1", "bsEncoding", "base90+35c", "isXLowToHigh", "" + jvxlData.isXLowToHigh, "data", C$.jvxlCompressString$S$Z(jvxlData.jvxlEdgeData, true)]), "\n" + C$.jvxlCompressString$S$Z(jvxlData.jvxlSurfaceData, true)],$I$(2).appendTagObj$javajs_util_SB$S$OA$O);
}, 1);

Clazz.newMeth(C$, 'jvxlAppendCommandState$javajs_util_SB$S$S', function (data, cmd, state) {
if (cmd != null ) (function(a,f){return f.apply(null,a)})([data, "jvxlIsosurfaceCommand", null, "\n" + (cmd.indexOf$S("#") < 0 ? cmd : cmd.substring$I$I(0, cmd.indexOf$S("#"))) + "\n" ],$I$(2).appendCdata$javajs_util_SB$S$OA$S);
if (state != null ) {
if (state.indexOf$S("** XML ** ") >= 0) {
state=$I$(6).split$S$S(state, "** XML **")[1].trim$();
$I$(2).appendTag$javajs_util_SB$S$O(data, "jvxlIsosurfaceState", "\n" + state + "\n" );
} else {
$I$(2).appendCdata$javajs_util_SB$S$OA$S(data, "jvxlIsosurfaceState", null, "\n" + state);
}}}, 1);

Clazz.newMeth(C$, 'appendXmlColorData$javajs_util_SB$S$Z$Z$F$F', function (sb, data, isEncoded, isPrecisionColor, value1, value2) {
var n;
if (data == null  || (n=data.length$() - 1) < 0 ) return;
if (isPrecisionColor) n=(n/(2)|0);
(function(a,f){return f.apply(null,a)})([sb, "jvxlColorData", Clazz.array(String, -1, ["count", "" + n, "encoding", (isEncoded ? "base90f" + (isPrecisionColor ? "2" : "1") : "none"), "min", "" + new Float(value1).toString(), "max", "" + new Float(value2).toString(), "data", C$.jvxlCompressString$S$Z(data, true)]), null],$I$(2).appendTagObj$javajs_util_SB$S$OA$O);
}, 1);

Clazz.newMeth(C$, 'jvxlGetInfo$org_jmol_jvxl_data_JvxlData', function (jvxlData) {
return C$.jvxlGetInfoData$org_jmol_jvxl_data_JvxlData$Z(jvxlData, jvxlData.vertexDataOnly);
}, 1);

Clazz.newMeth(C$, 'jvxlGetInfoData$org_jmol_jvxl_data_JvxlData$Z', function (jvxlData, vertexDataOnly) {
if (jvxlData.jvxlSurfaceData == null ) return "";
var attribs=Clazz.new_($I$(7,1));
var nSurfaceInts=jvxlData.nSurfaceInts;
var bytesUncompressedEdgeData=(vertexDataOnly ? 0 : jvxlData.jvxlEdgeData.length$() - 1);
var nColorData=(jvxlData.jvxlColorData == null  ? -1 : (jvxlData.jvxlColorData.length$() - 1));
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  isModelConnected", "" + jvxlData.isModelConnected);
if (!vertexDataOnly) {
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  cutoff", "" + new Float(jvxlData.cutoff).toString());
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  isCutoffAbsolute", "" + jvxlData.isCutoffAbsolute);
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  pointsPerAngstrom", "" + new Float(jvxlData.pointsPerAngstrom).toString());
var n=jvxlData.jvxlSurfaceData.length$() + bytesUncompressedEdgeData + nColorData + 1 ;
if (n > 0) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nBytesData", "" + n);
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  isXLowToHigh", "" + jvxlData.isXLowToHigh);
if (jvxlData.jvxlPlane == null ) {
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nSurfaceInts", "" + nSurfaceInts);
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nBytesUncompressedEdgeData", "" + bytesUncompressedEdgeData);
}if (nColorData > 0) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nBytesUncompressedColorData", "" + nColorData);
}jvxlData.excludedVertexCount=$I$(5).cardinalityOf$javajs_util_BS(jvxlData.jvxlExcluded[0]);
jvxlData.excludedTriangleCount=$I$(5).cardinalityOf$javajs_util_BS(jvxlData.jvxlExcluded[3]);
if (jvxlData.excludedVertexCount > 0) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nExcludedVertexes", "" + jvxlData.excludedVertexCount);
if (jvxlData.excludedTriangleCount > 0) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nExcludedTriangles", "" + jvxlData.excludedTriangleCount);
var n=$I$(5).cardinalityOf$javajs_util_BS(jvxlData.jvxlExcluded[1]);
if (n > 0) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nInvalidatedVertexes", "" + n);
if (jvxlData.slabInfo != null ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  slabInfo", jvxlData.slabInfo);
if (jvxlData.isJvxlPrecisionColor) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  precisionColor", "true");
if (jvxlData.colorDensity) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  colorDensity", "true");
if (!Float.isNaN$F(jvxlData.pointSize)) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  pointSize", "" + new Float(jvxlData.pointSize).toString());
 else if (jvxlData.diameter != 0) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  diameter", "" + jvxlData.diameter);
if (!jvxlData.allowVolumeRender) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  allowVolumeRender", "false");
if (jvxlData.jvxlPlane == null  || vertexDataOnly ) {
if (jvxlData.fixedLattice != null  && !vertexDataOnly ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  fixedLattice", "" + jvxlData.fixedLattice);
if (jvxlData.isContoured) {
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  contoured", "true");
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  colorMapped", "true");
} else if (jvxlData.isBicolorMap) {
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  bicolorMap", "true");
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  colorNegative", $I$(8).getHexCode$H(jvxlData.minColorIndex));
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  colorPositive", $I$(8).getHexCode$H(jvxlData.maxColorIndex));
} else if (nColorData > 0) {
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  colorMapped", "true");
}if (jvxlData.vContours != null  && jvxlData.vContours.length > 0 ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nContourData", "" + jvxlData.vContours.length);
} else {
if (jvxlData.mapLattice != null ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  mapLattice", "" + jvxlData.mapLattice);
if (jvxlData.scale3d != 0 ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  scale3d", "" + new Float(jvxlData.scale3d).toString());
if (nColorData > 0) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  colorMapped", "true");
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  plane", $I$(4).eP4$javajs_util_P4(jvxlData.jvxlPlane));
}if (jvxlData.color != null  && jvxlData.color.indexOf$S("null") < 0 ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  color", jvxlData.color);
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  translucency", "" + new Float(jvxlData.translucency).toString());
if (jvxlData.meshColor != null ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  meshColor", jvxlData.meshColor);
if (jvxlData.colorScheme != null ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  colorScheme", jvxlData.colorScheme);
if (jvxlData.rendering != null ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  rendering", jvxlData.rendering);
if (jvxlData.thisSet >= 0) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  set", "" + (jvxlData.thisSet + 1));
if (jvxlData.slabValue != -2147483648) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  slabValue", "" + jvxlData.slabValue);
if (jvxlData.isSlabbable) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  slabbable", "true");
if (jvxlData.nVertexColors > 0) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nVertexColors", "" + jvxlData.nVertexColors);
var min=(jvxlData.mappedDataMin == 3.4028235E38  ? 0.0 : jvxlData.mappedDataMin);
var blue=(jvxlData.isColorReversed ? jvxlData.valueMappedToRed : jvxlData.valueMappedToBlue);
var red=(jvxlData.isColorReversed ? jvxlData.valueMappedToBlue : jvxlData.valueMappedToRed);
if (jvxlData.jvxlColorData != null  && jvxlData.jvxlColorData.length$() > 0  && !jvxlData.isBicolorMap ) {
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  dataMinimum", "" + new Float(min).toString());
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  dataMaximum", "" + new Float(jvxlData.mappedDataMax).toString());
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  valueMappedToRed", "" + new Float(red).toString());
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  valueMappedToBlue", "" + new Float(blue).toString());
}if (jvxlData.isContoured) {
if (jvxlData.contourValues == null  || jvxlData.contourColixes == null  ) {
if (jvxlData.vContours == null ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nContours", "" + Math.abs(jvxlData.nContours));
} else {
if (jvxlData.jvxlPlane != null ) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  contoured", "true");
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  nContours", "" + jvxlData.contourValues.length);
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  contourValues", (function(a,f){return f.apply(null,a)})([jvxlData.contourValuesUsed == null  ? jvxlData.contourValues : jvxlData.contourValuesUsed],$I$(4).eAF$FA));
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  contourColors", jvxlData.contourColors);
}if (jvxlData.thisContour > 0) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  thisContour", "" + jvxlData.thisContour);
}if (jvxlData.insideOut) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  insideOut", "true");
if (jvxlData.vertexDataOnly) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  note", "vertex/face data only");
 else if (jvxlData.isXLowToHigh) C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  note", "progressive JVXL+ -- X values read from low(0) to high(" + (jvxlData.nPointsX - 1) + ")" );
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  xyzMin", $I$(4).eP$javajs_util_T3(jvxlData.boundingBox[0]));
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  xyzMax", $I$(4).eP$javajs_util_T3(jvxlData.boundingBox[1]));
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  approximateCompressionRatio", "not calculated");
C$.addAttrib$javajs_util_Lst$S$S(attribs, "\n  jmolVersion", jvxlData.version);
var info=Clazz.new_($I$(1,1));
(function(a,f){return f.apply(null,a)})([info, "jvxlSurfaceInfo", attribs.toArray$OA(Clazz.array(java.lang.Object, [attribs.size$()]))],$I$(2).openTagAttr$javajs_util_SB$S$OA);
$I$(2).closeTag$javajs_util_SB$S(info, "jvxlSurfaceInfo");
return info.toString();
}, 1);

Clazz.newMeth(C$, 'addAttrib$javajs_util_Lst$S$S', function (attribs, name, value) {
attribs.addLast$O(Clazz.array(String, -1, [name, value]));
}, 1);

Clazz.newMeth(C$, 'jvxlEncodeContourData$javajs_util_LstA$javajs_util_SB', function (contours, sb) {
(function(a,f){return f.apply(null,a)})([sb, "jvxlContourData", Clazz.array(String, -1, ["count", "" + contours.length])],$I$(2).openTagAttr$javajs_util_SB$S$OA);
for (var i=0; i < contours.length; i++) {
if (contours[i].size$() < 6) {
continue;
}var nPolygons=(contours[i].get$I(0)).intValue$();
var sb1=Clazz.new_($I$(1,1));
sb1.append$S("\n");
var bs=contours[i].get$I(1);
C$.jvxlEncodeBitSetBuffer$javajs_util_BS$I$javajs_util_SB(bs, nPolygons, sb1);
(function(a,f){return f.apply(null,a)})([sb, "jvxlContour", Clazz.array(String, -1, ["index", "" + i, "value", "" + contours[i].get$I(2), "color", (function(a,f){return f.apply(null,a)})([(contours[i].get$I(4))[0]],$I$(4).escapeColor$I), "count", "" + bs.length$(), "encoding", "base90iff1", "bsEncoding", "base90+35c", "data", C$.jvxlCompressString$S$Z(contours[i].get$I(5).toString(), true)]), C$.jvxlCompressString$S$Z(sb1.toString(), true)],$I$(2).appendTagObj$javajs_util_SB$S$OA$O);
}
$I$(2).closeTag$javajs_util_SB$S(sb, "jvxlContourData");
}, 1);

Clazz.newMeth(C$, 'set3dContourVector$javajs_util_Lst$IAA$javajs_util_T3A', function (v, polygonIndexes, vertices) {
if (v.size$() < 6) return;
var fData=v.get$I(5);
var bs=v.get$I(1);
var pt=0;
var nBuf=fData.length$();
var type=0;
var c1=" ";
var c2=" ";
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) {
var vertexIndexes=polygonIndexes[i];
while (pt < nBuf && !(function(a,f){return f.apply(null,a)})([c1=fData.charAt$I(pt++)],$I$(6).isDigit$C) ){
}
type=c1.$c() - 48;
while (pt < nBuf && (function(a,f){return f.apply(null,a)})([c1=fData.charAt$I(pt++)],$I$(6).isWhitespace$C) ){
}
while (pt < nBuf && (function(a,f){return f.apply(null,a)})([c2=fData.charAt$I(pt++)],$I$(6).isWhitespace$C) ){
}
var f1=C$.jvxlFractionFromCharacter$I$I$I$F(c1.$c(), 35, 90, 0);
var f2=C$.jvxlFractionFromCharacter$I$I$I$F(c2.$c(), 35, 90, 0);
var i1;
var i2;
var i3;
var i4;
if ((type & 1) == 0) {
i1=vertexIndexes[1];
i2=i3=vertexIndexes[2];
i4=vertexIndexes[0];
} else {
i1=vertexIndexes[0];
i2=vertexIndexes[1];
if ((type & 2) != 0) {
i3=i2;
i4=vertexIndexes[2];
} else {
i3=vertexIndexes[2];
i4=i1;
}}v.addLast$O(C$.getContourPoint$javajs_util_T3A$I$I$F(vertices, i1, i2, f1));
v.addLast$O(C$.getContourPoint$javajs_util_T3A$I$I$F(vertices, i3, i4, f2));
}
}, 1);

Clazz.newMeth(C$, 'getContourPoint$javajs_util_T3A$I$I$F', function (vertices, i, j, f) {
var pt=Clazz.new_($I$(9,1));
pt.sub2$javajs_util_T3$javajs_util_T3(vertices[j], vertices[i]);
pt.scaleAdd2$F$javajs_util_T3$javajs_util_T3(f, pt, vertices[i]);
return pt;
}, 1);

Clazz.newMeth(C$, 'appendContourTriangleIntersection$I$F$F$javajs_util_SB', function (type, f1, f2, fData) {
fData.appendI$I(type);
fData.appendC$C(C$.jvxlFractionAsCharacter$F(f1));
fData.appendC$C(C$.jvxlFractionAsCharacter$F(f2));
}, 1);

Clazz.newMeth(C$, 'jvxlCreateColorData$org_jmol_jvxl_data_JvxlData$FA', function (jvxlData, vertexValues) {
if (vertexValues == null ) {
jvxlData.jvxlColorData="";
return;
}var writePrecisionColor=jvxlData.isJvxlPrecisionColor;
var doTruncate=jvxlData.isTruncated;
var colorFractionBase=jvxlData.colorFractionBase;
var colorFractionRange=jvxlData.colorFractionRange;
var valueBlue=jvxlData.valueMappedToBlue;
var valueRed=jvxlData.valueMappedToRed;
var vertexCount=(jvxlData.saveVertexCount > 0 ? jvxlData.saveVertexCount : jvxlData.vertexCount);
if (vertexCount > vertexValues.length) System.out.println$S("JVXLCODER ERROR");
var min=jvxlData.mappedDataMin;
var max=jvxlData.mappedDataMax;
var list1=Clazz.new_($I$(1,1));
var list2=Clazz.new_($I$(1,1));
if (vertexValues.length < vertexCount) System.out.println$S("JVXLCOLOR OHOHO");
for (var i=0; i < vertexCount; i++) {
var value=vertexValues[i];
if (Float.isNaN$F(value)) value=min;
if (doTruncate) value=(value > 0  ? 0.999 : -0.999);
if (writePrecisionColor) C$.jvxlAppendCharacter2$F$F$F$I$I$javajs_util_SB$javajs_util_SB(value, min, max, colorFractionBase, colorFractionRange, list1, list2);
 else list1.appendC$C(C$.jvxlValueAsCharacter$F$F$F$I$I(value, valueRed, valueBlue, colorFractionBase, colorFractionRange));
}
jvxlData.jvxlColorData=list1.appendSB$javajs_util_SB(list2).appendC$C("\n").toString();
}, 1);

Clazz.newMeth(C$, 'appendXmlVertexOnlyData$javajs_util_SB$org_jmol_jvxl_data_JvxlData$org_jmol_jvxl_data_MeshData$Z', function (sb, jvxlData, meshData, escapeXml) {
var vertexIdNew=Clazz.array(Integer.TYPE, [meshData.vc]);
if (C$.appendXmlTriangleData$javajs_util_SB$IAA$I$javajs_util_BS$IA$Z(sb, meshData.pis, meshData.pc, meshData.bsSlabDisplay, vertexIdNew, escapeXml)) C$.appendXmlVertexData$javajs_util_SB$org_jmol_jvxl_data_JvxlData$IA$javajs_util_T3A$FA$I$S$I$javajs_util_BS$IA$Z$Z(sb, jvxlData, vertexIdNew, meshData.vs, meshData.vvs, meshData.vc, meshData.polygonColorData, meshData.pc, meshData.bsSlabDisplay, jvxlData.vertexColors, jvxlData.jvxlColorData.length$() > 0, escapeXml);
}, 1);

Clazz.newMeth(C$, 'appendXmlTriangleData$javajs_util_SB$IAA$I$javajs_util_BS$IA$Z', function (sb, triangles, nData, bsSlabDisplay, vertexIdNew, escapeXml) {
var list1=Clazz.new_($I$(1,1));
var list2=Clazz.new_($I$(1,1));
var ilast=1;
var p=0;
var inew=0;
var addPlus=false;
var nTri=0;
var removeSlabbed=(bsSlabDisplay != null );
for (var i=0; i < nData; ) {
if (triangles[i] == null  || (removeSlabbed && !bsSlabDisplay.get$I(i) ) ) {
i++;
continue;
}var idata=triangles[i][p];
if (vertexIdNew[idata] > 0) {
idata=vertexIdNew[idata];
} else {
idata=vertexIdNew[idata]=++inew;
}var diff=idata - ilast;
ilast=idata;
if (diff == 0) {
list1.appendC$C("!");
addPlus=false;
} else if (diff > 32) {
if (addPlus) list1.appendC$C("+");
list1.appendI$I(diff);
addPlus=true;
} else if (diff < -32) {
list1.appendI$I(diff);
addPlus=true;
} else {
list1.appendC$C(String.fromCharCode((92 + diff)));
addPlus=false;
}if (++p % 3 == 0) {
list2.appendI$I(triangles[i][3]);
p=0;
i++;
nTri++;
}}
if (list1.length$() == 0) return true;
(function(a,f){return f.apply(null,a)})([sb, "jvxlTriangleData", Clazz.array(String, -1, ["count", "" + nTri, "encoding", "jvxltdiff", "data", C$.jvxlCompressString$S$Z(list1.toString(), escapeXml)]), null],$I$(2).appendTagObj$javajs_util_SB$S$OA$O);
(function(a,f){return f.apply(null,a)})([sb, "jvxlTriangleEdgeData", Clazz.array(String, -1, ["count", "" + nTri, "encoding", "jvxlsc", "data", C$.jvxlCompressString$S$Z(list2.toString(), escapeXml)]), null],$I$(2).appendTagObj$javajs_util_SB$S$OA$O);
return true;
}, 1);

Clazz.newMeth(C$, 'appendXmlVertexData$javajs_util_SB$org_jmol_jvxl_data_JvxlData$IA$javajs_util_T3A$FA$I$S$I$javajs_util_BS$IA$Z$Z', function (sb, jvxlData, vertexIdNew, vertices, vertexValues, vertexCount, polygonColorData, polygonCount, bsSlabDisplay, vertexColors, addColorData, escapeXml) {
var colorFractionBase=jvxlData.colorFractionBase;
var colorFractionRange=jvxlData.colorFractionRange;
var p;
var min=jvxlData.boundingBox[0];
var max=jvxlData.boundingBox[1];
var list1=Clazz.new_($I$(1,1));
var list2=Clazz.new_($I$(1,1));
var vertexIdOld=null;
var removeSlabbed=(bsSlabDisplay != null );
if (polygonCount > 0) {
if (removeSlabbed) polygonCount=bsSlabDisplay.cardinality$();
removeSlabbed=false;
vertexIdOld=Clazz.array(Integer.TYPE, [vertexCount]);
for (var i=0; i < vertexCount; i++) if (vertexIdNew[i] > 0) vertexIdOld[vertexIdNew[i] - 1]=i;

}var n=0;
for (var i=0; i < vertexCount; i++) if (!removeSlabbed || bsSlabDisplay.get$I(i) ) {
n++;
p=vertices[(polygonCount == 0 ? i : vertexIdOld[i])];
C$.jvxlAppendCharacter2$F$F$F$I$I$javajs_util_SB$javajs_util_SB(p.x, min.x, max.x, colorFractionBase, colorFractionRange, list1, list2);
C$.jvxlAppendCharacter2$F$F$F$I$I$javajs_util_SB$javajs_util_SB(p.y, min.y, max.y, colorFractionBase, colorFractionRange, list1, list2);
C$.jvxlAppendCharacter2$F$F$F$I$I$javajs_util_SB$javajs_util_SB(p.z, min.z, max.z, colorFractionBase, colorFractionRange, list1, list2);
}
list1.appendSB$javajs_util_SB(list2);
(function(a,f){return f.apply(null,a)})([sb, "jvxlVertexData", Clazz.array(String, -1, ["count", "" + n, "min", $I$(4).eP$javajs_util_T3(min), "max", $I$(4).eP$javajs_util_T3(max), "encoding", "base90xyz2", "data", C$.jvxlCompressString$S$Z(list1.toString(), escapeXml)]), null],$I$(2).appendTagObj$javajs_util_SB$S$OA$O);
if (polygonColorData != null ) (function(a,f){return f.apply(null,a)})([sb, "jvxlPolygonColorData", Clazz.array(String, -1, ["encoding", "jvxlnc", "count", "" + polygonCount]), "\n" + polygonColorData],$I$(2).appendTagObj$javajs_util_SB$S$OA$O);
if (!addColorData) return;
list1=Clazz.new_($I$(1,1));
list2=Clazz.new_($I$(1,1));
if (vertexColors == null ) {
for (var i=0; i < vertexCount; i++) if (!removeSlabbed || bsSlabDisplay.get$I(i) ) {
var value=vertexValues[polygonCount == 0 ? i : vertexIdOld[i]];
C$.jvxlAppendCharacter2$F$F$F$I$I$javajs_util_SB$javajs_util_SB(value, jvxlData.mappedDataMin, jvxlData.mappedDataMax, colorFractionBase, colorFractionRange, list1, list2);
}
} else {
var lastColor=0;
list1.appendI$I(n).append$S(" ");
for (var i=0; i < vertexCount; i++) if (!removeSlabbed || bsSlabDisplay.get$I(i) ) {
var c=vertexColors[polygonCount == 0 ? i : vertexIdOld[i]];
if (c == lastColor) c=0;
 else lastColor=c;
list1.appendI$I(c);
list1.append$S(" ");
}
}C$.appendXmlColorData$javajs_util_SB$S$Z$Z$F$F(sb, list1.appendSB$javajs_util_SB(list2).append$S("\n").toString(), (vertexColors == null ), true, jvxlData.valueMappedToRed, jvxlData.valueMappedToBlue);
}, 1);

Clazz.newMeth(C$, 'jvxlFractionAsCharacter$F', function (fraction) {
return C$.jvxlFractionAsCharacterRange$F$I$I(fraction, 35, 90);
}, 1);

Clazz.newMeth(C$, 'jvxlFractionAsCharacterRange$F$I$I', function (fraction, base, range) {
if (fraction > 0.9999 ) fraction=0.9999;
 else if (Float.isNaN$F(fraction)) fraction=1.0001;
var ich=(Math.floor(fraction * range + base)|0);
if (ich < base) return String.fromCharCode(base);
if (ich == 92) return "!";
return String.fromCharCode(ich);
}, 1);

Clazz.newMeth(C$, 'jvxlAppendCharacter2$F$F$F$I$I$javajs_util_SB$javajs_util_SB', function (value, min, max, base, range, list1, list2) {
var fraction=(min == max  ? value : (value - min) / (max - min));
var ch1=C$.jvxlFractionAsCharacterRange$F$I$I(fraction, base, range);
list1.appendC$C(ch1);
fraction -= C$.jvxlFractionFromCharacter$I$I$I$F(ch1.$c(), base, range, 0);
list2.appendC$C(C$.jvxlFractionAsCharacterRange$F$I$I(fraction * range, base, range));
}, 1);

Clazz.newMeth(C$, 'jvxlFractionFromCharacter$I$I$I$F', function (ich, base, range, fracOffset) {
if (ich == base + range) return NaN;
if (ich < base) ich=92;
var fraction=(ich - base + fracOffset) / range;
if (fraction < 0.0 ) return 0.0;
if (fraction > 1.0 ) return 0.999999;
return fraction;
}, 1);

Clazz.newMeth(C$, 'jvxlFractionFromCharacter2$I$I$I$I', function (ich1, ich2, base, range) {
var fraction=C$.jvxlFractionFromCharacter$I$I$I$F(ich1, base, range, 0);
var remains=C$.jvxlFractionFromCharacter$I$I$I$F(ich2, base, range, 0.5);
return fraction + remains / range;
}, 1);

Clazz.newMeth(C$, 'jvxlValueAsCharacter$F$F$F$I$I', function (value, min, max, base, range) {
var fraction=(min == max  ? value : (value - min) / (max - min));
return C$.jvxlFractionAsCharacterRange$F$I$I(fraction, base, range);
}, 1);

Clazz.newMeth(C$, 'jvxlValueFromCharacter2$I$I$F$F$I$I', function (ich, ich2, min, max, base, range) {
var fraction=C$.jvxlFractionFromCharacter2$I$I$I$I(ich, ich2, base, range);
return (max == min  ? fraction : min + fraction * (max - min));
}, 1);

Clazz.newMeth(C$, 'jvxlEncodeBitSet0$javajs_util_BS$I$javajs_util_SB', function (bs, nPoints, sb) {
var dataCount=0;
var prevCount=-1;
var nPrev=0;
if (nPoints < 0) nPoints=bs.length$();
var n=0;
var isset=false;
var lastPoint=nPoints - 1;
for (var i=0; i < nPoints; ++i) {
if (isset == bs.get$I(i) ) {
dataCount++;
} else {
if (dataCount == prevCount && i != lastPoint ) {
nPrev++;
} else {
if (nPrev > 0) {
sb.appendC$C(" ").appendI$I(-nPrev);
nPrev=0;
n++;
}sb.appendC$C(" ").appendI$I(dataCount);
n++;
prevCount=dataCount;
}dataCount=1;
isset=!isset;
}}
sb.appendC$C(" ").appendI$I(dataCount).appendC$C("\n");
return n;
}, 1);

Clazz.newMeth(C$, 'jvxlEncodeBitSet$javajs_util_BS', function (bs) {
var sb=Clazz.new_($I$(1,1));
C$.jvxlEncodeBitSetBuffer$javajs_util_BS$I$javajs_util_SB(bs, -1, sb);
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'jvxlEncodeBitSetBuffer$javajs_util_BS$I$javajs_util_SB', function (bs, nPoints, sb) {
var dataCount=0;
var n=0;
var isset=false;
if (nPoints < 0) nPoints=bs.length$();
if (nPoints == 0) return 0;
sb.append$S("-");
for (var i=0; i < nPoints; ++i) {
if (isset == bs.get$I(i) ) {
dataCount++;
} else {
C$.jvxlAppendEncodedNumber$javajs_util_SB$I$I$I(sb, dataCount, 35, 90);
n++;
dataCount=1;
isset=!isset;
}}
C$.jvxlAppendEncodedNumber$javajs_util_SB$I$I$I(sb, dataCount, 35, 90);
sb.appendC$C("\n");
return n;
}, 1);

Clazz.newMeth(C$, 'jvxlAppendEncodedNumber$javajs_util_SB$I$I$I', function (sb, n, base, range) {
var isInRange=(n < range);
if (n == 0) sb.appendC$C(String.fromCharCode(base));
 else if (!isInRange) sb.appendC$C(String.fromCharCode((base + range)));
while (n > 0){
var n1=(n/range|0);
var x=base + n - n1 * range;
if (x == 92) x=33;
sb.appendC$C(String.fromCharCode(x));
n=n1;
}
if (!isInRange) sb.append$S(" ");
}, 1);

Clazz.newMeth(C$, 'jvxlDecodeBitSetRange$S$I$I', function (data, base, range) {
var bs=Clazz.new_($I$(10,1));
var dataCount=0;
var ptr=0;
var isset=false;
var next=Clazz.array(Integer.TYPE, [1]);
while ((dataCount=C$.jvxlParseEncodedInt$S$I$I$IA(data, base, range, next)) != -2147483648){
if (isset) bs.setBits$I$I(ptr, ptr + dataCount);
ptr+=dataCount;
isset=!isset;
}
return bs;
}, 1);

Clazz.newMeth(C$, 'jvxlParseEncodedInt$S$I$I$IA', function (str, offset, base, next) {
var digitSeen=false;
var value=0;
var ich=next[0];
var ichMax=str.length$();
if (ich < 0) return -2147483648;
while (ich < ichMax && (function(a,f){return f.apply(null,a)})([str.charAt$I(ich)],$I$(6).isWhitespace$C) )++ich;

if (ich >= ichMax) return -2147483648;
var factor=1;
var isLong=((str.charCodeAt$I(ich)) == (offset + base) );
if (isLong) ich++;
while (ich < ichMax && !(function(a,f){return f.apply(null,a)})([str.charAt$I(ich)],$I$(6).isWhitespace$C) ){
var i=str.charAt$I(ich).$c();
if (i < offset) i=92;
value+=(i - offset) * factor;
digitSeen=true;
++ich;
if (!isLong) break;
factor*=base;
}
if (!digitSeen) value=-2147483648;
next[0]=ich;
return value;
}, 1);

Clazz.newMeth(C$, 'jvxlDecodeBitSet$S', function (data) {
if (data.startsWith$S("-")) return C$.jvxlDecodeBitSetRange$S$I$I(C$.jvxlDecompressString$S(data.substring$I(1)), 35, 90);
var bs=Clazz.new_($I$(10,1));
var dataCount=0;
var lastCount=0;
var nPrev=0;
var ptr=0;
var isset=false;
var next=Clazz.array(Integer.TYPE, [1]);
while (true){
dataCount=(nPrev++ < 0 ? dataCount : $I$(6).parseIntNext$S$IA(data, next));
if (dataCount == -2147483648) break;
if (dataCount < 0) {
nPrev=dataCount;
dataCount=lastCount;
continue;
}if (isset) bs.setBits$I$I(ptr, ptr + dataCount);
ptr+=dataCount;
lastCount=dataCount;
isset=!isset;
}
return bs;
}, 1);

Clazz.newMeth(C$, 'jvxlCompressString$S$Z', function (data, escapeXml) {
if (data.indexOf$S("~") >= 0) return data;
var dataOut=Clazz.new_($I$(1,1));
var chLast="\u0000";
var escaped=false;
var lastEscaped=false;
var nLast=0;
var n=data.length$();
for (var i=0; i <= n; i++) {
var ch=(i == n ? "\u0000" : data.charAt$I(i));
switch (ch.$c()) {
case 10:
case 13:
continue;
case 38:
case 60:
escaped=escapeXml;
break;
default:
escaped=false;
}
if (ch == chLast) {
++nLast;
ch="\u0000";
} else if (nLast > 0 || lastEscaped ) {
if (nLast < 4 && !lastEscaped  || chLast == " "  || chLast == "\t" ) {
while (--nLast >= 0)dataOut.appendC$C(chLast);

} else {
if (lastEscaped) lastEscaped=false;
 else dataOut.appendC$C("~");
dataOut.appendI$I(nLast);
dataOut.appendC$C(" ");
}nLast=0;
}if (ch != "\u0000") {
if (escaped) {
lastEscaped=true;
escaped=false;
dataOut.appendC$C("~");
chLast=ch;
(ch=String.fromCharCode(ch.$c()-1));
} else {
chLast=ch;
}dataOut.appendC$C(ch);
}}
return dataOut.toString();
}, 1);

Clazz.newMeth(C$, 'jvxlDecompressString$S', function (data) {
if (data.indexOf$S("~") < 0) return data;
var dataOut=Clazz.new_($I$(1,1));
var chLast="\u0000";
var next=Clazz.array(Integer.TYPE, [1]);
for (var i=0; i < data.length$(); i++) {
var ch=data.charAt$I(i);
if (ch == "~") {
next[0]=++i;
switch ((ch=data.charAt$I(i)).$c()) {
case 59:
case 37:
next[0]++;
dataOut.appendC$C(chLast=(ch=String.fromCharCode(ch.$c()+1)));
case 49:
case 50:
case 51:
case 52:
case 53:
case 54:
case 55:
case 56:
case 57:
var nChar=$I$(6).parseIntNext$S$IA(data, next);
for (var c=0; c < nChar; c++) dataOut.appendC$C(chLast);

i=next[0];
continue;
case 126:
--i;
break;
default:
(function(a,f){return f.apply(null,a)})(["Error uncompressing string " + data.substring$I$I(0, i) + "?" ],$I$(11).error$S);
}
}dataOut.appendC$C(ch);
chLast=ch;
}
return dataOut.toString();
}, 1);

Clazz.newMeth(C$, 'jvxlCreateHeaderWithoutTitleOrAtoms$org_jmol_jvxl_data_VolumeData$javajs_util_SB', function (v, bs) {
C$.jvxlCreateHeader$org_jmol_jvxl_data_VolumeData$javajs_util_SB(v, bs);
}, 1);

Clazz.newMeth(C$, 'jvxlCreateHeader$org_jmol_jvxl_data_VolumeData$javajs_util_SB', function (v, sb) {
v.setVolumetricXml$();
if (sb.length$() == 0) sb.append$S("Line 1\nLine 2\n");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:09 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
