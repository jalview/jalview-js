(function(){var P$=Clazz.newPackage("jalview.xml.binding.embl"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EntrySetType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['entry','java.util.List']]]

Clazz.newMeth(C$, 'getEntry$',  function () {
if (this.entry == null ) {
this.entry=Clazz.new_($I$(1,1));
}return this.entry;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.EntrySetType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="EntrySetType" propOrder={"entry"  } ']],
  [['entry','java.util.List<jalview.xml.binding.embl.EntryType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
