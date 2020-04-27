(function(){var P$=Clazz.newPackage("org.jmol.c"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "VDW", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pt'],'S',['type','type2']]]

Clazz.newMeth(C$, 'c$$I$S$S', function (pt, type, type2) {
;C$.$init$.apply(this);
this.pt=pt;
this.type=type;
this.type2=type2;
}, 1);

Clazz.newMeth(C$, 'getVdwLabel$', function () {
return (this.type == null  ? this.type2 : this.type);
});

Clazz.newMeth(C$, 'getVdwType$S', function (label) {
if (label != null ) for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (label.equalsIgnoreCase$S(item.type)) return item;

return null;
}, 1);

Clazz.newMeth(C$, 'getVdwType2$S', function (label) {
if (label != null ) for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (label.equalsIgnoreCase$S(item.type2)) return item;

return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "JMOL", 0, [0, "Jmol", null]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "BABEL", 1, [1, "Babel", null]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "RASMOL", 2, [2, "RasMol", null]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "BABEL21", 3, [3, "Babel21", null]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "AUTO_JMOL", 4, [0, null, "Jmol"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "AUTO_BABEL", 5, [1, null, "Babel"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "AUTO_RASMOL", 6, [2, null, "RasMol"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "AUTO", 7, [0, "Auto", null]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "USER", 8, [-1, "User", null]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "ADPMAX", 9, [-1, null, "adpmax"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "ADPMIN", 10, [-1, null, "adpmin"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "HYDRO", 11, [-1, null, "hydrophobic"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "BONDING", 12, [-1, null, "bondingradius"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "TEMP", 13, [-1, null, "temperature"]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "NOJMOL", 14, [-1, null, null]);
Clazz.newEnumConst($vals, C$.c$$I$S$S, "NADA", 15, [-1, null, null]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:06 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
