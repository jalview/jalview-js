(function(){var P$=Clazz.newPackage("jalview.xml.binding.embl"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EntryType", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.secondaryAccession=null;
this.projectAccession=null;
this.description=null;
this.comment=null;
this.keyword=null;
this.reference=null;
this.xref=null;
this.feature=null;
this.assembly=null;
this.contig=null;
this.sequence=null;
this.accession=null;
this.version=null;
this.entryVersion=null;
this.dataClass=null;
this.taxonomicDivision=null;
this.moleculeType=null;
this.sequenceLength=null;
this.topology=null;
this.firstPublic=null;
this.firstPublicRelease=null;
this.lastUpdated=null;
this.lastUpdatedRelease=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSecondaryAccession$', function () {
if (this.secondaryAccession == null ) {
this.secondaryAccession=Clazz.new_($I$(1));
}return this.secondaryAccession;
});

Clazz.newMeth(C$, 'getProjectAccession$', function () {
if (this.projectAccession == null ) {
this.projectAccession=Clazz.new_($I$(1));
}return this.projectAccession;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (value) {
this.description=value;
});

Clazz.newMeth(C$, 'getComment$', function () {
return this.comment;
});

Clazz.newMeth(C$, 'setComment$S', function (value) {
this.comment=value;
});

Clazz.newMeth(C$, 'getKeyword$', function () {
if (this.keyword == null ) {
this.keyword=Clazz.new_($I$(1));
}return this.keyword;
});

Clazz.newMeth(C$, 'getReference$', function () {
if (this.reference == null ) {
this.reference=Clazz.new_($I$(1));
}return this.reference;
});

Clazz.newMeth(C$, 'getXref$', function () {
if (this.xref == null ) {
this.xref=Clazz.new_($I$(1));
}return this.xref;
});

Clazz.newMeth(C$, 'getFeature$', function () {
if (this.feature == null ) {
this.feature=Clazz.new_($I$(1));
}return this.feature;
});

Clazz.newMeth(C$, 'getAssembly$', function () {
return this.assembly;
});

Clazz.newMeth(C$, 'setAssembly$jalview_xml_binding_embl_EntryType_Assembly', function (value) {
this.assembly=value;
});

Clazz.newMeth(C$, 'getContig$', function () {
return this.contig;
});

Clazz.newMeth(C$, 'setContig$jalview_xml_binding_embl_EntryType_Contig', function (value) {
this.contig=value;
});

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$S', function (value) {
this.sequence=value;
});

Clazz.newMeth(C$, 'getAccession$', function () {
return this.accession;
});

Clazz.newMeth(C$, 'setAccession$S', function (value) {
this.accession=value;
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$java_math_BigInteger', function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'getEntryVersion$', function () {
return this.entryVersion;
});

Clazz.newMeth(C$, 'setEntryVersion$java_math_BigInteger', function (value) {
this.entryVersion=value;
});

Clazz.newMeth(C$, 'getDataClass$', function () {
return this.dataClass;
});

Clazz.newMeth(C$, 'setDataClass$S', function (value) {
this.dataClass=value;
});

Clazz.newMeth(C$, 'getTaxonomicDivision$', function () {
return this.taxonomicDivision;
});

Clazz.newMeth(C$, 'setTaxonomicDivision$S', function (value) {
this.taxonomicDivision=value;
});

Clazz.newMeth(C$, 'getMoleculeType$', function () {
return this.moleculeType;
});

Clazz.newMeth(C$, 'setMoleculeType$S', function (value) {
this.moleculeType=value;
});

Clazz.newMeth(C$, 'getSequenceLength$', function () {
return this.sequenceLength;
});

Clazz.newMeth(C$, 'setSequenceLength$java_math_BigInteger', function (value) {
this.sequenceLength=value;
});

Clazz.newMeth(C$, 'getTopology$', function () {
return this.topology;
});

Clazz.newMeth(C$, 'setTopology$S', function (value) {
this.topology=value;
});

Clazz.newMeth(C$, 'getFirstPublic$', function () {
return this.firstPublic;
});

Clazz.newMeth(C$, 'setFirstPublic$javax_xml_datatype_XMLGregorianCalendar', function (value) {
this.firstPublic=value;
});

Clazz.newMeth(C$, 'getFirstPublicRelease$', function () {
return this.firstPublicRelease;
});

Clazz.newMeth(C$, 'setFirstPublicRelease$java_math_BigInteger', function (value) {
this.firstPublicRelease=value;
});

Clazz.newMeth(C$, 'getLastUpdated$', function () {
return this.lastUpdated;
});

Clazz.newMeth(C$, 'setLastUpdated$javax_xml_datatype_XMLGregorianCalendar', function (value) {
this.lastUpdated=value;
});

Clazz.newMeth(C$, 'getLastUpdatedRelease$', function () {
return this.lastUpdatedRelease;
});

Clazz.newMeth(C$, 'setLastUpdatedRelease$java_math_BigInteger', function (value) {
this.lastUpdatedRelease=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="EntryType" propOrder={"secondaryAccession"  "projectAccession"  "description"  "comment"  "keyword"  "reference"  "xref"  "feature"  "assembly"  "contig"  "sequence"  } )']],
  [['description','String'],['@XmlElement(required="true" )']],
  [['accession','.'],['@XmlAttribute(name="accession" required="true" )']],
  [['version','java.math.BigInteger'],['@XmlAttribute(name="version" required="true" )']],
  [['entryVersion','.'],['@XmlAttribute(name="entryVersion" )']],
  [['dataClass','String'],['@XmlAttribute(name="dataClass" required="true" )']],
  [['taxonomicDivision','.'],['@XmlAttribute(name="taxonomicDivision" required="true" )']],
  [['moleculeType','.'],['@XmlAttribute(name="moleculeType" required="true" )']],
  [['sequenceLength','java.math.BigInteger'],['@XmlAttribute(name="sequenceLength" required="true" )']],
  [['topology','String'],['@XmlAttribute(name="topology" required="true" )']],
  [['firstPublic','javax.xml.datatype.XMLGregorianCalendar'],['@XmlAttribute(name="firstPublic" )','@XmlSchemaType(name="date" )']],
  [['firstPublicRelease','java.math.BigInteger'],['@XmlAttribute(name="firstPublicRelease" )']],
  [['lastUpdated','javax.xml.datatype.XMLGregorianCalendar'],['@XmlAttribute(name="lastUpdated" )','@XmlSchemaType(name="date" )']],
  [['lastUpdatedRelease','java.math.BigInteger'],['@XmlAttribute(name="lastUpdatedRelease" )']],
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
  [['sequence','String'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.EntryType, "Assembly", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.range=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRange$', function () {
if (this.range == null ) {
this.range=Clazz.new_($I$(1));
}return this.range;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Assembly'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"range"  } )']],
  [['range','java.util.List<jalview.xml.binding.embl.EntryType.Assembly.Range>'],['@XmlElement(required="true" )']],
  [['null','jalview.xml.binding.embl.EntryType.Assembly.Range'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.EntryType.Assembly, "Range", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.begin=null;
this.end=null;
this.primaryBegin=null;
this.primaryEnd=null;
this.accession=null;
this.version=null;
this.complement=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getBegin$', function () {
return this.begin;
});

Clazz.newMeth(C$, 'setBegin$java_math_BigInteger', function (value) {
this.begin=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$java_math_BigInteger', function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getPrimaryBegin$', function () {
return this.primaryBegin;
});

Clazz.newMeth(C$, 'setPrimaryBegin$java_math_BigInteger', function (value) {
this.primaryBegin=value;
});

Clazz.newMeth(C$, 'getPrimaryEnd$', function () {
return this.primaryEnd;
});

Clazz.newMeth(C$, 'setPrimaryEnd$java_math_BigInteger', function (value) {
this.primaryEnd=value;
});

Clazz.newMeth(C$, 'getAccession$', function () {
return this.accession;
});

Clazz.newMeth(C$, 'setAccession$S', function (value) {
this.accession=value;
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$java_math_BigInteger', function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'isComplement$', function () {
if (this.complement == null ) {
return false;
} else {
return (this.complement).booleanValue$();
}});

Clazz.newMeth(C$, 'setComplement$Boolean', function (value) {
this.complement=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Assembly.Range'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['begin','java.math.BigInteger'],['@XmlAttribute(name="begin" required="true" )']],
  [['end','.'],['@XmlAttribute(name="end" required="true" )']],
  [['primaryBegin','.'],['@XmlAttribute(name="primaryBegin" )']],
  [['primaryEnd','.'],['@XmlAttribute(name="primaryEnd" )']],
  [['accession','String'],['@XmlAttribute(name="accession" required="true" )']],
  [['version','java.math.BigInteger'],['@XmlAttribute(name="version" required="true" )']],
  [['complement','Boolean'],['@XmlAttribute(name="complement" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.EntryType, "Contig", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rangeOrGap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRangeOrGap$', function () {
if (this.rangeOrGap == null ) {
this.rangeOrGap=Clazz.new_($I$(1));
}return this.rangeOrGap;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Contig'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"rangeOrGap"  } )']],
  [['rangeOrGap','java.util.List<java.lang.Object>'],['@XmlElements({"@XmlElement(name="range",type=EntryType.Contig.Range.class)" ,"@XmlElement(name="gap",type=EntryType.Contig.Gap.class)" })','@XmlElement(name="gap" type="jalview.xml.binding.embl.EntryType.Contig.Gap.class" )','@XmlElement(name="range" type="jalview.xml.binding.embl.EntryType.Contig.Range.class" )']],
  [['null','jalview.xml.binding.embl.EntryType.Contig.Gap'],['!XmlInner']],
  [['null','jalview.xml.binding.embl.EntryType.Contig.Range'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.EntryType.Contig, "Gap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.begin=null;
this.end=null;
this.length=null;
this.unknownLength=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getBegin$', function () {
return this.begin;
});

Clazz.newMeth(C$, 'setBegin$java_math_BigInteger', function (value) {
this.begin=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$java_math_BigInteger', function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'setLength$java_math_BigInteger', function (value) {
this.length=value;
});

Clazz.newMeth(C$, 'isUnknownLength$', function () {
if (this.unknownLength == null ) {
return false;
} else {
return (this.unknownLength).booleanValue$();
}});

Clazz.newMeth(C$, 'setUnknownLength$Boolean', function (value) {
this.unknownLength=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Contig.Gap'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['begin','java.math.BigInteger'],['@XmlAttribute(name="begin" required="true" )']],
  [['end','.'],['@XmlAttribute(name="end" required="true" )']],
  [['length','.'],['@XmlAttribute(name="length" required="true" )']],
  [['unknownLength','Boolean'],['@XmlAttribute(name="unknownLength" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.EntryType.Contig, "Range", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.begin=null;
this.end=null;
this.primaryBegin=null;
this.primaryEnd=null;
this.accession=null;
this.version=null;
this.complement=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getBegin$', function () {
return this.begin;
});

Clazz.newMeth(C$, 'setBegin$java_math_BigInteger', function (value) {
this.begin=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$java_math_BigInteger', function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getPrimaryBegin$', function () {
return this.primaryBegin;
});

Clazz.newMeth(C$, 'setPrimaryBegin$java_math_BigInteger', function (value) {
this.primaryBegin=value;
});

Clazz.newMeth(C$, 'getPrimaryEnd$', function () {
return this.primaryEnd;
});

Clazz.newMeth(C$, 'setPrimaryEnd$java_math_BigInteger', function (value) {
this.primaryEnd=value;
});

Clazz.newMeth(C$, 'getAccession$', function () {
return this.accession;
});

Clazz.newMeth(C$, 'setAccession$S', function (value) {
this.accession=value;
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$java_math_BigInteger', function (value) {
this.version=value;
});

Clazz.newMeth(C$, 'isComplement$', function () {
if (this.complement == null ) {
return false;
} else {
return (this.complement).booleanValue$();
}});

Clazz.newMeth(C$, 'setComplement$Boolean', function (value) {
this.complement=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Contig.Range'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['begin','java.math.BigInteger'],['@XmlAttribute(name="begin" required="true" )']],
  [['end','.'],['@XmlAttribute(name="end" required="true" )']],
  [['primaryBegin','.'],['@XmlAttribute(name="primaryBegin" )']],
  [['primaryEnd','.'],['@XmlAttribute(name="primaryEnd" )']],
  [['accession','String'],['@XmlAttribute(name="accession" required="true" )']],
  [['version','java.math.BigInteger'],['@XmlAttribute(name="version" required="true" )']],
  [['complement','Boolean'],['@XmlAttribute(name="complement" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.EntryType, "Feature", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.taxon=null;
this.xref=null;
this.qualifier=null;
this.name=null;
this.location=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTaxon$', function () {
return this.taxon;
});

Clazz.newMeth(C$, 'setTaxon$jalview_xml_binding_embl_EntryType_Feature_FeatureTaxon', function (value) {
this.taxon=value;
});

Clazz.newMeth(C$, 'getXref$', function () {
if (this.xref == null ) {
this.xref=Clazz.new_($I$(1));
}return this.xref;
});

Clazz.newMeth(C$, 'getQualifier$', function () {
if (this.qualifier == null ) {
this.qualifier=Clazz.new_($I$(1));
}return this.qualifier;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getLocation$', function () {
return this.location;
});

Clazz.newMeth(C$, 'setLocation$S', function (value) {
this.location=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Feature'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"taxon"  "xref"  "qualifier"  } )']],
  [['name','String'],['@XmlAttribute(name="name" required="true" )']],
  [['location','.'],['@XmlAttribute(name="location" required="true" )']],
  [['null','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon'],['!XmlInner']],
  [['null','jalview.xml.binding.embl.EntryType.Feature.Qualifier'],['!XmlInner']],
  [['taxon','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon'],['@XmlElement']],
  [['xref','java.util.List<jalview.xml.binding.embl.XrefType>'],['@XmlElement']],
  [['qualifier','java.util.List<jalview.xml.binding.embl.EntryType.Feature.Qualifier>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.EntryType.Feature, "FeatureTaxon", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lineage=null;
this.scientificName=null;
this.commonName=null;
this.taxId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getLineage$', function () {
return this.lineage;
});

Clazz.newMeth(C$, 'setLineage$jalview_xml_binding_embl_EntryType_Feature_FeatureTaxon_Lineage', function (value) {
this.lineage=value;
});

Clazz.newMeth(C$, 'getScientificName$', function () {
return this.scientificName;
});

Clazz.newMeth(C$, 'setScientificName$S', function (value) {
this.scientificName=value;
});

Clazz.newMeth(C$, 'getCommonName$', function () {
return this.commonName;
});

Clazz.newMeth(C$, 'setCommonName$S', function (value) {
this.commonName=value;
});

Clazz.newMeth(C$, 'getTaxId$', function () {
return this.taxId;
});

Clazz.newMeth(C$, 'setTaxId$java_math_BigInteger', function (value) {
this.taxId=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"lineage"  } )']],
  [['scientificName','String'],['@XmlAttribute(name="scientificName" required="true" )']],
  [['commonName','.'],['@XmlAttribute(name="commonName" )']],
  [['taxId','java.math.BigInteger'],['@XmlAttribute(name="taxId" )']],
  [['null','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage'],['!XmlInner']],
  [['lineage','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.EntryType.Feature.FeatureTaxon, "Lineage", function(){
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
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"taxon"  } )']],
  [['taxon','java.util.List<jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage.Taxon>'],['@XmlElement(required="true" )']],
  [['null','jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage.Taxon'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.EntryType.Feature.FeatureTaxon.Lineage, "Taxon", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.scientificName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getScientificName$', function () {
return this.scientificName;
});

Clazz.newMeth(C$, 'setScientificName$S', function (value) {
this.scientificName=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Feature.FeatureTaxon.Lineage.Taxon'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['scientificName','String'],['@XmlAttribute(name="scientificName" required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.EntryType.Feature, "Qualifier", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Feature.Qualifier'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"value"  } )']],
  [['name','String'],['@XmlAttribute(name="name" required="true" )']],
  [['value','String'],['@XmlElement']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.EntryType, "Reference", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.title=null;
this.author=null;
this.applicant=null;
this.consortium=null;
this.submissionDate=null;
this.journal=null;
this.year=null;
this.volume=null;
this.issue=null;
this.firstPage=null;
this.lastPage=null;
this.comment=null;
this.referenceLocation=null;
this.xref=null;
this.type=null;
this.number=null;
this.location=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTitle$', function () {
return this.title;
});

Clazz.newMeth(C$, 'setTitle$S', function (value) {
this.title=value;
});

Clazz.newMeth(C$, 'getAuthor$', function () {
if (this.author == null ) {
this.author=Clazz.new_($I$(1));
}return this.author;
});

Clazz.newMeth(C$, 'getApplicant$', function () {
if (this.applicant == null ) {
this.applicant=Clazz.new_($I$(1));
}return this.applicant;
});

Clazz.newMeth(C$, 'getConsortium$', function () {
return this.consortium;
});

Clazz.newMeth(C$, 'setConsortium$S', function (value) {
this.consortium=value;
});

Clazz.newMeth(C$, 'getSubmissionDate$', function () {
return this.submissionDate;
});

Clazz.newMeth(C$, 'setSubmissionDate$javax_xml_datatype_XMLGregorianCalendar', function (value) {
this.submissionDate=value;
});

Clazz.newMeth(C$, 'getJournal$', function () {
return this.journal;
});

Clazz.newMeth(C$, 'setJournal$S', function (value) {
this.journal=value;
});

Clazz.newMeth(C$, 'getYear$', function () {
return this.year;
});

Clazz.newMeth(C$, 'setYear$S', function (value) {
this.year=value;
});

Clazz.newMeth(C$, 'getVolume$', function () {
return this.volume;
});

Clazz.newMeth(C$, 'setVolume$S', function (value) {
this.volume=value;
});

Clazz.newMeth(C$, 'getIssue$', function () {
return this.issue;
});

Clazz.newMeth(C$, 'setIssue$S', function (value) {
this.issue=value;
});

Clazz.newMeth(C$, 'getFirstPage$', function () {
return this.firstPage;
});

Clazz.newMeth(C$, 'setFirstPage$S', function (value) {
this.firstPage=value;
});

Clazz.newMeth(C$, 'getLastPage$', function () {
return this.lastPage;
});

Clazz.newMeth(C$, 'setLastPage$S', function (value) {
this.lastPage=value;
});

Clazz.newMeth(C$, 'getComment$', function () {
return this.comment;
});

Clazz.newMeth(C$, 'setComment$S', function (value) {
this.comment=value;
});

Clazz.newMeth(C$, 'getReferenceLocation$', function () {
return this.referenceLocation;
});

Clazz.newMeth(C$, 'setReferenceLocation$S', function (value) {
this.referenceLocation=value;
});

Clazz.newMeth(C$, 'getXref$', function () {
if (this.xref == null ) {
this.xref=Clazz.new_($I$(1));
}return this.xref;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getNumber$', function () {
return this.number;
});

Clazz.newMeth(C$, 'setNumber$java_math_BigInteger', function (value) {
this.number=value;
});

Clazz.newMeth(C$, 'getLocation$', function () {
return this.location;
});

Clazz.newMeth(C$, 'setLocation$S', function (value) {
this.location=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntryType.Reference'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"title"  "author"  "applicant"  "consortium"  "submissionDate"  "journal"  "year"  "volume"  "issue"  "firstPage"  "lastPage"  "comment"  "referenceLocation"  "xref"  } )']],
  [['submissionDate','javax.xml.datatype.XMLGregorianCalendar'],['@XmlSchemaType(name="date" )']],
  [['type','String'],['@XmlAttribute(name="type" required="true" )']],
  [['number','java.math.BigInteger'],['@XmlAttribute(name="number" required="true" )']],
  [['location','String'],['@XmlAttribute(name="location" )']],
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
  [['xref','java.util.List<jalview.xml.binding.embl.XrefType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
