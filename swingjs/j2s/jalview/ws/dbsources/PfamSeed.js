(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[];
var C$=Clazz.newClass(P$, "PfamSeed", null, 'jalview.ws.dbsources.Pfam');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getURLSuffix$', function () {
return "/alignment/seed";
});

Clazz.newMeth(C$, 'getDbName$', function () {
return "PFAM (Seed)";
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return "PFAM";
});

Clazz.newMeth(C$, 'getTestQuery$', function () {
return "PF03760";
});

Clazz.newMeth(C$, 'getTier$', function () {
return 0;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
