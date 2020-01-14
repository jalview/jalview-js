(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode','javax.swing.LookAndFeel','swingjs.plaf.JSGraphicsUtils']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSLabelUI", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.gap=0;
this.text=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setDoc$();
this.isLabel=true;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.enableNode=this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("label", this.id, []);
this.textNode=this.iconNode=null;
this.addCentering$swingjs_api_js_DOMNode(this.domNode);
}this.getIconAndText$();
this.setIconAndText$S$javax_swing_Icon$I$S("label", this.icon, this.gap, this.text);
$I$(1).setStyles(this.domNode, ["position", "absolute", "width", this.c.getWidth$() + "px", "height", this.c.getHeight$() + "px"]);
this.updateCenteringNode$();
if (this.allowTextAlignment) {
this.setAlignments$javax_swing_AbstractButton$Z(this.label, false);
}if (this.jc.isEnabled$()) this.setBackgroundCUI$java_awt_Color(this.jc.isOpaque$() ? this.getBackground$() : null);
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'getIconAndText$', function () {
this.label=this.jc;
this.icon=this.label.getIcon$();
this.gap=this.label.getIconTextGap$();
this.text=this.label.getText$();
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.label=jc;
$I$(2).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "Label.background", "Label.foreground", "Label.font");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent', function (jc) {
return this.getPreferredSize$javax_swing_JComponent(jc);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent', function (g, c) {
C$.superclazz.prototype.paint$java_awt_Graphics$javax_swing_JComponent.apply(this, [g, c]);
$I$(1).setStyles(this.textNode, ["overflow", "hidden", "white-space", "nowrap"]);
if (this.icon != null ) {
$I$(1).setStyles(this.imageNode, ["visibility", null]);
var r=this.imageNode.getBoundingClientRect();
var parent=null;
var isHidden=(r.width == 0);
if (isHidden) {
parent=$I$(1).getParent(this.domNode);
this.$$O("body").append(this.domNode);
r=this.imageNode.getBoundingClientRect();
}var r0=this.domNode.getBoundingClientRect();
if (isHidden) $I$(1).transferTo(this.domNode, parent);
$I$(1).setStyles(this.imageNode, ["visibility", "hidden"]);
this.icon.paintIcon$java_awt_Component$java_awt_Graphics$I$I(c, g, (r.x - r0.x), (r.y - r0.y));
}});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (jc) {
return (this.label == null  ? C$.superclazz.prototype.getPreferredSize$javax_swing_JComponent.apply(this, [jc]) : $I$(3).getPreferredButtonSize$javax_swing_AbstractButton$I((jc), (jc).getIconTextGap$()));
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
