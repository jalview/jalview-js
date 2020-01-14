(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.atomic.AtomicReferenceFieldUpdater','java.util.concurrent.locks.LockSupport',['java.util.concurrent.SynchronousQueue','.TransferStack','.SNode'],'Thread','java.util.concurrent.SynchronousQueue',['java.util.concurrent.SynchronousQueue','.TransferQueue','.QNode'],'Runtime',['java.util.concurrent.SynchronousQueue','.TransferQueue'],['java.util.concurrent.SynchronousQueue','.TransferStack'],'java.util.Collections','java.util.concurrent.locks.ReentrantLock',['java.util.concurrent.SynchronousQueue','.FifoWaitQueue'],['java.util.concurrent.SynchronousQueue','.LifoWaitQueue']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SynchronousQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', ['java.util.concurrent.BlockingQueue', 'java.io.Serializable']);
C$.NCPUS=0;
C$.maxTimedSpins=0;
C$.maxUntimedSpins=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NCPUS=$I$(7).getRuntime$().availableProcessors$();
C$.maxTimedSpins=(C$.NCPUS < 2) ? 0 : 32;
C$.maxUntimedSpins=C$.maxTimedSpins * 16;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.transferer=null;
this.qlock=null;
this.waitingProducers=null;
this.waitingConsumers=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (fair) {
Clazz.super_(C$, this,1);
this.transferer=(fair) ? Clazz.new_($I$(8)) : Clazz.new_($I$(9));
}, 1);

Clazz.newMeth(C$, ['put$TE'], function (o) {
if (o == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.transferer.transfer$O$Z$J(o, false, 0) == null ) {
$I$(4).interrupted$();
throw Clazz.new_(Clazz.load('InterruptedException'));
}});

Clazz.newMeth(C$, ['offer$TE$J$java_util_concurrent_TimeUnit'], function (o, timeout, unit) {
if (o == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.transferer.transfer$O$Z$J(o, true, unit.toNanos$J(timeout)) != null ) return true;
if (!$I$(4).interrupted$()) return false;
throw Clazz.new_(Clazz.load('InterruptedException'));
});

Clazz.newMeth(C$, ['offer$TE'], function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
return this.transferer.transfer$O$Z$J(e, true, 0) != null ;
});

Clazz.newMeth(C$, 'take$', function () {
var e=this.transferer.transfer$O$Z$J(null, false, 0);
if (e != null ) return e;
$I$(4).interrupted$();
throw Clazz.new_(Clazz.load('InterruptedException'));
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit', function (timeout, unit) {
var e=this.transferer.transfer$O$Z$J(null, true, unit.toNanos$J(timeout));
if (e != null  || !$I$(4).interrupted$() ) return e;
throw Clazz.new_(Clazz.load('InterruptedException'));
});

Clazz.newMeth(C$, 'poll$', function () {
return this.transferer.transfer$O$Z$J(null, true, 0);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return true;
});

Clazz.newMeth(C$, 'size$', function () {
return 0;
});

Clazz.newMeth(C$, 'remainingCapacity$', function () {
return 0;
});

Clazz.newMeth(C$, 'clear$', function () {
});

Clazz.newMeth(C$, 'contains$O', function (o) {
return false;
});

Clazz.newMeth(C$, 'remove$O', function (o) {
return false;
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection', function (c) {
return c.isEmpty$();
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection', function (c) {
return false;
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection', function (c) {
return false;
});

Clazz.newMeth(C$, 'peek$', function () {
return null;
});

Clazz.newMeth(C$, 'iterator$', function () {
return $I$(10).emptyList$().iterator$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return Clazz.array(java.lang.Object, [0]);
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
if (a.length > 0) a[0]=null;
return a;
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection', function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var n=0;
var e;
while ((e=this.poll$()) != null ){
c.add$TE(e);
++n;
}
return n;
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection$I', function (c, maxElements) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var n=0;
var e;
while (n < maxElements && (e=this.poll$()) != null  ){
c.add$TE(e);
++n;
}
return n;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
var fair=Clazz.instanceOf(this.transferer, "java.util.concurrent.SynchronousQueue.TransferQueue");
if (fair) {
this.qlock=Clazz.new_($I$(11).c$$Z,[true]);
this.waitingProducers=Clazz.new_($I$(12));
this.waitingConsumers=Clazz.new_($I$(12));
} else {
this.qlock=Clazz.new_($I$(11));
this.waitingProducers=Clazz.new_($I$(13));
this.waitingConsumers=Clazz.new_($I$(13));
}s.defaultWriteObject$();
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function (s) {
s.defaultReadObject$();
if (Clazz.instanceOf(this.waitingProducers, "java.util.concurrent.SynchronousQueue.FifoWaitQueue")) this.transferer=Clazz.new_($I$(8));
 else this.transferer=Clazz.new_($I$(9));
}, p$1);
;
(function(){var C$=Clazz.newClass(P$.SynchronousQueue, "Transferer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SynchronousQueue, "TransferStack", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.SynchronousQueue','.Transferer']);
C$.headUpdater=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.headUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass($I$(3)), "head");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.head=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isFulfilling$I', function (m) {
return (m & 2) != 0;
}, 1);

Clazz.newMeth(C$, 'casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode', function (h, nh) {
return h === this.head  && C$.headUpdater.compareAndSet$TT$TV$TV(this, h, nh) ;
});

Clazz.newMeth(C$, 'snode$java_util_concurrent_SynchronousQueue_TransferStack_SNode$O$java_util_concurrent_SynchronousQueue_TransferStack_SNode$I', function (s, e, next, mode) {
if (s == null ) s=Clazz.new_($I$(3).c$$O,[e]);
s.mode=mode;
s.next=next;
return s;
}, 1);

Clazz.newMeth(C$, 'transfer$O$Z$J', function (e, timed, nanos) {
var s=null;
var mode=(e == null ) ? 0 : 1;
for (; ; ) {
var h=this.head;
if (h == null  || h.mode == mode ) {
if (timed && nanos <= 0 ) {
if (h != null  && h.isCancelled$() ) this.casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(h, h.next);
 else return null;
} else if (this.casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(h, s=C$.snode$java_util_concurrent_SynchronousQueue_TransferStack_SNode$O$java_util_concurrent_SynchronousQueue_TransferStack_SNode$I(s, e, h, mode))) {
var m=this.awaitFulfill$java_util_concurrent_SynchronousQueue_TransferStack_SNode$Z$J(s, timed, nanos);
if (m === s ) {
this.clean$java_util_concurrent_SynchronousQueue_TransferStack_SNode(s);
return null;
}if ((h=this.head) != null  && h.next === s  ) this.casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(h, s.next);
return mode == 0 ? m.item : s.item;
}} else if (!C$.isFulfilling$I(h.mode)) {
if (h.isCancelled$()) this.casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(h, h.next);
 else if (this.casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(h, s=C$.snode$java_util_concurrent_SynchronousQueue_TransferStack_SNode$O$java_util_concurrent_SynchronousQueue_TransferStack_SNode$I(s, e, h, 2 | mode))) {
for (; ; ) {
var m=s.next;
if (m == null ) {
this.casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(s, null);
s=null;
break;
}var mn=m.next;
if (m.tryMatch$java_util_concurrent_SynchronousQueue_TransferStack_SNode(s)) {
this.casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(s, mn);
return (mode == 0) ? m.item : s.item;
} else s.casNext$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(m, mn);
}
}} else {
var m=h.next;
if (m == null ) this.casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(h, null);
 else {
var mn=m.next;
if (m.tryMatch$java_util_concurrent_SynchronousQueue_TransferStack_SNode(h)) this.casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(h, mn);
 else h.casNext$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(m, mn);
}}}
});

Clazz.newMeth(C$, 'awaitFulfill$java_util_concurrent_SynchronousQueue_TransferStack_SNode$Z$J', function (s, timed, nanos) {
var lastTime=(timed) ? System.nanoTime$() : 0;
var w=$I$(4).currentThread$();
var h=this.head;
var spins=(this.shouldSpin$java_util_concurrent_SynchronousQueue_TransferStack_SNode(s) ? (timed ? $I$(5).maxTimedSpins : $I$(5).maxUntimedSpins) : 0);
for (; ; ) {
if (w.isInterrupted$()) s.tryCancel$();
var m=s.match;
if (m != null ) return m;
if (timed) {
var now=System.nanoTime$();
nanos-=now - lastTime;
lastTime=now;
if (nanos <= 0) {
s.tryCancel$();
continue;
}}if (spins > 0) spins=this.shouldSpin$java_util_concurrent_SynchronousQueue_TransferStack_SNode(s) ? (spins - 1) : 0;
 else if (s.waiter == null ) s.waiter=w;
 else if (!timed) $I$(2).park$O(this);
 else if (nanos > 1000) $I$(2).parkNanos$O$J(this, nanos);
}
});

Clazz.newMeth(C$, 'shouldSpin$java_util_concurrent_SynchronousQueue_TransferStack_SNode', function (s) {
var h=this.head;
return (h === s  || h == null   || C$.isFulfilling$I(h.mode) );
});

Clazz.newMeth(C$, 'clean$java_util_concurrent_SynchronousQueue_TransferStack_SNode', function (s) {
s.item=null;
s.waiter=null;
var past=s.next;
if (past != null  && past.isCancelled$() ) past=past.next;
var p;
while ((p=this.head) != null  && p !== past   && p.isCancelled$() )this.casHead$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(p, p.next);

while (p != null  && p !== past  ){
var n=p.next;
if (n != null  && n.isCancelled$() ) p.casNext$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode(n, n.next);
 else p=n;
}
});
;
(function(){var C$=Clazz.newClass(P$.SynchronousQueue.TransferStack, "SNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.nextUpdater=null;
C$.matchUpdater=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.nextUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass(C$), "next");
C$.matchUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass(C$), "match");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.next=null;
this.match=null;
this.waiter=null;
this.item=null;
this.mode=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O', function (item) {
C$.$init$.apply(this);
this.item=item;
}, 1);

Clazz.newMeth(C$, 'casNext$java_util_concurrent_SynchronousQueue_TransferStack_SNode$java_util_concurrent_SynchronousQueue_TransferStack_SNode', function (cmp, val) {
return (cmp === this.next  && C$.nextUpdater.compareAndSet$TT$TV$TV(this, cmp, val) );
});

Clazz.newMeth(C$, 'tryMatch$java_util_concurrent_SynchronousQueue_TransferStack_SNode', function (s) {
if (this.match == null  && C$.matchUpdater.compareAndSet$TT$TV$TV(this, null, s) ) {
var w=this.waiter;
if (w != null ) {
this.waiter=null;
$I$(2).unpark$Thread(w);
}return true;
}return this.match === s ;
});

Clazz.newMeth(C$, 'tryCancel$', function () {
C$.matchUpdater.compareAndSet$TT$TV$TV(this, null, this);
});

Clazz.newMeth(C$, 'isCancelled$', function () {
return this.match === this ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SynchronousQueue, "TransferQueue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.SynchronousQueue','.Transferer']);
C$.headUpdater=null;
C$.tailUpdater=null;
C$.cleanMeUpdater=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.headUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass($I$(6)), "head");
C$.tailUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass($I$(6)), "tail");
C$.cleanMeUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass($I$(6)), "cleanMe");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.head=null;
this.tail=null;
this.cleanMe=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
var h=Clazz.new_($I$(6).c$$O$Z,[null, false]);
this.head=h;
this.tail=h;
}, 1);

Clazz.newMeth(C$, 'advanceHead$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode', function (h, nh) {
if (h === this.head  && C$.headUpdater.compareAndSet$TT$TV$TV(this, h, nh) ) h.next=h;
});

Clazz.newMeth(C$, 'advanceTail$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode', function (t, nt) {
if (this.tail === t ) C$.tailUpdater.compareAndSet$TT$TV$TV(this, t, nt);
});

Clazz.newMeth(C$, 'casCleanMe$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode', function (cmp, val) {
return (this.cleanMe === cmp  && C$.cleanMeUpdater.compareAndSet$TT$TV$TV(this, cmp, val) );
});

Clazz.newMeth(C$, 'transfer$O$Z$J', function (e, timed, nanos) {
var s=null;
var isData=(e != null );
for (; ; ) {
var t=this.tail;
var h=this.head;
if (t == null  || h == null  ) continue;
if (h === t  || t.isData == isData  ) {
var tn=t.next;
if (t !== this.tail ) continue;
if (tn != null ) {
this.advanceTail$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(t, tn);
continue;
}if (timed && nanos <= 0 ) return null;
if (s == null ) s=Clazz.new_($I$(6).c$$O$Z,[e, isData]);
if (!t.casNext$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(null, s)) continue;
this.advanceTail$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(t, s);
var x=this.awaitFulfill$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$O$Z$J(s, e, timed, nanos);
if (x === s ) {
this.clean$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(t, s);
return null;
}if (!s.isOffList$()) {
this.advanceHead$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(t, s);
if (x != null ) s.item=s;
s.waiter=null;
}return (x != null ) ? x : e;
} else {
var m=h.next;
if (t !== this.tail  || m == null   || h !== this.head  ) continue;
var x=m.item;
if (isData == (x != null )  || x === m   || !m.casItem$O$O(x, e) ) {
this.advanceHead$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(h, m);
continue;
}this.advanceHead$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(h, m);
$I$(2).unpark$Thread(m.waiter);
return (x != null ) ? x : e;
}}
});

Clazz.newMeth(C$, 'awaitFulfill$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$O$Z$J', function (s, e, timed, nanos) {
var lastTime=(timed) ? System.nanoTime$() : 0;
var w=$I$(4).currentThread$();
var spins=((this.head.next === s ) ? (timed ? $I$(5).maxTimedSpins : $I$(5).maxUntimedSpins) : 0);
for (; ; ) {
if (w.isInterrupted$()) s.tryCancel$O(e);
var x=s.item;
if (x !== e ) return x;
if (timed) {
var now=System.nanoTime$();
nanos-=now - lastTime;
lastTime=now;
if (nanos <= 0) {
s.tryCancel$O(e);
continue;
}}if (spins > 0) --spins;
 else if (s.waiter == null ) s.waiter=w;
 else if (!timed) $I$(2).park$O(this);
 else if (nanos > 1000) $I$(2).parkNanos$O$J(this, nanos);
}
});

Clazz.newMeth(C$, 'clean$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode', function (pred, s) {
s.waiter=null;
while (pred.next === s ){
var h=this.head;
var hn=h.next;
if (hn != null  && hn.isCancelled$() ) {
this.advanceHead$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(h, hn);
continue;
}var t=this.tail;
if (t === h ) return;
var tn=t.next;
if (t !== this.tail ) continue;
if (tn != null ) {
this.advanceTail$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(t, tn);
continue;
}if (s !== t ) {
var sn=s.next;
if (sn === s  || pred.casNext$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(s, sn) ) return;
}var dp=this.cleanMe;
if (dp != null ) {
var d=dp.next;
var dn;
if (d == null  || d === dp   || !d.isCancelled$()  || (d !== t  && (dn=d.next) != null   && dn !== d   && dp.casNext$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(d, dn) ) ) this.casCleanMe$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(dp, null);
if (dp === pred ) return;
} else if (this.casCleanMe$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode(null, pred)) return;
}
});
;
(function(){var C$=Clazz.newClass(P$.SynchronousQueue.TransferQueue, "QNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.nextUpdater=null;
C$.itemUpdater=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.nextUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass(C$), "next");
C$.itemUpdater=$I$(1).newUpdater$Class$Class$S(Clazz.getClass(C$), Clazz.getClass(java.lang.Object), "item");
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.next=null;
this.item=null;
this.waiter=null;
this.isData=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$Z', function (item, isData) {
C$.$init$.apply(this);
this.item=item;
this.isData=isData;
}, 1);

Clazz.newMeth(C$, 'casNext$java_util_concurrent_SynchronousQueue_TransferQueue_QNode$java_util_concurrent_SynchronousQueue_TransferQueue_QNode', function (cmp, val) {
return (this.next === cmp  && C$.nextUpdater.compareAndSet$TT$TV$TV(this, cmp, val) );
});

Clazz.newMeth(C$, 'casItem$O$O', function (cmp, val) {
return (this.item === cmp  && C$.itemUpdater.compareAndSet$TT$TV$TV(this, cmp, val) );
});

Clazz.newMeth(C$, 'tryCancel$O', function (cmp) {
C$.itemUpdater.compareAndSet$TT$TV$TV(this, cmp, this);
});

Clazz.newMeth(C$, 'isCancelled$', function () {
return this.item === this ;
});

Clazz.newMeth(C$, 'isOffList$', function () {
return this.next === this ;
});

Clazz.newMeth(C$);
})()
})()
;
(function(){var C$=Clazz.newClass(P$.SynchronousQueue, "WaitQueue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SynchronousQueue, "LifoWaitQueue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.SynchronousQueue','.WaitQueue']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.SynchronousQueue, "FifoWaitQueue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.concurrent.SynchronousQueue','.WaitQueue']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
