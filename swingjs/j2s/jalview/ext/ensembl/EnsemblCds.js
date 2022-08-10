(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,['jalview.ext.ensembl.EnsemblSequenceFetcher','.EnsemblFeatureType'],['jalview.ext.ensembl.EnsemblSeqProxy','.EnsemblSeqType'],'jalview.io.gff.SequenceOntologyFactory','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblCds", null, 'jalview.ext.ensembl.EnsemblSeqProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['FEATURES_TO_FETCH','jalview.ext.ensembl.EnsemblSequenceFetcher.EnsemblFeatureType[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (d) {
;C$.superclazz.c$$S.apply(this,[d]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDbName$',  function () {
return "ENSEMBL (CDS)";
});

Clazz.newMeth(C$, 'getSourceEnsemblType$',  function () {
return $I$(2).CDS;
});

Clazz.newMeth(C$, 'getFeaturesToFetch$',  function () {
return C$.FEATURES_TO_FETCH;
});

Clazz.newMeth(C$, 'retainFeature$jalview_datamodel_SequenceFeature$S',  function (sf, accessionId) {
if ($I$(3).getInstance$().isA$S$S(sf.getType$(), "CDS")) {
return false;
}return this.featureMayBelong$jalview_datamodel_SequenceFeature$S(sf, accessionId);
});

Clazz.newMeth(C$, 'getIdentifyingFeatures$jalview_datamodel_SequenceI$S',  function (seq, accId) {
var result=Clazz.new_($I$(4,1));
var sfs=seq.getFeatures$().getFeaturesByOntology$SA(Clazz.array(String, -1, ["CDS"]));
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var parentFeature=sf.getValue$S("Parent");
if (accId.equals$O(parentFeature)) {
result.add$O(sf);
}}
return result;
});

Clazz.newMeth(C$, 'getCdsRanges$jalview_datamodel_SequenceI',  function (dnaSeq) {
var len=dnaSeq.getLength$();
var ranges=Clazz.new_($I$(4,1));
ranges.add$O(Clazz.array(Integer.TYPE, -1, [1, len]));
return ranges;
});

C$.$static$=function(){C$.$static$=0;
C$.FEATURES_TO_FETCH=Clazz.array($I$(1), -1, [$I$(1).cds, $I$(1).exon, $I$(1).variation]);
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
