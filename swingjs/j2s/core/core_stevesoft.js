(function(Clazz,Clazz_setTVer,Clazz_array,Clazz_assert,Clazz_clone,Clazz_exceptionOf,Clazz_forName,Clazz_getClass,Clazz_instanceOf,Clazz_load,Clazz_new_,Clazz_newClass,Clazz_newEnumConst,Clazz_newInstance,Clazz_newInterface,Clazz_newMeth,Clazz_newPackage,Clazz_super_){(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PushRule", null, 'com.stevesoft.pat.SpecialRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['NewRule','com.stevesoft.pat.Regex']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_PushRule', function (p) {
Clazz.super_(C$, this);
this.NewRule=p.NewRule;
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_Regex', function (nm, rr) {
Clazz.super_(C$, this);
this.name=nm;
this.NewRule=rr;
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_Transformer', function (nm, tr) {
Clazz.super_(C$, this);
this.name=nm;
this.NewRule=tr.rp;
}, 1);

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_PushRule,[this]);
});

Clazz.newMeth(C$, 'String1$', function () {
return "${+" + this.name + "}" ;
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sbl, rr) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Backup", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bk']]]

Clazz.newMeth(C$, 'c$$I', function (ii) {
Clazz.super_(C$, this);
this.bk=ii;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "(?" + (this.bk < 0 ? ">" + (-this.bk) : "<" + this.bk) + ")" + this.nextString$() ;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos < this.bk) {
return -1;
}return this.nextMatch$I$com_stevesoft_pat_Pthings(pos - this.bk, pt);
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[-this.bk]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[-this.bk]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$I,[this.bk]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer','com.stevesoft.pat.patInt','com.stevesoft.pat.patInf','Error','jalview.util.MessageManager']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Pattern");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.next=null;
this.parent=null;
this.mfrom=0;
},1);

C$.$fields$=[['I',['mfrom'],'O',['next','com.stevesoft.pat.Pattern','+parent']]]

Clazz.newMeth(C$, 'getNext$', function () {
return this.next != null  ? this.next : (this.parent == null  ? null : this.parent.getNext$());
});

Clazz.newMeth(C$, 'setParent$com_stevesoft_pat_Pattern', function (p) {
if (this.next != null ) {
this.next.setParent$com_stevesoft_pat_Pattern(p);
} else {
this.parent=p;
}});

Clazz.newMeth(C$, 'nextMatch$I$com_stevesoft_pat_Pthings', function (i, pt) {
var p=this.getNext$();
return p == null  ? i : p.matchInternal$I$com_stevesoft_pat_Pthings(i, pt);
});

Clazz.newMeth(C$, 'nextString$', function () {
if (this.next == null ) {
return "";
}return this.next.toString();
});

Clazz.newMeth(C$, 'inString$C$S', function (c, s) {
var i;
for (i=0; i < s.length$(); i++) {
if (s.charAt$I(i) == c) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'protect$S$S$C', function (s, PROTECT_THESE, esc) {
var i;
var sb=Clazz.new_($I$(1,1));
var p=PROTECT_THESE + esc;
for (i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
if (C$.inString$C$S(c, p)) {
sb.append$C(esc);
}sb.append$C(c);
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'match$com_stevesoft_pat_StringLike$com_stevesoft_pat_Pthings', function (s, pt) {
return this.matchAt$com_stevesoft_pat_StringLike$I$com_stevesoft_pat_Pthings(s, 0, pt);
});

Clazz.newMeth(C$, 'matchAt$com_stevesoft_pat_StringLike$I$com_stevesoft_pat_Pthings', function (s, i, pt) {
pt.src=s;
var r=this.matchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (r < 0) {
return -1;
}this.mfrom=r < i ? r + 1 : i;
return r < i ? i - r - 1  : r - i;
});

Clazz.newMeth(C$, 'Masked$I$com_stevesoft_pat_Pthings', function (i, pt) {
return pt.cbits == null  ? false : pt.cbits.get$I(i);
});

Clazz.newMeth(C$, 'add$com_stevesoft_pat_Pattern', function (p) {
if (this.next == null ) {
if (p == null ) {
return this;
}this.next=p;
p.parent=this.parent;
this.parent=null;
} else {
this.next.add$com_stevesoft_pat_Pattern(p);
}return this;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(2,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'countMinChars$', function () {
var p=this;
var sum=Clazz.new_($I$(2,1).c$$I,[0]);
while (p != null ){
sum.pluseq$com_stevesoft_pat_patInt(p.minChars$());
p=p.next;
}
return sum;
});

Clazz.newMeth(C$, 'countMaxChars$', function () {
var p=this;
var sum=Clazz.new_($I$(2,1).c$$I,[0]);
while (p != null ){
sum.pluseq$com_stevesoft_pat_patInt(p.maxChars$());
p=p.next;
}
return sum;
});

Clazz.newMeth(C$, 'testMatch$com_stevesoft_pat_Pattern$I$com_stevesoft_pat_Pthings', function (p, pos, pt) {
var tab=null;
if (pt.marks != null ) {
try {
tab=Clazz.array(Integer.TYPE, [pt.marks.length]);
for (var i=0; i < tab.length; i++) {
tab[i]=pt.marks[i];
}
} catch (t) {
}
}var ret=p.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
if (ret < 0) {
pt.marks=tab;
}return ret;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
throw Clazz.new_([$I$(5,"formatMessage$S$SA",["error.no_such_method_as_clone1_for", Clazz.array(String, -1, [this.getClass$().getName$()])])],$I$(4,1).c$$S);
});

Clazz.newMeth(C$, 'clone$java_util_Hashtable', function (h) {
var p=h.get$O(this);
if (p != null ) {
return p;
}p=this.clone1$java_util_Hashtable(h);
if (p == null ) {
throw Clazz.new_([$I$(5).getString$S("error.null_from_clone1")],$I$(4,1).c$$S);
}h.put$O$O(this, p);
h.put$O$O(p, p);
if (this.next != null ) {
p.next=this.next.clone$java_util_Hashtable(h);
}if (this.parent != null ) {
p.parent=this.parent.clone$java_util_Hashtable(h);
}return p;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return o === this ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "End", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['retIsEnd']]]

Clazz.newMeth(C$, 'c$$Z', function (b) {
Clazz.super_(C$, this);
this.retIsEnd=b;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (this.retIsEnd && pt.mFlag && pos < pt.src.length$()  ) {
if (pt.src.charAt$I(pos) == "\n") {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}}if (pt.src.length$() == pos) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
} else if (pos < pt.src.length$()) {
pt.src.charAt$I(pos);
}return -1;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.retIsEnd) {
return "$";
} else {
return "\\Z";
}});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$Z,[this.retIsEnd]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RegSyntax", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (msg) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FastChar", null, 'com.stevesoft.pat.oneChar');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$C', function (c) {
;C$.superclazz.c$$C.apply(this,[c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (p, pt) {
return (p < pt.src.length$() && pt.src.charAt$I(p) == this.c ) ? this.nextMatch$I$com_stevesoft_pat_Pthings(p + 1, pt) : -1;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$C,[this.c]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Group", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['op','cl']]]

Clazz.newMeth(C$, 'c$$C$C', function (opi, cli) {
Clazz.super_(C$, this);
this.op=opi;
this.cl=cli;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var i;
var count=1;
if (pos < pt.src.length$()) {
if (!this.Masked$I$com_stevesoft_pat_Pthings(pos, pt) && pt.src.charAt$I(pos) != this.op ) {
return -1;
}}for (i=pos + 1; i < pt.src.length$(); i++) {
var c=pt.src.charAt$I(i);
var b=!this.Masked$I$com_stevesoft_pat_Pthings(i, pt);
if (b && c == "\\" ) {
i++;
} else {
if (b && c == this.cl ) {
count--;
}if (count == 0) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(i + 1, pt);
}if (b && c == this.op ) {
count++;
}}}
return -1;
});

Clazz.newMeth(C$, 'toString', function () {
return "(?@" + this.op + this.cl + ")" + this.nextString$() ;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[2]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$C$C,[this.op, this.cl]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LeftRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
sb.append$S(res.left$());
});

Clazz.newMeth(C$, 'toString1$', function () {
return "$`";
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr','StringBuffer','com.stevesoft.pat.SkipBMH','com.stevesoft.pat.Skip2','com.stevesoft.pat.Skipped']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Skip");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['ign','m1'],'I',['c','mask','offset'],'S',['src']]]

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
;C$.$init$.apply(this);
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
if (this.m1 || $I$(1,"regionMatches$com_stevesoft_pat_StringLike$Z$I$S$I$I",[s, this.ign, i, this.src, 0, this.src.length$()]) ) {
return i - this.offset;
}}}
} else {
for (var i=start; i <= vend; i++) {
if (this.c == (s.charAt$I(i)).$c() ) {
if (this.m1 || $I$(1,"regionMatches$com_stevesoft_pat_StringLike$Z$I$S$I$I",[s, this.ign, i, this.src, 0, this.src.length$()]) ) {
return i - this.offset;
}}}
}return -1;
});

Clazz.newMeth(C$, 'findSkip$com_stevesoft_pat_Regex', function (r) {
return C$.findSkip$com_stevesoft_pat_Pattern$Z$Z(r.thePattern, r.ignoreCase, !r.dontMatchInQuotes);
}, 1);

Clazz.newMeth(C$, 'findSkip$com_stevesoft_pat_Pattern$Z$Z', function (p, ignoreCase, trnc) {
var sb=Clazz.new_($I$(2,1));
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
sk=Clazz.new_($I$(3,1).c$$S$Z$I,[st, ignoreCase, offset]);
} else {
sk=Clazz.new_($I$(4,1).c$$S$Z$I,[st, ignoreCase, offset]);
}if (trnc && st.length$() > 2 ) {
psav.next=Clazz.new_([st.substring$I(1)],$I$(5,1).c$$S);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr','com.stevesoft.pat.Pattern','com.stevesoft.pat.patInt']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "oneChar", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['c','altc','altc2'],'I',['mask']]]

Clazz.newMeth(C$, 'c$$C', function (ci) {
Clazz.super_(C$, this);
this.c=ci;
var cu;
var cl;
var ct;
cu=$I$(1).toUpperCase$C(this.c);
cl=$I$(1).toLowerCase$C(this.c);
ct=$I$(1).toTitleCase$C(this.c);
if (this.c == cu) {
this.altc=cl;
this.altc2=ct;
} else if (this.c == cl) {
this.altc=cu;
this.altc2=ct;
} else {
this.altc=cl;
this.altc2=cu;
}this.mask=this.c.$c() & this.altc.$c() & this.altc2.$c() ;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var p;
var ret=-1;
if (pos < pt.src.length$() && !this.Masked$I$com_stevesoft_pat_Pthings(pos, pt)  && ((p=pt.src.charAt$I(pos)) == this.c || (pt.ignoreCase && (p == this.altc || p == this.altc2 ) ) ) ) {
ret=this.nextMatch$I$com_stevesoft_pat_Pthings(pos + 1, pt);
}return ret;
});

Clazz.newMeth(C$, 'toString', function () {
return $I$(2,"protect$S$S$C",["" + this.c, "[]{}(),$,-\"^.", "\\"]) + this.nextString$();
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(3,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(3,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$C,[this.c]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ChangeRule", null, 'com.stevesoft.pat.SpecialRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['NewRule','com.stevesoft.pat.Regex']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_ChangeRule', function (c) {
Clazz.super_(C$, this);
this.NewRule=c.NewRule;
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_Regex', function (nm, rr) {
Clazz.super_(C$, this);
this.name=nm;
this.NewRule=rr;
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_Transformer', function (nm, tr) {
Clazz.super_(C$, this);
this.name=nm;
this.NewRule=tr.rp;
}, 1);

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_ChangeRule,[this]);
});

Clazz.newMeth(C$, 'toString1$', function () {
return "${=" + this.name + "}" ;
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, rr) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RBuffer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.done=false;
},1);

C$.$fields$=[['Z',['done'],'I',['pos','epos'],'O',['sb','StringBuffer','next','com.stevesoft.pat.RBuffer']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$StringBuffer', function (sb) {
;C$.$init$.apply(this);
this.sb=sb;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "sb=" + this.sb.toString().replace$C$C("\n", " ") + " pos=" + this.pos + " epos=" + this.epos + " sb.length()=" + this.sb.length$() + "\n" + this.sp$I(this.pos + 3) + "^" + this.sp$I(this.epos - this.pos - 1 ) + "^" ;
});

Clazz.newMeth(C$, 'sp$I', function (n) {
if (n <= 0) {
return "";
}var sb=Clazz.new_($I$(1,1).c$$I,[n]);
for (var i=0; i < n; i++) {
sb.append$C(" ");
}
return sb.toString();
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "BasicStringBufferLike");
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NUnicodeCurrency", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && !$I$(1,"isCurrency$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Vector','com.stevesoft.pat.Regex']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RegexTokenizer", null, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.count=0;
this.v=Clazz.new_($I$(1,1));
this.vi=Clazz.new_($I$(1,1));
this.pos=0;
this.offset=1;
},1);

C$.$fields$=[['I',['count','pos','offset'],'S',['toParse'],'O',['r','com.stevesoft.pat.Regex','v','java.util.Vector','+vi']]]

Clazz.newMeth(C$, 'getMore$', function () {
var s=this.r.right$();
if (this.r.searchFrom$S$I(this.toParse, this.pos)) {
this.v.addElement$O(this.r.left$().substring$I(this.pos));
this.vi.addElement$O(Integer.valueOf$I(this.r.matchFrom$() + this.r.charsMatched$()));
for (var i=0; i < this.r.numSubs$(); i++) {
if (this.r.substring$() != null ) {
this.v.addElement$O(this.r.substring$I(i + this.offset));
this.vi.addElement$O(Integer.valueOf$I(this.r.matchFrom$I(i + this.offset) + this.r.charsMatched$I(i + this.offset)));
}}
this.pos=this.r.matchFrom$() + this.r.charsMatched$();
} else if (s != null ) {
this.v.addElement$O(s);
}});

Clazz.newMeth(C$, 'c$$S$S', function (txt, ptrn) {
;C$.$init$.apply(this);
this.toParse=txt;
this.r=Clazz.new_($I$(2,1).c$$S,[ptrn]);
this.offset=$I$(2).BackRefOffset;
this.getMore$();
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_Regex', function (txt, r) {
;C$.$init$.apply(this);
this.toParse=txt;
this.r=r;
this.offset=$I$(2).BackRefOffset;
this.getMore$();
}, 1);

Clazz.newMeth(C$, 'nextElement$', function () {
if (this.count >= this.v.size$()) {
this.getMore$();
}return this.v.elementAt$I(this.count++);
});

Clazz.newMeth(C$, 'nextToken$', function () {
return this.nextElement$();
});

Clazz.newMeth(C$, 'nextToken$S', function (newpat) {
try {
this.r.compile$S(newpat);
} catch (r_) {
if (Clazz.exceptionOf(r_,"com.stevesoft.pat.RegSyntax")){
} else {
throw r_;
}
}
return this.nextToken$com_stevesoft_pat_Regex(this.r);
});

Clazz.newMeth(C$, 'nextToken$com_stevesoft_pat_Regex', function (nr) {
this.r=nr;
if (this.vi.size$() > this.count) {
this.pos=(this.vi.elementAt$I(this.count)).intValue$();
this.v.setSize$I(this.count);
this.vi.setSize$I(this.count);
}this.getMore$();
return this.nextToken$();
});

Clazz.newMeth(C$, 'hasMoreElements$', function () {
if (this.count >= this.v.size$()) {
this.getMore$();
}return this.count < this.v.size$();
});

Clazz.newMeth(C$, 'hasMoreTokens$', function () {
return this.hasMoreElements$();
});

Clazz.newMeth(C$, 'countTokens$', function () {
var _count=this.count;
while (this.hasMoreTokens$()){
this.nextToken$();
}
this.count=_count;
return this.v.size$() - this.count;
});

Clazz.newMeth(C$, 'allTokens$', function () {
this.countTokens$();
var ret=Clazz.array(String, [this.v.size$()]);
this.v.copyInto$OA(ret);
return ret;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RegSyntax']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RegSyntaxError", null, 'Error');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['RegSyntaxErrorEnabled']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'endItAll$S', function (s) {
if (C$.RegSyntaxErrorEnabled) {
throw Clazz.new_(C$.c$$S,[s]);
}throw Clazz.new_($I$(1,1).c$$S,[s]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.RegSyntaxErrorEnabled=false;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BadRangeArgs", null, 'com.stevesoft.pat.RegSyntax');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeCurrency", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && $I$(1,"isCurrency$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "lookAhead", null, 'com.stevesoft.pat.Or');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['reverse']]]

Clazz.newMeth(C$, 'c$$Z', function (b) {
Clazz.super_(C$, this);
this.reverse=b;
}, 1);

Clazz.newMeth(C$, 'getNext$', function () {
return null;
});

Clazz.newMeth(C$, 'nextMatch$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var p=C$.superclazz.prototype.getNext$.apply(this, []);
if (p != null ) {
return p.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
} else {
return pos;
}});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (C$.superclazz.prototype.matchInternal$I$com_stevesoft_pat_Pthings.apply(this, [pos, pt]) >= 0) {
if (this.reverse) {
return -1;
} else {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}} else {
if (this.reverse) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
} else {
return -1;
}}});

Clazz.newMeth(C$, 'leftForm$', function () {
if (this.reverse) {
return "(?!";
} else {
return "(?=";
}});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var la=Clazz.new_(C$.c$$Z,[this.reverse]);
h.put$O$O(this, la);
h.put$O$O(la, la);
for (var i=0; i < this.v.size$(); i++) {
la.v.addElement$O((this.v.elementAt$I(i)).clone$java_util_Hashtable(h));
}
return la;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NUnicodeMath", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && !$I$(1,"isMath$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SubMark", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['end_pos','start_pos'],'O',['om','com.stevesoft.pat.OrMark']]]

Clazz.newMeth(C$, 'toString', function () {
return "";
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (i, pt) {
pt.marks[this.om.id + pt.nMarks]=i;
var ret=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ret < 0) {
pt.marks[this.om.id + pt.nMarks]=-1;
}return ret;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.FileRegex']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DirFileRegex", null, 'com.stevesoft.pat.FileRegex');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.dirflag=1;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (fp) {
;C$.superclazz.c$$S.apply(this,[fp]);C$.$init$.apply(this);
this.dirflag=1;
}, 1);

Clazz.newMeth(C$, 'list$S', function (f) {
return $I$(1).list$S$I(f, 1);
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Start", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['retIsStart']]]

Clazz.newMeth(C$, 'c$$Z', function (b) {
Clazz.super_(C$, this);
this.retIsStart=b;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (this.retIsStart && pt.mFlag && pos > 0   && pt.src.charAt$I(pos - 1) == "\n" ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}if (pos == 0) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}return -1;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.retIsStart) {
return "^" + this.nextString$();
} else {
return "\\A" + this.nextString$();
}});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$Z,[this.retIsStart]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt','com.stevesoft.pat.patInf']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Validator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.argsave=null;
this.pattern=".";
},1);

C$.$fields$=[['S',['argsave','pattern']]]

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (src, start, end) {
return end;
});

Clazz.newMeth(C$, 'arg$S', function (s) {
return null;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PatternSub", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sub','com.stevesoft.pat.Pattern']]]

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CustomEndpoint", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['c','com.stevesoft.pat.Custom']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Custom', function (cm) {
Clazz.super_(C$, this);
this.c=cm;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var npos=this.c.v.validate$com_stevesoft_pat_StringLike$I$I(pt.src, this.c.start, pos);
if (npos >= 0) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(npos, pt);
}return -1;
});

Clazz.newMeth(C$, 'toString', function () {
return "";
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$com_stevesoft_pat_Custom,[this.c.clone$java_util_Hashtable(h)]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RegHolder','com.stevesoft.pat.wrap.StringWrap','jalview.util.MessageManager','com.stevesoft.pat.StringBufferLike']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Replacer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rh=Clazz.new_($I$(1,1));
this.sb=null;
this.src=null;
this.pos=0;
this.want_more_text=false;
this.want_more_text_enable=false;
this.lastMatchedTo=0;
},1);

C$.$fields$=[['Z',['first','want_more_text','want_more_text_enable'],'I',['pos','lastMatchedTo'],'O',['rh','com.stevesoft.pat.RegHolder','sb','com.stevesoft.pat.StringBufferLike','src','com.stevesoft.pat.StringLike']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'replaceFirstRegion$S$com_stevesoft_pat_Regex$I$I', function (s, r, start, end) {
return this.replaceFirstRegion$com_stevesoft_pat_StringLike$com_stevesoft_pat_Regex$I$I(Clazz.new_($I$(2,1).c$$S,[s]), r, start, end);
});

Clazz.newMeth(C$, 'replaceFirstRegion$com_stevesoft_pat_StringLike$com_stevesoft_pat_Regex$I$I', function (s, r, start, end) {
this.first=true;
this.rh.me=r;
this.rh.prev=null;
return this.dorep$com_stevesoft_pat_StringLike$I$I(s, start, end);
});

Clazz.newMeth(C$, 'replaceFirst$com_stevesoft_pat_StringLike', function (s) {
return this.replaceFirstRegion$com_stevesoft_pat_StringLike$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'replaceFirstFrom$com_stevesoft_pat_StringLike$I', function (s, start) {
return this.replaceFirstRegion$com_stevesoft_pat_StringLike$I$I(s, start, s.length$());
});

Clazz.newMeth(C$, 'replaceFirstRegion$com_stevesoft_pat_StringLike$I$I', function (s, start, end) {
this.first=true;
return this.dorep$com_stevesoft_pat_StringLike$I$I(s, start, end);
});

Clazz.newMeth(C$, 'replaceAllRegion$S$com_stevesoft_pat_Regex$I$I', function (s, r, start, end) {
return this.replaceAllRegion$com_stevesoft_pat_StringLike$com_stevesoft_pat_Regex$I$I(Clazz.new_($I$(2,1).c$$S,[s]), r, start, end);
});

Clazz.newMeth(C$, 'replaceAllRegion$com_stevesoft_pat_StringLike$com_stevesoft_pat_Regex$I$I', function (s, r, start, end) {
this.first=false;
this.rh.me=r;
this.rh.prev=null;
return this.dorep$com_stevesoft_pat_StringLike$I$I(s, start, end);
});

Clazz.newMeth(C$, 'replaceAll$com_stevesoft_pat_StringLike', function (s) {
return this.replaceAllRegion$com_stevesoft_pat_StringLike$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'replaceAllFrom$com_stevesoft_pat_StringLike$I', function (s, start) {
return this.replaceAllRegion$com_stevesoft_pat_StringLike$I$I(s, start, s.length$());
});

Clazz.newMeth(C$, 'replaceAllRegion$com_stevesoft_pat_StringLike$I$I', function (s, start, end) {
this.first=false;
return this.dorep$com_stevesoft_pat_StringLike$I$I(s, start, end);
});

Clazz.newMeth(C$, 'replaceAll$S', function (s) {
return this.replaceAllRegion$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(2,1).c$$S,[s]), 0, s.length$()).toString();
});

Clazz.newMeth(C$, 'replaceAllFrom$S$I', function (s, start) {
return this.replaceAllRegion$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(2,1).c$$S,[s]), start, s.length$()).toString();
});

Clazz.newMeth(C$, 'replaceAllRegion$S$I$I', function (s, start, end) {
this.first=false;
return this.dorep$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(2,1).c$$S,[s]), start, end).toString();
});

Clazz.newMeth(C$, 'isSpecial$com_stevesoft_pat_ReplaceRule', function (x) {
while (x != null ){
if (Clazz.instanceOf(x, "com.stevesoft.pat.SpecialRule") || (Clazz.instanceOf(x, "com.stevesoft.pat.RuleHolder") && Clazz.instanceOf((x).held, "com.stevesoft.pat.SpecialRule") ) ) {
return true;
}x=x.next;
}
return false;
});

Clazz.newMeth(C$, 'apply1$com_stevesoft_pat_RegRes', function (rr) {
rr.charsMatched_++;
this.apply$com_stevesoft_pat_RegRes$com_stevesoft_pat_ReplaceRule(rr, null);
rr.charsMatched_--;
});

Clazz.newMeth(C$, 'dorep$com_stevesoft_pat_StringLike$I$I', function (s, start, end) {
var ret=s;
this.want_more_text=false;
this.lastMatchedTo=0;
if (this.rh.me == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(3).getString$S("exception.replace_null_regex_pointer")]);
}if (this.rh.me._search$com_stevesoft_pat_StringLike$I$I(s, start, end)) {
var rmn=this.rh.me.matchedTo$();
if (this.rh.me.charsMatched$() == 0 && !this.isSpecial$com_stevesoft_pat_ReplaceRule(this.rh.me.getReplaceRule$()) ) {
this.apply1$com_stevesoft_pat_RegRes(this.rh.me);
rmn++;
}this.apply$com_stevesoft_pat_Regex(this.rh.me);
if (!this.first) {
for (var i=rmn; !this.want_more_text && this.rh.me._search$com_stevesoft_pat_StringLike$I$I(s, i, end) ; i=rmn) {
rmn=this.rh.me.matchedTo$();
if (this.rh.me.charsMatched$() == 0) {
if (!this.isSpecial$com_stevesoft_pat_ReplaceRule(this.rh.me.getReplaceRule$())) {
this.apply1$com_stevesoft_pat_RegRes(this.rh.me);
}rmn++;
}this.apply$com_stevesoft_pat_Regex(this.rh.me);
}
}ret=this.finish$();
ret=ret == null  ? s : ret;
}return ret;
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_RegRes$com_stevesoft_pat_ReplaceRule', function (r, rp) {
if (rp == null  || (rp.next == null  && Clazz.instanceOf(rp, "com.stevesoft.pat.AmpersandRule") ) ) {
return;
}if (r.didMatch$()) {
if (this.src == null ) {
this.src=r.getStringLike$();
}if (this.sb == null ) {
this.sb=Clazz.new_([this.src.newStringBufferLike$()],$I$(4,1).c$$com_stevesoft_pat_BasicStringBufferLike);
}var rmf=r.matchedFrom$();
for (var ii=this.pos; ii < rmf; ii++) {
this.sb.append$C(this.src.charAt$I(ii));
}
for (var x=rp; x != null ; x=x.next) {
x.apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes(this.sb, r);
if (Clazz.instanceOf(x, "com.stevesoft.pat.SpecialRule")) {
if (Clazz.instanceOf(x, "com.stevesoft.pat.WantMoreTextReplaceRule") && this.want_more_text_enable ) {
this.want_more_text=true;
} else if (Clazz.instanceOf(x, "com.stevesoft.pat.PushRule")) {
var rh2=Clazz.new_($I$(1,1));
rh2.me=(x).NewRule;
rh2.prev=this.rh;
this.rh=rh2;
} else if (Clazz.instanceOf(x, "com.stevesoft.pat.PopRule")) {
if (this.rh.prev != null ) {
this.rh=this.rh.prev;
}} else if (Clazz.instanceOf(x, "com.stevesoft.pat.ChangeRule")) {
this.rh.me=(x).NewRule;
}}}
if (!this.want_more_text) {
this.pos=r.matchedTo$();
}}});

Clazz.newMeth(C$, 'WantMoreText$', function () {
return this.want_more_text;
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_Regex', function (r) {
this.apply$com_stevesoft_pat_RegRes$com_stevesoft_pat_ReplaceRule(r, r.getReplaceRule$());
});

Clazz.newMeth(C$, 'finish$', function () {
if (this.src == null ) {
return null;
}var s_end=this.src.length$();
for (var ii=this.pos; ii < s_end; ii++) {
this.sb.append$C(this.src.charAt$I(ii));
}
this.src=null;
this.lastMatchedTo=this.pos;
this.pos=0;
var retstr=this.sb.toStringLike$();
this.sb=null;
return retstr;
});

Clazz.newMeth(C$, 'clone$', function () {
var r=Clazz.new_(C$);
r.first=this.first;
r.src=this.src;
r.sb=this.sb;
r.pos=this.pos;
r.lastMatchedTo=this.lastMatchedTo;
r.want_more_text=this.want_more_text;
r.want_more_text_enable=this.want_more_text_enable;
r.rh.me=this.rh.me;
r.rh.prev=this.rh.prev;
return r;
});

Clazz.newMeth(C$, 'lastMatchedTo$', function () {
return this.lastMatchedTo;
});

Clazz.newMeth(C$, 'getRegex$', function () {
return this.rh.me;
});

Clazz.newMeth(C$, 'setSource$com_stevesoft_pat_StringLike', function (sl) {
this.src=sl;
});

Clazz.newMeth(C$, 'setBuffer$com_stevesoft_pat_StringBufferLike', function (sbl) {
this.sb=sbl;
});

Clazz.newMeth(C$, 'setPos$I', function (pos) {
this.pos=pos;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PopRule", null, 'com.stevesoft.pat.SpecialRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'toString1$', function () {
return "${POP}";
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MultiMin", null, 'com.stevesoft.pat.Multi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern', function (i1, i2, p) {
;C$.superclazz.c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern.apply(this,[i1, i2, p]);C$.$init$.apply(this);
this.matchFewest=true;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RightRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
sb.append$S(res.right$());
});

Clazz.newMeth(C$, 'toString1$', function () {
return "$\'";
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BackMatch", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id']]]

Clazz.newMeth(C$, 'c$$I', function (id) {
Clazz.super_(C$, this);
this.id=id;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "\\" + (this.id) + this.nextString$() ;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, p) {
var i1=p.marks[this.id];
var i2=p.marks[this.id + p.nMarks];
var imax=i2 - i1;
if (i1 < 0 || imax < 0  || pos + imax > p.src.length$() ) {
return -1;
}var ns=p.src.length$() - pos;
if (imax < ns) {
ns=imax;
}for (var i=0; i < ns; i++) {
if (p.src.charAt$I(i + i1) != p.src.charAt$I(pos + i)) {
return -1;
}}
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + imax, p);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$I,[this.id]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RuleHolder", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.held=null;
},1);

C$.$fields$=[['O',['held','com.stevesoft.pat.ReplaceRule']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_ReplaceRule', function (h) {
Clazz.super_(C$, this);
this.held=h;
}, 1);

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_ReplaceRule,[this.held]);
});

Clazz.newMeth(C$, 'toString1$', function () {
return this.held.toString1$();
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, rr) {
this.held.apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes(sb, rr);
});

Clazz.newMeth(C$, 'arg$S', function (s) {
return Clazz.new_(C$.c$$com_stevesoft_pat_ReplaceRule,[this.held.arg$S(s)]);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Multi_stage2']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Multi", null, 'com.stevesoft.pat.PatternSub');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.matchFewest=false;
},1);

C$.$fields$=[['Z',['matchFewest'],'O',['a','com.stevesoft.pat.patInt','+b','p','com.stevesoft.pat.Pattern','st2','com.stevesoft.pat.Multi_stage2']]]

Clazz.newMeth(C$, 'minChars$', function () {
return this.a.mul$com_stevesoft_pat_patInt(this.p.countMinChars$());
});

Clazz.newMeth(C$, 'maxChars$', function () {
return this.b.mul$com_stevesoft_pat_patInt(this.p.countMaxChars$());
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern', function (a, b, p) {
Clazz.super_(C$, this);
this.a=a;
this.b=b;
this.p=p;
this.st2=Clazz.new_($I$(1,1).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[a, b, p]);
this.st2.parent=this;
this.sub=this.st2.sub;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
this.st2.matchFewest=this.matchFewest;
return this.st2.toString();
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
try {
this.st2=Clazz.new_($I$(1,1).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[this.a, this.b, this.p]);
} catch (r__) {
if (Clazz.exceptionOf(r__,"com.stevesoft.pat.RegSyntax")){
} else {
throw r__;
}
}
this.st2.matchFewest=this.matchFewest;
this.st2.parent=this;
return this.st2.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
try {
var m=Clazz.new_(C$.c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[this.a, this.b, (this.p).clone$java_util_Hashtable(h)]);
m.matchFewest=this.matchFewest;
return m;
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
return null;
} else {
throw rs;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NUnicodeAlpha", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && !$I$(1,"isAlphabetic$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NullRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
});

Clazz.newMeth(C$, 'toString1$', function () {
return "";
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Vector','StringBuffer','com.stevesoft.pat.Pattern','com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Or", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pv=null;
},1);

C$.$fields$=[['O',['v','java.util.Vector','pv','com.stevesoft.pat.Pattern[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.v=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'leftForm$', function () {
return "(?:";
});

Clazz.newMeth(C$, 'rightForm$', function () {
return ")";
});

Clazz.newMeth(C$, 'sepForm$', function () {
return "|";
});

Clazz.newMeth(C$, 'addOr$com_stevesoft_pat_Pattern', function (p) {
this.pv=null;
this.v.addElement$O(p);
p.setParent$com_stevesoft_pat_Pattern(this);
return this;
});

Clazz.newMeth(C$, 'toString', function () {
var i;
var sb=Clazz.new_($I$(2,1));
sb.append$S(this.leftForm$());
if (this.v.size$() > 0) {
sb.append$S((this.v.elementAt$I(0)).toString());
}for (i=1; i < this.v.size$(); i++) {
sb.append$S(this.sepForm$());
sb.append$S((this.v.elementAt$I(i)).toString());
}
sb.append$S(this.rightForm$());
sb.append$S(this.nextString$());
return sb.toString();
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (this.pv == null ) {
this.pv=Clazz.array($I$(3), [this.v.size$()]);
this.v.copyInto$OA(this.pv);
}for (var i=0; i < this.v.size$(); i++) {
var p=this.pv[i];
var r=p.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
if (r >= 0) {
return r;
}}
return -1;
});

Clazz.newMeth(C$, 'minChars$', function () {
if (this.v.size$() == 0) {
return Clazz.new_($I$(4,1).c$$I,[0]);
}var m=(this.v.elementAt$I(0)).countMinChars$();
for (var i=1; i < this.v.size$(); i++) {
var p=this.v.elementAt$I(i);
m.mineq$com_stevesoft_pat_patInt(p.countMinChars$());
}
return m;
});

Clazz.newMeth(C$, 'maxChars$', function () {
if (this.v.size$() == 0) {
return Clazz.new_($I$(4,1).c$$I,[0]);
}var m=(this.v.elementAt$I(0)).countMaxChars$();
for (var i=1; i < this.v.size$(); i++) {
var p=this.v.elementAt$I(i);
m.maxeq$com_stevesoft_pat_patInt(p.countMaxChars$());
}
return m;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var o=Clazz.new_(C$);
h.put$O$O(this, o);
h.put$O$O(o, o);
for (var i=0; i < this.v.size$(); i++) {
o.v.addElement$O((this.v.elementAt$I(i)).clone$java_util_Hashtable(h));
}
return o;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeWhite", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && $I$(1,"isWhite$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Prop','com.stevesoft.pat.Regex','com.stevesoft.pat.StringRule','com.stevesoft.pat.ReplaceRule']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "parsePerl");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'close$C', function (c) {
if (c == "<") {
return ">";
}if (c == "[") {
return "]";
}if (c == "(") {
return ")";
}if (c == "{") {
return "}";
}return c;
}, 1);

Clazz.newMeth(C$, 'codify$S$Z', function (s, keepbs) {
return C$.codify$S$I$I$Z(s, 0, s.length$(), keepbs);
}, 1);

Clazz.newMeth(C$, 'codify$S$I$I$Z', function (s, i0, iN, keepbs) {
var sb=Clazz.new_($I$(1,1));
var ucmode=false;
var lcmode=false;
var litmode=false;
var uc1=false;
var lc1=false;
var modified=false;
for (var i=i0; i < iN; i++) {
var c=s.charAt$I(i);
var mf=true;
var app=true;
if (c == "\\") {
app=false;
i++;
if (i < s.length$()) {
var c2=s.charAt$I(i);
switch (c2.$c()) {
case 81:
litmode=true;
break;
case 85:
ucmode=true;
break;
case 76:
lcmode=true;
break;
case 117:
uc1=true;
break;
case 108:
lc1=true;
break;
case 69:
uc1=lc1=ucmode=lcmode=litmode=false;
break;
default:
if (keepbs) {
sb.append$C("\\");
}c=c2;
if (keepbs) {
mf=false;
}app=true;
break;
}
modified|=mf;
}}if (app) {
if (lc1) {
c=C$.lc$C(c);
lc1=false;
} else if (uc1) {
c=C$.uc$C(c);
uc1=false;
} else if (ucmode) {
c=C$.uc$C(c);
} else if (lcmode) {
c=C$.lc$C(c);
}if (litmode && C$.needbs$C(c) ) {
sb.append$C("\\");
}sb.append$C(c);
}}
return modified ? sb.toString() : s;
}, 1);

Clazz.newMeth(C$, 'uc$C', function (c) {
return $I$(2).toUpperCase$C(c);
}, 1);

Clazz.newMeth(C$, 'lc$C', function (c) {
return $I$(2).toLowerCase$C(c);
}, 1);

Clazz.newMeth(C$, 'needbs$C', function (c) {
if (c >= "a" && c <= "z" ) {
return false;
}if (c >= "A" && c <= "Z" ) {
return false;
}if (c >= "0" && c <= "9" ) {
return false;
}if (c == "_") {
return false;
}return true;
}, 1);

Clazz.newMeth(C$, 'parse$S', function (s) {
var igncase=false;
var optim=false;
var gFlag=false;
var sFlag=false;
var mFlag=false;
var xFlag=false;
var s1=Clazz.new_($I$(1,1));
var s2=Clazz.new_($I$(1,1));
var i=0;
var count=0;
var mode;
var delim="/";
var cdelim="/";
if (s.length$() >= 3 && s.charAt$I(0) == "s" ) {
mode="s";
delim=s.charAt$I(1);
cdelim=C$.close$C(delim);
i=2;
} else if (s.length$() >= 2 && s.charAt$I(0) == "m" ) {
mode="m";
delim=s.charAt$I(1);
cdelim=C$.close$C(delim);
i=2;
} else if (s.length$() >= 1 && s.charAt$I(0) == "/" ) {
mode="m";
i=1;
} else {
try {
$I$(3).endItAll$S("Regex.perlCode should be of the form s/// or m// or //");
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
} else {
throw rs;
}
}
return null;
}for (; i < s.length$(); i++) {
if (s.charAt$I(i) == "\\") {
s1.append$C("\\");
i++;
} else if (s.charAt$I(i) == cdelim && count == 0 ) {
i++;
break;
} else if (s.charAt$I(i) == delim && cdelim != delim ) {
count++;
} else if (s.charAt$I(i) == cdelim && cdelim != delim ) {
count--;
}s1.append$C(s.charAt$I(i));
}
if (mode == "s" && cdelim != delim ) {
while (i < s.length$() && $I$(4,"isWhite$C",[s.charAt$I(i)]) ){
i++;
}
if (i >= s.length$()) {
try {
$I$(3).endItAll$S("" + mode + delim + " needs " + cdelim );
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
} else {
throw rs;
}
}
return null;
}cdelim=C$.close$C(delim=s.charAt$I(i));
i++;
}count=0;
if (mode == "s") {
for (; i < s.length$(); i++) {
if (s.charAt$I(i) == "\\") {
s2.append$C("\\");
i++;
} else if (s.charAt$I(i) == cdelim && count == 0 ) {
i++;
break;
} else if (s.charAt$I(i) == delim && cdelim != delim ) {
count++;
} else if (s.charAt$I(i) == cdelim && cdelim != delim ) {
count--;
}s2.append$C(s.charAt$I(i));
}
}for (; i < s.length$(); i++) {
var c=s.charAt$I(i);
switch (c.$c()) {
case 120:
xFlag=true;
break;
case 105:
igncase=true;
break;
case 111:
optim=true;
break;
case 115:
sFlag=true;
break;
case 109:
mFlag=true;
break;
case 103:
gFlag=true;
break;
default:
try {
$I$(3).endItAll$S("Illegal flag to pattern: " + c);
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
} else {
throw rs;
}
}
return null;
}
}
var r=Clazz.new_($I$(5,1));
try {
var pat=s1.toString();
var reprul=s2.toString();
if (xFlag) {
pat=C$.strip$S(pat);
reprul=C$.strip$S(reprul);
}r.compile$S(pat);
r.ignoreCase|=igncase;
r.gFlag|=gFlag;
r.sFlag|=sFlag;
r.mFlag|=mFlag;
if (optim) {
r.optimize$();
}if (delim == "\'") {
r.setReplaceRule$com_stevesoft_pat_ReplaceRule(Clazz.new_($I$(6,1).c$$S,[reprul]));
} else {
r.setReplaceRule$com_stevesoft_pat_ReplaceRule($I$(7).perlCode$S(reprul));
}} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
r=null;
} else {
throw rs;
}
}
return r;
}, 1);

Clazz.newMeth(C$, 'strip$S', function (s) {
var sb=Clazz.new_($I$(1,1));
for (var i=0; i < s.length$(); i++) {
var c=s.charAt$I(i);
if ($I$(4).isWhite$C(c)) {
;} else if (c == "#") {
i++;
while (i < s.length$()){
if (s.charAt$I(i) == "\n") {
break;
}i++;
}
} else if (c == "\\") {
sb.append$C(c);
sb.append$C(s.charAt$I(++i));
} else {
sb.append$C(c);
}}
return sb.toString();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BackRefRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['n']]]

Clazz.newMeth(C$, 'c$$I', function (n) {
Clazz.super_(C$, this);
this.n=n;
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
var x=res.stringMatched$I(this.n);
sb.append$S(x == null  ? "" : x);
});

Clazz.newMeth(C$, 'toString1$', function () {
return "$" + this.n;
});

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$I,[this.n]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AmpersandRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
sb.append$S(res.stringMatched$());
});

Clazz.newMeth(C$, 'toString1$', function () {
return "$&";
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:38 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Bits");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['carray','char[]']]
,['O',['upper','com.stevesoft.pat.Bits','+lower','+title','+currency','+decimal_digit','+math','+letter','+white','+punct']]]

Clazz.newMeth(C$, 'c$$CA', function (carray) {
;C$.$init$.apply(this);
this.carray=carray;
}, 1);

Clazz.newMeth(C$, 'get$I', function (i) {
return (((this.carray[i >> 4]).$c()) & (1 << (i & 15))) != 0;
});

Clazz.newMeth(C$, 'set$I$Z', function (i, b) {
if (b) {
this.carray[$k$=i >> 4] = String.fromCharCode((this.carray[$k$]).$c()| (1 << (i & 15)));
} else {
this.carray[$k$=i >> 4] = String.fromCharCode((this.carray[$k$]).$c()& (String.fromCharCode(~(1 << (i & 15)))));
}});

Clazz.newMeth(C$, 'upper_f$', function () {
var data=Clazz.array(Character.TYPE, [4159]);
C$.upper=Clazz.new_(C$.c$$CA,[data]);
data[4]="\ufffe";
data[5]="\u07ff";
data[12]="\uffff";
data[13]="\u7f7f";
data[16]="\u5555";
data[17]="\u5555";
data[18]="\u5555";
data[19]="\uaa55";
data[20]="\u54aa";
data[21]="\u5555";
data[22]="\u5555";
data[23]="\u2b55";
data[24]="\uced6";
data[25]="\ub1db";
data[26]="\ud2d5";
data[27]="\u11ae";
data[28]="\ua490";
data[29]="\u4aaa";
data[30]="\u5555";
data[31]="\u5412";
data[32]="\u5555";
data[33]="U";
data[56]="\ud740";
data[57]="\ufffe";
data[58]="\u0ffb";
data[61]="\u541c";
data[62]="\u5555";
data[64]="\udffe";
data[65]="\uffff";
data[66]="\uffff";
data[70]="\u5555";
data[71]="\u5555";
data[72]="\u0001";
data[73]="\u5555";
data[74]="\u5555";
data[75]="\u5555";
data[76]="\u088a";
data[77]="\u5555";
data[78]="\u4555";
data[79]="\u0115";
data[83]="\ufffe";
data[84]="\uffff";
data[85]="";
data[266]="\uffff";
data[267]="\uffff";
data[268]="?";
data[480]="\u5555";
data[481]="\u5555";
data[482]="\u5555";
data[483]="\u5555";
data[484]="\u5555";
data[485]="\u5555";
data[486]="\u5555";
data[487]="\u5555";
data[488]="\u5555";
data[489]="\u0015";
data[490]="\u5555";
data[491]="\u5555";
data[492]="\u5555";
data[493]="\u5555";
data[494]="\u5555";
data[495]="\u0155";
data[496]="\uff00";
data[497]="\u3f00";
data[498]="\uff00";
data[499]="\uff00";
data[500]="\u3f00";
data[501]="\uaa00";
data[502]="\uff00";
data[504]="\uff00";
data[505]="\uff00";
data[506]="\uff00";
data[507]="\u5f00";
data[508]="\u1f00";
data[509]="\u0f00";
data[510]="\u1f00";
data[511]="\u1f00";
data[528]="\u3884";
data[529]="\u3f27";
data[530]="\u3d50";
data[531]="\u000b";
data[4082]="\ufffe";
data[4083]="\u07ff";
data[4100]="\ufffe";
data[4101]="\u07ff";
data[4108]="\uffff";
data[4109]="\u7f7f";
data[4112]="\u5555";
data[4113]="\u5555";
data[4114]="\u5555";
data[4115]="\uaa55";
data[4116]="\u54aa";
data[4117]="\u5555";
data[4118]="\u5555";
data[4119]="\u2b55";
data[4120]="\uced6";
data[4121]="\ub1db";
data[4122]="\ud2d5";
data[4123]="\u11ae";
data[4124]="\ua490";
data[4125]="\u4aaa";
data[4126]="\u5555";
data[4127]="\u5412";
data[4128]="\u5555";
data[4129]="U";
data[4152]="\ud740";
data[4153]="\ufffe";
data[4154]="\u0ffb";
data[4157]="\u541c";
data[4158]="U";
}, 1);

Clazz.newMeth(C$, 'lower_f$', function () {
var data=Clazz.array(Character.TYPE, [4159]);
C$.lower=Clazz.new_(C$.c$$CA,[data]);
data[6]="\ufffe";
data[7]="\u07ff";
data[10]="\u0400";
data[11]="\u0420";
data[13]="\u8000";
data[14]="\uffff";
data[15]="\uff7f";
data[16]="\uaaaa";
data[17]="\uaaaa";
data[18]="\uaaaa";
data[19]="\u55aa";
data[20]="\uab55";
data[21]="\uaaaa";
data[22]="\uaaaa";
data[23]="\ud4aa";
data[24]="\u3129";
data[25]="\u4e24";
data[26]="\u292a";
data[27]="\u2651";
data[28]="\u5240";
data[29]="\ub555";
data[30]="\uaaaa";
data[31]="\ua829";
data[32]="\uaaaa";
data[33]="\u00aa";
data[37]="\uffff";
data[38]="\uffff";
data[39]="\uffff";
data[40]="\uffff";
data[41]="\uffff";
data[42]="\u01ff";
data[57]="\u0001";
data[58]="\uf000";
data[59]="\uffff";
data[60]="\u7fff";
data[61]="c";
data[62]="\uaaa8";
data[63]="\u0007";
data[67]="\uffff";
data[68]="\uffff";
data[69]="\udffe";
data[70]="\uaaaa";
data[71]="\uaaaa";
data[72]="\u0002";
data[73]="\uaaaa";
data[74]="\uaaaa";
data[75]="\uaaaa";
data[76]="\u1114";
data[77]="\uaaaa";
data[78]="\u8aaa";
data[79]="\u022a";
data[86]="\ufffe";
data[87]="\uffff";
data[88]="\u00ff";
data[269]="\uffff";
data[270]="\uffff";
data[271]="";
data[480]="\uaaaa";
data[481]="\uaaaa";
data[482]="\uaaaa";
data[483]="\uaaaa";
data[484]="\uaaaa";
data[485]="\uaaaa";
data[486]="\uaaaa";
data[487]="\uaaaa";
data[488]="\uaaaa";
data[489]="\u0fea";
data[490]="\uaaaa";
data[491]="\uaaaa";
data[492]="\uaaaa";
data[493]="\uaaaa";
data[494]="\uaaaa";
data[495]="\u02aa";
data[496]="\u00ff";
data[497]="?";
data[498]="\u00ff";
data[499]="\u00ff";
data[500]="?";
data[501]="\u00ff";
data[502]="\u00ff";
data[503]="\u3fff";
data[504]="\u00ff";
data[505]="\u00ff";
data[506]="\u00ff";
data[507]="\u00df";
data[508]="\u00dc";
data[509]="\u00cf";
data[510]="\u00ff";
data[511]="\u00dc";
data[519]="\u8000";
data[528]="\uc400";
data[529]="\u0008";
data[530]="\uc000";
data[531]="\u0010";
data[4016]="";
data[4017]="\u00f8";
data[4084]="\ufffe";
data[4085]="\u07ff";
data[4102]="\ufffe";
data[4103]="\u07ff";
data[4106]="\u0400";
data[4107]="\u0420";
data[4109]="\u8000";
data[4110]="\uffff";
data[4111]="\uff7f";
data[4112]="\uaaaa";
data[4113]="\uaaaa";
data[4114]="\uaaaa";
data[4115]="\u55aa";
data[4116]="\uab55";
data[4117]="\uaaaa";
data[4118]="\uaaaa";
data[4119]="\ud4aa";
data[4120]="\u3129";
data[4121]="\u4e24";
data[4122]="\u292a";
data[4123]="\u2651";
data[4124]="\u5240";
data[4125]="\ub555";
data[4126]="\uaaaa";
data[4127]="\ua829";
data[4128]="\uaaaa";
data[4129]="\u00aa";
data[4133]="\uffff";
data[4134]="\uffff";
data[4135]="\uffff";
data[4136]="\uffff";
data[4137]="\uffff";
data[4138]="\u01ff";
data[4153]="\u0001";
data[4154]="\uf000";
data[4155]="\uffff";
data[4156]="\u7fff";
data[4157]="c";
data[4158]="\u00a8";
}, 1);

Clazz.newMeth(C$, 'title_f$', function () {
var data=Clazz.array(Character.TYPE, [4159]);
C$.title=Clazz.new_(C$.c$$CA,[data]);
data[6]="\ufffe";
data[7]="\u07ff";
data[10]="\u0400";
data[11]="\u0420";
data[13]="\u8000";
data[14]="\uffff";
data[15]="\uff7f";
data[16]="\uaaaa";
data[17]="\uaaaa";
data[18]="\uaaaa";
data[19]="\u55aa";
data[20]="\uab55";
data[21]="\uaaaa";
data[22]="\uaaaa";
data[23]="\ud4aa";
data[24]="\u3129";
data[25]="\u4e24";
data[26]="\u292a";
data[27]="\u2651";
data[28]="\u5240";
data[29]="\ub555";
data[30]="\uaaaa";
data[31]="\ua829";
data[32]="\uaaaa";
data[33]="\u00aa";
data[37]="\uffff";
data[38]="\uffff";
data[39]="\uffff";
data[40]="\uffff";
data[41]="\uffff";
data[42]="\u01ff";
data[57]="\u0001";
data[58]="\uf000";
data[59]="\uffff";
data[60]="\u7fff";
data[61]="c";
data[62]="\uaaa8";
data[63]="\u0007";
data[67]="\uffff";
data[68]="\uffff";
data[69]="\udffe";
data[70]="\uaaaa";
data[71]="\uaaaa";
data[72]="\u0002";
data[73]="\uaaaa";
data[74]="\uaaaa";
data[75]="\uaaaa";
data[76]="\u1114";
data[77]="\uaaaa";
data[78]="\u8aaa";
data[79]="\u022a";
data[86]="\ufffe";
data[87]="\uffff";
data[88]="\u00ff";
data[269]="\uffff";
data[270]="\uffff";
data[271]="";
data[480]="\uaaaa";
data[481]="\uaaaa";
data[482]="\uaaaa";
data[483]="\uaaaa";
data[484]="\uaaaa";
data[485]="\uaaaa";
data[486]="\uaaaa";
data[487]="\uaaaa";
data[488]="\uaaaa";
data[489]="\u0fea";
data[490]="\uaaaa";
data[491]="\uaaaa";
data[492]="\uaaaa";
data[493]="\uaaaa";
data[494]="\uaaaa";
data[495]="\u02aa";
data[496]="\u00ff";
data[497]="?";
data[498]="\u00ff";
data[499]="\u00ff";
data[500]="?";
data[501]="\u00ff";
data[502]="\u00ff";
data[503]="\u3fff";
data[504]="\u00ff";
data[505]="\u00ff";
data[506]="\u00ff";
data[507]="\u00df";
data[508]="\u00dc";
data[509]="\u00cf";
data[510]="\u00ff";
data[511]="\u00dc";
data[519]="\u8000";
data[528]="\uc400";
data[529]="\u0008";
data[530]="\uc000";
data[531]="\u0010";
data[4016]="";
data[4017]="\u00f8";
data[4084]="\ufffe";
data[4085]="\u07ff";
data[4102]="\ufffe";
data[4103]="\u07ff";
data[4106]="\u0400";
data[4107]="\u0420";
data[4109]="\u8000";
data[4110]="\uffff";
data[4111]="\uff7f";
data[4112]="\uaaaa";
data[4113]="\uaaaa";
data[4114]="\uaaaa";
data[4115]="\u55aa";
data[4116]="\uab55";
data[4117]="\uaaaa";
data[4118]="\uaaaa";
data[4119]="\ud4aa";
data[4120]="\u3129";
data[4121]="\u4e24";
data[4122]="\u292a";
data[4123]="\u2651";
data[4124]="\u5240";
data[4125]="\ub555";
data[4126]="\uaaaa";
data[4127]="\ua829";
data[4128]="\uaaaa";
data[4129]="\u00aa";
data[4133]="\uffff";
data[4134]="\uffff";
data[4135]="\uffff";
data[4136]="\uffff";
data[4137]="\uffff";
data[4138]="\u01ff";
data[4153]="\u0001";
data[4154]="\uf000";
data[4155]="\uffff";
data[4156]="\u7fff";
data[4157]="c";
data[4158]="\u00a8";
}, 1);

Clazz.newMeth(C$, 'currency_f$', function () {
var data=Clazz.array(Character.TYPE, [4159]);
C$.currency=Clazz.new_(C$.c$$CA,[data]);
data[2]="\u0010";
data[10]="<";
data[159]="\f";
data[227]="\u8000";
data[522]="\u1fff";
data[4070]="\u0200";
data[4080]="\u0010";
data[4094]="c";
data[4098]="\u0010";
data[4106]="<";
}, 1);

Clazz.newMeth(C$, 'decimal_digit_f$', function () {
var data=Clazz.array(Character.TYPE, [4159]);
C$.decimal_digit=Clazz.new_(C$.c$$CA,[data]);
data[3]="\u03ff";
data[102]="\u03ff";
data[111]="\u03ff";
data[150]="\uffc0";
data[158]="\uffc0";
data[166]="\uffc0";
data[174]="\uffc0";
data[182]="\uffc0";
data[190]="\uff80";
data[198]="\uffc0";
data[206]="\uffc0";
data[214]="\uffc0";
data[229]="\u03ff";
data[237]="\u03ff";
data[242]="\u03ff";
data[4081]="\u03ff";
data[4099]="\u03ff";
}, 1);

Clazz.newMeth(C$, 'math_f$', function () {
var data=Clazz.array(Character.TYPE, [4159]);
C$.math=Clazz.new_(C$.c$$CA,[data]);
data[2]="\u0800";
data[3]="\u7000";
data[7]="\u5000";
data[10]="\u1000";
data[11]="\u0002";
data[13]="\u0080";
data[15]="\u0080";
data[516]="\u0010";
data[519]="\u1c00";
data[520]="\u1c00";
data[537]="\u001f";
data[541]="\u0014";
data[544]="\uffff";
data[545]="\uffff";
data[546]="\uffff";
data[547]="\uffff";
data[548]="\uffff";
data[549]="\uffff";
data[550]="\uffff";
data[551]="\uffff";
data[552]="\uffff";
data[553]="\uffff";
data[554]="\uffff";
data[555]="\uffff";
data[556]="\uffff";
data[557]="\uffff";
data[558]="\uffff";
data[559]="\u0003";
data[560]="\u0f00";
data[562]="\u0003";
data[4018]="\u0200";
data[4070]="t";
data[4080]="\u0800";
data[4081]="\u7000";
data[4085]="\u5000";
data[4094]="\u1f04";
data[4098]="\u0800";
data[4099]="\u7000";
data[4103]="\u5000";
data[4106]="\u1000";
data[4107]="\u0002";
data[4109]="\u0080";
data[4111]="\u0080";
}, 1);

Clazz.newMeth(C$, 'letter_f$', function () {
var data=Clazz.array(Character.TYPE, [4159]);
C$.letter=Clazz.new_(C$.c$$CA,[data]);
data[4]="\ufffe";
data[5]="\u07ff";
data[6]="\ufffe";
data[7]="\u07ff";
data[10]="\u0400";
data[11]="\u0420";
data[12]="\uffff";
data[13]="\uff7f";
data[14]="\uffff";
data[15]="\uff7f";
data[16]="\uffff";
data[17]="\uffff";
data[18]="\uffff";
data[19]="\uffff";
data[20]="\uffff";
data[21]="\uffff";
data[22]="\uffff";
data[23]="\uffff";
data[24]="\uffff";
data[25]="\uffff";
data[26]="\uffff";
data[27]="\uffff";
data[28]="\uffff";
data[29]="\uffff";
data[30]="\uffff";
data[31]="\ufc3f";
data[32]="\uffff";
data[33]="\u00ff";
data[37]="\uffff";
data[38]="\uffff";
data[39]="\uffff";
data[40]="\uffff";
data[41]="\uffff";
data[42]="\u01ff";
data[43]="\uf9ff";
data[44]="\u0003";
data[45]="\u0003";
data[46]="\u001f";
data[55]="\u0400";
data[56]="\ud740";
data[57]="\uffff";
data[58]="\ufffb";
data[59]="\uffff";
data[60]="\u7fff";
data[61]="\u547f";
data[62]="\ufffd";
data[63]="\u000f";
data[64]="\udffe";
data[65]="\uffff";
data[66]="\uffff";
data[67]="\uffff";
data[68]="\uffff";
data[69]="\udffe";
data[70]="\uffff";
data[71]="\uffff";
data[72]="\u0003";
data[73]="\uffff";
data[74]="\uffff";
data[75]="\uffff";
data[76]="\u199f";
data[77]="\uffff";
data[78]="\ucfff";
data[79]="\u033f";
data[83]="\ufffe";
data[84]="\uffff";
data[85]="\u027f";
data[86]="\ufffe";
data[87]="\uffff";
data[88]="\u00ff";
data[93]="\uffff";
data[94]="\u07ff";
data[95]="\u0007";
data[98]="\ufffe";
data[99]="\u07ff";
data[100]="\u07ff";
data[103]="\ufffe";
data[104]="\uffff";
data[105]="\uffff";
data[106]="\uffff";
data[107]="\u7cff";
data[108]="\u7fff";
data[109]="/";
data[110]="`";
data[144]="\uffe0";
data[145]="\uffff";
data[146]="\uffff";
data[147]="\u23ff";
data[149]="\uff00";
data[150]="\u0003";
data[152]="\u9fe0";
data[153]="\ufff9";
data[154]="\ufdff";
data[155]="\u03c5";
data[157]="\ub000";
data[158]="\u0003";
data[159]="\u0003";
data[160]="\u87e0";
data[161]="\ufff9";
data[162]="\ufdff";
data[163]="\u036d";
data[165]="\u5e00";
data[167]="\u001c";
data[168]="\uafe0";
data[169]="\ufffb";
data[170]="\ufdff";
data[171]="\u23ed";
data[174]="\u0001";
data[176]="\u9fe0";
data[177]="\ufff9";
data[178]="\ufdff";
data[179]="\u23cd";
data[181]="\ub000";
data[182]="\u0003";
data[184]="\uc7e0";
data[185]="\ud63d";
data[186]="\uc718";
data[187]="\u03bf";
data[192]="\udfe0";
data[193]="\ufffd";
data[194]="\ufdff";
data[195]="\u03ef";
data[198]="\u0003";
data[200]="\udfe0";
data[201]="\ufffd";
data[202]="\ufdff";
data[203]="\u03ef";
data[205]="\u4000";
data[206]="\u0003";
data[208]="\udfe0";
data[209]="\ufffd";
data[210]="\ufdff";
data[211]="\u03ff";
data[214]="\u0003";
data[224]="\ufffe";
data[225]="\uffff";
data[226]="\u7fff";
data[227]="\r";
data[228]="";
data[232]="\u2596";
data[233]="\ufef0";
data[234]="\u6cae";
data[235]="\u200d";
data[236]="_";
data[237]="\u3000";
data[244]="\ufeff";
data[245]="\uffff";
data[246]="\u03ff";
data[266]="\uffff";
data[267]="\uffff";
data[268]="?";
data[269]="\uffff";
data[270]="\uffff";
data[271]="";
data[272]="\uffff";
data[273]="\uffff";
data[274]="\uffff";
data[275]="\uffff";
data[276]="\uffff";
data[277]="\u83ff";
data[278]="\uffff";
data[279]="\uffff";
data[280]="\uffff";
data[281]="\uffff";
data[282]="\uff07";
data[283]="\uffff";
data[284]="\uffff";
data[285]="\uffff";
data[286]="\uffff";
data[287]="\u03ff";
data[480]="\uffff";
data[481]="\uffff";
data[482]="\uffff";
data[483]="\uffff";
data[484]="\uffff";
data[485]="\uffff";
data[486]="\uffff";
data[487]="\uffff";
data[488]="\uffff";
data[489]="\u0fff";
data[490]="\uffff";
data[491]="\uffff";
data[492]="\uffff";
data[493]="\uffff";
data[494]="\uffff";
data[495]="\u03ff";
data[496]="\uffff";
data[497]="\u3f3f";
data[498]="\uffff";
data[499]="\uffff";
data[500]="\u3f3f";
data[501]="\uaaff";
data[502]="\uffff";
data[503]="\u3fff";
data[504]="\uffff";
data[505]="\uffff";
data[506]="\uffff";
data[507]="\u5fdf";
data[508]="\u1fdc";
data[509]="\u0fcf";
data[510]="\u1fff";
data[511]="\u1fdc";
data[519]="\u8000";
data[528]="\ufc84";
data[529]="\u3f2f";
data[530]="\ufd50";
data[531]="\u01fb";
data[768]=" ";
data[771]=">";
data[772]="\ufffe";
data[773]="\uffff";
data[774]="\uffff";
data[775]="\uffff";
data[776]="\uffff";
data[777]="\u781f";
data[778]="\ufffe";
data[779]="\uffff";
data[780]="\uffff";
data[781]="\uffff";
data[782]="\uffff";
data[783]="\u77ff";
data[784]="\uffe0";
data[785]="\uffff";
data[786]="\u1fff";
data[787]="\ufffe";
data[788]="\uffff";
data[789]="\uffff";
data[790]="\uffff";
data[791]="\uffff";
data[792]="\u7fff";
data[1248]="\uffff";
data[1249]="\uffff";
data[1250]="\uffff";
data[1251]="\uffff";
data[1252]="\uffff";
data[1253]="\uffff";
data[1254]="\uffff";
data[1255]="\uffff";
data[1256]="\uffff";
data[1257]="\uffff";
data[1258]="\uffff";
data[1259]="\uffff";
data[1260]="\uffff";
data[1261]="\uffff";
data[1262]="\uffff";
data[1263]="\uffff";
data[1264]="\uffff";
data[1265]="\uffff";
data[1266]="\uffff";
data[1267]="\uffff";
data[1268]="\uffff";
data[1269]="\uffff";
data[1270]="\uffff";
data[1271]="\uffff";
data[1272]="\uffff";
data[1273]="\uffff";
data[1274]="\uffff";
data[1275]="\uffff";
data[1276]="\uffff";
data[1277]="\uffff";
data[1278]="\uffff";
data[1279]="\uffff";
data[1280]="\uffff";
data[1281]="\uffff";
data[1282]="\uffff";
data[1283]="\uffff";
data[1284]="\uffff";
data[1285]="\uffff";
data[1286]="\uffff";
data[1287]="\uffff";
data[1288]="\uffff";
data[1289]="\uffff";
data[1290]="\uffff";
data[1291]="\uffff";
data[1292]="\uffff";
data[1293]="\uffff";
data[1294]="\uffff";
data[1295]="\uffff";
data[1296]="\uffff";
data[1297]="\uffff";
data[1298]="\uffff";
data[1299]="\uffff";
data[1300]="\uffff";
data[1301]="\uffff";
data[1302]="\uffff";
data[1303]="\uffff";
data[1304]="\uffff";
data[1305]="\uffff";
data[1306]="\uffff";
data[1307]="\uffff";
data[1308]="\uffff";
data[1309]="\uffff";
data[1310]="\uffff";
data[1311]="\uffff";
data[1312]="\uffff";
data[1313]="\uffff";
data[1314]="\uffff";
data[1315]="\uffff";
data[1316]="\uffff";
data[1317]="\uffff";
data[1318]="\uffff";
data[1319]="\uffff";
data[1320]="\uffff";
data[1321]="\uffff";
data[1322]="\uffff";
data[1323]="\uffff";
data[1324]="\uffff";
data[1325]="\uffff";
data[1326]="\uffff";
data[1327]="\uffff";
data[1328]="\uffff";
data[1329]="\uffff";
data[1330]="\uffff";
data[1331]="\uffff";
data[1332]="\uffff";
data[1333]="\uffff";
data[1334]="\uffff";
data[1335]="\uffff";
data[1336]="\uffff";
data[1337]="\uffff";
data[1338]="\uffff";
data[1339]="\uffff";
data[1340]="\uffff";
data[1341]="\uffff";
data[1342]="\uffff";
data[1343]="\uffff";
data[1344]="\uffff";
data[1345]="\uffff";
data[1346]="\uffff";
data[1347]="\uffff";
data[1348]="\uffff";
data[1349]="\uffff";
data[1350]="\uffff";
data[1351]="\uffff";
data[1352]="\uffff";
data[1353]="\uffff";
data[1354]="\uffff";
data[1355]="\uffff";
data[1356]="\uffff";
data[1357]="\uffff";
data[1358]="\uffff";
data[1359]="\uffff";
data[1360]="\uffff";
data[1361]="\uffff";
data[1362]="\uffff";
data[1363]="\uffff";
data[1364]="\uffff";
data[1365]="\uffff";
data[1366]="\uffff";
data[1367]="\uffff";
data[1368]="\uffff";
data[1369]="\uffff";
data[1370]="\uffff";
data[1371]="\uffff";
data[1372]="\uffff";
data[1373]="\uffff";
data[1374]="\uffff";
data[1375]="\uffff";
data[1376]="\uffff";
data[1377]="\uffff";
data[1378]="\uffff";
data[1379]="\uffff";
data[1380]="\uffff";
data[1381]="\uffff";
data[1382]="\uffff";
data[1383]="\uffff";
data[1384]="\uffff";
data[1385]="\uffff";
data[1386]="\uffff";
data[1387]="\uffff";
data[1388]="\uffff";
data[1389]="\uffff";
data[1390]="\uffff";
data[1391]="\uffff";
data[1392]="\uffff";
data[1393]="\uffff";
data[1394]="\uffff";
data[1395]="\uffff";
data[1396]="\uffff";
data[1397]="\uffff";
data[1398]="\uffff";
data[1399]="\uffff";
data[1400]="\uffff";
data[1401]="\uffff";
data[1402]="\uffff";
data[1403]="\uffff";
data[1404]="\uffff";
data[1405]="\uffff";
data[1406]="\uffff";
data[1407]="\uffff";
data[1408]="\uffff";
data[1409]="\uffff";
data[1410]="\uffff";
data[1411]="\uffff";
data[1412]="\uffff";
data[1413]="\uffff";
data[1414]="\uffff";
data[1415]="\uffff";
data[1416]="\uffff";
data[1417]="\uffff";
data[1418]="\uffff";
data[1419]="\uffff";
data[1420]="\uffff";
data[1421]="\uffff";
data[1422]="\uffff";
data[1423]="\uffff";
data[1424]="\uffff";
data[1425]="\uffff";
data[1426]="\uffff";
data[1427]="\uffff";
data[1428]="\uffff";
data[1429]="\uffff";
data[1430]="\uffff";
data[1431]="\uffff";
data[1432]="\uffff";
data[1433]="\uffff";
data[1434]="\uffff";
data[1435]="\uffff";
data[1436]="\uffff";
data[1437]="\uffff";
data[1438]="\uffff";
data[1439]="\uffff";
data[1440]="\uffff";
data[1441]="\uffff";
data[1442]="\uffff";
data[1443]="\uffff";
data[1444]="\uffff";
data[1445]="\uffff";
data[1446]="\uffff";
data[1447]="\uffff";
data[1448]="\uffff";
data[1449]="\uffff";
data[1450]="\uffff";
data[1451]="\uffff";
data[1452]="\uffff";
data[1453]="\uffff";
data[1454]="\uffff";
data[1455]="\uffff";
data[1456]="\uffff";
data[1457]="\uffff";
data[1458]="\uffff";
data[1459]="\uffff";
data[1460]="\uffff";
data[1461]="\uffff";
data[1462]="\uffff";
data[1463]="\uffff";
data[1464]="\uffff";
data[1465]="\uffff";
data[1466]="\uffff";
data[1467]="\uffff";
data[1468]="\uffff";
data[1469]="\uffff";
data[1470]="\uffff";
data[1471]="\uffff";
data[1472]="\uffff";
data[1473]="\uffff";
data[1474]="\uffff";
data[1475]="\uffff";
data[1476]="\uffff";
data[1477]="\uffff";
data[1478]="\uffff";
data[1479]="\uffff";
data[1480]="\uffff";
data[1481]="\uffff";
data[1482]="\uffff";
data[1483]="\uffff";
data[1484]="\uffff";
data[1485]="\uffff";
data[1486]="\uffff";
data[1487]="\uffff";
data[1488]="\uffff";
data[1489]="\uffff";
data[1490]="\uffff";
data[1491]="\uffff";
data[1492]="\uffff";
data[1493]="\uffff";
data[1494]="\uffff";
data[1495]="\uffff";
data[1496]="\uffff";
data[1497]="\uffff";
data[1498]="\uffff";
data[1499]="\uffff";
data[1500]="\uffff";
data[1501]="\uffff";
data[1502]="\uffff";
data[1503]="\uffff";
data[1504]="\uffff";
data[1505]="\uffff";
data[1506]="\uffff";
data[1507]="\uffff";
data[1508]="\uffff";
data[1509]="\uffff";
data[1510]="\uffff";
data[1511]="\uffff";
data[1512]="\uffff";
data[1513]="\uffff";
data[1514]="\uffff";
data[1515]="\uffff";
data[1516]="\uffff";
data[1517]="\uffff";
data[1518]="\uffff";
data[1519]="\uffff";
data[1520]="\uffff";
data[1521]="\uffff";
data[1522]="\uffff";
data[1523]="\uffff";
data[1524]="\uffff";
data[1525]="\uffff";
data[1526]="\uffff";
data[1527]="\uffff";
data[1528]="\uffff";
data[1529]="\uffff";
data[1530]="\uffff";
data[1531]="\uffff";
data[1532]="\uffff";
data[1533]="\uffff";
data[1534]="\uffff";
data[1535]="\uffff";
data[1536]="\uffff";
data[1537]="\uffff";
data[1538]="\uffff";
data[1539]="\uffff";
data[1540]="\uffff";
data[1541]="\uffff";
data[1542]="\uffff";
data[1543]="\uffff";
data[1544]="\uffff";
data[1545]="\uffff";
data[1546]="\uffff";
data[1547]="\uffff";
data[1548]="\uffff";
data[1549]="\uffff";
data[1550]="\uffff";
data[1551]="\uffff";
data[1552]="\uffff";
data[1553]="\uffff";
data[1554]="\uffff";
data[1555]="\uffff";
data[1556]="\uffff";
data[1557]="\uffff";
data[1558]="\uffff";
data[1559]="\uffff";
data[1560]="\uffff";
data[1561]="\uffff";
data[1562]="\uffff";
data[1563]="\uffff";
data[1564]="\uffff";
data[1565]="\uffff";
data[1566]="\uffff";
data[1567]="\uffff";
data[1568]="\uffff";
data[1569]="\uffff";
data[1570]="\uffff";
data[1571]="\uffff";
data[1572]="\uffff";
data[1573]="\uffff";
data[1574]="\uffff";
data[1575]="\uffff";
data[1576]="\uffff";
data[1577]="\uffff";
data[1578]="\uffff";
data[1579]="\uffff";
data[1580]="\uffff";
data[1581]="\uffff";
data[1582]="\uffff";
data[1583]="\uffff";
data[1584]="\uffff";
data[1585]="\uffff";
data[1586]="\uffff";
data[1587]="\uffff";
data[1588]="\uffff";
data[1589]="\uffff";
data[1590]="\uffff";
data[1591]="\uffff";
data[1592]="\uffff";
data[1593]="\uffff";
data[1594]="\uffff";
data[1595]="\uffff";
data[1596]="\uffff";
data[1597]="\uffff";
data[1598]="\uffff";
data[1599]="\uffff";
data[1600]="\uffff";
data[1601]="\uffff";
data[1602]="\uffff";
data[1603]="\uffff";
data[1604]="\uffff";
data[1605]="\uffff";
data[1606]="\uffff";
data[1607]="\uffff";
data[1608]="\uffff";
data[1609]="\uffff";
data[1610]="\uffff";
data[1611]="\uffff";
data[1612]="\uffff";
data[1613]="\uffff";
data[1614]="\uffff";
data[1615]="\uffff";
data[1616]="\uffff";
data[1617]="\uffff";
data[1618]="\uffff";
data[1619]="\uffff";
data[1620]="\uffff";
data[1621]="\uffff";
data[1622]="\uffff";
data[1623]="\uffff";
data[1624]="\uffff";
data[1625]="\uffff";
data[1626]="\uffff";
data[1627]="\uffff";
data[1628]="\uffff";
data[1629]="\uffff";
data[1630]="\uffff";
data[1631]="\uffff";
data[1632]="\uffff";
data[1633]="\uffff";
data[1634]="\uffff";
data[1635]="\uffff";
data[1636]="\uffff";
data[1637]="\uffff";
data[1638]="\uffff";
data[1639]="\uffff";
data[1640]="\uffff";
data[1641]="\uffff";
data[1642]="\uffff";
data[1643]="\uffff";
data[1644]="\uffff";
data[1645]="\uffff";
data[1646]="\uffff";
data[1647]="\uffff";
data[1648]="\uffff";
data[1649]="\uffff";
data[1650]="\uffff";
data[1651]="\uffff";
data[1652]="\uffff";
data[1653]="\uffff";
data[1654]="\uffff";
data[1655]="\uffff";
data[1656]="\uffff";
data[1657]="\uffff";
data[1658]="\uffff";
data[1659]="\uffff";
data[1660]="\uffff";
data[1661]="\uffff";
data[1662]="\uffff";
data[1663]="\uffff";
data[1664]="\uffff";
data[1665]="\uffff";
data[1666]="\uffff";
data[1667]="\uffff";
data[1668]="\uffff";
data[1669]="\uffff";
data[1670]="\uffff";
data[1671]="\uffff";
data[1672]="\uffff";
data[1673]="\uffff";
data[1674]="\uffff";
data[1675]="\uffff";
data[1676]="\uffff";
data[1677]="\uffff";
data[1678]="\uffff";
data[1679]="\uffff";
data[1680]="\uffff";
data[1681]="\uffff";
data[1682]="\uffff";
data[1683]="\uffff";
data[1684]="\uffff";
data[1685]="\uffff";
data[1686]="\uffff";
data[1687]="\uffff";
data[1688]="\uffff";
data[1689]="\uffff";
data[1690]="\uffff";
data[1691]="\uffff";
data[1692]="\uffff";
data[1693]="\uffff";
data[1694]="\uffff";
data[1695]="\uffff";
data[1696]="\uffff";
data[1697]="\uffff";
data[1698]="\uffff";
data[1699]="\uffff";
data[1700]="\uffff";
data[1701]="\uffff";
data[1702]="\uffff";
data[1703]="\uffff";
data[1704]="\uffff";
data[1705]="\uffff";
data[1706]="\uffff";
data[1707]="\uffff";
data[1708]="\uffff";
data[1709]="\uffff";
data[1710]="\uffff";
data[1711]="\uffff";
data[1712]="\uffff";
data[1713]="\uffff";
data[1714]="\uffff";
data[1715]="\uffff";
data[1716]="\uffff";
data[1717]="\uffff";
data[1718]="\uffff";
data[1719]="\uffff";
data[1720]="\uffff";
data[1721]="\uffff";
data[1722]="\uffff";
data[1723]="\uffff";
data[1724]="\uffff";
data[1725]="\uffff";
data[1726]="\uffff";
data[1727]="\uffff";
data[1728]="\uffff";
data[1729]="\uffff";
data[1730]="\uffff";
data[1731]="\uffff";
data[1732]="\uffff";
data[1733]="\uffff";
data[1734]="\uffff";
data[1735]="\uffff";
data[1736]="\uffff";
data[1737]="\uffff";
data[1738]="\uffff";
data[1739]="\uffff";
data[1740]="\uffff";
data[1741]="\uffff";
data[1742]="\uffff";
data[1743]="\uffff";
data[1744]="\uffff";
data[1745]="\uffff";
data[1746]="\uffff";
data[1747]="\uffff";
data[1748]="\uffff";
data[1749]="\uffff";
data[1750]="\uffff";
data[1751]="\uffff";
data[1752]="\uffff";
data[1753]="\uffff";
data[1754]="\uffff";
data[1755]="\uffff";
data[1756]="\uffff";
data[1757]="\uffff";
data[1758]="\uffff";
data[1759]="\uffff";
data[1760]="\uffff";
data[1761]="\uffff";
data[1762]="\uffff";
data[1763]="\uffff";
data[1764]="\uffff";
data[1765]="\uffff";
data[1766]="\uffff";
data[1767]="\uffff";
data[1768]="\uffff";
data[1769]="\uffff";
data[1770]="\uffff";
data[1771]="\uffff";
data[1772]="\uffff";
data[1773]="\uffff";
data[1774]="\uffff";
data[1775]="\uffff";
data[1776]="\uffff";
data[1777]="\uffff";
data[1778]="\uffff";
data[1779]="\uffff";
data[1780]="\uffff";
data[1781]="\uffff";
data[1782]="\uffff";
data[1783]="\uffff";
data[1784]="\uffff";
data[1785]="\uffff";
data[1786]="\uffff";
data[1787]="\uffff";
data[1788]="\uffff";
data[1789]="\uffff";
data[1790]="\uffff";
data[1791]="\uffff";
data[1792]="\uffff";
data[1793]="\uffff";
data[1794]="\uffff";
data[1795]="\uffff";
data[1796]="\uffff";
data[1797]="\uffff";
data[1798]="\uffff";
data[1799]="\uffff";
data[1800]="\uffff";
data[1801]="\uffff";
data[1802]="\uffff";
data[1803]="\uffff";
data[1804]="\uffff";
data[1805]="\uffff";
data[1806]="\uffff";
data[1807]="\uffff";
data[1808]="\uffff";
data[1809]="\uffff";
data[1810]="\uffff";
data[1811]="\uffff";
data[1812]="\uffff";
data[1813]="\uffff";
data[1814]="\uffff";
data[1815]="\uffff";
data[1816]="\uffff";
data[1817]="\uffff";
data[1818]="\uffff";
data[1819]="\uffff";
data[1820]="\uffff";
data[1821]="\uffff";
data[1822]="\uffff";
data[1823]="\uffff";
data[1824]="\uffff";
data[1825]="\uffff";
data[1826]="\uffff";
data[1827]="\uffff";
data[1828]="\uffff";
data[1829]="\uffff";
data[1830]="\uffff";
data[1831]="\uffff";
data[1832]="\uffff";
data[1833]="\uffff";
data[1834]="\uffff";
data[1835]="\uffff";
data[1836]="\uffff";
data[1837]="\uffff";
data[1838]="\uffff";
data[1839]="\uffff";
data[1840]="\uffff";
data[1841]="\uffff";
data[1842]="\uffff";
data[1843]="\uffff";
data[1844]="\uffff";
data[1845]="\uffff";
data[1846]="\uffff";
data[1847]="\uffff";
data[1848]="\uffff";
data[1849]="\uffff";
data[1850]="\uffff";
data[1851]="\uffff";
data[1852]="\uffff";
data[1853]="\uffff";
data[1854]="\uffff";
data[1855]="\uffff";
data[1856]="\uffff";
data[1857]="\uffff";
data[1858]="\uffff";
data[1859]="\uffff";
data[1860]="\uffff";
data[1861]="\uffff";
data[1862]="\uffff";
data[1863]="\uffff";
data[1864]="\uffff";
data[1865]="\uffff";
data[1866]="\uffff";
data[1867]="\uffff";
data[1868]="\uffff";
data[1869]="\uffff";
data[1870]="\uffff";
data[1871]="\uffff";
data[1872]="\uffff";
data[1873]="\uffff";
data[1874]="\uffff";
data[1875]="\uffff";
data[1876]="\uffff";
data[1877]="\uffff";
data[1878]="\uffff";
data[1879]="\uffff";
data[1880]="\uffff";
data[1881]="\uffff";
data[1882]="\uffff";
data[1883]="\uffff";
data[1884]="\uffff";
data[1885]="\uffff";
data[1886]="\uffff";
data[1887]="\uffff";
data[1888]="\uffff";
data[1889]="\uffff";
data[1890]="\uffff";
data[1891]="\uffff";
data[1892]="\uffff";
data[1893]="\uffff";
data[1894]="\uffff";
data[1895]="\uffff";
data[1896]="\uffff";
data[1897]="\uffff";
data[1898]="\uffff";
data[1899]="\uffff";
data[1900]="\uffff";
data[1901]="\uffff";
data[1902]="\uffff";
data[1903]="\uffff";
data[1904]="\uffff";
data[1905]="\uffff";
data[1906]="\uffff";
data[1907]="\uffff";
data[1908]="\uffff";
data[1909]="\uffff";
data[1910]="\uffff";
data[1911]="\uffff";
data[1912]="\uffff";
data[1913]="\uffff";
data[1914]="\uffff";
data[1915]="\uffff";
data[1916]="\uffff";
data[1917]="\uffff";
data[1918]="\uffff";
data[1919]="\uffff";
data[1920]="\uffff";
data[1921]="\uffff";
data[1922]="\uffff";
data[1923]="\uffff";
data[1924]="\uffff";
data[1925]="\uffff";
data[1926]="\uffff";
data[1927]="\uffff";
data[1928]="\uffff";
data[1929]="\uffff";
data[1930]="\uffff";
data[1931]="\uffff";
data[1932]="\uffff";
data[1933]="\uffff";
data[1934]="\uffff";
data[1935]="\uffff";
data[1936]="\uffff";
data[1937]="\uffff";
data[1938]="\uffff";
data[1939]="\uffff";
data[1940]="\uffff";
data[1941]="\uffff";
data[1942]="\uffff";
data[1943]="\uffff";
data[1944]="\uffff";
data[1945]="\uffff";
data[1946]="\uffff";
data[1947]="\uffff";
data[1948]="\uffff";
data[1949]="\uffff";
data[1950]="\uffff";
data[1951]="\uffff";
data[1952]="\uffff";
data[1953]="\uffff";
data[1954]="\uffff";
data[1955]="\uffff";
data[1956]="\uffff";
data[1957]="\uffff";
data[1958]="\uffff";
data[1959]="\uffff";
data[1960]="\uffff";
data[1961]="\uffff";
data[1962]="\uffff";
data[1963]="\uffff";
data[1964]="\uffff";
data[1965]="\uffff";
data[1966]="\uffff";
data[1967]="\uffff";
data[1968]="\uffff";
data[1969]="\uffff";
data[1970]="\uffff";
data[1971]="\uffff";
data[1972]="\uffff";
data[1973]="\uffff";
data[1974]="\uffff";
data[1975]="\uffff";
data[1976]="\uffff";
data[1977]="\uffff";
data[1978]="\uffff";
data[1979]="\uffff";
data[1980]="\uffff";
data[1981]="\uffff";
data[1982]="\uffff";
data[1983]="\uffff";
data[1984]="\uffff";
data[1985]="\uffff";
data[1986]="\uffff";
data[1987]="\uffff";
data[1988]="\uffff";
data[1989]="\uffff";
data[1990]="\uffff";
data[1991]="\uffff";
data[1992]="\uffff";
data[1993]="\uffff";
data[1994]="\uffff";
data[1995]="\uffff";
data[1996]="\uffff";
data[1997]="\uffff";
data[1998]="\uffff";
data[1999]="\uffff";
data[2000]="\uffff";
data[2001]="\uffff";
data[2002]="\uffff";
data[2003]="\uffff";
data[2004]="\uffff";
data[2005]="\uffff";
data[2006]="\uffff";
data[2007]="\uffff";
data[2008]="\uffff";
data[2009]="\uffff";
data[2010]="\uffff";
data[2011]="\uffff";
data[2012]="\uffff";
data[2013]="\uffff";
data[2014]="\uffff";
data[2015]="\uffff";
data[2016]="\uffff";
data[2017]="\uffff";
data[2018]="\uffff";
data[2019]="\uffff";
data[2020]="\uffff";
data[2021]="\uffff";
data[2022]="\uffff";
data[2023]="\uffff";
data[2024]="\uffff";
data[2025]="\uffff";
data[2026]="\uffff";
data[2027]="\uffff";
data[2028]="\uffff";
data[2029]="\uffff";
data[2030]="\uffff";
data[2031]="\uffff";
data[2032]="\uffff";
data[2033]="\uffff";
data[2034]="\uffff";
data[2035]="\uffff";
data[2036]="\uffff";
data[2037]="\uffff";
data[2038]="\uffff";
data[2039]="\uffff";
data[2040]="\uffff";
data[2041]="\uffff";
data[2042]="\uffff";
data[2043]="\uffff";
data[2044]="\uffff";
data[2045]="\uffff";
data[2046]="\uffff";
data[2047]="\uffff";
data[2048]="\uffff";
data[2049]="\uffff";
data[2050]="\uffff";
data[2051]="\uffff";
data[2052]="\uffff";
data[2053]="\uffff";
data[2054]="\uffff";
data[2055]="\uffff";
data[2056]="\uffff";
data[2057]="\uffff";
data[2058]="\uffff";
data[2059]="\uffff";
data[2060]="\uffff";
data[2061]="\uffff";
data[2062]="\uffff";
data[2063]="\uffff";
data[2064]="\uffff";
data[2065]="\uffff";
data[2066]="\uffff";
data[2067]="\uffff";
data[2068]="\uffff";
data[2069]="\uffff";
data[2070]="\uffff";
data[2071]="\uffff";
data[2072]="\uffff";
data[2073]="\uffff";
data[2074]="\uffff";
data[2075]="\uffff";
data[2076]="\uffff";
data[2077]="\uffff";
data[2078]="\uffff";
data[2079]="\uffff";
data[2080]="\uffff";
data[2081]="\uffff";
data[2082]="\uffff";
data[2083]="\uffff";
data[2084]="\uffff";
data[2085]="\uffff";
data[2086]="\uffff";
data[2087]="\uffff";
data[2088]="\uffff";
data[2089]="\uffff";
data[2090]="\uffff";
data[2091]="\uffff";
data[2092]="\uffff";
data[2093]="\uffff";
data[2094]="\uffff";
data[2095]="\uffff";
data[2096]="\uffff";
data[2097]="\uffff";
data[2098]="\uffff";
data[2099]="\uffff";
data[2100]="\uffff";
data[2101]="\uffff";
data[2102]="\uffff";
data[2103]="\uffff";
data[2104]="\uffff";
data[2105]="\uffff";
data[2106]="\uffff";
data[2107]="\uffff";
data[2108]="\uffff";
data[2109]="\uffff";
data[2110]="\uffff";
data[2111]="\uffff";
data[2112]="\uffff";
data[2113]="\uffff";
data[2114]="\uffff";
data[2115]="\uffff";
data[2116]="\uffff";
data[2117]="\uffff";
data[2118]="\uffff";
data[2119]="\uffff";
data[2120]="\uffff";
data[2121]="\uffff";
data[2122]="\uffff";
data[2123]="\uffff";
data[2124]="\uffff";
data[2125]="\uffff";
data[2126]="\uffff";
data[2127]="\uffff";
data[2128]="\uffff";
data[2129]="\uffff";
data[2130]="\uffff";
data[2131]="\uffff";
data[2132]="\uffff";
data[2133]="\uffff";
data[2134]="\uffff";
data[2135]="\uffff";
data[2136]="\uffff";
data[2137]="\uffff";
data[2138]="\uffff";
data[2139]="\uffff";
data[2140]="\uffff";
data[2141]="\uffff";
data[2142]="\uffff";
data[2143]="\uffff";
data[2144]="\uffff";
data[2145]="\uffff";
data[2146]="\uffff";
data[2147]="\uffff";
data[2148]="\uffff";
data[2149]="\uffff";
data[2150]="\uffff";
data[2151]="\uffff";
data[2152]="\uffff";
data[2153]="\uffff";
data[2154]="\uffff";
data[2155]="\uffff";
data[2156]="\uffff";
data[2157]="\uffff";
data[2158]="\uffff";
data[2159]="\uffff";
data[2160]="\uffff";
data[2161]="\uffff";
data[2162]="\uffff";
data[2163]="\uffff";
data[2164]="\uffff";
data[2165]="\uffff";
data[2166]="\uffff";
data[2167]="\uffff";
data[2168]="\uffff";
data[2169]="\uffff";
data[2170]="\uffff";
data[2171]="\uffff";
data[2172]="\uffff";
data[2173]="\uffff";
data[2174]="\uffff";
data[2175]="\uffff";
data[2176]="\uffff";
data[2177]="\uffff";
data[2178]="\uffff";
data[2179]="\uffff";
data[2180]="\uffff";
data[2181]="\uffff";
data[2182]="\uffff";
data[2183]="\uffff";
data[2184]="\uffff";
data[2185]="\uffff";
data[2186]="\uffff";
data[2187]="\uffff";
data[2188]="\uffff";
data[2189]="\uffff";
data[2190]="\uffff";
data[2191]="\uffff";
data[2192]="\uffff";
data[2193]="\uffff";
data[2194]="\uffff";
data[2195]="\uffff";
data[2196]="\uffff";
data[2197]="\uffff";
data[2198]="\uffff";
data[2199]="\uffff";
data[2200]="\uffff";
data[2201]="\uffff";
data[2202]="\uffff";
data[2203]="\uffff";
data[2204]="\uffff";
data[2205]="\uffff";
data[2206]="\uffff";
data[2207]="\uffff";
data[2208]="\uffff";
data[2209]="\uffff";
data[2210]="\uffff";
data[2211]="\uffff";
data[2212]="\uffff";
data[2213]="\uffff";
data[2214]="\uffff";
data[2215]="\uffff";
data[2216]="\uffff";
data[2217]="\uffff";
data[2218]="\uffff";
data[2219]="\uffff";
data[2220]="\uffff";
data[2221]="\uffff";
data[2222]="\uffff";
data[2223]="\uffff";
data[2224]="\uffff";
data[2225]="\uffff";
data[2226]="\uffff";
data[2227]="\uffff";
data[2228]="\uffff";
data[2229]="\uffff";
data[2230]="\uffff";
data[2231]="\uffff";
data[2232]="\uffff";
data[2233]="\uffff";
data[2234]="\uffff";
data[2235]="\uffff";
data[2236]="\uffff";
data[2237]="\uffff";
data[2238]="\uffff";
data[2239]="\uffff";
data[2240]="\uffff";
data[2241]="\uffff";
data[2242]="\uffff";
data[2243]="\uffff";
data[2244]="\uffff";
data[2245]="\uffff";
data[2246]="\uffff";
data[2247]="\uffff";
data[2248]="\uffff";
data[2249]="\uffff";
data[2250]="\uffff";
data[2251]="\uffff";
data[2252]="\uffff";
data[2253]="\uffff";
data[2254]="\uffff";
data[2255]="\uffff";
data[2256]="\uffff";
data[2257]="\uffff";
data[2258]="\uffff";
data[2259]="\uffff";
data[2260]="\uffff";
data[2261]="\uffff";
data[2262]="\uffff";
data[2263]="\uffff";
data[2264]="\uffff";
data[2265]="\uffff";
data[2266]="\uffff";
data[2267]="\uffff";
data[2268]="\uffff";
data[2269]="\uffff";
data[2270]="\uffff";
data[2271]="\uffff";
data[2272]="\uffff";
data[2273]="\uffff";
data[2274]="\uffff";
data[2275]="\uffff";
data[2276]="\uffff";
data[2277]="\uffff";
data[2278]="\uffff";
data[2279]="\uffff";
data[2280]="\uffff";
data[2281]="\uffff";
data[2282]="\uffff";
data[2283]="\uffff";
data[2284]="\uffff";
data[2285]="\uffff";
data[2286]="\uffff";
data[2287]="\uffff";
data[2288]="\uffff";
data[2289]="\uffff";
data[2290]="\uffff";
data[2291]="\uffff";
data[2292]="\uffff";
data[2293]="\uffff";
data[2294]="\uffff";
data[2295]="\uffff";
data[2296]="\uffff";
data[2297]="\uffff";
data[2298]="\uffff";
data[2299]="\uffff";
data[2300]="\uffff";
data[2301]="\uffff";
data[2302]="\uffff";
data[2303]="\uffff";
data[2304]="\uffff";
data[2305]="\uffff";
data[2306]="\uffff";
data[2307]="\uffff";
data[2308]="\uffff";
data[2309]="\uffff";
data[2310]="\uffff";
data[2311]="\uffff";
data[2312]="\uffff";
data[2313]="\uffff";
data[2314]="\uffff";
data[2315]="\uffff";
data[2316]="\uffff";
data[2317]="\uffff";
data[2318]="\uffff";
data[2319]="\uffff";
data[2320]="\uffff";
data[2321]="\uffff";
data[2322]="\uffff";
data[2323]="\uffff";
data[2324]="\uffff";
data[2325]="\uffff";
data[2326]="\uffff";
data[2327]="\uffff";
data[2328]="\uffff";
data[2329]="\uffff";
data[2330]="\uffff";
data[2331]="\uffff";
data[2332]="\uffff";
data[2333]="\uffff";
data[2334]="\uffff";
data[2335]="\uffff";
data[2336]="\uffff";
data[2337]="\uffff";
data[2338]="\uffff";
data[2339]="\uffff";
data[2340]="\uffff";
data[2341]="\uffff";
data[2342]="\uffff";
data[2343]="\uffff";
data[2344]="\uffff";
data[2345]="\uffff";
data[2346]="\uffff";
data[2347]="\uffff";
data[2348]="\uffff";
data[2349]="\uffff";
data[2350]="\uffff";
data[2351]="\uffff";
data[2352]="\uffff";
data[2353]="\uffff";
data[2354]="\uffff";
data[2355]="\uffff";
data[2356]="\uffff";
data[2357]="\uffff";
data[2358]="\uffff";
data[2359]="\uffff";
data[2360]="\uffff";
data[2361]="\uffff";
data[2362]="\uffff";
data[2363]="\uffff";
data[2364]="\uffff";
data[2365]="\uffff";
data[2366]="\uffff";
data[2367]="\uffff";
data[2368]="\uffff";
data[2369]="\uffff";
data[2370]="\uffff";
data[2371]="\uffff";
data[2372]="\uffff";
data[2373]="\uffff";
data[2374]="\uffff";
data[2375]="\uffff";
data[2376]="\uffff";
data[2377]="\uffff";
data[2378]="\uffff";
data[2379]="\uffff";
data[2380]="\uffff";
data[2381]="\uffff";
data[2382]="\uffff";
data[2383]="\uffff";
data[2384]="\uffff";
data[2385]="\uffff";
data[2386]="\uffff";
data[2387]="\uffff";
data[2388]="\uffff";
data[2389]="\uffff";
data[2390]="\uffff";
data[2391]="\uffff";
data[2392]="\uffff";
data[2393]="\uffff";
data[2394]="\uffff";
data[2395]="\uffff";
data[2396]="\uffff";
data[2397]="\uffff";
data[2398]="\uffff";
data[2399]="\uffff";
data[2400]="\uffff";
data[2401]="\uffff";
data[2402]="\uffff";
data[2403]="\uffff";
data[2404]="\uffff";
data[2405]="\uffff";
data[2406]="\uffff";
data[2407]="\uffff";
data[2408]="\uffff";
data[2409]="\uffff";
data[2410]="\uffff";
data[2411]="\uffff";
data[2412]="\uffff";
data[2413]="\uffff";
data[2414]="\uffff";
data[2415]="\uffff";
data[2416]="\uffff";
data[2417]="\uffff";
data[2418]="\uffff";
data[2419]="\uffff";
data[2420]="\uffff";
data[2421]="\uffff";
data[2422]="\uffff";
data[2423]="\uffff";
data[2424]="\uffff";
data[2425]="\uffff";
data[2426]="\uffff";
data[2427]="\uffff";
data[2428]="\uffff";
data[2429]="\uffff";
data[2430]="\uffff";
data[2431]="\uffff";
data[2432]="\uffff";
data[2433]="\uffff";
data[2434]="\uffff";
data[2435]="\uffff";
data[2436]="\uffff";
data[2437]="\uffff";
data[2438]="\uffff";
data[2439]="\uffff";
data[2440]="\uffff";
data[2441]="\uffff";
data[2442]="\uffff";
data[2443]="\uffff";
data[2444]="\uffff";
data[2445]="\uffff";
data[2446]="\uffff";
data[2447]="\uffff";
data[2448]="\uffff";
data[2449]="\uffff";
data[2450]="\uffff";
data[2451]="\uffff";
data[2452]="\uffff";
data[2453]="\uffff";
data[2454]="\uffff";
data[2455]="\uffff";
data[2456]="\uffff";
data[2457]="\uffff";
data[2458]="\uffff";
data[2459]="\uffff";
data[2460]="\uffff";
data[2461]="\uffff";
data[2462]="\uffff";
data[2463]="\uffff";
data[2464]="\uffff";
data[2465]="\uffff";
data[2466]="\uffff";
data[2467]="\uffff";
data[2468]="\uffff";
data[2469]="\uffff";
data[2470]="\uffff";
data[2471]="\uffff";
data[2472]="\uffff";
data[2473]="\uffff";
data[2474]="\uffff";
data[2475]="\uffff";
data[2476]="\uffff";
data[2477]="\uffff";
data[2478]="\uffff";
data[2479]="\uffff";
data[2480]="\uffff";
data[2481]="\uffff";
data[2482]="\uffff";
data[2483]="\uffff";
data[2484]="\uffff";
data[2485]="\uffff";
data[2486]="\uffff";
data[2487]="\uffff";
data[2488]="\uffff";
data[2489]="\uffff";
data[2490]="\uffff";
data[2491]="\uffff";
data[2492]="\uffff";
data[2493]="\uffff";
data[2494]="\uffff";
data[2495]="\uffff";
data[2496]="\uffff";
data[2497]="\uffff";
data[2498]="\uffff";
data[2499]="\uffff";
data[2500]="\uffff";
data[2501]="\uffff";
data[2502]="\uffff";
data[2503]="\uffff";
data[2504]="\uffff";
data[2505]="\uffff";
data[2506]="\uffff";
data[2507]="\uffff";
data[2508]="\uffff";
data[2509]="\uffff";
data[2510]="\uffff";
data[2511]="\uffff";
data[2512]="\uffff";
data[2513]="\uffff";
data[2514]="\uffff";
data[2515]="\uffff";
data[2516]="\uffff";
data[2517]="\uffff";
data[2518]="\uffff";
data[2519]="\uffff";
data[2520]="\uffff";
data[2521]="\uffff";
data[2522]="\uffff";
data[2523]="\uffff";
data[2524]="\uffff";
data[2525]="\uffff";
data[2526]="\uffff";
data[2527]="\uffff";
data[2528]="\uffff";
data[2529]="\uffff";
data[2530]="\uffff";
data[2531]="\uffff";
data[2532]="\uffff";
data[2533]="\uffff";
data[2534]="\uffff";
data[2535]="\uffff";
data[2536]="\uffff";
data[2537]="\uffff";
data[2538]="\uffff";
data[2539]="\uffff";
data[2540]="\uffff";
data[2541]="\uffff";
data[2542]="\uffff";
data[2543]="\uffff";
data[2544]="\uffff";
data[2545]="\uffff";
data[2546]="\uffff";
data[2547]="\uffff";
data[2548]="\uffff";
data[2549]="\uffff";
data[2550]="\uffff";
data[2551]="\uffff";
data[2552]="\uffff";
data[2553]="\uffff";
data[2554]="?";
data[2752]="\uffff";
data[2753]="\uffff";
data[2754]="\uffff";
data[2755]="\uffff";
data[2756]="\uffff";
data[2757]="\uffff";
data[2758]="\uffff";
data[2759]="\uffff";
data[2760]="\uffff";
data[2761]="\uffff";
data[2762]="\uffff";
data[2763]="\uffff";
data[2764]="\uffff";
data[2765]="\uffff";
data[2766]="\uffff";
data[2767]="\uffff";
data[2768]="\uffff";
data[2769]="\uffff";
data[2770]="\uffff";
data[2771]="\uffff";
data[2772]="\uffff";
data[2773]="\uffff";
data[2774]="\uffff";
data[2775]="\uffff";
data[2776]="\uffff";
data[2777]="\uffff";
data[2778]="\uffff";
data[2779]="\uffff";
data[2780]="\uffff";
data[2781]="\uffff";
data[2782]="\uffff";
data[2783]="\uffff";
data[2784]="\uffff";
data[2785]="\uffff";
data[2786]="\uffff";
data[2787]="\uffff";
data[2788]="\uffff";
data[2789]="\uffff";
data[2790]="\uffff";
data[2791]="\uffff";
data[2792]="\uffff";
data[2793]="\uffff";
data[2794]="\uffff";
data[2795]="\uffff";
data[2796]="\uffff";
data[2797]="\uffff";
data[2798]="\uffff";
data[2799]="\uffff";
data[2800]="\uffff";
data[2801]="\uffff";
data[2802]="\uffff";
data[2803]="\uffff";
data[2804]="\uffff";
data[2805]="\uffff";
data[2806]="\uffff";
data[2807]="\uffff";
data[2808]="\uffff";
data[2809]="\uffff";
data[2810]="\uffff";
data[2811]="\uffff";
data[2812]="\uffff";
data[2813]="\uffff";
data[2814]="\uffff";
data[2815]="\uffff";
data[2816]="\uffff";
data[2817]="\uffff";
data[2818]="\uffff";
data[2819]="\uffff";
data[2820]="\uffff";
data[2821]="\uffff";
data[2822]="\uffff";
data[2823]="\uffff";
data[2824]="\uffff";
data[2825]="\uffff";
data[2826]="\uffff";
data[2827]="\uffff";
data[2828]="\uffff";
data[2829]="\uffff";
data[2830]="\uffff";
data[2831]="\uffff";
data[2832]="\uffff";
data[2833]="\uffff";
data[2834]="\uffff";
data[2835]="\uffff";
data[2836]="\uffff";
data[2837]="\uffff";
data[2838]="\uffff";
data[2839]="\uffff";
data[2840]="\uffff";
data[2841]="\uffff";
data[2842]="\uffff";
data[2843]="\uffff";
data[2844]="\uffff";
data[2845]="\uffff";
data[2846]="\uffff";
data[2847]="\uffff";
data[2848]="\uffff";
data[2849]="\uffff";
data[2850]="\uffff";
data[2851]="\uffff";
data[2852]="\uffff";
data[2853]="\uffff";
data[2854]="\uffff";
data[2855]="\uffff";
data[2856]="\uffff";
data[2857]="\uffff";
data[2858]="\uffff";
data[2859]="\uffff";
data[2860]="\uffff";
data[2861]="\uffff";
data[2862]="\uffff";
data[2863]="\uffff";
data[2864]="\uffff";
data[2865]="\uffff";
data[2866]="\uffff";
data[2867]="\uffff";
data[2868]="\uffff";
data[2869]="\uffff";
data[2870]="\uffff";
data[2871]="\uffff";
data[2872]="\uffff";
data[2873]="\uffff";
data[2874]="\uffff";
data[2875]="\uffff";
data[2876]="\uffff";
data[2877]="\uffff";
data[2878]="\uffff";
data[2879]="\uffff";
data[2880]="\uffff";
data[2881]="\uffff";
data[2882]="\uffff";
data[2883]="\uffff";
data[2884]="\uffff";
data[2885]="\uffff";
data[2886]="\uffff";
data[2887]="\uffff";
data[2888]="\uffff";
data[2889]="\uffff";
data[2890]="\uffff";
data[2891]="\uffff";
data[2892]="\uffff";
data[2893]="\uffff";
data[2894]="\uffff";
data[2895]="\uffff";
data[2896]="\uffff";
data[2897]="\uffff";
data[2898]="\uffff";
data[2899]="\uffff";
data[2900]="\uffff";
data[2901]="\uffff";
data[2902]="\uffff";
data[2903]="\uffff";
data[2904]="\uffff";
data[2905]="\uffff";
data[2906]="\uffff";
data[2907]="\uffff";
data[2908]="\uffff";
data[2909]="\uffff";
data[2910]="\uffff";
data[2911]="\uffff";
data[2912]="\uffff";
data[2913]="\uffff";
data[2914]="\uffff";
data[2915]="\uffff";
data[2916]="\uffff";
data[2917]="\uffff";
data[2918]="\uffff";
data[2919]="\uffff";
data[2920]="\uffff";
data[2921]="\uffff";
data[2922]="\uffff";
data[2923]="\uffff";
data[2924]="\uffff";
data[2925]="\uffff";
data[2926]="\uffff";
data[2927]="\uffff";
data[2928]="\uffff";
data[2929]="\uffff";
data[2930]="\uffff";
data[2931]="\uffff";
data[2932]="\uffff";
data[2933]="\uffff";
data[2934]="\uffff";
data[2935]="\uffff";
data[2936]="\uffff";
data[2937]="\uffff";
data[2938]="\uffff";
data[2939]="\uffff";
data[2940]="\uffff";
data[2941]="\uffff";
data[2942]="\uffff";
data[2943]="\uffff";
data[2944]="\uffff";
data[2945]="\uffff";
data[2946]="\uffff";
data[2947]="\uffff";
data[2948]="\uffff";
data[2949]="\uffff";
data[2950]="\uffff";
data[2951]="\uffff";
data[2952]="\uffff";
data[2953]="\uffff";
data[2954]="\uffff";
data[2955]="\uffff";
data[2956]="\uffff";
data[2957]="\uffff";
data[2958]="\uffff";
data[2959]="\uffff";
data[2960]="\uffff";
data[2961]="\uffff";
data[2962]="\uffff";
data[2963]="\uffff";
data[2964]="\uffff";
data[2965]="\uffff";
data[2966]="\uffff";
data[2967]="\uffff";
data[2968]="\uffff";
data[2969]="\uffff";
data[2970]="\uffff";
data[2971]="\uffff";
data[2972]="\uffff";
data[2973]="\uffff";
data[2974]="\uffff";
data[2975]="\uffff";
data[2976]="\uffff";
data[2977]="\uffff";
data[2978]="\uffff";
data[2979]="\uffff";
data[2980]="\uffff";
data[2981]="\uffff";
data[2982]="\uffff";
data[2983]="\uffff";
data[2984]="\uffff";
data[2985]="\uffff";
data[2986]="\uffff";
data[2987]="\uffff";
data[2988]="\uffff";
data[2989]="\uffff";
data[2990]="\uffff";
data[2991]="\uffff";
data[2992]="\uffff";
data[2993]="\uffff";
data[2994]="\uffff";
data[2995]="\uffff";
data[2996]="\uffff";
data[2997]="\uffff";
data[2998]="\uffff";
data[2999]="\uffff";
data[3000]="\uffff";
data[3001]="\uffff";
data[3002]="\uffff";
data[3003]="\uffff";
data[3004]="\uffff";
data[3005]="\uffff";
data[3006]="\uffff";
data[3007]="\uffff";
data[3008]="\uffff";
data[3009]="\uffff";
data[3010]="\uffff";
data[3011]="\uffff";
data[3012]="\uffff";
data[3013]="\uffff";
data[3014]="\uffff";
data[3015]="\uffff";
data[3016]="\uffff";
data[3017]="\uffff";
data[3018]="\uffff";
data[3019]="\uffff";
data[3020]="\uffff";
data[3021]="\uffff";
data[3022]="\uffff";
data[3023]="\uffff";
data[3024]="\uffff";
data[3025]="\uffff";
data[3026]="\uffff";
data[3027]="\uffff";
data[3028]="\uffff";
data[3029]="\uffff";
data[3030]="\uffff";
data[3031]="\uffff";
data[3032]="\uffff";
data[3033]="\uffff";
data[3034]="\uffff";
data[3035]="\uffff";
data[3036]="\uffff";
data[3037]="\uffff";
data[3038]="\uffff";
data[3039]="\uffff";
data[3040]="\uffff";
data[3041]="\uffff";
data[3042]="\uffff";
data[3043]="\uffff";
data[3044]="\uffff";
data[3045]="\uffff";
data[3046]="\uffff";
data[3047]="\uffff";
data[3048]="\uffff";
data[3049]="\uffff";
data[3050]="\uffff";
data[3051]="\uffff";
data[3052]="\uffff";
data[3053]="\uffff";
data[3054]="\uffff";
data[3055]="\uffff";
data[3056]="\uffff";
data[3057]="\uffff";
data[3058]="\uffff";
data[3059]="\uffff";
data[3060]="\uffff";
data[3061]="\uffff";
data[3062]="\uffff";
data[3063]="\uffff";
data[3064]="\uffff";
data[3065]="\uffff";
data[3066]="\uffff";
data[3067]="\uffff";
data[3068]="\uffff";
data[3069]="\uffff";
data[3070]="\uffff";
data[3071]="\uffff";
data[3072]="\uffff";
data[3073]="\uffff";
data[3074]="\uffff";
data[3075]="\uffff";
data[3076]="\uffff";
data[3077]="\uffff";
data[3078]="\uffff";
data[3079]="\uffff";
data[3080]="\uffff";
data[3081]="\uffff";
data[3082]="\uffff";
data[3083]="\uffff";
data[3084]="\uffff";
data[3085]="\uffff";
data[3086]="\uffff";
data[3087]="\uffff";
data[3088]="\uffff";
data[3089]="\uffff";
data[3090]="\uffff";
data[3091]="\uffff";
data[3092]="\uffff";
data[3093]="\uffff";
data[3094]="\uffff";
data[3095]="\uffff";
data[3096]="\uffff";
data[3097]="\uffff";
data[3098]="\uffff";
data[3099]="\uffff";
data[3100]="\uffff";
data[3101]="\uffff";
data[3102]="\uffff";
data[3103]="\uffff";
data[3104]="\uffff";
data[3105]="\uffff";
data[3106]="\uffff";
data[3107]="\uffff";
data[3108]="\uffff";
data[3109]="\uffff";
data[3110]="\uffff";
data[3111]="\uffff";
data[3112]="\uffff";
data[3113]="\uffff";
data[3114]="\uffff";
data[3115]="\uffff";
data[3116]="\uffff";
data[3117]="\uffff";
data[3118]="\uffff";
data[3119]="\uffff";
data[3120]="\uffff";
data[3121]="\uffff";
data[3122]="\uffff";
data[3123]="\uffff";
data[3124]="\uffff";
data[3125]="\uffff";
data[3126]="\uffff";
data[3127]="\uffff";
data[3128]="\uffff";
data[3129]="\uffff";
data[3130]="\uffff";
data[3131]="\uffff";
data[3132]="\uffff";
data[3133]="\uffff";
data[3134]="\uffff";
data[3135]="\uffff";
data[3136]="\uffff";
data[3137]="\uffff";
data[3138]="\uffff";
data[3139]="\uffff";
data[3140]="\uffff";
data[3141]="\uffff";
data[3142]="\uffff";
data[3143]="\uffff";
data[3144]="\uffff";
data[3145]="\uffff";
data[3146]="\uffff";
data[3147]="\uffff";
data[3148]="\uffff";
data[3149]="\uffff";
data[3150]="\uffff";
data[3151]="\uffff";
data[3152]="\uffff";
data[3153]="\uffff";
data[3154]="\uffff";
data[3155]="\uffff";
data[3156]="\uffff";
data[3157]="\uffff";
data[3158]="\uffff";
data[3159]="\uffff";
data[3160]="\uffff";
data[3161]="\uffff";
data[3162]="\uffff";
data[3163]="\uffff";
data[3164]="\uffff";
data[3165]="\uffff";
data[3166]="\uffff";
data[3167]="\uffff";
data[3168]="\uffff";
data[3169]="\uffff";
data[3170]="\uffff";
data[3171]="\uffff";
data[3172]="\uffff";
data[3173]="\uffff";
data[3174]="\uffff";
data[3175]="\uffff";
data[3176]="\uffff";
data[3177]="\uffff";
data[3178]="\uffff";
data[3179]="\uffff";
data[3180]="\uffff";
data[3181]="\uffff";
data[3182]="\uffff";
data[3183]="\uffff";
data[3184]="\uffff";
data[3185]="\uffff";
data[3186]="\uffff";
data[3187]="\uffff";
data[3188]="\uffff";
data[3189]="\uffff";
data[3190]="\uffff";
data[3191]="\uffff";
data[3192]="\uffff";
data[3193]="\uffff";
data[3194]="\uffff";
data[3195]="\uffff";
data[3196]="\uffff";
data[3197]="\uffff";
data[3198]="\uffff";
data[3199]="\uffff";
data[3200]="\uffff";
data[3201]="\uffff";
data[3202]="\uffff";
data[3203]="\uffff";
data[3204]="\uffff";
data[3205]="\uffff";
data[3206]="\uffff";
data[3207]="\uffff";
data[3208]="\uffff";
data[3209]="\uffff";
data[3210]="\uffff";
data[3211]="\uffff";
data[3212]="\uffff";
data[3213]="\uffff";
data[3214]="\uffff";
data[3215]="\uffff";
data[3216]="\uffff";
data[3217]="\uffff";
data[3218]="\uffff";
data[3219]="\uffff";
data[3220]="\uffff";
data[3221]="\uffff";
data[3222]="\uffff";
data[3223]="\uffff";
data[3224]="\uffff";
data[3225]="\uffff";
data[3226]="\uffff";
data[3227]="\uffff";
data[3228]="\uffff";
data[3229]="\uffff";
data[3230]="\uffff";
data[3231]="\uffff";
data[3232]="\uffff";
data[3233]="\uffff";
data[3234]="\uffff";
data[3235]="\uffff";
data[3236]="\uffff";
data[3237]="\uffff";
data[3238]="\uffff";
data[3239]="\uffff";
data[3240]="\uffff";
data[3241]="\uffff";
data[3242]="\uffff";
data[3243]="\uffff";
data[3244]="\uffff";
data[3245]="\uffff";
data[3246]="\uffff";
data[3247]="\uffff";
data[3248]="\uffff";
data[3249]="\uffff";
data[3250]="\uffff";
data[3251]="\uffff";
data[3252]="\uffff";
data[3253]="\uffff";
data[3254]="\uffff";
data[3255]="\uffff";
data[3256]="\uffff";
data[3257]="\uffff";
data[3258]="\uffff";
data[3259]="\uffff";
data[3260]="\uffff";
data[3261]="\uffff";
data[3262]="\uffff";
data[3263]="\uffff";
data[3264]="\uffff";
data[3265]="\uffff";
data[3266]="\uffff";
data[3267]="\uffff";
data[3268]="\uffff";
data[3269]="\uffff";
data[3270]="\uffff";
data[3271]="\uffff";
data[3272]="\uffff";
data[3273]="\uffff";
data[3274]="\uffff";
data[3275]="\uffff";
data[3276]="\uffff";
data[3277]="\uffff";
data[3278]="\uffff";
data[3279]="\uffff";
data[3280]="\uffff";
data[3281]="\uffff";
data[3282]="\uffff";
data[3283]="\uffff";
data[3284]="\uffff";
data[3285]="\uffff";
data[3286]="\uffff";
data[3287]="\uffff";
data[3288]="\uffff";
data[3289]="\uffff";
data[3290]="\uffff";
data[3291]="\uffff";
data[3292]="\uffff";
data[3293]="\uffff";
data[3294]="\uffff";
data[3295]="\uffff";
data[3296]="\uffff";
data[3297]="\uffff";
data[3298]="\uffff";
data[3299]="\uffff";
data[3300]="\uffff";
data[3301]="\uffff";
data[3302]="\uffff";
data[3303]="\uffff";
data[3304]="\uffff";
data[3305]="\uffff";
data[3306]="\uffff";
data[3307]="\uffff";
data[3308]="\uffff";
data[3309]="\uffff";
data[3310]="\uffff";
data[3311]="\uffff";
data[3312]="\uffff";
data[3313]="\uffff";
data[3314]="\uffff";
data[3315]="\uffff";
data[3316]="\uffff";
data[3317]="\uffff";
data[3318]="\uffff";
data[3319]="\uffff";
data[3320]="\uffff";
data[3321]="\uffff";
data[3322]="\uffff";
data[3323]="\uffff";
data[3324]="\uffff";
data[3325]="\uffff";
data[3326]="\uffff";
data[3327]="\uffff";
data[3328]="\uffff";
data[3329]="\uffff";
data[3330]="\uffff";
data[3331]="\uffff";
data[3332]="\uffff";
data[3333]="\uffff";
data[3334]="\uffff";
data[3335]="\uffff";
data[3336]="\uffff";
data[3337]="\uffff";
data[3338]="\uffff";
data[3339]="\uffff";
data[3340]="\uffff";
data[3341]="\uffff";
data[3342]="\uffff";
data[3343]="\uffff";
data[3344]="\uffff";
data[3345]="\uffff";
data[3346]="\uffff";
data[3347]="\uffff";
data[3348]="\uffff";
data[3349]="\uffff";
data[3350]="\uffff";
data[3351]="\uffff";
data[3352]="\uffff";
data[3353]="\uffff";
data[3354]="\uffff";
data[3355]="\uffff";
data[3356]="\uffff";
data[3357]="\uffff";
data[3358]="\uffff";
data[3359]="\uffff";
data[3360]="\uffff";
data[3361]="\uffff";
data[3362]="\uffff";
data[3363]="\uffff";
data[3364]="\uffff";
data[3365]="\uffff";
data[3366]="\uffff";
data[3367]="\uffff";
data[3368]="\uffff";
data[3369]="\uffff";
data[3370]="\uffff";
data[3371]="\uffff";
data[3372]="\uffff";
data[3373]="\uffff";
data[3374]="\uffff";
data[3375]="\uffff";
data[3376]="\uffff";
data[3377]="\uffff";
data[3378]="\uffff";
data[3379]="\uffff";
data[3380]="\uffff";
data[3381]="\uffff";
data[3382]="\uffff";
data[3383]="\uffff";
data[3384]="\uffff";
data[3385]="\uffff";
data[3386]="\uffff";
data[3387]="\uffff";
data[3388]="\uffff";
data[3389]="\uffff";
data[3390]="\uffff";
data[3391]="\uffff";
data[3392]="\uffff";
data[3393]="\uffff";
data[3394]="\uffff";
data[3395]="\uffff";
data[3396]="\uffff";
data[3397]="\uffff";
data[3398]="\uffff";
data[3399]="\uffff";
data[3400]="\uffff";
data[3401]="\uffff";
data[3402]="\uffff";
data[3403]="\uffff";
data[3404]="\uffff";
data[3405]="\uffff";
data[3406]="\uffff";
data[3407]="\uffff";
data[3408]="\uffff";
data[3409]="\uffff";
data[3410]="\uffff";
data[3411]="\uffff";
data[3412]="\uffff";
data[3413]="\uffff";
data[3414]="\uffff";
data[3415]="\uffff";
data[3416]="\uffff";
data[3417]="\uffff";
data[3418]="\uffff";
data[3419]="\uffff";
data[3420]="\uffff";
data[3421]="\uffff";
data[3422]="\uffff";
data[3423]="\uffff";
data[3424]="\uffff";
data[3425]="\uffff";
data[3426]="\uffff";
data[3427]="\uffff";
data[3428]="\uffff";
data[3429]="\uffff";
data[3430]="\uffff";
data[3431]="\uffff";
data[3432]="\uffff";
data[3433]="\uffff";
data[3434]="\uffff";
data[3435]="\uffff";
data[3436]="\uffff";
data[3437]="\uffff";
data[3438]="\uffff";
data[3439]="\uffff";
data[3440]="\uffff";
data[3441]="\uffff";
data[3442]="\uffff";
data[3443]="\uffff";
data[3444]="\uffff";
data[3445]="\uffff";
data[3446]="\uffff";
data[3447]="\uffff";
data[3448]="\uffff";
data[3449]="\uffff";
data[3450]="\u000f";
data[3984]="\uffff";
data[3985]="\uffff";
data[3986]="\uffff";
data[3987]="\uffff";
data[3988]="\uffff";
data[3989]="\uffff";
data[3990]="\uffff";
data[3991]="\uffff";
data[3992]="\uffff";
data[3993]="\uffff";
data[3994]="\uffff";
data[3995]="\uffff";
data[3996]="\uffff";
data[3997]="\uffff";
data[3998]="\uffff";
data[3999]="\uffff";
data[4000]="\uffff";
data[4001]="\uffff";
data[4002]="\u3fff";
data[4016]="";
data[4017]="\u80f8";
data[4018]="\ufdff";
data[4019]="\u5f7f";
data[4020]="\uffdb";
data[4021]="\uffff";
data[4022]="\uffff";
data[4023]="\uffff";
data[4024]="\uffff";
data[4025]="\uffff";
data[4026]="\uffff";
data[4027]="\u0003";
data[4029]="\ufff8";
data[4030]="\uffff";
data[4031]="\uffff";
data[4032]="\uffff";
data[4033]="\uffff";
data[4034]="\uffff";
data[4035]="\uffff";
data[4036]="\uffff";
data[4037]="\uffff";
data[4038]="\uffff";
data[4039]="\uffff";
data[4040]="\uffff";
data[4041]="\uffff";
data[4042]="\uffff";
data[4043]="\uffff";
data[4044]="\uffff";
data[4045]="\uffff";
data[4046]="\uffff";
data[4047]="\uffff";
data[4048]="\uffff";
data[4049]="\uffff";
data[4050]="\uffff";
data[4051]="\u3fff";
data[4053]="\uffff";
data[4054]="\uffff";
data[4055]="\uffff";
data[4056]="\uffff";
data[4057]="\ufffc";
data[4058]="\uffff";
data[4059]="\uffff";
data[4060]="\u00ff";
data[4063]="\u0fff";
data[4071]="\uffd7";
data[4072]="\uffff";
data[4073]="\uffff";
data[4074]="\uffff";
data[4075]="\uffff";
data[4076]="\uffff";
data[4077]="\uffff";
data[4078]="\uffff";
data[4079]="\u1fff";
data[4082]="\ufffe";
data[4083]="\u07ff";
data[4084]="\ufffe";
data[4085]="\u07ff";
data[4086]="\uffc0";
data[4087]="\uffff";
data[4088]="\uffff";
data[4089]="\uffff";
data[4090]="\uffff";
data[4091]="\u7fff";
data[4092]="\ufcfc";
data[4093]="\u1cfc";
data[4100]="\ufffe";
data[4101]="\u07ff";
data[4102]="\ufffe";
data[4103]="\u07ff";
data[4106]="\u0400";
data[4107]="\u0420";
data[4108]="\uffff";
data[4109]="\uff7f";
data[4110]="\uffff";
data[4111]="\uff7f";
data[4112]="\uffff";
data[4113]="\uffff";
data[4114]="\uffff";
data[4115]="\uffff";
data[4116]="\uffff";
data[4117]="\uffff";
data[4118]="\uffff";
data[4119]="\uffff";
data[4120]="\uffff";
data[4121]="\uffff";
data[4122]="\uffff";
data[4123]="\uffff";
data[4124]="\uffff";
data[4125]="\uffff";
data[4126]="\uffff";
data[4127]="\ufc3f";
data[4128]="\uffff";
data[4129]="\u00ff";
data[4133]="\uffff";
data[4134]="\uffff";
data[4135]="\uffff";
data[4136]="\uffff";
data[4137]="\uffff";
data[4138]="\u01ff";
data[4139]="\uf9ff";
data[4140]="\u0003";
data[4141]="\u0003";
data[4142]="\u001f";
data[4151]="\u0400";
data[4152]="\ud740";
data[4153]="\uffff";
data[4154]="\ufffb";
data[4155]="\uffff";
data[4156]="\u7fff";
data[4157]="\u547f";
data[4158]="\u00fd";
}, 1);

Clazz.newMeth(C$, 'white_f$', function () {
var data=Clazz.array(Character.TYPE, [4159]);
C$.white=Clazz.new_(C$.c$$CA,[data]);
data[0]="\u3e00";
data[1]="\uf000";
data[2]="\u0001";
data[512]="\u0fff";
data[514]="\u0300";
data[768]="\u0001";
data[4096]="\u3e00";
data[4097]="\uf000";
data[4098]="\u0001";
}, 1);

Clazz.newMeth(C$, 'punct_f$', function () {
var data=Clazz.array(Character.TYPE, [4159]);
C$.punct=Clazz.new_(C$.c$$CA,[data]);
data[2]="\uf7ee";
data[3]="\u8c00";
data[4]="\u0001";
data[5]="\ub800";
data[7]="\u2800";
data[10]="\u2802";
data[11]="\u8880";
data[55]="\u4030";
data[56]="\u0080";
data[85]="\ufc00";
data[88]="\u0200";
data[91]="\u4000";
data[92]="\t";
data[95]="\u0018";
data[96]="\u1000";
data[97]="\u8800";
data[102]="\u3c00";
data[109]="\u0010";
data[150]="0";
data[151]="\u0001";
data[226]="\u8000";
data[229]="\u0c00";
data[234]="\u8000";
data[240]="\ufff0";
data[241]="\u0007";
data[243]="\u3c00";
data[248]=" ";
data[271]="\u0800";
data[513]="\uffff";
data[514]="\u00ff";
data[515]="\uffff";
data[516]="o";
data[519]="\u6000";
data[520]="\u6000";
data[562]="\u0600";
data[768]="\uff4e";
data[769]="\ufff3";
data[771]="\u0001";
data[783]="\u0800";
data[4051]="\uc000";
data[4067]="\uffff";
data[4068]="\ufe1f";
data[4069]="\ufff7";
data[4070]="\u0d0b";
data[4080]="\uf7ee";
data[4081]="\u8c00";
data[4082]="\u0001";
data[4083]="\ub800";
data[4085]="\u2800";
data[4086]=">";
data[4098]="\uf7ee";
data[4099]="\u8c00";
data[4100]="\u0001";
data[4101]="\ub800";
data[4103]="\u2800";
data[4106]="\u2802";
data[4107]="\u8880";
data[4151]="\u4030";
data[4152]="\u0080";
}, 1);
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeDigit", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && $I$(1,"isDecimalDigit$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RegHolder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.me=null;
this.prev=null;
},1);

C$.$fields$=[['O',['me','com.stevesoft.pat.Regex','prev','com.stevesoft.pat.RegHolder']]]

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInf','com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StrPos");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.esc="\\";
},1);

C$.$fields$=[['Z',['dontMatch','eos'],'C',['esc','c'],'I',['pos'],'S',['s']]]

Clazz.newMeth(C$, 'pos$', function () {
return this.pos;
});

Clazz.newMeth(C$, 'thisChar$', function () {
return this.c;
});

Clazz.newMeth(C$, 'eos$', function () {
return this.eos;
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_StrPos', function (sp) {
;C$.$init$.apply(this);
this.dup$com_stevesoft_pat_StrPos(sp);
}, 1);

Clazz.newMeth(C$, 'dup$com_stevesoft_pat_StrPos', function (sp) {
this.s=sp.s;
this.pos=sp.pos;
this.c=sp.c;
this.dontMatch=sp.dontMatch;
this.eos=sp.eos;
});

Clazz.newMeth(C$, 'c$$S$I', function (s, pos) {
;C$.$init$.apply(this);
this.s=s;
this.pos=pos - 1;
this.inc$();
}, 1);

Clazz.newMeth(C$, 'inc$', function () {
this.pos++;
if (this.pos >= this.s.length$()) {
this.eos=true;
return this;
}this.eos=false;
this.c=this.s.charAt$I(this.pos);
if (this.c == this.esc && this.pos + 1 < this.s.length$() ) {
this.pos++;
this.c=this.s.charAt$I(this.pos);
if (this.c != this.esc) {
this.dontMatch=true;
} else {
this.dontMatch=false;
}} else {
this.dontMatch=false;
}return this;
});

Clazz.newMeth(C$, 'match$C', function (ch) {
if (this.dontMatch || this.eos ) {
return false;
}return this.c == ch;
});

Clazz.newMeth(C$, 'escMatch$C', function (ch) {
if (!this.dontMatch || this.eos ) {
return false;
}return this.c == ch;
});

Clazz.newMeth(C$, 'escaped$', function () {
return this.dontMatch;
});

Clazz.newMeth(C$, 'incMatch$S', function (st) {
var sp=Clazz.new_(C$.c$$com_stevesoft_pat_StrPos,[this]);
var i;
for (i=0; i < st.length$(); i++) {
if (!sp.match$C(st.charAt$I(i))) {
return false;
}sp.inc$();
}
this.dup$com_stevesoft_pat_StrPos(sp);
return true;
});

Clazz.newMeth(C$, 'getPatInt$', function () {
if (this.incMatch$S("inf")) {
return Clazz.new_($I$(1,1));
}var i;
var cnt=0;
var sp=Clazz.new_(C$.c$$com_stevesoft_pat_StrPos,[this]);
for (i=0; !sp.eos && sp.c >= "0"  && sp.c <= "9" ; i++) {
cnt=10 * cnt + sp.c.$c() - 48;
sp.inc$();
}
if (i == 0) {
return null;
}this.dup$com_stevesoft_pat_StrPos(sp);
return Clazz.new_($I$(2,1).c$$I,[cnt]);
});

Clazz.newMeth(C$, 'getString$', function () {
return this.s;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.SubMark']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OrMark", null, 'com.stevesoft.pat.Or');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sm=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['I',['id'],'O',['sm','com.stevesoft.pat.SubMark']]]

Clazz.newMeth(C$, 'c$$I', function (i) {
Clazz.super_(C$, this);
this.sm.om=this;
this.id=i;
}, 1);

Clazz.newMeth(C$, 'leftForm$', function () {
return "(";
});

Clazz.newMeth(C$, 'getNext$', function () {
return this.sm;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
this.sm.next=C$.superclazz.prototype.getNext$.apply(this, []);
if (pt.marks == null ) {
var n2=2 * pt.nMarks + 2;
pt.marks=Clazz.array(Integer.TYPE, [n2]);
for (var i=0; i < n2; i++) {
pt.marks[i]=-1;
}
}pt.marks[this.id]=pos;
var ret=C$.superclazz.prototype.matchInternal$I$com_stevesoft_pat_Pthings.apply(this, [pos, pt]);
if (ret < 0) {
pt.marks[this.id]=-1;
} else if (pt.marks[this.id] > pt.marks[this.id + pt.nMarks]) {
var swap=pt.marks[this.id];
pt.marks[this.id]=pt.marks[this.id + pt.nMarks] + 1;
pt.marks[this.id + pt.nMarks]=swap + 1;
}return ret;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var om=Clazz.new_(C$.c$$I,[this.id]);
h.put$O$O(om, om);
h.put$O$O(this, om);
for (var i=0; i < this.v.size$(); i++) {
om.v.addElement$O((this.v.elementAt$I(i)).clone$java_util_Hashtable(h));
}
return om;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NUnicodeWhite", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && !$I$(1,"isWhite$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CodeVal");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['code'],'I',['pos']]]

Clazz.newMeth(C$, 'c$$I$C', function (p, c) {
;C$.$init$.apply(this);
this.pos=p;
this.code=c;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "(" + this.pos + "," + this.code + ")" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeUpper", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && this.isUpper$C(s.charAt$I(from))  ? to : -1;
});

Clazz.newMeth(C$, 'isUpper$C', function (c) {
return c == $I$(2).toUpperCase$C(c) && c != $I$(2).toLowerCase$C(c) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "StringLike");
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInf']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "patInt");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['inf'],'I',['i']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.i=0;
this.inf=false;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (init) {
;C$.$init$.apply(this);
this.i=init;
this.inf=false;
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt', function (p) {
;C$.$init$.apply(this);
this.i=p.i;
this.inf=p.inf;
}, 1);

Clazz.newMeth(C$, 'setInf$Z', function (b) {
this.inf=b;
if (b) {
this.i=2147483647;
}});

Clazz.newMeth(C$, 'inc$', function () {
if (!this.inf) {
this.i++;
}});

Clazz.newMeth(C$, 'dec$', function () {
if (!this.inf) {
this.i--;
}});

Clazz.newMeth(C$, 'lessEq$com_stevesoft_pat_patInt', function (j) {
return !this.inf && (j.inf || this.i <= j.i ) ;
});

Clazz.newMeth(C$, 'equals$com_stevesoft_pat_patInt', function (j) {
return !j.inf && !this.inf && this.i == j.i  ;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.inf) {
return "";
} else {
return "" + this.i;
}});

Clazz.newMeth(C$, 'pluseq$com_stevesoft_pat_patInt', function (p) {
if (this.inf || p.inf ) {
this.setInf$Z(true);
} else {
this.i+=p.i;
}return this;
});

Clazz.newMeth(C$, 'mul$com_stevesoft_pat_patInt', function (p) {
if (this.inf || p.inf ) {
return Clazz.new_($I$(1,1));
}return Clazz.new_(C$.c$$I,[this.i * p.i]);
});

Clazz.newMeth(C$, 'mineq$com_stevesoft_pat_patInt', function (p) {
if (p.inf) {
return this;
}if (this.inf) {
this.i=p.i;
} else if (p.i < this.i) {
this.i=p.i;
}this.setInf$Z(false);
return this;
});

Clazz.newMeth(C$, 'maxeq$com_stevesoft_pat_patInt', function (p) {
if (this.inf || p.inf ) {
this.setInf$Z(true);
return this;
}if (p.i > this.i) {
this.i=p.i;
}return this;
});

Clazz.newMeth(C$, 'finite$', function () {
return !this.inf;
});

Clazz.newMeth(C$, 'intValue$', function () {
return this.inf ? 2147483647 : this.i;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeW", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
if (from >= s.length$()) {
return -1;
}var c=s.charAt$I(from);
return ($I$(1).isAlphabetic$C(c) || $I$(1).isDecimalDigit$C(c) || c == "_"  ) ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SkipBMH", null, 'com.stevesoft.pat.Skip');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.MAX_CHAR=64;
this.skip=Clazz.array(Character.TYPE, [64]);
this.jump_ahead=0;
},1);

C$.$fields$=[['C',['uc','lc','tc','x'],'I',['MAX_CHAR','sm1','jump_ahead'],'O',['skip','char[]']]]

Clazz.newMeth(C$, 'exact$C', function (c) {
return (this.ign && this.anyc$C(c) ) || c == this.x ;
});

Clazz.newMeth(C$, 'anyc$C', function (c) {
return c == this.uc || c == this.lc  || c == this.tc ;
});

Clazz.newMeth(C$, 'c$$S$Z', function (pt, ign) {
C$.c$$S$Z$I.apply(this, [pt, ign, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (pt) {
C$.c$$S$Z$I.apply(this, [pt, false, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$I', function (pt, ign, offset) {
;C$.superclazz.c$$S$Z$I.apply(this,[pt, ign, offset]);C$.$init$.apply(this);
for (var k=0; k < 64; k++) {
this.skip[k]=String.fromCharCode(this.src.length$());
}
this.sm1=this.src.length$() - 1;
this.x=this.src.charAt$I(this.sm1);
this.uc=$I$(1).toUpperCase$C(this.x);
this.lc=$I$(1).toLowerCase$C(this.x);
this.tc=$I$(1).toTitleCase$C(this.x);
for (var k=0; k < this.src.length$() - 1; k++) {
var x_=this.src.charAt$I(k);
if (ign) {
var uc_=$I$(1).toUpperCase$C(x_);
var lc_=$I$(1).toLowerCase$C(x_);
var tc_=$I$(1).toTitleCase$C(x_);
this.skip[uc_.$c() & (63)]=String.fromCharCode((this.src.length$() - k - 1 ));
this.skip[lc_.$c() & (63)]=String.fromCharCode((this.src.length$() - k - 1 ));
this.skip[tc_.$c() & (63)]=String.fromCharCode((this.src.length$() - k - 1 ));
} else {
this.skip[x_.$c() & (63)]=String.fromCharCode((this.src.length$() - k - 1 ));
}}
this.jump_ahead=this.src.length$() - 1;
for (var k=0; k < this.src.length$() - 1; k++) {
var y=this.src.charAt$I(this.sm1 - k - 1 );
if (this.exact$C(y)) {
this.jump_ahead=k;
break;
}}
}, 1);

Clazz.newMeth(C$, 'searchRegion$S$I$I', function (s, start, end) {
return this.find$S$I$I(s, start, end);
});

Clazz.newMeth(C$, 'searchFrom$S$I', function (s, start) {
return this.find$S$I$I(s, start, s.length$());
});

Clazz.newMeth(C$, 'search$S', function (s) {
return this.find$S$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'find$S$I$I', function (s, start, end) {
start+=this.offset + this.sm1;
var vend=$I$(2,"min$I$I",[s.length$() - 1, end + this.sm1 + this.offset ]);
var k;
var vend1=vend - this.jump_ahead;
if (this.ign) {
for (k=start; k <= vend1; k+=this.skip[(s.charCodeAt$I(k)) & (63)].$c()) {
if (this.anyc$C(s.charAt$I(k))) {
if ($I$(1).regionMatches$S$Z$I$S$I$I(this.src, this.ign, 0, s, k - this.sm1, this.sm1)) {
return k - this.sm1 - this.offset ;
}k+=this.jump_ahead;
}}
for (; k <= vend; k+=this.skip[(s.charCodeAt$I(k)) & (63)].$c()) {
if (this.anyc$C(s.charAt$I(k))) {
if ($I$(1).regionMatches$S$Z$I$S$I$I(this.src, this.ign, 0, s, k - this.sm1, this.sm1)) {
return k - this.sm1 - this.offset ;
}k+=this.jump_ahead;
if (k > vend) {
return -1;
}}}
} else {
for (k=start; k <= vend1; k+=this.skip[(s.charCodeAt$I(k)) & (63)].$c()) {
if (this.x == s.charAt$I(k)) {
if ($I$(1).regionMatches$S$Z$I$S$I$I(this.src, false, 0, s, k - this.sm1, this.sm1)) {
return k - this.sm1 - this.offset ;
}k+=this.jump_ahead;
}}
for (; k <= vend; k+=this.skip[(s.charCodeAt$I(k)) & (63)].$c()) {
if (this.x == s.charAt$I(k)) {
if ($I$(1).regionMatches$S$Z$I$S$I$I(this.src, false, 0, s, k - this.sm1, this.sm1)) {
return k - this.sm1 - this.offset ;
}k+=this.jump_ahead;
if (k > vend) {
return -1;
}}}
}return -1;
});

Clazz.newMeth(C$, 'find$com_stevesoft_pat_StringLike$I$I', function (s, start, end) {
if (Clazz.instanceOf(s, "com.stevesoft.pat.wrap.StringWrap")) {
return this.find$S$I$I(s.toString(), start, end);
}start+=this.offset + this.sm1;
var vend=$I$(2,"min$I$I",[s.length$() - 1, end + this.sm1 + this.offset ]);
var k;
var vend1=vend - this.jump_ahead;
if (this.ign) {
for (k=start; k <= vend1; k+=this.skip[(s.charAt$I(k)).$c() & (63)].$c()) {
if (this.anyc$C(s.charAt$I(k))) {
if ($I$(1).regionMatches$S$Z$I$com_stevesoft_pat_StringLike$I$I(this.src, this.ign, 0, s, k - this.sm1, this.sm1)) {
return k - this.sm1 - this.offset ;
}k+=this.jump_ahead;
}}
for (; k <= vend; k+=this.skip[(s.charAt$I(k)).$c() & (63)].$c()) {
if (this.anyc$C(s.charAt$I(k))) {
if ($I$(1).regionMatches$S$Z$I$com_stevesoft_pat_StringLike$I$I(this.src, this.ign, 0, s, k - this.sm1, this.sm1)) {
return k - this.sm1 - this.offset ;
}k+=this.jump_ahead;
if (k > vend) {
return -1;
}}}
} else {
for (k=start; k <= vend1; k+=this.skip[(s.charAt$I(k)).$c() & (63)].$c()) {
if (this.x == s.charAt$I(k)) {
if ($I$(1).regionMatches$S$Z$I$com_stevesoft_pat_StringLike$I$I(this.src, false, 0, s, k - this.sm1, this.sm1)) {
return k - this.sm1 - this.offset ;
}k+=this.jump_ahead;
}}
for (; k <= vend; k+=this.skip[(s.charAt$I(k)).$c() & (63)].$c()) {
if (this.x == s.charAt$I(k)) {
if ($I$(1).regionMatches$S$Z$I$com_stevesoft_pat_StringLike$I$I(this.src, false, 0, s, k - this.sm1, this.sm1)) {
return k - this.sm1 - this.offset ;
}k+=this.jump_ahead;
if (k > vend) {
return -1;
}}}
}return -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodePunct", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && $I$(1,"isPunct$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NUnicodeDigit", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && !$I$(1,"isDecimalDigit$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BackG", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['C',['c','altc','altc2'],'I',['mask']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
return pos == pt.lastPos ? this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt) : -1;
});

Clazz.newMeth(C$, 'toString', function () {
return "\\G" + this.nextString$();
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FastMulti", null, 'com.stevesoft.pat.PatternSub');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.matchFewest=false;
this.step=-1;
},1);

C$.$fields$=[['Z',['matchFewest'],'I',['step'],'O',['fewestMatches','com.stevesoft.pat.patInt','+mostMatches']]]

Clazz.newMeth(C$, 'minChars$', function () {
return this.sub.countMinChars$().mul$com_stevesoft_pat_patInt(this.fewestMatches);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return this.sub.countMaxChars$().mul$com_stevesoft_pat_patInt(this.mostMatches);
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern', function (a, b, p) {
Clazz.super_(C$, this);
if (p == null ) {
$I$(1).endItAll$S("Null length pattern followed by *, +, or other Multi.");
}this.fewestMatches=a;
this.mostMatches=b;
this.sub=p;
this.step=p.countMinChars$().intValue$();
this.sub.setParent$com_stevesoft_pat_Pattern(null);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.sub.toString() + "{" + this.fewestMatches + "," + this.mostMatches + "}" + (this.matchFewest ? "?" : "") + "(?# <= fast multi)" + this.nextString$() ;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var m=-1;
var i=pos;
var endstr=pt.src.length$() - this.step;
var matches=Clazz.new_($I$(2,1).c$$I,[0]);
if (this.matchFewest) {
if (this.fewestMatches.lessEq$com_stevesoft_pat_patInt(matches)) {
var ii=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ii >= 0) {
return ii;
}}while (i >= 0 && i <= endstr ){
i=this.sub.matchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
matches.inc$();
if (this.fewestMatches.lessEq$com_stevesoft_pat_patInt(matches)) {
var ii=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ii >= 0) {
return ii;
}}if (matches.equals$com_stevesoft_pat_patInt(this.mostMatches)) {
return -1;
}}}
return -1;
}var nMatches=0;
while (this.fewestMatches.intValue$() > nMatches){
i=this.sub.matchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
nMatches++;
} else {
return -1;
}}
m=i;
if (this.mostMatches.finite$()) {
while (nMatches < this.mostMatches.intValue$()){
i=this.sub.matchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
m=i;
nMatches++;
} else {
break;
}}
} else {
while (true){
i=this.sub.matchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
m=i;
nMatches++;
} else {
break;
}}
}while (m >= pos){
var r=this.nextMatch$I$com_stevesoft_pat_Pthings(m, pt);
if (r >= 0) {
return r;
}m-=this.step;
nMatches--;
if (nMatches < this.fewestMatches.intValue$()) {
return -1;
}}
return -1;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
try {
var fm=Clazz.new_(C$.c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[this.fewestMatches, this.mostMatches, this.sub.clone$java_util_Hashtable(h)]);
fm.matchFewest=this.matchFewest;
return fm;
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
return null;
} else {
throw rs;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeLower", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && this.isLower$C(s.charAt$I(from))  ? to : -1;
});

Clazz.newMeth(C$, 'isLower$C', function (c) {
return c != $I$(2).toUpperCase$C(c) && c == $I$(2).toLowerCase$C(c) ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StringRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
sb.append$S(this.s);
});

Clazz.newMeth(C$, 'toString1$', function () {
return this.s;
});

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$S,[this.s]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CodeRule", null, 'com.stevesoft.pat.SpecialRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.c="E";
},1);

C$.$fields$=[['C',['c']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$C', function (c) {
Clazz.super_(C$, this);
this.c=c;
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
sb.setMode$C(this.c);
});

Clazz.newMeth(C$, 'toString1$', function () {
return "\\" + this.c;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RegRes", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.marks=null;
this.didMatch_=false;
this.src=null;
this.charsMatched_=0;
this.matchFrom_=0;
this.numSubs_=0;
},1);

C$.$fields$=[['Z',['didMatch_'],'I',['charsMatched_','matchFrom_','numSubs_'],'O',['marks','int[]','src','com.stevesoft.pat.StringLike']]]

Clazz.newMeth(C$, 'getString$', function () {
return this.src.toString();
});

Clazz.newMeth(C$, 'getStringLike$', function () {
return this.src;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("match=" + this.matchedFrom$() + ":" + this.charsMatched$() );
if (!this.didMatch$()) {
return sb.toString();
}for (var i=0; i < this.numSubs$(); i++) {
var n=i + 1;
sb.append$S(" sub(" + n + ")=" + this.matchedFrom$I(n) + ":" + this.charsMatched$I(n) );
}
return sb.toString();
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_RegRes', function (r) {
;C$.$init$.apply(this);
this.copyOutOf$com_stevesoft_pat_RegRes(r);
}, 1);

Clazz.newMeth(C$, 'copyOutOf$com_stevesoft_pat_RegRes', function (r) {
if (r.marks == null ) {
this.marks=null;
} else {
try {
this.marks=Clazz.array(Integer.TYPE, [r.marks.length]);
for (var i=0; i < this.marks.length; i++) {
this.marks[i]=r.marks[i];
}
} catch (t) {
}
}this.didMatch_=r.didMatch_;
this.src=r.src;
this.charsMatched_=r.charsMatched_;
this.matchFrom_=r.matchFrom_;
this.numSubs_=r.numSubs_;
});

Clazz.newMeth(C$, 'clone$', function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_RegRes,[this]);
});

Clazz.newMeth(C$, 'equals$com_stevesoft_pat_RegRes', function (r) {
if (this.charsMatched_ != r.charsMatched_ || this.matchFrom_ != r.matchFrom_  || this.didMatch_ != r.didMatch_   || this.numSubs_ != r.numSubs_  || !this.src.unwrap$().equals$O(r.src.unwrap$()) ) {
return false;
}if (this.marks == null  && r.marks != null  ) {
return false;
}if (this.marks != null  && r.marks == null  ) {
return false;
}for (var i=1; i <= this.numSubs_; i++) {
if (this.matchedFrom$I(i) != r.matchedFrom$I(i)) {
return false;
} else if (this.charsMatched$I(i) != r.charsMatched$I(i)) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'stringMatched$', function () {
var mf=this.matchedFrom$();
var cm=this.charsMatched$();
return !this.didMatch_ || mf < 0  || cm < 0  ? null : this.src.substring$I$I(mf, mf + cm);
});

Clazz.newMeth(C$, 'matchedFrom$I', function (i) {
if (this.marks == null  || i > this.numSubs_ ) {
return -1;
}return this.marks[i];
});

Clazz.newMeth(C$, 'charsMatched$I', function (i) {
if (this.marks == null  || i > this.numSubs_  || !this.didMatch_ ) {
return -1;
}var mf=this.matchedFrom$I(i);
return mf < 0 ? -1 : this.marks[i + this.numSubs_] - this.matchedFrom$I(i);
});

Clazz.newMeth(C$, 'matchedTo$I', function (i) {
if (this.marks == null  || i > this.numSubs_  || !this.didMatch_ ) {
return -1;
}return this.marks[i + this.numSubs_];
});

Clazz.newMeth(C$, 'stringMatched$I', function (i) {
var mf=this.matchedFrom$I(i);
var cm=this.charsMatched$I(i);
return !this.didMatch_ || mf < 0  || cm < 0  ? null : this.src.substring$I$I(mf, mf + cm);
});

Clazz.newMeth(C$, 'left$', function () {
var mf=this.matchedFrom$();
return !this.didMatch_ || (mf < 0)  ? null : this.src.substring$I$I(0, mf);
});

Clazz.newMeth(C$, 'left$I', function (i) {
var mf=this.matchedFrom$I(i);
return !this.didMatch_ || (mf < 0)  ? null : this.src.substring$I$I(0, mf);
});

Clazz.newMeth(C$, 'right$', function () {
var mf=this.matchedFrom$();
var cm=this.charsMatched$();
return !this.didMatch_ || mf < 0  || cm < 0  ? null : this.src.substring$I$I(mf + cm, this.src.length$());
});

Clazz.newMeth(C$, 'right$I', function (i) {
var mf=this.matchedFrom$I(i);
var cm=this.charsMatched$I(i);
return !this.didMatch_ || mf < 0  || cm < 0  ? null : this.src.substring$I$I(mf + cm, this.src.length$());
});

Clazz.newMeth(C$, 'matchedFrom$', function () {
return !this.didMatch_ ? -1 : this.matchFrom_;
});

Clazz.newMeth(C$, 'charsMatched$', function () {
return !this.didMatch_ || this.matchFrom_ < 0  ? -1 : this.charsMatched_;
});

Clazz.newMeth(C$, 'matchedTo$', function () {
return !this.didMatch_ ? -1 : this.matchFrom_ + this.charsMatched_;
});

Clazz.newMeth(C$, 'numSubs$', function () {
return this.numSubs_;
});

Clazz.newMeth(C$, 'didMatch$', function () {
return this.didMatch_;
});

Clazz.newMeth(C$, 'matchFrom$', function () {
return this.matchedFrom$();
});

Clazz.newMeth(C$, 'substring$', function () {
return this.stringMatched$();
});

Clazz.newMeth(C$, 'matchFrom$I', function (i) {
return this.matchedFrom$I(i);
});

Clazz.newMeth(C$, 'substring$I', function (i) {
return this.stringMatched$I(i);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Regex", null, 'com.stevesoft.pat.RegRes', 'java.io.FilenameFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.thePattern=C$.none;
this.minMatch=Clazz.new_($I$(21,1).c$$I,[0]);
this.dontMatchInQuotes=false;
this.ignoreCase=false;
this.rep=null;
this.repr=null;
this.esc="\\";
this.pt=Clazz.new_($I$(22,1));
this.gFlagto=0;
this.gFlag=false;
this.sFlag=false;
this.mFlag=false;
this.p=null;
this.or=null;
},1);

C$.$fields$=[['Z',['dontMatchInQuotes','ignoreCase','gFlag','sFlag','mFlag'],'C',['esc'],'I',['gFlagto'],'O',['thePattern','com.stevesoft.pat.Pattern','minMatch','com.stevesoft.pat.patInt','rep','com.stevesoft.pat.ReplaceRule','repr','com.stevesoft.pat.Replacer','pt','com.stevesoft.pat.Pthings','gFlags','com.stevesoft.pat.StringLike','p','com.stevesoft.pat.Pattern','or','com.stevesoft.pat.Or','skipper','com.stevesoft.pat.Skip']]
,['Z',['defaultMFlag','dotDoesntMatchCR'],'I',['BackRefOffset'],'O',['none','com.stevesoft.pat.Pattern','validators','java.util.Hashtable','lasts','com.stevesoft.pat.StringLike','lastbs','java.util.BitSet']]]

Clazz.newMeth(C$, 'setDontMatchInQuotes$Z', function (b) {
this.dontMatchInQuotes=b;
});

Clazz.newMeth(C$, 'getDontMatchInQuotes$', function () {
return this.dontMatchInQuotes;
});

Clazz.newMeth(C$, 'setIgnoreCase$Z', function (b) {
this.ignoreCase=b;
});

Clazz.newMeth(C$, 'getIgnoreCase$', function () {
return this.ignoreCase;
});

Clazz.newMeth(C$, 'setDefaultMFlag$Z', function (mFlag) {
C$.defaultMFlag=mFlag;
}, 1);

Clazz.newMeth(C$, 'getDefaultMFlag$', function () {
return C$.defaultMFlag;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this);
try {
this.compile$S(s);
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
} else {
throw rs;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (s, rp) {
C$.c$$S.apply(this, [s]);
this.rep=$I$(23).perlCode$S(rp);
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_ReplaceRule', function (s, rp) {
C$.c$$S.apply(this, [s]);
this.rep=rp;
}, 1);

Clazz.newMeth(C$, 'setReplaceRule$S', function (rp) {
this.rep=$I$(23).perlCode$S(rp);
this.repr=null;
});

Clazz.newMeth(C$, 'setReplaceRule$com_stevesoft_pat_ReplaceRule', function (rp) {
this.rep=rp;
});

Clazz.newMeth(C$, 'isDefined$S', function (nm) {
return C$.validators.get$O(nm) != null ;
}, 1);

Clazz.newMeth(C$, 'undefine$S', function (nm) {
C$.validators.remove$O(nm);
}, 1);

Clazz.newMeth(C$, 'define$S$S$com_stevesoft_pat_Validator', function (nm, pat, v) {
v.pattern=pat;
C$.validators.put$O$O(nm, v);
}, 1);

Clazz.newMeth(C$, 'define$S$S', function (nm, pat) {
C$.validators.put$O$O(nm, pat);
}, 1);

Clazz.newMeth(C$, 'getReplaceRule$', function () {
return this.rep;
});

Clazz.newMeth(C$, '_getReplacer$', function () {
return this.repr == null  ? this.repr=Clazz.new_($I$(24,1)) : this.repr;
});

Clazz.newMeth(C$, 'getReplacer$', function () {
if (this.repr == null ) {
this.repr=Clazz.new_($I$(24,1));
}this.repr.rh.me=this;
this.repr.rh.prev=null;
return this.repr;
});

Clazz.newMeth(C$, 'replaceFirst$S', function (s) {
return this._getReplacer$().replaceFirstRegion$S$com_stevesoft_pat_Regex$I$I(s, this, 0, s.length$()).toString();
});

Clazz.newMeth(C$, 'replaceFirstFrom$S$I', function (s, pos) {
return this._getReplacer$().replaceFirstRegion$S$com_stevesoft_pat_Regex$I$I(s, this, pos, s.length$()).toString();
});

Clazz.newMeth(C$, 'replaceFirstRegion$S$I$I', function (s, start, end) {
return this._getReplacer$().replaceFirstRegion$S$com_stevesoft_pat_Regex$I$I(s, this, start, end).toString();
});

Clazz.newMeth(C$, 'replaceAll$S', function (s) {
return this._getReplacer$().replaceAllRegion$S$com_stevesoft_pat_Regex$I$I(s, this, 0, s.length$()).toString();
});

Clazz.newMeth(C$, 'replaceAll$com_stevesoft_pat_StringLike', function (s) {
return this._getReplacer$().replaceAllRegion$com_stevesoft_pat_StringLike$com_stevesoft_pat_Regex$I$I(s, this, 0, s.length$());
});

Clazz.newMeth(C$, 'replaceAllFrom$S$I', function (s, pos) {
return this._getReplacer$().replaceAllRegion$S$com_stevesoft_pat_Regex$I$I(s, this, pos, s.length$()).toString();
});

Clazz.newMeth(C$, 'replaceAllRegion$S$I$I', function (s, start, end) {
return this._getReplacer$().replaceAllRegion$S$com_stevesoft_pat_Regex$I$I(s, this, start, end).toString();
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Regex', function (r) {
;C$.superclazz.c$$com_stevesoft_pat_RegRes.apply(this,[r]);C$.$init$.apply(this);
this.dontMatchInQuotes=r.dontMatchInQuotes;
this.esc=r.esc;
this.ignoreCase=r.ignoreCase;
this.gFlag=r.gFlag;
if (r.rep == null ) {
this.rep=null;
} else {
this.rep=r.rep.clone$();
}this.thePattern=r.thePattern.clone$java_util_Hashtable(Clazz.new_($I$(4,1)));
this.minMatch=r.minMatch;
this.skipper=r.skipper;
}, 1);

Clazz.newMeth(C$, 'compile$S', function (prepat) {
var postpat=$I$(25).codify$S$Z(prepat, true);
var pat=postpat == null  ? prepat : postpat;
this.minMatch=null;
this.ignoreCase=false;
this.dontMatchInQuotes=false;
var mk=Clazz.new_($I$(26,1).c$$com_stevesoft_pat_Regex,[this]);
var offset=mk.val;
var newpat=pat;
this.thePattern=C$.none;
this.p=null;
this.or=null;
this.minMatch=Clazz.new_($I$(21,1).c$$I,[0]);
var sp=Clazz.new_($I$(27,1).c$$S$I,[pat, 0]);
if (sp.incMatch$S("(?e=")) {
var newEsc=sp.c;
sp.inc$();
if (sp.match$C(")")) {
newpat=C$.reEscape$S$C$C(pat.substring$I(6), newEsc, "\\");
}} else if (this.esc != "\\") {
newpat=C$.reEscape$S$C$C(pat, this.esc, "\\");
}this.thePattern=p$1._compile$S$com_stevesoft_pat_Rthings.apply(this, [newpat, mk]);
this.numSubs_=mk.val - offset;
mk.set$com_stevesoft_pat_Regex(this);
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (Clazz.instanceOf(o, "com.stevesoft.pat.Regex")) {
if (this.toString().equals$O(o.toString())) {
return C$.superclazz.prototype.equals$O.apply(this, [o]);
} else {
return false;
}} else {
return C$.superclazz.prototype.equals$O.apply(this, [o]);
}});

Clazz.newMeth(C$, 'clone$', function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_Regex,[this]);
});

Clazz.newMeth(C$, 'result$', function () {
return C$.superclazz.prototype.clone$.apply(this, []);
});

Clazz.newMeth(C$, 'prep$com_stevesoft_pat_StringLike', function (s) {
this.pt.lastPos=this.matchedTo$();
if (this.pt.lastPos < 0) {
this.pt.lastPos=0;
}if ((s == null  ? null : s.unwrap$()) !== (this.src == null  ? null : s.unwrap$()) ) {
this.pt.lastPos=0;
}this.src=s;
this.pt.dotDoesntMatchCR=C$.dotDoesntMatchCR && (!this.sFlag) ;
this.pt.mFlag=(!!(this.mFlag | C$.defaultMFlag));
this.pt.ignoreCase=this.ignoreCase;
this.pt.no_check=false;
if (this.pt.marks != null ) {
for (var i=0; i < this.pt.marks.length; i++) {
this.pt.marks[i]=-1;
}
}this.pt.marks=null;
this.pt.nMarks=this.numSubs_;
this.pt.src=s;
if (this.dontMatchInQuotes) {
C$.setCbits$com_stevesoft_pat_StringLike$com_stevesoft_pat_Pthings(s, this.pt);
} else {
this.pt.cbits=null;
}return this.pt;
});

Clazz.newMeth(C$, 'matchAt$S$I', function (s, start_pos) {
return this._search$S$I$I(s, start_pos, start_pos);
});

Clazz.newMeth(C$, 'matchAt$com_stevesoft_pat_StringLike$I', function (s, start_pos) {
return this._search$com_stevesoft_pat_StringLike$I$I(s, start_pos, start_pos);
});

Clazz.newMeth(C$, 'search$S', function (s) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(28).getString$S("exception.null_string_given_to_regex_search")]);
}return this._search$S$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'search$com_stevesoft_pat_StringLike', function (sl) {
if (sl == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(28).getString$S("exception.null_string_like_given_to_regex_search")]);
}return this._search$com_stevesoft_pat_StringLike$I$I(sl, 0, sl.length$());
});

Clazz.newMeth(C$, 'reverseSearch$S', function (s) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(28).getString$S("exception.null_string_given_to_regex_reverse_search")]);
}return this._reverseSearch$S$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'reverseSearch$com_stevesoft_pat_StringLike', function (sl) {
if (sl == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(28).getString$S("exception.null_string_like_given_to_regex_reverse_search")]);
}return this._reverseSearch$com_stevesoft_pat_StringLike$I$I(sl, 0, sl.length$());
});

Clazz.newMeth(C$, 'searchFrom$S$I', function (s, start) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(28).getString$S("exception.null_string_like_given_to_regex_search_from")]);
}return this._search$S$I$I(s, start, s.length$());
});

Clazz.newMeth(C$, 'searchFrom$com_stevesoft_pat_StringLike$I', function (s, start) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(28).getString$S("exception.null_string_like_given_to_regex_search_from")]);
}return this._search$com_stevesoft_pat_StringLike$I$I(s, start, s.length$());
});

Clazz.newMeth(C$, 'searchRegion$S$I$I', function (s, start, end) {
if (s == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(28).getString$S("exception.null_string_like_given_to_regex_search_region")]);
}return this._search$S$I$I(s, start, end);
});

Clazz.newMeth(C$, 'setGFlag$Z', function (b) {
this.gFlag=b;
});

Clazz.newMeth(C$, 'getGFlag$', function () {
return this.gFlag;
});

Clazz.newMeth(C$, 'getSFlag$', function () {
return this.sFlag;
});

Clazz.newMeth(C$, 'getMFlag$', function () {
return this.mFlag;
});

Clazz.newMeth(C$, '_search$S$I$I', function (s, start, end) {
return this._search$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(29,1).c$$S,[s]), start, end);
});

Clazz.newMeth(C$, '_search$com_stevesoft_pat_StringLike$I$I', function (s, start, end) {
if (this.gFlag && this.gFlagto > 0  && this.gFlags != null   && s.unwrap$() === this.gFlags.unwrap$()  ) {
start=this.gFlagto;
}this.gFlags=null;
var pt=this.prep$com_stevesoft_pat_StringLike(s);
var up=(this.minMatch == null  ? end : end - this.minMatch.i);
if (up < start && end >= start ) {
up=start;
}if (this.skipper == null ) {
for (var i=start; i <= up; i++) {
this.charsMatched_=this.thePattern.matchAt$com_stevesoft_pat_StringLike$I$com_stevesoft_pat_Pthings(s, i, pt);
if (this.charsMatched_ >= 0) {
this.matchFrom_=this.thePattern.mfrom;
this.marks=pt.marks;
this.gFlagto=this.matchFrom_ + this.charsMatched_;
this.gFlags=s;
return this.didMatch_=true;
}}
} else {
pt.no_check=true;
for (var i=start; i <= up; i++) {
i=this.skipper.find$com_stevesoft_pat_StringLike$I$I(this.src, i, up);
if (i < 0) {
this.charsMatched_=this.matchFrom_=-1;
return this.didMatch_=false;
}this.charsMatched_=this.thePattern.matchAt$com_stevesoft_pat_StringLike$I$com_stevesoft_pat_Pthings(s, i, pt);
if (this.charsMatched_ >= 0) {
this.matchFrom_=this.thePattern.mfrom;
this.marks=pt.marks;
this.gFlagto=this.matchFrom_ + this.charsMatched_;
this.gFlags=s;
return this.didMatch_=true;
}}
}return this.didMatch_=false;
});

Clazz.newMeth(C$, '_reverseSearch$S$I$I', function (s, start, end) {
return this._reverseSearch$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(29,1).c$$S,[s]), start, end);
});

Clazz.newMeth(C$, '_reverseSearch$com_stevesoft_pat_StringLike$I$I', function (s, start, end) {
if (this.gFlag && this.gFlagto > 0  && s.unwrap$() === this.gFlags.unwrap$()  ) {
end=this.gFlagto;
}this.gFlags=null;
var pt=this.prep$com_stevesoft_pat_StringLike(s);
for (var i=end; i >= start; i--) {
this.charsMatched_=this.thePattern.matchAt$com_stevesoft_pat_StringLike$I$com_stevesoft_pat_Pthings(s, i, pt);
if (this.charsMatched_ >= 0) {
this.matchFrom_=this.thePattern.mfrom;
this.marks=pt.marks;
this.gFlagto=this.matchFrom_ - 1;
this.gFlags=s;
return this.didMatch_=true;
}}
return this.didMatch_=false;
});

Clazz.newMeth(C$, 'setCbits$com_stevesoft_pat_StringLike$com_stevesoft_pat_Pthings', function (s, pt) {
if (s === C$.lasts ) {
pt.cbits=C$.lastbs;
return;
}var bs=Clazz.new_([s.length$()],$I$(30,1).c$$I);
var qc=" ";
var setBit=false;
for (var i=0; i < s.length$(); i++) {
if (setBit) {
bs.set$I(i);
}var c=s.charAt$I(i);
if (!setBit && c == "\"" ) {
qc=c;
setBit=true;
bs.set$I(i);
} else if (!setBit && c == "\'" ) {
qc=c;
setBit=true;
bs.set$I(i);
} else if (setBit && c == qc ) {
setBit=false;
} else if (setBit && c == "\\"  && i + 1 < s.length$() ) {
i++;
if (setBit) {
bs.set$I(i);
}}}
pt.cbits=C$.lastbs=bs;
C$.lasts=s;
}, 1);

Clazz.newMeth(C$, 'newRegex$', function () {
try {
return this.getClass$().getDeclaredConstructor$ClassA([]).newInstance$OA([]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException")){
var ie = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var iae = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"ReflectiveOperationException")){
var roe = e$$;
{
return null;
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'add$com_stevesoft_pat_Pattern', function (p2) {
if (this.p == null ) {
this.p=p2;
} else {
this.p.add$com_stevesoft_pat_Pattern(p2);
p2=this.p;
}});

Clazz.newMeth(C$, 'compile1$com_stevesoft_pat_StrPos$com_stevesoft_pat_Rthings', function (sp, mk) {
if (sp.match$C("[")) {
sp.inc$();
this.add$com_stevesoft_pat_Pattern(this.matchBracket$com_stevesoft_pat_StrPos(sp));
} else if (sp.match$C("|")) {
if (this.or == null ) {
this.or=Clazz.new_($I$(31,1));
}if (this.p == null ) {
this.p=Clazz.new_($I$(32,1));
}this.or.addOr$com_stevesoft_pat_Pattern(this.p);
this.p=null;
} else if (sp.incMatch$S("(?<")) {
var i=sp.getPatInt$();
if (i == null ) {
$I$(33,"endItAll$S",["No int after (?<"]);
}this.add$com_stevesoft_pat_Pattern(Clazz.new_([i.intValue$()],$I$(34,1).c$$I));
if (!sp.match$C(")")) {
$I$(33,"endItAll$S",["No ) after (?<"]);
}} else if (sp.incMatch$S("(?>")) {
var i=sp.getPatInt$();
if (i == null ) {
$I$(33,"endItAll$S",["No int after (?>"]);
}this.add$com_stevesoft_pat_Pattern(Clazz.new_([-i.intValue$()],$I$(34,1).c$$I));
if (!sp.match$C(")")) {
$I$(33,"endItAll$S",["No ) after (?<"]);
}} else if (sp.incMatch$S("(?@")) {
var op=sp.c;
sp.inc$();
var cl=sp.c;
sp.inc$();
if (!sp.match$C(")")) {
$I$(33,"endItAll$S",["(?@ does not have closing paren"]);
}this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(35,1).c$$C$C,[op, cl]));
} else if (sp.incMatch$S("(?#")) {
while (!sp.match$C(")")){
sp.inc$();
}
} else if (sp.dontMatch && sp.c == "w" ) {
var b=Clazz.new_($I$(36,1).c$$Z,[false]);
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["a", "z"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["A", "Z"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["0", "9"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["_"]));
this.add$com_stevesoft_pat_Pattern(b);
} else if (sp.dontMatch && sp.c == "G" ) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(39,1)));
} else if (sp.dontMatch && sp.c == "s" ) {
var b=Clazz.new_($I$(36,1).c$$Z,[false]);
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,[" "]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["\u0008", "\n"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\r"]));
this.add$com_stevesoft_pat_Pattern(b);
} else if (sp.dontMatch && sp.c == "d" ) {
var digit=Clazz.new_($I$(37,1).c$$C$C,["0", "9"]);
digit.printBrackets=true;
this.add$com_stevesoft_pat_Pattern(digit);
} else if (sp.dontMatch && sp.c == "W" ) {
var b=Clazz.new_($I$(36,1).c$$Z,[true]);
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["a", "z"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["A", "Z"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["0", "9"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["_"]));
this.add$com_stevesoft_pat_Pattern(b);
} else if (sp.dontMatch && sp.c == "S" ) {
var b=Clazz.new_($I$(36,1).c$$Z,[true]);
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,[" "]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["\u0008", "\n"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\r"]));
this.add$com_stevesoft_pat_Pattern(b);
} else if (sp.dontMatch && sp.c == "D" ) {
var b=Clazz.new_($I$(36,1).c$$Z,[true]);
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["0", "9"]));
this.add$com_stevesoft_pat_Pattern(b);
} else if (sp.dontMatch && sp.c == "B" ) {
var r=Clazz.new_(C$);
p$1._compile$S$com_stevesoft_pat_Rthings.apply(r, ["(?!\\b)", mk]);
this.add$com_stevesoft_pat_Pattern(r.thePattern);
} else if (this.isOctalString$com_stevesoft_pat_StrPos(sp)) {
var d=sp.c.$c() - 48;
sp.inc$();
d=8 * d + sp.c.$c() - 48;
var sp2=Clazz.new_($I$(27,1).c$$com_stevesoft_pat_StrPos,[sp]);
sp2.inc$();
if (this.isOctalDigit$com_stevesoft_pat_StrPos$Z(sp2, false)) {
sp.inc$();
d=8 * d + sp.c.$c() - 48;
}this.add$com_stevesoft_pat_Pattern(Clazz.new_([String.fromCharCode(d)],$I$(38,1).c$$C));
} else if (sp.dontMatch && sp.c >= "1"  && sp.c <= "9" ) {
var iv=sp.c.$c() - 48;
var s2=Clazz.new_($I$(27,1).c$$com_stevesoft_pat_StrPos,[sp]);
s2.inc$();
if (!s2.dontMatch && s2.c >= "0"  && s2.c <= "9" ) {
iv=10 * iv + (s2.c.$c() - 48);
sp.inc$();
}this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(40,1).c$$I,[iv]));
} else if (sp.dontMatch && sp.c == "b" ) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(41,1)));
} else if (sp.match$C("\u0008")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(41,1)));
} else if (sp.match$C("$")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(42,1).c$$Z,[true]));
} else if (sp.dontMatch && sp.c == "Z" ) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(42,1).c$$Z,[false]));
} else if (sp.match$C(".")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(43,1)));
} else if (sp.incMatch$S("(??")) {
var sb=Clazz.new_($I$(44,1));
var sb2=Clazz.new_($I$(44,1));
while (!sp.match$C(")") && !sp.match$C(":") ){
sb.append$C(sp.c);
sp.inc$();
}
if (sp.incMatch$S(":")) {
while (!sp.match$C(")")){
sb2.append$C(sp.c);
sp.inc$();
}
}var sbs=sb.toString();
if (Clazz.instanceOf(C$.validators.get$O(sbs), "java.lang.String")) {
var pat=C$.validators.get$O(sbs);
var r=this.newRegex$();
var rth=Clazz.new_($I$(26,1).c$$com_stevesoft_pat_Regex,[this]);
rth.noBackRefs=true;
p$1._compile$S$com_stevesoft_pat_Rthings.apply(r, [pat, rth]);
this.add$com_stevesoft_pat_Pattern(r.thePattern);
} else {
var cm=Clazz.new_([sb.toString()],$I$(45,1).c$$S);
if (cm.v != null ) {
var v2=cm.v.arg$S(sb2.toString());
if (v2 != null ) {
v2.argsave=sb2.toString();
var p=cm.v.pattern;
cm.v=v2;
v2.pattern=p;
}var r=this.newRegex$();
var rth=Clazz.new_($I$(26,1).c$$com_stevesoft_pat_Regex,[this]);
rth.noBackRefs=true;
p$1._compile$S$com_stevesoft_pat_Rthings.apply(r, [cm.v.pattern, rth]);
cm.sub=r.thePattern;
cm.sub.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(46,1).c$$com_stevesoft_pat_Custom,[cm]));
cm.sub.setParent$com_stevesoft_pat_Pattern(cm);
this.add$com_stevesoft_pat_Pattern(cm);
}}} else if (sp.match$C("(")) {
mk.parenLevel++;
var r=this.newRegex$();
sp.inc$();
if (sp.incMatch$S("?:")) {
r.or=Clazz.new_($I$(31,1));
} else if (sp.incMatch$S("?=")) {
r.or=Clazz.new_($I$(47,1).c$$Z,[false]);
} else if (sp.incMatch$S("?!")) {
r.or=Clazz.new_($I$(47,1).c$$Z,[true]);
} else if (sp.match$C("?")) {
sp.inc$();
do {
if (sp.c == "i") {
mk.ignoreCase=true;
}if (sp.c == "Q") {
mk.dontMatchInQuotes=true;
}if (sp.c == "o") {
mk.optimizeMe=true;
}if (sp.c == "g") {
mk.gFlag=true;
}if (sp.c == "s") {
mk.sFlag=true;
}if (sp.c == "m") {
mk.mFlag=true;
}sp.inc$();
} while (!sp.match$C(")") && !sp.eos );
r=null;
mk.parenLevel--;
if (sp.eos) {
$I$(33,"endItAll$S",["Unclosed ()"]);
}} else {
r.or=mk.noBackRefs ? Clazz.new_($I$(31,1)) : Clazz.new_($I$(48,1).c$$I,[mk.val++]);
}if (r != null ) {
this.add$com_stevesoft_pat_Pattern(r._compile$com_stevesoft_pat_StrPos$com_stevesoft_pat_Rthings(sp, mk));
}} else if (sp.match$C("^")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(49,1).c$$Z,[true]));
} else if (sp.dontMatch && sp.c == "A" ) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(49,1).c$$Z,[false]));
} else if (sp.match$C("*")) {
this.addMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt(Clazz.new_($I$(21,1).c$$I,[0]), Clazz.new_($I$(50,1)));
} else if (sp.match$C("+")) {
this.addMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt(Clazz.new_($I$(21,1).c$$I,[1]), Clazz.new_($I$(50,1)));
} else if (sp.match$C("?")) {
this.addMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt(Clazz.new_($I$(21,1).c$$I,[0]), Clazz.new_($I$(21,1).c$$I,[1]));
} else if (sp.match$C("{")) {
var bad=false;
var sp2=Clazz.new_($I$(27,1).c$$com_stevesoft_pat_StrPos,[sp]);
sp.inc$();
var i1=sp.getPatInt$();
var i2=null;
if (sp.match$C("}")) {
i2=i1;
} else {
if (!sp.match$C(",")) {
bad=true;
}sp.inc$();
if (sp.match$C("}")) {
i2=Clazz.new_($I$(50,1));
} else {
i2=sp.getPatInt$();
}}if (i1 == null  || i2 == null  ) {
bad=true;
}if (bad) {
sp.dup$com_stevesoft_pat_StrPos(sp2);
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,[sp.c]));
} else {
this.addMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt(i1, i2);
}} else if (sp.escMatch$C("x") && this.next2Hex$com_stevesoft_pat_StrPos(sp) ) {
sp.inc$();
var d=this.getHexDigit$com_stevesoft_pat_StrPos(sp);
sp.inc$();
d=16 * d + this.getHexDigit$com_stevesoft_pat_StrPos(sp);
this.add$com_stevesoft_pat_Pattern(Clazz.new_([String.fromCharCode(d)],$I$(38,1).c$$C));
} else if (sp.escMatch$C("c")) {
sp.inc$();
if (sp.c.$c() < $I$(51).cmap.length ) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_([$I$(51).cmap[sp.c.$c()]],$I$(38,1).c$$C));
} else {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,[sp.c]));
}} else if (sp.escMatch$C("f")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\f"]));
} else if (sp.escMatch$C("a")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\u0007"]));
} else if (sp.escMatch$C("t")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\t"]));
} else if (sp.escMatch$C("n")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\n"]));
} else if (sp.escMatch$C("r")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\r"]));
} else if (sp.escMatch$C("b")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\u0008"]));
} else if (sp.escMatch$C("e")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\u001b"]));
} else {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,[sp.c]));
if (sp.match$C(")")) {
$I$(33).endItAll$S("Unmatched right paren in pattern");
}}});

Clazz.newMeth(C$, '_compile$S$com_stevesoft_pat_Rthings', function (pat, mk) {
this.minMatch=null;
this.sFlag=this.mFlag=this.ignoreCase=this.gFlag=false;
var sp=Clazz.new_($I$(27,1).c$$S$I,[pat, 0]);
this.thePattern=this._compile$com_stevesoft_pat_StrPos$com_stevesoft_pat_Rthings(sp, mk);
this.pt.marks=null;
return this.thePattern;
}, p$1);

Clazz.newMeth(C$, '_compile$com_stevesoft_pat_StrPos$com_stevesoft_pat_Rthings', function (sp, mk) {
while (!(sp.eos || (this.or != null  && sp.match$C(")") ) )){
this.compile1$com_stevesoft_pat_StrPos$com_stevesoft_pat_Rthings(sp, mk);
sp.inc$();
}
if (sp.match$C(")")) {
mk.parenLevel--;
} else if (sp.eos && mk.parenLevel != 0 ) {
$I$(33,"endItAll$S",["Unclosed Parenthesis! lvl=" + mk.parenLevel]);
}if (this.or != null ) {
if (this.p == null ) {
this.p=Clazz.new_($I$(32,1));
}this.or.addOr$com_stevesoft_pat_Pattern(this.p);
return this.or;
}return this.p == null  ? Clazz.new_($I$(32,1)) : this.p;
});

Clazz.newMeth(C$, 'addMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt', function (i1, i2) {
var last;
var last2;
for (last=this.p; last != null  && last.next != null  ; last=last.next) {
;}
if (last == null  || last === this.p  ) {
last2=null;
} else {
for (last2=this.p; last2.next !== last ; last2=last2.next) {
;}
}if (Clazz.instanceOf(last, "com.stevesoft.pat.Multi") && i1.intValue$() == 0  && i2.intValue$() == 1 ) {
(last).matchFewest=true;
} else if (Clazz.instanceOf(last, "com.stevesoft.pat.FastMulti") && i1.intValue$() == 0  && i2.intValue$() == 1 ) {
(last).matchFewest=true;
} else if (Clazz.instanceOf(last, "com.stevesoft.pat.DotMulti") && i1.intValue$() == 0  && i2.intValue$() == 1 ) {
(last).matchFewest=true;
} else if (Clazz.instanceOf(last, "com.stevesoft.pat.Multi") || Clazz.instanceOf(last, "com.stevesoft.pat.DotMulti") || Clazz.instanceOf(last, "com.stevesoft.pat.FastMulti")  ) {
throw Clazz.new_($I$(52,1).c$$S,["Syntax error."]);
} else if (last2 == null ) {
this.p=C$.mkMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern(i1, i2, this.p);
} else {
last2.next=C$.mkMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern(i1, i2, last);
}});

Clazz.newMeth(C$, 'mkMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern', function (lo, hi, p) {
if (Clazz.instanceOf(p, "com.stevesoft.pat.Any") && p.next == null  ) {
return Clazz.new_($I$(53,1).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt,[lo, hi]);
}return $I$(54).safe4fm$com_stevesoft_pat_Pattern(p) ? Clazz.new_($I$(55,1).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[lo, hi, p]) : Clazz.new_($I$(56,1).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[lo, hi, p]);
}, 1);

Clazz.newMeth(C$, 'matchBracket$com_stevesoft_pat_StrPos', function (sp) {
var ret;
if (sp.match$C("^")) {
ret=Clazz.new_($I$(36,1).c$$Z,[true]);
sp.inc$();
} else {
ret=Clazz.new_($I$(36,1).c$$Z,[false]);
}if (sp.match$C("]")) {
$I$(33).endItAll$S("Unmatched []");
}while (!sp.eos && !sp.match$C("]") ){
var s1=Clazz.new_($I$(27,1).c$$com_stevesoft_pat_StrPos,[sp]);
s1.inc$();
var s1_=Clazz.new_($I$(27,1).c$$com_stevesoft_pat_StrPos,[s1]);
s1_.inc$();
if (s1.match$C("-") && !s1_.match$C("]") ) {
var s2=Clazz.new_($I$(27,1).c$$com_stevesoft_pat_StrPos,[s1]);
s2.inc$();
if (!s2.eos) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,[sp.c, s2.c]));
}sp.inc$();
sp.inc$();
} else if (sp.escMatch$C("Q")) {
sp.inc$();
while (!sp.escMatch$C("E")){
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,[sp.c]));
sp.inc$();
}
} else if (sp.escMatch$C("d")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["0", "9"]));
} else if (sp.escMatch$C("s")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,[" "]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["\u0008", "\n"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\r"]));
} else if (sp.escMatch$C("w")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["a", "z"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["A", "Z"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["0", "9"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["_"]));
} else if (sp.escMatch$C("D")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["\u0000", "/"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,[":", "\uffff"]));
} else if (sp.escMatch$C("S")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["\u0000", "\u0007"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["\u000b", "\f"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["\u000e", "\u001f"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["!", "\uffff"]));
} else if (sp.escMatch$C("W")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["\u0000", "@"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["[", "^"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["`"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37,1).c$$C$C,["{", "\uffff"]));
} else if (sp.escMatch$C("x") && this.next2Hex$com_stevesoft_pat_StrPos(sp) ) {
sp.inc$();
var d=this.getHexDigit$com_stevesoft_pat_StrPos(sp);
sp.inc$();
d=16 * d + this.getHexDigit$com_stevesoft_pat_StrPos(sp);
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_([String.fromCharCode(d)],$I$(38,1).c$$C));
} else if (sp.escMatch$C("a")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\u0007"]));
} else if (sp.escMatch$C("f")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\f"]));
} else if (sp.escMatch$C("e")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\u001b"]));
} else if (sp.escMatch$C("n")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\n"]));
} else if (sp.escMatch$C("t")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\t"]));
} else if (sp.escMatch$C("r")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,["\r"]));
} else if (sp.escMatch$C("c")) {
sp.inc$();
if (sp.c.$c() < $I$(51).cmap.length ) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_([$I$(51).cmap[sp.c.$c()]],$I$(38,1).c$$C));
} else {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,[sp.c]));
}} else if (this.isOctalString$com_stevesoft_pat_StrPos(sp)) {
var d=sp.c.$c() - 48;
sp.inc$();
d=8 * d + sp.c.$c() - 48;
var sp2=Clazz.new_($I$(27,1).c$$com_stevesoft_pat_StrPos,[sp]);
sp2.inc$();
if (this.isOctalDigit$com_stevesoft_pat_StrPos$Z(sp2, false)) {
sp.inc$();
d=8 * d + sp.c.$c() - 48;
}ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_([String.fromCharCode(d)],$I$(38,1).c$$C));
} else {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38,1).c$$C,[sp.c]));
}sp.inc$();
}
return ret;
});

Clazz.newMeth(C$, 'toString', function () {
if (false && this.thePattern == null  ) {
return "";
} else {
var sb=Clazz.new_($I$(44,1));
if (this.esc != "\\") {
sb.append$S("(?e=");
sb.append$C(this.esc);
sb.append$S(")");
}if (this.gFlag || this.mFlag || !C$.dotDoesntMatchCR || this.sFlag || this.ignoreCase || this.dontMatchInQuotes || this.optimized$()  ) {
sb.append$S("(?");
if (this.ignoreCase) {
sb.append$S("i");
}if (this.mFlag) {
sb.append$S("m");
}if (this.sFlag || !C$.dotDoesntMatchCR ) {
sb.append$S("s");
}if (this.dontMatchInQuotes) {
sb.append$S("Q");
}if (this.optimized$()) {
sb.append$S("o");
}if (this.gFlag) {
sb.append$S("g");
}sb.append$S(")");
}var patstr=this.thePattern.toString();
if (this.esc != "\\") {
patstr=C$.reEscape$S$C$C(patstr, "\\", this.esc);
}sb.append$S(patstr);
return sb.toString();
}});

Clazz.newMeth(C$, 'reEscape$S$C$C', function (s, oldEsc, newEsc) {
if (oldEsc == newEsc) {
return s;
}var i;
var sb=Clazz.new_($I$(44,1));
for (i=0; i < s.length$(); i++) {
if (s.charAt$I(i) == oldEsc && i + 1 < s.length$() ) {
if (s.charAt$I(i + 1) == oldEsc) {
sb.append$C(oldEsc);
} else {
sb.append$C(newEsc);
sb.append$C(s.charAt$I(i + 1));
}i++;
} else if (s.charAt$I(i) == newEsc) {
sb.append$C(newEsc);
sb.append$C(newEsc);
} else {
sb.append$C(s.charAt$I(i));
}}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'accept$java_io_File$S', function (dir, s) {
return this.search$S(s);
});

Clazz.newMeth(C$, 'version$', function () {
return "lgpl release 1.5.3";
}, 1);

Clazz.newMeth(C$, 'optimize$', function () {
if (this.optimized$() || this.thePattern == null  ) {
return;
}this.minMatch=Clazz.new_($I$(21,1).c$$I,[0]);
this.thePattern=$I$(54).opt$com_stevesoft_pat_Pattern$Z$Z(this.thePattern, this.ignoreCase, this.dontMatchInQuotes);
this.skipper=$I$(57).findSkip$com_stevesoft_pat_Regex(this);
return;
});

Clazz.newMeth(C$, 'optimized$', function () {
return this.minMatch != null ;
});

Clazz.newMeth(C$, 'perlCode$S', function (s) {
return $I$(25).parse$S(s);
}, 1);

Clazz.newMeth(C$, 'isLiteral$', function () {
var x=this.thePattern;
while (x != null ){
if (Clazz.instanceOf(x, "com.stevesoft.pat.oneChar")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Skipped")) {
;} else {
return false;
}x=x.next;
}
return true;
});

Clazz.newMeth(C$, 'countMinChars$', function () {
return this.thePattern.countMinChars$();
});

Clazz.newMeth(C$, 'countMaxChars$', function () {
return this.thePattern.countMaxChars$();
});

Clazz.newMeth(C$, 'isHexDigit$com_stevesoft_pat_StrPos', function (sp) {
var r=!sp.eos && !sp.dontMatch && ((sp.c >= "0" && sp.c <= "9" ) || (sp.c >= "a" && sp.c <= "f" ) || (sp.c >= "A" && sp.c <= "F" )  )  ;
return r;
});

Clazz.newMeth(C$, 'isOctalDigit$com_stevesoft_pat_StrPos$Z', function (sp, first) {
var r=!sp.eos && !(!!(first ^ sp.dontMatch)) && sp.c >= "0"   && sp.c <= "7" ;
return r;
});

Clazz.newMeth(C$, 'getHexDigit$com_stevesoft_pat_StrPos', function (sp) {
if (sp.c >= "0" && sp.c <= "9" ) {
return sp.c.$c() - 48;
}if (sp.c >= "a" && sp.c <= "f" ) {
return sp.c.$c() - 97 + 10;
}return sp.c.$c() - 65 + 10;
});

Clazz.newMeth(C$, 'next2Hex$com_stevesoft_pat_StrPos', function (sp) {
var sp2=Clazz.new_($I$(27,1).c$$com_stevesoft_pat_StrPos,[sp]);
sp2.inc$();
if (!this.isHexDigit$com_stevesoft_pat_StrPos(sp2)) {
return false;
}sp2.inc$();
if (!this.isHexDigit$com_stevesoft_pat_StrPos(sp2)) {
return false;
}return true;
});

Clazz.newMeth(C$, 'isOctalString$com_stevesoft_pat_StrPos', function (sp) {
if (!this.isOctalDigit$com_stevesoft_pat_StrPos$Z(sp, true)) {
return false;
}var sp2=Clazz.new_($I$(27,1).c$$com_stevesoft_pat_StrPos,[sp]);
sp2.inc$();
if (!this.isOctalDigit$com_stevesoft_pat_StrPos$Z(sp2, false)) {
return false;
}return true;
});

C$.$static$=function(){C$.$static$=0;
C$.BackRefOffset=1;
C$.none=Clazz.new_($I$(3,1));
C$.validators=Clazz.new_($I$(4,1));
{
C$.define$S$S$com_stevesoft_pat_Validator("p", "(?>1)", Clazz.new_($I$(5,1)));
C$.define$S$S$com_stevesoft_pat_Validator("P", "(?>1)", Clazz.new_($I$(6,1)));
C$.define$S$S$com_stevesoft_pat_Validator("s", "(?>1)", Clazz.new_($I$(7,1)));
C$.define$S$S$com_stevesoft_pat_Validator("S", "(?>1)", Clazz.new_($I$(8,1)));
C$.define$S$S$com_stevesoft_pat_Validator("w", "(?>1)", Clazz.new_($I$(9,1)));
C$.define$S$S$com_stevesoft_pat_Validator("W", "(?>1)", Clazz.new_($I$(10,1)));
C$.define$S$S$com_stevesoft_pat_Validator("d", "(?>1)", Clazz.new_($I$(11,1)));
C$.define$S$S$com_stevesoft_pat_Validator("D", "(?>1)", Clazz.new_($I$(12,1)));
C$.define$S$S$com_stevesoft_pat_Validator("m", "(?>1)", Clazz.new_($I$(13,1)));
C$.define$S$S$com_stevesoft_pat_Validator("M", "(?>1)", Clazz.new_($I$(14,1)));
C$.define$S$S$com_stevesoft_pat_Validator("c", "(?>1)", Clazz.new_($I$(15,1)));
C$.define$S$S$com_stevesoft_pat_Validator("C", "(?>1)", Clazz.new_($I$(16,1)));
C$.define$S$S$com_stevesoft_pat_Validator("a", "(?>1)", Clazz.new_($I$(17,1)));
C$.define$S$S$com_stevesoft_pat_Validator("A", "(?>1)", Clazz.new_($I$(18,1)));
C$.define$S$S$com_stevesoft_pat_Validator("uc", "(?>1)", Clazz.new_($I$(19,1)));
C$.define$S$S$com_stevesoft_pat_Validator("lc", "(?>1)", Clazz.new_($I$(20,1)));
};
C$.defaultMFlag=false;
C$.dotDoesntMatchCR=true;
C$.lasts=null;
C$.lastbs=null;
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UniValidator", null, 'com.stevesoft.pat.Validator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[1]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "WantMoreTextReplaceRule", null, 'com.stevesoft.pat.SpecialRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, res) {
});

Clazz.newMeth(C$, 'toString1$', function () {
return "${WANT_MORE_TEXT}";
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeAlpha", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && $I$(1,"isAlphabetic$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CaseMgr");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toUpperCase$C', function (c) {
if (false) {
var ret=c.$c();
switch (c.$c()) {
case 97:
ret=65;
break;
case 98:
ret=66;
break;
case 99:
ret=67;
break;
case 100:
ret=68;
break;
case 101:
ret=69;
break;
case 102:
ret=70;
break;
case 103:
ret=71;
break;
case 104:
ret=72;
break;
case 105:
ret=73;
break;
case 106:
ret=74;
break;
case 107:
ret=75;
break;
case 108:
ret=76;
break;
case 109:
ret=77;
break;
case 110:
ret=78;
break;
case 111:
ret=79;
break;
case 112:
ret=80;
break;
case 113:
ret=81;
break;
case 114:
ret=82;
break;
case 115:
ret=83;
break;
case 116:
ret=84;
break;
case 117:
ret=85;
break;
case 118:
ret=86;
break;
case 119:
ret=87;
break;
case 120:
ret=88;
break;
case 121:
ret=89;
break;
case 122:
ret=90;
break;
case 224:
ret=192;
break;
case 225:
ret=193;
break;
case 226:
ret=194;
break;
case 227:
ret=195;
break;
case 228:
ret=196;
break;
case 229:
ret=197;
break;
case 230:
ret=198;
break;
case 231:
ret=199;
break;
case 232:
ret=200;
break;
case 233:
ret=201;
break;
case 234:
ret=202;
break;
case 235:
ret=203;
break;
case 236:
ret=204;
break;
case 237:
ret=205;
break;
case 238:
ret=206;
break;
case 239:
ret=207;
break;
case 240:
ret=208;
break;
case 241:
ret=209;
break;
case 242:
ret=210;
break;
case 243:
ret=211;
break;
case 244:
ret=212;
break;
case 245:
ret=213;
break;
case 246:
ret=214;
break;
case 248:
ret=216;
break;
case 249:
ret=217;
break;
case 250:
ret=218;
break;
case 251:
ret=219;
break;
case 252:
ret=220;
break;
case 253:
ret=221;
break;
case 254:
ret=222;
break;
case 255:
ret=376;
break;
case 257:
ret=256;
break;
case 259:
ret=258;
break;
case 261:
ret=260;
break;
case 263:
ret=262;
break;
case 265:
ret=264;
break;
case 267:
ret=266;
break;
case 269:
ret=268;
break;
case 271:
ret=270;
break;
case 273:
ret=272;
break;
case 275:
ret=274;
break;
case 277:
ret=276;
break;
case 279:
ret=278;
break;
case 281:
ret=280;
break;
case 283:
ret=282;
break;
case 285:
ret=284;
break;
case 287:
ret=286;
break;
case 289:
ret=288;
break;
case 291:
ret=290;
break;
case 293:
ret=292;
break;
case 295:
ret=294;
break;
case 297:
ret=296;
break;
case 299:
ret=298;
break;
case 301:
ret=300;
break;
case 303:
ret=302;
break;
case 305:
ret=73;
break;
case 307:
ret=306;
break;
case 309:
ret=308;
break;
case 311:
ret=310;
break;
case 314:
ret=313;
break;
case 316:
ret=315;
break;
case 318:
ret=317;
break;
case 320:
ret=319;
break;
case 322:
ret=321;
break;
case 324:
ret=323;
break;
case 326:
ret=325;
break;
case 328:
ret=327;
break;
case 331:
ret=330;
break;
case 333:
ret=332;
break;
case 335:
ret=334;
break;
case 337:
ret=336;
break;
case 339:
ret=338;
break;
case 341:
ret=340;
break;
case 343:
ret=342;
break;
case 345:
ret=344;
break;
case 347:
ret=346;
break;
case 349:
ret=348;
break;
case 351:
ret=350;
break;
case 353:
ret=352;
break;
case 355:
ret=354;
break;
case 357:
ret=356;
break;
case 359:
ret=358;
break;
case 361:
ret=360;
break;
case 363:
ret=362;
break;
case 365:
ret=364;
break;
case 367:
ret=366;
break;
case 369:
ret=368;
break;
case 371:
ret=370;
break;
case 373:
ret=372;
break;
case 375:
ret=374;
break;
case 378:
ret=377;
break;
case 380:
ret=379;
break;
case 382:
ret=381;
break;
case 383:
ret=83;
break;
case 387:
ret=386;
break;
case 389:
ret=388;
break;
case 392:
ret=391;
break;
case 396:
ret=395;
break;
case 402:
ret=401;
break;
case 409:
ret=408;
break;
case 417:
ret=416;
break;
case 419:
ret=418;
break;
case 421:
ret=420;
break;
case 424:
ret=423;
break;
case 429:
ret=428;
break;
case 432:
ret=431;
break;
case 436:
ret=435;
break;
case 438:
ret=437;
break;
case 441:
ret=440;
break;
case 445:
ret=444;
break;
case 453:
ret=452;
break;
case 454:
ret=452;
break;
case 456:
ret=455;
break;
case 457:
ret=455;
break;
case 459:
ret=458;
break;
case 460:
ret=458;
break;
case 462:
ret=461;
break;
case 464:
ret=463;
break;
case 466:
ret=465;
break;
case 468:
ret=467;
break;
case 470:
ret=469;
break;
case 472:
ret=471;
break;
case 474:
ret=473;
break;
case 476:
ret=475;
break;
case 479:
ret=478;
break;
case 481:
ret=480;
break;
case 483:
ret=482;
break;
case 485:
ret=484;
break;
case 487:
ret=486;
break;
case 489:
ret=488;
break;
case 491:
ret=490;
break;
case 493:
ret=492;
break;
case 495:
ret=494;
break;
case 498:
ret=497;
break;
case 499:
ret=497;
break;
case 501:
ret=500;
break;
case 507:
ret=506;
break;
case 509:
ret=508;
break;
case 511:
ret=510;
break;
case 513:
ret=512;
break;
case 515:
ret=514;
break;
case 517:
ret=516;
break;
case 519:
ret=518;
break;
case 521:
ret=520;
break;
case 523:
ret=522;
break;
case 525:
ret=524;
break;
case 527:
ret=526;
break;
case 529:
ret=528;
break;
case 531:
ret=530;
break;
case 533:
ret=532;
break;
case 535:
ret=534;
break;
case 595:
ret=385;
break;
case 596:
ret=390;
break;
case 598:
ret=393;
break;
case 599:
ret=394;
break;
case 600:
ret=398;
break;
case 601:
ret=399;
break;
case 603:
ret=400;
break;
case 608:
ret=403;
break;
case 611:
ret=404;
break;
case 616:
ret=407;
break;
case 617:
ret=406;
break;
case 623:
ret=412;
break;
case 626:
ret=413;
break;
case 643:
ret=425;
break;
case 648:
ret=430;
break;
case 650:
ret=433;
break;
case 651:
ret=434;
break;
case 658:
ret=439;
break;
case 940:
ret=902;
break;
case 941:
ret=904;
break;
case 942:
ret=905;
break;
case 943:
ret=906;
break;
case 945:
ret=913;
break;
case 946:
ret=914;
break;
case 947:
ret=915;
break;
case 948:
ret=916;
break;
case 949:
ret=917;
break;
case 950:
ret=918;
break;
case 951:
ret=919;
break;
case 952:
ret=920;
break;
case 953:
ret=921;
break;
case 954:
ret=922;
break;
case 955:
ret=923;
break;
case 956:
ret=924;
break;
case 957:
ret=925;
break;
case 958:
ret=926;
break;
case 959:
ret=927;
break;
case 960:
ret=928;
break;
case 961:
ret=929;
break;
case 963:
ret=931;
break;
case 964:
ret=932;
break;
case 965:
ret=933;
break;
case 966:
ret=934;
break;
case 967:
ret=935;
break;
case 968:
ret=936;
break;
case 969:
ret=937;
break;
case 970:
ret=938;
break;
case 971:
ret=939;
break;
case 972:
ret=908;
break;
case 973:
ret=910;
break;
case 974:
ret=911;
break;
case 976:
ret=914;
break;
case 977:
ret=920;
break;
case 981:
ret=934;
break;
case 982:
ret=928;
break;
case 995:
ret=994;
break;
case 997:
ret=996;
break;
case 999:
ret=998;
break;
case 1001:
ret=1000;
break;
case 1003:
ret=1002;
break;
case 1005:
ret=1004;
break;
case 1007:
ret=1006;
break;
case 1008:
ret=922;
break;
case 1009:
ret=929;
break;
case 1072:
ret=1040;
break;
case 1073:
ret=1041;
break;
case 1074:
ret=1042;
break;
case 1075:
ret=1043;
break;
case 1076:
ret=1044;
break;
case 1077:
ret=1045;
break;
case 1078:
ret=1046;
break;
case 1079:
ret=1047;
break;
case 1080:
ret=1048;
break;
case 1081:
ret=1049;
break;
case 1082:
ret=1050;
break;
case 1083:
ret=1051;
break;
case 1084:
ret=1052;
break;
case 1085:
ret=1053;
break;
case 1086:
ret=1054;
break;
case 1087:
ret=1055;
break;
case 1088:
ret=1056;
break;
case 1089:
ret=1057;
break;
case 1090:
ret=1058;
break;
case 1091:
ret=1059;
break;
case 1092:
ret=1060;
break;
case 1093:
ret=1061;
break;
case 1094:
ret=1062;
break;
case 1095:
ret=1063;
break;
case 1096:
ret=1064;
break;
case 1097:
ret=1065;
break;
case 1098:
ret=1066;
break;
case 1099:
ret=1067;
break;
case 1100:
ret=1068;
break;
case 1101:
ret=1069;
break;
case 1102:
ret=1070;
break;
case 1103:
ret=1071;
break;
case 1105:
ret=1025;
break;
case 1106:
ret=1026;
break;
case 1107:
ret=1027;
break;
case 1108:
ret=1028;
break;
case 1109:
ret=1029;
break;
case 1110:
ret=1030;
break;
case 1111:
ret=1031;
break;
case 1112:
ret=1032;
break;
case 1113:
ret=1033;
break;
case 1114:
ret=1034;
break;
case 1115:
ret=1035;
break;
case 1116:
ret=1036;
break;
case 1118:
ret=1038;
break;
case 1119:
ret=1039;
break;
case 1121:
ret=1120;
break;
case 1123:
ret=1122;
break;
case 1125:
ret=1124;
break;
case 1127:
ret=1126;
break;
case 1129:
ret=1128;
break;
case 1131:
ret=1130;
break;
case 1133:
ret=1132;
break;
case 1135:
ret=1134;
break;
case 1137:
ret=1136;
break;
case 1139:
ret=1138;
break;
case 1141:
ret=1140;
break;
case 1143:
ret=1142;
break;
case 1145:
ret=1144;
break;
case 1147:
ret=1146;
break;
case 1149:
ret=1148;
break;
case 1151:
ret=1150;
break;
case 1153:
ret=1152;
break;
case 1169:
ret=1168;
break;
case 1171:
ret=1170;
break;
case 1173:
ret=1172;
break;
case 1175:
ret=1174;
break;
case 1177:
ret=1176;
break;
case 1179:
ret=1178;
break;
case 1181:
ret=1180;
break;
case 1183:
ret=1182;
break;
case 1185:
ret=1184;
break;
case 1187:
ret=1186;
break;
case 1189:
ret=1188;
break;
case 1191:
ret=1190;
break;
case 1193:
ret=1192;
break;
case 1195:
ret=1194;
break;
case 1197:
ret=1196;
break;
case 1199:
ret=1198;
break;
case 1201:
ret=1200;
break;
case 1203:
ret=1202;
break;
case 1205:
ret=1204;
break;
case 1207:
ret=1206;
break;
case 1209:
ret=1208;
break;
case 1211:
ret=1210;
break;
case 1213:
ret=1212;
break;
case 1215:
ret=1214;
break;
case 1218:
ret=1217;
break;
case 1220:
ret=1219;
break;
case 1224:
ret=1223;
break;
case 1228:
ret=1227;
break;
case 1233:
ret=1232;
break;
case 1235:
ret=1234;
break;
case 1237:
ret=1236;
break;
case 1239:
ret=1238;
break;
case 1241:
ret=1240;
break;
case 1243:
ret=1242;
break;
case 1245:
ret=1244;
break;
case 1247:
ret=1246;
break;
case 1249:
ret=1248;
break;
case 1251:
ret=1250;
break;
case 1253:
ret=1252;
break;
case 1255:
ret=1254;
break;
case 1257:
ret=1256;
break;
case 1259:
ret=1258;
break;
case 1263:
ret=1262;
break;
case 1265:
ret=1264;
break;
case 1267:
ret=1266;
break;
case 1269:
ret=1268;
break;
case 1273:
ret=1272;
break;
case 1377:
ret=1329;
break;
case 1378:
ret=1330;
break;
case 1379:
ret=1331;
break;
case 1380:
ret=1332;
break;
case 1381:
ret=1333;
break;
case 1382:
ret=1334;
break;
case 1383:
ret=1335;
break;
case 1384:
ret=1336;
break;
case 1385:
ret=1337;
break;
case 1386:
ret=1338;
break;
case 1387:
ret=1339;
break;
case 1388:
ret=1340;
break;
case 1389:
ret=1341;
break;
case 1390:
ret=1342;
break;
case 1391:
ret=1343;
break;
case 1392:
ret=1344;
break;
case 1393:
ret=1345;
break;
case 1394:
ret=1346;
break;
case 1395:
ret=1347;
break;
case 1396:
ret=1348;
break;
case 1397:
ret=1349;
break;
case 1398:
ret=1350;
break;
case 1399:
ret=1351;
break;
case 1400:
ret=1352;
break;
case 1401:
ret=1353;
break;
case 1402:
ret=1354;
break;
case 1403:
ret=1355;
break;
case 1404:
ret=1356;
break;
case 1405:
ret=1357;
break;
case 1406:
ret=1358;
break;
case 1407:
ret=1359;
break;
case 1408:
ret=1360;
break;
case 1409:
ret=1361;
break;
case 1410:
ret=1362;
break;
case 1411:
ret=1363;
break;
case 1412:
ret=1364;
break;
case 1413:
ret=1365;
break;
case 1414:
ret=1366;
break;
case 7681:
ret=7680;
break;
case 7683:
ret=7682;
break;
case 7685:
ret=7684;
break;
case 7687:
ret=7686;
break;
case 7689:
ret=7688;
break;
case 7691:
ret=7690;
break;
case 7693:
ret=7692;
break;
case 7695:
ret=7694;
break;
case 7697:
ret=7696;
break;
case 7699:
ret=7698;
break;
case 7701:
ret=7700;
break;
case 7703:
ret=7702;
break;
case 7705:
ret=7704;
break;
case 7707:
ret=7706;
break;
case 7709:
ret=7708;
break;
case 7711:
ret=7710;
break;
case 7713:
ret=7712;
break;
case 7715:
ret=7714;
break;
case 7717:
ret=7716;
break;
case 7719:
ret=7718;
break;
case 7721:
ret=7720;
break;
case 7723:
ret=7722;
break;
case 7725:
ret=7724;
break;
case 7727:
ret=7726;
break;
case 7729:
ret=7728;
break;
case 7731:
ret=7730;
break;
case 7733:
ret=7732;
break;
case 7735:
ret=7734;
break;
case 7737:
ret=7736;
break;
case 7739:
ret=7738;
break;
case 7741:
ret=7740;
break;
case 7743:
ret=7742;
break;
case 7745:
ret=7744;
break;
case 7747:
ret=7746;
break;
case 7749:
ret=7748;
break;
case 7751:
ret=7750;
break;
case 7753:
ret=7752;
break;
case 7755:
ret=7754;
break;
case 7757:
ret=7756;
break;
case 7759:
ret=7758;
break;
case 7761:
ret=7760;
break;
case 7763:
ret=7762;
break;
case 7765:
ret=7764;
break;
case 7767:
ret=7766;
break;
case 7769:
ret=7768;
break;
case 7771:
ret=7770;
break;
case 7773:
ret=7772;
break;
case 7775:
ret=7774;
break;
case 7777:
ret=7776;
break;
case 7779:
ret=7778;
break;
case 7781:
ret=7780;
break;
case 7783:
ret=7782;
break;
case 7785:
ret=7784;
break;
case 7787:
ret=7786;
break;
case 7789:
ret=7788;
break;
case 7791:
ret=7790;
break;
case 7793:
ret=7792;
break;
case 7795:
ret=7794;
break;
case 7797:
ret=7796;
break;
case 7799:
ret=7798;
break;
case 7801:
ret=7800;
break;
case 7803:
ret=7802;
break;
case 7805:
ret=7804;
break;
case 7807:
ret=7806;
break;
case 7809:
ret=7808;
break;
case 7811:
ret=7810;
break;
case 7813:
ret=7812;
break;
case 7815:
ret=7814;
break;
case 7817:
ret=7816;
break;
case 7819:
ret=7818;
break;
case 7821:
ret=7820;
break;
case 7823:
ret=7822;
break;
case 7825:
ret=7824;
break;
case 7827:
ret=7826;
break;
case 7829:
ret=7828;
break;
case 7841:
ret=7840;
break;
case 7843:
ret=7842;
break;
case 7845:
ret=7844;
break;
case 7847:
ret=7846;
break;
case 7849:
ret=7848;
break;
case 7851:
ret=7850;
break;
case 7853:
ret=7852;
break;
case 7855:
ret=7854;
break;
case 7857:
ret=7856;
break;
case 7859:
ret=7858;
break;
case 7861:
ret=7860;
break;
case 7863:
ret=7862;
break;
case 7865:
ret=7864;
break;
case 7867:
ret=7866;
break;
case 7869:
ret=7868;
break;
case 7871:
ret=7870;
break;
case 7873:
ret=7872;
break;
case 7875:
ret=7874;
break;
case 7877:
ret=7876;
break;
case 7879:
ret=7878;
break;
case 7881:
ret=7880;
break;
case 7883:
ret=7882;
break;
case 7885:
ret=7884;
break;
case 7887:
ret=7886;
break;
case 7889:
ret=7888;
break;
case 7891:
ret=7890;
break;
case 7893:
ret=7892;
break;
case 7895:
ret=7894;
break;
case 7897:
ret=7896;
break;
case 7899:
ret=7898;
break;
case 7901:
ret=7900;
break;
case 7903:
ret=7902;
break;
case 7905:
ret=7904;
break;
case 7907:
ret=7906;
break;
case 7909:
ret=7908;
break;
case 7911:
ret=7910;
break;
case 7913:
ret=7912;
break;
case 7915:
ret=7914;
break;
case 7917:
ret=7916;
break;
case 7919:
ret=7918;
break;
case 7921:
ret=7920;
break;
case 7923:
ret=7922;
break;
case 7925:
ret=7924;
break;
case 7927:
ret=7926;
break;
case 7929:
ret=7928;
break;
case 7936:
ret=7944;
break;
case 7937:
ret=7945;
break;
case 7938:
ret=7946;
break;
case 7939:
ret=7947;
break;
case 7940:
ret=7948;
break;
case 7941:
ret=7949;
break;
case 7942:
ret=7950;
break;
case 7943:
ret=7951;
break;
case 7952:
ret=7960;
break;
case 7953:
ret=7961;
break;
case 7954:
ret=7962;
break;
case 7955:
ret=7963;
break;
case 7956:
ret=7964;
break;
case 7957:
ret=7965;
break;
case 7968:
ret=7976;
break;
case 7969:
ret=7977;
break;
case 7970:
ret=7978;
break;
case 7971:
ret=7979;
break;
case 7972:
ret=7980;
break;
case 7973:
ret=7981;
break;
case 7974:
ret=7982;
break;
case 7975:
ret=7983;
break;
case 7984:
ret=7992;
break;
case 7985:
ret=7993;
break;
case 7986:
ret=7994;
break;
case 7987:
ret=7995;
break;
case 7988:
ret=7996;
break;
case 7989:
ret=7997;
break;
case 7990:
ret=7998;
break;
case 7991:
ret=7999;
break;
case 8000:
ret=8008;
break;
case 8001:
ret=8009;
break;
case 8002:
ret=8010;
break;
case 8003:
ret=8011;
break;
case 8004:
ret=8012;
break;
case 8005:
ret=8013;
break;
case 8017:
ret=8025;
break;
case 8019:
ret=8027;
break;
case 8021:
ret=8029;
break;
case 8023:
ret=8031;
break;
case 8032:
ret=8040;
break;
case 8033:
ret=8041;
break;
case 8034:
ret=8042;
break;
case 8035:
ret=8043;
break;
case 8036:
ret=8044;
break;
case 8037:
ret=8045;
break;
case 8038:
ret=8046;
break;
case 8039:
ret=8047;
break;
case 8048:
ret=8122;
break;
case 8049:
ret=8123;
break;
case 8050:
ret=8136;
break;
case 8051:
ret=8137;
break;
case 8052:
ret=8138;
break;
case 8053:
ret=8139;
break;
case 8054:
ret=8154;
break;
case 8055:
ret=8155;
break;
case 8056:
ret=8184;
break;
case 8057:
ret=8185;
break;
case 8058:
ret=8170;
break;
case 8059:
ret=8171;
break;
case 8060:
ret=8186;
break;
case 8061:
ret=8187;
break;
case 8064:
ret=8072;
break;
case 8065:
ret=8073;
break;
case 8066:
ret=8074;
break;
case 8067:
ret=8075;
break;
case 8068:
ret=8076;
break;
case 8069:
ret=8077;
break;
case 8070:
ret=8078;
break;
case 8071:
ret=8079;
break;
case 8080:
ret=8088;
break;
case 8081:
ret=8089;
break;
case 8082:
ret=8090;
break;
case 8083:
ret=8091;
break;
case 8084:
ret=8092;
break;
case 8085:
ret=8093;
break;
case 8086:
ret=8094;
break;
case 8087:
ret=8095;
break;
case 8096:
ret=8104;
break;
case 8097:
ret=8105;
break;
case 8098:
ret=8106;
break;
case 8099:
ret=8107;
break;
case 8100:
ret=8108;
break;
case 8101:
ret=8109;
break;
case 8102:
ret=8110;
break;
case 8103:
ret=8111;
break;
case 8112:
ret=8120;
break;
case 8113:
ret=8121;
break;
case 8115:
ret=8124;
break;
case 8131:
ret=8140;
break;
case 8144:
ret=8152;
break;
case 8145:
ret=8153;
break;
case 8160:
ret=8168;
break;
case 8161:
ret=8169;
break;
case 8165:
ret=8172;
break;
case 8179:
ret=8188;
break;
case 8560:
ret=8544;
break;
case 8561:
ret=8545;
break;
case 8562:
ret=8546;
break;
case 8563:
ret=8547;
break;
case 8564:
ret=8548;
break;
case 8565:
ret=8549;
break;
case 8566:
ret=8550;
break;
case 8567:
ret=8551;
break;
case 8568:
ret=8552;
break;
case 8569:
ret=8553;
break;
case 8570:
ret=8554;
break;
case 8571:
ret=8555;
break;
case 8572:
ret=8556;
break;
case 8573:
ret=8557;
break;
case 8574:
ret=8558;
break;
case 8575:
ret=8559;
break;
case 9424:
ret=9398;
break;
case 9425:
ret=9399;
break;
case 9426:
ret=9400;
break;
case 9427:
ret=9401;
break;
case 9428:
ret=9402;
break;
case 9429:
ret=9403;
break;
case 9430:
ret=9404;
break;
case 9431:
ret=9405;
break;
case 9432:
ret=9406;
break;
case 9433:
ret=9407;
break;
case 9434:
ret=9408;
break;
case 9435:
ret=9409;
break;
case 9436:
ret=9410;
break;
case 9437:
ret=9411;
break;
case 9438:
ret=9412;
break;
case 9439:
ret=9413;
break;
case 9440:
ret=9414;
break;
case 9441:
ret=9415;
break;
case 9442:
ret=9416;
break;
case 9443:
ret=9417;
break;
case 9444:
ret=9418;
break;
case 9445:
ret=9419;
break;
case 9446:
ret=9420;
break;
case 9447:
ret=9421;
break;
case 9448:
ret=9422;
break;
case 9449:
ret=9423;
break;
case 65345:
ret=65313;
break;
case 65346:
ret=65314;
break;
case 65347:
ret=65315;
break;
case 65348:
ret=65316;
break;
case 65349:
ret=65317;
break;
case 65350:
ret=65318;
break;
case 65351:
ret=65319;
break;
case 65352:
ret=65320;
break;
case 65353:
ret=65321;
break;
case 65354:
ret=65322;
break;
case 65355:
ret=65323;
break;
case 65356:
ret=65324;
break;
case 65357:
ret=65325;
break;
case 65358:
ret=65326;
break;
case 65359:
ret=65327;
break;
case 65360:
ret=65328;
break;
case 65361:
ret=65329;
break;
case 65362:
ret=65330;
break;
case 65363:
ret=65331;
break;
case 65364:
ret=65332;
break;
case 65365:
ret=65333;
break;
case 65366:
ret=65334;
break;
case 65367:
ret=65335;
break;
case 65368:
ret=65336;
break;
case 65369:
ret=65337;
break;
case 65370:
ret=65338;
break;
}
return String.fromCharCode(ret);
}return Character.toUpperCase$C(c);
}, 1);

Clazz.newMeth(C$, 'toLowerCase$C', function (c) {
if (false) {
var ret=c.$c();
switch (c.$c()) {
case 65:
ret=97;
break;
case 66:
ret=98;
break;
case 67:
ret=99;
break;
case 68:
ret=100;
break;
case 69:
ret=101;
break;
case 70:
ret=102;
break;
case 71:
ret=103;
break;
case 72:
ret=104;
break;
case 73:
ret=105;
break;
case 74:
ret=106;
break;
case 75:
ret=107;
break;
case 76:
ret=108;
break;
case 77:
ret=109;
break;
case 78:
ret=110;
break;
case 79:
ret=111;
break;
case 80:
ret=112;
break;
case 81:
ret=113;
break;
case 82:
ret=114;
break;
case 83:
ret=115;
break;
case 84:
ret=116;
break;
case 85:
ret=117;
break;
case 86:
ret=118;
break;
case 87:
ret=119;
break;
case 88:
ret=120;
break;
case 89:
ret=121;
break;
case 90:
ret=122;
break;
case 192:
ret=224;
break;
case 193:
ret=225;
break;
case 194:
ret=226;
break;
case 195:
ret=227;
break;
case 196:
ret=228;
break;
case 197:
ret=229;
break;
case 198:
ret=230;
break;
case 199:
ret=231;
break;
case 200:
ret=232;
break;
case 201:
ret=233;
break;
case 202:
ret=234;
break;
case 203:
ret=235;
break;
case 204:
ret=236;
break;
case 205:
ret=237;
break;
case 206:
ret=238;
break;
case 207:
ret=239;
break;
case 208:
ret=240;
break;
case 209:
ret=241;
break;
case 210:
ret=242;
break;
case 211:
ret=243;
break;
case 212:
ret=244;
break;
case 213:
ret=245;
break;
case 214:
ret=246;
break;
case 216:
ret=248;
break;
case 217:
ret=249;
break;
case 218:
ret=250;
break;
case 219:
ret=251;
break;
case 220:
ret=252;
break;
case 221:
ret=253;
break;
case 222:
ret=254;
break;
case 256:
ret=257;
break;
case 258:
ret=259;
break;
case 260:
ret=261;
break;
case 262:
ret=263;
break;
case 264:
ret=265;
break;
case 266:
ret=267;
break;
case 268:
ret=269;
break;
case 270:
ret=271;
break;
case 272:
ret=273;
break;
case 274:
ret=275;
break;
case 276:
ret=277;
break;
case 278:
ret=279;
break;
case 280:
ret=281;
break;
case 282:
ret=283;
break;
case 284:
ret=285;
break;
case 286:
ret=287;
break;
case 288:
ret=289;
break;
case 290:
ret=291;
break;
case 292:
ret=293;
break;
case 294:
ret=295;
break;
case 296:
ret=297;
break;
case 298:
ret=299;
break;
case 300:
ret=301;
break;
case 302:
ret=303;
break;
case 304:
ret=105;
break;
case 306:
ret=307;
break;
case 308:
ret=309;
break;
case 310:
ret=311;
break;
case 313:
ret=314;
break;
case 315:
ret=316;
break;
case 317:
ret=318;
break;
case 319:
ret=320;
break;
case 321:
ret=322;
break;
case 323:
ret=324;
break;
case 325:
ret=326;
break;
case 327:
ret=328;
break;
case 330:
ret=331;
break;
case 332:
ret=333;
break;
case 334:
ret=335;
break;
case 336:
ret=337;
break;
case 338:
ret=339;
break;
case 340:
ret=341;
break;
case 342:
ret=343;
break;
case 344:
ret=345;
break;
case 346:
ret=347;
break;
case 348:
ret=349;
break;
case 350:
ret=351;
break;
case 352:
ret=353;
break;
case 354:
ret=355;
break;
case 356:
ret=357;
break;
case 358:
ret=359;
break;
case 360:
ret=361;
break;
case 362:
ret=363;
break;
case 364:
ret=365;
break;
case 366:
ret=367;
break;
case 368:
ret=369;
break;
case 370:
ret=371;
break;
case 372:
ret=373;
break;
case 374:
ret=375;
break;
case 376:
ret=255;
break;
case 377:
ret=378;
break;
case 379:
ret=380;
break;
case 381:
ret=382;
break;
case 385:
ret=595;
break;
case 386:
ret=387;
break;
case 388:
ret=389;
break;
case 390:
ret=596;
break;
case 391:
ret=392;
break;
case 393:
ret=598;
break;
case 394:
ret=599;
break;
case 395:
ret=396;
break;
case 398:
ret=600;
break;
case 399:
ret=601;
break;
case 400:
ret=603;
break;
case 401:
ret=402;
break;
case 403:
ret=608;
break;
case 404:
ret=611;
break;
case 406:
ret=617;
break;
case 407:
ret=616;
break;
case 408:
ret=409;
break;
case 412:
ret=623;
break;
case 413:
ret=626;
break;
case 416:
ret=417;
break;
case 418:
ret=419;
break;
case 420:
ret=421;
break;
case 423:
ret=424;
break;
case 425:
ret=643;
break;
case 428:
ret=429;
break;
case 430:
ret=648;
break;
case 431:
ret=432;
break;
case 433:
ret=650;
break;
case 434:
ret=651;
break;
case 435:
ret=436;
break;
case 437:
ret=438;
break;
case 439:
ret=658;
break;
case 440:
ret=441;
break;
case 444:
ret=445;
break;
case 452:
ret=454;
break;
case 453:
ret=454;
break;
case 455:
ret=457;
break;
case 456:
ret=457;
break;
case 458:
ret=460;
break;
case 459:
ret=460;
break;
case 461:
ret=462;
break;
case 463:
ret=464;
break;
case 465:
ret=466;
break;
case 467:
ret=468;
break;
case 469:
ret=470;
break;
case 471:
ret=472;
break;
case 473:
ret=474;
break;
case 475:
ret=476;
break;
case 478:
ret=479;
break;
case 480:
ret=481;
break;
case 482:
ret=483;
break;
case 484:
ret=485;
break;
case 486:
ret=487;
break;
case 488:
ret=489;
break;
case 490:
ret=491;
break;
case 492:
ret=493;
break;
case 494:
ret=495;
break;
case 497:
ret=499;
break;
case 498:
ret=499;
break;
case 500:
ret=501;
break;
case 506:
ret=507;
break;
case 508:
ret=509;
break;
case 510:
ret=511;
break;
case 512:
ret=513;
break;
case 514:
ret=515;
break;
case 516:
ret=517;
break;
case 518:
ret=519;
break;
case 520:
ret=521;
break;
case 522:
ret=523;
break;
case 524:
ret=525;
break;
case 526:
ret=527;
break;
case 528:
ret=529;
break;
case 530:
ret=531;
break;
case 532:
ret=533;
break;
case 534:
ret=535;
break;
case 902:
ret=940;
break;
case 904:
ret=941;
break;
case 905:
ret=942;
break;
case 906:
ret=943;
break;
case 908:
ret=972;
break;
case 910:
ret=973;
break;
case 911:
ret=974;
break;
case 913:
ret=945;
break;
case 914:
ret=946;
break;
case 915:
ret=947;
break;
case 916:
ret=948;
break;
case 917:
ret=949;
break;
case 918:
ret=950;
break;
case 919:
ret=951;
break;
case 920:
ret=952;
break;
case 921:
ret=953;
break;
case 922:
ret=954;
break;
case 923:
ret=955;
break;
case 924:
ret=956;
break;
case 925:
ret=957;
break;
case 926:
ret=958;
break;
case 927:
ret=959;
break;
case 928:
ret=960;
break;
case 929:
ret=961;
break;
case 931:
ret=963;
break;
case 932:
ret=964;
break;
case 933:
ret=965;
break;
case 934:
ret=966;
break;
case 935:
ret=967;
break;
case 936:
ret=968;
break;
case 937:
ret=969;
break;
case 938:
ret=970;
break;
case 939:
ret=971;
break;
case 994:
ret=995;
break;
case 996:
ret=997;
break;
case 998:
ret=999;
break;
case 1000:
ret=1001;
break;
case 1002:
ret=1003;
break;
case 1004:
ret=1005;
break;
case 1006:
ret=1007;
break;
case 1025:
ret=1105;
break;
case 1026:
ret=1106;
break;
case 1027:
ret=1107;
break;
case 1028:
ret=1108;
break;
case 1029:
ret=1109;
break;
case 1030:
ret=1110;
break;
case 1031:
ret=1111;
break;
case 1032:
ret=1112;
break;
case 1033:
ret=1113;
break;
case 1034:
ret=1114;
break;
case 1035:
ret=1115;
break;
case 1036:
ret=1116;
break;
case 1038:
ret=1118;
break;
case 1039:
ret=1119;
break;
case 1040:
ret=1072;
break;
case 1041:
ret=1073;
break;
case 1042:
ret=1074;
break;
case 1043:
ret=1075;
break;
case 1044:
ret=1076;
break;
case 1045:
ret=1077;
break;
case 1046:
ret=1078;
break;
case 1047:
ret=1079;
break;
case 1048:
ret=1080;
break;
case 1049:
ret=1081;
break;
case 1050:
ret=1082;
break;
case 1051:
ret=1083;
break;
case 1052:
ret=1084;
break;
case 1053:
ret=1085;
break;
case 1054:
ret=1086;
break;
case 1055:
ret=1087;
break;
case 1056:
ret=1088;
break;
case 1057:
ret=1089;
break;
case 1058:
ret=1090;
break;
case 1059:
ret=1091;
break;
case 1060:
ret=1092;
break;
case 1061:
ret=1093;
break;
case 1062:
ret=1094;
break;
case 1063:
ret=1095;
break;
case 1064:
ret=1096;
break;
case 1065:
ret=1097;
break;
case 1066:
ret=1098;
break;
case 1067:
ret=1099;
break;
case 1068:
ret=1100;
break;
case 1069:
ret=1101;
break;
case 1070:
ret=1102;
break;
case 1071:
ret=1103;
break;
case 1120:
ret=1121;
break;
case 1122:
ret=1123;
break;
case 1124:
ret=1125;
break;
case 1126:
ret=1127;
break;
case 1128:
ret=1129;
break;
case 1130:
ret=1131;
break;
case 1132:
ret=1133;
break;
case 1134:
ret=1135;
break;
case 1136:
ret=1137;
break;
case 1138:
ret=1139;
break;
case 1140:
ret=1141;
break;
case 1142:
ret=1143;
break;
case 1144:
ret=1145;
break;
case 1146:
ret=1147;
break;
case 1148:
ret=1149;
break;
case 1150:
ret=1151;
break;
case 1152:
ret=1153;
break;
case 1168:
ret=1169;
break;
case 1170:
ret=1171;
break;
case 1172:
ret=1173;
break;
case 1174:
ret=1175;
break;
case 1176:
ret=1177;
break;
case 1178:
ret=1179;
break;
case 1180:
ret=1181;
break;
case 1182:
ret=1183;
break;
case 1184:
ret=1185;
break;
case 1186:
ret=1187;
break;
case 1188:
ret=1189;
break;
case 1190:
ret=1191;
break;
case 1192:
ret=1193;
break;
case 1194:
ret=1195;
break;
case 1196:
ret=1197;
break;
case 1198:
ret=1199;
break;
case 1200:
ret=1201;
break;
case 1202:
ret=1203;
break;
case 1204:
ret=1205;
break;
case 1206:
ret=1207;
break;
case 1208:
ret=1209;
break;
case 1210:
ret=1211;
break;
case 1212:
ret=1213;
break;
case 1214:
ret=1215;
break;
case 1217:
ret=1218;
break;
case 1219:
ret=1220;
break;
case 1223:
ret=1224;
break;
case 1227:
ret=1228;
break;
case 1232:
ret=1233;
break;
case 1234:
ret=1235;
break;
case 1236:
ret=1237;
break;
case 1238:
ret=1239;
break;
case 1240:
ret=1241;
break;
case 1242:
ret=1243;
break;
case 1244:
ret=1245;
break;
case 1246:
ret=1247;
break;
case 1248:
ret=1249;
break;
case 1250:
ret=1251;
break;
case 1252:
ret=1253;
break;
case 1254:
ret=1255;
break;
case 1256:
ret=1257;
break;
case 1258:
ret=1259;
break;
case 1262:
ret=1263;
break;
case 1264:
ret=1265;
break;
case 1266:
ret=1267;
break;
case 1268:
ret=1269;
break;
case 1272:
ret=1273;
break;
case 1329:
ret=1377;
break;
case 1330:
ret=1378;
break;
case 1331:
ret=1379;
break;
case 1332:
ret=1380;
break;
case 1333:
ret=1381;
break;
case 1334:
ret=1382;
break;
case 1335:
ret=1383;
break;
case 1336:
ret=1384;
break;
case 1337:
ret=1385;
break;
case 1338:
ret=1386;
break;
case 1339:
ret=1387;
break;
case 1340:
ret=1388;
break;
case 1341:
ret=1389;
break;
case 1342:
ret=1390;
break;
case 1343:
ret=1391;
break;
case 1344:
ret=1392;
break;
case 1345:
ret=1393;
break;
case 1346:
ret=1394;
break;
case 1347:
ret=1395;
break;
case 1348:
ret=1396;
break;
case 1349:
ret=1397;
break;
case 1350:
ret=1398;
break;
case 1351:
ret=1399;
break;
case 1352:
ret=1400;
break;
case 1353:
ret=1401;
break;
case 1354:
ret=1402;
break;
case 1355:
ret=1403;
break;
case 1356:
ret=1404;
break;
case 1357:
ret=1405;
break;
case 1358:
ret=1406;
break;
case 1359:
ret=1407;
break;
case 1360:
ret=1408;
break;
case 1361:
ret=1409;
break;
case 1362:
ret=1410;
break;
case 1363:
ret=1411;
break;
case 1364:
ret=1412;
break;
case 1365:
ret=1413;
break;
case 1366:
ret=1414;
break;
case 4256:
ret=4304;
break;
case 4257:
ret=4305;
break;
case 4258:
ret=4306;
break;
case 4259:
ret=4307;
break;
case 4260:
ret=4308;
break;
case 4261:
ret=4309;
break;
case 4262:
ret=4310;
break;
case 4263:
ret=4311;
break;
case 4264:
ret=4312;
break;
case 4265:
ret=4313;
break;
case 4266:
ret=4314;
break;
case 4267:
ret=4315;
break;
case 4268:
ret=4316;
break;
case 4269:
ret=4317;
break;
case 4270:
ret=4318;
break;
case 4271:
ret=4319;
break;
case 4272:
ret=4320;
break;
case 4273:
ret=4321;
break;
case 4274:
ret=4322;
break;
case 4275:
ret=4323;
break;
case 4276:
ret=4324;
break;
case 4277:
ret=4325;
break;
case 4278:
ret=4326;
break;
case 4279:
ret=4327;
break;
case 4280:
ret=4328;
break;
case 4281:
ret=4329;
break;
case 4282:
ret=4330;
break;
case 4283:
ret=4331;
break;
case 4284:
ret=4332;
break;
case 4285:
ret=4333;
break;
case 4286:
ret=4334;
break;
case 4287:
ret=4335;
break;
case 4288:
ret=4336;
break;
case 4289:
ret=4337;
break;
case 4290:
ret=4338;
break;
case 4291:
ret=4339;
break;
case 4292:
ret=4340;
break;
case 4293:
ret=4341;
break;
case 7680:
ret=7681;
break;
case 7682:
ret=7683;
break;
case 7684:
ret=7685;
break;
case 7686:
ret=7687;
break;
case 7688:
ret=7689;
break;
case 7690:
ret=7691;
break;
case 7692:
ret=7693;
break;
case 7694:
ret=7695;
break;
case 7696:
ret=7697;
break;
case 7698:
ret=7699;
break;
case 7700:
ret=7701;
break;
case 7702:
ret=7703;
break;
case 7704:
ret=7705;
break;
case 7706:
ret=7707;
break;
case 7708:
ret=7709;
break;
case 7710:
ret=7711;
break;
case 7712:
ret=7713;
break;
case 7714:
ret=7715;
break;
case 7716:
ret=7717;
break;
case 7718:
ret=7719;
break;
case 7720:
ret=7721;
break;
case 7722:
ret=7723;
break;
case 7724:
ret=7725;
break;
case 7726:
ret=7727;
break;
case 7728:
ret=7729;
break;
case 7730:
ret=7731;
break;
case 7732:
ret=7733;
break;
case 7734:
ret=7735;
break;
case 7736:
ret=7737;
break;
case 7738:
ret=7739;
break;
case 7740:
ret=7741;
break;
case 7742:
ret=7743;
break;
case 7744:
ret=7745;
break;
case 7746:
ret=7747;
break;
case 7748:
ret=7749;
break;
case 7750:
ret=7751;
break;
case 7752:
ret=7753;
break;
case 7754:
ret=7755;
break;
case 7756:
ret=7757;
break;
case 7758:
ret=7759;
break;
case 7760:
ret=7761;
break;
case 7762:
ret=7763;
break;
case 7764:
ret=7765;
break;
case 7766:
ret=7767;
break;
case 7768:
ret=7769;
break;
case 7770:
ret=7771;
break;
case 7772:
ret=7773;
break;
case 7774:
ret=7775;
break;
case 7776:
ret=7777;
break;
case 7778:
ret=7779;
break;
case 7780:
ret=7781;
break;
case 7782:
ret=7783;
break;
case 7784:
ret=7785;
break;
case 7786:
ret=7787;
break;
case 7788:
ret=7789;
break;
case 7790:
ret=7791;
break;
case 7792:
ret=7793;
break;
case 7794:
ret=7795;
break;
case 7796:
ret=7797;
break;
case 7798:
ret=7799;
break;
case 7800:
ret=7801;
break;
case 7802:
ret=7803;
break;
case 7804:
ret=7805;
break;
case 7806:
ret=7807;
break;
case 7808:
ret=7809;
break;
case 7810:
ret=7811;
break;
case 7812:
ret=7813;
break;
case 7814:
ret=7815;
break;
case 7816:
ret=7817;
break;
case 7818:
ret=7819;
break;
case 7820:
ret=7821;
break;
case 7822:
ret=7823;
break;
case 7824:
ret=7825;
break;
case 7826:
ret=7827;
break;
case 7828:
ret=7829;
break;
case 7840:
ret=7841;
break;
case 7842:
ret=7843;
break;
case 7844:
ret=7845;
break;
case 7846:
ret=7847;
break;
case 7848:
ret=7849;
break;
case 7850:
ret=7851;
break;
case 7852:
ret=7853;
break;
case 7854:
ret=7855;
break;
case 7856:
ret=7857;
break;
case 7858:
ret=7859;
break;
case 7860:
ret=7861;
break;
case 7862:
ret=7863;
break;
case 7864:
ret=7865;
break;
case 7866:
ret=7867;
break;
case 7868:
ret=7869;
break;
case 7870:
ret=7871;
break;
case 7872:
ret=7873;
break;
case 7874:
ret=7875;
break;
case 7876:
ret=7877;
break;
case 7878:
ret=7879;
break;
case 7880:
ret=7881;
break;
case 7882:
ret=7883;
break;
case 7884:
ret=7885;
break;
case 7886:
ret=7887;
break;
case 7888:
ret=7889;
break;
case 7890:
ret=7891;
break;
case 7892:
ret=7893;
break;
case 7894:
ret=7895;
break;
case 7896:
ret=7897;
break;
case 7898:
ret=7899;
break;
case 7900:
ret=7901;
break;
case 7902:
ret=7903;
break;
case 7904:
ret=7905;
break;
case 7906:
ret=7907;
break;
case 7908:
ret=7909;
break;
case 7910:
ret=7911;
break;
case 7912:
ret=7913;
break;
case 7914:
ret=7915;
break;
case 7916:
ret=7917;
break;
case 7918:
ret=7919;
break;
case 7920:
ret=7921;
break;
case 7922:
ret=7923;
break;
case 7924:
ret=7925;
break;
case 7926:
ret=7927;
break;
case 7928:
ret=7929;
break;
case 7944:
ret=7936;
break;
case 7945:
ret=7937;
break;
case 7946:
ret=7938;
break;
case 7947:
ret=7939;
break;
case 7948:
ret=7940;
break;
case 7949:
ret=7941;
break;
case 7950:
ret=7942;
break;
case 7951:
ret=7943;
break;
case 7960:
ret=7952;
break;
case 7961:
ret=7953;
break;
case 7962:
ret=7954;
break;
case 7963:
ret=7955;
break;
case 7964:
ret=7956;
break;
case 7965:
ret=7957;
break;
case 7976:
ret=7968;
break;
case 7977:
ret=7969;
break;
case 7978:
ret=7970;
break;
case 7979:
ret=7971;
break;
case 7980:
ret=7972;
break;
case 7981:
ret=7973;
break;
case 7982:
ret=7974;
break;
case 7983:
ret=7975;
break;
case 7992:
ret=7984;
break;
case 7993:
ret=7985;
break;
case 7994:
ret=7986;
break;
case 7995:
ret=7987;
break;
case 7996:
ret=7988;
break;
case 7997:
ret=7989;
break;
case 7998:
ret=7990;
break;
case 7999:
ret=7991;
break;
case 8008:
ret=8000;
break;
case 8009:
ret=8001;
break;
case 8010:
ret=8002;
break;
case 8011:
ret=8003;
break;
case 8012:
ret=8004;
break;
case 8013:
ret=8005;
break;
case 8025:
ret=8017;
break;
case 8027:
ret=8019;
break;
case 8029:
ret=8021;
break;
case 8031:
ret=8023;
break;
case 8040:
ret=8032;
break;
case 8041:
ret=8033;
break;
case 8042:
ret=8034;
break;
case 8043:
ret=8035;
break;
case 8044:
ret=8036;
break;
case 8045:
ret=8037;
break;
case 8046:
ret=8038;
break;
case 8047:
ret=8039;
break;
case 8072:
ret=8064;
break;
case 8073:
ret=8065;
break;
case 8074:
ret=8066;
break;
case 8075:
ret=8067;
break;
case 8076:
ret=8068;
break;
case 8077:
ret=8069;
break;
case 8078:
ret=8070;
break;
case 8079:
ret=8071;
break;
case 8088:
ret=8080;
break;
case 8089:
ret=8081;
break;
case 8090:
ret=8082;
break;
case 8091:
ret=8083;
break;
case 8092:
ret=8084;
break;
case 8093:
ret=8085;
break;
case 8094:
ret=8086;
break;
case 8095:
ret=8087;
break;
case 8104:
ret=8096;
break;
case 8105:
ret=8097;
break;
case 8106:
ret=8098;
break;
case 8107:
ret=8099;
break;
case 8108:
ret=8100;
break;
case 8109:
ret=8101;
break;
case 8110:
ret=8102;
break;
case 8111:
ret=8103;
break;
case 8120:
ret=8112;
break;
case 8121:
ret=8113;
break;
case 8122:
ret=8048;
break;
case 8123:
ret=8049;
break;
case 8124:
ret=8115;
break;
case 8136:
ret=8050;
break;
case 8137:
ret=8051;
break;
case 8138:
ret=8052;
break;
case 8139:
ret=8053;
break;
case 8140:
ret=8131;
break;
case 8152:
ret=8144;
break;
case 8153:
ret=8145;
break;
case 8154:
ret=8054;
break;
case 8155:
ret=8055;
break;
case 8168:
ret=8160;
break;
case 8169:
ret=8161;
break;
case 8170:
ret=8058;
break;
case 8171:
ret=8059;
break;
case 8172:
ret=8165;
break;
case 8184:
ret=8056;
break;
case 8185:
ret=8057;
break;
case 8186:
ret=8060;
break;
case 8187:
ret=8061;
break;
case 8188:
ret=8179;
break;
case 8544:
ret=8560;
break;
case 8545:
ret=8561;
break;
case 8546:
ret=8562;
break;
case 8547:
ret=8563;
break;
case 8548:
ret=8564;
break;
case 8549:
ret=8565;
break;
case 8550:
ret=8566;
break;
case 8551:
ret=8567;
break;
case 8552:
ret=8568;
break;
case 8553:
ret=8569;
break;
case 8554:
ret=8570;
break;
case 8555:
ret=8571;
break;
case 8556:
ret=8572;
break;
case 8557:
ret=8573;
break;
case 8558:
ret=8574;
break;
case 8559:
ret=8575;
break;
case 9398:
ret=9424;
break;
case 9399:
ret=9425;
break;
case 9400:
ret=9426;
break;
case 9401:
ret=9427;
break;
case 9402:
ret=9428;
break;
case 9403:
ret=9429;
break;
case 9404:
ret=9430;
break;
case 9405:
ret=9431;
break;
case 9406:
ret=9432;
break;
case 9407:
ret=9433;
break;
case 9408:
ret=9434;
break;
case 9409:
ret=9435;
break;
case 9410:
ret=9436;
break;
case 9411:
ret=9437;
break;
case 9412:
ret=9438;
break;
case 9413:
ret=9439;
break;
case 9414:
ret=9440;
break;
case 9415:
ret=9441;
break;
case 9416:
ret=9442;
break;
case 9417:
ret=9443;
break;
case 9418:
ret=9444;
break;
case 9419:
ret=9445;
break;
case 9420:
ret=9446;
break;
case 9421:
ret=9447;
break;
case 9422:
ret=9448;
break;
case 9423:
ret=9449;
break;
case 65313:
ret=65345;
break;
case 65314:
ret=65346;
break;
case 65315:
ret=65347;
break;
case 65316:
ret=65348;
break;
case 65317:
ret=65349;
break;
case 65318:
ret=65350;
break;
case 65319:
ret=65351;
break;
case 65320:
ret=65352;
break;
case 65321:
ret=65353;
break;
case 65322:
ret=65354;
break;
case 65323:
ret=65355;
break;
case 65324:
ret=65356;
break;
case 65325:
ret=65357;
break;
case 65326:
ret=65358;
break;
case 65327:
ret=65359;
break;
case 65328:
ret=65360;
break;
case 65329:
ret=65361;
break;
case 65330:
ret=65362;
break;
case 65331:
ret=65363;
break;
case 65332:
ret=65364;
break;
case 65333:
ret=65365;
break;
case 65334:
ret=65366;
break;
case 65335:
ret=65367;
break;
case 65336:
ret=65368;
break;
case 65337:
ret=65369;
break;
case 65338:
ret=65370;
break;
}
return String.fromCharCode(ret);
}return Character.toLowerCase$C(c);
}, 1);

Clazz.newMeth(C$, 'toTitleCase$S', function (s) {
var sb=Clazz.new_($I$(1,1));
for (var i=0; i < s.length$(); i++) {
sb.append$C(C$.toTitleCase$C(s.charAt$I(i)));
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'toUpperCase$S', function (s) {
var sb=Clazz.new_($I$(1,1));
for (var i=0; i < s.length$(); i++) {
sb.append$C(C$.toUpperCase$C(s.charAt$I(i)));
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'toLowerCase$S', function (s) {
var sb=Clazz.new_($I$(1,1));
for (var i=0; i < s.length$(); i++) {
sb.append$C(C$.toLowerCase$C(s.charAt$I(i)));
}
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'toTitleCase$C', function (c) {
if (false) {
var ret=C$.toUpperCase$C(c).$c();
switch (c.$c()) {
case 452:
ret=453;
break;
case 453:
ret=453;
break;
case 454:
ret=453;
break;
case 455:
ret=456;
break;
case 456:
ret=456;
break;
case 457:
ret=456;
break;
case 458:
ret=459;
break;
case 459:
ret=459;
break;
case 460:
ret=459;
break;
case 497:
ret=498;
break;
case 498:
ret=498;
break;
case 499:
ret=498;
break;
}
return String.fromCharCode(ret);
}return Character.toTitleCase$C(c);
}, 1);

Clazz.newMeth(C$, 'regionMatches$com_stevesoft_pat_StringLike$Z$I$com_stevesoft_pat_StringLike$I$I', function (s1, ign, i1, s2, i2, i3) {
var itot=i2 + i3;
if (itot > s2.length$() || i1 + i3 > s1.length$() ) {
return false;
}if (!ign) {
for (var i=i2; i < itot; i++) {
if (s2.charAt$I(i) != s1.charAt$I(i1++)) {
return false;
}}
} else {
for (var i=i2; i < itot; i++) {
if (C$.toLowerCase$C(s2.charAt$I(i)) != C$.toLowerCase$C(s1.charAt$I(i1++))) {
return false;
}}
}return true;
}, 1);

Clazz.newMeth(C$, 'regionMatches$S$Z$I$com_stevesoft_pat_StringLike$I$I', function (s1, ign, i1, s2, i2, i3) {
var itot=i2 + i3;
if (itot > s2.length$() || i1 + i3 > s1.length$() ) {
return false;
}if (!ign) {
for (var i=i2; i < itot; i++) {
if (s2.charAt$I(i) != s1.charAt$I(i1++)) {
return false;
}}
} else {
for (var i=i2; i < itot; i++) {
if (C$.toLowerCase$C(s2.charAt$I(i)) != C$.toLowerCase$C(s1.charAt$I(i1++))) {
return false;
}}
}return true;
}, 1);

Clazz.newMeth(C$, 'regionMatches$com_stevesoft_pat_StringLike$Z$I$S$I$I', function (s1, ign, i1, s2, i2, i3) {
var itot=i2 + i3;
if (itot > s2.length$() || i1 + i3 > s1.length$() ) {
return false;
}if (!ign) {
for (var i=i2; i < itot; i++) {
if (s2.charAt$I(i) != s1.charAt$I(i1++)) {
return false;
}}
} else {
for (var i=i2; i < itot; i++) {
if (C$.toLowerCase$C(s2.charAt$I(i)) != C$.toLowerCase$C(s1.charAt$I(i1++))) {
return false;
}}
}return true;
}, 1);

Clazz.newMeth(C$, 'regionMatches$S$Z$I$S$I$I', function (s1, ign, i1, s2, i2, i3) {
var itot=i2 + i3;
if (itot > s2.length$() || i1 + i3 > s1.length$() ) {
return false;
}if (!ign) {
for (var i=i2; i < itot; i++) {
if (s2.charAt$I(i) != s1.charAt$I(i1++)) {
return false;
}}
} else {
for (var i=i2; i < itot; i++) {
if (C$.toLowerCase$C(s2.charAt$I(i)) != C$.toLowerCase$C(s1.charAt$I(i1++))) {
return false;
}}
}return true;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap");
/*c*/var C$=Clazz.newClass(P$, "WriterWrap", null, null, 'com.stevesoft.pat.BasicStringBufferLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['w','java.io.Writer']]]

Clazz.newMeth(C$, 'c$$java_io_Writer', function (w) {
;C$.$init$.apply(this);
this.w=w;
}, 1);

Clazz.newMeth(C$, 'append$C', function (c) {
try {
this.w.write$I(c.$c());
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'append$S', function (s) {
try {
this.w.write$S(s);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'toStringLike$', function () {
return null;
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.w;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'java.io.RandomAccessFile','jalview.util.MessageManager','Error','StringBuffer','com.stevesoft.pat.wrap.StringBufferWrap']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RandomAccessFileWrap", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offset=0;
this.i0=0;
this.iend=0;
this.buf=Clazz.array(Byte.TYPE, [1024]);
},1);

C$.$fields$=[['I',['i0','iend'],'J',['offset'],'O',['raf','java.io.RandomAccessFile','buf','byte[]']]]

Clazz.newMeth(C$, 'setOffset$J', function (o) {
this.offset=o;
this.i0=this.iend=0;
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'getBufferSize$', function () {
return this.buf.length;
});

Clazz.newMeth(C$, 'setBufferSize$I', function (bs) {
this.buf=Clazz.array(Byte.TYPE, [bs]);
this.i0=this.iend=0;
});

Clazz.newMeth(C$, 'c$$S', function (file) {
;C$.$init$.apply(this);
this.raf=Clazz.new_($I$(1,1).c$$S$S,[file, "r"]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_RandomAccessFile', function (raf) {
;C$.$init$.apply(this);
this.raf=raf;
}, 1);

Clazz.newMeth(C$, 'charAt$I', function (i) {
if (i >= this.i0 && i < this.iend ) {
return String.fromCharCode(this.buf[i - this.i0]);
}try {
this.i0=i - 5;
if (this.i0 < 0) {
this.i0=0;
}this.raf.seek$J(this.i0 + this.offset);
this.iend=this.i0 + this.raf.read$BA$I$I(this.buf, 0, this.buf.length);
if (i >= this.i0 && i < this.iend ) {
return String.fromCharCode(this.buf[i - this.i0]);
}} catch (t) {
}
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,[$I$(2,"formatMessage$S$SA",["exception.out_of_bounds_for_file", Clazz.array(String, -1, [Integer.valueOf$I(i).toString(), Integer.valueOf$I(this.i0).toString(), Integer.valueOf$I(this.iend).toString()])])]);
});

Clazz.newMeth(C$, 'toString', function () {
throw Clazz.new_([$I$(2).getString$S("error.not_implemented")],$I$(3,1).c$$S);
});

Clazz.newMeth(C$, 'length$', function () {
try {
var len=this.raf.length$() - this.offset;
if (len > 2147483647) {
return 2147483647;
}return (len|0);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
return 0;
} else {
throw ioe;
}
}
});

Clazz.newMeth(C$, 'substring$I$I', function (i1, i2) {
var sb=Clazz.new_($I$(4,1));
for (var i=i1; i < i2; i++) {
sb.append$C(this.charAt$I(i));
}
return sb.toString();
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.raf;
});

Clazz.newMeth(C$, 'newStringBufferLike$', function () {
return Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, 'indexOf$C', function (c) {
for (var i=0; i < this.length$(); i++) {
if (this.charAt$I(i) == c) {
return i;
}}
return -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'StringBuffer','com.stevesoft.pat.wrap.StringWrap']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringBufferWrap", null, null, 'com.stevesoft.pat.BasicStringBufferLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sb=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['sb','StringBuffer']]]

Clazz.newMeth(C$, 'append$C', function (c) {
this.sb.append$C(c);
});

Clazz.newMeth(C$, 'append$S', function (s) {
this.sb.append$S(s);
});

Clazz.newMeth(C$, 'length$', function () {
return this.sb.length$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.sb.toString();
});

Clazz.newMeth(C$, 'toStringLike$', function () {
return Clazz.new_([this.sb.toString()],$I$(2,1).c$$S);
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.sb;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'StringBuffer','com.stevesoft.pat.wrap.CharArrayWrap']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharArrayBufferWrap", null, null, 'com.stevesoft.pat.BasicStringBufferLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sb=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['sb','StringBuffer']]]

Clazz.newMeth(C$, 'append$C', function (c) {
this.sb.append$C(c);
});

Clazz.newMeth(C$, 'append$S', function (s) {
this.sb.append$S(s);
});

Clazz.newMeth(C$, 'toStringLike$', function () {
var ca=Clazz.array(Character.TYPE, [this.sb.length$()]);
for (var i=0; i < ca.length; i++) {
ca[i]=this.sb.charAt$I(i);
}
return Clazz.new_($I$(2,1).c$$CA,[ca]);
});

Clazz.newMeth(C$, 'length$', function () {
return this.sb.length$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.sb.toString();
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.sb;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'StringBuffer','com.stevesoft.pat.wrap.CharArrayBufferWrap']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharArrayWrap", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['ca','char[]']]]

Clazz.newMeth(C$, 'getCharArray$', function () {
return this.ca;
});

Clazz.newMeth(C$, 'c$$CA', function (ca) {
;C$.$init$.apply(this);
this.ca=ca;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return  String.instantialize(this.ca);
});

Clazz.newMeth(C$, 'charAt$I', function (i) {
return this.ca[i];
});

Clazz.newMeth(C$, 'length$', function () {
return this.ca.length;
});

Clazz.newMeth(C$, 'substring$I$I', function (i1, i2) {
var sb=Clazz.new_($I$(1,1));
for (var i=i1; i < i2; i++) {
sb.append$C(this.ca[i]);
}
return sb.toString();
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.ca;
});

Clazz.newMeth(C$, 'newStringBufferLike$', function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'indexOf$C', function (c) {
for (var i=0; i < this.ca.length; i++) {
if (this.ca[i] == c) {
return i;
}}
return -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat.wrap"),I$=[[0,'com.stevesoft.pat.wrap.StringBufferWrap']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringWrap", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.$init$.apply(this);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.s;
});

Clazz.newMeth(C$, 'charAt$I', function (i) {
return this.s.charAt$I(i);
});

Clazz.newMeth(C$, 'length$', function () {
return this.s.length$();
});

Clazz.newMeth(C$, 'substring$I$I', function (i1, i2) {
return this.s.substring$I$I(i1, i2);
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.s;
});

Clazz.newMeth(C$, 'newStringBufferLike$', function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'indexOf$C', function (c) {
return this.s.indexOf$I(c);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer','com.stevesoft.pat.PartialBuffer','com.stevesoft.pat.wrap.WriterWrap','com.stevesoft.pat.StringBufferLike','java.io.StringWriter','com.stevesoft.pat.Regex']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RegexWriter", null, 'java.io.Writer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sb=Clazz.new_($I$(1,1));
this.wrap=Clazz.new_($I$(2,1).c$$StringBuffer,[this.sb]);
this.interval=128;
this.bufferSize=2048;
this.EOLchar="\n";
this.max_lines=2;
},1);

C$.$fields$=[['C',['EOLchar'],'I',['pos','epos','interval','bufferSize','max_lines'],'O',['repr','com.stevesoft.pat.Replacer','w','java.io.Writer','ww','com.stevesoft.pat.wrap.WriterWrap','sb','StringBuffer','wrap','com.stevesoft.pat.PartialBuffer']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Transformer$java_io_Writer', function (t, w) {
Clazz.super_(C$, this);
this.w=w;
this.ww=Clazz.new_($I$(3,1).c$$java_io_Writer,[w]);
this.repr=t.getReplacer$();
this.repr.setBuffer$com_stevesoft_pat_StringBufferLike(Clazz.new_($I$(4,1).c$$com_stevesoft_pat_BasicStringBufferLike,[this.ww]));
this.repr.setSource$com_stevesoft_pat_StringLike(this.wrap);
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Regex$java_io_Writer', function (r, w) {
Clazz.super_(C$, this);
this.w=w;
this.ww=Clazz.new_($I$(3,1).c$$java_io_Writer,[w]);
this.repr=r.getReplacer$();
this.repr.setBuffer$com_stevesoft_pat_StringBufferLike(Clazz.new_($I$(4,1).c$$com_stevesoft_pat_BasicStringBufferLike,[this.ww]));
this.repr.setSource$com_stevesoft_pat_StringLike(this.wrap);
}, 1);

Clazz.newMeth(C$, 'getEOLchar$', function () {
return this.EOLchar;
});

Clazz.newMeth(C$, 'setEOLchar$C', function (c) {
this.EOLchar=c;
});

Clazz.newMeth(C$, 'getMaxLines$', function () {
return this.max_lines;
});

Clazz.newMeth(C$, 'setMaxLines$I', function (ml) {
this.max_lines=ml;
});

Clazz.newMeth(C$, 'write$', function () {
var rex=this.repr.getRegex$();
var eposOld=this.epos;
if (rex.matchAt$com_stevesoft_pat_StringLike$I(this.wrap, this.epos) && !this.wrap.overRun ) {
while (this.pos < this.epos){
this.w.write$I(this.sb.charAt$I(this.pos++).$c());
}
var to=rex.matchedTo$();
this.repr.setPos$I(to);
this.repr.apply$com_stevesoft_pat_RegRes$com_stevesoft_pat_ReplaceRule(rex, rex.getReplaceRule$());
this.epos=this.pos=to;
if (this.epos == eposOld && this.epos < this.sb.length$() ) {
this.epos++;
}} else if (!this.wrap.overRun && this.epos < this.sb.length$() ) {
this.epos++;
}while (this.pos < this.epos){
this.w.write$I(this.sb.charAt$I(this.pos++).$c());
}
if (this.epos == this.sb.length$()) {
this.sb.setLength$I(1);
this.pos=this.epos=1;
} else if (this.pos > this.bufferSize) {
for (var i=this.bufferSize; i < this.sb.length$(); i++) {
this.sb.setCharAt$I$C(i - this.bufferSize, this.sb.charAt$I(i));
}
this.pos-=this.bufferSize;
this.epos-=this.bufferSize;
this.sb.setLength$I(this.sb.length$() - this.bufferSize);
}});

Clazz.newMeth(C$, 'write$CA$I$I', function (ca, b, n) {
var m=b + n;
for (var i=b; i < m; i++) {
this.sb.append$C(ca[i]);
if (this.sb.length$() % this.interval == this.interval - 1) {
this.wrap.overRun=false;
while (this.epos + this.interval < this.sb.length$() && !this.wrap.overRun ){
this.write$();
}
}}
});

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'close$', function () {
this.wrap.allowOverRun=false;
this.wrap.overRun=false;
while (this.epos < this.sb.length$()){
this.write$();
}
this.write$();
this.w.close$();
});

Clazz.newMeth(C$, 'length$', function () {
return this.sb.length$();
});

Clazz.newMeth(C$, 'charAt$I', function (i) {
return this.sb.charAt$I(i);
});

Clazz.newMeth(C$, 'setInterval$I', function (i) {
this.interval=i;
});

Clazz.newMeth(C$, 'getInterval$', function () {
return this.interval;
});

Clazz.newMeth(C$, 'getBufferSize$', function () {
return this.bufferSize;
});

Clazz.newMeth(C$, 'setBufferSize$I', function (i) {
this.bufferSize=i;
});

Clazz.newMeth(C$, 'test$S$S$I', function (re, inp, n) {
var sw=Clazz.new_($I$(5,1));
var rex=$I$(6).perlCode$S(re);
var res1=rex.replaceAll$S(inp);
var rw=Clazz.new_(C$.c$$com_stevesoft_pat_Regex$java_io_Writer,[rex, sw]);
for (var i=0; i < inp.length$(); i++) {
rw.write$I(inp.charAt$I(i).$c());
}
rw.close$();
var res2=sw.toString();
if (!res1.equals$O(res2)) {
System.out.println$S("nmax=" + n);
System.out.println$S("re=" + re);
System.out.println$S("inp=" + inp);
System.out.println$S("res1=" + res1);
System.out.println$S("res2=" + res2);
System.exit$I(255);
}}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
for (var n=1; n <= 1; n++) {
C$.test$S$S$I("s/x/y/", "-----x123456789", n);
C$.test$S$S$I("s/x/y/", "x123456789", n);
C$.test$S$S$I("s/x/y/", "-----x", n);
C$.test$S$S$I("s/x.*?x/y/", ".xx..x..x...x...x....x....x", n);
C$.test$S$S$I("s/x.*x/[$&]/", "--x........x--xx", n);
C$.test$S$S$I("s/x.*x/[$&]/", "--x........x------", n);
C$.test$S$S$I("s/.$/a/m", "bb\nbbb\nbbbb\nbbbbb\nbbbbbb\nbbbbbbbbbbbb", n);
C$.test$S$S$I("s/.$/a/", "123", n);
C$.test$S$S$I("s/.$/a/", "bb\nbbb\nbbbb\nbbbbb\nbbbbbb\nbb", n);
C$.test$S$S$I("s/^./a/", "bb\nbbb\nbbbb\nbbbbb\nbbbbbb\nbb", n);
C$.test$S$S$I("s/$/a/", "bbb", n);
C$.test$S$S$I("s/^/a/", "bbb", n);
C$.test$S$S$I("s/^/a/", "", n);
C$.test$S$S$I("s{.*}{N}", "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", n);
C$.test$S$S$I("s/.{0,7}/y/", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", n);
C$.test$S$S$I("s/x/$&/", "xxx", n);
}
System.out.println$S("Success!!!");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Vector','com.stevesoft.pat.oneChar','com.stevesoft.pat.Range','java.util.BitSet']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FastBracket", null, 'com.stevesoft.pat.Bracket');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['min','max'],'O',['bs','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$Z', function (n) {
;C$.superclazz.c$$Z.apply(this,[n]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'process$com_stevesoft_pat_Bracket$Z', function (b, ignc) {
var v=b.v;
b.pv=null;
try {
var nv=v;
if (ignc) {
nv=Clazz.new_($I$(1,1));
for (var i=0; i < v.size$(); i++) {
var p=v.elementAt$I(i);
nv.addElement$O(p);
if (Clazz.instanceOf(p, "com.stevesoft.pat.oneChar")) {
var oc=p;
nv.addElement$O(Clazz.new_($I$(2,1).c$$C,[oc.altc]));
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Range")) {
var ra=p;
nv.addElement$O(Clazz.new_($I$(3,1).c$$C$C,[ra.altlo, ra.althi]));
}}
}v=nv;
for (var i=0; i < v.size$() - 1; i++) {
for (var j=0; j < v.size$() - 1; j++) {
var c1=C$.getl$O(v.elementAt$I(j));
var c2=C$.getl$O(v.elementAt$I(j + 1));
if (c2 < c1) {
var o=v.elementAt$I(j);
v.setElementAt$O$I(v.elementAt$I(j + 1), j);
v.setElementAt$O$I(o, j + 1);
}}
}
nv=Clazz.new_($I$(1,1));
var p=v.elementAt$I(0);
nv.addElement$O(p);
for (var i=1; i < v.size$(); i++) {
if ((C$.geth$O(p)).$c() + 1 >= (C$.getl$O(v.elementAt$I(i))).$c() ) {
var p2=v.elementAt$I(i);
var lo=C$.min$C$C(C$.getl$O(p), C$.getl$O(p2));
var hi=C$.max$C$C(C$.geth$O(p), C$.geth$O(p2));
nv.setElementAt$O$I(p=C$.mkelem$C$C(lo, hi), nv.size$() - 1);
} else {
p=v.elementAt$I(i);
nv.addElement$O(p);
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
fb.bs=Clazz.new_($I$(4,1).c$$I,[fb.max - fb.min + 1]);
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
var nv=Clazz.new_($I$(1,1));
if (v.size$() == 0) {
nv.addElement$O(Clazz.new_($I$(3,1).c$$C$C,["\u0000", "\uffff"]));
return nv;
}var p0=C$.getl$O(v.elementAt$I(0)).$c();
if (p0 != 0) {
nv.addElement$O(C$.mkelem$C$C("\u0000", String.fromCharCode((p0 - 1))));
}for (var i=0; i < v.size$() - 1; i++) {
var hi=(C$.getl$O(v.elementAt$I(i + 1))).$c() - 1;
var lo=(C$.geth$O(v.elementAt$I(i))).$c() + 1;
nv.addElement$O(C$.mkelem$C$C(String.fromCharCode(lo), String.fromCharCode(hi)));
}
var pN=C$.geth$O(v.lastElement$()).$c();
if (pN != 65535) {
nv.addElement$O(C$.mkelem$C$C(String.fromCharCode((pN + 1)), "\uffff"));
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
return lo == hi ? (Clazz.new_($I$(2,1).c$$C,[lo])) : (Clazz.new_($I$(3,1).c$$C$C,[lo, hi]));
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NUnicodeW", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
if (from >= s.length$()) {
return -1;
}var c=s.charAt$I(from);
return !($I$(1).isAlphabetic$C(c) || $I$(1).isDecimalDigit$C(c) || c == "_"  ) ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Multi_stage2", null, 'com.stevesoft.pat.PatternSub');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.matchFewest=false;
this.pos_old=-1;
},1);

C$.$fields$=[['Z',['matchFewest'],'I',['pos_old'],'O',['nextRet','com.stevesoft.pat.Pattern','count','com.stevesoft.pat.patInt','+matchMin','+matchMax']]]

Clazz.newMeth(C$, 'toString', function () {
var ret="";
ret += this.sub.toString();
ret += "{" + this.matchMin + "," + this.matchMax + "}" ;
if (this.matchFewest) {
ret += "?";
}ret += this.parent.nextString$();
return ret;
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern', function (a, b, p) {
Clazz.super_(C$, this);
if (p == null ) {
$I$(1).endItAll$S("Multiple match of Null pattern requested.");
}this.sub=p;
this.nextRet=this;
this.sub.setParent$com_stevesoft_pat_Pattern(this);
this.matchMin=a;
this.matchMax=b;
this.count=Clazz.new_($I$(2,1).c$$I,[0]);
if (!a.lessEq$com_stevesoft_pat_patInt(b)) {
$I$(1).endItAll$S("Bad Multi Args: " + a + ">" + b );
}var i=Clazz.new_($I$(2,1).c$$I,[-1]);
if (a.lessEq$com_stevesoft_pat_patInt(i)) {
$I$(1).endItAll$S("Bad Multi Args: " + a + "< 0" );
}}, 1);

Clazz.newMeth(C$, 'getNext$', function () {
return this.nextRet;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
this.sub.setParent$com_stevesoft_pat_Pattern(this);
var canUse=-1;
if (this.pos_old >= 0 && pos == this.pos_old ) {
return -1;
}this.pos_old=pos;
if (this.matchMin.lessEq$com_stevesoft_pat_patInt(this.count)) {
canUse=pos;
}if (!this.count.lessEq$com_stevesoft_pat_patInt(this.matchMax) || pos > pt.src.length$() ) {
return -1;
}if ((this.matchFewest || this.count.equals$com_stevesoft_pat_patInt(this.matchMax) ) && canUse >= 0 ) {
var n=C$.superclazz.prototype.getNext$.apply(this, []);
if (n == null ) {
return canUse;
}var ret=this.testMatch$com_stevesoft_pat_Pattern$I$com_stevesoft_pat_Pthings(n, pos, pt);
if (ret >= 0) {
return ret;
} else {
canUse=-1;
}}this.count.inc$();
try {
if (this.count.lessEq$com_stevesoft_pat_patInt(this.matchMax)) {
var r=this.testMatch$com_stevesoft_pat_Pattern$I$com_stevesoft_pat_Pthings(this.sub, pos, pt);
if (r >= 0) {
return r;
}}} finally {
this.count.dec$();
}
if (!this.matchFewest && canUse >= 0 ) {
var n=C$.superclazz.prototype.getNext$.apply(this, []);
if (n == null ) {
return canUse;
}var ret=this.testMatch$com_stevesoft_pat_Pattern$I$com_stevesoft_pat_Pthings(n, pos, pt);
return ret;
} else {
return canUse;
}});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
try {
var m=Clazz.new_(C$.c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[this.matchMin, this.matchMax, this.sub.clone$java_util_Hashtable(h)]);
m.matchFewest=this.matchFewest;
return m;
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
return null;
} else {
throw rs;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Hashtable','java.util.Vector','com.stevesoft.pat.oneChar','com.stevesoft.pat.FastChar','com.stevesoft.pat.patInt','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegOpt','com.stevesoft.pat.Or','StringBuffer','com.stevesoft.pat.FastBracket','com.stevesoft.pat.Branch','com.stevesoft.pat.FastMulti']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Branch", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.h=Clazz.new_($I$(1,1));
this.keys=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['h','java.util.Hashtable','keys','java.util.Vector']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (x) {
var b=Clazz.new_(C$);
b.keys=this.keys.clone$();
x.put$O$O(this, b);
x.put$O$O(b, b);
for (var i=0; i < this.keys.size$(); i++) {
var p=this.h.get$O(this.keys.elementAt$I(i));
b.h.put$O$O(this.keys.elementAt$I(i), p.clone$java_util_Hashtable(x));
}
return b;
});

Clazz.newMeth(C$, 'reduce$Z$Z', function (ignoreCase, dontMinQ) {
if (this.h.size$() == 1) {
var e=this.h.keys$();
var c=e.nextElement$();
var oc;
if (ignoreCase || dontMinQ ) {
oc=Clazz.new_([c.charValue$()],$I$(3,1).c$$C);
} else {
oc=Clazz.new_([c.charValue$()],$I$(4,1).c$$C);
}oc.next=this.h.get$O(c);
oc.add$com_stevesoft_pat_Pattern(this.next);
return oc;
} else if (this.h.size$() == 0) {
return null;
}return this;
});

Clazz.newMeth(C$, 'maxChars$', function () {
var e=this.h.keys$();
var count=Clazz.new_($I$(5,1).c$$I,[0]);
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
var count=Clazz.new_($I$(5,1).c$$I,[0]);
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
n=Clazz.new_($I$(6,1));
} else {
n=$I$(7).opt$com_stevesoft_pat_Pattern$Z$Z(n, ignoreCase, dontMinQ);
}n.setParent$com_stevesoft_pat_Pattern(this);
this.set$Character$com_stevesoft_pat_Pattern$Z$Z(Character.valueOf$C(o.c), n, ignoreCase, dontMinQ);
if (ignoreCase) {
if (o.c != o.altc) {
this.set$Character$com_stevesoft_pat_Pattern$Z$Z(Character.valueOf$C(o.altc), n, ignoreCase, dontMinQ);
}if (o.c != o.altc2 && o.altc != o.altc2 ) {
this.set$Character$com_stevesoft_pat_Pattern$Z$Z(Character.valueOf$C(o.altc2), n, ignoreCase, dontMinQ);
}}});

Clazz.newMeth(C$, 'set$Character$com_stevesoft_pat_Pattern$Z$Z', function (c, n, igc, dontMinQ) {
var p=this.h.get$O(c);
this.next=null;
if (p == null ) {
if (Clazz.instanceOf(n, "com.stevesoft.pat.Or")) {
var np=Clazz.new_($I$(6,1));
np.add$com_stevesoft_pat_Pattern(n);
this.h.put$O$O(c, np);
} else {
this.h.put$O$O(c, n);
}this.keys.addElement$O(c);
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Or")) {
(p).addOr$com_stevesoft_pat_Pattern(n);
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.oneChar") && Clazz.instanceOf(n, "com.stevesoft.pat.oneChar") && (p).c != (n).c  ) {
var b=Clazz.new_(C$);
b.addc$com_stevesoft_pat_oneChar$Z$Z(p, igc, dontMinQ);
b.addc$com_stevesoft_pat_oneChar$Z$Z(n, igc, dontMinQ);
this.h.put$O$O(c, b);
b.setParent$com_stevesoft_pat_Pattern(this);
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Branch") && Clazz.instanceOf(n, "com.stevesoft.pat.oneChar") ) {
(p).addc$com_stevesoft_pat_oneChar$Z$Z(n, igc, dontMinQ);
n.setParent$com_stevesoft_pat_Pattern(p);
} else {
var o=Clazz.new_($I$(8,1));
o.setParent$com_stevesoft_pat_Pattern(this);
if (Clazz.instanceOf(p, "com.stevesoft.pat.NullPattern") && p.parent == null   && p.next != null  ) {
o.addOr$com_stevesoft_pat_Pattern(p.next);
} else {
o.addOr$com_stevesoft_pat_Pattern(p);
}o.addOr$com_stevesoft_pat_Pattern(n);
var optpat=$I$(7).opt$com_stevesoft_pat_Pattern$Z$Z(o, igc, dontMinQ);
this.h.put$O$O(c, optpat);
optpat.setParent$com_stevesoft_pat_Pattern(this);
}});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(9,1));
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
}var n=this.h.get$O(Character.valueOf$C(pt.src.charAt$I(pos)));
if (n == null ) {
return -1;
}if (pt.cbits != null  && pt.cbits.get$I(pos) ) {
return -1;
}return n.matchInternal$I$com_stevesoft_pat_Pthings(pos + 1, pt);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NotImplementedError", null, 'Error');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringBufferLike", null, null, 'com.stevesoft.pat.BasicStringBufferLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.mode="E";
this.altMode=" ";
},1);

C$.$fields$=[['C',['mode','altMode'],'O',['sbl','com.stevesoft.pat.BasicStringBufferLike']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_BasicStringBufferLike', function (sbl) {
;C$.$init$.apply(this);
this.sbl=sbl;
}, 1);

Clazz.newMeth(C$, 'toStringLike$', function () {
return this.sbl.toStringLike$();
});

Clazz.newMeth(C$, 'toString', function () {
return this.sbl.toString();
});

Clazz.newMeth(C$, 'append$C', function (c) {
switch (this.mode.$c()) {
case 117:
this.mode=this.altMode;
this.altMode=" ";
case 85:
this.sbl.append$C($I$(1).toUpperCase$C(c));
break;
case 108:
this.mode=this.altMode;
this.altMode=" ";
case 76:
this.sbl.append$C($I$(1).toLowerCase$C(c));
break;
case 81:
if ((c >= "a" && c <= "z" ) || (c >= "A" && c <= "Z" ) || (c >= "0" && c <= "9" )  ) {
;} else {
this.sbl.append$C("\\");
}default:
this.sbl.append$C(c);
break;
}
});

Clazz.newMeth(C$, 'append$S', function (s) {
for (var i=0; i < s.length$(); i++) {
this.append$C(s.charAt$I(i));
}
});

Clazz.newMeth(C$, 'setMode$C', function (c) {
if (c == "u" || c == "l" ) {
if (this.altMode == " ") {
this.altMode=this.mode;
}}this.mode=c;
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.sbl.unwrap$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Bits']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Prop");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isDecimalDigit$C', function (c) {
if ($I$(1).decimal_digit == null ) {
$I$(1).decimal_digit_f$();
}return $I$(1).decimal_digit.get$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'isAlphabetic$C', function (c) {
if ($I$(1).letter == null ) {
$I$(1).letter_f$();
}return $I$(1).letter.get$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'isMath$C', function (c) {
if ($I$(1).math == null ) {
$I$(1).math_f$();
}return $I$(1).math.get$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'isCurrency$C', function (c) {
if ($I$(1).currency == null ) {
$I$(1).currency_f$();
}return $I$(1).currency.get$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'isWhite$C', function (c) {
if ($I$(1).white == null ) {
$I$(1).white_f$();
}return $I$(1).white.get$I(c.$c());
}, 1);

Clazz.newMeth(C$, 'isPunct$C', function (c) {
if ($I$(1).punct == null ) {
$I$(1).punct_f$();
}return $I$(1).punct.get$I(c.$c());
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DotMulti", null, 'com.stevesoft.pat.PatternSub');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.matchFewest=false;
this.src=null;
this.srclength=0;
this.dotDoesntMatchCR=true;
},1);

C$.$fields$=[['Z',['matchFewest','dotDoesntMatchCR'],'I',['srclength'],'O',['fewestMatches','com.stevesoft.pat.patInt','+mostMatches','src','com.stevesoft.pat.StringLike']]
,['I',['idcount']]]

Clazz.newMeth(C$, 'minChars$', function () {
return this.fewestMatches;
});

Clazz.newMeth(C$, 'maxChars$', function () {
return this.mostMatches;
});

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt', function (a, b) {
Clazz.super_(C$, this);
this.fewestMatches=a;
this.mostMatches=b;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return ".{" + this.fewestMatches + "," + this.mostMatches + "}" + (this.matchFewest ? "?" : "") + "(?# <= dot multi)" + this.nextString$() ;
});

Clazz.newMeth(C$, 'submatchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos < this.srclength) {
if (this.dotDoesntMatchCR) {
if (this.src.charAt$I(pos) != "\n") {
return 1 + pos;
}} else {
return 1 + pos;
}}return -1;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
var m=-1;
var i=pos;
this.src=pt.src;
this.srclength=this.src.length$();
this.dotDoesntMatchCR=pt.dotDoesntMatchCR;
if (this.matchFewest) {
var nMatches=0;
while (this.fewestMatches.intValue$() > nMatches){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i < 0) {
return -1;
}nMatches++;
}
if (i < 0) {
return -1;
}var ii=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ii >= 0) {
return ii;
}if (!this.mostMatches.finite$()) {
while (i >= 0){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i < 0) {
return -1;
}ii=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ii >= 0) {
return ii;
}}
} else {
while (i > 0){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i < 0) {
return -1;
}nMatches++;
if (nMatches > this.mostMatches.intValue$()) {
return -1;
}ii=this.nextMatch$I$com_stevesoft_pat_Pthings(i, pt);
if (ii >= 0) {
return ii;
}}
}return -1;
}var nMatches=0;
while (this.fewestMatches.intValue$() > nMatches){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
nMatches++;
} else {
return -1;
}}
m=i;
if (this.mostMatches.finite$()) {
while (nMatches < this.mostMatches.intValue$()){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
m=i;
nMatches++;
} else {
break;
}}
} else {
while (true){
i=this.submatchInternal$I$com_stevesoft_pat_Pthings(i, pt);
if (i >= 0) {
m=i;
nMatches++;
} else {
break;
}}
}while (m >= pos){
var r=this.nextMatch$I$com_stevesoft_pat_Pthings(m, pt);
if (r >= 0) {
return r;
}m-=1;
nMatches--;
if (nMatches < this.fewestMatches.intValue$()) {
return -1;
}}
return -1;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var dm=Clazz.new_(C$.c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt,[this.fewestMatches, this.mostMatches]);
dm.matchFewest=this.matchFewest;
return dm;
});

C$.$static$=function(){C$.$static$=0;
C$.idcount=1;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RBuffer','StringBuffer','com.stevesoft.pat.PartialBuffer','com.stevesoft.pat.wrap.StringBufferWrap','com.stevesoft.pat.StringBufferLike']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RegexReader", null, 'java.io.Reader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rb=Clazz.new_([Clazz.new_($I$(2,1))],$I$(1,1).c$$StringBuffer);
this.wrap=Clazz.new_($I$(3,1).c$$StringBuffer,[this.rb.sb]);
this.moreToRead=true;
this.nmax=2048;
this.max_lines=2;
this.EOLchar="\n";
},1);

C$.$fields$=[['Z',['moreToRead'],'C',['EOLchar'],'I',['nmax','max_lines'],'O',['rb','com.stevesoft.pat.RBuffer','wrap','com.stevesoft.pat.PartialBuffer','r','java.io.Reader','rp','com.stevesoft.pat.Replacer']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Regex$java_io_Reader', function (rex, r) {
Clazz.super_(C$, this);
this.r=r;
this.rp=rex.getReplacer$();
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Transformer$java_io_Reader', function (tex, r) {
Clazz.super_(C$, this);
this.r=r;
this.rp=tex.getReplacer$();
}, 1);

Clazz.newMeth(C$, 'reset$', function () {
this.r.reset$();
this.rb=Clazz.new_([Clazz.new_($I$(2,1))],$I$(1,1).c$$StringBuffer);
this.wrap=Clazz.new_($I$(3,1).c$$StringBuffer,[this.rb.sb]);
this.moreToRead=true;
});

Clazz.newMeth(C$, 'readData$', function () {
var c;
var n=0;
while ((c=this.r.read$()) != -1){
this.rb.sb.append$C(String.fromCharCode(c));
if (n++ > this.nmax) {
break;
}}
if (c == -1 && n == 0 ) {
this.moreToRead=false;
this.wrap.allowOverRun=false;
}});

Clazz.newMeth(C$, 'getMoreData$', function () {
while (this.rb.pos >= this.rb.epos){
this.wrap.overRun=false;
if (this.rb.next != null ) {
this.rb=this.rb.next;
} else if (this.rb.done) {
break;
} else if (this.rb.epos >= this.rb.sb.length$() && this.rb.epos > this.nmax ) {
this.rb.pos=1;
this.rb.epos=1;
this.rb.sb.setLength$I(1);
this.readData$();
} else if (this.rb.epos >= this.rb.sb.length$() && this.moreToRead ) {
this.readData$();
} else if (this.rp.getRegex$().matchAt$com_stevesoft_pat_StringLike$I(this.wrap, this.rb.epos)) {
if (this.wrap.overRun) {
this.readData$();
} else {
var sbw=Clazz.new_($I$(4,1));
var sbl=Clazz.new_($I$(5,1).c$$com_stevesoft_pat_BasicStringBufferLike,[sbw]);
var rex=this.rp.getRegex$();
var npos=rex.matchedTo$();
this.rp.setBuffer$com_stevesoft_pat_StringBufferLike(sbl);
this.rp.setSource$com_stevesoft_pat_StringLike(this.wrap);
this.rp.setPos$I(npos);
this.rp.apply$com_stevesoft_pat_RegRes$com_stevesoft_pat_ReplaceRule(rex, rex.getReplaceRule$());
var opos=this.rb.epos;
var rb2=Clazz.new_([sbw.unwrap$()],$I$(1,1).c$$StringBuffer);
rb2.epos=rb2.sb.length$();
var rb3=Clazz.new_($I$(1,1).c$$StringBuffer,[this.rb.sb]);
this.rb.next=rb2;
rb2.next=rb3;
if (npos == opos) {
rb3.epos=npos + 1;
if (rb3.epos > rb3.sb.length$()) {
if (this.rb.pos >= this.rb.epos) {
this.rb=this.rb.next;
}rb3.pos=rb3.epos=0;
rb3.done=true;
}rb3.pos=npos;
} else {
rb3.pos=rb3.epos=npos;
}}} else {
if (this.wrap.overRun) {
this.readData$();
} else if (this.rb.epos < this.rb.sb.length$()) {
this.rb.epos++;
} else {
break;
}}}
});

Clazz.newMeth(C$, 'read$', function () {
if (this.rb.pos >= this.rb.epos) {
this.getMoreData$();
if (this.rb.pos >= this.rb.epos) {
return -1;
}}return this.rb.sb.charAt$I(this.rb.pos++).$c();
});

Clazz.newMeth(C$, 'read$CA$I$I', function (buf, off, len) {
var c=-1;
var end=off + len;
for (var i=off; i < end; i++) {
c=this.read$();
if (c < 0) {
if (i == off) {
return -1;
}return i - off;
}buf[i]=String.fromCharCode(c);
}
return len;
});

Clazz.newMeth(C$, 'close$', function () {
this.r.close$();
});

Clazz.newMeth(C$, 'markSupported$', function () {
return false;
});

Clazz.newMeth(C$, 'getBufferSize$', function () {
return this.nmax;
});

Clazz.newMeth(C$, 'setBufferSize$I', function (n) {
this.nmax=n;
});

Clazz.newMeth(C$, 'getMaxLines$', function () {
return this.max_lines;
});

Clazz.newMeth(C$, 'setMaxLines$I', function (ml) {
this.max_lines=ml;
});

Clazz.newMeth(C$, 'getEOLchar$', function () {
return this.EOLchar;
});

Clazz.newMeth(C$, 'setEOLchar$C', function (c) {
this.EOLchar=c;
});

Clazz.newMeth(C$, 'skip$J', function (d) {
var n=0;
while (n < d && this.read$() != -1 ){
n++;
}
return n;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Custom", null, 'com.stevesoft.pat.PatternSub');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start'],'S',['select'],'O',['v','com.stevesoft.pat.Validator']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this);
this.select=s;
this.v=$I$(1).validators.get$O(s);
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
this.start=pos;
return this.sub.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
});

Clazz.newMeth(C$, 'toString', function () {
var a=this.v.argsave == null  ? "" : ":" + this.v.argsave;
return "(??" + this.select + a + ")" + this.nextString$() ;
});

Clazz.newMeth(C$, 'minChars$', function () {
return this.v.minChars$();
});

Clazz.newMeth(C$, 'maxChars$', function () {
return this.v.maxChars$();
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var c=Clazz.new_(C$.c$$S,[this.select]);
h.put$O$O(c, c);
h.put$O$O(this, c);
c.sub=this.sub.clone$java_util_Hashtable(h);
return c;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SpecialRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, rr) {
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex','java.io.File','java.util.StringTokenizer','java.util.Vector','com.stevesoft.pat.StrPos','StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileRegex", null, 'com.stevesoft.pat.Regex');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dirflag=0;
},1);

C$.$fields$=[['I',['dirflag']]
,['O',['root','com.stevesoft.pat.Regex']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.dirflag=0;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
this.dirflag=0;
}, 1);

Clazz.newMeth(C$, 'compile$S', function (s) {
var npat=C$.toFileRegex$S(s);
C$.superclazz.prototype.compile$S.apply(this, [npat]);
if ($I$(2).separatorChar == "\\") {
this.ignoreCase=true;
}});

Clazz.newMeth(C$, 'accept$java_io_File$S', function (dir, s) {
if (this.dirflag != 0) {
var f=Clazz.new_($I$(2,1).c$$S,[s]);
if (f.isDirectory$() && this.dirflag == 2 ) {
return false;
}if (!f.isDirectory$() && this.dirflag == 1 ) {
return false;
}}return this.matchAt$S$I(s, 0);
});

Clazz.newMeth(C$, 'list$S', function (f) {
return C$.list$S$I(f, 0);
}, 1);

Clazz.newMeth(C$, 'list$S$I', function (f, df) {
var st=Clazz.new_([f, $I$(2).pathSeparator],$I$(3,1).c$$S$S);
var v=Clazz.new_($I$(4,1));
while (st.hasMoreTokens$()){
var path=st.nextToken$();
C$.list1$S$java_util_Vector$I$Z(path, v, df, true);
}
var sa=Clazz.array(String, [v.size$()]);
v.copyInto$OA(sa);
return sa;
}, 1);

Clazz.newMeth(C$, 'list1$S$java_util_Vector$I$Z', function (path, v, df, rec) {
if (C$.root.matchAt$S$I(path, 0)) {
v.addElement$O(path + ".");
return;
}var f=Clazz.new_($I$(2,1).c$$S,[path]);
if (f.getParent$() != null  && rec ) {
var v2=Clazz.new_($I$(4,1));
C$.list1$S$java_util_Vector$I$Z(f.getParent$(), v2, 1, true);
for (var i=0; i < v2.size$(); i++) {
var path2=(v2.elementAt$I(i)) + $I$(2).separator + f.getName$() ;
C$.list1$S$java_util_Vector$I$Z(path2, v, df, false);
}
} else {
var base=Clazz.new_($I$(2,1).c$$S,[path]);
var dir_s=base.getParent$();
if (dir_s == null ) {
dir_s=".";
}var dir=Clazz.new_($I$(2,1).c$$S,[dir_s]);
var fr=Clazz.new_(C$.c$$S,[base.getName$()]);
if (fr.isLiteral$()) {
v.addElement$O(dir_s + $I$(2).separator + base.getName$() );
return;
}fr.dirflag=df;
var sa=dir.list$java_io_FilenameFilter(fr);
if (sa == null ) {
return;
}for (var i=0; i < sa.length; i++) {
v.addElement$O(dir_s + $I$(2).separator + sa[i] );
}
}}, 1);

Clazz.newMeth(C$, 'toFileRegex$S', function (s) {
var sp=Clazz.new_($I$(5,1).c$$S$I,[s, 0]);
var sb=Clazz.new_($I$(6,1));
if (sp.incMatch$S("{?e=")) {
var e=sp.thisChar$();
sp.inc$();
if (sp.incMatch$S("}")) {
sb.append$S("(?e=" + e + ")^" );
} else {
sb.append$S("^(?e=");
}sp.esc=e;
}var ParenLvl=0;
while (!sp.eos$()){
if ($I$(2).separatorChar == "\\") {
if (sp.escaped$()) {
sb.append$S("\\\\");
}sp.dontMatch=false;
}if (sp.incMatch$S("?")) {
sb.append$S(".");
} else if (sp.incMatch$S(".")) {
sb.append$C(sp.esc);
sb.append$C(".");
} else if (sp.incMatch$S("{??")) {
sb.append$S("(??");
ParenLvl++;
} else if (sp.incMatch$S("{?!")) {
sb.append$S("(?!");
ParenLvl++;
} else if (sp.incMatch$S("{?=")) {
sb.append$S("(?=");
ParenLvl++;
} else if (sp.incMatch$S("{")) {
sb.append$S("(?:");
ParenLvl++;
} else if (sp.incMatch$S("}")) {
sb.append$C(")");
ParenLvl--;
} else if (ParenLvl != 0 && sp.incMatch$S(",") ) {
sb.append$C("|");
} else if (sp.incMatch$S("*")) {
sb.append$S(".*");
} else {
sb.append$C(sp.thisChar$());
sp.inc$();
}}
sb.append$S("$");
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'isLiteral$', function () {
var x=this.thePattern;
while (x != null  && !(Clazz.instanceOf(x, "com.stevesoft.pat.End")) ){
if (Clazz.instanceOf(x, "com.stevesoft.pat.oneChar")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Skipped")) {
;} else {
return false;
}x=x.next;
}
return true;
});

C$.$static$=function(){C$.$static$=0;
C$.root=Clazz.new_([$I$(2).separatorChar == "/" ? "/$" : "(?:.:|)\\\\$"],$I$(1,1).c$$S);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TransPat", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ra=Clazz.array($I$(1), [10]);
this.ra_len=0;
this.pn=-1;
this.lastMatchedTo=-1;
},1);

C$.$fields$=[['I',['ra_len','pn','lastMatchedTo'],'O',['ra','com.stevesoft.pat.Regex[]']]]

Clazz.newMeth(C$, 'toString', function () {
return "(?#TransPat)";
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
for (var i=0; i < this.ra_len; i++) {
pt.ignoreCase=this.ra[i].ignoreCase;
pt.mFlag=this.ra[i].mFlag;
pt.dotDoesntMatchCR=$I$(1).dotDoesntMatchCR;
var r=this.ra[i].thePattern.matchInternal$I$com_stevesoft_pat_Pthings(pos, pt);
if (r >= 0) {
this.pn=i;
return r;
}}
this.pn=-1;
return -1;
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PartialBuffer", null, null, 'com.stevesoft.pat.StringLike');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.allowOverRun=true;
this.overRun=false;
},1);

C$.$fields$=[['Z',['allowOverRun','overRun'],'I',['off'],'O',['sb','StringBuffer']]]

Clazz.newMeth(C$, 'c$$StringBuffer', function (sb) {
;C$.$init$.apply(this);
this.sb=sb;
}, 1);

Clazz.newMeth(C$, 'charAt$I', function (n) {
n+=this.off;
if (n == this.sb.length$()) {
this.overRun=true;
return String.fromCharCode(0);
}return this.sb.charAt$I(n);
});

Clazz.newMeth(C$, 'length$', function () {
return this.allowOverRun ? this.sb.length$() + 1 : this.sb.length$();
});

Clazz.newMeth(C$, 'indexOf$C', function (c) {
for (var i=0; i < this.sb.length$(); i++) {
if (this.sb.charAt$I(i) == c) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'unwrap$', function () {
return this.sb;
});

Clazz.newMeth(C$, 'substring$I$I', function (i1, i2) {
var sb=Clazz.new_($I$(1,1).c$$I,[i2 - i1]);
for (var i=i1; i < i2; i++) {
sb.append$C(this.charAt$I(i));
}
return sb.toString();
});

Clazz.newMeth(C$, 'newStringBufferLike$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Hashtable','com.stevesoft.pat.RuleHolder','com.stevesoft.pat.Regex','com.stevesoft.pat.StringRule','com.stevesoft.pat.BackRefRule','com.stevesoft.pat.CodeRule','com.stevesoft.pat.AmpersandRule','com.stevesoft.pat.LeftRule','com.stevesoft.pat.RightRule','com.stevesoft.pat.WantMoreTextReplaceRule','com.stevesoft.pat.PopRule','com.stevesoft.pat.PushRule','com.stevesoft.pat.ChangeRule','com.stevesoft.pat.Ctrl','StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReplaceRule");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.next=null;
this.name=this.getClass$().getName$();
},1);

C$.$fields$=[['S',['name'],'O',['next','com.stevesoft.pat.ReplaceRule']]
,['O',['getvar','com.stevesoft.pat.Regex','defs','java.util.Hashtable']]]

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_($I$(2,1).c$$com_stevesoft_pat_ReplaceRule,[this]);
});

Clazz.newMeth(C$, 'clone$', function () {
var x=this.clone1$();
var xsav=x;
var y=this;
while (y.next != null ){
x.next=y.next.clone1$();
x.name=y.name;
x=x.next;
y=y.next;
}
return xsav;
});

Clazz.newMeth(C$, 'add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule', function (head, adding) {
if (head == null ) {
return head=adding;
}head.addRule$com_stevesoft_pat_ReplaceRule(adding);
return head;
}, 1);

Clazz.newMeth(C$, 'add$com_stevesoft_pat_ReplaceRule', function (adding) {
return C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(this, adding);
});

Clazz.newMeth(C$, 'addRule$com_stevesoft_pat_ReplaceRule', function (r) {
if (this.next == null ) {
this.next=r;
} else {
this.next.addRule$com_stevesoft_pat_ReplaceRule(r);
}});

Clazz.newMeth(C$, 'getv$', function () {
if (C$.getvar != null ) {
return C$.getvar.clone$();
}C$.getvar=Clazz.new_(["(?:\\\\(\\d+)|\\$(?:(\\d+)|(\\w+)|([&\'`])|\\{(?:(\\d+)|([^\n}\\\\]+))})|\\\\([nrbtaef])|\\\\c([\u0000-\uffff])|\\\\x([A-Fa-f0-9]{2})|\\\\([\u0000-\uffff]))"],$I$(3,1).c$$S);
C$.getvar.optimize$();
return C$.getvar;
}, 1);

Clazz.newMeth(C$, 'perlCode$S', function (s) {
try {
var mf=0;
var mt=0;
var gv=C$.getv$();
var head=null;
var tmp=null;
while (gv.searchFrom$S$I(s, mt)){
var off=$I$(3).BackRefOffset - 1;
mf=gv.matchedFrom$();
if (mf > mt) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_([s.substring$I$I(mt, mf)],$I$(4,1).c$$S));
}var $var=null;
if (($var=gv.stringMatched$I(1 + off)) != null  || ($var=gv.stringMatched$I(2 + off)) != null   || ($var=gv.stringMatched$I(5 + off)) != null  ) {
var d=0;
for (var i=0; i < $var.length$(); i++) {
d=8 * d + (($var.charCodeAt$I(i)) - 48);
}
if ($var.length$() == 1) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(5,1).c$$I,[d]));
} else {
head=Clazz.new_(["" + String.fromCharCode(d)],$I$(4,1).c$$S);
}} else if (($var=gv.stringMatched$I(10 + off)) != null ) {
if ("QELlUu".indexOf$S($var) >= 0) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_([$var.charAt$I(0)],$I$(6,1).c$$C));
} else {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,[$var]));
}} else if (($var=gv.stringMatched$I(3 + off)) != null  || ($var=gv.stringMatched$I(4 + off)) != null   || ($var=gv.stringMatched$I(6 + off)) != null  ) {
var arg="";
var pc;
if ((pc=$var.indexOf$I(":")) > 0) {
arg=$var.substring$I(pc + 1);
$var=$var.substring$I$I(0, pc);
}if ($var.equals$O("&") || $var.equals$O("MATCH") ) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(7,1)));
} else if ($var.equals$O("`") || $var.equals$O("PREMATCH") ) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(8,1)));
} else if ($var.equals$O("\'") || $var.equals$O("POSTMATCH") ) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(9,1)));
} else if ($var.equals$O("WANT_MORE_TEXT")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(10,1)));
} else if ($var.equals$O("POP")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(11,1)));
} else if ($var.startsWith$S("+") && (tmp=C$.defs.get$O($var.substring$I(1))) != null  ) {
if (Clazz.instanceOf(tmp, "com.stevesoft.pat.Regex")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_([$var.substring$I(1), tmp],$I$(12,1).c$$S$com_stevesoft_pat_Regex));
} else if (Clazz.instanceOf(tmp, "com.stevesoft.pat.Transformer")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_([$var.substring$I(1), tmp],$I$(12,1).c$$S$com_stevesoft_pat_Transformer));
} else {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["${" + $var + "}" ]));
}} else if ($var.startsWith$S("=") && (tmp=C$.defs.get$O($var.substring$I(1))) != null  ) {
if (Clazz.instanceOf(tmp, "com.stevesoft.pat.Regex")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_([$var.substring$I(1), tmp],$I$(13,1).c$$S$com_stevesoft_pat_Regex));
} else if (Clazz.instanceOf(tmp, "com.stevesoft.pat.Transformer")) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_([$var.substring$I(1), tmp],$I$(13,1).c$$S$com_stevesoft_pat_Transformer));
} else {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["${" + $var + "}" ]));
}} else if ((tmp=C$.defs.get$O($var)) != null ) {
if (Clazz.instanceOf(tmp, "com.stevesoft.pat.ReplaceRule")) {
var alt=(tmp).arg$S(arg);
if (alt == null ) {
alt=(tmp);
}head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, (alt.clone$()));
}} else {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["${" + $var + "}" ]));
}} else if (($var=gv.stringMatched$I(7 + off)) != null ) {
var c=$var.charAt$I(0);
if (c == "n") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["\n"]));
} else if (c == "t") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["\t"]));
} else if (c == "r") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["\r"]));
} else if (c == "b") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["\r"]));
} else if (c == "a") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["\u0007"]));
} else if (c == "e") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["\u001b"]));
} else if (c == "f") {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["\f"]));
}} else if (($var=gv.stringMatched$I(8 + off)) != null ) {
var c=$var.charAt$I(0);
if (c.$c() < $I$(14).cmap.length ) {
c=$I$(14).cmap[c.$c()];
}head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_($I$(4,1).c$$S,["" + c]));
} else if (($var=gv.stringMatched$I(9 + off)) != null ) {
var d=16 * C$.getHexDigit$C($var.charAt$I(0)) + C$.getHexDigit$C($var.charAt$I(1));
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_(["" + String.fromCharCode(d)],$I$(4,1).c$$S));
}mt=gv.matchedTo$();
}
if (mt <= s.length$()) {
head=C$.add$com_stevesoft_pat_ReplaceRule$com_stevesoft_pat_ReplaceRule(head, Clazz.new_([s.substring$I(mt)],$I$(4,1).c$$S));
}return head;
} finally {
}
}, 1);

Clazz.newMeth(C$, 'isDefined$S', function (s) {
return C$.defs.get$O(s) != null ;
}, 1);

Clazz.newMeth(C$, 'define$S$com_stevesoft_pat_Regex', function (s, r) {
C$.defs.put$O$O(s, r);
}, 1);

Clazz.newMeth(C$, 'define$S$com_stevesoft_pat_ReplaceRule', function (s, r) {
C$.defs.put$O$O(s, r);
r.name=s;
}, 1);

Clazz.newMeth(C$, 'define$S$com_stevesoft_pat_Transformer', function (s, t) {
C$.defs.put$O$O(s, t);
}, 1);

Clazz.newMeth(C$, 'undefine$S', function (s) {
C$.defs.remove$O(s);
}, 1);

Clazz.newMeth(C$, 'toString1$', function () {
return "${" + this.name + "}" ;
});

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(15,1));
sb.append$S(this.toString1$());
var rr=this.next;
while (rr != null ){
sb.append$S(rr.toString1$());
rr=rr.next;
}
return sb.toString();
});

Clazz.newMeth(C$, 'arg$S', function (s) {
return null;
});

Clazz.newMeth(C$, 'getHexDigit$C', function (c) {
if (c >= "0" && c <= "9" ) {
return c.$c() - 48;
}if (c >= "a" && c <= "f" ) {
return c.$c() - 97 + 10;
}return c.$c() - 65 + 10;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.getvar=null;
C$.defs=Clazz.new_($I$(1,1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr','com.stevesoft.pat.patInt']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Skipped", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.s + this.nextString$();
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pt.no_check || $I$(1,"regionMatches$S$Z$I$com_stevesoft_pat_StringLike$I$I",[this.s, pt.ignoreCase, 0, pt.src, pos, this.s.length$()]) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + this.s.length$(), pt);
}return -1;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_([this.s.length$()],$I$(2,1).c$$I);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_([this.s.length$()],$I$(2,1).c$$I);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$.c$$S,[this.s]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Boundary", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toString', function () {
return "\\b" + this.nextString$();
});

Clazz.newMeth(C$, 'isAChar$C', function (c) {
if (c >= "a" && c <= "z" ) {
return true;
}if (c >= "A" && c <= "Z" ) {
return true;
}if (c >= "0" && c <= "9" ) {
return true;
}if (c == "_") {
return true;
}return false;
});

Clazz.newMeth(C$, 'matchLeft$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos <= 0) {
return true;
}if (this.isAChar$C(pt.src.charAt$I(pos)) && this.isAChar$C(pt.src.charAt$I(pos - 1)) ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'matchRight$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos < 0) {
return false;
}if (pos + 1 >= pt.src.length$()) {
return true;
}if (this.isAChar$C(pt.src.charAt$I(pos)) && this.isAChar$C(pt.src.charAt$I(pos + 1)) ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (this.matchRight$I$com_stevesoft_pat_Pthings(pos - 1, pt) || this.matchLeft$I$com_stevesoft_pat_Pthings(pos, pt) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos, pt);
}return -1;
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt','java.util.Vector']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Bracket", null, 'com.stevesoft.pat.Or');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['neg']]]

Clazz.newMeth(C$, 'c$$Z', function (n) {
Clazz.super_(C$, this);
this.neg=n;
}, 1);

Clazz.newMeth(C$, 'leftForm$', function () {
if (this.neg) {
return "[^";
} else {
return "[";
}});

Clazz.newMeth(C$, 'rightForm$', function () {
return "]";
});

Clazz.newMeth(C$, 'sepForm$', function () {
return "";
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos >= pt.src.length$()) {
return -1;
}var r=C$.superclazz.prototype.matchInternal$I$com_stevesoft_pat_Pthings.apply(this, [pos, pt]);
if ((this.neg && r < 0 ) || (!this.neg && r >= 0 ) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + 1, pt);
}return -1;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'addOr$com_stevesoft_pat_Pattern', function (p) {
this.pv=null;
this.v.addElement$O(p);
p.setParent$com_stevesoft_pat_Pattern(null);
return this;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
var b=Clazz.new_(C$.c$$Z,[this.neg]);
b.v=Clazz.new_($I$(2,1));
for (var i=0; i < this.v.size$(); i++) {
b.v.addElement$O((this.v.elementAt$I(i)).clone1$java_util_Hashtable(h));
}
return b;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex','com.stevesoft.pat.Replacer','com.stevesoft.pat.TransPat','com.stevesoft.pat.TransRepRule','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Transformer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rp=Clazz.new_($I$(1,1));
this.repr=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['auto_optimize'],'O',['tp','com.stevesoft.pat.TransPat','rp','com.stevesoft.pat.Regex','repr','com.stevesoft.pat.Replacer']]]

Clazz.newMeth(C$, 'getReplacer$', function () {
return this.rp.getReplacer$();
});

Clazz.newMeth(C$, 'c$$Z', function (auto) {
;C$.$init$.apply(this);
this.auto_optimize=auto;
this.tp=Clazz.new_($I$(3,1));
this.rp.setReplaceRule$com_stevesoft_pat_ReplaceRule(Clazz.new_($I$(4,1).c$$com_stevesoft_pat_Transformer,[this]));
this.rp.thePattern=this.tp;
}, 1);

Clazz.newMeth(C$, 'add$com_stevesoft_pat_Regex', function (r) {
if (this.auto_optimize) {
r.optimize$();
}this.tp.ra[this.tp.ra_len++]=r;
if (this.tp.ra.length == this.tp.ra_len) {
var ra2=Clazz.array($I$(1), [this.tp.ra_len + 10]);
for (var i=0; i < this.tp.ra_len; i++) {
ra2[i]=this.tp.ra[i];
}
this.tp.ra=ra2;
}this.rp.numSubs_=r.numSubs_ > this.rp.numSubs_ ? r.numSubs_ : this.rp.numSubs_;
});

Clazz.newMeth(C$, 'patterns$', function () {
return this.tp.ra_len;
});

Clazz.newMeth(C$, 'getRegexAt$I', function (i) {
if (i >= this.tp.ra_len) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["i=" + i + ">=" + this.patterns$() ]);
}if (i < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["i=" + i + "< 0" ]);
}return this.tp.ra[i];
});

Clazz.newMeth(C$, 'setRegexAt$com_stevesoft_pat_Regex$I', function (rx, i) {
if (i >= this.tp.ra_len) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["i=" + i + ">=" + this.patterns$() ]);
}if (i < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["i=" + i + "< 0" ]);
}this.tp.ra[i]=rx;
});

Clazz.newMeth(C$, 'add$S', function (rs) {
var r=$I$(1).perlCode$S(rs);
if (r == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[$I$(5,"formatMessage$S$SA",["exception.bad_pattern_to_regex_perl_code", Clazz.array(String, -1, [rs])])]);
}this.add$com_stevesoft_pat_Regex(r);
});

Clazz.newMeth(C$, 'add$SA', function (array) {
for (var i=0; i < array.length; i++) {
this.add$S(array[i]);
}
});

Clazz.newMeth(C$, 'replaceAll$S', function (s) {
return this.dorep$S$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'replaceAll$com_stevesoft_pat_StringLike', function (s) {
return this.dorep$com_stevesoft_pat_StringLike$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'replaceAllFrom$S$I', function (s, start) {
return this.dorep$S$I$I(s, start, s.length$());
});

Clazz.newMeth(C$, 'replaceAllRegion$S$I$I', function (s, start, end) {
return this.dorep$S$I$I(s, start, end);
});

Clazz.newMeth(C$, 'dorep$com_stevesoft_pat_StringLike$I$I', function (s, start, end) {
var tfmd=this.repr.replaceAllRegion$com_stevesoft_pat_StringLike$com_stevesoft_pat_Regex$I$I(s, this.rp, start, end);
this.tp.lastMatchedTo=this.repr.lastMatchedTo;
return tfmd;
});

Clazz.newMeth(C$, 'dorep$S$I$I', function (s, start, end) {
return this.dorep$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(6,1).c$$S,[s]), start, end).toString();
});

Clazz.newMeth(C$, 'replaceFirst$S', function (s) {
return this.dorep$S$I$I(s, 0, s.length$());
});

Clazz.newMeth(C$, 'replaceFirstFrom$S$I', function (s, start) {
return this.dorep$S$I$I(s, start, s.length$());
});

Clazz.newMeth(C$, 'replaceFirstRegion$S$I$I', function (s, start, end) {
return this.dorep$S$I$I(s, start, end);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NullPattern", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toString', function () {
return this.nextString$();
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (p, pt) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(p, pt);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[0]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Pthings");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['ignoreCase','mFlag','dotDoesntMatchCR','no_check'],'I',['nMarks','lastPos'],'O',['src','com.stevesoft.pat.StringLike','cbits','java.util.BitSet','marks','int[]']]]

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Skip','com.stevesoft.pat.CaseMgr']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Skip2", null, 'com.stevesoft.pat.Skip');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['c1','mask1']]]

Clazz.newMeth(C$, 'c$$S$Z$I', function (s, ign, offset) {
;C$.superclazz.c$$S$Z$I.apply(this,[s, ign, offset]);C$.$init$.apply(this);
this.c1=s.charAt$I(1).$c();
this.m1=2 == s.length$();
if (ign) {
this.mask1=$I$(1).mkmask$I(this.c1);
} else {
this.mask1=0;
}}, 1);

Clazz.newMeth(C$, 'find$com_stevesoft_pat_StringLike$I$I', function (s, start, end) {
if (start > end) {
return -1;
}start+=this.offset;
var vend=$I$(1,"min$I$I",[s.length$() - 2, end + this.offset]);
for (var i=start; i <= vend; i++) {
if (0 == ((s.charAt$I(i)).$c() & this.mask) && 0 == ((s.charAt$I(i + 1)).$c() & this.mask1) ) {
if (this.m1 || $I$(2,"regionMatches$com_stevesoft_pat_StringLike$Z$I$S$I$I",[s, this.ign, i, this.src, 0, this.src.length$()]) ) {
return i - this.offset;
}}}
return -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NUnicodePunct", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && !$I$(1,"isPunct$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.patInt']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Any", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos < pt.src.length$()) {
if (pt.dotDoesntMatchCR) {
if (pt.src.charAt$I(pos) != "\n") {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + 1, pt);
}} else {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + 1, pt);
}}return -1;
});

Clazz.newMeth(C$, 'toString', function () {
return "." + this.nextString$();
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(1,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeMath", null, 'com.stevesoft.pat.UniValidator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'validate$com_stevesoft_pat_StringLike$I$I', function (s, from, to) {
return from < s.length$() && $I$(1,"isMath$C",[s.charAt$I(from)])  ? to : -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NoPattern", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toString', function () {
return "(?e=#)[^#d#D]";
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (i, p) {
return -1;
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
return Clazz.new_(C$);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TransRepRule", null, 'com.stevesoft.pat.ReplaceRule');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['t','com.stevesoft.pat.Transformer']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Transformer', function (t) {
Clazz.super_(C$, this);
this.t=t;
}, 1);

Clazz.newMeth(C$, 'toString1$', function () {
return "";
});

Clazz.newMeth(C$, 'clone1$', function () {
return Clazz.new_(C$.c$$com_stevesoft_pat_Transformer,[this.t]);
});

Clazz.newMeth(C$, 'apply$com_stevesoft_pat_StringBufferLike$com_stevesoft_pat_RegRes', function (sb, rr) {
this.next=this.t.tp.ra[this.t.tp.pn].getReplaceRule$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Hashtable','java.util.Vector','com.stevesoft.pat.oneChar','com.stevesoft.pat.FastChar','com.stevesoft.pat.patInt','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegOpt','com.stevesoft.pat.Or','StringBuffer','com.stevesoft.pat.FastBracket','com.stevesoft.pat.Branch','com.stevesoft.pat.FastMulti']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RegOpt");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'opt$com_stevesoft_pat_Pattern$Z$Z', function (p, ignoreCase, dontMinQ) {
if (p == null ) {
return p;
}if (Clazz.instanceOf(p, "com.stevesoft.pat.Bracket")) {
var b=p;
p=$I$(10).process$com_stevesoft_pat_Bracket$Z(b, ignoreCase);
p.next=b.next;
p.parent=b.parent;
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.oneChar") && !ignoreCase && !dontMinQ  ) {
var o=p;
p=Clazz.new_($I$(4,1).c$$C,[o.c]);
p.next=o.next;
p.parent=o.parent;
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Or") && (p).leftForm$().equals$O("(?:") && (p).v.size$() == 1  ) {
var o=p;
p=o.v.elementAt$I(0);
p.setParent$com_stevesoft_pat_Pattern(null);
p=C$.opt$com_stevesoft_pat_Pattern$Z$Z(p, ignoreCase, dontMinQ);
p.add$com_stevesoft_pat_Pattern(o.next);
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Or")) {
var o=p;
o.pv=null;
var v=o.v;
o.v=Clazz.new_($I$(2,1));
var b=Clazz.new_($I$(11,1));
b.parent=o.parent;
for (var i=0; i < v.size$(); i++) {
var pp=v.elementAt$I(i);
if (Clazz.instanceOf(pp, "com.stevesoft.pat.oneChar") && (b.h.size$() >= 1 || (i + 1 < v.size$() && Clazz.instanceOf(v.elementAt$I(i + 1), "com.stevesoft.pat.oneChar") ) ) ) {
b.addc$com_stevesoft_pat_oneChar$Z$Z(pp, ignoreCase, dontMinQ);
} else {
if (b.keys.size$() > 0) {
var p2=b.reduce$Z$Z(ignoreCase, dontMinQ);
if (p2 != null ) {
o.addOr$com_stevesoft_pat_Pattern(p2);
b=Clazz.new_($I$(11,1));
b.parent=o.parent;
}}o.addOr$com_stevesoft_pat_Pattern(C$.opt$com_stevesoft_pat_Pattern$Z$Z(pp, ignoreCase, dontMinQ));
}}
if (b.keys.size$() > 0) {
var p2=b.reduce$Z$Z(ignoreCase, dontMinQ);
if (p2 != null ) {
o.addOr$com_stevesoft_pat_Pattern(p2);
}}if (o.v.size$() == 1 && o.leftForm$().equals$O("(?:") ) {
p=o.v.elementAt$I(0);
p.setParent$com_stevesoft_pat_Pattern(null);
p=C$.opt$com_stevesoft_pat_Pattern$Z$Z(p, ignoreCase, dontMinQ);
p.add$com_stevesoft_pat_Pattern(o.next);
}} else if (Clazz.instanceOf(p, "com.stevesoft.pat.FastMulti")) {
var ps=p;
ps.sub=C$.opt$com_stevesoft_pat_Pattern$Z$Z(ps.sub, ignoreCase, dontMinQ);
} else if (Clazz.instanceOf(p, "com.stevesoft.pat.Multi") && C$.safe4fm$com_stevesoft_pat_Pattern((p).sub) ) {
var m=p;
var fm=null;
try {
fm=Clazz.new_([m.a, m.b, C$.opt$com_stevesoft_pat_Pattern$Z$Z(m.sub, ignoreCase, dontMinQ)],$I$(12,1).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern);
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
} else {
throw rs;
}
}
fm.parent=m.parent;
fm.matchFewest=m.matchFewest;
fm.next=m.next;
p=fm;
}if (p.next != null ) {
p.next=C$.opt$com_stevesoft_pat_Pattern$Z$Z(p.next, ignoreCase, dontMinQ);
}return p;
}, 1);

Clazz.newMeth(C$, 'safe4fm$com_stevesoft_pat_Pattern', function (x) {
while (x != null ){
if (Clazz.instanceOf(x, "com.stevesoft.pat.Bracket")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Range")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.oneChar")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Any")) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Custom") && Clazz.instanceOf((x).v, "com.stevesoft.pat.UniValidator") ) {
;} else if (Clazz.instanceOf(x, "com.stevesoft.pat.Or")) {
var o=x;
if (!o.leftForm$().equals$O("(?:")) {
return false;
}var lo=o.countMinChars$();
var hi=o.countMaxChars$();
if (!lo.equals$com_stevesoft_pat_patInt(hi)) {
return false;
}for (var i=0; i < o.v.size$(); i++) {
if (!C$.safe4fm$com_stevesoft_pat_Pattern(o.v.elementAt$I(i))) {
return false;
}}
} else {
return false;
}x=x.next;
}
return true;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Rthings");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.val=$I$(1).BackRefOffset;
this.optimizeMe=false;
this.noBackRefs=false;
this.parenLevel=0;
this.gFlag=false;
this.mFlag=false;
this.sFlag=false;
},1);

C$.$fields$=[['Z',['ignoreCase','dontMatchInQuotes','optimizeMe','noBackRefs','gFlag','mFlag','sFlag'],'I',['val','parenLevel'],'O',['p','com.stevesoft.pat.Pattern','o','com.stevesoft.pat.Or']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Regex', function (r) {
;C$.$init$.apply(this);
this.ignoreCase=r.ignoreCase;
this.dontMatchInQuotes=r.dontMatchInQuotes;
}, 1);

Clazz.newMeth(C$, 'set$com_stevesoft_pat_Regex', function (r) {
r.gFlag=this.gFlag;
r.mFlag=this.mFlag;
r.sFlag=this.sFlag;
r.ignoreCase=this.ignoreCase;
r.dontMatchInQuotes=this.dontMatchInQuotes;
if (this.optimizeMe) {
r.optimize$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.FileRegex']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NonDirFileRegex", null, 'com.stevesoft.pat.FileRegex');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.dirflag=2;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (fp) {
;C$.superclazz.c$$S.apply(this,[fp]);C$.$init$.apply(this);
this.dirflag=2;
}, 1);

Clazz.newMeth(C$, 'list$S', function (f) {
return $I$(1).list$S$I(f, 2);
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Pattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.oneChar','com.stevesoft.pat.patInt']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Range", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.printBrackets=false;
},1);

C$.$fields$=[['Z',['printBrackets'],'C',['lo','hi','altlo','althi']]]

Clazz.newMeth(C$, 'toString', function () {
var s=$I$(1,"protect$S$S$C",["" + this.lo, "[]{}(),$,-\"^.", "\\"]) + "-" + $I$(1,"protect$S$S$C",["" + this.hi, "[]{}(),$,-\"^.", "\\"]) ;
if (!this.printBrackets) {
return s;
}return "[" + s + "]" ;
});

Clazz.newMeth(C$, 'c$$C$C', function (loi, hii) {
Clazz.super_(C$, this);
this.lo=loi;
this.hi=hii;
var o=null;
if (this.lo >= this.hi) {
$I$(2,"endItAll$S",["Badly formed []'s : " + this.lo + " >= " + this.hi ]);
}o=Clazz.new_($I$(3,1).c$$C,[this.lo]);
this.altlo=o.altc;
o=Clazz.new_($I$(3,1).c$$C,[this.hi]);
this.althi=o.altc;
}, 1);

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings', function (pos, pt) {
if (pos >= pt.src.length$()) {
return -1;
}if (this.Masked$I$com_stevesoft_pat_Pthings(pos, pt)) {
return -1;
}var c=pt.src.charAt$I(pos);
if (this.lo <= c && c <= this.hi  || (pt.ignoreCase && (this.altlo <= c && c <= this.althi ) ) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + 1, pt);
}return -1;
});

Clazz.newMeth(C$, 'minChars$', function () {
return Clazz.new_($I$(4,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(4,1).c$$I,[1]);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable', function (h) {
try {
var r=Clazz.new_(C$.c$$C$C,[this.lo, this.hi]);
r.printBrackets=this.printBrackets;
return r;
} catch (rs) {
if (Clazz.exceptionOf(rs,"com.stevesoft.pat.RegSyntax")){
return null;
} else {
throw rs;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "patInf", null, 'com.stevesoft.pat.patInt');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.inf=true;
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Ctrl");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['cmap','char[]']]]

C$.$static$=function(){C$.$static$=0;
C$.cmap=Clazz.array(Character.TYPE, -1, ["@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_", "`", "a", "a", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "", "\u0000", "\u0001", "\u0002", "\u0003", "\u0004", "\u0005", "\u0006", "\u0007", "\u0008", "\t", "\n", "\u000b", "\f", "\r", "\u000e", "\u000f", "\u0010", "\u0011", "\u0012", "\u0013", "\u0014", "\u0015", "\u0016", "\u0017", "\u0018", "\u0019", "\u001a", "\u001b", "\u001b", "\u001d", "\u001e", "\u001f", " ", "\u0001", "\u0002", "\u0003", "\u0004", "\u0005", "\u0006", "\u0007", "\u0008", "\t", "\n", "\u000b", "\f", "\r", "\u000e", "\u000f", "\u0010", "\u0011", "\u0012", "\u0013", "\u0014", "\u0015", "\u0016", "\u0017", "\u0018", "\u0019", "\u001a", ";", "<", "=", ">", "?", "\u00c0", "\u00c1", "\u00c2", "\u00c3", "\u00c4", "\u00c5", "\u00c6", "\u00c7", "\u00c8", "\u00c9", "\u00ca", "\u00cb", "\u00cc", "\u00cd", "\u00ce", "\u00cf", "\u00d0", "\u00d1", "\u00d2", "\u00d3", "\u00d4", "\u00d5", "\u00d6", "\u00d7", "\u00d8", "\u00d9", "\u00da", "\u00db", "\u00dc", "\u00dd", "\u00de", "\u00df", "\u00e0", "\u00e1", "\u00e2", "\u00e3", "\u00e4", "\u00e5", "\u00e6", "\u00e7", "\u00e8", "\u00e9", "\u00ea", "\u00eb", "\u00ec", "\u00ed", "\u00ee", "\u00ef", "\u00f0", "\u00f1", "\u00f2", "\u00f3", "\u00f4", "\u00f5", "\u00f6", "\u00f7", "\u00f8", "\u00f9", "\u00fa", "\u00fb", "\u00fc", "\u00fd", "\u00fe", "\u00ff", "\u0080", "\u0081", "\u0082", "\u0083", "\u0084", "\u0085", "\u0086", "\u0087", "\u0088", "\u0089", "\u008a", "\u008b", "\u008c", "\u008d", "\u008e", "\u008f", "\u0090", "\u0091", "\u0092", "\u0093", "\u0094", "\u0095", "\u0096", "\u0097", "\u0098", "\u0099", "\u009a", "\u009b", "\u009c", "\u009d", "\u009e", "\u009f", "\u00a0", "\u00a1", "\u00a2", "\u00a3", "\u00a4", "\u00a5", "\u00a6", "\u00a7", "\u00a8", "\u00a9", "\u00aa", "\u00ab", "\u00ac", "\u00ad", "\u00ae", "\u00af", "\u00b0", "\u00b1", "\u00b2", "\u00b3", "\u00b4", "\u00b5", "\u00b6", "\u00b7", "\u00b8", "\u00b9", "\u00ba", "\u00bb", "\u00bc", "\u00bd", "\u00be", "\u00bf"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:39 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
})(Clazz,Clazz.setTVer,Clazz.array,Clazz.assert,Clazz.clone,Clazz.exceptionOf,Clazz.forName,Clazz.getClass,Clazz.instanceOf,Clazz.load,Clazz.new_,Clazz.newClass,Clazz.newEnumConst,Clazz.newInstance,Clazz.newInterface,Clazz.newMeth,Clazz.newPackage,Clazz.super_);
