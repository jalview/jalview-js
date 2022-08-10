(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PositionType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['status'],'O',['position','java.math.BigInteger','evidence','java.util.List']]]

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.position;
});

Clazz.newMeth(C$, 'setPosition$java_math_BigInteger',  function (value) {
this.position=value;
});

Clazz.newMeth(C$, 'getStatus$',  function () {
if (this.status == null ) {
return "certain";
} else {
return this.status;
}});

Clazz.newMeth(C$, 'setStatus$S',  function (value) {
this.status=value;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.PositionType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="positionType" ']],
  [['position','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="position" ','name="unsignedLong" ']],
  [['status','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="status" ']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
