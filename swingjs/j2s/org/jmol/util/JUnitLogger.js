(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JUnitLogger", null, null, 'org.jmol.util.LoggerInterface');
C$.information=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.information=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'activateLogger$', function () {
$I$(1).setLogger$org_jmol_util_LoggerInterface(Clazz.new_(C$));
}, 1);

Clazz.newMeth(C$, 'setInformation$S', function (txt) {
C$.information=txt;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'logError$S$Throwable', function (txt, e) {
System.err.println$S("Error: " + ((C$.information != null ) ? ("[" + C$.information + "] " ) : "") + ((txt != null ) ? (txt + " - ") : "") + ((e != null ) ? e.getClass$().getName$() : "") + ((e != null ) && (e.getMessage$() != null )  ? (" - " + e.getMessage$()) : "") );
if (e != null ) {
var elements=e.getStackTrace$();
if (elements != null ) {
for (var i=0; i < elements.length; i++) {
System.err.println$S(elements[i].getClassName$() + " - " + elements[i].getLineNumber$() + " - " + elements[i].getMethodName$() );
}
}}}, p$1);

Clazz.newMeth(C$, 'debug$S', function (txt) {
System.out.println$S(txt);
});

Clazz.newMeth(C$, 'info$S', function (txt) {
System.out.println$S(txt);
});

Clazz.newMeth(C$, 'warn$S', function (txt) {
System.out.println$S(txt);
});

Clazz.newMeth(C$, 'warnEx$S$Throwable', function (txt, e) {
p$1.logError$S$Throwable.apply(this, [txt, e]);
});

Clazz.newMeth(C$, 'error$S', function (txt) {
});

Clazz.newMeth(C$, 'errorEx$S$Throwable', function (txt, e) {
p$1.logError$S$Throwable.apply(this, [txt, e]);
});

Clazz.newMeth(C$, 'fatal$S', function (txt) {
});

Clazz.newMeth(C$, 'fatalEx$S$Throwable', function (txt, e) {
p$1.logError$S$Throwable.apply(this, [txt, e]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
