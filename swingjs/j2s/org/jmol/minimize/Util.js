(function(){var P$=Clazz.newPackage("org.jmol.minimize"),I$=[[0,'java.util.Random']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Util");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'sub$DA$DA$javajs_util_V3d', function (a, b, result) {
result.set$D$D$D(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
}, 1);

Clazz.newMeth(C$, 'putCoord$javajs_util_V3d$DA', function (v, c) {
c[0]=v.x;
c[1]=v.y;
c[2]=v.z;
}, 1);

Clazz.newMeth(C$, 'distance2$DA$DA', function (a, b) {
var dx=a[0] - b[0];
var dy=a[1] - b[1];
var dz=a[2] - b[2];
return (dx * dx + dy * dy + dz * dz);
}, 1);

Clazz.newMeth(C$, 'distance2V$javajs_util_V3d$javajs_util_V3d', function (a, b) {
var dx=a.x - b.x;
var dy=a.y - b.y;
var dz=a.z - b.z;
return (dx * dx + dy * dy + dz * dz);
}, 1);

Clazz.newMeth(C$, 'getAngleRadiansABC$DA$DA$DA', function (a, b, c) {
var ab2=C$.distance2$DA$DA(a, b);
var bc2=C$.distance2$DA$DA(b, c);
var ac2=C$.distance2$DA$DA(a, c);
return (C$.isNearZero2$D$D(ab2, 0.001) || C$.isNearZero2$D$D(bc2, 0.001)  ? 0 : Math.acos((ab2 + bc2 - ac2) / 2 / Math.sqrt(ab2 * bc2) ));
}, 1);

Clazz.newMeth(C$, 'isApprox$javajs_util_V3d$javajs_util_V3d$D', function (a, b, precision) {
return (C$.distance2V$javajs_util_V3d$javajs_util_V3d(a, b) <= precision * precision * Math.min(a.lengthSquared$(), b.lengthSquared$())  );
}, 1);

Clazz.newMeth(C$, 'canBeSquared$D', function (x) {
if (x == 0 ) return true;
return ((x=Math.abs(x)) < 1.0E150  && x > 1.0E-150  );
}, 1);

Clazz.newMeth(C$, 'isNegligible$D$D', function (a, b) {
return C$.isNegligible3$D$D$D(a, b, 1.0E-11);
}, 1);

Clazz.newMeth(C$, 'isFinite$D', function (a) {
return !Double.isInfinite$D(a) && !Double.isNaN$D(a) ;
}, 1);

Clazz.newMeth(C$, 'isNegligible3$D$D$D', function (a, b, precision) {
return (Math.abs(a) <= precision * Math.abs(b) );
}, 1);

Clazz.newMeth(C$, 'isNear$D$D', function (a, b) {
return C$.isNear3$D$D$D(a, b, 2.0E-6);
}, 1);

Clazz.newMeth(C$, 'isNear3$D$D$D', function (a, b, epsilon) {
return (Math.abs(a - b) < epsilon );
}, 1);

Clazz.newMeth(C$, 'isNearZero$D', function (a) {
return C$.isNearZero2$D$D(a, 2.0E-6);
}, 1);

Clazz.newMeth(C$, 'isNearZero2$D$D', function (a, epsilon) {
return (Math.abs(a) < epsilon );
}, 1);

Clazz.newMeth(C$, 'canBeNormalized$javajs_util_V3d', function (a) {
if (a.x == 0.0  && a.y == 0.0   && a.z == 0.0  ) return false;
return (C$.canBeSquared$D(a.x) && C$.canBeSquared$D(a.y) && C$.canBeSquared$D(a.z)  );
}, 1);

Clazz.newMeth(C$, 'pointPlaneAngleRadians$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$Z', function (a, b, c, d, v1, v2, norm, fixTheta) {
v1.sub2$javajs_util_T3d$javajs_util_T3d(b, c);
v2.sub2$javajs_util_T3d$javajs_util_T3d(b, d);
norm.cross$javajs_util_V3d$javajs_util_V3d(v1, v2);
v2.add$javajs_util_T3d(v1);
v1.sub2$javajs_util_T3d$javajs_util_T3d(b, a);
var angleA_CD=(fixTheta ? C$.vectorAngleRadians$javajs_util_V3d$javajs_util_V3d(v2, v1) : 3.141592653589793);
var angleNorm=C$.vectorAngleRadians$javajs_util_V3d$javajs_util_V3d(norm, v1);
if (angleNorm > 1.5707963267948966 ) angleNorm=3.141592653589793 - angleNorm;
var val=1.5707963267948966 + (angleA_CD > 1.5707963267948966  ? -angleNorm : angleNorm);
return val;
}, 1);

Clazz.newMeth(C$, 'vectorAngleRadians$javajs_util_V3d$javajs_util_V3d', function (v1, v2) {
var l1=v1.length$();
var l2=v2.length$();
return (C$.isNearZero$D(l1) || C$.isNearZero$D(l2)  ? 0 : Math.acos(v1.dot$javajs_util_V3d(v2) / (l1 * l2)));
}, 1);

Clazz.newMeth(C$, 'getTorsionAngleRadians$DA$DA$DA$DA$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d', function (a, b, c, d, r1, r2, r3) {
C$.sub$DA$DA$javajs_util_V3d(b, a, r1);
C$.sub$DA$DA$javajs_util_V3d(c, b, r2);
r2.normalize$();
r1.cross$javajs_util_V3d$javajs_util_V3d(r1, r2);
C$.sub$DA$DA$javajs_util_V3d(d, c, r3);
r3.cross$javajs_util_V3d$javajs_util_V3d(r2, r3);
var p1dotp2=r1.dot$javajs_util_V3d(r3);
r1.cross$javajs_util_V3d$javajs_util_V3d(r3, r1);
var theta=Math.atan2(-r2.dot$javajs_util_V3d(r1), p1dotp2);
return theta;
}, 1);

Clazz.newMeth(C$, 'restorativeForceAndDistance$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d', function (a, b, vab) {
vab.sub2$javajs_util_T3d$javajs_util_T3d(a, b);
var rab=vab.length$();
if (rab < 0.1 ) {
C$.randomizeUnitVector$javajs_util_V3d(vab);
rab=0.1;
}vab.normalize$();
a.setT$javajs_util_T3d(vab);
a.scale$D(-1);
b.setT$javajs_util_T3d(vab);
return rab;
}, 1);

Clazz.newMeth(C$, 'randomizeUnitVector$javajs_util_V3d', function (v) {
var ptr=Clazz.new_($I$(1));
var l;
do {
v.set$D$D$D(ptr.nextFloat$() - 0.5, ptr.nextFloat$() - 0.5, ptr.nextFloat$() - 0.5);
l=v.lengthSquared$();
} while ((l > 1.0 ) || (l < 1.0E-4 ) );
v.normalize$();
}, 1);

Clazz.newMeth(C$, 'restorativeForceAndAngleRadians$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d', function (i, j, k) {
i.sub$javajs_util_T3d(j);
k.sub$javajs_util_T3d(j);
var length1=i.length$();
var length2=k.length$();
if (C$.isNearZero$D(length1) || C$.isNearZero$D(length2) ) {
i.set$D$D$D(0, 0, 0);
j.set$D$D$D(0, 0, 0);
k.set$D$D$D(0, 0, 0);
return 0.0;
}var inverse_length_v1=1.0 / length1;
var inverse_length_v2=1.0 / length2;
i.scale$D(inverse_length_v1);
k.scale$D(inverse_length_v2);
j.cross$javajs_util_V3d$javajs_util_V3d(i, k);
var length=j.length$();
if (C$.isNearZero$D(length)) {
i.set$D$D$D(0, 0, 0);
j.set$D$D$D(0, 0, 0);
k.set$D$D$D(0, 0, 0);
return 0.0;
}j.scale$D(1 / length);
var costheta=i.dot$javajs_util_V3d(k);
var theta;
if (costheta > 1.0 ) {
theta=0.0;
costheta=1.0;
} else if (costheta < -1.0 ) {
theta=3.141592653589793;
costheta=-1.0;
} else {
theta=Math.acos(costheta);
}i.cross$javajs_util_V3d$javajs_util_V3d(i, j);
i.normalize$();
j.cross$javajs_util_V3d$javajs_util_V3d(k, j);
j.normalize$();
i.scale$D(-inverse_length_v1);
j.scale$D(inverse_length_v2);
k.setT$javajs_util_T3d(j);
j.add$javajs_util_T3d(i);
j.scale$D(-1);
return theta;
}, 1);

Clazz.newMeth(C$, 'restorativeForceAndOutOfPlaneAngleRadians$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d', function (i, j, k, l, an, bn, cn) {
i.sub2$javajs_util_T3d$javajs_util_T3d(i, j);
k.sub2$javajs_util_T3d$javajs_util_T3d(k, j);
l.sub2$javajs_util_T3d$javajs_util_T3d(l, j);
var length_ji=i.length$();
var length_jk=k.length$();
var length_jl=l.length$();
if (C$.isNearZero$D(length_ji) || C$.isNearZero$D(length_jk) || C$.isNearZero$D(length_jl)  ) {
i.set$D$D$D(0, 0, 0);
j.set$D$D$D(0, 0, 0);
k.set$D$D$D(0, 0, 0);
l.set$D$D$D(0, 0, 0);
return 0.0;
}i.normalize$();
k.normalize$();
l.normalize$();
var cos_theta=i.dot$javajs_util_V3d(k);
var theta=Math.acos(cos_theta);
if (C$.isNearZero$D(theta) || C$.isNearZero$D(Math.abs(theta - 3.141592653589793)) ) {
i.set$D$D$D(0, 0, 0);
j.set$D$D$D(0, 0, 0);
k.set$D$D$D(0, 0, 0);
l.set$D$D$D(0, 0, 0);
return 0.0;
}var csc_theta=1 / Math.sin(theta);
an.cross$javajs_util_V3d$javajs_util_V3d(i, k);
bn.cross$javajs_util_V3d$javajs_util_V3d(k, l);
cn.cross$javajs_util_V3d$javajs_util_V3d(l, i);
var sin_dl=an.dot$javajs_util_V3d(l) * csc_theta;
var dl=Math.asin(sin_dl);
var cos_dl=Math.cos(dl);
if (cos_dl < 1.0E-4  || C$.isNearZero$D(dl)  || C$.isNearZero$D(Math.abs(dl - 3.141592653589793)) ) {
i.set$D$D$D(0, 0, 0);
j.set$D$D$D(0, 0, 0);
k.set$D$D$D(0, 0, 0);
l.set$D$D$D(0, 0, 0);
return dl;
}l.scaleAdd$D$javajs_util_T3d$javajs_util_T3d(-sin_dl / csc_theta, l, an);
l.scale$D(csc_theta / length_jl);
j.setT$javajs_util_T3d(i);
i.scaleAdd$D$javajs_util_T3d$javajs_util_T3d(-cos_theta, k, i);
i.scaleAdd$D$javajs_util_T3d$javajs_util_T3d(-sin_dl * csc_theta, i, bn);
i.scale$D(csc_theta / length_ji);
k.scaleAdd$D$javajs_util_T3d$javajs_util_T3d(-cos_theta, j, k);
k.scaleAdd$D$javajs_util_T3d$javajs_util_T3d(-sin_dl * csc_theta, k, cn);
k.scale$D(csc_theta / length_jk);
j.setT$javajs_util_T3d(i);
j.add$javajs_util_T3d(k);
j.add$javajs_util_T3d(l);
j.scale$D(-1);
return dl;
}, 1);

Clazz.newMeth(C$, 'restorativeForceAndTorsionAngleRadians$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d$javajs_util_V3d', function (i, j, k, l) {
i.sub2$javajs_util_T3d$javajs_util_T3d(j, i);
j.sub2$javajs_util_T3d$javajs_util_T3d(k, j);
k.sub2$javajs_util_T3d$javajs_util_T3d(l, k);
var len_ij=i.length$();
var len_jk=j.length$();
var len_kl=k.length$();
if (C$.isNearZero$D(len_ij) || C$.isNearZero$D(len_jk) || C$.isNearZero$D(len_kl)  ) {
i.set$D$D$D(0, 0, 0);
j.set$D$D$D(0, 0, 0);
k.set$D$D$D(0, 0, 0);
l.set$D$D$D(0, 0, 0);
return 0.0;
}var ang=C$.vectorAngleRadians$javajs_util_V3d$javajs_util_V3d(i, j);
var sin_j=Math.sin(ang);
var cos_j=Math.cos(ang);
ang=C$.vectorAngleRadians$javajs_util_V3d$javajs_util_V3d(j, k);
var sin_k=Math.sin(ang);
var cos_k=Math.cos(ang);
i.normalize$();
j.normalize$();
k.normalize$();
i.cross$javajs_util_V3d$javajs_util_V3d(i, j);
l.cross$javajs_util_V3d$javajs_util_V3d(j, k);
k.cross$javajs_util_V3d$javajs_util_V3d(i, l);
var theta=-Math.atan2(k.dot$javajs_util_V3d(j), i.dot$javajs_util_V3d(l));
i.scale$D(1.0 / len_ij / sin_j / sin_j );
l.scale$D(-1.0 / len_kl / sin_k / sin_k );
j.setT$javajs_util_T3d(i);
j.scale$D(-len_ij / len_jk * cos_j - 1.0);
k.setT$javajs_util_T3d(l);
k.scale$D(-len_kl / len_jk * cos_k);
j.sub$javajs_util_T3d(k);
k.setT$javajs_util_T3d(i);
k.add$javajs_util_T3d(j);
k.add$javajs_util_T3d(l);
k.scale$D(-1);
return theta;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:06 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
