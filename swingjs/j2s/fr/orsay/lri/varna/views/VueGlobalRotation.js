(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JSlider','java.awt.Dimension','javax.swing.JLabel','fr.orsay.lri.varna.controlers.ControleurSliderLabel','fr.orsay.lri.varna.controlers.ControleurGlobalRotation','javax.swing.JPanel','java.awt.FlowLayout']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueGlobalRotation");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.rotationSlider=null;
this.panel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
this.rotationSlider=Clazz.new_($I$(1).c$$I$I$I$I,[0, -360, 360, 0]);
this.rotationSlider.setMajorTickSpacing$I(60);
this.rotationSlider.setPaintTicks$Z(true);
this.rotationSlider.setPaintLabels$Z(true);
this.rotationSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[500, 50]));
var rotationLabel=Clazz.new_($I$(3).c$$S,[String.valueOf$I(0)]);
rotationLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2).c$$I$I,[50, rotationLabel.getPreferredSize$().height]));
this.rotationSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(4).c$$javax_swing_JLabel$Z,[rotationLabel, false]));
this.rotationSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(5).c$$fr_orsay_lri_varna_views_VueGlobalRotation$fr_orsay_lri_varna_VARNAPanel,[this, vp]));
this.panel=Clazz.new_($I$(6));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7).c$$I,[0]));
var labelZ=Clazz.new_($I$(3).c$$S,["Rotation (degrees):"]);
this.panel.add$java_awt_Component(labelZ);
this.panel.add$java_awt_Component(this.rotationSlider);
this.panel.add$java_awt_Component(rotationLabel);
}, 1);

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getAngle$', function () {
return this.rotationSlider.getValue$();
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
