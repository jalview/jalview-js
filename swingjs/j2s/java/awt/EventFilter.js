(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
var C$=Clazz.newInterface(P$, "EventFilter", function(){
});
;
(function(){var C$=Clazz.newClass(P$.EventFilter, "FilterAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ACCEPT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "REJECT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ACCEPT_IMMEDIATELY", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:21 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
