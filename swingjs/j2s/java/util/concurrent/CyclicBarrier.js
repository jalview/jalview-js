(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.locks.ReentrantLock',['java.util.concurrent.CyclicBarrier','.Generation'],'Thread','Error']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CyclicBarrier", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lock=null;
this.trip=null;
this.parties=0;
this.barrierCommand=null;
this.generation=null;
this.count=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lock=Clazz.new_($I$(1));
this.trip=this.lock.newCondition$();
this.generation=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'nextGeneration', function () {
this.trip.signalAll$();
this.count=this.parties;
this.generation=Clazz.new_($I$(2));
}, p$1);

Clazz.newMeth(C$, 'breakBarrier', function () {
this.generation.broken=true;
this.count=this.parties;
this.trip.signalAll$();
}, p$1);

Clazz.newMeth(C$, 'dowait$Z$J', function (timed, nanos) {
var lock=this.lock;
lock.lock$();
try {
var g=this.generation;
if (g.broken) throw Clazz.new_(Clazz.load('java.util.concurrent.BrokenBarrierException'));
if ($I$(3).interrupted$()) {
p$1.breakBarrier.apply(this, []);
throw Clazz.new_(Clazz.load('InterruptedException'));
}var index=--this.count;
if (index == 0) {
var ranAction=false;
try {
var command=this.barrierCommand;
if (command != null ) command.run$();
ranAction=true;
p$1.nextGeneration.apply(this, []);
return 0;
} finally {
if (!ranAction) p$1.breakBarrier.apply(this, []);
}
}for (; ; ) {
try {
if (!timed) this.trip.await$();
 else if (nanos > 0) nanos=this.trip.awaitNanos$J(nanos);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
if (g === this.generation  && !g.broken ) {
p$1.breakBarrier.apply(this, []);
throw ie;
} else {
$I$(3).currentThread$().interrupt$();
}} else {
throw ie;
}
}
if (g.broken) throw Clazz.new_(Clazz.load('java.util.concurrent.BrokenBarrierException'));
if (g !== this.generation ) return index;
if (timed && nanos <= 0 ) {
p$1.breakBarrier.apply(this, []);
throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
}}
} finally {
lock.unlock$();
}
}, p$1);

Clazz.newMeth(C$, 'c$$I$Runnable', function (parties, barrierAction) {
C$.$init$.apply(this);
if (parties <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.parties=parties;
this.count=parties;
this.barrierCommand=barrierAction;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (parties) {
C$.c$$I$Runnable.apply(this, [parties, null]);
}, 1);

Clazz.newMeth(C$, 'getParties$', function () {
return this.parties;
});

Clazz.newMeth(C$, 'await$', function () {
try {
return p$1.dowait$Z$J.apply(this, [false, 0]);
} catch (toe) {
if (Clazz.exceptionOf(toe,"java.util.concurrent.TimeoutException")){
throw Clazz.new_($I$(4).c$$Throwable,[toe]);
} else {
throw toe;
}
}
});

Clazz.newMeth(C$, 'await$J$java_util_concurrent_TimeUnit', function (timeout, unit) {
return p$1.dowait$Z$J.apply(this, [true, unit.toNanos$J(timeout)]);
});

Clazz.newMeth(C$, 'isBroken$', function () {
var lock=this.lock;
lock.lock$();
try {
return this.generation.broken;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'reset$', function () {
var lock=this.lock;
lock.lock$();
try {
p$1.breakBarrier.apply(this, []);
p$1.nextGeneration.apply(this, []);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'getNumberWaiting$', function () {
var lock=this.lock;
lock.lock$();
try {
return this.parties - this.count;
} finally {
lock.unlock$();
}
});
;
(function(){var C$=Clazz.newClass(P$.CyclicBarrier, "Generation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.broken=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.broken=false;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
