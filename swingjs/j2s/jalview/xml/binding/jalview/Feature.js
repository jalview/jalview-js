(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Feature", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['OtherData',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['begin','end'],'S',['type','description','status','featureGroup'],'O',['otherData','java.util.List','score','Float']]]

Clazz.newMeth(C$, 'getOtherData$', function () {
if (this.otherData == null ) {
this.otherData=Clazz.new_($I$(1,1));
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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.Feature',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="feature" namespace="www.jalview.org" propOrder={"otherData"  } ']],
  [['begin','int',null,['javax.xml.bind.annotation.XmlAttribute']],['name="begin" required="true" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" required="true" ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['description','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="description" ']],
  [['status','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="status" ']],
  [['featureGroup','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="featureGroup" ']],
  [['score','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="score" ']],
  [['null','jalview.xml.binding.jalview.Feature.OtherData'],['!XmlInner']],
  [['otherData','java.util.List<jalview.xml.binding.jalview.Feature.OtherData>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Feature, "OtherData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['key','key2','value']]]

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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.Feature.OtherData',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['key','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="key" required="true" ']],
  [['key2','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="key2" ']],
  [['value','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="value" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
