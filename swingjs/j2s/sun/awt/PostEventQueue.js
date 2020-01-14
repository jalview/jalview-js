(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'sun.awt.EventQueueItem','sun.awt.SunToolkit']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PostEventQueue");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.queueHead=null;
this.queueTail=null;
this.eventQueue=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.queueHead=null;
this.queueTail=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_EventQueue', function (eq) {
C$.$init$.apply(this);
this.eventQueue=eq;
}, 1);

Clazz.newMeth(C$, 'noEvents$', function () {
return this.queueHead == null ;
});

Clazz.newMeth(C$, 'flush$', function () {
if (this.queueHead != null ) {
var tempQueue;
{
tempQueue=this.queueHead;
this.queueHead=this.queueTail=null;
while (tempQueue != null ){
this.eventQueue.postEvent$java_awt_AWTEvent(tempQueue.event);
tempQueue=tempQueue.next;
}
}}});

Clazz.newMeth(C$, 'postEvent$java_awt_AWTEvent', function (event) {
var item=Clazz.new_($I$(1).c$$java_awt_AWTEvent,[event]);
{
if (this.queueHead == null ) {
this.queueHead=this.queueTail=item;
} else {
this.queueTail.next=item;
this.queueTail=item;
}}$I$(2).wakeupEventQueue$java_awt_EventQueue$Z(this.eventQueue, false);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
