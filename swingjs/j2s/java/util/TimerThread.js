(function(){var P$=java.util,p$1={},p$2={},p$3={},I$=[[0,'java.util.concurrent.atomic.AtomicInteger','java.util.TaskQueue','java.util.TimerThread','java.util.TimerTask','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TimerThread", null, 'Thread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.newTasksMayBeScheduled=false;
this.queue=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.newTasksMayBeScheduled=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_TaskQueue', function (queue) {
Clazz.super_(C$, this,1);
this.queue=queue;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
try {
p$2.mainLoop.apply(this, []);
} finally {
{
this.newTasksMayBeScheduled=false;
this.queue.clear$();
}}
});

Clazz.newMeth(C$, 'mainLoop', function () {
while (true){
try {
var task;
var taskFired;
{
while (this.queue.isEmpty$() && this.newTasksMayBeScheduled )this.queue.wait$();

if (this.queue.isEmpty$()) break;
var currentTime;
var executionTime;
task=this.queue.getMin$();
{
if (task.state == 3) {
this.queue.removeMin$();
continue;
}currentTime=System.currentTimeMillis$();
executionTime=task.nextExecutionTime;
if (taskFired=(executionTime <= currentTime)) {
if (task.period == 0) {
this.queue.removeMin$();
task.state=2;
} else {
this.queue.rescheduleMin$J(task.period < 0 ? currentTime - task.period : executionTime + task.period);
}}}if (!taskFired) this.queue.wait$J(executionTime - currentTime);
}if (taskFired) task.run$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
}, p$2);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
