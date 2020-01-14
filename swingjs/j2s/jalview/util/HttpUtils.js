(function(){var P$=Clazz.newPackage("jalview.util"),I$=[[0,'java.net.URL']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "HttpUtils");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isValidUrl$S', function (url) {
var is=null;
try {
is=Clazz.new_($I$(1).c$$S,[url]).openStream$();
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
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
