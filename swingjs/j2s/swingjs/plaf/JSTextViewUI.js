(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSTextViewUI", null, 'swingjs.plaf.JSTextUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mustWrap=false;
this.overflows=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.mustWrap=false;
this.overflows=Clazz.array(String, -1, ["auto", "hidden", "scroll"]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setDoPropagate$();
}, 1);

Clazz.newMeth(C$, 'setupViewNode$', function () {
this.allowPaintedBackground=false;
this.focusNode=this.enableNode=this.textNode=this.domNode;
$I$(1).setStyles(this.domNode, ["resize", "none", "margin", "0px", "padding", "0px", "scrollbar-width", "thin"]);
$I$(1).setStyles(this.domNode, ["box-sizing", "border-box"]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
});

Clazz.newMeth(C$, 'undisposeUI$swingjs_api_js_DOMNode', function (node) {
C$.superclazz.prototype.undisposeUI$swingjs_api_js_DOMNode.apply(this, [node]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
});

Clazz.newMeth(C$, 'setOverflow$', function () {
var parent=this.jc.getParent$();
if (this.isAWT) {
parent=this.jc;
} else if (!(Clazz.instanceOf(parent, "javax.swing.JViewport")) || !(Clazz.instanceOf((parent=parent.getParent$()), "javax.swing.JScrollPane")) ) {
$I$(1).setStyles(this.domNode, ["overflow", "hidden", "overflow-x", null, "overflow-y", null]);
return;
}var sp=parent;
$I$(1).setStyles(this.domNode, ["overflow", null]);
$I$(1).setStyles(this.domNode, ["overflow-x", this.overflows[sp.getHorizontalScrollBarPolicy$() % 10]]);
$I$(1).setStyles(this.domNode, ["overflow-y", this.overflows[sp.getVerticalScrollBarPolicy$() % 10]]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:54 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
