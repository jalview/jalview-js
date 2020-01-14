(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'gnu.jpdf.PDFBorder','gnu.jpdf.PDFStream','gnu.jpdf.PDFStringHelper']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDFAnnot", null, 'gnu.jpdf.PDFObject', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.subtype=null;
this.l=0;
this.b=0;
this.r=0;
this.t=0;
this.s=null;
this.dest=null;
this.fl=0;
this.fb=0;
this.fr=0;
this.ft=0;
this.border=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I$I$I', function (s, l, b, r, t) {
C$.superclazz.c$$S.apply(this, ["/Annot"]);
C$.$init$.apply(this);
this.subtype=s;
this.l=l;
this.b=b;
this.r=r;
this.t=t;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$S', function (l, b, r, t, s) {
C$.c$$S$I$I$I$I.apply(this, ["/Text", l, b, r, t]);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$gnu_jpdf_PDFObject', function (l, b, r, t, dest) {
C$.c$$S$I$I$I$I.apply(this, ["/Link", l, b, r, t]);
this.dest=dest;
this.fl=-9999;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$gnu_jpdf_PDFObject$I$I$I$I', function (l, b, r, t, dest, fl, fb, fr, ft) {
C$.c$$S$I$I$I$I.apply(this, ["/Link", l, b, r, t]);
this.dest=dest;
this.fl=fl;
this.fb=fb;
this.fr=fr;
this.ft=ft;
}, 1);

Clazz.newMeth(C$, 'setBorder$H$D', function (style, width) {
this.border=Clazz.new_($I$(1).c$$H$D,[style, width]);
this.pdfDocument.add$gnu_jpdf_PDFObject(this.border);
});

Clazz.newMeth(C$, 'setBorder$D$DA', function (width, dash) {
this.border=Clazz.new_($I$(1).c$$D$DA,[width, dash]);
this.pdfDocument.add$gnu_jpdf_PDFObject(this.border);
});

Clazz.newMeth(C$, 'write$java_io_OutputStream', function (os) {
this.writeStart$java_io_OutputStream(os);
$I$(2).write$java_io_OutputStream$S(os, "/Subtype ");
$I$(2).write$java_io_OutputStream$S(os, this.subtype);
$I$(2).write$java_io_OutputStream$S(os, "\n/Rect [");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.l));
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.b));
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.r));
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.t));
$I$(2).write$java_io_OutputStream$S(os, "]\n");
if (this.border == null ) {
$I$(2).write$java_io_OutputStream$S(os, "/Border [0 0 0]\n");
} else {
$I$(2).write$java_io_OutputStream$S(os, "/BS ");
$I$(2).write$java_io_OutputStream$S(os, this.border.toString());
$I$(2).write$java_io_OutputStream$S(os, "\n");
}if (this.subtype.equals$O("/Text")) {
$I$(2).write$java_io_OutputStream$S(os, "/Contents ");
$I$(2).write$java_io_OutputStream$S(os, $I$(3).makePDFString$S(this.s));
$I$(2).write$java_io_OutputStream$S(os, "\n");
} else if (this.subtype.equals$O("/Link")) {
$I$(2).write$java_io_OutputStream$S(os, "/Dest [");
$I$(2).write$java_io_OutputStream$S(os, this.dest.toString());
if (this.fl == -9999) $I$(2).write$java_io_OutputStream$S(os, " /Fit]");
 else {
$I$(2).write$java_io_OutputStream$S(os, " /FitR ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.fl));
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.fb));
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.fr));
$I$(2).write$java_io_OutputStream$S(os, " ");
$I$(2).write$java_io_OutputStream$S(os, Integer.toString$I(this.ft));
$I$(2).write$java_io_OutputStream$S(os, "]");
}$I$(2).write$java_io_OutputStream$S(os, "\n");
}this.writeEnd$java_io_OutputStream(os);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
