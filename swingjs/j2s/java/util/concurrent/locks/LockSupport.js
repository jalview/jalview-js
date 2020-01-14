(function(){var P$=Clazz.newPackage("java.util.concurrent.locks"),I$=[];
var C$=Clazz.newClass(P$, "LockSupport");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'unpark$Thread', function (thread) {
}, 1);

Clazz.newMeth(C$, 'park$O', function (blocker) {
}, 1);

Clazz.newMeth(C$, 'parkNanos$O$J', function (blocker, nanos) {
}, 1);

Clazz.newMeth(C$, 'parkUntil$O$J', function (blocker, deadline) {
}, 1);

Clazz.newMeth(C$, 'getBlocker$Thread', function (t) {
return Integer.valueOf$I(0);
}, 1);

Clazz.newMeth(C$, 'park$', function () {
}, 1);

Clazz.newMeth(C$, 'parkNanos$J', function (nanos) {
}, 1);

Clazz.newMeth(C$, 'parkUntil$J', function (deadline) {
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
