(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OrganismType", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Lineage',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['name','java.util.List','+dbReference','lineage','jalview.xml.binding.uniprot.OrganismType.Lineage','evidence','java.util.List']]]

Clazz.newMeth(C$, 'getName$',  function () {
if (this.name == null ) {
this.name=Clazz.new_($I$(1,1));
}return this.name;
});

Clazz.newMeth(C$, 'getDbReference$',  function () {
if (this.dbReference == null ) {
this.dbReference=Clazz.new_($I$(1,1));
}return this.dbReference;
});

Clazz.newMeth(C$, 'getLineage$',  function () {
return this.lineage;
});

Clazz.newMeth(C$, 'setLineage$jalview_xml_binding_uniprot_OrganismType_Lineage',  function (value) {
this.lineage=value;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.OrganismType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="organismType" propOrder={"name"  "dbReference"  "lineage"  } ']],
  [['name','java.util.List<jalview.xml.binding.uniprot.OrganismNameType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['dbReference','java.util.List<jalview.xml.binding.uniprot.DbReferenceType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']],
  [['null','jalview.xml.binding.uniprot.OrganismType.Lineage'],['!XmlInner']],
  [['lineage','jalview.xml.binding.uniprot.OrganismType.Lineage'],['@XmlElement']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.OrganismType, "Lineage", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['taxon','java.util.List']]]

Clazz.newMeth(C$, 'getTaxon$',  function () {
if (this.taxon == null ) {
this.taxon=Clazz.new_($I$(1,1));
}return this.taxon;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.OrganismType.Lineage',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="" propOrder={"taxon"  } ']],
  [['taxon','java.util.List<java.lang.String>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
