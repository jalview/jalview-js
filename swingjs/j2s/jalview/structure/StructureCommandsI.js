(function(){var P$=Clazz.newPackage("jalview.structure"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "StructureCommandsI", function(){
});
C$.$classes$=[['AtomSpecType',25]];
;
(function(){/*e*/var C$=Clazz.newClass(P$.StructureCommandsI, "AtomSpecType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "RESIDUE_ONLY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ALPHA", 1, []);
Clazz.newEnumConst($vals, C$.c$, "PHOSPHATE", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:40 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
