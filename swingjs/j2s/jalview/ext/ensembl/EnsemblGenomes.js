(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'jalview.bin.Cache']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnsemblGenomes", null, 'jalview.ext.ensembl.EnsemblGene');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
