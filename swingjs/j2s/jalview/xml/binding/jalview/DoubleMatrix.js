(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[[0,'java.util.ArrayList']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DoubleMatrix");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['row','java.util.List','d','jalview.xml.binding.jalview.DoubleVector','+e','rows','Integer','+columns']]]

Clazz.newMeth(C$, 'getRow$', function () {
if (this.row == null ) {
this.row=Clazz.new_($I$(1,1));
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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.DoubleMatrix',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="DoubleMatrix" namespace="www.jalview.org" propOrder={"row"  "d"  "e"  } ']],
  [['d','jalview.xml.binding.jalview.DoubleVector',null,['javax.xml.bind.annotation.XmlElement']],['name="D" ']],
  [['e','.',null,['javax.xml.bind.annotation.XmlElement']],['name="E" ']],
  [['rows','Integer',null,['javax.xml.bind.annotation.XmlAttribute']],['name="rows" ']],
  [['columns','.',null,['javax.xml.bind.annotation.XmlAttribute']],['name="columns" ']],
  [['row','java.util.List<jalview.xml.binding.jalview.DoubleVector>'],['@XmlElement']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
