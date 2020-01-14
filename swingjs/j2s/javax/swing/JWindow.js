(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.SwingUtilities','javax.swing.JComponent','javax.swing.JRootPane','javax.swing.RepaintManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JWindow", null, 'java.awt.Window', 'javax.swing.RootPaneContainer');
C$.windowCount=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rootPane=null;
this.rootPaneCheckingEnabled=false;
this.transferHandler=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.rootPaneCheckingEnabled=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_awt_JSFrame.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_GraphicsConfiguration', function (gc) {
C$.c$$java_awt_Window$java_awt_GraphicsConfiguration.apply(this, [null, gc]);
C$.superclazz.prototype.setFocusableWindowState$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame', function (owner) {
C$.superclazz.c$$java_awt_Window.apply(this, [owner == null  ? $I$(1).getSharedOwnerFrame$() : owner]);
C$.$init$.apply(this);
if (owner == null ) {
var ownerShutdownListener=$I$(1).getSharedOwnerFrameShutdownListener$();
this.addWindowListener$java_awt_event_WindowListener(ownerShutdownListener);
}this.windowInit$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame', function (owner) {
C$.superclazz.c$$java_awt_Window.apply(this, [owner == null  ? $I$(1).getSharedOwnerFrame$() : owner]);
C$.$init$.apply(this);
if (owner == null ) {
var ownerShutdownListener=$I$(1).getSharedOwnerFrameShutdownListener$();
this.addWindowListener$java_awt_event_WindowListener(ownerShutdownListener);
}this.windowInit$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window', function (owner) {
C$.superclazz.c$$java_awt_Window.apply(this, [owner == null  ? $I$(1).getSharedOwnerFrame$() : owner]);
C$.$init$.apply(this);
if (owner == null ) {
var ownerShutdownListener=$I$(1).getSharedOwnerFrameShutdownListener$();
this.addWindowListener$java_awt_event_WindowListener(ownerShutdownListener);
}this.windowInit$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$java_awt_GraphicsConfiguration', function (owner, gc) {
C$.superclazz.c$$java_awt_Window$java_awt_GraphicsConfiguration.apply(this, [owner == null  ? $I$(1).getSharedOwnerFrame$() : owner, gc]);
C$.$init$.apply(this);
if (owner == null ) {
var ownerShutdownListener=$I$(1).getSharedOwnerFrameShutdownListener$();
this.addWindowListener$java_awt_event_WindowListener(ownerShutdownListener);
}this.windowInit$();
}, 1);

Clazz.newMeth(C$, 'windowInit$', function () {
this.setLocale$java_util_Locale($I$(2).getDefaultLocale$());
this.setRootPane$javax_swing_JRootPane(this.createRootPane$());
this.rootPane.setFrameViewer$swingjs_JSFrameViewer(this.setFrameViewer$swingjs_JSFrameViewer(null));
this.setRootPaneCheckingEnabled$Z(true);
this.updateUI$();
this.addNotify$();
this.rootPane.addNotify$();
});

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "WindowUI";
});

Clazz.newMeth(C$, 'createRootPane$', function () {
var rp=Clazz.new_($I$(3).c$$S$Z$java_awt_Container,["_Window" + (++C$.windowCount), false, this]);
rp.setOpaque$Z(true);
return rp;
});

Clazz.newMeth(C$, 'isRootPaneCheckingEnabled$', function () {
return this.rootPaneCheckingEnabled;
});

Clazz.newMeth(C$, 'setTransferHandler$javax_swing_TransferHandler', function (newHandler) {
var oldHandler=this.transferHandler;
this.transferHandler=newHandler;
$I$(1).installSwingDropTargetAsNecessary$java_awt_Component$javax_swing_TransferHandler(this, this.transferHandler);
this.firePropertyChange$S$O$O("transferHandler", oldHandler, newHandler);
});

Clazz.newMeth(C$, 'getTransferHandler$', function () {
return this.transferHandler;
});

Clazz.newMeth(C$, 'update$java_awt_Graphics', function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'setRootPaneCheckingEnabled$Z', function (enabled) {
this.rootPaneCheckingEnabled=enabled;
});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I', function (comp, constraints, index) {
if (this.isRootPaneCheckingEnabled$()) {
this.getContentPane$().add$java_awt_Component$O$I(comp, constraints, index);
return;
}this.addImplCont$java_awt_Component$O$I(comp, constraints, index);
});

Clazz.newMeth(C$, 'remove$java_awt_Component', function (comp) {
if (comp === this.rootPane ) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
} else {
this.getContentPane$().remove$java_awt_Component(comp);
}});

Clazz.newMeth(C$, 'setLayout$java_awt_LayoutManager', function (manager) {
if (this.isRootPaneCheckingEnabled$()) {
this.getContentPane$().setLayout$java_awt_LayoutManager(manager);
} else {
C$.superclazz.prototype.setLayout$java_awt_LayoutManager.apply(this, [manager]);
}});

Clazz.newMeth(C$, 'getRootPane$', function () {
return this.rootPane;
});

Clazz.newMeth(C$, 'setRootPane$javax_swing_JRootPane', function (root) {
if (this.rootPane != null ) {
this.remove$java_awt_Component(this.rootPane);
}this.rootPane=root;
if (this.rootPane != null ) {
var checkingEnabled=this.isRootPaneCheckingEnabled$();
try {
this.setRootPaneCheckingEnabled$Z(false);
this.add$java_awt_Component$O(this.rootPane, "Center");
} finally {
this.setRootPaneCheckingEnabled$Z(checkingEnabled);
}
}});

Clazz.newMeth(C$, 'getContentPane$', function () {
return this.getRootPane$().getContentPane$();
});

Clazz.newMeth(C$, 'setContentPane$java_awt_Container', function (contentPane) {
this.getRootPane$().setContentPane$java_awt_Container(contentPane);
});

Clazz.newMeth(C$, 'getLayeredPane$', function () {
return this.getRootPane$().getLayeredPane$();
});

Clazz.newMeth(C$, 'setLayeredPane$javax_swing_JLayeredPane', function (layeredPane) {
this.getRootPane$().setLayeredPane$javax_swing_JLayeredPane(layeredPane);
});

Clazz.newMeth(C$, 'getGlassPane$', function () {
return this.getRootPane$().getGlassPane$();
});

Clazz.newMeth(C$, 'setGlassPane$java_awt_Component', function (glassPane) {
this.getRootPane$().setGlassPane$java_awt_Component(glassPane);
});

Clazz.newMeth(C$, 'getGraphics$', function () {
$I$(2).getGraphicsInvoked$java_awt_Component(this);
return C$.superclazz.prototype.getGraphics$.apply(this, []);
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I', function (time, x, y, width, height) {
if ($I$(4).HANDLE_TOP_LEVEL_PAINT) {
$I$(4).currentManager$javax_swing_JComponent(this).addDirtyRegion$java_awt_Window$I$I$I$I(this, x, y, width, height);
} else {
C$.superclazz.prototype.repaint$J$I$I$I$I.apply(this, [time, x, y, width, height]);
}});

Clazz.newMeth(C$, 'paramString$', function () {
var rootPaneCheckingEnabledString=(this.rootPaneCheckingEnabled ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",rootPaneCheckingEnabled=" + rootPaneCheckingEnabledString ;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
