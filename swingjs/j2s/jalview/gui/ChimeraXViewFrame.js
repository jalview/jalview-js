(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,['jalview.gui.StructureViewer','.ViewerType'],'jalview.gui.JalviewChimeraXBindingModel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChimeraXViewFrame", null, 'jalview.gui.ChimeraViewFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_AlignmentPanel',  function (pdb, seqsForPdb, chains, ap) {
;C$.superclazz.c$$jalview_datamodel_PDBEntry$jalview_datamodel_SequenceIA$SA$jalview_gui_AlignmentPanel.apply(this,[pdb, seqsForPdb, chains, ap]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_PDBEntryA$Z$jalview_datamodel_SequenceIAA$jalview_gui_AlignmentPanel',  function (pdbsForFile, superposeAdded, theSeqs, ap) {
;C$.superclazz.c$$jalview_datamodel_PDBEntryA$Z$jalview_datamodel_SequenceIAA$jalview_gui_AlignmentPanel.apply(this,[pdbsForFile, superposeAdded, theSeqs, ap]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_StructureViewerModel$jalview_gui_AlignmentPanel$S$S',  function (viewerData, alignPanel, sessionFile, vid) {
;C$.superclazz.c$$jalview_datamodel_StructureViewerModel$jalview_gui_AlignmentPanel$S$S.apply(this,[viewerData, alignPanel, sessionFile, vid]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getViewerType$',  function () {
return $I$(1).CHIMERAX;
});

Clazz.newMeth(C$, 'getViewerName$',  function () {
return "ChimeraX";
});

Clazz.newMeth(C$, 'newBindingModel$jalview_gui_AlignmentPanel$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA',  function (ap, pdbentrys, seqs) {
return Clazz.new_([this, ap.getStructureSelectionManager$(), pdbentrys, seqs, null],$I$(2,1).c$$jalview_gui_ChimeraViewFrame$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:33 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
