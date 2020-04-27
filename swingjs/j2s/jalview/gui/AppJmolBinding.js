(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.gui.SequenceRenderer','jalview.util.BrowserLauncher','jalview.bin.Cache','javax.swing.SwingUtilities','jalview.util.Platform']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppJmolBinding", null, 'jalview.ext.jmol.JalviewJmolBinding');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['appJmolWindow','jalview.gui.AppJmol']]]

Clazz.newMeth(C$, 'c$$jalview_gui_AppJmol$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType', function (appJmol, sSm, pdbentry, sequenceIs, protocol) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[sSm, pdbentry, sequenceIs, protocol]);C$.$init$.apply(this);
this.appJmolWindow=appJmol;
}, 1);

Clazz.newMeth(C$, 'getIProgressIndicator$', function () {
return this.appJmolWindow.progressBar;
});

Clazz.newMeth(C$, 'getSequenceRenderer$jalview_api_AlignmentViewPanel', function (alignment) {
return Clazz.new_([(alignment).av],$I$(1,1).c$$jalview_api_AlignViewportI);
});

Clazz.newMeth(C$, 'sendConsoleEcho$S', function (strEcho) {
if (this.console != null ) {
this.console.sendConsoleEcho$S(strEcho);
}});

Clazz.newMeth(C$, 'sendConsoleMessage$S', function (strStatus) {
if (this.console != null  && strStatus != null  ) {
this.console.sendConsoleMessage$S(strStatus);
}});

Clazz.newMeth(C$, 'showUrl$S$S', function (url, target) {
try {
$I$(2).openURL$S(url);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).log.error$O$Throwable("Failed to launch Jmol-associated url " + url, e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'refreshGUI$', function () {
$I$(4,"invokeLater$Runnable",[((P$.AppJmolBinding$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AppJmolBinding$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['jalview.gui.AppJmolBinding'].appJmolWindow.updateTitleAndMenus$();
this.b$['jalview.gui.AppJmolBinding'].appJmolWindow.revalidate$();
});
})()
), Clazz.new_(P$.AppJmolBinding$1.$init$,[this, null]))]);
});

Clazz.newMeth(C$, 'updateColours$O', function (source) {
var ap=source;
if (!this.appJmolWindow.isUsedforcolourby$jalview_gui_AlignmentPanel(ap)) {
return;
}if (!this.isLoadingFromArchive$()) {
this.colourBySequence$jalview_api_AlignmentViewPanel(ap);
}});

Clazz.newMeth(C$, 'notifyScriptTermination$S$I', function (strStatus, msWalltime) {
});

Clazz.newMeth(C$, 'showUrl$S', function (url) {
this.showUrl$S$S(url, "jmol");
});

Clazz.newMeth(C$, 'newJmolPopup$S', function (menuName) {
});

Clazz.newMeth(C$, 'selectionChanged$javajs_util_BS', function (arg0) {
});

Clazz.newMeth(C$, 'refreshPdbEntries$', function () {
});

Clazz.newMeth(C$, 'showConsole$Z', function (b) {
this.appJmolWindow.showConsole$Z(b);
});

Clazz.newMeth(C$, 'createJmolConsole$java_awt_Container$S', function (consolePanel, buttonsToShow) {
this.viewer.setJmolCallbackListener$org_jmol_api_JmolCallbackListener(this);
return null;
});

Clazz.newMeth(C$, 'releaseUIResources$', function () {
this.appJmolWindow=null;
this.closeConsole$();
});

Clazz.newMeth(C$, 'releaseReferences$O', function (svl) {
if (Clazz.instanceOf(svl, "jalview.gui.SeqPanel")) {
this.appJmolWindow.removeAlignmentPanel$jalview_gui_AlignmentPanel((svl).ap);
}});

Clazz.newMeth(C$, 'getJSpecViewProperty$S', function (arg0) {
return null;
});

Clazz.newMeth(C$, 'getViewer$', function () {
return this.appJmolWindow;
});

Clazz.newMeth(C$, 'getFeatureRenderer$jalview_api_AlignmentViewPanel', function (alignment) {
var ap=(alignment == null ) ? this.appJmolWindow.getAlignmentPanel$() : alignment;
if (ap.av.isShowSequenceFeatures$()) {
return ap.av.getAlignPanel$().getSeqPanel$().seqCanvas.fr;
}return null;
});

Clazz.newMeth(C$, 'cacheFiles$java_util_List', function (files) {
if (files == null ) {
return;
}for (var f, $f = files.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
$I$(5).cacheFileData$java_io_File(f);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:51 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
