(function(){var P$=Clazz.newPackage("java.net"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FactoryURLClassLoader", null, 'java.net.URLClassLoader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_net_URLA$ClassLoader',  function (urls, parent) {
;C$.superclazz.c$$java_net_URLA$ClassLoader.apply(this,[urls, parent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URLA',  function (urls) {
;C$.superclazz.c$$java_net_URLA.apply(this,[urls]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'loadClass$S$Z',  function (name, resolve) {
return null;
});

C$.$static$=function(){C$.$static$=0;
{
ClassLoader.registerAsParallelCapable$();
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:09:00 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
