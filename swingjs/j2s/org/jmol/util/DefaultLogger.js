(function(){var P$=Clazz.newPackage("org.jmol.util"),I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultLogger", null, null, 'org.jmol.util.LoggerInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
