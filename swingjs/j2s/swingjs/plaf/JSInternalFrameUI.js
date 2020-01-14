(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'Boolean','javax.swing.LookAndFeel','javax.swing.UIManager','swingjs.plaf.LazyActionMap',['swingjs.plaf.JSInternalFrameUI','.Handler'],'sun.swing.DefaultLookup','javax.swing.SwingUtilities','javax.swing.DefaultDesktopManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSInternalFrameUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSFrameUI');
C$.sharedDesktopManager=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.iframe=null;
this.handler=null;
this.internalFrameListener=null;
this.propertyChangeListener=null;
this.titleBarHidden=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.isInternalFrame=true;
}, 1);

Clazz.newMeth(C$, 'frameCloserAction$', function () {
var jif=this.iframe;
if (jif.isClosable$()) jif.doDefaultCloseAction$();
});

Clazz.newMeth(C$, 'getMoveCoords$I$I', function (x, y) {
return Clazz.array(Integer.TYPE, -1, [x, y]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (c) {
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [c]);
this.iframe=c;
this.installDefaults$();
this.installListeners$();
this.installKeyboardActions$();
$I$(2).installProperty$javax_swing_JComponent$S$O(this.iframe, "opaque", $I$(1).TRUE);
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (c) {
if (c !== this.iframe ) throw Clazz.new_(Clazz.load('java.awt.IllegalComponentStateException').c$$S,[this + " was asked to deinstall() " + c + " when it only knows about " + this.iframe + "." ]);
this.uninstallKeyboardActions$();
this.uninstallListeners$();
this.uninstallDefaults$();
this.handler=null;
this.iframe=null;
C$.superclazz.prototype.uninstallUI$javax_swing_JComponent.apply(this, [c]);
});

Clazz.newMeth(C$, 'installDefaults$', function () {
var frameIcon=this.iframe.getFrameIcon$();
if (frameIcon == null  || Clazz.instanceOf(frameIcon, "javax.swing.plaf.UIResource") ) {
this.iframe.setFrameIcon$javax_swing_Icon($I$(3).getIcon$O("InternalFrame.icon"));
}var contentPane=this.iframe.getContentPane$();
if (contentPane != null ) {
var bg=contentPane.getBackground$();
if (Clazz.instanceOf(bg, "javax.swing.plaf.UIResource")) contentPane.setBackground$java_awt_Color(null);
}this.iframe.setBackground$java_awt_Color($I$(3).getLookAndFeelDefaults$().getColor$O("control"));
$I$(2).installBorder$javax_swing_JComponent$S(this.iframe, "InternalFrame.border");
});

Clazz.newMeth(C$, 'createInternalFrameListener$', function () {
this.internalFrameListener=p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'installKeyboardActions$', function () {
this.createInternalFrameListener$();
if (this.internalFrameListener != null ) {
this.iframe.addInternalFrameListener$javax_swing_event_InternalFrameListener(this.internalFrameListener);
}$I$(4).installLazyActionMap$javax_swing_JComponent$Class$S(this.iframe, Clazz.getClass(C$), "InternalFrame.actionMap");
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap', function (map) {
}, 1);

Clazz.newMeth(C$, 'createPropertyChangeListener$', function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'installListeners$', function () {
this.propertyChangeListener=this.createPropertyChangeListener$();
this.iframe.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
});

Clazz.newMeth(C$, 'getHandler', function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(5), [this, null]);
}return this.handler;
}, p$1);

Clazz.newMeth(C$, 'getInputMap$I', function (condition) {
if (condition == 2) {
return this.createInputMap$I(condition);
}return null;
});

Clazz.newMeth(C$, 'createInputMap$I', function (condition) {
if (condition == 2) {
var bindings=$I$(6).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.iframe, this, "InternalFrame.windowBindings");
if (bindings != null ) {
return $I$(2).makeComponentInputMap$javax_swing_JComponent$OA(this.iframe, bindings);
}}return null;
});

Clazz.newMeth(C$, 'uninstallDefaults$', function () {
var frameIcon=this.iframe.getFrameIcon$();
if (Clazz.instanceOf(frameIcon, "javax.swing.plaf.UIResource")) {
this.iframe.setFrameIcon$javax_swing_Icon(null);
}this.iframe.setLayout$java_awt_LayoutManager(null);
$I$(2).uninstallBorder$javax_swing_JComponent(this.iframe);
});

Clazz.newMeth(C$, 'uninstallListeners$', function () {
this.iframe.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
this.propertyChangeListener=null;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$', function () {
if (this.internalFrameListener != null ) {
this.iframe.removeInternalFrameListener$javax_swing_event_InternalFrameListener(this.internalFrameListener);
}this.internalFrameListener=null;
$I$(7).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.iframe, 2, null);
$I$(7).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.iframe, null);
});

Clazz.newMeth(C$, 'getDesktopManager$', function () {
if (this.iframe.getDesktopPane$() != null  && this.iframe.getDesktopPane$().getDesktopManager$() != null  ) return this.iframe.getDesktopPane$().getDesktopManager$();
if (C$.sharedDesktopManager == null ) C$.sharedDesktopManager=this.createDesktopManager$();
return C$.sharedDesktopManager;
});

Clazz.newMeth(C$, 'createDesktopManager$', function () {
return Clazz.new_($I$(8));
});

Clazz.newMeth(C$, 'closeFrame$javax_swing_JInternalFrame', function (f) {
this.getDesktopManager$().closeFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'activateFrame$javax_swing_JInternalFrame', function (f) {
this.getDesktopManager$().activateFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'deactivateFrame$javax_swing_JInternalFrame', function (f) {
this.getDesktopManager$().deactivateFrame$javax_swing_JInternalFrame(f);
});

Clazz.newMeth(C$, 'selected$', function () {
this.activateFrame$javax_swing_JInternalFrame(this.jc);
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [evt]);
var prop=evt.getPropertyName$();
var f=evt.getSource$();
var newValue=evt.getNewValue$();
var oldValue=evt.getOldValue$();
if ("closed" == prop) {
if (newValue === $I$(1).TRUE ) {
}} else if ("maximum" == prop) {
} else if ("icon" == prop) {
} else if ("selected" == prop) {
if (newValue === $I$(1).TRUE  && oldValue === $I$(1).FALSE  ) {
this.activateFrame$javax_swing_JInternalFrame(f);
} else if (newValue === $I$(1).FALSE  && oldValue === $I$(1).TRUE  ) {
this.deactivateFrame$javax_swing_JInternalFrame(f);
}} else if (prop == "ancestor") {
} else if ("title" == prop || prop == "closable"  || prop == "iconable"  || prop == "maximizable" ) {
}});

Clazz.newMeth(C$, 'setNorthPane$javax_swing_JComponent', function (c) {
this.frame.setUndecorated$Z(true);
this.setTainted$();
});
;
(function(){var C$=Clazz.newClass(P$.JSInternalFrameUI, "InternalFramePropertyChangeListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
p$1.getHandler.apply(this.this$0, []).propertyChange$java_beans_PropertyChangeEvent(evt);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSInternalFrameUI, "BasicInternalFrameListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.InternalFrameListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent', function (e) {
p$1.getHandler.apply(this.this$0, []).internalFrameClosing$javax_swing_event_InternalFrameEvent(e);
});

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (e) {
p$1.getHandler.apply(this.this$0, []).internalFrameClosed$javax_swing_event_InternalFrameEvent(e);
});

Clazz.newMeth(C$, 'internalFrameOpened$javax_swing_event_InternalFrameEvent', function (e) {
p$1.getHandler.apply(this.this$0, []).internalFrameOpened$javax_swing_event_InternalFrameEvent(e);
});

Clazz.newMeth(C$, 'internalFrameIconified$javax_swing_event_InternalFrameEvent', function (e) {
p$1.getHandler.apply(this.this$0, []).internalFrameIconified$javax_swing_event_InternalFrameEvent(e);
});

Clazz.newMeth(C$, 'internalFrameDeiconified$javax_swing_event_InternalFrameEvent', function (e) {
p$1.getHandler.apply(this.this$0, []).internalFrameDeiconified$javax_swing_event_InternalFrameEvent(e);
});

Clazz.newMeth(C$, 'internalFrameActivated$javax_swing_event_InternalFrameEvent', function (e) {
p$1.getHandler.apply(this.this$0, []).internalFrameActivated$javax_swing_event_InternalFrameEvent(e);
});

Clazz.newMeth(C$, 'internalFrameDeactivated$javax_swing_event_InternalFrameEvent', function (e) {
p$1.getHandler.apply(this.this$0, []).internalFrameDeactivated$javax_swing_event_InternalFrameEvent(e);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JSInternalFrameUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.InternalFrameListener', 'java.beans.PropertyChangeListener', 'java.awt.event.WindowFocusListener', 'javax.swing.SwingConstants']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'windowGainedFocus$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowLostFocus$java_awt_event_WindowEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
this.this$0.iframe.removeInternalFrameListener$javax_swing_event_InternalFrameListener(p$1.getHandler.apply(this.this$0, []));
});

Clazz.newMeth(C$, 'internalFrameActivated$javax_swing_event_InternalFrameEvent', function (e) {
});

Clazz.newMeth(C$, 'internalFrameDeactivated$javax_swing_event_InternalFrameEvent', function (e) {
});

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'internalFrameOpened$javax_swing_event_InternalFrameEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'internalFrameIconified$javax_swing_event_InternalFrameEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'internalFrameDeiconified$javax_swing_event_InternalFrameEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (evt) {
var prop=evt.getPropertyName$();
var f=evt.getSource$();
var newValue=evt.getNewValue$();
var oldValue=evt.getOldValue$();
if ("closed" == prop) {
if (newValue === $I$(1).TRUE ) {
this.this$0.closeFrame$javax_swing_JInternalFrame.apply(this.this$0, [f]);
}} else if ("maximum" == prop) {
} else if ("icon" == prop) {
} else if ("selected" == prop) {
if (newValue === $I$(1).TRUE  && oldValue === $I$(1).FALSE  ) {
this.this$0.activateFrame$javax_swing_JInternalFrame.apply(this.this$0, [f]);
} else if (newValue === $I$(1).FALSE  && oldValue === $I$(1).TRUE  ) {
this.this$0.deactivateFrame$javax_swing_JInternalFrame.apply(this.this$0, [f]);
}} else if (prop == "ancestor") {
if (this.this$0.frame.getParent$() != null ) {
var allowResize=this.this$0.frame.isResizable$() && Clazz.instanceOf(this.this$0.frame.getParent$(), "javax.swing.JDesktopPane") ;
var r=this.this$0.frame.getFrameViewer$().resizer;
if (r != null ) {
r.setEnabled$Z(allowResize);
r.setAllowResize$Z(allowResize);
}}} else if ("title" == prop || prop == "closable"  || prop == "iconable"  || prop == "maximizable" ) {
var dim=this.this$0.iframe.getMinimumSize$();
var frame_dim=this.this$0.iframe.getSize$();
if (dim.width > frame_dim.width) {
this.this$0.iframe.setSize$I$I(dim.width, frame_dim.height);
}}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
