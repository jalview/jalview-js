(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,['java.util.concurrent.CountDownLatch','.Sync']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CountDownLatch", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sync=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (count) {
C$.$init$.apply(this);
if (count < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["count < 0"]);
this.sync=Clazz.new_($I$(1).c$$I,[count]);
}, 1);

Clazz.newMeth(C$, 'await$', function () {
this.sync.acquireSharedInterruptibly$I(1);
});

Clazz.newMeth(C$, 'await$J$java_util_concurrent_TimeUnit', function (timeout, unit) {
return this.sync.tryAcquireSharedNanos$I$J(1, unit.toNanos$J(timeout));
});

Clazz.newMeth(C$, 'countDown$', function () {
this.sync.releaseShared$I(1);
});

Clazz.newMeth(C$, 'getCount$', function () {
return this.sync.getCount$();
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "[Count = " + this.sync.getCount$() + "]" ;
});
;
(function(){var C$=Clazz.newClass(P$.CountDownLatch, "Sync", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.locks.AbstractQueuedSynchronizer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (count) {
Clazz.super_(C$, this,1);
this.setState$I(count);
}, 1);

Clazz.newMeth(C$, 'getCount$', function () {
return this.getState$();
});

Clazz.newMeth(C$, 'tryAcquireShared$I', function (acquires) {
return this.getState$() == 0 ? 1 : -1;
});

Clazz.newMeth(C$, 'tryReleaseShared$I', function (releases) {
for (; ; ) {
var c=this.getState$();
if (c == 0) return false;
var nextc=c - 1;
if (this.compareAndSetState$I$I(c, nextc)) return nextc == 0;
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:51 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
