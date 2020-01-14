(function(){var P$=Clazz.newPackage("org.xml.sax.helpers"),I$=[[0,'Thread','UnknownError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "NewInstance");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'newInstance$ClassLoader$S', function (classLoader, className) {
var driverClass;
if (classLoader == null ) {
driverClass=Clazz.forName(className);
} else {
driverClass=classLoader.loadClass$S(className);
}return driverClass.newInstance$();
}, 1);

Clazz.newMeth(C$, 'getClassLoader$', function () {
var m=null;
try {
m=Clazz.getClass($I$(1)).getMethod$S$ClassA("getContextClassLoader", null);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
return Clazz.getClass(C$).getClassLoader$();
} else {
throw e;
}
}
try {
return m.invoke$O$OA($I$(1).currentThread$(), null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_($I$(2).c$$S,[e.getMessage$()]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_($I$(2).c$$S,[e.getMessage$()]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:33 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
