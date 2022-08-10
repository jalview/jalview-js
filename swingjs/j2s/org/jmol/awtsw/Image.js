(function(){var P$=Clazz.newPackage("org.jmol.awtsw"),I$=[[0,'java.awt.image.DirectColorModel','java.awt.image.BufferedImage','java.awt.image.Raster','java.awt.image.SinglePixelPackedSampleModel','java.awt.image.DataBufferInt','java.awt.Toolkit','javajs.util.AU','org.jmol.api.Interface','java.awt.image.MemoryImageSource','javax.swing.JPanel','java.awt.MediaTracker','java.awt.image.PixelGrabber','java.awt.AlphaComposite','java.awt.Color','org.jmol.console.ImageDialog']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Image");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['rgbColorModel','java.awt.image.DirectColorModel','sampleModelBitMasks','int[]']]]

Clazz.newMeth(C$, 'allocateRgbImage$I$I$IA$I$Z', function (windowWidth, windowHeight, pBuffer, windowSize, backgroundTransparent) {
return Clazz.new_([C$.rgbColorModel, $I$(3,"createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point",[Clazz.new_($I$(4,1).c$$I$I$I$IA,[3, windowWidth, windowHeight, C$.sampleModelBitMasks]), Clazz.new_($I$(5,1).c$$IA$I,[pBuffer, windowSize]), null]), false, null],$I$(2,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
}, 1);

Clazz.newMeth(C$, 'createImage$O$org_jmol_api_PlatformViewer', function (data, vwr) {
if (Clazz.instanceOf(data, "java.net.URL")) return $I$(6).getDefaultToolkit$().createImage$java_net_URL(data);
if (Clazz.instanceOf(data, "java.lang.String")) return $I$(6).getDefaultToolkit$().createImage$S(data);
if ($I$(7).isAB$O(data)) {
var b=data;
if (b.length < 3) return null;
if (b[0] == 66  && b[1] == 77  ) {
var c=((vwr).display);
if (c == null ) return null;
var ie=$I$(8).getInterface$S$org_jmol_viewer_Viewer$S("javajs.img.BMPDecoder", vwr, "createImage");
var o=ie.decodeWindowsBMP$BA(b);
if (o == null  || o[0] == null  ) return null;
var w=(o[1]).intValue$();
var h=(o[2]).intValue$();
return c.createImage$java_awt_image_ImageProducer(Clazz.new_($I$(9,1).c$$I$I$IA$I$I,[w, h, o[0], 0, w]));
} else if (b.length > 53 && b[51] == 32  && b[52] == 78  && b[53] == 71 ) {
b=$I$(7).arrayCopyByte$BA$I(b, -1);
b[51]=(80|0);
}return $I$(6).getDefaultToolkit$().createImage$BA(b);
}return null;
}, 1);

Clazz.newMeth(C$, 'waitForDisplay$org_jmol_api_PlatformViewer$O', function (vwr, image) {
var display=(vwr).display;
if (display == null ) display=Clazz.new_($I$(10,1));
var mediaTracker=Clazz.new_($I$(11,1).c$$java_awt_Component,[display]);
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

Clazz.newMeth(C$, 'grabPixels$O$I$I$IA', function (imageobj, width, height, pixels) {
var image=imageobj;
var pixelGrabber=(pixels == null  ? Clazz.new_($I$(12,1).c$$java_awt_Image$I$I$I$I$Z,[image, 0, 0, width, height, true]) : Clazz.new_($I$(12,1).c$$java_awt_Image$I$I$I$I$IA$I$I,[image, 0, 0, width, height, pixels, 0, width]));
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
(g).setComposite$java_awt_Composite($I$(13).getInstance$I$F(5, 1.0));
g.setColor$java_awt_Color(bgcolor == 0 ? Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 0, 0, 0]) : Clazz.new_($I$(14,1).c$$I,[bgcolor]));
g.fillRect$I$I$I$I(0, 0, width, height);
(g).setComposite$java_awt_Composite($I$(13).getInstance$I$F(3, 1.0));
g.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(image, 0, 0, width, height, 0, 0, width0, height0, null);
} else {
g.clearRect$I$I$I$I(0, 0, width, height);
g.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(image, 0, 0, width, height, 0, 0, width0, height0, null);
}return C$.grabPixels$O$I$I$IA(imageOffscreen, width, height, null);
}, 1);

Clazz.newMeth(C$, 'getTextPixels$S$org_jmol_util_Font$O$O$I$I$I', function (text, font3d, gObj, image, width, height, ascent) {
var g=gObj;
g.setColor$java_awt_Color($I$(14).black);
g.fillRect$I$I$I$I(0, 0, width, height);
g.setColor$java_awt_Color($I$(14).white);
g.setFont$java_awt_Font(font3d.font);
g.drawString$S$I$I(text, 0, ascent);
return C$.grabPixels$O$I$I$IA(image, width, height, null);
}, 1);

Clazz.newMeth(C$, 'newBufferedImage$O$I$I', function (image, w, h) {
return Clazz.new_([w, h, (image).getType$()],$I$(2,1).c$$I$I$I);
}, 1);

Clazz.newMeth(C$, 'newBufferedImage$I$I', function (w, h) {
return Clazz.new_($I$(2,1).c$$I$I$I,[w, h, 2]);
}, 1);

Clazz.newMeth(C$, 'getStaticGraphics$O$Z', function (image, backgroundTransparent) {
return (image).createGraphics$();
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
return Clazz.new_($I$(15,1).c$$org_jmol_viewer_Viewer$S$java_util_Map,[vwr, title, imageMap]);
}, 1);

Clazz.newMeth(C$, 'drawImage$O$O$I$I$I$I', function (g, img, x, y, width, height) {
(g).drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(img, x, y, null);
}, 1);

Clazz.newMeth(C$, 'drawImageDTI$O$O$I$I$I$I', function (g, img, x, y, width, height) {
(g).drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_image_ImageObserver(img, x, y, x == 0 ? width >> 1 : width, height, 0, y, width, height, null);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.rgbColorModel=Clazz.new_($I$(1,1).c$$I$I$I$I$I,[24, 16711680, 65280, 255, 0]);
C$.sampleModelBitMasks=Clazz.array(Integer.TYPE, -1, [16711680, 65280, 255]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
