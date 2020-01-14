(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
var C$=Clazz.newClass(P$, "MouseDragGestureRecognizer", null, 'java.awt.dnd.DragGestureRecognizer', ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSource$java_awt_Component$I$java_awt_dnd_DragGestureListener', function (ds, c, act, dgl) {
C$.superclazz.c$$java_awt_dnd_DragSource$java_awt_Component$I$java_awt_dnd_DragGestureListener.apply(this, [ds, c, act, dgl]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSource$java_awt_Component$I', function (ds, c, act) {
C$.c$$java_awt_dnd_DragSource$java_awt_Component$I$java_awt_dnd_DragGestureListener.apply(this, [ds, c, act, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSource$java_awt_Component', function (ds, c) {
C$.c$$java_awt_dnd_DragSource$java_awt_Component$I.apply(this, [ds, c, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSource', function (ds) {
C$.c$$java_awt_dnd_DragSource$java_awt_Component.apply(this, [ds, null]);
}, 1);

Clazz.newMeth(C$, 'registerListeners$', function () {
this.component.addMouseListener$java_awt_event_MouseListener(this);
this.component.addMouseMotionListener$java_awt_event_MouseMotionListener(this);
});

Clazz.newMeth(C$, 'unregisterListeners$', function () {
this.component.removeMouseListener$java_awt_event_MouseListener(this);
this.component.removeMouseMotionListener$java_awt_event_MouseMotionListener(this);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
