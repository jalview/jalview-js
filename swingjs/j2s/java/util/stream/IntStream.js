(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.Streams','.IntStreamBuilderImpl'],'java.util.stream.StreamSupport','java.util.Spliterators','java.util.Arrays','java.util.Objects',['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator','.OfInt'],['java.util.stream.Streams','.RangeIntSpliterator'],['java.util.stream.Streams','.ConcatSpliterator','.OfInt'],'java.util.stream.Streams']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "IntStream", function(){
}, null, 'java.util.stream.BaseStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, 'builder$', function () {
return Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'empty$', function () {
return $I$(2).intStream$java_util_Spliterator_OfInt$Z($I$(3).emptyIntSpliterator$(), false);
}, 1);

Clazz.newMeth(C$, 'of$I', function (t) {
return $I$(2).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(1).c$$I,[t]), false);
}, 1);

Clazz.newMeth(C$, 'of$IA', function (values) {
return $I$(4).stream$IA(values);
}, 1);

Clazz.newMeth(C$, 'iterate$I$java_util_function_IntUnaryOperator', function (seed, f) {
$I$(5).requireNonNull$TT(f);
var iterator=((P$.IntStream$1||
(function(){var C$=Clazz.newClass(P$, "IntStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfInt']], 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.t=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.t=this.$finals$.seed;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return true;
});

Clazz.newMeth(C$, 'nextInt$', function () {
var v=this.t;
this.t=this.$finals$.f.applyAsInt$(this.t);
return v;
});
})()
), Clazz.new_(P$.IntStream$1.$init$, [this, {seed: seed, f: f}]));
return $I$(2).intStream$java_util_Spliterator_OfInt$Z($I$(3).spliteratorUnknownSize$java_util_PrimitiveIterator_OfInt$I(iterator, 1296), false);
}, 1);

Clazz.newMeth(C$, 'generate$java_util_function_IntSupplier', function (s) {
$I$(5).requireNonNull$TT(s);
return $I$(2).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(6).c$$J$java_util_function_IntSupplier,[9223372036854775807, s]), false);
}, 1);

Clazz.newMeth(C$, 'range$I$I', function (startInclusive, endExclusive) {
if (startInclusive >= endExclusive) {
return C$.empty$();
} else {
return $I$(2).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(7).c$$I$I$Z,[startInclusive, endExclusive, false]), false);
}}, 1);

Clazz.newMeth(C$, 'rangeClosed$I$I', function (startInclusive, endInclusive) {
if (startInclusive > endInclusive) {
return C$.empty$();
} else {
return $I$(2).intStream$java_util_Spliterator_OfInt$Z(Clazz.new_($I$(7).c$$I$I$Z,[startInclusive, endInclusive, true]), false);
}}, 1);

Clazz.newMeth(C$, 'concat$java_util_stream_IntStream$java_util_stream_IntStream', function (a, b) {
$I$(5).requireNonNull$TT(a);
$I$(5).requireNonNull$TT(b);
var split=Clazz.new_($I$(8).c$$java_util_Spliterator_OfInt$java_util_Spliterator_OfInt,[a.spliterator$(), b.spliterator$()]);
var stream=$I$(2).intStream$java_util_Spliterator_OfInt$Z(split, a.isParallel$() || b.isParallel$() );
return stream.onClose$Runnable($I$(9).composedClose$java_util_stream_BaseStream$java_util_stream_BaseStream(a, b));
}, 1);
;
(function(){var C$=Clazz.newInterface(P$.IntStream, "Builder", function(){
}, null, 'java.util.function.IntConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$I', function (t) {
this.accept$I(t);
return this;
});
};})()
;
(function(){var C$=Clazz.newInterface(P$.IntStream, "Builder", function(){
}, null, 'java.util.function.IntConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$I', function (t) {
this.accept$I(t);
return this;
});
};})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
