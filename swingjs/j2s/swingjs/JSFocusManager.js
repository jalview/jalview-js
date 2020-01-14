(function(){var P$=Clazz.newPackage("swingjs"),I$=[];
var C$=Clazz.newClass(P$, "JSFocusManager", null, null, 'java.awt.peer.KeyboardFocusManagerPeer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.currentWindow=null;
this.currentFocusOwner=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setCurrentFocusedWindow$java_awt_Window', function (win) {
this.currentWindow=win;
});

Clazz.newMeth(C$, 'getCurrentFocusedWindow$', function () {
return this.currentWindow;
});

Clazz.newMeth(C$, 'setCurrentFocusOwner$java_awt_Component', function (comp) {
this.currentFocusOwner=comp;
});

Clazz.newMeth(C$, 'getCurrentFocusOwner$', function () {
return this.currentFocusOwner;
});

Clazz.newMeth(C$, 'clearGlobalFocusOwner$java_awt_Window', function (activeWindow) {
if (this.currentFocusOwner != null ) {
this.currentFocusOwner=null;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-08 13:26:25 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
