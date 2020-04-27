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
