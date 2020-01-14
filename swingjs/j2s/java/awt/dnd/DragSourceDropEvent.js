(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
var C$=Clazz.newClass(P$, "DragSourceDropEvent", null, 'java.awt.dnd.DragSourceEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dropSuccess=false;
this.dropAction=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.dropAction=0;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext$I$Z', function (dsc, action, success) {
C$.superclazz.c$$java_awt_dnd_DragSourceContext.apply(this, [dsc]);
C$.$init$.apply(this);
this.dropSuccess=success;
this.dropAction=action;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext$I$Z$I$I', function (dsc, action, success, x, y) {
C$.superclazz.c$$java_awt_dnd_DragSourceContext$I$I.apply(this, [dsc, x, y]);
C$.$init$.apply(this);
this.dropSuccess=success;
this.dropAction=action;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext', function (dsc) {
C$.superclazz.c$$java_awt_dnd_DragSourceContext.apply(this, [dsc]);
C$.$init$.apply(this);
this.dropSuccess=false;
}, 1);

Clazz.newMeth(C$, 'getDropSuccess$', function () {
return this.dropSuccess;
});

Clazz.newMeth(C$, 'getDropAction$', function () {
return this.dropAction;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
