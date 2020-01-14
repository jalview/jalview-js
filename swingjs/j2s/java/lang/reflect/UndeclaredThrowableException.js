(function(){var P$=java.lang.reflect,I$=[];
var C$=Clazz.newClass(P$, "UndeclaredThrowableException", null, 'RuntimeException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.undeclaredThrowable=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (exception) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.undeclaredThrowable=exception;
this.initCause$Throwable(exception);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable$S', function (exception, detailMessage) {
C$.superclazz.c$$S.apply(this, [detailMessage]);
C$.$init$.apply(this);
this.undeclaredThrowable=exception;
this.initCause$Throwable(exception);
}, 1);

Clazz.newMeth(C$, 'getUndeclaredThrowable$', function () {
return this.undeclaredThrowable;
});

Clazz.newMeth(C$, 'getCause$', function () {
return this.undeclaredThrowable;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
