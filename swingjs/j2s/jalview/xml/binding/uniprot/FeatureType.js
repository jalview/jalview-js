(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FeatureType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['original','type','status','id','description','ref'],'O',['variation','java.util.List','location','jalview.xml.binding.uniprot.LocationType','evidence','java.util.List']]]

Clazz.newMeth(C$, 'getOriginal$', function () {
return this.original;
});

Clazz.newMeth(C$, 'setOriginal$S', function (value) {
this.original=value;
});

Clazz.newMeth(C$, 'getVariation$', function () {
if (this.variation == null ) {
this.variation=Clazz.new_($I$(1,1));
}return this.variation;
});

Clazz.newMeth(C$, 'getLocation$', function () {
return this.location;
});

Clazz.newMeth(C$, 'setLocation$jalview_xml_binding_uniprot_LocationType', function (value) {
this.location=value;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});

Clazz.newMeth(C$, 'getStatus$', function () {
return this.status;
});

Clazz.newMeth(C$, 'setStatus$S', function (value) {
this.status=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (value) {
this.description=value;
});

Clazz.newMeth(C$, 'getEvidence$', function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});

Clazz.newMeth(C$, 'getRef$', function () {
return this.ref;
});

Clazz.newMeth(C$, 'setRef$S', function (value) {
this.ref=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.FeatureType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="featureType" propOrder={"original"  "variation"  "location"  } ']],
  [['location','jalview.xml.binding.uniprot.LocationType',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['status','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="status" ']],
  [['id','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="id" ']],
  [['description','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="description" ']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']],
  [['ref','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ref" ']],
  [['original','String'],['@XmlElement']],
  [['variation','java.util.List<java.lang.String>'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
