(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JPanel','java.awt.GridLayout','java.awt.FlowLayout','javax.swing.JSlider','java.awt.Dimension','fr.orsay.lri.varna.controlers.ControleurZoom','javax.swing.JLabel','fr.orsay.lri.varna.controlers.ControleurSliderLabel']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueZoom", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vp','fr.orsay.lri.varna.VARNAPanel','zoomSlider','javax.swing.JSlider','+zoomAmountSlider','panel','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
;C$.$init$.apply(this);
this._vp=vp;
var pup=Clazz.new_($I$(1,1));
var pdown=Clazz.new_($I$(1,1));
this.panel=Clazz.new_($I$(1,1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1).c$$I$I,[2, 1]));
pup.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$I,[0]));
pdown.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$I,[0]));
this.zoomSlider=Clazz.new_([0, 50, 6000, ((this._vp.getZoom$() * 100)|0)],$I$(4,1).c$$I$I$I$I);
this.zoomSlider.setMajorTickSpacing$I(2000);
this.zoomSlider.setMinorTickSpacing$I(500);
this.zoomSlider.setPaintTicks$Z(true);
this.zoomSlider.setPaintLabels$Z(true);
this.zoomSlider.setPreferredSize$java_awt_Dimension(Clazz.new_([250, this.zoomSlider.getPreferredSize$().height],$I$(5,1).c$$I$I));
this.zoomSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(6,1).c$$fr_orsay_lri_varna_views_VueZoom,[this]));
var zoomValueLabel=Clazz.new_([String.valueOf$D(this._vp.getZoom$())],$I$(7,1).c$$S);
zoomValueLabel.setPreferredSize$java_awt_Dimension(Clazz.new_([50, zoomValueLabel.getPreferredSize$().height],$I$(5,1).c$$I$I));
this.zoomSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(8,1).c$$javax_swing_JLabel$Z,[zoomValueLabel, true]));
this.zoomAmountSlider=Clazz.new_([0, 101, 200, ((this._vp.getZoomIncrement$() * 100)|0)],$I$(4,1).c$$I$I$I$I);
this.zoomAmountSlider.setMajorTickSpacing$I(50);
this.zoomAmountSlider.setMinorTickSpacing$I(10);
this.zoomAmountSlider.setPaintTicks$Z(true);
this.zoomAmountSlider.setPaintLabels$Z(true);
this.zoomAmountSlider.setPreferredSize$java_awt_Dimension(Clazz.new_([200, this.zoomAmountSlider.getPreferredSize$().height],$I$(5,1).c$$I$I));
var zoomAmountValueLabel=Clazz.new_([String.valueOf$D(this._vp.getZoomIncrement$())],$I$(7,1).c$$S);
zoomAmountValueLabel.setPreferredSize$java_awt_Dimension(Clazz.new_([50, zoomAmountValueLabel.getPreferredSize$().height],$I$(5,1).c$$I$I));
this.zoomAmountSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(8,1).c$$javax_swing_JLabel$Z,[zoomAmountValueLabel, true]));
this.zoomAmountSlider.addChangeListener$javax_swing_event_ChangeListener(this);
var labelZ=Clazz.new_($I$(7,1).c$$S,["Zoom:"]);
var labelA=Clazz.new_($I$(7,1).c$$S,["Increment:"]);
pup.add$java_awt_Component(labelZ);
pup.add$java_awt_Component(this.zoomSlider);
pup.add$java_awt_Component(zoomValueLabel);
pdown.add$java_awt_Component(labelA);
pdown.add$java_awt_Component(this.zoomAmountSlider);
pdown.add$java_awt_Component(zoomAmountValueLabel);
this.panel.add$java_awt_Component(pup);
this.panel.add$java_awt_Component(pdown);
}, 1);

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getZoom$', function () {
return this.zoomSlider.getValue$() / 100.0;
});

Clazz.newMeth(C$, 'getZoomAmount$', function () {
return this.zoomAmountSlider.getValue$() / 100.0;
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (e) {
this._vp.setZoomIncrement$D(this.getZoomAmount$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
