(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.ArrayList','jalview.gui.AlignViewport','jalview.gui.AlignmentPanel','jalview.bin.Jalview','jalview.gui.ProgressBar','jalview.controller.AlignViewController','jalview.bin.Cache','jalview.gui.Desktop','java.awt.dnd.DropTarget','jalview.util.Platform','jalview.util.MessageManager','jalview.gui.ViewSelectionMenu','java.util.Arrays','java.awt.event.FocusAdapter','jalview.gui.Help','java.awt.event.KeyAdapter','jalview.gui.PaintRefresher','javax.swing.SwingUtilities','javax.swing.event.InternalFrameAdapter','Thread','jalview.gui.ColourMenuHelper','jalview.gui.SequenceFetcher','jalview.io.FileFormat','jalview.io.FileLoader','jalview.io.DataSourceType','jalview.io.JalviewFileChooser','jalview.io.JalviewFileView','jalview.gui.JvOptionPane','java.io.File','jalview.project.Jalview2XML','jalview.datamodel.AlignExportSettingsAdapter','jalview.io.FormatAdapter','jalview.io.BackupFiles','java.io.PrintWriter','java.io.FileWriter','jalview.gui.AlignExportOptions','jalview.io.FileFormats','jalview.gui.CutAndPasteTransfer','jalview.gui.OOMWarning','jalview.io.HtmlSvgOutput','jalview.io.BioJsHTMLOutput',['jalview.util.ImageMaker','.TYPE'],'java.awt.print.PrinterJob','jalview.gui.PrintThread','jalview.gui.AnnotationExporter','jalview.datamodel.AlignmentI','jalview.datamodel.SequenceI','jalview.commands.SlideSequencesCommand','java.awt.datatransfer.StringSelection','java.awt.Toolkit','jalview.datamodel.HiddenColumns','java.awt.datatransfer.DataFlavor','jalview.io.IdentifyFile','jalview.datamodel.Sequence','jalview.datamodel.Alignment','java.util.Vector','jalview.datamodel.AlignmentAnnotation','jalview.commands.EditCommand',['jalview.commands.EditCommand','.Action'],'jalview.analysis.AlignmentUtils','jalview.datamodel.SequenceGroup','jalview.commands.TrimRegionCommand','jalview.commands.RemoveGapColCommand','jalview.commands.RemoveGapsCommand','jalview.gui.Finder','jalview.gui.FontChooser','jalview.gui.FeatureSettings','jalview.io.AlignmentProperties','javax.swing.JLabel','java.awt.Color','javax.swing.JPanel','java.awt.BorderLayout','javax.swing.JInternalFrame','javax.swing.JScrollPane','jalview.gui.OverviewPanel','javax.swing.JLayeredPane','jalview.gui.TextColourChooser','jalview.gui.AnnotationColourChooser','jalview.gui.AnnotationColumnChooser','jalview.gui.UserDefinedColours','jalview.schemes.ColourSchemes','jalview.gui.SliderPanel','jalview.analysis.AlignmentSorter','jalview.commands.OrderCommand','jalview.gui.RedundancyPanel','jalview.gui.PairwiseAlignPanel','jalview.gui.TreePanel','javax.swing.JMenuItem','java.util.Hashtable','jalview.datamodel.SeqCigar','jalview.io.NewickFile','jalview.io.FileParse','javax.swing.JMenu','jalview.ws.jws1.Discoverer','jalview.ws.jws2.Jws2Discoverer','jalview.ws.rest.RestClient','jalview.gui.JvSwingUtils','jalview.analysis.CrossRef','jalview.gui.CrossRefAction','jalview.analysis.Dna','jalview.analysis.SequenceIdMatcher','jalview.io.AppletFormatAdapter','java.net.URL','jalview.gui.AssociatePdbFileWithSeq','jalview.io.AnnotationFile','jalview.io.TCoffeeScoreFile','jalview.schemes.TCoffeeColourScheme','jalview.io.ScoreMatrixFile','jalview.io.JPredFile','jalview.io.JnetAnnotationMaker','jalview.analysis.ParseProperties','javax.swing.JCheckBoxMenuItem','Boolean','jalview.ws.DBRefFetcher','jalview.ws.seqfetcher.DbSourceProxy','Error','jalview.gui.CalculationChooser','jalview.io.vcf.VCFLoader']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignFrame", null, 'jalview.jbgui.GAlignFrame', ['java.awt.dnd.DropTargetListener', 'jalview.gui.IProgressIndicator', 'jalview.api.AlignViewControllerGuiI', ['jalview.gui.ColourMenuHelper','jalview.gui.ColourMenuHelper.ColourChangeListener']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.alignPanels=Clazz.new_($I$(1,1));
this.currentFileFormat=null;
this.fileName=null;
this.lastSaveSuccessful=false;
this.buildingMenu=false;
this.lastFeatureSettingsBounds=null;
},1);

C$.$fields$=[['Z',['lastSaveSuccessful','buildingMenu'],'I',['_annotationScoreVectorHash'],'S',['fileName','lastFilenameSaved'],'O',['alignPanel','jalview.gui.AlignmentPanel','viewport','jalview.gui.AlignViewport','avc','jalview.api.AlignViewControllerI','alignPanels','java.util.List','currentFileFormat','jalview.io.FileFormatI','fileObject','java.io.File','progressBar','jalview.gui.IProgressIndicator','lastFormatSaved','jalview.io.FileFormatI','featureSettings','jalview.gui.FeatureSettings','lastFeatureSettingsBounds','java.awt.Rectangle']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$I$I', function (al, width, height) {
C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I.apply(this, [al, null, width, height]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$I$I$S', function (al, width, height, sequenceSetId) {
C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I$S.apply(this, [al, null, width, height, sequenceSetId]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$I$I$S$S', function (al, width, height, sequenceSetId, viewId) {
C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I$S$S.apply(this, [al, null, width, height, sequenceSetId, viewId]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I', function (al, hiddenColumns, width, height) {
C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I$S.apply(this, [al, hiddenColumns, width, height, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I$S', function (al, hiddenColumns, width, height, sequenceSetId) {
C$.c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I$S$S.apply(this, [al, hiddenColumns, width, height, sequenceSetId, null]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I$S$S', function (al, hiddenColumns, width, height, sequenceSetId, viewId) {
Clazz.super_(C$, this);
this.setSize$I$I(width, height);
if (al.getDataset$() == null ) {
al.setDataset$jalview_datamodel_AlignmentI(null);
}this.viewport=Clazz.new_($I$(2,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$S$S,[al, hiddenColumns, sequenceSetId, viewId]);
this.alignPanel=Clazz.new_($I$(3,1).c$$jalview_gui_AlignFrame$jalview_gui_AlignViewport,[this, this.viewport]);
this.addAlignmentPanel$jalview_gui_AlignmentPanel$Z(this.alignPanel, true);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceIA$jalview_datamodel_HiddenColumns$I$I', function (al, hiddenSeqs, hiddenColumns, width, height) {
Clazz.super_(C$, this);
this.setSize$I$I(width, height);
if (al.getDataset$() == null ) {
al.setDataset$jalview_datamodel_AlignmentI(null);
}this.viewport=Clazz.new_($I$(2,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns,[al, hiddenColumns]);
if (hiddenSeqs != null  && hiddenSeqs.length > 0 ) {
this.viewport.hideSequence$jalview_datamodel_SequenceIA(hiddenSeqs);
}this.alignPanel=Clazz.new_($I$(3,1).c$$jalview_gui_AlignFrame$jalview_gui_AlignViewport,[this, this.viewport]);
this.addAlignmentPanel$jalview_gui_AlignmentPanel$Z(this.alignPanel, true);
this.init$();
}, 1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel', function (ap) {
Clazz.super_(C$, this);
this.viewport=ap.av;
this.alignPanel=ap;
this.addAlignmentPanel$jalview_gui_AlignmentPanel$Z(ap, false);
this.init$();
}, 1);

Clazz.newMeth(C$, 'init$', function () {
if (!$I$(4).isHeadlessMode$()) {
this.progressBar=Clazz.new_($I$(5,1).c$$javax_swing_JPanel$javax_swing_JLabel,[this.statusPanel, this.statusBar]);
}this.avc=Clazz.new_($I$(6,1).c$$jalview_api_AlignViewControllerGuiI$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel,[this, this.viewport, this.alignPanel]);
if (this.viewport.getAlignmentConservationAnnotation$() == null ) {
this.conservationMenuItem.setEnabled$Z(false);
this.modifyConservation.setEnabled$Z(false);
}var sortby=$I$(7).getDefault$S$S("SORT_ALIGNMENT", "No sort");
if (sortby.equals$O("Id")) {
this.sortIDMenuItem_actionPerformed$java_awt_event_ActionEvent(null);
} else if (sortby.equals$O("Pairwise Identity")) {
this.sortPairwiseMenuItem_actionPerformed$java_awt_event_ActionEvent(null);
}this.alignPanel.av.setShowAutocalculatedAbove$Z(this.isShowAutoCalculatedAbove$());
this.setMenusFromViewport$jalview_gui_AlignViewport(this.viewport);
this.buildSortByAnnotationScoresMenu$();
this.calculateTree.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.AlignFrame'].openTreePcaDialog$.apply(this.b$['jalview.gui.AlignFrame'], []);
});
})()
), Clazz.new_(P$.AlignFrame$1.$init$,[this, null])));
this.buildColourMenu$();
if ($I$(8).desktop != null ) {
this.setDropTarget$java_awt_dnd_DropTarget(Clazz.new_($I$(9,1).c$$java_awt_Component$java_awt_dnd_DropTargetListener,[this, this]));
if (!$I$(10).isJS$()) {
p$1.addServiceListeners.apply(this, []);
}this.setGUINucleotide$();
}if (this.viewport.getWrapAlignment$()) {
this.wrapMenuItem_actionPerformed$java_awt_event_ActionEvent(null);
}if ($I$(7).getDefault$S$Z("SHOW_OVERVIEW", false)) {
this.overviewMenuItem_actionPerformed$java_awt_event_ActionEvent(null);
}this.addKeyListener$();
var selviews=Clazz.new_($I$(1,1));
var origview=Clazz.new_($I$(1,1));
var menuLabel=$I$(11).getString$S("label.copy_format_from");
var vsel=Clazz.new_([menuLabel, ((P$.AlignFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.ViewSelectionMenu','jalview.gui.ViewSelectionMenu.ViewSetProvider']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAllAlignmentPanels$', function () {
this.$finals$.origview.clear$();
this.$finals$.origview.add$O(this.b$['jalview.gui.AlignFrame'].alignPanel);
var aps=Clazz.new_([$I$(13,"asList$OA",[$I$(8).getAlignmentPanels$S(null)])],$I$(1,1).c$$java_util_Collection);
aps.remove$O(this.b$['jalview.gui.AlignFrame'].alignPanel);
return aps.toArray$OA(Clazz.array($I$(3), [aps.size$()]));
});
})()
), Clazz.new_(P$.AlignFrame$2.$init$,[this, {origview:origview}])), selviews, ((P$.AlignFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ItemListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent', function (e) {
if (this.$finals$.origview.size$() > 0) {
var ap=this.$finals$.origview.get$I(0);
var vs=this.$finals$.selviews.get$I(0).getAlignViewport$().getViewStyle$();
var fromSplitFrame=this.$finals$.selviews.get$I(0).getAlignViewport$().getCodingComplement$() != null ;
if (!fromSplitFrame) {
vs.setScaleProteinAsCdna$Z(ap.getAlignViewport$().getViewStyle$().isScaleProteinAsCdna$());
}ap.getAlignViewport$().setViewStyle$jalview_api_ViewStyleI(vs);
var complement=ap.getAlignViewport$().getCodingComplement$();
if (complement != null  && vs.isScaleProteinAsCdna$() ) {
var af=$I$(8).getAlignFrameFor$jalview_api_AlignViewportI(complement);
(af.getSplitViewContainer$()).adjustLayout$();
af.setMenusForViewport$();
}ap.updateLayout$();
ap.setSelected$Z(true);
ap.alignFrame.setMenusForViewport$();
}});
})()
), Clazz.new_(P$.AlignFrame$3.$init$,[this, {origview:origview,selviews:selviews}]))],$I$(12,1).c$$S$jalview_gui_ViewSelectionMenu_ViewSetProvider$java_util_List$java_awt_event_ItemListener);
if ($I$(7).getDefault$S$S("VERSION", "DEVELOPMENT").toLowerCase$().indexOf$S("devel") > -1 || $I$(7).getDefault$S$S("VERSION", "DEVELOPMENT").toLowerCase$().indexOf$S("test") > -1 ) {
this.formatMenu.add$javax_swing_JMenuItem(vsel);
}this.addFocusListener$java_awt_event_FocusListener(((P$.AlignFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.FocusAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent', function (e) {
$I$(4).setCurrentAlignFrame$jalview_gui_AlignFrame(this.b$['jalview.gui.AlignFrame']);
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.AlignFrame$4)));
});

Clazz.newMeth(C$, 'setFileName$S$jalview_io_FileFormatI', function (file, format) {
this.fileName=file;
this.setFileFormat$jalview_io_FileFormatI(format);
this.reload.setEnabled$Z(true);
});

Clazz.newMeth(C$, 'setFileObject$java_io_File', function (file) {
this.fileObject=file;
});

Clazz.newMeth(C$, 'addKeyListener$', function () {
this.addKeyListener$java_awt_event_KeyListener(((P$.AlignFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.KeyAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (evt) {
if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode && ((evt.getKeyCode$() >= 48 && evt.getKeyCode$() <= 57 ) || (evt.getKeyCode$() >= 96 && evt.getKeyCode$() <= 105 ) ) && Character.isDigit$C(evt.getKeyChar$())  ) {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().numberPressed$C(evt.getKeyChar$());
}switch (evt.getKeyCode$()) {
case 27:
this.b$['jalview.gui.AlignFrame'].deselectAllSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent.apply(this.b$['jalview.gui.AlignFrame'], [null]);
break;
case 40:
if (evt.isAltDown$() || !this.b$['jalview.gui.AlignFrame'].viewport.cursorMode ) {
this.b$['jalview.gui.AlignFrame'].moveSelectedSequences$Z.apply(this.b$['jalview.gui.AlignFrame'], [false]);
}if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode) {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().moveCursor$I$I(0, 1);
}break;
case 38:
if (evt.isAltDown$() || !this.b$['jalview.gui.AlignFrame'].viewport.cursorMode ) {
this.b$['jalview.gui.AlignFrame'].moveSelectedSequences$Z.apply(this.b$['jalview.gui.AlignFrame'], [true]);
}if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode) {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().moveCursor$I$I(0, -1);
}break;
case 37:
if (evt.isAltDown$() || !this.b$['jalview.gui.AlignFrame'].viewport.cursorMode ) {
this.b$['jalview.gui.AlignFrame'].slideSequences$Z$I.apply(this.b$['jalview.gui.AlignFrame'], [false, this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().getKeyboardNo1$()]);
} else {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().moveCursor$I$I(-1, 0);
}break;
case 39:
if (evt.isAltDown$() || !this.b$['jalview.gui.AlignFrame'].viewport.cursorMode ) {
this.b$['jalview.gui.AlignFrame'].slideSequences$Z$I.apply(this.b$['jalview.gui.AlignFrame'], [true, this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().getKeyboardNo1$()]);
} else {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().moveCursor$I$I(1, 0);
}break;
case 32:
if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode) {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().insertGapAtCursor$Z(evt.isControlDown$() || evt.isShiftDown$() || evt.isAltDown$()  );
}break;
case 127:
case 8:
if (!this.b$['jalview.gui.AlignFrame'].viewport.cursorMode) {
this.b$['jalview.gui.AlignFrame'].cut_actionPerformed$.apply(this.b$['jalview.gui.AlignFrame'], []);
} else {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().deleteGapAtCursor$Z(evt.isControlDown$() || evt.isShiftDown$() || evt.isAltDown$()  );
}break;
case 83:
if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode) {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().setCursorRow$();
}break;
case 67:
if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode && !evt.isControlDown$() ) {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().setCursorColumn$();
}break;
case 80:
if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode) {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().setCursorPosition$();
}break;
case 10:
case 44:
if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode) {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().setCursorRowAndColumn$();
}break;
case 81:
if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode) {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().setSelectionAreaAtCursor$Z(true);
}break;
case 77:
if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode) {
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().setSelectionAreaAtCursor$Z(false);
}break;
case 113:
this.b$['jalview.gui.AlignFrame'].viewport.cursorMode=!this.b$['jalview.gui.AlignFrame'].viewport.cursorMode;
this.b$['jalview.gui.AlignFrame'].setStatus$S.apply(this.b$['jalview.gui.AlignFrame'], [$I$(11,"formatMessage$S$SA",["label.keyboard_editing_mode", Clazz.array(String, -1, [(this.b$['jalview.gui.AlignFrame'].viewport.cursorMode ? "on" : "off")])])]);
if (this.b$['jalview.gui.AlignFrame'].viewport.cursorMode) {
var ranges=this.b$['jalview.gui.AlignFrame'].viewport.getRanges$();
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().seqCanvas.cursorX=ranges.getStartRes$();
this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().seqCanvas.cursorY=ranges.getStartSeq$();
}this.b$['jalview.gui.AlignFrame'].alignPanel.getSeqPanel$().seqCanvas.repaint$();
break;
case 112:
try {
$I$(15).showHelpWindow$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
break;
case 72:
{
var toggleSeqs=!evt.isControlDown$();
var toggleCols=!evt.isShiftDown$();
this.b$['jalview.gui.AlignFrame'].toggleHiddenRegions$Z$Z.apply(this.b$['jalview.gui.AlignFrame'], [toggleSeqs, toggleCols]);
break;
}case 66:
{
var toggleSel=evt.isControlDown$() || evt.isMetaDown$() ;
var modifyExisting=true;
var invertHighlighted=evt.isAltDown$();
this.b$['jalview.gui.AlignFrame'].avc.markHighlightedColumns$Z$Z$Z(invertHighlighted, modifyExisting, toggleSel);
break;
}case 33:
this.b$['jalview.gui.AlignFrame'].viewport.getRanges$().pageUp$();
break;
case 34:
this.b$['jalview.gui.AlignFrame'].viewport.getRanges$().pageDown$();
break;
}
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (evt) {
switch (evt.getKeyCode$()) {
case 37:
if (evt.isAltDown$() || !this.b$['jalview.gui.AlignFrame'].viewport.cursorMode ) {
this.b$['jalview.gui.AlignFrame'].viewport.firePropertyChange$S$O$O("alignment", null, this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().getSequences$());
}break;
case 39:
if (evt.isAltDown$() || !this.b$['jalview.gui.AlignFrame'].viewport.cursorMode ) {
this.b$['jalview.gui.AlignFrame'].viewport.firePropertyChange$S$O$O("alignment", null, this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().getSequences$());
}break;
}
});
})()
), Clazz.new_($I$(16,1),[this, null],P$.AlignFrame$5)));
});

Clazz.newMeth(C$, 'addAlignmentPanel$jalview_gui_AlignmentPanel$Z', function (ap, newPanel) {
ap.alignFrame=this;
this.avc=Clazz.new_($I$(6,1).c$$jalview_api_AlignViewControllerGuiI$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel,[this, this.viewport, this.alignPanel]);
this.alignPanels.add$O(ap);
$I$(17,"Register$java_awt_Component$S",[ap, ap.av.getSequenceSetId$()]);
var aSize=this.alignPanels.size$();
this.tabbedPane.setVisible$Z(aSize > 1 || ap.av.getViewName$() != null  );
if (aSize == 1 && ap.av.getViewName$() == null  ) {
this.getContentPane$().add$java_awt_Component$O(ap, "Center");
} else {
if (aSize == 2) {
this.setInitialTabVisible$();
}this.expandViews.setEnabled$Z(true);
this.gatherViews.setEnabled$Z(true);
this.tabbedPane.addTab$S$java_awt_Component(ap.av.getViewName$(), ap);
ap.setVisible$Z(false);
}if (newPanel) {
if (ap.av.isPadGaps$()) {
ap.av.getAlignment$().padGaps$();
}ap.av.updateConservation$jalview_api_AlignmentViewPanel(ap);
ap.av.updateConsensus$jalview_api_AlignmentViewPanel(ap);
ap.av.updateStrucConsensus$jalview_api_AlignmentViewPanel(ap);
}});

Clazz.newMeth(C$, 'setInitialTabVisible$', function () {
this.expandViews.setEnabled$Z(true);
this.gatherViews.setEnabled$Z(true);
this.tabbedPane.setVisible$Z(true);
var first=this.alignPanels.get$I(0);
this.tabbedPane.addTab$S$java_awt_Component(first.av.getViewName$(), first);
this.getContentPane$().add$java_awt_Component$O(this.tabbedPane, "Center");
});

Clazz.newMeth(C$, 'getViewport$', function () {
return this.viewport;
});

Clazz.newMeth(C$, 'addServiceListeners', function () {
var thisListener;
$I$(8).instance.addJalviewPropertyChangeListener$S$java_beans_PropertyChangeListener("services", thisListener=((P$.AlignFrame$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent', function (evt) {
{
$I$(18,"invokeLater$Runnable",[((P$.AlignFrame$6$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$6$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
System.err.println$S("Rebuild WS Menu for service change");
this.b$['jalview.gui.AlignFrame'].BuildWebServiceMenu$.apply(this.b$['jalview.gui.AlignFrame'], []);
});
})()
), Clazz.new_(P$.AlignFrame$6$1.$init$,[this, null]))]);
}});
})()
), Clazz.new_(P$.AlignFrame$6.$init$,[this, null])));
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.AlignFrame$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (evt) {
$I$(8).instance.removeJalviewPropertyChangeListener$S$java_beans_PropertyChangeListener("services", this.$finals$.thisListener);
this.b$['jalview.gui.AlignFrame'].closeMenuItem_actionPerformed$Z.apply(this.b$['jalview.gui.AlignFrame'], [true]);
});
})()
), Clazz.new_($I$(19,1),[this, {thisListener:thisListener}],P$.AlignFrame$7)));
Clazz.new_([((P$.AlignFrame$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.AlignFrame'].BuildWebServiceMenu$.apply(this.b$['jalview.gui.AlignFrame'], []);
});
})()
), Clazz.new_(P$.AlignFrame$8.$init$,[this, null]))],$I$(20,1).c$$Runnable).start$();
}, p$1);

Clazz.newMeth(C$, 'setGUINucleotide$', function () {
var al=this.getViewport$().getAlignment$();
var nucleotide=al.isNucleotide$();
this.loadVcf.setVisible$Z(nucleotide);
this.showTranslation.setVisible$Z(nucleotide);
this.showReverse.setVisible$Z(nucleotide);
this.showReverseComplement.setVisible$Z(nucleotide);
this.conservationMenuItem.setEnabled$Z(!nucleotide);
this.modifyConservation.setEnabled$Z(!nucleotide && this.conservationMenuItem.isSelected$() );
this.showGroupConservation.setEnabled$Z(!nucleotide);
this.showComplementMenuItem.setText$S(nucleotide ? $I$(11).getString$S("label.protein") : $I$(11).getString$S("label.nucleotide"));
});

Clazz.newMeth(C$, 'setMenusForViewport$', function () {
this.setMenusFromViewport$jalview_gui_AlignViewport(this.viewport);
});

Clazz.newMeth(C$, 'setMenusFromViewport$jalview_gui_AlignViewport', function (av) {
this.padGapsMenuitem.setSelected$Z(av.isPadGaps$());
this.colourTextMenuItem.setSelected$Z(av.isShowColourText$());
this.abovePIDThreshold.setSelected$Z(av.getAbovePIDThreshold$());
this.modifyPID.setEnabled$Z(this.abovePIDThreshold.isSelected$());
this.conservationMenuItem.setSelected$Z(av.getConservationSelected$());
this.modifyConservation.setEnabled$Z(this.conservationMenuItem.isSelected$());
this.seqLimits.setSelected$Z(av.getShowJVSuffix$());
this.idRightAlign.setSelected$Z(av.isRightAlignIds$());
this.centreColumnLabelsMenuItem.setState$Z(av.isCentreColumnLabels$());
this.renderGapsMenuItem.setSelected$Z(av.isRenderGaps$());
this.wrapMenuItem.setSelected$Z(av.getWrapAlignment$());
this.scaleAbove.setVisible$Z(av.getWrapAlignment$());
this.scaleLeft.setVisible$Z(av.getWrapAlignment$());
this.scaleRight.setVisible$Z(av.getWrapAlignment$());
this.annotationPanelMenuItem.setState$Z(av.isShowAnnotation$());
this.showAllSeqAnnotations.setEnabled$Z(this.annotationPanelMenuItem.getState$());
this.hideAllSeqAnnotations.setEnabled$Z(this.annotationPanelMenuItem.getState$());
this.showAllAlAnnotations.setEnabled$Z(this.annotationPanelMenuItem.getState$());
this.hideAllAlAnnotations.setEnabled$Z(this.annotationPanelMenuItem.getState$());
this.viewBoxesMenuItem.setSelected$Z(av.getShowBoxes$());
this.viewTextMenuItem.setSelected$Z(av.getShowText$());
this.showNonconservedMenuItem.setSelected$Z(av.getShowUnconserved$());
this.showGroupConsensus.setSelected$Z(av.isShowGroupConsensus$());
this.showGroupConservation.setSelected$Z(av.isShowGroupConservation$());
this.showConsensusHistogram.setSelected$Z(av.isShowConsensusHistogram$());
this.showSequenceLogo.setSelected$Z(av.isShowSequenceLogo$());
this.normaliseSequenceLogo.setSelected$Z(av.isNormaliseSequenceLogo$());
$I$(21,"setColourSelected$javax_swing_JMenu$jalview_schemes_ColourSchemeI",[this.colourMenu, av.getGlobalColourScheme$()]);
this.showSeqFeatures.setSelected$Z(av.isShowSequenceFeatures$());
this.hiddenMarkers.setState$Z(av.getShowHiddenMarkers$());
this.applyToAllGroups.setState$Z(av.getColourAppliesToAllGroups$());
this.showNpFeatsMenuitem.setSelected$Z(av.isShowNPFeats$());
this.showDbRefsMenuitem.setSelected$Z(av.isShowDBRefs$());
this.autoCalculate.setSelected$Z(av.autoCalculateConsensus);
this.sortByTree.setSelected$Z(av.sortByTree);
this.listenToViewSelections.setSelected$Z(av.followSelection);
this.showProducts.setEnabled$Z(this.canShowProducts$());
this.setGroovyEnabled$Z($I$(8).getGroovyConsole$() != null );
this.updateEditMenuBar$();
});

Clazz.newMeth(C$, 'setGroovyEnabled$Z', function (b) {
this.runGroovy.setEnabled$Z(b);
});

Clazz.newMeth(C$, 'setProgressBar$S$J', function (message, id) {
this.progressBar.setProgressBar$S$J(message, id);
});

Clazz.newMeth(C$, 'registerHandler$J$jalview_gui_IProgressIndicatorHandler', function (id, handler) {
this.progressBar.registerHandler$J$jalview_gui_IProgressIndicatorHandler(id, handler);
});

Clazz.newMeth(C$, 'operationInProgress$', function () {
return this.progressBar.operationInProgress$();
});

Clazz.newMeth(C$, 'setStatus$S', function (text) {
this.statusBar.setText$S(text == null  || text.isEmpty$()  ? " " : text);
});

Clazz.newMeth(C$, 'getVersion$', function () {
return $I$(7).getProperty$S("VERSION");
});

Clazz.newMeth(C$, 'getFeatureRenderer$', function () {
return this.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$();
});

Clazz.newMeth(C$, 'fetchSequence_actionPerformed$', function () {
Clazz.new_($I$(22,1).c$$jalview_gui_IProgressIndicator,[this]);
});

Clazz.newMeth(C$, 'addFromFile_actionPerformed$java_awt_event_ActionEvent', function (e) {
$I$(8).instance.inputLocalFileMenuItem_actionPerformed$jalview_gui_AlignViewport(this.viewport);
});

Clazz.newMeth(C$, 'reload_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.fileName != null ) {
if ($I$(23).Jalview.equals$O(this.currentFileFormat)) {
var frames=$I$(8).desktop.getAllFrames$();
for (var i=0; i < frames.length; i++) {
if (Clazz.instanceOf(frames[i], "jalview.gui.AlignFrame") && frames[i] !== this   && (frames[i]).fileName != null   && (frames[i]).fileName.equals$O(this.fileName) ) {
try {
frames[i].setSelected$Z(true);
$I$(8).instance.closeAssociatedWindows$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.beans.PropertyVetoException")){
} else {
throw ex;
}
}
}}
$I$(8).instance.closeAssociatedWindows$();
var loader=Clazz.new_($I$(24,1));
var protocol=this.fileName.startsWith$S("http:") ? $I$(25).URL : $I$(25).FILE;
loader.LoadFile$jalview_gui_AlignViewport$O$jalview_io_DataSourceType$jalview_io_FileFormatI(this.viewport, this.fileName, protocol, this.currentFileFormat);
} else {
var bounds=this.getBounds$();
var loader=Clazz.new_($I$(24,1));
var newframe=null;
if (this.fileObject == null ) {
var protocol=(this.fileName.startsWith$S("http:") ? $I$(25).URL : $I$(25).FILE);
newframe=loader.LoadFileWaitTillLoaded$S$jalview_io_DataSourceType$jalview_io_FileFormatI(this.fileName, protocol, this.currentFileFormat);
} else {
newframe=loader.LoadFileWaitTillLoaded$java_io_File$jalview_io_DataSourceType$jalview_io_FileFormatI(this.fileObject, $I$(25).FILE, this.currentFileFormat);
}newframe.setBounds$java_awt_Rectangle(bounds);
if (this.featureSettings != null  && this.featureSettings.isShowing$() ) {
var fspos=this.featureSettings.frame.getBounds$();
newframe.featureSettings_actionPerformed$java_awt_event_ActionEvent(null);
var nfs=newframe.featureSettings;
$I$(18,"invokeLater$Runnable",[((P$.AlignFrame$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.$finals$.nfs.frame.setBounds$java_awt_Rectangle(this.$finals$.fspos);
});
})()
), Clazz.new_(P$.AlignFrame$9.$init$,[this, {nfs:nfs,fspos:fspos}]))]);
this.featureSettings.close$();
this.featureSettings=null;
}this.closeMenuItem_actionPerformed$Z(true);
}}});

Clazz.newMeth(C$, 'addFromText_actionPerformed$java_awt_event_ActionEvent', function (e) {
$I$(8).instance.inputTextboxMenuItem_actionPerformed$jalview_api_AlignmentViewPanel(this.viewport.getAlignPanel$());
});

Clazz.newMeth(C$, 'addFromURL_actionPerformed$java_awt_event_ActionEvent', function (e) {
$I$(8).instance.inputURLMenuItem_actionPerformed$jalview_gui_AlignViewport(this.viewport);
});

Clazz.newMeth(C$, 'save_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.fileName == null  || (this.currentFileFormat == null )  || this.fileName.startsWith$S("http") ) {
this.saveAs_actionPerformed$();
} else {
this.saveAlignment$S$jalview_io_FileFormatI(this.fileName, this.currentFileFormat);
}});

Clazz.newMeth(C$, 'saveAs_actionPerformed$', function () {
var format=this.currentFileFormat == null  ? null : this.currentFileFormat.getName$();
var chooser=$I$(26,"forWrite$S$S",[$I$(7).getProperty$S("LAST_DIRECTORY"), format]);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(27,1)));
chooser.setDialogTitle$S($I$(11).getString$S("label.save_alignment_to_file"));
chooser.setToolTipText$S($I$(11).getString$S("action.save"));
var value=chooser.showSaveDialog$java_awt_Component(this);
if (value != 0) {
return;
}this.currentFileFormat=chooser.getSelectedFormat$();
while (this.currentFileFormat == null ){
$I$(28,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(8).desktop, $I$(11).getString$S("label.select_file_format_before_saving"), $I$(11).getString$S("label.file_format_not_specified"), 2]);
this.currentFileFormat=chooser.getSelectedFormat$();
value=chooser.showSaveDialog$java_awt_Component(this);
if (value != 0) {
return;
}}
this.fileName=chooser.getSelectedFile$().getPath$();
$I$(7,"setProperty$S$S",["DEFAULT_FILE_FORMAT", this.currentFileFormat.getName$()]);
$I$(7).setProperty$S$S("LAST_DIRECTORY", this.fileName);
this.saveAlignment$S$jalview_io_FileFormatI(this.fileName, this.currentFileFormat);
});

Clazz.newMeth(C$, 'isSaveAlignmentSuccessful$', function () {
if (!this.lastSaveSuccessful) {
$I$(28,"showInternalMessageDialog$java_awt_Component$S$S$I",[this, $I$(11,"formatMessage$S$OA",["label.couldnt_save_file", Clazz.array(java.lang.Object, -1, [this.lastFilenameSaved])]), $I$(11).getString$S("label.error_saving_file"), 2]);
} else {
this.setStatus$S($I$(11,"formatMessage$S$OA",["label.successfully_saved_to_file_in_format", Clazz.array(java.lang.Object, -1, [this.lastFilenameSaved, this.lastFormatSaved])]));
}return this.lastSaveSuccessful;
});

Clazz.newMeth(C$, 'saveAlignment$S$jalview_io_FileFormatI', function (file, format) {
this.lastSaveSuccessful=true;
this.lastFilenameSaved=file;
this.lastFormatSaved=format;
if ($I$(23).Jalview.equals$O(format)) {
var shortName=this.title;
if (shortName.indexOf$I($I$(29).separatorChar) > -1) {
shortName=shortName.substring$I(shortName.lastIndexOf$I($I$(29).separatorChar) + 1);
}this.lastSaveSuccessful=Clazz.new_($I$(30,1)).saveAlignment$jalview_gui_AlignFrame$S$S(this, file, shortName);
this.statusBar.setText$S($I$(11,"formatMessage$S$OA",["label.successfully_saved_to_file_in_format", Clazz.array(java.lang.Object, -1, [this.fileName, format])]));
return;
}var options=Clazz.new_($I$(31,1).c$$Z,[false]);
var cancelAction=((P$.AlignFrame$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.AlignFrame'].lastSaveSuccessful=false;
});
})()
), Clazz.new_(P$.AlignFrame$10.$init$,[this, null]));
var outputAction=((P$.AlignFrame$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var exportData=this.b$['jalview.gui.AlignFrame'].viewport.getAlignExportData$jalview_api_AlignExportSettingsI(this.$finals$.options);
var output=Clazz.new_($I$(32,1).c$$jalview_api_AlignmentViewPanel$jalview_api_AlignExportSettingsI,[this.b$['jalview.gui.AlignFrame'].alignPanel, this.$finals$.options]).formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$SA$IA$jalview_datamodel_HiddenColumns(this.$finals$.format, exportData.getAlignment$(), exportData.getOmitHidden$(), exportData.getStartEndPostions$(), this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().getHiddenColumns$());
if (output == null ) {
this.b$['jalview.gui.AlignFrame'].lastSaveSuccessful=false;
} else {
var doBackup=$I$(33).getEnabled$();
var backupfiles=doBackup ? Clazz.new_($I$(33,1).c$$S,[this.$finals$.file]) : null;
try {
var tempFilePath=doBackup ? backupfiles.getTempFilePath$() : this.$finals$.file;
var out=Clazz.new_([Clazz.new_($I$(35,1).c$$S,[tempFilePath])],$I$(34,1).c$$java_io_Writer);
out.print$S(output);
out.close$();
this.b$['jalview.gui.AlignFrame'].setTitle$S.apply(this.b$['jalview.gui.AlignFrame'], [this.$finals$.file]);
this.b$['jalview.gui.AlignFrame'].statusBar.setText$S($I$(11,"formatMessage$S$OA",["label.successfully_saved_to_file_in_format", Clazz.array(java.lang.Object, -1, [this.b$['jalview.gui.AlignFrame'].fileName, this.$finals$.format.getName$()])]));
this.b$['jalview.gui.AlignFrame'].lastSaveSuccessful=true;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
this.b$['jalview.gui.AlignFrame'].lastSaveSuccessful=false;
ex.printStackTrace$();
} else {
throw ex;
}
}
if (doBackup) {
backupfiles.setWriteSuccess$Z(this.b$['jalview.gui.AlignFrame'].lastSaveSuccessful);
this.b$['jalview.gui.AlignFrame'].lastSaveSuccessful=backupfiles.rollBackupsAndRenameTempFile$();
}}});
})()
), Clazz.new_(P$.AlignFrame$11.$init$,[this, {file:file,format:format,options:options}]));
if ($I$(36).isNeeded$jalview_api_AlignViewportI$jalview_io_FileFormatI(this.viewport, format)) {
var choices=Clazz.new_([this.alignPanel.getAlignViewport$(), format, options],$I$(36,1).c$$jalview_api_AlignViewportI$jalview_io_FileFormatI$jalview_api_AlignExportSettingsI);
choices.setResponseAction$O$Runnable(new Integer(0), outputAction);
choices.setResponseAction$O$Runnable(new Integer(1), cancelAction);
choices.showDialog$();
} else {
outputAction.run$();
}});

Clazz.newMeth(C$, 'outputText_actionPerformed$S', function (fileFormatName) {
var fileFormat=$I$(37).getInstance$().forName$S(fileFormatName);
var options=Clazz.new_($I$(31,1).c$$Z,[false]);
var outputAction=((P$.AlignFrame$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var exportData=this.b$['jalview.gui.AlignFrame'].viewport.getAlignExportData$jalview_api_AlignExportSettingsI(this.$finals$.options);
var cap=Clazz.new_($I$(38,1));
cap.setForInput$jalview_api_AlignmentViewPanel(null);
try {
var format=this.$finals$.fileFormat;
cap.setText$S(Clazz.new_($I$(32,1).c$$jalview_api_AlignmentViewPanel$jalview_api_AlignExportSettingsI,[this.b$['jalview.gui.AlignFrame'].alignPanel, this.$finals$.options]).formatSequences$jalview_io_FileFormatI$jalview_datamodel_AlignmentI$SA$IA$jalview_datamodel_HiddenColumns(format, exportData.getAlignment$(), exportData.getOmitHidden$(), exportData.getStartEndPostions$(), this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().getHiddenColumns$()));
$I$(8,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[cap, $I$(11,"formatMessage$S$OA",["label.alignment_output_command", Clazz.array(java.lang.Object, -1, [this.$finals$.fileFormat.getName$()])]), 600, 500]);
} catch (oom) {
if (Clazz.exceptionOf(oom,"OutOfMemoryError")){
Clazz.new_(["Outputting alignment as " + this.$finals$.fileFormat.getName$(), oom],$I$(39,1).c$$S$OutOfMemoryError);
cap.dispose$();
} else {
throw oom;
}
}
});
})()
), Clazz.new_(P$.AlignFrame$12.$init$,[this, {options:options,fileFormat:fileFormat}]));
if ($I$(36).isNeeded$jalview_api_AlignViewportI$jalview_io_FileFormatI(this.viewport, fileFormat)) {
var choices=Clazz.new_([this.alignPanel.getAlignViewport$(), fileFormat, options],$I$(36,1).c$$jalview_api_AlignViewportI$jalview_io_FileFormatI$jalview_api_AlignExportSettingsI);
choices.setResponseAction$O$Runnable(new Integer(0), outputAction);
choices.showDialog$();
} else {
outputAction.run$();
}});

Clazz.newMeth(C$, 'htmlMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var htmlSVG=Clazz.new_($I$(40,1).c$$jalview_gui_AlignmentPanel,[this.alignPanel]);
htmlSVG.exportHTML$S(null);
});

Clazz.newMeth(C$, 'bioJSMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var bjs=Clazz.new_($I$(41,1).c$$jalview_gui_AlignmentPanel,[this.alignPanel]);
bjs.exportHTML$S(null);
});

Clazz.newMeth(C$, 'createImageMap$java_io_File$S', function (file, image) {
this.alignPanel.makePNGImageMap$java_io_File$S(file, image);
});

Clazz.newMeth(C$, 'createPNG$java_io_File', function (f) {
this.alignPanel.makeAlignmentImage$jalview_util_ImageMaker_TYPE$java_io_File($I$(42).PNG, f);
});

Clazz.newMeth(C$, 'createEPS$java_io_File', function (f) {
this.alignPanel.makeAlignmentImage$jalview_util_ImageMaker_TYPE$java_io_File($I$(42).EPS, f);
});

Clazz.newMeth(C$, 'createSVG$java_io_File', function (f) {
this.alignPanel.makeAlignmentImage$jalview_util_ImageMaker_TYPE$java_io_File($I$(42).SVG, f);
});

Clazz.newMeth(C$, 'pageSetup_actionPerformed$java_awt_event_ActionEvent', function (e) {
var printJob=$I$(43).getPrinterJob$();
$I$(44).pf=printJob.pageDialog$java_awt_print_PageFormat(printJob.defaultPage$());
});

Clazz.newMeth(C$, 'printMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var thread=Clazz.new_($I$(44,1).c$$jalview_gui_AlignmentPanel,[this.alignPanel]);
thread.start$();
});

Clazz.newMeth(C$, 'exportFeatures_actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(45,1).c$$jalview_gui_AlignmentPanel,[this.alignPanel]).exportFeatures$();
});

Clazz.newMeth(C$, 'exportAnnotations_actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(45,1).c$$jalview_gui_AlignmentPanel,[this.alignPanel]).exportAnnotations$();
});

Clazz.newMeth(C$, 'associatedData_actionPerformed$java_awt_event_ActionEvent', function (e) {
var chooser=Clazz.new_([$I$(7).getProperty$S("LAST_DIRECTORY")],$I$(26,1).c$$S);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(27,1)));
var tooltip=$I$(11).getString$S("label.load_jalview_annotations");
chooser.setDialogTitle$S(tooltip);
chooser.setToolTipText$S(tooltip);
chooser.setResponseHandler$O$Runnable(new Integer(0), ((P$.AlignFrame$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var choice=this.$finals$.chooser.getSelectedFile$().getPath$();
$I$(7).setProperty$S$S("LAST_DIRECTORY", choice);
this.b$['jalview.gui.AlignFrame'].loadJalviewDataFile$O$jalview_io_DataSourceType$jalview_io_FileFormatI$jalview_datamodel_SequenceI.apply(this.b$['jalview.gui.AlignFrame'], [this.$finals$.chooser.getSelectedFile$(), null, null, null]);
});
})()
), Clazz.new_(P$.AlignFrame$13.$init$,[this, {chooser:chooser}])));
chooser.showOpenDialog$java_awt_Component(this);
});

Clazz.newMeth(C$, 'closeMenuItem_actionPerformed$Z', function (closeAllTabs) {
if (this.alignPanels != null  && this.alignPanels.size$() < 2 ) {
closeAllTabs=true;
}try {
if (this.alignPanels != null ) {
if (closeAllTabs) {
if (this.isClosed$()) {
for (var i=0; i < this.alignPanels.size$(); i++) {
var ap=this.alignPanels.get$I(i);
ap.closePanel$();
}
}} else {
this.closeView$jalview_gui_AlignmentPanel(this.alignPanel);
}}if (closeAllTabs) {
if (this.featureSettings != null  && this.featureSettings.isOpen$() ) {
this.featureSettings.close$();
this.featureSettings=null;
}this.setClosed$Z(true);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'closeView$jalview_gui_AlignmentPanel', function (panelToClose) {
var index=this.tabbedPane.getSelectedIndex$();
var closedindex=this.tabbedPane.indexOfComponent$java_awt_Component(panelToClose);
this.alignPanels.remove$O(panelToClose);
panelToClose.closePanel$();
panelToClose=null;
this.tabbedPane.removeTabAt$I(closedindex);
this.tabbedPane.validate$();
if (index > closedindex || index == this.tabbedPane.getTabCount$() ) {
index--;
}this.tabSelectionChanged$I(index);
});

Clazz.newMeth(C$, 'updateEditMenuBar$', function () {
if (this.viewport.getHistoryList$().size$() > 0) {
this.undoMenuItem.setEnabled$Z(true);
var command=this.viewport.getHistoryList$().peek$();
this.undoMenuItem.setText$S($I$(11,"formatMessage$S$OA",["label.undo_command", Clazz.array(java.lang.Object, -1, [command.getDescription$()])]));
} else {
this.undoMenuItem.setEnabled$Z(false);
this.undoMenuItem.setText$S($I$(11).getString$S("action.undo"));
}if (this.viewport.getRedoList$().size$() > 0) {
this.redoMenuItem.setEnabled$Z(true);
var command=this.viewport.getRedoList$().peek$();
this.redoMenuItem.setText$S($I$(11,"formatMessage$S$OA",["label.redo_command", Clazz.array(java.lang.Object, -1, [command.getDescription$()])]));
} else {
this.redoMenuItem.setEnabled$Z(false);
this.redoMenuItem.setText$S($I$(11).getString$S("action.redo"));
}});

Clazz.newMeth(C$, 'addHistoryItem$jalview_commands_CommandI', function (command) {
if (command.getSize$() > 0) {
this.viewport.addToHistoryList$jalview_commands_CommandI(command);
this.viewport.clearRedoList$();
this.updateEditMenuBar$();
this.viewport.updateHiddenColumns$();
}});

Clazz.newMeth(C$, 'getViewAlignments$', function () {
if (this.alignPanels != null ) {
var als=Clazz.array($I$(46), [this.alignPanels.size$()]);
var i=0;
for (var ap, $ap = this.alignPanels.iterator$(); $ap.hasNext$()&&((ap=($ap.next$())),1);) {
als[i++]=ap.av.getAlignment$();
}
return als;
}if (this.viewport != null ) {
return Clazz.array($I$(46), -1, [this.viewport.getAlignment$()]);
}return null;
});

Clazz.newMeth(C$, 'undoMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.viewport.getHistoryList$().isEmpty$()) {
return;
}var command=this.viewport.getHistoryList$().pop$();
this.viewport.addToRedoList$jalview_commands_CommandI(command);
command.undoCommand$jalview_datamodel_AlignmentIA(this.getViewAlignments$());
var originalSource=this.getOriginatingSource$jalview_commands_CommandI(command);
this.updateEditMenuBar$();
if (originalSource != null ) {
if (originalSource !== this.viewport ) {
$I$(7).log.warn$O("Implementation worry: mismatch of viewport origin for undo");
}originalSource.updateHiddenColumns$();
originalSource.firePropertyChange$S$O$O("alignment", null, originalSource.getAlignment$().getSequences$());
}});

Clazz.newMeth(C$, 'redoMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.viewport.getRedoList$().size$() < 1) {
return;
}var command=this.viewport.getRedoList$().pop$();
this.viewport.addToHistoryList$jalview_commands_CommandI(command);
command.doCommand$jalview_datamodel_AlignmentIA(this.getViewAlignments$());
var originalSource=this.getOriginatingSource$jalview_commands_CommandI(command);
this.updateEditMenuBar$();
if (originalSource != null ) {
if (originalSource !== this.viewport ) {
$I$(7).log.warn$O("Implementation worry: mismatch of viewport origin for redo");
}originalSource.updateHiddenColumns$();
originalSource.firePropertyChange$S$O$O("alignment", null, originalSource.getAlignment$().getSequences$());
}});

Clazz.newMeth(C$, 'getOriginatingSource$jalview_commands_CommandI', function (command) {
var originalSource=null;
var al=null;
if (Clazz.instanceOf(command, "jalview.commands.EditCommand")) {
var editCommand=command;
al=editCommand.getAlignment$();
var comps=$I$(17).components.get$O(this.viewport.getSequenceSetId$());
for (var comp, $comp = comps.iterator$(); $comp.hasNext$()&&((comp=($comp.next$())),1);) {
if (Clazz.instanceOf(comp, "jalview.gui.AlignmentPanel")) {
if (al === (comp).av.getAlignment$() ) {
originalSource=(comp).av;
break;
}}}
}if (originalSource == null ) {
if (al != null ) {
$I$(17,"validateSequences$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentI",[al, this.viewport.getAlignment$()]);
}originalSource=this.viewport;
}return originalSource;
});

Clazz.newMeth(C$, 'moveSelectedSequences$Z', function (up) {
var sg=this.viewport.getSelectionGroup$();
if (sg == null ) {
return;
}this.viewport.getAlignment$().moveSelectedSequencesByOne$jalview_datamodel_SequenceGroup$java_util_Map$Z(sg, this.viewport.getHiddenRepSequences$(), up);
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'slideSequences$Z$I', function (right, size) {
var sg=Clazz.new_($I$(1,1));
if (this.viewport.cursorMode) {
sg.add$O(this.viewport.getAlignment$().getSequenceAt$I(this.alignPanel.getSeqPanel$().seqCanvas.cursorY));
} else if (this.viewport.getSelectionGroup$() != null  && this.viewport.getSelectionGroup$().getSize$() != this.viewport.getAlignment$().getHeight$() ) {
sg=this.viewport.getSelectionGroup$().getSequences$java_util_Map(this.viewport.getHiddenRepSequences$());
}if (sg.size$() < 1) {
return;
}var invertGroup=Clazz.new_($I$(1,1));
for (var seq, $seq = this.viewport.getAlignment$().getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
if (!sg.contains$O(seq)) {
invertGroup.add$O(seq);
}}
var seqs1=sg.toArray$OA(Clazz.array($I$(47), [0]));
var seqs2=Clazz.array($I$(47), [invertGroup.size$()]);
for (var i=0; i < invertGroup.size$(); i++) {
seqs2[i]=invertGroup.get$I(i);
}
var ssc;
if (right) {
ssc=Clazz.new_(["Slide Sequences", seqs2, seqs1, size, this.viewport.getGapCharacter$()],$I$(48,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceIA$I$C);
} else {
ssc=Clazz.new_(["Slide Sequences", seqs1, seqs2, size, this.viewport.getGapCharacter$()],$I$(48,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_SequenceIA$I$C);
}var groupAdjustment=0;
if (ssc.getGapsInsertedBegin$() && right ) {
if (this.viewport.cursorMode) {
this.alignPanel.getSeqPanel$().moveCursor$I$I(size, 0);
} else {
groupAdjustment=size;
}} else if (!ssc.getGapsInsertedBegin$() && !right ) {
if (this.viewport.cursorMode) {
this.alignPanel.getSeqPanel$().moveCursor$I$I(-size, 0);
} else {
groupAdjustment=-size;
}}if (groupAdjustment != 0) {
this.viewport.getSelectionGroup$().setStartRes$I(this.viewport.getSelectionGroup$().getStartRes$() + groupAdjustment);
this.viewport.getSelectionGroup$().setEndRes$I(this.viewport.getSelectionGroup$().getEndRes$() + groupAdjustment);
}var appendHistoryItem=false;
var historyList=this.viewport.getHistoryList$();
var inSplitFrame=this.getSplitViewContainer$() != null ;
if (!inSplitFrame && historyList != null   && historyList.size$() > 0  && Clazz.instanceOf(historyList.peek$(), "jalview.commands.SlideSequencesCommand") ) {
appendHistoryItem=ssc.appendSlideCommand$jalview_commands_SlideSequencesCommand(historyList.peek$());
}if (!appendHistoryItem) {
this.addHistoryItem$jalview_commands_CommandI(ssc);
}this.repaint$();
});

Clazz.newMeth(C$, 'copy_actionPerformed$', function () {
if (this.viewport.getSelectionGroup$() == null ) {
return;
}var seqs=this.viewport.getSelectionAsNewSequence$();
var omitHidden=null;
if (this.viewport.hasHiddenColumns$()) {
omitHidden=this.viewport.getViewAsString$Z(true);
}var output=Clazz.new_($I$(32,1)).formatSequences$jalview_io_FileFormatI$jalview_datamodel_SequenceIA$SA$IA($I$(23).Fasta, seqs, omitHidden, null);
var ss=Clazz.new_($I$(49,1).c$$S,[output]);
try {
$I$(8).internalCopy=true;
$I$(50).getDefaultToolkit$().getSystemClipboard$().setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(Clazz.new_($I$(49,1).c$$S,[""]), null);
$I$(50).getDefaultToolkit$().getSystemClipboard$().setContents$java_awt_datatransfer_Transferable$java_awt_datatransfer_ClipboardOwner(ss, $I$(8).instance);
} catch (er) {
if (Clazz.exceptionOf(er,"OutOfMemoryError")){
Clazz.new_($I$(39,1).c$$S$OutOfMemoryError,["copying region", er]);
return;
} else {
throw er;
}
}
var hiddenColumns=null;
if (this.viewport.hasHiddenColumns$()) {
var hiddenOffset=this.viewport.getSelectionGroup$().getStartRes$();
var hiddenCutoff=this.viewport.getSelectionGroup$().getEndRes$();
hiddenColumns=Clazz.new_([this.viewport.getAlignment$().getHiddenColumns$(), hiddenOffset, hiddenCutoff, hiddenOffset],$I$(51,1).c$$jalview_datamodel_HiddenColumns$I$I$I);
}$I$(8).jalviewClipboard=Clazz.array(java.lang.Object, -1, [seqs, this.viewport.getAlignment$().getDataset$(), hiddenColumns]);
this.setStatus$S($I$(11,"formatMessage$S$OA",["label.copied_sequences_to_clipboard", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(seqs.length).toString()])]));
});

Clazz.newMeth(C$, 'pasteNew_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.paste$Z(true);
});

Clazz.newMeth(C$, 'pasteThis_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.paste$Z(false);
});

Clazz.newMeth(C$, 'paste$Z', function (newAlignment) {
var externalPaste=true;
try {
var c=$I$(50).getDefaultToolkit$().getSystemClipboard$();
var contents=c.getContents$O(this);
if (contents == null ) {
return;
}var str;
var format;
try {
str=contents.getTransferData$java_awt_datatransfer_DataFlavor($I$(52).stringFlavor);
if (str.length$() < 1) {
return;
}format=Clazz.new_($I$(53,1)).identify$S$jalview_io_DataSourceType(str, $I$(25).PASTE);
} catch (er) {
if (Clazz.exceptionOf(er,"OutOfMemoryError")){
Clazz.new_($I$(39,1).c$$S$OutOfMemoryError,["Out of memory pasting sequences!!", er]);
return;
} else {
throw er;
}
}
var sequences;
var annotationAdded=false;
var alignment=null;
if ($I$(8).jalviewClipboard != null ) {
var newseq=$I$(8).jalviewClipboard[0];
sequences=Clazz.array($I$(47), [newseq.length]);
for (var i=0; i < newseq.length; i++) {
sequences[i]=Clazz.new_($I$(54,1).c$$jalview_datamodel_SequenceI,[newseq[i]]);
}
alignment=Clazz.new_($I$(55,1).c$$jalview_datamodel_SequenceIA,[sequences]);
externalPaste=false;
} else {
alignment=Clazz.new_($I$(32,1)).readFile$S$jalview_io_DataSourceType$jalview_io_FileFormatI(str, $I$(25).PASTE, format);
sequences=alignment.getSequencesArray$();
}var alwidth=0;
var newGraphGroups=Clazz.new_($I$(1,1));
var fgroup=-1;
if (newAlignment) {
if ($I$(8).jalviewClipboard != null ) {
alignment.setDataset$jalview_datamodel_AlignmentI($I$(8).jalviewClipboard[1]);
} else {
alignment.setDataset$jalview_datamodel_AlignmentI(null);
}alwidth=alignment.getWidth$() + 1;
} else {
var pastedal=alignment;
alignment=this.viewport.getAlignment$();
alwidth=alignment.getWidth$() + 1;
var importDs=$I$(8).jalviewClipboard != null  && $I$(8).jalviewClipboard[1] !== alignment.getDataset$()  ;
var newDs=(importDs) ? Clazz.new_($I$(56,1)) : null;
for (var i=0; i < sequences.length; i++) {
if (importDs) {
newDs.addElement$O(null);
}var ds=sequences[i].getDatasetSequence$();
if (importDs && ds != null  ) {
if (!newDs.contains$O(ds)) {
newDs.setElementAt$O$I(ds, i);
ds=Clazz.new_($I$(54,1).c$$jalview_datamodel_SequenceI,[ds]);
sequences[i].setDatasetSequence$jalview_datamodel_SequenceI(ds);
} else {
ds=sequences[newDs.indexOf$O(ds)].getDatasetSequence$();
}} else {
sequences[i]=sequences[i].deriveSequence$();
alignment.getDataset$().addSequence$jalview_datamodel_SequenceI(sequences[i].getDatasetSequence$());
}alignment.addSequence$jalview_datamodel_SequenceI(sequences[i]);
}
if (newDs != null ) {
newDs.clear$();
}if (alignment.getAlignmentAnnotation$() != null ) {
for (var alan, $alan = 0, $$alan = alignment.getAlignmentAnnotation$(); $alan<$$alan.length&&((alan=($$alan[$alan])),1);$alan++) {
if (alan.graphGroup > fgroup) {
fgroup=alan.graphGroup;
}}
}if (pastedal.getAlignmentAnnotation$() != null ) {
var alann=pastedal.getAlignmentAnnotation$();
for (var i=0; i < alann.length; i++) {
annotationAdded=true;
if (alann[i].sequenceRef == null  && !alann[i].autoCalculated ) {
var newann=Clazz.new_($I$(57,1).c$$jalview_datamodel_AlignmentAnnotation,[alann[i]]);
if (newann.graphGroup > -1) {
if (newGraphGroups.size$() <= newann.graphGroup || newGraphGroups.get$I(newann.graphGroup) == null  ) {
for (var q=newGraphGroups.size$(); q <= newann.graphGroup; q++) {
newGraphGroups.add$I$O(q, null);
}
newGraphGroups.set$I$O(newann.graphGroup, Integer.valueOf$I(++fgroup));
}newann.graphGroup=newGraphGroups.get$I(newann.graphGroup).intValue$();
}newann.padAnnotation$I(alwidth);
alignment.addAnnotation$jalview_datamodel_AlignmentAnnotation(newann);
}}
}}if (!newAlignment) {
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_([$I$(11).getString$S("label.add_sequences"), $I$(59).PASTE, sequences, 0, alignment.getWidth$(), alignment],$I$(58,1).c$$S$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI));
}for (var i=0; i < sequences.length; i++) {
if (sequences[i].getAnnotation$() != null ) {
var newann;
for (var a=0; a < sequences[i].getAnnotation$().length; a++) {
annotationAdded=true;
newann=sequences[i].getAnnotation$()[a];
newann.adjustForAlignment$();
newann.padAnnotation$I(alwidth);
if (newann.graphGroup > -1) {
if (newann.graphGroup > -1) {
if (newGraphGroups.size$() <= newann.graphGroup || newGraphGroups.get$I(newann.graphGroup) == null  ) {
for (var q=newGraphGroups.size$(); q <= newann.graphGroup; q++) {
newGraphGroups.add$I$O(q, null);
}
newGraphGroups.set$I$O(newann.graphGroup, Integer.valueOf$I(++fgroup));
}newann.graphGroup=newGraphGroups.get$I(newann.graphGroup).intValue$();
}}alignment.addAnnotation$jalview_datamodel_AlignmentAnnotation(sequences[i].getAnnotation$()[a]);
alignment.setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(sequences[i].getAnnotation$()[a], a);
}
}}
if (!newAlignment) {
this.viewport.getRanges$().setEndSeq$I(alignment.getHeight$() - 1);
if (annotationAdded) {
var alview=this.getViewAlignments$();
for (var i=0; i < sequences.length; i++) {
var sann=sequences[i].getAnnotation$();
if (sann == null ) {
continue;
}for (var avnum=0; avnum < alview.length; avnum++) {
if (alview[avnum] !== alignment ) {
var avwidth=alview[avnum].getWidth$() + 1;
for (var a=0; a < sann.length; a++) {
var newann=Clazz.new_($I$(57,1).c$$jalview_datamodel_AlignmentAnnotation,[sann[a]]);
sequences[i].addAlignmentAnnotation$jalview_datamodel_AlignmentAnnotation(newann);
newann.padAnnotation$I(avwidth);
alview[avnum].addAnnotation$jalview_datamodel_AlignmentAnnotation(newann);
alview[avnum].setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I(newann, a);
}
}}
}
this.buildSortByAnnotationScoresMenu$();
}this.viewport.firePropertyChange$S$O$O("alignment", null, alignment.getSequences$());
if (this.alignPanels != null ) {
for (var ap, $ap = this.alignPanels.iterator$(); $ap.hasNext$()&&((ap=($ap.next$())),1);) {
ap.validateAnnotationDimensions$Z(false);
}
} else {
this.alignPanel.validateAnnotationDimensions$Z(false);
}} else {
var af=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$I$I,[alignment, 700, 500]);
var newtitle= String.instantialize("Copied sequences");
if ($I$(8).jalviewClipboard != null  && $I$(8).jalviewClipboard[2] != null  ) {
var hc=$I$(8).jalviewClipboard[2];
af.viewport.setHiddenColumns$jalview_datamodel_HiddenColumns(hc);
}af.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$().transferSettings$jalview_api_FeatureRenderer(this.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$());
if (!externalPaste) {
if (this.title.startsWith$S("Copied sequences")) {
newtitle=this.title;
} else {
newtitle=newtitle.concat$S("- from " + this.title);
}} else {
newtitle= String.instantialize("Pasted sequences");
}$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, newtitle, 700, 500);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
System.out.println$S("Exception whilst pasting: " + ex);
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'expand_newalign$java_awt_event_ActionEvent', function (e) {
try {
var alignment=$I$(60,"expandContext$jalview_datamodel_AlignmentI$I",[this.getViewport$().getAlignment$(), -1]);
var af=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$I$I,[alignment, 700, 500]);
var newtitle= String.instantialize("Flanking alignment");
if ($I$(8).jalviewClipboard != null  && $I$(8).jalviewClipboard[2] != null  ) {
var hc=$I$(8).jalviewClipboard[2];
af.viewport.setHiddenColumns$jalview_datamodel_HiddenColumns(hc);
}af.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$().transferSettings$jalview_api_FeatureRenderer(this.alignPanel.getSeqPanel$().seqCanvas.getFeatureRenderer$());
{
if (this.title.startsWith$S("Copied sequences")) {
newtitle=this.title;
} else {
newtitle=newtitle.concat$S("- from " + this.title);
}}$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, newtitle, 700, 500);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
ex.printStackTrace$();
System.out.println$S("Exception whilst pasting: " + ex);
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oom = e$$;
{
Clazz.new_($I$(39,1).c$$S$OutOfMemoryError,["Viewing flanking region of alignment", oom]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'cut_actionPerformed$', function () {
this.copy_actionPerformed$();
this.delete_actionPerformed$();
});

Clazz.newMeth(C$, 'delete_actionPerformed$', function () {
var sg=this.viewport.getSelectionGroup$();
if (sg == null ) {
return;
}var okAction=((P$.AlignFrame$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var cut=this.$finals$.sg.getSequences$().toArray$OA(Clazz.array($I$(47), [this.$finals$.sg.getSize$()]));
this.b$['jalview.gui.AlignFrame'].addHistoryItem$jalview_commands_CommandI.apply(this.b$['jalview.gui.AlignFrame'], [Clazz.new_([$I$(11).getString$S("label.cut_sequences"), $I$(59).CUT, cut, this.$finals$.sg.getStartRes$(), this.$finals$.sg.getEndRes$() - this.$finals$.sg.getStartRes$() + 1, this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$()],$I$(58,1).c$$S$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI)]);
this.b$['jalview.gui.AlignFrame'].viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.b$['jalview.gui.AlignFrame'].viewport.sendSelection$();
this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().deleteGroup$jalview_datamodel_SequenceGroup(this.$finals$.sg);
this.b$['jalview.gui.AlignFrame'].viewport.firePropertyChange$S$O$O("alignment", null, this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().getSequences$());
if (this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().getHeight$() < 1) {
try {
this.b$['jalview.gui.AlignFrame'].setClosed$Z.apply(this.b$['jalview.gui.AlignFrame'], [true]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
}});
})()
), Clazz.new_(P$.AlignFrame$14.$init$,[this, {sg:sg}]));
var wholeHeight=sg.getSize$() == this.viewport.getAlignment$().getHeight$();
var wholeWidth=(((sg.getEndRes$() - sg.getStartRes$()) + 1) == this.viewport.getAlignment$().getWidth$()) ? true : false;
if (wholeHeight && wholeWidth ) {
var dialog=$I$(28,"newOptionDialog$java_awt_Component",[$I$(8).desktop]);
dialog.setResponseHandler$O$Runnable(new Integer(0), okAction);
var options=Clazz.array(java.lang.Object, -1, [$I$(11).getString$S("action.ok"), $I$(11).getString$S("action.cancel")]);
dialog.showDialog$S$S$I$I$javax_swing_Icon$OA$O($I$(11).getString$S("warn.delete_all"), $I$(11).getString$S("label.delete_all"), -1, -1, null, options, options[0]);
} else {
okAction.run$();
}});

Clazz.newMeth(C$, 'deleteGroups_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.avc.deleteGroups$()) {
$I$(17,"Refresh$java_awt_Component$S",[this, this.viewport.getSequenceSetId$()]);
this.alignPanel.updateAnnotation$();
this.alignPanel.paintAlignment$Z$Z(true, true);
}});

Clazz.newMeth(C$, 'selectAllSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var sg=Clazz.new_([this.viewport.getAlignment$().getSequences$()],$I$(61,1).c$$java_util_List);
sg.setEndRes$I(this.viewport.getAlignment$().getWidth$() - 1);
this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
this.viewport.isSelectionGroupChanged$Z(true);
this.viewport.sendSelection$();
this.alignPanel.paintAlignment$Z$Z(false, false);
$I$(17,"Refresh$java_awt_Component$S",[this.alignPanel, this.viewport.getSequenceSetId$()]);
});

Clazz.newMeth(C$, 'deselectAllSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.viewport.cursorMode) {
this.alignPanel.getSeqPanel$().keyboardNo1=null;
this.alignPanel.getSeqPanel$().keyboardNo2=null;
}this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.viewport.getColumnSelection$().clear$();
this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(null);
this.alignPanel.getIdPanel$().getIdCanvas$().searchResults=null;
this.alignPanel.paintAlignment$Z$Z(false, false);
$I$(17,"Refresh$java_awt_Component$S",[this.alignPanel, this.viewport.getSequenceSetId$()]);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'invertSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var sg=this.viewport.getSelectionGroup$();
if (sg == null ) {
this.selectAllSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent(null);
return;
}for (var i=0; i < this.viewport.getAlignment$().getSequences$().size$(); i++) {
sg.addOrRemove$jalview_datamodel_SequenceI$Z(this.viewport.getAlignment$().getSequenceAt$I(i), false);
}
this.alignPanel.paintAlignment$Z$Z(true, false);
$I$(17,"Refresh$java_awt_Component$S",[this.alignPanel, this.viewport.getSequenceSetId$()]);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'invertColSel_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.invertColumnSelection$();
this.alignPanel.paintAlignment$Z$Z(true, false);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'remove2LeftMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.trimAlignment$Z(true);
});

Clazz.newMeth(C$, 'remove2RightMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.trimAlignment$Z(false);
});

Clazz.newMeth(C$, 'trimAlignment$Z', function (trimLeft) {
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
seqs=this.viewport.getAlignment$().getSequencesArray$();
}var trimRegion;
if (trimLeft) {
trimRegion=Clazz.new_(["Remove Left", true, seqs, column, this.viewport.getAlignment$()],$I$(62,1).c$$S$Z$jalview_datamodel_SequenceIA$I$jalview_datamodel_AlignmentI);
this.viewport.getRanges$().setStartRes$I(0);
} else {
trimRegion=Clazz.new_(["Remove Right", false, seqs, column, this.viewport.getAlignment$()],$I$(62,1).c$$S$Z$jalview_datamodel_SequenceIA$I$jalview_datamodel_AlignmentI);
}this.setStatus$S($I$(11,"formatMessage$S$SA",["label.removed_columns", Clazz.array(String, -1, [Integer.valueOf$I(trimRegion.getSize$()).toString()])]));
this.addHistoryItem$jalview_commands_CommandI(trimRegion);
for (var sg, $sg = this.viewport.getAlignment$().getGroups$().iterator$(); $sg.hasNext$()&&((sg=($sg.next$())),1);) {
if ((trimLeft && !sg.adjustForRemoveLeft$I(column) ) || (!trimLeft && !sg.adjustForRemoveRight$I(column) ) ) {
this.viewport.getAlignment$().deleteGroup$jalview_datamodel_SequenceGroup(sg);
}}
this.viewport.firePropertyChange$S$O$O("alignment", null, this.viewport.getAlignment$().getSequences$());
}});

Clazz.newMeth(C$, 'removeGappedColumnMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var start=0;
var end=this.viewport.getAlignment$().getWidth$() - 1;
var seqs;
if (this.viewport.getSelectionGroup$() != null ) {
seqs=this.viewport.getSelectionGroup$().getSequencesAsArray$java_util_Map(this.viewport.getHiddenRepSequences$());
start=this.viewport.getSelectionGroup$().getStartRes$();
end=this.viewport.getSelectionGroup$().getEndRes$();
} else {
seqs=this.viewport.getAlignment$().getSequencesArray$();
}var removeGapCols=Clazz.new_(["Remove Gapped Columns", seqs, start, end, this.viewport.getAlignment$()],$I$(63,1).c$$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI);
this.addHistoryItem$jalview_commands_CommandI(removeGapCols);
this.setStatus$S($I$(11,"formatMessage$S$OA",["label.removed_empty_columns", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(removeGapCols.getSize$()).toString()])]));
var seq=this.viewport.getAlignment$().getSequenceAt$I(0);
var ranges=this.viewport.getRanges$();
var startRes=seq.findPosition$I(ranges.getStartRes$());
ranges.setStartRes$I(seq.findIndex$I(startRes) - 1);
this.viewport.firePropertyChange$S$O$O("alignment", null, this.viewport.getAlignment$().getSequences$());
});

Clazz.newMeth(C$, 'removeAllGapsMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var start=0;
var end=this.viewport.getAlignment$().getWidth$() - 1;
var seqs;
if (this.viewport.getSelectionGroup$() != null ) {
seqs=this.viewport.getSelectionGroup$().getSequencesAsArray$java_util_Map(this.viewport.getHiddenRepSequences$());
start=this.viewport.getSelectionGroup$().getStartRes$();
end=this.viewport.getSelectionGroup$().getEndRes$();
} else {
seqs=this.viewport.getAlignment$().getSequencesArray$();
}var seq=this.viewport.getAlignment$().getSequenceAt$I(0);
var startRes=seq.findPosition$I(this.viewport.getRanges$().getStartRes$());
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_(["Remove Gaps", seqs, start, end, this.viewport.getAlignment$()],$I$(64,1).c$$S$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI));
this.viewport.getRanges$().setStartRes$I(seq.findIndex$I(startRes) - 1);
this.viewport.firePropertyChange$S$O$O("alignment", null, this.viewport.getAlignment$().getSequences$());
});

Clazz.newMeth(C$, 'padGapsMenuitem_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setPadGaps$Z(this.padGapsMenuitem.isSelected$());
this.viewport.firePropertyChange$S$O$O("alignment", null, this.viewport.getAlignment$().getSequences$());
});

Clazz.newMeth(C$, 'findMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(65,1));
});

Clazz.newMeth(C$, 'newView_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.newView$S$Z(null, true);
});

Clazz.newMeth(C$, 'newView$S$Z', function (viewTitle, copyAnnotation) {
var newap=Clazz.new_($I$(30,1)).copyAlignPanel$jalview_gui_AlignmentPanel(this.alignPanel);
if (!copyAnnotation) {
newap.av.getAlignment$().deleteAllGroups$();
newap.av.getAlignment$().deleteAllAnnotations$Z(false);
}newap.av.setGatherViewsHere$Z(false);
if (this.viewport.getViewName$() == null ) {
this.viewport.setViewName$S($I$(11).getString$S("label.view_name_original"));
}newap.av.setHistoryList$java_util_Deque(this.viewport.getHistoryList$());
newap.av.setRedoList$java_util_Deque(this.viewport.getRedoList$());
newap.av.setColourAppliesToAllGroups$Z(this.viewport.getColourAppliesToAllGroups$());
newap.av.replaceMappings$jalview_datamodel_AlignmentI(this.viewport.getAlignment$());
if (newap.av.initComplementConsensus$()) {
newap.refresh$Z(true);
}newap.av.setViewName$S(this.getNewViewName$S(viewTitle));
this.addAlignmentPanel$jalview_gui_AlignmentPanel$Z(newap, true);
newap.alignmentChanged$();
if (this.alignPanels.size$() == 2) {
this.viewport.setGatherViewsHere$Z(true);
}this.tabbedPane.setSelectedIndex$I(this.tabbedPane.getTabCount$() - 1);
return newap;
});

Clazz.newMeth(C$, 'getNewViewName$S', function (viewTitle) {
var index=$I$(8,"getViewCount$S",[this.viewport.getSequenceSetId$()]);
var addFirstIndex=false;
if (viewTitle == null  || viewTitle.trim$().length$() == 0 ) {
viewTitle=$I$(11).getString$S("action.view");
addFirstIndex=true;
} else {
index=1;
}var newViewName=viewTitle + ((addFirstIndex) ? " " + index : "");
var comps=$I$(17).components.get$O(this.viewport.getSequenceSetId$());
var existingNames=this.getExistingViewNames$java_util_List(comps);
while (existingNames.contains$O(newViewName)){
newViewName=viewTitle + " " + (++index) ;
}
return newViewName;
});

Clazz.newMeth(C$, 'getExistingViewNames$java_util_List', function (comps) {
var existingNames=Clazz.new_($I$(1,1));
for (var comp, $comp = comps.iterator$(); $comp.hasNext$()&&((comp=($comp.next$())),1);) {
if (Clazz.instanceOf(comp, "jalview.gui.AlignmentPanel")) {
var ap=comp;
if (!existingNames.contains$O(ap.av.getViewName$())) {
existingNames.add$O(ap.av.getViewName$());
}}}
return existingNames;
});

Clazz.newMeth(C$, 'expandViews_actionPerformed$java_awt_event_ActionEvent', function (e) {
$I$(8).explodeViews$jalview_gui_AlignFrame(this);
});

Clazz.newMeth(C$, 'gatherViews_actionPerformed$java_awt_event_ActionEvent', function (e) {
$I$(8).instance.gatherViews$jalview_gui_AlignFrame(this);
});

Clazz.newMeth(C$, 'font_actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(66,1).c$$jalview_gui_AlignmentPanel,[this.alignPanel]);
});

Clazz.newMeth(C$, 'seqLimit_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowJVSuffix$Z(this.seqLimits.isSelected$());
this.alignPanel.getIdPanel$().getIdCanvas$().setPreferredSize$java_awt_Dimension(this.alignPanel.calculateIdWidth$());
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'idRightAlign_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setRightAlignIds$Z(this.idRightAlign.isSelected$());
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'centreColumnLabels_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setCentreColumnLabels$Z(this.centreColumnLabelsMenuItem.getState$());
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'followHighlight_actionPerformed$', function () {
var state=this.followHighlightMenuItem.getState$();
this.viewport.setFollowHighlight$Z(state);
if (state) {
this.alignPanel.scrollToPosition$jalview_datamodel_SearchResultsI(this.viewport.getSearchResults$());
}});

Clazz.newMeth(C$, 'colourTextMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setColourText$Z(this.colourTextMenuItem.isSelected$());
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'wrapMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.scaleAbove.setVisible$Z(this.wrapMenuItem.isSelected$());
this.scaleLeft.setVisible$Z(this.wrapMenuItem.isSelected$());
this.scaleRight.setVisible$Z(this.wrapMenuItem.isSelected$());
this.viewport.setWrapAlignment$Z(this.wrapMenuItem.isSelected$());
this.alignPanel.updateLayout$();
});

Clazz.newMeth(C$, 'showAllSeqs_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.showAllHiddenSeqs$();
});

Clazz.newMeth(C$, 'showAllColumns_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.showAllHiddenColumns$();
this.alignPanel.paintAlignment$Z$Z(true, true);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'hideSelSequences_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.hideAllSelectedSeqs$();
});

Clazz.newMeth(C$, 'toggleHiddenRegions$Z$Z', function (toggleSeqs, toggleCols) {
var hide=false;
var sg=this.viewport.getSelectionGroup$();
if (!toggleSeqs && !toggleCols ) {
if (this.viewport.hasSelectedColumns$() || (sg != null  && sg.getSize$() > 0  && sg.getStartRes$() <= sg.getEndRes$() ) ) {
if (sg != null ) {
this.invertSequenceMenuItem_actionPerformed$java_awt_event_ActionEvent(null);
sg=this.viewport.getSelectionGroup$();
toggleSeqs=true;
}this.viewport.expandColSelection$jalview_datamodel_SequenceGroup$Z(sg, true);
this.invertColSel_actionPerformed$java_awt_event_ActionEvent(null);
toggleCols=true;
}}if (toggleSeqs) {
if (sg != null  && sg.getSize$() != this.viewport.getAlignment$().getHeight$() ) {
this.hideSelSequences_actionPerformed$java_awt_event_ActionEvent(null);
hide=true;
} else if (!(toggleCols && this.viewport.hasSelectedColumns$() )) {
this.showAllSeqs_actionPerformed$java_awt_event_ActionEvent(null);
}}if (toggleCols) {
if (this.viewport.hasSelectedColumns$()) {
this.hideSelColumns_actionPerformed$java_awt_event_ActionEvent(null);
if (!toggleSeqs) {
this.viewport.setSelectionGroup$jalview_datamodel_SequenceGroup(sg);
}} else if (!hide) {
this.showAllColumns_actionPerformed$java_awt_event_ActionEvent(null);
}}});

Clazz.newMeth(C$, 'hideAllButSelection_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.toggleHiddenRegions$Z$Z(false, false);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'hideAllSelection_actionPerformed$java_awt_event_ActionEvent', function (e) {
var sg=this.viewport.getSelectionGroup$();
this.viewport.expandColSelection$jalview_datamodel_SequenceGroup$Z(sg, false);
this.viewport.hideAllSelectedSeqs$();
this.viewport.hideSelectedColumns$();
this.alignPanel.updateLayout$();
this.alignPanel.paintAlignment$Z$Z(true, true);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'showAllhidden_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.showAllHiddenColumns$();
this.viewport.showAllHiddenSeqs$();
this.alignPanel.paintAlignment$Z$Z(true, true);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'hideSelColumns_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.hideSelectedColumns$();
this.alignPanel.updateLayout$();
this.alignPanel.paintAlignment$Z$Z(true, true);
this.viewport.sendSelection$();
});

Clazz.newMeth(C$, 'hiddenMarkers_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowHiddenMarkers$Z(this.hiddenMarkers.isSelected$());
this.repaint$();
});

Clazz.newMeth(C$, 'scaleAbove_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setScaleAboveWrapped$Z(this.scaleAbove.isSelected$());
this.alignPanel.updateLayout$();
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'scaleLeft_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setScaleLeftWrapped$Z(this.scaleLeft.isSelected$());
this.alignPanel.updateLayout$();
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'scaleRight_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setScaleRightWrapped$Z(this.scaleRight.isSelected$());
this.alignPanel.updateLayout$();
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'viewBoxesMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowBoxes$Z(this.viewBoxesMenuItem.isSelected$());
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'viewTextMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowText$Z(this.viewTextMenuItem.isSelected$());
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'renderGapsMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setRenderGaps$Z(this.renderGapsMenuItem.isSelected$());
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'getFeatureSettingsUI$', function () {
return this.featureSettings;
});

Clazz.newMeth(C$, 'featureSettings_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.showFeatureSettingsUI$();
});

Clazz.newMeth(C$, 'showFeatureSettingsUI$', function () {
if (this.featureSettings != null ) {
this.featureSettings.closeOldSettings$();
this.featureSettings=null;
}if (!this.showSeqFeatures.isSelected$()) {
this.showSeqFeatures.setSelected$Z(true);
this.showSeqFeatures_actionPerformed$java_awt_event_ActionEvent(null);
}this.featureSettings=Clazz.new_($I$(67,1).c$$jalview_gui_AlignFrame,[this]);
return this.featureSettings;
});

Clazz.newMeth(C$, 'showSeqFeatures_actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.viewport.setShowSequenceFeatures$Z(this.showSeqFeatures.isSelected$());
this.alignPanel.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'annotationPanelMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var setVisible=this.annotationPanelMenuItem.isSelected$();
this.viewport.setShowAnnotation$Z(setVisible);
this.showAllSeqAnnotations.setEnabled$Z(setVisible);
this.hideAllSeqAnnotations.setEnabled$Z(setVisible);
this.showAllAlAnnotations.setEnabled$Z(setVisible);
this.hideAllAlAnnotations.setEnabled$Z(setVisible);
this.alignPanel.updateLayout$();
});

Clazz.newMeth(C$, 'alignmentProperties$', function () {
var pane;
var contents=Clazz.new_([this.viewport.getAlignment$()],$I$(68,1).c$$jalview_datamodel_AlignmentI).formatAsHtml$();
var content=$I$(11,"formatMessage$S$OA",["label.html_content", Clazz.array(java.lang.Object, -1, [contents.toString()])]);
contents=null;
if ($I$(10).isJS$()) {
var textLabel=Clazz.new_($I$(69,1));
textLabel.setText$S(content);
textLabel.setBackground$java_awt_Color($I$(70).WHITE);
pane=Clazz.new_([Clazz.new_($I$(72,1))],$I$(71,1).c$$java_awt_LayoutManager);
(pane).setOpaque$Z(true);
pane.setBackground$java_awt_Color($I$(70).WHITE);
(pane).add$java_awt_Component$O(textLabel, "North");
} else 
{}
var frame=Clazz.new_($I$(73,1));
frame.getContentPane$().add$java_awt_Component(Clazz.new_($I$(74,1).c$$java_awt_Component,[pane]));
$I$(8,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[frame, $I$(11,"formatMessage$S$OA",["label.alignment_properties", Clazz.array(java.lang.Object, -1, [this.getTitle$()])]), 500, 400]);
});

Clazz.newMeth(C$, 'overviewMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.alignPanel.overviewPanel != null ) {
return;
}var frame=Clazz.new_($I$(73,1));
var overview=Clazz.new_($I$(75,1).c$$jalview_gui_AlignmentPanel,[this.alignPanel]);
frame.setContentPane$java_awt_Container(overview);
$I$(8,"addInternalFrame$javax_swing_JInternalFrame$S$Z$I$I$Z$Z",[frame, $I$(11,"formatMessage$S$OA",["label.overview_params", Clazz.array(java.lang.Object, -1, [this.getTitle$()])]), true, frame.getWidth$(), frame.getHeight$(), true, true]);
frame.pack$();
frame.setLayer$Integer($I$(76).PALETTE_LAYER);
frame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.AlignFrame$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (evt) {
this.$finals$.overview.dispose$();
this.b$['jalview.gui.AlignFrame'].alignPanel.setOverviewPanel$jalview_gui_OverviewPanel(null);
});
})()
), Clazz.new_($I$(19,1),[this, {overview:overview}],P$.AlignFrame$15)));
if (this.getKeyListeners$().length > 0) {
frame.addKeyListener$java_awt_event_KeyListener(this.getKeyListeners$()[0]);
}this.alignPanel.setOverviewPanel$jalview_gui_OverviewPanel(overview);
});

Clazz.newMeth(C$, 'textColour_actionPerformed$', function () {
Clazz.new_($I$(77,1)).chooseColour$jalview_gui_AlignmentPanel$jalview_datamodel_SequenceGroup(this.alignPanel, null);
});

Clazz.newMeth(C$, 'annotationColour_actionPerformed$', function () {
Clazz.new_($I$(78,1).c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel,[this.viewport, this.alignPanel]);
});

Clazz.newMeth(C$, 'annotationColumn_actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(79,1).c$$jalview_gui_AlignViewport$jalview_gui_AlignmentPanel,[this.viewport, this.alignPanel]);
});

Clazz.newMeth(C$, 'applyToAllGroups_actionPerformed$Z', function (selected) {
this.viewport.setColourAppliesToAllGroups$Z(selected);
});

Clazz.newMeth(C$, 'changeColour_actionPerformed$S', function (name) {
if ("*User Defined*".equals$O(name)) {
Clazz.new_($I$(80,1).c$$jalview_gui_AlignmentPanel,[this.alignPanel]);
return;
}var cs=$I$(81).getInstance$().getColourScheme$S$jalview_api_AlignViewportI$jalview_datamodel_AnnotatedCollectionI$java_util_Map(name, this.viewport, this.viewport.getAlignment$(), this.viewport.getHiddenRepSequences$());
this.changeColour$jalview_schemes_ColourSchemeI(cs);
});

Clazz.newMeth(C$, 'changeColour$jalview_schemes_ColourSchemeI', function (cs) {
$I$(21).setColourSelected$javax_swing_JMenu$jalview_schemes_ColourSchemeI(this.colourMenu, cs);
this.viewport.setGlobalColourScheme$jalview_schemes_ColourSchemeI(cs);
this.alignPanel.paintAlignment$Z$Z(true, true);
});

Clazz.newMeth(C$, 'modifyPID_actionPerformed$', function () {
$I$(82,"setPIDSliderSource$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.alignPanel, this.viewport.getResidueShading$(), this.alignPanel.getViewName$()]);
$I$(82).showPIDSlider$();
});

Clazz.newMeth(C$, 'modifyConservation_actionPerformed$', function () {
$I$(82,"setConservationSlider$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.alignPanel, this.viewport.getResidueShading$(), this.alignPanel.getViewName$()]);
$I$(82).showConservationSlider$();
});

Clazz.newMeth(C$, 'conservationMenuItem_actionPerformed$Z', function (selected) {
this.modifyConservation.setEnabled$Z(selected);
this.viewport.setConservationSelected$Z(selected);
this.viewport.getResidueShading$().setConservationApplied$Z(selected);
this.changeColour$jalview_schemes_ColourSchemeI(this.viewport.getGlobalColourScheme$());
if (selected) {
this.modifyConservation_actionPerformed$();
} else {
$I$(82).hideConservationSlider$();
}});

Clazz.newMeth(C$, 'abovePIDThreshold_actionPerformed$Z', function (selected) {
this.modifyPID.setEnabled$Z(selected);
this.viewport.setAbovePIDThreshold$Z(selected);
if (!selected) {
this.viewport.getResidueShading$().setThreshold$I$Z(0, this.viewport.isIgnoreGapsConsensus$());
}this.changeColour$jalview_schemes_ColourSchemeI(this.viewport.getGlobalColourScheme$());
if (selected) {
this.modifyPID_actionPerformed$();
} else {
$I$(82).hidePIDSlider$();
}});

Clazz.newMeth(C$, 'sortPairwiseMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
$I$(83,"sortByPID$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI",[this.viewport.getAlignment$(), this.viewport.getAlignment$().getSequenceAt$I(0)]);
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_(["Pairwise Sort", oldOrder, this.viewport.getAlignment$()],$I$(84,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'sortIDMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
$I$(83,"sortByID$jalview_datamodel_AlignmentI",[this.viewport.getAlignment$()]);
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_(["ID Sort", oldOrder, this.viewport.getAlignment$()],$I$(84,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'sortLengthMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
$I$(83,"sortByLength$jalview_datamodel_AlignmentI",[this.viewport.getAlignment$()]);
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_(["Length Sort", oldOrder, this.viewport.getAlignment$()],$I$(84,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'sortGroupMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
$I$(83,"sortByGroup$jalview_datamodel_AlignmentI",[this.viewport.getAlignment$()]);
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_(["Group Sort", oldOrder, this.viewport.getAlignment$()],$I$(84,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
this.alignPanel.paintAlignment$Z$Z(true, false);
});

Clazz.newMeth(C$, 'removeRedundancyMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_($I$(85,1).c$$jalview_gui_AlignmentPanel$jalview_gui_AlignFrame,[this.alignPanel, this]);
});

Clazz.newMeth(C$, 'pairwiseAlignmentMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
if ((this.viewport.getSelectionGroup$() == null ) || (this.viewport.getSelectionGroup$().getSize$() < 2) ) {
$I$(28,"showInternalMessageDialog$java_awt_Component$S$S$I",[this, $I$(11).getString$S("label.you_must_select_least_two_sequences"), $I$(11).getString$S("label.invalid_selection"), 2]);
} else {
var frame=Clazz.new_($I$(73,1));
frame.setContentPane$java_awt_Container(Clazz.new_($I$(86,1).c$$jalview_viewmodel_AlignmentViewport,[this.viewport]));
$I$(8,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[frame, $I$(11).getString$S("action.pairwise_alignment"), 600, 500]);
}});

Clazz.newMeth(C$, 'autoCalculate_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.autoCalculateConsensus=this.autoCalculate.isSelected$();
if (this.viewport.autoCalculateConsensus) {
this.viewport.firePropertyChange$S$O$O("alignment", null, this.viewport.getAlignment$().getSequences$());
}});

Clazz.newMeth(C$, 'sortByTreeOption_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.sortByTree=this.sortByTree.isSelected$();
});

Clazz.newMeth(C$, 'listenToViewSelections_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.followSelection=this.listenToViewSelections.isSelected$();
});

Clazz.newMeth(C$, 'newTreePanel$S$S$jalview_api_analysis_SimilarityParamsI', function (type, modelName, options) {
var frameTitle="";
var tp;
var onSelection=false;
if (this.viewport.getSelectionGroup$() != null  && this.viewport.getSelectionGroup$().getSize$() > 0 ) {
var sg=this.viewport.getSelectionGroup$();
for (var _s, $_s = sg.getSequences$().iterator$(); $_s.hasNext$()&&((_s=($_s.next$())),1);) {
if (_s.getLength$() < sg.getEndRes$()) {
$I$(28,"showMessageDialog$java_awt_Component$S$S$I",[$I$(8).desktop, $I$(11).getString$S("label.selected_region_to_tree_may_only_contain_residues_or_gaps"), $I$(11).getString$S("label.sequences_selection_not_aligned"), 2]);
return;
}}
onSelection=true;
} else {
if (this.viewport.getAlignment$().getHeight$() < 2) {
return;
}}tp=Clazz.new_($I$(87,1).c$$jalview_gui_AlignmentPanel$S$S$jalview_api_analysis_SimilarityParamsI,[this.alignPanel, type, modelName, options]);
frameTitle=tp.getPanelTitle$() + (onSelection ? " on region" : "");
frameTitle += " from ";
if (this.viewport.getViewName$() != null ) {
frameTitle += this.viewport.getViewName$() + " of ";
}frameTitle += this.title;
$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(tp, frameTitle, 600, 500);
});

Clazz.newMeth(C$, 'addSortByOrderMenuItem$S$jalview_datamodel_AlignmentOrder', function (title, order) {
var item=Clazz.new_([$I$(11,"formatMessage$S$OA",["action.by_title_param", Clazz.array(java.lang.Object, -1, [title])])],$I$(88,1).c$$S);
this.sort.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var oldOrder=this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().getSequencesArray$();
$I$(83,"sortBy$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentOrder",[this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$(), this.$finals$.order]);
this.b$['jalview.gui.AlignFrame'].addHistoryItem$jalview_commands_CommandI.apply(this.b$['jalview.gui.AlignFrame'], [Clazz.new_([this.$finals$.order.getName$(), oldOrder, this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$()],$I$(84,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI)]);
this.b$['jalview.gui.AlignFrame'].alignPanel.paintAlignment$Z$Z(true, false);
});
})()
), Clazz.new_(P$.AlignFrame$16.$init$,[this, {order:order}])));
});

Clazz.newMeth(C$, 'addSortByAnnotScoreMenuItem$javax_swing_JMenu$S', function (sort, scoreLabel) {
var item=Clazz.new_($I$(88,1).c$$S,[scoreLabel]);
sort.add$javax_swing_JMenuItem(item);
item.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
var oldOrder=this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().getSequencesArray$();
$I$(83,"sortByAnnotationScore$S$jalview_datamodel_AlignmentI",[this.$finals$.scoreLabel, this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$()]);
this.b$['jalview.gui.AlignFrame'].addHistoryItem$jalview_commands_CommandI.apply(this.b$['jalview.gui.AlignFrame'], [Clazz.new_(["Sort by " + this.$finals$.scoreLabel, oldOrder, this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$()],$I$(84,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI)]);
this.b$['jalview.gui.AlignFrame'].alignPanel.paintAlignment$Z$Z(true, false);
});
})()
), Clazz.new_(P$.AlignFrame$17.$init$,[this, {scoreLabel:scoreLabel}])));
});

Clazz.newMeth(C$, 'buildSortByAnnotationScoresMenu$', function () {
if (this.viewport.getAlignment$().getAlignmentAnnotation$() == null ) {
return;
}if (this.viewport.getAlignment$().getAlignmentAnnotation$().hashCode$() != this._annotationScoreVectorHash) {
this.sortByAnnotScore.removeAll$();
var scoreSorts=Clazz.new_($I$(89,1));
var aann;
for (var sqa, $sqa = this.viewport.getAlignment$().getSequences$().iterator$(); $sqa.hasNext$()&&((sqa=($sqa.next$())),1);) {
aann=sqa.getAnnotation$();
for (var i=0; aann != null  && i < aann.length ; i++) {
if (aann[i].hasScore$() && aann[i].sequenceRef != null  ) {
scoreSorts.put$O$O(aann[i].label, aann[i].label);
}}
}
var labels=scoreSorts.keys$();
while (labels.hasMoreElements$()){
this.addSortByAnnotScoreMenuItem$javax_swing_JMenu$S(this.sortByAnnotScore, labels.nextElement$());
}
this.sortByAnnotScore.setVisible$Z(scoreSorts.size$() > 0);
scoreSorts.clear$();
this._annotationScoreVectorHash=this.viewport.getAlignment$().getAlignmentAnnotation$().hashCode$();
}});

Clazz.newMeth(C$, 'buildTreeSortMenu$', function () {
this.sortByTreeMenu.removeAll$();
var comps=$I$(17).components.get$O(this.viewport.getSequenceSetId$());
var treePanels=Clazz.new_($I$(1,1));
for (var comp, $comp = comps.iterator$(); $comp.hasNext$()&&((comp=($comp.next$())),1);) {
if (Clazz.instanceOf(comp, "jalview.gui.TreePanel")) {
treePanels.add$O(comp);
}}
if (treePanels.size$() < 1) {
this.sortByTreeMenu.setVisible$Z(false);
return;
}this.sortByTreeMenu.setVisible$Z(true);
for (var tp, $tp = treePanels.iterator$(); $tp.hasNext$()&&((tp=($tp.next$())),1);) {
var item=Clazz.new_([tp.getTitle$()],$I$(88,1).c$$S);
item.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.tp.sortByTree_actionPerformed$();
this.b$['jalview.gui.AlignFrame'].addHistoryItem$jalview_commands_CommandI.apply(this.b$['jalview.gui.AlignFrame'], [this.$finals$.tp.sortAlignmentIn$jalview_gui_AlignmentPanel(this.b$['jalview.gui.AlignFrame'].alignPanel)]);
});
})()
), Clazz.new_(P$.AlignFrame$18.$init$,[this, {tp:tp}])));
this.sortByTreeMenu.add$javax_swing_JMenuItem(item);
}
});

Clazz.newMeth(C$, 'sortBy$jalview_datamodel_AlignmentOrder$S', function (alorder, undoname) {
var oldOrder=this.viewport.getAlignment$().getSequencesArray$();
$I$(83,"sortBy$jalview_datamodel_AlignmentI$jalview_datamodel_AlignmentOrder",[this.viewport.getAlignment$(), alorder]);
if (undoname != null ) {
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_([undoname, oldOrder, this.viewport.getAlignment$()],$I$(84,1).c$$S$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI));
}this.alignPanel.paintAlignment$Z$Z(true, false);
return true;
});

Clazz.newMeth(C$, 'gatherSequencesForAlignment$', function () {
var msa=null;
if ((this.viewport.getSelectionGroup$() != null ) && (this.viewport.getSelectionGroup$().getSize$() > 1) ) {
msa=this.viewport.getAlignmentView$Z(true);
} else if (this.viewport.getSelectionGroup$() != null  && this.viewport.getSelectionGroup$().getSize$() == 1 ) {
var option=$I$(28,"showConfirmDialog$java_awt_Component$O$S$I",[this, $I$(11).getString$S("warn.oneseq_msainput_selection"), $I$(11).getString$S("label.invalid_selection"), 2]);
if (option == 0) {
msa=this.viewport.getAlignmentView$Z(false);
}} else {
msa=this.viewport.getAlignmentView$Z(false);
}return msa;
});

Clazz.newMeth(C$, 'gatherSeqOrMsaForSecStrPrediction$', function () {
var seqs=null;
if ((this.viewport.getSelectionGroup$() != null ) && (this.viewport.getSelectionGroup$().getSize$() > 0) ) {
seqs=this.viewport.getAlignmentView$Z(true);
} else {
seqs=this.viewport.getAlignmentView$Z(false);
}if (!this.viewport.getAlignment$().isAligned$Z(false)) {
seqs.setSequences$jalview_datamodel_SeqCigarA(Clazz.array($I$(90), -1, [seqs.getSequences$()[0]]));
}return seqs;
});

Clazz.newMeth(C$, 'loadTreeMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var chooser=Clazz.new_([$I$(7).getProperty$S("LAST_DIRECTORY")],$I$(26,1).c$$S);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(27,1)));
chooser.setDialogTitle$S($I$(11).getString$S("label.select_newick_like_tree_file"));
chooser.setToolTipText$S($I$(11).getString$S("label.load_tree_file"));
chooser.setResponseHandler$O$Runnable(new Integer(0), ((P$.AlignFrame$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var filePath=this.$finals$.chooser.getSelectedFile$().getPath$();
$I$(7).setProperty$S$S("LAST_DIRECTORY", filePath);
var fin=null;
try {
fin=Clazz.new_([Clazz.new_([this.$finals$.chooser.getSelectedFile$(), $I$(25).FILE],$I$(92,1).c$$O$jalview_io_DataSourceType)],$I$(91,1).c$$jalview_io_FileParse);
this.b$['jalview.gui.AlignFrame'].viewport.setCurrentTree$jalview_analysis_TreeModel(this.b$['jalview.gui.AlignFrame'].showNewickTree$jalview_io_NewickFile$S.apply(this.b$['jalview.gui.AlignFrame'], [fin, filePath]).getTree$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(28,"showMessageDialog$java_awt_Component$S$S$I",[$I$(8).desktop, ex.getMessage$(), $I$(11).getString$S("label.problem_reading_tree_file"), 2]);
ex.printStackTrace$();
} else {
throw ex;
}
}
if (fin != null  && fin.hasWarningMessage$() ) {
$I$(28,"showMessageDialog$java_awt_Component$S$S$I",[$I$(8).desktop, fin.getWarningMessage$(), $I$(11).getString$S("label.possible_problem_with_tree_file"), 2]);
}});
})()
), Clazz.new_(P$.AlignFrame$19.$init$,[this, {chooser:chooser}])));
chooser.showOpenDialog$java_awt_Component(this);
});

Clazz.newMeth(C$, 'showNewickTree$jalview_io_NewickFile$S', function (nf, treeTitle) {
return this.showNewickTree$jalview_io_NewickFile$S$I$I$I$I(nf, treeTitle, 600, 500, 4, 5);
});

Clazz.newMeth(C$, 'showNewickTree$jalview_io_NewickFile$S$I$I$I$I', function (nf, treeTitle, w, h, x, y) {
return this.showNewickTree$jalview_io_NewickFile$S$jalview_datamodel_AlignmentView$I$I$I$I(nf, treeTitle, null, w, h, x, y);
});

Clazz.newMeth(C$, 'showNewickTree$jalview_io_NewickFile$S$jalview_datamodel_AlignmentView$I$I$I$I', function (nf, treeTitle, input, w, h, x, y) {
var tp=null;
try {
nf.parse$();
if (nf.getTree$() != null ) {
tp=Clazz.new_($I$(87,1).c$$jalview_gui_AlignmentPanel$jalview_io_NewickFile$S$jalview_datamodel_AlignmentView,[this.alignPanel, nf, treeTitle, input]);
tp.setSize$I$I(w, h);
if (x > 0 && y > 0 ) {
tp.setLocation$I$I(x, y);
}$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(tp, treeTitle, w, h);
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
return tp;
});

Clazz.newMeth(C$, 'BuildWebServiceMenu$', function () {
while (this.buildingMenu){
try {
System.err.println$S("Waiting for building menu to finish.");
$I$(20).sleep$J(10);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
var me=this;
this.buildingMenu=true;
Clazz.new_([((P$.AlignFrame$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var legacyItems=Clazz.new_($I$(1,1));
try {
var wsmenu=Clazz.new_($I$(56,1));
var af=this.$finals$.me;
var msawsmenu=Clazz.new_($I$(93,1).c$$S,["Alignment"]);
var secstrmenu=Clazz.new_($I$(93,1).c$$S,["Secondary Structure Prediction"]);
var seqsrchmenu=Clazz.new_($I$(93,1).c$$S,["Sequence Database Search"]);
var analymenu=Clazz.new_($I$(93,1).c$$S,["Analysis"]);
var dismenu=Clazz.new_($I$(93,1).c$$S,["Protein Disorder"]);
if ($I$(94).services != null  && ($I$(94).services.size$() > 0) ) {
var secstrpr=$I$(94).services.get$O("SecStrPred");
if (secstrpr != null ) {
for (var i=0, j=secstrpr.size$(); i < j; i++) {
var sh=secstrpr.get$I(i);
var impl=$I$(94).getServiceClient$ext_vamsas_ServiceHandle(sh);
var p=secstrmenu.getItemCount$();
impl.attachWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame(secstrmenu, this.$finals$.me);
var q=secstrmenu.getItemCount$();
for (var litm=p; litm < q; litm++) {
legacyItems.add$O(secstrmenu.getItem$I(litm));
}
}
}}wsmenu.add$O(msawsmenu);
wsmenu.add$O(secstrmenu);
wsmenu.add$O(dismenu);
wsmenu.add$O(analymenu);
$I$(18,"invokeLater$Runnable",[((P$.AlignFrame$20$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$20$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.b$['jalview.gui.AlignFrame'].webService.removeAll$();
if (this.$finals$.wsmenu.size$() > 0) {
for (var i=0, j=this.$finals$.wsmenu.size$(); i < j; i++) {
this.b$['jalview.gui.AlignFrame'].webService.add$javax_swing_JMenuItem(this.$finals$.wsmenu.get$I(i));
}
} else {
this.b$['jalview.gui.AlignFrame'].webService.add$javax_swing_JMenuItem(this.$finals$.me.webServiceNoServices);
}var new_sspred=false;
if ($I$(7).getDefault$S$Z("SHOW_JWS2_SERVICES", true)) {
var jws2servs=$I$(95).getDiscoverer$();
if (jws2servs != null ) {
if (jws2servs.hasServices$()) {
jws2servs.attachWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame(this.b$['jalview.gui.AlignFrame'].webService, this.$finals$.me);
for (var sv, $sv = jws2servs.getServices$().iterator$(); $sv.hasNext$()&&((sv=($sv.next$())),1);) {
if (sv.description.toLowerCase$().contains$CharSequence("jpred")) {
for (var jmi, $jmi = this.$finals$.legacyItems.iterator$(); $jmi.hasNext$()&&((jmi=($jmi.next$())),1);) {
jmi.setVisible$Z(false);
}
}}
}if (jws2servs.isRunning$()) {
var tm=Clazz.new_($I$(88,1).c$$S,["Still discovering JABA Services"]);
tm.setEnabled$Z(false);
this.b$['jalview.gui.AlignFrame'].webService.add$javax_swing_JMenuItem(tm);
}}}this.b$['jalview.gui.AlignFrame'].build_urlServiceMenu$javax_swing_JMenu.apply(this.b$['jalview.gui.AlignFrame'], [this.$finals$.me.webService]);
this.b$['jalview.gui.AlignFrame'].build_fetchdbmenu$javax_swing_JMenu.apply(this.b$['jalview.gui.AlignFrame'], [this.b$['jalview.gui.AlignFrame'].webService]);
for (var item, $item = this.$finals$.wsmenu.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
if (item.getItemCount$() == 0) {
item.setEnabled$Z(false);
} else {
item.setEnabled$Z(true);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(7).log.debug$O$Throwable("Exception during web service menu building process.", e);
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.AlignFrame$20$1.$init$,[this, {me:this.$finals$.me,wsmenu:wsmenu,legacyItems:legacyItems}]))]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.b$['jalview.gui.AlignFrame'].buildingMenu=false;
});
})()
), Clazz.new_(P$.AlignFrame$20.$init$,[this, {me:me}]))],$I$(20,1).c$$Runnable).start$();
});

Clazz.newMeth(C$, 'build_urlServiceMenu$javax_swing_JMenu', function (webService) {
for (var client, $client = 0, $$client = $I$(96).getRestClients$(); $client<$$client.length&&((client=($$client[$client])),1);$client++) {
client.attachWSMenuEntry$javax_swing_JMenu$jalview_gui_AlignFrame($I$(97,"findOrCreateMenu$javax_swing_JMenu$S",[webService, client.getAction$()]), this);
}
});

Clazz.newMeth(C$, 'canShowProducts$', function () {
var seqs=this.viewport.getAlignment$().getSequencesArray$();
var dataset=this.viewport.getAlignment$().getDataset$();
this.showProducts.removeAll$();
var dna=this.viewport.getAlignment$().isNucleotide$();
if (seqs == null  || seqs.length == 0 ) {
return false;
}var showp=false;
try {
var ptypes=Clazz.new_($I$(98,1).c$$jalview_datamodel_SequenceIA$jalview_datamodel_AlignmentI,[seqs, dataset]).findXrefSourcesForSequences$Z(dna);
for (var source, $source = ptypes.iterator$(); $source.hasNext$()&&((source=($source.next$())),1);) {
showp=true;
var af=this;
var xtype=Clazz.new_($I$(88,1).c$$S,[source]);
xtype.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.b$['jalview.gui.AlignFrame'].showProductsFor$jalview_datamodel_SequenceIA$Z$S.apply(this.b$['jalview.gui.AlignFrame'], [this.$finals$.af.viewport.getSequenceSelection$(), this.$finals$.dna, this.$finals$.source]);
});
})()
), Clazz.new_(P$.AlignFrame$21.$init$,[this, {dna:dna,source:source,af:af}])));
this.showProducts.add$javax_swing_JMenuItem(xtype);
}
this.showProducts.setVisible$Z(showp);
this.showProducts.setEnabled$Z(showp);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(7).log.warn$O$Throwable("canShowProducts threw an exception - please report to help@jalview.org", e);
return false;
} else {
throw e;
}
}
return showp;
});

Clazz.newMeth(C$, 'showProductsFor$jalview_datamodel_SequenceIA$Z$S', function (sel, _odna, source) {
Clazz.new_([$I$(99).getHandlerFor$jalview_datamodel_SequenceIA$Z$S$jalview_gui_AlignFrame(sel, _odna, source, this)],$I$(20,1).c$$Runnable).start$();
});

Clazz.newMeth(C$, 'showTranslation_actionPerformed$jalview_analysis_GeneticCodeI', function (codeTable) {
var al=null;
try {
var dna=Clazz.new_([this.viewport, this.viewport.getViewAsVisibleContigs$Z(true)],$I$(100,1).c$$jalview_api_AlignViewportI$java_util_Iterator);
al=dna.translateCdna$jalview_analysis_GeneticCodeI(codeTable);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(7).log.error$O$Throwable("Exception during translation. Please report this !", ex);
var msg=$I$(11).getString$S("label.error_when_translating_sequences_submit_bug_report");
var errorTitle=$I$(11).getString$S("label.implementation_error") + $I$(11).getString$S("label.translation_failed");
$I$(28,"showMessageDialog$java_awt_Component$S$S$I",[$I$(8).desktop, msg, errorTitle, 0]);
return;
} else {
throw ex;
}
}
if (al == null  || al.getHeight$() == 0 ) {
var msg=$I$(11).getString$S("label.select_at_least_three_bases_in_at_least_one_sequence_to_cDNA_translation");
var errorTitle=$I$(11).getString$S("label.translation_failed");
$I$(28,"showMessageDialog$java_awt_Component$S$S$I",[$I$(8).desktop, msg, errorTitle, 2]);
} else {
var af=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$I$I,[al, 700, 500]);
af.setFileFormat$jalview_io_FileFormatI(this.currentFileFormat);
var newTitle=$I$(11,"formatMessage$S$OA",["label.translation_of_params", Clazz.array(java.lang.Object, -1, [this.getTitle$(), codeTable.getId$()])]);
af.setTitle$S(newTitle);
if ($I$(7).getDefault$S$Z("ENABLE_SPLIT_FRAME", true)) {
var seqs=this.viewport.getSelectionAsNewSequence$();
this.viewport.openSplitFrame$jalview_gui_AlignFrame$jalview_datamodel_AlignmentI(af, Clazz.new_($I$(55,1).c$$jalview_datamodel_SequenceIA,[seqs]));
} else {
$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(af, newTitle, 700, 500);
}}});

Clazz.newMeth(C$, 'setFileFormat$jalview_io_FileFormatI', function (format) {
this.currentFileFormat=format;
});

Clazz.newMeth(C$, 'parseFeaturesFile$O$jalview_io_DataSourceType', function (file, sourceType) {
return this.avc.parseFeaturesFile$O$jalview_io_DataSourceType$Z(file, sourceType, $I$(7).getDefault$S$Z("RELAXEDSEQIDMATCHING", false));
});

Clazz.newMeth(C$, 'refreshFeatureUI$Z', function (enableIfNecessary) {
if (enableIfNecessary) {
this.viewport.setShowSequenceFeatures$Z(true);
this.showSeqFeatures.setSelected$Z(true);
}});

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent', function (evt) {
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent', function (evt) {
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent', function (evt) {
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent', function (evt) {
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent', function (evt) {
evt.acceptDrop$I(3);
var t=evt.getTransferable$();
var thisaf=this;
var files=Clazz.new_($I$(1,1));
var protocols=Clazz.new_($I$(1,1));
try {
$I$(8).transferFromDropTarget$java_util_List$java_util_List$java_awt_dnd_DropTargetDropEvent$java_awt_datatransfer_Transferable(files, protocols, evt, t);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
if (files != null ) {
Clazz.new_([((P$.AlignFrame$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
try {
var idm=Clazz.new_([this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().getSequencesArray$()],$I$(101,1).c$$jalview_datamodel_SequenceIA);
var filesmatched=Clazz.new_($I$(1,1));
var filesnotmatched=Clazz.new_($I$(1,1));
for (var i=0; i < this.$finals$.files.size$(); i++) {
var file=this.$finals$.files.get$I(i);
var fileName=file.toString();
var pdbfn="";
var protocol=(Clazz.instanceOf(file, "java.io.File") ? $I$(25).FILE : $I$(102).checkProtocol$O(fileName));
if (protocol === $I$(25).FILE ) {
var fl;
if (Clazz.instanceOf(file, "java.io.File")) {
fl=file;
$I$(10).cacheFileData$java_io_File(fl);
} else {
fl=Clazz.new_($I$(29,1).c$$S,[fileName]);
}pdbfn=fl.getName$();
} else if (protocol === $I$(25).URL ) {
var url=Clazz.new_($I$(103,1).c$$S,[fileName]);
pdbfn=url.getFile$();
}if (pdbfn.length$() > 0) {
var mtch=idm.findAllIdMatches$S(pdbfn);
var l=0;
var c=pdbfn.indexOf$S(".");
while (mtch == null  && c != -1 ){
do {
l=c;
} while ((c=pdbfn.indexOf$S$I(".", l)) > l);
if (l > -1) {
pdbfn=pdbfn.substring$I$I(0, l);
}mtch=idm.findAllIdMatches$S(pdbfn);
}
if (mtch != null ) {
var type;
try {
type=Clazz.new_($I$(53,1)).identify$O$jalview_io_DataSourceType(file, protocol);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
type=null;
} else {
throw ex;
}
}
if (type != null  && type.isStructureFile$() ) {
filesmatched.add$O(Clazz.array(java.lang.Object, -1, [file, protocol, mtch]));
continue;
}}filesnotmatched.add$O(file);
}}
var assocfiles=0;
if (filesmatched.size$() > 0) {
var autoAssociate=$I$(7).getDefault$S$Z("AUTOASSOCIATE_PDBANDSEQS", false);
if (!autoAssociate) {
var msg=$I$(11,"formatMessage$S$OA",["label.automatically_associate_structure_files_with_sequences_same_name", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(filesmatched.size$()).toString()])]);
var ttl=$I$(11).getString$S("label.automatically_associate_structure_files_by_name");
var choice=$I$(28).showConfirmDialog$java_awt_Component$O$S$I(this.$finals$.thisaf, msg, ttl, 0);
autoAssociate=choice == 0;
}if (autoAssociate) {
for (var fm, $fm = filesmatched.iterator$(); $fm.hasNext$()&&((fm=($fm.next$())),1);) {
for (var toassoc, $toassoc = 0, $$toassoc = fm[2]; $toassoc<$$toassoc.length&&((toassoc=($$toassoc[$toassoc])),1);$toassoc++) {
var pe=Clazz.new_($I$(104,1)).associatePdbWithSeq$S$jalview_io_DataSourceType$jalview_datamodel_SequenceI$Z$jalview_api_StructureSelectionManagerProvider(fm[0].toString(), fm[1], toassoc, false, $I$(8).instance);
if (pe != null ) {
System.err.println$S("Associated file : " + (fm[0].toString()) + " with " + toassoc.getDisplayId$Z(true) );
assocfiles++;
}}
this.b$['jalview.gui.AlignFrame'].alignPanel.paintAlignment$Z$Z(true, false);
}
} else {
for (var o, $o = filesmatched.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
filesnotmatched.add$O(o[0]);
}
}}if (filesnotmatched.size$() > 0) {
if (assocfiles > 0 && ($I$(7).getDefault$S$Z("AUTOASSOCIATE_PDBANDSEQS_IGNOREOTHERS", false) || $I$(28,"showConfirmDialog$java_awt_Component$O$S$I",[this.$finals$.thisaf, "<html>" + $I$(11,"formatMessage$S$OA",["label.ignore_unmatched_dropped_files_info", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(filesnotmatched.size$()).toString()])]) + "</html>" , $I$(11).getString$S("label.ignore_unmatched_dropped_files"), 0]) == 0 ) ) {
return;
}for (var fn, $fn = filesnotmatched.iterator$(); $fn.hasNext$()&&((fn=($fn.next$())),1);) {
this.b$['jalview.gui.AlignFrame'].loadJalviewDataFile$O$jalview_io_DataSourceType$jalview_io_FileFormatI$jalview_datamodel_SequenceI.apply(this.b$['jalview.gui.AlignFrame'], [fn, null, null, null]);
}
}} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
} else {
throw ex;
}
}
});
})()
), Clazz.new_(P$.AlignFrame$22.$init$,[this, {files:files,thisaf:thisaf}]))],$I$(20,1).c$$Runnable).start$();
}});

Clazz.newMeth(C$, 'loadJalviewDataFile$O$jalview_io_DataSourceType$jalview_io_FileFormatI$jalview_datamodel_SequenceI', function (file, sourceType, format, assocSeq) {
try {
if (sourceType == null ) {
sourceType=$I$(102).checkProtocol$O(file);
}var isAnnotation=(format == null  || $I$(23).Pfam.equals$O(format) ) ? Clazz.new_($I$(105,1)).annotateAlignmentView$jalview_api_AlignViewportI$O$jalview_io_DataSourceType(this.viewport, file, sourceType) : false;
if (!isAnnotation) {
var tcf=null;
try {
tcf=Clazz.new_($I$(106,1).c$$O$jalview_io_DataSourceType,[file, sourceType]);
if (tcf.isValid$()) {
if (tcf.annotateAlignment$jalview_datamodel_AlignmentI$Z(this.viewport.getAlignment$(), true)) {
this.buildColourMenu$();
this.changeColour$jalview_schemes_ColourSchemeI(Clazz.new_([this.viewport.getAlignment$()],$I$(107,1).c$$jalview_datamodel_AnnotatedCollectionI));
isAnnotation=true;
this.setStatus$S($I$(11).getString$S("label.successfully_pasted_tcoffee_scores_to_alignment"));
} else {
$I$(28,"showMessageDialog$java_awt_Component$S$S$I",[$I$(8).desktop, tcf.getWarningMessage$() == null  ? $I$(11).getString$S("label.check_file_matches_sequence_ids_alignment") : tcf.getWarningMessage$(), $I$(11).getString$S("label.problem_reading_tcoffee_score_file"), 2]);
}} else {
tcf=null;
}} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
$I$(7).log.debug$O$Throwable("Exception when processing data source as T-COFFEE score file", x);
tcf=null;
} else {
throw x;
}
}
if (tcf == null ) {
if (format == null ) {
format=Clazz.new_($I$(53,1)).identify$O$jalview_io_DataSourceType(file, sourceType);
}if ($I$(23).ScoreMatrix === format ) {
var sm=Clazz.new_([Clazz.new_($I$(92,1).c$$O$jalview_io_DataSourceType,[file, sourceType])],$I$(108,1).c$$jalview_io_FileParse);
sm.parse$();
this.setStatus$S($I$(11,"formatMessage$S$OA",["label.successfully_loaded_matrix", [sm.getMatrixName$()]]));
} else if ($I$(23).Jnet.equals$O(format)) {
var predictions=Clazz.new_($I$(109,1).c$$O$jalview_io_DataSourceType,[file, sourceType]);
Clazz.new_($I$(110,1));
$I$(110,"add_annotation$jalview_io_JPredFile$jalview_datamodel_AlignmentI$I$Z",[predictions, this.viewport.getAlignment$(), 0, false]);
this.viewport.getAlignment$().setupJPredAlignment$();
isAnnotation=true;
} else if ($I$(23).Features.equals$O(format)) {
if (this.parseFeaturesFile$O$jalview_io_DataSourceType(file, sourceType)) {
var splitFrame=this.getSplitViewContainer$();
if (splitFrame != null ) {
splitFrame.repaint$();
} else {
this.alignPanel.paintAlignment$Z$Z(true, true);
}}} else {
Clazz.new_($I$(24,1)).LoadFile$jalview_gui_AlignViewport$O$jalview_io_DataSourceType$jalview_io_FileFormatI(this.viewport, file, sourceType, format);
}}}if (isAnnotation) {
this.alignPanel.adjustAnnotationHeight$();
this.viewport.updateSequenceIdColours$();
this.buildSortByAnnotationScoresMenu$();
this.alignPanel.paintAlignment$Z$Z(true, true);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
ex.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oom = e$$;
{
try {
System.gc$();
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
} else {
throw x;
}
}
Clazz.new_(["loading data " + (sourceType != null  ? (sourceType === $I$(25).PASTE  ? "from clipboard." : "using " + sourceType + " from " + file ) : ".") + (format != null  ? "(parsing as '" + format + "' file)"  : "") , oom, $I$(8).desktop],$I$(39,1).c$$S$OutOfMemoryError$java_awt_Component);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'tabSelectionChanged$I', function (index) {
if (index > -1) {
this.alignPanel=this.alignPanels.get$I(index);
this.viewport=this.alignPanel.av;
this.avc.setViewportAndAlignmentPanel$jalview_api_AlignViewportI$jalview_api_AlignmentViewPanel(this.viewport, this.alignPanel);
this.setMenusFromViewport$jalview_gui_AlignViewport(this.viewport);
if (this.featureSettings != null  && this.featureSettings.isOpen$()  && this.featureSettings.fr.getViewport$() !== this.viewport  ) {
if (this.viewport.isShowSequenceFeatures$()) {
this.showFeatureSettingsUI$();
} else {
this.featureSettings.close$();
}}}if (this.viewport.getConservationSelected$()) {
$I$(82,"setConservationSlider$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.alignPanel, this.viewport.getResidueShading$(), this.alignPanel.getViewName$()]);
} else {
$I$(82).hideConservationSlider$();
}if (this.viewport.getAbovePIDThreshold$()) {
$I$(82,"setPIDSliderSource$jalview_gui_AlignmentPanel$jalview_renderer_ResidueShaderI$S",[this.alignPanel, this.viewport.getResidueShading$(), this.alignPanel.getViewName$()]);
} else {
$I$(82).hidePIDSlider$();
}var peer=this.viewport.getCodingComplement$();
if (peer != null ) {
var linkedAlignFrame=(peer).getAlignPanel$().alignFrame;
if (linkedAlignFrame.tabbedPane.getTabCount$() > index) {
linkedAlignFrame.tabbedPane.setSelectedIndex$I(index);
}}});

Clazz.newMeth(C$, 'tabbedPane_mousePressed$java_awt_event_MouseEvent', function (e) {
if (e.isPopupTrigger$()) {
var msg=$I$(11).getString$S("label.enter_view_name");
var ttl=this.tabbedPane.getTitleAt$I(this.tabbedPane.getSelectedIndex$());
var reply=$I$(28).showInputDialog$S$S(msg, ttl);
if (reply != null ) {
this.viewport.setViewName$S(reply);
this.tabbedPane.setTitleAt$I$S(this.tabbedPane.getSelectedIndex$(), reply);
}}});

Clazz.newMeth(C$, 'getCurrentView$', function () {
return this.viewport;
});

Clazz.newMeth(C$, 'extractScores_actionPerformed$java_awt_event_ActionEvent', function (e) {
var pp=Clazz.new_([this.viewport.getAlignment$()],$I$(111,1).c$$jalview_datamodel_AlignmentI);
if (pp.getScoresFromDescription$S$S$S$Z("description column", "score in description column ", "\\W*([-+eE0-9.]+)", true) > 0) {
this.buildSortByAnnotationScoresMenu$();
}});

Clazz.newMeth(C$, 'showDbRefs_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowDBRefs$Z(this.showDbRefsMenuitem.isSelected$());
});

Clazz.newMeth(C$, 'showNpFeats_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowNPFeats$Z(this.showNpFeatsMenuitem.isSelected$());
});

Clazz.newMeth(C$, 'closeView$jalview_api_AlignViewportI', function (av) {
if (this.viewport === av ) {
this.closeMenuItem_actionPerformed$Z(false);
return true;
}var comp=this.tabbedPane.getComponents$();
for (var i=0; comp != null  && i < comp.length ; i++) {
if (Clazz.instanceOf(comp[i], "jalview.gui.AlignmentPanel")) {
if ((comp[i]).av === av ) {
this.closeView$jalview_gui_AlignmentPanel(comp[i]);
return true;
}}}
return false;
});

Clazz.newMeth(C$, 'build_fetchdbmenu$javax_swing_JMenu', function (webService) {
var rfetch=Clazz.new_([$I$(11).getString$S("action.fetch_db_references")],$I$(93,1).c$$S);
rfetch.setToolTipText$S($I$(11).getString$S("label.retrieve_parse_sequence_database_records_alignment_or_selected_sequences"));
webService.add$javax_swing_JMenuItem(rfetch);
var trimrs=Clazz.new_([$I$(11).getString$S("option.trim_retrieved_seqs")],$I$(112,1).c$$S);
trimrs.setToolTipText$S($I$(11).getString$S("label.trim_retrieved_sequences"));
trimrs.setSelected$Z($I$(7).getDefault$S$Z("TRIM_FETCHED_DATASET_SEQS", true));
trimrs.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
this.$finals$.trimrs.setSelected$Z(this.$finals$.trimrs.isSelected$());
$I$(7,"setProperty$S$S",["TRIM_FETCHED_DATASET_SEQS", $I$(113,"valueOf$Z",[this.$finals$.trimrs.isSelected$()]).toString()]);
});
})()
), Clazz.new_(P$.AlignFrame$23.$init$,[this, {trimrs:trimrs}])));
rfetch.add$javax_swing_JMenuItem(trimrs);
var fetchr=Clazz.new_([$I$(11).getString$S("label.standard_databases")],$I$(88,1).c$$S);
fetchr.setToolTipText$S($I$(11).getString$S("label.fetch_embl_uniprot"));
fetchr.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_([((P$.AlignFrame$24$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$24$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var isNucleotide=this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame.getViewport$().getAlignment$().isNucleotide$();
var dbRefFetcher=Clazz.new_([this.b$['jalview.gui.AlignFrame'].alignPanel.av.getSequenceSelection$(), this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame, null, this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame.featureSettings, isNucleotide],$I$(114,1).c$$jalview_datamodel_SequenceIA$jalview_gui_IProgressIndicator$jalview_ws_seqfetcher_DbSourceProxyA$jalview_gui_FeatureSettings$Z);
dbRefFetcher.addListener$jalview_ws_DBRefFetcher_FetchFinishedListenerI(((P$.AlignFrame$24$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$24$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.ws.DBRefFetcher','jalview.ws.DBRefFetcher.FetchFinishedListenerI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'finished$', function () {
for (var srcSettings, $srcSettings = this.$finals$.dbRefFetcher.getFeatureSettingsModels$().iterator$(); $srcSettings.hasNext$()&&((srcSettings=($srcSettings.next$())),1);) {
this.b$['jalview.gui.AlignFrame'].alignPanel.av.mergeFeaturesStyle$jalview_api_FeatureSettingsModelI(srcSettings);
}
this.b$['jalview.gui.AlignFrame'].setMenusForViewport$.apply(this.b$['jalview.gui.AlignFrame'], []);
});
})()
), Clazz.new_(P$.AlignFrame$24$1$1.$init$,[this, {dbRefFetcher:dbRefFetcher}])));
dbRefFetcher.fetchDBRefs$Z(false);
});
})()
), Clazz.new_(P$.AlignFrame$24$1.$init$,[this, null]))],$I$(20,1).c$$Runnable).start$();
});
})()
), Clazz.new_(P$.AlignFrame$24.$init$,[this, null])));
rfetch.add$javax_swing_JMenuItem(fetchr);
Clazz.new_([((P$.AlignFrame$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var sf=$I$(22).getSequenceFetcherSingleton$();
$I$(18,"invokeLater$Runnable",[((P$.AlignFrame$25$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var dbclasses=this.$finals$.sf.getNonAlignmentSources$();
var otherdb;
var dfetch=Clazz.new_($I$(93,1));
var ifetch=Clazz.new_($I$(93,1));
var fetchr=null;
var comp=0;
var icomp=0;
var mcomp=15;
var mname=null;
var dbi=0;
for (var dbclass, $dbclass = 0, $$dbclass = dbclasses; $dbclass<$$dbclass.length&&((dbclass=($$dbclass[$dbclass])),1);$dbclass++) {
otherdb=this.$finals$.sf.getSourceProxy$S(dbclass);
if (otherdb == null  || otherdb.size$() < 1 ) {
continue;
}if (mname == null ) {
mname="From " + dbclass;
}if (otherdb.size$() == 1) {
var dassource=otherdb.toArray$OA(Clazz.array($I$(115), [0]));
var src=otherdb.get$I(0);
fetchr=Clazz.new_([src.getDbSource$()],$I$(88,1).c$$S);
fetchr.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$25$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_([((P$.AlignFrame$25$1$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25$1$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var isNucleotide=this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame.getViewport$().getAlignment$().isNucleotide$();
var dbRefFetcher=Clazz.new_([this.b$['jalview.gui.AlignFrame'].alignPanel.av.getSequenceSelection$(), this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame, this.$finals$.dassource, this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame.featureSettings, isNucleotide],$I$(114,1).c$$jalview_datamodel_SequenceIA$jalview_gui_IProgressIndicator$jalview_ws_seqfetcher_DbSourceProxyA$jalview_gui_FeatureSettings$Z);
dbRefFetcher.addListener$jalview_ws_DBRefFetcher_FetchFinishedListenerI(((P$.AlignFrame$25$1$1$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25$1$1$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.ws.DBRefFetcher','jalview.ws.DBRefFetcher.FetchFinishedListenerI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'finished$', function () {
var srcSettings=this.$finals$.dassource[0].getFeatureColourScheme$();
this.b$['jalview.gui.AlignFrame'].alignPanel.av.mergeFeaturesStyle$jalview_api_FeatureSettingsModelI(srcSettings);
this.b$['jalview.gui.AlignFrame'].setMenusForViewport$.apply(this.b$['jalview.gui.AlignFrame'], []);
});
})()
), Clazz.new_(P$.AlignFrame$25$1$1$1$1.$init$,[this, {dassource:this.$finals$.dassource}])));
dbRefFetcher.fetchDBRefs$Z(false);
});
})()
), Clazz.new_(P$.AlignFrame$25$1$1$1.$init$,[this, {dassource:this.$finals$.dassource}]))],$I$(20,1).c$$Runnable).start$();
});
})()
), Clazz.new_(P$.AlignFrame$25$1$1.$init$,[this, {dassource:dassource}])));
fetchr.setToolTipText$S($I$(97,"wrapTooltip$Z$S",[true, $I$(11,"formatMessage$S$OA",["label.fetch_retrieve_from", Clazz.array(java.lang.Object, -1, [src.getDbName$()])])]));
dfetch.add$javax_swing_JMenuItem(fetchr);
comp++;
} else {
var dassource=otherdb.toArray$OA(Clazz.array($I$(115), [0]));
var src=otherdb.get$I(0);
fetchr=Clazz.new_([$I$(11,"formatMessage$S$OA",["label.fetch_all_param", Clazz.array(java.lang.Object, -1, [src.getDbSource$()])])],$I$(88,1).c$$S);
fetchr.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$25$1$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25$1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_([((P$.AlignFrame$25$1$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25$1$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var isNucleotide=this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame.getViewport$().getAlignment$().isNucleotide$();
var dbRefFetcher=Clazz.new_([this.b$['jalview.gui.AlignFrame'].alignPanel.av.getSequenceSelection$(), this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame, this.$finals$.dassource, this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame.featureSettings, isNucleotide],$I$(114,1).c$$jalview_datamodel_SequenceIA$jalview_gui_IProgressIndicator$jalview_ws_seqfetcher_DbSourceProxyA$jalview_gui_FeatureSettings$Z);
dbRefFetcher.addListener$jalview_ws_DBRefFetcher_FetchFinishedListenerI(((P$.AlignFrame$25$1$2$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25$1$2$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.ws.DBRefFetcher','jalview.ws.DBRefFetcher.FetchFinishedListenerI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'finished$', function () {
this.b$['jalview.gui.AlignFrame'].setMenusForViewport$.apply(this.b$['jalview.gui.AlignFrame'], []);
});
})()
), Clazz.new_(P$.AlignFrame$25$1$2$1$1.$init$,[this, null])));
dbRefFetcher.fetchDBRefs$Z(false);
});
})()
), Clazz.new_(P$.AlignFrame$25$1$2$1.$init$,[this, {dassource:this.$finals$.dassource}]))],$I$(20,1).c$$Runnable).start$();
});
})()
), Clazz.new_(P$.AlignFrame$25$1$2.$init$,[this, {dassource:dassource}])));
fetchr.setToolTipText$S($I$(97,"wrapTooltip$Z$S",[true, $I$(11,"formatMessage$S$OA",["label.fetch_retrieve_from_all_sources", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(otherdb.size$()).toString(), src.getDbSource$(), src.getDbName$()])])]));
dfetch.add$javax_swing_JMenuItem(fetchr);
comp++;
ifetch=Clazz.new_([$I$(11,"formatMessage$S$OA",["label.source_from_db_source", Clazz.array(java.lang.Object, -1, [src.getDbSource$()])])],$I$(93,1).c$$S);
icomp=0;
var imname=null;
var i=0;
for (var sproxy, $sproxy = otherdb.iterator$(); $sproxy.hasNext$()&&((sproxy=($sproxy.next$())),1);) {
var dbname=sproxy.getDbName$();
var sname=dbname.length$() > 5 ? dbname.substring$I$I(0, 5) + "..." : dbname;
var msname=dbname.length$() > 10 ? dbname.substring$I$I(0, 10) + "..." : dbname;
if (imname == null ) {
imname=$I$(11,"formatMessage$S$OA",["label.from_msname", Clazz.array(java.lang.Object, -1, [sname])]);
}fetchr=Clazz.new_($I$(88,1).c$$S,[msname]);
var dassrc=Clazz.array($I$(115), -1, [sproxy]);
fetchr.addActionListener$java_awt_event_ActionListener(((P$.AlignFrame$25$1$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25$1$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (e) {
Clazz.new_([((P$.AlignFrame$25$1$3$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25$1$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var isNucleotide=this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame.getViewport$().getAlignment$().isNucleotide$();
var dbRefFetcher=Clazz.new_([this.b$['jalview.gui.AlignFrame'].alignPanel.av.getSequenceSelection$(), this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame, this.$finals$.dassrc, this.b$['jalview.gui.AlignFrame'].alignPanel.alignFrame.featureSettings, isNucleotide],$I$(114,1).c$$jalview_datamodel_SequenceIA$jalview_gui_IProgressIndicator$jalview_ws_seqfetcher_DbSourceProxyA$jalview_gui_FeatureSettings$Z);
dbRefFetcher.addListener$jalview_ws_DBRefFetcher_FetchFinishedListenerI(((P$.AlignFrame$25$1$3$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$25$1$3$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.ws.DBRefFetcher','jalview.ws.DBRefFetcher.FetchFinishedListenerI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'finished$', function () {
this.b$['jalview.gui.AlignFrame'].setMenusForViewport$.apply(this.b$['jalview.gui.AlignFrame'], []);
});
})()
), Clazz.new_(P$.AlignFrame$25$1$3$1$1.$init$,[this, null])));
dbRefFetcher.fetchDBRefs$Z(false);
});
})()
), Clazz.new_(P$.AlignFrame$25$1$3$1.$init$,[this, {dassrc:this.$finals$.dassrc}]))],$I$(20,1).c$$Runnable).start$();
});
})()
), Clazz.new_(P$.AlignFrame$25$1$3.$init$,[this, {dassrc:dassrc}])));
fetchr.setToolTipText$S("<html>" + $I$(11,"formatMessage$S$OA",["label.fetch_retrieve_from", Clazz.array(java.lang.Object, -1, [dbname])]));
ifetch.add$javax_swing_JMenuItem(fetchr);
++i;
if (++icomp >= mcomp || i == (otherdb.size$()) ) {
ifetch.setText$S($I$(11).formatMessage$S$OA("label.source_to_target", [imname, sname]));
dfetch.add$javax_swing_JMenuItem(ifetch);
ifetch=Clazz.new_($I$(93,1));
imname=null;
icomp=0;
comp++;
}}
}++dbi;
if (comp >= mcomp || dbi >= (dbclasses.length) ) {
dfetch.setText$S($I$(11).formatMessage$S$OA("label.source_to_target", [mname, dbclass]));
this.$finals$.rfetch.add$javax_swing_JMenuItem(dfetch);
dfetch=Clazz.new_($I$(93,1));
mname=null;
comp=0;
}}
});
})()
), Clazz.new_(P$.AlignFrame$25$1.$init$,[this, {sf:sf,rfetch:this.$finals$.rfetch}]))]);
});
})()
), Clazz.new_(P$.AlignFrame$25.$init$,[this, {rfetch:rfetch}]))],$I$(20,1).c$$Runnable).start$();
});

Clazz.newMeth(C$, 'justifyLeftMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var al=this.viewport.getAlignment$();
al.justify$Z(false);
this.viewport.firePropertyChange$S$O$O("alignment", null, al);
});

Clazz.newMeth(C$, 'justifyRightMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
var al=this.viewport.getAlignment$();
al.justify$Z(true);
this.viewport.firePropertyChange$S$O$O("alignment", null, al);
});

Clazz.newMeth(C$, 'setShowSeqFeatures$Z', function (b) {
this.showSeqFeatures.setSelected$Z(b);
this.viewport.setShowSequenceFeatures$Z(b);
});

Clazz.newMeth(C$, 'showUnconservedMenuItem_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowUnconserved$Z(this.showNonconservedMenuItem.getState$());
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'showGroupConsensus_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowGroupConsensus$Z(this.showGroupConsensus.getState$());
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'showGroupConservation_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowGroupConservation$Z(this.showGroupConservation.getState$());
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'showConsensusHistogram_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowConsensusHistogram$Z(this.showConsensusHistogram.getState$());
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'showSequenceLogo_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.viewport.setShowSequenceLogo$Z(this.showSequenceLogo.getState$());
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'normaliseSequenceLogo_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.showSequenceLogo.setState$Z(true);
this.viewport.setShowSequenceLogo$Z(true);
this.viewport.setNormaliseSequenceLogo$Z(this.normaliseSequenceLogo.getState$());
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'applyAutoAnnotationSettings_actionPerformed$java_awt_event_ActionEvent', function (e) {
this.alignPanel.updateAnnotation$Z(this.applyAutoAnnotationSettings.getState$());
});

Clazz.newMeth(C$, 'makeGrpsFromSelection_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.avc.makeGroupsFromSelection$()) {
$I$(17,"Refresh$java_awt_Component$S",[this, this.viewport.getSequenceSetId$()]);
this.alignPanel.updateAnnotation$();
this.alignPanel.paintAlignment$Z$Z(true, this.viewport.needToUpdateStructureViews$());
}});

Clazz.newMeth(C$, 'clearAlignmentSeqRep$', function () {
if (this.viewport.getAlignment$().hasSeqrep$()) {
this.viewport.getAlignment$().setSeqrep$jalview_datamodel_SequenceI(null);
$I$(17,"Refresh$java_awt_Component$S",[this, this.viewport.getSequenceSetId$()]);
this.alignPanel.updateAnnotation$();
this.alignPanel.paintAlignment$Z$Z(true, true);
}});

Clazz.newMeth(C$, 'createGroup_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.avc.createGroup$()) {
if (this.applyAutoAnnotationSettings.isSelected$()) {
this.alignPanel.updateAnnotation$Z$Z(true, false);
}this.alignPanel.alignmentChanged$();
}});

Clazz.newMeth(C$, 'unGroup_actionPerformed$java_awt_event_ActionEvent', function (e) {
if (this.avc.unGroup$()) {
this.alignPanel.alignmentChanged$();
}});

Clazz.newMeth(C$, 'setDisplayedView$jalview_gui_AlignmentPanel', function (alignmentPanel) {
if (!this.viewport.getSequenceSetId$().equals$O(alignmentPanel.av.getSequenceSetId$())) {
throw Clazz.new_([$I$(11).getString$S("error.implementation_error_cannot_show_view_alignment_frame")],$I$(116,1).c$$S);
}if (this.tabbedPane != null  && this.tabbedPane.getTabCount$() > 0  && this.alignPanels.indexOf$O(alignmentPanel) != this.tabbedPane.getSelectedIndex$() ) {
this.tabbedPane.setSelectedIndex$I(this.alignPanels.indexOf$O(alignmentPanel));
}});

Clazz.newMeth(C$, 'setAnnotationsVisibility$Z$Z$Z', function (visible, forSequences, forAlignment) {
var anns=this.alignPanel.getAlignment$().getAlignmentAnnotation$();
if (anns == null ) {
return;
}for (var aa, $aa = 0, $$aa = anns; $aa<$$aa.length&&((aa=($$aa[$aa])),1);$aa++) {
if (aa.annotations == null ) {
continue;
}var $apply=(aa.sequenceRef == null  && forAlignment ) || (aa.sequenceRef != null  && forSequences ) ;
if ($apply) {
aa.visible=visible;
}}
this.alignPanel.validateAnnotationDimensions$Z(true);
this.alignPanel.alignmentChanged$();
});

Clazz.newMeth(C$, 'sortAnnotations_actionPerformed$', function () {
this.alignPanel.av.setSortAnnotationsBy$jalview_analysis_AnnotationSorter_SequenceAnnotationOrder(this.getAnnotationSortOrder$());
this.alignPanel.av.setShowAutocalculatedAbove$Z(this.isShowAutoCalculatedAbove$());
this.alignPanel.paintAlignment$Z$Z(false, false);
});

Clazz.newMeth(C$, 'getAlignPanels$', function () {
return this.alignPanels;
});

Clazz.newMeth(C$, 'viewAsCdna_actionPerformed$', function () {
var alignment=this.getViewport$().getAlignment$();
var mappings=alignment.getCodonFrames$();
if (mappings == null ) {
return;
}var cdnaSeqs=Clazz.new_($I$(1,1));
for (var aaSeq, $aaSeq = alignment.getSequences$().iterator$(); $aaSeq.hasNext$()&&((aaSeq=($aaSeq.next$())),1);) {
for (var acf, $acf = mappings.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
var dnaSeq=acf.getDnaForAaSeq$jalview_datamodel_SequenceI(aaSeq.getDatasetSequence$());
if (dnaSeq != null ) {
var newSeq=Clazz.new_($I$(54,1).c$$jalview_datamodel_SequenceI,[dnaSeq]);
newSeq.setDatasetSequence$jalview_datamodel_SequenceI(dnaSeq);
cdnaSeqs.add$O(newSeq);
}}
}
if (cdnaSeqs.size$() == 0) {
return;
}var cdna=Clazz.new_([cdnaSeqs.toArray$OA(Clazz.array($I$(47), [cdnaSeqs.size$()]))],$I$(55,1).c$$jalview_datamodel_SequenceIA);
var alignFrame=Clazz.new_(C$.c$$jalview_datamodel_AlignmentI$I$I,[cdna, 700, 500]);
cdna.alignAs$jalview_datamodel_AlignmentI(alignment);
var newtitle="cDNA " + $I$(11).getString$S("label.for") + " " + this.title ;
$I$(8).addInternalFrame$javax_swing_JInternalFrame$S$I$I(alignFrame, newtitle, 700, 500);
});

Clazz.newMeth(C$, 'showComplement_actionPerformed$Z', function (show) {
var sf=this.getSplitViewContainer$();
if (sf != null ) {
sf.setComplementVisible$O$Z(this, show);
}});

Clazz.newMeth(C$, 'showReverse_actionPerformed$Z', function (complement) {
var al=null;
try {
var dna=Clazz.new_([this.viewport, this.viewport.getViewAsVisibleContigs$Z(true)],$I$(100,1).c$$jalview_api_AlignViewportI$java_util_Iterator);
al=dna.reverseCdna$Z(complement);
this.viewport.addAlignment$jalview_datamodel_AlignmentI$S(al, "");
this.addHistoryItem$jalview_commands_CommandI(Clazz.new_([$I$(11).getString$S("label.add_sequences"), $I$(59).PASTE, al.getSequencesArray$(), 0, al.getWidth$(), this.viewport.getAlignment$()],$I$(58,1).c$$S$jalview_commands_EditCommand_Action$jalview_datamodel_SequenceIA$I$I$jalview_datamodel_AlignmentI));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S(ex.getMessage$());
return;
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'runGroovy_actionPerformed$', function () {
$I$(4).setCurrentAlignFrame$jalview_gui_AlignFrame(this);
var console=$I$(8).getGroovyConsole$();
if (console != null ) {
try {
console.runScript$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S((ex.toString()));
$I$(28,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(8).desktop, $I$(11).getString$S("label.couldnt_run_groovy_script"), $I$(11).getString$S("label.groovy_support_failed"), 0]);
} else {
throw ex;
}
}
} else {
System.err.println$S("Can\'t run Groovy script as console not found");
}});

Clazz.newMeth(C$, 'hideFeatureColumns$S$Z', function (featureType, columnsContaining) {
var notForHiding=this.avc.markColumnsContainingFeatures$Z$Z$Z$S(columnsContaining, false, false, featureType);
if (notForHiding) {
if (this.avc.markColumnsContainingFeatures$Z$Z$Z$S(!columnsContaining, false, false, featureType)) {
this.getViewport$().hideSelectedColumns$();
return true;
}}return false;
});

Clazz.newMeth(C$, 'selectHighlightedColumns_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
this.avc.markHighlightedColumns$Z$Z$Z((actionEvent.getModifiers$() & 8) != 0, true, (actionEvent.getModifiers$() & (6)) != 0);
});

Clazz.newMeth(C$, 'buildColourMenu$', function () {
this.colourMenu.removeAll$();
this.colourMenu.add$javax_swing_JMenuItem(this.applyToAllGroups);
this.colourMenu.add$javax_swing_JMenuItem(this.textColour);
this.colourMenu.addSeparator$();
var bg=$I$(21,"addMenuItems$javax_swing_JMenu$jalview_gui_ColourMenuHelper_ColourChangeListener$jalview_datamodel_AnnotatedCollectionI$Z",[this.colourMenu, this, this.viewport.getAlignment$(), false]);
this.colourMenu.add$javax_swing_JMenuItem(this.annotationColour);
bg.add$javax_swing_AbstractButton(this.annotationColour);
this.colourMenu.addSeparator$();
this.colourMenu.add$javax_swing_JMenuItem(this.conservationMenuItem);
this.colourMenu.add$javax_swing_JMenuItem(this.modifyConservation);
this.colourMenu.add$javax_swing_JMenuItem(this.abovePIDThreshold);
this.colourMenu.add$javax_swing_JMenuItem(this.modifyPID);
var colourScheme=this.viewport.getGlobalColourScheme$();
$I$(21).setColourSelected$javax_swing_JMenu$jalview_schemes_ColourSchemeI(this.colourMenu, colourScheme);
});

Clazz.newMeth(C$, 'openTreePcaDialog$', function () {
if (this.alignPanel.getCalculationDialog$() == null ) {
Clazz.new_($I$(117,1).c$$jalview_gui_AlignFrame,[this]);
}});

Clazz.newMeth(C$, 'loadVcf_actionPerformed$', function () {
var chooser=Clazz.new_([$I$(7).getProperty$S("LAST_DIRECTORY")],$I$(26,1).c$$S);
chooser.setFileView$javax_swing_filechooser_FileView(Clazz.new_($I$(27,1)));
chooser.setDialogTitle$S($I$(11).getString$S("label.load_vcf_file"));
chooser.setToolTipText$S($I$(11).getString$S("label.load_vcf_file"));
var us=this;
chooser.setResponseHandler$O$Runnable(new Integer(0), ((P$.AlignFrame$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "AlignFrame$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var choice=this.$finals$.chooser.getSelectedFile$().getPath$();
$I$(7).setProperty$S$S("LAST_DIRECTORY", choice);
var seqs=this.b$['jalview.gui.AlignFrame'].viewport.getAlignment$().getSequencesArray$();
Clazz.new_($I$(118,1).c$$S,[choice]).loadVCF$jalview_datamodel_SequenceIA$jalview_api_AlignViewControllerGuiI(seqs, this.$finals$.us);
});
})()
), Clazz.new_(P$.AlignFrame$26.$init$,[this, {chooser:chooser,us:us}])));
chooser.showOpenDialog$java_awt_Component(null);
});

Clazz.newMeth(C$, 'setFeatureSettingsGeometry$java_awt_Rectangle', function (bounds) {
this.lastFeatureSettingsBounds=bounds;
});

Clazz.newMeth(C$, 'getFeatureSettingsGeometry$', function () {
return this.lastFeatureSettingsBounds;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
