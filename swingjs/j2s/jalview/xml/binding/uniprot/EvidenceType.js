(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
var C$=Clazz.newClass(P$, "EvidenceType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.source=null;
this.importedFrom=null;
this.type=null;
this.key=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'setSource$jalview_xml_binding_uniprot_SourceType', function (value) {
this.source=value;
});

Clazz.newMeth(C$, 'getImportedFrom$', function () {
return this.importedFrom;
});

Clazz.newMeth(C$, 'setImportedFrom$jalview_xml_binding_uniprot_ImportedFromType', function (value) {
this.importedFrom=value;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'setKey$java_math_BigInteger', function (value) {
this.key=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.EvidenceType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="evidenceType" propOrder={"source"  "importedFrom"  } )']],
  [['type','String'],['@XmlAttribute(name="type" required="true" )']],
  [['key','java.math.BigInteger'],['@XmlAttribute(name="key" required="true" )']],
  [['source','jalview.xml.binding.uniprot.SourceType'],['@XmlElement']],
  [['importedFrom','jalview.xml.binding.uniprot.ImportedFromType'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
