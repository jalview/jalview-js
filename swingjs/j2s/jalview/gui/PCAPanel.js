(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.awt.print.PrinterJob','jalview.gui.ProgressBar','javax.swing.event.InternalFrameAdapter','jalview.analysis.scoremodels.ScoreModels','jalview.viewmodel.PCAModel','jalview.gui.PaintRefresher','jalview.gui.RotatableCanvas','jalview.util.MessageManager','jalview.gui.JalviewColourChooser','jalview.gui.OOMWarning','jalview.gui.Desktop','java.awt.Dimension',['jalview.math.RotatableMatrix','.Axis'],'jalview.gui.CutAndPasteTransfer',['jalview.gui.PCAPanel','.PCAPrinter'],'jalview.bin.Cache','jalview.datamodel.Alignment','jalview.gui.AlignFrame','jalview.gui.ImageExporter','javax.swing.ButtonGroup','javax.swing.JRadioButtonMenuItem']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PCAPanel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.jbgui.GPCAPanel', ['Runnable', 'jalview.gui.IProgressIndicator']);
C$.$classes$=[['PCAPrinter',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.top=0;
},1);

C$.$fields$=[['Z',['working'],'I',['top'],'O',['rc','jalview.gui.RotatableCanvas','ap','jalview.gui.AlignmentPanel','av','jalview.viewmodel.AlignmentViewport','pcaModel','jalview.viewmodel.PCAModel','progressBar','jalview.gui.IProgressIndicator']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$S$jalview_api_analysis_SimilarityParamsI', function (alignPanel, modelName, params) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.av=alignPanel.av;
this.ap=alignPanel;
var nucleotide=this.av.getAlignment$().isNucleotide$();
this.progressBar=Clazz.new_($I$(2,1).c$$javax_swing_JPanel$javax_swing_JLabel,[this.statusPanel, this.statusBar]);
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.PCAPanel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PCAPanel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosed$javax_swing_event_InternalFrameEvent', function (e) {
this.b$['jalview.gui.PCAPanel'].close_actionPerformed$.apply(this.b$['jalview.gui.PCAPanel'], []);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.PCAPanel$1)));
var selected=this.av.getSelectionGroup$() != null  && this.av.getSelectionGroup$().getSize$() > 0 ;
var seqstrings=this.av.getAlignmentView$Z(selected);
var seqs;
if (!selected) {
seqs=this.av.getAlignment$().getSequencesArray$();
} else {
seqs=this.av.getSelectionGroup$().getSequencesInOrder$jalview_datamodel_AlignmentI(this.av.getAlignment$());
}var scoreModel=$I$(4).getInstance$().getScoreModel$S$jalview_api_AlignmentViewPanel(modelName, this.ap);
this.setPcaModel$jalview_viewmodel_PCAModel(Clazz.new_($I$(5,1).c$$jalview_datamodel_AlignmentView$jalview_datamodel_SequenceIA$Z$jalview_api_analysis_ScoreModelI$jalview_api_analysis_SimilarityParamsI,[seqstrings, seqs, nucleotide, scoreModel, params]));
$I$(6,"Register$java_awt_Component$S",[this, this.av.getSequenceSetId$()]);
this.setRotatableCanvas$jalview_gui_RotatableCanvas(Clazz.new_($I$(7,1).c$$jalview_gui_AlignmentPanel,[alignPanel]));
this.getContentPane$().add$java_awt_Component$O(this.getRotatableCanvas$(), "Center");
this.addKeyListener$java_awt_event_KeyListener(this.getRotatableCanvas$());
this.validate$();
}, 1);

Clazz.newMeth(C$, 'close_actionPerformed$', function () {
this.setPcaModel$jalview_viewmodel_PCAModel(null);
});

Clazz.newMeth(C$, 'bgcolour_actionPerformed$', function () {
var ttl=$I$(8).getString$S("label.select_background_colour");
var listener=((P$.PCAPanel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PCAPanel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.JalviewColourChooser','jalview.gui.JalviewColourChooser.ColourChooserListener']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'colourSelected$java_awt_Color', function (c) {
this.b$['jalview.gui.PCAPanel'].rc.setBgColour$java_awt_Color(c);
this.b$['jalview.gui.PCAPanel'].rc.repaint$();
});
})()
), Clazz.new_(P$.PCAPanel$2.$init$,[this, null]));
$I$(9,"showColourChooser$java_awt_Component$S$java_awt_Color$jalview_gui_JalviewColourChooser_ColourChooserListener",[this, ttl, this.rc.getBgColour$(), listener]);
});

Clazz.newMeth(C$, 'run$', function () {
this.working=true;
var progId=System.currentTimeMillis$();
var progress=this;
var message=$I$(8).getString$S("label.pca_recalculating");
if (this.getParent$() == null ) {
progress=this.ap.alignFrame;
message=$I$(8).getString$S("label.pca_calculating");
}progress.setProgressBar$S$J(message, progId);
try {
this.getPcaModel$().calculate$();
this.xCombobox.setSelectedIndex$I(0);
this.yCombobox.setSelectedIndex$I(1);
this.zCombobox.setSelectedIndex$I(2);
this.getPcaModel$().updateRc$jalview_api_RotatableCanvasI(this.getRotatableCanvas$());
this.setTop$I(this.getPcaModel$().getTop$());
} catch (er) {
if (Clazz.exceptionOf(er,"OutOfMemoryError")){
Clazz.new_($I$(10,1).c$$S$OutOfMemoryError,["calculating PCA", er]);
this.working=false;
return;
} else {
throw er;
}
} finally {
progress.setProgressBar$S$J("", progId);
}
this.repaint$();
if (this.getParent$() == null ) {
$I$(11,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[this, $I$(8,"formatMessage$S$OA",["label.calc_title", ["PCA", this.getPcaModel$().getScoreModelName$()]]), 475, 450]);
this.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(12,1).c$$I$I,[470, 250]));
}this.working=false;
});

Clazz.newMeth(C$, 'doDimensionChange$', function () {
if (this.getTop$() == 0) {
return;
}var dim1=this.getTop$() - this.xCombobox.getSelectedIndex$();
var dim2=this.getTop$() - this.yCombobox.getSelectedIndex$();
var dim3=this.getTop$() - this.zCombobox.getSelectedIndex$();
this.getPcaModel$().updateRcView$I$I$I(dim1, dim2, dim3);
this.getRotatableCanvas$().resetView$();
});

Clazz.newMeth(C$, 'setSelectedDimensionIndex$I$jalview_math_RotatableMatrix_Axis', function (index, axis) {
switch (axis) {
case $I$(13).X:
this.xCombobox.setSelectedIndex$I(index);
break;
case $I$(13).Y:
this.yCombobox.setSelectedIndex$I(index);
break;
case $I$(13).Z:
this.zCombobox.setSelectedIndex$I(index);
break;
default:
}
});

Clazz.newMeth(C$, 'outputValues_actionPerformed$', function () {
var cap=Clazz.new_($I$(14,1));
try {
cap.setText$S(this.getPcaModel$().getDetails$());
$I$(11,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[cap, $I$(8).getString$S("label.pca_details"), 500, 500]);
} catch (oom) {
if (Clazz.exceptionOf(oom,"OutOfMemoryError")){
Clazz.new_($I$(10,1).c$$S$OutOfMemoryError,["opening PCA details", oom]);
cap.dispose$();
} else {
throw oom;
}
}
});

Clazz.newMeth(C$, 'showLabels_actionPerformed$', function () {
this.getRotatableCanvas$().showLabels$Z(this.showLabels.getState$());
});

Clazz.newMeth(C$, 'print_actionPerformed$', function () {
var printer=Clazz.new_($I$(15,1),[this, null]);
printer.start$();
});

Clazz.newMeth(C$, 'originalSeqData_actionPerformed$', function () {
if (this.getPcaModel$().getInputData$() == null ) {
$I$(16).log.info$O("Unexpected call to originalSeqData_actionPerformed - should have hidden this menu action.");
return;
}var gc="-";
try {
gc=this.av.getGapCharacter$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
var alAndColsel=this.getPcaModel$().getInputData$().getAlignmentAndHiddenColumns$C(gc);
if (alAndColsel != null  && alAndColsel[0] != null  ) {
var al=Clazz.new_($I$(17,1).c$$jalview_datamodel_SequenceIA,[alAndColsel[0]]);
var dataset=(this.av != null  && this.av.getAlignment$() != null  ) ? this.av.getAlignment$().getDataset$() : null;
if (dataset != null ) {
al.setDataset$jalview_datamodel_AlignmentI(dataset);
}if (true) {
var af=Clazz.new_($I$(18,1).c$$jalview_datamodel_AlignmentI$jalview_datamodel_HiddenColumns$I$I,[al, alAndColsel[1], 700, 500]);
$I$(11,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[af, $I$(8,"formatMessage$S$SA",["label.original_data_for_params", Clazz.array(String, -1, [this.title])]), 700, 500]);
}}});

Clazz.newMeth(C$, 'makePCAImage$jalview_util_ImageMaker_TYPE', function (type) {
var width=this.getRotatableCanvas$().getWidth$();
var height=this.getRotatableCanvas$().getHeight$();
var writer=((P$.PCAPanel$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PCAPanel$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.ImageExporter','jalview.gui.ImageExporter.ImageWriterI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'exportImage$java_awt_Graphics', function (g) {
var canvas=this.b$['jalview.gui.PCAPanel'].getRotatableCanvas$.apply(this.b$['jalview.gui.PCAPanel'], []);
canvas.drawBackground$java_awt_Graphics(g);
canvas.drawScene$java_awt_Graphics(g);
if (canvas.drawAxes) {
canvas.drawAxes$java_awt_Graphics(g);
}});
})()
), Clazz.new_(P$.PCAPanel$3.$init$,[this, null]));
var pca=$I$(8).getString$S("label.pca");
var exporter=Clazz.new_($I$(19,1).c$$jalview_gui_ImageExporter_ImageWriterI$jalview_gui_IProgressIndicator$jalview_util_ImageMaker_TYPE$S,[writer, null, type, pca]);
exporter.doExport$java_io_File$java_awt_Component$I$I$S(null, this, width, height, pca);
});

Clazz.newMeth(C$, 'viewMenu_menuSelected$', function () {
this.buildAssociatedViewMenu$();
});

Clazz.newMeth(C$, 'buildAssociatedViewMenu$', function () {
var aps=$I$(6,"getAssociatedPanels$S",[this.av.getSequenceSetId$()]);
if (aps.length == 1 && this.getRotatableCanvas$().av === aps[0].av  ) {
this.associateViewsMenu.setVisible$Z(false);
return;
}this.associateViewsMenu.setVisible$Z(true);
if ((Clazz.instanceOf(this.viewMenu.getItem$I(this.viewMenu.getItemCount$() - 2), "javax.swing.JMenuItem"))) {
this.viewMenu.insertSeparator$I(this.viewMenu.getItemCount$() - 1);
}this.associateViewsMenu.removeAll$();
var item;
var buttonGroup=Clazz.new_($I$(20,1));
var iSize=aps.length;
for (var i=0; i < iSize; i++) {
var panel=aps[i];
item=Clazz.new_([panel.av.getViewName$(), panel.av === this.getRotatableCanvas$().av ],$I$(21,1).c$$S$Z);
buttonGroup.add$javax_swing_AbstractButton(item);
item.addActionListener$java_awt_event_ActionListener(((P$.PCAPanel$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "PCAPanel$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['jalview.gui.PCAPanel'].selectAssociatedView$jalview_gui_AlignmentPanel.apply(this.b$['jalview.gui.PCAPanel'], [this.$finals$.panel]);
});
})()
), Clazz.new_(P$.PCAPanel$4.$init$,[this, {panel:panel}])));
this.associateViewsMenu.add$javax_swing_JMenuItem(item);
}
var itemf=Clazz.new_($I$(21,1).c$$S,["All Views"]);
buttonGroup.add$javax_swing_AbstractButton(itemf);
itemf.setSelected$Z(this.getRotatableCanvas$().isApplyToAllViews$());
itemf.addActionListener$java_awt_event_ActionListener(((P$.PCAPanel$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "PCAPanel$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (evt) {
this.b$['jalview.gui.PCAPanel'].getRotatableCanvas$.apply(this.b$['jalview.gui.PCAPanel'], []).setApplyToAllViews$Z(this.$finals$.itemf.isSelected$());
});
})()
), Clazz.new_(P$.PCAPanel$5.$init$,[this, {itemf:itemf}])));
this.associateViewsMenu.add$javax_swing_JMenuItem(itemf);
});

Clazz.newMeth(C$, 'outputPoints_actionPerformed$', function () {
var cap=Clazz.new_($I$(14,1));
try {
cap.setText$S(this.getPcaModel$().getPointsasCsv$Z$I$I$I(false, this.xCombobox.getSelectedIndex$(), this.yCombobox.getSelectedIndex$(), this.zCombobox.getSelectedIndex$()));
$I$(11,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[cap, $I$(8,"formatMessage$S$SA",["label.points_for_params", Clazz.array(String, -1, [this.getTitle$()])]), 500, 500]);
} catch (oom) {
if (Clazz.exceptionOf(oom,"OutOfMemoryError")){
Clazz.new_($I$(10,1).c$$S$OutOfMemoryError,["exporting PCA points", oom]);
cap.dispose$();
} else {
throw oom;
}
}
});

Clazz.newMeth(C$, 'outputProjPoints_actionPerformed$', function () {
var cap=Clazz.new_($I$(14,1));
try {
cap.setText$S(this.getPcaModel$().getPointsasCsv$Z$I$I$I(true, this.xCombobox.getSelectedIndex$(), this.yCombobox.getSelectedIndex$(), this.zCombobox.getSelectedIndex$()));
$I$(11,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[cap, $I$(8,"formatMessage$S$SA",["label.transformed_points_for_params", Clazz.array(String, -1, [this.getTitle$()])]), 500, 500]);
} catch (oom) {
if (Clazz.exceptionOf(oom,"OutOfMemoryError")){
Clazz.new_($I$(10,1).c$$S$OutOfMemoryError,["exporting transformed PCA points", oom]);
cap.dispose$();
} else {
throw oom;
}
}
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

Clazz.newMeth(C$, 'resetButton_actionPerformed$', function () {
var t=this.getTop$();
this.setTop$I(0);
this.xCombobox.setSelectedIndex$I(0);
this.yCombobox.setSelectedIndex$I(1);
this.setTop$I(t);
this.zCombobox.setSelectedIndex$I(2);
});

Clazz.newMeth(C$, 'isWorking$', function () {
return this.working;
});

Clazz.newMeth(C$, 'getSelectedDimensionIndex$jalview_math_RotatableMatrix_Axis', function (axis) {
switch (axis) {
case $I$(13).X:
return this.xCombobox.getSelectedIndex$();
case $I$(13).Y:
return this.yCombobox.getSelectedIndex$();
default:
return this.zCombobox.getSelectedIndex$();
}
});

Clazz.newMeth(C$, 'setShowLabels$Z', function (show) {
this.showLabels.setSelected$Z(show);
});

Clazz.newMeth(C$, 'setInputData$jalview_datamodel_AlignmentView', function (data) {
this.getPcaModel$().setInputData$jalview_datamodel_AlignmentView(data);
this.originalSeqData.setVisible$Z(data != null );
});

Clazz.newMeth(C$, 'getAlignViewport$', function () {
return this.av;
});

Clazz.newMeth(C$, 'getPcaModel$', function () {
return this.pcaModel;
});

Clazz.newMeth(C$, 'setPcaModel$jalview_viewmodel_PCAModel', function (pcaModel) {
this.pcaModel=pcaModel;
});

Clazz.newMeth(C$, 'getRotatableCanvas$', function () {
return this.rc;
});

Clazz.newMeth(C$, 'setRotatableCanvas$jalview_gui_RotatableCanvas', function (rc) {
this.rc=rc;
});

Clazz.newMeth(C$, 'getTop$', function () {
return this.top;
});

Clazz.newMeth(C$, 'setTop$I', function (top) {
this.top=top;
});

Clazz.newMeth(C$, 'selectAssociatedView$jalview_gui_AlignmentPanel', function (panel) {
this.getRotatableCanvas$().setApplyToAllViews$Z(false);
this.ap=panel;
this.av=panel.av;
this.getRotatableCanvas$().av=panel.av;
this.getRotatableCanvas$().ap=panel;
$I$(6,"Register$java_awt_Component$S",[this, panel.av.getSequenceSetId$()]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PCAPanel, "PCAPrinter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread', 'java.awt.print.Printable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
var printJob=$I$(1).getPrinterJob$();
var defaultPage=printJob.defaultPage$();
var pf=printJob.pageDialog$java_awt_print_PageFormat(defaultPage);
if (defaultPage === pf ) {
return;
}printJob.setPrintable$java_awt_print_Printable$java_awt_print_PageFormat(this, pf);
if (printJob.printDialog$()) {
try {
printJob.print$();
} catch (PrintException) {
if (Clazz.exceptionOf(PrintException,"Exception")){
PrintException.printStackTrace$();
} else {
throw PrintException;
}
}
}});

Clazz.newMeth(C$, 'print$java_awt_Graphics$java_awt_print_PageFormat$I', function (pg, pf, pi) {
pg.translate$I$I((pf.getImageableX$()|0), (pf.getImageableY$()|0));
this.this$0.getRotatableCanvas$.apply(this.this$0, []).drawBackground$java_awt_Graphics(pg);
this.this$0.getRotatableCanvas$.apply(this.this$0, []).drawScene$java_awt_Graphics(pg);
if (this.this$0.getRotatableCanvas$.apply(this.this$0, []).drawAxes) {
this.this$0.getRotatableCanvas$.apply(this.this$0, []).drawAxes$java_awt_Graphics(pg);
}if (pi == 0) {
return 0;
} else {
return 1;
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
