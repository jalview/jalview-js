(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OrganismNameType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value','type']]]

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.OrganismNameType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="organismNameType" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['type','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
