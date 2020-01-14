(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IsoformType", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=null;
this.name=null;
this.sequence=null;
this.text=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
if (this.id == null ) {
this.id=Clazz.new_($I$(1));
}return this.id;
});

Clazz.newMeth(C$, 'getName$', function () {
if (this.name == null ) {
this.name=Clazz.new_($I$(1));
}return this.name;
});

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$jalview_xml_binding_uniprot_IsoformType_Sequence', function (value) {
this.sequence=value;
});

Clazz.newMeth(C$, 'getText$', function () {
if (this.text == null ) {
this.text=Clazz.new_($I$(1));
}return this.text;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.IsoformType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="isoformType" propOrder={"id"  "name"  "sequence"  "text"  } )']],
  [['id','java.util.List<java.lang.String>'],['@XmlElement(required="true" )']],
  [['name','java.util.List<jalview.xml.binding.uniprot.IsoformType.Name>'],['@XmlElement(required="true" )']],
  [['sequence','jalview.xml.binding.uniprot.IsoformType.Sequence'],['@XmlElement(required="true" )']],
  [['null','jalview.xml.binding.uniprot.IsoformType.Name'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.IsoformType.Sequence'],['!XmlInner']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.IsoformType, "Name", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
this.evidence=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getEvidence$', function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1));
}return this.evidence;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.IsoformType.Name'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"value"  } )']],
  [['value','String'],['@XmlValue']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IsoformType, "Sequence", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
this.ref=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.IsoformType.Sequence'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['type','String'],['@XmlAttribute(name="type" required="true" )']],
  [['ref','.'],['@XmlAttribute(name="ref" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
