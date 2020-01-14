(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.util.ArrayList','jalview.util.DBRefUtils','jalview.datamodel.DBRefEntry','java.net.URL']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnsemblXref", null, 'jalview.ext.ensembl.EnsemblRestClient');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dbName=null;
this.xrefVersion=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.dbName="ENSEMBL (xref)";
this.xrefVersion="ENSEMBL:0";
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (d, dbSource, version) {
C$.superclazz.c$$S.apply(this, [d]);
C$.$init$.apply(this);
this.dbName=dbSource;
this.xrefVersion=dbSource + ":" + version ;
}, 1);

Clazz.newMeth(C$, 'getDbName$', function () {
return this.dbName;
});

Clazz.newMeth(C$, 'getSequenceRecords$S', function (queries) {
return null;
});

Clazz.newMeth(C$, 'getUrl$java_util_List', function (ids) {
return this.getUrl$S(ids.get$I(0));
});

Clazz.newMeth(C$, 'useGetRequest$', function () {
return true;
});

Clazz.newMeth(C$, 'getCrossReferences$S', function (identifier) {
var result=Clazz.new_($I$(1));
var ids=Clazz.new_($I$(1));
ids.add$TE(identifier);
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(this.getUrl$S(identifier), ids, -1, 2, null);
while (rvals.hasNext$()){
var val=rvals.next$();
var db=val.get$O("dbname").toString();
var id=val.get$O("primary_id").toString();
if (db != null  && id != null   && !"GO".equals$O(db) ) {
db=$I$(2).getCanonicalName$S(db);
var dbref=Clazz.new_($I$(3).c$$S$S$S,[db, this.getXRefVersion$(), id]);
result.add$TE(dbref);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException") || Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'getXRefVersion$', function () {
return this.xrefVersion;
});

Clazz.newMeth(C$, 'getUrl$S', function (identifier) {
var url=this.getDomain$() + "/xrefs/id/" + identifier + "?content-type=application/json" + "&all_levels=1" ;
try {
return Clazz.new_($I$(4).c$$S,[url]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
