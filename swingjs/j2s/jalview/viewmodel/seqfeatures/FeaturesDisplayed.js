(function(){var P$=Clazz.newPackage("jalview.viewmodel.seqfeatures"),I$=[[0,'java.util.HashSet','java.util.Collections']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeaturesDisplayed", null, null, 'jalview.api.FeaturesDisplayedI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.featuresDisplayed=null;
this.featuresRegistered=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.featuresDisplayed=Clazz.new_($I$(1));
this.featuresRegistered=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$jalview_api_FeaturesDisplayedI', function (featuresDisplayed2) {
C$.$init$.apply(this);
var fdisp=featuresDisplayed2.getVisibleFeatures$();
for (var ftype, $ftype = fdisp.iterator$(); $ftype.hasNext$()&&((ftype=($ftype.next$())),1);) {
this.featuresDisplayed.add$TE(ftype);
this.featuresRegistered.add$TE(ftype);
}
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
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
this.featuresDisplayed.add$TE(featureType);
this.featuresRegistered.add$TE(featureType);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
