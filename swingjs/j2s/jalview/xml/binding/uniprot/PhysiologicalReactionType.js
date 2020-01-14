(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PhysiologicalReactionType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dbReference=null;
this.direction=null;
this.evidence=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getDbReference$', function () {
return this.dbReference;
});

Clazz.newMeth(C$, 'setDbReference$jalview_xml_binding_uniprot_DbReferenceType', function (value) {
this.dbReference=value;
});

Clazz.newMeth(C$, 'getDirection$', function () {
return this.direction;
});

Clazz.newMeth(C$, 'setDirection$S', function (value) {
this.direction=value;
});

Clazz.newMeth(C$, 'getEvidence$', function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1));
}return this.evidence;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.PhysiologicalReactionType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="physiologicalReactionType" propOrder={"dbReference"  } )']],
  [['dbReference','jalview.xml.binding.uniprot.DbReferenceType'],['@XmlElement(required="true" )']],
  [['direction','String'],['@XmlAttribute(name="direction" required="true" )']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
