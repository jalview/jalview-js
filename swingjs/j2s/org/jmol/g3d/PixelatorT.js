(function(){var P$=Clazz.newPackage("org.jmol.g3d"),I$=[[0,'org.jmol.g3d.Graphics3D']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PixelatorT", null, 'org.jmol.g3d.Pixelator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_jmol_g3d_Graphics3D', function (graphics3d) {
;C$.superclazz.c$$org_jmol_g3d_Graphics3D.apply(this,[graphics3d]);C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
