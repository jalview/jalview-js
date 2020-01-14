(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
var C$=Clazz.newClass(P$, "Encoding", null, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NONE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "UTF8", 1, []);
Clazz.newEnumConst($vals, C$.c$, "UTF_16BE", 2, []);
Clazz.newEnumConst($vals, C$.c$, "UTF_16LE", 3, []);
Clazz.newEnumConst($vals, C$.c$, "UTF_32BE", 4, []);
Clazz.newEnumConst($vals, C$.c$, "UTF_32LE", 5, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
