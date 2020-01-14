(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DoubleVector");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.v=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getV$', function () {
if (this.v == null ) {
this.v=Clazz.new_($I$(1));
}return this.v;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.DoubleVector'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="DoubleVector" namespace="www.jalview.org" propOrder={"v"  } )']],
  [['v','java.util.List<java.lang.Double>'],['@XmlElement(type="java.lang.Double.class" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
