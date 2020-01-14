(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'java.util.ArrayList','javax.swing.JSlider','java.awt.Dimension','javax.swing.JLabel','fr.orsay.lri.varna.controlers.ControleurSliderLabel','javax.swing.JPanel','java.awt.FlowLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueBPThickness", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this._msbp=null;
this._thicknessSlider=null;
this.panel=null;
this._backupThicknesses=null;
this.FACTOR=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._backupThicknesses=Clazz.new_($I$(1));
this.FACTOR=10.0;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$java_util_ArrayList', function (vp, msbp) {
C$.$init$.apply(this);
this._vp=vp;
this._msbp=msbp;
p$1.backupThicknesses.apply(this, []);
this._thicknessSlider=Clazz.new_($I$(2).c$$I$I$I$I,[0, 1, 100, ((msbp.get$I(0).getStyle$().getThickness$D(1.0) * this.FACTOR)|0)]);
this._thicknessSlider.setMajorTickSpacing$I(10);
this._thicknessSlider.setPaintTicks$Z(true);
this._thicknessSlider.setPaintLabels$Z(false);
this._thicknessSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[500, 50]));
var thicknessLabel=Clazz.new_($I$(4).c$$S,[String.valueOf$D(msbp.get$I(0).getStyle$().getThickness$D(1.0))]);
thicknessLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[50, thicknessLabel.getPreferredSize$().height]));
this._thicknessSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(5).c$$javax_swing_JLabel$D,[thicknessLabel, 1.0 / this.FACTOR]));
this._thicknessSlider.addChangeListener$javax_swing_event_ChangeListener(this);
this.panel=Clazz.new_($I$(6));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7).c$$I,[0]));
var labelZ=Clazz.new_($I$(4).c$$S,["Thickness:"]);
this.panel.add$java_awt_Component(labelZ);
this.panel.add$java_awt_Component(this._thicknessSlider);
this.panel.add$java_awt_Component(thicknessLabel);
}, 1);

Clazz.newMeth(C$, 'backupThicknesses', function () {
for (var i=0; i < this._msbp.size$(); i++) {
this._backupThicknesses.add$TE(new Double(this._msbp.get$I(i).getStyle$().getThickness$D(1.0)));
}
}, p$1);

Clazz.newMeth(C$, 'restoreThicknesses$', function () {
for (var i=0; i < this._msbp.size$(); i++) {
this._msbp.get$I(i).getStyle$().setThickness$D((this._backupThicknesses.get$I(i)).doubleValue$());
}
});

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getThickness$', function () {
return this._thicknessSlider.getValue$() / this.FACTOR;
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
for (var i=0; i < this._msbp.size$(); i++) {
this._msbp.get$I(i).getStyle$().setThickness$D((this._thicknessSlider.getValue$()) / this.FACTOR);
}
this._vp.repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
