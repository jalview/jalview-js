(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.StreamOpFlag',['java.util.stream.MatchOps','.MatchTask'],'java.util.Objects',['java.util.stream.MatchOps','.MatchOp'],'java.util.stream.StreamShape','java.util.stream.MatchOps$1MatchSink','java.util.stream.MatchOps$2MatchSink','java.util.stream.MatchOps$3MatchSink','java.util.stream.MatchOps$4MatchSink']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MatchOps", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeRef$java_util_function_Predicate$java_util_stream_MatchOps_MatchKind', function (predicate, matchKind) {
$I$(3).requireNonNull$TT(predicate);
$I$(3).requireNonNull$TT(matchKind);
return Clazz.new_($I$(4).c$$java_util_stream_StreamShape$java_util_stream_MatchOps_MatchKind$java_util_function_Supplier,[$I$(5).REFERENCE, matchKind, ((P$.MatchOps$lambda1||
(function(){var C$=Clazz.newClass(P$, "MatchOps$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(6),[])});
})()
), Clazz.new_(P$.MatchOps$lambda1.$init$, [this, null]))]);
}, 1);

Clazz.newMeth(C$, 'makeInt$java_util_function_IntPredicate$java_util_stream_MatchOps_MatchKind', function (predicate, matchKind) {
$I$(3).requireNonNull$TT(predicate);
$I$(3).requireNonNull$TT(matchKind);
return Clazz.new_($I$(4).c$$java_util_stream_StreamShape$java_util_stream_MatchOps_MatchKind$java_util_function_Supplier,[$I$(5).INT_VALUE, matchKind, ((P$.MatchOps$lambda2||
(function(){var C$=Clazz.newClass(P$, "MatchOps$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(7),[])});
})()
), Clazz.new_(P$.MatchOps$lambda2.$init$, [this, null]))]);
}, 1);

Clazz.newMeth(C$, 'makeLong$java_util_function_LongPredicate$java_util_stream_MatchOps_MatchKind', function (predicate, matchKind) {
$I$(3).requireNonNull$TT(predicate);
$I$(3).requireNonNull$TT(matchKind);
return Clazz.new_($I$(4).c$$java_util_stream_StreamShape$java_util_stream_MatchOps_MatchKind$java_util_function_Supplier,[$I$(5).LONG_VALUE, matchKind, ((P$.MatchOps$lambda3||
(function(){var C$=Clazz.newClass(P$, "MatchOps$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(8),[])});
})()
), Clazz.new_(P$.MatchOps$lambda3.$init$, [this, null]))]);
}, 1);

Clazz.newMeth(C$, 'makeDouble$java_util_function_DoublePredicate$java_util_stream_MatchOps_MatchKind', function (predicate, matchKind) {
$I$(3).requireNonNull$TT(predicate);
$I$(3).requireNonNull$TT(matchKind);
return Clazz.new_($I$(4).c$$java_util_stream_StreamShape$java_util_stream_MatchOps_MatchKind$java_util_function_Supplier,[$I$(5).DOUBLE_VALUE, matchKind, ((P$.MatchOps$lambda4||
(function(){var C$=Clazz.newClass(P$, "MatchOps$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$', function () { return Clazz.new_($I$(9),[])});
})()
), Clazz.new_(P$.MatchOps$lambda4.$init$, [this, null]))]);
}, 1);
;
(function(){var C$=Clazz.newClass(P$, "MatchOps$1MatchSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.MatchOps','.BooleanTerminalSink'], null, 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_util_stream_MatchOps_MatchKind.apply(this, [this.$finals$.matchKind]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
if (!this.stop && this.$finals$.predicate.test$(t) == this.$finals$.matchKind.stopOnPredicateMatches  ) {
this.stop=true;
this.value=this.$finals$.matchKind.shortCircuitResult;
}});
})()
;
(function(){var C$=Clazz.newClass(P$, "MatchOps$2MatchSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.MatchOps','.BooleanTerminalSink'], [['java.util.stream.Sink','java.util.stream.Sink.OfInt']], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_util_stream_MatchOps_MatchKind.apply(this, [this.$finals$.matchKind]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$','acceptnull'], function (t) {
if (!this.stop && this.$finals$.predicate.test$(t) == this.$finals$.matchKind.stopOnPredicateMatches  ) {
this.stop=true;
this.value=this.$finals$.matchKind.shortCircuitResult;
}});
})()
;
(function(){var C$=Clazz.newClass(P$, "MatchOps$3MatchSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.MatchOps','.BooleanTerminalSink'], [['java.util.stream.Sink','java.util.stream.Sink.OfLong']], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_util_stream_MatchOps_MatchKind.apply(this, [this.$finals$.matchKind]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$','acceptnull'], function (t) {
if (!this.stop && this.$finals$.predicate.test$(t) == this.$finals$.matchKind.stopOnPredicateMatches  ) {
this.stop=true;
this.value=this.$finals$.matchKind.shortCircuitResult;
}});
})()
;
(function(){var C$=Clazz.newClass(P$, "MatchOps$4MatchSink", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.MatchOps','.BooleanTerminalSink'], [['java.util.stream.Sink','java.util.stream.Sink.OfDouble']], 2);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$java_util_stream_MatchOps_MatchKind.apply(this, [this.$finals$.matchKind]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$','acceptnull'], function (t) {
if (!this.stop && this.$finals$.predicate.test$(t) == this.$finals$.matchKind.stopOnPredicateMatches  ) {
this.stop=true;
this.value=this.$finals$.matchKind.shortCircuitResult;
}});
})()
;
(function(){var C$=Clazz.newClass(P$.MatchOps, "MatchKind", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$ = function() {Clazz.load(C$, 1);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$Z$Z, "ANY", 0, [true, true]);
Clazz.newEnumConst($vals, C$.c$$Z$Z, "ALL", 1, [false, false]);
Clazz.newEnumConst($vals, C$.c$$Z$Z, "NONE", 2, [true, false]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.stopOnPredicateMatches=false;
this.shortCircuitResult=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z', function (stopOnPredicateMatches, shortCircuitResult) {
C$.$init$.apply(this);
this.stopOnPredicateMatches=stopOnPredicateMatches;
this.shortCircuitResult=shortCircuitResult;
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.MatchOps, "MatchOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.TerminalOp');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.inputShape=null;
this.matchKind=null;
this.sinkSupplier=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_StreamShape$java_util_stream_MatchOps_MatchKind$java_util_function_Supplier', function (shape, matchKind, sinkSupplier) {
C$.$init$.apply(this);
this.inputShape=shape;
this.matchKind=matchKind;
this.sinkSupplier=sinkSupplier;
}, 1);

Clazz.newMeth(C$, 'getOpFlags$', function () {
return $I$(1).IS_SHORT_CIRCUIT | $I$(1).NOT_ORDERED;
});

Clazz.newMeth(C$, 'inputShape$', function () {
return this.inputShape;
});

Clazz.newMeth(C$, ['evaluateSequential$java_util_stream_PipelineHelper$java_util_Spliterator','evaluateSequential$'], function (helper, spliterator) {
return new Boolean(helper.wrapAndCopyInto$TS$java_util_Spliterator(this.sinkSupplier.get$(), spliterator).getAndClearState$());
});

Clazz.newMeth(C$, 'evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator', function (helper, spliterator) {
return Clazz.new_($I$(2).c$$java_util_stream_MatchOps_MatchOp$java_util_stream_PipelineHelper$java_util_Spliterator,[this, helper, spliterator]).invoke$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.MatchOps, "BooleanTerminalSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.Sink');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.stop=false;
this.value=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_MatchOps_MatchKind', function (matchKind) {
C$.$init$.apply(this);
this.value=!matchKind.shortCircuitResult;
}, 1);

Clazz.newMeth(C$, 'getAndClearState$', function () {
return this.value;
});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.stop;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.MatchOps, "MatchTask", function(){
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

Clazz.newMeth(C$, 'c$$java_util_stream_MatchOps_MatchOp$java_util_stream_PipelineHelper$java_util_Spliterator', function (op, helper, spliterator) {
C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator.apply(this, [helper, spliterator]);
C$.$init$.apply(this);
this.op=op;
}, 1);

Clazz.newMeth(C$, ['c$$java_util_stream_MatchOps_MatchTask$java_util_Spliterator'], function (parent, spliterator) {
C$.superclazz.c$$TK$java_util_Spliterator.apply(this, [parent, spliterator]);
C$.$init$.apply(this);
this.op=parent.op;
}, 1);

Clazz.newMeth(C$, ['makeChild$java_util_Spliterator'], function (spliterator) {
return Clazz.new_(C$.c$$java_util_stream_MatchOps_MatchTask$java_util_Spliterator,[this, spliterator]);
});

Clazz.newMeth(C$, 'doLeaf$', function () {
var b=this.helper.wrapAndCopyInto$TS$java_util_Spliterator(this.op.sinkSupplier.get$(), this.spliterator).getAndClearState$();
if (b == this.op.matchKind.shortCircuitResult ) this.shortCircuit$TR(new Boolean(b));
return null;
});

Clazz.newMeth(C$, 'getEmptyResult$', function () {
return new Boolean(!this.op.matchKind.shortCircuitResult);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
