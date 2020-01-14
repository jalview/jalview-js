(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
var C$=Clazz.newClass(P$, "CellRendererPane", null, 'javax.swing.JPanel');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.setLayout$java_awt_LayoutManager(null);
this.setVisible$Z(false);
}, 1);

Clazz.newMeth(C$, 'invalidate$', function () {
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
});

Clazz.newMeth(C$, 'update$java_awt_Graphics', function (g) {
});

Clazz.newMeth(C$, 'addImpl$java_awt_Component$O$I', function (x, constraints, index) {
if (x.getParent$() !== this ) this.addImplCont$java_awt_Component$O$I(x, constraints, index);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z', function (g, c, p, x, y, w, h, shouldValidate) {
if (c == null ) {
if (p != null ) {
var oldColor=g.getColor$();
g.setColor$java_awt_Color(p.getBackground$());
g.fillRect$I$I$I$I(x, y, w, h);
g.setColor$java_awt_Color(oldColor);
}return;
}if (c.getParent$() !== this ) {
this.add$java_awt_Component(c);
}c.setBounds$I$I$I$I(-w, -h, 0, 0);
c.setBounds$I$I$I$I(x, y, w, h);
if (shouldValidate) {
c.validate$();
}var ui=(c).getUI$();
ui.updateDOMNode$();
ui.setTainted$Z(false);
var cg=g.create$I$I$I$I(x, y, w, h);
try {
c.paint$java_awt_Graphics(cg);
} finally {
cg.dispose$();
}
c.setBounds$I$I$I$I(-w, -h, 0, 0);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I', function (g, c, p, x, y, w, h) {
this.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, c, p, x, y, w, h, false);
});

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$java_awt_Rectangle', function (g, c, p, r) {
this.paintComponent$java_awt_Graphics$java_awt_Component$java_awt_Container$I$I$I$I$Z(g, c, p, r.x, r.y, r.width, r.height, false);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
