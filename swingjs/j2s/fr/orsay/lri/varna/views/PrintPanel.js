(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'fr.orsay.lri.varna.views.PrintTestFrame','fr.orsay.lri.varna.views.PrintPanel','javax.print.attribute.HashPrintRequestAttributeSet','javax.swing.JPanel','javax.swing.JButton','java.awt.print.PrinterJob','javax.swing.JOptionPane',['java.awt.geom.Rectangle2D','.Double'],'java.awt.Font','java.awt.geom.GeneralPath','java.awt.font.TextLayout','java.awt.geom.AffineTransform',['java.awt.geom.Point2D','.Double'],['java.awt.geom.Line2D','.Double']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PrintPanel", null, 'javax.swing.JPanel', 'java.awt.print.Printable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintComponent$java_awt_Graphics', function (g) {
C$.superclazz.prototype.paintComponent$java_awt_Graphics.apply(this, [g]);
var g2=g;
this.drawPage$java_awt_Graphics2D(g2);
});

Clazz.newMeth(C$, 'print$java_awt_Graphics$java_awt_print_PageFormat$I', function (g, pf, page) {
if (page >= 1) return 1;
var g2=g;
g2.translate$D$D(pf.getImageableX$(), pf.getImageableY$());
g2.draw$java_awt_Shape(Clazz.new_([0, 0, pf.getImageableWidth$(), pf.getImageableHeight$()],$I$(8,1).c$$D$D$D$D));
this.drawPage$java_awt_Graphics2D(g2);
return 0;
});

Clazz.newMeth(C$, 'drawPage$java_awt_Graphics2D', function (g2) {
var context=g2.getFontRenderContext$();
var f=Clazz.new_($I$(9,1).c$$S$I$I,["Serif", 0, 72]);
var drawOutline=true;
{
drawOutline = false;
}
if (drawOutline) {
var clipShape=Clazz.new_($I$(10,1));
var layout=Clazz.new_($I$(11,1).c$$S$java_awt_Font$java_awt_font_FontRenderContext,["Hello", f, context]);
var transform=$I$(12).getTranslateInstance$D$D(0, 72);
var outline=layout.getOutline$java_awt_geom_AffineTransform(transform);
clipShape.append$java_awt_Shape$Z(outline, false);
layout=Clazz.new_($I$(11,1).c$$S$java_awt_Font$java_awt_font_FontRenderContext,["World", f, context]);
transform=$I$(12).getTranslateInstance$D$D(0, 144);
outline=layout.getOutline$java_awt_geom_AffineTransform(transform);
clipShape.append$java_awt_Shape$Z(outline, false);
g2.draw$java_awt_Shape(clipShape);
g2.clip$java_awt_Shape(clipShape);
} else {
g2.setFont$java_awt_Font(f);
g2.drawString$S$I$I("Hello", 0, 72);
g2.drawString$S$I$I("World", 0, 144);
}var NLINES=50;
var p=Clazz.new_($I$(13,1).c$$D$D,[0, 0]);
for (var i=0; i < 50; i++) {
var x=((2 * this.getWidth$() * i )/50|0);
var y=((2 * this.getHeight$() * (50 - 1 - i ) )/50|0);
var q=Clazz.new_($I$(13,1).c$$D$D,[x, y]);
g2.draw$java_awt_Shape(Clazz.new_($I$(14,1).c$$java_awt_geom_Point2D$java_awt_geom_Point2D,[p, q]));
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
