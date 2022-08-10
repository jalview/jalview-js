(function(){var P$=Clazz.newPackage("jalview.ext.rbvi.chimera"),p$1={},I$=[[0,'java.util.LinkedHashMap','jalview.structure.AtomSpec','java.util.ArrayList',['ext.edu.ucsf.rbvi.strucviz2.StructureManager','.ModelType'],['jalview.gui.StructureViewer','.ViewerType'],'jalview.ext.rbvi.chimera.ChimeraXManager','ext.edu.ucsf.rbvi.strucviz2.StructureManager','ext.edu.ucsf.rbvi.strucviz2.ChimeraManager','jalview.ext.rbvi.chimera.ChimeraXCommands','jalview.ext.rbvi.chimera.ChimeraCommands','jalview.ext.rbvi.chimera.ChimeraListener','jalview.bin.Console','StringBuilder','jalview.structure.StructureCommandI','jalview.structure.StructureCommand','Thread','java.io.File','java.io.PrintWriter','java.io.FileOutputStream','java.util.Collections','jalview.datamodel.SequenceFeature']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewChimeraBinding", null, 'jalview.structures.models.AAStructureBindingModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chimeraMaps=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['S',['lastHighlightCommand'],'O',['chimeraManager','ext.edu.ucsf.rbvi.strucviz2.ChimeraManager','chimeraListener','jalview.httpserver.AbstractRequestHandler','chimeraMaps','java.util.Map']]]

Clazz.newMeth(C$, 'parseAtomSpec$S',  function (atomSpec) {
return $I$(2).fromChimeraAtomspec$S(atomSpec);
});

Clazz.newMeth(C$, 'openFile$jalview_datamodel_PDBEntry',  function (pe) {
var file=pe.getFile$();
try {
var modelsToMap=Clazz.new_($I$(3,1));
var oldList=this.chimeraManager.getModelList$();
var alreadyOpen=false;
for (var open, $open = oldList.iterator$(); $open.hasNext$()&&((open=($open.next$())),1);) {
if (open.getModelName$().equals$O(pe.getId$())) {
alreadyOpen=true;
modelsToMap.add$O(open);
}}
if (!alreadyOpen) {
this.chimeraManager.openModel$S$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(file, pe.getId$(), $I$(4).PDB_MODEL);
this.addChimeraModel$jalview_datamodel_PDBEntry$java_util_List(pe, modelsToMap);
}this.chimeraMaps.put$O$O(file, modelsToMap);
if (this.getSsm$() != null ) {
this.getSsm$().addStructureViewerListener$O(this);
}return true;
} catch (q) {
if (Clazz.exceptionOf(q,"Exception")){
p$1.log$S.apply(this, ["Exception when trying to open model " + file + "\n" + q.toString() ]);
q.printStackTrace$();
} else {
throw q;
}
}
return false;
});

Clazz.newMeth(C$, 'addChimeraModel$jalview_datamodel_PDBEntry$java_util_List',  function (pe, modelsToMap) {
var newList=this.chimeraManager.getModelList$();
for (var cm, $cm = newList.iterator$(); $cm.hasNext$()&&((cm=($cm.next$())),1);) {
if (cm.getModelName$().equals$O(pe.getId$())) {
modelsToMap.add$O(cm);
}}
});

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType',  function (ssm, pdbentry, sequenceIs, protocol) {
;C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this,[ssm, pdbentry, sequenceIs, protocol]);C$.$init$.apply(this);
var chimeraX=$I$(5).CHIMERAX.equals$O(this.getViewerType$());
this.chimeraManager=chimeraX ? Clazz.new_([Clazz.new_($I$(7,1).c$$Z,[true])],$I$(6,1).c$$ext_edu_ucsf_rbvi_strucviz2_StructureManager) : Clazz.new_([Clazz.new_($I$(7,1).c$$Z,[true])],$I$(8,1).c$$ext_edu_ucsf_rbvi_strucviz2_StructureManager);
this.setStructureCommands$jalview_structure_StructureCommandsI(chimeraX ? Clazz.new_($I$(9,1)) : Clazz.new_($I$(10,1)));
}, 1);

Clazz.newMeth(C$, 'getViewerType$',  function () {
return $I$(5).CHIMERA;
});

Clazz.newMeth(C$, 'startChimeraListener$',  function () {
try {
this.chimeraListener=Clazz.new_($I$(11,1).c$$jalview_ext_rbvi_chimera_JalviewChimeraBinding,[this]);
this.startListening$S(this.chimeraListener.getUri$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.BindException")){
System.err.println$S("Failed to start Chimera listener: " + e.getMessage$());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'closeViewer$Z',  function (closeChimera) {
C$.superclazz.prototype.closeViewer$Z.apply(this, [closeChimera]);
if (this.chimeraListener != null ) {
this.chimeraListener.shutdown$();
this.chimeraListener=null;
}if (closeChimera && (this.getViewerType$() === $I$(5).CHIMERA ) ) {
this.chimeraManager.getChimeraProcess$().destroy$();
}this.chimeraManager.clearOnChimeraExit$();
this.chimeraManager=null;
});

Clazz.newMeth(C$, 'getModelSpec$I',  function (pdbfnum) {
if (pdbfnum < 0 || pdbfnum >= this.getPdbCount$() ) {
return "#" + pdbfnum;
}var maps=this.chimeraMaps.get$O(this.getStructureFiles$()[pdbfnum]);
var hasSubModels=maps != null  && maps.size$() > 1 ;
return "#" + String.valueOf$I(pdbfnum) + (hasSubModels ? ".1" : "") ;
});

Clazz.newMeth(C$, 'launchChimera$',  function () {
if (this.chimeraManager.isChimeraLaunched$()) {
return true;
}var launched=this.chimeraManager.launchChimera$java_util_List(this.getChimeraPaths$());
if (launched) {
this.startExternalViewerMonitor$Process(this.chimeraManager.getChimeraProcess$());
} else {
p$1.log$S.apply(this, ["Failed to launch Chimera!"]);
}return launched;
});

Clazz.newMeth(C$, 'getChimeraPaths$',  function () {
return $I$(7).getChimeraPaths$Z(false);
});

Clazz.newMeth(C$, 'isViewerRunning$',  function () {
return this.chimeraManager != null  && this.chimeraManager.isChimeraLaunched$() ;
});

Clazz.newMeth(C$, 'executeCommand$jalview_structure_StructureCommandI$Z',  function (command, getResponse) {
if (this.chimeraManager == null  || command == null  ) {
return null;
}var reply=null;
var cmd=command.getCommand$().trim$();
var lastReply=this.chimeraManager.sendChimeraCommand$S$Z(cmd, getResponse);
if (getResponse) {
reply=lastReply;
if ($I$(12).isDebugEnabled$()) {
$I$(12,"debug$S",["Response from command ('" + cmd + "') was:\n" + lastReply ]);
}} else {
if ($I$(12).isDebugEnabled$()) {
$I$(12).debug$S("Command executed: " + cmd);
}}return reply;
});

Clazz.newMeth(C$, 'getStructureFiles$',  function () {
if (this.chimeraManager == null ) {
return Clazz.array(String, [0]);
}return this.chimeraMaps.keySet$().toArray$OA(this.modelFileNames=Clazz.array(String, [this.chimeraMaps.size$()]));
});

Clazz.newMeth(C$, 'highlightAtoms$java_util_List',  function (atoms) {
if (atoms == null  || atoms.size$() == 0 ) {
return;
}var forChimeraX=this.chimeraManager.isChimeraX$();
var cmd=Clazz.new_($I$(13,1).c$$I,[128]);
var first=true;
var found=false;
for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var pdbResNum=atom.getPdbResNum$();
var chain=atom.getChain$();
var pdbfile=atom.getPdbFile$();
var cms=this.chimeraMaps.get$O(pdbfile);
if (cms != null  && !cms.isEmpty$() ) {
if (first) {
cmd.append$S(forChimeraX ? "label #" : "rlabel #");
} else {
cmd.append$S(",");
}first=false;
if (forChimeraX) {
cmd.append$I(cms.get$I(0).getModelNumber$()).append$S("/").append$S(chain).append$S(":").append$I(pdbResNum);
} else {
cmd.append$I(cms.get$I(0).getModelNumber$()).append$S(":").append$I(pdbResNum);
if (!chain.equals$O(" ") && !forChimeraX ) {
cmd.append$S(".").append$S(chain);
}}found=true;
}}
var command=cmd.toString();
if (command.equals$O(this.lastHighlightCommand)) {
return;
}if (!found) {
cmd.setLength$I(0);
}if (this.lastHighlightCommand != null ) {
cmd.insert$I$S(0, ";");
cmd.insert$I$S(0, this.lastHighlightCommand);
cmd.insert$I$S(0, "~");
}if (cmd.length$() > 0) {
this.executeCommand$Z$S$jalview_structure_StructureCommandIA(true, null, Clazz.array($I$(14), -1, [Clazz.new_([cmd.toString(), Clazz.array(String, -1, [])],$I$(15,1).c$$S$SA)]));
}if (found) {
this.lastHighlightCommand=command;
}});

Clazz.newMeth(C$, 'highlightChimeraSelection$',  function () {
var command=this.getCommandGenerator$().getSelectedResidues$();
var action=((P$.JalviewChimeraBinding$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JalviewChimeraBinding$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var chimeraReply=this.b$['jalview.ext.rbvi.chimera.JalviewChimeraBinding'].executeCommand$jalview_structure_StructureCommandI$Z.apply(this.b$['jalview.ext.rbvi.chimera.JalviewChimeraBinding'], [this.$finals$.command, true]);
var selectedResidues=Clazz.new_($I$(3,1));
if (chimeraReply != null ) {
for (var inputLine, $inputLine = chimeraReply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var inputLineParts=inputLine.split$S("\\s+");
if (inputLineParts.length >= 5) {
selectedResidues.add$O(inputLineParts[2]);
}}
}var atomSpecs=this.b$['jalview.ext.rbvi.chimera.JalviewChimeraBinding'].convertStructureResiduesToAlignment$java_util_List.apply(this.b$['jalview.ext.rbvi.chimera.JalviewChimeraBinding'], [selectedResidues]);
this.b$['jalview.structures.models.AAStructureBindingModel'].getSsm$.apply(this.b$['jalview.structures.models.AAStructureBindingModel'], []).mouseOverStructure$java_util_List(atomSpecs);
});
})()
), Clazz.new_(P$.JalviewChimeraBinding$1.$init$,[this, {command:command}]));
Clazz.new_($I$(16,1).c$$Runnable,[action]).start$();
});

Clazz.newMeth(C$, 'convertStructureResiduesToAlignment$java_util_List',  function (structureSelection) {
var atomSpecs=Clazz.new_($I$(3,1));
for (var atomSpec, $atomSpec = structureSelection.iterator$(); $atomSpec.hasNext$()&&((atomSpec=($atomSpec.next$())),1);) {
try {
var spec=this.parseAtomSpec$S(atomSpec);
var pdbfilename=this.getPdbFileForModel$I(spec.getModelNumber$());
spec.setPdbFile$S(pdbfilename);
atomSpecs.add$O(spec);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
$I$(12).error$S("Failed to parse atomspec: " + atomSpec);
} else {
throw e;
}
}
}
return atomSpecs;
});

Clazz.newMeth(C$, 'getPdbFileForModel$I',  function (modelId) {
var pdbfilename=this.modelFileNames[0];
 findfileloop : for (var pdbfile, $pdbfile = this.chimeraMaps.keySet$().iterator$(); $pdbfile.hasNext$()&&((pdbfile=($pdbfile.next$())),1);) {
for (var cm, $cm = this.chimeraMaps.get$O(pdbfile).iterator$(); $cm.hasNext$()&&((cm=($cm.next$())),1);) {
if (cm.getModelNumber$() == modelId) {
pdbfilename=pdbfile;
break findfileloop;
}}
}
return pdbfilename;
});

Clazz.newMeth(C$, 'log$S',  function (message) {
System.err.println$S("## Chimera log: " + message);
}, p$1);

Clazz.newMeth(C$, 'sendFeaturesToViewer$jalview_api_AlignmentViewPanel',  function (avp) {
var featureValues=this.buildFeaturesMap$jalview_api_AlignmentViewPanel(avp);
var commands=this.getCommandGenerator$().setAttributes$java_util_Map(featureValues);
if (commands.size$() > 10) {
this.sendCommandsByFile$java_util_List(commands);
} else {
this.executeCommands$java_util_List$Z$S(commands, false, null);
}return commands.size$();
});

Clazz.newMeth(C$, 'sendCommandsByFile$java_util_List',  function (commands) {
try {
var tmp=$I$(17,"createTempFile$S$S",["chim", this.getCommandFileExtension$()]);
tmp.deleteOnExit$();
var out=Clazz.new_([Clazz.new_($I$(19,1).c$$java_io_File,[tmp])],$I$(18,1).c$$java_io_OutputStream);
for (var command, $command = commands.iterator$(); $command.hasNext$()&&((command=($command.next$())),1);) {
out.println$S(command.getCommand$());
}
out.flush$();
out.close$();
var path=tmp.getAbsolutePath$();
var command=this.getCommandGenerator$().openCommandFile$S(path);
this.executeCommand$Z$S$jalview_structure_StructureCommandIA(false, null, Clazz.array($I$(14), -1, [command]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Sending commands to Chimera via file failed with " + e.getMessage$());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getCommandFileExtension$',  function () {
return ".com";
});

Clazz.newMeth(C$, 'createFeaturesForAttributes$S$java_util_List',  function (attName, residues) {
var featuresAdded=0;
var featureGroup=this.getViewerFeatureGroup$();
for (var residue, $residue = residues.iterator$(); $residue.hasNext$()&&((residue=($residue.next$())),1);) {
var spec=null;
var tokens=residue.split$S(" ");
if (tokens.length < 5) {
continue;
}var atomSpec=tokens[2];
var attValue=tokens[4];
if ("None".equalsIgnoreCase$S(attValue) || "False".equalsIgnoreCase$S(attValue) ) {
continue;
}try {
spec=this.parseAtomSpec$S(atomSpec);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
$I$(12).error$S("Problem parsing atomspec " + atomSpec);
continue;
} else {
throw e;
}
}
var chainId=spec.getChain$();
var description=attValue;
var score=NaN;
try {
score=(Float.valueOf$S(attValue)).valueOf();
description=chainId;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
var pdbFile=this.getPdbFileForModel$I(spec.getModelNumber$());
spec.setPdbFile$S(pdbFile);
var atoms=$I$(20).singletonList$O(spec);
var sr=this.getSsm$().findAlignmentPositionsForStructurePositions$java_util_List(atoms);
for (var m, $m = sr.getResults$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
var seq=m.getSequence$();
var start=m.getStart$();
var end=m.getEnd$();
var sf=Clazz.new_($I$(21,1).c$$S$S$I$I$F$S,[attName, description, start, end, score, featureGroup]);
if (seq.addSequenceFeature$jalview_datamodel_SequenceFeature(sf)) {
++featuresAdded;
}}
}
return featuresAdded;
});

Clazz.newMeth(C$, 'getViewerFeatureGroup$',  function () {
return "Chimera";
});

Clazz.newMeth(C$, 'getModelIdForFile$S',  function (pdbFile) {
var foundModels=this.chimeraMaps.get$O(pdbFile);
if (foundModels != null  && !foundModels.isEmpty$() ) {
return String.valueOf$I(foundModels.get$I(0).getModelNumber$());
}return "";
});

Clazz.newMeth(C$, 'getChimeraAttributes$',  function () {
var attributes=Clazz.new_($I$(3,1));
var command=this.getCommandGenerator$().listResidueAttributes$();
var reply=this.executeCommand$jalview_structure_StructureCommandI$Z(command, true);
if (reply != null ) {
for (var inputLine, $inputLine = reply.iterator$(); $inputLine.hasNext$()&&((inputLine=($inputLine.next$())),1);) {
var lineParts=inputLine.split$S("\\s");
if (lineParts.length == 2 && lineParts[0].equals$O("resattr") ) {
var attName=lineParts[1];
if (!attName.startsWith$S("jv_")) {
attributes.add$O(attName);
}}}
}return attributes;
});

Clazz.newMeth(C$, 'getSessionFileExtension$',  function () {
return ".py";
});

Clazz.newMeth(C$, 'getHelpURL$',  function () {
return "https://www.cgl.ucsf.edu/chimera/docs/UsersGuide";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
