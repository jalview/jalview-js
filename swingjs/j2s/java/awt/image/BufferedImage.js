(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'java.awt.image.DirectColorModel','java.awt.image.ColorModel','java.awt.color.ColorSpace','java.awt.image.ComponentColorModel','java.awt.image.Raster','java.awt.image.IndexColorModel','java.awt.image.PixelInterleavedSampleModel','java.awt.image.SinglePixelPackedSampleModel','java.awt.image.MultiPixelPackedSampleModel','java.util.Hashtable','sun.awt.image.OffScreenImageSource','java.awt.Image','java.awt.Point','java.awt.Rectangle','swingjs.api.js.DOMNode','swingjs.JSUtil','swingjs.JSGraphics2D',['sun.awt.image.PixelConverter','.UshortGray'],'swingjs.JSGraphicsCompositor']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BufferedImage", null, 'java.awt.Image', ['java.awt.image.RenderedImage', 'java.awt.Transparency']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.imageType=0;
},1);

C$.$fields$=[['Z',['isAlphaPremultiplied','秘haveFilePixels','秘hasRasterData'],'I',['imageType','width','height','秘wxh'],'O',['colorModel','java.awt.image.ColorModel','raster','java.awt.image.WritableRaster','osis','sun.awt.image.OffScreenImageSource','properties','java.util.Hashtable','秘g','swingjs.JSGraphics2D','秘imgNode','java.lang.Object','秘pix','int[]','秘canvas','java.lang.Object','秘component','java.awt.Component','秘pixSaved','int[]']]]

Clazz.newMeth(C$, 'c$$I$I$I', function (width, height, imageType) {
Clazz.super_(C$, this);
this.width=width;
this.height=height;
this.秘wxh=width * height;
switch (imageType) {
case 1:
this.colorModel=Clazz.new_($I$(1,1).c$$I$I$I$I$I,[24, 16711680, 65280, 255, 0]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
this.raster.setImage$java_awt_image_BufferedImage(this);
this.秘pix=(this.raster.getDataBuffer$()).data;
break;
case 2:
this.colorModel=$I$(2).getRGBdefault$();
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
this.raster.setImage$java_awt_image_BufferedImage(this);
this.秘pix=(this.raster.getDataBuffer$()).data;
break;
case 3:
this.colorModel=Clazz.new_([$I$(3).getInstance$I(1000), 32, 16711680, 65280, 255, -16777216, true, 3],$I$(1,1).c$$java_awt_color_ColorSpace$I$I$I$I$I$Z$I);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
break;
case 4:
this.colorModel=Clazz.new_($I$(1,1).c$$I$I$I$I,[24, 255, 65280, 16711680]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
break;
case 5:
{
var cs=$I$(3).getInstance$I(1000);
var nBits=Clazz.array(Integer.TYPE, -1, [8, 8, 8]);
var bOffs=Clazz.array(Integer.TYPE, -1, [2, 1, 0]);
this.colorModel=Clazz.new_($I$(4,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, false, false, 1, 0]);
this.raster=$I$(5).createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point(0, width, height, width * 3, 3, bOffs, null);
}break;
case 6:
{
var cs=$I$(3).getInstance$I(1000);
var nBits=Clazz.array(Integer.TYPE, -1, [8, 8, 8, 8]);
var bOffs=Clazz.array(Integer.TYPE, -1, [3, 2, 1, 0]);
this.colorModel=Clazz.new_($I$(4,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, true, false, 3, 0]);
this.raster=$I$(5).createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point(0, width, height, width * 4, 4, bOffs, null);
}break;
case -6:
{
var cs=$I$(3).getInstance$I(1000);
var nBits=Clazz.array(Integer.TYPE, -1, [8, 8, 8, 8]);
var bOffs=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3]);
this.colorModel=Clazz.new_($I$(4,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, true, false, 3, 0]);
this.raster=$I$(5).createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point(0, width, height, width * 4, 4, bOffs, null);
this.秘pix=(this.raster.getDataBuffer$()).data;
this.秘haveFilePixels=this.秘hasRasterData=true;
}break;
case 7:
{
var cs=$I$(3).getInstance$I(1000);
var nBits=Clazz.array(Integer.TYPE, -1, [8, 8, 8, 8]);
var bOffs=Clazz.array(Integer.TYPE, -1, [3, 2, 1, 0]);
this.colorModel=Clazz.new_($I$(4,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, true, true, 3, 0]);
this.raster=$I$(5).createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point(0, width, height, width * 4, 4, bOffs, null);
}break;
case 10:
{
var cs=$I$(3).getInstance$I(1003);
var nBits=Clazz.array(Integer.TYPE, -1, [8]);
this.colorModel=Clazz.new_($I$(4,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, false, true, 1, 0]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
}break;
case 11:
{
var cs=$I$(3).getInstance$I(1003);
var nBits=Clazz.array(Integer.TYPE, -1, [16]);
this.colorModel=Clazz.new_($I$(4,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, false, true, 1, 1]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
}break;
case 12:
var arr=Clazz.array(Byte.TYPE, -1, [0, -1]);
this.colorModel=Clazz.new_($I$(6,1).c$$I$I$BA$BA$BA,[1, 2, arr, arr, arr]);
this.raster=$I$(5).createPackedRaster$I$I$I$I$I$java_awt_Point(0, width, height, 1, 1, null);
break;
case 13:
var cmap=Clazz.array(Integer.TYPE, [256]);
var i=0;
for (var r=0; r < 256; r+=51) {
for (var g=0; g < 256; g+=51) {
for (var b=0; b < 256; b+=51) {
cmap[i++]=(r << 16) | (g << 8) | b ;
}
}
}
var grayIncr=(256/(256 - i)|0);
var gray=grayIncr * 3;
for (; i < 256; i++) {
cmap[i]=(gray << 16) | (gray << 8) | gray ;
gray+=grayIncr;
}
this.colorModel=Clazz.new_($I$(6,1).c$$I$I$IA$I$Z$I$I,[8, 256, cmap, 0, false, -1, 0]);
this.raster=$I$(5).createInterleavedRaster$I$I$I$I$java_awt_Point(0, width, height, 1, null);
break;
case 8:
{
this.colorModel=Clazz.new_($I$(1,1).c$$I$I$I$I,[16, 63488, 2016, 31]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
}break;
case 9:
{
this.colorModel=Clazz.new_($I$(1,1).c$$I$I$I$I,[15, 31744, 992, 31]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
}break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown image type " + imageType]);
}
this.imageType=imageType;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$java_awt_image_IndexColorModel', function (width, height, imageType, cm) {
Clazz.super_(C$, this);
if (cm.hasAlpha$() && cm.isAlphaPremultiplied$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This image types do not have premultiplied alpha."]);
}this.width=width;
this.height=height;
this.秘wxh=width * height;
switch (imageType) {
case 12:
var bits;
var mapSize=cm.getMapSize$();
if (mapSize <= 2) {
bits=1;
} else if (mapSize <= 4) {
bits=2;
} else if (mapSize <= 16) {
bits=4;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Color map for TYPE_BYTE_BINARY must have no more than 16 entries"]);
}this.raster=$I$(5).createPackedRaster$I$I$I$I$I$java_awt_Point(0, width, height, 1, bits, null);
break;
case 13:
this.raster=$I$(5).createInterleavedRaster$I$I$I$I$java_awt_Point(0, width, height, 1, null);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid image type (" + imageType + ").  Image type must" + " be either TYPE_BYTE_BINARY or " + " TYPE_BYTE_INDEXED" ]);
}
if (!cm.isCompatibleRaster$java_awt_image_Raster(this.raster)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible image type and IndexColorModel"]);
}this.colorModel=cm;
this.imageType=imageType;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable', function (cm, raster, isRasterPremultiplied, properties) {
Clazz.super_(C$, this);
if (!cm.isCompatibleRaster$java_awt_image_Raster(raster)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Raster " + raster + " is incompatible with ColorModel " + cm ]);
}if ((raster.minX != 0) || (raster.minY != 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Raster " + raster + " has minX or minY not equal to zero: " + raster.minX + " " + raster.minY ]);
}this.colorModel=cm;
this.raster=raster;
this.width=raster.getWidth$();
this.height=raster.getHeight$();
this.秘wxh=this.width * this.height;
raster.setImage$java_awt_image_BufferedImage(this);
if (this.getColorModel$() === $I$(2).秘RGBdefault ) this.秘pix=(raster.getDataBuffer$()).data;
 else this.秘hasRasterData=true;
this.properties=properties;
var numBands=raster.getNumBands$();
var isAlphaPre=cm.isAlphaPremultiplied$();
var cs;
var sm=raster.getSampleModel$();
cs=cm.getColorSpace$();
var csType=cs.getType$();
if (csType != 5) {
if (csType == 6 && Clazz.getClass($I$(4)).equals$O(cm.getClass$()) ) {
if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel") && (sm).getPixelStride$() != numBands ) {
this.imageType=0;
} else if (Clazz.instanceOf(raster, "sun.awt.image.ByteComponentRaster") && Clazz.getClass($I$(7)).equals$O(sm.getClass$()) && raster.getNumBands$() == 1   && cm.getComponentSize$I(0) == 8  && (raster).getPixelStride$() == 1 ) {
this.imageType=10;
} else if (Clazz.instanceOf(raster, "sun.awt.image.ShortComponentRaster") && Clazz.getClass($I$(7)).equals$O(sm.getClass$()) && raster.getNumBands$() == 1   && cm.getComponentSize$I(0) == 16  && (raster).getPixelStride$() == 1 ) {
this.imageType=11;
}} else {
this.imageType=0;
}return;
}if ((Clazz.instanceOf(raster, "sun.awt.image.IntegerComponentRaster")) && (numBands == 3 || numBands == 4 ) ) {
var iraster=raster;
var pixSize=cm.getPixelSize$();
if (iraster.getPixelStride$() == 1 && Clazz.getClass($I$(1)).equals$O(cm.getClass$())  && Clazz.getClass($I$(8)).equals$O(sm.getClass$())  && (pixSize == 32 || pixSize == 24 ) ) {
var dcm=cm;
var rmask=dcm.getRedMask$();
var gmask=dcm.getGreenMask$();
var bmask=dcm.getBlueMask$();
if (rmask == 16711680 && gmask == 65280  && bmask == 255 ) {
if (dcm.getAlphaMask$() == -16777216) {
this.imageType=(isAlphaPre ? 3 : 2);
} else {
if (!dcm.hasAlpha$()) {
this.imageType=1;
}}} else if (rmask == 255 && gmask == 65280  && bmask == 16711680 ) {
if (!dcm.hasAlpha$()) {
this.imageType=4;
}}}} else if ((Clazz.getClass($I$(6)).equals$O(cm.getClass$())) && (numBands == 1) && (!cm.hasAlpha$() || !isAlphaPre )  ) {
var icm=cm;
var pixSize=icm.getPixelSize$();
if (Clazz.instanceOf(raster, "sun.awt.image.BytePackedRaster") && Clazz.getClass($I$(9)).equals$O(sm.getClass$()) ) {
this.imageType=12;
} else if (Clazz.instanceOf(raster, "sun.awt.image.ByteComponentRaster") && Clazz.getClass($I$(7)).equals$O(sm.getClass$()) ) {
var braster=raster;
if (braster.getPixelStride$() == 1 && pixSize <= 8 ) {
this.imageType=13;
}}} else if ((Clazz.instanceOf(raster, "sun.awt.image.ShortComponentRaster")) && (Clazz.getClass($I$(1)).equals$O(cm.getClass$())) && (Clazz.getClass($I$(8)).equals$O(sm.getClass$())) && (numBands == 3) && !cm.hasAlpha$()  ) {
var dcm=cm;
if (dcm.getRedMask$() == 63488) {
if (dcm.getGreenMask$() == 2016 && dcm.getBlueMask$() == 31 ) {
this.imageType=8;
}} else if (dcm.getRedMask$() == 31744) {
if (dcm.getGreenMask$() == 992 && dcm.getBlueMask$() == 31 ) {
this.imageType=9;
}}} else if ((Clazz.instanceOf(raster, "sun.awt.image.ByteComponentRaster")) && (Clazz.instanceOf(cm, "java.awt.image.ComponentColorModel")) && (Clazz.instanceOf(raster.getSampleModel$(), "java.awt.image.PixelInterleavedSampleModel")) && (numBands == 3 || numBands == 4 )  ) {
var ccm=cm;
var csm=raster.getSampleModel$();
var braster=raster;
var offs=csm.getBandOffsets$();
if (ccm.getNumComponents$() != numBands) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Number of components in ColorModel (" + ccm.getNumComponents$() + ") does not match # in " + " Raster (" + numBands + ")" ]);
}var nBits=ccm.getComponentSize$();
var is8bit=true;
for (var i=0; i < numBands; i++) {
if (nBits[i] != 8) {
is8bit=false;
break;
}}
if (is8bit && braster.getPixelStride$() == numBands  && offs[0] == numBands - 1  && offs[1] == numBands - 2  && offs[2] == numBands - 3  && Clazz.getClass($I$(4)).equals$O(ccm.getClass$())  && Clazz.getClass($I$(7)).equals$O(csm.getClass$()) ) {
if (numBands == 3 && !ccm.hasAlpha$() ) {
this.imageType=5;
} else if (offs[3] == 0 && ccm.hasAlpha$() ) {
this.imageType=(isAlphaPre ? 7 : 6);
}}}}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return this.imageType;
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return this.colorModel;
});

Clazz.newMeth(C$, 'getRaster$', function () {
this.秘hasRasterData=true;
return this.raster;
});

Clazz.newMeth(C$, 'getAlphaRaster$', function () {
return this.colorModel.getAlphaRaster$java_awt_image_WritableRaster(this.raster);
});

Clazz.newMeth(C$, 'getRGB$I$I', function (x, y) {
this.秘ensureHavePixels$Z(true);
if (this.秘pix == null ) this.秘pix=this.秘pixSaved;
return this.秘pix[y * this.width + x];
});

Clazz.newMeth(C$, 'getRGB$I$I$I$I$IA$I$I', function (startX, startY, w, h, rgbArray, offset, scansize) {
this.秘ensureHavePixels$Z(true);
if (this.秘pix == null ) this.秘pix=this.秘pixSaved;
return this.getRangeRGB$I$I$I$I$IA$I$I(startX, startY, w, h, rgbArray, offset, scansize);
});

Clazz.newMeth(C$, '秘ensureHavePixels$Z', function (andSetImageNode) {
if (!this.秘haveFilePixels && (this.秘imgNode != null  || this.秘g != null  ) ) {
p$1.秘setPixelsFromHTML5Canavas$Z.apply(this, [andSetImageNode]);
return true;
}if (this.秘hasRasterData) {
p$1.秘getPixelsFromRaster.apply(this, []);
return true;
}return false;
});

Clazz.newMeth(C$, 'getRangeRGB$I$I$I$I$IA$I$I', function (startX, startY, w, h, rgbArray, offset, scansize) {
if (this.秘pix == null  && this.秘pixSaved == null  ) this.秘ensureHavePixels$Z(false);
var pixels=(this.秘pix == null  ? this.秘pixSaved : this.秘pix);
if (pixels == null ) return rgbArray;
if (pixels.length == this.秘wxh) {
for (var y=startY, yoff=offset; y < startY + h; y++, yoff+=scansize) for (var off=yoff, x=startX; x < startX + w; x++) rgbArray[off++]=pixels[y * this.width + x];


} else {
for (var y=startY, yoff=offset; y < startY + h; y++, yoff+=scansize) {
for (var off=yoff, x=startX, pt=(y * this.width) << 2; x < startX + w; x++) {
rgbArray[off++]=(pixels[pt++] << 16) | (pixels[pt++] << 8) | pixels[pt++] | (pixels[pt++] << 24) ;
}
}
}return rgbArray;
});

Clazz.newMeth(C$, 'setRGB$I$I$I', function (x, y, rgb) {
if (this.秘ensureHavePixels$Z(false)) ;var pixels=(this.秘pix == null  ? this.秘pixSaved : this.秘pix);
pixels[y * this.width + x]=rgb;
});

Clazz.newMeth(C$, 'setRGB$I$I$I$I$IA$I$I', function (startX, startY, w, h, rgbArray, offset, scansize) {
this.秘ensureHavePixels$Z(false);
var pixels=(this.秘pix == null  ? this.秘pixSaved : this.秘pix);
var width=this.width;
for (var y=startY, yoff=offset; y < startY + h; y++, yoff+=scansize) for (var x=startX, off=yoff; x < startX + w; x++) pixels[y * width + x]=rgbArray[off++];


this.秘pix=this.秘pixSaved=pixels;
this.秘g=null;
this.秘getImageGraphic$();
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.raster.getWidth$();
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.raster.getHeight$();
});

Clazz.newMeth(C$, 'getWidth$java_awt_image_ImageObserver', function (observer) {
return this.raster.getWidth$();
});

Clazz.newMeth(C$, 'getHeight$java_awt_image_ImageObserver', function (observer) {
return this.raster.getHeight$();
});

Clazz.newMeth(C$, 'getSource$', function () {
if (this.osis == null ) {
if (this.properties == null ) {
this.properties=Clazz.new_($I$(10,1));
}this.osis=Clazz.new_($I$(11,1).c$$java_awt_image_BufferedImage$java_util_Hashtable,[this, this.properties]);
}return this.osis;
});

Clazz.newMeth(C$, 'getProperty$S$java_awt_image_ImageObserver', function (name, observer) {
return this.getProperty$S(name);
});

Clazz.newMeth(C$, 'getProperty$S', function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null property name is not allowed"]);
}if (this.properties == null ) {
return $I$(12).UndefinedProperty;
}var o=this.properties.get$O(name);
if (o == null ) {
o=$I$(12).UndefinedProperty;
}return o;
});

Clazz.newMeth(C$, 'getGraphics$', function () {
return this.createGraphics$();
});

Clazz.newMeth(C$, 'createGraphics$', function () {
return this.秘getImageGraphic$().create$();
});

Clazz.newMeth(C$, 'getSubimage$I$I$I$I', function (x, y, w, h) {
return Clazz.new_(C$.c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, this.raster.createWritableChild$I$I$I$I$I$I$IA(x, y, w, h, 0, 0, null), this.colorModel.isAlphaPremultiplied$(), this.properties]);
});

Clazz.newMeth(C$, 'isAlphaPremultiplied$', function () {
return false;
});

Clazz.newMeth(C$, 'toString', function () {
return ("BufferedImage@" + Integer.toHexString$I(this.hashCode$()) + ": type = " + this.imageType + " " + this.colorModel.toString() + " " + this.raster.toString() );
});

Clazz.newMeth(C$, 'getSources$', function () {
return null;
});

Clazz.newMeth(C$, 'getPropertyNames$', function () {
return null;
});

Clazz.newMeth(C$, 'getMinX$', function () {
return this.raster.getMinX$();
});

Clazz.newMeth(C$, 'getMinY$', function () {
return this.raster.getMinY$();
});

Clazz.newMeth(C$, 'getSampleModel$', function () {
return this.raster.getSampleModel$();
});

Clazz.newMeth(C$, 'getNumXTiles$', function () {
return 1;
});

Clazz.newMeth(C$, 'getNumYTiles$', function () {
return 1;
});

Clazz.newMeth(C$, 'getMinTileX$', function () {
return 0;
});

Clazz.newMeth(C$, 'getMinTileY$', function () {
return 0;
});

Clazz.newMeth(C$, 'getTileWidth$', function () {
return this.raster.getWidth$();
});

Clazz.newMeth(C$, 'getTileHeight$', function () {
return this.raster.getHeight$();
});

Clazz.newMeth(C$, 'getTileGridXOffset$', function () {
return 0;
});

Clazz.newMeth(C$, 'getTileGridYOffset$', function () {
return 0;
});

Clazz.newMeth(C$, 'getTile$I$I', function (tileX, tileY) {
return this.raster;
});

Clazz.newMeth(C$, 'getData$', function () {
var width=this.raster.getWidth$();
var height=this.raster.getHeight$();
var startX=this.raster.getMinX$();
var startY=this.raster.getMinY$();
var wr=$I$(5,"createWritableRaster$java_awt_image_SampleModel$java_awt_Point",[this.raster.getSampleModel$(), Clazz.new_([this.raster.getSampleModelTranslateX$(), this.raster.getSampleModelTranslateY$()],$I$(13,1).c$$I$I)]);
var tdata=null;
this.秘ensureHavePixels$Z(true);
for (var i=startY; i < startY + height; i++) {
tdata=this.raster.getDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
wr.setDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
}
return wr;
});

Clazz.newMeth(C$, 'getData$java_awt_Rectangle', function (rect) {
var sm=this.raster.getSampleModel$();
var nsm=sm.createCompatibleSampleModel$I$I(rect.width, rect.height);
var wr=$I$(5,"createWritableRaster$java_awt_image_SampleModel$java_awt_Point",[nsm, rect.getLocation$()]);
var width=rect.width;
var height=rect.height;
var startX=rect.x;
var startY=rect.y;
var tdata=null;
for (var i=startY; i < startY + height; i++) {
tdata=this.raster.getDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
wr.setDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
}
return wr;
});

Clazz.newMeth(C$, 'copyData$java_awt_image_WritableRaster', function (outRaster) {
if (outRaster == null ) {
return this.getData$();
}var width=outRaster.getWidth$();
var height=outRaster.getHeight$();
var startX=outRaster.getMinX$();
var startY=outRaster.getMinY$();
var tdata=null;
for (var i=startY; i < startY + height; i++) {
tdata=this.raster.getDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
outRaster.setDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
}
return outRaster;
});

Clazz.newMeth(C$, 'setData$java_awt_image_Raster', function (r) {
var width=r.getWidth$();
var height=r.getHeight$();
var startX=r.getMinX$();
var startY=r.getMinY$();
var tdata=null;
var rclip=Clazz.new_($I$(14,1).c$$I$I$I$I,[startX, startY, width, height]);
var bclip=Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 0, this.raster.width, this.raster.height]);
var intersect=rclip.intersection$java_awt_Rectangle(bclip);
if (intersect.isEmpty$()) {
return;
}width=intersect.width;
height=intersect.height;
startX=intersect.x;
startY=intersect.y;
for (var i=startY; i < startY + height; i++) {
tdata=r.getPixels$I$I$I$I$IA(startX, i, width, 1, tdata);
this.raster.setPixels$I$I$I$I$IA(startX, i, width, 1, tdata);
}
});

Clazz.newMeth(C$, 'getWritableTileIndices$', function () {
var p=Clazz.array($I$(13), [1]);
p[0]=Clazz.new_($I$(13,1).c$$I$I,[0, 0]);
return p;
});

Clazz.newMeth(C$, 'hasTileWriters$', function () {
return true;
});

Clazz.newMeth(C$, 'getWritableTile$I$I', function (tileX, tileY) {
return this.raster;
});

Clazz.newMeth(C$, 'releaseWritableTile$I$I', function (tileX, tileY) {
});

Clazz.newMeth(C$, 'getTransparency$', function () {
return this.colorModel.getTransparency$();
});

Clazz.newMeth(C$, 'setImageFromHTML5Canvas$swingjs_JSGraphics2D', function (g) {
this.秘g=g;
this.width=this.raster.width;
this.height=this.raster.height;
p$1.秘setPixelsFromHTML5Canavas$Z.apply(this, [true]);
});

Clazz.newMeth(C$, '秘setPixelsFromHTML5Canavas$Z', function (andSetImgNode) {
var g;
var node;
if ((g=this.秘g) == null  && (node=this.秘imgNode) == null  ) {
System.err.println$S("BufferedImage.setPixelsFromHTML5Canvas: Pixels cannot be generated from this image. ");
}var canvas=(g == null  ? null : g.canvas ||null);
if (canvas == null ) canvas=$I$(15).createElement("canvas", null);
var w=this.width;
var h=this.height;
var data=null;

if (!g) { canvas.width = w; canvas.height = h; } var ctx = canvas.getContext("2d"); if (!g) ctx.drawImage(node, 0, 0, w, h);
data = ctx.getImageData(0, 0, w, h).data;
var buf=this.raster.getDataBuffer$();
this.秘pix=null;
switch (this.imageType) {
case 1:
case 3:
case 2:
C$.toIntARGB$BA$IA(data, this.秘pix=(buf).data);
break;
case 4:
p$1.toInt3BGR$BA$IA.apply(this, [data, (buf).data]);
break;
case 5:
p$1.toByte3BGR$BA$BA.apply(this, [data, (buf).data]);
break;
case 6:
case 7:
p$1.toByteABGR$BA$BA.apply(this, [data, (buf).data]);
break;
case 10:
p$1.toByteGray$BA$BA.apply(this, [data, (buf).data]);
break;
case 12:
p$1.toByteBinary$BA$BA.apply(this, [data, (buf).data]);
break;
case 11:
case 8:
case 9:
case 13:
$I$(16).notImplemented$S("BufferedImage setPixels for type " + this.imageType);
break;
}
if (this.秘pix == null ) C$.toIntARGB$BA$IA(data, this.秘pix=Clazz.array(Integer.TYPE, [data.length >> 2]));
this.秘imgNode=(andSetImgNode ? canvas : null);
this.秘haveFilePixels=true;
}, p$1);

Clazz.newMeth(C$, 'toIntARGB$BA$IA', function (ctxData, iData) {
var n=ctxData.length >> 2;
for (var i=0, j=0; i < n; ) {
var argb=(ctxData[j++] << 16) | (ctxData[j++] << 8) | ctxData[j++] | -16777216 ;
iData[i++]=(ctxData[j++] == 0 ? 0 : argb);
}
}, 1);

Clazz.newMeth(C$, 'toByteABGR$BA$BA', function (ctxData, buf) {
var n=ctxData.length;
for (var i=0, j=0; i < n; j+=4) {
buf[i++]=ctxData[j + 2];
buf[i++]=ctxData[j + 1];
buf[i++]=ctxData[j];
buf[i++]=ctxData[j + 3];
}
}, p$1);

Clazz.newMeth(C$, 'toByte3BGR$BA$BA', function (ctxData, buf) {
var t=buf;
var n=(ctxData.length >> 2) * 3;
for (var i=0, j=0; i < n; j+=4) {
t[i++]=ctxData[j + 2];
t[i++]=ctxData[j + 1];
t[i++]=ctxData[j];
}
}, p$1);

Clazz.newMeth(C$, 'toByteBinary$BA$BA', function (ctxData, buf) {
}, p$1);

Clazz.newMeth(C$, 'toByteGray$BA$BA', function (ctxData, buf) {
}, p$1);

Clazz.newMeth(C$, 'toInt3BGR$BA$IA', function (ctxData, buf) {
var n=ctxData.length >> 2;
for (var i=0, j=0; i < n; ) {
var argb=(ctxData[j++]) | (ctxData[j++] << 8) | (ctxData[j++] << 16) | -16777216 ;
buf[i++]=(ctxData[j++] == 0 ? 0 : argb);
}
}, p$1);

Clazz.newMeth(C$, 'flush$', function () {
this.秘pix=null;
this.秘haveFilePixels=false;
});

Clazz.newMeth(C$, '秘getImageGraphic$', function () {
if (this.秘g == null ) {
var canvas=$I$(15,"createElement",["canvas", "img" + System.currentTimeMillis$()]);
var w=this.getWidth$();
var h=this.getHeight$();

canvas.width = w; canvas.height = h;
this.秘canvas=canvas;
var pix=this.秘pix;
this.秘g=Clazz.new_($I$(17,1).c$$O,[canvas]);
if (pix != null ) this.秘g.drawImageFromRaster$java_awt_Image$I$I$java_awt_image_ImageObserver(this, 0, 0, null);

if (pix) pix.img = this;
this.flush$();
}var g2d=this.秘g;
if (this.秘component != null ) {
g2d.setFont$java_awt_Font(this.秘component.getFont$());
g2d.setBackground$java_awt_Color(this.秘component.getBackground$());
g2d.setColor$java_awt_Color(this.秘component.getForeground$());
}return g2d;
});

Clazz.newMeth(C$, '秘isOpaque$', function () {
switch (this.imageType) {
case 2:
case 3:
case 6:
case -6:
case 7:
return false;
case 1:
case 4:
case 5:
case 10:
case 11:
case 12:
case 13:
case 8:
case 9:
default:
return true;
}
});

Clazz.newMeth(C$, 'get秘pix$', function () {
var pixels=null;
var r=this.raster;
var p=this.秘pix;
switch (this.imageType) {
case 1:
case 2:
case -6:
var rp=(r).秘pix;

pixels = rp || p;
break;
default:
pixels=p$1.秘getPixelsFromRaster.apply(this, []);
break;
}
return pixels;
});

Clazz.newMeth(C$, '秘getPixelsFromRaster', function () {
if (this.imageType == -6) return this.秘pix=(this.raster.getDataBuffer$()).getData$();
var n=this.秘wxh;
if (this.秘pix == null  || this.秘pix.length != n * 4 ) this.秘pix=Clazz.array(Integer.TYPE, [n * 4]);
var cm=this.getColorModel$();
var isPacked=Clazz.instanceOf(cm, "java.awt.image.PackedColorModel");
var p=this.秘pix;
if (isPacked) {
var alpha=(cm.getNumColorComponents$() == 3 ? 255 : -1);
var a=Clazz.array(Integer.TYPE, [n]);
this.raster.getDataElements$I$I$I$I$O(0, 0, this.width, this.height, a);
for (var i=0, pt=0; i < n; i++, pt+=4) {
cm.getComponents$I$IA$I(a[i], p, pt);
if (alpha != 0) p[pt + 3]=alpha;
}
} else {
var nc=cm.getNumComponents$();
this.raster.getPixels$I$I$I$I$IA(0, 0, this.width, this.height, p);
switch (nc) {
case 1:
var pc=$I$(18).$$instance;
for (var i=n, pt=n * 4; --i >= 0; ) {
var val=p[i];
p[--pt]=255;
switch (val) {
case 65535:
case 0:
p[--pt]=val;
p[--pt]=val;
p[--pt]=val;
break;
default:
var rgb=(val == 0 ? -16777216 : val == 65535 ? -1 : pc.pixelToRgb$I$java_awt_image_ColorModel(val, null));
p[--pt]=rgb & 255;
p[--pt]=(rgb >> 8) & 255;
p[--pt]=(rgb >> 16) & 255;
break;
}
}
break;
case 3:
for (var i=n * 4, j=n * 3; --i >= 0; ) {
if (i % 4 == 3) p[i--]=255;
p[i]=p[--j];
}
break;
case 4:
this.getRaster$().getPixels$I$I$I$I$IA(0, 0, this.width, this.height, p);
break;
}
}return p;
}, p$1);

Clazz.newMeth(C$, '秘getImageNode$I', function (mode) {
switch (mode) {
default:
case 0:
return (this.秘hasRasterData || this.秘canvas != null   ? this.秘canvas : this.秘imgNode != null  ? this.秘imgNode : $I$(19).createImageNode$java_awt_Image(this));
case 2:
if (!this.秘hasRasterData) return (this.秘canvas != null  ? this.秘canvas : this.秘imgNode != null  ? this.秘imgNode : $I$(19).createImageNode$java_awt_Image(this));
case 1:
p$1.秘getPixelsFromRaster.apply(this, []);
this.秘g=null;
this.秘getImageGraphic$();
var canvas=this.秘g.getCanvas$();
this.秘g=null;
this.秘canvas=null;
return canvas;
}
});

Clazz.newMeth(C$, '秘setPixels$IA', function (argb) {
this.秘pix=argb;
this.秘haveFilePixels=true;
});

Clazz.newMeth(C$, '秘getRaster$', function () {
return this.raster;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:18 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
