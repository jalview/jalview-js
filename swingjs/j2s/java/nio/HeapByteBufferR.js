(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.ByteBufferAsCharBufferRB','java.nio.ByteBufferAsCharBufferRL','java.nio.ByteBufferAsShortBufferRB','java.nio.ByteBufferAsShortBufferRL','java.nio.ByteBufferAsIntBufferRB','java.nio.ByteBufferAsIntBufferRL','java.nio.ByteBufferAsLongBufferRB','java.nio.ByteBufferAsLongBufferRL','java.nio.ByteBufferAsFloatBufferRB','java.nio.ByteBufferAsFloatBufferRL','java.nio.ByteBufferAsDoubleBufferRB','java.nio.ByteBufferAsDoubleBufferRL']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HeapByteBufferR", null, 'java.nio.HeapByteBuffer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (paramInt1, paramInt2) {
C$.superclazz.c$$I$I.apply(this, [paramInt1, paramInt2]);
C$.$init$.apply(this);
this.isReadOnly=true;
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I', function (paramArrayOfByte, paramInt1, paramInt2) {
C$.superclazz.c$$BA$I$I.apply(this, [paramArrayOfByte, paramInt1, paramInt2]);
C$.$init$.apply(this);
this.isReadOnly=true;
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$I$I$I', function (paramArrayOfByte, paramInt1, paramInt2, paramInt3, paramInt4, paramInt5) {
C$.superclazz.c$$BA$I$I$I$I$I.apply(this, [paramArrayOfByte, paramInt1, paramInt2, paramInt3, paramInt4, paramInt5]);
C$.$init$.apply(this);
this.isReadOnly=true;
}, 1);

Clazz.newMeth(C$, 'slice$', function () {
return Clazz.new_(C$.c$$BA$I$I$I$I$I,[this.hb, -1, 0, this.remaining$(), this.remaining$(), this.position$() + this.offset]);
});

Clazz.newMeth(C$, 'duplicate$', function () {
return Clazz.new_(C$.c$$BA$I$I$I$I$I,[this.hb, this.markValue$(), this.position$(), this.limit$(), this.capacity$(), this.offset]);
});

Clazz.newMeth(C$, 'asReadOnlyBuffer$', function () {
return this.duplicate$();
});

Clazz.newMeth(C$, 'isReadOnly$', function () {
return true;
});

Clazz.newMeth(C$, 'put$B', function (paramByte) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'put$I$B', function (paramInt, paramByte) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'put$BA$I$I', function (paramArrayOfByte, paramInt1, paramInt2) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'put$java_nio_ByteBuffer', function (paramByteBuffer) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'compact$', function () {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, '_get$I', function (paramInt) {
return $b$[0] = this.hb[paramInt], $b$[0];
});

Clazz.newMeth(C$, '_put$I$B', function (paramInt, paramByte) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'putChar$C', function (paramChar) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'putChar$I$C', function (paramInt, paramChar) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'asCharBuffer$', function () {
var i=this.remaining$() >> 1;
var j=this.offset + this.position$();
return this.bigEndian ? Clazz.new_($I$(1).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]) : Clazz.new_($I$(2).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]);
});

Clazz.newMeth(C$, 'putShort$H', function (paramShort) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'putShort$I$H', function (paramInt, paramShort) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'asShortBuffer$', function () {
var i=this.remaining$() >> 1;
var j=this.offset + this.position$();
return this.bigEndian ? Clazz.new_($I$(3).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]) : Clazz.new_($I$(4).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]);
});

Clazz.newMeth(C$, 'putInt$I', function (paramInt) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'putInt$I$I', function (paramInt1, paramInt2) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'asIntBuffer$', function () {
var i=this.remaining$() >> 2;
var j=this.offset + this.position$();
return this.bigEndian ? Clazz.new_($I$(5).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]) : Clazz.new_($I$(6).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]);
});

Clazz.newMeth(C$, 'putLong$J', function (paramLong) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'putLong$I$J', function (paramInt, paramLong) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'asLongBuffer$', function () {
var i=this.remaining$() >> 3;
var j=this.offset + this.position$();
return this.bigEndian ? Clazz.new_($I$(7).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]) : Clazz.new_($I$(8).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]);
});

Clazz.newMeth(C$, 'putFloat$F', function (paramFloat) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'putFloat$I$F', function (paramInt, paramFloat) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'asFloatBuffer$', function () {
var i=this.remaining$() >> 2;
var j=this.offset + this.position$();
return this.bigEndian ? Clazz.new_($I$(9).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]) : Clazz.new_($I$(10).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]);
});

Clazz.newMeth(C$, 'putDouble$D', function (paramDouble) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'putDouble$I$D', function (paramInt, paramDouble) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'asDoubleBuffer$', function () {
var i=this.remaining$() >> 3;
var j=this.offset + this.position$();
return this.bigEndian ? Clazz.new_($I$(11).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]) : Clazz.new_($I$(12).c$$java_nio_ByteBuffer$I$I$I$I$I,[this, -1, 0, i, i, j]);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
