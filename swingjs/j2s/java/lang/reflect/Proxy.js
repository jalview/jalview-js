(function(){var P$=java.lang.reflect,I$=[[0,'java.lang.reflect.InvocationHandler','java.util.HashMap','java.util.Collections','java.util.HashSet','java.util.Arrays','InternalError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Proxy", null, null, 'java.io.Serializable');
C$.constructorParams=null;
C$.loaderToCache=null;
C$.nextUniqueNumber=0;
C$.nextUniqueNumberLock=null;
C$.proxyClasses=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.constructorParams=Clazz.array(Class, -1, [Clazz.getClass($I$(1),['invoke$O$reflect_Method$OA'])]);
C$.loaderToCache=Clazz.new_($I$(2));
C$.nextUniqueNumber=0;
C$.nextUniqueNumberLock= Clazz.new_();
C$.proxyClasses=$I$(3).synchronizedMap$java_util_Map(Clazz.new_($I$(2)));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.h=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$reflect_InvocationHandler', function (h) {
C$.$init$.apply(this);
this.h=h;
}, 1);

Clazz.newMeth(C$, 'getProxyClass$ClassLoader$ClassA', function (loader, interfaces) {
if (interfaces.length > 65535) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["interface limit exceeded"]);
}var proxyClass=null;
var interfaceNames=Clazz.array(String, [interfaces.length]);
var interfaceSet=Clazz.new_($I$(4));
for (var i=0; i < interfaces.length; i++) {
var interfaceName=interfaces[i].getName$();
var interfaceClass=Clazz.getClass(interfaces[i].$clazz$) ||null;
if (interfaceSet.contains$O(interfaceClass)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["repeated interface: " + interfaceClass.getName$()]);
}interfaceSet.add$TE(interfaceClass);
interfaceNames[i]=interfaceName;
}
var key=$I$(5).asList$TTA(interfaceNames);
var cache;

loader = "" + loader;
{
cache=C$.loaderToCache.get$O(loader);
if (cache == null ) {
cache=Clazz.new_($I$(2));
C$.loaderToCache.put$TK$TV(loader, cache);
}}{
do {
if (proxyClass != null ) {
return proxyClass;
} else {
break;
}} while (true);
}try {
var proxyPkg=null;
if (proxyPkg == null ) {
proxyPkg="";
}{
var num;
{
num=C$.nextUniqueNumber++;
}var proxyName=proxyPkg + "$Proxy" + num ;
try {
proxyClass=C$.defineClass0$ClassLoader$S$ClassA(loader, proxyName, interfaces);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassFormatError")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[e.toString()]);
} else {
throw e;
}
}
}C$.proxyClasses.put$TK$TV(proxyClass, null);
} finally {
{
if (proxyClass != null ) {
cache.put$TK$TV(key, proxyClass);
} else {
cache.remove$O(key);
}}}
return proxyClass;
}, 1);

Clazz.newMeth(C$, 'newProxyInstance$ClassLoader$ClassA$reflect_InvocationHandler', function (loader, interfaces, h) {
if (h == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var cl=C$.getProxyClass$ClassLoader$ClassA(loader, interfaces);
try {
var cons=cl.getConstructor$ClassA(C$.constructorParams);
return cons.newInstance$OA(Clazz.array(java.lang.Object, -1, [h]));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var e = e$$;
{
throw Clazz.new_($I$(6).c$$S,[e.toString()]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_($I$(6).c$$S,[e.toString()]);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
throw Clazz.new_($I$(6).c$$S,[e.toString()]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_($I$(6).c$$S,[e.toString()]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'isProxyClass$Class', function (cl) {
if (cl == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return C$.proxyClasses.containsKey$O(cl);
}, 1);

Clazz.newMeth(C$, 'getInvocationHandler$O', function (proxy) {
if (!C$.isProxyClass$Class(proxy.getClass$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["not a proxy instance"]);
}var p=proxy;
return p.h;
}, 1);

Clazz.newMeth(C$, 'defineClass0$ClassLoader$S$ClassA', function (loader, name, interfaces) {
var cl=null;
{
cl = Clazz.getClass(Clazz.newClass(java.lang.reflect, name, null, 'java.lang.reflect.Proxy'));
var cl$ = cl.$clazz$;
cl$.$clinit$ = function() {Clazz.load(cl$, 1);};
Clazz.newMeth(cl$, '$init$', function () {}, 1);
Clazz.newMeth(cl$, '$init0$', function () {}, 1);
Clazz.newMeth(cl$, "c$$reflect_InvocationHandler", function(h) { cl$.superclazz.c$$reflect_InvocationHandler.apply(this, [h]);
cl$.$init$.apply(this);
}, 1);
}
for (var i=0; i < interfaces.length; i++) {
var methods=interfaces[i].getDeclaredMethods$();
for (var j=0; j < methods.length; j++) {
C$.setJSPrototype$Class$reflect_Method$Z(cl, methods[j], false);
}
if (methods.length == 1) C$.setJSPrototype$Class$reflect_Method$Z(cl, methods[0], true);
}
return cl;
}, 1);

Clazz.newMeth(C$, 'setJSPrototype$Class$reflect_Method$Z', function (cl, m, isFunctionalInterfaceMethod) {
var mname=m.getName$();

if (isFunctionalInterfaceMethod) { mname = mname.split("$")[0] + "$"; } m.Class_ = cl; m.isProxy = true; cl.$clazz$.prototype[mname] = function() { var args = new Array(arguments.length); for (var k = arguments.length; --k >= 0;)args[k] = arguments[k];
this.h.invoke$O$reflect_Method$OA(this, m, args); }
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
