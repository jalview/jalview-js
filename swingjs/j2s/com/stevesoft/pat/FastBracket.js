(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Vector','com.stevesoft.pat.oneChar','com.stevesoft.pat.Range','java.util.BitSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FastBracket", null, 'com.stevesoft.pat.Bracket');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.min=0;
this.max=0;
this.bs=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (n) {
C$.superclazz.c$$Z.apply(this, [n]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'process$com_stevesoft_pat_Bracket$Z', function (b, ignc) {
var v=b.v;
b.pv=null;
try {
var nv=v;
if (ignc) {
nv=Clazz.new_($I$(1));
for (var i=0; i < v.size$(); i++) {
var p=v.elementAt$I(i);
nv.addElement$TE(p);
if (Clazz.instanceOf(p, "com.stevesoft.pat.oneChar")) {
var oc=p;
nv.addElement$TE(Clazz.new_($I$(2).c$$C,[oc.altc]));
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Range")) {
var ra=p;
nv.addElement$TE(Clazz.new_($I$(3).c$$C$C,[ra.altlo, ra.althi]));
}}
}v=nv;
for (var i=0; i < v.size$() - 1; i++) {
for (var j=0; j < v.size$() - 1; j++) {
var c1=C$.getl$O(v.elementAt$I(j));
var c2=C$.getl$O(v.elementAt$I(j + 1));
if (c2 < c1) {
var o=v.elementAt$I(j);
v.setElementAt$TE$I(v.elementAt$I(j + 1), j);
v.setElementAt$TE$I(o, j + 1);
}}
}
nv=Clazz.new_($I$(1));
var p=v.elementAt$I(0);
nv.addElement$TE(p);
for (var i=1; i < v.size$(); i++) {
if ((C$.geth$O(p)).$c() + 1 >= (C$.getl$O(v.elementAt$I(i))).$c() ) {
var p2=v.elementAt$I(i);
var lo=C$.min$C$C(C$.getl$O(p), C$.getl$O(p2));
var hi=C$.max$C$C(C$.geth$O(p), C$.geth$O(p2));
nv.setElementAt$TE$I(p=C$.mkelem$C$C(lo, hi), nv.size$() - 1);
} else {
p=v.elementAt$I(i);
nv.addElement$TE(p);
}}
b.v=v=nv;
} catch (e) {
if (Clazz.exceptionOf(e,"com.stevesoft.pat.RegSyntax")){
e.printStackTrace$();
} else {
throw e;
}
}
var negv=C$.neg$java_util_Vector(v);
if (v.size$() == 1) {
return b;
}if (negv.size$() == 1) {
b.v=negv;
b.neg=!b.neg;
return b;
}var fb=C$.newbrack$java_util_Vector$Z(v, b.neg);
if (fb == null ) {
fb=C$.newbrack$java_util_Vector$Z(negv, !b.neg);
}if (fb != null ) {
fb.parent=b.parent;
fb.next=b.next;
return fb;
}return b;
}, 1);

Clazz.newMeth(C$, 'newbrack$java_util_Vector$Z', function (v, neg) {
var fb=Clazz.new_(C$.c$$Z,[neg]);
fb.v=v;
if (v.size$() == 0) {
return null;
}fb.min=C$.getl$O(v.elementAt$I(0)).$c();
fb.max=C$.geth$O(v.elementAt$I(v.size$() - 1)).$c();
if (fb.max - fb.min <= 256) {
fb.bs=Clazz.new_($I$(4).c$$I,[fb.max - fb.min + 1]);
for (var i=0; i < v.size$(); i++) {
var o=v.elementAt$I(i);
var min0=(C$.getl$O(o)).$c() - fb.min;
var max0=(C$.geth$O(o)).$c() - fb.min;
for (var j=min0; j <= max0; j++) {
fb.bs.set$I(j);
}
}
return fb;
}return null;
}, 1);

Clazz.newMeth(C$, 'neg$java_util_Vector', function (v) {
try {
var nv=Clazz.new_($I$(1));
if (v.size$() == 0) {
nv.addElement$TE(Clazz.new_($I$(3).c$$C$C,["\u0000", "\uffff"]));
return nv;
}var p0=C$.getl$O(v.elementAt$I(0)).$c();
if (p0 != 0) {
nv.addElement$TE(C$.mkelem$C$C("\u0000", String.fromCharCode((p0 - 1))));
}for (var i=0; i < v.size$() - 1; i++) {
var hi=(C$.getl$O(v.elementAt$I(i + 1))).$c() - 1;
var lo=(C$.geth$O(v.elementAt$I(i))).$c() + 1;
nv.addElement$TE(C$.mkelem$C$C(String.fromCharCode(lo), String.fromCharCode(hi)));
}
var pN=C$.geth$O(v.lastElement$()).$c();
if (pN != 65535) {
nv.addElement$TE(C$.mkelem$C$C(String.fromCharCode((pN + 1)), "\uffff"));
}return nv;
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
return null;
} else {
throw rs;
}
}
}, 1);

Clazz.newMeth(C$, 'mkelem$C$C', function (lo, hi) {
return lo == hi ? (Clazz.new_($I$(2).c$$C,[lo])) : (Clazz.new_($I$(3).c$$C$C,[lo, hi]));
}, 1);

Clazz.newMeth(C$, 'min$C$C', function (a, b) {
return a < b ? a : b;
}, 1);

Clazz.newMeth(C$, 'max$C$C', function (a, b) {
return a > b ? a : b;
}, 1);

Clazz.newMeth(C$, 'getl$O', function (o) {
var p=o;
if (Clazz.instanceOf(p, "com.stevesoft.pat.Range")) {
return (p).lo;
}return (p).c;
}, 1);

Clazz.newMeth(C$, 'geth$O', function (o) {
var p=o;
if (Clazz.instanceOf(p, "com.stevesoft.pat.Range")) {
return (p).hi;
}return (p).c;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos >= pt.src.length$() || this.Masked$I$com_stevesoft_pat_Pthings(pos, pt) ) {
return -1;
}var c=pt.src.charAt$I(pos);
return (!!(this.neg ^ (c.$c() >= this.min  && c.$c() <= this.max   && this.bs.get$I(c.$c() - this.min) ))) ? this.nextMatch$I$com_stevesoft_pat_Pthings(pos + 1, pt) : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
