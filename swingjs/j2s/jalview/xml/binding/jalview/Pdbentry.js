(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Pdbentry", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Property',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['id','type','file'],'O',['property','java.util.List']]]

Clazz.newMeth(C$, 'getProperty$', function () {
if (this.property == null ) {
this.property=Clazz.new_($I$(1,1));
}return this.property;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getFile$', function () {
return this.file;
});

Clazz.newMeth(C$, 'setFile$S', function (value) {
this.file=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.Pdbentry',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlSeeAlso']],['XmlAccessType.FIELD','name="pdbentry" namespace="www.jalview.org" propOrder={"property"  } ','"jalview.xml.binding.jalview.JalviewModel.JSeq.Pdbids.class" ']],
  [['id','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" required="true" ']],
  [['type','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" ']],
  [['file','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="file" ']],
  [['null','jalview.xml.binding.jalview.Pdbentry.Property'],['!XmlInner']],
  [['property','java.util.List<jalview.xml.binding.jalview.Pdbentry.Property>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.Pdbentry, "Property", function(){
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
[[null,'jalview.xml.binding.jalview.Pdbentry.Property',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['name','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="name" required="true" ']],
  [['value','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="value" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
