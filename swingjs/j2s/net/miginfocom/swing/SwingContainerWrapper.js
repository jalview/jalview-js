(function(){var P$=Clazz.newPackage("net.miginfocom.swing"),I$=[[0,'java.awt.Color','net.miginfocom.layout.ComponentWrapper','net.miginfocom.swing.SwingComponentWrapper','java.awt.BasicStroke']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SwingContainerWrapper", null, 'net.miginfocom.swing.SwingComponentWrapper', 'net.miginfocom.layout.ContainerWrapper');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['DB_CELL_OUTLINE','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$java_awt_Container', function (c) {
;C$.superclazz.c$$java_awt_Component.apply(this,[c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getComponents$', function () {
var c=this.getComponent$();
var cws=Clazz.array($I$(2), [c.getComponentCount$()]);
for (var i=0; i < cws.length; i++) cws[i]=Clazz.new_([c.getComponent$I(i)],$I$(3,1).c$$java_awt_Component);

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
g.setStroke$java_awt_Stroke(Clazz.new_([1.0, 2, 0, 10.0, Clazz.array(Float.TYPE, -1, [2.0, 3.0]), 0],$I$(4,1).c$$F$I$I$F$FA$F));
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

C$.$static$=function(){C$.$static$=0;
C$.DB_CELL_OUTLINE=Clazz.new_($I$(1,1).c$$I$I$I,[255, 0, 0]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:27 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
