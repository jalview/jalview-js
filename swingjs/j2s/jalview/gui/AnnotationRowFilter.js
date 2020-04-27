(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'javax.swing.JCheckBox','javax.swing.JSlider','javax.swing.JTextField','javax.swing.JButton','javax.swing.JComboBox','java.awt.event.FocusAdapter','java.awt.event.MouseAdapter','java.util.HashMap','java.util.Vector','jalview.util.MessageManager','jalview.datamodel.GraphLine','java.awt.Color','java.awt.Dimension']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationRowFilter", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.adjusting=false;
this.seqAssociated=Clazz.new_($I$(1,1));
this.percentThreshold=Clazz.new_($I$(1,1));
this.slider=Clazz.new_($I$(2,1));
this.thresholdValue=Clazz.new_($I$(3,1).c$$I,[20]);
this.ok=Clazz.new_($I$(4,1));
this.cancel=Clazz.new_($I$(4,1));
this.sliderDragging=false;
this.threshold=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['Z',['adjusting','sliderDragging'],'O',['av','jalview.gui.AlignViewport','ap','jalview.gui.AlignmentPanel','annmap','int[]','seqAssociated','javax.swing.JCheckBox','+percentThreshold','slider','javax.swing.JSlider','thresholdValue','javax.swing.JTextField','frame','javax.swing.JInternalFrame','ok','javax.swing.JButton','+cancel','threshold','javax.swing.JComboBox','+annotations','annotationLabels','java.util.Map','currentAnnotation','jalview.datamodel.AlignmentAnnotation']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel', function (viewport, alignPanel) {
Clazz.super_(C$, this);
this.av=viewport;
this.ap=alignPanel;
this.thresholdValue.addFocusListener$java_awt_event_FocusListener(((P$.AnnotationRowFilter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationRowFilter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
this.b$['jalview.gui.AnnotationRowFilter'].thresholdValue_actionPerformed$.apply(this.b$['jalview.gui.AnnotationRowFilter'], []);
});
})()
), Clazz.new_($I$(6,1),[this, null],P$.AnnotationRowFilter$1)));
}, 1);

Clazz.newMeth(C$, 'addSliderChangeListener$', function () {
this.slider.addChangeListener$javax_swing_event_ChangeListener(((P$.AnnotationRowFilter$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationRowFilter$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent', function (evt) {
if (!this.b$['jalview.gui.AnnotationRowFilter'].adjusting) {
this.b$['jalview.gui.AnnotationRowFilter'].setThresholdValueText$.apply(this.b$['jalview.gui.AnnotationRowFilter'], []);
this.b$['jalview.gui.AnnotationRowFilter'].valueChanged$Z.apply(this.b$['jalview.gui.AnnotationRowFilter'], [!this.b$['jalview.gui.AnnotationRowFilter'].sliderDragging]);
}});
})()
), Clazz.new_(P$.AnnotationRowFilter$2.$init$,[this, null])));
});

Clazz.newMeth(C$, 'setThresholdValueText$', function () {
var oldadj=this.adjusting;
this.adjusting=true;
if (this.percentThreshold.isSelected$()) {
this.thresholdValue.setText$S("" + new Float((this.slider.getValue$() - this.slider.getMinimum$()) * 100.0 / (this.slider.getMaximum$() - this.slider.getMinimum$())).toString());
} else {
this.thresholdValue.setText$S((new Float(this.slider.getValue$() / 1000.0).toString()) + "");
}this.adjusting=oldadj;
});

Clazz.newMeth(C$, 'addSliderMouseListeners$', function () {
this.slider.addMouseListener$java_awt_event_MouseListener(((P$.AnnotationRowFilter$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationRowFilter$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.gui.AnnotationRowFilter'].sliderDragging=true;
C$.superclazz.prototype.mousePressed$java_awt_event_MouseEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.gui.AnnotationRowFilter'].sliderDragging=true;
C$.superclazz.prototype.mouseDragged$java_awt_event_MouseEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
this.b$['jalview.gui.AnnotationRowFilter'].sliderDragReleased$.apply(this.b$['jalview.gui.AnnotationRowFilter'], []);
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.AnnotationRowFilter$3)));
});

Clazz.newMeth(C$, 'getAnnotationItems$Z', function (isSeqAssociated) {
this.annotationLabels=Clazz.new_($I$(8,1));
var list=Clazz.new_($I$(9,1));
var index=1;
var anmap=Clazz.array(Integer.TYPE, [this.av.getAlignment$().getAlignmentAnnotation$().length]);
this.seqAssociated.setEnabled$Z(false);
for (var i=0; i < this.av.getAlignment$().getAlignmentAnnotation$().length; i++) {
var annotation=this.av.getAlignment$().getAlignmentAnnotation$()[i];
if (annotation.sequenceRef == null ) {
if (isSeqAssociated) {
continue;
}} else {
this.seqAssociated.setEnabled$Z(true);
}var label=annotation.label;
if (!isSeqAssociated && annotation.sequenceRef != null  ) {
label=label + "_" + annotation.sequenceRef.getName$() ;
}if (!list.contains$O(label)) {
anmap[list.size$()]=i;
list.add$O(label);
this.annotationLabels.put$O$O(annotation, label);
} else {
if (!isSeqAssociated) {
anmap[list.size$()]=i;
label=label + "_" + (index++) ;
list.add$O(label);
this.annotationLabels.put$O$O(annotation, label);
}}}
this.annmap=Clazz.array(Integer.TYPE, [list.size$()]);
System.arraycopy$O$I$O$I$I(anmap, 0, this.annmap, 0, this.annmap.length);
return list;
});

Clazz.newMeth(C$, 'getSelectedThresholdItem$I', function (indexValue) {
var selectedThresholdItem=-1;
if (indexValue == 1) {
selectedThresholdItem=1;
} else if (indexValue == 2) {
selectedThresholdItem=0;
}return selectedThresholdItem;
});

Clazz.newMeth(C$, 'ok_actionPerformed$', function () {
try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'cancel_actionPerformed$', function () {
this.reset$();
this.ap.paintAlignment$Z$Z(true, true);
try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'thresholdCheck_actionPerformed$', function () {
this.updateView$();
});

Clazz.newMeth(C$, 'selectedAnnotationChanged$', function () {
this.updateView$();
});

Clazz.newMeth(C$, 'threshold_actionPerformed$', function () {
this.updateView$();
});

Clazz.newMeth(C$, 'thresholdValue_actionPerformed$', function () {
try {
var f=Float.parseFloat$S(this.thresholdValue.getText$());
if (this.percentThreshold.isSelected$()) {
this.slider.setValue$I(this.slider.getMinimum$() + ((((f / 100.0) * (this.slider.getMaximum$() - this.slider.getMinimum$()))|0)));
} else {
this.slider.setValue$I(((f * 1000)|0));
}this.updateView$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'percentageValue_actionPerformed$', function () {
this.setThresholdValueText$();
});

Clazz.newMeth(C$, 'thresholdIsMin_actionPerformed$', function () {
this.updateView$();
});

Clazz.newMeth(C$, 'populateThresholdComboBox$javax_swing_JComboBox', function (thresh) {
thresh.addItem$O($I$(10).getString$S("label.threshold_feature_no_threshold"));
thresh.addItem$O($I$(10).getString$S("label.threshold_feature_above_threshold"));
thresh.addItem$O($I$(10).getString$S("label.threshold_feature_below_threshold"));
});

Clazz.newMeth(C$, 'seqAssociated_actionPerformed$javax_swing_JComboBox', function (anns) {
this.adjusting=true;
var cursel=anns.getSelectedItem$();
var isvalid=false;
var isseqs=this.seqAssociated.isSelected$();
anns.removeAllItems$();
for (var anitem, $anitem = this.getAnnotationItems$Z(this.seqAssociated.isSelected$()).iterator$(); $anitem.hasNext$()&&((anitem=($anitem.next$())),1);) {
if (anitem.equals$O(cursel) || (isseqs && cursel.startsWith$S(anitem) ) ) {
isvalid=true;
cursel=anitem;
}anns.addItem$O(anitem);
}
if (isvalid) {
anns.setSelectedItem$O(cursel);
} else {
if (anns.getItemCount$() > 0) {
anns.setSelectedIndex$I(0);
}}this.adjusting=false;
this.updateView$();
});

Clazz.newMeth(C$, 'propagateSeqAssociatedThreshold$Z$jalview_datamodel_AlignmentAnnotation', function (allAnnotation, annotation) {
if (annotation.sequenceRef == null  || annotation.threshold == null  ) {
return;
}var thr=annotation.threshold.value;
for (var i=0; i < this.av.getAlignment$().getAlignmentAnnotation$().length; i++) {
var aa=this.av.getAlignment$().getAlignmentAnnotation$()[i];
if (aa.label.equals$O(annotation.label) && (annotation.getCalcId$() == null  ? aa.getCalcId$() == null  : annotation.getCalcId$().equals$O(aa.getCalcId$())) ) {
if (aa.threshold == null ) {
aa.threshold=Clazz.new_($I$(11,1).c$$jalview_datamodel_GraphLine,[annotation.threshold]);
} else {
aa.threshold.value=thr;
}}}
});

Clazz.newMeth(C$, 'getCurrentAnnotation$', function () {
return this.currentAnnotation;
});

Clazz.newMeth(C$, 'setCurrentAnnotation$jalview_datamodel_AlignmentAnnotation', function (annotation) {
this.currentAnnotation=annotation;
});

Clazz.newMeth(C$, 'getAnnotationMenuLabel$jalview_datamodel_AlignmentAnnotation', function (ann) {
return this.annotationLabels.get$O(ann);
});

Clazz.newMeth(C$, 'jbInit$', function () {
this.ok.setOpaque$Z(false);
this.ok.setText$S($I$(10).getString$S("action.ok"));
this.ok.addActionListener$java_awt_event_ActionListener(((P$.AnnotationRowFilter$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationRowFilter$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.AnnotationRowFilter'].ok_actionPerformed$.apply(this.b$['jalview.gui.AnnotationRowFilter'], []);
});
})()
), Clazz.new_(P$.AnnotationRowFilter$4.$init$,[this, null])));
this.cancel.setOpaque$Z(false);
this.cancel.setText$S($I$(10).getString$S("action.cancel"));
this.cancel.addActionListener$java_awt_event_ActionListener(((P$.AnnotationRowFilter$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationRowFilter$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.AnnotationRowFilter'].cancel_actionPerformed$.apply(this.b$['jalview.gui.AnnotationRowFilter'], []);
});
})()
), Clazz.new_(P$.AnnotationRowFilter$5.$init$,[this, null])));
this.annotations.addItemListener$java_awt_event_ItemListener(((P$.AnnotationRowFilter$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationRowFilter$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
this.b$['jalview.gui.AnnotationRowFilter'].selectedAnnotationChanged$.apply(this.b$['jalview.gui.AnnotationRowFilter'], []);
});
})()
), Clazz.new_(P$.AnnotationRowFilter$6.$init$,[this, null])));
this.annotations.setToolTipText$S($I$(10).getString$S("info.select_annotation_row"));
this.threshold.addActionListener$java_awt_event_ActionListener(((P$.AnnotationRowFilter$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationRowFilter$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.AnnotationRowFilter'].threshold_actionPerformed$.apply(this.b$['jalview.gui.AnnotationRowFilter'], []);
});
})()
), Clazz.new_(P$.AnnotationRowFilter$7.$init$,[this, null])));
this.thresholdValue.setEnabled$Z(false);
this.thresholdValue.setColumns$I(7);
this.thresholdValue.addActionListener$java_awt_event_ActionListener(((P$.AnnotationRowFilter$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationRowFilter$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.AnnotationRowFilter'].thresholdValue_actionPerformed$.apply(this.b$['jalview.gui.AnnotationRowFilter'], []);
});
})()
), Clazz.new_(P$.AnnotationRowFilter$8.$init$,[this, null])));
this.percentThreshold.setText$S($I$(10).getString$S("label.as_percentage"));
this.percentThreshold.addActionListener$java_awt_event_ActionListener(((P$.AnnotationRowFilter$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationRowFilter$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
if (!this.b$['jalview.gui.AnnotationRowFilter'].adjusting) {
this.b$['jalview.gui.AnnotationRowFilter'].percentageValue_actionPerformed$.apply(this.b$['jalview.gui.AnnotationRowFilter'], []);
}});
})()
), Clazz.new_(P$.AnnotationRowFilter$9.$init$,[this, null])));
this.slider.setPaintLabels$Z(false);
this.slider.setPaintTicks$Z(true);
this.slider.setBackground$java_awt_Color($I$(12).white);
this.slider.setEnabled$Z(false);
this.slider.setOpaque$Z(false);
this.slider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[100, 32]));
});

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$javax_swing_JComboBox', function (thresh) {
this.threshold=thresh;
});

Clazz.newMeth(C$, 'getAnnotations$', function () {
return this.annotations;
});

Clazz.newMeth(C$, 'setAnnotations$javax_swing_JComboBox', function (anns) {
this.annotations=anns;
});

Clazz.newMeth(C$, 'sliderDragReleased$', function () {
if (this.sliderDragging) {
this.sliderDragging=false;
this.valueChanged$Z(true);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
