(function(){var P$=java.lang,p$1={};
var C$=Clazz.newClass(P$, "StringBuffer", null, 'AbstractStringBuilder', ['Appendable', 'java.io.Serializable', 'CharSequence']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (capacity) {
C$.superclazz.c$$I.apply(this, [capacity]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (string) {
C$.superclazz.c$$S.apply(this, [string]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$CharSequence', function (cs) {
C$.superclazz.c$$S.apply(this, [cs == null  ? null : cs.toString()]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'append$Z', function (b) {
return this.append$S(b ? "true" : "false");
});

Clazz.newMeth(C$, 'append$C', function (ch) {
this.append0$C(ch);
return this;
});

Clazz.newMeth(C$, 'append$D', function (d) {
return this.append$S(Double.toString$D(d));
});

Clazz.newMeth(C$, 'append$F', function (f) {
return this.append$S(Float.toString$F(f));
});

Clazz.newMeth(C$, 'append$I', function (i) {
return this.append$S(Integer.toString$I(i));
});

Clazz.newMeth(C$, 'append$J', function (l) {
return this.append$S(Long.toString$J(l));
});

Clazz.newMeth(C$, 'append$O', function (obj) {
if (obj == null ) {
this.appendNull$();
} else {
this.append0$S(obj.toString());
}return this;
});

Clazz.newMeth(C$, 'append$S', function (string) {
this.append0$S(string);
return this;
});

Clazz.newMeth(C$, 'append$StringBuffer', function (sb) {
if (sb == null ) {
this.appendNull$();
} else {
{
this.append0$CA$I$I(sb.getValue$(), 0, sb.length$());
}}return this;
});

Clazz.newMeth(C$, 'append$CA', function (chars) {
this.append0$CA(chars);
return this;
});

Clazz.newMeth(C$, 'append$CA$I$I', function (chars, start, length) {
this.append0$CA$I$I(chars, start, length);
return this;
});

Clazz.newMeth(C$, 'append$CharSequence', function (s) {
if (s == null ) {
this.appendNull$();
} else {
this.append0$S(s.toString());
}return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I', function (s, start, end) {
this.append0$CharSequence$I$I(s, start, end);
return this;
});

Clazz.newMeth(C$, 'appendCodePoint$I', function (codePoint) {
return this.append$CA(Character.toChars$I(codePoint));
});

Clazz.newMeth(C$, 'charAt$I', function (index) {
return C$.superclazz.prototype.charAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'codePointAt$I', function (index) {
return C$.superclazz.prototype.codePointAt$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'codePointBefore$I', function (index) {
return C$.superclazz.prototype.codePointBefore$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'codePointCount$I$I', function (beginIndex, endIndex) {
return C$.superclazz.prototype.codePointCount$I$I.apply(this, [beginIndex, endIndex]);
});

Clazz.newMeth(C$, 'delete$I$I', function (start, end) {
this.delete0$I$I(start, end);
return this;
});

Clazz.newMeth(C$, 'deleteCharAt$I', function (location) {
this.deleteCharAt0$I(location);
return this;
});

Clazz.newMeth(C$, 'ensureCapacity$I', function (min) {
C$.superclazz.prototype.ensureCapacity$I.apply(this, [min]);
});

Clazz.newMeth(C$, 'getChars$I$I$CA$I', function (start, end, buffer, idx) {
C$.superclazz.prototype.getChars$I$I$CA$I.apply(this, [start, end, buffer, idx]);
});

Clazz.newMeth(C$, 'indexOf$S$I', function (subString, start) {
return C$.superclazz.prototype.indexOf$S$I.apply(this, [subString, start]);
});

Clazz.newMeth(C$, 'insert$I$C', function (index, ch) {
this.insert0$I$C(index, ch);
return this;
});

Clazz.newMeth(C$, 'insert$I$Z', function (index, b) {
return this.insert$I$S(index, b ? "true" : "false");
});

Clazz.newMeth(C$, 'insert$I$I', function (index, i) {
return this.insert$I$S(index, Integer.toString$I(i));
});

Clazz.newMeth(C$, 'insert$I$J', function (index, l) {
return this.insert$I$S(index, Long.toString$J(l));
});

Clazz.newMeth(C$, 'insert$I$D', function (index, d) {
return this.insert$I$S(index, Double.toString$D(d));
});

Clazz.newMeth(C$, 'insert$I$F', function (index, f) {
return this.insert$I$S(index, Float.toString$F(f));
});

Clazz.newMeth(C$, 'insert$I$O', function (index, obj) {
return this.insert$I$S(index, obj == null  ? "null" : obj.toString());
});

Clazz.newMeth(C$, 'insert$I$S', function (index, string) {
this.insert0$I$S(index, string);
return this;
});

Clazz.newMeth(C$, 'insert$I$CA', function (index, chars) {
this.insert0$I$CA(index, chars);
return this;
});

Clazz.newMeth(C$, 'insert$I$CA$I$I', function (index, chars, start, length) {
this.insert0$I$CA$I$I(index, chars, start, length);
return this;
});

Clazz.newMeth(C$, 'insert$I$CharSequence', function (index, s) {
this.insert0$I$S(index, s == null  ? "null" : s.toString());
return this;
});

Clazz.newMeth(C$, 'insert$I$CharSequence$I$I', function (index, s, start, end) {
this.insert0$I$CharSequence$I$I(index, s, start, end);
return this;
});

Clazz.newMeth(C$, 'lastIndexOf$S$I', function (subString, start) {
return C$.superclazz.prototype.lastIndexOf$S$I.apply(this, [subString, start]);
});

Clazz.newMeth(C$, 'offsetByCodePoints$I$I', function (index, codePointOffset) {
return C$.superclazz.prototype.offsetByCodePoints$I$I.apply(this, [index, codePointOffset]);
});

Clazz.newMeth(C$, 'replace$I$I$S', function (start, end, string) {
this.replace0$I$I$S(start, end, string);
return this;
});

Clazz.newMeth(C$, 'reverse$', function () {
this.reverse0$();
return this;
});

Clazz.newMeth(C$, 'setCharAt$I$C', function (index, ch) {
C$.superclazz.prototype.setCharAt$I$C.apply(this, [index, ch]);
});

Clazz.newMeth(C$, 'setLength$I', function (length) {
C$.superclazz.prototype.setLength$I.apply(this, [length]);
});

Clazz.newMeth(C$, 'subSequence$I$I', function (start, end) {
return C$.superclazz.prototype.substring$I$I.apply(this, [start, end]);
});

Clazz.newMeth(C$, 'substring$I', function (start) {
return C$.superclazz.prototype.substring$I.apply(this, [start]);
});

Clazz.newMeth(C$, 'substring$I$I', function (start, end) {
return C$.superclazz.prototype.substring$I$I.apply(this, [start, end]);
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []);
});

Clazz.newMeth(C$, 'trimToSize$', function () {
C$.superclazz.prototype.trimToSize$.apply(this, []);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
var fields=out.putFields$();
fields.put$S$I("count", this.length$());
fields.put$S$Z("shared", false);
fields.put$S$O("value", this.getValue$());
out.writeFields$();
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
var fields=$in.readFields$();
var count=fields.get$S$I("count", 0);
var value=fields.get$S$O("value", null);
this.set$CA$I(value, count);
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
