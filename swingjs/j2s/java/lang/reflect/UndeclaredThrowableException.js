(function(){var P$=java.lang.reflect,I$=[];
/*c*/var C$=Clazz.newClass(P$, "UndeclaredThrowableException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['undeclaredThrowable','Throwable']]]

Clazz.newMeth(C$, 'c$$Throwable', function (exception) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.undeclaredThrowable=exception;
this.initCause$Throwable(exception);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable$S', function (exception, detailMessage) {
;C$.superclazz.c$$S.apply(this,[detailMessage]);C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:25 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
