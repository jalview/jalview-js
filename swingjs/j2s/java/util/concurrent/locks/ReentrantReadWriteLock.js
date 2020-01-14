(function(){var P$=Clazz.newPackage("java.util.concurrent.locks"),I$=[[0,['java.util.concurrent.locks.ReentrantReadWriteLock','.ReadLock'],['java.util.concurrent.locks.ReentrantReadWriteLock','.WriteLock']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ReentrantReadWriteLock", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.util.concurrent.locks.ReadWriteLock', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.readerLock=null;
this.writerLock=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (fair) {
C$.$init$.apply(this);
this.readerLock=Clazz.new_($I$(1).c$$java_util_concurrent_locks_ReentrantReadWriteLock,[this]);
this.writerLock=Clazz.new_($I$(2).c$$java_util_concurrent_locks_ReentrantReadWriteLock,[this]);
}, 1);

Clazz.newMeth(C$, 'writeLock$', function () {
return this.writerLock;
});

Clazz.newMeth(C$, 'readLock$', function () {
return this.readerLock;
});

Clazz.newMeth(C$, 'isFair$', function () {
return true;
});

Clazz.newMeth(C$, 'getOwner$', function () {
return null;
});

Clazz.newMeth(C$, 'getReadLockCount$', function () {
return 1;
});

Clazz.newMeth(C$, 'isWriteLocked$', function () {
return false;
});

Clazz.newMeth(C$, 'isWriteLockedByCurrentThread$', function () {
return true;
});

Clazz.newMeth(C$, 'getWriteHoldCount$', function () {
return 1;
});

Clazz.newMeth(C$, 'getReadHoldCount$', function () {
return 1;
});

Clazz.newMeth(C$, 'getQueuedWriterThreads$', function () {
return null;
});

Clazz.newMeth(C$, 'getQueuedReaderThreads$', function () {
return null;
});

Clazz.newMeth(C$, 'hasQueuedThreads$', function () {
return false;
});

Clazz.newMeth(C$, 'hasQueuedThread$Thread', function (thread) {
return true;
});

Clazz.newMeth(C$, 'getQueueLength$', function () {
return 0;
});

Clazz.newMeth(C$, 'getQueuedThreads$', function () {
return null;
});

Clazz.newMeth(C$, 'hasWaiters$java_util_concurrent_locks_Condition', function (condition) {
return false;
});

Clazz.newMeth(C$, 'getWaitQueueLength$java_util_concurrent_locks_Condition', function (condition) {
return 0;
});

Clazz.newMeth(C$, 'getWaitingThreads$java_util_concurrent_locks_Condition', function (condition) {
return null;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "[Write locks, Read locks]";
});
;
(function(){var C$=Clazz.newClass(P$.ReentrantReadWriteLock, "ReadLock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.concurrent.locks.Lock', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_locks_ReentrantReadWriteLock', function (lock) {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'lock$', function () {
});

Clazz.newMeth(C$, 'lockInterruptibly$', function () {
});

Clazz.newMeth(C$, 'tryLock$', function () {
return true;
});

Clazz.newMeth(C$, 'tryLock$J$java_util_concurrent_TimeUnit', function (timeout, unit) {
return true;
});

Clazz.newMeth(C$, 'unlock$', function () {
});

Clazz.newMeth(C$, 'newCondition$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "[Read locks]";
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.ReentrantReadWriteLock, "WriteLock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.concurrent.locks.Lock', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_locks_ReentrantReadWriteLock', function (lock) {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'lock$', function () {
});

Clazz.newMeth(C$, 'lockInterruptibly$', function () {
});

Clazz.newMeth(C$, 'tryLock$', function () {
return true;
});

Clazz.newMeth(C$, 'tryLock$J$java_util_concurrent_TimeUnit', function (timeout, unit) {
return true;
});

Clazz.newMeth(C$, 'unlock$', function () {
});

Clazz.newMeth(C$, 'newCondition$', function () {
return null;
});

Clazz.newMeth(C$, 'toString', function () {
return "[Unlocked]";
});

Clazz.newMeth(C$, 'isHeldByCurrentThread$', function () {
return true;
});

Clazz.newMeth(C$, 'getHoldCount$', function () {
return 1;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:53 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
