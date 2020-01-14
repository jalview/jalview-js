(function(){var P$=Clazz.newPackage("org.jmol.console"),I$=[[0,'org.jmol.console.GenericConsole']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "KeyJCheckBox", null, 'javax.swing.JCheckBox', 'org.jmol.api.JmolAbstractButton');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'c$$S$S$java_util_Map$Z', function (key, label, menuMap, isChecked) {
C$.superclazz.c$$S$Z.apply(this, [$I$(1).getLabelWithoutMnemonic$S(label), isChecked]);
C$.$init$.apply(this);
$I$(1).map$O$S$S$java_util_Map(this, this.key=key, label, menuMap);
}, 1);

Clazz.newMeth(C$, 'addConsoleListener$O', function (console) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
