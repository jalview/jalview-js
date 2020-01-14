(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[];
var C$=Clazz.newClass(P$, "StandardOpenOption", null, 'Enum', 'java.nio.file.OpenOption');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "READ", 0, []);
Clazz.newEnumConst($vals, C$.c$, "WRITE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "APPEND", 2, []);
Clazz.newEnumConst($vals, C$.c$, "TRUNCATE_EXISTING", 3, []);
Clazz.newEnumConst($vals, C$.c$, "CREATE", 4, []);
Clazz.newEnumConst($vals, C$.c$, "CREATE_NEW", 5, []);
Clazz.newEnumConst($vals, C$.c$, "DELETE_ON_CLOSE", 6, []);
Clazz.newEnumConst($vals, C$.c$, "SPARSE", 7, []);
Clazz.newEnumConst($vals, C$.c$, "SYNC", 8, []);
Clazz.newEnumConst($vals, C$.c$, "DSYNC", 9, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:41 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
