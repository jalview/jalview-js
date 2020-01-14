(function(){var P$=java.util,p$1={},I$=[[0,'java.util.concurrent.atomic.AtomicLong','java.util.stream.StreamSupport',['java.util.SplittableRandom','.RandomIntsSpliterator'],['java.util.SplittableRandom','.RandomLongsSpliterator'],['java.util.SplittableRandom','.RandomDoublesSpliterator']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SplittableRandom", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.defaultGen=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.defaultGen=Clazz.new_($I$(1).c$$J,[C$.initialSeed$()]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.seed=0;
this.gamma=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$J', function (seed, gamma) {
C$.$init$.apply(this);
this.seed=seed;
this.gamma=gamma;
}, 1);

Clazz.newMeth(C$, 'mix64$J', function (z) {
z=(z ^ (z >>> 30)) * -4658895280553007687;
z=(z ^ (z >>> 27)) * -7723592293110705685;
return z ^ (z >>> 31);
}, 1);

Clazz.newMeth(C$, 'mix32$J', function (z) {
z=(z ^ (z >>> 33)) * 7109453100751455733;
return ((((z ^ (z >>> 28)) * -3808689974395783757) >>> 32)|0);
}, 1);

Clazz.newMeth(C$, 'mixGamma$J', function (z) {
z=(z ^ (z >>> 33)) * -49064778989728563;
z=(z ^ (z >>> 33)) * -4265267296055464877;
z=(z ^ (z >>> 33)) | 1;
var n=Long.bitCount$J(z ^ (z >>> 1));
return (n < 24) ? z ^ -6148914691236517206 : z;
}, 1);

Clazz.newMeth(C$, 'nextSeed', function () {
return this.seed+=this.gamma;
}, p$1);

Clazz.newMeth(C$, 'initialSeed$', function () {
return (C$.mix64$J(System.currentTimeMillis$()) ^ C$.mix64$J(System.nanoTime$()));
}, 1);

Clazz.newMeth(C$, 'internalNextLong$J$J', function (origin, bound) {
var r=C$.mix64$J(p$1.nextSeed.apply(this, []));
if (origin < bound) {
var n=bound - origin;
var m=n - 1;
if ((n & m) == 0) r=(r & m) + origin;
 else if (n > 0) {
for (var u=r >>> 1; u + m - (r=u % n) < 0; u=C$.mix64$J(p$1.nextSeed.apply(this, [])) >>> 1) ;
r+=origin;
} else {
while (r < origin || r >= bound )r=C$.mix64$J(p$1.nextSeed.apply(this, []));

}}return r;
});

Clazz.newMeth(C$, 'internalNextInt$I$I', function (origin, bound) {
var r=C$.mix32$J(p$1.nextSeed.apply(this, []));
if (origin < bound) {
var n=bound - origin;
var m=n - 1;
if ((n & m) == 0) r=(r & m) + origin;
 else if (n > 0) {
for (var u=r >>> 1; u + m - (r=u % n) < 0; u=C$.mix32$J(p$1.nextSeed.apply(this, [])) >>> 1) ;
r+=origin;
} else {
while (r < origin || r >= bound )r=C$.mix32$J(p$1.nextSeed.apply(this, []));

}}return r;
});

Clazz.newMeth(C$, 'internalNextDouble$D$D', function (origin, bound) {
var r=(this.nextLong$() >>> 11) * 1.1102230246251565E-16;
if (origin < bound ) {
r=r * (bound - origin) + origin;
if (r >= bound ) r=Double.longBitsToDouble$J(Double.doubleToLongBits$D(bound) - 1);
}return r;
});

Clazz.newMeth(C$, 'c$$J', function (seed) {
C$.c$$J$J.apply(this, [seed, -7046029254386353131]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
var s=C$.defaultGen.getAndAdd$J(4354685564936845354);
this.seed=C$.mix64$J(s);
this.gamma=C$.mixGamma$J(s + -7046029254386353131);
}, 1);

Clazz.newMeth(C$, 'split$', function () {
return Clazz.new_(C$.c$$J$J,[this.nextLong$(), C$.mixGamma$J(p$1.nextSeed.apply(this, []))]);
});

Clazz.newMeth(C$, 'nextInt$', function () {
return C$.mix32$J(p$1.nextSeed.apply(this, []));
});

Clazz.newMeth(C$, 'nextInt$I', function (bound) {
if (bound <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var r=C$.mix32$J(p$1.nextSeed.apply(this, []));
var m=bound - 1;
if ((bound & m) == 0) r&=m;
 else {
for (var u=r >>> 1; u + m - (r=u % bound) < 0; u=C$.mix32$J(p$1.nextSeed.apply(this, [])) >>> 1) ;
}return r;
});

Clazz.newMeth(C$, 'nextInt$I$I', function (origin, bound) {
if (origin >= bound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextInt$I$I(origin, bound);
});

Clazz.newMeth(C$, 'nextLong$', function () {
return C$.mix64$J(p$1.nextSeed.apply(this, []));
});

Clazz.newMeth(C$, 'nextLong$J', function (bound) {
if (bound <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var r=C$.mix64$J(p$1.nextSeed.apply(this, []));
var m=bound - 1;
if ((bound & m) == 0) r&=m;
 else {
for (var u=r >>> 1; u + m - (r=u % bound) < 0; u=C$.mix64$J(p$1.nextSeed.apply(this, [])) >>> 1) ;
}return r;
});

Clazz.newMeth(C$, 'nextLong$J$J', function (origin, bound) {
if (origin >= bound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextLong$J$J(origin, bound);
});

Clazz.newMeth(C$, 'nextDouble$', function () {
return (C$.mix64$J(p$1.nextSeed.apply(this, [])) >>> 11) * 1.1102230246251565E-16;
});

Clazz.newMeth(C$, 'nextDouble$D', function (bound) {
if (!(bound > 0.0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var result=(C$.mix64$J(p$1.nextSeed.apply(this, [])) >>> 11) * 1.1102230246251565E-16 * bound ;
return (result < bound ) ? result : Double.longBitsToDouble$J(Double.doubleToLongBits$D(bound) - 1);
});

Clazz.newMeth(C$, 'nextDouble$D$D', function (origin, bound) {
if (!(origin < bound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextDouble$D$D(origin, bound);
});

Clazz.newMeth(C$, 'nextBoolean$', function () {
return C$.mix32$J(p$1.nextSeed.apply(this, [])) < 0;
});

Clazz.newMeth(C$, 'ints$J', function (streamSize) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(2).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(3).c$$java_util_SplittableRandom$J$J$I$I,[this, 0, streamSize, 2147483647, 0]), false);
});

Clazz.newMeth(C$, 'ints$', function () {
return $I$(2).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(3).c$$java_util_SplittableRandom$J$J$I$I,[this, 0, 9223372036854775807, 2147483647, 0]), false);
});

Clazz.newMeth(C$, 'ints$J$I$I', function (streamSize, randomNumberOrigin, randomNumberBound) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(3).c$$java_util_SplittableRandom$J$J$I$I,[this, 0, streamSize, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'ints$I$I', function (randomNumberOrigin, randomNumberBound) {
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(3).c$$java_util_SplittableRandom$J$J$I$I,[this, 0, 9223372036854775807, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'longs$J', function (streamSize) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(2).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(4).c$$java_util_SplittableRandom$J$J$J$J,[this, 0, streamSize, 9223372036854775807, 0]), false);
});

Clazz.newMeth(C$, 'longs$', function () {
return $I$(2).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(4).c$$java_util_SplittableRandom$J$J$J$J,[this, 0, 9223372036854775807, 9223372036854775807, 0]), false);
});

Clazz.newMeth(C$, 'longs$J$J$J', function (streamSize, randomNumberOrigin, randomNumberBound) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(4).c$$java_util_SplittableRandom$J$J$J$J,[this, 0, streamSize, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'longs$J$J', function (randomNumberOrigin, randomNumberBound) {
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2).longStream$java_util_Spliterator_OfLong$Z(Clazz.new_($I$(4).c$$java_util_SplittableRandom$J$J$J$J,[this, 0, 9223372036854775807, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'doubles$J', function (streamSize) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(2).doubleStream$java_util_Spliterator_OfDouble$Z(Clazz.new_($I$(5).c$$java_util_SplittableRandom$J$J$D$D,[this, 0, streamSize, 1.7976931348623157E308, 0.0]), false);
});

Clazz.newMeth(C$, 'doubles$', function () {
return $I$(2).doubleStream$java_util_Spliterator_OfDouble$Z(Clazz.new_($I$(5).c$$java_util_SplittableRandom$J$J$D$D,[this, 0, 9223372036854775807, 1.7976931348623157E308, 0.0]), false);
});

Clazz.newMeth(C$, 'doubles$J$D$D', function (streamSize, randomNumberOrigin, randomNumberBound) {
if (streamSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (!(randomNumberOrigin < randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2).doubleStream$java_util_Spliterator_OfDouble$Z(Clazz.new_($I$(5).c$$java_util_SplittableRandom$J$J$D$D,[this, 0, streamSize, randomNumberOrigin, randomNumberBound]), false);
});

Clazz.newMeth(C$, 'doubles$D$D', function (randomNumberOrigin, randomNumberBound) {
if (!(randomNumberOrigin < randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2).doubleStream$java_util_Spliterator_OfDouble$Z(Clazz.new_($I$(5).c$$java_util_SplittableRandom$J$J$D$D,[this, 0, 9223372036854775807, randomNumberOrigin, randomNumberBound]), false);
});
;
(function(){var C$=Clazz.newClass(P$.SplittableRandom, "RandomIntsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rng=null;
this.index=0;
this.fence=0;
this.origin=0;
this.bound=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SplittableRandom$J$J$I$I', function (rng, index, fence, origin, bound) {
C$.$init$.apply(this);
this.rng=rng;
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var i=this.index;
var m=(i + this.fence) >>> 1;
return (m <= i) ? null : Clazz.new_(C$.c$$java_util_SplittableRandom$J$J$I$I,[this.rng.split$(), i, this.index=m, this.origin, this.bound]);
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
consumer.accept$(this.rng.internalNextInt$I$I(this.origin, this.bound));
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
var r=this.rng;
var o=this.origin;
var b=this.bound;
do {
consumer.accept$(r.internalNextInt$I$I(o, b));
} while (++i < f);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SplittableRandom, "RandomLongsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rng=null;
this.index=0;
this.fence=0;
this.origin=0;
this.bound=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SplittableRandom$J$J$J$J', function (rng, index, fence, origin, bound) {
C$.$init$.apply(this);
this.rng=rng;
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var i=this.index;
var m=(i + this.fence) >>> 1;
return (m <= i) ? null : Clazz.new_(C$.c$$java_util_SplittableRandom$J$J$J$J,[this.rng.split$(), i, this.index=m, this.origin, this.bound]);
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
consumer.accept$(this.rng.internalNextLong$J$J(this.origin, this.bound));
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
var r=this.rng;
var o=this.origin;
var b=this.bound;
do {
consumer.accept$(r.internalNextLong$J$J(o, b));
} while (++i < f);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SplittableRandom, "RandomDoublesSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.rng=null;
this.index=0;
this.fence=0;
this.origin=0;
this.bound=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SplittableRandom$J$J$D$D', function (rng, index, fence, origin, bound) {
C$.$init$.apply(this);
this.rng=rng;
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var i=this.index;
var m=(i + this.fence) >>> 1;
return (m <= i) ? null : Clazz.new_(C$.c$$java_util_SplittableRandom$J$J$D$D,[this.rng.split$(), i, this.index=m, this.origin, this.bound]);
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
consumer.accept$(this.rng.internalNextDouble$D$D(this.origin, this.bound));
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
var r=this.rng;
var o=this.origin;
var b=this.bound;
do {
consumer.accept$(r.internalNextDouble$D$D(o, b));
} while (++i < f);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:49 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
