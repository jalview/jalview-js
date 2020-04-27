(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "NoValueColour", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value']]]

Clazz.newMeth(C$, 'c$$S', function (v) {
;C$.$init$.apply(this);
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

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "NONE", 0, ["None"]);
Clazz.newEnumConst($vals, C$.c$$S, "MIN", 1, ["Min"]);
Clazz.newEnumConst($vals, C$.c$$S, "MAX", 2, ["Max"]);
};
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.NoValueColour',null,['javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlEnum']],['name="NoValueColour" namespace="www.jalview.org/colours" ','']],
  [['NONE','.',null,['javax.xml.bind.annotation.XmlEnumValue']],['"None"']],
  [['MIN','.',null,['javax.xml.bind.annotation.XmlEnumValue']],['"Min"']],
  [['MAX','.',null,['javax.xml.bind.annotation.XmlEnumValue']],['"Max"']]]}

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
