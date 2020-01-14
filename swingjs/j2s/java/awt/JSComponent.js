(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'Thread','java.awt.Container','java.awt.Insets','swingjs.JSFrameViewer','Boolean','javax.swing.UIManager','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSComponent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.Component');
C$._incr=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isAppletFrame=false;
this.isFramedApplet=false;
this.htmlName=null;
this._num=0;
this.isRootPane=false;
this.isContentPane=false;
this.canvas=null;
this.appletViewer=null;
this.frameViewer=null;
this.topFrameViewer=null;
this._canvas=null;
this.ui=null;
this.uiClassID=null;
this.peerVis=null;
this._isBackgroundPainted=false;
this._alwaysPaint=false;
this._tempInsets=null;
this._gtemp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.appletViewer=($I$(1).currentThread$()).appletViewer;
}, 1);

Clazz.newMeth(C$, 'resizeOriginal$I$I', function (width, height) {
this.resize$I$I(width, height);
});

Clazz.newMeth(C$, 'ensurePropertyChangeListener$java_awt_Component$java_awt_Component', function (c, listener) {
if (Clazz.instanceOf(listener, "java.beans.PropertyChangeListener")) {
c.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
c.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
} else if (listener != null ) {
System.err.println$S("JSComponent: " + listener + " is not a PropertyChangeListener -- modal dialog will fail." );
}}, 1);

Clazz.newMeth(C$, 'getChildArray$java_awt_Container', function (c) {
return (c == null  ? $I$(2).EMPTY_ARRAY : c.getChildArray$());
}, 1);

Clazz.newMeth(C$, 'selfOrChildIsPainted$', function () {
if (this._alwaysPaint || this._isBackgroundPainted ) return true;
var a=C$.getChildArray$java_awt_Container(this);
for (var i=(this).getComponentCount$(); --i >= 0; ) if ((a[i]).selfOrChildIsPainted$()) return true;

return false;
});

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this._num=++C$._incr;
}, 1);

Clazz.newMeth(C$, 'getGraphics$', function () {
if (this.width == 0 || this.height == 0  || !this.isVisible$() ) return null;
var g;
if (this.frameViewer != null ) {
g=this.frameViewer.getGraphics$().create$();
if (this.isContentPane) {
if (this._tempInsets == null ) this._tempInsets=Clazz.new_($I$(3).c$$I$I$I$I,[0, 0, 0, 0]);
(this).getRootPane$().getInsets$java_awt_Insets(this._tempInsets);
if (this._tempInsets.left != 0 || this._tempInsets.top != 0 ) g.translate$I$I(this._tempInsets.left, this._tempInsets.top);
}return g;
}if (this.parent == null ) {
return null;
}g=this.parent.getGraphics$();
if (g == null ) return null;
g.translate$I$I(this.x, (this.isContentPane ? 0 : this.y));
g.clipRect$I$I$I$I(0, 0, this.width, this.height);
g.setFont$java_awt_Font(this.getFont$());
return g;
});

Clazz.newMeth(C$, 'setFrameViewer$swingjs_JSFrameViewer', function (viewer) {
return this.frameViewer=(viewer == null  ? viewer=Clazz.new_($I$(4)).setForWindow$javax_swing_RootPaneContainer(this) : viewer);
});

Clazz.newMeth(C$, 'getFrameViewer$', function () {
var parent=null;
return (this.topFrameViewer != null  ? this.topFrameViewer : this.frameViewer != null  ? this.topFrameViewer=this.frameViewer : (parent=this.getParent$()) == null  ? null : (this.topFrameViewer=parent.getFrameViewer$()));
});

Clazz.newMeth(C$, 'getHTMLName$S', function (uid) {
return (this.htmlName == null  ? this.htmlName=this.appContext.getThreadGroup$().getName$() + "_" + uid + "_" + this._num  : this.htmlName);
});

Clazz.newMeth(C$, 'getUIClassID$', function () {
return (this.uiClassID == null  ? this.uiClassID="ComponentUI" : this.uiClassID);
});

Clazz.newMeth(C$, 'setUIClassID$S', function (id) {
this.uiClassID=id;
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_ComponentUI', function (ui) {
this.ui=ui;
});

Clazz.newMeth(C$, 'getUI$', function () {
return this.ui;
});

Clazz.newMeth(C$, 'isDisplayable$', function () {
return C$.getTopInvokableAncestor$java_awt_Component$Z(this, false) != null ;
});

Clazz.newMeth(C$, 'updatePeerVisibility$Z', function (isVisible) {
if (this.getOrCreatePeer$() == null ) this.peerVis=(isVisible ? $I$(5).TRUE : $I$(5).FALSE);
 else this.updatePeerVisibilityOrig$Z(isVisible);
});

Clazz.newMeth(C$, 'getOrCreatePeer$', function () {
return (this.ui == null  ? null : this.peer == null  ? (this.peer=this.getToolkit$().createComponent$java_awt_Component(this)) : this.peer);
});

Clazz.newMeth(C$, 'updateUI$', function () {
if (this.uiClassID == null ) this.uiClassID=this.getUIClassID$();
if (this.ui == null ) this.setUI$javax_swing_plaf_ComponentUI($I$(6).getUI$java_awt_Component(this));
});

Clazz.newMeth(C$, 'getJSGraphic2D$java_awt_Graphics', function (g) {
return (g.mark$ ? g :null);
});

Clazz.newMeth(C$, 'checkBackgroundPainted$swingjs_JSGraphics2D$Z', function (jsg, init) {
if (jsg == null  || init ) {
this._isBackgroundPainted=false;
this._gtemp=jsg;
return;
}this._gtemp=null;
this._isBackgroundPainted=this._alwaysPaint || jsg.isBackgroundPainted$() ;
if (this._isBackgroundPainted) {
(this.ui).setPainted$O(jsg);
((this).getRootPane$().getUI$()).setPainted$O(jsg);
}});

Clazz.newMeth(C$, 'isBackgroundSet$', function () {
return (this.background == null  ? false : this.isAWT$ ||false ? !(Clazz.instanceOf(this.background, "javax.swing.plaf.UIResource")) : true);
});

Clazz.newMeth(C$, 'isForegroundSet$', function () {
return (this.foreground == null  ? false : this.isAWT$ ||false ? !(Clazz.instanceOf(this.foreground, "javax.swing.plaf.UIResource")) : true);
});

Clazz.newMeth(C$, 'isFontSet$', function () {
return ((this.font == null  ? null : new Boolean(this.isAWT$ ||false ? !(Clazz.instanceOf(this.font, "javax.swing.plaf.FontUIResource")) : true))).booleanValue$();
});

Clazz.newMeth(C$, 'updateUIZOrder$', function () {
var n=(this).getComponentCount$();
if (n < 2) return;
var components=C$.getChildArray$java_awt_Container(this);
var zorders=Clazz.array(Integer.TYPE, [n]);
for (var i=0; i < n; i++) zorders[i]=(components[i].getUI$()).getZIndex$S(null);

$I$(7).sort$IA(zorders);
for (var i=0; i < n; i++) (components[i].getUI$()).setZOrder$I(zorders[n - 1 - i ]);

});

Clazz.newMeth(C$, 'invalidateComp$', function () {
C$.superclazz.prototype.invalidateComp$.apply(this, []);
if (this.ui != null ) (this.ui).invalidate$();
});

Clazz.newMeth(C$, 'validate$', function () {
var wasValid=this.isValid$();
C$.superclazz.prototype.validate$.apply(this, []);
if (this.ui != null  && !wasValid ) (this.ui).endValidate$();
});

Clazz.newMeth(C$, 'paintWithBackgroundCheck$java_awt_Graphics', function (g) {
var jcg=this.getJSGraphic2D$java_awt_Graphics(g);
this.checkBackgroundPainted$swingjs_JSGraphics2D$Z(jcg, true);
this.paint$java_awt_Graphics(g);
this.checkBackgroundPainted$swingjs_JSGraphics2D$Z(jcg, false);
});

Clazz.newMeth(C$, 'addKeyListener$java_awt_event_KeyListener', function (l) {
C$.superclazz.prototype.addKeyListener$java_awt_event_KeyListener.apply(this, [l]);
if (l != null  && this.ui != null  ) (this.ui).enableJSKeys$Z(true);
});

Clazz.newMeth(C$, 'removeKeyListener$java_awt_event_KeyListener', function (l) {
C$.superclazz.prototype.removeKeyListener$java_awt_event_KeyListener.apply(this, [l]);
if (this.keyListener == null  && this.ui != null  ) (this.ui).enableJSKeys$Z(false);
});

Clazz.newMeth(C$, 'jsInputMapSet$', function () {
if (this.ui != null ) (this.ui).enableJSKeys$Z(true);
});

Clazz.newMeth(C$, 'getTopInvokableAncestor$java_awt_Component$Z', function (c, andFocusable) {
for (var p=c; p != null ; p=C$.nextHigher$java_awt_Component(p)) {
if (p.isWindowOrJSApplet$() && (!andFocusable || (p).isFocusableWindow$() ) ) {
return p;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'nextHigher$java_awt_Component', function (c) {
var p=c.getParent$();
if (p == null  && Clazz.instanceOf(c, "javax.swing.JPopupMenu") ) p=(c).getInvoker$();
return p;
}, 1);

Clazz.newMeth(C$, '_isFocusSetAndEnabled$', function () {
return this._isFocusableSet && this.isFocusable$() ;
});
;
(function(){var C$=Clazz.newInterface(P$.JSComponent, "A2SComponentWrapper", function(){
});
})()
;
(function(){var C$=Clazz.newInterface(P$.JSComponent, "A2SWrappedComponent", function(){
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:22 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
