(function(){var P$=Clazz.newPackage("jalview.ext.rbvi.chimera"),p$1={},I$=[[0,'jalview.util.MessageManager','java.util.ArrayList','java.util.Hashtable','java.util.LinkedHashMap',['ext.edu.ucsf.rbvi.strucviz2.StructureManager','.ModelType'],'ext.edu.ucsf.rbvi.strucviz2.ChimeraManager','ext.edu.ucsf.rbvi.strucviz2.StructureManager','Thread','jalview.ext.rbvi.chimera.ChimeraListener','StringBuilder','java.util.BitSet',['jalview.structures.models.AAStructureBindingModel','.SuperposeData'],'jalview.ext.rbvi.chimera.ChimeraCommands','jalview.structure.AtomSpec','jalview.schemes.ResidueProperties','jalview.bin.Cache','java.io.File','java.io.PrintWriter','java.io.FileOutputStream','java.util.Collections','jalview.datamodel.SequenceFeature']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewChimeraBinding", null, 'jalview.structures.models.AAStructureBindingModel');
C$.COLOURING_CHIMERA=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.COLOURING_CHIMERA=$I$(1).getString$S("status.colouring_chimera");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.chainNames=null;
this.chainFile=null;
this.viewer=null;
this.chimeraListener=null;
this.$loadingFromArchive=false;
this.$loadingFinished=false;
this.chimeraMaps=null;
this.lastHighlightCommand=null;
this.loadNotifiesHandled=0;
this.chimeraMonitor=null;
this._modelFileNameMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.chainNames=Clazz.new_($I$(2));
this.chainFile=Clazz.new_($I$(3));
this.$loadingFromArchive=false;
this.$loadingFinished=true;
this.chimeraMaps=Clazz.new_($I$(4));
this.loadNotifiesHandled=0;
}, 1);

Clazz.newMeth(C$, 'openFile$jalview_datamodel_PDBEntry', function (pe) {
var file=pe.getFile$();
try {
var modelsToMap=Clazz.new_($I$(2));
var oldList=this.viewer.getModelList$();
var alreadyOpen=false;
for (var open, $open = oldList.iterator$(); $open.hasNext$()&&((open=($open.next$())),1);) {
if (open.getModelName$().equals$O(pe.getId$())) {
alreadyOpen=true;
modelsToMap.add$TE(open);
}}
if (!alreadyOpen) {
this.viewer.openModel$S$S$ext_edu_ucsf_rbvi_strucviz2_StructureManager_ModelType(file, pe.getId$(), $I$(5).PDB_MODEL);
var newList=this.viewer.getModelList$();
for (var cm, $cm = newList.iterator$(); $cm.hasNext$()&&((cm=($cm.next$())),1);) {
if (cm.getModelName$().equals$O(pe.getId$())) {
modelsToMap.add$TE(cm);
}}
}this.chimeraMaps.put$TK$TV(file, modelsToMap);
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

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType', function (ssm, pdbentry, sequenceIs, protocol) {
C$.superclazz.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType.apply(this, [ssm, pdbentry, sequenceIs, protocol]);
C$.$init$.apply(this);
this.viewer=Clazz.new_($I$(6).c$$ext_edu_ucsf_rbvi_strucviz2_StructureManager,[Clazz.new_($I$(7).c$$Z,[true])]);
}, 1);

Clazz.newMeth(C$, 'startChimeraProcessMonitor$', function () {
var p=this.viewer.getChimeraProcess$();
this.chimeraMonitor=Clazz.new_($I$(8).c$$Runnable,[((P$.JalviewChimeraBinding$1||
(function(){var C$=Clazz.newClass(P$, "JalviewChimeraBinding$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.$finals$.p.waitFor$();
var display=this.b$['jalview.structures.models.AAStructureBindingModel'].getViewer$.apply(this.b$['jalview.structures.models.AAStructureBindingModel'], []);
if (display != null ) {
display.closeViewer$Z(false);
}} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.JalviewChimeraBinding$1.$init$, [this, {p: p}]))]);
this.chimeraMonitor.start$();
});

Clazz.newMeth(C$, 'startChimeraListener$', function () {
try {
this.chimeraListener=Clazz.new_($I$(9).c$$jalview_ext_rbvi_chimera_JalviewChimeraBinding,[this]);
this.viewer.startListening$S(this.chimeraListener.getUri$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.BindException")){
System.err.println$S("Failed to start Chimera listener: " + e.getMessage$());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'showChains$java_util_List', function (toshow) {
var cmd=Clazz.new_($I$(10).c$$I,[64]);
var first=true;
for (var chain, $chain = toshow.iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
var modelNumber=this.getModelNoForChain$S(chain);
var showChainCmd=modelNumber == -1 ? "" : modelNumber + ":." + chain.split$S(":")[1] ;
if (!first) {
cmd.append$S(",");
}cmd.append$S(showChainCmd);
first=false;
}
var command="~display #*; ~ribbon #*; ribbon :" + cmd.toString();
this.sendChimeraCommand$S$Z(command, false);
});

Clazz.newMeth(C$, 'closeViewer$Z', function (closeChimera) {
this.getSsm$().removeStructureViewerListener$O$SA(this, this.getStructureFiles$());
if (closeChimera) {
this.viewer.exitChimera$();
}if (this.chimeraListener != null ) {
this.chimeraListener.shutdown$();
this.chimeraListener=null;
}this.viewer=null;
if (this.chimeraMonitor != null ) {
this.chimeraMonitor.interrupt$();
}this.releaseUIResources$();
});

Clazz.newMeth(C$, 'colourByChain$', function () {
this.colourBySequence=false;
this.sendAsynchronousCommand$S$S("rainbow chain", C$.COLOURING_CHIMERA);
});

Clazz.newMeth(C$, 'colourByCharge$', function () {
this.colourBySequence=false;
var command="color white;color red ::ASP;color red ::GLU;color blue ::LYS;color blue ::ARG;color yellow ::CYS";
this.sendAsynchronousCommand$S$S(command, C$.COLOURING_CHIMERA);
});

Clazz.newMeth(C$, 'superposeStructures$jalview_datamodel_AlignmentIA$IA$jalview_datamodel_HiddenColumnsA', function (_alignment, _refStructure, _hiddenCols) {
var allComs=Clazz.new_($I$(10).c$$I,[128]);
var files=this.getStructureFiles$();
if (!this.waitForFileLoad$SA(files)) {
return null;
}this.refreshPdbEntries$();
var selectioncom=Clazz.new_($I$(10).c$$I,[256]);
for (var a=0; a < _alignment.length; a++) {
var refStructure=_refStructure[a];
var alignment=_alignment[a];
var hiddenCols=_hiddenCols[a];
if (refStructure >= files.length) {
System.err.println$S("Ignoring invalid reference structure value " + refStructure);
refStructure=-1;
}var matched=Clazz.new_($I$(11));
for (var m=0; m < alignment.getWidth$(); m++) {
if (hiddenCols == null  || hiddenCols.isVisible$I(m) ) {
matched.set$I(m);
}}
var structures=Clazz.array($I$(12), [files.length]);
for (var f=0; f < files.length; f++) {
structures[f]=Clazz.new_($I$(12).c$$I, [this, null, alignment.getWidth$()]);
}
var candidateRefStructure=this.findSuperposableResidues$jalview_datamodel_AlignmentI$java_util_BitSet$jalview_structures_models_AAStructureBindingModel_SuperposeDataA(alignment, matched, structures);
if (refStructure < 0) {
refStructure=candidateRefStructure;
}var nmatched=matched.cardinality$();
if (nmatched < 4) {
return $I$(1).formatMessage$S$OA("label.insufficient_residues", [new Integer(nmatched)]);
}var selcom=Clazz.array(String, [files.length]);
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
var chainCd="." + structures[pdbfnum].chain;
var lpos=-1;
var run=false;
var molsel=Clazz.new_($I$(10));
var nextColumnMatch=matched.nextSetBit$I(0);
while (nextColumnMatch != -1){
var pdbResNum=structures[pdbfnum].pdbResNo[nextColumnMatch];
if (lpos != pdbResNum - 1) {
if (lpos != -1) {
molsel.append$S(String.valueOf$I(lpos));
molsel.append$S(chainCd);
molsel.append$S(",");
}run=false;
} else {
if (!run) {
molsel.append$S(String.valueOf$I(lpos));
molsel.append$S("-");
}run=true;
}lpos=pdbResNum;
nextColumnMatch=matched.nextSetBit$I(nextColumnMatch + 1);
}
if (lpos != -1) {
molsel.append$S(String.valueOf$I(lpos));
molsel.append$S(chainCd);
}if (molsel.length$() > 1) {
selcom[pdbfnum]=molsel.toString();
selectioncom.append$S("#").append$S(String.valueOf$I(pdbfnum)).append$S(":");
selectioncom.append$S(selcom[pdbfnum]);
selectioncom.append$S(" ");
if (pdbfnum < files.length - 1) {
selectioncom.append$S("| ");
}} else {
selcom[pdbfnum]=null;
}}
var command=Clazz.new_($I$(10).c$$I,[256]);
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
if (pdbfnum == refStructure || selcom[pdbfnum] == null   || selcom[refStructure] == null  ) {
continue;
}if (command.length$() > 0) {
command.append$S(";");
}command.append$S("match ").append$S(this.getModelSpec$I(pdbfnum)).append$S(":");
command.append$S(selcom[pdbfnum]);
command.append$S("@").append$S(structures[pdbfnum].isRna ? "P" : "CA");
command.append$S("&~@.B-Z&~@.2-9");
command.append$S(" ").append$S(this.getModelSpec$I(refStructure)).append$S(":");
command.append$S(selcom[refStructure]);
command.append$S("@").append$S(structures[refStructure].isRna ? "P" : "CA");
command.append$S("&~@.B-Z&~@.2-9");
}
if (selectioncom.length$() > 0) {
if (false) {
System.out.println$S("Select regions:\n" + selectioncom.toString());
System.out.println$S("Superimpose command(s):\n" + command.toString());
}allComs.append$S("~display all; chain @CA|P; ribbon ").append$S(selectioncom.toString()).append$S(";" + command.toString());
}}
var error=null;
if (selectioncom.length$() > 0) {
if (selectioncom.substring$I(selectioncom.length$() - 1).equals$O("|")) {
selectioncom.setLength$I(selectioncom.length$() - 1);
}if (false) {
System.out.println$S("Select regions:\n" + selectioncom.toString());
}allComs.append$S("; ~display all; chain @CA|P; ribbon ").append$S(selectioncom.toString()).append$S("; focus");
var chimeraReplies=this.sendChimeraCommand$S$Z(allComs.toString(), true);
for (var reply, $reply = chimeraReplies.iterator$(); $reply.hasNext$()&&((reply=($reply.next$())),1);) {
if (reply.toLowerCase$().contains$CharSequence("unequal numbers of atoms")) {
error=reply;
}}
}return error;
});

Clazz.newMeth(C$, 'getModelSpec$I', function (pdbfnum) {
if (pdbfnum < 0 || pdbfnum >= this.getPdbCount$() ) {
return "";
}var maps=this.chimeraMaps.get$O(this.getStructureFiles$()[pdbfnum]);
var hasSubModels=maps != null  && maps.size$() > 1 ;
return "#" + String.valueOf$I(pdbfnum) + (hasSubModels ? ".1" : "") ;
});

Clazz.newMeth(C$, 'launchChimera$', function () {
if (this.viewer.isChimeraLaunched$()) {
return true;
}var launched=this.viewer.launchChimera$java_util_List($I$(7).getChimeraPaths$());
if (launched) {
this.startChimeraProcessMonitor$();
} else {
p$1.log$S.apply(this, ["Failed to launch Chimera!"]);
}return launched;
});

Clazz.newMeth(C$, 'isChimeraRunning$', function () {
return this.viewer.isChimeraLaunched$();
});

Clazz.newMeth(C$, 'sendChimeraCommand$S$Z', function (command, getResponse) {
if (this.viewer == null ) {
return null;
}var reply=null;
p$1.viewerCommandHistory$Z.apply(this, [false]);
if (true) {
var lastReply=this.viewer.sendChimeraCommand$S$Z(command.trim$(), getResponse);
if (getResponse) {
reply=lastReply;
if (false) {
p$1.log$S.apply(this, ["Response from command ('" + command + "') was:\n" + lastReply ]);
}}}p$1.viewerCommandHistory$Z.apply(this, [true]);
return reply;
});

Clazz.newMeth(C$, 'colourBySequence$jalview_structure_StructureMappingcommandSetA', function (colourBySequenceCommands) {
for (var cpdbbyseq, $cpdbbyseq = 0, $$cpdbbyseq = colourBySequenceCommands; $cpdbbyseq<$$cpdbbyseq.length&&((cpdbbyseq=($$cpdbbyseq[$cpdbbyseq])),1);$cpdbbyseq++) {
for (var command, $command = 0, $$command = cpdbbyseq.commands; $command<$$command.length&&((command=($$command[$command])),1);$command++) {
this.sendAsynchronousCommand$S$S(command, C$.COLOURING_CHIMERA);
}
}
});

Clazz.newMeth(C$, 'getColourBySequenceCommands$SA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel', function (files, sr, viewPanel) {
return $I$(13).getColourBySequenceCommand$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel(this.getSsm$(), files, this.getSequence$(), sr, viewPanel);
});

Clazz.newMeth(C$, 'executeWhenReady$S', function (command) {
p$1.waitForChimera.apply(this, []);
this.sendChimeraCommand$S$Z(command, false);
p$1.waitForChimera.apply(this, []);
});

Clazz.newMeth(C$, 'waitForChimera', function () {
while (this.viewer != null  && this.viewer.isBusy$() ){
try {
$I$(8).sleep$J(15);
} catch (q) {
if (Clazz.exceptionOf(q,"InterruptedException")){
} else {
throw q;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'getStructureFiles$', function () {
if (this.viewer == null ) {
return Clazz.array(String, [0]);
}return this.chimeraMaps.keySet$().toArray$TTA(this.modelFileNames=Clazz.array(String, [this.chimeraMaps.size$()]));
});

Clazz.newMeth(C$, 'highlightAtoms$java_util_List', function (atoms) {
if (atoms == null  || atoms.size$() == 0 ) {
return;
}var cmd=Clazz.new_($I$(10).c$$I,[128]);
var first=true;
var found=false;
for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var pdbResNum=atom.getPdbResNum$();
var chain=atom.getChain$();
var pdbfile=atom.getPdbFile$();
var cms=this.chimeraMaps.get$O(pdbfile);
if (cms != null  && !cms.isEmpty$() ) {
if (first) {
cmd.append$S("rlabel #").append$I(cms.get$I(0).getModelNumber$()).append$S(":");
} else {
cmd.append$S(",");
}first=false;
cmd.append$I(pdbResNum);
if (!chain.equals$O(" ")) {
cmd.append$S(".").append$S(chain);
}found=true;
}}
var command=cmd.toString();
if (command.equals$O(this.lastHighlightCommand)) {
return;
}if (this.lastHighlightCommand != null ) {
this.viewer.sendChimeraCommand$S$Z("~" + this.lastHighlightCommand, false);
}if (found) {
this.viewer.sendChimeraCommand$S$Z(command, false);
}this.lastHighlightCommand=command;
});

Clazz.newMeth(C$, 'highlightChimeraSelection$', function () {
var selection=this.viewer.getSelectedResidueSpecs$();
var atomSpecs=this.convertStructureResiduesToAlignment$java_util_List(selection);
this.getSsm$().mouseOverStructure$java_util_List(atomSpecs);
});

Clazz.newMeth(C$, 'convertStructureResiduesToAlignment$java_util_List', function (structureSelection) {
var atomSpecs=Clazz.new_($I$(2));
for (var atomSpec, $atomSpec = structureSelection.iterator$(); $atomSpec.hasNext$()&&((atomSpec=($atomSpec.next$())),1);) {
try {
var spec=$I$(14).fromChimeraAtomspec$S(atomSpec);
var pdbfilename=this.getPdbFileForModel$I(spec.getModelNumber$());
spec.setPdbFile$S(pdbfilename);
atomSpecs.add$TE(spec);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
System.err.println$S("Failed to parse atomspec: " + atomSpec);
} else {
throw e;
}
}
}
return atomSpecs;
});

Clazz.newMeth(C$, 'getPdbFileForModel$I', function (modelId) {
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

Clazz.newMeth(C$, 'log$S', function (message) {
System.err.println$S("## Chimera log: " + message);
}, p$1);

Clazz.newMeth(C$, 'viewerCommandHistory$Z', function (enable) {
}, p$1);

Clazz.newMeth(C$, 'getLoadNotifiesHandled$', function () {
return this.loadNotifiesHandled;
});

Clazz.newMeth(C$, 'setJalviewColourScheme$jalview_schemes_ColourSchemeI', function (cs) {
this.colourBySequence=false;
if (cs == null ) {
return;
}var normalise=255.0;
p$1.viewerCommandHistory$Z.apply(this, [false]);
var command=Clazz.new_($I$(10).c$$I,[128]);
var residueSet=$I$(15).getResidues$Z$Z(this.isNucleotide$(), false);
for (var resName, $resName = residueSet.iterator$(); $resName.hasNext$()&&((resName=($resName.next$())),1);) {
var res=resName.length$() == 3 ? $I$(15).getSingleCharacterCode$S(resName) : resName.charAt$I(0);
var col=cs.findColour$C$I$jalview_datamodel_SequenceI$S$F(res, 0, null, null, 0.0);
command.append$S("color " + new Double(col.getRed$() / 255.0).toString() + "," + new Double(col.getGreen$() / 255.0).toString() + "," + new Double(col.getBlue$() / 255.0).toString() + " ::" + resName + ";");
}
this.sendAsynchronousCommand$S$S(command.toString(), C$.COLOURING_CHIMERA);
p$1.viewerCommandHistory$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'setLoadingFromArchive$Z', function (loadingFromArchive) {
this.$loadingFromArchive=loadingFromArchive;
});

Clazz.newMeth(C$, 'isLoadingFromArchive$', function () {
return this.$loadingFromArchive && !this.$loadingFinished ;
});

Clazz.newMeth(C$, 'setFinishedLoadingFromArchive$Z', function (finishedLoading) {
this.$loadingFinished=finishedLoading;
});

Clazz.newMeth(C$, 'setBackgroundColour$java_awt_Color', function (col) {
p$1.viewerCommandHistory$Z.apply(this, [false]);
var normalise=255.0;
var command="background solid " + new Double(col.getRed$() / normalise).toString() + "," + new Double(col.getGreen$() / normalise).toString() + "," + new Double(col.getBlue$() / normalise).toString() + ";";
this.viewer.sendChimeraCommand$S$Z(command, false);
p$1.viewerCommandHistory$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'saveSession$S', function (filepath) {
if (this.isChimeraRunning$()) {
var reply=this.viewer.sendChimeraCommand$S$Z("save " + filepath, true);
if (reply.contains$O("Session written")) {
return true;
} else {
$I$(16).log.error$O("Error saving Chimera session: " + reply.toString());
}}return false;
});

Clazz.newMeth(C$, 'openSession$S', function (filepath) {
this.sendChimeraCommand$S$Z("open " + filepath, true);
return true;
});

Clazz.newMeth(C$, 'getChainNames$', function () {
return this.chainNames;
});

Clazz.newMeth(C$, 'focusView$', function () {
this.sendChimeraCommand$S$Z("focus", false);
});

Clazz.newMeth(C$, 'highlightSelection$jalview_api_AlignmentViewPanel', function (vp) {
var cols=vp.getAlignViewport$().getColumnSelection$().getSelected$();
var alignment=vp.getAlignment$();
var sm=this.getSsm$();
for (var seq, $seq = alignment.getSequences$().iterator$(); $seq.hasNext$()&&((seq=($seq.next$())),1);) {
var positions=Clazz.array(Integer.TYPE, [cols.size$()]);
var i=0;
for (var col, $col = cols.iterator$(); $col.hasNext$()&&((col=($col.next$())),1);) {
positions[i++]=seq.findPosition$I((col).intValue$());
}
sm.highlightStructure$jalview_structure_StructureListener$jalview_datamodel_SequenceI$IA(this, seq, positions);
}
});

Clazz.newMeth(C$, 'sendFeaturesToViewer$jalview_api_AlignmentViewPanel', function (avp) {
var alignment=avp.getAlignment$();
var files=this.getStructureFiles$();
if (files == null ) {
return 0;
}var commandSet=$I$(13).getSetAttributeCommandsForFeatures$jalview_structure_StructureSelectionManager$SA$jalview_datamodel_SequenceIAA$jalview_api_AlignmentViewPanel(this.getSsm$(), files, this.getSequence$(), avp);
var commands=commandSet.commands;
if (commands.length > 10) {
this.sendCommandsByFile$SA(commands);
} else {
for (var command, $command = 0, $$command = commands; $command<$$command.length&&((command=($$command[$command])),1);$command++) {
this.sendAsynchronousCommand$S$S(command, null);
}
}return commands.length;
});

Clazz.newMeth(C$, 'sendCommandsByFile$SA', function (commands) {
try {
var tmp=$I$(17).createTempFile$S$S("chim", ".com");
tmp.deleteOnExit$();
var out=Clazz.new_($I$(18).c$$java_io_OutputStream,[Clazz.new_($I$(19).c$$java_io_File,[tmp])]);
for (var command, $command = 0, $$command = commands; $command<$$command.length&&((command=($$command[$command])),1);$command++) {
out.println$S(command);
}
out.flush$();
out.close$();
var path=tmp.getAbsolutePath$();
this.sendAsynchronousCommand$S$S("open cmd:" + path, null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Sending commands to Chimera via file failed with " + e.getMessage$());
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'copyStructureAttributesToFeatures$S$jalview_api_AlignmentViewPanel', function (attName, alignmentPanel) {
var cmd="list residues attr '" + attName + "'" ;
var residues=this.sendChimeraCommand$S$Z(cmd, true);
var featureAdded=this.createFeaturesForAttributes$S$java_util_List(attName, residues);
if (featureAdded) {
alignmentPanel.getFeatureRenderer$().featuresAdded$();
}});

Clazz.newMeth(C$, 'createFeaturesForAttributes$S$java_util_List', function (attName, residues) {
var featureAdded=false;
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
spec=$I$(14).fromChimeraAtomspec$S(atomSpec);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
System.err.println$S("Problem parsing atomspec " + atomSpec);
continue;
} else {
throw e;
}
}
var chainId=spec.getChain$();
var description=attValue;
var score=NaN;
try {
score=(Float.valueOf$S(attValue)).floatValue$();
description=chainId;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
var pdbFile=this.getPdbFileForModel$I(spec.getModelNumber$());
spec.setPdbFile$S(pdbFile);
var atoms=$I$(20).singletonList$TT(spec);
var sr=this.getSsm$().findAlignmentPositionsForStructurePositions$java_util_List(atoms);
for (var m, $m = sr.getResults$().iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
var seq=m.getSequence$();
var start=m.getStart$();
var end=m.getEnd$();
var sf=Clazz.new_($I$(21).c$$S$S$I$I$F$S,[attName, description, start, end, score, featureGroup]);
featureAdded|=seq.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
}
}
return featureAdded;
});

Clazz.newMeth(C$, 'getViewerFeatureGroup$', function () {
return "Chimera";
});

Clazz.newMeth(C$, 'getChainFile$', function () {
return this.chainFile;
});

Clazz.newMeth(C$, 'getChimeraModelByChain$S', function (chain) {
return this.chimeraMaps.get$O(this.chainFile.get$O(chain));
});

Clazz.newMeth(C$, 'getModelNoForChain$S', function (chain) {
var foundModels=this.getChimeraModelByChain$S(chain);
if (foundModels != null  && !foundModels.isEmpty$() ) {
return foundModels.get$I(0).getModelNumber$();
}return -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
