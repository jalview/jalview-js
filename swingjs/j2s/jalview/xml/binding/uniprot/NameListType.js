(function(){var P$=Clazz.newPackage("jalview.xml.binding.uniprot"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NameListType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.consortiumOrPerson=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getConsortiumOrPerson$', function () {
if (this.consortiumOrPerson == null ) {
this.consortiumOrPerson=Clazz.new_($I$(1));
}return this.consortiumOrPerson;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.uniprot.NameListType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="nameListType" propOrder={"consortiumOrPerson"  } )']],
  [['consortiumOrPerson','java.util.List<java.lang.Object>'],['@XmlElements({"@XmlElement(name="consortium",type=ConsortiumType.class)" ,"@XmlElement(name="person",type=PersonType.class)" })','@XmlElement(name="person" type="jalview.xml.binding.uniprot.PersonType.class" )','@XmlElement(name="consortium" type="jalview.xml.binding.uniprot.ConsortiumType.class" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
