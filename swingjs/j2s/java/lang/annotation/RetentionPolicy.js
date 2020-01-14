(function(){var P$=Clazz.newPackage("java.lang.annotation"),I$=[];
var C$=Clazz.newClass(P$, "RetentionPolicy", null, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SOURCE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "CLASS", 1, []);
Clazz.newEnumConst($vals, C$.c$, "RUNTIME", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
