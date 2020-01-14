(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.Tripwire','java.util.stream.AbstractPipeline','java.util.stream.StreamShape','java.util.stream.Nodes',['java.util.stream.StreamSpliterators','.DoubleWrappingSpliterator'],['java.util.stream.StreamSpliterators','.DelegatingSpliterator','.OfDouble'],'java.util.Spliterators','java.util.Objects',['java.util.stream.Sink','.ChainedDouble'],['java.util.stream.DoublePipeline','.StatelessOp'],'java.util.stream.StreamOpFlag',['java.util.stream.ReferencePipeline','.StatelessOp'],['java.util.stream.IntPipeline','.StatelessOp'],['java.util.stream.LongPipeline','.StatelessOp'],'java.util.stream.SliceOps','java.util.stream.SortedOps','java.util.stream.ForEachOps','java.util.stream.Collectors','java.util.OptionalDouble','java.util.DoubleSummaryStatistics','java.util.stream.ReduceOps','java.util.stream.MatchOps',['java.util.stream.MatchOps','.MatchKind'],'java.util.stream.FindOps']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DoublePipeline", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.stream.AbstractPipeline', 'java.util.stream.DoubleStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier$I$Z', function (source, sourceFlags, parallel) {
C$.superclazz.c$$java_util_function_Supplier$I$Z.apply(this, [source, sourceFlags, parallel]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$I$Z', function (source, sourceFlags, parallel) {
C$.superclazz.c$$java_util_Spliterator$I$Z.apply(this, [source, sourceFlags, parallel]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$I', function (upstream, opFlags) {
C$.superclazz.c$$java_util_stream_AbstractPipeline$I.apply(this, [upstream, opFlags]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'adapt$java_util_stream_Sink', function (sink) {
if (Clazz.instanceOf(sink, "java.util.function.DoubleConsumer")) {
return sink;
} else {
if (false) $I$(1).trip$Class$S(Clazz.getClass($I$(2)), "using DoubleStream.adapt(Sink<Double> s)");
return (function($class$){((P$.DoublePipeline$lambda1||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $class$.accept$.apply($class$,[t])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda1.$init$, [this, null])})(sink);
}}, 1);

Clazz.newMeth(C$, 'adapt$java_util_Spliterator', function (s) {
if (Clazz.instanceOf(s, "java.util.Spliterator.OfDouble")) {
return s;
} else {
if (false) $I$(1).trip$Class$S(Clazz.getClass($I$(2)), "using DoubleStream.adapt(Spliterator<Double> s)");
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["DoubleStream.adapt(Spliterator<Double> s)"]);
}}, 1);

Clazz.newMeth(C$, 'getOutputShape$', function () {
return $I$(3).DOUBLE_VALUE;
});

Clazz.newMeth(C$, 'evaluateToNode$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction', function (helper, spliterator, flattenTree, generator) {
return $I$(4).collectDouble$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, spliterator, flattenTree);
});

Clazz.newMeth(C$, 'wrap$java_util_stream_PipelineHelper$java_util_function_Supplier$Z', function (ph, supplier, isParallel) {
return Clazz.new_($I$(5).c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z,[ph, supplier, isParallel]);
});

Clazz.newMeth(C$, 'lazySpliterator$java_util_function_Supplier', function (supplier) {
return Clazz.new_($I$(6).c$$java_util_function_Supplier,[supplier]);
});

Clazz.newMeth(C$, 'forEachWithCancel$java_util_Spliterator$java_util_stream_Sink', function (spliterator, sink) {
var spl=C$.adapt$java_util_Spliterator(spliterator);
var adaptedSink=C$.adapt$java_util_stream_Sink(sink);
do {
} while (!sink.cancellationRequested$() && spl.tryAdvance$java_util_function_DoubleConsumer(adaptedSink) );
});

Clazz.newMeth(C$, 'makeNodeBuilder$J$java_util_function_IntFunction', function (exactSizeIfKnown, generator) {
return $I$(4).doubleBuilder$J(exactSizeIfKnown);
});

Clazz.newMeth(C$, 'iterator$', function () {
return $I$(7).iterator$java_util_Spliterator_OfDouble(this.spliterator$());
});

Clazz.newMeth(C$, 'spliterator$', function () {
return C$.adapt$java_util_Spliterator(C$.superclazz.prototype.spliterator$.apply(this, []));
});

Clazz.newMeth(C$, 'boxed$', function () {
return this.mapToObj$java_util_function_DoubleFunction((function($class$){((P$.DoublePipeline$lambda2||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return $class$.valueOf$D.apply(null,[t])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda2.$init$, [this, null])})(Double));
});

Clazz.newMeth(C$, 'map$java_util_function_DoubleUnaryOperator', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.DoublePipeline$1||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.DoublePipeline$1$1||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.applyAsDouble$(t));
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.DoublePipeline$1$1));
});
})()
), Clazz.new_($I$(10).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).DOUBLE_VALUE, $I$(11).NOT_SORTED | $I$(11).NOT_DISTINCT],P$.DoublePipeline$1));
});

Clazz.newMeth(C$, 'mapToObj$java_util_function_DoubleFunction', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.DoublePipeline$2||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.DoublePipeline$2$1||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.apply$(t));
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.DoublePipeline$2$1));
});
})()
), Clazz.new_($I$(12).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).DOUBLE_VALUE, $I$(11).NOT_SORTED | $I$(11).NOT_DISTINCT],P$.DoublePipeline$2));
});

Clazz.newMeth(C$, 'mapToInt$java_util_function_DoubleToIntFunction', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.DoublePipeline$3||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.DoublePipeline$3$1||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.applyAsInt$(t));
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.DoublePipeline$3$1));
});
})()
), Clazz.new_($I$(13).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).DOUBLE_VALUE, $I$(11).NOT_SORTED | $I$(11).NOT_DISTINCT],P$.DoublePipeline$3));
});

Clazz.newMeth(C$, 'mapToLong$java_util_function_DoubleToLongFunction', function (mapper) {
$I$(8).requireNonNull$TT(mapper);
return ((P$.DoublePipeline$4||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.DoublePipeline$4$1||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.applyAsLong$(t));
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.DoublePipeline$4$1));
});
})()
), Clazz.new_($I$(14).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).DOUBLE_VALUE, $I$(11).NOT_SORTED | $I$(11).NOT_DISTINCT],P$.DoublePipeline$4));
});

Clazz.newMeth(C$, 'flatMap$java_util_function_DoubleFunction', function (mapper) {
return ((P$.DoublePipeline$5||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.DoublePipeline$5$1||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
/*try*/ {var result=this.$finals$.mapper.apply$(t);
if (result != null ) result.sequential$().forEach$java_util_function_DoubleConsumer(((P$.DoublePipeline$5$1$lambda3||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$5$1$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (i) { return (this.downstream.accept$(i));});
})()
), Clazz.new_(P$.DoublePipeline$5$1$lambda3.$init$, [this, null])));
}
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.DoublePipeline$5$1));
});
})()
), Clazz.new_($I$(10).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).DOUBLE_VALUE, $I$(11).NOT_SORTED | $I$(11).NOT_DISTINCT | $I$(11).NOT_SIZED ],P$.DoublePipeline$5));
});

Clazz.newMeth(C$, 'unordered$', function () {
if (!this.isOrdered$()) return this;
return ((P$.DoublePipeline$6||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return sink;
});
})()
), Clazz.new_($I$(10).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, null, this, $I$(3).DOUBLE_VALUE, $I$(11).NOT_ORDERED],P$.DoublePipeline$6));
});

Clazz.newMeth(C$, 'filter$java_util_function_DoublePredicate', function (predicate) {
$I$(8).requireNonNull$TT(predicate);
return ((P$.DoublePipeline$7||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.DoublePipeline$7$1||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
if (this.$finals$.predicate.test$(t)) this.downstream.accept$(t);
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_Sink, [this, {predicate: this.$finals$.predicate}, sink],P$.DoublePipeline$7$1));
});
})()
), Clazz.new_($I$(10).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {predicate: predicate}, this, $I$(3).DOUBLE_VALUE, $I$(11).NOT_SIZED],P$.DoublePipeline$7));
});

Clazz.newMeth(C$, 'peek$java_util_function_DoubleConsumer', function (action) {
$I$(8).requireNonNull$TT(action);
return ((P$.DoublePipeline$8||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.DoublePipeline$8$1||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$8$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
this.$finals$.action.accept$(t);
this.downstream.accept$(t);
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_Sink, [this, {action: this.$finals$.action}, sink],P$.DoublePipeline$8$1));
});
})()
), Clazz.new_($I$(10).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {action: action}, this, $I$(3).DOUBLE_VALUE, 0],P$.DoublePipeline$8));
});

Clazz.newMeth(C$, 'limit$J', function (maxSize) {
if (maxSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(maxSize)]);
return $I$(15).makeDouble$java_util_stream_AbstractPipeline$J$J(this, 0, maxSize);
});

Clazz.newMeth(C$, 'skip$J', function (n) {
if (n < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(n)]);
if (n == 0) return this;
 else {
var limit=-1;
return $I$(15).makeDouble$java_util_stream_AbstractPipeline$J$J(this, n, limit);
}});

Clazz.newMeth(C$, 'sorted$', function () {
return $I$(16).makeDouble$java_util_stream_AbstractPipeline(this);
});

Clazz.newMeth(C$, 'distinct$', function () {
return this.boxed$().distinct$().mapToDouble$java_util_function_ToDoubleFunction(((P$.DoublePipeline$lambda4||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToDoubleFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (i) { return ((i).doubleValue$());});
})()
), Clazz.new_(P$.DoublePipeline$lambda4.$init$, [this, null])));
});

Clazz.newMeth(C$, 'forEach$java_util_function_DoubleConsumer', function (consumer) {
this.evaluate$java_util_stream_TerminalOp($I$(17).makeDouble$java_util_function_DoubleConsumer$Z(consumer, false));
});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_DoubleConsumer', function (consumer) {
this.evaluate$java_util_stream_TerminalOp($I$(17).makeDouble$java_util_function_DoubleConsumer$Z(consumer, true));
});

Clazz.newMeth(C$, 'sum$', function () {
var summation=this.collect$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BiConsumer(((P$.DoublePipeline$lambda5||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (Clazz.array(Double.TYPE, [3]));});
})()
), Clazz.new_(P$.DoublePipeline$lambda5.$init$, [this, null])), ((P$.DoublePipeline$lambda6||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjDoubleConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (ll, d) {
$I$(18).sumWithCompensation$DA$D(ll, d);
ll[2] += d;
});
})()
), Clazz.new_(P$.DoublePipeline$lambda6.$init$, [this, null])), ((P$.DoublePipeline$lambda7||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (ll, rr) {
$I$(18).sumWithCompensation$DA$D(ll, rr[0]);
$I$(18).sumWithCompensation$DA$D(ll, rr[1]);
ll[2] += rr[2];
});
})()
), Clazz.new_(P$.DoublePipeline$lambda7.$init$, [this, null])));
return $I$(18).computeFinalSum$DA(summation);
});

Clazz.newMeth(C$, 'min$', function () {
return this.reduce$java_util_function_DoubleBinaryOperator((function($class$){((P$.DoublePipeline$lambda8||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleBinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsDouble$', function (t,u) { return $class$.min.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda8.$init$, [this, null])})(Math));
});

Clazz.newMeth(C$, 'max$', function () {
return this.reduce$java_util_function_DoubleBinaryOperator((function($class$){((P$.DoublePipeline$lambda9||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleBinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsDouble$', function (t,u) { return $class$.max.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda9.$init$, [this, null])})(Math));
});

Clazz.newMeth(C$, 'average$', function () {
var avg=this.collect$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BiConsumer(((P$.DoublePipeline$lambda10||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (Clazz.array(Double.TYPE, [4]));});
})()
), Clazz.new_(P$.DoublePipeline$lambda10.$init$, [this, null])), ((P$.DoublePipeline$lambda11||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjDoubleConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (ll, d) {
ll[2]++;
$I$(18).sumWithCompensation$DA$D(ll, d);
ll[3] += d;
});
})()
), Clazz.new_(P$.DoublePipeline$lambda11.$init$, [this, null])), ((P$.DoublePipeline$lambda12||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (ll, rr) {
$I$(18).sumWithCompensation$DA$D(ll, rr[0]);
$I$(18).sumWithCompensation$DA$D(ll, rr[1]);
ll[2] += rr[2];
ll[3] += rr[3];
});
})()
), Clazz.new_(P$.DoublePipeline$lambda12.$init$, [this, null])));
return avg[2] > 0  ? $I$(19).of$D($I$(18).computeFinalSum$DA(avg) / avg[2]) : $I$(19).empty$();
});

Clazz.newMeth(C$, 'count$', function () {
return this.mapToLong$java_util_function_DoubleToLongFunction(((P$.DoublePipeline$lambda13||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleToLongFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (e) { return (1);});
})()
), Clazz.new_(P$.DoublePipeline$lambda13.$init$, [this, null]))).sum$();
});

Clazz.newMeth(C$, 'summaryStatistics$', function () {
return this.collect$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BiConsumer(((P$.DoublePipeline$lambda14||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(20),[])});
})()
), Clazz.new_(P$.DoublePipeline$lambda14.$init$, [this, null])), (function($class$){((P$.DoublePipeline$lambda15||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjDoubleConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$'], function (t,u) { return t.accept$D.apply(t,[u])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda15.$init$, [this, null])})($I$(20)), (function($class$){((P$.DoublePipeline$lambda16||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$'], function (t,u) { return t.combine$java_util_DoubleSummaryStatistics.apply(t,[u])});
})()
)); return Clazz.new_(P$.DoublePipeline$lambda16.$init$, [this, null])})($I$(20)));
});

Clazz.newMeth(C$, 'reduce$D$java_util_function_DoubleBinaryOperator', function (identity, op) {
return (this.evaluate$java_util_stream_TerminalOp($I$(21).makeDouble$D$java_util_function_DoubleBinaryOperator(identity, op))).doubleValue$();
});

Clazz.newMeth(C$, 'reduce$java_util_function_DoubleBinaryOperator', function (op) {
return this.evaluate$java_util_stream_TerminalOp($I$(21).makeDouble$java_util_function_DoubleBinaryOperator(op));
});

Clazz.newMeth(C$, ['collect$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BiConsumer'], function (supplier, accumulator, combiner) {
var operator=((P$.DoublePipeline$lambda17||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (left, right) {
this.$finals$.combiner.accept$(left, right);
return left;
});
})()
), Clazz.new_(P$.DoublePipeline$lambda17.$init$, [this, {combiner: combiner}]));
return this.evaluate$java_util_stream_TerminalOp($I$(21).makeDouble$java_util_function_Supplier$java_util_function_ObjDoubleConsumer$java_util_function_BinaryOperator(supplier, accumulator, operator));
});

Clazz.newMeth(C$, 'anyMatch$java_util_function_DoublePredicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(22).makeDouble$java_util_function_DoublePredicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(23).ANY))).booleanValue$();
});

Clazz.newMeth(C$, 'allMatch$java_util_function_DoublePredicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(22).makeDouble$java_util_function_DoublePredicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(23).ALL))).booleanValue$();
});

Clazz.newMeth(C$, 'noneMatch$java_util_function_DoublePredicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(22).makeDouble$java_util_function_DoublePredicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(23).NONE))).booleanValue$();
});

Clazz.newMeth(C$, 'findFirst$', function () {
return this.evaluate$java_util_stream_TerminalOp($I$(24).makeDouble$Z(true));
});

Clazz.newMeth(C$, 'findAny$', function () {
return this.evaluate$java_util_stream_TerminalOp($I$(24).makeDouble$Z(false));
});

Clazz.newMeth(C$, 'toArray$', function () {
return $I$(4).flattenDouble$java_util_stream_Node_OfDouble(this.evaluateToArrayNode$java_util_function_IntFunction(((P$.DoublePipeline$lambda18||
(function(){var C$=Clazz.newClass(P$, "DoublePipeline$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(Double, [t.intValue()])});
})()
), Clazz.new_(P$.DoublePipeline$lambda18.$init$, [this, null])))).asPrimitiveArray$();
});
;
(function(){var C$=Clazz.newClass(P$.DoublePipeline, "Head", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.DoublePipeline');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier$I$Z', function (source, sourceFlags, parallel) {
C$.superclazz.c$$java_util_function_Supplier$I$Z.apply(this, [source, sourceFlags, parallel]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$I$Z', function (source, sourceFlags, parallel) {
C$.superclazz.c$$java_util_Spliterator$I$Z.apply(this, [source, sourceFlags, parallel]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'opIsStateful$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'forEach$java_util_function_DoubleConsumer', function (consumer) {
if (!this.isParallel$()) {
P$.DoublePipeline.adapt$java_util_Spliterator(this.sourceStageSpliterator$()).forEachRemaining$java_util_function_DoubleConsumer(consumer);
} else {
C$.superclazz.prototype.forEach$java_util_function_DoubleConsumer.apply(this, [consumer]);
}});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_DoubleConsumer', function (consumer) {
if (!this.isParallel$()) {
P$.DoublePipeline.adapt$java_util_Spliterator(this.sourceStageSpliterator$()).forEachRemaining$java_util_function_DoubleConsumer(consumer);
} else {
C$.superclazz.prototype.forEachOrdered$java_util_function_DoubleConsumer.apply(this, [consumer]);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.DoublePipeline, "StatelessOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.DoublePipeline');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I', function (upstream, inputShape, opFlags) {
C$.superclazz.c$$java_util_stream_AbstractPipeline$I.apply(this, [upstream, opFlags]);
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return upstream.getOutputShape$() === inputShape });
}, 1);

Clazz.newMeth(C$, 'opIsStateful$', function () {
return false;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.DoublePipeline, "StatefulOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.DoublePipeline');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I', function (upstream, inputShape, opFlags) {
C$.superclazz.c$$java_util_stream_AbstractPipeline$I.apply(this, [upstream, opFlags]);
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return upstream.getOutputShape$() === inputShape });
}, 1);

Clazz.newMeth(C$, 'opIsStateful$', function () {
return true;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
