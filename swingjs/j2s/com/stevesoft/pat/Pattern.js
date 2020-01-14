(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'StringBuffer','com.stevesoft.pat.patInt','com.stevesoft.pat.patInf','Error','jalview.util.MessageManager']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Pattern");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.next=null;
this.parent=null;
this.mfrom=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.next=null;
this.parent=null;
this.mfrom=0;
}, 1);

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
var sb=Clazz.new_($I$(1));
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
return Clazz.new_($I$(2).c$$I,[0]);
});

Clazz.newMeth(C$, 'maxChars$', function () {
return Clazz.new_($I$(3));
});

Clazz.newMeth(C$, 'countMinChars$', function () {
var p=this;
var sum=Clazz.new_($I$(2).c$$I,[0]);
while (p != null ){
sum.pluseq$com_stevesoft_pat_patInt(p.minChars$());
p=p.next;
}
return sum;
});

Clazz.newMeth(C$, 'countMaxChars$', function () {
var p=this;
var sum=Clazz.new_($I$(2).c$$I,[0]);
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
throw Clazz.new_($I$(4).c$$S,[$I$(5).formatMessage$S$SA("error.no_such_method_as_clone1_for", Clazz.array(String, -1, [this.getClass$().getName$()]))]);
});

Clazz.newMeth(C$, 'clone$java_util_Hashtable', function (h) {
var p=h.get$O(this);
if (p != null ) {
return p;
}p=this.clone1$java_util_Hashtable(h);
if (p == null ) {
throw Clazz.new_($I$(4).c$$S,[$I$(5).getString$S("error.null_from_clone1")]);
}h.put$TK$TV(this, p);
h.put$TK$TV(p, p);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
