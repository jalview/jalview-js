(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.GraphicsEnvironment','java.awt.Point','java.awt.PointerInfo']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MouseInfo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPointerInfo$', function () {
if ($I$(1).isHeadless$()) {
throw Clazz.new_(Clazz.load('java.awt.HeadlessException'));
}var point=Clazz.new_($I$(2).c$$I$I,[0, 0]);
var retval=Clazz.new_($I$(3).c$$java_awt_GraphicsDevice$java_awt_Point,[null, point]);
return retval;
}, 1);

Clazz.newMeth(C$, 'getNumberOfButtons$', function () {
if ($I$(1).isHeadless$()) {
throw Clazz.new_(Clazz.load('java.awt.HeadlessException'));
}return 2;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:24 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
