(function(){var P$=java.io,p$1={},I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CharArrayWriter", null, 'java.io.Writer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.buf=null;
this.count=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this.buf=Clazz.array(Character.TYPE, [32]);
this.lock=this.buf;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (initialSize) {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
if (initialSize >= 0) {
this.buf=Clazz.array(Character.TYPE, [initialSize]);
this.lock=this.buf;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("K005e")]);
}}, 1);

Clazz.newMeth(C$, 'close$', function () {
});

Clazz.newMeth(C$, 'expand$I', function (i) {
if (this.count + i <= this.buf.length) {
return;
}var newbuf=Clazz.array(Character.TYPE, [this.buf.length + (2 * i)]);
System.arraycopy$O$I$O$I$I(this.buf, 0, newbuf, 0, this.count);
this.buf=newbuf;
}, p$1);

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'reset$', function () {
{
this.count=0;
}});

Clazz.newMeth(C$, 'size$', function () {
{
return this.count;
}});

Clazz.newMeth(C$, 'toCharArray$', function () {
{
var result=Clazz.array(Character.TYPE, [this.count]);
System.arraycopy$O$I$O$I$I(this.buf, 0, result, 0, this.count);
return result;
}});

Clazz.newMeth(C$, 'toString', function () {
{
return  String.instantialize(this.buf, 0, this.count);
}});

Clazz.newMeth(C$, 'write$CA$I$I', function (c, offset, len) {
if (0 <= offset && offset <= c.length  && 0 <= len  && len <= c.length - offset ) {
{
p$1.expand$I.apply(this, [len]);
System.arraycopy$O$I$O$I$I(c, offset, this.buf, this.count, len);
this.count+=len;
}} else {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}});

Clazz.newMeth(C$, 'write$I', function (oneChar) {
{
p$1.expand$I.apply(this, [1]);
this.buf[this.count++]=String.fromCharCode(oneChar);
}});

Clazz.newMeth(C$, 'write$S$I$I', function (str, offset, len) {
if (str == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(1).getString$S("K0047")]);
}if (0 <= offset && offset <= str.length$()  && 0 <= len  && len <= str.length$() - offset ) {
{
p$1.expand$I.apply(this, [len]);
str.getChars$I$I$CA$I(offset, offset + len, this.buf, this.count);
this.count+=len;
}} else {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException'));
}});

Clazz.newMeth(C$, 'writeTo$java_io_Writer', function (out) {
{
out.write$CA$I$I(this.buf, 0, this.count);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
