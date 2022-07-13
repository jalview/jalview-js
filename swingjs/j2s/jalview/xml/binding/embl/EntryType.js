(function(){var P$=Clazz.newPackage("jalview.xml.binding.embl"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EntryType", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Assembly',9],['Contig',9],['Feature',9],['Reference',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['description','comment','sequence','accession','dataClass','taxonomicDivision','moleculeType','topology'],'O',['secondaryAccession','java.util.List','+projectAccession','+keyword','+reference','+xref','+feature','assembly','jalview.xml.binding.embl.EntryType.Assembly','contig','jalview.xml.binding.embl.EntryType.Contig','version','java.math.BigInteger','+entryVersion','+sequenceLength','firstPublic','javax.xml.datatype.XMLGregorianCalendar','firstPublicRelease','java.math.BigInteger','lastUpdated','javax.xml.datatype.XMLGregorianCalendar','lastUpdatedRelease','java.math.BigInteger']]]

Clazz.newMeth(C$, 'getSecondaryAccession$',  function () {
if (this.secondaryAccession == null ) {
this.secondaryAccession=Clazz.new_($I$(1,1));
}return this.secondaryAccession;
});

Clazz.newMeth(C$, 'getProjectAccession$',  function () {
if (this.projectAccession == null ) {
this.projectAccession=Clazz.new_($I$(1,1));
}return this.projectAccession;
});

Clazz.newMeth(C$, 'getDescription$',  function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S',  function (value) {
this.description=value;
});

Clazz.newMeth(C$, 'getComment$',  function () {
return this.comment;
});

Clazz.newMeth(C$, 'setComment$S',  function (value) {
this.comment=value;
});

Clazz.newMeth(C$, 'getKeyword$',  function () {
if (this.keyword == null ) {
this.keyword=Clazz.new_($I$(1,1));
}return this.keyword;
});

Clazz.newMeth(C$, 'getReference$',  function () {
if (this.reference == null ) {
this.reference=Clazz.new_($I$(1,1));
}return this.reference;
});

Clazz.newMeth(C$, 'getXref$',  function () {
if (this.xref == null ) {
this.xref=Clazz.new_($I$(1,1));
}return this.xref;
});

Clazz.newMeth(C$, 'getFeature$',  function () {
if (this.feature == null ) {
this.feature=Clazz.new_($I$(1,1));
}return this.feature;
});

Clazz.newMeth(C$, 'getAssembly$',  function () {
return this.assembly;
});

Clazz.newMeth(C$, 'setAssembly$jalview_xml_binding_embl_EntryType_Assembly',  function (value) {
this.assembly=value;
});

Clazz.newMeth(C$, 'getContig$',  function () {
return this.contig;
});

Clazz.newMeth(C$, 'setContig$jalview_xml_binding_embl_EntryType_Contig',  function (value) {
this.contig=value;
});

Clazz.newMeth(C$, 'getSequence$',  function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$S',  function (value) {
this.sequence=value;
});

Clazz.newMeth(C$, 'getAccession$',  function () {
return this.accession;
});

Clazz.newMeth(C$, 'setAccession$S',  function (value) {
this.accession=value;
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$java_math_BigInteger',  function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'getEntryVersion$',  function () {
return this.entryVersion;
});

Clazz.newMeth(C$, 'setEntryVersion$java_math_BigInteger',  function (value) {
this.entryVersion=value;
});

Clazz.newMeth(C$, 'getDataClass$',  function () {
return this.dataClass;
});

Clazz.newMeth(C$, 'setDataClass$S',  function (value) {
this.dataClass=value;
});

Clazz.newMeth(C$, 'getTaxonomicDivision$',  function () {
return this.taxonomicDivision;
});

Clazz.newMeth(C$, 'setTaxonomicDivision$S',  function (value) {
this.taxonomicDivision=value;
});

Clazz.newMeth(C$, 'getMoleculeType$',  function () {
return this.moleculeType;
});

Clazz.newMeth(C$, 'setMoleculeType$S',  function (value) {
this.moleculeType=value;
});

Clazz.newMeth(C$, 'getSequenceLength$',  function () {
return this.sequenceLength;
});

Clazz.newMeth(C$, 'setSequenceLength$java_math_BigInteger',  function (value) {
this.sequenceLength=value;
});

Clazz.newMeth(C$, 'getTopology$',  function () {
return this.topology;
});

Clazz.newMeth(C$, 'setTopology$S',  function (value) {
this.topology=value;
});

Clazz.newMeth(C$, 'getFirstPublic$',  function () {
return this.firstPublic;
});

Clazz.newMeth(C$, 'setFirstPublic$javax_xml_datatype_XMLGregorianCalendar',  function (value) {
this.firstPublic=value;
});

Clazz.newMeth(C$, 'getFirstPublicRelease$',  function () {
return this.firstPublicRelease;
});

Clazz.newMeth(C$, 'setFirstPublicRelease$java_math_BigInteger',  function (value) {
this.firstPublicRelease=value;
});

Clazz.newMeth(C$, 'getLastUpdated$',  function () {
return this.lastUpdated;
});

Clazz.newMeth(C$, 'setLastUpdated$javax_xml_datatype_XMLGregorianCalendar',  function (value) {
this.lastUpdated=value;
});

Clazz.newMeth(C$, 'getLastUpdatedRelease$',  function () {
return this.lastUpdatedRelease;
});

Clazz.newMeth(C$, 'setLastUpdatedRelease$java_math_BigInteger',  function (value) {
this.lastUpdatedRelease=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="EntryType" propOrder={"secondaryAccession"  "projectAccession"  "description"  "comment"  "keyword"  "reference"  "xref"  "feature"  "assembly"  "contig"  "sequence"  } ']],
  [['description','String',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['accession','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="accession" required="true" ']],
  [['version','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="version" required="true" ']],
  [['entryVersion','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="entryVersion" ']],
  [['dataClass','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="dataClass" required="true" ']],
  [['taxonomicDivision','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="taxonomicDivision" required="true" ']],
  [['moleculeType','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="moleculeType" required="true" ']],
  [['sequenceLength','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="sequenceLength" required="true" ']],
  [['topology','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="topology" required="true" ']],
  [['firstPublic','javax.xml.datatype.XMLGregorianCalendar',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="firstPublic" ','name="date" ']],
  [['firstPublicRelease','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="firstPublicRelease" ']],
  [['lastUpdated','javax.xml.datatype.XMLGregorianCalendar',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="lastUpdated" ','name="date" ']],
  [['lastUpdatedRelease','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="lastUpdatedRelease" ']],
  [['null','jalview.xml.binding.embl.EntryType.Assembly'],['!XmlInner']],
  [['null','jalview.xml.binding.embl.EntryType.Contig'],['!XmlInner']],
  [['null','jalview.xml.binding.embl.EntryType.Feature'],['!XmlInner']],
  [['null','jalview.xml.binding.embl.EntryType.Reference'],['!XmlInner']],
  [['secondaryAccession','java.util.List<java.lang.String>'],['@XmlElement']],
  [['projectAccession','java.util.List<java.lang.String>'],['@XmlElement']],
  [['comment','String'],['@XmlElement']],
  [['keyword','java.util.List<java.lang.String>'],['@XmlElement']],
  [['reference','java.util.List<jalview.xml.binding.embl.EntryType.Reference>'],['@XmlElement']],
  [['xref','java.util.List<jalview.xml.binding.embl.XrefType>'],['@XmlElement']],
  [['feature','java.util.List<jalview.xml.binding.embl.EntryType.Feature>'],['@XmlElement']],
  [['assembly','jalview.xml.binding.embl.EntryType.Assembly'],['@XmlElement']],
  [['contig','jalview.xml.binding.embl.EntryType.Contig'],['@XmlElement']],
  [['sequence','String'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType, "Assembly", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Range',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['range','java.util.List']]]

Clazz.newMeth(C$, 'getRange$',  function () {
if (this.range == null ) {
this.range=Clazz.new_($I$(1,1));
}return this.range;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Assembly',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"range"  } ']],
  [['range','java.util.List<jalview.xml.binding.embl.EntryType.Assembly.Range>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['null','jalview.xml.binding.embl.EntryType.Assembly.Range'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType.Assembly, "Range", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['accession'],'O',['begin','java.math.BigInteger','+end','+primaryBegin','+primaryEnd','+version','complement','Boolean']]]

Clazz.newMeth(C$, 'getBegin$',  function () {
return this.begin;
});

Clazz.newMeth(C$, 'setBegin$java_math_BigInteger',  function (value) {
this.begin=value;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$java_math_BigInteger',  function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getPrimaryBegin$',  function () {
return this.primaryBegin;
});

Clazz.newMeth(C$, 'setPrimaryBegin$java_math_BigInteger',  function (value) {
this.primaryBegin=value;
});

Clazz.newMeth(C$, 'getPrimaryEnd$',  function () {
return this.primaryEnd;
});

Clazz.newMeth(C$, 'setPrimaryEnd$java_math_BigInteger',  function (value) {
this.primaryEnd=value;
});

Clazz.newMeth(C$, 'getAccession$',  function () {
return this.accession;
});

Clazz.newMeth(C$, 'setAccession$S',  function (value) {
this.accession=value;
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$java_math_BigInteger',  function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'isComplement$',  function () {
if (this.complement == null ) {
return false;
} else {
return (this.complement).valueOf();
}});

Clazz.newMeth(C$, 'setComplement$Boolean',  function (value) {
this.complement=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Assembly.Range',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['begin','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="begin" required="true" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" required="true" ']],
  [['primaryBegin','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="primaryBegin" ']],
  [['primaryEnd','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="primaryEnd" ']],
  [['accession','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="accession" required="true" ']],
  [['version','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="version" required="true" ']],
  [['complement','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="complement" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType, "Contig", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Gap',9],['Range',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['rangeOrGap','java.util.List']]]

Clazz.newMeth(C$, 'getRangeOrGap$',  function () {
if (this.rangeOrGap == null ) {
this.rangeOrGap=Clazz.new_($I$(1,1));
}return this.rangeOrGap;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Contig',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"rangeOrGap"  } ']],
  [['rangeOrGap','java.util.List<java.lang.Object>',null,['javax.xml.bind.annotation.XmlElements','javax.xml.bind.annotation.XmlElement','javax.xml.bind.annotation.XmlElement']],['{"@XmlElement(name="range",type=EntryType.Contig.Range.class)" ,"@XmlElement(name="gap",type=EntryType.Contig.Gap.class)" }','name="range" type="jalview.xml.binding.embl.EntryType.Contig.Range.class" ','name="gap" type="jalview.xml.binding.embl.EntryType.Contig.Gap.class" ']],
  [['null','jalview.xml.binding.embl.EntryType.Contig.Gap'],['!XmlInner']],
  [['null','jalview.xml.binding.embl.EntryType.Contig.Range'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType.Contig, "Gap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['begin','java.math.BigInteger','+end','+length','unknownLength','Boolean']]]

Clazz.newMeth(C$, 'getBegin$',  function () {
return this.begin;
});

Clazz.newMeth(C$, 'setBegin$java_math_BigInteger',  function (value) {
this.begin=value;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$java_math_BigInteger',  function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getLength$',  function () {
return this.length;
});

Clazz.newMeth(C$, 'setLength$java_math_BigInteger',  function (value) {
this.length=value;
});

Clazz.newMeth(C$, 'isUnknownLength$',  function () {
if (this.unknownLength == null ) {
return false;
} else {
return (this.unknownLength).valueOf();
}});

Clazz.newMeth(C$, 'setUnknownLength$Boolean',  function (value) {
this.unknownLength=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Contig.Gap',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['begin','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="begin" required="true" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" required="true" ']],
  [['length','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="length" required="true" ']],
  [['unknownLength','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="unknownLength" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType.Contig, "Range", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['accession'],'O',['begin','java.math.BigInteger','+end','+primaryBegin','+primaryEnd','+version','complement','Boolean']]]

Clazz.newMeth(C$, 'getBegin$',  function () {
return this.begin;
});

Clazz.newMeth(C$, 'setBegin$java_math_BigInteger',  function (value) {
this.begin=value;
});

Clazz.newMeth(C$, 'getEnd$',  function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$java_math_BigInteger',  function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getPrimaryBegin$',  function () {
return this.primaryBegin;
});

Clazz.newMeth(C$, 'setPrimaryBegin$java_math_BigInteger',  function (value) {
this.primaryBegin=value;
});

Clazz.newMeth(C$, 'getPrimaryEnd$',  function () {
return this.primaryEnd;
});

Clazz.newMeth(C$, 'setPrimaryEnd$java_math_BigInteger',  function (value) {
this.primaryEnd=value;
});

Clazz.newMeth(C$, 'getAccession$',  function () {
return this.accession;
});

Clazz.newMeth(C$, 'setAccession$S',  function (value) {
this.accession=value;
});

Clazz.newMeth(C$, 'getVersion$',  function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$java_math_BigInteger',  function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'isComplement$',  function () {
if (this.complement == null ) {
return false;
} else {
return (this.complement).valueOf();
}});

Clazz.newMeth(C$, 'setComplement$Boolean',  function (value) {
this.complement=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Contig.Range',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['begin','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="begin" required="true" ']],
  [['end','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="end" required="true" ']],
  [['primaryBegin','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="primaryBegin" ']],
  [['primaryEnd','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="primaryEnd" ']],
  [['accession','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="accession" required="true" ']],
  [['version','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="version" required="true" ']],
  [['complement','Boolean',null,['javax.xml.bind.annotation.XmlAttribute']],['name="complement" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType, "Feature", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['FeatureTaxon',9],['Qualifier',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','location'],'O',['taxon','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon','xref','java.util.List','+qualifier']]]

Clazz.newMeth(C$, 'getTaxon$',  function () {
return this.taxon;
});

Clazz.newMeth(C$, 'setTaxon$jalview_xml_binding_embl_EntryType_Feature_FeatureTaxon',  function (value) {
this.taxon=value;
});

Clazz.newMeth(C$, 'getXref$',  function () {
if (this.xref == null ) {
this.xref=Clazz.new_($I$(1,1));
}return this.xref;
});

Clazz.newMeth(C$, 'getQualifier$',  function () {
if (this.qualifier == null ) {
this.qualifier=Clazz.new_($I$(1,1));
}return this.qualifier;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return this.location;
});

Clazz.newMeth(C$, 'setLocation$S',  function (value) {
this.location=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Feature',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"taxon"  "xref"  "qualifier"  } ']],
  [['name','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="name" required="true" ']],
  [['location','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="location" required="true" ']],
  [['null','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon'],['!XmlInner']],
  [['null','jalview.xml.binding.embl.EntryType.Feature.Qualifier'],['!XmlInner']],
  [['taxon','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon'],['@XmlElement']],
  [['xref','java.util.List<jalview.xml.binding.embl.XrefType>'],['@XmlElement']],
  [['qualifier','java.util.List<jalview.xml.binding.embl.EntryType.Feature.Qualifier>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType.Feature, "FeatureTaxon", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Lineage',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['scientificName','commonName'],'O',['lineage','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage','taxId','java.math.BigInteger']]]

Clazz.newMeth(C$, 'getLineage$',  function () {
return this.lineage;
});

Clazz.newMeth(C$, 'setLineage$jalview_xml_binding_embl_EntryType_Feature_FeatureTaxon_Lineage',  function (value) {
this.lineage=value;
});

Clazz.newMeth(C$, 'getScientificName$',  function () {
return this.scientificName;
});

Clazz.newMeth(C$, 'setScientificName$S',  function (value) {
this.scientificName=value;
});

Clazz.newMeth(C$, 'getCommonName$',  function () {
return this.commonName;
});

Clazz.newMeth(C$, 'setCommonName$S',  function (value) {
this.commonName=value;
});

Clazz.newMeth(C$, 'getTaxId$',  function () {
return this.taxId;
});

Clazz.newMeth(C$, 'setTaxId$java_math_BigInteger',  function (value) {
this.taxId=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"lineage"  } ']],
  [['scientificName','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="scientificName" required="true" ']],
  [['commonName','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="commonName" ']],
  [['taxId','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="taxId" ']],
  [['null','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage'],['!XmlInner']],
  [['lineage','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType.Feature.FeatureTaxon, "Lineage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Taxon',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['taxon','java.util.List']]]

Clazz.newMeth(C$, 'getTaxon$',  function () {
if (this.taxon == null ) {
this.taxon=Clazz.new_($I$(1,1));
}return this.taxon;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"taxon"  } ']],
  [['taxon','java.util.List<jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage.Taxon>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['null','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage.Taxon'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType.Feature.FeatureTaxon.Lineage, "Taxon", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['scientificName']]]

Clazz.newMeth(C$, 'getScientificName$',  function () {
return this.scientificName;
});

Clazz.newMeth(C$, 'setScientificName$S',  function (value) {
this.scientificName=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage.Taxon',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['scientificName','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="scientificName" required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType.Feature, "Qualifier", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value','name']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (value) {
this.name=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Feature.Qualifier',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"value"  } ']],
  [['name','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="name" required="true" ']],
  [['value','String'],['@XmlElement']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EntryType, "Reference", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['title','consortium','journal','year','volume','issue','firstPage','lastPage','comment','referenceLocation','type','location'],'O',['author','java.util.List','+applicant','submissionDate','javax.xml.datatype.XMLGregorianCalendar','xref','java.util.List','number','java.math.BigInteger']]]

Clazz.newMeth(C$, 'getTitle$',  function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S',  function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getAuthor$',  function () {
if (this.author == null ) {
this.author=Clazz.new_($I$(1,1));
}return this.author;
});

Clazz.newMeth(C$, 'getApplicant$',  function () {
if (this.applicant == null ) {
this.applicant=Clazz.new_($I$(1,1));
}return this.applicant;
});

Clazz.newMeth(C$, 'getConsortium$',  function () {
return this.consortium;
});

Clazz.newMeth(C$, 'setConsortium$S',  function (value) {
this.consortium=value;
});

Clazz.newMeth(C$, 'getSubmissionDate$',  function () {
return this.submissionDate;
});

Clazz.newMeth(C$, 'setSubmissionDate$javax_xml_datatype_XMLGregorianCalendar',  function (value) {
this.submissionDate=value;
});

Clazz.newMeth(C$, 'getJournal$',  function () {
return this.journal;
});

Clazz.newMeth(C$, 'setJournal$S',  function (value) {
this.journal=value;
});

Clazz.newMeth(C$, 'getYear$',  function () {
return this.year;
});

Clazz.newMeth(C$, 'setYear$S',  function (value) {
this.year=value;
});

Clazz.newMeth(C$, 'getVolume$',  function () {
return this.volume;
});

Clazz.newMeth(C$, 'setVolume$S',  function (value) {
this.volume=value;
});

Clazz.newMeth(C$, 'getIssue$',  function () {
return this.issue;
});

Clazz.newMeth(C$, 'setIssue$S',  function (value) {
this.issue=value;
});

Clazz.newMeth(C$, 'getFirstPage$',  function () {
return this.firstPage;
});

Clazz.newMeth(C$, 'setFirstPage$S',  function (value) {
this.firstPage=value;
});

Clazz.newMeth(C$, 'getLastPage$',  function () {
return this.lastPage;
});

Clazz.newMeth(C$, 'setLastPage$S',  function (value) {
this.lastPage=value;
});

Clazz.newMeth(C$, 'getComment$',  function () {
return this.comment;
});

Clazz.newMeth(C$, 'setComment$S',  function (value) {
this.comment=value;
});

Clazz.newMeth(C$, 'getReferenceLocation$',  function () {
return this.referenceLocation;
});

Clazz.newMeth(C$, 'setReferenceLocation$S',  function (value) {
this.referenceLocation=value;
});

Clazz.newMeth(C$, 'getXref$',  function () {
if (this.xref == null ) {
this.xref=Clazz.new_($I$(1,1));
}return this.xref;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S',  function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getNumber$',  function () {
return this.number;
});

Clazz.newMeth(C$, 'setNumber$java_math_BigInteger',  function (value) {
this.number=value;
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return this.location;
});

Clazz.newMeth(C$, 'setLocation$S',  function (value) {
this.location=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntryType.Reference',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"title"  "author"  "applicant"  "consortium"  "submissionDate"  "journal"  "year"  "volume"  "issue"  "firstPage"  "lastPage"  "comment"  "referenceLocation"  "xref"  } ']],
  [['submissionDate','javax.xml.datatype.XMLGregorianCalendar',null,['javax.xml.bind.annotation.XmlSchemaType']],['name="date" ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['number','java.math.BigInteger',null,['javax.xml.bind.annotation.XmlAttribute']],['name="number" required="true" ']],
  [['location','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="location" ']],
  [['title','String'],['@XmlElement']],
  [['author','java.util.List<java.lang.String>'],['@XmlElement']],
  [['applicant','java.util.List<java.lang.String>'],['@XmlElement']],
  [['consortium','String'],['@XmlElement']],
  [['journal','String'],['@XmlElement']],
  [['year','String'],['@XmlElement']],
  [['volume','String'],['@XmlElement']],
  [['issue','String'],['@XmlElement']],
  [['firstPage','String'],['@XmlElement']],
  [['lastPage','String'],['@XmlElement']],
  [['comment','String'],['@XmlElement']],
  [['referenceLocation','String'],['@XmlElement']],
  [['xref','java.util.List<jalview.xml.binding.embl.XrefType>'],['@XmlElement']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
