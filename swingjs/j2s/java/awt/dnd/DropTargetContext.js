(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[[0,'java.awt.datatransfer.DataFlavor','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DropTargetContext", null, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dropTarget=null;
this.dropTargetContextPeer=null;
this.transferable=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DropTarget', function (dt) {
C$.$init$.apply(this);
this.dropTarget=dt;
}, 1);

Clazz.newMeth(C$, 'getDropTarget$', function () {
return this.dropTarget;
});

Clazz.newMeth(C$, 'getComponent$', function () {
return this.dropTarget.getComponent$();
});

Clazz.newMeth(C$, 'addNotify$java_awt_dnd_peer_DropTargetContextPeer', function (dtcp) {
this.dropTargetContextPeer=dtcp;
});

Clazz.newMeth(C$, 'removeNotify$', function () {
this.dropTargetContextPeer=null;
this.transferable=null;
});

Clazz.newMeth(C$, 'setTargetActions$I', function (actions) {
var peer=this.getDropTargetContextPeer$();
if (peer != null ) {
{
peer.setTargetActions$I(actions);
this.getDropTarget$().doSetDefaultActions$I(actions);
}} else {
this.getDropTarget$().doSetDefaultActions$I(actions);
}});

Clazz.newMeth(C$, 'getTargetActions$', function () {
var peer=this.getDropTargetContextPeer$();
return ((peer != null ) ? peer.getTargetActions$() : this.dropTarget.getDefaultActions$());
});

Clazz.newMeth(C$, 'dropComplete$Z', function (success) {
var peer=this.getDropTargetContextPeer$();
if (peer != null ) {
peer.dropComplete$Z(success);
}});

Clazz.newMeth(C$, 'acceptDrag$I', function (dragOperation) {
var peer=this.getDropTargetContextPeer$();
if (peer != null ) {
peer.acceptDrag$I(dragOperation);
}});

Clazz.newMeth(C$, 'rejectDrag$', function () {
var peer=this.getDropTargetContextPeer$();
if (peer != null ) {
peer.rejectDrag$();
}});

Clazz.newMeth(C$, 'acceptDrop$I', function (dropOperation) {
var peer=this.getDropTargetContextPeer$();
if (peer != null ) {
peer.acceptDrop$I(dropOperation);
}});

Clazz.newMeth(C$, 'rejectDrop$', function () {
var peer=this.getDropTargetContextPeer$();
if (peer != null ) {
peer.rejectDrop$();
}});

Clazz.newMeth(C$, 'getCurrentDataFlavors$', function () {
var peer=this.getDropTargetContextPeer$();
return peer != null  ? peer.getTransferDataFlavors$() : Clazz.array($I$(1), [0]);
});

Clazz.newMeth(C$, 'getCurrentDataFlavorsAsList$', function () {
return $I$(2).asList$TTA(this.getCurrentDataFlavors$());
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor', function (df) {
return this.getCurrentDataFlavorsAsList$().contains$O(df);
});

Clazz.newMeth(C$, 'getTransferable$', function () {
var peer=this.getDropTargetContextPeer$();
if (peer == null ) {
throw Clazz.new_(Clazz.load('java.awt.dnd.InvalidDnDOperationException'));
} else {
if (this.transferable == null ) {
this.transferable=peer.getTransferable$();
var isLocal=peer.isTransferableJVMLocal$();
}return this.transferable;
}});

Clazz.newMeth(C$, 'getDropTargetContextPeer$', function () {
return this.dropTargetContextPeer;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
