(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JPanel','javax.swing.JSlider','javax.swing.JLabel','java.awt.Dimension','fr.orsay.lri.varna.controlers.ControleurSliderLabel','fr.orsay.lri.varna.controlers.ControleurNumPeriod','java.awt.FlowLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueNumPeriod");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.panel=null;
this.numPeriodSlider=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
this.panel=Clazz.new_($I$(1));
var maxPeriod=this._vp.getRNA$().get_listeBases$().size$();
this.numPeriodSlider=Clazz.new_($I$(2).c$$I$I$I$I,[0, 1, maxPeriod, Math.min(this._vp.getNumPeriod$(), maxPeriod)]);
this.numPeriodSlider.setMajorTickSpacing$I(10);
this.numPeriodSlider.setMinorTickSpacing$I(5);
this.numPeriodSlider.setPaintTicks$Z(true);
this.numPeriodSlider.setPaintLabels$Z(true);
var numLabel=Clazz.new_($I$(3).c$$S,[String.valueOf$I(this._vp.getNumPeriod$())]);
numLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4).c$$I$I,[50, numLabel.getPreferredSize$().height]));
this.numPeriodSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(5).c$$javax_swing_JLabel$Z,[numLabel, false]));
this.numPeriodSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(6).c$$fr_orsay_lri_varna_views_VueNumPeriod,[this]));
this.panel=Clazz.new_($I$(1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7).c$$I,[0]));
var labelS=Clazz.new_($I$(3).c$$S,["NumPeriod:"]);
this.panel.add$java_awt_Component(labelS);
this.panel.add$java_awt_Component(this.numPeriodSlider);
this.panel.add$java_awt_Component(numLabel);
}, 1);

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getNumPeriod$', function () {
return this.numPeriodSlider.getValue$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
