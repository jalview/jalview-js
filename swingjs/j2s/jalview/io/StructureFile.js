(function(){var P$=Clazz.newPackage("jalview.io"),p$1={},I$=[[0,['jalview.datamodel.PDBEntry','.Type'],'jalview.structure.StructureImportSettings','jalview.datamodel.PDBEntry','jalview.datamodel.DBRefEntry','jalview.io.FileParse','jalview.analysis.AlignSeq','jalview.datamodel.Alignment','jalview.datamodel.AlignmentI','java.awt.Color','jalview.io.PDBFeatureSettings']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StructureFile", null, 'jalview.io.AlignFile');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visibleChainAnnotation=false;
this.predictSecondaryStructure=false;
this.externalSecondaryStructure=false;
this.structureFileType=$I$(1).PDB.toString();
},1);

C$.$fields$=[['Z',['visibleChainAnnotation','predictSecondaryStructure','externalSecondaryStructure','pdbIdAvailable'],'S',['id','structureFileType'],'O',['dbRefType','jalview.datamodel.PDBEntry.Type','chains','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$O$jalview_io_DataSourceType',  function (inFile, sourceType) {
;C$.superclazz.c$$O$jalview_io_DataSourceType.apply(this,[inFile, sourceType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_io_FileParse',  function (fp) {
;C$.superclazz.c$$jalview_io_FileParse.apply(this,[fp]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addSettings$Z$Z$Z',  function (addAlignmentAnnotations, predictSecondaryStructure, externalSecStr) {
this.visibleChainAnnotation=addAlignmentAnnotations;
this.predictSecondaryStructure=predictSecondaryStructure;
this.externalSecondaryStructure=externalSecStr;
});

Clazz.newMeth(C$, 'xferSettings$',  function () {
this.visibleChainAnnotation=$I$(2).isVisibleChainAnnotation$();
this.predictSecondaryStructure=$I$(2).isProcessSecondaryStructure$();
this.externalSecondaryStructure=$I$(2).isExternalSecondaryStructure$();
});

Clazz.newMeth(C$, 'c$$Z$O$jalview_io_DataSourceType',  function (parseImmediately, dataObject, sourceType) {
;C$.superclazz.c$$Z$O$jalview_io_DataSourceType.apply(this,[parseImmediately, dataObject, sourceType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z$jalview_io_FileParse',  function (a, fp) {
;C$.superclazz.c$$Z$jalview_io_FileParse.apply(this,[a, fp]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'postProcessChain$mc_view_PDBChain',  function (chain) {
var pdbSequence=chain.sequence;
pdbSequence.setName$S(this.getId$() + "|" + pdbSequence.getName$() );
var entry=Clazz.new_($I$(3,1));
entry.setId$S(this.getId$());
entry.setFakedPDBId$Z(!this.isPPDBIdAvailable$());
entry.setType$S(this.getStructureFileType$());
if (chain.id != null ) {
entry.setChainCode$S(chain.id);
}if (this.inFile != null ) {
entry.setFile$S(this.inFile.getAbsolutePath$());
} else {
entry.setFile$S(this.getDataName$());
}var sourceDBRef=Clazz.new_($I$(4,1));
sourceDBRef.setAccessionId$S(this.getId$());
sourceDBRef.setSource$S("PDB");
sourceDBRef.setVersion$S("");
pdbSequence.addPDBId$jalview_datamodel_PDBEntry(entry);
pdbSequence.addDBRef$jalview_datamodel_DBRefEntry(sourceDBRef);
var chainseq=pdbSequence;
this.seqs.addElement$O(chainseq);
var chainannot=chainseq.getAnnotation$();
if (chainannot != null  && this.visibleChainAnnotation ) {
for (var ai=0; ai < chainannot.length; ai++) {
chainannot[ai].visible=this.visibleChainAnnotation;
this.annotations.addElement$O(chainannot[ai]);
}
}return chainseq;
});

Clazz.newMeth(C$, 'setStructureFileType$S',  function (structureFileType) {
this.structureFileType=structureFileType;
});

Clazz.newMeth(C$, 'getStructureFileType$',  function () {
return this.structureFileType;
});

Clazz.newMeth(C$, 'processPdbFileWithAnnotate3d$java_util_List',  function (rna) {
try {
var cl=Clazz.forName("jalview.ws.jws1.Annotate3D");
if (cl != null ) {
var annotate3d=cl.getConstructor$ClassA(Clazz.array(Class, -1, [])).newInstance$OA(Clazz.array(java.lang.Object, -1, []));
var al=(cl.getMethod$S$ClassA("getRNAMLFor", Clazz.array(Class, -1, [Clazz.getClass($I$(5))])).invoke$O$OA(annotate3d, Clazz.array(java.lang.Object, -1, [Clazz.new_([this.getDataName$(), this.dataSourceType],$I$(5,1).c$$O$jalview_io_DataSourceType)])));
for (var sq, $sq = al.getSequences$().iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
if (sq.getDatasetSequence$() != null ) {
if (sq.getDatasetSequence$().getAllPDBEntries$() != null ) {
sq.getDatasetSequence$().getAllPDBEntries$().clear$();
}} else {
if (sq.getAllPDBEntries$() != null ) {
sq.getAllPDBEntries$().clear$();
}}}
this.replaceAndUpdateChains$java_util_List$jalview_datamodel_AlignmentI$S$Z(rna, al, "dna", false);
}} catch (x) {
if (Clazz.exceptionOf(x,"ClassNotFoundException")){
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'replaceAndUpdateChains$java_util_List$jalview_datamodel_AlignmentI$S$Z',  function (prot, al, pep, b) {
var replaced=$I$(6).replaceMatchingSeqsWith$java_util_List$java_util_List$java_util_List$jalview_datamodel_AlignmentI$S$Z(this.seqs, this.annotations, prot, al, pep, false);
for (var ch, $ch = this.getChains$().iterator$(); $ch.hasNext$()&&((ch=($ch.next$())),1);) {
var p=0;
for (var sq, $sq = replaced.get$I(0).iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
++p;
if (sq === ch.sequence  || sq.getDatasetSequence$() === ch.sequence  ) {
p=-p;
break;
}}
if (p < 0) {
p=-p - 1;
ch.shadow=replaced.get$I(1).get$I(p);
ch.shadowMap=(replaced.get$I(2).get$I(p)).getMappingFromS1$Z(false);
}}
});

Clazz.newMeth(C$, 'addSecondaryStructure$java_util_List$java_util_List',  function (rnaSequences, proteinSequences) {
if (this.externalSecondaryStructure && rnaSequences.size$() > 0 ) {
try {
this.processPdbFileWithAnnotate3d$java_util_List(rnaSequences);
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
System.err.println$S("Exceptions when dealing with RNA in pdb file");
x.printStackTrace$();
} else {
throw x;
}
}
}if (proteinSequences.size$() > 0) {
try {
p$1.processWithJmolParser$java_util_List.apply(this, [proteinSequences]);
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
System.err.println$S("Exceptions from Jmol when processing data in pdb file");
x.printStackTrace$();
} else {
throw x;
}
}
}});

Clazz.newMeth(C$, 'processWithJmolParser$java_util_List',  function (prot) {
try {
var cl=Clazz.forName("jalview.ext.jmol.JmolParser");
if (cl != null ) {
var constructor=cl.getConstructor$ClassA(Clazz.array(Class, -1, [Clazz.getClass($I$(5))]));
var args=Clazz.array(java.lang.Object, -1, [Clazz.new_([this.getDataName$(), this.dataSourceType],$I$(5,1).c$$O$jalview_io_DataSourceType)]);
$I$(2).setShowSeqFeatures$Z(false);
$I$(2).setVisibleChainAnnotation$Z(false);
$I$(2).setProcessSecondaryStructure$Z(this.predictSecondaryStructure);
$I$(2).setExternalSecondaryStructure$Z(this.externalSecondaryStructure);
var jmf=constructor.newInstance$OA(args);
var al=Clazz.new_([cl.getMethod$S$ClassA("getSeqsAsArray", Clazz.array(Class, -1, [])).invoke$O$OA(jmf, Clazz.array(java.lang.Object, -1, []))],$I$(7,1).c$$jalview_datamodel_SequenceIA);
cl.getMethod$S$ClassA("addAnnotations", Clazz.array(Class, -1, [Clazz.getClass($I$(8),['addAnnotation$jalview_datamodel_AlignmentAnnotation','addAnnotation$jalview_datamodel_AlignmentAnnotation$I','addCodonFrame$jalview_datamodel_AlignedCodonFrame','addGroup$jalview_datamodel_SequenceGroup','addSequence$jalview_datamodel_SequenceI','alignAs$jalview_datamodel_AlignmentI','append$jalview_datamodel_AlignmentI','deleteAllAnnotations$Z','deleteAllGroups$','deleteAnnotation$jalview_datamodel_AlignmentAnnotation','deleteAnnotation$jalview_datamodel_AlignmentAnnotation$Z','deleteGroup$jalview_datamodel_SequenceGroup','deleteHiddenSequence$I','deleteSequence$jalview_datamodel_SequenceI','deleteSequence$I','findAllGroups$jalview_datamodel_SequenceI','findGroup$jalview_datamodel_SequenceI$I','findIndex$jalview_datamodel_SequenceI','findIndex$jalview_datamodel_SearchResultsI','findName$S','findName$S$Z','findName$jalview_datamodel_SequenceI$S$Z','findOrCreateAnnotation$S$S$Z$jalview_datamodel_SequenceI$jalview_datamodel_SequenceGroup','findSequenceMatch$S','getAbsoluteHeight$','getAlignmentAnnotation$','getCodonFrame$jalview_datamodel_SequenceI','getCodonFrames$','getCompactAlignment$','getDataset$','getGapCharacter$','getGroups$','getHeight$','getHiddenColumns$','getHiddenSequences$','getMapping$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI','getProperties$','getProperty$O','getSequenceAt$I','getSequenceAtAbsoluteIndex$I','getSequenceNames$','getSequences$','getSequencesArray$','getSequencesByName$','getVisibleWidth$','getWidth$','hasRNAStructure$','hasValidSequence$','isAligned$','isAligned$Z','isHidden$I','justify$Z','moveSelectedSequencesByOne$jalview_datamodel_SequenceGroup$java_util_Map$Z','padGaps$','propagateInsertions$jalview_datamodel_SequenceI$jalview_datamodel_AlignmentView','realiseMappings$java_util_List','removeCodonFrame$jalview_datamodel_AlignedCodonFrame','replaceSequenceAt$I$jalview_datamodel_SequenceI','setAnnotationIndex$jalview_datamodel_AlignmentAnnotation$I','setCodonFrames$java_util_List','setDataset$jalview_datamodel_AlignmentI','setGapCharacter$C','setHiddenColumns$jalview_datamodel_HiddenColumns','setProperty$O$O','setupJPredAlignment$','validateAnnotation$jalview_datamodel_AlignmentAnnotation'])])).invoke$O$OA(jmf, Clazz.array(java.lang.Object, -1, [al]));
for (var sq, $sq = al.getSequences$().iterator$(); $sq.hasNext$()&&((sq=($sq.next$())),1);) {
if (sq.getDatasetSequence$() != null ) {
sq.getDatasetSequence$().getAllPDBEntries$().clear$();
} else {
sq.getAllPDBEntries$().clear$();
}}
this.replaceAndUpdateChains$java_util_List$jalview_datamodel_AlignmentI$S$Z(prot, al, "pep", false);
}} catch (q) {
if (Clazz.exceptionOf(q,"ClassNotFoundException")){
} else {
throw q;
}
}
$I$(2).setShowSeqFeatures$Z(true);
}, p$1);

Clazz.newMeth(C$, 'findChain$S',  function (id) {
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
if (chain.id.equals$O(id)) {
return chain;
}}
return null;
});

Clazz.newMeth(C$, 'makeResidueList$',  function () {
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
chain.makeResidueList$Z(this.visibleChainAnnotation);
}
});

Clazz.newMeth(C$, 'makeCaBondList$',  function () {
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
chain.makeCaBondList$();
}
});

Clazz.newMeth(C$, 'setChargeColours$',  function () {
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
chain.setChargeColours$();
}
});

Clazz.newMeth(C$, 'setColours$jalview_schemes_ColourSchemeI',  function (cs) {
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
chain.setChainColours$jalview_schemes_ColourSchemeI(cs);
}
});

Clazz.newMeth(C$, 'setChainColours$',  function () {
var i=0;
for (var chain, $chain = this.getChains$().iterator$(); $chain.hasNext$()&&((chain=($chain.next$())),1);) {
chain.setChainColours$java_awt_Color($I$(9).getHSBColor$F$F$F(1.0 / i++, 0.4, 1.0));
}
});

Clazz.newMeth(C$, 'isRNA$jalview_datamodel_SequenceI',  function (seq) {
var length=seq.getLength$();
for (var i=0; i < length; i++) {
var c=seq.getCharAt$I(i);
if ((c != "A") && (c != "C") && (c != "G") && (c != "U")  ) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'safeName$S',  function (dataName) {
var p=0;
while ((p=dataName.indexOf$S("/")) > -1 && p < dataName.length$() ){
dataName=dataName.substring$I(p + 1);
}
if (dataName.indexOf$S(".") > -1) {
dataName=dataName.substring$I$I(0, dataName.lastIndexOf$S("."));
}return dataName;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (id) {
this.id=id;
});

Clazz.newMeth(C$, 'getChains$',  function () {
return this.chains;
});

Clazz.newMeth(C$, 'setChains$java_util_Vector',  function (chains) {
this.chains=chains;
});

Clazz.newMeth(C$, 'getDbRefType$',  function () {
return this.dbRefType;
});

Clazz.newMeth(C$, 'setDbRefType$S',  function (dbRefType) {
this.dbRefType=$I$(1).getType$S(dbRefType);
});

Clazz.newMeth(C$, 'setDbRefType$jalview_datamodel_PDBEntry_Type',  function (dbRefType) {
this.dbRefType=dbRefType;
});

Clazz.newMeth(C$, 'getFeatureColourScheme$',  function () {
return Clazz.new_($I$(10,1));
});

Clazz.newMeth(C$, 'isPPDBIdAvailable$',  function () {
return this.pdbIdAvailable;
});

Clazz.newMeth(C$, 'setPDBIdAvailable$Z',  function (pdbIdAvailable) {
this.pdbIdAvailable=pdbIdAvailable;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
