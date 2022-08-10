(function(){var P$=Clazz.newPackage("jalview.io.cache"),I$=[[0,'java.util.Hashtable','java.util.LinkedHashSet','StringBuffer','jalview.bin.Cache']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AppCache");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cacheItems','java.util.Hashtable']]
,['O',['instance','jalview.io.cache.AppCache']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.cacheItems=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'getAllCachedItemsFor$S',  function (cacheKey) {
var foundCache=this.cacheItems.get$O(cacheKey);
if (foundCache == null ) {
foundCache=Clazz.new_($I$(2,1));
this.cacheItems.put$O$O(cacheKey, foundCache);
}return foundCache;
});

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'persistCache$S',  function (cacheKey) {
var foundCacheItems=this.getAllCachedItemsFor$S(cacheKey);
var delimitedCacheBuf=Clazz.new_($I$(3,1));
for (var cacheItem, $cacheItem = foundCacheItems.iterator$(); $cacheItem.hasNext$()&&((cacheItem=($cacheItem.next$())),1);) {
delimitedCacheBuf.append$S(";").append$S(cacheItem);
}
if (delimitedCacheBuf.length$() > 0) {
delimitedCacheBuf.deleteCharAt$I(0);
}var delimitedCacheString=delimitedCacheBuf.toString();
$I$(4).setProperty$S$S(cacheKey, delimitedCacheString);
});

Clazz.newMeth(C$, 'deleteCacheItems$S',  function (cacheKey) {
this.cacheItems.put$O$O(cacheKey, Clazz.new_($I$(2,1)));
this.persistCache$S(cacheKey);
});

Clazz.newMeth(C$, 'getCacheLimit$S',  function (cacheKey) {
var uniqueKey=cacheKey + ".DEFAULT_LIMIT";
return $I$(4).getDefault$S$S(uniqueKey, "99");
});

Clazz.newMeth(C$, 'updateCacheLimit$S$I',  function (cacheKey, newUserLimit) {
var newLimit=String.valueOf$I(newUserLimit);
var uniqueKey=cacheKey + ".DEFAULT_LIMIT";
var formerLimit=this.getCacheLimit$S(cacheKey);
if (newLimit != null  && !newLimit.isEmpty$()  && !formerLimit.equals$O(newLimit) ) {
$I$(4).setProperty$S$S(uniqueKey, newLimit);
formerLimit=newLimit;
}return (Integer.valueOf$S(formerLimit)).$c();
});

Clazz.newMeth(C$, 'putCache$S$java_util_LinkedHashSet',  function (cacheKey, newCacheItems) {
this.cacheItems.put$O$O(cacheKey, newCacheItems);
});

C$.$static$=function(){C$.$static$=0;
C$.instance=null;
};
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:38 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
