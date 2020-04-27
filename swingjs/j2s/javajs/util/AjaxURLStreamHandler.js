(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.AjaxURLConnection','javajs.util.SB']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AjaxURLStreamHandler", null, 'java.net.URLStreamHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['protocol']]]

Clazz.newMeth(C$, 'c$$S', function (protocol) {
Clazz.super_(C$, this);
this.protocol=protocol;
}, 1);

Clazz.newMeth(C$, 'openConnection$java_net_URL', function (url) {
return $I$(1).newConnection$java_net_URL(url);
});

Clazz.newMeth(C$, 'toExternalForm$java_net_URL', function (u) {
var result=Clazz.new_($I$(2,1));
result.append$S(u.getProtocol$());
result.append$S(":");
if (u.getAuthority$() != null  && u.getAuthority$().length$() > 0 ) {
result.append$S("//");
result.append$S(u.getAuthority$());
}if (u.getPath$() != null ) {
result.append$S(u.getPath$());
}if (u.getQuery$() != null ) {
result.append$S("?");
result.append$S(u.getQuery$());
}if (u.getRef$() != null ) {
result.append$S("#");
result.append$S(u.getRef$());
}return result.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
