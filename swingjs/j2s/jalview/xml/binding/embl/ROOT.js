(function(){var P$=Clazz.newPackage("jalview.xml.binding.embl"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ROOT");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['entrySet','jalview.xml.binding.embl.EntrySetType','entry','jalview.xml.binding.embl.EntryType']]]

Clazz.newMeth(C$, 'getEntrySet$', function () {
return this.entrySet;
});

Clazz.newMeth(C$, 'setEntrySet$jalview_xml_binding_embl_EntrySetType', function (value) {
this.entrySet=value;
});

Clazz.newMeth(C$, 'getEntry$', function () {
return this.entry;
});

Clazz.newMeth(C$, 'setEntry$jalview_xml_binding_embl_EntryType', function (value) {
this.entry=value;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.embl.ROOT',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlRootElement']],['XmlAccessType.FIELD','name="" propOrder={"entrySet"  "entry"  } ','name="ROOT" ']],
  [['entrySet','jalview.xml.binding.embl.EntrySetType'],['@XmlElement']],
  [['entry','jalview.xml.binding.embl.EntryType'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
