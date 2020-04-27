(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList','jalview.xml.binding.jalview.NoValueColour']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewUserColours", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Colour',9],['Filter',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['version','schemeName'],'O',['colour','java.util.List','+filter']]]

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$S', function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'getColour$', function () {
if (this.colour == null ) {
this.colour=Clazz.new_($I$(1,1));
}return this.colour;
});

Clazz.newMeth(C$, 'getFilter$', function () {
if (this.filter == null ) {
this.filter=Clazz.new_($I$(1,1));
}return this.filter;
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return this.schemeName;
});

Clazz.newMeth(C$, 'setSchemeName$S', function (value) {
this.schemeName=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewUserColours',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="JalviewUserColours" namespace="www.jalview.org/colours" propOrder={"version"  "colour"  "filter"  } ']],
  [['version','String',null,['javax.xml.bind.annotation.XmlElement']],['name="Version" namespace="" ']],
  [['colour','java.util.List<jalview.xml.binding.jalview.JalviewUserColours.Colour>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" ']],
  [['filter','java.util.List<jalview.xml.binding.jalview.JalviewUserColours.Filter>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" ']],
  [['schemeName','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="schemeName" ']],
  [['null','jalview.xml.binding.jalview.JalviewUserColours.Colour'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewUserColours.Filter'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewUserColours, "Colour", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','rgb','minRGB'],'O',['attributeName','java.util.List','noValueColour','jalview.xml.binding.jalview.NoValueColour','threshType','jalview.xml.binding.jalview.ThresholdType','threshold','Float','+max','+min','colourByLabel','Boolean','+autoScale']]]

Clazz.newMeth(C$, 'getAttributeName$', function () {
if (this.attributeName == null ) {
this.attributeName=Clazz.new_($I$(1,1));
}return this.attributeName;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getRGB$', function () {
return this.rgb;
});

Clazz.newMeth(C$, 'setRGB$S', function (value) {
this.rgb=value;
});

Clazz.newMeth(C$, 'getMinRGB$', function () {
return this.minRGB;
});

Clazz.newMeth(C$, 'setMinRGB$S', function (value) {
this.minRGB=value;
});

Clazz.newMeth(C$, 'getNoValueColour$', function () {
if (this.noValueColour == null ) {
return $I$(2).MIN;
} else {
return this.noValueColour;
}});

Clazz.newMeth(C$, 'setNoValueColour$jalview_xml_binding_jalview_NoValueColour', function (value) {
this.noValueColour=value;
});

Clazz.newMeth(C$, 'getThreshType$', function () {
return this.threshType;
});

Clazz.newMeth(C$, 'setThreshType$jalview_xml_binding_jalview_ThresholdType', function (value) {
this.threshType=value;
});

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$Float', function (value) {
this.threshold=value;
});

Clazz.newMeth(C$, 'getMax$', function () {
return this.max;
});

Clazz.newMeth(C$, 'setMax$Float', function (value) {
this.max=value;
});

Clazz.newMeth(C$, 'getMin$', function () {
return this.min;
});

Clazz.newMeth(C$, 'setMin$Float', function (value) {
this.min=value;
});

Clazz.newMeth(C$, 'isColourByLabel$', function () {
return this.colourByLabel;
});

Clazz.newMeth(C$, 'setColourByLabel$Boolean', function (value) {
this.colourByLabel=value;
});

Clazz.newMeth(C$, 'isAutoScale$', function () {
return this.autoScale;
});

Clazz.newMeth(C$, 'setAutoScale$Boolean', function (value) {
this.autoScale=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewUserColours.Colour',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"attributeName"  } ']],
  [['attributeName','java.util.List<java.lang.String>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" ']],
  [['name','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="Name" ']],
  [['rgb','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="RGB" required="true" ']],
  [['minRGB','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="minRGB" ']],
  [['noValueColour','jalview.xml.binding.jalview.NoValueColour',null,['javax.xml.bind.annotation.XmlAttribute']],['name="noValueColour" ']],
  [['threshType','jalview.xml.binding.jalview.ThresholdType',null,['javax.xml.bind.annotation.XmlAttribute']],['name="threshType" ']],
  [['threshold','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="threshold" ']],
  [['max','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="max" ']],
  [['min','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="min" ']],
  [['colourByLabel','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colourByLabel" ']],
  [['autoScale','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="autoScale" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewUserColours, "Filter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['featureType'],'O',['matcherSet','jalview.xml.binding.jalview.FeatureMatcherSet']]]

Clazz.newMeth(C$, 'getMatcherSet$', function () {
return this.matcherSet;
});

Clazz.newMeth(C$, 'setMatcherSet$jalview_xml_binding_jalview_FeatureMatcherSet', function (value) {
this.matcherSet=value;
});

Clazz.newMeth(C$, 'getFeatureType$', function () {
return this.featureType;
});

Clazz.newMeth(C$, 'setFeatureType$S', function (value) {
this.featureType=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewUserColours.Filter',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"matcherSet"  } ']],
  [['matcherSet','jalview.xml.binding.jalview.FeatureMatcherSet',null,['javax.xml.bind.annotation.XmlElement']],['namespace="" required="true" ']],
  [['featureType','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="featureType" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
