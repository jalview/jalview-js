(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MapListType", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mapListFrom=null;
this.mapListTo=null;
this.mapFromUnit=null;
this.mapToUnit=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getMapListFrom$', function () {
if (this.mapListFrom == null ) {
this.mapListFrom=Clazz.new_($I$(1));
}return this.mapListFrom;
});

Clazz.newMeth(C$, 'getMapListTo$', function () {
if (this.mapListTo == null ) {
this.mapListTo=Clazz.new_($I$(1));
}return this.mapListTo;
});

Clazz.newMeth(C$, 'getMapFromUnit$', function () {
return this.mapFromUnit;
});

Clazz.newMeth(C$, 'setMapFromUnit$java_math_BigInteger', function (value) {
this.mapFromUnit=value;
});

Clazz.newMeth(C$, 'getMapToUnit$', function () {
return this.mapToUnit;
});

Clazz.newMeth(C$, 'setMapToUnit$java_math_BigInteger', function (value) {
this.mapToUnit=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.MapListType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="mapListType" propOrder={"mapListFrom"  "mapListTo"  } )','@XmlSeeAlso("jalview.xml.binding.jalview.Mapping.class" )']],
  [['mapFromUnit','java.math.BigInteger'],['@XmlAttribute(name="mapFromUnit" required="true" )','@XmlSchemaType(name="positiveInteger" )']],
  [['mapToUnit','.'],['@XmlAttribute(name="mapToUnit" required="true" )','@XmlSchemaType(name="positiveInteger" )']],
  [['null','jalview.xml.binding.jalview.MapListType.MapListFrom'],['!XmlInner']],
  [['null','jalview.xml.binding.jalview.MapListType.MapListTo'],['!XmlInner']],
  [['mapListFrom','java.util.List<jalview.xml.binding.jalview.MapListType.MapListFrom>'],['@XmlElement']],
  [['mapListTo','java.util.List<jalview.xml.binding.jalview.MapListType.MapListTo>'],['@XmlElement']]];
;
(function(){var C$=Clazz.newClass(P$.MapListType, "MapListFrom", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.start=0;
this.end=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$I', function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$I', function (value) {
this.end=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.MapListType.MapListFrom'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['start','int'],['@XmlAttribute(name="start" required="true" )']],
  [['end','.'],['@XmlAttribute(name="end" required="true" )']]];

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.MapListType, "MapListTo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.start=0;
this.end=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$I', function (value) {
this.start=value;
});

Clazz.newMeth(C$, 'getEnd$', function () {
return this.end;
});

Clazz.newMeth(C$, 'setEnd$I', function (value) {
this.end=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.MapListType.MapListTo'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="" )']],
  [['start','int'],['@XmlAttribute(name="start" required="true" )']],
  [['end','.'],['@XmlAttribute(name="end" required="true" )']]];

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
