(function(){var P$=Clazz.newPackage("org.jmol.g3d"),I$=[[0,'org.jmol.g3d.Graphics3D']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Pixelator");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.g=null;
this.p0=null;
this.zb=null;
this.pb=null;
this.width=0;
this.bgcolor=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_g3d_Graphics3D', function (graphics3d) {
C$.$init$.apply(this);
this.g=graphics3d;
this.bgcolor=this.g.bgcolor;
this.setBuf$();
}, 1);

Clazz.newMeth(C$, 'setBuf$', function () {
this.zb=this.g.zbuf;
this.pb=this.g.pbuf;
});

Clazz.newMeth(C$, 'clearPixel$I$I', function (offset, z) {
if (this.zb[offset] > z) this.zb[offset]=2147483647;
});

Clazz.newMeth(C$, 'addPixel$I$I$I', function (offset, z, p) {
this.zb[offset]=z;
this.pb[offset]=p;
});

Clazz.newMeth(C$, 'addImagePixel$B$I$I$I$I$I', function (shade, tLog, offset, z, argb, bgargb) {
if (z < this.zb[offset]) {
switch (shade) {
case 0:
return;
case 8:
this.addPixel$I$I$I(offset, z, argb);
return;
default:
shade=($b$[0] = shade+(tLog), $b$[0]);
if (shade <= 7) {
var p=this.pb[offset];
if (bgargb != 0) p=$I$(1).mergeBufferPixel$I$I$I(p, bgargb, bgargb);
p=$I$(1).mergeBufferPixel$I$I$I(p, (argb & 16777215) | (shade << 24), this.bgcolor);
this.addPixel$I$I$I(offset, z, p);
}}
}});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:15 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
