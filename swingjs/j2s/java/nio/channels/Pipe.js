(function(){var P$=Clazz.newPackage("java.nio.channels"),I$=[[0,'java.nio.channels.spi.SelectorProvider']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Pipe", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'open$', function () {
return $I$(1).provider$().openPipe$();
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Pipe, "SourceChannel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.channels.spi.AbstractSelectableChannel', ['java.nio.channels.ReadableByteChannel', 'java.nio.channels.ScatteringByteChannel']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider', function (provider) {
C$.superclazz.c$$java_nio_channels_spi_SelectorProvider.apply(this, [provider]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'validOps$', function () {
return 1;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Pipe, "SinkChannel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.nio.channels.spi.AbstractSelectableChannel', ['java.nio.channels.WritableByteChannel', 'java.nio.channels.GatheringByteChannel']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_channels_spi_SelectorProvider', function (provider) {
C$.superclazz.c$$java_nio_channels_spi_SelectorProvider.apply(this, [provider]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'validOps$', function () {
return 4;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
