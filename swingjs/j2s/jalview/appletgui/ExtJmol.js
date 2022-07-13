(function(){var P$=Clazz.newPackage("jalview.appletgui"),I$=[[0,'java.util.ArrayList','jalview.datamodel.PDBEntry']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExtJmol", null, 'jalview.ext.jmol.JalviewJmolBinding');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ap','jalview.appletgui.AlignmentPanel']]]

Clazz.newMeth(C$, 'c$$jalview_appletgui_AlignFrame$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType',  function (alframe, pdbentry, seq, protocol) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[alframe.alignPanel.getStructureSelectionManager$(), pdbentry, seq, protocol]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_viewer_Viewer$jalview_appletgui_AlignmentPanel$jalview_datamodel_SequenceIAA',  function (viewer, alignPanel, seqs) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_SequenceIAA$org_jmol_viewer_Viewer.apply(this,[alignPanel.getStructureSelectionManager$(), seqs, viewer]);C$.$init$.apply(this);
this.ap=alignPanel;
this.notifyFileLoaded$S$S$S$S$I(null, null, null, null, 0);
}, 1);

Clazz.newMeth(C$, 'updateColours$O',  function (source) {
});

Clazz.newMeth(C$, 'showUrl$S',  function (arg0) {
this.showUrl$S$S(arg0, "jmol");
});

Clazz.newMeth(C$, 'getSequenceRenderer$jalview_api_AlignmentViewPanel',  function (alignment) {
return (alignment).getSequenceRenderer$();
});

Clazz.newMeth(C$, 'notifyScriptTermination$S$I',  function (strStatus, msWalltime) {
});

Clazz.newMeth(C$, 'sendConsoleEcho$S',  function (strEcho) {
});

Clazz.newMeth(C$, 'sendConsoleMessage$S',  function (strStatus) {
});

Clazz.newMeth(C$, 'showUrl$S$S',  function (url, target) {
this.ap.alignFrame.showURL$S$S(url, target);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
});

Clazz.newMeth(C$, 'selectionChanged$javajs_util_BS',  function (arg0) {
System.out.println$O(arg0);
});

Clazz.newMeth(C$, 'refreshPdbEntries$',  function () {
var pdbe=Clazz.new_($I$(1,1));
var fileids=Clazz.new_($I$(1,1));
var sq=this.ap.av.getAlignment$().getSequencesArray$();
for (var s=0; s < sq.length; s++) {
var pdbids=sq[s].getAllPDBEntries$();
if (pdbids != null ) {
for (var pe=0, peSize=pdbids.size$(); pe < peSize; pe++) {
var pentry=pdbids.elementAt$I(pe);
if (!fileids.contains$O(pentry.getId$())) {
pdbe.add$O(pentry);
} else {
fileids.add$O(pentry.getId$());
}}
}}
var newEntries=Clazz.array($I$(2), [pdbe.size$()]);
for (var pe=0; pe < pdbe.size$(); pe++) {
newEntries[pe]=pdbe.get$I(pe);
}
this.setPdbentry$jalview_datamodel_PDBEntryA(newEntries);
});

Clazz.newMeth(C$, 'showConsole$Z',  function (show) {
System.err.println$S("WARNING: unexpected call to ExtJmol's showConsole method. (showConsole=" + show);
});

Clazz.newMeth(C$, 'createJmolConsole$java_awt_Container$S',  function (consolePanel, buttonsToShow) {
return null;
});

Clazz.newMeth(C$, 'releaseUIResources$',  function () {
this.ap=null;
this.closeConsole$();
});

Clazz.newMeth(C$, 'getJSpecViewProperty$S',  function (arg0) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:27 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
