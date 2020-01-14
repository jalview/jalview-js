(function(){var P$=Clazz.newPackage("org.jmol.g3d"),I$=[[0,'org.jmol.g3d.Graphics3D']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "PixelatorT", null, 'org.jmol.g3d.Pixelator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_g3d_Graphics3D', function (graphics3d) {
C$.superclazz.c$$org_jmol_g3d_Graphics3D.apply(this, [graphics3d]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clearPixel$I$I', function (offset, z) {
});

Clazz.newMeth(C$, 'addPixel$I$I$I', function (offset, z, p) {
var zT=this.g.zbufT[offset];
if (z < zT) {
var argb=this.g.pbufT[offset];
if (!this.g.translucentCoverOnly && argb != 0  && zT - z > this.g.zMargin ) this.pb[offset]=$I$(1).mergeBufferPixel$I$I$I(this.pb[offset], argb, this.g.bgcolor);
this.g.zbufT[offset]=z;
this.g.pbufT[offset]=p & this.g.translucencyMask;
} else if (z == zT) {
} else if (!this.g.translucentCoverOnly && z - zT > this.g.zMargin ) {
this.pb[offset]=$I$(1).mergeBufferPixel$I$I$I(this.pb[offset], p & this.g.translucencyMask, this.g.bgcolor);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:00 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
