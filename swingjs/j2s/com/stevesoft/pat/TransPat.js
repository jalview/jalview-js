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
