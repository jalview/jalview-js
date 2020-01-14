(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
var C$=Clazz.newClass(P$, "InvocationEvent", null, 'java.awt.AWTEvent', 'java.awt.ActiveEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.runnable=null;
this.notifier=null;
this.catchExceptions=false;
this.exception=null;
this.throwable=null;
this.when=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.exception=null;
this.throwable=null;
}, 1);

Clazz.newMeth(C$, 'c$$O$Runnable', function (source, runnable) {
C$.c$$O$I$Runnable$O$Z.apply(this, [source, 1200, runnable, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$O$Runnable$O$Z', function (source, runnable, notifier, catchThrowables) {
C$.c$$O$I$Runnable$O$Z.apply(this, [source, 1200, runnable, notifier, catchThrowables]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$Runnable$O$Z', function (source, id, runnable, notifier, catchThrowables) {
C$.superclazz.c$$O$I.apply(this, [source, id]);
C$.$init$.apply(this);
this.runnable=runnable;
this.notifier=notifier;
this.catchExceptions=catchThrowables;
this.when=System.currentTimeMillis$();
}, 1);

Clazz.newMeth(C$, 'dispatch$', function () {
if (this.catchExceptions) {
try {
this.runnable.run$();
} catch (t) {
if (Clazz.instanceOf(t, "java.lang.Exception")) {
this.exception=t;
}this.throwable=t;
}
} else {
this.runnable.run$();
}if (this.notifier != null ) {
{
this.notifier.notifyAll$();
}}});

Clazz.newMeth(C$, 'getException$', function () {
return (this.catchExceptions) ? this.exception : null;
});

Clazz.newMeth(C$, 'getThrowable$', function () {
return (this.catchExceptions) ? this.throwable : null;
});

Clazz.newMeth(C$, 'getWhen$', function () {
return this.when;
});

Clazz.newMeth(C$, 'paramString$', function () {
var typeStr;
switch (this.id) {
case 1200:
typeStr="INVOCATION_DEFAULT";
break;
default:
typeStr="unknown type";
}
return typeStr + ",runnable=" + this.runnable + ",notifier=" + this.notifier + ",catchExceptions=" + this.catchExceptions + ",when=" + this.when ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
