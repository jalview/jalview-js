(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[];
var C$=Clazz.newClass(P$, "SampleModel");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.width=0;
this.height=0;
this.numBands=0;
this.dataType=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (dataType, w, h, numBands) {
C$.$init$.apply(this);
var size=w * h;
if (w <= 0 || h <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width (" + w + ") and height (" + h + ") must be > 0" ]);
}if (size >= 2147483647 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Dimensions (width=" + w + " height=" + h + ") are too large" ]);
}if (dataType < 0 || (dataType > 3 && dataType != 32 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported dataType: " + dataType]);
}if (numBands <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of bands must be > 0"]);
}this.dataType=dataType;
this.width=w;
this.height=h;
this.numBands=numBands;
}, 1);

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getNumBands$', function () {
return this.numBands;
});

Clazz.newMeth(C$, 'getDataType$', function () {
return this.dataType;
});

Clazz.newMeth(C$, 'getTransferType$', function () {
return this.dataType;
});

Clazz.newMeth(C$, 'getPixel$I$I$IA$java_awt_image_DataBuffer', function (x, y, iArray, data) {
var pixels;
if (iArray != null ) pixels=iArray;
 else pixels=Clazz.array(Integer.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) {
pixels[i]=this.getSample$I$I$I$java_awt_image_DataBuffer(x, y, i, data);
}
return pixels;
});

Clazz.newMeth(C$, 'getDataElements$I$I$I$I$O$java_awt_image_DataBuffer', function (x, y, w, h, obj, data) {
var type=this.getTransferType$();
var numDataElems=this.getNumDataElements$();
var cnt=0;
var o=null;
switch (type) {
case 0:
var btemp;
var bdata;
if (obj == null ) bdata=Clazz.array(Byte.TYPE, [numDataElems * w * h ]);
 else bdata=obj;
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
o=this.getDataElements$I$I$O$java_awt_image_DataBuffer(j, i, o, data);
btemp=o;
for (var k=0; k < numDataElems; k++) {
bdata[cnt++]=(btemp[k]|0);
}
}
}
obj=bdata;
break;
case 2:
var sdata;
var stemp;
if (obj == null ) sdata=Clazz.array(Short.TYPE, [numDataElems * w * h ]);
 else sdata=obj;
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
o=this.getDataElements$I$I$O$java_awt_image_DataBuffer(j, i, o, data);
stemp=o;
for (var k=0; k < numDataElems; k++) {
sdata[cnt++]=stemp[k];
}
}
}
obj=sdata;
break;
case 3:
var idata;
var itemp;
if (obj == null ) idata=Clazz.array(Integer.TYPE, [numDataElems * w * h ]);
 else idata=obj;
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
o=this.getDataElements$I$I$O$java_awt_image_DataBuffer(j, i, o, data);
itemp=o;
for (var k=0; k < numDataElems; k++) {
idata[cnt++]=itemp[k];
}
}
}
obj=idata;
break;
}
return obj;
});

Clazz.newMeth(C$, 'setDataElements$I$I$I$I$O$java_awt_image_DataBuffer', function (x, y, w, h, obj, data) {
var cnt=0;
var type=this.getTransferType$();
var numDataElems=this.getNumDataElements$();
switch (type) {
case 0:
var barray=obj;
var btemp=Clazz.array(Byte.TYPE, [numDataElems]);
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
for (var k=0; k < numDataElems; k++) {
btemp[k]=(barray[cnt++]|0);
}
this.setDataElements$I$I$O$java_awt_image_DataBuffer(j, i, btemp, data);
}
}
break;
case 3:
var iArray=obj;
var itemp=Clazz.array(Integer.TYPE, [numDataElems]);
for (var i=y; i < y + h; i++) {
for (var j=x; j < x + w; j++) {
for (var k=0; k < numDataElems; k++) {
itemp[k]=iArray[cnt++];
}
this.setDataElements$I$I$O$java_awt_image_DataBuffer(j, i, itemp, data);
}
}
break;
}
});

Clazz.newMeth(C$, 'getPixel$I$I$FA$java_awt_image_DataBuffer', function (x, y, fArray, data) {
var pixels;
if (fArray != null ) pixels=fArray;
 else pixels=Clazz.array(Float.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) pixels[i]=this.getSampleFloat$I$I$I$java_awt_image_DataBuffer(x, y, i, data);

return pixels;
});

Clazz.newMeth(C$, 'getPixel$I$I$DA$java_awt_image_DataBuffer', function (x, y, dArray, data) {
var pixels;
if (dArray != null ) pixels=dArray;
 else pixels=Clazz.array(Double.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) pixels[i]=this.getSampleDouble$I$I$I$java_awt_image_DataBuffer(x, y, i, data);

return pixels;
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$IA$java_awt_image_DataBuffer', function (x, y, w, h, iArray, data) {
var pixels;
var Offset=0;
if (iArray != null ) pixels=iArray;
 else pixels=Clazz.array(Integer.TYPE, [this.numBands * w * h ]);
for (var i=y; i < (h + y); i++) {
for (var j=x; j < (w + x); j++) {
for (var k=0; k < this.numBands; k++) {
pixels[Offset++]=this.getSample$I$I$I$java_awt_image_DataBuffer(j, i, k, data);
}
}
}
return pixels;
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$FA$java_awt_image_DataBuffer', function (x, y, w, h, fArray, data) {
var pixels;
var Offset=0;
if (fArray != null ) pixels=fArray;
 else pixels=Clazz.array(Float.TYPE, [this.numBands * w * h ]);
for (var i=y; i < (h + y); i++) {
for (var j=x; j < (w + x); j++) {
for (var k=0; k < this.numBands; k++) {
pixels[Offset++]=this.getSampleFloat$I$I$I$java_awt_image_DataBuffer(j, i, k, data);
}
}
}
return pixels;
});

Clazz.newMeth(C$, 'getPixels$I$I$I$I$DA$java_awt_image_DataBuffer', function (x, y, w, h, dArray, data) {
var pixels;
var Offset=0;
if (dArray != null ) pixels=dArray;
 else pixels=Clazz.array(Double.TYPE, [this.numBands * w * h ]);
for (var i=y; i < (h + y); i++) {
for (var j=x; j < (w + x); j++) {
for (var k=0; k < this.numBands; k++) {
pixels[Offset++]=this.getSampleDouble$I$I$I$java_awt_image_DataBuffer(j, i, k, data);
}
}
}
return pixels;
});

Clazz.newMeth(C$, 'getSampleFloat$I$I$I$java_awt_image_DataBuffer', function (x, y, b, data) {
var sample;
sample=this.getSample$I$I$I$java_awt_image_DataBuffer(x, y, b, data);
return sample;
});

Clazz.newMeth(C$, 'getSampleDouble$I$I$I$java_awt_image_DataBuffer', function (x, y, b, data) {
var sample;
sample=this.getSample$I$I$I$java_awt_image_DataBuffer(x, y, b, data);
return sample;
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer', function (x, y, w, h, b, iArray, data) {
var pixels;
var Offset=0;
if (iArray != null ) pixels=iArray;
 else pixels=Clazz.array(Integer.TYPE, [w * h]);
for (var i=y; i < (h + y); i++) {
for (var j=x; j < (w + x); j++) {
pixels[Offset++]=this.getSample$I$I$I$java_awt_image_DataBuffer(j, i, b, data);
}
}
return pixels;
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$FA$java_awt_image_DataBuffer', function (x, y, w, h, b, fArray, data) {
var pixels;
var Offset=0;
if (fArray != null ) pixels=fArray;
 else pixels=Clazz.array(Float.TYPE, [w * h]);
for (var i=y; i < (h + y); i++) {
for (var j=x; j < (w + x); j++) {
pixels[Offset++]=this.getSampleFloat$I$I$I$java_awt_image_DataBuffer(j, i, b, data);
}
}
return pixels;
});

Clazz.newMeth(C$, 'getSamples$I$I$I$I$I$DA$java_awt_image_DataBuffer', function (x, y, w, h, b, dArray, data) {
var pixels;
var Offset=0;
if (dArray != null ) pixels=dArray;
 else pixels=Clazz.array(Double.TYPE, [w * h]);
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
pixels[Offset++]=this.getSampleDouble$I$I$I$java_awt_image_DataBuffer(j, i, b, data);
}
}
return pixels;
});

Clazz.newMeth(C$, 'setPixel$I$I$IA$java_awt_image_DataBuffer', function (x, y, iArray, data) {
for (var i=0; i < this.numBands; i++) this.setSample$I$I$I$I$java_awt_image_DataBuffer(x, y, i, iArray[i], data);

});

Clazz.newMeth(C$, 'setPixel$I$I$FA$java_awt_image_DataBuffer', function (x, y, fArray, data) {
for (var i=0; i < this.numBands; i++) this.setSample$I$I$I$F$java_awt_image_DataBuffer(x, y, i, fArray[i], data);

});

Clazz.newMeth(C$, 'setPixel$I$I$DA$java_awt_image_DataBuffer', function (x, y, dArray, data) {
for (var i=0; i < this.numBands; i++) this.setSample$I$I$I$D$java_awt_image_DataBuffer(x, y, i, dArray[i], data);

});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$IA$java_awt_image_DataBuffer', function (x, y, w, h, iArray, data) {
var Offset=0;
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
for (var k=0; k < this.numBands; k++) {
this.setSample$I$I$I$I$java_awt_image_DataBuffer(j, i, k, iArray[Offset++], data);
}
}
}
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$FA$java_awt_image_DataBuffer', function (x, y, w, h, fArray, data) {
var Offset=0;
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
for (var k=0; k < this.numBands; k++) {
this.setSample$I$I$I$F$java_awt_image_DataBuffer(j, i, k, fArray[Offset++], data);
}
}
}
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$DA$java_awt_image_DataBuffer', function (x, y, w, h, dArray, data) {
var Offset=0;
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
for (var k=0; k < this.numBands; k++) {
this.setSample$I$I$I$D$java_awt_image_DataBuffer(j, i, k, dArray[Offset++], data);
}
}
}
});

Clazz.newMeth(C$, 'setSample$I$I$I$F$java_awt_image_DataBuffer', function (x, y, b, s, data) {
var sample=(s|0);
this.setSample$I$I$I$I$java_awt_image_DataBuffer(x, y, b, sample, data);
});

Clazz.newMeth(C$, 'setSample$I$I$I$D$java_awt_image_DataBuffer', function (x, y, b, s, data) {
var sample=(s|0);
this.setSample$I$I$I$I$java_awt_image_DataBuffer(x, y, b, sample, data);
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$IA$java_awt_image_DataBuffer', function (x, y, w, h, b, iArray, data) {
var Offset=0;
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
this.setSample$I$I$I$I$java_awt_image_DataBuffer(j, i, b, iArray[Offset++], data);
}
}
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$FA$java_awt_image_DataBuffer', function (x, y, w, h, b, fArray, data) {
var Offset=0;
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
this.setSample$I$I$I$F$java_awt_image_DataBuffer(j, i, b, fArray[Offset++], data);
}
}
});

Clazz.newMeth(C$, 'setSamples$I$I$I$I$I$DA$java_awt_image_DataBuffer', function (x, y, w, h, b, dArray, data) {
var Offset=0;
for (var i=y; i < (y + h); i++) {
for (var j=x; j < (x + w); j++) {
this.setSample$I$I$I$D$java_awt_image_DataBuffer(j, i, b, dArray[Offset++], data);
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
