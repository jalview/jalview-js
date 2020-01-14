(function(){var P$=java.io,p$1={},I$=[[0,'java.io.StringWriter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "OutputStreamWriter", null, 'java.io.Writer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.charsetName=null;
this.stream=null;
this.writer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$S', function (out, charsetName) {
C$.superclazz.c$$O.apply(this, [out]);
C$.$init$.apply(this);
this.stream=out;
p$1.setCharset$S.apply(this, [charsetName]);
}, 1);

Clazz.newMeth(C$, 'setCharset$S', function (charsetName) {
if (charsetName == null ) charsetName="UTF-8";
if (!charsetName.equals$O("UTF-8")) throw Clazz.new_(Clazz.load('java.io.UnsupportedEncodingException'));
this.charsetName="UTF-8";
this.writer=Clazz.new_($I$(1));
}, p$1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream', function (out) {
C$.superclazz.c$$O.apply(this, [out]);
C$.$init$.apply(this);
this.stream=out;
try {
p$1.setCharset$S.apply(this, [null]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$java_nio_charset_CharsetEncoder', function (out, enc) {
C$.superclazz.c$$O.apply(this, [out]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEncoding$', function () {
return this.charsetName;
});

Clazz.newMeth(C$, 'flushBuffer$', function () {
this.flush$();
});

Clazz.newMeth(C$, 'write$I', function (c) {
this.writer.write$I(c);
});

Clazz.newMeth(C$, 'write$CA$I$I', function (cbuf, off, len) {
this.writer.write$CA$I$I(cbuf, off, len);
});

Clazz.newMeth(C$, 'write$S$I$I', function (str, off, len) {
this.writer.write$S$I$I(str, off, len);
});

Clazz.newMeth(C$, 'flush$', function () {
this.writer.flush$();
var s=this.writer.getBuffer$().toString();
if (s.length$() > 0) {
var buf=s.getBytes$();
this.stream.write$BA$I$I(buf, 0, buf.length);
}this.writer=Clazz.new_($I$(1));
});

Clazz.newMeth(C$, 'close$', function () {
this.flush$();
this.stream.close$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
