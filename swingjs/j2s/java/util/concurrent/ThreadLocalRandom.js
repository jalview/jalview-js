(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.ThreadLocalRandom','java.util.concurrent.atomic.AtomicInteger','java.util.concurrent.atomic.AtomicLong','java.io.ObjectStreamField','sun.misc.Unsafe','Thread','Error','java.security.AccessController','sun.security.action.GetPropertyAction','java.security.SecureRandom','StrictMath','java.util.stream.StreamSupport',['java.util.concurrent.ThreadLocalRandom','.RandomIntsSpliterator'],['java.util.concurrent.ThreadLocalRandom','.RandomLongsSpliterator'],['java.util.concurrent.ThreadLocalRandom','.RandomDoublesSpliterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ThreadLocalRandom", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.Random');
C$.probeGenerator=null;
C$.seeder=null;
C$.nextLocalGaussian=null;
C$.instance=null;
C$.serialPersistentFields=null;
C$.UNSAFE=null;
C$.SEED=0;
C$.PROBE=0;
C$.SECONDARY=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.probeGenerator=Clazz.new_($I$(2));
C$.seeder=Clazz.new_($I$(3).c$$J,[C$.initialSeed$()]);
C$.instance=Clazz.new_(C$);
C$.serialPersistentFields=Clazz.array($I$(4), -1, [Clazz.new_($I$(4).c$$S$Class,["rnd", Long.TYPE]), Clazz.new_($I$(4).c$$S$Class,["initialized", Boolean.TYPE])]);
C$.SEED=0;
C$.PROBE=0;
C$.SECONDARY=0;
{
try {
C$.UNSAFE=$I$(5).getUnsafe$();
var tk=Clazz.getClass($I$(6));
C$.SEED=C$.UNSAFE.objectFieldOffset$reflect_Field(tk.getDeclaredField$S("threadLocalRandomSeed"));
C$.PROBE=C$.UNSAFE.objectFieldOffset$reflect_Field(tk.getDeclaredField$S("threadLocalRandomProbe"));
C$.SECONDARY=C$.UNSAFE.objectFieldOffset$reflect_Field(tk.getDeclaredField$S("threadLocalRandomSecondarySeed"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(7).c$$Throwable,[e]);
} else {
throw e;
}
}
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.initialized=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initialSeed$', function () {
var pp=$I$(8).doPrivileged$java_security_PrivilegedAction(Clazz.new_($I$(9).c$$S,["java.util.secureRandomSeed"]));
if (pp != null  && pp.equalsIgnoreCase$S("true") ) {
var seedBytes=$I$(10).getSeed$I(8);
var s=(seedBytes[0]) & 255;
for (var i=1; i < 8; ++i) s=(s << 8) | ((seedBytes[i]) & 255);

return s;
}return (C$.mix64$J(System.currentTimeMillis$()) ^ C$.mix64$J(System.nanoTime$()));
}, 1);

Clazz.newMeth(C$, 'mix64$J', function (z) {
return C$.mix32$J(z);
}, 1);

Clazz.newMeth(C$, 'mix32$J', function (z) {
z=(z ^ (z >>> 33)) * -49064778989728563;
return ((((z ^ (z >>> 33)) * -4265267296055464877) >>> 32)|0);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.initialized=true;
}, 1);

Clazz.newMeth(C$, 'localInit$', function () {
var p=C$.probeGenerator.addAndGet$I(-1640531527);
var probe=(p == 0) ? 1 : p;
var seed=C$.mix64$J(C$.seeder.getAndAdd$J(-4942790177534073029));
var t=$I$(6).currentThread$();
C$.UNSAFE.putLong$O$J$J(t, C$.SEED, seed);
C$.UNSAFE.putInt$O$J$I(t, C$.PROBE, probe);
}, 1);

Clazz.newMeth(C$, 'current$', function () {
if (C$.UNSAFE.getInt$O$J($I$(6).currentThread$(), C$.PROBE) == 0) C$.localInit$();
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'setSeed$J', function (seed) {
if (this.initialized) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'nextSeed$', function () {
var t;
var r;
C$.UNSAFE.putLong$O$J$J(t=$I$(6).currentThread$(), C$.SEED, r=C$.UNSAFE.getLong$O$J(t, C$.SEED) + -7046029254386353131);
return r;
});

Clazz.newMeth(C$, 'next$I', function (bits) {
return ((C$.mix64$J(this.nextSeed$()) >>> (64 - bits))|0);
});

Clazz.newMeth(C$, 'internalNextLong$J$J', function (origin, bound) {
var r=C$.mix64$J(this.nextSeed$());
if (origin < bound) {
var n=bound - origin;
var m=n - 1;
if ((n & m) == 0) r=(r & m) + origin;
 else if (n > 0) {
for (var u=r >>> 1; u + m - (r=u % n) < 0; u=C$.mix64$J(this.nextSeed$()) >>> 1) ;
r+=origin;
} else {
while (r < origin || r >= bound )r=C$.mix64$J(this.nextSeed$());

}}return r;
});

Clazz.newMeth(C$, 'internalNextInt$I$I', function (origin, bound) {
var r=C$.mix32$J(this.nextSeed$());
if (origin < bound) {
var n=bound - origin;
var m=n - 1;
if ((n & m) == 0) r=(r & m) + origin;
 else if (n > 0) {
for (var u=r >>> 1; u + m - (r=u % n) < 0; u=C$.mix32$J(this.nextSeed$()) >>> 1) ;
r+=origin;
} else {
while (r < origin || r >= bound )r=C$.mix32$J(this.nextSeed$());

}}return r;
});

Clazz.newMeth(C$, 'internalNextDouble$D$D', function (origin, bound) {
var r=(this.nextLong$() >>> 11) * 1.1102230246251565E-16;
if (origin < bound ) {
r=r * (bound - origin) + origin;
if (r >= bound ) r=Double.longBitsToDouble$J(Double.doubleToLongBits$D(bound) - 1);
}return r;
});

Clazz.newMeth(C$, 'nextInt$', function () {
return C$.mix32$J(this.nextSeed$());
});

Clazz.newMeth(C$, 'nextInt$I', function (bound) {
if (bound <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var r=C$.mix32$J(this.nextSeed$());
var m=bound - 1;
if ((bound & m) == 0) r&=m;
 else {
for (var u=r >>> 1; u + m - (r=u % bound) < 0; u=C$.mix32$J(this.nextSeed$()) >>> 1) ;
}return r;
});

Clazz.newMeth(C$, 'nextInt$I$I', function (origin, bound) {
if (origin >= bound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextInt$I$I(origin, bound);
});

Clazz.newMeth(C$, 'nextLong$', function () {
return C$.mix64$J(this.nextSeed$());
});

Clazz.newMeth(C$, 'nextLong$J', function (bound) {
if (bound <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var r=C$.mix64$J(this.nextSeed$());
var m=bound - 1;
if ((bound & m) == 0) r&=m;
 else {
for (var u=r >>> 1; u + m - (r=u % bound) < 0; u=C$.mix64$J(this.nextSeed$()) >>> 1) ;
}return r;
});

Clazz.newMeth(C$, 'nextLong$J$J', function (origin, bound) {
if (origin >= bound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextLong$J$J(origin, bound);
});

Clazz.newMeth(C$, 'nextDouble$', function () {
return (C$.mix64$J(this.nextSeed$()) >>> 11) * 1.1102230246251565E-16;
});

Clazz.newMeth(C$, 'nextDouble$D', function (bound) {
if (!(bound > 0.0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var result=(C$.mix64$J(this.nextSeed$()) >>> 11) * 1.1102230246251565E-16 * bound ;
return (result < bound ) ? result : Double.longBitsToDouble$J(Double.doubleToLongBits$D(bound) - 1);
});

Clazz.newMeth(C$, 'nextDouble$D$D', function (origin, bound) {
if (!(origin < bound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextDouble$D$D(origin, bound);
});

Clazz.newMeth(C$, 'nextBoolean$', function () {
return C$.mix32$J(this.nextSeed$()) < 0;
});

Clazz.newMeth(C$, 'nextFloat$', function () {
return (C$.mix32$J(this.nextSeed$()) >>> 8) * 5.9604645E-8;
});

Clazz.newMeth(C$, 'nextGaussian$', function () {
var d=C$.nextLocalGaussian;
if (d != null ) {
C$.nextLocalGaussian=(null);
return d.doubleValue$();
}var v1;
var v2;
var s;
do {
v1=2 * this.nextDouble$() - 1;
v2=2 * this.nextDouble$() - 1;
s=v1 * v1 + v2 * v2;
} while (s >= 1  || s == 0  );
var multiplier=$I$(11).sqrt$D(-2 * $I$(11).log$D(s) / s);
C$.nextLocalGaussian=( new Double(v2 * multiplier));
return v1 * multiplier;
});

Clazz.newMeth(C$, 'ints$J', function (streamSize) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(12).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(13).c$$J$J$I$I,[0, streamSize, 2147483647, 0]), false);
});

Clazz.newMeth(C$, 'ints$', function () {
return $I$(12).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(13).c$$J$J$I$I,[0, 9223372036854775807, 2147483647, 0]), false);
});

Clazz.newMeth(C$, 'ints$J$I$I', function (streamSize, randomNumberOrigin, randomNumberBound) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(12).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(13).c$$J$J$I$I,[0, streamSize, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'ints$I$I', function (randomNumberOrigin, randomNumberBound) {
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(12).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(13).c$$J$J$I$I,[0, 9223372036854775807, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'longs$J', function (streamSize) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(12).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(14).c$$J$J$J$J,[0, streamSize, 9223372036854775807, 0]), false);
});

Clazz.newMeth(C$, 'longs$', function () {
return $I$(12).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(14).c$$J$J$J$J,[0, 9223372036854775807, 9223372036854775807, 0]), false);
});

Clazz.newMeth(C$, 'longs$J$J$J', function (streamSize, randomNumberOrigin, randomNumberBound) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(12).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(14).c$$J$J$J$J,[0, streamSize, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'longs$J$J', function (randomNumberOrigin, randomNumberBound) {
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(12).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(14).c$$J$J$J$J,[0, 9223372036854775807, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'doubles$J', function (streamSize) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(12).doubleStream$java_util_Spliterator_OfDouble$Z(Clazz.new_($I$(15).c$$J$J$D$D,[0, streamSize, 1.7976931348623157E308, 0.0]), false);
});

Clazz.newMeth(C$, 'doubles$', function () {
return $I$(12).doubleStream$java_util_Spliterator_OfDouble$Z(Clazz.new_($I$(15).c$$J$J$D$D,[0, 9223372036854775807, 1.7976931348623157E308, 0.0]), false);
});

Clazz.newMeth(C$, 'doubles$J$D$D', function (streamSize, randomNumberOrigin, randomNumberBound) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (!(randomNumberOrigin < randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(12).doubleStream$java_util_Spliterator_OfDouble$Z(Clazz.new_($I$(15).c$$J$J$D$D,[0, streamSize, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'doubles$D$D', function (randomNumberOrigin, randomNumberBound) {
if (!(randomNumberOrigin < randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(12).doubleStream$java_util_Spliterator_OfDouble$Z(Clazz.new_($I$(15).c$$J$J$D$D,[0, 9223372036854775807, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'getProbe$', function () {
return C$.UNSAFE.getInt$O$J($I$(6).currentThread$(), C$.PROBE);
}, 1);

Clazz.newMeth(C$, 'advanceProbe$I', function (probe) {
probe^=probe << 13;
probe^=probe >>> 17;
probe^=probe << 5;
C$.UNSAFE.putInt$O$J$I($I$(6).currentThread$(), C$.PROBE, probe);
return probe;
}, 1);

Clazz.newMeth(C$, 'nextSecondarySeed$', function () {
var r;
var t=$I$(6).currentThread$();
if ((r=C$.UNSAFE.getInt$O$J(t, C$.SECONDARY)) != 0) {
r^=r << 13;
r^=r >>> 17;
r^=r << 5;
} else {
C$.localInit$();
if ((r=(C$.UNSAFE.getLong$O$J(t, C$.SEED)|0)) == 0) r=1;
}C$.UNSAFE.putInt$O$J$I(t, C$.SECONDARY, r);
return r;
}, 1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
var fields=s.putFields$();
fields.put$S$J("rnd", C$.UNSAFE.getLong$O$J($I$(6).currentThread$(), C$.SEED));
fields.put$S$Z("initialized", true);
s.writeFields$();
}, p$1);

Clazz.newMeth(C$, 'readResolve', function () {
return C$.current$();
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.ThreadLocalRandom, "RandomIntsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
this.fence=0;
this.origin=0;
this.bound=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$J$I$I', function (index, fence, origin, bound) {
C$.$init$.apply(this);
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var i=this.index;
var m=(i + this.fence) >>> 1;
return (m <= i) ? null : Clazz.new_(C$.c$$J$J$I$I,[i, this.index=m, this.origin, this.bound]);
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.fence - this.index;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return (17728);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$TT_CONS'], function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (i < f) {
consumer.accept$($I$(1).current$().internalNextInt$I$I(this.origin, this.bound));
this.index=i + 1;
return true;
}return false;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TT_CONS'], function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (i < f) {
this.index=f;
var o=this.origin;
var b=this.bound;
var rng=$I$(1).current$();
do {
consumer.accept$(rng.internalNextInt$I$I(o, b));
} while (++i < f);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ThreadLocalRandom, "RandomLongsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
this.fence=0;
this.origin=0;
this.bound=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$J$J$J', function (index, fence, origin, bound) {
C$.$init$.apply(this);
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var i=this.index;
var m=(i + this.fence) >>> 1;
return (m <= i) ? null : Clazz.new_(C$.c$$J$J$J$J,[i, this.index=m, this.origin, this.bound]);
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.fence - this.index;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return (17728);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_LongConsumer','tryAdvance$TT_CONS'], function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (i < f) {
consumer.accept$($I$(1).current$().internalNextLong$J$J(this.origin, this.bound));
this.index=i + 1;
return true;
}return false;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$TT_CONS'], function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (i < f) {
this.index=f;
var o=this.origin;
var b=this.bound;
var rng=$I$(1).current$();
do {
consumer.accept$(rng.internalNextLong$J$J(o, b));
} while (++i < f);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ThreadLocalRandom, "RandomDoublesSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.index=0;
this.fence=0;
this.origin=0;
this.bound=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$J$D$D', function (index, fence, origin, bound) {
C$.$init$.apply(this);
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var i=this.index;
var m=(i + this.fence) >>> 1;
return (m <= i) ? null : Clazz.new_(C$.c$$J$J$D$D,[i, this.index=m, this.origin, this.bound]);
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.fence - this.index;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return (17728);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_DoubleConsumer','tryAdvance$TT_CONS'], function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (i < f) {
consumer.accept$($I$(1).current$().internalNextDouble$D$D(this.origin, this.bound));
this.index=i + 1;
return true;
}return false;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$TT_CONS'], function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (i < f) {
this.index=f;
var o=this.origin;
var b=this.bound;
var rng=$I$(1).current$();
do {
consumer.accept$(rng.internalNextDouble$D$D(o, b));
} while (++i < f);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
