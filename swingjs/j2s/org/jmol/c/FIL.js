(function(){var P$=Clazz.newPackage("org.jmol.c"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "FIL", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['code']]]

Clazz.newMeth(C$, 'getCode$', function () {
return this.code;
});

Clazz.newMeth(C$, 'c$$I', function (code) {
;C$.$init$.apply(this);
this.code=code;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I, "DELETED", 0, [5]);
Clazz.newEnumConst($vals, C$.c$$I, "CREATED", 1, [3]);
Clazz.newEnumConst($vals, C$.c$$I, "CREATING_MODELSET", 2, [2]);
Clazz.newEnumConst($vals, C$.c$$I, "ZAPPED", 3, [0]);
Clazz.newEnumConst($vals, C$.c$$I, "NOT_LOADED", 4, [-1]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
