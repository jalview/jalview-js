(function(){var P$=Clazz.newPackage("java.time.format"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "TextStyle", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['calendarStyle','zoneNameStyleIndex']]]

Clazz.newMeth(C$, 'c$$I$I', function (calendarStyle, zoneNameStyleIndex) {
;C$.$init$.apply(this);
this.calendarStyle=calendarStyle;
this.zoneNameStyleIndex=zoneNameStyleIndex;
}, 1);

Clazz.newMeth(C$, 'isStandalone$', function () {
return (this.ordinal$() & 1) == 1;
});

Clazz.newMeth(C$, 'asStandalone$', function () {
return C$.values$()[this.ordinal$() | 1];
});

Clazz.newMeth(C$, 'asNormal$', function () {
return C$.values$()[this.ordinal$() & ~1];
});

Clazz.newMeth(C$, 'toCalendarStyle$', function () {
return this.calendarStyle;
});

Clazz.newMeth(C$, 'zoneNameStyleIndex$', function () {
return this.zoneNameStyleIndex;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I$I, "FULL", 0, [2, 0]);
Clazz.newEnumConst($vals, C$.c$$I$I, "FULL_STANDALONE", 1, [32770, 0]);
Clazz.newEnumConst($vals, C$.c$$I$I, "SHORT", 2, [1, 1]);
Clazz.newEnumConst($vals, C$.c$$I$I, "SHORT_STANDALONE", 3, [32769, 1]);
Clazz.newEnumConst($vals, C$.c$$I$I, "NARROW", 4, [4, 1]);
Clazz.newEnumConst($vals, C$.c$$I$I, "NARROW_STANDALONE", 5, [32772, 1]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:07 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
