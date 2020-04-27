(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),I$=[[0,'java.awt.print.PrinterJob','javax.swing.RepaintManager']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VARNAPrinter", null, null, 'java.awt.print.Printable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['componentToBePrinted','java.awt.Component']]]

Clazz.newMeth(C$, 'printComponent$java_awt_Component', function (c) {
Clazz.new_(C$.c$$java_awt_Component,[c]).print$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component', function (componentToBePrinted) {
;C$.$init$.apply(this);
this.componentToBePrinted=componentToBePrinted;
}, 1);

Clazz.newMeth(C$, 'print$', function () {
var printJob=$I$(1).getPrinterJob$();
printJob.setPrintable$java_awt_print_Printable(this);
if (printJob.printDialog$()) try {
printJob.print$();
} catch (pe) {
if (Clazz.exceptionOf(pe,"java.awt.print.PrinterException")){
} else {
throw pe;
}
}
});

Clazz.newMeth(C$, 'print$java_awt_Graphics$java_awt_print_PageFormat$I', function (g, pageFormat, pageIndex) {
if (pageIndex > 0) {
return (1);
} else {
var g2d=g;
g2d.translate$D$D(pageFormat.getImageableX$(), pageFormat.getImageableY$());
C$.disableDoubleBuffering$java_awt_Component(this.componentToBePrinted);
this.componentToBePrinted.paint$java_awt_Graphics(g2d);
C$.enableDoubleBuffering$java_awt_Component(this.componentToBePrinted);
return (0);
}});

Clazz.newMeth(C$, 'disableDoubleBuffering$java_awt_Component', function (c) {
var currentManager=$I$(2).currentManager$java_awt_Component(c);
currentManager.setDoubleBufferingEnabled$Z(false);
}, 1);

Clazz.newMeth(C$, 'enableDoubleBuffering$java_awt_Component', function (c) {
var currentManager=$I$(2).currentManager$java_awt_Component(c);
currentManager.setDoubleBufferingEnabled$Z(true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:17 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
