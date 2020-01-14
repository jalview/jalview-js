(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.channels.spi.SelectorProvider']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ServerSocketChannel", null, 'java.nio.channels.spi.AbstractSelectableChannel', 'java.nio.channels.NetworkChannel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider', function (provider) {
C$.superclazz.c$$java_nio_channels_spi_SelectorProvider.apply(this, [provider]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'open$', function () {
return $I$(1).provider$().openServerSocketChannel$();
}, 1);

Clazz.newMeth(C$, 'validOps$', function () {
return 16;
});

Clazz.newMeth(C$, 'bind$java_net_SocketAddress', function (local) {
return this.bind$java_net_SocketAddress$I(local, 0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
