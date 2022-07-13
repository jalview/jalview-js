(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'java.awt.GraphicsEnvironment','javax.swing.JComboBox','javax.swing.JSlider','javax.swing.JPanel','java.awt.Font']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueFont");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vp','fr.orsay.lri.varna.VARNAPanel','font','java.awt.Font','stylesBox','javax.swing.JComboBox','+boxPolice','panel','javax.swing.JPanel','sizeSlider','javax.swing.JSlider']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
;C$.$init$.apply(this);
this._vp=vp;
p$1.init.apply(this, []);
p$1.buildViewVPTitle.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font', function (f) {
;C$.$init$.apply(this);
this.font=f;
p$1.init.apply(this, []);
p$1.buildViewFont.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'init', function () {
var ge=$I$(1).getLocalGraphicsEnvironment$();
var polices=ge.getAvailableFontFamilyNames$();
this.boxPolice=Clazz.new_($I$(2,1).c$$OA,[polices]);
this.sizeSlider=Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 4, 88, 14]);
this.sizeSlider.setMajorTickSpacing$I(10);
this.sizeSlider.setMinorTickSpacing$I(5);
this.sizeSlider.setPaintTicks$Z(true);
this.sizeSlider.setPaintLabels$Z(true);
var styles=Clazz.array(String, -1, ["Plain", "Italic", "Bold"]);
this.stylesBox=Clazz.new_($I$(2,1).c$$OA,[styles]);
this.panel=Clazz.new_($I$(4,1));
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
return Clazz.new_([this.getBoxPolice$().getSelectedItem$(), style, this.getSizeSlider$().getValue$()],$I$(5,1).c$$S$I$I);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
