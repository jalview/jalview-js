(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AlcodonFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.alcodon=null;
this.alcodMap=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getAlcodon$', function () {
if (this.alcodon == null ) {
this.alcodon=Clazz.new_($I$(1));
}return this.alcodon;
});

Clazz.newMeth(C$, 'getAlcodMap$', function () {
if (this.alcodMap == null ) {
this.alcodMap=Clazz.new_($I$(1));
}return this.alcodMap;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.AlcodonFrame'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"alcodon"  "alcodMap"  } )','@XmlRootElement(name="AlcodonFrame" )']],
  [['null','jalview.xml.binding.jalview.AlcodonFrame.AlcodMap'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.AlcodonFrame.Alcodon'],['!XmlInner']],
  [['alcodon','java.util.List<jalview.xml.binding.jalview.AlcodonFrame.Alcodon>'],['@XmlElement']],
  [['alcodMap','java.util.List<jalview.xml.binding.jalview.AlcodonFrame.AlcodMap>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.AlcodonFrame, "AlcodMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mapping=null;
this.dnasq=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMapping$', function () {
return this.mapping;
});

Clazz.newMeth(C$, 'setMapping$jalview_xml_binding_jalview_Mapping', function (value) {
this.mapping=value;
});

Clazz.newMeth(C$, 'getDnasq$', function () {
return this.dnasq;
});

Clazz.newMeth(C$, 'setDnasq$S', function (value) {
this.dnasq=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.AlcodonFrame.AlcodMap'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" propOrder={"mapping"  } )']],
  [['mapping','jalview.xml.binding.jalview.Mapping'],['@XmlElement(name="Mapping" required="true" )']],
  [['dnasq','String'],['@XmlAttribute(name="dnasq" required="true" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AlcodonFrame, "Alcodon", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pos1=null;
this.pos2=null;
this.pos3=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPos1$', function () {
return this.pos1;
});

Clazz.newMeth(C$, 'setPos1$java_math_BigInteger', function (value) {
this.pos1=value;
});

Clazz.newMeth(C$, 'getPos2$', function () {
return this.pos2;
});

Clazz.newMeth(C$, 'setPos2$java_math_BigInteger', function (value) {
this.pos2=value;
});

Clazz.newMeth(C$, 'getPos3$', function () {
return this.pos3;
});

Clazz.newMeth(C$, 'setPos3$java_math_BigInteger', function (value) {
this.pos3=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.AlcodonFrame.Alcodon'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['pos1','java.math.BigInteger'],['@XmlAttribute(name="pos1" )']],
  [['pos2','.'],['@XmlAttribute(name="pos2" )']],
  [['pos3','.'],['@XmlAttribute(name="pos3" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
