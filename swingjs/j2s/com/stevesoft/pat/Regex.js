(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),p$1={},I$=[[0,'com.stevesoft.pat.Prop','com.stevesoft.pat.CaseMgr','com.stevesoft.pat.NoPattern','java.util.Hashtable','com.stevesoft.pat.UnicodePunct','com.stevesoft.pat.NUnicodePunct','com.stevesoft.pat.UnicodeWhite','com.stevesoft.pat.NUnicodeWhite','com.stevesoft.pat.UnicodeW','com.stevesoft.pat.NUnicodeW','com.stevesoft.pat.UnicodeDigit','com.stevesoft.pat.NUnicodeDigit','com.stevesoft.pat.UnicodeMath','com.stevesoft.pat.NUnicodeMath','com.stevesoft.pat.UnicodeCurrency','com.stevesoft.pat.NUnicodeCurrency','com.stevesoft.pat.UnicodeAlpha','com.stevesoft.pat.NUnicodeAlpha','com.stevesoft.pat.UnicodeUpper','com.stevesoft.pat.UnicodeLower','com.stevesoft.pat.patInt','com.stevesoft.pat.Pthings','com.stevesoft.pat.ReplaceRule','com.stevesoft.pat.Replacer','com.stevesoft.pat.parsePerl','com.stevesoft.pat.Rthings','com.stevesoft.pat.StrPos','jalview.util.MessageManager','com.stevesoft.pat.wrap.StringWrap','java.util.BitSet','com.stevesoft.pat.Or','com.stevesoft.pat.NullPattern','com.stevesoft.pat.RegSyntaxError','com.stevesoft.pat.Backup','com.stevesoft.pat.Group','com.stevesoft.pat.Bracket','com.stevesoft.pat.Range','com.stevesoft.pat.oneChar','com.stevesoft.pat.BackG','com.stevesoft.pat.BackMatch','com.stevesoft.pat.Boundary','com.stevesoft.pat.End','com.stevesoft.pat.Any','StringBuffer','com.stevesoft.pat.Custom','com.stevesoft.pat.CustomEndpoint','com.stevesoft.pat.lookAhead','com.stevesoft.pat.OrMark','com.stevesoft.pat.Start','com.stevesoft.pat.patInf','com.stevesoft.pat.Ctrl','com.stevesoft.pat.RegSyntax','com.stevesoft.pat.DotMulti','com.stevesoft.pat.RegOpt','com.stevesoft.pat.FastMulti','com.stevesoft.pat.Multi','com.stevesoft.pat.Skip']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Regex", null, 'com.stevesoft.pat.RegRes', 'java.io.FilenameFilter');
C$.BackRefOffset=0;
C$.none=null;
C$.validators=null;
C$.defaultMFlag=false;
C$.dotDoesntMatchCR=false;
C$.lasts=null;
C$.lastbs=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.BackRefOffset=1;
C$.none=Clazz.new_($I$(3));
C$.validators=Clazz.new_($I$(4));
{
C$.define$S$S$com_stevesoft_pat_Validator("p", "(?>1)", Clazz.new_($I$(5)));
C$.define$S$S$com_stevesoft_pat_Validator("P", "(?>1)", Clazz.new_($I$(6)));
C$.define$S$S$com_stevesoft_pat_Validator("s", "(?>1)", Clazz.new_($I$(7)));
C$.define$S$S$com_stevesoft_pat_Validator("S", "(?>1)", Clazz.new_($I$(8)));
C$.define$S$S$com_stevesoft_pat_Validator("w", "(?>1)", Clazz.new_($I$(9)));
C$.define$S$S$com_stevesoft_pat_Validator("W", "(?>1)", Clazz.new_($I$(10)));
C$.define$S$S$com_stevesoft_pat_Validator("d", "(?>1)", Clazz.new_($I$(11)));
C$.define$S$S$com_stevesoft_pat_Validator("D", "(?>1)", Clazz.new_($I$(12)));
C$.define$S$S$com_stevesoft_pat_Validator("m", "(?>1)", Clazz.new_($I$(13)));
C$.define$S$S$com_stevesoft_pat_Validator("M", "(?>1)", Clazz.new_($I$(14)));
C$.define$S$S$com_stevesoft_pat_Validator("c", "(?>1)", Clazz.new_($I$(15)));
C$.define$S$S$com_stevesoft_pat_Validator("C", "(?>1)", Clazz.new_($I$(16)));
C$.define$S$S$com_stevesoft_pat_Validator("a", "(?>1)", Clazz.new_($I$(17)));
C$.define$S$S$com_stevesoft_pat_Validator("A", "(?>1)", Clazz.new_($I$(18)));
C$.define$S$S$com_stevesoft_pat_Validator("uc", "(?>1)", Clazz.new_($I$(19)));
C$.define$S$S$com_stevesoft_pat_Validator("lc", "(?>1)", Clazz.new_($I$(20)));
};
C$.defaultMFlag=false;
C$.dotDoesntMatchCR=true;
C$.lasts=null;
C$.lastbs=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.thePattern=null;
this.minMatch=null;
this.dontMatchInQuotes=false;
this.ignoreCase=false;
this.rep=null;
this.repr=null;
this.esc='\0';
this.pt=null;
this.gFlags=null;
this.gFlagto=0;
this.gFlag=false;
this.sFlag=false;
this.mFlag=false;
this.p=null;
this.or=null;
this.skipper=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.thePattern=C$.none;
this.minMatch=Clazz.new_($I$(21).c$$I,[0]);
this.dontMatchInQuotes=false;
this.ignoreCase=false;
this.rep=null;
this.repr=null;
this.esc="\\";
this.pt=Clazz.new_($I$(22));
this.gFlagto=0;
this.gFlag=false;
this.sFlag=false;
this.mFlag=false;
this.p=null;
this.or=null;
}, 1);

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
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
Clazz.super_(C$, this,1);
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
C$.validators.put$TK$TV(nm, v);
}, 1);

Clazz.newMeth(C$, 'define$S$S', function (nm, pat) {
C$.validators.put$TK$TV(nm, pat);
}, 1);

Clazz.newMeth(C$, 'getReplaceRule$', function () {
return this.rep;
});

Clazz.newMeth(C$, '_getReplacer$', function () {
return this.repr == null  ? this.repr=Clazz.new_($I$(24)) : this.repr;
});

Clazz.newMeth(C$, 'getReplacer$', function () {
if (this.repr == null ) {
this.repr=Clazz.new_($I$(24));
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
C$.superclazz.c$$com_stevesoft_pat_RegRes.apply(this, [r]);
C$.$init$.apply(this);
this.dontMatchInQuotes=r.dontMatchInQuotes;
this.esc=r.esc;
this.ignoreCase=r.ignoreCase;
this.gFlag=r.gFlag;
if (r.rep == null ) {
this.rep=null;
} else {
this.rep=r.rep.clone$();
}this.thePattern=r.thePattern.clone$java_util_Hashtable(Clazz.new_($I$(4)));
this.minMatch=r.minMatch;
this.skipper=r.skipper;
}, 1);

Clazz.newMeth(C$, 'compile$S', function (prepat) {
var postpat=$I$(25).codify$S$Z(prepat, true);
var pat=postpat == null  ? prepat : postpat;
this.minMatch=null;
this.ignoreCase=false;
this.dontMatchInQuotes=false;
var mk=Clazz.new_($I$(26).c$$com_stevesoft_pat_Regex,[this]);
var offset=mk.val;
var newpat=pat;
this.thePattern=C$.none;
this.p=null;
this.or=null;
this.minMatch=Clazz.new_($I$(21).c$$I,[0]);
var sp=Clazz.new_($I$(27).c$$S$I,[pat, 0]);
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
return this._search$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(29).c$$S,[s]), start, end);
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
return this._reverseSearch$com_stevesoft_pat_StringLike$I$I(Clazz.new_($I$(29).c$$S,[s]), start, end);
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
}var bs=Clazz.new_($I$(30).c$$I,[s.length$()]);
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
return this.getClass$().newInstance$();
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
this.or=Clazz.new_($I$(31));
}if (this.p == null ) {
this.p=Clazz.new_($I$(32));
}this.or.addOr$com_stevesoft_pat_Pattern(this.p);
this.p=null;
} else if (sp.incMatch$S("(?<")) {
var i=sp.getPatInt$();
if (i == null ) {
$I$(33).endItAll$S("No int after (?<");
}this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(34).c$$I,[i.intValue$()]));
if (!sp.match$C(")")) {
$I$(33).endItAll$S("No ) after (?<");
}} else if (sp.incMatch$S("(?>")) {
var i=sp.getPatInt$();
if (i == null ) {
$I$(33).endItAll$S("No int after (?>");
}this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(34).c$$I,[-i.intValue$()]));
if (!sp.match$C(")")) {
$I$(33).endItAll$S("No ) after (?<");
}} else if (sp.incMatch$S("(?@")) {
var op=sp.c;
sp.inc$();
var cl=sp.c;
sp.inc$();
if (!sp.match$C(")")) {
$I$(33).endItAll$S("(?@ does not have closing paren");
}this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(35).c$$C$C,[op, cl]));
} else if (sp.incMatch$S("(?#")) {
while (!sp.match$C(")")){
sp.inc$();
}
} else if (sp.dontMatch && sp.c == "w" ) {
var b=Clazz.new_($I$(36).c$$Z,[false]);
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["a", "z"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["A", "Z"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["0", "9"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["_"]));
this.add$com_stevesoft_pat_Pattern(b);
} else if (sp.dontMatch && sp.c == "G" ) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(39)));
} else if (sp.dontMatch && sp.c == "s" ) {
var b=Clazz.new_($I$(36).c$$Z,[false]);
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[" "]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["\u0008", "\n"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\r"]));
this.add$com_stevesoft_pat_Pattern(b);
} else if (sp.dontMatch && sp.c == "d" ) {
var digit=Clazz.new_($I$(37).c$$C$C,["0", "9"]);
digit.printBrackets=true;
this.add$com_stevesoft_pat_Pattern(digit);
} else if (sp.dontMatch && sp.c == "W" ) {
var b=Clazz.new_($I$(36).c$$Z,[true]);
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["a", "z"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["A", "Z"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["0", "9"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["_"]));
this.add$com_stevesoft_pat_Pattern(b);
} else if (sp.dontMatch && sp.c == "S" ) {
var b=Clazz.new_($I$(36).c$$Z,[true]);
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[" "]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["\u0008", "\n"]));
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\r"]));
this.add$com_stevesoft_pat_Pattern(b);
} else if (sp.dontMatch && sp.c == "D" ) {
var b=Clazz.new_($I$(36).c$$Z,[true]);
b.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["0", "9"]));
this.add$com_stevesoft_pat_Pattern(b);
} else if (sp.dontMatch && sp.c == "B" ) {
var r=Clazz.new_(C$);
p$1._compile$S$com_stevesoft_pat_Rthings.apply(r, ["(?!\\b)", mk]);
this.add$com_stevesoft_pat_Pattern(r.thePattern);
} else if (this.isOctalString$com_stevesoft_pat_StrPos(sp)) {
var d=sp.c.$c() - 48;
sp.inc$();
d=8 * d + sp.c.$c() - 48;
var sp2=Clazz.new_($I$(27).c$$com_stevesoft_pat_StrPos,[sp]);
sp2.inc$();
if (this.isOctalDigit$com_stevesoft_pat_StrPos$Z(sp2, false)) {
sp.inc$();
d=8 * d + sp.c.$c() - 48;
}this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[String.fromCharCode(d)]));
} else if (sp.dontMatch && sp.c >= "1"  && sp.c <= "9" ) {
var iv=sp.c.$c() - 48;
var s2=Clazz.new_($I$(27).c$$com_stevesoft_pat_StrPos,[sp]);
s2.inc$();
if (!s2.dontMatch && s2.c >= "0"  && s2.c <= "9" ) {
iv=10 * iv + (s2.c.$c() - 48);
sp.inc$();
}this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(40).c$$I,[iv]));
} else if (sp.dontMatch && sp.c == "b" ) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(41)));
} else if (sp.match$C("\u0008")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(41)));
} else if (sp.match$C("$")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(42).c$$Z,[true]));
} else if (sp.dontMatch && sp.c == "Z" ) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(42).c$$Z,[false]));
} else if (sp.match$C(".")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(43)));
} else if (sp.incMatch$S("(??")) {
var sb=Clazz.new_($I$(44));
var sb2=Clazz.new_($I$(44));
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
var rth=Clazz.new_($I$(26).c$$com_stevesoft_pat_Regex,[this]);
rth.noBackRefs=true;
p$1._compile$S$com_stevesoft_pat_Rthings.apply(r, [pat, rth]);
this.add$com_stevesoft_pat_Pattern(r.thePattern);
} else {
var cm=Clazz.new_($I$(45).c$$S,[sb.toString()]);
if (cm.v != null ) {
var v2=cm.v.arg$S(sb2.toString());
if (v2 != null ) {
v2.argsave=sb2.toString();
var p=cm.v.pattern;
cm.v=v2;
v2.pattern=p;
}var r=this.newRegex$();
var rth=Clazz.new_($I$(26).c$$com_stevesoft_pat_Regex,[this]);
rth.noBackRefs=true;
p$1._compile$S$com_stevesoft_pat_Rthings.apply(r, [cm.v.pattern, rth]);
cm.sub=r.thePattern;
cm.sub.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(46).c$$com_stevesoft_pat_Custom,[cm]));
cm.sub.setParent$com_stevesoft_pat_Pattern(cm);
this.add$com_stevesoft_pat_Pattern(cm);
}}} else if (sp.match$C("(")) {
mk.parenLevel++;
var r=this.newRegex$();
sp.inc$();
if (sp.incMatch$S("?:")) {
r.or=Clazz.new_($I$(31));
} else if (sp.incMatch$S("?=")) {
r.or=Clazz.new_($I$(47).c$$Z,[false]);
} else if (sp.incMatch$S("?!")) {
r.or=Clazz.new_($I$(47).c$$Z,[true]);
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
$I$(33).endItAll$S("Unclosed ()");
}} else {
r.or=mk.noBackRefs ? Clazz.new_($I$(31)) : Clazz.new_($I$(48).c$$I,[mk.val++]);
}if (r != null ) {
this.add$com_stevesoft_pat_Pattern(r._compile$com_stevesoft_pat_StrPos$com_stevesoft_pat_Rthings(sp, mk));
}} else if (sp.match$C("^")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(49).c$$Z,[true]));
} else if (sp.dontMatch && sp.c == "A" ) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(49).c$$Z,[false]));
} else if (sp.match$C("*")) {
this.addMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt(Clazz.new_($I$(21).c$$I,[0]), Clazz.new_($I$(50)));
} else if (sp.match$C("+")) {
this.addMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt(Clazz.new_($I$(21).c$$I,[1]), Clazz.new_($I$(50)));
} else if (sp.match$C("?")) {
this.addMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt(Clazz.new_($I$(21).c$$I,[0]), Clazz.new_($I$(21).c$$I,[1]));
} else if (sp.match$C("{")) {
var bad=false;
var sp2=Clazz.new_($I$(27).c$$com_stevesoft_pat_StrPos,[sp]);
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
i2=Clazz.new_($I$(50));
} else {
i2=sp.getPatInt$();
}}if (i1 == null  || i2 == null  ) {
bad=true;
}if (bad) {
sp.dup$com_stevesoft_pat_StrPos(sp2);
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[sp.c]));
} else {
this.addMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt(i1, i2);
}} else if (sp.escMatch$C("x") && this.next2Hex$com_stevesoft_pat_StrPos(sp) ) {
sp.inc$();
var d=this.getHexDigit$com_stevesoft_pat_StrPos(sp);
sp.inc$();
d=16 * d + this.getHexDigit$com_stevesoft_pat_StrPos(sp);
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[String.fromCharCode(d)]));
} else if (sp.escMatch$C("c")) {
sp.inc$();
if (sp.c.$c() < $I$(51).cmap.length ) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[$I$(51).cmap[sp.c.$c()]]));
} else {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[sp.c]));
}} else if (sp.escMatch$C("f")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\f"]));
} else if (sp.escMatch$C("a")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\u0007"]));
} else if (sp.escMatch$C("t")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\t"]));
} else if (sp.escMatch$C("n")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\n"]));
} else if (sp.escMatch$C("r")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\r"]));
} else if (sp.escMatch$C("b")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\u0008"]));
} else if (sp.escMatch$C("e")) {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\u001b"]));
} else {
this.add$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[sp.c]));
if (sp.match$C(")")) {
$I$(33).endItAll$S("Unmatched right paren in pattern");
}}});

Clazz.newMeth(C$, '_compile$S$com_stevesoft_pat_Rthings', function (pat, mk) {
this.minMatch=null;
this.sFlag=this.mFlag=this.ignoreCase=this.gFlag=false;
var sp=Clazz.new_($I$(27).c$$S$I,[pat, 0]);
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
$I$(33).endItAll$S("Unclosed Parenthesis! lvl=" + mk.parenLevel);
}if (this.or != null ) {
if (this.p == null ) {
this.p=Clazz.new_($I$(32));
}this.or.addOr$com_stevesoft_pat_Pattern(this.p);
return this.or;
}return this.p == null  ? Clazz.new_($I$(32)) : this.p;
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
throw Clazz.new_($I$(52).c$$S,["Syntax error."]);
} else if (last2 == null ) {
this.p=C$.mkMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern(i1, i2, this.p);
} else {
last2.next=C$.mkMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern(i1, i2, last);
}});

Clazz.newMeth(C$, 'mkMulti$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern', function (lo, hi, p) {
if (Clazz.instanceOf(p, "com.stevesoft.pat.Any") && p.next == null  ) {
return Clazz.new_($I$(53).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt,[lo, hi]);
}return $I$(54).safe4fm$com_stevesoft_pat_Pattern(p) ? Clazz.new_($I$(55).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[lo, hi, p]) : Clazz.new_($I$(56).c$$com_stevesoft_pat_patInt$com_stevesoft_pat_patInt$com_stevesoft_pat_Pattern,[lo, hi, p]);
}, 1);

Clazz.newMeth(C$, 'matchBracket$com_stevesoft_pat_StrPos', function (sp) {
var ret;
if (sp.match$C("^")) {
ret=Clazz.new_($I$(36).c$$Z,[true]);
sp.inc$();
} else {
ret=Clazz.new_($I$(36).c$$Z,[false]);
}if (sp.match$C("]")) {
$I$(33).endItAll$S("Unmatched []");
}while (!sp.eos && !sp.match$C("]") ){
var s1=Clazz.new_($I$(27).c$$com_stevesoft_pat_StrPos,[sp]);
s1.inc$();
var s1_=Clazz.new_($I$(27).c$$com_stevesoft_pat_StrPos,[s1]);
s1_.inc$();
if (s1.match$C("-") && !s1_.match$C("]") ) {
var s2=Clazz.new_($I$(27).c$$com_stevesoft_pat_StrPos,[s1]);
s2.inc$();
if (!s2.eos) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,[sp.c, s2.c]));
}sp.inc$();
sp.inc$();
} else if (sp.escMatch$C("Q")) {
sp.inc$();
while (!sp.escMatch$C("E")){
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[sp.c]));
sp.inc$();
}
} else if (sp.escMatch$C("d")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["0", "9"]));
} else if (sp.escMatch$C("s")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[" "]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["\u0008", "\n"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\r"]));
} else if (sp.escMatch$C("w")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["a", "z"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["A", "Z"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["0", "9"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["_"]));
} else if (sp.escMatch$C("D")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["\u0000", "/"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,[":", "\uffff"]));
} else if (sp.escMatch$C("S")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["\u0000", "\u0007"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["\u000b", "\f"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["\u000e", "\u001f"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["!", "\uffff"]));
} else if (sp.escMatch$C("W")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["\u0000", "@"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["[", "^"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["`"]));
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(37).c$$C$C,["{", "\uffff"]));
} else if (sp.escMatch$C("x") && this.next2Hex$com_stevesoft_pat_StrPos(sp) ) {
sp.inc$();
var d=this.getHexDigit$com_stevesoft_pat_StrPos(sp);
sp.inc$();
d=16 * d + this.getHexDigit$com_stevesoft_pat_StrPos(sp);
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[String.fromCharCode(d)]));
} else if (sp.escMatch$C("a")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\u0007"]));
} else if (sp.escMatch$C("f")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\f"]));
} else if (sp.escMatch$C("e")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\u001b"]));
} else if (sp.escMatch$C("n")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\n"]));
} else if (sp.escMatch$C("t")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\t"]));
} else if (sp.escMatch$C("r")) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,["\r"]));
} else if (sp.escMatch$C("c")) {
sp.inc$();
if (sp.c.$c() < $I$(51).cmap.length ) {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[$I$(51).cmap[sp.c.$c()]]));
} else {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[sp.c]));
}} else if (this.isOctalString$com_stevesoft_pat_StrPos(sp)) {
var d=sp.c.$c() - 48;
sp.inc$();
d=8 * d + sp.c.$c() - 48;
var sp2=Clazz.new_($I$(27).c$$com_stevesoft_pat_StrPos,[sp]);
sp2.inc$();
if (this.isOctalDigit$com_stevesoft_pat_StrPos$Z(sp2, false)) {
sp.inc$();
d=8 * d + sp.c.$c() - 48;
}ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[String.fromCharCode(d)]));
} else {
ret.addOr$com_stevesoft_pat_Pattern(Clazz.new_($I$(38).c$$C,[sp.c]));
}sp.inc$();
}
return ret;
});

Clazz.newMeth(C$, 'toString', function () {
if (false && this.thePattern == null  ) {
return "";
} else {
var sb=Clazz.new_($I$(44));
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
var sb=Clazz.new_($I$(44));
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

Clazz.newMeth(C$, ['accept$java_io_File$S','accept$'], function (dir, s) {
return this.search$S(s);
});

Clazz.newMeth(C$, 'version$', function () {
return "lgpl release 1.5.3";
}, 1);

Clazz.newMeth(C$, 'optimize$', function () {
if (this.optimized$() || this.thePattern == null  ) {
return;
}this.minMatch=Clazz.new_($I$(21).c$$I,[0]);
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
var sp2=Clazz.new_($I$(27).c$$com_stevesoft_pat_StrPos,[sp]);
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
}var sp2=Clazz.new_($I$(27).c$$com_stevesoft_pat_StrPos,[sp]);
sp2.inc$();
if (!this.isOctalDigit$com_stevesoft_pat_StrPos$Z(sp2, false)) {
return false;
}return true;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:03 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
