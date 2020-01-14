(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.util.HashMap','java.net.URL']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnsemblInfo", null, 'jalview.ext.ensembl.EnsemblRestClient');
C$.divisions=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDbName$', function () {
return "ENSEMBL";
});

Clazz.newMeth(C$, 'getSequenceRecords$S', function (queries) {
return null;
});

Clazz.newMeth(C$, 'getUrl$java_util_List', function (ids) {
return null;
});

Clazz.newMeth(C$, 'useGetRequest$', function () {
return true;
});

Clazz.newMeth(C$, 'getDomain$S', function (division) {
if (C$.divisions == null ) {
this.fetchDivisions$();
}return C$.divisions.get$O(division.toUpperCase$());
});

Clazz.newMeth(C$, 'fetchDivisions$', function () {
C$.divisions=Clazz.new_($I$(1));
C$.divisions.put$TK$TV("ENSEMBL".toUpperCase$(), this.ensemblDomain);
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(this.getDivisionsUrl$S(this.ensemblGenomesDomain), null, -1, 2, null);
if (rvals == null ) return;
while (rvals.hasNext$()){
var division=rvals.next$().toString();
C$.divisions.put$TK$TV(division.toUpperCase$(), this.ensemblGenomesDomain);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"org.json.simple.parser.ParseException") || Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getDivisionsUrl$S', function (domain) {
return Clazz.new_($I$(2).c$$S,[domain + "/info/divisions?content-type=application/json"]);
});

Clazz.newMeth(C$, 'getDivisions$', function () {
if (C$.divisions == null ) {
this.fetchDivisions$();
}return C$.divisions.keySet$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
