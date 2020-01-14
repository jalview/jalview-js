(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DefaultLogger", null, null, 'org.jmol.util.LoggerInterface');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'log$java_io_PrintStream$I$S$Throwable', function (out, level, txt, e) {
if (out === System.err ) System.out.flush$();
if ((out != null ) && ((txt != null ) || (e != null ) ) ) {
txt=(txt != null  ? txt : "");
out.println$S(($I$(1).logLevel$() ? "[" + $I$(1).getLevel$I(level) + "] "  : "") + txt + (e != null  ? ": " + e.toString() : "") );
if (e != null ) {
var elements=e.getStackTrace$();
if (elements != null ) {
for (var i=0; i < elements.length; i++) {
out.println$S(elements[i].getClassName$() + " - " + elements[i].getLineNumber$() + " - " + elements[i].getMethodName$() );
}
}}}if (out === System.err ) System.err.flush$();
});

Clazz.newMeth(C$, 'debug$S', function (txt) {
this.log$java_io_PrintStream$I$S$Throwable(System.out, 5, txt, null);
});

Clazz.newMeth(C$, 'info$S', function (txt) {
this.log$java_io_PrintStream$I$S$Throwable(System.out, 4, txt, null);
});

Clazz.newMeth(C$, 'warn$S', function (txt) {
this.log$java_io_PrintStream$I$S$Throwable(System.out, 3, txt, null);
});

Clazz.newMeth(C$, 'warnEx$S$Throwable', function (txt, e) {
this.log$java_io_PrintStream$I$S$Throwable(System.out, 3, txt, e);
});

Clazz.newMeth(C$, 'error$S', function (txt) {
this.log$java_io_PrintStream$I$S$Throwable(System.err, 2, txt, null);
});

Clazz.newMeth(C$, 'errorEx$S$Throwable', function (txt, e) {
this.log$java_io_PrintStream$I$S$Throwable(System.err, 2, txt, e);
});

Clazz.newMeth(C$, 'fatal$S', function (txt) {
this.log$java_io_PrintStream$I$S$Throwable(System.err, 1, txt, null);
});

Clazz.newMeth(C$, 'fatalEx$S$Throwable', function (txt, e) {
this.log$java_io_PrintStream$I$S$Throwable(System.err, 1, txt, e);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:05 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
