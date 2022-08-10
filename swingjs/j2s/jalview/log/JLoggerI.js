(function(){var P$=Clazz.newPackage("jalview.log"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "JLoggerI", function(){
});
C$.$classes$=[['LogLevel',25]];
;
(function(){/*e*/var C$=Clazz.newClass(P$.JLoggerI, "LogLevel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ALL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "TRACE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "DEBUG", 2, []);
Clazz.newEnumConst($vals, C$.c$, "INFO", 3, []);
Clazz.newEnumConst($vals, C$.c$, "WARN", 4, []);
Clazz.newEnumConst($vals, C$.c$, "ERROR", 5, []);
Clazz.newEnumConst($vals, C$.c$, "FATAL", 6, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:39 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
