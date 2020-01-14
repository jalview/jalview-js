(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureMatcherSet", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.matchCondition=null;
this.compoundMatcher=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMatchCondition$', function () {
return this.matchCondition;
});

Clazz.newMeth(C$, 'setMatchCondition$jalview_xml_binding_jalview_FeatureMatcher', function (value) {
this.matchCondition=value;
});

Clazz.newMeth(C$, 'getCompoundMatcher$', function () {
return this.compoundMatcher;
});

Clazz.newMeth(C$, 'setCompoundMatcher$jalview_xml_binding_jalview_FeatureMatcherSet_CompoundMatcher', function (value) {
this.compoundMatcher=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.FeatureMatcherSet'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="FeatureMatcherSet" namespace="www.jalview.org/colours" propOrder={"matchCondition"  "compoundMatcher"  } )']],
  [['matchCondition','jalview.xml.binding.jalview.FeatureMatcher'],['@XmlElement(namespace="" )']],
  [['compoundMatcher','jalview.xml.binding.jalview.FeatureMatcherSet.CompoundMatcher'],['@XmlElement(namespace="" )']],
  [['null','jalview.xml.binding.jalview.FeatureMatcherSet.CompoundMatcher'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.FeatureMatcherSet, "CompoundMatcher", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.matcherSet=null;
this.and=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMatcherSet$', function () {
if (this.matcherSet == null ) {
this.matcherSet=Clazz.new_($I$(1));
}return this.matcherSet;
});

Clazz.newMeth(C$, 'isAnd$', function () {
return this.and;
});

Clazz.newMeth(C$, 'setAnd$Z', function (value) {
this.and=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.FeatureMatcherSet.CompoundMatcher'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"matcherSet"  } )']],
  [['matcherSet','java.util.List<jalview.xml.binding.jalview.FeatureMatcherSet>'],['@XmlElement(namespace="" required="true" )']],
  [['and','boolean'],['@XmlAttribute(name="and" required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
