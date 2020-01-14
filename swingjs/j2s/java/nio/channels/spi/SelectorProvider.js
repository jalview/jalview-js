(function(){var P$=Clazz.newPackage("java.nio.channels.spi"),I$=[[0,'RuntimePermission','java.util.ServiceConfigurationError','java.util.ServiceLoader','java.security.AccessController','java.nio.channels.spi.SelectorProvider','sun.nio.ch.DefaultSelectorProvider']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SelectorProvider");
C$.lock=null;
C$.provider=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.lock= Clazz.new_();
C$.provider=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
var sm=System.getSecurityManager$();
if (sm != null ) sm.checkPermission$java_security_Permission(Clazz.new_($I$(1).c$$S,["selectorProvider"]));
}, 1);

Clazz.newMeth(C$, 'loadProviderFromProperty$', function () {
var cn=System.getProperty$S("java.nio.channels.spi.SelectorProvider");
if (cn == null ) return false;
try {
var c=Clazz.forName(cn, true, ClassLoader.getSystemClassLoader$());
C$.provider=c.newInstance$();
return true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
throw Clazz.new_($I$(2).c$$S$Throwable,[null, x]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var x = e$$;
{
throw Clazz.new_($I$(2).c$$S$Throwable,[null, x]);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var x = e$$;
{
throw Clazz.new_($I$(2).c$$S$Throwable,[null, x]);
}
} else if (Clazz.exceptionOf(e$$,"SecurityException")){
var x = e$$;
{
throw Clazz.new_($I$(2).c$$S$Throwable,[null, x]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'loadProviderAsService$', function () {
var sl=$I$(3).load$Class$ClassLoader(Clazz.getClass(C$), ClassLoader.getSystemClassLoader$());
var i=sl.iterator$();
for (; ; ) {
try {
if (!i.hasNext$()) return false;
C$.provider=i.next$();
return true;
} catch (sce) {
if (Clazz.exceptionOf(sce,"java.util.ServiceConfigurationError")){
if (Clazz.instanceOf(sce.getCause$(), "java.lang.SecurityException")) {
continue;
}throw sce;
} else {
throw sce;
}
}
}
}, 1);

Clazz.newMeth(C$, 'provider$', function () {
{
if (C$.provider != null ) return C$.provider;
return $I$(4).doPrivileged$java_security_PrivilegedAction(((P$.SelectorProvider$1||
(function(){var C$=Clazz.newClass(P$, "SelectorProvider$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
if (P$.SelectorProvider.loadProviderFromProperty$()) return $I$(5).provider;
if (P$.SelectorProvider.loadProviderAsService$()) return $I$(5).provider;
$I$(5).provider=$I$(6).create$();
return $I$(5).provider;
});
})()
), Clazz.new_(P$.SelectorProvider$1.$init$, [this, null])));
}}, 1);

Clazz.newMeth(C$, 'inheritedChannel$', function () {
return null;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:39 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
