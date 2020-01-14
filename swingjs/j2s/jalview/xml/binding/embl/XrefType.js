(function(){var P$=Clazz.newPackage("jalview.xml.binding.embl"),I$=[];
var C$=Clazz.newClass(P$, "XrefType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.db=null;
this.id=null;
this.secondaryId=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDb$', function () {
return this.db;
});

Clazz.newMeth(C$, 'setDb$S', function (value) {
this.db=value;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'setId$S', function (value) {
this.id=value;
});

Clazz.newMeth(C$, 'getSecondaryId$', function () {
return this.secondaryId;
});

Clazz.newMeth(C$, 'setSecondaryId$S', function (value) {
this.secondaryId=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.XrefType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="XrefType" )']],
  [['db','String'],['@XmlAttribute(name="db" required="true" )']],
  [['id','.'],['@XmlAttribute(name="id" required="true" )']],
  [['secondaryId','.'],['@XmlAttribute(name="secondaryId" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
