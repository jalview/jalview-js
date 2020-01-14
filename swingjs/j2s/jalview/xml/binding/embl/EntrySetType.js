(function(){var P$=Clazz.newPackage("jalview.xml.binding.embl"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EntrySetType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.entry=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getEntry$', function () {
if (this.entry == null ) {
this.entry=Clazz.new_($I$(1));
}return this.entry;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.embl.EntrySetType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="EntrySetType" propOrder={"entry"  } )']],
  [['entry','java.util.List<jalview.xml.binding.embl.EntryType>'],['@XmlElement(required="true" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
