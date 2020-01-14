(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'java.util.Vector','gnu.jpdf.PDFStream','gnu.jpdf.PDFObject']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDFPageList", null, 'gnu.jpdf.PDFObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pages=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$$S.apply(this, ["/Pages"]);
C$.$init$.apply(this);
this.pages=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'add$gnu_jpdf_PDFPage', function (page) {
this.pages.addElement$TE(page);
page.pdfPageList=this;
});

Clazz.newMeth(C$, 'getPage$I', function (page) {
return (this.pages.elementAt$I(page));
});

Clazz.newMeth(C$, 'write$java_io_OutputStream', function (os) {
this.writeStart$java_io_OutputStream(os);
$I$(2).write$java_io_OutputStream$S(os, "/Kids ");
$I$(2).write$java_io_OutputStream$S(os, $I$(3).toArray$java_util_Vector(this.pages));
$I$(2).write$java_io_OutputStream$S(os, "\n");
$I$(2).write$java_io_OutputStream$S(os, "/Count ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.pages.size$()));
$I$(2).write$java_io_OutputStream$S(os, "\n");
this.writeEnd$java_io_OutputStream(os);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
