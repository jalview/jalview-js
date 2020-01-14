(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.RegHolder','com.stevesoft.pat.wrap.StringWrap','jalview.util.MessageManager','com.stevesoft.pat.StringBufferLike']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Replacer");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.first=false;
this.rh=null;
this.sb=null;
this.src=null;
this.pos=0;
this.want_more_text=false;
this.want_more_text_enable=false;
this.lastMatchedTo=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.rh=Clazz.new_($I$(1));
this.sb=null;
this.src=null;
this.pos=0;
this.want_more_text=false;
this.want_more_text_enable=false;
this.lastMatchedTo=0;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'replaceFirstRegion$S$com_stevesoft_pat_Regex$I$I', function (s, r, start, end) {
return this.replaceFirstRegion$com_stevesoft_pat_StringLike$com_stevesoft_pat_Regex$I$I(Clazz.new_($I$(2).c$$S,[s]), r, start, end);
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
return this.replaceAllRegion$com_stevesoft_pat_StringLike$com_stevesoft_pat_Regex$I$I(Clazz.new_($I$(2).c$$S,[s]), r, start, end);
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
return this.replaceAllRegion$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(2).c$$S,[s]), 0, s.length$()).toString();
});

Clazz.newMeth(C$, 'replaceAllFrom$S$I', function (s, start) {
return this.replaceAllRegion$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(2).c$$S,[s]), start, s.length$()).toString();
});

Clazz.newMeth(C$, 'replaceAllRegion$S$I$I', function (s, start, end) {
this.first=false;
return this.dorep$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(2).c$$S,[s]), start, end).toString();
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
this.sb=Clazz.new_($I$(4).c$$com_stevesoft_pat_BasicStringBufferLike,[this.src.newStringBufferLike$()]);
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
var rh2=Clazz.new_($I$(1));
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
