(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ReactionType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.text=null;
this.dbReference=null;
this.evidence=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getText$', function () {
return this.text;
});

Clazz.newMeth(C$, 'setText$S', function (value) {
this.text=value;
});

Clazz.newMeth(C$, 'getDbReference$', function () {
if (this.dbReference == null ) {
this.dbReference=Clazz.new_($I$(1));
}return this.dbReference;
});

Clazz.newMeth(C$, 'getEvidence$', function () {
if (this.evidence == null ) {
this.evidence=Clazz.new_($I$(1));
}return this.evidence;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.ReactionType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="reactionType" propOrder={"text"  "dbReference"  } )']],
  [['text','String'],['@XmlElement(required="true" )']],
  [['dbReference','java.util.List<jalview.xml.binding.uniprot.DbReferenceType>'],['@XmlElement(required="true" )']],
  [['evidence','java.util.List<java.lang.Integer>'],['@XmlAttribute(name="evidence" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
