(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SubcellularLocationType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.location=null;
this.topology=null;
this.orientation=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getLocation$', function () {
if (this.location == null ) {
this.location=Clazz.new_($I$(1));
}return this.location;
});

Clazz.newMeth(C$, 'getTopology$', function () {
if (this.topology == null ) {
this.topology=Clazz.new_($I$(1));
}return this.topology;
});

Clazz.newMeth(C$, 'getOrientation$', function () {
if (this.orientation == null ) {
this.orientation=Clazz.new_($I$(1));
}return this.orientation;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.SubcellularLocationType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="subcellularLocationType" propOrder={"location"  "topology"  "orientation"  } )']],
  [['location','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement(required="true" )']],
  [['topology','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']],
  [['orientation','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
