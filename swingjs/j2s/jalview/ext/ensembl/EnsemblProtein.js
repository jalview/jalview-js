(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'com.stevesoft.pat.Regex',['jalview.ext.ensembl.EnsemblSeqProxy','.EnsemblSeqType'],'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblProtein", null, 'jalview.ext.ensembl.EnsemblSeqProxy');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$ACCESSION_REGEX','com.stevesoft.pat.Regex']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (d) {
;C$.superclazz.c$$S.apply(this,[d]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDbName$',  function () {
return "ENSEMBL (Protein)";
});

Clazz.newMeth(C$, 'getSourceEnsemblType$',  function () {
return $I$(2).PROTEIN;
});

Clazz.newMeth(C$, 'isDnaCoding$',  function () {
return false;
});

Clazz.newMeth(C$, 'getTestQuery$',  function () {
return "ENSP00000288602";
});

Clazz.newMeth(C$, 'addFeaturesAndProduct$S$jalview_datamodel_AlignmentI',  function (accId, alignment) {
});

Clazz.newMeth(C$, 'getFeaturesToFetch$',  function () {
return null;
});

Clazz.newMeth(C$, 'getIdentifyingFeatures$jalview_datamodel_SequenceI$S',  function (seq, accId) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getAccessionValidator$',  function () {
return C$.$ACCESSION_REGEX;
});

Clazz.newMeth(C$, 'getAccessionIdFromQuery$S',  function (query) {
var accId=C$.superclazz.prototype.getAccessionIdFromQuery$S.apply(this, [query]);
if (accId != null  && accId.length$() >= 12 ) {
var chars=accId.toCharArray$();
chars[chars.length - 12]="P";
accId= String.instantialize(chars);
}return accId;
});

C$.$static$=function(){C$.$static$=0;
C$.$ACCESSION_REGEX=Clazz.new_(["(ENS([A-Z]{3}|)P[0-9]{11}$)|(CCDS[0-9.]{3,}$)"],$I$(1,1).c$$S);
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
