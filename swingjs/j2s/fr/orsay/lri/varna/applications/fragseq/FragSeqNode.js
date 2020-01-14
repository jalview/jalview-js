(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications.fragseq"),I$=[];
var C$=Clazz.newClass(P$, "FragSeqNode", null, 'javax.swing.tree.DefaultMutableTreeNode');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O', function (o) {
C$.superclazz.c$$O.apply(this, [o]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isLeaf$', function () {
return (Clazz.instanceOf(this.getUserObject$(), "fr.orsay.lri.varna.applications.fragseq.FragSeqModel"));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
