(function(){var P$=Clazz.newPackage("javax.annotation.meta"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "When", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ALWAYS", 0, []);
Clazz.newEnumConst($vals, C$.c$, "UNKNOWN", 1, []);
Clazz.newEnumConst($vals, C$.c$, "MAYBE", 2, []);
Clazz.newEnumConst($vals, C$.c$, "NEVER", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:52 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
