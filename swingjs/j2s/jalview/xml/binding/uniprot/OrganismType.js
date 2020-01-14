(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OrganismType", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.dbReference=null;
this.lineage=null;
this.evidence=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
if (this.name == null ) {
this.name=Clazz.new_($I$(1));
}return this.name;
});

Clazz.newMeth(C$, 'getDbReference$', function () {
if (this.dbReference == null ) {
this.dbReference=Clazz.new_($I$(1));
}return this.dbReference;
});

Clazz.newMeth(C$, 'getLineage$', function () {
return this.lineage;
});

Clazz.newMeth(C$, 'setLineage$jalview_xml_binding_uniprot_OrganismType_Lineage', function (value) {
this.lineage=value;
});

Clazz.newMeth(C$, 'getEvidence$', function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1));
}return this.evidence;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.OrganismType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="organismType" propOrder={"name"  "dbReference"  "lineage"  } )']],
  [['name','java.util.List<jalview.xml.binding.uniprot.OrganismNameType>'],['@XmlElement(required="true" )']],
  [['dbReference','java.util.List<jalview.xml.binding.uniprot.DbReferenceType>'],['@XmlElement(required="true" )']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']],
  [['null','jalview.xml.binding.uniprot.OrganismType.Lineage'],['!XmlInner']],
  [['lineage','jalview.xml.binding.uniprot.OrganismType.Lineage'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.OrganismType, "Lineage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.taxon=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTaxon$', function () {
if (this.taxon == null ) {
this.taxon=Clazz.new_($I$(1));
}return this.taxon;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.OrganismType.Lineage'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"taxon"  } )']],
  [['taxon','java.util.List<java.lang.String>'],['@XmlElement(required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
