(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'Error']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModalityEvent", null, 'java.awt.AWTEvent', 'java.awt.ActiveEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.listener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$sun_awt_ModalityListener$I', function (source, listener, id) {
C$.superclazz.c$$O$I.apply(this, [source, id]);
C$.$init$.apply(this);
this.listener=listener;
}, 1);

Clazz.newMeth(C$, 'dispatch$', function () {
switch (this.getID$()) {
case 1300:
this.listener.modalityPushed$sun_awt_ModalityEvent(this);
break;
case 1301:
this.listener.modalityPopped$sun_awt_ModalityEvent(this);
break;
default:
throw Clazz.new_($I$(1).c$$S,["Invalid event id."]);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
