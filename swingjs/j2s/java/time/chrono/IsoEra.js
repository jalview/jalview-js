(function(){var P$=Clazz.newPackage("java.time.chrono"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "IsoEra", null, 'Enum', 'java.time.chrono.Era');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'of$I', function (isoEra) {
switch (isoEra) {
case 0:
return C$.BCE;
case 1:
return C$.CE;
default:
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid era: " + isoEra]);
}
}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return this.ordinal$();
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "BCE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "CE", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-16 15:52:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
