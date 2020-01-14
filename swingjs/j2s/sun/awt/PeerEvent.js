(function(){var P$=Clazz.newPackage("sun.awt"),I$=[];
var C$=Clazz.newClass(P$, "PeerEvent", null, 'java.awt.event.InvocationEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.flags=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$Runnable$J', function (source, runnable, flags) {
C$.c$$O$Runnable$O$Z$J.apply(this, [source, runnable, null, false, flags]);
}, 1);

Clazz.newMeth(C$, 'c$$O$Runnable$O$Z$J', function (source, runnable, notifier, catchExceptions, flags) {
C$.superclazz.c$$O$I$Runnable$O$Z.apply(this, [source, 1200, runnable, notifier, catchExceptions]);
C$.$init$.apply(this);
this.flags=flags;
}, 1);

Clazz.newMeth(C$, 'getFlags$', function () {
return this.flags;
});

Clazz.newMeth(C$, 'coalesceEvents$sun_awt_PeerEvent', function (newEvent) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
