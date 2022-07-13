(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'StringBuilder','java.net.URL','java.util.ArrayList','jalview.ext.ensembl.Species']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblSymbol", null, 'jalview.ext.ensembl.EnsemblXref');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (domain, dbName, dbVersion) {
;C$.superclazz.c$$S$S$S.apply(this,[domain, dbName, dbVersion]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getUrl$S$jalview_ext_ensembl_Species$SA',  function (id, species, type) {
var sb=Clazz.new_($I$(1,1));
sb.append$S(this.getDomain$()).append$S("/xrefs/symbol/").append$S(species.toString()).append$S("/").append$S(id).append$S("?content-type=application/json");
for (var t, $t = 0, $$t = type; $t<$$t.length&&((t=($$t[$t])),1);$t++) {
sb.append$S("&object_type=").append$S(t);
}
try {
var url=sb.toString();
return Clazz.new_($I$(2,1).c$$S,[url]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getGeneIds$S',  function (identifier) {
var result=Clazz.new_($I$(3,1));
var ids=Clazz.new_($I$(3,1));
ids.add$O(identifier);
var queries=identifier.split$S(this.getAccessionSeparator$());
try {
for (var query, $query = 0, $$query = queries; $query<$$query.length&&((query=($$query[$query])),1);$query++) {
for (var taxon, $taxon = $I$(4).getModelOrganisms$().iterator$(); $taxon.hasNext$()&&((taxon=($taxon.next$())),1);) {
var geneId=null;
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(this.getUrl$S$jalview_ext_ensembl_Species$SA(query, taxon, Clazz.array(String, -1, ["gene"])), ids, -1, 2, null);
if (rvals == null ) continue;
while (rvals.hasNext$()){
var val=rvals.next$();
var id=val.get$O("id").toString();
var type=val.get$O("type").toString();
if (id != null  && "gene".equals$O(type) ) {
geneId=id;
break;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException")){
} else {
throw e;
}
}
if (geneId != null  && !result.contains$O(geneId) ) {
result.add$O(geneId);
}}
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
