(function(){var P$=Clazz.newPackage("javajs.awt"),p$1={};
var C$=Clazz.newClass(P$, "Color", null, null, 'javajs.api.GenericColor');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.argb=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRGB$', function () {
return this.argb & 16777215;
});

Clazz.newMeth(C$, 'getOpacity255$', function () {
return ((this.argb >> 24) & 255);
});

Clazz.newMeth(C$, 'setOpacity255$I', function (a) {
this.argb=this.argb & 16777215 | ((a & 255) << 24);
});

Clazz.newMeth(C$, 'get1$I', function (rgb) {
var c=Clazz.new_(C$);
c.argb=rgb | -16777216;
return c;
}, 1);

Clazz.newMeth(C$, 'get3$I$I$I', function (r, g, b) {
return p$1.set4$I$I$I$I.apply(Clazz.new_(C$), [r, g, b, 255]);
}, 1);

Clazz.newMeth(C$, 'get4$I$I$I$I', function (r, g, b, a) {
return p$1.set4$I$I$I$I.apply(Clazz.new_(C$), [r, g, b, a]);
}, 1);

Clazz.newMeth(C$, 'set4$I$I$I$I', function (r, g, b, a) {
this.argb=((a << 24) | (r << 16) | (g << 8) | b ) & -1;
return this;
}, p$1);

Clazz.newMeth(C$, 'toString', function () {
var s=("00000000" + Integer.toHexString$I(this.argb));
return "[0x" + s.substring$I$I(s.length$() - 8, s.length$()) + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-05 22:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
