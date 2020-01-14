(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JPanel','java.awt.GridLayout','java.awt.FlowLayout','javax.swing.JSlider','javax.swing.JLabel','java.awt.Dimension','fr.orsay.lri.varna.controlers.ControleurSliderLabel','fr.orsay.lri.varna.controlers.ControleurBorder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueBorder");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.borderHeightSlider=null;
this.borderWidthSlider=null;
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
this.borderHeightSlider=Clazz.new_($I$(4).c$$I$I$I$I,[0, 0, (this._vp.getHeight$()/2|0) - 10, this._vp.getBorderSize$().height]);
this.borderHeightSlider.setMajorTickSpacing$I(50);
this.borderHeightSlider.setMinorTickSpacing$I(10);
this.borderHeightSlider.setPaintTicks$Z(true);
this.borderHeightSlider.setPaintLabels$Z(true);
var borderHeightLabel=Clazz.new_($I$(5).c$$S,[String.valueOf$I(this._vp.getBorderSize$().height)]);
borderHeightLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(6).c$$I$I,[50, borderHeightLabel.getPreferredSize$().height]));
this.borderHeightSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$javax_swing_JLabel$Z,[borderHeightLabel, false]));
this.borderHeightSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(8).c$$fr_orsay_lri_varna_views_VueBorder,[this]));
this.borderWidthSlider=Clazz.new_($I$(4).c$$I$I$I$I,[0, 0, (this._vp.getWidth$()/2|0) - 10, this._vp.getBorderSize$().width]);
this.borderWidthSlider.setMajorTickSpacing$I(50);
this.borderWidthSlider.setMinorTickSpacing$I(10);
this.borderWidthSlider.setPaintTicks$Z(true);
this.borderWidthSlider.setPaintLabels$Z(true);
var borderWidthLabel=Clazz.new_($I$(5).c$$S,[String.valueOf$I(this._vp.getBorderSize$().width)]);
borderWidthLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(6).c$$I$I,[50, borderWidthLabel.getPreferredSize$().height]));
this.borderWidthSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7).c$$javax_swing_JLabel$Z,[borderWidthLabel, false]));
this.borderWidthSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(8).c$$fr_orsay_lri_varna_views_VueBorder,[this]));
var labelW=Clazz.new_($I$(5).c$$S,["Width:"]);
var labelH=Clazz.new_($I$(5).c$$S,["Height:"]);
pup.add$java_awt_Component(labelW);
pup.add$java_awt_Component(this.borderWidthSlider);
pup.add$java_awt_Component(borderWidthLabel);
pdown.add$java_awt_Component(labelH);
pdown.add$java_awt_Component(this.borderHeightSlider);
pdown.add$java_awt_Component(borderHeightLabel);
this.panel.add$java_awt_Component(pup);
this.panel.add$java_awt_Component(pdown);
}, 1);

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getDimension$', function () {
return Clazz.new_($I$(6).c$$I$I,[this.borderWidthSlider.getValue$(), this.borderHeightSlider.getValue$()]);
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.borderHeightSlider.getValue$();
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.borderWidthSlider.getValue$();
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
