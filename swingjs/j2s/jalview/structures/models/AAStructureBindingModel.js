(function(){var P$=Clazz.newPackage("jalview.structures.models"),p$1={},I$=[[0,'jalview.util.Comparison','StringBuilder','Error','jalview.util.MessageManager','java.util.ArrayList','jalview.datamodel.SequenceI','jalview.datamodel.PDBEntry','java.util.Arrays']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AAStructureBindingModel", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.structures.models.SequenceStructureBindingModel', ['jalview.structure.StructureListener', 'jalview.api.StructureSelectionManagerProvider']);
C$.$classes$=[['SuperposeData',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.protocol=null;
this.colourBySequence=true;
this.finishedInit=false;
this.modelFileNames=null;
},1);

C$.$fields$=[['Z',['colourBySequence','nucleotide','finishedInit'],'S',['fileLoadingError'],'O',['ssm','jalview.structure.StructureSelectionManager','pdbEntry','jalview.datamodel.PDBEntry[]','sequence','jalview.datamodel.SequenceI[][]','chains','String[][]','protocol','jalview.io.DataSourceType','modelFileNames','String[]']]]

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager$jalview_datamodel_SequenceIAA', function (ssm, seqs) {
Clazz.super_(C$, this);
this.ssm=ssm;
this.sequence=seqs;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_structure_StructureSelectionManager$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$jalview_io_DataSourceType', function (ssm, pdbentry, sequenceIs, protocol) {
Clazz.super_(C$, this);
this.ssm=ssm;
this.sequence=sequenceIs;
this.nucleotide=$I$(1).isNucleotide$jalview_datamodel_SequenceIAA(sequenceIs);
this.pdbEntry=pdbentry;
this.protocol=protocol;
p$1.resolveChains.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'resolveChains', function () {
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
chainmaps++;
break;
}}}
}newchains[pe][se]=chain;
se++;
}
pe++;
}}
this.chains=newchains;
return chainmaps > 0;
}, p$1);

Clazz.newMeth(C$, 'getSsm$', function () {
return this.ssm;
});

Clazz.newMeth(C$, 'getPdbEntry$I', function (i) {
return (this.pdbEntry != null  && this.pdbEntry.length > i ) ? this.pdbEntry[i] : null;
});

Clazz.newMeth(C$, 'hasPdbId$S', function (pdbId) {
if (this.pdbEntry != null ) {
for (var pdb, $pdb = 0, $$pdb = this.pdbEntry; $pdb<$$pdb.length&&((pdb=($$pdb[$pdb])),1);$pdb++) {
if (pdb.getId$().equals$O(pdbId)) {
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'getPdbCount$', function () {
return this.pdbEntry == null  ? 0 : this.pdbEntry.length;
});

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'getChains$', function () {
return this.chains;
});

Clazz.newMeth(C$, 'getProtocol$', function () {
return this.protocol;
});

Clazz.newMeth(C$, 'setPdbentry$jalview_datamodel_PDBEntryA', function (pdbentry) {
this.pdbEntry=pdbentry;
});

Clazz.newMeth(C$, 'setSequence$jalview_datamodel_SequenceIAA', function (sequence) {
this.sequence=sequence;
});

Clazz.newMeth(C$, 'setChains$SAA', function (chains) {
this.chains=chains;
});

Clazz.newMeth(C$, 'getViewerTitle$S$Z', function (viewerName, verbose) {
if (this.getSequence$() == null  || this.getSequence$().length < 1  || this.getPdbCount$() < 1  || this.getSequence$()[0].length < 1 ) {
return ("Jalview " + viewerName + " Window" );
}var title=Clazz.new_($I$(2,1).c$$I,[64]);
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

Clazz.newMeth(C$, 'releaseUIResources$', function () {
});

Clazz.newMeth(C$, 'isColourBySequence$', function () {
return this.colourBySequence;
});

Clazz.newMeth(C$, 'setColourBySequence$Z', function (colourBySequence) {
this.colourBySequence=colourBySequence;
});

Clazz.newMeth(C$, 'addSequenceAndChain$I$jalview_datamodel_SequenceIA$SA', function (pe, seq, tchain) {
if (pe < 0 || pe >= this.getPdbCount$() ) {
throw Clazz.new_([$I$(4,"formatMessage$S$OA",["error.implementation_error_no_pdbentry_from_index", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(pe).toString()])])],$I$(3,1).c$$S);
}var nullChain="TheNullChain";
var s=Clazz.new_($I$(5,1));
var c=Clazz.new_($I$(5,1));
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
var tmp=s.toArray$OA(Clazz.array($I$(6), [s.size$()]));
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

Clazz.newMeth(C$, 'addSequenceAndChain$jalview_datamodel_PDBEntryA$jalview_datamodel_SequenceIAA$SAA', function (pdbe, seq, chns) {
var v=Clazz.new_($I$(5,1));
var rtn=Clazz.new_($I$(5,1));
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
pdbe=v.toArray$OA(Clazz.array($I$(7), [v.size$()]));
this.setPdbentry$jalview_datamodel_PDBEntryA(pdbe);
if (rtn.size$() > 0) {
var sqs=Clazz.array($I$(6), [this.getPdbCount$(), null]);
var sch=Clazz.array(String, [this.getPdbCount$(), null]);
System.arraycopy$O$I$O$I$I(this.getSequence$(), 0, sqs, 0, this.getSequence$().length);
System.arraycopy$O$I$O$I$I(this.getChains$(), 0, sch, 0, this.getChains$().length);
this.setSequence$jalview_datamodel_SequenceIAA(sqs);
this.setChains$SAA(sch);
pdbe=Clazz.array($I$(7), [rtn.size$()]);
for (var r=0; r < pdbe.length; r++) {
var stri=(rtn.get$I(r));
pdbe[r]=this.getPdbEntry$I(stri[0]);
this.addSequenceAndChain$I$jalview_datamodel_SequenceIA$SA(stri[0], seq[stri[1]], chns[stri[1]]);
}
} else {
pdbe=null;
}return pdbe;
});

Clazz.newMeth(C$, 'addSequence$I$jalview_datamodel_SequenceIA', function (pe, seq) {
this.addSequenceAndChain$I$jalview_datamodel_SequenceIA$SA(pe, seq, null);
});

Clazz.newMeth(C$, 'addSequenceForStructFile$S$jalview_datamodel_SequenceIA', function (pdbFile, seq) {
for (var pe=0; pe < this.getPdbCount$(); pe++) {
if (this.getPdbEntry$I(pe).getFile$().equals$O(pdbFile)) {
this.addSequence$I$jalview_datamodel_SequenceIA(pe, seq);
}}
});

Clazz.newMeth(C$, 'isNucleotide$', function () {
return this.nucleotide;
});

Clazz.newMeth(C$, 'printMappings$', function () {
if (this.pdbEntry == null ) {
return "";
}var sb=Clazz.new_($I$(2,1).c$$I,[128]);
for (var pdbe=0; pdbe < this.getPdbCount$(); pdbe++) {
var pdbfile=this.getPdbEntry$I(pdbe).getFile$();
var seqs=$I$(8,"asList$OA",[this.getSequence$()[pdbe]]);
sb.append$S(this.getSsm$().printMappings$S$java_util_List(pdbfile, seqs));
}
return sb.toString();
});

Clazz.newMeth(C$, 'getMappedPosition$jalview_datamodel_SequenceI$I$jalview_structure_StructureMapping', function (seq, alignedPos, mapping) {
if (alignedPos >= seq.getLength$()) {
return -1;
}if ($I$(1,"isGap$C",[seq.getCharAt$I(alignedPos)])) {
return -1;
}var seqPos=seq.findPosition$I(alignedPos);
var pos=mapping.getPDBResNum$I(seqPos);
return pos;
});

Clazz.newMeth(C$, 'findSuperposableResidues$jalview_datamodel_AlignmentI$java_util_BitSet$jalview_structures_models_AAStructureBindingModel_SuperposeDataA', function (alignment, matched, structures) {
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
structures[pdbfnum].isRna=theSequence.getRNA$() != null ;
s=seqCountForPdbFile;
break;
}}
}
}
return refStructure;
});

Clazz.newMeth(C$, 'waitForFileLoad$SA', function (files) {
var starttime=System.currentTimeMillis$();
var endTime=10000 + 1000 * files.length + starttime;
var notLoaded=null;
var waiting=true;
while (waiting && System.currentTimeMillis$() < endTime ){
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

Clazz.newMeth(C$, 'isListeningFor$jalview_datamodel_SequenceI', function (seq) {
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

Clazz.newMeth(C$, 'isFinishedInit$', function () {
return this.finishedInit;
});

Clazz.newMeth(C$, 'setFinishedInit$Z', function (fi) {
this.finishedInit=fi;
});

Clazz.newMeth(C$, 'getViewer$', function () {
return null;
});

Clazz.newMeth(C$, 'colourBySequence$jalview_api_AlignmentViewPanel', function (alignmentv) {
if (!this.colourBySequence || !this.isLoadingFinished$() ) {
return;
}if (this.getSsm$() == null ) {
return;
}var files=this.getStructureFiles$();
var sr=this.getSequenceRenderer$jalview_api_AlignmentViewPanel(alignmentv);
var colourBySequenceCommands=this.getColourBySequenceCommands$SA$jalview_api_SequenceRenderer$jalview_api_AlignmentViewPanel(files, sr, alignmentv);
this.colourBySequence$jalview_structure_StructureMappingcommandSetA(colourBySequenceCommands);
});

Clazz.newMeth(C$, 'hasFileLoadingError$', function () {
return this.fileLoadingError != null  && this.fileLoadingError.length$() > 0 ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AAStructureBindingModel, "SuperposeData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chain="";
},1);

C$.$fields$=[['Z',['isRna'],'S',['filename','pdbId','chain'],'O',['pdbResNo','int[]']]]

Clazz.newMeth(C$, 'c$$I', function (width) {
;C$.$init$.apply(this);
this.pdbResNo=Clazz.array(Integer.TYPE, [width]);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
