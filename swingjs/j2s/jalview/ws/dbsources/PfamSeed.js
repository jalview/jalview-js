(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PfamSeed", null, 'jalview.ws.dbsources.Pfam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getURLSuffix$',  function () {
return "/alignment/seed/gzipped";
});

Clazz.newMeth(C$, 'getDbName$',  function () {
return "PFAM (Seed)";
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return "PFAM";
});

Clazz.newMeth(C$, 'getTestQuery$',  function () {
return "PF03760";
});

Clazz.newMeth(C$, 'getTier$',  function () {
return 0;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
