(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.ReduceOps','java.util.LinkedHashSet','java.util.HashSet','java.util.AbstractCollection','java.util.stream.Nodes','java.util.stream.StreamOpFlag','java.util.concurrent.atomic.AtomicBoolean','java.util.concurrent.ConcurrentHashMap','java.util.stream.ForEachOps','Boolean',['java.util.stream.StreamSpliterators','.DistinctSpliterator'],'java.util.Objects',['java.util.stream.Sink','.ChainedReference'],['java.util.stream.ReferencePipeline','.StatefulOp'],'java.util.stream.StreamShape']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DistinctOps");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_stream_AbstractPipeline', function (upstream) {
return ((P$.DistinctOps$1||
(function(){var C$=Clazz.newClass(P$, "DistinctOps$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.ReferencePipeline','.StatefulOp']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['reduce$java_util_stream_PipelineHelper$java_util_Spliterator','reducenull'], function (helper, spliterator) {
var reduceOp=$I$(1).makeRef$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BiConsumer(((P$.DistinctOps$1$lambda1||
(function(){var C$=Clazz.newClass(P$, "DistinctOps$1$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(2),[])});
})()
), Clazz.new_(P$.DistinctOps$1$lambda1.$init$, [this, null])), (function($class$){((P$.DistinctOps$1$lambda2||
(function(){var C$=Clazz.newClass(P$, "DistinctOps$1$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$', function (t,u) { return t.add$TE.apply(t,[u])});
})()
)); return Clazz.new_(P$.DistinctOps$1$lambda2.$init$, [this, null])})($I$(3)), (function($class$){((P$.DistinctOps$1$lambda3||
(function(){var C$=Clazz.newClass(P$, "DistinctOps$1$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$'], function (t,u) { return t.addAll$java_util_Collection.apply(t,[u])});
})()
)); return Clazz.new_(P$.DistinctOps$1$lambda3.$init$, [this, null])})($I$(4)));
return $I$(5).node$java_util_Collection(reduceOp.evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator(helper, spliterator));
});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction', function (helper, spliterator, generator) {
if ($I$(6).DISTINCT.isKnown$I(helper.getStreamAndOpFlags$())) {
return helper.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(spliterator, false, generator);
} else if ($I$(6).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.reduce$java_util_stream_PipelineHelper$java_util_Spliterator(helper, spliterator);
} else {
var seenNull=Clazz.new_($I$(7).c$$Z,[false]);
var map=Clazz.new_($I$(8));
var forEachOp=$I$(9).makeRef$java_util_function_Consumer$Z(((P$.DistinctOps$1$lambda4||
(function(){var C$=Clazz.newClass(P$, "DistinctOps$1$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (t) {
if (t == null ) this.$finals$.seenNull.set$Z(true);
 else this.$finals$.map.putIfAbsent$TK$TV(t, $I$(10).TRUE);
});
})()
), Clazz.new_(P$.DistinctOps$1$lambda4.$init$, [this, {seenNull: seenNull, map: map}])), false);
forEachOp.evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator(helper, spliterator);
var keys=map.keySet$();
if (seenNull.get$()) {
keys=Clazz.new_($I$(3).c$$java_util_Collection,[keys]);
keys.add$TE(null);
}return $I$(5).node$java_util_Collection(keys);
}});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
if ($I$(6).DISTINCT.isKnown$I(helper.getStreamAndOpFlags$())) {
return helper.wrapSpliterator$java_util_Spliterator(spliterator);
} else if ($I$(6).ORDERED.isKnown$I(helper.getStreamAndOpFlags$())) {
return this.reduce$java_util_stream_PipelineHelper$java_util_Spliterator(helper, spliterator).spliterator$();
} else {
return Clazz.new_($I$(11).c$$java_util_Spliterator,[helper.wrapSpliterator$java_util_Spliterator(spliterator)]);
}});

Clazz.newMeth(C$, 'opWrapSink$I$java_util_stream_Sink', function (flags, sink) {
$I$(12).requireNonNull$TT(sink);
if ($I$(6).DISTINCT.isKnown$I(flags)) {
return sink;
} else if ($I$(6).SORTED.isKnown$I(flags)) {
return ((P$.DistinctOps$1$1||
(function(){var C$=Clazz.newClass(P$, "DistinctOps$1$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.seenNull=false;
this.lastSeen=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.seenNull=false;
this.lastSeen=null;
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, 'end$', function () {
this.seenNull=false;
this.lastSeen=null;
this.downstream.end$();
});

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
if (t == null ) {
if (!this.seenNull) {
this.seenNull=true;
this.downstream.accept$(this.lastSeen=null);
}} else if (this.lastSeen == null  || !t.equals$O(this.lastSeen) ) {
this.downstream.accept$(this.lastSeen=t);
}});
})()
), Clazz.new_($I$(13).c$$java_util_stream_Sink, [this, null, sink],P$.DistinctOps$1$1));
} else {
return ((P$.DistinctOps$1$2||
(function(){var C$=Clazz.newClass(P$, "DistinctOps$1$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.stream.Sink','.ChainedReference']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.seen=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.seen=Clazz.new_($I$(3));
this.downstream.begin$J(-1);
});

Clazz.newMeth(C$, 'end$', function () {
this.seen=null;
this.downstream.end$();
});

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
if (!this.seen.contains$O(t)) {
this.seen.add$TE(t);
this.downstream.accept$(t);
}});
})()
), Clazz.new_($I$(13).c$$java_util_stream_Sink, [this, null, sink],P$.DistinctOps$1$2));
}});
})()
), Clazz.new_($I$(14).c$$java_util_stream_AbstractPipeline$java_util_stream_StreamShape$I, [this, null, upstream, $I$(15).REFERENCE, $I$(6).IS_DISTINCT | $I$(6).NOT_SIZED],P$.DistinctOps$1));
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
