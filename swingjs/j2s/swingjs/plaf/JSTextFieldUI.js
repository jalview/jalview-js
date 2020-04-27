(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode','swingjs.plaf.JSComponentUI','java.awt.Dimension','swingjs.JSToolkit','java.awt.event.ActionEvent','swingjs.plaf.JSLabelUI']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSTextFieldUI", null, 'swingjs.plaf.JSTextUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inputType="text";
},1);

C$.$fields$=[['S',['inputType'],'O',['textField','javax.swing.JTextField']]]

Clazz.newMeth(C$, 'updateDOMNode$', function () {
this.textField=this.editor;
if (this.domNode == null ) {
this.allowPaintedBackground=false;
this.focusNode=this.enableNode=this.valueNode=this.domNode=$I$(1,"setStyles",[$I$(2).newDOMObject$S$S$SA("input", this.id, ["type", this.inputType]), ["lineHeight", "0.8", "box-sizing", "border-box"]]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
}var insets=this.editor.getMargin$();
this.setPadding$java_awt_Insets(insets);
this.textListener.checkDocument$();
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.setJSText$swingjs_api_js_DOMNode$S$S(this.focusNode, "value", this.setCurrentText$()), this.getFont$());
return C$.superclazz.prototype.updateDOMNode$.apply(this, []);
});

Clazz.newMeth(C$, 'getCSSAdjustment$Z', function (addingCSS) {
return Clazz.new_($I$(3,1).c$$I$I,[0, addingCSS ? 0 : -2]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.textField=jc;
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
});

Clazz.newMeth(C$, 'handleEnter$', function () {
var a=this.getActionMap$().get$O("notify-field-accept");
if (a != null ) {
$I$(4).setIsDispatchThread$Z(true);
a.actionPerformed$java_awt_event_ActionEvent(Clazz.new_([this.c, 1001, "notify-field-accept", System.currentTimeMillis$(), 0],$I$(5,1).c$$O$I$S$J$I));
$I$(4).setIsDispatchThread$Z(false);
}return true;
});

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "TextField";
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (c) {
return (this.isAWT ? this.getMinimumSize$javax_swing_JComponent(c) : C$.superclazz.prototype.getPreferredSize$javax_swing_JComponent.apply(this, [c]));
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent', function (jc) {
return (this.isAWT ? $I$(6).getMinimumSizePeer$javax_swing_JComponent$O(jc, this.editor) : C$.superclazz.prototype.getMinimumSize$javax_swing_JComponent.apply(this, [jc]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:17:15 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
