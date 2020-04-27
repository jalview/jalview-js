(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'sun.misc.TimerThread','sun.misc.TimerTickThread','Thread']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimerTickThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.next=null;
},1);

C$.$fields$=[['J',['lastSleepUntil'],'O',['+next','timer','sun.misc.Timer']]
,['I',['curPoolSize'],'O',['pool','sun.misc.TimerTickThread']]]

Clazz.newMeth(C$, 'call$sun_misc_Timer$J', function (timer, sleepUntil) {
var thread=C$.pool;
if (thread == null ) {
thread=Clazz.new_(C$);
thread.timer=timer;
thread.lastSleepUntil=sleepUntil;
thread.start$();
} else {
C$.pool=C$.pool.next;
thread.timer=timer;
thread.lastSleepUntil=sleepUntil;
{
thread.notify$();
}}return thread;
}, 1);

Clazz.newMeth(C$, 'returnToPool', function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getClass$());
{
if (C$.curPoolSize >= 3) {
return false;
}this.next=C$.pool;
C$.pool=this;
C$.curPoolSize++;
this.timer=null;
}while (this.timer == null ){
{
try {
this.wait$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"InterruptedException")){
} else {
throw ex;
}
}
}}
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getClass$());
{
C$.curPoolSize--;
}return true;
}, p$1);

Clazz.newMeth(C$, 'run$', function () {
do {
this.timer.owner.tick$sun_misc_Timer(this.timer);
{
{
if (this.lastSleepUntil == this.timer.sleepUntil) {
$I$(1).requeue$sun_misc_Timer(this.timer);
}}}} while (p$1.returnToPool.apply(this, []));
});

C$.$static$=function(){C$.$static$=0;
C$.curPoolSize=0;
C$.pool=null;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
