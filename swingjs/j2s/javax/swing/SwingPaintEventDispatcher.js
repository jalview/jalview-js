(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
var C$=Clazz.newClass(P$, "SwingPaintEventDispatcher", null, 'sun.awt.PaintEventDispatcher');
C$.ERASE_BACKGROUND=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.ERASE_BACKGROUND=false;
{
C$.ERASE_BACKGROUND=true;
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createPaintEvent$java_awt_Component$I$I$I$I', function (component, x, y, w, h) {
return C$.superclazz.prototype.createPaintEvent$java_awt_Component$I$I$I$I.apply(this, [component, x, y, w, h]);
});

Clazz.newMeth(C$, 'shouldDoNativeBackgroundErase$java_awt_Component', function (c) {
return C$.ERASE_BACKGROUND || !(Clazz.instanceOf(c, "javax.swing.RootPaneContainer")) ;
});

Clazz.newMeth(C$, 'queueSurfaceDataReplacing$java_awt_Component$Runnable', function (c, r) {
if (Clazz.instanceOf(c, "javax.swing.RootPaneContainer")) {
return true;
}return C$.superclazz.prototype.queueSurfaceDataReplacing$java_awt_Component$Runnable.apply(this, [c, r]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
