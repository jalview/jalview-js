(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EventQueueItem");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id'],'O',['event','java.awt.AWTEvent','next','java.awt.EventQueueItem']]]

Clazz.newMeth(C$, 'c$$java_awt_AWTEvent', function (evt) {
;C$.$init$.apply(this);
this.event=evt;
this.id=evt.getID$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:14:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
