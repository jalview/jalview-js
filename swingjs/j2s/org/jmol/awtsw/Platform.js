(function(){var P$=Clazz.newPackage("org.jmol.awtsw"),I$=[[0,'org.jmol.awtsw.Image']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Platform", null, 'org.jmol.awt.Platform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isSingleThreaded$', function () {
return true;
});

Clazz.newMeth(C$, 'allocateRgbImage$I$I$IA$I$Z$Z', function (windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent, isImageWrite) {
return $I$(1).allocateRgbImage$I$I$IA$I$Z(windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent);
});

Clazz.newMeth(C$, 'createImage$O', function (data) {
return $I$(1).createImage$O$org_jmol_api_PlatformViewer(data, this.vwr);
});

Clazz.newMeth(C$, 'getStaticGraphics$O$Z', function (image, backgroundTransparent) {
return $I$(1).getStaticGraphics$O$Z(image, backgroundTransparent);
});

Clazz.newMeth(C$, 'disposeGraphics$O', function (gOffscreen) {
$I$(1).disposeGraphics$O(gOffscreen);
});

Clazz.newMeth(C$, 'drawImage$O$O$I$I$I$I$Z', function (g, img, x, y, width, height, isDTI) {
if (isDTI) $I$(1).drawImageDTI$O$O$I$I$I$I(g, img, x, y, width, height);
 else $I$(1).drawImage$O$O$I$I$I$I(g, img, x, y, width, height);
});

Clazz.newMeth(C$, 'grabPixels$O$I$I$IA', function (imageobj, width, height, pixels) {
return $I$(1).grabPixels$O$I$I$IA(imageobj, width, height, pixels);
});

Clazz.newMeth(C$, 'drawImageToBuffer$O$O$O$I$I$I', function (gOffscreen, imageOffscreen, imageobj, width, height, bgcolor) {
return $I$(1).drawImageToBuffer$O$O$O$I$I$I(gOffscreen, imageOffscreen, imageobj, width, height, bgcolor);
});

Clazz.newMeth(C$, 'getTextPixels$S$org_jmol_util_Font$O$O$I$I$I', function (text, font3d, gObj, image, width, height, ascent) {
return $I$(1).getTextPixels$S$org_jmol_util_Font$O$O$I$I$I(text, font3d, gObj, image, width, height, ascent);
});

Clazz.newMeth(C$, 'flushImage$O', function (imagePixelBuffer) {
$I$(1).flush$O(imagePixelBuffer);
});

Clazz.newMeth(C$, 'getGraphics$O', function (image) {
return $I$(1).getGraphics$O(image);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
