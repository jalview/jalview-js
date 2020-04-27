(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReferenceType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['key'],'O',['citation','jalview.xml.binding.uniprot.CitationType','scope','java.util.List','source','jalview.xml.binding.uniprot.SourceDataType','evidence','java.util.List']]]

Clazz.newMeth(C$, 'getCitation$', function () {
return this.citation;
});

Clazz.newMeth(C$, 'setCitation$jalview_xml_binding_uniprot_CitationType', function (value) {
this.citation=value;
});

Clazz.newMeth(C$, 'getScope$', function () {
if (this.scope == null ) {
this.scope=Clazz.new_($I$(1,1));
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
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$, 'setKey$S', function (value) {
this.key=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.ReferenceType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="referenceType" propOrder={"citation"  "scope"  "source"  } ']],
  [['citation','jalview.xml.binding.uniprot.CitationType',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['scope','java.util.List<java.lang.String>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']],
  [['key','String',null,['javax.xml.bind.annotation.XmlAttribute']],['name="key" required="true" ']],
  [['source','jalview.xml.binding.uniprot.SourceDataType'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
