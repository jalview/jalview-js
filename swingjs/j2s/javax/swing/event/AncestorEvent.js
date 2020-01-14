(function(){var P$=Clazz.newPackage("javax.swing.event"),I$=[];
var C$=Clazz.newClass(P$, "AncestorEvent", null, 'java.awt.AWTEvent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ancestor=null;
this.ancestorParent=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$I$java_awt_Container$java_awt_Container', function (source, id, ancestor, ancestorParent) {
C$.superclazz.c$$O$I.apply(this, [source, id]);
C$.$init$.apply(this);
this.ancestor=ancestor;
this.ancestorParent=ancestorParent;
}, 1);

Clazz.newMeth(C$, 'getAncestor$', function () {
return this.ancestor;
});

Clazz.newMeth(C$, 'getAncestorParent$', function () {
return this.ancestorParent;
});

Clazz.newMeth(C$, 'getComponent$', function () {
return this.getSource$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
