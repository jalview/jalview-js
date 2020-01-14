(function(){var P$=Clazz.newPackage("jalview.datamodel.features"),I$=[[0,'java.util.TreeMap','jalview.datamodel.features.FeatureStore','java.util.ArrayList','java.util.Arrays','java.util.HashSet','jalview.io.gff.SequenceOntologyFactory','intervalstore.api.IntervalI']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceFeatures", null, null, 'jalview.datamodel.features.SequenceFeaturesI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.featureStore=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.featureStore=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (features) {
C$.c$.apply(this, []);
if (features != null ) {
for (var feature, $feature = features.iterator$(); $feature.hasNext$()&&((feature=($feature.next$())),1);) {
this.add$jalview_datamodel_SequenceFeature(feature);
}
}}, 1);

Clazz.newMeth(C$, 'add$jalview_datamodel_SequenceFeature', function (sf) {
var type=sf.getType$();
if (type == null ) {
System.err.println$S("Feature type may not be null: " + sf.toString());
return false;
}if (this.featureStore.get$O(type) == null ) {
this.featureStore.put$TK$TV(type, Clazz.new_($I$(2)));
}return this.featureStore.get$O(type).addFeature$jalview_datamodel_SequenceFeature(sf);
});

Clazz.newMeth(C$, 'findFeatures$I$I$SA', function (from, to, type) {
var result=Clazz.new_($I$(3));
for (var featureSet, $featureSet = this.varargToTypes$SA(type).iterator$(); $featureSet.hasNext$()&&((featureSet=($featureSet.next$())),1);) {
result.addAll$java_util_Collection(featureSet.findOverlappingFeatures$J$J(from, to));
}
return result;
});

Clazz.newMeth(C$, 'getAllFeatures$SA', function (type) {
var result=Clazz.new_($I$(3));
result.addAll$java_util_Collection(this.getPositionalFeatures$SA(type));
result.addAll$java_util_Collection(this.getNonPositionalFeatures$SA([]));
return result;
});

Clazz.newMeth(C$, 'getFeaturesByOntology$SA', function (ontologyTerm) {
if (ontologyTerm == null  || ontologyTerm.length == 0 ) {
return Clazz.new_($I$(3));
}var featureTypes=this.getFeatureTypes$SA(ontologyTerm);
if (featureTypes.isEmpty$()) {
return Clazz.new_($I$(3));
}return this.getAllFeatures$SA(featureTypes.toArray$TTA(Clazz.array(String, [featureTypes.size$()])));
});

Clazz.newMeth(C$, 'getFeatureCount$Z$SA', function (positional, type) {
var result=0;
for (var featureSet, $featureSet = this.varargToTypes$SA(type).iterator$(); $featureSet.hasNext$()&&((featureSet=($featureSet.next$())),1);) {
result+=featureSet.getFeatureCount$Z(positional);
}
return result;
});

Clazz.newMeth(C$, 'getTotalFeatureLength$SA', function (type) {
var result=0;
for (var featureSet, $featureSet = this.varargToTypes$SA(type).iterator$(); $featureSet.hasNext$()&&((featureSet=($featureSet.next$())),1);) {
result+=featureSet.getTotalFeatureLength$();
}
return result;
});

Clazz.newMeth(C$, 'getPositionalFeatures$SA', function (type) {
var result=Clazz.new_($I$(3));
for (var featureSet, $featureSet = this.varargToTypes$SA(type).iterator$(); $featureSet.hasNext$()&&((featureSet=($featureSet.next$())),1);) {
result.addAll$java_util_Collection(featureSet.getPositionalFeatures$());
}
return result;
});

Clazz.newMeth(C$, 'varargToTypes$SA', function (type) {
if (type == null  || type.length == 0 ) {
return this.featureStore.values$();
}var types=Clazz.new_($I$(3));
var args=$I$(4).asList$TTA(type);
for (var featureType, $featureType = this.featureStore.entrySet$().iterator$(); $featureType.hasNext$()&&((featureType=($featureType.next$())),1);) {
if (args.contains$O(featureType.getKey$())) {
types.add$TE(featureType.getValue$());
}}
return types;
});

Clazz.newMeth(C$, 'getContactFeatures$SA', function (type) {
var result=Clazz.new_($I$(3));
for (var featureSet, $featureSet = this.varargToTypes$SA(type).iterator$(); $featureSet.hasNext$()&&((featureSet=($featureSet.next$())),1);) {
result.addAll$java_util_Collection(featureSet.getContactFeatures$());
}
return result;
});

Clazz.newMeth(C$, 'getNonPositionalFeatures$SA', function (type) {
var result=Clazz.new_($I$(3));
for (var featureSet, $featureSet = this.varargToTypes$SA(type).iterator$(); $featureSet.hasNext$()&&((featureSet=($featureSet.next$())),1);) {
result.addAll$java_util_Collection(featureSet.getNonPositionalFeatures$());
}
return result;
});

Clazz.newMeth(C$, 'delete$jalview_datamodel_SequenceFeature', function (sf) {
for (var featureSet, $featureSet = this.featureStore.values$().iterator$(); $featureSet.hasNext$()&&((featureSet=($featureSet.next$())),1);) {
if (featureSet.delete$jalview_datamodel_SequenceFeature(sf)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'hasFeatures$', function () {
for (var featureSet, $featureSet = this.featureStore.values$().iterator$(); $featureSet.hasNext$()&&((featureSet=($featureSet.next$())),1);) {
if (!featureSet.isEmpty$()) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getFeatureGroups$Z$SA', function (positionalFeatures, type) {
var groups=Clazz.new_($I$(5));
for (var featureSet, $featureSet = this.varargToTypes$SA(type).iterator$(); $featureSet.hasNext$()&&((featureSet=($featureSet.next$())),1);) {
groups.addAll$java_util_Collection(featureSet.getFeatureGroups$Z(positionalFeatures));
}
return groups;
});

Clazz.newMeth(C$, 'getFeatureTypesForGroups$Z$SA', function (positionalFeatures, groups) {
var result=Clazz.new_($I$(5));
for (var featureType, $featureType = this.featureStore.entrySet$().iterator$(); $featureType.hasNext$()&&((featureType=($featureType.next$())),1);) {
var featureGroups=featureType.getValue$().getFeatureGroups$Z(positionalFeatures);
for (var group, $group = 0, $$group = groups; $group<$$group.length&&((group=($$group[$group])),1);$group++) {
if (featureGroups.contains$O(group)) {
result.add$TE(featureType.getKey$());
break;
}}
}
return result;
});

Clazz.newMeth(C$, 'getFeatureTypes$SA', function (soTerm) {
var types=Clazz.new_($I$(5));
for (var entry, $entry = this.featureStore.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var type=entry.getKey$();
if (!entry.getValue$().isEmpty$() && this.isOntologyTerm$S$SA(type, soTerm) ) {
types.add$TE(type);
}}
return types;
});

Clazz.newMeth(C$, 'isOntologyTerm$S$SA', function (type, soTerm) {
if (soTerm == null  || soTerm.length == 0 ) {
return true;
}var so=$I$(6).getInstance$();
for (var term, $term = 0, $$term = soTerm; $term<$$term.length&&((term=($$term[$term])),1);$term++) {
if (type.equals$O(term) || so.isA$S$S(type, term) ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'getMinimumScore$S$Z', function (type, positional) {
return this.featureStore.containsKey$O(type) ? this.featureStore.get$O(type).getMinimumScore$Z(positional) : NaN;
});

Clazz.newMeth(C$, 'getMaximumScore$S$Z', function (type, positional) {
return this.featureStore.containsKey$O(type) ? this.featureStore.get$O(type).getMaximumScore$Z(positional) : NaN;
});

Clazz.newMeth(C$, 'sortFeatures$java_util_List$Z', function (features, forwardStrand) {
$I$(7).sortIntervals$java_util_List$Z(features, forwardStrand);
}, 1);

Clazz.newMeth(C$, 'getFeaturesForGroup$Z$S$SA', function (positional, group, type) {
var result=Clazz.new_($I$(3));
for (var featureSet, $featureSet = this.varargToTypes$SA(type).iterator$(); $featureSet.hasNext$()&&((featureSet=($featureSet.next$())),1);) {
if (featureSet.getFeatureGroups$Z(positional).contains$O(group)) {
result.addAll$java_util_Collection(featureSet.getFeaturesForGroup$Z$S(positional, group));
}}
return result;
});

Clazz.newMeth(C$, 'shiftFeatures$I$I', function (fromPosition, shiftBy) {
var modified=false;
for (var fs, $fs = this.featureStore.values$().iterator$(); $fs.hasNext$()&&((fs=($fs.next$())),1);) {
modified|=fs.shiftFeatures$I$I(fromPosition, shiftBy);
}
return modified;
});

Clazz.newMeth(C$, 'deleteAll$', function () {
this.featureStore.clear$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
