(function(){var P$=Clazz.newPackage("java.nio.file"),p$1={},I$=[[0,'java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DirectoryIteratorException", null, 'java.util.ConcurrentModificationException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_IOException', function (cause) {
C$.superclazz.c$$Throwable.apply(this, [$I$(1).requireNonNull$TT(cause)]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getCause$', function () {
return C$.superclazz.prototype.getCause$.apply(this, []);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
var cause=C$.superclazz.prototype.getCause$.apply(this, []);
if (!(Clazz.instanceOf(cause, "java.io.IOException"))) throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Cause must be an IOException"]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:40 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
