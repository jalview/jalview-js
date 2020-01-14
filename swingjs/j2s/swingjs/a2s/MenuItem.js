(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.MenuShortcut','javax.swing.KeyStroke']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MenuItem", null, 'javax.swing.JMenuItem', 'swingjs.a2s.AWTMenuItem');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (string) {
C$.superclazz.c$$S.apply(this, [string]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_MenuShortcut', function (label, s) {
C$.superclazz.c$$S.apply(this, [label]);
C$.$init$.apply(this);
this.setShortcut$java_awt_MenuShortcut(s);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_MenuComponent', function (comp) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
});

Clazz.newMeth(C$, 'getShortcut$', function () {
var a=this.getAccelerator$();
return (a == null  ? null : Clazz.new_($I$(1).c$$I$Z,[a.getKeyCode$(), (a.getModifiers$() & 1) != 0]));
});

Clazz.newMeth(C$, 'setShortcut$java_awt_MenuShortcut', function (s) {
this.setAccelerator$javax_swing_KeyStroke($I$(2).getKeyStroke$I$I(s.getKey$(), 2 | (s.usesShiftModifier$() ? 1 : 0)));
});

Clazz.newMeth(C$, 'deleteShortcut$', function () {
this.setAccelerator$javax_swing_KeyStroke(null);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:45 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
