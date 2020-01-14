(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode','java.awt.Dimension','swingjs.plaf.JSPopupMenuUI']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSMenuItemUI", null, 'swingjs.plaf.JSButtonUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.menuKeyListener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.isMenuItem=true;
this.allowPaintedBackground=false;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.domNode=this.createItem$S$swingjs_api_js_DOMNode("_item", null);
this.bindJQueryEvents$swingjs_api_js_DOMNode$S$I(this.domNode, "mouseenter", -1);
}$I$(1).setVisible(this.domNode, this.jc.isVisible$());
this.setupButton$();
return this.domNode;
});

Clazz.newMeth(C$, ['handleJSEvent$O$I$O','handleJSEvent$'], function (target, eventType, jQueryEvent) {
this.checkStopPopupMenuTimer$O$I$O(target, eventType, jQueryEvent);
return C$.superclazz.prototype.handleJSEvent$O$I$O.apply(this, [target, eventType, jQueryEvent]);
});

Clazz.newMeth(C$, 'getContainerHeight$', function () {
return this.height=25;
});

Clazz.newMeth(C$, 'getCSSAdjustment$Z', function (addingCSS) {
return Clazz.new_($I$(2).c$$I$I,[5, 0]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.menuItem=jc;
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
var prop=e.getPropertyName$();
if (this.jc.isVisible$()) {
if (prop == "ancestor") {
if (this.jc.getParent$() != null ) {
(this.jc.getParent$().getUI$()).setHTMLElement$();
}}}});

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "MenuItem";
});

Clazz.newMeth(C$, 'processJ2SMenuCmd$OA', function (data) {
$I$(3).processJ2SMenuCmd$OA(data);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
