(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.util.HashMap','java.net.URL']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblInfo", null, 'jalview.ext.ensembl.EnsemblRestClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['divisions','java.util.Map']]]

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
C$.divisions=Clazz.new_($I$(1,1));
C$.divisions.put$O$O("ENSEMBL".toUpperCase$(), this.ensemblDomain);
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(this.getDivisionsUrl$S(this.ensemblGenomesDomain), null, -1, 2, null);
if (rvals == null ) return;
while (rvals.hasNext$()){
var division=rvals.next$().toString();
C$.divisions.put$O$O(division.toUpperCase$(), this.ensemblGenomesDomain);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"org.json.simple.parser.ParseException") || Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getDivisionsUrl$S', function (domain) {
return Clazz.new_([domain + "/info/divisions?content-type=application/json"],$I$(2,1).c$$S);
});

Clazz.newMeth(C$, 'getDivisions$', function () {
if (C$.divisions == null ) {
this.fetchDivisions$();
}return C$.divisions.keySet$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:49 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
