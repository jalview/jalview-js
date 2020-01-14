(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.api.js.DOMNode','java.awt.Dimension','javax.swing.LookAndFeel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSDesktopIconUI", null, 'swingjs.plaf.JSPanelUI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$$frameZ=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.$$frameZ=10000;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.isContainer=true;
System.out.println$S("JSDesktopIconUI SURRAGATE -- NOT IMPLEMENTED YET! ");
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
var root=this.jc.getRootPane$();
this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id, []);
if (root != null  && root.getGlassPane$() === this.c  ) $I$(1).setVisible(this.domNode, false);
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'getHTMLSizePreferred$swingjs_api_js_DOMNode$Z', function (obj, addCSS) {
return Clazz.new_($I$(2).c$$I$I,[this.c.getWidth$(), this.c.getHeight$()]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
$I$(3).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "Panel.background", "Panel.foreground", "Panel.font");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (jc) {
return null;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
