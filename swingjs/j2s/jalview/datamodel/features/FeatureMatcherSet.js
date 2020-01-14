(function(){var P$=Clazz.newPackage("jalview.datamodel.features"),I$=[[0,'jalview.util.MessageManager','jalview.datamodel.features.FeatureMatcher','java.util.ArrayList','StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureMatcherSet", null, null, 'jalview.datamodel.features.FeatureMatcherSetI');
C$.OR_I18N=null;
C$.AND_18N=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.OR_I18N=$I$(1).getString$S("label.or");
C$.AND_18N=$I$(1).getString$S("label.and");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.matchConditions=null;
this.andConditions=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'fromString$S', function (descriptor) {
var invalid="Invalid descriptor: " + descriptor;
var firstCondition=true;
var result=Clazz.new_(C$);
var leftToParse=descriptor.trim$();
while (leftToParse.length$() > 0){
var and=true;
if (!firstCondition) {
var spacePos=leftToParse.indexOf$S(" ");
if (spacePos == -1) {
System.err.println$S(invalid);
return null;
}var conjunction=leftToParse.substring$I$I(0, spacePos);
leftToParse=leftToParse.substring$I(spacePos + 1).trim$();
if (conjunction.equalsIgnoreCase$S("AND")) {
and=true;
} else if (conjunction.equalsIgnoreCase$S("OR")) {
and=false;
} else {
System.err.println$S(invalid);
return null;
}}var nextCondition=leftToParse;
if (leftToParse.startsWith$S("(")) {
var closePos=leftToParse.indexOf$S(")");
if (closePos == -1) {
System.err.println$S(invalid);
return null;
}nextCondition=leftToParse.substring$I$I(1, closePos);
leftToParse=leftToParse.substring$I(closePos + 1).trim$();
} else {
leftToParse="";
}var fm=$I$(2).fromString$S(nextCondition);
if (fm == null ) {
System.err.println$S(invalid);
return null;
}try {
if (and) {
result.and$jalview_datamodel_features_FeatureMatcherI(fm);
} else {
result.or$jalview_datamodel_features_FeatureMatcherI(fm);
}firstCondition=false;
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalStateException")){
System.err.println$S(invalid);
return null;
} else {
throw e;
}
}
}
return result;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.matchConditions=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'matches$jalview_datamodel_SequenceFeature', function (feature) {
if (this.matchConditions.isEmpty$()) {
return true;
}if (this.andConditions) {
for (var m, $m = this.matchConditions.iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
if (!m.matches$jalview_datamodel_SequenceFeature(feature)) {
return false;
}}
return true;
}for (var m, $m = this.matchConditions.iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
if (m.matches$jalview_datamodel_SequenceFeature(feature)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'and$jalview_datamodel_features_FeatureMatcherI', function (m) {
if (!this.andConditions && this.matchConditions.size$() > 1 ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Can\'t add an AND to OR conditions"]);
}this.matchConditions.add$TE(m);
this.andConditions=true;
});

Clazz.newMeth(C$, 'or$jalview_datamodel_features_FeatureMatcherI', function (m) {
if (this.andConditions && this.matchConditions.size$() > 1 ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Can\'t add an OR to AND conditions"]);
}this.matchConditions.add$TE(m);
this.andConditions=false;
});

Clazz.newMeth(C$, 'isAnded$', function () {
return this.andConditions;
});

Clazz.newMeth(C$, 'getMatchers$', function () {
return this.matchConditions;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(4));
var first=true;
var multiple=this.matchConditions.size$() > 1;
for (var matcher, $matcher = this.matchConditions.iterator$(); $matcher.hasNext$()&&((matcher=($matcher.next$())),1);) {
if (!first) {
var joiner=this.andConditions ? C$.AND_18N : C$.OR_I18N;
sb.append$S(" ").append$S(joiner.toLowerCase$()).append$S(" ");
}first=false;
if (multiple) {
sb.append$S("(").append$S(matcher.toString()).append$S(")");
} else {
sb.append$S(matcher.toString());
}}
return sb.toString();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.matchConditions == null  || this.matchConditions.isEmpty$() ;
});

Clazz.newMeth(C$, 'toStableString$', function () {
var sb=Clazz.new_($I$(4));
var moreThanOne=this.matchConditions.size$() > 1;
var first=true;
for (var matcher, $matcher = this.matchConditions.iterator$(); $matcher.hasNext$()&&((matcher=($matcher.next$())),1);) {
if (!first) {
var joiner=this.andConditions ? "AND" : "OR";
sb.append$S(" ").append$S(joiner).append$S(" ");
}first=false;
if (moreThanOne) {
sb.append$S("(").append$S(matcher.toStableString$()).append$S(")");
} else {
sb.append$S(matcher.toStableString$());
}}
return sb.toString();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
