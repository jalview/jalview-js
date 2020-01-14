(function(){var P$=java.lang,I$=[];
var C$=Clazz.newClass(P$, "AssertionError", null, 'Error');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$O', function (detailMessage) {
C$.superclazz.c$$S$Throwable.apply(this, [String.valueOf$O(detailMessage), (Clazz.instanceOf(detailMessage, "java.lang.Throwable") ? detailMessage : null)]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (detailMessage) {
C$.c$$O.apply(this, [String.valueOf$Z(detailMessage)]);
}, 1);

Clazz.newMeth(C$, 'c$$C', function (detailMessage) {
C$.c$$O.apply(this, [String.valueOf$C(detailMessage)]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (detailMessage) {
C$.c$$O.apply(this, [Integer.toString$I(detailMessage)]);
}, 1);

Clazz.newMeth(C$, 'c$$J', function (detailMessage) {
C$.c$$O.apply(this, [Long.toString$J(detailMessage)]);
}, 1);

Clazz.newMeth(C$, 'c$$F', function (detailMessage) {
C$.c$$O.apply(this, [Float.toString$F(detailMessage)]);
}, 1);

Clazz.newMeth(C$, 'c$$D', function (detailMessage) {
C$.c$$O.apply(this, [Double.toString$D(detailMessage)]);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
