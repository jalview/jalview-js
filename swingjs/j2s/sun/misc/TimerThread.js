(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'sun.misc.TimerThread','sun.misc.TimerTickThread','Thread']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimerThread", null, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['debug','notified'],'O',['timerThread','sun.misc.TimerThread','timerQueue','sun.misc.Timer']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["TimerThread"]);C$.$init$.apply(this);
C$.timerThread=this;
this.start$();
}, 1);

Clazz.newMeth(C$, 'run$', function () {
while (true){
var delay;
while (C$.timerQueue == null ){
try {
this.wait$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"InterruptedException")){
} else {
throw ex;
}
}
}
C$.notified=false;
delay=C$.timerQueue.sleepUntil - System.currentTimeMillis$();
if (delay > 0) {
try {
this.wait$J(delay);
} catch (ex) {
if (Clazz.exceptionOf(ex,"InterruptedException")){
} else {
throw ex;
}
}
}if (!C$.notified) {
var timer=C$.timerQueue;
C$.timerQueue=C$.timerQueue.next;
var thr=$I$(2).call$sun_misc_Timer$J(timer, timer.sleepUntil);
if (C$.debug) {
var delta=(System.currentTimeMillis$() - timer.sleepUntil);
System.out.println$S("tick(" + thr.getName$() + "," + timer.interval + "," + delta + ")" );
if (delta > 250) {
System.out.println$S("*** BIG DELAY ***");
}}}}
});

Clazz.newMeth(C$, 'enqueue$sun_misc_Timer', function (timer) {
var prev=null;
var cur=C$.timerQueue;
if (cur == null  || timer.sleepUntil <= cur.sleepUntil ) {
timer.next=C$.timerQueue;
C$.timerQueue=timer;
C$.notified=true;
C$.timerThread.notify$();
} else {
do {
prev=cur;
cur=cur.next;
} while (cur != null  && timer.sleepUntil > cur.sleepUntil );
timer.next=cur;
prev.next=timer;
}if (C$.debug) {
var now=System.currentTimeMillis$();
System.out.print$S($I$(3).currentThread$().getName$() + ": enqueue " + timer.interval + ": " );
cur=C$.timerQueue;
while (cur != null ){
var delta=cur.sleepUntil - now;
System.out.print$S(cur.interval + "(" + delta + ") " );
cur=cur.next;
}
System.out.println$();
}}, 1);

Clazz.newMeth(C$, 'dequeue$sun_misc_Timer', function (timer) {
var prev=null;
var cur=C$.timerQueue;
while (cur != null  && cur !== timer  ){
prev=cur;
cur=cur.next;
}
if (cur == null ) {
if (C$.debug) {
System.out.println$S($I$(3).currentThread$().getName$() + ": dequeue " + timer.interval + ": no-op" );
}return false;
}if (prev == null ) {
C$.timerQueue=timer.next;
C$.notified=true;
C$.timerThread.notify$();
} else {
prev.next=timer.next;
}timer.next=null;
if (C$.debug) {
var now=System.currentTimeMillis$();
System.out.print$S($I$(3).currentThread$().getName$() + ": dequeue " + timer.interval + ": " );
cur=C$.timerQueue;
while (cur != null ){
var delta=cur.sleepUntil - now;
System.out.print$S(cur.interval + "(" + delta + ") " );
cur=cur.next;
}
System.out.println$();
}return true;
}, 1);

Clazz.newMeth(C$, 'requeue$sun_misc_Timer', function (timer) {
if (!timer.stopped) {
var now=System.currentTimeMillis$();
if (timer.regular) {
timer.sleepUntil+=timer.interval;
} else {
timer.sleepUntil=now + timer.interval;
}C$.enqueue$sun_misc_Timer(timer);
} else if (C$.debug) {
System.out.println$S($I$(3).currentThread$().getName$() + ": requeue " + timer.interval + ": no-op" );
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.debug=false;
C$.notified=false;
C$.timerQueue=null;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
