(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'com.stevesoft.pat.Regex',['jalview.ext.ensembl.EnsemblSequenceFetcher','.EnsemblFeatureType'],['jalview.ext.ensembl.EnsemblSeqProxy','.EnsemblSeqType'],'jalview.ext.ensembl.EnsemblSeqProxy','java.util.ArrayList']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblCdna", null, 'jalview.ext.ensembl.EnsemblSeqProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$ACCESSION_REGEX','com.stevesoft.pat.Regex','FEATURES_TO_FETCH','jalview.ext.ensembl.EnsemblSequenceFetcher.EnsemblFeatureType[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (d) {
;C$.superclazz.c$$S.apply(this,[d]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDbName$', function () {
return "ENSEMBL (CDNA)";
});

Clazz.newMeth(C$, 'getSourceEnsemblType$', function () {
return $I$(3).CDNA;
});

Clazz.newMeth(C$, 'getAccessionValidator$', function () {
return C$.$ACCESSION_REGEX;
});

Clazz.newMeth(C$, 'getFeaturesToFetch$', function () {
return C$.FEATURES_TO_FETCH;
});

Clazz.newMeth(C$, 'retainFeature$jalview_datamodel_SequenceFeature$S', function (sf, accessionId) {
if ($I$(4,"isTranscript$S",[sf.getType$()])) {
return false;
}return this.featureMayBelong$jalview_datamodel_SequenceFeature$S(sf, accessionId);
});

Clazz.newMeth(C$, 'getIdentifyingFeatures$jalview_datamodel_SequenceI$S', function (seq, accId) {
var result=Clazz.new_($I$(5,1));
var sfs=seq.getFeatures$().getFeaturesByOntology$SA(["exon"]);
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var parentFeature=sf.getValue$S("Parent");
if (accId.equals$O(parentFeature)) {
result.add$O(sf);
}}
return result;
});

Clazz.newMeth(C$, 'getObjectType$', function () {
return "Transcript";
});

C$.$static$=function(){C$.$static$=0;
C$.$ACCESSION_REGEX=Clazz.new_(["(ENS([A-Z]{3}|)[TG][0-9]{11}$)|(CCDS[0-9.]{3,}$)"],$I$(1,1).c$$S);
C$.FEATURES_TO_FETCH=Clazz.array($I$(2), -1, [$I$(2).exon, $I$(2).cds, $I$(2).variation]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
