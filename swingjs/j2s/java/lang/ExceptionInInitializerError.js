(function(){var P$=java.lang,I$=[];
var C$=Clazz.newClass(P$, "ExceptionInInitializerError", null, 'LinkageError');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.exception=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.initCause$Throwable(null);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (detailMessage) {
C$.superclazz.c$$S.apply(this, [detailMessage]);
C$.$init$.apply(this);
this.initCause$Throwable(null);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (exception) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.exception=exception;
this.initCause$Throwable(exception);
}, 1);

Clazz.newMeth(C$, 'getException$', function () {
return this.exception;
});

Clazz.newMeth(C$, 'getCause$', function () {
return this.exception;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:35 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
