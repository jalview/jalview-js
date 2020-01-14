(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers");
var C$=Clazz.newClass(P$, "IsoFxyzReader", null, 'org.jmol.jvxl.readers.IsoFxyReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.$data=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
if (this.params.functionInfo.size$() > 5) this.$data=this.params.functionInfo.get$I(5);
this.setupType$S("functionXYZ");
});

Clazz.newMeth(C$, 'getValue$I$I$I', function (x, y, z) {
return (this.$data == null  ? this.evaluateValue$I$I$I(x, y, z) : this.$data[x][y][z]);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
