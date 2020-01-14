(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'StringBuilder','java.net.URL','java.util.ArrayList','jalview.ext.ensembl.Species']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnsemblSymbol", null, 'jalview.ext.ensembl.EnsemblXref');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (domain, dbName, dbVersion) {
C$.superclazz.c$$S$S$S.apply(this, [domain, dbName, dbVersion]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getUrl$S$jalview_ext_ensembl_Species$SA', function (id, species, type) {
var sb=Clazz.new_($I$(1));
sb.append$S(this.getDomain$()).append$S("/xrefs/symbol/").append$S(species.toString()).append$S("/").append$S(id).append$S("?content-type=application/json");
for (var t, $t = 0, $$t = type; $t<$$t.length&&((t=($$t[$t])),1);$t++) {
sb.append$S("&object_type=").append$S(t);
}
try {
var url=sb.toString();
return Clazz.new_($I$(2).c$$S,[url]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getGeneIds$S', function (identifier) {
var result=Clazz.new_($I$(3));
var ids=Clazz.new_($I$(3));
ids.add$TE(identifier);
var queries=identifier.split$S(this.getAccessionSeparator$());
try {
for (var query, $query = 0, $$query = queries; $query<$$query.length&&((query=($$query[$query])),1);$query++) {
for (var taxon, $taxon = $I$(4).getModelOrganisms$().iterator$(); $taxon.hasNext$()&&((taxon=($taxon.next$())),1);) {
var geneId=null;
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(this.getUrl$S$jalview_ext_ensembl_Species$SA(query, taxon, ["gene"]), ids, -1, 2, null);
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
result.add$TE(geneId);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
