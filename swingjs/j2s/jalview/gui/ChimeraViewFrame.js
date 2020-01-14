(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.util.Random','jalview.util.MessageManager','javax.swing.JMenuItem','javax.swing.JMenu','java.awt.event.MouseAdapter','java.util.Collections','jalview.datamodel.PDBEntry','jalview.datamodel.SequenceI','jalview.gui.ProgressBar','jalview.gui.JalviewChimeraBindingModel','Thread','javax.swing.event.InternalFrameAdapter','jalview.gui.Desktop','jalview.gui.JvOptionPane','java.util.ArrayList','jalview.gui.JvSwingUtils','StringBuilder','java.io.File','jalview.util.Platform','jalview.gui.OOMWarning','jalview.bin.Cache','jalview.io.DataSourceType','jalview.ws.dbsources.Pdb','jalview.util.BrowserLauncher','java.io.FileInputStream',['jalview.gui.StructureViewer','.ViewerType']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ChimeraViewFrame", null, 'jalview.gui.StructureViewerBase');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.jmb=null;
this.progressBar=null;
this.chimeraSessionFile=null;
this.random=null;
this.myWidth=0;
this.myHeight=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.progressBar=null;
this.chimeraSessionFile=null;
this.random=Clazz.new_($I$(1));
this.myWidth=500;
this.myHeight=150;
}, 1);

Clazz.newMeth(C$, 'initMenus$', function () {
C$.superclazz.prototype.initMenus$.apply(this, []);
this.viewerActionMenu.setText$S($I$(2).getString$S("label.chimera"));
this.viewerColour.setText$S($I$(2).getString$S("label.colour_with_chimera"));
this.viewerColour.setToolTipText$S($I$(2).getString$S("label.let_chimera_manage_structure_colours"));
this.helpItem.setText$S($I$(2).getString$S("label.chimera_help"));
this.savemenu.setVisible$Z(false);
this.viewMenu.add$javax_swing_JMenuItem(this.fitToWindow);
var writeFeatures=Clazz.new_($I$(3).c$$S,[$I$(2).getString$S("label.create_chimera_attributes")]);
writeFeatures.setToolTipText$S($I$(2).getString$S("label.create_chimera_attributes_tip"));
writeFeatures.addActionListener$java_awt_event_ActionListener(((P$.ChimeraViewFrame$1||
(function(){var C$=Clazz.newClass(P$, "ChimeraViewFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.ChimeraViewFrame'].sendFeaturesToChimera$.apply(this.b$['jalview.gui.ChimeraViewFrame'], []);
});
})()
), Clazz.new_(P$.ChimeraViewFrame$1.$init$, [this, null])));
this.viewerActionMenu.add$javax_swing_JMenuItem(writeFeatures);
var fetchAttributes=Clazz.new_($I$(4).c$$S,[$I$(2).getString$S("label.fetch_chimera_attributes")]);
fetchAttributes.setToolTipText$S($I$(2).getString$S("label.fetch_chimera_attributes_tip"));
fetchAttributes.addMouseListener$java_awt_event_MouseListener(((P$.ChimeraViewFrame$2||
(function(){var C$=Clazz.newClass(P$, "ChimeraViewFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.MouseAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent', function (e) {
this.b$['jalview.gui.ChimeraViewFrame'].buildAttributesMenu$javax_swing_JMenu.apply(this.b$['jalview.gui.ChimeraViewFrame'], [this.$finals$.fetchAttributes]);
});
})()
), Clazz.new_($I$(5), [this, {fetchAttributes: fetchAttributes}],P$.ChimeraViewFrame$2)));
this.viewerActionMenu.add$javax_swing_JMenuItem(fetchAttributes);
});

Clazz.newMeth(C$, 'buildAttributesMenu$javax_swing_JMenu', function (attributesMenu) {
var atts=this.jmb.sendChimeraCommand$S$Z("list resattr", true);
if (atts == null ) {
return;
}attributesMenu.removeAll$();
$I$(6).sort$java_util_List(atts);
for (var att, $att = atts.iterator$(); $att.hasNext$()&&((att=($att.next$())),1);) {
var attName=att.split$S(" ")[1];
if (!attName.startsWith$S("jv_")) {
var menuItem=Clazz.new_($I$(3).c$$S,[attName]);
menuItem.addActionListener$java_awt_event_ActionListener(((P$.ChimeraViewFrame$3||
(function(){var C$=Clazz.newClass(P$, "ChimeraViewFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.b$['jalview.gui.ChimeraViewFrame'].getChimeraAttributes$S.apply(this.b$['jalview.gui.ChimeraViewFrame'], [this.$finals$.attName]);
});
})()
), Clazz.new_(P$.ChimeraViewFrame$3.$init$, [this, {attName: attName}])));
attributesMenu.add$javax_swing_JMenuItem(menuItem);
}}
});

Clazz.newMeth(C$, 'getChimeraAttributes$S', function (attName) {
this.jmb.copyStructureAttributesToFeatures$S$jalview_api_AlignmentViewPanel(attName, this.getAlignmentPanel$());
});

Clazz.newMeth(C$, 'sendFeaturesToChimera$', function () {
var count=this.jmb.sendFeaturesToViewer$jalview_api_AlignmentViewPanel(this.getAlignmentPanel$());
this.statusBar.setText$S($I$(2).formatMessage$S$OA("label.attributes_set", [new Integer(count)]));
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_AlignmentPanel', function (pdbentry, seq, chains, ap) {
C$.c$.apply(this, []);
p$1.openNewChimera$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [ap, Clazz.array($I$(7), -1, [pdbentry]), Clazz.array($I$(8), -2, [seq])]);
}, 1);

Clazz.newMeth(C$, 'createProgressBar$', function () {
if (this.progressBar == null ) {
this.progressBar=Clazz.new_($I$(9).c$$javax_swing_JPanel$javax_swing_JLabel,[this.statusPanel, this.statusBar]);
}});

Clazz.newMeth(C$, 'openNewChimera$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA', function (ap, pdbentrys, seqs) {
this.createProgressBar$();
this.jmb=Clazz.new_($I$(10).c$$jalview_gui_ChimeraViewFrame$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType,[this, ap.getStructureSelectionManager$(), pdbentrys, seqs, null]);
this.addAlignmentPanel$jalview_gui_AlignmentPanel(ap);
this.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(ap);
if (pdbentrys.length > 1) {
this.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
}this.jmb.setColourBySequence$Z(true);
this.setSize$I$I(this.myWidth, this.myHeight);
this.initMenus$();
this.addingStructures=false;
this.worker=Clazz.new_($I$(11).c$$Runnable,[this]);
this.worker.start$();
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.ChimeraViewFrame$4||
(function(){var C$=Clazz.newClass(P$, "ChimeraViewFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent', function (internalFrameEvent) {
this.b$['jalview.gui.ChimeraViewFrame'].closeViewer$Z.apply(this.b$['jalview.gui.ChimeraViewFrame'], [false]);
});
})()
), Clazz.new_($I$(12), [this, null],P$.ChimeraViewFrame$4)));
}, p$1);

Clazz.newMeth(C$, 'c$$S$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$Z$Z$S', function (chimeraSessionFile, alignPanel, pdbArray, seqsArray, colourByChimera, colourBySequence, newViewId) {
C$.c$.apply(this, []);
this.setViewId$S(newViewId);
this.chimeraSessionFile=chimeraSessionFile;
p$1.openNewChimera$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [alignPanel, pdbArray, seqsArray]);
if (colourByChimera) {
this.jmb.setColourBySequence$Z(false);
this.seqColour.setSelected$Z(false);
this.viewerColour.setSelected$Z(true);
} else if (colourBySequence) {
this.jmb.setColourBySequence$Z(true);
this.seqColour.setSelected$Z(true);
this.viewerColour.setSelected$Z(false);
}}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntryA$Z$jalview_datamodel_SequenceIAA$jalview_gui_AlignmentPanel', function (pe, alignAdded, seqs, ap) {
C$.c$.apply(this, []);
this.setAlignAddedStructures$Z(alignAdded);
p$1.openNewChimera$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [ap, pe, seqs]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.setDefaultCloseOperation$I(0);
}, 1);

Clazz.newMeth(C$, 'initChimera$', function () {
this.jmb.setFinishedInit$Z(false);
$I$(13).addInternalFrame$javax_swing_JInternalFrame$S$I$I(this, this.jmb.getViewerTitle$S$Z(this.getViewerName$(), true), this.getBounds$().width, this.getBounds$().height);
if (!this.jmb.launchChimera$()) {
$I$(14).showMessageDialog$java_awt_Component$S$S$I($I$(13).desktop, $I$(2).getString$S("label.chimera_failed"), $I$(2).getString$S("label.error_loading_file"), 0);
this.dispose$();
return;
}if (this.chimeraSessionFile != null ) {
var opened=this.jmb.openSession$S(this.chimeraSessionFile);
if (!opened) {
System.err.println$S("An error occurred opening Chimera session file " + this.chimeraSessionFile);
}}this.jmb.startChimeraListener$();
});

Clazz.newMeth(C$, 'showSelectedChains$', function () {
var toshow=Clazz.new_($I$(15));
for (var i=0; i < this.chainMenu.getItemCount$(); i++) {
if (Clazz.instanceOf(this.chainMenu.getItem$I(i), "javax.swing.JCheckBoxMenuItem")) {
var item=this.chainMenu.getItem$I(i);
if (item.isSelected$()) {
toshow.add$TE(item.getText$());
}}}
this.jmb.showChains$java_util_List(toshow);
});

Clazz.newMeth(C$, 'closeViewer$Z', function (closeChimera) {
if (this.jmb != null  && this.jmb.isChimeraRunning$() ) {
if (!closeChimera) {
var prompt=$I$(2).formatMessage$S$OA("label.confirm_close_chimera", Clazz.array(java.lang.Object, -1, [this.jmb.getViewerTitle$S$Z(this.getViewerName$(), false)]));
prompt=$I$(16).wrapTooltip$Z$S(true, prompt);
var confirm=$I$(14).showConfirmDialog$java_awt_Component$O$S$I(this, prompt, $I$(2).getString$S("label.close_viewer"), 1);
if (confirm == 2 || confirm == -1 ) {
return;
}closeChimera=confirm == 0;
}this.jmb.closeViewer$Z(closeChimera);
}this.setAlignmentPanel$jalview_gui_AlignmentPanel(null);
this._aps.clear$();
this._alignwith.clear$();
this._colourwith.clear$();
this.jmb=null;
this.dispose$();
});

Clazz.newMeth(C$, 'run$', function () {
this._started=true;
var errormsgs=Clazz.new_($I$(17).c$$I,[128]);
var files=Clazz.new_($I$(17).c$$I,[128]);
var filePDB=Clazz.new_($I$(15));
var filePDBpos=Clazz.new_($I$(15));
var thePdbEntry=null;
var pdb=null;
try {
var curfiles=this.jmb.getStructureFiles$();
for (var pi=0; pi < this.jmb.getPdbCount$(); pi++) {
var file=null;
thePdbEntry=this.jmb.getPdbEntry$I(pi);
if (thePdbEntry.getFile$() == null ) {
file=p$1.fetchPdbFile$jalview_datamodel_PDBEntry.apply(this, [thePdbEntry]);
if (file == null ) {
errormsgs.append$S("'" + thePdbEntry.getId$() + "' " );
}} else {
file=Clazz.new_($I$(18).c$$S,[thePdbEntry.getFile$()]).getAbsoluteFile$().getPath$();
if (curfiles != null  && curfiles.length > 0 ) {
this.addingStructures=true;
for (var c=0; c < curfiles.length; c++) {
if (curfiles[c].equals$O(file)) {
file=null;
break;
}}
}}if (file != null ) {
filePDB.add$TE(thePdbEntry);
filePDBpos.add$TE(Integer.valueOf$I(pi));
files.append$S(" \"" + $I$(19).escapeString$S(file) + "\"" );
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oomerror = e$$;
{
Clazz.new_($I$(20).c$$S$OutOfMemoryError,["Retrieving PDB files: " + thePdbEntry.getId$(), oomerror]);
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
$I$(14).showInternalMessageDialog$java_awt_Component$S$S$I($I$(13).desktop, $I$(2).formatMessage$S$OA("label.pdb_entries_couldnt_be_retrieved", Clazz.array(java.lang.Object, -1, [errormsgs.toString()])), $I$(2).getString$S("label.couldnt_load_file"), 0);
}if (files.length$() > 0) {
this.jmb.setFinishedInit$Z(false);
if (!this.addingStructures) {
try {
this.initChimera$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
$I$(21).log.error$O$Throwable("Couldn\'t open Chimera viewer!", ex);
} else {
throw ex;
}
}
}var num=-1;
for (var pe, $pe = filePDB.iterator$(); $pe.hasNext$()&&((pe=($pe.next$())),1);) {
num++;
if (pe.getFile$() != null ) {
try {
var pos=filePDBpos.get$I(num).intValue$();
var startTime=this.startProgressBar$S(this.getViewerName$() + " " + $I$(2).getString$S("status.opening_file_for") + " " + pe.getId$() );
this.jmb.openFile$jalview_datamodel_PDBEntry(pe);
this.jmb.addSequence$I$jalview_datamodel_SequenceIA(pos, this.jmb.getSequence$()[pos]);
var fl=Clazz.new_($I$(18).c$$S,[pe.getFile$()]);
var protocol=$I$(22).URL;
try {
if (fl.exists$()) {
protocol=$I$(22).FILE;
}} catch (e) {
} finally {
this.stopProgressBar$S$J("", startTime);
}
pdb=this.jmb.getSsm$().setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(this.jmb.getSequence$()[pos], this.jmb.getChains$()[pos], pe.getFile$(), protocol, this.progressBar);
p$1.stashFoundChains$jalview_io_StructureFile$S.apply(this, [pdb, pe.getFile$()]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oomerror = e$$;
{
Clazz.new_($I$(20).c$$S$OutOfMemoryError,["When trying to open and map structures from Chimera!", oomerror]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(21).log.error$O$Throwable("Couldn't open " + pe.getFile$() + " in Chimera viewer!" , ex);
}
} else {
throw e$$;
}
} finally {
$I$(21).log.debug$O("File locations are " + files);
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
Clazz.new_($I$(11).c$$Runnable,[((P$.ChimeraViewFrame$5||
(function(){var C$=Clazz.newClass(P$, "ChimeraViewFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.ChimeraViewFrame'].alignStructs_withAllAlignPanels$.apply(this.b$['jalview.gui.ChimeraViewFrame'], []);
});
})()
), Clazz.new_(P$.ChimeraViewFrame$5.$init$, [this, null]))]).start$();
}this.addingStructures=false;
}this._started=false;
this.worker=null;
});

Clazz.newMeth(C$, 'stashFoundChains$jalview_io_StructureFile$S', function (pdb, file) {
for (var i=0; i < pdb.getChains$().size$(); i++) {
var chid= String.instantialize(pdb.getId$() + ":" + pdb.getChains$().elementAt$I(i).id );
this.jmb.getChainNames$().add$TE(chid);
this.jmb.getChainFile$().put$TK$TV(chid, file);
}
}, p$1);

Clazz.newMeth(C$, 'fetchPdbFile$jalview_datamodel_PDBEntry', function (processingEntry) {
var filePath=null;
var pdbclient=Clazz.new_($I$(23));
var pdbseq=null;
var pdbid=processingEntry.getId$();
var handle=System.currentTimeMillis$() + $I$(11).currentThread$().hashCode$();
var msg=$I$(2).formatMessage$S$OA("status.fetching_pdb", Clazz.array(java.lang.Object, -1, [pdbid]));
this.getAlignmentPanel$().alignFrame.setProgressBar$S$J(msg, handle);
try {
pdbseq=pdbclient.getSequenceRecords$S(pdbid);
} catch (oomerror) {
if (Clazz.exceptionOf(oomerror,"OutOfMemoryError")){
Clazz.new_($I$(20).c$$S$OutOfMemoryError,["Retrieving PDB id " + pdbid, oomerror]);
} else {
throw oomerror;
}
} finally {
msg=pdbid + " " + $I$(2).getString$S("label.state_completed") ;
this.getAlignmentPanel$().alignFrame.setProgressBar$S$J(msg, handle);
}
if (pdbseq != null  && pdbseq.getHeight$() > 0 ) {
filePath=Clazz.new_($I$(18).c$$S,[pdbseq.getSequenceAt$I(0).getAllPDBEntries$().elementAt$I(0).getFile$()]).getAbsolutePath$();
processingEntry.setFile$S(filePath);
}return filePath;
}, p$1);

Clazz.newMeth(C$, 'startProgressBar$S', function (msg) {
var tm=this.random.nextLong$();
if (this.progressBar != null ) {
this.progressBar.setProgressBar$S$J(msg, tm);
}return tm;
});

Clazz.newMeth(C$, 'stopProgressBar$S$J', function (msg, handle) {
if (this.progressBar != null ) {
this.progressBar.setProgressBar$S$J(msg, handle);
}});

Clazz.newMeth(C$, 'makePDBImage$jalview_util_ImageMaker_TYPE', function (imageType) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Image export for Chimera is not implemented"]);
});

Clazz.newMeth(C$, 'showHelp_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
try {
$I$(24).openURL$S("https://www.cgl.ucsf.edu/chimera/docs/UsersGuide");
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'getBinding$', function () {
return this.jmb;
});

Clazz.newMeth(C$, 'saveSession$S', function (filepath) {
var pathUsed=filepath;
try {
if (pathUsed == null ) {
var tempFile=$I$(18).createTempFile$S$S("chimera", ".py");
tempFile.deleteOnExit$();
pathUsed=tempFile.getPath$();
}var result=this.jmb.saveSession$S(pathUsed);
if (result) {
this.chimeraSessionFile=pathUsed;
return pathUsed;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getStateInfo$', function () {
var sessionFile=this.saveSession$S(null);
if (sessionFile == null ) {
return "";
}var is=null;
try {
var f=Clazz.new_($I$(18).c$$S,[sessionFile]);
var bytes=Clazz.array(Byte.TYPE, [(f.length$()|0)]);
is=Clazz.new_($I$(25).c$$S,[sessionFile]);
is.read$BA(bytes);
return  String.instantialize(bytes);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return "";
} else {
throw e;
}
} finally {
if (is != null ) {
try {
is.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
});

Clazz.newMeth(C$, 'fitToWindow_actionPerformed$', function () {
this.jmb.focusView$();
});

Clazz.newMeth(C$, 'getViewerType$', function () {
return $I$(26).CHIMERA;
});

Clazz.newMeth(C$, 'getViewerName$', function () {
return "Chimera";
});

Clazz.newMeth(C$, 'alignStructs_withAllAlignPanels$', function () {
var reply=C$.superclazz.prototype.alignStructs_withAllAlignPanels$.apply(this, []);
if (reply != null ) {
this.statusBar.setText$S("Superposition failed: " + reply);
}return reply;
});

Clazz.newMeth(C$, 'getIProgressIndicator$', function () {
return this.progressBar;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:11 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
