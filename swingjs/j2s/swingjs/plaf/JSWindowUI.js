(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.JSUtil','swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSWindowUI", null, 'swingjs.plaf.JSComponentUI', ['java.awt.peer.WindowPeer', 'java.awt.event.WindowListener', 'java.awt.event.ComponentListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.frameNode=null;
this.titleBarNode=null;
this.titleNode=null;
this.closerNode=null;
this.layerNode=null;
this.w=null;
this.z=0;
this.defaultWidth=0;
this.defaultHeight=0;
this.isFrame=false;
this.isDialog=false;
this.window=null;
this.font=null;
this.modalNode=null;
this.graphics=null;
this.isPopup=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.defaultWidth=400;
this.defaultHeight=400;
}, 1);

Clazz.newMeth(C$, 'setFrame$java_awt_Window$Z', function (target, isFrame) {
this.window=target;
this.w=this.window;
this.isFrame=isFrame;
this.isContainer=this.isWindow=true;
var jc=this;
var viewer=$I$(1).getAppletViewer$();
this.applet=viewer.html5Applet;
this.graphics=jc.getGraphics$();
return this;
});

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.containerNode=this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id, []);
this.setWindowClass$();
this.bindWindowEvents$();
}return this.domNode;
});

Clazz.newMeth(C$, 'setWindowClass$', function () {
this.addClass$swingjs_api_js_DOMNode$S(this.domNode, "swingjs-window");
this.setZOrder$I(this.z);
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font', function (font) {
if (!font.equals$O(this.font)) this.window.setFont$java_awt_Font(this.font=font);
return this.graphics.getFontMetrics$java_awt_Font(font);
});

Clazz.newMeth(C$, 'toFront$', function () {
if ($I$(2).debugging) System.out.println$S("window to front for " + this.id);
this.z=this.J2S.setWindowZIndex(this.domNode, 2147483647);
$I$(3).setPositionAbsolute(this.domNode);
if (this.modalNode != null ) $I$(3).setZ(this.modalNode, this.z - 1);
});

Clazz.newMeth(C$, 'toBack$', function () {
if ($I$(2).debugging) System.out.println$S("window to back for " + this.id);
this.z=this.J2S.setWindowZIndex(this.domNode, -2147483648);
if (this.modalNode != null ) $I$(3).setZ(this.modalNode, this.z - 1);
});

Clazz.newMeth(C$, 'updateAlwaysOnTopState$', function () {
});

Clazz.newMeth(C$, 'updateFocusableWindowState$', function () {
});

Clazz.newMeth(C$, 'requestWindowFocus$', function () {
return false;
});

Clazz.newMeth(C$, 'setModalBlocked$java_awt_Dialog$Z', function (blocker, blocked) {
});

Clazz.newMeth(C$, 'setModalBlocked$java_awt_JSDialog$Z', function (blocker, blocked) {
});

Clazz.newMeth(C$, 'updateMinimumSize$', function () {
});

Clazz.newMeth(C$, 'updateIconImages$', function () {
});

Clazz.newMeth(C$, 'setOpacity$F', function (opacity) {
});

Clazz.newMeth(C$, 'setOpaque$Z', function (isOpaque) {
});

Clazz.newMeth(C$, 'updateWindow$java_awt_image_BufferedImage', function (backBuffer) {
});

Clazz.newMeth(C$, 'repositionSecurityWarning$', function () {
});

Clazz.newMeth(C$, 'dispose$', function () {
System.out.println$S("window disposed");
this.J2S.unsetMouse(this.domNode);
if (this.modalNode != null ) $I$(3).dispose(this.modalNode);
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'beginValidate$', function () {
if (this.isDisposed) {
C$.setChildVisibilities$javax_swing_JComponent(this.window);
}});

Clazz.newMeth(C$, 'endValidate$', function () {
if (this.isDisposed) {
this.undisposeUI$swingjs_api_js_DOMNode(null);
this.bindWindowEvents$();
this.isDisposed=false;
}});

Clazz.newMeth(C$, 'bindWindowEvents$', function () {
this.setJ2sMouseHandler$();
this.setDraggableEvents$();
this.addJQueryFocusCallbacks$();
if (this.closerNode != null ) this.bindJQueryEvents$swingjs_api_js_DOMNode$S$I(this.closerNode, "click mouseenter mouseout", -1);
});

Clazz.newMeth(C$, 'setDraggableEvents$', function () {
});

Clazz.newMeth(C$, 'setChildVisibilities$javax_swing_JComponent', function (jc) {
for (var i=jc.getComponentCount$(); --i >= 0; ) {
var c=jc.getComponent$I(i);
C$.setChildVisibilities$javax_swing_JComponent(c);
}
var ui=jc.ui;
if (jc.isVisible$()) ui.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'getInsets$', function () {
return $I$(2).zeroInsets;
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
if (!this.isPopup) P$.JSComponentUI.hideMenusAndToolTip$();
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent', function (e) {
System.out.println$S("JSWindowUI windowOpened " + this.c.isVisible$() + " " + this.id );
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent', function (e) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent', function (e) {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
