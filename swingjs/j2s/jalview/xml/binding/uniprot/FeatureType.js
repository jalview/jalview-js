(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FeatureType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.original=null;
this.variation=null;
this.location=null;
this.type=null;
this.status=null;
this.id=null;
this.description=null;
this.evidence=null;
this.ref=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getOriginal$', function () {
return this.original;
});

Clazz.newMeth(C$, 'setOriginal$S', function (value) {
this.original=value;
});

Clazz.newMeth(C$, 'getVariation$', function () {
if (this.variation == null ) {
this.variation=Clazz.new_($I$(1));
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
this.evidence=Clazz.new_($I$(1));
}return this.evidence;
});

Clazz.newMeth(C$, 'getRef$', function () {
return this.ref;
});

Clazz.newMeth(C$, 'setRef$S', function (value) {
this.ref=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.FeatureType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="featureType" propOrder={"original"  "variation"  "location"  } )']],
  [['location','jalview.xml.binding.uniprot.LocationType'],['@XmlElement(required="true" )']],
  [['type','String'],['@XmlAttribute(name="type" required="true" )']],
  [['status','.'],['@XmlAttribute(name="status" )']],
  [['id','.'],['@XmlAttribute(name="id" )']],
  [['description','.'],['@XmlAttribute(name="description" )']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']],
  [['ref','String'],['@XmlAttribute(name="ref" )']],
  [['original','String'],['@XmlElement']],
  [['variation','java.util.List<java.lang.String>'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
