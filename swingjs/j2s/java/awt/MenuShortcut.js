(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.GraphicsEnvironment','java.awt.Toolkit','java.awt.event.KeyEvent']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MenuShortcut");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['usesShift'],'I',['key']]]

Clazz.newMeth(C$, 'c$$I', function (key) {
C$.c$$I$Z.apply(this, [key, false]);
}, 1);

Clazz.newMeth(C$, 'c$$I$Z', function (key, useShiftModifier) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:13 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
