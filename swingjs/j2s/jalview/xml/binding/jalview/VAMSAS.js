(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VAMSAS");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tree','java.util.List','+sequenceSet']]]

Clazz.newMeth(C$, 'getTree$',  function () {
if (this.tree == null ) {
this.tree=Clazz.new_($I$(1,1));
}return this.tree;
});

Clazz.newMeth(C$, 'getSequenceSet$',  function () {
if (this.sequenceSet == null ) {
this.sequenceSet=Clazz.new_($I$(1,1));
}return this.sequenceSet;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.VAMSAS',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="VAMSAS" propOrder={"tree"  "sequenceSet"  } ']],
  [['tree','java.util.List<java.lang.String>',null,['javax.xml.bind.annotation.XmlElement']],['name="Tree" ']],
  [['sequenceSet','java.util.List<jalview.xml.binding.jalview.SequenceSet>',null,['javax.xml.bind.annotation.XmlElement']],['name="SequenceSet" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
