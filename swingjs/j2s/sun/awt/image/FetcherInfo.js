(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'sun.awt.image.FetcherInfo','Thread','sun.awt.AppContext','StringBuffer','java.util.Vector']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "FetcherInfo");
C$.FETCHER_INFO_KEY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.FETCHER_INFO_KEY=Clazz.new_($I$(4).c$$S,["FetcherInfo"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fetchers=null;
this.numFetchers=0;
this.numWaiting=0;
this.waitList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.fetchers=Clazz.array($I$(2), [4]);
this.numFetchers=0;
this.numWaiting=0;
this.waitList=Clazz.new_($I$(5));
}, 1);

Clazz.newMeth(C$, 'getFetcherInfo$', function () {
var appContext=$I$(3).getAppContext$();
{
var info=appContext.get$O(C$.FETCHER_INFO_KEY);
if (info == null ) {
info=Clazz.new_(C$);
appContext.put$O$O(C$.FETCHER_INFO_KEY, info);
}return info;
}}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:35 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
