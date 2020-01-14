(function(){var P$=Clazz.newPackage("gnu.jpdf"),I$=[[0,'gnu.jpdf.PDFStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDFBorder", null, 'gnu.jpdf.PDFObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.style=0;
this.width=0;
this.dash=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$H$D', function (style, width) {
C$.superclazz.c$$S.apply(this, ["/Border"]);
C$.$init$.apply(this);
this.style=style;
this.width=width;
}, 1);

Clazz.newMeth(C$, 'c$$D$DA', function (width, dash) {
C$.superclazz.c$$S.apply(this, ["/Border"]);
C$.$init$.apply(this);
this.style=1;
this.width=width;
this.dash=dash;
}, 1);

Clazz.newMeth(C$, 'write$java_io_OutputStream', function (os) {
$I$(1).write$java_io_OutputStream$S(os, Integer.toString$I(this.objser));
$I$(1).write$java_io_OutputStream$S(os, " 0 obj\n");
$I$(1).write$java_io_OutputStream$S(os, "[/S /");
$I$(1).write$java_io_OutputStream$S(os, "SDBIU".substring$I$I(this.style, this.style + 1));
$I$(1).write$java_io_OutputStream$S(os, " /W ");
$I$(1).write$java_io_OutputStream$S(os, Double.toString$D(this.width));
if (this.dash != null ) {
$I$(1).write$java_io_OutputStream$S(os, " /D [");
$I$(1).write$java_io_OutputStream$S(os, Double.toString$D(this.dash[0]));
for (var i=1; i < this.dash.length; i++) {
$I$(1).write$java_io_OutputStream$S(os, " ");
$I$(1).write$java_io_OutputStream$S(os, Double.toString$D(this.dash[i]));
}
$I$(1).write$java_io_OutputStream$S(os, "] ");
}$I$(1).write$java_io_OutputStream$S(os, "]\n");
$I$(1).write$java_io_OutputStream$S(os, "endobj\n");
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
