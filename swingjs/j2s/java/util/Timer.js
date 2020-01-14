(function(){var P$=java.util,p$1={},p$2={},p$3={},I$=[[0,'java.util.concurrent.atomic.AtomicInteger','java.util.TaskQueue','java.util.TimerThread','java.util.TimerTask','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Timer");
C$.nextSerialNumber=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.nextSerialNumber=Clazz.new_($I$(1).c$$I,[0]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.queue=null;
this.thread=null;
this.threadReaper=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.queue=Clazz.new_($I$(2));
this.thread=Clazz.new_($I$(3).c$$java_util_TaskQueue,[this.queue]);
this.threadReaper=((P$.Timer$1||
(function(){var C$=Clazz.newClass(P$, "Timer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'finalize$', function () {
{
this.b$['java.util.Timer'].thread.newTasksMayBeScheduled=false;
this.b$['java.util.Timer'].queue.notify$();
}});
})()
), Clazz.new_(P$.Timer$1.$init$, [this, null]));
}, 1);

Clazz.newMeth(C$, 'serialNumber$', function () {
return C$.nextSerialNumber.getAndIncrement$();
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S.apply(this, ["Timer-" + C$.serialNumber$()]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (isDaemon) {
C$.c$$S$Z.apply(this, ["Timer-" + C$.serialNumber$(), isDaemon]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.thread.setName$S(name);
this.thread.start$();
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (name, isDaemon) {
C$.$init$.apply(this);
this.thread.setName$S(name);
this.thread.setDaemon$Z(isDaemon);
this.thread.start$();
}, 1);

Clazz.newMeth(C$, 'schedule$java_util_TimerTask$J', function (task, delay) {
if (delay < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative delay."]);
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, System.currentTimeMillis$() + delay, 0]);
});

Clazz.newMeth(C$, 'schedule$java_util_TimerTask$java_util_Date', function (task, time) {
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, time.getTime$(), 0]);
});

Clazz.newMeth(C$, 'schedule$java_util_TimerTask$J$J', function (task, delay, period) {
if (delay < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative delay."]);
if (period <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive period."]);
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, System.currentTimeMillis$() + delay, -period]);
});

Clazz.newMeth(C$, 'schedule$java_util_TimerTask$java_util_Date$J', function (task, firstTime, period) {
if (period <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive period."]);
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, firstTime.getTime$(), -period]);
});

Clazz.newMeth(C$, 'scheduleAtFixedRate$java_util_TimerTask$J$J', function (task, delay, period) {
if (delay < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative delay."]);
if (period <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive period."]);
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, System.currentTimeMillis$() + delay, period]);
});

Clazz.newMeth(C$, 'scheduleAtFixedRate$java_util_TimerTask$java_util_Date$J', function (task, firstTime, period) {
if (period <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-positive period."]);
p$1.sched$java_util_TimerTask$J$J.apply(this, [task, firstTime.getTime$(), period]);
});

Clazz.newMeth(C$, 'sched$java_util_TimerTask$J$J', function (task, time, period) {
if (time < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal execution time."]);
if (Math.abs(period) > (4611686018427387903)) period>>=1;
{
if (!this.thread.newTasksMayBeScheduled) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Timer already cancelled."]);
{
if (task.state != 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Task already scheduled or cancelled"]);
task.nextExecutionTime=time;
task.period=period;
task.state=1;
}this.queue.add$java_util_TimerTask(task);
if (this.queue.getMin$() === task ) this.queue.notify$();
}}, p$1);

Clazz.newMeth(C$, 'cancel$', function () {
{
this.thread.newTasksMayBeScheduled=false;
this.queue.clear$();
this.queue.notify$();
}});

Clazz.newMeth(C$, 'purge$', function () {
var result=0;
{
for (var i=this.queue.size$(); i > 0; i--) {
if (this.queue.get$I(i).state == 3) {
this.queue.quickRemove$I(i);
result++;
}}
if (result != 0) this.queue.heapify$();
}return result;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
