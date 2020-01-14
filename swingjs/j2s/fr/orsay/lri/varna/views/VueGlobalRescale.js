(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JSlider','java.awt.Dimension','javax.swing.JLabel','fr.orsay.lri.varna.controlers.ControleurSliderLabel','fr.orsay.lri.varna.controlers.ControleurGlobalRescale','javax.swing.JPanel','java.awt.FlowLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueGlobalRescale");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.rescaleSlider=null;
this.panel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
this.rescaleSlider=Clazz.new_($I$(1).c$$I$I$I$I,[0, 1, 500, 100]);
this.rescaleSlider.setMajorTickSpacing$I(100);
this.rescaleSlider.setPaintTicks$Z(true);
this.rescaleSlider.setPaintLabels$Z(true);
this.rescaleSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[500, 50]));
var rescaleLabel=Clazz.new_($I$(3).c$$S,[String.valueOf$I(0)]);
rescaleLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[50, rescaleLabel.getPreferredSize$().height]));
this.rescaleSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(4).c$$javax_swing_JLabel$Z,[rescaleLabel, false]));
this.rescaleSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(5).c$$fr_orsay_lri_varna_views_VueGlobalRescale$fr_orsay_lri_varna_VARNAPanel,[this, vp]));
this.panel=Clazz.new_($I$(6));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7).c$$I,[0]));
var labelZ=Clazz.new_($I$(3).c$$S,["Scale (%):"]);
this.panel.add$java_awt_Component(labelZ);
this.panel.add$java_awt_Component(this.rescaleSlider);
this.panel.add$java_awt_Component(rescaleLabel);
}, 1);

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getScale$', function () {
return this.rescaleSlider.getValue$() / 100.0;
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
