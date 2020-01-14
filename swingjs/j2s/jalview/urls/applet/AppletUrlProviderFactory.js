(function(){var P$=Clazz.newPackage("jalview.urls.applet"),I$=[[0,'java.util.ArrayList','jalview.urls.CustomUrlProvider','jalview.urls.UrlProvider']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AppletUrlProviderFactory", null, null, 'jalview.urls.api.UrlProviderFactoryI');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.provDefaultUrl=null;
this.provUrlList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Map', function (defaultUrlString, urlList) {
C$.$init$.apply(this);
this.provDefaultUrl=defaultUrlString;
this.provUrlList=urlList;
}, 1);

Clazz.newMeth(C$, 'createUrlProvider$', function () {
var providers=Clazz.new_($I$(1));
var customProvider=Clazz.new_($I$(2).c$$java_util_Map$java_util_Map,[this.provUrlList, null]);
providers.add$TE(customProvider);
var prov=Clazz.new_($I$(3).c$$S$java_util_List,[this.provDefaultUrl, providers]);
return prov;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
