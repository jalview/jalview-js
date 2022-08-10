(function(){var P$=Clazz.newPackage("java.time.format"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "SignStyle", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'parse$Z$Z$Z', function (positive, strict, fixedWidth) {
switch (this.ordinal$()) {
case 0:
return !positive || !strict ;
case 1:
case 4:
return true;
default:
return !strict && !fixedWidth ;
}
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NORMAL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ALWAYS", 1, []);
Clazz.newEnumConst($vals, C$.c$, "NEVER", 2, []);
Clazz.newEnumConst($vals, C$.c$, "NOT_NEGATIVE", 3, []);
Clazz.newEnumConst($vals, C$.c$, "EXCEEDS_PAD", 4, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:59 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
