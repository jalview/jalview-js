(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
var C$=Clazz.newClass(P$, "ClientPropertyKey", null, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$Z, "JComponent_INPUT_VERIFIER", 0, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "JComponent_TRANSFER_HANDLER", 1, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "JComponent_ANCESTOR_NOTIFIER", 2, [true]);
Clazz.newEnumConst($vals, C$.c$$Z, "PopupFactory_FORCE_HEAVYWEIGHT_POPUP", 3, [true]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.reportValueNotSerializable=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getJComponent_TRANSFER_HANDLER$', function () {
return C$.JComponent_TRANSFER_HANDLER;
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (reportValueNotSerializable) {
C$.$init$.apply(this);
this.reportValueNotSerializable=reportValueNotSerializable;
}, 1);

Clazz.newMeth(C$, 'getReportValueNotSerializable$', function () {
return this.reportValueNotSerializable;
});
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
