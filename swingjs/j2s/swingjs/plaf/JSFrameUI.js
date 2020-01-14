(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'java.awt.Insets','swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','java.awt.Toolkit','java.awt.Color','java.awt.event.ComponentEvent','java.awt.event.WindowEvent','javax.swing.LookAndFeel','java.awt.Rectangle']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSFrameUI", null, 'swingjs.plaf.JSWindowUI', 'java.awt.peer.FramePeer');
C$.ZERO_INSETS=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.ZERO_INSETS=Clazz.new_($I$(1).c$$I$I$I$I,[0, 0, 0, 0]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.frame=null;
this.state=0;
this.closerWrap=null;
this.isModal=false;
this.zModal=0;
this.$isDesktop=false;
this.isInternalFrame=false;
this.bounds=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
$I$(2).frameZ+=1000;
this.z=$I$(2).frameZ;
this.isContainer=true;
this.defaultHeight=500;
this.defaultWidth=500;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.containerNode=this.frameNode=this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id + "_frame", []);
if (this.isDummyFrame) {
$I$(3).setVisible(this.domNode, false);
return this.domNode;
}var w=this.c.getWidth$();
var h=this.c.getHeight$();
if (w == 0) w=this.defaultWidth;
if (h == 0) h=this.defaultHeight;
$I$(3).setSize(this.frameNode, w, h);
$I$(3).setTopLeftAbsolute(this.frameNode, 0, 0);
var fname=this.frame.getName$();
var node=$I$(3).getElement(fname + "-div");
if (node != null ) {
this.frame.setUndecorated$Z(true);
this.frame.setLocation$I$I(0, 0);
this.embeddingNode=node;
var ew=$I$(3).getWidth(node);
var eh=$I$(3).getHeight(node);
if (ew > 0 && eh > 0 ) {
this.frame._freezeBounds$I$I(ew, eh);
}}this.setWindowClass$();
if (!this.frame.isUndecorated$()) {
$I$(3).setStyles(this.frameNode, ["box-shadow", "0px 0px 10px gray", "box-sizing", "content-box"]);
this.titleBarNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id + "_titlebar", []);
$I$(3).setTopLeftAbsolute(this.titleBarNode, 0, 0);
$I$(3).setStyles(this.titleBarNode, ["background-color", "#E0E0E0", "height", "20px", "font-size", "14px", "font-family", "sans-serif", "font-weight", "bold"]);
this.titleNode=P$.JSComponentUI.newDOMObject$S$S$SA("label", this.id + "_title", []);
$I$(3).setTopLeftAbsolute(this.titleNode, 2, 4);
$I$(3).setStyles(this.titleNode, ["background-color", "#E0E0E0", "height", "20px", "overflow", "hidden"]);
this.closerWrap=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id + "_closerwrap", []);
$I$(3).setTopLeftAbsolute(this.closerWrap, 0, 0);
$I$(3).setStyles(this.closerWrap, ["text-align", "right"]);
this.closerNode=P$.JSComponentUI.newDOMObject$S$S$SA("label", this.id + "_closer", ["innerHTML", "X"]);
$I$(3).setStyles(this.closerNode, ["width", "20px", "height", "20px", "position", "absolute", "text-align", "center", "right", "0px"]);
this.frameNode.appendChild(this.titleBarNode);
this.titleBarNode.appendChild(this.titleNode);
this.titleBarNode.appendChild(this.closerWrap);
this.closerWrap.appendChild(this.closerNode);
$I$(3).setStyles(this.closerNode, ["background-color", "#DDD"]);
}this.bindWindowEvents$();
if (this.isModal) {
this.modalNode=$I$(3).createElement("div", this.id + "_modaldiv");
var screen=$I$(4).getDefaultToolkit$().getScreenSize$();
$I$(3).setStyles(this.modalNode, ["background", P$.JSComponentUI.toCSSString$java_awt_Color(Clazz.new_($I$(5).c$$I$I$I$I,[100, 100, 100, 100]))]);
$I$(3).setTopLeftAbsolute(this.modalNode, 0, 0);
$I$(3).setSize(this.modalNode, screen.width, screen.height);
}var s=this.getInsets$();
$I$(3).setTopLeftAbsolute(this.frameNode, 0, 0);
$I$(3).setAttrs(this.frameNode, ["width", "" + this.frame.getWidth$() + s.left + s.right , "height", "" + this.frame.getHeight$() + s.top + s.bottom ]);
this.addFocusHandler$();
}var strColor=P$.JSComponentUI.toCSSString$java_awt_Color(this.c.getBackground$());
$I$(3).setStyles(this.domNode, ["background-color", strColor]);
$I$(3).setStyles(this.frameNode, ["background", "#DDD"]);
$I$(3).setStyles(this.frameNode, ["color", P$.JSComponentUI.toCSSString$java_awt_Color(this.c.getForeground$())]);
this.setInnerComponentBounds$I$I(this.width, this.height);
this.setTitle$S(this.frame.getTitle$());
if (!this.isDummyFrame) {
$I$(3).setVisible(this.domNode, this.jc.isVisible$());
}return this.domNode;
});

Clazz.newMeth(C$, 'setZOrder$I', function (z) {
if (this.embeddingNode != null ) z=999;
C$.superclazz.prototype.setZOrder$I.apply(this, [z]);
});

Clazz.newMeth(C$, 'setDraggableEvents$', function () {
if (this.embeddingNode != null  || this.frame.isUndecorated$() ) return;
var fnode=this.frameNode;
var fGetFrameParent=null;
{
var me = this;
fGetFrameParent = function(mode, x, y) { switch(arguments.length) { case 1: if (mode == 501) me.selected$();
me.hideMenu$();
return $(fnode).parent();
case 3: if (mode == 506) { me.moveFrame$I$I(x, y);
return null;
} } return null;
}
}
this.J2S.setDraggable(this.titleBarNode, fGetFrameParent);
});

Clazz.newMeth(C$, 'selected$', function () {
(this.jc).toFront$();
});

Clazz.newMeth(C$, 'hideMenu$', function () {
P$.JSComponentUI.hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'moveFrame$I$I', function (x, y) {
if (!this.isInternalFrame) {
x=Math.max(30 - this.frame.getWidth$(), x);
y=Math.max(0, y);
}this.frame.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'getMoveCoords$I$I', function (x, y) {
return Clazz.array(Integer.TYPE, -1, [x, y]);
});

Clazz.newMeth(C$, 'notifyFrameMoved$', function () {
this.toFront$();
$I$(4).getEventQueue$().postEvent$java_awt_AWTEvent(Clazz.new_($I$(6).c$$java_awt_Component$I,[this.frame, 100]));
});

Clazz.newMeth(C$, ['handleJSEvent$O$I$O','handleJSEvent$'], function (target, eventType, jQueryEvent) {
if (target === this.closerNode  && eventType == -1 ) {
switch (jQueryEvent.type ||"") {
case "click":
var tbar=this.titleBarNode;
this.J2S.setDraggable(tbar, new Boolean(false));
this.frameCloserAction$();
return true;
case "mouseout":
$I$(3).setStyles(this.closerNode, ["background-color", "#DDD"]);
return true;
case "mouseenter":
$I$(3).setStyles(this.closerNode, ["background-color", "red"]);
return true;
}
}return false;
});

Clazz.newMeth(C$, 'frameCloserAction$', function () {
this.frame.dispatchEvent$java_awt_AWTEvent(Clazz.new_($I$(7).c$$java_awt_Window$I,[this.frame, 201]));
});

Clazz.newMeth(C$, 'closeFrame$', function () {
this.J2S.unsetMouse(this.frameNode);
this.$$O(this.frameNode).remove();
this.$$O(this.outerNode).remove();
});

Clazz.newMeth(C$, 'setInnerComponentBounds$I$I', function (width, height) {
$I$(3).setStyles(this.closerWrap, ["text-align", "right", "width", width + "px"]);
$I$(3).setStyles(this.titleNode, ["width", (width - 4) + "px", "height", "20px"]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
this.frame=this.c;
this.isDummyFrame=jc.__CLASS_NAME__ == "javax.swing.SwingUtilities.SharedOwnerFrame" ||false;
this.frame.addWindowListener$java_awt_event_WindowListener(this);
this.frame.addComponentListener$java_awt_event_ComponentListener(this);
$I$(8).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "Frame.background", "Frame.foreground", "Frame.font");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
this.closeFrame$();
this.frame.removeWindowListener$java_awt_event_WindowListener(this);
});

Clazz.newMeth(C$, 'setTitle$S', function (title) {
if (this.titleNode != null ) $I$(3).setAttr(this.titleNode, "innerHTML", title);
});

Clazz.newMeth(C$, 'setMenuBar$O', function (mb) {
});

Clazz.newMeth(C$, 'setResizable$Z', function (resizeable) {
});

Clazz.newMeth(C$, 'setState$I', function (state) {
this.state=state;
});

Clazz.newMeth(C$, 'getState$', function () {
return this.state;
});

Clazz.newMeth(C$, 'setMaximizedBounds$java_awt_Rectangle', function (bounds) {
});

Clazz.newMeth(C$, 'setBoundsPrivate$I$I$I$I', function (x, y, width, height) {
this.bounds=Clazz.new_($I$(9).c$$I$I$I$I,[x, y, width, height]);
});

Clazz.newMeth(C$, 'getBoundsPrivate$', function () {
return this.bounds;
});

Clazz.newMeth(C$, 'getInsets$', function () {
return (this.isDummyFrame ? null : this.frame.isUndecorated$() ? C$.ZERO_INSETS : this.jc.getFrameViewer$().getInsets$());
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
if (e.getPropertyName$().equals$O("resizable")) {
var resizable=(e.getNewValue$()).booleanValue$();
if (this.jc.getFrameViewer$().isResizable$() == resizable ) return;
this.jc.getFrameViewer$().setResizable$Z(resizable);
}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
if (this.isDummyFrame) b=false;
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (this.isModal) {
if (b) {
this.$$O(this.body).after(this.modalNode);
this.addClass$swingjs_api_js_DOMNode$S(this.modalNode, "swingjs-window");
var sz=$I$(3).getStyle(this.domNode, "z-index");
var z=((+sz ||this.getZIndex$S(null))) - 1;
$I$(3).setZ(this.modalNode, z);
}$I$(3).setVisible(this.modalNode, b);
}$I$(3).setVisible(this.domNode, b);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
