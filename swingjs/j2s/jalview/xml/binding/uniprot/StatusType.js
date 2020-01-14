(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[];
var C$=Clazz.newClass(P$, "StatusType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
this.status=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$S', function (value) {
this.value=value;
});

Clazz.newMeth(C$, 'getStatus$', function () {
if (this.status == null ) {
return "known";
} else {
return this.status;
}});

Clazz.newMeth(C$, 'setStatus$S', function (value) {
this.status=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.StatusType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="statusType" propOrder={"value"  } )']],
  [['value','String'],['@XmlValue']],
  [['status','.'],['@XmlAttribute(name="status" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
