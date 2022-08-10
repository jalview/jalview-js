(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.gui.SequenceRenderer','jalview.util.BrowserLauncher','jalview.bin.Console','javax.swing.SwingUtilities','jalview.util.Platform','org.openscience.jmol.app.jmolpanel.console.AppConsole','StringBuilder','java.util.ArrayList','jalview.gui.OOMWarning','jalview.gui.JvOptionPane','jalview.gui.Desktop','jalview.util.MessageManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppJmolBinding", null, 'jalview.ext.jmol.JalviewJmolBinding');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_gui_AppJmol$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType',  function (appJmol, sSm, pdbentry, sequenceIs, protocol) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[sSm, pdbentry, sequenceIs, protocol]);C$.$init$.apply(this);
this.setViewer$jalview_api_structures_JalviewStructureDisplayI(appJmol);
}, 1);

Clazz.newMeth(C$, 'getSequenceRenderer$jalview_api_AlignmentViewPanel',  function (alignment) {
return Clazz.new_([(alignment).av],$I$(1,1).c$$jalview_api_AlignViewportI);
});

Clazz.newMeth(C$, 'sendConsoleEcho$S',  function (strEcho) {
if (this.console != null ) {
this.console.sendConsoleEcho$S(strEcho);
}});

Clazz.newMeth(C$, 'sendConsoleMessage$S',  function (strStatus) {
if (this.console != null  && strStatus != null  ) {
this.console.sendConsoleMessage$S(strStatus);
}});

Clazz.newMeth(C$, 'showUrl$S$S',  function (url, target) {
try {
$I$(2).openURL$S(url);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).error$S$Throwable("Failed to launch Jmol-associated url " + url, e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
if (this.getMappedStructureCount$() == 0) {
return;
}$I$(4,"invokeLater$Runnable",[((P$.AppJmolBinding$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppJmolBinding$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var theViewer=this.b$['jalview.structures.models.AAStructureBindingModel'].getViewer$.apply(this.b$['jalview.structures.models.AAStructureBindingModel'], []);
theViewer.updateTitleAndMenus$();
(theViewer).revalidate$();
});
})()
), Clazz.new_(P$.AppJmolBinding$1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'notifyScriptTermination$S$I',  function (strStatus, msWalltime) {
});

Clazz.newMeth(C$, 'showUrl$S',  function (url) {
this.showUrl$S$S(url, "jmol");
});

Clazz.newMeth(C$, 'newJmolPopup$S',  function (menuName) {
});

Clazz.newMeth(C$, 'selectionChanged$javajs_util_BS',  function (arg0) {
});

Clazz.newMeth(C$, 'showConsole$Z',  function (b) {
this.getViewer$().showConsole$Z(b);
});

Clazz.newMeth(C$, 'createJmolConsole$java_awt_Container$S',  function (consolePanel, buttonsToShow) {
this.jmolViewer.setJmolCallbackListener$org_jmol_api_JmolCallbackListener(this);
return $I$(5).isJS$() ? null : Clazz.new_($I$(6,1).c$$org_jmol_api_JmolViewer$java_awt_Container$S,[this.jmolViewer, consolePanel, buttonsToShow]);
});

Clazz.newMeth(C$, 'releaseUIResources$',  function () {
this.setViewer$jalview_api_structures_JalviewStructureDisplayI(null);
this.closeConsole$();
});

Clazz.newMeth(C$, 'releaseReferences$O',  function (svl) {
if (Clazz.instanceOf(svl, "jalview.gui.SeqPanel")) {
this.getViewer$().removeAlignmentPanel$jalview_api_AlignmentViewPanel((svl).ap);
}});

Clazz.newMeth(C$, 'getJSpecViewProperty$S',  function (arg0) {
return null;
});

Clazz.newMeth(C$, 'cacheFiles$java_util_List',  function (files) {
if (files == null ) {
return;
}for (var f, $f = files.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
$I$(5).cacheFileData$java_io_File(f);
}
});

Clazz.newMeth(C$, 'fetchPdbFiles$jalview_gui_StructureViewerBase',  function (structureViewer) {
var errormsgs=Clazz.new_($I$(7,1));
var files=Clazz.new_($I$(8,1));
var pdbid="";
try {
var filesInViewer=this.getStructureFiles$();
for (var pi=0; pi < this.getPdbCount$(); pi++) {
var strucEntry=this.getPdbEntry$I(pi);
var file=strucEntry.getFile$();
if (file == null ) {
pdbid=strucEntry.getId$();
try {
file=structureViewer.fetchPdbFile$jalview_datamodel_PDBEntry(strucEntry);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var oomerror = e$$;
{
Clazz.new_($I$(9,1).c$$S$OutOfMemoryError,["Retrieving PDB id " + pdbid, oomerror]);
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
}
if (file != null ) {
files.add$O(file);
} else {
errormsgs.append$S("\'").append$S(pdbid).append$S("\' ");
}} else {
if (filesInViewer != null  && filesInViewer.length > 0 ) {
structureViewer.setAddingStructures$Z(true);
for (var c=0; c < filesInViewer.length; c++) {
if ($I$(5).pathEquals$S$S(filesInViewer[c], file)) {
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
Clazz.new_($I$(9,1).c$$S$OutOfMemoryError,["Retrieving PDB files: " + pdbid, oomerror]);
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
$I$(10,"showInternalMessageDialog$java_awt_Component$S$S$I",[$I$(11).desktop, $I$(12,"formatMessage$S$SA",["label.pdb_entries_couldnt_be_retrieved", Clazz.array(String, -1, [errormsgs.toString()])]), $I$(12).getString$S("label.couldnt_load_file"), 0]);
}return files;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:33 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
