(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LocationType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['sequence'],'O',['begin','jalview.xml.binding.uniprot.PositionType','+end','+position']]]

Clazz.newMeth(C$, 'getBegin$',  function () {
return this.begin;
});

Clazz.newMeth(C$, 'setBegin$jalview_xml_binding_uniprot_PositionType',  function (value) {
this.begin=value;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$jalview_xml_binding_uniprot_PositionType',  function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getPosition$',  function () {
return this.position;
});

Clazz.newMeth(C$, 'setPosition$jalview_xml_binding_uniprot_PositionType',  function (value) {
this.position=value;
});

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$S',  function (value) {
this.sequence=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.LocationType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="locationType" propOrder={"begin"  "end"  "position"  } ']],
  [['sequence','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="sequence" ']],
  [['begin','jalview.xml.binding.uniprot.PositionType'],['@XmlElement']],
  [['end','jalview.xml.binding.uniprot.PositionType'],['@XmlElement']],
  [['position','jalview.xml.binding.uniprot.PositionType'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
