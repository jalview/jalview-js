(function(){var P$=java.lang,I$=[];
/*c*/var C$=Clazz.newClass(P$, "ClassNotFoundException", null, 'ReflectiveOperationException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ex','Throwable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$Throwable.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (detailMessage) {
;C$.superclazz.c$$S$Throwable.apply(this,[detailMessage, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable',  function (detailMessage, exception) {
;C$.superclazz.c$$S.apply(this,[detailMessage]);C$.$init$.apply(this);
this.ex=exception;
}, 1);

Clazz.newMeth(C$, 'getException$',  function () {
return this.ex;
});

Clazz.newMeth(C$, 'getCause$',  function () {
return this.ex;
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:57 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
