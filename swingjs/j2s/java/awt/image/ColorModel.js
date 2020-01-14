(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.awt.color.ColorSpace','java.awt.image.DirectColorModel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ColorModel", null, null, 'java.awt.Transparency');
C$.RGBdefault=null;
C$.l8Tos8=null;
C$.s8Tol8=null;
C$.l16Tos8=null;
C$.s8Tol16=null;
C$.g8Tos8Map=null;
C$.lg16Toog8Map=null;
C$.g16Tos8Map=null;
C$.lg16Toog16Map=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.l8Tos8=null;
C$.s8Tol8=null;
C$.l16Tos8=null;
C$.s8Tol16=null;
C$.g8Tos8Map=null;
C$.lg16Toog8Map=null;
C$.g16Tos8Map=null;
C$.lg16Toog16Map=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pixel_bits=0;
this.nBits=null;
this.transparency=0;
this.supportsAlpha=false;
this.isAlphaPremultiplied=false;
this.numComponents=0;
this.numColorComponents=0;
this.colorSpace=null;
this.colorSpaceType=0;
this.maxBits=0;
this.is_sRGB=false;
this.transferType=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.transparency=3;
this.supportsAlpha=true;
this.isAlphaPremultiplied=false;
this.numComponents=-1;
this.numColorComponents=-1;
this.colorSpace=$I$(1).getInstance$I(1000);
this.colorSpaceType=5;
this.is_sRGB=true;
}, 1);

Clazz.newMeth(C$, 'getRGBdefault$', function () {
if (C$.RGBdefault == null ) {
C$.RGBdefault=Clazz.new_($I$(2).c$$I$I$I$I$I,[32, 16711680, 65280, 255, -16777216]);
}return C$.RGBdefault;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (bits) {
C$.$init$.apply(this);
this.pixel_bits=bits;
if (bits < 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of bits must be > 0"]);
}this.numComponents=4;
this.numColorComponents=3;
this.maxBits=bits;
this.transferType=C$.getDefaultTransferType$I(bits);
}, 1);

Clazz.newMeth(C$, 'c$$I$IA$java_awt_color_ColorSpace$Z$Z$I$I', function (pixel_bits, bits, cspace, hasAlpha, isAlphaPremultiplied, transparency, transferType) {
C$.$init$.apply(this);
this.colorSpace=cspace;
this.colorSpaceType=cspace.getType$();
this.numColorComponents=cspace.getNumComponents$();
this.numComponents=this.numColorComponents + (hasAlpha ? 1 : 0);
this.supportsAlpha=hasAlpha;
if (bits.length < this.numComponents) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of color/alpha components should be " + this.numComponents + " but length of bits array is " + bits.length ]);
}if (transparency < 1 || transparency > 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown transparency: " + transparency]);
}if (this.supportsAlpha == false ) {
this.isAlphaPremultiplied=false;
this.transparency=1;
} else {
this.isAlphaPremultiplied=isAlphaPremultiplied;
this.transparency=transparency;
}this.nBits=bits.clone$();
this.pixel_bits=pixel_bits;
if (pixel_bits <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of pixel bits must be > 0"]);
}this.maxBits=0;
for (var i=0; i < bits.length; i++) {
if (bits[i] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of bits must be >= 0"]);
}if (this.maxBits < bits[i]) {
this.maxBits=bits[i];
}}
if (this.maxBits == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["There must be at least one component with > 0 pixel bits."]);
}if (cspace !== $I$(1).getInstance$I(1000) ) {
this.is_sRGB=false;
}this.transferType=transferType;
}, 1);

Clazz.newMeth(C$, 'hasAlpha$', function () {
return this.supportsAlpha;
});

Clazz.newMeth(C$, 'isAlphaPremultiplied$', function () {
return this.isAlphaPremultiplied;
});

Clazz.newMeth(C$, 'getTransferType$', function () {
return this.transferType;
});

Clazz.newMeth(C$, 'getPixelSize$', function () {
return this.pixel_bits;
});

Clazz.newMeth(C$, 'getComponentSize$I', function (componentIdx) {
if (this.nBits == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Number of bits array is null."]);
}return this.nBits[componentIdx];
});

Clazz.newMeth(C$, 'getComponentSize$', function () {
if (this.nBits != null ) {
return this.nBits.clone$();
}return null;
});

Clazz.newMeth(C$, 'getTransparency$', function () {
return this.transparency;
});

Clazz.newMeth(C$, 'getNumComponents$', function () {
return this.numComponents;
});

Clazz.newMeth(C$, 'getNumColorComponents$', function () {
return this.numColorComponents;
});

Clazz.newMeth(C$, 'getRGB$I', function (pixel) {
return (this.getAlpha$I(pixel) << 24) | (this.getRed$I(pixel) << 16) | (this.getGreen$I(pixel) << 8) | (this.getBlue$I(pixel) << 0) ;
});

Clazz.newMeth(C$, 'getRed$O', function (inData) {
var pixel=0;
var length=0;
switch (this.transferType) {
case 0:
var bdata=inData;
pixel=bdata[0] & 255;
length=bdata.length;
break;
case 1:
var sdata=inData;
pixel=sdata[0] & 65535;
length=sdata.length;
break;
case 3:
var idata=inData;
pixel=idata[0];
length=idata.length;
break;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}
if (length == 1) {
return this.getRed$I(pixel);
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model"]);
}});

Clazz.newMeth(C$, 'getGreen$O', function (inData) {
var pixel=0;
var length=0;
switch (this.transferType) {
case 0:
var bdata=inData;
pixel=bdata[0] & 255;
length=bdata.length;
break;
case 1:
var sdata=inData;
pixel=sdata[0] & 65535;
length=sdata.length;
break;
case 3:
var idata=inData;
pixel=idata[0];
length=idata.length;
break;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}
if (length == 1) {
return this.getGreen$I(pixel);
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model"]);
}});

Clazz.newMeth(C$, 'getBlue$O', function (inData) {
var pixel=0;
var length=0;
switch (this.transferType) {
case 0:
var bdata=inData;
pixel=bdata[0] & 255;
length=bdata.length;
break;
case 1:
var sdata=inData;
pixel=sdata[0] & 65535;
length=sdata.length;
break;
case 3:
var idata=inData;
pixel=idata[0];
length=idata.length;
break;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}
if (length == 1) {
return this.getBlue$I(pixel);
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model"]);
}});

Clazz.newMeth(C$, 'getAlpha$O', function (inData) {
var pixel=0;
var length=0;
switch (this.transferType) {
case 0:
var bdata=inData;
pixel=bdata[0] & 255;
length=bdata.length;
break;
case 1:
var sdata=inData;
pixel=sdata[0] & 65535;
length=sdata.length;
break;
case 3:
var idata=inData;
pixel=idata[0];
length=idata.length;
break;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}
if (length == 1) {
return this.getAlpha$I(pixel);
} else {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model"]);
}});

Clazz.newMeth(C$, 'getRGB$O', function (inData) {
return (this.getAlpha$O(inData) << 24) | (this.getRed$O(inData) << 16) | (this.getGreen$O(inData) << 8) | (this.getBlue$O(inData) << 0) ;
});

Clazz.newMeth(C$, 'getDataElements$I$O', function (rgb, pixel) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model."]);
});

Clazz.newMeth(C$, 'getComponents$I$IA$I', function (pixel, components, offset) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model."]);
});

Clazz.newMeth(C$, 'getComponents$O$IA$I', function (pixel, components, offset) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model."]);
});

Clazz.newMeth(C$, 'getUnnormalizedComponents$FA$I$IA$I', function (normComponents, normOffset, components, offset) {
if (this.colorSpace == null ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model."]);
}if (this.nBits == null ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported.  Unable to determine #bits per component."]);
}if ((normComponents.length - normOffset) < this.numComponents) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incorrect number of components.  Expecting " + this.numComponents]);
}if (components == null ) {
components=Clazz.array(Integer.TYPE, [offset + this.numComponents]);
}if (this.supportsAlpha && this.isAlphaPremultiplied ) {
var normAlpha=normComponents[normOffset + this.numColorComponents];
for (var i=0; i < this.numColorComponents; i++) {
components[offset + i]=((normComponents[normOffset + i] * ((1 << this.nBits[i]) - 1) * normAlpha  + 0.5)|0);
}
components[offset + this.numColorComponents]=((normAlpha * ((1 << this.nBits[this.numColorComponents]) - 1) + 0.5)|0);
} else {
for (var i=0; i < this.numComponents; i++) {
components[offset + i]=((normComponents[normOffset + i] * ((1 << this.nBits[i]) - 1) + 0.5)|0);
}
}return components;
});

Clazz.newMeth(C$, 'getNormalizedComponents$IA$I$FA$I', function (components, offset, normComponents, normOffset) {
if (this.colorSpace == null ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model."]);
}if (this.nBits == null ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported.  Unable to determine #bits per component."]);
}if ((components.length - offset) < this.numComponents) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incorrect number of components.  Expecting " + this.numComponents]);
}if (normComponents == null ) {
normComponents=Clazz.array(Float.TYPE, [this.numComponents + normOffset]);
}if (this.supportsAlpha && this.isAlphaPremultiplied ) {
var normAlpha=components[offset + this.numColorComponents];
normAlpha /= ((1 << this.nBits[this.numColorComponents]) - 1);
if (normAlpha != 0.0 ) {
for (var i=0; i < this.numColorComponents; i++) {
normComponents[normOffset + i]=(components[offset + i]) / (normAlpha * (((1 << this.nBits[i]) - 1)));
}
} else {
for (var i=0; i < this.numColorComponents; i++) {
normComponents[normOffset + i]=0.0;
}
}normComponents[normOffset + this.numColorComponents]=normAlpha;
} else {
for (var i=0; i < this.numComponents; i++) {
normComponents[normOffset + i]=(components[offset + i]) / (((1 << this.nBits[i]) - 1));
}
}return normComponents;
});

Clazz.newMeth(C$, 'getDataElement$IA$I', function (components, offset) {
return this.getDataElementInt$IA$I(components, offset);
});

Clazz.newMeth(C$, 'getDataElementInt$IA$I', function (components, offset) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model."]);
});

Clazz.newMeth(C$, 'getDataElements$IA$I$O', function (components, offset, obj) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been implemented for this color model."]);
});

Clazz.newMeth(C$, 'getDataElement$FA$I', function (normComponents, normOffset) {
var components=this.getUnnormalizedComponents$FA$I$IA$I(normComponents, normOffset, null, 0);
return this.getDataElement$IA$I(components, 0);
});

Clazz.newMeth(C$, 'getDataElements$FA$I$O', function (normComponents, normOffset, obj) {
var components=this.getUnnormalizedComponents$FA$I$IA$I(normComponents, normOffset, null, 0);
return this.getDataElements$IA$I$O(components, 0, obj);
});

Clazz.newMeth(C$, 'getNormalizedComponents$O$FA$I', function (pixel, normComponents, normOffset) {
var components=this.getComponents$O$IA$I(pixel, null, 0);
return this.getNormalizedComponents$IA$I$FA$I(components, 0, normComponents, normOffset);
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "java.awt.image.ColorModel"))) {
return false;
}var cm=obj;
if (this === cm ) {
return true;
}if (this.supportsAlpha != cm.hasAlpha$()  || this.isAlphaPremultiplied != cm.isAlphaPremultiplied$()   || this.pixel_bits != cm.getPixelSize$()  || this.transparency != cm.getTransparency$()  || this.numComponents != cm.getNumComponents$() ) {
return false;
}var nb=cm.getComponentSize$();
if ((this.nBits != null ) && (nb != null ) ) {
for (var i=0; i < this.numComponents; i++) {
if (this.nBits[i] != nb[i]) {
return false;
}}
} else {
return ((this.nBits == null ) && (nb == null ) );
}return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
var result=0;
result=(this.supportsAlpha ? 2 : 3) + (this.isAlphaPremultiplied ? 4 : 5) + this.pixel_bits * 6  + this.transparency * 7 + this.numComponents * 8;
if (this.nBits != null ) {
for (var i=0; i < this.numComponents; i++) {
result=result + this.nBits[i] * (i + 9);
}
}return result;
});

Clazz.newMeth(C$, 'getColorSpace$', function () {
return this.colorSpace;
});

Clazz.newMeth(C$, 'isCompatibleRaster$java_awt_image_Raster', function (raster) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been implemented for this ColorModel."]);
});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I', function (w, h) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model"]);
});

Clazz.newMeth(C$, 'createCompatibleSampleModel$I$I', function (w, h) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model"]);
});

Clazz.newMeth(C$, 'isCompatibleSampleModel$java_awt_image_SampleModel', function (sm) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method is not supported by this color model"]);
});

Clazz.newMeth(C$, 'finalize$', function () {
});

Clazz.newMeth(C$, 'getAlphaRaster$java_awt_image_WritableRaster', function (raster) {
return null;
});

Clazz.newMeth(C$, 'toString', function () {
return  String.instantialize("ColorModel: #pixelBits = " + this.pixel_bits + " numComponents = " + this.numComponents + " color space = " + this.colorSpace + " transparency = " + this.transparency + " has alpha = " + this.supportsAlpha + " isAlphaPre = " + this.isAlphaPremultiplied );
});

Clazz.newMeth(C$, 'getDefaultTransferType$I', function (pixel_bits) {
if (pixel_bits <= 8) {
return 0;
}return 3;
}, 1);

Clazz.newMeth(C$, 'isLinearRGBspace$java_awt_color_ColorSpace', function (cs) {
return false;
}, 1);

Clazz.newMeth(C$, 'isLinearGRAYspace$java_awt_color_ColorSpace', function (cs) {
return false;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
