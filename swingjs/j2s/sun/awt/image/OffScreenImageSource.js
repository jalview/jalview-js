(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'java.util.Hashtable','java.awt.image.ColorModel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OffScreenImageSource", null, null, 'java.awt.image.ImageProducer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.image=null;
this.width=0;
this.height=0;
this.properties=null;
this.theConsumer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage$java_util_Hashtable', function (image, properties) {
C$.$init$.apply(this);
this.image=image;
if (properties != null ) {
this.properties=properties;
} else {
this.properties=Clazz.new_($I$(1));
}this.width=image.getWidth$();
this.height=image.getHeight$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage', function (image) {
C$.c$$java_awt_image_BufferedImage$java_util_Hashtable.apply(this, [image, null]);
}, 1);

Clazz.newMeth(C$, 'addConsumer$java_awt_image_ImageConsumer', function (ic) {
this.theConsumer=ic;
p$1.produce.apply(this, []);
});

Clazz.newMeth(C$, 'isConsumer$java_awt_image_ImageConsumer', function (ic) {
return (ic === this.theConsumer );
});

Clazz.newMeth(C$, 'removeConsumer$java_awt_image_ImageConsumer', function (ic) {
if (this.theConsumer === ic ) {
this.theConsumer=null;
}});

Clazz.newMeth(C$, 'startProduction$java_awt_image_ImageConsumer', function (ic) {
this.addConsumer$java_awt_image_ImageConsumer(ic);
});

Clazz.newMeth(C$, 'requestTopDownLeftRightResend$java_awt_image_ImageConsumer', function (ic) {
});

Clazz.newMeth(C$, 'sendPixels', function () {
var cm=this.image.getColorModel$();
this.image.checkHavePixels$();
var raster=this.image.getRaster$();
var numDataElements=raster.getNumDataElements$();
var dataType=raster.getDataBuffer$().getDataType$();
var scanline=Clazz.array(Integer.TYPE, [this.width * numDataElements]);
var needToCvt=true;
if (Clazz.instanceOf(cm, "java.awt.image.IndexColorModel")) {
var pixels=Clazz.array(Byte.TYPE, [this.width]);
this.theConsumer.setColorModel$java_awt_image_ColorModel(cm);
if (Clazz.instanceOf(raster, "sun.awt.image.ByteComponentRaster")) {
needToCvt=false;
for (var y=0; y < this.height; y++) {
raster.getDataElements$I$I$I$I$O(0, y, this.width, 1, pixels);
this.theConsumer.setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I(0, y, this.width, 1, cm, pixels, 0, this.width);
}
} else if (Clazz.instanceOf(raster, "sun.awt.image.BytePackedRaster")) {
needToCvt=false;
for (var y=0; y < this.height; y++) {
raster.getPixels$I$I$I$I$IA(0, y, this.width, 1, scanline);
for (var x=0; x < this.width; x++) {
pixels[x]=((scanline[x]|0)|0);
}
this.theConsumer.setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I(0, y, this.width, 1, cm, pixels, 0, this.width);
}
} else if (dataType == 2 || dataType == 3 ) {
needToCvt=false;
for (var y=0; y < this.height; y++) {
raster.getPixels$I$I$I$I$IA(0, y, this.width, 1, scanline);
this.theConsumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(0, y, this.width, 1, cm, scanline, 0, this.width);
}
}} else if (Clazz.instanceOf(cm, "java.awt.image.DirectColorModel")) {
this.theConsumer.setColorModel$java_awt_image_ColorModel(cm);
needToCvt=false;
switch (dataType) {
case 3:
for (var y=0; y < this.height; y++) {
raster.getDataElements$I$I$I$I$O(0, y, this.width, 1, scanline);
this.theConsumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(0, y, this.width, 1, cm, scanline, 0, this.width);
}
break;
case 0:
var bscanline=Clazz.array(Byte.TYPE, [this.width]);
for (var y=0; y < this.height; y++) {
raster.getDataElements$I$I$I$I$O(0, y, this.width, 1, bscanline);
for (var x=0; x < this.width; x++) {
scanline[x]=bscanline[x] & 255;
}
this.theConsumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(0, y, this.width, 1, cm, scanline, 0, this.width);
}
break;
case 1:
var sscanline=Clazz.array(Short.TYPE, [this.width]);
for (var y=0; y < this.height; y++) {
raster.getDataElements$I$I$I$I$O(0, y, this.width, 1, sscanline);
for (var x=0; x < this.width; x++) {
scanline[x]=sscanline[x] & 65535;
}
this.theConsumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(0, y, this.width, 1, cm, scanline, 0, this.width);
}
break;
default:
needToCvt=true;
}
}if (needToCvt) {
var newcm=$I$(2).getRGBdefault$();
this.theConsumer.setColorModel$java_awt_image_ColorModel(newcm);
for (var y=0; y < this.height; y++) {
for (var x=0; x < this.width; x++) {
scanline[x]=this.image.getRGB$I$I(x, y);
}
this.theConsumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(0, y, this.width, 1, newcm, scanline, 0, this.width);
}
}}, p$1);

Clazz.newMeth(C$, 'produce', function () {
try {
this.theConsumer.setDimensions$I$I(this.image.getWidth$(), this.image.getHeight$());
this.theConsumer.setProperties$java_util_Hashtable(this.properties);
p$1.sendPixels.apply(this, []);
this.theConsumer.imageComplete$I(2);
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
if (this.theConsumer != null ) {
this.theConsumer.imageComplete$I(1);
}} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
