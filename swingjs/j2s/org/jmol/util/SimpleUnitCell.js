(function(){var P$=Clazz.newPackage("org.jmol.util"),p$1={},I$=[[0,'javajs.util.P3','javajs.util.AU','javajs.util.V3','javajs.util.M4','org.jmol.util.Escape','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SimpleUnitCell");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.unitCellParams=null;
this.matrixCartesianToFractional=null;
this.matrixFractionalToCartesian=null;
this.volume=0;
this.na=0;
this.nb=0;
this.nc=0;
this.a=0;
this.b=0;
this.c=0;
this.alpha=0;
this.beta=0;
this.gamma=0;
this.cosAlpha=0;
this.sinAlpha=0;
this.cosBeta=0;
this.sinBeta=0;
this.cosGamma=0;
this.sinGamma=0;
this.cA_=0;
this.cB_=0;
this.a_=0;
this.b_=0;
this.c_=0;
this.dimension=0;
this.fractionalOrigin=null;
this.matrixCtoFNoOffset=null;
this.matrixFtoCNoOffset=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isSupercell$', function () {
return (this.na > 1 || this.nb > 1  || this.nc > 1 );
});

Clazz.newMeth(C$, 'isValid$FA', function (parameters) {
return (parameters != null  && (parameters[0] > 0  || parameters.length > 14 && !Float.isNaN$F(parameters[14])  ) );
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.fractionalOrigin=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'newA$FA', function (params) {
var c=Clazz.new_(C$);
c.init$FA(params);
return c;
}, 1);

Clazz.newMeth(C$, 'init$FA', function (params) {
if (params == null ) params=Clazz.array(Float.TYPE, -1, [1, 1, 1, 90, 90, 90]);
if (!C$.isValid$FA(params)) return;
this.unitCellParams=$I$(2).arrayCopyF$FA$I(params, params.length);
var rotateHex=false;
this.a=params[0];
this.b=params[1];
this.c=params[2];
this.alpha=params[3];
this.beta=params[4];
this.gamma=params[5];
if (this.gamma == -1 ) {
rotateHex=true;
this.gamma=120;
}var fa=this.na=Math.max(1, params.length >= 25 && !Float.isNaN$F(params[22])  ? (params[22]|0) : 1);
var fb=this.nb=Math.max(1, params.length >= 25 && !Float.isNaN$F(params[23])  ? (params[23]|0) : 1);
var fc=this.nc=Math.max(1, params.length >= 25 && !Float.isNaN$F(params[24])  ? (params[24]|0) : 1);
if (params.length > 25 && !Float.isNaN$F(params[25]) ) {
var fScale=params[25];
fa *= fScale;
fb *= fScale;
fc *= fScale;
} else {
fa=fb=fc=1;
}if (this.a <= 0 ) {
var va=$I$(3).new3$F$F$F(params[6], params[7], params[8]);
var vb=$I$(3).new3$F$F$F(params[9], params[10], params[11]);
var vc=$I$(3).new3$F$F$F(params[12], params[13], params[14]);
p$1.setABC$javajs_util_V3$javajs_util_V3$javajs_util_V3.apply(this, [va, vb, vc]);
if (this.c < 0 ) {
var n=$I$(2).arrayCopyF$FA$I(params, -1);
if (this.b < 0 ) {
vb.set$F$F$F(0, 0, 1);
vb.cross$javajs_util_T3$javajs_util_T3(vb, va);
if (vb.length$() < 0.001 ) vb.set$F$F$F(0, 1, 0);
vb.normalize$();
n[9]=vb.x;
n[10]=vb.y;
n[11]=vb.z;
}if (this.c < 0 ) {
vc.cross$javajs_util_T3$javajs_util_T3(va, vb);
vc.normalize$();
n[12]=vc.x;
n[13]=vc.y;
n[14]=vc.z;
}params=n;
}}this.a *= fa;
if (this.b <= 0 ) {
this.b=this.c=1;
this.dimension=1;
} else if (this.c <= 0 ) {
this.c=1;
this.b *= fb;
this.dimension=2;
} else {
this.b *= fb;
this.c *= fc;
this.dimension=3;
}p$1.setCellParams.apply(this, []);
if (params.length > 21 && !Float.isNaN$F(params[21]) ) {
var scaleMatrix=Clazz.array(Float.TYPE, [16]);
for (var i=0; i < 16; i++) {
var f;
switch (i % 4) {
case 0:
f=fa;
break;
case 1:
f=fb;
break;
case 2:
f=fc;
break;
default:
f=1;
break;
}
scaleMatrix[i]=params[6 + i] * f;
}
this.matrixCartesianToFractional=$I$(4).newA16$FA(scaleMatrix);
this.matrixCartesianToFractional.getTranslation$javajs_util_T3(this.fractionalOrigin);
this.matrixFractionalToCartesian=$I$(4).newM4$javajs_util_M4(this.matrixCartesianToFractional).invert$();
if (params[0] == 1 ) p$1.setParamsFromMatrix.apply(this, []);
} else if (params.length > 14 && !Float.isNaN$F(params[14]) ) {
var m=this.matrixFractionalToCartesian=Clazz.new_($I$(4));
m.setColumn4$I$F$F$F$F(0, params[6] * fa, params[7] * fa, params[8] * fa, 0);
m.setColumn4$I$F$F$F$F(1, params[9] * fb, params[10] * fb, params[11] * fb, 0);
m.setColumn4$I$F$F$F$F(2, params[12] * fc, params[13] * fc, params[14] * fc, 0);
m.setColumn4$I$F$F$F$F(3, 0, 0, 0, 1);
this.matrixCartesianToFractional=$I$(4).newM4$javajs_util_M4(this.matrixFractionalToCartesian).invert$();
} else {
var m=this.matrixFractionalToCartesian=Clazz.new_($I$(4));
if (rotateHex) {
m.setColumn4$I$F$F$F$F(0, (-this.b * this.cosGamma), (-this.b * this.sinGamma), 0, 0);
m.setColumn4$I$F$F$F$F(1, (-this.b * this.cosGamma), (this.b * this.sinGamma), 0, 0);
} else {
m.setColumn4$I$F$F$F$F(0, this.a, 0, 0, 0);
m.setColumn4$I$F$F$F$F(1, (this.b * this.cosGamma), (this.b * this.sinGamma), 0, 0);
}m.setColumn4$I$F$F$F$F(2, (this.c * this.cosBeta), (this.c * (this.cosAlpha - this.cosBeta * this.cosGamma) / this.sinGamma), (this.volume / (this.a * this.b * this.sinGamma )), 0);
m.setColumn4$I$F$F$F$F(3, 0, 0, 0, 1);
this.matrixCartesianToFractional=$I$(4).newM4$javajs_util_M4(this.matrixFractionalToCartesian).invert$();
}this.matrixCtoFNoOffset=this.matrixCartesianToFractional;
this.matrixFtoCNoOffset=this.matrixFractionalToCartesian;
});

Clazz.newMeth(C$, 'setParamsFromMatrix', function () {
var va=$I$(3).new3$F$F$F(1, 0, 0);
var vb=$I$(3).new3$F$F$F(0, 1, 0);
var vc=$I$(3).new3$F$F$F(0, 0, 1);
this.matrixFractionalToCartesian.rotate$javajs_util_T3(va);
this.matrixFractionalToCartesian.rotate$javajs_util_T3(vb);
this.matrixFractionalToCartesian.rotate$javajs_util_T3(vc);
p$1.setABC$javajs_util_V3$javajs_util_V3$javajs_util_V3.apply(this, [va, vb, vc]);
p$1.setCellParams.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setABC$javajs_util_V3$javajs_util_V3$javajs_util_V3', function (va, vb, vc) {
this.a=va.length$();
this.b=vb.length$();
this.c=vc.length$();
if (this.a == 0 ) return;
if (this.b == 0 ) this.b=this.c=-1;
 else if (this.c == 0 ) this.c=-1;
this.alpha=(this.b < 0  || this.c < 0   ? 90 : vb.angle$javajs_util_V3(vc) / 0.017453292);
this.beta=(this.c < 0  ? 90 : va.angle$javajs_util_V3(vc) / 0.017453292);
this.gamma=(this.b < 0  ? 90 : va.angle$javajs_util_V3(vb) / 0.017453292);
}, p$1);

Clazz.newMeth(C$, 'setCellParams', function () {
this.cosAlpha=Math.cos(0.017453292 * this.alpha);
this.sinAlpha=Math.sin(0.017453292 * this.alpha);
this.cosBeta=Math.cos(0.017453292 * this.beta);
this.sinBeta=Math.sin(0.017453292 * this.beta);
this.cosGamma=Math.cos(0.017453292 * this.gamma);
this.sinGamma=Math.sin(0.017453292 * this.gamma);
var unitVolume=Math.sqrt(this.sinAlpha * this.sinAlpha + this.sinBeta * this.sinBeta + this.sinGamma * this.sinGamma + 2.0 * this.cosAlpha * this.cosBeta * this.cosGamma  - 2);
this.volume=this.a * this.b * this.c * unitVolume ;
this.cA_=(this.cosAlpha - this.cosBeta * this.cosGamma) / this.sinGamma;
this.cB_=unitVolume / this.sinGamma;
this.a_=this.b * this.c * this.sinAlpha  / this.volume;
this.b_=this.a * this.c * this.sinBeta  / this.volume;
this.c_=this.a * this.b * this.sinGamma  / this.volume;
}, p$1);

Clazz.newMeth(C$, 'getFractionalOrigin$', function () {
return this.fractionalOrigin;
});

Clazz.newMeth(C$, 'toSupercell$javajs_util_P3', function (fpt) {
fpt.x /= this.na;
fpt.y /= this.nb;
fpt.z /= this.nc;
return fpt;
});

Clazz.newMeth(C$, 'toCartesian$javajs_util_T3$Z', function (pt, ignoreOffset) {
if (this.matrixFractionalToCartesian != null ) (ignoreOffset ? this.matrixFtoCNoOffset : this.matrixFractionalToCartesian).rotTrans$javajs_util_T3(pt);
});

Clazz.newMeth(C$, 'toFractionalM$javajs_util_M4', function (m) {
if (this.matrixCartesianToFractional == null ) return;
m.mul$javajs_util_M4(this.matrixFractionalToCartesian);
m.mul2$javajs_util_M4$javajs_util_M4(this.matrixCartesianToFractional, m);
});

Clazz.newMeth(C$, 'toFractional$javajs_util_T3$Z', function (pt, ignoreOffset) {
if (this.matrixCartesianToFractional == null ) return;
(ignoreOffset ? this.matrixCtoFNoOffset : this.matrixCartesianToFractional).rotTrans$javajs_util_T3(pt);
});

Clazz.newMeth(C$, 'isPolymer$', function () {
return (this.dimension == 1);
});

Clazz.newMeth(C$, 'isSlab$', function () {
return (this.dimension == 2);
});

Clazz.newMeth(C$, 'getUnitCellParams$', function () {
return this.unitCellParams;
});

Clazz.newMeth(C$, 'getUnitCellAsArray$Z', function (vectorsOnly) {
var m=this.matrixFractionalToCartesian;
return (vectorsOnly ? Clazz.array(Float.TYPE, -1, [m.m00, m.m10, m.m20, m.m01, m.m11, m.m21, m.m02, m.m12, m.m22]) : Clazz.array(Float.TYPE, -1, [this.a, this.b, this.c, this.alpha, this.beta, this.gamma, m.m00, m.m10, m.m20, m.m01, m.m11, m.m21, m.m02, m.m12, m.m22, this.dimension, this.volume]));
});

Clazz.newMeth(C$, 'getInfo$I', function (infoType) {
switch (infoType) {
case 0:
return this.a;
case 1:
return this.b;
case 2:
return this.c;
case 3:
return this.alpha;
case 4:
return this.beta;
case 5:
return this.gamma;
case 6:
return this.dimension;
}
return NaN;
});

Clazz.newMeth(C$, 'ijkToPoint3f$I$javajs_util_P3$I$I', function (nnn, cell, offset, kcode) {
var f=(nnn > 1000000000 ? 1000 : nnn > 1000000 ? 100 : 10);
var f2=f * f;
offset-=(offset >= 0 ? (5 * f/10|0) : offset);
cell.x=(((nnn/f2|0)) % f) + offset;
cell.y=((nnn % f2)/f|0) + offset;
cell.z=(kcode == 0 ? nnn % f : (offset == -500 ? (kcode/f|0) : kcode) % f) + offset;
}, 1);

Clazz.newMeth(C$, 'escapeMultiplier$javajs_util_T3', function (pt) {
if (Clazz.instanceOf(pt, "javajs.util.P4")) {
var pt4=pt;
var x=(Math.floor(pt4.x / 1000)|0) * 1000 + (Math.floor(pt4.w / 1000)|0) - 1000;
var y=(Math.floor(pt4.y / 1000)|0) * 1000 + (Math.floor(pt4.w)|0) % 1000;
return "{" + x + " " + y + " " + new Float(pt.z).toString() + "}" ;
}return $I$(5).eP$javajs_util_T3(pt);
}, 1);

Clazz.newMeth(C$, 'getCellWeight$javajs_util_P3', function (pt) {
var f=1;
if (pt.x <= 0.02  || pt.x >= 0.98  ) f /= 2;
if (pt.y <= 0.02  || pt.y >= 0.98  ) f /= 2;
if (pt.z <= 0.02  || pt.z >= 0.98  ) f /= 2;
return f;
}, 1);

Clazz.newMeth(C$, 'getReciprocal$javajs_util_T3A$javajs_util_T3A$F', function (abc, ret, scale) {
var rabc=Clazz.array($I$(1), [4]);
var off=(abc.length == 4 ? 1 : 0);
rabc[0]=(off == 1 ? $I$(1).newP$javajs_util_T3(abc[0]) : Clazz.new_($I$(1)));
for (var i=0; i < 3; i++) {
rabc[i + 1]=Clazz.new_($I$(1));
rabc[i + 1].cross$javajs_util_T3$javajs_util_T3(abc[((i + off) % 3) + off], abc[((i + off + 1 ) % 3) + off]);
rabc[i + 1].scale$F(scale / abc[i + off].dot$javajs_util_T3(rabc[i + 1]));
}
if (ret == null ) return rabc;
for (var i=0; i < 4; i++) ret[i]=rabc[i];

return ret;
}, 1);

Clazz.newMeth(C$, 'setOabc$S$FA$javajs_util_T3A', function (abcabg, params, ucnew) {
if (abcabg != null ) {
if (params == null ) params=Clazz.array(Float.TYPE, [6]);
var tokens=$I$(6).split$S$S(abcabg.replace$C$C(",", "="), "=");
if (tokens.length >= 12) for (var i=0; i < 6; i++) params[i]=$I$(6).parseFloat$S(tokens[i * 2 + 1]);

}if (ucnew == null ) return null;
var f=C$.newA$FA(params).getUnitCellAsArray$Z(true);
ucnew[1].set$F$F$F(f[0], f[1], f[2]);
ucnew[2].set$F$F$F(f[3], f[4], f[5]);
ucnew[3].set$F$F$F(f[6], f[7], f[8]);
return ucnew;
}, 1);

Clazz.newMeth(C$, 'setMinMaxLatticeParameters$I$javajs_util_P3i$javajs_util_P3i$I', function (dimension, minXYZ, maxXYZ, kcode) {
if (maxXYZ.x <= maxXYZ.y && maxXYZ.y >= 555 ) {
var pt=Clazz.new_($I$(1));
C$.ijkToPoint3f$I$javajs_util_P3$I$I(maxXYZ.x, pt, 0, kcode);
minXYZ.x=(pt.x|0);
minXYZ.y=(pt.y|0);
minXYZ.z=(pt.z|0);
C$.ijkToPoint3f$I$javajs_util_P3$I$I(maxXYZ.y, pt, 1, kcode);
maxXYZ.x=(pt.x|0);
maxXYZ.y=(pt.y|0);
maxXYZ.z=(pt.z|0);
}switch (dimension) {
case 1:
minXYZ.y=0;
maxXYZ.y=1;
case 2:
minXYZ.z=0;
maxXYZ.z=1;
}
}, 1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
