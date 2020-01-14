(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
var C$=Clazz.newClass(P$, "InternalFrameEvent", null, 'java.awt.AWTEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JInternalFrame$I', function (source, id) {
C$.superclazz.c$$O$I.apply(this, [source, id]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'paramString$', function () {
var typeStr;
switch (this.id) {
case 25549:
typeStr="INTERNAL_FRAME_OPENED";
break;
case 25550:
typeStr="INTERNAL_FRAME_CLOSING";
break;
case 25551:
typeStr="INTERNAL_FRAME_CLOSED";
break;
case 25552:
typeStr="INTERNAL_FRAME_ICONIFIED";
break;
case 25553:
typeStr="INTERNAL_FRAME_DEICONIFIED";
break;
case 25554:
typeStr="INTERNAL_FRAME_ACTIVATED";
break;
case 25555:
typeStr="INTERNAL_FRAME_DEACTIVATED";
break;
default:
typeStr="unknown type";
}
return typeStr;
});

Clazz.newMeth(C$, 'getInternalFrame$', function () {
return (Clazz.instanceOf(this.source, "javax.swing.JInternalFrame")) ? this.source : null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
