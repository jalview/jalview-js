(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'java.awt.Rectangle','java.awt.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IntegerInterleavedRaster", null, 'sun.awt.image.IntegerComponentRaster');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$maxX=0;
this.$maxY=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_Point', function (sampleModel, origin) {
Clazz.super_(C$, this,1);
p$1.setIntInterRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_IntegerInterleavedRaster.apply(this, [sampleModel, sampleModel.createDataBuffer$(), Clazz.new_($I$(1).c$$I$I$I$I,[origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()]), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point', function (sampleModel, dataBuffer, origin) {
Clazz.super_(C$, this,1);
this.setParams$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(sampleModel, dataBuffer, origin);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'setParams$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point', function (sampleModel, dataBuffer, origin) {
p$1.setIntInterRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_IntegerInterleavedRaster.apply(this, [sampleModel, dataBuffer, Clazz.new_($I$(1).c$$I$I$I$I,[origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()]), origin, null]);
});

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_IntegerInterleavedRaster', function (sampleModel, dataBuffer, aRegion, origin, parent) {
Clazz.super_(C$, this,1);
p$1.setIntInterRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_IntegerInterleavedRaster.apply(this, [sampleModel, dataBuffer, aRegion, origin, parent]);
}, 1);

Clazz.newMeth(C$, 'setIntInterRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_IntegerInterleavedRaster', function (sampleModel, dataBuffer, aRegion, origin, parent) {
this.setIntCompRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster(sampleModel, dataBuffer, aRegion, origin, parent);
this.$maxX=this.minX + this.width;
this.$maxY=this.minY + this.height;
if (!(Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferInt"))) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["IntegerInterleavedRasters must haveinteger DataBuffers"]);
}var dbi=dataBuffer;
this.data=P$.SunWritableRaster.stealData$java_awt_image_DataBufferInt$I(dbi, 0);
if (Clazz.instanceOf(sampleModel, "java.awt.image.SinglePixelPackedSampleModel")) {
var sppsm=sampleModel;
this.scanlineStride=sppsm.getScanlineStride$();
this.pixelStride=1;
this.dataOffsets=Clazz.array(Integer.TYPE, [1]);
this.dataOffsets[0]=dbi.getOffset$();
this.bandOffset=this.dataOffsets[0];
var xOffset=aRegion.x - origin.x;
var yOffset=aRegion.y - origin.y;
this.dataOffsets[0]+=xOffset + yOffset * this.scanlineStride;
this.numDataElems=sppsm.getNumDataElements$();
} else {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["IntegerInterleavedRasters must have SinglePixelPackedSampleModel"]);
}this.verify$();
}, p$1);

Clazz.newMeth(C$, 'getDataOffsets$', function () {
return this.dataOffsets.clone$();
});

Clazz.newMeth(C$, 'getDataOffset$I', function (band) {
return this.dataOffsets[band];
});

Clazz.newMeth(C$, 'getScanlineStride$', function () {
return this.scanlineStride;
});

Clazz.newMeth(C$, 'getPixelStride$', function () {
return this.pixelStride;
});

Clazz.newMeth(C$, 'getDataStorage$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getDataElements$I$I$O', function (x, y, obj) {
if ((x < this.minX) || (y < this.minY) || (x >= this.$maxX) || (y >= this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var outData;
if (obj == null ) {
outData=Clazz.array(Integer.TYPE, [1]);
} else {
outData=obj;
}var off=(y - this.minY) * this.scanlineStride + (x - this.minX) + this.dataOffsets[0];
outData[0]=this.data[off];
return outData;
});

Clazz.newMeth(C$, 'getDataElements$I$I$I$I$O', function (x, y, w, h, obj) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.$maxX) || (y + h > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var outData;
if (Clazz.instanceOf(obj, Clazz.array(Integer.TYPE, -1))) {
outData=obj;
} else {
outData=Clazz.array(Integer.TYPE, [w * h]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) + this.dataOffsets[0];
var off=0;
for (var ystart=0; ystart < h; ystart++) {
System.arraycopy$O$I$O$I$I(this.data, yoff, outData, off, w);
off+=w;
yoff+=this.scanlineStride;
}
return outData;
});

Clazz.newMeth(C$, 'setDataElements$I$I$O', function (x, y, obj) {
if ((x < this.minX) || (y < this.minY) || (x >= this.$maxX) || (y >= this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var inData=obj;
var off=(y - this.minY) * this.scanlineStride + (x - this.minX) + this.dataOffsets[0];
this.data[off]=inData[0];
this.markDirty$();
});

Clazz.newMeth(C$, 'setDataElements$I$I$java_awt_image_Raster', function (x, y, inRaster) {
var dstOffX=x + inRaster.getMinX$();
var dstOffY=y + inRaster.getMinY$();
var width=inRaster.getWidth$();
var height=inRaster.getHeight$();
if ((dstOffX < this.minX) || (dstOffY < this.minY) || (dstOffX + width > this.$maxX) || (dstOffY + height > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}p$1.setDataElements$I$I$I$I$java_awt_image_Raster.apply(this, [dstOffX, dstOffY, width, height, inRaster]);
});

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$java_awt_image_Raster', function (dstX, dstY, width, height, inRaster) {
if (width <= 0 || height <= 0 ) {
return;
}var srcOffX=inRaster.getMinX$();
var srcOffY=inRaster.getMinY$();
var tdata=null;
if (Clazz.instanceOf(inRaster, "sun.awt.image.IntegerInterleavedRaster")) {
var ict=inRaster;
tdata=ict.getDataStorage$();
var tss=ict.getScanlineStride$();
var toff=ict.getDataOffset$I(0);
var srcOffset=toff;
var dstOffset=this.dataOffsets[0] + (dstY - this.minY) * this.scanlineStride + (dstX - this.minX);
for (var startY=0; startY < height; startY++) {
System.arraycopy$O$I$O$I$I(tdata, srcOffset, this.data, dstOffset, width);
srcOffset+=tss;
dstOffset+=this.scanlineStride;
}
this.markDirty$();
return;
}var odata=null;
for (var startY=0; startY < height; startY++) {
odata=inRaster.getDataElements$I$I$I$I$O(srcOffX, srcOffY + startY, width, 1, odata);
this.setDataElements$I$I$I$I$O(dstX, dstY + startY, width, 1, odata);
}
}, p$1);

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$O', function (x, y, w, h, obj) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.$maxX) || (y + h > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var inData=obj;
var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) + this.dataOffsets[0];
var off=0;
for (var ystart=0; ystart < h; ystart++) {
System.arraycopy$O$I$O$I$I(inData, off, this.data, yoff, w);
off+=w;
yoff+=this.scanlineStride;
}
this.markDirty$();
});

Clazz.newMeth(C$, 'createWritableChild$I$I$I$I$I$I$IA', function (x, y, width, height, x0, y0, bandList) {
if (x < this.minX) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["x lies outside raster"]);
}if (y < this.minY) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["y lies outside raster"]);
}if ((x + width < x) || (x + width > this.minX + this.width) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(x + width) is outside raster"]);
}if ((y + height < y) || (y + height > this.minY + this.height) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(y + height) is outside raster"]);
}var sm;
if (bandList != null ) sm=this.sampleModel.createSubsetSampleModel$IA(bandList);
 else sm=this.sampleModel;
var deltaX=x0 - x;
var deltaY=y0 - y;
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_IntegerInterleavedRaster,[sm, this.dataBuffer, Clazz.new_($I$(1).c$$I$I$I$I,[x0, y0, width, height]), Clazz.new_($I$(2).c$$I$I,[this.sampleModelTranslateX + deltaX, this.sampleModelTranslateY + deltaY]), this]);
});

Clazz.newMeth(C$, 'createChild$I$I$I$I$I$I$IA', function (x, y, width, height, x0, y0, bandList) {
return this.createWritableChild$I$I$I$I$I$I$IA(x, y, width, height, x0, y0, bandList);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I', function (w, h) {
if (w <= 0 || h <= 0 ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["negative " + ((w <= 0) ? "width" : "height")]);
}var sm=this.sampleModel.createCompatibleSampleModel$I$I(w, h);
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_Point,[sm, Clazz.new_($I$(2).c$$I$I,[0, 0])]);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$', function () {
return this.createCompatibleWritableRaster$I$I(this.width, this.height);
});

Clazz.newMeth(C$, 'toString', function () {
return  String.instantialize("IntegerInterleavedRaster: width = " + this.width + " height = " + this.height + " #Bands = " + this.numBands + " xOff = " + this.sampleModelTranslateX + " yOff = " + this.sampleModelTranslateY + " dataOffset[0] " + this.dataOffsets[0] );
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
