(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JSlider','java.awt.Dimension','javax.swing.JLabel','fr.orsay.lri.varna.controlers.ControleurSliderLabel','fr.orsay.lri.varna.controlers.ControleurGlobalRescale','javax.swing.JPanel','java.awt.FlowLayout']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueGlobalRescale");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vp','fr.orsay.lri.varna.VARNAPanel','rescaleSlider','javax.swing.JSlider','panel','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
;C$.$init$.apply(this);
this._vp=vp;
this.rescaleSlider=Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 1, 500, 100]);
this.rescaleSlider.setMajorTickSpacing$I(100);
this.rescaleSlider.setPaintTicks$Z(true);
this.rescaleSlider.setPaintLabels$Z(true);
this.rescaleSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[500, 50]));
var rescaleLabel=Clazz.new_([String.valueOf$I(0)],$I$(3,1).c$$S);
rescaleLabel.setPreferredSize$java_awt_Dimension(Clazz.new_([50, rescaleLabel.getPreferredSize$().height],$I$(2,1).c$$I$I));
this.rescaleSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(4,1).c$$javax_swing_JLabel$Z,[rescaleLabel, false]));
this.rescaleSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(5,1).c$$fr_orsay_lri_varna_views_VueGlobalRescale$fr_orsay_lri_varna_VARNAPanel,[this, vp]));
this.panel=Clazz.new_($I$(6,1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$I,[0]));
var labelZ=Clazz.new_(["Scale (%):"],$I$(3,1).c$$S);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
