(function(){var P$=Clazz.newPackage("jalview.io"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "DataSourceType", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "FILE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "URL", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PASTE", 2, []);
Clazz.newEnumConst($vals, C$.c$, "CLASSLOADER", 3, []);
Clazz.newEnumConst($vals, C$.c$, "RELATIVE_URL", 4, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
