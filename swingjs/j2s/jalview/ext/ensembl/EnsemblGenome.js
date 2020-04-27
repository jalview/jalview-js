(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,['jalview.ext.ensembl.EnsemblSequenceFetcher','.EnsemblFeatureType'],['jalview.ext.ensembl.EnsemblSeqProxy','.EnsemblSeqType'],'jalview.ext.ensembl.EnsemblSeqProxy','java.util.ArrayList']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblGenome", null, 'jalview.ext.ensembl.EnsemblSeqProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['FEATURES_TO_FETCH','jalview.ext.ensembl.EnsemblSequenceFetcher.EnsemblFeatureType[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (d) {
;C$.superclazz.c$$S.apply(this,[d]);C$.$init$.apply(this);
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
if ($I$(3,"isTranscript$S",[sf.getType$()])) {
return false;
}return this.featureMayBelong$jalview_datamodel_SequenceFeature$S(sf, accessionId);
});

Clazz.newMeth(C$, 'getIdentifyingFeatures$jalview_datamodel_SequenceI$S', function (seq, accId) {
var result=Clazz.new_($I$(4,1));
var sfs=seq.getFeatures$().getFeaturesByOntology$SA(["transcript", "NMD_transcript_variant"]);
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var id=sf.getValue$S("id");
if (accId.equals$O(id)) {
result.add$O(sf);
}}
return result;
});

C$.$static$=function(){C$.$static$=0;
C$.FEATURES_TO_FETCH=Clazz.array($I$(1), -1, [$I$(1).transcript, $I$(1).exon, $I$(1).cds, $I$(1).variation]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
