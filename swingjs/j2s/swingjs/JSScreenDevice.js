(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'java.awt.GraphicsConfiguration','swingjs.JSToolkit']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSScreenDevice", null, 'java.awt.GraphicsDevice');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
System.out.println$S("JSScreenDevice initialized");
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return 0;
});

Clazz.newMeth(C$, 'getIDstring$', function () {
return "swingjs.JSScreenDevice";
});

Clazz.newMeth(C$, 'getConfigurations$', function () {
return Clazz.array($I$(1), -1, [this.getDefaultConfiguration$()]);
});

Clazz.newMeth(C$, 'getDefaultConfiguration$', function () {
return $I$(2).getGraphicsConfiguration$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
