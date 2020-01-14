(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'swingjs.JSToolkit']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PointerInfo");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.device=null;
this.location=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_GraphicsDevice$java_awt_Point', function (device, location) {
C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:24 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
