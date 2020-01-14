(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'org.jmol.awt.Display','org.jmol.api.Interface','org.jmol.awt.Mouse','org.jmol.awt.Image','org.jmol.awt.AwtFont','java.awt.GraphicsEnvironment','org.jmol.viewer.Viewer','java.text.SimpleDateFormat','java.util.Date','org.jmol.awt.AwtFile','javajs.util.Rdr']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Platform", null, null, 'org.jmol.api.GenericPlatform');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.vwr=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_api_PlatformViewer$O', function (vwr, display) {
this.vwr=vwr;
});

Clazz.newMeth(C$, 'convertPointFromScreen$O$javajs_util_P3', function (display, ptTemp) {
$I$(1).convertPointFromScreen$O$javajs_util_P3(display, ptTemp);
});

Clazz.newMeth(C$, 'getFullScreenDimensions$O$IA', function (display, widthHeight) {
$I$(1).getFullScreenDimensions$O$IA(display, widthHeight);
});

Clazz.newMeth(C$, 'getMenuPopup$S$C', function (menuStructure, type) {
var jmolpopup=$I$(2).getOption$S$org_jmol_viewer_Viewer$S(type == "j" ? "popup.JmolAwtPopup" : "modelkit.ModelKitPopup", null, null);
if (jmolpopup != null ) jmolpopup.jpiInitialize$org_jmol_api_PlatformViewer$S(this.vwr, menuStructure);
return jmolpopup;
});

Clazz.newMeth(C$, 'hasFocus$O', function (display) {
return $I$(1).hasFocus$O(display);
});

Clazz.newMeth(C$, 'prompt$S$S$SA$Z', function (label, data, list, asButtons) {
return $I$(1).prompt$S$S$SA$Z(label, data, list, asButtons);
});

Clazz.newMeth(C$, 'renderScreenImage$O$O', function (g, size) {
$I$(1).renderScreenImage$org_jmol_api_PlatformViewer$O$O(this.vwr, g, size);
});

Clazz.newMeth(C$, 'requestFocusInWindow$O', function (display) {
$I$(1).requestFocusInWindow$O(display);
});

Clazz.newMeth(C$, 'repaint$O', function (display) {
$I$(1).repaint$O(display);
});

Clazz.newMeth(C$, 'setTransparentCursor$O', function (display) {
$I$(1).setTransparentCursor$O(display);
});

Clazz.newMeth(C$, 'setCursor$I$O', function (c, display) {
$I$(1).setCursor$I$O(c, display);
if (c == 12) (display).requestFocus$();
});

Clazz.newMeth(C$, 'getMouseManager$D$O', function (privateKey, display) {
return Clazz.new_($I$(3).c$$D$org_jmol_api_PlatformViewer$O,[privateKey, this.vwr, display]);
});

Clazz.newMeth(C$, 'allocateRgbImage$I$I$IA$I$Z$Z', function (windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent, isImageWrite) {
return $I$(4).allocateRgbImage$I$I$IA$I$Z(windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent);
});

Clazz.newMeth(C$, 'createImage$O', function (data) {
return $I$(4).createImage$O$org_jmol_api_PlatformViewer(data, this.vwr);
});

Clazz.newMeth(C$, 'disposeGraphics$O', function (gOffscreen) {
$I$(4).disposeGraphics$O(gOffscreen);
});

Clazz.newMeth(C$, 'drawImage$O$O$I$I$I$I$Z', function (g, img, x, y, width, height, isDTI) {
if (isDTI) $I$(1).drawImageDTI$O$O$I$I$I$I(g, img, x, y, width, height);
 else $I$(1).drawImage$O$O$I$I$I$I(g, img, x, y, width, height);
});

Clazz.newMeth(C$, 'grabPixels$O$I$I$IA$I$I', function (imageobj, width, height, pixels, startRow, nRows) {
return $I$(4).grabPixels$O$I$I$IA$I$I(imageobj, width, height, pixels, startRow, nRows);
});

Clazz.newMeth(C$, 'drawImageToBuffer$O$O$O$I$I$I', function (gOffscreen, imageOffscreen, imageobj, width, height, bgcolor) {
return $I$(4).drawImageToBuffer$O$O$O$I$I$I(gOffscreen, imageOffscreen, imageobj, width, height, bgcolor);
});

Clazz.newMeth(C$, 'getTextPixels$S$javajs_awt_Font$O$O$I$I$I', function (text, font3d, gObj, image, width, height, ascent) {
return $I$(4).getTextPixels$S$javajs_awt_Font$O$O$I$I$I(text, font3d, gObj, image, width, height, ascent);
});

Clazz.newMeth(C$, 'flushImage$O', function (imagePixelBuffer) {
$I$(4).flush$O(imagePixelBuffer);
});

Clazz.newMeth(C$, 'getGraphics$O', function (image) {
return $I$(4).getGraphics$O(image);
});

Clazz.newMeth(C$, 'getImageHeight$O', function (image) {
return (image == null  ? -1 : $I$(4).getHeight$O(image));
});

Clazz.newMeth(C$, 'getImageWidth$O', function (image) {
return (image == null  ? -1 : $I$(4).getWidth$O(image));
});

Clazz.newMeth(C$, 'getStaticGraphics$O$Z', function (image, backgroundTransparent) {
return $I$(4).getStaticGraphics$O$Z(image, backgroundTransparent);
});

Clazz.newMeth(C$, 'newBufferedImage$O$I$I', function (image, w, h) {
return $I$(4).newBufferedImage$O$I$I(image, w, h);
});

Clazz.newMeth(C$, 'newOffScreenImage$I$I', function (w, h) {
return $I$(4).newBufferedImage$I$I(w, h);
});

Clazz.newMeth(C$, 'waitForDisplay$O$O', function (ignored, image) {
$I$(4).waitForDisplay$org_jmol_api_PlatformViewer$O(this.vwr, image);
return true;
});

Clazz.newMeth(C$, 'fontStringWidth$javajs_awt_Font$S', function (font, text) {
return $I$(5).stringWidth$O$S(font.getFontMetrics$(), text);
});

Clazz.newMeth(C$, 'getFontAscent$O', function (fontMetrics) {
return $I$(5).getAscent$O(fontMetrics);
});

Clazz.newMeth(C$, 'getFontDescent$O', function (fontMetrics) {
return $I$(5).getDescent$O(fontMetrics);
});

Clazz.newMeth(C$, 'getFontMetrics$javajs_awt_Font$O', function (font, graphics) {
return $I$(5).getFontMetrics$javajs_awt_Font$O(font, graphics);
});

Clazz.newMeth(C$, 'newFont$S$Z$Z$F', function (fontFace, isBold, isItalic, fontSize) {
return $I$(5).newFont$S$Z$Z$F(fontFace, isBold, isItalic, fontSize);
});

Clazz.newMeth(C$, 'getJsObjectInfo$OA$S$OA', function (jsObject, method, args) {
var obj=Clazz.array(java.lang.Object, -1, [null, method, jsObject, args]);
(this.vwr).sm.cbl.notifyCallback$org_jmol_c_CBK$OA(null, obj);
return obj[0];
});

Clazz.newMeth(C$, 'isHeadless$', function () {
return $I$(6).isHeadless$();
});

Clazz.newMeth(C$, 'isSingleThreaded$', function () {
return $I$(7).isSwingJS;
});

Clazz.newMeth(C$, 'notifyEndOfRendering$', function () {
});

Clazz.newMeth(C$, 'getWindow$java_awt_Container', function (p) {
while (p != null ){
if (Clazz.instanceOf(p, "java.awt.Frame")) return p;
 else if (Clazz.instanceOf(p, "javax.swing.JDialog")) return p;
 else if (Clazz.instanceOf(p, "org.jmol.awt.JmolFrame")) return (p).getFrame$();
p=p.getParent$();
}
return null;
}, 1);

Clazz.newMeth(C$, 'getDateFormat$S', function (isoType) {
if (isoType == null ) {
isoType="EEE, d MMM yyyy HH:mm:ss Z";
} else if (isoType.contains$CharSequence("8824")) {
return "D:" + Clazz.new_($I$(8).c$$S,["YYYYMMddHHmmssX"]).format$java_util_Date(Clazz.new_($I$(9))) + "'00'" ;
} else if (isoType.contains$CharSequence("8601")) {
return Clazz.new_($I$(8).c$$S,["yyyy-MM-dd\'T\'HH:mm:ss"]).format$java_util_Date(Clazz.new_($I$(9)));
}return Clazz.new_($I$(8).c$$S,[isoType]).format$java_util_Date(Clazz.new_($I$(9)));
});

Clazz.newMeth(C$, 'newFile$S', function (name) {
return Clazz.new_($I$(10).c$$S,[name]);
});

Clazz.newMeth(C$, 'getBufferedFileInputStream$S', function (name) {
return $I$(10).getBufferedFileInputStream$S(name);
});

Clazz.newMeth(C$, 'getURLContents$java_net_URL$BA$S$Z', function (url, outputBytes, post, asString) {
var ret=$I$(10).getURLContents$java_net_URL$BA$S(url, outputBytes, post);
try {
return (!asString ? ret : Clazz.instanceOf(ret, "java.lang.String") ? ret :  String.instantialize($I$(11).getStreamAsBytes$java_io_BufferedInputStream$javajs_util_OC(ret, null)));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return "" + e;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getLocalUrl$S', function (fileName) {
return $I$(10).getLocalUrl$org_jmol_api_GenericFileInterface(this.newFile$S(fileName));
});

Clazz.newMeth(C$, 'getImageDialog$S$java_util_Map', function (title, imageMap) {
return $I$(4).getImageDialog$org_jmol_api_PlatformViewer$S$java_util_Map(this.vwr, title, imageMap);
});

Clazz.newMeth(C$, 'forceAsyncLoad$S', function (filename) {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
