(function(){var P$=Clazz.newPackage("jalview.ws.dbsources"),I$=[[0,'com.stevesoft.pat.Regex']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EmblSource", null, 'jalview.ws.dbsources.EmblXmlSource');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAccessionSeparator$', function () {
return null;
});

Clazz.newMeth(C$, 'getAccessionValidator$', function () {
return Clazz.new_($I$(1).c$$S,["^[A-Z]+[0-9]+"]);
});

Clazz.newMeth(C$, 'getDbSource$', function () {
return "EMBL";
});

Clazz.newMeth(C$, 'getDbVersion$', function () {
return "0";
});

Clazz.newMeth(C$, 'getSequenceRecords$S', function (queries) {
return this.getEmblSequenceRecords$S$S("EMBL", queries);
});

Clazz.newMeth(C$, 'isValidReference$S', function (accession) {
return (accession == null  || accession.length$() < 2 ) ? false : this.getAccessionValidator$().search$S(accession);
});

Clazz.newMeth(C$, 'getTestQuery$', function () {
return "X53828";
});

Clazz.newMeth(C$, 'getDbName$', function () {
return "EMBL";
});

Clazz.newMeth(C$, 'getTier$', function () {
return 0;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
