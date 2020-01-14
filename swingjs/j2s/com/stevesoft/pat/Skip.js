(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr','StringBuffer','com.stevesoft.pat.SkipBMH','com.stevesoft.pat.Skip2','com.stevesoft.pat.Skipped']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Skip");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.src=null;
this.c=0;
this.mask=0;
this.offset=0;
this.ign=false;
this.m1=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mkmask$I', function (c) {
var x=String.fromCharCode(c);
return ~(($I$(1).toUpperCase$C(x)).$c() | ($I$(1).toLowerCase$C(x)).$c() | ($I$(1).toTitleCase$C(x)).$c() );
}, 1);

Clazz.newMeth(C$, 'string$com_stevesoft_pat_Regex', function (r) {
return r.skipper == null  ? null : r.skipper.src;
}, 1);

Clazz.newMeth(C$, 'offset$com_stevesoft_pat_Regex', function (r) {
return r.skipper == null  ? -1 : r.skipper.offset;
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$I', function (s, ign, o) {
C$.$init$.apply(this);
this.src=s;
this.c=s.charAt$I(0).$c();
if (ign) {
this.mask=C$.mkmask$I(this.c);
} else {
this.mask=0;
}this.offset=o;
this.ign=ign;
this.m1=(s.length$() == 1);
}, 1);

Clazz.newMeth(C$, 'find$com_stevesoft_pat_StringLike', function (s) {
return this.find$com_stevesoft_pat_StringLike$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'min$I$I', function (a, b) {
return a < b ? a : b;
}, 1);

Clazz.newMeth(C$, 'find$com_stevesoft_pat_StringLike$I$I', function (s, start, end) {
if (start > end) {
return -1;
}start+=this.offset;
var vend=C$.min$I$I(s.length$() - 1, end + this.offset);
if (this.mask != this.c) {
for (var i=start; i <= vend; i++) {
if (0 == ((s.charAt$I(i)).$c() & this.mask)) {
if (this.m1 || $I$(1).regionMatches$com_stevesoft_pat_StringLike$Z$I$S$I$I(s, this.ign, i, this.src, 0, this.src.length$()) ) {
return i - this.offset;
}}}
} else {
for (var i=start; i <= vend; i++) {
if (this.c == (s.charAt$I(i)).$c() ) {
if (this.m1 || $I$(1).regionMatches$com_stevesoft_pat_StringLike$Z$I$S$I$I(s, this.ign, i, this.src, 0, this.src.length$()) ) {
return i - this.offset;
}}}
}return -1;
});

Clazz.newMeth(C$, 'findSkip$com_stevesoft_pat_Regex', function (r) {
return C$.findSkip$com_stevesoft_pat_Pattern$Z$Z(r.thePattern, r.ignoreCase, !r.dontMatchInQuotes);
}, 1);

Clazz.newMeth(C$, 'findSkip$com_stevesoft_pat_Pattern$Z$Z', function (p, ignoreCase, trnc) {
var sb=Clazz.new_($I$(2));
var subsk=null;
var offset=0;
var skipc=-1;
var skipoff=0;
for (; p != null ; p=p.next) {
if (Clazz.instanceOf(p, "com.stevesoft.pat.oneChar")) {
skipc=(p).c.$c();
skipoff=offset;
}if (Clazz.instanceOf(p, "com.stevesoft.pat.oneChar") && Clazz.instanceOf(p.next, "com.stevesoft.pat.oneChar") ) {
var psav=p;
sb.append$C((p).c);
while (Clazz.instanceOf(p.next, "com.stevesoft.pat.oneChar")){
sb.append$C((p.next).c);
p=p.next;
}
var st=sb.toString();
var sk=null;
if (st.length$() > 2) {
sk=Clazz.new_($I$(3).c$$S$Z$I,[st, ignoreCase, offset]);
} else {
sk=Clazz.new_($I$(4).c$$S$Z$I,[st, ignoreCase, offset]);
}if (trnc && st.length$() > 2 ) {
psav.next=Clazz.new_($I$(5).c$$S,[st.substring$I(1)]);
psav.next.next=p.next;
psav.next.parent=p.parent;
}return sk;
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Or") && (p).v.size$() == 1  && !(p).leftForm$().equals$O("(?!")  && null != (subsk=C$.findSkip$com_stevesoft_pat_Pattern$Z$Z((p).v.elementAt$I(0), ignoreCase, trnc))  ) {
subsk.offset+=offset;
return subsk;
} else if (p.minChars$().equals$com_stevesoft_pat_patInt(p.maxChars$())) {
offset+=p.minChars$().intValue$();
} else {
return skipc < 0 ? null : Clazz.new_(C$.c$$S$Z$I,["" + String.fromCharCode(skipc), ignoreCase, skipoff]);
}}
return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
