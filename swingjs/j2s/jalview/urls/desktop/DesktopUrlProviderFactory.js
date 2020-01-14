(function(){var P$=Clazz.newPackage("jalview.urls.desktop"),I$=[[0,'java.util.ArrayList','jalview.urls.IdentifiersUrlProvider','jalview.urls.CustomUrlProvider','jalview.urls.UrlProvider']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "DesktopUrlProviderFactory", null, null, 'jalview.urls.api.UrlProviderFactoryI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.provDefaultUrl=null;
this.menuUrlList=null;
this.nonMenuUrlList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S', function (defaultUrlString, cachedUrlList, userUrlList) {
C$.$init$.apply(this);
this.provDefaultUrl=defaultUrlString;
this.menuUrlList=cachedUrlList;
this.nonMenuUrlList=userUrlList;
}, 1);

Clazz.newMeth(C$, 'createUrlProvider$', function () {
var providers=Clazz.new_($I$(1));
var idProvider=Clazz.new_($I$(2).c$$S,[this.menuUrlList]);
var customProvider=Clazz.new_($I$(3).c$$S$S,[this.menuUrlList, this.nonMenuUrlList]);
providers.add$TE(idProvider);
providers.add$TE(customProvider);
return Clazz.new_($I$(4).c$$S$java_util_List,[this.provDefaultUrl, providers]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
