(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,'java.util.concurrent.locks.ReentrantLock','java.util.PriorityQueue','java.util.concurrent.TimeUnit',['java.util.concurrent.DelayQueue','.Itr']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DelayQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', 'java.util.concurrent.BlockingQueue');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lock=null;
this.available=null;
this.q=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lock=Clazz.new_($I$(1));
this.available=this.lock.newCondition$();
this.q=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
Clazz.super_(C$, this,1);
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, ['add$TE'], function (e) {
return this.offer$TE(e);
});

Clazz.newMeth(C$, ['offer$TE'], function (e) {
var lock=this.lock;
lock.lock$();
try {
var first=this.q.peek$();
this.q.offer$TE(e);
if (first == null  || e.compareTo$(first) < 0 ) this.available.signalAll$();
return true;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, ['put$TE'], function (e) {
this.offer$TE(e);
});

Clazz.newMeth(C$, ['offer$TE$J$java_util_concurrent_TimeUnit'], function (e, timeout, unit) {
return this.offer$TE(e);
});

Clazz.newMeth(C$, 'poll$', function () {
var lock=this.lock;
lock.lock$();
try {
var first=this.q.peek$();
if (first == null  || first.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS) > 0 ) return null;
 else {
var x=this.q.poll$();
Clazz.assert(C$, this, function(){return x != null });
if (this.q.size$() != 0) this.available.signalAll$();
return x;
}} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'take$', function () {
var lock=this.lock;
lock.lockInterruptibly$();
try {
for (; ; ) {
var first=this.q.peek$();
if (first == null ) {
this.available.await$();
} else {
var delay=first.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS);
if (delay > 0) {
var tl=this.available.awaitNanos$J(delay);
} else {
var x=this.q.poll$();
Clazz.assert(C$, this, function(){return x != null });
if (this.q.size$() != 0) this.available.signalAll$();
return x;
}}}
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit', function (timeout, unit) {
var nanos=unit.toNanos$J(timeout);
var lock=this.lock;
lock.lockInterruptibly$();
try {
for (; ; ) {
var first=this.q.peek$();
if (first == null ) {
if (nanos <= 0) return null;
 else nanos=this.available.awaitNanos$J(nanos);
} else {
var delay=first.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS);
if (delay > 0) {
if (nanos <= 0) return null;
if (delay > nanos) delay=nanos;
var timeLeft=this.available.awaitNanos$J(delay);
nanos-=delay - timeLeft;
} else {
var x=this.q.poll$();
Clazz.assert(C$, this, function(){return x != null });
if (this.q.size$() != 0) this.available.signalAll$();
return x;
}}}
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'peek$', function () {
var lock=this.lock;
lock.lock$();
try {
return this.q.peek$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'size$', function () {
var lock=this.lock;
lock.lock$();
try {
return this.q.size$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection', function (c) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var lock=this.lock;
lock.lock$();
try {
var n=0;
for (; ; ) {
var first=this.q.peek$();
if (first == null  || first.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS) > 0 ) break;
c.add$TE(this.q.poll$());
++n;
}
if (n > 0) this.available.signalAll$();
return n;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'drainTo$java_util_Collection$I', function (c, maxElements) {
if (c == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (c === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (maxElements <= 0) return 0;
var lock=this.lock;
lock.lock$();
try {
var n=0;
while (n < maxElements){
var first=this.q.peek$();
if (first == null  || first.getDelay$java_util_concurrent_TimeUnit($I$(3).NANOSECONDS) > 0 ) break;
c.add$TE(this.q.poll$());
++n;
}
if (n > 0) this.available.signalAll$();
return n;
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'clear$', function () {
var lock=this.lock;
lock.lock$();
try {
this.q.clear$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remainingCapacity$', function () {
return 2147483647;
});

Clazz.newMeth(C$, 'toArray$', function () {
var lock=this.lock;
lock.lock$();
try {
return this.q.toArray$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
var lock=this.lock;
lock.lock$();
try {
return this.q.toArray$TTA(a);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'remove$O', function (o) {
var lock=this.lock;
lock.lock$();
try {
return this.q.remove$O(o);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(4).c$$OA, [this, null, this.toArray$()]);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.DelayQueue, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.array=null;
this.cursor=0;
this.lastRet=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$OA', function (array) {
C$.$init$.apply(this);
this.lastRet=-1;
this.array=array;
}, 1);

Clazz.newMeth(C$, 'hasNext$', function () {
return this.cursor < this.array.length;
});

Clazz.newMeth(C$, 'next$', function () {
if (this.cursor >= this.array.length) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastRet=this.cursor;
return this.array[this.cursor++];
});

Clazz.newMeth(C$, 'remove$', function () {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
var x=this.array[this.lastRet];
this.lastRet=-1;
this.this$0.lock.lock$();
try {
for (var it=this.this$0.q.iterator$(); it.hasNext$(); ) {
if (it.next$() === x ) {
it.remove$();
return;
}}
} finally {
this.this$0.lock.unlock$();
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
