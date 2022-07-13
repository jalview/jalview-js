(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SourceDataType", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Plasmid',9],['Strain',9],['Tissue',9],['Transposon',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['strainOrPlasmidOrTransposon','java.util.List']]]

Clazz.newMeth(C$, 'getStrainOrPlasmidOrTransposon$',  function () {
if (this.strainOrPlasmidOrTransposon == null ) {
this.strainOrPlasmidOrTransposon=Clazz.new_($I$(1,1));
}return this.strainOrPlasmidOrTransposon;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.SourceDataType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="sourceDataType" propOrder={"strainOrPlasmidOrTransposon"  } ']],
  [['strainOrPlasmidOrTransposon','java.util.List<java.lang.Object>',null,['javax.xml.bind.annotation.XmlElements','javax.xml.bind.annotation.XmlElement','javax.xml.bind.annotation.XmlElement','javax.xml.bind.annotation.XmlElement','javax.xml.bind.annotation.XmlElement']],['{"@XmlElement(name="strain",type=SourceDataType.Strain.class)" ,"@XmlElement(name="plasmid",type=SourceDataType.Plasmid.class)" ,"@XmlElement(name="transposon",type=SourceDataType.Transposon.class)" ,"@XmlElement(name="tissue",type=SourceDataType.Tissue.class)" }','name="strain" type="jalview.xml.binding.uniprot.SourceDataType.Strain.class" ','name="plasmid" type="jalview.xml.binding.uniprot.SourceDataType.Plasmid.class" ','name="transposon" type="jalview.xml.binding.uniprot.SourceDataType.Transposon.class" ','name="tissue" type="jalview.xml.binding.uniprot.SourceDataType.Tissue.class" ']],
  [['null','jalview.xml.binding.uniprot.SourceDataType.Plasmid'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.SourceDataType.Strain'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.SourceDataType.Tissue'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.SourceDataType.Transposon'],['!XmlInner']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.SourceDataType, "Plasmid", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value'],'O',['evidence','java.util.List']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.SourceDataType.Plasmid',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SourceDataType, "Strain", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value'],'O',['evidence','java.util.List']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.SourceDataType.Strain',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SourceDataType, "Tissue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value'],'O',['evidence','java.util.List']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.SourceDataType.Tissue',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SourceDataType, "Transposon", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value'],'O',['evidence','java.util.List']]]

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S',  function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.SourceDataType.Transposon',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
