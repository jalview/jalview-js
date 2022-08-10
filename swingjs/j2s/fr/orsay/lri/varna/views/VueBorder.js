(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JPanel','java.awt.GridLayout','java.awt.FlowLayout','javax.swing.JSlider','javax.swing.JLabel','java.awt.Dimension','fr.orsay.lri.varna.controlers.ControleurSliderLabel','fr.orsay.lri.varna.controlers.ControleurBorder']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VueBorder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['_vp','fr.orsay.lri.varna.VARNAPanel','borderHeightSlider','javax.swing.JSlider','+borderWidthSlider','panel','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
;C$.$init$.apply(this);
this._vp=vp;
var pup=Clazz.new_($I$(1,1));
var pdown=Clazz.new_($I$(1,1));
this.panel=Clazz.new_($I$(1,1));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(2,1).c$$I$I,[2, 1]));
pup.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$I,[0]));
pdown.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1).c$$I,[0]));
this.borderHeightSlider=Clazz.new_([0, 0, (this._vp.getHeight$()/2|0) - 10, this._vp.getBorderSize$().height],$I$(4,1).c$$I$I$I$I);
this.borderHeightSlider.setMajorTickSpacing$I(50);
this.borderHeightSlider.setMinorTickSpacing$I(10);
this.borderHeightSlider.setPaintTicks$Z(true);
this.borderHeightSlider.setPaintLabels$Z(true);
var borderHeightLabel=Clazz.new_([String.valueOf$I(this._vp.getBorderSize$().height)],$I$(5,1).c$$S);
borderHeightLabel.setPreferredSize$java_awt_Dimension(Clazz.new_([50, borderHeightLabel.getPreferredSize$().height],$I$(6,1).c$$I$I));
this.borderHeightSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7,1).c$$javax_swing_JLabel$Z,[borderHeightLabel, false]));
this.borderHeightSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(8,1).c$$fr_orsay_lri_varna_views_VueBorder,[this]));
this.borderWidthSlider=Clazz.new_([0, 0, (this._vp.getWidth$()/2|0) - 10, this._vp.getBorderSize$().width],$I$(4,1).c$$I$I$I$I);
this.borderWidthSlider.setMajorTickSpacing$I(50);
this.borderWidthSlider.setMinorTickSpacing$I(10);
this.borderWidthSlider.setPaintTicks$Z(true);
this.borderWidthSlider.setPaintLabels$Z(true);
var borderWidthLabel=Clazz.new_([String.valueOf$I(this._vp.getBorderSize$().width)],$I$(5,1).c$$S);
borderWidthLabel.setPreferredSize$java_awt_Dimension(Clazz.new_([50, borderWidthLabel.getPreferredSize$().height],$I$(6,1).c$$I$I));
this.borderWidthSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(7,1).c$$javax_swing_JLabel$Z,[borderWidthLabel, false]));
this.borderWidthSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(8,1).c$$fr_orsay_lri_varna_views_VueBorder,[this]));
var labelW=Clazz.new_($I$(5,1).c$$S,["Width:"]);
var labelH=Clazz.new_($I$(5,1).c$$S,["Height:"]);
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
return Clazz.new_([this.borderWidthSlider.getValue$(), this.borderHeightSlider.getValue$()],$I$(6,1).c$$I$I);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
