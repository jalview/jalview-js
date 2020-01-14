(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.awt.image.DataBufferByte','java.awt.image.DataBufferInt','java.awt.image.DataBuffer','java.awt.Point','java.awt.image.SinglePixelPackedSampleModel','swingjs.api.Interface','java.awt.image.MultiPixelPackedSampleModel','sun.awt.image.BytePackedRaster','sun.awt.image.SunWritableRaster','java.awt.Rectangle']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Raster");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.image=null;
this.sampleModel=null;
this.dataBuffer=null;
this.minX=0;
this.minY=0;
this.width=0;
this.height=0;
this.sampleModelTranslateX=0;
this.sampleModelTranslateY=0;
this.numBands=0;
this.numDataElements=0;
this.parent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setImage$java_awt_image_BufferedImage', function (image) {
this.image=image;
});

Clazz.newMeth(C$, 'createPackedRaster$I$I$I$IA$java_awt_Point', function (dataType, w, h, bandMasks, location) {
var d;
switch (dataType) {
case 0:
d=Clazz.new_($I$(1).c$$I,[w * h]);
break;
case 3:
d=Clazz.new_($I$(2).c$$I,[w * h]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
return C$.createPackedRaster$java_awt_image_DataBuffer$I$I$I$IA$java_awt_Point(d, w, h, w, bandMasks, location);
}, 1);

Clazz.newMeth(C$, 'createPackedRaster$I$I$I$I$I$java_awt_Point', function (dataType, w, h, bands, bitsPerBand, location) {
var d;
if (bands <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of bands (" + bands + ") must be greater than 0" ]);
}if (bitsPerBand <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bits per band (" + bitsPerBand + ") must be greater than 0" ]);
}if (bands != 1) {
var masks=Clazz.array(Integer.TYPE, [bands]);
var mask=(1 << bitsPerBand) - 1;
var shift=(bands - 1) * bitsPerBand;
if (shift + bitsPerBand > $I$(3).getDataTypeSize$I(dataType)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bitsPerBand(" + bitsPerBand + ") * bands is " + " greater than data type " + "size." ]);
}switch (dataType) {
case 0:
case 3:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
for (var i=0; i < bands; i++) {
masks[i]=mask << shift;
shift=shift - bitsPerBand;
}
return C$.createPackedRaster$I$I$I$IA$java_awt_Point(dataType, w, h, masks, location);
} else {
var fw=w;
switch (dataType) {
case 0:
d=Clazz.new_($I$(1).c$$I,[((Math.ceil(fw / ((8/bitsPerBand|0))))|0) * h]);
break;
case 3:
d=Clazz.new_($I$(2).c$$I,[((Math.ceil(fw / ((32/bitsPerBand|0))))|0) * h]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
return C$.createPackedRaster$java_awt_image_DataBuffer$I$I$I$java_awt_Point(d, w, h, bitsPerBand, location);
}}, 1);

Clazz.newMeth(C$, 'createPackedRaster$java_awt_image_DataBuffer$I$I$I$IA$java_awt_Point', function (dataBuffer, w, h, scanlineStride, bandMasks, location) {
if (dataBuffer == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["DataBuffer cannot be null"]);
}if (location == null ) {
location=Clazz.new_($I$(4).c$$I$I,[0, 0]);
}var dataType=dataBuffer.getDataType$();
var sppsm=Clazz.new_($I$(5).c$$I$I$I$I$IA,[dataType, w, h, scanlineStride, bandMasks]);
switch (dataType) {
case 0:
case 3:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}
var r=$I$(6).getInstance$S$Z("sun.awt.image." + (dataType == 0 ? "Byte" : "Integer") + "InterleavedRaster" , true);
r.setParams$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(sppsm, dataBuffer, location);
return r;
}, 1);

Clazz.newMeth(C$, 'createPackedRaster$java_awt_image_DataBuffer$I$I$I$java_awt_Point', function (dataBuffer, w, h, bitsPerPixel, location) {
if (dataBuffer == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["DataBuffer cannot be null"]);
}if (location == null ) {
location=Clazz.new_($I$(4).c$$I$I,[0, 0]);
}var dataType=dataBuffer.getDataType$();
if (dataType != 0 && dataType != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported data type " + dataType]);
}if (dataBuffer.getNumBanks$() != 1) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["DataBuffer for packed Rasters must only have 1 bank."]);
}var mppsm=Clazz.new_($I$(7).c$$I$I$I$I,[dataType, w, h, bitsPerPixel]);
if (dataType == 0 && (bitsPerPixel == 1 || bitsPerPixel == 2  || bitsPerPixel == 4 ) ) {
return Clazz.new_($I$(8).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[mppsm, dataBuffer, location]);
} else {
return Clazz.new_($I$(9).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[mppsm, dataBuffer, location]);
}}, 1);

Clazz.newMeth(C$, 'createRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point', function (sm, db, location) {
if ((sm == null ) || (db == null ) ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["SampleModel and DataBuffer cannot be null"]);
}if (location == null ) {
location=Clazz.new_($I$(4).c$$I$I,[0, 0]);
}var dataType=sm.getDataType$();
if (Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel") && dataType == 0  && sm.getSampleSize$I(0) < 8 ) {
return Clazz.new_($I$(8).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}, 1);

Clazz.newMeth(C$, 'createWritableRaster$java_awt_image_SampleModel$java_awt_Point', function (sm, location) {
if (location == null ) {
location=Clazz.new_($I$(4).c$$I$I,[0, 0]);
}return C$.createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(sm, sm.createDataBuffer$(), location);
}, 1);

Clazz.newMeth(C$, 'createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point', function (sm, db, location) {
if ((sm == null ) || (db == null ) ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["SampleModel and DataBuffer cannot be null"]);
}if (location == null ) {
location=Clazz.new_($I$(4).c$$I$I,[0, 0]);
}var dataType=sm.getDataType$();
if (Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel") && dataType == 0  && sm.getSampleSize$I(0) < 8 ) {
return Clazz.new_($I$(8).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}return Clazz.new_($I$(9).c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point,[sm, db, location]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_Point', function (sampleModel, origin) {
C$.$init$.apply(this);
this.setRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster(sampleModel, sampleModel.createDataBuffer$(), Clazz.new_($I$(10).c$$I$I$I$I,[origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()]), origin, null);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point', function (sampleModel, dataBuffer, origin) {
C$.$init$.apply(this);
this.setRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster(sampleModel, dataBuffer, Clazz.new_($I$(10).c$$I$I$I$I,[origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()]), origin, null);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster', function (sampleModel, dataBuffer, aRegion, sampleModelTranslate, parent) {
C$.$init$.apply(this);
this.setRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster(sampleModel, dataBuffer, aRegion, sampleModelTranslate, parent);
}, 1);

Clazz.newMeth(C$, 'setRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster', function (sampleModel, dataBuffer, aRegion, sampleModelTranslate, parent) {
if ((sampleModel == null ) || (dataBuffer == null ) || (aRegion == null ) || (sampleModelTranslate == null )  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["SampleModel, dataBuffer, aRegion and sampleModelTranslate cannot be null"]);
}this.sampleModel=sampleModel;
this.dataBuffer=dataBuffer;
this.minX=aRegion.x;
this.minY=aRegion.y;
this.width=aRegion.width;
this.height=aRegion.height;
if (this.width <= 0 || this.height <= 0 ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["negative or zero " + ((this.width <= 0) ? "width" : "height")]);
}if ((this.minX + this.width) < this.minX) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["overflow condition for X coordinates of Raster"]);
}if ((this.minY + this.height) < this.minY) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["overflow condition for Y coordinates of Raster"]);
}this.sampleModelTranslateX=sampleModelTranslate.x;
this.sampleModelTranslateY=sampleModelTranslate.y;
this.numBands=sampleModel.getNumBands$();
this.numDataElements=sampleModel.getNumDataElements$();
this.parent=parent;
});

Clazz.newMeth(C$, 'getParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'getSampleModelTranslateX$', function () {
return this.sampleModelTranslateX;
});

Clazz.newMeth(C$, 'getSampleModelTranslateY$', function () {
return this.sampleModelTranslateY;
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$', function () {
return Clazz.new_($I$(9).c$$java_awt_image_SampleModel$java_awt_Point,[this.sampleModel, Clazz.new_($I$(4).c$$I$I,[0, 0])]);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I', function (w, h) {
if (w <= 0 || h <= 0 ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["negative " + ((w <= 0) ? "width" : "height")]);
}var sm=this.sampleModel.createCompatibleSampleModel$I$I(w, h);
return Clazz.new_($I$(9).c$$java_awt_image_SampleModel$java_awt_Point,[sm, Clazz.new_($I$(4).c$$I$I,[0, 0])]);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$java_awt_Rectangle', function (rect) {
if (rect == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Rect cannot be null"]);
}return this.createCompatibleWritableRaster$I$I$I$I(rect.x, rect.y, rect.width, rect.height);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I$I$I', function (x, y, w, h) {
var ret=this.createCompatibleWritableRaster$I$I(w, h);
return ret.createWritableChild$I$I$I$I$I$I$IA(0, 0, w, h, x, y, null);
});

Clazz.newMeth(C$, 'createTranslatedChild$I$I', function (childMinX, childMinY) {
return this.createChild$I$I$I$I$I$I$IA(this.minX, this.minY, this.width, this.height, childMinX, childMinY, null);
});

Clazz.newMeth(C$, 'createChild$I$I$I$I$I$I$IA', function (parentX, parentY, width, height, childMinX, childMinY, bandList) {
if (parentX < this.minX) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["parentX lies outside raster"]);
}if (parentY < this.minY) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["parentY lies outside raster"]);
}if ((parentX + width < parentX) || (parentX + width > this.width + this.minX) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(parentX + width) is outside raster"]);
}if ((parentY + height < parentY) || (parentY + height > this.height + this.minY) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(parentY + height) is outside raster"]);
}var subSampleModel;
if (bandList == null ) {
subSampleModel=this.sampleModel;
} else {
subSampleModel=this.sampleModel.createSubsetSampleModel$IA(bandList);
}var deltaX=childMinX - parentX;
var deltaY=childMinY - parentY;
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster,[subSampleModel, this.getDataBuffer$(), Clazz.new_($I$(10).c$$I$I$I$I,[childMinX, childMinY, width, height]), Clazz.new_($I$(4).c$$I$I,[this.sampleModelTranslateX + deltaX, this.sampleModelTranslateY + deltaY]), this]);
});

Clazz.newMeth(C$, 'getBounds$', function () {
return Clazz.new_($I$(10).c$$I$I$I$I,[this.minX, this.minY, this.width, this.height]);
});

Clazz.newMeth(C$, 'getMinX$', function () {
return this.minX;
});

Clazz.newMeth(C$, 'getMinY$', function () {
return this.minY;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getNumBands$', function () {
return this.numBands;
});

Clazz.newMeth(C$, 'getNumDataElements$', function () {
return this.sampleModel.getNumDataElements$();
});

Clazz.newMeth(C$, 'getTransferType$', function () {
return this.sampleModel.getTransferType$();
});

Clazz.newMeth(C$, 'getDataBuffer$', function () {
return this.dataBuffer;
});

Clazz.newMeth(C$, 'getSampleModel$', function () {
return this.sampleModel;
});

Clazz.newMeth(C$, 'getDataElements$I$I$O', function (x, y, outData) {
return this.sampleModel.getDataElements$I$I$O$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, outData, this.dataBuffer);
});

Clazz.newMeth(C$, 'getDataElements$I$I$I$I$O', function (x, y, w, h, outData) {
return this.sampleModel.getDataElements$I$I$I$I$O$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, outData, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixel$I$I$IA', function (x, y, iArray) {
return this.sampleModel.getPixel$I$I$IA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, iArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixel$I$I$FA', function (x, y, fArray) {
return this.sampleModel.getPixel$I$I$FA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, fArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixel$I$I$DA', function (x, y, dArray) {
return this.sampleModel.getPixel$I$I$DA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, dArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$IA', function (x, y, w, h, iArray) {
return this.sampleModel.getPixels$I$I$I$I$IA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, iArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$FA', function (x, y, w, h, fArray) {
return this.sampleModel.getPixels$I$I$I$I$FA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, fArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$DA', function (x, y, w, h, dArray) {
return this.sampleModel.getPixels$I$I$I$I$DA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, dArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSample$I$I$I', function (x, y, b) {
return this.sampleModel.getSample$I$I$I$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, b, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSampleFloat$I$I$I', function (x, y, b) {
return this.sampleModel.getSampleFloat$I$I$I$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, b, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSampleDouble$I$I$I', function (x, y, b) {
return this.sampleModel.getSampleDouble$I$I$I$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, b, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$IA', function (x, y, w, h, b, iArray) {
return this.sampleModel.getSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, b, iArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$FA', function (x, y, w, h, b, fArray) {
return this.sampleModel.getSamples$I$I$I$I$I$FA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, b, fArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$DA', function (x, y, w, h, b, dArray) {
return this.sampleModel.getSamples$I$I$I$I$I$DA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, b, dArray, this.dataBuffer);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:31 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
