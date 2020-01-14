(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'Thread',['java.util.concurrent.FutureTask','.Sync'],'java.util.concurrent.Executors']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FutureTask", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.util.concurrent.RunnableFuture');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sync=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Callable', function (callable) {
C$.$init$.apply(this);
if (callable == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.sync=Clazz.new_($I$(2).c$$java_util_concurrent_Callable, [this, null, callable]);
}, 1);

Clazz.newMeth(C$, ['c$$Runnable$TV'], function (runnable, result) {
C$.$init$.apply(this);
this.sync=Clazz.new_($I$(2).c$$java_util_concurrent_Callable, [this, null, $I$(3).callable$Runnable$TT(runnable, result)]);
}, 1);

Clazz.newMeth(C$, 'isCancelled$', function () {
return this.sync.innerIsCancelled$();
});

Clazz.newMeth(C$, 'isDone$', function () {
return this.sync.innerIsDone$();
});

Clazz.newMeth(C$, 'cancel$Z', function (mayInterruptIfRunning) {
return this.sync.innerCancel$Z(mayInterruptIfRunning);
});

Clazz.newMeth(C$, 'get$', function () {
return this.sync.innerGet$();
});

Clazz.newMeth(C$, 'get$J$java_util_concurrent_TimeUnit', function (timeout, unit) {
return this.sync.innerGet$J(unit.toNanos$J(timeout));
});

Clazz.newMeth(C$, 'done$', function () {
});

Clazz.newMeth(C$, ['set$TV'], function (v) {
this.sync.innerSet$TV(v);
});

Clazz.newMeth(C$, 'setException$Throwable', function (t) {
this.sync.innerSetException$Throwable(t);
});

Clazz.newMeth(C$, 'run$', function () {
this.sync.innerRun$();
});

Clazz.newMeth(C$, 'runAndReset$', function () {
return this.sync.innerRunAndReset$();
});
;
(function(){var C$=Clazz.newClass(P$.FutureTask, "Sync", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.concurrent.locks.AbstractQueuedSynchronizer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.callable=null;
this.result=null;
this.exception=null;
this.runner=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Callable', function (callable) {
Clazz.super_(C$, this,1);
this.callable=callable;
}, 1);

Clazz.newMeth(C$, 'ranOrCancelled$I', function (state) {
return (state & (6)) != 0;
}, p$1);

Clazz.newMeth(C$, 'tryAcquireShared$I', function (ignore) {
return this.innerIsDone$() ? 1 : -1;
});

Clazz.newMeth(C$, 'tryReleaseShared$I', function (ignore) {
this.runner=null;
return true;
});

Clazz.newMeth(C$, 'innerIsCancelled$', function () {
return this.getState$() == 4;
});

Clazz.newMeth(C$, 'innerIsDone$', function () {
return p$1.ranOrCancelled$I.apply(this, [this.getState$()]) && this.runner == null  ;
});

Clazz.newMeth(C$, 'innerGet$', function () {
this.acquireSharedInterruptibly$I(0);
if (this.getState$() == 4) throw Clazz.new_(Clazz.load('java.util.concurrent.CancellationException'));
if (this.exception != null ) throw Clazz.new_(Clazz.load('java.util.concurrent.ExecutionException').c$$Throwable,[this.exception]);
return this.result;
});

Clazz.newMeth(C$, 'innerGet$J', function (nanosTimeout) {
if (!this.tryAcquireSharedNanos$I$J(0, nanosTimeout)) throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
if (this.getState$() == 4) throw Clazz.new_(Clazz.load('java.util.concurrent.CancellationException'));
if (this.exception != null ) throw Clazz.new_(Clazz.load('java.util.concurrent.ExecutionException').c$$Throwable,[this.exception]);
return this.result;
});

Clazz.newMeth(C$, 'innerSet$TV', function (v) {
for (; ; ) {
var s=this.getState$();
if (s == 2) return;
if (s == 4) {
this.releaseShared$I(0);
return;
}if (this.compareAndSetState$I$I(s, 2)) {
this.result=v;
this.releaseShared$I(0);
this.b$['java.util.concurrent.FutureTask'].done$.apply(this.b$['java.util.concurrent.FutureTask'], []);
return;
}}
});

Clazz.newMeth(C$, 'innerSetException$Throwable', function (t) {
for (; ; ) {
var s=this.getState$();
if (s == 2) return;
if (s == 4) {
this.releaseShared$I(0);
return;
}if (this.compareAndSetState$I$I(s, 2)) {
this.exception=t;
this.releaseShared$I(0);
this.b$['java.util.concurrent.FutureTask'].done$.apply(this.b$['java.util.concurrent.FutureTask'], []);
return;
}}
});

Clazz.newMeth(C$, 'innerCancel$Z', function (mayInterruptIfRunning) {
for (; ; ) {
var s=this.getState$();
if (p$1.ranOrCancelled$I.apply(this, [s])) return false;
if (this.compareAndSetState$I$I(s, 4)) break;
}
if (mayInterruptIfRunning) {
var r=this.runner;
if (r != null ) r.interrupt$();
}this.releaseShared$I(0);
this.b$['java.util.concurrent.FutureTask'].done$.apply(this.b$['java.util.concurrent.FutureTask'], []);
return true;
});

Clazz.newMeth(C$, 'innerRun$', function () {
if (!this.compareAndSetState$I$I(0, 1)) return;
this.runner=$I$(1).currentThread$();
if (this.getState$() == 1) {
var result;
try {
result=this.callable.call$();
} catch (ex) {
this.b$['java.util.concurrent.FutureTask'].setException$Throwable.apply(this.b$['java.util.concurrent.FutureTask'], [ex]);
return;
}
this.b$['java.util.concurrent.FutureTask'].set$TV.apply(this.b$['java.util.concurrent.FutureTask'], [result]);
} else {
this.releaseShared$I(0);
}});

Clazz.newMeth(C$, 'innerRunAndReset$', function () {
if (!this.compareAndSetState$I$I(0, 1)) return false;
try {
this.runner=$I$(1).currentThread$();
if (this.getState$() == 1) this.callable.call$();
this.runner=null;
return this.compareAndSetState$I$I(1, 0);
} catch (ex) {
this.b$['java.util.concurrent.FutureTask'].setException$Throwable.apply(this.b$['java.util.concurrent.FutureTask'], [ex]);
return false;
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:52 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
