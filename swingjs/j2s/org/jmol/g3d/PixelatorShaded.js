(function(){var P$=Clazz.newPackage("org.jmol.g3d"),I$=[];
var C$=Clazz.newClass(P$, "PixelatorShaded", null, 'org.jmol.g3d.Pixelator');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bgRGB=null;
this.tmp=null;
this.zSlab=0;
this.zDepth=0;
this.zShadePower=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_g3d_Graphics3D', function (g) {
C$.superclazz.c$$org_jmol_g3d_Graphics3D.apply(this, [g]);
C$.$init$.apply(this);
this.tmp=Clazz.array(Integer.TYPE, [3]);
}, 1);

Clazz.newMeth(C$, 'set$I$I$I', function (zSlab, zDepth, zShadePower) {
this.bgcolor=this.g.bgcolor;
this.bgRGB=Clazz.array(Integer.TYPE, -1, [this.bgcolor & 255, (this.bgcolor >> 8) & 255, (this.g.bgcolor >> 16) & 255]);
this.zSlab=zSlab < 0 ? 0 : zSlab;
this.zDepth=zDepth < 0 ? 0 : zDepth;
this.zShadePower=zShadePower;
this.p0=this.g.pixel0;
return this;
});

Clazz.newMeth(C$, 'addPixel$I$I$I', function (offset, z, p) {
if (z > this.zDepth) return;
if (z >= this.zSlab && this.zShadePower > 0 ) {
var t=this.tmp;
var zs=this.bgRGB;
t[0]=p;
t[1]=p >> 8;
t[2]=p >> 16;
var f=(this.zDepth - z) / (this.zDepth - this.zSlab);
if (this.zShadePower > 1) for (var i=0; i < this.zShadePower; i++) f *= f;

for (var i=0; i < 3; i++) t[i]=zs[i] + ((f * ((t[i] & 255) - zs[i]))|0);

p=(t[2] << 16) | (t[1] << 8) | t[0] | (p & -16777216) ;
}this.p0.addPixel$I$I$I(offset, z, p);
});

Clazz.newMeth(C$, 'showZBuffer$', function () {
for (var i=this.p0.zb.length; --i >= 0; ) {
if (this.p0.pb[i] == 0) continue;
var z=(Math.min(255, Math.max(0, 255.0 * (this.zDepth - this.p0.zb[i]) / (this.zDepth - this.zSlab)))|0);
this.p0.pb[i]=-16777216 | z | (z << 8) | (z << 16) ;
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
