(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'jalview.appletgui.SequenceRenderer','java.net.URL','org.jmol.console.AppletConsole']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppletJmolBinding", null, 'jalview.ext.jmol.JalviewJmolBinding');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['appletJmolBinding','jalview.appletgui.AppletJmol']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AppletJmol$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType',  function (appletJmol, sSm, pdbentry, seq, protocol) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[sSm, pdbentry, seq, protocol]);C$.$init$.apply(this);
this.appletJmolBinding=appletJmol;
}, 1);

Clazz.newMeth(C$, 'getSequenceRenderer$jalview_api_AlignmentViewPanel',  function (alignment) {
return Clazz.new_([(alignment).av],$I$(1,1).c$$jalview_appletgui_AlignViewport);
});

Clazz.newMeth(C$, 'sendConsoleEcho$S',  function (strEcho) {
if (this.appletJmolBinding.scriptWindow == null ) {
this.appletJmolBinding.showConsole$Z(true);
}this.appletJmolBinding.addToHistory$S(strEcho);
});

Clazz.newMeth(C$, 'sendConsoleMessage$S',  function (strStatus) {
if (this.appletJmolBinding.history != null  && strStatus != null   && !strStatus.equals$O("Script completed") ) {
this.appletJmolBinding.addToHistory$S(strStatus);
}});

Clazz.newMeth(C$, 'showUrl$S$S',  function (url, target) {
this.appletJmolBinding.ap.alignFrame.showURL$S$S(url, target);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
this.appletJmolBinding.updateTitleAndMenus$();
});

Clazz.newMeth(C$, 'updateColours$O',  function (source) {
var ap=source;
this.colourBySequence$jalview_api_AlignmentViewPanel(ap);
});

Clazz.newMeth(C$, 'showUrl$S',  function (url) {
try {
this.appletJmolBinding.ap.av.applet.getAppletContext$().showDocument$java_net_URL$S(Clazz.new_($I$(2,1).c$$S,[url]), "jmol");
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.net.MalformedURLException")){
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'newJmolPopup$Z$S$Z',  function (translateLocale, menuName, asPopup) {
});

Clazz.newMeth(C$, 'notifyScriptTermination$S$I',  function (strStatus, msWalltime) {
});

Clazz.newMeth(C$, 'selectionChanged$javajs_util_BS',  function (arg0) {
});

Clazz.newMeth(C$, 'refreshPdbEntries$',  function () {
});

Clazz.newMeth(C$, 'showConsole$Z',  function (show) {
this.appletJmolBinding.showConsole$Z(show);
});

Clazz.newMeth(C$, 'createJmolConsole$java_awt_Container$S',  function (consolePanel, buttonsToShow) {
var appc=Clazz.new_($I$(3,1));
appc.start$org_jmol_viewer_Viewer(this.jmolViewer);
return appc;
});

Clazz.newMeth(C$, 'releaseUIResources$',  function () {
this.appletJmolBinding=null;
this.closeConsole$();
});

Clazz.newMeth(C$, 'releaseReferences$O',  function (svl) {
});

Clazz.newMeth(C$, 'resizeInnerPanel$S',  function (data) {
return null;
});

Clazz.newMeth(C$, 'getJSpecViewProperty$S',  function (arg0) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:27 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
