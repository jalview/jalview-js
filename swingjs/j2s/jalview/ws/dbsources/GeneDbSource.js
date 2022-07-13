(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'jalview.datamodel.DBRefSource']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GeneDbSource", null, 'jalview.ws.dbsources.EmblXmlSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessionSeparator$',  function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDbSource$',  function () {
return $I$(1).GENEDB;
});

Clazz.newMeth(C$, 'getDbVersion$',  function () {
return "0";
});

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
return this.getEmblSequenceRecords$S$S($I$(1).GENEDB, queries);
});

Clazz.newMeth(C$, 'isValidReference$S',  function (accession) {
return false;
});

Clazz.newMeth(C$, 'getTestQuery$',  function () {
return "Tb927.6.3300";
});

Clazz.newMeth(C$, 'getDbName$',  function () {
return "GeneDB";
});

Clazz.newMeth(C$, 'getTier$',  function () {
return 0;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
