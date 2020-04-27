(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'swingjs.JSToolkit']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PointerInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['device','java.awt.GraphicsDevice','location','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$java_awt_GraphicsDevice$java_awt_Point', function (device, location) {
;C$.$init$.apply(this);
this.device=device;
this.location=location;
}, 1);

Clazz.newMeth(C$, 'getDevice$', function () {
return this.device;
});

Clazz.newMeth(C$, 'getLocation$', function () {
return $I$(1).getMouseLocation$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 08:14:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
