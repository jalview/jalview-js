(function(){var P$=java.lang,I$=[];
var C$=Clazz.newClass(P$, "JSSB", null, null, ['Appendable', 'CharSequence', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.s=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);

this.s = "";
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
C$.$init$.apply(this);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'append0$CharSequence', function (csq) {
this.append0$S(csq.toString());
});

Clazz.newMeth(C$, 'append0$S', function (s) {

this.s += s
});

Clazz.newMeth(C$, 'append0$C', function (c) {

this.s += c;
});

Clazz.newMeth(C$, 'append0$I', function (i) {

this.s += i
});

Clazz.newMeth(C$, 'append0$Z', function (b) {

this.s += b
});

Clazz.newMeth(C$, 'append0$F', function (f) {
return this.append0$S(Float.toString$F(f));
});

Clazz.newMeth(C$, 'append0$D', function (d) {
return this.append0$S(Double.toString$D(d));
});

Clazz.newMeth(C$, 'appendCodePoint$I', function (i) {

this.s += String.fromCharCode(i);
return this;
});

Clazz.newMeth(C$, 'append0$StringBuilder', function (buf) {

this.s += buf.s;
return this;
});

Clazz.newMeth(C$, 'append0$StringBuffer', function (buf) {

this.s += (buf === null ? "null" : buf.s);
return this;
});

Clazz.newMeth(C$, 'append0$O', function (data) {

this.s += (data === null ? "null" : data.toString());
return this;
});

Clazz.newMeth(C$, 'append0$CA$I$I', function (cb, off, len) {

this.s += cb.slice(off,off+len).join("");
});

Clazz.newMeth(C$, 'append0$CharSequence$I$I', function (csq, start, end) {
return this.append0$S(csq.subSequence$I$I(start, end).toString());
});

Clazz.newMeth(C$, 'toString', function () {
{
return this.s;
}
});

Clazz.newMeth(C$, 'length$', function () {
{
return this.s.length;
}
});

Clazz.newMeth(C$, 'indexOf$S', function (s) {
{
return this.s.indexOf(s);
}
});

Clazz.newMeth(C$, 'charAt$I', function (i) {
{
return this.s.charAt(i);
}
});

Clazz.newMeth(C$, 'charCodeAt$I', function (i) {
{
return this.s.charCodeAt(i);
}
});

Clazz.newMeth(C$, 'setLength$I', function (n) {

this.s = this.s.substring(0, n);
});

Clazz.newMeth(C$, 'lastIndexOf$S', function (s) {
{
return this.s.lastIndexOf(s);
}
});

Clazz.newMeth(C$, 'lastIndexOf$S$I', function (s, i) {
{
return this.s.lastIndexOf(s, i);
}
});

Clazz.newMeth(C$, 'indexOf$S$I', function (s, i) {
{
return this.s.indexOf(s, i);
}
});

Clazz.newMeth(C$, 'substring$I', function (i) {
{
return this.s.substring(i);
}
});

Clazz.newMeth(C$, 'substring$I$I', function (i, j) {
{
return this.s.substring(i, j);
}
});

Clazz.newMeth(C$, 'subSequence$I$I', function (start, end) {
return this.substring$I$I(start, end);
});

Clazz.newMeth(C$, 'toBytes$I$I', function (off, len) {
if (len == 0) return Clazz.array(Byte.TYPE, [0]);
var cs;
{
cs = "UTF-8";
}
return (len > 0 ? this.substring$I$I(off, off + len) : off == 0 ? this.toString() : this.substring$I$I(off, this.length$() - off)).getBytes$java_nio_charset_Charset(cs);
});

Clazz.newMeth(C$, 'replace$I$I$S', function (start, end, str) {

this.s = this.s.substring(0, start) + str + this.s.substring(end);
return this;
});

Clazz.newMeth(C$, 'delete$I$I', function (start, end) {

this.s = this.s.substring(0, start) + this.s.substring(end);
return this;
});

Clazz.newMeth(C$, 'deleteCharAt$I', function (index) {

this.s = this.s.substring(0, start) + this.s.substring(end);
return this;
});

Clazz.newMeth(C$, 'insert0$I$C', function (offset, c) {
return this.replace$I$I$S(offset, offset, c);
});

Clazz.newMeth(C$, 'insert0$I$S', function (offset, c) {
return this.replace$I$I$S(offset, offset, c);
});

Clazz.newMeth(C$, 'insert0$I$I', function (offset, i) {
return this.insert0$I$S(offset, i ||"0");
});

Clazz.newMeth(C$, 'insert0$I$J', function (offset, l) {
return this.insert0$I$S(offset, l ||"0");
});

Clazz.newMeth(C$, 'insert0$I$F', function (offset, f) {
return this.insert0$I$S(offset, Float.toString$F(f));
});

Clazz.newMeth(C$, 'insert0$I$D', function (offset, d) {
return this.insert0$I$S(offset, Double.toString$D(d));
});

Clazz.newMeth(C$, 'insert0$I$O', function (offset, o) {
return this.replace$I$I$S(offset, offset, (o == null  ? null : o.toString()));
});

Clazz.newMeth(C$, 'insert0$I$CharSequence', function (offset, s) {
return this.insert0$I$O(offset, s);
});

Clazz.newMeth(C$, 'insert0$I$CharSequence$I$I', function (offset, s, start, end) {
return this.replace$I$I$S(offset, offset, (s == null  ? null : s.subSequence$I$I(start, end).toString()));
});

Clazz.newMeth(C$, 'insert0$I$CA', function (offset, str) {
return this.replace$I$I$S(offset, offset, "");
});

Clazz.newMeth(C$, 'insert0$I$CA$I$I', function (offset, str, off, len) {
this.replace$I$I$S(offset, offset, "");
});

Clazz.newMeth(C$, 'setCharAt$I$C', function (offset, ch) {
this.insert0$I$C(offset, ch);
});

Clazz.newMeth(C$, 'reverse$', function () {

s.toCharArray$().reverse().join("");
});

Clazz.newMeth(C$, 'getValue$', function () {
this.s.toCharArray$();
});

Clazz.newMeth(C$, 'trimToSize$', function () {
});

Clazz.newMeth(C$, 'ensureCapacity$I', function (min) {
});

Clazz.newMeth(C$, 'codePointCount$I$I', function (beginIndex, endIndex) {
return beginIndex - endIndex;
});

Clazz.newMeth(C$, 'codePointBefore$I', function (i) {
if (i < 1 || i > this.s.length$() ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
return this.s.codePointAt$I(i);
});

Clazz.newMeth(C$, 'getChars$I$I$CA$I', function (start, end, buffer, idx) {
});

Clazz.newMeth(C$, 'offsetByCodePoints$I$I', function (index, codePointOffset) {
return index + codePointOffset;
});

Clazz.newMeth(C$, 'codePointAt$I', function (index) {
return 0;
});

Clazz.newMeth(C$, 'shareValue$', function () {
return this.getValue$();
});
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-28 12:09:52 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
