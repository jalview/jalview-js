(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.Tripwire','java.util.Objects']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Sink", function(){
}, null, 'java.util.function.Consumer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'begin$J', function (size) {
});

Clazz.newMeth(C$, 'end$', function () {
});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return false;
});

Clazz.newMeth(C$, ['accept$'], function (value) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["called wrong accept method"]);
});

Clazz.newMeth(C$, ['accept$'], function (value) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["called wrong accept method"]);
});

Clazz.newMeth(C$, ['accept$'], function (value) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["called wrong accept method"]);
});
};;
(function(){var C$=Clazz.newInterface(P$.Sink, "OfInt", function(){
}, null, ['java.util.stream.Sink', 'java.util.function.IntConsumer']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['accept$'], function (i) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Sink.OfInt.accept(Integer)");
this.accept$(i.intValue$());
});
};})()
;
(function(){var C$=Clazz.newInterface(P$.Sink, "OfLong", function(){
}, null, ['java.util.stream.Sink', 'java.util.function.LongConsumer']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['accept$'], function (i) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Sink.OfLong.accept(Long)");
this.accept$(i.longValue$());
});
};})()
;
(function(){var C$=Clazz.newInterface(P$.Sink, "OfDouble", function(){
}, null, ['java.util.stream.Sink', 'java.util.function.DoubleConsumer']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['accept$'], function (i) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Sink.OfDouble.accept(Double)");
this.accept$(i.doubleValue$());
});
};})()
;
(function(){var C$=Clazz.newClass(P$.Sink, "ChainedReference", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.Sink');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.downstream=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
C$.$init$.apply(this);
this.downstream=$I$(2).requireNonNull$TT(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$', function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Sink, "ChainedInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.downstream=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
C$.$init$.apply(this);
this.downstream=$I$(2).requireNonNull$TT(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$', function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Sink, "ChainedLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.downstream=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
C$.$init$.apply(this);
this.downstream=$I$(2).requireNonNull$TT(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$', function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Sink, "ChainedDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.downstream=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
C$.$init$.apply(this);
this.downstream=$I$(2).requireNonNull$TT(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$', function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newInterface(P$.Sink, "OfInt", function(){
}, null, ['java.util.stream.Sink', 'java.util.function.IntConsumer']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['accept$'], function (i) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Sink.OfInt.accept(Integer)");
this.accept$(i.intValue$());
});
};})()
;
(function(){var C$=Clazz.newInterface(P$.Sink, "OfLong", function(){
}, null, ['java.util.stream.Sink', 'java.util.function.LongConsumer']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['accept$'], function (i) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Sink.OfLong.accept(Long)");
this.accept$(i.longValue$());
});
};})()
;
(function(){var C$=Clazz.newInterface(P$.Sink, "OfDouble", function(){
}, null, ['java.util.stream.Sink', 'java.util.function.DoubleConsumer']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['accept$'], function (i) {
if (false) $I$(1).trip$Class$S(this.getClass$(), "{0} calling Sink.OfDouble.accept(Double)");
this.accept$(i.doubleValue$());
});
};})()
;
(function(){var C$=Clazz.newClass(P$.Sink, "ChainedReference", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.Sink');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.downstream=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
C$.$init$.apply(this);
this.downstream=$I$(2).requireNonNull$TT(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$', function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Sink, "ChainedInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.downstream=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
C$.$init$.apply(this);
this.downstream=$I$(2).requireNonNull$TT(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$', function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Sink, "ChainedLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.downstream=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
C$.$init$.apply(this);
this.downstream=$I$(2).requireNonNull$TT(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$', function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Sink, "ChainedDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.downstream=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_Sink', function (downstream) {
C$.$init$.apply(this);
this.downstream=$I$(2).requireNonNull$TT(downstream);
}, 1);

Clazz.newMeth(C$, 'begin$J', function (size) {
this.downstream.begin$J(size);
});

Clazz.newMeth(C$, 'end$', function () {
this.downstream.end$();
});

Clazz.newMeth(C$, 'cancellationRequested$', function () {
return this.downstream.cancellationRequested$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:57 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
