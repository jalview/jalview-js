(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ProteinType", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.recommendedName=null;
this.alternativeName=null;
this.submittedName=null;
this.allergenName=null;
this.biotechName=null;
this.cdAntigenName=null;
this.innName=null;
this.domain=null;
this.component=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRecommendedName$', function () {
return this.recommendedName;
});

Clazz.newMeth(C$, 'setRecommendedName$jalview_xml_binding_uniprot_ProteinType_RecommendedName', function (value) {
this.recommendedName=value;
});

Clazz.newMeth(C$, 'getAlternativeName$', function () {
if (this.alternativeName == null ) {
this.alternativeName=Clazz.new_($I$(1));
}return this.alternativeName;
});

Clazz.newMeth(C$, 'getSubmittedName$', function () {
if (this.submittedName == null ) {
this.submittedName=Clazz.new_($I$(1));
}return this.submittedName;
});

Clazz.newMeth(C$, 'getAllergenName$', function () {
return this.allergenName;
});

Clazz.newMeth(C$, 'setAllergenName$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.allergenName=value;
});

Clazz.newMeth(C$, 'getBiotechName$', function () {
return this.biotechName;
});

Clazz.newMeth(C$, 'setBiotechName$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.biotechName=value;
});

Clazz.newMeth(C$, 'getCdAntigenName$', function () {
if (this.cdAntigenName == null ) {
this.cdAntigenName=Clazz.new_($I$(1));
}return this.cdAntigenName;
});

Clazz.newMeth(C$, 'getInnName$', function () {
if (this.innName == null ) {
this.innName=Clazz.new_($I$(1));
}return this.innName;
});

Clazz.newMeth(C$, 'getDomain$', function () {
if (this.domain == null ) {
this.domain=Clazz.new_($I$(1));
}return this.domain;
});

Clazz.newMeth(C$, 'getComponent$', function () {
if (this.component == null ) {
this.component=Clazz.new_($I$(1));
}return this.component;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.ProteinType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="proteinType" propOrder={"recommendedName"  "alternativeName"  "submittedName"  "allergenName"  "biotechName"  "cdAntigenName"  "innName"  "domain"  "component"  } )']],
  [['null','jalview.xml.binding.uniprot.ProteinType.AlternativeName'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.ProteinType.Component'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.ProteinType.Domain'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.ProteinType.RecommendedName'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.ProteinType.SubmittedName'],['!XmlInner']],
  [['recommendedName','jalview.xml.binding.uniprot.ProteinType.RecommendedName'],['@XmlElement']],
  [['alternativeName','java.util.List<jalview.xml.binding.uniprot.ProteinType.AlternativeName>'],['@XmlElement']],
  [['submittedName','java.util.List<jalview.xml.binding.uniprot.ProteinType.SubmittedName>'],['@XmlElement']],
  [['allergenName','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement']],
  [['biotechName','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement']],
  [['cdAntigenName','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']],
  [['innName','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']],
  [['domain','java.util.List<jalview.xml.binding.uniprot.ProteinType.Domain>'],['@XmlElement']],
  [['component','java.util.List<jalview.xml.binding.uniprot.ProteinType.Component>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.ProteinType, "AlternativeName", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fullName=null;
this.shortName=null;
this.ecNumber=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getFullName$', function () {
return this.fullName;
});

Clazz.newMeth(C$, 'setFullName$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.fullName=value;
});

Clazz.newMeth(C$, 'getShortName$', function () {
if (this.shortName == null ) {
this.shortName=Clazz.new_($I$(1));
}return this.shortName;
});

Clazz.newMeth(C$, 'getEcNumber$', function () {
if (this.ecNumber == null ) {
this.ecNumber=Clazz.new_($I$(1));
}return this.ecNumber;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.ProteinType.AlternativeName'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"fullName"  "shortName"  "ecNumber"  } )']],
  [['fullName','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement']],
  [['shortName','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']],
  [['ecNumber','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ProteinType, "Component", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.recommendedName=null;
this.alternativeName=null;
this.submittedName=null;
this.allergenName=null;
this.biotechName=null;
this.cdAntigenName=null;
this.innName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRecommendedName$', function () {
return this.recommendedName;
});

Clazz.newMeth(C$, 'setRecommendedName$jalview_xml_binding_uniprot_ProteinType_RecommendedName', function (value) {
this.recommendedName=value;
});

Clazz.newMeth(C$, 'getAlternativeName$', function () {
if (this.alternativeName == null ) {
this.alternativeName=Clazz.new_($I$(1));
}return this.alternativeName;
});

Clazz.newMeth(C$, 'getSubmittedName$', function () {
if (this.submittedName == null ) {
this.submittedName=Clazz.new_($I$(1));
}return this.submittedName;
});

Clazz.newMeth(C$, 'getAllergenName$', function () {
return this.allergenName;
});

Clazz.newMeth(C$, 'setAllergenName$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.allergenName=value;
});

Clazz.newMeth(C$, 'getBiotechName$', function () {
return this.biotechName;
});

Clazz.newMeth(C$, 'setBiotechName$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.biotechName=value;
});

Clazz.newMeth(C$, 'getCdAntigenName$', function () {
if (this.cdAntigenName == null ) {
this.cdAntigenName=Clazz.new_($I$(1));
}return this.cdAntigenName;
});

Clazz.newMeth(C$, 'getInnName$', function () {
if (this.innName == null ) {
this.innName=Clazz.new_($I$(1));
}return this.innName;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.ProteinType.Component'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"recommendedName"  "alternativeName"  "submittedName"  "allergenName"  "biotechName"  "cdAntigenName"  "innName"  } )']],
  [['recommendedName','jalview.xml.binding.uniprot.ProteinType.RecommendedName'],['@XmlElement']],
  [['alternativeName','java.util.List<jalview.xml.binding.uniprot.ProteinType.AlternativeName>'],['@XmlElement']],
  [['submittedName','java.util.List<jalview.xml.binding.uniprot.ProteinType.SubmittedName>'],['@XmlElement']],
  [['allergenName','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement']],
  [['biotechName','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement']],
  [['cdAntigenName','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']],
  [['innName','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ProteinType, "Domain", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.recommendedName=null;
this.alternativeName=null;
this.submittedName=null;
this.allergenName=null;
this.biotechName=null;
this.cdAntigenName=null;
this.innName=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRecommendedName$', function () {
return this.recommendedName;
});

Clazz.newMeth(C$, 'setRecommendedName$jalview_xml_binding_uniprot_ProteinType_RecommendedName', function (value) {
this.recommendedName=value;
});

Clazz.newMeth(C$, 'getAlternativeName$', function () {
if (this.alternativeName == null ) {
this.alternativeName=Clazz.new_($I$(1));
}return this.alternativeName;
});

Clazz.newMeth(C$, 'getSubmittedName$', function () {
if (this.submittedName == null ) {
this.submittedName=Clazz.new_($I$(1));
}return this.submittedName;
});

Clazz.newMeth(C$, 'getAllergenName$', function () {
return this.allergenName;
});

Clazz.newMeth(C$, 'setAllergenName$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.allergenName=value;
});

Clazz.newMeth(C$, 'getBiotechName$', function () {
return this.biotechName;
});

Clazz.newMeth(C$, 'setBiotechName$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.biotechName=value;
});

Clazz.newMeth(C$, 'getCdAntigenName$', function () {
if (this.cdAntigenName == null ) {
this.cdAntigenName=Clazz.new_($I$(1));
}return this.cdAntigenName;
});

Clazz.newMeth(C$, 'getInnName$', function () {
if (this.innName == null ) {
this.innName=Clazz.new_($I$(1));
}return this.innName;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.ProteinType.Domain'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"recommendedName"  "alternativeName"  "submittedName"  "allergenName"  "biotechName"  "cdAntigenName"  "innName"  } )']],
  [['recommendedName','jalview.xml.binding.uniprot.ProteinType.RecommendedName'],['@XmlElement']],
  [['alternativeName','java.util.List<jalview.xml.binding.uniprot.ProteinType.AlternativeName>'],['@XmlElement']],
  [['submittedName','java.util.List<jalview.xml.binding.uniprot.ProteinType.SubmittedName>'],['@XmlElement']],
  [['allergenName','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement']],
  [['biotechName','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement']],
  [['cdAntigenName','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']],
  [['innName','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ProteinType, "RecommendedName", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fullName=null;
this.shortName=null;
this.ecNumber=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getFullName$', function () {
return this.fullName;
});

Clazz.newMeth(C$, 'setFullName$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.fullName=value;
});

Clazz.newMeth(C$, 'getShortName$', function () {
if (this.shortName == null ) {
this.shortName=Clazz.new_($I$(1));
}return this.shortName;
});

Clazz.newMeth(C$, 'getEcNumber$', function () {
if (this.ecNumber == null ) {
this.ecNumber=Clazz.new_($I$(1));
}return this.ecNumber;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.ProteinType.RecommendedName'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"fullName"  "shortName"  "ecNumber"  } )']],
  [['fullName','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement(required="true" )']],
  [['shortName','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']],
  [['ecNumber','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ProteinType, "SubmittedName", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fullName=null;
this.ecNumber=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getFullName$', function () {
return this.fullName;
});

Clazz.newMeth(C$, 'setFullName$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.fullName=value;
});

Clazz.newMeth(C$, 'getEcNumber$', function () {
if (this.ecNumber == null ) {
this.ecNumber=Clazz.new_($I$(1));
}return this.ecNumber;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.ProteinType.SubmittedName'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"fullName"  "ecNumber"  } )']],
  [['fullName','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement(required="true" )']],
  [['ecNumber','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
