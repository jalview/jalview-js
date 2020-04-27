(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CommentType", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Absorption',9],['Conflict',9],['Disease',9],['Kinetics',9],['Link',9],['PhDependence',9],['RedoxPotential',9],['TemperatureDependence',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type','locationType','name','error','method'],'O',['molecule','jalview.xml.binding.uniprot.MoleculeType','absorption','jalview.xml.binding.uniprot.CommentType.Absorption','kinetics','jalview.xml.binding.uniprot.CommentType.Kinetics','phDependence','jalview.xml.binding.uniprot.CommentType.PhDependence','redoxPotential','jalview.xml.binding.uniprot.CommentType.RedoxPotential','temperatureDependence','jalview.xml.binding.uniprot.CommentType.TemperatureDependence','reaction','jalview.xml.binding.uniprot.ReactionType','physiologicalReaction','java.util.List','+cofactor','+subcellularLocation','conflict','jalview.xml.binding.uniprot.CommentType.Conflict','link','java.util.List','+event','+isoform','+interactant','organismsDiffer','Boolean','experiments','Integer','disease','jalview.xml.binding.uniprot.CommentType.Disease','location','java.util.List','+text','mass','Float','evidence','java.util.List']]]

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
this.physiologicalReaction=Clazz.new_($I$(1,1));
}return this.physiologicalReaction;
});

Clazz.newMeth(C$, 'getCofactor$', function () {
if (this.cofactor == null ) {
this.cofactor=Clazz.new_($I$(1,1));
}return this.cofactor;
});

Clazz.newMeth(C$, 'getSubcellularLocation$', function () {
if (this.subcellularLocation == null ) {
this.subcellularLocation=Clazz.new_($I$(1,1));
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
this.link=Clazz.new_($I$(1,1));
}return this.link;
});

Clazz.newMeth(C$, 'getEvent$', function () {
if (this.event == null ) {
this.event=Clazz.new_($I$(1,1));
}return this.event;
});

Clazz.newMeth(C$, 'getIsoform$', function () {
if (this.isoform == null ) {
this.isoform=Clazz.new_($I$(1,1));
}return this.isoform;
});

Clazz.newMeth(C$, 'getInteractant$', function () {
if (this.interactant == null ) {
this.interactant=Clazz.new_($I$(1,1));
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
this.location=Clazz.new_($I$(1,1));
}return this.location;
});

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1,1));
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
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CommentType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="commentType" propOrder={"molecule"  "absorption"  "kinetics"  "phDependence"  "redoxPotential"  "temperatureDependence"  "reaction"  "physiologicalReaction"  "cofactor"  "subcellularLocation"  "conflict"  "link"  "event"  "isoform"  "interactant"  "organismsDiffer"  "experiments"  "disease"  "location"  "text"  } ']],
  [['organismsDiffer','Boolean',null,['javax.xml.bind.annotation.XmlElement']],['defaultValue="false" ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['locationType','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="locationType" ']],
  [['name','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="name" ']],
  [['mass','Float',null,['javax.xml.bind.annotation.XmlAttribute']],['name="mass" ']],
  [['error','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="error" ']],
  [['method','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="method" ']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']],
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
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommentType, "Absorption", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['max','jalview.xml.binding.uniprot.EvidencedStringType','text','java.util.List']]]

Clazz.newMeth(C$, 'getMax$', function () {
return this.max;
});

Clazz.newMeth(C$, 'setMax$jalview_xml_binding_uniprot_EvidencedStringType', function (value) {
this.max=value;
});

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1,1));
}return this.text;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CommentType.Absorption',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"max"  "text"  } ']],
  [['max','jalview.xml.binding.uniprot.EvidencedStringType'],['@XmlElement']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommentType, "Conflict", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Sequence',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type','ref'],'O',['sequence','jalview.xml.binding.uniprot.CommentType.Conflict.Sequence']]]

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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CommentType.Conflict',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"sequence"  } ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['ref','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ref" ']],
  [['null','jalview.xml.binding.uniprot.CommentType.Conflict.Sequence'],['!XmlInner']],
  [['sequence','jalview.xml.binding.uniprot.CommentType.Conflict.Sequence'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommentType.Conflict, "Sequence", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['resource','id'],'O',['version','Integer']]]

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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CommentType.Conflict.Sequence',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['resource','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="resource" required="true" ']],
  [['id','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" required="true" ']],
  [['version','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="version" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommentType, "Disease", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','acronym','description','id'],'O',['dbReference','jalview.xml.binding.uniprot.DbReferenceType']]]

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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CommentType.Disease',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"name"  "acronym"  "description"  "dbReference"  } ']],
  [['name','String',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['acronym','.',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['description','.',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['dbReference','jalview.xml.binding.uniprot.DbReferenceType',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['id','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommentType, "Kinetics", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['km','java.util.List','+vmax','+text']]]

Clazz.newMeth(C$, 'getKM$', function () {
if (this.km == null ) {
this.km=Clazz.new_($I$(1,1));
}return this.km;
});

Clazz.newMeth(C$, 'getVmax$', function () {
if (this.vmax == null ) {
this.vmax=Clazz.new_($I$(1,1));
}return this.vmax;
});

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1,1));
}return this.text;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CommentType.Kinetics',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"km"  "vmax"  "text"  } ']],
  [['km','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>',null,['javax.xml.bind.annotation.XmlElement']],['name="KM" ']],
  [['vmax','.',null,['javax.xml.bind.annotation.XmlElement']],['name="Vmax" ']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommentType, "Link", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['uri']]]

Clazz.newMeth(C$, 'getUri$', function () {
return this.uri;
});

Clazz.newMeth(C$, 'setUri$S', function (value) {
this.uri=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CommentType.Link',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['uri','String',null,['javax.xml.bind.annotation.XmlAttribute','javax.xml.bind.annotation.XmlSchemaType']],['name="uri" required="true" ','name="anyURI" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommentType, "PhDependence", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['text','java.util.List']]]

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1,1));
}return this.text;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CommentType.PhDependence',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"text"  } ']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommentType, "RedoxPotential", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['text','java.util.List']]]

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1,1));
}return this.text;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CommentType.RedoxPotential',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"text"  } ']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommentType, "TemperatureDependence", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['text','java.util.List']]]

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1,1));
}return this.text;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.CommentType.TemperatureDependence',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"text"  } ']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
