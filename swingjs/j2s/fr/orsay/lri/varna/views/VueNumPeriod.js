(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JPanel','javax.swing.JSlider','javax.swing.JLabel','java.awt.Dimension','fr.orsay.lri.varna.controlers.ControleurSliderLabel','fr.orsay.lri.varna.controlers.ControleurNumPeriod','java.awt.FlowLayout']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueNumPeriod");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vp','fr.orsay.lri.varna.VARNAPanel','panel','javax.swing.JPanel','numPeriodSlider','javax.swing.JSlider']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
;C$.$init$.apply(this);
this._vp=vp;
this.panel=Clazz.new_($I$(1,1));
var maxPeriod=this._vp.getRNA$().get_listeBases$().size$();
this.numPeriodSlider=Clazz.new_([0, 1, maxPeriod, Math.min(this._vp.getNumPeriod$(), maxPeriod)],$I$(2,1).c$$I$I$I$I);
this.numPeriodSlider.setMajorTickSpacing$I(10);
this.numPeriodSlider.setMinorTickSpacing$I(5);
this.numPeriodSlider.setPaintTicks$Z(true);
this.numPeriodSlider.setPaintLabels$Z(true);
var numLabel=Clazz.new_([String.valueOf$I(this._vp.getNumPeriod$())],$I$(3,1).c$$S);
numLabel.setPreferredSize$java_awt_Dimension(Clazz.new_([50, numLabel.getPreferredSize$().height],$I$(4,1).c$$I$I));
this.numPeriodSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(5,1).c$$javax_swing_JLabel$Z,[numLabel, false]));
this.numPeriodSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(6,1).c$$fr_orsay_lri_varna_views_VueNumPeriod,[this]));
this.panel=Clazz.new_($I$(1,1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$I,[0]));
var labelS=Clazz.new_($I$(3,1).c$$S,["NumPeriod:"]);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
