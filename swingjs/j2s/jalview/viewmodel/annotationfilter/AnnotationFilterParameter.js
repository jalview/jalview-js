(function(){var P$=Clazz.newPackage("jalview.viewmodel.annotationfilter"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnnotationFilterParameter", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ThresholdType',25],['SearchableAnnotationField',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.filterAlphaHelix=false;
this.filterBetaSheet=false;
this.filterTurn=false;
this.regexSearchFields=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['filterAlphaHelix','filterBetaSheet','filterTurn'],'F',['thresholdValue'],'S',['regexString'],'O',['thresholdType','jalview.viewmodel.annotationfilter.AnnotationFilterParameter.ThresholdType','regexSearchFields','java.util.List']]]

Clazz.newMeth(C$, 'getThresholdType$', function () {
return this.thresholdType;
});

Clazz.newMeth(C$, 'setThresholdType$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_ThresholdType', function (thresholdType) {
this.thresholdType=thresholdType;
});

Clazz.newMeth(C$, 'getThresholdValue$', function () {
return this.thresholdValue;
});

Clazz.newMeth(C$, 'setThresholdValue$F', function (thresholdValue) {
this.thresholdValue=thresholdValue;
});

Clazz.newMeth(C$, 'getRegexString$', function () {
return this.regexString;
});

Clazz.newMeth(C$, 'setRegexString$S', function (regexString) {
this.regexString=regexString;
});

Clazz.newMeth(C$, 'getRegexSearchFields$', function () {
return this.regexSearchFields;
});

Clazz.newMeth(C$, 'addRegexSearchField$jalview_viewmodel_annotationfilter_AnnotationFilterParameter_SearchableAnnotationField', function (regexSearchField) {
this.regexSearchFields.add$O(regexSearchField);
});

Clazz.newMeth(C$, 'isFilterAlphaHelix$', function () {
return this.filterAlphaHelix;
});

Clazz.newMeth(C$, 'setFilterAlphaHelix$Z', function (alphaHelix) {
this.filterAlphaHelix=alphaHelix;
});

Clazz.newMeth(C$, 'isFilterBetaSheet$', function () {
return this.filterBetaSheet;
});

Clazz.newMeth(C$, 'setFilterBetaSheet$Z', function (betaSheet) {
this.filterBetaSheet=betaSheet;
});

Clazz.newMeth(C$, 'isFilterTurn$', function () {
return this.filterTurn;
});

Clazz.newMeth(C$, 'setFilterTurn$Z', function (turn) {
this.filterTurn=turn;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.AnnotationFilterParameter, "ThresholdType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NO_THRESHOLD", 0, []);
Clazz.newEnumConst($vals, C$.c$, "BELOW_THRESHOLD", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ABOVE_THRESHOLD", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.AnnotationFilterParameter, "SearchableAnnotationField", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "DISPLAY_STRING", 0, []);
Clazz.newEnumConst($vals, C$.c$, "DESCRIPTION", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:02 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
