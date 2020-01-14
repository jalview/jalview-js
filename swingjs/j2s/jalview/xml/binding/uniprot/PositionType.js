(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PositionType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.position=null;
this.status=null;
this.evidence=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPosition$', function () {
return this.position;
});

Clazz.newMeth(C$, 'setPosition$java_math_BigInteger', function (value) {
this.position=value;
});

Clazz.newMeth(C$, 'getStatus$', function () {
if (this.status == null ) {
return "certain";
} else {
return this.status;
}});

Clazz.newMeth(C$, 'setStatus$S', function (value) {
this.status=value;
});

Clazz.newMeth(C$, 'getEvidence$', function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1));
}return this.evidence;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.PositionType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="positionType" )']],
  [['position','java.math.BigInteger'],['@XmlAttribute(name="position" )','@XmlSchemaType(name="unsignedLong" )']],
  [['status','String'],['@XmlAttribute(name="status" )']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
