(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JSlider','java.awt.Dimension','javax.swing.JPanel','java.awt.GridLayout','java.awt.FlowLayout','javax.swing.JLabel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueJPEG");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.qualitySlider=null;
this.scaleSlider=null;
this.panel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z', function (showQuality, showScale) {
C$.$init$.apply(this);
this.qualitySlider=Clazz.new_($I$(1).c$$I$I$I$I,[0, 10, 100, 75]);
this.qualitySlider.setMajorTickSpacing$I(5);
this.qualitySlider.setPaintTicks$Z(true);
this.qualitySlider.setPaintLabels$Z(true);
this.qualitySlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[400, 50]));
this.scaleSlider=Clazz.new_($I$(1).c$$I$I$I$I,[0, 0, 600, 100]);
this.scaleSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[400, 50]));
this.scaleSlider.setMajorTickSpacing$I(100);
this.scaleSlider.setPaintTicks$Z(true);
this.scaleSlider.setPaintLabels$Z(true);
this.panel=Clazz.new_($I$(3));
var pup=Clazz.new_($I$(3));
var pdown=Clazz.new_($I$(3));
var nbPanels=0;
if (showQuality) nbPanels++;
if (showScale) nbPanels++;
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4).c$$I$I,[nbPanels, 1]));
pup.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5).c$$I,[0]));
pdown.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5).c$$I,[0]));
var lseq=Clazz.new_($I$(6).c$$S,["Resolution:"]);
var lstr=Clazz.new_($I$(6).c$$S,["Quality:"]);
pup.add$java_awt_Component(lseq);
pup.add$java_awt_Component(this.scaleSlider);
pdown.add$java_awt_Component(lstr);
pdown.add$java_awt_Component(this.qualitySlider);
if (showQuality) {
this.panel.add$java_awt_Component(pup);
}if (showScale) {
this.panel.add$java_awt_Component(pdown);
}}, 1);

Clazz.newMeth(C$, 'getQualitySlider$', function () {
return this.qualitySlider;
});

Clazz.newMeth(C$, 'getScaleSlider$', function () {
return this.scaleSlider;
});

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
