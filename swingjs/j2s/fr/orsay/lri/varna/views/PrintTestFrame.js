(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.views"),I$=[[0,'fr.orsay.lri.varna.views.PrintTestFrame','fr.orsay.lri.varna.views.PrintPanel','javax.print.attribute.HashPrintRequestAttributeSet','javax.swing.JPanel','javax.swing.JButton','java.awt.print.PrinterJob','javax.swing.JOptionPane',['java.awt.geom.Rectangle2D','.Double'],'java.awt.Font','java.awt.geom.GeneralPath','java.awt.font.TextLayout','java.awt.geom.AffineTransform',['java.awt.geom.Point2D','.Double'],['java.awt.geom.Line2D','.Double']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PrintTestFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['canvas','fr.orsay.lri.varna.views.PrintPanel','attributes','javax.print.attribute.PrintRequestAttributeSet']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.setTitle$S("PrintTest");
this.setSize$I$I(300, 300);
var contentPane=this.getContentPane$();
this.canvas=Clazz.new_($I$(2,1));
contentPane.add$java_awt_Component$O(this.canvas, "Center");
this.attributes=Clazz.new_($I$(3,1));
var buttonPanel=Clazz.new_($I$(4,1));
var printButton=Clazz.new_($I$(5,1).c$$S,["Print"]);
buttonPanel.add$java_awt_Component(printButton);
printButton.addActionListener$java_awt_event_ActionListener(((P$.PrintTestFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrintTestFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (event) {
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
), Clazz.new_(P$.PrintTestFrame$1.$init$,[this, null])));
var pageSetupButton=Clazz.new_($I$(5,1).c$$S,["Page setup"]);
buttonPanel.add$java_awt_Component(pageSetupButton);
pageSetupButton.addActionListener$java_awt_event_ActionListener(((P$.PrintTestFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "PrintTestFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent', function (event) {
var job=$I$(6).getPrinterJob$();
job.pageDialog$javax_print_attribute_PrintRequestAttributeSet(this.b$['fr.orsay.lri.varna.views.PrintTestFrame'].attributes);
});
})()
), Clazz.new_(P$.PrintTestFrame$2.$init$,[this, null])));
contentPane.add$java_awt_Component$O(buttonPanel, "North");
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:23 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
