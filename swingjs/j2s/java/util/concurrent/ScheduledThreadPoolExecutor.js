(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},p$2={},I$=[[0,'java.util.concurrent.ScheduledThreadPoolExecutor','java.util.concurrent.TimeUnit','java.util.concurrent.DelayQueue','java.util.concurrent.atomic.AtomicLong',['java.util.concurrent.ScheduledThreadPoolExecutor','.DelayedWorkQueue'],['java.util.concurrent.ScheduledThreadPoolExecutor','.ScheduledFutureTask'],'java.util.concurrent.Executors']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ScheduledThreadPoolExecutor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.concurrent.ThreadPoolExecutor', 'java.util.concurrent.ScheduledExecutorService');
C$.sequencer=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.sequencer=Clazz.new_($I$(4).c$$J,[0]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.continueExistingPeriodicTasksAfterShutdown=false;
this.executeExistingDelayedTasksAfterShutdown=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.executeExistingDelayedTasksAfterShutdown=true;
}, 1);

Clazz.newMeth(C$, 'now$', function () {
return System.nanoTime$();
});

Clazz.newMeth(C$, 'canRunInCurrentRunState$Z', function (periodic) {
return this.isRunningOrShutdown$Z(periodic ? this.continueExistingPeriodicTasksAfterShutdown : this.executeExistingDelayedTasksAfterShutdown);
});

Clazz.newMeth(C$, 'delayedExecute$java_util_concurrent_RunnableScheduledFuture', function (task) {
if (this.isShutdown$()) this.reject$Runnable(task);
 else {
C$.superclazz.prototype.getQueue$.apply(this, []).add$TE(task);
if (this.isShutdown$() && !this.canRunInCurrentRunState$Z(task.isPeriodic$()) && this.remove$Runnable(task)  ) task.cancel$Z(false);
 else this.prestartCoreThread$();
}}, p$2);

Clazz.newMeth(C$, 'reExecutePeriodic$java_util_concurrent_RunnableScheduledFuture', function (task) {
if (this.canRunInCurrentRunState$Z(true)) {
C$.superclazz.prototype.getQueue$.apply(this, []).add$TE(task);
if (!this.canRunInCurrentRunState$Z(true) && this.remove$Runnable(task) ) task.cancel$Z(false);
 else this.prestartCoreThread$();
}});

Clazz.newMeth(C$, 'onShutdown$', function () {
var q=C$.superclazz.prototype.getQueue$.apply(this, []);
var keepDelayed=this.getExecuteExistingDelayedTasksAfterShutdownPolicy$();
var keepPeriodic=this.getContinueExistingPeriodicTasksAfterShutdownPolicy$();
if (!keepDelayed && !keepPeriodic ) q.clear$();
 else {
for (var e, $e = 0, $$e = q.toArray$(); $e<$$e.length&&((e=($$e[$e])),1);$e++) {
if (Clazz.instanceOf(e, "java.util.concurrent.RunnableScheduledFuture")) {
var t=e;
if ((t.isPeriodic$() ? !keepPeriodic : !keepDelayed) || t.isCancelled$() ) {
if (q.remove$O(t)) t.cancel$Z(false);
}}}
}this.tryTerminate$();
});

Clazz.newMeth(C$, 'decorateTask$Runnable$java_util_concurrent_RunnableScheduledFuture', function (runnable, task) {
return task;
});

Clazz.newMeth(C$, 'decorateTask$java_util_concurrent_Callable$java_util_concurrent_RunnableScheduledFuture', function (callable, task) {
return task;
});

Clazz.newMeth(C$, 'c$$I', function (corePoolSize) {
C$.superclazz.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue.apply(this, [corePoolSize, 2147483647, 0, $I$(2).NANOSECONDS, Clazz.new_($I$(5))]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_concurrent_ThreadFactory', function (corePoolSize, threadFactory) {
C$.superclazz.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory.apply(this, [corePoolSize, 2147483647, 0, $I$(2).NANOSECONDS, Clazz.new_($I$(5)), threadFactory]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_concurrent_RejectedExecutionHandler', function (corePoolSize, handler) {
C$.superclazz.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_RejectedExecutionHandler.apply(this, [corePoolSize, 2147483647, 0, $I$(2).NANOSECONDS, Clazz.new_($I$(5)), handler]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_concurrent_ThreadFactory$java_util_concurrent_RejectedExecutionHandler', function (corePoolSize, threadFactory, handler) {
C$.superclazz.c$$I$I$J$java_util_concurrent_TimeUnit$java_util_concurrent_BlockingQueue$java_util_concurrent_ThreadFactory$java_util_concurrent_RejectedExecutionHandler.apply(this, [corePoolSize, 2147483647, 0, $I$(2).NANOSECONDS, Clazz.new_($I$(5)), threadFactory, handler]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'schedule$Runnable$J$java_util_concurrent_TimeUnit', function (command, delay, unit) {
if (command == null  || unit == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (delay < 0) delay=0;
var triggerTime=this.now$() + unit.toNanos$J(delay);
var t=this.decorateTask$Runnable$java_util_concurrent_RunnableScheduledFuture(command, Clazz.new_($I$(6).c$$Runnable$TV$J, [this, null, command, null, triggerTime]));
p$2.delayedExecute$java_util_concurrent_RunnableScheduledFuture.apply(this, [t]);
return t;
});

Clazz.newMeth(C$, 'schedule$java_util_concurrent_Callable$J$java_util_concurrent_TimeUnit', function (callable, delay, unit) {
if (callable == null  || unit == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (delay < 0) delay=0;
var triggerTime=this.now$() + unit.toNanos$J(delay);
var t=this.decorateTask$java_util_concurrent_Callable$java_util_concurrent_RunnableScheduledFuture(callable, Clazz.new_($I$(6).c$$java_util_concurrent_Callable$J, [this, null, callable, triggerTime]));
p$2.delayedExecute$java_util_concurrent_RunnableScheduledFuture.apply(this, [t]);
return t;
});

Clazz.newMeth(C$, 'scheduleAtFixedRate$Runnable$J$J$java_util_concurrent_TimeUnit', function (command, initialDelay, period, unit) {
if (command == null  || unit == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (period <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (initialDelay < 0) initialDelay=0;
var triggerTime=this.now$() + unit.toNanos$J(initialDelay);
var sft=Clazz.new_($I$(6).c$$Runnable$TV$J$J, [this, null, command, null, triggerTime, unit.toNanos$J(period)]);
var t=this.decorateTask$Runnable$java_util_concurrent_RunnableScheduledFuture(command, sft);
sft.outerTask=t;
p$2.delayedExecute$java_util_concurrent_RunnableScheduledFuture.apply(this, [t]);
return t;
});

Clazz.newMeth(C$, 'scheduleWithFixedDelay$Runnable$J$J$java_util_concurrent_TimeUnit', function (command, initialDelay, delay, unit) {
if (command == null  || unit == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (delay <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (initialDelay < 0) initialDelay=0;
var triggerTime=this.now$() + unit.toNanos$J(initialDelay);
var sft=Clazz.new_($I$(6).c$$Runnable$TV$J$J, [this, null, command, null, triggerTime, unit.toNanos$J(-delay)]);
var t=this.decorateTask$Runnable$java_util_concurrent_RunnableScheduledFuture(command, sft);
sft.outerTask=t;
p$2.delayedExecute$java_util_concurrent_RunnableScheduledFuture.apply(this, [t]);
return t;
});

Clazz.newMeth(C$, ['execute$Runnable','execute$'], function (command) {
this.schedule$Runnable$J$java_util_concurrent_TimeUnit(command, 0, $I$(2).NANOSECONDS);
});

Clazz.newMeth(C$, 'submit$Runnable', function (task) {
return this.schedule$Runnable$J$java_util_concurrent_TimeUnit(task, 0, $I$(2).NANOSECONDS);
});

Clazz.newMeth(C$, 'submit$Runnable$TT', function (task, result) {
return this.schedule$java_util_concurrent_Callable$J$java_util_concurrent_TimeUnit($I$(7).callable$Runnable$TT(task, result), 0, $I$(2).NANOSECONDS);
});

Clazz.newMeth(C$, 'submit$java_util_concurrent_Callable', function (task) {
return this.schedule$java_util_concurrent_Callable$J$java_util_concurrent_TimeUnit(task, 0, $I$(2).NANOSECONDS);
});

Clazz.newMeth(C$, 'setContinueExistingPeriodicTasksAfterShutdownPolicy$Z', function (value) {
this.continueExistingPeriodicTasksAfterShutdown=value;
if (!value && this.isShutdown$() ) this.onShutdown$();
});

Clazz.newMeth(C$, 'getContinueExistingPeriodicTasksAfterShutdownPolicy$', function () {
return this.continueExistingPeriodicTasksAfterShutdown;
});

Clazz.newMeth(C$, 'setExecuteExistingDelayedTasksAfterShutdownPolicy$Z', function (value) {
this.executeExistingDelayedTasksAfterShutdown=value;
if (!value && this.isShutdown$() ) this.onShutdown$();
});

Clazz.newMeth(C$, 'getExecuteExistingDelayedTasksAfterShutdownPolicy$', function () {
return this.executeExistingDelayedTasksAfterShutdown;
});

Clazz.newMeth(C$, 'shutdown$', function () {
C$.superclazz.prototype.shutdown$.apply(this, []);
});

Clazz.newMeth(C$, 'shutdownNow$', function () {
return C$.superclazz.prototype.shutdownNow$.apply(this, []);
});

Clazz.newMeth(C$, 'getQueue$', function () {
return C$.superclazz.prototype.getQueue$.apply(this, []);
});
;
(function(){var C$=Clazz.newClass(P$.ScheduledThreadPoolExecutor, "ScheduledFutureTask", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.concurrent.FutureTask', 'java.util.concurrent.RunnableScheduledFuture');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequenceNumber=0;
this.time=0;
this.period=0;
this.outerTask=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.outerTask=this;
}, 1);

Clazz.newMeth(C$, ['c$$Runnable$TV$J'], function (r, result, ns) {
C$.superclazz.c$$Runnable$TV.apply(this, [r, result]);
C$.$init$.apply(this);
this.time=ns;
this.period=0;
this.sequenceNumber=$I$(1).sequencer.getAndIncrement$();
}, 1);

Clazz.newMeth(C$, ['c$$Runnable$TV$J$J'], function (r, result, ns, period) {
C$.superclazz.c$$Runnable$TV.apply(this, [r, result]);
C$.$init$.apply(this);
this.time=ns;
this.period=period;
this.sequenceNumber=$I$(1).sequencer.getAndIncrement$();
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Callable$J', function (callable, ns) {
C$.superclazz.c$$java_util_concurrent_Callable.apply(this, [callable]);
C$.$init$.apply(this);
this.time=ns;
this.period=0;
this.sequenceNumber=$I$(1).sequencer.getAndIncrement$();
}, 1);

Clazz.newMeth(C$, 'getDelay$java_util_concurrent_TimeUnit', function (unit) {
var d=unit.convert$J$java_util_concurrent_TimeUnit(this.time - this.this$0.now$.apply(this.this$0, []), $I$(2).NANOSECONDS);
return d;
});

Clazz.newMeth(C$, ['compareTo$java_util_concurrent_Delayed','compareTo$','compareTo$TT'], function (other) {
if (other === this ) return 0;
if (Clazz.instanceOf(other, "java.util.concurrent.ScheduledThreadPoolExecutor.ScheduledFutureTask")) {
var x=other;
var diff=this.time - x.time;
if (diff < 0) return -1;
 else if (diff > 0) return 1;
 else if (this.sequenceNumber < x.sequenceNumber) return -1;
 else return 1;
}var d=(this.getDelay$java_util_concurrent_TimeUnit($I$(2).NANOSECONDS) - other.getDelay$java_util_concurrent_TimeUnit($I$(2).NANOSECONDS));
return (d == 0) ? 0 : ((d < 0) ? -1 : 1);
});

Clazz.newMeth(C$, 'isPeriodic$', function () {
return this.period != 0;
});

Clazz.newMeth(C$, 'setNextRunTime', function () {
var p=this.period;
if (p > 0) this.time+=p;
 else this.time=this.this$0.now$.apply(this.this$0, []) - p;
}, p$1);

Clazz.newMeth(C$, 'run$', function () {
var periodic=this.isPeriodic$();
if (!this.this$0.canRunInCurrentRunState$Z.apply(this.this$0, [periodic])) this.cancel$Z(false);
 else if (!periodic) C$.superclazz.prototype.run$.apply(this, []);
 else if (C$.superclazz.prototype.runAndReset$.apply(this, [])) {
p$1.setNextRunTime.apply(this, []);
this.this$0.reExecutePeriodic$java_util_concurrent_RunnableScheduledFuture.apply(this.this$0, [this.outerTask]);
}});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ScheduledThreadPoolExecutor, "DelayedWorkQueue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractCollection', 'java.util.concurrent.BlockingQueue');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dq=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.dq=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'poll$', function () {
return this.dq.poll$();
});

Clazz.newMeth(C$, 'peek$', function () {
return this.dq.peek$();
});

Clazz.newMeth(C$, 'take$', function () {
return this.dq.take$();
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit', function (timeout, unit) {
return this.dq.poll$J$java_util_concurrent_TimeUnit(timeout, unit);
});

Clazz.newMeth(C$, ['add$Runnable','add$TE'], function (x) {
return this.dq.add$TE(x);
});

Clazz.newMeth(C$, ['offer$Runnable','offer$TE'], function (x) {
return this.dq.offer$TE(x);
});

Clazz.newMeth(C$, ['put$Runnable','put$TE'], function (x) {
this.dq.put$TE(x);
});

Clazz.newMeth(C$, ['offer$Runnable$J$java_util_concurrent_TimeUnit','offer$TE$J$java_util_concurrent_TimeUnit'], function (x, timeout, unit) {
return this.dq.offer$TE$J$java_util_concurrent_TimeUnit(x, timeout, unit);
});

Clazz.newMeth(C$, 'remove$', function () {
return this.dq.remove$();
});

Clazz.newMeth(C$, 'element$', function () {
return this.dq.element$();
});

Clazz.newMeth(C$, 'clear$', function () {
this.dq.clear$();
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection', function (c) {
return this.dq.drainTo$java_util_Collection(c);
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection$I', function (c, maxElements) {
return this.dq.drainTo$java_util_Collection$I(c, maxElements);
});

Clazz.newMeth(C$, 'remainingCapacity$', function () {
return this.dq.remainingCapacity$();
});

Clazz.newMeth(C$, 'remove$O', function (x) {
return this.dq.remove$O(x);
});

Clazz.newMeth(C$, 'contains$O', function (x) {
return this.dq.contains$O(x);
});

Clazz.newMeth(C$, 'size$', function () {
return this.dq.size$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.dq.isEmpty$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.dq.toArray$();
});

Clazz.newMeth(C$, 'toArray$TTA', function (array) {
return this.dq.toArray$TTA(array);
});

Clazz.newMeth(C$, 'iterator$', function () {
return ((P$.ScheduledThreadPoolExecutor$DelayedWorkQueue$1||
(function(){var C$=Clazz.newClass(P$, "ScheduledThreadPoolExecutor$DelayedWorkQueue$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.it=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.it=this.b$['java.util.concurrent.ScheduledThreadPoolExecutor.DelayedWorkQueue'].dq.iterator$();
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.it.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
return this.it.next$();
});

Clazz.newMeth(C$, 'remove$', function () {
this.it.remove$();
});
})()
), Clazz.new_(P$.ScheduledThreadPoolExecutor$DelayedWorkQueue$1.$init$, [this, null]));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
