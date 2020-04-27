(function(){var P$=Clazz.newPackage("javax.xml.bind.annotation"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "XmlAccessType", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PROPERTY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "FIELD", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PUBLIC_MEMBER", 2, []);
Clazz.newEnumConst($vals, C$.c$, "NONE", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
