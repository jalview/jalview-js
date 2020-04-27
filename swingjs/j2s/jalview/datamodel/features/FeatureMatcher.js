(function(){var P$=Clazz.newPackage("jalview.datamodel.features"),I$=[[0,'jalview.util.matcher.Condition','jalview.util.matcher.Matcher','StringBuilder','jalview.util.MessageManager']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureMatcher", null, null, 'jalview.datamodel.features.FeatureMatcherI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['byLabel','byScore'],'O',['key','String[]','matcher','jalview.util.matcher.MatcherI']]
,['O',['NULL_MATCHER','jalview.datamodel.features.FeatureMatcherI']]]

Clazz.newMeth(C$, 'fromAttributeDisplayName$S', function (attribute) {
return attribute == null  ? null : attribute.split$S(":");
}, 1);

Clazz.newMeth(C$, 'toAttributeDisplayName$SA', function (attName) {
return attName == null  ? "" : String.join$CharSequence$CharSequenceA(":", attName);
}, 1);

Clazz.newMeth(C$, 'fromString$S', function (descriptor) {
var invalidFormat="Invalid matcher format: " + descriptor;
var attName=null;
var byScore=false;
var byLabel=false;
var cond=null;
var pattern=null;
var leftToParse=descriptor;
var firstField=null;
if (descriptor.startsWith$S("\'")) {
var nextQuotePos=descriptor.indexOf$S$I("\'", 1);
if (nextQuotePos == -1) {
System.err.println$S(invalidFormat);
return null;
}firstField=descriptor.substring$I$I(1, nextQuotePos);
leftToParse=descriptor.substring$I(nextQuotePos + 1).trim$();
} else {
var nextSpacePos=descriptor.indexOf$S(" ");
if (nextSpacePos == -1) {
System.err.println$S(invalidFormat);
return null;
}firstField=descriptor.substring$I$I(0, nextSpacePos);
leftToParse=descriptor.substring$I(nextSpacePos + 1).trim$();
}var lower=firstField.toLowerCase$();
if (lower.startsWith$S("Label".toLowerCase$())) {
byLabel=true;
} else if (lower.startsWith$S("Score".toLowerCase$())) {
byScore=true;
} else {
attName=firstField;
}var nextSpacePos=leftToParse.indexOf$S(" ");
if (nextSpacePos == -1) {
cond=$I$(1).fromString$S(leftToParse);
if (cond == null  || cond.needsAPattern$() ) {
System.err.println$S(invalidFormat);
return null;
}} else {
cond=$I$(1,"fromString$S",[leftToParse.substring$I$I(0, nextSpacePos)]);
leftToParse=leftToParse.substring$I(nextSpacePos + 1).trim$();
if (leftToParse.startsWith$S("\'")) {
if (leftToParse.endsWith$S("\'")) {
pattern=leftToParse.substring$I$I(1, leftToParse.length$() - 1);
} else {
System.err.println$S(invalidFormat);
return null;
}} else {
pattern=leftToParse;
}}try {
if (byLabel) {
return C$.byLabel$jalview_util_matcher_Condition$S(cond, pattern);
} else if (byScore) {
return C$.byScore$jalview_util_matcher_Condition$S(cond, pattern);
} else {
var attNames=C$.fromAttributeDisplayName$S(attName);
return C$.byAttribute$jalview_util_matcher_Condition$S$SA(cond, pattern, attNames);
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'byLabel$jalview_util_matcher_Condition$S', function (cond, pattern) {
return Clazz.new_(C$.c$$jalview_util_matcher_Matcher$Z$Z$SA,[Clazz.new_($I$(2,1).c$$jalview_util_matcher_Condition$S,[cond, pattern]), true, false, null]);
}, 1);

Clazz.newMeth(C$, 'byScore$jalview_util_matcher_Condition$S', function (cond, pattern) {
return Clazz.new_(C$.c$$jalview_util_matcher_Matcher$Z$Z$SA,[Clazz.new_($I$(2,1).c$$jalview_util_matcher_Condition$S,[cond, pattern]), false, true, null]);
}, 1);

Clazz.newMeth(C$, 'byAttribute$jalview_util_matcher_Condition$S$SA', function (cond, pattern, attName) {
return Clazz.new_(C$.c$$jalview_util_matcher_Matcher$Z$Z$SA,[Clazz.new_($I$(2,1).c$$jalview_util_matcher_Condition$S,[cond, pattern]), false, false, attName]);
}, 1);

Clazz.newMeth(C$, 'c$$jalview_util_matcher_Matcher$Z$Z$SA', function (m, forLabel, forScore, theKey) {
;C$.$init$.apply(this);
this.key=theKey;
this.matcher=m;
this.byLabel=forLabel;
this.byScore=forScore;
}, 1);

Clazz.newMeth(C$, 'matches$jalview_datamodel_SequenceFeature', function (feature) {
var value=this.byLabel ? feature.getDescription$() : (this.byScore ? String.valueOf$F(feature.getScore$()) : feature.getValueAsString$SA(this.key));
return this.matcher.matches$S(value);
});

Clazz.newMeth(C$, 'getAttribute$', function () {
return this.key;
});

Clazz.newMeth(C$, 'getMatcher$', function () {
return this.matcher;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(3,1));
if (this.byLabel) {
sb.append$S($I$(4).getString$S("label.label"));
} else if (this.byScore) {
sb.append$S($I$(4).getString$S("label.score"));
} else {
sb.append$S(String.join$CharSequence$CharSequenceA(":", this.key));
}var condition=this.matcher.getCondition$();
sb.append$S(" ").append$S(condition.toString().toLowerCase$());
if (condition.isNumeric$()) {
sb.append$S(" ").append$S(this.matcher.getPattern$());
} else if (condition.needsAPattern$()) {
sb.append$S(" \'").append$S(this.matcher.getPattern$()).append$S("\'");
}return sb.toString();
});

Clazz.newMeth(C$, 'isByLabel$', function () {
return this.byLabel;
});

Clazz.newMeth(C$, 'isByScore$', function () {
return this.byScore;
});

Clazz.newMeth(C$, 'isByAttribute$', function () {
return this.getAttribute$() != null ;
});

Clazz.newMeth(C$, 'toStableString$', function () {
var sb=Clazz.new_($I$(3,1));
if (this.byLabel) {
sb.append$S("Label");
} else if (this.byScore) {
sb.append$S("Score");
} else {
var displayName=C$.toAttributeDisplayName$SA(this.key);
if (displayName.contains$CharSequence(" ")) {
sb.append$S("\'").append$S(displayName).append$S("\'");
} else {
sb.append$S(displayName);
}}var condition=this.matcher.getCondition$();
sb.append$S(" ").append$S(condition.getStableName$());
var pattern=this.matcher.getPattern$();
if (condition.needsAPattern$()) {
if (pattern.contains$CharSequence(" ")) {
sb.append$S(" ").append$S("\'").append$S(pattern).append$S("\'");
} else {
sb.append$S(" ").append$S(pattern);
}}return sb.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.NULL_MATCHER=C$.byLabel$jalview_util_matcher_Condition$S($I$(1).values$()[0], "");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:48 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
