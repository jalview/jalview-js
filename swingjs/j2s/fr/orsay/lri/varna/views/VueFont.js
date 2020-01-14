(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'java.awt.GraphicsEnvironment','javax.swing.JComboBox','javax.swing.JSlider','javax.swing.JPanel','java.awt.Font']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueFont");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.font=null;
this.stylesBox=null;
this.boxPolice=null;
this.panel=null;
this.sizeSlider=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
p$1.init.apply(this, []);
p$1.buildViewVPTitle.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font', function (f) {
C$.$init$.apply(this);
this.font=f;
p$1.init.apply(this, []);
p$1.buildViewFont.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init', function () {
var ge=$I$(1).getLocalGraphicsEnvironment$();
var polices=ge.getAvailableFontFamilyNames$();
this.boxPolice=Clazz.new_($I$(2).c$$TEA,[polices]);
this.sizeSlider=Clazz.new_($I$(3).c$$I$I$I$I,[0, 4, 88, 14]);
this.sizeSlider.setMajorTickSpacing$I(10);
this.sizeSlider.setMinorTickSpacing$I(5);
this.sizeSlider.setPaintTicks$Z(true);
this.sizeSlider.setPaintLabels$Z(true);
var styles=Clazz.array(String, -1, ["Plain", "Italic", "Bold"]);
this.stylesBox=Clazz.new_($I$(2).c$$TEA,[styles]);
this.panel=Clazz.new_($I$(4));
this.panel.add$java_awt_Component(this.boxPolice);
this.panel.add$java_awt_Component(this.sizeSlider);
this.panel.add$java_awt_Component(this.stylesBox);
}, p$1);

Clazz.newMeth(C$, 'buildViewFont', function () {
this.boxPolice.setSelectedItem$O(this.font.getFamily$());
this.sizeSlider.setValue$I(this.font.getSize$());
this.stylesBox.setSelectedItem$O(this.styleIntToString$I(this.font.getStyle$()));
}, p$1);

Clazz.newMeth(C$, 'buildViewVPTitle', function () {
this.boxPolice.setSelectedItem$O(this._vp.getTitleFont$().getFamily$());
this.sizeSlider.setValue$I(this._vp.getTitleFont$().getSize$());
this.stylesBox.setSelectedItem$O(this.styleIntToString$I(this._vp.getTitleFont$().getStyle$()));
}, p$1);

Clazz.newMeth(C$, 'styleIntToString$I', function (styleInt) {
switch (styleInt) {
case 0:
return "Plain";
case 2:
return "Italic";
case 1:
return "Bold";
default:
return "Plain";
}
});

Clazz.newMeth(C$, 'getStylesBox$', function () {
return this.stylesBox;
});

Clazz.newMeth(C$, 'getBoxPolice$', function () {
return this.boxPolice;
});

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getSizeSlider$', function () {
return this.sizeSlider;
});

Clazz.newMeth(C$, 'getFont$', function () {
var style;
switch (this.getStylesBox$().getSelectedIndex$()) {
case 0:
style=0;
break;
case 1:
style=2;
break;
case 2:
style=1;
break;
default:
style=0;
break;
}
return Clazz.new_($I$(5).c$$S$I$I,[this.getBoxPolice$().getSelectedItem$(), style, this.getSizeSlider$().getValue$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
