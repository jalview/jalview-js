(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
var C$=Clazz.newClass(P$, "ThresholdType", null, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NONE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ABOVE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "BELOW", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'value$', function () {
return this.name$();
});

Clazz.newMeth(C$, 'fromValue$S', function (v) {
return C$.valueOf$S(v);
}, 1);
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.ThresholdType'],['@XmlType(name="ThresholdType" namespace="www.jalview.org/colours" )','@XmlEnum']],
  [['NONE','jalview.xml.binding.jalview.ThresholdType'],['@XmlEnumValue']],
  [['ABOVE','jalview.xml.binding.jalview.ThresholdType'],['@XmlEnumValue']],
  [['BELOW','jalview.xml.binding.jalview.ThresholdType'],['@XmlEnumValue']]];

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
