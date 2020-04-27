(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'com.stevesoft.pat.Regex']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EmblCdsSource", null, 'jalview.ws.dbsources.EmblXmlSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessionSeparator$', function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$', function () {
return Clazz.new_($I$(1,1).c$$S,["^[A-Z]+[0-9]+"]);
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return "EMBLCDS";
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return "0";
});

Clazz.newMeth(C$, 'getSequenceRecords$S', function (queries) {
if (queries.indexOf$S(".") > -1) {
queries=queries.substring$I$I(0, queries.indexOf$S("."));
}return this.getEmblSequenceRecords$S$S("EMBLCDS", queries);
});

Clazz.newMeth(C$, 'isValidReference$S', function (accession) {
return (accession == null  || accession.length$() < 2 ) ? false : this.getAccessionValidator$().search$S(accession);
});

Clazz.newMeth(C$, 'getTestQuery$', function () {
return "CAA37824";
});

Clazz.newMeth(C$, 'getDbName$', function () {
return "EMBL (CDS)";
});

Clazz.newMeth(C$, 'getTier$', function () {
return 0;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
