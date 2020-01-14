(function(){var P$=Clazz.newPackage("javax.xml.bind"),I$=[[0,'java.util.logging.Logger','java.security.AccessController','javax.xml.bind.GetPropertyAction','java.util.logging.Level','java.util.logging.ConsoleHandler',['javax.xml.bind.ServiceLoaderUtil','.ExceptionHandler'],'javax.xml.bind.Messages','javax.xml.bind.ServiceLoaderUtil','javax.xml.bind.ModuleUtil','java.util.Map','javax.xml.bind.JAXBContext','javax.xml.bind.JAXBContextFactory','java.util.Properties','Thread','java.io.BufferedReader','java.io.InputStreamReader']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ContextFinder");
C$.logger=null;
C$.EXCEPTION_HANDLER=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
{
C$.logger=$I$(1).getLogger$S("javax.xml.bind");
try {
if ($I$(2).doPrivileged$java_security_PrivilegedAction(Clazz.new_($I$(3).c$$S,["jaxb.debug"])) != null ) {
C$.logger.setUseParentHandlers$Z(false);
C$.logger.setLevel$java_util_logging_Level($I$(4).ALL);
var handler=Clazz.new_($I$(5));
handler.setLevel$java_util_logging_Level($I$(4).ALL);
C$.logger.addHandler$java_util_logging_Handler(handler);
} else {
}} catch (t) {
}
};
C$.EXCEPTION_HANDLER=((P$.ContextFinder$1||
(function(){var C$=Clazz.newClass(P$, "ContextFinder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['javax.xml.bind.ServiceLoaderUtil','.ExceptionHandler']), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createException$Throwable$S', function (throwable, message) {
return Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[message, throwable]);
});
})()
), Clazz.new_($I$(6), [this, null],P$.ContextFinder$1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'handleInvocationTargetException$reflect_InvocationTargetException', function (x) {
var t=x.getTargetException$();
if (t != null ) {
if (Clazz.instanceOf(t, "javax.xml.bind.JAXBException")) throw t;
if (Clazz.instanceOf(t, "java.lang.RuntimeException")) throw t;
if (Clazz.instanceOf(t, "java.lang.Error")) throw t;
return t;
}return x;
}, 1);

Clazz.newMeth(C$, 'handleClassCastException$Class$Class', function (originalType, targetType) {
var targetTypeURL=C$.which$Class(targetType);
return Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(7).format$S$O$O("JAXBContext.IllegalCast", C$.getClassClassLoader$Class(originalType).getResource$S("javax/xml/bind/JAXBContext.class"), targetTypeURL)]);
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassA$S$ClassLoader$java_util_Map', function (contextPath, contextPathClasses, className, classLoader, properties) {
try {
var spFactory=$I$(8).safeLoadClass$S$S$ClassLoader(className, "com.sun.xml.internal.bind.v2.ContextFactory", classLoader);
return C$.newInstance$S$ClassA$Class$ClassLoader$java_util_Map(contextPath, contextPathClasses, spFactory, classLoader, properties);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(7).format$S("ContextFinder.DefaultProviderNotFound"), x]);
}
} else if (Clazz.exceptionOf(e$$,"RuntimeException") || Clazz.exceptionOf(e$$,"javax.xml.bind.JAXBException")){
var x = e$$;
{
throw x;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(7).format$S$O$O("ContextFinder.CouldNotInstantiate", className, x), x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassA$Class$ClassLoader$java_util_Map', function (contextPath, contextPathClasses, spFactory, classLoader, properties) {
try {
$I$(9).delegateAddOpensToImplModule$ClassA$Class(contextPathClasses, spFactory);
var context=null;
try {
var m=spFactory.getMethod$S$ClassA("createContext", [Clazz.getClass(String), Clazz.getClass(ClassLoader), Clazz.getClass($I$(10),['clear$','compute$TK$java_util_function_BiFunction','computeIfAbsent$TK$java_util_function_Function','computeIfPresent$TK$java_util_function_BiFunction','containsKey$O','containsValue$O','entrySet$','equals$O','forEach$java_util_function_BiConsumer','get$O','getOrDefault$O$TV','hashCode$','isEmpty$','keySet$','merge$TK$TV$java_util_function_BiFunction','put$TK$TV','putAll$java_util_Map','putIfAbsent$TK$TV','remove$O','remove$O$O','replace$TK$TV$TV','replace$TK$TV','replaceAll$java_util_function_BiFunction','size$','values$'])]);
var obj=C$.instantiateProviderIfNecessary$Class(spFactory);
context=m.invoke$O$OA(obj, [contextPath, classLoader, properties]);
} catch (ignored) {
if (Clazz.exceptionOf(ignored,"NoSuchMethodException")){
} else {
throw ignored;
}
}
if (context == null ) {
var m=spFactory.getMethod$S$ClassA("createContext", [Clazz.getClass(String), Clazz.getClass(ClassLoader)]);
var obj=C$.instantiateProviderIfNecessary$Class(spFactory);
context=m.invoke$O$OA(obj, [contextPath, classLoader]);
}if (!(Clazz.instanceOf(context, "javax.xml.bind.JAXBContext"))) {
throw C$.handleClassCastException$Class$Class(context.getClass$(), Clazz.getClass($I$(11)));
}return context;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var x = e$$;
{
var e=C$.handleInvocationTargetException$reflect_InvocationTargetException(x);
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(7).format$S$O$O("ContextFinder.CouldNotInstantiate", spFactory, e), e]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var x = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(7).format$S$O$O("ContextFinder.CouldNotInstantiate", spFactory, x), x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'instantiateProviderIfNecessary$Class', function (implClass) {
try {
if (Clazz.getClass($I$(12),['createContext$ClassA$java_util_Map','createContext$S$ClassLoader$java_util_Map']).isAssignableFrom$Class(implClass)) {
return $I$(2).doPrivileged$java_security_PrivilegedExceptionAction(((P$.ContextFinder$2||
(function(){var C$=Clazz.newClass(P$, "ContextFinder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return this.$finals$.implClass.newInstance$();
});
})()
), Clazz.new_(P$.ContextFinder$2.$init$, [this, {implClass: implClass}])));
}return null;
} catch (x) {
if (Clazz.exceptionOf(x,"java.security.PrivilegedActionException")){
var e=(x.getCause$() == null ) ? x : x.getCause$();
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(7).format$S$O$O("ContextFinder.CouldNotInstantiate", implClass, e), e]);
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstance$ClassA$java_util_Map$S', function (classes, properties, className) {
var spi;
try {
spi=$I$(8).safeLoadClass$S$S$ClassLoader(className, "com.sun.xml.internal.bind.v2.ContextFactory", C$.getContextClassLoader$());
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[$I$(7).format$S("ContextFinder.DefaultProviderNotFound"), e]);
} else {
throw e;
}
}
if (C$.logger.isLoggable$java_util_logging_Level($I$(4).FINE)) {
C$.logger.log$java_util_logging_Level$S$OA($I$(4).FINE, "loaded {0} from {1}", Clazz.array(java.lang.Object, -1, [className, C$.which$Class(spi)]));
}return C$.newInstance$ClassA$java_util_Map$Class(classes, properties, spi);
}, 1);

Clazz.newMeth(C$, 'newInstance$ClassA$java_util_Map$Class', function (classes, properties, spFactory) {
try {
$I$(9).delegateAddOpensToImplModule$ClassA$Class(classes, spFactory);
var m=spFactory.getMethod$S$ClassA("createContext", [Clazz.array(Class, -1), Clazz.getClass($I$(10),['clear$','compute$TK$java_util_function_BiFunction','computeIfAbsent$TK$java_util_function_Function','computeIfPresent$TK$java_util_function_BiFunction','containsKey$O','containsValue$O','entrySet$','equals$O','forEach$java_util_function_BiConsumer','get$O','getOrDefault$O$TV','hashCode$','isEmpty$','keySet$','merge$TK$TV$java_util_function_BiFunction','put$TK$TV','putAll$java_util_Map','putIfAbsent$TK$TV','remove$O','remove$O$O','replace$TK$TV$TV','replace$TK$TV','replaceAll$java_util_function_BiFunction','size$','values$'])]);
var obj=C$.instantiateProviderIfNecessary$Class(spFactory);
var context=m.invoke$O$OA(obj, [classes, properties]);
if (!(Clazz.instanceOf(context, "javax.xml.bind.JAXBContext"))) {
throw C$.handleClassCastException$Class$Class(context.getClass$(), Clazz.getClass($I$(11)));
}return context;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException") || Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
var x=C$.handleInvocationTargetException$reflect_InvocationTargetException(e);
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$Throwable,[x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'find$S$S$ClassLoader$java_util_Map', function (factoryId, contextPath, classLoader, properties) {
if (contextPath == null  || contextPath.isEmpty$() ) {
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(7).format$S("ContextFinder.NoPackageInContextPath")]);
}var contextPathClasses=$I$(9).getClassesFromContextPath$S$ClassLoader(contextPath, classLoader);
var factoryClassName=null;
var factoryName=C$.classNameFromSystemProperties$();
if (factoryName != null ) return C$.newInstance$S$ClassA$S$ClassLoader$java_util_Map(contextPath, contextPathClasses, factoryName, classLoader, properties);
var obj=$I$(8).firstByServiceLoader$Class$java_util_logging_Logger$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler(Clazz.getClass($I$(12),['createContext$ClassA$java_util_Map','createContext$S$ClassLoader$java_util_Map']), C$.logger, C$.EXCEPTION_HANDLER);
if (obj != null ) {
$I$(9).delegateAddOpensToImplModule$ClassA$Class(contextPathClasses, obj.getClass$());
return obj.createContext$S$ClassLoader$java_util_Map(contextPath, classLoader, properties);
}factoryName=C$.firstByServiceLoaderDeprecated$Class$ClassLoader(Clazz.getClass($I$(11)), classLoader);
if (factoryName != null ) return C$.newInstance$S$ClassA$S$ClassLoader$java_util_Map(contextPath, contextPathClasses, factoryName, classLoader, properties);
var ctxFactory=$I$(8).lookupUsingOSGiServiceLoader$S$java_util_logging_Logger("javax.xml.bind.JAXBContext", C$.logger);
if (ctxFactory != null ) {
return C$.newInstance$S$ClassA$Class$ClassLoader$java_util_Map(contextPath, contextPathClasses, ctxFactory, classLoader, properties);
}C$.logger.fine$S("Trying to create the platform default provider");
return C$.newInstance$S$ClassA$S$ClassLoader$java_util_Map(contextPath, contextPathClasses, "com.sun.xml.internal.bind.v2.ContextFactory", classLoader, properties);
}, 1);

Clazz.newMeth(C$, 'find$ClassA$java_util_Map', function (classes, properties) {
C$.logger.fine$S("Searching jaxb.properties");
for (var c, $c = 0, $$c = classes; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c.getPackage$() == null ) continue;
var jaxbPropertiesUrl=C$.getResourceUrl$Class$S(c, "jaxb.properties");
if (jaxbPropertiesUrl != null ) {
var factoryClassName=C$.classNameFromPackageProperties$java_net_URL$SA(jaxbPropertiesUrl, ["javax.xml.bind.JAXBContextFactory", "javax.xml.bind.context.factory"]);
return C$.newInstance$ClassA$java_util_Map$S(classes, properties, factoryClassName);
}}
var factoryClassName=C$.classNameFromSystemProperties$();
if (factoryClassName != null ) return C$.newInstance$ClassA$java_util_Map$S(classes, properties, factoryClassName);
var factory=$I$(8).firstByServiceLoader$Class$java_util_logging_Logger$javax_xml_bind_ServiceLoaderUtil_ExceptionHandler(Clazz.getClass($I$(12),['createContext$ClassA$java_util_Map','createContext$S$ClassLoader$java_util_Map']), C$.logger, C$.EXCEPTION_HANDLER);
if (factory != null ) {
$I$(9).delegateAddOpensToImplModule$ClassA$Class(classes, factory.getClass$());
return factory.createContext$ClassA$java_util_Map(classes, properties);
}var className=C$.firstByServiceLoaderDeprecated$Class$ClassLoader(Clazz.getClass($I$(11)), C$.getContextClassLoader$());
if (className != null ) return C$.newInstance$ClassA$java_util_Map$S(classes, properties, className);
C$.logger.fine$S("Trying to create the platform default provider");
var ctxFactoryClass=$I$(8).lookupUsingOSGiServiceLoader$S$java_util_logging_Logger("javax.xml.bind.JAXBContext", C$.logger);
if (ctxFactoryClass != null ) {
return C$.newInstance$ClassA$java_util_Map$Class(classes, properties, ctxFactoryClass);
}C$.logger.fine$S("Trying to create the platform default provider");
return C$.newInstance$ClassA$java_util_Map$S(classes, properties, "com.sun.xml.internal.bind.v2.ContextFactory");
}, 1);

Clazz.newMeth(C$, 'classNameFromPackageProperties$java_net_URL$SA', function (packagePropertiesUrl, factoryIds) {
C$.logger.log$java_util_logging_Level$S$S($I$(4).FINE, "Trying to locate {0}", packagePropertiesUrl.toString());
var props=C$.loadJAXBProperties$java_net_URL(packagePropertiesUrl);
for (var factoryId, $factoryId = 0, $$factoryId = factoryIds; $factoryId<$$factoryId.length&&((factoryId=($$factoryId[$factoryId])),1);$factoryId++) {
if (props.containsKey$O(factoryId)) {
return props.getProperty$S(factoryId);
}}
var propertiesUrl=packagePropertiesUrl.toExternalForm$();
var packageName=propertiesUrl.substring$I$I(0, propertiesUrl.indexOf$S("/jaxb.properties"));
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S,[$I$(7).format$S$O$O("ContextFinder.MissingProperty", packageName, factoryIds[0])]);
}, 1);

Clazz.newMeth(C$, 'classNameFromSystemProperties$', function () {
var factoryClassName=C$.getSystemProperty$S("javax.xml.bind.JAXBContextFactory");
if (factoryClassName != null ) {
return factoryClassName;
}factoryClassName=C$.getDeprecatedSystemProperty$S("javax.xml.bind.context.factory");
if (factoryClassName != null ) {
return factoryClassName;
}factoryClassName=C$.getDeprecatedSystemProperty$S(Clazz.getClass($I$(11)).getName$());
if (factoryClassName != null ) {
return factoryClassName;
}return null;
}, 1);

Clazz.newMeth(C$, 'getDeprecatedSystemProperty$S', function (property) {
var value=C$.getSystemProperty$S(property);
if (value != null ) {
C$.logger.log$java_util_logging_Level$S$OA($I$(4).WARNING, "Using non-standard property: {0}. Property {1} should be used instead.", Clazz.array(java.lang.Object, -1, [property, "javax.xml.bind.JAXBContextFactory"]));
}return value;
}, 1);

Clazz.newMeth(C$, 'getSystemProperty$S', function (property) {
C$.logger.log$java_util_logging_Level$S$S($I$(4).FINE, "Checking system property {0}", property);
var value=$I$(2).doPrivileged$java_security_PrivilegedAction(Clazz.new_($I$(3).c$$S,[property]));
if (value != null ) {
C$.logger.log$java_util_logging_Level$S$S($I$(4).FINE, "  found {0}", value);
} else {
C$.logger.log$java_util_logging_Level$S($I$(4).FINE, "  not found");
}return value;
}, 1);

Clazz.newMeth(C$, 'loadJAXBProperties$java_net_URL', function (url) {
try {
var props;
C$.logger.log$java_util_logging_Level$S$java_net_URL($I$(4).FINE, "loading props from {0}", url);
props=Clazz.new_($I$(13));
var is=url.openStream$();
props.load$java_io_InputStream(is);
is.close$();
return props;
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
C$.logger.log$java_util_logging_Level$S$Exception($I$(4).FINE, "Unable to load " + url.toString(), ioe);
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$S$Throwable,[ioe.toString(), ioe]);
} else {
throw ioe;
}
}
}, 1);

Clazz.newMeth(C$, 'getResourceUrl$ClassLoader$S', function (classLoader, resourceName) {
var url;
if (classLoader == null ) url=ClassLoader.getSystemResource$S(resourceName);
 else url=classLoader.getResource$S(resourceName);
return url;
}, 1);

Clazz.newMeth(C$, 'getResourceUrl$Class$S', function (clazz, resourceName) {
return clazz.getResource$S(resourceName);
}, 1);

Clazz.newMeth(C$, 'which$Class$ClassLoader', function (clazz, loader) {
var classnameAsResource=clazz.getName$().replace$C$C(".", "/") + ".class";
if (loader == null ) {
loader=C$.getSystemClassLoader$();
}return loader.getResource$S(classnameAsResource);
}, 1);

Clazz.newMeth(C$, 'which$Class', function (clazz) {
return C$.which$Class$ClassLoader(clazz, C$.getClassClassLoader$Class(clazz));
}, 1);

Clazz.newMeth(C$, 'getContextClassLoader$', function () {
if (System.getSecurityManager$() == null ) {
return $I$(14).currentThread$().getContextClassLoader$();
} else {
return $I$(2).doPrivileged$java_security_PrivilegedAction(((P$.ContextFinder$3||
(function(){var C$=Clazz.newClass(P$, "ContextFinder$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return $I$(14).currentThread$().getContextClassLoader$();
});
})()
), Clazz.new_(P$.ContextFinder$3.$init$, [this, null])));
}}, 1);

Clazz.newMeth(C$, 'getClassClassLoader$Class', function (c) {
if (System.getSecurityManager$() == null ) {
return c.getClassLoader$();
} else {
return $I$(2).doPrivileged$java_security_PrivilegedAction(((P$.ContextFinder$4||
(function(){var C$=Clazz.newClass(P$, "ContextFinder$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return this.$finals$.c.getClassLoader$();
});
})()
), Clazz.new_(P$.ContextFinder$4.$init$, [this, {c: c}])));
}}, 1);

Clazz.newMeth(C$, 'getSystemClassLoader$', function () {
if (System.getSecurityManager$() == null ) {
return ClassLoader.getSystemClassLoader$();
} else {
return $I$(2).doPrivileged$java_security_PrivilegedAction(((P$.ContextFinder$5||
(function(){var C$=Clazz.newClass(P$, "ContextFinder$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
return ClassLoader.getSystemClassLoader$();
});
})()
), Clazz.new_(P$.ContextFinder$5.$init$, [this, null])));
}}, 1);

Clazz.newMeth(C$, 'firstByServiceLoaderDeprecated$Class$ClassLoader', function (spiClass, classLoader) {
var jaxbContextFQCN=spiClass.getName$();
C$.logger.fine$S("Searching META-INF/services");
var r=null;
var resource="META-INF/services/" + jaxbContextFQCN;
try {
var resourceStream=(classLoader == null ) ? ClassLoader.getSystemResourceAsStream$S(resource) : classLoader.getResourceAsStream$S(resource);
if (resourceStream != null ) {
r=Clazz.new_($I$(15).c$$java_io_Reader,[Clazz.new_($I$(16).c$$java_io_InputStream$S,[resourceStream, "UTF-8"])]);
var factoryClassName=r.readLine$();
if (factoryClassName != null ) {
factoryClassName=factoryClassName.trim$();
}r.close$();
C$.logger.log$java_util_logging_Level$S$S($I$(4).FINE, "Configured factorty class:{0}", factoryClassName);
return factoryClassName;
} else {
C$.logger.log$java_util_logging_Level$S$S($I$(4).FINE, "Unable to load:{0}", resource);
return null;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.xml.bind.JAXBException').c$$Throwable,[e]);
} else {
throw e;
}
} finally {
try {
if (r != null ) {
r.close$();
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
C$.logger.log$java_util_logging_Level$S$Exception($I$(4).SEVERE, "Unable to close resource: " + resource, ex);
} else {
throw ex;
}
}
}
}, 1);

Clazz.newMeth(C$, 'jaxbProperties$S$ClassLoader$S', function (contextPath, classLoader, factoryId) {
var packages=contextPath.split$S(":");
for (var pkg, $pkg = 0, $$pkg = packages; $pkg<$$pkg.length&&((pkg=($$pkg[$pkg])),1);$pkg++) {
var pkgUrl=pkg.replace$C$C(".", "/");
var jaxbPropertiesUrl=C$.getResourceUrl$ClassLoader$S(classLoader, pkgUrl + "/jaxb.properties");
if (jaxbPropertiesUrl != null ) {
return C$.classNameFromPackageProperties$java_net_URL$SA(jaxbPropertiesUrl, [factoryId, "javax.xml.bind.context.factory"]);
}}
return null;
}, 1);

Clazz.newMeth(C$, 'jaxbProperties$ClassA$S', function (classesFromContextPath, factoryId) {
for (var c, $c = 0, $$c = classesFromContextPath; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
var jaxbPropertiesUrl=C$.getResourceUrl$Class$S(c, "jaxb.properties");
if (jaxbPropertiesUrl != null ) {
return C$.classNameFromPackageProperties$java_net_URL$SA(jaxbPropertiesUrl, [factoryId, "javax.xml.bind.context.factory"]);
}}
return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:27 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
