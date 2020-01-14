(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.MenuShortcut','javax.swing.KeyStroke']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Menu", null, 'javax.swing.JMenu', ['swingjs.a2s.AWTMenu', 'java.awt.MenuContainer']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (title) {
C$.c$$S$Z.apply(this, [title, false]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$Z.apply(this, ["", false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (title, isTearOff) {
C$.superclazz.c$$S.apply(this, [title]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'countItems$', function () {
return C$.superclazz.prototype.getComponentCount$.apply(this, []);
});

Clazz.newMeth(C$, 'getItem$I', function (index) {
return this.getComponent$I(index);
});

Clazz.newMeth(C$, 'add$java_awt_MenuItem', function (mi) {
return this.add$java_awt_Component(mi);
});

Clazz.newMeth(C$, 'insert$java_awt_MenuItem$I', function (menuitem, index) {
this.insert$javax_swing_JMenuItem$I(menuitem, index);
});

Clazz.newMeth(C$, 'remove$java_awt_MenuComponent', function (comp) {
this.remove$java_awt_Component(comp);
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

Clazz.newMeth(C$, 'shortcuts$', function () {
return null;
});

Clazz.newMeth(C$, 'deleteShortcut$java_awt_MenuShortcut', function (s) {
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:45 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
