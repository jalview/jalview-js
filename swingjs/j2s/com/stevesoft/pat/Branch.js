(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Hashtable','java.util.Vector','com.stevesoft.pat.oneChar','com.stevesoft.pat.FastChar','com.stevesoft.pat.patInt','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegOpt','com.stevesoft.pat.Or','StringBuffer','com.stevesoft.pat.FastBracket','com.stevesoft.pat.Branch','com.stevesoft.pat.FastMulti']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Branch", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.h=null;
this.keys=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.h=Clazz.new_($I$(1));
this.keys=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (x) {
var b=Clazz.new_(C$);
b.keys=this.keys.clone$();
x.put$TK$TV(this, b);
x.put$TK$TV(b, b);
for (var i=0; i < this.keys.size$(); i++) {
var p=this.h.get$O(this.keys.elementAt$I(i));
b.h.put$TK$TV(this.keys.elementAt$I(i), p.clone$java_util_Hashtable(x));
}
return b;
});

Clazz.newMeth(C$, 'reduce$Z$Z', function (ignoreCase, dontMinQ) {
if (this.h.size$() == 1) {
var e=this.h.keys$();
var c=e.nextElement$();
var oc;
if (ignoreCase || dontMinQ ) {
oc=Clazz.new_($I$(3).c$$C,[c.charValue$()]);
} else {
oc=Clazz.new_($I$(4).c$$C,[c.charValue$()]);
}oc.next=this.h.get$O(c);
oc.add$com_stevesoft_pat_Pattern(this.next);
return oc;
} else if (this.h.size$() == 0) {
return null;
}return this;
});

Clazz.newMeth(C$, 'maxChars$', function () {
var e=this.h.keys$();
var count=Clazz.new_($I$(5).c$$I,[0]);
while (e.hasMoreElements$()){
var key=e.nextElement$();
var pa=this.h.get$O(key);
var pi=pa.maxChars$();
pi.inc$();
count.maxeq$com_stevesoft_pat_patInt(pi);
}
return count;
});

Clazz.newMeth(C$, 'minChars$', function () {
var e=this.h.keys$();
var count=Clazz.new_($I$(5).c$$I,[0]);
while (e.hasMoreElements$()){
var key=e.nextElement$();
var pa=this.h.get$O(key);
var pi=pa.minChars$();
pi.inc$();
count.mineq$com_stevesoft_pat_patInt(pi);
}
return count;
});

Clazz.newMeth(C$, 'addc$com_stevesoft_pat_oneChar$Z$Z', function (o, ignoreCase, dontMinQ) {
var n=o.next;
if (n == null ) {
n=Clazz.new_($I$(6));
} else {
n=$I$(7).opt$com_stevesoft_pat_Pattern$Z$Z(n, ignoreCase, dontMinQ);
}n.setParent$com_stevesoft_pat_Pattern(this);
this.set$Character$com_stevesoft_pat_Pattern$Z$Z(Clazz.new_(Character.c$$C,[o.c]), n, ignoreCase, dontMinQ);
if (ignoreCase) {
if (o.c != o.altc) {
this.set$Character$com_stevesoft_pat_Pattern$Z$Z(Clazz.new_(Character.c$$C,[o.altc]), n, ignoreCase, dontMinQ);
}if (o.c != o.altc2 && o.altc != o.altc2 ) {
this.set$Character$com_stevesoft_pat_Pattern$Z$Z(Clazz.new_(Character.c$$C,[o.altc2]), n, ignoreCase, dontMinQ);
}}});

Clazz.newMeth(C$, 'set$Character$com_stevesoft_pat_Pattern$Z$Z', function (c, n, igc, dontMinQ) {
var p=this.h.get$O(c);
this.next=null;
if (p == null ) {
if (Clazz.instanceOf(n, "com.stevesoft.pat.Or")) {
var np=Clazz.new_($I$(6));
np.add$com_stevesoft_pat_Pattern(n);
this.h.put$TK$TV(c, np);
} else {
this.h.put$TK$TV(c, n);
}this.keys.addElement$TE(c);
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Or")) {
(p).addOr$com_stevesoft_pat_Pattern(n);
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.oneChar") && Clazz.instanceOf(n, "com.stevesoft.pat.oneChar") && (p).c != (n).c  ) {
var b=Clazz.new_(C$);
b.addc$com_stevesoft_pat_oneChar$Z$Z(p, igc, dontMinQ);
b.addc$com_stevesoft_pat_oneChar$Z$Z(n, igc, dontMinQ);
this.h.put$TK$TV(c, b);
b.setParent$com_stevesoft_pat_Pattern(this);
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Branch") && Clazz.instanceOf(n, "com.stevesoft.pat.oneChar") ) {
(p).addc$com_stevesoft_pat_oneChar$Z$Z(n, igc, dontMinQ);
n.setParent$com_stevesoft_pat_Pattern(p);
} else {
var o=Clazz.new_($I$(8));
o.setParent$com_stevesoft_pat_Pattern(this);
if (Clazz.instanceOf(p, "com.stevesoft.pat.NullPattern") && p.parent == null   && p.next != null  ) {
o.addOr$com_stevesoft_pat_Pattern(p.next);
} else {
o.addOr$com_stevesoft_pat_Pattern(p);
}o.addOr$com_stevesoft_pat_Pattern(n);
var optpat=$I$(7).opt$com_stevesoft_pat_Pattern$Z$Z(o, igc, dontMinQ);
this.h.put$TK$TV(c, optpat);
optpat.setParent$com_stevesoft_pat_Pattern(this);
}});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(9));
sb.append$S("(?:(?#branch)");
for (var i=0; i < this.keys.size$(); i++) {
var c=this.keys.elementAt$I(i);
sb.append$O(c);
sb.append$O(this.h.get$O(c));
if (i + 1 < this.keys.size$()) {
sb.append$S("|");
}}
sb.append$S(")");
sb.append$S(this.nextString$());
return sb.toString();
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos >= pt.src.length$()) {
return -1;
}var n=this.h.get$O(Clazz.new_(Character.c$$C,[pt.src.charAt$I(pos)]));
if (n == null ) {
return -1;
}if (pt.cbits != null  && pt.cbits.get$I(pos) ) {
return -1;
}return n.matchInternal$I$com_stevesoft_pat_Pthings(pos + 1, pt);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
