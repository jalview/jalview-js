(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DbReferenceType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type','id'],'O',['molecule','jalview.xml.binding.uniprot.MoleculeType','property','java.util.List','+evidence']]]

Clazz.newMeth(C$, 'getMolecule$',  function () {
return this.molecule;
});

Clazz.newMeth(C$, 'setMolecule$jalview_xml_binding_uniprot_MoleculeType',  function (value) {
this.molecule=value;
});

Clazz.newMeth(C$, 'getProperty$',  function () {
if (this.property == null ) {
this.property=Clazz.new_($I$(1,1));
}return this.property;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S',  function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getId$',  function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S',  function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.DbReferenceType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="dbReferenceType" propOrder={"molecule"  "property"  } ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['id','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" required="true" ']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']],
  [['molecule','jalview.xml.binding.uniprot.MoleculeType'],['@XmlElement']],
  [['property','java.util.List<jalview.xml.binding.uniprot.PropertyType>'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
