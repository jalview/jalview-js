(function(){var P$=Clazz.newPackage("org.jmol.g3d"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.BS']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LineRenderer", null, 'org.jmol.g3d.PrecisionRenderer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lineCache=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['lineTypeX'],'F',['slope'],'I',['nBits','x1t','y1t','z1t','x2t','y2t','z2t'],'O',['g3d','org.jmol.g3d.Graphics3D','shader','org.jmol.util.Shader','lineBits','javajs.util.BS','lineCache','java.util.Map','slopeKey','Float']]]

Clazz.newMeth(C$, 'c$$org_jmol_g3d_Graphics3D', function (g3d) {
Clazz.super_(C$, this);
this.g3d=g3d;
this.shader=g3d.shader;
}, 1);

Clazz.newMeth(C$, 'setLineBits$F$F', function (dx, dy) {
this.slope=(dx != 0  ? dy / dx : dy >= 0  ? 3.4028235E38 : -3.4028235E38);
this.lineTypeX=(this.slope <= 1  && this.slope >= -1  );
this.nBits=(this.lineTypeX ? this.g3d.width : this.g3d.height);
this.slopeKey=Float.valueOf$F(this.slope);
if (this.lineCache.containsKey$O(this.slopeKey)) {
this.lineBits=this.lineCache.get$O(this.slopeKey);
return;
}this.lineBits=$I$(2).newN$I(this.nBits);
dy=Math.abs(dy);
dx=Math.abs(dx);
if (dy > dx ) {
var t=dx;
dx=dy;
dy=t;
}var twoDError=0;
var twoDx=dx + dx;
var twoDy=dy + dy;
for (var i=0; i < this.nBits; i++) {
twoDError=(twoDError+(twoDy)|0);
if (twoDError > dx ) {
this.lineBits.set$I(i);
twoDError=(twoDError-(twoDx)|0);
}}
this.lineCache.put$O$O(this.slopeKey, this.lineBits);
});

Clazz.newMeth(C$, 'clearLineCache$', function () {
this.lineCache.clear$();
});

Clazz.newMeth(C$, 'plotLineOld$I$I$I$I$I$I$I$I', function (argbA, argbB, xA, yA, zA, xB, yB, zB) {
this.x1t=xA;
this.x2t=xB;
this.y1t=yA;
this.y2t=yB;
this.z1t=zA;
this.z2t=zB;
var clipped=true;
switch (p$1.getTrimmedLineImpl.apply(this, [])) {
case 0:
clipped=false;
break;
case 2:
return;
}
p$1.plotLineClippedOld$I$I$I$I$I$I$I$I$Z$I$I.apply(this, [argbA, argbB, xA, yA, zA, xB - xA, yB - yA, zB - zA, clipped, 0, 0]);
});

Clazz.newMeth(C$, 'plotLineDeltaOld$I$I$I$I$I$I$I$I$Z', function (argbA, argbB, xA, yA, zA, dxBA, dyBA, dzBA, clipped) {
this.x1t=xA;
this.x2t=xA + dxBA;
this.y1t=yA;
this.y2t=yA + dyBA;
this.z1t=zA;
this.z2t=zA + dzBA;
if (clipped) switch (p$1.getTrimmedLineImpl.apply(this, [])) {
case 2:
return;
case 0:
clipped=false;
break;
}
p$1.plotLineClippedOld$I$I$I$I$I$I$I$I$Z$I$I.apply(this, [argbA, argbB, xA, yA, zA, dxBA, dyBA, dzBA, clipped, 0, 0]);
});

Clazz.newMeth(C$, 'plotLineDeltaAOld$IA$IA$I$I$I$I$I$I$I$I$Z', function (shades1, shades2, screenMask, shadeIndex, x, y, z, dx, dy, dz, clipped) {
this.x1t=x;
this.x2t=x + dx;
this.y1t=y;
this.y2t=y + dy;
this.z1t=z;
this.z2t=z + dz;
if (clipped) switch (p$1.getTrimmedLineImpl.apply(this, [])) {
case 2:
return;
case 0:
clipped=false;
}
var zbuf=this.g3d.zbuf;
var width=this.g3d.width;
var runIndex=0;
var rise=2147483647;
var run=1;
var offset=y * width + x;
var offsetMax=this.g3d.bufferSize;
var shadeIndexUp=(shadeIndex < 63 ? shadeIndex + 1 : shadeIndex);
var shadeIndexDn=(shadeIndex > 0 ? shadeIndex - 1 : shadeIndex);
var argb1=shades1[shadeIndex];
var argb1Up=shades1[shadeIndexUp];
var argb1Dn=shades1[shadeIndexDn];
var argb2=shades2[shadeIndex];
var argb2Up=shades2[shadeIndexUp];
var argb2Dn=shades2[shadeIndexDn];
var argb=argb1;
var p=this.g3d.pixel;
if (screenMask != 0) {
p=this.g3d.setScreened$Z((screenMask & 1) == 1);
this.g3d.currentShadeIndex=0;
}if (argb != 0 && !clipped  && offset >= 0  && offset < offsetMax  && z < zbuf[offset] ) p.addPixel$I$I$I(offset, z, argb);
if (dx == 0 && dy == 0 ) return;
var xIncrement=1;
var yOffsetIncrement=width;
var x2=x + dx;
var y2=y + dy;
if (dx < 0) {
dx=-dx;
xIncrement=-1;
}if (dy < 0) {
dy=-dy;
yOffsetIncrement=-width;
}var twoDx=dx + dx;
var twoDy=dy + dy;
var zCurrentScaled=z << 10;
var argbUp=argb1Up;
var argbDn=argb1Dn;
if (dy <= dx) {
var roundingFactor=dx - 1;
if (dz < 0) roundingFactor=-roundingFactor;
var zIncrementScaled=(((dz << 10) + roundingFactor)/dx|0);
var twoDxAccumulatedYError=0;
var n1=Math.abs(x2 - this.x2t) - 1;
var n2=Math.abs(x2 - this.x1t) - 1;
for (var n=dx - 1, nMid=(n/2|0); --n >= n1; ) {
if (n == nMid) {
argb=argb2;
if (argb == 0) return;
argbUp=argb2Up;
argbDn=argb2Dn;
if (screenMask % 3 != 0) {
p=this.g3d.setScreened$Z((screenMask & 2) == 2);
this.g3d.currentShadeIndex=0;
}}offset+=xIncrement;
zCurrentScaled+=zIncrementScaled;
twoDxAccumulatedYError+=twoDy;
if (twoDxAccumulatedYError > dx) {
offset+=yOffsetIncrement;
twoDxAccumulatedYError-=twoDx;
}if (argb != 0 && n < n2  && offset >= 0  && offset < offsetMax  && runIndex < rise ) {
var zCurrent=zCurrentScaled >> 10;
if (zCurrent < zbuf[offset]) {
var rand8=this.shader.nextRandom8Bit$();
p.addPixel$I$I$I(offset, zCurrent, rand8 < 85 ? argbDn : (rand8 > 170 ? argbUp : argb));
}}runIndex=(runIndex + 1) % run;
}
} else {
var roundingFactor=dy - 1;
if (dz < 0) roundingFactor=-roundingFactor;
var zIncrementScaled=(((dz << 10) + roundingFactor)/dy|0);
var twoDyAccumulatedXError=0;
var n1=Math.abs(y2 - this.y2t) - 1;
var n2=Math.abs(y2 - this.y1t) - 1;
for (var n=dy - 1, nMid=(n/2|0); --n >= n1; ) {
if (n == nMid) {
argb=argb2;
if (argb == 0) return;
argbUp=argb2Up;
argbDn=argb2Dn;
if (screenMask % 3 != 0) {
p=this.g3d.setScreened$Z((screenMask & 2) == 2);
this.g3d.currentShadeIndex=0;
}}offset+=yOffsetIncrement;
zCurrentScaled+=zIncrementScaled;
twoDyAccumulatedXError+=twoDx;
if (twoDyAccumulatedXError > dy) {
offset+=xIncrement;
twoDyAccumulatedXError-=twoDy;
}if (argb != 0 && n < n2  && offset >= 0  && offset < offsetMax  && runIndex < rise ) {
var zCurrent=zCurrentScaled >> 10;
if (zCurrent < zbuf[offset]) {
var rand8=this.g3d.shader.nextRandom8Bit$();
p.addPixel$I$I$I(offset, zCurrent, rand8 < 85 ? argbDn : (rand8 > 170 ? argbUp : argb));
}}runIndex=(runIndex + 1) % run;
}
}});

Clazz.newMeth(C$, 'plotLineDeltaABitsFloat$IA$IA$I$javajs_util_P3$javajs_util_P3$I$Z', function (shades1, shades2, shadeIndex, ptA, ptB, screenMask, clipped) {
var x=Math.round(ptA.x);
var y=Math.round(ptA.y);
var z=Math.round(ptA.z);
var bx=Math.round(ptB.x);
var by=Math.round(ptB.y);
var bz=Math.round(ptB.z);
var dx=bx - x;
var dy=by - y;
this.x1t=x;
this.x2t=bx;
this.y1t=y;
this.y2t=by;
this.z1t=z;
this.z2t=bz;
if (clipped && p$1.getTrimmedLineImpl.apply(this, []) == 2 ) return;
var zbuf=this.g3d.zbuf;
var width=this.g3d.width;
var runIndex=0;
var rise=2147483647;
var run=1;
var shadeIndexUp=(shadeIndex < 63 ? shadeIndex + 1 : shadeIndex);
var shadeIndexDn=(shadeIndex > 0 ? shadeIndex - 1 : shadeIndex);
var argb1=shades1[shadeIndex];
var argb1Up=shades1[shadeIndexUp];
var argb1Dn=shades1[shadeIndexDn];
var argb2=shades2[shadeIndex];
var argb2Up=shades2[shadeIndexUp];
var argb2Dn=shades2[shadeIndexDn];
var offset=y * width + x;
var offsetMax=this.g3d.bufferSize;
var i0;
var iMid;
var i1;
var i2;
var iIncrement;
var xIncrement;
var yOffsetIncrement;
if (this.lineTypeX) {
i0=x;
i1=this.x1t;
i2=this.x2t;
iMid=x + (dx/2|0);
iIncrement=(dx >= 0 ? 1 : -1);
xIncrement=iIncrement;
yOffsetIncrement=(dy >= 0 ? width : -width);
this.setRastABFloat$F$F$F$F(ptA.x, ptA.z, ptB.x, ptB.z);
} else {
i0=y;
i1=this.y1t;
i2=this.y2t;
iMid=y + (dy/2|0);
iIncrement=(dy >= 0 ? 1 : -1);
xIncrement=(dy >= 0 ? width : -width);
yOffsetIncrement=(dx >= 0 ? 1 : -1);
this.setRastABFloat$F$F$F$F(ptA.y, ptA.z, ptB.y, ptB.z);
}var zCurrent=z;
var argb=argb1;
var argbUp=argb1Up;
var argbDn=argb1Dn;
var isInWindow=false;
var p=this.g3d.pixel;
if (screenMask != 0) {
p=this.g3d.setScreened$Z((screenMask & 1) == 1);
this.g3d.currentShadeIndex=0;
}for (var i=i0, iBits=i0; ; i+=iIncrement, iBits+=iIncrement) {
if (i == i1) isInWindow=true;
if (i == iMid) {
argb=argb2;
if (argb == 0) return;
argbUp=argb2Up;
argbDn=argb2Dn;
if (screenMask % 3 != 0) {
p=this.g3d.setScreened$Z((screenMask & 2) == 2);
this.g3d.currentShadeIndex=0;
}}if (argb != 0 && isInWindow  && offset >= 0  && offset < offsetMax  && runIndex < rise ) {
zCurrent=this.getZCurrent$F$F$I(this.a, this.b, i);
if (zCurrent < zbuf[offset] ) {
var rand8=this.shader.nextRandom8Bit$();
p.addPixel$I$I$I(offset, (zCurrent|0), rand8 < 85 ? argbDn : (rand8 > 170 ? argbUp : argb));
}}if (i == i2) break;
runIndex=(runIndex + 1) % run;
offset+=xIncrement;
while (iBits < 0)iBits+=this.nBits;

if (this.lineBits.get$I(iBits % this.nBits)) {
offset+=yOffsetIncrement;
}}
});

Clazz.newMeth(C$, 'plotLineDeltaABitsInt$IA$IA$I$javajs_util_P3i$javajs_util_P3i$I$Z', function (shades1, shades2, shadeIndex, ptA, ptB, screenMask, clipped) {
var x=ptA.x;
var y=ptA.y;
var z=ptA.z;
var bx=ptB.x;
var by=ptB.y;
var bz=ptB.z;
var dx=bx - x;
var dy=by - y;
this.x1t=x;
this.x2t=bx;
this.y1t=y;
this.y2t=by;
this.z1t=z;
this.z2t=bz;
if (clipped && p$1.getTrimmedLineImpl.apply(this, []) == 2 ) return;
var zbuf=this.g3d.zbuf;
var width=this.g3d.width;
var runIndex=0;
var rise=2147483647;
var run=1;
var shadeIndexUp=(shadeIndex < 63 ? shadeIndex + 1 : shadeIndex);
var shadeIndexDn=(shadeIndex > 0 ? shadeIndex - 1 : shadeIndex);
var argb1=shades1[shadeIndex];
var argb1Up=shades1[shadeIndexUp];
var argb1Dn=shades1[shadeIndexDn];
var argb2=shades2[shadeIndex];
var argb2Up=shades2[shadeIndexUp];
var argb2Dn=shades2[shadeIndexDn];
var offset=y * width + x;
var offsetMax=this.g3d.bufferSize;
var i0;
var iMid;
var i1;
var i2;
var iIncrement;
var xIncrement;
var yOffsetIncrement;
if (this.lineTypeX) {
i0=x;
i1=this.x1t;
i2=this.x2t;
iMid=x + (dx/2|0);
iIncrement=(dx >= 0 ? 1 : -1);
xIncrement=iIncrement;
yOffsetIncrement=(dy >= 0 ? width : -width);
this.setRastAB$I$I$I$I(ptA.x, ptA.z, ptB.x, ptB.z);
} else {
i0=y;
i1=this.y1t;
i2=this.y2t;
iMid=y + (dy/2|0);
iIncrement=(dy >= 0 ? 1 : -1);
xIncrement=(dy >= 0 ? width : -width);
yOffsetIncrement=(dx >= 0 ? 1 : -1);
this.setRastAB$I$I$I$I(ptA.y, ptA.z, ptB.y, ptB.z);
}var zCurrent=z;
var argb=argb1;
var argbUp=argb1Up;
var argbDn=argb1Dn;
var isInWindow=false;
var p=this.g3d.pixel;
if (screenMask != 0) {
p=this.g3d.setScreened$Z((screenMask & 1) == 1);
this.g3d.currentShadeIndex=0;
}for (var i=i0, iBits=i0; ; i+=iIncrement, iBits+=iIncrement) {
if (i == i1) isInWindow=true;
if (i == iMid) {
argb=argb2;
if (argb == 0) return;
argbUp=argb2Up;
argbDn=argb2Dn;
if (screenMask % 3 != 0) {
p=this.g3d.setScreened$Z((screenMask & 2) == 2);
this.g3d.currentShadeIndex=0;
}}if (argb != 0 && isInWindow  && offset >= 0  && offset < offsetMax  && runIndex < rise ) {
zCurrent=this.getZCurrent$F$F$I(this.a, this.b, i);
if (zCurrent < zbuf[offset] ) {
var rand8=this.shader.nextRandom8Bit$();
p.addPixel$I$I$I(offset, (zCurrent|0), rand8 < 85 ? argbDn : (rand8 > 170 ? argbUp : argb));
}}if (i == i2) break;
runIndex=(runIndex + 1) % run;
offset+=xIncrement;
while (iBits < 0)iBits+=this.nBits;

if (this.lineBits.get$I(iBits % this.nBits)) {
offset+=yOffsetIncrement;
}}
});

Clazz.newMeth(C$, 'plotLineBits$I$I$javajs_util_P3i$javajs_util_P3i$I$I$Z', function (argbA, argbB, ptA, ptB, run, rise, andClip) {
if (ptA.z <= 1 || ptB.z <= 1 ) return;
var clipped=true;
this.x1t=ptA.x;
this.y1t=ptA.y;
this.z1t=ptA.z;
this.x2t=ptB.x;
this.y2t=ptB.y;
this.z2t=ptB.z;
switch (p$1.getTrimmedLineImpl.apply(this, [])) {
case 2:
return;
case 0:
clipped=false;
break;
default:
if (andClip) {
ptA.set$I$I$I(this.x1t, this.y1t, this.z1t);
ptB.set$I$I$I(this.x2t, this.y2t, this.z2t);
}}
var zbuf=this.g3d.zbuf;
var width=this.g3d.width;
var runIndex=0;
if (run == 0) {
rise=2147483647;
run=1;
}var x=ptA.x;
var y=ptA.y;
var z=ptA.z;
var dx=ptB.x - x;
var x2=x + dx;
var dy=ptB.y - y;
var y2=y + dy;
var offset=y * width + x;
var offsetMax=this.g3d.bufferSize;
var argb=argbA;
var p=this.g3d.pixel;
if (argb != 0 && !clipped  && offset >= 0  && offset < offsetMax  && z < zbuf[offset] ) p.addPixel$I$I$I(offset, z, argb);
if (dx == 0 && dy == 0 ) return;
var xIncrement=1;
var yIncrement=1;
var yOffsetIncrement=width;
if (dx < 0) {
dx=-dx;
xIncrement=-1;
}if (dy < 0) {
dy=-dy;
yOffsetIncrement=-width;
yIncrement=-1;
}var twoDx=dx + dx;
var twoDy=dy + dy;
if (dy <= dx) {
this.setRastAB$I$I$I$I(ptA.x, ptA.z, ptB.x, ptB.z);
var twoDxAccumulatedYError=0;
var n1=Math.abs(x2 - this.x2t) - 1;
var n2=Math.abs(x2 - this.x1t) - 1;
for (var n=dx - 1, nMid=(n/2|0); --n >= n1; ) {
if (n == nMid) {
argb=argbB;
if (argb == 0) return;
}offset+=xIncrement;
x+=xIncrement;
twoDxAccumulatedYError+=twoDy;
if (twoDxAccumulatedYError > dx) {
offset+=yOffsetIncrement;
twoDxAccumulatedYError-=twoDx;
}if (argb != 0 && n < n2  && offset >= 0  && offset < offsetMax  && runIndex < rise ) {
var zCurrent=this.getZCurrent$F$F$I(this.a, this.b, x);
if (zCurrent < zbuf[offset]) p.addPixel$I$I$I(offset, zCurrent, argb);
}runIndex=(runIndex + 1) % run;
}
} else {
this.setRastAB$I$I$I$I(ptA.y, ptA.z, ptB.y, ptB.z);
var twoDyAccumulatedXError=0;
var n1=Math.abs(y2 - this.y2t) - 1;
var n2=Math.abs(y2 - this.y1t) - 1;
for (var n=dy - 1, nMid=(n/2|0); --n >= n1; ) {
if (n == nMid) {
argb=argbB;
if (argb == 0) return;
}offset+=yOffsetIncrement;
y+=yIncrement;
twoDyAccumulatedXError+=twoDx;
if (twoDyAccumulatedXError > dy) {
offset+=xIncrement;
twoDyAccumulatedXError-=twoDy;
}if (argb != 0 && n < n2  && offset >= 0  && offset < offsetMax  && runIndex < rise ) {
var zCurrent=this.getZCurrent$F$F$I(this.a, this.b, y);
if (zCurrent < zbuf[offset]) p.addPixel$I$I$I(offset, zCurrent, argb);
}runIndex=(runIndex + 1) % run;
}
}});

Clazz.newMeth(C$, 'getTrimmedLineImpl', function () {
var cc1=this.g3d.clipCode3$I$I$I(this.x1t, this.y1t, this.z1t);
var cc2=this.g3d.clipCode3$I$I$I(this.x2t, this.y2t, this.z2t);
var c=(cc1 | cc2);
if ((cc1 | cc2) == 0) return 0;
if (c == -1) return 2;
var xLast=this.g3d.xLast;
var yLast=this.g3d.yLast;
var slab=this.g3d.slab;
var depth=this.g3d.depth;
do {
if ((cc1 & cc2) != 0) return 2;
var dx=this.x2t - this.x1t;
var dy=this.y2t - this.y1t;
var dz=this.z2t - this.z1t;
if (cc1 != 0) {
if ((cc1 & 8) != 0) {
this.y1t+=(((-this.x1t * dy) / dx)|0);
this.z1t+=(((-this.x1t * dz) / dx)|0);
this.x1t=0;
} else if ((cc1 & 4) != 0) {
this.y1t+=((((xLast - this.x1t) * dy) / dx)|0);
this.z1t+=((((xLast - this.x1t) * dz) / dx)|0);
this.x1t=xLast;
} else if ((cc1 & 2) != 0) {
this.x1t+=(((-this.y1t * dx) / dy)|0);
this.z1t+=(((-this.y1t * dz) / dy)|0);
this.y1t=0;
} else if ((cc1 & 1) != 0) {
this.x1t+=((((yLast - this.y1t) * dx) / dy)|0);
this.z1t+=((((yLast - this.y1t) * dz) / dy)|0);
this.y1t=yLast;
} else if ((cc1 & 32) != 0) {
this.x1t+=((((slab - this.z1t) * dx) / dz)|0);
this.y1t+=((((slab - this.z1t) * dy) / dz)|0);
this.z1t=slab;
} else {
this.x1t+=((((depth - this.z1t) * dx) / dz)|0);
this.y1t+=((((depth - this.z1t) * dy) / dz)|0);
this.z1t=depth;
}cc1=this.g3d.clipCode3$I$I$I(this.x1t, this.y1t, this.z1t);
} else {
if ((cc2 & 8) != 0) {
this.y2t+=(((-this.x2t * dy) / dx)|0);
this.z2t+=(((-this.x2t * dz) / dx)|0);
this.x2t=0;
} else if ((cc2 & 4) != 0) {
this.y2t+=((((xLast - this.x2t) * dy) / dx)|0);
this.z2t+=((((xLast - this.x2t) * dz) / dx)|0);
this.x2t=xLast;
} else if ((cc2 & 2) != 0) {
this.x2t+=(((-this.y2t * dx) / dy)|0);
this.z2t+=(((-this.y2t * dz) / dy)|0);
this.y2t=0;
} else if ((cc2 & 1) != 0) {
this.x2t+=((((yLast - this.y2t) * dx) / dy)|0);
this.z2t+=((((yLast - this.y2t) * dz) / dy)|0);
this.y2t=yLast;
} else if ((cc2 & 32) != 0) {
this.x2t+=((((slab - this.z2t) * dx) / dz)|0);
this.y2t+=((((slab - this.z2t) * dy) / dz)|0);
this.z2t=slab;
} else {
this.x2t+=((((depth - this.z2t) * dx) / dz)|0);
this.y2t+=((((depth - this.z2t) * dy) / dz)|0);
this.z2t=depth;
}cc2=this.g3d.clipCode3$I$I$I(this.x2t, this.y2t, this.z2t);
}} while ((cc1 | cc2) != 0);
return 1;
}, p$1);

Clazz.newMeth(C$, 'plotLineClippedOld$I$I$I$I$I$I$I$I$Z$I$I', function (argb1, argb2, x, y, z, dx, dy, dz, clipped, run, rise) {
var zbuf=this.g3d.zbuf;
var width=this.g3d.width;
var runIndex=0;
if (run == 0) {
rise=2147483647;
run=1;
}var offset=y * width + x;
var offsetMax=this.g3d.bufferSize;
var argb=argb1;
var p=this.g3d.pixel;
if (argb != 0 && !clipped  && offset >= 0  && offset < offsetMax  && z < zbuf[offset] ) p.addPixel$I$I$I(offset, z, argb);
if (dx == 0 && dy == 0 ) return;
var xIncrement=1;
var yOffsetIncrement=width;
var x2=x + dx;
var y2=y + dy;
if (dx < 0) {
dx=-dx;
xIncrement=-1;
}if (dy < 0) {
dy=-dy;
yOffsetIncrement=-width;
}var twoDx=dx + dx;
var twoDy=dy + dy;
var zCurrentScaled=z << 10;
if (dy <= dx) {
var roundingFactor=dx - 1;
if (dz < 0) roundingFactor=-roundingFactor;
var zIncrementScaled=(((dz << 10) + roundingFactor)/dx|0);
var twoDxAccumulatedYError=0;
var n1=Math.abs(x2 - this.x2t) - 1;
var n2=Math.abs(x2 - this.x1t) - 1;
for (var n=dx - 1, nMid=(n/2|0); --n >= n1; ) {
if (n == nMid) {
argb=argb2;
if (argb == 0) return;
}offset+=xIncrement;
zCurrentScaled+=zIncrementScaled;
twoDxAccumulatedYError+=twoDy;
if (twoDxAccumulatedYError > dx) {
offset+=yOffsetIncrement;
twoDxAccumulatedYError-=twoDx;
}if (argb != 0 && n < n2  && offset >= 0  && offset < offsetMax  && runIndex < rise ) {
var zCurrent=zCurrentScaled >> 10;
if (zCurrent < zbuf[offset]) p.addPixel$I$I$I(offset, zCurrent, argb);
}runIndex=(runIndex + 1) % run;
}
} else {
var roundingFactor=dy - 1;
if (dz < 0) roundingFactor=-roundingFactor;
var zIncrementScaled=(((dz << 10) + roundingFactor)/dy|0);
var twoDyAccumulatedXError=0;
var n1=Math.abs(y2 - this.y2t) - 1;
var n2=Math.abs(y2 - this.y1t) - 1;
for (var n=dy - 1, nMid=(n/2|0); --n >= n1; ) {
if (n == nMid) {
argb=argb2;
if (argb == 0) return;
}offset+=yOffsetIncrement;
zCurrentScaled+=zIncrementScaled;
twoDyAccumulatedXError+=twoDx;
if (twoDyAccumulatedXError > dy) {
offset+=xIncrement;
twoDyAccumulatedXError-=twoDy;
}if (argb != 0 && n < n2  && offset >= 0  && offset < offsetMax  && runIndex < rise ) {
var zCurrent=zCurrentScaled >> 10;
if (zCurrent < zbuf[offset]) p.addPixel$I$I$I(offset, zCurrent, argb);
}runIndex=(runIndex + 1) % run;
}
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:08 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
