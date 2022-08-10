(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'javax.swing.JMenuItem','jalview.util.MessageManager','javax.swing.JMenu','java.awt.event.MouseAdapter','java.util.Collections','jalview.datamodel.PDBEntry','jalview.datamodel.SequenceI','jalview.gui.ProgressBar','Thread','javax.swing.event.InternalFrameAdapter','jalview.gui.JalviewChimeraBindingModel',['jalview.datamodel.PDBEntry','.Type'],'jalview.gui.Desktop','jalview.gui.JvOptionPane','StringBuilder','java.util.ArrayList','java.io.File','jalview.util.Platform','jalview.gui.OOMWarning','jalview.bin.Console','jalview.io.DataSourceType',['jalview.gui.StructureViewer','.ViewerType']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChimeraViewFrame", null, 'jalview.gui.StructureViewerBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chimeraSessionFile=null;
this.myWidth=500;
this.myHeight=150;
this.writeFeatures=null;
this.fetchAttributes=null;
},1);

C$.$fields$=[['I',['myWidth','myHeight'],'S',['chimeraSessionFile'],'O',['jmb','jalview.ext.rbvi.chimera.JalviewChimeraBinding','writeFeatures','javax.swing.JMenuItem','fetchAttributes','javax.swing.JMenu']]]

Clazz.newMeth(C$, 'initMenus$',  function () {
C$.superclazz.prototype.initMenus$.apply(this, []);
this.savemenu.setVisible$Z(false);
this.viewMenu.add$javax_swing_JMenuItem(this.fitToWindow);
this.writeFeatures=Clazz.new_([$I$(2).getString$S("label.create_viewer_attributes")],$I$(1,1).c$$S);
this.writeFeatures.setToolTipText$S($I$(2).getString$S("label.create_viewer_attributes_tip"));
this.writeFeatures.addActionListener$java_awt_event_ActionListener(((P$.ChimeraViewFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ChimeraViewFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['jalview.gui.ChimeraViewFrame'].sendFeaturesToChimera$.apply(this.b$['jalview.gui.ChimeraViewFrame'], []);
});
})()
), Clazz.new_(P$.ChimeraViewFrame$1.$init$,[this, null])));
this.viewerActionMenu.add$javax_swing_JMenuItem(this.writeFeatures);
this.fetchAttributes=Clazz.new_([$I$(2,"formatMessage$S$OA",["label.fetch_viewer_attributes", Clazz.array(java.lang.Object, -1, [this.getViewerName$()])])],$I$(3,1).c$$S);
this.fetchAttributes.setToolTipText$S($I$(2,"formatMessage$S$OA",["label.fetch_viewer_attributes_tip", Clazz.array(java.lang.Object, -1, [this.getViewerName$()])]));
this.fetchAttributes.addMouseListener$java_awt_event_MouseListener(((P$.ChimeraViewFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ChimeraViewFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
this.b$['jalview.gui.ChimeraViewFrame'].buildAttributesMenu$javax_swing_JMenu.apply(this.b$['jalview.gui.ChimeraViewFrame'], [this.b$['jalview.gui.ChimeraViewFrame'].fetchAttributes]);
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.ChimeraViewFrame$2)));
this.viewerActionMenu.add$javax_swing_JMenuItem(this.fetchAttributes);
});

Clazz.newMeth(C$, 'buildActionMenu$',  function () {
C$.superclazz.prototype.buildActionMenu$.apply(this, []);
this.viewerActionMenu.add$javax_swing_JMenuItem(this.writeFeatures);
this.viewerActionMenu.add$javax_swing_JMenuItem(this.fetchAttributes);
});

Clazz.newMeth(C$, 'buildAttributesMenu$javax_swing_JMenu',  function (attributesMenu) {
var atts=this.jmb.getChimeraAttributes$();
attributesMenu.removeAll$();
$I$(5).sort$java_util_List(atts);
for (var attName, $attName = atts.iterator$(); $attName.hasNext$()&&((attName=($attName.next$())),1);) {
var menuItem=Clazz.new_($I$(1,1).c$$S,[attName]);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.ChimeraViewFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ChimeraViewFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.b$['jalview.gui.ChimeraViewFrame'].getBinding$.apply(this.b$['jalview.gui.ChimeraViewFrame'], []).copyStructureAttributesToFeatures$S$jalview_gui_AlignmentPanel(this.$finals$.attName, this.b$['jalview.gui.StructureViewerBase'].getAlignmentPanel$.apply(this.b$['jalview.gui.StructureViewerBase'], [])) > 0) {
this.b$['jalview.gui.StructureViewerBase'].getAlignmentPanel$.apply(this.b$['jalview.gui.StructureViewerBase'], []).getFeatureRenderer$().featuresAdded$();
}});
})()
), Clazz.new_(P$.ChimeraViewFrame$3.$init$,[this, {attName:attName}])));
attributesMenu.add$javax_swing_JMenuItem(menuItem);
}
});

Clazz.newMeth(C$, 'sendFeaturesToChimera$',  function () {
var count=this.jmb.sendFeaturesToViewer$jalview_api_AlignmentViewPanel(this.getAlignmentPanel$());
this.statusBar.setText$S($I$(2,"formatMessage$S$OA",["label.attributes_set", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(count), this.getViewerName$()])]));
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_AlignmentPanel',  function (pdbentry, seq, chains, ap) {
C$.c$.apply(this, []);
p$1.openNewChimera$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [ap, Clazz.array($I$(6), -1, [pdbentry]), Clazz.array($I$(7), -2, [seq])]);
}, 1);

Clazz.newMeth(C$, 'createProgressBar$',  function () {
if (this.getProgressIndicator$() == null ) {
this.setProgressIndicator$jalview_gui_IProgressIndicator(Clazz.new_($I$(8,1).c$$javax_swing_JPanel$javax_swing_JLabel,[this.statusPanel, this.statusBar]));
}});

Clazz.newMeth(C$, 'openNewChimera$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA',  function (ap, pdbentrys, seqs) {
this.createProgressBar$();
this.jmb=this.newBindingModel$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA(ap, pdbentrys, seqs);
this.addAlignmentPanel$jalview_gui_AlignmentPanel(ap);
this.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(ap);
if (pdbentrys.length > 1) {
this.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
}this.jmb.setColourBySequence$Z(true);
this.setSize$I$I(this.myWidth, this.myHeight);
this.initMenus$();
this.addingStructures=false;
this.worker=Clazz.new_($I$(9,1).c$$Runnable,[this]);
this.worker.start$();
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.ChimeraViewFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ChimeraViewFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent',  function (internalFrameEvent) {
this.b$['jalview.gui.StructureViewerBase'].closeViewer$Z.apply(this.b$['jalview.gui.StructureViewerBase'], [false]);
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.ChimeraViewFrame$4)));
}, p$1);

Clazz.newMeth(C$, 'newBindingModel$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA',  function (ap, pdbentrys, seqs) {
return Clazz.new_([this, ap.getStructureSelectionManager$(), pdbentrys, seqs, null],$I$(11,1).c$$jalview_gui_ChimeraViewFrame$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType);
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_StructureViewerModel$jalview_gui_AlignmentPanel$S$S',  function (viewerData, alignPanel, sessionFile, vid) {
C$.c$.apply(this, []);
this.setViewId$S(vid);
this.chimeraSessionFile=sessionFile;
var pdbData=viewerData.getFileData$();
var pdbArray=Clazz.array($I$(6), [pdbData.size$()]);
var seqsArray=Clazz.array($I$(7), [pdbData.size$(), null]);
var i=0;
for (var data, $data = pdbData.values$().iterator$(); $data.hasNext$()&&((data=($data.next$())),1);) {
var pdbentry=Clazz.new_([data.getPdbId$(), null, $I$(12).PDB, data.getFilePath$()],$I$(6,1).c$$S$S$jalview_datamodel_PDBEntry_Type$S);
pdbArray[i]=pdbentry;
var sequencesForPdb=data.getSeqList$();
seqsArray[i]=sequencesForPdb.toArray$OA(Clazz.array($I$(7), [sequencesForPdb.size$()]));
++i;
}
p$1.openNewChimera$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [alignPanel, pdbArray, seqsArray]);
if (viewerData.isColourByViewer$()) {
this.jmb.setColourBySequence$Z(false);
this.seqColour.setSelected$Z(false);
this.viewerColour.setSelected$Z(true);
} else if (viewerData.isColourWithAlignPanel$()) {
this.jmb.setColourBySequence$Z(true);
this.seqColour.setSelected$Z(true);
this.viewerColour.setSelected$Z(false);
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntryA$Z$jalview_datamodel_SequenceIAA$jalview_gui_AlignmentPanel',  function (pe, alignAdded, seqs, ap) {
C$.c$.apply(this, []);
this.setAlignAddedStructures$Z(alignAdded);
p$1.openNewChimera$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [ap, pe, seqs]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setDefaultCloseOperation$I(0);
}, 1);

Clazz.newMeth(C$, 'initChimera$',  function () {
this.jmb.setFinishedInit$Z(false);
$I$(13,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[this, this.jmb.getViewerTitle$S$Z(this.getViewerName$(), true), this.getBounds$().width, this.getBounds$().height]);
if (!this.jmb.launchChimera$()) {
$I$(14,"showMessageDialog$java_awt_Component$S$S$I",[$I$(13).desktop, $I$(2,"formatMessage$S$OA",["label.open_viewer_failed", Clazz.array(java.lang.Object, -1, [this.getViewerName$()])]), $I$(2).getString$S("label.error_loading_file"), 0]);
this.jmb.closeViewer$Z(true);
this.dispose$();
return;
}if (this.chimeraSessionFile != null ) {
var opened=this.jmb.openSession$S(this.chimeraSessionFile);
if (!opened) {
System.err.println$S("An error occurred opening Chimera session file " + this.chimeraSessionFile);
}}this.jmb.startChimeraListener$();
});

Clazz.newMeth(C$, 'run$',  function () {
this._started=true;
var errormsgs=Clazz.new_($I$(15,1).c$$I,[128]);
var files=Clazz.new_($I$(15,1).c$$I,[128]);
var filePDB=Clazz.new_($I$(16,1));
var filePDBpos=Clazz.new_($I$(16,1));
var thePdbEntry=null;
var pdb=null;
try {
var curfiles=this.jmb.getStructureFiles$();
for (var pi=0; pi < this.jmb.getPdbCount$(); pi++) {
var file=null;
thePdbEntry=this.jmb.getPdbEntry$I(pi);
if (thePdbEntry.getFile$() == null ) {
file=this.fetchPdbFile$jalview_datamodel_PDBEntry(thePdbEntry);
if (file == null ) {
errormsgs.append$S("'" + thePdbEntry.getId$() + "' " );
}} else {
file=Clazz.new_([thePdbEntry.getFile$()],$I$(17,1).c$$S).getAbsoluteFile$().getPath$();
if (curfiles != null  && curfiles.length > 0 ) {
this.addingStructures=true;
for (var c=0; c < curfiles.length; c++) {
if (curfiles[c].equals$O(file)) {
file=null;
break;
}}
}}if (file != null ) {
filePDB.add$O(thePdbEntry);
filePDBpos.add$O(Integer.valueOf$I(pi));
files.append$S(" \"" + $I$(18).escapeBackslashes$S(file) + "\"" );
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oomerror = e$$;
{
Clazz.new_(["Retrieving PDB files: " + thePdbEntry.getId$(), oomerror],$I$(19,1).c$$S$OutOfMemoryError);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
ex.printStackTrace$();
errormsgs.append$S("When retrieving pdbfiles for '" + thePdbEntry.getId$() + "'" );
}
} else {
throw e$$;
}
}
if (errormsgs.length$() > 0) {
$I$(14,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(13).desktop, $I$(2,"formatMessage$S$OA",["label.pdb_entries_couldnt_be_retrieved", Clazz.array(java.lang.Object, -1, [errormsgs.toString()])]), $I$(2).getString$S("label.couldnt_load_file"), 0]);
}if (files.length$() > 0) {
this.jmb.setFinishedInit$Z(false);
if (!this.addingStructures) {
try {
this.initChimera$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(20).error$S$Throwable("Couldn\'t open Chimera viewer!", ex);
} else {
throw ex;
}
}
}if (!this.jmb.isViewerRunning$()) {
return;
}var num=-1;
for (var pe, $pe = filePDB.iterator$(); $pe.hasNext$()&&((pe=($pe.next$())),1);) {
++num;
if (pe.getFile$() != null ) {
try {
var pos=filePDBpos.get$I(num).intValue$();
var startTime=this.startProgressBar$S(this.getViewerName$() + " " + $I$(2).getString$S("status.opening_file_for") + " " + pe.getId$() );
this.jmb.openFile$jalview_datamodel_PDBEntry(pe);
this.jmb.addSequence$I$jalview_datamodel_SequenceIA(pos, this.jmb.getSequence$()[pos]);
var fl=Clazz.new_([pe.getFile$()],$I$(17,1).c$$S);
var protocol=$I$(21).URL;
try {
if (fl.exists$()) {
protocol=$I$(21).FILE;
}} catch (e) {
} finally {
this.stopProgressBar$S$J("", startTime);
}
pdb=this.jmb.getSsm$().setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(this.jmb.getSequence$()[pos], this.jmb.getChains$()[pos], pe.getFile$(), protocol, this.getProgressIndicator$());
this.jmb.stashFoundChains$jalview_io_StructureFile$S(pdb, pe.getFile$());
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oomerror = e$$;
{
Clazz.new_($I$(19,1).c$$S$OutOfMemoryError,["When trying to open and map structures from Chimera!", oomerror]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(20,"error$S$Throwable",["Couldn't open " + pe.getFile$() + " in Chimera viewer!" , ex]);
}
} else {
throw e$$;
}
} finally {
$I$(20).debug$S("File locations are " + files);
}
}}
this.jmb.refreshGUI$();
this.jmb.setFinishedInit$Z(true);
this.jmb.setLoadingFromArchive$Z(false);
var fr=this.getBinding$().getFeatureRenderer$jalview_api_AlignmentViewPanel(null);
if (fr != null ) {
fr.featuresAdded$();
}for (var ap, $ap = this._colourwith.iterator$(); $ap.hasNext$()&&((ap=($ap.next$())),1);) {
this.jmb.updateColours$O(ap);
}
if (this.alignAddedStructures) {
Clazz.new_([((P$.ChimeraViewFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ChimeraViewFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.gui.StructureViewerBase'].alignStructsWithAllAlignPanels$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
});
})()
), Clazz.new_(P$.ChimeraViewFrame$5.$init$,[this, null]))],$I$(9,1).c$$Runnable).start$();
}this.addingStructures=false;
}this._started=false;
this.worker=null;
});

Clazz.newMeth(C$, 'makePDBImage$jalview_util_ImageMaker_TYPE',  function (imageType) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Image export for Chimera is not implemented"]);
});

Clazz.newMeth(C$, 'getBinding$',  function () {
return this.jmb;
});

Clazz.newMeth(C$, 'getViewerType$',  function () {
return $I$(22).CHIMERA;
});

Clazz.newMeth(C$, 'getViewerName$',  function () {
return "Chimera";
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:33 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
