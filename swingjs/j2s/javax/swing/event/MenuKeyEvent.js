(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
var C$=Clazz.newClass(P$, "MenuKeyEvent", null, 'java.awt.event.KeyEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.path=null;
this.manager=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$J$I$I$C$javax_swing_MenuElementA$javax_swing_MenuSelectionManager', function (source, id, when, modifiers, keyCode, keyChar, p, m) {
C$.superclazz.c$$java_awt_Component$I$J$I$I$C.apply(this, [source, id, when, modifiers, keyCode, keyChar]);
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
