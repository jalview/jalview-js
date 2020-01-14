(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DoubleMatrix");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.row=null;
this.d=null;
this.e=null;
this.rows=null;
this.columns=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getRow$', function () {
if (this.row == null ) {
this.row=Clazz.new_($I$(1));
}return this.row;
});

Clazz.newMeth(C$, 'getD$', function () {
return this.d;
});

Clazz.newMeth(C$, 'setD$jalview_xml_binding_jalview_DoubleVector', function (value) {
this.d=value;
});

Clazz.newMeth(C$, 'getE$', function () {
return this.e;
});

Clazz.newMeth(C$, 'setE$jalview_xml_binding_jalview_DoubleVector', function (value) {
this.e=value;
});

Clazz.newMeth(C$, 'getRows$', function () {
return this.rows;
});

Clazz.newMeth(C$, 'setRows$Integer', function (value) {
this.rows=value;
});

Clazz.newMeth(C$, 'getColumns$', function () {
return this.columns;
});

Clazz.newMeth(C$, 'setColumns$Integer', function (value) {
this.columns=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.DoubleMatrix'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="DoubleMatrix" namespace="www.jalview.org" propOrder={"row"  "d"  "e"  } )']],
  [['d','jalview.xml.binding.jalview.DoubleVector'],['@XmlElement(name="D" )']],
  [['e','.'],['@XmlElement(name="E" )']],
  [['rows','Integer'],['@XmlAttribute(name="rows" )']],
  [['columns','.'],['@XmlAttribute(name="columns" )']],
  [['row','java.util.List<jalview.xml.binding.jalview.DoubleVector>'],['@XmlElement']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
