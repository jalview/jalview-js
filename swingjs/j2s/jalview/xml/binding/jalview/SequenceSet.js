(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SequenceSet", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SequenceSetProperties',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['gapChar','datasetId'],'O',['sequence','java.util.List','+annotation','+sequenceSetProperties','+alcodonFrame']]]

Clazz.newMeth(C$, 'getSequence$',  function () {
if (this.sequence == null ) {
this.sequence=Clazz.new_($I$(1,1));
}return this.sequence;
});

Clazz.newMeth(C$, 'getAnnotation$',  function () {
if (this.annotation == null ) {
this.annotation=Clazz.new_($I$(1,1));
}return this.annotation;
});

Clazz.newMeth(C$, 'getSequenceSetProperties$',  function () {
if (this.sequenceSetProperties == null ) {
this.sequenceSetProperties=Clazz.new_($I$(1,1));
}return this.sequenceSetProperties;
});

Clazz.newMeth(C$, 'getAlcodonFrame$',  function () {
if (this.alcodonFrame == null ) {
this.alcodonFrame=Clazz.new_($I$(1,1));
}return this.alcodonFrame;
});

Clazz.newMeth(C$, 'getGapChar$',  function () {
return this.gapChar;
});

Clazz.newMeth(C$, 'setGapChar$S',  function (value) {
this.gapChar=value;
});

Clazz.newMeth(C$, 'getDatasetId$',  function () {
return this.datasetId;
});

Clazz.newMeth(C$, 'setDatasetId$S',  function (value) {
this.datasetId=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.SequenceSet',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"sequence"  "annotation"  "sequenceSetProperties"  "alcodonFrame"  } ','name="SequenceSet" ']],
  [['sequence','java.util.List<jalview.xml.binding.jalview.Sequence>',null,['javax.xml.bind.annotation.XmlElement']],['name="Sequence" ']],
  [['annotation','java.util.List<jalview.xml.binding.jalview.Annotation>',null,['javax.xml.bind.annotation.XmlElement']],['name="Annotation" ']],
  [['alcodonFrame','java.util.List<jalview.xml.binding.jalview.AlcodonFrame>',null,['javax.xml.bind.annotation.XmlElement']],['name="AlcodonFrame" ']],
  [['gapChar','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="gapChar" required="true" ']],
  [['datasetId','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="datasetId" ']],
  [['null','jalview.xml.binding.jalview.SequenceSet.SequenceSetProperties'],['!XmlInner']],
  [['sequenceSetProperties','java.util.List<jalview.xml.binding.jalview.SequenceSet.SequenceSetProperties>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.SequenceSet, "SequenceSetProperties", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['key','value']]]

Clazz.newMeth(C$, 'getKey$',  function () {
return this.key;
});

Clazz.newMeth(C$, 'setKey$S',  function (value) {
this.key=value;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.SequenceSet.SequenceSetProperties',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['key','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="key" ']],
  [['value','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="value" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
