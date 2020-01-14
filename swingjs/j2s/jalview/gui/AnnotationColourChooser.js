(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JCheckBox','javax.swing.JPanel','java.util.Hashtable','javax.swing.JInternalFrame','javax.swing.JLayeredPane','jalview.gui.Desktop','jalview.util.MessageManager','java.awt.Dimension','javax.swing.JComboBox','Error','jalview.gui.JvSwingUtils','javax.swing.BorderFactory','java.awt.event.MouseAdapter','javax.swing.JButton','java.awt.Color','java.awt.BorderLayout','net.miginfocom.swing.MigLayout','java.awt.FlowLayout','jalview.bin.Cache','jalview.gui.JalviewColourChooser','jalview.datamodel.GraphLine','jalview.schemes.AnnotationColourGradient']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AnnotationColourChooser", null, 'jalview.gui.AnnotationRowFilter');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.oldcs=null;
this.defColours=null;
this.oldgroupColours=null;
this.useOriginalColours=null;
this.minColour=null;
this.maxColour=null;
this.thresholdIsMin=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.useOriginalColours=Clazz.new_($I$(1));
this.minColour=Clazz.new_($I$(2));
this.maxColour=Clazz.new_($I$(2));
this.thresholdIsMin=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel', function (av, ap) {
C$.superclazz.c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel.apply(this, [av, ap]);
C$.$init$.apply(this);
this.oldcs=av.getGlobalColourScheme$();
if (av.getAlignment$().getGroups$() != null ) {
this.oldgroupColours=Clazz.new_($I$(3));
for (var sg, $sg = ap.av.getAlignment$().getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.getColourScheme$() != null ) {
this.oldgroupColours.put$TK$TV(sg, sg.getColourScheme$());
}}
}this.frame=Clazz.new_($I$(4));
this.frame.setContentPane$java_awt_Container(this);
this.frame.setLayer$Integer($I$(5).PALETTE_LAYER);
$I$(6).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this.frame, $I$(7).getString$S("label.colour_by_annotation"), 520, 215);
this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[500, 240]));
this.addSliderChangeListener$();
this.addSliderMouseListeners$();
if (av.getAlignment$().getAlignmentAnnotation$() == null ) {
return;
}p$1.setDefaultMinMax.apply(this, []);
this.adjusting=true;
if (Clazz.instanceOf(this.oldcs, "jalview.schemes.AnnotationColourGradient")) {
var acg=this.oldcs;
this.useOriginalColours.setSelected$Z(acg.isPredefinedColours$() || acg.getBaseColour$() != null  );
if (!acg.isPredefinedColours$() && acg.getBaseColour$() == null  ) {
this.minColour.setBackground$java_awt_Color(acg.getMinColour$());
this.maxColour.setBackground$java_awt_Color(acg.getMaxColour$());
}this.seqAssociated.setSelected$Z(acg.isSeqAssociated$());
}var annotItems=this.getAnnotationItems$Z(this.seqAssociated.isSelected$());
this.annotations=Clazz.new_($I$(9).c$$java_util_Vector,[annotItems]);
this.populateThresholdComboBox$javax_swing_JComboBox(this.threshold);
if (Clazz.instanceOf(this.oldcs, "jalview.schemes.AnnotationColourGradient")) {
var acg=this.oldcs;
var label=this.getAnnotationMenuLabel$jalview_datamodel_AlignmentAnnotation(acg.getAnnotation$());
this.annotations.setSelectedItem$O(label);
switch (acg.getAboveThreshold$()) {
case -1:
this.getThreshold$().setSelectedIndex$I(0);
break;
case 1:
this.getThreshold$().setSelectedIndex$I(1);
break;
case 0:
this.getThreshold$().setSelectedIndex$I(2);
break;
default:
throw Clazz.new_($I$(10).c$$S,[$I$(7).getString$S("error.implementation_error_dont_know_about_threshold_setting")]);
}
this.thresholdIsMin.setSelected$Z(acg.isThresholdIsMinMax$());
this.thresholdValue.setText$S("" + new Float(acg.getAnnotationThreshold$()).toString());
}this.jbInit$();
this.adjusting=false;
this.updateView$();
this.frame.invalidate$();
this.frame.pack$();
}, 1);

Clazz.newMeth(C$, 'jbInit$', function () {
C$.superclazz.prototype.jbInit$.apply(this, []);
this.minColour.setFont$java_awt_Font($I$(11).getLabelFont$());
this.minColour.setBorder$javax_swing_border_Border($I$(12).createEtchedBorder$());
this.minColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[40, 20]));
this.minColour.setToolTipText$S($I$(7).getString$S("label.min_colour"));
this.minColour.addMouseListener$java_awt_event_MouseListener(((P$.AnnotationColourChooser$1||
(function(){var C$=Clazz.newClass(P$, "AnnotationColourChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (this.b$['jalview.gui.AnnotationColourChooser'].minColour.isEnabled$()) {
this.b$['jalview.gui.AnnotationColourChooser'].showColourChooser$javax_swing_JPanel$S.apply(this.b$['jalview.gui.AnnotationColourChooser'], [this.b$['jalview.gui.AnnotationColourChooser'].minColour, "label.select_colour_minimum_value"]);
}});
})()
), Clazz.new_($I$(13), [this, null],P$.AnnotationColourChooser$1)));
this.maxColour.setFont$java_awt_Font($I$(11).getLabelFont$());
this.maxColour.setBorder$javax_swing_border_Border($I$(12).createEtchedBorder$());
this.maxColour.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(8).c$$I$I,[40, 20]));
this.maxColour.setToolTipText$S($I$(7).getString$S("label.max_colour"));
this.maxColour.addMouseListener$java_awt_event_MouseListener(((P$.AnnotationColourChooser$2||
(function(){var C$=Clazz.newClass(P$, "AnnotationColourChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (this.b$['jalview.gui.AnnotationColourChooser'].maxColour.isEnabled$()) {
this.b$['jalview.gui.AnnotationColourChooser'].showColourChooser$javax_swing_JPanel$S.apply(this.b$['jalview.gui.AnnotationColourChooser'], [this.b$['jalview.gui.AnnotationColourChooser'].maxColour, "label.select_colour_maximum_value"]);
}});
})()
), Clazz.new_($I$(13), [this, null],P$.AnnotationColourChooser$2)));
this.defColours=Clazz.new_($I$(14));
this.defColours.setOpaque$Z(false);
this.defColours.setText$S($I$(7).getString$S("action.set_defaults"));
this.defColours.setToolTipText$S($I$(7).getString$S("label.reset_min_max_colours_to_defaults"));
this.defColours.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColourChooser$3||
(function(){var C$=Clazz.newClass(P$, "AnnotationColourChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
this.b$['jalview.gui.AnnotationColourChooser'].resetColours_actionPerformed$.apply(this.b$['jalview.gui.AnnotationColourChooser'], []);
});
})()
), Clazz.new_(P$.AnnotationColourChooser$3.$init$, [this, null])));
this.useOriginalColours.setFont$java_awt_Font($I$(11).getLabelFont$());
this.useOriginalColours.setOpaque$Z(false);
this.useOriginalColours.setText$S($I$(7).getString$S("label.use_original_colours"));
this.useOriginalColours.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColourChooser$4||
(function(){var C$=Clazz.newClass(P$, "AnnotationColourChooser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.AnnotationColourChooser'].originalColours_actionPerformed$.apply(this.b$['jalview.gui.AnnotationColourChooser'], []);
});
})()
), Clazz.new_(P$.AnnotationColourChooser$4.$init$, [this, null])));
this.thresholdIsMin.setBackground$java_awt_Color($I$(15).white);
this.thresholdIsMin.setFont$java_awt_Font($I$(11).getLabelFont$());
this.thresholdIsMin.setText$S($I$(7).getString$S("label.threshold_minmax"));
this.thresholdIsMin.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColourChooser$5||
(function(){var C$=Clazz.newClass(P$, "AnnotationColourChooser$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (actionEvent) {
this.b$['jalview.gui.AnnotationRowFilter'].thresholdIsMin_actionPerformed$.apply(this.b$['jalview.gui.AnnotationRowFilter'], []);
});
})()
), Clazz.new_(P$.AnnotationColourChooser$5.$init$, [this, null])));
this.seqAssociated.setBackground$java_awt_Color($I$(15).white);
this.seqAssociated.setFont$java_awt_Font($I$(11).getLabelFont$());
this.seqAssociated.setText$S($I$(7).getString$S("label.per_sequence_only"));
this.seqAssociated.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColourChooser$6||
(function(){var C$=Clazz.newClass(P$, "AnnotationColourChooser$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (arg0) {
this.b$['jalview.gui.AnnotationRowFilter'].seqAssociated_actionPerformed$javax_swing_JComboBox.apply(this.b$['jalview.gui.AnnotationRowFilter'], [this.b$['jalview.gui.AnnotationColourChooser'].annotations]);
});
})()
), Clazz.new_(P$.AnnotationColourChooser$6.$init$, [this, null])));
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(16)));
var jPanel1=Clazz.new_($I$(2));
var jPanel2=Clazz.new_($I$(2));
jPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(17).c$$S$S$S,["", "[left][center][right]", "[][][]"]));
jPanel1.setBackground$java_awt_Color($I$(15).white);
jPanel2.setBackground$java_awt_Color($I$(15).white);
jPanel1.add$java_awt_Component(this.ok);
jPanel1.add$java_awt_Component(this.cancel);
jPanel2.add$java_awt_Component$O(this.annotations, "grow, wrap");
jPanel2.add$java_awt_Component(this.seqAssociated);
jPanel2.add$java_awt_Component(this.useOriginalColours);
var colpanel=Clazz.new_($I$(2).c$$java_awt_LayoutManager,[Clazz.new_($I$(18))]);
colpanel.setBackground$java_awt_Color($I$(15).white);
colpanel.add$java_awt_Component(this.minColour);
colpanel.add$java_awt_Component(this.maxColour);
jPanel2.add$java_awt_Component$O(colpanel, "wrap");
jPanel2.add$java_awt_Component(this.getThreshold$());
jPanel2.add$java_awt_Component$O(this.defColours, "skip 1, wrap");
jPanel2.add$java_awt_Component(this.thresholdIsMin);
jPanel2.add$java_awt_Component$O(this.slider, "grow");
jPanel2.add$java_awt_Component$O(this.thresholdValue, "grow");
this.add$java_awt_Component$O(jPanel1, "South");
this.add$java_awt_Component$O(jPanel2, "Center");
this.validate$();
});

Clazz.newMeth(C$, 'resetColours_actionPerformed$', function () {
p$1.setDefaultMinMax.apply(this, []);
this.updateView$();
});

Clazz.newMeth(C$, 'setDefaultMinMax', function () {
this.minColour.setBackground$java_awt_Color($I$(19).getDefaultColour$S$java_awt_Color("ANNOTATIONCOLOUR_MIN", $I$(15).orange));
this.maxColour.setBackground$java_awt_Color($I$(19).getDefaultColour$S$java_awt_Color("ANNOTATIONCOLOUR_MAX", $I$(15).red));
}, p$1);

Clazz.newMeth(C$, 'showColourChooser$javax_swing_JPanel$S', function (colourPanel, titleKey) {
var ttl=$I$(7).getString$S(titleKey);
var listener=((P$.AnnotationColourChooser$7||
(function(){var C$=Clazz.newClass(P$, "AnnotationColourChooser$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['colourSelected$java_awt_Color','colourSelected$'], function (c) {
this.$finals$.colourPanel.setBackground$java_awt_Color(c);
this.$finals$.colourPanel.repaint$();
this.b$['jalview.gui.AnnotationColourChooser'].updateView$.apply(this.b$['jalview.gui.AnnotationColourChooser'], []);
});
})()
), Clazz.new_(P$.AnnotationColourChooser$7.$init$, [this, {colourPanel: colourPanel}]));
$I$(20).showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener($I$(6).getDesktop$(), ttl, colourPanel.getBackground$(), listener);
});

Clazz.newMeth(C$, 'reset$', function () {
this.ap.alignFrame.changeColour$jalview_schemes_ColourSchemeI(this.oldcs);
if (this.av.getAlignment$().getGroups$() != null ) {
for (var sg, $sg = this.ap.av.getAlignment$().getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
sg.setColourScheme$jalview_schemes_ColourSchemeI(this.oldgroupColours.get$O(sg));
}
}});

Clazz.newMeth(C$, 'valueChanged$Z', function (updateAllAnnotation) {
if (this.slider.isEnabled$()) {
if (this.useOriginalColours.isSelected$() && !(Clazz.instanceOf(this.av.getGlobalColourScheme$(), "jalview.schemes.AnnotationColourGradient")) ) {
this.updateView$();
}this.getCurrentAnnotation$().threshold.value=this.slider.getValue$() / 1000.0;
this.propagateSeqAssociatedThreshold$Z$jalview_datamodel_AlignmentAnnotation(updateAllAnnotation, this.getCurrentAnnotation$());
this.ap.paintAlignment$Z$Z(false, false);
}});

Clazz.newMeth(C$, 'originalColours_actionPerformed$', function () {
var selected=this.useOriginalColours.isSelected$();
if (selected) {
this.reset$();
}this.maxColour.setEnabled$Z(!selected);
this.minColour.setEnabled$Z(!selected);
this.thresholdIsMin.setEnabled$Z(!selected);
this.updateView$();
});

Clazz.newMeth(C$, 'updateView$', function () {
if (this.adjusting) {
return;
}this.setCurrentAnnotation$jalview_datamodel_AlignmentAnnotation(this.av.getAlignment$().getAlignmentAnnotation$()[this.annmap[this.annotations.getSelectedIndex$()]]);
var selectedThresholdItem=this.getSelectedThresholdItem$I(this.getThreshold$().getSelectedIndex$());
this.slider.setEnabled$Z(true);
this.thresholdValue.setEnabled$Z(true);
this.thresholdIsMin.setEnabled$Z(!this.useOriginalColours.isSelected$());
if (selectedThresholdItem == -1) {
this.slider.setEnabled$Z(false);
this.thresholdValue.setEnabled$Z(false);
this.thresholdValue.setText$S("");
this.thresholdIsMin.setEnabled$Z(false);
} else if (selectedThresholdItem != -1 && this.getCurrentAnnotation$().threshold == null  ) {
this.getCurrentAnnotation$().setThreshold$jalview_datamodel_GraphLine(Clazz.new_($I$(21).c$$F$S$java_awt_Color,[(this.getCurrentAnnotation$().graphMax - this.getCurrentAnnotation$().graphMin) / 2.0, "Threshold", $I$(15).black]));
}if (selectedThresholdItem != -1) {
this.adjusting=true;
var range=this.getCurrentAnnotation$().graphMax * 1000 - this.getCurrentAnnotation$().graphMin * 1000;
this.slider.setMinimum$I(((this.getCurrentAnnotation$().graphMin * 1000)|0));
this.slider.setMaximum$I(((this.getCurrentAnnotation$().graphMax * 1000)|0));
this.slider.setValue$I(((this.getCurrentAnnotation$().threshold.value * 1000)|0));
this.thresholdValue.setText$S(new Float(this.getCurrentAnnotation$().threshold.value).toString() + "");
this.slider.setMajorTickSpacing$I(((range / 10.0)|0));
this.slider.setEnabled$Z(true);
this.thresholdValue.setEnabled$Z(true);
this.adjusting=false;
}this.colorAlignmentContaining$jalview_datamodel_AlignmentAnnotation$I(this.getCurrentAnnotation$(), selectedThresholdItem);
this.ap.alignmentChanged$();
});

Clazz.newMeth(C$, 'colorAlignmentContaining$jalview_datamodel_AlignmentAnnotation$I', function (currentAnn, selectedThresholdOption) {
var acg=null;
if (this.useOriginalColours.isSelected$()) {
acg=Clazz.new_($I$(22).c$$jalview_datamodel_AlignmentAnnotation$jalview_schemes_ColourSchemeI$I,[currentAnn, this.av.getGlobalColourScheme$(), selectedThresholdOption]);
} else {
acg=Clazz.new_($I$(22).c$$jalview_datamodel_AlignmentAnnotation$java_awt_Color$java_awt_Color$I,[currentAnn, this.minColour.getBackground$(), this.maxColour.getBackground$(), selectedThresholdOption]);
}acg.setSeqAssociated$Z(this.seqAssociated.isSelected$());
if (currentAnn.graphMin == 0.0  && currentAnn.graphMax == 0.0  ) {
acg.setPredefinedColours$Z(true);
}acg.setThresholdIsMinMax$Z(this.thresholdIsMin.isSelected$());
this.ap.alignFrame.changeColour$jalview_schemes_ColourSchemeI(acg);
if (this.av.getAlignment$().getGroups$() != null ) {
for (var sg, $sg = this.ap.av.getAlignment$().getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.cs == null ) {
continue;
}sg.setColourScheme$jalview_schemes_ColourSchemeI(acg.getInstance$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI(this.av, sg));
}
}});

Clazz.newMeth(C$, 'sliderDragReleased$', function () {
C$.superclazz.prototype.sliderDragReleased$.apply(this, []);
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
