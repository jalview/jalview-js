(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.CaseMgr','com.stevesoft.pat.patInt']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Skipped", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
Clazz.super_(C$, this);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.s + this.nextString$();
});

Clazz.newMeth(C$, 'matchInternal$I$com_stevesoft_pat_Pthings',  function (pos, pt) {
if (pt.no_check || $I$(1,"regionMatches$S$Z$I$com_stevesoft_pat_StringLike$I$I",[this.s, pt.ignoreCase, 0, pt.src, pos, this.s.length$()]) ) {
return this.nextMatch$I$com_stevesoft_pat_Pthings(pos + this.s.length$(), pt);
}return -1;
});

Clazz.newMeth(C$, 'minChars$',  function () {
return Clazz.new_([this.s.length$()],$I$(2,1).c$$I);
});

Clazz.newMeth(C$, 'maxChars$',  function () {
return Clazz.new_([this.s.length$()],$I$(2,1).c$$I);
});

Clazz.newMeth(C$, 'clone1$java_util_Hashtable',  function (h) {
return Clazz.new_(C$.c$$S,[this.s]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
