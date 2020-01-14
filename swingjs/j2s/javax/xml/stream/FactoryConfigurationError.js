(function(){var P$=Clazz.newPackage("javax.xml.stream"),I$=[];
var C$=Clazz.newClass(P$, "FactoryConfigurationError", null, 'Error');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.exception=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$Exception.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Exception', function (e) {
C$.c$$Exception$S.apply(this, [e, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Exception$S', function (e, msg) {
C$.superclazz.c$$S.apply(this, [msg]);
C$.$init$.apply(this);
this.exception=e;
}, 1);

Clazz.newMeth(C$, 'c$$S$Exception', function (msg, e) {
C$.c$$Exception$S.apply(this, [e, msg]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (msg) {
C$.c$$Exception$S.apply(this, [null, msg]);
}, 1);

Clazz.newMeth(C$, 'getException$', function () {
return this.exception;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return C$.superclazz.prototype.getMessage$.apply(this, []);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:30 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
