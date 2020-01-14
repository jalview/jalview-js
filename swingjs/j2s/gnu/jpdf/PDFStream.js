(function(){var P$=Clazz.newPackage("gnu.jpdf"),p$1={},I$=[[0,'java.io.ByteArrayOutputStream','java.io.PrintWriter','java.util.zip.DeflaterOutputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PDFStream", null, 'gnu.jpdf.PDFObject', 'java.io.Serializable');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.buf=null;
this.deflate=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (type) {
C$.superclazz.c$$S.apply(this, [type]);
C$.$init$.apply(this);
this.buf=Clazz.new_($I$(1));
this.deflate=false;
}, 1);

Clazz.newMeth(C$, 'setDeflate$Z', function (mode) {
this.deflate=mode;
});

Clazz.newMeth(C$, 'getDeflate$', function () {
return this.deflate;
});

Clazz.newMeth(C$, 'getOutputStream$', function () {
return this.buf;
});

Clazz.newMeth(C$, 'getWriter$', function () {
return Clazz.new_($I$(2).c$$java_io_OutputStream$Z,[this.buf, true]);
});

Clazz.newMeth(C$, 'getStream$', function () {
return this.buf;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream', function (os) {
this.writeStart$java_io_OutputStream(os);
this.writeStream$java_io_OutputStream(os);
});

Clazz.newMeth(C$, 'writeStream$java_io_OutputStream', function (os) {
if (this.deflate) {
var b=Clazz.new_($I$(1));
var dos=Clazz.new_($I$(3).c$$java_io_OutputStream,[b]);
this.buf.writeTo$java_io_OutputStream(dos);
dos.finish$();
dos.close$();
C$.write$java_io_OutputStream$S(os, "/Filter /FlateDecode\n");
C$.write$java_io_OutputStream$S(os, "/Length ");
C$.write$java_io_OutputStream$S(os, Integer.toString$I(b.size$() + 1));
C$.write$java_io_OutputStream$S(os, "\n>>\nstream\n");
b.writeTo$java_io_OutputStream(os);
C$.write$java_io_OutputStream$S(os, "\n");
} else {
C$.write$java_io_OutputStream$S(os, "/Length ");
C$.write$java_io_OutputStream$S(os, Integer.toString$I(this.buf.size$()));
C$.write$java_io_OutputStream$S(os, "\n>>\nstream\n");
this.buf.writeTo$java_io_OutputStream(os);
}C$.write$java_io_OutputStream$S(os, "endstream\nendobj\n");
});

Clazz.newMeth(C$, 'write$java_io_OutputStream$S', function (os, s) {
var b=s.getBytes$();
os.write$BA$I$I(b, 0, b.length);
}, 1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
out.writeInt$I(this.buf.size$());
out.write$BA$I$I(this.buf.toByteArray$(), 0, this.buf.size$());
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
var l=$in.readInt$();
var b=Clazz.array(Byte.TYPE, [l]);
$in.read$BA$I$I(b, 0, l);
this.buf=Clazz.new_($I$(1).c$$I,[l]);
this.buf.write$BA(b);
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:16 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
