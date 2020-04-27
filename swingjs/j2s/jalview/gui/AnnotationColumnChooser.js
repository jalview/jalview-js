(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JRadioButton','javax.swing.ButtonGroup','jalview.gui.JvSwingUtils','jalview.gui.AnnotationColumnChooser','javax.swing.JCheckBox','javax.swing.border.TitledBorder','jalview.util.MessageManager','jalview.io.cache.JvCacheableInputBox','java.awt.event.KeyAdapter','java.awt.event.FocusAdapter','jalview.util.Platform','javax.swing.JPanel','java.awt.CardLayout','javax.swing.JInternalFrame','javax.swing.JLayeredPane','jalview.gui.Desktop','java.awt.Dimension','javax.swing.JComboBox','java.awt.Color','net.miginfocom.swing.MigLayout',['jalview.gui.AnnotationColumnChooser','.SearchPanel'],['jalview.gui.AnnotationColumnChooser','.FurtherActionPanel'],['jalview.gui.AnnotationColumnChooser','.StructureFilterPanel'],'java.awt.BorderLayout','jalview.viewmodel.annotationfilter.AnnotationFilterParameter','jalview.datamodel.GraphLine',['jalview.viewmodel.annotationfilter.AnnotationFilterParameter','.ThresholdType'],['jalview.viewmodel.annotationfilter.AnnotationFilterParameter','.SearchableAnnotationField'],'jalview.datamodel.HiddenColumns']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.gui.AnnotationRowFilter', 'java.awt.event.ItemListener');
C$.$classes$=[['FurtherActionPanel',1],['StructureFilterPanel',1],['SearchPanel',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.switchableViewsPanel=Clazz.new_([Clazz.new_($I$(13,1))],$I$(12,1).c$$java_awt_LayoutManager);
this.annotationComboBoxPanel=Clazz.new_($I$(12,1));
this.actionOption=1;
},1);

C$.$fields$=[['I',['actionOption'],'O',['switchableViewsPanel','javax.swing.JPanel','+annotationComboBoxPanel','gStructureFilterPanel','jalview.gui.AnnotationColumnChooser.StructureFilterPanel','+ngStructureFilterPanel','+currentStructureFilterPanel','currentSearchPanel','jalview.gui.AnnotationColumnChooser.SearchPanel','+gSearchPanel','+ngSearchPanel','currentFurtherActionPanel','jalview.gui.AnnotationColumnChooser.FurtherActionPanel','+gFurtherActionPanel','+ngFurtherActionPanel','oldHiddenColumns','jalview.datamodel.HiddenColumns']]
,['I',['ACTION_OPTION_HIDE','MIN_WIDTH','MIN_HEIGHT'],'S',['NO_GRAPH_VIEW','GRAPH_VIEW']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel', function (av, ap) {
;C$.superclazz.c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel.apply(this,[av, ap]);C$.$init$.apply(this);
this.frame=Clazz.new_($I$(14,1));
this.frame.setContentPane$java_awt_Container(this);
this.frame.setLayer$Integer($I$(15).PALETTE_LAYER);
$I$(16,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[this.frame, $I$(7).getString$S("label.select_by_annotation"), 0, 0]);
this.frame.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(17,1).c$$I$I,[C$.MIN_WIDTH, C$.MIN_HEIGHT]));
this.addSliderChangeListener$();
this.addSliderMouseListeners$();
if (av.getAlignment$().getAlignmentAnnotation$() == null ) {
return;
}this.setOldHiddenColumns$jalview_datamodel_HiddenColumns(av.getAlignment$().getHiddenColumns$());
this.adjusting=true;
this.setAnnotations$javax_swing_JComboBox(Clazz.new_([this.getAnnotationItems$Z(false)],$I$(18,1).c$$java_util_Vector));
this.populateThresholdComboBox$javax_swing_JComboBox(this.threshold);
var lastChooser=av.getAnnotationColumnSelectionState$();
if (lastChooser != null ) {
this.currentSearchPanel=lastChooser.getCurrentSearchPanel$();
this.currentStructureFilterPanel=lastChooser.getCurrentStructureFilterPanel$();
this.annotations.setSelectedIndex$I(lastChooser.getAnnotations$().getSelectedIndex$());
this.threshold.setSelectedIndex$I(lastChooser.getThreshold$().getSelectedIndex$());
this.actionOption=lastChooser.getActionOption$();
this.percentThreshold.setSelected$Z(lastChooser.percentThreshold.isSelected$());
}try {
this.jbInit$();
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

Clazz.newMeth(C$, 'jbInit$', function () {
C$.superclazz.prototype.jbInit$.apply(this, []);
var thresholdPanel=Clazz.new_($I$(12,1));
thresholdPanel.setBorder$javax_swing_border_Border(Clazz.new_([$I$(7).getString$S("label.threshold_filter")],$I$(6,1).c$$S));
thresholdPanel.setBackground$java_awt_Color($I$(19).white);
thresholdPanel.setFont$java_awt_Font($I$(3).getLabelFont$());
thresholdPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(20,1).c$$S$S$S,["", "[left][right]", "[][]"]));
this.percentThreshold.setBackground$java_awt_Color($I$(19).white);
this.percentThreshold.setFont$java_awt_Font($I$(3).getLabelFont$());
var actionPanel=Clazz.new_($I$(12,1));
actionPanel.setBackground$java_awt_Color($I$(19).white);
actionPanel.setFont$java_awt_Font($I$(3).getLabelFont$());
var graphFilterView=Clazz.new_($I$(12,1));
graphFilterView.setLayout$java_awt_LayoutManager(Clazz.new_($I$(20,1).c$$S$S$S,["", "[left][right]", "[][]"]));
graphFilterView.setBackground$java_awt_Color($I$(19).white);
var noGraphFilterView=Clazz.new_($I$(12,1));
noGraphFilterView.setLayout$java_awt_LayoutManager(Clazz.new_($I$(20,1).c$$S$S$S,["", "[left][right]", "[][]"]));
noGraphFilterView.setBackground$java_awt_Color($I$(19).white);
this.annotationComboBoxPanel.setBackground$java_awt_Color($I$(19).white);
this.annotationComboBoxPanel.setFont$java_awt_Font($I$(3).getLabelFont$());
this.gSearchPanel=Clazz.new_($I$(21,1).c$$jalview_gui_AnnotationColumnChooser,[this, null, this]);
this.ngSearchPanel=Clazz.new_($I$(21,1).c$$jalview_gui_AnnotationColumnChooser,[this, null, this]);
this.gFurtherActionPanel=Clazz.new_($I$(22,1).c$$jalview_gui_AnnotationColumnChooser,[this, null, this]);
this.ngFurtherActionPanel=Clazz.new_($I$(22,1).c$$jalview_gui_AnnotationColumnChooser,[this, null, this]);
this.gStructureFilterPanel=Clazz.new_($I$(23,1).c$$jalview_gui_AnnotationColumnChooser,[this, null, this]);
this.ngStructureFilterPanel=Clazz.new_($I$(23,1).c$$jalview_gui_AnnotationColumnChooser,[this, null, this]);
thresholdPanel.add$java_awt_Component(this.getThreshold$());
thresholdPanel.add$java_awt_Component$O(this.percentThreshold, "wrap");
thresholdPanel.add$java_awt_Component$O(this.slider, "grow");
thresholdPanel.add$java_awt_Component$O(this.thresholdValue, "span, wrap");
actionPanel.add$java_awt_Component(this.ok);
actionPanel.add$java_awt_Component(this.cancel);
graphFilterView.add$java_awt_Component$O(this.gSearchPanel, "grow, span, wrap");
graphFilterView.add$java_awt_Component$O(this.gStructureFilterPanel, "grow, span, wrap");
graphFilterView.add$java_awt_Component$O(thresholdPanel, "grow, span, wrap");
graphFilterView.add$java_awt_Component(this.gFurtherActionPanel);
noGraphFilterView.add$java_awt_Component$O(this.ngSearchPanel, "grow, span, wrap");
noGraphFilterView.add$java_awt_Component$O(this.ngStructureFilterPanel, "grow, span, wrap");
noGraphFilterView.add$java_awt_Component(this.ngFurtherActionPanel);
this.annotationComboBoxPanel.add$java_awt_Component(this.getAnnotations$());
this.switchableViewsPanel.add$java_awt_Component$O(noGraphFilterView, C$.NO_GRAPH_VIEW);
this.switchableViewsPanel.add$java_awt_Component$O(graphFilterView, C$.GRAPH_VIEW);
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(24,1)));
this.add$java_awt_Component$O(this.annotationComboBoxPanel, "First");
this.add$java_awt_Component$O(this.switchableViewsPanel, "Center");
this.add$java_awt_Component$O(actionPanel, "South");
this.selectedAnnotationChanged$();
this.updateThresholdPanelToolTip$();
this.validate$();
});

Clazz.newMeth(C$, 'updateThresholdPanelToolTip$', function () {
this.thresholdValue.setToolTipText$S("");
this.slider.setToolTipText$S("");
var defaultTtip=$I$(7).getString$S("info.change_threshold_mode_to_enable");
var thresh=this.getThreshold$().getSelectedItem$().toString();
if (thresh.equalsIgnoreCase$S("No Threshold")) {
this.thresholdValue.setToolTipText$S(defaultTtip);
this.slider.setToolTipText$S(defaultTtip);
}});

Clazz.newMeth(C$, 'reset$', function () {
if (this.getOldHiddenColumns$() != null ) {
this.av.getColumnSelection$().clear$();
if (this.av.getAnnotationColumnSelectionState$() != null ) {
var oldHidden=this.av.getAnnotationColumnSelectionState$().getOldHiddenColumns$();
this.av.getAlignment$().setHiddenColumns$jalview_datamodel_HiddenColumns(oldHidden);
}this.av.sendSelection$();
this.ap.paintAlignment$Z$Z(true, true);
}});

Clazz.newMeth(C$, 'valueChanged$Z', function (updateAllAnnotation) {
if (this.slider.isEnabled$()) {
this.getCurrentAnnotation$().threshold.value=this.slider.getValue$() / 1000.0;
this.updateView$();
this.propagateSeqAssociatedThreshold$Z$jalview_datamodel_AlignmentAnnotation(updateAllAnnotation, this.getCurrentAnnotation$());
this.ap.paintAlignment$Z$Z(false, false);
}});

Clazz.newMeth(C$, 'updateView$', function () {
if (this.adjusting) {
return;
}var filterParams=Clazz.new_($I$(25,1));
this.setCurrentAnnotation$jalview_datamodel_AlignmentAnnotation(this.av.getAlignment$().getAlignmentAnnotation$()[this.annmap[this.getAnnotations$().getSelectedIndex$()]]);
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
this.getCurrentAnnotation$().setThreshold$jalview_datamodel_GraphLine(Clazz.new_([(this.getCurrentAnnotation$().graphMax - this.getCurrentAnnotation$().graphMin) / 2.0, "Threshold", $I$(19).black],$I$(26,1).c$$F$S$java_awt_Color));
}this.adjusting=true;
var range=this.getCurrentAnnotation$().graphMax * 1000 - this.getCurrentAnnotation$().graphMin * 1000;
this.slider.setMinimum$I(((this.getCurrentAnnotation$().graphMin * 1000)|0));
this.slider.setMaximum$I(((this.getCurrentAnnotation$().graphMax * 1000)|0));
this.slider.setValue$I(((this.getCurrentAnnotation$().threshold.value * 1000)|0));
this.setThresholdValueText$();
this.slider.setMajorTickSpacing$I(((range / 10.0)|0));
this.slider.setEnabled$Z(true);
this.thresholdValue.setEnabled$Z(true);
this.adjusting=false;
filterParams.setThresholdType$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_ThresholdType($I$(27).NO_THRESHOLD);
if (this.getCurrentAnnotation$().isQuantitative$()) {
filterParams.setThresholdValue$F(this.getCurrentAnnotation$().threshold.value);
if (selectedThresholdItem == 1) {
filterParams.setThresholdType$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_ThresholdType($I$(27).ABOVE_THRESHOLD);
} else if (selectedThresholdItem == 0) {
filterParams.setThresholdType$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_ThresholdType($I$(27).BELOW_THRESHOLD);
}}}this.updateThresholdPanelToolTip$();
if (this.currentStructureFilterPanel != null ) {
if (this.currentStructureFilterPanel.alphaHelix.isSelected$()) {
filterParams.setFilterAlphaHelix$Z(true);
}if (this.currentStructureFilterPanel.betaStrand.isSelected$()) {
filterParams.setFilterBetaSheet$Z(true);
}if (this.currentStructureFilterPanel.turn.isSelected$()) {
filterParams.setFilterTurn$Z(true);
}}if (this.currentSearchPanel != null ) {
if (!this.currentSearchPanel.searchBox.getUserInput$().isEmpty$()) {
filterParams.setRegexString$S(this.currentSearchPanel.searchBox.getUserInput$());
if (this.currentSearchPanel.displayName.isSelected$()) {
filterParams.addRegexSearchField$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_SearchableAnnotationField($I$(28).DISPLAY_STRING);
}if (this.currentSearchPanel.description.isSelected$()) {
filterParams.addRegexSearchField$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_SearchableAnnotationField($I$(28).DESCRIPTION);
}}}this.av.showAllHiddenColumns$();
this.av.getColumnSelection$().filterAnnotations$jalview_datamodel_AnnotationA$jalview_viewmodel_annotationfilter_AnnotationFilterParameter(this.getCurrentAnnotation$().annotations, filterParams);
var hideCols=this.getActionOption$() == C$.ACTION_OPTION_HIDE;
if (hideCols) {
this.av.hideSelectedColumns$();
}this.av.sendSelection$();
filterParams=null;
this.av.setAnnotationColumnSelectionState$jalview_gui_AnnotationColumnChooser(this);
this.ap.paintAlignment$Z$Z(hideCols, hideCols);
});

Clazz.newMeth(C$, 'getOldHiddenColumns$', function () {
return this.oldHiddenColumns;
});

Clazz.newMeth(C$, 'setOldHiddenColumns$jalview_datamodel_HiddenColumns', function (currentHiddenColumns) {
if (currentHiddenColumns != null ) {
this.oldHiddenColumns=Clazz.new_($I$(29,1).c$$jalview_datamodel_HiddenColumns,[currentHiddenColumns]);
}});

Clazz.newMeth(C$, 'getCurrentFutherActionPanel$', function () {
return this.currentFurtherActionPanel;
});

Clazz.newMeth(C$, 'setCurrentFutherActionPanel$jalview_gui_AnnotationColumnChooser_FurtherActionPanel', function (currentFutherActionPanel) {
this.currentFurtherActionPanel=currentFutherActionPanel;
});

Clazz.newMeth(C$, 'getCurrentSearchPanel$', function () {
return this.currentSearchPanel;
});

Clazz.newMeth(C$, 'setCurrentSearchPanel$jalview_gui_AnnotationColumnChooser_SearchPanel', function (currentSearchPanel) {
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

Clazz.newMeth(C$, 'setCurrentStructureFilterPanel$jalview_gui_AnnotationColumnChooser_StructureFilterPanel', function (currentStructureFilterPanel) {
this.currentStructureFilterPanel=currentStructureFilterPanel;
});

Clazz.newMeth(C$, 'select_action$java_awt_event_ActionEvent', function (actionEvent) {
var radioButton=actionEvent.getSource$();
if (radioButton.isSelected$()) {
this.setActionOption$I(1);
this.updateView$();
}});

Clazz.newMeth(C$, 'hide_action$java_awt_event_ActionEvent', function (actionEvent) {
var radioButton=actionEvent.getSource$();
if (radioButton.isSelected$()) {
this.setActionOption$I(C$.ACTION_OPTION_HIDE);
this.updateView$();
}});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
this.selectedAnnotationChanged$();
});

Clazz.newMeth(C$, 'selectedAnnotationChanged$', function () {
var currentView=C$.NO_GRAPH_VIEW;
if (this.av.getAlignment$().getAlignmentAnnotation$()[this.annmap[this.getAnnotations$().getSelectedIndex$()]].isQuantitative$()) {
currentView=C$.GRAPH_VIEW;
}p$1.saveCache.apply(this, []);
this.gSearchPanel.syncState$();
this.gFurtherActionPanel.syncState$();
this.gStructureFilterPanel.syncState$();
this.ngSearchPanel.syncState$();
this.ngFurtherActionPanel.syncState$();
this.ngStructureFilterPanel.syncState$();
var switchableViewsLayout=this.switchableViewsPanel.getLayout$();
switchableViewsLayout.show$java_awt_Container$S(this.switchableViewsPanel, currentView);
this.updateView$();
});

Clazz.newMeth(C$, 'ok_actionPerformed$', function () {
p$1.saveCache.apply(this, []);
C$.superclazz.prototype.ok_actionPerformed$.apply(this, []);
});

Clazz.newMeth(C$, 'cancel_actionPerformed$', function () {
p$1.saveCache.apply(this, []);
C$.superclazz.prototype.cancel_actionPerformed$.apply(this, []);
});

Clazz.newMeth(C$, 'saveCache', function () {
this.gSearchPanel.searchBox.persistCache$();
this.ngSearchPanel.searchBox.persistCache$();
this.gSearchPanel.searchBox.updateCache$();
this.ngSearchPanel.searchBox.updateCache$();
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.ACTION_OPTION_HIDE=2;
C$.NO_GRAPH_VIEW="0";
C$.GRAPH_VIEW="1";
C$.MIN_WIDTH=($I$(11).isJS$() ? 370 : 420);
C$.MIN_HEIGHT=($I$(11).isJS$() ? 370 : 430);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnnotationColumnChooser, "FurtherActionPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hideOption=Clazz.new_($I$(1,1));
this.selectOption=Clazz.new_($I$(1,1));
this.optionsGroup=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['aColChooser','jalview.gui.AnnotationColumnChooser','hideOption','javax.swing.JRadioButton','+selectOption','optionsGroup','javax.swing.ButtonGroup']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AnnotationColumnChooser', function (aColChooser) {
Clazz.super_(C$, this);
this.aColChooser=aColChooser;
$I$(3).jvInitComponent$javax_swing_AbstractButton$S(this.selectOption, "action.select");
this.selectOption.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColumnChooser$FurtherActionPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$FurtherActionPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.b$['jalview.gui.AnnotationColumnChooser.FurtherActionPanel'].selectRadioAction$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.AnnotationColumnChooser.FurtherActionPanel'], [actionEvent]);
});
})()
), Clazz.new_(P$.AnnotationColumnChooser$FurtherActionPanel$1.$init$,[this, null])));
$I$(3).jvInitComponent$javax_swing_AbstractButton$S(this.hideOption, "action.hide");
this.hideOption.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColumnChooser$FurtherActionPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$FurtherActionPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.b$['jalview.gui.AnnotationColumnChooser.FurtherActionPanel'].hideRadioAction$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.AnnotationColumnChooser.FurtherActionPanel'], [actionEvent]);
});
})()
), Clazz.new_(P$.AnnotationColumnChooser$FurtherActionPanel$2.$init$,[this, null])));
this.optionsGroup.add$javax_swing_AbstractButton(this.selectOption);
this.optionsGroup.add$javax_swing_AbstractButton(this.hideOption);
this.optionsGroup.setSelected$javax_swing_ButtonModel$Z(this.selectOption.getModel$(), true);
$I$(3).jvInitComponent$javax_swing_JComponent(this);
this.syncState$();
this.add$java_awt_Component(this.selectOption);
this.add$java_awt_Component(this.hideOption);
}, 1);

Clazz.newMeth(C$, 'selectRadioAction$java_awt_event_ActionEvent', function (actionEvent) {
this.aColChooser.setCurrentFutherActionPanel$jalview_gui_AnnotationColumnChooser_FurtherActionPanel(this);
this.aColChooser.select_action$java_awt_event_ActionEvent(actionEvent);
});

Clazz.newMeth(C$, 'hideRadioAction$java_awt_event_ActionEvent', function (actionEvent) {
this.aColChooser.setCurrentFutherActionPanel$jalview_gui_AnnotationColumnChooser_FurtherActionPanel(this);
this.aColChooser.hide_action$java_awt_event_ActionEvent(actionEvent);
});

Clazz.newMeth(C$, 'syncState$', function () {
if (this.aColChooser.getActionOption$() == $I$(4).ACTION_OPTION_HIDE) {
this.optionsGroup.setSelected$javax_swing_ButtonModel$Z(this.hideOption.getModel$(), true);
} else {
this.optionsGroup.setSelected$javax_swing_ButtonModel$Z(this.selectOption.getModel$(), true);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnnotationColumnChooser, "StructureFilterPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.alphaHelix=Clazz.new_($I$(5,1));
this.betaStrand=Clazz.new_($I$(5,1));
this.turn=Clazz.new_($I$(5,1));
this.all=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['aColChooser','jalview.gui.AnnotationColumnChooser','alphaHelix','javax.swing.JCheckBox','+betaStrand','+turn','+all']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AnnotationColumnChooser', function (aColChooser) {
Clazz.super_(C$, this);
this.aColChooser=aColChooser;
$I$(3).jvInitComponent$javax_swing_AbstractButton$S(this.alphaHelix, "label.alpha_helix");
this.alphaHelix.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColumnChooser$StructureFilterPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$StructureFilterPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.b$['jalview.gui.AnnotationColumnChooser.StructureFilterPanel'].alphaHelix_actionPerformed$.apply(this.b$['jalview.gui.AnnotationColumnChooser.StructureFilterPanel'], []);
});
})()
), Clazz.new_(P$.AnnotationColumnChooser$StructureFilterPanel$1.$init$,[this, null])));
$I$(3).jvInitComponent$javax_swing_AbstractButton$S(this.betaStrand, "label.beta_strand");
this.betaStrand.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColumnChooser$StructureFilterPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$StructureFilterPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.b$['jalview.gui.AnnotationColumnChooser.StructureFilterPanel'].betaStrand_actionPerformed$.apply(this.b$['jalview.gui.AnnotationColumnChooser.StructureFilterPanel'], []);
});
})()
), Clazz.new_(P$.AnnotationColumnChooser$StructureFilterPanel$2.$init$,[this, null])));
$I$(3).jvInitComponent$javax_swing_AbstractButton$S(this.turn, "label.turn");
this.turn.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColumnChooser$StructureFilterPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$StructureFilterPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.b$['jalview.gui.AnnotationColumnChooser.StructureFilterPanel'].turn_actionPerformed$.apply(this.b$['jalview.gui.AnnotationColumnChooser.StructureFilterPanel'], []);
});
})()
), Clazz.new_(P$.AnnotationColumnChooser$StructureFilterPanel$3.$init$,[this, null])));
$I$(3).jvInitComponent$javax_swing_AbstractButton$S(this.all, "label.select_all");
this.all.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColumnChooser$StructureFilterPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$StructureFilterPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.b$['jalview.gui.AnnotationColumnChooser.StructureFilterPanel'].all_actionPerformed$.apply(this.b$['jalview.gui.AnnotationColumnChooser.StructureFilterPanel'], []);
});
})()
), Clazz.new_(P$.AnnotationColumnChooser$StructureFilterPanel$4.$init$,[this, null])));
this.setBorder$javax_swing_border_Border(Clazz.new_([$I$(7).getString$S("label.structures_filter")],$I$(6,1).c$$S));
$I$(3).jvInitComponent$javax_swing_JComponent(this);
this.add$java_awt_Component(this.all);
this.add$java_awt_Component(this.alphaHelix);
this.add$java_awt_Component(this.betaStrand);
this.add$java_awt_Component(this.turn);
}, 1);

Clazz.newMeth(C$, 'alphaHelix_actionPerformed$', function () {
this.updateSelectAllState$();
this.aColChooser.setCurrentStructureFilterPanel$jalview_gui_AnnotationColumnChooser_StructureFilterPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'betaStrand_actionPerformed$', function () {
this.updateSelectAllState$();
this.aColChooser.setCurrentStructureFilterPanel$jalview_gui_AnnotationColumnChooser_StructureFilterPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'turn_actionPerformed$', function () {
this.updateSelectAllState$();
this.aColChooser.setCurrentStructureFilterPanel$jalview_gui_AnnotationColumnChooser_StructureFilterPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'all_actionPerformed$', function () {
if (this.all.isSelected$()) {
this.alphaHelix.setSelected$Z(true);
this.betaStrand.setSelected$Z(true);
this.turn.setSelected$Z(true);
} else {
this.alphaHelix.setSelected$Z(false);
this.betaStrand.setSelected$Z(false);
this.turn.setSelected$Z(false);
}this.aColChooser.setCurrentStructureFilterPanel$jalview_gui_AnnotationColumnChooser_StructureFilterPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'updateSelectAllState$', function () {
if (this.alphaHelix.isSelected$() && this.betaStrand.isSelected$() && this.turn.isSelected$()  ) {
this.all.setSelected$Z(true);
} else {
this.all.setSelected$Z(false);
}});

Clazz.newMeth(C$, 'syncState$', function () {
var sfp=this.aColChooser.getCurrentStructureFilterPanel$();
if (sfp != null ) {
this.alphaHelix.setSelected$Z(sfp.alphaHelix.isSelected$());
this.betaStrand.setSelected$Z(sfp.betaStrand.isSelected$());
this.turn.setSelected$Z(sfp.turn.isSelected$());
if (sfp.all.isSelected$()) {
this.all.setSelected$Z(true);
this.alphaHelix.setSelected$Z(true);
this.betaStrand.setSelected$Z(true);
this.turn.setSelected$Z(true);
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AnnotationColumnChooser, "SearchPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.displayName=Clazz.new_($I$(5,1));
this.description=Clazz.new_($I$(5,1));
this.searchBox=Clazz.new_($I$(8,1).c$$S,["CACHE.SELECT_FILTER_BY_ANNOT"]);
},1);

C$.$fields$=[['O',['aColChooser','jalview.gui.AnnotationColumnChooser','displayName','javax.swing.JCheckBox','+description','searchBox','jalview.io.cache.JvCacheableInputBox']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AnnotationColumnChooser', function (aColChooser) {
Clazz.super_(C$, this);
this.aColChooser=aColChooser;
$I$(3).jvInitComponent$javax_swing_JComponent(this);
this.setBorder$javax_swing_border_Border(Clazz.new_([$I$(7).getString$S("label.search_filter")],$I$(6,1).c$$S));
this.searchBox.setPrototypeDisplayValue$S("XXXXXXXXXXXXXXXXXXXXXXX");
this.searchBox.getComponent$().setToolTipText$S($I$(7).getString$S("info.enter_search_text_here"));
this.searchBox.addKeyListener$java_awt_event_KeyListener(((P$.AnnotationColumnChooser$SearchPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$SearchPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
if (e.getKeyCode$() == 10) {
e.consume$();
this.b$['jalview.gui.AnnotationColumnChooser.SearchPanel'].searchStringAction$.apply(this.b$['jalview.gui.AnnotationColumnChooser.SearchPanel'], []);
}});
})()
), Clazz.new_($I$(9,1),[this, null],P$.AnnotationColumnChooser$SearchPanel$1)));
this.searchBox.addFocusListener$java_awt_event_FocusListener(((P$.AnnotationColumnChooser$SearchPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$SearchPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
this.b$['jalview.gui.AnnotationColumnChooser.SearchPanel'].searchStringAction$.apply(this.b$['jalview.gui.AnnotationColumnChooser.SearchPanel'], []);
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.AnnotationColumnChooser$SearchPanel$2)));
$I$(3).jvInitComponent$javax_swing_AbstractButton$S(this.displayName, "label.label");
this.displayName.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColumnChooser$SearchPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$SearchPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.b$['jalview.gui.AnnotationColumnChooser.SearchPanel'].displayNameCheckboxAction$.apply(this.b$['jalview.gui.AnnotationColumnChooser.SearchPanel'], []);
});
})()
), Clazz.new_(P$.AnnotationColumnChooser$SearchPanel$3.$init$,[this, null])));
$I$(3).jvInitComponent$javax_swing_AbstractButton$S(this.description, "label.description");
this.description.addActionListener$java_awt_event_ActionListener(((P$.AnnotationColumnChooser$SearchPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationColumnChooser$SearchPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.b$['jalview.gui.AnnotationColumnChooser.SearchPanel'].descriptionCheckboxAction$.apply(this.b$['jalview.gui.AnnotationColumnChooser.SearchPanel'], []);
});
})()
), Clazz.new_(P$.AnnotationColumnChooser$SearchPanel$4.$init$,[this, null])));
this.syncState$();
this.add$java_awt_Component(this.searchBox.getComponent$());
this.add$java_awt_Component(this.displayName);
this.add$java_awt_Component(this.description);
}, 1);

Clazz.newMeth(C$, 'displayNameCheckboxAction$', function () {
this.aColChooser.setCurrentSearchPanel$jalview_gui_AnnotationColumnChooser_SearchPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'descriptionCheckboxAction$', function () {
this.aColChooser.setCurrentSearchPanel$jalview_gui_AnnotationColumnChooser_SearchPanel(this);
this.aColChooser.updateView$();
});

Clazz.newMeth(C$, 'searchStringAction$', function () {
this.aColChooser.setCurrentSearchPanel$jalview_gui_AnnotationColumnChooser_SearchPanel(this);
this.aColChooser.updateView$();
this.updateSearchPanelToolTips$();
this.searchBox.updateCache$();
});

Clazz.newMeth(C$, 'syncState$', function () {
var sp=this.aColChooser.getCurrentSearchPanel$();
if (sp != null ) {
this.description.setEnabled$Z(sp.description.isEnabled$());
this.description.setSelected$Z(sp.description.isSelected$());
this.displayName.setEnabled$Z(sp.displayName.isEnabled$());
this.displayName.setSelected$Z(sp.displayName.isSelected$());
this.searchBox.setSelectedItem$S(sp.searchBox.getUserInput$());
}this.updateSearchPanelToolTips$();
});

Clazz.newMeth(C$, 'updateSearchPanelToolTips$', function () {
var defaultTtip=$I$(7).getString$S("info.enter_search_text_to_enable");
var labelTtip=$I$(7,"formatMessage$S$OA",["info.search_in_annotation_label", [this.this$0.annotations.getSelectedItem$().toString()]]);
var descTtip=$I$(7,"formatMessage$S$OA",["info.search_in_annotation_description", [this.this$0.annotations.getSelectedItem$().toString()]]);
this.displayName.setToolTipText$S(this.displayName.isEnabled$() ? labelTtip : defaultTtip);
this.description.setToolTipText$S(this.description.isEnabled$() ? descTtip : defaultTtip);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
