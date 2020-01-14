(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[];
var C$=Clazz.newClass(P$, "PerformanceMeasure");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.start=0;
this.method=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (method) {
C$.$init$.apply(this);
this.method=method;
this.start=System.currentTimeMillis$();
}, 1);

Clazz.newMeth(C$, 'logPerformance$S', function (text) {
var current=System.currentTimeMillis$();
if (current - this.start == 0) {
return;
}System.err.print$S(this.method);
System.err.print$S(": ");
System.err.print$J(current - this.start);
System.err.print$S(" milliseconds: ");
System.err.println$S(text);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-03-05 22:54:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
