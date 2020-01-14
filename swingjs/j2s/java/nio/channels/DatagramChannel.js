(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.channels.spi.SelectorProvider']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DatagramChannel", null, 'java.nio.channels.spi.AbstractSelectableChannel', ['java.nio.channels.ByteChannel', 'java.nio.channels.ScatteringByteChannel', 'java.nio.channels.GatheringByteChannel', 'java.nio.channels.MulticastChannel']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider', function (provider) {
C$.superclazz.c$$java_nio_channels_spi_SelectorProvider.apply(this, [provider]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'open$', function () {
return $I$(1).provider$().openDatagramChannel$();
}, 1);

Clazz.newMeth(C$, 'open$java_net_ProtocolFamily', function (family) {
return $I$(1).provider$().openDatagramChannel$java_net_ProtocolFamily(family);
}, 1);

Clazz.newMeth(C$, 'validOps$', function () {
return (5);
});

Clazz.newMeth(C$, 'read$java_nio_ByteBufferA', function (dsts) {
return this.read$java_nio_ByteBufferA$I$I(dsts, 0, dsts.length);
});

Clazz.newMeth(C$, 'write$java_nio_ByteBufferA', function (srcs) {
return this.write$java_nio_ByteBufferA$I$I(srcs, 0, srcs.length);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
