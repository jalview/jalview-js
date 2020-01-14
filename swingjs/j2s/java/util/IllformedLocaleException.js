(function(){var P$=java.util,I$=[];
var C$=Clazz.newClass(P$, "IllformedLocaleException", null, 'RuntimeException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._errIdx=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._errIdx=-1;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
C$.superclazz.c$$S.apply(this, [message]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (message, errorIndex) {
C$.superclazz.c$$S.apply(this, [message + ((errorIndex < 0) ? "" : " [at index " + errorIndex + "]" )]);
C$.$init$.apply(this);
this._errIdx=errorIndex;
}, 1);

Clazz.newMeth(C$, 'getErrorIndex$', function () {
return this._errIdx;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
