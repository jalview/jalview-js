(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.image.ColorModel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ColorPaintContext", null, null, 'java.awt.PaintContext');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.color=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_image_ColorModel', function (color, cm) {
C$.$init$.apply(this);
this.color=color;
}, 1);

Clazz.newMeth(C$, 'dispose$', function () {
});

Clazz.newMeth(C$, 'getRGB$', function () {
return this.color;
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return $I$(1).getRGBdefault$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
