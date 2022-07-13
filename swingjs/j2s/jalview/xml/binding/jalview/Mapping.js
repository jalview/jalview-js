(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Mapping", null, 'jalview.xml.binding.jalview.MapListType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['dseqFor','mappingType'],'O',['sequence','jalview.xml.binding.jalview.Sequence']]]

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$jalview_xml_binding_jalview_Sequence',  function (value) {
this.sequence=value;
});

Clazz.newMeth(C$, 'getDseqFor$',  function () {
return this.dseqFor;
});

Clazz.newMeth(C$, 'setDseqFor$S',  function (value) {
this.dseqFor=value;
});

Clazz.newMeth(C$, 'getMappingType$',  function () {
return this.mappingType;
});

Clazz.newMeth(C$, 'setMappingType$S',  function (value) {
this.mappingType=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.Mapping',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"sequence"  "dseqFor"  } ','name="Mapping" ']],
  [['sequence','jalview.xml.binding.jalview.Sequence',null,['javax.xml.bind.annotation.XmlElement']],['name="Sequence" ']],
  [['mappingType','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="mappingType" ']],
  [['dseqFor','String'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
