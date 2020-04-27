(function(){var P$=Clazz.newPackage("jalview.viewmodel.seqfeatures"),I$=[[0,'java.util.HashSet','java.util.Collections']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeaturesDisplayed", null, null, 'jalview.api.FeaturesDisplayedI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.featuresDisplayed=Clazz.new_($I$(1,1));
this.featuresRegistered=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['featuresDisplayed','java.util.Set','+featuresRegistered']]]

Clazz.newMeth(C$, 'c$$jalview_api_FeaturesDisplayedI', function (featuresDisplayed2) {
;C$.$init$.apply(this);
var fdisp=featuresDisplayed2.getVisibleFeatures$();
for (var ftype, $ftype = fdisp.iterator$(); $ftype.hasNext$()&&((ftype=($ftype.next$())),1);) {
this.featuresDisplayed.add$O(ftype);
this.featuresRegistered.add$O(ftype);
}
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getVisibleFeatures$', function () {
return $I$(2).unmodifiableSet$java_util_Set(this.featuresDisplayed);
});

Clazz.newMeth(C$, 'isVisible$S', function (featureType) {
return this.featuresDisplayed.contains$O(featureType);
});

Clazz.newMeth(C$, 'areVisible$java_util_Collection', function (featureTypes) {
return this.featuresDisplayed.containsAll$java_util_Collection(featureTypes);
});

Clazz.newMeth(C$, 'clear$', function () {
this.featuresDisplayed.clear$();
this.featuresRegistered.clear$();
});

Clazz.newMeth(C$, 'setAllVisible$java_util_Collection', function (makeVisible) {
this.featuresDisplayed.addAll$java_util_Collection(makeVisible);
this.featuresRegistered.addAll$java_util_Collection(makeVisible);
});

Clazz.newMeth(C$, 'setAllRegisteredVisible$', function () {
this.featuresDisplayed.addAll$java_util_Collection(this.featuresRegistered);
});

Clazz.newMeth(C$, 'setVisible$S', function (featureType) {
this.featuresDisplayed.add$O(featureType);
this.featuresRegistered.add$O(featureType);
});

Clazz.newMeth(C$, 'isRegistered$S', function (type) {
return this.featuresRegistered.contains$O(type);
});

Clazz.newMeth(C$, 'getVisibleFeatureCount$', function () {
return this.featuresDisplayed.size$();
});

Clazz.newMeth(C$, 'getRegisteredFeaturesCount$', function () {
return this.featuresRegistered.size$();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
