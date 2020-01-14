(function(){var P$=Clazz.newPackage("org.jmol.shape"),I$=[];
var C$=Clazz.newClass(P$, "Uccage", null, 'org.jmol.shape.FontLineShape');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setProperty$S$O$javajs_util_BS', function (propertyName, value, bs) {
this.setPropFLS$S$O(propertyName, value);
});

Clazz.newMeth(C$, 'initShape$', function () {
C$.superclazz.prototype.initShape$.apply(this, []);
this.font3d=this.vwr.gdata.getFont3D$F(14);
this.myType="unitcell";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
