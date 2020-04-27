(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SourceType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dbReference','jalview.xml.binding.uniprot.DbReferenceType','ref','java.math.BigInteger']]]

Clazz.newMeth(C$, 'getDbReference$', function () {
return this.dbReference;
});

Clazz.newMeth(C$, 'setDbReference$jalview_xml_binding_uniprot_DbReferenceType', function (value) {
this.dbReference=value;
});

Clazz.newMeth(C$, 'getRef$', function () {
return this.ref;
});

Clazz.newMeth(C$, 'setRef$java_math_BigInteger', function (value) {
this.ref=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.SourceType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="sourceType" propOrder={"dbReference"  } ']],
  [['ref','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ref" ']],
  [['dbReference','jalview.xml.binding.uniprot.DbReferenceType'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
