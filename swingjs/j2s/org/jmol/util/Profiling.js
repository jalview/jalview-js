(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Profiling");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['J',['start']]]

Clazz.newMeth(C$, 'startProfiling$', function () {
C$.start=C$.getTime$();
}, 1);

Clazz.newMeth(C$, 'logProfiling$S', function (txt) {
var delta=C$.getTime$() - C$.start;
var label=("            " + delta);
label=label.substring$I$I(label.length$() - 12, label.length$());
if (delta > 100000) {
System.err.println$S(label + "ns: " + txt );
}System.err.flush$();
C$.start=C$.getTime$();
}, 1);

Clazz.newMeth(C$, 'getTime$', function () {
return System.nanoTime$();
}, 1);

Clazz.newMeth(C$, 'getUnit$', function () {
return "ns";
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
