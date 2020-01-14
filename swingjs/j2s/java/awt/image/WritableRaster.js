(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.awt.Rectangle','java.awt.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "WritableRaster", null, 'java.awt.image.Raster');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setParams$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point', function (model, dataBuffer, origin) {
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_Point', function (sampleModel, origin) {
Clazz.super_(C$, this,1);
this.setRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster(sampleModel, sampleModel.createDataBuffer$(), Clazz.new_($I$(1).c$$I$I$I$I,[origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()]), origin, null);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point', function (sampleModel, dataBuffer, origin) {
Clazz.super_(C$, this,1);
this.setRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster(sampleModel, dataBuffer, Clazz.new_($I$(1).c$$I$I$I$I,[origin.x, origin.y, sampleModel.getWidth$(), sampleModel.getHeight$()]), origin, null);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster', function (sampleModel, dataBuffer, aRegion, sampleModelTranslate, parent) {
Clazz.super_(C$, this,1);
this.setRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster(sampleModel, dataBuffer, aRegion, sampleModelTranslate, parent);
}, 1);

Clazz.newMeth(C$, 'getWritableParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'createWritableTranslatedChild$I$I', function (childMinX, childMinY) {
return this.createWritableChild$I$I$I$I$I$I$IA(this.minX, this.minY, this.width, this.height, childMinX, childMinY, null);
});

Clazz.newMeth(C$, 'createWritableChild$I$I$I$I$I$I$IA', function (parentX, parentY, w, h, childMinX, childMinY, bandList) {
if (parentX < this.minX) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["parentX lies outside raster"]);
}if (parentY < this.minY) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["parentY lies outside raster"]);
}if ((parentX + w < parentX) || (parentX + w > this.width + this.minX) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(parentX + width) is outside raster"]);
}if ((parentY + h < parentY) || (parentY + h > this.height + this.minY) ) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["(parentY + height) is outside raster"]);
}var sm;
if (bandList != null ) {
sm=this.sampleModel.createSubsetSampleModel$IA(bandList);
} else {
sm=this.sampleModel;
}var deltaX=childMinX - parentX;
var deltaY=childMinY - parentY;
return Clazz.new_(C$.c$$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Rectangle$java_awt_Point$java_awt_image_Raster,[sm, this.getDataBuffer$(), Clazz.new_($I$(1).c$$I$I$I$I,[childMinX, childMinY, w, h]), Clazz.new_($I$(2).c$$I$I,[this.sampleModelTranslateX + deltaX, this.sampleModelTranslateY + deltaY]), this]);
});

Clazz.newMeth(C$, 'setDataElements$I$I$O', function (x, y, inData) {
this.sampleModel.setDataElements$I$I$O$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, inData, this.dataBuffer);
});

Clazz.newMeth(C$, 'setDataElements$I$I$java_awt_image_Raster', function (x, y, inRaster) {
var dstOffX=x + inRaster.getMinX$();
var dstOffY=y + inRaster.getMinY$();
var width=inRaster.getWidth$();
var height=inRaster.getHeight$();
if ((dstOffX < this.minX) || (dstOffY < this.minY) || (dstOffX + width > this.minX + this.width) || (dstOffY + height > this.minY + this.height)  ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Coordinate out of bounds!"]);
}var srcOffX=inRaster.getMinX$();
var srcOffY=inRaster.getMinY$();
var tdata=null;
for (var startY=0; startY < height; startY++) {
tdata=inRaster.getDataElements$I$I$I$I$O(srcOffX, srcOffY + startY, width, 1, tdata);
this.setDataElements$I$I$I$I$O(dstOffX, dstOffY + startY, width, 1, tdata);
}
});

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$O', function (x, y, w, h, inData) {
this.sampleModel.setDataElements$I$I$I$I$O$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, inData, this.dataBuffer);
});

Clazz.newMeth(C$, 'setRect$java_awt_image_Raster', function (srcRaster) {
this.setRect$I$I$java_awt_image_Raster(0, 0, srcRaster);
});

Clazz.newMeth(C$, 'setRect$I$I$java_awt_image_Raster', function (dx, dy, srcRaster) {
var width=srcRaster.getWidth$();
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
}if (dstOffX + width > this.minX + this.width) {
width=this.minX + this.width - dstOffX;
}if (dstOffY + height > this.minY + this.height) {
height=this.minY + this.height - dstOffY;
}if (width <= 0 || height <= 0 ) {
return;
}switch (srcRaster.getSampleModel$().getDataType$()) {
case 0:
case 3:
var iData=null;
for (var startY=0; startY < height; startY++) {
iData=srcRaster.getPixels$I$I$I$I$IA(srcOffX, srcOffY + startY, width, 1, iData);
this.setPixels$I$I$I$I$IA(dstOffX, dstOffY + startY, width, 1, iData);
}
break;
}
});

Clazz.newMeth(C$, 'setPixel$I$I$IA', function (x, y, iArray) {
this.sampleModel.setPixel$I$I$IA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, iArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'setPixel$I$I$FA', function (x, y, fArray) {
this.sampleModel.setPixel$I$I$FA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, fArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'setPixel$I$I$DA', function (x, y, dArray) {
this.sampleModel.setPixel$I$I$DA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, dArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$IA', function (x, y, w, h, iArray) {
this.sampleModel.setPixels$I$I$I$I$IA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, iArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$FA', function (x, y, w, h, fArray) {
this.sampleModel.setPixels$I$I$I$I$FA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, fArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$DA', function (x, y, w, h, dArray) {
this.sampleModel.setPixels$I$I$I$I$DA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, dArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'setSample$I$I$I$I', function (x, y, b, s) {
this.sampleModel.setSample$I$I$I$I$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, b, s, this.dataBuffer);
});

Clazz.newMeth(C$, 'setSample$I$I$I$F', function (x, y, b, s) {
this.sampleModel.setSample$I$I$I$F$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, b, s, this.dataBuffer);
});

Clazz.newMeth(C$, 'setSample$I$I$I$D', function (x, y, b, s) {
this.sampleModel.setSample$I$I$I$D$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, b, s, this.dataBuffer);
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$IA', function (x, y, w, h, b, iArray) {
this.sampleModel.setSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, b, iArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$FA', function (x, y, w, h, b, fArray) {
this.sampleModel.setSamples$I$I$I$I$I$FA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, b, fArray, this.dataBuffer);
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$DA', function (x, y, w, h, b, dArray) {
this.sampleModel.setSamples$I$I$I$I$I$DA$java_awt_image_DataBuffer(x - this.sampleModelTranslateX, y - this.sampleModelTranslateY, w, h, b, dArray, this.dataBuffer);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
