(function(){var P$=Clazz.newPackage("org.jmol.awtjs.swing"),I$=[];
var C$=Clazz.newClass(P$, "JComponent", null, 'javajs.awt.Container');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.autoScrolls=false;
this.actionCommand=null;
this.actionListener=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (type) {
C$.superclazz.c$$S.apply(this, [type]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setAutoscrolls$Z', function (b) {
this.autoScrolls=b;
});

Clazz.newMeth(C$, 'addActionListener$O', function (listener) {
this.actionListener=listener;
});

Clazz.newMeth(C$, 'getActionCommand$', function () {
return this.actionCommand;
});

Clazz.newMeth(C$, 'setActionCommand$S', function (actionCommand) {
this.actionCommand=actionCommand;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
