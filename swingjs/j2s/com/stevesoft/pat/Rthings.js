(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Rthings");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.val=0;
this.ignoreCase=false;
this.dontMatchInQuotes=false;
this.optimizeMe=false;
this.noBackRefs=false;
this.parenLevel=0;
this.gFlag=false;
this.mFlag=false;
this.sFlag=false;
this.p=null;
this.o=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.val=$I$(1).BackRefOffset;
this.optimizeMe=false;
this.noBackRefs=false;
this.parenLevel=0;
this.gFlag=false;
this.mFlag=false;
this.sFlag=false;
}, 1);

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Regex', function (r) {
C$.$init$.apply(this);
this.ignoreCase=r.ignoreCase;
this.dontMatchInQuotes=r.dontMatchInQuotes;
}, 1);

Clazz.newMeth(C$, 'set$com_stevesoft_pat_Regex', function (r) {
r.gFlag=this.gFlag;
r.mFlag=this.mFlag;
r.sFlag=this.sFlag;
r.ignoreCase=this.ignoreCase;
r.dontMatchInQuotes=this.dontMatchInQuotes;
if (this.optimizeMe) {
r.optimize$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:04 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
