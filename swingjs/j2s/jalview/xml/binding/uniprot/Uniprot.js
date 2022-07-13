(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Uniprot");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['copyright'],'O',['entry','java.util.List']]]

Clazz.newMeth(C$, 'getEntry$',  function () {
if (this.entry == null ) {
this.entry=Clazz.new_($I$(1,1));
}return this.entry;
});

Clazz.newMeth(C$, 'getCopyright$',  function () {
return this.copyright;
});

Clazz.newMeth(C$, 'setCopyright$S',  function (value) {
this.copyright=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.Uniprot',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"entry"  "copyright"  } ','name="uniprot" ']],
  [['entry','java.util.List<jalview.xml.binding.uniprot.Entry>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['copyright','String'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:44 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
