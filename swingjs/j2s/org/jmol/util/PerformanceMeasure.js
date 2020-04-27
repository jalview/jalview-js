(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PerformanceMeasure");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['start'],'S',['method']]]

Clazz.newMeth(C$, 'c$$S', function (method) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
