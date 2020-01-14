(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,['jalview.ext.ensembl.EnsemblSequenceFetcher','.EnsemblFeatureType'],['jalview.ext.ensembl.EnsemblSeqProxy','.EnsemblSeqType'],'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnsemblGenome", null, 'jalview.ext.ensembl.EnsemblSeqProxy');
C$.FEATURES_TO_FETCH=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.FEATURES_TO_FETCH=Clazz.array($I$(1), -1, [$I$(1).transcript, $I$(1).exon, $I$(1).cds, $I$(1).variation]);
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
return "ENSEMBL (Genomic)";
});

Clazz.newMeth(C$, 'getSourceEnsemblType$', function () {
return $I$(2).GENOMIC;
});

Clazz.newMeth(C$, 'getFeaturesToFetch$', function () {
return C$.FEATURES_TO_FETCH;
});

Clazz.newMeth(C$, 'retainFeature$jalview_datamodel_SequenceFeature$S', function (sf, accessionId) {
if (P$.EnsemblSeqProxy.isTranscript$S(sf.getType$())) {
return false;
}return this.featureMayBelong$jalview_datamodel_SequenceFeature$S(sf, accessionId);
});

Clazz.newMeth(C$, 'getIdentifyingFeatures$jalview_datamodel_SequenceI$S', function (seq, accId) {
var result=Clazz.new_($I$(3));
var sfs=seq.getFeatures$().getFeaturesByOntology$SA(["transcript", "NMD_transcript_variant"]);
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var id=sf.getValue$S("id");
if (accId.equals$O(id)) {
result.add$TE(sf);
}}
return result;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
