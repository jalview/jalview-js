(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.PT','org.jmol.util.Logger','org.jmol.adapter.smarter.Bond','javajs.util.V3','javajs.util.Lst','javajs.util.AU','org.jmol.adapter.readers.quantum.BasisFunctionReader','org.jmol.util.Escape']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GaussianFchkReader", null, 'org.jmol.adapter.readers.quantum.GaussianReader');
C$.AO_TYPES=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.AO_TYPES=Clazz.array(String, -1, ["F7", "D5", "L", "S", "P", "D", "F", "G", "H"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.fileData=null;
this.atomCount=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
C$.superclazz.prototype.initializeReader$.apply(this, []);
this.energyUnits="";
this.fileData=Clazz.new_($I$(1));
this.fileData.put$TK$TV("title", this.rd$().trim$());
this.calculationType=$I$(2).rep$S$S$S(this.rd$(), "  ", " ");
this.asc.newAtomSet$();
this.asc.setCurrentModelInfo$S$O("fileData", this.fileData);
p$1.readAllData.apply(this, []);
this.readAtoms$();
this.readBonds$();
this.readDipoleMoment$();
this.readPartialCharges$();
this.readBasis$();
this.readMolecularObitals$();
p$1.checkForFreq.apply(this, []);
this.continuing=false;
});

Clazz.newMeth(C$, 'checkForFreq', function () {
var n=this.fileData.get$O("Vib-NDim");
if (n == null ) {
this.readFrequencies$S$Z("NumFreq", false);
return;
}try {
var nModes=n.intValue$();
var vibE2=this.fileData.get$O("Vib-E2");
var modes=this.fileData.get$O("Vib-Modes");
var frequencies=p$1.fillFloat$FA$I$I.apply(this, [vibE2, 0, nModes]);
var red_masses=p$1.fillFloat$FA$I$I.apply(this, [vibE2, nModes, nModes]);
var frc_consts=p$1.fillFloat$FA$I$I.apply(this, [vibE2, nModes * 2, nModes]);
var intensities=p$1.fillFloat$FA$I$I.apply(this, [vibE2, nModes * 3, nModes]);
var ac=this.asc.getLastAtomSetAtomCount$();
var ignore=Clazz.array(Boolean.TYPE, [nModes]);
var fpt=0;
for (var i=0; i < nModes; ++i) {
ignore[i]=!this.doGetVibration$I(++this.vibrationNumber);
if (ignore[i]) continue;
var iAtom0=this.asc.ac;
this.asc.cloneAtomSetWithBonds$Z(true);
var name=this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, "Calculation " + this.calculationNumber, null, "" + new Float(frequencies[i]).toString(), null);
this.appendLoadNote$S("model " + this.asc.atomSetCount + ": " + name );
this.namedSets.set$I(this.asc.iSet);
this.asc.setAtomSetModelProperty$S$S("ReducedMass", new Float(red_masses[i]).toString() + " AMU");
this.asc.setAtomSetModelProperty$S$S("ForceConstant", new Float(frc_consts[i]).toString() + " mDyne/A");
this.asc.setAtomSetModelProperty$S$S("IRIntensity", new Float(intensities[i]).toString() + " KM/Mole");
for (var iAtom=0; iAtom < ac; iAtom++) {
this.asc.addVibrationVectorWithSymmetry$I$F$F$F$Z(iAtom0 + iAtom, modes[fpt++], modes[fpt++], modes[fpt++], false);
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).error$S("Could not read Vib-E2 section: " + e.getMessage$());
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'fillFloat$FA$I$I', function (f0, i, n) {
var f=Clazz.array(Float.TYPE, [n]);
for (var i1=0, ilast=i + n; i < ilast; i++, i1++) f[i1]=f0[i];

return f;
}, p$1);

Clazz.newMeth(C$, 'readAllData', function () {
while ((this.line == null  ? this.rd$() : this.line) != null ){
if (this.line.length$() < 40) {
if (this.line.indexOf$S("NumAtom") == 0) {
return;
}continue;
}var name=$I$(2).rep$S$S$S(this.line.substring$I$I(0, 40).trim$(), " ", "");
var type=this.line.charAt$I(43);
var isArray=(this.line.indexOf$S("N=") >= 0);
var v=this.line.substring$I(50).trim$();
$I$(3).info$S(name + " = " + v + " " + isArray );
var o=null;
if (isArray) {
switch (type.$c()) {
case 73:
case 82:
o=this.fillFloatArray$S$I$FA(null, 0, Clazz.array(Float.TYPE, [this.parseIntStr$S(v)]));
this.line=null;
break;
default:
v=this.rd$().trim$();
while (this.rd$() != null  && this.line.indexOf$S("   N=   ") < 0 )v += " " + this.line.trim$();

o=v;
break;
}
} else {
switch (type.$c()) {
case 73:
o=Integer.valueOf$I(this.parseIntStr$S(v));
break;
case 82:
o=Double.valueOf$D(Double.parseDouble$S(v));
break;
case 67:
case 76:
o=v;
break;
}
this.line=null;
}if (o != null ) this.fileData.put$TK$TV(name, o);
}
}, p$1);

Clazz.newMeth(C$, 'readAtoms$', function () {
var atomNumbers=this.fileData.get$O("Atomicnumbers");
var data=this.fileData.get$O("Currentcartesiancoordinates");
var e="" + this.fileData.get$O("TotalEnergy");
this.asc.setAtomSetEnergy$S$F(e, this.parseFloatStr$S(e));
this.atomCount=atomNumbers.length;
var f=0.5291772;
for (var i=0, pt=0; i < this.atomCount; i++) {
var atom=this.asc.addNewAtom$();
atom.elementNumber=($s$[0] = atomNumbers[i], $s$[0]);
if (atom.elementNumber < 0) atom.elementNumber=($s$[0] = 0, $s$[0]);
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, data[pt++] * f, data[pt++] * f, data[pt++] * f);
}
});

Clazz.newMeth(C$, 'readBonds$', function () {
try {
var nBond=this.fileData.get$O("NBond");
var iBond=this.fileData.get$O("IBond");
if (nBond.length == 0) return;
var rBond=this.fileData.get$O("RBond");
var mxBond=(rBond.length/nBond.length|0);
for (var ia=0, pt=0; ia < this.atomCount; ia++) for (var j=0; j < mxBond; j++, pt++) {
var ib=(iBond[pt]|0) - 1;
if (ib <= ia) continue;
var order=rBond[pt];
var iorder=(order == 1.5  ? 515 : (order|0));
this.asc.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(4).c$$I$I$I,[ia, ib, iorder]));
}

this.addJmolScript$S("connect 1.1 {_H} {*} ");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).info$S("GaussianFchkReader -- bonding ignored");
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'readDipoleMoment$', function () {
var data=this.fileData.get$O("DipoleMoment");
if (data == null ) return;
var dipole=$I$(5).new3$F$F$F(data[0], data[1], data[2]);
$I$(3).info$S("Molecular dipole for model " + this.asc.atomSetCount + " = " + dipole );
this.asc.setCurrentModelInfo$S$O("dipole", dipole);
});

Clazz.newMeth(C$, 'readPartialCharges$', function () {
var data=this.fileData.get$O("Mulliken Charges");
if (data == null ) return;
var atoms=this.asc.atoms;
for (var i=0; i < this.atomCount; ++i) {
var c=data[i];
atoms[i].partialCharge=c;
if (Math.abs(c) > 0.8 ) atoms[i].formalCharge=Math.round(c);
}
$I$(3).info$S("Mulliken charges found for Model " + this.asc.atomSetCount);
});

Clazz.newMeth(C$, 'readBasis$', function () {
var types=this.fileData.get$O("Shelltypes");
this.gaussianCount=0;
this.shellCount=0;
if (types == null ) return;
this.shellCount=types.length;
this.shells=Clazz.new_($I$(6));
var pps=this.fileData.get$O("Numberofprimitivespershell");
var atomMap=this.fileData.get$O("Shelltoatommap");
var exps=this.fileData.get$O("Primitiveexponents");
var coefs=this.fileData.get$O("Contractioncoefficients");
var spcoefs=this.fileData.get$O("P(S=P)Contractioncoefficients");
this.gaussians=$I$(7).newFloat2$I(exps.length);
for (var i=0; i < this.shellCount; i++) {
var oType=C$.AO_TYPES[(types[i]|0) + 3];
var nGaussians=(pps[i]|0);
var iatom=(atomMap[i]|0);
var slater=Clazz.array(Integer.TYPE, [4]);
slater[0]=iatom;
if (oType.equals$O("F7") || oType.equals$O("D5") ) slater[1]=$I$(8).getQuantumShellTagIDSpherical$S(oType.substring$I$I(0, 1));
 else slater[1]=$I$(8).getQuantumShellTagID$S(oType);
slater[2]=this.gaussianCount + 1;
slater[3]=nGaussians;
if (this.debugging) $I$(3).debug$S("Slater " + this.shells.size$() + " " + $I$(9).eAI$IA(slater) );
this.shells.addLast$TV(slater);
for (var j=0; j < nGaussians; j++) {
var g=this.gaussians[this.gaussianCount]=Clazz.array(Float.TYPE, [3]);
g[0]=exps[this.gaussianCount];
g[1]=coefs[this.gaussianCount];
if (spcoefs != null ) g[2]=spcoefs[this.gaussianCount];
this.gaussianCount++;
}
}
$I$(3).info$S(this.shellCount + " slater shells read");
$I$(3).info$S(this.gaussianCount + " gaussian primitives read");
});

Clazz.newMeth(C$, 'readMolecularObitals$', function () {
if (this.shells == null ) return;
var nElec=(this.fileData.get$O("Numberofelectrons")).intValue$();
var nAlpha=(this.fileData.get$O("Numberofalphaelectrons")).intValue$();
var nBeta=(this.fileData.get$O("Numberofbetaelectrons")).intValue$();
var aenergies=this.fileData.get$O("AlphaOrbitalEnergies");
var benergies=this.fileData.get$O("BetaOrbitalEnergies");
var acoefs=this.fileData.get$O("AlphaMOcoefficients");
var bcoefs=this.fileData.get$O("BetaMOcoefficients");
if (acoefs == null ) return;
var occ=(bcoefs == null  ? 2 : 1);
var n=(bcoefs == null  ? nElec : nAlpha);
p$1.getOrbitals$FA$FA$I$I.apply(this, [aenergies, acoefs, occ, n]);
if (bcoefs != null ) p$1.getOrbitals$FA$FA$I$I.apply(this, [benergies, bcoefs, occ, nBeta]);
this.setMOData$Z(false);
});

Clazz.newMeth(C$, 'getOrbitals$FA$FA$I$I', function (e, c, occ, nElec) {
var nOrb=e.length;
var nCoef=c.length;
nCoef=(nCoef/(nOrb)|0);
this.alphaBeta=(occ == 2 ? "" : this.alphaBeta.equals$O("alpha") ? "beta" : "alpha");
var pt=0;
var n=0;
for (var i=0; i < nOrb; i++) {
var coefs=Clazz.array(Float.TYPE, [nCoef]);
for (var j=0; j < nCoef; j++) coefs[j]=c[pt++];

var mo=Clazz.new_($I$(1));
mo.put$TK$TV("coefficients", coefs);
mo.put$TK$TV("occupancy", Float.valueOf$F(occ));
n+=occ;
if (n >= nElec) occ=0;
mo.put$TK$TV("energy", Float.valueOf$F(e[i]));
mo.put$TK$TV("type", this.alphaBeta);
this.setMO$java_util_Map(mo);
}
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
