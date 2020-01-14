(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[[0,'swingjs.JSGraphicsCompositor']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ImagingLib");
C$.verbose=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.verbose=false;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'filter$java_awt_image_RasterOp$java_awt_image_Raster$java_awt_image_WritableRaster', function (op, src, dst) {
if (dst == null ) {
dst=op.createCompatibleDestRaster$java_awt_image_Raster(src);
}return $I$(1).filterRaster$java_awt_image_Raster$java_awt_image_WritableRaster$java_awt_image_RasterOp(src, dst, op);
}, 1);

Clazz.newMeth(C$, 'filter$java_awt_image_BufferedImageOp$java_awt_image_BufferedImage$java_awt_image_BufferedImage', function (op, src, dst) {
if (C$.verbose) {
System.out.println$S("in filter and op is " + op + "bufimage is " + src + " and " + dst );
}if (dst == null ) {
dst=op.createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel(src, null);
}return $I$(1).filterImage$java_awt_image_BufferedImage$java_awt_image_BufferedImage$java_awt_image_BufferedImageOp(src, dst, op);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:35 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
