(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
var C$=Clazz.newClass(P$, "InteractantType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=null;
this.label=null;
this.intactId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'setLabel$S', function (value) {
this.label=value;
});

Clazz.newMeth(C$, 'getIntactId$', function () {
return this.intactId;
});

Clazz.newMeth(C$, 'setIntactId$S', function (value) {
this.intactId=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.InteractantType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="interactantType" propOrder={"id"  "label"  } )']],
  [['intactId','String'],['@XmlAttribute(name="intactId" required="true" )']],
  [['id','String'],['@XmlElement']],
  [['label','String'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
