(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.V3','javajs.util.P3','javajs.util.T3','javajs.util.Lst','javajs.util.Quat','javajs.api.Interface','javajs.util.P4']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Measure");
C$.axisY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.axisY=$I$(1).new3$F$F$F(0, 1, 0);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'computeAngle$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$Z', function (pointA, pointB, pointC, vectorBA, vectorBC, asDegrees) {
vectorBA.sub2$javajs_util_T3$javajs_util_T3(pointA, pointB);
vectorBC.sub2$javajs_util_T3$javajs_util_T3(pointC, pointB);
var angle=vectorBA.angle$javajs_util_V3(vectorBC);
return (asDegrees ? angle / 0.017453292 : angle);
}, 1);

Clazz.newMeth(C$, 'computeAngleABC$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z', function (pointA, pointB, pointC, asDegrees) {
var vectorBA=Clazz.new_($I$(1));
var vectorBC=Clazz.new_($I$(1));
return C$.computeAngle$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$Z(pointA, pointB, pointC, vectorBA, vectorBC, asDegrees);
}, 1);

Clazz.newMeth(C$, 'computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z', function (p1, p2, p3, p4, asDegrees) {
var ijx=p1.x - p2.x;
var ijy=p1.y - p2.y;
var ijz=p1.z - p2.z;
var kjx=p3.x - p2.x;
var kjy=p3.y - p2.y;
var kjz=p3.z - p2.z;
var klx=p3.x - p4.x;
var kly=p3.y - p4.y;
var klz=p3.z - p4.z;
var ax=ijy * kjz - ijz * kjy;
var ay=ijz * kjx - ijx * kjz;
var az=ijx * kjy - ijy * kjx;
var cx=kjy * klz - kjz * kly;
var cy=kjz * klx - kjx * klz;
var cz=kjx * kly - kjy * klx;
var ai2=1.0 / (ax * ax + ay * ay + az * az);
var ci2=1.0 / (cx * cx + cy * cy + cz * cz);
var ai=Math.sqrt(ai2);
var ci=Math.sqrt(ci2);
var denom=ai * ci;
var cross=ax * cx + ay * cy + az * cz;
var cosang=cross * denom;
if (cosang > 1 ) {
cosang=1;
}if (cosang < -1 ) {
cosang=-1;
}var torsion=Math.acos(cosang);
var dot=ijx * cx + ijy * cy + ijz * cz;
var absDot=Math.abs(dot);
torsion=(dot / absDot > 0 ) ? torsion : -torsion;
return (asDegrees ? torsion / 0.017453292 : torsion);
}, 1);

Clazz.newMeth(C$, 'computeHelicalAxis$javajs_util_P3$javajs_util_P3$javajs_util_Quat', function (a, b, dq) {
var vab=Clazz.new_($I$(1));
vab.sub2$javajs_util_T3$javajs_util_T3(b, a);
var theta=dq.getTheta$();
var n=dq.getNormal$();
var v_dot_n=vab.dot$javajs_util_T3(n);
if (Math.abs(v_dot_n) < 1.0E-4 ) v_dot_n=0;
var va_prime_d=Clazz.new_($I$(1));
va_prime_d.cross$javajs_util_T3$javajs_util_T3(vab, n);
if (va_prime_d.dot$javajs_util_T3(va_prime_d) != 0 ) va_prime_d.normalize$();
var vda=Clazz.new_($I$(1));
var vcb=$I$(1).newV$javajs_util_T3(n);
if (v_dot_n == 0 ) v_dot_n=1.4E-45;
vcb.scale$F(v_dot_n);
vda.sub2$javajs_util_T3$javajs_util_T3(vcb, vab);
vda.scale$F(0.5);
va_prime_d.scale$F(theta == 0  ? 0 : (vda.length$() / Math.tan(theta / 2 / 180  * 3.141592653589793)));
var r=$I$(1).newV$javajs_util_T3(va_prime_d);
if (theta != 0 ) r.add$javajs_util_T3(vda);
var pt_a_prime=$I$(2).newP$javajs_util_T3(a);
pt_a_prime.sub$javajs_util_T3(r);
if (v_dot_n != 1.4E-45 ) n.scale$F(v_dot_n);
var pt_b_prime=$I$(2).newP$javajs_util_T3(pt_a_prime);
pt_b_prime.add$javajs_util_T3(n);
theta=C$.computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(a, pt_a_prime, pt_b_prime, b, true);
if (Float.isNaN$F(theta) || r.length$() < 1.0E-4  ) theta=dq.getThetaDirectedV$javajs_util_V3(n);
var residuesPerTurn=Math.abs(theta == 0  ? 0 : 360.0 / theta);
var pitch=Math.abs(v_dot_n == 1.4E-45  ? 0 : n.length$() * (theta == 0  ? 1 : 360.0 / theta));
return Clazz.array($I$(3), -1, [pt_a_prime, n, r, $I$(2).new3$F$F$F(theta, pitch, residuesPerTurn), pt_b_prime]);
}, 1);

Clazz.newMeth(C$, 'getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4', function (pointA, pointB, pointC, vNorm, vAB, plane) {
var w=C$.getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(pointA, pointB, pointC, vNorm, vAB);
plane.set4$F$F$F$F(vNorm.x, vNorm.y, vNorm.z, w);
return plane;
}, 1);

Clazz.newMeth(C$, 'getPlaneThroughPoint$javajs_util_T3$javajs_util_V3$javajs_util_P4', function (pt, normal, plane) {
plane.set4$F$F$F$F(normal.x, normal.y, normal.z, -normal.dot$javajs_util_T3(pt));
}, 1);

Clazz.newMeth(C$, 'distanceToPlane$javajs_util_P4$javajs_util_T3', function (plane, pt) {
return (plane == null  ? NaN : (plane.dot$javajs_util_T3(pt) + plane.w) / Math.sqrt(plane.dot$javajs_util_T3(plane)));
}, 1);

Clazz.newMeth(C$, 'directedDistanceToPlane$javajs_util_P3$javajs_util_P4$javajs_util_P3', function (pt, plane, ptref) {
var f=plane.dot$javajs_util_T3(pt) + plane.w;
var f1=plane.dot$javajs_util_T3(ptref) + plane.w;
return Math.signum(f1) * f / Math.sqrt(plane.dot$javajs_util_T3(plane));
}, 1);

Clazz.newMeth(C$, 'distanceToPlaneD$javajs_util_P4$F$javajs_util_P3', function (plane, d, pt) {
return (plane == null  ? NaN : (plane.dot$javajs_util_T3(pt) + plane.w) / d);
}, 1);

Clazz.newMeth(C$, 'distanceToPlaneV$javajs_util_V3$F$javajs_util_P3', function (norm, w, pt) {
return (norm == null  ? NaN : (norm.dot$javajs_util_T3(pt) + w) / Math.sqrt(norm.dot$javajs_util_T3(norm)));
}, 1);

Clazz.newMeth(C$, 'calcNormalizedNormal$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3', function (pointA, pointB, pointC, vNormNorm, vAB) {
vAB.sub2$javajs_util_T3$javajs_util_T3(pointB, pointA);
vNormNorm.sub2$javajs_util_T3$javajs_util_T3(pointC, pointA);
vNormNorm.cross$javajs_util_T3$javajs_util_T3(vAB, vNormNorm);
vNormNorm.normalize$();
}, 1);

Clazz.newMeth(C$, 'getDirectedNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3', function (pointA, pointB, pointC, ptRef, vNorm, vAB) {
var nd=C$.getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(pointA, pointB, pointC, vNorm, vAB);
if (ptRef != null ) {
var pt0=$I$(2).newP$javajs_util_T3(pointA);
pt0.add$javajs_util_T3(vNorm);
var d=pt0.distance$javajs_util_T3(ptRef);
pt0.sub2$javajs_util_T3$javajs_util_T3(pointA, vNorm);
if (d > pt0.distance$javajs_util_T3(ptRef) ) {
vNorm.scale$F(-1);
nd=-nd;
}}return nd;
}, 1);

Clazz.newMeth(C$, 'getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3', function (pointA, pointB, pointC, vNorm, vTemp) {
C$.calcNormalizedNormal$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(pointA, pointB, pointC, vNorm, vTemp);
vTemp.setT$javajs_util_T3(pointA);
return -vTemp.dot$javajs_util_T3(vNorm);
}, 1);

Clazz.newMeth(C$, 'getPlaneProjection$javajs_util_P3$javajs_util_P4$javajs_util_P3$javajs_util_V3', function (pt, plane, ptProj, vNorm) {
var dist=C$.distanceToPlane$javajs_util_P4$javajs_util_T3(plane, pt);
vNorm.set$F$F$F(plane.x, plane.y, plane.z);
vNorm.normalize$();
vNorm.scale$F(-dist);
ptProj.add2$javajs_util_T3$javajs_util_T3(pt, vNorm);
}, 1);

Clazz.newMeth(C$, 'getNormalFromCenter$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$Z$javajs_util_V3$javajs_util_V3', function (ptCenter, ptA, ptB, ptC, isOutward, normal, vTemp) {
var d=C$.getNormalThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3(ptA, ptB, ptC, normal, vTemp);
var isReversed=(C$.distanceToPlaneV$javajs_util_V3$F$javajs_util_P3(normal, d, ptCenter) > 0 );
if (isReversed == isOutward ) normal.scale$F(-1.0);
return !isReversed;
}, 1);

Clazz.newMeth(C$, 'getNormalToLine$javajs_util_P3$javajs_util_P3$javajs_util_V3', function (pointA, pointB, vNormNorm) {
vNormNorm.sub2$javajs_util_T3$javajs_util_T3(pointA, pointB);
vNormNorm.cross$javajs_util_T3$javajs_util_T3(vNormNorm, C$.axisY);
vNormNorm.normalize$();
if (Float.isNaN$F(vNormNorm.x)) vNormNorm.set$F$F$F(1, 0, 0);
}, 1);

Clazz.newMeth(C$, 'getBisectingPlane$javajs_util_P3$javajs_util_V3$javajs_util_T3$javajs_util_V3$javajs_util_P4', function (pointA, vAB, ptTemp, vTemp, plane) {
ptTemp.scaleAdd2$F$javajs_util_T3$javajs_util_T3(0.5, vAB, pointA);
vTemp.setT$javajs_util_T3(vAB);
vTemp.normalize$();
C$.getPlaneThroughPoint$javajs_util_T3$javajs_util_V3$javajs_util_P4(ptTemp, vTemp, plane);
}, 1);

Clazz.newMeth(C$, 'projectOntoAxis$javajs_util_P3$javajs_util_P3$javajs_util_V3$javajs_util_V3', function (point, axisA, axisUnitVector, vectorProjection) {
vectorProjection.sub2$javajs_util_T3$javajs_util_T3(point, axisA);
var projectedLength=vectorProjection.dot$javajs_util_T3(axisUnitVector);
point.scaleAdd2$F$javajs_util_T3$javajs_util_T3(projectedLength, axisUnitVector, axisA);
vectorProjection.sub2$javajs_util_T3$javajs_util_T3(point, axisA);
}, 1);

Clazz.newMeth(C$, 'calcBestAxisThroughPoints$javajs_util_P3A$javajs_util_P3$javajs_util_V3$javajs_util_V3$I', function (points, axisA, axisUnitVector, vectorProjection, nTriesMax) {
var nPoints=points.length;
axisA.setT$javajs_util_T3(points[0]);
axisUnitVector.sub2$javajs_util_T3$javajs_util_T3(points[nPoints - 1], axisA);
axisUnitVector.normalize$();
C$.calcAveragePointN$javajs_util_P3A$I$javajs_util_P3(points, nPoints, axisA);
var nTries=0;
while (nTries++ < nTriesMax && C$.findAxis$javajs_util_P3A$I$javajs_util_P3$javajs_util_V3$javajs_util_V3(points, nPoints, axisA, axisUnitVector, vectorProjection) > 0.001  ){
}
var tempA=$I$(2).newP$javajs_util_T3(points[0]);
C$.projectOntoAxis$javajs_util_P3$javajs_util_P3$javajs_util_V3$javajs_util_V3(tempA, axisA, axisUnitVector, vectorProjection);
axisA.setT$javajs_util_T3(tempA);
}, 1);

Clazz.newMeth(C$, 'findAxis$javajs_util_P3A$I$javajs_util_P3$javajs_util_V3$javajs_util_V3', function (points, nPoints, axisA, axisUnitVector, vectorProjection) {
var sumXiYi=Clazz.new_($I$(1));
var vTemp=Clazz.new_($I$(1));
var pt=Clazz.new_($I$(2));
var ptProj=Clazz.new_($I$(2));
var a=$I$(1).newV$javajs_util_T3(axisUnitVector);
var sum_Xi2=0;
for (var i=nPoints; --i >= 0; ) {
pt.setT$javajs_util_T3(points[i]);
ptProj.setT$javajs_util_T3(pt);
C$.projectOntoAxis$javajs_util_P3$javajs_util_P3$javajs_util_V3$javajs_util_V3(ptProj, axisA, axisUnitVector, vectorProjection);
vTemp.sub2$javajs_util_T3$javajs_util_T3(pt, ptProj);
vTemp.cross$javajs_util_T3$javajs_util_T3(vectorProjection, vTemp);
sumXiYi.add$javajs_util_T3(vTemp);
sum_Xi2 += vectorProjection.lengthSquared$();
}
var m=$I$(1).newV$javajs_util_T3(sumXiYi);
m.scale$F(1 / sum_Xi2);
vTemp.cross$javajs_util_T3$javajs_util_T3(m, axisUnitVector);
axisUnitVector.add$javajs_util_T3(vTemp);
axisUnitVector.normalize$();
vTemp.sub2$javajs_util_T3$javajs_util_T3(axisUnitVector, a);
return vTemp.length$();
}, 1);

Clazz.newMeth(C$, 'calcAveragePoint$javajs_util_P3$javajs_util_P3$javajs_util_P3', function (pointA, pointB, pointC) {
pointC.set$F$F$F((pointA.x + pointB.x) / 2, (pointA.y + pointB.y) / 2, (pointA.z + pointB.z) / 2);
}, 1);

Clazz.newMeth(C$, 'calcAveragePointN$javajs_util_P3A$I$javajs_util_P3', function (points, nPoints, averagePoint) {
averagePoint.setT$javajs_util_T3(points[0]);
for (var i=1; i < nPoints; i++) averagePoint.add$javajs_util_T3(points[i]);

averagePoint.scale$F(1.0 / nPoints);
}, 1);

Clazz.newMeth(C$, 'transformPoints$javajs_util_Lst$javajs_util_M4$javajs_util_P3', function (vPts, m4, center) {
var v=Clazz.new_($I$(4));
for (var i=0; i < vPts.size$(); i++) {
var pt=$I$(2).newP$javajs_util_T3(vPts.get$I(i));
pt.sub$javajs_util_T3(center);
m4.rotTrans$javajs_util_T3(pt);
pt.add$javajs_util_T3(center);
v.addLast$TV(pt);
}
return v;
}, 1);

Clazz.newMeth(C$, 'isInTetrahedron$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P3$javajs_util_P4$javajs_util_V3$javajs_util_V3$Z', function (pt, ptA, ptB, ptC, ptD, plane, vTemp, vTemp2, fullyEnclosed) {
var b=(C$.distanceToPlane$javajs_util_P4$javajs_util_T3(C$.getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4(ptC, ptD, ptA, vTemp, vTemp2, plane), pt) >= 0 );
if (b != (C$.distanceToPlane$javajs_util_P4$javajs_util_T3(C$.getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4(ptA, ptD, ptB, vTemp, vTemp2, plane), pt) >= 0 ) ) return false;
if (b != (C$.distanceToPlane$javajs_util_P4$javajs_util_T3(C$.getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4(ptB, ptD, ptC, vTemp, vTemp2, plane), pt) >= 0 ) ) return false;
var d=C$.distanceToPlane$javajs_util_P4$javajs_util_T3(C$.getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4(ptA, ptB, ptC, vTemp, vTemp2, plane), pt);
if (fullyEnclosed) return (b == (d >= 0 ) );
var d1=C$.distanceToPlane$javajs_util_P4$javajs_util_T3(plane, ptD);
return d1 * d <= 0  || Math.abs(d1) > Math.abs(d)  ;
}, 1);

Clazz.newMeth(C$, 'getIntersectionPP$javajs_util_P4$javajs_util_P4', function (plane1, plane2) {
var a1=plane1.x;
var b1=plane1.y;
var c1=plane1.z;
var d1=plane1.w;
var a2=plane2.x;
var b2=plane2.y;
var c2=plane2.z;
var d2=plane2.w;
var norm1=$I$(1).new3$F$F$F(a1, b1, c1);
var norm2=$I$(1).new3$F$F$F(a2, b2, c2);
var nxn=Clazz.new_($I$(1));
nxn.cross$javajs_util_T3$javajs_util_T3(norm1, norm2);
var ax=Math.abs(nxn.x);
var ay=Math.abs(nxn.y);
var az=Math.abs(nxn.z);
var x;
var y;
var z;
var diff;
var type=(ax > ay  ? (ax > az  ? 1 : 3) : ay > az  ? 2 : 3);
switch (type) {
case 1:
x=0;
diff=(b1 * c2 - b2 * c1);
if (Math.abs(diff) < 0.01 ) return null;
y=(c1 * d2 - c2 * d1) / diff;
z=(b2 * d1 - d2 * b1) / diff;
break;
case 2:
diff=(a1 * c2 - a2 * c1);
if (Math.abs(diff) < 0.01 ) return null;
x=(c1 * d2 - c2 * d1) / diff;
y=0;
z=(a2 * d1 - d2 * a1) / diff;
break;
case 3:
default:
diff=(a1 * b2 - a2 * b1);
if (Math.abs(diff) < 0.01 ) return null;
x=(b1 * d2 - b2 * d1) / diff;
y=(a2 * d1 - d2 * a1) / diff;
z=0;
}
var list=Clazz.new_($I$(4));
list.addLast$TV($I$(2).new3$F$F$F(x, y, z));
nxn.normalize$();
list.addLast$TV(nxn);
return list;
}, 1);

Clazz.newMeth(C$, 'getIntersection$javajs_util_P3$javajs_util_V3$javajs_util_P4$javajs_util_P3$javajs_util_V3$javajs_util_V3', function (pt1, v, plane, ptRet, tempNorm, vTemp) {
C$.getPlaneProjection$javajs_util_P3$javajs_util_P4$javajs_util_P3$javajs_util_V3(pt1, plane, ptRet, tempNorm);
tempNorm.set$F$F$F(plane.x, plane.y, plane.z);
tempNorm.normalize$();
if (v == null ) v=$I$(1).newV$javajs_util_T3(tempNorm);
var l_dot_n=v.dot$javajs_util_T3(tempNorm);
if (Math.abs(l_dot_n) < 0.01 ) return null;
vTemp.sub2$javajs_util_T3$javajs_util_T3(ptRet, pt1);
ptRet.scaleAdd2$F$javajs_util_T3$javajs_util_T3(vTemp.dot$javajs_util_T3(tempNorm) / l_dot_n, v, pt1);
return ptRet;
}, 1);

Clazz.newMeth(C$, 'calculateQuaternionRotation$javajs_util_P3AA$FA', function (centerAndPoints, retStddev) {
retStddev[1]=NaN;
var q=Clazz.new_($I$(5));
var ptsA=centerAndPoints[0];
var ptsB=centerAndPoints[1];
var nPts=ptsA.length - 1;
if (nPts < 2 || ptsA.length != ptsB.length ) return q;
var Sxx=0;
var Sxy=0;
var Sxz=0;
var Syx=0;
var Syy=0;
var Syz=0;
var Szx=0;
var Szy=0;
var Szz=0;
var ptA=Clazz.new_($I$(2));
var ptB=Clazz.new_($I$(2));
var ptA0=ptsA[0];
var ptB0=ptsB[0];
for (var i=nPts + 1; --i >= 1; ) {
ptA.sub2$javajs_util_T3$javajs_util_T3(ptsA[i], ptA0);
ptB.sub2$javajs_util_T3$javajs_util_T3(ptsB[i], ptB0);
Sxx += ptA.x * ptB.x;
Sxy += ptA.x * ptB.y;
Sxz += ptA.x * ptB.z;
Syx += ptA.y * ptB.x;
Syy += ptA.y * ptB.y;
Syz += ptA.y * ptB.z;
Szx += ptA.z * ptB.x;
Szy += ptA.z * ptB.y;
Szz += ptA.z * ptB.z;
}
retStddev[0]=C$.getRmsd$javajs_util_P3AA$javajs_util_Quat(centerAndPoints, q);
var N=Clazz.array(Double.TYPE, [4, 4]);
N[0][0]=Sxx + Syy + Szz ;
N[0][1]=N[1][0]=Syz - Szy;
N[0][2]=N[2][0]=Szx - Sxz;
N[0][3]=N[3][0]=Sxy - Syx;
N[1][1]=Sxx - Syy - Szz ;
N[1][2]=N[2][1]=Sxy + Syx;
N[1][3]=N[3][1]=Szx + Sxz;
N[2][2]=-Sxx + Syy - Szz;
N[2][3]=N[3][2]=Syz + Szy;
N[3][3]=-Sxx - Syy + Szz;
var v=($I$(6).getInterface$S("javajs.util.Eigen")).setM$DAA(N).getEigenvectorsFloatTransposed$()[3];
q=$I$(5).newP4$javajs_util_P4($I$(7).new4$F$F$F$F(v[1], v[2], v[3], v[0]));
retStddev[1]=C$.getRmsd$javajs_util_P3AA$javajs_util_Quat(centerAndPoints, q);
return q;
}, 1);

Clazz.newMeth(C$, 'getTransformMatrix4$javajs_util_Lst$javajs_util_Lst$javajs_util_M4$javajs_util_P3', function (ptsA, ptsB, m, centerA) {
var cptsA=C$.getCenterAndPoints$javajs_util_Lst(ptsA);
var cptsB=C$.getCenterAndPoints$javajs_util_Lst(ptsB);
var retStddev=Clazz.array(Float.TYPE, [2]);
var q=C$.calculateQuaternionRotation$javajs_util_P3AA$FA(Clazz.array($I$(2), -2, [cptsA, cptsB]), retStddev);
var r=q.getMatrix$();
if (centerA == null ) r.rotate$javajs_util_T3(cptsA[0]);
 else centerA.setT$javajs_util_T3(cptsA[0]);
var t=$I$(1).newVsub$javajs_util_T3$javajs_util_T3(cptsB[0], cptsA[0]);
m.setMV$javajs_util_M3$javajs_util_T3(r, t);
return retStddev[1];
}, 1);

Clazz.newMeth(C$, 'getCenterAndPoints$javajs_util_Lst', function (vPts) {
var n=vPts.size$();
var pts=Clazz.array($I$(2), [n + 1]);
pts[0]=Clazz.new_($I$(2));
if (n > 0) {
for (var i=0; i < n; i++) {
pts[0].add$javajs_util_T3(pts[i + 1]=vPts.get$I(i));
}
pts[0].scale$F(1.0 / n);
}return pts;
}, 1);

Clazz.newMeth(C$, 'getRmsd$javajs_util_P3AA$javajs_util_Quat', function (centerAndPoints, q) {
var sum2=0;
var ptsA=centerAndPoints[0];
var ptsB=centerAndPoints[1];
var cA=ptsA[0];
var cB=ptsB[0];
var n=ptsA.length - 1;
var ptAnew=Clazz.new_($I$(2));
for (var i=n + 1; --i >= 1; ) {
ptAnew.sub2$javajs_util_T3$javajs_util_T3(ptsA[i], cA);
q.transform2$javajs_util_T3$javajs_util_T3(ptAnew, ptAnew).add$javajs_util_T3(cB);
sum2 += ptAnew.distanceSquared$javajs_util_T3(ptsB[i]);
}
return Math.sqrt(sum2 / n);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
