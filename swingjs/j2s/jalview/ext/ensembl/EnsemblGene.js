(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'com.stevesoft.pat.Regex',['jalview.ext.ensembl.EnsemblSequenceFetcher','.EnsemblFeatureType'],['jalview.ext.ensembl.EnsemblSeqProxy','.EnsemblSeqType'],'jalview.ext.ensembl.EnsemblLookup','jalview.util.MapList','java.util.ArrayList','jalview.ext.ensembl.EnsemblSymbol','java.util.Arrays','jalview.datamodel.features.SequenceFeatures','jalview.datamodel.Sequence','java.net.URLDecoder','jalview.ext.ensembl.EnsemblCdna','jalview.util.Platform','jalview.io.gff.SequenceOntologyFactory','jalview.schemes.FeatureColour','java.awt.Color','jalview.schemes.FeatureSettingsAdapter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnsemblGene", null, 'jalview.ext.ensembl.EnsemblSeqProxy');
C$.$ACCESSION_REGEX=null;
C$.FEATURES_TO_FETCH=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.$ACCESSION_REGEX=Clazz.new_($I$(1).c$$S,[".*"]);
C$.FEATURES_TO_FETCH=Clazz.array($I$(2), -1, [$I$(2).gene, $I$(2).transcript, $I$(2).exon, $I$(2).cds, $I$(2).variation]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (d) {
C$.superclazz.c$$S.apply(this, [d]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDbName$', function () {
return "ENSEMBL";
});

Clazz.newMeth(C$, 'getFeaturesToFetch$', function () {
return C$.FEATURES_TO_FETCH;
});

Clazz.newMeth(C$, 'getSourceEnsemblType$', function () {
return $I$(3).GENOMIC;
});

Clazz.newMeth(C$, 'getObjectType$', function () {
return "Gene";
});

Clazz.newMeth(C$, 'getSequenceRecords$S', function (query) {
var geneIds=this.getGeneIds$S(query);
var al=null;
for (var geneId, $geneId = geneIds.iterator$(); $geneId.hasNext$()&&((geneId=($geneId.next$())),1);) {
var geneAlignment=C$.superclazz.prototype.getSequenceRecords$S.apply(this, [geneId]);
if (geneAlignment == null ) {
continue;
}if (geneAlignment.getHeight$() == 1) {
geneId=geneAlignment.getSequenceAt$I(0).getName$();
this.findGeneLoci$jalview_datamodel_SequenceI$S(geneAlignment.getSequenceAt$I(0), geneId);
this.getTranscripts$jalview_datamodel_AlignmentI$S(geneAlignment, geneId);
}if (al == null ) {
al=geneAlignment;
} else {
al.append$jalview_datamodel_AlignmentI(geneAlignment);
}}
return al;
});

Clazz.newMeth(C$, 'findGeneLoci$jalview_datamodel_SequenceI$S', function (seq, geneId) {
var geneLoci=Clazz.new_($I$(4).c$$S,[this.getDomain$()]).getGeneLoci$S(geneId);
if (geneLoci != null ) {
seq.setGeneLoci$S$S$S$jalview_util_MapList(geneLoci.getSpeciesId$(), geneLoci.getAssemblyId$(), geneLoci.getChromosomeId$(), geneLoci.getMap$());
} else {
this.parseChromosomeLocations$jalview_datamodel_SequenceI(seq);
}});

Clazz.newMeth(C$, 'parseChromosomeLocations$jalview_datamodel_SequenceI', function (seq) {
var description=seq.getDescription$();
if (description == null ) {
return false;
}var tokens=description.split$S(":");
if (tokens.length == 6 && tokens[0].startsWith$S("chromosome") ) {
var ref=tokens[1];
var chrom=tokens[2];
try {
var chStart=Integer.parseInt$S(tokens[3]);
var chEnd=Integer.parseInt$S(tokens[4]);
var forwardStrand="1".equals$O(tokens[5]);
var species="";
var from=Clazz.array(Integer.TYPE, -1, [seq.getStart$(), seq.getEnd$()]);
var to=Clazz.array(Integer.TYPE, -1, [forwardStrand ? chStart : chEnd, forwardStrand ? chEnd : chStart]);
var map=Clazz.new_($I$(5).c$$IA$IA$I$I,[from, to, 1, 1]);
seq.setGeneLoci$S$S$S$jalview_util_MapList(species, ref, chrom, map);
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
System.err.println$S("Bad integers in description " + description);
} else {
throw e;
}
}
}return false;
});

Clazz.newMeth(C$, 'getGeneIds$S', function (accessions) {
var geneIds=Clazz.new_($I$(6));
for (var acc, $acc = 0, $$acc = accessions.split$S(this.getAccessionSeparator$()); $acc<$$acc.length&&((acc=($$acc[$acc])),1);$acc++) {
var geneId=Clazz.new_($I$(4).c$$S,[this.getDomain$()]).getGeneId$S(acc);
if (geneId != null ) {
if (!geneIds.contains$O(geneId)) {
geneIds.add$TE(geneId);
}} else {
var ids=Clazz.new_($I$(7).c$$S$S$S,[this.getDomain$(), this.getDbSource$(), this.getDbVersion$()]).getGeneIds$S(acc);
for (var id, $id = ids.iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
if (!geneIds.contains$O(id)) {
geneIds.add$TE(id);
}}
}}
return geneIds;
});

Clazz.newMeth(C$, 'getTranscripts$jalview_datamodel_AlignmentI$S', function (al, accId) {
var gene=al.getSequenceAt$I(0);
var transcriptFeatures=this.getTranscriptFeatures$S$jalview_datamodel_SequenceI(accId, gene);
for (var transcriptFeature, $transcriptFeature = transcriptFeatures.iterator$(); $transcriptFeature.hasNext$()&&((transcriptFeature=($transcriptFeature.next$())),1);) {
this.makeTranscript$jalview_datamodel_SequenceFeature$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI(transcriptFeature, al, gene);
}
this.clearGeneFeatures$jalview_datamodel_SequenceI(gene);
});

Clazz.newMeth(C$, 'clearGeneFeatures$jalview_datamodel_SequenceI', function (gene) {
var soTerms=Clazz.array(String, -1, ["NMD_transcript_variant", "transcript", "exon", "CDS"]);
var sfs=gene.getFeatures$().getFeaturesByOntology$SA(soTerms);
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
gene.deleteFeature$jalview_datamodel_SequenceFeature(sf);
}
});

Clazz.newMeth(C$, 'makeTranscript$jalview_datamodel_SequenceFeature$jalview_datamodel_AlignmentI$jalview_datamodel_SequenceI', function (transcriptFeature, al, gene) {
var accId=this.getTranscriptId$jalview_datamodel_SequenceFeature(transcriptFeature);
if (accId == null ) {
return null;
}var seqChars=Clazz.array(Character.TYPE, [gene.getLength$()]);
$I$(8).fill$CA$C(seqChars, al.getGapCharacter$());
var parentId=accId;
var splices=this.findFeatures$jalview_datamodel_SequenceI$S$S(gene, "exon", parentId);
if (splices.isEmpty$()) {
splices=this.findFeatures$jalview_datamodel_SequenceI$S$S(gene, "CDS", parentId);
}$I$(9).sortFeatures$java_util_List$Z(splices, true);
var transcriptLength=0;
var geneChars=gene.getSequence$();
var offset=gene.getStart$();
var mappedFrom=Clazz.new_($I$(6));
for (var sf, $sf = splices.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var start=sf.getBegin$() - offset;
var end=sf.getEnd$() - offset;
var spliceLength=end - start + 1;
System.arraycopy$O$I$O$I$I(geneChars, start, seqChars, start, spliceLength);
transcriptLength+=spliceLength;
mappedFrom.add$TE(Clazz.array(Integer.TYPE, -1, [sf.getBegin$(), sf.getEnd$()]));
}
var transcript=Clazz.new_($I$(10).c$$S$CA$I$I,[accId, seqChars, 1, transcriptLength]);
var description=transcriptFeature.getDescription$();
if (description == null ) {
description=transcriptFeature.getValue$S("description");
}if (description != null ) {
try {
transcript.setDescription$S($I$(11).decode$S$S(description, "UTF-8"));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
e.printStackTrace$();
} else {
throw e;
}
}
}transcript.createDatasetSequence$();
al.addSequence$jalview_datamodel_SequenceI(transcript);
var mapTo=Clazz.new_($I$(6));
mapTo.add$TE(Clazz.array(Integer.TYPE, -1, [1, transcriptLength]));
var mapping=Clazz.new_($I$(5).c$$java_util_List$java_util_List$I$I,[mappedFrom, mapTo, 1, 1]);
var cdna=Clazz.new_($I$(12).c$$S,[this.getDomain$()]);
cdna.transferFeatures$java_util_List$jalview_datamodel_SequenceI$jalview_util_MapList$S(gene.getFeatures$().getPositionalFeatures$SA([]), transcript.getDatasetSequence$(), mapping, parentId);
this.mapTranscriptToChromosome$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList(transcript, gene, mapping);
cdna.getCrossReferences$jalview_datamodel_SequenceI(transcript);
cdna.addProteinProduct$jalview_datamodel_SequenceI(transcript);
return transcript;
});

Clazz.newMeth(C$, 'mapTranscriptToChromosome$jalview_datamodel_SequenceI$jalview_datamodel_SequenceI$jalview_util_MapList', function (transcript, gene, mapping) {
var loci=gene.getGeneLoci$();
if (loci == null ) {
return;
}var geneMapping=loci.getMap$();
var exons=mapping.getFromRanges$();
var transcriptLoci=Clazz.new_($I$(6));
for (var exon, $exon = exons.iterator$(); $exon.hasNext$()&&((exon=($exon.next$())),1);) {
transcriptLoci.add$TE(geneMapping.locateInTo$I$I(exon[0], exon[1]));
}
var transcriptRange=$I$(8).asList$TTA([Clazz.array(Integer.TYPE, -1, [transcript.getStart$(), transcript.getEnd$()])]);
var mapList=Clazz.new_($I$(5).c$$java_util_List$java_util_List$I$I,[transcriptRange, transcriptLoci, 1, 1]);
transcript.setGeneLoci$S$S$S$jalview_util_MapList(loci.getSpeciesId$(), loci.getAssemblyId$(), loci.getChromosomeId$(), mapList);
});

Clazz.newMeth(C$, 'getTranscriptId$jalview_datamodel_SequenceFeature', function (feature) {
return feature.getValue$S("id");
});

Clazz.newMeth(C$, 'getTranscriptFeatures$S$jalview_datamodel_SequenceI', function (accId, geneSequence) {
var transcriptFeatures=Clazz.new_($I$(6));
var parentIdentifier=accId;
var sfs=geneSequence.getFeatures$().getFeaturesByOntology$SA(["transcript"]);
sfs.addAll$java_util_Collection(geneSequence.getFeatures$().getPositionalFeatures$SA(["NMD_transcript_variant"]));
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var parent=sf.getValue$S("Parent");
if (parentIdentifier.equalsIgnoreCase$S(parent)) {
transcriptFeatures.add$TE(sf);
}}
return transcriptFeatures;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return "Fetches all transcripts and variant features for a gene or transcript";
});

Clazz.newMeth(C$, 'getTestQuery$', function () {
return $I$(13).isJS$() ? "ENSG00000123569" : "ENSG00000157764";
});

Clazz.newMeth(C$, 'getIdentifyingFeatures$jalview_datamodel_SequenceI$S', function (seq, accId) {
var result=Clazz.new_($I$(6));
var sfs=seq.getFeatures$().getFeaturesByOntology$SA(["gene"]);
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var id=sf.getValue$S("id");
if (accId.equalsIgnoreCase$S(id)) {
result.add$TE(sf);
}}
return result;
});

Clazz.newMeth(C$, 'retainFeature$jalview_datamodel_SequenceFeature$S', function (sf, accessionId) {
var so=$I$(14).getInstance$();
var type=sf.getType$();
if (so.isA$S$S(type, "gene")) {
return false;
}if (P$.EnsemblSeqProxy.isTranscript$S(type)) {
var parent=sf.getValue$S("Parent");
if (!accessionId.equalsIgnoreCase$S(parent)) {
return false;
}}return true;
});

Clazz.newMeth(C$, 'addProteinProduct$jalview_datamodel_SequenceI', function (querySeq) {
});

Clazz.newMeth(C$, 'getAccessionValidator$', function () {
return C$.$ACCESSION_REGEX;
});

Clazz.newMeth(C$, 'getFeatureColourScheme$', function () {
return ((P$.EnsemblGene$1||
(function(){var C$=Clazz.newClass(P$, "EnsemblGene$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('jalview.schemes.FeatureSettingsAdapter'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.so=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.so=$I$(14).getInstance$();
}, 1);

Clazz.newMeth(C$, 'isFeatureDisplayed$S', function (type) {
return (this.so.isA$S$S(type, "exon") || this.so.isA$S$S(type, "sequence_variant") );
});

Clazz.newMeth(C$, 'getFeatureColour$S', function (type) {
if (this.so.isA$S$S(type, "exon")) {
return ((P$.EnsemblGene$1$1||
(function(){var C$=Clazz.newClass(P$, "EnsemblGene$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('jalview.schemes.FeatureColour'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isColourByLabel$', function () {
return true;
});
})()
), Clazz.new_($I$(15), [this, null],P$.EnsemblGene$1$1));
}if (this.so.isA$S$S(type, "sequence_variant")) {
return ((P$.EnsemblGene$1$2||
(function(){var C$=Clazz.newClass(P$, "EnsemblGene$1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('jalview.schemes.FeatureColour'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getColour$', function () {
return $I$(16).RED;
});
})()
), Clazz.new_($I$(15), [this, null],P$.EnsemblGene$1$2));
}return null;
});

Clazz.newMeth(C$, ['compare$S$S','compare$','compare$TT$TT'], function (feature1, feature2) {
if (this.so.isA$S$S(feature1, "sequence_variant")) {
return +1;
}if (this.so.isA$S$S(feature2, "sequence_variant")) {
return -1;
}if (this.so.isA$S$S(feature1, "exon")) {
return +1;
}if (this.so.isA$S$S(feature2, "exon")) {
return -1;
}return 0;
});
})()
), Clazz.new_($I$(17), [this, null],P$.EnsemblGene$1));
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
