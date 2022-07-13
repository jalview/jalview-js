(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EmblCdsSource", null, 'jalview.ws.dbsources.EmblFlatfileSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDbSource$',  function () {
return "EMBLCDS";
});

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
if (queries.indexOf$S(".") > -1) {
queries=queries.substring$I$I(0, queries.indexOf$S("."));
}return this.getEmblSequenceRecords$S$S("EMBLCDS", queries);
});

Clazz.newMeth(C$, 'getTestQuery$',  function () {
return "CAA37824";
});

Clazz.newMeth(C$, 'getDbName$',  function () {
return "EMBL (CDS)";
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
