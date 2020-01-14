(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'Runtime',['java.util.concurrent.Exchanger','.Slot'],'java.util.concurrent.atomic.AtomicInteger',['java.util.concurrent.Exchanger','.Node'],'java.util.concurrent.locks.LockSupport','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Exchanger", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.NCPU=0;
C$.FULL=0;
C$.SPINS=0;
C$.TIMED_SPINS=0;
C$.CANCEL=null;
C$.NULL_ITEM=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.NCPU=$I$(1).getRuntime$().availableProcessors$();
C$.FULL=Math.max(0, Math.min(32, (C$.NCPU/2|0)) - 1);
C$.SPINS=(C$.NCPU == 1) ? 0 : 2000;
C$.TIMED_SPINS=(C$.SPINS/20|0);
C$.CANCEL= Clazz.new_();
C$.NULL_ITEM= Clazz.new_();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.arena=null;
this.max=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.arena=Clazz.array($I$(2), [32]);
this.max=Clazz.new_($I$(3));
}, 1);

Clazz.newMeth(C$, 'doExchange$O$Z$J', function (item, timed, nanos) {
var me=Clazz.new_($I$(4).c$$O,[item]);
var index=p$1.hashIndex.apply(this, []);
var fails=0;
for (; ; ) {
var y;
var slot=this.arena[index];
if (slot == null ) p$1.createSlot$I.apply(this, [index]);
 else if ((y=slot.get$()) != null  && slot.compareAndSet$TV$TV(y, null) ) {
var you=y;
if (you.compareAndSet$TV$TV(null, item)) {
$I$(5).unpark$Thread(you.waiter);
return you.item;
}} else if (y == null  && slot.compareAndSet$TV$TV(null, me) ) {
if (index == 0) return timed ? p$1.awaitNanos$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot$J.apply(this, [me, slot, nanos]) : C$.await$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(me, slot);
var v=C$.spinWait$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(me, slot);
if (v !== C$.CANCEL ) return v;
me=Clazz.new_($I$(4).c$$O,[item]);
var m=this.max.get$();
if (m > (index>>>=1)) this.max.compareAndSet$I$I(m, m - 1);
} else if (++fails > 1) {
var m=this.max.get$();
if (fails > 3 && m < C$.FULL  && this.max.compareAndSet$I$I(m, m + 1) ) index=m + 1;
 else if (--index < 0) index=m;
}}
}, p$1);

Clazz.newMeth(C$, 'hashIndex', function () {
var id=$I$(6).currentThread$().getId$();
var hash=((((id ^ (id >>> 32))|0)) ^ -2128831035) * 16777619;
var m=this.max.get$();
var nbits=(((-1024 >> m) & 4) | ((504 >>> m) & 2) | ((-65294 >>> m) & 1) );
var index;
while ((index=hash & ((1 << nbits) - 1)) > m)hash=(hash >>> nbits) | (hash << (33 - nbits));

return index;
}, p$1);

Clazz.newMeth(C$, 'createSlot$I', function (index) {
var newSlot=Clazz.new_($I$(2));
var a=this.arena;
{
if (a[index] == null ) a[index]=newSlot;
}}, p$1);

Clazz.newMeth(C$, 'tryCancel$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot', function (node, slot) {
if (!node.compareAndSet$TV$TV(null, C$.CANCEL)) return false;
if (slot.get$() === node ) slot.compareAndSet$TV$TV(node, null);
return true;
}, 1);

Clazz.newMeth(C$, 'spinWait$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot', function (node, slot) {
var spins=C$.SPINS;
for (; ; ) {
var v=node.get$();
if (v != null ) return v;
 else if (spins > 0) --spins;
 else C$.tryCancel$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(node, slot);
}
}, 1);

Clazz.newMeth(C$, 'await$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot', function (node, slot) {
var w=$I$(6).currentThread$();
var spins=C$.SPINS;
for (; ; ) {
var v=node.get$();
if (v != null ) return v;
 else if (spins > 0) --spins;
 else if (node.waiter == null ) node.waiter=w;
 else if (w.isInterrupted$()) C$.tryCancel$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(node, slot);
 else $I$(5).park$O(node);
}
}, 1);

Clazz.newMeth(C$, 'awaitNanos$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot$J', function (node, slot, nanos) {
var spins=C$.TIMED_SPINS;
var lastTime=0;
var w=null;
for (; ; ) {
var v=node.get$();
if (v != null ) return v;
var now=System.nanoTime$();
if (w == null ) w=$I$(6).currentThread$();
 else nanos-=now - lastTime;
lastTime=now;
if (nanos > 0) {
if (spins > 0) --spins;
 else if (node.waiter == null ) node.waiter=w;
 else if (w.isInterrupted$()) C$.tryCancel$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(node, slot);
 else $I$(5).parkNanos$O$J(node, nanos);
} else if (C$.tryCancel$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(node, slot) && !w.isInterrupted$() ) return p$1.scanOnTimeout$java_util_concurrent_Exchanger_Node.apply(this, [node]);
}
}, p$1);

Clazz.newMeth(C$, 'scanOnTimeout$java_util_concurrent_Exchanger_Node', function (node) {
var y;
for (var j=this.arena.length - 1; j >= 0; --j) {
var slot=this.arena[j];
if (slot != null ) {
while ((y=slot.get$()) != null ){
if (slot.compareAndSet$TV$TV(y, null)) {
var you=y;
if (you.compareAndSet$TV$TV(null, node.item)) {
$I$(5).unpark$Thread(you.waiter);
return you.item;
}}}
}}
return C$.CANCEL;
}, p$1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'exchange$TV', function (x) {
if (!$I$(6).interrupted$()) {
var v=p$1.doExchange$O$Z$J.apply(this, [x == null  ? C$.NULL_ITEM : x, false, 0]);
if (v === C$.NULL_ITEM ) return null;
if (v !== C$.CANCEL ) return v;
$I$(6).interrupted$();
}throw Clazz.new_(Clazz.load('InterruptedException'));
});

Clazz.newMeth(C$, 'exchange$TV$J$java_util_concurrent_TimeUnit', function (x, timeout, unit) {
if (!$I$(6).interrupted$()) {
var v=p$1.doExchange$O$Z$J.apply(this, [x == null  ? C$.NULL_ITEM : x, true, unit.toNanos$J(timeout)]);
if (v === C$.NULL_ITEM ) return null;
if (v !== C$.CANCEL ) return v;
if (!$I$(6).interrupted$()) throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
}throw Clazz.new_(Clazz.load('InterruptedException'));
});
;
(function(){var C$=Clazz.newClass(P$.Exchanger, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicReference');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.item=null;
this.waiter=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O', function (item) {
Clazz.super_(C$, this,1);
this.item=item;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Exchanger, "Slot", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicReference');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.q0=0;
this.q1=0;
this.q2=0;
this.q3=0;
this.q4=0;
this.q5=0;
this.q6=0;
this.q7=0;
this.q8=0;
this.q9=0;
this.qa=0;
this.qb=0;
this.qc=0;
this.qd=0;
this.qe=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:52 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
