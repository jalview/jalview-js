(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SourceDataType", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.strainOrPlasmidOrTransposon=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getStrainOrPlasmidOrTransposon$', function () {
if (this.strainOrPlasmidOrTransposon == null ) {
this.strainOrPlasmidOrTransposon=Clazz.new_($I$(1));
}return this.strainOrPlasmidOrTransposon;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.SourceDataType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="sourceDataType" propOrder={"strainOrPlasmidOrTransposon"  } )']],
  [['strainOrPlasmidOrTransposon','java.util.List<java.lang.Object>'],['@XmlElements({"@XmlElement(name="strain",type=SourceDataType.Strain.class)" ,"@XmlElement(name="plasmid",type=SourceDataType.Plasmid.class)" ,"@XmlElement(name="transposon",type=SourceDataType.Transposon.class)" ,"@XmlElement(name="tissue",type=SourceDataType.Tissue.class)" })','@XmlElement(name="tissue" type="jalview.xml.binding.uniprot.SourceDataType.Tissue.class" )','@XmlElement(name="transposon" type="jalview.xml.binding.uniprot.SourceDataType.Transposon.class" )','@XmlElement(name="plasmid" type="jalview.xml.binding.uniprot.SourceDataType.Plasmid.class" )','@XmlElement(name="strain" type="jalview.xml.binding.uniprot.SourceDataType.Strain.class" )']],
  [['null','jalview.xml.binding.uniprot.SourceDataType.Plasmid'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.SourceDataType.Strain'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.SourceDataType.Tissue'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.SourceDataType.Transposon'],['!XmlInner']]];
;
(function(){var C$=Clazz.newClass(P$.SourceDataType, "Plasmid", function(){
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
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.SourceDataType.Plasmid'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"value"  } )']],
  [['value','String'],['@XmlValue']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SourceDataType, "Strain", function(){
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
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.SourceDataType.Strain'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"value"  } )']],
  [['value','String'],['@XmlValue']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SourceDataType, "Tissue", function(){
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
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.SourceDataType.Tissue'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"value"  } )']],
  [['value','String'],['@XmlValue']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SourceDataType, "Transposon", function(){
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
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.SourceDataType.Transposon'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"value"  } )']],
  [['value','String'],['@XmlValue']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
