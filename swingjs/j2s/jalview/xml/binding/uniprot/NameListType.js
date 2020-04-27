(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NameListType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['consortiumOrPerson','java.util.List']]]

Clazz.newMeth(C$, 'getConsortiumOrPerson$', function () {
if (this.consortiumOrPerson == null ) {
this.consortiumOrPerson=Clazz.new_($I$(1,1));
}return this.consortiumOrPerson;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.NameListType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="nameListType" propOrder={"consortiumOrPerson"  } ']],
  [['consortiumOrPerson','java.util.List<java.lang.Object>',null,['javax.xml.bind.annotation.XmlElements','javax.xml.bind.annotation.XmlElement','javax.xml.bind.annotation.XmlElement']],['{"@XmlElement(name="consortium",type=ConsortiumType.class)" ,"@XmlElement(name="person",type=PersonType.class)" }','name="consortium" type="jalview.xml.binding.uniprot.ConsortiumType.class" ','name="person" type="jalview.xml.binding.uniprot.PersonType.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
