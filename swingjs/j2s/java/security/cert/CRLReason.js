(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "CRLReason", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "UNSPECIFIED", 0, []);
Clazz.newEnumConst($vals, C$.c$, "KEY_COMPROMISE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CA_COMPROMISE", 2, []);
Clazz.newEnumConst($vals, C$.c$, "AFFILIATION_CHANGED", 3, []);
Clazz.newEnumConst($vals, C$.c$, "SUPERSEDED", 4, []);
Clazz.newEnumConst($vals, C$.c$, "CESSATION_OF_OPERATION", 5, []);
Clazz.newEnumConst($vals, C$.c$, "CERTIFICATE_HOLD", 6, []);
Clazz.newEnumConst($vals, C$.c$, "UNUSED", 7, []);
Clazz.newEnumConst($vals, C$.c$, "REMOVE_FROM_CRL", 8, []);
Clazz.newEnumConst($vals, C$.c$, "PRIVILEGE_WITHDRAWN", 9, []);
Clazz.newEnumConst($vals, C$.c$, "AA_COMPROMISE", 10, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:33 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
