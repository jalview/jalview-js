(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
var C$=Clazz.newClass(P$, "LocationType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.begin=null;
this.end=null;
this.position=null;
this.sequence=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getBegin$', function () {
return this.begin;
});

Clazz.newMeth(C$, 'setBegin$jalview_xml_binding_uniprot_PositionType', function (value) {
this.begin=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$jalview_xml_binding_uniprot_PositionType', function (value) {
this.end=value;
});

Clazz.newMeth(C$, 'getPosition$', function () {
return this.position;
});

Clazz.newMeth(C$, 'setPosition$jalview_xml_binding_uniprot_PositionType', function (value) {
this.position=value;
});

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$S', function (value) {
this.sequence=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.LocationType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="locationType" propOrder={"begin"  "end"  "position"  } )']],
  [['sequence','String'],['@XmlAttribute(name="sequence" )']],
  [['begin','jalview.xml.binding.uniprot.PositionType'],['@XmlElement']],
  [['end','jalview.xml.binding.uniprot.PositionType'],['@XmlElement']],
  [['position','jalview.xml.binding.uniprot.PositionType'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
