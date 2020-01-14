(function(){var P$=Clazz.newPackage("java.nio.channels.spi"),I$=[[0,'Thread','sun.misc.SharedSecrets']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractInterruptibleChannel", null, null, ['java.nio.channels.Channel', 'java.nio.channels.InterruptibleChannel']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.closeLock=null;
this.open=false;
this.interruptor=null;
this.interrupted=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.closeLock= Clazz.new_();
this.open=true;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'close$', function () {
{
if (!this.open) return;
this.open=false;
this.implCloseChannel$();
}});

Clazz.newMeth(C$, 'isOpen$', function () {
return this.open;
});

Clazz.newMeth(C$, 'begin$', function () {
if (this.interruptor == null ) {
this.interruptor=((P$.AbstractInterruptibleChannel$1||
(function(){var C$=Clazz.newClass(P$, "AbstractInterruptibleChannel$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'sun.nio.ch.Interruptible', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['interrupt$Thread','interrupt$'], function (target) {
{
if (!this.b$['java.nio.channels.spi.AbstractInterruptibleChannel'].open) return;
this.b$['java.nio.channels.spi.AbstractInterruptibleChannel'].open=false;
this.b$['java.nio.channels.spi.AbstractInterruptibleChannel'].interrupted=target;
try {
this.b$['java.nio.channels.spi.AbstractInterruptibleChannel'].implCloseChannel$.apply(this.b$['java.nio.channels.spi.AbstractInterruptibleChannel'], []);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
} else {
throw x;
}
}
}});
})()
), Clazz.new_(P$.AbstractInterruptibleChannel$1.$init$, [this, null]));
}C$.blockedOn$sun_nio_ch_Interruptible(this.interruptor);
var me=$I$(1).currentThread$();
if (me.isInterrupted$()) this.interruptor.interrupt$(me);
});

Clazz.newMeth(C$, 'end$Z', function (completed) {
C$.blockedOn$sun_nio_ch_Interruptible(null);
var interrupted=this.interrupted;
if (interrupted != null  && interrupted === $I$(1).currentThread$()  ) {
interrupted=null;
throw Clazz.new_(Clazz.load('java.nio.channels.ClosedByInterruptException'));
}if (!completed && !this.open ) throw Clazz.new_(Clazz.load('java.nio.channels.AsynchronousCloseException'));
});

Clazz.newMeth(C$, 'blockedOn$sun_nio_ch_Interruptible', function (intr) {
$I$(2).getJavaLangAccess$().blockedOn$Thread$sun_nio_ch_Interruptible($I$(1).currentThread$(), intr);
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
