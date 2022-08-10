(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'jalview.gui.SequenceRenderer','javax.swing.SwingUtilities']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewChimeraBindingModel", null, 'jalview.ext.rbvi.chimera.JalviewChimeraBinding');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_gui_ChimeraViewFrame$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType',  function (chimeraViewFrame, ssm, pdbentry, sequenceIs, protocol) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[ssm, pdbentry, sequenceIs, protocol]);C$.$init$.apply(this);
this.setViewer$jalview_api_structures_JalviewStructureDisplayI(chimeraViewFrame);
}, 1);

Clazz.newMeth(C$, 'getSequenceRenderer$jalview_api_AlignmentViewPanel',  function (alignment) {
return Clazz.new_([(alignment).av],$I$(1,1).c$$jalview_api_AlignViewportI);
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
$I$(2,"invokeLater$Runnable",[((P$.JalviewChimeraBindingModel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewChimeraBindingModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var theViewer=this.b$['jalview.structures.models.AAStructureBindingModel'].getViewer$.apply(this.b$['jalview.structures.models.AAStructureBindingModel'], []);
theViewer.updateTitleAndMenus$();
(theViewer).revalidate$();
});
})()
), Clazz.new_(P$.JalviewChimeraBindingModel$1.$init$,[this, null]))]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:34 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
