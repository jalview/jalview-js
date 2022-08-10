(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReactionType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['text'],'O',['dbReference','java.util.List','+evidence']]]

Clazz.newMeth(C$, 'getText$',  function () {
return this.text;
});

Clazz.newMeth(C$, 'setText$S',  function (value) {
this.text=value;
});

Clazz.newMeth(C$, 'getDbReference$',  function () {
if (this.dbReference == null ) {
this.dbReference=Clazz.new_($I$(1,1));
}return this.dbReference;
});

Clazz.newMeth(C$, 'getEvidence$',  function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1,1));
}return this.evidence;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.ReactionType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="reactionType" propOrder={"text"  "dbReference"  } ']],
  [['text','String',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['dbReference','java.util.List<jalview.xml.binding.uniprot.DbReferenceType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['evidence','java.util.List<java.lang.Integer>',null,['javax.xml.bind.annotation.XmlAttribute']],['name="evidence" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
