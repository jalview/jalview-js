(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
var C$=Clazz.newClass(P$, "KeyStroke", null, 'java.awt.AWTKeyStroke');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$C$I$I$Z', function (keyChar, keyCode, modifiers, onKeyRelease) {
C$.superclazz.c$$C$I$I$Z.apply(this, [keyChar, keyCode, modifiers, onKeyRelease]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getKeyStroke$C', function (keyChar) {
{
java.awt.AWTKeyStroke.registerSubclass$Class(Clazz.getClass(C$));
return java.awt.AWTKeyStroke.getAWTKeyStroke$C(keyChar);
}}, 1);

Clazz.newMeth(C$, 'getKeyStroke$C$Z', function (keyChar, onKeyRelease) {
return Clazz.new_(C$.c$$C$I$I$Z,[keyChar, 0, 0, onKeyRelease]);
}, 1);

Clazz.newMeth(C$, 'getKeyStroke$Character$I', function (keyChar, modifiers) {
{
java.awt.AWTKeyStroke.registerSubclass$Class(Clazz.getClass(C$));
return java.awt.AWTKeyStroke.getAWTKeyStroke$Character$I(keyChar, modifiers);
}}, 1);

Clazz.newMeth(C$, 'getKeyStroke$I$I$Z', function (keyCode, modifiers, onKeyRelease) {
{
java.awt.AWTKeyStroke.registerSubclass$Class(Clazz.getClass(C$));
return java.awt.AWTKeyStroke.getAWTKeyStroke$I$I$Z(keyCode, modifiers, onKeyRelease);
}}, 1);

Clazz.newMeth(C$, 'getKeyStroke$I$I', function (keyCode, modifiers) {
{
java.awt.AWTKeyStroke.registerSubclass$Class(Clazz.getClass(C$));
return java.awt.AWTKeyStroke.getAWTKeyStroke$I$I(keyCode, modifiers);
}}, 1);

Clazz.newMeth(C$, 'getKeyStrokeForEvent$java_awt_event_KeyEvent', function (anEvent) {
{
java.awt.AWTKeyStroke.registerSubclass$Class(Clazz.getClass(C$));
return java.awt.AWTKeyStroke.getAWTKeyStrokeForEvent$java_awt_event_KeyEvent(anEvent);
}}, 1);

Clazz.newMeth(C$, 'getKeyStroke$S', function (s) {
if (s == null  || s.length$() == 0 ) {
return null;
}{
java.awt.AWTKeyStroke.registerSubclass$Class(Clazz.getClass(C$));
try {
return java.awt.AWTKeyStroke.getAWTKeyStroke$S(s);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return null;
} else {
throw e;
}
}
}}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
