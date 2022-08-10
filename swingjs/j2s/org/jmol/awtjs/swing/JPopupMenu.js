(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JPopupMenu", null, 'org.jmol.awtjs.swing.AbstractButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tainted=true;
},1);

C$.$fields$=[['Z',['tainted']]]

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.superclazz.c$$S.apply(this,["mnu"]);C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'setInvoker$O', function (applet) {
this.applet=applet;
{
SwingController.setMenu(this);
}
});

Clazz.newMeth(C$, 'show$org_jmol_awtjs_swing_Component$I$I', function (applet, x, y) {
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

C$.$static$=function(){C$.$static$=0;
{
{
SwingController.setDraggable(org.jmol.awtjs.swing.JPopupMenu);
}
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:30 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
