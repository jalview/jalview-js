(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.Normix','javajs.util.V3','org.jmol.util.Shader','javajs.util.AU','org.jmol.util.C','org.jmol.util.Font','javajs.util.P3']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GData", null, null, 'org.jmol.api.JmolGraphicsInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.changeableColixMap=Clazz.array(Short.TYPE, [16]);
this.transformedVectors=Clazz.array($I$(2), [C$.normixCount]);
},1);

C$.$fields$=[['Z',['translucentCoverOnly','currentlyRendering','antialiasEnabled','antialiasThisFrame','inGreyscaleMode','newAntialiasing','isPass2'],'I',['windowWidth','windowHeight','displayMinX','displayMaxX','displayMinY','displayMaxY','displayMinX2','displayMaxX2','displayMinY2','displayMaxY2','newWindowWidth','newWindowHeight','bgcolor','xLast','yLast','slab','depth','width','height','ambientOcclusion','argbCurrent','ht3','textY','bufferSize','argbNoisyUp','argbNoisyDn'],'H',['colixCurrent'],'O',['apiPlatform','org.jmol.api.GenericPlatform','changeableColixMap','short[]','backgroundImage','java.lang.Object','shader','org.jmol.util.Shader','vwr','org.jmol.viewer.Viewer','graphicsForMetrics','java.lang.Object','transformedVectors','javajs.util.V3[]','currentFont','org.jmol.util.Font']]
,['H',['normixCount']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.shader=Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'initialize$org_jmol_viewer_Viewer$org_jmol_api_GenericPlatform', function (vwr, apiPlatform) {
this.vwr=vwr;
this.apiPlatform=apiPlatform;
});

Clazz.newMeth(C$, 'setDepth$I', function (depthValue) {
this.depth=depthValue < 0 ? 0 : depthValue;
});

Clazz.newMeth(C$, 'setSlab$I', function (slabValue) {
this.slab=Math.max(0, slabValue);
});

Clazz.newMeth(C$, 'setSlabAndZShade$I$I$I$I$I', function (slab, depth, zSlab, zDepth, zPower) {
this.setSlab$I(slab);
this.setDepth$I(depth);
});

Clazz.newMeth(C$, 'setAmbientOcclusion$I', function (value) {
this.ambientOcclusion=value;
});

Clazz.newMeth(C$, 'isAntialiased$', function () {
return this.antialiasThisFrame;
});

Clazz.newMeth(C$, 'getChangeableColix$I$I', function (id, argb) {
if (id >= this.changeableColixMap.length) this.changeableColixMap=$I$(4).arrayCopyShort$HA$I(this.changeableColixMap, id + 16);
if (this.changeableColixMap[id] == 0) this.changeableColixMap[id]=$I$(5).getColix$I(argb);
return ($s$[0] = (id | -32768), $s$[0]);
});

Clazz.newMeth(C$, 'changeColixArgb$I$I', function (id, argb) {
if (id < this.changeableColixMap.length && this.changeableColixMap[id] != 0 ) this.changeableColixMap[id]=$I$(5).getColix$I(argb);
});

Clazz.newMeth(C$, 'getColorArgbOrGray$H', function (colix) {
if (colix < 0) colix=this.changeableColixMap[colix & 2047];
return (this.inGreyscaleMode ? $I$(5).getArgbGreyscale$H(colix) : $I$(5).getArgb$H(colix));
});

Clazz.newMeth(C$, 'getShades$H', function (colix) {
if (colix < 0) colix=this.changeableColixMap[colix & 2047];
return (this.inGreyscaleMode ? this.shader.getShadesG$H(colix) : this.shader.getShades$H(colix));
});

Clazz.newMeth(C$, 'setGreyscaleMode$Z', function (greyscaleMode) {
this.inGreyscaleMode=greyscaleMode;
});

Clazz.newMeth(C$, 'getSpecularPower$', function () {
return this.shader.specularPower;
});

Clazz.newMeth(C$, 'setSpecularPower$I', function (val) {
if (val < 0) {
this.setSpecularExponent$I(-val);
return;
}if (this.shader.specularPower == val) return;
this.shader.specularPower=val;
this.shader.intenseFraction=val / 100.0;
this.shader.flushCaches$();
});

Clazz.newMeth(C$, 'getSpecularPercent$', function () {
return this.shader.specularPercent;
});

Clazz.newMeth(C$, 'setSpecularPercent$I', function (val) {
if (this.shader.specularPercent == val) return;
this.shader.specularPercent=val;
this.shader.specularFactor=val / 100.0;
this.shader.flushCaches$();
});

Clazz.newMeth(C$, 'getSpecularExponent$', function () {
return this.shader.specularExponent;
});

Clazz.newMeth(C$, 'setSpecularExponent$I', function (val) {
if (this.shader.specularExponent == val) return;
this.shader.specularExponent=val;
this.shader.phongExponent=(Math.pow(2, val)|0);
this.shader.usePhongExponent=false;
this.shader.flushCaches$();
});

Clazz.newMeth(C$, 'getPhongExponent$', function () {
return this.shader.phongExponent;
});

Clazz.newMeth(C$, 'setPhongExponent$I', function (val) {
if (this.shader.phongExponent == val && this.shader.usePhongExponent ) return;
this.shader.phongExponent=val;
var x=(Math.log(val) / Math.log(2));
this.shader.usePhongExponent=(x != (x|0) );
if (!this.shader.usePhongExponent) this.shader.specularExponent=(x|0);
this.shader.flushCaches$();
});

Clazz.newMeth(C$, 'getDiffusePercent$', function () {
return this.shader.diffusePercent;
});

Clazz.newMeth(C$, 'setDiffusePercent$I', function (val) {
if (this.shader.diffusePercent == val) return;
this.shader.diffusePercent=val;
this.shader.diffuseFactor=val / 100.0;
this.shader.flushCaches$();
});

Clazz.newMeth(C$, 'getAmbientPercent$', function () {
return this.shader.ambientPercent;
});

Clazz.newMeth(C$, 'setAmbientPercent$I', function (val) {
if (this.shader.ambientPercent == val) return;
this.shader.ambientPercent=val;
this.shader.ambientFraction=val / 100.0;
this.shader.flushCaches$();
});

Clazz.newMeth(C$, 'getSpecular$', function () {
return this.shader.specularOn;
});

Clazz.newMeth(C$, 'setSpecular$Z', function (val) {
if (this.shader.specularOn == val ) return;
this.shader.specularOn=val;
this.shader.flushCaches$();
});

Clazz.newMeth(C$, 'setCel$Z', function (val) {
this.shader.setCel$Z$I$I(val, this.shader.celPower, this.bgcolor);
});

Clazz.newMeth(C$, 'getCel$', function () {
return this.shader.celOn;
});

Clazz.newMeth(C$, 'getCelPower$', function () {
return this.shader.celPower;
});

Clazz.newMeth(C$, 'setCelPower$I', function (celPower) {
this.shader.setCel$Z$I$I(this.shader.celOn || this.shader.celPower == 0 , celPower, this.bgcolor);
});

Clazz.newMeth(C$, 'getLightSource$', function () {
return this.shader.lightSource;
});

Clazz.newMeth(C$, 'isClipped3$I$I$I', function (x, y, z) {
return (x < 0 || x >= this.width  || y < 0  || y >= this.height  || z < this.slab  || z > this.depth );
});

Clazz.newMeth(C$, 'isClipped$I$I', function (x, y) {
return (x < 0 || x >= this.width  || y < 0  || y >= this.height );
});

Clazz.newMeth(C$, 'isInDisplayRange$I$I', function (x, y) {
return (x >= this.displayMinX && x < this.displayMaxX  && y >= this.displayMinY  && y < this.displayMaxY );
});

Clazz.newMeth(C$, 'isClippedXY$I$I$I', function (diameter, x, y) {
var r=(diameter + 1) >> 1;
return (x < -r || x >= this.width + r  || y < -r  || y >= this.height + r );
});

Clazz.newMeth(C$, 'isClippedZ$I', function (z) {
return (z != -2147483648 && (z < this.slab || z > this.depth ) );
});

Clazz.newMeth(C$, 'clipCode3$I$I$I', function (x, y, z) {
var code=0;
if (x < 0) code|=(x < this.displayMinX2 ? -1 : 8);
 else if (x >= this.width) code|=(x > this.displayMaxX2 ? -1 : 4);
if (y < 0) code|=(y < this.displayMinY2 ? -1 : 2);
 else if (y >= this.height) code|=(y > this.displayMaxY2 ? -1 : 1);
if (z < this.slab) code|=32;
 else if (z > this.depth) code|=16;
return code;
});

Clazz.newMeth(C$, 'clipCode$I', function (z) {
var code=0;
if (z < this.slab) code|=32;
 else if (z > this.depth) code|=16;
return code;
});

Clazz.newMeth(C$, 'getFont3D$F', function (fontSize) {
return $I$(6).createFont3D$I$I$F$F$org_jmol_api_FontManager$O(0, 0, fontSize, fontSize, this.apiPlatform, this.graphicsForMetrics);
});

Clazz.newMeth(C$, 'getFont3DFS$S$F', function (fontFace, fontSize) {
return $I$(6,"createFont3D$I$I$F$F$org_jmol_api_FontManager$O",[$I$(6).getFontFaceID$S(fontFace), 0, fontSize, fontSize, this.apiPlatform, this.graphicsForMetrics]);
});

Clazz.newMeth(C$, 'getFontFidFS$S$F', function (fontFace, fontSize) {
return this.getFont3DFSS$S$S$F(fontFace, "Bold", fontSize).fid;
});

Clazz.newMeth(C$, 'getFont3DFSS$S$S$F', function (fontFace, fontStyle, fontSize) {
var iStyle=$I$(6).getFontStyleID$S(fontStyle);
if (iStyle < 0) iStyle=0;
return $I$(6,"createFont3D$I$I$F$F$org_jmol_api_FontManager$O",[$I$(6).getFontFaceID$S(fontFace), iStyle, fontSize, fontSize, this.apiPlatform, this.graphicsForMetrics]);
});

Clazz.newMeth(C$, 'getFont3DScaled$org_jmol_util_Font$F', function (font, scale) {
var newScale=font.fontSizeNominal * scale;
return (newScale == font.fontSize  ? font : $I$(6).createFont3D$I$I$F$F$org_jmol_api_FontManager$O(font.idFontFace, font.idFontStyle, newScale, font.fontSizeNominal, this.apiPlatform, this.graphicsForMetrics));
});

Clazz.newMeth(C$, 'getFontFid$F', function (fontSize) {
return this.getFont3D$F(fontSize).fid;
});

Clazz.newMeth(C$, 'setBackgroundTransparent$Z', function (TF) {
});

Clazz.newMeth(C$, 'setBackgroundArgb$I', function (argb) {
this.bgcolor=argb;
this.setCel$Z(this.shader.celOn);
});

Clazz.newMeth(C$, 'setBackgroundImage$O', function (image) {
this.backgroundImage=image;
});

Clazz.newMeth(C$, 'setWindowParameters$I$I$Z', function (width, height, antialias) {
this.setWinParams$I$I$Z(width, height, antialias);
});

Clazz.newMeth(C$, 'setWinParams$I$I$Z', function (width, height, antialias) {
this.newWindowWidth=width;
this.newWindowHeight=height;
this.newAntialiasing=antialias;
});

Clazz.newMeth(C$, 'setNewWindowParametersForExport$', function () {
this.windowWidth=this.newWindowWidth;
this.windowHeight=this.newWindowHeight;
this.setWidthHeight$Z(false);
});

Clazz.newMeth(C$, 'setWidthHeight$Z', function (isAntialiased) {
this.width=this.windowWidth;
this.height=this.windowHeight;
if (isAntialiased) {
this.width<<=1;
this.height<<=1;
}this.xLast=this.width - 1;
this.yLast=this.height - 1;
this.displayMinX=-(this.width >> 1);
this.displayMaxX=this.width - this.displayMinX;
this.displayMinY=-(this.height >> 1);
this.displayMaxY=this.height - this.displayMinY;
this.displayMinX2=this.displayMinX << 2;
this.displayMaxX2=this.displayMaxX << 2;
this.displayMinY2=this.displayMinY << 2;
this.displayMaxY2=this.displayMaxY << 2;
this.ht3=this.height * 3;
this.bufferSize=this.width * this.height;
});

Clazz.newMeth(C$, 'beginRendering$javajs_util_M3$Z$Z$Z', function (stereoRotationMatrix, translucentMode, isImageWrite, renderLow) {
});

Clazz.newMeth(C$, 'endRendering$', function () {
});

Clazz.newMeth(C$, 'snapshotAnaglyphChannelBytes$', function () {
});

Clazz.newMeth(C$, 'getScreenImage$Z', function (isImageWrite) {
return null;
});

Clazz.newMeth(C$, 'releaseScreenImage$', function () {
});

Clazz.newMeth(C$, 'applyAnaglygh$org_jmol_c_STER$IA', function (stereoMode, stereoColors) {
});

Clazz.newMeth(C$, 'setPass2$Z', function (antialias) {
return false;
});

Clazz.newMeth(C$, 'destroy$', function () {
});

Clazz.newMeth(C$, 'clearFontCache$', function () {
});

Clazz.newMeth(C$, 'drawQuadrilateralBits$org_jmol_api_JmolRendererInterface$H$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (jmolRenderer, colix, screenA, screenB, screenC, screenD) {
jmolRenderer.drawLineBits$H$H$javajs_util_P3$javajs_util_P3(colix, colix, screenA, screenB);
jmolRenderer.drawLineBits$H$H$javajs_util_P3$javajs_util_P3(colix, colix, screenB, screenC);
jmolRenderer.drawLineBits$H$H$javajs_util_P3$javajs_util_P3(colix, colix, screenC, screenD);
jmolRenderer.drawLineBits$H$H$javajs_util_P3$javajs_util_P3(colix, colix, screenD, screenA);
});

Clazz.newMeth(C$, 'drawTriangleBits$org_jmol_api_JmolRendererInterface$javajs_util_P3$H$javajs_util_P3$H$javajs_util_P3$H$I', function (renderer, screenA, colixA, screenB, colixB, screenC, colixC, check) {
if ((check & 1) == 1) renderer.drawLineBits$H$H$javajs_util_P3$javajs_util_P3(colixA, colixB, screenA, screenB);
if ((check & 2) == 2) renderer.drawLineBits$H$H$javajs_util_P3$javajs_util_P3(colixB, colixC, screenB, screenC);
if ((check & 4) == 4) renderer.drawLineBits$H$H$javajs_util_P3$javajs_util_P3(colixC, colixA, screenC, screenA);
});

Clazz.newMeth(C$, 'plotImage$I$I$I$O$org_jmol_api_JmolRendererInterface$H$I$I', function (x, y, z, image, jmolRenderer, bgcolix, width, height) {
});

Clazz.newMeth(C$, 'plotText$I$I$I$I$I$S$org_jmol_util_Font$org_jmol_api_JmolRendererInterface', function (x, y, z, colorArgbOrGray, bgColor, text, font3d, jmolRenderer) {
});

Clazz.newMeth(C$, 'renderBackground$org_jmol_api_JmolRendererInterface', function (jmolRenderer) {
});

Clazz.newMeth(C$, 'setFont$org_jmol_util_Font', function (font3d) {
});

Clazz.newMeth(C$, 'setFontFid$B', function (fid) {
});

Clazz.newMeth(C$, 'setColor$I', function (argb) {
this.argbCurrent=this.argbNoisyUp=this.argbNoisyDn=argb;
});

Clazz.newMeth(C$, 'setC$H', function (colix) {
return true;
});

Clazz.newMeth(C$, 'isDirectedTowardsCamera$H', function (normix) {
return (normix < 0) || (this.transformedVectors[normix].z > 0 ) ;
});

Clazz.newMeth(C$, 'roundInt$I', function (a) {
{
return a;
}}, 1);

Clazz.newMeth(C$, 'clear$', function () {
});

Clazz.newMeth(C$, 'renderAllStrings$O', function (jmolRenderer) {
});

Clazz.newMeth(C$, 'addRenderer$I', function (tok) {
});

Clazz.newMeth(C$, 'getHermiteList$I$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3A$I$I$Z', function (tension, p0, p1, p2, p3, p4, list, index0, n, isPt) {
var nPoints=n + 1;
var fnPoints=n - 1;
var x1=p1.x;
var y1=p1.y;
var z1=p1.z;
var x2=p2.x;
var y2=p2.y;
var z2=p2.z;
var xT1=((x2 - p0.x) * tension) / 8;
var yT1=((y2 - p0.y) * tension) / 8;
var zT1=((z2 - p0.z) * tension) / 8;
var xT2=((p3.x - x1) * tension) / 8;
var yT2=((p3.y - y1) * tension) / 8;
var zT2=((p3.z - z1) * tension) / 8;
var xT3=((p4.x - x2) * tension) / 8;
var yT3=((p4.y - y2) * tension) / 8;
var zT3=((p4.z - z2) * tension) / 8;
list[index0]=p1;
for (var i=0; i < nPoints; i++) {
var s=i / fnPoints;
if (i == nPoints - 1) {
x1=x2;
y1=y2;
z1=z2;
x2=p3.x;
y2=p3.y;
z2=p3.z;
xT1=xT2;
yT1=yT2;
zT1=zT2;
xT2=xT3;
yT2=yT3;
zT2=zT3;
s -= 1;
}var s2=s * s;
var s3=s2 * s;
var h1=2 * s3 - 3 * s2 + 1;
var h2=-2 * s3 + 3 * s2;
var h3=s3 - 2 * s2 + s;
var h4=s3 - s2;
var x=(h1 * x1 + h2 * x2 + h3 * xT1 + h4 * xT2);
var y=(h1 * y1 + h2 * y2 + h3 * yT1 + h4 * yT2);
var z=(h1 * z1 + h2 * z2 + h3 * zT1 + h4 * zT2);
list[index0 + i]=(isPt ? $I$(7).new3$F$F$F(x, y, z) : $I$(2).new3$F$F$F(x, y, z));
}
}, 1);

Clazz.newMeth(C$, 'setTextPosition$I', function (y) {
this.textY=y;
});

Clazz.newMeth(C$, 'getTextPosition$', function () {
return this.textY;
});

Clazz.newMeth(C$, 'getTransformedVertexVectors$', function () {
return this.transformedVectors;
});

Clazz.newMeth(C$, 'getFont3DCurrent$', function () {
return this.currentFont;
});

C$.$static$=function(){C$.$static$=0;
C$.normixCount=$I$(1).getNormixCount$();
};
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
