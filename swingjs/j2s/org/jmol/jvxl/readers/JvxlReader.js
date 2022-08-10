(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.SB','javajs.util.PT','org.jmol.jvxl.readers.VolumeFileReader','org.jmol.util.Logger','org.jmol.jvxl.data.JvxlCoder','javajs.util.P4','org.jmol.util.Escape','org.jmol.util.C']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JvxlReader", null, 'org.jmol.jvxl.readers.JvxlXmlReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init2$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader', function (sg, br) {
this.init2JXR$org_jmol_jvxl_readers_SurfaceGenerator$java_io_BufferedReader(sg, br);
this.isXmlFile=false;
this.JVXL_VERSION="2.0";
});

Clazz.newMeth(C$, 'readParameters$', function () {
this.jvxlFileHeaderBuffer=Clazz.new_($I$(1,1)).append$S(this.skipComments$Z(false));
if (this.line == null  || this.line.length$() == 0 ) this.line="Line 1";
this.jvxlFileHeaderBuffer.append$S(this.line).appendC$C("\n");
if (this.rd$() == null  || this.line.length$() == 0 ) this.line="Line 2";
this.jvxlFileHeaderBuffer.append$S(this.line).appendC$C("\n");
this.jvxlFileHeaderBuffer.append$S(this.skipComments$Z(false));
var atomLine=this.line;
var tokens=$I$(2).getTokensAt$S$I(atomLine, 0);
this.isXLowToHigh=false;
this.negativeAtomCount=true;
this.ac=0;
if (tokens[0] === "-0" ) {
} else if (tokens[0].charAt$I(0) == "+") {
this.isXLowToHigh=true;
this.ac=this.parseIntStr$S(tokens[0].substring$I(1));
} else {
this.ac=-this.parseIntStr$S(tokens[0]);
}if (this.ac == -2147483648) return;
this.volumetricOrigin.set$F$F$F(this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3]));
this.isAngstroms=$I$(3).checkAtomLine$Z$Z$S$S$javajs_util_SB(this.isXLowToHigh, this.isAngstroms, null, atomLine, this.jvxlFileHeaderBuffer);
if (!this.isAngstroms) this.volumetricOrigin.scale$F(0.5291772);
this.readVoxelVector$I(0);
this.readVoxelVector$I(1);
this.readVoxelVector$I(2);
for (var i=0; i < this.ac; ++i) this.jvxlFileHeaderBuffer.append$S(this.rd$() + "\n");

this.skipComments$Z(true);
$I$(4).info$S("Reading extra JVXL information line: " + this.line);
this.nSurfaces=this.parseIntStr$S(this.line);
if (!(this.isJvxl=(this.nSurfaces < 0))) return;
this.nSurfaces=-this.nSurfaces;
$I$(4).info$S("jvxl file surfaces: " + this.nSurfaces);
var ich;
if ((ich=this.parseInt$()) == -2147483648) {
$I$(4).info$S("using default edge fraction base and range");
} else {
this.edgeFractionBase=ich;
this.edgeFractionRange=this.parseInt$();
}if ((ich=this.parseInt$()) == -2147483648) {
$I$(4).info$S("using default color fraction base and range");
} else {
this.colorFractionBase=ich;
this.colorFractionRange=this.parseInt$();
}this.cJvxlEdgeNaN=String.fromCharCode((this.edgeFractionBase + this.edgeFractionRange));
this.vertexDataOnly=this.jvxlData.vertexDataOnly=(this.volumetricVectors[0].length$() == 0 );
});

Clazz.newMeth(C$, 'jvxlReadFractionData$S$I', function (type, nPoints) {
var str="";
try {
while (str.length$() < nPoints){
this.rd$();
str += $I$(5).jvxlDecompressString$S(this.line);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(4).error$S("Error reading " + type + " data " + e );
throw Clazz.new_(Clazz.load('NullPointerException'));
} else {
throw e;
}
}
return str;
});

Clazz.newMeth(C$, 'gotoData$I$I', function (n, nPoints) {
if (n > 0) $I$(4).info$S("skipping " + n + " data sets, " + nPoints + " points each" );
this.vertexDataOnly=this.jvxlData.vertexDataOnly=(nPoints == 0);
for (var i=0; i < n; i++) {
p$1.jvxlReadDefinitionLine$Z.apply(this, [true]);
$I$(4,"info$S",["JVXL skipping: jvxlSurfaceDataCount=" + this.surfaceDataCount + " jvxlEdgeDataCount=" + this.edgeDataCount + " jvxlDataIsColorMapped=" + this.jvxlDataIsColorMapped ]);
this.jvxlSkipData$I$Z(nPoints, true);
}
p$1.jvxlReadDefinitionLine$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'jvxlReadDefinitionLine$Z', function (showMsg) {
var comment=this.skipComments$Z(true);
if (showMsg) $I$(4).info$S("reading jvxl data set: " + comment + this.line );
this.haveContourData=(comment.indexOf$S("+contourlines") >= 0);
this.jvxlCutoff=this.parseFloatStr$S(this.line);
$I$(4,"info$S",["JVXL read: cutoff " + new Float(this.jvxlCutoff).toString()]);
var param1=this.parseInt$();
var param2=this.parseInt$();
var param3=this.parseInt$();
if (param3 == -2147483648 || param3 == -1 ) param3=0;
if (param1 == -1) {
try {
this.params.thePlane=$I$(6,"new4$F$F$F$F",[this.parseFloat$(), this.parseFloat$(), this.parseFloat$(), this.parseFloat$()]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(4,"error$S",["Error reading 4 floats for PLANE definition -- setting to 0 0 1 0  (z=0)"]);
this.params.thePlane=$I$(6).new4$F$F$F$F(0, 0, 1, 0);
} else {
throw e;
}
}
$I$(4).info$S("JVXL read: plane " + this.params.thePlane);
if (param2 == -1 && param3 < 0 ) param3=-param3;
} else {
this.params.thePlane=null;
}if (param1 < 0 && param2 != -1 ) {
this.params.isContoured=(param3 != 0);
var nContoursRead=this.parseInt$();
if (nContoursRead == -2147483648) {
if (this.line.charAt$I(this.next[0]) == "[") {
this.jvxlData.contourValues=this.params.contoursDiscrete=this.parseFloatArray$FA$S$S(null, null, null);
$I$(4,"info$S",["JVXL read: contourValues " + $I$(7).eAF$FA(this.jvxlData.contourValues)]);
this.jvxlData.contourColixes=this.params.contourColixes=$I$(8,"getColixArray$S",[this.getQuotedStringNext$()]);
this.jvxlData.contourColors=$I$(8).getHexCodes$HA(this.jvxlData.contourColixes);
$I$(4).info$S("JVXL read: contourColixes " + this.jvxlData.contourColors);
this.params.nContours=this.jvxlData.contourValues.length;
}} else {
if (nContoursRead < 0) {
nContoursRead=-1 - nContoursRead;
this.params.contourFromZero=false;
}if (nContoursRead != 0 && this.params.nContours == 0 ) {
this.params.nContours=nContoursRead;
$I$(4).info$S("JVXL read: contours " + this.params.nContours);
}}} else {
this.params.isContoured=false;
}this.jvxlData.isJvxlPrecisionColor=(param1 == -1 && param2 == -2  || param3 < 0 );
this.params.isBicolorMap=(param1 > 0 && param2 < 0 );
this.jvxlDataIsColorMapped=(param3 != 0);
if (this.jvxlDataIsColorMapped) this.jvxlData.colorScheme="RGB";
this.jvxlDataIs2dContour=(this.jvxlDataIsColorMapped && this.params.isContoured );
if (this.params.isBicolorMap || this.params.colorBySign ) this.jvxlCutoff=0;
this.surfaceDataCount=(param1 < -1 ? -1 - param1 : param1 > 0 ? param1 : 0);
if (param1 == -1) this.edgeDataCount=0;
 else this.edgeDataCount=(param2 < -1 ? -param2 : param2 > 0 ? param2 : 0);
this.colorDataCount=(this.params.isBicolorMap ? -param2 : param3 < -1 ? -param3 : param3 > 0 ? param3 : 0);
if (this.params.colorBySign) this.params.isBicolorMap=true;
var dataMin=NaN;
var dataMax=NaN;
var red=NaN;
var blue=NaN;
var insideOut=(this.line.indexOf$S("insideOut") >= 0);
if (this.jvxlDataIsColorMapped) {
dataMin=this.parseFloat$();
dataMax=this.parseFloat$();
red=this.parseFloat$();
blue=this.parseFloat$();
}this.jvxlSetColorRanges$F$F$F$F$Z(dataMin, dataMax, red, blue, insideOut);
}, p$1);

Clazz.newMeth(C$, 'readSurfaceData$Z', function (isMapDataIgnored) {
this.thisInside=!this.params.isContoured;
if (!this.readSurfaceDataXML$()) this.readSurfaceDataJXR$();
});

Clazz.newMeth(C$, 'jvxlSkipData$I$Z', function (nPoints, doSkipColorData) {
if (this.surfaceDataCount > 0) p$1.jvxlSkipDataBlock$I$Z.apply(this, [nPoints, true]);
if (this.edgeDataCount > 0) p$1.jvxlSkipDataBlock$I$Z.apply(this, [this.edgeDataCount, false]);
if (this.jvxlDataIsColorMapped && doSkipColorData ) p$1.jvxlSkipDataBlock$I$Z.apply(this, [this.colorDataCount, false]);
});

Clazz.newMeth(C$, 'jvxlSkipDataBlock$I$Z', function (nPoints, isInt) {
var n=0;
while (n < nPoints){
this.rd$();
n+=(isInt ? p$1.countData$S.apply(this, [this.line]) : $I$(5).jvxlDecompressString$S(this.line).length$());
}
}, p$1);

Clazz.newMeth(C$, 'countData$S', function (str) {
var count=0;
var n=this.parseIntStr$S(str);
while (n != -2147483648){
count+=n;
n=this.parseIntNext$S(str);
}
return count;
}, p$1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:35 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
