(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.Bits','java.nio.ByteOrder','java.nio.DirectByteBuffer','java.nio.HeapByteBuffer','StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ByteBuffer", null, 'java.nio.Buffer', 'Comparable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.hb=null;
this.offset=0;
this.isReadOnly=false;
this.bigEndian=false;
this.nativeByteOrder=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.bigEndian=true;
this.nativeByteOrder=($I$(1).byteOrder$() === $I$(2).BIG_ENDIAN );
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$BA$I', function (mark, pos, lim, cap, hb, offset) {
C$.superclazz.c$$I$I$I$I.apply(this, [mark, pos, lim, cap]);
C$.$init$.apply(this);
this.hb=hb;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I', function (mark, pos, lim, cap) {
C$.c$$I$I$I$I$BA$I.apply(this, [mark, pos, lim, cap, null, 0]);
}, 1);

Clazz.newMeth(C$, 'allocateDirect$I', function (capacity) {
return Clazz.new_($I$(3).c$$I,[capacity]);
}, 1);

Clazz.newMeth(C$, 'allocate$I', function (capacity) {
if (capacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return Clazz.new_($I$(4).c$$I$I,[capacity, capacity]);
}, 1);

Clazz.newMeth(C$, 'wrap$BA$I$I', function (array, offset, length) {
try {
return Clazz.new_($I$(4).c$$BA$I$I,[array, offset, length]);
} catch (x) {
if (Clazz.exceptionOf(x,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'wrap$BA', function (array) {
return C$.wrap$BA$I$I(array, 0, array.length);
}, 1);

Clazz.newMeth(C$, 'get$BA$I$I', function (dst, offset, length) {
P$.Buffer.checkBounds$I$I$I(offset, length, dst.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
var end=offset + length;
for (var i=offset; i < end; i++) dst[i]=(this.get$()|0);

return this;
});

Clazz.newMeth(C$, 'get$BA', function (dst) {
return this.get$BA$I$I(dst, 0, dst.length);
});

Clazz.newMeth(C$, 'put$java_nio_ByteBuffer', function (src) {
if (src === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (this.isReadOnly$()) throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
var n=src.remaining$();
if (n > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
for (var i=0; i < n; i++) this.put$B(($b$[0] = src.get$(), $b$[0]));

return this;
});

Clazz.newMeth(C$, 'put$BA$I$I', function (src, offset, length) {
P$.Buffer.checkBounds$I$I$I(offset, length, src.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
var end=offset + length;
for (var i=offset; i < end; i++) this.put$B(($b$[0] = src[i], $b$[0]));

return this;
});

Clazz.newMeth(C$, 'put$BA', function (src) {
return this.put$BA$I$I(src, 0, src.length);
});

Clazz.newMeth(C$, 'hasArray$', function () {
return (this.hb != null ) && !this.isReadOnly ;
});

Clazz.newMeth(C$, 'array$', function () {
if (this.hb == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
if (this.isReadOnly) throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
return this.hb;
});

Clazz.newMeth(C$, 'arrayOffset$', function () {
if (this.hb == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
if (this.isReadOnly) throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
return this.offset;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(5));
sb.append$S(this.getClass$().getName$());
sb.append$S("[pos=");
sb.append$I(this.position$());
sb.append$S(" lim=");
sb.append$I(this.limit$());
sb.append$S(" cap=");
sb.append$I(this.capacity$());
sb.append$S("]");
return sb.toString();
});

Clazz.newMeth(C$, 'hashCode$', function () {
var h=1;
var p=this.position$();
for (var i=this.limit$() - 1; i >= p; i--) h=31 * h + this.get$I(i);

return h;
});

Clazz.newMeth(C$, 'equals$O', function (ob) {
if (this === ob ) return true;
if (!(Clazz.instanceOf(ob, "java.nio.ByteBuffer"))) return false;
var that=ob;
if (this.remaining$() != that.remaining$()) return false;
var p=this.position$();
for (var i=this.limit$() - 1, j=that.limit$() - 1; i >= p; i--, j--) if (!C$.equals$B$B(($b$[0] = this.get$I(i), $b$[0]), ($b$[0] = that.get$I(j), $b$[0]))) return false;

return true;
});

Clazz.newMeth(C$, 'equals$B$B', function (x, y) {
return x == y;
}, 1);

Clazz.newMeth(C$, ['compareTo$java_nio_ByteBuffer','compareTo$','compareTo$TT'], function (that) {
var n=this.position$() + Math.min(this.remaining$(), that.remaining$());
for (var i=this.position$(), j=that.position$(); i < n; i++, j++) {
var cmp=C$.compare$B$B(($b$[0] = this.get$I(i), $b$[0]), ($b$[0] = that.get$I(j), $b$[0]));
if (cmp != 0) return cmp;
}
return this.remaining$() - that.remaining$();
});

Clazz.newMeth(C$, 'compare$B$B', function (x, y) {
return Byte.compare$B$B(($b$[0] = x, $b$[0]), ($b$[0] = y, $b$[0]));
}, 1);

Clazz.newMeth(C$, 'order$', function () {
return this.bigEndian ? $I$(2).BIG_ENDIAN : $I$(2).LITTLE_ENDIAN;
});

Clazz.newMeth(C$, 'order$java_nio_ByteOrder', function (bo) {
this.bigEndian=(bo === $I$(2).BIG_ENDIAN );
this.nativeByteOrder=(this.bigEndian == ($I$(1).byteOrder$() === $I$(2).BIG_ENDIAN ) );
return this;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:38 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
