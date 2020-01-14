(function(){var P$=Clazz.newPackage("javax.imageio"),I$=[[0,'Boolean','swingjs.JSUtil','java.awt.Toolkit','java.io.BufferedInputStream','java.util.HashSet','swingjs.image.PngImageWriter','swingjs.image.JpgImageWriter','swingjs.image.GifImageWriter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ImageIO", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.PNG=0;
C$.JPG=0;
C$.GIF=0;
C$.BMP=0;
C$.readerTypes=null;
C$.readerMap=null;
C$.readerFormatNames=null;
C$.readerSuffixes=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.PNG=0;
C$.JPG=1;
C$.GIF=2;
C$.BMP=3;
C$.readerTypes=Clazz.array(String, -1, ["image/png", "image/jpeg", "image/x-png", "image/vnd.wap.wbmp", "image/gif", "image/bmp"]);
C$.readerMap=Clazz.array(Integer.TYPE, -1, [C$.PNG, C$.JPG, C$.PNG, C$.BMP, C$.GIF, C$.BMP]);
C$.readerFormatNames=Clazz.array(String, -1, ["jpg", "BMP", "bmp", "JPG", "wbmp", "jpeg", "png", "PNG", "JPEG", "WBMP", "GIF", "gif"]);
C$.readerSuffixes=Clazz.array(String, -1, ["jpg", "bmp", "jpeg", "wbmp", "png", "gif"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setUseCache$Z', function (useCache) {
}, 1);

Clazz.newMeth(C$, 'getUseCache$', function () {
return false;
}, 1);

Clazz.newMeth(C$, 'setCacheDirectory$java_io_File', function (cacheDirectory) {
}, 1);

Clazz.newMeth(C$, 'getCacheDirectory$', function () {
return null;
}, 1);

Clazz.newMeth(C$, 'getReaderFormatNames$', function () {
return C$.readerFormatNames;
}, 1);

Clazz.newMeth(C$, 'getReaderMIMETypes$', function () {
return C$.readerTypes;
}, 1);

Clazz.newMeth(C$, 'getReaderFileSuffixes$', function () {
return C$.readerSuffixes;
}, 1);

Clazz.newMeth(C$, 'read$java_io_InputStream', function (input) {
return $I$(3).getDefaultToolkit$().createImage$BA($I$(2).getSignedStreamBytes$java_io_BufferedInputStream(Clazz.instanceOf(input, "java.io.BufferedInputStream") ? input : Clazz.new_($I$(4).c$$java_io_InputStream,[input])));
}, 1);

Clazz.newMeth(C$, 'read$java_net_URL', function (input) {
return C$.read$java_io_InputStream(input.openStream$());
}, 1);

Clazz.newMeth(C$, 'read$javax_imageio_stream_ImageInputStream', function (stream) {
$I$(2).notImplemented$S("ImageIO.read(ImageInputStream");
return null;
}, 1);

Clazz.newMeth(C$, 'write$java_awt_image_RenderedImage$S$javax_imageio_stream_ImageOutputStream', function (im, formatName, output) {
var writer=C$.getWriter$S(formatName);
return (writer != null  && writer.write$java_awt_image_RenderedImage$S$java_io_OutputStream(im, null, output) );
}, 1);

Clazz.newMeth(C$, 'write$java_awt_image_RenderedImage$S$java_io_File', function (im, formatName, output) {
if (im == null  || output == null   || formatName == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ImageIO.write(RenderedImage,String,File)"]);
}var writer=C$.getWriter$S(formatName);
return (writer != null  && writer.write$java_awt_image_RenderedImage$S$java_io_OutputStream(im, output.getName$(), null) );
}, 1);

Clazz.newMeth(C$, 'write$java_awt_image_RenderedImage$S$java_io_OutputStream', function (im, formatName, output) {
if (im == null  || output == null   || formatName == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ImageIO.write(RenderedImage,String,OutputStream)"]);
}var writer=C$.getWriter$S(formatName);
return (writer != null  && writer.write$java_awt_image_RenderedImage$S$java_io_OutputStream(im, null, output) );
}, 1);

Clazz.newMeth(C$, 'getWriter$S', function (formatName) {
try {
return C$.getImageWritersByFormatName$S(formatName).next$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getImageWritersByFormatName$S', function (formatName) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["formatName == null!"]);
}var set=Clazz.new_($I$(5));
switch (formatName.toLowerCase$()) {
case "png":
set.add$TE(Clazz.new_($I$(6)));
break;
case "jpg":
case "jpeg":
set.add$TE(Clazz.new_($I$(7)));
break;
case "gif":
set.add$TE(Clazz.new_($I$(8)));
break;
default:
break;
}
return set.iterator$();
}, 1);
;
(function(){var C$=Clazz.newClass(P$.ImageIO, "CacheInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.useCache=false;
this.hasPermission=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.useCache=false;
this.hasPermission=$I$(1).TRUE;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getUseCache$', function () {
return this.useCache;
});

Clazz.newMeth(C$, 'setUseCache$Z', function (useCache) {
this.useCache=useCache;
});

Clazz.newMeth(C$, 'getCacheDirectory$', function () {
return null;
});

Clazz.newMeth(C$, 'setCacheDirectory$java_io_File', function (cacheDirectory) {
$I$(2).notImplemented$S(null);
});

Clazz.newMeth(C$, 'getHasPermission$', function () {
return this.hasPermission;
});

Clazz.newMeth(C$, 'setHasPermission$Boolean', function (hasPermission) {
this.hasPermission=hasPermission;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
