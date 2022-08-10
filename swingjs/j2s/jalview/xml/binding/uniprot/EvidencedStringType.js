(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EvidencedStringType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value','status'],'O',['evidence','java.util.List']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});

Clazz.newMeth(C$, 'getStatus$',  function () {
return this.status;
});

Clazz.newMeth(C$, 'setStatus$S',  function (value) {
this.status=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.EvidencedStringType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="evidencedStringType" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']],
  [['status','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="status" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
