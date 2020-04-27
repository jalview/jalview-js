(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GeneType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['name','java.util.List']]]

Clazz.newMeth(C$, 'getName$', function () {
if (this.name == null ) {
this.name=Clazz.new_($I$(1,1));
}return this.name;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.GeneType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="geneType" propOrder={"name"  } ']],
  [['name','java.util.List<jalview.xml.binding.uniprot.GeneNameType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
