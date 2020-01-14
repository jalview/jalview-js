(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'java.util.Hashtable','javajs.util.AjaxURLStreamHandler']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AjaxURLStreamHandlerFactory", null, null, 'java.net.URLStreamHandlerFactory');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.htFactories=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.htFactories=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['createURLStreamHandler$S','createURLStreamHandler$'], function (protocol) {
var fac=this.htFactories.get$O(protocol);
if (fac == null ) this.htFactories.put$TK$TV(protocol, fac=Clazz.new_($I$(2).c$$S,[protocol]));
return (fac.protocol == null  ? null : fac);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
