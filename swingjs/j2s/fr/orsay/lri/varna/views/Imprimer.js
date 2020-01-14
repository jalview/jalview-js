(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'java.awt.Color','java.awt.Font','java.awt.print.PrinterJob']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Imprimer", null, null, 'java.awt.print.Printable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.phrase=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (phrase) {
C$.$init$.apply(this);
this.phrase=phrase;
}, 1);

Clazz.newMeth(C$, ['print$java_awt_Graphics$java_awt_print_PageFormat$I','print$'], function (g, pf, indexPage) {
if (indexPage > 0) return 1;
var g2=g;
g2.setPaint$java_awt_Paint($I$(1).blue);
g2.setFont$java_awt_Font(Clazz.new_($I$(2).c$$S$I$I,["Serif", 0, 64]));
g2.drawString$S$I$I(this.phrase, 96, 144);
return 0;
});

Clazz.newMeth(C$, 'main$SA', function (args) {
var tache=$I$(3).getPrinterJob$();
tache.setPrintable$java_awt_print_Printable(Clazz.new_(C$.c$$S,["Ceci est un teste d\'impression en java!"]));
if (!tache.printDialog$()) return;
try {
tache.print$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("impossible d\'imprimer");
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
