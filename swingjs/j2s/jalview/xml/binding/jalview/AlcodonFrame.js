(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AlcodonFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AlcodMap',9],['Alcodon',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['alcodon','java.util.List','+alcodMap']]]

Clazz.newMeth(C$, 'getAlcodon$', function () {
if (this.alcodon == null ) {
this.alcodon=Clazz.new_($I$(1,1));
}return this.alcodon;
});

Clazz.newMeth(C$, 'getAlcodMap$', function () {
if (this.alcodMap == null ) {
this.alcodMap=Clazz.new_($I$(1,1));
}return this.alcodMap;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.AlcodonFrame',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"alcodon"  "alcodMap"  } ','name="AlcodonFrame" ']],
  [['null','jalview.xml.binding.jalview.AlcodonFrame.AlcodMap'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.AlcodonFrame.Alcodon'],['!XmlInner']],
  [['alcodon','java.util.List<jalview.xml.binding.jalview.AlcodonFrame.Alcodon>'],['@XmlElement']],
  [['alcodMap','java.util.List<jalview.xml.binding.jalview.AlcodonFrame.AlcodMap>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.AlcodonFrame, "AlcodMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['dnasq'],'O',['mapping','jalview.xml.binding.jalview.Mapping']]]

Clazz.newMeth(C$, 'getMapping$', function () {
return this.mapping;
});

Clazz.newMeth(C$, 'setMapping$jalview_xml_binding_jalview_Mapping', function (value) {
this.mapping=value;
});

Clazz.newMeth(C$, 'getDnasq$', function () {
return this.dnasq;
});

Clazz.newMeth(C$, 'setDnasq$S', function (value) {
this.dnasq=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.AlcodonFrame.AlcodMap',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"mapping"  } ']],
  [['mapping','jalview.xml.binding.jalview.Mapping',null,['javax.xml.bind.annotation.XmlElement']],['name="Mapping" required="true" ']],
  [['dnasq','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dnasq" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AlcodonFrame, "Alcodon", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['pos1','java.math.BigInteger','+pos2','+pos3']]]

Clazz.newMeth(C$, 'getPos1$', function () {
return this.pos1;
});

Clazz.newMeth(C$, 'setPos1$java_math_BigInteger', function (value) {
this.pos1=value;
});

Clazz.newMeth(C$, 'getPos2$', function () {
return this.pos2;
});

Clazz.newMeth(C$, 'setPos2$java_math_BigInteger', function (value) {
this.pos2=value;
});

Clazz.newMeth(C$, 'getPos3$', function () {
return this.pos3;
});

Clazz.newMeth(C$, 'setPos3$java_math_BigInteger', function (value) {
this.pos3=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.AlcodonFrame.Alcodon',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['pos1','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="pos1" ']],
  [['pos2','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="pos2" ']],
  [['pos3','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="pos3" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
