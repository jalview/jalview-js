(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DragSourceDropEvent", null, 'java.awt.dnd.DragSourceEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dropAction=0;
},1);

C$.$fields$=[['Z',['dropSuccess'],'I',['dropAction']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext$I$Z',  function (dsc, action, success) {
;C$.superclazz.c$$java_awt_dnd_DragSourceContext.apply(this,[dsc]);C$.$init$.apply(this);
this.dropSuccess=success;
this.dropAction=action;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext$I$Z$I$I',  function (dsc, action, success, x, y) {
;C$.superclazz.c$$java_awt_dnd_DragSourceContext$I$I.apply(this,[dsc, x, y]);C$.$init$.apply(this);
this.dropSuccess=success;
this.dropAction=action;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSourceContext',  function (dsc) {
;C$.superclazz.c$$java_awt_dnd_DragSourceContext.apply(this,[dsc]);C$.$init$.apply(this);
this.dropSuccess=false;
}, 1);

Clazz.newMeth(C$, 'getDropSuccess$',  function () {
return this.dropSuccess;
});

Clazz.newMeth(C$, 'getDropAction$',  function () {
return this.dropAction;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:08:51 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
