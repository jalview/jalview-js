(function(){var P$=Clazz.newPackage("javax.swing.tree"),I$=[];
var C$=Clazz.newClass(P$, "PathPlaceHolder");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isNew=false;
this.path=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_tree_TreePath$Z', function (path, isNew) {
C$.$init$.apply(this);
this.path=path;
this.isNew=isNew;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:26 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
