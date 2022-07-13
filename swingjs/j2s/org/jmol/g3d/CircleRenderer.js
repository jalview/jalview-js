(function(){var P$=Clazz.newPackage("org.jmol.g3d"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "CircleRenderer", null, null, 'org.jmol.g3d.G3DRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['g3d','org.jmol.g3d.Graphics3D']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_api_JmolRendererInterface$org_jmol_util_GData', function (g3d, gdata) {
try {
this.g3d=g3d;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'plotCircleCenteredClipped$I$I$I$I', function (xCenter, yCenter, zCenter, diameter) {
var g=this.g3d;
var c=g.argbCurrent;
var width=g.width;
var zbuf=g.zbuf;
var p=g.pixel;
var r=(diameter/2|0);
var sizeCorrection=1 - (diameter & 1);
var x=r;
var y=0;
var xChange=1 - 2 * r;
var yChange=1;
var radiusError=0;
while (x >= y){
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter + x - sizeCorrection, yCenter + y - sizeCorrection, zCenter, width, zbuf, p);
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter + x - sizeCorrection, yCenter - y, zCenter, width, zbuf, p);
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter - x, yCenter + y - sizeCorrection, zCenter, width, zbuf, p);
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter - x, yCenter - y, zCenter, width, zbuf, p);
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter + y - sizeCorrection, yCenter + x - sizeCorrection, zCenter, width, zbuf, p);
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter + y - sizeCorrection, yCenter - x, zCenter, width, zbuf, p);
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter - y, yCenter + x - sizeCorrection, zCenter, width, zbuf, p);
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter - y, yCenter - x, zCenter, width, zbuf, p);
++y;
radiusError+=yChange;
yChange+=2;
if (2 * radiusError + xChange > 0) {
--x;
radiusError+=xChange;
xChange+=2;
}}
});

Clazz.newMeth(C$, 'plotCircleCenteredUnclipped$I$I$I$I', function (xCenter, yCenter, zCenter, diameter) {
var r=(diameter/2|0);
var sizeCorrection=1 - (diameter & 1);
var x=r;
var y=0;
var xChange=1 - 2 * r;
var yChange=1;
var radiusError=0;
var g=this.g3d;
var p=g.pixel;
var width=g.width;
var zbuf=g.zbuf;
var c=g.argbCurrent;
while (x >= y){
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter + x - sizeCorrection, yCenter + y - sizeCorrection, zCenter, width, zbuf, p);
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter + x - sizeCorrection, yCenter - y, zCenter, width, zbuf, p);
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter - x, yCenter + y - sizeCorrection, zCenter, width, zbuf, p);
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter - x, yCenter - y, zCenter, width, zbuf, p);
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter + y - sizeCorrection, yCenter + x - sizeCorrection, zCenter, width, zbuf, p);
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter + y - sizeCorrection, yCenter - x, zCenter, width, zbuf, p);
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter - y, yCenter + x - sizeCorrection, zCenter, width, zbuf, p);
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, xCenter - y, yCenter - x, zCenter, width, zbuf, p);
++y;
radiusError+=yChange;
yChange+=2;
if (2 * radiusError + xChange > 0) {
--x;
radiusError+=xChange;
xChange+=2;
}}
});

Clazz.newMeth(C$, 'plotFilledCircleCenteredClipped$I$I$I$I', function (xCenter, yCenter, zCenter, diameter) {
var r=(diameter/2|0);
var sizeCorrection=1 - (diameter & 1);
var x=r;
var y=0;
var xChange=1 - 2 * r;
var yChange=1;
var radiusError=0;
var g=this.g3d;
var c=g.argbCurrent;
var width=g.width;
var height=g.height;
var zbuf=g.zbuf;
var p=g.pixel;
while (x >= y){
p$1.plotPixelsClipped$I$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator.apply(this, [c, 2 * x + 1 - sizeCorrection, xCenter - x, yCenter + y - sizeCorrection, zCenter, width, height, zbuf, p]);
p$1.plotPixelsClipped$I$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator.apply(this, [c, 2 * x + 1 - sizeCorrection, xCenter - x, yCenter - y, zCenter, width, height, zbuf, p]);
p$1.plotPixelsClipped$I$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator.apply(this, [c, 2 * y + 1 - sizeCorrection, xCenter - y, yCenter + x - sizeCorrection, zCenter, width, height, zbuf, p]);
p$1.plotPixelsClipped$I$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator.apply(this, [c, 2 * y + 1 - sizeCorrection, xCenter - y, yCenter - x, zCenter, width, height, zbuf, p]);
++y;
radiusError+=yChange;
yChange+=2;
if (2 * radiusError + xChange > 0) {
--x;
radiusError+=xChange;
xChange+=2;
}}
});

Clazz.newMeth(C$, 'plotPixelsClipped$I$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator', function (argb, count, x, y, z, width, height, zbuf, p) {
if (y < 0 || y >= height  || x >= width ) return;
if (x < 0) {
count+=x;
x=0;
}if (count + x > width) count=width - x;
if (count <= 0) return;
var offsetPbuf=y * width + x;
var offsetMax=offsetPbuf + count;
while (offsetPbuf < offsetMax){
if (z < zbuf[offsetPbuf]) p.addPixel$I$I$I(offsetPbuf, z, argb);
offsetPbuf++;
}
}, p$1);

Clazz.newMeth(C$, 'plotFilledCircleCenteredUnclipped$I$I$I$I', function (xCenter, yCenter, zCenter, diameter) {
var r=(diameter/2|0);
var x=r;
var y=0;
var xChange=1 - 2 * r;
var yChange=1;
var radiusError=0;
var g=this.g3d;
var c=g.argbCurrent;
var width=g.width;
var zbuf=g.zbuf;
var p=g.pixel;
while (x >= y){
g.plotPixelsUnclippedCount$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, 2 * x + 1, xCenter - x, yCenter + y, zCenter, width, zbuf, p);
g.plotPixelsUnclippedCount$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, 2 * x + 1, xCenter - x, yCenter - y, zCenter, width, zbuf, p);
g.plotPixelsUnclippedCount$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, 2 * y + 1, xCenter - y, yCenter + x, zCenter, width, zbuf, p);
g.plotPixelsUnclippedCount$I$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(c, 2 * y + 1, xCenter - y, yCenter - x, zCenter, width, zbuf, p);
++y;
radiusError+=yChange;
yChange+=2;
if (2 * radiusError + xChange > 0) {
--x;
radiusError+=xChange;
xChange+=2;
}}
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:33 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
