(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MenuKeyEvent", null, 'java.awt.event.KeyEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['path','javax.swing.MenuElement[]','manager','javax.swing.MenuSelectionManager']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$C$javax_swing_MenuElementA$javax_swing_MenuSelectionManager', function (source, id, when, modifiers, keyCode, keyChar, p, m) {
;C$.superclazz.c$$java_awt_Component$I$J$I$I$C.apply(this,[source, id, when, modifiers, keyCode, keyChar]);C$.$init$.apply(this);
this.path=p;
this.manager=m;
}, 1);

Clazz.newMeth(C$, 'getPath$', function () {
return this.path;
});

Clazz.newMeth(C$, 'getMenuSelectionManager$', function () {
return this.manager;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
