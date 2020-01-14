(function(){var P$=Clazz.newPackage("sun.awt.datatransfer"),I$=[];
var C$=Clazz.newClass(P$, "TransferableProxy", null, null, 'java.awt.datatransfer.Transferable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.transferable=null;
this.isLocal=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_datatransfer_Transferable$Z', function (t, local) {
C$.$init$.apply(this);
this.transferable=t;
this.isLocal=local;
}, 1);

Clazz.newMeth(C$, 'getTransferDataFlavors$', function () {
return this.transferable.getTransferDataFlavors$();
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor', function (flavor) {
return this.transferable.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(flavor);
});

Clazz.newMeth(C$, 'getTransferData$java_awt_datatransfer_DataFlavor', function (df) {
var data=this.transferable.getTransferData$java_awt_datatransfer_DataFlavor(df);
return data;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
