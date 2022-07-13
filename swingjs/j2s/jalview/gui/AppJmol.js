(function(){var P$=Clazz.newPackage("jalview.gui"),p$1={},I$=[[0,'java.awt.Dimension','java.awt.Color','java.awt.Font','jalview.util.MessageManager','StringBuffer','jalview.datamodel.PDBEntry','jalview.datamodel.SequenceI',['jalview.datamodel.PDBEntry','.Type'],'jalview.gui.AppJmolBinding','javax.swing.event.InternalFrameAdapter','StringBuilder','jalview.util.Platform','Thread',['jalview.gui.AppJmol','.RenderPanel'],'jalview.gui.Desktop','java.awt.BorderLayout','javax.swing.JPanel','jalview.structure.StructureCommand','jalview.gui.OOMWarning','jalview.bin.Console','javax.swing.SwingUtilities','java.util.Locale','jalview.gui.ImageExporter','jalview.util.BrowserLauncher','javax.swing.JSplitPane',['jalview.gui.StructureViewer','.ViewerType']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppJmol", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.gui.StructureViewerBase');
C$.$classes$=[['RenderPanel',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['jmb','jalview.gui.AppJmolBinding','scriptWindow','javax.swing.JPanel','splitPane','javax.swing.JSplitPane','renderPanel','jalview.gui.AppJmol.RenderPanel']]]

Clazz.newMeth(C$, 'c$$jalview_datamodel_StructureViewerModel$jalview_gui_AlignmentPanel$S$S',  function (viewerModel, ap, sessionFile, viewid) {
Clazz.super_(C$, this);
var pdbData=viewerModel.getFileData$();
var pdbentrys=Clazz.array($I$(6), [pdbData.size$()]);
var seqs=Clazz.array($I$(7), [pdbData.size$(), null]);
var i=0;
for (var data, $data = pdbData.values$().iterator$(); $data.hasNext$()&&((data=($data.next$())),1);) {
var pdbentry=Clazz.new_([data.getPdbId$(), null, $I$(8).PDB, data.getFilePath$()],$I$(6,1).c$$S$S$jalview_datamodel_PDBEntry_Type$S);
pdbentrys[i]=pdbentry;
var sequencesForPdb=data.getSeqList$();
seqs[i]=sequencesForPdb.toArray$OA(Clazz.array($I$(7), [sequencesForPdb.size$()]));
++i;
}
this.jmb=Clazz.new_([this, ap.getStructureSelectionManager$(), pdbentrys, seqs, null],$I$(9,1).c$$jalview_gui_AppJmol$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType);
this.jmb.setLoadingFromArchive$Z(true);
this.addAlignmentPanel$jalview_gui_AlignmentPanel(ap);
if (viewerModel.isAlignWithPanel$()) {
this.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
}this.initMenus$();
var useToColour=viewerModel.isColourWithAlignPanel$();
var leaveColouringToJmol=viewerModel.isColourByViewer$();
if (leaveColouringToJmol || !useToColour ) {
this.jmb.setColourBySequence$Z(false);
this.seqColour.setSelected$Z(false);
this.viewerColour.setSelected$Z(true);
} else if (useToColour) {
this.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(ap);
this.jmb.setColourBySequence$Z(true);
this.seqColour.setSelected$Z(true);
this.viewerColour.setSelected$Z(false);
}this.setBounds$I$I$I$I(viewerModel.getX$(), viewerModel.getY$(), viewerModel.getWidth$(), viewerModel.getHeight$());
this.setViewId$S(viewid);
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.AppJmol$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppJmol$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent',  function (internalFrameEvent) {
this.b$['jalview.gui.StructureViewerBase'].closeViewer$Z.apply(this.b$['jalview.gui.StructureViewerBase'], [false]);
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.AppJmol$1)));
var cmd=Clazz.new_($I$(11,1));
cmd.append$S("load FILES ").append$S("\"").append$S($I$(12).escapeBackslashes$S(sessionFile)).append$S("\"");
this.initJmol$S(cmd.toString());
}, 1);

Clazz.newMeth(C$, 'initMenus$',  function () {
C$.superclazz.prototype.initMenus$.apply(this, []);
this.viewerColour.setText$S($I$(4).getString$S("label.colour_with_jmol"));
this.viewerColour.setToolTipText$S($I$(4).getString$S("label.let_jmol_manage_structure_colours"));
});

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_AlignmentPanel',  function (pdbentry, seq, chains, ap) {
Clazz.super_(C$, this);
this.setProgressIndicator$jalview_gui_IProgressIndicator(ap.alignFrame);
p$1.openNewJmol$jalview_gui_AlignmentPanel$Z$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [ap, this.alignAddedStructures, Clazz.array($I$(6), -1, [pdbentry]), Clazz.array($I$(7), -2, [seq])]);
}, 1);

Clazz.newMeth(C$, 'openNewJmol$jalview_gui_AlignmentPanel$Z$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA',  function (ap, alignAdded, pdbentrys, seqs) {
this.setProgressIndicator$jalview_gui_IProgressIndicator(ap.alignFrame);
this.jmb=Clazz.new_([this, ap.getStructureSelectionManager$(), pdbentrys, seqs, null],$I$(9,1).c$$jalview_gui_AppJmol$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType);
this.addAlignmentPanel$jalview_gui_AlignmentPanel(ap);
this.useAlignmentPanelForColourbyseq$jalview_gui_AlignmentPanel(ap);
this.alignAddedStructures=alignAdded;
if (pdbentrys.length > 1) {
this.useAlignmentPanelForSuperposition$jalview_gui_AlignmentPanel(ap);
}this.jmb.setColourBySequence$Z(true);
this.setSize$I$I(400, 400);
this.initMenus$();
this.addingStructures=false;
this.worker=Clazz.new_($I$(13,1).c$$Runnable,[this]);
this.worker.start$();
this.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.AppJmol$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppJmol$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent',  function (internalFrameEvent) {
this.b$['jalview.gui.StructureViewerBase'].closeViewer$Z.apply(this.b$['jalview.gui.StructureViewerBase'], [false]);
});
})()
), Clazz.new_($I$(10,1),[this, null],P$.AppJmol$2)));
}, p$1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel$Z$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA',  function (ap, alignAdded, pe, seqs) {
Clazz.super_(C$, this);
p$1.openNewJmol$jalview_gui_AlignmentPanel$Z$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA.apply(this, [ap, alignAdded, pe, seqs]);
}, 1);

Clazz.newMeth(C$, 'initJmol$S',  function (command) {
this.jmb.setFinishedInit$Z(false);
this.renderPanel=Clazz.new_($I$(14,1),[this, null]);
this.getContentPane$().add$java_awt_Component$O(this.renderPanel, "Center");
$I$(15,"addInternalFrame$javax_swing_JInternalFrame$S$I$I",[this, this.jmb.getViewerTitle$(), this.getBounds$().width, this.getBounds$().height]);
if (this.scriptWindow == null ) {
var bl=Clazz.new_($I$(16,1));
bl.setHgap$I(0);
bl.setVgap$I(0);
this.scriptWindow=Clazz.new_($I$(17,1).c$$java_awt_LayoutManager,[bl]);
this.scriptWindow.setVisible$Z(false);
}this.jmb.allocateViewer$java_awt_Container$Z$S$java_net_URL$java_net_URL$S$java_awt_Container$S(this.renderPanel, true, "", null, null, "", this.scriptWindow, null);
if (command == null ) {
command="";
}this.jmb.executeCommand$jalview_structure_StructureCommandI$Z(Clazz.new_([command, Clazz.array(String, -1, [])],$I$(18,1).c$$S$SA), false);
this.jmb.executeCommand$jalview_structure_StructureCommandI$Z(Clazz.new_(["set hoverDelay=0.1", Clazz.array(String, -1, [])],$I$(18,1).c$$S$SA), false);
this.jmb.setFinishedInit$Z(true);
});

Clazz.newMeth(C$, 'run$',  function () {
this._started=true;
try {
var files=this.jmb.fetchPdbFiles$jalview_gui_StructureViewerBase(this);
if (files.size$() > 0) {
this.showFilesInViewer$java_util_List(files);
}} finally {
this._started=false;
this.worker=null;
}
});

Clazz.newMeth(C$, 'showFilesInViewer$java_util_List',  function (files) {
var lastnotify=this.jmb.getLoadNotifiesHandled$();
var fileList=Clazz.new_($I$(11,1));
for (var s, $s = files.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
fileList.append$S(" ").append$S("\"").append$S($I$(12).escapeBackslashes$S(s)).append$S("\"");
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
$I$(20).debug$S("File locations are " + filesString);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(20).error$S$Throwable("Couldn\'t open Jmol viewer!", ex);
ex.printStackTrace$();
return;
}
} else {
throw e$$;
}
}
} else {
var cmd=Clazz.new_($I$(11,1));
cmd.append$S("loadingJalviewdata=true\nload APPEND ");
cmd.append$S(filesString);
cmd.append$S("\nloadingJalviewdata=null");
var command=Clazz.new_([cmd.toString(), Clazz.array(String, -1, [])],$I$(18,1).c$$S$SA);
lastnotify=this.jmb.getLoadNotifiesHandled$();
try {
this.jmb.executeCommand$jalview_structure_StructureCommandI$Z(command, false);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oomerror = e$$;
{
Clazz.new_($I$(19,1).c$$S$OutOfMemoryError,["When trying to add structures to the Jmol viewer!", oomerror]);
$I$(20).debug$S("File locations are " + filesString);
return;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
$I$(20).error$S$Throwable("Couldn\'t add files to Jmol viewer!", ex);
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
while (this.addingStructures ? Long.$ge(lastnotify,this.jmb.getLoadNotifiesHandled$() ) : !(this.jmb.isFinishedInit$() && this.jmb.getStructureFiles$() != null   && this.jmb.getStructureFiles$().length == files.size$() )){
try {
$I$(20).debug$S("Waiting around for jmb notify.");
waitTotal+=waitFor;
$I$(13).sleep$J(waitFor);
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

Clazz.newMeth(C$, 'alignAddedStructures$',  function () {
$I$(21,"invokeLater$Runnable",[((P$.AppJmol$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppJmol$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (this.b$['jalview.gui.AppJmol'].jmb.jmolViewer.isScriptExecuting$()) {
$I$(21).invokeLater$Runnable(this);
try {
$I$(13).sleep$J(5);
} catch (q) {
if (Clazz.exceptionOf(q,"InterruptedException")){
} else {
throw q;
}
}
return;
} else {
this.b$['jalview.gui.StructureViewerBase'].alignStructsWithAllAlignPanels$.apply(this.b$['jalview.gui.StructureViewerBase'], []);
}});
})()
), Clazz.new_(P$.AppJmol$3.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'makePDBImage$jalview_util_ImageMaker_TYPE',  function (type) {
var width=this.getWidth$();
var height=this.getHeight$();
var writer=((P$.AppJmol$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppJmol$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['jalview.gui.ImageExporter','jalview.gui.ImageExporter.ImageWriterI']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'exportImage$java_awt_Graphics',  function (g) {
this.b$['jalview.gui.AppJmol'].jmb.jmolViewer.renderScreenImage$O$I$I(g, this.$finals$.width, this.$finals$.height);
});
})()
), Clazz.new_(P$.AppJmol$4.$init$,[this, {height:height,width:width}]));
var view=$I$(4).getString$S("action.view").toLowerCase$java_util_Locale($I$(22).ROOT);
var exporter=Clazz.new_([writer, this.getProgressIndicator$(), type, this.getTitle$()],$I$(23,1).c$$jalview_gui_ImageExporter_ImageWriterI$jalview_gui_IProgressIndicator$jalview_util_ImageMaker_TYPE$S);
exporter.doExport$java_io_File$java_awt_Component$I$I$S(null, this, width, height, view);
});

Clazz.newMeth(C$, 'showHelp_actionPerformed$',  function () {
try {
$I$(24).openURL$S("http://wiki.jmol.org");
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Show Jmol help failed with: " + ex.getMessage$());
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'showConsole$Z',  function (showConsole) {
if (showConsole) {
if (this.splitPane == null ) {
this.splitPane=Clazz.new_($I$(25,1).c$$I,[0]);
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

Clazz.newMeth(C$, 'getBinding$',  function () {
return this.jmb;
});

Clazz.newMeth(C$, 'getViewerType$',  function () {
return $I$(26).JMOL;
});

Clazz.newMeth(C$, 'getViewerName$',  function () {
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

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics',  function (g) {
this.getSize$java_awt_Dimension(this.currentSize);
if (this.b$['jalview.gui.AppJmol'].jmb != null  && this.b$['jalview.gui.AppJmol'].jmb.hasFileLoadingError$() ) {
g.setColor$java_awt_Color($I$(2).black);
g.fillRect$I$I$I$I(0, 0, this.currentSize.width, this.currentSize.height);
g.setColor$java_awt_Color($I$(2).white);
g.setFont$java_awt_Font(Clazz.new_($I$(3,1).c$$S$I$I,["Verdana", 1, 14]));
g.drawString$S$I$I($I$(4).getString$S("label.error_loading_file") + "...", 20, (this.currentSize.height/2|0));
var sb=Clazz.new_($I$(5,1));
var lines=0;
for (var e=0; e < this.b$['jalview.gui.AppJmol'].jmb.getPdbCount$(); e++) {
sb.append$S(this.b$['jalview.gui.AppJmol'].jmb.getPdbEntry$I(e).getId$());
if (e < this.b$['jalview.gui.AppJmol'].jmb.getPdbCount$() - 1) {
sb.append$S(",");
}if (e == this.b$['jalview.gui.AppJmol'].jmb.getPdbCount$() - 1 || sb.length$() > 20 ) {
++lines;
g.drawString$S$I$I(sb.toString(), 20, (this.currentSize.height/2|0) - lines * g.getFontMetrics$().getHeight$());
}}
} else if (this.b$['jalview.gui.AppJmol'].jmb == null  || this.b$['jalview.gui.AppJmol'].jmb.jmolViewer == null   || !this.b$['jalview.gui.AppJmol'].jmb.isFinishedInit$() ) {
g.setColor$java_awt_Color($I$(2).black);
g.fillRect$I$I$I$I(0, 0, this.currentSize.width, this.currentSize.height);
g.setColor$java_awt_Color($I$(2).white);
g.setFont$java_awt_Font(Clazz.new_($I$(3,1).c$$S$I$I,["Verdana", 1, 14]));
g.drawString$S$I$I($I$(4).getString$S("label.retrieving_pdb_data"), 20, (this.currentSize.height/2|0));
} else {
this.b$['jalview.gui.AppJmol'].jmb.jmolViewer.renderScreenImage$O$I$I(g, this.currentSize.width, this.currentSize.height);
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:33 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
