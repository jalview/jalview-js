(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList','jalview.xml.binding.jalview.NoValueColour']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewUserColours", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.version=null;
this.colour=null;
this.filter=null;
this.schemeName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$S', function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'getColour$', function () {
if (this.colour == null ) {
this.colour=Clazz.new_($I$(1));
}return this.colour;
});

Clazz.newMeth(C$, 'getFilter$', function () {
if (this.filter == null ) {
this.filter=Clazz.new_($I$(1));
}return this.filter;
});

Clazz.newMeth(C$, 'getSchemeName$', function () {
return this.schemeName;
});

Clazz.newMeth(C$, 'setSchemeName$S', function (value) {
this.schemeName=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewUserColours'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="JalviewUserColours" namespace="www.jalview.org/colours" propOrder={"version"  "colour"  "filter"  } )']],
  [['version','String'],['@XmlElement(name="Version" namespace="" )']],
  [['colour','java.util.List<jalview.xml.binding.jalview.JalviewUserColours.Colour>'],['@XmlElement(namespace="" )']],
  [['filter','java.util.List<jalview.xml.binding.jalview.JalviewUserColours.Filter>'],['@XmlElement(namespace="" )']],
  [['schemeName','String'],['@XmlAttribute(name="schemeName" )']],
  [['null','jalview.xml.binding.jalview.JalviewUserColours.Colour'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewUserColours.Filter'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.JalviewUserColours, "Colour", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.attributeName=null;
this.name=null;
this.rgb=null;
this.minRGB=null;
this.noValueColour=null;
this.threshType=null;
this.threshold=null;
this.max=null;
this.min=null;
this.colourByLabel=null;
this.autoScale=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getAttributeName$', function () {
if (this.attributeName == null ) {
this.attributeName=Clazz.new_($I$(1));
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
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewUserColours.Colour'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"attributeName"  } )']],
  [['attributeName','java.util.List<java.lang.String>'],['@XmlElement(namespace="" )']],
  [['name','String'],['@XmlAttribute(name="Name" )']],
  [['rgb','.'],['@XmlAttribute(name="RGB" required="true" )']],
  [['minRGB','.'],['@XmlAttribute(name="minRGB" )']],
  [['noValueColour','jalview.xml.binding.jalview.NoValueColour'],['@XmlAttribute(name="noValueColour" )']],
  [['threshType','jalview.xml.binding.jalview.ThresholdType'],['@XmlAttribute(name="threshType" )']],
  [['threshold','Float'],['@XmlAttribute(name="threshold" )']],
  [['max','.'],['@XmlAttribute(name="max" )']],
  [['min','.'],['@XmlAttribute(name="min" )']],
  [['colourByLabel','Boolean'],['@XmlAttribute(name="colourByLabel" )']],
  [['autoScale','.'],['@XmlAttribute(name="autoScale" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewUserColours, "Filter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.matcherSet=null;
this.featureType=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewUserColours.Filter'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"matcherSet"  } )']],
  [['matcherSet','jalview.xml.binding.jalview.FeatureMatcherSet'],['@XmlElement(namespace="" required="true" )']],
  [['featureType','String'],['@XmlAttribute(name="featureType" required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
