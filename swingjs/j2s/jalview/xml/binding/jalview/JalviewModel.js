(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList','jalview.xml.binding.jalview.NoValueColour']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JalviewModel", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['FeatureSettings',9],['JGroup',9],['JSeq',9],['PcaViewer',9],['Tree',9],['UserColours',9],['Viewport',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['version'],'O',['creationDate','javax.xml.datatype.XMLGregorianCalendar','vamsasModel','jalview.xml.binding.jalview.VAMSAS','jSeq','java.util.List','+jGroup','+viewport','+userColours','+tree','+pcaViewer','featureSettings','jalview.xml.binding.jalview.JalviewModel.FeatureSettings']]]

Clazz.newMeth(C$, 'getCreationDate$',  function () {
return this.creationDate;
});

Clazz.newMeth(C$, 'setCreationDate$javax_xml_datatype_XMLGregorianCalendar',  function (value) {
this.creationDate=value;
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$S',  function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'getVamsasModel$',  function () {
return this.vamsasModel;
});

Clazz.newMeth(C$, 'setVamsasModel$jalview_xml_binding_jalview_VAMSAS',  function (value) {
this.vamsasModel=value;
});

Clazz.newMeth(C$, 'getJSeq$',  function () {
if (this.jSeq == null ) {
this.jSeq=Clazz.new_($I$(1,1));
}return this.jSeq;
});

Clazz.newMeth(C$, 'getJGroup$',  function () {
if (this.jGroup == null ) {
this.jGroup=Clazz.new_($I$(1,1));
}return this.jGroup;
});

Clazz.newMeth(C$, 'getViewport$',  function () {
if (this.viewport == null ) {
this.viewport=Clazz.new_($I$(1,1));
}return this.viewport;
});

Clazz.newMeth(C$, 'getUserColours$',  function () {
if (this.userColours == null ) {
this.userColours=Clazz.new_($I$(1,1));
}return this.userColours;
});

Clazz.newMeth(C$, 'getTree$',  function () {
if (this.tree == null ) {
this.tree=Clazz.new_($I$(1,1));
}return this.tree;
});

Clazz.newMeth(C$, 'getPcaViewer$',  function () {
if (this.pcaViewer == null ) {
this.pcaViewer=Clazz.new_($I$(1,1));
}return this.pcaViewer;
});

Clazz.newMeth(C$, 'getFeatureSettings$',  function () {
return this.featureSettings;
});

Clazz.newMeth(C$, 'setFeatureSettings$jalview_xml_binding_jalview_JalviewModel_FeatureSettings',  function (value) {
this.featureSettings=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="JalviewModel" namespace="www.jalview.org" propOrder={"creationDate"  "version"  "vamsasModel"  "jSeq"  "jGroup"  "viewport"  "userColours"  "tree"  "pcaViewer"  "featureSettings"  } ']],
  [['creationDate','javax.xml.datatype.XMLGregorianCalendar',null,['javax.xml.bind.annotation.XmlElement','javax.xml.bind.annotation.XmlSchemaType']],['required="true" ','name="dateTime" ']],
  [['version','String',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['vamsasModel','jalview.xml.binding.jalview.VAMSAS',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['jSeq','java.util.List<jalview.xml.binding.jalview.JalviewModel.JSeq>',null,['javax.xml.bind.annotation.XmlElement']],['name="JSeq" ']],
  [['jGroup','java.util.List<jalview.xml.binding.jalview.JalviewModel.JGroup>',null,['javax.xml.bind.annotation.XmlElement']],['name="JGroup" ']],
  [['viewport','java.util.List<jalview.xml.binding.jalview.JalviewModel.Viewport>',null,['javax.xml.bind.annotation.XmlElement']],['name="Viewport" ']],
  [['userColours','java.util.List<jalview.xml.binding.jalview.JalviewModel.UserColours>',null,['javax.xml.bind.annotation.XmlElement']],['name="UserColours" ']],
  [['pcaViewer','java.util.List<jalview.xml.binding.jalview.JalviewModel.PcaViewer>',null,['javax.xml.bind.annotation.XmlElement']],['name="PcaViewer" ']],
  [['featureSettings','jalview.xml.binding.jalview.JalviewModel.FeatureSettings',null,['javax.xml.bind.annotation.XmlElement']],['name="FeatureSettings" ']],
  [['null','jalview.xml.binding.jalview.JalviewModel.FeatureSettings'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JGroup'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JSeq'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.PcaViewer'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.Tree'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.UserColours'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.Viewport'],['!XmlInner']],
  [['tree','java.util.List<jalview.xml.binding.jalview.JalviewModel.Tree>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel, "FeatureSettings", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Group',9],['Setting',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['setting','java.util.List','+group']]]

Clazz.newMeth(C$, 'getSetting$',  function () {
if (this.setting == null ) {
this.setting=Clazz.new_($I$(1,1));
}return this.setting;
});

Clazz.newMeth(C$, 'getGroup$',  function () {
if (this.group == null ) {
this.group=Clazz.new_($I$(1,1));
}return this.group;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.FeatureSettings',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"setting"  "group"  } ']],
  [['setting','java.util.List<jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Setting>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['group','java.util.List<jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Group>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['null','jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Group'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Setting'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.FeatureSettings, "Group", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['display'],'S',['name']]]

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'isDisplay$',  function () {
return this.display;
});

Clazz.newMeth(C$, 'setDisplay$Z',  function (value) {
this.display=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Group',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['name','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="name" required="true" ']],
  [['display','boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="display" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.FeatureSettings, "Setting", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['display'],'I',['colour'],'S',['type'],'O',['attributeName','java.util.List','matcherSet','jalview.xml.binding.jalview.FeatureMatcherSet','order','Float','mincolour','Integer','noValueColour','jalview.xml.binding.jalview.NoValueColour','threshold','Float','threshstate','Integer','max','Float','+min','colourByLabel','Boolean','+autoScale']]]

Clazz.newMeth(C$, 'getAttributeName$',  function () {
if (this.attributeName == null ) {
this.attributeName=Clazz.new_($I$(1,1));
}return this.attributeName;
});

Clazz.newMeth(C$, 'getMatcherSet$',  function () {
return this.matcherSet;
});

Clazz.newMeth(C$, 'setMatcherSet$jalview_xml_binding_jalview_FeatureMatcherSet',  function (value) {
this.matcherSet=value;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S',  function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getColour$',  function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$I',  function (value) {
this.colour=value;
});

Clazz.newMeth(C$, 'isDisplay$',  function () {
return this.display;
});

Clazz.newMeth(C$, 'setDisplay$Z',  function (value) {
this.display=value;
});

Clazz.newMeth(C$, 'getOrder$',  function () {
return this.order;
});

Clazz.newMeth(C$, 'setOrder$Float',  function (value) {
this.order=value;
});

Clazz.newMeth(C$, 'getMincolour$',  function () {
return this.mincolour;
});

Clazz.newMeth(C$, 'setMincolour$Integer',  function (value) {
this.mincolour=value;
});

Clazz.newMeth(C$, 'getNoValueColour$',  function () {
if (this.noValueColour == null ) {
return $I$(2).MIN;
} else {
return this.noValueColour;
}});

Clazz.newMeth(C$, 'setNoValueColour$jalview_xml_binding_jalview_NoValueColour',  function (value) {
this.noValueColour=value;
});

Clazz.newMeth(C$, 'getThreshold$',  function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$Float',  function (value) {
this.threshold=value;
});

Clazz.newMeth(C$, 'getThreshstate$',  function () {
return this.threshstate;
});

Clazz.newMeth(C$, 'setThreshstate$Integer',  function (value) {
this.threshstate=value;
});

Clazz.newMeth(C$, 'getMax$',  function () {
return this.max;
});

Clazz.newMeth(C$, 'setMax$Float',  function (value) {
this.max=value;
});

Clazz.newMeth(C$, 'getMin$',  function () {
return this.min;
});

Clazz.newMeth(C$, 'setMin$Float',  function (value) {
this.min=value;
});

Clazz.newMeth(C$, 'isColourByLabel$',  function () {
return this.colourByLabel;
});

Clazz.newMeth(C$, 'setColourByLabel$Boolean',  function (value) {
this.colourByLabel=value;
});

Clazz.newMeth(C$, 'isAutoScale$',  function () {
return this.autoScale;
});

Clazz.newMeth(C$, 'setAutoScale$Boolean',  function (value) {
this.autoScale=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.FeatureSettings.Setting',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"attributeName"  "matcherSet"  } ']],
  [['attributeName','java.util.List<java.lang.String>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['matcherSet','jalview.xml.binding.jalview.FeatureMatcherSet',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['colour','int',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colour" required="true" ']],
  [['display','boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="display" required="true" ']],
  [['order','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="order" ']],
  [['mincolour','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="mincolour" ']],
  [['noValueColour','jalview.xml.binding.jalview.NoValueColour',null,['javax.xml.bind.annotation.XmlAttribute']],['name="noValueColour" ']],
  [['threshold','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="threshold" ']],
  [['threshstate','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="threshstate" ']],
  [['max','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="max" ']],
  [['min','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="min" ']],
  [['colourByLabel','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colourByLabel" ']],
  [['autoScale','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="autoScale" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel, "JGroup", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','colour','id'],'O',['seq','java.util.List','annotationColours','jalview.xml.binding.jalview.AnnotationColourScheme','start','Integer','+end','+consThreshold','+pidThreshold','+outlineColour','displayBoxes','Boolean','+displayText','+colourText','textCol1','Integer','+textCol2','+textColThreshold','showUnconserved','Boolean','+ignoreGapsinConsensus','+showConsensusHistogram','+showSequenceLogo','+normaliseSequenceLogo']]]

Clazz.newMeth(C$, 'getSeq$',  function () {
if (this.seq == null ) {
this.seq=Clazz.new_($I$(1,1));
}return this.seq;
});

Clazz.newMeth(C$, 'getAnnotationColours$',  function () {
return this.annotationColours;
});

Clazz.newMeth(C$, 'setAnnotationColours$jalview_xml_binding_jalview_AnnotationColourScheme',  function (value) {
this.annotationColours=value;
});

Clazz.newMeth(C$, 'getStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$Integer',  function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$Integer',  function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getColour$',  function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$S',  function (value) {
this.colour=value;
});

Clazz.newMeth(C$, 'getConsThreshold$',  function () {
return this.consThreshold;
});

Clazz.newMeth(C$, 'setConsThreshold$Integer',  function (value) {
this.consThreshold=value;
});

Clazz.newMeth(C$, 'getPidThreshold$',  function () {
return this.pidThreshold;
});

Clazz.newMeth(C$, 'setPidThreshold$Integer',  function (value) {
this.pidThreshold=value;
});

Clazz.newMeth(C$, 'getOutlineColour$',  function () {
return this.outlineColour;
});

Clazz.newMeth(C$, 'setOutlineColour$Integer',  function (value) {
this.outlineColour=value;
});

Clazz.newMeth(C$, 'isDisplayBoxes$',  function () {
return this.displayBoxes;
});

Clazz.newMeth(C$, 'setDisplayBoxes$Boolean',  function (value) {
this.displayBoxes=value;
});

Clazz.newMeth(C$, 'isDisplayText$',  function () {
return this.displayText;
});

Clazz.newMeth(C$, 'setDisplayText$Boolean',  function (value) {
this.displayText=value;
});

Clazz.newMeth(C$, 'isColourText$',  function () {
return this.colourText;
});

Clazz.newMeth(C$, 'setColourText$Boolean',  function (value) {
this.colourText=value;
});

Clazz.newMeth(C$, 'getTextCol1$',  function () {
return this.textCol1;
});

Clazz.newMeth(C$, 'setTextCol1$Integer',  function (value) {
this.textCol1=value;
});

Clazz.newMeth(C$, 'getTextCol2$',  function () {
return this.textCol2;
});

Clazz.newMeth(C$, 'setTextCol2$Integer',  function (value) {
this.textCol2=value;
});

Clazz.newMeth(C$, 'getTextColThreshold$',  function () {
return this.textColThreshold;
});

Clazz.newMeth(C$, 'setTextColThreshold$Integer',  function (value) {
this.textColThreshold=value;
});

Clazz.newMeth(C$, 'isShowUnconserved$',  function () {
return this.showUnconserved;
});

Clazz.newMeth(C$, 'setShowUnconserved$Boolean',  function (value) {
this.showUnconserved=value;
});

Clazz.newMeth(C$, 'isIgnoreGapsinConsensus$',  function () {
if (this.ignoreGapsinConsensus == null ) {
return true;
} else {
return (this.ignoreGapsinConsensus).valueOf();
}});

Clazz.newMeth(C$, 'setIgnoreGapsinConsensus$Boolean',  function (value) {
this.ignoreGapsinConsensus=value;
});

Clazz.newMeth(C$, 'isShowConsensusHistogram$',  function () {
if (this.showConsensusHistogram == null ) {
return true;
} else {
return (this.showConsensusHistogram).valueOf();
}});

Clazz.newMeth(C$, 'setShowConsensusHistogram$Boolean',  function (value) {
this.showConsensusHistogram=value;
});

Clazz.newMeth(C$, 'isShowSequenceLogo$',  function () {
if (this.showSequenceLogo == null ) {
return false;
} else {
return (this.showSequenceLogo).valueOf();
}});

Clazz.newMeth(C$, 'setShowSequenceLogo$Boolean',  function (value) {
this.showSequenceLogo=value;
});

Clazz.newMeth(C$, 'isNormaliseSequenceLogo$',  function () {
if (this.normaliseSequenceLogo == null ) {
return false;
} else {
return (this.normaliseSequenceLogo).valueOf();
}});

Clazz.newMeth(C$, 'setNormaliseSequenceLogo$Boolean',  function (value) {
this.normaliseSequenceLogo=value;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.JGroup',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"seq"  "annotationColours"  } ']],
  [['seq','java.util.List<java.lang.String>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" required="true" ']],
  [['annotationColours','jalview.xml.binding.jalview.AnnotationColourScheme',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['start','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="start" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" ']],
  [['name','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="name" ']],
  [['colour','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colour" ']],
  [['consThreshold','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="consThreshold" ']],
  [['pidThreshold','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="pidThreshold" ']],
  [['outlineColour','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="outlineColour" ']],
  [['displayBoxes','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="displayBoxes" ']],
  [['displayText','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="displayText" ']],
  [['colourText','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colourText" ']],
  [['textCol1','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="textCol1" ']],
  [['textCol2','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="textCol2" ']],
  [['textColThreshold','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="textColThreshold" ']],
  [['showUnconserved','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showUnconserved" ']],
  [['ignoreGapsinConsensus','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ignoreGapsinConsensus" ']],
  [['showConsensusHistogram','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showConsensusHistogram" ']],
  [['showSequenceLogo','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showSequenceLogo" ']],
  [['normaliseSequenceLogo','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="normaliseSequenceLogo" ']],
  [['id','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel, "JSeq", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Pdbids',9],['RnaViewer',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','end'],'S',['id'],'O',['features','java.util.List','+pdbids','+hiddenSequences','+rnaViewer','colour','Integer','hidden','Boolean','+viewreference']]]

Clazz.newMeth(C$, 'getFeatures$',  function () {
if (this.features == null ) {
this.features=Clazz.new_($I$(1,1));
}return this.features;
});

Clazz.newMeth(C$, 'getPdbids$',  function () {
if (this.pdbids == null ) {
this.pdbids=Clazz.new_($I$(1,1));
}return this.pdbids;
});

Clazz.newMeth(C$, 'getHiddenSequences$',  function () {
if (this.hiddenSequences == null ) {
this.hiddenSequences=Clazz.new_($I$(1,1));
}return this.hiddenSequences;
});

Clazz.newMeth(C$, 'getRnaViewer$',  function () {
if (this.rnaViewer == null ) {
this.rnaViewer=Clazz.new_($I$(1,1));
}return this.rnaViewer;
});

Clazz.newMeth(C$, 'getColour$',  function () {
return this.colour;
});

Clazz.newMeth(C$, 'setColour$Integer',  function (value) {
this.colour=value;
});

Clazz.newMeth(C$, 'getStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$I',  function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$I',  function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'isHidden$',  function () {
return this.hidden;
});

Clazz.newMeth(C$, 'setHidden$Boolean',  function (value) {
this.hidden=value;
});

Clazz.newMeth(C$, 'isViewreference$',  function () {
return this.viewreference;
});

Clazz.newMeth(C$, 'setViewreference$Boolean',  function (value) {
this.viewreference=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.JSeq',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"features"  "pdbids"  "hiddenSequences"  "rnaViewer"  } ']],
  [['features','java.util.List<jalview.xml.binding.jalview.Feature>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['pdbids','java.util.List<jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['hiddenSequences','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" type="java.lang.Integer.class" ']],
  [['rnaViewer','java.util.List<jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['colour','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colour" ']],
  [['start','int',null,['javax.xml.bind.annotation.XmlAttribute']],['name="start" required="true" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" required="true" ']],
  [['id','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" required="true" ']],
  [['hidden','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="hidden" ']],
  [['viewreference','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="viewreference" ']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.JSeq, "Pdbids", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'jalview.xml.binding.jalview.Pdbentry');
C$.$classes$=[['StructureState',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['structureState','java.util.List']]]

Clazz.newMeth(C$, 'getStructureState$',  function () {
if (this.structureState == null ) {
this.structureState=Clazz.new_($I$(1,1));
}return this.structureState;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"structureState"  } ']],
  [['structureState','java.util.List<jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids.StructureState>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids.StructureState'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.JSeq.Pdbids, "StructureState", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value','viewId','type'],'O',['visible','Boolean','+alignwithAlignPanel','+colourwithAlignPanel','+colourByJmol','width','Integer','+height','+xpos','+ypos']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'setVisible$Boolean',  function (value) {
this.visible=value;
});

Clazz.newMeth(C$, 'getViewId$',  function () {
return this.viewId;
});

Clazz.newMeth(C$, 'setViewId$S',  function (value) {
this.viewId=value;
});

Clazz.newMeth(C$, 'isAlignwithAlignPanel$',  function () {
if (this.alignwithAlignPanel == null ) {
return true;
} else {
return (this.alignwithAlignPanel).valueOf();
}});

Clazz.newMeth(C$, 'setAlignwithAlignPanel$Boolean',  function (value) {
this.alignwithAlignPanel=value;
});

Clazz.newMeth(C$, 'isColourwithAlignPanel$',  function () {
if (this.colourwithAlignPanel == null ) {
return false;
} else {
return (this.colourwithAlignPanel).valueOf();
}});

Clazz.newMeth(C$, 'setColourwithAlignPanel$Boolean',  function (value) {
this.colourwithAlignPanel=value;
});

Clazz.newMeth(C$, 'isColourByJmol$',  function () {
if (this.colourByJmol == null ) {
return true;
} else {
return (this.colourByJmol).valueOf();
}});

Clazz.newMeth(C$, 'setColourByJmol$Boolean',  function (value) {
this.colourByJmol=value;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S',  function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$Integer',  function (value) {
this.width=value;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$Integer',  function (value) {
this.height=value;
});

Clazz.newMeth(C$, 'getXpos$',  function () {
return this.xpos;
});

Clazz.newMeth(C$, 'setXpos$Integer',  function (value) {
this.xpos=value;
});

Clazz.newMeth(C$, 'getYpos$',  function () {
return this.ypos;
});

Clazz.newMeth(C$, 'setYpos$Integer',  function (value) {
this.ypos=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids.StructureState',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['visible','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="visible" ']],
  [['viewId','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="viewId" ']],
  [['alignwithAlignPanel','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="alignwithAlignPanel" ']],
  [['colourwithAlignPanel','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colourwithAlignPanel" ']],
  [['colourByJmol','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="colourByJmol" ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" ']],
  [['width','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="width" ']],
  [['height','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="height" ']],
  [['xpos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="xpos" ']],
  [['ypos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ypos" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.JSeq, "RnaViewer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['SecondaryStructure',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['title','viewId'],'O',['secondaryStructure','java.util.List','dividerLocation','Integer','+selectedRna','+width','+height','+xpos','+ypos']]]

Clazz.newMeth(C$, 'getSecondaryStructure$',  function () {
if (this.secondaryStructure == null ) {
this.secondaryStructure=Clazz.new_($I$(1,1));
}return this.secondaryStructure;
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S',  function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getViewId$',  function () {
return this.viewId;
});

Clazz.newMeth(C$, 'setViewId$S',  function (value) {
this.viewId=value;
});

Clazz.newMeth(C$, 'getDividerLocation$',  function () {
return this.dividerLocation;
});

Clazz.newMeth(C$, 'setDividerLocation$Integer',  function (value) {
this.dividerLocation=value;
});

Clazz.newMeth(C$, 'getSelectedRna$',  function () {
return this.selectedRna;
});

Clazz.newMeth(C$, 'setSelectedRna$Integer',  function (value) {
this.selectedRna=value;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$Integer',  function (value) {
this.width=value;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$Integer',  function (value) {
this.height=value;
});

Clazz.newMeth(C$, 'getXpos$',  function () {
return this.xpos;
});

Clazz.newMeth(C$, 'setXpos$Integer',  function (value) {
this.xpos=value;
});

Clazz.newMeth(C$, 'getYpos$',  function () {
return this.ypos;
});

Clazz.newMeth(C$, 'setYpos$Integer',  function (value) {
this.ypos=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"secondaryStructure"  } ']],
  [['secondaryStructure','java.util.List<jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer.SecondaryStructure>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" required="true" ']],
  [['title','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="title" ']],
  [['viewId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="viewId" ']],
  [['dividerLocation','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dividerLocation" ']],
  [['selectedRna','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="selectedRna" ']],
  [['width','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="width" ']],
  [['height','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="height" ']],
  [['xpos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="xpos" ']],
  [['ypos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ypos" ']],
  [['null','jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer.SecondaryStructure'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.JSeq.RnaViewer, "SecondaryStructure", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['title','annotationId','viewerState'],'O',['gapped','Boolean']]]

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S',  function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getAnnotationId$',  function () {
return this.annotationId;
});

Clazz.newMeth(C$, 'setAnnotationId$S',  function (value) {
this.annotationId=value;
});

Clazz.newMeth(C$, 'isGapped$',  function () {
return this.gapped;
});

Clazz.newMeth(C$, 'setGapped$Boolean',  function (value) {
this.gapped=value;
});

Clazz.newMeth(C$, 'getViewerState$',  function () {
return this.viewerState;
});

Clazz.newMeth(C$, 'setViewerState$S',  function (value) {
this.viewerState=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.JSeq.RnaViewer.SecondaryStructure',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['title','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="title" ']],
  [['annotationId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="annotationId" required="true" ']],
  [['gapped','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="gapped" ']],
  [['viewerState','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="viewerState" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel, "PcaViewer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Axis',9],['SeqPointMax',9],['SeqPointMin',9],['SequencePoint',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['title','scoreModelName'],'O',['sequencePoint','java.util.List','+axis','seqPointMin','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMin','seqPointMax','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMax','pcaData','jalview.xml.binding.jalview.PcaDataType','xDim','Integer','+yDim','+zDim','+bgColour','scaleFactor','Float','showLabels','Boolean','+linkToAllViews','width','Integer','+height','+xpos','+ypos','includeGaps','Boolean','+matchGaps','+includeGappedColumns','+denominateByShortestLength']]]

Clazz.newMeth(C$, 'getSequencePoint$',  function () {
if (this.sequencePoint == null ) {
this.sequencePoint=Clazz.new_($I$(1,1));
}return this.sequencePoint;
});

Clazz.newMeth(C$, 'getAxis$',  function () {
if (this.axis == null ) {
this.axis=Clazz.new_($I$(1,1));
}return this.axis;
});

Clazz.newMeth(C$, 'getSeqPointMin$',  function () {
return this.seqPointMin;
});

Clazz.newMeth(C$, 'setSeqPointMin$jalview_xml_binding_jalview_JalviewModel_PcaViewer_SeqPointMin',  function (value) {
this.seqPointMin=value;
});

Clazz.newMeth(C$, 'getSeqPointMax$',  function () {
return this.seqPointMax;
});

Clazz.newMeth(C$, 'setSeqPointMax$jalview_xml_binding_jalview_JalviewModel_PcaViewer_SeqPointMax',  function (value) {
this.seqPointMax=value;
});

Clazz.newMeth(C$, 'getPcaData$',  function () {
return this.pcaData;
});

Clazz.newMeth(C$, 'setPcaData$jalview_xml_binding_jalview_PcaDataType',  function (value) {
this.pcaData=value;
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S',  function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getScoreModelName$',  function () {
return this.scoreModelName;
});

Clazz.newMeth(C$, 'setScoreModelName$S',  function (value) {
this.scoreModelName=value;
});

Clazz.newMeth(C$, 'getXDim$',  function () {
return this.xDim;
});

Clazz.newMeth(C$, 'setXDim$Integer',  function (value) {
this.xDim=value;
});

Clazz.newMeth(C$, 'getYDim$',  function () {
return this.yDim;
});

Clazz.newMeth(C$, 'setYDim$Integer',  function (value) {
this.yDim=value;
});

Clazz.newMeth(C$, 'getZDim$',  function () {
return this.zDim;
});

Clazz.newMeth(C$, 'setZDim$Integer',  function (value) {
this.zDim=value;
});

Clazz.newMeth(C$, 'getBgColour$',  function () {
return this.bgColour;
});

Clazz.newMeth(C$, 'setBgColour$Integer',  function (value) {
this.bgColour=value;
});

Clazz.newMeth(C$, 'getScaleFactor$',  function () {
return this.scaleFactor;
});

Clazz.newMeth(C$, 'setScaleFactor$Float',  function (value) {
this.scaleFactor=value;
});

Clazz.newMeth(C$, 'isShowLabels$',  function () {
return this.showLabels;
});

Clazz.newMeth(C$, 'setShowLabels$Boolean',  function (value) {
this.showLabels=value;
});

Clazz.newMeth(C$, 'isLinkToAllViews$',  function () {
return this.linkToAllViews;
});

Clazz.newMeth(C$, 'setLinkToAllViews$Boolean',  function (value) {
this.linkToAllViews=value;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$Integer',  function (value) {
this.width=value;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$Integer',  function (value) {
this.height=value;
});

Clazz.newMeth(C$, 'getXpos$',  function () {
return this.xpos;
});

Clazz.newMeth(C$, 'setXpos$Integer',  function (value) {
this.xpos=value;
});

Clazz.newMeth(C$, 'getYpos$',  function () {
return this.ypos;
});

Clazz.newMeth(C$, 'setYpos$Integer',  function (value) {
this.ypos=value;
});

Clazz.newMeth(C$, 'isIncludeGaps$',  function () {
return this.includeGaps;
});

Clazz.newMeth(C$, 'setIncludeGaps$Boolean',  function (value) {
this.includeGaps=value;
});

Clazz.newMeth(C$, 'isMatchGaps$',  function () {
return this.matchGaps;
});

Clazz.newMeth(C$, 'setMatchGaps$Boolean',  function (value) {
this.matchGaps=value;
});

Clazz.newMeth(C$, 'isIncludeGappedColumns$',  function () {
return this.includeGappedColumns;
});

Clazz.newMeth(C$, 'setIncludeGappedColumns$Boolean',  function (value) {
this.includeGappedColumns=value;
});

Clazz.newMeth(C$, 'isDenominateByShortestLength$',  function () {
return this.denominateByShortestLength;
});

Clazz.newMeth(C$, 'setDenominateByShortestLength$Boolean',  function (value) {
this.denominateByShortestLength=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.PcaViewer',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"sequencePoint"  "axis"  "seqPointMin"  "seqPointMax"  "pcaData"  } ']],
  [['sequencePoint','java.util.List<jalview.xml.binding.jalview.JalviewModel.PcaViewer.SequencePoint>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" required="true" ']],
  [['axis','java.util.List<jalview.xml.binding.jalview.JalviewModel.PcaViewer.Axis>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" required="true" ']],
  [['seqPointMin','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMin',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" required="true" ']],
  [['seqPointMax','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMax',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" required="true" ']],
  [['pcaData','jalview.xml.binding.jalview.PcaDataType',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" required="true" ']],
  [['title','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="title" ']],
  [['scoreModelName','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="scoreModelName" ']],
  [['xDim','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="xDim" ']],
  [['yDim','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="yDim" ']],
  [['zDim','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="zDim" ']],
  [['bgColour','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="bgColour" ']],
  [['scaleFactor','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="scaleFactor" ']],
  [['showLabels','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showLabels" ']],
  [['linkToAllViews','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="linkToAllViews" ']],
  [['width','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="width" ']],
  [['height','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="height" ']],
  [['xpos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="xpos" ']],
  [['ypos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ypos" ']],
  [['includeGaps','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="includeGaps" ']],
  [['matchGaps','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="matchGaps" ']],
  [['includeGappedColumns','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="includeGappedColumns" ']],
  [['denominateByShortestLength','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="denominateByShortestLength" ']],
  [['null','jalview.xml.binding.jalview.JalviewModel.PcaViewer.Axis'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMax'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMin'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.PcaViewer.SequencePoint'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.PcaViewer, "Axis", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['xPos','Float','+yPos','+zPos']]]

Clazz.newMeth(C$, 'getXPos$',  function () {
return this.xPos;
});

Clazz.newMeth(C$, 'setXPos$Float',  function (value) {
this.xPos=value;
});

Clazz.newMeth(C$, 'getYPos$',  function () {
return this.yPos;
});

Clazz.newMeth(C$, 'setYPos$Float',  function (value) {
this.yPos=value;
});

Clazz.newMeth(C$, 'getZPos$',  function () {
return this.zPos;
});

Clazz.newMeth(C$, 'setZPos$Float',  function (value) {
this.zPos=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.PcaViewer.Axis',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['xPos','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="xPos" ']],
  [['yPos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="yPos" ']],
  [['zPos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="zPos" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.PcaViewer, "SeqPointMax", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['xPos','Float','+yPos','+zPos']]]

Clazz.newMeth(C$, 'getXPos$',  function () {
return this.xPos;
});

Clazz.newMeth(C$, 'setXPos$Float',  function (value) {
this.xPos=value;
});

Clazz.newMeth(C$, 'getYPos$',  function () {
return this.yPos;
});

Clazz.newMeth(C$, 'setYPos$Float',  function (value) {
this.yPos=value;
});

Clazz.newMeth(C$, 'getZPos$',  function () {
return this.zPos;
});

Clazz.newMeth(C$, 'setZPos$Float',  function (value) {
this.zPos=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMax',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['xPos','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="xPos" ']],
  [['yPos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="yPos" ']],
  [['zPos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="zPos" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.PcaViewer, "SeqPointMin", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['xPos','Float','+yPos','+zPos']]]

Clazz.newMeth(C$, 'getXPos$',  function () {
return this.xPos;
});

Clazz.newMeth(C$, 'setXPos$Float',  function (value) {
this.xPos=value;
});

Clazz.newMeth(C$, 'getYPos$',  function () {
return this.yPos;
});

Clazz.newMeth(C$, 'setYPos$Float',  function (value) {
this.yPos=value;
});

Clazz.newMeth(C$, 'getZPos$',  function () {
return this.zPos;
});

Clazz.newMeth(C$, 'setZPos$Float',  function (value) {
this.zPos=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.PcaViewer.SeqPointMin',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['xPos','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="xPos" ']],
  [['yPos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="yPos" ']],
  [['zPos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="zPos" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.PcaViewer, "SequencePoint", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['sequenceRef'],'O',['xPos','Float','+yPos','+zPos']]]

Clazz.newMeth(C$, 'getSequenceRef$',  function () {
return this.sequenceRef;
});

Clazz.newMeth(C$, 'setSequenceRef$S',  function (value) {
this.sequenceRef=value;
});

Clazz.newMeth(C$, 'getXPos$',  function () {
return this.xPos;
});

Clazz.newMeth(C$, 'setXPos$Float',  function (value) {
this.xPos=value;
});

Clazz.newMeth(C$, 'getYPos$',  function () {
return this.yPos;
});

Clazz.newMeth(C$, 'setYPos$Float',  function (value) {
this.yPos=value;
});

Clazz.newMeth(C$, 'getZPos$',  function () {
return this.zPos;
});

Clazz.newMeth(C$, 'setZPos$Float',  function (value) {
this.zPos=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.PcaViewer.SequencePoint',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['sequenceRef','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="sequenceRef" ']],
  [['xPos','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="xPos" ']],
  [['yPos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="yPos" ']],
  [['zPos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="zPos" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel, "Tree", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['title','newick','fontName','id'],'O',['fontSize','Integer','+fontStyle','threshold','Float','showBootstrap','Boolean','+showDistances','+markUnlinked','+fitToWindow','+currentTree','+linkToAllViews','width','Integer','+height','+xpos','+ypos']]]

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S',  function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getNewick$',  function () {
return this.newick;
});

Clazz.newMeth(C$, 'setNewick$S',  function (value) {
this.newick=value;
});

Clazz.newMeth(C$, 'getFontName$',  function () {
return this.fontName;
});

Clazz.newMeth(C$, 'setFontName$S',  function (value) {
this.fontName=value;
});

Clazz.newMeth(C$, 'getFontSize$',  function () {
return this.fontSize;
});

Clazz.newMeth(C$, 'setFontSize$Integer',  function (value) {
this.fontSize=value;
});

Clazz.newMeth(C$, 'getFontStyle$',  function () {
return this.fontStyle;
});

Clazz.newMeth(C$, 'setFontStyle$Integer',  function (value) {
this.fontStyle=value;
});

Clazz.newMeth(C$, 'getThreshold$',  function () {
return this.threshold;
});

Clazz.newMeth(C$, 'setThreshold$Float',  function (value) {
this.threshold=value;
});

Clazz.newMeth(C$, 'isShowBootstrap$',  function () {
return this.showBootstrap;
});

Clazz.newMeth(C$, 'setShowBootstrap$Boolean',  function (value) {
this.showBootstrap=value;
});

Clazz.newMeth(C$, 'isShowDistances$',  function () {
return this.showDistances;
});

Clazz.newMeth(C$, 'setShowDistances$Boolean',  function (value) {
this.showDistances=value;
});

Clazz.newMeth(C$, 'isMarkUnlinked$',  function () {
return this.markUnlinked;
});

Clazz.newMeth(C$, 'setMarkUnlinked$Boolean',  function (value) {
this.markUnlinked=value;
});

Clazz.newMeth(C$, 'isFitToWindow$',  function () {
return this.fitToWindow;
});

Clazz.newMeth(C$, 'setFitToWindow$Boolean',  function (value) {
this.fitToWindow=value;
});

Clazz.newMeth(C$, 'isCurrentTree$',  function () {
return this.currentTree;
});

Clazz.newMeth(C$, 'setCurrentTree$Boolean',  function (value) {
this.currentTree=value;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'isLinkToAllViews$',  function () {
if (this.linkToAllViews == null ) {
return false;
} else {
return (this.linkToAllViews).valueOf();
}});

Clazz.newMeth(C$, 'setLinkToAllViews$Boolean',  function (value) {
this.linkToAllViews=value;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$Integer',  function (value) {
this.width=value;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$Integer',  function (value) {
this.height=value;
});

Clazz.newMeth(C$, 'getXpos$',  function () {
return this.xpos;
});

Clazz.newMeth(C$, 'setXpos$Integer',  function (value) {
this.xpos=value;
});

Clazz.newMeth(C$, 'getYpos$',  function () {
return this.ypos;
});

Clazz.newMeth(C$, 'setYpos$Integer',  function (value) {
this.ypos=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.Tree',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"title"  "newick"  } ']],
  [['title','String',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['newick','.',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['fontName','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="fontName" ']],
  [['fontSize','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="fontSize" ']],
  [['fontStyle','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="fontStyle" ']],
  [['threshold','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="threshold" ']],
  [['showBootstrap','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showBootstrap" ']],
  [['showDistances','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showDistances" ']],
  [['markUnlinked','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="markUnlinked" ']],
  [['fitToWindow','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="fitToWindow" ']],
  [['currentTree','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="currentTree" ']],
  [['id','String',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter','javax.xml.bind.annotation.XmlID','javax.xml.bind.annotation.XmlSchemaType']],['name="id" ','"javax.xml.bind.annotation.adapters.CollapsedStringAdapter.class" ','','name="ID" ']],
  [['linkToAllViews','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="linkToAllViews" ']],
  [['width','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="width" ']],
  [['height','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="height" ']],
  [['xpos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="xpos" ']],
  [['ypos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ypos" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel, "UserColours", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['id'],'O',['userColourScheme','jalview.xml.binding.jalview.JalviewUserColours']]]

Clazz.newMeth(C$, 'getUserColourScheme$',  function () {
return this.userColourScheme;
});

Clazz.newMeth(C$, 'setUserColourScheme$jalview_xml_binding_jalview_JalviewUserColours',  function (value) {
this.userColourScheme=value;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.UserColours',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"userColourScheme"  } ']],
  [['userColourScheme','jalview.xml.binding.jalview.JalviewUserColours',null,['javax.xml.bind.annotation.XmlElement']],['name="UserColourScheme" namespace="www.jalview.org" required="true" ']],
  [['id','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel, "Viewport", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['CalcIdParam',9],['HiddenColumns',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['bgColour','title','fontName','viewName','sequenceSetId','id','complementId'],'O',['annotationColours','jalview.xml.binding.jalview.AnnotationColourScheme','hiddenColumns','java.util.List','+calcIdParam','conservationSelected','Boolean','+pidSelected','consThreshold','Integer','+pidThreshold','showFullId','Boolean','+rightAlignIds','+showText','+showColourText','+showUnconserved','+showBoxes','+wrapAlignment','+renderGaps','+showSequenceFeatures','+showNPfeatureTooltip','+showDbRefTooltip','+followHighlight','+followSelection','+showAnnotation','+centreColumnLabels','+showGroupConservation','+showGroupConsensus','+showConsensusHistogram','+showSequenceLogo','+normaliseSequenceLogo','+ignoreGapsinConsensus','startRes','Integer','+startSeq','+fontSize','+fontStyle','scaleProteinAsCdna','Boolean','+gatheredViews','textCol1','Integer','+textCol2','+textColThreshold','showComplementFeatures','Boolean','+showComplementFeaturesOnTop','width','Integer','+height','+xpos','+ypos']]]

Clazz.newMeth(C$, 'getAnnotationColours$',  function () {
return this.annotationColours;
});

Clazz.newMeth(C$, 'setAnnotationColours$jalview_xml_binding_jalview_AnnotationColourScheme',  function (value) {
this.annotationColours=value;
});

Clazz.newMeth(C$, 'getHiddenColumns$',  function () {
if (this.hiddenColumns == null ) {
this.hiddenColumns=Clazz.new_($I$(1,1));
}return this.hiddenColumns;
});

Clazz.newMeth(C$, 'getCalcIdParam$',  function () {
if (this.calcIdParam == null ) {
this.calcIdParam=Clazz.new_($I$(1,1));
}return this.calcIdParam;
});

Clazz.newMeth(C$, 'isConservationSelected$',  function () {
return this.conservationSelected;
});

Clazz.newMeth(C$, 'setConservationSelected$Boolean',  function (value) {
this.conservationSelected=value;
});

Clazz.newMeth(C$, 'isPidSelected$',  function () {
return this.pidSelected;
});

Clazz.newMeth(C$, 'setPidSelected$Boolean',  function (value) {
this.pidSelected=value;
});

Clazz.newMeth(C$, 'getBgColour$',  function () {
return this.bgColour;
});

Clazz.newMeth(C$, 'setBgColour$S',  function (value) {
this.bgColour=value;
});

Clazz.newMeth(C$, 'getConsThreshold$',  function () {
return this.consThreshold;
});

Clazz.newMeth(C$, 'setConsThreshold$Integer',  function (value) {
this.consThreshold=value;
});

Clazz.newMeth(C$, 'getPidThreshold$',  function () {
return this.pidThreshold;
});

Clazz.newMeth(C$, 'setPidThreshold$Integer',  function (value) {
this.pidThreshold=value;
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S',  function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'isShowFullId$',  function () {
return this.showFullId;
});

Clazz.newMeth(C$, 'setShowFullId$Boolean',  function (value) {
this.showFullId=value;
});

Clazz.newMeth(C$, 'isRightAlignIds$',  function () {
return this.rightAlignIds;
});

Clazz.newMeth(C$, 'setRightAlignIds$Boolean',  function (value) {
this.rightAlignIds=value;
});

Clazz.newMeth(C$, 'isShowText$',  function () {
return this.showText;
});

Clazz.newMeth(C$, 'setShowText$Boolean',  function (value) {
this.showText=value;
});

Clazz.newMeth(C$, 'isShowColourText$',  function () {
return this.showColourText;
});

Clazz.newMeth(C$, 'setShowColourText$Boolean',  function (value) {
this.showColourText=value;
});

Clazz.newMeth(C$, 'isShowUnconserved$',  function () {
if (this.showUnconserved == null ) {
return false;
} else {
return (this.showUnconserved).valueOf();
}});

Clazz.newMeth(C$, 'setShowUnconserved$Boolean',  function (value) {
this.showUnconserved=value;
});

Clazz.newMeth(C$, 'isShowBoxes$',  function () {
return this.showBoxes;
});

Clazz.newMeth(C$, 'setShowBoxes$Boolean',  function (value) {
this.showBoxes=value;
});

Clazz.newMeth(C$, 'isWrapAlignment$',  function () {
return this.wrapAlignment;
});

Clazz.newMeth(C$, 'setWrapAlignment$Boolean',  function (value) {
this.wrapAlignment=value;
});

Clazz.newMeth(C$, 'isRenderGaps$',  function () {
return this.renderGaps;
});

Clazz.newMeth(C$, 'setRenderGaps$Boolean',  function (value) {
this.renderGaps=value;
});

Clazz.newMeth(C$, 'isShowSequenceFeatures$',  function () {
return this.showSequenceFeatures;
});

Clazz.newMeth(C$, 'setShowSequenceFeatures$Boolean',  function (value) {
this.showSequenceFeatures=value;
});

Clazz.newMeth(C$, 'isShowNPfeatureTooltip$',  function () {
return this.showNPfeatureTooltip;
});

Clazz.newMeth(C$, 'setShowNPfeatureTooltip$Boolean',  function (value) {
this.showNPfeatureTooltip=value;
});

Clazz.newMeth(C$, 'isShowDbRefTooltip$',  function () {
return this.showDbRefTooltip;
});

Clazz.newMeth(C$, 'setShowDbRefTooltip$Boolean',  function (value) {
this.showDbRefTooltip=value;
});

Clazz.newMeth(C$, 'isFollowHighlight$',  function () {
if (this.followHighlight == null ) {
return true;
} else {
return (this.followHighlight).valueOf();
}});

Clazz.newMeth(C$, 'setFollowHighlight$Boolean',  function (value) {
this.followHighlight=value;
});

Clazz.newMeth(C$, 'isFollowSelection$',  function () {
if (this.followSelection == null ) {
return true;
} else {
return (this.followSelection).valueOf();
}});

Clazz.newMeth(C$, 'setFollowSelection$Boolean',  function (value) {
this.followSelection=value;
});

Clazz.newMeth(C$, 'isShowAnnotation$',  function () {
return this.showAnnotation;
});

Clazz.newMeth(C$, 'setShowAnnotation$Boolean',  function (value) {
this.showAnnotation=value;
});

Clazz.newMeth(C$, 'isCentreColumnLabels$',  function () {
if (this.centreColumnLabels == null ) {
return false;
} else {
return (this.centreColumnLabels).valueOf();
}});

Clazz.newMeth(C$, 'setCentreColumnLabels$Boolean',  function (value) {
this.centreColumnLabels=value;
});

Clazz.newMeth(C$, 'isShowGroupConservation$',  function () {
if (this.showGroupConservation == null ) {
return false;
} else {
return (this.showGroupConservation).valueOf();
}});

Clazz.newMeth(C$, 'setShowGroupConservation$Boolean',  function (value) {
this.showGroupConservation=value;
});

Clazz.newMeth(C$, 'isShowGroupConsensus$',  function () {
if (this.showGroupConsensus == null ) {
return false;
} else {
return (this.showGroupConsensus).valueOf();
}});

Clazz.newMeth(C$, 'setShowGroupConsensus$Boolean',  function (value) {
this.showGroupConsensus=value;
});

Clazz.newMeth(C$, 'isShowConsensusHistogram$',  function () {
if (this.showConsensusHistogram == null ) {
return true;
} else {
return (this.showConsensusHistogram).valueOf();
}});

Clazz.newMeth(C$, 'setShowConsensusHistogram$Boolean',  function (value) {
this.showConsensusHistogram=value;
});

Clazz.newMeth(C$, 'isShowSequenceLogo$',  function () {
if (this.showSequenceLogo == null ) {
return false;
} else {
return (this.showSequenceLogo).valueOf();
}});

Clazz.newMeth(C$, 'setShowSequenceLogo$Boolean',  function (value) {
this.showSequenceLogo=value;
});

Clazz.newMeth(C$, 'isNormaliseSequenceLogo$',  function () {
if (this.normaliseSequenceLogo == null ) {
return false;
} else {
return (this.normaliseSequenceLogo).valueOf();
}});

Clazz.newMeth(C$, 'setNormaliseSequenceLogo$Boolean',  function (value) {
this.normaliseSequenceLogo=value;
});

Clazz.newMeth(C$, 'isIgnoreGapsinConsensus$',  function () {
if (this.ignoreGapsinConsensus == null ) {
return true;
} else {
return (this.ignoreGapsinConsensus).valueOf();
}});

Clazz.newMeth(C$, 'setIgnoreGapsinConsensus$Boolean',  function (value) {
this.ignoreGapsinConsensus=value;
});

Clazz.newMeth(C$, 'getStartRes$',  function () {
return this.startRes;
});

Clazz.newMeth(C$, 'setStartRes$Integer',  function (value) {
this.startRes=value;
});

Clazz.newMeth(C$, 'getStartSeq$',  function () {
return this.startSeq;
});

Clazz.newMeth(C$, 'setStartSeq$Integer',  function (value) {
this.startSeq=value;
});

Clazz.newMeth(C$, 'getFontName$',  function () {
return this.fontName;
});

Clazz.newMeth(C$, 'setFontName$S',  function (value) {
this.fontName=value;
});

Clazz.newMeth(C$, 'getFontSize$',  function () {
return this.fontSize;
});

Clazz.newMeth(C$, 'setFontSize$Integer',  function (value) {
this.fontSize=value;
});

Clazz.newMeth(C$, 'getFontStyle$',  function () {
return this.fontStyle;
});

Clazz.newMeth(C$, 'setFontStyle$Integer',  function (value) {
this.fontStyle=value;
});

Clazz.newMeth(C$, 'isScaleProteinAsCdna$',  function () {
if (this.scaleProteinAsCdna == null ) {
return true;
} else {
return (this.scaleProteinAsCdna).valueOf();
}});

Clazz.newMeth(C$, 'setScaleProteinAsCdna$Boolean',  function (value) {
this.scaleProteinAsCdna=value;
});

Clazz.newMeth(C$, 'getViewName$',  function () {
return this.viewName;
});

Clazz.newMeth(C$, 'setViewName$S',  function (value) {
this.viewName=value;
});

Clazz.newMeth(C$, 'getSequenceSetId$',  function () {
return this.sequenceSetId;
});

Clazz.newMeth(C$, 'setSequenceSetId$S',  function (value) {
this.sequenceSetId=value;
});

Clazz.newMeth(C$, 'isGatheredViews$',  function () {
return this.gatheredViews;
});

Clazz.newMeth(C$, 'setGatheredViews$Boolean',  function (value) {
this.gatheredViews=value;
});

Clazz.newMeth(C$, 'getTextCol1$',  function () {
return this.textCol1;
});

Clazz.newMeth(C$, 'setTextCol1$Integer',  function (value) {
this.textCol1=value;
});

Clazz.newMeth(C$, 'getTextCol2$',  function () {
return this.textCol2;
});

Clazz.newMeth(C$, 'setTextCol2$Integer',  function (value) {
this.textCol2=value;
});

Clazz.newMeth(C$, 'getTextColThreshold$',  function () {
return this.textColThreshold;
});

Clazz.newMeth(C$, 'setTextColThreshold$Integer',  function (value) {
this.textColThreshold=value;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getComplementId$',  function () {
return this.complementId;
});

Clazz.newMeth(C$, 'setComplementId$S',  function (value) {
this.complementId=value;
});

Clazz.newMeth(C$, 'isShowComplementFeatures$',  function () {
if (this.showComplementFeatures == null ) {
return false;
} else {
return (this.showComplementFeatures).valueOf();
}});

Clazz.newMeth(C$, 'setShowComplementFeatures$Boolean',  function (value) {
this.showComplementFeatures=value;
});

Clazz.newMeth(C$, 'isShowComplementFeaturesOnTop$',  function () {
if (this.showComplementFeaturesOnTop == null ) {
return false;
} else {
return (this.showComplementFeaturesOnTop).valueOf();
}});

Clazz.newMeth(C$, 'setShowComplementFeaturesOnTop$Boolean',  function (value) {
this.showComplementFeaturesOnTop=value;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$Integer',  function (value) {
this.width=value;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$Integer',  function (value) {
this.height=value;
});

Clazz.newMeth(C$, 'getXpos$',  function () {
return this.xpos;
});

Clazz.newMeth(C$, 'setXpos$Integer',  function (value) {
this.xpos=value;
});

Clazz.newMeth(C$, 'getYpos$',  function () {
return this.ypos;
});

Clazz.newMeth(C$, 'setYpos$Integer',  function (value) {
this.ypos=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.Viewport',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"annotationColours"  "hiddenColumns"  "calcIdParam"  } ']],
  [['annotationColours','jalview.xml.binding.jalview.AnnotationColourScheme',null,['javax.xml.bind.annotation.XmlElement']],['name="AnnotationColours" namespace="www.jalview.org" ']],
  [['hiddenColumns','java.util.List<jalview.xml.binding.jalview.JalviewModel.Viewport.HiddenColumns>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['calcIdParam','java.util.List<jalview.xml.binding.jalview.JalviewModel.Viewport.CalcIdParam>',null,['javax.xml.bind.annotation.XmlElement']],['namespace="www.jalview.org" ']],
  [['conservationSelected','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="conservationSelected" ']],
  [['pidSelected','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="pidSelected" ']],
  [['bgColour','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="bgColour" ']],
  [['consThreshold','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="consThreshold" ']],
  [['pidThreshold','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="pidThreshold" ']],
  [['title','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="title" ']],
  [['showFullId','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showFullId" ']],
  [['rightAlignIds','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="rightAlignIds" ']],
  [['showText','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showText" ']],
  [['showColourText','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showColourText" ']],
  [['showUnconserved','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showUnconserved" ']],
  [['showBoxes','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showBoxes" ']],
  [['wrapAlignment','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="wrapAlignment" ']],
  [['renderGaps','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="renderGaps" ']],
  [['showSequenceFeatures','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showSequenceFeatures" ']],
  [['showNPfeatureTooltip','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showNPfeatureTooltip" ']],
  [['showDbRefTooltip','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showDbRefTooltip" ']],
  [['followHighlight','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="followHighlight" ']],
  [['followSelection','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="followSelection" ']],
  [['showAnnotation','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showAnnotation" ']],
  [['centreColumnLabels','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="centreColumnLabels" ']],
  [['showGroupConservation','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showGroupConservation" ']],
  [['showGroupConsensus','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showGroupConsensus" ']],
  [['showConsensusHistogram','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showConsensusHistogram" ']],
  [['showSequenceLogo','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showSequenceLogo" ']],
  [['normaliseSequenceLogo','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="normaliseSequenceLogo" ']],
  [['ignoreGapsinConsensus','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ignoreGapsinConsensus" ']],
  [['startRes','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="startRes" ']],
  [['startSeq','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="startSeq" ']],
  [['fontName','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="fontName" ']],
  [['fontSize','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="fontSize" ']],
  [['fontStyle','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="fontStyle" ']],
  [['scaleProteinAsCdna','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="scaleProteinAsCdna" ']],
  [['viewName','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="viewName" ']],
  [['sequenceSetId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="sequenceSetId" ']],
  [['gatheredViews','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="gatheredViews" ']],
  [['textCol1','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="textCol1" ']],
  [['textCol2','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="textCol2" ']],
  [['textColThreshold','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="textColThreshold" ']],
  [['id','String',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter','javax.xml.bind.annotation.XmlID','javax.xml.bind.annotation.XmlSchemaType']],['name="id" ','"javax.xml.bind.annotation.adapters.CollapsedStringAdapter.class" ','','name="ID" ']],
  [['complementId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="complementId" ']],
  [['showComplementFeatures','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showComplementFeatures" ']],
  [['showComplementFeaturesOnTop','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="showComplementFeaturesOnTop" ']],
  [['width','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="width" ']],
  [['height','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="height" ']],
  [['xpos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="xpos" ']],
  [['ypos','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ypos" ']],
  [['null','jalview.xml.binding.jalview.JalviewModel.Viewport.CalcIdParam'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.JalviewModel.Viewport.HiddenColumns'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.Viewport, "CalcIdParam", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'jalview.xml.binding.jalview.WebServiceParameterSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['autoUpdate'],'S',['calcId'],'O',['needsUpdate','Boolean']]]

Clazz.newMeth(C$, 'getCalcId$',  function () {
return this.calcId;
});

Clazz.newMeth(C$, 'setCalcId$S',  function (value) {
this.calcId=value;
});

Clazz.newMeth(C$, 'isNeedsUpdate$',  function () {
if (this.needsUpdate == null ) {
return false;
} else {
return (this.needsUpdate).valueOf();
}});

Clazz.newMeth(C$, 'setNeedsUpdate$Boolean',  function (value) {
this.needsUpdate=value;
});

Clazz.newMeth(C$, 'isAutoUpdate$',  function () {
return this.autoUpdate;
});

Clazz.newMeth(C$, 'setAutoUpdate$Z',  function (value) {
this.autoUpdate=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.Viewport.CalcIdParam',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['calcId','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="calcId" required="true" ']],
  [['needsUpdate','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="needsUpdate" ']],
  [['autoUpdate','boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="autoUpdate" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JalviewModel.Viewport, "HiddenColumns", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['start','Integer','+end']]]

Clazz.newMeth(C$, 'getStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$Integer',  function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$Integer',  function (value) {
this.end=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.JalviewModel.Viewport.HiddenColumns',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['start','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="start" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
