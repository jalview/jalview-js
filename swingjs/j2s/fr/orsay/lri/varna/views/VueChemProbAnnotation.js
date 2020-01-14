(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'javax.swing.JButton','javax.swing.JComboBox',['fr.orsay.lri.varna.models.annotations.ChemProbAnnotation','.ChemProbAnnotationType'],'javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JLabel','java.awt.Dimension','javax.swing.SpinnerNumberModel','javax.swing.JSpinner','java.awt.GridLayout','javax.swing.JOptionPane']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueChemProbAnnotation", null, null, ['javax.swing.event.ChangeListener', 'java.awt.event.ActionListener', 'java.awt.event.ItemListener']);
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
this.panel=null;
this._an=null;
this.color=null;
this.intensity=null;
this.outward=null;
this.type=null;
this._backup=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.color=Clazz.new_($I$(1));
this.outward=Clazz.new_($I$(2).c$$TEA,[Clazz.array(String, -1, ["Inward", "Outward"])]);
this.type=Clazz.new_($I$(2).c$$TEA,[$I$(3).values$()]);
this._backup=null;
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation', function (vp, an) {
C$.$init$.apply(this);
this._an=an;
this._vp=vp;
this.panel=Clazz.new_($I$(4));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5).c$$I,[0]));
var outlinep=Clazz.new_($I$(4));
var l1=Clazz.new_($I$(6).c$$S,["Color: "]);
l1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7).c$$I$I,[C$.TITLE_WIDTH, C$.CONTROL_HEIGHT]));
this.color.setContentAreaFilled$Z(false);
this.color.setOpaque$Z(true);
this.color.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7).c$$I$I,[C$.CONTROL_WIDTH, C$.CONTROL_HEIGHT]));
this.color.setBackground$java_awt_Color(this._an.getColor$());
this.color.addActionListener$java_awt_event_ActionListener(this);
this.color.setActionCommand$S("outline");
outlinep.add$java_awt_Component(l1);
outlinep.add$java_awt_Component(this.color);
var radiusp=Clazz.new_($I$(4));
l1=Clazz.new_($I$(6).c$$S,["Intensity: "]);
l1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7).c$$I$I,[C$.TITLE_WIDTH, C$.CONTROL_HEIGHT]));
var jm=Clazz.new_($I$(8).c$$D$D$D$D,[this._an.getIntensity$(), 0.01, 10.0, 0.01]);
this.intensity=Clazz.new_($I$(9).c$$javax_swing_SpinnerModel,[jm]);
radiusp.add$java_awt_Component(l1);
radiusp.add$java_awt_Component(this.intensity);
this.intensity.addChangeListener$javax_swing_event_ChangeListener(this);
var dirp=Clazz.new_($I$(4));
l1=Clazz.new_($I$(6).c$$S,["Direction: "]);
l1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7).c$$I$I,[C$.TITLE_WIDTH, C$.CONTROL_HEIGHT]));
this.outward.addItemListener$java_awt_event_ItemListener(this);
dirp.add$java_awt_Component(l1);
dirp.add$java_awt_Component(this.outward);
var typep=Clazz.new_($I$(4));
l1=Clazz.new_($I$(6).c$$S,["Type: "]);
l1.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7).c$$I$I,[C$.TITLE_WIDTH, C$.CONTROL_HEIGHT]));
this.type.addItemListener$java_awt_event_ItemListener(this);
typep.add$java_awt_Component(l1);
typep.add$java_awt_Component(this.type);
var jp=Clazz.new_($I$(4));
jp.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10).c$$I$I,[4, 1]));
jp.add$java_awt_Component(outlinep);
jp.add$java_awt_Component(radiusp);
jp.add$java_awt_Component(dirp);
jp.add$java_awt_Component(typep);
this.panel.add$java_awt_Component(jp);
}, 1);

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'show$', function () {
var accept=false;
this.intensity.setValue$O(new Double(this._an.getIntensity$()));
this.color.setBackground$java_awt_Color(this._an.getColor$());
this.type.setSelectedItem$O(this._an.getType$());
this.outward.setSelectedItem$O((this._an.isOut$() ? "Inward" : "Outward"));
if ($I$(11).showConfirmDialog$java_awt_Component$O$S$I$I(this._vp, this.getPanel$(), "Edit chemical probing annotation", 2, -1) == 0) {
accept=true;
}this._vp.repaint$();
return accept;
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
if (e.getSource$().equals$O(this.intensity)) {
var val=this.intensity.getValue$();
if (Clazz.instanceOf(val, "java.lang.Double")) {
this._an.setIntensity$D((val).doubleValue$());
this._vp.repaint$();
}}});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
if (e.getActionCommand$().equals$O("outline")) {
this._vp.getVARNAUI$().showColorDialog$S$O$Runnable("Choose new outline color", this._an.getColor$(), ((P$.VueChemProbAnnotation$1||
(function(){var C$=Clazz.newClass(P$, "VueChemProbAnnotation$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var c=this.b$['fr.orsay.lri.varna.views.VueChemProbAnnotation']._vp.getVARNAUI$().dialogReturnValue;
if (c != null ) {
this.b$['fr.orsay.lri.varna.views.VueChemProbAnnotation']._an.setColor$java_awt_Color(c);
this.b$['fr.orsay.lri.varna.views.VueChemProbAnnotation'].color.setBackground$java_awt_Color(this.b$['fr.orsay.lri.varna.views.VueChemProbAnnotation']._an.getColor$());
this.b$['fr.orsay.lri.varna.views.VueChemProbAnnotation']._vp.repaint$();
}});
})()
), Clazz.new_(P$.VueChemProbAnnotation$1.$init$, [this, null])));
}});

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (e) {
if (e.getSource$() === this.outward ) {
this._an.setOut$Z(!e.getItem$().equals$O("Outward"));
this._vp.repaint$();
} else if ((e.getSource$() === this.type ) && (Clazz.instanceOf(e.getItem$(), "fr.orsay.lri.varna.models.annotations.ChemProbAnnotation.ChemProbAnnotationType")) ) {
var t=e.getItem$();
this._an.setType$fr_orsay_lri_varna_models_annotations_ChemProbAnnotation_ChemProbAnnotationType(t);
this._vp.repaint$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
