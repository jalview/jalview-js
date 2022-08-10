(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureMatcherSet", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CompoundMatcher',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['matchCondition','jalview.xml.binding.jalview.FeatureMatcher','compoundMatcher','jalview.xml.binding.jalview.FeatureMatcherSet.CompoundMatcher']]]

Clazz.newMeth(C$, 'getMatchCondition$',  function () {
return this.matchCondition;
});

Clazz.newMeth(C$, 'setMatchCondition$jalview_xml_binding_jalview_FeatureMatcher',  function (value) {
this.matchCondition=value;
});

Clazz.newMeth(C$, 'getCompoundMatcher$',  function () {
return this.compoundMatcher;
});

Clazz.newMeth(C$, 'setCompoundMatcher$jalview_xml_binding_jalview_FeatureMatcherSet_CompoundMatcher',  function (value) {
this.compoundMatcher=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.FeatureMatcherSet',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="FeatureMatcherSet" namespace="www.jalview.org/colours" propOrder={"matchCondition"  "compoundMatcher"  } ']],
  [['matchCondition','jalview.xml.binding.jalview.FeatureMatcher',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" ']],
  [['compoundMatcher','jalview.xml.binding.jalview.FeatureMatcherSet.CompoundMatcher',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" ']],
  [['null','jalview.xml.binding.jalview.FeatureMatcherSet.CompoundMatcher'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.FeatureMatcherSet, "CompoundMatcher", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['and'],'O',['matcherSet','java.util.List']]]

Clazz.newMeth(C$, 'getMatcherSet$',  function () {
if (this.matcherSet == null ) {
this.matcherSet=Clazz.new_($I$(1,1));
}return this.matcherSet;
});

Clazz.newMeth(C$, 'isAnd$',  function () {
return this.and;
});

Clazz.newMeth(C$, 'setAnd$Z',  function (value) {
this.and=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.FeatureMatcherSet.CompoundMatcher',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"matcherSet"  } ']],
  [['matcherSet','java.util.List<jalview.xml.binding.jalview.FeatureMatcherSet>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" required="true" ']],
  [['and','boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="and" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
