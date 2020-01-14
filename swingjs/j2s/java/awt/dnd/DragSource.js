(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[[0,'java.awt.GraphicsEnvironment','java.awt.datatransfer.SystemFlavorMap','java.awt.Toolkit','sun.awt.dnd.SunDragSourceContextPeer','java.awt.dnd.DragSourceContext','java.awt.dnd.MouseDragGestureRecognizer','java.awt.dnd.DnDEventMulticaster','java.awt.dnd.DragSourceListener','java.awt.dnd.DragSourceMotionListener','java.awt.AWTEventMulticaster']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DragSource", null, null, 'java.io.Serializable');
C$.DefaultCopyDrop=null;
C$.DefaultMoveDrop=null;
C$.DefaultLinkDrop=null;
C$.DefaultCopyNoDrop=null;
C$.DefaultMoveNoDrop=null;
C$.DefaultLinkNoDrop=null;
C$.dflt=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DefaultCopyDrop=C$.load$S("DnD.Cursor.CopyDrop");
C$.DefaultMoveDrop=C$.load$S("DnD.Cursor.MoveDrop");
C$.DefaultLinkDrop=C$.load$S("DnD.Cursor.LinkDrop");
C$.DefaultCopyNoDrop=C$.load$S("DnD.Cursor.CopyNoDrop");
C$.DefaultMoveNoDrop=C$.load$S("DnD.Cursor.MoveNoDrop");
C$.DefaultLinkNoDrop=C$.load$S("DnD.Cursor.LinkNoDrop");
C$.dflt=($I$(1).isHeadless$()) ? null : Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.flavorMap=null;
this.listener=null;
this.motionListener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.flavorMap=$I$(2).getDefaultFlavorMap$();
}, 1);

Clazz.newMeth(C$, 'load$S', function (name) {
if ($I$(1).isHeadless$()) {
return null;
}try {
return $I$(3).getDefaultToolkit$().getDesktopProperty$S(name);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["failed to load system cursor: " + name + " : " + e.getMessage$() ]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getDefaultDragSource$', function () {
return C$.dflt;
}, 1);

Clazz.newMeth(C$, 'isDragImageSupported$', function () {
var supported;
try {
supported=$I$(3).getDefaultToolkit$().getDesktopProperty$S("DnD.isDragImageSupported");
return supported.booleanValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_Image$java_awt_Point$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener$java_awt_datatransfer_FlavorMap', function (trigger, dragCursor, dragImage, imageOffset, transferable, dsl, flavorMap) {
$I$(4).setDragDropInProgress$Z(true);
try {
if (flavorMap != null ) this.flavorMap=flavorMap;
var dscp=$I$(3).getDefaultToolkit$().createDragSourceContextPeer$java_awt_dnd_DragGestureEvent(trigger);
var dsc=this.createDragSourceContext$java_awt_dnd_peer_DragSourceContextPeer$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_Image$java_awt_Point$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener(dscp, trigger, dragCursor, dragImage, imageOffset, transferable, dsl);
if (dsc == null ) {
throw Clazz.new_(Clazz.load('java.awt.dnd.InvalidDnDOperationException'));
}dscp.startDrag$java_awt_dnd_DragSourceContext$java_awt_Cursor$java_awt_Image$java_awt_Point(dsc, dsc.getCursor$(), dragImage, imageOffset);
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
$I$(4).setDragDropInProgress$Z(false);
throw e;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener$java_awt_datatransfer_FlavorMap', function (trigger, dragCursor, transferable, dsl, flavorMap) {
this.startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_Image$java_awt_Point$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener$java_awt_datatransfer_FlavorMap(trigger, dragCursor, null, null, transferable, dsl, flavorMap);
});

Clazz.newMeth(C$, 'startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_Image$java_awt_Point$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener', function (trigger, dragCursor, dragImage, dragOffset, transferable, dsl) {
this.startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_Image$java_awt_Point$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener$java_awt_datatransfer_FlavorMap(trigger, dragCursor, dragImage, dragOffset, transferable, dsl, null);
});

Clazz.newMeth(C$, 'startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener', function (trigger, dragCursor, transferable, dsl) {
this.startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_Image$java_awt_Point$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener$java_awt_datatransfer_FlavorMap(trigger, dragCursor, null, null, transferable, dsl, null);
});

Clazz.newMeth(C$, 'createDragSourceContext$java_awt_dnd_peer_DragSourceContextPeer$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_Image$java_awt_Point$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener', function (dscp, dgl, dragCursor, dragImage, imageOffset, t, dsl) {
return Clazz.new_($I$(5).c$$java_awt_dnd_peer_DragSourceContextPeer$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_Image$java_awt_Point$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener,[dscp, dgl, dragCursor, dragImage, imageOffset, t, dsl]);
});

Clazz.newMeth(C$, 'getFlavorMap$', function () {
return this.flavorMap;
});

Clazz.newMeth(C$, 'createDragGestureRecognizer$Class$java_awt_Component$I$java_awt_dnd_DragGestureListener', function (recognizerAbstractClass, c, actions, dgl) {
return $I$(3).getDefaultToolkit$().createDragGestureRecognizer$Class$java_awt_dnd_DragSource$java_awt_Component$I$java_awt_dnd_DragGestureListener(recognizerAbstractClass, this, c, actions, dgl);
});

Clazz.newMeth(C$, 'createDefaultDragGestureRecognizer$java_awt_Component$I$java_awt_dnd_DragGestureListener', function (c, actions, dgl) {
return $I$(3).getDefaultToolkit$().createDragGestureRecognizer$Class$java_awt_dnd_DragSource$java_awt_Component$I$java_awt_dnd_DragGestureListener(Clazz.getClass($I$(6)), this, c, actions, dgl);
});

Clazz.newMeth(C$, 'addDragSourceListener$java_awt_dnd_DragSourceListener', function (dsl) {
if (dsl != null ) {
{
this.listener=$I$(7).add$java_awt_dnd_DragSourceListener$java_awt_dnd_DragSourceListener(this.listener, dsl);
}}});

Clazz.newMeth(C$, 'removeDragSourceListener$java_awt_dnd_DragSourceListener', function (dsl) {
if (dsl != null ) {
{
this.listener=$I$(7).remove$java_awt_dnd_DragSourceListener$java_awt_dnd_DragSourceListener(this.listener, dsl);
}}});

Clazz.newMeth(C$, 'getDragSourceListeners$', function () {
return this.getListeners$Class(Clazz.getClass($I$(8),['dragDropEnd$java_awt_dnd_DragSourceDropEvent','dragEnter$java_awt_dnd_DragSourceDragEvent','dragExit$java_awt_dnd_DragSourceEvent','dragOver$java_awt_dnd_DragSourceDragEvent','dropActionChanged$java_awt_dnd_DragSourceDragEvent']));
});

Clazz.newMeth(C$, 'addDragSourceMotionListener$java_awt_dnd_DragSourceMotionListener', function (dsml) {
if (dsml != null ) {
{
this.motionListener=$I$(7).add$java_awt_dnd_DragSourceMotionListener$java_awt_dnd_DragSourceMotionListener(this.motionListener, dsml);
}}});

Clazz.newMeth(C$, 'removeDragSourceMotionListener$java_awt_dnd_DragSourceMotionListener', function (dsml) {
if (dsml != null ) {
{
this.motionListener=$I$(7).remove$java_awt_dnd_DragSourceMotionListener$java_awt_dnd_DragSourceMotionListener(this.motionListener, dsml);
}}});

Clazz.newMeth(C$, 'getDragSourceMotionListeners$', function () {
return this.getListeners$Class(Clazz.getClass($I$(9),['dragMouseMoved$java_awt_dnd_DragSourceDragEvent']));
});

Clazz.newMeth(C$, 'getListeners$Class', function (listenerType) {
var l=null;
if (listenerType === Clazz.getClass($I$(8),['dragDropEnd$java_awt_dnd_DragSourceDropEvent','dragEnter$java_awt_dnd_DragSourceDragEvent','dragExit$java_awt_dnd_DragSourceEvent','dragOver$java_awt_dnd_DragSourceDragEvent','dropActionChanged$java_awt_dnd_DragSourceDragEvent']) ) {
l=this.listener;
} else if (listenerType === Clazz.getClass($I$(9),['dragMouseMoved$java_awt_dnd_DragSourceDragEvent']) ) {
l=this.motionListener;
}return $I$(10).getListeners$java_util_EventListener$Class(l, listenerType);
});

Clazz.newMeth(C$, 'processDragEnter$java_awt_dnd_DragSourceDragEvent', function (dsde) {
var dsl=this.listener;
if (dsl != null ) {
dsl.dragEnter$java_awt_dnd_DragSourceDragEvent(dsde);
}});

Clazz.newMeth(C$, 'processDragOver$java_awt_dnd_DragSourceDragEvent', function (dsde) {
var dsl=this.listener;
if (dsl != null ) {
dsl.dragOver$java_awt_dnd_DragSourceDragEvent(dsde);
}});

Clazz.newMeth(C$, 'processDropActionChanged$java_awt_dnd_DragSourceDragEvent', function (dsde) {
var dsl=this.listener;
if (dsl != null ) {
dsl.dropActionChanged$java_awt_dnd_DragSourceDragEvent(dsde);
}});

Clazz.newMeth(C$, 'processDragExit$java_awt_dnd_DragSourceEvent', function (dse) {
var dsl=this.listener;
if (dsl != null ) {
dsl.dragExit$java_awt_dnd_DragSourceEvent(dse);
}});

Clazz.newMeth(C$, 'processDragDropEnd$java_awt_dnd_DragSourceDropEvent', function (dsde) {
var dsl=this.listener;
if (dsl != null ) {
dsl.dragDropEnd$java_awt_dnd_DragSourceDropEvent(dsde);
}});

Clazz.newMeth(C$, 'processDragMouseMoved$java_awt_dnd_DragSourceDragEvent', function (dsde) {
var dsml=this.motionListener;
if (dsml != null ) {
dsml.dragMouseMoved$(dsde);
}});

Clazz.newMeth(C$, 'getDragThreshold$', function () {
return 5;
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
