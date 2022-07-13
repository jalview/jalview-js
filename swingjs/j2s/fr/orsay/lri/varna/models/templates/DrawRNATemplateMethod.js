(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "DrawRNATemplateMethod", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['_msg']]]

Clazz.newMeth(C$, 'getDefault$', function () {
return C$.HELIXTRANSLATE;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this._msg;
});

Clazz.newMeth(C$, 'c$$S', function (msg) {
;C$.$init$.apply(this);
this._msg=msg;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "NOADJUST", 0, ["No Adjust"]);
Clazz.newEnumConst($vals, C$.c$$S, "MAXSCALINGFACTOR", 1, ["Max Scaling"]);
Clazz.newEnumConst($vals, C$.c$$S, "NOINTERSECT", 2, ["Non-crossing"]);
Clazz.newEnumConst($vals, C$.c$$S, "HELIXTRANSLATE", 3, ["Helix Translation"]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
