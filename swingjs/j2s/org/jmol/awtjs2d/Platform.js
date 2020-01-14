(function(){var P$=Clazz.newPackage("org.jmol.awtjs2d"),I$=[[0,'java.net.URL','javajs.util.AjaxURLStreamHandlerFactory','org.jmol.awtjs2d.Mouse','org.jmol.awtjs2d.Display','org.jmol.api.Interface','org.jmol.awtjs2d.Image','org.jmol.awtjs2d.JSFont','org.jmol.awtjs2d.JSFile','javajs.util.Rdr']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Platform", null, null, 'org.jmol.api.GenericPlatform');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.canvas=null;
this.vwr=null;
this.context=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setViewer$org_jmol_api_PlatformViewer$O', function (vwr, canvas) {
{
this.vwr = vwr;
if (canvas == null) { canvas = document.createElement('canvas');
this.context = canvas.getContext("2d");
} else { this.context = canvas.getContext("2d");
canvas.imgdata = this.context.getImageData(0, 0, canvas.width, canvas.height);
canvas.buf8 = canvas.imgdata.data;
}
}
this.canvas=canvas;
try {
$I$(1).setURLStreamHandlerFactory$java_net_URLStreamHandlerFactory(Clazz.new_($I$(2)));
} catch (e) {
}
});

Clazz.newMeth(C$, 'isSingleThreaded$', function () {
return true;
});

Clazz.newMeth(C$, 'getJsObjectInfo$OA$S$OA', function (jsObject, method, args) {
{
return (method == null ? null : method == "localName" ? jsObject[0]["nodeName"] : args == null ? jsObject[0][method] : jsObject[0][method](args[0]));
}
});

Clazz.newMeth(C$, 'isHeadless$', function () {
return false;
});

Clazz.newMeth(C$, 'getMouseManager$D$O', function (privateKey, display) {
return Clazz.new_($I$(3).c$$D$org_jmol_viewer_Viewer$O,[privateKey, this.vwr, display]);
});

Clazz.newMeth(C$, 'convertPointFromScreen$O$javajs_util_P3', function (canvas, ptTemp) {
$I$(4).convertPointFromScreen$O$javajs_util_P3(canvas, ptTemp);
});

Clazz.newMeth(C$, 'getFullScreenDimensions$O$IA', function (canvas, widthHeight) {
$I$(4).getFullScreenDimensions$O$IA(canvas, widthHeight);
});

Clazz.newMeth(C$, 'getMenuPopup$S$C', function (menuStructure, type) {
var c=(type == "j" ? "awtjs2d.JmolJSPopup" : "awtjs2d.JSModelKitPopup");
var jmolpopup=$I$(5).getOption$S$org_jmol_viewer_Viewer$S(c, this.vwr, "popup");
try {
if (jmolpopup != null ) jmolpopup.jpiInitialize$org_jmol_api_PlatformViewer$S(this.vwr, menuStructure);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
c="Exception creating " + c + ":" + e ;
System.out.println$S(c);
return null;
} else {
throw e;
}
}
return jmolpopup;
});

Clazz.newMeth(C$, 'hasFocus$O', function (canvas) {
return $I$(4).hasFocus$O(canvas);
});

Clazz.newMeth(C$, 'prompt$S$S$SA$Z', function (label, data, list, asButtons) {
return $I$(4).prompt$S$S$SA$Z(label, data, list, asButtons);
});

Clazz.newMeth(C$, 'renderScreenImage$O$O', function (context, size) {
$I$(4).renderScreenImage$org_jmol_api_PlatformViewer$O$O(this.vwr, context, size);
});

Clazz.newMeth(C$, 'drawImage$O$O$I$I$I$I$Z', function (context, canvas, x, y, width, height, isDTI) {
$I$(4).drawImage$O$O$I$I$I$I$Z(context, canvas, x, y, width, height, isDTI);
});

Clazz.newMeth(C$, 'requestFocusInWindow$O', function (canvas) {
$I$(4).requestFocusInWindow$O(canvas);
});

Clazz.newMeth(C$, 'repaint$O', function (canvas) {
var jmol=null;
{
jmol = (self.Jmol && Jmol.repaint ? Jmol : null);
}
if (jmol != null ) jmol.repaint((this.vwr).html5Applet, true);
});

Clazz.newMeth(C$, 'setTransparentCursor$O', function (canvas) {
});

Clazz.newMeth(C$, 'setCursor$I$O', function (c, canvas) {
C$.Jmol$().setCursor((this.vwr).html5Applet, c);
});

Clazz.newMeth(C$, 'allocateRgbImage$I$I$IA$I$Z$Z', function (windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent, isImageWrite) {
if (pBuffer == null ) {
pBuffer=this.grabPixels$O$I$I$IA$I$I(null, 0, 0, null, 0, 0);
{
windowWidth = this.canvas.width;
windowHeight = this.canvas.height;
}
}return $I$(6).allocateRgbImage$I$I$IA$I$Z$O(windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent, (isImageWrite ? null : this.canvas));
});

Clazz.newMeth(C$, 'notifyEndOfRendering$', function () {
});

Clazz.newMeth(C$, 'disposeGraphics$O', function (gOffscreen) {
});

Clazz.newMeth(C$, 'grabPixels$O$I$I$IA$I$I', function (canvas, width, height, pixels, startRow, nRows) {
var context2d=null;
var isWebGL=(canvas == null );
{
if(isWebGL) { this.canvas = canvas = Jmol.loadImage(this,"webgl","" +System.currentTimeMillis(),this .vwr.html5Applet._canvas.toDataURL(),null,null); width = canvas.imageWidth; height = canvas.imageHeight;
canvas.imageWidth = 0; } if (canvas.image && (width != canvas.width || height != canvas.height)) Jmol.setCanvasImage(canvas, width, height);
if (canvas.buf32) return canvas.buf32; context2d = canvas.getContext('2d');
}
var buf=$I$(6).grabPixels$O$I$I(context2d, width, height);
{
canvas.buf32 = buf;
}
if (isWebGL) for (var i=buf.length; --i >= 0; ) if (buf[i] == 0) buf[i]=-1;

return buf;
});

Clazz.newMeth(C$, 'drawImageToBuffer$O$O$O$I$I$I', function (gOffscreen, imageOffscreen, canvas, width, height, bgcolor) {
return this.grabPixels$O$I$I$IA$I$I(canvas, width, height, null, 0, 0);
});

Clazz.newMeth(C$, 'getTextPixels$S$javajs_awt_Font$O$O$I$I$I', function (text, font3d, context, image, width, height, ascent) {
return $I$(6).getTextPixels$S$javajs_awt_Font$O$I$I$I(text, font3d, context, width, height, ascent);
});

Clazz.newMeth(C$, 'flushImage$O', function (imagePixelBuffer) {
});

Clazz.newMeth(C$, 'getGraphics$O', function (canvas) {
{
return (canvas == null ? this.context : canvas.getContext("2d"));
}
});

Clazz.newMeth(C$, 'getImageHeight$O', function (canvas) {
return (canvas == null  ? -1 : $I$(6).getHeight$O(canvas));
});

Clazz.newMeth(C$, 'getImageWidth$O', function (canvas) {
return (canvas == null  ? -1 : $I$(6).getWidth$O(canvas));
});

Clazz.newMeth(C$, 'getStaticGraphics$O$Z', function (image, backgroundTransparent) {
return this.getGraphics$O(image);
});

Clazz.newMeth(C$, 'newBufferedImage$O$I$I', function (image, w, h) {
return C$.Jmol$().getHiddenCanvas((this.vwr).html5Applet, "stereoImage", w, h);
});

Clazz.newMeth(C$, 'newOffScreenImage$I$I', function (w, h) {
return C$.Jmol$().getHiddenCanvas((this.vwr).html5Applet, "textImage", w, h);
});

Clazz.newMeth(C$, 'waitForDisplay$O$O', function (echoNameAndPath, zipBytes) {
return false;
});

Clazz.newMeth(C$, 'createImage$O', function (name_path_bytes) {
var echoName=(name_path_bytes)[0];
var path=(name_path_bytes)[1];
var bytes=(name_path_bytes)[2];
var vwr=this.vwr;
var sc=(bytes == null  ? vwr.getEvalContextAndHoldQueue$org_jmol_api_JmolScriptEvaluator(vwr.eval) : null);
var f=null;
{
f = function(canvas, pathOrError) { vwr.loadImageData$O$S$S$O(canvas, pathOrError, echoName, sc) };
}
return C$.Jmol$().loadImage(this, echoName, path, bytes, f);
});

Clazz.newMeth(C$, 'fontStringWidth$javajs_awt_Font$S', function (font, text) {
return $I$(7).stringWidth$javajs_awt_Font$O$S(font, this.context, text);
});

Clazz.newMeth(C$, 'getFontAscent$O', function (context) {
return $I$(7).getAscent$O(context);
});

Clazz.newMeth(C$, 'getFontDescent$O', function (context) {
return $I$(7).getDescent$O(context);
});

Clazz.newMeth(C$, 'getFontMetrics$javajs_awt_Font$O', function (font, context) {
return $I$(7).getFontMetrics$javajs_awt_Font$O(font, context == null  ? this.context : context);
});

Clazz.newMeth(C$, 'newFont$S$Z$Z$F', function (fontFace, isBold, isItalic, fontSize) {
return $I$(7).newFont$S$Z$Z$F$S(fontFace, isBold, isItalic, fontSize, "px");
});

Clazz.newMeth(C$, 'getDateFormat$S', function (isoType) {
{
if (isoType == null) { } else if (isoType.indexOf("8824") >= 0) { var d = new Date();
var x = d.toString().split(" ");
var MM = "0" + (1 + d.getMonth()); MM = MM.substring(MM.length - 2);
var dd = "0" + d.getDate(); dd = dd.substring(dd.length - 2);
return x[3] + MM + dd + x[4].replace(/\:/g,"") + x[5].substring(3,6) + "'" + x[5].substring(6,8) + "'" } else if (isoType.indexOf("8601") >= 0){ var d = new Date();
var x = d.toString().split(" ");
// Firefox now doing this?
if (x.length == 1) return x;
var MM = "0" + (1 + d.getMonth()); MM = MM.substring(MM.length - 2);
var dd = "0" + d.getDate(); dd = dd.substring(dd.length - 2);
return x[3] + '-' + MM + '-' + dd + 'T' + x[4] } return ("" + (new Date())).split(" (")[0];
}
});

Clazz.newMeth(C$, 'newFile$S', function (name) {
return Clazz.new_($I$(8).c$$S,[name]);
});

Clazz.newMeth(C$, 'getBufferedFileInputStream$S', function (name) {
return null;
});

Clazz.newMeth(C$, 'getURLContents$java_net_URL$BA$S$Z', function (url, outputBytes, post, asString) {
return C$.getURLContentsStatic$java_net_URL$BA$S$Z(url, outputBytes, post, asString);
});

Clazz.newMeth(C$, 'getURLContentsStatic$java_net_URL$BA$S$Z', function (url, outputBytes, post, asString) {
var ret=$I$(8).getURLContents$java_net_URL$BA$S(url, outputBytes, post);
try {
return (!asString ? ret : Clazz.instanceOf(ret, "java.lang.String") ? ret : Clazz.instanceOf(ret, "javajs.util.SB") ? (ret).toString() : Clazz.instanceOf(ret, Clazz.array(Byte.TYPE, -1)) ?  String.instantialize(ret) :  String.instantialize($I$(9).getStreamAsBytes$java_io_BufferedInputStream$javajs_util_OC(ret, null)));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return "" + e;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getLocalUrl$S', function (fileName) {
return null;
});

Clazz.newMeth(C$, 'getImageDialog$S$java_util_Map', function (title, imageMap) {
return $I$(6).getImageDialog$org_jmol_viewer_Viewer$S$java_util_Map(this.vwr, title, imageMap);
});

Clazz.newMeth(C$, 'Jmol$', function () {
{
return Jmol;
}
}, 1);

Clazz.newMeth(C$, 'forceAsyncLoad$S', function (filename) {
return C$.Jmol$().isBinaryUrl(filename);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
