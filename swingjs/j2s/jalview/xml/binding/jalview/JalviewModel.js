(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList','jalview.xml.binding.jalview.NoValueColour']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JalviewModel", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.creationDate=null;
this.version=null;
this.vamsasModel=null;
this.jSeq=null;
this.jGroup=null;
this.viewport=null;
this.userColours=null;
this.tree=null;
this.pcaViewer=null;
this.featureSettings=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCreationDate$', function () {
return this.creationDate;
});

Clazz.newMeth(C$, 'setCreationDate$javax_xml_datatype_XMLGregorianCalendar', function (value) {
this.creationDate=value;
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$S', function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'getVamsasModel$', function () {
return this.vamsasModel;
});

Clazz.newMeth(C$, 'setVamsasModel$jalview_xml_binding_jalview_VAMSAS', function (value) {
this.vamsasModel=value;
});

Clazz.newMeth(C$, 'getJSeq$', function () {
if (this.jSeq == null ) {
this.jSeq=Clazz.new_($I$(1));
}return this.jSeq;
});

Clazz.newMeth(C$, 'getJGroup$', function () {
if (this.jGroup == null ) {
this.jGroup=Clazz.new_($I$(1));
}return this.jGroup;
});

Clazz.newMeth(C$, 'getViewport$', function () {
if (this.viewport == null ) {
this.viewport=Clazz.new_($I$(1));
}return this.viewport;
});

Clazz.newMeth(C$, 'getUserColours$', function () {
if (this.userColours == null ) {
this.userColours=Clazz.new_($I$(1));
}return this.userColours;
});

Clazz.newMeth(C$, 'getTree$', function () {
if (this.tree == null ) {
this.tree=Clazz.new_($I$(1));
}return this.tree;
});

Clazz.newMeth(C$, 'getPcaViewer$', function () {
if (this.pcaViewer == null ) {
this.pcaViewer=Clazz.new_($I$(1));
}return this.pcaViewer;
});

Clazz.newMeth(C$, 'getFeatureSettings$', function () {
return this.featureSettings;
});

Clazz.newMeth(C$, 'setFeatureSettings$jalview_xml_binding_jalview_JalviewModel_FeatureSettings', function (value) {
this.featureSettings=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="JalviewModel" namespace="www.jalview.org" propOrder={"creationDate"  "version"  "vamsasModel"  "jSeq"  "jGroup"  "viewport"  "userColours"  "tree"  "pcaViewer"  "featureSettings"  } )']],
  [['creationDate','javax.xml.datatype.XMLGregorianCalendar'],['@XmlElement(required="true" )','@XmlSchemaType(name="dateTime" )']],
  [['version','String'],['@XmlElement(required="true" )']],
  [['vamsasModel','jalview.xml.binding.jalview.VAMSAS'],['@XmlElement(required="true" )']],
  [['jSeq','java.util.List<jalview.xml.binding.jalview.JalviewModel.JSeq>'],['@XmlElement(name="JSeq" )']],
  [['jGroup','java.util.List<jalview.xml.binding.jalview.JalviewModel.JGroup>'],['@XmlElement(name="JGroup" )']],
  [['viewport','java.util.List<jalview.xml.binding.jalview.JalviewModel.Viewport>'],['@XmlElement(name="Viewport" )']],
  [['userColours','java.util.List<jalview.xml.binding.jalview.JalviewModel.UserColours>'],['@XmlElement(name="UserColours" )']],
  [['pcaViewer','java.util.List<jalview.xml.binding.jalview.JalviewModel.PcaViewer>'],['@XmlElement(name="PcaViewer" )']],
  [['featureSettings','jalview.xml.binding.jalview.JalviewModel.FeatureSettings'],['@XmlElement(name="FeatureSettings" )']],
  [['null','jalview.xml.binding.jalview.JalviewModel.FeatureSettings'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JGroup'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JSeq'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.PcaViewer'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.Tree'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.UserColours'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.Viewport'],['!XmlInner']],
  [['tree','java.util.List<jalview.xml.binding.jalview.JalviewModel.Tree>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.JalviewModel, "FeatureSettings", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.setting=null;
this.group=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSetting$', function () {
if (this.setting == null ) {
this.setting=Clazz.new_($I$(1));
}return this.setting;
});

Clazz.newMeth(C$, 'getGroup$', function () {
if (this.group == null ) {
this.group=Clazz.new_($I$(1));
}return this.group;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.FeatureSettings'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"setting"  "group"  } )']],
  [['setting','java.util.List<jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Setting>'],['@XmlElement(namespace="www.jalview.org" )']],
  [['group','java.util.List<jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Group>'],['@XmlElement(namespace="www.jalview.org" )']],
  [['null','jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Group'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Setting'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.FeatureSettings, "Group", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.display=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'isDisplay$', function () {
return this.display;
});

Clazz.newMeth(C$, 'setDisplay$Z', function (value) {
this.display=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Group'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['name','String'],['@XmlAttribute(name="name" required="true" )']],
  [['display','boolean'],['@XmlAttribute(name="display" required="true" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.FeatureSettings, "Setting", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.attributeName=null;
this.matcherSet=null;
this.type=null;
this.colour=0;
this.display=false;
this.order=null;
this.mincolour=null;
this.noValueColour=null;
this.threshold=null;
this.threshstate=null;
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

Clazz.newMeth(C$, 'getMatcherSet$', function () {
return this.matcherSet;
});

Clazz.newMeth(C$, 'setMatcherSet$jalview_xml_binding_jalview_FeatureMatcherSet', function (value) {
this.matcherSet=value;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getColour$', function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$I', function (value) {
this.colour=value;
});

Clazz.newMeth(C$, 'isDisplay$', function () {
return this.display;
});

Clazz.newMeth(C$, 'setDisplay$Z', function (value) {
this.display=value;
});

Clazz.newMeth(C$, 'getOrder$', function () {
return this.order;
});

Clazz.newMeth(C$, 'setOrder$Float', function (value) {
this.order=value;
});

Clazz.newMeth(C$, 'getMincolour$', function () {
return this.mincolour;
});

Clazz.newMeth(C$, 'setMincolour$Integer', function (value) {
this.mincolour=value;
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

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$Float', function (value) {
this.threshold=value;
});

Clazz.newMeth(C$, 'getThreshstate$', function () {
return this.threshstate;
});

Clazz.newMeth(C$, 'setThreshstate$Integer', function (value) {
this.threshstate=value;
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
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Setting'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"attributeName"  "matcherSet"  } )']],
  [['attributeName','java.util.List<java.lang.String>'],['@XmlElement(namespace="www.jalview.org" )']],
  [['matcherSet','jalview.xml.binding.jalview.FeatureMatcherSet'],['@XmlElement(namespace="www.jalview.org" )']],
  [['type','String'],['@XmlAttribute(name="type" required="true" )']],
  [['colour','int'],['@XmlAttribute(name="colour" required="true" )']],
  [['display','boolean'],['@XmlAttribute(name="display" required="true" )']],
  [['order','Float'],['@XmlAttribute(name="order" )']],
  [['mincolour','Integer'],['@XmlAttribute(name="mincolour" )']],
  [['noValueColour','jalview.xml.binding.jalview.NoValueColour'],['@XmlAttribute(name="noValueColour" )']],
  [['threshold','Float'],['@XmlAttribute(name="threshold" )']],
  [['threshstate','Integer'],['@XmlAttribute(name="threshstate" )']],
  [['max','Float'],['@XmlAttribute(name="max" )']],
  [['min','.'],['@XmlAttribute(name="min" )']],
  [['colourByLabel','Boolean'],['@XmlAttribute(name="colourByLabel" )']],
  [['autoScale','.'],['@XmlAttribute(name="autoScale" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel, "JGroup", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.seq=null;
this.annotationColours=null;
this.start=null;
this.end=null;
this.name=null;
this.colour=null;
this.consThreshold=null;
this.pidThreshold=null;
this.outlineColour=null;
this.displayBoxes=null;
this.displayText=null;
this.colourText=null;
this.textCol1=null;
this.textCol2=null;
this.textColThreshold=null;
this.showUnconserved=null;
this.ignoreGapsinConsensus=null;
this.showConsensusHistogram=null;
this.showSequenceLogo=null;
this.normaliseSequenceLogo=null;
this.id=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSeq$', function () {
if (this.seq == null ) {
this.seq=Clazz.new_($I$(1));
}return this.seq;
});

Clazz.newMeth(C$, 'getAnnotationColours$', function () {
return this.annotationColours;
});

Clazz.newMeth(C$, 'setAnnotationColours$jalview_xml_binding_jalview_AnnotationColourScheme', function (value) {
this.annotationColours=value;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$Integer', function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$Integer', function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getColour$', function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$S', function (value) {
this.colour=value;
});

Clazz.newMeth(C$, 'getConsThreshold$', function () {
return this.consThreshold;
});

Clazz.newMeth(C$, 'setConsThreshold$Integer', function (value) {
this.consThreshold=value;
});

Clazz.newMeth(C$, 'getPidThreshold$', function () {
return this.pidThreshold;
});

Clazz.newMeth(C$, 'setPidThreshold$Integer', function (value) {
this.pidThreshold=value;
});

Clazz.newMeth(C$, 'getOutlineColour$', function () {
return this.outlineColour;
});

Clazz.newMeth(C$, 'setOutlineColour$Integer', function (value) {
this.outlineColour=value;
});

Clazz.newMeth(C$, 'isDisplayBoxes$', function () {
return this.displayBoxes;
});

Clazz.newMeth(C$, 'setDisplayBoxes$Boolean', function (value) {
this.displayBoxes=value;
});

Clazz.newMeth(C$, 'isDisplayText$', function () {
return this.displayText;
});

Clazz.newMeth(C$, 'setDisplayText$Boolean', function (value) {
this.displayText=value;
});

Clazz.newMeth(C$, 'isColourText$', function () {
return this.colourText;
});

Clazz.newMeth(C$, 'setColourText$Boolean', function (value) {
this.colourText=value;
});

Clazz.newMeth(C$, 'getTextCol1$', function () {
return this.textCol1;
});

Clazz.newMeth(C$, 'setTextCol1$Integer', function (value) {
this.textCol1=value;
});

Clazz.newMeth(C$, 'getTextCol2$', function () {
return this.textCol2;
});

Clazz.newMeth(C$, 'setTextCol2$Integer', function (value) {
this.textCol2=value;
});

Clazz.newMeth(C$, 'getTextColThreshold$', function () {
return this.textColThreshold;
});

Clazz.newMeth(C$, 'setTextColThreshold$Integer', function (value) {
this.textColThreshold=value;
});

Clazz.newMeth(C$, 'isShowUnconserved$', function () {
return this.showUnconserved;
});

Clazz.newMeth(C$, 'setShowUnconserved$Boolean', function (value) {
this.showUnconserved=value;
});

Clazz.newMeth(C$, 'isIgnoreGapsinConsensus$', function () {
if (this.ignoreGapsinConsensus == null ) {
return true;
} else {
return (this.ignoreGapsinConsensus).booleanValue$();
}});

Clazz.newMeth(C$, 'setIgnoreGapsinConsensus$Boolean', function (value) {
this.ignoreGapsinConsensus=value;
});

Clazz.newMeth(C$, 'isShowConsensusHistogram$', function () {
if (this.showConsensusHistogram == null ) {
return true;
} else {
return (this.showConsensusHistogram).booleanValue$();
}});

Clazz.newMeth(C$, 'setShowConsensusHistogram$Boolean', function (value) {
this.showConsensusHistogram=value;
});

Clazz.newMeth(C$, 'isShowSequenceLogo$', function () {
if (this.showSequenceLogo == null ) {
return false;
} else {
return (this.showSequenceLogo).booleanValue$();
}});

Clazz.newMeth(C$, 'setShowSequenceLogo$Boolean', function (value) {
this.showSequenceLogo=value;
});

Clazz.newMeth(C$, 'isNormaliseSequenceLogo$', function () {
if (this.normaliseSequenceLogo == null ) {
return false;
} else {
return (this.normaliseSequenceLogo).booleanValue$();
}});

Clazz.newMeth(C$, 'setNormaliseSequenceLogo$Boolean', function (value) {
this.normaliseSequenceLogo=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.JGroup'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"seq"  "annotationColours"  } )']],
  [['seq','java.util.List<java.lang.String>'],['@XmlElement(namespace="www.jalview.org" required="true" )']],
  [['annotationColours','jalview.xml.binding.jalview.AnnotationColourScheme'],['@XmlElement(namespace="www.jalview.org" )']],
  [['start','Integer'],['@XmlAttribute(name="start" )']],
  [['end','.'],['@XmlAttribute(name="end" )']],
  [['name','String'],['@XmlAttribute(name="name" )']],
  [['colour','.'],['@XmlAttribute(name="colour" )']],
  [['consThreshold','Integer'],['@XmlAttribute(name="consThreshold" )']],
  [['pidThreshold','.'],['@XmlAttribute(name="pidThreshold" )']],
  [['outlineColour','.'],['@XmlAttribute(name="outlineColour" )']],
  [['displayBoxes','Boolean'],['@XmlAttribute(name="displayBoxes" )']],
  [['displayText','.'],['@XmlAttribute(name="displayText" )']],
  [['colourText','.'],['@XmlAttribute(name="colourText" )']],
  [['textCol1','Integer'],['@XmlAttribute(name="textCol1" )']],
  [['textCol2','.'],['@XmlAttribute(name="textCol2" )']],
  [['textColThreshold','.'],['@XmlAttribute(name="textColThreshold" )']],
  [['showUnconserved','Boolean'],['@XmlAttribute(name="showUnconserved" )']],
  [['ignoreGapsinConsensus','.'],['@XmlAttribute(name="ignoreGapsinConsensus" )']],
  [['showConsensusHistogram','.'],['@XmlAttribute(name="showConsensusHistogram" )']],
  [['showSequenceLogo','.'],['@XmlAttribute(name="showSequenceLogo" )']],
  [['normaliseSequenceLogo','.'],['@XmlAttribute(name="normaliseSequenceLogo" )']],
  [['id','String'],['@XmlAttribute(name="id" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel, "JSeq", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.features=null;
this.pdbids=null;
this.hiddenSequences=null;
this.rnaViewer=null;
this.colour=null;
this.start=0;
this.end=0;
this.id=null;
this.hidden=null;
this.viewreference=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getFeatures$', function () {
if (this.features == null ) {
this.features=Clazz.new_($I$(1));
}return this.features;
});

Clazz.newMeth(C$, 'getPdbids$', function () {
if (this.pdbids == null ) {
this.pdbids=Clazz.new_($I$(1));
}return this.pdbids;
});

Clazz.newMeth(C$, 'getHiddenSequences$', function () {
if (this.hiddenSequences == null ) {
this.hiddenSequences=Clazz.new_($I$(1));
}return this.hiddenSequences;
});

Clazz.newMeth(C$, 'getRnaViewer$', function () {
if (this.rnaViewer == null ) {
this.rnaViewer=Clazz.new_($I$(1));
}return this.rnaViewer;
});

Clazz.newMeth(C$, 'getColour$', function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$Integer', function (value) {
this.colour=value;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$I', function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$I', function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'isHidden$', function () {
return this.hidden;
});

Clazz.newMeth(C$, 'setHidden$Boolean', function (value) {
this.hidden=value;
});

Clazz.newMeth(C$, 'isViewreference$', function () {
return this.viewreference;
});

Clazz.newMeth(C$, 'setViewreference$Boolean', function (value) {
this.viewreference=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.JSeq'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"features"  "pdbids"  "hiddenSequences"  "rnaViewer"  } )']],
  [['features','java.util.List<jalview.xml.binding.jalview.Feature>'],['@XmlElement(namespace="www.jalview.org" )']],
  [['pdbids','java.util.List<jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids>'],['@XmlElement(namespace="www.jalview.org" )']],
  [['hiddenSequences','java.util.List<java.lang.Integer>'],['@XmlElement(namespace="www.jalview.org" type="java.lang.Integer.class" )']],
  [['rnaViewer','java.util.List<jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer>'],['@XmlElement(namespace="www.jalview.org" )']],
  [['colour','Integer'],['@XmlAttribute(name="colour" )']],
  [['start','int'],['@XmlAttribute(name="start" required="true" )']],
  [['end','.'],['@XmlAttribute(name="end" required="true" )']],
  [['id','String'],['@XmlAttribute(name="id" required="true" )']],
  [['hidden','Boolean'],['@XmlAttribute(name="hidden" )']],
  [['viewreference','.'],['@XmlAttribute(name="viewreference" )']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.JSeq, "Pdbids", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'jalview.xml.binding.jalview.Pdbentry');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.structureState=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getStructureState$', function () {
if (this.structureState == null ) {
this.structureState=Clazz.new_($I$(1));
}return this.structureState;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"structureState"  } )']],
  [['structureState','java.util.List<jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids.StructureState>'],['@XmlElement(namespace="www.jalview.org" )']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids.StructureState'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.JSeq.Pdbids, "StructureState", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
this.visible=null;
this.viewId=null;
this.alignwithAlignPanel=null;
this.colourwithAlignPanel=null;
this.colourByJmol=null;
this.type=null;
this.width=null;
this.height=null;
this.xpos=null;
this.ypos=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'isVisible$', function () {
return this.visible;
});

Clazz.newMeth(C$, 'setVisible$Boolean', function (value) {
this.visible=value;
});

Clazz.newMeth(C$, 'getViewId$', function () {
return this.viewId;
});

Clazz.newMeth(C$, 'setViewId$S', function (value) {
this.viewId=value;
});

Clazz.newMeth(C$, 'isAlignwithAlignPanel$', function () {
if (this.alignwithAlignPanel == null ) {
return true;
} else {
return (this.alignwithAlignPanel).booleanValue$();
}});

Clazz.newMeth(C$, 'setAlignwithAlignPanel$Boolean', function (value) {
this.alignwithAlignPanel=value;
});

Clazz.newMeth(C$, 'isColourwithAlignPanel$', function () {
if (this.colourwithAlignPanel == null ) {
return false;
} else {
return (this.colourwithAlignPanel).booleanValue$();
}});

Clazz.newMeth(C$, 'setColourwithAlignPanel$Boolean', function (value) {
this.colourwithAlignPanel=value;
});

Clazz.newMeth(C$, 'isColourByJmol$', function () {
if (this.colourByJmol == null ) {
return true;
} else {
return (this.colourByJmol).booleanValue$();
}});

Clazz.newMeth(C$, 'setColourByJmol$Boolean', function (value) {
this.colourByJmol=value;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$Integer', function (value) {
this.width=value;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$Integer', function (value) {
this.height=value;
});

Clazz.newMeth(C$, 'getXpos$', function () {
return this.xpos;
});

Clazz.newMeth(C$, 'setXpos$Integer', function (value) {
this.xpos=value;
});

Clazz.newMeth(C$, 'getYpos$', function () {
return this.ypos;
});

Clazz.newMeth(C$, 'setYpos$Integer', function (value) {
this.ypos=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids.StructureState'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"value"  } )']],
  [['value','String'],['@XmlValue']],
  [['visible','Boolean'],['@XmlAttribute(name="visible" )']],
  [['viewId','String'],['@XmlAttribute(name="viewId" )']],
  [['alignwithAlignPanel','Boolean'],['@XmlAttribute(name="alignwithAlignPanel" )']],
  [['colourwithAlignPanel','.'],['@XmlAttribute(name="colourwithAlignPanel" )']],
  [['colourByJmol','.'],['@XmlAttribute(name="colourByJmol" )']],
  [['type','String'],['@XmlAttribute(name="type" )']],
  [['width','Integer'],['@XmlAttribute(name="width" )']],
  [['height','.'],['@XmlAttribute(name="height" )']],
  [['xpos','.'],['@XmlAttribute(name="xpos" )']],
  [['ypos','.'],['@XmlAttribute(name="ypos" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.JSeq, "RnaViewer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.secondaryStructure=null;
this.title=null;
this.viewId=null;
this.dividerLocation=null;
this.selectedRna=null;
this.width=null;
this.height=null;
this.xpos=null;
this.ypos=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSecondaryStructure$', function () {
if (this.secondaryStructure == null ) {
this.secondaryStructure=Clazz.new_($I$(1));
}return this.secondaryStructure;
});

Clazz.newMeth(C$, 'getTitle$', function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S', function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getViewId$', function () {
return this.viewId;
});

Clazz.newMeth(C$, 'setViewId$S', function (value) {
this.viewId=value;
});

Clazz.newMeth(C$, 'getDividerLocation$', function () {
return this.dividerLocation;
});

Clazz.newMeth(C$, 'setDividerLocation$Integer', function (value) {
this.dividerLocation=value;
});

Clazz.newMeth(C$, 'getSelectedRna$', function () {
return this.selectedRna;
});

Clazz.newMeth(C$, 'setSelectedRna$Integer', function (value) {
this.selectedRna=value;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$Integer', function (value) {
this.width=value;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$Integer', function (value) {
this.height=value;
});

Clazz.newMeth(C$, 'getXpos$', function () {
return this.xpos;
});

Clazz.newMeth(C$, 'setXpos$Integer', function (value) {
this.xpos=value;
});

Clazz.newMeth(C$, 'getYpos$', function () {
return this.ypos;
});

Clazz.newMeth(C$, 'setYpos$Integer', function (value) {
this.ypos=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"secondaryStructure"  } )']],
  [['secondaryStructure','java.util.List<jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer.SecondaryStructure>'],['@XmlElement(namespace="www.jalview.org" required="true" )']],
  [['title','String'],['@XmlAttribute(name="title" )']],
  [['viewId','.'],['@XmlAttribute(name="viewId" )']],
  [['dividerLocation','Integer'],['@XmlAttribute(name="dividerLocation" )']],
  [['selectedRna','.'],['@XmlAttribute(name="selectedRna" )']],
  [['width','.'],['@XmlAttribute(name="width" )']],
  [['height','.'],['@XmlAttribute(name="height" )']],
  [['xpos','.'],['@XmlAttribute(name="xpos" )']],
  [['ypos','.'],['@XmlAttribute(name="ypos" )']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer.SecondaryStructure'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.JSeq.RnaViewer, "SecondaryStructure", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.title=null;
this.annotationId=null;
this.gapped=null;
this.viewerState=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTitle$', function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S', function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getAnnotationId$', function () {
return this.annotationId;
});

Clazz.newMeth(C$, 'setAnnotationId$S', function (value) {
this.annotationId=value;
});

Clazz.newMeth(C$, 'isGapped$', function () {
return this.gapped;
});

Clazz.newMeth(C$, 'setGapped$Boolean', function (value) {
this.gapped=value;
});

Clazz.newMeth(C$, 'getViewerState$', function () {
return this.viewerState;
});

Clazz.newMeth(C$, 'setViewerState$S', function (value) {
this.viewerState=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer.SecondaryStructure'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['title','String'],['@XmlAttribute(name="title" )']],
  [['annotationId','.'],['@XmlAttribute(name="annotationId" required="true" )']],
  [['gapped','Boolean'],['@XmlAttribute(name="gapped" )']],
  [['viewerState','String'],['@XmlAttribute(name="viewerState" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel, "PcaViewer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequencePoint=null;
this.axis=null;
this.seqPointMin=null;
this.seqPointMax=null;
this.pcaData=null;
this.title=null;
this.scoreModelName=null;
this.xDim=null;
this.yDim=null;
this.zDim=null;
this.bgColour=null;
this.scaleFactor=null;
this.showLabels=null;
this.linkToAllViews=null;
this.width=null;
this.height=null;
this.xpos=null;
this.ypos=null;
this.includeGaps=null;
this.matchGaps=null;
this.includeGappedColumns=null;
this.denominateByShortestLength=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSequencePoint$', function () {
if (this.sequencePoint == null ) {
this.sequencePoint=Clazz.new_($I$(1));
}return this.sequencePoint;
});

Clazz.newMeth(C$, 'getAxis$', function () {
if (this.axis == null ) {
this.axis=Clazz.new_($I$(1));
}return this.axis;
});

Clazz.newMeth(C$, 'getSeqPointMin$', function () {
return this.seqPointMin;
});

Clazz.newMeth(C$, 'setSeqPointMin$jalview_xml_binding_jalview_JalviewModel_PcaViewer_SeqPointMin', function (value) {
this.seqPointMin=value;
});

Clazz.newMeth(C$, 'getSeqPointMax$', function () {
return this.seqPointMax;
});

Clazz.newMeth(C$, 'setSeqPointMax$jalview_xml_binding_jalview_JalviewModel_PcaViewer_SeqPointMax', function (value) {
this.seqPointMax=value;
});

Clazz.newMeth(C$, 'getPcaData$', function () {
return this.pcaData;
});

Clazz.newMeth(C$, 'setPcaData$jalview_xml_binding_jalview_PcaDataType', function (value) {
this.pcaData=value;
});

Clazz.newMeth(C$, 'getTitle$', function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S', function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getScoreModelName$', function () {
return this.scoreModelName;
});

Clazz.newMeth(C$, 'setScoreModelName$S', function (value) {
this.scoreModelName=value;
});

Clazz.newMeth(C$, 'getXDim$', function () {
return this.xDim;
});

Clazz.newMeth(C$, 'setXDim$Integer', function (value) {
this.xDim=value;
});

Clazz.newMeth(C$, 'getYDim$', function () {
return this.yDim;
});

Clazz.newMeth(C$, 'setYDim$Integer', function (value) {
this.yDim=value;
});

Clazz.newMeth(C$, 'getZDim$', function () {
return this.zDim;
});

Clazz.newMeth(C$, 'setZDim$Integer', function (value) {
this.zDim=value;
});

Clazz.newMeth(C$, 'getBgColour$', function () {
return this.bgColour;
});

Clazz.newMeth(C$, 'setBgColour$Integer', function (value) {
this.bgColour=value;
});

Clazz.newMeth(C$, 'getScaleFactor$', function () {
return this.scaleFactor;
});

Clazz.newMeth(C$, 'setScaleFactor$Float', function (value) {
this.scaleFactor=value;
});

Clazz.newMeth(C$, 'isShowLabels$', function () {
return this.showLabels;
});

Clazz.newMeth(C$, 'setShowLabels$Boolean', function (value) {
this.showLabels=value;
});

Clazz.newMeth(C$, 'isLinkToAllViews$', function () {
return this.linkToAllViews;
});

Clazz.newMeth(C$, 'setLinkToAllViews$Boolean', function (value) {
this.linkToAllViews=value;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$Integer', function (value) {
this.width=value;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$Integer', function (value) {
this.height=value;
});

Clazz.newMeth(C$, 'getXpos$', function () {
return this.xpos;
});

Clazz.newMeth(C$, 'setXpos$Integer', function (value) {
this.xpos=value;
});

Clazz.newMeth(C$, 'getYpos$', function () {
return this.ypos;
});

Clazz.newMeth(C$, 'setYpos$Integer', function (value) {
this.ypos=value;
});

Clazz.newMeth(C$, 'isIncludeGaps$', function () {
return this.includeGaps;
});

Clazz.newMeth(C$, 'setIncludeGaps$Boolean', function (value) {
this.includeGaps=value;
});

Clazz.newMeth(C$, 'isMatchGaps$', function () {
return this.matchGaps;
});

Clazz.newMeth(C$, 'setMatchGaps$Boolean', function (value) {
this.matchGaps=value;
});

Clazz.newMeth(C$, 'isIncludeGappedColumns$', function () {
return this.includeGappedColumns;
});

Clazz.newMeth(C$, 'setIncludeGappedColumns$Boolean', function (value) {
this.includeGappedColumns=value;
});

Clazz.newMeth(C$, 'isDenominateByShortestLength$', function () {
return this.denominateByShortestLength;
});

Clazz.newMeth(C$, 'setDenominateByShortestLength$Boolean', function (value) {
this.denominateByShortestLength=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.PcaViewer'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"sequencePoint"  "axis"  "seqPointMin"  "seqPointMax"  "pcaData"  } )']],
  [['sequencePoint','java.util.List<jalview.xml.binding.jalview.JalviewModel.PcaViewer.SequencePoint>'],['@XmlElement(namespace="www.jalview.org" required="true" )']],
  [['axis','java.util.List<jalview.xml.binding.jalview.JalviewModel.PcaViewer.Axis>'],['@XmlElement(namespace="www.jalview.org" required="true" )']],
  [['seqPointMin','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMin'],['@XmlElement(namespace="www.jalview.org" required="true" )']],
  [['seqPointMax','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMax'],['@XmlElement(namespace="www.jalview.org" required="true" )']],
  [['pcaData','jalview.xml.binding.jalview.PcaDataType'],['@XmlElement(namespace="www.jalview.org" required="true" )']],
  [['title','String'],['@XmlAttribute(name="title" )']],
  [['scoreModelName','.'],['@XmlAttribute(name="scoreModelName" )']],
  [['xDim','Integer'],['@XmlAttribute(name="xDim" )']],
  [['yDim','.'],['@XmlAttribute(name="yDim" )']],
  [['zDim','.'],['@XmlAttribute(name="zDim" )']],
  [['bgColour','.'],['@XmlAttribute(name="bgColour" )']],
  [['scaleFactor','Float'],['@XmlAttribute(name="scaleFactor" )']],
  [['showLabels','Boolean'],['@XmlAttribute(name="showLabels" )']],
  [['linkToAllViews','.'],['@XmlAttribute(name="linkToAllViews" )']],
  [['width','Integer'],['@XmlAttribute(name="width" )']],
  [['height','.'],['@XmlAttribute(name="height" )']],
  [['xpos','.'],['@XmlAttribute(name="xpos" )']],
  [['ypos','.'],['@XmlAttribute(name="ypos" )']],
  [['includeGaps','Boolean'],['@XmlAttribute(name="includeGaps" )']],
  [['matchGaps','.'],['@XmlAttribute(name="matchGaps" )']],
  [['includeGappedColumns','.'],['@XmlAttribute(name="includeGappedColumns" )']],
  [['denominateByShortestLength','.'],['@XmlAttribute(name="denominateByShortestLength" )']],
  [['null','jalview.xml.binding.jalview.JalviewModel.PcaViewer.Axis'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMax'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMin'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SequencePoint'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.PcaViewer, "Axis", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.xPos=null;
this.yPos=null;
this.zPos=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getXPos$', function () {
return this.xPos;
});

Clazz.newMeth(C$, 'setXPos$Float', function (value) {
this.xPos=value;
});

Clazz.newMeth(C$, 'getYPos$', function () {
return this.yPos;
});

Clazz.newMeth(C$, 'setYPos$Float', function (value) {
this.yPos=value;
});

Clazz.newMeth(C$, 'getZPos$', function () {
return this.zPos;
});

Clazz.newMeth(C$, 'setZPos$Float', function (value) {
this.zPos=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.PcaViewer.Axis'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['xPos','Float'],['@XmlAttribute(name="xPos" )']],
  [['yPos','.'],['@XmlAttribute(name="yPos" )']],
  [['zPos','.'],['@XmlAttribute(name="zPos" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.PcaViewer, "SeqPointMax", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.xPos=null;
this.yPos=null;
this.zPos=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getXPos$', function () {
return this.xPos;
});

Clazz.newMeth(C$, 'setXPos$Float', function (value) {
this.xPos=value;
});

Clazz.newMeth(C$, 'getYPos$', function () {
return this.yPos;
});

Clazz.newMeth(C$, 'setYPos$Float', function (value) {
this.yPos=value;
});

Clazz.newMeth(C$, 'getZPos$', function () {
return this.zPos;
});

Clazz.newMeth(C$, 'setZPos$Float', function (value) {
this.zPos=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMax'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['xPos','Float'],['@XmlAttribute(name="xPos" )']],
  [['yPos','.'],['@XmlAttribute(name="yPos" )']],
  [['zPos','.'],['@XmlAttribute(name="zPos" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.PcaViewer, "SeqPointMin", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.xPos=null;
this.yPos=null;
this.zPos=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getXPos$', function () {
return this.xPos;
});

Clazz.newMeth(C$, 'setXPos$Float', function (value) {
this.xPos=value;
});

Clazz.newMeth(C$, 'getYPos$', function () {
return this.yPos;
});

Clazz.newMeth(C$, 'setYPos$Float', function (value) {
this.yPos=value;
});

Clazz.newMeth(C$, 'getZPos$', function () {
return this.zPos;
});

Clazz.newMeth(C$, 'setZPos$Float', function (value) {
this.zPos=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMin'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['xPos','Float'],['@XmlAttribute(name="xPos" )']],
  [['yPos','.'],['@XmlAttribute(name="yPos" )']],
  [['zPos','.'],['@XmlAttribute(name="zPos" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.PcaViewer, "SequencePoint", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequenceRef=null;
this.xPos=null;
this.yPos=null;
this.zPos=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSequenceRef$', function () {
return this.sequenceRef;
});

Clazz.newMeth(C$, 'setSequenceRef$S', function (value) {
this.sequenceRef=value;
});

Clazz.newMeth(C$, 'getXPos$', function () {
return this.xPos;
});

Clazz.newMeth(C$, 'setXPos$Float', function (value) {
this.xPos=value;
});

Clazz.newMeth(C$, 'getYPos$', function () {
return this.yPos;
});

Clazz.newMeth(C$, 'setYPos$Float', function (value) {
this.yPos=value;
});

Clazz.newMeth(C$, 'getZPos$', function () {
return this.zPos;
});

Clazz.newMeth(C$, 'setZPos$Float', function (value) {
this.zPos=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.PcaViewer.SequencePoint'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['sequenceRef','String'],['@XmlAttribute(name="sequenceRef" )']],
  [['xPos','Float'],['@XmlAttribute(name="xPos" )']],
  [['yPos','.'],['@XmlAttribute(name="yPos" )']],
  [['zPos','.'],['@XmlAttribute(name="zPos" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel, "Tree", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.title=null;
this.newick=null;
this.fontName=null;
this.fontSize=null;
this.fontStyle=null;
this.threshold=null;
this.showBootstrap=null;
this.showDistances=null;
this.markUnlinked=null;
this.fitToWindow=null;
this.currentTree=null;
this.id=null;
this.linkToAllViews=null;
this.width=null;
this.height=null;
this.xpos=null;
this.ypos=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTitle$', function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S', function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getNewick$', function () {
return this.newick;
});

Clazz.newMeth(C$, 'setNewick$S', function (value) {
this.newick=value;
});

Clazz.newMeth(C$, 'getFontName$', function () {
return this.fontName;
});

Clazz.newMeth(C$, 'setFontName$S', function (value) {
this.fontName=value;
});

Clazz.newMeth(C$, 'getFontSize$', function () {
return this.fontSize;
});

Clazz.newMeth(C$, 'setFontSize$Integer', function (value) {
this.fontSize=value;
});

Clazz.newMeth(C$, 'getFontStyle$', function () {
return this.fontStyle;
});

Clazz.newMeth(C$, 'setFontStyle$Integer', function (value) {
this.fontStyle=value;
});

Clazz.newMeth(C$, 'getThreshold$', function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$Float', function (value) {
this.threshold=value;
});

Clazz.newMeth(C$, 'isShowBootstrap$', function () {
return this.showBootstrap;
});

Clazz.newMeth(C$, 'setShowBootstrap$Boolean', function (value) {
this.showBootstrap=value;
});

Clazz.newMeth(C$, 'isShowDistances$', function () {
return this.showDistances;
});

Clazz.newMeth(C$, 'setShowDistances$Boolean', function (value) {
this.showDistances=value;
});

Clazz.newMeth(C$, 'isMarkUnlinked$', function () {
return this.markUnlinked;
});

Clazz.newMeth(C$, 'setMarkUnlinked$Boolean', function (value) {
this.markUnlinked=value;
});

Clazz.newMeth(C$, 'isFitToWindow$', function () {
return this.fitToWindow;
});

Clazz.newMeth(C$, 'setFitToWindow$Boolean', function (value) {
this.fitToWindow=value;
});

Clazz.newMeth(C$, 'isCurrentTree$', function () {
return this.currentTree;
});

Clazz.newMeth(C$, 'setCurrentTree$Boolean', function (value) {
this.currentTree=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'isLinkToAllViews$', function () {
if (this.linkToAllViews == null ) {
return false;
} else {
return (this.linkToAllViews).booleanValue$();
}});

Clazz.newMeth(C$, 'setLinkToAllViews$Boolean', function (value) {
this.linkToAllViews=value;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$Integer', function (value) {
this.width=value;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$Integer', function (value) {
this.height=value;
});

Clazz.newMeth(C$, 'getXpos$', function () {
return this.xpos;
});

Clazz.newMeth(C$, 'setXpos$Integer', function (value) {
this.xpos=value;
});

Clazz.newMeth(C$, 'getYpos$', function () {
return this.ypos;
});

Clazz.newMeth(C$, 'setYpos$Integer', function (value) {
this.ypos=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.Tree'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"title"  "newick"  } )']],
  [['title','String'],['@XmlElement(namespace="www.jalview.org" )']],
  [['newick','.'],['@XmlElement(namespace="www.jalview.org" )']],
  [['fontName','.'],['@XmlAttribute(name="fontName" )']],
  [['fontSize','Integer'],['@XmlAttribute(name="fontSize" )']],
  [['fontStyle','.'],['@XmlAttribute(name="fontStyle" )']],
  [['threshold','Float'],['@XmlAttribute(name="threshold" )']],
  [['showBootstrap','Boolean'],['@XmlAttribute(name="showBootstrap" )']],
  [['showDistances','.'],['@XmlAttribute(name="showDistances" )']],
  [['markUnlinked','.'],['@XmlAttribute(name="markUnlinked" )']],
  [['fitToWindow','.'],['@XmlAttribute(name="fitToWindow" )']],
  [['currentTree','.'],['@XmlAttribute(name="currentTree" )']],
  [['id','String'],['@XmlAttribute(name="id" )','@XmlJavaTypeAdapter("javax.xml.bind.annotation.adapters.CollapsedStringAdapter.class" )','@XmlID','@XmlSchemaType(name="ID" )']],
  [['linkToAllViews','Boolean'],['@XmlAttribute(name="linkToAllViews" )']],
  [['width','Integer'],['@XmlAttribute(name="width" )']],
  [['height','.'],['@XmlAttribute(name="height" )']],
  [['xpos','.'],['@XmlAttribute(name="xpos" )']],
  [['ypos','.'],['@XmlAttribute(name="ypos" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel, "UserColours", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.userColourScheme=null;
this.id=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getUserColourScheme$', function () {
return this.userColourScheme;
});

Clazz.newMeth(C$, 'setUserColourScheme$jalview_xml_binding_jalview_JalviewUserColours', function (value) {
this.userColourScheme=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.UserColours'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"userColourScheme"  } )']],
  [['userColourScheme','jalview.xml.binding.jalview.JalviewUserColours'],['@XmlElement(name="UserColourScheme" namespace="www.jalview.org" required="true" )']],
  [['id','String'],['@XmlAttribute(name="id" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel, "Viewport", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.annotationColours=null;
this.hiddenColumns=null;
this.calcIdParam=null;
this.conservationSelected=null;
this.pidSelected=null;
this.bgColour=null;
this.consThreshold=null;
this.pidThreshold=null;
this.title=null;
this.showFullId=null;
this.rightAlignIds=null;
this.showText=null;
this.showColourText=null;
this.showUnconserved=null;
this.showBoxes=null;
this.wrapAlignment=null;
this.renderGaps=null;
this.showSequenceFeatures=null;
this.showNPfeatureTooltip=null;
this.showDbRefTooltip=null;
this.followHighlight=null;
this.followSelection=null;
this.showAnnotation=null;
this.centreColumnLabels=null;
this.showGroupConservation=null;
this.showGroupConsensus=null;
this.showConsensusHistogram=null;
this.showSequenceLogo=null;
this.normaliseSequenceLogo=null;
this.ignoreGapsinConsensus=null;
this.startRes=null;
this.startSeq=null;
this.fontName=null;
this.fontSize=null;
this.fontStyle=null;
this.scaleProteinAsCdna=null;
this.viewName=null;
this.sequenceSetId=null;
this.gatheredViews=null;
this.textCol1=null;
this.textCol2=null;
this.textColThreshold=null;
this.id=null;
this.complementId=null;
this.width=null;
this.height=null;
this.xpos=null;
this.ypos=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getAnnotationColours$', function () {
return this.annotationColours;
});

Clazz.newMeth(C$, 'setAnnotationColours$jalview_xml_binding_jalview_AnnotationColourScheme', function (value) {
this.annotationColours=value;
});

Clazz.newMeth(C$, 'getHiddenColumns$', function () {
if (this.hiddenColumns == null ) {
this.hiddenColumns=Clazz.new_($I$(1));
}return this.hiddenColumns;
});

Clazz.newMeth(C$, 'getCalcIdParam$', function () {
if (this.calcIdParam == null ) {
this.calcIdParam=Clazz.new_($I$(1));
}return this.calcIdParam;
});

Clazz.newMeth(C$, 'isConservationSelected$', function () {
return this.conservationSelected;
});

Clazz.newMeth(C$, 'setConservationSelected$Boolean', function (value) {
this.conservationSelected=value;
});

Clazz.newMeth(C$, 'isPidSelected$', function () {
return this.pidSelected;
});

Clazz.newMeth(C$, 'setPidSelected$Boolean', function (value) {
this.pidSelected=value;
});

Clazz.newMeth(C$, 'getBgColour$', function () {
return this.bgColour;
});

Clazz.newMeth(C$, 'setBgColour$S', function (value) {
this.bgColour=value;
});

Clazz.newMeth(C$, 'getConsThreshold$', function () {
return this.consThreshold;
});

Clazz.newMeth(C$, 'setConsThreshold$Integer', function (value) {
this.consThreshold=value;
});

Clazz.newMeth(C$, 'getPidThreshold$', function () {
return this.pidThreshold;
});

Clazz.newMeth(C$, 'setPidThreshold$Integer', function (value) {
this.pidThreshold=value;
});

Clazz.newMeth(C$, 'getTitle$', function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S', function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'isShowFullId$', function () {
return this.showFullId;
});

Clazz.newMeth(C$, 'setShowFullId$Boolean', function (value) {
this.showFullId=value;
});

Clazz.newMeth(C$, 'isRightAlignIds$', function () {
return this.rightAlignIds;
});

Clazz.newMeth(C$, 'setRightAlignIds$Boolean', function (value) {
this.rightAlignIds=value;
});

Clazz.newMeth(C$, 'isShowText$', function () {
return this.showText;
});

Clazz.newMeth(C$, 'setShowText$Boolean', function (value) {
this.showText=value;
});

Clazz.newMeth(C$, 'isShowColourText$', function () {
return this.showColourText;
});

Clazz.newMeth(C$, 'setShowColourText$Boolean', function (value) {
this.showColourText=value;
});

Clazz.newMeth(C$, 'isShowUnconserved$', function () {
if (this.showUnconserved == null ) {
return false;
} else {
return (this.showUnconserved).booleanValue$();
}});

Clazz.newMeth(C$, 'setShowUnconserved$Boolean', function (value) {
this.showUnconserved=value;
});

Clazz.newMeth(C$, 'isShowBoxes$', function () {
return this.showBoxes;
});

Clazz.newMeth(C$, 'setShowBoxes$Boolean', function (value) {
this.showBoxes=value;
});

Clazz.newMeth(C$, 'isWrapAlignment$', function () {
return this.wrapAlignment;
});

Clazz.newMeth(C$, 'setWrapAlignment$Boolean', function (value) {
this.wrapAlignment=value;
});

Clazz.newMeth(C$, 'isRenderGaps$', function () {
return this.renderGaps;
});

Clazz.newMeth(C$, 'setRenderGaps$Boolean', function (value) {
this.renderGaps=value;
});

Clazz.newMeth(C$, 'isShowSequenceFeatures$', function () {
return this.showSequenceFeatures;
});

Clazz.newMeth(C$, 'setShowSequenceFeatures$Boolean', function (value) {
this.showSequenceFeatures=value;
});

Clazz.newMeth(C$, 'isShowNPfeatureTooltip$', function () {
return this.showNPfeatureTooltip;
});

Clazz.newMeth(C$, 'setShowNPfeatureTooltip$Boolean', function (value) {
this.showNPfeatureTooltip=value;
});

Clazz.newMeth(C$, 'isShowDbRefTooltip$', function () {
return this.showDbRefTooltip;
});

Clazz.newMeth(C$, 'setShowDbRefTooltip$Boolean', function (value) {
this.showDbRefTooltip=value;
});

Clazz.newMeth(C$, 'isFollowHighlight$', function () {
if (this.followHighlight == null ) {
return true;
} else {
return (this.followHighlight).booleanValue$();
}});

Clazz.newMeth(C$, 'setFollowHighlight$Boolean', function (value) {
this.followHighlight=value;
});

Clazz.newMeth(C$, 'isFollowSelection$', function () {
if (this.followSelection == null ) {
return true;
} else {
return (this.followSelection).booleanValue$();
}});

Clazz.newMeth(C$, 'setFollowSelection$Boolean', function (value) {
this.followSelection=value;
});

Clazz.newMeth(C$, 'isShowAnnotation$', function () {
return this.showAnnotation;
});

Clazz.newMeth(C$, 'setShowAnnotation$Boolean', function (value) {
this.showAnnotation=value;
});

Clazz.newMeth(C$, 'isCentreColumnLabels$', function () {
if (this.centreColumnLabels == null ) {
return false;
} else {
return (this.centreColumnLabels).booleanValue$();
}});

Clazz.newMeth(C$, 'setCentreColumnLabels$Boolean', function (value) {
this.centreColumnLabels=value;
});

Clazz.newMeth(C$, 'isShowGroupConservation$', function () {
if (this.showGroupConservation == null ) {
return false;
} else {
return (this.showGroupConservation).booleanValue$();
}});

Clazz.newMeth(C$, 'setShowGroupConservation$Boolean', function (value) {
this.showGroupConservation=value;
});

Clazz.newMeth(C$, 'isShowGroupConsensus$', function () {
if (this.showGroupConsensus == null ) {
return false;
} else {
return (this.showGroupConsensus).booleanValue$();
}});

Clazz.newMeth(C$, 'setShowGroupConsensus$Boolean', function (value) {
this.showGroupConsensus=value;
});

Clazz.newMeth(C$, 'isShowConsensusHistogram$', function () {
if (this.showConsensusHistogram == null ) {
return true;
} else {
return (this.showConsensusHistogram).booleanValue$();
}});

Clazz.newMeth(C$, 'setShowConsensusHistogram$Boolean', function (value) {
this.showConsensusHistogram=value;
});

Clazz.newMeth(C$, 'isShowSequenceLogo$', function () {
if (this.showSequenceLogo == null ) {
return false;
} else {
return (this.showSequenceLogo).booleanValue$();
}});

Clazz.newMeth(C$, 'setShowSequenceLogo$Boolean', function (value) {
this.showSequenceLogo=value;
});

Clazz.newMeth(C$, 'isNormaliseSequenceLogo$', function () {
if (this.normaliseSequenceLogo == null ) {
return false;
} else {
return (this.normaliseSequenceLogo).booleanValue$();
}});

Clazz.newMeth(C$, 'setNormaliseSequenceLogo$Boolean', function (value) {
this.normaliseSequenceLogo=value;
});

Clazz.newMeth(C$, 'isIgnoreGapsinConsensus$', function () {
if (this.ignoreGapsinConsensus == null ) {
return true;
} else {
return (this.ignoreGapsinConsensus).booleanValue$();
}});

Clazz.newMeth(C$, 'setIgnoreGapsinConsensus$Boolean', function (value) {
this.ignoreGapsinConsensus=value;
});

Clazz.newMeth(C$, 'getStartRes$', function () {
return this.startRes;
});

Clazz.newMeth(C$, 'setStartRes$Integer', function (value) {
this.startRes=value;
});

Clazz.newMeth(C$, 'getStartSeq$', function () {
return this.startSeq;
});

Clazz.newMeth(C$, 'setStartSeq$Integer', function (value) {
this.startSeq=value;
});

Clazz.newMeth(C$, 'getFontName$', function () {
return this.fontName;
});

Clazz.newMeth(C$, 'setFontName$S', function (value) {
this.fontName=value;
});

Clazz.newMeth(C$, 'getFontSize$', function () {
return this.fontSize;
});

Clazz.newMeth(C$, 'setFontSize$Integer', function (value) {
this.fontSize=value;
});

Clazz.newMeth(C$, 'getFontStyle$', function () {
return this.fontStyle;
});

Clazz.newMeth(C$, 'setFontStyle$Integer', function (value) {
this.fontStyle=value;
});

Clazz.newMeth(C$, 'isScaleProteinAsCdna$', function () {
if (this.scaleProteinAsCdna == null ) {
return true;
} else {
return (this.scaleProteinAsCdna).booleanValue$();
}});

Clazz.newMeth(C$, 'setScaleProteinAsCdna$Boolean', function (value) {
this.scaleProteinAsCdna=value;
});

Clazz.newMeth(C$, 'getViewName$', function () {
return this.viewName;
});

Clazz.newMeth(C$, 'setViewName$S', function (value) {
this.viewName=value;
});

Clazz.newMeth(C$, 'getSequenceSetId$', function () {
return this.sequenceSetId;
});

Clazz.newMeth(C$, 'setSequenceSetId$S', function (value) {
this.sequenceSetId=value;
});

Clazz.newMeth(C$, 'isGatheredViews$', function () {
return this.gatheredViews;
});

Clazz.newMeth(C$, 'setGatheredViews$Boolean', function (value) {
this.gatheredViews=value;
});

Clazz.newMeth(C$, 'getTextCol1$', function () {
return this.textCol1;
});

Clazz.newMeth(C$, 'setTextCol1$Integer', function (value) {
this.textCol1=value;
});

Clazz.newMeth(C$, 'getTextCol2$', function () {
return this.textCol2;
});

Clazz.newMeth(C$, 'setTextCol2$Integer', function (value) {
this.textCol2=value;
});

Clazz.newMeth(C$, 'getTextColThreshold$', function () {
return this.textColThreshold;
});

Clazz.newMeth(C$, 'setTextColThreshold$Integer', function (value) {
this.textColThreshold=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getComplementId$', function () {
return this.complementId;
});

Clazz.newMeth(C$, 'setComplementId$S', function (value) {
this.complementId=value;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$Integer', function (value) {
this.width=value;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$Integer', function (value) {
this.height=value;
});

Clazz.newMeth(C$, 'getXpos$', function () {
return this.xpos;
});

Clazz.newMeth(C$, 'setXpos$Integer', function (value) {
this.xpos=value;
});

Clazz.newMeth(C$, 'getYpos$', function () {
return this.ypos;
});

Clazz.newMeth(C$, 'setYpos$Integer', function (value) {
this.ypos=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.Viewport'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"annotationColours"  "hiddenColumns"  "calcIdParam"  } )']],
  [['annotationColours','jalview.xml.binding.jalview.AnnotationColourScheme'],['@XmlElement(name="AnnotationColours" namespace="www.jalview.org" )']],
  [['hiddenColumns','java.util.List<jalview.xml.binding.jalview.JalviewModel.Viewport.HiddenColumns>'],['@XmlElement(namespace="www.jalview.org" )']],
  [['calcIdParam','java.util.List<jalview.xml.binding.jalview.JalviewModel.Viewport.CalcIdParam>'],['@XmlElement(namespace="www.jalview.org" )']],
  [['conservationSelected','Boolean'],['@XmlAttribute(name="conservationSelected" )']],
  [['pidSelected','.'],['@XmlAttribute(name="pidSelected" )']],
  [['bgColour','String'],['@XmlAttribute(name="bgColour" )']],
  [['consThreshold','Integer'],['@XmlAttribute(name="consThreshold" )']],
  [['pidThreshold','.'],['@XmlAttribute(name="pidThreshold" )']],
  [['title','String'],['@XmlAttribute(name="title" )']],
  [['showFullId','Boolean'],['@XmlAttribute(name="showFullId" )']],
  [['rightAlignIds','.'],['@XmlAttribute(name="rightAlignIds" )']],
  [['showText','.'],['@XmlAttribute(name="showText" )']],
  [['showColourText','.'],['@XmlAttribute(name="showColourText" )']],
  [['showUnconserved','.'],['@XmlAttribute(name="showUnconserved" )']],
  [['showBoxes','.'],['@XmlAttribute(name="showBoxes" )']],
  [['wrapAlignment','.'],['@XmlAttribute(name="wrapAlignment" )']],
  [['renderGaps','.'],['@XmlAttribute(name="renderGaps" )']],
  [['showSequenceFeatures','.'],['@XmlAttribute(name="showSequenceFeatures" )']],
  [['showNPfeatureTooltip','.'],['@XmlAttribute(name="showNPfeatureTooltip" )']],
  [['showDbRefTooltip','.'],['@XmlAttribute(name="showDbRefTooltip" )']],
  [['followHighlight','.'],['@XmlAttribute(name="followHighlight" )']],
  [['followSelection','.'],['@XmlAttribute(name="followSelection" )']],
  [['showAnnotation','.'],['@XmlAttribute(name="showAnnotation" )']],
  [['centreColumnLabels','.'],['@XmlAttribute(name="centreColumnLabels" )']],
  [['showGroupConservation','.'],['@XmlAttribute(name="showGroupConservation" )']],
  [['showGroupConsensus','.'],['@XmlAttribute(name="showGroupConsensus" )']],
  [['showConsensusHistogram','.'],['@XmlAttribute(name="showConsensusHistogram" )']],
  [['showSequenceLogo','.'],['@XmlAttribute(name="showSequenceLogo" )']],
  [['normaliseSequenceLogo','.'],['@XmlAttribute(name="normaliseSequenceLogo" )']],
  [['ignoreGapsinConsensus','.'],['@XmlAttribute(name="ignoreGapsinConsensus" )']],
  [['startRes','Integer'],['@XmlAttribute(name="startRes" )']],
  [['startSeq','.'],['@XmlAttribute(name="startSeq" )']],
  [['fontName','String'],['@XmlAttribute(name="fontName" )']],
  [['fontSize','Integer'],['@XmlAttribute(name="fontSize" )']],
  [['fontStyle','.'],['@XmlAttribute(name="fontStyle" )']],
  [['scaleProteinAsCdna','Boolean'],['@XmlAttribute(name="scaleProteinAsCdna" )']],
  [['viewName','String'],['@XmlAttribute(name="viewName" )']],
  [['sequenceSetId','.'],['@XmlAttribute(name="sequenceSetId" )']],
  [['gatheredViews','Boolean'],['@XmlAttribute(name="gatheredViews" )']],
  [['textCol1','Integer'],['@XmlAttribute(name="textCol1" )']],
  [['textCol2','.'],['@XmlAttribute(name="textCol2" )']],
  [['textColThreshold','.'],['@XmlAttribute(name="textColThreshold" )']],
  [['id','String'],['@XmlAttribute(name="id" )','@XmlJavaTypeAdapter("javax.xml.bind.annotation.adapters.CollapsedStringAdapter.class" )','@XmlID','@XmlSchemaType(name="ID" )']],
  [['complementId','.'],['@XmlAttribute(name="complementId" )']],
  [['width','Integer'],['@XmlAttribute(name="width" )']],
  [['height','.'],['@XmlAttribute(name="height" )']],
  [['xpos','.'],['@XmlAttribute(name="xpos" )']],
  [['ypos','.'],['@XmlAttribute(name="ypos" )']],
  [['null','jalview.xml.binding.jalview.JalviewModel.Viewport.CalcIdParam'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.Viewport.HiddenColumns'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.Viewport, "CalcIdParam", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'jalview.xml.binding.jalview.WebServiceParameterSet');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.calcId=null;
this.needsUpdate=null;
this.autoUpdate=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCalcId$', function () {
return this.calcId;
});

Clazz.newMeth(C$, 'setCalcId$S', function (value) {
this.calcId=value;
});

Clazz.newMeth(C$, 'isNeedsUpdate$', function () {
if (this.needsUpdate == null ) {
return false;
} else {
return (this.needsUpdate).booleanValue$();
}});

Clazz.newMeth(C$, 'setNeedsUpdate$Boolean', function (value) {
this.needsUpdate=value;
});

Clazz.newMeth(C$, 'isAutoUpdate$', function () {
return this.autoUpdate;
});

Clazz.newMeth(C$, 'setAutoUpdate$Z', function (value) {
this.autoUpdate=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.Viewport.CalcIdParam'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['calcId','String'],['@XmlAttribute(name="calcId" required="true" )']],
  [['needsUpdate','Boolean'],['@XmlAttribute(name="needsUpdate" )']],
  [['autoUpdate','boolean'],['@XmlAttribute(name="autoUpdate" required="true" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.JalviewModel.Viewport, "HiddenColumns", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.start=null;
this.end=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$Integer', function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$Integer', function (value) {
this.end=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.JalviewModel.Viewport.HiddenColumns'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['start','Integer'],['@XmlAttribute(name="start" )']],
  [['end','.'],['@XmlAttribute(name="end" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
