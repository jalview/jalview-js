(function(){var P$=Clazz.newPackage("com.stevesoft.pat"),I$=[[0,'com.stevesoft.pat.Regex']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Rthings");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.val=$I$(1).BackRefOffset;
this.optimizeMe=false;
this.noBackRefs=false;
this.parenLevel=0;
this.gFlag=false;
this.mFlag=false;
this.sFlag=false;
},1);

C$.$fields$=[['Z',['ignoreCase','dontMatchInQuotes','optimizeMe','noBackRefs','gFlag','mFlag','sFlag'],'I',['val','parenLevel'],'O',['p','com.stevesoft.pat.Pattern','o','com.stevesoft.pat.Or']]]

Clazz.newMeth(C$, 'c$$com_stevesoft_pat_Regex',  function (r) {
;C$.$init$.apply(this);
this.ignoreCase=r.ignoreCase;
this.dontMatchInQuotes=r.dontMatchInQuotes;
}, 1);

Clazz.newMeth(C$, 'set$com_stevesoft_pat_Regex',  function (r) {
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
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:24 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
