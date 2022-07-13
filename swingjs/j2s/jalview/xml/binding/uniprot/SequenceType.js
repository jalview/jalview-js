(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SequenceType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['length','mass','version'],'S',['value','checksum','fragment'],'O',['modified','javax.xml.datatype.XMLGregorianCalendar','precursor','Boolean']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.length;
});

Clazz.newMeth(C$, 'setLength$I',  function (value) {
this.length=value;
});

Clazz.newMeth(C$, 'getMass$',  function () {
return this.mass;
});

Clazz.newMeth(C$, 'setMass$I',  function (value) {
this.mass=value;
});

Clazz.newMeth(C$, 'getChecksum$',  function () {
return this.checksum;
});

Clazz.newMeth(C$, 'setChecksum$S',  function (value) {
this.checksum=value;
});

Clazz.newMeth(C$, 'getModified$',  function () {
return this.modified;
});

Clazz.newMeth(C$, 'setModified$javax_xml_datatype_XMLGregorianCalendar',  function (value) {
this.modified=value;
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$I',  function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'isPrecursor$',  function () {
return this.precursor;
});

Clazz.newMeth(C$, 'setPrecursor$Boolean',  function (value) {
this.precursor=value;
});

Clazz.newMeth(C$, 'getFragment$',  function () {
return this.fragment;
});

Clazz.newMeth(C$, 'setFragment$S',  function (value) {
this.fragment=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.SequenceType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="sequenceType" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['length','int',null,['javax.xml.bind.annotation.XmlAttribute']],['name="length" required="true" ']],
  [['mass','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="mass" required="true" ']],
  [['checksum','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="checksum" required="true" ']],
  [['modified','javax.xml.datatype.XMLGregorianCalendar',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="modified" required="true" ','name="date" ']],
  [['version','int',null,['javax.xml.bind.annotation.XmlAttribute']],['name="version" required="true" ']],
  [['precursor','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="precursor" ']],
  [['fragment','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="fragment" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
