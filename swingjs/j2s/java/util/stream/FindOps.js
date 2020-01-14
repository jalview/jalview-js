(function(){var P$=Clazz.newPackage("java.util.stream"),p$1={},I$=[[0,'java.util.stream.StreamOpFlag',['java.util.stream.FindOps','.FindTask'],'java.util.Optional','java.util.OptionalInt','java.util.OptionalLong','java.util.OptionalDouble',['java.util.stream.FindOps','.FindOp'],'java.util.stream.StreamShape',['java.util.stream.FindOps','.FindSink','.OfRef'],['java.util.stream.FindOps','.FindSink','.OfInt'],['java.util.stream.FindOps','.FindSink','.OfLong'],['java.util.stream.FindOps','.FindSink','.OfDouble']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FindOps", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeRef$Z', function (mustFindFirst) {
return Clazz.new_($I$(7).c$$Z$java_util_stream_StreamShape$TO$java_util_function_Predicate$java_util_function_Supplier,[mustFindFirst, $I$(8).REFERENCE, $I$(3).empty$(), (function($class$){((P$.FindOps$lambda1||
(function(){var C$=Clazz.newClass(P$, "FindOps$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['test$'], function (t) { return t.isPresent$.apply(t,[])});
})()
)); return Clazz.new_(P$.FindOps$lambda1.$init$, [this, null])})($I$(3)), ((P$.FindOps$lambda2||
(function(){var C$=Clazz.newClass(P$, "FindOps$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(9),[])});
})()
), Clazz.new_(P$.FindOps$lambda2.$init$, [this, null]))]);
}, 1);

Clazz.newMeth(C$, 'makeInt$Z', function (mustFindFirst) {
return Clazz.new_($I$(7).c$$Z$java_util_stream_StreamShape$TO$java_util_function_Predicate$java_util_function_Supplier,[mustFindFirst, $I$(8).INT_VALUE, $I$(4).empty$(), (function($class$){((P$.FindOps$lambda3||
(function(){var C$=Clazz.newClass(P$, "FindOps$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['test$'], function (t) { return t.isPresent$.apply(t,[])});
})()
)); return Clazz.new_(P$.FindOps$lambda3.$init$, [this, null])})($I$(4)), ((P$.FindOps$lambda4||
(function(){var C$=Clazz.newClass(P$, "FindOps$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(10),[])});
})()
), Clazz.new_(P$.FindOps$lambda4.$init$, [this, null]))]);
}, 1);

Clazz.newMeth(C$, 'makeLong$Z', function (mustFindFirst) {
return Clazz.new_($I$(7).c$$Z$java_util_stream_StreamShape$TO$java_util_function_Predicate$java_util_function_Supplier,[mustFindFirst, $I$(8).LONG_VALUE, $I$(5).empty$(), (function($class$){((P$.FindOps$lambda5||
(function(){var C$=Clazz.newClass(P$, "FindOps$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['test$'], function (t) { return t.isPresent$.apply(t,[])});
})()
)); return Clazz.new_(P$.FindOps$lambda5.$init$, [this, null])})($I$(5)), ((P$.FindOps$lambda6||
(function(){var C$=Clazz.newClass(P$, "FindOps$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(11),[])});
})()
), Clazz.new_(P$.FindOps$lambda6.$init$, [this, null]))]);
}, 1);

Clazz.newMeth(C$, 'makeDouble$Z', function (mustFindFirst) {
return Clazz.new_($I$(7).c$$Z$java_util_stream_StreamShape$TO$java_util_function_Predicate$java_util_function_Supplier,[mustFindFirst, $I$(8).DOUBLE_VALUE, $I$(6).empty$(), (function($class$){((P$.FindOps$lambda7||
(function(){var C$=Clazz.newClass(P$, "FindOps$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['test$'], function (t) { return t.isPresent$.apply(t,[])});
})()
)); return Clazz.new_(P$.FindOps$lambda7.$init$, [this, null])})($I$(6)), ((P$.FindOps$lambda8||
(function(){var C$=Clazz.newClass(P$, "FindOps$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(12),[])});
})()
), Clazz.new_(P$.FindOps$lambda8.$init$, [this, null]))]);
}, 1);
;
(function(){var C$=Clazz.newClass(P$.FindOps, "FindOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.TerminalOp');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.shape=null;
this.mustFindFirst=false;
this.emptyValue=null;
this.presentPredicate=null;
this.sinkSupplier=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$Z$java_util_stream_StreamShape$TO$java_util_function_Predicate$java_util_function_Supplier'], function (mustFindFirst, shape, emptyValue, presentPredicate, sinkSupplier) {
C$.$init$.apply(this);
this.mustFindFirst=mustFindFirst;
this.shape=shape;
this.emptyValue=emptyValue;
this.presentPredicate=presentPredicate;
this.sinkSupplier=sinkSupplier;
}, 1);

Clazz.newMeth(C$, 'getOpFlags$', function () {
return $I$(1).IS_SHORT_CIRCUIT | (this.mustFindFirst ? 0 : $I$(1).NOT_ORDERED);
});

Clazz.newMeth(C$, 'inputShape$', function () {
return this.shape;
});

Clazz.newMeth(C$, ['evaluateSequential$java_util_stream_PipelineHelper$java_util_Spliterator','evaluateSequential$'], function (helper, spliterator) {
var result=helper.wrapAndCopyInto$TS$java_util_Spliterator(this.sinkSupplier.get$(), spliterator).get$();
return result != null  ? result : this.emptyValue;
});

Clazz.newMeth(C$, 'evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
return Clazz.new_($I$(2).c$$java_util_stream_FindOps_FindOp$java_util_stream_PipelineHelper$java_util_Spliterator,[this, helper, spliterator]).invoke$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.FindOps, "FindSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.TerminalSink');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.hasValue=false;
this.value=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['accept$TT','accept$'], function (value) {
if (!this.hasValue) {
this.hasValue=true;
this.value=value;
}});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.hasValue;
});
;
(function(){var C$=Clazz.newClass(P$.FindOps.FindSink, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.FindOps','.FindSink']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.hasValue ? $I$(3).of$TT(this.value) : null;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.FindOps.FindSink, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.FindOps','.FindSink'], [['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (value) {
this.accept$TT(value);
});

Clazz.newMeth(C$, 'get$', function () {
return this.hasValue ? $I$(4).of$I((this.value).intValue$()) : null;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.FindOps.FindSink, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.FindOps','.FindSink'], [['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (value) {
this.accept$TT(value);
});

Clazz.newMeth(C$, 'get$', function () {
return this.hasValue ? $I$(5).of$J((this.value).longValue$()) : null;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.FindOps.FindSink, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.FindOps','.FindSink'], [['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (value) {
this.accept$TT(value);
});

Clazz.newMeth(C$, 'get$', function () {
return this.hasValue ? $I$(6).of$D((this.value).doubleValue$()) : null;
});

Clazz.newMeth(C$);
})()
})()
;
(function(){var C$=Clazz.newClass(P$.FindOps, "FindTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.AbstractShortCircuitTask');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.op=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$java_util_stream_FindOps_FindOp$java_util_stream_PipelineHelper$java_util_Spliterator'], function (op, helper, spliterator) {
C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator.apply(this, [helper, spliterator]);
C$.$init$.apply(this);
this.op=op;
}, 1);

Clazz.newMeth(C$, ['c$$java_util_stream_FindOps_FindTask$java_util_Spliterator'], function (parent, spliterator) {
C$.superclazz.c$$TK$java_util_Spliterator.apply(this, [parent, spliterator]);
C$.$init$.apply(this);
this.op=parent.op;
}, 1);

Clazz.newMeth(C$, ['makeChild$java_util_Spliterator'], function (spliterator) {
return Clazz.new_(C$.c$$java_util_stream_FindOps_FindTask$java_util_Spliterator,[this, spliterator]);
});

Clazz.newMeth(C$, 'getEmptyResult$', function () {
return this.op.emptyValue;
});

Clazz.newMeth(C$, ['foundResult$TO'], function (answer) {
if (this.isLeftmostNode$()) this.shortCircuit$TR(answer);
 else this.cancelLaterNodes$();
}, p$1);

Clazz.newMeth(C$, 'doLeaf$', function () {
var result=this.helper.wrapAndCopyInto$TS$java_util_Spliterator(this.op.sinkSupplier.get$(), this.spliterator).get$();
if (!this.op.mustFindFirst) {
if (result != null ) this.shortCircuit$TR(result);
return null;
} else {
if (result != null ) {
p$1.foundResult$TO.apply(this, [result]);
return result;
} else return null;
}});

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter', function ($caller) {
if (this.op.mustFindFirst) {
for (var child=this.leftChild, p=null; child !== p ; p=child, child=this.rightChild) {
var result=child.getLocalResult$();
if (result != null  && this.op.presentPredicate.test$(result) ) {
this.setLocalResult$TR(result);
p$1.foundResult$TO.apply(this, [result]);
break;
}}
}C$.superclazz.prototype.onCompletion$java_util_concurrent_CountedCompleter.apply(this, [$caller]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:56 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
