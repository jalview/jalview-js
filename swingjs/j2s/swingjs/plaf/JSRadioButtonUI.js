(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSRadioButtonUI", null, 'swingjs.plaf.JSButtonUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
var b=this.jc;
var doAll=false;
if (this.domNode == null ) {
doAll=true;
this.buttonNode=P$.JSComponentUI.newDOMObject$S$S$SA("label", this.id + "btn", []);
if (this.isMenuItem) {
this.domNode=this.createItem$S$swingjs_api_js_DOMNode("_item", this.buttonNode);
this.bindJQueryEvents$swingjs_api_js_DOMNode$S$I(this.domNode, "mouseenter", -1);
} else {
this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id + "_dom", []);
this.domNode.appendChild(this.buttonNode);
}this.iconNode=null;
if (b.getIcon$() == null ) {
this.iconNode=this.actionNode=P$.JSComponentUI.newDOMObject$S$S$SA("input", this.id, ["type", (this.getPropertyPrefix$() == "RadioButton" ? "radio" : "checkbox"), "name", this.id]);
$I$(1).setAttr(this.buttonNode, "htmlFor", this.id);
} else {
if (this.actionNode != null ) $I$(1).dispose(this.actionNode);
}this.enableNodes=Clazz.array($I$(1), -1, [this.actionNode, this.buttonNode, null]);
this.createButton$();
if (this.isMenuItem) this.setMenuItem$();
}this.setupButton$javax_swing_JToggleButton$Z(b, doAll);
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "RadioButton";
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.getPropertyPrefix$();
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
});

Clazz.newMeth(C$, ['handleJSEvent$O$I$O','handleJSEvent$'], function (target, eventType, jQueryEvent) {
this.checkStopPopupMenuTimer$O$I$O(target, eventType, jQueryEvent);
return C$.superclazz.prototype.handleJSEvent$O$I$O.apply(this, [target, eventType, jQueryEvent]);
});

Clazz.newMeth(C$, 'setupButton$javax_swing_JToggleButton$Z', function (b, doAll) {
$I$(1).setAttr(this.actionNode, "checked", b.isSelected$() ? "TRUE" : null);
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.textNode, this.c.getFont$());
this.setIconAndText$S$javax_swing_Icon$I$S("radio", null, this.button.getIconTextGap$(), this.button.getText$());
this.setAlignments$javax_swing_AbstractButton$Z(b, false);
if (doAll && !this.isMenuItem ) $I$(1).setPositionAbsolute(this.domNode);
});

Clazz.newMeth(C$, 'handleDOMEvent$O', function (e) {
(this.c).doClick$I(0);
});

Clazz.newMeth(C$, 'getDefaultIconTextGap$', function () {
return 4;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:52 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
