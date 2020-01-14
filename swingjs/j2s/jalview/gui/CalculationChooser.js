(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.awt.Font','jalview.gui.ComboBoxTooltipRenderer','java.util.ArrayList','java.awt.BorderLayout','javax.swing.JInternalFrame','java.awt.Color','javax.swing.JRadioButton','jalview.util.MessageManager','javax.swing.JPanel','java.awt.FlowLayout','jalview.gui.JvSwingUtils','javax.swing.BorderFactory','javax.swing.ButtonGroup','java.awt.GridLayout','javax.swing.JCheckBox','javax.swing.JLabel','javax.swing.JButton','java.awt.Dimension','jalview.gui.Desktop','javax.swing.event.InternalFrameAdapter','javax.swing.JLayeredPane','javax.swing.JComboBox','java.awt.event.MouseAdapter','javax.swing.DefaultComboBoxModel','jalview.analysis.scoremodels.ScoreModels','jalview.bin.Cache','jalview.gui.JvOptionPane','jalview.gui.PCAPanel','Thread','jalview.analysis.scoremodels.SimilarityParams']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CalculationChooser", null, 'javax.swing.JPanel');
C$.treeMatchGaps=false;
C$.VERDANA_11PT=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.treeMatchGaps=true;
C$.VERDANA_11PT=Clazz.new_($I$(1).c$$S$I$I,["Verdana", 0, 11]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.af=null;
this.pca=null;
this.neighbourJoining=null;
this.averageDistance=null;
this.modelNames=null;
this.calculate=null;
this.frame=null;
this.includeGaps=null;
this.matchGaps=null;
this.includeGappedColumns=null;
this.shorterSequence=null;
this.renderer=null;
this.tips=null;
this.pcaPanel=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.renderer=Clazz.new_($I$(2));
this.tips=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignFrame', function (alignFrame) {
Clazz.super_(C$, this,1);
this.af=alignFrame;
this.init$();
this.af.alignPanel.setCalculationDialog$jalview_gui_CalculationChooser(this);
}, 1);

Clazz.newMeth(C$, 'init$', function () {
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4)));
this.frame=Clazz.new_($I$(5));
this.frame.setContentPane$java_awt_Container(this);
this.setBackground$java_awt_Color($I$(6).white);
this.frame.addFocusListener$java_awt_event_FocusListener(((P$.CalculationChooser$1||
(function(){var C$=Clazz.newClass(P$, "CalculationChooser$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent', function (e) {
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
this.b$['jalview.gui.CalculationChooser'].validateCalcTypes$.apply(this.b$['jalview.gui.CalculationChooser'], []);
});
})()
), Clazz.new_(P$.CalculationChooser$1.$init$, [this, null])));
this.pca=Clazz.new_($I$(7).c$$S,[$I$(8).getString$S("label.principal_component_analysis")]);
this.pca.setOpaque$Z(false);
this.neighbourJoining=Clazz.new_($I$(7).c$$S,[$I$(8).getString$S("label.tree_calc_nj")]);
this.neighbourJoining.setSelected$Z(true);
this.neighbourJoining.setOpaque$Z(false);
this.averageDistance=Clazz.new_($I$(7).c$$S,[$I$(8).getString$S("label.tree_calc_av")]);
this.averageDistance.setOpaque$Z(false);
var calcChoicePanel=Clazz.new_($I$(9).c$$java_awt_LayoutManager,[Clazz.new_($I$(10).c$$I,[0])]);
calcChoicePanel.setOpaque$Z(false);
var treePanel=Clazz.new_($I$(9).c$$java_awt_LayoutManager,[Clazz.new_($I$(10).c$$I,[0])]);
treePanel.setOpaque$Z(false);
$I$(11).createTitledBorder$javax_swing_JComponent$S$Z(treePanel, $I$(8).getString$S("label.tree"), true);
var pcaBorderless=Clazz.new_($I$(9).c$$java_awt_LayoutManager,[Clazz.new_($I$(10).c$$I,[0])]);
var b=treePanel.getBorder$().getBorderInsets$java_awt_Component(treePanel);
pcaBorderless.setBorder$javax_swing_border_Border($I$(12).createEmptyBorder$I$I$I$I(2, b.left, 2, b.right));
pcaBorderless.setOpaque$Z(false);
pcaBorderless.add$java_awt_Component$I(this.pca, 0);
calcChoicePanel.add$java_awt_Component$I(pcaBorderless, 0);
treePanel.add$java_awt_Component(this.neighbourJoining);
treePanel.add$java_awt_Component(this.averageDistance);
calcChoicePanel.add$java_awt_Component(treePanel);
var calcTypes=Clazz.new_($I$(13));
calcTypes.add$javax_swing_AbstractButton(this.pca);
calcTypes.add$javax_swing_AbstractButton(this.neighbourJoining);
calcTypes.add$javax_swing_AbstractButton(this.averageDistance);
var calcChanged=((P$.CalculationChooser$2||
(function(){var C$=Clazz.newClass(P$, "CalculationChooser$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.CalculationChooser'].validateCalcTypes$.apply(this.b$['jalview.gui.CalculationChooser'], []);
});
})()
), Clazz.new_(P$.CalculationChooser$2.$init$, [this, null]));
this.pca.addActionListener$java_awt_event_ActionListener(calcChanged);
this.neighbourJoining.addActionListener$java_awt_event_ActionListener(calcChanged);
this.averageDistance.addActionListener$java_awt_event_ActionListener(calcChanged);
this.modelNames=this.buildModelOptionsList$();
var scoreModelPanel=Clazz.new_($I$(9).c$$java_awt_LayoutManager,[Clazz.new_($I$(10).c$$I,[1])]);
scoreModelPanel.setOpaque$Z(false);
scoreModelPanel.add$java_awt_Component(this.modelNames);
var paramsPanel=Clazz.new_($I$(9).c$$java_awt_LayoutManager,[Clazz.new_($I$(14).c$$I$I,[5, 1])]);
paramsPanel.setOpaque$Z(false);
this.includeGaps=Clazz.new_($I$(15).c$$S,["Include gaps"]);
this.matchGaps=Clazz.new_($I$(15).c$$S,["Match gaps"]);
this.includeGappedColumns=Clazz.new_($I$(15).c$$S,["Include gapped columns"]);
this.shorterSequence=Clazz.new_($I$(15).c$$S,["Match on shorter sequence"]);
paramsPanel.add$java_awt_Component(Clazz.new_($I$(16).c$$S,["Pairwise sequence scoring options"]));
paramsPanel.add$java_awt_Component(this.includeGaps);
paramsPanel.add$java_awt_Component(this.matchGaps);
paramsPanel.add$java_awt_Component(this.includeGappedColumns);
paramsPanel.add$java_awt_Component(this.shorterSequence);
this.calculate=Clazz.new_($I$(17).c$$S,[$I$(8).getString$S("action.calculate")]);
this.calculate.setFont$java_awt_Font(C$.VERDANA_11PT);
this.calculate.addActionListener$java_awt_event_ActionListener(((P$.CalculationChooser$3||
(function(){var C$=Clazz.newClass(P$, "CalculationChooser$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.CalculationChooser'].calculate_actionPerformed$.apply(this.b$['jalview.gui.CalculationChooser'], []);
});
})()
), Clazz.new_(P$.CalculationChooser$3.$init$, [this, null])));
var close=Clazz.new_($I$(17).c$$S,[$I$(8).getString$S("action.close")]);
close.setFont$java_awt_Font(C$.VERDANA_11PT);
close.addActionListener$java_awt_event_ActionListener(((P$.CalculationChooser$4||
(function(){var C$=Clazz.newClass(P$, "CalculationChooser$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.CalculationChooser'].close_actionPerformed$.apply(this.b$['jalview.gui.CalculationChooser'], []);
});
})()
), Clazz.new_(P$.CalculationChooser$4.$init$, [this, null])));
var actionPanel=Clazz.new_($I$(9));
actionPanel.setOpaque$Z(false);
actionPanel.add$java_awt_Component(this.calculate);
actionPanel.add$java_awt_Component(close);
var includeParams=false;
this.add$java_awt_Component$O(calcChoicePanel, "Center");
calcChoicePanel.add$java_awt_Component(scoreModelPanel);
if (includeParams) {
scoreModelPanel.add$java_awt_Component(paramsPanel);
}this.add$java_awt_Component$O(actionPanel, "South");
var width=350;
var height=includeParams ? 420 : 240;
this.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(18).c$$I$I,[325, height - 10]));
var title=$I$(8).getString$S("label.choose_calculation");
if (this.af.getViewport$().getViewName$() != null ) {
title=title + " (" + this.af.getViewport$().getViewName$() + ")" ;
}$I$(19).addInternalFrame$javax_swing_JInternalFrame$S$I$I$Z(this.frame, title, width, height, false);
calcChoicePanel.doLayout$();
this.revalidate$();
this.frame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.CalculationChooser$5||
(function(){var C$=Clazz.newClass(P$, "CalculationChooser$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (evt) {
this.b$['jalview.gui.CalculationChooser'].af.alignPanel.setCalculationDialog$jalview_gui_CalculationChooser(null);
});
})()
), Clazz.new_($I$(20), [this, null],P$.CalculationChooser$5)));
this.validateCalcTypes$();
this.frame.setLayer$Integer($I$(21).PALETTE_LAYER);
});

Clazz.newMeth(C$, 'validateCalcTypes$', function () {
var size=this.af.getViewport$().getAlignment$().getHeight$();
if (this.af.getViewport$().getSelectionGroup$() != null ) {
size=this.af.getViewport$().getSelectionGroup$().getSize$();
}var checkPca=p$1.checkEnabled$javax_swing_JRadioButton$I$I.apply(this, [this.pca, size, 4]);
var checkNeighbourJoining=p$1.checkEnabled$javax_swing_JRadioButton$I$I.apply(this, [this.neighbourJoining, size, 3]);
var checkAverageDistance=p$1.checkEnabled$javax_swing_JRadioButton$I$I.apply(this, [this.averageDistance, size, 3]);
if (checkPca || checkNeighbourJoining || checkAverageDistance  ) {
this.calculate.setToolTipText$S(null);
this.calculate.setEnabled$Z(true);
} else {
this.calculate.setEnabled$Z(false);
}p$1.updateScoreModels$javax_swing_JComboBox$java_util_List.apply(this, [this.modelNames, this.tips]);
});

Clazz.newMeth(C$, 'checkEnabled$javax_swing_JRadioButton$I$I', function (calc, size, minsize) {
var ttip=$I$(8).formatMessage$S$OA("label.you_need_at_least_n_sequences", [new Integer(minsize)]);
calc.setEnabled$Z(size >= minsize);
if (!calc.isEnabled$()) {
calc.setToolTipText$S(ttip);
} else {
calc.setToolTipText$S(null);
}if (calc.isSelected$()) {
this.modelNames.setEnabled$Z(calc.isEnabled$());
if (calc.isEnabled$()) {
return true;
} else {
this.calculate.setToolTipText$S(ttip);
}}return false;
}, p$1);

Clazz.newMeth(C$, 'buildModelOptionsList$', function () {
var scoreModelsCombo=Clazz.new_($I$(22));
scoreModelsCombo.setRenderer$javax_swing_ListCellRenderer(this.renderer);
var mouseListener=((P$.CalculationChooser$6||
(function(){var C$=Clazz.newClass(P$, "CalculationChooser$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
this.$finals$.scoreModelsCombo.setToolTipText$S(this.b$['jalview.gui.CalculationChooser'].tips.get$I(this.$finals$.scoreModelsCombo.getSelectedIndex$()));
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent', function (e) {
this.$finals$.scoreModelsCombo.setToolTipText$S(null);
});
})()
), Clazz.new_($I$(23), [this, {scoreModelsCombo: scoreModelsCombo}],P$.CalculationChooser$6));
for (var c, $c = 0, $$c = scoreModelsCombo.getComponents$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
c.addMouseListener$java_awt_event_MouseListener(mouseListener);
}
p$1.updateScoreModels$javax_swing_JComboBox$java_util_List.apply(this, [scoreModelsCombo, this.tips]);
this.renderer.setTooltips$java_util_List(this.tips);
return scoreModelsCombo;
});

Clazz.newMeth(C$, 'updateScoreModels$javax_swing_JComboBox$java_util_List', function (comboBox, toolTips) {
var curSel=comboBox.getSelectedItem$();
toolTips.clear$();
var model=Clazz.new_($I$(24));
var nucleotide=this.af.getViewport$().getAlignment$().isNucleotide$();
var models=C$.getApplicableScoreModels$Z$Z(nucleotide, this.pca.isSelected$());
var selectedIsPresent=false;
for (var sm, $sm = models.iterator$(); $sm.hasNext$()&&((sm=($sm.next$())),1);) {
if (curSel != null  && sm.getName$().equals$O(curSel) ) {
selectedIsPresent=true;
curSel=sm.getName$();
}model.addElement$TE(sm.getName$());
var tooltip=sm.getDescription$();
if (tooltip == null ) {
tooltip=$I$(8).getStringOrReturn$S$S("label.score_model_", sm.getName$());
}toolTips.add$TE(tooltip);
}
if (selectedIsPresent) {
model.setSelectedItem$O(curSel);
}comboBox.setModel$javax_swing_ComboBoxModel(model);
}, p$1);

Clazz.newMeth(C$, 'getApplicableScoreModels$Z$Z', function (nucleotide, forPca) {
var filtered=Clazz.new_($I$(3));
var scoreModels=$I$(25).getInstance$();
for (var sm, $sm = scoreModels.getModels$().iterator$(); $sm.hasNext$()&&((sm=($sm.next$())),1);) {
if (!nucleotide && sm.isProtein$()  || nucleotide && sm.isDNA$()  ) {
filtered.add$TE(sm);
}}
if (nucleotide && forPca && $I$(26).getDefault$S$Z("BLOSUM62_PCA_FOR_NUCLEOTIDE", false)  ) {
filtered.add$TE(scoreModels.getBlosum62$());
}return filtered;
}, 1);

Clazz.newMeth(C$, 'calculate_actionPerformed$', function () {
var doPCA=this.pca.isSelected$();
var modelName=this.modelNames.getSelectedItem$().toString();
var params=this.getSimilarityParameters$Z(doPCA);
if (doPCA) {
this.openPcaPanel$S$jalview_api_analysis_SimilarityParamsI(modelName, params);
} else {
this.openTreePanel$S$jalview_api_analysis_SimilarityParamsI(modelName, params);
}});

Clazz.newMeth(C$, 'openTreePanel$S$jalview_api_analysis_SimilarityParamsI', function (modelName, params) {
var viewport=this.af.getViewport$();
var sg=viewport.getSelectionGroup$();
if (sg != null  && sg.getSize$() < 3 ) {
$I$(27).showMessageDialog$java_awt_Component$S$S$I($I$(19).desktop, $I$(8).formatMessage$S$OA("label.you_need_at_least_n_sequences", [new Integer(3)]), $I$(8).getString$S("label.not_enough_sequences"), 2);
return;
}var treeType=this.neighbourJoining.isSelected$() ? "NJ" : "AV";
this.af.newTreePanel$S$S$jalview_api_analysis_SimilarityParamsI(treeType, modelName, params);
});

Clazz.newMeth(C$, 'openPcaPanel$S$jalview_api_analysis_SimilarityParamsI', function (modelName, params) {
var viewport=this.af.getViewport$();
if (((viewport.getSelectionGroup$() != null ) && (viewport.getSelectionGroup$().getSize$() < 4) && (viewport.getSelectionGroup$().getSize$() > 0)  ) || (viewport.getAlignment$().getHeight$() < 4) ) {
$I$(27).showInternalMessageDialog$java_awt_Component$S$S$I(this, $I$(8).formatMessage$S$OA("label.you_need_at_least_n_sequences", [new Integer(4)]), $I$(8).getString$S("label.sequence_selection_insufficient"), 2);
return;
}this.pcaPanel=Clazz.new_($I$(28).c$$jalview_gui_AlignmentPanel$S$jalview_api_analysis_SimilarityParamsI,[this.af.alignPanel, modelName, params]);
Clazz.new_($I$(29).c$$Runnable,[this.pcaPanel]).start$();
});

Clazz.newMeth(C$, 'closeFrame$', function () {
try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getSimilarityParameters$Z', function (doPCA) {
var includeGapGap=true;
var includeGapResidue=true;
var matchOnShortestLength=false;
var matchGap=doPCA ? false : C$.treeMatchGaps;
return Clazz.new_($I$(30).c$$Z$Z$Z$Z,[includeGapGap, matchGap, includeGapResidue, matchOnShortestLength]);
});

Clazz.newMeth(C$, 'close_actionPerformed$', function () {
try {
this.frame.setClosed$Z(true);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getPcaPanel$', function () {
return this.pcaPanel;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
