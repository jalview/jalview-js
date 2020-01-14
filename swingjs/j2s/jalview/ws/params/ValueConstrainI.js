(function(){var P$=Clazz.newPackage("jalview.ws.params"),I$=[];
var C$=Clazz.newInterface(P$, "ValueConstrainI", function(){
});
;
(function(){var C$=Clazz.newClass(P$.ValueConstrainI, "ValueType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Integer", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Float", 1, []);
Clazz.newEnumConst($vals, C$.c$, "String", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
