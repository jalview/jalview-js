(function(){var P$=Clazz.newPackage("jalview.structure"),p$1={},I$=[[0,'java.util.ArrayList','java.util.HashMap','java.util.Vector','Error','jalview.util.MessageManager','java.util.IdentityHashMap','jalview.ws.sifts.SiftsSettings','jalview.io.AppletFormatAdapter','jalview.ext.jmol.JmolParser','jalview.io.DataSourceType','jalview.ws.sifts.SiftsClient','jalview.analysis.AlignSeq','mc_view.PDBfile','StringBuilder','jalview.structure.StructureSelectionManager','java.io.PrintStream','jalview.structure.StructureMapping','java.util.Arrays','jalview.structure.AtomSpec','java.util.Collections','jalview.datamodel.SearchResults','jalview.util.MappingUtils','jalview.util.Platform']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureSelectionManager");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mappings=Clazz.new_($I$(1,1));
this.processSecondaryStructure=false;
this.secStructServices=false;
this.addTempFacAnnot=false;
this.seqmappings=Clazz.new_($I$(1,1));
this.commandListeners=Clazz.new_($I$(1,1));
this.sel_listeners=Clazz.new_($I$(1,1));
this.pdbIdFileName=Clazz.new_($I$(2,1));
this.pdbFileNameId=Clazz.new_($I$(2,1));
this.relaySeqMappings=true;
this.listeners=Clazz.new_($I$(3,1));
this.handlingVamsasMo=false;
this.lastmsg=0;
this.view_listeners=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['processSecondaryStructure','secStructServices','addTempFacAnnot','relaySeqMappings','handlingVamsasMo'],'J',['lastmsg'],'O',['mappings','java.util.List','+seqmappings','+commandListeners','+sel_listeners','pdbIdFileName','java.util.Map','+pdbFileNameId','listeners','java.util.Vector','+view_listeners']]
,['S',['NEWLINE'],'O',['instances','java.util.IdentityHashMap','nullProvider','jalview.structure.StructureSelectionManager']]]

Clazz.newMeth(C$, 'isSecStructServices$', function () {
return this.secStructServices;
});

Clazz.newMeth(C$, 'setSecStructServices$Z', function (secStructServices) {
this.secStructServices=secStructServices;
});

Clazz.newMeth(C$, 'isAddTempFacAnnot$', function () {
return this.addTempFacAnnot;
});

Clazz.newMeth(C$, 'setAddTempFacAnnot$Z', function (addTempFacAnnot) {
this.addTempFacAnnot=addTempFacAnnot;
});

Clazz.newMeth(C$, 'isProcessSecondaryStructure$', function () {
return this.processSecondaryStructure;
});

Clazz.newMeth(C$, 'setProcessSecondaryStructure$Z', function (enable) {
this.processSecondaryStructure=enable;
});

Clazz.newMeth(C$, 'reportMapping$', function () {
if (this.mappings.isEmpty$()) {
System.err.println$S("reportMapping: No PDB/Sequence mappings.");
} else {
System.err.println$S("reportMapping: There are " + this.mappings.size$() + " mappings." );
var i=0;
for (var sm, $sm = this.mappings.iterator$(); $sm.hasNext$()&&((sm=($sm.next$())),1);) {
System.err.println$S("mapping " + i++ + " : " + sm.pdbfile );
}
}});

Clazz.newMeth(C$, 'registerPDBFile$S$S', function (idForFile, absoluteFile) {
this.pdbIdFileName.put$O$O(idForFile, absoluteFile);
this.pdbFileNameId.put$O$O(absoluteFile, idForFile);
});

Clazz.newMeth(C$, 'findIdForPDBFile$S', function (idOrFile) {
var id=this.pdbFileNameId.get$O(idOrFile);
return id;
});

Clazz.newMeth(C$, 'findFileForPDBId$S', function (idOrFile) {
var id=this.pdbIdFileName.get$O(idOrFile);
return id;
});

Clazz.newMeth(C$, 'isPDBFileRegistered$S', function (idOrFile) {
return this.pdbFileNameId.containsKey$O(idOrFile) || this.pdbIdFileName.containsKey$O(idOrFile) ;
});

Clazz.newMeth(C$, 'getStructureSelectionManager$jalview_api_StructureSelectionManagerProvider', function (context) {
if (context == null ) {
if (C$.nullProvider == null ) {
if (C$.instances != null ) {
throw Clazz.new_([$I$(5).getString$S("error.implementation_error_structure_selection_manager_null"), Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(5).getString$S("exception.ssm_context_is_null")])],$I$(4,1).c$$S$Throwable);
} else {
C$.nullProvider=Clazz.new_(C$);
}return C$.nullProvider;
}}if (C$.instances == null ) {
C$.instances=Clazz.new_($I$(6,1));
}var instance=C$.instances.get$O(context);
if (instance == null ) {
if (C$.nullProvider != null ) {
instance=C$.nullProvider;
} else {
instance=Clazz.new_(C$);
}C$.instances.put$O$O(context, instance);
}return instance;
}, 1);

Clazz.newMeth(C$, 'setRelaySeqMappings$Z', function (relay) {
this.relaySeqMappings=relay;
});

Clazz.newMeth(C$, 'isRelaySeqMappingsEnabled$', function () {
return this.relaySeqMappings;
});

Clazz.newMeth(C$, 'addStructureViewerListener$O', function (svl) {
if (!this.listeners.contains$O(svl)) {
this.listeners.addElement$O(svl);
}});

Clazz.newMeth(C$, 'alreadyMappedToFile$S', function (pdbid) {
for (var sm, $sm = this.mappings.iterator$(); $sm.hasNext$()&&((sm=($sm.next$())),1);) {
if (sm.getPdbId$().equalsIgnoreCase$S(pdbid)) {
return sm.pdbfile;
}}
return null;
});

Clazz.newMeth(C$, 'setMapping$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator', function (sequence, targetChains, pdbFile, protocol, progress) {
return this.computeMapping$Z$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(true, sequence, targetChains, pdbFile, protocol, progress);
});

Clazz.newMeth(C$, 'setMapping$Z$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType', function (forStructureView, sequenceArray, targetChainIds, pdbFile, sourceType) {
return this.computeMapping$Z$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator(forStructureView, sequenceArray, targetChainIds, pdbFile, sourceType, null);
});

Clazz.newMeth(C$, 'computeMapping$Z$jalview_datamodel_SequenceIA$SA$S$jalview_io_DataSourceType$jalview_gui_IProgressIndicator', function (forStructureView, sequenceArray, targetChainIds, pdbFile, sourceType, progress) {
var progressSessionId=System.currentTimeMillis$() * 3;
var parseSecStr=this.processSecondaryStructure ? p$1.isStructureFileProcessed$S$jalview_datamodel_SequenceIA.apply(this, [pdbFile, sequenceArray]) : false;
var pdb=null;
var isMapUsingSIFTs=$I$(7).isMapWithSifts$();
try {
sourceType=$I$(8).checkProtocol$O(pdbFile);
pdb=Clazz.new_($I$(9,1).c$$Z$O$jalview_io_DataSourceType,[false, pdbFile, sourceType]);
pdb.addSettings$Z$Z$Z(parseSecStr && this.processSecondaryStructure , parseSecStr && this.addTempFacAnnot , parseSecStr && this.secStructServices );
pdb.doParse$();
if (pdb.getId$() != null  && pdb.getId$().trim$().length$() > 0  && $I$(10).FILE === sourceType  ) {
this.registerPDBFile$S$S(pdb.getId$().trim$(), pdbFile);
}isMapUsingSIFTs=isMapUsingSIFTs && pdb.isPPDBIdAvailable$() ;
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
ex.printStackTrace$();
return null;
} else {
throw ex;
}
}
var siftsClient=null;
try {
if (isMapUsingSIFTs) {
siftsClient=Clazz.new_($I$(11,1).c$$jalview_io_StructureFile,[pdb]);
}} catch (e) {
if (Clazz.exceptionOf(e,"jalview.ws.sifts.SiftsException")){
isMapUsingSIFTs=false;
e.printStackTrace$();
siftsClient=null;
} else {
throw e;
}
}
var targetChainId;
for (var s=0; s < sequenceArray.length; s++) {
var infChain=true;
var seq=sequenceArray[s];
var ds=seq;
while (ds.getDatasetSequence$() != null ){
ds=ds.getDatasetSequence$();
}
if (targetChainIds != null  && targetChainIds[s] != null  ) {
infChain=false;
targetChainId=targetChainIds[s];
} else if (seq.getName$().indexOf$S("|") > -1) {
targetChainId=seq.getName$().substring$I(seq.getName$().lastIndexOf$S("|") + 1);
if (targetChainId.length$() > 1) {
if (targetChainId.trim$().length$() == 0) {
targetChainId=" ";
} else {
targetChainId="";
}}} else {
targetChainId="";
}var max=-10;
var maxAlignseq=null;
var maxChainId=" ";
var maxChain=null;
var first=true;
for (var chain, $chain = pdb.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
if (targetChainId.length$() > 0 && !targetChainId.equals$O(chain.id)  && !infChain ) {
continue;
}var type=chain.isNa ? "dna" : "pep";
var as=$I$(12).doGlobalNWAlignment$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$S(seq, chain.sequence, type);
if (first || as.maxscore > max   || (as.maxscore == max  && chain.id.equals$O(targetChainId) ) ) {
first=false;
maxChain=chain;
max=as.maxscore;
maxAlignseq=as;
maxChainId=chain.id;
}}
if (maxChain == null ) {
continue;
}if (sourceType === $I$(10).PASTE ) {
pdbFile="INLINE" + pdb.getId$();
}var seqToStrucMapping=Clazz.new_($I$(1,1));
if (isMapUsingSIFTs && seq.isProtein$() ) {
if (progress != null ) {
progress.setProgressBar$S$J($I$(5).getString$S("status.obtaining_mapping_with_sifts"), progressSessionId);
}var sqmpping=maxAlignseq.getMappingFromS1$Z(false);
if (targetChainId != null  && !targetChainId.trim$().isEmpty$() ) {
var siftsMapping;
try {
siftsMapping=p$1.getStructureMapping$jalview_datamodel_SequenceI$S$S$jalview_io_StructureFile$mc_view_PDBChain$jalview_datamodel_Mapping$jalview_analysis_AlignSeq$jalview_ws_sifts_SiftsClient.apply(this, [seq, pdbFile, targetChainId, pdb, maxChain, sqmpping, maxAlignseq, siftsClient]);
seqToStrucMapping.add$O(siftsMapping);
maxChain.makeExactMapping$jalview_structure_StructureMapping$jalview_datamodel_SequenceI(siftsMapping, seq);
maxChain.transferRESNUMFeatures$jalview_datamodel_SequenceI$S(seq, "IEA: SIFTS");
maxChain.transferResidueAnnotation$jalview_structure_StructureMapping$jalview_datamodel_Mapping(siftsMapping, null);
ds.addPDBId$jalview_datamodel_PDBEntry(maxChain.sequence.getAllPDBEntries$().get$I(0));
} catch (e) {
if (Clazz.exceptionOf(e,"jalview.ws.sifts.SiftsException")){
System.err.println$S(e.getMessage$());
var nwMapping=p$1.getNWMappings$jalview_datamodel_SequenceI$S$S$mc_view_PDBChain$jalview_io_StructureFile$jalview_analysis_AlignSeq.apply(this, [seq, pdbFile, targetChainId, maxChain, pdb, maxAlignseq]);
seqToStrucMapping.add$O(nwMapping);
maxChain.makeExactMapping$jalview_analysis_AlignSeq$jalview_datamodel_SequenceI(maxAlignseq, seq);
maxChain.transferRESNUMFeatures$jalview_datamodel_SequenceI$S(seq, "IEA:Jalview");
maxChain.transferResidueAnnotation$jalview_structure_StructureMapping$jalview_datamodel_Mapping(nwMapping, sqmpping);
ds.addPDBId$jalview_datamodel_PDBEntry(maxChain.sequence.getAllPDBEntries$().get$I(0));
} else {
throw e;
}
}
} else {
var foundSiftsMappings=Clazz.new_($I$(1,1));
for (var chain, $chain = pdb.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
var siftsMapping=null;
try {
siftsMapping=p$1.getStructureMapping$jalview_datamodel_SequenceI$S$S$jalview_io_StructureFile$mc_view_PDBChain$jalview_datamodel_Mapping$jalview_analysis_AlignSeq$jalview_ws_sifts_SiftsClient.apply(this, [seq, pdbFile, chain.id, pdb, chain, sqmpping, maxAlignseq, siftsClient]);
foundSiftsMappings.add$O(siftsMapping);
chain.makeExactMapping$jalview_structure_StructureMapping$jalview_datamodel_SequenceI(siftsMapping, seq);
chain.transferRESNUMFeatures$jalview_datamodel_SequenceI$S(seq, "IEA: SIFTS");
chain.transferResidueAnnotation$jalview_structure_StructureMapping$jalview_datamodel_Mapping(siftsMapping, null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"jalview.ws.sifts.SiftsException")){
var e = e$$;
{
System.err.println$S(e.getMessage$());
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
System.err.println$S("Unexpected exception during SIFTS mapping - falling back to NW for this sequence/structure pair");
System.err.println$S(e.getMessage$());
}
} else {
throw e$$;
}
}
}
if (!foundSiftsMappings.isEmpty$()) {
seqToStrucMapping.addAll$java_util_Collection(foundSiftsMappings);
ds.addPDBId$jalview_datamodel_PDBEntry(sqmpping.getTo$().getAllPDBEntries$().get$I(0));
} else {
var nwMapping=p$1.getNWMappings$jalview_datamodel_SequenceI$S$S$mc_view_PDBChain$jalview_io_StructureFile$jalview_analysis_AlignSeq.apply(this, [seq, pdbFile, maxChainId, maxChain, pdb, maxAlignseq]);
seqToStrucMapping.add$O(nwMapping);
maxChain.transferRESNUMFeatures$jalview_datamodel_SequenceI$S(seq, null);
maxChain.transferResidueAnnotation$jalview_structure_StructureMapping$jalview_datamodel_Mapping(nwMapping, sqmpping);
ds.addPDBId$jalview_datamodel_PDBEntry(maxChain.sequence.getAllPDBEntries$().get$I(0));
}}} else {
if (progress != null ) {
progress.setProgressBar$S$J($I$(5).getString$S("status.obtaining_mapping_with_nw_alignment"), progressSessionId);
}var nwMapping=p$1.getNWMappings$jalview_datamodel_SequenceI$S$S$mc_view_PDBChain$jalview_io_StructureFile$jalview_analysis_AlignSeq.apply(this, [seq, pdbFile, maxChainId, maxChain, pdb, maxAlignseq]);
seqToStrucMapping.add$O(nwMapping);
ds.addPDBId$jalview_datamodel_PDBEntry(maxChain.sequence.getAllPDBEntries$().get$I(0));
}if (forStructureView) {
for (var sm, $sm = seqToStrucMapping.iterator$(); $sm.hasNext$()&&((sm=($sm.next$())),1);) {
this.addStructureMapping$jalview_structure_StructureMapping(sm);
}
}if (progress != null ) {
progress.setProgressBar$S$J(null, progressSessionId);
}}
return pdb;
});

Clazz.newMeth(C$, 'isStructureFileProcessed$S$jalview_datamodel_SequenceIA', function (pdbFile, sequenceArray) {
var parseSecStr=true;
if (this.isPDBFileRegistered$S(pdbFile)) {
for (var sq, $sq = 0, $$sq = sequenceArray; $sq<$$sq.length&&((sq=($$sq[$sq])),1);$sq++) {
var ds=sq;
while (ds.getDatasetSequence$() != null ){
ds=ds.getDatasetSequence$();
}
;if (ds.getAnnotation$() != null ) {
for (var ala, $ala = 0, $$ala = ds.getAnnotation$(); $ala<$$ala.length&&((ala=($$ala[$ala])),1);$ala++) {
if ($I$(13,"isCalcIdForFile$jalview_datamodel_AlignmentAnnotation$S",[ala, this.findIdForPDBFile$S(pdbFile)])) {
parseSecStr=false;
}}
}}
}return parseSecStr;
}, p$1);

Clazz.newMeth(C$, 'addStructureMapping$jalview_structure_StructureMapping', function (sm) {
if (!this.mappings.contains$O(sm)) {
this.mappings.add$O(sm);
}});

Clazz.newMeth(C$, 'getStructureMapping$jalview_datamodel_SequenceI$S$S$jalview_io_StructureFile$mc_view_PDBChain$jalview_datamodel_Mapping$jalview_analysis_AlignSeq$jalview_ws_sifts_SiftsClient', function (seq, pdbFile, targetChainId, pdb, maxChain, sqmpping, maxAlignseq, siftsClient) {
var curChainMapping=siftsClient.getSiftsStructureMapping$jalview_datamodel_SequenceI$S$S(seq, pdbFile, targetChainId);
try {
var chain=pdb.findChain$S(targetChainId);
if (chain != null ) {
chain.transferResidueAnnotation$jalview_structure_StructureMapping$jalview_datamodel_Mapping(curChainMapping, null);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return curChainMapping;
}, p$1);

Clazz.newMeth(C$, 'getNWMappings$jalview_datamodel_SequenceI$S$S$mc_view_PDBChain$jalview_io_StructureFile$jalview_analysis_AlignSeq', function (seq, pdbFile, maxChainId, maxChain, pdb, maxAlignseq) {
var mappingDetails=Clazz.new_($I$(14,1).c$$I,[128]);
mappingDetails.append$S(C$.NEWLINE).append$S("Sequence \u27f7 Structure mapping details");
mappingDetails.append$S(C$.NEWLINE);
mappingDetails.append$S("Method: inferred with Needleman & Wunsch alignment");
mappingDetails.append$S(C$.NEWLINE).append$S("PDB Sequence is :").append$S(C$.NEWLINE).append$S("Sequence = ").append$S(maxChain.sequence.getSequenceAsString$());
mappingDetails.append$S(C$.NEWLINE).append$S("No of residues = ").append$I(maxChain.residues.size$()).append$S(C$.NEWLINE).append$S(C$.NEWLINE);
var ps=((P$.StructureSelectionManager$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StructureSelectionManager$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.io.PrintStream'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'print$S', function (x) {
this.$finals$.mappingDetails.append$S(x);
});

Clazz.newMeth(C$, 'println$', function () {
this.$finals$.mappingDetails.append$S($I$(15).NEWLINE);
});
})()
), Clazz.new_($I$(16,1).c$$java_io_OutputStream,[this, {mappingDetails:mappingDetails}, System.out],P$.StructureSelectionManager$1));
maxAlignseq.printAlignment$java_io_PrintStream(ps);
mappingDetails.append$S(C$.NEWLINE).append$S("PDB start/end ");
mappingDetails.append$S(String.valueOf$I(maxAlignseq.seq2start)).append$S(" ");
mappingDetails.append$S(String.valueOf$I(maxAlignseq.seq2end));
mappingDetails.append$S(C$.NEWLINE).append$S("SEQ start/end ");
mappingDetails.append$S(String.valueOf$I(maxAlignseq.seq1start + (seq.getStart$() - 1))).append$S(" ");
mappingDetails.append$S(String.valueOf$I(maxAlignseq.seq1end + (seq.getStart$() - 1)));
mappingDetails.append$S(C$.NEWLINE);
maxChain.makeExactMapping$jalview_analysis_AlignSeq$jalview_datamodel_SequenceI(maxAlignseq, seq);
var sqmpping=maxAlignseq.getMappingFromS1$Z(false);
maxChain.transferRESNUMFeatures$jalview_datamodel_SequenceI$S(seq, null);
var mapping=Clazz.new_($I$(2,1));
var resNum=-10000;
var index=0;
var insCode=" ";
do {
var tmp=maxChain.atoms.elementAt$I(index);
if ((resNum != tmp.resNumber || insCode != tmp.insCode ) && tmp.alignmentMapping != -1 ) {
resNum=tmp.resNumber;
insCode=tmp.insCode;
if (tmp.alignmentMapping >= -1) {
mapping.put$O$O(new Integer(tmp.alignmentMapping + 1), Clazz.array(Integer.TYPE, -1, [tmp.resNumber, tmp.atomIndex]));
}}index++;
} while (index < maxChain.atoms.size$());
var nwMapping=Clazz.new_([seq, pdbFile, pdb.getId$(), maxChainId, mapping, mappingDetails.toString()],$I$(17,1).c$$jalview_datamodel_SequenceI$S$S$S$java_util_HashMap$S);
maxChain.transferResidueAnnotation$jalview_structure_StructureMapping$jalview_datamodel_Mapping(nwMapping, sqmpping);
return nwMapping;
}, p$1);

Clazz.newMeth(C$, 'removeStructureViewerListener$O$SA', function (svl, pdbfiles) {
this.listeners.removeElement$O(svl);
if (Clazz.instanceOf(svl, "jalview.structure.SequenceListener")) {
for (var i=0; i < this.listeners.size$(); i++) {
if (Clazz.instanceOf(this.listeners.elementAt$I(i), "jalview.structure.StructureListener")) {
(this.listeners.elementAt$I(i)).releaseReferences$O(svl);
}}
}if (pdbfiles == null ) {
return;
}var pdbs=Clazz.new_([$I$(18).asList$OA(pdbfiles)],$I$(1,1).c$$java_util_Collection);
var sl;
for (var i=0; i < this.listeners.size$(); i++) {
if (Clazz.instanceOf(this.listeners.elementAt$I(i), "jalview.structure.StructureListener")) {
sl=this.listeners.elementAt$I(i);
for (var pdbfile, $pdbfile = 0, $$pdbfile = sl.getStructureFiles$(); $pdbfile<$$pdbfile.length&&((pdbfile=($$pdbfile[$pdbfile])),1);$pdbfile++) {
pdbs.remove$O(pdbfile);
}
}}
if (pdbs.size$() > 0) {
var tmp=Clazz.new_($I$(1,1));
for (var sm, $sm = this.mappings.iterator$(); $sm.hasNext$()&&((sm=($sm.next$())),1);) {
if (!pdbs.contains$O(sm.pdbfile)) {
tmp.add$O(sm);
}}
this.mappings=tmp;
}});

Clazz.newMeth(C$, 'mouseOverStructure$I$S$S', function (pdbResNum, chain, pdbfile) {
var atomSpec=Clazz.new_($I$(19,1).c$$S$S$I$I,[pdbfile, chain, pdbResNum, 0]);
var atoms=$I$(20).singletonList$O(atomSpec);
return this.mouseOverStructure$java_util_List(atoms);
});

Clazz.newMeth(C$, 'mouseOverStructure$java_util_List', function (atoms) {
if (this.listeners == null ) {
return null;
}var hasSequenceListener=false;
for (var i=0; i < this.listeners.size$(); i++) {
if (Clazz.instanceOf(this.listeners.elementAt$I(i), "jalview.structure.SequenceListener")) {
hasSequenceListener=true;
}}
if (!hasSequenceListener) {
return null;
}var results=this.findAlignmentPositionsForStructurePositions$java_util_List(atoms);
var result=null;
for (var li, $li = this.listeners.iterator$(); $li.hasNext$()&&((li=($li.next$())),1);) {
if (Clazz.instanceOf(li, "jalview.structure.SequenceListener")) {
var s=(li).highlightSequence$jalview_datamodel_SearchResultsI(results);
if (s != null ) {
result=s;
}}}
return result;
});

Clazz.newMeth(C$, 'findAlignmentPositionsForStructurePositions$java_util_List', function (atoms) {
var results=Clazz.new_($I$(21,1));
for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var lastseq=null;
var lastipos=-1;
for (var sm, $sm = this.mappings.iterator$(); $sm.hasNext$()&&((sm=($sm.next$())),1);) {
if (sm.pdbfile.equals$O(atom.getPdbFile$()) && sm.pdbchain.equals$O(atom.getChain$()) ) {
var indexpos=sm.getSeqPos$I(atom.getPdbResNum$());
if (lastipos != indexpos || lastseq !== sm.sequence  ) {
results.addResult$jalview_datamodel_SequenceI$I$I(sm.sequence, indexpos, indexpos);
lastipos=indexpos;
lastseq=sm.sequence;
for (var acf, $acf = this.seqmappings.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
acf.markMappedRegion$jalview_datamodel_SequenceI$I$jalview_datamodel_SearchResultsI(sm.sequence, indexpos, results);
}
}}}
}
return results;
});

Clazz.newMeth(C$, 'mouseOverSequence$jalview_datamodel_SequenceI$I$I$jalview_structure_VamsasSource', function (seq, indexpos, seqPos, source) {
var hasSequenceListeners=this.handlingVamsasMo || !this.seqmappings.isEmpty$() ;
var results=null;
if (seqPos == -1) {
seqPos=seq.findPosition$I(indexpos);
}for (var i=0; i < this.listeners.size$(); i++) {
var listener=this.listeners.elementAt$I(i);
if (listener === source ) {
continue;
}if (Clazz.instanceOf(listener, "jalview.structure.StructureListener")) {
this.highlightStructure$jalview_structure_StructureListener$jalview_datamodel_SequenceI$IA(listener, seq, [seqPos]);
} else {
if (Clazz.instanceOf(listener, "jalview.structure.SequenceListener")) {
var seqListener=listener;
if (hasSequenceListeners && seqListener.getVamsasSource$() !== source  ) {
if (this.relaySeqMappings) {
if (results == null ) {
results=$I$(22).buildSearchResults$jalview_datamodel_SequenceI$I$java_util_List(seq, seqPos, this.seqmappings);
}if (this.handlingVamsasMo) {
results.addResult$jalview_datamodel_SequenceI$I$I(seq, seqPos, seqPos);
}if (!results.isEmpty$()) {
seqListener.highlightSequence$jalview_datamodel_SearchResultsI(results);
}}}} else if (Clazz.instanceOf(listener, "jalview.structure.VamsasListener") && !this.handlingVamsasMo ) {
(listener).mouseOverSequence$jalview_datamodel_SequenceI$I$jalview_structure_VamsasSource(seq, indexpos, source);
} else if (Clazz.instanceOf(listener, "jalview.structure.SecondaryStructureListener")) {
(listener).mouseOverSequence$jalview_datamodel_SequenceI$I$I(seq, indexpos, seqPos);
}}}
});

Clazz.newMeth(C$, 'highlightStructure$jalview_structure_StructureListener$jalview_datamodel_SequenceI$IA', function (sl, seq, positions) {
if (!sl.isListeningFor$jalview_datamodel_SequenceI(seq)) {
return;
}var atomNo;
var atoms=Clazz.new_($I$(1,1));
for (var sm, $sm = this.mappings.iterator$(); $sm.hasNext$()&&((sm=($sm.next$())),1);) {
if (sm.sequence === seq  || sm.sequence === seq.getDatasetSequence$()   || (sm.sequence.getDatasetSequence$() != null  && sm.sequence.getDatasetSequence$() === seq.getDatasetSequence$()  ) ) {
for (var index, $index = 0, $$index = positions; $index<$$index.length&&((index=($$index[$index])),1);$index++) {
atomNo=sm.getAtomNum$I(index);
if (atomNo > 0) {
atoms.add$O(Clazz.new_([sm.pdbfile, sm.pdbchain, sm.getPDBResNum$I(index), atomNo],$I$(19,1).c$$S$S$I$I));
}}
}}
sl.highlightAtoms$java_util_List(atoms);
});

Clazz.newMeth(C$, 'mouseOverVamsasSequence$jalview_datamodel_SequenceI$I$jalview_structure_VamsasSource', function (sequenceI, position, source) {
this.handlingVamsasMo=true;
var msg=sequenceI.hashCode$() * (1 + position);
if (this.lastmsg != msg) {
this.lastmsg=msg;
this.mouseOverSequence$jalview_datamodel_SequenceI$I$I$jalview_structure_VamsasSource(sequenceI, position, -1, source);
}this.handlingVamsasMo=false;
});

Clazz.newMeth(C$, 'colourSequenceFromStructure$jalview_datamodel_SequenceI$S', function (seq, pdbid) {
return null;
});

Clazz.newMeth(C$, 'structureSelectionChanged$', function () {
});

Clazz.newMeth(C$, 'sequenceSelectionChanged$', function () {
});

Clazz.newMeth(C$, 'sequenceColoursChanged$O', function (source) {
var sl;
for (var i=0; i < this.listeners.size$(); i++) {
if (Clazz.instanceOf(this.listeners.elementAt$I(i), "jalview.structure.StructureListener")) {
sl=this.listeners.elementAt$I(i);
sl.updateColours$O(source);
}}
});

Clazz.newMeth(C$, 'getMapping$S', function (pdbfile) {
var tmp=Clazz.new_($I$(1,1));
for (var sm, $sm = this.mappings.iterator$(); $sm.hasNext$()&&((sm=($sm.next$())),1);) {
if (sm.pdbfile.equals$O(pdbfile)) {
tmp.add$O(sm);
}}
return tmp.toArray$OA(Clazz.array($I$(17), [tmp.size$()]));
});

Clazz.newMeth(C$, 'printMappings$S$java_util_List', function (pdbfile, seqs) {
if (pdbfile == null  || seqs == null   || seqs.isEmpty$() ) {
return "";
}var sb=Clazz.new_($I$(14,1).c$$I,[64]);
for (var sm, $sm = this.mappings.iterator$(); $sm.hasNext$()&&((sm=($sm.next$())),1);) {
if ($I$(23).pathEquals$S$S(sm.pdbfile, pdbfile) && seqs.contains$O(sm.sequence) ) {
sb.append$S(sm.mappingDetails);
sb.append$S(C$.NEWLINE);
sb.append$S("=====================");
sb.append$S(C$.NEWLINE);
}}
sb.append$S(C$.NEWLINE);
return sb.toString();
});

Clazz.newMeth(C$, 'deregisterMapping$jalview_datamodel_AlignedCodonFrame', function (acf) {
if (acf != null ) {
var removed=this.seqmappings.remove$O(acf);
if (removed && this.seqmappings.isEmpty$() ) {
System.out.println$S("All mappings removed");
}}});

Clazz.newMeth(C$, 'registerMappings$java_util_List', function (mappings) {
if (mappings != null ) {
for (var acf, $acf = mappings.iterator$(); $acf.hasNext$()&&((acf=($acf.next$())),1);) {
this.registerMapping$jalview_datamodel_AlignedCodonFrame(acf);
}
}});

Clazz.newMeth(C$, 'registerMapping$jalview_datamodel_AlignedCodonFrame', function (acf) {
if (acf != null ) {
if (!this.seqmappings.contains$O(acf)) {
this.seqmappings.add$O(acf);
}}});

Clazz.newMeth(C$, 'resetAll$', function () {
if (this.mappings != null ) {
this.mappings.clear$();
}if (this.seqmappings != null ) {
this.seqmappings.clear$();
}if (this.sel_listeners != null ) {
this.sel_listeners.clear$();
}if (this.listeners != null ) {
this.listeners.clear$();
}if (this.commandListeners != null ) {
this.commandListeners.clear$();
}if (this.view_listeners != null ) {
this.view_listeners.clear$();
}if (this.pdbFileNameId != null ) {
this.pdbFileNameId.clear$();
}if (this.pdbIdFileName != null ) {
this.pdbIdFileName.clear$();
}});

Clazz.newMeth(C$, 'addSelectionListener$jalview_structure_SelectionListener', function (selecter) {
if (!this.sel_listeners.contains$O(selecter)) {
this.sel_listeners.add$O(selecter);
}});

Clazz.newMeth(C$, 'removeSelectionListener$jalview_structure_SelectionListener', function (toremove) {
if (this.sel_listeners.contains$O(toremove)) {
this.sel_listeners.remove$O(toremove);
}});

Clazz.newMeth(C$, 'sendSelection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource', function (selection, colsel, hidden, source) {
for (var slis, $slis = this.sel_listeners.iterator$(); $slis.hasNext$()&&((slis=($slis.next$())),1);) {
if (slis !== source ) {
slis.selection$jalview_datamodel_SequenceGroup$jalview_datamodel_ColumnSelection$jalview_datamodel_HiddenColumns$jalview_structure_SelectionSource(selection, colsel, hidden, source);
}}
});

Clazz.newMeth(C$, 'sendViewPosition$jalview_api_AlignmentViewPanel$I$I$I$I', function (source, startRes, endRes, startSeq, endSeq) {
if (this.view_listeners != null  && this.view_listeners.size$() > 0 ) {
var listeners=this.view_listeners.elements$();
while (listeners.hasMoreElements$()){
var slis=listeners.nextElement$();
if (slis !== source ) {
slis.viewPosition$I$I$I$I$jalview_api_AlignmentViewPanel(startRes, endRes, startSeq, endSeq, source);
};}
}});

Clazz.newMeth(C$, 'release$jalview_api_StructureSelectionManagerProvider', function (jalviewLite) {
{
if (C$.instances == null ) {
return;
}var mnger=(C$.instances.get$O(jalviewLite));
if (mnger != null ) {
C$.instances.remove$O(jalviewLite);
try {
} catch (x) {
}
}}}, 1);

Clazz.newMeth(C$, 'registerPDBEntry$jalview_datamodel_PDBEntry', function (pdbentry) {
if (pdbentry.getFile$() != null  && pdbentry.getFile$().trim$().length$() > 0 ) {
this.registerPDBFile$S$S(pdbentry.getId$(), pdbentry.getFile$());
}});

Clazz.newMeth(C$, 'addCommandListener$jalview_structure_CommandListener', function (cl) {
if (!this.commandListeners.contains$O(cl)) {
this.commandListeners.add$O(cl);
}});

Clazz.newMeth(C$, 'hasCommandListener$jalview_structure_CommandListener', function (cl) {
return this.commandListeners.contains$O(cl);
});

Clazz.newMeth(C$, 'removeCommandListener$jalview_structure_CommandListener', function (l) {
return this.commandListeners.remove$O(l);
});

Clazz.newMeth(C$, 'commandPerformed$jalview_commands_CommandI$Z$jalview_structure_VamsasSource', function (command, undo, source) {
for (var listener, $listener = this.commandListeners.iterator$(); $listener.hasNext$()&&((listener=($listener.next$())),1);) {
listener.mirrorCommand$jalview_commands_CommandI$Z$jalview_structure_StructureSelectionManager$jalview_structure_VamsasSource(command, undo, this, source);
}
});

Clazz.newMeth(C$, 'mapCommand$jalview_commands_CommandI$Z$jalview_datamodel_AlignmentI$C', function (command, undo, mapTo, gapChar) {
if (Clazz.instanceOf(command, "jalview.commands.EditCommand")) {
return $I$(22).mapEditCommand$jalview_commands_EditCommand$Z$jalview_datamodel_AlignmentI$C$java_util_List(command, undo, mapTo, gapChar, this.seqmappings);
} else if (Clazz.instanceOf(command, "jalview.commands.OrderCommand")) {
return $I$(22).mapOrderCommand$jalview_commands_OrderCommand$Z$jalview_datamodel_AlignmentI$java_util_List(command, undo, mapTo, this.seqmappings);
}return null;
});

Clazz.newMeth(C$, 'getSequenceMappings$', function () {
return this.seqmappings;
});

C$.$static$=function(){C$.$static$=0;
C$.NEWLINE=System.lineSeparator$();
C$.nullProvider=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
