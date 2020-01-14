(function(){var P$=java.lang,p$1={};
var C$=Clazz.newClass(P$, "StringBuilder", null, 'AbstractStringBuilder', ['Appendable', 'CharSequence', 'java.io.Serializable']);

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

Clazz.newMeth(C$, 'c$$CharSequence', function (seq) {
C$.superclazz.c$$S.apply(this, [seq.toString()]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (str) {
C$.superclazz.c$$S.apply(this, [str]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'append$Z', function (b) {
this.append0$S(b ? "true" : "false");
return this;
});

Clazz.newMeth(C$, 'append$C', function (c) {
this.append0$C(c);
return this;
});

Clazz.newMeth(C$, 'append$I', function (i) {
this.append0$S(Integer.toString$I(i));
return this;
});

Clazz.newMeth(C$, 'append$J', function (lng) {
this.append0$S(Long.toString$J(lng));
return this;
});

Clazz.newMeth(C$, 'append$F', function (f) {
this.append0$S(Float.toString$F(f));
return this;
});

Clazz.newMeth(C$, 'append$D', function (d) {
this.append0$S(Double.toString$D(d));
return this;
});

Clazz.newMeth(C$, 'append$O', function (obj) {
if (obj == null ) {
this.appendNull$();
} else {
this.append0$S(obj.toString());
}return this;
});

Clazz.newMeth(C$, 'append$S', function (str) {
this.append0$S(str);
return this;
});

Clazz.newMeth(C$, 'append$StringBuffer', function (sb) {
if (sb == null ) {
this.appendNull$();
} else {
this.append0$CA$I$I(sb.getValue$(), 0, sb.length$());
}return this;
});

Clazz.newMeth(C$, 'append$CA', function (ch) {
this.append0$CA(ch);
return this;
});

Clazz.newMeth(C$, 'append$CA$I$I', function (str, offset, len) {
this.append0$CA$I$I(str, offset, len);
return this;
});

Clazz.newMeth(C$, 'append$CharSequence', function (csq) {
if (csq == null ) {
this.appendNull$();
} else {
this.append0$S(csq.toString());
}return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I', function (csq, start, end) {
this.append0$CharSequence$I$I(csq, start, end);
return this;
});

Clazz.newMeth(C$, 'appendCodePoint$I', function (codePoint) {
this.append0$CA(Character.toChars$I(codePoint));
return this;
});

Clazz.newMeth(C$, 'delete$I$I', function (start, end) {
this.delete0$I$I(start, end);
return this;
});

Clazz.newMeth(C$, 'deleteCharAt$I', function (index) {
this.deleteCharAt0$I(index);
return this;
});

Clazz.newMeth(C$, 'insert$I$Z', function (offset, b) {
this.insert0$I$S(offset, b ? "true" : "false");
return this;
});

Clazz.newMeth(C$, 'insert$I$C', function (offset, c) {
this.insert0$I$C(offset, c);
return this;
});

Clazz.newMeth(C$, 'insert$I$I', function (offset, i) {
this.insert0$I$S(offset, Integer.toString$I(i));
return this;
});

Clazz.newMeth(C$, 'insert$I$J', function (offset, l) {
this.insert0$I$S(offset, Long.toString$J(l));
return this;
});

Clazz.newMeth(C$, 'insert$I$F', function (offset, f) {
this.insert0$I$S(offset, Float.toString$F(f));
return this;
});

Clazz.newMeth(C$, 'insert$I$D', function (offset, d) {
this.insert0$I$S(offset, Double.toString$D(d));
return this;
});

Clazz.newMeth(C$, 'insert$I$O', function (offset, obj) {
this.insert0$I$S(offset, obj == null  ? "null" : obj.toString());
return this;
});

Clazz.newMeth(C$, 'insert$I$S', function (offset, str) {
this.insert0$I$S(offset, str);
return this;
});

Clazz.newMeth(C$, 'insert$I$CA', function (offset, ch) {
this.insert0$I$CA(offset, ch);
return this;
});

Clazz.newMeth(C$, 'insert$I$CA$I$I', function (offset, str, strOffset, strLen) {
this.insert0$I$CA$I$I(offset, str, strOffset, strLen);
return this;
});

Clazz.newMeth(C$, 'insert$I$CharSequence', function (offset, s) {
this.insert0$I$S(offset, s == null  ? "null" : s.toString());
return this;
});

Clazz.newMeth(C$, 'insert$I$CharSequence$I$I', function (offset, s, start, end) {
this.insert0$I$CharSequence$I$I(offset, s, start, end);
return this;
});

Clazz.newMeth(C$, 'replace$I$I$S', function (start, end, str) {
this.replace0$I$I$S(start, end, str);
return this;
});

Clazz.newMeth(C$, 'reverse$', function () {
this.reverse0$();
return this;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream', function ($in) {
$in.defaultReadObject$();
var count=$in.readInt$();
var value=$in.readObject$();
this.set$CA$I(value, count);
}, p$1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream', function (out) {
out.defaultWriteObject$();
out.writeInt$I(this.length$());
out.writeObject$O(this.getValue$());
}, p$1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:36 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
