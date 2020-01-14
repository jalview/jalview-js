(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),p$1={},I$=[[0,'fr.orsay.lri.varna.models.annotations.TextAnnotation',['fr.orsay.lri.varna.models.annotations.TextAnnotation','.AnchorType'],'fr.orsay.lri.varna.controlers.ControleurVueAnnotation','javax.swing.JPanel','java.awt.GridLayout','java.awt.FlowLayout','javax.swing.JSlider','java.awt.Dimension','javax.swing.JLabel','fr.orsay.lri.varna.controlers.ControleurSliderLabel','java.awt.BorderLayout','javax.swing.JTextArea',['javax.swing.plaf.basic.BasicBorders','.FieldBorder'],'java.awt.Color','fr.orsay.lri.varna.views.VueFont','javax.swing.JButton']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VueAnnotation");

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._vp=null;
this.ySlider=null;
this.xSlider=null;
this.colorButton=null;
this.textArea=null;
this.panel=null;
this.textAnnotation=null;
this.textAnnotationSave=null;
this.vueFont=null;
this._controleurVueAnnotation=null;
this.newAnnotation=false;
this.limited=false;
this.position=null;
this.rotationSlider=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$Z', function (vp, limited) {
C$.c$$fr_orsay_lri_varna_VARNAPanel$I$I$Z.apply(this, [vp, ((vp.getExtendedRNABBox$().x + vp.getExtendedRNABBox$().width / 2.0)|0), ((vp.getExtendedRNABBox$().y + vp.getExtendedRNABBox$().height / 2.0)|0), limited]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel', function (vp) {
C$.c$$fr_orsay_lri_varna_VARNAPanel$Z.apply(this, [vp, false]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$I$I', function (vp, x, y) {
C$.c$$fr_orsay_lri_varna_VARNAPanel$I$I$Z.apply(this, [vp, x, y, false]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$I$I$Z', function (vp, x, y, limited) {
C$.c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z$Z.apply(this, [vp, Clazz.new_($I$(1).c$$S$D$D,["", x, y]), false, true]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z', function (vp, textAnnot, newAnnotation) {
C$.c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z$Z.apply(this, [vp, textAnnot, (textAnnot.getType$() !== $I$(2).POSITION ), newAnnotation]);
}, 1);

Clazz.newMeth(C$, 'c$$fr_orsay_lri_varna_VARNAPanel$fr_orsay_lri_varna_models_annotations_TextAnnotation$Z$Z', function (vp, textAnnot, reduite, newAnnotation) {
C$.$init$.apply(this);
this.limited=reduite;
this.newAnnotation=newAnnotation;
this._vp=vp;
this.textAnnotation=textAnnot;
this.textAnnotationSave=this.textAnnotation.clone$();
if (!this._vp.getListeAnnotations$().contains$O(textAnnot)) {
this._vp.addAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(this.textAnnotation);
}this._controleurVueAnnotation=Clazz.new_($I$(3).c$$fr_orsay_lri_varna_views_VueAnnotation,[this]);
this.position=this.textAnnotation.getCenterPosition$();
var py=Clazz.new_($I$(4));
var px=Clazz.new_($I$(4));
this.panel=Clazz.new_($I$(4));
this.panel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(5).c$$I$I,[0, 1]));
py.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6).c$$I,[0]));
px.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6).c$$I,[0]));
this.ySlider=Clazz.new_($I$(7).c$$I$I$I$I,[0, 0, ((this._vp.getExtendedRNABBox$().height)|0), Math.max(0, Math.min(((this._vp.getExtendedRNABBox$().height)|0), ((this.position.y - this._vp.getExtendedRNABBox$().y)|0)))]);
this.ySlider.setMajorTickSpacing$I(500);
this.ySlider.setMinorTickSpacing$I(100);
this.ySlider.setPaintTicks$Z(true);
this.ySlider.setPaintLabels$Z(true);
this.ySlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[400, this.ySlider.getPreferredSize$().height]));
var yValueLabel=Clazz.new_($I$(9).c$$S,[String.valueOf$D((this.position.y|0) - this._vp.getExtendedRNABBox$().y)]);
yValueLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[50, yValueLabel.getPreferredSize$().height]));
this.ySlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(10).c$$javax_swing_JLabel$Z,[yValueLabel, false]));
this.ySlider.addChangeListener$javax_swing_event_ChangeListener(this._controleurVueAnnotation);
this.xSlider=Clazz.new_($I$(7).c$$I$I$I$I,[0, 0, ((this._vp.getExtendedRNABBox$().width)|0), Math.max(0, Math.min((this._vp.getExtendedRNABBox$().width|0), ((this.position.x - this._vp.getExtendedRNABBox$().x)|0)))]);
this.xSlider.setMajorTickSpacing$I(500);
this.xSlider.setMinorTickSpacing$I(100);
this.xSlider.setPaintTicks$Z(true);
this.xSlider.setPaintLabels$Z(true);
this.xSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[400, this.xSlider.getPreferredSize$().height]));
var xValueLabel=Clazz.new_($I$(9).c$$S,[String.valueOf$D((this.position.x|0) - this._vp.getExtendedRNABBox$().x)]);
xValueLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[50, xValueLabel.getPreferredSize$().height]));
this.xSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(10).c$$javax_swing_JLabel$Z,[xValueLabel, false]));
this.xSlider.addChangeListener$javax_swing_event_ChangeListener(this._controleurVueAnnotation);
var labelY=Clazz.new_($I$(9).c$$S,["Y:"]);
var labelX=Clazz.new_($I$(9).c$$S,["X:"]);
py.add$java_awt_Component(labelY);
py.add$java_awt_Component(this.ySlider);
py.add$java_awt_Component(yValueLabel);
px.add$java_awt_Component(labelX);
px.add$java_awt_Component(this.xSlider);
px.add$java_awt_Component(xValueLabel);
var panelTexte=Clazz.new_($I$(4));
panelTexte.setLayout$java_awt_LayoutManager(Clazz.new_($I$(11)));
this.textArea=Clazz.new_($I$(12).c$$S,[this.textAnnotation.getTexte$()]);
this.textArea.addCaretListener$javax_swing_event_CaretListener(this._controleurVueAnnotation);
this.textArea.setPreferredSize$java_awt_Dimension(panelTexte.getSize$());
var border=Clazz.new_($I$(13).c$$java_awt_Color$java_awt_Color$java_awt_Color$java_awt_Color,[$I$(14).black, $I$(14).black, $I$(14).black, $I$(14).black]);
this.textArea.setBorder$javax_swing_border_Border(border);
var labelTexte=Clazz.new_($I$(9).c$$S,["Text:"]);
panelTexte.add$java_awt_Component$O(this.textArea, "Center");
panelTexte.add$java_awt_Component$O(labelTexte, "North");
this.panel.add$java_awt_Component(panelTexte);
this.vueFont=Clazz.new_($I$(15).c$$java_awt_Font,[textAnnot.getFont$()]);
this.vueFont.getBoxPolice$().addActionListener$java_awt_event_ActionListener(this._controleurVueAnnotation);
this.vueFont.getSizeSlider$().addChangeListener$javax_swing_event_ChangeListener(this._controleurVueAnnotation);
this.vueFont.getStylesBox$().addActionListener$java_awt_event_ActionListener(this._controleurVueAnnotation);
this.colorButton=Clazz.new_($I$(16).c$$S,["Set color"]);
this.colorButton.setActionCommand$S("setcolor");
this.colorButton.setForeground$java_awt_Color(textAnnot.getColor$());
this.colorButton.addActionListener$java_awt_event_ActionListener(this._controleurVueAnnotation);
var fontAndColor=Clazz.new_($I$(4));
fontAndColor.add$java_awt_Component(this.vueFont.getPanel$());
fontAndColor.add$java_awt_Component(this.colorButton);
this.panel.add$java_awt_Component(fontAndColor);
var rotationPanel=Clazz.new_($I$(4));
this.rotationSlider=Clazz.new_($I$(7).c$$I$I$I$I,[0, -360, 360, (this.textAnnotation.getAngleInDegres$()|0)]);
this.rotationSlider.setMajorTickSpacing$I(60);
this.rotationSlider.setPaintTicks$Z(true);
this.rotationSlider.setPaintLabels$Z(true);
this.rotationSlider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[500, 50]));
var rotationLabel=Clazz.new_($I$(9).c$$S,[String.valueOf$I(0)]);
rotationLabel.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[50, rotationLabel.getPreferredSize$().height]));
this.rotationSlider.addChangeListener$javax_swing_event_ChangeListener(Clazz.new_($I$(10).c$$javax_swing_JLabel$Z,[rotationLabel, false]));
this.rotationSlider.addChangeListener$javax_swing_event_ChangeListener(this._controleurVueAnnotation);
var labelZ=Clazz.new_($I$(9).c$$S,["Rotation (degrees):"]);
rotationPanel.add$java_awt_Component(labelZ);
rotationPanel.add$java_awt_Component(this.rotationSlider);
rotationPanel.add$java_awt_Component(rotationLabel);
if (this.limited) {
this.ySlider.setEnabled$Z(false);
this.xSlider.setEnabled$Z(false);
this.rotationSlider.setEnabled$Z(false);
}this.textArea.requestFocusInWindow$();
}, 1);

Clazz.newMeth(C$, 'applyFont', function () {
this.textAnnotation.setFont$java_awt_Font(this.vueFont.getFont$());
}, p$1);

Clazz.newMeth(C$, 'update$', function () {
p$1.applyFont.apply(this, []);
if (this.textAnnotation.getType$() === $I$(2).POSITION ) this.textAnnotation.setAncrage$D$D(this.xSlider.getValue$() + this._vp.getExtendedRNABBox$().x, this.ySlider.getValue$() + this._vp.getExtendedRNABBox$().y);
this.textAnnotation.setText$S(this.textArea.getText$());
this.textAnnotation.setAngleInDegres$D(this.rotationSlider.getValue$());
this._vp.clearSelection$();
this._vp.repaint$();
});

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'getTextAnnotation$', function () {
return this.textAnnotation;
});

Clazz.newMeth(C$, 'get_vp$', function () {
return this._vp;
});

Clazz.newMeth(C$, 'show$', function () {
this._vp.set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(this.textAnnotation);
this._vp.highlightSelectedAnnotation$();
var ok=((P$.VueAnnotation$1||
(function(){var C$=Clazz.newClass(P$, "VueAnnotation$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueAnnotation'].update$.apply(this.b$['fr.orsay.lri.varna.views.VueAnnotation'], []);
});
})()
), Clazz.new_(P$.VueAnnotation$1.$init$, [this, null]));
var cancel=((P$.VueAnnotation$2||
(function(){var C$=Clazz.newClass(P$, "VueAnnotation$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['fr.orsay.lri.varna.views.VueAnnotation'].newAnnotation) {
this.b$['fr.orsay.lri.varna.views.VueAnnotation']._vp.set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(null);
if (!this.b$['fr.orsay.lri.varna.views.VueAnnotation']._vp.removeAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(this.b$['fr.orsay.lri.varna.views.VueAnnotation'].textAnnotation)) this.b$['fr.orsay.lri.varna.views.VueAnnotation']._vp.errorDialog$Exception(Clazz.new_(Clazz.load('Exception').c$$S,["Impossible de supprimer"]));
} else {
this.b$['fr.orsay.lri.varna.views.VueAnnotation'].textAnnotation.copy$fr_orsay_lri_varna_models_annotations_TextAnnotation(this.b$['fr.orsay.lri.varna.views.VueAnnotation'].textAnnotationSave);
}});
})()
), Clazz.new_(P$.VueAnnotation$2.$init$, [this, null]));
var final_=((P$.VueAnnotation$3||
(function(){var C$=Clazz.newClass(P$, "VueAnnotation$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['fr.orsay.lri.varna.views.VueAnnotation']._vp.resetAnnotationHighlight$();
this.b$['fr.orsay.lri.varna.views.VueAnnotation']._vp.set_selectedAnnotation$fr_orsay_lri_varna_models_annotations_TextAnnotation(null);
this.b$['fr.orsay.lri.varna.views.VueAnnotation']._vp.repaint$();
});
})()
), Clazz.new_(P$.VueAnnotation$3.$init$, [this, null]));
this._vp.getVARNAUI$().showConfirmDialog$javax_swing_JPanel$S$Runnable$Runnable$RunnableA(this.getPanel$(), "Add/edit annotation", ok, cancel, [cancel, final_]);
});

Clazz.newMeth(C$, 'isLimited$', function () {
return this.limited;
});

Clazz.newMeth(C$, 'setLimited$Z', function (limited) {
this.limited=limited;
});

Clazz.newMeth(C$, 'isNewAnnotation$', function () {
return this.newAnnotation;
});

Clazz.newMeth(C$, 'updateColor$java_awt_Color', function (c) {
this.colorButton.setForeground$java_awt_Color(c);
this.textAnnotation.setColor$java_awt_Color(c);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:47 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
