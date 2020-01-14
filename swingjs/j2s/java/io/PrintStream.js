(function(){var P$=java.io,p$1={},I$=[[0,'java.io.BufferedWriter','java.io.OutputStreamWriter','java.io.FileOutputStream','Thread','java.util.Locale','java.util.Formatter']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PrintStream", null, 'java.io.FilterOutputStream', ['Appendable', 'java.io.Closeable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.autoFlush=false;
this.trouble=false;
this.formatter=null;
this.bufferedWriter=null;
this.streamWriter=null;
this.closing=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.autoFlush=false;
this.trouble=false;
this.closing=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream', function (out) {
C$.c$$java_io_OutputStream$Z.apply(this, [out, false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$java_io_OutputStream', function (autoFlush, out) {
C$.superclazz.c$$java_io_OutputStream.apply(this, [out]);
C$.$init$.apply(this);
if (out == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Null output stream"]);
this.autoFlush=autoFlush;
}, 1);

Clazz.newMeth(C$, 'init$java_io_OutputStreamWriter', function (osw) {
this.streamWriter=osw;
this.bufferedWriter=Clazz.new_($I$(1).c$$java_io_Writer,[osw]);
}, p$1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$Z', function (out, autoFlush) {
C$.c$$Z$java_io_OutputStream.apply(this, [autoFlush, out]);
p$1.init$java_io_OutputStreamWriter.apply(this, [Clazz.new_($I$(2).c$$java_io_OutputStream,[this])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$Z$S', function (out, autoFlush, encoding) {
C$.c$$Z$java_io_OutputStream.apply(this, [autoFlush, out]);
p$1.init$java_io_OutputStreamWriter.apply(this, [Clazz.new_($I$(2).c$$java_io_OutputStream$S,[this, encoding])]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (fileName, csn) {
C$.c$$Z$java_io_OutputStream.apply(this, [false, Clazz.new_($I$(3).c$$S,[fileName])]);
p$1.init$java_io_OutputStreamWriter.apply(this, [Clazz.new_($I$(2).c$$java_io_OutputStream$S,[this, csn])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File', function (file) {
C$.c$$Z$java_io_OutputStream.apply(this, [false, Clazz.new_($I$(3).c$$java_io_File,[file])]);
p$1.init$java_io_OutputStreamWriter.apply(this, [Clazz.new_($I$(2).c$$java_io_OutputStream,[this])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$S', function (file, csn) {
C$.c$$Z$java_io_OutputStream.apply(this, [false, Clazz.new_($I$(3).c$$java_io_File,[file])]);
p$1.init$java_io_OutputStreamWriter.apply(this, [Clazz.new_($I$(2).c$$java_io_OutputStream$S,[this, csn])]);
}, 1);

Clazz.newMeth(C$, 'ensureOpen', function () {
if (this.out == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'flush$', function () {
{
try {
p$1.ensureOpen.apply(this, []);
this.out.flush$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.trouble=true;
} else {
throw x;
}
}
}});

Clazz.newMeth(C$, 'close$', function () {
{
if (!this.closing) {
this.closing=true;
try {
this.bufferedWriter.close$();
this.out.close$();
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
this.trouble=true;
} else {
throw x;
}
}
this.bufferedWriter=null;
this.streamWriter=null;
this.out=null;
}}});

Clazz.newMeth(C$, 'checkError$', function () {
if (this.out != null ) this.flush$();
if (Clazz.instanceOf(this.out, "java.io.PrintStream")) {
var ps=this.out;
return ps.checkError$();
}return this.trouble;
});

Clazz.newMeth(C$, 'setError$', function () {
this.trouble=true;
});

Clazz.newMeth(C$, 'clearError$', function () {
this.trouble=false;
});

Clazz.newMeth(C$, 'write$I', function (b) {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$I(b);
if ((b == 10 ) && this.autoFlush ) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(4).currentThread$().interrupt$();
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

Clazz.newMeth(C$, 'write$BA$I$I', function (buf, off, len) {
try {
{
p$1.ensureOpen.apply(this, []);
this.out.write$BA$I$I(buf, off, len);
if (this.autoFlush) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(4).currentThread$().interrupt$();
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
try {
{
p$1.ensureOpen.apply(this, []);
this.bufferedWriter.write$CA(buf);
this.bufferedWriter.flushBuffer$();
this.streamWriter.flushBuffer$();
if (this.autoFlush) {
for (var i=0; i < buf.length; i++) if (buf[i] == "\n") {
this.out.flush$();
}
}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(4).currentThread$().interrupt$();
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

Clazz.newMeth(C$, 'write$S', function (s) {
try {
{
p$1.ensureOpen.apply(this, []);
this.bufferedWriter.write$S(s);
this.bufferedWriter.flushBuffer$();
this.streamWriter.flushBuffer$();
if (this.autoFlush && (s.indexOf$I("\n") >= 0) ) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(4).currentThread$().interrupt$();
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

Clazz.newMeth(C$, 'newLine', function () {
try {
{
p$1.ensureOpen.apply(this, []);
this.bufferedWriter.newLine$();
this.bufferedWriter.flushBuffer$();
this.streamWriter.flushBuffer$();
if (this.autoFlush) this.out.flush$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(4).currentThread$().interrupt$();
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
p$1.write$S.apply(this, [b ? "true" : "false"]);
});

Clazz.newMeth(C$, 'print$C', function (c) {
p$1.write$S.apply(this, [String.valueOf$C(c)]);
});

Clazz.newMeth(C$, 'print$I', function (i) {
p$1.write$S.apply(this, [String.valueOf$I(i)]);
});

Clazz.newMeth(C$, 'print$J', function (l) {
p$1.write$S.apply(this, [String.valueOf$J(l)]);
});

Clazz.newMeth(C$, 'print$F', function (f) {
p$1.write$S.apply(this, [String.valueOf$F(f)]);
});

Clazz.newMeth(C$, 'print$D', function (d) {
p$1.write$S.apply(this, [String.valueOf$D(d)]);
});

Clazz.newMeth(C$, 'print$CA', function (s) {
p$1.write$CA.apply(this, [s]);
});

Clazz.newMeth(C$, 'print$S', function (s) {
if (s == null ) {
s="null";
}p$1.write$S.apply(this, [s]);
});

Clazz.newMeth(C$, 'print$O', function (obj) {
p$1.write$S.apply(this, [String.valueOf$O(obj)]);
});

Clazz.newMeth(C$, 'println$', function () {
p$1.newLine.apply(this, []);
});

Clazz.newMeth(C$, 'println$Z', function (x) {
{
this.print$Z(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$C', function (x) {
{
this.print$C(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$I', function (x) {
{
this.print$I(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$J', function (x) {
{
this.print$J(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$F', function (x) {
{
this.print$F(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$D', function (x) {
{
this.print$D(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$CA', function (x) {
{
this.print$CA(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$S', function (x) {
{
this.print$S(x);
p$1.newLine.apply(this, []);
}});

Clazz.newMeth(C$, 'println$O', function (x) {
var s=String.valueOf$O(x);
{
this.print$S(s);
p$1.newLine.apply(this, []);
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
if ((this.formatter == null ) || (this.formatter.locale$() !== $I$(5).getDefault$() ) ) this.formatter=Clazz.new_($I$(6).c$$Appendable,[this]);
this.formatter.format$java_util_Locale$S$OA($I$(5).getDefault$(), format, args);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(4).currentThread$().interrupt$();
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

Clazz.newMeth(C$, 'format$java_util_Locale$S$OA', function (l, format, args) {
try {
{
p$1.ensureOpen.apply(this, []);
if ((this.formatter == null ) || (this.formatter.locale$() !== l ) ) this.formatter=Clazz.new_($I$(6).c$$Appendable$java_util_Locale,[this, l]);
this.formatter.format$java_util_Locale$S$OA(l, format, args);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.InterruptedIOException")){
var x = e$$;
{
$I$(4).currentThread$().interrupt$();
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
if (csq == null ) this.print$S("null");
 else this.print$S(csq.toString());
return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I', function (csq, start, end) {
var cs=(csq == null  ? "null" : csq);
p$1.write$S.apply(this, [cs.subSequence$I$I(start, end).toString()]);
return this;
});

Clazz.newMeth(C$, 'append$C', function (c) {
this.print$C(c);
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
