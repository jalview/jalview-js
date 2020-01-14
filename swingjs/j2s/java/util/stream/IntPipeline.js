(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.Tripwire','java.util.stream.AbstractPipeline','java.util.stream.StreamShape','java.util.stream.Nodes',['java.util.stream.StreamSpliterators','.IntWrappingSpliterator'],['java.util.stream.StreamSpliterators','.DelegatingSpliterator','.OfInt'],'java.util.Spliterators',['java.util.stream.Sink','.ChainedInt'],['java.util.stream.LongPipeline','.StatelessOp'],'java.util.stream.StreamOpFlag',['java.util.stream.DoublePipeline','.StatelessOp'],'java.util.Objects',['java.util.stream.IntPipeline','.StatelessOp'],['java.util.stream.ReferencePipeline','.StatelessOp'],'java.util.stream.SliceOps','java.util.stream.SortedOps','java.util.stream.ForEachOps','java.util.OptionalDouble','java.util.IntSummaryStatistics','java.util.stream.ReduceOps','java.util.stream.MatchOps',['java.util.stream.MatchOps','.MatchKind'],'java.util.stream.FindOps']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "IntPipeline", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.stream.AbstractPipeline', 'java.util.stream.IntStream');

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
if (Clazz.instanceOf(sink, "java.util.function.IntConsumer")) {
return sink;
} else {
if (false) $I$(1).trip$Class$S(Clazz.getClass($I$(2)), "using IntStream.adapt(Sink<Integer> s)");
return (function($class$){((P$.IntPipeline$lambda1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $class$.accept$.apply($class$,[t])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda1.$init$, [this, null])})(sink);
}}, 1);

Clazz.newMeth(C$, 'adapt$java_util_Spliterator', function (s) {
if (Clazz.instanceOf(s, "java.util.Spliterator.OfInt")) {
return s;
} else {
if (false) $I$(1).trip$Class$S(Clazz.getClass($I$(2)), "using IntStream.adapt(Spliterator<Integer> s)");
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["IntStream.adapt(Spliterator<Integer> s)"]);
}}, 1);

Clazz.newMeth(C$, 'getOutputShape$', function () {
return $I$(3).INT_VALUE;
});

Clazz.newMeth(C$, 'evaluateToNode$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction', function (helper, spliterator, flattenTree, generator) {
return $I$(4).collectInt$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, spliterator, flattenTree);
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
} while (!sink.cancellationRequested$() && spl.tryAdvance$java_util_function_IntConsumer(adaptedSink) );
});

Clazz.newMeth(C$, 'makeNodeBuilder$J$java_util_function_IntFunction', function (exactSizeIfKnown, generator) {
return $I$(4).intBuilder$J(exactSizeIfKnown);
});

Clazz.newMeth(C$, 'iterator$', function () {
return $I$(7).iterator$java_util_Spliterator_OfInt(this.spliterator$());
});

Clazz.newMeth(C$, 'spliterator$', function () {
return C$.adapt$java_util_Spliterator(C$.superclazz.prototype.spliterator$.apply(this, []));
});

Clazz.newMeth(C$, 'asLongStream$', function () {
return ((P$.IntPipeline$1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.IntPipeline$1$1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.downstream.accept$(t);
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, null, sink],P$.IntPipeline$1$1));
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, null, this, $I$(3).INT_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.IntPipeline$1));
});

Clazz.newMeth(C$, 'asDoubleStream$', function () {
return ((P$.IntPipeline$2||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.IntPipeline$2$1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.downstream.accept$(t);
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, null, sink],P$.IntPipeline$2$1));
});
})()
), Clazz.new_($I$(11).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, null, this, $I$(3).INT_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.IntPipeline$2));
});

Clazz.newMeth(C$, 'boxed$', function () {
return this.mapToObj$java_util_function_IntFunction((function($class$){((P$.IntPipeline$lambda2||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return $class$.valueOf$I.apply(null,[t])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda2.$init$, [this, null])})(Integer));
});

Clazz.newMeth(C$, 'map$java_util_function_IntUnaryOperator', function (mapper) {
$I$(12).requireNonNull$TT(mapper);
return ((P$.IntPipeline$3||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.IntPipeline$3$1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.applyAsInt$(t));
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.IntPipeline$3$1));
});
})()
), Clazz.new_($I$(13).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).INT_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.IntPipeline$3));
});

Clazz.newMeth(C$, 'mapToObj$java_util_function_IntFunction', function (mapper) {
$I$(12).requireNonNull$TT(mapper);
return ((P$.IntPipeline$4||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.IntPipeline$4$1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.apply$(t));
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.IntPipeline$4$1));
});
})()
), Clazz.new_($I$(14).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).INT_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.IntPipeline$4));
});

Clazz.newMeth(C$, 'mapToLong$java_util_function_IntToLongFunction', function (mapper) {
$I$(12).requireNonNull$TT(mapper);
return ((P$.IntPipeline$5||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.IntPipeline$5$1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.applyAsLong$(t));
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.IntPipeline$5$1));
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).INT_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.IntPipeline$5));
});

Clazz.newMeth(C$, 'mapToDouble$java_util_function_IntToDoubleFunction', function (mapper) {
$I$(12).requireNonNull$TT(mapper);
return ((P$.IntPipeline$6||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.IntPipeline$6$1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$6$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.applyAsDouble$(t));
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.IntPipeline$6$1));
});
})()
), Clazz.new_($I$(11).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).INT_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.IntPipeline$6));
});

Clazz.newMeth(C$, 'flatMap$java_util_function_IntFunction', function (mapper) {
return ((P$.IntPipeline$7||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.IntPipeline$7$1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$7$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
/*try*/ {var result=this.$finals$.mapper.apply$(t);
if (result != null ) result.sequential$().forEach$java_util_function_IntConsumer(((P$.IntPipeline$7$1$lambda3||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$7$1$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (i) { return (this.downstream.accept$(i));});
})()
), Clazz.new_(P$.IntPipeline$7$1$lambda3.$init$, [this, null])));
}
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.IntPipeline$7$1));
});
})()
), Clazz.new_($I$(13).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).INT_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT | $I$(10).NOT_SIZED ],P$.IntPipeline$7));
});

Clazz.newMeth(C$, 'unordered$', function () {
if (!this.isOrdered$()) return this;
return ((P$.IntPipeline$8||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return sink;
});
})()
), Clazz.new_($I$(13).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, null, this, $I$(3).INT_VALUE, $I$(10).NOT_ORDERED],P$.IntPipeline$8));
});

Clazz.newMeth(C$, 'filter$java_util_function_IntPredicate', function (predicate) {
$I$(12).requireNonNull$TT(predicate);
return ((P$.IntPipeline$9||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.IntPipeline$9$1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$9$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
if (this.$finals$.predicate.test$(t)) this.downstream.accept$(t);
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {predicate: this.$finals$.predicate}, sink],P$.IntPipeline$9$1));
});
})()
), Clazz.new_($I$(13).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {predicate: predicate}, this, $I$(3).INT_VALUE, $I$(10).NOT_SIZED],P$.IntPipeline$9));
});

Clazz.newMeth(C$, 'peek$java_util_function_IntConsumer', function (action) {
$I$(12).requireNonNull$TT(action);
return ((P$.IntPipeline$10||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.IntPipeline$10$1||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$10$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
this.$finals$.action.accept$(t);
this.downstream.accept$(t);
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {action: this.$finals$.action}, sink],P$.IntPipeline$10$1));
});
})()
), Clazz.new_($I$(13).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {action: action}, this, $I$(3).INT_VALUE, 0],P$.IntPipeline$10));
});

Clazz.newMeth(C$, 'limit$J', function (maxSize) {
if (maxSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(maxSize)]);
return $I$(15).makeInt$java_util_stream_AbstractPipeline$J$J(this, 0, maxSize);
});

Clazz.newMeth(C$, 'skip$J', function (n) {
if (n < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(n)]);
if (n == 0) return this;
 else return $I$(15).makeInt$java_util_stream_AbstractPipeline$J$J(this, n, -1);
});

Clazz.newMeth(C$, 'sorted$', function () {
return $I$(16).makeInt$java_util_stream_AbstractPipeline(this);
});

Clazz.newMeth(C$, 'distinct$', function () {
return this.boxed$().distinct$().mapToInt$java_util_function_ToIntFunction(((P$.IntPipeline$lambda4||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToIntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (i) { return (i);});
})()
), Clazz.new_(P$.IntPipeline$lambda4.$init$, [this, null])));
});

Clazz.newMeth(C$, 'forEach$java_util_function_IntConsumer', function (action) {
this.evaluate$java_util_stream_TerminalOp($I$(17).makeInt$java_util_function_IntConsumer$Z(action, false));
});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_IntConsumer', function (action) {
this.evaluate$java_util_stream_TerminalOp($I$(17).makeInt$java_util_function_IntConsumer$Z(action, true));
});

Clazz.newMeth(C$, 'sum$', function () {
return this.reduce$I$java_util_function_IntBinaryOperator(0, (function($class$){((P$.IntPipeline$lambda5||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntBinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsInt$', function (t,u) { return $class$.sum$I$I.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda5.$init$, [this, null])})(Integer));
});

Clazz.newMeth(C$, 'min$', function () {
return this.reduce$java_util_function_IntBinaryOperator((function($class$){((P$.IntPipeline$lambda6||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntBinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsInt$', function (t,u) { return $class$.min.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda6.$init$, [this, null])})(Math));
});

Clazz.newMeth(C$, 'max$', function () {
return this.reduce$java_util_function_IntBinaryOperator((function($class$){((P$.IntPipeline$lambda7||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntBinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsInt$', function (t,u) { return $class$.max.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda7.$init$, [this, null])})(Math));
});

Clazz.newMeth(C$, 'count$', function () {
return this.mapToLong$java_util_function_IntToLongFunction(((P$.IntPipeline$lambda8||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntToLongFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (e) { return (1);});
})()
), Clazz.new_(P$.IntPipeline$lambda8.$init$, [this, null]))).sum$();
});

Clazz.newMeth(C$, 'average$', function () {
var avg=this.collect$java_util_function_Supplier$java_util_function_ObjIntConsumer$java_util_function_BiConsumer(((P$.IntPipeline$lambda9||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (Clazz.array(Long.TYPE, [2]));});
})()
), Clazz.new_(P$.IntPipeline$lambda9.$init$, [this, null])), ((P$.IntPipeline$lambda10||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjIntConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (ll, i) {
ll[0]++;
ll[1]+=i;
});
})()
), Clazz.new_(P$.IntPipeline$lambda10.$init$, [this, null])), ((P$.IntPipeline$lambda11||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$'], function (ll, rr) {
ll[0]+=rr[0];
ll[1]+=rr[1];
});
})()
), Clazz.new_(P$.IntPipeline$lambda11.$init$, [this, null])));
return avg[0] > 0 ? $I$(18).of$D(avg[1] / avg[0]) : $I$(18).empty$();
});

Clazz.newMeth(C$, 'summaryStatistics$', function () {
return this.collect$java_util_function_Supplier$java_util_function_ObjIntConsumer$java_util_function_BiConsumer(((P$.IntPipeline$lambda12||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(19),[])});
})()
), Clazz.new_(P$.IntPipeline$lambda12.$init$, [this, null])), (function($class$){((P$.IntPipeline$lambda13||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjIntConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$'], function (t,u) { return t.accept$I.apply(t,[u])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda13.$init$, [this, null])})($I$(19)), (function($class$){((P$.IntPipeline$lambda14||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$'], function (t,u) { return t.combine$java_util_IntSummaryStatistics.apply(t,[u])});
})()
)); return Clazz.new_(P$.IntPipeline$lambda14.$init$, [this, null])})($I$(19)));
});

Clazz.newMeth(C$, 'reduce$I$java_util_function_IntBinaryOperator', function (identity, op) {
return (this.evaluate$java_util_stream_TerminalOp($I$(20).makeInt$I$java_util_function_IntBinaryOperator(identity, op))).intValue$();
});

Clazz.newMeth(C$, 'reduce$java_util_function_IntBinaryOperator', function (op) {
return this.evaluate$java_util_stream_TerminalOp($I$(20).makeInt$java_util_function_IntBinaryOperator(op));
});

Clazz.newMeth(C$, ['collect$java_util_function_Supplier$java_util_function_ObjIntConsumer$java_util_function_BiConsumer'], function (supplier, accumulator, combiner) {
var operator=((P$.IntPipeline$lambda15||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

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
), Clazz.new_(P$.IntPipeline$lambda15.$init$, [this, {combiner: combiner}]));
return this.evaluate$java_util_stream_TerminalOp($I$(20).makeInt$java_util_function_Supplier$java_util_function_ObjIntConsumer$java_util_function_BinaryOperator(supplier, accumulator, operator));
});

Clazz.newMeth(C$, 'anyMatch$java_util_function_IntPredicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(21).makeInt$java_util_function_IntPredicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(22).ANY))).booleanValue$();
});

Clazz.newMeth(C$, 'allMatch$java_util_function_IntPredicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(21).makeInt$java_util_function_IntPredicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(22).ALL))).booleanValue$();
});

Clazz.newMeth(C$, 'noneMatch$java_util_function_IntPredicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(21).makeInt$java_util_function_IntPredicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(22).NONE))).booleanValue$();
});

Clazz.newMeth(C$, 'findFirst$', function () {
return this.evaluate$java_util_stream_TerminalOp($I$(23).makeInt$Z(true));
});

Clazz.newMeth(C$, 'findAny$', function () {
return this.evaluate$java_util_stream_TerminalOp($I$(23).makeInt$Z(false));
});

Clazz.newMeth(C$, 'toArray$', function () {
return $I$(4).flattenInt$java_util_stream_Node_OfInt(this.evaluateToArrayNode$java_util_function_IntFunction(((P$.IntPipeline$lambda16||
(function(){var C$=Clazz.newClass(P$, "IntPipeline$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(Integer, [t.intValue()])});
})()
), Clazz.new_(P$.IntPipeline$lambda16.$init$, [this, null])))).asPrimitiveArray$();
});
;
(function(){var C$=Clazz.newClass(P$.IntPipeline, "Head", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.IntPipeline');

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

Clazz.newMeth(C$, 'forEach$java_util_function_IntConsumer', function (action) {
if (!this.isParallel$()) {
P$.IntPipeline.adapt$java_util_Spliterator(this.sourceStageSpliterator$()).forEachRemaining$java_util_function_IntConsumer(action);
} else {
C$.superclazz.prototype.forEach$java_util_function_IntConsumer.apply(this, [action]);
}});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_IntConsumer', function (action) {
if (!this.isParallel$()) {
P$.IntPipeline.adapt$java_util_Spliterator(this.sourceStageSpliterator$()).forEachRemaining$java_util_function_IntConsumer(action);
} else {
C$.superclazz.prototype.forEachOrdered$java_util_function_IntConsumer.apply(this, [action]);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.IntPipeline, "StatelessOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.IntPipeline');

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
(function(){var C$=Clazz.newClass(P$.IntPipeline, "StatefulOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.IntPipeline');

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
