(function(){var P$=Clazz.newPackage("java.nio.file.attribute"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "PosixFilePermission", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "OWNER_READ", 0, []);
Clazz.newEnumConst($vals, C$.c$, "OWNER_WRITE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "OWNER_EXECUTE", 2, []);
Clazz.newEnumConst($vals, C$.c$, "GROUP_READ", 3, []);
Clazz.newEnumConst($vals, C$.c$, "GROUP_WRITE", 4, []);
Clazz.newEnumConst($vals, C$.c$, "GROUP_EXECUTE", 5, []);
Clazz.newEnumConst($vals, C$.c$, "OTHERS_READ", 6, []);
Clazz.newEnumConst($vals, C$.c$, "OTHERS_WRITE", 7, []);
Clazz.newEnumConst($vals, C$.c$, "OTHERS_EXECUTE", 8, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
