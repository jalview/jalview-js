(function(){var P$=java.util,p$1={};
var C$=Clazz.newClass(P$, "InvalidPropertiesFormatException", null, 'java.io.IOException');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (cause) {
C$.superclazz.c$$S.apply(this, [cause == null  ? null : cause.toString()]);
C$.$init$.apply(this);
this.initCause$Throwable(cause);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
C$.superclazz.c$$S.apply(this, [message]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
throw Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["Not serializable."]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
throw Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["Not serializable."]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:48 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
