(function(){var P$=Clazz.newPackage("java.util.concurrent.locks"),p$1={},p$2={},I$=[[0,['java.util.concurrent.locks.AbstractQueuedLongSynchronizer','.Node'],'Thread','java.util.concurrent.locks.LockSupport','java.util.ArrayList']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AbstractQueuedLongSynchronizer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.concurrent.locks.AbstractOwnableSynchronizer', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.head=null;
this.tail=null;
this.state=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'getState$', function () {
return this.state;
});

Clazz.newMeth(C$, 'setState$J', function (newState) {
this.state=newState;
});

Clazz.newMeth(C$, 'compareAndSetState$J$J', function (expect, update) {
return true;
});

Clazz.newMeth(C$, 'enq$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node) {
for (; ; ) {
var t=this.tail;
if (t == null ) {
if (p$2.compareAndSetHead$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [Clazz.new_($I$(1))])) this.tail=this.head;
} else {
node.prev=t;
if (p$2.compareAndSetTail$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [t, node])) {
t.next=node;
return t;
}}}
}, p$2);

Clazz.newMeth(C$, 'addWaiter$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (mode) {
var node=Clazz.new_($I$(1).c$$Thread$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node,[$I$(2).currentThread$(), mode]);
var pred=this.tail;
if (pred != null ) {
node.prev=pred;
if (p$2.compareAndSetTail$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [pred, node])) {
pred.next=node;
return node;
}}p$2.enq$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
return node;
}, p$2);

Clazz.newMeth(C$, 'setHead$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node) {
this.head=node;
node.thread=null;
node.prev=null;
}, p$2);

Clazz.newMeth(C$, 'unparkSuccessor$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node) {
var ws=node.waitStatus;
if (ws < 0) C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$I$I(node, ws, 0);
var s=node.next;
if (s == null  || s.waitStatus > 0 ) {
s=null;
for (var t=this.tail; t != null  && t !== node  ; t=t.prev) if (t.waitStatus <= 0) s=t;

}if (s != null ) $I$(3).unpark$Thread(s.thread);
}, p$2);

Clazz.newMeth(C$, 'doReleaseShared', function () {
for (; ; ) {
var h=this.head;
if (h != null  && h !== this.tail  ) {
var ws=h.waitStatus;
if (ws == -1) {
if (!C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$I$I(h, -1, 0)) continue;
p$2.unparkSuccessor$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [h]);
} else if (ws == 0 && !C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$I$I(h, 0, -3) ) continue;
}if (h === this.head ) break;
}
}, p$2);

Clazz.newMeth(C$, 'setHeadAndPropagate$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J', function (node, propagate) {
var h=this.head;
p$2.setHead$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
if (propagate > 0 || h == null   || h.waitStatus < 0 ) {
var s=node.next;
if (s == null  || s.isShared$() ) p$2.doReleaseShared.apply(this, []);
}}, p$2);

Clazz.newMeth(C$, 'cancelAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node) {
if (node == null ) return;
node.thread=null;
var pred=node.prev;
while (pred.waitStatus > 0)node.prev=pred=pred.prev;

var predNext=pred.next;
node.waitStatus=1;
if (node === this.tail  && p$2.compareAndSetTail$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node, pred]) ) {
C$.compareAndSetNext$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node(pred, predNext, null);
} else {
var ws;
if (pred !== this.head  && ((ws=pred.waitStatus) == -1 || (ws <= 0 && C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$I$I(pred, ws, -1) ) )  && pred.thread != null  ) {
var next=node.next;
if (next != null  && next.waitStatus <= 0 ) C$.compareAndSetNext$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node(pred, predNext, next);
} else {
p$2.unparkSuccessor$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
}node.next=node;
}}, p$2);

Clazz.newMeth(C$, 'shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (pred, node) {
var ws=pred.waitStatus;
if (ws == -1) return true;
if (ws > 0) {
do {
node.prev=pred=pred.prev;
} while (pred.waitStatus > 0);
pred.next=node;
} else {
C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$I$I(pred, ws, -1);
}return false;
}, 1);

Clazz.newMeth(C$, 'selfInterrupt$', function () {
$I$(2).currentThread$().interrupt$();
}, 1);

Clazz.newMeth(C$, 'parkAndCheckInterrupt', function () {
$I$(3).park$O(this);
return $I$(2).interrupted$();
}, p$2);

Clazz.newMeth(C$, 'acquireQueued$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J', function (node, arg) {
var failed=true;
try {
var interrupted=false;
for (; ; ) {
var p=node.predecessor$();
if (p === this.head  && this.tryAcquire$J(arg) ) {
p$2.setHead$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
p.next=null;
failed=false;
return interrupted;
}if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node(p, node) && p$2.parkAndCheckInterrupt.apply(this, []) ) interrupted=true;
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
}
});

Clazz.newMeth(C$, 'doAcquireInterruptibly$J', function (arg) {
var node=p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [$I$(1).EXCLUSIVE]);
var failed=true;
try {
for (; ; ) {
var p=node.predecessor$();
if (p === this.head  && this.tryAcquire$J(arg) ) {
p$2.setHead$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
p.next=null;
failed=false;
return;
}if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node(p, node) && p$2.parkAndCheckInterrupt.apply(this, []) ) throw Clazz.new_(Clazz.load('InterruptedException'));
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
}
}, p$2);

Clazz.newMeth(C$, 'doAcquireNanos$J$J', function (arg, nanosTimeout) {
var lastTime=System.nanoTime$();
var node=p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [$I$(1).EXCLUSIVE]);
var failed=true;
try {
for (; ; ) {
var p=node.predecessor$();
if (p === this.head  && this.tryAcquire$J(arg) ) {
p$2.setHead$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
p.next=null;
failed=false;
return true;
}if (nanosTimeout <= 0) return false;
if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node(p, node) && nanosTimeout > 1000 ) $I$(3).parkNanos$O$J(this, nanosTimeout);
var now=System.nanoTime$();
nanosTimeout-=now - lastTime;
lastTime=now;
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
}
}, p$2);

Clazz.newMeth(C$, 'doAcquireShared$J', function (arg) {
var node=p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [$I$(1).SHARED]);
var failed=true;
try {
var interrupted=false;
for (; ; ) {
var p=node.predecessor$();
if (p === this.head ) {
var r=this.tryAcquireShared$J(arg);
if (r >= 0) {
p$2.setHeadAndPropagate$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J.apply(this, [node, r]);
p.next=null;
if (interrupted) C$.selfInterrupt$();
failed=false;
return;
}}if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node(p, node) && p$2.parkAndCheckInterrupt.apply(this, []) ) interrupted=true;
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
}
}, p$2);

Clazz.newMeth(C$, 'doAcquireSharedInterruptibly$J', function (arg) {
var node=p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [$I$(1).SHARED]);
var failed=true;
try {
for (; ; ) {
var p=node.predecessor$();
if (p === this.head ) {
var r=this.tryAcquireShared$J(arg);
if (r >= 0) {
p$2.setHeadAndPropagate$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J.apply(this, [node, r]);
p.next=null;
failed=false;
return;
}}if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node(p, node) && p$2.parkAndCheckInterrupt.apply(this, []) ) throw Clazz.new_(Clazz.load('InterruptedException'));
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
}
}, p$2);

Clazz.newMeth(C$, 'doAcquireSharedNanos$J$J', function (arg, nanosTimeout) {
var lastTime=System.nanoTime$();
var node=p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [$I$(1).SHARED]);
var failed=true;
try {
for (; ; ) {
var p=node.predecessor$();
if (p === this.head ) {
var r=this.tryAcquireShared$J(arg);
if (r >= 0) {
p$2.setHeadAndPropagate$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J.apply(this, [node, r]);
p.next=null;
failed=false;
return true;
}}if (nanosTimeout <= 0) return false;
if (C$.shouldParkAfterFailedAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node(p, node) && nanosTimeout > 1000 ) $I$(3).parkNanos$O$J(this, nanosTimeout);
var now=System.nanoTime$();
nanosTimeout-=now - lastTime;
lastTime=now;
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
}
} finally {
if (failed) p$2.cancelAcquire$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
}
}, p$2);

Clazz.newMeth(C$, 'tryAcquire$J', function (arg) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'tryRelease$J', function (arg) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'tryAcquireShared$J', function (arg) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'tryReleaseShared$J', function (arg) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'isHeldExclusively$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'acquire$J', function (arg) {
if (!this.tryAcquire$J(arg) && this.acquireQueued$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J(p$2.addWaiter$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [$I$(1).EXCLUSIVE]), arg) ) C$.selfInterrupt$();
});

Clazz.newMeth(C$, 'acquireInterruptibly$J', function (arg) {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
if (!this.tryAcquire$J(arg)) p$2.doAcquireInterruptibly$J.apply(this, [arg]);
});

Clazz.newMeth(C$, 'tryAcquireNanos$J$J', function (arg, nanosTimeout) {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
return this.tryAcquire$J(arg) || p$2.doAcquireNanos$J$J.apply(this, [arg, nanosTimeout]) ;
});

Clazz.newMeth(C$, 'release$J', function (arg) {
if (this.tryRelease$J(arg)) {
var h=this.head;
if (h != null  && h.waitStatus != 0 ) p$2.unparkSuccessor$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [h]);
return true;
}return false;
});

Clazz.newMeth(C$, 'acquireShared$J', function (arg) {
if (this.tryAcquireShared$J(arg) < 0) p$2.doAcquireShared$J.apply(this, [arg]);
});

Clazz.newMeth(C$, 'acquireSharedInterruptibly$J', function (arg) {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
if (this.tryAcquireShared$J(arg) < 0) p$2.doAcquireSharedInterruptibly$J.apply(this, [arg]);
});

Clazz.newMeth(C$, 'tryAcquireSharedNanos$J$J', function (arg, nanosTimeout) {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
return this.tryAcquireShared$J(arg) >= 0 || p$2.doAcquireSharedNanos$J$J.apply(this, [arg, nanosTimeout]) ;
});

Clazz.newMeth(C$, 'releaseShared$J', function (arg) {
if (this.tryReleaseShared$J(arg)) {
p$2.doReleaseShared.apply(this, []);
return true;
}return false;
});

Clazz.newMeth(C$, 'hasQueuedThreads$', function () {
return this.head !== this.tail ;
});

Clazz.newMeth(C$, 'hasContended$', function () {
return this.head != null ;
});

Clazz.newMeth(C$, 'getFirstQueuedThread$', function () {
return (this.head === this.tail ) ? null : p$2.fullGetFirstQueuedThread.apply(this, []);
});

Clazz.newMeth(C$, 'fullGetFirstQueuedThread', function () {
var h;
var s;
var st;
if (((h=this.head) != null  && (s=h.next) != null   && s.prev === this.head   && (st=s.thread) != null  ) || ((h=this.head) != null  && (s=h.next) != null   && s.prev === this.head   && (st=s.thread) != null  ) ) return st;
var t=this.tail;
var firstThread=null;
while (t != null  && t !== this.head  ){
var tt=t.thread;
if (tt != null ) firstThread=tt;
t=t.prev;
}
return firstThread;
}, p$2);

Clazz.newMeth(C$, 'isQueued$Thread', function (thread) {
if (thread == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
for (var p=this.tail; p != null ; p=p.prev) if (p.thread === thread ) return true;

return false;
});

Clazz.newMeth(C$, 'apparentlyFirstQueuedIsExclusive$', function () {
var h;
var s;
return (h=this.head) != null  && (s=h.next) != null   && !s.isShared$()  && s.thread != null  ;
});

Clazz.newMeth(C$, 'hasQueuedPredecessors$', function () {
var t=this.tail;
var h=this.head;
var s;
return h !== t  && ((s=h.next) == null  || s.thread !== $I$(2).currentThread$()  ) ;
});

Clazz.newMeth(C$, 'getQueueLength$', function () {
var n=0;
for (var p=this.tail; p != null ; p=p.prev) {
if (p.thread != null ) ++n;
}
return n;
});

Clazz.newMeth(C$, 'getQueuedThreads$', function () {
var list=Clazz.new_($I$(4));
for (var p=this.tail; p != null ; p=p.prev) {
var t=p.thread;
if (t != null ) list.add$TE(t);
}
return list;
});

Clazz.newMeth(C$, 'getExclusiveQueuedThreads$', function () {
var list=Clazz.new_($I$(4));
for (var p=this.tail; p != null ; p=p.prev) {
if (!p.isShared$()) {
var t=p.thread;
if (t != null ) list.add$TE(t);
}}
return list;
});

Clazz.newMeth(C$, 'getSharedQueuedThreads$', function () {
var list=Clazz.new_($I$(4));
for (var p=this.tail; p != null ; p=p.prev) {
if (p.isShared$()) {
var t=p.thread;
if (t != null ) list.add$TE(t);
}}
return list;
});

Clazz.newMeth(C$, 'toString', function () {
var s=this.getState$();
var q=this.hasQueuedThreads$() ? "non" : "";
return C$.superclazz.prototype.toString.apply(this, []) + "[State = " + s + ", " + q + "empty queue]" ;
});

Clazz.newMeth(C$, 'isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node) {
if (node.waitStatus == -2 || node.prev == null  ) return false;
if (node.next != null ) return true;
return p$2.findNodeFromTail$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
});

Clazz.newMeth(C$, 'findNodeFromTail$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node) {
var t=this.tail;
for (; ; ) {
if (t === node ) return true;
if (t == null ) return false;
t=t.prev;
}
}, p$2);

Clazz.newMeth(C$, 'transferForSignal$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node) {
if (!C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$I$I(node, -2, 0)) return false;
var p=p$2.enq$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
var ws=p.waitStatus;
if (ws > 0 || !C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$I$I(p, ws, -1) ) $I$(3).unpark$Thread(node.thread);
return true;
});

Clazz.newMeth(C$, 'transferAfterCancelledWait$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node) {
if (C$.compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$I$I(node, -2, 0)) {
p$2.enq$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node]);
return true;
}while (!this.isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node(node))$I$(2).yield$();

return false;
});

Clazz.newMeth(C$, 'fullyRelease$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node) {
var failed=true;
try {
var savedState=this.getState$();
if (this.release$J(savedState)) {
failed=false;
return savedState;
} else {
throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
}} finally {
if (failed) node.waitStatus=1;
}
});

Clazz.newMeth(C$, 'owns$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_ConditionObject', function (condition) {
if (condition == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return condition.isOwnedBy$java_util_concurrent_locks_AbstractQueuedLongSynchronizer(this);
});

Clazz.newMeth(C$, 'hasWaiters$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_ConditionObject', function (condition) {
if (!this.owns$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_ConditionObject(condition)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not owner"]);
return condition.hasWaiters$();
});

Clazz.newMeth(C$, 'getWaitQueueLength$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_ConditionObject', function (condition) {
if (!this.owns$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_ConditionObject(condition)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not owner"]);
return condition.getWaitQueueLength$();
});

Clazz.newMeth(C$, 'getWaitingThreads$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_ConditionObject', function (condition) {
if (!this.owns$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_ConditionObject(condition)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not owner"]);
return condition.getWaitingThreads$();
});

Clazz.newMeth(C$, 'compareAndSetHead$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (update) {
return false;
}, p$2);

Clazz.newMeth(C$, 'compareAndSetTail$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (expect, update) {
return false;
}, p$2);

Clazz.newMeth(C$, 'compareAndSetWaitStatus$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$I$I', function (node, expect, update) {
return false;
}, 1);

Clazz.newMeth(C$, 'compareAndSetNext$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node, expect, update) {
return false;
}, 1);
;
(function(){var C$=Clazz.newClass(P$.AbstractQueuedLongSynchronizer, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.SHARED=null;
C$.EXCLUSIVE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.SHARED=Clazz.new_(C$);
C$.EXCLUSIVE=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.waitStatus=0;
this.prev=null;
this.next=null;
this.thread=null;
this.nextWaiter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isShared$', function () {
return this.nextWaiter === C$.SHARED ;
});

Clazz.newMeth(C$, 'predecessor$', function () {
var p=this.prev;
if (p == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
 else return p;
});

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Thread$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (thread, mode) {
C$.$init$.apply(this);
this.nextWaiter=mode;
this.thread=thread;
}, 1);

Clazz.newMeth(C$, 'c$$Thread$I', function (thread, waitStatus) {
C$.$init$.apply(this);
this.waitStatus=waitStatus;
this.thread=thread;
}, 1);
})()
;
(function(){var C$=Clazz.newClass(P$.AbstractQueuedLongSynchronizer, "ConditionObject", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.util.concurrent.locks.Condition', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.firstWaiter=null;
this.lastWaiter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addConditionWaiter', function () {
var t=this.lastWaiter;
if (t != null  && t.waitStatus != -2 ) {
p$1.unlinkCancelledWaiters.apply(this, []);
t=this.lastWaiter;
}var node=Clazz.new_($I$(1).c$$Thread$I,[$I$(2).currentThread$(), -2]);
if (t == null ) this.firstWaiter=node;
 else t.nextWaiter=node;
this.lastWaiter=node;
return node;
}, p$1);

Clazz.newMeth(C$, 'doSignal$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (first) {
do {
if ((this.firstWaiter=first.nextWaiter) == null ) this.lastWaiter=null;
first.nextWaiter=null;
} while (!this.this$0.transferForSignal$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [first]) && (first=this.firstWaiter) != null  );
}, p$1);

Clazz.newMeth(C$, 'doSignalAll$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (first) {
this.lastWaiter=this.firstWaiter=null;
do {
var next=first.nextWaiter;
first.nextWaiter=null;
this.this$0.transferForSignal$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [first]);
first=next;
} while (first != null );
}, p$1);

Clazz.newMeth(C$, 'unlinkCancelledWaiters', function () {
var t=this.firstWaiter;
var trail=null;
while (t != null ){
var next=t.nextWaiter;
if (t.waitStatus != -2) {
t.nextWaiter=null;
if (trail == null ) this.firstWaiter=next;
 else trail.nextWaiter=next;
if (next == null ) this.lastWaiter=trail;
} else trail=t;
t=next;
}
}, p$1);

Clazz.newMeth(C$, 'signal$', function () {
if (!this.this$0.isHeldExclusively$.apply(this.this$0, [])) throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
var first=this.firstWaiter;
if (first != null ) p$1.doSignal$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [first]);
});

Clazz.newMeth(C$, 'signalAll$', function () {
if (!this.this$0.isHeldExclusively$.apply(this.this$0, [])) throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
var first=this.firstWaiter;
if (first != null ) p$1.doSignalAll$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [first]);
});

Clazz.newMeth(C$, 'awaitUninterruptibly$', function () {
var node=p$1.addConditionWaiter.apply(this, []);
var savedState=this.this$0.fullyRelease$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node]);
var interrupted=false;
while (!this.this$0.isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node])){
$I$(3).park$O(this);
if ($I$(2).interrupted$()) interrupted=true;
}
if (this.this$0.acquireQueued$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J.apply(this.this$0, [node, savedState]) || interrupted ) P$.AbstractQueuedLongSynchronizer.selfInterrupt$();
});

Clazz.newMeth(C$, 'checkInterruptWhileWaiting$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node', function (node) {
return $I$(2).interrupted$() ? (this.this$0.transferAfterCancelledWait$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node]) ? -1 : 1) : 0;
}, p$1);

Clazz.newMeth(C$, 'reportInterruptAfterWait$I', function (interruptMode) {
if (interruptMode == -1) throw Clazz.new_(Clazz.load('InterruptedException'));
 else if (interruptMode == 1) P$.AbstractQueuedLongSynchronizer.selfInterrupt$();
}, p$1);

Clazz.newMeth(C$, 'await$', function () {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
var node=p$1.addConditionWaiter.apply(this, []);
var savedState=this.this$0.fullyRelease$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node]);
var interruptMode=0;
while (!this.this$0.isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node])){
$I$(3).park$O(this);
if ((interruptMode=p$1.checkInterruptWhileWaiting$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node])) != 0) break;
}
if (this.this$0.acquireQueued$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J.apply(this.this$0, [node, savedState]) && interruptMode != -1 ) interruptMode=1;
if (node.nextWaiter != null ) p$1.unlinkCancelledWaiters.apply(this, []);
if (interruptMode != 0) p$1.reportInterruptAfterWait$I.apply(this, [interruptMode]);
});

Clazz.newMeth(C$, 'awaitNanos$J', function (nanosTimeout) {
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
var node=p$1.addConditionWaiter.apply(this, []);
var savedState=this.this$0.fullyRelease$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node]);
var lastTime=System.nanoTime$();
var interruptMode=0;
while (!this.this$0.isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node])){
if (nanosTimeout <= 0) {
this.this$0.transferAfterCancelledWait$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node]);
break;
}$I$(3).parkNanos$O$J(this, nanosTimeout);
if ((interruptMode=p$1.checkInterruptWhileWaiting$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node])) != 0) break;
var now=System.nanoTime$();
nanosTimeout-=now - lastTime;
lastTime=now;
}
if (this.this$0.acquireQueued$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J.apply(this.this$0, [node, savedState]) && interruptMode != -1 ) interruptMode=1;
if (node.nextWaiter != null ) p$1.unlinkCancelledWaiters.apply(this, []);
if (interruptMode != 0) p$1.reportInterruptAfterWait$I.apply(this, [interruptMode]);
return nanosTimeout - (System.nanoTime$() - lastTime);
});

Clazz.newMeth(C$, 'awaitUntil$java_util_Date', function (deadline) {
if (deadline == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var abstime=deadline.getTime$();
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
var node=p$1.addConditionWaiter.apply(this, []);
var savedState=this.this$0.fullyRelease$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node]);
var timedout=false;
var interruptMode=0;
while (!this.this$0.isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node])){
if (System.currentTimeMillis$() > abstime) {
timedout=this.this$0.transferAfterCancelledWait$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node]);
break;
}$I$(3).parkUntil$O$J(this, abstime);
if ((interruptMode=p$1.checkInterruptWhileWaiting$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node])) != 0) break;
}
if (this.this$0.acquireQueued$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J.apply(this.this$0, [node, savedState]) && interruptMode != -1 ) interruptMode=1;
if (node.nextWaiter != null ) p$1.unlinkCancelledWaiters.apply(this, []);
if (interruptMode != 0) p$1.reportInterruptAfterWait$I.apply(this, [interruptMode]);
return !timedout;
});

Clazz.newMeth(C$, 'await$J$java_util_concurrent_TimeUnit', function (time, unit) {
if (unit == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var nanosTimeout=unit.toNanos$J(time);
if ($I$(2).interrupted$()) throw Clazz.new_(Clazz.load('InterruptedException'));
var node=p$1.addConditionWaiter.apply(this, []);
var savedState=this.this$0.fullyRelease$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node]);
var lastTime=System.nanoTime$();
var timedout=false;
var interruptMode=0;
while (!this.this$0.isOnSyncQueue$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node])){
if (nanosTimeout <= 0) {
timedout=this.this$0.transferAfterCancelledWait$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this.this$0, [node]);
break;
}if (nanosTimeout >= 1000) $I$(3).parkNanos$O$J(this, nanosTimeout);
if ((interruptMode=p$1.checkInterruptWhileWaiting$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node.apply(this, [node])) != 0) break;
var now=System.nanoTime$();
nanosTimeout-=now - lastTime;
lastTime=now;
}
if (this.this$0.acquireQueued$java_util_concurrent_locks_AbstractQueuedLongSynchronizer_Node$J.apply(this.this$0, [node, savedState]) && interruptMode != -1 ) interruptMode=1;
if (node.nextWaiter != null ) p$1.unlinkCancelledWaiters.apply(this, []);
if (interruptMode != 0) p$1.reportInterruptAfterWait$I.apply(this, [interruptMode]);
return !timedout;
});

Clazz.newMeth(C$, 'isOwnedBy$java_util_concurrent_locks_AbstractQueuedLongSynchronizer', function (sync) {
return sync === this.this$0 ;
});

Clazz.newMeth(C$, 'hasWaiters$', function () {
if (!this.this$0.isHeldExclusively$.apply(this.this$0, [])) throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
for (var w=this.firstWaiter; w != null ; w=w.nextWaiter) {
if (w.waitStatus == -2) return true;
}
return false;
});

Clazz.newMeth(C$, 'getWaitQueueLength$', function () {
if (!this.this$0.isHeldExclusively$.apply(this.this$0, [])) throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
var n=0;
for (var w=this.firstWaiter; w != null ; w=w.nextWaiter) {
if (w.waitStatus == -2) ++n;
}
return n;
});

Clazz.newMeth(C$, 'getWaitingThreads$', function () {
if (!this.this$0.isHeldExclusively$.apply(this.this$0, [])) throw Clazz.new_(Clazz.load('IllegalMonitorStateException'));
var list=Clazz.new_($I$(4));
for (var w=this.firstWaiter; w != null ; w=w.nextWaiter) {
if (w.waitStatus == -2) {
var t=w.thread;
if (t != null ) list.add$TE(t);
}}
return list;
});
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
