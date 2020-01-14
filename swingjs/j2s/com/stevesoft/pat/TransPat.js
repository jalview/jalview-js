(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "TransPat", null, 'com.stevesoft.pat.Pattern');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ra=null;
this.ra_len=0;
this.pn=0;
this.lastMatchedTo=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.ra=Clazz.array($I$(1), [10]);
this.ra_len=0;
this.pn=-1;
this.lastMatchedTo=-1;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "(?#TransPat)";
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
