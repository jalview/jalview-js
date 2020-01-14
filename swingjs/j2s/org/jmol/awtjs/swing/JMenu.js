(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[];
var C$=Clazz.newClass(P$, "JMenu", null, 'org.jmol.awtjs.swing.JMenuItem');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S$I.apply(this, ["mnu", 4]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getItemCount$', function () {
return this.getComponentCount$();
});

Clazz.newMeth(C$, 'getItem$I', function (i) {
return this.getComponent$I(i);
});

Clazz.newMeth(C$, 'getPopupMenu$', function () {
return this;
});

Clazz.newMeth(C$, 'toHTML$', function () {
return this.getMenuHTML$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
