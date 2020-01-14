(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.Panel','java.awt.Label','java.awt.Choice','java.awt.Button','java.awt.FlowLayout','java.awt.BorderLayout','java.awt.MenuBar','java.awt.Menu','java.awt.CheckboxMenuItem','java.awt.MenuItem','jalview.analysis.scoremodels.ScoreModels','jalview.viewmodel.PCAModel','jalview.analysis.scoremodels.SimilarityParams','jalview.appletgui.RotatableCanvas','jalview.bin.JalviewLite','jalview.util.MessageManager','Thread','jalview.appletgui.CutAndPasteTransfer','java.awt.Frame','jalview.datamodel.Alignment','jalview.appletgui.AlignFrame','java.awt.Font','java.awt.Color']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PCAPanel", null, 'jalview.appletgui.EmbmenuFrame', ['Runnable', 'java.awt.event.ActionListener', 'java.awt.event.ItemListener']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rc=null;
this.av=null;
this.pcaModel=null;
this.top=0;
this.jPanel2=null;
this.jLabel1=null;
this.jLabel2=null;
this.jLabel3=null;
this.xCombobox=null;
this.yCombobox=null;
this.zCombobox=null;
this.resetButton=null;
this.flowLayout1=null;
this.borderLayout1=null;
this.menuBar1=null;
this.menu1=null;
this.menu2=null;
this.calcSettings=null;
this.labels=null;
this.protSetting=null;
this.nuclSetting=null;
this.values=null;
this.inputData=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.top=0;
this.jPanel2=Clazz.new_($I$(1));
this.jLabel1=Clazz.new_($I$(2));
this.jLabel2=Clazz.new_($I$(2));
this.jLabel3=Clazz.new_($I$(2));
this.xCombobox=Clazz.new_($I$(3));
this.yCombobox=Clazz.new_($I$(3));
this.zCombobox=Clazz.new_($I$(3));
this.resetButton=Clazz.new_($I$(4));
this.flowLayout1=Clazz.new_($I$(5));
this.borderLayout1=Clazz.new_($I$(6));
this.menuBar1=Clazz.new_($I$(7));
this.menu1=Clazz.new_($I$(8));
this.menu2=Clazz.new_($I$(8));
this.calcSettings=Clazz.new_($I$(8));
this.labels=Clazz.new_($I$(9));
this.protSetting=Clazz.new_($I$(9));
this.nuclSetting=Clazz.new_($I$(9));
this.values=Clazz.new_($I$(10));
this.inputData=Clazz.new_($I$(10));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignViewport', function (viewport) {
Clazz.super_(C$, this,1);
try {
p$1.jbInit.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
for (var i=1; i < 8; i++) {
this.xCombobox.addItem$S("dim " + i);
this.yCombobox.addItem$S("dim " + i);
this.zCombobox.addItem$S("dim " + i);
}
this.av=viewport;
var selected=viewport.getSelectionGroup$() != null  && viewport.getSelectionGroup$().getSize$() > 0 ;
var seqstrings=viewport.getAlignmentView$Z(selected);
var nucleotide=viewport.getAlignment$().isNucleotide$();
var seqs;
if (!selected) {
seqs=viewport.getAlignment$().getSequencesArray$();
} else {
seqs=viewport.getSelectionGroup$().getSequencesInOrder$jalview_datamodel_AlignmentI(viewport.getAlignment$());
}var sq=seqstrings.getSequences$();
var length=sq[0].getWidth$();
for (var i=0; i < seqs.length; i++) {
if (sq[i].getWidth$() != length) {
System.out.println$S("Sequences must be equal length for PCA analysis");
return;
}}
var scoreModel=$I$(11).getInstance$().getDefaultModel$Z(!nucleotide);
this.pcaModel=Clazz.new_($I$(12).c$$jalview_datamodel_AlignmentView$jalview_datamodel_SequenceIA$Z$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI,[seqstrings, seqs, nucleotide, scoreModel, $I$(13).SeqSpace]);
this.rc=Clazz.new_($I$(14).c$$jalview_viewmodel_AlignmentViewport,[viewport]);
this.embedMenuIfNeeded$java_awt_Panel(this.rc);
this.add$java_awt_Component$O(this.rc, "Center");
$I$(15).addFrame$java_awt_Frame$S$I$I(this, $I$(16).getString$S("label.principal_component_analysis"), 475, 400);
var worker=Clazz.new_($I$(17).c$$Runnable,[this]);
worker.start$();
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.calcSettings.setEnabled$Z(false);
this.rc.setEnabled$Z(false);
try {
this.nuclSetting.setState$Z(this.pcaModel.isNucleotide$());
this.protSetting.setState$Z(!this.pcaModel.isNucleotide$());
this.pcaModel.calculate$();
this.xCombobox.select$I(0);
this.yCombobox.select$I(1);
this.zCombobox.select$I(2);
this.pcaModel.updateRc$jalview_api_RotatableCanvasI(this.rc);
this.top=this.pcaModel.getTop$();
} catch (x) {
if (Clazz.exceptionOf(x,"OutOfMemoryError")){
System.err.println$S("Out of memory when calculating PCA.");
return;
} else {
throw x;
}
}
this.calcSettings.setEnabled$Z(true);
this.rc.setEnabled$Z(true);
this.rc.repaint$();
this.repaint$();
});

Clazz.newMeth(C$, 'doDimensionChange$', function () {
if (this.top == 0) {
return;
}var dim1=this.top - this.xCombobox.getSelectedIndex$();
var dim2=this.top - this.yCombobox.getSelectedIndex$();
var dim3=this.top - this.zCombobox.getSelectedIndex$();
this.pcaModel.updateRcView$I$I$I(dim1, dim2, dim3);
this.rc.resetView$();
this.rc.paint$java_awt_Graphics(this.rc.getGraphics$());
});

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (evt) {
if (evt.getSource$() === this.inputData ) {
this.showOriginalData$();
}if (evt.getSource$() === this.resetButton ) {
this.xCombobox.select$I(0);
this.yCombobox.select$I(1);
this.zCombobox.select$I(2);
this.doDimensionChange$();
}if (evt.getSource$() === this.values ) {
this.values_actionPerformed$();
}});

Clazz.newMeth(C$, ['itemStateChanged$java_awt_event_ItemEvent','itemStateChanged$'], function (evt) {
if (evt.getSource$() === this.xCombobox ) {
this.xCombobox_actionPerformed$();
} else if (evt.getSource$() === this.yCombobox ) {
this.yCombobox_actionPerformed$();
} else if (evt.getSource$() === this.zCombobox ) {
this.zCombobox_actionPerformed$();
} else if (evt.getSource$() === this.labels ) {
this.labels_itemStateChanged$java_awt_event_ItemEvent(evt);
} else if (evt.getSource$() === this.nuclSetting ) {
if (!this.pcaModel.isNucleotide$()) {
this.pcaModel.setNucleotide$Z(true);
var scoreModel=$I$(11).getInstance$().getDefaultModel$Z(false);
this.pcaModel.setScoreModel$jalview_api_analysis_ScoreModelI(scoreModel);
Clazz.new_($I$(17).c$$Runnable,[this]).start$();
}} else if (evt.getSource$() === this.protSetting ) {
if (this.pcaModel.isNucleotide$()) {
this.pcaModel.setNucleotide$Z(false);
var scoreModel=$I$(11).getInstance$().getDefaultModel$Z(true);
this.pcaModel.setScoreModel$jalview_api_analysis_ScoreModelI(scoreModel);
Clazz.new_($I$(17).c$$Runnable,[this]).start$();
}}});

Clazz.newMeth(C$, 'xCombobox_actionPerformed$', function () {
this.doDimensionChange$();
});

Clazz.newMeth(C$, 'yCombobox_actionPerformed$', function () {
this.doDimensionChange$();
});

Clazz.newMeth(C$, 'zCombobox_actionPerformed$', function () {
this.doDimensionChange$();
});

Clazz.newMeth(C$, 'values_actionPerformed$', function () {
var cap=Clazz.new_($I$(18).c$$Z$jalview_appletgui_AlignFrame,[false, null]);
var frame=Clazz.new_($I$(19));
frame.add$java_awt_Component(cap);
$I$(15).addFrame$java_awt_Frame$S$I$I(frame, $I$(16).getString$S("label.pca_details"), 500, 500);
cap.setText$S(this.pcaModel.getDetails$());
});

Clazz.newMeth(C$, 'showOriginalData$', function () {
var gc="-";
try {
gc=this.av.getGapCharacter$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
;var alAndColsel=this.pcaModel.getInputData$().getAlignmentAndHiddenColumns$C(gc);
if (alAndColsel != null  && alAndColsel[0] != null  ) {
var al=Clazz.new_($I$(20).c$$jalview_datamodel_SequenceIA,[alAndColsel[0]]);
var af=Clazz.new_($I$(21).c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z,[al, this.av.applet, "Original Data for PCA", false]);
af.viewport.getAlignment$().setHiddenColumns$jalview_datamodel_HiddenColumns(alAndColsel[1]);
}});

Clazz.newMeth(C$, 'labels_itemStateChanged$java_awt_event_ItemEvent', function (itemEvent) {
this.rc.showLabels$Z(this.labels.getState$());
});

Clazz.newMeth(C$, 'jbInit', function () {
this.setLayout$java_awt_LayoutManager(this.borderLayout1);
this.jPanel2.setLayout$java_awt_LayoutManager(this.flowLayout1);
this.jLabel1.setFont$java_awt_Font(Clazz.new_($I$(22).c$$S$I$I,["Verdana", 0, 12]));
this.jLabel1.setText$S("x=");
this.jLabel2.setFont$java_awt_Font(Clazz.new_($I$(22).c$$S$I$I,["Verdana", 0, 12]));
this.jLabel2.setText$S("y=");
this.jLabel3.setFont$java_awt_Font(Clazz.new_($I$(22).c$$S$I$I,["Verdana", 0, 12]));
this.jLabel3.setText$S("z=");
this.jPanel2.setBackground$java_awt_Color($I$(23).white);
this.zCombobox.setFont$java_awt_Font(Clazz.new_($I$(22).c$$S$I$I,["Verdana", 0, 12]));
this.zCombobox.addItemListener$java_awt_event_ItemListener(this);
this.yCombobox.setFont$java_awt_Font(Clazz.new_($I$(22).c$$S$I$I,["Verdana", 0, 12]));
this.yCombobox.addItemListener$java_awt_event_ItemListener(this);
this.xCombobox.setFont$java_awt_Font(Clazz.new_($I$(22).c$$S$I$I,["Verdana", 0, 12]));
this.xCombobox.addItemListener$java_awt_event_ItemListener(this);
this.resetButton.setFont$java_awt_Font(Clazz.new_($I$(22).c$$S$I$I,["Verdana", 0, 12]));
this.resetButton.setLabel$S($I$(16).getString$S("action.reset"));
this.resetButton.addActionListener$java_awt_event_ActionListener(this);
this.setMenuBar$java_awt_MenuBar(this.menuBar1);
this.menu1.setLabel$S($I$(16).getString$S("action.file"));
this.menu2.setLabel$S($I$(16).getString$S("action.view"));
this.calcSettings.setLabel$S($I$(16).getString$S("action.change_params"));
this.labels.setLabel$S($I$(16).getString$S("label.labels"));
this.labels.addItemListener$java_awt_event_ItemListener(this);
this.values.setLabel$S($I$(16).getString$S("label.output_values"));
this.values.addActionListener$java_awt_event_ActionListener(this);
this.inputData.setLabel$S($I$(16).getString$S("label.input_data"));
this.nuclSetting.setLabel$S($I$(16).getString$S("label.nucleotide_matrix"));
this.nuclSetting.addItemListener$java_awt_event_ItemListener(this);
this.protSetting.setLabel$S($I$(16).getString$S("label.protein_matrix"));
this.protSetting.addItemListener$java_awt_event_ItemListener(this);
this.add$java_awt_Component$O(this.jPanel2, "South");
this.jPanel2.add$java_awt_Component$O(this.jLabel1, null);
this.jPanel2.add$java_awt_Component$O(this.xCombobox, null);
this.jPanel2.add$java_awt_Component$O(this.jLabel2, null);
this.jPanel2.add$java_awt_Component$O(this.yCombobox, null);
this.jPanel2.add$java_awt_Component$O(this.jLabel3, null);
this.jPanel2.add$java_awt_Component$O(this.zCombobox, null);
this.jPanel2.add$java_awt_Component$O(this.resetButton, null);
this.menuBar1.add$java_awt_Menu(this.menu1);
this.menuBar1.add$java_awt_Menu(this.menu2);
this.menuBar1.add$java_awt_Menu(this.calcSettings);
this.menu2.add$java_awt_MenuItem(this.labels);
this.menu1.add$java_awt_MenuItem(this.values);
this.menu1.add$java_awt_MenuItem(this.inputData);
this.calcSettings.add$java_awt_MenuItem(this.nuclSetting);
this.calcSettings.add$java_awt_MenuItem(this.protSetting);
this.inputData.addActionListener$java_awt_event_ActionListener(this);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
