(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.util.LinkedList','sun.awt.AppContext','java.awt.EventQueue','Thread','swingjs.JSUtil','java.awt.Toolkit','sun.awt.SunToolkit','java.awt.SentEvent']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SequencedEvent", null, 'java.awt.AWTEvent', 'java.awt.ActiveEvent');
C$.list=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.list=Clazz.new_($I$(1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nested=null;
this.appContext=null;
this.disposed=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_AWTEvent', function (nested) {
C$.superclazz.c$$O$I.apply(this, [nested.getSource$(), 1006]);
C$.$init$.apply(this);
this.nested=nested;
{
C$.list.add$TE(this);
}}, 1);

Clazz.newMeth(C$, 'dispatch$', function () {
try {
this.appContext=$I$(2).getAppContext$();
if (C$.getFirst$() !== this ) {
if ($I$(3).isDispatchThread$()) {
var edt=$I$(4).currentThread$();
edt.pumpEvents$I$java_awt_Conditional(1007, ((P$.SequencedEvent$1||
(function(){var C$=Clazz.newClass(P$, "SequencedEvent$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.Conditional', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'evaluate$', function () {
return !this.b$['java.awt.SequencedEvent'].isFirstOrDisposed$.apply(this.b$['java.awt.SequencedEvent'], []);
});
})()
), Clazz.new_(P$.SequencedEvent$1.$init$, [this, null])));
} else {
while (!this.isFirstOrDisposed$()){
{
try {
$I$(5).warn$S("Cannot wait in SequenceEvent");
Clazz.getClass(C$).wait$J(1000);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
break;
} else {
throw e;
}
}
}}
}}if (!this.disposed) {
$I$(6).getEventQueue$().dispatchEvent$java_awt_AWTEvent(this.nested);
}} finally {
this.dispose$();
}
});

Clazz.newMeth(C$, 'isOwnerAppContextDisposed$java_awt_SequencedEvent', function (se) {
if (se != null ) {
var target=se.nested.getSource$();
if (Clazz.instanceOf(target, "java.awt.Component")) {
return (target).appContext.isDisposed$();
}}return false;
}, 1);

Clazz.newMeth(C$, 'isFirstOrDisposed$', function () {
if (this.disposed) {
return true;
}return this === C$.getFirstWithContext$()  || this.disposed ;
});

Clazz.newMeth(C$, 'getFirst$', function () {
return C$.list.getFirst$();
}, 1);

Clazz.newMeth(C$, 'getFirstWithContext$', function () {
var first=C$.getFirst$();
while (C$.isOwnerAppContextDisposed$java_awt_SequencedEvent(first)){
first.dispose$();
first=C$.getFirst$();
}
return first;
}, 1);

Clazz.newMeth(C$, 'dispose$', function () {
{
if (this.disposed) {
return;
}this.disposed=true;
}if (this.appContext != null ) {
$I$(7).postEvent$sun_awt_AppContext$java_awt_AWTEvent(this.appContext, Clazz.new_($I$(8)));
}var next=null;
{
Clazz.getClass(C$).notifyAll$();
if (C$.list.getFirst$() === this ) {
C$.list.removeFirst$();
if (!C$.list.isEmpty$()) {
next=C$.list.getFirst$();
}} else {
C$.list.remove$O(this);
}}if (next != null  && next.appContext != null  ) {
$I$(7).postEvent$sun_awt_AppContext$java_awt_AWTEvent(next.appContext, Clazz.new_($I$(8)));
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:25 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
