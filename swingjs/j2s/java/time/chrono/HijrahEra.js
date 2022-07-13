(function(){var P$=Clazz.newPackage("java.time.chrono"),I$=[[0,'java.time.temporal.ChronoField','java.time.temporal.ValueRange']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "HijrahEra", null, 'Enum', 'java.time.chrono.Era');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'of$I', function (hijrahEra) {
if (hijrahEra == 1) {
return C$.AH;
} else {
throw Clazz.new_(Clazz.load('java.time.DateTimeException').c$$S,["Invalid era: " + hijrahEra]);
}}, 1);

Clazz.newMeth(C$, 'getValue$', function () {
return 1;
});

Clazz.newMeth(C$, 'range$java_time_temporal_TemporalField', function (field) {
if (field === $I$(1).ERA ) {
return $I$(2).of$J$J(1, 1);
}return P$.Era.superclazz.prototype.range$java_time_temporal_TemporalField.apply(this, [field]);
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "AH", 0, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-15 12:22:05 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
