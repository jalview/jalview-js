(function(){var P$=Clazz.newPackage("org.jmol.quantum"),p$1={},I$=[[0,'javajs.util.AU','javajs.util.BS','org.jmol.util.Logger','org.jmol.util.Escape','org.jmol.util.BSUtil','javajs.util.Eigen']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NciCalculation", null, 'org.jmol.quantum.QuantumPlaneCalculation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.DEFAULT_RHOPLOT_SCF=0.05;
this.DEFAULT_RHOPLOT_PRO=0.07;
this.DEFAULT_RHOPARAM=0.95;
this.dataScaling=1;
this.eigenValues=Clazz.array(Float.TYPE, [3]);
this.yzPlanesRho=$I$(1).newFloat2$I(2);
},1);

C$.$fields$=[['Z',['havePoints','isReducedDensity','dataIsReducedDensity','isPromolecular','noValuesAtAll','useAbsolute'],'D',['DEFAULT_RHOPLOT_SCF','DEFAULT_RHOPLOT_PRO','DEFAULT_RHOPARAM','rhoMin','rhoPlot','rhoParam','grad','gxTemp','gyTemp','gzTemp','gxxTemp','gyyTemp','gzzTemp','gxyTemp','gyzTemp','gxzTemp','test1'],'F',['dataScaling'],'I',['type','nMolecules','yzCount'],'O',['eigen','javajs.util.Eigen','rhoMolecules','double[]','bsOK','javajs.util.BS','hess','double[][]','eigenValues','float[]','yzPlanesRaw','float[][]','+yzPlanesRho','p0','float[]','+p1','+p2']]
,['D',['c','rpower'],'O',['coef1','double[]','+coef2','+coef3','+zeta1','+zeta2','+zeta3','+dMax']]]

Clazz.newMeth(C$, 'getNoValue$', function () {
return 100.0;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setupCalculation$org_jmol_jvxl_data_VolumeData$javajs_util_BS$javajs_util_BS$javajs_util_BSA$javajs_util_T3A$I$Z$javajs_util_T3A$FA$I', function (volumeData, bsSelected, bsExcluded, bsMolecules, atomCoordAngstroms, firstAtomOffset, isReducedDensity, points, parameters, testFlags) {
this.useAbsolute=(testFlags == 2);
this.bsExcluded=bsExcluded;
var bsLigand=Clazz.new_($I$(2,1));
bsLigand.or$javajs_util_BS(bsSelected);
if (bsExcluded != null ) {
bsLigand.andNot$javajs_util_BS(bsExcluded);
}this.isPromolecular=(firstAtomOffset >= 0);
this.havePoints=(points != null );
this.isReducedDensity=isReducedDensity;
if (parameters != null ) (function(a,f){return f.apply(null,a)})(["NCI calculation parameters = " + $I$(4).eAF$FA(parameters)],$I$(3).info$S);
this.type=(C$.getParameter$FA$I$D$S(parameters, 1, 0, "type")|0);
if (this.type != 0 && bsMolecules == null  ) this.type=0;
this.rhoMin=C$.getParameter$FA$I$D$S(parameters, 2, 1.0E-5, "rhoMin");
this.rhoPlot=C$.getParameter$FA$I$D$S(parameters, 3, (this.isPromolecular ? this.DEFAULT_RHOPLOT_PRO : this.DEFAULT_RHOPLOT_SCF), "rhoPlot");
this.rhoParam=C$.getParameter$FA$I$D$S(parameters, 4, this.DEFAULT_RHOPARAM, "rhoParam");
this.dataScaling=C$.getParameter$FA$I$D$S(parameters, 5, 1, "dataScaling");
this.dataIsReducedDensity=(this.type < 0);
var stype;
switch (this.type) {
case 0:
default:
this.type=0;
stype="all";
bsMolecules=null;
break;
case -1:
case 1:
this.type=1;
stype="intramolecular";
break;
case -2:
case 2:
this.type=2;
stype="intermolecular";
break;
case 3:
stype="ligand";
break;
}
this.nMolecules=0;
if (!this.isPromolecular && this.type == 0 ) atomCoordAngstroms=null;
(function(a,f){return f.apply(null,a)})(["NCI calculation type = " + (this.isPromolecular ? "promolecular " : "SCF(CUBE) ") + stype ],$I$(3).info$S);
this.voxelData=volumeData.getVoxelData$();
this.countsXYZ=volumeData.getVoxelCounts$();
this.initialize$I$I$I$javajs_util_T3A(this.countsXYZ[0], this.countsXYZ[1], this.countsXYZ[2], points);
if (this.havePoints) {
this.xMin=this.yMin=this.zMin=0;
this.xMax=this.yMax=this.zMax=points.length;
}this.setupCoordinates$FA$FA$javajs_util_BS$javajs_util_T3A$org_jmol_modelset_AtomA$javajs_util_T3A$Z(volumeData.getOriginFloat$(), volumeData.getVolumetricVectorLengths$(), bsSelected, atomCoordAngstroms, null, points, true);
if (this.qmAtoms != null ) {
var qmMap=Clazz.array(Integer.TYPE, [bsSelected.length$()]);
for (var i=this.qmAtoms.length; --i >= 0; ) {
qmMap[this.qmAtoms[i].index]=i;
if (this.qmAtoms[i].znuc < 1) {
this.qmAtoms[i]=null;
} else if (this.qmAtoms[i].znuc > 18) {
this.qmAtoms[i].znuc=18;
(function(a,f){return f.apply(null,a)})(["NCI calculation just setting nuclear charge for " + this.qmAtoms[i].atom + " to 18 (argon)" ],$I$(3).info$S);
}}
this.nMolecules=0;
if (this.type != 0) {
for (var i=0; i < bsMolecules.length; i++) {
var bs=$I$(5).copy$javajs_util_BS(bsMolecules[i]);
bs.and$javajs_util_BS(bsSelected);
if (bs.nextSetBit$I(0) < 0) continue;
for (var j=bs.nextSetBit$I(0); j >= 0; j=bs.nextSetBit$I(j + 1)) this.qmAtoms[qmMap[j]].iMolecule=this.nMolecules;

this.nMolecules++;
(function(a,f){return f.apply(null,a)})(["Molecule " + (this.nMolecules) + " (" + bs.cardinality$() + " atoms): " + $I$(4).eBS$javajs_util_BS(bs) ],$I$(3).info$S);
}
this.rhoMolecules=Clazz.array(Double.TYPE, [this.nMolecules]);
}if (this.nMolecules == 0) this.nMolecules=1;
if (this.nMolecules == 1) {
this.noValuesAtAll=(this.type != 0 && this.type != 1 );
this.type=0;
}if (!this.isPromolecular) p$1.getBsOK.apply(this, []);
}if (!isReducedDensity || !this.isPromolecular ) p$1.initializeEigen.apply(this, []);
this.doDebug=($I$(3).debugging);
return true;
});

Clazz.newMeth(C$, 'getParameter$FA$I$D$S', function (parameters, i, def, name) {
var param=(parameters == null  || parameters.length < i + 1  ? 0 : parameters[i]);
if (param == 0 ) param=def;
(function(a,f){return f.apply(null,a)})(["NCI calculation parameters[" + i + "] (" + name + ") = " + new Double(param).toString() ],$I$(3).info$S);
return param;
}, 1);

Clazz.newMeth(C$, 'getBsOK', function () {
if (this.noValuesAtAll || this.nMolecules == 1 ) return;
this.bsOK=$I$(2).newN$I(this.nX * this.nY * this.nZ );
this.setXYZBohr$javajs_util_T3A(null);
for (var ix=0, index=0; ix < this.countsXYZ[0]; ix++) for (var iy=0; iy < this.countsXYZ[1]; iy++) for (var iz=0; iz < this.countsXYZ[2]; index++, iz++) p$1.processAtoms$I$I$I$I.apply(this, [ix, iy, iz, index]);



(function(a,f){return f.apply(null,a)})(["NCI calculation SCF " + (this.type == 1 ? "intra" : "inter") + "molecular grid points = " + this.bsOK.cardinality$() ],$I$(3).info$S);
}, p$1);

Clazz.newMeth(C$, 'createCube$', function () {
this.setXYZBohr$javajs_util_T3A(this.points);
this.process$();
});

Clazz.newMeth(C$, 'initializeOnePoint$', function () {
if (this.eigen == null ) p$1.initializeEigen.apply(this, []);
this.isReducedDensity=false;
this.initializeOnePointQC$();
});

Clazz.newMeth(C$, 'initializeEigen', function () {
this.eigen=Clazz.new_($I$(6,1)).set$I(3);
this.hess=Clazz.array(Double.TYPE, [3, 3]);
}, p$1);

Clazz.newMeth(C$, 'getPlane$I$FA', function (ix, yzPlane) {
if (this.noValuesAtAll) {
for (var j=0; j < this.yzCount; j++) yzPlane[j]=NaN;

return;
}this.isReducedDensity=true;
this.initialize$I$I$I$javajs_util_T3A(this.countsXYZ[0], this.countsXYZ[1], this.countsXYZ[2], null);
this.setXYZBohr$javajs_util_T3A(null);
var index=ix * this.yzCount;
for (var iy=0, i=0; iy < this.countsXYZ[1]; iy++) for (var iz=0; iz < this.countsXYZ[2]; i++, iz++) if (this.bsOK == null  || this.bsOK.get$I(index + i) ) yzPlane[i]=p$1.getValue$D$Z.apply(this, [p$1.processAtoms$I$I$I$I.apply(this, [ix, iy, iz, -1]), this.isReducedDensity]);
 else yzPlane[i]=NaN;


});

Clazz.newMeth(C$, 'process$', function () {
if (this.noValuesAtAll) return;
for (var ix=this.xMax; --ix >= this.xMin; ) {
for (var iy=this.yMin; iy < this.yMax; iy++) {
var vd=this.voxelData[ix][(this.havePoints ? 0 : iy)];
for (var iz=this.zMin; iz < this.zMax; iz++) vd[(this.havePoints ? 0 : iz)]=p$1.getValue$D$Z.apply(this, [p$1.processAtoms$I$I$I$I.apply(this, [ix, iy, iz, -1]), this.isReducedDensity]);

}
}
});

Clazz.newMeth(C$, 'getValue$D$Z', function (rho, isReducedDensity) {
var s;
if (rho == 100.0 ) return NaN;
if (isReducedDensity) {
s=C$.c * this.grad * Math.pow(rho, C$.rpower) ;
} else if (this.useAbsolute) {
s=rho;
} else {
this.hess[0][0]=this.gxxTemp;
this.hess[1][0]=this.hess[0][1]=this.gxyTemp;
this.hess[2][0]=this.hess[0][2]=this.gxzTemp;
this.hess[1][1]=this.gyyTemp;
this.hess[1][2]=this.hess[2][1]=this.gyzTemp;
this.hess[2][2]=this.gzzTemp;
this.eigen.calc$DAA(this.hess);
this.eigen.fillFloatArrays$javajs_util_V3A$FA(null, this.eigenValues);
s=(this.eigenValues[1] < 0  ? -rho : rho);
}return s;
}, p$1);

Clazz.newMeth(C$, 'processAtoms$I$I$I$I', function (ix, iy, iz, index) {
var rho=0;
if (this.isReducedDensity) {
if (this.isPromolecular) this.gxTemp=this.gyTemp=this.gzTemp=0;
if (this.type != 0) for (var i=this.nMolecules; --i >= 0; ) this.rhoMolecules[i]=0;

} else {
this.gxxTemp=this.gyyTemp=this.gzzTemp=this.gxyTemp=this.gyzTemp=this.gxzTemp=0;
}for (var i=this.qmAtoms.length; --i >= 0; ) {
var znuc=this.qmAtoms[i].znuc;
var x=this.xBohr[ix] - this.qmAtoms[i].x;
var y=this.yBohr[iy] - this.qmAtoms[i].y;
var z=this.zBohr[iz] - this.qmAtoms[i].z;
if (Math.abs(x) > C$.dMax[znuc]  || Math.abs(y) > C$.dMax[znuc]   || Math.abs(z) > C$.dMax[znuc]  ) continue;
var r=Math.sqrt(x * x + y * y + z * z);
var z1=C$.zeta1[znuc];
var z2=C$.zeta2[znuc];
var z3=C$.zeta3[znuc];
var ce1=C$.coef1[znuc] * Math.exp(-r / z1);
var ce2=C$.coef2[znuc] * Math.exp(-r / z2);
var ce3=C$.coef3[znuc] * Math.exp(-r / z3);
var rhoAtom=ce1 + ce2 + ce3 ;
rho += rhoAtom;
if (rho > this.rhoPlot  || rho < this.rhoMin  ) return 100.0;
if (this.isReducedDensity) {
if (this.type != 0) this.rhoMolecules[this.qmAtoms[i].iMolecule] += rhoAtom;
if (this.isPromolecular) {
var fac1r=(ce1 / z1 + ce2 / z2 + ce3 / z3) / r;
this.gxTemp -= fac1r * x;
this.gyTemp -= fac1r * y;
this.gzTemp -= fac1r * z;
}} else {
x /= r;
y /= r;
z /= r;
var fac1r=(ce1 / z1 + ce2 / z2 + ce3 / z3) / r;
var fr2=fac1r + (ce1 / z1 / z1  + ce2 / z2 / z2  + ce3 / z3 / z3 );
this.gxxTemp += fr2 * x * x  - fac1r;
this.gyyTemp += fr2 * y * y  - fac1r;
this.gzzTemp += fr2 * z * z  - fac1r;
this.gxyTemp += fr2 * x * y ;
this.gxzTemp += fr2 * x * z ;
this.gyzTemp += fr2 * y * z ;
}}
if (this.isReducedDensity) {
switch (this.type) {
case 1:
case 2:
var isIntra=false;
var rhocut2=this.rhoParam * rho;
for (var i=0; i < this.nMolecules; i++) if (this.rhoMolecules[i] >= rhocut2 ) {
isIntra=true;
break;
}
if ((this.type == 1) != isIntra ) return 100.0;
if (index >= 0) {
this.bsOK.set$I(index);
return 0;
}break;
case 3:
break;
default:
break;
}
if (this.useAbsolute) this.grad=this.gxTemp + this.gyTemp + this.gzTemp ;
 else this.grad=Math.sqrt(this.gxTemp * this.gxTemp + this.gyTemp * this.gyTemp + this.gzTemp * this.gzTemp);
}return rho;
}, p$1);

Clazz.newMeth(C$, 'setPlanes$FAA', function (planes) {
this.yzPlanesRaw=planes;
this.yzCount=this.nY * this.nZ;
});

Clazz.newMeth(C$, 'calcPlane$I$FA', function (x, plane) {
this.yzPlanesRho[0]=this.yzPlanesRho[1];
this.yzPlanesRho[1]=plane;
if (this.noValuesAtAll) {
for (var j=0; j < this.yzCount; j++) plane[j]=NaN;

return;
}var i0=0;
if (this.dataIsReducedDensity) {
this.p1=plane;
} else {
i0=(this.yzPlanesRho[0] == null  ? 0 : 1);
this.p0=this.yzPlanesRaw[i0++];
this.p1=this.yzPlanesRaw[i0++];
this.p2=this.yzPlanesRaw[i0++];
for (var i=(i0 == 4 ? 3 : 0); i < i0; i++) for (var j=0; j < this.yzCount; j++) this.yzPlanesRaw[i][j]=Math.abs(this.yzPlanesRaw[i][j] * this.dataScaling);


}var index=x * this.yzCount;
for (var y=0, i=0; y < this.nY; y++) for (var z=0; z < this.nZ; z++, i++) {
var rho=this.p1[i];
if (this.bsOK != null  && !this.bsOK.get$I(index + i) ) {
plane[i]=NaN;
} else if (this.dataIsReducedDensity) {
continue;
} else if (rho == 0 ) {
plane[i]=0;
} else if (rho > this.rhoPlot  || rho < this.rhoMin   || y == 0  || y == this.nY - 1  || z == 0  || z == this.nZ - 1 ) {
plane[i]=NaN;
} else {
this.gxTemp=(this.p2[i] - this.p0[i]) / (2 * this.stepBohr[0]);
this.gyTemp=(this.p1[i + this.nZ] - this.p1[i - this.nZ]) / (2 * this.stepBohr[1]);
this.gzTemp=(this.p1[i + 1] - this.p1[i - 1]) / (2 * this.stepBohr[2]);
this.grad=Math.sqrt(this.gxTemp * this.gxTemp + this.gyTemp * this.gyTemp + this.gzTemp * this.gzTemp);
plane[i]=p$1.getValue$D$Z.apply(this, [rho, true]);
}}

});

Clazz.newMeth(C$, 'process$I$I$F', function (vA, vB, f) {
var valueA=p$1.getPlaneValue$I.apply(this, [vA]);
var valueB=p$1.getPlaneValue$I.apply(this, [vB]);
return (valueA + f * (valueB - valueA));
});

Clazz.newMeth(C$, 'getPlaneValue$I', function (vA) {
var i=(vA % this.yzCount);
var x=(vA/this.yzCount|0);
var y=(i/this.nZ|0);
var z=i % this.nZ;
if (x == 0 || x == this.nX - 1  || y == 0  || y == this.nY - 1  || z == 0  || z == this.nZ - 1 ) return 100.0;
var iPlane=x % 2;
var p0=this.yzPlanesRaw[iPlane++];
var p1=this.yzPlanesRaw[iPlane++];
var p2=this.yzPlanesRaw[iPlane++];
var rho=p1[i];
if (rho > this.rhoPlot  || rho < this.rhoMin  ) return 100.0;
var dx=this.stepBohr[0];
var dy=this.stepBohr[1];
var dz=this.stepBohr[2];
this.gxxTemp=(p2[i] - 2 * rho + p0[i]) / (dx * dx);
this.gyyTemp=(p1[i + this.nZ] - 2 * rho + p1[i - this.nZ]) / (dy * dy);
this.gzzTemp=(p1[i + 1] - 2 * rho + p1[i - 1]) / (dz * dz);
this.gxyTemp=((p2[i + this.nZ] - p2[i - this.nZ]) - (p0[i + this.nZ] - p0[i - this.nZ])) / (4 * dx * dy );
this.gxzTemp=((p2[i + 1] - p2[i - 1]) - (p0[i + 1] - p0[i - 1])) / (4 * dx * dz );
this.gyzTemp=((p1[i + this.nZ + 1 ] - p1[i - this.nZ + 1]) - (p1[i + this.nZ - 1] - p1[i - this.nZ - 1 ])) / (4 * dy * dz );
if (Double.isNaN$D(this.gxxTemp) || Double.isNaN$D(this.gyyTemp) || Double.isNaN$D(this.gzzTemp) || Double.isNaN$D(this.gxyTemp) || Double.isNaN$D(this.gxzTemp) || Double.isNaN$D(this.gyzTemp)  ) return NaN;
return p$1.getValue$D$Z.apply(this, [rho, false]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.c=(1 / (2 * Math.pow(29.608813203268074, 0.3333333333333333)));
C$.rpower=-1.3333333333333333;
C$.coef1=Clazz.array(Double.TYPE, -1, [0, 0.2815, 2.437, 11.84, 31.34, 67.82, 120.2, 190.9, 289.5, 406.3, 561.3, 760.8, 1016.0, 1319.0, 1658.0, 2042.0, 2501.0, 3024.0, 3625.0]);
C$.coef2=Clazz.array(Double.TYPE, -1, [0, 0.0, 0.0, 0.06332, 0.3694, 0.8527, 1.172, 2.247, 2.879, 3.049, 6.984, 22.42, 37.17, 57.95, 87.16, 115.7, 158.0, 205.5, 260.0]);
C$.coef3=Clazz.array(Double.TYPE, -1, [0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.06358, 0.3331, 0.8878, 0.7888, 1.465, 2.17, 3.369, 5.211]);
C$.zeta1=Clazz.array(Double.TYPE, -1, [0, 0.5288, 0.3379, 0.1912, 0.139, 0.1059, 0.0884, 0.0767, 0.0669, 0.0608, 0.0549, 0.0496, 0.0449, 0.0411, 0.0382, 0.0358, 0.0335, 0.0315, 0.0296]);
C$.zeta2=Clazz.array(Double.TYPE, -1, [0, 1.0, 1.0, 0.9992, 0.6945, 0.53, 0.548, 0.4532, 0.3974, 0.3994, 0.3447, 0.2511, 0.215, 0.1874, 0.1654, 0.1509, 0.1369, 0.1259, 0.1168]);
C$.zeta3=Clazz.array(Double.TYPE, -1, [0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0236, 0.7753, 0.5962, 0.6995, 0.5851, 0.5149, 0.4974, 0.4412]);
C$.dMax=Clazz.array(Double.TYPE, -1, [0, 2.982502423, 2.635120936, 4.144887422, 4.105800759, 3.576656363, 3.872424373, 3.497503547, 3.165369971, 3.204214082, 3.051069564, 4.251312809, 4.503309314, 4.047465141, 4.666024968, 4.265151411, 3.955710076, 4.040067606, 3.776022242]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:15 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
