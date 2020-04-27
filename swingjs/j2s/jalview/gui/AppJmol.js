(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.awt.Dimension','java.awt.Color','java.awt.Font','jalview.util.MessageManager','StringBuffer','jalview.datamodel.PDBEntry',['jalview.datamodel.PDBEntry','.Type'],'jalview.gui.AppJmolBinding','javax.swing.event.InternalFrameAdapter','jalview.datamodel.SequenceI','Thread',['jalview.gui.AppJmol','.RenderPanel'],'jalview.gui.Desktop','java.awt.BorderLayout','javax.swing.JPanel','java.util.Vector','StringBuilder','jalview.util.Platform','jalview.gui.OOMWarning','jalview.bin.Cache','javax.swing.SwingUtilities','java.util.ArrayList','jalview.ws.dbsources.Pdb','java.io.File','jalview.gui.JvOptionPane','jalview.gui.ImageExporter','jalview.util.BrowserLauncher','javax.swing.JSplitPane',['jalview.gui.StructureViewer','.ViewerType']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppJmol", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.gui.StructureViewerBase');
C$.$classes$=[['RenderPanel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.progressBar=null;
},1);

C$.$fields$=[['O',['jmb','jalview.gui.AppJmolBinding','scriptWindow','javax.swing.JPanel','splitPane','javax.swing.JSplitPane','renderPanel','jalview.gui.AppJmol.RenderPanel','progressBar','jalview.gui.IProgressIndicator']]]

Clazz.newMeth(C$, 'c$$SA$SA$jalview_datamodel_SequenceIAA$jalview_gui_AlignmentPanel$Z$Z$Z$S$java_awt_Rectangle$S', function (files, ids, seqs, ap, usetoColour, useToAlign, leaveColouringToJmol, loadStatus, bounds, viewid) {
Clazz.super_(C$, this);
var pdbentrys=Clazz.array($I$(6), [files.length]);
for (var i=0; i < pdbentrys.length; i++) {
var pdbentry=Clazz.new_([ids[i], null, $I$(7).PDB, files[i]],$I$(6,1).c$$S$S$jalview_datamodel_PDBEntry_Type$S);
pdbentrys[i]=pdbentry;
}
this.jmb=Clazz.new_([this, ap.getStructureSelectionManager$(), pdbentrys, seqs, null],$I$(8,1).c$$jalview_gui_AppJmol$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType);
this.jmb.setLoadingFromArchive$Z(true);
this.addAlignmentPanel$jalview_gui_AlignmentPanel(ap);
if (useToAlign) {
this.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
}this.initMenus$();
if (leaveColouringToJmol || !usetoColour ) {
this.jmb.setColourBySequence$Z(false);
this.seqColour.setSelected$Z(false);
this.viewerColour.setSelected$Z(true);
} else if (usetoColour) {
this.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(ap);
this.jmb.setColourBySequence$Z(true);
this.seqColour.setSelected$Z(true);
this.viewerColour.setSelected$Z(false);
}this.setBounds$java_awt_Rectangle(bounds);
this.setViewId$S(viewid);
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.AppJmol$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppJmol$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent', function (internalFrameEvent) {
this.b$['jalview.gui.AppJmol'].closeViewer$Z.apply(this.b$['jalview.gui.AppJmol'], [false]);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.AppJmol$1)));
this.initJmol$S(loadStatus);
}, 1);

Clazz.newMeth(C$, 'initMenus$', function () {
C$.superclazz.prototype.initMenus$.apply(this, []);
this.viewerActionMenu.setText$S($I$(4).getString$S("label.jmol"));
this.viewerColour.setText$S($I$(4).getString$S("label.colour_with_jmol"));
this.viewerColour.setToolTipText$S($I$(4).getString$S("label.let_jmol_manage_structure_colours"));
});

Clazz.newMeth(C$, 'getIProgressIndicator$', function () {
return this.progressBar;
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_AlignmentPanel', function (pdbentry, seq, chains, ap) {
Clazz.super_(C$, this);
this.progressBar=ap.alignFrame;
p$1.openNewJmol$jalview_gui_AlignmentPanel$Z$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [ap, this.alignAddedStructures, Clazz.array($I$(6), -1, [pdbentry]), Clazz.array($I$(10), -2, [seq])]);
}, 1);

Clazz.newMeth(C$, 'openNewJmol$jalview_gui_AlignmentPanel$Z$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA', function (ap, alignAdded, pdbentrys, seqs) {
this.progressBar=ap.alignFrame;
this.jmb=Clazz.new_([this, ap.getStructureSelectionManager$(), pdbentrys, seqs, null],$I$(8,1).c$$jalview_gui_AppJmol$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType);
this.addAlignmentPanel$jalview_gui_AlignmentPanel(ap);
this.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(ap);
this.alignAddedStructures=alignAdded;
this.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
this.jmb.setColourBySequence$Z(true);
this.setSize$I$I(400, 400);
this.initMenus$();
this.addingStructures=false;
this.worker=Clazz.new_($I$(11,1).c$$Runnable,[this]);
this.worker.start$();
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.AppJmol$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppJmol$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent', function (internalFrameEvent) {
this.b$['jalview.gui.AppJmol'].closeViewer$Z.apply(this.b$['jalview.gui.AppJmol'], [false]);
});
})()
), Clazz.new_($I$(9,1),[this, null],P$.AppJmol$2)));
}, p$1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$Z$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA', function (ap, alignAdded, pe, seqs) {
Clazz.super_(C$, this);
p$1.openNewJmol$jalview_gui_AlignmentPanel$Z$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [ap, alignAdded, pe, seqs]);
}, 1);

Clazz.newMeth(C$, 'initJmol$S', function (command) {
this.jmb.setFinishedInit$Z(false);
this.renderPanel=Clazz.new_($I$(12,1),[this, null]);
this.getContentPane$().add$java_awt_Component$O(this.renderPanel, "Center");
$I$(13,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[this, this.jmb.getViewerTitle$(), this.getBounds$().width, this.getBounds$().height]);
if (this.scriptWindow == null ) {
var bl=Clazz.new_($I$(14,1));
bl.setHgap$I(0);
bl.setVgap$I(0);
this.scriptWindow=Clazz.new_($I$(15,1).c$$java_awt_LayoutManager,[bl]);
this.scriptWindow.setVisible$Z(false);
}this.jmb.allocateViewer$java_awt_Container$Z$S$java_net_URL$java_net_URL$S$java_awt_Container$S(this.renderPanel, true, "", null, null, "", this.scriptWindow, null);
if (command == null ) {
command="";
}this.jmb.evalStateCommand$S(command);
this.jmb.evalStateCommand$S("set hoverDelay=0.1");
this.jmb.setFinishedInit$Z(true);
});

Clazz.newMeth(C$, 'showSelectedChains$', function () {
var toshow=Clazz.new_($I$(16,1));
for (var i=0; i < this.chainMenu.getItemCount$(); i++) {
if (Clazz.instanceOf(this.chainMenu.getItem$I(i), "javax.swing.JCheckBoxMenuItem")) {
var item=this.chainMenu.getItem$I(i);
if (item.isSelected$()) {
toshow.addElement$O(item.getText$());
}}}
this.jmb.centerViewer$java_util_Vector(toshow);
});

Clazz.newMeth(C$, 'closeViewer$Z', function (closeExternalViewer) {
if (this.jmb != null ) {
this.jmb.closeViewer$();
}this.setAlignmentPanel$jalview_gui_AlignmentPanel(null);
this._aps.clear$();
this._alignwith.clear$();
this._colourwith.clear$();
this.jmb=null;
});

Clazz.newMeth(C$, 'run$', function () {
this._started=true;
try {
var files=this.fetchPdbFiles$();
if (files.size$() > 0) {
this.showFilesInViewer$java_util_List(files);
}} finally {
this._started=false;
this.worker=null;
}
});

Clazz.newMeth(C$, 'showFilesInViewer$java_util_List', function (files) {
var lastnotify=this.jmb.getLoadNotifiesHandled$();
var fileList=Clazz.new_($I$(17,1));
for (var s, $s = files.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
fileList.append$S(" ").append$S("\"").append$S($I$(18).escapeBackslashes$S(s)).append$S("\"");
}
var filesString=fileList.toString();
if (!this.addingStructures) {
try {
this.initJmol$S("load FILES " + filesString);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oomerror = e$$;
{
Clazz.new_($I$(19,1).c$$S$OutOfMemoryError,["When trying to open the Jmol viewer!", oomerror]);
$I$(20).log.debug$O("File locations are " + filesString);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(20).log.error$O$Throwable("Couldn\'t open Jmol viewer!", ex);
ex.printStackTrace$();
return;
}
} else {
throw e$$;
}
}
} else {
var cmd=Clazz.new_($I$(17,1));
cmd.append$S("loadingJalviewdata=true\nload APPEND ");
cmd.append$S(filesString);
cmd.append$S("\nloadingJalviewdata=null");
var command=cmd.toString();
lastnotify=this.jmb.getLoadNotifiesHandled$();
try {
this.jmb.evalStateCommand$S(command);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oomerror = e$$;
{
Clazz.new_($I$(19,1).c$$S$OutOfMemoryError,["When trying to add structures to the Jmol viewer!", oomerror]);
$I$(20).log.debug$O("File locations are " + filesString);
return;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(20).log.error$O$Throwable("Couldn\'t add files to Jmol viewer!", ex);
ex.printStackTrace$();
return;
}
} else {
throw e$$;
}
}
}var waitMax=20000;
var waitFor=35;
var waitTotal=0;
while (this.addingStructures ? lastnotify >= this.jmb.getLoadNotifiesHandled$() : !(this.jmb.isFinishedInit$() && this.jmb.getStructureFiles$() != null   && this.jmb.getStructureFiles$().length == files.size$() )){
try {
$I$(20).log.debug$O("Waiting around for jmb notify.");
$I$(11).sleep$J(waitFor);
waitTotal+=waitFor;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (waitTotal > waitMax) {
System.err.println$S("Timed out waiting for Jmol to load files after " + waitTotal + "ms" );
this.jmb.getStructureFiles$();
break;
}}
for (var ap, $ap = this._colourwith.iterator$(); $ap.hasNext$()&&((ap=($ap.next$())),1);) {
this.jmb.updateColours$O(ap);
}
if (this.alignAddedStructures) {
this.alignAddedStructures$();
}this.addingStructures=false;
});

Clazz.newMeth(C$, 'alignAddedStructures$', function () {
$I$(21,"invokeLater$Runnable",[((P$.AppJmol$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppJmol$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
if (this.b$['jalview.gui.AppJmol'].jmb.viewer.isScriptExecuting$()) {
$I$(21).invokeLater$Runnable(this);
try {
$I$(11).sleep$J(5);
} catch (q) {
if (Clazz.exceptionOf(q,"InterruptedException")){
} else {
throw q;
}
}
return;
} else {
this.b$['jalview.gui.StructureViewerBase'].alignStructs_withAllAlignPanels$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
}});
})()
), Clazz.new_(P$.AppJmol$3.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'fetchPdbFiles$', function () {
var errormsgs=Clazz.new_($I$(17,1));
var files=Clazz.new_($I$(22,1));
var pdbid="";
try {
var filesInViewer=this.jmb.getStructureFiles$();
var pdbclient=Clazz.new_($I$(23,1));
for (var pi=0; pi < this.jmb.getPdbCount$(); pi++) {
var file=this.jmb.getPdbEntry$I(pi).getFile$();
if (file == null ) {
var pdbseq=null;
pdbid=this.jmb.getPdbEntry$I(pi).getId$();
var hdl=pdbid.hashCode$() - System.currentTimeMillis$();
if (this.progressBar != null ) {
this.progressBar.setProgressBar$S$J($I$(4,"formatMessage$S$SA",["status.fetching_pdb", Clazz.array(String, -1, [pdbid])]), hdl);
}try {
pdbseq=pdbclient.getSequenceRecords$S(pdbid);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oomerror = e$$;
{
Clazz.new_($I$(19,1).c$$S$OutOfMemoryError,["Retrieving PDB id " + pdbid, oomerror]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
ex.printStackTrace$();
errormsgs.append$S("\'").append$S(pdbid).append$S("\'");
}
} else {
throw e$$;
}
} finally {
if (this.progressBar != null ) {
this.progressBar.setProgressBar$S$J($I$(4).getString$S("label.state_completed"), hdl);
}}
if (pdbseq != null ) {
file=Clazz.new_([pdbseq.getSequenceAt$I(0).getAllPDBEntries$().elementAt$I(0).getFile$()],$I$(24,1).c$$S).getAbsolutePath$();
this.jmb.getPdbEntry$I(pi).setFile$S(file);
files.add$O(file);
} else {
errormsgs.append$S("\'").append$S(pdbid).append$S("\' ");
}} else {
if (filesInViewer != null  && filesInViewer.length > 0 ) {
this.addingStructures=true;
for (var c=0; c < filesInViewer.length; c++) {
if ($I$(18).pathEquals$S$S(filesInViewer[c], file)) {
file=null;
break;
}}
}if (file != null ) {
files.add$O(file);
}}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oomerror = e$$;
{
Clazz.new_($I$(19,1).c$$S$OutOfMemoryError,["Retrieving PDB files: " + pdbid, oomerror]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
ex.printStackTrace$();
errormsgs.append$S("When retrieving pdbfiles : current was: \'").append$S(pdbid).append$S("\'");
}
} else {
throw e$$;
}
}
if (errormsgs.length$() > 0) {
$I$(25,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(13).desktop, $I$(4,"formatMessage$S$SA",["label.pdb_entries_couldnt_be_retrieved", Clazz.array(String, -1, [errormsgs.toString()])]), $I$(4).getString$S("label.couldnt_load_file"), 0]);
}return files;
});

Clazz.newMeth(C$, 'makePDBImage$jalview_util_ImageMaker_TYPE', function (type) {
var width=this.getWidth$();
var height=this.getHeight$();
var writer=((P$.AppJmol$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppJmol$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.ImageExporter','jalview.gui.ImageExporter.ImageWriterI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'exportImage$java_awt_Graphics', function (g) {
this.b$['jalview.gui.AppJmol'].jmb.viewer.renderScreenImage$O$I$I(g, this.$finals$.width, this.$finals$.height);
});
})()
), Clazz.new_(P$.AppJmol$4.$init$,[this, {height:height,width:width}]));
var view=$I$(4).getString$S("action.view").toLowerCase$();
var exporter=Clazz.new_([writer, this.jmb.getIProgressIndicator$(), type, this.getTitle$()],$I$(26,1).c$$jalview_gui_ImageExporter_ImageWriterI$jalview_gui_IProgressIndicator$jalview_util_ImageMaker_TYPE$S);
exporter.doExport$java_io_File$java_awt_Component$I$I$S(null, this, width, height, view);
});

Clazz.newMeth(C$, 'showHelp_actionPerformed$java_awt_event_ActionEvent', function (actionEvent) {
try {
$I$(27).openURL$S("http://wiki.jmol.org");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'showConsole$Z', function (showConsole) {
if (showConsole) {
if (this.splitPane == null ) {
this.splitPane=Clazz.new_($I$(28,1).c$$I,[0]);
this.splitPane.setTopComponent$java_awt_Component(this.renderPanel);
this.splitPane.setBottomComponent$java_awt_Component(this.scriptWindow);
this.getContentPane$().add$java_awt_Component$O(this.splitPane, "Center");
this.splitPane.setDividerLocation$I(this.getHeight$() - 200);
this.scriptWindow.setVisible$Z(true);
this.scriptWindow.validate$();
this.splitPane.validate$();
}} else {
if (this.splitPane != null ) {
this.splitPane.setVisible$Z(false);
}this.splitPane=null;
this.getContentPane$().add$java_awt_Component$O(this.renderPanel, "Center");
}this.validate$();
});

Clazz.newMeth(C$, 'getBinding$', function () {
return this.jmb;
});

Clazz.newMeth(C$, 'getStateInfo$', function () {
return this.jmb == null  ? null : this.jmb.viewer.getStateInfo$();
});

Clazz.newMeth(C$, 'getViewerType$', function () {
return $I$(29).JMOL;
});

Clazz.newMeth(C$, 'getViewerName$', function () {
return "Jmol";
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AppJmol, "RenderPanel", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.currentSize=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['currentSize','java.awt.Dimension']]]

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
this.getSize$java_awt_Dimension(this.currentSize);
if (this.this$0.jmb != null  && this.this$0.jmb.hasFileLoadingError$() ) {
g.setColor$java_awt_Color($I$(2).black);
g.fillRect$I$I$I$I(0, 0, this.currentSize.width, this.currentSize.height);
g.setColor$java_awt_Color($I$(2).white);
g.setFont$java_awt_Font(Clazz.new_($I$(3,1).c$$S$I$I,["Verdana", 1, 14]));
g.drawString$S$I$I($I$(4).getString$S("label.error_loading_file") + "...", 20, (this.currentSize.height/2|0));
var sb=Clazz.new_($I$(5,1));
var lines=0;
for (var e=0; e < this.this$0.jmb.getPdbCount$(); e++) {
sb.append$S(this.this$0.jmb.getPdbEntry$I(e).getId$());
if (e < this.this$0.jmb.getPdbCount$() - 1) {
sb.append$S(",");
}if (e == this.this$0.jmb.getPdbCount$() - 1 || sb.length$() > 20 ) {
lines++;
g.drawString$S$I$I(sb.toString(), 20, (this.currentSize.height/2|0) - lines * g.getFontMetrics$().getHeight$());
}}
} else if (this.this$0.jmb == null  || this.this$0.jmb.viewer == null   || !this.this$0.jmb.isFinishedInit$() ) {
g.setColor$java_awt_Color($I$(2).black);
g.fillRect$I$I$I$I(0, 0, this.currentSize.width, this.currentSize.height);
g.setColor$java_awt_Color($I$(2).white);
g.setFont$java_awt_Font(Clazz.new_($I$(3,1).c$$S$I$I,["Verdana", 1, 14]));
g.drawString$S$I$I($I$(4).getString$S("label.retrieving_pdb_data"), 20, (this.currentSize.height/2|0));
} else {
this.this$0.jmb.viewer.renderScreenImage$O$I$I(g, this.currentSize.width, this.currentSize.height);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
