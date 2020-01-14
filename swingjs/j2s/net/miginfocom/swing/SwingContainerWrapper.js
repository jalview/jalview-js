(function(){var P$=Clazz.newPackage("net.miginfocom.swing"),I$=[[0,'java.awt.Color','net.miginfocom.layout.ComponentWrapper','net.miginfocom.swing.SwingComponentWrapper','java.awt.BasicStroke']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SwingContainerWrapper", null, 'net.miginfocom.swing.SwingComponentWrapper', 'net.miginfocom.layout.ContainerWrapper');
C$.DB_CELL_OUTLINE=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.DB_CELL_OUTLINE=Clazz.new_($I$(1).c$$I$I$I,[255, 0, 0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Container', function (c) {
C$.superclazz.c$$java_awt_Component.apply(this, [c]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getComponents$', function () {
var c=this.getComponent$();
var cws=Clazz.array($I$(2), [c.getComponentCount$()]);
for (var i=0; i < cws.length; i++) cws[i]=Clazz.new_($I$(3).c$$java_awt_Component,[c.getComponent$I(i)]);

return cws;
});

Clazz.newMeth(C$, 'getComponentCount$', function () {
return (this.getComponent$()).getComponentCount$();
});

Clazz.newMeth(C$, 'getLayout$', function () {
return (this.getComponent$()).getLayout$();
});

Clazz.newMeth(C$, 'isLeftToRight$', function () {
return (this.getComponent$()).getComponentOrientation$().isLeftToRight$();
});

Clazz.newMeth(C$, 'paintDebugCell$I$I$I$I', function (x, y, width, height) {
var c=this.getComponent$();
if (c.isShowing$() == false ) return;
var g=c.getGraphics$();
if (g == null ) return;
g.setStroke$java_awt_Stroke(Clazz.new_($I$(4).c$$F$I$I$F$FA$F,[1.0, 2, 0, 10.0, Clazz.array(Float.TYPE, -1, [2.0, 3.0]), 0]));
g.setPaint$java_awt_Paint(C$.DB_CELL_OUTLINE);
g.drawRect$I$I$I$I(x, y, width - 1, height - 1);
});

Clazz.newMeth(C$, 'getComponentType$Z', function (disregardScrollPane) {
return 1;
});

Clazz.newMeth(C$, 'getLayoutHashCode$', function () {
var n=System.nanoTime$();
var h=C$.superclazz.prototype.getLayoutHashCode$.apply(this, []);
if (this.isLeftToRight$()) h+=416343;
return 0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-02-03 08:07:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
