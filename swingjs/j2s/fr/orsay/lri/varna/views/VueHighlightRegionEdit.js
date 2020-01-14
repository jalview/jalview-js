(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JButton','javax.swing.JSlider','java.awt.Dimension','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JLabel','javax.swing.SpinnerNumberModel','javax.swing.JSpinner','java.awt.GridLayout','javax.swing.JOptionPane','javax.swing.JColorChooser']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueHighlightRegionEdit", null, null, ['javax.swing.event.ChangeListener', 'java.awt.event.ActionListener']);
C$.CONTROL_HEIGHT=0;
C$.TITLE_WIDTH=0;
C$.CONTROL_WIDTH=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.CONTROL_HEIGHT=50;
C$.TITLE_WIDTH=70;
C$.CONTROL_WIDTH=200;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this._fromSlider=null;
this._toSlider=null;
this.panel=null;
this._an=null;
this.fillShow=null;
this.outlineShow=null;
this.rad=null;
this._backup=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.fillShow=Clazz.new_($I$(1));
this.outlineShow=Clazz.new_($I$(1));
this._backup=null;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_HighlightRegionAnnotation', function (vp, an) {
C$.$init$.apply(this);
this._an=an;
this._vp=vp;
this._toSlider=Clazz.new_($I$(2).c$$I$I$I$I,[0, 0, vp.getRNA$().getSize$() - 1, 0]);
this._toSlider.setMajorTickSpacing$I(10);
this._toSlider.setPaintTicks$Z(true);
this._toSlider.setPaintLabels$Z(true);
this._toSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[C$.CONTROL_WIDTH, C$.CONTROL_HEIGHT]));
this._fromSlider=Clazz.new_($I$(2).c$$I$I$I$I,[0, 0, vp.getRNA$().getSize$() - 1, 0]);
this._fromSlider.setMajorTickSpacing$I(10);
this._fromSlider.setPaintTicks$Z(true);
this._fromSlider.setPaintLabels$Z(true);
this._fromSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[C$.CONTROL_WIDTH, C$.CONTROL_HEIGHT]));
this._fromSlider.addChangeListener$javax_swing_event_ChangeListener(this);
this._toSlider.addChangeListener$javax_swing_event_ChangeListener(this);
this.panel=Clazz.new_($I$(4));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5).c$$I,[0]));
var fromp=Clazz.new_($I$(4));
var l1=Clazz.new_($I$(6).c$$S,["From: "]);
l1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[C$.TITLE_WIDTH, C$.CONTROL_HEIGHT]));
fromp.add$java_awt_Component(l1);
fromp.add$java_awt_Component(this._fromSlider);
var top=Clazz.new_($I$(4));
l1=Clazz.new_($I$(6).c$$S,["To: "]);
l1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[C$.TITLE_WIDTH, C$.CONTROL_HEIGHT]));
top.add$java_awt_Component(l1);
top.add$java_awt_Component(this._toSlider);
var outlinep=Clazz.new_($I$(4));
l1=Clazz.new_($I$(6).c$$S,["Outline color: "]);
l1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[C$.TITLE_WIDTH, C$.CONTROL_HEIGHT]));
this.outlineShow.setContentAreaFilled$Z(false);
this.outlineShow.setOpaque$Z(true);
this.outlineShow.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[C$.CONTROL_WIDTH, C$.CONTROL_HEIGHT]));
this.outlineShow.setBackground$java_awt_Color(an.getOutlineColor$());
this.outlineShow.addActionListener$java_awt_event_ActionListener(this);
this.outlineShow.setActionCommand$S("outline");
outlinep.add$java_awt_Component(l1);
outlinep.add$java_awt_Component(this.outlineShow);
var fillp=Clazz.new_($I$(4));
l1=Clazz.new_($I$(6).c$$S,["Fill color: "]);
l1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[C$.TITLE_WIDTH, C$.CONTROL_HEIGHT]));
this.fillShow.setContentAreaFilled$Z(false);
this.fillShow.setOpaque$Z(true);
this.fillShow.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[C$.CONTROL_WIDTH, C$.CONTROL_HEIGHT]));
this.fillShow.setBackground$java_awt_Color(an.getFillColor$());
this.fillShow.addActionListener$java_awt_event_ActionListener(this);
this.fillShow.setActionCommand$S("fill");
fillp.add$java_awt_Component(l1);
fillp.add$java_awt_Component(this.fillShow);
var radiusp=Clazz.new_($I$(4));
l1=Clazz.new_($I$(6).c$$S,["Radius: "]);
l1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[C$.TITLE_WIDTH, C$.CONTROL_HEIGHT]));
var jm=Clazz.new_($I$(7).c$$D$D$D$D,[this._an.getRadius$(), 1.0, 50.0, 0.1]);
this.rad=Clazz.new_($I$(8).c$$javax_swing_SpinnerModel,[jm]);
this.rad.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(3).c$$I$I,[C$.CONTROL_WIDTH, C$.CONTROL_HEIGHT]));
radiusp.add$java_awt_Component(l1);
radiusp.add$java_awt_Component(this.rad);
this.rad.addChangeListener$javax_swing_event_ChangeListener(this);
var jp=Clazz.new_($I$(4));
jp.setLayout$java_awt_LayoutManager(Clazz.new_($I$(9).c$$I$I,[5, 1]));
jp.add$java_awt_Component(fromp);
jp.add$java_awt_Component(top);
jp.add$java_awt_Component(outlinep);
jp.add$java_awt_Component(fillp);
jp.add$java_awt_Component(radiusp);
this.panel.add$java_awt_Component(jp);
}, 1);

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getAngle$', function () {
return this._toSlider.getValue$();
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'show$', function () {
var accept=false;
var from=this._an.getMinIndex$();
var to=this._an.getMaxIndex$();
this._fromSlider.setValue$I(from);
this._toSlider.setValue$I(to);
if ($I$(10).showConfirmDialog$java_awt_Component$O$S$I$I(this._vp, this.getPanel$(), "Edit region annotation", 2, -1) == 0) {
accept=true;
}this._vp.repaint$();
return accept;
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
if ((e.getSource$() === this._toSlider ) || (e.getSource$() === this._fromSlider ) ) {
var from=this._fromSlider.getValue$();
var to=this._toSlider.getValue$();
if (from > to) {
if (e.getSource$().equals$O(this._fromSlider)) {
this._toSlider.setValue$I(from);
} else if (e.getSource$().equals$O(this._toSlider)) {
this._fromSlider.setValue$I(to);
}}from=this._fromSlider.getValue$();
to=this._toSlider.getValue$();
this._an.setBases$java_util_ArrayList(this._vp.getRNA$().getBasesBetween$I$I(from, to));
this._vp.repaint$();
} else if (e.getSource$().equals$O(this.rad)) {
var val=this.rad.getValue$();
if (Clazz.instanceOf(val, "java.lang.Double")) {
this._an.setRadius$D((val).doubleValue$());
}}});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (e.getActionCommand$().equals$O("outline")) {
var c=$I$(11).showDialog$java_awt_Component$S$java_awt_Color(this.getPanel$(), "Choose new outline color", this._an.getOutlineColor$());
if (c != null ) {
this._an.setOutlineColor$java_awt_Color(c);
}} else if (e.getActionCommand$().equals$O("fill")) {
var c=$I$(11).showDialog$java_awt_Component$S$java_awt_Color(this.getPanel$(), "Choose new fill color", this._an.getFillColor$());
if (c != null ) {
this._an.setFillColor$java_awt_Color(c);
}}this.outlineShow.setBackground$java_awt_Color(this._an.getOutlineColor$());
this.fillShow.setBackground$java_awt_Color(this._an.getFillColor$());
this._vp.repaint$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
