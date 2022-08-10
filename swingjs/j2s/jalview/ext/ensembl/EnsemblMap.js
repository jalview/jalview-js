(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),I$=[[0,'java.net.URL','jalview.ext.ensembl.EnsemblInfo','java.util.ArrayList','jalview.ext.ensembl.EnsemblLookup','java.util.Collections','jalview.datamodel.Mapping','jalview.util.MapList','jalview.datamodel.GeneLocus']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblMap", null, 'jalview.ext.ensembl.EnsemblRestClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (domain) {
;C$.superclazz.c$$S.apply(this,[domain]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDbName$',  function () {
return "ENSEMBL";
});

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (queries) {
return null;
});

Clazz.newMeth(C$, 'getAssemblyMapUrl$S$S$S$S$I$I',  function (species, chromosome, fromRef, toRef, startPos, endPos) {
var forward=startPos <= endPos;
var start=forward ? startPos : endPos;
var end=forward ? endPos : startPos;
var strand=forward ? "1" : "-1";
var url=String.format$S$OA("%s/map/%s/%s/%s:%d..%d:%s/%s?content-type=application/json", Clazz.array(java.lang.Object, -1, [this.getDomain$(), species, fromRef, chromosome, Integer.valueOf$I(start), Integer.valueOf$I(end), strand, toRef]));
return Clazz.new_($I$(1,1).c$$S,[url]);
});

Clazz.newMeth(C$, 'useGetRequest$',  function () {
return true;
});

Clazz.newMeth(C$, 'getUrl$java_util_List',  function (ids) {
return null;
});

Clazz.newMeth(C$, 'getAssemblyMapping$S$S$S$S$IA',  function (species, chromosome, fromRef, toRef, queryRange) {
var url=null;
try {
url=this.getAssemblyMapUrl$S$S$S$S$I$I(species, chromosome, fromRef, toRef, queryRange[0], queryRange[1]);
return (this.parseAssemblyMappingResponse$java_net_URL(url));
} catch (t) {
System.out.println$S("Error calling " + url + ": " + t.getMessage$() );
return null;
}
});

Clazz.newMeth(C$, 'parseAssemblyMappingResponse$java_net_URL',  function (url) {
var result=null;
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(url, null, -1, 2, "mappings");
if (rvals == null ) {
return null;
}while (rvals.hasNext$()){
var val=rvals.next$();
var mapped=val.get$O("mapped");
var start=Integer.parseInt$S(mapped.get$O("start").toString());
var end=Integer.parseInt$S(mapped.get$O("end").toString());
var strand=mapped.get$O("strand").toString();
if ("1".equals$O(strand)) {
result=Clazz.array(Integer.TYPE, -1, [start, end]);
} else {
result=Clazz.array(Integer.TYPE, -1, [end, start]);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"org.json.simple.parser.ParseException") || Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return result;
});

Clazz.newMeth(C$, 'getCdsMapping$S$S$I$I',  function (division, accession, start, end) {
return this.getIdMapping$S$S$I$I$S(division, accession, start, end, "cds");
});

Clazz.newMeth(C$, 'getCdnaMapping$S$S$I$I',  function (division, accession, start, end) {
return this.getIdMapping$S$S$I$I$S(division, accession, start, end, "cdna");
});

Clazz.newMeth(C$, 'getIdMapping$S$S$I$I$S',  function (division, accession, start, end, cdsOrCdna) {
var url=null;
try {
var domain=Clazz.new_($I$(2,1)).getDomain$S(division);
if (domain != null ) {
url=this.getIdMapUrl$S$S$I$I$S(domain, accession, start, end, cdsOrCdna);
return (this.parseIdMappingResponse$java_net_URL$S$S(url, accession, domain));
}return null;
} catch (t) {
System.out.println$S("Error calling " + url + ": " + t.getMessage$() );
return null;
}
});

Clazz.newMeth(C$, 'getIdMapUrl$S$S$I$I$S',  function (domain, accession, start, end, cdsOrCdna) {
var url=String.format$S$OA("%s/map/%s/%s/%d..%d?include_original_region=1&content-type=application/json", Clazz.array(java.lang.Object, -1, [domain, cdsOrCdna, accession, Integer.valueOf$I(start), Integer.valueOf$I(end)]));
return Clazz.new_($I$(1,1).c$$S,[url]);
});

Clazz.newMeth(C$, 'parseIdMappingResponse$java_net_URL$S$S',  function (url, accession, domain) {
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(url, null, -1, 2, "mappings");
if (rvals == null ) {
return null;
}var assembly=null;
var chromosome=null;
var fromEnd=0;
var regions=Clazz.new_($I$(3,1));
while (rvals.hasNext$()){
var val=rvals.next$();
var original=val.get$O("original");
fromEnd=Integer.parseInt$S(original.get$O("end").toString());
var mapped=val.get$O("mapped");
var start=Integer.parseInt$S(mapped.get$O("start").toString());
var end=Integer.parseInt$S(mapped.get$O("end").toString());
var ass=mapped.get$O("assembly_name").toString();
if (assembly != null  && !assembly.equals$O(ass) ) {
System.err.println$S("EnsemblMap found multiple assemblies - can\'t resolve");
return null;
}assembly=ass;
var chr=mapped.get$O("seq_region_name").toString();
if (chromosome != null  && !chromosome.equals$O(chr) ) {
System.err.println$S("EnsemblMap found multiple chromosomes - can\'t resolve");
return null;
}chromosome=chr;
var strand=mapped.get$O("strand").toString();
if ("-1".equals$O(strand)) {
regions.add$O(Clazz.array(Integer.TYPE, -1, [end, start]));
} else {
regions.add$O(Clazz.array(Integer.TYPE, -1, [start, end]));
}}
var species=Clazz.new_($I$(4,1).c$$S,[domain]).getSpecies$S(accession);
var as=assembly;
var chr=chromosome;
var fromRange=$I$(5,"singletonList$O",[Clazz.array(Integer.TYPE, -1, [1, fromEnd])]);
var mapping=Clazz.new_([Clazz.new_($I$(7,1).c$$java_util_List$java_util_List$I$I,[fromRange, regions, 1, 1])],$I$(6,1).c$$jalview_util_MapList);
return Clazz.new_([species == null  ? "" : species, as, chr, mapping],$I$(8,1).c$$S$S$S$jalview_datamodel_Mapping);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"org.json.simple.parser.ParseException") || Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
return null;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
