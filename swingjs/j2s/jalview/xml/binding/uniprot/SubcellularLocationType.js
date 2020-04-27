(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SubcellularLocationType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['location','java.util.List','+topology','+orientation']]]

Clazz.newMeth(C$, 'getLocation$', function () {
if (this.location == null ) {
this.location=Clazz.new_($I$(1,1));
}return this.location;
});

Clazz.newMeth(C$, 'getTopology$', function () {
if (this.topology == null ) {
this.topology=Clazz.new_($I$(1,1));
}return this.topology;
});

Clazz.newMeth(C$, 'getOrientation$', function () {
if (this.orientation == null ) {
this.orientation=Clazz.new_($I$(1,1));
}return this.orientation;
});
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.uniprot.SubcellularLocationType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="subcellularLocationType" propOrder={"location"  "topology"  "orientation"  } ']],
  [['location','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['topology','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']],
  [['orientation','java.util.List<jalview.xml.binding.uniprot.EvidencedStringType>'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
