(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.Choice','java.awt.Button','java.awt.Panel','java.awt.FlowLayout','java.awt.Scrollbar','java.awt.TextField','java.awt.Checkbox','java.awt.BorderLayout','java.util.HashMap','jalview.util.MessageManager','Error','java.awt.Frame','jalview.bin.JalviewLite','java.util.Vector','java.awt.Color','java.awt.Font','java.awt.Dimension','jalview.appletgui.UserDefinedColours','jalview.datamodel.GraphLine','jalview.schemes.AnnotationColourGradient']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationColourChooser", null, 'java.awt.Panel', ['java.awt.event.ActionListener', 'java.awt.event.AdjustmentListener', 'java.awt.event.ItemListener', 'java.awt.event.MouseListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.adjusting=false;
this.annotations=Clazz.new_($I$(1,1));
this.minColour=Clazz.new_($I$(2,1));
this.maxColour=Clazz.new_($I$(2,1));
this.ok=Clazz.new_($I$(2,1));
this.cancel=Clazz.new_($I$(2,1));
this.defColours=Clazz.new_($I$(2,1));
this.jPanel1=Clazz.new_($I$(3,1));
this.jPanel2=Clazz.new_($I$(3,1));
this.threshold=Clazz.new_($I$(1,1));
this.flowLayout1=Clazz.new_($I$(4,1));
this.jPanel3=Clazz.new_($I$(3,1));
this.slider=Clazz.new_($I$(5,1).c$$I,[0]);
this.thresholdValue=Clazz.new_($I$(6,1).c$$I,[20]);
this.currentColours=Clazz.new_($I$(7,1));
this.borderLayout1=Clazz.new_($I$(8,1));
this.thresholdIsMin=Clazz.new_($I$(7,1));
},1);

C$.$fields$=[['Z',['adjusting'],'O',['frame','java.awt.Frame','av','jalview.appletgui.AlignViewport','ap','jalview.appletgui.AlignmentPanel','oldcs','jalview.schemes.ColourSchemeI','oldgroupColours','java.util.Map','+annotationLabels','currentAnnotation','jalview.datamodel.AlignmentAnnotation','annotations','java.awt.Choice','minColour','java.awt.Button','+maxColour','+ok','+cancel','+defColours','jPanel1','java.awt.Panel','+jPanel2','threshold','java.awt.Choice','flowLayout1','java.awt.FlowLayout','jPanel3','java.awt.Panel','slider','java.awt.Scrollbar','thresholdValue','java.awt.TextField','currentColours','java.awt.Checkbox','borderLayout1','java.awt.BorderLayout','thresholdIsMin','java.awt.Checkbox']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel',  function (av, ap) {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.oldcs=av.getGlobalColourScheme$();
if (av.getAlignment$().getGroups$() != null ) {
this.oldgroupColours=Clazz.new_($I$(9,1));
for (var sg, $sg = ap.av.getAlignment$().getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
this.oldgroupColours.put$O$O(sg, sg.getColourScheme$());
}
}this.av=av;
this.ap=ap;
this.slider.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.slider.addMouseListener$java_awt_event_MouseListener(this);
var anns=av.getAlignment$().getAlignmentAnnotation$();
if (anns == null ) {
return;
}p$1.setDefaultMinMax.apply(this, []);
this.adjusting=true;
if (Clazz.instanceOf(this.oldcs, "jalview.schemes.AnnotationColourGradient")) {
var acg=this.oldcs;
this.currentColours.setState$Z(acg.isPredefinedColours$() || acg.getBaseColour$() != null  );
if (!acg.isPredefinedColours$() && acg.getBaseColour$() == null  ) {
this.minColour.setBackground$java_awt_Color(acg.getMinColour$());
this.maxColour.setBackground$java_awt_Color(acg.getMaxColour$());
}}var list=this.getAnnotationItems$();
for (var i=0; i < list.size$(); i++) {
this.annotations.addItem$S(list.elementAt$I(i).toString());
}
this.threshold.addItem$S($I$(10).getString$S("label.threshold_feature_no_threshold"));
this.threshold.addItem$S($I$(10).getString$S("label.threshold_feature_above_threshold"));
this.threshold.addItem$S($I$(10).getString$S("label.threshold_feature_below_threshold"));
if (Clazz.instanceOf(this.oldcs, "jalview.schemes.AnnotationColourGradient")) {
var acg=this.oldcs;
var label=this.annotationLabels.get$O(acg.getAnnotation$());
this.annotations.select$S(label);
switch (acg.getAboveThreshold$()) {
case -1:
this.threshold.select$I(0);
break;
case 1:
this.threshold.select$I(1);
break;
case 0:
this.threshold.select$I(1);
break;
default:
throw Clazz.new_([$I$(10).getString$S("error.implementation_error_dont_know_threshold_annotationcolourgradient")],$I$(11,1).c$$S);
}
this.thresholdIsMin.setState$Z(acg.isThresholdIsMinMax$());
this.thresholdValue.setText$S("" + new Float(acg.getAnnotationThreshold$()).toString());
}this.adjusting=false;
this.changeColour$();
this.frame=Clazz.new_($I$(12,1));
this.frame.add$java_awt_Component(this);
$I$(13,"addFrame$java_awt_Frame$S$I$I",[this.frame, $I$(10).getString$S("label.colour_by_annotation"), 560, 175]);
this.validate$();
}, 1);

Clazz.newMeth(C$, 'getAnnotationItems$',  function () {
this.annotationLabels=Clazz.new_($I$(9,1));
var list=Clazz.new_($I$(14,1));
var anns=this.av.getAlignment$().getAlignmentAnnotation$();
if (anns == null ) {
return list;
}var index=1;
for (var i=0; i < anns.length; i++) {
var label=anns[i].label;
if (anns[i].sequenceRef != null ) {
label=label + "_" + anns[i].sequenceRef.getName$() ;
}if (!list.contains$O(label)) {
list.addElement$O(label);
this.annotationLabels.put$O$O(anns[i], label);
} else {
label=label + "_" + (index++) ;
list.addElement$O(label);
this.annotationLabels.put$O$O(anns[i], label);
}}
return list;
});

Clazz.newMeth(C$, 'setDefaultMinMax',  function () {
this.minColour.setBackground$java_awt_Color(this.av.applet.getDefaultColourParameter$S$java_awt_Color("ANNOTATIONCOLOUR_MIN", $I$(15).orange));
this.maxColour.setBackground$java_awt_Color(this.av.applet.getDefaultColourParameter$S$java_awt_Color("ANNOTATIONCOLOUR_MAX", $I$(15).red));
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'jbInit',  function () {
this.minColour.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Verdana", 0, 11]));
this.minColour.setLabel$S($I$(10).getString$S("label.min_colour"));
this.minColour.addActionListener$java_awt_event_ActionListener(this);
this.maxColour.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Verdana", 0, 11]));
this.maxColour.setLabel$S($I$(10).getString$S("label.max_colour"));
this.maxColour.addActionListener$java_awt_event_ActionListener(this);
this.thresholdIsMin.addItemListener$java_awt_event_ItemListener(this);
this.ok.setLabel$S($I$(10).getString$S("action.ok"));
this.ok.addActionListener$java_awt_event_ActionListener(this);
this.cancel.setLabel$S($I$(10).getString$S("action.cancel"));
this.cancel.addActionListener$java_awt_event_ActionListener(this);
this.defColours.setLabel$S($I$(10).getString$S("action.set_defaults"));
this.defColours.addActionListener$java_awt_event_ActionListener(this);
this.annotations.addItemListener$java_awt_event_ItemListener(this);
this.thresholdValue.addActionListener$java_awt_event_ActionListener(this);
this.slider.setBackground$java_awt_Color($I$(15).white);
this.slider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[193, 21]));
this.slider.setEnabled$Z(false);
this.thresholdValue.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[79, 22]));
this.thresholdValue.setEnabled$Z(false);
this.thresholdValue.setColumns$I(5);
this.currentColours.setFont$java_awt_Font(Clazz.new_($I$(16,1).c$$S$I$I,["Verdana", 0, 11]));
this.currentColours.setLabel$S($I$(10).getString$S("label.use_original_colours"));
this.currentColours.addItemListener$java_awt_event_ItemListener(this);
this.thresholdIsMin.setBackground$java_awt_Color($I$(15).white);
this.thresholdIsMin.setLabel$S($I$(10).getString$S("label.threshold_minmax"));
this.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.jPanel1.setBackground$java_awt_Color($I$(15).white);
this.jPanel2.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1)));
this.jPanel2.setBackground$java_awt_Color($I$(15).white);
this.threshold.addItemListener$java_awt_event_ItemListener(this);
this.jPanel3.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1)));
this.jPanel3.setBackground$java_awt_Color($I$(15).white);
var jPanel4=Clazz.new_($I$(3,1));
jPanel4.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
jPanel4.setBackground$java_awt_Color($I$(15).white);
this.jPanel1.add$java_awt_Component(this.ok);
this.jPanel1.add$java_awt_Component(this.cancel);
this.jPanel2.add$java_awt_Component(this.annotations);
this.jPanel2.add$java_awt_Component(this.currentColours);
this.jPanel2.add$java_awt_Component(this.minColour);
this.jPanel2.add$java_awt_Component(this.maxColour);
jPanel4.add$java_awt_Component$O(this.thresholdIsMin, "West");
jPanel4.add$java_awt_Component$O(this.slider, "Center");
jPanel4.add$java_awt_Component$O(this.thresholdValue, "East");
var jPanel34=Clazz.new_($I$(3,1));
jPanel34.setLayout$java_awt_LayoutManager(Clazz.new_($I$(8,1)));
jPanel34.setBackground$java_awt_Color($I$(15).white);
jPanel34.add$java_awt_Component$O(this.jPanel2, "North");
jPanel34.add$java_awt_Component$O(this.threshold, "West");
this.jPanel3.add$java_awt_Component(this.defColours);
jPanel34.add$java_awt_Component$O(this.jPanel3, "East");
jPanel34.add$java_awt_Component$O(jPanel4, "South");
this.add$java_awt_Component$O(jPanel34, "Center");
this.add$java_awt_Component$O(this.jPanel1, "South");
}, p$1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
if (evt.getSource$() === this.thresholdValue ) {
try {
var f=Float.valueOf$S(this.thresholdValue.getText$()).floatValue$();
this.slider.setValue$I(((f * 1000)|0));
this.adjustmentValueChanged$java_awt_event_AdjustmentEvent(null);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
} else if (evt.getSource$() === this.minColour ) {
this.minColour_actionPerformed$java_awt_Color(null);
} else if (evt.getSource$() === this.maxColour ) {
this.maxColour_actionPerformed$java_awt_Color(null);
} else if (evt.getSource$() === this.defColours ) {
this.defColour_actionPerformed$();
} else if (evt.getSource$() === this.ok ) {
this.frame.setVisible$Z(false);
} else if (evt.getSource$() === this.cancel ) {
this.reset$();
this.ap.paintAlignment$Z$Z(true, true);
this.frame.setVisible$Z(false);
} else {
this.changeColour$();
}});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (evt.getSource$() === this.currentColours ) {
if (this.currentColours.getState$()) {
this.reset$();
}this.maxColour.setEnabled$Z(!this.currentColours.getState$());
this.minColour.setEnabled$Z(!this.currentColours.getState$());
}this.changeColour$();
});

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent',  function (evt) {
if (!this.adjusting) {
this.thresholdValue.setText$S((new Float(this.slider.getValue$() / 1000.0).toString()) + "");
if (this.currentColours.getState$() && !(Clazz.instanceOf(this.av.getGlobalColourScheme$(), "jalview.schemes.AnnotationColourGradient")) ) {
this.changeColour$();
}this.currentAnnotation.threshold.value=this.slider.getValue$() / 1000.0;
this.ap.paintAlignment$Z$Z(false, false);
}});

Clazz.newMeth(C$, 'minColour_actionPerformed$java_awt_Color',  function (newCol) {
if (newCol != null ) {
this.minColour.setBackground$java_awt_Color(newCol);
this.minColour.repaint$();
this.changeColour$();
} else {
Clazz.new_([this, "Min Colour", this.minColour.getBackground$()],$I$(18,1).c$$O$S$java_awt_Color);
}});

Clazz.newMeth(C$, 'maxColour_actionPerformed$java_awt_Color',  function (newCol) {
if (newCol != null ) {
this.maxColour.setBackground$java_awt_Color(newCol);
this.maxColour.repaint$();
this.changeColour$();
} else {
Clazz.new_([this, "Max Colour", this.maxColour.getBackground$()],$I$(18,1).c$$O$S$java_awt_Color);
}});

Clazz.newMeth(C$, 'defColour_actionPerformed$',  function () {
p$1.setDefaultMinMax.apply(this, []);
this.minColour.repaint$();
this.maxColour.repaint$();
this.changeColour$();
});

Clazz.newMeth(C$, 'changeColour$',  function () {
if (this.adjusting) {
return;
}this.currentAnnotation=this.av.getAlignment$().getAlignmentAnnotation$()[this.annotations.getSelectedIndex$()];
var aboveThreshold=-1;
if (this.threshold.getSelectedIndex$() == 1) {
aboveThreshold=1;
} else if (this.threshold.getSelectedIndex$() == 2) {
aboveThreshold=0;
}this.slider.setEnabled$Z(true);
this.thresholdValue.setEnabled$Z(true);
this.thresholdIsMin.setEnabled$Z(true);
if (aboveThreshold == -1) {
this.slider.setEnabled$Z(false);
this.thresholdValue.setEnabled$Z(false);
this.thresholdIsMin.setEnabled$Z(false);
this.thresholdValue.setText$S("");
} else if (aboveThreshold != -1 && this.currentAnnotation.threshold == null  ) {
this.currentAnnotation.setThreshold$jalview_datamodel_GraphLine(Clazz.new_([(this.currentAnnotation.graphMax - this.currentAnnotation.graphMin) / 2.0, "Threshold", $I$(15).black],$I$(19,1).c$$F$S$java_awt_Color));
}if (aboveThreshold != -1) {
this.adjusting=true;
this.slider.setMinimum$I(((this.currentAnnotation.graphMin * 1000)|0));
this.slider.setMaximum$I(((this.currentAnnotation.graphMax * 1000)|0));
this.slider.setValue$I(((this.currentAnnotation.threshold.value * 1000)|0));
this.thresholdValue.setText$S(new Float(this.currentAnnotation.threshold.value).toString() + "");
this.slider.setEnabled$Z(true);
this.thresholdValue.setEnabled$Z(true);
this.adjusting=false;
}var acg=null;
if (this.currentColours.getState$()) {
} else {
acg=Clazz.new_([this.currentAnnotation, this.minColour.getBackground$(), this.maxColour.getBackground$(), aboveThreshold],$I$(20,1).c$$jalview_datamodel_AlignmentAnnotation$java_awt_Color$java_awt_Color$I);
}if (this.currentAnnotation.graphMin == 0.0  && this.currentAnnotation.graphMax == 0.0  ) {
acg.setPredefinedColours$Z(true);
}acg.setThresholdIsMinMax$Z(this.thresholdIsMin.getState$());
this.av.setGlobalColourScheme$jalview_schemes_ColourSchemeI(acg);
if (this.av.getAlignment$().getGroups$() != null ) {
for (var sg, $sg = this.ap.av.getAlignment$().getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if (sg.getColourScheme$() == null ) {
continue;
}if (this.currentColours.getState$()) {
sg.setColourScheme$jalview_schemes_ColourSchemeI(Clazz.new_([this.currentAnnotation, sg.getColourScheme$(), aboveThreshold],$I$(20,1).c$$jalview_datamodel_AlignmentAnnotation$jalview_schemes_ColourSchemeI$I));
} else {
sg.setColourScheme$jalview_schemes_ColourSchemeI(Clazz.new_([this.currentAnnotation, this.minColour.getBackground$(), this.maxColour.getBackground$(), aboveThreshold],$I$(20,1).c$$jalview_datamodel_AlignmentAnnotation$java_awt_Color$java_awt_Color$I));
}}
}this.ap.alignmentChanged$();
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'reset$',  function () {
this.av.setGlobalColourScheme$jalview_schemes_ColourSchemeI(this.oldcs);
if (this.av.getAlignment$().getGroups$() != null ) {
for (var sg, $sg = this.ap.av.getAlignment$().getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
sg.setColourScheme$jalview_schemes_ColourSchemeI(this.oldgroupColours.get$O(sg));
}
}this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:27 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
