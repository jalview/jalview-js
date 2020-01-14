(function(){var P$=java.io,I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OutputStream", null, null, ['java.io.Closeable', 'java.io.Flushable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'close$', function () {
});

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'write$BA', function (buffer) {
this.write$BA$I$I(buffer, 0, buffer.length);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (buffer, offset, count) {
if (offset <= buffer.length && 0 <= offset  && 0 <= count  && count <= buffer.length - offset ) {
for (var i=offset; i < offset + count; i++) this.write$I(buffer[i]);

} else throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[$I$(1).getString$S("K002f")]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
