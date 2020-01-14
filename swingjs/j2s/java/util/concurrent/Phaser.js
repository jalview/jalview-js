(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'Thread','java.util.concurrent.locks.LockSupport','Runtime','sun.misc.Unsafe','Error','java.util.concurrent.atomic.AtomicReference',['java.util.concurrent.Phaser','.QNode'],'java.util.concurrent.ForkJoinPool']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Phaser", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.NCPU=0;
C$.SPINS_PER_ARRIVAL=0;
C$.UNSAFE=null;
C$.stateOffset=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NCPU=$I$(3).getRuntime$().availableProcessors$();
C$.SPINS_PER_ARRIVAL=(C$.NCPU < 2) ? 1 : 256;
C$.stateOffset=0;
{
try {
C$.UNSAFE=$I$(4).getUnsafe$();
var k=Clazz.getClass(C$);
C$.stateOffset=C$.UNSAFE.objectFieldOffset$reflect_Field(k.getDeclaredField$S("state"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(5).c$$Throwable,[e]);
} else {
throw e;
}
}
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.state=0;
this.parent=null;
this.root=null;
this.evenQ=null;
this.oddQ=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'unarrivedOf$J', function (s) {
var counts=(s|0);
return (counts == 1) ? 0 : (counts & 65535);
}, 1);

Clazz.newMeth(C$, 'partiesOf$J', function (s) {
return (s|0) >>> 16;
}, 1);

Clazz.newMeth(C$, 'phaseOf$J', function (s) {
return ((s >>> 32)|0);
}, 1);

Clazz.newMeth(C$, 'arrivedOf$J', function (s) {
var counts=(s|0);
return (counts == 1) ? 0 : (counts >>> 16) - (counts & 65535);
}, 1);

Clazz.newMeth(C$, 'queueFor$I', function (phase) {
return ((phase & 1) == 0) ? this.evenQ : this.oddQ;
}, p$1);

Clazz.newMeth(C$, 'badArrive$J', function (s) {
return "Attempted arrival of unregistered party for " + p$1.stateToString$J.apply(this, [s]);
}, p$1);

Clazz.newMeth(C$, 'badRegister$J', function (s) {
return "Attempt to register more than " + 65535 + " parties for " + p$1.stateToString$J.apply(this, [s]) ;
}, p$1);

Clazz.newMeth(C$, 'doArrive$I', function (adjust) {
var root=this.root;
for (; ; ) {
var s=(root === this ) ? this.state : p$1.reconcileState.apply(this, []);
var phase=((s >>> 32)|0);
if (phase < 0) return phase;
var counts=(s|0);
var unarrived=(counts == 1) ? 0 : (counts & 65535);
if (unarrived <= 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[p$1.badArrive$J.apply(this, [s])]);
if (C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, s-=adjust)) {
if (unarrived == 1) {
var n=s & 4294901760;
var nextUnarrived=(n|0) >>> 16;
if (root === this ) {
if (this.onAdvance$I$I(phase, nextUnarrived)) n|=-9223372036854775808;
 else if (nextUnarrived == 0) n|=1;
 else n|=nextUnarrived;
var nextPhase=(phase + 1) & 2147483647;
n|=nextPhase << 32;
C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, n);
p$1.releaseWaiters$I.apply(this, [phase]);
} else if (nextUnarrived == 0) {
phase=p$1.doArrive$I.apply(this.parent, [65537]);
C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, s | 1);
} else phase=p$1.doArrive$I.apply(this.parent, [1]);
}return phase;
}}
}, p$1);

Clazz.newMeth(C$, 'doRegister$I', function (registrations) {
var adjust=(registrations << 16) | registrations;
var parent=this.parent;
var phase;
for (; ; ) {
var s=(parent == null ) ? this.state : p$1.reconcileState.apply(this, []);
var counts=(s|0);
var parties=counts >>> 16;
var unarrived=counts & 65535;
if (registrations > 65535 - parties) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[p$1.badRegister$J.apply(this, [s])]);
phase=((s >>> 32)|0);
if (phase < 0) break;
if (counts != 1) {
if (parent == null  || p$1.reconcileState.apply(this, []) == s ) {
if (unarrived == 0) p$1.internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode.apply(this.root, [phase, null]);
 else if (C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, s + adjust)) break;
}} else if (parent == null ) {
var next=(phase << 32) | adjust;
if (C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, next)) break;
} else {
{
if (this.state == s) {
phase=p$1.doRegister$I.apply(parent, [1]);
if (phase < 0) break;
while (!C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, (phase << 32) | adjust)){
s=this.state;
phase=((this.root.state >>> 32)|0);
}
break;
}}}}
return phase;
}, p$1);

Clazz.newMeth(C$, 'reconcileState', function () {
var root=this.root;
var s=this.state;
if (root !== this ) {
var phase;
var p;
while ((phase=((root.state >>> 32)|0)) != ((s >>> 32)|0) && !C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, s=((phase << 32) | ((phase < 0) ? (s & 4294967295) : (((p=(s|0) >>> 16) == 0) ? 1 : ((s & 4294901760) | p))))) )s=this.state;

}return s;
}, p$1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_concurrent_Phaser$I.apply(this, [null, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (parties) {
C$.c$$java_util_concurrent_Phaser$I.apply(this, [null, parties]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Phaser', function (parent) {
C$.c$$java_util_concurrent_Phaser$I.apply(this, [parent, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Phaser$I', function (parent, parties) {
C$.$init$.apply(this);
if (parties >>> 16 != 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal number of parties"]);
var phase=0;
this.parent=parent;
if (parent != null ) {
var root=parent.root;
this.root=root;
this.evenQ=root.evenQ;
this.oddQ=root.oddQ;
if (parties != 0) phase=p$1.doRegister$I.apply(parent, [1]);
} else {
this.root=this;
this.evenQ=Clazz.new_($I$(6));
this.oddQ=Clazz.new_($I$(6));
}this.state=(parties == 0) ? 1 : (phase << 32) | (parties << 16) | (parties) ;
}, 1);

Clazz.newMeth(C$, 'register$', function () {
return p$1.doRegister$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'bulkRegister$I', function (parties) {
if (parties < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (parties == 0) return this.getPhase$();
return p$1.doRegister$I.apply(this, [parties]);
});

Clazz.newMeth(C$, 'arrive$', function () {
return p$1.doArrive$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'arriveAndDeregister$', function () {
return p$1.doArrive$I.apply(this, [65537]);
});

Clazz.newMeth(C$, 'arriveAndAwaitAdvance$', function () {
var root=this.root;
for (; ; ) {
var s=(root === this ) ? this.state : p$1.reconcileState.apply(this, []);
var phase=((s >>> 32)|0);
if (phase < 0) return phase;
var counts=(s|0);
var unarrived=(counts == 1) ? 0 : (counts & 65535);
if (unarrived <= 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[p$1.badArrive$J.apply(this, [s])]);
if (C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, s-=1)) {
if (unarrived > 1) return p$1.internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode.apply(root, [phase, null]);
if (root !== this ) return this.parent.arriveAndAwaitAdvance$();
var n=s & 4294901760;
var nextUnarrived=(n|0) >>> 16;
if (this.onAdvance$I$I(phase, nextUnarrived)) n|=-9223372036854775808;
 else if (nextUnarrived == 0) n|=1;
 else n|=nextUnarrived;
var nextPhase=(phase + 1) & 2147483647;
n|=nextPhase << 32;
if (!C$.UNSAFE.compareAndSwapLong$O$J$J$J(this, C$.stateOffset, s, n)) return ((this.state >>> 32)|0);
p$1.releaseWaiters$I.apply(this, [phase]);
return nextPhase;
}}
});

Clazz.newMeth(C$, 'awaitAdvance$I', function (phase) {
var root=this.root;
var s=(root === this ) ? this.state : p$1.reconcileState.apply(this, []);
var p=((s >>> 32)|0);
if (phase < 0) return phase;
if (p == phase) return p$1.internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode.apply(root, [phase, null]);
return p;
});

Clazz.newMeth(C$, 'awaitAdvanceInterruptibly$I', function (phase) {
var root=this.root;
var s=(root === this ) ? this.state : p$1.reconcileState.apply(this, []);
var p=((s >>> 32)|0);
if (phase < 0) return phase;
if (p == phase) {
var node=Clazz.new_($I$(7).c$$java_util_concurrent_Phaser$I$Z$Z$J,[this, phase, true, false, 0]);
p=p$1.internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode.apply(root, [phase, node]);
if (node.wasInterrupted) throw Clazz.new_(Clazz.load('InterruptedException'));
}return p;
});

Clazz.newMeth(C$, 'awaitAdvanceInterruptibly$I$J$java_util_concurrent_TimeUnit', function (phase, timeout, unit) {
var nanos=unit.toNanos$J(timeout);
var root=this.root;
var s=(root === this ) ? this.state : p$1.reconcileState.apply(this, []);
var p=((s >>> 32)|0);
if (phase < 0) return phase;
if (p == phase) {
var node=Clazz.new_($I$(7).c$$java_util_concurrent_Phaser$I$Z$Z$J,[this, phase, true, true, nanos]);
p=p$1.internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode.apply(root, [phase, node]);
if (node.wasInterrupted) throw Clazz.new_(Clazz.load('InterruptedException'));
 else if (p == phase) throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
}return p;
});

Clazz.newMeth(C$, 'forceTermination$', function () {
var root=this.root;
var s;
while ((s=root.state) >= 0){
if (C$.UNSAFE.compareAndSwapLong$O$J$J$J(root, C$.stateOffset, s, s | -9223372036854775808)) {
p$1.releaseWaiters$I.apply(this, [0]);
p$1.releaseWaiters$I.apply(this, [1]);
return;
}}
});

Clazz.newMeth(C$, 'getPhase$', function () {
return ((this.root.state >>> 32)|0);
});

Clazz.newMeth(C$, 'getRegisteredParties$', function () {
return C$.partiesOf$J(this.state);
});

Clazz.newMeth(C$, 'getArrivedParties$', function () {
return C$.arrivedOf$J(p$1.reconcileState.apply(this, []));
});

Clazz.newMeth(C$, 'getUnarrivedParties$', function () {
return C$.unarrivedOf$J(p$1.reconcileState.apply(this, []));
});

Clazz.newMeth(C$, 'getParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'getRoot$', function () {
return this.root;
});

Clazz.newMeth(C$, 'isTerminated$', function () {
return this.root.state < 0;
});

Clazz.newMeth(C$, 'onAdvance$I$I', function (phase, registeredParties) {
return registeredParties == 0;
});

Clazz.newMeth(C$, 'toString', function () {
return p$1.stateToString$J.apply(this, [p$1.reconcileState.apply(this, [])]);
});

Clazz.newMeth(C$, 'stateToString$J', function (s) {
return C$.superclazz.prototype.toString.apply(this, []) + "[phase = " + C$.phaseOf$J(s) + " parties = " + C$.partiesOf$J(s) + " arrived = " + C$.arrivedOf$J(s) + "]" ;
}, p$1);

Clazz.newMeth(C$, 'releaseWaiters$I', function (phase) {
var q;
var t;
var head=(phase & 1) == 0 ? this.evenQ : this.oddQ;
while ((q=head.get$()) != null  && q.phase != ((this.root.state >>> 32)|0) ){
if (head.compareAndSet$TV$TV(q, q.next) && (t=q.thread) != null  ) {
q.thread=null;
$I$(2).unpark$Thread(t);
}}
}, p$1);

Clazz.newMeth(C$, 'abortWait$I', function (phase) {
var head=(phase & 1) == 0 ? this.evenQ : this.oddQ;
for (; ; ) {
var t;
var q=head.get$();
var p=((this.root.state >>> 32)|0);
if (q == null  || ((t=q.thread) != null  && q.phase == p ) ) return p;
if (head.compareAndSet$TV$TV(q, q.next) && t != null  ) {
q.thread=null;
$I$(2).unpark$Thread(t);
}}
}, p$1);

Clazz.newMeth(C$, 'internalAwaitAdvance$I$java_util_concurrent_Phaser_QNode', function (phase, node) {
p$1.releaseWaiters$I.apply(this, [phase - 1]);
var queued=false;
var lastUnarrived=0;
var spins=C$.SPINS_PER_ARRIVAL;
var s;
var p;
while ((p=(((s=this.state) >>> 32)|0)) == phase){
if (node == null ) {
var unarrived=(s|0) & 65535;
if (unarrived != lastUnarrived && (lastUnarrived=unarrived) < C$.NCPU ) spins+=C$.SPINS_PER_ARRIVAL;
var interrupted=$I$(1).interrupted$();
if (interrupted || --spins < 0 ) {
node=Clazz.new_($I$(7).c$$java_util_concurrent_Phaser$I$Z$Z$J,[this, phase, false, false, 0]);
node.wasInterrupted=interrupted;
}} else if (node.isReleasable$()) break;
 else if (!queued) {
var head=(phase & 1) == 0 ? this.evenQ : this.oddQ;
var q=node.next=head.get$();
if ((q == null  || q.phase == phase ) && ((this.state >>> 32)|0) == phase ) queued=head.compareAndSet$TV$TV(q, node);
} else {
try {
$I$(8).managedBlock$java_util_concurrent_ForkJoinPool_ManagedBlocker(node);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
node.wasInterrupted=true;
} else {
throw ie;
}
}
}}
if (node != null ) {
if (node.thread != null ) node.thread=null;
if (node.wasInterrupted && !node.interruptible ) $I$(1).currentThread$().interrupt$();
if (p == phase && (p=((this.state >>> 32)|0)) == phase ) return p$1.abortWait$I.apply(this, [phase]);
}p$1.releaseWaiters$I.apply(this, [phase]);
return p;
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.Phaser, "QNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.concurrent.ForkJoinPool','java.util.concurrent.ForkJoinPool.ManagedBlocker']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.phaser=null;
this.phase=0;
this.interruptible=false;
this.timed=false;
this.wasInterrupted=false;
this.nanos=0;
this.deadline=0;
this.thread=null;
this.next=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Phaser$I$Z$Z$J', function (phaser, phase, interruptible, timed, nanos) {
C$.$init$.apply(this);
this.phaser=phaser;
this.phase=phase;
this.interruptible=interruptible;
this.nanos=nanos;
this.timed=timed;
this.deadline=timed ? System.nanoTime$() + nanos : 0;
this.thread=$I$(1).currentThread$();
}, 1);

Clazz.newMeth(C$, 'isReleasable$', function () {
if (this.thread == null ) return true;
if (this.phaser.getPhase$() != this.phase) {
this.thread=null;
return true;
}if ($I$(1).interrupted$()) this.wasInterrupted=true;
if (this.wasInterrupted && this.interruptible ) {
this.thread=null;
return true;
}if (this.timed) {
if (this.nanos > 0) {
this.nanos=this.deadline - System.nanoTime$();
}if (this.nanos <= 0) {
this.thread=null;
return true;
}}return false;
});

Clazz.newMeth(C$, 'block$', function () {
if (this.isReleasable$()) return true;
 else if (!this.timed) $I$(2).park$O(this);
 else if (this.nanos > 0) $I$(2).parkNanos$O$J(this, this.nanos);
return this.isReleasable$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:52 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
