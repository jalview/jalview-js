(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'javax.print.attribute.HashPrintRequestAttributeSet','gnu.jpdf.PDFInfo','javax.print.attribute.standard.Copies','javax.print.attribute.standard.JobName','javax.print.attribute.standard.RequestingUserName','java.io.File','java.io.FileOutputStream','gnu.jpdf.PDFJob','javax.swing.JFileChooser','java.util.Locale']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDFPrinterJob", null, 'java.awt.print.PrinterJob');
C$.fileChooser=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.attributes=null;
this.info=null;
this.pageable=null;
this.pageFormat=null;
this.printable=null;
this.printJob=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.pageable=null;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.attributes=Clazz.new_($I$(1));
this.info=Clazz.new_($I$(2));
this.setJobName$S("Java Printing");
}, 1);

Clazz.newMeth(C$, 'cancel$', function () {
});

Clazz.newMeth(C$, 'defaultPage$java_awt_print_PageFormat', function (page) {
return this.validatePage$java_awt_print_PageFormat(page);
});

Clazz.newMeth(C$, 'getCopies$', function () {
return (this.attributes.get$Class(Clazz.getClass($I$(3)))).getValue$();
});

Clazz.newMeth(C$, 'getJobName$', function () {
return (this.attributes.get$Class(Clazz.getClass($I$(4)))).getValue$();
});

Clazz.newMeth(C$, 'getPrinterJob$', function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getUserName$', function () {
return (this.attributes.get$Class(Clazz.getClass($I$(5)))).getValue$();
});

Clazz.newMeth(C$, 'isCancelled$', function () {
return false;
});

Clazz.newMeth(C$, 'pageDialog$java_awt_print_PageFormat', function (page) {
return page.clone$();
});

Clazz.newMeth(C$, 'print$S', function (pathname) {
var pageCount;
var file=null;
var fileOutputStream=null;
try {
file=Clazz.new_($I$(6).c$$S,[pathname]);
fileOutputStream=Clazz.new_($I$(7).c$$java_io_File,[file]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error!! - Invalid output file path: " + pathname);
} else {
throw e;
}
}
System.out.println$S("GNU JPDF creating " + file);
var pdfGraphics=null;
this.printJob=Clazz.new_($I$(8).c$$java_io_OutputStream,[fileOutputStream]);
if (this.info != null ) {
this.printJob.getPDFDocument$().setPDFInfo$gnu_jpdf_PDFInfo(this.info);
}pageCount=(this.pageable == null  ? -1 : this.pageable.getNumberOfPages$());
for (var pageIndex=0; pageCount < 0 || pageIndex < pageCount ; pageIndex++) {
if (this.pageable != null ) this.pageFormat=this.pageable.getPageFormat$I(pageIndex);
if (this.pageFormat == null ) this.pageFormat=this.defaultPage$();
pdfGraphics=this.printJob.getGraphics$java_awt_print_PageFormat(this.pageFormat);
if (this.pageable != null ) this.printable=this.pageable.getPrintable$I(pageIndex);
if (this.printable.print$(pdfGraphics, this.pageFormat, pageIndex) == 1) pageCount=0;
pdfGraphics.dispose$();
}
this.printJob.end$();
System.out.println$S("GNU JPDF created: " + file);
});

Clazz.newMeth(C$, 'print$', function () {
var file;
var path;
var jobName=this.getJobName$();
if (C$.fileChooser == null ) {
C$.fileChooser=Clazz.new_($I$(9));
C$.fileChooser.setMultiSelectionEnabled$Z(false);
C$.fileChooser.setFileSelectionMode$I(0);
}if (jobName.equals$O("")) {
jobName="Java Printing";
}jobName=jobName.replaceAll$S$S("\\\\", "-");
jobName=jobName.replaceAll$S$S("/", "-");
path=C$.fileChooser.getCurrentDirectory$();
file=Clazz.new_($I$(6).c$$java_io_File$S,[path, jobName + ".pdf"]);
C$.fileChooser.setSelectedFile$java_io_File(file);
if (C$.fileChooser.showSaveDialog$java_awt_Component(null) == 0) {
file=C$.fileChooser.getSelectedFile$();
var s=file.getAbsolutePath$();
if (!s.endsWith$S(".pdf")) s += ".pdf";
this.print$S(s);
}});

Clazz.newMeth(C$, 'printDialog$', function () {
return true;
});

Clazz.newMeth(C$, 'setAuthor$S', function (author) {
this.info.setAuthor$S(author);
});

Clazz.newMeth(C$, 'setCopies$I', function (copies) {
this.attributes.add$javax_print_attribute_Attribute(Clazz.new_($I$(3).c$$I,[copies]));
});

Clazz.newMeth(C$, 'setCreator$S', function (creator) {
this.info.setCreator$S(creator);
});

Clazz.newMeth(C$, 'setJobName$S', function (jobName) {
this.attributes.add$javax_print_attribute_Attribute(Clazz.new_($I$(4).c$$S$java_util_Locale,[jobName, $I$(10).getDefault$()]));
if (this.info.getTitle$() == null ) {
this.info.setTitle$S(jobName);
}});

Clazz.newMeth(C$, 'setPageable$java_awt_print_Pageable', function (document) {
if (document == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Pageable cannot be null."]);
}this.pageable=document;
});

Clazz.newMeth(C$, 'setPrintable$java_awt_print_Printable', function (painter) {
this.printable=painter;
});

Clazz.newMeth(C$, 'setPrintable$java_awt_print_Printable$java_awt_print_PageFormat', function (painter, format) {
this.printable=painter;
this.pageFormat=format;
});

Clazz.newMeth(C$, 'setTitle$S', function (title) {
this.info.setTitle$S(title);
});

Clazz.newMeth(C$, 'validatePage$java_awt_print_PageFormat', function (page) {
return page.clone$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
