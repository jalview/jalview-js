(function(){var P$=Clazz.newPackage("org.jmol.c"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "STER", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isBiColor'],'S',['$name']]]

Clazz.newMeth(C$, 'c$$S$Z', function (name, isBiColor) {
;C$.$init$.apply(this);
this.$name=name;
this.isBiColor=isBiColor;
}, 1);

Clazz.newMeth(C$, 'getName$', function () {
return this.$name;
});

Clazz.newMeth(C$, 'isBiColor$', function () {
return this.isBiColor;
});

Clazz.newMeth(C$, 'getStereoMode$S', function (id) {
for (var item, $item = 0, $$item = C$.values$(); $item<$$item.length&&((item=($$item[$item])),1);$item++) if (item.$name.equalsIgnoreCase$S(id)) return item;

return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$Z, "NONE", 0, ["OFF", false]);
Clazz.newEnumConst($vals, C$.c$$S$Z, "DOUBLE", 1, ["", false]);
Clazz.newEnumConst($vals, C$.c$$S$Z, "REDCYAN", 2, ["REDCYAN", true]);
Clazz.newEnumConst($vals, C$.c$$S$Z, "REDBLUE", 3, ["REDBLUE", true]);
Clazz.newEnumConst($vals, C$.c$$S$Z, "REDGREEN", 4, ["REDGREEN", true]);
Clazz.newEnumConst($vals, C$.c$$S$Z, "DTI", 5, ["DTI", false]);
Clazz.newEnumConst($vals, C$.c$$S$Z, "CUSTOM", 6, ["", true]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:31 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
