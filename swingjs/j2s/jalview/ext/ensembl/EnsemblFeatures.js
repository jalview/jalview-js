(function(){var P$=Clazz.newPackage("jalview.ext.ensembl"),p$1={},I$=[[0,['jalview.ext.ensembl.EnsemblSequenceFetcher','.EnsemblFeatureType'],'java.util.ArrayList','jalview.datamodel.Alignment','jalview.datamodel.SequenceI','jalview.datamodel.Sequence','jalview.util.JSONUtils','jalview.datamodel.SequenceFeature','StringBuffer','java.net.URL']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EnsemblFeatures", null, 'jalview.ext.ensembl.EnsemblRestClient');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.featuresWanted=Clazz.array($I$(1), -1, [$I$(1).cds, $I$(1).exon, $I$(1).variation]);
},1);

C$.$fields$=[['O',['featuresWanted','jalview.ext.ensembl.EnsemblSequenceFetcher.EnsemblFeatureType[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (d) {
;C$.superclazz.c$$S.apply(this,[d]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDbName$',  function () {
return "ENSEMBL (features)";
});

Clazz.newMeth(C$, 'getSequenceRecords$S',  function (query) {
var queries=Clazz.new_($I$(2,1));
queries.add$O(query);
var seq=p$1.parseFeaturesJson$java_util_List.apply(this, [queries]);
if (seq == null ) return null;
return Clazz.new_([Clazz.array($I$(4), -1, [seq])],$I$(3,1).c$$jalview_datamodel_SequenceIA);
});

Clazz.newMeth(C$, 'parseFeaturesJson$java_util_List',  function (queries) {
var seq=Clazz.new_($I$(5,1).c$$S$S,["Dummy", ""]);
try {
var rvals=this.getJSON$java_net_URL$java_util_List$I$I$S(null, queries, -1, 2, null);
if (rvals == null ) {
return null;
}while (rvals.hasNext$()){
try {
var obj=rvals.next$();
var type=obj.get$O("feature_type").toString();
var start=Integer.parseInt$S(obj.get$O("start").toString());
var end=Integer.parseInt$S(obj.get$O("end").toString());
var source=obj.get$O("source").toString();
var strand=obj.get$O("strand").toString();
var phase=obj.get$O("phase");
var alleles=$I$(6,"arrayToStringList$java_util_List",[obj.get$O("alleles")]);
var clinSig=$I$(6,"arrayToStringList$java_util_List",[obj.get$O("clinical_significance")]);
if ("variation".equals$O(type)) {
type="sequence_variant";
} else if ("CDS".equalsIgnoreCase$S((type))) {
type="CDS";
}var desc=this.getFirstNotNull$java_util_Map$SA(obj, Clazz.array(String, -1, ["alleles", "external_name", "id"]));
var sf=Clazz.new_($I$(7,1).c$$S$S$I$I$S,[type, desc, start, end, source]);
sf.setStrand$S("1".equals$O(strand) ? "+" : "-");
if (phase != null ) {
sf.setPhase$S(phase.toString());
}this.setFeatureAttribute$jalview_datamodel_SequenceFeature$java_util_Map$S(sf, obj, "id");
this.setFeatureAttribute$jalview_datamodel_SequenceFeature$java_util_Map$S(sf, obj, "Parent");
this.setFeatureAttribute$jalview_datamodel_SequenceFeature$java_util_Map$S(sf, obj, "consequence_type");
sf.setValue$S$O("alleles", alleles);
sf.setValue$S$O("clinical_significance", clinSig);
seq.addSequenceFeature$jalview_datamodel_SequenceFeature(sf);
} catch (t) {
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"org.json.simple.parser.ParseException") || Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
return seq;
}, p$1);

Clazz.newMeth(C$, 'getFirstNotNull$java_util_Map$SA',  function (obj, keys) {
for (var key, $key = 0, $$key = keys; $key<$$key.length&&((key=($$key[$key])),1);$key++) {
var val=obj.get$O(key);
if (val != null ) {
var s=Clazz.instanceOf(val, "java.util.List") ? $I$(6).arrayToStringList$java_util_List(val) : val.toString();
if (!s.isEmpty$()) {
return s;
}}}
return null;
});

Clazz.newMeth(C$, 'setFeatureAttribute$jalview_datamodel_SequenceFeature$java_util_Map$S',  function (sf, obj, key) {
var object=obj.get$O(key);
if (object != null ) {
sf.setValue$S$O(key, object.toString());
}});

Clazz.newMeth(C$, 'getUrl$java_util_List',  function (ids) {
var urlstring=Clazz.new_($I$(8,1).c$$I,[128]);
urlstring.append$S(this.getDomain$()).append$S("/overlap/id/").append$S(ids.get$I(0));
urlstring.append$S("?content-type=" + this.getResponseMimeType$());
urlstring.append$S("&").append$S("object_type").append$S("=").append$S("Gene");
for (var feature, $feature = 0, $$feature = this.featuresWanted; $feature<$$feature.length&&((feature=($$feature[$feature])),1);$feature++) {
urlstring.append$S("&feature=").append$S(feature.name$());
}
return Clazz.new_([urlstring.toString()],$I$(9,1).c$$S);
});

Clazz.newMeth(C$, 'useGetRequest$',  function () {
return true;
});

Clazz.newMeth(C$, 'getRequestMimeType$',  function () {
return "application/json";
});

Clazz.newMeth(C$, 'getResponseMimeType$',  function () {
return "application/json";
});

Clazz.newMeth(C$, 'getSequenceRecords$S$jalview_ext_ensembl_EnsemblSequenceFetcher_EnsemblFeatureTypeA',  function (accId, features) {
this.featuresWanted=features;
return this.getSequenceRecords$S(accId);
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
