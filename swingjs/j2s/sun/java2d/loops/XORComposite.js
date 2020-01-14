(function(){var P$=Clazz.newPackage("sun.java2d.loops"),I$=[[0,'sun.java2d.SunCompositeContext']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "XORComposite", null, null, 'java.awt.Composite');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.xorColor=null;
this.xorPixel=0;
this.alphaMask=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Color$sun_java2d_SurfaceData', function (xorColor, sd) {
C$.$init$.apply(this);
this.xorColor=xorColor;
this.xorPixel=xorColor.getRGB$();
this.alphaMask=-16777216;
}, 1);

Clazz.newMeth(C$, 'getXorColor$', function () {
return this.xorColor;
});

Clazz.newMeth(C$, 'getXorPixel$', function () {
return this.xorPixel;
});

Clazz.newMeth(C$, 'getAlphaMask$', function () {
return this.alphaMask;
});

Clazz.newMeth(C$, ['createContext$java_awt_image_ColorModel$java_awt_image_ColorModel$java_awt_RenderingHints','createContext$'], function (srcColorModel, dstColorModel, hints) {
return Clazz.new_($I$(1).c$$sun_java2d_loops_XORComposite$java_awt_image_ColorModel$java_awt_image_ColorModel,[this, srcColorModel, dstColorModel]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
