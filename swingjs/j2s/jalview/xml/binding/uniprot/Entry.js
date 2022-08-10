(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Entry");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['version'],'S',['dataset'],'O',['accession','java.util.List','+name','protein','jalview.xml.binding.uniprot.ProteinType','gene','java.util.List','organism','jalview.xml.binding.uniprot.OrganismType','organismHost','java.util.List','+geneLocation','+reference','+comment','+dbReference','proteinExistence','jalview.xml.binding.uniprot.ProteinExistenceType','keyword','java.util.List','+feature','+evidence','sequence','jalview.xml.binding.uniprot.SequenceType','created','javax.xml.datatype.XMLGregorianCalendar','+modified']]]

Clazz.newMeth(C$, 'getAccession$',  function () {
if (this.accession == null ) {
this.accession=Clazz.new_($I$(1,1));
}return this.accession;
});

Clazz.newMeth(C$, 'getName$',  function () {
if (this.name == null ) {
this.name=Clazz.new_($I$(1,1));
}return this.name;
});

Clazz.newMeth(C$, 'getProtein$',  function () {
return this.protein;
});

Clazz.newMeth(C$, 'setProtein$jalview_xml_binding_uniprot_ProteinType',  function (value) {
this.protein=value;
});

Clazz.newMeth(C$, 'getGene$',  function () {
if (this.gene == null ) {
this.gene=Clazz.new_($I$(1,1));
}return this.gene;
});

Clazz.newMeth(C$, 'getOrganism$',  function () {
return this.organism;
});

Clazz.newMeth(C$, 'setOrganism$jalview_xml_binding_uniprot_OrganismType',  function (value) {
this.organism=value;
});

Clazz.newMeth(C$, 'getOrganismHost$',  function () {
if (this.organismHost == null ) {
this.organismHost=Clazz.new_($I$(1,1));
}return this.organismHost;
});

Clazz.newMeth(C$, 'getGeneLocation$',  function () {
if (this.geneLocation == null ) {
this.geneLocation=Clazz.new_($I$(1,1));
}return this.geneLocation;
});

Clazz.newMeth(C$, 'getReference$',  function () {
if (this.reference == null ) {
this.reference=Clazz.new_($I$(1,1));
}return this.reference;
});

Clazz.newMeth(C$, 'getComment$',  function () {
if (this.comment == null ) {
this.comment=Clazz.new_($I$(1,1));
}return this.comment;
});

Clazz.newMeth(C$, 'getDbReference$',  function () {
if (this.dbReference == null ) {
this.dbReference=Clazz.new_($I$(1,1));
}return this.dbReference;
});

Clazz.newMeth(C$, 'getProteinExistence$',  function () {
return this.proteinExistence;
});

Clazz.newMeth(C$, 'setProteinExistence$jalview_xml_binding_uniprot_ProteinExistenceType',  function (value) {
this.proteinExistence=value;
});

Clazz.newMeth(C$, 'getKeyword$',  function () {
if (this.keyword == null ) {
this.keyword=Clazz.new_($I$(1,1));
}return this.keyword;
});

Clazz.newMeth(C$, 'getFeature$',  function () {
if (this.feature == null ) {
this.feature=Clazz.new_($I$(1,1));
}return this.feature;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$jalview_xml_binding_uniprot_SequenceType',  function (value) {
this.sequence=value;
});

Clazz.newMeth(C$, 'getDataset$',  function () {
return this.dataset;
});

Clazz.newMeth(C$, 'setDataset$S',  function (value) {
this.dataset=value;
});

Clazz.newMeth(C$, 'getCreated$',  function () {
return this.created;
});

Clazz.newMeth(C$, 'setCreated$javax_xml_datatype_XMLGregorianCalendar',  function (value) {
this.created=value;
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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.Entry',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"accession"  "name"  "protein"  "gene"  "organism"  "organismHost"  "geneLocation"  "reference"  "comment"  "dbReference"  "proteinExistence"  "keyword"  "feature"  "evidence"  "sequence"  } ','name="entry" ']],
  [['accession','java.util.List<java.lang.String>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['name','.',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['protein','jalview.xml.binding.uniprot.ProteinType',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['organism','jalview.xml.binding.uniprot.OrganismType',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['reference','java.util.List<jalview.xml.binding.uniprot.ReferenceType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['comment','java.util.List<jalview.xml.binding.uniprot.CommentType>',null,['javax.xml.bind.annotation.XmlElement']],['nillable="true" ']],
  [['proteinExistence','jalview.xml.binding.uniprot.ProteinExistenceType',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['sequence','jalview.xml.binding.uniprot.SequenceType',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['dataset','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dataset" required="true" ']],
  [['created','javax.xml.datatype.XMLGregorianCalendar',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="created" required="true" ','name="date" ']],
  [['modified','.',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="modified" required="true" ','name="date" ']],
  [['version','int',null,['javax.xml.bind.annotation.XmlAttribute']],['name="version" required="true" ']],
  [['gene','java.util.List<jalview.xml.binding.uniprot.GeneType>'],['@XmlElement']],
  [['organismHost','java.util.List<jalview.xml.binding.uniprot.OrganismType>'],['@XmlElement']],
  [['geneLocation','java.util.List<jalview.xml.binding.uniprot.GeneLocationType>'],['@XmlElement']],
  [['dbReference','java.util.List<jalview.xml.binding.uniprot.DbReferenceType>'],['@XmlElement']],
  [['keyword','java.util.List<jalview.xml.binding.uniprot.KeywordType>'],['@XmlElement']],
  [['feature','java.util.List<jalview.xml.binding.uniprot.FeatureType>'],['@XmlElement']],
  [['evidence','java.util.List<jalview.xml.binding.uniprot.EvidenceType>'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
