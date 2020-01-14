(function(){var P$=Clazz.newPackage("java.util.stream"),p$1={},I$=[[0,'java.util.stream.StreamOpFlag','java.util.stream.Streams','java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractPipeline", null, 'java.util.stream.PipelineHelper', 'java.util.stream.BaseStream');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sourceStage=null;
this.previousStage=null;
this.sourceOrOpFlags=0;
this.nextStage=null;
this.depth=0;
this.combinedFlags=0;
this.sourceSpliterator=null;
this.sourceSupplier=null;
this.linkedOrConsumed=false;
this.sourceAnyStateful=false;
this.sourceCloseAction=null;
this.parallel=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier$I$Z', function (source, sourceFlags, parallel) {
Clazz.super_(C$, this,1);
this.previousStage=null;
this.sourceSupplier=source;
this.sourceStage=this;
this.sourceOrOpFlags=sourceFlags & $I$(1).STREAM_MASK;
this.combinedFlags=(~(this.sourceOrOpFlags << 1)) & $I$(1).INITIAL_OPS_VALUE;
this.depth=0;
this.parallel=parallel;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$I$Z', function (source, sourceFlags, parallel) {
Clazz.super_(C$, this,1);
this.previousStage=null;
this.sourceSpliterator=source;
this.sourceStage=this;
this.sourceOrOpFlags=sourceFlags & $I$(1).STREAM_MASK;
this.combinedFlags=(~(this.sourceOrOpFlags << 1)) & $I$(1).INITIAL_OPS_VALUE;
this.depth=0;
this.parallel=parallel;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_AbstractPipeline$I', function (previousStage, opFlags) {
Clazz.super_(C$, this,1);
if (previousStage.linkedOrConsumed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["stream has already been operated upon or closed"]);
previousStage.linkedOrConsumed=true;
previousStage.nextStage=this;
this.previousStage=previousStage;
this.sourceOrOpFlags=opFlags & $I$(1).OP_MASK;
this.combinedFlags=$I$(1).combineOpFlags$I$I(opFlags, previousStage.combinedFlags);
this.sourceStage=previousStage.sourceStage;
if (this.opIsStateful$()) this.sourceStage.sourceAnyStateful=true;
this.depth=previousStage.depth + 1;
}, 1);

Clazz.newMeth(C$, ['evaluate$java_util_stream_TerminalOp'], function (terminalOp) {
Clazz.assert(C$, this, function(){return this.getOutputShape$() === terminalOp.inputShape$() });
if (this.linkedOrConsumed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["stream has already been operated upon or closed"]);
this.linkedOrConsumed=true;
return this.isParallel$() ? terminalOp.evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator(this, p$1.sourceSpliterator$I.apply(this, [terminalOp.getOpFlags$()])) : terminalOp.evaluateSequential$(this, p$1.sourceSpliterator$I.apply(this, [terminalOp.getOpFlags$()]));
});

Clazz.newMeth(C$, 'evaluateToArrayNode$java_util_function_IntFunction', function (generator) {
if (this.linkedOrConsumed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["stream has already been operated upon or closed"]);
this.linkedOrConsumed=true;
if (this.isParallel$() && this.previousStage != null   && this.opIsStateful$() ) {
return this.opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction(this.previousStage, p$1.sourceSpliterator$I.apply(this.previousStage, [0]), generator);
} else {
return this.evaluate$java_util_Spliterator$Z$java_util_function_IntFunction(p$1.sourceSpliterator$I.apply(this, [0]), true, generator);
}});

Clazz.newMeth(C$, 'sourceStageSpliterator$', function () {
if (this !== this.sourceStage ) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (this.linkedOrConsumed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["stream has already been operated upon or closed"]);
this.linkedOrConsumed=true;
if (this.sourceStage.sourceSpliterator != null ) {
var s=this.sourceStage.sourceSpliterator;
this.sourceStage.sourceSpliterator=null;
return s;
} else if (this.sourceStage.sourceSupplier != null ) {
var s=this.sourceStage.sourceSupplier.get$();
this.sourceStage.sourceSupplier=null;
return s;
} else {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["source already consumed or closed"]);
}});

Clazz.newMeth(C$, 'sequential$', function () {
this.sourceStage.parallel=false;
return this;
});

Clazz.newMeth(C$, 'parallel$', function () {
this.sourceStage.parallel=true;
return this;
});

Clazz.newMeth(C$, 'close$', function () {
this.linkedOrConsumed=true;
this.sourceSupplier=null;
this.sourceSpliterator=null;
if (this.sourceStage.sourceCloseAction != null ) {
var closeAction=this.sourceStage.sourceCloseAction;
this.sourceStage.sourceCloseAction=null;
closeAction.run$();
}});

Clazz.newMeth(C$, 'onClose$Runnable', function (closeHandler) {
var existingHandler=this.sourceStage.sourceCloseAction;
this.sourceStage.sourceCloseAction=(existingHandler == null ) ? closeHandler : $I$(2).composeWithExceptions$Runnable$Runnable(existingHandler, closeHandler);
return this;
});

Clazz.newMeth(C$, 'spliterator$', function () {
if (this.linkedOrConsumed) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["stream has already been operated upon or closed"]);
this.linkedOrConsumed=true;
if (this === this.sourceStage ) {
if (this.sourceStage.sourceSpliterator != null ) {
var s=this.sourceStage.sourceSpliterator;
this.sourceStage.sourceSpliterator=null;
return s;
} else if (this.sourceStage.sourceSupplier != null ) {
var s=this.sourceStage.sourceSupplier;
this.sourceStage.sourceSupplier=null;
return this.lazySpliterator$java_util_function_Supplier(s);
} else {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["source already consumed or closed"]);
}} else {
return this.wrap$java_util_stream_PipelineHelper$java_util_function_Supplier$Z(this, ((P$.AbstractPipeline$lambda1||
(function(){var C$=Clazz.newClass(P$, "AbstractPipeline$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (p$1.sourceSpliterator$I.apply(this.b$['java.util.stream.AbstractPipeline'], [0]));});
})()
), Clazz.new_(P$.AbstractPipeline$lambda1.$init$, [this, null])), this.isParallel$());
}});

Clazz.newMeth(C$, 'isParallel$', function () {
return this.sourceStage.parallel;
});

Clazz.newMeth(C$, 'getStreamFlags$', function () {
return $I$(1).toStreamFlags$I(this.combinedFlags);
});

Clazz.newMeth(C$, 'parallelPrepare$I', function (terminalFlags) {
var backPropagationHead=this.sourceStage;
if (this.sourceStage.sourceAnyStateful) {
var depth=1;
for (var u=this.sourceStage, p=this.sourceStage.nextStage; p != null ; u=p, p=p.nextStage) {
var thisOpFlags=p.sourceOrOpFlags;
if (p.opIsStateful$()) {
if ($I$(1).SHORT_CIRCUIT.isKnown$I(thisOpFlags)) {
backPropagationHead=p;
thisOpFlags=thisOpFlags & ~$I$(1).IS_SHORT_CIRCUIT;
}depth=0;
thisOpFlags=(thisOpFlags & ~$I$(1).NOT_SIZED) | $I$(1).IS_SIZED;
}p.depth=depth++;
p.combinedFlags=$I$(1).combineOpFlags$I$I(thisOpFlags, u.combinedFlags);
}
}if (terminalFlags != 0) {
var upstreamTerminalFlags=terminalFlags & $I$(1).UPSTREAM_TERMINAL_OP_MASK;
for (var p=backPropagationHead; p.nextStage != null ; p=p.nextStage) {
p.combinedFlags=$I$(1).combineOpFlags$I$I(upstreamTerminalFlags, p.combinedFlags);
}
this.combinedFlags=$I$(1).combineOpFlags$I$I(terminalFlags, this.combinedFlags);
}}, p$1);

Clazz.newMeth(C$, 'sourceSpliterator$I', function (terminalFlags) {
var spliterator=null;
if (this.sourceStage.sourceSpliterator != null ) {
spliterator=this.sourceStage.sourceSpliterator;
this.sourceStage.sourceSpliterator=null;
} else if (this.sourceStage.sourceSupplier != null ) {
spliterator=this.sourceStage.sourceSupplier.get$();
this.sourceStage.sourceSupplier=null;
} else {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["source already consumed or closed"]);
}if (this.isParallel$()) {
p$1.parallelPrepare$I.apply(this, [terminalFlags]);
for (var u=this.sourceStage, p=this.sourceStage.nextStage, e=this; u !== e ; u=p, p=p.nextStage) {
if (p.opIsStateful$()) {
spliterator=p.opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator(u, spliterator);
}}
} else if (terminalFlags != 0) {
this.combinedFlags=$I$(1).combineOpFlags$I$I(terminalFlags, this.combinedFlags);
}return spliterator;
}, p$1);

Clazz.newMeth(C$, 'getSourceShape$', function () {
var p=this;
while (p.depth > 0){
p=p.previousStage;
}
return p.getOutputShape$();
});

Clazz.newMeth(C$, 'exactOutputSizeIfKnown$java_util_Spliterator', function (spliterator) {
return $I$(1).SIZED.isKnown$I(this.getStreamAndOpFlags$()) ? spliterator.getExactSizeIfKnown$() : -1;
});

Clazz.newMeth(C$, ['wrapAndCopyInto$TS$java_util_Spliterator'], function (sink, spliterator) {
this.copyInto$java_util_stream_Sink$java_util_Spliterator(this.wrapSink$java_util_stream_Sink($I$(3).requireNonNull$TT(sink)), spliterator);
return sink;
});

Clazz.newMeth(C$, 'copyInto$java_util_stream_Sink$java_util_Spliterator', function (wrappedSink, spliterator) {
$I$(3).requireNonNull$TT(wrappedSink);
if (!$I$(1).SHORT_CIRCUIT.isKnown$I(this.getStreamAndOpFlags$())) {
wrappedSink.begin$J(spliterator.getExactSizeIfKnown$());
spliterator.forEachRemaining$java_util_function_Consumer(wrappedSink);
wrappedSink.end$();
} else {
this.copyIntoWithCancel$java_util_stream_Sink$java_util_Spliterator(wrappedSink, spliterator);
}});

Clazz.newMeth(C$, 'copyIntoWithCancel$java_util_stream_Sink$java_util_Spliterator', function (wrappedSink, spliterator) {
var p=this;
while (p.depth > 0){
p=p.previousStage;
}
wrappedSink.begin$J(spliterator.getExactSizeIfKnown$());
p.forEachWithCancel$java_util_Spliterator$java_util_stream_Sink(spliterator, wrappedSink);
wrappedSink.end$();
});

Clazz.newMeth(C$, 'getStreamAndOpFlags$', function () {
return this.combinedFlags;
});

Clazz.newMeth(C$, 'isOrdered$', function () {
return $I$(1).ORDERED.isKnown$I(this.combinedFlags);
});

Clazz.newMeth(C$, 'wrapSink$java_util_stream_Sink', function (sink) {
$I$(3).requireNonNull$TT(sink);
for (var p=this; p.depth > 0; p=p.previousStage) {
sink=p.opWrapSink$I$java_util_stream_Sink(p.previousStage.combinedFlags, sink);
}
return sink;
});

Clazz.newMeth(C$, 'wrapSpliterator$java_util_Spliterator', function (sourceSpliterator) {
if (this.depth == 0) {
return sourceSpliterator;
} else {
return this.wrap$java_util_stream_PipelineHelper$java_util_function_Supplier$Z(this, ((P$.AbstractPipeline$lambda2||
(function(){var C$=Clazz.newClass(P$, "AbstractPipeline$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$', function () { return (this.$finals$.sourceSpliterator);});
})()
), Clazz.new_(P$.AbstractPipeline$lambda2.$init$, [this, {sourceSpliterator: sourceSpliterator}])), this.isParallel$());
}});

Clazz.newMeth(C$, 'evaluate$java_util_Spliterator$Z$java_util_function_IntFunction', function (spliterator, flatten, generator) {
if (this.isParallel$()) {
return this.evaluateToNode$java_util_stream_PipelineHelper$java_util_Spliterator$Z$java_util_function_IntFunction(this, spliterator, flatten, generator);
} else {
var nb=this.makeNodeBuilder$J$java_util_function_IntFunction(this.exactOutputSizeIfKnown$java_util_Spliterator(spliterator), generator);
return this.wrapAndCopyInto$TS$java_util_Spliterator(nb, spliterator).build$();
}});

Clazz.newMeth(C$, 'opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction', function (helper, spliterator, generator) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Parallel evaluation is not supported"]);
});

Clazz.newMeth(C$, 'opEvaluateParallelLazy$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
return this.opEvaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator$java_util_function_IntFunction(helper, spliterator, ((P$.AbstractPipeline$lambda3||
(function(){var C$=Clazz.newClass(P$, "AbstractPipeline$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (i) { return (Clazz.array(java.lang.Object, [i]));});
})()
), Clazz.new_(P$.AbstractPipeline$lambda3.$init$, [this, null]))).spliterator$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
