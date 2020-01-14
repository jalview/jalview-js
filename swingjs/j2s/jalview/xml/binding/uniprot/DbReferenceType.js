(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DbReferenceType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.molecule=null;
this.property=null;
this.type=null;
this.id=null;
this.evidence=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMolecule$', function () {
return this.molecule;
});

Clazz.newMeth(C$, 'setMolecule$jalview_xml_binding_uniprot_MoleculeType', function (value) {
this.molecule=value;
});

Clazz.newMeth(C$, 'getProperty$', function () {
if (this.property == null ) {
this.property=Clazz.new_($I$(1));
}return this.property;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getEvidence$', function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1));
}return this.evidence;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.DbReferenceType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="dbReferenceType" propOrder={"molecule"  "property"  } )']],
  [['type','String'],['@XmlAttribute(name="type" required="true" )']],
  [['id','.'],['@XmlAttribute(name="id" required="true" )']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']],
  [['molecule','jalview.xml.binding.uniprot.MoleculeType'],['@XmlElement']],
  [['property','java.util.List<jalview.xml.binding.uniprot.PropertyType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
