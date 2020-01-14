(function(){var P$=Clazz.newPackage("org.jmol.shapespecial"),I$=[];
var C$=Clazz.newClass(P$, "GeoSurface", null, 'org.jmol.shapespecial.Dots');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initShape$', function () {
C$.superclazz.prototype.initShape$.apply(this, []);
this.isSurface=true;
this.translucentAllowed=true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:18 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
