(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.Tripwire','java.util.stream.AbstractPipeline','java.util.stream.StreamShape','java.util.stream.Nodes',['java.util.stream.StreamSpliterators','.LongWrappingSpliterator'],['java.util.stream.StreamSpliterators','.DelegatingSpliterator','.OfLong'],'java.util.Spliterators',['java.util.stream.Sink','.ChainedLong'],['java.util.stream.DoublePipeline','.StatelessOp'],'java.util.stream.StreamOpFlag','java.util.Objects',['java.util.stream.LongPipeline','.StatelessOp'],['java.util.stream.ReferencePipeline','.StatelessOp'],['java.util.stream.IntPipeline','.StatelessOp'],'java.util.stream.SliceOps','java.util.stream.SortedOps','java.util.stream.ForEachOps','java.util.OptionalDouble','java.util.LongSummaryStatistics','java.util.stream.ReduceOps','java.util.stream.MatchOps',['java.util.stream.MatchOps','.MatchKind'],'java.util.stream.FindOps']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "LongPipeline", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.stream.AbstractPipeline', 'java.util.stream.LongStream');

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
if (Clazz.instanceOf(sink, "java.util.function.LongConsumer")) {
return sink;
} else {
if (false) $I$(1).trip$Class$S(Clazz.getClass($I$(2)), "using LongStream.adapt(Sink<Long> s)");
return (function($class$){((P$.LongPipeline$lambda1||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t) { return $class$.accept$.apply($class$,[t])});
})()
)); return Clazz.new_(P$.LongPipeline$lambda1.$init$, [this, null])})(sink);
}}, 1);

Clazz.newMeth(C$, 'adapt$java_util_Spliterator', function (s) {
if (Clazz.instanceOf(s, "java.util.Spliterator.OfLong")) {
return s;
} else {
if (false) $I$(1).trip$Class$S(Clazz.getClass($I$(2)), "using LongStream.adapt(Spliterator<Long> s)");
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["LongStream.adapt(Spliterator<Long> s)"]);
}}, 1);

Clazz.newMeth(C$, 'getOutputShape$', function () {
return $I$(3).LONG_VALUE;
});

Clazz.newMeth(C$, 'evaluateToNode$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction', function (helper, spliterator, flattenTree, generator) {
return $I$(4).collectLong$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, spliterator, flattenTree);
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
} while (!sink.cancellationRequested$() && spl.tryAdvance$java_util_function_LongConsumer(adaptedSink) );
});

Clazz.newMeth(C$, 'makeNodeBuilder$J$java_util_function_IntFunction', function (exactSizeIfKnown, generator) {
return $I$(4).longBuilder$J(exactSizeIfKnown);
});

Clazz.newMeth(C$, 'iterator$', function () {
return $I$(7).iterator$java_util_Spliterator_OfLong(this.spliterator$());
});

Clazz.newMeth(C$, 'spliterator$', function () {
return C$.adapt$java_util_Spliterator(C$.superclazz.prototype.spliterator$.apply(this, []));
});

Clazz.newMeth(C$, 'asDoubleStream$', function () {
return ((P$.LongPipeline$1||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.LongPipeline$1$1||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedLong']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
this.downstream.accept$(t);
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, null, sink],P$.LongPipeline$1$1));
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, null, this, $I$(3).LONG_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.LongPipeline$1));
});

Clazz.newMeth(C$, 'boxed$', function () {
return this.mapToObj$java_util_function_LongFunction((function($class$){((P$.LongPipeline$lambda2||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$', function (t) { return $class$.valueOf$J.apply(null,[t])});
})()
)); return Clazz.new_(P$.LongPipeline$lambda2.$init$, [this, null])})(Long));
});

Clazz.newMeth(C$, 'map$java_util_function_LongUnaryOperator', function (mapper) {
$I$(11).requireNonNull$TT(mapper);
return ((P$.LongPipeline$2||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.LongPipeline$2$1||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedLong']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.applyAsLong$(t));
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.LongPipeline$2$1));
});
})()
), Clazz.new_($I$(12).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).LONG_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.LongPipeline$2));
});

Clazz.newMeth(C$, 'mapToObj$java_util_function_LongFunction', function (mapper) {
$I$(11).requireNonNull$TT(mapper);
return ((P$.LongPipeline$3||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.LongPipeline$3$1||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedLong']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.apply$(t));
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.LongPipeline$3$1));
});
})()
), Clazz.new_($I$(13).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).LONG_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.LongPipeline$3));
});

Clazz.newMeth(C$, 'mapToInt$java_util_function_LongToIntFunction', function (mapper) {
$I$(11).requireNonNull$TT(mapper);
return ((P$.LongPipeline$4||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.LongPipeline$4$1||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedLong']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.applyAsInt$(t));
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.LongPipeline$4$1));
});
})()
), Clazz.new_($I$(14).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).LONG_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.LongPipeline$4));
});

Clazz.newMeth(C$, 'mapToDouble$java_util_function_LongToDoubleFunction', function (mapper) {
$I$(11).requireNonNull$TT(mapper);
return ((P$.LongPipeline$5||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.LongPipeline$5$1||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$5$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedLong']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
this.downstream.accept$(this.$finals$.mapper.applyAsDouble$(t));
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.LongPipeline$5$1));
});
})()
), Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).LONG_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT],P$.LongPipeline$5));
});

Clazz.newMeth(C$, 'flatMap$java_util_function_LongFunction', function (mapper) {
return ((P$.LongPipeline$6||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.LongPipeline$6$1||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$6$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedLong']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
/*try*/ {var result=this.$finals$.mapper.apply$(t);
if (result != null ) result.sequential$().forEach$java_util_function_LongConsumer(((P$.LongPipeline$6$1$lambda3||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$6$1$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (i) { return (this.downstream.accept$(i));});
})()
), Clazz.new_(P$.LongPipeline$6$1$lambda3.$init$, [this, null])));
}
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {mapper: this.$finals$.mapper}, sink],P$.LongPipeline$6$1));
});
})()
), Clazz.new_($I$(12).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {mapper: mapper}, this, $I$(3).LONG_VALUE, $I$(10).NOT_SORTED | $I$(10).NOT_DISTINCT | $I$(10).NOT_SIZED ],P$.LongPipeline$6));
});

Clazz.newMeth(C$, 'unordered$', function () {
if (!this.isOrdered$()) return this;
return ((P$.LongPipeline$7||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return sink;
});
})()
), Clazz.new_($I$(12).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, null, this, $I$(3).LONG_VALUE, $I$(10).NOT_ORDERED],P$.LongPipeline$7));
});

Clazz.newMeth(C$, 'filter$java_util_function_LongPredicate', function (predicate) {
$I$(11).requireNonNull$TT(predicate);
return ((P$.LongPipeline$8||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.LongPipeline$8$1||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$8$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedLong']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
if (this.$finals$.predicate.test$(t)) this.downstream.accept$(t);
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {predicate: this.$finals$.predicate}, sink],P$.LongPipeline$8$1));
});
})()
), Clazz.new_($I$(12).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {predicate: predicate}, this, $I$(3).LONG_VALUE, $I$(10).NOT_SIZED],P$.LongPipeline$8));
});

Clazz.newMeth(C$, 'peek$java_util_function_LongConsumer', function (action) {
$I$(11).requireNonNull$TT(action);
return ((P$.LongPipeline$9||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatelessOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.LongPipeline$9$1||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$9$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedLong']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
this.$finals$.action.accept$(t);
this.downstream.accept$(t);
});
})()
), Clazz.new_($I$(8).c$$java_util_stream_Sink, [this, {action: this.$finals$.action}, sink],P$.LongPipeline$9$1));
});
})()
), Clazz.new_($I$(12).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {action: action}, this, $I$(3).LONG_VALUE, 0],P$.LongPipeline$9));
});

Clazz.newMeth(C$, 'limit$J', function (maxSize) {
if (maxSize < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(maxSize)]);
return $I$(15).makeLong$java_util_stream_AbstractPipeline$J$J(this, 0, maxSize);
});

Clazz.newMeth(C$, 'skip$J', function (n) {
if (n < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[Long.toString$J(n)]);
if (n == 0) return this;
 else return $I$(15).makeLong$java_util_stream_AbstractPipeline$J$J(this, n, -1);
});

Clazz.newMeth(C$, 'sorted$', function () {
return $I$(16).makeLong$java_util_stream_AbstractPipeline(this);
});

Clazz.newMeth(C$, 'distinct$', function () {
return this.boxed$().distinct$().mapToLong$java_util_function_ToLongFunction(((P$.LongPipeline$lambda4||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToLongFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (i) { return (((i).longValue$()|0));});
})()
), Clazz.new_(P$.LongPipeline$lambda4.$init$, [this, null])));
});

Clazz.newMeth(C$, 'forEach$java_util_function_LongConsumer', function (action) {
this.evaluate$java_util_stream_TerminalOp($I$(17).makeLong$java_util_function_LongConsumer$Z(action, false));
});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_LongConsumer', function (action) {
this.evaluate$java_util_stream_TerminalOp($I$(17).makeLong$java_util_function_LongConsumer$Z(action, true));
});

Clazz.newMeth(C$, 'sum$', function () {
return this.reduce$J$java_util_function_LongBinaryOperator(0, (function($class$){((P$.LongPipeline$lambda5||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongBinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsLong$', function (t,u) { return $class$.sum$J$J.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.LongPipeline$lambda5.$init$, [this, null])})(Long));
});

Clazz.newMeth(C$, 'min$', function () {
return this.reduce$java_util_function_LongBinaryOperator((function($class$){((P$.LongPipeline$lambda6||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongBinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsLong$', function (t,u) { return $class$.min.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.LongPipeline$lambda6.$init$, [this, null])})(Math));
});

Clazz.newMeth(C$, 'max$', function () {
return this.reduce$java_util_function_LongBinaryOperator((function($class$){((P$.LongPipeline$lambda7||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongBinaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsLong$', function (t,u) { return $class$.max.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.LongPipeline$lambda7.$init$, [this, null])})(Math));
});

Clazz.newMeth(C$, 'average$', function () {
var avg=this.collect$java_util_function_Supplier$java_util_function_ObjLongConsumer$java_util_function_BiConsumer(((P$.LongPipeline$lambda8||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (Clazz.array(Long.TYPE, [2]));});
})()
), Clazz.new_(P$.LongPipeline$lambda8.$init$, [this, null])), ((P$.LongPipeline$lambda9||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjLongConsumer', 1);

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
), Clazz.new_(P$.LongPipeline$lambda9.$init$, [this, null])), ((P$.LongPipeline$lambda10||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

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
), Clazz.new_(P$.LongPipeline$lambda10.$init$, [this, null])));
return avg[0] > 0 ? $I$(18).of$D(avg[1] / avg[0]) : $I$(18).empty$();
});

Clazz.newMeth(C$, 'count$', function () {
return this.map$java_util_function_LongUnaryOperator(((P$.LongPipeline$lambda11||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongUnaryOperator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsLong$', function (e) { return (1);});
})()
), Clazz.new_(P$.LongPipeline$lambda11.$init$, [this, null]))).sum$();
});

Clazz.newMeth(C$, 'summaryStatistics$', function () {
return this.collect$java_util_function_Supplier$java_util_function_ObjLongConsumer$java_util_function_BiConsumer(((P$.LongPipeline$lambda12||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(19),[])});
})()
), Clazz.new_(P$.LongPipeline$lambda12.$init$, [this, null])), (function($class$){((P$.LongPipeline$lambda13||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ObjLongConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$'], function (t,u) { return t.accept$J.apply(t,[u])});
})()
)); return Clazz.new_(P$.LongPipeline$lambda13.$init$, [this, null])})($I$(19)), (function($class$){((P$.LongPipeline$lambda14||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$'], function (t,u) { return t.combine$java_util_LongSummaryStatistics.apply(t,[u])});
})()
)); return Clazz.new_(P$.LongPipeline$lambda14.$init$, [this, null])})($I$(19)));
});

Clazz.newMeth(C$, 'reduce$J$java_util_function_LongBinaryOperator', function (identity, op) {
return (this.evaluate$java_util_stream_TerminalOp($I$(20).makeLong$J$java_util_function_LongBinaryOperator(identity, op))).longValue$();
});

Clazz.newMeth(C$, 'reduce$java_util_function_LongBinaryOperator', function (op) {
return this.evaluate$java_util_stream_TerminalOp($I$(20).makeLong$java_util_function_LongBinaryOperator(op));
});

Clazz.newMeth(C$, ['collect$java_util_function_Supplier$java_util_function_ObjLongConsumer$java_util_function_BiConsumer'], function (supplier, accumulator, combiner) {
var operator=((P$.LongPipeline$lambda15||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

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
), Clazz.new_(P$.LongPipeline$lambda15.$init$, [this, {combiner: combiner}]));
return this.evaluate$java_util_stream_TerminalOp($I$(20).makeLong$java_util_function_Supplier$java_util_function_ObjLongConsumer$java_util_function_BinaryOperator(supplier, accumulator, operator));
});

Clazz.newMeth(C$, 'anyMatch$java_util_function_LongPredicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(21).makeLong$java_util_function_LongPredicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(22).ANY))).booleanValue$();
});

Clazz.newMeth(C$, 'allMatch$java_util_function_LongPredicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(21).makeLong$java_util_function_LongPredicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(22).ALL))).booleanValue$();
});

Clazz.newMeth(C$, 'noneMatch$java_util_function_LongPredicate', function (predicate) {
return (this.evaluate$java_util_stream_TerminalOp($I$(21).makeLong$java_util_function_LongPredicate$java_util_stream_MatchOps_MatchKind(predicate, $I$(22).NONE))).booleanValue$();
});

Clazz.newMeth(C$, 'findFirst$', function () {
return this.evaluate$java_util_stream_TerminalOp($I$(23).makeLong$Z(true));
});

Clazz.newMeth(C$, 'findAny$', function () {
return this.evaluate$java_util_stream_TerminalOp($I$(23).makeLong$Z(false));
});

Clazz.newMeth(C$, 'toArray$', function () {
return $I$(4).flattenLong$java_util_stream_Node_OfLong(this.evaluateToArrayNode$java_util_function_IntFunction(((P$.LongPipeline$lambda16||
(function(){var C$=Clazz.newClass(P$, "LongPipeline$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(Long, [t.intValue()])});
})()
), Clazz.new_(P$.LongPipeline$lambda16.$init$, [this, null])))).asPrimitiveArray$();
});
;
(function(){var C$=Clazz.newClass(P$.LongPipeline, "Head", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.LongPipeline');

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

Clazz.newMeth(C$, 'forEach$java_util_function_LongConsumer', function (action) {
if (!this.isParallel$()) {
P$.LongPipeline.adapt$java_util_Spliterator(this.sourceStageSpliterator$()).forEachRemaining$java_util_function_LongConsumer(action);
} else {
C$.superclazz.prototype.forEach$java_util_function_LongConsumer.apply(this, [action]);
}});

Clazz.newMeth(C$, 'forEachOrdered$java_util_function_LongConsumer', function (action) {
if (!this.isParallel$()) {
P$.LongPipeline.adapt$java_util_Spliterator(this.sourceStageSpliterator$()).forEachRemaining$java_util_function_LongConsumer(action);
} else {
C$.superclazz.prototype.forEachOrdered$java_util_function_LongConsumer.apply(this, [action]);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.LongPipeline, "StatelessOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.LongPipeline');

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
(function(){var C$=Clazz.newClass(P$.LongPipeline, "StatefulOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.LongPipeline');

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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
