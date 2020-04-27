(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'jalview.bin.Cache']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblGenomes", null, 'jalview.ext.ensembl.EnsemblGene');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setDomain$S($I$(1).getDefault$S$S("ENSEMBL_GENOMES_BASEURL", "https://rest.ensembl.org"));
}, 1);

Clazz.newMeth(C$, 'getDbName$', function () {
return "ENSEMBLGENOMES";
});

Clazz.newMeth(C$, 'getTestQuery$', function () {
return "CAD01290";
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return "ENSEMBLGENOMES";
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
