(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.GraphicsEnvironment','java.awt.Toolkit','java.awt.event.KeyEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MenuShortcut");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=0;
this.usesShift=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (key) {
C$.c$$I$Z.apply(this, [key, false]);
}, 1);

Clazz.newMeth(C$, 'c$$I$Z', function (key, useShiftModifier) {
C$.$init$.apply(this);
this.key=key;
this.usesShift=useShiftModifier;
}, 1);

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'usesShiftModifier$', function () {
return this.usesShift;
});

Clazz.newMeth(C$, 'equals$java_awt_MenuShortcut', function (s) {
return (s != null  && (s.getKey$() == this.key)  && (s.usesShiftModifier$() == this.usesShift ) );
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "java.awt.MenuShortcut")) {
return this.equals$java_awt_MenuShortcut(obj);
}return false;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return (this.usesShift) ? (~this.key) : this.key;
});

Clazz.newMeth(C$, 'toString', function () {
var modifiers=0;
if (!$I$(1).isHeadless$()) {
modifiers=$I$(2).getDefaultToolkit$().getMenuShortcutKeyMask$();
}if (this.usesShiftModifier$()) {
modifiers|=1;
}return $I$(3).getKeyModifiersText$I(modifiers) + "+" + $I$(3).getKeyText$I(this.key) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:24 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
