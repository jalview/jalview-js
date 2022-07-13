(function(){var P$=Clazz.newPackage("org.jmol.quantum"),p$1={},I$=[[0,'org.jmol.quantum.mo.DataAdder','org.jmol.quantum.QS','org.jmol.util.Logger','javajs.api.Interface']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MOCalculation", null, 'org.jmol.quantum.QuantumCalculation');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.normType=0;
this.moFactor=1;
this.testing=true;
this.sum=-1;
this.dataAdders=Clazz.array($I$(1), [20]);
this.dataAdderOK=Clazz.array(Integer.TYPE, [20]);
this.lastGaussianPtr=-1;
},1);

C$.$fields$=[['Z',['havePoints','testing','doShowShellType','isSquaredLinear'],'D',['moFactor','sum'],'I',['moCoeff','gaussianPtr','normType','nGaussians','lastGaussianPtr'],'S',['calculationType','warned'],'O',['CX','double[]','+CY','+CZ','+DXY','+DXZ','+DYZ','+EX','+EY','+EZ','shells','javajs.util.Lst','gaussians','float[][]','slaters','org.jmol.quantum.SlaterData[]','moCoefficients','float[]','dfCoefMaps','int[][]','linearCombination','float[]','coefs','float[][]','highLEnabled','int[]','dataAdders','org.jmol.quantum.mo.DataAdder[]','dataAdderOK','int[]','coeffs','double[]','map','int[]']]
,['O',['shellOrder','String[][]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setupCalculation$java_util_Map$Z$org_jmol_jvxl_data_VolumeData$javajs_util_BS$javajs_util_T3A$org_jmol_modelset_AtomA$I$IAA$FA$FA$Z$FAA$javajs_util_T3A', function (moData, isSlaters, volumeData, bsSelected, xyz, atoms, firstAtomOffset, dfCoefMaps, moCoefficients, linearCombination, isSquaredLinear, coefs, points) {
var calculationType=moData.get$O("calculationType");
var shells=moData.get$O("shells");
var gaussians=moData.get$O("gaussians");
var slaters=moData.get$O("slaters");
this.highLEnabled=moData.get$O("highLEnabled");
this.havePoints=(points != null );
this.calculationType=calculationType;
this.firstAtomOffset=firstAtomOffset;
this.shells=shells;
this.gaussians=gaussians;
this.dfCoefMaps=(dfCoefMaps == null  ? $I$(2).getNewDfCoefMap$() : dfCoefMaps);
this.coeffs=Clazz.array(Double.TYPE, [this.dfCoefMaps[this.dfCoefMaps.length - 1].length]);
this.slaters=slaters;
this.moCoefficients=moCoefficients;
this.linearCombination=linearCombination;
this.isSquaredLinear=isSquaredLinear;
this.coefs=coefs;
var doNormalize=(isSlaters || moData.get$O("isNormalized") !== Boolean.TRUE  );
if (doNormalize) p$1.setNormalization$O.apply(this, [moData.get$O("nboType")]);
this.countsXYZ=volumeData.getVoxelCounts$();
this.initialize$I$I$I$javajs_util_T3A(this.countsXYZ[0], this.countsXYZ[1], this.countsXYZ[2], points);
this.voxelData=volumeData.getVoxelData$();
this.voxelDataTemp=(isSquaredLinear ? Clazz.array(Float.TYPE, [this.nX, this.nY, this.nZ]) : this.voxelData);
this.setupCoordinates$FA$FA$javajs_util_BS$javajs_util_T3A$org_jmol_modelset_AtomA$javajs_util_T3A$Z(volumeData.getOriginFloat$(), volumeData.getVolumetricVectorLengths$(), bsSelected, xyz, atoms, points, false);
this.doDebug=($I$(3).debugging);
return !bsSelected.isEmpty$() && (slaters != null  || p$1.checkCalculationType.apply(this, []) ) ;
});

Clazz.newMeth(C$, 'setNormalization$O', function (nboType) {
var type="standard";
this.normType=1;
if (nboType != null ) {
this.normType=3;
type="NBO-AO";
} else if (this.calculationType != null ) {
if (this.calculationType.indexOf$S("NWCHEM") >= 0) {
this.normType=2;
type="NWCHEM";
$I$(3,"info$S",["Normalization of contractions (NWCHEM)"]);
}}$I$(3,"info$S",["Normalizing AOs: " + type + " slaters:" + (this.slaters != null ) ]);
}, p$1);

Clazz.newMeth(C$, 'initialize$I$I$I$javajs_util_T3A', function (nX, nY, nZ, points) {
this.initialize0$I$I$I$javajs_util_T3A(nX, nY, nZ, points);
this.CX=Clazz.array(Double.TYPE, [this.nX]);
this.CY=Clazz.array(Double.TYPE, [this.nY]);
this.CZ=Clazz.array(Double.TYPE, [this.nZ]);
this.DXY=Clazz.array(Double.TYPE, [this.nX]);
this.DXZ=Clazz.array(Double.TYPE, [this.nX]);
this.DYZ=Clazz.array(Double.TYPE, [this.nY]);
this.EX=Clazz.array(Double.TYPE, [this.nX]);
this.EY=Clazz.array(Double.TYPE, [this.nY]);
this.EZ=Clazz.array(Double.TYPE, [this.nZ]);
});

Clazz.newMeth(C$, 'createCube$', function () {
this.setXYZBohr$javajs_util_T3A(this.points);
this.processPoints$();
if (!this.isSquaredLinear && (this.doDebug || this.testing ) ) this.calculateElectronDensity$();
});

Clazz.newMeth(C$, 'processPoints$', function () {
if (this.linearCombination == null ) {
this.process$();
} else {
if (this.sum < 0 ) {
this.sum=0;
for (var i=0; i < this.linearCombination.length; i+=2) this.sum += this.linearCombination[i] * this.linearCombination[i];

this.sum=Math.sqrt(this.sum);
}if (this.sum == 0 ) return;
for (var i=0; i < this.linearCombination.length; i+=2) {
this.moFactor=this.linearCombination[i] / this.sum;
if (this.moFactor == 0 ) continue;
this.moCoefficients=this.coefs[(this.linearCombination[i + 1]|0) - 1];
this.process$();
if (this.isSquaredLinear) p$1.addValuesSquared$F.apply(this, [1]);
}
}});

Clazz.newMeth(C$, 'process$', function () {
this.atomIndex=this.firstAtomOffset - 1;
this.moCoeff=0;
if (this.slaters == null ) {
var nShells=this.shells.size$();
for (var i=0; i < nShells; i++) p$1.processShell$I.apply(this, [i]);

return;
}for (var i=0; i < this.slaters.length; i++) {
if (!p$1.processSlater$I.apply(this, [i])) break;
}
});

Clazz.newMeth(C$, 'checkCalculationType', function () {
if (this.calculationType == null ) {
$I$(3).warn$S("calculation type not identified -- continuing");
return true;
}if (this.calculationType.indexOf$S("+") >= 0 || this.calculationType.indexOf$S("*") >= 0 ) {
$I$(3).warn$S("polarization/diffuse wavefunctions have not been tested fully: " + this.calculationType + " -- continuing" );
}if (this.calculationType.indexOf$S("?") >= 0) {
$I$(3).warn$S("unknown calculation type may not render correctly -- continuing");
} else if (this.points == null ) {
$I$(3).info$S("calculation type: " + this.calculationType + " OK." );
}return true;
}, p$1);

Clazz.newMeth(C$, 'processShell$I', function (iShell) {
var lastAtom=this.atomIndex;
var shell=this.shells.get$I(iShell);
this.atomIndex=shell[0] - 1 + this.firstAtomOffset;
var basisType=shell[1];
this.gaussianPtr=shell[2] - 1;
this.nGaussians=shell[3];
this.doShowShellType=this.doDebug;
if (this.atomIndex != lastAtom && (this.thisAtom=this.qmAtoms[this.atomIndex]) != null  ) this.thisAtom.setXYZ$org_jmol_quantum_QuantumCalculation$Z(this, true);
if (!p$1.setCoeffs$I$Z.apply(this, [shell[1], true])) return;
if (this.havePoints) this.setMinMax$I(-1);
switch (basisType) {
case 0:
p$1.addDataS.apply(this, []);
break;
case 1:
p$1.addDataP.apply(this, []);
break;
case 2:
p$1.addDataSP.apply(this, []);
break;
case 3:
p$1.addData5D.apply(this, []);
break;
case 4:
p$1.addData6D.apply(this, []);
break;
default:
if (p$1.addHighL$I.apply(this, [basisType])) return;
if (this.warned == null ) this.warned="";
var key="=" + (this.atomIndex + 1) + ": " + $I$(2).getQuantumShellTag$I(basisType) ;
if (this.warned.indexOf$S(key) < 0) {
this.warned += key;
$I$(3).warn$S(" Unsupported basis type for atomno" + key);
}break;
}
}, p$1);

Clazz.newMeth(C$, 'addHighL$I', function (basisType) {
if (basisType >= 7 && this.highLEnabled[basisType] == 0 ) return false;
var adder=this.dataAdders[basisType];
switch (this.dataAdderOK[basisType]) {
case 0:
this.dataAdders[basisType]=adder=($I$(4,"getInterface$S",["org.jmol.quantum.mo.DataAdder" + $I$(2).getQuantumShellTag$I(basisType)]));
this.dataAdderOK[basisType]=(adder == null  ? -1 : 1);
if (adder != null ) break;
case -1:
return false;
}
if (adder.addData$org_jmol_quantum_MOCalculation$Z(this, this.havePoints)) return true;
this.dataAdders[basisType]=null;
this.dataAdderOK[basisType]=-1;
return false;
}, p$1);

Clazz.newMeth(C$, 'addValuesSquared$F', function (occupancy) {
for (var ix=this.nX; --ix >= 0; ) {
for (var iy=this.nY; --iy >= 0; ) {
for (var iz=this.nZ; --iz >= 0; ) {
var value=this.voxelDataTemp[ix][iy][iz];
if (value == 0 ) continue;
this.voxelData[ix][iy][iz] += value * value * occupancy ;
this.voxelDataTemp[ix][iy][iz]=0;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'getContractionNormalization$I$I', function (el, cpt) {
var sum;
var df=(el == 3 ? 15 : el == 2 ? 3 : 1);
var f=df * Math.pow(3.141592653589793, 1.5) / Math.pow(2, el);
var p=0.75 + el / 2.0;
if (this.nGaussians == 1) {
sum=Math.pow(2, -2 * p) * Math.pow(this.gaussians[this.gaussianPtr][cpt], 2);
} else {
sum=0;
for (var ig1=0; ig1 < this.nGaussians; ig1++) {
var alpha1=this.gaussians[this.gaussianPtr + ig1][0];
var c1=this.gaussians[this.gaussianPtr + ig1][cpt];
var f1=Math.pow(alpha1, p);
for (var ig2=0; ig2 < this.nGaussians; ig2++) {
var alpha2=this.gaussians[this.gaussianPtr + ig2][0];
var c2=this.gaussians[this.gaussianPtr + ig2][cpt];
var f2=Math.pow(alpha2, p);
sum += c1 * f1 * c2 * f2  / Math.pow(alpha1 + alpha2, 2 * p);
}
}
}sum=1 / Math.sqrt(f * sum);
if ($I$(3).debuggingHigh) $I$(3,"debug$S",["\t\t\tnormalization for l=" + el + " nGaussians=" + this.nGaussians + " is " + new Double(sum).toString() ]);
return sum;
});

Clazz.newMeth(C$, 'setCoeffs$I$Z', function (type, isProcess) {
var isOK=false;
this.map=this.dfCoefMaps[type];
if (isProcess && this.thisAtom == null  ) {
this.moCoeff+=this.map.length;
return false;
}for (var i=0; i < this.map.length; i++) isOK|=((this.coeffs[i]=this.moCoefficients[this.map[i] + this.moCoeff++]) != 0 );

isOK&=(this.coeffs[0] != -2147483648 );
if (isOK && this.doDebug && isProcess  ) p$1.dumpInfo$I.apply(this, [type]);
return isOK;
}, p$1);

Clazz.newMeth(C$, 'addDataS', function () {
var norm;
var c1;
var normalizeAlpha=false;
switch (this.normType) {
case 0:
case 3:
default:
norm=1;
break;
case 1:
norm=0.7127055;
normalizeAlpha=true;
break;
case 2:
norm=this.getContractionNormalization$I$I(0, 1);
normalizeAlpha=true;
break;
}
var m1=this.coeffs[0];
for (var ig=0; ig < this.nGaussians; ig++) {
var alpha=this.gaussians[this.gaussianPtr + ig][0];
c1=this.gaussians[this.gaussianPtr + ig][1];
var a=norm * m1 * c1 * this.moFactor ;
if (normalizeAlpha) a *= Math.pow(alpha, 0.75);
for (var i=this.xMax; --i >= this.xMin; ) {
this.EX[i]=a * Math.exp(-this.X2[i] * alpha);
}
for (var i=this.yMax; --i >= this.yMin; ) {
this.EY[i]=Math.exp(-this.Y2[i] * alpha);
}
for (var i=this.zMax; --i >= this.zMin; ) {
this.EZ[i]=Math.exp(-this.Z2[i] * alpha);
}
for (var ix=this.xMax; --ix >= this.xMin; ) {
var eX=this.EX[ix];
if (this.havePoints) this.setMinMax$I(ix);
for (var iy=this.yMax; --iy >= this.yMin; ) {
var eXY=eX * this.EY[iy];
var vd=this.voxelDataTemp[ix][(this.havePoints ? 0 : iy)];
for (var iz=this.zMax; --iz >= this.zMin; ) vd[(this.havePoints ? 0 : iz)] += eXY * this.EZ[iz];

}
}
}
}, p$1);

Clazz.newMeth(C$, 'addDataP', function () {
var mx=this.coeffs[0];
var my=this.coeffs[1];
var mz=this.coeffs[2];
var norm;
var normalizeAlpha=false;
switch (this.normType) {
case 0:
case 3:
default:
norm=1;
break;
case 1:
norm=1.425411;
normalizeAlpha=true;
break;
case 2:
norm=this.getContractionNormalization$I$I(1, 1);
normalizeAlpha=true;
break;
}
for (var ig=0; ig < this.nGaussians; ig++) {
var alpha=this.gaussians[this.gaussianPtr + ig][0];
var c1=this.gaussians[this.gaussianPtr + ig][1];
var a=c1;
if (normalizeAlpha) a *= Math.pow(alpha, 1.25) * norm;
p$1.calcSP$D$D$D$D$D.apply(this, [alpha, 0, a * mx, a * my, a * mz]);
}
}, p$1);

Clazz.newMeth(C$, 'addDataSP', function () {
var isP=(this.map.length == 3);
var pPt=(isP ? 0 : 1);
var ms=(isP ? 0 : this.coeffs[0]);
var mx=this.coeffs[pPt++];
var my=this.coeffs[pPt++];
var mz=this.coeffs[pPt++];
var norm1;
var norm2;
var doNormalize=false;
switch (this.normType) {
case 0:
case 3:
default:
norm1=norm2=1;
break;
case 1:
norm1=0.7127055;
norm2=1.425411;
doNormalize=true;
break;
case 2:
norm1=this.getContractionNormalization$I$I(0, 1);
norm2=this.getContractionNormalization$I$I(1, 2);
doNormalize=true;
break;
}
var a1;
var a2;
var c1;
var c2;
var alpha;
for (var ig=0; ig < this.nGaussians; ig++) {
alpha=this.gaussians[this.gaussianPtr + ig][0];
c1=this.gaussians[this.gaussianPtr + ig][1];
c2=this.gaussians[this.gaussianPtr + ig][2];
a1=c1;
a2=c2;
if (doNormalize) {
a1 *= Math.pow(alpha, 0.75) * norm1;
a2 *= Math.pow(alpha, 1.25) * norm2;
}p$1.calcSP$D$D$D$D$D.apply(this, [alpha, a1 * ms, a2 * mx, a2 * my, a2 * mz]);
}
}, p$1);

Clazz.newMeth(C$, 'setCE$D$D$D$D$D', function (alpha, as, ax, ay, az) {
for (var i=this.xMax; --i >= this.xMin; ) {
this.CX[i]=as + ax * this.X[i];
this.EX[i]=Math.exp(-this.X2[i] * alpha) * this.moFactor;
}
for (var i=this.yMax; --i >= this.yMin; ) {
this.CY[i]=ay * this.Y[i];
this.EY[i]=Math.exp(-this.Y2[i] * alpha);
}
for (var i=this.zMax; --i >= this.zMin; ) {
this.CZ[i]=az * this.Z[i];
this.EZ[i]=Math.exp(-this.Z2[i] * alpha);
}
}, p$1);

Clazz.newMeth(C$, 'setE$DA$D', function (EX, alpha) {
for (var i=this.xMax; --i >= this.xMin; ) EX[i]=Math.exp(-this.X2[i] * alpha) * this.moFactor;

for (var i=this.yMax; --i >= this.yMin; ) this.EY[i]=Math.exp(-this.Y2[i] * alpha);

for (var i=this.zMax; --i >= this.zMin; ) this.EZ[i]=Math.exp(-this.Z2[i] * alpha);

});

Clazz.newMeth(C$, 'calcSP$D$D$D$D$D', function (alpha, as, ax, ay, az) {
p$1.setCE$D$D$D$D$D.apply(this, [alpha, as, ax, ay, az]);
for (var ix=this.xMax; --ix >= this.xMin; ) {
var eX=this.EX[ix];
var cX=this.CX[ix];
if (this.havePoints) this.setMinMax$I(ix);
for (var iy=this.yMax; --iy >= this.yMin; ) {
var eXY=eX * this.EY[iy];
var cXY=cX + this.CY[iy];
var vd=this.voxelDataTemp[ix][(this.havePoints ? 0 : iy)];
for (var iz=this.zMax; --iz >= this.zMin; ) {
vd[(this.havePoints ? 0 : iz)] += (cXY + this.CZ[iz]) * eXY * this.EZ[iz] ;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'addData6D', function () {
var mxx=this.coeffs[0];
var myy=this.coeffs[1];
var mzz=this.coeffs[2];
var mxy=this.coeffs[3];
var mxz=this.coeffs[4];
var myz=this.coeffs[5];
var norm1;
var norm2;
var normalizeAlpha=false;
switch (this.normType) {
case 0:
default:
norm1=1;
norm2=0.5773502795520422;
break;
case 1:
norm1=2.850822;
norm2=norm1 / 1.7320507764816284;
normalizeAlpha=true;
break;
case 2:
norm1=norm2=this.getContractionNormalization$I$I(2, 1);
normalizeAlpha=true;
break;
case 3:
norm1=1.7320507764816284;
norm2=1;
}
for (var ig=0; ig < this.nGaussians; ig++) {
var alpha=this.gaussians[this.gaussianPtr + ig][0];
var c1=this.gaussians[this.gaussianPtr + ig][1];
var a=c1;
if (normalizeAlpha) a *= Math.pow(alpha, 1.75);
var axy=a * norm1 * mxy ;
var axz=a * norm1 * mxz ;
var ayz=a * norm1 * myz ;
var axx=a * norm2 * mxx ;
var ayy=a * norm2 * myy ;
var azz=a * norm2 * mzz ;
p$1.setCE$D$D$D$D$D.apply(this, [alpha, 0, axx, ayy, azz]);
for (var i=this.xMax; --i >= this.xMin; ) {
this.DXY[i]=axy * this.X[i];
this.DXZ[i]=axz * this.X[i];
}
for (var i=this.yMax; --i >= this.yMin; ) {
this.DYZ[i]=ayz * this.Y[i];
}
for (var ix=this.xMax; --ix >= this.xMin; ) {
var axx_x2=this.CX[ix] * this.X[ix];
var axy_x=this.DXY[ix];
var axz_x=this.DXZ[ix];
var eX=this.EX[ix];
if (this.havePoints) this.setMinMax$I(ix);
for (var iy=this.yMax; --iy >= this.yMin; ) {
var axx_x2__ayy_y2__axy_xy=axx_x2 + (this.CY[iy] + axy_x) * this.Y[iy];
var axz_x__ayz_y=axz_x + this.DYZ[iy];
var eXY=eX * this.EY[iy];
var vd=this.voxelDataTemp[ix][(this.havePoints ? 0 : iy)];
for (var iz=this.zMax; --iz >= this.zMin; ) {
vd[(this.havePoints ? 0 : iz)] += (axx_x2__ayy_y2__axy_xy + (this.CZ[iz] + axz_x__ayz_y) * this.Z[iz]) * eXY * this.EZ[iz] ;
}
}
}
}
}, p$1);

Clazz.newMeth(C$, 'addData5D', function () {
var alpha;
var c1;
var a;
var x;
var y;
var z;
var cxx;
var cyy;
var czz;
var cxy;
var cxz;
var cyz;
var ad0;
var ad1p;
var ad1n;
var ad2p;
var ad2n;
var norm1;
var norm2;
var norm3;
var norm4;
var norm5;
var normalizeAlpha=false;
switch (this.normType) {
case 0:
default:
norm1=norm2=norm3=norm4=norm5=1;
break;
case 3:
norm2=norm4=1;
norm1=3.464101552963257;
norm3=1.7320507764816284;
norm5=2;
break;
case 1:
norm1=Math.pow(66.05114251919257, 0.25);
norm2=norm1 / 1.7320507764816284;
norm3=0.8660253882408142;
norm4=norm5=1;
normalizeAlpha=true;
break;
case 2:
norm2=this.getContractionNormalization$I$I(2, 1);
norm1=norm2 * 1.7320507764816284;
norm3=0.8660253882408142;
norm4=-1;
norm5=1;
normalizeAlpha=true;
break;
}
var m0=this.coeffs[0];
var m1p=this.coeffs[1];
var m1n=this.coeffs[2];
var m2p=this.coeffs[3];
var m2n=this.coeffs[4];
for (var ig=0; ig < this.nGaussians; ig++) {
alpha=this.gaussians[this.gaussianPtr + ig][0];
c1=this.gaussians[this.gaussianPtr + ig][1];
a=c1;
if (normalizeAlpha) a *= Math.pow(alpha, 1.75);
ad0=a * m0;
ad1p=norm4 * a * m1p ;
ad1n=a * m1n;
ad2p=a * m2p;
ad2n=a * m2n;
this.setE$DA$D(this.EX, alpha);
for (var ix=this.xMax; --ix >= this.xMin; ) {
x=this.X[ix];
var eX=this.EX[ix];
cxx=norm2 * x * x ;
if (this.havePoints) this.setMinMax$I(ix);
for (var iy=this.yMax; --iy >= this.yMin; ) {
y=this.Y[iy];
var eXY=eX * this.EY[iy];
cyy=norm2 * y * y ;
cxy=norm1 * x * y ;
var vd=this.voxelDataTemp[ix][(this.havePoints ? 0 : iy)];
for (var iz=this.zMax; --iz >= this.zMin; ) {
z=this.Z[iz];
czz=norm2 * z * z ;
cxz=norm1 * x * z ;
cyz=norm1 * y * z ;
vd[(this.havePoints ? 0 : iz)] += (ad0 * norm5 * (czz - 0.5 * (cxx + cyy))  + ad1p * cxz + ad1n * cyz + ad2p * norm3 * (cxx - cyy)  + ad2n * cxy) * eXY * this.EZ[iz] ;
}
}
}
}
}, p$1);

Clazz.newMeth(C$, 'processSlater$I', function (slaterIndex) {
var lastAtom=this.atomIndex;
var slater=this.slaters[slaterIndex];
this.atomIndex=slater.atomNo - 1;
var minuszeta=-slater.zeta;
if ((this.thisAtom=this.qmAtoms[this.atomIndex]) == null ) {
if (minuszeta <= 0 ) this.moCoeff++;
return true;
}if (minuszeta > 0 ) {
minuszeta=-minuszeta;
this.moCoeff--;
}if (this.moCoeff >= this.moCoefficients.length) return false;
var coef=slater.coef * this.moCoefficients[this.moCoeff++];
if (coef == 0 ) {
this.atomIndex=-1;
return true;
}coef *= this.moFactor;
if (this.atomIndex != lastAtom) this.thisAtom.setXYZ$org_jmol_quantum_QuantumCalculation$Z(this, true);
var a=slater.x;
var b=slater.y;
var c=slater.z;
var d=slater.r;
if (a == -2) for (var ix=this.xMax; --ix >= this.xMin; ) {
var dx2=this.X2[ix];
if (this.havePoints) this.setMinMax$I(ix);
for (var iy=this.yMax; --iy >= this.yMin; ) {
var dy2=this.Y2[iy];
var dx2y2=dx2 + dy2;
var vd=this.voxelDataTemp[ix][(this.havePoints ? 0 : iy)];
for (var iz=this.zMax; --iz >= this.zMin; ) {
var dz2=this.Z2[iz];
var r2=dx2y2 + dz2;
var r=Math.sqrt(r2);
var exponent=minuszeta * r;
if (exponent < -50.0 ) continue;
var value=(coef * Math.exp(exponent) * (3 * dz2 - r2) );
switch (d) {
case 3:
value *= r;
case 2:
value *= r2;
break;
case 1:
value *= r;
break;
}
vd[(this.havePoints ? 0 : iz)] += value;
}
}
}
 else if (b == -2) for (var ix=this.xMax; --ix >= this.xMin; ) {
var dx2=this.X2[ix];
if (this.havePoints) this.setMinMax$I(ix);
for (var iy=this.yMax; --iy >= this.yMin; ) {
var dy2=this.Y2[iy];
var dx2y2=dx2 + dy2;
var dx2my2=coef * (dx2 - dy2);
var vd=this.voxelDataTemp[ix][(this.havePoints ? 0 : iy)];
for (var iz=this.zMax; --iz >= this.zMin; ) {
var dz2=this.Z2[iz];
var r2=dx2y2 + dz2;
var r=Math.sqrt(r2);
var exponent=minuszeta * r;
if (exponent < -50.0 ) continue;
var value=dx2my2 * Math.exp(exponent);
switch (d) {
case 3:
value *= r;
case 2:
value *= r2;
break;
case 1:
value *= r;
break;
}
vd[(this.havePoints ? 0 : iz)] += value;
}
}
}
 else for (var ix=this.xMax; --ix >= this.xMin; ) {
var dx2=this.X2[ix];
var vdx=coef;
switch (a) {
case 3:
vdx *= this.X[ix];
case 2:
vdx *= dx2;
break;
case 1:
vdx *= this.X[ix];
break;
}
if (this.havePoints) this.setMinMax$I(ix);
for (var iy=this.yMax; --iy >= this.yMin; ) {
var dy2=this.Y2[iy];
var dx2y2=dx2 + dy2;
var vdy=vdx;
switch (b) {
case 3:
vdy *= this.Y[iy];
case 2:
vdy *= dy2;
break;
case 1:
vdy *= this.Y[iy];
break;
}
var vd=this.voxelDataTemp[ix][(this.havePoints ? 0 : iy)];
for (var iz=this.zMax; --iz >= this.zMin; ) {
var dz2=this.Z2[iz];
var r2=dx2y2 + dz2;
var r=Math.sqrt(r2);
var exponent=minuszeta * r;
if (exponent < -50.0 ) continue;
var value=vdy * Math.exp(exponent);
switch (c) {
case 3:
value *= this.Z[iz];
case 2:
value *= dz2;
break;
case 1:
value *= this.Z[iz];
break;
}
switch (d) {
case 3:
value *= r;
case 2:
value *= r2;
break;
case 1:
value *= r;
break;
}
vd[(this.havePoints ? 0 : iz)] += value;
}
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'dumpInfo$I', function (shell) {
if (this.doShowShellType) {
$I$(3,"debug$S",["\n\t\t\tprocessShell: " + shell + " type=" + $I$(2).getQuantumShellTag$I(shell) + " nGaussians=" + this.nGaussians + " atom=" + this.atomIndex ]);
this.doShowShellType=false;
}if ($I$(3).isActiveLevel$I(6) && this.gaussianPtr != this.lastGaussianPtr ) {
this.lastGaussianPtr=this.gaussianPtr;
for (var ig=0; ig < this.nGaussians; ig++) {
var alpha=this.gaussians[this.gaussianPtr + ig][0];
var c1=this.gaussians[this.gaussianPtr + ig][1];
$I$(3,"debug$S",["\t\t\tGaussian " + (ig + 1) + " alpha=" + new Double(alpha).toString() + " c=" + new Double(c1).toString() ]);
}
}var so=C$.getShellOrder$I(shell);
for (var i=0; i < this.map.length; i++) {
var n=this.map[i] + this.moCoeff - this.map.length + i + 1;
var c=this.coeffs[i];
$I$(3,"debug$S",["MO coeff " + (so == null  ? "?" : so[i]) + " " + n + "\t" + new Double(c).toString() + "\t" + this.thisAtom.atom ]);
}
}, p$1);

Clazz.newMeth(C$, 'getShellOrder$I', function (i) {
return (i < 0 || i >= C$.shellOrder.length  ? null : C$.shellOrder[i]);
}, 1);

Clazz.newMeth(C$, 'calculateElectronDensity$', function () {
if (this.points != null ) return;
this.integration=0;
for (var ix=this.nX; --ix >= 0; ) for (var iy=this.nY; --iy >= 0; ) for (var iz=this.nZ; --iz >= 0; ) {
var x=this.voxelData[ix][iy][iz];
this.integration += x * x;
}


var volume=this.stepBohr[0] * this.stepBohr[1] * this.stepBohr[2] ;
this.integration *= volume;
$I$(3,"info$S",["Integrated density = " + new Float(this.integration).toString()]);
});

C$.$static$=function(){C$.$static$=0;
C$.shellOrder=Clazz.array(String, -2, [Clazz.array(String, -1, ["S"]), Clazz.array(String, -1, ["X", "Y", "Z"]), Clazz.array(String, -1, ["S", "X", "Y", "Z"]), Clazz.array(String, -1, ["d0/z2", "d1+/xz", "d1-/yz", "d2+/x2-y2", "d2-/xy"]), Clazz.array(String, -1, ["XX", "YY", "ZZ", "XY", "XZ", "YZ"]), Clazz.array(String, -1, ["f0/2z3-3x2z-3y2z", "f1+/4xz2-x3-xy2", "f1-/4yz2-x2y-y3", "f2+/x2z-y2z", "f2-/xyz", "f3+/x3-3xy2", "f3-/3x2y-y3"]), Clazz.array(String, -1, ["XXX", "YYY", "ZZZ", "XYY", "XXY", "XXZ", "XZZ", "YZZ", "YYZ", "XYZ"])]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:40 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
