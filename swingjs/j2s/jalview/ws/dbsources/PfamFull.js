(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PfamFull", null, 'jalview.ws.dbsources.Pfam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getURLSuffix$', function () {
return "/alignment/full";
});

Clazz.newMeth(C$, 'getDbName$', function () {
return "PFAM (Full)";
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return this.getDbName$();
});

Clazz.newMeth(C$, 'getTestQuery$', function () {
return "PF03760";
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return null;
});

Clazz.newMeth(C$, 'getTier$', function () {
return 0;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
