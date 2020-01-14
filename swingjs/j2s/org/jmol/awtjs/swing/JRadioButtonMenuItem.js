(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[];
var C$=Clazz.newClass(P$, "JRadioButtonMenuItem", null, 'org.jmol.awtjs.swing.JMenuItem');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isRadio=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isRadio=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S$I.apply(this, ["rad", 3]);
C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
