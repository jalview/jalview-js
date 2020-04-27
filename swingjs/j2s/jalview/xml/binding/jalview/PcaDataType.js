(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PcaDataType");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['pairwiseMatrix','jalview.xml.binding.jalview.DoubleMatrix','+tridiagonalMatrix','+eigenMatrix']]]

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
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.PcaDataType',null,['javax.xml.bind.annotation.XmlAccessorType','javax.xml.bind.annotation.XmlType']],['XmlAccessType.FIELD','name="PcaDataType" namespace="www.jalview.org" propOrder={"pairwiseMatrix"  "tridiagonalMatrix"  "eigenMatrix"  } ']],
  [['pairwiseMatrix','jalview.xml.binding.jalview.DoubleMatrix',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['tridiagonalMatrix','.',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']],
  [['eigenMatrix','.',null,['javax.xml.bind.annotation.XmlElement']],['required="true" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
