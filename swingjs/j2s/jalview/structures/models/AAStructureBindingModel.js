(function(){var P$=Clazz.newPackage("jalview.structures.models"),p$1={},I$=[[0,'jalview.util.MessageManager','java.util.ArrayList','java.util.HashMap','jalview.util.Comparison','StringBuilder','Error','jalview.datamodel.SequenceI','jalview.datamodel.PDBEntry','java.util.Arrays','java.util.BitSet',['jalview.structures.models.AAStructureBindingModel','.SuperposeData'],['jalview.structure.StructureCommandsI','.AtomSpecType'],'java.util.Locale','jalview.structure.AtomSpecModel','jalview.structure.StructureCommandI','jalview.schemes.ResidueProperties','Thread','javax.swing.SwingUtilities','jalview.renderer.seqfeatures.FeatureColourFinder','java.util.LinkedHashMap','java.awt.Color','java.io.File','jalview.bin.Console','jalview.gui.Desktop']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AAStructureBindingModel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.structures.models.SequenceStructureBindingModel', ['jalview.structure.StructureListener', 'jalview.api.StructureSelectionManagerProvider']);
C$.$classes$=[['SuperposeData',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.protocol=null;
this.colourBySequence=true;
this.finishedInit=false;
this.modelFileNames=null;
},1);

C$.$fields$=[['Z',['colourBySequence','nucleotide','finishedInit'],'S',['fileLoadingError'],'O',['viewer','jalview.api.structures.JalviewStructureDisplayI','commandGenerator','jalview.structure.StructureCommandsI','ssm','jalview.structure.StructureSelectionManager','chainNames','java.util.List','chainFile','java.util.Map','pdbEntry','jalview.datamodel.PDBEntry[]','sequence','jalview.datamodel.SequenceI[][]','chains','String[][]','protocol','jalview.io.DataSourceType','modelFileNames','String[]','externalViewerMonitor','Thread']]
,['S',['COLOURING_STRUCTURES']]]

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager$jalview_datamodel_SequenceIAA',  function (ssm, seqs) {
Clazz.super_(C$, this);
this.ssm=ssm;
this.sequence=seqs;
this.chainNames=Clazz.new_($I$(2,1));
this.chainFile=Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType',  function (ssm, pdbentry, sequenceIs, protocol) {
C$.c$$jalview_structure_StructureSelectionManager$jalview_datamodel_SequenceIAA.apply(this, [ssm, sequenceIs]);
this.nucleotide=$I$(4).isNucleotide$jalview_datamodel_SequenceIAA(sequenceIs);
this.pdbEntry=pdbentry;
this.protocol=protocol;
p$1.resolveChains.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'resolveChains',  function () {
var chainmaps=0;
var newchains=Clazz.array(String, [this.pdbEntry.length, null]);
var pe=0;
for (var pdb, $pdb = 0, $$pdb = this.pdbEntry; $pdb<$$pdb.length&&((pdb=($$pdb[$pdb])),1);$pdb++) {
var seqsForPdb=this.sequence[pe];
if (seqsForPdb != null ) {
newchains[pe]=Clazz.array(String, [seqsForPdb.length]);
var se=0;
for (var asq, $asq = 0, $$asq = seqsForPdb; $asq<$$asq.length&&((asq=($$asq[$asq])),1);$asq++) {
var chain=(this.chains != null  && this.chains[pe] != null  ) ? this.chains[pe][se] : null;
var sq=(asq.getDatasetSequence$() == null ) ? asq : asq.getDatasetSequence$();
if (sq.getAllPDBEntries$() != null ) {
for (var pdbentry, $pdbentry = sq.getAllPDBEntries$().iterator$(); $pdbentry.hasNext$()&&((pdbentry=($pdbentry.next$())),1);) {
if (pdb.getFile$() != null  && pdbentry.getFile$() != null   && pdb.getFile$().equals$O(pdbentry.getFile$()) ) {
var chaincode=pdbentry.getChainCode$();
if (chaincode != null  && chaincode.length$() > 0 ) {
chain=chaincode;
++chainmaps;
break;
}}}
}newchains[pe][se]=chain;
++se;
}
++pe;
}}
this.chains=newchains;
return chainmaps > 0;
}, p$1);

Clazz.newMeth(C$, 'getSsm$',  function () {
return this.ssm;
});

Clazz.newMeth(C$, 'getPdbEntry$I',  function (i) {
return (this.pdbEntry != null  && this.pdbEntry.length > i ) ? this.pdbEntry[i] : null;
});

Clazz.newMeth(C$, 'hasPdbId$S',  function (pdbId) {
if (this.pdbEntry != null ) {
for (var pdb, $pdb = 0, $$pdb = this.pdbEntry; $pdb<$$pdb.length&&((pdb=($$pdb[$pdb])),1);$pdb++) {
if (pdb.getId$().equals$O(pdbId)) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'getPdbCount$',  function () {
return this.pdbEntry == null  ? 0 : this.pdbEntry.length;
});

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.sequence;
});

Clazz.newMeth(C$, 'getChains$',  function () {
return this.chains;
});

Clazz.newMeth(C$, 'getProtocol$',  function () {
return this.protocol;
});

Clazz.newMeth(C$, 'setPdbentry$jalview_datamodel_PDBEntryA',  function (pdbentry) {
this.pdbEntry=pdbentry;
});

Clazz.newMeth(C$, 'setSequence$jalview_datamodel_SequenceIAA',  function (sequence) {
this.sequence=sequence;
});

Clazz.newMeth(C$, 'setChains$SAA',  function (chains) {
this.chains=chains;
});

Clazz.newMeth(C$, 'getViewerTitle$S$Z',  function (viewerName, verbose) {
if (this.getSequence$() == null  || this.getSequence$().length < 1  || this.getPdbCount$() < 1  || this.getSequence$()[0].length < 1 ) {
return ("Jalview " + viewerName + " Window" );
}var title=Clazz.new_($I$(5,1).c$$I,[64]);
var pdbe=this.getPdbEntry$I(0);
title.append$S(viewerName + " view for " + this.getSequence$()[0][0].getName$() + ":" + pdbe.getId$() );
if (verbose) {
var method=pdbe.getProperty$S("method");
if (method != null ) {
title.append$S(" Method: ").append$S(method);
}var chain=pdbe.getProperty$S("chains");
if (chain != null ) {
title.append$S(" Chain:").append$S(chain);
}}return title.toString();
});

Clazz.newMeth(C$, 'releaseUIResources$',  function () {
});

Clazz.newMeth(C$, 'releaseReferences$O',  function (svl) {
});

Clazz.newMeth(C$, 'isColourBySequence$',  function () {
return this.colourBySequence;
});

Clazz.newMeth(C$, 'refreshGUI$',  function () {
});

Clazz.newMeth(C$, 'refreshPdbEntries$',  function () {
});

Clazz.newMeth(C$, 'setColourBySequence$Z',  function (colourBySequence) {
this.colourBySequence=colourBySequence;
});

Clazz.newMeth(C$, 'addSequenceAndChain$I$jalview_datamodel_SequenceIA$SA',  function (pe, seq, tchain) {
if (pe < 0 || pe >= this.getPdbCount$() ) {
throw Clazz.new_([$I$(1,"formatMessage$S$OA",["error.implementation_error_no_pdbentry_from_index", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(pe).toString()])])],$I$(6,1).c$$S);
}var nullChain="TheNullChain";
var s=Clazz.new_($I$(2,1));
var c=Clazz.new_($I$(2,1));
if (this.getChains$() == null ) {
this.setChains$SAA(Clazz.array(String, [this.getPdbCount$(), null]));
}if (this.getSequence$()[pe] != null ) {
for (var i=0; i < this.getSequence$()[pe].length; i++) {
s.add$O(this.getSequence$()[pe][i]);
if (this.getChains$()[pe] != null ) {
if (i < this.getChains$()[pe].length) {
c.add$O(this.getChains$()[pe][i]);
} else {
c.add$O("TheNullChain");
}} else {
if (tchain != null  && tchain.length > 0 ) {
c.add$O("TheNullChain");
}}}
}for (var i=0; i < seq.length; i++) {
if (!s.contains$O(seq[i])) {
s.add$O(seq[i]);
if (tchain != null  && i < tchain.length ) {
c.add$O(tchain[i] == null  ? "TheNullChain" : tchain[i]);
}}}
var tmp=s.toArray$OA(Clazz.array($I$(7), [s.size$()]));
this.getSequence$()[pe]=tmp;
if (c.size$() > 0) {
var tch=c.toArray$OA(Clazz.array(String, [c.size$()]));
for (var i=0; i < tch.length; i++) {
if (tch[i] == "TheNullChain") {
tch[i]=null;
}}
this.getChains$()[pe]=tch;
} else {
this.getChains$()[pe]=null;
}});

Clazz.newMeth(C$, 'addSequenceAndChain$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$SAA',  function (pdbe, seq, chns) {
var v=Clazz.new_($I$(2,1));
var rtn=Clazz.new_($I$(2,1));
for (var i=0; i < this.getPdbCount$(); i++) {
v.add$O(this.getPdbEntry$I(i));
}
for (var i=0; i < pdbe.length; i++) {
var r=v.indexOf$O(pdbe[i]);
if (r == -1 || r >= this.getPdbCount$() ) {
rtn.add$O(Clazz.array(Integer.TYPE, -1, [v.size$(), i]));
v.add$O(pdbe[i]);
} else {
this.addSequenceAndChain$I$jalview_datamodel_SequenceIA$SA(r, seq[i], chns[i]);
}}
pdbe=v.toArray$OA(Clazz.array($I$(8), [v.size$()]));
this.setPdbentry$jalview_datamodel_PDBEntryA(pdbe);
if (rtn.size$() > 0) {
var sqs=Clazz.array($I$(7), [this.getPdbCount$(), null]);
var sch=Clazz.array(String, [this.getPdbCount$(), null]);
System.arraycopy$O$I$O$I$I(this.getSequence$(), 0, sqs, 0, this.getSequence$().length);
System.arraycopy$O$I$O$I$I(this.getChains$(), 0, sch, 0, this.getChains$().length);
this.setSequence$jalview_datamodel_SequenceIAA(sqs);
this.setChains$SAA(sch);
pdbe=Clazz.array($I$(8), [rtn.size$()]);
for (var r=0; r < pdbe.length; r++) {
var stri=(rtn.get$I(r));
pdbe[r]=this.getPdbEntry$I(stri[0]);
this.addSequenceAndChain$I$jalview_datamodel_SequenceIA$SA(stri[0], seq[stri[1]], chns[stri[1]]);
}
} else {
pdbe=null;
}return pdbe;
});

Clazz.newMeth(C$, 'addSequence$I$jalview_datamodel_SequenceIA',  function (pe, seq) {
this.addSequenceAndChain$I$jalview_datamodel_SequenceIA$SA(pe, seq, null);
});

Clazz.newMeth(C$, 'addSequenceForStructFile$S$jalview_datamodel_SequenceIA',  function (pdbFile, seq) {
for (var pe=0; pe < this.getPdbCount$(); pe++) {
if (this.getPdbEntry$I(pe).getFile$().equals$O(pdbFile)) {
this.addSequence$I$jalview_datamodel_SequenceIA(pe, seq);
}}
});

Clazz.newMeth(C$, 'isNucleotide$',  function () {
return this.nucleotide;
});

Clazz.newMeth(C$, 'printMappings$',  function () {
if (this.pdbEntry == null ) {
return "";
}var sb=Clazz.new_($I$(5,1).c$$I,[128]);
for (var pdbe=0; pdbe < this.getPdbCount$(); pdbe++) {
var pdbfile=this.getPdbEntry$I(pdbe).getFile$();
var seqs=$I$(9,"asList$OA",[this.getSequence$()[pdbe]]);
sb.append$S(this.getSsm$().printMappings$S$java_util_List(pdbfile, seqs));
}
return sb.toString();
});

Clazz.newMeth(C$, 'getMappedPosition$jalview_datamodel_SequenceI$I$jalview_structure_StructureMapping',  function (seq, alignedPos, mapping) {
if (alignedPos >= seq.getLength$()) {
return -1;
}if ($I$(4,"isGap$C",[seq.getCharAt$I(alignedPos)])) {
return -1;
}var seqPos=seq.findPosition$I(alignedPos);
var pos=mapping.getPDBResNum$I(seqPos);
return pos;
});

Clazz.newMeth(C$, 'findSuperposableResidues$jalview_datamodel_AlignmentI$java_util_BitSet$jalview_structures_models_AAStructureBindingModel_SuperposeDataA',  function (alignment, matched, structures) {
var refStructure=-1;
var files=this.getStructureFiles$();
if (files == null ) {
return -1;
}for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
var mappings=this.getSsm$().getMapping$S(files[pdbfnum]);
var lastPos=-1;
var seqCountForPdbFile=this.getSequence$()[pdbfnum].length;
for (var s=0; s < seqCountForPdbFile; s++) {
for (var mapping, $mapping = 0, $$mapping = mappings; $mapping<$$mapping.length&&((mapping=($$mapping[$mapping])),1);$mapping++) {
var theSequence=this.getSequence$()[pdbfnum][s];
if (mapping.getSequence$() === theSequence  && alignment.findIndex$jalview_datamodel_SequenceI(theSequence) > -1 ) {
if (refStructure < 0) {
refStructure=pdbfnum;
}for (var r=0; r < alignment.getWidth$(); r++) {
if (!matched.get$I(r)) {
continue;
}var pos=this.getMappedPosition$jalview_datamodel_SequenceI$I$jalview_structure_StructureMapping(theSequence, r, mapping);
if (pos < 1 || pos == lastPos ) {
matched.clear$I(r);
continue;
}lastPos=pos;
structures[pdbfnum].pdbResNo[r]=pos;
}
var chain=mapping.getChain$();
if (chain != null  && chain.trim$().length$() > 0 ) {
structures[pdbfnum].chain=chain;
}structures[pdbfnum].pdbId=mapping.getPdbId$();
structures[pdbfnum].isRna=!theSequence.isProtein$();
s=seqCountForPdbFile;
break;
}}
}
}
return refStructure;
});

Clazz.newMeth(C$, 'waitForFileLoad$SA',  function (files) {
var starttime=System.currentTimeMillis$();
var endTime=Long.$add(10000 + 1000 * files.length,starttime);
var notLoaded=null;
var waiting=true;
while (waiting && Long.$lt(System.currentTimeMillis$(),endTime ) ){
waiting=false;
for (var file, $file = 0, $$file = files; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
notLoaded=file;
if (file == null ) {
continue;
}try {
var sm=this.getSsm$().getMapping$S(file);
if (sm == null  || sm.length == 0 ) {
waiting=true;
}} catch (x) {
waiting=true;
}
}
}
if (waiting) {
System.err.println$S("Timed out waiting for structure viewer to load file " + notLoaded);
return false;
}return true;
});

Clazz.newMeth(C$, 'isListeningFor$jalview_datamodel_SequenceI',  function (seq) {
if (this.sequence != null ) {
for (var seqs, $seqs = 0, $$seqs = this.sequence; $seqs<$$seqs.length&&((seqs=($$seqs[$seqs])),1);$seqs++) {
if (seqs != null ) {
for (var s, $s = 0, $$s = seqs; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s === seq  || (s.getDatasetSequence$() != null  && s.getDatasetSequence$() === seq.getDatasetSequence$()  ) ) {
return true;
}}
}}
}return false;
});

Clazz.newMeth(C$, 'isFinishedInit$',  function () {
return this.finishedInit;
});

Clazz.newMeth(C$, 'setFinishedInit$Z',  function (fi) {
this.finishedInit=fi;
});

Clazz.newMeth(C$, 'getChainNames$',  function () {
return this.chainNames;
});

Clazz.newMeth(C$, 'getViewer$',  function () {
return this.viewer;
});

Clazz.newMeth(C$, 'setViewer$jalview_api_structures_JalviewStructureDisplayI',  function (v) {
this.viewer=v;
});

Clazz.newMeth(C$, 'superposeStructures$java_util_List',  function (alignWith) {
var error="";
var files=this.getStructureFiles$();
if (!this.waitForFileLoad$SA(files)) {
return null;
}this.refreshPdbEntries$();
for (var view, $view = alignWith.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
var alignment=view.getAlignment$();
var hiddenCols=alignment.getHiddenColumns$();
var matched=Clazz.new_($I$(10,1));
var width=alignment.getWidth$();
for (var m=0; m < width; m++) {
if (hiddenCols == null  || hiddenCols.isVisible$I(m) ) {
matched.set$I(m);
}}
var structures=Clazz.array($I$(11), [files.length]);
for (var f=0; f < files.length; f++) {
structures[f]=Clazz.new_([width, this.getModelIdForFile$S(files[f])],$I$(11,1).c$$I$S);
}
var refStructure=this.findSuperposableResidues$jalview_datamodel_AlignmentI$java_util_BitSet$jalview_structures_models_AAStructureBindingModel_SuperposeDataA(alignment, matched, structures);
var nmatched=matched.cardinality$();
if (nmatched < 4) {
var msg=$I$(1,"formatMessage$S$OA",["label.insufficient_residues", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(nmatched)])]);
error+=view.getViewName$() + ": " + msg + "; " ;
continue;
}var refAtoms=p$1.getAtomSpec$jalview_structures_models_AAStructureBindingModel_SuperposeData$java_util_BitSet.apply(this, [structures[refStructure], matched]);
this.executeCommands$java_util_List$Z$S(this.commandGenerator.showBackbone$(), true, null);
var backbone=structures[refStructure].isRna ? $I$(12).PHOSPHATE : $I$(12).ALPHA;
for (var i=0; i < structures.length; i++) {
if (i != refStructure) {
var atomSpec=p$1.getAtomSpec$jalview_structures_models_AAStructureBindingModel_SuperposeData$java_util_BitSet.apply(this, [structures[i], matched]);
var commands=this.commandGenerator.superposeStructures$jalview_structure_AtomSpecModel$jalview_structure_AtomSpecModel$jalview_structure_StructureCommandsI_AtomSpecType(refAtoms, atomSpec, backbone);
var replies=this.executeCommands$java_util_List$Z$S(commands, true, null);
for (var reply, $reply = replies.iterator$(); $reply.hasNext$()&&((reply=($reply.next$())),1);) {
if (reply.toLowerCase$java_util_Locale($I$(13).ROOT).contains$CharSequence("unequal numbers of atoms")) {
error+="; " + reply;
}}
}}
}
return error;
});

Clazz.newMeth(C$, 'getAtomSpec$jalview_structures_models_AAStructureBindingModel_SuperposeData$java_util_BitSet',  function (superposeData, matched) {
var model=Clazz.new_($I$(14,1));
var nextColumnMatch=matched.nextSetBit$I(0);
while (nextColumnMatch != -1){
var pdbResNum=superposeData.pdbResNo[nextColumnMatch];
model.addRange$S$I$I$S(superposeData.modelId, pdbResNum, pdbResNum, superposeData.chain);
nextColumnMatch=matched.nextSetBit$I(nextColumnMatch + 1);
}
return model;
}, p$1);

Clazz.newMeth(C$, 'colourByChain$',  function () {
this.colourBySequence=false;
this.executeCommand$Z$S$jalview_structure_StructureCommandIA(false, C$.COLOURING_STRUCTURES, Clazz.array($I$(15), -1, [this.commandGenerator.colourByChain$()]));
});

Clazz.newMeth(C$, 'colourByCharge$',  function () {
this.colourBySequence=false;
this.executeCommands$java_util_List$Z$S(this.commandGenerator.colourByCharge$(), false, C$.COLOURING_STRUCTURES);
});

Clazz.newMeth(C$, 'colourByJalviewColourScheme$jalview_schemes_ColourSchemeI',  function (cs) {
this.colourBySequence=false;
if (cs == null  || !cs.isSimple$() ) {
return;
}var colours=Clazz.new_($I$(3,1));
var residues=$I$(16,"getResidues$Z$Z",[this.isNucleotide$(), false]);
for (var resName, $resName = residues.iterator$(); $resName.hasNext$()&&((resName=($resName.next$())),1);) {
var res=resName.length$() == 3 ? $I$(16).getSingleCharacterCode$S(resName) : resName.charAt$I(0);
var colour=cs.findColour$C$I$jalview_datamodel_SequenceI$S$F(res, 0, null, null, 0.0);
colours.put$O$O(resName, colour);
}
var cmd=this.commandGenerator.colourByResidues$java_util_Map(colours);
this.executeCommands$java_util_List$Z$S(cmd, false, C$.COLOURING_STRUCTURES);
});

Clazz.newMeth(C$, 'setBackgroundColour$java_awt_Color',  function (col) {
var cmd=this.commandGenerator.setBackgroundColour$java_awt_Color(col);
this.executeCommand$Z$S$jalview_structure_StructureCommandIA(false, null, Clazz.array($I$(15), -1, [cmd]));
});

Clazz.newMeth(C$, 'executeCommands$java_util_List$Z$S',  function (commands, getReply, msg) {
return this.executeCommand$Z$S$jalview_structure_StructureCommandIA(getReply, msg, commands.toArray$OA(Clazz.array($I$(15), [commands.size$()])));
});

Clazz.newMeth(C$, 'executeCommand$Z$S$jalview_structure_StructureCommandIA',  function (getReply, msg, cmds) {
var theViewer=this.getViewer$();
var handle=msg == null  ? 0 : theViewer.startProgressBar$S(msg);
if (getReply) {
var response=Clazz.new_($I$(2,1));
try {
for (var cmd, $cmd = 0, $$cmd = cmds; $cmd<$$cmd.length&&((cmd=($$cmd[$cmd])),1);$cmd++) {
var replies=this.executeCommand$jalview_structure_StructureCommandI$Z(cmd, true);
if (replies != null ) {
response.addAll$java_util_Collection(replies);
}}
return response;
} finally {
if (msg != null ) {
theViewer.stopProgressBar$S$J(null, handle);
}}
}var threadName=msg == null  ? "StructureCommand" : msg;
Clazz.new_([((P$.AAStructureBindingModel$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AAStructureBindingModel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
for (var cmd, $cmd = 0, $$cmd = this.$finals$.cmds; $cmd<$$cmd.length&&((cmd=($$cmd[$cmd])),1);$cmd++) {
this.b$['jalview.structures.models.AAStructureBindingModel'].executeCommand$jalview_structure_StructureCommandI$Z.apply(this.b$['jalview.structures.models.AAStructureBindingModel'], [cmd, false]);
}
} finally {
if (this.$finals$.msg != null ) {
$I$(18,"invokeLater$Runnable",[((P$.AAStructureBindingModel$1$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AAStructureBindingModel$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.theViewer.stopProgressBar$S$J(null, this.$finals$.handle);
});
})()
), Clazz.new_(P$.AAStructureBindingModel$1$1.$init$,[this, {handle:this.$finals$.handle,theViewer:this.$finals$.theViewer}]))]);
}}
});
})()
), Clazz.new_(P$.AAStructureBindingModel$1.$init$,[this, {handle:handle,cmds:cmds,theViewer:theViewer,msg:msg}])), threadName],$I$(17,1).c$$Runnable$S).start$();
return null;
});

Clazz.newMeth(C$, 'colourBySequence$jalview_api_AlignmentViewPanel',  function (alignmentv) {
if (!this.colourBySequence || !this.isLoadingFinished$() || this.getSsm$() == null   ) {
return;
}var colourMap=this.buildColoursMap$jalview_structure_StructureSelectionManager$jalview_datamodel_SequenceIAA$jalview_api_AlignmentViewPanel(this.ssm, this.sequence, alignmentv);
var colourBySequenceCommands=this.commandGenerator.colourBySequence$java_util_Map(colourMap);
this.executeCommands$java_util_List$Z$S(colourBySequenceCommands, false, C$.COLOURING_STRUCTURES);
});

Clazz.newMeth(C$, 'focusView$',  function () {
this.executeCommand$Z$S$jalview_structure_StructureCommandIA(false, null, Clazz.array($I$(15), -1, [this.commandGenerator.focusView$()]));
});

Clazz.newMeth(C$, 'showChains$java_util_List',  function (toShow) {
var showThese=Clazz.new_($I$(2,1));
for (var chainId, $chainId = toShow.iterator$(); $chainId.hasNext$()&&((chainId=($chainId.next$())),1);) {
var tokens=chainId.split$S("\\:");
if (tokens.length == 2) {
var pdbFile=this.getFileForChain$S(chainId);
var model=this.getModelIdForFile$S(pdbFile);
showThese.add$O(model + ":" + tokens[1] );
}}
this.executeCommands$java_util_List$Z$S(this.commandGenerator.showChains$java_util_List(showThese), false, null);
});

Clazz.newMeth(C$, 'hasFileLoadingError$',  function () {
return this.fileLoadingError != null  && this.fileLoadingError.length$() > 0 ;
});

Clazz.newMeth(C$, 'getFeatureRenderer$jalview_api_AlignmentViewPanel',  function (avp) {
var ap=(avp == null ) ? this.getViewer$().getAlignmentPanel$() : avp;
if (ap == null ) {
return null;
}return ap.getFeatureRenderer$();
});

Clazz.newMeth(C$, 'setStructureCommands$jalview_structure_StructureCommandsI',  function (cmd) {
this.commandGenerator=cmd;
});

Clazz.newMeth(C$, 'addChainFile$S$S',  function (chainId, fileName) {
this.chainFile.put$O$O(chainId, fileName);
});

Clazz.newMeth(C$, 'getFileForChain$S',  function (chainId) {
return this.chainFile.get$O(chainId);
});

Clazz.newMeth(C$, 'updateColours$O',  function (source) {
if (this.getViewer$() == null ) {
return;
}var ap=source;
if (!this.getViewer$().isUsedForColourBy$jalview_api_AlignmentViewPanel(ap)) {
return;
}if (!this.isLoadingFromArchive$()) {
this.colourBySequence$jalview_api_AlignmentViewPanel(ap);
}});

Clazz.newMeth(C$, 'getCommandGenerator$',  function () {
return this.commandGenerator;
});

Clazz.newMeth(C$, 'buildColoursMap$jalview_structure_StructureSelectionManager$jalview_datamodel_SequenceIAA$jalview_api_AlignmentViewPanel',  function (ssm, sequence, viewPanel) {
var files=this.getStructureFiles$();
var sr=this.getSequenceRenderer$jalview_api_AlignmentViewPanel(viewPanel);
var fr=viewPanel.getFeatureRenderer$();
var finder=Clazz.new_($I$(19,1).c$$jalview_api_FeatureRenderer,[fr]);
var viewport=viewPanel.getAlignViewport$();
var cs=viewport.getAlignment$().getHiddenColumns$();
var al=viewport.getAlignment$();
var colourMap=Clazz.new_($I$(20,1));
var lastColour=null;
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
var modelId=this.getModelIdForFile$S(files[pdbfnum]);
var mapping=ssm.getMapping$S(files[pdbfnum]);
if (mapping == null  || mapping.length < 1 ) {
continue;
}var startPos=-1;
var lastPos=-1;
var lastChain="";
for (var s=0; s < sequence[pdbfnum].length; s++) {
for (var sp, m=0; m < mapping.length; m++) {
var seq=sequence[pdbfnum][s];
if (mapping[m].getSequence$() === seq  && (sp=al.findIndex$jalview_datamodel_SequenceI(seq)) > -1 ) {
var asp=al.getSequenceAt$I(sp);
for (var r=0; r < asp.getLength$(); r++) {
if ($I$(4,"isGap$C",[asp.getCharAt$I(r)])) {
continue;
}var pos=mapping[m].getPDBResNum$I(asp.findPosition$I(r));
if (pos < 1 || pos == lastPos ) {
continue;
}var colour=sr.getResidueColour$jalview_datamodel_SequenceI$I$jalview_renderer_seqfeatures_FeatureColourFinder(seq, r, finder);
if (!cs.isVisible$I(r)) {
colour=$I$(21).GRAY;
}var chain=mapping[m].getChain$();
var newColour=!colour.equals$O(lastColour);
var nonContig=lastPos + 1 != pos;
var newChain=!chain.equals$O(lastChain);
if (newColour || nonContig || newChain  ) {
if (startPos != -1) {
C$.addAtomSpecRange$java_util_Map$O$S$I$I$S(colourMap, lastColour, modelId, startPos, lastPos, lastChain);
}startPos=pos;
}lastColour=colour;
lastPos=pos;
lastChain=chain;
}
if (lastColour != null ) {
C$.addAtomSpecRange$java_util_Map$O$S$I$I$S(colourMap, lastColour, modelId, startPos, lastPos, lastChain);
}}}
}
}
return colourMap;
});

Clazz.newMeth(C$, 'getModelId$I$S',  function (pdbfnum, file) {
return String.valueOf$I(pdbfnum);
});

Clazz.newMeth(C$, 'stashFoundChains$jalview_io_StructureFile$S',  function (pdb, file) {
for (var i=0; i < pdb.getChains$().size$(); i++) {
var chid=pdb.getId$() + ":" + pdb.getChains$().elementAt$I(i).id ;
this.addChainFile$S$S(chid, file);
this.getChainNames$().add$O(chid);
}
});

Clazz.newMeth(C$, 'addAtomSpecRange$java_util_Map$O$S$I$I$S',  function (map, value, model, startPos, endPos, chain) {
var atomSpec=map.get$O(value);
if (atomSpec == null ) {
atomSpec=Clazz.new_($I$(14,1));
map.put$O$O(value, atomSpec);
}atomSpec.addRange$S$I$I$S(model, startPos, endPos, chain);
}, 1);

Clazz.newMeth(C$, 'getSessionFileExtension$',  function () {
return null;
});

Clazz.newMeth(C$, 'saveSession$',  function () {
var prefix=this.getViewerType$().toString();
var suffix=this.getSessionFileExtension$();
var f=null;
try {
f=$I$(22).createTempFile$S$S(prefix, suffix);
this.saveSession$java_io_File(f);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(23,"error$S",[String.format$S$OA("Error saving %s session: %s", Clazz.array(java.lang.Object, -1, [prefix, e.toString()]))]);
} else {
throw e;
}
}
return f;
});

Clazz.newMeth(C$, 'saveSession$java_io_File',  function (f) {
var cmd=this.commandGenerator.saveSession$S(f.getPath$());
if (cmd != null ) {
this.executeCommand$jalview_structure_StructureCommandI$Z(cmd, false);
}});

Clazz.newMeth(C$, 'isViewerRunning$',  function () {
return false;
});

Clazz.newMeth(C$, 'closeViewer$Z',  function (forceClose) {
this.getSsm$().removeStructureViewerListener$O$SA(this, this.getStructureFiles$());
this.releaseUIResources$();
if (this.externalViewerMonitor != null ) {
this.externalViewerMonitor.interrupt$();
this.externalViewerMonitor=null;
}this.stopListening$();
if (forceClose) {
var cmd=this.getCommandGenerator$().closeViewer$();
if (cmd != null ) {
this.executeCommand$jalview_structure_StructureCommandI$Z(cmd, false);
}}});

Clazz.newMeth(C$, 'getHelpURL$',  function () {
return null;
});

Clazz.newMeth(C$, 'buildFeaturesMap$jalview_api_AlignmentViewPanel',  function (viewPanel) {
var theMap=Clazz.new_($I$(20,1));
var files=this.getStructureFiles$();
if (files == null ) {
return theMap;
}var fr=viewPanel.getFeatureRenderer$();
if (fr == null ) {
return theMap;
}var viewport=viewPanel.getAlignViewport$();
var visibleFeatures=fr.getDisplayedFeatureTypes$();
var showLinkedFeatures=viewport.isShowComplementFeatures$();
var complementFeatures=Clazz.new_($I$(2,1));
var complementRenderer=null;
if (showLinkedFeatures) {
var comp=fr.getViewport$().getCodingComplement$();
if (comp != null ) {
complementRenderer=$I$(24).getAlignFrameFor$jalview_api_AlignViewportI(comp).getFeatureRenderer$();
complementFeatures=complementRenderer.getDisplayedFeatureTypes$();
}}if (visibleFeatures.isEmpty$() && complementFeatures.isEmpty$() ) {
return theMap;
}var alignment=viewPanel.getAlignment$();
var seqs=this.getSequence$();
for (var pdbfnum=0; pdbfnum < files.length; pdbfnum++) {
var modelId=this.getModelIdForFile$S(files[pdbfnum]);
var mapping=this.ssm.getMapping$S(files[pdbfnum]);
if (mapping == null  || mapping.length < 1 ) {
continue;
}for (var seqNo=0; seqNo < seqs[pdbfnum].length; seqNo++) {
for (var m=0; m < mapping.length; m++) {
var seq=seqs[pdbfnum][seqNo];
var sp=alignment.findIndex$jalview_datamodel_SequenceI(seq);
var structureMapping=mapping[m];
if (structureMapping.getSequence$() === seq  && sp > -1 ) {
if (!visibleFeatures.isEmpty$()) {
C$.scanSequenceFeatures$java_util_List$jalview_structure_StructureMapping$jalview_datamodel_SequenceI$java_util_Map$S(visibleFeatures, structureMapping, seq, theMap, modelId);
}if (showLinkedFeatures) {
C$.scanComplementFeatures$jalview_api_FeatureRenderer$jalview_structure_StructureMapping$jalview_datamodel_SequenceI$java_util_Map$S(complementRenderer, structureMapping, seq, theMap, modelId);
}}}
}
}
return theMap;
});

Clazz.newMeth(C$, 'openSession$S',  function (filepath) {
var cmd=this.getCommandGenerator$().openSession$S(filepath);
if (cmd == null ) {
return false;
}this.executeCommand$jalview_structure_StructureCommandI$Z(cmd, true);
return true;
});

Clazz.newMeth(C$, 'scanComplementFeatures$jalview_api_FeatureRenderer$jalview_structure_StructureMapping$jalview_datamodel_SequenceI$java_util_Map$S',  function (complementRenderer, structureMapping, seq, theMap, modelNumber) {
for (var seqPos, $seqPos = structureMapping.getMapping$().keySet$().iterator$(); $seqPos.hasNext$()&&((seqPos=($seqPos.next$()).intValue$()),1);) {
var mf=complementRenderer.findComplementFeaturesAtResidue$jalview_datamodel_SequenceI$I(seq, seqPos);
if (mf != null ) {
for (var sf, $sf = mf.features.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var type=sf.getType$();
if ("Chimera".equals$O(sf.getFeatureGroup$())) {
continue;
}var mappedRanges=structureMapping.getPDBResNumRanges$I$I(seqPos, seqPos);
if (!mappedRanges.isEmpty$()) {
var value=sf.getDescription$();
if (value == null  || value.length$() == 0 ) {
value=type;
}var score=sf.getScore$();
if (score != 0.0  && !Float.isNaN$F(score) ) {
value=Float.toString$F(score);
}var featureValues=theMap.get$O(type);
if (featureValues == null ) {
featureValues=Clazz.new_($I$(3,1));
theMap.put$O$O(type, featureValues);
}for (var range, $range = mappedRanges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
C$.addAtomSpecRange$java_util_Map$O$S$I$I$S(featureValues, value, modelNumber, range[0], range[1], structureMapping.getChain$());
}
}}
}}
}, 1);

Clazz.newMeth(C$, 'scanSequenceFeatures$java_util_List$jalview_structure_StructureMapping$jalview_datamodel_SequenceI$java_util_Map$S',  function (visibleFeatures, mapping, seq, theMap, modelId) {
var sfs=seq.getFeatures$().getPositionalFeatures$SA(visibleFeatures.toArray$OA(Clazz.array(String, [visibleFeatures.size$()])));
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var type=sf.getType$();
if ("Chimera".equals$O(sf.getFeatureGroup$())) {
continue;
}var mappedRanges=mapping.getPDBResNumRanges$I$I(sf.getBegin$(), sf.getEnd$());
if (!mappedRanges.isEmpty$()) {
var value=sf.getDescription$();
if (value == null  || value.length$() == 0 ) {
value=type;
}var score=sf.getScore$();
if (score != 0.0  && !Float.isNaN$F(score) ) {
value=Float.toString$F(score);
}var featureValues=theMap.get$O(type);
if (featureValues == null ) {
featureValues=Clazz.new_($I$(3,1));
theMap.put$O$O(type, featureValues);
}for (var range, $range = mappedRanges.iterator$(); $range.hasNext$()&&((range=($range.next$())),1);) {
C$.addAtomSpecRange$java_util_Map$O$S$I$I$S(featureValues, value, modelId, range[0], range[1], mapping.getChain$());
}
}}
}, 1);

Clazz.newMeth(C$, 'getMappedStructureCount$',  function () {
var files=this.getStructureFiles$();
return files == null  ? 0 : files.length;
});

Clazz.newMeth(C$, 'startExternalViewerMonitor$Process',  function (p) {
this.externalViewerMonitor=Clazz.new_([((P$.AAStructureBindingModel$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AAStructureBindingModel$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
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
), Clazz.new_(P$.AAStructureBindingModel$2.$init$,[this, {p:p}]))],$I$(17,1).c$$Runnable);
this.externalViewerMonitor.start$();
});

Clazz.newMeth(C$, 'startListening$S',  function (uri) {
var commands=this.getCommandGenerator$().startNotifications$S(uri);
if (commands != null ) {
this.executeCommands$java_util_List$Z$S(commands, false, null);
}});

Clazz.newMeth(C$, 'stopListening$',  function () {
var commands=this.getCommandGenerator$().stopNotifications$();
if (commands != null ) {
this.executeCommands$java_util_List$Z$S(commands, false, null);
}});

Clazz.newMeth(C$, 'copyStructureAttributesToFeatures$S$jalview_gui_AlignmentPanel',  function (attName, alignmentPanel) {
var cmd=this.getCommandGenerator$().getResidueAttributes$S(attName);
if (cmd == null ) {
return 0;
}var residueAttributes=this.executeCommand$jalview_structure_StructureCommandI$Z(cmd, true);
var featuresAdded=this.createFeaturesForAttributes$S$java_util_List(attName, residueAttributes);
if (featuresAdded > 0) {
alignmentPanel.getFeatureRenderer$().featuresAdded$();
}return featuresAdded;
});

Clazz.newMeth(C$, 'createFeaturesForAttributes$S$java_util_List',  function (attName, residueAttributes) {
return 0;
});

C$.$static$=function(){C$.$static$=0;
C$.COLOURING_STRUCTURES=$I$(1).getString$S("status.colouring_structures");
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AAStructureBindingModel, "SuperposeData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chain="";
},1);

C$.$fields$=[['Z',['isRna'],'S',['filename','pdbId','chain','modelId'],'O',['pdbResNo','int[]']]]

Clazz.newMeth(C$, 'c$$I$S',  function (width, model) {
;C$.$init$.apply(this);
this.pdbResNo=Clazz.array(Integer.TYPE, [width]);
this.modelId=model;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
