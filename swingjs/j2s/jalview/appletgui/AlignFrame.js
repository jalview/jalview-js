(function(){var P$=Clazz.newPackage("jalview.appletgui"),p$1={},I$=[[0,'java.awt.MenuBar','java.awt.Menu','jalview.util.MessageManager','java.awt.MenuItem','java.awt.CheckboxMenuItem','java.awt.BorderLayout','java.awt.Label','jalview.appletgui.AlignViewport','jalview.appletgui.AlignmentPanel','jalview.controller.AlignViewController','jalview.io.FeaturesFile',['jalview.analysis.AnnotationSorter','.SequenceAnnotationOrder'],'jalview.appletgui.FontChooser','jalview.io.AlignmentProperties','jalview.appletgui.CutAndPasteTransfer','java.awt.Frame','jalview.bin.JalviewLite','jalview.schemes.ClustalxColourScheme','jalview.schemes.ZappoColourScheme','jalview.schemes.TaylorColourScheme','jalview.schemes.HydrophobicColourScheme','jalview.schemes.HelixColourScheme','jalview.schemes.StrandColourScheme','jalview.schemes.TurnColourScheme','jalview.schemes.BuriedColourScheme','jalview.schemes.NucleotideColourScheme','jalview.schemes.PurinePyrimidineColourScheme','jalview.schemes.RNAHelicesColour','jalview.appletgui.UserDefinedColours','jalview.schemes.PIDColourScheme','jalview.schemes.Blosum62ColourScheme','jalview.schemes.TCoffeeColourScheme','jalview.appletgui.AnnotationColourChooser','jalview.appletgui.AnnotationColumnChooser','jalview.io.FileFormats','jalview.io.AppletFormatAdapter','jalview.io.AnnotationFile','StringBuffer','java.net.URL','java.net.URLEncoder','jalview.appletgui.PaintRefresher','jalview.util.MappingUtils','java.util.Vector','jalview.datamodel.SequenceI','jalview.commands.SlideSequencesCommand','java.util.HashMap','jalview.datamodel.HiddenColumns','jalview.util.Comparison','java.util.StringTokenizer','jalview.datamodel.Sequence','jalview.datamodel.Alignment','jalview.commands.EditCommand',['jalview.commands.EditCommand','.Action'],'java.awt.Panel','java.awt.FlowLayout','jalview.appletgui.JVDialog','jalview.datamodel.SequenceGroup','jalview.commands.TrimRegionCommand','jalview.commands.RemoveGapColCommand','jalview.commands.RemoveGapsCommand','jalview.appletgui.Finder','java.util.Arrays','jalview.appletgui.OverviewPanel','java.awt.event.WindowAdapter','jalview.appletgui.SliderPanel','jalview.analysis.AlignmentSorter','jalview.commands.OrderCommand','jalview.appletgui.RedundancyPanel','jalview.appletgui.PairwiseAlignPanel','jalview.appletgui.PCAPanel','jalview.analysis.scoremodels.PIDModel','jalview.analysis.scoremodels.ScoreModels','jalview.appletgui.TreePanel','java.awt.Color','java.awt.Font','java.awt.Canvas','jalview.appletgui.ExtJmol','jalview.datamodel.PDBEntry','jalview.io.FileFormat','jalview.io.DataSourceType','jalview.structure.StructureSelectionManager','jalview.appletgui.AppletJmol','mc_view.AppletPDBViewer','jalview.io.TCoffeeScoreFile','jalview.appletgui.FeatureSettings']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignFrame", null, 'jalview.appletgui.EmbmenuFrame', ['java.awt.event.ActionListener', 'java.awt.event.ItemListener', 'java.awt.event.KeyListener', 'jalview.api.AlignViewControllerGuiI']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.frameWidth=700;
this.frameHeight=500;
this.alignFrameMenuBar=Clazz.new_($I$(1,1));
this.fileMenu=Clazz.new_([$I$(3).getString$S("action.file")],$I$(2,1).c$$S);
this.loadApplication=Clazz.new_([$I$(3).getString$S("label.view_full_application")],$I$(4,1).c$$S);
this.loadTree=Clazz.new_([$I$(3).getString$S("label.load_associated_tree")],$I$(4,1).c$$S);
this.loadAnnotations=Clazz.new_([$I$(3).getString$S("label.load_features_annotations")],$I$(4,1).c$$S);
this.outputFeatures=Clazz.new_([$I$(3).getString$S("label.export_features")],$I$(4,1).c$$S);
this.outputAnnotations=Clazz.new_([$I$(3).getString$S("label.export_annotations")],$I$(4,1).c$$S);
this.closeMenuItem=Clazz.new_([$I$(3).getString$S("action.close")],$I$(4,1).c$$S);
this.selectAllSequenceMenuItem=Clazz.new_([$I$(3).getString$S("action.select_all")],$I$(4,1).c$$S);
this.deselectAllSequenceMenuItem=Clazz.new_([$I$(3).getString$S("action.deselect_all")],$I$(4,1).c$$S);
this.invertSequenceMenuItem=Clazz.new_([$I$(3).getString$S("action.invert_selection")],$I$(4,1).c$$S);
this.remove2LeftMenuItem=Clazz.new_($I$(4,1));
this.remove2RightMenuItem=Clazz.new_($I$(4,1));
this.removeGappedColumnMenuItem=Clazz.new_($I$(4,1));
this.removeAllGapsMenuItem=Clazz.new_($I$(4,1));
this.viewBoxesMenuItem=Clazz.new_($I$(5,1));
this.viewTextMenuItem=Clazz.new_($I$(5,1));
this.sortPairwiseMenuItem=Clazz.new_($I$(4,1));
this.sortIDMenuItem=Clazz.new_($I$(4,1));
this.sortLengthMenuItem=Clazz.new_($I$(4,1));
this.sortGroupMenuItem=Clazz.new_($I$(4,1));
this.removeRedundancyMenuItem=Clazz.new_($I$(4,1));
this.pairwiseAlignmentMenuItem=Clazz.new_($I$(4,1));
this.PCAMenuItem=Clazz.new_($I$(4,1));
this.averageDistanceTreeMenuItem=Clazz.new_($I$(4,1));
this.neighbourTreeMenuItem=Clazz.new_($I$(4,1));
this.borderLayout1=Clazz.new_($I$(6,1));
this.statusBar=Clazz.new_($I$(7,1));
this.clustalColour=Clazz.new_($I$(4,1));
this.zappoColour=Clazz.new_($I$(4,1));
this.taylorColour=Clazz.new_($I$(4,1));
this.hydrophobicityColour=Clazz.new_($I$(4,1));
this.helixColour=Clazz.new_($I$(4,1));
this.strandColour=Clazz.new_($I$(4,1));
this.turnColour=Clazz.new_($I$(4,1));
this.buriedColour=Clazz.new_($I$(4,1));
this.purinePyrimidineColour=Clazz.new_($I$(4,1));
this.RNAHelixColour=Clazz.new_($I$(4,1));
this.userDefinedColour=Clazz.new_($I$(4,1));
this.PIDColour=Clazz.new_($I$(4,1));
this.BLOSUM62Colour=Clazz.new_($I$(4,1));
this.tcoffeeColour=Clazz.new_($I$(4,1));
this.njTreeBlosumMenuItem=Clazz.new_($I$(4,1));
this.avDistanceTreeBlosumMenuItem=Clazz.new_($I$(4,1));
this.annotationPanelMenuItem=Clazz.new_($I$(5,1));
this.colourTextMenuItem=Clazz.new_($I$(5,1));
this.displayNonconservedMenuItem=Clazz.new_($I$(5,1));
this.alProperties=Clazz.new_([$I$(3).getString$S("label.alignment_props")],$I$(4,1).c$$S);
this.overviewMenuItem=Clazz.new_($I$(4,1));
this.undoMenuItem=Clazz.new_($I$(4,1));
this.redoMenuItem=Clazz.new_($I$(4,1));
this.conservationMenuItem=Clazz.new_($I$(5,1));
this.noColourmenuItem=Clazz.new_($I$(4,1));
this.wrapMenuItem=Clazz.new_($I$(5,1));
this.renderGapsMenuItem=Clazz.new_($I$(5,1));
this.findMenuItem=Clazz.new_($I$(4,1));
this.abovePIDThreshold=Clazz.new_($I$(5,1));
this.nucleotideColour=Clazz.new_($I$(4,1));
this.deleteGroups=Clazz.new_($I$(4,1));
this.grpsFromSelection=Clazz.new_($I$(4,1));
this.createGroup=Clazz.new_($I$(4,1));
this.unGroup=Clazz.new_($I$(4,1));
this.$delete=Clazz.new_($I$(4,1));
this.copy=Clazz.new_($I$(4,1));
this.cut=Clazz.new_($I$(4,1));
this.pasteMenu=Clazz.new_($I$(2,1));
this.pasteNew=Clazz.new_($I$(4,1));
this.pasteThis=Clazz.new_($I$(4,1));
this.applyToAllGroups=Clazz.new_($I$(5,1));
this.$font=Clazz.new_($I$(4,1));
this.scaleAbove=Clazz.new_($I$(5,1));
this.scaleLeft=Clazz.new_($I$(5,1));
this.scaleRight=Clazz.new_($I$(5,1));
this.modifyPID=Clazz.new_($I$(4,1));
this.modifyConservation=Clazz.new_($I$(4,1));
this.autoCalculate=null;
this.sortByTree=Clazz.new_($I$(5,1).c$$S$Z,["Sort Alignment With New Tree", true]);
this.sortByTreeMenu=Clazz.new_($I$(2,1));
this.inputText=Clazz.new_($I$(4,1));
this.documentation=Clazz.new_($I$(4,1));
this.about=Clazz.new_($I$(4,1));
this.seqLimits=Clazz.new_($I$(5,1));
this.centreColumnLabelFlag=Clazz.new_($I$(5,1));
this.followMouseOverFlag=Clazz.new_($I$(5,1));
this.showSequenceLogo=Clazz.new_($I$(5,1));
this.applyAutoAnnotationSettings=Clazz.new_($I$(5,1));
this.showConsensusHistogram=Clazz.new_($I$(5,1));
this.showGroupConsensus=Clazz.new_($I$(5,1));
this.showGroupConservation=Clazz.new_($I$(5,1));
this.normSequenceLogo=Clazz.new_($I$(5,1));
this.featureSettings=Clazz.new_($I$(4,1));
this.sequenceFeatures=Clazz.new_($I$(5,1));
this.annotationColour=Clazz.new_($I$(4,1));
this.annotationColumnSelection=Clazz.new_($I$(4,1));
this.invertColSel=Clazz.new_($I$(4,1));
this.showColumns=Clazz.new_($I$(4,1));
this.showSeqs=Clazz.new_($I$(4,1));
this.hideColumns=Clazz.new_($I$(4,1));
this.hideSequences=Clazz.new_($I$(4,1));
this.hideAllButSelection=Clazz.new_($I$(4,1));
this.hideAllSelection=Clazz.new_($I$(4,1));
this.showAllHidden=Clazz.new_($I$(4,1));
this.newView=Clazz.new_($I$(4,1));
this.fs_bounds=null;
},1);

C$.$fields$=[['Z',['showAutoCalculatedAbove'],'I',['frameWidth','frameHeight'],'S',['jalviewServletURL'],'O',['avc','jalview.api.AlignViewControllerI','alignPanel','jalview.appletgui.AlignmentPanel','viewport','jalview.appletgui.AlignViewport','annotationSortOrder','jalview.analysis.AnnotationSorter.SequenceAnnotationOrder','alignFrameMenuBar','java.awt.MenuBar','fileMenu','java.awt.Menu','loadApplication','java.awt.MenuItem','+loadTree','+loadAnnotations','+outputFeatures','+outputAnnotations','+closeMenuItem','+selectAllSequenceMenuItem','+deselectAllSequenceMenuItem','+invertSequenceMenuItem','+remove2LeftMenuItem','+remove2RightMenuItem','+removeGappedColumnMenuItem','+removeAllGapsMenuItem','viewBoxesMenuItem','java.awt.CheckboxMenuItem','+viewTextMenuItem','sortPairwiseMenuItem','java.awt.MenuItem','+sortIDMenuItem','+sortLengthMenuItem','+sortGroupMenuItem','+removeRedundancyMenuItem','+pairwiseAlignmentMenuItem','+PCAMenuItem','+averageDistanceTreeMenuItem','+neighbourTreeMenuItem','borderLayout1','java.awt.BorderLayout','statusBar','java.awt.Label','clustalColour','java.awt.MenuItem','+zappoColour','+taylorColour','+hydrophobicityColour','+helixColour','+strandColour','+turnColour','+buriedColour','+purinePyrimidineColour','+RNAHelixColour','+userDefinedColour','+PIDColour','+BLOSUM62Colour','+tcoffeeColour','+njTreeBlosumMenuItem','+avDistanceTreeBlosumMenuItem','annotationPanelMenuItem','java.awt.CheckboxMenuItem','+colourTextMenuItem','+displayNonconservedMenuItem','alProperties','java.awt.MenuItem','+overviewMenuItem','+undoMenuItem','+redoMenuItem','conservationMenuItem','java.awt.CheckboxMenuItem','noColourmenuItem','java.awt.MenuItem','wrapMenuItem','java.awt.CheckboxMenuItem','+renderGapsMenuItem','findMenuItem','java.awt.MenuItem','abovePIDThreshold','java.awt.CheckboxMenuItem','nucleotideColour','java.awt.MenuItem','+deleteGroups','+grpsFromSelection','+createGroup','+unGroup','+$delete','+copy','+cut','pasteMenu','java.awt.Menu','pasteNew','java.awt.MenuItem','+pasteThis','applyToAllGroups','java.awt.CheckboxMenuItem','$font','java.awt.MenuItem','scaleAbove','java.awt.CheckboxMenuItem','+scaleLeft','+scaleRight','modifyPID','java.awt.MenuItem','+modifyConservation','autoCalculate','java.awt.CheckboxMenuItem','+sortByTree','sortByTreeMenu','java.awt.Menu','inputText','java.awt.MenuItem','+documentation','+about','seqLimits','java.awt.CheckboxMenuItem','+centreColumnLabelFlag','+followMouseOverFlag','+showSequenceLogo','+applyAutoAnnotationSettings','+showConsensusHistogram','+showGroupConsensus','+showGroupConservation','+normSequenceLogo','featureSettings','java.awt.MenuItem','sequenceFeatures','java.awt.CheckboxMenuItem','annotationColour','java.awt.MenuItem','+annotationColumnSelection','+invertColSel','+showColumns','+showSeqs','+hideColumns','+hideSequences','+hideAllButSelection','+hideAllSelection','+showAllHidden','+newView','showAlignmentAnnotations','java.awt.CheckboxMenuItem','+showSequenceAnnotations','+sortAnnBySequence','+sortAnnByLabel','+showAutoFirst','+showAutoLast','splitFrame','jalview.appletgui.SplitFrame','fs_bounds','java.awt.Rectangle']]
,['O',['copiedSequences','StringBuffer','copiedHiddenColumns','jalview.datamodel.HiddenColumns']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z',  function (al, applet, title, embedded) {
C$.c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z$Z.apply(this, [al, applet, title, embedded, true]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z$Z',  function (al, applet, title, embedded, addToDisplay) {
C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA$jalview_datamodel_HiddenColumns$jalview_bin_JalviewLite$S$Z$Z.apply(this, [al, null, null, applet, title, embedded, addToDisplay]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA$jalview_datamodel_HiddenColumns$jalview_bin_JalviewLite$S$Z',  function (al, hiddenSeqs, hidden, applet, title, embedded) {
C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA$jalview_datamodel_HiddenColumns$jalview_bin_JalviewLite$S$Z$Z.apply(this, [al, hiddenSeqs, hidden, applet, title, embedded, true]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA$jalview_datamodel_HiddenColumns$jalview_bin_JalviewLite$S$Z$Z',  function (al, hiddenSeqs, hidden, applet, title, embedded, addToDisplay) {
Clazz.super_(C$, this);
if (applet != null ) {
this.jalviewServletURL=applet.getParameter$S("APPLICATION_URL");
}try {
p$1.jbInit.apply(this, []);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
if (applet != null ) {
var param;
try {
param=applet.getParameter$S("windowWidth");
if (param != null ) {
var width=Integer.parseInt$S(param);
this.frameWidth=width;
}param=applet.getParameter$S("windowHeight");
if (param != null ) {
var height=Integer.parseInt$S(param);
this.frameHeight=height;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}this.viewport=Clazz.new_($I$(8,1).c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite,[al, applet]);
if (hiddenSeqs != null  && hiddenSeqs.length > 0 ) {
this.viewport.hideSequence$jalview_datamodel_SequenceIA(hiddenSeqs);
}if (hidden != null ) {
this.viewport.getAlignment$().setHiddenColumns$jalview_datamodel_HiddenColumns(hidden);
}this.viewport.setScaleAboveWrapped$Z(this.scaleAbove.getState$());
this.alignPanel=Clazz.new_($I$(9,1).c$$jalview_appletgui_AlignFrame$jalview_appletgui_AlignViewport,[this, this.viewport]);
this.avc=Clazz.new_($I$(10,1).c$$jalview_api_AlignViewControllerGuiI$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel,[this, this.viewport, this.alignPanel]);
this.viewport.updateConservation$jalview_api_AlignmentViewPanel(this.alignPanel);
this.viewport.updateConsensus$jalview_api_AlignmentViewPanel(this.alignPanel);
this.displayNonconservedMenuItem.setState$Z(this.viewport.getShowUnconserved$());
this.followMouseOverFlag.setState$Z(this.viewport.isFollowHighlight$());
this.showGroupConsensus.setState$Z(this.viewport.isShowGroupConsensus$());
this.showGroupConservation.setState$Z(this.viewport.isShowGroupConservation$());
this.showConsensusHistogram.setState$Z(this.viewport.isShowConsensusHistogram$());
this.showSequenceLogo.setState$Z(this.viewport.isShowSequenceLogo$());
this.normSequenceLogo.setState$Z(this.viewport.isNormaliseSequenceLogo$());
this.applyToAllGroups.setState$Z(this.viewport.getColourAppliesToAllGroups$());
this.annotationPanelMenuItem.setState$Z(this.viewport.isShowAnnotation$());
this.showAlignmentAnnotations.setEnabled$Z(this.annotationPanelMenuItem.getState$());
this.showSequenceAnnotations.setEnabled$Z(this.annotationPanelMenuItem.getState$());
this.showAlignmentAnnotations.setState$Z(true);
this.showSequenceAnnotations.setState$Z(false);
this.seqLimits.setState$Z(this.viewport.getShowJVSuffix$());
if (applet != null ) {
var param=applet.getParameter$S("sortBy");
if (param != null ) {
if (param.equalsIgnoreCase$S("Id")) {
this.sortIDMenuItem_actionPerformed$();
} else if (param.equalsIgnoreCase$S("Pairwise Identity")) {
this.sortPairwiseMenuItem_actionPerformed$();
} else if (param.equalsIgnoreCase$S("Length")) {
this.sortLengthMenuItem_actionPerformed$();
}}param=applet.getParameter$S("wrap");
if (param != null ) {
if (param.equalsIgnoreCase$S("true")) {
this.wrapMenuItem.setState$Z(true);
this.wrapMenuItem_actionPerformed$();
}}param=applet.getParameter$S("centrecolumnlabels");
if (param != null ) {
this.centreColumnLabelFlag.setState$Z(true);
p$1.centreColumnLabelFlag_stateChanged.apply(this, []);
}}if (this.viewport.getAlignment$().isNucleotide$()) {
this.conservationMenuItem.setEnabled$Z(false);
this.clustalColour.setEnabled$Z(false);
this.BLOSUM62Colour.setEnabled$Z(false);
this.zappoColour.setEnabled$Z(false);
this.taylorColour.setEnabled$Z(false);
this.hydrophobicityColour.setEnabled$Z(false);
this.helixColour.setEnabled$Z(false);
this.strandColour.setEnabled$Z(false);
this.turnColour.setEnabled$Z(false);
this.buriedColour.setEnabled$Z(false);
this.viewport.updateStrucConsensus$jalview_api_AlignmentViewPanel(this.alignPanel);
if (this.viewport.getAlignment$().hasRNAStructure$()) {
this.RNAHelixColour.setEnabled$Z(true);
} else {
this.RNAHelixColour.setEnabled$Z(false);
}} else {
this.RNAHelixColour.setEnabled$Z(false);
this.purinePyrimidineColour.setEnabled$Z(false);
this.nucleotideColour.setEnabled$Z(false);
}this.addKeyListener$java_awt_event_KeyListener(this);
this.alignPanel.seqPanel.seqCanvas.addKeyListener$java_awt_event_KeyListener(this);
this.alignPanel.idPanel.idCanvas.addKeyListener$java_awt_event_KeyListener(this);
this.alignPanel.scalePanel.addKeyListener$java_awt_event_KeyListener(this);
this.alignPanel.annotationPanel.addKeyListener$java_awt_event_KeyListener(this);
this.alignPanel.annotationPanelHolder.addKeyListener$java_awt_event_KeyListener(this);
this.alignPanel.annotationSpaceFillerHolder.addKeyListener$java_awt_event_KeyListener(this);
this.alignPanel.alabels.addKeyListener$java_awt_event_KeyListener(this);
p$1.setAnnotationsVisibility.apply(this, []);
if (addToDisplay) {
this.addToDisplay$Z(embedded);
}}, 1);

Clazz.newMeth(C$, 'addToDisplay$Z',  function (embedded) {
this.createAlignFrameWindow$Z(embedded);
this.validate$();
this.alignPanel.adjustAnnotationHeight$();
this.alignPanel.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'getAlignViewport$',  function () {
return this.viewport;
});

Clazz.newMeth(C$, 'getSeqcanvas$',  function () {
return this.alignPanel.seqPanel.seqCanvas;
});

Clazz.newMeth(C$, 'parseFeaturesFile$S$jalview_io_DataSourceType',  function (file, type) {
return this.parseFeaturesFile$S$jalview_io_DataSourceType$Z(file, type, true);
});

Clazz.newMeth(C$, 'parseFeaturesFile$S$jalview_io_DataSourceType$Z',  function (file, sourceType, autoenabledisplay) {
var featuresFile=false;
try {
var colours=this.alignPanel.seqPanel.seqCanvas.getFeatureRenderer$().getFeatureColours$();
var relaxedIdMatching=this.viewport.applet.getDefaultParameter$S$Z("relaxedidmatch", false);
featuresFile=Clazz.new_($I$(11,1).c$$O$jalview_io_DataSourceType,[file, sourceType]).parse$jalview_datamodel_AlignmentI$java_util_Map$Z$Z(this.viewport.getAlignment$(), colours, true, relaxedIdMatching);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
if (featuresFile) {
if (autoenabledisplay) {
this.viewport.setShowSequenceFeatures$Z(true);
this.sequenceFeatures.setState$Z(true);
}if (this.alignPanel.seqPanel.seqCanvas.fr != null ) {
this.alignPanel.seqPanel.seqCanvas.fr.findAllFeatures$Z(true);
}if (this.viewport.featureSettings != null ) {
this.viewport.featureSettings.refreshTable$();
}this.alignPanel.paintAlignment$Z$Z(true, true);
this.setStatus$S($I$(3).getString$S("label.successfully_added_features_alignment"));
}return featuresFile;
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (evt) {
var ranges=this.viewport.getRanges$();
if (this.viewport.cursorMode && ((evt.getKeyCode$() >= 48 && evt.getKeyCode$() <= 57 ) || (evt.getKeyCode$() >= 96 && evt.getKeyCode$() <= 105 ) ) && Character.isDigit$C(evt.getKeyChar$())  ) {
this.alignPanel.seqPanel.numberPressed$C(evt.getKeyChar$());
}switch (evt.getKeyCode$()) {
case 27:
this.deselectAllSequenceMenuItem_actionPerformed$();
this.alignPanel.alabels.cancelDrag$();
break;
case 88:
if (evt.isControlDown$() || evt.isMetaDown$() ) {
this.cut_actionPerformed$();
}break;
case 67:
if (this.viewport.cursorMode && !evt.isControlDown$() ) {
this.alignPanel.seqPanel.setCursorColumn$();
}if (evt.isControlDown$() || evt.isMetaDown$() ) {
this.copy_actionPerformed$();
}break;
case 86:
if (evt.isControlDown$()) {
this.paste$Z(evt.isShiftDown$());
}break;
case 65:
if (evt.isControlDown$() || evt.isMetaDown$() ) {
this.selectAllSequenceMenuItem_actionPerformed$();
}break;
case 40:
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.moveCursor$I$I(0, 1);
} else {
this.moveSelectedSequences$Z(false);
}break;
case 38:
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.moveCursor$I$I(0, -1);
} else {
this.moveSelectedSequences$Z(true);
}break;
case 37:
if (evt.isAltDown$() || !this.viewport.cursorMode ) {
this.slideSequences$Z$I(false, this.alignPanel.seqPanel.getKeyboardNo1$());
} else {
this.alignPanel.seqPanel.moveCursor$I$I(-1, 0);
}break;
case 39:
if (evt.isAltDown$() || !this.viewport.cursorMode ) {
this.slideSequences$Z$I(true, this.alignPanel.seqPanel.getKeyboardNo1$());
} else {
this.alignPanel.seqPanel.moveCursor$I$I(1, 0);
}break;
case 32:
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.insertGapAtCursor$Z(evt.isControlDown$() || evt.isShiftDown$() || evt.isAltDown$()  );
}break;
case 127:
case 8:
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.deleteGapAtCursor$Z(evt.isControlDown$() || evt.isShiftDown$() || evt.isAltDown$()  );
} else {
this.cut_actionPerformed$();
this.alignPanel.seqPanel.seqCanvas.repaint$();
}break;
case 83:
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.setCursorRow$();
}break;
case 80:
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.setCursorPosition$();
}break;
case 10:
case 44:
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.setCursorRowAndColumn$();
}break;
case 81:
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.setSelectionAreaAtCursor$Z(true);
}break;
case 77:
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.setSelectionAreaAtCursor$Z(false);
}break;
case 113:
this.viewport.cursorMode=!this.viewport.cursorMode;
this.setStatus$S($I$(3,"formatMessage$S$SA",["label.keyboard_editing_mode", Clazz.array(String, -1, [(this.viewport.cursorMode ? "on" : "off")])]));
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.seqCanvas.cursorX=ranges.getStartRes$();
this.alignPanel.seqPanel.seqCanvas.cursorY=ranges.getStartSeq$();
}break;
case 70:
if (evt.isControlDown$()) {
this.findMenuItem_actionPerformed$();
}break;
case 72:
{
var toggleSeqs=!evt.isControlDown$();
var toggleCols=!evt.isShiftDown$();
p$1.toggleHiddenRegions$Z$Z.apply(this, [toggleSeqs, toggleCols]);
break;
}case 33:
ranges.pageUp$();
break;
case 34:
ranges.pageDown$();
break;
case 90:
if (evt.isControlDown$()) {
this.undoMenuItem_actionPerformed$();
}break;
case 89:
if (evt.isControlDown$()) {
this.redoMenuItem_actionPerformed$();
}break;
case 76:
if (evt.isControlDown$()) {
this.trimAlignment$Z(true);
}break;
case 82:
if (evt.isControlDown$()) {
this.trimAlignment$Z(false);
}break;
case 69:
if (evt.isControlDown$()) {
if (evt.isShiftDown$()) {
this.removeAllGapsMenuItem_actionPerformed$();
} else {
this.removeGappedColumnMenuItem_actionPerformed$();
}}break;
case 73:
if (evt.isControlDown$()) {
if (evt.isAltDown$()) {
this.invertColSel_actionPerformed$();
} else {
this.invertSequenceMenuItem_actionPerformed$();
}}break;
case 71:
if (evt.isControlDown$()) {
if (evt.isShiftDown$()) {
this.unGroup_actionPerformed$();
} else {
this.createGroup_actionPerformed$();
}}break;
case 85:
if (evt.isControlDown$()) {
this.deleteGroups_actionPerformed$();
}break;
case 84:
if (evt.isControlDown$()) {
this.newView$S(null);
}break;
}
this.alignPanel.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'toggleHiddenRegions$Z$Z',  function (toggleSeqs, toggleCols) {
var hide=false;
var sg=this.viewport.getSelectionGroup$();
if (!toggleSeqs && !toggleCols ) {
if (this.viewport.hasSelectedColumns$() || (sg != null  && sg.getSize$() > 0  && sg.getStartRes$() <= sg.getEndRes$() ) ) {
if (sg != null ) {
this.invertSequenceMenuItem_actionPerformed$();
sg=this.viewport.getSelectionGroup$();
toggleSeqs=true;
}this.viewport.expandColSelection$jalview_datamodel_SequenceGroup$Z(sg, true);
this.invertColSel_actionPerformed$();
toggleCols=true;
}}if (toggleSeqs) {
if (sg != null  && sg.getSize$() != this.viewport.getAlignment$().getHeight$() ) {
hide=true;
this.viewport.hideAllSelectedSeqs$();
} else if (!(toggleCols && this.viewport.hasSelectedColumns$() )) {
this.viewport.showAllHiddenSeqs$();
}}if (toggleCols) {
if (this.viewport.hasSelectedColumns$()) {
this.viewport.hideSelectedColumns$();
if (!toggleSeqs) {
this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
}} else if (!hide) {
this.viewport.showAllHiddenColumns$();
}this.viewport.sendSelection$();
}}, p$1);

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (evt) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (evt) {
});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
var source=evt.getSource$();
if (source === this.displayNonconservedMenuItem ) {
this.displayNonconservedMenuItem_actionPerformed$();
} else if (source === this.colourTextMenuItem ) {
this.colourTextMenuItem_actionPerformed$();
} else if (source === this.wrapMenuItem ) {
this.wrapMenuItem_actionPerformed$();
} else if (source === this.scaleAbove ) {
this.viewport.setScaleAboveWrapped$Z(this.scaleAbove.getState$());
} else if (source === this.scaleLeft ) {
this.viewport.setScaleLeftWrapped$Z(this.scaleLeft.getState$());
} else if (source === this.scaleRight ) {
this.viewport.setScaleRightWrapped$Z(this.scaleRight.getState$());
} else if (source === this.seqLimits ) {
this.seqLimits_itemStateChanged$();
} else if (source === this.viewBoxesMenuItem ) {
this.viewport.setShowBoxes$Z(this.viewBoxesMenuItem.getState$());
} else if (source === this.viewTextMenuItem ) {
this.viewport.setShowText$Z(this.viewTextMenuItem.getState$());
} else if (source === this.renderGapsMenuItem ) {
this.viewport.setRenderGaps$Z(this.renderGapsMenuItem.getState$());
} else if (source === this.annotationPanelMenuItem ) {
var showAnnotations=this.annotationPanelMenuItem.getState$();
this.showAlignmentAnnotations.setEnabled$Z(showAnnotations);
this.showSequenceAnnotations.setEnabled$Z(showAnnotations);
this.viewport.setShowAnnotation$Z(showAnnotations);
this.alignPanel.setAnnotationVisible$Z(showAnnotations);
} else if (source === this.sequenceFeatures ) {
this.viewport.setShowSequenceFeatures$Z(this.sequenceFeatures.getState$());
this.alignPanel.seqPanel.seqCanvas.repaint$();
} else if (source === this.showAlignmentAnnotations ) {
p$1.setAnnotationsVisibility.apply(this, []);
} else if (source === this.showSequenceAnnotations ) {
p$1.setAnnotationsVisibility.apply(this, []);
} else if (source === this.sortAnnBySequence ) {
var newState=this.sortAnnBySequence.getState$();
this.sortAnnByLabel.setState$Z(false);
p$1.setAnnotationSortOrder$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder.apply(this, [newState ? $I$(12).SEQUENCE_AND_LABEL : $I$(12).NONE]);
p$1.setViewportAnnotationOrder.apply(this, []);
} else if (source === this.sortAnnByLabel ) {
var newState=this.sortAnnByLabel.getState$();
this.sortAnnBySequence.setState$Z(false);
p$1.setAnnotationSortOrder$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder.apply(this, [newState ? $I$(12).LABEL_AND_SEQUENCE : $I$(12).NONE]);
p$1.setViewportAnnotationOrder.apply(this, []);
} else if (source === this.showAutoFirst ) {
this.showAutoLast.setState$Z(!this.showAutoFirst.getState$());
p$1.setShowAutoCalculatedAbove$Z.apply(this, [this.showAutoFirst.getState$()]);
p$1.setViewportAnnotationOrder.apply(this, []);
} else if (source === this.showAutoLast ) {
this.showAutoFirst.setState$Z(!this.showAutoLast.getState$());
p$1.setShowAutoCalculatedAbove$Z.apply(this, [this.showAutoFirst.getState$()]);
p$1.setViewportAnnotationOrder.apply(this, []);
} else if (source === this.conservationMenuItem ) {
this.conservationMenuItem_actionPerformed$();
} else if (source === this.abovePIDThreshold ) {
this.abovePIDThreshold_actionPerformed$();
} else if (source === this.applyToAllGroups ) {
this.viewport.setColourAppliesToAllGroups$Z(this.applyToAllGroups.getState$());
} else if (source === this.autoCalculate ) {
this.viewport.autoCalculateConsensus=this.autoCalculate.getState$();
} else if (source === this.sortByTree ) {
this.viewport.sortByTree=this.sortByTree.getState$();
} else if (source === this.centreColumnLabelFlag ) {
p$1.centreColumnLabelFlag_stateChanged.apply(this, []);
} else if (source === this.followMouseOverFlag ) {
p$1.mouseOverFlag_stateChanged.apply(this, []);
} else if (source === this.showGroupConsensus ) {
this.showGroupConsensus_actionPerformed$();
} else if (source === this.showGroupConservation ) {
this.showGroupConservation_actionPerformed$();
} else if (source === this.showSequenceLogo ) {
this.showSequenceLogo_actionPerformed$();
} else if (source === this.normSequenceLogo ) {
this.normSequenceLogo_actionPerformed$();
} else if (source === this.showConsensusHistogram ) {
this.showConsensusHistogram_actionPerformed$();
} else if (source === this.applyAutoAnnotationSettings ) {
this.applyAutoAnnotationSettings_actionPerformed$();
}this.alignPanel.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'setAnnotationsVisibility',  function () {
var showForAlignment=this.showAlignmentAnnotations.getState$();
var showForSequences=this.showSequenceAnnotations.getState$();
if (this.alignPanel.getAlignment$().getAlignmentAnnotation$() != null ) {
for (var aa, $aa = 0, $$aa = this.alignPanel.getAlignment$().getAlignmentAnnotation$(); $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
var visible=(aa.sequenceRef == null  ? showForAlignment : showForSequences);
aa.visible=visible;
}
}this.alignPanel.validateAnnotationDimensions$Z(true);
this.validate$();
this.repaint$();
}, p$1);

Clazz.newMeth(C$, 'setAnnotationSortOrder$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder',  function (order) {
this.annotationSortOrder=order;
}, p$1);

Clazz.newMeth(C$, 'setViewportAnnotationOrder',  function () {
this.alignPanel.av.setSortAnnotationsBy$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder(this.annotationSortOrder);
this.alignPanel.av.setShowAutocalculatedAbove$Z(this.showAutoCalculatedAbove);
}, p$1);

Clazz.newMeth(C$, 'setShowAutoCalculatedAbove$Z',  function (showAbove) {
this.showAutoCalculatedAbove=showAbove;
}, p$1);

Clazz.newMeth(C$, 'mouseOverFlag_stateChanged',  function () {
this.viewport.setFollowHighlight$Z(this.followMouseOverFlag.getState$());
}, p$1);

Clazz.newMeth(C$, 'centreColumnLabelFlag_stateChanged',  function () {
this.viewport.centreColumnLabels=this.centreColumnLabelFlag.getState$();
this.alignPanel.annotationPanel.repaint$();
}, p$1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.viewport.applet.currentAlignFrame=this;
var source=evt.getSource$();
if (source === this.inputText ) {
this.inputText_actionPerformed$();
} else if (source === this.loadTree ) {
this.loadTree_actionPerformed$();
} else if (source === this.loadApplication ) {
this.launchFullApplication$();
} else if (source === this.loadAnnotations ) {
this.loadAnnotations$();
} else if (source === this.outputAnnotations ) {
this.outputAnnotations$Z(true);
} else if (source === this.outputFeatures ) {
this.outputFeatures$Z$S(true, "Jalview");
} else if (source === this.closeMenuItem ) {
this.closeMenuItem_actionPerformed$();
} else if (source === this.copy ) {
this.copy_actionPerformed$();
} else if (source === this.undoMenuItem ) {
this.undoMenuItem_actionPerformed$();
} else if (source === this.redoMenuItem ) {
this.redoMenuItem_actionPerformed$();
} else if (source === this.inputText ) {
this.inputText_actionPerformed$();
} else if (source === this.closeMenuItem ) {
this.closeMenuItem_actionPerformed$();
} else if (source === this.undoMenuItem ) {
this.undoMenuItem_actionPerformed$();
} else if (source === this.redoMenuItem ) {
this.redoMenuItem_actionPerformed$();
} else if (source === this.copy ) {
this.copy_actionPerformed$();
} else if (source === this.pasteNew ) {
this.pasteNew_actionPerformed$();
} else if (source === this.pasteThis ) {
this.pasteThis_actionPerformed$();
} else if (source === this.cut ) {
this.cut_actionPerformed$();
} else if (source === this.$delete ) {
this.delete_actionPerformed$();
} else if (source === this.createGroup ) {
this.createGroup_actionPerformed$();
} else if (source === this.unGroup ) {
this.unGroup_actionPerformed$();
} else if (source === this.grpsFromSelection ) {
this.makeGrpsFromSelection_actionPerformed$();
} else if (source === this.deleteGroups ) {
this.deleteGroups_actionPerformed$();
} else if (source === this.selectAllSequenceMenuItem ) {
this.selectAllSequenceMenuItem_actionPerformed$();
} else if (source === this.deselectAllSequenceMenuItem ) {
this.deselectAllSequenceMenuItem_actionPerformed$();
} else if (source === this.invertSequenceMenuItem ) {
this.invertSequenceMenuItem_actionPerformed$();
} else if (source === this.invertColSel ) {
this.viewport.invertColumnSelection$();
this.alignPanel.paintAlignment$Z$Z(false, false);
this.viewport.sendSelection$();
} else if (source === this.remove2LeftMenuItem ) {
this.trimAlignment$Z(true);
} else if (source === this.remove2RightMenuItem ) {
this.trimAlignment$Z(false);
} else if (source === this.removeGappedColumnMenuItem ) {
this.removeGappedColumnMenuItem_actionPerformed$();
} else if (source === this.removeAllGapsMenuItem ) {
this.removeAllGapsMenuItem_actionPerformed$();
} else if (source === this.findMenuItem ) {
this.findMenuItem_actionPerformed$();
} else if (source === this.$font ) {
Clazz.new_($I$(13,1).c$$jalview_appletgui_AlignmentPanel,[this.alignPanel]);
} else if (source === this.newView ) {
this.newView$S(null);
} else if (source === this.showColumns ) {
this.viewport.showAllHiddenColumns$();
this.alignPanel.paintAlignment$Z$Z(true, true);
this.viewport.sendSelection$();
} else if (source === this.showSeqs ) {
this.viewport.showAllHiddenSeqs$();
this.alignPanel.paintAlignment$Z$Z(true, true);
} else if (source === this.hideColumns ) {
this.viewport.hideSelectedColumns$();
this.alignPanel.paintAlignment$Z$Z(true, true);
this.viewport.sendSelection$();
} else if (source === this.hideSequences  && this.viewport.getSelectionGroup$() != null  ) {
this.viewport.hideAllSelectedSeqs$();
this.alignPanel.paintAlignment$Z$Z(true, true);
} else if (source === this.hideAllButSelection ) {
p$1.toggleHiddenRegions$Z$Z.apply(this, [false, false]);
this.alignPanel.paintAlignment$Z$Z(true, true);
this.viewport.sendSelection$();
} else if (source === this.hideAllSelection ) {
var sg=this.viewport.getSelectionGroup$();
this.viewport.expandColSelection$jalview_datamodel_SequenceGroup$Z(sg, false);
this.viewport.hideAllSelectedSeqs$();
this.viewport.hideSelectedColumns$();
this.alignPanel.paintAlignment$Z$Z(true, true);
this.viewport.sendSelection$();
} else if (source === this.showAllHidden ) {
this.viewport.showAllHiddenColumns$();
this.viewport.showAllHiddenSeqs$();
this.alignPanel.paintAlignment$Z$Z(true, true);
this.viewport.sendSelection$();
} else if (source === this.showGroupConsensus ) {
this.showGroupConsensus_actionPerformed$();
} else if (source === this.showGroupConservation ) {
this.showGroupConservation_actionPerformed$();
} else if (source === this.showSequenceLogo ) {
this.showSequenceLogo_actionPerformed$();
} else if (source === this.normSequenceLogo ) {
this.normSequenceLogo_actionPerformed$();
} else if (source === this.showConsensusHistogram ) {
this.showConsensusHistogram_actionPerformed$();
} else if (source === this.applyAutoAnnotationSettings ) {
this.applyAutoAnnotationSettings_actionPerformed$();
} else if (source === this.featureSettings ) {
this.showFeatureSettingsUI$();
} else if (source === this.alProperties ) {
var contents=Clazz.new_([this.viewport.getAlignment$()],$I$(14,1).c$$jalview_datamodel_AlignmentI).formatAsString$();
var cap=Clazz.new_($I$(15,1).c$$Z$jalview_appletgui_AlignFrame,[false, this]);
cap.setText$S(contents.toString());
var frame=Clazz.new_($I$(16,1));
frame.add$java_awt_Component(cap);
$I$(17,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(3,"formatMessage$S$SA",["label.alignment_properties", Clazz.array(String, -1, [this.getTitle$()])]), 400, 250]);
} else if (source === this.overviewMenuItem ) {
this.overviewMenuItem_actionPerformed$();
} else if (source === this.noColourmenuItem ) {
this.changeColour$jalview_schemes_ColourSchemeI(null);
} else if (source === this.clustalColour ) {
this.abovePIDThreshold.setState$Z(false);
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_([this.viewport.getAlignment$(), null],$I$(18,1).c$$jalview_datamodel_AnnotatedCollectionI$java_util_Map));
} else if (source === this.zappoColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(19,1)));
} else if (source === this.taylorColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(20,1)));
} else if (source === this.hydrophobicityColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(21,1)));
} else if (source === this.helixColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(22,1)));
} else if (source === this.strandColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(23,1)));
} else if (source === this.turnColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(24,1)));
} else if (source === this.buriedColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(25,1)));
} else if (source === this.nucleotideColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(26,1)));
} else if (source === this.purinePyrimidineColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(27,1)));
} else if (source === this.RNAHelixColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_([this.viewport.getAlignment$()],$I$(28,1).c$$jalview_datamodel_AnnotatedCollectionI));
} else if (source === this.modifyPID ) {
this.modifyPID_actionPerformed$();
} else if (source === this.modifyConservation ) {
this.modifyConservation_actionPerformed$();
} else if (source === this.userDefinedColour ) {
Clazz.new_($I$(29,1).c$$jalview_appletgui_AlignmentPanel$jalview_datamodel_SequenceGroup,[this.alignPanel, null]);
} else if (source === this.PIDColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(30,1)));
} else if (source === this.BLOSUM62Colour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_($I$(31,1)));
} else if (source === this.tcoffeeColour ) {
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_([this.alignPanel.getAlignment$()],$I$(32,1).c$$jalview_datamodel_AnnotatedCollectionI));
} else if (source === this.annotationColour ) {
Clazz.new_($I$(33,1).c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel,[this.viewport, this.alignPanel]);
} else if (source === this.annotationColumnSelection ) {
Clazz.new_($I$(34,1).c$$jalview_appletgui_AlignViewport$jalview_appletgui_AlignmentPanel,[this.viewport, this.alignPanel]);
} else if (source === this.sortPairwiseMenuItem ) {
this.sortPairwiseMenuItem_actionPerformed$();
} else if (source === this.sortIDMenuItem ) {
this.sortIDMenuItem_actionPerformed$();
} else if (source === this.sortLengthMenuItem ) {
this.sortLengthMenuItem_actionPerformed$();
} else if (source === this.sortGroupMenuItem ) {
this.sortGroupMenuItem_actionPerformed$();
} else if (source === this.removeRedundancyMenuItem ) {
this.removeRedundancyMenuItem_actionPerformed$();
} else if (source === this.pairwiseAlignmentMenuItem ) {
this.pairwiseAlignmentMenuItem_actionPerformed$();
} else if (source === this.PCAMenuItem ) {
this.PCAMenuItem_actionPerformed$();
} else if (source === this.averageDistanceTreeMenuItem ) {
this.averageDistanceTreeMenuItem_actionPerformed$();
} else if (source === this.neighbourTreeMenuItem ) {
this.neighbourTreeMenuItem_actionPerformed$();
} else if (source === this.njTreeBlosumMenuItem ) {
this.njTreeBlosumMenuItem_actionPerformed$();
} else if (source === this.avDistanceTreeBlosumMenuItem ) {
this.avTreeBlosumMenuItem_actionPerformed$();
} else if (source === this.documentation ) {
this.documentation_actionPerformed$();
} else if (source === this.about ) {
this.about_actionPerformed$();
}});

Clazz.newMeth(C$, 'inputText_actionPerformed$',  function () {
var cap=Clazz.new_($I$(15,1).c$$Z$jalview_appletgui_AlignFrame,[true, this]);
var frame=Clazz.new_($I$(16,1));
frame.add$java_awt_Component(cap);
$I$(17,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(3).getString$S("label.input_cut_paste"), 500, 500]);
});

Clazz.newMeth(C$, 'outputText_actionPerformed$java_awt_event_ActionEvent',  function (e) {
var cap=Clazz.new_($I$(15,1).c$$Z$jalview_appletgui_AlignFrame,[true, this]);
var frame=Clazz.new_($I$(16,1));
frame.add$java_awt_Component(cap);
$I$(17,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(3,"formatMessage$S$OA",["label.alignment_output_command", Clazz.array(java.lang.Object, -1, [e.getActionCommand$()])]), 600, 500]);
var fileFormat=$I$(35).getInstance$().forName$S(e.getActionCommand$());
cap.setText$S(Clazz.new_($I$(36,1).c$$jalview_api_AlignmentViewPanel,[this.alignPanel]).formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$Z(fileFormat, this.viewport.getAlignment$(), this.viewport.getShowJVSuffix$()));
});

Clazz.newMeth(C$, 'loadAnnotations$',  function () {
var cap=Clazz.new_($I$(15,1).c$$Z$jalview_appletgui_AlignFrame,[true, this]);
cap.setText$S($I$(3).getString$S("label.paste_features_annotations_Tcoffee_here"));
cap.setAnnotationImport$();
var frame=Clazz.new_($I$(16,1));
frame.add$java_awt_Component(cap);
$I$(17,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(3).getString$S("action.paste_annotations"), 400, 300]);
});

Clazz.newMeth(C$, 'outputAnnotations$Z',  function (displayTextbox) {
var annotation=Clazz.new_($I$(37,1)).printAnnotationsForView$jalview_api_AlignViewportI(this.viewport);
if (displayTextbox) {
var cap=Clazz.new_($I$(15,1).c$$Z$jalview_appletgui_AlignFrame,[false, this]);
var frame=Clazz.new_($I$(16,1));
frame.add$java_awt_Component(cap);
$I$(17,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(3).getString$S("label.annotations"), 600, 500]);
cap.setText$S(annotation);
}return annotation;
});

Clazz.newMeth(C$, 'getDisplayedFeatureCols',  function () {
if (this.alignPanel.getFeatureRenderer$() != null  && this.viewport.getFeaturesDisplayed$() != null  ) {
return this.alignPanel.getFeatureRenderer$().getDisplayedFeatureCols$();
}return null;
}, p$1);

Clazz.newMeth(C$, 'getDisplayedFeatureGroups',  function () {
if (this.alignPanel.getFeatureRenderer$() != null  && this.viewport.getFeaturesDisplayed$() != null  ) {
return this.alignPanel.getFeatureRenderer$().getDisplayedFeatureGroups$();
}return null;
}, p$1);

Clazz.newMeth(C$, 'outputFeatures$Z$S',  function (displayTextbox, format) {
var features;
var formatter=Clazz.new_($I$(11,1));
if (format.equalsIgnoreCase$S("Jalview")) {
features=formatter.printJalviewFormat$jalview_datamodel_SequenceIA$jalview_api_FeatureRenderer$Z$Z(this.viewport.getAlignment$().getSequencesArray$(), this.alignPanel.getFeatureRenderer$(), true, false);
} else {
features=formatter.printGffFormat$jalview_datamodel_SequenceIA$jalview_api_FeatureRenderer$Z$Z(this.viewport.getAlignment$().getSequencesArray$(), this.alignPanel.getFeatureRenderer$(), true, false);
}if (displayTextbox) {
var frimport=false;
if (features == null  || features.equals$O("No Features Visible") ) {
features="# No features visible - paste some and import them here.";
frimport=true;
}var cap=Clazz.new_($I$(15,1).c$$Z$jalview_appletgui_AlignFrame,[frimport, this]);
if (frimport) {
cap.setAnnotationImport$();
}var frame=Clazz.new_($I$(16,1));
frame.add$java_awt_Component(cap);
$I$(17,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(3).getString$S("label.features"), 600, 500]);
cap.setText$S(features);
} else {
if (features == null ) {
features="";
}}return features;
});

Clazz.newMeth(C$, 'launchFullApplication$',  function () {
var url=Clazz.new_($I$(38,1).c$$S,[this.jalviewServletURL]);
var firstSep=url.lastIndexOf$S("?") > url.lastIndexOf$S("/") ? "&" : "?";
url.append$S(firstSep);
url.append$S("open=" + this.appendProtocol$S(this.viewport.applet.getParameter$S("file")));
if (this.viewport.applet.getParameter$S("features") != null ) {
url.append$S("&features=");
url.append$S(this.appendProtocol$S(this.viewport.applet.getParameter$S("features")));
}if (this.viewport.applet.getParameter$S("annotations") != null ) {
url.append$S("&annotations=");
url.append$S(this.appendProtocol$S(this.viewport.applet.getParameter$S("annotations")));
}if (this.viewport.applet.getParameter$S("jnetfile") != null  || this.viewport.applet.getParameter$S("jpredfile") != null  ) {
url.append$S("&annotations=");
url.append$S(this.appendProtocol$S(this.viewport.applet.getParameter$S("jnetfile") != null  ? this.viewport.applet.getParameter$S("jnetfile") : this.viewport.applet.getParameter$S("jpredfile")));
}if (this.viewport.applet.getParameter$S("defaultColour") != null ) {
url.append$S("&colour=" + this.removeWhiteSpace$S(this.viewport.applet.getParameter$S("defaultColour")));
}if (this.viewport.applet.getParameter$S("userDefinedColour") != null ) {
url.append$S("&colour=" + this.removeWhiteSpace$S(this.viewport.applet.getParameter$S("userDefinedColour")));
}if (this.viewport.applet.getParameter$S("tree") != null ) {
url.append$S("&tree=" + this.appendProtocol$S(this.viewport.applet.getParameter$S("tree")));
}if (this.viewport.applet.getParameter$S("treeFile") != null ) {
url.append$S("&tree=" + this.appendProtocol$S(this.viewport.applet.getParameter$S("treeFile")));
}this.showURL$S$S(url.toString(), "FULL_APP");
});

Clazz.newMeth(C$, 'removeWhiteSpace$S',  function (colour) {
var sb=Clazz.new_($I$(38,1));
for (var i=0; i < colour.length$(); i++) {
if (Character.isWhitespace$C(colour.charAt$I(i))) {
sb.append$S("%20");
} else {
sb.append$C(colour.charAt$I(i));
}}
return sb.toString();
});

Clazz.newMeth(C$, 'appendProtocol$S',  function (url) {
try {
Clazz.new_($I$(39,1).c$$S,[url]);
url=$I$(40).encode$S$S(url, "UTF-8");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var ex = e$$;
{
url=this.viewport.applet.getCodeBase$() + url;
}
} else if (Clazz.exceptionOf(e$$,"java.io.UnsupportedEncodingException")){
var ex = e$$;
{
System.err.println$S("WARNING = IMPLEMENTATION ERROR - UNSUPPORTED ENCODING EXCEPTION FOR " + url);
ex.printStackTrace$();
}
} else {
throw e$$;
}
}
return url;
});

Clazz.newMeth(C$, 'closeMenuItem_actionPerformed$',  function () {
$I$(41).RemoveComponent$java_awt_Component(this.alignPanel);
if (this.alignPanel.seqPanel != null  && this.alignPanel.seqPanel.seqCanvas != null  ) {
$I$(41).RemoveComponent$java_awt_Component(this.alignPanel.seqPanel.seqCanvas);
}if (this.alignPanel.idPanel != null  && this.alignPanel.idPanel.idCanvas != null  ) {
$I$(41).RemoveComponent$java_awt_Component(this.alignPanel.idPanel.idCanvas);
}if ($I$(41).components.size$() == 0 && this.viewport.applet == null  ) {
System.exit$I(0);
}this.viewport=null;
if (this.alignPanel != null  && this.alignPanel.overviewPanel != null  ) {
this.alignPanel.overviewPanel.dispose$();
}this.alignPanel=null;
this.dispose$();
});

Clazz.newMeth(C$, 'updateEditMenuBar$',  function () {
if (this.viewport.getHistoryList$().size$() > 0) {
this.undoMenuItem.setEnabled$Z(true);
var command=this.viewport.getHistoryList$().peek$();
this.undoMenuItem.setLabel$S($I$(3,"formatMessage$S$OA",["label.undo_command", Clazz.array(java.lang.Object, -1, [command.getDescription$()])]));
} else {
this.undoMenuItem.setEnabled$Z(false);
this.undoMenuItem.setLabel$S($I$(3).getString$S("action.undo"));
}if (this.viewport.getRedoList$().size$() > 0) {
this.redoMenuItem.setEnabled$Z(true);
var command=this.viewport.getRedoList$().peek$();
this.redoMenuItem.setLabel$S($I$(3,"formatMessage$S$OA",["label.redo_command", Clazz.array(java.lang.Object, -1, [command.getDescription$()])]));
} else {
this.redoMenuItem.setEnabled$Z(false);
this.redoMenuItem.setLabel$S($I$(3).getString$S("action.redo"));
}});

Clazz.newMeth(C$, 'addHistoryItem$jalview_commands_CommandI',  function (command) {
if (command.getSize$() > 0) {
this.viewport.addToHistoryList$jalview_commands_CommandI(command);
this.viewport.clearRedoList$();
this.updateEditMenuBar$();
this.viewport.updateHiddenColumns$();
}});

Clazz.newMeth(C$, 'undoMenuItem_actionPerformed$',  function () {
if (this.viewport.getHistoryList$().isEmpty$()) {
return;
}var command=this.viewport.getHistoryList$().pop$();
this.viewport.addToRedoList$jalview_commands_CommandI(command);
command.undoCommand$jalview_datamodel_AlignmentIA(null);
var originalSource=this.getOriginatingSource$jalview_commands_CommandI(command);
if (originalSource !== this.viewport ) {
System.err.println$S("Warning: Viewport object mismatch whilst undoing");
}originalSource.updateHiddenColumns$();
this.updateEditMenuBar$();
originalSource.firePropertyChange$S$O$O("alignment", null, originalSource.getAlignment$().getSequences$());
});

Clazz.newMeth(C$, 'redoMenuItem_actionPerformed$',  function () {
if (this.viewport.getRedoList$().isEmpty$()) {
return;
}var command=this.viewport.getRedoList$().pop$();
this.viewport.addToHistoryList$jalview_commands_CommandI(command);
command.doCommand$jalview_datamodel_AlignmentIA(null);
var originalSource=this.getOriginatingSource$jalview_commands_CommandI(command);
if (originalSource !== this.viewport ) {
System.err.println$S("Warning: Viewport object mismatch whilst re-doing");
}originalSource.updateHiddenColumns$();
this.updateEditMenuBar$();
originalSource.firePropertyChange$S$O$O("alignment", null, originalSource.getAlignment$().getSequences$());
});

Clazz.newMeth(C$, 'getOriginatingSource$jalview_commands_CommandI',  function (command) {
var originalSource=null;
var al=null;
if (Clazz.instanceOf(command, "jalview.commands.EditCommand")) {
var editCommand=command;
al=editCommand.getAlignment$();
var comps=$I$(41).components.get$O(this.viewport.getSequenceSetId$());
for (var i=0; i < comps.size$(); i++) {
if (Clazz.instanceOf(comps.elementAt$I(i), "jalview.appletgui.AlignmentPanel")) {
if (al === (comps.elementAt$I(i)).av.getAlignment$() ) {
originalSource=(comps.elementAt$I(i)).av;
break;
}}}
}if (originalSource == null ) {
if (al != null ) {
$I$(41,"validateSequences$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI",[al, this.viewport.getAlignment$()]);
}originalSource=this.viewport;
}return originalSource;
});

Clazz.newMeth(C$, 'moveSelectedSequences$Z',  function (up) {
var sg=this.viewport.getSelectionGroup$();
if (sg == null ) {
return;
}this.viewport.getAlignment$().moveSelectedSequencesByOne$jalview_datamodel_SequenceGroup$java_util_Map$Z(sg, up ? null : this.viewport.getHiddenRepSequences$(), up);
this.alignPanel.paintAlignment$Z$Z(true, false);
var complement=this.viewport.getCodingComplement$();
if (complement != null ) {
var mappedSelection=$I$(42).mapSequenceGroup$jalview_datamodel_SequenceGroup$jalview_api_AlignViewportI$jalview_api_AlignViewportI(sg, this.viewport, complement);
complement.getAlignment$().moveSelectedSequencesByOne$jalview_datamodel_SequenceGroup$java_util_Map$Z(mappedSelection, up ? null : complement.getHiddenRepSequences$(), up);
this.getSplitFrame$().getComplement$jalview_appletgui_AlignFrame(this).alignPanel.paintAlignment$Z$Z(true, false);
}});

Clazz.newMeth(C$, 'slideSequences$Z$I',  function (right, size) {
var sg=Clazz.new_($I$(43,1));
if (this.viewport.cursorMode) {
sg.add$O(this.viewport.getAlignment$().getSequenceAt$I(this.alignPanel.seqPanel.seqCanvas.cursorY));
} else if (this.viewport.getSelectionGroup$() != null  && this.viewport.getSelectionGroup$().getSize$() != this.viewport.getAlignment$().getHeight$() ) {
sg=this.viewport.getSelectionGroup$().getSequences$java_util_Map(this.viewport.getHiddenRepSequences$());
}if (sg.size$() < 1) {
return;
}var invertGroup=Clazz.new_($I$(43,1));
for (var i=0; i < this.viewport.getAlignment$().getHeight$(); i++) {
if (!sg.contains$O(this.viewport.getAlignment$().getSequenceAt$I(i))) {
invertGroup.addElement$O(this.viewport.getAlignment$().getSequenceAt$I(i));
}}
var seqs1=sg.toArray$OA(Clazz.array($I$(44), [sg.size$()]));
var seqs2=invertGroup.toArray$OA(Clazz.array($I$(44), [invertGroup.size$()]));
for (var i=0; i < invertGroup.size$(); i++) {
seqs2[i]=invertGroup.elementAt$I(i);
}
var ssc;
if (right) {
ssc=Clazz.new_(["Slide Sequences", seqs2, seqs1, size, this.viewport.getGapCharacter$()],$I$(45,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceIA$I$C);
} else {
ssc=Clazz.new_(["Slide Sequences", seqs1, seqs2, size, this.viewport.getGapCharacter$()],$I$(45,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceIA$I$C);
}var groupAdjustment=0;
if (ssc.getGapsInsertedBegin$() && right ) {
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.moveCursor$I$I(size, 0);
} else {
groupAdjustment=size;
}} else if (!ssc.getGapsInsertedBegin$() && !right ) {
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.moveCursor$I$I(-size, 0);
} else {
groupAdjustment=-size;
}}if (groupAdjustment != 0) {
this.viewport.getSelectionGroup$().setStartRes$I(this.viewport.getSelectionGroup$().getStartRes$() + groupAdjustment);
this.viewport.getSelectionGroup$().setEndRes$I(this.viewport.getSelectionGroup$().getEndRes$() + groupAdjustment);
}var appendHistoryItem=false;
var historyList=this.viewport.getHistoryList$();
if (historyList != null  && historyList.size$() > 0  && Clazz.instanceOf(historyList.peek$(), "jalview.commands.SlideSequencesCommand") ) {
appendHistoryItem=ssc.appendSlideCommand$jalview_commands_SlideSequencesCommand(historyList.peek$());
}if (!appendHistoryItem) {
this.addHistoryItem$jalview_commands_CommandI(ssc);
}this.repaint$();
});

Clazz.newMeth(C$, 'copy_actionPerformed$',  function () {
if (this.viewport.getSelectionGroup$() == null ) {
return;
}var sg=this.viewport.getSelectionGroup$();
C$.copiedSequences=Clazz.new_($I$(38,1));
var orderedSeqs=Clazz.new_($I$(46,1));
for (var i=0; i < sg.getSize$(); i++) {
var seq=sg.getSequenceAt$I(i);
var index=this.viewport.getAlignment$().findIndex$jalview_datamodel_SequenceI(seq);
orderedSeqs.put$O$O(Integer.valueOf$I(index), seq);
}
var index=0;
var startRes;
var endRes;
var ch;
if (this.viewport.hasHiddenColumns$() && this.viewport.getSelectionGroup$() != null  ) {
var hiddenOffset=this.viewport.getSelectionGroup$().getStartRes$();
var hiddenCutoff=this.viewport.getSelectionGroup$().getEndRes$();
C$.copiedHiddenColumns=Clazz.new_([this.viewport.getAlignment$().getHiddenColumns$(), hiddenOffset, hiddenCutoff, hiddenOffset],$I$(47,1).c$$jalview_datamodel_HiddenColumns$I$I$I);
} else {
C$.copiedHiddenColumns=null;
}for (var i=0; i < sg.getSize$(); i++) {
var seq=null;
while (seq == null ){
if (orderedSeqs.containsKey$O(Integer.valueOf$I(index))) {
seq=orderedSeqs.get$O(Integer.valueOf$I(index));
++index;
break;
} else {
++index;
}}
startRes=seq.findPosition$I(sg.getStartRes$());
endRes=0;
for (var j=0; j < sg.getEndRes$() + 1 && j < seq.getLength$() ; j++) {
ch=seq.getCharAt$I(j);
if (!$I$(48,"isGap$C",[(ch)])) {
++endRes;
}}
if (endRes > 0) {
endRes+=seq.getStart$() - 1;
}C$.copiedSequences.append$S(seq.getName$() + "\t" + startRes + "\t" + endRes + "\t" + seq.getSequenceAsString$I$I(sg.getStartRes$(), sg.getEndRes$() + 1) + "\n" );
}
});

Clazz.newMeth(C$, 'pasteNew_actionPerformed$',  function () {
this.paste$Z(true);
});

Clazz.newMeth(C$, 'pasteThis_actionPerformed$',  function () {
this.paste$Z(false);
});

Clazz.newMeth(C$, 'paste$Z',  function (newAlignment) {
try {
if (C$.copiedSequences == null ) {
return;
}var st=Clazz.new_([C$.copiedSequences.toString(), "\t"],$I$(49,1).c$$S$S);
var seqs=Clazz.new_($I$(43,1));
while (st.hasMoreElements$()){
var name=st.nextToken$();
var start=Integer.parseInt$S(st.nextToken$());
var end=Integer.parseInt$S(st.nextToken$());
seqs.addElement$O(Clazz.new_([name, st.nextToken$(), start, end],$I$(50,1).c$$S$S$I$I));
}
var newSeqs=Clazz.array($I$(44), [seqs.size$()]);
for (var i=0; i < seqs.size$(); i++) {
newSeqs[i]=seqs.elementAt$I(i);
}
if (newAlignment) {
var newtitle=$I$(3).getString$S("label.copied_sequences");
if (this.getTitle$().startsWith$S($I$(3).getString$S("label.copied_sequences"))) {
newtitle=this.getTitle$();
} else {
newtitle=newtitle.concat$S($I$(3,"formatMessage$S$SA",["label.from_msname", Clazz.array(String, -1, [this.getTitle$()])]));
}var af=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z,[Clazz.new_($I$(51,1).c$$jalview_datamodel_SequenceIA,[newSeqs]), this.viewport.applet, newtitle, false]);
af.viewport.setHiddenColumns$jalview_datamodel_HiddenColumns(C$.copiedHiddenColumns);
$I$(17).addFrame$java_awt_Frame$S$I$I(af, newtitle, this.frameWidth, this.frameHeight);
} else {
this.addSequences$jalview_datamodel_SequenceIA(newSeqs);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'addSequences$jalview_datamodel_SequenceIA',  function (seqs) {
for (var i=0; i < seqs.length; i++) {
this.viewport.getAlignment$().addSequence$jalview_datamodel_SequenceI(seqs[i]);
}
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_([$I$(3).getString$S("label.add_sequences"), $I$(53).PASTE, seqs, 0, this.viewport.getAlignment$().getWidth$(), this.viewport.getAlignment$()],$I$(52,1).c$$S$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI));
this.viewport.getRanges$().setEndSeq$I(this.viewport.getAlignment$().getHeight$() - 1);
this.viewport.getAlignment$().getWidth$();
this.viewport.firePropertyChange$S$O$O("alignment", null, this.viewport.getAlignment$().getSequences$());
});

Clazz.newMeth(C$, 'cut_actionPerformed$',  function () {
this.copy_actionPerformed$();
this.delete_actionPerformed$();
});

Clazz.newMeth(C$, 'delete_actionPerformed$',  function () {
var sg=this.viewport.getSelectionGroup$();
if (sg == null ) {
return;
}var seqs=Clazz.new_($I$(43,1));
var seq;
for (var i=0; i < sg.getSize$(); i++) {
seq=sg.getSequenceAt$I(i);
seqs.addElement$O(seq);
}
if (sg.getSize$() == this.viewport.getAlignment$().getHeight$()) {
var isEntireAlignWidth=(((sg.getEndRes$() - sg.getStartRes$()) + 1) == this.viewport.getAlignment$().getWidth$()) ? true : false;
if (isEntireAlignWidth) {
var title=$I$(3).getString$S("label.delete_all");
var infoPanel=Clazz.new_($I$(54,1));
infoPanel.setLayout$java_awt_LayoutManager(Clazz.new_($I$(55,1)));
infoPanel.add$java_awt_Component(Clazz.new_([$I$(3).getString$S("warn.delete_all")],$I$(7,1).c$$S));
var dialog=Clazz.new_($I$(56,1).c$$java_awt_Frame$S$Z$I$I,[this, title, true, 400, 200]);
dialog.setMainPanel$java_awt_Panel(infoPanel);
dialog.ok.setLabel$S($I$(3).getString$S("action.ok"));
dialog.cancel.setLabel$S($I$(3).getString$S("action.cancel"));
dialog.setVisible$Z(true);
if (!dialog.accept) {
return;
}}this.viewport.getColumnSelection$().removeElements$I$I(sg.getStartRes$(), sg.getEndRes$() + 1);
}var cut=Clazz.array($I$(44), [seqs.size$()]);
for (var i=0; i < seqs.size$(); i++) {
cut[i]=seqs.elementAt$I(i);
}
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_([$I$(3).getString$S("label.cut_sequences"), $I$(53).CUT, cut, sg.getStartRes$(), sg.getEndRes$() - sg.getStartRes$() + 1, this.viewport.getAlignment$()],$I$(52,1).c$$S$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI));
this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.viewport.getAlignment$().deleteGroup$jalview_datamodel_SequenceGroup(sg);
this.viewport.firePropertyChange$S$O$O("alignment", null, this.viewport.getAlignment$().getSequences$());
if (this.viewport.getAlignment$().getHeight$() < 1) {
this.setVisible$Z(false);
}this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'showGroupConsensus_actionPerformed$',  function () {
this.viewport.setShowGroupConsensus$Z(this.showGroupConsensus.getState$());
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'showGroupConservation_actionPerformed$',  function () {
this.viewport.setShowGroupConservation$Z(this.showGroupConservation.getState$());
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'showConsensusHistogram_actionPerformed$',  function () {
this.viewport.setShowConsensusHistogram$Z(this.showConsensusHistogram.getState$());
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'showSequenceLogo_actionPerformed$',  function () {
this.viewport.setShowSequenceLogo$Z(this.showSequenceLogo.getState$());
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'normSequenceLogo_actionPerformed$',  function () {
this.showSequenceLogo.setState$Z(true);
this.viewport.setShowSequenceLogo$Z(true);
this.viewport.setNormaliseSequenceLogo$Z(this.normSequenceLogo.getState$());
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'applyAutoAnnotationSettings_actionPerformed$',  function () {
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'makeGrpsFromSelection_actionPerformed$',  function () {
if (this.avc.makeGroupsFromSelection$()) {
$I$(41,"Refresh$java_awt_Component$S",[this, this.viewport.getSequenceSetId$()]);
this.alignPanel.updateAnnotation$();
this.alignPanel.paintAlignment$Z$Z(true, true);
}});

Clazz.newMeth(C$, 'createGroup_actionPerformed$',  function () {
this.avc.createGroup$();
});

Clazz.newMeth(C$, 'unGroup_actionPerformed$',  function () {
if (this.avc.unGroup$()) {
this.alignPanel.alignmentChanged$();
}});

Clazz.newMeth(C$, 'deleteGroups_actionPerformed$',  function () {
if (this.avc.deleteGroups$()) {
this.alignPanel.alignmentChanged$();
}});

Clazz.newMeth(C$, 'selectAllSequenceMenuItem_actionPerformed$',  function () {
var sg=Clazz.new_($I$(57,1));
for (var i=0; i < this.viewport.getAlignment$().getSequences$().size$(); i++) {
sg.addSequence$jalview_datamodel_SequenceI$Z(this.viewport.getAlignment$().getSequenceAt$I(i), false);
}
sg.setEndRes$I(this.viewport.getAlignment$().getWidth$() - 1);
this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
this.alignPanel.paintAlignment$Z$Z(false, false);
$I$(41,"Refresh$java_awt_Component$S",[this.alignPanel, this.viewport.getSequenceSetId$()]);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'deselectAllSequenceMenuItem_actionPerformed$',  function () {
if (this.viewport.cursorMode) {
this.alignPanel.seqPanel.keyboardNo1=null;
this.alignPanel.seqPanel.keyboardNo2=null;
}this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.viewport.getColumnSelection$().clear$();
this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.alignPanel.idPanel.idCanvas.searchResults=null;
this.alignPanel.seqPanel.seqCanvas.highlightSearchResults$jalview_datamodel_SearchResultsI(null);
this.alignPanel.paintAlignment$Z$Z(false, false);
$I$(41,"Refresh$java_awt_Component$S",[this.alignPanel, this.viewport.getSequenceSetId$()]);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'invertSequenceMenuItem_actionPerformed$',  function () {
var sg=this.viewport.getSelectionGroup$();
for (var i=0; i < this.viewport.getAlignment$().getSequences$().size$(); i++) {
sg.addOrRemove$jalview_datamodel_SequenceI$Z(this.viewport.getAlignment$().getSequenceAt$I(i), false);
}
$I$(41,"Refresh$java_awt_Component$S",[this.alignPanel, this.viewport.getSequenceSetId$()]);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'invertColSel_actionPerformed$',  function () {
this.viewport.invertColumnSelection$();
this.alignPanel.paintAlignment$Z$Z(true, false);
$I$(41,"Refresh$java_awt_Component$S",[this.alignPanel, this.viewport.getSequenceSetId$()]);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'trimAlignment$Z',  function (trimLeft) {
var al=this.viewport.getAlignment$();
var ranges=this.viewport.getRanges$();
var colSel=this.viewport.getColumnSelection$();
var column;
if (!colSel.isEmpty$()) {
if (trimLeft) {
column=colSel.getMin$();
} else {
column=colSel.getMax$();
}var seqs;
if (this.viewport.getSelectionGroup$() != null ) {
seqs=this.viewport.getSelectionGroup$().getSequencesAsArray$java_util_Map(this.viewport.getHiddenRepSequences$());
} else {
seqs=al.getSequencesArray$();
}var trimRegion;
if (trimLeft) {
trimRegion=Clazz.new_($I$(58,1).c$$S$Z$jalview_datamodel_SequenceIA$I$jalview_datamodel_AlignmentI,["Remove Left", true, seqs, column, al]);
ranges.setStartRes$I(0);
} else {
trimRegion=Clazz.new_($I$(58,1).c$$S$Z$jalview_datamodel_SequenceIA$I$jalview_datamodel_AlignmentI,["Remove Right", false, seqs, column, al]);
}this.setStatus$S($I$(3,"formatMessage$S$SA",["label.removed_columns", Clazz.array(String, -1, [Integer.valueOf$I(trimRegion.getSize$()).toString()])]));
this.addHistoryItem$jalview_commands_CommandI(trimRegion);
for (var sg, $sg = al.getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if ((trimLeft && !sg.adjustForRemoveLeft$I(column) ) || (!trimLeft && !sg.adjustForRemoveRight$I(column) ) ) {
al.deleteGroup$jalview_datamodel_SequenceGroup(sg);
}}
this.viewport.firePropertyChange$S$O$O("alignment", null, al.getSequences$());
}});

Clazz.newMeth(C$, 'removeGappedColumnMenuItem_actionPerformed$',  function () {
var al=this.viewport.getAlignment$();
var ranges=this.viewport.getRanges$();
var start=0;
var end=ranges.getAbsoluteAlignmentWidth$() - 1;
var seqs;
if (this.viewport.getSelectionGroup$() != null ) {
seqs=this.viewport.getSelectionGroup$().getSequencesAsArray$java_util_Map(this.viewport.getHiddenRepSequences$());
start=this.viewport.getSelectionGroup$().getStartRes$();
end=this.viewport.getSelectionGroup$().getEndRes$();
} else {
seqs=this.viewport.getAlignment$().getSequencesArray$();
}var removeGapCols=Clazz.new_(["Remove Gapped Columns", seqs, start, end, this.viewport.getAlignment$()],$I$(59,1).c$$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI);
this.addHistoryItem$jalview_commands_CommandI(removeGapCols);
this.setStatus$S($I$(3,"formatMessage$S$SA",["label.removed_empty_columns", Clazz.array(String, -1, [Integer.valueOf$I(removeGapCols.getSize$()).toString()])]));
var seq=al.getSequenceAt$I(0);
var startRes=seq.findPosition$I(ranges.getStartRes$());
ranges.setStartRes$I(seq.findIndex$I(startRes) - 1);
this.viewport.firePropertyChange$S$O$O("alignment", null, al.getSequences$());
});

Clazz.newMeth(C$, 'removeAllGapsMenuItem_actionPerformed$',  function () {
var al=this.viewport.getAlignment$();
var ranges=this.viewport.getRanges$();
var start=0;
var end=ranges.getAbsoluteAlignmentWidth$() - 1;
var seqs;
if (this.viewport.getSelectionGroup$() != null ) {
seqs=this.viewport.getSelectionGroup$().getSequencesAsArray$java_util_Map(this.viewport.getHiddenRepSequences$());
start=this.viewport.getSelectionGroup$().getStartRes$();
end=this.viewport.getSelectionGroup$().getEndRes$();
} else {
seqs=this.viewport.getAlignment$().getSequencesArray$();
}var seq=al.getSequenceAt$I(0);
var startRes=seq.findPosition$I(ranges.getStartRes$());
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_($I$(60,1).c$$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI,["Remove Gaps", seqs, start, end, al]));
ranges.setStartRes$I(seq.findIndex$I(startRes) - 1);
this.viewport.firePropertyChange$S$O$O("alignment", null, al.getSequences$());
});

Clazz.newMeth(C$, 'findMenuItem_actionPerformed$',  function () {
Clazz.new_($I$(61,1).c$$jalview_appletgui_AlignmentPanel,[this.alignPanel]);
});

Clazz.newMeth(C$, 'newView$S',  function (viewtitle) {
var newal;
if (this.viewport.hasHiddenRows$()) {
newal=Clazz.new_([this.viewport.getAlignment$().getHiddenSequences$().getFullAlignment$().getSequencesArray$()],$I$(51,1).c$$jalview_datamodel_SequenceIA);
} else {
newal=Clazz.new_([this.viewport.getAlignment$().getSequencesArray$()],$I$(51,1).c$$jalview_datamodel_SequenceIA);
}if (this.viewport.getAlignment$().getAlignmentAnnotation$() != null ) {
for (var i=0; i < this.viewport.getAlignment$().getAlignmentAnnotation$().length; i++) {
if (!this.viewport.getAlignment$().getAlignmentAnnotation$()[i].autoCalculated) {
newal.addAnnotation$jalview_datamodel_AlignmentAnnotation(this.viewport.getAlignment$().getAlignmentAnnotation$()[i]);
}}
}var newaf=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$jalview_bin_JalviewLite$S$Z,[newal, this.viewport.applet, "", false]);
newaf.viewport.setSequenceSetId$S(this.alignPanel.av.getSequenceSetId$());
$I$(41,"Register$java_awt_Component$S",[this.alignPanel, this.alignPanel.av.getSequenceSetId$()]);
$I$(41,"Register$java_awt_Component$S",[newaf.alignPanel, newaf.alignPanel.av.getSequenceSetId$()]);
$I$(41,"Register$java_awt_Component$S",[newaf.alignPanel.idPanel.idCanvas, newaf.alignPanel.av.getSequenceSetId$()]);
$I$(41,"Register$java_awt_Component$S",[newaf.alignPanel.seqPanel.seqCanvas, newaf.alignPanel.av.getSequenceSetId$()]);
var comps=$I$(41).components.get$O(this.viewport.getSequenceSetId$());
var viewSize=-1;
for (var i=0; i < comps.size$(); i++) {
if (Clazz.instanceOf(comps.elementAt$I(i), "jalview.appletgui.AlignmentPanel")) {
++viewSize;
}}
var title= String.instantialize(this.getTitle$());
if (viewtitle != null ) {
title=viewtitle + " ( " + title + ")" ;
} else {
if (title.indexOf$S("(View") > -1) {
title=title.substring$I$I(0, title.indexOf$S("(View"));
}title+="(View " + viewSize + ")" ;
}newaf.setTitle$S(title.toString());
newaf.viewport.setHistoryList$java_util_Deque(this.viewport.getHistoryList$());
newaf.viewport.setRedoList$java_util_Deque(this.viewport.getRedoList$());
return newaf;
});

Clazz.newMeth(C$, 'getFeatureGroups$',  function () {
var fr=null;
if (this.alignPanel != null  && (fr=this.alignPanel.getFeatureRenderer$()) != null  ) {
var gps=fr.getFeatureGroups$();
var _gps=gps.toArray$OA(Clazz.array(String, [gps.size$()]));
return _gps;
}return null;
});

Clazz.newMeth(C$, 'getFeatureGroupsOfState$Z',  function (visible) {
var fr=null;
if (this.alignPanel != null  && (fr=this.alignPanel.getFeatureRenderer$()) != null  ) {
var gps=fr.getGroups$Z(visible);
var _gps=gps.toArray$OA(Clazz.array(String, [gps.size$()]));
return _gps;
}return null;
});

Clazz.newMeth(C$, 'setFeatureGroupState$SA$Z',  function (groups, state) {
var fr=null;
this.sequenceFeatures.setState$Z(true);
this.viewport.setShowSequenceFeatures$Z(true);
if (this.alignPanel != null  && (fr=this.alignPanel.getFeatureRenderer$()) != null  ) {
fr.setGroupVisibility$java_util_List$Z($I$(62).asList$OA(groups), state);
this.alignPanel.seqPanel.seqCanvas.repaint$();
if (this.alignPanel.overviewPanel != null ) {
this.alignPanel.overviewPanel.updateOverviewImage$();
}}});

Clazz.newMeth(C$, 'seqLimits_itemStateChanged$',  function () {
this.viewport.setShowJVSuffix$Z(this.seqLimits.getState$());
this.alignPanel.fontChanged$();
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'colourTextMenuItem_actionPerformed$',  function () {
this.viewport.setColourText$Z(this.colourTextMenuItem.getState$());
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'displayNonconservedMenuItem_actionPerformed$',  function () {
this.viewport.setShowUnconserved$Z(this.displayNonconservedMenuItem.getState$());
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'wrapMenuItem_actionPerformed$',  function () {
this.viewport.setWrapAlignment$Z(this.wrapMenuItem.getState$());
this.alignPanel.setWrapAlignment$Z(this.wrapMenuItem.getState$());
this.scaleAbove.setEnabled$Z(this.wrapMenuItem.getState$());
this.scaleLeft.setEnabled$Z(this.wrapMenuItem.getState$());
this.scaleRight.setEnabled$Z(this.wrapMenuItem.getState$());
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'overviewMenuItem_actionPerformed$',  function () {
if (this.alignPanel.overviewPanel != null ) {
return;
}var frame=Clazz.new_($I$(16,1));
var overview=Clazz.new_($I$(63,1).c$$jalview_appletgui_AlignmentPanel,[this.alignPanel]);
frame.add$java_awt_Component(overview);
$I$(17,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(3,"formatMessage$S$SA",["label.overview_params", Clazz.array(String, -1, [this.getTitle$()])]), overview.getPreferredSize$().width, overview.getPreferredSize$().height + 50]);
frame.pack$();
var ap=this.alignPanel;
frame.addWindowListener$java_awt_event_WindowListener(((P$.AlignFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.$finals$.overview.dispose$();
if (this.$finals$.ap != null ) {
this.$finals$.ap.setOverviewPanel$jalview_appletgui_OverviewPanel(null);
}});
})()
), Clazz.new_($I$(64,1),[this, {ap:ap,overview:overview}],P$.AlignFrame$1)));
this.alignPanel.setOverviewPanel$jalview_appletgui_OverviewPanel(overview);
});

Clazz.newMeth(C$, 'changeColour$jalview_schemes_ColourSchemeI',  function (cs) {
this.viewport.setGlobalColourScheme$jalview_schemes_ColourSchemeI(cs);
this.alignPanel.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'modifyPID_actionPerformed$',  function () {
if (this.viewport.getAbovePIDThreshold$() && this.viewport.getGlobalColourScheme$() != null  ) {
$I$(65,"setPIDSliderSource$jalview_appletgui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.alignPanel, this.viewport.getResidueShading$(), this.alignPanel.getViewName$()]);
$I$(65).showPIDSlider$();
}});

Clazz.newMeth(C$, 'modifyConservation_actionPerformed$',  function () {
if (this.viewport.getConservationSelected$() && this.viewport.getGlobalColourScheme$() != null  ) {
$I$(65,"setConservationSlider$jalview_appletgui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.alignPanel, this.viewport.getResidueShading$(), this.alignPanel.getViewName$()]);
$I$(65).showConservationSlider$();
}});

Clazz.newMeth(C$, 'conservationMenuItem_actionPerformed$',  function () {
var selected=this.conservationMenuItem.getState$();
this.modifyConservation.setEnabled$Z(selected);
this.viewport.setConservationSelected$Z(selected);
this.viewport.getResidueShading$().setConservationApplied$Z(selected);
this.changeColour$jalview_schemes_ColourSchemeI(this.viewport.getGlobalColourScheme$());
if (selected) {
this.modifyConservation_actionPerformed$();
} else {
$I$(65).hideConservationSlider$();
}});

Clazz.newMeth(C$, 'abovePIDThreshold_actionPerformed$',  function () {
var selected=this.abovePIDThreshold.getState$();
this.modifyPID.setEnabled$Z(selected);
this.viewport.setAbovePIDThreshold$Z(selected);
if (!selected) {
this.viewport.getResidueShading$().setThreshold$I$Z(0, this.viewport.isIgnoreGapsConsensus$());
}this.changeColour$jalview_schemes_ColourSchemeI(this.viewport.getGlobalColourScheme$());
if (selected) {
this.modifyPID_actionPerformed$();
} else {
$I$(65).hidePIDSlider$();
}});

Clazz.newMeth(C$, 'sortPairwiseMenuItem_actionPerformed$',  function () {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
$I$(66,"sortByPID$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI",[this.viewport.getAlignment$(), this.viewport.getAlignment$().getSequenceAt$I(0)]);
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_(["Pairwise Sort", oldOrder, this.viewport.getAlignment$()],$I$(67,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'sortIDMenuItem_actionPerformed$',  function () {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
$I$(66,"sortByID$jalview_datamodel_AlignmentI",[this.viewport.getAlignment$()]);
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_(["ID Sort", oldOrder, this.viewport.getAlignment$()],$I$(67,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'sortLengthMenuItem_actionPerformed$',  function () {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
$I$(66,"sortByLength$jalview_datamodel_AlignmentI",[this.viewport.getAlignment$()]);
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_(["Length Sort", oldOrder, this.viewport.getAlignment$()],$I$(67,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'sortGroupMenuItem_actionPerformed$',  function () {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
$I$(66,"sortByGroup$jalview_datamodel_AlignmentI",[this.viewport.getAlignment$()]);
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_(["Group Sort", oldOrder, this.viewport.getAlignment$()],$I$(67,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'removeRedundancyMenuItem_actionPerformed$',  function () {
Clazz.new_($I$(68,1).c$$jalview_appletgui_AlignmentPanel,[this.alignPanel]);
});

Clazz.newMeth(C$, 'pairwiseAlignmentMenuItem_actionPerformed$',  function () {
if (this.viewport.getSelectionGroup$() != null  && this.viewport.getSelectionGroup$().getSize$() > 1 ) {
var frame=Clazz.new_($I$(16,1));
frame.add$java_awt_Component(Clazz.new_($I$(69,1).c$$jalview_appletgui_AlignmentPanel,[this.alignPanel]));
$I$(17,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(3).getString$S("action.pairwise_alignment"), 600, 500]);
}});

Clazz.newMeth(C$, 'PCAMenuItem_actionPerformed$',  function () {
if (!this.viewport.getAlignment$().isAligned$Z(false)) {
var current;
var Width=this.viewport.getAlignment$().getWidth$();
for (var i=0; i < this.viewport.getAlignment$().getSequences$().size$(); i++) {
current=this.viewport.getAlignment$().getSequenceAt$I(i);
if (current.getLength$() < Width) {
current.insertCharAt$I$C(Width - 1, this.viewport.getGapCharacter$());
}}
this.alignPanel.paintAlignment$Z$Z(false, false);
}if ((this.viewport.getSelectionGroup$() != null  && this.viewport.getSelectionGroup$().getSize$() < 4  && this.viewport.getSelectionGroup$().getSize$() > 0 ) || this.viewport.getAlignment$().getHeight$() < 4 ) {
return;
}try {
Clazz.new_($I$(70,1).c$$jalview_appletgui_AlignViewport,[this.viewport]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"OutOfMemoryError")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'averageDistanceTreeMenuItem_actionPerformed$',  function () {
this.newTreePanel$S$S$S("AV", Clazz.new_($I$(71,1)).getName$(), "Average distance tree using PID");
});

Clazz.newMeth(C$, 'neighbourTreeMenuItem_actionPerformed$',  function () {
this.newTreePanel$S$S$S("NJ", Clazz.new_($I$(71,1)).getName$(), "Neighbour joining tree using PID");
});

Clazz.newMeth(C$, 'njTreeBlosumMenuItem_actionPerformed$',  function () {
this.newTreePanel$S$S$S("NJ", $I$(72).getInstance$().getBlosum62$().getName$(), "Neighbour joining tree using BLOSUM62");
});

Clazz.newMeth(C$, 'avTreeBlosumMenuItem_actionPerformed$',  function () {
this.newTreePanel$S$S$S("AV", $I$(72).getInstance$().getBlosum62$().getName$(), "Average distance tree using BLOSUM62");
});

Clazz.newMeth(C$, 'newTreePanel$S$S$S',  function (type, pwType, title) {
if (!this.viewport.getAlignment$().isAligned$Z(false)) {
var current;
var Width=this.viewport.getAlignment$().getWidth$();
for (var i=0; i < this.viewport.getAlignment$().getSequences$().size$(); i++) {
current=this.viewport.getAlignment$().getSequenceAt$I(i);
if (current.getLength$() < Width) {
current.insertCharAt$I$C(Width - 1, this.viewport.getGapCharacter$());
}}
this.alignPanel.paintAlignment$Z$Z(false, false);
}if ((this.viewport.getSelectionGroup$() != null  && this.viewport.getSelectionGroup$().getSize$() > 1 ) || (this.viewport.getAlignment$().getHeight$() > 1) ) {
var tp=Clazz.new_($I$(73,1).c$$jalview_appletgui_AlignmentPanel$S$S,[this.alignPanel, type, pwType]);
this.addTreeMenuItem$jalview_appletgui_TreePanel$S(tp, title);
$I$(17).addFrame$java_awt_Frame$S$I$I(tp, title, 600, 500);
}});

Clazz.newMeth(C$, 'loadTree_actionPerformed$',  function () {
var cap=Clazz.new_($I$(15,1).c$$Z$jalview_appletgui_AlignFrame,[true, this]);
cap.setText$S($I$(3).getString$S("label.paste_newick_tree_file"));
cap.setTreeImport$();
var frame=Clazz.new_($I$(16,1));
frame.add$java_awt_Component(cap);
$I$(17,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(3).getString$S("label.paste_newick_file"), 400, 300]);
});

Clazz.newMeth(C$, 'loadTree$jalview_io_NewickFile$S',  function (tree, treeFile) {
var tp=Clazz.new_([this.alignPanel, treeFile, $I$(3).getString$S("label.load_tree_from_file"), tree],$I$(73,1).c$$jalview_appletgui_AlignmentPanel$S$S$jalview_io_NewickFile);
$I$(17).addFrame$java_awt_Frame$S$I$I(tp, treeFile, 600, 500);
this.addTreeMenuItem$jalview_appletgui_TreePanel$S(tp, treeFile);
});

Clazz.newMeth(C$, 'sortByTree$jalview_appletgui_TreePanel$S',  function (treePanel, title) {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
$I$(66,"sortByTree$jalview_datamodel_AlignmentI$jalview_analysis_TreeModel",[this.viewport.getAlignment$(), treePanel.getTree$()]);
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_([$I$(3,"formatMessage$S$SA",["label.order_by_params", Clazz.array(String, -1, [title])]), oldOrder, this.viewport.getAlignment$()],$I$(67,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'addTreeMenuItem$jalview_appletgui_TreePanel$S',  function (treePanel, title) {
var item=Clazz.new_($I$(4,1).c$$S,[title]);
this.sortByTreeMenu.add$java_awt_MenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
this.b$['jalview.appletgui.AlignFrame'].sortByTree$jalview_appletgui_TreePanel$S.apply(this.b$['jalview.appletgui.AlignFrame'], [this.$finals$.treePanel, this.$finals$.title]);
});
})()
), Clazz.new_(P$.AlignFrame$2.$init$,[this, {treePanel:treePanel,title:title}])));
treePanel.addWindowListener$java_awt_event_WindowListener(((P$.AlignFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
if (this.b$['jalview.appletgui.AlignFrame'].viewport.sortByTree) {
this.b$['jalview.appletgui.AlignFrame'].sortByTree$jalview_appletgui_TreePanel$S.apply(this.b$['jalview.appletgui.AlignFrame'], [this.$finals$.treePanel, this.$finals$.title]);
}C$.superclazz.prototype.windowOpened$java_awt_event_WindowEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['jalview.appletgui.AlignFrame'].sortByTreeMenu.remove$java_awt_MenuComponent(this.$finals$.item);
});
})()
), Clazz.new_($I$(64,1),[this, {treePanel:treePanel,item:item,title:title}],P$.AlignFrame$3)));
});

Clazz.newMeth(C$, 'sortBy$jalview_datamodel_AlignmentOrder$S',  function (alorder, undoname) {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
if ($I$(17).debug) {
System.err.println$S("Sorting " + alorder.getOrder$().size$() + " in alignment '" + this.getTitle$() + "'" );
}$I$(66,"sortBy$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentOrder",[this.viewport.getAlignment$(), alorder]);
if (undoname != null ) {
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_([undoname, oldOrder, this.viewport.getAlignment$()],$I$(67,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
}this.alignPanel.paintAlignment$Z$Z(true, false);
return true;
});

Clazz.newMeth(C$, 'documentation_actionPerformed$',  function () {
this.alignPanel.av.applet.openJalviewHelpUrl$();
});

Clazz.newMeth(C$, 'about_actionPerformed$',  function () {
var frame=Clazz.new_($I$(16,1));
frame.add$java_awt_Component(Clazz.new_([this, null, $I$(17).getVersion$(), $I$(17).getBuildDate$()],$I$(76,1).c$$S$S,P$.AlignFrame$1AboutPanel));
$I$(17,"addFrame$java_awt_Frame$S$I$I",[frame, $I$(3).getString$S("label.jalview"), 580, 220]);
});

Clazz.newMeth(C$, 'showURL$S$S',  function (url, target) {
if (this.viewport.applet == null ) {
System.out.println$S("Not running as applet - no browser available.");
} else {
this.viewport.applet.showURL$S$S(url, target);
}});

Clazz.newMeth(C$, 'jbInit',  function () {
this.setMenuBar$java_awt_MenuBar(this.alignFrameMenuBar);
this.inputText.setLabel$S($I$(3).getString$S("label.input_from_textbox"));
this.inputText.addActionListener$java_awt_event_ActionListener(this);
var outputTextboxMenu=Clazz.new_([$I$(3).getString$S("label.out_to_textbox")],$I$(2,1).c$$S);
for (var ff, $ff = $I$(35).getInstance$().getWritableFormats$Z(true).iterator$(); $ff.hasNext$()&&((ff=($ff.next$())),1);) {
var item=Clazz.new_($I$(4,1).c$$S,[ff]);
item.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.appletgui.AlignFrame'].outputText_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.appletgui.AlignFrame'], [e]);
});
})()
), Clazz.new_(P$.AlignFrame$4.$init$,[this, null])));
outputTextboxMenu.add$java_awt_MenuItem(item);
}
this.closeMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.loadApplication.addActionListener$java_awt_event_ActionListener(this);
this.loadTree.addActionListener$java_awt_event_ActionListener(this);
this.loadAnnotations.addActionListener$java_awt_event_ActionListener(this);
this.outputFeatures.addActionListener$java_awt_event_ActionListener(this);
this.outputAnnotations.addActionListener$java_awt_event_ActionListener(this);
this.undoMenuItem.setEnabled$Z(false);
this.undoMenuItem.setLabel$S($I$(3).getString$S("action.undo"));
this.undoMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.redoMenuItem.setEnabled$Z(false);
this.redoMenuItem.setLabel$S($I$(3).getString$S("action.redo"));
this.redoMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.copy.setLabel$S($I$(3).getString$S("action.copy"));
this.copy.addActionListener$java_awt_event_ActionListener(this);
this.cut.setLabel$S($I$(3).getString$S("action.cut"));
this.cut.addActionListener$java_awt_event_ActionListener(this);
this.$delete.setLabel$S($I$(3).getString$S("action.delete"));
this.$delete.addActionListener$java_awt_event_ActionListener(this);
this.pasteMenu.setLabel$S($I$(3).getString$S("action.paste"));
this.pasteNew.setLabel$S($I$(3).getString$S("label.to_new_alignment"));
this.pasteNew.addActionListener$java_awt_event_ActionListener(this);
this.pasteThis.setLabel$S($I$(3).getString$S("label.to_this_alignment"));
this.pasteThis.addActionListener$java_awt_event_ActionListener(this);
this.remove2LeftMenuItem.setLabel$S($I$(3).getString$S("action.remove_left"));
this.remove2LeftMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.remove2RightMenuItem.setLabel$S($I$(3).getString$S("action.remove_right"));
this.remove2RightMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.removeGappedColumnMenuItem.setLabel$S($I$(3).getString$S("action.remove_empty_columns"));
this.removeGappedColumnMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.removeAllGapsMenuItem.setLabel$S($I$(3).getString$S("action.remove_all_gaps"));
this.removeAllGapsMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.removeRedundancyMenuItem.setLabel$S($I$(3).getString$S("action.remove_redundancy"));
this.removeRedundancyMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.findMenuItem.setLabel$S($I$(3).getString$S("action.find"));
this.findMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.selectAllSequenceMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.deselectAllSequenceMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.invertSequenceMenuItem.setLabel$S($I$(3).getString$S("action.invert_sequence_selection"));
this.invertSequenceMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.invertColSel.setLabel$S($I$(3).getString$S("action.invert_column_selection"));
this.invertColSel.addActionListener$java_awt_event_ActionListener(this);
this.deleteGroups.setLabel$S($I$(3).getString$S("action.undefine_groups"));
this.deleteGroups.addActionListener$java_awt_event_ActionListener(this);
this.grpsFromSelection.setLabel$S($I$(3).getString$S("action.make_groups_selection"));
this.grpsFromSelection.addActionListener$java_awt_event_ActionListener(this);
this.createGroup.setLabel$S($I$(3).getString$S("action.create_group"));
this.createGroup.addActionListener$java_awt_event_ActionListener(this);
this.unGroup.setLabel$S($I$(3).getString$S("action.remove_group"));
this.unGroup.addActionListener$java_awt_event_ActionListener(this);
this.annotationColumnSelection.setLabel$S($I$(3).getString$S("action.select_by_annotation"));
this.annotationColumnSelection.addActionListener$java_awt_event_ActionListener(this);
this.newView.setLabel$S($I$(3).getString$S("action.new_view"));
this.newView.addActionListener$java_awt_event_ActionListener(this);
var showMenu=Clazz.new_([$I$(3).getString$S("action.show")],$I$(2,1).c$$S);
this.showColumns.setLabel$S($I$(3).getString$S("label.all_columns"));
this.showSeqs.setLabel$S($I$(3).getString$S("label.all_sequences"));
var hideMenu=Clazz.new_([$I$(3).getString$S("action.hide")],$I$(2,1).c$$S);
this.hideColumns.setLabel$S($I$(3).getString$S("label.selected_columns"));
this.hideSequences.setLabel$S($I$(3).getString$S("label.selected_sequences"));
this.hideAllButSelection.setLabel$S($I$(3).getString$S("label.all_but_selected_region"));
this.hideAllSelection.setLabel$S($I$(3).getString$S("label.selected_region"));
this.showAllHidden.setLabel$S($I$(3).getString$S("label.all_sequences_columns"));
this.showColumns.addActionListener$java_awt_event_ActionListener(this);
this.showSeqs.addActionListener$java_awt_event_ActionListener(this);
this.hideColumns.addActionListener$java_awt_event_ActionListener(this);
this.hideSequences.addActionListener$java_awt_event_ActionListener(this);
this.hideAllButSelection.addActionListener$java_awt_event_ActionListener(this);
this.hideAllSelection.addActionListener$java_awt_event_ActionListener(this);
this.showAllHidden.addActionListener$java_awt_event_ActionListener(this);
this.featureSettings.setLabel$S($I$(3).getString$S("action.feature_settings"));
this.featureSettings.addActionListener$java_awt_event_ActionListener(this);
this.sequenceFeatures.setLabel$S($I$(3).getString$S("label.show_sequence_features"));
this.sequenceFeatures.addItemListener$java_awt_event_ItemListener(this);
this.sequenceFeatures.setState$Z(false);
this.followMouseOverFlag.setLabel$S($I$(3).getString$S("label.automatic_scrolling"));
this.followMouseOverFlag.addItemListener$java_awt_event_ItemListener(this);
this.alProperties.addActionListener$java_awt_event_ActionListener(this);
this.overviewMenuItem.setLabel$S($I$(3).getString$S("label.overview_window"));
this.overviewMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.annotationPanelMenuItem.setLabel$S($I$(3).getString$S("label.show_annotations"));
this.annotationPanelMenuItem.addItemListener$java_awt_event_ItemListener(this);
this.showGroupConsensus.setLabel$S($I$(3).getString$S("label.group_consensus"));
this.showGroupConservation.setLabel$S($I$(3).getString$S("label.group_conservation"));
this.showConsensusHistogram.setLabel$S($I$(3).getString$S("label.show_consensus_histogram"));
this.showSequenceLogo.setLabel$S($I$(3).getString$S("label.show_consensus_logo"));
this.normSequenceLogo.setLabel$S($I$(3).getString$S("label.norm_consensus_logo"));
this.applyAutoAnnotationSettings.setLabel$S($I$(3).getString$S("label.apply_all_groups"));
this.applyAutoAnnotationSettings.setState$Z(true);
var autoAnnMenu=Clazz.new_([$I$(3).getString$S("label.autocalculated_annotation")],$I$(2,1).c$$S);
this.showGroupConsensus.addItemListener$java_awt_event_ItemListener(this);
this.showGroupConservation.addItemListener$java_awt_event_ItemListener(this);
this.showConsensusHistogram.addItemListener$java_awt_event_ItemListener(this);
this.showSequenceLogo.addItemListener$java_awt_event_ItemListener(this);
this.normSequenceLogo.addItemListener$java_awt_event_ItemListener(this);
this.applyAutoAnnotationSettings.addItemListener$java_awt_event_ItemListener(this);
this.showAlignmentAnnotations=Clazz.new_([$I$(3).getString$S("label.show_all_al_annotations")],$I$(5,1).c$$S);
this.showSequenceAnnotations=Clazz.new_([$I$(3).getString$S("label.show_all_seq_annotations")],$I$(5,1).c$$S);
this.sortAnnBySequence=Clazz.new_([$I$(3).getString$S("label.sort_annotations_by_sequence")],$I$(5,1).c$$S);
this.sortAnnByLabel=Clazz.new_([$I$(3).getString$S("label.sort_annotations_by_label")],$I$(5,1).c$$S);
this.showAutoFirst=Clazz.new_([$I$(3).getString$S("label.show_first")],$I$(5,1).c$$S);
this.showAutoFirst.setState$Z(false);
p$1.setShowAutoCalculatedAbove$Z.apply(this, [this.showAutoFirst.getState$()]);
this.showAutoLast=Clazz.new_([$I$(3).getString$S("label.show_last")],$I$(5,1).c$$S);
this.showAutoLast.setState$Z(!this.showAutoFirst.getState$());
this.showAlignmentAnnotations.addItemListener$java_awt_event_ItemListener(this);
this.showSequenceAnnotations.addItemListener$java_awt_event_ItemListener(this);
this.sortAnnBySequence.addItemListener$java_awt_event_ItemListener(this);
this.sortAnnByLabel.addItemListener$java_awt_event_ItemListener(this);
this.showAutoFirst.addItemListener$java_awt_event_ItemListener(this);
this.showAutoLast.addItemListener$java_awt_event_ItemListener(this);
this.$font.setLabel$S($I$(3).getString$S("action.font"));
this.$font.addActionListener$java_awt_event_ActionListener(this);
this.scaleAbove.setLabel$S($I$(3).getString$S("action.scale_above"));
this.scaleAbove.setState$Z(true);
this.scaleAbove.setEnabled$Z(false);
this.scaleAbove.addItemListener$java_awt_event_ItemListener(this);
this.scaleLeft.setEnabled$Z(false);
this.scaleLeft.setState$Z(true);
this.scaleLeft.setLabel$S($I$(3).getString$S("action.scale_left"));
this.scaleLeft.addItemListener$java_awt_event_ItemListener(this);
this.scaleRight.setEnabled$Z(false);
this.scaleRight.setState$Z(true);
this.scaleRight.setLabel$S($I$(3).getString$S("action.scale_right"));
this.scaleRight.addItemListener$java_awt_event_ItemListener(this);
this.viewBoxesMenuItem.setLabel$S($I$(3).getString$S("action.boxes"));
this.viewBoxesMenuItem.setState$Z(true);
this.viewBoxesMenuItem.addItemListener$java_awt_event_ItemListener(this);
this.viewTextMenuItem.setLabel$S($I$(3).getString$S("action.text"));
this.viewTextMenuItem.setState$Z(true);
this.viewTextMenuItem.addItemListener$java_awt_event_ItemListener(this);
this.colourTextMenuItem.setLabel$S($I$(3).getString$S("label.colour_text"));
this.colourTextMenuItem.addItemListener$java_awt_event_ItemListener(this);
this.displayNonconservedMenuItem.setLabel$S($I$(3).getString$S("label.show_non_conserved"));
this.displayNonconservedMenuItem.addItemListener$java_awt_event_ItemListener(this);
this.wrapMenuItem.setLabel$S($I$(3).getString$S("action.wrap"));
this.wrapMenuItem.addItemListener$java_awt_event_ItemListener(this);
this.renderGapsMenuItem.setLabel$S($I$(3).getString$S("action.show_gaps"));
this.renderGapsMenuItem.setState$Z(true);
this.renderGapsMenuItem.addItemListener$java_awt_event_ItemListener(this);
this.centreColumnLabelFlag.setLabel$S($I$(3).getString$S("label.centre_column_labels"));
this.centreColumnLabelFlag.addItemListener$java_awt_event_ItemListener(this);
this.seqLimits.setState$Z(true);
this.seqLimits.setLabel$S($I$(3).getString$S("label.show_sequence_limits"));
this.seqLimits.addItemListener$java_awt_event_ItemListener(this);
this.applyToAllGroups.setLabel$S($I$(3).getString$S("label.apply_colour_to_all_groups"));
this.applyToAllGroups.setState$Z(true);
this.applyToAllGroups.addItemListener$java_awt_event_ItemListener(this);
this.clustalColour.setLabel$S($I$(3).getString$S("label.colourScheme_clustal"));
this.clustalColour.addActionListener$java_awt_event_ActionListener(this);
this.zappoColour.setLabel$S($I$(3).getString$S("label.colourScheme_zappo"));
this.zappoColour.addActionListener$java_awt_event_ActionListener(this);
this.taylorColour.setLabel$S($I$(3).getString$S("label.colourScheme_taylor"));
this.taylorColour.addActionListener$java_awt_event_ActionListener(this);
this.hydrophobicityColour.setLabel$S($I$(3).getString$S("label.colourScheme_hydrophobic"));
this.hydrophobicityColour.addActionListener$java_awt_event_ActionListener(this);
this.helixColour.setLabel$S($I$(3).getString$S("label.colourScheme_helixpropensity"));
this.helixColour.addActionListener$java_awt_event_ActionListener(this);
this.strandColour.setLabel$S($I$(3).getString$S("label.colourScheme_strandpropensity"));
this.strandColour.addActionListener$java_awt_event_ActionListener(this);
this.turnColour.setLabel$S($I$(3).getString$S("label.colourScheme_turnpropensity"));
this.turnColour.addActionListener$java_awt_event_ActionListener(this);
this.buriedColour.setLabel$S($I$(3).getString$S("label.colourScheme_buriedindex"));
this.buriedColour.addActionListener$java_awt_event_ActionListener(this);
this.purinePyrimidineColour.setLabel$S($I$(3).getString$S("label.colourScheme_purine/pyrimidine"));
this.purinePyrimidineColour.addActionListener$java_awt_event_ActionListener(this);
this.RNAHelixColour.setLabel$S($I$(3).getString$S("label.colourScheme_rnahelices"));
this.RNAHelixColour.addActionListener$java_awt_event_ActionListener(this);
this.userDefinedColour.setLabel$S($I$(3).getString$S("action.user_defined"));
this.userDefinedColour.addActionListener$java_awt_event_ActionListener(this);
this.PIDColour.setLabel$S($I$(3).getString$S("label.colourScheme_%identity"));
this.PIDColour.addActionListener$java_awt_event_ActionListener(this);
this.BLOSUM62Colour.setLabel$S($I$(3).getString$S("label.colourScheme_blosum62"));
this.BLOSUM62Colour.addActionListener$java_awt_event_ActionListener(this);
this.tcoffeeColour.setLabel$S($I$(3).getString$S("label.colourScheme_t-coffeescores"));
this.tcoffeeColour.setEnabled$Z(false);
this.tcoffeeColour.addActionListener$java_awt_event_ActionListener(this);
this.conservationMenuItem.setLabel$S($I$(3).getString$S("action.by_conservation"));
this.conservationMenuItem.addItemListener$java_awt_event_ItemListener(this);
this.noColourmenuItem.setLabel$S($I$(3).getString$S("label.none"));
this.noColourmenuItem.addActionListener$java_awt_event_ActionListener(this);
this.abovePIDThreshold.setLabel$S($I$(3).getString$S("label.above_identity_threshold"));
this.abovePIDThreshold.addItemListener$java_awt_event_ItemListener(this);
this.nucleotideColour.setLabel$S($I$(3).getString$S("label.colourScheme_nucleotide"));
this.nucleotideColour.addActionListener$java_awt_event_ActionListener(this);
this.modifyPID.setLabel$S($I$(3).getString$S("label.modify_identity_threshold"));
this.modifyPID.setEnabled$Z(this.abovePIDThreshold.getState$());
this.modifyPID.addActionListener$java_awt_event_ActionListener(this);
this.modifyConservation.setLabel$S($I$(3).getString$S("label.modify_conservation_threshold"));
this.modifyConservation.setEnabled$Z(this.conservationMenuItem.getState$());
this.modifyConservation.addActionListener$java_awt_event_ActionListener(this);
this.annotationColour.setLabel$S($I$(3).getString$S("action.by_annotation"));
this.annotationColour.addActionListener$java_awt_event_ActionListener(this);
this.sortPairwiseMenuItem.setLabel$S($I$(3).getString$S("action.by_pairwise_id"));
this.sortPairwiseMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.sortIDMenuItem.setLabel$S($I$(3).getString$S("action.by_id"));
this.sortIDMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.sortLengthMenuItem.setLabel$S($I$(3).getString$S("action.by_length"));
this.sortLengthMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.sortGroupMenuItem.setLabel$S($I$(3).getString$S("action.by_group"));
this.sortGroupMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.pairwiseAlignmentMenuItem.setLabel$S($I$(3).getString$S("action.pairwise_alignment"));
this.pairwiseAlignmentMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.PCAMenuItem.setLabel$S($I$(3).getString$S("label.principal_component_analysis"));
this.PCAMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.autoCalculate=Clazz.new_([$I$(3).getString$S("label.autocalculate_consensus"), true],$I$(5,1).c$$S$Z);
this.averageDistanceTreeMenuItem.setLabel$S($I$(3).getString$S("label.average_distance_identity"));
this.averageDistanceTreeMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.neighbourTreeMenuItem.setLabel$S($I$(3).getString$S("label.neighbour_joining_identity"));
this.neighbourTreeMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.avDistanceTreeBlosumMenuItem.setLabel$S($I$(3).getString$S("label.average_distance_blosum62"));
this.avDistanceTreeBlosumMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.njTreeBlosumMenuItem.setLabel$S($I$(3).getString$S("label.neighbour_blosum62"));
this.njTreeBlosumMenuItem.addActionListener$java_awt_event_ActionListener(this);
this.sortByTreeMenu.setLabel$S($I$(3).getString$S("action.by_tree_order"));
var sortMenu=Clazz.new_([$I$(3).getString$S("action.sort")],$I$(2,1).c$$S);
var calculateTreeMenu=Clazz.new_([$I$(3).getString$S("action.calculate_tree")],$I$(2,1).c$$S);
this.autoCalculate.addItemListener$java_awt_event_ItemListener(this);
this.sortByTree.addItemListener$java_awt_event_ItemListener(this);
var helpMenu=Clazz.new_([$I$(3).getString$S("action.help")],$I$(2,1).c$$S);
this.documentation.setLabel$S($I$(3).getString$S("label.documentation"));
this.documentation.addActionListener$java_awt_event_ActionListener(this);
this.about.setLabel$S($I$(3).getString$S("label.about"));
this.about.addActionListener$java_awt_event_ActionListener(this);
this.alignFrameMenuBar.add$java_awt_Menu(this.fileMenu);
var editMenu=Clazz.new_([$I$(3).getString$S("action.edit")],$I$(2,1).c$$S);
this.alignFrameMenuBar.add$java_awt_Menu(editMenu);
var selectMenu=Clazz.new_([$I$(3).getString$S("action.select")],$I$(2,1).c$$S);
this.alignFrameMenuBar.add$java_awt_Menu(selectMenu);
var viewMenu=Clazz.new_([$I$(3).getString$S("action.view")],$I$(2,1).c$$S);
this.alignFrameMenuBar.add$java_awt_Menu(viewMenu);
var annotationsMenu=Clazz.new_([$I$(3).getString$S("action.annotations")],$I$(2,1).c$$S);
this.alignFrameMenuBar.add$java_awt_Menu(annotationsMenu);
var formatMenu=Clazz.new_([$I$(3).getString$S("action.format")],$I$(2,1).c$$S);
this.alignFrameMenuBar.add$java_awt_Menu(formatMenu);
var colourMenu=Clazz.new_([$I$(3).getString$S("action.colour")],$I$(2,1).c$$S);
this.alignFrameMenuBar.add$java_awt_Menu(colourMenu);
var calculateMenu=Clazz.new_([$I$(3).getString$S("action.calculate")],$I$(2,1).c$$S);
this.alignFrameMenuBar.add$java_awt_Menu(calculateMenu);
this.alignFrameMenuBar.add$java_awt_Menu(helpMenu);
this.fileMenu.add$java_awt_MenuItem(this.inputText);
this.fileMenu.add$java_awt_MenuItem(this.loadTree);
this.fileMenu.add$java_awt_MenuItem(this.loadAnnotations);
this.fileMenu.addSeparator$();
this.fileMenu.add$java_awt_MenuItem(outputTextboxMenu);
this.fileMenu.add$java_awt_MenuItem(this.outputFeatures);
this.fileMenu.add$java_awt_MenuItem(this.outputAnnotations);
if (this.jalviewServletURL != null ) {
this.fileMenu.add$java_awt_MenuItem(this.loadApplication);
}this.fileMenu.addSeparator$();
this.fileMenu.add$java_awt_MenuItem(this.closeMenuItem);
editMenu.add$java_awt_MenuItem(this.undoMenuItem);
editMenu.add$java_awt_MenuItem(this.redoMenuItem);
editMenu.add$java_awt_MenuItem(this.cut);
editMenu.add$java_awt_MenuItem(this.copy);
this.pasteMenu.add$java_awt_MenuItem(this.pasteNew);
this.pasteMenu.add$java_awt_MenuItem(this.pasteThis);
editMenu.add$java_awt_MenuItem(this.pasteMenu);
editMenu.add$java_awt_MenuItem(this.$delete);
editMenu.addSeparator$();
editMenu.add$java_awt_MenuItem(this.remove2LeftMenuItem);
editMenu.add$java_awt_MenuItem(this.remove2RightMenuItem);
editMenu.add$java_awt_MenuItem(this.removeGappedColumnMenuItem);
editMenu.add$java_awt_MenuItem(this.removeAllGapsMenuItem);
editMenu.add$java_awt_MenuItem(this.removeRedundancyMenuItem);
selectMenu.add$java_awt_MenuItem(this.findMenuItem);
selectMenu.addSeparator$();
selectMenu.add$java_awt_MenuItem(this.selectAllSequenceMenuItem);
selectMenu.add$java_awt_MenuItem(this.deselectAllSequenceMenuItem);
selectMenu.add$java_awt_MenuItem(this.invertSequenceMenuItem);
selectMenu.add$java_awt_MenuItem(this.invertColSel);
selectMenu.add$java_awt_MenuItem(this.createGroup);
selectMenu.add$java_awt_MenuItem(this.unGroup);
selectMenu.add$java_awt_MenuItem(this.grpsFromSelection);
selectMenu.add$java_awt_MenuItem(this.deleteGroups);
selectMenu.add$java_awt_MenuItem(this.annotationColumnSelection);
viewMenu.add$java_awt_MenuItem(this.newView);
viewMenu.addSeparator$();
showMenu.add$java_awt_MenuItem(this.showColumns);
showMenu.add$java_awt_MenuItem(this.showSeqs);
showMenu.add$java_awt_MenuItem(this.showAllHidden);
viewMenu.add$java_awt_MenuItem(showMenu);
hideMenu.add$java_awt_MenuItem(this.hideColumns);
hideMenu.add$java_awt_MenuItem(this.hideSequences);
hideMenu.add$java_awt_MenuItem(this.hideAllSelection);
hideMenu.add$java_awt_MenuItem(this.hideAllButSelection);
viewMenu.add$java_awt_MenuItem(hideMenu);
viewMenu.addSeparator$();
viewMenu.add$java_awt_MenuItem(this.followMouseOverFlag);
viewMenu.addSeparator$();
viewMenu.add$java_awt_MenuItem(this.sequenceFeatures);
viewMenu.add$java_awt_MenuItem(this.featureSettings);
viewMenu.addSeparator$();
viewMenu.add$java_awt_MenuItem(this.alProperties);
viewMenu.addSeparator$();
viewMenu.add$java_awt_MenuItem(this.overviewMenuItem);
annotationsMenu.add$java_awt_MenuItem(this.annotationPanelMenuItem);
annotationsMenu.addSeparator$();
annotationsMenu.add$java_awt_MenuItem(this.showAlignmentAnnotations);
annotationsMenu.add$java_awt_MenuItem(this.showSequenceAnnotations);
annotationsMenu.add$java_awt_MenuItem(this.sortAnnBySequence);
annotationsMenu.add$java_awt_MenuItem(this.sortAnnByLabel);
annotationsMenu.addSeparator$();
autoAnnMenu.add$java_awt_MenuItem(this.showAutoFirst);
autoAnnMenu.add$java_awt_MenuItem(this.showAutoLast);
autoAnnMenu.addSeparator$();
autoAnnMenu.add$java_awt_MenuItem(this.applyAutoAnnotationSettings);
autoAnnMenu.add$java_awt_MenuItem(this.showConsensusHistogram);
autoAnnMenu.add$java_awt_MenuItem(this.showSequenceLogo);
autoAnnMenu.add$java_awt_MenuItem(this.normSequenceLogo);
autoAnnMenu.addSeparator$();
autoAnnMenu.add$java_awt_MenuItem(this.showGroupConservation);
autoAnnMenu.add$java_awt_MenuItem(this.showGroupConsensus);
annotationsMenu.add$java_awt_MenuItem(autoAnnMenu);
formatMenu.add$java_awt_MenuItem(this.$font);
formatMenu.add$java_awt_MenuItem(this.seqLimits);
formatMenu.add$java_awt_MenuItem(this.wrapMenuItem);
formatMenu.add$java_awt_MenuItem(this.scaleAbove);
formatMenu.add$java_awt_MenuItem(this.scaleLeft);
formatMenu.add$java_awt_MenuItem(this.scaleRight);
formatMenu.add$java_awt_MenuItem(this.viewBoxesMenuItem);
formatMenu.add$java_awt_MenuItem(this.viewTextMenuItem);
formatMenu.add$java_awt_MenuItem(this.colourTextMenuItem);
formatMenu.add$java_awt_MenuItem(this.displayNonconservedMenuItem);
formatMenu.add$java_awt_MenuItem(this.renderGapsMenuItem);
formatMenu.add$java_awt_MenuItem(this.centreColumnLabelFlag);
colourMenu.add$java_awt_MenuItem(this.applyToAllGroups);
colourMenu.addSeparator$();
colourMenu.add$java_awt_MenuItem(this.noColourmenuItem);
colourMenu.add$java_awt_MenuItem(this.clustalColour);
colourMenu.add$java_awt_MenuItem(this.BLOSUM62Colour);
colourMenu.add$java_awt_MenuItem(this.PIDColour);
colourMenu.add$java_awt_MenuItem(this.zappoColour);
colourMenu.add$java_awt_MenuItem(this.taylorColour);
colourMenu.add$java_awt_MenuItem(this.hydrophobicityColour);
colourMenu.add$java_awt_MenuItem(this.helixColour);
colourMenu.add$java_awt_MenuItem(this.strandColour);
colourMenu.add$java_awt_MenuItem(this.turnColour);
colourMenu.add$java_awt_MenuItem(this.buriedColour);
colourMenu.add$java_awt_MenuItem(this.nucleotideColour);
colourMenu.add$java_awt_MenuItem(this.purinePyrimidineColour);
colourMenu.add$java_awt_MenuItem(this.tcoffeeColour);
colourMenu.add$java_awt_MenuItem(this.userDefinedColour);
colourMenu.addSeparator$();
colourMenu.add$java_awt_MenuItem(this.conservationMenuItem);
colourMenu.add$java_awt_MenuItem(this.modifyConservation);
colourMenu.add$java_awt_MenuItem(this.abovePIDThreshold);
colourMenu.add$java_awt_MenuItem(this.modifyPID);
colourMenu.add$java_awt_MenuItem(this.annotationColour);
colourMenu.add$java_awt_MenuItem(this.RNAHelixColour);
sortMenu.add$java_awt_MenuItem(this.sortIDMenuItem);
sortMenu.add$java_awt_MenuItem(this.sortLengthMenuItem);
sortMenu.add$java_awt_MenuItem(this.sortByTreeMenu);
sortMenu.add$java_awt_MenuItem(this.sortGroupMenuItem);
sortMenu.add$java_awt_MenuItem(this.sortPairwiseMenuItem);
calculateMenu.add$java_awt_MenuItem(sortMenu);
calculateTreeMenu.add$java_awt_MenuItem(this.averageDistanceTreeMenuItem);
calculateTreeMenu.add$java_awt_MenuItem(this.neighbourTreeMenuItem);
calculateTreeMenu.add$java_awt_MenuItem(this.avDistanceTreeBlosumMenuItem);
calculateTreeMenu.add$java_awt_MenuItem(this.njTreeBlosumMenuItem);
calculateMenu.add$java_awt_MenuItem(calculateTreeMenu);
calculateMenu.addSeparator$();
calculateMenu.add$java_awt_MenuItem(this.pairwiseAlignmentMenuItem);
calculateMenu.add$java_awt_MenuItem(this.PCAMenuItem);
calculateMenu.add$java_awt_MenuItem(this.autoCalculate);
calculateMenu.add$java_awt_MenuItem(this.sortByTree);
helpMenu.add$java_awt_MenuItem(this.documentation);
helpMenu.add$java_awt_MenuItem(this.about);
this.statusBar.setBackground$java_awt_Color($I$(74).white);
this.statusBar.setFont$java_awt_Font(Clazz.new_($I$(75,1).c$$S$I$I,["Verdana", 0, 11]));
this.setStatus$S($I$(3).getString$S("label.status_bar"));
this.add$java_awt_Component$O(this.statusBar, "South");
}, p$1);

Clazz.newMeth(C$, 'setStatus$S',  function (string) {
this.statusBar.setText$S(string);
});

Clazz.newMeth(C$, 'createAlignFrameWindow$Z',  function (reallyEmbedded) {
if (reallyEmbedded) {
this.embedAlignFrameInApplet$jalview_bin_JalviewLite(this.viewport.applet);
} else {
if (this.embedMenuIfNeeded$java_awt_Panel(this.alignPanel)) {
this.alignPanel.setSize$I$I(this.getSize$().width, this.getSize$().height - this.statusBar.getHeight$());
}this.add$java_awt_Component$O(this.statusBar, "South");
this.add$java_awt_Component$O(this.alignPanel, "Center");
$I$(17,"addFrame$java_awt_Frame$S$I$I",[this, this.getTitle$(), this.frameWidth, this.frameHeight]);
}});

Clazz.newMeth(C$, 'embedAlignFrameInApplet$jalview_bin_JalviewLite',  function (theApplet) {
this.fileMenu.remove$java_awt_MenuComponent(this.closeMenuItem);
this.fileMenu.remove$I(3);
this.embeddedMenu=this.makeEmbeddedPopupMenu$java_awt_MenuBar$Z$Z(this.alignFrameMenuBar, false, false);
theApplet.setLayout$java_awt_LayoutManager(Clazz.new_($I$(6,1)));
theApplet.add$java_awt_Component$O(this.embeddedMenu, "North");
theApplet.add$java_awt_Component$O(this.statusBar, "South");
this.alignPanel.setSize$I$I(theApplet.getSize$().width, theApplet.getSize$().height - this.embeddedMenu.getHeight$() - this.statusBar.getHeight$() );
theApplet.add$java_awt_Component$O(this.alignPanel, "Center");
var me=this;
theApplet.addFocusListener$java_awt_event_FocusListener(((P$.AlignFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.FocusListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
if (this.$finals$.theApplet.currentAlignFrame === this.$finals$.me ) {
this.$finals$.theApplet.currentAlignFrame=null;
}});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
this.$finals$.theApplet.currentAlignFrame=this.$finals$.me;
});
})()
), Clazz.new_(P$.AlignFrame$5.$init$,[this, {me:me,theApplet:theApplet}])));
theApplet.validate$();
});

Clazz.newMeth(C$, 'addStructureViewInstance$O$SA',  function (jmolviewer, sequenceIds) {
var viewer=null;
try {
viewer=jmolviewer;
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassCastException")){
System.err.println$S("Unsupported viewer object :" + jmolviewer.getClass$());
} else {
throw ex;
}
}
if (viewer == null ) {
System.err.println$S("Can't use this object as a structure viewer:" + jmolviewer.getClass$());
return null;
}var seqs=null;
if (sequenceIds == null  || sequenceIds.length == 0 ) {
seqs=this.viewport.getAlignment$().getSequencesArray$();
} else {
var sqi=Clazz.new_($I$(43,1));
var al=this.viewport.getAlignment$();
for (var sid=0; sid < sequenceIds.length; sid++) {
var sq=al.findName$S(sequenceIds[sid]);
if (sq != null ) {
sqi.addElement$O(sq);
}}
if (sqi.size$() > 0) {
seqs=Clazz.array($I$(44), [sqi.size$()]);
for (var sid=0, sSize=sqi.size$(); sid < sSize; sid++) {
seqs[sid]=sqi.elementAt$I(sid);
}
} else {
return null;
}}var jmv=null;
if (jmv == null ) {
jmv=Clazz.new_([viewer, this.alignPanel, Clazz.array($I$(44), -2, [seqs])],$I$(77,1).c$$org_jmol_viewer_Viewer$jalview_appletgui_AlignmentPanel$jalview_datamodel_SequenceIAA);
}return jmv;
});

Clazz.newMeth(C$, 'addPdbFile$S$S$S',  function (sequenceId, pdbEntryString, pdbFile) {
var toaddpdb=this.viewport.getAlignment$().findName$S(sequenceId);
var needtoadd=false;
if (toaddpdb != null ) {
var pdbe=toaddpdb.getAllPDBEntries$();
var pdbentry=null;
if (pdbe != null  && pdbe.size$() > 0 ) {
for (var pe=0, peSize=pdbe.size$(); pe < peSize; pe++) {
pdbentry=pdbe.elementAt$I(pe);
if (!pdbentry.getId$().equals$O(pdbEntryString) && !pdbentry.getFile$().equals$O(pdbFile) ) {
pdbentry=null;
} else {
continue;
}}
}if (pdbentry == null ) {
pdbentry=Clazz.new_($I$(78,1));
pdbentry.setId$S(pdbEntryString);
pdbentry.setFile$S(pdbFile);
needtoadd=true;
}var protocol=$I$(36,"resolveProtocol$S$jalview_io_FileFormatI",[pdbFile, $I$(79).PDB]);
if (protocol == null ) {
return false;
}if (needtoadd) {
pdbentry.setProperty$S$O("protocol", protocol);
toaddpdb.addPDBId$jalview_datamodel_PDBEntry(pdbentry);
this.alignPanel.getStructureSelectionManager$().registerPDBEntry$jalview_datamodel_PDBEntry(pdbentry);
}}return true;
});

Clazz.newMeth(C$, 'cleanSeqChainArrays$jalview_datamodel_SequenceIA$SA',  function (seqs, chains) {
if (seqs != null ) {
var sequences=Clazz.new_($I$(43,1));
for (var i=0; i < seqs.length; i++) {
if (seqs[i] != null ) {
sequences.addElement$O(Clazz.array(java.lang.Object, -1, [seqs[i], (chains != null ) ? chains[i] : null]));
}}
seqs=Clazz.array($I$(44), [sequences.size$()]);
chains=Clazz.array(String, [sequences.size$()]);
for (var i=0, isize=sequences.size$(); i < isize; i++) {
var oj=sequences.elementAt$I(i);
seqs[i]=oj[0];
chains[i]=oj[1];
}
}return Clazz.array(java.lang.Object, -1, [seqs, chains]);
}, p$1);

Clazz.newMeth(C$, 'newStructureView$jalview_bin_JalviewLite$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_io_DataSourceType',  function (applet, pdb, seqs, chains, protocol) {
var sqch=p$1.cleanSeqChainArrays$jalview_datamodel_SequenceIA$SA.apply(this, [seqs, chains]);
seqs=sqch[0];
chains=sqch[1];
if (seqs == null  || seqs.length == 0 ) {
System.err.println$S("JalviewLite.AlignFrame:newStructureView: No sequence to bind structure to.");
}if (protocol == null ) {
var sourceType=pdb.getProperty$S("protocol");
try {
protocol=$I$(80).valueOf$S(sourceType);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
} else {
throw e;
}
}
if (protocol == null ) {
System.err.println$S("Couldn't work out protocol to open structure: " + pdb.getId$());
return;
}}if (applet.useXtrnalSviewer) {
if ($I$(81).getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider(applet).setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(seqs, chains, pdb.getFile$(), protocol, null) == null ) {
System.err.println$S("Failed to map " + pdb.getFile$() + " (" + protocol + ") to any sequences" );
}return;
}if (applet.isAlignPdbStructures$() && applet.jmolAvailable ) {
var ajm=null;
var tajm;
var jmols=applet.getAppletWindow$Class(Clazz.getClass($I$(82)));
for (var i=0, iSize=jmols.size$(); i < iSize; i++) {
tajm=jmols.elementAt$I(i);
if (tajm.ap.alignFrame === this ) {
ajm=tajm;
break;
}}
if (ajm != null ) {
System.err.println$S("Incremental adding and aligning structure to existing Jmol view not yet implemented.");
ajm=null;
}}if (applet.jmolAvailable) {
Clazz.new_($I$(82,1).c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_appletgui_AlignmentPanel$jalview_io_DataSourceType,[pdb, seqs, chains, this.alignPanel, protocol]);
$I$(17).lastFrameX+=40;
$I$(17).lastFrameY+=40;
} else {
Clazz.new_($I$(83,1).c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_appletgui_AlignmentPanel$jalview_io_DataSourceType,[pdb, seqs, chains, this.alignPanel, protocol]);
}});

Clazz.newMeth(C$, 'alignedStructureView$jalview_bin_JalviewLite$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$SAA$SA',  function (applet, pdb, seqs, chains, protocols) {
System.err.println$S("Aligned Structure View: Not yet implemented.");
});

Clazz.newMeth(C$, 'select$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns',  function (sel, csel, hidden) {
this.alignPanel.seqPanel.selection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource(sel, csel, hidden, null);
});

Clazz.newMeth(C$, 'scrollTo$I$I',  function (row, column) {
this.alignPanel.seqPanel.scrollTo$I$I(row, column);
});

Clazz.newMeth(C$, 'scrollToRow$I',  function (row) {
this.alignPanel.seqPanel.scrollToRow$I(row);
});

Clazz.newMeth(C$, 'scrollToColumn$I',  function (column) {
this.alignPanel.seqPanel.scrollToColumn$I(column);
});

Clazz.newMeth(C$, 'getSequenceSetId$',  function () {
return this.viewport.getSequenceSetId$();
});

Clazz.newMeth(C$, 'loadScoreFile$S',  function (source) {
var file=Clazz.new_([source, $I$(36).checkProtocol$O(source)],$I$(84,1).c$$O$jalview_io_DataSourceType);
if (!file.isValid$()) {
System.err.println$S("Problems parsing T-Coffee scores: " + file.getWarningMessage$());
System.err.println$S("Origin was:\n" + source);
return false;
}var aln;
if ((aln=this.viewport.getAlignment$()) != null  && (aln.getHeight$() != file.getHeight$() || aln.getWidth$() != file.getWidth$() ) ) {
System.err.println$S("The scores matrix does not match the alignment dimensions");
}if (file.annotateAlignment$jalview_datamodel_AlignmentI$Z(this.alignPanel.getAlignment$(), false)) {
this.alignPanel.fontChanged$();
this.tcoffeeColour.setEnabled$Z(true);
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_([this.alignPanel.getAlignment$()],$I$(32,1).c$$jalview_datamodel_AnnotatedCollectionI));
return true;
} else {
System.err.println$S("Problems resolving T-Coffee scores:");
if (file.getWarningMessage$() != null ) {
System.err.println$S(file.getWarningMessage$());
}}return false;
});

Clazz.newMeth(C$, 'getSplitFrame$',  function () {
return this.splitFrame;
});

Clazz.newMeth(C$, 'setSplitFrame$jalview_appletgui_SplitFrame',  function (sf) {
this.splitFrame=sf;
});

Clazz.newMeth(C$, 'setShowSeqFeatures$Z',  function (b) {
this.viewport.setShowSequenceFeatures$Z(b);
});

Clazz.newMeth(C$, 'setMenusForViewport$',  function () {
});

Clazz.newMeth(C$, 'refreshFeatureUI$Z',  function (enableIfNecessary) {
if (enableIfNecessary) {
this.sequenceFeatures.setState$Z(true);
this.alignPanel.av.setShowSequenceFeatures$Z(true);
}});

Clazz.newMeth(C$, 'getFeatureSettingsUI$',  function () {
return this.alignPanel.av.featureSettings;
});

Clazz.newMeth(C$, 'showFeatureSettingsUI$',  function () {
return Clazz.new_($I$(85,1).c$$jalview_appletgui_AlignmentPanel,[this.alignPanel]);
});

Clazz.newMeth(C$, 'setFeatureSettingsGeometry$java_awt_Rectangle',  function (bounds) {
this.fs_bounds=bounds;
});

Clazz.newMeth(C$, 'getFeatureSettingsGeometry$',  function () {
return this.fs_bounds;
});
;
(function(){/*l*/var C$=Clazz.newClass(P$, "AlignFrame$1AboutPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.Canvas', null, 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['version','builddate']]]

Clazz.newMeth(C$, 'c$$S$S',  function (version, builddate) {
Clazz.super_(C$, this);
this.version=version;
this.builddate=builddate;
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
g.setColor$java_awt_Color($I$(74).white);
g.fillRect$I$I$I$I(0, 0, this.getSize$().width, this.getSize$().height);
g.setFont$java_awt_Font(Clazz.new_($I$(75,1).c$$S$I$I,["Helvetica", 0, 12]));
var fm=g.getFontMetrics$();
var fh=fm.getHeight$();
var y=5;
var x=7;
g.setColor$java_awt_Color($I$(74).black);
g.setFont$java_awt_Font(Clazz.new_($I$(75,1).c$$S$I$I,["Helvetica", 1, 14]));
g.drawString$S$I$I($I$(3,"formatMessage$S$SA",["label.jalviewLite_release", Clazz.array(String, -1, [this.version])]), x, y+=fh);
g.setFont$java_awt_Font(Clazz.new_($I$(75,1).c$$S$I$I,["Helvetica", 1, 12]));
g.drawString$S$I$I($I$(3,"formatMessage$S$SA",["label.jaview_build_date", Clazz.array(String, -1, [this.builddate])]), x, y+=fh);
g.setFont$java_awt_Font(Clazz.new_($I$(75,1).c$$S$I$I,["Helvetica", 0, 12]));
g.drawString$S$I$I($I$(3).getString$S("label.jalview_authors_1"), x, y=(y+(fh * 1.5)|0));
g.drawString$S$I$I($I$(3).getString$S("label.jalview_authors_2"), x + 50, y+=fh + 8);
g.drawString$S$I$I($I$(3).getString$S("label.jalview_dev_managers"), x, y+=fh);
g.drawString$S$I$I($I$(3).getString$S("label.jalview_distribution_lists"), x, y+=fh);
g.drawString$S$I$I($I$(3).getString$S("label.jalview_please_cite"), x, y+=fh + 8);
g.drawString$S$I$I($I$(3).getString$S("label.jalview_cite_1_authors"), x, y+=fh);
g.drawString$S$I$I($I$(3).getString$S("label.jalview_cite_1_title"), x, y+=fh);
g.drawString$S$I$I($I$(3).getString$S("label.jalview_cite_1_ref"), x, y+=fh);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:27 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
