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
