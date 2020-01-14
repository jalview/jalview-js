(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),I$=[];
var C$=Clazz.newClass(P$, "Bond", null, 'org.jmol.adapter.smarter.AtomSetObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.atomIndex1=0;
this.atomIndex2=0;
this.order=0;
this.radius=0;
this.colix=0;
this.uniqueID=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.radius=-1;
this.colix=($s$[0] = -1, $s$[0]);
this.uniqueID=-1;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (atomIndex1, atomIndex2, order) {
Clazz.super_(C$, this,1);
this.atomIndex1=atomIndex1;
this.atomIndex2=atomIndex2;
this.order=order;
}, 1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
