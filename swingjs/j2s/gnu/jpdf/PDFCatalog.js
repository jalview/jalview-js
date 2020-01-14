(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'gnu.jpdf.PDFStream','gnu.jpdf.PDFDocument']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDFCatalog", null, 'gnu.jpdf.PDFObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pdfPageList=null;
this.outlines=null;
this.pagemode=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$gnu_jpdf_PDFPageList$I', function (pdfPageList, pagemode) {
C$.superclazz.c$$S.apply(this, ["/Catalog"]);
C$.$init$.apply(this);
this.pdfPageList=pdfPageList;
this.pagemode=pagemode;
}, 1);

Clazz.newMeth(C$, 'setOutline$gnu_jpdf_PDFOutline', function (outline) {
this.outlines=outline;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream', function (os) {
this.writeStart$java_io_OutputStream(os);
$I$(1).write$java_io_OutputStream$S(os, "/Pages ");
$I$(1).write$java_io_OutputStream$S(os, this.pdfPageList.toString());
$I$(1).write$java_io_OutputStream$S(os, "\n");
if (this.outlines != null ) {
$I$(1).write$java_io_OutputStream$S(os, "/Outlines ");
$I$(1).write$java_io_OutputStream$S(os, this.outlines.toString());
$I$(1).write$java_io_OutputStream$S(os, "\n");
}$I$(1).write$java_io_OutputStream$S(os, "/PageMode ");
$I$(1).write$java_io_OutputStream$S(os, $I$(2).PDF_PAGE_MODES[this.pagemode]);
$I$(1).write$java_io_OutputStream$S(os, "\n");
this.writeEnd$java_io_OutputStream(os);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
