(function(){var P$=Clazz.newPackage("org.jmol.awt"),I$=[[0,'java.awt.image.DirectColorModel','java.awt.Toolkit','javajs.util.AU','org.jmol.api.Interface','java.awt.image.MemoryImageSource','javax.swing.JPanel','java.awt.MediaTracker','java.awt.image.PixelGrabber','java.awt.AlphaComposite','java.awt.Color','java.awt.image.BufferedImage','java.awt.image.Raster','java.awt.image.SinglePixelPackedSampleModel','java.awt.image.DataBufferInt','java.awt.RenderingHints','org.jmol.console.ImageDialog']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Image");
C$.rgbColorModel=null;
C$.sampleModelBitMasks=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.rgbColorModel=Clazz.new_($I$(1).c$$I$I$I$I$I,[24, 16711680, 65280, 255, 0]);
C$.sampleModelBitMasks=Clazz.array(Integer.TYPE, -1, [16711680, 65280, 255]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createImage$O$org_jmol_api_PlatformViewer', function (data, vwr) {
if (Clazz.instanceOf(data, "java.net.URL")) return $I$(2).getDefaultToolkit$().createImage$java_net_URL(data);
if (Clazz.instanceOf(data, "java.lang.String")) return $I$(2).getDefaultToolkit$().createImage$S(data);
if ($I$(3).isAB$O(data)) {
var b=data;
if (b.length < 3) return null;
if (b[0] == 66  && b[1] == 77  ) {
var c=((vwr).display);
if (c == null ) return null;
var ie=$I$(4).getInterface$S$org_jmol_viewer_Viewer$S("javajs.img.BMPDecoder", vwr, "createImage");
var o=ie.decodeWindowsBMP$BA(b);
if (o == null  || o[0] == null  ) return null;
var w=(o[1]).intValue$();
var h=(o[2]).intValue$();
return c.createImage$java_awt_image_ImageProducer(Clazz.new_($I$(5).c$$I$I$IA$I$I,[w, h, o[0], 0, w]));
} else if (b.length > 53 && b[51] == 32  && b[52] == 78  && b[53] == 71 ) {
b=$I$(3).arrayCopyByte$BA$I(b, -1);
b[51]=(80|0);
}return $I$(2).getDefaultToolkit$().createImage$BA(b);
}return null;
}, 1);

Clazz.newMeth(C$, 'waitForDisplay$org_jmol_api_PlatformViewer$O', function (vwr, image) {
var display=(vwr).display;
if (display == null ) display=Clazz.new_($I$(6));
var mediaTracker=Clazz.new_($I$(7).c$$java_awt_Component,[display]);
var rnd=((Math.random() * 100000)|0);
mediaTracker.addImage$java_awt_Image$I(image, rnd);
mediaTracker.waitForID$I(rnd);
}, 1);

Clazz.newMeth(C$, 'getWidth$O', function (image) {
return (image).getWidth$java_awt_image_ImageObserver(null);
}, 1);

Clazz.newMeth(C$, 'getHeight$O', function (image) {
return (image).getHeight$java_awt_image_ImageObserver(null);
}, 1);

Clazz.newMeth(C$, 'grabPixels$O$I$I$IA$I$I', function (imageobj, width, height, pixels, startRow, nRows) {
var image=imageobj;
var pixelGrabber=(pixels == null  ? Clazz.new_($I$(8).c$$java_awt_Image$I$I$I$I$Z,[image, 0, 0, width, height, true]) : Clazz.new_($I$(8).c$$java_awt_Image$I$I$I$I$IA$I$I,[image, 0, startRow, width, nRows, pixels, 0, width]));
try {
pixelGrabber.grabPixels$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
return null;
} else {
throw e;
}
}
return pixelGrabber.getPixels$();
}, 1);

Clazz.newMeth(C$, 'drawImageToBuffer$O$O$O$I$I$I', function (gOffscreen, imageOffscreen, imageobj, width, height, bgcolor) {
var g=gOffscreen;
var image=imageobj;
var width0=image.getWidth$java_awt_image_ImageObserver(null);
var height0=image.getHeight$java_awt_image_ImageObserver(null);
if (Clazz.instanceOf(g, "java.awt.Graphics2D")) {
(g).setComposite$java_awt_Composite($I$(9).getInstance$I$F(5, 1.0));
g.setColor$java_awt_Color(bgcolor == 0 ? Clazz.new_($I$(10).c$$I$I$I$I,[0, 0, 0, 0]) : Clazz.new_($I$(10).c$$I,[bgcolor]));
g.fillRect$I$I$I$I(0, 0, width, height);
(g).setComposite$java_awt_Composite($I$(9).getInstance$I$F(3, 1.0));
g.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(image, 0, 0, width, height, 0, 0, width0, height0, null);
} else {
g.clearRect$I$I$I$I(0, 0, width, height);
g.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(image, 0, 0, width, height, 0, 0, width0, height0, null);
}return C$.grabPixels$O$I$I$IA$I$I(imageOffscreen, width, height, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'getTextPixels$S$javajs_awt_Font$O$O$I$I$I', function (text, font3d, gObj, image, width, height, ascent) {
var g=gObj;
g.setColor$java_awt_Color($I$(10).black);
g.fillRect$I$I$I$I(0, 0, width, height);
g.setColor$java_awt_Color($I$(10).white);
g.setFont$java_awt_Font(font3d.font);
g.drawString$S$I$I(text, 0, ascent);
return C$.grabPixels$O$I$I$IA$I$I(image, width, height, null, 0, 0);
}, 1);

Clazz.newMeth(C$, 'newBufferedImage$O$I$I', function (image, w, h) {
return Clazz.new_($I$(11).c$$I$I$I,[w, h, (image).getType$()]);
}, 1);

Clazz.newMeth(C$, 'newBufferedImage$I$I', function (w, h) {
return Clazz.new_($I$(11).c$$I$I$I,[w, h, 2]);
}, 1);

Clazz.newMeth(C$, 'allocateRgbImage$I$I$IA$I$Z', function (windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent) {
return Clazz.new_($I$(11).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[C$.rgbColorModel, $I$(12).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(Clazz.new_($I$(13).c$$I$I$I$IA,[3, windowWidth, windowHeight, C$.sampleModelBitMasks]), Clazz.new_($I$(14).c$$IA$I,[pBuffer, windowSize]), null), false, null]);
}, 1);

Clazz.newMeth(C$, 'getStaticGraphics$O$Z', function (image, backgroundTransparent) {
var g2d=(image).createGraphics$();
g2d.setRenderingHint$java_awt_RenderingHints_Key$O($I$(15).KEY_TEXT_ANTIALIASING, $I$(15).VALUE_TEXT_ANTIALIAS_ON);
g2d.setRenderingHint$java_awt_RenderingHints_Key$O($I$(15).KEY_ANTIALIASING, $I$(15).VALUE_ANTIALIAS_OFF);
g2d.setRenderingHint$java_awt_RenderingHints_Key$O($I$(15).KEY_RENDERING, $I$(15).VALUE_RENDER_SPEED);
return g2d;
}, 1);

Clazz.newMeth(C$, 'getGraphics$O', function (image) {
return (image).getGraphics$();
}, 1);

Clazz.newMeth(C$, 'flush$O', function (image) {
(image).flush$();
}, 1);

Clazz.newMeth(C$, 'disposeGraphics$O', function (graphicForText) {
(graphicForText).dispose$();
}, 1);

Clazz.newMeth(C$, 'getImageDialog$org_jmol_api_PlatformViewer$S$java_util_Map', function (vwr, title, imageMap) {
return Clazz.new_($I$(16).c$$org_jmol_viewer_Viewer$S$java_util_Map,[vwr, title, imageMap]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
