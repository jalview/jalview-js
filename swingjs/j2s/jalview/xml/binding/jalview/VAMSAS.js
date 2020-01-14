(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VAMSAS");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tree=null;
this.sequenceSet=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTree$', function () {
if (this.tree == null ) {
this.tree=Clazz.new_($I$(1));
}return this.tree;
});

Clazz.newMeth(C$, 'getSequenceSet$', function () {
if (this.sequenceSet == null ) {
this.sequenceSet=Clazz.new_($I$(1));
}return this.sequenceSet;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.VAMSAS'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="VAMSAS" propOrder={"tree"  "sequenceSet"  } )']],
  [['tree','java.util.List<java.lang.String>'],['@XmlElement(name="Tree" )']],
  [['sequenceSet','java.util.List<jalview.xml.binding.jalview.SequenceSet>'],['@XmlElement(name="SequenceSet" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
