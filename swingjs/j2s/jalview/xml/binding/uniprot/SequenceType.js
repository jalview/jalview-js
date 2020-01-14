(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
var C$=Clazz.newClass(P$, "SequenceType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
this.length=0;
this.mass=0;
this.checksum=null;
this.modified=null;
this.version=0;
this.precursor=null;
this.fragment=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'setLength$I', function (value) {
this.length=value;
});

Clazz.newMeth(C$, 'getMass$', function () {
return this.mass;
});

Clazz.newMeth(C$, 'setMass$I', function (value) {
this.mass=value;
});

Clazz.newMeth(C$, 'getChecksum$', function () {
return this.checksum;
});

Clazz.newMeth(C$, 'setChecksum$S', function (value) {
this.checksum=value;
});

Clazz.newMeth(C$, 'getModified$', function () {
return this.modified;
});

Clazz.newMeth(C$, 'setModified$javax_xml_datatype_XMLGregorianCalendar', function (value) {
this.modified=value;
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$I', function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'isPrecursor$', function () {
return this.precursor;
});

Clazz.newMeth(C$, 'setPrecursor$Boolean', function (value) {
this.precursor=value;
});

Clazz.newMeth(C$, 'getFragment$', function () {
return this.fragment;
});

Clazz.newMeth(C$, 'setFragment$S', function (value) {
this.fragment=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.SequenceType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="sequenceType" propOrder={"value"  } )']],
  [['value','String'],['@XmlValue']],
  [['length','int'],['@XmlAttribute(name="length" required="true" )']],
  [['mass','.'],['@XmlAttribute(name="mass" required="true" )']],
  [['checksum','String'],['@XmlAttribute(name="checksum" required="true" )']],
  [['modified','javax.xml.datatype.XMLGregorianCalendar'],['@XmlAttribute(name="modified" required="true" )','@XmlSchemaType(name="date" )']],
  [['version','int'],['@XmlAttribute(name="version" required="true" )']],
  [['precursor','Boolean'],['@XmlAttribute(name="precursor" )']],
  [['fragment','String'],['@XmlAttribute(name="fragment" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
