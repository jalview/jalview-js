(function(){var P$=Clazz.newPackage("java.nio.channels.spi"),I$=[[0,'java.util.concurrent.atomic.AtomicBoolean','java.util.HashSet','java.nio.channels.spi.AbstractInterruptibleChannel','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractSelector", null, 'java.nio.channels.Selector');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.selectorOpen=null;
this.provider=null;
this.cancelledKeys=null;
this.interruptor=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.selectorOpen=Clazz.new_($I$(1).c$$Z,[true]);
this.cancelledKeys=Clazz.new_($I$(2));
this.interruptor=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider', function (provider) {
Clazz.super_(C$, this,1);
this.provider=provider;
}, 1);

Clazz.newMeth(C$, 'cancel$java_nio_channels_SelectionKey', function (k) {
{
this.cancelledKeys.add$TE(k);
}});

Clazz.newMeth(C$, 'close$', function () {
var open=this.selectorOpen.getAndSet$Z(false);
if (!open) return;
this.implCloseSelector$();
});

Clazz.newMeth(C$, 'isOpen$', function () {
return this.selectorOpen.get$();
});

Clazz.newMeth(C$, 'provider$', function () {
return this.provider;
});

Clazz.newMeth(C$, 'cancelledKeys$', function () {
return this.cancelledKeys;
});

Clazz.newMeth(C$, 'deregister$java_nio_channels_spi_AbstractSelectionKey', function (key) {
(key.channel$()).removeKey$java_nio_channels_SelectionKey(key);
});

Clazz.newMeth(C$, 'begin$', function () {
if (this.interruptor == null ) {
this.interruptor=((P$.AbstractSelector$1||
(function(){var C$=Clazz.newClass(P$, "AbstractSelector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'sun.nio.ch.Interruptible', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['interrupt$Thread','interrupt$'], function (ignore) {
this.b$['java.nio.channels.spi.AbstractSelector'].wakeup$.apply(this.b$['java.nio.channels.spi.AbstractSelector'], []);
});
})()
), Clazz.new_(P$.AbstractSelector$1.$init$, [this, null]));
}$I$(3).blockedOn$sun_nio_ch_Interruptible(this.interruptor);
var me=$I$(4).currentThread$();
if (me.isInterrupted$()) this.interruptor.interrupt$(me);
});

Clazz.newMeth(C$, 'end$', function () {
$I$(3).blockedOn$sun_nio_ch_Interruptible(null);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
