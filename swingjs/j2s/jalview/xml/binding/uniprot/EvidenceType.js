(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EvidenceType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type'],'O',['source','jalview.xml.binding.uniprot.SourceType','importedFrom','jalview.xml.binding.uniprot.ImportedFromType','key','java.math.BigInteger']]]

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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.EvidenceType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="evidenceType" propOrder={"source"  "importedFrom"  } ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['key','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="key" required="true" ']],
  [['source','jalview.xml.binding.uniprot.SourceType'],['@XmlElement']],
  [['importedFrom','jalview.xml.binding.uniprot.ImportedFromType'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
