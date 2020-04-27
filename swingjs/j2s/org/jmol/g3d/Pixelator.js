(function(){var P$=Clazz.newPackage("org.jmol.g3d"),I$=[[0,'org.jmol.g3d.Graphics3D']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Pixelator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['width','bgcolor'],'O',['g','org.jmol.g3d.Graphics3D','p0','org.jmol.g3d.Pixelator','zb','int[]','+pb']]]

Clazz.newMeth(C$, 'c$$org_jmol_g3d_Graphics3D', function (graphics3d) {
;C$.$init$.apply(this);
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
p=(function(a,f){return f.apply(null,a)})([p, (argb & 16777215) | (shade << 24), this.bgcolor],$I$(1).mergeBufferPixel$I$I$I);
this.addPixel$I$I$I(offset, z, p);
}}
}});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
