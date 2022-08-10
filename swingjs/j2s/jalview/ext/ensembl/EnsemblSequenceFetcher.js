(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'com.stevesoft.pat.Regex','jalview.bin.Cache']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblSequenceFetcher", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'jalview.ws.seqfetcher.DbSourceProxyImpl');
C$.$classes$=[['EnsemblFeatureType',28]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['ensemblGenomesDomain','ensemblDomain','domain']]
,['O',['ACCESSION_REGEX','com.stevesoft.pat.Regex']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.ensemblDomain=$I$(2).getDefault$S$S("ENSEMBL_BASEURL", "https://rest.ensembl.org").trim$();
this.ensemblGenomesDomain=$I$(2).getDefault$S$S("ENSEMBL_GENOMES_BASEURL", "https://rest.ensembl.org").trim$();
this.domain=this.ensemblDomain;
}, 1);

Clazz.newMeth(C$, 'getDbSource$',  function () {
return "ENSEMBL";
});

Clazz.newMeth(C$, 'getAccessionSeparator$',  function () {
return " ";
});

Clazz.newMeth(C$, 'getAccessionValidator$',  function () {
return C$.ACCESSION_REGEX;
});

Clazz.newMeth(C$, 'isValidReference$S',  function (accession) {
return this.getAccessionValidator$().search$S(accession);
});

Clazz.newMeth(C$, 'getTier$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getTestQuery$',  function () {
return "ENST00000288602";
});

Clazz.newMeth(C$, 'isDnaCoding$',  function () {
return true;
});

Clazz.newMeth(C$, 'getDomain$',  function () {
return this.domain;
});

Clazz.newMeth(C$, 'setDomain$S',  function (d) {
this.domain=d == null  ? null : d.trim$();
});

C$.$static$=function(){C$.$static$=0;
C$.ACCESSION_REGEX=Clazz.new_(["(ENS([A-Z]{3}|)[GTEP]{1}[0-9]{11}$)|(CCDS[0-9.]{3,}$)"],$I$(1,1).c$$S);
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.EnsemblSequenceFetcher, "EnsemblFeatureType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "gene", 0, []);
Clazz.newEnumConst($vals, C$.c$, "transcript", 1, []);
Clazz.newEnumConst($vals, C$.c$, "cds", 2, []);
Clazz.newEnumConst($vals, C$.c$, "exon", 3, []);
Clazz.newEnumConst($vals, C$.c$, "repeat", 4, []);
Clazz.newEnumConst($vals, C$.c$, "simple", 5, []);
Clazz.newEnumConst($vals, C$.c$, "misc", 6, []);
Clazz.newEnumConst($vals, C$.c$, "variation", 7, []);
Clazz.newEnumConst($vals, C$.c$, "somatic_variation", 8, []);
Clazz.newEnumConst($vals, C$.c$, "structural_variation", 9, []);
Clazz.newEnumConst($vals, C$.c$, "somatic_structural_variation", 10, []);
Clazz.newEnumConst($vals, C$.c$, "constrained", 11, []);
Clazz.newEnumConst($vals, C$.c$, "regulatory", 12, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
