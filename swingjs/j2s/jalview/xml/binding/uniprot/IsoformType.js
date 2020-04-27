(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "IsoformType", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Name',9],['Sequence',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['id','java.util.List','+name','sequence','jalview.xml.binding.uniprot.IsoformType.Sequence','text','java.util.List']]]

Clazz.newMeth(C$, 'getId$', function () {
if (this.id == null ) {
this.id=Clazz.new_($I$(1,1));
}return this.id;
});

Clazz.newMeth(C$, 'getName$', function () {
if (this.name == null ) {
this.name=Clazz.new_($I$(1,1));
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
this.text=Clazz.new_($I$(1,1));
}return this.text;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.IsoformType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="isoformType" propOrder={"id"  "name"  "sequence"  "text"  } ']],
  [['id','java.util.List<java.lang.String>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['name','java.util.List<jalview.xml.binding.uniprot.IsoformType.Name>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['sequence','jalview.xml.binding.uniprot.IsoformType.Sequence',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['null','jalview.xml.binding.uniprot.IsoformType.Name'],['!XmlInner']],
  [['null','jalview.xml.binding.uniprot.IsoformType.Sequence'],['!XmlInner']],
  [['text','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.IsoformType, "Name", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value'],'O',['evidence','java.util.List']]]

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getEvidence$', function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.IsoformType.Name',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"value"  } ']],
  [['value','String',null,['javax.xml.bind.annotation.XmlValue']],['']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.IsoformType, "Sequence", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type','ref']]]

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
[[null,'jalview.xml.binding.uniprot.IsoformType.Sequence',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" ']],
  [['type','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="type" required="true" ']],
  [['ref','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="ref" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
