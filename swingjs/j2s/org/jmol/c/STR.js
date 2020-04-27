(function(){var P$=Clazz.newPackage("org.jmol.c"),p$1={};
/*e*/var C$=Clazz.newClass(P$, "STR", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id','color']]]

Clazz.newMeth(C$, 'c$$I$I', function (id, color) {
;C$.$init$.apply(this);
this.id=id;
this.color=color;
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'getColor$', function () {
return this.color;
});

Clazz.newMeth(C$, 'getProteinStructureType$S', function (name) {
for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (name.equalsIgnoreCase$S(item.name$())) return (p$1.isProtein.apply(item, []) ? item : C$.NOT);

return C$.NOT;
}, 1);

Clazz.newMeth(C$, 'getBioStructureTypeName$Z', function (isGeneric) {
return (this.id < 0 ? "" : isGeneric && p$1.isProtein.apply(this, [])  ? "protein" : this.name$());
});

Clazz.newMeth(C$, 'isProtein', function () {
return this.id >= 0 && this.id <= 3  || this.id >= 7 ;
}, p$1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$I, "NOT", 0, [-1, -8355712]);
Clazz.newEnumConst($vals, C$.c$$I$I, "NONE", 1, [0, -1]);
Clazz.newEnumConst($vals, C$.c$$I$I, "TURN", 2, [1, -10452737]);
Clazz.newEnumConst($vals, C$.c$$I$I, "SHEET", 3, [2, -14336]);
Clazz.newEnumConst($vals, C$.c$$I$I, "HELIX", 4, [3, -65408]);
Clazz.newEnumConst($vals, C$.c$$I$I, "DNA", 5, [4, -5373698]);
Clazz.newEnumConst($vals, C$.c$$I$I, "RNA", 6, [5, -196254]);
Clazz.newEnumConst($vals, C$.c$$I$I, "CARBOHYDRATE", 7, [6, -5855494]);
Clazz.newEnumConst($vals, C$.c$$I$I, "HELIX310", 8, [7, -6291328]);
Clazz.newEnumConst($vals, C$.c$$I$I, "HELIXALPHA", 9, [8, -65408]);
Clazz.newEnumConst($vals, C$.c$$I$I, "HELIXPI", 10, [9, -10485632]);
Clazz.newEnumConst($vals, C$.c$$I$I, "ANNOTATION", 11, [-2, 0]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
