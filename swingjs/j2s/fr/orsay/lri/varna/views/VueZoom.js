(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JPanel','java.awt.GridLayout','java.awt.FlowLayout','javax.swing.JSlider','java.awt.Dimension','fr.orsay.lri.varna.controlers.ControleurZoom','javax.swing.JLabel','fr.orsay.lri.varna.controlers.ControleurSliderLabel']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueZoom", null, null, 'javax.swing.event.ChangeListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.zoomSlider=null;
this.zoomAmountSlider=null;
this.panel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.$init$.apply(this);
this._vp=vp;
var pup=Clazz.new_($I$(1));
var pdown=Clazz.new_($I$(1));
this.panel=Clazz.new_($I$(1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2).c$$I$I,[2, 1]));
pup.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3).c$$I,[0]));
pdown.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3).c$$I,[0]));
this.zoomSlider=Clazz.new_($I$(4).c$$I$I$I$I,[0, 50, 6000, ((this._vp.getZoom$() * 100)|0)]);
this.zoomSlider.setMajorTickSpacing$I(2000);
this.zoomSlider.setMinorTickSpacing$I(500);
this.zoomSlider.setPaintTicks$Z(true);
this.zoomSlider.setPaintLabels$Z(true);
this.zoomSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[250, this.zoomSlider.getPreferredSize$().height]));
this.zoomSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(6).c$$fr_orsay_lri_varna_views_VueZoom,[this]));
var zoomValueLabel=Clazz.new_($I$(7).c$$S,[String.valueOf$D(this._vp.getZoom$())]);
zoomValueLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[50, zoomValueLabel.getPreferredSize$().height]));
this.zoomSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(8).c$$javax_swing_JLabel$Z,[zoomValueLabel, true]));
this.zoomAmountSlider=Clazz.new_($I$(4).c$$I$I$I$I,[0, 101, 200, ((this._vp.getZoomIncrement$() * 100)|0)]);
this.zoomAmountSlider.setMajorTickSpacing$I(50);
this.zoomAmountSlider.setMinorTickSpacing$I(10);
this.zoomAmountSlider.setPaintTicks$Z(true);
this.zoomAmountSlider.setPaintLabels$Z(true);
this.zoomAmountSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[200, this.zoomAmountSlider.getPreferredSize$().height]));
var zoomAmountValueLabel=Clazz.new_($I$(7).c$$S,[String.valueOf$D(this._vp.getZoomIncrement$())]);
zoomAmountValueLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(5).c$$I$I,[50, zoomAmountValueLabel.getPreferredSize$().height]));
this.zoomAmountSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(8).c$$javax_swing_JLabel$Z,[zoomAmountValueLabel, true]));
this.zoomAmountSlider.addChangeListener$javax_swing_event_ChangeListener(this);
var labelZ=Clazz.new_($I$(7).c$$S,["Zoom:"]);
var labelA=Clazz.new_($I$(7).c$$S,["Increment:"]);
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

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
this._vp.setZoomIncrement$D(this.getZoomAmount$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
