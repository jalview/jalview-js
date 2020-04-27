(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'java.util.ArrayList','javax.swing.JSlider','java.awt.Dimension','javax.swing.JLabel','fr.orsay.lri.varna.controlers.ControleurSliderLabel','javax.swing.JPanel','java.awt.FlowLayout']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueBPThickness", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._backupThicknesses=Clazz.new_($I$(1,1));
this.FACTOR=10.0;
},1);

C$.$fields$=[['D',['FACTOR'],'O',['_vp','fr.orsay.lri.varna.VARNAPanel','_msbp','java.util.ArrayList','_thicknessSlider','javax.swing.JSlider','panel','javax.swing.JPanel','_backupThicknesses','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$java_util_ArrayList', function (vp, msbp) {
;C$.$init$.apply(this);
this._vp=vp;
this._msbp=msbp;
p$1.backupThicknesses.apply(this, []);
this._thicknessSlider=Clazz.new_([0, 1, 100, ((msbp.get$I(0).getStyle$().getThickness$D(1.0) * this.FACTOR)|0)],$I$(2,1).c$$I$I$I$I);
this._thicknessSlider.setMajorTickSpacing$I(10);
this._thicknessSlider.setPaintTicks$Z(true);
this._thicknessSlider.setPaintLabels$Z(false);
this._thicknessSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3,1).c$$I$I,[500, 50]));
var thicknessLabel=Clazz.new_([String.valueOf$D(msbp.get$I(0).getStyle$().getThickness$D(1.0))],$I$(4,1).c$$S);
thicknessLabel.setPreferredSize$java_awt_Dimension(Clazz.new_([50, thicknessLabel.getPreferredSize$().height],$I$(3,1).c$$I$I));
this._thicknessSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(5,1).c$$javax_swing_JLabel$D,[thicknessLabel, 1.0 / this.FACTOR]));
this._thicknessSlider.addChangeListener$javax_swing_event_ChangeListener(this);
this.panel=Clazz.new_($I$(6,1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$I,[0]));
var labelZ=Clazz.new_($I$(4,1).c$$S,["Thickness:"]);
this.panel.add$java_awt_Component(labelZ);
this.panel.add$java_awt_Component(this._thicknessSlider);
this.panel.add$java_awt_Component(thicknessLabel);
}, 1);

Clazz.newMeth(C$, 'backupThicknesses', function () {
for (var i=0; i < this._msbp.size$(); i++) {
this._backupThicknesses.add$O(new Double(this._msbp.get$I(i).getStyle$().getThickness$D(1.0)));
}
}, p$1);

Clazz.newMeth(C$, 'restoreThicknesses$', function () {
for (var i=0; i < this._msbp.size$(); i++) {
this._msbp.get$I(i).getStyle$().setThickness$D((this._backupThicknesses.get$I(i)).valueOf());
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

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
for (var i=0; i < this._msbp.size$(); i++) {
this._msbp.get$I(i).getStyle$().setThickness$D((this._thicknessSlider.getValue$()) / this.FACTOR);
}
this._vp.repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
