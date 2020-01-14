(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JPanel','javax.swing.JSlider','javax.swing.JLabel','java.awt.Dimension','fr.orsay.lri.varna.controlers.ControleurSliderLabel','fr.orsay.lri.varna.controlers.ControleurSpaceBetweenBases','java.awt.FlowLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueSpaceBetweenBases");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.panel=null;
this.spaceSlider=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
this.panel=Clazz.new_($I$(1));
this.spaceSlider=Clazz.new_($I$(2).c$$I$I$I$I,[0, 10, 200, (Integer.valueOf$S(String.valueOf$J(Math.round(this._vp.getSpaceBetweenBases$() * 100)))).intValue$()]);
this.spaceSlider.setMajorTickSpacing$I(30);
this.spaceSlider.setPaintTicks$Z(true);
this.spaceSlider.setPaintLabels$Z(true);
var spaceLabel=Clazz.new_($I$(3).c$$S,[String.valueOf$D(100.0 * this._vp.getSpaceBetweenBases$())]);
spaceLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(4).c$$I$I,[50, spaceLabel.getPreferredSize$().height]));
this.spaceSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(5).c$$javax_swing_JLabel$Z,[spaceLabel, false]));
this.spaceSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(6).c$$fr_orsay_lri_varna_views_VueSpaceBetweenBases,[this]));
this.panel=Clazz.new_($I$(1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7).c$$I,[0]));
var labelS=Clazz.new_($I$(3).c$$S,["Space:"]);
this.panel.add$java_awt_Component(labelS);
this.panel.add$java_awt_Component(this.spaceSlider);
this.panel.add$java_awt_Component(spaceLabel);
}, 1);

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getSpace$', function () {
return new Double(this.spaceSlider.getValue$() / 100.0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
