(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
var C$=Clazz.newClass(P$, "DropTargetDragEvent", null, 'java.awt.dnd.DropTargetEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.location=null;
this.actions=0;
this.dropAction=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DropTargetContext$java_awt_Point$I$I', function (dtc, cursorLocn, dropAction, srcActions) {
C$.superclazz.c$$java_awt_dnd_DropTargetContext.apply(this, [dtc]);
C$.$init$.apply(this);
if (cursorLocn == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["cursorLocn"]);
if (dropAction != 0 && dropAction != 1  && dropAction != 2  && dropAction != 1073741824 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dropAction" + dropAction]);
if ((srcActions & ~(1073741827)) != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["srcActions"]);
this.location=cursorLocn;
this.actions=srcActions;
this.dropAction=dropAction;
}, 1);

Clazz.newMeth(C$, 'getLocation$', function () {
return this.location;
});

Clazz.newMeth(C$, 'getCurrentDataFlavors$', function () {
return this.getDropTargetContext$().getCurrentDataFlavors$();
});

Clazz.newMeth(C$, 'getCurrentDataFlavorsAsList$', function () {
return this.getDropTargetContext$().getCurrentDataFlavorsAsList$();
});

Clazz.newMeth(C$, 'isDataFlavorSupported$java_awt_datatransfer_DataFlavor', function (df) {
return this.getDropTargetContext$().isDataFlavorSupported$java_awt_datatransfer_DataFlavor(df);
});

Clazz.newMeth(C$, 'getSourceActions$', function () {
return this.actions;
});

Clazz.newMeth(C$, 'getDropAction$', function () {
return this.dropAction;
});

Clazz.newMeth(C$, 'getTransferable$', function () {
return this.getDropTargetContext$().getTransferable$();
});

Clazz.newMeth(C$, 'acceptDrag$I', function (dragOperation) {
this.getDropTargetContext$().acceptDrag$I(dragOperation);
});

Clazz.newMeth(C$, 'rejectDrag$', function () {
this.getDropTargetContext$().rejectDrag$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
