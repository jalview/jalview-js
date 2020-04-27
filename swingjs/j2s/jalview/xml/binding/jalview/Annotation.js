(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Annotation", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Property',9],['ThresholdLine',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['graph'],'S',['label','description','sequenceRef','groupRef','id','calcId'],'O',['annotationElement','java.util.List','thresholdLine','jalview.xml.binding.jalview.Annotation.ThresholdLine','property','java.util.List','graphType','Integer','+graphColour','+graphGroup','+graphHeight','scoreOnly','Boolean','score','Double','visible','Boolean','+centreColLabels','+scaleColLabels','+showAllColLabels','+autoCalculated','+belowAlignment']]]

Clazz.newMeth(C$, 'getAnnotationElement$', function () {
if (this.annotationElement == null ) {
this.annotationElement=Clazz.new_($I$(1,1));
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
this.property=Clazz.new_($I$(1,1));
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
return (this.scoreOnly).valueOf();
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
return (this.autoCalculated).valueOf();
}});

Clazz.newMeth(C$, 'setAutoCalculated$Boolean', function (value) {
this.autoCalculated=value;
});

Clazz.newMeth(C$, 'isBelowAlignment$', function () {
if (this.belowAlignment == null ) {
return true;
} else {
return (this.belowAlignment).valueOf();
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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.Annotation',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"annotationElement"  "label"  "description"  "thresholdLine"  "property"  } ','name="Annotation" ']],
  [['label','String',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['graph','boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="graph" required="true" ']],
  [['graphType','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="graphType" ']],
  [['sequenceRef','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="sequenceRef" ']],
  [['groupRef','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="groupRef" ']],
  [['graphColour','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="graphColour" ']],
  [['graphGroup','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="graphGroup" ']],
  [['graphHeight','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="graphHeight" ']],
  [['id','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" ']],
  [['scoreOnly','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="scoreOnly" ']],
  [['score','Double',null,['javax.xml.bind.annotation.XmlAttribute']],['name="score" ']],
  [['visible','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="visible" ']],
  [['centreColLabels','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="centreColLabels" ']],
  [['scaleColLabels','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="scaleColLabels" ']],
  [['showAllColLabels','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showAllColLabels" ']],
  [['autoCalculated','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="autoCalculated" ']],
  [['belowAlignment','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="belowAlignment" ']],
  [['calcId','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="calcId" ']],
  [['null','jalview.xml.binding.jalview.Annotation.Property'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.Annotation.ThresholdLine'],['!XmlInner']],
  [['annotationElement','java.util.List<jalview.xml.binding.jalview.AnnotationElement>'],['@XmlElement']],
  [['description','String'],['@XmlElement']],
  [['thresholdLine','jalview.xml.binding.jalview.Annotation.ThresholdLine'],['@XmlElement']],
  [['property','java.util.List<jalview.xml.binding.jalview.Annotation.Property>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Annotation, "Property", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','value']]]

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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.Annotation.Property',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['name','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="name" ']],
  [['value','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="value" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Annotation, "ThresholdLine", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['label'],'O',['value','Float','colour','Integer']]]

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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.Annotation.ThresholdLine',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['label','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="label" ']],
  [['value','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="value" ']],
  [['colour','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colour" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
