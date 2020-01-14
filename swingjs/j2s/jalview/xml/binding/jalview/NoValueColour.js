(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
var C$=Clazz.newClass(P$, "NoValueColour", null, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "NONE", 0, ["None"]);
Clazz.newEnumConst($vals, C$.c$$S, "MIN", 1, ["Min"]);
Clazz.newEnumConst($vals, C$.c$$S, "MAX", 2, ["Max"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (v) {
C$.$init$.apply(this);
this.value=v;
}, 1);

Clazz.newMeth(C$, 'value$', function () {
return this.value;
});

Clazz.newMeth(C$, 'fromValue$S', function (v) {
for (var c, $c = 0, $$c = C$.values$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c.value.equals$O(v)) {
return c;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[v]);
}, 1);
C$.__ANN__ = [[[null,'jalview.xml.binding.jalview.NoValueColour'],['@XmlType(name="NoValueColour" namespace="www.jalview.org/colours" )','@XmlEnum']],
  [['NONE','.'],['@XmlEnumValue("None")']],
  [['MIN','.'],['@XmlEnumValue("Min")']],
  [['MAX','.'],['@XmlEnumValue("Max")']]];

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
