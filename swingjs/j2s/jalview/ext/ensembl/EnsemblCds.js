(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,['jalview.ext.ensembl.EnsemblSequenceFetcher','.EnsemblFeatureType'],['jalview.ext.ensembl.EnsemblSeqProxy','.EnsemblSeqType'],'jalview.io.gff.SequenceOntologyFactory','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnsemblCds", null, 'jalview.ext.ensembl.EnsemblSeqProxy');
C$.FEATURES_TO_FETCH=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.FEATURES_TO_FETCH=Clazz.array($I$(1), -1, [$I$(1).cds, $I$(1).exon, $I$(1).variation]);
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
return "ENSEMBL (CDS)";
});

Clazz.newMeth(C$, 'getSourceEnsemblType$', function () {
return $I$(2).CDS;
});

Clazz.newMeth(C$, 'getFeaturesToFetch$', function () {
return C$.FEATURES_TO_FETCH;
});

Clazz.newMeth(C$, 'retainFeature$jalview_datamodel_SequenceFeature$S', function (sf, accessionId) {
if ($I$(3).getInstance$().isA$S$S(sf.getType$(), "CDS")) {
return false;
}return this.featureMayBelong$jalview_datamodel_SequenceFeature$S(sf, accessionId);
});

Clazz.newMeth(C$, 'getIdentifyingFeatures$jalview_datamodel_SequenceI$S', function (seq, accId) {
var result=Clazz.new_($I$(4));
var sfs=seq.getFeatures$().getFeaturesByOntology$SA(["CDS"]);
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var parentFeature=sf.getValue$S("Parent");
if (accId.equals$O(parentFeature)) {
result.add$TE(sf);
}}
return result;
});

Clazz.newMeth(C$, 'getCdsRanges$jalview_datamodel_SequenceI', function (dnaSeq) {
var len=dnaSeq.getLength$();
var ranges=Clazz.new_($I$(4));
ranges.add$TE(Clazz.array(Integer.TYPE, -1, [1, len]));
return ranges;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
