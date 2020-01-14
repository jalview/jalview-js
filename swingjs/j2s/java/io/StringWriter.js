(function(){var P$=java.io,I$=[[0,'StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StringWriter", null, 'java.io.Writer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.buf=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.buf=Clazz.new_($I$(1).c$$I,[16]);
this.lock=this.buf;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialSize) {
Clazz.super_(C$, this,1);
if (initialSize >= 0) {
this.buf=Clazz.new_($I$(1).c$$I,[initialSize]);
this.lock=this.buf;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}}, 1);

Clazz.newMeth(C$, 'close$', function () {
});

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'getBuffer$', function () {
{
return this.buf;
}});

Clazz.newMeth(C$, 'toString', function () {
{
return this.buf.toString();
}});

Clazz.newMeth(C$, 'write$CA$I$I', function (cbuf, offset, count) {
if (0 <= offset && offset <= cbuf.length  && 0 <= count  && count <= cbuf.length - offset ) {
{
this.buf.append$CA$I$I(cbuf, offset, count);
}} else {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}});

Clazz.newMeth(C$, 'write$I', function (oneChar) {
{
this.buf.append$C(String.fromCharCode(oneChar));
}});

Clazz.newMeth(C$, 'write$S', function (str) {
{
this.buf.append$S(str);
}});

Clazz.newMeth(C$, 'write$S$I$I', function (str, offset, count) {
var sub=str.substring$I$I(offset, offset + count);
{
this.buf.append$S(sub);
}});

Clazz.newMeth(C$, 'append$C', function (c) {
this.write$I(c.$c());
return this;
});

Clazz.newMeth(C$, 'append$CharSequence', function (csq) {
if (null == csq ) {
this.append$CharSequence$I$I("null", 0, "null".length$());
} else {
this.append$CharSequence$I$I(csq, 0, csq.length$());
}return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I', function (csq, start, end) {
if (null == csq ) {
csq="null";
}var output=csq.subSequence$I$I(start, end).toString();
this.write$S$I$I(output, 0, output.length$());
return this;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:34 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
