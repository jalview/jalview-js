(function(){var P$=Clazz.newPackage("jalview.xml.binding.embl"),I$=[];
var C$=Clazz.newClass(P$, "ROOT");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.entrySet=null;
this.entry=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.ROOT'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"entrySet"  "entry"  } )','@XmlRootElement(name="ROOT" )']],
  [['entrySet','jalview.xml.binding.embl.EntrySetType'],['@XmlElement']],
  [['entry','jalview.xml.binding.embl.EntryType'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
