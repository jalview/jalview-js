(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[];
var C$=Clazz.newClass(P$, "JPopupMenu", null, 'org.jmol.awtjs.swing.AbstractButton');

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
{
SwingController.setDraggable(org.jmol.awtjs.swing.JPopupMenu);
}
};
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.tainted=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.tainted=true;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.superclazz.c$$S.apply(this, ["mnu"]);
C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'setInvoker$O', function (applet) {
this.applet=applet;
{
SwingController.setMenu(this);
}
});

Clazz.newMeth(C$, 'show$javajs_awt_Component$I$I', function (applet, x, y) {
if (applet != null ) this.tainted=true;
{
SwingController.showMenu(this, x, y);
}
});

Clazz.newMeth(C$, 'disposeMenu$', function () {
{
SwingController.disposeMenu(this);
}
});

Clazz.newMeth(C$, 'toHTML$', function () {
return this.getMenuHTML$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
