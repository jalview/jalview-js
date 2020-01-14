(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ReferenceType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.citation=null;
this.scope=null;
this.source=null;
this.evidence=null;
this.key=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getCitation$', function () {
return this.citation;
});

Clazz.newMeth(C$, 'setCitation$jalview_xml_binding_uniprot_CitationType', function (value) {
this.citation=value;
});

Clazz.newMeth(C$, 'getScope$', function () {
if (this.scope == null ) {
this.scope=Clazz.new_($I$(1));
}return this.scope;
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'setSource$jalview_xml_binding_uniprot_SourceDataType', function (value) {
this.source=value;
});

Clazz.newMeth(C$, 'getEvidence$', function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1));
}return this.evidence;
});

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'setKey$S', function (value) {
this.key=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.ReferenceType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="referenceType" propOrder={"citation"  "scope"  "source"  } )']],
  [['citation','jalview.xml.binding.uniprot.CitationType'],['@XmlElement(required="true" )']],
  [['scope','java.util.List<java.lang.String>'],['@XmlElement(required="true" )']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']],
  [['key','String'],['@XmlAttribute(name="key" required="true" )']],
  [['source','jalview.xml.binding.uniprot.SourceDataType'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
