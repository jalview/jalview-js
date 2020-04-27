(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.Choice','jalview.appletgui.AnnotationColumnChooser','java.awt.Checkbox','jalview.util.MessageManager','java.awt.Color','java.awt.TextField','java.awt.Panel','jalview.appletgui.TitledPanel','java.awt.CardLayout','java.awt.BorderLayout','java.awt.Frame','jalview.bin.JalviewLite','java.util.Vector','java.awt.Dimension',['jalview.appletgui.AnnotationColumnChooser','.SearchPanel'],['jalview.appletgui.AnnotationColumnChooser','.FurtherActionPanel'],['jalview.appletgui.AnnotationColumnChooser','.StructureFilterPanel'],'java.awt.event.MouseAdapter','jalview.viewmodel.annotationfilter.AnnotationFilterParameter','jalview.datamodel.GraphLine',['jalview.viewmodel.annotationfilter.AnnotationFilterParameter','.ThresholdType'],['jalview.viewmodel.annotationfilter.AnnotationFilterParameter','.SearchableAnnotationField'],'jalview.datamodel.HiddenColumns']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.appletgui.AnnotationRowFilter', ['java.awt.event.ActionListener', 'java.awt.event.AdjustmentListener', 'java.awt.event.ItemListener', 'java.awt.event.MouseListener']);
C$.$classes$=[['FurtherActionPanel',1],['StructureFilterPanel',1],['SearchPanel',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.annotations=Clazz.new_($I$(1,1));
this.actionPanel=Clazz.new_($I$(7,1));
this.thresholdPanel=Clazz.new_($I$(8,1));
this.switchableViewsPanel=Clazz.new_([Clazz.new_($I$(9,1))],$I$(7,1).c$$java_awt_LayoutManager);
this.switchableViewsLayout=(this.switchableViewsPanel.getLayout$());
this.noGraphFilterView=Clazz.new_($I$(7,1));
this.graphFilterView=Clazz.new_($I$(7,1));
this.annotationComboBoxPanel=Clazz.new_($I$(7,1));
this.borderLayout1=Clazz.new_($I$(10,1));
this.gBorderLayout=Clazz.new_($I$(10,1));
this.ngBorderLayout=Clazz.new_($I$(10,1));
this.threshold=Clazz.new_($I$(1,1));
this.actionOption=1;
},1);

C$.$fields$=[['I',['actionOption'],'O',['annotations','java.awt.Choice','actionPanel','java.awt.Panel','thresholdPanel','jalview.appletgui.TitledPanel','switchableViewsPanel','java.awt.Panel','switchableViewsLayout','java.awt.CardLayout','noGraphFilterView','java.awt.Panel','+graphFilterView','+annotationComboBoxPanel','borderLayout1','java.awt.BorderLayout','+gBorderLayout','+ngBorderLayout','threshold','java.awt.Choice','gStructureFilterPanel','jalview.appletgui.AnnotationColumnChooser.StructureFilterPanel','+ngStructureFilterPanel','+currentStructureFilterPanel','currentSearchPanel','jalview.appletgui.AnnotationColumnChooser.SearchPanel','+gSearchPanel','+ngSearchPanel','currentFurtherActionPanel','jalview.appletgui.AnnotationColumnChooser.FurtherActionPanel','+gFurtherActionPanel','+ngFurtherActionPanel','oldHiddenColumns','jalview.datamodel.HiddenColumns']]
,['I',['ACTION_OPTION_HIDE'],'S',['NO_GRAPH_VIEW','GRAPH_VIEW']]]

Clazz.newMeth(C$, 'c$', function () {
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

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel', function (av, ap) {
;C$.superclazz.c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel.apply(this,[av, ap]);C$.$init$.apply(this);
this.frame=Clazz.new_($I$(11,1));
this.frame.add$java_awt_Component(this);
$I$(12,"addFrame$java_awt_Frame$S$I$I",[this.frame, $I$(4).getString$S("label.select_by_annotation"), 520, 215]);
this.slider.addAdjustmentListener$java_awt_event_AdjustmentListener(this);
this.slider.addMouseListener$java_awt_event_MouseListener(this);
var anns=av.getAlignment$().getAlignmentAnnotation$();
if (anns == null ) {
return;
}this.setOldHiddenColumns$jalview_datamodel_HiddenColumns(av.getAlignment$().getHiddenColumns$());
this.adjusting=true;
var list=Clazz.new_($I$(13,1));
var index=1;
for (var i=0; i < anns.length; i++) {
var label=anns[i].label;
if (anns[i].sequenceRef != null ) {
label=label + "_" + anns[i].sequenceRef.getName$() ;
}if (!list.contains$O(label)) {
list.addElement$O(label);
} else {
list.addElement$O(label + "_" + (index++) );
}}
for (var i=0; i < list.size$(); i++) {
this.annotations.addItem$S(list.elementAt$I(i).toString());
}
this.populateThresholdComboBox$java_awt_Choice(this.threshold);
var lastChooser=av.getAnnotationColumnSelectionState$();
if (lastChooser != null ) {
this.currentSearchPanel=lastChooser.getCurrentSearchPanel$();
this.currentStructureFilterPanel=lastChooser.getCurrentStructureFilterPanel$();
this.annotations.select$I(lastChooser.getAnnotations$().getSelectedIndex$());
this.threshold.select$I(lastChooser.getThreshold$().getSelectedIndex$());
this.actionOption=lastChooser.getActionOption$();
this.percentThreshold.setState$Z(lastChooser.percentThreshold.getState$());
}try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
this.adjusting=false;
this.updateView$();
this.frame.invalidate$();
this.frame.pack$();
}, 1);

Clazz.newMeth(C$, 'jbInit', function () {
this.ok.setLabel$S($I$(4).getString$S("action.ok"));
this.cancel.setLabel$S($I$(4).getString$S("action.cancel"));
this.thresholdValue.setEnabled$Z(false);
this.thresholdValue.setColumns$I(7);
this.thresholdValue.setCaretPosition$I(0);
this.ok.addActionListener$java_awt_event_ActionListener(this);
this.cancel.addActionListener$java_awt_event_ActionListener(this);
this.annotations.addItemListener$java_awt_event_ItemListener(this);
this.thresholdValue.addActionListener$java_awt_event_ActionListener(this);
this.threshold.addItemListener$java_awt_event_ItemListener(this);
this.slider.setBackground$java_awt_Color($I$(5).white);
this.slider.setEnabled$Z(false);
this.slider.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(14,1).c$$I$I,[100, 32]));
this.thresholdPanel.setBackground$java_awt_Color($I$(5).white);
this.percentThreshold.setLabel$S("As percentage");
this.percentThreshold.addItemListener$java_awt_event_ItemListener(this);
this.actionPanel.setBackground$java_awt_Color($I$(5).white);
this.graphFilterView.setLayout$java_awt_LayoutManager(this.gBorderLayout);
this.graphFilterView.setBackground$java_awt_Color($I$(5).white);
this.noGraphFilterView.setLayout$java_awt_LayoutManager(this.ngBorderLayout);
this.noGraphFilterView.setBackground$java_awt_Color($I$(5).white);
this.annotationComboBoxPanel.setBackground$java_awt_Color($I$(5).white);
this.gSearchPanel=Clazz.new_($I$(15,1).c$$jalview_appletgui_AnnotationColumnChooser,[this, null, this]);
this.ngSearchPanel=Clazz.new_($I$(15,1).c$$jalview_appletgui_AnnotationColumnChooser,[this, null, this]);
this.gFurtherActionPanel=Clazz.new_($I$(16,1).c$$jalview_appletgui_AnnotationColumnChooser,[this, null, this]);
this.ngFurtherActionPanel=Clazz.new_($I$(16,1).c$$jalview_appletgui_AnnotationColumnChooser,[this, null, this]);
this.gStructureFilterPanel=Clazz.new_($I$(17,1).c$$jalview_appletgui_AnnotationColumnChooser,[this, null, this]);
this.ngStructureFilterPanel=Clazz.new_($I$(17,1).c$$jalview_appletgui_AnnotationColumnChooser,[this, null, this]);
this.thresholdPanel.setTitle$S("Threshold Filter");
this.thresholdPanel.add$java_awt_Component(this.getThreshold$());
this.thresholdPanel.add$java_awt_Component(this.slider);
this.thresholdPanel.add$java_awt_Component(this.thresholdValue);
this.thresholdPanel.add$java_awt_Component(this.percentThreshold);
this.actionPanel.add$java_awt_Component(this.ok);
this.actionPanel.add$java_awt_Component(this.cancel);
var staticPanel=Clazz.new_($I$(7,1));
staticPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
staticPanel.setBackground$java_awt_Color($I$(5).white);
staticPanel.add$java_awt_Component$O(this.gSearchPanel, "North");
staticPanel.add$java_awt_Component$O(this.gStructureFilterPanel, "South");
this.graphFilterView.add$java_awt_Component$O(staticPanel, "North");
this.graphFilterView.add$java_awt_Component$O(this.thresholdPanel, "Center");
this.graphFilterView.add$java_awt_Component$O(this.gFurtherActionPanel, "South");
this.noGraphFilterView.add$java_awt_Component$O(this.ngSearchPanel, "First");
this.noGraphFilterView.add$java_awt_Component$O(this.ngStructureFilterPanel, "Center");
this.noGraphFilterView.add$java_awt_Component$O(this.ngFurtherActionPanel, "Center");
this.annotationComboBoxPanel.add$java_awt_Component(this.getAnnotations$());
this.switchableViewsPanel.add$java_awt_Component$O(this.noGraphFilterView, C$.NO_GRAPH_VIEW);
this.switchableViewsPanel.add$java_awt_Component$O(this.graphFilterView, C$.GRAPH_VIEW);
this.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.add$java_awt_Component$O(this.annotationComboBoxPanel, "First");
this.add$java_awt_Component$O(this.switchableViewsPanel, "Center");
this.add$java_awt_Component$O(this.actionPanel, "South");
this.selectedAnnotationChanged$();
this.validate$();
}, p$1);

Clazz.newMeth(C$, 'reset$', function () {
if (this.getOldHiddenColumns$() != null ) {
this.av.getColumnSelection$().clear$();
if (this.av.getAnnotationColumnSelectionState$() != null ) {
var oldHidden=this.av.getAnnotationColumnSelectionState$().getOldHiddenColumns$();
this.av.getAlignment$().setHiddenColumns$jalview_datamodel_HiddenColumns(oldHidden);
}this.av.sendSelection$();
this.ap.paintAlignment$Z$Z(true, true);
}});

Clazz.newMeth(C$, 'adjustmentValueChanged$java_awt_event_AdjustmentEvent', function (evt) {
if (!this.adjusting) {
this.setThresholdValueText$();
this.valueChanged$Z(!this.sliderDragging);
}});

Clazz.newMeth(C$, 'addSliderMouseListeners$', function () {
this.slider.addMouseListener$java_awt_event_MouseListener(((P$.AnnotationColumnChooser$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.appletgui.AnnotationColumnChooser'].sliderDragging=true;
C$.superclazz.prototype.mousePressed$java_awt_event_MouseEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.appletgui.AnnotationColumnChooser'].sliderDragging=true;
C$.superclazz.prototype.mouseDragged$java_awt_event_MouseEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (evt) {
if (this.b$['jalview.appletgui.AnnotationColumnChooser'].sliderDragging) {
this.b$['jalview.appletgui.AnnotationColumnChooser'].sliderDragging=false;
this.b$['jalview.appletgui.AnnotationColumnChooser'].valueChanged$Z.apply(this.b$['jalview.appletgui.AnnotationColumnChooser'], [true]);
}this.b$['jalview.appletgui.AnnotationColumnChooser'].ap.paintAlignment$Z$Z(true, true);
});
})()
), Clazz.new_($I$(18,1),[this, null],P$.AnnotationColumnChooser$1)));
});

Clazz.newMeth(C$, 'valueChanged$Z', function (updateAllAnnotation) {
if (this.slider.isEnabled$()) {
this.getCurrentAnnotation$().threshold.value=this.slider.getValue$() / 1000.0;
this.updateView$();
}});

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$java_awt_Choice', function (threshold) {
this.threshold=threshold;
});

Clazz.newMeth(C$, 'getAnnotations$', function () {
return this.annotations;
});

Clazz.newMeth(C$, 'setAnnotations$java_awt_Choice', function (annotations) {
this.annotations=annotations;
});

Clazz.newMeth(C$, 'updateView$', function () {
if (this.adjusting) {
return;
}var filterParams=Clazz.new_($I$(19,1));
this.setCurrentAnnotation$jalview_datamodel_AlignmentAnnotation(this.av.getAlignment$().getAlignmentAnnotation$()[this.getAnnotations$().getSelectedIndex$()]);
var selectedThresholdItem=this.getSelectedThresholdItem$I(this.getThreshold$().getSelectedIndex$());
this.slider.setEnabled$Z(true);
this.thresholdValue.setEnabled$Z(true);
this.percentThreshold.setEnabled$Z(true);
if (selectedThresholdItem == -1) {
this.slider.setEnabled$Z(false);
this.thresholdValue.setEnabled$Z(false);
this.thresholdValue.setText$S("");
this.percentThreshold.setEnabled$Z(false);
} else if (selectedThresholdItem != -1) {
if (this.getCurrentAnnotation$().threshold == null ) {
this.getCurrentAnnotation$().setThreshold$jalview_datamodel_GraphLine(Clazz.new_([(this.getCurrentAnnotation$().graphMax - this.getCurrentAnnotation$().graphMin) / 2.0, "Threshold", $I$(5).black],$I$(20,1).c$$F$S$java_awt_Color));
}this.adjusting=true;
this.slider.setMinimum$I(((this.getCurrentAnnotation$().graphMin * 1000)|0));
this.slider.setMaximum$I(((this.getCurrentAnnotation$().graphMax * 1000)|0));
this.slider.setValue$I(((this.getCurrentAnnotation$().threshold.value * 1000)|0));
this.setThresholdValueText$();
this.slider.setEnabled$Z(true);
this.thresholdValue.setEnabled$Z(true);
this.percentThreshold.setEnabled$Z(true);
this.adjusting=false;
filterParams.setThresholdType$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_ThresholdType($I$(21).NO_THRESHOLD);
if (this.getCurrentAnnotation$().isQuantitative$()) {
filterParams.setThresholdValue$F(this.getCurrentAnnotation$().threshold.value);
if (selectedThresholdItem == 1) {
filterParams.setThresholdType$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_ThresholdType($I$(21).ABOVE_THRESHOLD);
} else if (selectedThresholdItem == 0) {
filterParams.setThresholdType$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_ThresholdType($I$(21).BELOW_THRESHOLD);
}}}if (this.currentStructureFilterPanel != null ) {
if (this.currentStructureFilterPanel.alphaHelix.getState$()) {
filterParams.setFilterAlphaHelix$Z(true);
}if (this.currentStructureFilterPanel.betaStrand.getState$()) {
filterParams.setFilterBetaSheet$Z(true);
}if (this.currentStructureFilterPanel.turn.getState$()) {
filterParams.setFilterTurn$Z(true);
}}if (this.currentSearchPanel != null ) {
if (!this.currentSearchPanel.searchBox.getText$().isEmpty$()) {
this.currentSearchPanel.description.setEnabled$Z(true);
this.currentSearchPanel.displayName.setEnabled$Z(true);
filterParams.setRegexString$S(this.currentSearchPanel.searchBox.getText$());
if (this.currentSearchPanel.displayName.getState$()) {
filterParams.addRegexSearchField$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_SearchableAnnotationField($I$(22).DISPLAY_STRING);
}if (this.currentSearchPanel.description.getState$()) {
filterParams.addRegexSearchField$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_SearchableAnnotationField($I$(22).DESCRIPTION);
}} else {
this.currentSearchPanel.description.setEnabled$Z(false);
this.currentSearchPanel.displayName.setEnabled$Z(false);
}}this.av.showAllHiddenColumns$();
this.av.getColumnSelection$().filterAnnotations$jalview_datamodel_AnnotationA$jalview_viewmodel_annotationfilter_AnnotationFilterParameter(this.getCurrentAnnotation$().annotations, filterParams);
if (this.getActionOption$() == C$.ACTION_OPTION_HIDE) {
this.av.hideSelectedColumns$();
}filterParams=null;
this.av.setAnnotationColumnSelectionState$jalview_appletgui_AnnotationColumnChooser(this);
this.av.sendSelection$();
this.ap.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'getOldHiddenColumns$', function () {
return this.oldHiddenColumns;
});

Clazz.newMeth(C$, 'setOldHiddenColumns$jalview_datamodel_HiddenColumns', function (currentHiddenColumns) {
if (currentHiddenColumns != null ) {
this.oldHiddenColumns=Clazz.new_($I$(23,1).c$$jalview_datamodel_HiddenColumns,[currentHiddenColumns]);
}});

Clazz.newMeth(C$, 'getCurrentFutherActionPanel$', function () {
return this.currentFurtherActionPanel;
});

Clazz.newMeth(C$, 'setCurrentFutherActionPanel$jalview_appletgui_AnnotationColumnChooser_FurtherActionPanel', function (currentFutherActionPanel) {
this.currentFurtherActionPanel=currentFutherActionPanel;
});

Clazz.newMeth(C$, 'getCurrentSearchPanel$', function () {
return this.currentSearchPanel;
});

Clazz.newMeth(C$, 'setCurrentSearchPanel$jalview_appletgui_AnnotationColumnChooser_SearchPanel', function (currentSearchPanel) {
this.currentSearchPanel=currentSearchPanel;
});

Clazz.newMeth(C$, 'getActionOption$', function () {
return this.actionOption;
});

Clazz.newMeth(C$, 'setActionOption$I', function (actionOption) {
this.actionOption=actionOption;
});

Clazz.newMeth(C$, 'getCurrentStructureFilterPanel$', function () {
return this.currentStructureFilterPanel;
});

Clazz.newMeth(C$, 'setCurrentStructureFilterPanel$jalview_appletgui_AnnotationColumnChooser_StructureFilterPanel', function (currentStructureFilterPanel) {
this.currentStructureFilterPanel=currentStructureFilterPanel;
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
if (e.getSource$() === this.annotations ) {
this.selectedAnnotationChanged$();
} else if (e.getSource$() === this.threshold ) {
this.threshold_actionPerformed$java_awt_event_ActionEvent(null);
} else if (e.getSource$() === this.percentThreshold ) {
if (!this.adjusting) {
this.percentageValue_actionPerformed$();
}}});

Clazz.newMeth(C$, 'selectedAnnotationChanged$', function () {
var currentView=C$.NO_GRAPH_VIEW;
if (this.av.getAlignment$().getAlignmentAnnotation$()[this.getAnnotations$().getSelectedIndex$()].isQuantitative$()) {
currentView=C$.GRAPH_VIEW;
}this.gSearchPanel.syncState$();
this.gFurtherActionPanel.syncState$();
this.gStructureFilterPanel.syncState$();
this.ngSearchPanel.syncState$();
this.ngFurtherActionPanel.syncState$();
this.ngStructureFilterPanel.syncState$();
this.switchableViewsLayout.show$java_awt_Container$S(this.switchableViewsPanel, currentView);
this.updateView$();
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
if (evt.getSource$() === this.ok ) {
this.ok_actionPerformed$java_awt_event_ActionEvent(null);
} else if (evt.getSource$() === this.cancel ) {
this.cancel_actionPerformed$java_awt_event_ActionEvent(null);
} else if (evt.getSource$() === this.thresholdValue ) {
this.thresholdValue_actionPerformed$java_awt_event_ActionEvent(null);
} else {
this.updateView$();
}});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent', function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent', function (e) {
if (e.getSource$() === this.slider ) {
this.updateView$();
}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent', function (e) {
if (e.getSource$() === this.slider ) {
this.updateView$();
}});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
if (e.getSource$() === this.slider ) {
this.updateView$();
}});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
if (e.getSource$() === this.slider ) {
this.updateView$();
}});

C$.$static$=function(){C$.$static$=0;
C$.ACTION_OPTION_HIDE=2;
C$.NO_GRAPH_VIEW="0";
C$.GRAPH_VIEW="1";
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnnotationColumnChooser, "FurtherActionPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.Panel', 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.furtherAction=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['aColChooser','jalview.appletgui.AnnotationColumnChooser','furtherAction','java.awt.Choice']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AnnotationColumnChooser', function (aColChooser) {
Clazz.super_(C$, this);
this.aColChooser=aColChooser;
this.furtherAction.addItem$S("Select");
this.furtherAction.addItem$S("Hide");
this.furtherAction.addItemListener$java_awt_event_ItemListener(this);
this.syncState$();
this.add$java_awt_Component(this.furtherAction);
}, 1);

Clazz.newMeth(C$, 'syncState$', function () {
if (this.aColChooser.getActionOption$() == $I$(2).ACTION_OPTION_HIDE) {
this.furtherAction.select$S("Hide");
} else {
this.furtherAction.select$S("Select");
}});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
this.aColChooser.setCurrentFutherActionPanel$jalview_appletgui_AnnotationColumnChooser_FurtherActionPanel(this);
if (this.furtherAction.getSelectedItem$().equalsIgnoreCase$S("Select")) {
this.this$0.setActionOption$I.apply(this.this$0, [1]);
this.this$0.updateView$.apply(this.this$0, []);
} else {
this.this$0.setActionOption$I.apply(this.this$0, [$I$(2).ACTION_OPTION_HIDE]);
this.this$0.updateView$.apply(this.this$0, []);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnnotationColumnChooser, "StructureFilterPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'jalview.appletgui.TitledPanel', 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.alphaHelix=Clazz.new_($I$(3,1));
this.betaStrand=Clazz.new_($I$(3,1));
this.turn=Clazz.new_($I$(3,1));
this.all=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['aColChooser','jalview.appletgui.AnnotationColumnChooser','alphaHelix','java.awt.Checkbox','+betaStrand','+turn','+all']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AnnotationColumnChooser', function (aColChooser) {
Clazz.super_(C$, this);
this.aColChooser=aColChooser;
this.alphaHelix.setLabel$S($I$(4).getString$S("label.alpha_helix"));
this.alphaHelix.setBackground$java_awt_Color($I$(5).white);
this.alphaHelix.addItemListener$java_awt_event_ItemListener(this);
this.betaStrand.setLabel$S($I$(4).getString$S("label.beta_strand"));
this.betaStrand.setBackground$java_awt_Color($I$(5).white);
this.betaStrand.addItemListener$java_awt_event_ItemListener(this);
this.turn.setLabel$S($I$(4).getString$S("label.turn"));
this.turn.setBackground$java_awt_Color($I$(5).white);
this.turn.addItemListener$java_awt_event_ItemListener(this);
this.all.setLabel$S($I$(4).getString$S("label.select_all"));
this.all.setBackground$java_awt_Color($I$(5).white);
this.all.addItemListener$java_awt_event_ItemListener(this);
this.setBackground$java_awt_Color($I$(5).white);
this.setTitle$S("Structure Filter");
this.add$java_awt_Component(this.all);
this.add$java_awt_Component(this.alphaHelix);
this.add$java_awt_Component(this.betaStrand);
this.add$java_awt_Component(this.turn);
}, 1);

Clazz.newMeth(C$, 'alphaHelix_actionPerformed$', function () {
this.updateSelectAllState$();
this.aColChooser.setCurrentStructureFilterPanel$jalview_appletgui_AnnotationColumnChooser_StructureFilterPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'betaStrand_actionPerformed$', function () {
this.updateSelectAllState$();
this.aColChooser.setCurrentStructureFilterPanel$jalview_appletgui_AnnotationColumnChooser_StructureFilterPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'turn_actionPerformed$', function () {
this.updateSelectAllState$();
this.aColChooser.setCurrentStructureFilterPanel$jalview_appletgui_AnnotationColumnChooser_StructureFilterPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'all_actionPerformed$', function () {
if (this.all.getState$()) {
this.alphaHelix.setState$Z(true);
this.betaStrand.setState$Z(true);
this.turn.setState$Z(true);
} else {
this.alphaHelix.setState$Z(false);
this.betaStrand.setState$Z(false);
this.turn.setState$Z(false);
}this.aColChooser.setCurrentStructureFilterPanel$jalview_appletgui_AnnotationColumnChooser_StructureFilterPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'updateSelectAllState$', function () {
if (this.alphaHelix.getState$() && this.betaStrand.getState$() && this.turn.getState$()  ) {
this.all.setState$Z(true);
} else {
this.all.setState$Z(false);
}});

Clazz.newMeth(C$, 'syncState$', function () {
var sfp=this.aColChooser.getCurrentStructureFilterPanel$();
if (sfp != null ) {
this.alphaHelix.setState$Z(sfp.alphaHelix.getState$());
this.betaStrand.setState$Z(sfp.betaStrand.getState$());
this.turn.setState$Z(sfp.turn.getState$());
if (sfp.all.getState$()) {
this.all.setState$Z(true);
this.alphaHelix.setState$Z(true);
this.betaStrand.setState$Z(true);
this.turn.setState$Z(true);
}}});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
if (e.getSource$() === this.alphaHelix ) {
this.alphaHelix_actionPerformed$();
} else if (e.getSource$() === this.betaStrand ) {
this.betaStrand_actionPerformed$();
} else if (e.getSource$() === this.turn ) {
this.turn_actionPerformed$();
} else if (e.getSource$() === this.all ) {
this.all_actionPerformed$();
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnnotationColumnChooser, "SearchPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'jalview.appletgui.TitledPanel', 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.displayName=Clazz.new_($I$(3,1));
this.description=Clazz.new_($I$(3,1));
this.searchBox=Clazz.new_($I$(6,1).c$$I,[10]);
},1);

C$.$fields$=[['O',['aColChooser','jalview.appletgui.AnnotationColumnChooser','displayName','java.awt.Checkbox','+description','searchBox','java.awt.TextField']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AnnotationColumnChooser', function (aColChooser) {
Clazz.super_(C$, this);
this.aColChooser=aColChooser;
this.searchBox.addTextListener$java_awt_event_TextListener(((P$.AnnotationColumnChooser$SearchPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$SearchPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.TextListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'textValueChanged$java_awt_event_TextEvent', function (e) {
this.b$['jalview.appletgui.AnnotationColumnChooser.SearchPanel'].searchStringAction$.apply(this.b$['jalview.appletgui.AnnotationColumnChooser.SearchPanel'], []);
});
})()
), Clazz.new_(P$.AnnotationColumnChooser$SearchPanel$1.$init$,[this, null])));
this.displayName.setLabel$S($I$(4).getString$S("label.label"));
this.displayName.setEnabled$Z(false);
this.displayName.addItemListener$java_awt_event_ItemListener(this);
this.description.setLabel$S($I$(4).getString$S("label.description"));
this.description.setEnabled$Z(false);
this.description.addItemListener$java_awt_event_ItemListener(this);
this.setTitle$S("Search Filter");
this.syncState$();
this.add$java_awt_Component(this.searchBox);
this.add$java_awt_Component(this.displayName);
this.add$java_awt_Component(this.description);
}, 1);

Clazz.newMeth(C$, 'displayNameCheckboxAction$', function () {
this.aColChooser.setCurrentSearchPanel$jalview_appletgui_AnnotationColumnChooser_SearchPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'discriptionCheckboxAction$', function () {
this.aColChooser.setCurrentSearchPanel$jalview_appletgui_AnnotationColumnChooser_SearchPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'searchStringAction$', function () {
this.aColChooser.setCurrentSearchPanel$jalview_appletgui_AnnotationColumnChooser_SearchPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'syncState$', function () {
var sp=this.aColChooser.getCurrentSearchPanel$();
if (sp != null ) {
this.description.setEnabled$Z(sp.description.isEnabled$());
this.description.setState$Z(sp.description.getState$());
this.displayName.setEnabled$Z(sp.displayName.isEnabled$());
this.displayName.setState$Z(sp.displayName.getState$());
this.searchBox.setText$S(sp.searchBox.getText$());
}});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
if (e.getSource$() === this.displayName ) {
this.displayNameCheckboxAction$();
} else if (e.getSource$() === this.description ) {
this.discriptionCheckboxAction$();
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:44 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
