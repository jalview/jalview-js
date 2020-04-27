(function(){var P$=Clazz.newPackage("org.jmol.jvxl.readers"),p$1={},I$=[[0,'javajs.util.P3','java.util.Random','javajs.util.SB','org.jmol.jvxl.data.JvxlCoder','org.jmol.util.Logger','javajs.util.V3','javajs.util.Measure','org.jmol.util.MeshSurface']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IsoShapeReader", null, 'org.jmol.jvxl.readers.VolumeDataReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.psi_n=2;
this.psi_l=1;
this.psi_m=1;
this.psi_Znuc=1;
this.allowNegative=true;
this.rfactor=Clazz.array(Double.TYPE, [10]);
this.pfactor=Clazz.array(Double.TYPE, [10]);
this.ptPsi=Clazz.new_($I$(1,1));
this.psi_normalization=1 / (2 * Math.sqrt(3.141592653589793));
},1);

C$.$fields$=[['Z',['allowNegative','surfaceDone'],'D',['psi_normalization','aoMax','aoMax2','angMax2','rnl'],'F',['psi_Znuc','sphere_radiusAngstroms','radius','planeRadius'],'I',['psi_n','psi_l','psi_m','monteCarloCount','nTries'],'O',['random','java.util.Random','rfactor','double[]','+pfactor','ptPsi','javajs.util.P3','planeU','javajs.util.V3','+planeV','planeCenter','javajs.util.P3']]
,['O',['fact','float[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'init$org_jmol_jvxl_readers_SurfaceGenerator', function (sg) {
this.initVDR$org_jmol_jvxl_readers_SurfaceGenerator(sg);
var o=sg.getReaderData$();
if (Clazz.instanceOf(o, "java.lang.Float")) {
this.sphere_radiusAngstroms=(o).floatValue$();
} else {
this.sphere_radiusAngstroms=0;
var data=o;
this.psi_n=(data[0]|0);
this.psi_l=(data[1]|0);
this.psi_m=(data[2]|0);
this.psi_Znuc=data[3];
this.monteCarloCount=(data[4]|0);
}});

Clazz.newMeth(C$, 'setup$Z', function (isMapData) {
this.volumeData.sr=this;
this.precalculateVoxelData=false;
this.isQuiet=true;
if (Float.isNaN$F(this.center.x)) this.center.set$F$F$F(0, 0, 0);
var type="sphere";
switch (this.dataType) {
case 1294:
p$1.calcFactors$I$I$I.apply(this, [this.psi_n, this.psi_l, this.psi_m]);
p$1.autoScaleOrbital.apply(this, []);
this.ptsPerAngstrom=5.0;
this.maxGrid=40;
type="hydrogen-like orbital";
if (this.monteCarloCount > 0) {
this.vertexDataOnly=true;
this.random=Clazz.new_($I$(2,1).c$$J,[this.params.randomSeed]);
} else {
this.isQuiet=false;
}break;
case 70:
case 71:
type="lp";
this.vertexDataOnly=true;
this.radius=0;
this.ptsPerAngstrom=1;
this.maxGrid=1;
break;
case 68:
this.allowNegative=false;
p$1.calcFactors$I$I$I.apply(this, [this.psi_n, this.psi_l, this.psi_m]);
this.psi_normalization=1;
this.radius=1.1 * this.eccentricityRatio * this.eccentricityScale ;
if (this.eccentricityScale > 0  && this.eccentricityScale < 1  ) this.radius /= this.eccentricityScale;
this.ptsPerAngstrom=10.0;
this.maxGrid=21;
type="lobe";
break;
case 67:
type="ellipsoid(thermal)";
this.radius=3.0 * this.sphere_radiusAngstroms;
this.ptsPerAngstrom=10.0;
this.maxGrid=22;
break;
case 74:
if (!isMapData && this.monteCarloCount == 0 ) break;
type="geodesic";
case 66:
if (type.equals$O("sphere")) type="ellipsoid";
case 65:
default:
this.radius=1.2 * this.sphere_radiusAngstroms * this.eccentricityScale ;
this.ptsPerAngstrom=10.0;
this.maxGrid=22;
break;
}
if (this.monteCarloCount == 0) this.setVolumeData$();
p$1.setHeader$S.apply(this, [type + "\n"]);
});

Clazz.newMeth(C$, 'setVolumeData$', function () {
this.setVoxelRange$I$F$F$F$I$F(0, -this.radius, this.radius, this.ptsPerAngstrom, this.maxGrid, 0);
this.setVoxelRange$I$F$F$F$I$F(1, -this.radius, this.radius, this.ptsPerAngstrom, this.maxGrid, 0);
if (this.allowNegative) this.setVoxelRange$I$F$F$F$I$F(2, -this.radius, this.radius, this.ptsPerAngstrom, this.maxGrid, 0);
 else this.setVoxelRange$I$F$F$F$I$F(2, 0, this.radius / this.eccentricityRatio, this.ptsPerAngstrom, this.maxGrid, 0);
});

Clazz.newMeth(C$, 'getValue$I$I$I$I', function (x, y, z, ptyz) {
this.volumeData.voxelPtToXYZ$I$I$I$javajs_util_T3(x, y, z, this.ptPsi);
return this.getValueAtPoint$javajs_util_T3$Z(this.ptPsi, false);
});

Clazz.newMeth(C$, 'getValueAtPoint$javajs_util_T3$Z', function (pt, getSource) {
this.ptTemp.sub2$javajs_util_T3$javajs_util_T3(pt, this.center);
if (this.isEccentric) this.eccentricityMatrixInverse.rotate$javajs_util_T3(this.ptTemp);
if (this.isAnisotropic) {
this.ptTemp.x /= this.anisotropy[0];
this.ptTemp.y /= this.anisotropy[1];
this.ptTemp.z /= this.anisotropy[2];
}if (this.sphere_radiusAngstroms > 0 ) {
if (this.params.anisoB != null ) {
return this.sphere_radiusAngstroms - Math.sqrt(this.ptTemp.x * this.ptTemp.x + this.ptTemp.y * this.ptTemp.y + this.ptTemp.z * this.ptTemp.z) / (Math.sqrt(this.params.anisoB[0] * this.ptTemp.x * this.ptTemp.x  + this.params.anisoB[1] * this.ptTemp.y * this.ptTemp.y  + this.params.anisoB[2] * this.ptTemp.z * this.ptTemp.z  + this.params.anisoB[3] * this.ptTemp.x * this.ptTemp.y  + this.params.anisoB[4] * this.ptTemp.x * this.ptTemp.z  + this.params.anisoB[5] * this.ptTemp.y * this.ptTemp.z ));
}return this.sphere_radiusAngstroms - Math.sqrt(this.ptTemp.x * this.ptTemp.x + this.ptTemp.y * this.ptTemp.y + this.ptTemp.z * this.ptTemp.z);
}var value=p$1.hydrogenAtomPsi$javajs_util_P3.apply(this, [this.ptTemp]);
if (Math.abs(value) < 1.0E-7 ) value=0;
return (this.allowNegative || value >= 0   ? value : 0);
});

Clazz.newMeth(C$, 'setHeader$S', function (line1) {
this.jvxlFileHeaderBuffer=Clazz.new_($I$(3,1));
this.jvxlFileHeaderBuffer.append$S(line1);
if (this.sphere_radiusAngstroms > 0 ) {
this.jvxlFileHeaderBuffer.append$S(" rad=").appendF$F(this.sphere_radiusAngstroms);
} else {
this.jvxlFileHeaderBuffer.append$S(" n=").appendI$I(this.psi_n).append$S(", l=").appendI$I(this.psi_l).append$S(", m=").appendI$I(this.psi_m).append$S(" Znuc=").appendF$F(this.psi_Znuc).append$S(" res=").appendF$F(this.ptsPerAngstrom).append$S(" rad=").appendF$F(this.radius);
}this.jvxlFileHeaderBuffer.append$S(this.isAnisotropic ? " anisotropy=(" + new Float(this.anisotropy[0]).toString() + "," + new Float(this.anisotropy[1]).toString() + "," + new Float(this.anisotropy[2]).toString() + ")\n"  : "\n");
$I$(4).jvxlCreateHeaderWithoutTitleOrAtoms$org_jmol_jvxl_data_VolumeData$javajs_util_SB(this.volumeData, this.jvxlFileHeaderBuffer);
}, p$1);

Clazz.newMeth(C$, 'calcFactors$I$I$I', function (n, el, m) {
var abm=Math.abs(m);
var NnlLnl=Math.pow(2 * this.psi_Znuc / n / 0.52918, 1.5) * Math.sqrt(C$.fact[n - el - 1 ] * C$.fact[n + el] / 2 / n);
var Plm=Math.pow(2, -el) * C$.fact[el] * C$.fact[el + abm] * Math.sqrt((2 * el + 1) * C$.fact[el - abm] / 2 / C$.fact[el + abm]) ;
for (var p=0; p <= n - el - 1 ; p++) this.rfactor[p]=NnlLnl / C$.fact[p] / C$.fact[n - el - p - 1 ] / C$.fact[2 * el + p + 1] ;

for (var p=abm; p <= el; p++) this.pfactor[p]=Math.pow(-1, el - p) * Plm / C$.fact[p] / C$.fact[el + abm - p] / C$.fact[el - p] / C$.fact[p - abm];

}, p$1);

Clazz.newMeth(C$, 'autoScaleOrbital', function () {
this.aoMax=0;
var rmax=0;
this.aoMax2=0;
var rmax2=0;
var d;
if (this.params.distance == 0 ) {
for (var ir=0; ir < 1000; ir++) {
var r=ir / 10.0;
d=Math.abs(p$1.radialPart$D.apply(this, [r]));
if ($I$(5).debugging) (function(a,f){return f.apply(null,a)})(["R\t" + new Float(r).toString() + "\t" + new Double(d).toString() ],$I$(5).debug$S);
if (d >= this.aoMax ) {
rmax=r;
this.aoMax=d;
}d *= d * r * r ;
if (d >= this.aoMax2 ) {
rmax2=r;
this.aoMax2=d;
}}
} else {
this.aoMax=Math.abs(p$1.radialPart$D.apply(this, [this.params.distance]));
this.aoMax2=this.aoMax * this.aoMax * this.params.distance * this.params.distance ;
rmax=rmax2=this.params.distance;
}(function(a,f){return f.apply(null,a)})(["Atomic Orbital radial max = " + new Double(this.aoMax).toString() + " at " + new Float(rmax).toString() ],$I$(5).info$S);
(function(a,f){return f.apply(null,a)})(["Atomic Orbital r2R2 max = " + new Double(this.aoMax2).toString() + " at " + new Float(rmax2).toString() ],$I$(5).info$S);
if (this.monteCarloCount >= 0) {
this.angMax2=0;
for (var ang=0; ang < 180 ; ang += 1) {
var th=ang / (6.283185307179586);
d=Math.abs(p$1.angularPart$D$D$I.apply(this, [th, 0, 0]));
if ($I$(5).debugging) (function(a,f){return f.apply(null,a)})(["A\t" + new Float(ang).toString() + "\t" + new Double(d).toString() ],$I$(5).debug$S);
if (d > this.angMax2 ) {
this.angMax2=d;
}}
this.angMax2 *= this.angMax2;
if (this.psi_m != 0) {
this.angMax2 *= 2;
}(function(a,f){return f.apply(null,a)})(["Atomic Orbital phi^2theta^2 max = " + new Double(this.angMax2).toString()],$I$(5).info$S);
}var min;
if (this.params.cutoff == 0 ) {
min=(this.monteCarloCount > 0 ? this.aoMax * 0.01 : 0.01);
} else if (this.monteCarloCount > 0) {
this.aoMax=Math.abs(this.params.cutoff);
min=this.aoMax * 0.01;
} else {
min=Math.abs(this.params.cutoff / 2);
if (this.params.isSquared) min=Math.sqrt(min / 2);
}var r0=0;
for (var ir=1000; --ir >= 0; ir-=1) {
var r=ir / 10.0;
d=Math.abs(p$1.radialPart$D.apply(this, [r]));
if (d >= min ) {
r0=r;
break;
}}
this.radius=r0 + (this.monteCarloCount == 0 ? 1 : 0);
if (this.isAnisotropic) {
var aMax=0;
for (var i=3; --i >= 0; ) if (this.anisotropy[i] > aMax ) aMax=this.anisotropy[i];

this.radius *= aMax;
}(function(a,f){return f.apply(null,a)})(["Atomic Orbital radial extent set to " + new Float(this.radius).toString() + " for cutoff " + new Float(this.params.cutoff).toString() ],$I$(5).info$S);
if (this.params.thePlane != null  && this.monteCarloCount > 0 ) {
this.planeCenter=Clazz.new_($I$(1,1));
this.planeU=Clazz.new_($I$(6,1));
$I$(7).getPlaneProjection$javajs_util_P3$javajs_util_P4$javajs_util_P3$javajs_util_V3(this.center, this.params.thePlane, this.planeCenter, this.planeU);
this.planeU.set$F$F$F(this.params.thePlane.x, this.params.thePlane.y, this.params.thePlane.z);
this.planeU.normalize$();
this.planeV=$I$(6).new3$F$F$F(1, 0, 0);
if (Math.abs(this.planeU.dot$javajs_util_T3(this.planeV)) > 0.5 ) this.planeV.set$F$F$F(0, 1, 0);
this.planeV.cross$javajs_util_T3$javajs_util_T3(this.planeU, this.planeV);
this.planeU.cross$javajs_util_T3$javajs_util_T3(this.planeU, this.planeV);
this.aoMax2=0;
d=this.center.distance$javajs_util_T3(this.planeCenter);
if (d < this.radius ) {
this.planeRadius=Math.sqrt(this.radius * this.radius - d * d);
var ir=((this.planeRadius * 10)|0);
for (var ix=-ir; ix <= ir; ix++) for (var iy=-ir; iy <= ir; iy++) {
this.ptPsi.setT$javajs_util_T3(this.planeU);
this.ptPsi.scale$F(ix / 10.0);
this.ptPsi.scaleAdd2$F$javajs_util_T3$javajs_util_T3(iy / 10.0, this.planeV, this.ptPsi);
d=p$1.hydrogenAtomPsi$javajs_util_P3.apply(this, [this.ptPsi]);
d=Math.abs(p$1.hydrogenAtomPsi$javajs_util_P3.apply(this, [this.ptPsi]));
if (d > this.aoMax2 ) this.aoMax2=d;
}

if (this.aoMax2 < 0.001 ) this.aoMax2=0;
 else this.aoMax2 *= this.aoMax2;
}}}, p$1);

Clazz.newMeth(C$, 'radialPart$D', function (r) {
var rho=2.0 * this.psi_Znuc * r  / this.psi_n / 0.52918;
var sum=0;
for (var p=0; p <= this.psi_n - this.psi_l - 1 ; p++) sum += Math.pow(-rho, p) * this.rfactor[p];

return Math.exp(-rho / 2) * Math.pow(rho, this.psi_l) * sum ;
}, p$1);

Clazz.newMeth(C$, 'hydrogenAtomPsi$javajs_util_P3', function (pt) {
var x2y2=pt.x * pt.x + pt.y * pt.y;
this.rnl=p$1.radialPart$D.apply(this, [Math.sqrt(x2y2 + pt.z * pt.z)]);
var ph=Math.atan2(pt.y, pt.x);
var th=Math.atan2(Math.sqrt(x2y2), pt.z);
var theta_lm_phi_m=p$1.angularPart$D$D$I.apply(this, [th, ph, this.psi_m]);
return this.rnl * theta_lm_phi_m;
}, p$1);

Clazz.newMeth(C$, 'angularPart$D$D$I', function (th, ph, m) {
var cth=Math.cos(th);
var sth=Math.sin(th);
var isS=(m == 0 && this.psi_l == 0 );
var abm=Math.abs(m);
var sum=0;
if (isS) sum=this.pfactor[0];
 else for (var p=abm; p <= this.psi_l; p++) sum += (p == abm ? 1 : Math.pow(1 + cth, p - abm)) * (p == this.psi_l ? 1 : Math.pow(1 - cth, this.psi_l - p)) * this.pfactor[p] ;

var theta_lm=(abm == 0 ? sum : Math.abs(Math.pow(sth, abm)) * sum);
var phi_m;
if (m == 0) phi_m=1;
 else if (m > 0) phi_m=Math.cos(m * ph) * 1.414214;
 else phi_m=Math.sin(m * ph) * 1.414214;
return (Math.abs(phi_m) < 1.0E-10  ? 0 : theta_lm * phi_m * this.psi_normalization );
}, p$1);

Clazz.newMeth(C$, 'createMonteCarloOrbital', function () {
if (this.surfaceDone || this.aoMax2 == 0   || this.params.distance > this.radius  ) return;
var isS=(this.psi_m == 0 && this.psi_l == 0 );
this.surfaceDone=true;
var value;
var rave=0;
this.nTries=0;
for (var i=0; i < this.monteCarloCount; this.nTries++) {
if (this.params.thePlane == null ) {
var r;
if (this.params.distance == 0 ) {
r=this.random.nextDouble$() * this.radius;
var rp=r * p$1.radialPart$D.apply(this, [r]);
if (rp * rp <= this.aoMax2 * this.random.nextDouble$() ) continue;
} else {
r=this.params.distance;
}var u=this.random.nextDouble$();
var v=this.random.nextDouble$();
var theta=2 * 3.141592653589793 * u ;
var cosPhi=2 * v - 1;
if (!isS) {
var phi=Math.acos(cosPhi);
var ap=p$1.angularPart$D$D$I.apply(this, [phi, theta, this.psi_m]);
if (ap * ap <= this.angMax2 * this.random.nextDouble$() ) continue;
}var sinPhi=Math.sin(Math.acos(cosPhi));
var x=r * Math.cos(theta) * sinPhi ;
var y=r * Math.sin(theta) * sinPhi ;
var z=r * cosPhi;
this.ptPsi.set$F$F$F(x, y, z);
this.ptPsi.add$javajs_util_T3(this.center);
value=this.getValueAtPoint$javajs_util_T3$Z(this.ptPsi, false);
} else {
this.ptPsi.setT$javajs_util_T3(this.planeU);
this.ptPsi.scale$F(this.random.nextFloat$() * this.planeRadius * 2  - this.planeRadius);
this.ptPsi.scaleAdd2$F$javajs_util_T3$javajs_util_T3(this.random.nextFloat$() * this.planeRadius * 2  - this.planeRadius, this.planeV, this.ptPsi);
this.ptPsi.add$javajs_util_T3(this.planeCenter);
value=this.getValueAtPoint$javajs_util_T3$Z(this.ptPsi, false);
if (value * value <= this.aoMax2 * this.random.nextFloat$() ) continue;
}rave += this.ptPsi.distance$javajs_util_T3(this.center);
this.addVC$javajs_util_T3$F$I$Z(this.ptPsi, value, 0, true);
i++;
}
if (this.params.distance == 0 ) (function(a,f){return f.apply(null,a)})(["Atomic Orbital mean radius = " + new Float(rave / this.monteCarloCount).toString() + " for " + this.monteCarloCount + " points (" + this.nTries + " tries)"],$I$(5).info$S);
}, p$1);

Clazz.newMeth(C$, 'readSurfaceData$Z', function (isMapData) {
switch (this.params.dataType) {
case 1294:
if (this.monteCarloCount <= 0) break;
p$1.createMonteCarloOrbital.apply(this, []);
return;
case 70:
case 71:
this.ptPsi.set$F$F$F(0, 0, this.eccentricityScale / 2);
this.eccentricityMatrixInverse.rotate$javajs_util_T3(this.ptPsi);
this.ptPsi.add$javajs_util_T3(this.center);
this.addVC$javajs_util_T3$F$I$Z(this.center, 0, 0, true);
this.addVC$javajs_util_T3$F$I$Z(this.ptPsi, 0, 0, true);
this.addTriangleCheck$I$I$I$I$I$Z$I(0, 0, 0, 0, 0, false, 0);
return;
case 74:
if (!isMapData) {
p$1.createGeodesic.apply(this, []);
return;
}}
this.readSurfaceDataVDR$Z(isMapData);
});

Clazz.newMeth(C$, 'createGeodesic', function () {
var ms=$I$(8).getSphereData$I(4);
var pts=ms.altVertices;
for (var i=0; i < pts.length; i++) {
var pt=$I$(1).newP$javajs_util_T3(pts[i]);
pt.scale$F(this.params.distance);
pt.add$javajs_util_T3(this.center);
this.addVC$javajs_util_T3$F$I$Z(pt, 0, i, false);
}
var faces=ms.pis;
for (var i=0; i < faces.length; i++) {
var face=faces[i];
this.addTriangleCheck$I$I$I$I$I$Z$I(face[0], face[1], face[2], 7, 7, false, 0);
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.fact=Clazz.array(Float.TYPE, [20]);
{
C$.fact[0]=1;
for (var i=1; i < 20; i++) C$.fact[i]=C$.fact[i - 1] * i;

};
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:10 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
