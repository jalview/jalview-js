(function(){var P$=Clazz.newPackage("jalview.datamodel.features"),I$=[[0,'jalview.util.MessageManager','jalview.datamodel.features.FeatureMatcher','java.util.ArrayList','StringBuilder']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureMatcherSet", null, null, 'jalview.datamodel.features.FeatureMatcherSetI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['andConditions'],'O',['matchConditions','java.util.List']]
,['S',['OR_I18N','AND_18N']]]

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
;C$.$init$.apply(this);
this.matchConditions=Clazz.new_($I$(3,1));
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
}this.matchConditions.add$O(m);
this.andConditions=true;
});

Clazz.newMeth(C$, 'or$jalview_datamodel_features_FeatureMatcherI', function (m) {
if (this.andConditions && this.matchConditions.size$() > 1 ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Can\'t add an OR to AND conditions"]);
}this.matchConditions.add$O(m);
this.andConditions=false;
});

Clazz.newMeth(C$, 'isAnded$', function () {
return this.andConditions;
});

Clazz.newMeth(C$, 'getMatchers$', function () {
return this.matchConditions;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(4,1));
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
var sb=Clazz.new_($I$(4,1));
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

C$.$static$=function(){C$.$static$=0;
C$.OR_I18N=$I$(1).getString$S("label.or");
C$.AND_18N=$I$(1).getString$S("label.and");
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
