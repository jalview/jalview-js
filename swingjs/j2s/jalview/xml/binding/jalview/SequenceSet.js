(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequenceSet", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequence=null;
this.annotation=null;
this.sequenceSetProperties=null;
this.alcodonFrame=null;
this.gapChar=null;
this.datasetId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSequence$', function () {
if (this.sequence == null ) {
this.sequence=Clazz.new_($I$(1));
}return this.sequence;
});

Clazz.newMeth(C$, 'getAnnotation$', function () {
if (this.annotation == null ) {
this.annotation=Clazz.new_($I$(1));
}return this.annotation;
});

Clazz.newMeth(C$, 'getSequenceSetProperties$', function () {
if (this.sequenceSetProperties == null ) {
this.sequenceSetProperties=Clazz.new_($I$(1));
}return this.sequenceSetProperties;
});

Clazz.newMeth(C$, 'getAlcodonFrame$', function () {
if (this.alcodonFrame == null ) {
this.alcodonFrame=Clazz.new_($I$(1));
}return this.alcodonFrame;
});

Clazz.newMeth(C$, 'getGapChar$', function () {
return this.gapChar;
});

Clazz.newMeth(C$, 'setGapChar$S', function (value) {
this.gapChar=value;
});

Clazz.newMeth(C$, 'getDatasetId$', function () {
return this.datasetId;
});

Clazz.newMeth(C$, 'setDatasetId$S', function (value) {
this.datasetId=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.SequenceSet'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"sequence"  "annotation"  "sequenceSetProperties"  "alcodonFrame"  } )','@XmlRootElement(name="SequenceSet" )']],
  [['sequence','java.util.List<jalview.xml.binding.jalview.Sequence>'],['@XmlElement(name="Sequence" )']],
  [['annotation','java.util.List<jalview.xml.binding.jalview.Annotation>'],['@XmlElement(name="Annotation" )']],
  [['alcodonFrame','java.util.List<jalview.xml.binding.jalview.AlcodonFrame>'],['@XmlElement(name="AlcodonFrame" )']],
  [['gapChar','String'],['@XmlAttribute(name="gapChar" required="true" )']],
  [['datasetId','.'],['@XmlAttribute(name="datasetId" )']],
  [['null','jalview.xml.binding.jalview.SequenceSet.SequenceSetProperties'],['!XmlInner']],
  [['sequenceSetProperties','java.util.List<jalview.xml.binding.jalview.SequenceSet.SequenceSetProperties>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.SequenceSet, "SequenceSetProperties", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'setKey$S', function (value) {
this.key=value;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.SequenceSet.SequenceSetProperties'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['key','String'],['@XmlAttribute(name="key" )']],
  [['value','.'],['@XmlAttribute(name="value" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
