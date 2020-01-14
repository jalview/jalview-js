(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[];
var C$=Clazz.newClass(P$, "CheckboxGroup", null, 'javax.swing.ButtonGroup');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'getSelectedCheckbox$', function () {
for (var e=this.getElements$(); e.hasMoreElements$(); ) {
var ab=e.nextElement$();
if (ab.isSelected$()) return ab;
}
return null;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:44 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
