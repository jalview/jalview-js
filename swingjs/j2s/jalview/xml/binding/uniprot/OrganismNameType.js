(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
var C$=Clazz.newClass(P$, "OrganismNameType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
this.type=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$S', function (value) {
this.type=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.OrganismNameType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="organismNameType" propOrder={"value"  } )']],
  [['value','String'],['@XmlValue']],
  [['type','.'],['@XmlAttribute(name="type" required="true" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
