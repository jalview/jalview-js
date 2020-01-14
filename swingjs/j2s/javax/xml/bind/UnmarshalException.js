(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[];
var C$=Clazz.newClass(P$, "UnmarshalException", null, 'javax.xml.bind.JAXBException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
C$.c$$S$S$Throwable.apply(this, [message, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (message, errorCode) {
C$.c$$S$S$Throwable.apply(this, [message, errorCode, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (exception) {
C$.c$$S$S$Throwable.apply(this, [null, null, exception]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (message, exception) {
C$.c$$S$S$Throwable.apply(this, [message, null, exception]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$Throwable', function (message, errorCode, exception) {
C$.superclazz.c$$S$S$Throwable.apply(this, [message, errorCode, exception]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
