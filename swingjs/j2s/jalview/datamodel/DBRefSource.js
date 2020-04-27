(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DBRefSource");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['UP_NAME','UNIPROTKB','EMBLCDSProduct','GENEDB'],'O',['allSources','String[]','+DNACODINGDBS','+CODINGDBS','+PROTEINDBS']]]

Clazz.newMeth(C$, 'getSourceKey$S', function (name) {
for (var i=0; i < 12; i++) {
if (name.equals$O(C$.allSources[i])) {
return 1 << i;
}}
return 0;
}, 1);

Clazz.newMeth(C$, 'isPrimarySource$S', function (source) {
return ((2301 & C$.getSourceKey$S(source)) != 0);
}, 1);

Clazz.newMeth(C$, 'isPrimaryCandidate$S', function (ucversion) {
for (var i=C$.allSources.length; --i >= 0; ) {
if (ucversion.startsWith$S(C$.allSources[i])) {
return false;
}}
return true;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.UP_NAME="UNIPROT_NAME".toUpperCase$();
C$.UNIPROTKB="UniProtKB/TrEMBL".toUpperCase$();
C$.EMBLCDSProduct="EMBLCDSProtein".toUpperCase$();
C$.GENEDB="GeneDB".toUpperCase$();
C$.allSources=Clazz.array(String, -1, ["UNIPROT", C$.UP_NAME, C$.UNIPROTKB, "ENSEMBL", "ENSEMBLGENOMES", "EMBL", "EMBLCDS", C$.EMBLCDSProduct, "PDB", "PFAM", "RFAM", C$.GENEDB]);
C$.DNACODINGDBS=Clazz.array(String, -1, ["ENSEMBL", "ENSEMBLGENOMES", "EMBL", "EMBLCDS", C$.GENEDB]);
C$.CODINGDBS=Clazz.array(String, -1, ["EMBLCDS", C$.GENEDB, "ENSEMBL"]);
C$.PROTEINDBS=Clazz.array(String, -1, ["UNIPROT", C$.UNIPROTKB, "ENSEMBL", C$.EMBLCDSProduct]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
