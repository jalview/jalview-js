(function(){var P$=Clazz.newPackage("org.jmol.g3d"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PixelatorScreened", null, 'org.jmol.g3d.Pixelator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_jmol_g3d_Graphics3D$org_jmol_g3d_Pixelator', function (g, p0) {
;C$.superclazz.c$$org_jmol_g3d_Graphics3D.apply(this,[g]);C$.$init$.apply(this);
this.width=g.width;
this.p0=p0;
}, 1);

Clazz.newMeth(C$, 'addPixel$I$I$I', function (offset, z, p) {
if ((offset % this.width) % 2 == ((offset/this.width|0)) % 2) this.p0.addPixel$I$I$I(offset, z, p);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
