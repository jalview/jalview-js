(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.applications"),I$=[[0,'java.awt.print.PrinterJob','javax.swing.RepaintManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "VARNAPrinter", null, null, 'java.awt.print.Printable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.componentToBePrinted=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'printComponent$java_awt_Component', function (c) {
Clazz.new_(C$.c$$java_awt_Component,[c]).print$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component', function (componentToBePrinted) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:42 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
