(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.awt.FlowLayout','Boolean']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JPanel", null, 'javax.swing.JComponent');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isAWT=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager$Z', function (layout, isDoubleBuffered) {
C$.c$$java_awt_LayoutManager$Z$Z.apply(this, [layout, isDoubleBuffered, false]);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "PanelUI";
});

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager', function (layout) {
C$.c$$java_awt_LayoutManager$Z.apply(this, [layout, true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (isDoubleBuffered) {
C$.c$$Z$Z.apply(this, [isDoubleBuffered, false]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z$Z.apply(this, [true, false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z', function (isDoubleBuffered, isAWTContainer) {
C$.c$$java_awt_LayoutManager$Z$Z.apply(this, [Clazz.new_($I$(1)), true, isAWTContainer]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager$Z$Z', function (layout, isDoubleBuffered, isAWTContainer) {
Clazz.super_(C$, this,1);
this.setLayout$java_awt_LayoutManager(layout);
this.isAWT=isAWTContainer;
this.setUIProperty$S$O("opaque", $I$(2).TRUE);
this.updateUI$();
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
