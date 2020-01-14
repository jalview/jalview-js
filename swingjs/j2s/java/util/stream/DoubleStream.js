(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,['java.util.stream.Streams','.DoubleStreamBuilderImpl'],'java.util.stream.StreamSupport','java.util.Spliterators','java.util.Arrays','java.util.Objects',['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator','.OfDouble'],['java.util.stream.Streams','.ConcatSpliterator','.OfDouble'],'java.util.stream.Streams']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "DoubleStream", function(){
}, null, 'java.util.stream.BaseStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, 'builder$', function () {
return Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'empty$', function () {
return $I$(2).doubleStream$java_util_Spliterator_OfDouble$Z($I$(3).emptyDoubleSpliterator$(), false);
}, 1);

Clazz.newMeth(C$, 'of$D', function (t) {
return $I$(2).doubleStream$java_util_Spliterator_OfDouble$Z(Clazz.new_($I$(1).c$$D,[t]), false);
}, 1);

Clazz.newMeth(C$, 'of$DA', function (values) {
return $I$(4).stream$DA(values);
}, 1);

Clazz.newMeth(C$, 'iterate$D$java_util_function_DoubleUnaryOperator', function (seed, f) {
$I$(5).requireNonNull$TT(f);
var iterator=((P$.DoubleStream$1||
(function(){var C$=Clazz.newClass(P$, "DoubleStream$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfDouble']], 1);

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

Clazz.newMeth(C$, 'nextDouble$', function () {
var v=this.t;
this.t=this.$finals$.f.applyAsDouble$(this.t);
return v;
});
})()
), Clazz.new_(P$.DoubleStream$1.$init$, [this, {seed: seed, f: f}]));
return $I$(2).doubleStream$java_util_Spliterator_OfDouble$Z($I$(3).spliteratorUnknownSize$java_util_PrimitiveIterator_OfDouble$I(iterator, 1296), false);
}, 1);

Clazz.newMeth(C$, 'generate$java_util_function_DoubleSupplier', function (s) {
$I$(5).requireNonNull$TT(s);
return $I$(2).doubleStream$java_util_Spliterator_OfDouble$Z(Clazz.new_($I$(6).c$$J$java_util_function_DoubleSupplier,[9223372036854775807, s]), false);
}, 1);

Clazz.newMeth(C$, 'concat$java_util_stream_DoubleStream$java_util_stream_DoubleStream', function (a, b) {
$I$(5).requireNonNull$TT(a);
$I$(5).requireNonNull$TT(b);
var split=Clazz.new_($I$(7).c$$java_util_Spliterator_OfDouble$java_util_Spliterator_OfDouble,[a.spliterator$(), b.spliterator$()]);
var stream=$I$(2).doubleStream$java_util_Spliterator_OfDouble$Z(split, a.isParallel$() || b.isParallel$() );
return stream.onClose$Runnable($I$(8).composedClose$java_util_stream_BaseStream$java_util_stream_BaseStream(a, b));
}, 1);
;
(function(){var C$=Clazz.newInterface(P$.DoubleStream, "Builder", function(){
}, null, 'java.util.function.DoubleConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$D', function (t) {
this.accept$D(t);
return this;
});
};})()
;
(function(){var C$=Clazz.newInterface(P$.DoubleStream, "Builder", function(){
}, null, 'java.util.function.DoubleConsumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'add$D', function (t) {
this.accept$D(t);
return this;
});
};})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
