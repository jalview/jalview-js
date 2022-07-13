(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SequenceType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['sequence','name','id','description']]]

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$S',  function (value) {
this.sequence=value;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (value) {
this.description=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.SequenceType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlSeeAlso']],['XmlAccessType.FIELD','name="SequenceType" propOrder={"sequence"  "name"  } ','"jalview.xml.binding.jalview.Sequence.class" ']],
  [['id','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" ']],
  [['description','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="description" ']],
  [['sequence','String'],['@XmlElement']],
  [['name','String'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
