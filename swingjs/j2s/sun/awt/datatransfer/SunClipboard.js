(function(){var P$=Clazz.newPackage("sun.awt.datatransfer"),p$1={},I$=[[0,'java.awt.datatransfer.SystemFlavorMap','StringBuffer','sun.awt.datatransfer.TransferableProxy','java.awt.EventQueue','sun.awt.AppContext','sun.awt.datatransfer.ClipboardTransferable','sun.awt.datatransfer.DataTransferer','Boolean','sun.awt.SunToolkit','sun.awt.PeerEvent','sun.awt.EventListenerAggregate','java.awt.datatransfer.FlavorListener','java.awt.datatransfer.FlavorEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SunClipboard", null, 'java.awt.datatransfer.Clipboard', 'java.beans.PropertyChangeListener');
C$.flavorMap=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.flavorMap=$I$(1).getDefaultFlavorMap$();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.contentsContext=null;
this.CLIPBOARD_FLAVOR_LISTENER_KEY=null;
this.numberOfFlavorListeners=0;
this.$currentDataFlavors=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.contentsContext=null;
this.numberOfFlavorListeners=0;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
this.CLIPBOARD_FLAVOR_LISTENER_KEY=Clazz.new_($I$(2).c$$S,[name + "_CLIPBOARD_FLAVOR_LISTENER_KEY"]);
}, 1);

Clazz.newMeth(C$, 'setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner', function (contents, owner) {
if (contents == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["contents"]);
}p$1.initContext.apply(this, []);
var oldOwner=this.owner;
var oldContents=this.contents;
try {
this.owner=owner;
this.contents=Clazz.new_($I$(3).c$$java_awt_datatransfer_Transferable$Z,[contents, true]);
this.setContentsNative$java_awt_datatransfer_Transferable(contents);
} finally {
if (oldOwner != null  && oldOwner !== owner  ) {
$I$(4).invokeLater$Runnable(((P$.SunClipboard$1||
(function(){var C$=Clazz.newClass(P$, "SunClipboard$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.oldOwner.lostOwnership$(this.b$['sun.awt.datatransfer.SunClipboard'], this.$finals$.oldContents);
});
})()
), Clazz.new_(P$.SunClipboard$1.$init$, [this, {oldOwner: oldOwner, oldContents: oldContents}])));
}}
});

Clazz.newMeth(C$, 'initContext', function () {
var context=$I$(5).getAppContext$();
if (this.contentsContext !== context ) {
{
if (context.isDisposed$()) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Can\'t set contents from disposed AppContext"]);
}context.addPropertyChangeListener$S$java_beans_PropertyChangeListener("disposed", this);
}if (this.contentsContext != null ) {
this.contentsContext.removePropertyChangeListener$S$java_beans_PropertyChangeListener("disposed", this);
}this.contentsContext=context;
}}, p$1);

Clazz.newMeth(C$, 'getContents$O', function (requestor) {
if (this.contents != null ) {
return this.contents;
}return Clazz.new_($I$(6).c$$sun_awt_datatransfer_SunClipboard,[this]);
});

Clazz.newMeth(C$, 'getContextContents', function () {
var context=$I$(5).getAppContext$();
return (context === this.contentsContext ) ? this.contents : null;
}, p$1);

Clazz.newMeth(C$, 'getAvailableDataFlavors$', function () {
var cntnts=p$1.getContextContents.apply(this, []);
if (cntnts != null ) {
return cntnts.getTransferDataFlavors$();
}var formats=this.getClipboardFormatsOpenClose$();
return $I$(7).getInstance$().getFlavorsForFormatsAsArray$JA$java_awt_datatransfer_FlavorTable(formats, C$.flavorMap);
});

Clazz.newMeth(C$, 'isDataFlavorAvailable$java_awt_datatransfer_DataFlavor', function (flavor) {
if (flavor == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["flavor"]);
}var cntnts=p$1.getContextContents.apply(this, []);
if (cntnts != null ) {
return cntnts.isDataFlavorSupported$java_awt_datatransfer_DataFlavor(flavor);
}var formats=this.getClipboardFormatsOpenClose$();
return C$.formatArrayAsDataFlavorSet$JA(formats).contains$O(flavor);
});

Clazz.newMeth(C$, 'getData$java_awt_datatransfer_DataFlavor', function (flavor) {
if (flavor == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["flavor"]);
}var cntnts=p$1.getContextContents.apply(this, []);
if (cntnts != null ) {
return cntnts.getTransferData$java_awt_datatransfer_DataFlavor(flavor);
}var format=0;
var data=null;
var localeTransferable=null;
try {
this.openClipboard$sun_awt_datatransfer_SunClipboard(null);
var formats=this.getClipboardFormats$();
var lFormat=$I$(7).getInstance$().getFlavorsForFormats$JA$java_awt_datatransfer_FlavorTable(formats, C$.flavorMap).get$O(flavor);
if (lFormat == null ) {
throw Clazz.new_(Clazz.load('java.awt.datatransfer.UnsupportedFlavorException').c$$java_awt_datatransfer_DataFlavor,[flavor]);
}format=lFormat.longValue$();
data=this.getClipboardData$J(format);
if ($I$(7).getInstance$().isLocaleDependentTextFormat$J(format)) {
localeTransferable=this.createLocaleTransferable$JA(formats);
}} finally {
this.closeClipboard$();
}
return $I$(7).getInstance$().translateBytes$BA$java_awt_datatransfer_DataFlavor$J$java_awt_datatransfer_Transferable(data, flavor, format, localeTransferable);
});

Clazz.newMeth(C$, 'createLocaleTransferable$JA', function (formats) {
return null;
});

Clazz.newMeth(C$, 'openClipboard$sun_awt_datatransfer_SunClipboard', function (newOwner) {
});

Clazz.newMeth(C$, 'closeClipboard$', function () {
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
if ("disposed".equals$O(evt.getPropertyName$()) && $I$(8).TRUE.equals$O(evt.getNewValue$()) ) {
var disposedContext=evt.getSource$();
this.lostOwnershipLater$sun_awt_AppContext(disposedContext);
}});

Clazz.newMeth(C$, 'lostOwnershipImpl$', function () {
this.lostOwnershipLater$sun_awt_AppContext(null);
});

Clazz.newMeth(C$, 'lostOwnershipLater$sun_awt_AppContext', function (disposedContext) {
var context=this.contentsContext;
if (context == null ) {
return;
}var runnable=((P$.SunClipboard$2||
(function(){var C$=Clazz.newClass(P$, "SunClipboard$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var sunClipboard=this.b$['sun.awt.datatransfer.SunClipboard'];
var owner=null;
var contents=null;
{
var context=sunClipboard.contentsContext;
if (context == null ) {
return;
}if (this.$finals$.disposedContext == null  || context === this.$finals$.disposedContext  ) {
owner=sunClipboard.owner;
contents=sunClipboard.contents;
sunClipboard.contentsContext=null;
sunClipboard.owner=null;
sunClipboard.contents=null;
sunClipboard.clearNativeContext$();
context.removePropertyChangeListener$S$java_beans_PropertyChangeListener("disposed", sunClipboard);
} else {
return;
}}if (owner != null ) {
owner.lostOwnership$(sunClipboard, contents);
}});
})()
), Clazz.new_(P$.SunClipboard$2.$init$, [this, {disposedContext: disposedContext}]));
$I$(9).postEvent$sun_awt_AppContext$java_awt_AWTEvent(context, Clazz.new_($I$(10).c$$O$Runnable$J,[this, runnable, 1]));
});

Clazz.newMeth(C$, 'getClipboardFormatsOpenClose$', function () {
try {
this.openClipboard$sun_awt_datatransfer_SunClipboard(null);
return this.getClipboardFormats$();
} finally {
this.closeClipboard$();
}
});

Clazz.newMeth(C$, 'formatArrayAsDataFlavorSet$JA', function (formats) {
return (formats == null ) ? null : $I$(7).getInstance$().getFlavorsForFormatsAsSet$JA$java_awt_datatransfer_FlavorTable(formats, C$.flavorMap);
}, 1);

Clazz.newMeth(C$, 'addFlavorListener$java_awt_datatransfer_FlavorListener', function (listener) {
if (listener == null ) {
return;
}var appContext=$I$(5).getAppContext$();
var contextFlavorListeners=appContext.get$O(this.CLIPBOARD_FLAVOR_LISTENER_KEY);
if (contextFlavorListeners == null ) {
contextFlavorListeners=Clazz.new_($I$(11).c$$Class,[Clazz.getClass($I$(12),['flavorsChanged$java_awt_datatransfer_FlavorEvent'])]);
appContext.put$O$O(this.CLIPBOARD_FLAVOR_LISTENER_KEY, contextFlavorListeners);
}contextFlavorListeners.add$java_util_EventListener(listener);
if (this.numberOfFlavorListeners++ == 0) {
var currentFormats=null;
try {
this.openClipboard$sun_awt_datatransfer_SunClipboard(null);
currentFormats=this.getClipboardFormats$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"IllegalStateException")){
} else {
throw exc;
}
} finally {
this.closeClipboard$();
}
this.$currentDataFlavors=C$.formatArrayAsDataFlavorSet$JA(currentFormats);
this.registerClipboardViewerChecked$();
}});

Clazz.newMeth(C$, 'removeFlavorListener$java_awt_datatransfer_FlavorListener', function (listener) {
if (listener == null ) {
return;
}var appContext=$I$(5).getAppContext$();
var contextFlavorListeners=appContext.get$O(this.CLIPBOARD_FLAVOR_LISTENER_KEY);
if (contextFlavorListeners == null ) {
return;
}if (contextFlavorListeners.remove$java_util_EventListener(listener) && --this.numberOfFlavorListeners == 0 ) {
this.unregisterClipboardViewerChecked$();
this.$currentDataFlavors=null;
}});

Clazz.newMeth(C$, 'getFlavorListeners$', function () {
var contextFlavorListeners=$I$(5).getAppContext$().get$O(this.CLIPBOARD_FLAVOR_LISTENER_KEY);
return contextFlavorListeners == null  ? Clazz.array($I$(12), [0]) : contextFlavorListeners.getListenersCopy$();
});

Clazz.newMeth(C$, 'areFlavorListenersRegistered$', function () {
return (this.numberOfFlavorListeners > 0);
});

Clazz.newMeth(C$, 'checkChange$JA', function (formats) {
var prevDataFlavors=this.$currentDataFlavors;
this.$currentDataFlavors=C$.formatArrayAsDataFlavorSet$JA(formats);
if ((prevDataFlavors != null ) && (this.$currentDataFlavors != null ) && prevDataFlavors.equals$O(this.$currentDataFlavors)  ) {
return;
};for (var it=$I$(5).getAppContexts$().iterator$(); it.hasNext$(); ) {
var appContext=it.next$();
if (appContext == null  || appContext.isDisposed$() ) {
continue;
}var flavorListeners=appContext.get$O(this.CLIPBOARD_FLAVOR_LISTENER_KEY);
if (flavorListeners != null ) {
var flavorListenerArray=flavorListeners.getListenersInternal$();
for (var i=0; i < flavorListenerArray.length; i++) {
$I$(9).postEvent$sun_awt_AppContext$java_awt_AWTEvent(appContext, Clazz.new_($I$(10).c$$O$Runnable$J,[this, Clazz.new_(P$.SunClipboard$1SunFlavorChangeNotifier.$init$, [this, null]), 1]));
}
}}
});
;
(function(){var C$=Clazz.newClass(P$, "SunClipboard$1SunFlavorChangeNotifier", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable', 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.flavorListener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_datatransfer_FlavorListener', function (flavorListener) {
C$.$init$.apply(this);
this.flavorListener=flavorListener;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.flavorListener != null ) {
this.flavorListener.flavorsChanged$(Clazz.new_($I$(13).c$$java_awt_datatransfer_Clipboard,[this.this$0]));
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
