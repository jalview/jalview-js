(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode','java.awt.Dimension','swingjs.JSToolkit','java.awt.event.ActionEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSTextFieldUI", null, 'swingjs.plaf.JSTextUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.inputType=null;
this.textField=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.inputType="text";
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
this.textField=this.editor;
if (this.domNode == null ) {
this.allowPaintedBackground=false;
this.focusNode=this.enableNode=this.valueNode=this.domNode=$I$(1).setStyles(P$.JSComponentUI.newDOMObject$S$S$SA("input", this.id, ["type", this.inputType]), ["lineHeight", "0.8", "box-sizing", "border-box"]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
}this.setPadding$java_awt_Insets(this.editor.getMargin$());
this.textListener.checkDocument$();
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.setJSText$swingjs_api_js_DOMNode$S$S(this.focusNode, "value", this.setCurrentText$()), this.c.getFont$());
return C$.superclazz.prototype.updateDOMNode$.apply(this, []);
});

Clazz.newMeth(C$, 'undisposeUI$swingjs_api_js_DOMNode', function (node) {
C$.superclazz.prototype.undisposeUI$swingjs_api_js_DOMNode.apply(this, [node]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
});

Clazz.newMeth(C$, 'getCSSAdjustment$Z', function (addingCSS) {
return Clazz.new_($I$(2).c$$I$I,[0, addingCSS ? 0 : -2]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.textField=jc;
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
});

Clazz.newMeth(C$, 'handleEnter$', function () {
var a=this.getActionMap$().get$O("notify-field-accept");
if (a != null ) {
$I$(3).setIsDispatchThread$Z(true);
a.actionPerformed$(Clazz.new_($I$(4).c$$O$I$S$J$I,[this.c, 1001, "notify-field-accept", System.currentTimeMillis$(), 0]));
$I$(3).setIsDispatchThread$Z(false);
}return true;
});

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "TextField";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
