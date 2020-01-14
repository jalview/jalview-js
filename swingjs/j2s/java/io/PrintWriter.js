(function(){var P$=java.io,p$1={},I$=[[0,'java.io.BufferedWriter','java.io.OutputStreamWriter','java.io.FileOutputStream','java.io.File','Thread','java.util.Locale','swingjs.api.Interface','Appendable','java.util.Formatter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PrintWriter", null, 'java.io.Writer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.out=null;
this.autoFlush=false;
this.trouble=false;
this.formatter=null;
this.psOut=null;
this.lineSeparator=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.autoFlush=false;
this.trouble=false;
this.psOut=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer', function (out) {
C$.c$$java_io_Writer$Z.apply(this, [out, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer$Z', function (out, autoFlush) {
C$.superclazz.c$$O.apply(this, [out]);
C$.$init$.apply(this);
this.out=out;
this.autoFlush=autoFlush;
this.lineSeparator=System.lineSeparator$();
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream', function (out) {
C$.c$$java_io_OutputStream$Z.apply(this, [out, false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$Z', function (out, autoFlush) {
C$.c$$java_io_Writer$Z.apply(this, [Clazz.new_($I$(1).c$$java_io_Writer,[Clazz.new_($I$(2).c$$java_io_OutputStream,[out])]), autoFlush]);
if (Clazz.instanceOf(out, "java.io.PrintStream")) {
this.psOut=out;
}}, 1);

Clazz.newMeth(C$, 'c$$S', function (fileName) {
C$.c$$java_io_Writer$Z.apply(this, [Clazz.new_($I$(1).c$$java_io_Writer,[Clazz.new_($I$(2).c$$java_io_OutputStream,[Clazz.new_($I$(3).c$$java_io_File,[Clazz.new_($I$(4).c$$S,[fileName])])])]), false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (fileName, csn) {
C$.c$$java_io_Writer$Z.apply(this, [Clazz.new_($I$(1).c$$java_io_Writer,[Clazz.new_($I$(2).c$$java_io_OutputStream$S,[Clazz.new_($I$(3).c$$java_io_File,[Clazz.new_($I$(4).c$$S,[fileName])]), csn])]), false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
C$.c$$java_io_Writer$Z.apply(this, [Clazz.new_($I$(1).c$$java_io_Writer,[Clazz.new_($I$(2).c$$java_io_OutputStream,[Clazz.new_($I$(3).c$$java_io_File,[file])])]), false]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S', function (file, csn) {
C$.c$$java_io_Writer$Z.apply(this, [Clazz.new_($I$(1).c$$java_io_Writer,[Clazz.new_($I$(2).c$$java_io_OutputStream$S,[Clazz.new_($I$(3).c$$java_io_File,[file]), csn])]), false]);
}, 1);

Clazz.newMeth(C$, 'ensureOpen', function () {
if (this.out == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'flush$', function () {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.flush$();
}} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.trouble=true;
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'close$', function () {
try {
{
if (this.out == null ) return;
this.out.close$();
this.out=null;
}} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.trouble=true;
} else {
throw x;
}
}
});

Clazz.newMeth(C$, 'checkError$', function () {
if (this.out != null ) {
this.flush$();
}if (Clazz.instanceOf(this.out, "java.io.PrintWriter")) {
var pw=this.out;
return pw.checkError$();
} else if (this.psOut != null ) {
return this.psOut.checkError$();
}return this.trouble;
});

Clazz.newMeth(C$, 'setError$', function () {
this.trouble=true;
});

Clazz.newMeth(C$, 'clearError$', function () {
this.trouble=false;
});

Clazz.newMeth(C$, 'write$I', function (c) {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$I(c);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'write$CA$I$I', function (buf, off, len) {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$CA$I$I(buf, off, len);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'write$CA', function (buf) {
this.write$CA$I$I(buf, 0, buf.length);
});

Clazz.newMeth(C$, 'write$S$I$I', function (s, off, len) {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$S$I$I(s, off, len);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'write$S', function (s) {
this.write$S$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'newLine', function () {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$S(this.lineSeparator);
if (this.autoFlush) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'print$Z', function (b) {
this.write$S(b ? "true" : "false");
});

Clazz.newMeth(C$, 'print$C', function (c) {
this.write$I(c.$c());
});

Clazz.newMeth(C$, 'print$I', function (i) {
this.write$S(String.valueOf$I(i));
});

Clazz.newMeth(C$, 'print$J', function (l) {
this.write$S(String.valueOf$J(l));
});

Clazz.newMeth(C$, 'print$F', function (f) {
this.write$S(String.valueOf$F(f));
});

Clazz.newMeth(C$, 'print$D', function (d) {
this.write$S(String.valueOf$D(d));
});

Clazz.newMeth(C$, 'print$CA', function (s) {
this.write$CA(s);
});

Clazz.newMeth(C$, 'print$S', function (s) {
if (s == null ) {
s="null";
}this.write$S(s);
});

Clazz.newMeth(C$, 'print$O', function (obj) {
this.write$S(String.valueOf$O(obj));
});

Clazz.newMeth(C$, 'println$', function () {
p$1.newLine.apply(this, []);
});

Clazz.newMeth(C$, 'println$Z', function (x) {
{
this.print$Z(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$C', function (x) {
{
this.print$C(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$I', function (x) {
{
this.print$I(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$J', function (x) {
{
this.print$J(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$F', function (x) {
{
this.print$F(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$D', function (x) {
{
this.print$D(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$CA', function (x) {
{
this.print$CA(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$S', function (x) {
{
this.print$S(x);
this.println$();
}});

Clazz.newMeth(C$, 'println$O', function (x) {
var s=String.valueOf$O(x);
{
this.print$S(s);
this.println$();
}});

Clazz.newMeth(C$, 'printf$S$OA', function (format, args) {
return this.format$S$OA(format, args);
});

Clazz.newMeth(C$, 'printf$java_util_Locale$S$OA', function (l, format, args) {
return this.format$java_util_Locale$S$OA(l, format, args);
});

Clazz.newMeth(C$, 'format$S$OA', function (format, args) {
try {
{
p$1.ensureOpen.apply(this, []);
if ((this.formatter == null ) || (this.formatter.locale$() !== $I$(6).getDefault$() ) ) this.formatter=p$1.newFormatter.apply(this, []);
this.formatter.format$java_util_Locale$S$OA($I$(6).getDefault$(), format, args);
if (this.autoFlush) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
return this;
});

Clazz.newMeth(C$, 'newFormatter', function () {
return $I$(7).getInstanceWithParams$S$ClassA$OA("java.util.Formatter", Clazz.array(Class, -1, [Clazz.getClass($I$(8),['append$C','append$CharSequence','append$CharSequence$I$I'])]), Clazz.array(java.lang.Object, -1, [this]));
}, p$1);

Clazz.newMeth(C$, 'format$java_util_Locale$S$OA', function (l, format, args) {
try {
{
p$1.ensureOpen.apply(this, []);
if ((this.formatter == null ) || (this.formatter.locale$() !== l ) ) this.formatter=Clazz.new_($I$(9).c$$Appendable$java_util_Locale,[this, l]);
this.formatter.format$java_util_Locale$S$OA(l, format, args);
if (this.autoFlush) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(5).currentThread$().interrupt$();
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var x = e$$;
{
this.trouble=true;
}
} else {
throw e$$;
}
}
return this;
});

Clazz.newMeth(C$, 'append$CharSequence', function (csq) {
if (csq == null ) this.write$S("null");
 else this.write$S(csq.toString());
return this;
});

Clazz.newMeth(C$, 'append$S', function (s) {
if (s == null ) this.write$S("null");
 else this.write$S(s);
return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I', function (csq, start, end) {
this.write$S(csq == null  ? "null" : csq.subSequence$I$I(start, end).toString());
return this;
});

Clazz.newMeth(C$, 'append$S$I$I', function (s, start, end) {
this.write$S(s == null  ? "null" : s.substring$I$I(start, end));
return this;
});

Clazz.newMeth(C$, 'append$C', function (c) {
this.write$I(c.$c());
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
