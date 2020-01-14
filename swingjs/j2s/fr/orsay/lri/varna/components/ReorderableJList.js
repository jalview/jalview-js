(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.components"),I$=[[0,'java.awt.Color','fr.orsay.lri.varna.components.ReorderableJList','java.awt.datatransfer.DataFlavor',['fr.orsay.lri.varna.components.ReorderableJList','.ReorderableListCellRenderer'],'javax.swing.DefaultListModel','java.awt.dnd.DragSource','java.awt.dnd.DropTarget',['fr.orsay.lri.varna.components.ReorderableJList','.RJLTransferable'],'java.awt.Cursor']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ReorderableJList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JList', ['java.awt.dnd.DragSourceListener', 'java.awt.dnd.DropTargetListener', 'java.awt.dnd.DragGestureListener']);
C$.localObjectFlavor=null;
C$.supportedFlavors=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
try {
C$.localObjectFlavor=Clazz.new_($I$(3).c$$S,["application/x-java-jvm-local-objectref"]);
} catch (cnfe) {
if (Clazz.exceptionOf(cnfe,"ClassNotFoundException")){
cnfe.printStackTrace$();
} else {
throw cnfe;
}
}
};
C$.supportedFlavors=Clazz.array($I$(3), -1, [C$.localObjectFlavor]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dragSource=null;
this.$dropTarget=null;
this.dropTargetIndex=0;
this.draggedIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.draggedIndex=-1;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.setCellRenderer$javax_swing_ListCellRenderer(Clazz.new_($I$(4), [this, null]));
this.setModel$javax_swing_ListModel(Clazz.new_($I$(5)));
this.dragSource=Clazz.new_($I$(6));
var dgr=this.dragSource.createDefaultDragGestureRecognizer$java_awt_Component$I$java_awt_dnd_DragGestureListener(this, 2, this);
this.$dropTarget=Clazz.new_($I$(7).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[this, this]);
}, 1);

Clazz.newMeth(C$, ['dragGestureRecognized$java_awt_dnd_DragGestureEvent','dragGestureRecognized$'], function (dge) {
var clickPoint=dge.getDragOrigin$();
var index=this.locationToIndex$java_awt_Point(clickPoint);
if (index == -1) return;
var target=this.getModel$().getElementAt$I(index);
var trans=Clazz.new_($I$(8).c$$O, [this, null, target]);
this.draggedIndex=index;
this.dragSource.startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener(dge, $I$(9).getDefaultCursor$(), trans, this);
});

Clazz.newMeth(C$, 'dragDropEnd$java_awt_dnd_DragSourceDropEvent', function (dsde) {
this.dropTargetIndex=-1;
this.draggedIndex=-1;
this.repaint$();
});

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DragSourceDragEvent', function (dsde) {
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DragSourceEvent', function (dse) {
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DragSourceDragEvent', function (dsde) {
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DragSourceDragEvent', function (dsde) {
});

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent', function (dtde) {
if (dtde.getSource$() !== this.$dropTarget ) dtde.rejectDrag$();
 else {
dtde.acceptDrag$I(3);
}});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent', function (dte) {
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent', function (dtde) {
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent', function (dtde) {
if (dtde.getSource$() !== this.$dropTarget ) dtde.rejectDrag$();
var dragPoint=dtde.getLocation$();
var index=this.locationToIndex$java_awt_Point(dragPoint);
this.dropTargetIndex=index;
if (this.dropTargetIndex != -1) {
var r=this.getCellBounds$I$I(this.dropTargetIndex, this.dropTargetIndex);
if (dragPoint.y > r.y + (r.height/2|0)) {
this.dropTargetIndex+=1;
}}this.repaint$();
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent', function (dtde) {
if (dtde.getSource$() !== this.$dropTarget ) {
dtde.rejectDrop$();
return;
}var dropPoint=dtde.getLocation$();
var index=this.locationToIndex$java_awt_Point(dropPoint);
if (index != -1) {
var r=this.getCellBounds$I$I(index, index);
if (dropPoint.y > r.y + (r.height/2|0)) {
index+=1;
}}var dropped=false;
try {
if ((index == -1) || (index == this.draggedIndex) || (index == this.draggedIndex + 1)  ) {
dtde.rejectDrop$();
return;
}dtde.acceptDrop$I(2);
var dragged=dtde.getTransferable$().getTransferData$java_awt_datatransfer_DataFlavor(C$.localObjectFlavor);
var sourceBeforeTarget=(this.draggedIndex < index);
var mod=this.getModel$();
mod.remove$I(this.draggedIndex);
mod.add$I$TE((sourceBeforeTarget ? index - 1 : index), dragged);
dropped=true;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
dtde.dropComplete$Z(dropped);
});
;
(function(){var C$=Clazz.newClass(P$.ReorderableJList, "ReorderableListCellRenderer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.DefaultListCellRenderer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isTargetCell=false;
this.isLastItem=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['getListCellRendererComponent$javax_swing_JList$O$I$Z$Z','getListCellRendererComponent$','getListCellRendererComponent$javax_swing_JList$TE$I$Z$Z'], function (list, value, index, isSelected, hasFocus) {
this.isTargetCell=(index == this.this$0.dropTargetIndex);
this.isLastItem=(index == list.getModel$().getSize$() - 1) && (this.this$0.dropTargetIndex == list.getModel$().getSize$()) ;
var showSelected=isSelected;
return C$.superclazz.prototype.getListCellRendererComponent$javax_swing_JList$O$I$Z$Z.apply(this, [list, value, index, showSelected, hasFocus]);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
if (this.isTargetCell) {
g.setColor$java_awt_Color($I$(1).black);
g.drawLine$I$I$I$I(0, 0, this.getSize$().width, 0);
}if (this.isLastItem) {
g.setColor$java_awt_Color($I$(1).black);
g.drawLine$I$I$I$I(0, this.getSize$().height - 1, this.getSize$().width, this.getSize$().height - 1);
}});
})()
;
(function(){var C$=Clazz.newClass(P$.ReorderableJList, "RJLTransferable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.datatransfer.Transferable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.object=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O', function (o) {
C$.$init$.apply(this);
this.object=o;
}, 1);

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor', function (df) {
if (this.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(df)) return this.object;
 else throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[df]);
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor', function (df) {
return (df.equals$java_awt_datatransfer_DataFlavor($I$(2).localObjectFlavor));
});

Clazz.newMeth(C$, 'getTransferDataFlavors$', function () {
return $I$(2).supportedFlavors;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:43 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
