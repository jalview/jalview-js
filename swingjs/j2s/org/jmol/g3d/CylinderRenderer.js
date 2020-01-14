(function(){var P$=Clazz.newPackage("org.jmol.g3d"),p$1={},I$=[[0,'javajs.util.P3i','javajs.util.P3','javajs.util.AU']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CylinderRenderer");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.g3d=null;
this.line3d=null;
this.shader=null;
this.colixA=0;
this.colixB=0;
this.shadesA=null;
this.shadesB=null;
this.xA=0;
this.yA=0;
this.zA=0;
this.dxB=0;
this.dyB=0;
this.dzB=0;
this.xAf=0;
this.yAf=0;
this.zAf=0;
this.dxBf=0;
this.dyBf=0;
this.dzBf=0;
this.tEvenDiameter=false;
this.diameter=0;
this.endcaps=0;
this.endCapHidden=false;
this.xEndcap=0;
this.yEndcap=0;
this.zEndcap=0;
this.argbEndcap=0;
this.colixEndcap=0;
this.endcapShadeIndex=0;
this.radius=0;
this.radius2=0;
this.cosTheta=0;
this.cosPhi=0;
this.sinPhi=0;
this.clipped=false;
this.rasterCount=0;
this.xyztRaster=null;
this.xyzfRaster=null;
this.ptA0=null;
this.ptB0=null;
this.ptA0i=null;
this.ptB0i=null;
this.xTip=0;
this.yTip=0;
this.zTip=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.xyztRaster=Clazz.array(Float.TYPE, -2, [Clazz.array(Float.TYPE, [32]), Clazz.array(Float.TYPE, [32]), Clazz.array(Float.TYPE, [32]), Clazz.array(Float.TYPE, [32])]);
this.xyzfRaster=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, [32]), Clazz.array(Integer.TYPE, [32]), Clazz.array(Integer.TYPE, [32]), Clazz.array(Integer.TYPE, [32])]);
this.ptA0i=Clazz.new_($I$(1));
this.ptB0i=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_g3d_Graphics3D', function (g3d) {
C$.$init$.apply(this);
this.g3d=g3d;
this.line3d=g3d.line3d;
this.shader=g3d.shader;
}, 1);

Clazz.newMeth(C$, 'renderOld$H$H$I$B$I$I$I$I$I$I$I', function (colixA, colixB, screen, endcaps, diameter, xa, ya, za, xb, yb, zb) {
var r=(diameter/2|0) + 1;
var g=this.g3d;
var codeMinA=g.clipCode3$I$I$I(xa - r, ya - r, za - r);
var codeMaxA=g.clipCode3$I$I$I(xa + r, ya + r, za + r);
var codeMinB=g.clipCode3$I$I$I(xb - r, yb - r, zb - r);
var codeMaxB=g.clipCode3$I$I$I(xb + r, yb + r, zb + r);
var c=(codeMinA | codeMaxA | codeMinB | codeMaxB );
this.clipped=(c != 0);
if (c == -1 || (codeMinA & codeMaxB & codeMaxA & codeMinB ) != 0 ) return;
this.dxB=xb - xa;
this.dyB=yb - ya;
this.dzB=zb - za;
if (diameter <= 1) {
this.line3d.plotLineDeltaOld$I$I$I$I$I$I$I$I$Z(g.getColorArgbOrGray$H(colixA), g.getColorArgbOrGray$H(colixB), xa, ya, za, this.dxB, this.dyB, this.dzB, this.clipped);
return;
}var drawBackside=(screen == 0 && (this.clipped || endcaps == 2  || endcaps == 0 ) );
this.diameter=diameter;
this.xA=xa;
this.yA=ya;
this.zA=za;
this.endcaps=($b$[0] = endcaps, $b$[0]);
this.shadesA=g.getShades$H(this.colixA=colixA);
this.shadesB=g.getShades$H(this.colixB=colixB);
p$1.calcArgbEndcap$Z$Z.apply(this, [true, false]);
p$1.calcCosSin$F$F$F.apply(this, [this.dxB, this.dyB, this.dzB]);
p$1.calcPoints$I$Z.apply(this, [3, false]);
p$1.interpolate$I$I$IAA$FAA.apply(this, [0, 1, this.xyzfRaster, this.xyztRaster]);
p$1.interpolate$I$I$IAA$FAA.apply(this, [1, 2, this.xyzfRaster, this.xyztRaster]);
var xyzf=this.xyzfRaster;
if (endcaps == 2) p$1.renderFlatEndcap$Z$Z$IAA.apply(this, [true, false, xyzf]);
g.setZMargin$I(5);
var width=g.width;
var zbuf=g.zbuf;
var xr=xyzf[0];
var yr=xyzf[1];
var zr=xyzf[2];
var fr=xyzf[3];
var p=g.pixel;
for (var i=this.rasterCount; --i >= 0; ) {
var fpz=fr[i] >> (8);
var fpzBack=fpz >> 1;
var x=xr[i];
var y=yr[i];
var z=zr[i];
if (this.endCapHidden && this.argbEndcap != 0 ) {
if (this.clipped) {
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap + x, this.yEndcap + y, this.zEndcap - z - 1 , width, zbuf, p);
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap - x, this.yEndcap - y, this.zEndcap + z - 1, width, zbuf, p);
} else {
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap + x, this.yEndcap + y, this.zEndcap - z - 1 , width, zbuf, p);
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap - x, this.yEndcap - y, this.zEndcap + z - 1, width, zbuf, p);
}}this.line3d.plotLineDeltaAOld$IA$IA$I$I$I$I$I$I$I$I$Z(this.shadesA, this.shadesB, screen, fpz, this.xA + x, this.yA + y, this.zA - z, this.dxB, this.dyB, this.dzB, this.clipped);
if (drawBackside) {
this.line3d.plotLineDeltaOld$I$I$I$I$I$I$I$I$Z(this.shadesA[fpzBack], this.shadesB[fpzBack], this.xA - x, this.yA - y, this.zA + z, this.dxB, this.dyB, this.dzB, this.clipped);
}}
g.setZMargin$I(0);
if (endcaps == 3) p$1.renderSphericalEndcaps.apply(this, []);
});

Clazz.newMeth(C$, 'renderBitsFloat$H$H$I$B$I$javajs_util_P3$javajs_util_P3', function (colixA, colixB, screen, endcaps, diameter, ptA, ptB) {
var g=this.g3d;
if (this.ptA0 == null ) {
this.ptA0=Clazz.new_($I$(2));
this.ptB0=Clazz.new_($I$(2));
}this.ptA0.setT$javajs_util_T3(ptA);
var r=(diameter/2|0) + 1;
var ixA=Math.round(ptA.x);
var iyA=Math.round(ptA.y);
var izA=Math.round(ptA.z);
var ixB=Math.round(ptB.x);
var iyB=Math.round(ptB.y);
var izB=Math.round(ptB.z);
var codeMinA=g.clipCode3$I$I$I(ixA - r, iyA - r, izA - r);
var codeMaxA=g.clipCode3$I$I$I(ixA + r, iyA + r, izA + r);
var codeMinB=g.clipCode3$I$I$I(ixB - r, iyB - r, izB - r);
var codeMaxB=g.clipCode3$I$I$I(ixB + r, iyB + r, izB + r);
var c=(codeMinA | codeMaxA | codeMinB | codeMaxB );
this.clipped=(c != 0);
if (c == -1 || (codeMinA & codeMaxB & codeMaxA & codeMinB ) != 0 ) return;
this.dxBf=ptB.x - ptA.x;
this.dyBf=ptB.y - ptA.y;
this.dzBf=ptB.z - ptA.z;
if (diameter > 0) {
this.diameter=diameter;
this.xAf=ptA.x;
this.yAf=ptA.y;
this.zAf=ptA.z;
}var drawBackside=(screen == 0 && (this.clipped || endcaps == 2  || endcaps == 0 ) );
this.xA=(this.xAf|0);
this.yA=(this.yAf|0);
this.zA=(this.zAf|0);
this.dxB=(this.dxBf|0);
this.dyB=(this.dyBf|0);
this.dzB=(this.dzBf|0);
this.shadesA=g.getShades$H(this.colixA=colixA);
this.shadesB=g.getShades$H(this.colixB=colixB);
this.endcaps=($b$[0] = endcaps, $b$[0]);
p$1.calcArgbEndcap$Z$Z.apply(this, [true, true]);
var xyzf=this.xyzfRaster;
if (diameter > 0) p$1.generateBaseEllipsePrecisely$Z.apply(this, [false]);
if (endcaps == 2) p$1.renderFlatEndcap$Z$Z$IAA.apply(this, [true, true, xyzf]);
this.line3d.setLineBits$F$F(this.dxBf, this.dyBf);
g.setZMargin$I(5);
var p=g.pixel;
var width=g.width;
var zbuf=g.zbuf;
var xr=xyzf[0];
var yr=xyzf[1];
var zr=xyzf[2];
var fr=xyzf[3];
for (var i=this.rasterCount; --i >= 0; ) {
var fpz=fr[i] >> (8);
var fpzBack=fpz >> 1;
var x=xr[i];
var y=yr[i];
var z=zr[i];
if (this.endCapHidden && this.argbEndcap != 0 ) {
if (this.clipped) {
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap + x, this.yEndcap + y, this.zEndcap - z - 1 , width, zbuf, p);
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap - x, this.yEndcap - y, this.zEndcap + z - 1, width, zbuf, p);
} else {
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap + x, this.yEndcap + y, this.zEndcap - z - 1 , width, zbuf, p);
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap - x, this.yEndcap - y, this.zEndcap + z - 1, width, zbuf, p);
}}this.ptA0.set$F$F$F(this.xA + x, this.yA + y, this.zA - z);
this.ptB0.setT$javajs_util_T3(this.ptA0);
this.ptB0.x += this.dxB;
this.ptB0.y += this.dyB;
this.ptB0.z += this.dzB;
this.line3d.plotLineDeltaABitsFloat$IA$IA$I$javajs_util_P3$javajs_util_P3$I$Z(this.shadesA, this.shadesB, fpz, this.ptA0, this.ptB0, screen, this.clipped);
if (drawBackside) {
this.ptA0.set$F$F$F(this.xA - x, this.yA - y, this.zA + z);
this.ptB0.setT$javajs_util_T3(this.ptA0);
this.ptB0.x += this.dxB;
this.ptB0.y += this.dyB;
this.ptB0.z += this.dzB;
this.line3d.plotLineDeltaABitsFloat$IA$IA$I$javajs_util_P3$javajs_util_P3$I$Z(this.shadesA, this.shadesB, fpzBack, this.ptA0, this.ptB0, screen, this.clipped);
}}
g.setZMargin$I(0);
if (endcaps == 3) p$1.renderSphericalEndcaps.apply(this, []);
this.xAf += this.dxBf;
this.yAf += this.dyBf;
this.zAf += this.dzBf;
});

Clazz.newMeth(C$, 'renderBits$H$H$I$B$I$javajs_util_P3i$javajs_util_P3i', function (colixA, colixB, screen, endcaps, diameter, ptA, ptB) {
var g=this.g3d;
if (diameter == 0 || diameter == 1 ) {
this.line3d.plotLineBits$I$I$javajs_util_P3i$javajs_util_P3i$I$I$Z(g.getColorArgbOrGray$H(colixA), g.getColorArgbOrGray$H(colixB), ptA, ptB, 0, 0, false);
return;
}this.ptA0i.setT$javajs_util_T3i(ptA);
var r=(diameter/2|0) + 1;
var ixA=ptA.x;
var iyA=ptA.y;
var izA=ptA.z;
var ixB=ptB.x;
var iyB=ptB.y;
var izB=ptB.z;
var codeMinA=g.clipCode3$I$I$I(ixA - r, iyA - r, izA - r);
var codeMaxA=g.clipCode3$I$I$I(ixA + r, iyA + r, izA + r);
var codeMinB=g.clipCode3$I$I$I(ixB - r, iyB - r, izB - r);
var codeMaxB=g.clipCode3$I$I$I(ixB + r, iyB + r, izB + r);
var c=(codeMinA | codeMaxA | codeMinB | codeMaxB );
this.clipped=(c != 0);
if (c == -1 || (codeMinA & codeMaxB & codeMaxA & codeMinB ) != 0 ) return;
this.dxBf=ptB.x - ptA.x;
this.dyBf=ptB.y - ptA.y;
this.dzBf=ptB.z - ptA.z;
if (diameter > 0) {
this.diameter=diameter;
this.xAf=ptA.x;
this.yAf=ptA.y;
this.zAf=ptA.z;
}var drawBackside=(screen == 0 && (this.clipped || endcaps == 2  || endcaps == 0 ) );
this.xA=(this.xAf|0);
this.yA=(this.yAf|0);
this.zA=(this.zAf|0);
this.dxB=(this.dxBf|0);
this.dyB=(this.dyBf|0);
this.dzB=(this.dzBf|0);
this.shadesA=g.getShades$H(this.colixA=colixA);
this.shadesB=g.getShades$H(this.colixB=colixB);
this.endcaps=($b$[0] = endcaps, $b$[0]);
p$1.calcArgbEndcap$Z$Z.apply(this, [true, true]);
var xyzf=this.xyzfRaster;
if (diameter > 0) p$1.generateBaseEllipsePrecisely$Z.apply(this, [false]);
if (endcaps == 2) p$1.renderFlatEndcap$Z$Z$IAA.apply(this, [true, true, xyzf]);
this.line3d.setLineBits$F$F(this.dxBf, this.dyBf);
g.setZMargin$I(5);
var p=g.pixel;
var width=g.width;
var zbuf=g.zbuf;
var xr=xyzf[0];
var yr=xyzf[1];
var zr=xyzf[2];
var fr=xyzf[3];
for (var i=this.rasterCount; --i >= 0; ) {
var fpz=fr[i] >> (8);
var fpzBack=fpz >> 1;
var x=xr[i];
var y=yr[i];
var z=zr[i];
if (this.endCapHidden && this.argbEndcap != 0 ) {
if (this.clipped) {
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap + x, this.yEndcap + y, this.zEndcap - z - 1 , width, zbuf, p);
g.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap - x, this.yEndcap - y, this.zEndcap + z - 1, width, zbuf, p);
} else {
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap + x, this.yEndcap + y, this.zEndcap - z - 1 , width, zbuf, p);
g.plotPixelUnclipped$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, this.xEndcap - x, this.yEndcap - y, this.zEndcap + z - 1, width, zbuf, p);
}}this.ptA0i.set$I$I$I(this.xA + x, this.yA + y, this.zA - z);
this.ptB0i.setT$javajs_util_T3i(this.ptA0i);
this.ptB0i.x+=this.dxB;
this.ptB0i.y+=this.dyB;
this.ptB0i.z+=this.dzB;
this.line3d.plotLineDeltaABitsInt$IA$IA$I$javajs_util_P3i$javajs_util_P3i$I$Z(this.shadesA, this.shadesB, fpz, this.ptA0i, this.ptB0i, screen, this.clipped);
if (drawBackside) {
this.ptA0i.set$I$I$I(this.xA - x, this.yA - y, this.zA + z);
this.ptB0i.setT$javajs_util_T3i(this.ptA0i);
this.ptB0i.x+=this.dxB;
this.ptB0i.y+=this.dyB;
this.ptB0i.z+=this.dzB;
this.line3d.plotLineDeltaABitsInt$IA$IA$I$javajs_util_P3i$javajs_util_P3i$I$Z(this.shadesA, this.shadesB, fpzBack, this.ptA0i, this.ptB0i, screen, this.clipped);
}}
g.setZMargin$I(0);
if (endcaps == 3) p$1.renderSphericalEndcaps.apply(this, []);
this.xAf += this.dxBf;
this.yAf += this.dyBf;
this.zAf += this.dzBf;
});

Clazz.newMeth(C$, 'renderConeOld$H$B$I$F$F$F$F$F$F$Z$Z', function (colix, endcap, diameter, xa, ya, za, xtip, ytip, ztip, doFill, isBarb) {
this.dxBf=(xtip) - (this.xAf=xa);
this.dyBf=(ytip) - (this.yAf=ya);
this.dzBf=(ztip) - (this.zAf=za);
this.xA=(Math.floor(this.xAf)|0);
this.yA=(Math.floor(this.yAf)|0);
this.zA=(Math.floor(this.zAf)|0);
this.dxB=(Math.floor(this.dxBf)|0);
this.dyB=(Math.floor(this.dyBf)|0);
this.dzB=(Math.floor(this.dzBf)|0);
this.xTip=xtip;
this.yTip=ytip;
this.zTip=ztip;
this.shadesA=this.g3d.getShades$H(this.colixA=colix);
var shadeIndexTip=this.shader.getShadeIndex$F$F$F(this.dxB, this.dyB, -this.dzB);
var g3d=this.g3d;
var p=g3d.pixel;
var width=g3d.width;
var zbuf=g3d.zbuf;
g3d.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.shadesA[shadeIndexTip], (xtip|0), (ytip|0), (ztip|0), width, zbuf, p);
this.diameter=diameter;
if (diameter <= 1) {
if (diameter == 1) this.line3d.plotLineDeltaOld$I$I$I$I$I$I$I$I$Z(this.colixA, this.colixA, this.xA, this.yA, this.zA, this.dxB, this.dyB, this.dzB, this.clipped);
return;
}this.endcaps=($b$[0] = endcap, $b$[0]);
p$1.calcArgbEndcap$Z$Z.apply(this, [false, true]);
p$1.generateBaseEllipsePrecisely$Z.apply(this, [isBarb]);
if (!isBarb && this.endcaps == 2 ) p$1.renderFlatEndcap$Z$Z$IAA.apply(this, [false, true, this.xyzfRaster]);
g3d.setZMargin$I(5);
var xr=this.xyztRaster[0];
var yr=this.xyztRaster[1];
var zr=this.xyztRaster[2];
var fr=this.xyzfRaster[3];
var sA=this.shadesA;
var doOpen=(this.endCapHidden && this.argbEndcap != 0 );
for (var i=this.rasterCount; --i >= 0; ) {
var x=xr[i];
var y=yr[i];
var z=zr[i];
var fpz=fr[i] >> (8);
var xUp=this.xAf + x;
var yUp=this.yAf + y;
var zUp=this.zAf - z;
var xDn=this.xAf - x;
var yDn=this.yAf - y;
var zDn=this.zAf + z;
var argb=sA[0];
if (doOpen) {
g3d.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, (xUp|0), (yUp|0), (zUp|0), width, zbuf, p);
g3d.plotPixelClippedArgb$I$I$I$I$I$IA$org_jmol_g3d_Pixelator(this.argbEndcap, (xDn|0), (yDn|0), (zDn|0), width, zbuf, p);
}if (argb != 0) {
this.line3d.plotLineDeltaAOld$IA$IA$I$I$I$I$I$I$I$I$Z(sA, sA, 0, fpz, (xUp|0), (yUp|0), (zUp|0), (Math.ceil(this.xTip - xUp)|0), (Math.ceil(this.yTip - yUp)|0), (Math.ceil(this.zTip - zUp)|0), true);
if (doFill) {
this.line3d.plotLineDeltaAOld$IA$IA$I$I$I$I$I$I$I$I$Z(sA, sA, 0, fpz, (xUp|0), (yUp|0) + 1, (zUp|0), (Math.ceil(this.xTip - xUp)|0), (Math.ceil(this.yTip - yUp)|0) + 1, (Math.ceil(this.zTip - zUp)|0), true);
this.line3d.plotLineDeltaAOld$IA$IA$I$I$I$I$I$I$I$I$Z(sA, sA, 0, fpz, (xUp|0) + 1, (yUp|0), (zUp|0), (Math.ceil(this.xTip - xUp)|0) + 1, (Math.ceil(this.yTip - yUp)|0), (Math.ceil(this.zTip - zUp)|0), true);
}if (!isBarb && !(this.endcaps != 2 && this.dzB > 0 ) ) {
this.line3d.plotLineDeltaOld$I$I$I$I$I$I$I$I$Z(argb, argb, (xDn|0), (yDn|0), (zDn|0), (Math.ceil(this.xTip - xDn)|0), (Math.ceil(this.yTip - yDn)|0), (Math.ceil(this.zTip - zDn)|0), true);
}}}
g3d.setZMargin$I(0);
});

Clazz.newMeth(C$, 'generateBaseEllipsePrecisely$Z', function (isBarb) {
p$1.calcCosSin$F$F$F.apply(this, [this.dxBf, this.dyBf, this.dzBf]);
p$1.calcPoints$I$Z.apply(this, [isBarb ? 2 : 3, true]);
p$1.interpolatePrecisely$I$I$IAA$FAA.apply(this, [0, 1, this.xyzfRaster, this.xyztRaster]);
if (!isBarb) p$1.interpolatePrecisely$I$I$IAA$FAA.apply(this, [1, 2, this.xyzfRaster, this.xyztRaster]);
for (var i=3; --i >= 0; ) for (var j=this.rasterCount; --j >= 0; ) this.xyzfRaster[i][j]=(Math.floor(this.xyztRaster[i][j])|0);


}, p$1);

Clazz.newMeth(C$, 'calcPoints$I$Z', function (count, isPrecise) {
p$1.calcRotatedPoint$F$I$Z$IAA$FAA.apply(this, [0.0, 0, isPrecise, this.xyzfRaster, this.xyztRaster]);
p$1.calcRotatedPoint$F$I$Z$IAA$FAA.apply(this, [0.5, 1, isPrecise, this.xyzfRaster, this.xyztRaster]);
if ((this.rasterCount=count) == 3) p$1.calcRotatedPoint$F$I$Z$IAA$FAA.apply(this, [1.0, 2, isPrecise, this.xyzfRaster, this.xyztRaster]);
}, p$1);

Clazz.newMeth(C$, 'calcCosSin$F$F$F', function (dx, dy, dz) {
var mag2d2=dx * dx + dy * dy;
if (mag2d2 == 0 ) {
this.cosTheta=1;
this.cosPhi=1;
this.sinPhi=0;
} else {
var mag2d=Math.sqrt(mag2d2);
var mag3d=Math.sqrt(mag2d2 + dz * dz);
this.cosTheta=dz / mag3d;
this.cosPhi=dx / mag2d;
this.sinPhi=dy / mag2d;
}}, p$1);

Clazz.newMeth(C$, 'calcRotatedPoint$F$I$Z$IAA$FAA', function (t, i, isPrecision, xyzf, xyzt) {
xyzt[3][i]=t;
var tPI=t * 3.141592653589793;
var xT=Math.sin(tPI) * this.cosTheta;
var yT=Math.cos(tPI);
var xR=this.radius * (xT * this.cosPhi - yT * this.sinPhi);
var yR=this.radius * (xT * this.sinPhi + yT * this.cosPhi);
var z2=this.radius2 - (xR * xR + yR * yR);
var zR=(z2 > 0  ? Math.sqrt(z2) : 0);
if (isPrecision) {
xyzt[0][i]=xR;
xyzt[1][i]=yR;
xyzt[2][i]=zR;
} else if (this.tEvenDiameter) {
xyzf[0][i]=((xR - 0.5)|0);
xyzf[1][i]=((yR - 0.5)|0);
xyzf[2][i]=((zR + 0.5)|0);
} else {
xyzf[0][i]=((xR)|0);
xyzf[1][i]=((yR)|0);
xyzf[2][i]=((zR + 0.5)|0);
}xyzf[3][i]=this.shader.getShadeFp8$F$F$F(xR, yR, zR);
}, p$1);

Clazz.newMeth(C$, 'allocRaster$Z$IAA$FAA', function (isPrecision, xyzf, xyzt) {
if (this.rasterCount >= xyzf[0].length) while (this.rasterCount >= xyzf[0].length){
for (var i=4; --i >= 0; ) xyzf[i]=$I$(3).doubleLengthI$IA(xyzf[i]);

xyzt[3]=$I$(3).doubleLengthF$FA(xyzt[3]);
}
if (isPrecision) while (this.rasterCount >= xyzt[0].length){
for (var i=3; --i >= 0; ) xyzt[i]=$I$(3).doubleLengthF$FA(xyzt[i]);

}
return this.rasterCount++;
}, p$1);

Clazz.newMeth(C$, 'interpolate$I$I$IAA$FAA', function (iLower, iUpper, xyzf, xyzt) {
var x=xyzf[0];
var y=xyzf[1];
var dx=x[iUpper] - x[iLower];
if (dx < 0) dx=-dx;
var dy=y[iUpper] - y[iLower];
if (dy < 0) dy=-dy;
if ((dx + dy) <= 1) return;
var iMid=p$1.allocRaster$Z$IAA$FAA.apply(this, [false, xyzf, xyzt]);
x=xyzf[0];
y=xyzf[1];
var f=xyzf[3];
var tLower=xyzt[3][iLower];
var tUpper=xyzt[3][iUpper];
for (var j=4; --j >= 0; ) {
var tMid=(tLower + tUpper) / 2;
p$1.calcRotatedPoint$F$I$Z$IAA$FAA.apply(this, [tMid, iMid, false, xyzf, xyzt]);
if ((x[iMid] == x[iLower]) && (y[iMid] == y[iLower]) ) {
f[iLower]=(f[iLower] + f[iMid]) >>> 1;
tLower=tMid;
} else if ((x[iMid] == x[iUpper]) && (y[iMid] == y[iUpper]) ) {
f[iUpper]=(f[iUpper] + f[iMid]) >>> 1;
tUpper=tMid;
} else {
p$1.interpolate$I$I$IAA$FAA.apply(this, [iLower, iMid, xyzf, xyzt]);
p$1.interpolate$I$I$IAA$FAA.apply(this, [iMid, iUpper, xyzf, xyzt]);
return;
}}
x[iMid]=x[iLower];
y[iMid]=y[iUpper];
}, p$1);

Clazz.newMeth(C$, 'interpolatePrecisely$I$I$IAA$FAA', function (iLower, iUpper, xyzf, xyzt) {
var x=xyzt[0];
var y=xyzt[1];
var dx=(Math.floor(x[iUpper])|0) - (Math.floor(x[iLower])|0);
if (dx < 0) dx=-dx;
var dy=(Math.floor(y[iUpper])|0) - (Math.floor(y[iLower])|0);
if (dy < 0 ) dy=-dy;
if ((dx + dy) <= 1 ) return;
var t=xyzt[3];
var tLower=t[iLower];
var tUpper=t[iUpper];
var iMid=p$1.allocRaster$Z$IAA$FAA.apply(this, [true, xyzf, xyzt]);
x=xyzt[0];
y=xyzt[1];
t=xyzt[3];
var f=xyzf[3];
for (var j=4; --j >= 0; ) {
var tMid=(tLower + tUpper) / 2;
p$1.calcRotatedPoint$F$I$Z$IAA$FAA.apply(this, [tMid, iMid, true, xyzf, xyzt]);
if (((Math.floor(x[iMid])|0) == (Math.floor(x[iLower])|0)) && ((Math.floor(y[iMid])|0) == (Math.floor(y[iLower])|0)) ) {
f[iLower]=(f[iLower] + f[iMid]) >>> 1;
tLower=tMid;
} else if (((Math.floor(x[iMid])|0) == (Math.floor(x[iUpper])|0)) && ((Math.floor(y[iMid])|0) == (Math.floor(y[iUpper])|0)) ) {
f[iUpper]=(f[iUpper] + f[iMid]) >>> 1;
tUpper=tMid;
} else {
p$1.interpolatePrecisely$I$I$IAA$FAA.apply(this, [iLower, iMid, xyzf, xyzt]);
p$1.interpolatePrecisely$I$I$IAA$FAA.apply(this, [iMid, iUpper, xyzf, xyzt]);
return;
}}
x[iMid]=x[iLower];
y[iMid]=y[iUpper];
}, p$1);

Clazz.newMeth(C$, 'renderFlatEndcap$Z$Z$IAA', function (isCylinder, isPrecise, xyzf) {
var xT;
var yT;
var zT;
if (isPrecise) {
if (this.dzBf == 0  || !this.g3d.setC$H(this.colixEndcap) ) return;
var xTf=this.xAf;
var yTf=this.yAf;
var zTf=this.zAf;
if (isCylinder && this.dzBf < 0  ) {
xTf += this.dxBf;
yTf += this.dyBf;
zTf += this.dzBf;
}xT=(xTf|0);
yT=(yTf|0);
zT=(zTf|0);
} else {
if (this.dzB == 0 || !this.g3d.setC$H(this.colixEndcap) ) return;
xT=this.xA;
yT=this.yA;
zT=this.zA;
if (isCylinder && this.dzB < 0 ) {
xT+=this.dxB;
yT+=this.dyB;
zT+=this.dzB;
}}var yMin=xyzf[1][0];
var yMax=xyzf[1][0];
var zXMin=0;
var zXMax=0;
var xr=xyzf[0];
var yr=xyzf[1];
var zr=xyzf[2];
for (var i=this.rasterCount; --i > 0; ) {
var y=yr[i];
if (y < yMin) yMin=y;
 else if (y > yMax) yMax=y;
 else {
y=-y;
if (y < yMin) yMin=y;
 else if (y > yMax) yMax=y;
}}
for (var y=yMin; y <= yMax; ++y) {
var xMin=2147483647;
var xMax=-2147483648;
for (var i=this.rasterCount; --i >= 0; ) {
if (yr[i] == y) {
var x=xr[i];
if (x < xMin) {
xMin=x;
zXMin=zr[i];
}if (x > xMax) {
xMax=x;
zXMax=zr[i];
}}if (yr[i] == -y) {
var x=-xr[i];
if (x < xMin) {
xMin=x;
zXMin=-zr[i];
}if (x > xMax) {
xMax=x;
zXMax=-zr[i];
}}}
var count=xMax - xMin + 1;
this.g3d.setColorNoisy$I(this.endcapShadeIndex);
this.g3d.plotPixelsClippedRaster$I$I$I$I$I$org_jmol_util_Rgb16$org_jmol_util_Rgb16(count, xT + xMin, yT + y, zT - zXMin - 1 , zT - zXMax - 1 , null, null);
}
}, p$1);

Clazz.newMeth(C$, 'renderSphericalEndcaps', function () {
if (this.colixA != 0 && this.g3d.setC$H(this.colixA) ) this.g3d.fillSphereXYZ$I$I$I$I(this.diameter, this.xA, this.yA, this.zA + 1);
if (this.colixB != 0 && this.g3d.setC$H(this.colixB) ) this.g3d.fillSphereXYZ$I$I$I$I(this.diameter, this.xA + this.dxB, this.yA + this.dyB, this.zA + this.dzB + 1 );
}, p$1);

Clazz.newMeth(C$, 'calcArgbEndcap$Z$Z', function (tCylinder, isFloat) {
this.tEvenDiameter=((this.diameter & 1) == 0);
this.radius=this.diameter / 2.0;
this.radius2=this.radius * this.radius;
this.endCapHidden=false;
var dzf=(isFloat ? this.dzBf : this.dzB);
if (this.endcaps == 3 || dzf == 0  ) return;
this.xEndcap=this.xA;
this.yEndcap=this.yA;
this.zEndcap=this.zA;
var shadesEndcap;
var dxf=(isFloat ? this.dxBf : this.dxB);
var dyf=(isFloat ? this.dyBf : this.dyB);
if (dzf >= 0  || !tCylinder ) {
this.endcapShadeIndex=this.shader.getShadeIndex$F$F$F(-dxf, -dyf, dzf);
this.colixEndcap=this.colixA;
shadesEndcap=this.shadesA;
} else {
this.endcapShadeIndex=this.shader.getShadeIndex$F$F$F(dxf, dyf, -dzf);
this.colixEndcap=this.colixB;
shadesEndcap=this.shadesB;
this.xEndcap+=this.dxB;
this.yEndcap+=this.dyB;
this.zEndcap+=this.dzB;
}if (this.endcapShadeIndex > 56) this.endcapShadeIndex=56;
this.argbEndcap=shadesEndcap[this.endcapShadeIndex];
this.endCapHidden=(this.endcaps == 1);
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
