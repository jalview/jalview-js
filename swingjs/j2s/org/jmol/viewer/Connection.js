(function(){var P$=Clazz.newPackage("org.jmol.viewer"),I$=[];
var C$=Clazz.newClass(P$, "Connection");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.atomIndex1=0;
this.atomIndex2=0;
this.mad=0;
this.colix=0;
this.order=0;
this.energy=0;
this.shapeVisibilityFlags=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$H$H$I$F$I', function (atom1, atom2, mad, colix, order, energy, shapeVisibilityFlags) {
C$.$init$.apply(this);
this.atomIndex1=atom1;
this.atomIndex2=atom2;
this.mad=mad;
this.colix=colix;
this.order=order;
this.energy=energy;
this.shapeVisibilityFlags=shapeVisibilityFlags;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
