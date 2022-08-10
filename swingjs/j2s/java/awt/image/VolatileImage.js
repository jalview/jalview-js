(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "VolatileImage", null, 'java.awt.Image', 'java.awt.Transparency');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.transparency=3;
},1);

C$.$fields$=[['I',['transparency']]]

Clazz.newMeth(C$, 'getSource$',  function () {
return this.getSnapshot$().getSource$();
});

Clazz.newMeth(C$, 'getGraphics$',  function () {
return this.createGraphics$();
});

Clazz.newMeth(C$, 'getTransparency$',  function () {
return this.transparency;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2021-07-28 16:08:31 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
