(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'com.stevesoft.pat.Regex',['jalview.ext.ensembl.EnsemblSeqProxy','.EnsemblSeqType'],'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnsemblProtein", null, 'jalview.ext.ensembl.EnsemblSeqProxy');
C$.$ACCESSION_REGEX=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.$ACCESSION_REGEX=Clazz.new_($I$(1).c$$S,["(ENS([A-Z]{3}|)P[0-9]{11}$)|(CCDS[0-9.]{3,}$)"]);
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
return "ENSEMBL (Protein)";
});

Clazz.newMeth(C$, 'getSourceEnsemblType$', function () {
return $I$(2).PROTEIN;
});

Clazz.newMeth(C$, 'isDnaCoding$', function () {
return false;
});

Clazz.newMeth(C$, 'getTestQuery$', function () {
return "ENSP00000288602";
});

Clazz.newMeth(C$, 'addFeaturesAndProduct$S$jalview_datamodel_AlignmentI', function (accId, alignment) {
});

Clazz.newMeth(C$, 'getFeaturesToFetch$', function () {
return null;
});

Clazz.newMeth(C$, 'getIdentifyingFeatures$jalview_datamodel_SequenceI$S', function (seq, accId) {
return Clazz.new_($I$(3));
});

Clazz.newMeth(C$, 'getAccessionValidator$', function () {
return C$.$ACCESSION_REGEX;
});

Clazz.newMeth(C$, 'getAccessionIdFromQuery$S', function (query) {
var accId=C$.superclazz.prototype.getAccessionIdFromQuery$S.apply(this, [query]);
if (accId != null  && accId.length$() >= 12 ) {
var chars=accId.toCharArray$();
chars[chars.length - 12]="P";
accId= String.instantialize(chars);
}return accId;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
