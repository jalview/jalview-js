(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "MissingResourceException", null, 'RuntimeException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.className=null;
this.key=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (s, className, key) {
C$.superclazz.c$$S.apply(this, [s]);
C$.$init$.apply(this);
this.className=className;
this.key=key;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$Throwable', function (message, className, key, cause) {
C$.superclazz.c$$S$Throwable.apply(this, [message, cause]);
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
