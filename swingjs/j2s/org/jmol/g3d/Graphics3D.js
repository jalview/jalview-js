(function(){var P$=Clazz.newPackage("org.jmol.g3d"),p$1={},I$=[[0,'javajs.util.P3i','javajs.util.V3','org.jmol.util.GData','org.jmol.g3d.TextRenderer','org.jmol.g3d.Platform3D','org.jmol.g3d.Pixelator','org.jmol.g3d.LineRenderer','org.jmol.g3d.SphereRenderer','org.jmol.g3d.CylinderRenderer','org.jmol.api.Interface','org.jmol.g3d.PixelatorT','org.jmol.c.STER','org.jmol.g3d.PixelatorShaded','org.jmol.util.C','org.jmol.g3d.PixelatorScreened','org.jmol.g3d.TextString','javajs.util.AU','java.util.Arrays','javajs.awt.Font','org.jmol.util.Normix']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Graphics3D", null, 'org.jmol.util.GData', 'org.jmol.api.JmolRendererInterface');
C$.sort=null;
C$.nullShadeIndex=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.nullShadeIndex=($b$[0] = 50, $b$[0]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.platform=null;
this.line3d=null;
this.sphere3d=null;
this.cylinder3d=null;
this.triangle3d=null;
this.circle3d=null;
this.hermite3d=null;
this.isFullSceneAntialiasingEnabled=false;
this.antialias2=false;
this.strings=null;
this.stringCount=0;
this.anaglyphChannelBytes=null;
this.twoPass=false;
this.haveTranslucentObjects=false;
this.pbuf=null;
this.pbufT=null;
this.zbuf=null;
this.zbufT=null;
this.translucencyMask=0;
this.renderLow=false;
this.shadesCurrent=null;
this.anaglyphLength=0;
this.pixel=null;
this.pixel0=null;
this.pixelT0=null;
this.pixelScreened=null;
this.pixelShaded=null;
this.zMargin=0;
this.aobuf=null;
this.currentShadeIndex=0;
this.lastRawColor=0;
this.translucencyLog=0;
this.wasScreened=false;
this.saveAmbient=0;
this.saveDiffuse=0;
this.sA=null;
this.sB=null;
this.sC=null;
this.vectorAB=null;
this.vectorAC=null;
this.vectorNormal=null;
this.shadeIndexes=null;
this.shadeIndexes2Sided=null;
this.pass2Flag01=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.strings=null;
this.twoPass=false;
this.sA=Clazz.new_($I$(1));
this.sB=Clazz.new_($I$(1));
this.sC=Clazz.new_($I$(1));
this.vectorAB=Clazz.new_($I$(2));
this.vectorAC=Clazz.new_($I$(2));
this.vectorNormal=Clazz.new_($I$(2));
this.shadeIndexes=Clazz.array(Byte.TYPE, [$I$(3).normixCount]);
this.shadeIndexes2Sided=Clazz.array(Byte.TYPE, [$I$(3).normixCount]);
}, 1);

Clazz.newMeth(C$, 'isWebGL$', function () {
return false;
});

Clazz.newMeth(C$, 'clear$', function () {
this.stringCount=0;
this.strings=null;
$I$(4).clearFontCache$();
});

Clazz.newMeth(C$, 'destroy$', function () {
p$1.releaseBuffers.apply(this, []);
this.platform=null;
this.pixel=this.pixel0=this.pixelShaded=null;
this.pixelT0=null;
this.pixelScreened=null;
this.graphicsForMetrics=null;
});

Clazz.newMeth(C$, 'setZMargin$I', function (dz) {
this.zMargin=dz;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
for (var i=$I$(3).normixCount; --i >= 0; ) this.transformedVectors[i]=Clazz.new_($I$(2));

}, 1);

Clazz.newMeth(C$, 'initialize$org_jmol_viewer_Viewer$org_jmol_api_GenericPlatform', function (vwr, apiPlatform) {
this.vwr=vwr;
this.apiPlatform=apiPlatform;
this.platform=Clazz.new_($I$(5).c$$org_jmol_api_GenericPlatform,[apiPlatform]);
this.pixel=this.pixel0=Clazz.new_($I$(6).c$$org_jmol_g3d_Graphics3D,[this]);
this.graphicsForMetrics=this.platform.getGraphicsForMetrics$();
this.line3d=Clazz.new_($I$(7).c$$org_jmol_g3d_Graphics3D,[this]);
this.sphere3d=Clazz.new_($I$(8).c$$org_jmol_g3d_Graphics3D,[this]);
this.cylinder3d=Clazz.new_($I$(9).c$$org_jmol_g3d_Graphics3D,[this]);
});

Clazz.newMeth(C$, 'addRenderer$I', function (tok) {
switch (tok) {
case 1073741880:
if (this.circle3d == null ) this.circle3d=p$1.getRenderer$S.apply(this, ["Circle"]);
break;
case 553648146:
if (this.hermite3d == null ) this.hermite3d=p$1.getRenderer$S.apply(this, ["Hermite"]);
case 1073742182:
if (this.triangle3d == null ) {
this.triangle3d=p$1.getRenderer$S.apply(this, ["Triangle"]);
(this.triangle3d).isOrthographic=!this.vwr.tm.perspectiveDepth;
}break;
}
});

Clazz.newMeth(C$, 'getRenderer$S', function (type) {
var r=($I$(10).getOption$S$org_jmol_viewer_Viewer$S("g3d." + type + "Renderer" , this.vwr, "render"));
if (r == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Interface"]);
r.set$(this, this);
return r;
}, p$1);

Clazz.newMeth(C$, 'setWindowParameters$I$I$Z', function (width, height, antialias) {
this.setWinParams$I$I$Z(width, height, antialias);
if (this.currentlyRendering) this.endRendering$();
});

Clazz.newMeth(C$, 'checkTranslucent$Z', function (isAlphaTranslucent) {
if (isAlphaTranslucent) this.haveTranslucentObjects=true;
return (!this.twoPass || this.twoPass && (this.isPass2 == isAlphaTranslucent )  );
});

Clazz.newMeth(C$, 'beginRendering$javajs_util_M3$Z$Z$Z', function (rotationMatrix, translucentMode, isImageWrite, renderLow) {
if (this.currentlyRendering) this.endRendering$();
this.renderLow=renderLow;
if (this.windowWidth != this.newWindowWidth || this.windowHeight != this.newWindowHeight  || this.newAntialiasing != this.isFullSceneAntialiasingEnabled  ) {
this.windowWidth=this.newWindowWidth;
this.windowHeight=this.newWindowHeight;
this.isFullSceneAntialiasingEnabled=this.newAntialiasing;
p$1.releaseBuffers.apply(this, []);
}this.setRotationMatrix$javajs_util_M3(rotationMatrix);
(this.line3d).isOrthographic=!this.vwr.tm.perspectiveDepth;
if (this.triangle3d != null ) (this.triangle3d).isOrthographic=!this.vwr.tm.perspectiveDepth;
this.antialiasEnabled=this.antialiasThisFrame=this.newAntialiasing;
this.currentlyRendering=true;
if (this.strings != null ) for (var i=Math.min(this.strings.length, this.stringCount); --i >= 0; ) this.strings[i]=null;

this.stringCount=0;
this.twoPass=true;
this.isPass2=false;
this.pass2Flag01=0;
this.colixCurrent=($s$[0] = 0, $s$[0]);
this.haveTranslucentObjects=this.wasScreened=false;
this.pixel=this.pixel0;
this.pixel.bgcolor=this.bgcolor;
this.translucentCoverOnly=!translucentMode;
if (this.pbuf == null ) {
this.platform.allocateBuffers$I$I$Z$Z(this.windowWidth, this.windowHeight, this.antialiasThisFrame, isImageWrite);
this.pbuf=this.platform.pBuffer;
this.zbuf=this.platform.zBuffer;
this.aobuf=null;
this.pixel0.setBuf$();
if (this.pixelT0 != null ) this.pixelT0.setBuf$();
if (this.pixelShaded != null ) this.pixelShaded.setBuf$();
}this.setWidthHeight$Z(this.antialiasThisFrame);
if (this.pixelScreened != null ) this.pixelScreened.width=this.width;
this.platform.clearBuffer$();
if (this.backgroundImage != null ) this.plotImage$I$I$I$O$org_jmol_api_JmolRendererInterface$H$I$I(-2147483648, 0, -2147483648, this.backgroundImage, null, 0, 0, 0);
this.textY=0;
});

Clazz.newMeth(C$, 'setBackgroundTransparent$Z', function (TF) {
if (this.platform != null ) this.platform.setBackgroundTransparent$Z(TF);
});

Clazz.newMeth(C$, 'releaseBuffers', function () {
this.pbuf=null;
this.zbuf=null;
this.pbufT=null;
this.zbufT=null;
this.aobuf=null;
this.platform.releaseBuffers$();
this.line3d.clearLineCache$();
}, p$1);

Clazz.newMeth(C$, 'setPass2$Z', function (antialiasTranslucent) {
if (!this.haveTranslucentObjects || !this.currentlyRendering ) return false;
this.isPass2=true;
this.pass2Flag01=1;
this.colixCurrent=($s$[0] = 0, $s$[0]);
if (this.pbufT == null  || this.antialias2 != antialiasTranslucent  ) {
this.platform.allocateTBuffers$Z(antialiasTranslucent);
this.pbufT=this.platform.pBufferT;
this.zbufT=this.platform.zBufferT;
}this.antialias2=antialiasTranslucent;
if (this.antialiasThisFrame && !this.antialias2 ) p$1.downsampleFullSceneAntialiasing$Z.apply(this, [true]);
this.platform.clearTBuffer$();
if (this.pixelT0 == null ) this.pixelT0=Clazz.new_($I$(11).c$$org_jmol_g3d_Graphics3D,[this]);
if (this.pixel.p0 == null ) this.pixel=this.pixelT0;
 else this.pixel.p0=this.pixelT0;
return true;
});

Clazz.newMeth(C$, 'endRendering$', function () {
if (!this.currentlyRendering) return;
if (this.pbuf != null ) {
if (this.isPass2 && this.pbufT != null  ) for (var offset=this.pbufT.length; --offset >= 0; ) this.pbuf[offset]=C$.mergeBufferPixel$I$I$I(this.pbuf[offset], this.pbufT[offset], this.bgcolor);

if (this.pixel === this.pixelShaded  && this.pixelShaded.zShadePower == 0 ) this.pixelShaded.showZBuffer$();
if (this.antialiasThisFrame) p$1.downsampleFullSceneAntialiasing$Z.apply(this, [false]);
}this.platform.setBackgroundColor$I(this.bgcolor);
this.platform.notifyEndOfRendering$();
this.currentlyRendering=this.isPass2=false;
});

Clazz.newMeth(C$, 'mergeBufferPixel$I$I$I', function (argbA, argbB, bgcolor) {
if (argbB == 0 || argbA == argbB ) return argbA;
if (argbA == 0) argbA=bgcolor;
var rbA=(argbA & 16711935);
var gA=(argbA & 65280);
var rbB=(argbB & 16711935);
var gB=(argbB & 65280);
var logAlpha=(argbB >> 24) & 15;
switch (logAlpha) {
case 0:
rbA=rbB;
gA=gB;
break;
case 1:
rbA=(((rbB << 2) + (rbB << 1) + rbB + rbA ) >> 3) & 16711935;
gA=(((gB << 2) + +(gB << 1) + gB + gA ) >> 3) & 65280;
break;
case 2:
rbA=(((rbB << 1) + rbB + rbA ) >> 2) & 16711935;
gA=(((gB << 1) + gB + gA ) >> 2) & 65280;
break;
case 3:
rbA=(((rbB << 2) + rbB + (rbA << 1) + rbA ) >> 3) & 16711935;
gA=(((gB << 2) + gB + (gA << 1) + gA ) >> 3) & 65280;
break;
case 4:
rbA=((rbA + rbB) >> 1) & 16711935;
gA=((gA + gB) >> 1) & 65280;
break;
case 5:
rbA=(((rbB << 1) + rbB + (rbA << 2) + rbA ) >> 3) & 16711935;
gA=(((gB << 1) + gB + (gA << 2) + gA ) >> 3) & 65280;
break;
case 6:
rbA=(((rbA << 1) + rbA + rbB ) >> 2) & 16711935;
gA=(((gA << 1) + gA + gB ) >> 2) & 65280;
break;
case 7:
rbA=(((rbA << 2) + (rbA << 1) + rbA + rbB ) >> 3) & 16711935;
gA=(((gA << 2) + (gA << 1) + gA + gB ) >> 3) & 65280;
break;
}
return -16777216 | rbA | gA ;
}, 1);

Clazz.newMeth(C$, 'getScreenImage$Z', function (isImageWrite) {
var obj=this.platform.bufferedImage;
var dorelease=isImageWrite ||false;

obj._img = null;
if (!dorelease) obj._buf = true;
if (dorelease) p$1.releaseBuffers.apply(this, []);
return obj;
});

Clazz.newMeth(C$, 'drawDirect$O', function (g) {

g.drawDirectRGBA$IA(this.pbuf);
});

Clazz.newMeth(C$, 'applyAnaglygh$org_jmol_c_STER$IA', function (stereoMode, stereoColors) {
switch (stereoMode) {
case $I$(12).REDCYAN:
for (var i=this.anaglyphLength; --i >= 0; ) {
var blue=this.anaglyphChannelBytes[i] & 255;
var cyan=(blue << 8) | blue;
this.pbuf[i]=this.pbuf[i] & -65536 | cyan;
}
break;
case $I$(12).CUSTOM:
var color1=stereoColors[0];
var color2=stereoColors[1] & 16777215;
for (var i=this.anaglyphLength; --i >= 0; ) {
var a=this.anaglyphChannelBytes[i] & 255;
a=(a | ((a | (a << 8)) << 8)) & color2;
this.pbuf[i]=(this.pbuf[i] & color1) | a;
}
break;
case $I$(12).REDBLUE:
for (var i=this.anaglyphLength; --i >= 0; ) {
var blue=this.anaglyphChannelBytes[i] & 255;
this.pbuf[i]=(this.pbuf[i] & -65536) | blue;
}
break;
case $I$(12).REDGREEN:
for (var i=this.anaglyphLength; --i >= 0; ) {
var green=(this.anaglyphChannelBytes[i] & 255) << 8;
this.pbuf[i]=(this.pbuf[i] & -65536) | green;
}
break;
case $I$(12).DTI:
case $I$(12).DOUBLE:
case $I$(12).NONE:
break;
}
});

Clazz.newMeth(C$, 'snapshotAnaglyphChannelBytes$', function () {
if (this.currentlyRendering) throw Clazz.new_(Clazz.load('NullPointerException'));
this.anaglyphLength=this.windowWidth * this.windowHeight;
if (this.anaglyphChannelBytes == null  || this.anaglyphChannelBytes.length != this.anaglyphLength ) this.anaglyphChannelBytes=Clazz.array(Byte.TYPE, [this.anaglyphLength]);
for (var i=this.anaglyphLength; --i >= 0; ) this.anaglyphChannelBytes[i]=((this.pbuf[i]|0)|0);

});

Clazz.newMeth(C$, 'releaseScreenImage$', function () {
this.platform.clearScreenBufferThreaded$();
});

Clazz.newMeth(C$, 'haveTranslucentObjects$', function () {
return this.haveTranslucentObjects;
});

Clazz.newMeth(C$, 'setSlabAndZShade$I$I$I$I$I', function (slabValue, depthValue, zSlab, zDepth, zShadePower) {
this.setSlab$I(slabValue);
this.setDepth$I(depthValue);
if (zSlab < zDepth) {
if (this.pixelShaded == null ) this.pixelShaded=Clazz.new_($I$(13).c$$org_jmol_g3d_Graphics3D,[this]);
this.pixel=this.pixelShaded.set$I$I$I(zSlab, zDepth, zShadePower);
} else {
this.pixel=this.pixel0;
}});

Clazz.newMeth(C$, 'downsampleFullSceneAntialiasing$Z', function (downsampleZBuffer) {
var bgcheck=this.bgcolor;
if (downsampleZBuffer) bgcheck+=((bgcheck & 255) == 255 ? -1 : 1);
C$.downsample2d$IA$I$I$I(this.pbuf, this.windowWidth, this.windowHeight, bgcheck);
if (downsampleZBuffer) {
C$.downsample2dZ$IA$IA$I$I$I(this.pbuf, this.zbuf, this.windowWidth, this.windowHeight, bgcheck);
this.antialiasThisFrame=false;
this.setWidthHeight$Z(false);
}}, p$1);

Clazz.newMeth(C$, 'downsample2d$IA$I$I$I', function (pbuf, width, height, bgcheck) {
var width4=width << 1;
if (bgcheck != 0) {
bgcheck&=16777215;
for (var i=pbuf.length; --i >= 0; ) if (pbuf[i] == 0) pbuf[i]=bgcheck;

}var bg0=((bgcheck >> 2) & 1061109567) << 2;
bg0+=(bg0 & -1061109568) >> 6;
var offset1=0;
var offset4=0;
for (var i=height; --i >= 0; offset4+=width4) for (var j=width; --j >= 0; ++offset1) {
var argb=((pbuf[offset4] >> 2) & 1061109567) + ((pbuf[offset4++ + width4] >> 2) & 1061109567) + ((pbuf[offset4] >> 2) & 1061109567) + ((pbuf[offset4++ + width4] >> 2) & 1061109567) ;
argb+=(argb & -1061109568) >> 6;
if (argb == bg0) argb=bgcheck;
{
pbuf[offset1] = argb & 0x00FFFFFF | 0xFF000000;
}
}

}, 1);

Clazz.newMeth(C$, 'downsample2dZ$IA$IA$I$I$I', function (pbuf, zbuf, width, height, bgcheck) {
var width4=width << 1;
var offset1=0;
var offset4=0;
for (var i=height; --i >= 0; offset4+=width4) for (var j=width; --j >= 0; ++offset1, ++offset4) {
var z=Math.min(zbuf[offset4], zbuf[offset4 + width4]);
z=Math.min(z, zbuf[++offset4]);
z=Math.min(z, zbuf[offset4 + width4]);
if (z != 2147483647) z>>=1;
zbuf[offset1]=(pbuf[offset1] == bgcheck ? 2147483647 : z);
}

}, 1);

Clazz.newMeth(C$, 'hasContent$', function () {
return this.platform.hasContent$();
});

Clazz.newMeth(C$, 'setC$H', function (colix) {
var isLast=$I$(14).isColixLastAvailable$H(colix);
if (!isLast && colix == this.colixCurrent  && this.currentShadeIndex == -1 ) return true;
var mask=colix & 30720;
if (mask == 16384) return false;
if (this.renderLow) mask=0;
var isTranslucent=(mask != 0);
var isScreened=(isTranslucent && mask == 30720 );
this.setScreened$Z(isScreened);
if (!this.checkTranslucent$Z(isTranslucent && !isScreened )) return false;
if (this.isPass2) {
this.translucencyMask=(mask << 13) | 16777215;
this.translucencyLog=mask >> 11;
} else {
this.translucencyLog=0;
}this.colixCurrent=colix;
if (isLast) {
if (this.argbCurrent != this.lastRawColor) {
if (this.argbCurrent == 0) this.argbCurrent=-1;
this.lastRawColor=this.argbCurrent;
this.shader.setLastColix$I$Z(this.argbCurrent, this.inGreyscaleMode);
}}this.shadesCurrent=this.getShades$H(colix);
this.currentShadeIndex=-1;
this.setColor$I(this.getColorArgbOrGray$H(colix));
return true;
});

Clazz.newMeth(C$, 'setScreened$Z', function (isScreened) {
if (this.wasScreened != isScreened ) {
this.wasScreened=isScreened;
if (isScreened) {
if (this.pixelScreened == null ) this.pixelScreened=Clazz.new_($I$(15).c$$org_jmol_g3d_Graphics3D$org_jmol_g3d_Pixelator,[this, this.pixel0]);
if (this.pixel.p0 == null ) this.pixel=this.pixelScreened;
 else this.pixel.p0=this.pixelScreened;
} else if (this.pixel.p0 == null  || this.pixel === this.pixelScreened  ) {
this.pixel=(this.isPass2 ? this.pixelT0 : this.pixel0);
} else {
this.pixel.p0=(this.isPass2 ? this.pixelT0 : this.pixel0);
}}return this.pixel;
});

Clazz.newMeth(C$, 'drawFilledCircle$H$H$I$I$I$I', function (colixRing, colixFill, diameter, x, y, z) {
if (this.isClippedZ$I(z)) return;
var r=((diameter + 1)/2|0);
var isClipped=x < r || x + r >= this.width  || y < r  || y + r >= this.height ;
if (isClipped && this.isClippedXY$I$I$I(diameter, x, y) ) return;
if (colixRing != 0 && this.setC$H(colixRing) ) {
if (isClipped) {
if (!this.isClippedXY$I$I$I(diameter, x, y)) (this.circle3d).plotCircleCenteredClipped$I$I$I$I(x, y, z, diameter);
} else {
(this.circle3d).plotCircleCenteredUnclipped$I$I$I$I(x, y, z, diameter);
}}if (colixFill != 0 && this.setC$H(colixFill) ) {
if (isClipped) (this.circle3d).plotFilledCircleCenteredClipped$I$I$I$I(x, y, z, diameter);
 else (this.circle3d).plotFilledCircleCenteredUnclipped$I$I$I$I(x, y, z, diameter);
}});

Clazz.newMeth(C$, 'volumeRender4$I$I$I$I', function (diameter, x, y, z) {
if (diameter == 1) {
this.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbCurrent, x, y, z, this.width, this.zbuf, this.pixel);
return;
}if (this.isClippedZ$I(z)) return;
var r=((diameter + 1)/2|0);
var isClipped=x < r || x + r >= this.width  || y < r  || y + r >= this.height ;
if (isClipped && this.isClippedXY$I$I$I(diameter, x, y) ) return;
if (isClipped) (this.circle3d).plotFilledCircleCenteredClipped$I$I$I$I(x, y, z, diameter);
 else (this.circle3d).plotFilledCircleCenteredUnclipped$I$I$I$I(x, y, z, diameter);
});

Clazz.newMeth(C$, 'fillSphereXYZ$I$I$I$I', function (diameter, x, y, z) {
switch (diameter) {
case 1:
this.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbCurrent, x, y, z, this.width, this.zbuf, this.pixel);
return;
case 0:
return;
}
if (diameter <= (this.antialiasThisFrame ? 2000 : 1000)) this.sphere3d.render$IA$I$I$I$I$javajs_util_M3$DA$javajs_util_M4$I$javajs_util_P3A(this.shadesCurrent, diameter, x, y, z, null, null, null, -1, null);
});

Clazz.newMeth(C$, 'volumeRender$Z', function (TF) {
if (TF) {
this.saveAmbient=this.getAmbientPercent$();
this.saveDiffuse=this.getDiffusePercent$();
this.setAmbientPercent$I(100);
this.setDiffusePercent$I(0);
this.addRenderer$I(1073741880);
} else {
this.setAmbientPercent$I(this.saveAmbient);
this.setDiffusePercent$I(this.saveDiffuse);
}});

Clazz.newMeth(C$, 'fillSphereI$I$javajs_util_P3i', function (diameter, center) {
this.fillSphereXYZ$I$I$I$I(diameter, center.x, center.y, center.z);
});

Clazz.newMeth(C$, 'fillSphereBits$I$javajs_util_P3', function (diameter, center) {
this.fillSphereXYZ$I$I$I$I(diameter, Math.round(center.x), Math.round(center.y), Math.round(center.z));
});

Clazz.newMeth(C$, 'fillEllipsoid$javajs_util_P3$javajs_util_P3A$I$I$I$I$javajs_util_M3$DA$javajs_util_M4$I$javajs_util_P3A', function (center, points, x, y, z, diameter, mToEllipsoidal, coef, mDeriv, selectedOctant, octantPoints) {
switch (diameter) {
case 1:
this.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbCurrent, x, y, z, this.width, this.zbuf, this.pixel);
return;
case 0:
return;
}
if (diameter <= (this.antialiasThisFrame ? 2000 : 1000)) this.sphere3d.render$IA$I$I$I$I$javajs_util_M3$DA$javajs_util_M4$I$javajs_util_P3A(this.shadesCurrent, diameter, x, y, z, mToEllipsoidal, coef, mDeriv, selectedOctant, octantPoints);
});

Clazz.newMeth(C$, 'drawRect$I$I$I$I$I$I', function (x, y, z, zSlab, rWidth, rHeight) {
if (zSlab != 0 && this.isClippedZ$I(zSlab) ) return;
var w=rWidth - 1;
var h=rHeight - 1;
var xRight=x + w;
var yBottom=y + h;
if (y >= 0 && y < this.height ) p$1.drawHLine$I$I$I$I.apply(this, [x, y, z, w]);
if (yBottom >= 0 && yBottom < this.height ) p$1.drawHLine$I$I$I$I.apply(this, [x, yBottom, z, w]);
if (x >= 0 && x < this.width ) p$1.drawVLine$I$I$I$I.apply(this, [x, y, z, h]);
if (xRight >= 0 && xRight < this.width ) p$1.drawVLine$I$I$I$I.apply(this, [xRight, y, z, h]);
});

Clazz.newMeth(C$, 'drawHLine$I$I$I$I', function (x, y, z, w) {
if (w < 0) {
x+=w;
w=-w;
}if (x < 0) {
w+=x;
x=0;
}if (x + w >= this.width) w=this.width - 1 - x ;
var p=this.pixel;
var c=this.argbCurrent;
var offset=x + this.width * y;
for (var i=0; i <= w; i++) {
if (z < this.zbuf[offset]) p.addPixel$I$I$I(offset, z, c);
offset++;
}
}, p$1);

Clazz.newMeth(C$, 'drawVLine$I$I$I$I', function (x, y, z, h) {
if (h < 0) {
y+=h;
h=-h;
}if (y < 0) {
h+=y;
y=0;
}if (y + h >= this.height) {
h=this.height - 1 - y ;
}var offset=x + this.width * y;
var p=this.pixel;
var c=this.argbCurrent;
for (var i=0; i <= h; i++) {
if (z < this.zbuf[offset]) p.addPixel$I$I$I(offset, z, c);
offset+=this.width;
}
}, p$1);

Clazz.newMeth(C$, 'fillTextRect$I$I$I$I$I$I', function (x, y, z, zSlab, widthFill, heightFill) {
if (this.isClippedZ$I(zSlab)) return;
var w=this.width;
if (x < 0) {
widthFill+=x;
if (widthFill <= 0) return;
x=0;
}if (x + widthFill > w) {
widthFill=w - x;
if (widthFill <= 0) return;
}if (y < 0) {
heightFill+=y;
if (heightFill <= 0) return;
y=0;
}if (y + heightFill > this.height) heightFill=this.height - y;
var c=this.argbCurrent;
var zb=this.zbuf;
var p=this.pixel;
while (--heightFill >= 0)this.plotPixelsUnclippedCount$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, widthFill, x, y++, z, w, zb, p);

});

Clazz.newMeth(C$, 'drawString$S$javajs_awt_Font$I$I$I$I$H', function (str, font3d, xBaseline, yBaseline, z, zSlab, bgColix) {
this.currentShadeIndex=0;
if (str == null ) return;
if (this.isClippedZ$I(zSlab)) return;
this.drawStringNoSlab$S$javajs_awt_Font$I$I$I$H(str, font3d, xBaseline, yBaseline, z, bgColix);
});

Clazz.newMeth(C$, 'drawStringNoSlab$S$javajs_awt_Font$I$I$I$H', function (str, font3d, xBaseline, yBaseline, z, bgColix) {
if (str == null ) return;
if (this.strings == null ) this.strings=Clazz.array($I$(16), [10]);
if (this.stringCount == this.strings.length) this.strings=$I$(17).doubleLength$O(this.strings);
var t=Clazz.new_($I$(16));
t.setText$S$javajs_awt_Font$I$I$I$I$I(str, font3d == null  ? this.currentFont : (this.currentFont=font3d), this.argbCurrent, $I$(14).isColixTranslucent$H(bgColix) ? (this.getColorArgbOrGray$H(bgColix) & 16777215) | ((bgColix & 30720) << 13) : 0, xBaseline, yBaseline, z);
this.strings[this.stringCount++]=t;
});

Clazz.newMeth(C$, 'renderAllStrings$O', function (jmolRenderer) {
if (this.strings == null ) return;
if (this.stringCount >= 2) {
if (C$.sort == null ) C$.sort=Clazz.new_($I$(16));
$I$(18).sort$TTA$java_util_Comparator(this.strings, C$.sort);
}for (var i=0; i < this.stringCount; i++) {
var ts=this.strings[i];
this.plotText$I$I$I$I$I$S$javajs_awt_Font$org_jmol_api_JmolRendererInterface(ts.x, ts.y, ts.z, ts.argb, ts.bgargb, ts.text, ts.font, jmolRenderer);
}
this.strings=null;
this.stringCount=0;
});

Clazz.newMeth(C$, 'plotText$I$I$I$I$I$S$javajs_awt_Font$org_jmol_api_JmolRendererInterface', function (x, y, z, argb, bgargb, text, font3d, jmolRenderer) {
$I$(4).plot$I$I$I$I$I$S$javajs_awt_Font$org_jmol_g3d_Graphics3D$org_jmol_api_JmolRendererInterface$Z(x, y, z, argb, bgargb, text, font3d, this, jmolRenderer, this.antialiasThisFrame);
});

Clazz.newMeth(C$, 'drawImage$O$I$I$I$I$H$I$I', function (objImage, x, y, z, zSlab, bgcolix, width, height) {
if (objImage != null  && width > 0  && height > 0  && !this.isClippedZ$I(zSlab) ) this.plotImage$I$I$I$O$org_jmol_api_JmolRendererInterface$H$I$I(x, y, z, objImage, null, bgcolix, width, height);
});

Clazz.newMeth(C$, 'plotImage$I$I$I$O$org_jmol_api_JmolRendererInterface$H$I$I', function (x, y, z, image, jmolRenderer, bgcolix, imageWidth, imageHeight) {
this.setC$H(bgcolix);
if (!this.isPass2) this.translucencyMask=-1;
if (bgcolix == 0) this.argbCurrent=0;
var isBackground=(x == -2147483648);
var bg=(isBackground ? this.bgcolor : this.argbCurrent);
if (isBackground) {
x=0;
z=2147483646;
imageWidth=this.width;
imageHeight=this.height;
}if (x + imageWidth <= 0 || x >= this.width  || y + imageHeight <= 0  || y >= this.height ) return;
var g;
{
g = null;
}
var buffer=this.apiPlatform.drawImageToBuffer$O$O$O$I$I$I(g, this.platform.offscreenImage, image, imageWidth, imageHeight, isBackground ? bg : 0);
if (buffer == null ) return;
var zb=this.zbuf;
var w=this.width;
var p=this.pixel;
var h=this.height;
var t=this.translucencyLog;
if (jmolRenderer == null  && (x >= 0 && x + imageWidth <= w  && y >= 0  && y + imageHeight <= h ) ) {
for (var i=0, offset=0, pbufOffset=y * w + x; i < imageHeight; i++, pbufOffset+=(w - imageWidth)) {
for (var j=0; j < imageWidth; j++, offset++, pbufOffset++) {
if (z < zb[pbufOffset]) {
var b=buffer[offset];
if ((b & -16777216) == (-16777216)) p.addPixel$I$I$I(pbufOffset, z, b);
}}
}
} else {
if (jmolRenderer == null ) jmolRenderer=this;
for (var i=0, offset=0; i < imageHeight; i++) for (var j=0; j < imageWidth; j++) {
var b=buffer[offset++];
if ((b & -16777216) == (-16777216)) jmolRenderer.plotImagePixel$I$I$I$I$B$I$I$I$IA$O$I(b, x + j, y + i, z, ($b$[0] = 8, $b$[0]), bg, w, h, zb, p, t);
}

}});

Clazz.newMeth(C$, 'setFontFid$B', function (fid) {
this.currentFont=$I$(19).getFont3D$B(($b$[0] = fid, $b$[0]));
});

Clazz.newMeth(C$, 'setFont$javajs_awt_Font', function (font3d) {
this.currentFont=font3d;
});

Clazz.newMeth(C$, 'drawPixel$I$I$I', function (x, y, z) {
this.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbCurrent, x, y, z, this.width, this.zbuf, this.pixel);
});

Clazz.newMeth(C$, 'drawPoints$I$IA$I', function (count, coordinates, scale) {
if (scale > 1) {
var s2=scale * scale * 0.8 ;
for (var i=-scale; i < scale; i++) {
for (var j=-scale; j < scale; j++) {
if (i * i + j * j > s2 ) continue;
p$1.plotPoints$I$IA$I$I.apply(this, [count, coordinates, i, j]);
p$1.plotPoints$I$IA$I$I.apply(this, [count, coordinates, i, j]);
}
}
} else {
p$1.plotPoints$I$IA$I$I.apply(this, [count, coordinates, 0, 0]);
}});

Clazz.newMeth(C$, 'drawDashedLineBits$I$I$javajs_util_P3$javajs_util_P3', function (run, rise, pointA, pointB) {
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [pointA, this.sA]);
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [pointB, this.sB]);
this.line3d.plotLineBits$I$I$javajs_util_P3i$javajs_util_P3i$I$I$Z(this.argbCurrent, this.argbCurrent, this.sA, this.sB, run, rise, true);
});

Clazz.newMeth(C$, 'setScreeni$javajs_util_P3$javajs_util_P3i', function (pt, p) {
p.x=Math.round(pt.x);
p.y=Math.round(pt.y);
p.z=Math.round(pt.z);
}, p$1);

Clazz.newMeth(C$, 'drawLineXYZ$I$I$I$I$I$I', function (x1, y1, z1, x2, y2, z2) {
this.line3d.plotLineOld$I$I$I$I$I$I$I$I(this.argbCurrent, this.argbCurrent, x1, y1, z1, x2, y2, z2);
});

Clazz.newMeth(C$, 'drawLine$H$H$I$I$I$I$I$I', function (colixA, colixB, x1, y1, z1, x2, y2, z2) {
if (!this.setC$H(colixA)) colixA=($s$[0] = 0, $s$[0]);
var argbA=this.argbCurrent;
if (!this.setC$H(colixB)) colixB=($s$[0] = 0, $s$[0]);
if (colixA != 0 || colixB != 0 ) this.line3d.plotLineOld$I$I$I$I$I$I$I$I(argbA, this.argbCurrent, x1, y1, z1, x2, y2, z2);
});

Clazz.newMeth(C$, 'drawLineBits$H$H$javajs_util_P3$javajs_util_P3', function (colixA, colixB, pointA, pointB) {
if (!this.setC$H(colixA)) colixA=($s$[0] = 0, $s$[0]);
var argbA=this.argbCurrent;
if (!this.setC$H(colixB)) colixB=($s$[0] = 0, $s$[0]);
if (colixA != 0 || colixB != 0 ) {
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [pointA, this.sA]);
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [pointB, this.sB]);
this.line3d.plotLineBits$I$I$javajs_util_P3i$javajs_util_P3i$I$I$Z(argbA, this.argbCurrent, this.sA, this.sB, 0, 0, false);
}});

Clazz.newMeth(C$, 'drawLineAB$javajs_util_P3$javajs_util_P3', function (pointA, pointB) {
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [pointA, this.sA]);
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [pointB, this.sB]);
this.line3d.plotLineBits$I$I$javajs_util_P3i$javajs_util_P3i$I$I$Z(this.argbCurrent, this.argbCurrent, this.sA, this.sB, 0, 0, false);
});

Clazz.newMeth(C$, 'fillCylinderXYZ$H$H$B$I$I$I$I$I$I$I', function (colixA, colixB, endcaps, diameter, xA, yA, zA, xB, yB, zB) {
if (diameter > this.ht3) return;
var screen=0;
this.currentShadeIndex=0;
if (!this.setC$H(colixB)) colixB=($s$[0] = 0, $s$[0]);
if (this.wasScreened) screen=2;
if (!this.setC$H(colixA)) colixA=($s$[0] = 0, $s$[0]);
if (this.wasScreened) screen+=1;
if (colixA == 0 && colixB == 0 ) return;
this.cylinder3d.renderOld$H$H$I$B$I$I$I$I$I$I$I(colixA, colixB, screen, ($b$[0] = endcaps, $b$[0]), diameter, xA, yA, zA, xB, yB, zB);
});

Clazz.newMeth(C$, 'fillCylinderScreen3I$B$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$F', function (endcaps, diameter, screenA, screenB, pt0f, pt1f, radius) {
if (diameter <= this.ht3) this.cylinder3d.renderOld$H$H$I$B$I$I$I$I$I$I$I(this.colixCurrent, this.colixCurrent, 0, ($b$[0] = endcaps, $b$[0]), diameter, (screenA.x|0), (screenA.y|0), (screenA.z|0), (screenB.x|0), (screenB.y|0), (screenB.z|0));
});

Clazz.newMeth(C$, 'fillCylinder$B$I$javajs_util_P3i$javajs_util_P3i', function (endcaps, diameter, screenA, screenB) {
if (diameter <= this.ht3) this.cylinder3d.renderOld$H$H$I$B$I$I$I$I$I$I$I(this.colixCurrent, this.colixCurrent, 0, ($b$[0] = endcaps, $b$[0]), diameter, screenA.x, screenA.y, screenA.z, screenB.x, screenB.y, screenB.z);
});

Clazz.newMeth(C$, 'fillCylinderBits$B$I$javajs_util_P3$javajs_util_P3', function (endcaps, diameter, screenA, screenB) {
if (diameter <= this.ht3 && screenA.z != 1   && screenB.z != 1  ) {
if (diameter == 0 || diameter == 1 ) {
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [screenA, this.sA]);
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [screenB, this.sB]);
this.line3d.plotLineBits$I$I$javajs_util_P3i$javajs_util_P3i$I$I$Z(this.getColorArgbOrGray$H(this.colixCurrent), this.getColorArgbOrGray$H(this.colixCurrent), this.sA, this.sB, 0, 0, false);
return;
}this.cylinder3d.renderBitsFloat$H$H$I$B$I$javajs_util_P3$javajs_util_P3(this.colixCurrent, this.colixCurrent, 0, ($b$[0] = endcaps, $b$[0]), diameter, screenA, screenB);
}});

Clazz.newMeth(C$, 'fillCylinderBits2$H$H$B$I$javajs_util_P3$javajs_util_P3', function (colixA, colixB, endcaps, diameter, screenA, screenB) {
if (diameter > this.ht3) return;
var screen=0;
this.currentShadeIndex=0;
if (!this.setC$H(colixB)) colixB=($s$[0] = 0, $s$[0]);
if (this.wasScreened) screen=2;
if (!this.setC$H(colixA)) colixA=($s$[0] = 0, $s$[0]);
if (this.wasScreened) screen+=1;
if (colixA == 0 && colixB == 0 ) return;
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [screenA, this.sA]);
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [screenB, this.sB]);
this.cylinder3d.renderBits$H$H$I$B$I$javajs_util_P3i$javajs_util_P3i(colixA, colixB, screen, ($b$[0] = endcaps, $b$[0]), diameter, this.sA, this.sB);
});

Clazz.newMeth(C$, 'fillConeScreen3f$B$I$javajs_util_P3$javajs_util_P3$Z', function (endcap, screenDiameter, screenBase, screenTip, isBarb) {
if (screenDiameter <= this.ht3) this.cylinder3d.renderConeOld$H$B$I$F$F$F$F$F$F$Z$Z(this.colixCurrent, ($b$[0] = endcap, $b$[0]), screenDiameter, screenBase.x, screenBase.y, screenBase.z, screenTip.x, screenTip.y, screenTip.z, true, isBarb);
});

Clazz.newMeth(C$, 'drawHermite4$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (tension, s0, s1, s2, s3) {
(this.hermite3d).renderHermiteRope$Z$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(false, tension, 0, 0, 0, s0, s1, s2, s3);
});

Clazz.newMeth(C$, 'drawHermite7$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$H', function (fill, border, tension, s0, s1, s2, s3, s4, s5, s6, s7, aspectRatio, colixBack) {
if (colixBack == 0) {
(this.hermite3d).renderHermiteRibbon$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$I(fill, border, tension, s0, s1, s2, s3, s4, s5, s6, s7, aspectRatio, 0);
return;
}(this.hermite3d).renderHermiteRibbon$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$I(fill, border, tension, s0, s1, s2, s3, s4, s5, s6, s7, aspectRatio, 1);
var colix=this.colixCurrent;
this.setC$H(colixBack);
(this.hermite3d).renderHermiteRibbon$Z$Z$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$I$I(fill, border, tension, s0, s1, s2, s3, s4, s5, s6, s7, aspectRatio, -1);
this.setC$H(colix);
});

Clazz.newMeth(C$, 'fillHermite$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (tension, diameterBeg, diameterMid, diameterEnd, s0, s1, s2, s3) {
(this.hermite3d).renderHermiteRope$Z$I$I$I$I$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3(true, tension, diameterBeg, diameterMid, diameterEnd, s0, s1, s2, s3);
});

Clazz.newMeth(C$, 'drawTriangle3C$javajs_util_P3i$H$javajs_util_P3i$H$javajs_util_P3i$H$I', function (screenA, colixA, screenB, colixB, screenC, colixC, check) {
if ((check & 1) == 1) this.drawLine$H$H$I$I$I$I$I$I(colixA, colixB, screenA.x, screenA.y, screenA.z, screenB.x, screenB.y, screenB.z);
if ((check & 2) == 2) this.drawLine$H$H$I$I$I$I$I$I(colixB, colixC, screenB.x, screenB.y, screenB.z, screenC.x, screenC.y, screenC.z);
if ((check & 4) == 4) this.drawLine$H$H$I$I$I$I$I$I(colixA, colixC, screenA.x, screenA.y, screenA.z, screenC.x, screenC.y, screenC.z);
});

Clazz.newMeth(C$, 'fillTriangleTwoSided$H$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (normix, screenA, screenB, screenC) {
this.setColorNoisy$I(this.getShadeIndex$H(normix));
p$1.fillTriangleP3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z.apply(this, [screenA, screenB, screenC, false]);
});

Clazz.newMeth(C$, 'fillTriangleP3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z', function (screenA, screenB, screenC, useGouraud) {
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [screenA, this.sA]);
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [screenB, this.sB]);
p$1.setScreeni$javajs_util_P3$javajs_util_P3i.apply(this, [screenC, this.sC]);
(this.triangle3d).fillTriangle$javajs_util_P3i$javajs_util_P3i$javajs_util_P3i$Z(this.sA, this.sB, this.sC, useGouraud);
}, p$1);

Clazz.newMeth(C$, 'fillTriangle3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z', function (screenA, screenB, screenC, isSolid) {
var i=p$1.getShadeIndexP3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z.apply(this, [screenA, screenB, screenC, isSolid]);
if (i < 0) return;
if (isSolid) this.setColorNoisy$I(i);
 else this.setColor$I(this.shadesCurrent[i]);
p$1.fillTriangleP3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z.apply(this, [screenA, screenB, screenC, false]);
});

Clazz.newMeth(C$, 'fillTriangle3i$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z', function (screenA, screenB, screenC, ptA, ptB, ptC, doShade) {
if (doShade) {
var v=this.vectorAB;
v.set$F$F$F(screenB.x - screenA.x, screenB.y - screenA.y, screenB.z - screenA.z);
var shadeIndex;
if (screenC == null ) {
shadeIndex=this.shader.getShadeIndex$F$F$F(-v.x, -v.y, v.z);
} else {
this.vectorAC.set$F$F$F(screenC.x - screenA.x, screenC.y - screenA.y, screenC.z - screenA.z);
v.cross$javajs_util_T3$javajs_util_T3(v, this.vectorAC);
shadeIndex=v.z >= 0  ? this.shader.getShadeIndex$F$F$F(-v.x, -v.y, v.z) : this.shader.getShadeIndex$F$F$F(v.x, v.y, -v.z);
}if (shadeIndex > 56) shadeIndex=56;
this.setColorNoisy$I(shadeIndex);
}p$1.fillTriangleP3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z.apply(this, [screenA, screenB, screenC, false]);
});

Clazz.newMeth(C$, 'fillTriangle3CN$javajs_util_P3i$H$H$javajs_util_P3i$H$H$javajs_util_P3i$H$H', function (screenA, colixA, normixA, screenB, colixB, normixB, screenC, colixC, normixC) {
(this.triangle3d).fillTriangle$javajs_util_P3i$javajs_util_P3i$javajs_util_P3i$Z(screenA, screenB, screenC, p$1.checkGouraud$H$H$H$H$H$H.apply(this, [colixA, colixB, colixC, normixA, normixB, normixC]));
});

Clazz.newMeth(C$, 'fillTriangle3CNBits$javajs_util_P3$H$H$javajs_util_P3$H$H$javajs_util_P3$H$H$Z', function (screenA, colixA, normixA, screenB, colixB, normixB, screenC, colixC, normixC, twoSided) {
p$1.fillTriangleP3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z.apply(this, [screenA, screenB, screenC, p$1.checkGouraud$H$H$H$H$H$H.apply(this, [colixA, colixB, colixC, normixA, normixB, normixC])]);
});

Clazz.newMeth(C$, 'checkGouraud$H$H$H$H$H$H', function (colixA, colixB, colixC, normixA, normixB, normixC) {
if (!this.isPass2 && normixA == normixB  && normixA == normixC  && colixA == colixB  && colixA == colixC ) {
var shadeIndex=this.getShadeIndex$H(normixA);
if (colixA != this.colixCurrent || this.currentShadeIndex != shadeIndex ) {
this.currentShadeIndex=-1;
this.setC$H(colixA);
this.setColorNoisy$I(shadeIndex);
}return false;
}p$1.setTriangleTranslucency$H$H$H.apply(this, [colixA, colixB, colixC]);
(this.triangle3d).setGouraud$I$I$I(this.getShades$H(colixA)[this.getShadeIndex$H(normixA)], this.getShades$H(colixB)[this.getShadeIndex$H(normixB)], this.getShades$H(colixC)[this.getShadeIndex$H(normixC)]);
return true;
}, p$1);

Clazz.newMeth(C$, 'getShadeIndex$H', function (normix) {
return (normix == ~9999 || normix == 9999  ? ($b$[0] = C$.nullShadeIndex, $b$[0]) : ($b$[0] = normix < 0 ? (this.shadeIndexes2Sided[~normix]|0) : (this.shadeIndexes[normix]|0), $b$[0]));
});

Clazz.newMeth(C$, 'setTriangleTranslucency$H$H$H', function (colixA, colixB, colixC) {
if (this.isPass2) {
var maskA=colixA & 30720;
var maskB=colixB & 30720;
var maskC=colixC & 30720;
maskA&=~16384;
maskB&=~16384;
maskC&=~16384;
var mask=org.jmol.util.GData.roundInt$I(((maskA + maskB + maskC )/3|0)) & 30720;
this.translucencyMask=(mask << 13) | 16777215;
}}, p$1);

Clazz.newMeth(C$, 'fillQuadrilateral$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z', function (screenA, screenB, screenC, screenD, isSolid) {
var i=p$1.getShadeIndexP3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z.apply(this, [screenA, screenB, screenC, isSolid]);
if (i < 0) return;
this.setColorNoisy$I(i);
p$1.fillTriangleP3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z.apply(this, [screenA, screenB, screenC, false]);
p$1.fillTriangleP3f$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z.apply(this, [screenA, screenC, screenD, false]);
});

Clazz.newMeth(C$, 'drawSurface$org_jmol_util_MeshSurface$H', function (meshSurface, colix) {
});

Clazz.newMeth(C$, 'plotPixelClippedP3i$javajs_util_P3i', function (screen) {
this.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbCurrent, screen.x, screen.y, screen.z, this.width, this.zbuf, this.pixel);
});

Clazz.newMeth(C$, 'plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator', function (argb, x, y, z, width, zbuf, p) {
if (this.isClipped3$I$I$I(x, y, z)) return;
var offset=y * width + x;
if (z < zbuf[offset]) p.addPixel$I$I$I(offset, z, argb);
});

Clazz.newMeth(C$, 'plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator', function (argb, x, y, z, width, zbuf, p) {
var offset=y * width + x;
if (z < zbuf[offset]) p.addPixel$I$I$I(offset, z, argb);
});

Clazz.newMeth(C$, 'plotImagePixel$I$I$I$I$B$I$I$I$IA$O$I', function (argb, x, y, z, shade, bgargb, width, height, zbuf, p, transpLog) {
if (x < 0 || x >= width  || y < 0  || y >= height ) return;
(p).addImagePixel$B$I$I$I$I$I(($b$[0] = shade, $b$[0]), transpLog, y * width + x, z, argb, bgargb);
});

Clazz.newMeth(C$, 'plotPixelsClippedRaster$I$I$I$I$I$org_jmol_util_Rgb16$org_jmol_util_Rgb16', function (count, x, y, zAtLeft, zPastRight, rgb16Left, rgb16Right) {
var depth;
var slab;
if (count <= 0 || y < 0  || y >= this.height  || x >= this.width  || (zAtLeft < (slab=this.slab) && zPastRight < slab )  || (zAtLeft > (depth=this.depth) && zPastRight > depth ) ) return;
var zb=this.zbuf;
var seed=(x << 16) + (y << 1) ^ 858993459;
var zScaled=(zAtLeft << 10) + (512);
var dz=zPastRight - zAtLeft;
var roundFactor=(count/2|0);
var zIncrementScaled=org.jmol.util.GData.roundInt$I((((dz << 10) + (dz >= 0 ? roundFactor : -roundFactor))/count|0));
if (x < 0) {
x=-x;
zScaled+=zIncrementScaled * x;
count-=x;
if (count <= 0) return;
x=0;
}if (count + x > this.width) count=this.width - x;
var offsetPbuf=y * this.width + x;
var p=this.pixel;
if (rgb16Left == null ) {
var adn=this.argbNoisyDn;
var aup=this.argbNoisyUp;
var ac=this.argbCurrent;
while (--count >= 0){
var z=zScaled >> 10;
if (z >= slab && z <= depth  && z < zb[offsetPbuf] ) {
seed=((seed << 16) + (seed << 1) + seed ) & 2147483647;
var bits=(seed >> 16) & 7;
p.addPixel$I$I$I(offsetPbuf, z, bits == 0 ? adn : (bits == 1 ? aup : ac));
}++offsetPbuf;
zScaled+=zIncrementScaled;
}
} else {
var rScaled=rgb16Left.r << 8;
var rIncrement=(((rgb16Right.r - rgb16Left.r) << 8)/count|0);
var gScaled=rgb16Left.g;
var gIncrement=((rgb16Right.g - gScaled)/count|0);
var bScaled=rgb16Left.b;
var bIncrement=((rgb16Right.b - bScaled)/count|0);
while (--count >= 0){
var z=zScaled >> 10;
if (z >= slab && z <= depth  && z < zb[offsetPbuf] ) p.addPixel$I$I$I(offsetPbuf, z, -16777216 | (rScaled & 16711680) | (gScaled & 65280) | ((bScaled >> 8) & 255) );
++offsetPbuf;
zScaled+=zIncrementScaled;
rScaled+=rIncrement;
gScaled+=gIncrement;
bScaled+=bIncrement;
}
}});

Clazz.newMeth(C$, 'plotPixelsUnclippedRaster$I$I$I$I$I$org_jmol_util_Rgb16$org_jmol_util_Rgb16', function (count, x, y, zAtLeft, zPastRight, rgb16Left, rgb16Right) {
if (count <= 0) return;
var seed=((x << 16) + (y << 1) ^ 858993459) & 2147483647;
var zScaled=(zAtLeft << 10) + (512);
var dz=zPastRight - zAtLeft;
var roundFactor=(count/2|0);
var zIncrementScaled=org.jmol.util.GData.roundInt$I((((dz << 10) + (dz >= 0 ? roundFactor : -roundFactor))/count|0));
var offsetPbuf=y * this.width + x;
var zb=this.zbuf;
var p=this.pixel;
if (rgb16Left == null ) {
var adn=this.argbNoisyDn;
var aup=this.argbNoisyUp;
var ac=this.argbCurrent;
while (--count >= 0){
var z=zScaled >> 10;
if (z < zb[offsetPbuf]) {
seed=((seed << 16) + (seed << 1) + seed ) & 2147483647;
var bits=(seed >> 16) & 7;
p.addPixel$I$I$I(offsetPbuf, z, bits == 0 ? adn : (bits == 1 ? aup : ac));
}++offsetPbuf;
zScaled+=zIncrementScaled;
}
} else {
var rScaled=rgb16Left.r << 8;
var rIncrement=org.jmol.util.GData.roundInt$I((((rgb16Right.r - rgb16Left.r) << 8)/count|0));
var gScaled=rgb16Left.g;
var gIncrement=org.jmol.util.GData.roundInt$I(((rgb16Right.g - gScaled)/count|0));
var bScaled=rgb16Left.b;
var bIncrement=org.jmol.util.GData.roundInt$I(((rgb16Right.b - bScaled)/count|0));
while (--count >= 0){
var z=zScaled >> 10;
if (z < zb[offsetPbuf]) p.addPixel$I$I$I(offsetPbuf, z, -16777216 | (rScaled & 16711680) | (gScaled & 65280) | ((bScaled >> 8) & 255) );
++offsetPbuf;
zScaled+=zIncrementScaled;
rScaled+=rIncrement;
gScaled+=gIncrement;
bScaled+=bIncrement;
}
}});

Clazz.newMeth(C$, 'plotPixelsClippedRasterBits$I$I$I$I$I$org_jmol_util_Rgb16$org_jmol_util_Rgb16$F$F', function (count, x, y, zAtLeft, zPastRight, rgb16Left, rgb16Right, a, b) {
var depth;
var slab;
if (count <= 0 || y < 0  || y >= this.height  || x >= this.width  || (zAtLeft < (slab=this.slab) && zPastRight < slab )  || (zAtLeft > (depth=this.depth) && zPastRight > depth ) ) return;
var zb=this.zbuf;
var seed=(x << 16) + (y << 1) ^ 858993459;
if (x < 0) {
x=-x;
count-=x;
if (count <= 0) return;
x=0;
}if (count + x > this.width) count=this.width - x;
var offsetPbuf=y * this.width + x;
var p=this.pixel;
if (rgb16Left == null ) {
var adn=this.argbNoisyDn;
var aup=this.argbNoisyUp;
var ac=this.argbCurrent;
while (--count >= 0){
var zCurrent=this.line3d.getZCurrent$F$F$I(a, b, x++);
if (zCurrent >= slab && zCurrent <= depth  && zCurrent < zb[offsetPbuf] ) {
seed=((seed << 16) + (seed << 1) + seed ) & 2147483647;
var bits=(seed >> 16) & 7;
p.addPixel$I$I$I(offsetPbuf, zCurrent, bits < 2 ? adn : bits < 6 ? aup : ac);
}++offsetPbuf;
}
} else {
var rScaled=rgb16Left.r << 8;
var rIncrement=(((rgb16Right.r - rgb16Left.r) << 8)/count|0);
var gScaled=rgb16Left.g;
var gIncrement=((rgb16Right.g - gScaled)/count|0);
var bScaled=rgb16Left.b;
var bIncrement=((rgb16Right.b - bScaled)/count|0);
while (--count >= 0){
var zCurrent=this.line3d.getZCurrent$F$F$I(a, b, x++);
if (zCurrent >= slab && zCurrent <= depth  && zCurrent < zb[offsetPbuf] ) p.addPixel$I$I$I(offsetPbuf, zCurrent, -16777216 | (rScaled & 16711680) | (gScaled & 65280) | ((bScaled >> 8) & 255) );
++offsetPbuf;
rScaled+=rIncrement;
gScaled+=gIncrement;
bScaled+=bIncrement;
}
}});

Clazz.newMeth(C$, 'plotPixelsUnclippedRasterBits$I$I$I$org_jmol_util_Rgb16$org_jmol_util_Rgb16$F$F', function (count, x, y, rgb16Left, rgb16Right, a, b) {
if (count <= 0) return;
var seed=((x << 16) + (y << 1) ^ 858993459) & 2147483647;
var offsetPbuf=y * this.width + x;
var zb=this.zbuf;
var p=this.pixel;
if (rgb16Left == null ) {
var adn=this.argbNoisyDn;
var aup=this.argbNoisyUp;
var ac=this.argbCurrent;
while (--count >= 0){
var zCurrent=this.line3d.getZCurrent$F$F$I(a, b, x++);
if (zCurrent < zb[offsetPbuf]) {
seed=((seed << 16) + (seed << 1) + seed ) & 2147483647;
var bits=(seed >> 16) & 7;
var c=(bits == 0 ? adn : bits == 1 ? aup : ac);
p.addPixel$I$I$I(offsetPbuf, zCurrent, c);
}++offsetPbuf;
}
} else {
var rScaled=rgb16Left.r << 8;
var rIncrement=org.jmol.util.GData.roundInt$I((((rgb16Right.r - rgb16Left.r) << 8)/count|0));
var gScaled=rgb16Left.g;
var gIncrement=org.jmol.util.GData.roundInt$I(((rgb16Right.g - gScaled)/count|0));
var bScaled=rgb16Left.b;
var bIncrement=org.jmol.util.GData.roundInt$I(((rgb16Right.b - bScaled)/count|0));
while (--count >= 0){
var zCurrent=this.line3d.getZCurrent$F$F$I(a, b, x++);
if (zCurrent < zb[offsetPbuf]) p.addPixel$I$I$I(offsetPbuf, zCurrent, -16777216 | (rScaled & 16711680) | (gScaled & 65280) | ((bScaled >> 8) & 255) );
++offsetPbuf;
rScaled+=rIncrement;
gScaled+=gIncrement;
bScaled+=bIncrement;
}
}});

Clazz.newMeth(C$, 'plotPixelsUnclippedCount$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator', function (c, count, x, y, z, width, zbuf, p) {
var offsetPbuf=y * width + x;
while (--count >= 0){
if (z < zbuf[offsetPbuf]) p.addPixel$I$I$I(offsetPbuf, z, c);
++offsetPbuf;
}
});

Clazz.newMeth(C$, 'plotPoints$I$IA$I$I', function (count, coordinates, xOffset, yOffset) {
var p=this.pixel;
var c=this.argbCurrent;
var zb=this.zbuf;
var w=this.width;
var antialias=this.antialiasThisFrame;
for (var i=count * 3; i > 0; ) {
var z=coordinates[--i];
var y=coordinates[--i] + yOffset;
var x=coordinates[--i] + xOffset;
if (this.isClipped3$I$I$I(x, y, z)) continue;
var offset=y * w + x++;
if (z < zb[offset]) p.addPixel$I$I$I(offset, z, c);
if (antialias) {
offset=y * w + x;
if (!this.isClipped3$I$I$I(x, y, z) && z < zb[offset] ) p.addPixel$I$I$I(offset, z, c);
offset=(++y) * w + x;
if (!this.isClipped3$I$I$I(x, y, z) && z < zb[offset] ) p.addPixel$I$I$I(offset, z, c);
offset=y * w + (--x);
if (!this.isClipped3$I$I$I(x, y, z) && z < zb[offset] ) p.addPixel$I$I$I(offset, z, c);
}}
}, p$1);

Clazz.newMeth(C$, 'setColorNoisy$I', function (shadeIndex) {
this.currentShadeIndex=shadeIndex;
this.argbCurrent=this.shadesCurrent[shadeIndex];
this.argbNoisyUp=this.shadesCurrent[shadeIndex < 63 ? shadeIndex + 1 : 63];
this.argbNoisyDn=this.shadesCurrent[shadeIndex > 0 ? shadeIndex - 1 : 0];
});

Clazz.newMeth(C$, 'getShadeIndexP3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z', function (screenA, screenB, screenC, isSolid) {
this.vectorAB.sub2$javajs_util_T3$javajs_util_T3(screenB, screenA);
this.vectorAC.sub2$javajs_util_T3$javajs_util_T3(screenC, screenA);
var v=this.vectorNormal;
v.cross$javajs_util_T3$javajs_util_T3(this.vectorAB, this.vectorAC);
var i=(v.z < 0  ? this.shader.getShadeIndex$F$F$F(v.x, v.y, -v.z) : isSolid ? -1 : this.shader.getShadeIndex$F$F$F(-v.x, -v.y, v.z));
return i;
}, p$1);

Clazz.newMeth(C$, 'renderBackground$org_jmol_api_JmolRendererInterface', function (jmolRenderer) {
if (this.backgroundImage != null ) this.plotImage$I$I$I$O$org_jmol_api_JmolRendererInterface$H$I$I(-2147483648, 0, -2147483648, this.backgroundImage, jmolRenderer, 0, 0, 0);
});

Clazz.newMeth(C$, 'drawAtom$org_jmol_modelset_Atom$F', function (atom, radius) {
this.fillSphereXYZ$I$I$I$I(atom.sD, atom.sX, atom.sY, atom.sZ);
});

Clazz.newMeth(C$, 'getExportType$', function () {
return 0;
});

Clazz.newMeth(C$, 'getExportName$', function () {
return null;
});

Clazz.newMeth(C$, 'canDoTriangles$', function () {
return true;
});

Clazz.newMeth(C$, 'isCartesianExport$', function () {
return false;
});

Clazz.newMeth(C$, 'initializeExporter$org_jmol_viewer_Viewer$D$org_jmol_util_GData$java_util_Map', function (vwr, privateKey, g3d, params) {
return null;
});

Clazz.newMeth(C$, 'finalizeOutput$', function () {
return null;
});

Clazz.newMeth(C$, 'drawBond$javajs_util_P3$javajs_util_P3$H$H$B$H$I', function (atomA, atomB, colixA, colixB, endcaps, mad, bondOrder) {
});

Clazz.newMeth(C$, 'drawEllipse$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z$Z', function (ptAtom, ptX, ptY, fillArc, wireframeOnly) {
return false;
});

Clazz.newMeth(C$, 'getPrivateKey$', function () {
return 0;
});

Clazz.newMeth(C$, 'clearFontCache$', function () {
$I$(4).clearFontCache$();
});

Clazz.newMeth(C$, 'setRotationMatrix$javajs_util_M3', function (rotationMatrix) {
var vertexVectors=$I$(20).getVertexVectors$();
for (var i=$I$(3).normixCount; --i >= 0; ) {
var tv=this.transformedVectors[i];
rotationMatrix.rotate2$javajs_util_T3$javajs_util_T3(vertexVectors[i], tv);
this.shadeIndexes[i]=(this.shader.getShadeB$F$F$F(tv.x, -tv.y, tv.z)|0);
this.shadeIndexes2Sided[i]=((tv.z >= 0  ? (this.shadeIndexes[i]|0) : (this.shader.getShadeB$F$F$F(-tv.x, tv.y, -tv.z)|0))|0);
}
});

Clazz.newMeth(C$, 'renderCrossHairs$IA$I$I$javajs_util_P3$F', function (minMax, screenWidth, screenHeight, navOffset, navDepth) {
var antialiased=this.isAntialiased$();
this.setC$H(navDepth < 0  ? 10 : navDepth > 100  ? 11 : 23);
var x=Math.max(Math.min(this.width, Math.round(navOffset.x)), 0);
var y=Math.max(Math.min(this.height, Math.round(navOffset.y)), 0);
var z=Math.round(navOffset.z) + 1;
var off=(antialiased ? 8 : 4);
var h=(antialiased ? 20 : 10);
var w=(antialiased ? 2 : 1);
this.drawRect$I$I$I$I$I$I(x - off, y, z, 0, h, w);
this.drawRect$I$I$I$I$I$I(x, y - off, z, 0, w, h);
this.drawRect$I$I$I$I$I$I(x - off, y - off, z, 0, h, h);
off=h;
h=h >> 1;
this.setC$H(minMax[1] < navOffset.x  ? 21 : 11);
this.drawRect$I$I$I$I$I$I(x - off, y, z, 0, h, w);
this.setC$H(minMax[0] > navOffset.x  ? 21 : 11);
this.drawRect$I$I$I$I$I$I(x + h, y, z, 0, h, w);
this.setC$H(minMax[3] < navOffset.y  ? 21 : 11);
this.drawRect$I$I$I$I$I$I(x, y - off, z, 0, w, h);
this.setC$H(minMax[2] > navOffset.y  ? 21 : 11);
this.drawRect$I$I$I$I$I$I(x, y + h, z, 0, w, h);
});

Clazz.newMeth(C$, 'initializeOutput$org_jmol_viewer_Viewer$D$java_util_Map', function (vwr, privateKey, params) {
return false;
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
