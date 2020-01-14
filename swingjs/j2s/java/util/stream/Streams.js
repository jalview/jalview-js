(function(){var P$=Clazz.newPackage("java.util.stream"),p$1={},p$2={},I$=[[0,'java.util.Objects','java.util.stream.SpinedBuffer','java.util.stream.StreamSupport',['java.util.stream.SpinedBuffer','.OfInt'],['java.util.stream.SpinedBuffer','.OfLong'],['java.util.stream.SpinedBuffer','.OfDouble'],'Error']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Streams", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.NONE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NONE= Clazz.new_();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
throw Clazz.new_($I$(7).c$$S,["no instances"]);
}, 1);

Clazz.newMeth(C$, 'composeWithExceptions$Runnable$Runnable', function (a, b) {
return ((P$.Streams$1||
(function(){var C$=Clazz.newClass(P$, "Streams$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.$finals$.a.run$();
} catch (e1) {
try {
this.$finals$.b.run$();
} catch (e2) {
try {
e1.addSuppressed$Throwable(e2);
} catch (ignore) {
}
}
throw e1;
}
this.$finals$.b.run$();
});
})()
), Clazz.new_(P$.Streams$1.$init$, [this, {a: a, b: b}]));
}, 1);

Clazz.newMeth(C$, 'composedClose$java_util_stream_BaseStream$java_util_stream_BaseStream', function (a, b) {
return ((P$.Streams$2||
(function(){var C$=Clazz.newClass(P$, "Streams$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
this.$finals$.a.close$();
} catch (e1) {
try {
this.$finals$.b.close$();
} catch (e2) {
try {
e1.addSuppressed$Throwable(e2);
} catch (ignore) {
}
}
throw e1;
}
this.$finals$.b.close$();
});
})()
), Clazz.new_(P$.Streams$2.$init$, [this, {a: a, b: b}]));
}, 1);
;
(function(){var C$=Clazz.newClass(P$.Streams, "RangeIntSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.from=0;
this.upTo=0;
this.last=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$Z', function (from, upTo, closed) {
C$.c$$I$I$I.apply(this, [from, upTo, closed ? 1 : 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I', function (from, upTo, last) {
C$.$init$.apply(this);
this.from=from;
this.upTo=upTo;
this.last=last;
}, 1);

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$TT_CONS'], function (consumer) {
$I$(1).requireNonNull$TT(consumer);
var i=this.from;
if (i < this.upTo) {
this.from++;
consumer.accept$(i);
return true;
} else if (this.last > 0) {
this.last=0;
consumer.accept$(i);
return true;
}return false;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TT_CONS'], function (consumer) {
$I$(1).requireNonNull$TT(consumer);
var i=this.from;
var hUpTo=this.upTo;
var hLast=this.last;
this.from=this.upTo;
this.last=0;
while (i < hUpTo){
consumer.accept$(i++);
}
if (hLast > 0) {
consumer.accept$(i);
}});

Clazz.newMeth(C$, 'estimateSize$', function () {
return (this.upTo) - this.from + this.last;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return 17749;
});

Clazz.newMeth(C$, 'getComparator$', function () {
return null;
});

Clazz.newMeth(C$, 'trySplit$', function () {
var size=this.estimateSize$();
return size <= 1 ? null : Clazz.new_(C$.c$$I$I$I,[this.from, this.from=this.from + p$1.splitPoint$J.apply(this, [size]), 0]);
});

Clazz.newMeth(C$, 'splitPoint$J', function (size) {
var d=(size < 16777216) ? 2 : 8;
return (((size/d|0))|0);
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Streams, "RangeLongSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.from=0;
this.upTo=0;
this.last=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$J$Z', function (from, upTo, closed) {
C$.c$$J$J$I.apply(this, [from, upTo, closed ? 1 : 0]);
}, 1);

Clazz.newMeth(C$, 'c$$J$J$I', function (from, upTo, last) {
C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return upTo - from + last > 0});
this.from=from;
this.upTo=upTo;
this.last=last;
}, 1);

Clazz.newMeth(C$, ['tryAdvance$java_util_function_LongConsumer','tryAdvance$TT_CONS'], function (consumer) {
$I$(1).requireNonNull$TT(consumer);
var i=this.from;
if (i < this.upTo) {
this.from++;
consumer.accept$(i);
return true;
} else if (this.last > 0) {
this.last=0;
consumer.accept$(i);
return true;
}return false;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$TT_CONS'], function (consumer) {
$I$(1).requireNonNull$TT(consumer);
var i=this.from;
var hUpTo=this.upTo;
var hLast=this.last;
this.from=this.upTo;
this.last=0;
while (i < hUpTo){
consumer.accept$(i++);
}
if (hLast > 0) {
consumer.accept$(i);
}});

Clazz.newMeth(C$, 'estimateSize$', function () {
return this.upTo - this.from + this.last;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return 17749;
});

Clazz.newMeth(C$, 'getComparator$', function () {
return null;
});

Clazz.newMeth(C$, 'trySplit$', function () {
var size=this.estimateSize$();
return size <= 1 ? null : Clazz.new_(C$.c$$J$J$I,[this.from, this.from=this.from + p$2.splitPoint$J.apply(this, [size]), 0]);
});

Clazz.newMeth(C$, 'splitPoint$J', function (size) {
var d=(size < 16777216) ? 2 : 8;
return (size/d|0);
}, p$2);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Streams, "AbstractStreamBuilderImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.count=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
return null;
});

Clazz.newMeth(C$, 'estimateSize$', function () {
return -this.count - 1;
});

Clazz.newMeth(C$, 'characteristics$', function () {
return 17488;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Streams, "StreamBuilderImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Streams','.AbstractStreamBuilderImpl'], [['java.util.stream.Stream','java.util.stream.Stream.Builder']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.first=null;
this.buffer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, ['c$$TT'], function (t) {
Clazz.super_(C$, this,1);
this.first=t;
this.count=-2;
}, 1);

Clazz.newMeth(C$, ['accept$TT','accept$'], function (t) {
if (this.count == 0) {
this.first=t;
this.count++;
} else if (this.count > 0) {
if (this.buffer == null ) {
this.buffer=Clazz.new_($I$(2));
this.buffer.accept$TE(this.first);
this.count++;
}this.buffer.accept$TE(t);
} else {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}});

Clazz.newMeth(C$, ['add$TT'], function (t) {
this.accept$TT(t);
return this;
});

Clazz.newMeth(C$, 'build$', function () {
var c=this.count;
if (c >= 0) {
this.count=-this.count - 1;
return (c < 2) ? $I$(3).stream$java_util_Spliterator$Z(this, false) : $I$(3).stream$java_util_Spliterator$Z(this.buffer.spliterator$(), false);
}throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer', function (action) {
$I$(1).requireNonNull$TT(action);
if (this.count == -2) {
action.accept$(this.first);
this.count=-1;
return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (action) {
$I$(1).requireNonNull$TT(action);
if (this.count == -2) {
action.accept$(this.first);
this.count=-1;
}});
})()
;
(function(){var C$=Clazz.newClass(P$.Streams, "IntStreamBuilderImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Streams','.AbstractStreamBuilderImpl'], [['java.util.stream.IntStream','java.util.stream.IntStream.Builder'], ['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.first=0;
this.buffer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (t) {
Clazz.super_(C$, this,1);
this.first=t;
this.count=-2;
}, 1);

Clazz.newMeth(C$, ['accept$I','accept$'], function (t) {
if (this.count == 0) {
this.first=t;
this.count++;
} else if (this.count > 0) {
if (this.buffer == null ) {
this.buffer=Clazz.new_($I$(4));
this.buffer.accept$I(this.first);
this.count++;
}this.buffer.accept$I(t);
} else {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}});

Clazz.newMeth(C$, 'build$', function () {
var c=this.count;
if (c >= 0) {
this.count=-this.count - 1;
return (c < 2) ? $I$(3).intStream$java_util_Spliterator_OfInt$Z(this, false) : $I$(3).intStream$java_util_Spliterator_OfInt$Z(this.buffer.spliterator$(), false);
}throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
if (this.count == -2) {
action.accept$(this.first);
this.count=-1;
return true;
} else {
return false;
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
if (this.count == -2) {
action.accept$(this.first);
this.count=-1;
}});
})()
;
(function(){var C$=Clazz.newClass(P$.Streams, "LongStreamBuilderImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Streams','.AbstractStreamBuilderImpl'], [['java.util.stream.LongStream','java.util.stream.LongStream.Builder'], ['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.first=0;
this.buffer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$J', function (t) {
Clazz.super_(C$, this,1);
this.first=t;
this.count=-2;
}, 1);

Clazz.newMeth(C$, ['accept$J','accept$'], function (t) {
if (this.count == 0) {
this.first=t;
this.count++;
} else if (this.count > 0) {
if (this.buffer == null ) {
this.buffer=Clazz.new_($I$(5));
this.buffer.accept$J(this.first);
this.count++;
}this.buffer.accept$J(t);
} else {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}});

Clazz.newMeth(C$, 'build$', function () {
var c=this.count;
if (c >= 0) {
this.count=-this.count - 1;
return (c < 2) ? $I$(3).longStream$java_util_Spliterator_OfLong$Z(this, false) : $I$(3).longStream$java_util_Spliterator_OfLong$Z(this.buffer.spliterator$(), false);
}throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_LongConsumer','tryAdvance$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
if (this.count == -2) {
action.accept$(this.first);
this.count=-1;
return true;
} else {
return false;
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
if (this.count == -2) {
action.accept$(this.first);
this.count=-1;
}});
})()
;
(function(){var C$=Clazz.newClass(P$.Streams, "DoubleStreamBuilderImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Streams','.AbstractStreamBuilderImpl'], [['java.util.stream.DoubleStream','java.util.stream.DoubleStream.Builder'], ['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.first=0;
this.buffer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$D', function (t) {
Clazz.super_(C$, this,1);
this.first=t;
this.count=-2;
}, 1);

Clazz.newMeth(C$, ['accept$D','accept$'], function (t) {
if (this.count == 0) {
this.first=t;
this.count++;
} else if (this.count > 0) {
if (this.buffer == null ) {
this.buffer=Clazz.new_($I$(6));
this.buffer.accept$D(this.first);
this.count++;
}this.buffer.accept$D(t);
} else {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}});

Clazz.newMeth(C$, 'build$', function () {
var c=this.count;
if (c >= 0) {
this.count=-this.count - 1;
return (c < 2) ? $I$(3).doubleStream$java_util_Spliterator_OfDouble$Z(this, false) : $I$(3).doubleStream$java_util_Spliterator_OfDouble$Z(this.buffer.spliterator$(), false);
}throw Clazz.new_(Clazz.load('IllegalStateException'));
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_DoubleConsumer','tryAdvance$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
if (this.count == -2) {
action.accept$(this.first);
this.count=-1;
return true;
} else {
return false;
}});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$TT_CONS'], function (action) {
$I$(1).requireNonNull$TT(action);
if (this.count == -2) {
action.accept$(this.first);
this.count=-1;
}});
})()
;
(function(){var C$=Clazz.newClass(P$.Streams, "ConcatSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.aSpliterator=null;
this.bSpliterator=null;
this.beforeSplit=false;
this.unsized=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TT_SPLITR$TT_SPLITR'], function (aSpliterator, bSpliterator) {
C$.$init$.apply(this);
this.aSpliterator=aSpliterator;
this.bSpliterator=bSpliterator;
this.beforeSplit=true;
this.unsized=aSpliterator.estimateSize$() + bSpliterator.estimateSize$() < 0;
}, 1);

Clazz.newMeth(C$, 'trySplit$', function () {
var ret=this.beforeSplit ? this.aSpliterator : this.bSpliterator.trySplit$();
this.beforeSplit=false;
return ret;
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer', function (consumer) {
var hasNext;
if (this.beforeSplit) {
hasNext=this.aSpliterator.tryAdvance$java_util_function_Consumer(consumer);
if (!hasNext) {
this.beforeSplit=false;
hasNext=this.bSpliterator.tryAdvance$java_util_function_Consumer(consumer);
}} else hasNext=this.bSpliterator.tryAdvance$java_util_function_Consumer(consumer);
return hasNext;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer', function (consumer) {
if (this.beforeSplit) this.aSpliterator.forEachRemaining$java_util_function_Consumer(consumer);
this.bSpliterator.forEachRemaining$java_util_function_Consumer(consumer);
});

Clazz.newMeth(C$, 'estimateSize$', function () {
if (this.beforeSplit) {
var size=this.aSpliterator.estimateSize$() + this.bSpliterator.estimateSize$();
return (size >= 0) ? size : 9223372036854775807;
} else {
return this.bSpliterator.estimateSize$();
}});

Clazz.newMeth(C$, 'characteristics$', function () {
if (this.beforeSplit) {
return this.aSpliterator.characteristics$() & this.bSpliterator.characteristics$() & ~(1 | 4 | (this.unsized ? 16448 : 0) ) ;
} else {
return this.bSpliterator.characteristics$();
}});

Clazz.newMeth(C$, 'getComparator$', function () {
if (this.beforeSplit) throw Clazz.new_(Clazz.load('IllegalStateException'));
return this.bSpliterator.getComparator$();
});
;
(function(){var C$=Clazz.newClass(P$.Streams.ConcatSpliterator, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Streams','.ConcatSpliterator']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$java_util_Spliterator', function (aSpliterator, bSpliterator) {
C$.superclazz.c$$TT_SPLITR$TT_SPLITR.apply(this, [aSpliterator, bSpliterator]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Streams.ConcatSpliterator, "OfPrimitive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Streams','.ConcatSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TT_SPLITR$TT_SPLITR'], function (aSpliterator, bSpliterator) {
C$.superclazz.c$$TT_SPLITR$TT_SPLITR.apply(this, [aSpliterator, bSpliterator]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['tryAdvance$TT_CONS'], function (action) {
var hasNext;
if (this.beforeSplit) {
hasNext=this.aSpliterator.tryAdvance$TT_CONS(action);
if (!hasNext) {
this.beforeSplit=false;
hasNext=this.bSpliterator.tryAdvance$TT_CONS(action);
}} else hasNext=this.bSpliterator.tryAdvance$TT_CONS(action);
return hasNext;
});

Clazz.newMeth(C$, ['forEachRemaining$TT_CONS'], function (action) {
if (this.beforeSplit) this.aSpliterator.forEachRemaining$TT_CONS(action);
this.bSpliterator.forEachRemaining$TT_CONS(action);
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Streams.ConcatSpliterator, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Streams','.ConcatSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfInt$java_util_Spliterator_OfInt', function (aSpliterator, bSpliterator) {
C$.superclazz.c$$TT_SPLITR$TT_SPLITR.apply(this, [aSpliterator, bSpliterator]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Streams.ConcatSpliterator, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Streams','.ConcatSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfLong$java_util_Spliterator_OfLong', function (aSpliterator, bSpliterator) {
C$.superclazz.c$$TT_SPLITR$TT_SPLITR.apply(this, [aSpliterator, bSpliterator]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Streams.ConcatSpliterator, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.Streams','.ConcatSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfDouble$java_util_Spliterator_OfDouble', function (aSpliterator, bSpliterator) {
C$.superclazz.c$$TT_SPLITR$TT_SPLITR.apply(this, [aSpliterator, bSpliterator]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
