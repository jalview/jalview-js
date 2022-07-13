(function(){var P$=Clazz.newPackage("jalview.xml.binding.jalview"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "FilterBy", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['value']]]

Clazz.newMeth(C$, 'c$$S',  function (v) {
;C$.$init$.apply(this);
this.value=v;
}, 1);

Clazz.newMeth(C$, 'value$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'fromValue$S',  function (v) {
for (var c, $c = 0, $$c = C$.values$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c.value.equals$O(v)) {
return c;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[v]);
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "BY_LABEL", 0, ["byLabel"]);
Clazz.newEnumConst($vals, C$.c$$S, "BY_SCORE", 1, ["byScore"]);
Clazz.newEnumConst($vals, C$.c$$S, "BY_ATTRIBUTE", 2, ["byAttribute"]);
};
C$.$getAnn$ = function(){ return [
[[null,'jalview.xml.binding.jalview.FilterBy',null,['javax.xml.bind.annotation.XmlType','javax.xml.bind.annotation.XmlEnum']],['name="FilterBy" namespace="www.jalview.org/colours" ','']],
  [['BY_LABEL','.',null,['javax.xml.bind.annotation.XmlEnumValue']],['"byLabel"']],
  [['BY_SCORE','.',null,['javax.xml.bind.annotation.XmlEnumValue']],['"byScore"']],
  [['BY_ATTRIBUTE','.',null,['javax.xml.bind.annotation.XmlEnumValue']],['"byAttribute"']]]}

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:43 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
