(function(){var P$=Clazz.newPackage("java.nio.file.attribute"),I$=[];
var C$=Clazz.newClass(P$, "AclEntryFlag", null, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "FILE_INHERIT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "DIRECTORY_INHERIT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "NO_PROPAGATE_INHERIT", 2, []);
Clazz.newEnumConst($vals, C$.c$, "INHERIT_ONLY", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:42 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
