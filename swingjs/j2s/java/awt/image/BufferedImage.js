(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.awt.image.DirectColorModel','java.awt.image.ColorModel','java.util.Hashtable','sun.awt.image.OffScreenImageSource','java.awt.Image','java.awt.GraphicsEnvironment','java.awt.image.Raster','java.awt.Point','java.awt.Rectangle','swingjs.api.js.DOMNode','swingjs.JSGraphics2D']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BufferedImage", null, 'java.awt.Image', ['java.awt.image.RenderedImage', 'java.awt.Transparency']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.imageType=0;
this.colorModel=null;
this.raster=null;
this.osis=null;
this.properties=null;
this.isAlphaPremultiplied=false;
this._pix=null;
this._imgNode=null;
this.width=0;
this.height=0;
this._havePix=false;
this._canvas=null;
this._component=null;
this._pixSaved=null;
this._g=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.imageType=0;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (width, height, imageType) {
Clazz.super_(C$, this,1);
this.width=width;
this.height=height;
switch (imageType) {
case 1:
{
this.colorModel=Clazz.new_($I$(1).c$$I$I$I$I$I,[24, 16711680, 65280, 255, 0]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
this.raster.setImage$java_awt_image_BufferedImage(this);
this._pix=(this.raster.getDataBuffer$()).data;
}break;
case 3:
case 2:
{
this.colorModel=$I$(2).getRGBdefault$();
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
this.raster.setImage$java_awt_image_BufferedImage(this);
this._pix=(this.raster.getDataBuffer$()).data;
}break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown image type " + imageType]);
}
this.imageType=imageType;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable', function (cm, raster, isRasterPremultiplied, properties) {
Clazz.super_(C$, this,1);
if ((raster.minX != 0) || (raster.minY != 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Raster " + raster + " has minX or minY not equal to zero: " + raster.minX + " " + raster.minY ]);
}this.colorModel=cm;
this.raster=raster;
raster.setImage$java_awt_image_BufferedImage(this);
this._pix=(raster.getDataBuffer$()).data;
this.properties=properties;
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return this.imageType;
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return this.colorModel;
});

Clazz.newMeth(C$, 'getRaster$', function () {
return this.raster;
});

Clazz.newMeth(C$, 'getRGB$I$I', function (x, y) {
this.checkHavePixels$();
if (this._pix == null ) this._pix=this._pixSaved;
return this._pix[y * this.width + x];
});

Clazz.newMeth(C$, 'getRGB$I$I$I$I$IA$I$I', function (startX, startY, w, h, rgbArray, offset, scansize) {
this.checkHavePixels$();
if (this._pix == null ) this._pix=this._pixSaved;
return this.getRangeRGB$I$I$I$I$IA$I$I(startX, startY, w, h, rgbArray, offset, scansize);
});

Clazz.newMeth(C$, 'checkHavePixels$', function () {
if ((this._imgNode != null  || this._g != null  ) && !this._havePix ) {
this.setPixels$();
return true;
}return false;
});

Clazz.newMeth(C$, 'getRangeRGB$I$I$I$I$IA$I$I', function (startX, startY, w, h, rgbArray, offset, scansize) {
if (this._pix == null  && this._pixSaved == null  ) this.checkHavePixels$();
var pixels=(this._pix == null  ? this._pixSaved : this._pix);
for (var y=startY, yoff=offset; y < startY + h; y++, yoff+=scansize) for (var off=yoff, x=startX; x < startX + w; x++) rgbArray[off++]=pixels[y * this.width + x];


return rgbArray;
});

Clazz.newMeth(C$, 'setRGB$I$I$I', function (x, y, rgb) {
if (this.checkHavePixels$()) this._imgNode=null;
var pixels=(this._pix == null  ? this._pixSaved : this._pix);
pixels[y * this.width + x]=rgb;
});

Clazz.newMeth(C$, 'setRGB$I$I$I$I$IA$I$I', function (startX, startY, w, h, rgbArray, offset, scansize) {
if (this.checkHavePixels$()) this._imgNode=null;
var pixels=(this._pix == null  ? this._pixSaved : this._pix);
var width=this.width;
for (var y=startY, yoff=offset; y < startY + h; y++, yoff+=scansize) for (var x=startX, off=yoff; x < startX + w; x++) pixels[y * width + x]=rgbArray[off++];


this._pix=this._pixSaved=pixels;
this._g=null;
this.getImageGraphic$();
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
this.properties=Clazz.new_($I$(3));
}this.osis=Clazz.new_($I$(4).c$$java_awt_image_BufferedImage$java_util_Hashtable,[this, this.properties]);
}return this.osis;
});

Clazz.newMeth(C$, 'getProperty$S$java_awt_image_ImageObserver', function (name, observer) {
return this.getProperty$S(name);
});

Clazz.newMeth(C$, 'getProperty$S', function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null property name is not allowed"]);
}if (this.properties == null ) {
return $I$(5).UndefinedProperty;
}var o=this.properties.get$O(name);
if (o == null ) {
o=$I$(5).UndefinedProperty;
}return o;
});

Clazz.newMeth(C$, 'getGraphics$', function () {
return this.createGraphics$();
});

Clazz.newMeth(C$, 'createGraphics$', function () {
var env=$I$(6).getLocalGraphicsEnvironment$();
return env.createGraphics$java_awt_image_BufferedImage(this);
});

Clazz.newMeth(C$, 'getSubimage$I$I$I$I', function (x, y, w, h) {
return Clazz.new_(C$.c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, this.raster.createWritableChild$I$I$I$I$I$I$IA(x, y, w, h, 0, 0, null), this.colorModel.isAlphaPremultiplied$(), this.properties]);
});

Clazz.newMeth(C$, 'isAlphaPremultiplied$', function () {
return false;
});

Clazz.newMeth(C$, 'toString', function () {
return  String.instantialize("BufferedImage@" + Integer.toHexString$I(this.hashCode$()) + ": type = " + this.imageType + " " + this.colorModel.toString() + " " + this.raster.toString() );
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
var wr=$I$(7).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.raster.getSampleModel$(), Clazz.new_($I$(8).c$$I$I,[this.raster.getSampleModelTranslateX$(), this.raster.getSampleModelTranslateY$()]));
var tdata=null;
this.checkHavePixels$();
for (var i=startY; i < startY + height; i++) {
tdata=this.raster.getDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
wr.setDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
}
return wr;
});

Clazz.newMeth(C$, 'getData$java_awt_Rectangle', function (rect) {
var sm=this.raster.getSampleModel$();
var nsm=sm.createCompatibleSampleModel$I$I(rect.width, rect.height);
var wr=$I$(7).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(nsm, rect.getLocation$());
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
var rclip=Clazz.new_($I$(9).c$$I$I$I$I,[startX, startY, width, height]);
var bclip=Clazz.new_($I$(9).c$$I$I$I$I,[0, 0, this.raster.width, this.raster.height]);
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

Clazz.newMeth(C$, 'getTransparency$', function () {
return this.colorModel.getTransparency$();
});

Clazz.newMeth(C$, 'setImageFromHTML5Canvas$swingjs_JSGraphics2D', function (g) {
this._g=g;
this.width=this.raster.width;
this.height=this.raster.height;
this.setPixels$();
});

Clazz.newMeth(C$, 'setPixels$', function () {
var canvas=(this._g == null  ? null : this._g.canvas ||null);
if (canvas == null ) canvas=$I$(10).createElement("canvas", null);
var w=this.width;
var h=this.height;
var data=null;
{
if (!this._g) { canvas.width = w;
canvas.height = h;
} var ctx = canvas.getContext("2d");
if (!this._g) ctx.drawImage(this._imgNode, 0, 0, w, h);
data = ctx.getImageData(0, 0, w, h).data;
}
var buffer=this.raster.getDataBuffer$();
this.toIntARGB$IA$IA(data, this._pix=buffer.data);
this._imgNode=canvas;
this._havePix=true;
});

Clazz.newMeth(C$, 'toIntARGB$IA$IA', function (imgData, iData) {
var n=(imgData.length/4|0);
var a;
for (var i=0, j=0; i < n; ) {
var argb=(imgData[j++] << 16) | (imgData[j++] << 8) | imgData[j++] | -16777216 ;
iData[i++]=(imgData[j++] == 0 ? 0 : argb);
}
});

Clazz.newMeth(C$, 'getImageGraphic$', function () {
if (this._g == null ) {
var canvas=$I$(10).createElement("canvas", "img" + System.currentTimeMillis$());
var w=this.getWidth$();
var h=this.getHeight$();

canvas.width = w;
canvas.height = h;
this._canvas=canvas;
var pix=this._pix;
this._g=Clazz.new_($I$(11).c$$O,[canvas]);
if (pix != null ) this._g.drawImagePriv$java_awt_Image$I$I$java_awt_image_ImageObserver(this, 0, 0, null);
{
if (pix) pix.img = this;
}
this._pix=null;
}var g2d=this._g;
if (this._component != null ) {
g2d.setFont$java_awt_Font(this._component.getFont$());
g2d.setBackground$java_awt_Color(this._component.getBackground$());
g2d.setColor$java_awt_Color(this._component.getForeground$());
}return g2d;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
