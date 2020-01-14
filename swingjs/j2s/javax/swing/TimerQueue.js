(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.util.concurrent.atomic.AtomicLong','java.util.concurrent.TimeUnit','StringBuffer','java.util.concurrent.DelayQueue','javax.swing.SwingUtilities','sun.awt.AppContext','Thread',['javax.swing.TimerQueue','.DelayedTimer'],'StringBuilder']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TimerQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Runnable');
C$.sharedInstanceKey=null;
C$.expiredTimersKey=null;
C$.classLock=null;
C$.NANO_ORIGIN=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.sharedInstanceKey=Clazz.new_($I$(3).c$$S,["TimerQueue.sharedInstanceKey"]);
C$.expiredTimersKey=Clazz.new_($I$(3).c$$S,["TimerQueue.expiredTimersKey"]);
C$.classLock= Clazz.new_();
C$.NANO_ORIGIN=System.nanoTime$();
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.queue=null;
this.running=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.queue=Clazz.new_($I$(4));
this.start$();
}, 1);

Clazz.newMeth(C$, 'sharedInstance$', function () {
{
var sharedInst=$I$(5).appContextGet$O(C$.sharedInstanceKey);
if (sharedInst == null ) {
sharedInst=Clazz.new_(C$);
$I$(5).appContextPut$O$O(C$.sharedInstanceKey, sharedInst);
}return sharedInst;
}}, 1);

Clazz.newMeth(C$, 'start$', function () {
if (this.running) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Can\'t start a TimerQueue that is already running"]);
} else {
var threadGroup=$I$(6).getAppContext$().getThreadGroup$();
var timerThread=Clazz.new_($I$(7).c$$ThreadGroup$Runnable$S,[threadGroup, this, "TimerQueue"]);
timerThread.setDaemon$Z(true);
timerThread.setPriority$I(5);
timerThread.start$();
this.running=true;
}});

Clazz.newMeth(C$, 'stop$', function () {
this.running=false;
});

Clazz.newMeth(C$, 'addTimer$javax_swing_Timer$J', function (timer, delayMillis) {
try {
if (!this.containsTimer$javax_swing_Timer(timer)) {
p$1.addTimer$javax_swing_TimerQueue_DelayedTimer.apply(this, [Clazz.new_($I$(8).c$$javax_swing_Timer$J,[timer, $I$(2).MILLISECONDS.toNanos$J(delayMillis) + C$.now$()])]);
}} finally {
}
});

Clazz.newMeth(C$, 'addTimer$javax_swing_TimerQueue_DelayedTimer', function (delayedTimer) {
Clazz.assert(C$, this, function(){return delayedTimer != null  && !this.containsTimer$javax_swing_Timer(delayedTimer.getTimer$()) });
var timer=delayedTimer.getTimer$();
try {
timer.delayedTimer=delayedTimer;
this.queue.add$TE(delayedTimer);
} finally {
}
}, p$1);

Clazz.newMeth(C$, 'removeTimer$javax_swing_Timer', function (timer) {
try {
if (timer.delayedTimer != null ) {
this.queue.remove$O(timer.delayedTimer);
timer.delayedTimer=null;
}} finally {
}
});

Clazz.newMeth(C$, 'containsTimer$javax_swing_Timer', function (timer) {
try {
return timer.delayedTimer != null ;
} finally {
}
});

Clazz.newMeth(C$, 'run$', function () {
try {
while (this.running){
try {
var timer=this.queue.take$().getTimer$();
try {
var delayedTimer=timer.delayedTimer;
if (delayedTimer != null ) {
timer.post$();
timer.delayedTimer=null;
if (timer.isRepeats$()) {
delayedTimer.setTime$J(C$.now$() + $I$(2).MILLISECONDS.toNanos$J(timer.getDelay$()));
p$1.addTimer$javax_swing_TimerQueue_DelayedTimer.apply(this, [delayedTimer]);
}}} catch (ignore) {
if (Clazz.exceptionOf(ignore,"SecurityException")){
} else {
throw ignore;
}
} finally {
}
} catch (ignore) {
if (Clazz.exceptionOf(ignore,"InterruptedException")){
} else {
throw ignore;
}
}
}
} catch (td) {
if (Clazz.exceptionOf(td,"ThreadDeath")){
{
this.running=false;
for (var delayedTimer, $delayedTimer = this.queue.iterator$(); $delayedTimer.hasNext$()&&((delayedTimer=($delayedTimer.next$())),1);) {
delayedTimer.getTimer$().cancelNotify$();
}
throw td;
}} else {
throw td;
}
}
});

Clazz.newMeth(C$, 'toString', function () {
var buf=Clazz.new_($I$(9));
buf.append$S("TimerQueue (");
var isFirst=true;
for (var delayedTimer, $delayedTimer = this.queue.iterator$(); $delayedTimer.hasNext$()&&((delayedTimer=($delayedTimer.next$())),1);) {
if (!isFirst) {
buf.append$S(", ");
}buf.append$S(delayedTimer.getTimer$().toString());
isFirst=false;
}
buf.append$S(")");
return buf.toString();
});

Clazz.newMeth(C$, 'now$', function () {
return System.nanoTime$() - C$.NANO_ORIGIN;
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){var C$=Clazz.newClass(P$.TimerQueue, "DelayedTimer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.concurrent.Delayed');
C$.sequencer=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.sequencer=Clazz.new_($I$(1).c$$J,[0]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.sequenceNumber=0;
this.time=0;
this.timer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Timer$J', function (timer, nanos) {
C$.$init$.apply(this);
this.timer=timer;
this.time=nanos;
this.sequenceNumber=C$.sequencer.getAndIncrement$();
}, 1);

Clazz.newMeth(C$, 'getDelay$java_util_concurrent_TimeUnit', function (unit) {
return unit.convert$J$java_util_concurrent_TimeUnit(this.time - P$.TimerQueue.now$(), $I$(2).NANOSECONDS);
});

Clazz.newMeth(C$, 'setTime$J', function (nanos) {
this.time=nanos;
});

Clazz.newMeth(C$, 'getTimer$', function () {
return this.timer;
});

Clazz.newMeth(C$, ['compareTo$java_util_concurrent_Delayed','compareTo$','compareTo$TT'], function (other) {
if (other === this ) {
return 0;
}if (Clazz.instanceOf(other, "javax.swing.TimerQueue.DelayedTimer")) {
var x=other;
var diff=this.time - x.time;
if (diff < 0) {
return -1;
} else if (diff > 0) {
return 1;
} else if (this.sequenceNumber < x.sequenceNumber) {
return -1;
} else {
return 1;
}}var d=(this.getDelay$java_util_concurrent_TimeUnit($I$(2).NANOSECONDS) - other.getDelay$java_util_concurrent_TimeUnit($I$(2).NANOSECONDS));
return (d == 0) ? 0 : ((d < 0) ? -1 : 1);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
