(function(){var P$=Clazz.newPackage("java.awt.datatransfer"),p$1={},I$=[[0,'java.awt.EventQueue','java.awt.datatransfer.DataFlavor','sun.awt.EventListenerAggregate','java.awt.datatransfer.FlavorListener','java.awt.datatransfer.FlavorEvent','java.util.HashSet','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Clipboard");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.owner=null;
this.contents=null;
this.flavorListeners=null;
this.currentDataFlavors=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner', function (contents, owner) {
var oldOwner=this.owner;
var oldContents=this.contents;
this.owner=owner;
this.contents=contents;
if (oldOwner != null  && oldOwner !== owner  ) {
$I$(1).invokeLater$Runnable(((P$.Clipboard$1||
(function(){var C$=Clazz.newClass(P$, "Clipboard$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.oldOwner.lostOwnership$(this.b$['java.awt.datatransfer.Clipboard'], this.$finals$.oldContents);
});
})()
), Clazz.new_(P$.Clipboard$1.$init$, [this, {oldOwner: oldOwner, oldContents: oldContents}])));
}p$1.fireFlavorsChanged.apply(this, []);
});

Clazz.newMeth(C$, 'getContents$O', function (requestor) {
return this.contents;
});

Clazz.newMeth(C$, 'getAvailableDataFlavors$', function () {
var cntnts=this.getContents$O(null);
if (cntnts == null ) {
return Clazz.array($I$(2), [0]);
}return cntnts.getTransferDataFlavors$();
});

Clazz.newMeth(C$, 'isDataFlavorAvailable$java_awt_datatransfer_DataFlavor', function (flavor) {
if (flavor == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["flavor"]);
}var cntnts=this.getContents$O(null);
if (cntnts == null ) {
return false;
}return cntnts.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(flavor);
});

Clazz.newMeth(C$, 'getData$java_awt_datatransfer_DataFlavor', function (flavor) {
if (flavor == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["flavor"]);
}var cntnts=this.getContents$O(null);
if (cntnts == null ) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
}return cntnts.getTransferData$java_awt_datatransfer_DataFlavor(flavor);
});

Clazz.newMeth(C$, 'addFlavorListener$java_awt_datatransfer_FlavorListener', function (listener) {
if (listener == null ) {
return;
}if (this.flavorListeners == null ) {
this.currentDataFlavors=p$1.getAvailableDataFlavorSet.apply(this, []);
this.flavorListeners=Clazz.new_($I$(3).c$$Class,[Clazz.getClass($I$(4),['flavorsChanged$java_awt_datatransfer_FlavorEvent'])]);
}this.flavorListeners.add$java_util_EventListener(listener);
});

Clazz.newMeth(C$, 'removeFlavorListener$java_awt_datatransfer_FlavorListener', function (listener) {
if (listener == null  || this.flavorListeners == null  ) {
return;
}this.flavorListeners.remove$java_util_EventListener(listener);
});

Clazz.newMeth(C$, 'getFlavorListeners$', function () {
return this.flavorListeners == null  ? Clazz.array($I$(4), [0]) : this.flavorListeners.getListenersCopy$();
});

Clazz.newMeth(C$, 'fireFlavorsChanged', function () {
if (this.flavorListeners == null ) {
return;
}var prevDataFlavors=this.currentDataFlavors;
this.currentDataFlavors=p$1.getAvailableDataFlavorSet.apply(this, []);
if (prevDataFlavors.equals$O(this.currentDataFlavors)) {
return;
}var flavorListenerArray=this.flavorListeners.getListenersInternal$();
for (var i=0; i < flavorListenerArray.length; i++) {
var listener=flavorListenerArray[i];
$I$(1).invokeLater$Runnable(((P$.Clipboard$2||
(function(){var C$=Clazz.newClass(P$, "Clipboard$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.listener.flavorsChanged$(Clazz.new_($I$(5).c$$java_awt_datatransfer_Clipboard,[this.b$['java.awt.datatransfer.Clipboard']]));
});
})()
), Clazz.new_(P$.Clipboard$2.$init$, [this, {listener: listener}])));
}
}, p$1);

Clazz.newMeth(C$, 'getAvailableDataFlavorSet', function () {
var set=Clazz.new_($I$(6));
var contents=this.getContents$O(null);
if (contents != null ) {
var flavors=contents.getTransferDataFlavors$();
if (flavors != null ) {
set.addAll$java_util_Collection($I$(7).asList$TTA(flavors));
}}return set;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:26 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
