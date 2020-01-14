(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'java.util.ServiceLoader','java.util.logging.Level','Thread']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ServiceLoaderUtil", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'firstByServiceLoader$Class$java_util_logging_Logger$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler', function (spiClass, logger, handler) {
try {
var serviceLoader=$I$(1).load$Class(spiClass);
for (var impl, $impl = serviceLoader.iterator$(); $impl.hasNext$()&&((impl=($impl.next$())),1);) {
logger.fine$S("ServiceProvider loading Facility used; returning object [" + impl.getClass$().getName$() + "]" );
return impl;
}
} catch (t) {
throw handler.createException$Throwable$S(t, "Error while searching for service [" + spiClass.getName$() + "]" );
}
return null;
}, 1);

Clazz.newMeth(C$, 'lookupUsingOSGiServiceLoader$S$java_util_logging_Logger', function (factoryId, logger) {
try {
var serviceClass=Clazz.forName(factoryId);
var target=Clazz.forName("org.glassfish.hk2.osgiresourcelocator.ServiceLoader");
var m=target.getMethod$S$ClassA("lookupProviderClasses", [Clazz.getClass(Class)]);
var iter=(m.invoke$O$OA(null, [serviceClass])).iterator$();
if (iter.hasNext$()) {
var next=iter.next$();
logger.fine$S("Found implementation using OSGi facility; returning object [" + next.getClass$().getName$() + "]." );
return next;
} else {
return null;
}} catch (ignored) {
if (Clazz.exceptionOf(ignored,"IllegalAccessException") || Clazz.exceptionOf(ignored,"java.lang.reflect.InvocationTargetException") || Clazz.exceptionOf(ignored,"ClassNotFoundException") || Clazz.exceptionOf(ignored,"NoSuchMethodException")){
logger.log$java_util_logging_Level$S$Exception($I$(2).FINE, "Unable to find from OSGi: [" + factoryId + "]" , ignored);
return null;
} else {
throw ignored;
}
}
}, 1);

Clazz.newMeth(C$, 'checkPackageAccess$S', function (className) {
var s=System.getSecurityManager$();
if (s != null ) {
var i=className.lastIndexOf$I(".");
if (i != -1) {
s.checkPackageAccess$S(className.substring$I$I(0, i));
}}}, 1);

Clazz.newMeth(C$, 'nullSafeLoadClass$S$ClassLoader', function (className, classLoader) {
if (classLoader == null ) {
return Clazz.forName(className);
} else {
return classLoader.loadClass$S(className);
}}, 1);

Clazz.newMeth(C$, 'newInstance$S$S$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler', function (className, defaultImplClassName, handler) {
try {
return C$.safeLoadClass$S$S$ClassLoader(className, defaultImplClassName, C$.contextClassLoader$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler(handler)).newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw handler.createException$Throwable$S(x, "Provider " + className + " not found" );
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
throw handler.createException$Throwable$S(x, "Provider " + className + " could not be instantiated: " + x );
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'safeLoadClass$S$S$ClassLoader', function (className, defaultImplClassName, classLoader) {
try {
C$.checkPackageAccess$S(className);
} catch (se) {
if (Clazz.exceptionOf(se,"SecurityException")){
if (defaultImplClassName != null  && defaultImplClassName.equals$O(className) ) {
return Clazz.forName(className);
}throw se;
} else {
throw se;
}
}
return C$.nullSafeLoadClass$S$ClassLoader(className, classLoader);
}, 1);

Clazz.newMeth(C$, 'contextClassLoader$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler', function (exceptionHandler) {
try {
return $I$(3).currentThread$().getContextClassLoader$();
} catch (x) {
if (Clazz.exceptionOf(x,"Exception")){
throw exceptionHandler.createException$Throwable$S(x, x.toString());
} else {
throw x;
}
}
}, 1);
;
(function(){var C$=Clazz.newClass(P$.ServiceLoaderUtil, "ExceptionHandler", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
