(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'java.awt.Insets','java.awt.Color','swingjs.api.js.DOMNode','javax.swing.text.WrappedPlainView','javax.swing.text.PlainView']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSTextAreaUI", null, 'swingjs.plaf.JSTextViewUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.myInsets=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.myInsets=Clazz.new_($I$(1).c$$I$I$I$I,[0, 0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.valueNode=this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("textarea", this.id, ["spellcheck", "FALSE", "autocomplete", "off"]);
this.setupViewNode$();
}var area=this.jc;
if (this.isAWT && !area.isBackgroundSet$() ) area.setBackground$java_awt_Color(Clazz.new_($I$(2).c$$I$I$I,[240, 240, 240]));
$I$(3).setStyles(this.domNode, ["white-space", null, "overflow-wrap", null]);
if (area.getLineWrap$()) {
$I$(3).setStyles(this.domNode, ["overflow-wrap", area.getWrapStyleWord$() ? null : "anywhere"]);
} else {
$I$(3).setStyles(this.domNode, ["white-space", "pre"]);
}this.textListener.checkDocument$();
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font($I$(3).setAttr(this.domNode, "value", this.setCurrentText$()), this.c.getFont$());
this.updateJSCursor$S("rewrite");
return C$.superclazz.prototype.updateDOMNode$.apply(this, []);
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
var prop=e.getPropertyName$();
switch (prop) {
case "ancestor":
this.setJ2sMouseHandler$();
break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'updateRootView$', function () {
this.useRootView=true;
this.rootView.setView$javax_swing_text_View(this.create$javax_swing_text_Element(this.editor.getDocument$().getDefaultRootElement$()));
});

Clazz.newMeth(C$, 'getTextAreaTextSize$java_awt_Dimension', function (d) {
var sh=0;
var sw=0;
{
var h = this.domNode.style.height;
this.domNode.style.height = null;
sh = this.domNode.scrollHeight;
this.domNode.style.height = h;
var w = this.domNode.style.width;
this.domNode.style.width = null;
sw = this.domNode.scrollWidth;
this.domNode.style.width = w;
}
d.width=sw;
d.height=sh;
});

Clazz.newMeth(C$, 'getInsets$', function () {
return this.myInsets;
});

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "TextArea";
});

Clazz.newMeth(C$, 'setHTMLElement$', function () {
return $I$(3).setStyles(this.setHTMLElementCUI$(), ["position", "absolute"]);
});

Clazz.newMeth(C$, 'create$javax_swing_text_Element', function (elem) {
var area=this.c;
var v;
if (area.getLineWrap$()) {
v=Clazz.new_($I$(4).c$$javax_swing_text_Element$Z,[elem, area.getWrapStyleWord$()]);
} else {
v=Clazz.new_($I$(5).c$$javax_swing_text_Element,[elem]);
}return v;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
