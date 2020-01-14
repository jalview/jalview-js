(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.net.URL','java.util.Arrays','java.util.Collections','jalview.util.MapList','jalview.bin.Cache']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EnsemblLookup", null, 'jalview.ext.ensembl.EnsemblRestClient');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (d) {
C$.superclazz.c$$S.apply(this, [d]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDbName$', function () {
return "ENSEMBL";
});

Clazz.newMeth(C$, 'getSequenceRecords$S', function (queries) {
return null;
});

Clazz.newMeth(C$, 'getUrl$java_util_List', function (ids) {
var identifier=ids.get$I(0);
return this.getUrl$S$S(identifier, null);
});

Clazz.newMeth(C$, 'getUrl$S$S', function (identifier, objectType) {
var url=this.getDomain$() + "/lookup/id/" + identifier + "?content-type=application/json" ;
if (objectType != null ) {
url += "&" + "object_type" + "=" + objectType ;
}try {
return Clazz.new_($I$(1).c$$S,[url]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'useGetRequest$', function () {
return true;
});

Clazz.newMeth(C$, 'getGeneId$S', function (identifier) {
return this.getGeneId$S$S(identifier, null);
});

Clazz.newMeth(C$, 'getGeneId$S$S', function (identifier, objectType) {
return this.parseGeneId$java_util_Map(this.getResult$S$S(identifier, objectType));
});

Clazz.newMeth(C$, 'parseGeneId$java_util_Map', function (val) {
if (val == null ) {
return null;
}var geneId=null;
var type=val.get$O("object_type").toString();
if ("Gene".equalsIgnoreCase$S(type)) {
geneId=val.get$O("id").toString();
} else if ("Transcript".equalsIgnoreCase$S(type)) {
geneId=val.get$O("Parent").toString();
} else if ("Translation".equalsIgnoreCase$S(type)) {
var transcriptId=val.get$O("Parent").toString();
geneId=this.getGeneId$S$S(transcriptId, "Transcript");
}return geneId;
});

Clazz.newMeth(C$, 'getSpecies$S', function (identifier) {
var species=null;
var json=this.getResult$S$S(identifier, null);
if (json != null ) {
var o=json.get$O("species");
if (o != null ) {
species=o.toString();
}}return species;
});

Clazz.newMeth(C$, 'getResult$S$S', function (identifier, objectType) {
var ids=$I$(2).asList$TTA(Clazz.array(String, -1, [identifier]));
try {
return this.getJSON$java_net_URL$java_util_List$I$I$S(this.getUrl$S$S(identifier, objectType), ids, -1, 1, null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"org.json.simple.parser.ParseException")){
System.err.println$S("Error parsing " + identifier + " lookup response " + e.getMessage$() );
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getGeneLoci$S', function (geneId) {
return this.parseGeneLoci$java_util_Map(this.getResult$S$S(geneId, "Gene"));
});

Clazz.newMeth(C$, 'parseGeneLoci$java_util_Map', function (json) {
if (json == null ) {
return null;
}try {
var species=json.get$O("species").toString();
var assembly=json.get$O("assembly_name").toString();
var chromosome=json.get$O("seq_region_name").toString();
var strand=json.get$O("strand").toString();
var start=Integer.parseInt$S(json.get$O("start").toString());
var end=Integer.parseInt$S(json.get$O("end").toString());
var fromEnd=end - start + 1;
var reverseStrand="-1".equals$O(strand);
var toStart=reverseStrand ? end : start;
var toEnd=reverseStrand ? start : end;
var fromRange=$I$(3).singletonList$TT(Clazz.array(Integer.TYPE, -1, [1, fromEnd]));
var toRange=$I$(3).singletonList$TT(Clazz.array(Integer.TYPE, -1, [toStart, toEnd]));
var map=Clazz.new_($I$(4).c$$java_util_List$java_util_List$I$I,[fromRange, toRange, 1, 1]);
return ((P$.EnsemblLookup$1||
(function(){var C$=Clazz.newClass(P$, "EnsemblLookup$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'jalview.datamodel.GeneLociI', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSpeciesId$', function () {
return this.$finals$.species == null  ? "" : this.$finals$.species;
});

Clazz.newMeth(C$, 'getAssemblyId$', function () {
return this.$finals$.assembly;
});

Clazz.newMeth(C$, 'getChromosomeId$', function () {
return this.$finals$.chromosome;
});

Clazz.newMeth(C$, 'getMap$', function () {
return this.$finals$.map;
});
})()
), Clazz.new_(P$.EnsemblLookup$1.$init$, [this, {species: species, assembly: assembly, chromosome: chromosome, map: map}]));
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException") || Clazz.exceptionOf(e,"NumberFormatException")){
$I$(5).log.error$O("Error looking up gene loci: " + e.getMessage$());
e.printStackTrace$();
} else {
throw e;
}
}
return null;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
