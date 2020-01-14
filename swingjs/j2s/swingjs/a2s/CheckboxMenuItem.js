(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[];
var C$=Clazz.newClass(P$, "CheckboxMenuItem", null, 'javax.swing.JCheckBoxMenuItem');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'c$$S', function (string) {
C$.superclazz.c$$S.apply(this, [string]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (string, b) {
C$.superclazz.c$$S$Z.apply(this, [string, b]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getState$', function () {
return this.isSelected$();
});

Clazz.newMeth(C$, 'setState$Z', function (b) {
if ((this.model).setStateNoFire$Z(b)) (this.getUI$()).updateDOMNode$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:44 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
