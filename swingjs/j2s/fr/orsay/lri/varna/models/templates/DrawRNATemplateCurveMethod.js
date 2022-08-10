(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "DrawRNATemplateCurveMethod", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['_msg']]]

Clazz.newMeth(C$, 'c$$S', function (msg) {
;C$.$init$.apply(this);
this._msg=msg;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this._msg;
});

Clazz.newMeth(C$, 'getDefault$', function () {
return C$.SMART;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "EXACTLY_AS_IN_TEMPLATE", 0, ["Bezier"]);
Clazz.newEnumConst($vals, C$.c$$S, "ALWAYS_REPLACE_BY_ELLIPSES", 1, ["Ellipses"]);
Clazz.newEnumConst($vals, C$.c$$S, "SMART", 2, ["Auto-Select"]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
