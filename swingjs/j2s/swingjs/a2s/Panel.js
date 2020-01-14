(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.FlowLayout','swingjs.a2s.Applet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Panel", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'isAWTContainer$', function () {
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_awt_LayoutManager.apply(this, [Clazz.new_($I$(1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager', function (layout) {
C$.superclazz.c$$java_awt_LayoutManager.apply(this, [layout]);
C$.$init$.apply(this);
this.subclassSetup$();
this.setBackground$java_awt_Color(null);
this.setOpaque$Z(false);
$I$(2).fixAWTPaint$java_awt_Component$Class(this, Clazz.getClass(C$));
}, 1);

Clazz.newMeth(C$, 'subclassSetup$', function () {
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color', function (c) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [c]);
this.setOpaque$Z(c != null );
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-18 23:03:45 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
