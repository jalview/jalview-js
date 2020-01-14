(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'java.awt.Rectangle','java.awt.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ByteInterleavedRaster", null, 'sun.awt.image.ByteComponentRaster');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.inOrder=false;
this.dbOffset=0;
this.dbOffsetPacked=0;
this.packed=false;
this.bitMasks=null;
this.bitOffsets=null;
this.$maxX=0;
this.$maxY=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.packed=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_Point', function (sampleModel, origin) {
Clazz.super_(C$, this,1);
p$1.setByteInterRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ByteInterleavedRaster.apply(this, [sampleModel, sampleModel.createDataBuffer$(), Clazz.new_($I$(1).c$$I$I$I$I,[origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()]), origin, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point', function (sampleModel, dataBuffer, origin) {
Clazz.super_(C$, this,1);
this.setParams$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(sampleModel, dataBuffer, origin);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'setParams$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point', function (sampleModel, dataBuffer, origin) {
p$1.setByteInterRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ByteInterleavedRaster.apply(this, [sampleModel, dataBuffer, Clazz.new_($I$(1).c$$I$I$I$I,[origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()]), origin, null]);
});

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ByteInterleavedRaster', function (sampleModel, dataBuffer, aRegion, origin, parent) {
Clazz.super_(C$, this,1);
p$1.setByteInterRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ByteInterleavedRaster.apply(this, [sampleModel, dataBuffer, aRegion, origin, parent]);
}, 1);

Clazz.newMeth(C$, 'setByteInterRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ByteInterleavedRaster', function (sampleModel, dataBuffer, aRegion, origin, parent) {
this.$maxX=this.minX + this.width;
this.$maxY=this.minY + this.height;
if (!(Clazz.instanceOf(dataBuffer, "java.awt.image.DataBufferByte"))) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["ByteInterleavedRasters must have byte DataBuffers"]);
}var dbb=dataBuffer;
this.data=P$.SunWritableRaster.stealData$java_awt_image_DataBufferByte$I(dbb, 0);
var xOffset=aRegion.x - origin.x;
var yOffset=aRegion.y - origin.y;
if (Clazz.instanceOf(sampleModel, "java.awt.image.SinglePixelPackedSampleModel")) {
var sppsm=sampleModel;
this.packed=true;
this.bitMasks=sppsm.getBitMasks$();
this.bitOffsets=sppsm.getBitOffsets$();
this.scanlineStride=sppsm.getScanlineStride$();
this.pixelStride=1;
this.dataOffsets=Clazz.array(Integer.TYPE, [1]);
this.dataOffsets[0]=dbb.getOffset$();
this.dataOffsets[0]+=xOffset * this.pixelStride + yOffset * this.scanlineStride;
} else {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["ByteInterleavedRasters must " + "have PixelInterleavedSampleModel, SinglePixelPackedSampleModel" + " or interleaved ComponentSampleModel.  Sample model is " + sampleModel ]);
}this.bandOffset=this.dataOffsets[0];
this.dbOffsetPacked=dataBuffer.getOffset$() - this.sampleModelTranslateY * this.scanlineStride - this.sampleModelTranslateX * this.pixelStride;
this.dbOffset=this.dbOffsetPacked - (xOffset * this.pixelStride + yOffset * this.scanlineStride);
this.inOrder=false;
if (this.numDataElements == this.pixelStride) {
this.inOrder=true;
for (var i=1; i < this.numDataElements; i++) {
if (this.dataOffsets[i] - this.dataOffsets[0] != i) {
this.inOrder=false;
break;
}}
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
outData=Clazz.array(Byte.TYPE, [this.numDataElements]);
} else {
outData=obj;
}var off=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
for (var band=0; band < this.numDataElements; band++) {
outData[band]=(this.data[this.dataOffsets[band] + off]|0);
}
return outData;
});

Clazz.newMeth(C$, 'getDataElements$I$I$I$I$O', function (x, y, w, h, obj) {
return this.getByteData$I$I$I$I$BA(x, y, w, h, obj);
});

Clazz.newMeth(C$, 'getByteData$I$I$I$I$I$BA', function (x, y, w, h, band, outData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.$maxX) || (y + h > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (outData == null ) {
outData=Clazz.array(Byte.TYPE, [w * h]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride + this.dataOffsets[band];
var xoff;
var off=0;
var xstart;
var ystart;
if (this.pixelStride == 1) {
if (this.scanlineStride == w) {
System.arraycopy$O$I$O$I$I(this.data, yoff, outData, 0, w * h);
} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
System.arraycopy$O$I$O$I$I(this.data, yoff, outData, off, w);
off+=w;
}
}} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
outData[off++]=(this.data[xoff]|0);
}
}
}return outData;
});

Clazz.newMeth(C$, 'getByteData$I$I$I$I$BA', function (x, y, w, h, outData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.$maxX) || (y + h > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (outData == null ) {
outData=Clazz.array(Byte.TYPE, [this.numDataElements * w * h ]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
var xoff;
var off=0;
var xstart;
var ystart;
if (this.inOrder) {
yoff+=this.dataOffsets[0];
var rowBytes=w * this.pixelStride;
if (this.scanlineStride == rowBytes) {
System.arraycopy$O$I$O$I$I(this.data, yoff, outData, off, rowBytes * h);
} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
System.arraycopy$O$I$O$I$I(this.data, yoff, outData, off, rowBytes);
off+=rowBytes;
}
}} else if (this.numDataElements == 1) {
yoff+=this.dataOffsets[0];
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
outData[off++]=(this.data[xoff]|0);
}
}
} else if (this.numDataElements == 2) {
yoff+=this.dataOffsets[0];
var d1=this.dataOffsets[1] - this.dataOffsets[0];
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
outData[off++]=(this.data[xoff]|0);
outData[off++]=(this.data[xoff + d1]|0);
}
}
} else if (this.numDataElements == 3) {
yoff+=this.dataOffsets[0];
var d1=this.dataOffsets[1] - this.dataOffsets[0];
var d2=this.dataOffsets[2] - this.dataOffsets[0];
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
outData[off++]=(this.data[xoff]|0);
outData[off++]=(this.data[xoff + d1]|0);
outData[off++]=(this.data[xoff + d2]|0);
}
}
} else if (this.numDataElements == 4) {
yoff+=this.dataOffsets[0];
var d1=this.dataOffsets[1] - this.dataOffsets[0];
var d2=this.dataOffsets[2] - this.dataOffsets[0];
var d3=this.dataOffsets[3] - this.dataOffsets[0];
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
outData[off++]=(this.data[xoff]|0);
outData[off++]=(this.data[xoff + d1]|0);
outData[off++]=(this.data[xoff + d2]|0);
outData[off++]=(this.data[xoff + d3]|0);
}
}
} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
for (var c=0; c < this.numDataElements; c++) {
outData[off++]=(this.data[this.dataOffsets[c] + xoff]|0);
}
}
}
}return outData;
});

Clazz.newMeth(C$, 'setDataElements$I$I$O', function (x, y, obj) {
if ((x < this.minX) || (y < this.minY) || (x >= this.$maxX) || (y >= this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var inData=obj;
var off=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
for (var i=0; i < this.numDataElements; i++) {
this.data[this.dataOffsets[i] + off]=(inData[i]|0);
}
this.markDirty$();
});

Clazz.newMeth(C$, 'setDataElements$I$I$java_awt_image_Raster', function (x, y, inRaster) {
var srcOffX=inRaster.getMinX$();
var srcOffY=inRaster.getMinY$();
var dstOffX=x + srcOffX;
var dstOffY=y + srcOffY;
var width=inRaster.getWidth$();
var height=inRaster.getHeight$();
if ((dstOffX < this.minX) || (dstOffY < this.minY) || (dstOffX + width > this.$maxX) || (dstOffY + height > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}p$1.setDataElements$I$I$I$I$I$I$java_awt_image_Raster.apply(this, [dstOffX, dstOffY, srcOffX, srcOffY, width, height, inRaster]);
});

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$I$I$java_awt_image_Raster', function (dstX, dstY, srcX, srcY, width, height, inRaster) {
if (width <= 0 || height <= 0 ) {
return;
}var srcOffX=inRaster.getMinX$();
var srcOffY=inRaster.getMinY$();
var tdata=null;
if (Clazz.instanceOf(inRaster, "sun.awt.image.ByteInterleavedRaster")) {
var bct=inRaster;
var bdata=bct.getDataStorage$();
if (this.inOrder && bct.inOrder && this.pixelStride == bct.pixelStride  ) {
var toff=bct.getDataOffset$I(0);
var tss=bct.getScanlineStride$();
var tps=bct.getPixelStride$();
var srcOffset=toff + (srcY - srcOffY) * tss + (srcX - srcOffX) * tps;
var dstOffset=this.dataOffsets[0] + (dstY - this.minY) * this.scanlineStride + (dstX - this.minX) * this.pixelStride;
var nbytes=width * this.pixelStride;
for (var tmpY=0; tmpY < height; tmpY++) {
System.arraycopy$O$I$O$I$I(bdata, srcOffset, this.data, dstOffset, nbytes);
srcOffset+=tss;
dstOffset+=this.scanlineStride;
}
this.markDirty$();
return;
}}for (var startY=0; startY < height; startY++) {
tdata=inRaster.getDataElements$I$I$I$I$O(srcOffX, srcOffY + startY, width, 1, tdata);
this.setDataElements$I$I$I$I$O(dstX, dstY + startY, width, 1, tdata);
}
}, p$1);

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$O', function (x, y, w, h, obj) {
this.putByteData$I$I$I$I$BA(x, y, w, h, obj);
});

Clazz.newMeth(C$, 'putByteData$I$I$I$I$I$BA', function (x, y, w, h, band, inData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.$maxX) || (y + h > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride + this.dataOffsets[band];
var xoff;
var off=0;
var xstart;
var ystart;
if (this.pixelStride == 1) {
if (this.scanlineStride == w) {
System.arraycopy$O$I$O$I$I(inData, 0, this.data, yoff, w * h);
} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
System.arraycopy$O$I$O$I$I(inData, off, this.data, yoff, w);
off+=w;
}
}} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
this.data[xoff]=(inData[off++]|0);
}
}
}this.markDirty$();
});

Clazz.newMeth(C$, 'putByteData$I$I$I$I$BA', function (x, y, w, h, inData) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.$maxX) || (y + h > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var yoff=(y - this.minY) * this.scanlineStride + (x - this.minX) * this.pixelStride;
var xoff;
var off=0;
var xstart;
var ystart;
if (this.inOrder) {
yoff+=this.dataOffsets[0];
var rowBytes=w * this.pixelStride;
if (rowBytes == this.scanlineStride) {
System.arraycopy$O$I$O$I$I(inData, 0, this.data, yoff, rowBytes * h);
} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
System.arraycopy$O$I$O$I$I(inData, off, this.data, yoff, rowBytes);
off+=rowBytes;
}
}} else if (this.numDataElements == 1) {
yoff+=this.dataOffsets[0];
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
this.data[xoff]=(inData[off++]|0);
}
}
} else if (this.numDataElements == 2) {
yoff+=this.dataOffsets[0];
var d1=this.dataOffsets[1] - this.dataOffsets[0];
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
this.data[xoff]=(inData[off++]|0);
this.data[xoff + d1]=(inData[off++]|0);
}
}
} else if (this.numDataElements == 3) {
yoff+=this.dataOffsets[0];
var d1=this.dataOffsets[1] - this.dataOffsets[0];
var d2=this.dataOffsets[2] - this.dataOffsets[0];
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
this.data[xoff]=(inData[off++]|0);
this.data[xoff + d1]=(inData[off++]|0);
this.data[xoff + d2]=(inData[off++]|0);
}
}
} else if (this.numDataElements == 4) {
yoff+=this.dataOffsets[0];
var d1=this.dataOffsets[1] - this.dataOffsets[0];
var d2=this.dataOffsets[2] - this.dataOffsets[0];
var d3=this.dataOffsets[3] - this.dataOffsets[0];
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
this.data[xoff]=(inData[off++]|0);
this.data[xoff + d1]=(inData[off++]|0);
this.data[xoff + d2]=(inData[off++]|0);
this.data[xoff + d3]=(inData[off++]|0);
}
}
} else {
for (ystart=0; ystart < h; ystart++, yoff+=this.scanlineStride) {
xoff=yoff;
for (xstart=0; xstart < w; xstart++, xoff+=this.pixelStride) {
for (var c=0; c < this.numDataElements; c++) {
this.data[this.dataOffsets[c] + xoff]=(inData[off++]|0);
}
}
}
}this.markDirty$();
});

Clazz.newMeth(C$, 'getSample$I$I$I', function (x, y, b) {
if ((x < this.minX) || (y < this.minY) || (x >= this.$maxX) || (y >= this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (this.packed) {
var offset=y * this.scanlineStride + x + this.dbOffsetPacked;
var sample=($b$[0] = this.data[offset], $b$[0]);
return (sample & this.bitMasks[b]) >>> this.bitOffsets[b];
} else {
var offset=y * this.scanlineStride + x * this.pixelStride + this.dbOffset;
return this.data[offset + this.dataOffsets[b]] & 255;
}});

Clazz.newMeth(C$, 'setSample$I$I$I$I', function (x, y, b, s) {
if ((x < this.minX) || (y < this.minY) || (x >= this.$maxX) || (y >= this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}if (this.packed) {
var offset=y * this.scanlineStride + x + this.dbOffsetPacked;
var bitMask=this.bitMasks[b];
var value=($b$[0] = this.data[offset], $b$[0]);
value=($b$[0] = value&(~bitMask), $b$[0]);
value=($b$[0] = value|((s << this.bitOffsets[b]) & bitMask), $b$[0]);
this.data[offset]=(value|0);
} else {
var offset=y * this.scanlineStride + x * this.pixelStride + this.dbOffset;
this.data[offset + this.dataOffsets[b]]=((s|0)|0);
}this.markDirty$();
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$IA', function (x, y, w, h, b, iArray) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.$maxX) || (y + h > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var samples;
if (iArray != null ) {
samples=iArray;
} else {
samples=Clazz.array(Integer.TYPE, [w * h]);
}var lineOffset=y * this.scanlineStride + x * this.pixelStride;
var dstOffset=0;
if (this.packed) {
lineOffset+=this.dbOffsetPacked;
var bitMask=this.bitMasks[b];
var bitOffset=this.bitOffsets[b];
for (var j=0; j < h; j++) {
var sampleOffset=lineOffset;
for (var i=0; i < w; i++) {
var value=this.data[sampleOffset++];
samples[dstOffset++]=((value & bitMask) >>> bitOffset);
}
lineOffset+=this.scanlineStride;
}
} else {
lineOffset+=this.dbOffset + this.dataOffsets[b];
for (var j=0; j < h; j++) {
var sampleOffset=lineOffset;
for (var i=0; i < w; i++) {
samples[dstOffset++]=this.data[sampleOffset] & 255;
sampleOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
}return samples;
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$IA', function (x, y, w, h, b, iArray) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.$maxX) || (y + h > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var lineOffset=y * this.scanlineStride + x * this.pixelStride;
var srcOffset=0;
if (this.packed) {
lineOffset+=this.dbOffsetPacked;
var bitMask=this.bitMasks[b];
for (var j=0; j < h; j++) {
var sampleOffset=lineOffset;
for (var i=0; i < w; i++) {
var value=($b$[0] = this.data[sampleOffset], $b$[0]);
value=($b$[0] = value&(~bitMask), $b$[0]);
var sample=iArray[srcOffset++];
value=($b$[0] = value|((sample << this.bitOffsets[b]) & bitMask), $b$[0]);
this.data[sampleOffset++]=(value|0);
}
lineOffset+=this.scanlineStride;
}
} else {
lineOffset+=this.dbOffset + this.dataOffsets[b];
for (var i=0; i < h; i++) {
var sampleOffset=lineOffset;
for (var j=0; j < w; j++) {
this.data[sampleOffset]=((iArray[srcOffset++]|0)|0);
sampleOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
}this.markDirty$();
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$IA', function (x, y, w, h, iArray) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.$maxX) || (y + h > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var pixels;
if (iArray != null ) {
pixels=iArray;
} else {
pixels=Clazz.array(Integer.TYPE, [w * h * this.numBands ]);
}var lineOffset=y * this.scanlineStride + x * this.pixelStride;
var dstOffset=0;
if (this.packed) {
lineOffset+=this.dbOffsetPacked;
for (var j=0; j < h; j++) {
for (var i=0; i < w; i++) {
var value=this.data[lineOffset + i];
for (var k=0; k < this.numBands; k++) {
pixels[dstOffset++]=(value & this.bitMasks[k]) >>> this.bitOffsets[k];
}
}
lineOffset+=this.scanlineStride;
}
} else {
lineOffset+=this.dbOffset;
var d0=this.dataOffsets[0];
if (this.numBands == 1) {
for (var j=0; j < h; j++) {
var pixelOffset=lineOffset + d0;
for (var i=0; i < w; i++) {
pixels[dstOffset++]=this.data[pixelOffset] & 255;
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
} else if (this.numBands == 2) {
var d1=this.dataOffsets[1] - d0;
for (var j=0; j < h; j++) {
var pixelOffset=lineOffset + d0;
for (var i=0; i < w; i++) {
pixels[dstOffset++]=this.data[pixelOffset] & 255;
pixels[dstOffset++]=this.data[pixelOffset + d1] & 255;
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
} else if (this.numBands == 3) {
var d1=this.dataOffsets[1] - d0;
var d2=this.dataOffsets[2] - d0;
for (var j=0; j < h; j++) {
var pixelOffset=lineOffset + d0;
for (var i=0; i < w; i++) {
pixels[dstOffset++]=this.data[pixelOffset] & 255;
pixels[dstOffset++]=this.data[pixelOffset + d1] & 255;
pixels[dstOffset++]=this.data[pixelOffset + d2] & 255;
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
} else if (this.numBands == 4) {
var d1=this.dataOffsets[1] - d0;
var d2=this.dataOffsets[2] - d0;
var d3=this.dataOffsets[3] - d0;
for (var j=0; j < h; j++) {
var pixelOffset=lineOffset + d0;
for (var i=0; i < w; i++) {
pixels[dstOffset++]=this.data[pixelOffset] & 255;
pixels[dstOffset++]=this.data[pixelOffset + d1] & 255;
pixels[dstOffset++]=this.data[pixelOffset + d2] & 255;
pixels[dstOffset++]=this.data[pixelOffset + d3] & 255;
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
} else {
for (var j=0; j < h; j++) {
var pixelOffset=lineOffset;
for (var i=0; i < w; i++) {
for (var k=0; k < this.numBands; k++) {
pixels[dstOffset++]=this.data[pixelOffset + this.dataOffsets[k]] & 255;
}
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
}}return pixels;
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$IA', function (x, y, w, h, iArray) {
if ((x < this.minX) || (y < this.minY) || (x + w > this.$maxX) || (y + h > this.$maxY)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var lineOffset=y * this.scanlineStride + x * this.pixelStride;
var srcOffset=0;
if (this.packed) {
lineOffset+=this.dbOffsetPacked;
for (var j=0; j < h; j++) {
for (var i=0; i < w; i++) {
var value=0;
for (var k=0; k < this.numBands; k++) {
var srcValue=iArray[srcOffset++];
value|=((srcValue << this.bitOffsets[k]) & this.bitMasks[k]);
}
this.data[lineOffset + i]=((value|0)|0);
}
lineOffset+=this.scanlineStride;
}
} else {
lineOffset+=this.dbOffset;
var d0=this.dataOffsets[0];
if (this.numBands == 1) {
for (var j=0; j < h; j++) {
var pixelOffset=lineOffset + d0;
for (var i=0; i < w; i++) {
this.data[pixelOffset]=((iArray[srcOffset++]|0)|0);
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
} else if (this.numBands == 2) {
var d1=this.dataOffsets[1] - d0;
for (var j=0; j < h; j++) {
var pixelOffset=lineOffset + d0;
for (var i=0; i < w; i++) {
this.data[pixelOffset]=((iArray[srcOffset++]|0)|0);
this.data[pixelOffset + d1]=((iArray[srcOffset++]|0)|0);
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
} else if (this.numBands == 3) {
var d1=this.dataOffsets[1] - d0;
var d2=this.dataOffsets[2] - d0;
for (var j=0; j < h; j++) {
var pixelOffset=lineOffset + d0;
for (var i=0; i < w; i++) {
this.data[pixelOffset]=((iArray[srcOffset++]|0)|0);
this.data[pixelOffset + d1]=((iArray[srcOffset++]|0)|0);
this.data[pixelOffset + d2]=((iArray[srcOffset++]|0)|0);
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
} else if (this.numBands == 4) {
var d1=this.dataOffsets[1] - d0;
var d2=this.dataOffsets[2] - d0;
var d3=this.dataOffsets[3] - d0;
for (var j=0; j < h; j++) {
var pixelOffset=lineOffset + d0;
for (var i=0; i < w; i++) {
this.data[pixelOffset]=((iArray[srcOffset++]|0)|0);
this.data[pixelOffset + d1]=((iArray[srcOffset++]|0)|0);
this.data[pixelOffset + d2]=((iArray[srcOffset++]|0)|0);
this.data[pixelOffset + d3]=((iArray[srcOffset++]|0)|0);
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
} else {
for (var j=0; j < h; j++) {
var pixelOffset=lineOffset;
for (var i=0; i < w; i++) {
for (var k=0; k < this.numBands; k++) {
this.data[pixelOffset + this.dataOffsets[k]]=((iArray[srcOffset++]|0)|0);
}
pixelOffset+=this.pixelStride;
}
lineOffset+=this.scanlineStride;
}
}}this.markDirty$();
});

Clazz.newMeth(C$, 'setRect$I$I$java_awt_image_Raster', function (dx, dy, srcRaster) {
if (!(Clazz.instanceOf(srcRaster, "sun.awt.image.ByteInterleavedRaster"))) {
C$.superclazz.prototype.setRect$I$I$java_awt_image_Raster.apply(this, [dx, dy, srcRaster]);
return;
}var width=srcRaster.getWidth$();
var height=srcRaster.getHeight$();
var srcOffX=srcRaster.getMinX$();
var srcOffY=srcRaster.getMinY$();
var dstOffX=dx + srcOffX;
var dstOffY=dy + srcOffY;
if (dstOffX < this.minX) {
var skipX=this.minX - dstOffX;
width-=skipX;
srcOffX+=skipX;
dstOffX=this.minX;
}if (dstOffY < this.minY) {
var skipY=this.minY - dstOffY;
height-=skipY;
srcOffY+=skipY;
dstOffY=this.minY;
}if (dstOffX + width > this.$maxX) {
width=this.$maxX - dstOffX;
}if (dstOffY + height > this.$maxY) {
height=this.$maxY - dstOffY;
}p$1.setDataElements$I$I$I$I$I$I$java_awt_image_Raster.apply(this, [dstOffX, dstOffY, srcOffX, srcOffY, width, height, srcRaster]);
});

Clazz.newMeth(C$, 'createChild$I$I$I$I$I$I$IA', function (x, y, width, height, x0, y0, bandList) {
var newRaster=this.createWritableChild$I$I$I$I$I$I$IA(x, y, width, height, x0, y0, bandList);
return newRaster;
});

Clazz.newMeth(C$, 'createWritableChild$I$I$I$I$I$I$IA', function (x, y, width, height, x0, y0, bandList) {
if (x < this.minX) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["x lies outside the raster"]);
}if (y < this.minY) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["y lies outside the raster"]);
}if ((x + width < x) || (x + width > this.minX + this.width) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(x + width) is outside of Raster"]);
}if ((y + height < y) || (y + height > this.minY + this.height) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(y + height) is outside of Raster"]);
}var sm;
if (bandList != null ) sm=this.sampleModel.createSubsetSampleModel$IA(bandList);
 else sm=this.sampleModel;
var deltaX=x0 - x;
var deltaY=y0 - y;
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$sun_awt_image_ByteInterleavedRaster,[sm, this.dataBuffer, Clazz.new_($I$(1).c$$I$I$I$I,[x0, y0, width, height]), Clazz.new_($I$(2).c$$I$I,[this.sampleModelTranslateX + deltaX, this.sampleModelTranslateY + deltaY]), this]);
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
return  String.instantialize("ByteInterleavedRaster: width = " + this.width + " height = " + this.height + " #numDataElements " + this.numDataElements + " dataOff[0] = " + this.dataOffsets[0] );
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:35 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
