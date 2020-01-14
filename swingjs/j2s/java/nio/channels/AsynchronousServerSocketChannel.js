(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.channels.spi.AsynchronousChannelProvider']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AsynchronousServerSocketChannel", null, null, ['java.nio.channels.AsynchronousChannel', 'java.nio.channels.NetworkChannel']);

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

Clazz.newMeth(C$, 'open$java_nio_channels_AsynchronousChannelGroup', function (group) {
var provider=(group == null ) ? $I$(1).provider$() : group.provider$();
return provider.openAsynchronousServerSocketChannel$java_nio_channels_AsynchronousChannelGroup(group);
}, 1);

Clazz.newMeth(C$, 'open$', function () {
return C$.open$java_nio_channels_AsynchronousChannelGroup(null);
}, 1);

Clazz.newMeth(C$, 'bind$java_net_SocketAddress', function (local) {
return this.bind$java_net_SocketAddress$I(local, 0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
