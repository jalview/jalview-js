(function(){var P$=Clazz.newPackage("javax.xml.transform"),I$=[[0,'javax.xml.transform.FactoryFinder','javax.xml.transform.TransformerFactoryConfigurationError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TransformerFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newInstance$',  function () {
try {
return $I$(1).find$S$S("javax.xml.transform.TransformerFactory", "swingjs.xml.JSXMLTransformerFactory");
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.transform.FactoryFinder.ConfigurationError")){
throw Clazz.new_([e.getException$(), e.getMessage$()],$I$(2,1).c$$Exception$S);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassLoader',  function (factoryClassName, classLoader) {
try {
return $I$(1).newInstance$S$ClassLoader$Z(factoryClassName, classLoader, false);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.transform.FactoryFinder.ConfigurationError")){
throw Clazz.new_([e.getException$(), e.getMessage$()],$I$(2,1).c$$Exception$S);
} else {
throw e;
}
}
}, 1);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:57 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
