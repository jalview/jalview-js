(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InteractantType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['id','label','intactId']]]

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getLabel$',  function () {
return this.label;
});

Clazz.newMeth(C$, 'setLabel$S',  function (value) {
this.label=value;
});

Clazz.newMeth(C$, 'getIntactId$',  function () {
return this.intactId;
});

Clazz.newMeth(C$, 'setIntactId$S',  function (value) {
this.intactId=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.InteractantType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="interactantType" propOrder={"id"  "label"  } ']],
  [['intactId','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="intactId" required="true" ']],
  [['id','String'],['@XmlElement']],
  [['label','String'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
