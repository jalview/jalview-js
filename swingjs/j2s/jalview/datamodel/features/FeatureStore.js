(function(){var P$=Clazz.newPackage("jalview.datamodel.features"),I$=[[0,'intervalstore.impl.IntervalStore','java.util.HashSet','java.util.ArrayList','intervalstore.impl.BinarySearcher',['intervalstore.impl.BinarySearcher','.Compare'],'java.util.Collections','jalview.datamodel.SequenceFeature']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureStore");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['positionalMinScore','positionalMaxScore','nonPositionalMinScore','nonPositionalMaxScore'],'I',['totalExtent'],'O',['nonPositionalFeatures','java.util.List','+contactFeatureStarts','+contactFeatureEnds','features','intervalstore.api.IntervalStoreI','positionalFeatureGroups','java.util.Set','+nonPositionalFeatureGroups']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.features=Clazz.new_($I$(1,1));
this.positionalFeatureGroups=Clazz.new_($I$(2,1));
this.nonPositionalFeatureGroups=Clazz.new_($I$(2,1));
this.positionalMinScore=NaN;
this.positionalMaxScore=NaN;
this.nonPositionalMinScore=NaN;
this.nonPositionalMaxScore=NaN;
}, 1);

Clazz.newMeth(C$, 'addFeature$jalview_datamodel_SequenceFeature',  function (feature) {
if (this.contains$jalview_datamodel_SequenceFeature(feature)) {
return false;
}if (!feature.isNonPositional$()) {
this.positionalFeatureGroups.add$O(feature.getFeatureGroup$());
}if (feature.isContactFeature$()) {
this.addContactFeature$jalview_datamodel_SequenceFeature(feature);
} else if (feature.isNonPositional$()) {
this.addNonPositionalFeature$jalview_datamodel_SequenceFeature(feature);
} else {
this.addNestedFeature$jalview_datamodel_SequenceFeature(feature);
}this.totalExtent+=C$.getFeatureLength$jalview_datamodel_SequenceFeature(feature);
var score=feature.getScore$();
if (!Float.isNaN$F(score)) {
if (feature.isNonPositional$()) {
this.nonPositionalMinScore=C$.min$F$F(this.nonPositionalMinScore, score);
this.nonPositionalMaxScore=C$.max$F$F(this.nonPositionalMaxScore, score);
} else {
this.positionalMinScore=C$.min$F$F(this.positionalMinScore, score);
this.positionalMaxScore=C$.max$F$F(this.positionalMaxScore, score);
}}return true;
});

Clazz.newMeth(C$, 'contains$jalview_datamodel_SequenceFeature',  function (feature) {
if (feature.isNonPositional$()) {
return this.nonPositionalFeatures == null  ? false : this.nonPositionalFeatures.contains$O(feature);
}if (feature.isContactFeature$()) {
return this.contactFeatureStarts == null  ? false : C$.listContains$java_util_List$jalview_datamodel_SequenceFeature(this.contactFeatureStarts, feature);
}return this.features == null  ? false : this.features.contains$O(feature);
});

Clazz.newMeth(C$, 'getFeatureLength$jalview_datamodel_SequenceFeature',  function (feature) {
if (feature.isNonPositional$()) {
return 0;
}if (feature.isContactFeature$()) {
return 1;
}return 1 + feature.getEnd$() - feature.getBegin$();
}, 1);

Clazz.newMeth(C$, 'addNonPositionalFeature$jalview_datamodel_SequenceFeature',  function (feature) {
if (this.nonPositionalFeatures == null ) {
this.nonPositionalFeatures=Clazz.new_($I$(3,1));
}this.nonPositionalFeatures.add$O(feature);
this.nonPositionalFeatureGroups.add$O(feature.getFeatureGroup$());
return true;
});

Clazz.newMeth(C$, 'addNestedFeature$jalview_datamodel_SequenceFeature',  function (feature) {
if (this.features == null ) {
this.features=Clazz.new_($I$(1,1));
}this.features.add$O(feature);
});

Clazz.newMeth(C$, 'addContactFeature$jalview_datamodel_SequenceFeature',  function (feature) {
if (this.contactFeatureStarts == null ) {
this.contactFeatureStarts=Clazz.new_($I$(3,1));
}if (this.contactFeatureEnds == null ) {
this.contactFeatureEnds=Clazz.new_($I$(3,1));
}var insertPosition=$I$(4,"findFirst$java_util_List$Z$intervalstore_impl_BinarySearcher_Compare$I",[this.contactFeatureStarts, true, $I$(5).GE, feature.getBegin$()]);
this.contactFeatureStarts.add$I$O(insertPosition, feature);
insertPosition=$I$(4,"findFirst$java_util_List$Z$intervalstore_impl_BinarySearcher_Compare$I",[this.contactFeatureEnds, false, $I$(5).GE, feature.getEnd$()]);
this.contactFeatureEnds.add$I$O(insertPosition, feature);
return true;
});

Clazz.newMeth(C$, 'listContains$java_util_List$jalview_datamodel_SequenceFeature',  function (features, feature) {
if (features == null  || feature == null  ) {
return false;
}var pos=$I$(4,"findFirst$java_util_List$Z$intervalstore_impl_BinarySearcher_Compare$I",[features, true, $I$(5).GE, feature.getBegin$()]);
var len=features.size$();
while (pos < len){
var sf=features.get$I(pos);
if (sf.getBegin$() > feature.getBegin$()) {
return false;
}if (sf.equals$O(feature)) {
return true;
}++pos;
}
return false;
}, 1);

Clazz.newMeth(C$, 'findOverlappingFeatures$J$J',  function (start, end) {
var result=Clazz.new_($I$(3,1));
this.findContactFeatures$J$J$java_util_List(start, end, result);
if (this.features != null ) {
result.addAll$java_util_Collection(this.features.findOverlaps$J$J(start, end));
}return result;
});

Clazz.newMeth(C$, 'findContactFeatures$J$J$java_util_List',  function (from, to, result) {
if (this.contactFeatureStarts != null ) {
this.findContactStartOverlaps$J$J$java_util_List(from, to, result);
}if (this.contactFeatureEnds != null ) {
this.findContactEndOverlaps$J$J$java_util_List(from, to, result);
}});

Clazz.newMeth(C$, 'findContactEndOverlaps$J$J$java_util_List',  function (from, to, result) {
var index=$I$(4,"findFirst$java_util_List$Z$intervalstore_impl_BinarySearcher_Compare$I",[this.contactFeatureEnds, false, $I$(5).GE, Long.$ival(from)]);
while (index < this.contactFeatureEnds.size$()){
var sf=this.contactFeatureEnds.get$I(index);
if (!sf.isContactFeature$()) {
System.err.println$S("Error! non-contact feature type " + sf.getType$() + " in contact features list" );
++index;
continue;
}var begin=sf.getBegin$();
if (Long.$ge(begin,from ) && Long.$le(begin,to ) ) {
++index;
continue;
}if (Long.$gt(sf.getEnd$(),to )) {
break;
}result.add$O(sf);
++index;
}
});

Clazz.newMeth(C$, 'findContactStartOverlaps$J$J$java_util_List',  function (from, to, result) {
var index=$I$(4,"findFirst$java_util_List$Z$intervalstore_impl_BinarySearcher_Compare$I",[this.contactFeatureStarts, true, $I$(5).GE, Long.$ival(from)]);
while (index < this.contactFeatureStarts.size$()){
var sf=this.contactFeatureStarts.get$I(index);
if (!sf.isContactFeature$()) {
System.err.println$S("Error! non-contact feature " + sf.toString() + " in contact features list" );
++index;
continue;
}if (Long.$gt(sf.getBegin$(),to )) {
break;
}result.add$O(sf);
++index;
}
});

Clazz.newMeth(C$, 'getPositionalFeatures$',  function () {
var result=Clazz.new_($I$(3,1));
if (this.contactFeatureStarts != null ) {
result.addAll$java_util_Collection(this.contactFeatureStarts);
}if (this.features != null ) {
result.addAll$java_util_Collection(this.features);
}return result;
});

Clazz.newMeth(C$, 'getContactFeatures$',  function () {
if (this.contactFeatureStarts == null ) {
return $I$(6).emptyList$();
}return Clazz.new_($I$(3,1).c$$java_util_Collection,[this.contactFeatureStarts]);
});

Clazz.newMeth(C$, 'getNonPositionalFeatures$',  function () {
if (this.nonPositionalFeatures == null ) {
return $I$(6).emptyList$();
}return Clazz.new_($I$(3,1).c$$java_util_Collection,[this.nonPositionalFeatures]);
});

Clazz.newMeth(C$, 'delete$jalview_datamodel_SequenceFeature',  function (sf) {
var removed=false;
if (!removed && this.contactFeatureStarts != null  ) {
removed=this.contactFeatureStarts.remove$O(sf);
if (removed) {
this.contactFeatureEnds.remove$O(sf);
}}var removedNonPositional=false;
if (!removed && this.nonPositionalFeatures != null  ) {
removedNonPositional=this.nonPositionalFeatures.remove$O(sf);
removed=removedNonPositional;
}if (!removed && this.features != null  ) {
removed=this.features.remove$O(sf);
}if (removed) {
this.rescanAfterDelete$();
}return removed;
});

Clazz.newMeth(C$, 'rescanAfterDelete$',  function () {
this.positionalFeatureGroups.clear$();
this.nonPositionalFeatureGroups.clear$();
this.totalExtent=0;
this.positionalMinScore=NaN;
this.positionalMaxScore=NaN;
this.nonPositionalMinScore=NaN;
this.nonPositionalMaxScore=NaN;
for (var sf, $sf = this.getNonPositionalFeatures$().iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
this.nonPositionalFeatureGroups.add$O(sf.getFeatureGroup$());
var score=sf.getScore$();
this.nonPositionalMinScore=C$.min$F$F(this.nonPositionalMinScore, score);
this.nonPositionalMaxScore=C$.max$F$F(this.nonPositionalMaxScore, score);
}
for (var sf, $sf = this.getPositionalFeatures$().iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
this.positionalFeatureGroups.add$O(sf.getFeatureGroup$());
var score=sf.getScore$();
this.positionalMinScore=C$.min$F$F(this.positionalMinScore, score);
this.positionalMaxScore=C$.max$F$F(this.positionalMaxScore, score);
this.totalExtent+=C$.getFeatureLength$jalview_datamodel_SequenceFeature(sf);
}
});

Clazz.newMeth(C$, 'min$F$F',  function (f1, f2) {
if (Float.isNaN$F(f1)) {
return Float.isNaN$F(f2) ? f1 : f2;
} else {
return Float.isNaN$F(f2) ? f1 : Math.min(f1, f2);
}}, 1);

Clazz.newMeth(C$, 'max$F$F',  function (f1, f2) {
if (Float.isNaN$F(f1)) {
return Float.isNaN$F(f2) ? f1 : f2;
} else {
return Float.isNaN$F(f2) ? f1 : Math.max(f1, f2);
}}, 1);

Clazz.newMeth(C$, 'isEmpty$',  function () {
var hasFeatures=(this.contactFeatureStarts != null  && !this.contactFeatureStarts.isEmpty$() ) || (this.nonPositionalFeatures != null  && !this.nonPositionalFeatures.isEmpty$() ) || (this.features != null  && this.features.size$() > 0 )  ;
return !hasFeatures;
});

Clazz.newMeth(C$, 'getFeatureGroups$Z',  function (positionalFeatures) {
if (positionalFeatures) {
return $I$(6).unmodifiableSet$java_util_Set(this.positionalFeatureGroups);
} else {
return this.nonPositionalFeatureGroups == null  ? $I$(6).emptySet$() : $I$(6).unmodifiableSet$java_util_Set(this.nonPositionalFeatureGroups);
}});

Clazz.newMeth(C$, 'getFeatureCount$Z',  function (positional) {
if (!positional) {
return this.nonPositionalFeatures == null  ? 0 : this.nonPositionalFeatures.size$();
}var size=0;
if (this.contactFeatureStarts != null ) {
size+=this.contactFeatureStarts.size$();
}if (this.features != null ) {
size+=this.features.size$();
}return size;
});

Clazz.newMeth(C$, 'getTotalFeatureLength$',  function () {
return this.totalExtent;
});

Clazz.newMeth(C$, 'getMinimumScore$Z',  function (positional) {
return positional ? this.positionalMinScore : this.nonPositionalMinScore;
});

Clazz.newMeth(C$, 'getMaximumScore$Z',  function (positional) {
return positional ? this.positionalMaxScore : this.nonPositionalMaxScore;
});

Clazz.newMeth(C$, 'getFeaturesForGroup$Z$S',  function (positional, group) {
var result=Clazz.new_($I$(3,1));
if (positional && !this.positionalFeatureGroups.contains$O(group)  || !positional && !this.nonPositionalFeatureGroups.contains$O(group)  ) {
return result;
}var sfs=positional ? this.getPositionalFeatures$() : this.getNonPositionalFeatures$();
for (var sf, $sf = sfs.iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
var featureGroup=sf.getFeatureGroup$();
if (group == null  && featureGroup == null   || group != null  && group.equals$O(featureGroup)  ) {
result.add$O(sf);
}}
return result;
});

Clazz.newMeth(C$, 'shiftFeatures$I$I',  function (fromPosition, shiftBy) {
var modified=false;
for (var sf, $sf = this.getPositionalFeatures$().iterator$(); $sf.hasNext$()&&((sf=($sf.next$())),1);) {
if (sf.getBegin$() >= fromPosition) {
modified=true;
var newBegin=sf.getBegin$() + shiftBy;
var newEnd=sf.getEnd$() + shiftBy;
if (newEnd > 0) {
newBegin=Math.max(1, newBegin);
var sf2=Clazz.new_([sf, newBegin, newEnd, sf.getFeatureGroup$(), sf.getScore$()],$I$(7,1).c$$jalview_datamodel_SequenceFeature$I$I$S$F);
this.addFeature$jalview_datamodel_SequenceFeature(sf2);
}this.delete$jalview_datamodel_SequenceFeature(sf);
}}
return modified;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:30 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
