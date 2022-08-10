(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MoleculeType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value','id']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.MoleculeType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="moleculeType" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['id','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
