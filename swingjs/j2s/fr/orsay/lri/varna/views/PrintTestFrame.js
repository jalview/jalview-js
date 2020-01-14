(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'fr.orsay.lri.varna.views.PrintTestFrame','fr.orsay.lri.varna.views.PrintPanel','javax.print.attribute.HashPrintRequestAttributeSet','javax.swing.JPanel','javax.swing.JButton','java.awt.print.PrinterJob','javax.swing.JOptionPane',['java.awt.geom.Rectangle2D','.Double'],'java.awt.Font','java.awt.geom.GeneralPath','java.awt.font.TextLayout','java.awt.geom.AffineTransform',['java.awt.geom.Point2D','.Double'],['java.awt.geom.Line2D','.Double']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PrintTestFrame", null, 'javax.swing.JFrame');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.canvas=null;
this.attributes=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setTitle$S("PrintTest");
this.setSize$I$I(300, 300);
var contentPane=this.getContentPane$();
this.canvas=Clazz.new_($I$(2));
contentPane.add$java_awt_Component$O(this.canvas, "Center");
this.attributes=Clazz.new_($I$(3));
var buttonPanel=Clazz.new_($I$(4));
var printButton=Clazz.new_($I$(5).c$$S,["Print"]);
buttonPanel.add$java_awt_Component(printButton);
printButton.addActionListener$java_awt_event_ActionListener(((P$.PrintTestFrame$1||
(function(){var C$=Clazz.newClass(P$, "PrintTestFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (event) {
try {
var job=$I$(6).getPrinterJob$();
job.setPrintable$java_awt_print_Printable(this.b$['fr.orsay.lri.varna.views.PrintTestFrame'].canvas);
if (job.printDialog$javax_print_attribute_PrintRequestAttributeSet(this.b$['fr.orsay.lri.varna.views.PrintTestFrame'].attributes)) {
job.print$javax_print_attribute_PrintRequestAttributeSet(this.b$['fr.orsay.lri.varna.views.PrintTestFrame'].attributes);
}} catch (exception) {
if (Clazz.exceptionOf(exception,"java.awt.print.PrinterException")){
$I$(7).showMessageDialog$java_awt_Component$O(this.b$['fr.orsay.lri.varna.views.PrintTestFrame'], exception);
} else {
throw exception;
}
}
});
})()
), Clazz.new_(P$.PrintTestFrame$1.$init$, [this, null])));
var pageSetupButton=Clazz.new_($I$(5).c$$S,["Page setup"]);
buttonPanel.add$java_awt_Component(pageSetupButton);
pageSetupButton.addActionListener$java_awt_event_ActionListener(((P$.PrintTestFrame$2||
(function(){var C$=Clazz.newClass(P$, "PrintTestFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (event) {
var job=$I$(6).getPrinterJob$();
job.pageDialog$javax_print_attribute_PrintRequestAttributeSet(this.b$['fr.orsay.lri.varna.views.PrintTestFrame'].attributes);
});
})()
), Clazz.new_(P$.PrintTestFrame$2.$init$, [this, null])));
contentPane.add$java_awt_Component$O(buttonPanel, "North");
}, 1);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:29:46 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
