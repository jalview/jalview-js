(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CommentType", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.molecule=null;
this.absorption=null;
this.kinetics=null;
this.phDependence=null;
this.redoxPotential=null;
this.temperatureDependence=null;
this.reaction=null;
this.physiologicalReaction=null;
this.cofactor=null;
this.subcellularLocation=null;
this.conflict=null;
this.link=null;
this.event=null;
this.isoform=null;
this.interactant=null;
this.organismsDiffer=null;
this.experiments=null;
this.disease=null;
this.location=null;
this.text=null;
this.type=null;
this.locationType=null;
this.name=null;
this.mass=null;
this.error=null;
this.method=null;
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

Clazz.newMeth(C$, 'getAbsorption$', function () {
return this.absorption;
});

Clazz.newMeth(C$, 'setAbsorption$jalview_xml_binding_uniprot_CommentType_Absorption', function (value) {
this.absorption=value;
});

Clazz.newMeth(C$, 'getKinetics$', function () {
return this.kinetics;
});

Clazz.newMeth(C$, 'setKinetics$jalview_xml_binding_uniprot_CommentType_Kinetics', function (value) {
this.kinetics=value;
});

Clazz.newMeth(C$, 'getPhDependence$', function () {
return this.phDependence;
});

Clazz.newMeth(C$, 'setPhDependence$jalview_xml_binding_uniprot_CommentType_PhDependence', function (value) {
this.phDependence=value;
});

Clazz.newMeth(C$, 'getRedoxPotential$', function () {
return this.redoxPotential;
});

Clazz.newMeth(C$, 'setRedoxPotential$jalview_xml_binding_uniprot_CommentType_RedoxPotential', function (value) {
this.redoxPotential=value;
});

Clazz.newMeth(C$, 'getTemperatureDependence$', function () {
return this.temperatureDependence;
});

Clazz.newMeth(C$, 'setTemperatureDependence$jalview_xml_binding_uniprot_CommentType_TemperatureDependence', function (value) {
this.temperatureDependence=value;
});

Clazz.newMeth(C$, 'getReaction$', function () {
return this.reaction;
});

Clazz.newMeth(C$, 'setReaction$jalview_xml_binding_uniprot_ReactionType', function (value) {
this.reaction=value;
});

Clazz.newMeth(C$, 'getPhysiologicalReaction$', function () {
if (this.physiologicalReaction == null ) {
this.physiologicalReaction=Clazz.new_($I$(1));
}return this.physiologicalReaction;
});

Clazz.newMeth(C$, 'getCofactor$', function () {
if (this.cofactor == null ) {
this.cofactor=Clazz.new_($I$(1));
}return this.cofactor;
});

Clazz.newMeth(C$, 'getSubcellularLocation$', function () {
if (this.subcellularLocation == null ) {
this.subcellularLocation=Clazz.new_($I$(1));
}return this.subcellularLocation;
});

Clazz.newMeth(C$, 'getConflict$', function () {
return this.conflict;
});

Clazz.newMeth(C$, 'setConflict$jalview_xml_binding_uniprot_CommentType_Conflict', function (value) {
this.conflict=value;
});

Clazz.newMeth(C$, 'getLink$', function () {
if (this.link == null ) {
this.link=Clazz.new_($I$(1));
}return this.link;
});

Clazz.newMeth(C$, 'getEvent$', function () {
if (this.event == null ) {
this.event=Clazz.new_($I$(1));
}return this.event;
});

Clazz.newMeth(C$, 'getIsoform$', function () {
if (this.isoform == null ) {
this.isoform=Clazz.new_($I$(1));
}return this.isoform;
});

Clazz.newMeth(C$, 'getInteractant$', function () {
if (this.interactant == null ) {
this.interactant=Clazz.new_($I$(1));
}return this.interactant;
});

Clazz.newMeth(C$, 'isOrganismsDiffer$', function () {
return this.organismsDiffer;
});

Clazz.newMeth(C$, 'setOrganismsDiffer$Boolean', function (value) {
this.organismsDiffer=value;
});

Clazz.newMeth(C$, 'getExperiments$', function () {
return this.experiments;
});

Clazz.newMeth(C$, 'setExperiments$Integer', function (value) {
this.experiments=value;
});

Clazz.newMeth(C$, 'getDisease$', function () {
return this.disease;
});

Clazz.newMeth(C$, 'setDisease$jalview_xml_binding_uniprot_CommentType_Disease', function (value) {
this.disease=value;
});

Clazz.newMeth(C$, 'getLocation$', function () {
if (this.location == null ) {
this.location=Clazz.new_($I$(1));
}return this.location;
});

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1));
}return this.text;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getLocationType$', function () {
return this.locationType;
});

Clazz.newMeth(C$, 'setLocationType$S', function (value) {
this.locationType=value;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getMass$', function () {
return this.mass;
});

Clazz.newMeth(C$, 'setMass$Float', function (value) {
this.mass=value;
});

Clazz.newMeth(C$, 'getError$', function () {
return this.error;
});

Clazz.newMeth(C$, 'setError$S', function (value) {
this.error=value;
});

Clazz.newMeth(C$, 'getMethod$', function () {
return this.method;
});

Clazz.newMeth(C$, 'setMethod$S', function (value) {
this.method=value;
});

Clazz.newMeth(C$, 'getEvidence$', function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1));
}return this.evidence;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CommentType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="commentType" propOrder={"molecule"  "absorption"  "kinetics"  "phDependence"  "redoxPotential"  "temperatureDependence"  "reaction"  "physiologicalReaction"  "cofactor"  "subcellularLocation"  "conflict"  "link"  "event"  "isoform"  "interactant"  "organismsDiffer"  "experiments"  "disease"  "location"  "text"  } )']],
  [['organismsDiffer','Boolean'],['@XmlElement(defaultValue="false" )']],
  [['type','String'],['@XmlAttribute(name="type" required="true" )']],
  [['locationType','.'],['@XmlAttribute(name="locationType" )']],
  [['name','.'],['@XmlAttribute(name="name" )']],
  [['mass','Float'],['@XmlAttribute(name="mass" )']],
  [['error','String'],['@XmlAttribute(name="error" )']],
  [['method','.'],['@XmlAttribute(name="method" )']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']],
  [['null','jalview.xml.binding.uniprot.CommentType.Absorption'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.CommentType.Conflict'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.CommentType.Disease'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.CommentType.Kinetics'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.CommentType.Link'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.CommentType.PhDependence'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.CommentType.RedoxPotential'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.CommentType.TemperatureDependence'],['!XmlInner']],
  [['molecule','jalview.xml.binding.uniprot.MoleculeType'],['@XmlElement']],
  [['absorption','jalview.xml.binding.uniprot.CommentType.Absorption'],['@XmlElement']],
  [['kinetics','jalview.xml.binding.uniprot.CommentType.Kinetics'],['@XmlElement']],
  [['phDependence','jalview.xml.binding.uniprot.CommentType.PhDependence'],['@XmlElement']],
  [['redoxPotential','jalview.xml.binding.uniprot.CommentType.RedoxPotential'],['@XmlElement']],
  [['temperatureDependence','jalview.xml.binding.uniprot.CommentType.TemperatureDependence'],['@XmlElement']],
  [['reaction','jalview.xml.binding.uniprot.ReactionType'],['@XmlElement']],
  [['physiologicalReaction','java.util.List<jalview.xml.binding.uniprot.PhysiologicalReactionType>'],['@XmlElement']],
  [['cofactor','java.util.List<jalview.xml.binding.uniprot.CofactorType>'],['@XmlElement']],
  [['subcellularLocation','java.util.List<jalview.xml.binding.uniprot.SubcellularLocationType>'],['@XmlElement']],
  [['conflict','jalview.xml.binding.uniprot.CommentType.Conflict'],['@XmlElement']],
  [['link','java.util.List<jalview.xml.binding.uniprot.CommentType.Link>'],['@XmlElement']],
  [['event','java.util.List<jalview.xml.binding.uniprot.EventType>'],['@XmlElement']],
  [['isoform','java.util.List<jalview.xml.binding.uniprot.IsoformType>'],['@XmlElement']],
  [['interactant','java.util.List<jalview.xml.binding.uniprot.InteractantType>'],['@XmlElement']],
  [['experiments','Integer'],['@XmlElement']],
  [['disease','jalview.xml.binding.uniprot.CommentType.Disease'],['@XmlElement']],
  [['location','java.util.List<jalview.xml.binding.uniprot.LocationType>'],['@XmlElement']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.CommentType, "Absorption", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.max=null;
this.text=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMax$', function () {
return this.max;
});

Clazz.newMeth(C$, 'setMax$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.max=value;
});

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1));
}return this.text;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CommentType.Absorption'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"max"  "text"  } )']],
  [['max','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.CommentType, "Conflict", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequence=null;
this.type=null;
this.ref=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$jalview_xml_binding_uniprot_CommentType_Conflict_Sequence', function (value) {
this.sequence=value;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getRef$', function () {
return this.ref;
});

Clazz.newMeth(C$, 'setRef$S', function (value) {
this.ref=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CommentType.Conflict'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"sequence"  } )']],
  [['type','String'],['@XmlAttribute(name="type" required="true" )']],
  [['ref','.'],['@XmlAttribute(name="ref" )']],
  [['null','jalview.xml.binding.uniprot.CommentType.Conflict.Sequence'],['!XmlInner']],
  [['sequence','jalview.xml.binding.uniprot.CommentType.Conflict.Sequence'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.CommentType.Conflict, "Sequence", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.resource=null;
this.id=null;
this.version=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getResource$', function () {
return this.resource;
});

Clazz.newMeth(C$, 'setResource$S', function (value) {
this.resource=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.version;
});

Clazz.newMeth(C$, 'setVersion$Integer', function (value) {
this.version=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CommentType.Conflict.Sequence'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['resource','String'],['@XmlAttribute(name="resource" required="true" )']],
  [['id','.'],['@XmlAttribute(name="id" required="true" )']],
  [['version','Integer'],['@XmlAttribute(name="version" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.CommentType, "Disease", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
this.acronym=null;
this.description=null;
this.dbReference=null;
this.id=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getAcronym$', function () {
return this.acronym;
});

Clazz.newMeth(C$, 'setAcronym$S', function (value) {
this.acronym=value;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (value) {
this.description=value;
});

Clazz.newMeth(C$, 'getDbReference$', function () {
return this.dbReference;
});

Clazz.newMeth(C$, 'setDbReference$jalview_xml_binding_uniprot_DbReferenceType', function (value) {
this.dbReference=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CommentType.Disease'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"name"  "acronym"  "description"  "dbReference"  } )']],
  [['name','String'],['@XmlElement(required="true" )']],
  [['acronym','.'],['@XmlElement(required="true" )']],
  [['description','.'],['@XmlElement(required="true" )']],
  [['dbReference','jalview.xml.binding.uniprot.DbReferenceType'],['@XmlElement(required="true" )']],
  [['id','String'],['@XmlAttribute(name="id" required="true" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.CommentType, "Kinetics", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.km=null;
this.vmax=null;
this.text=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getKM$', function () {
if (this.km == null ) {
this.km=Clazz.new_($I$(1));
}return this.km;
});

Clazz.newMeth(C$, 'getVmax$', function () {
if (this.vmax == null ) {
this.vmax=Clazz.new_($I$(1));
}return this.vmax;
});

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1));
}return this.text;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CommentType.Kinetics'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"km"  "vmax"  "text"  } )']],
  [['km','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement(name="KM" )']],
  [['vmax','.'],['@XmlElement(name="Vmax" )']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.CommentType, "Link", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.uri=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getUri$', function () {
return this.uri;
});

Clazz.newMeth(C$, 'setUri$S', function (value) {
this.uri=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CommentType.Link'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['uri','String'],['@XmlAttribute(name="uri" required="true" )','@XmlSchemaType(name="anyURI" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.CommentType, "PhDependence", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.text=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1));
}return this.text;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CommentType.PhDependence'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"text"  } )']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement(required="true" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.CommentType, "RedoxPotential", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.text=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1));
}return this.text;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CommentType.RedoxPotential'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"text"  } )']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement(required="true" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.CommentType, "TemperatureDependence", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.text=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1));
}return this.text;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.CommentType.TemperatureDependence'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"text"  } )']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement(required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
