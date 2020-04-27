(function(){var P$=Clazz.newPackage("jalview.json.binding.biojson.v1"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlignmentAnnotationPojo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.annotations=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['D',['score'],'I',['graphType'],'S',['label','description','sequenceRef','calcId'],'O',['annotations','java.util.List','annotationSettings','jalview.json.binding.biojson.v1.AnnotationDisplaySettingPojo']]]

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'setLabel$S', function (label) {
this.label=label;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (annotationId) {
this.description=annotationId;
});

Clazz.newMeth(C$, 'getAnnotations$', function () {
return this.annotations;
});

Clazz.newMeth(C$, 'setAnnotations$java_util_List', function (annotations) {
this.annotations=annotations;
});

Clazz.newMeth(C$, 'getSequenceRef$', function () {
return this.sequenceRef;
});

Clazz.newMeth(C$, 'setSequenceRef$S', function (sequenceRef) {
this.sequenceRef=sequenceRef;
});

Clazz.newMeth(C$, 'getGraphType$', function () {
return this.graphType;
});

Clazz.newMeth(C$, 'setGraphType$I', function (graphType) {
this.graphType=graphType;
});

Clazz.newMeth(C$, 'getAnnotationSettings$', function () {
return this.annotationSettings;
});

Clazz.newMeth(C$, 'setAnnotationSettings$jalview_json_binding_biojson_v1_AnnotationDisplaySettingPojo', function (annotationSettings) {
this.annotationSettings=annotationSettings;
});

Clazz.newMeth(C$, 'getScore$', function () {
return this.score;
});

Clazz.newMeth(C$, 'setScore$D', function (score) {
this.score=score;
});

Clazz.newMeth(C$, 'getCalcId$', function () {
return this.calcId;
});

Clazz.newMeth(C$, 'setCalcId$S', function (calcId) {
this.calcId=calcId;
});
C$.$getAnn$ = function(){ return [
[['label','String',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Label for the alignment annotation" ']],
  [['description','.',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Description for the alignment annotation" ']],
  [['annotations','java.util.List',null,['com.github.reinert.jjschema.Attributes']],['required="false" ']],
  [['graphType','int',null,['com.github.reinert.jjschema.Attributes']],['required="false" enums={"0"  "1"  "2"  } description="Determines the rendering for the annotation<br><ul><li>0 - No graph</li><li>1 - Bar Graph</li><li>2 - Line graph</li></ul>" ']],
  [['sequenceRef','String',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Reference to the sequence in the alignment<br> if per-sequence annotation" ']],
  [['annotationSettings','jalview.json.binding.biojson.v1.AnnotationDisplaySettingPojo',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Stores display settings for an annotation" ']],
  [['score','double',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="Score of the annotation" ']],
  [['calcId','String',null,['com.github.reinert.jjschema.Attributes']],['required="false" description="The annotation generation source" ']],
  [['M:getLabel','String'],['@XmlElement']],
  [['M:getDescription','String'],['@XmlElement']],
  [['M:getAnnotations','java.util.List<jalview.json.binding.biojson.v1.AnnotationPojo>'],['@XmlElement']],
  [['M:getSequenceRef','String'],['@XmlElement']],
  [['M:getGraphType','int'],['@XmlElement']],
  [['M:getAnnotationSettings','jalview.json.binding.biojson.v1.AnnotationDisplaySettingPojo'],['@XmlElement']],
  [['M:getScore','double'],['@XmlElement']],
  [['M:getCalcId','String'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
