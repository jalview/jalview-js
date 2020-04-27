(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "MissingResourceException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['className','key']]]

Clazz.newMeth(C$, 'c$$S$S$S', function (s, className, key) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
this.className=className;
this.key=key;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$Throwable', function (message, className, key, cause) {
;C$.superclazz.c$$S$Throwable.apply(this,[message, cause]);C$.$init$.apply(this);
this.className=className;
this.key=key;
}, 1);

Clazz.newMeth(C$, 'getClassName$', function () {
return this.className;
});

Clazz.newMeth(C$, 'getKey$', function () {
return this.key;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
