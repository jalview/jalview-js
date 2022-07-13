(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MenuDragMouseEvent", null, 'java.awt.event.MouseEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['path','javax.swing.MenuElement[]','manager','javax.swing.MenuSelectionManager']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$I$I$Z$javax_swing_MenuElementA$javax_swing_MenuSelectionManager',  function (source, id, when, modifiers, x, y, clickCount, popupTrigger, p, m) {
;C$.superclazz.c$$java_awt_Component$I$J$I$I$I$I$Z.apply(this,[source, id, when, modifiers, x, y, clickCount, popupTrigger]);C$.$init$.apply(this);
this.path=p;
this.manager=m;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$javax_swing_MenuElementA$javax_swing_MenuSelectionManager',  function (source, id, when, modifiers, x, y, xAbs, yAbs, clickCount, popupTrigger, p, m) {
;C$.superclazz.c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I.apply(this,[source, id, when, modifiers, x, y, xAbs, yAbs, clickCount, popupTrigger, 0]);C$.$init$.apply(this);
this.path=p;
this.manager=m;
}, 1);

Clazz.newMeth(C$, 'getPath$',  function () {
return this.path;
});

Clazz.newMeth(C$, 'getMenuSelectionManager$',  function () {
return this.manager;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:42 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
