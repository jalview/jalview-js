(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
var C$=Clazz.newClass(P$, "PcaDataType");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pairwiseMatrix=null;
this.tridiagonalMatrix=null;
this.eigenMatrix=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getPairwiseMatrix$', function () {
return this.pairwiseMatrix;
});

Clazz.newMeth(C$, 'setPairwiseMatrix$jalview_xml_binding_jalview_DoubleMatrix', function (value) {
this.pairwiseMatrix=value;
});

Clazz.newMeth(C$, 'getTridiagonalMatrix$', function () {
return this.tridiagonalMatrix;
});

Clazz.newMeth(C$, 'setTridiagonalMatrix$jalview_xml_binding_jalview_DoubleMatrix', function (value) {
this.tridiagonalMatrix=value;
});

Clazz.newMeth(C$, 'getEigenMatrix$', function () {
return this.eigenMatrix;
});

Clazz.newMeth(C$, 'setEigenMatrix$jalview_xml_binding_jalview_DoubleMatrix', function (value) {
this.eigenMatrix=value;
});
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.PcaDataType'],['@XmlAccessorType(XmlAccessType.FIELD)','@XmlType(name="PcaDataType" namespace="www.jalview.org" propOrder={"pairwiseMatrix"  "tridiagonalMatrix"  "eigenMatrix"  } )']],
  [['pairwiseMatrix','jalview.xml.binding.jalview.DoubleMatrix'],['@XmlElement(required="true" )']],
  [['tridiagonalMatrix','.'],['@XmlElement(required="true" )']],
  [['eigenMatrix','.'],['@XmlElement(required="true" )']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
