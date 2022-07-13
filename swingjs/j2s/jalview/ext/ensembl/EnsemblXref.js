(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.util.ArrayList','jalview.util.DBRefUtils','jalview.datamodel.DBRefEntry','java.net.URL']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblXref", null, 'jalview.ext.ensembl.EnsemblRestClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dbName="ENSEMBL (xref)";
this.xrefVersion="ENSEMBL:0";
},1);

C$.$fields$=[['S',['dbName','xrefVersion']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (d, dbSource, version) {
;C$.superclazz.c$$S.apply(this,[d]);C$.$init$.apply(this);
this.dbName=dbSource;
this.xrefVersion=dbSource + ":" + version ;
}, 1);

Clazz.newMeth(C$, 'getDbName$',  function () {
return this.dbName;
});

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
return null;
});

Clazz.newMeth(C$, 'getUrl$java_util_List',  function (ids) {
return this.getUrl$S(ids.get$I(0));
});

Clazz.newMeth(C$, 'useGetRequest$',  function () {
return true;
});

Clazz.newMeth(C$, 'getCrossReferences$S',  function (identifier) {
var result=Clazz.new_($I$(1,1));
var ids=Clazz.new_($I$(1,1));
ids.add$O(identifier);
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(this.getUrl$S(identifier), ids, -1, 2, null);
while (rvals.hasNext$()){
var val=rvals.next$();
var db=val.get$O("dbname").toString();
var id=val.get$O("primary_id").toString();
if (db != null  && id != null   && !"GO".equals$O(db) ) {
db=$I$(2).getCanonicalName$S(db);
var dbref=Clazz.new_([db, this.getXRefVersion$(), id],$I$(3,1).c$$S$S$S);
result.add$O(dbref);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException") || Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'getXRefVersion$',  function () {
return this.xrefVersion;
});

Clazz.newMeth(C$, 'getUrl$S',  function (identifier) {
var url=this.getDomain$() + "/xrefs/id/" + identifier + "?content-type=application/json" + "&all_levels=1" ;
try {
return Clazz.new_($I$(4,1).c$$S,[url]);
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
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
