(function(){var P$=Clazz.newPackage("javax.xml.stream"),I$=[[0,'javax.xml.stream.FactoryFinder','javax.xml.stream.FactoryConfigurationError']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLEventFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newInstance$', function () {
return $I$(1).find$S$S("javax.xml.stream.XMLEventFactory", "com.sun.xml.internal.stream.events.XMLEventFactoryImpl");
}, 1);

Clazz.newMeth(C$, 'newFactory$', function () {
return $I$(1).find$S$S("javax.xml.stream.XMLEventFactory", "com.sun.xml.internal.stream.events.XMLEventFactoryImpl");
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassLoader', function (factoryId, classLoader) {
try {
return $I$(1).newInstance$S$ClassLoader$Z(factoryId, classLoader, false);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.stream.FactoryFinder.ConfigurationError")){
throw Clazz.new_([e.getException$(), e.getMessage$()],$I$(2,1).c$$Exception$S);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'newFactory$S$ClassLoader', function (factoryId, classLoader) {
try {
return $I$(1).newInstance$S$ClassLoader$Z(factoryId, classLoader, false);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.stream.FactoryFinder.ConfigurationError")){
throw Clazz.new_([e.getException$(), e.getMessage$()],$I$(2,1).c$$Exception$S);
} else {
throw e;
}
}
}, 1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
