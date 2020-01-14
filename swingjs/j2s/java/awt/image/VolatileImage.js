(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[];
var C$=Clazz.newClass(P$, "VolatileImage", null, 'java.awt.Image', 'java.awt.Transparency');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.transparency=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.transparency=3;
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.getSnapshot$().getSource$();
});

Clazz.newMeth(C$, 'getGraphics$', function () {
return this.createGraphics$();
});

Clazz.newMeth(C$, 'getTransparency$', function () {
return this.transparency;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:32 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
