(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Skip','com.stevesoft.pat.CaseMgr']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Skip2", null, 'com.stevesoft.pat.Skip');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['c1','mask1']]]

Clazz.newMeth(C$, 'c$$S$Z$I',  function (s, ign, offset) {
;C$.superclazz.c$$S$Z$I.apply(this,[s, ign, offset]);C$.$init$.apply(this);
this.c1=s.charAt$I(1).$c();
this.m1=2 == s.length$();
if (ign) {
this.mask1=$I$(1).mkmask$I(this.c1);
} else {
this.mask1=0;
}}, 1);

Clazz.newMeth(C$, 'find$com_stevesoft_pat_StringLike$I$I',  function (s, start, end) {
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
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
