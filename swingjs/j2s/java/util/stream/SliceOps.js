(function(){var P$=Clazz.newPackage("java.util.stream"),p$1={},I$=[[0,'java.util.stream.Nodes','java.util.stream.StreamOpFlag','java.util.stream.StreamShape',['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfRef'],['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfInt'],['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfLong'],['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfDouble'],['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfRef'],['java.util.stream.SliceOps','.SliceTask'],['java.util.stream.Sink','.ChainedReference'],['java.util.stream.ReferencePipeline','.StatefulOp'],['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfInt'],['java.util.stream.Sink','.ChainedInt'],['java.util.stream.IntPipeline','.StatefulOp'],['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfLong'],['java.util.stream.Sink','.ChainedLong'],['java.util.stream.LongPipeline','.StatefulOp'],['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfDouble'],['java.util.stream.Sink','.ChainedDouble'],['java.util.stream.DoublePipeline','.StatefulOp']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SliceOps", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calcSize$J$J$J', function (size, skip, limit) {
return size >= 0 ? Math.max(-1, Math.min(size - skip, limit)) : -1;
}, 1);

Clazz.newMeth(C$, 'calcSliceFence$J$J', function (skip, limit) {
var sliceFence=limit >= 0 ? skip + limit : 9223372036854775807;
return (sliceFence >= 0) ? sliceFence : 9223372036854775807;
}, 1);

Clazz.newMeth(C$, 'sliceSpliterator$java_util_stream_StreamShape$java_util_Spliterator$J$J', function (shape, s, skip, limit) {
Clazz.assert(C$, this, function(){return s.hasCharacteristics$I(16384)});
var sliceFence=C$.calcSliceFence$J$J(skip, limit);
switch (shape) {
case $I$(3).REFERENCE:
return Clazz.new_($I$(4).c$$java_util_Spliterator$J$J,[s, skip, sliceFence]);
case $I$(3).INT_VALUE:
return Clazz.new_($I$(5).c$$java_util_Spliterator_OfInt$J$J,[s, skip, sliceFence]);
case $I$(3).LONG_VALUE:
return Clazz.new_($I$(6).c$$java_util_Spliterator_OfLong$J$J,[s, skip, sliceFence]);
case $I$(3).DOUBLE_VALUE:
return Clazz.new_($I$(7).c$$java_util_Spliterator_OfDouble$J$J,[s, skip, sliceFence]);
default:
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Unknown shape " + shape]);
}
}, 1);

Clazz.newMeth(C$, 'castingArray$', function () {
return ((P$.SliceOps$lambda1||
(function(){var C$=Clazz.newClass(P$, "SliceOps$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (size) { return (Clazz.array(java.lang.Object, [size]));});
})()
), Clazz.new_(P$.SliceOps$lambda1.$init$, [this, null]));
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_stream_AbstractPipeline$J$J', function (upstream, skip, limit) {
if (skip < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Skip must be non-negative: " + skip]);
return ((P$.SliceOps$1||
(function(){var C$=Clazz.newClass(P$, "SliceOps$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatefulOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'unorderedSkipLimitSpliterator$java_util_Spliterator$J$J$J', function (s, skip, limit, sizeIfKnown) {
if (skip <= sizeIfKnown) {
limit=limit >= 0 ? Math.min(limit, sizeIfKnown - skip) : sizeIfKnown - skip;
skip=0;
}return Clazz.new_($I$(8).c$$java_util_Spliterator$J$J,[s, skip, limit]);
});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size > 0 && spliterator.hasCharacteristics$I(16384) ) {
return Clazz.new_($I$(4).c$$java_util_Spliterator$J$J,[helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, P$.SliceOps.calcSliceFence$J$J(this.$finals$.skip, this.$finals$.limit)]);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.unorderedSkipLimitSpliterator$java_util_Spliterator$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
} else {
return Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, P$.SliceOps.castingArray$(), this.$finals$.skip, this.$finals$.limit]).invoke$().spliterator$();
}});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction', function (helper, spliterator, generator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size > 0 && spliterator.hasCharacteristics$I(16384) ) {
var s=P$.SliceOps.sliceSpliterator$java_util_stream_StreamShape$java_util_Spliterator$J$J(helper.getSourceShape$(), spliterator, this.$finals$.skip, this.$finals$.limit);
return $I$(1).collect$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction(helper, s, true, generator);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
var s=this.unorderedSkipLimitSpliterator$java_util_Spliterator$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
return $I$(1).collect$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction(this, s, true, generator);
} else {
return Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, generator, this.$finals$.skip, this.$finals$.limit]).invoke$();
}});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.SliceOps$1$1||
(function(){var C$=Clazz.newClass(P$, "SliceOps$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.n=0;
this.m=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.n=this.$finals$.skip;
this.m=this.$finals$.limit >= 0 ? this.$finals$.limit : 9223372036854775807;
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(P$.SliceOps.calcSize$J$J$J(size, this.$finals$.skip, this.m));
});

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
if (this.n == 0) {
if (this.m > 0) {
this.m--;
this.downstream.accept$(t);
}} else {
this.n--;
}});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.m == 0 || this.downstream.cancellationRequested$() ;
});
})()
), Clazz.new_($I$(10).c$$java_util_stream_Sink, [this, {skip: this.$finals$.skip, limit: this.$finals$.limit}, sink],P$.SliceOps$1$1));
});
})()
), Clazz.new_($I$(11).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {skip: skip, limit: limit}, upstream, $I$(3).REFERENCE, C$.flags$J(limit)],P$.SliceOps$1));
}, 1);

Clazz.newMeth(C$, 'makeInt$java_util_stream_AbstractPipeline$J$J', function (upstream, skip, limit) {
if (skip < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Skip must be non-negative: " + skip]);
return ((P$.SliceOps$2||
(function(){var C$=Clazz.newClass(P$, "SliceOps$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.IntPipeline','.StatefulOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'unorderedSkipLimitSpliterator$java_util_Spliterator_OfInt$J$J$J', function (s, skip, limit, sizeIfKnown) {
if (skip <= sizeIfKnown) {
limit=limit >= 0 ? Math.min(limit, sizeIfKnown - skip) : sizeIfKnown - skip;
skip=0;
}return Clazz.new_($I$(12).c$$java_util_Spliterator_OfInt$J$J,[s, skip, limit]);
});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size > 0 && spliterator.hasCharacteristics$I(16384) ) {
return Clazz.new_($I$(5).c$$java_util_Spliterator_OfInt$J$J,[helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, P$.SliceOps.calcSliceFence$J$J(this.$finals$.skip, this.$finals$.limit)]);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfInt$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
} else {
return Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, ((P$.SliceOps$2$lambda2||
(function(){var C$=Clazz.newClass(P$, "SliceOps$2$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(Integer, [t.intValue()])});
})()
), Clazz.new_(P$.SliceOps$2$lambda2.$init$, [this, null])), this.$finals$.skip, this.$finals$.limit]).invoke$().spliterator$();
}});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction', function (helper, spliterator, generator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size > 0 && spliterator.hasCharacteristics$I(16384) ) {
var s=P$.SliceOps.sliceSpliterator$java_util_stream_StreamShape$java_util_Spliterator$J$J(helper.getSourceShape$(), spliterator, this.$finals$.skip, this.$finals$.limit);
return $I$(1).collectInt$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, s, true);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
var s=this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfInt$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
return $I$(1).collectInt$java_util_stream_PipelineHelper$java_util_Spliterator$Z(this, s, true);
} else {
return Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, generator, this.$finals$.skip, this.$finals$.limit]).invoke$();
}});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.SliceOps$2$1||
(function(){var C$=Clazz.newClass(P$, "SliceOps$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedInt']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.n=0;
this.m=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.n=this.$finals$.skip;
this.m=this.$finals$.limit >= 0 ? this.$finals$.limit : 9223372036854775807;
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(P$.SliceOps.calcSize$J$J$J(size, this.$finals$.skip, this.m));
});

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
if (this.n == 0) {
if (this.m > 0) {
this.m--;
this.downstream.accept$(t);
}} else {
this.n--;
}});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.m == 0 || this.downstream.cancellationRequested$() ;
});
})()
), Clazz.new_($I$(13).c$$java_util_stream_Sink, [this, {skip: this.$finals$.skip, limit: this.$finals$.limit}, sink],P$.SliceOps$2$1));
});
})()
), Clazz.new_($I$(14).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {skip: skip, limit: limit}, upstream, $I$(3).INT_VALUE, C$.flags$J(limit)],P$.SliceOps$2));
}, 1);

Clazz.newMeth(C$, 'makeLong$java_util_stream_AbstractPipeline$J$J', function (upstream, skip, limit) {
if (skip < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Skip must be non-negative: " + skip]);
return ((P$.SliceOps$3||
(function(){var C$=Clazz.newClass(P$, "SliceOps$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.LongPipeline','.StatefulOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'unorderedSkipLimitSpliterator$java_util_Spliterator_OfLong$J$J$J', function (s, skip, limit, sizeIfKnown) {
if (skip <= sizeIfKnown) {
limit=limit >= 0 ? Math.min(limit, sizeIfKnown - skip) : sizeIfKnown - skip;
skip=0;
}return Clazz.new_($I$(15).c$$java_util_Spliterator_OfLong$J$J,[s, skip, limit]);
});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size > 0 && spliterator.hasCharacteristics$I(16384) ) {
return Clazz.new_($I$(6).c$$java_util_Spliterator_OfLong$J$J,[helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, P$.SliceOps.calcSliceFence$J$J(this.$finals$.skip, this.$finals$.limit)]);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfLong$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
} else {
return Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, ((P$.SliceOps$3$lambda3||
(function(){var C$=Clazz.newClass(P$, "SliceOps$3$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(Long, [t.intValue()])});
})()
), Clazz.new_(P$.SliceOps$3$lambda3.$init$, [this, null])), this.$finals$.skip, this.$finals$.limit]).invoke$().spliterator$();
}});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction', function (helper, spliterator, generator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size > 0 && spliterator.hasCharacteristics$I(16384) ) {
var s=P$.SliceOps.sliceSpliterator$java_util_stream_StreamShape$java_util_Spliterator$J$J(helper.getSourceShape$(), spliterator, this.$finals$.skip, this.$finals$.limit);
return $I$(1).collectLong$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, s, true);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
var s=this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfLong$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
return $I$(1).collectLong$java_util_stream_PipelineHelper$java_util_Spliterator$Z(this, s, true);
} else {
return Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, generator, this.$finals$.skip, this.$finals$.limit]).invoke$();
}});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.SliceOps$3$1||
(function(){var C$=Clazz.newClass(P$, "SliceOps$3$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedLong']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.n=0;
this.m=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.n=this.$finals$.skip;
this.m=this.$finals$.limit >= 0 ? this.$finals$.limit : 9223372036854775807;
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(P$.SliceOps.calcSize$J$J$J(size, this.$finals$.skip, this.m));
});

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
if (this.n == 0) {
if (this.m > 0) {
this.m--;
this.downstream.accept$(t);
}} else {
this.n--;
}});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.m == 0 || this.downstream.cancellationRequested$() ;
});
})()
), Clazz.new_($I$(16).c$$java_util_stream_Sink, [this, {skip: this.$finals$.skip, limit: this.$finals$.limit}, sink],P$.SliceOps$3$1));
});
})()
), Clazz.new_($I$(17).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {skip: skip, limit: limit}, upstream, $I$(3).LONG_VALUE, C$.flags$J(limit)],P$.SliceOps$3));
}, 1);

Clazz.newMeth(C$, 'makeDouble$java_util_stream_AbstractPipeline$J$J', function (upstream, skip, limit) {
if (skip < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Skip must be non-negative: " + skip]);
return ((P$.SliceOps$4||
(function(){var C$=Clazz.newClass(P$, "SliceOps$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.DoublePipeline','.StatefulOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'unorderedSkipLimitSpliterator$java_util_Spliterator_OfDouble$J$J$J', function (s, skip, limit, sizeIfKnown) {
if (skip <= sizeIfKnown) {
limit=limit >= 0 ? Math.min(limit, sizeIfKnown - skip) : sizeIfKnown - skip;
skip=0;
}return Clazz.new_($I$(18).c$$java_util_Spliterator_OfDouble$J$J,[s, skip, limit]);
});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size > 0 && spliterator.hasCharacteristics$I(16384) ) {
return Clazz.new_($I$(7).c$$java_util_Spliterator_OfDouble$J$J,[helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, P$.SliceOps.calcSliceFence$J$J(this.$finals$.skip, this.$finals$.limit)]);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfDouble$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
} else {
return Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, ((P$.SliceOps$4$lambda4||
(function(){var C$=Clazz.newClass(P$, "SliceOps$4$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(Double, [t.intValue()])});
})()
), Clazz.new_(P$.SliceOps$4$lambda4.$init$, [this, null])), this.$finals$.skip, this.$finals$.limit]).invoke$().spliterator$();
}});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction', function (helper, spliterator, generator) {
var size=helper.exactOutputSizeIfKnown$java_util_Spliterator(spliterator);
if (size > 0 && spliterator.hasCharacteristics$I(16384) ) {
var s=P$.SliceOps.sliceSpliterator$java_util_stream_StreamShape$java_util_Spliterator$J$J(helper.getSourceShape$(), spliterator, this.$finals$.skip, this.$finals$.limit);
return $I$(1).collectDouble$java_util_stream_PipelineHelper$java_util_Spliterator$Z(helper, s, true);
} else if (!$I$(2).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
var s=this.unorderedSkipLimitSpliterator$java_util_Spliterator_OfDouble$J$J$J(helper.wrapSpliterator$java_util_Spliterator(spliterator), this.$finals$.skip, this.$finals$.limit, size);
return $I$(1).collectDouble$java_util_stream_PipelineHelper$java_util_Spliterator$Z(this, s, true);
} else {
return Clazz.new_($I$(9).c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J,[this, helper, spliterator, generator, this.$finals$.skip, this.$finals$.limit]).invoke$();
}});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
return ((P$.SliceOps$4$1||
(function(){var C$=Clazz.newClass(P$, "SliceOps$4$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedDouble']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.n=0;
this.m=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.n=this.$finals$.skip;
this.m=this.$finals$.limit >= 0 ? this.$finals$.limit : 9223372036854775807;
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(P$.SliceOps.calcSize$J$J$J(size, this.$finals$.skip, this.m));
});

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
if (this.n == 0) {
if (this.m > 0) {
this.m--;
this.downstream.accept$(t);
}} else {
this.n--;
}});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.m == 0 || this.downstream.cancellationRequested$() ;
});
})()
), Clazz.new_($I$(19).c$$java_util_stream_Sink, [this, {skip: this.$finals$.skip, limit: this.$finals$.limit}, sink],P$.SliceOps$4$1));
});
})()
), Clazz.new_($I$(20).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, {skip: skip, limit: limit}, upstream, $I$(3).DOUBLE_VALUE, C$.flags$J(limit)],P$.SliceOps$4));
}, 1);

Clazz.newMeth(C$, 'flags$J', function (limit) {
return $I$(2).NOT_SIZED | ((limit != -1) ? $I$(2).IS_SHORT_CIRCUIT : 0);
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.SliceOps, "SliceTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.AbstractShortCircuitTask');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.op=null;
this.generator=null;
this.targetOffset=0;
this.$targetSize=0;
this.thisNodeSize=0;
this.completed=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_stream_AbstractPipeline$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction$J$J'], function (op, helper, spliterator, generator, offset, size) {
C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator.apply(this, [helper, spliterator]);
C$.$init$.apply(this);
this.op=op;
this.generator=generator;
this.targetOffset=offset;
this.$targetSize=size;
}, 1);

Clazz.newMeth(C$, ['c$$java_util_stream_SliceOps_SliceTask$java_util_Spliterator'], function (parent, spliterator) {
C$.superclazz.c$$TK$java_util_Spliterator.apply(this, [parent, spliterator]);
C$.$init$.apply(this);
this.op=parent.op;
this.generator=parent.generator;
this.targetOffset=parent.targetOffset;
this.$targetSize=parent.$targetSize;
}, 1);

Clazz.newMeth(C$, ['makeChild$java_util_Spliterator'], function (spliterator) {
return Clazz.new_(C$.c$$java_util_stream_SliceOps_SliceTask$java_util_Spliterator,[this, spliterator]);
});

Clazz.newMeth(C$, 'getEmptyResult$', function () {
return $I$(1).emptyNode$java_util_stream_StreamShape(this.op.getOutputShape$());
});

Clazz.newMeth(C$, 'doLeaf$', function () {
if (this.isRoot$()) {
var sizeIfKnown=$I$(2).SIZED.isPreserved$I(this.op.sourceOrOpFlags) ? this.op.exactOutputSizeIfKnown$java_util_Spliterator(this.spliterator) : -1;
var nb=this.op.makeNodeBuilder$J$java_util_function_IntFunction(sizeIfKnown, this.generator);
var opSink=this.op.opWrapSink$I$java_util_stream_Sink(this.helper.getStreamAndOpFlags$(), nb);
this.helper.copyIntoWithCancel$java_util_stream_Sink$java_util_Spliterator(this.helper.wrapSink$java_util_stream_Sink(opSink), this.spliterator);
return nb.build$();
} else {
var node=this.helper.wrapAndCopyInto$TS$java_util_Spliterator(this.helper.makeNodeBuilder$J$java_util_function_IntFunction(-1, this.generator), this.spliterator).build$();
this.thisNodeSize=node.count$();
this.completed=true;
this.spliterator=null;
return node;
}});

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter', function ($caller) {
if (!this.isLeaf$()) {
var result;
this.thisNodeSize=this.leftChild.thisNodeSize + this.rightChild.thisNodeSize;
if (this.canceled) {
this.thisNodeSize=0;
result=this.getEmptyResult$();
} else if (this.thisNodeSize == 0) result=this.getEmptyResult$();
 else if (this.leftChild.thisNodeSize == 0) result=this.rightChild.getLocalResult$();
 else {
result=$I$(1).conc$java_util_stream_StreamShape$java_util_stream_Node$java_util_stream_Node(this.op.getOutputShape$(), this.leftChild.getLocalResult$(), this.rightChild.getLocalResult$());
}this.setLocalResult$TR(this.isRoot$() ? p$1.doTruncate$java_util_stream_Node.apply(this, [result]) : result);
this.completed=true;
}if (this.$targetSize >= 0 && !this.isRoot$()  && p$1.isLeftCompleted$J.apply(this, [this.targetOffset + this.$targetSize]) ) this.cancelLaterNodes$();
C$.superclazz.prototype.onCompletion$java_util_concurrent_CountedCompleter.apply(this, [$caller]);
});

Clazz.newMeth(C$, 'cancel$', function () {
C$.superclazz.prototype.cancel$.apply(this, []);
if (this.completed) this.setLocalResult$TR(this.getEmptyResult$());
});

Clazz.newMeth(C$, 'doTruncate$java_util_stream_Node', function (input) {
var to=this.$targetSize >= 0 ? Math.min(input.count$(), this.targetOffset + this.$targetSize) : this.thisNodeSize;
return input.truncate$J$J$java_util_function_IntFunction(this.targetOffset, to, this.generator);
}, p$1);

Clazz.newMeth(C$, 'isLeftCompleted$J', function (target) {
var size=this.completed ? this.thisNodeSize : p$1.completedSize$J.apply(this, [target]);
if (size >= target) return true;
for (var parent=this.getParent$(), node=this; parent != null ; node=parent, parent=parent.getParent$()) {
if (node === parent.rightChild ) {
var left=parent.leftChild;
if (left != null ) {
size+=p$1.completedSize$J.apply(left, [target]);
if (size >= target) return true;
}}}
return size >= target;
}, p$1);

Clazz.newMeth(C$, 'completedSize$J', function (target) {
if (this.completed) return this.thisNodeSize;
 else {
var left=this.leftChild;
var right=this.rightChild;
if (left == null  || right == null  ) {
return this.thisNodeSize;
} else {
var leftSize=p$1.completedSize$J.apply(left, [target]);
return (leftSize >= target) ? leftSize : leftSize + p$1.completedSize$J.apply(right, [target]);
}}}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
