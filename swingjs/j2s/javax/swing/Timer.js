(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.Timer','java.awt.event.ActionEvent','javax.swing.event.EventListenerList','java.util.concurrent.atomic.AtomicBoolean',['javax.swing.Timer','.DoPostEvent'],'java.awt.event.ActionListener','swingjs.JSToolkit','javax.swing.SwingUtilities']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Timer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.logTimers=false;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.listenerList=null;
this.notify=null;
this.initialDelay=0;
this.delay=0;
this.repeats0=false;
this.repeats=false;
this.coalesce=false;
this.doPostEvent=null;
this.delayedTimer=null;
this.actionCommand=null;
this.postTime=0;
this.html5Id=0;
this.dispatchTime=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.listenerList=Clazz.new_($I$(3));
this.notify=Clazz.new_($I$(4).c$$Z,[false]);
this.repeats0=true;
this.repeats=true;
this.coalesce=true;
this.delayedTimer=null;
this.html5Id=-2147483648;
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_event_ActionListener', function (delay, listener) {
C$.$init$.apply(this);
this.initialDelay=this.delay=(delay < 0 ? 0 : delay);
this.doPostEvent=Clazz.new_($I$(5), [this, null]);
if (listener != null ) {
this.addActionListener$java_awt_event_ActionListener(listener);
}}, 1);

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener', function (listener) {
this.listenerList.add$Class$TT(Clazz.getClass($I$(6),['actionPerformed$java_awt_event_ActionEvent']), listener);
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener', function (listener) {
this.listenerList.remove$Class$TT(Clazz.getClass($I$(6),['actionPerformed$java_awt_event_ActionEvent']), listener);
});

Clazz.newMeth(C$, 'getActionListeners$', function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(6),['actionPerformed$java_awt_event_ActionEvent']));
});

Clazz.newMeth(C$, 'fireActionPerformed$java_awt_event_ActionEvent', function (e) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['actionPerformed$java_awt_event_ActionEvent']) ) {
(listeners[i + 1]).actionPerformed$(e);
}}
});

Clazz.newMeth(C$, 'getListeners$Class', function (listenerType) {
return this.listenerList.getListeners$Class(listenerType);
});

Clazz.newMeth(C$, 'setLogTimers$Z', function (flag) {
C$.logTimers=flag;
}, 1);

Clazz.newMeth(C$, 'getLogTimers$', function () {
return C$.logTimers;
}, 1);

Clazz.newMeth(C$, 'setDelay$I', function (delay) {
if (delay < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid delay: " + delay]);
} else {
this.delay=delay;
}});

Clazz.newMeth(C$, 'getDelay$', function () {
return this.delay;
});

Clazz.newMeth(C$, 'setInitialDelay$I', function (initialDelay) {
if (initialDelay < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid initial delay: " + initialDelay]);
} else {
this.initialDelay=initialDelay;
}});

Clazz.newMeth(C$, 'getInitialDelay$', function () {
return this.initialDelay;
});

Clazz.newMeth(C$, 'setRepeats$Z', function (flag) {
this.repeats0=this.repeats=flag;
});

Clazz.newMeth(C$, 'isRepeats$', function () {
return this.repeats;
});

Clazz.newMeth(C$, 'setCoalesce$Z', function (flag) {
var old=this.coalesce;
this.coalesce=flag;
if (!old && this.coalesce ) {
this.cancelNotify$();
}});

Clazz.newMeth(C$, 'isCoalesce$', function () {
return this.coalesce;
});

Clazz.newMeth(C$, 'setActionCommand$S', function (command) {
this.actionCommand=command;
});

Clazz.newMeth(C$, 'getActionCommand$', function () {
return this.actionCommand;
});

Clazz.newMeth(C$, 'start$', function () {
this.repeats=this.repeats0;
p$1.timerQueue.apply(this, []).add$TE(this);
p$1.dispatch$I.apply(this, [this.getInitialDelay$()]);
});

Clazz.newMeth(C$, 'dispatch$I', function (msDelay) {
this.html5Id=-2147483648;
var r=((P$.Timer$1||
(function(){var C$=Clazz.newClass(P$, "Timer$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['javax.swing.Timer'].postTime=System.currentTimeMillis$();
if ($I$(1).logTimers) System.out.println$S("timer " + this.b$['javax.swing.Timer'].html5Id + " posted at " + this.b$['javax.swing.Timer'].postTime );
this.b$['javax.swing.Timer'].post$.apply(this.b$['javax.swing.Timer'], []);
});
})()
), Clazz.new_(P$.Timer$1.$init$, [this, null]));
this.html5Id=$I$(7).dispatch$O$I$I(r, msDelay, 0);
this.dispatchTime=System.currentTimeMillis$();
if (C$.logTimers) System.out.println$S("timer " + this.html5Id + " dispatched at " + this.dispatchTime );
}, p$1);

Clazz.newMeth(C$, 'isRunning$', function () {
return p$1.timerQueue.apply(this, []).contains$O(this);
});

Clazz.newMeth(C$, 'stop$', function () {
this.stop$I(this.html5Id);
});

Clazz.newMeth(C$, 'stop$I', function (id) {
if (id != this.html5Id) return;
$I$(7).killDispatched$I(this.html5Id);
this.cancelNotify$();
this.repeats=false;
p$1.timerQueue.apply(this, []).remove$O(this);
this.html5Id=-2147483648;
});

Clazz.newMeth(C$, 'timerQueue', function () {
return $I$(7).getTimerQueue$();
}, p$1);

Clazz.newMeth(C$, 'restart$', function () {
this.stop$();
this.start$();
});

Clazz.newMeth(C$, 'cancelNotify$', function () {
this.notify.set$Z(false);
});

Clazz.newMeth(C$, 'post$', function () {
if (this.notify.compareAndSet$Z$Z(false, true) || !this.coalesce ) {
$I$(8).invokeLater$Runnable(this.doPostEvent);
}});
;
(function(){var C$=Clazz.newClass(P$.Timer, "DoPostEvent", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Runnable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if ($I$(1).logTimers) {
System.out.println$S("Timer ringing: " + this.this$0);
}var id=this.this$0.html5Id;
if (this.this$0.notify.get$()) {
this.this$0.fireActionPerformed$java_awt_event_ActionEvent.apply(this.this$0, [Clazz.new_($I$(2).c$$O$I$S$J$I,[this.this$0, 0, this.this$0.getActionCommand$.apply(this.this$0, []), System.currentTimeMillis$(), 0])]);
if (this.this$0.coalesce) {
this.this$0.cancelNotify$.apply(this.this$0, []);
}}if (this.this$0.isRepeats$.apply(this.this$0, [])) p$1.dispatch$I.apply(this.this$0, [this.this$0.getDelay$.apply(this.this$0, [])]);
 else this.this$0.stop$I.apply(this.this$0, [id]);
});

Clazz.newMeth(C$, 'getTimer$', function () {
return this.this$0;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
