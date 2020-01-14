(function(){var P$=Clazz.newPackage("javajs.img"),p$1={},p$2={},p$3={},I$=[[0,'javajs.img.JpegObj','javajs.img.DCT','javajs.img.Huffman','javajs.util.AU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JpegObj");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.comment=null;
this.imageHeight=0;
this.imageWidth=0;
this.blockWidth=null;
this.blockHeight=null;
this.precision=0;
this.numberOfComponents=0;
this.components=null;
this.compID=null;
this.hsampFactor=null;
this.vsampFactor=null;
this.qtableNumber=null;
this.dctableNumber=null;
this.actableNumber=null;
this.lastColumnIsDummy=null;
this.lastRowIsDummy=null;
this.ss=0;
this.se=0;
this.ah=0;
this.al=0;
this.compWidth=null;
this.compHeight=null;
this.maxHsampFactor=0;
this.maxVsampFactor=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.precision=8;
this.numberOfComponents=3;
this.compID=Clazz.array(Integer.TYPE, -1, [1, 2, 3]);
this.hsampFactor=Clazz.array(Integer.TYPE, -1, [1, 1, 1]);
this.vsampFactor=Clazz.array(Integer.TYPE, -1, [1, 1, 1]);
this.qtableNumber=Clazz.array(Integer.TYPE, -1, [0, 1, 1]);
this.dctableNumber=Clazz.array(Integer.TYPE, -1, [0, 1, 1]);
this.actableNumber=Clazz.array(Integer.TYPE, -1, [0, 1, 1]);
this.lastColumnIsDummy=Clazz.array(Boolean.TYPE, -1, [false, false, false]);
this.lastRowIsDummy=Clazz.array(Boolean.TYPE, -1, [false, false, false]);
this.ss=0;
this.se=63;
this.ah=0;
this.al=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.components=$I$(4).newFloat3$I$I(this.numberOfComponents, -1);
this.compWidth=Clazz.array(Integer.TYPE, [this.numberOfComponents]);
this.compHeight=Clazz.array(Integer.TYPE, [this.numberOfComponents]);
this.blockWidth=Clazz.array(Integer.TYPE, [this.numberOfComponents]);
this.blockHeight=Clazz.array(Integer.TYPE, [this.numberOfComponents]);
}, 1);

Clazz.newMeth(C$, 'getYCCArray$IA', function (pixels) {
this.maxHsampFactor=1;
this.maxVsampFactor=1;
for (var y=0; y < this.numberOfComponents; y++) {
this.maxHsampFactor=Math.max(this.maxHsampFactor, this.hsampFactor[y]);
this.maxVsampFactor=Math.max(this.maxVsampFactor, this.vsampFactor[y]);
}
for (var y=0; y < this.numberOfComponents; y++) {
this.compWidth[y]=((((this.imageWidth % 8 != 0) ? ((Math.ceil(this.imageWidth / 8.0)|0)) * 8 : this.imageWidth)/this.maxHsampFactor|0)) * this.hsampFactor[y];
if (this.compWidth[y] != (((this.imageWidth/this.maxHsampFactor|0)) * this.hsampFactor[y])) {
this.lastColumnIsDummy[y]=true;
}this.blockWidth[y]=(Math.ceil(this.compWidth[y] / 8.0)|0);
this.compHeight[y]=((((this.imageHeight % 8 != 0) ? ((Math.ceil(this.imageHeight / 8.0)|0)) * 8 : this.imageHeight)/this.maxVsampFactor|0)) * this.vsampFactor[y];
if (this.compHeight[y] != (((this.imageHeight/this.maxVsampFactor|0)) * this.vsampFactor[y])) {
this.lastRowIsDummy[y]=true;
}this.blockHeight[y]=(Math.ceil(this.compHeight[y] / 8.0)|0);
}
var Y=Clazz.array(Float.TYPE, [this.compHeight[0], this.compWidth[0]]);
var Cr1=Clazz.array(Float.TYPE, [this.compHeight[0], this.compWidth[0]]);
var Cb1=Clazz.array(Float.TYPE, [this.compHeight[0], this.compWidth[0]]);
for (var pt=0, y=0; y < this.imageHeight; ++y) {
for (var x=0; x < this.imageWidth; ++x, pt++) {
var p=pixels[pt];
var r=((p >> 16) & 255);
var g=((p >> 8) & 255);
var b=(p & 255);
Y[y][x]=((0.299 * r + 0.587 * g + 0.114 * b));
Cb1[y][x]=128 + ((-0.16874 * r - 0.33126 * g + 0.5 * b));
Cr1[y][x]=128 + ((0.5 * r - 0.41869 * g - 0.08131 * b));
}
}
this.components[0]=Y;
this.components[1]=Cb1;
this.components[2]=Cr1;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
