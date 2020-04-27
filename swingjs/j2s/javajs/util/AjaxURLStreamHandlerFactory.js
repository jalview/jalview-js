(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'java.util.Hashtable','javajs.util.AjaxURLStreamHandler']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AjaxURLStreamHandlerFactory", null, null, 'java.net.URLStreamHandlerFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.htFactories=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['htFactories','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createURLStreamHandler$S', function (protocol) {
var fac=this.htFactories.get$O(protocol);
if (fac == null ) this.htFactories.put$O$O(protocol, fac=Clazz.new_($I$(2,1).c$$S,[protocol]));
return (fac.protocol == null  ? null : fac);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:50 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
