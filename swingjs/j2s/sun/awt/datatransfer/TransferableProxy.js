(function(){var P$=Clazz.newPackage("sun.awt.datatransfer"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TransferableProxy", null, null, 'java.awt.datatransfer.Transferable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isLocal'],'O',['transferable','java.awt.datatransfer.Transferable']]]

Clazz.newMeth(C$, 'c$$java_awt_datatransfer_Transferable$Z',  function (t, local) {
;C$.$init$.apply(this);
this.transferable=t;
this.isLocal=local;
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$',  function () {
return this.transferable.getTransferDataFlavors$();
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor',  function (flavor) {
return this.transferable.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(flavor);
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor',  function (df) {
var data=this.transferable.getTransferData$java_awt_datatransfer_DataFlavor(df);
return data;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:02 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
