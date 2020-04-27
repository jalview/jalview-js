(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers");
/*c*/var C$=Clazz.newClass(P$, "IsoFxyzReader", null, 'org.jmol.jvxl.readers.IsoFxyReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['$data','float[][][]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
if (this.params.functionInfo.size$() > 5) this.$data=this.params.functionInfo.get$I(5);
this.setupType$S("functionXYZ");
});

Clazz.newMeth(C$, 'getValue$I$I$I', function (x, y, z) {
return (this.$data == null  ? this.evaluateValue$I$I$I(x, y, z) : this.$data[x][y][z]);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
