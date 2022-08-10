(function(){var P$=Clazz.newPackage("jalview.gui"),I$=[[0,'java.util.ArrayList','java.util.HashMap','jalview.ext.pymol.PymolManager','jalview.ext.pymol.PymolCommands','StringBuilder','jalview.structure.StructureCommand','jalview.gui.SequenceRenderer',['jalview.gui.StructureViewer','.ViewerType'],'jalview.bin.Console','java.net.URLEncoder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PymolBindingModel", null, 'jalview.structures.models.AAStructureBindingModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.structureFiles=Clazz.new_($I$(1,1));
this.pymolObjects=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['S',['lastLabelSpec'],'O',['pymolManager','jalview.ext.pymol.PymolManager','structureFiles','java.util.List','pymolObjects','java.util.Map']]
,['S',['LABEL_FORMAT']]]

Clazz.newMeth(C$, 'c$$jalview_gui_StructureViewerBase$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA',  function (viewer, ssm, pdbentry, sequenceIs) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[ssm, pdbentry, sequenceIs, null]);C$.$init$.apply(this);
this.pymolManager=Clazz.new_($I$(3,1));
this.setStructureCommands$jalview_structure_StructureCommandsI(Clazz.new_($I$(4,1)));
this.setViewer$jalview_api_structures_JalviewStructureDisplayI(viewer);
}, 1);

Clazz.newMeth(C$, 'getStructureFiles$',  function () {
return this.structureFiles.toArray$OA(Clazz.array(String, [this.structureFiles.size$()]));
});

Clazz.newMeth(C$, 'highlightAtoms$java_util_List',  function (atoms) {
var sb=Clazz.new_($I$(5,1));
for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var modelId=this.getModelIdForFile$S(atom.getPdbFile$());
sb.append$S(String.format$S$OA(" %s//%s/%d/*", Clazz.array(java.lang.Object, -1, [modelId, atom.getChain$(), Integer.valueOf$I(atom.getPdbResNum$())])));
}
var labelSpec=sb.toString();
if (labelSpec.equals$O(this.lastLabelSpec)) {
return;
}var command=Clazz.new_(["indicate", Clazz.array(String, -1, [labelSpec])],$I$(6,1).c$$S$SA);
this.executeCommand$jalview_structure_StructureCommandI$Z(command, false);
this.lastLabelSpec=labelSpec;
});

Clazz.newMeth(C$, 'getSequenceRenderer$jalview_api_AlignmentViewPanel',  function (avp) {
return Clazz.new_([avp.getAlignViewport$()],$I$(7,1).c$$jalview_api_AlignViewportI);
});

Clazz.newMeth(C$, 'executeCommand$jalview_structure_StructureCommandI$Z',  function (command, getReply) {
return this.pymolManager.sendCommand$jalview_structure_StructureCommandI$Z(command, getReply);
});

Clazz.newMeth(C$, 'getModelIdForFile$S',  function (file) {
return this.pymolObjects.containsKey$O(file) ? this.pymolObjects.get$O(file) : "";
});

Clazz.newMeth(C$, 'getViewerType$',  function () {
return $I$(8).PYMOL;
});

Clazz.newMeth(C$, 'isViewerRunning$',  function () {
return this.pymolManager != null  && this.pymolManager.isPymolLaunched$() ;
});

Clazz.newMeth(C$, 'closeViewer$Z',  function (closePymol) {
C$.superclazz.prototype.closeViewer$Z.apply(this, [closePymol]);
this.pymolManager=null;
});

Clazz.newMeth(C$, 'launchPymol$',  function () {
if (this.pymolManager.isPymolLaunched$()) {
return true;
}var pymol=this.pymolManager.launchPymol$();
if (pymol != null ) {
this.startExternalViewerMonitor$Process(pymol);
} else {
$I$(9).error$S("Failed to launch PyMOL!");
}return pymol != null ;
});

Clazz.newMeth(C$, 'openFile$jalview_datamodel_PDBEntry',  function (pe) {
var file=pe.getFile$();
var cmd=this.getCommandGenerator$().loadFile$S(file);
var pdbId=pe.getId$();
try {
var safePDBId=$I$(10).encode$S$S(pdbId, "UTF-8");
pdbId=safePDBId.replace$C$C("%", "_");
pdbId=pdbId.replace$CharSequence$CharSequence("-", "__");
var fc=pdbId.charAt$I(0);
if (fc >= "0" && fc <= "9" ) {
pdbId='s' + pdbId;
}} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
$I$(9).error$S$Throwable("Unxpected encoding exception for '" + pdbId + "'" , x);
} else {
throw x;
}
}
cmd.addParameter$S(pdbId);
this.executeCommand$jalview_structure_StructureCommandI$Z(cmd, false);
this.pymolObjects.put$O$O(file, pdbId);
if (!this.structureFiles.contains$O(file)) {
this.structureFiles.add$O(file);
}if (this.getSsm$() != null ) {
this.getSsm$().addStructureViewerListener$O(this);
}});

Clazz.newMeth(C$, 'getModelId$I$S',  function (pdbfnum, file) {
return file;
});

Clazz.newMeth(C$, 'getSessionFileExtension$',  function () {
return ".pse";
});

Clazz.newMeth(C$, 'getHelpURL$',  function () {
return "https://pymolwiki.org/";
});

Clazz.newMeth(C$, 'sendFeaturesToViewer$jalview_api_AlignmentViewPanel',  function (avp) {
var featureValues=this.buildFeaturesMap$jalview_api_AlignmentViewPanel(avp);
var commands=this.getCommandGenerator$().setAttributes$java_util_Map(featureValues);
this.executeCommands$java_util_List$Z$S(commands, false, null);
return commands.size$();
});

C$.$static$=function(){C$.$static$=0;
C$.LABEL_FORMAT="\"%s %s\" % (resn,resi)";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:35 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
