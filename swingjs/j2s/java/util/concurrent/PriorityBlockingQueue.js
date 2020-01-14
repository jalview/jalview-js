(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.locks.ReentrantLock','java.util.PriorityQueue',['java.util.concurrent.PriorityBlockingQueue','.Itr']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PriorityBlockingQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', ['java.util.concurrent.BlockingQueue', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.q=null;
this.lock=null;
this.notEmpty=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.lock=Clazz.new_($I$(1).c$$Z,[true]);
this.notEmpty=this.lock.newCondition$();
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.q=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialCapacity) {
Clazz.super_(C$, this,1);
this.q=Clazz.new_($I$(2).c$$I$java_util_Comparator,[initialCapacity, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_Comparator', function (initialCapacity, comparator) {
Clazz.super_(C$, this,1);
this.q=Clazz.new_($I$(2).c$$I$java_util_Comparator,[initialCapacity, comparator]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection', function (c) {
Clazz.super_(C$, this,1);
this.q=Clazz.new_($I$(2).c$$java_util_Collection,[c]);
}, 1);

Clazz.newMeth(C$, ['add$TE'], function (e) {
return this.offer$TE(e);
});

Clazz.newMeth(C$, ['offer$TE'], function (e) {
var lock=this.lock;
lock.lock$();
try {
var ok=this.q.offer$TE(e);
Clazz.assert(C$, this, function(){return ok});
this.notEmpty.signal$();
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
return this.q.poll$();
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'take$', function () {
var lock=this.lock;
lock.lockInterruptibly$();
try {
try {
while (this.q.size$() == 0)this.notEmpty.await$();

} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
this.notEmpty.signal$();
throw ie;
} else {
throw ie;
}
}
var x=this.q.poll$();
Clazz.assert(C$, this, function(){return x != null });
return x;
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
var x=this.q.poll$();
if (x != null ) return x;
if (nanos <= 0) return null;
try {
nanos=this.notEmpty.awaitNanos$J(nanos);
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
this.notEmpty.signal$();
throw ie;
} else {
throw ie;
}
}
}
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

Clazz.newMeth(C$, 'comparator$', function () {
return this.q.comparator$();
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

Clazz.newMeth(C$, 'remainingCapacity$', function () {
return 2147483647;
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

Clazz.newMeth(C$, 'contains$O', function (o) {
var lock=this.lock;
lock.lock$();
try {
return this.q.contains$O(o);
} finally {
lock.unlock$();
}
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

Clazz.newMeth(C$, 'toString', function () {
var lock=this.lock;
lock.lock$();
try {
return this.q.toString();
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
var e;
while ((e=this.q.poll$()) != null ){
c.add$TE(e);
++n;
}
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
var e;
while (n < maxElements && (e=this.q.poll$()) != null  ){
c.add$TE(e);
++n;
}
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

Clazz.newMeth(C$, 'toArray$TTA', function (a) {
var lock=this.lock;
lock.lock$();
try {
return this.q.toArray$TTA(a);
} finally {
lock.unlock$();
}
});

Clazz.newMeth(C$, 'iterator$', function () {
return Clazz.new_($I$(3).c$$OA, [this, null, this.toArray$()]);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (s) {
this.lock.lock$();
try {
s.defaultWriteObject$();
} finally {
this.lock.unlock$();
}
}, p$1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.PriorityBlockingQueue, "Itr", function(){
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:52 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
