(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
var C$=Clazz.newClass(P$, "AWTEventListenerProxy", null, 'java.util.EventListenerProxy', 'java.awt.event.AWTEventListener');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.eventMask=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$J$java_awt_event_AWTEventListener', function (eventMask, listener) {
C$.superclazz.c$$TT.apply(this, [listener]);
C$.$init$.apply(this);
this.eventMask=eventMask;
}, 1);

Clazz.newMeth(C$, ['eventDispatched$java_awt_AWTEvent','eventDispatched$'], function (evt) {
(this.getListener$()).eventDispatched$(evt);
});

Clazz.newMeth(C$, 'getEventMask$', function () {
return this.eventMask;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
