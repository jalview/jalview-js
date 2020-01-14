(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'java.util.Vector','com.stevesoft.pat.Regex']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RegexTokenizer", null, null, 'java.util.Enumeration');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.toParse=null;
this.r=null;
this.count=0;
this.v=null;
this.vi=null;
this.pos=0;
this.offset=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.count=0;
this.v=Clazz.new_($I$(1));
this.vi=Clazz.new_($I$(1));
this.pos=0;
this.offset=1;
}, 1);

Clazz.newMeth(C$, 'getMore$', function () {
var s=this.r.right$();
if (this.r.searchFrom$S$I(this.toParse, this.pos)) {
this.v.addElement$TE(this.r.left$().substring$I(this.pos));
this.vi.addElement$TE( new Integer(this.r.matchFrom$() + this.r.charsMatched$()));
for (var i=0; i < this.r.numSubs$(); i++) {
if (this.r.substring$() != null ) {
this.v.addElement$TE(this.r.substring$I(i + this.offset));
this.vi.addElement$TE( new Integer(this.r.matchFrom$I(i + this.offset) + this.r.charsMatched$I(i + this.offset)));
}}
this.pos=this.r.matchFrom$() + this.r.charsMatched$();
} else if (s != null ) {
this.v.addElement$TE(s);
}});

Clazz.newMeth(C$, 'c$$S$S', function (txt, ptrn) {
C$.$init$.apply(this);
this.toParse=txt;
this.r=Clazz.new_($I$(2).c$$S,[ptrn]);
this.offset=$I$(2).BackRefOffset;
this.getMore$();
}, 1);

Clazz.newMeth(C$, 'c$$S$com_stevesoft_pat_Regex', function (txt, r) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
