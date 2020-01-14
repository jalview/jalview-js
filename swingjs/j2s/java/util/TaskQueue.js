(function(){var P$=java.util,p$1={},p$2={},p$3={},I$=[[0,'java.util.concurrent.atomic.AtomicInteger','java.util.TaskQueue','java.util.TimerThread','java.util.TimerTask','java.util.Arrays']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TaskQueue");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.queue=null;
this.size=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.queue=Clazz.array($I$(4), [128]);
this.size=0;
}, 1);

Clazz.newMeth(C$, 'size$', function () {
return this.size;
});

Clazz.newMeth(C$, 'add$java_util_TimerTask', function (task) {
if (this.size + 1 == this.queue.length) this.queue=$I$(5).copyOf$TTA$I(this.queue, 2 * this.queue.length);
this.queue[++this.size]=task;
p$3.fixUp$I.apply(this, [this.size]);
});

Clazz.newMeth(C$, 'getMin$', function () {
return this.queue[1];
});

Clazz.newMeth(C$, 'get$I', function (i) {
return this.queue[i];
});

Clazz.newMeth(C$, 'removeMin$', function () {
this.queue[1]=this.queue[this.size];
this.queue[this.size--]=null;
p$3.fixDown$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'quickRemove$I', function (i) {
Clazz.assert(C$, this, function(){return i <= this.size});
this.queue[i]=this.queue[this.size];
this.queue[this.size--]=null;
});

Clazz.newMeth(C$, 'rescheduleMin$J', function (newTime) {
this.queue[1].nextExecutionTime=newTime;
p$3.fixDown$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.size == 0;
});

Clazz.newMeth(C$, 'clear$', function () {
for (var i=1; i <= this.size; i++) this.queue[i]=null;

this.size=0;
});

Clazz.newMeth(C$, 'fixUp$I', function (k) {
while (k > 1){
var j=k >> 1;
if (this.queue[j].nextExecutionTime <= this.queue[k].nextExecutionTime) break;
var tmp=this.queue[j];
this.queue[j]=this.queue[k];
this.queue[k]=tmp;
k=j;
}
}, p$3);

Clazz.newMeth(C$, 'fixDown$I', function (k) {
var j;
while ((j=k << 1) <= this.size && j > 0 ){
if (j < this.size && this.queue[j].nextExecutionTime > this.queue[j + 1].nextExecutionTime ) j++;
if (this.queue[k].nextExecutionTime <= this.queue[j].nextExecutionTime) break;
var tmp=this.queue[j];
this.queue[j]=this.queue[k];
this.queue[k]=tmp;
k=j;
}
}, p$3);

Clazz.newMeth(C$, 'heapify$', function () {
for (var i=(this.size/2|0); i >= 1; i--) p$3.fixDown$I.apply(this, [i]);

});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
