(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'java.util.Vector','gnu.jpdf.PDFPageList','gnu.jpdf.PDFCatalog','gnu.jpdf.PDFInfo','gnu.jpdf.PDFOutline','gnu.jpdf.PDFFont','gnu.jpdf.PDFOutput']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDFDocument", null, null, 'java.io.Serializable');
C$.PDF_PAGE_MODES=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.PDF_PAGE_MODES=Clazz.array(String, -1, ["/UseNone", "/UseOutlines", "/UseThumbs", "/FullScreen"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.objser=0;
this.objects=null;
this.catalog=null;
this.info=null;
this.pdfPageList=null;
this.outline=null;
this.defaultOutlineBorder=null;
this.fontid=0;
this.imageid=0;
this.fonts=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.fontid=0;
this.imageid=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (pagemode) {
C$.$init$.apply(this);
this.objser=1;
this.objects=Clazz.new_($I$(1));
this.fonts=Clazz.new_($I$(1));
this.add$gnu_jpdf_PDFObject(this.pdfPageList=Clazz.new_($I$(2)));
this.add$gnu_jpdf_PDFObject(this.catalog=Clazz.new_($I$(3).c$$gnu_jpdf_PDFPageList$I,[this.pdfPageList, pagemode]));
this.add$gnu_jpdf_PDFObject(this.info=Clazz.new_($I$(4)));
this.add$gnu_jpdf_PDFObject(this.getOutline$());
}, 1);

Clazz.newMeth(C$, 'add$gnu_jpdf_PDFObject', function (obj) {
this.objects.addElement$TE(obj);
obj.objser=this.objser++;
obj.pdfDocument=this;
if (Clazz.instanceOf(obj, "gnu.jpdf.PDFPage")) this.pdfPageList.add$gnu_jpdf_PDFPage(obj);
return obj.objser;
});

Clazz.newMeth(C$, 'getPage$I', function (page) {
return this.pdfPageList.getPage$I(page);
});

Clazz.newMeth(C$, 'getOutline$', function () {
if (this.outline == null ) {
this.outline=Clazz.new_($I$(5));
this.catalog.setOutline$gnu_jpdf_PDFOutline(this.outline);
}return this.outline;
});

Clazz.newMeth(C$, 'getFont$S$S$I', function (type, font, style) {
for (var ft, $ft = this.fonts.iterator$(); $ft.hasNext$()&&((ft=($ft.next$())),1);) {
if (ft.equals$S$S$I(type, font, style)) return ft;
}
this.fontid++;
var ft=Clazz.new_($I$(6).c$$S$S$S$I,["/F" + this.fontid, type, font, style]);
this.add$gnu_jpdf_PDFObject(ft);
this.fonts.addElement$TE(ft);
return ft;
});

Clazz.newMeth(C$, 'setImageName$gnu_jpdf_PDFImage', function (img) {
this.imageid++;
img.setName$S("/Image" + this.imageid);
return img.getName$();
});

Clazz.newMeth(C$, 'setPDFInfo$gnu_jpdf_PDFInfo', function (info) {
this.info=info;
});

Clazz.newMeth(C$, 'getPDFInfo$', function () {
return this.info;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream', function (os) {
var pos=Clazz.new_($I$(7).c$$java_io_OutputStream,[os]);
for (var o, $o = this.objects.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
pos.write$gnu_jpdf_PDFObject(o);
}
pos.close$();
os.flush$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
