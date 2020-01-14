(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Feature", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.otherData=null;
this.begin=0;
this.end=0;
this.type=null;
this.description=null;
this.status=null;
this.featureGroup=null;
this.score=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOtherData$', function () {
if (this.otherData == null ) {
this.otherData=Clazz.new_($I$(1));
}return this.otherData;
});

Clazz.newMeth(C$, 'getBegin$', function () {
return this.begin;
});

Clazz.newMeth(C$, 'setBegin$I', function (value) {
this.begin=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$I', function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (value) {
this.description=value;
});

Clazz.newMeth(C$, 'getStatus$', function () {
return this.status;
});

Clazz.newMeth(C$, 'setStatus$S', function (value) {
this.status=value;
});

Clazz.newMeth(C$, 'getFeatureGroup$', function () {
return this.featureGroup;
});

Clazz.newMeth(C$, 'setFeatureGroup$S', function (value) {
this.featureGroup=value;
});

Clazz.newMeth(C$, 'getScore$', function () {
return this.score;
});

Clazz.newMeth(C$, 'setScore$Float', function (value) {
this.score=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.Feature'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="feature" namespace="www.jalview.org" propOrder={"otherData"  } )']],
  [['begin','int'],['@XmlAttribute(name="begin" required="true" )']],
  [['end','.'],['@XmlAttribute(name="end" required="true" )']],
  [['type','String'],['@XmlAttribute(name="type" required="true" )']],
  [['description','.'],['@XmlAttribute(name="description" )']],
  [['status','.'],['@XmlAttribute(name="status" )']],
  [['featureGroup','.'],['@XmlAttribute(name="featureGroup" )']],
  [['score','Float'],['@XmlAttribute(name="score" )']],
  [['null','jalview.xml.binding.jalview.Feature.OtherData'],['!XmlInner']],
  [['otherData','java.util.List<jalview.xml.binding.jalview.Feature.OtherData>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.Feature, "OtherData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.key=null;
this.key2=null;
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

Clazz.newMeth(C$, 'getKey2$', function () {
return this.key2;
});

Clazz.newMeth(C$, 'setKey2$S', function (value) {
this.key2=value;
});

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.Feature.OtherData'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['key','String'],['@XmlAttribute(name="key" required="true" )']],
  [['key2','.'],['@XmlAttribute(name="key2" )']],
  [['value','.'],['@XmlAttribute(name="value" required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
