(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'jalview.datamodel.PDBEntry','jalview.datamodel.SequenceI',['jalview.datamodel.PDBEntry','.Type'],'jalview.gui.PymolBindingModel','Thread','javax.swing.event.InternalFrameAdapter','jalview.gui.ProgressBar','StringBuilder','java.util.ArrayList','java.io.File','jalview.bin.Console','jalview.util.MessageManager','jalview.io.DataSourceType','jalview.gui.Desktop','jalview.gui.JvOptionPane',['jalview.gui.StructureViewer','.ViewerType'],'javax.swing.JMenuItem']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PymolViewer", null, 'jalview.gui.StructureViewerBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.writeFeatures=null;
},1);

C$.$fields$=[['S',['pymolSessionFile'],'O',['binding','jalview.gui.PymolBindingModel','writeFeatures','javax.swing.JMenuItem']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setDefaultCloseOperation$I(0);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$O$jalview_gui_AlignmentPanel',  function (pdb, seqs, object, ap) {
C$.c$.apply(this, []);
p$1.openNewPymol$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [ap, Clazz.array($I$(1), -1, [pdb]), Clazz.array($I$(2), -2, [seqs])]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntryA$Z$jalview_datamodel_SequenceIAA$jalview_gui_AlignmentPanel',  function (pe, alignAdded, seqs, ap) {
C$.c$.apply(this, []);
this.setAlignAddedStructures$Z(alignAdded);
p$1.openNewPymol$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [ap, pe, seqs]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_StructureViewerModel$jalview_gui_AlignmentPanel$S$S',  function (viewerModel, alignPanel, sessionFile, vid) {
C$.c$.apply(this, []);
this.setViewId$S(vid);
this.pymolSessionFile=sessionFile;
var pdbData=viewerModel.getFileData$();
var pdbArray=Clazz.array($I$(1), [pdbData.size$()]);
var seqsArray=Clazz.array($I$(2), [pdbData.size$(), null]);
var i=0;
for (var data, $data = pdbData.values$().iterator$(); $data.hasNext$()&&((data=($data.next$())),1);) {
var pdbentry=Clazz.new_([data.getPdbId$(), null, $I$(3).PDB, data.getFilePath$()],$I$(1,1).c$$S$S$jalview_datamodel_PDBEntry_Type$S);
pdbArray[i]=pdbentry;
var sequencesForPdb=data.getSeqList$();
seqsArray[i]=sequencesForPdb.toArray$OA(Clazz.array($I$(2), [sequencesForPdb.size$()]));
++i;
}
p$1.openNewPymol$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [alignPanel, pdbArray, seqsArray]);
if (viewerModel.isColourByViewer$()) {
this.binding.setColourBySequence$Z(false);
this.seqColour.setSelected$Z(false);
this.viewerColour.setSelected$Z(true);
} else if (viewerModel.isColourWithAlignPanel$()) {
this.binding.setColourBySequence$Z(true);
this.seqColour.setSelected$Z(true);
this.viewerColour.setSelected$Z(false);
}}, 1);

Clazz.newMeth(C$, 'openNewPymol$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA',  function (ap, pe, seqs) {
this.createProgressBar$();
this.binding=Clazz.new_([this, ap.getStructureSelectionManager$(), pe, seqs],$I$(4,1).c$$jalview_gui_StructureViewerBase$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA);
this.addAlignmentPanel$jalview_gui_AlignmentPanel(ap);
this.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(ap);
if (pe.length > 1) {
this.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
}this.binding.setColourBySequence$Z(true);
this.setSize$I$I(500, 150);
this.initMenus$();
this.viewerActionMenu.setText$S("PyMOL");
this.updateTitleAndMenus$();
this.addingStructures=false;
this.worker=Clazz.new_($I$(5,1).c$$Runnable,[this]);
this.worker.start$();
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.PymolViewer$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PymolViewer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent',  function (internalFrameEvent) {
this.b$['jalview.gui.StructureViewerBase'].closeViewer$Z.apply(this.b$['jalview.gui.StructureViewerBase'], [false]);
});
})()
), Clazz.new_($I$(6,1),[this, null],P$.PymolViewer$1)));
}, p$1);

Clazz.newMeth(C$, 'createProgressBar$',  function () {
if (this.getProgressIndicator$() == null ) {
this.setProgressIndicator$jalview_gui_IProgressIndicator(Clazz.new_($I$(7,1).c$$javax_swing_JPanel$javax_swing_JLabel,[this.statusPanel, this.statusBar]));
}});

Clazz.newMeth(C$, 'run$',  function () {
var errormsgs=Clazz.new_($I$(8,1).c$$I,[128]);
var filePDB=Clazz.new_($I$(9,1));
var filePDBpos=Clazz.new_($I$(9,1));
var curfiles=this.binding.getStructureFiles$();
for (var pi=0; pi < this.binding.getPdbCount$(); pi++) {
var file=null;
var thePdbEntry=this.binding.getPdbEntry$I(pi);
if (thePdbEntry.getFile$() == null ) {
file=this.fetchPdbFile$jalview_datamodel_PDBEntry(thePdbEntry);
if (file == null ) {
errormsgs.append$S("'" + thePdbEntry.getId$() + "' " );
}} else {
file=Clazz.new_([thePdbEntry.getFile$()],$I$(10,1).c$$S).getAbsoluteFile$().getPath$();
}if (file != null ) {
filePDB.add$O(thePdbEntry);
filePDBpos.add$O(Integer.valueOf$I(pi));
}}
if (!filePDB.isEmpty$()) {
this.binding.setFinishedInit$Z(false);
if (!this.addingStructures) {
try {
this.initPymol$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(11).error$S$Throwable("Couldn\'t open PyMOL viewer!", ex);
return;
} else {
throw ex;
}
}
}if (!this.binding.isViewerRunning$()) {
return;
}var num=-1;
for (var pe, $pe = filePDB.iterator$(); $pe.hasNext$()&&((pe=($pe.next$())),1);) {
++num;
if (pe.getFile$() != null ) {
try {
var pos=filePDBpos.get$I(num).intValue$();
var startTime=this.startProgressBar$S(this.getViewerName$() + " " + $I$(12).getString$S("status.opening_file_for") + " " + pe.getId$() );
this.binding.openFile$jalview_datamodel_PDBEntry(pe);
this.binding.addSequence$I$jalview_datamodel_SequenceIA(pos, this.binding.getSequence$()[pos]);
var fl=Clazz.new_([pe.getFile$()],$I$(10,1).c$$S);
var protocol=$I$(13).URL;
try {
if (fl.exists$()) {
protocol=$I$(13).FILE;
}} catch (e) {
} finally {
this.stopProgressBar$S$J("", startTime);
}
var pdb=this.binding.getSsm$().setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(this.binding.getSequence$()[pos], this.binding.getChains$()[pos], pe.getFile$(), protocol, this.getProgressIndicator$());
this.binding.stashFoundChains$jalview_io_StructureFile$S(pdb, pe.getFile$());
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(11,"error$S$Throwable",["Couldn't open " + pe.getFile$() + " in " + this.getViewerName$() + "!" , ex]);
} else {
throw ex;
}
} finally {
}
}}
this.binding.refreshGUI$();
this.binding.setFinishedInit$Z(true);
this.binding.setLoadingFromArchive$Z(false);
var fr=this.getBinding$().getFeatureRenderer$jalview_api_AlignmentViewPanel(null);
if (fr != null ) {
fr.featuresAdded$();
}for (var ap, $ap = this._colourwith.iterator$(); $ap.hasNext$()&&((ap=($ap.next$())),1);) {
this.binding.updateColours$O(ap);
}
if (this.alignAddedStructures) {
Clazz.new_([((P$.PymolViewer$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PymolViewer$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.StructureViewerBase'].alignStructsWithAllAlignPanels$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
});
})()
), Clazz.new_(P$.PymolViewer$2.$init$,[this, null]))],$I$(5,1).c$$Runnable).start$();
}this.addingStructures=false;
}this._started=false;
this.worker=null;
});

Clazz.newMeth(C$, 'initPymol$',  function () {
$I$(14,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[this, this.binding.getViewerTitle$S$Z(this.getViewerName$(), true), this.getBounds$().width, this.getBounds$().height]);
if (!this.binding.launchPymol$()) {
$I$(15,"showMessageDialog$java_awt_Component$S$S$I",[$I$(14).desktop, $I$(12,"formatMessage$S$OA",["label.open_viewer_failed", Clazz.array(java.lang.Object, -1, [this.getViewerName$()])]), $I$(12).getString$S("label.error_loading_file"), 0]);
this.binding.closeViewer$Z(true);
this.dispose$();
return;
}if (this.pymolSessionFile != null ) {
var opened=this.binding.openSession$S(this.pymolSessionFile);
if (!opened) {
$I$(11).error$S("An error occurred opening PyMOL session file " + this.pymolSessionFile);
}}});

Clazz.newMeth(C$, 'getBinding$',  function () {
return this.binding;
});

Clazz.newMeth(C$, 'getViewerType$',  function () {
return $I$(16).PYMOL;
});

Clazz.newMeth(C$, 'getViewerName$',  function () {
return "PyMOL";
});

Clazz.newMeth(C$, 'initMenus$',  function () {
C$.superclazz.prototype.initMenus$.apply(this, []);
this.savemenu.setVisible$Z(false);
this.viewMenu.add$javax_swing_JMenuItem(this.fitToWindow);
this.writeFeatures=Clazz.new_([$I$(12).getString$S("label.create_viewer_attributes")],$I$(17,1).c$$S);
this.writeFeatures.setToolTipText$S($I$(12).getString$S("label.create_viewer_attributes_tip"));
this.writeFeatures.addActionListener$java_awt_event_ActionListener(((P$.PymolViewer$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "PymolViewer$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.PymolViewer'].sendFeaturesToPymol$.apply(this.b$['jalview.gui.PymolViewer'], []);
});
})()
), Clazz.new_(P$.PymolViewer$3.$init$,[this, null])));
this.viewerActionMenu.add$javax_swing_JMenuItem(this.writeFeatures);
});

Clazz.newMeth(C$, 'buildActionMenu$',  function () {
C$.superclazz.prototype.buildActionMenu$.apply(this, []);
this.viewerActionMenu.add$javax_swing_JMenuItem(this.writeFeatures);
});

Clazz.newMeth(C$, 'sendFeaturesToPymol$',  function () {
var count=this.binding.sendFeaturesToViewer$jalview_api_AlignmentViewPanel(this.getAlignmentPanel$());
this.statusBar.setText$S($I$(12,"formatMessage$S$OA",["label.attributes_set", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(count), this.getViewerName$()])]));
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:35 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
