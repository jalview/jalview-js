(function(){var P$=Clazz.newPackage("jalview.urls.desktop"),I$=[[0,'java.util.ArrayList','jalview.urls.IdentifiersUrlProvider','jalview.urls.CustomUrlProvider','jalview.urls.UrlProvider']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DesktopUrlProviderFactory", null, null, 'jalview.urls.api.UrlProviderFactoryI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['provDefaultUrl','menuUrlList','nonMenuUrlList']]]

Clazz.newMeth(C$, 'c$$S$S$S', function (defaultUrlString, cachedUrlList, userUrlList) {
;C$.$init$.apply(this);
this.provDefaultUrl=defaultUrlString;
this.menuUrlList=cachedUrlList;
this.nonMenuUrlList=userUrlList;
}, 1);

Clazz.newMeth(C$, 'createUrlProvider$', function () {
var providers=Clazz.new_($I$(1,1));
var idProvider=Clazz.new_($I$(2,1).c$$S,[this.menuUrlList]);
var customProvider=Clazz.new_($I$(3,1).c$$S$S,[this.menuUrlList, this.nonMenuUrlList]);
providers.add$O(idProvider);
providers.add$O(customProvider);
return Clazz.new_($I$(4,1).c$$S$java_util_List,[this.provDefaultUrl, providers]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
