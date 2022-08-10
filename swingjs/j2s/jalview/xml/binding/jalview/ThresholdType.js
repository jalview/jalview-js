(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "ThresholdType", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'value$',  function () {
return this.name$();
});

Clazz.newMeth(C$, 'fromValue$S',  function (v) {
return C$.valueOf$S(v);
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NONE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ABOVE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "BELOW", 2, []);
};
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.ThresholdType',null,['javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlEnum']],['name="ThresholdType" namespace="www.jalview.org/colours" ','']],
  [['NONE','jalview.xml.binding.jalview.ThresholdType'],['@XmlEnumValue']],
  [['ABOVE','jalview.xml.binding.jalview.ThresholdType'],['@XmlEnumValue']],
  [['BELOW','jalview.xml.binding.jalview.ThresholdType'],['@XmlEnumValue']]]}

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
