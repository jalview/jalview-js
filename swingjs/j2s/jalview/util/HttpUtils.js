(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.net.URL']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HttpUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isValidUrl$S',  function (url) {
var is=null;
try {
is=Clazz.new_($I$(1,1).c$$S,[url]).openStream$();
if (is != null ) {
return true;
}} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
return false;
} else {
throw x;
}
} finally {
if (is != null ) {
try {
is.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}
return false;
}, 1);

Clazz.newMeth(C$, 'startsWithHttpOrHttps$S',  function (file) {
return file.startsWith$S("http://") || file.startsWith$S("https://") ;
}, 1);

Clazz.newMeth(C$, 'checkUrlAvailable$java_net_URL$I',  function (url, readTimeout) {
var connection=url.openConnection$();
connection.setRequestMethod$S("HEAD");
connection.setDoInput$Z(true);
connection.setUseCaches$Z(false);
connection.setConnectTimeout$I(300);
connection.setReadTimeout$I(readTimeout);
return connection.getResponseCode$() == 200;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:41 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
