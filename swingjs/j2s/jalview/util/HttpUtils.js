(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.net.URL']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HttpUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isValidUrl$S', function (url) {
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

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
