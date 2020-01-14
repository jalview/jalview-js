(function(){var P$=Clazz.newPackage("jalview.io.cache"),I$=[[0,'java.util.Hashtable','java.util.LinkedHashSet','StringBuffer','jalview.bin.Cache']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AppCache");
C$.instance=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.instance=null;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cacheItems=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.cacheItems=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getAllCachedItemsFor$S', function (cacheKey) {
var foundCache=this.cacheItems.get$O(cacheKey);
if (foundCache == null ) {
foundCache=Clazz.new_($I$(2));
this.cacheItems.put$TK$TV(cacheKey, foundCache);
}return foundCache;
});

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

Clazz.newMeth(C$, 'persistCache$S', function (cacheKey) {
var foundCacheItems=this.getAllCachedItemsFor$S(cacheKey);
var delimitedCacheBuf=Clazz.new_($I$(3));
for (var cacheItem, $cacheItem = foundCacheItems.iterator$(); $cacheItem.hasNext$()&&((cacheItem=($cacheItem.next$())),1);) {
delimitedCacheBuf.append$S(";").append$S(cacheItem);
}
if (delimitedCacheBuf.length$() > 0) {
delimitedCacheBuf.deleteCharAt$I(0);
}var delimitedCacheString=delimitedCacheBuf.toString();
$I$(4).setProperty$S$S(cacheKey, delimitedCacheString);
});

Clazz.newMeth(C$, 'deleteCacheItems$S', function (cacheKey) {
this.cacheItems.put$TK$TV(cacheKey, Clazz.new_($I$(2)));
this.persistCache$S(cacheKey);
});

Clazz.newMeth(C$, 'getCacheLimit$S', function (cacheKey) {
var uniqueKey=cacheKey + ".DEFAULT_LIMIT";
return $I$(4).getDefault$S$S(uniqueKey, "99");
});

Clazz.newMeth(C$, 'updateCacheLimit$S$I', function (cacheKey, newUserLimit) {
var newLimit=String.valueOf$I(newUserLimit);
var uniqueKey=cacheKey + ".DEFAULT_LIMIT";
var formerLimit=this.getCacheLimit$S(cacheKey);
if (newLimit != null  && !newLimit.isEmpty$()  && !formerLimit.equals$O(newLimit) ) {
$I$(4).setProperty$S$S(uniqueKey, newLimit);
formerLimit=newLimit;
}return (Integer.valueOf$S(formerLimit)).intValue$();
});

Clazz.newMeth(C$, 'putCache$S$java_util_LinkedHashSet', function (cacheKey, newCacheItems) {
this.cacheItems.put$TK$TV(cacheKey, newCacheItems);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
