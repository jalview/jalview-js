(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Annotation", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.annotationElement=null;
this.label=null;
this.description=null;
this.thresholdLine=null;
this.property=null;
this.graph=false;
this.graphType=null;
this.sequenceRef=null;
this.groupRef=null;
this.graphColour=null;
this.graphGroup=null;
this.graphHeight=null;
this.id=null;
this.scoreOnly=null;
this.score=null;
this.visible=null;
this.centreColLabels=null;
this.scaleColLabels=null;
this.showAllColLabels=null;
this.autoCalculated=null;
this.belowAlignment=null;
this.calcId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getAnnotationElement$', function () {
if (this.annotationElement == null ) {
this.annotationElement=Clazz.new_($I$(1));
}return this.annotationElement;
});

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'setLabel$S', function (value) {
this.label=value;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (value) {
this.description=value;
});

Clazz.newMeth(C$, 'getThresholdLine$', function () {
return this.thresholdLine;
});

Clazz.newMeth(C$, 'setThresholdLine$jalview_xml_binding_jalview_Annotation_ThresholdLine', function (value) {
this.thresholdLine=value;
});

Clazz.newMeth(C$, 'getProperty$', function () {
if (this.property == null ) {
this.property=Clazz.new_($I$(1));
}return this.property;
});

Clazz.newMeth(C$, 'isGraph$', function () {
return this.graph;
});

Clazz.newMeth(C$, 'setGraph$Z', function (value) {
this.graph=value;
});

Clazz.newMeth(C$, 'getGraphType$', function () {
return this.graphType;
});

Clazz.newMeth(C$, 'setGraphType$Integer', function (value) {
this.graphType=value;
});

Clazz.newMeth(C$, 'getSequenceRef$', function () {
return this.sequenceRef;
});

Clazz.newMeth(C$, 'setSequenceRef$S', function (value) {
this.sequenceRef=value;
});

Clazz.newMeth(C$, 'getGroupRef$', function () {
return this.groupRef;
});

Clazz.newMeth(C$, 'setGroupRef$S', function (value) {
this.groupRef=value;
});

Clazz.newMeth(C$, 'getGraphColour$', function () {
return this.graphColour;
});

Clazz.newMeth(C$, 'setGraphColour$Integer', function (value) {
this.graphColour=value;
});

Clazz.newMeth(C$, 'getGraphGroup$', function () {
return this.graphGroup;
});

Clazz.newMeth(C$, 'setGraphGroup$Integer', function (value) {
this.graphGroup=value;
});

Clazz.newMeth(C$, 'getGraphHeight$', function () {
return this.graphHeight;
});

Clazz.newMeth(C$, 'setGraphHeight$Integer', function (value) {
this.graphHeight=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'isScoreOnly$', function () {
if (this.scoreOnly == null ) {
return false;
} else {
return (this.scoreOnly).booleanValue$();
}});

Clazz.newMeth(C$, 'setScoreOnly$Boolean', function (value) {
this.scoreOnly=value;
});

Clazz.newMeth(C$, 'getScore$', function () {
return this.score;
});

Clazz.newMeth(C$, 'setScore$Double', function (value) {
this.score=value;
});

Clazz.newMeth(C$, 'isVisible$', function () {
return this.visible;
});

Clazz.newMeth(C$, 'setVisible$Boolean', function (value) {
this.visible=value;
});

Clazz.newMeth(C$, 'isCentreColLabels$', function () {
return this.centreColLabels;
});

Clazz.newMeth(C$, 'setCentreColLabels$Boolean', function (value) {
this.centreColLabels=value;
});

Clazz.newMeth(C$, 'isScaleColLabels$', function () {
return this.scaleColLabels;
});

Clazz.newMeth(C$, 'setScaleColLabels$Boolean', function (value) {
this.scaleColLabels=value;
});

Clazz.newMeth(C$, 'isShowAllColLabels$', function () {
return this.showAllColLabels;
});

Clazz.newMeth(C$, 'setShowAllColLabels$Boolean', function (value) {
this.showAllColLabels=value;
});

Clazz.newMeth(C$, 'isAutoCalculated$', function () {
if (this.autoCalculated == null ) {
return false;
} else {
return (this.autoCalculated).booleanValue$();
}});

Clazz.newMeth(C$, 'setAutoCalculated$Boolean', function (value) {
this.autoCalculated=value;
});

Clazz.newMeth(C$, 'isBelowAlignment$', function () {
if (this.belowAlignment == null ) {
return true;
} else {
return (this.belowAlignment).booleanValue$();
}});

Clazz.newMeth(C$, 'setBelowAlignment$Boolean', function (value) {
this.belowAlignment=value;
});

Clazz.newMeth(C$, 'getCalcId$', function () {
return this.calcId;
});

Clazz.newMeth(C$, 'setCalcId$S', function (value) {
this.calcId=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.Annotation'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"annotationElement"  "label"  "description"  "thresholdLine"  "property"  } )','@XmlRootElement(name="Annotation" )']],
  [['label','String'],['@XmlElement(required="true" )']],
  [['graph','boolean'],['@XmlAttribute(name="graph" required="true" )']],
  [['graphType','Integer'],['@XmlAttribute(name="graphType" )']],
  [['sequenceRef','String'],['@XmlAttribute(name="sequenceRef" )']],
  [['groupRef','.'],['@XmlAttribute(name="groupRef" )']],
  [['graphColour','Integer'],['@XmlAttribute(name="graphColour" )']],
  [['graphGroup','.'],['@XmlAttribute(name="graphGroup" )']],
  [['graphHeight','.'],['@XmlAttribute(name="graphHeight" )']],
  [['id','String'],['@XmlAttribute(name="id" )']],
  [['scoreOnly','Boolean'],['@XmlAttribute(name="scoreOnly" )']],
  [['score','Double'],['@XmlAttribute(name="score" )']],
  [['visible','Boolean'],['@XmlAttribute(name="visible" )']],
  [['centreColLabels','.'],['@XmlAttribute(name="centreColLabels" )']],
  [['scaleColLabels','.'],['@XmlAttribute(name="scaleColLabels" )']],
  [['showAllColLabels','.'],['@XmlAttribute(name="showAllColLabels" )']],
  [['autoCalculated','.'],['@XmlAttribute(name="autoCalculated" )']],
  [['belowAlignment','.'],['@XmlAttribute(name="belowAlignment" )']],
  [['calcId','String'],['@XmlAttribute(name="calcId" )']],
  [['null','jalview.xml.binding.jalview.Annotation.Property'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.Annotation.ThresholdLine'],['!XmlInner']],
  [['annotationElement','java.util.List<jalview.xml.binding.jalview.AnnotationElement>'],['@XmlElement']],
  [['description','String'],['@XmlElement']],
  [['thresholdLine','jalview.xml.binding.jalview.Annotation.ThresholdLine'],['@XmlElement']],
  [['property','java.util.List<jalview.xml.binding.jalview.Annotation.Property>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.Annotation, "Property", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.Annotation.Property'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['name','String'],['@XmlAttribute(name="name" )']],
  [['value','.'],['@XmlAttribute(name="value" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Annotation, "ThresholdLine", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.label=null;
this.value=null;
this.colour=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'setLabel$S', function (value) {
this.label=value;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$Float', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getColour$', function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$Integer', function (value) {
this.colour=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.Annotation.ThresholdLine'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['label','String'],['@XmlAttribute(name="label" )']],
  [['value','Float'],['@XmlAttribute(name="value" )']],
  [['colour','Integer'],['@XmlAttribute(name="colour" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
