(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.api.js.DOMNode','java.awt.Component','java.awt.JSComponent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSMenuUI", null, 'swingjs.plaf.JSMenuItemUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jm=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.isMenu=true;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
var isMenuBarMenu=this.jm.isTopLevelMenu$();
if (this.domNode != null  && this.isMenuItem == isMenuBarMenu  ) {
this.outerNode=null;
if (isMenuBarMenu) $I$(1).detachAll((this.jc.getParent$().ui).domNode);
}if (this.domNode == null ) {
this.domNode=this.createItem$S$swingjs_api_js_DOMNode(isMenuBarMenu ? "_bar" : "_elem", null);
this.bindJQueryEvents$swingjs_api_js_DOMNode$S$I(this.domNode, "mouseenter mouseleave", -1);
}this.allowTextAlignment=this.isMenuItem=!isMenuBarMenu;
this.containerNode=(isMenuBarMenu ? null : this.domNode);
this.addClass$swingjs_api_js_DOMNode$S(this.domNode, isMenuBarMenu ? "j2s-menuBar-menu" : "j2s-popup-menu");
this.removeClass$swingjs_api_js_DOMNode$S(this.domNode, !isMenuBarMenu ? "j2s-menuBar-menu" : "j2s-popup-menu");
if (isMenuBarMenu) this.removeClass$swingjs_api_js_DOMNode$S(this.menuAnchorNode, "a");
 else this.addClass$swingjs_api_js_DOMNode$S(this.menuAnchorNode, "a");
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.domNode, this.c.getFont$());
$I$(1).setVisible(this.domNode, this.jc.isVisible$());
this.setIconAndText$S$javax_swing_Icon$I$S("menu", this.currentIcon, this.currentGap, this.currentText);
return this.domNode;
});

Clazz.newMeth(C$, 'propertyChangedFromListener$java_beans_PropertyChangeEvent$S', function (e, prop) {
C$.superclazz.prototype.propertyChangedFromListener$java_beans_PropertyChangeEvent$S.apply(this, [e, prop]);
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
var prop=e.getPropertyName$();
if (this.jc.isVisible$()) {
if (prop == "ancestor") {
p$1.rebuild.apply(this, []);
}}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'rebuild', function () {
if (this.jc.getParent$() != null ) {
if (this.domNode != null  && this.isMenuItem == this.jm.isTopLevelMenu$()  ) {
this.reInit$();
this.outerNode=null;
this.updateDOMNode$();
return;
}}}, p$1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.jm=jc;
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
(this.menuItem).setDelay$I(200);
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
C$.superclazz.prototype.uninstallUI$javax_swing_JComponent.apply(this, [jc]);
});

Clazz.newMeth(C$, 'getChildren$', function () {
return (this.isMenuItem ? Clazz.array($I$(2), -1, [this.jm.getPopupMenu$()]) : $I$(3).getChildArray$java_awt_Container(this.jm));
});

Clazz.newMeth(C$, 'getChildCount$', function () {
return (this.isMenuItem ? 1 : this.jc.getComponentCount$());
});

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "Menu";
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
