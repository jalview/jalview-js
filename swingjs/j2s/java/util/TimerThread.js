(function(){var P$=java.util,p$1={},p$2={},p$3={},I$=[[0,'java.util.concurrent.atomic.AtomicInteger','java.util.TaskQueue','java.util.TimerThread','java.util.TimerTask','java.util.Arrays']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimerThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.newTasksMayBeScheduled=true;
},1);

C$.$fields$=[['Z',['newTasksMayBeScheduled'],'O',['queue','java.util.TaskQueue']]]

Clazz.newMeth(C$, 'c$$java_util_TaskQueue', function (queue) {
Clazz.super_(C$, this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-12-19 07:39:32 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
