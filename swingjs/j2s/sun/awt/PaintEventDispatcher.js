(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'java.awt.event.PaintEvent','java.awt.Rectangle']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PaintEventDispatcher");
C$.dispatcher=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setPaintEventDispatcher$sun_awt_PaintEventDispatcher', function (dispatcher) {
{
C$.dispatcher=dispatcher;
}}, 1);

Clazz.newMeth(C$, 'getPaintEventDispatcher$', function () {
{
if (C$.dispatcher == null ) {
C$.dispatcher=Clazz.new_(C$);
}return C$.dispatcher;
}}, 1);

Clazz.newMeth(C$, 'createPaintEvent$java_awt_Component$I$I$I$I', function (target, x, y, w, h) {
return Clazz.new_($I$(1).c$$java_awt_Component$I$java_awt_Rectangle,[target, 800, Clazz.new_($I$(2).c$$I$I$I$I,[x, y, w, h])]);
});

Clazz.newMeth(C$, 'shouldDoNativeBackgroundErase$java_awt_Component', function (c) {
return true;
});

Clazz.newMeth(C$, 'queueSurfaceDataReplacing$java_awt_Component$Runnable', function (c, r) {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
