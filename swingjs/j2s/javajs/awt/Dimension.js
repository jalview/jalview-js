(function(){var P$=Clazz.newPackage("javajs.awt"),I$=[];
var C$=Clazz.newClass(P$, "Dimension");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.width=0;
this.height=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (w, h) {
C$.$init$.apply(this);
this.set$I$I(w, h);
}, 1);

Clazz.newMeth(C$, 'set$I$I', function (w, h) {
this.width=w;
this.height=h;
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.2.04');//Created 2018-08-20 14:22:08 Java2ScriptVisitor version 3.2.2.04 net.sf.j2s.core.jar version 3.2.2.04
