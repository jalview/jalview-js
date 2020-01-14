(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode','javax.swing.BorderFactory','swingjs.plaf.ButtonListener','javax.swing.UIManager','javax.swing.LookAndFeel','java.awt.Dimension']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSButtonUI", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.menuItem=null;
this.button=null;
this.shiftOffset=0;
this.defaultTextShiftOffset=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.shiftOffset=0;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
this.isSimpleButton=true;
this.allowPaintedBackground=false;
if (this.domNode == null ) {
this.setDoPropagate$();
this.domNode=this.enableNode=this.buttonNode=P$.JSComponentUI.newDOMObject$S$S$SA("button", this.id + "_dom", ["type", "button"]);
$I$(1).setPositionAbsolute(this.domNode);
this.iconNode=null;
this.createButton$();
}this.setupButton$();
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'createButton$', function () {
this.addCentering$swingjs_api_js_DOMNode(this.buttonNode);
this.setDataComponent$swingjs_api_js_DOMNode(this.buttonNode);
this.setDataComponent$swingjs_api_js_DOMNode(this.iconNode);
this.setDataComponent$swingjs_api_js_DOMNode(this.textNode);
this.setEnabled$Z(this.c.isEnabled$());
});

Clazz.newMeth(C$, 'createItem$S$swingjs_api_js_DOMNode', function (type, buttonNode) {
var text=this.button.getText$();
var icon=this.button.getIcon$();
var gap=this.button.getIconTextGap$();
this.isMenuSep=(("|").equals$O(text) || ("-").equals$O(text) );
if (this.isMenuSep) {
text=null;
}this.itemNode=P$.JSComponentUI.newDOMObject$S$S$SA("li", this.id, []);
if (text == null  && icon == null  ) return this.itemNode;
this.menuAnchorNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id + "_a", []);
if (type != "_bar") {
this.addClass$swingjs_api_js_DOMNode$S(this.menuAnchorNode, "a");
$I$(1).setStyles(this.menuAnchorNode, ["margin", "1px 2px 1px 2px"]);
}this.itemNode.appendChild(this.menuAnchorNode);
this.setDoPropagate$();
if (buttonNode == null ) {
this.addCentering$swingjs_api_js_DOMNode(this.menuAnchorNode);
this.enableNode=this.itemNode;
this.setIconAndText$S$javax_swing_Icon$I$S("btn", icon, gap, text);
} else {
this.menuAnchorNode.appendChild(buttonNode);
this.setMenuItem$swingjs_api_js_DOMNode(buttonNode);
}this.setMenuItem$swingjs_api_js_DOMNode(this.menuAnchorNode);
this.setMenuItem$();
this.setDataComponent$swingjs_api_js_DOMNode(this.menuAnchorNode);
this.setDataComponent$swingjs_api_js_DOMNode(this.itemNode);
return this.itemNode;
});

Clazz.newMeth(C$, 'setMenuItem$', function () {
this.setMenuItem$swingjs_api_js_DOMNode(this.itemNode);
this.setMenuItem$swingjs_api_js_DOMNode(this.iconNode);
this.setMenuItem$swingjs_api_js_DOMNode(this.textNode);
this.setMenuItem$swingjs_api_js_DOMNode(this.centeringNode);
});

Clazz.newMeth(C$, 'enableNode$swingjs_api_js_DOMNode$Z', function (node, b) {
if (this.isMenuItem) {
if (b) {
this.removeClass$swingjs_api_js_DOMNode$S(node, "ui-j2smenu-disabled ui-state-disabled");
} else {
this.addClass$swingjs_api_js_DOMNode$S(node, "ui-j2smenu-disabled ui-state-disabled");
}} else {
C$.superclazz.prototype.enableNode$swingjs_api_js_DOMNode$Z.apply(this, [node, b]);
}});

Clazz.newMeth(C$, 'setupButton$', function () {
this.setIconAndText$S$javax_swing_Icon$I$S("button", this.button.getIcon$(), this.button.getIconTextGap$(), this.button.getText$());
if (this.button.getBorder$() == null  || this.button.getBorder$() === $I$(2).emptyBorder  ) $I$(1).setStyles(this.buttonNode, ["border", "none"]);
 else if (this.button.getBorder$() === $I$(2).html5Border ) $I$(1).setStyles(this.buttonNode, ["border", null]);
if (!this.isMenuSep) {
this.setMnemonic$I(-1);
this.setAlignments$javax_swing_AbstractButton$Z(this.button, false);
}});

Clazz.newMeth(C$, ['handleJSEvent$O$I$O','handleJSEvent$'], function (target, eventType, jQueryEvent) {
if (this.actionNode == null ) if (this.menuItem == null ) {
switch (eventType) {
case 402:
var keyCode=jQueryEvent.keyCode ||0;
if (keyCode == 13 || keyCode == 32 ) {
this.button.doClick$();
return true;
}}
} else {
switch (eventType) {
case 502:
this.menuItem.doClick$I(0);
return true;
}
}return false;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.button=jc;
this.installDefaults$javax_swing_AbstractButton(this.button);
this.installListeners$javax_swing_AbstractButton(this.button);
this.installKeyboardActions$javax_swing_AbstractButton(this.button);
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
this.uninstallKeyboardActions$javax_swing_AbstractButton(this.button);
this.uninstallListeners$javax_swing_AbstractButton(this.button);
});

Clazz.newMeth(C$, 'installListeners$javax_swing_AbstractButton', function (b) {
this.buttonListener=Clazz.new_($I$(3).c$$swingjs_plaf_JSButtonUI,[this]);
if (this.buttonListener != null ) {
b.addMouseListener$java_awt_event_MouseListener(this.buttonListener);
b.addMouseMotionListener$java_awt_event_MouseMotionListener(this.buttonListener);
b.addFocusListener$java_awt_event_FocusListener(this.buttonListener);
b.addPropertyChangeListener$java_beans_PropertyChangeListener(this.buttonListener);
b.addChangeListener$javax_swing_event_ChangeListener(this.buttonListener);
}});

Clazz.newMeth(C$, 'uninstallListeners$javax_swing_AbstractButton', function (b) {
var listener=this.getButtonListener$javax_swing_AbstractButton(b);
if (listener != null ) {
b.removeMouseListener$java_awt_event_MouseListener(listener);
b.removeMouseMotionListener$java_awt_event_MouseMotionListener(listener);
b.removeFocusListener$java_awt_event_FocusListener(listener);
b.removeChangeListener$javax_swing_event_ChangeListener(listener);
b.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
}});

Clazz.newMeth(C$, 'installKeyboardActions$javax_swing_AbstractButton', function (b) {
var listener=this.getButtonListener$javax_swing_AbstractButton(b);
if (listener != null ) {
listener.installKeyboardActions$javax_swing_JComponent(b);
}});

Clazz.newMeth(C$, 'uninstallKeyboardActions$javax_swing_AbstractButton', function (b) {
var listener=this.getButtonListener$javax_swing_AbstractButton(b);
if (listener != null ) {
listener.uninstallKeyboardActions$javax_swing_JComponent(b);
}});

Clazz.newMeth(C$, 'getButtonListener$javax_swing_AbstractButton', function (b) {
var listeners=b.getMouseMotionListeners$();
if (listeners != null ) {
for (var counter=0; counter < listeners.length; counter++) {
if (Clazz.instanceOf(listeners[counter], "swingjs.plaf.ButtonListener")) {
return listeners[counter];
}}
}return null;
});

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "Button";
});

Clazz.newMeth(C$, 'installDefaults$javax_swing_AbstractButton', function (b) {
var pp=this.getPropertyPrefix$();
this.defaultTextShiftOffset=$I$(4).getInt$O(pp + ".textShiftOffset");
if (b.getMargin$() == null  || (Clazz.instanceOf(b.getMargin$(), "javax.swing.plaf.UIResource")) ) {
b.setMargin$java_awt_Insets($I$(4).getInsets$O(pp + ".margin"));
}$I$(5).installColorsAndFont$javax_swing_JComponent$S$S$S(b, pp + ".background", pp + ".foreground", pp + ".font");
$I$(5).installBorder$javax_swing_JComponent$S(b, pp + ".border");
$I$(5).installProperty$javax_swing_JComponent$S$O(b, "iconTextGap",  new Integer(4));
});

Clazz.newMeth(C$, 'getCSSAdjustment$Z', function (addingCSS) {
return Clazz.new_($I$(6).c$$I$I,[(this.itemNode == null  ? 0 : 10), 0]);
});

Clazz.newMeth(C$, 'setInnerComponentBounds$I$I', function (width, height) {
if (this.isSimpleButton) {
var i=this.getButtonOuterInsets$javax_swing_AbstractButton(this.button);
if (!(Clazz.instanceOf(this.button.getBorder$(), "javax.swing.plaf.UIResource"))) {
$I$(1).setTopLeftAbsolute(this.domNode, i.left, i.top);
$I$(1).setSize(this.domNode, width - i.left - i.right , height - i.top - i.bottom );
$I$(1).setStyles(this.domNode, ["border", i.left + i.right + i.top + i.bottom  > 0 ? "none" : null]);
}}});

Clazz.newMeth(C$, 'getHTMLSizePreferred$swingjs_api_js_DOMNode$Z', function (obj, addCSS) {
this.setAlignments$javax_swing_AbstractButton$Z(this.button, !addCSS);
return this.setHTMLSize1$swingjs_api_js_DOMNode$Z$Z(obj, addCSS, true);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent', function (g, c) {
this.imagePersists=true;
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
