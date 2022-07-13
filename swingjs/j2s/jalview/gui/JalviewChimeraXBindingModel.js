(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.ext.rbvi.chimera.ChimeraXCommands','ext.edu.ucsf.rbvi.strucviz2.StructureManager','jalview.structure.StructureCommand','ext.edu.ucsf.rbvi.strucviz2.ChimeraModel',['ext.edu.ucsf.rbvi.strucviz2.StructureManager','.ModelType'],['jalview.gui.StructureViewer','.ViewerType'],'jalview.structure.AtomSpec']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewChimeraXBindingModel", null, 'jalview.gui.JalviewChimeraBindingModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_gui_ChimeraViewFrame$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType',  function (chimeraViewFrame, ssm, pdbentry, sequenceIs, protocol) {
;C$.superclazz.c$$jalview_gui_ChimeraViewFrame$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[chimeraViewFrame, ssm, pdbentry, sequenceIs, protocol]);C$.$init$.apply(this);
this.setStructureCommands$jalview_structure_StructureCommandsI(Clazz.new_($I$(1,1)));
}, 1);

Clazz.newMeth(C$, 'getChimeraPaths$',  function () {
return $I$(2).getChimeraPaths$Z(true);
});

Clazz.newMeth(C$, 'addChimeraModel$jalview_datamodel_PDBEntry$java_util_List',  function (pe, modelsToMap) {
var modelNumber=this.chimeraMaps.size$() + 1;
var command="setattr #" + modelNumber + " models name " + pe.getId$() ;
this.executeCommand$jalview_structure_StructureCommandI$Z(Clazz.new_([command, Clazz.array(String, -1, [])],$I$(3,1).c$$S$SA), false);
modelsToMap.add$O(Clazz.new_([pe.getId$(), $I$(5).PDB_MODEL, modelNumber, 0],$I$(4,1).c$$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType$I$I));
});

Clazz.newMeth(C$, 'getCommandFileExtension$',  function () {
return ".cxc";
});

Clazz.newMeth(C$, 'getSessionFileExtension$',  function () {
return ".cxs";
});

Clazz.newMeth(C$, 'getHelpURL$',  function () {
return "http://www.rbvi.ucsf.edu/chimerax/docs/user/index.html";
});

Clazz.newMeth(C$, 'getViewerType$',  function () {
return $I$(6).CHIMERAX;
});

Clazz.newMeth(C$, 'getModelId$I$S',  function (pdbfnum, file) {
return String.valueOf$I(pdbfnum + 1);
});

Clazz.newMeth(C$, 'parseAtomSpec$S',  function (atomSpec) {
return $I$(7).fromChimeraXAtomspec$S(atomSpec);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
