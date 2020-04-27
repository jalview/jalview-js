(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JUnitLogger", null, null, 'org.jmol.util.LoggerInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['information']]]

Clazz.newMeth(C$, 'activateLogger$', function () {
(function(a,f){return f.apply(null,a)})([Clazz.new_(C$)],$I$(1).setLogger$org_jmol_util_LoggerInterface);
}, 1);

Clazz.newMeth(C$, 'setInformation$S', function (txt) {
C$.information=txt;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
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

C$.$static$=function(){C$.$static$=0;
C$.information=null;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
