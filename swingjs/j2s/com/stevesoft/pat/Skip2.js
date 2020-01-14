(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Skip2", null, 'com.stevesoft.pat.Skip');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.c1=0;
this.mask1=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$I', function (s, ign, offset) {
C$.superclazz.c$$S$Z$I.apply(this, [s, ign, offset]);
C$.$init$.apply(this);
this.c1=s.charAt$I(1).$c();
this.m1=2 == s.length$();
if (ign) {
this.mask1=P$.Skip.mkmask$I(this.c1);
} else {
this.mask1=0;
}}, 1);

Clazz.newMeth(C$, 'find$com_stevesoft_pat_StringLike$I$I', function (s, start, end) {
if (start > end) {
return -1;
}start+=this.offset;
var vend=P$.Skip.min$I$I(s.length$() - 2, end + this.offset);
for (var i=start; i <= vend; i++) {
if (0 == ((s.charAt$I(i)).$c() & this.mask) && 0 == ((s.charAt$I(i + 1)).$c() & this.mask1) ) {
if (this.m1 || $I$(1).regionMatches$com_stevesoft_pat_StringLike$Z$I$S$I$I(s, this.ign, i, this.src, 0, this.src.length$()) ) {
return i - this.offset;
}}}
return -1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
