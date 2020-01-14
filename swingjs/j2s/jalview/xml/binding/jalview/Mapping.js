(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
var C$=Clazz.newClass(P$, "Mapping", null, 'jalview.xml.binding.jalview.MapListType');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequence=null;
this.dseqFor=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$jalview_xml_binding_jalview_Sequence', function (value) {
this.sequence=value;
});

Clazz.newMeth(C$, 'getDseqFor$', function () {
return this.dseqFor;
});

Clazz.newMeth(C$, 'setDseqFor$S', function (value) {
this.dseqFor=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.Mapping'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"sequence"  "dseqFor"  } )','@XmlRootElement(name="Mapping" )']],
  [['sequence','jalview.xml.binding.jalview.Sequence'],['@XmlElement(name="Sequence" )']],
  [['dseqFor','String'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
