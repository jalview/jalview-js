(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'java.awt.GraphicsConfiguration','swingjs.JSToolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSScreenDevice", null, 'java.awt.GraphicsDevice');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
System.out.println$S("JSScreenDevice initialized");
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getIDstring$',  function () {
return "swingjs.JSScreenDevice";
});

Clazz.newMeth(C$, 'getConfigurations$',  function () {
return Clazz.array($I$(1), -1, [this.getDefaultConfiguration$()]);
});

Clazz.newMeth(C$, 'getDefaultConfiguration$',  function () {
return $I$(2).getGraphicsConfiguration$();
});
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-22 00:10:18 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
