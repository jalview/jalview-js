(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
var C$=Clazz.newClass(P$, "SequenceType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequence=null;
this.name=null;
this.id=null;
this.description=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSequence$', function () {
return this.sequence;
});

Clazz.newMeth(C$, 'setSequence$S', function (value) {
this.sequence=value;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (value) {
this.name=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'setDescription$S', function (value) {
this.description=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.SequenceType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="SequenceType" propOrder={"sequence"  "name"  } )','@XmlSeeAlso("jalview.xml.binding.jalview.Sequence.class" )']],
  [['id','String'],['@XmlAttribute(name="id" )']],
  [['description','.'],['@XmlAttribute(name="description" )']],
  [['sequence','String'],['@XmlElement']],
  [['name','String'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
