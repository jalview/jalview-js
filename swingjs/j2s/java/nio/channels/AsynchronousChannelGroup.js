(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.channels.spi.AsynchronousChannelProvider']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AsynchronousChannelGroup");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.provider=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_AsynchronousChannelProvider', function (provider) {
C$.$init$.apply(this);
this.provider=provider;
}, 1);

Clazz.newMeth(C$, 'provider$', function () {
return this.provider;
});

Clazz.newMeth(C$, 'withFixedThreadPool$I$java_util_concurrent_ThreadFactory', function (nThreads, threadFactory) {
return $I$(1).provider$().openAsynchronousChannelGroup$I$java_util_concurrent_ThreadFactory(nThreads, threadFactory);
}, 1);

Clazz.newMeth(C$, 'withCachedThreadPool$java_util_concurrent_ExecutorService$I', function (executor, initialSize) {
return $I$(1).provider$().openAsynchronousChannelGroup$java_util_concurrent_ExecutorService$I(executor, initialSize);
}, 1);

Clazz.newMeth(C$, 'withThreadPool$java_util_concurrent_ExecutorService', function (executor) {
return $I$(1).provider$().openAsynchronousChannelGroup$java_util_concurrent_ExecutorService$I(executor, 0);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
