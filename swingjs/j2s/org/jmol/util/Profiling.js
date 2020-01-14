(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[];
var C$=Clazz.newClass(P$, "Profiling");
C$.start=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

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
;Clazz.setTVer('3.2.4.07');//Created 2019-03-05 22:54:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
