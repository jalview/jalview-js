(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.AU','org.jmol.util.C','javajs.util.CU']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Shader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lightSource=Clazz.new_($I$(1,1));
this.specularOn=true;
this.usePhongExponent=false;
this.ambientPercent=45;
this.diffusePercent=84;
this.specularExponent=6;
this.specularPercent=22;
this.specularPower=40;
this.phongExponent=64;
this.ambientFraction=this.ambientPercent / 100.0;
this.diffuseFactor=this.diffusePercent / 100.0;
this.intenseFraction=this.specularPower / 100.0;
this.specularFactor=this.specularPercent / 100.0;
this.ashades=$I$(2).newInt2$I(128);
this.celPower=10;
this.sphereShadeIndexes=Clazz.array(Byte.TYPE, [65536]);
this.seed=305419897;
this.sphereShapeCache=$I$(2).newInt2$I(128);
},1);

C$.$fields$=[['Z',['specularOn','usePhongExponent','celOn','useLight'],'F',['xLight','yLight','zLight','ambientFraction','diffuseFactor','intenseFraction','specularFactor','celZ'],'I',['ambientPercent','diffusePercent','specularExponent','specularPercent','specularPower','phongExponent','celPower','celRGB','seed','nOut','nIn'],'O',['lightSource','javajs.util.V3','ashades','int[][]','+ashadesGreyscale','sphereShadeIndexes','byte[]','sphereShapeCache','int[][]','ellipsoidShades','byte[][][]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
p$1.setLightSource$F$F$F.apply(this, [-1.0, -1.0, 2.5]);
}, 1);

Clazz.newMeth(C$, 'setLightSource$F$F$F', function (x, y, z) {
this.lightSource.set$F$F$F(x, y, z);
this.lightSource.normalize$();
this.xLight=this.lightSource.x;
this.yLight=this.lightSource.y;
this.zLight=this.lightSource.z;
}, p$1);

Clazz.newMeth(C$, 'setCel$Z$I$I', function (celShading, celShadingPower, argb) {
celShading=celShading && celShadingPower != 0 ;
argb=(function(a,f){return f.apply(null,a)})([$I$(3).getBgContrast$I(argb)],$I$(3).getArgb$H);
argb=(argb == -16777216 ? -16514044 : argb == -1 ? -2 : argb + 1);
if (this.celOn == celShading  && this.celRGB == argb  && this.celPower == celShadingPower ) return;
this.celOn=celShading;
this.celPower=celShadingPower;
this.useLight=(!this.celOn || celShadingPower > 0 );
this.celZ=1 - Math.pow(2, -Math.abs(celShadingPower) / 10.0);
this.celRGB=argb;
this.flushCaches$();
});

Clazz.newMeth(C$, 'flushCaches$', function () {
p$1.checkShades$I.apply(this, [$I$(3).colixMax]);
for (var i=$I$(3).colixMax; --i >= 0; ) this.ashades[i]=null;

p$1.calcSphereShading.apply(this, []);
for (var i=128; --i >= 0; ) this.sphereShapeCache[i]=null;

this.ellipsoidShades=null;
});

Clazz.newMeth(C$, 'setLastColix$I$Z', function (argb, asGrey) {
$I$(3).allocateColix$I$Z(argb, true);
p$1.checkShades$I.apply(this, [2047]);
if (asGrey) $I$(3).setLastGrey$I(argb);
this.ashades[2047]=p$1.getShades2$I$Z.apply(this, [argb, false]);
});

Clazz.newMeth(C$, 'getShades$H', function (colix) {
p$1.checkShades$I.apply(this, [$I$(3).colixMax]);
colix&=-30721;
var shades=this.ashades[colix];
if (shades == null ) shades=this.ashades[colix]=p$1.getShades2$I$Z.apply(this, [$I$(3).argbs[colix], false]);
return shades;
});

Clazz.newMeth(C$, 'getShadesG$H', function (colix) {
p$1.checkShades$I.apply(this, [$I$(3).colixMax]);
colix&=-30721;
if (this.ashadesGreyscale == null ) this.ashadesGreyscale=$I$(2).newInt2$I(this.ashades.length);
var shadesGreyscale=this.ashadesGreyscale[colix];
if (shadesGreyscale == null ) shadesGreyscale=this.ashadesGreyscale[colix]=p$1.getShades2$I$Z.apply(this, [$I$(3).argbs[colix], true]);
return shadesGreyscale;
});

Clazz.newMeth(C$, 'checkShades$I', function (n) {
if (this.ashades != null  && this.ashades.length >= n ) return;
if (n == 2047) n++;
this.ashades=$I$(2).arrayCopyII$IAA$I(this.ashades, n);
if (this.ashadesGreyscale != null ) this.ashadesGreyscale=$I$(2).arrayCopyII$IAA$I(this.ashadesGreyscale, n);
}, p$1);

Clazz.newMeth(C$, 'getShades2$I$Z', function (rgb, greyScale) {
var shades=Clazz.array(Integer.TYPE, [64]);
if (rgb == 0) return shades;
var red0=((rgb >> 16) & 255);
var grn0=((rgb >> 8) & 255);
var blu0=(rgb & 255);
var red=0;
var grn=0;
var blu=0;
var f=this.ambientFraction;
while (true){
red=red0 * f + 0.5;
grn=grn0 * f + 0.5;
blu=blu0 * f + 0.5;
if (f > 0  && red < 4   && grn < 4   && blu < 4  ) {
red0++;
grn0++;
blu0++;
if (f < 0.1 ) f += 0.1;
rgb=(function(a,f){return f.apply(null,a)})([(Math.floor(red0)|0), (Math.floor(grn0)|0), (Math.floor(blu0)|0)],$I$(4).rgb$I$I$I);
continue;
}break;
}
var i=0;
f=(1 - f) / 52;
var redStep=red0 * f;
var grnStep=grn0 * f;
var bluStep=blu0 * f;
if (this.celOn) {
var max=32;
var _rgb=(function(a,f){return f.apply(null,a)})([(Math.floor(red)|0), (Math.floor(grn)|0), (Math.floor(blu)|0)],$I$(4).rgb$I$I$I);
if (this.celPower >= 0) for (; i < max; ++i) shades[i]=_rgb;

red += redStep * max;
grn += grnStep * max;
blu += bluStep * max;
_rgb=(function(a,f){return f.apply(null,a)})([(Math.floor(red)|0), (Math.floor(grn)|0), (Math.floor(blu)|0)],$I$(4).rgb$I$I$I);
for (; i < 64; i++) shades[i]=_rgb;

shades[0]=shades[1]=this.celRGB;
} else {
for (; i < 52; ++i) {
shades[i]=(function(a,f){return f.apply(null,a)})([(Math.floor(red)|0), (Math.floor(grn)|0), (Math.floor(blu)|0)],$I$(4).rgb$I$I$I);
red += redStep;
grn += grnStep;
blu += bluStep;
}
shades[i++]=rgb;
f=this.intenseFraction / (64 - i);
redStep=(255.5 - red) * f;
grnStep=(255.5 - grn) * f;
bluStep=(255.5 - blu) * f;
for (; i < 64; i++) {
red += redStep;
grn += grnStep;
blu += bluStep;
shades[i]=(function(a,f){return f.apply(null,a)})([(Math.floor(red)|0), (Math.floor(grn)|0), (Math.floor(blu)|0)],$I$(4).rgb$I$I$I);
}
}if (greyScale) for (; --i >= 0; ) shades[i]=$I$(4).toFFGGGfromRGB$I(shades[i]);

return shades;
}, p$1);

Clazz.newMeth(C$, 'getShadeIndex$F$F$F', function (x, y, z) {
var magnitude=Math.sqrt(x * x + y * y + z * z);
return Math.round(p$1.getShadeF$F$F$F.apply(this, [(x / magnitude), (y / magnitude), (z / magnitude)]) * 63);
});

Clazz.newMeth(C$, 'getShadeB$F$F$F', function (x, y, z) {
return ($b$[0] = Math.round(p$1.getShadeF$F$F$F.apply(this, [x, y, z]) * 63), $b$[0]);
});

Clazz.newMeth(C$, 'getShadeFp8$F$F$F', function (x, y, z) {
var magnitude=Math.sqrt(x * x + y * y + z * z);
return (Math.floor(p$1.getShadeF$F$F$F.apply(this, [(x / magnitude), (y / magnitude), (z / magnitude)]) * 63 * (256) )|0);
});

Clazz.newMeth(C$, 'getShadeF$F$F$F', function (x, y, z) {
var NdotL=(this.useLight ? x * this.xLight + y * this.yLight + z * this.zLight : z);
if (NdotL <= 0 ) return 0;
var intensity=NdotL * this.diffuseFactor;
if (this.specularOn) {
var k_specular=2 * NdotL * z  - this.zLight;
if (k_specular > 0 ) {
if (this.usePhongExponent) {
k_specular=Math.pow(k_specular, this.phongExponent);
} else {
for (var n=this.specularExponent; --n >= 0 && k_specular > 1.0E-4  ; ) k_specular *= k_specular;

}intensity += k_specular * this.specularFactor;
}}return (this.celOn && z < this.celZ   ? 0.0 : intensity > 1  ? 1.0 : intensity);
}, p$1);

Clazz.newMeth(C$, 'getShadeN$F$F$F$F', function (x, y, z, r) {
var fp8ShadeIndex=(Math.floor(p$1.getShadeF$F$F$F.apply(this, [x / r, y / r, z / r]) * 63 * (256) )|0);
var shadeIndex=fp8ShadeIndex >> 8;
if (!this.useLight) return ($b$[0] = shadeIndex, $b$[0]);
if ((fp8ShadeIndex & 255) > this.nextRandom8Bit$()) ++shadeIndex;
var random16bit=this.seed & 65535;
if (random16bit < 21845 && shadeIndex > 0 ) --shadeIndex;
 else if (random16bit > 43690 && shadeIndex < 63 ) ++shadeIndex;
return ($b$[0] = shadeIndex, $b$[0]);
});

Clazz.newMeth(C$, 'calcSphereShading', function () {
var xF=-127.5;
var r2=16900;
for (var i=0; i < 256; ++xF, ++i) {
var yF=-127.5;
var xF2=xF * xF;
for (var j=0; j < 256; ++yF, ++j) {
var shadeIndex=($b$[0] = 0, $b$[0]);
var z2=r2 - xF2 - yF * yF ;
if (z2 > 0 ) {
var z=Math.sqrt(z2);
shadeIndex=this.getShadeN$F$F$F$F(xF, yF, z, 130);
}this.sphereShadeIndexes[(j << 8) + i]=shadeIndex;
}
}
}, p$1);

Clazz.newMeth(C$, 'nextRandom8Bit$', function () {
var t=this.seed;
this.seed=t=((t << 16) + (t << 1) + t ) & 2147483647;
return t >> 23;
});

Clazz.newMeth(C$, 'getEllipsoidShade$F$F$F$I$javajs_util_M4', function (x, y, z, radius, mDeriv) {
var tx=mDeriv.m00 * x + mDeriv.m01 * y + mDeriv.m02 * z + mDeriv.m03;
var ty=mDeriv.m10 * x + mDeriv.m11 * y + mDeriv.m12 * z + mDeriv.m13;
var tz=mDeriv.m20 * x + mDeriv.m21 * y + mDeriv.m22 * z + mDeriv.m23;
var f=Math.min(radius / 2.0, 45) / Math.sqrt(tx * tx + ty * ty + tz * tz);
var i=((-tx * f)|0);
var j=((-ty * f)|0);
var k=((tz * f)|0);
var outside=i < -20 || i >= 20  || j < -20  || j >= 20  || k < 0  || k >= 40 ;
if (outside) {
while (i % 2 == 0 && j % 2 == 0  && k % 2 == 0  && i + j + k  > 0 ){
i>>=1;
j>>=1;
k>>=1;
}
outside=i < -20 || i >= 20  || j < -20  || j >= 20  || k < 0  || k >= 40 ;
}if (outside) this.nOut++;
 else this.nIn++;
return (outside ? this.getShadeIndex$F$F$F(i, j, k) : this.ellipsoidShades[i + 20][j + 20][k]);
});

Clazz.newMeth(C$, 'createEllipsoidShades$', function () {
this.ellipsoidShades=Clazz.array(Byte.TYPE, [40, 40, 40]);
for (var ii=0; ii < 40; ii++) for (var jj=0; jj < 40; jj++) for (var kk=0; kk < 40; kk++) this.ellipsoidShades[ii][jj][kk]=(this.getShadeIndex$F$F$F(ii - 20, jj - 20, kk)|0);



});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
