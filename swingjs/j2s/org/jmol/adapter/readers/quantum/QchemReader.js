(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'org.jmol.api.JmolAdapter','java.util.Hashtable','javajs.util.Lst','org.jmol.adapter.readers.quantum.BasisFunctionReader','javajs.util.PT','javajs.util.AU','org.jmol.util.Logger',['org.jmol.adapter.readers.quantum.QchemReader','.MOInfo'],'org.jmol.quantum.QS']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QchemReader", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.jmol.adapter.readers.quantum.MOReader');
C$.$classes$=[['MOInfo',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.calculationNumber=1;
this.isFirstJob=true;
this.alphas=null;
this.betas=null;
this.nBasis=0;
this.dFixed=false;
this.fFixed=false;
this.dList="";
this.fList="";
this.dSpherical=false;
this.fSpherical=false;
},1);

C$.$fields$=[['Z',['isFirstJob','dFixed','fFixed','dSpherical','fSpherical'],'I',['calculationNumber','nBasis'],'S',['dList','fList'],'O',['alphas','org.jmol.adapter.readers.quantum.QchemReader.MOInfo[]','+betas']]
,['S',['$DC_LIST','$DS_LIST','$FC_LIST','$FS_LIST']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.energyUnits="au";
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.indexOf$S("Standard Nuclear Orientation") >= 0) {
p$1.readAtoms.apply(this, []);
this.moData=null;
return true;
}if (this.line.indexOf$S("Total energy") >= 0 || this.line.indexOf$S("total energy") >= 0  || this.line.indexOf$S("Energy is") >= 0 ) {
if (this.line.indexOf$S("Excitation") == -1) p$1.readEnergy.apply(this, []);
return true;
}if (this.line.indexOf$S("Requested basis set is") >= 0) {
p$1.readCalculationType.apply(this, []);
return true;
}if (this.line.indexOf$S("VIBRATIONAL FREQUENCIES") >= 0) {
p$1.readFrequencies.apply(this, []);
return true;
}if (this.line.indexOf$S("Mulliken Net Atomic Charges") >= 0) {
p$1.readPartialCharges.apply(this, []);
return true;
}if (this.line.startsWith$S("Job ") || this.line.startsWith$S("Running Job") ) {
if (this.isFirstJob && this.line.startsWith$S("Running") ) this.calculationNumber=0;
this.calculationNumber++;
this.isFirstJob=false;
this.moData=null;
return true;
}if (this.line.indexOf$S("Basis set in general basis input format") >= 0) {
if (this.moData == null ) {
p$1.readBasis.apply(this, []);
}return true;
}if (this.moData == null ) return true;
if (this.line.indexOf$S("Orbital Energies (a.u.) and Symmetries") >= 0) {
p$1.readESym$Z.apply(this, [true]);
return true;
}if (this.line.indexOf$S("Orbital Energies (a.u.)") >= 0) {
p$1.readESym$Z.apply(this, [false]);
return true;
}if (this.line.indexOf$S("MOLECULAR ORBITAL COEFFICIENTS") >= 0) {
if (this.filterMO$()) p$1.readQchemMolecularOrbitals.apply(this, []);
return true;
}return this.checkNboLine$();
});

Clazz.newMeth(C$, 'readCalculationType', function () {
this.calculationType=this.line.substring$I(this.line.indexOf$S("set is") + 6).trim$();
}, p$1);

Clazz.newMeth(C$, 'readAtoms', function () {
this.asc.newAtomSet$();
this.setMOData$Z(true);
this.dFixed=this.fFixed=false;
this.readLines$I(2);
var tokens;
while (this.rd$() != null  && !this.line.startsWith$S(" --") ){
tokens=this.getTokens$();
if (tokens.length < 5) continue;
var symbol=tokens[1];
if ($I$(1).getElementNumber$S(symbol) > 0) this.addAtomXYZSymName$SA$I$S$S(tokens, 2, symbol, null);
}
this.asc.setAtomSetModelProperty$S$S(".PATH", "Job " + this.calculationNumber);
}, p$1);

Clazz.newMeth(C$, 'readFrequencies', function () {
while (this.rd$() != null  && this.line.indexOf$S("STANDARD") < 0 ){
if (!this.line.startsWith$S(" Frequency:")) this.discardLinesUntilStartsWith$S(" Frequency:");
var frequencies=this.getTokens$();
var frequencyCount=frequencies.length - 1;
var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
var ac=this.asc.getLastAtomSetAtomCount$();
var iAtom0=this.asc.ac;
for (var i=0; i < frequencyCount; ++i) {
ignore[i]=!this.doGetVibration$I(++this.vibrationNumber);
if (ignore[i]) continue;
this.asc.cloneLastAtomSet$();
this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, "Job " + this.calculationNumber, null, frequencies[i + 1], null);
}
this.discardLinesUntilStartsWith$S("               X");
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, ac, ac, ignore, true, 0, 0, null, 0, null);
this.discardLinesUntilBlank$();
}
}, p$1);

Clazz.newMeth(C$, 'readPartialCharges', function () {
this.readLines$I(3);
var atoms=this.asc.atoms;
var ac=this.asc.getLastAtomSetAtomCount$();
for (var i=0; i < ac && this.rd$() != null  ; ++i) atoms[i].partialCharge=this.parseFloatStr$S(this.getTokens$()[2]);

}, p$1);

Clazz.newMeth(C$, 'readEnergy', function () {
var ac=this.asc.getLastAtomSetAtomCount$();
var tokens=this.getTokens$();
var energyKey="E(" + tokens[0] + ")" ;
var energyString=tokens[tokens.length - 1];
this.asc.setAtomSetEnergy$S$F(energyString, this.parseFloatStr$S(energyString));
this.asc.setAtomSetName$S(energyKey + " = " + energyString );
this.asc.setModelInfoForSet$S$O$I("name", energyKey + " " + energyString , ac);
}, p$1);

Clazz.newMeth(C$, 'readBasis', function () {
this.moData=Clazz.new_($I$(2,1));
var ac=1;
var shellCount=0;
var gaussianCount=0;
this.shells=Clazz.new_($I$(3,1));
var gdata=Clazz.new_($I$(3,1));
var tokens;
this.discardLinesUntilStartsWith$S("$basis");
this.rd$();
while (this.rd$() != null ){
if (this.line.startsWith$S("****")) {
ac++;
if (this.rd$() != null  && this.line.startsWith$S("$end") ) break;
continue;
}shellCount++;
var slater=Clazz.array(Integer.TYPE, [4]);
tokens=this.getTokens$();
slater[0]=ac;
slater[1]=$I$(4).getQuantumShellTagID$S(tokens[0]);
slater[2]=gaussianCount + 1;
var nGaussians=this.parseIntStr$S(tokens[1]);
slater[3]=nGaussians;
this.shells.addLast$O(slater);
gaussianCount+=nGaussians;
for (var i=0; i < nGaussians; i++) {
gdata.addLast$O((function(a,f){return f.apply(null,a)})([this.rd$()],$I$(5).getTokens$S));
}
}
this.gaussians=$I$(6).newFloat2$I(gaussianCount);
for (var i=0; i < gaussianCount; i++) {
tokens=gdata.get$I(i);
this.gaussians[i]=Clazz.array(Float.TYPE, [tokens.length]);
for (var j=0; j < tokens.length; j++) this.gaussians[i][j]=this.parseFloatStr$S(tokens[j]);

}
if (this.debugging) {
$I$(7).debug$S(shellCount + " slater shells read");
$I$(7).debug$S(gaussianCount + " gaussian primitives read");
}this.discardLinesUntilStartsWith$S(" There are");
tokens=this.getTokens$();
this.nBasis=this.parseIntStr$S(tokens[5]);
}, p$1);

Clazz.newMeth(C$, 'readESym$Z', function (haveSym) {
this.alphas=Clazz.array($I$(8), [this.nBasis]);
this.betas=Clazz.array($I$(8), [this.nBasis]);
var moInfos;
var ne=0;
var readBetas=false;
this.discardLinesUntilStartsWith$S(" Alpha");
var tokens=this.getTokens$();
moInfos=this.alphas;
for (var e=0; e < 2; e++) {
var nMO=0;
while (this.rd$() != null ){
if (this.line.startsWith$S(" -- ")) {
ne=0;
if (this.line.indexOf$S("Vacant") < 0) {
if (this.line.indexOf$S("Occupied") > 0) ne=1;
}this.rd$();
}if (this.line.startsWith$S(" -------")) {
e=2;
break;
}var nOrbs=this.getTokens$().length;
if (nOrbs == 0 || this.line.startsWith$S(" Warning") ) {
this.discardLinesUntilStartsWith$S(" Beta");
readBetas=true;
moInfos=this.betas;
break;
}if (haveSym) tokens=(function(a,f){return f.apply(null,a)})([this.rd$()],$I$(5).getTokens$S);
for (var i=0, j=0; i < nOrbs; i++, j+=2) {
var info=Clazz.new_($I$(8,1),[this, null]);
info.ne=ne;
if (haveSym) info.moSymmetry=tokens[j] + tokens[j + 1] + " " ;
moInfos[nMO]=info;
nMO++;
}
}
}
if (!readBetas) this.betas=this.alphas;
}, p$1);

Clazz.newMeth(C$, 'readQchemMolecularOrbitals', function () {
var orbitalType=this.getTokens$()[0];
this.alphaBeta="A";
p$1.readMOs$Z$org_jmol_adapter_readers_quantum_QchemReader_MOInfoA.apply(this, [orbitalType.equals$O("RESTRICTED"), this.alphas]);
if (orbitalType.equals$O("ALPHA")) {
this.discardLinesUntilContains$S("BETA");
this.alphaBeta="B";
p$1.readMOs$Z$org_jmol_adapter_readers_quantum_QchemReader_MOInfoA.apply(this, [false, this.betas]);
}var isOK=true;
if (this.dList.length$() > 0) {
if (this.dSpherical) isOK=this.getDFMap$S$S$I$S$I("DS", this.dList, 3, C$.$DS_LIST, 2);
 else isOK=this.getDFMap$S$S$I$S$I("DC", this.dList, 4, C$.$DC_LIST, 3);
if (!isOK) {
(function(a,f){return f.apply(null,a)})(["atomic orbital order is unrecognized -- skipping reading of MOs. dList=" + this.dList],$I$(7).error$S);
this.shells=null;
}}if (this.fList.length$() > 0) {
if (this.fSpherical) isOK=this.getDFMap$S$S$I$S$I("FS", this.fList, 5, C$.$FS_LIST, 2);
 else isOK=this.getDFMap$S$S$I$S$I("FC", this.fList, 6, C$.$FC_LIST, 3);
if (!isOK) {
(function(a,f){return f.apply(null,a)})(["atomic orbital order is unrecognized -- skipping reading of MOs. fList=" + this.fList],$I$(7).error$S);
this.shells=null;
}}this.setMOData$Z(this.shells == null );
this.shells=null;
}, p$1);

Clazz.newMeth(C$, 'readMOs$Z$org_jmol_adapter_readers_quantum_QchemReader_MOInfoA', function (restricted, moInfos) {
var mos=$I$(6).createArrayOfHashtable$I(6);
var mocoef=$I$(6).newFloat2$I(6);
var moid=Clazz.array(Integer.TYPE, [6]);
var tokens;
var energy;
var nMOs=0;
while (this.rd$().length$() > 2){
tokens=this.getTokens$();
var nMO=tokens.length;
energy=(function(a,f){return f.apply(null,a)})([this.rd$().substring$I(13)],$I$(5).getTokens$S);
for (var i=0; i < nMO; i++) {
moid[i]=this.parseIntStr$S(tokens[i]) - 1;
mocoef[i]=Clazz.array(Float.TYPE, [this.nBasis]);
mos[i]=Clazz.new_($I$(2,1));
}
for (var i=0, pt=0; i < this.nBasis; i++) {
tokens=(function(a,f){return f.apply(null,a)})([this.rd$()],$I$(5).getTokens$S);
var s=this.line.substring$I$I(12, 17).trim$();
var ch=s.charAt$I(0);
switch (ch.$c()) {
case 100:
s=s.substring$I(s.length$() - 3).toUpperCase$();
if (s.startsWith$S("D ")) {
if (!this.dFixed) this.fixSlaterTypes$I$I(4, 3);
s="D" + s.charAt$I(2);
this.dSpherical=true;
}if (this.dList.indexOf$S(s) < 0) this.dList += s + " ";
this.dFixed=true;
break;
case 102:
s=s.substring$I(s.length$() - 3).toUpperCase$();
if (s.startsWith$S("F ")) {
if (!this.fFixed) this.fixSlaterTypes$I$I(6, 5);
s="F" + s.charAt$I(2);
this.fSpherical=true;
}if (this.fList.indexOf$S(s) < 0) this.fList += s + " ";
this.fFixed=true;
break;
default:
if (!$I$(9).isQuantumBasisSupported$C(ch)) continue;
break;
}
for (var j=tokens.length - nMO, k=0; k < nMO; j++, k++) mocoef[k][pt]=this.parseFloatStr$S(tokens[j]);

pt++;
}
for (var i=0; i < nMO; i++) {
var moInfo=moInfos[moid[i]];
mos[i].put$O$O("energy", Float.valueOf$S(energy[i]));
mos[i].put$O$O("coefficients", mocoef[i]);
var label=this.alphaBeta;
var ne=moInfo.ne;
if (restricted) ne=this.alphas[moid[i]].ne + this.betas[moid[i]].ne;
mos[i].put$O$O("occupancy", Float.valueOf$F(ne));
switch (ne) {
case 2:
label="AB";
break;
case 1:
break;
case 0:
if (restricted) label="V";
 else label="V" + label;
break;
}
mos[i].put$O$O("symmetry", moInfo.moSymmetry + label + "(" + (moid[i] + 1) + ")" );
this.orbitals.addLast$O(mos[i]);
}
nMOs+=nMO;
}
return nMOs;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$DC_LIST="DXX   DYY   DZZ   DXY   DXZ   DYZ";
C$.$DS_LIST="D3    D4    D2    D5    D1";
C$.$FC_LIST="XXX   YYY   ZZZ   XYY   XXY   XXZ   XZZ   YZZ   YYZ   XYZ";
C$.$FS_LIST="F4    F5    F3    F6    F2    F7    F1";
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.QchemReader, "MOInfo", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ne=0;
this.moSymmetry="";
},1);

C$.$fields$=[['I',['ne'],'S',['moSymmetry']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:00 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
