(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'javajs.util.BS','org.jmol.util.Logger','javajs.util.PT','org.jmol.adapter.smarter.SmarterJmolAdapter','javajs.util.Lst','org.jmol.adapter.readers.quantum.BasisFunctionReader','org.jmol.util.Escape','javajs.util.AU','java.util.Hashtable','org.jmol.quantum.QS','javajs.util.V3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GaussianReader", null, 'org.jmol.adapter.readers.quantum.MOReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.energyString=null;
this.energyKey=null;
this.calculationNumber=0;
this.scanPoint=0;
this.equivalentAtomSets=0;
this.stepNumber=0;
this.moModelSet=0;
this.namedSets=null;
this.isHighPrecision=false;
this.haveHighPrecision=false;
this.allowHighPrecision=false;
this.orientationInput=false;
this.orientation=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.energyString="";
this.energyKey="";
this.calculationNumber=1;
this.scanPoint=-1;
this.equivalentAtomSets=0;
this.moModelSet=-1;
this.namedSets=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.allowHighPrecision=!this.checkAndRemoveFilterKey$S("NOHP");
this.orientation=(this.checkFilterKey$S("ORIENTATION:INPUT") ? "Input" : this.checkFilterKey$S("ORIENTATION:STANDARD") ? "Standard" : null);
this.orientationInput=(this.orientation == "Input");
this.appendLoadNote$S("Orientation:" + (this.orientation == null  ? "ALL" : this.orientation));
if (this.orientation != null ) this.orientation += " orientation:";
C$.superclazz.prototype.initializeReader$.apply(this, []);
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.startsWith$S(" Step number")) {
this.equivalentAtomSets=0;
this.stepNumber++;
var scanPointIndex=this.line.indexOf$S("scan point");
if (scanPointIndex > 0) {
this.scanPoint=this.parseIntAt$S$I(this.line, scanPointIndex + 10);
} else {
this.scanPoint=-1;
}return true;
}if (this.line.indexOf$S("-- Stationary point found") > 0) {
if (this.scanPoint >= 0) this.scanPoint++;
return true;
}if (this.orientation == null  ? this.line.indexOf$S("Input orientation:") >= 0 || this.line.indexOf$S("Z-Matrix orientation:") >= 0  || this.line.indexOf$S("Standard orientation:") >= 0  : this.line.indexOf$S(this.orientation) >= 0 || this.orientationInput && this.line.indexOf$S("Z-Matrix orientation:") >= 0  ) {
if (!this.doGetModel$I$S(++this.modelNumber, null)) {
return this.checkLastModel$();
}this.equivalentAtomSets++;
$I$(2).info$S(this.asc.atomSetCount + " model " + this.modelNumber + " step " + this.stepNumber + " equivalentAtomSet " + this.equivalentAtomSets + " calculation " + this.calculationNumber + " scan point " + this.scanPoint + this.line );
this.readAtoms$();
return false;
}if (!this.doProcessLines) return true;
if (this.line.startsWith$S(" Energy=")) {
p$1.setEnergy.apply(this, []);
return true;
}if (this.line.startsWith$S(" SCF Done:")) {
p$1.readSCFDone.apply(this, []);
return true;
}if (!this.orientationInput && this.line.startsWith$S(" Harmonic frequencies") ) {
this.readFrequencies$S$Z(":", true);
return true;
}if (this.line.startsWith$S(" Total atomic charges:") || this.line.startsWith$S(" Mulliken atomic charges:") ) {
this.readPartialCharges$();
return true;
}if (this.line.startsWith$S(" Dipole moment")) {
this.readDipoleMoment$();
return true;
}if (this.line.startsWith$S(" Standard basis:") || this.line.startsWith$S(" General basis read from") ) {
this.energyUnits="";
this.calculationType=this.line.substring$I(this.line.indexOf$S(":") + 1).trim$();
return true;
}if (this.line.startsWith$S(" AO basis set")) {
this.readBasis$();
return true;
}if (this.line.indexOf$S("Molecular Orbital Coefficients") >= 0 || this.line.indexOf$S("Natural Orbital Coefficients") >= 0  || this.line.indexOf$S("Natural Transition Orbitals") >= 0 ) {
if (!this.filterMO$()) return true;
this.readMolecularOrbitals$();
$I$(2).info$S(this.orbitals.size$() + " molecular orbitals read");
return true;
}if (this.line.startsWith$S(" Normal termination of Gaussian")) {
++this.calculationNumber;
this.equivalentAtomSets=0;
return true;
}if (this.line.startsWith$S(" Mulliken atomic spin densities:")) {
p$1.getSpinDensities$I.apply(this, [11]);
return true;
}if (this.line.startsWith$S(" Mulliken charges and spin densities:")) {
p$1.getSpinDensities$I.apply(this, [21]);
return true;
}return this.checkNboLine$();
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
if (this.orientation == null ) {
this.appendLoadNote$S("\nUse filter \'orientation:xxx\' where \'xxx\' is one of: input (includes z-matrix), standard, or ALL");
} else {
this.appendLoadNote$S("\nfilter: " + this.filter);
}});

Clazz.newMeth(C$, 'getSpinDensities$I', function (pt) {
this.rd$();
var data=Clazz.array(Float.TYPE, [this.asc.getLastAtomSetAtomCount$()]);
for (var i=0; i < data.length; i++) data[i]=this.parseFloatStr$S(this.rd$().substring$I$I(pt, pt + 10));

this.asc.setAtomProperties$S$O$I$Z("spin", data, -1, false);
this.appendLoadNote$S(data.length + " spin densities loaded into model " + (this.asc.iSet + 1) );
}, p$1);

Clazz.newMeth(C$, 'readSCFDone', function () {
var tokens=$I$(3).getTokensAt$S$I(this.line, 11);
if (tokens.length < 4) return;
this.energyKey=tokens[0];
this.asc.setAtomSetEnergy$S$F(tokens[2], this.parseFloatStr$S(tokens[2]));
this.energyString=tokens[2] + " " + tokens[3] ;
p$1.setNames$S$javajs_util_BS$I.apply(this, [this.energyKey + " = " + this.energyString , this.namedSets, this.equivalentAtomSets]);
p$1.setProps$S$S$I.apply(this, [this.energyKey, this.energyString, this.equivalentAtomSets]);
tokens=$I$(3).getTokens$S(this.rd$());
if (tokens.length > 2) {
p$1.setProps$S$S$I.apply(this, [tokens[0], tokens[2], this.equivalentAtomSets]);
if (tokens.length > 5) p$1.setProps$S$S$I.apply(this, [tokens[3], tokens[5], this.equivalentAtomSets]);
tokens=$I$(3).getTokens$S(this.rd$());
}if (tokens.length > 2) p$1.setProps$S$S$I.apply(this, [tokens[0], tokens[2], this.equivalentAtomSets]);
}, p$1);

Clazz.newMeth(C$, 'setProps$S$S$I', function (key, value, n) {
for (var i=this.asc.iSet; --n >= 0 && i >= 0 ; --i) this.asc.setAtomSetModelPropertyForSet$S$S$I(key, value, i);

}, p$1);

Clazz.newMeth(C$, 'setNames$S$javajs_util_BS$I', function (atomSetName, namedSets, n) {
for (var i=this.asc.iSet; --n >= 0 && i >= 0 ; --i) if (namedSets == null  || !namedSets.get$I(i) ) this.asc.setModelInfoForSet$S$O$I("name", atomSetName, i);

}, p$1);

Clazz.newMeth(C$, 'setEnergy', function () {
var tokens=this.getTokens$();
this.energyKey="Energy";
this.energyString=tokens[1];
p$1.setNames$S$javajs_util_BS$I.apply(this, ["Energy = " + tokens[1], this.namedSets, this.equivalentAtomSets]);
this.asc.setAtomSetEnergy$S$F(this.energyString, this.parseFloatStr$S(this.energyString));
}, p$1);

Clazz.newMeth(C$, 'readAtoms$', function () {
this.asc.newAtomSet$();
this.haveHighPrecision=false;
if (this.energyKey.length$() != 0) this.asc.setAtomSetName$S(this.energyKey + " = " + this.energyString );
this.asc.setAtomSetEnergy$S$F(this.energyString, this.parseFloatStr$S(this.energyString));
var path=this.getTokens$()[0];
this.readLines$I(4);
var tokens;
while (this.rd$() != null  && !this.line.startsWith$S(" --") ){
tokens=this.getTokens$();
var atom=this.asc.addNewAtom$();
atom.elementNumber=($s$[0] = this.parseIntStr$S(tokens[1]), $s$[0]);
if (atom.elementNumber < 0) atom.elementNumber=($s$[0] = 0, $s$[0]);
this.setAtomCoordTokens$org_jmol_adapter_smarter_Atom$SA$I(atom, tokens, tokens.length - 3);
}
this.asc.setAtomSetModelProperty$S$S(".PATH", "Calculation " + this.calculationNumber + (this.scanPoint >= 0 ? ($I$(4).PATH_SEPARATOR + "Scan Point " + this.scanPoint ) : "") + $I$(4).PATH_SEPARATOR + path );
});

Clazz.newMeth(C$, 'readBasis$', function () {
this.shells=Clazz.new_($I$(5));
var gdata=Clazz.new_($I$(5));
var ac=0;
this.gaussianCount=0;
this.shellCount=0;
var lastAtom="";
var tokens;
var doSphericalD=(this.calculationType != null  && (this.calculationType.indexOf$S("5D") > 0) );
var doSphericalF=(this.calculationType != null  && (this.calculationType.indexOf$S("7F") > 0) );
var doSphericalG=(this.calculationType != null  && (this.calculationType.indexOf$S("9G") > 0) );
var doSphericalH=(this.calculationType != null  && (this.calculationType.indexOf$S("11H") > 0) );
var doSphericalI=(this.calculationType != null  && (this.calculationType.indexOf$S("13I") > 0) );
var doSphericalHighL=(doSphericalG || doSphericalH || doSphericalI  );
var doSpherical=(doSphericalD || doSphericalF || doSphericalHighL  );
var isGeneral=(this.line.indexOf$S("general basis input") >= 0);
if (isGeneral) {
while (this.rd$() != null  && this.line.length$() > 0 ){
this.shellCount++;
tokens=this.getTokens$();
ac++;
while (this.rd$().indexOf$S("****") < 0){
var slater=Clazz.array(Integer.TYPE, [4]);
slater[0]=ac;
tokens=this.getTokens$();
var oType=tokens[0];
if (doSphericalF && oType.indexOf$S("F") >= 0  || doSphericalD && oType.indexOf$S("D") >= 0  ) slater[1]=$I$(6).getQuantumShellTagIDSpherical$S(oType);
 else slater[1]=$I$(6).getQuantumShellTagID$S(oType);
var nGaussians=this.parseIntStr$S(tokens[1]);
slater[2]=this.gaussianCount + 1;
slater[3]=nGaussians;
if (this.debugging) $I$(2).debug$S("Slater " + this.shells.size$() + " " + $I$(7).eAI$IA(slater) );
this.shells.addLast$TV(slater);
this.gaussianCount+=nGaussians;
for (var i=0; i < nGaussians; i++) {
this.rd$();
this.line=$I$(3).rep$S$S$S(this.line, "D ", "D+");
tokens=this.getTokens$();
if (this.debugging) $I$(2).debug$S("Gaussians " + (i + 1) + " " + $I$(7).eAS$SA$Z(tokens, true) );
gdata.addLast$TV(tokens);
}
}
}
} else {
while (this.rd$() != null  && this.line.startsWith$S(" Atom") ){
this.shellCount++;
tokens=this.getTokens$();
var slater=Clazz.array(Integer.TYPE, [4]);
if (!tokens[1].equals$O(lastAtom)) ac++;
lastAtom=tokens[1];
slater[0]=ac;
var oType=tokens[4];
if (doSpherical && (doSphericalF && oType.indexOf$S("F") >= 0  || doSphericalD && oType.indexOf$S("D") >= 0   || doSphericalHighL && (doSphericalG && oType.indexOf$S("G") >= 0  || doSphericalH && oType.indexOf$S("H") >= 0   || doSphericalI && oType.indexOf$S("I") >= 0  )  ) ) slater[1]=$I$(6).getQuantumShellTagIDSpherical$S(oType);
 else slater[1]=$I$(6).getQuantumShellTagID$S(oType);
this.enableShell$I(slater[1]);
var nGaussians=this.parseIntStr$S(tokens[5]);
slater[2]=this.gaussianCount + 1;
slater[3]=nGaussians;
this.shells.addLast$TV(slater);
this.gaussianCount+=nGaussians;
for (var i=0; i < nGaussians; i++) {
gdata.addLast$TV($I$(3).getTokens$S(this.rd$()));
}
}
}if (ac == 0) ac=1;
this.gaussians=$I$(8).newFloat2$I(this.gaussianCount);
for (var i=0; i < this.gaussianCount; i++) {
tokens=gdata.get$I(i);
this.gaussians[i]=Clazz.array(Float.TYPE, [tokens.length]);
for (var j=0; j < tokens.length; j++) this.gaussians[i][j]=this.parseFloatStr$S(tokens[j]);

}
$I$(2).info$S(this.shellCount + " slater shells read");
$I$(2).info$S(this.gaussianCount + " gaussian primitives read");
});

Clazz.newMeth(C$, 'readMolecularOrbitals$', function () {
if (this.shells == null ) return;
var mos=$I$(8).createArrayOfHashtable$I(5);
var data=$I$(8).createArrayOfArrayList$I(5);
var nThisLine=0;
var isNOtype=this.line.contains$CharSequence("Natural Orbital");
while (this.rd$() != null  && this.line.toUpperCase$().indexOf$S("DENS") < 0 ){
var tokens;
if (this.line.indexOf$S("eta Molecular Orbital Coefficients") >= 0) {
this.addMOData$I$javajs_util_LstA$java_util_MapA(nThisLine, data, mos);
nThisLine=0;
if (!this.filterMO$()) break;
}if (this.line.indexOf$S("                    ") == 0) {
this.addMOData$I$javajs_util_LstA$java_util_MapA(nThisLine, data, mos);
if (isNOtype) {
tokens=this.getTokens$();
nThisLine=tokens.length;
tokens=$I$(3).getTokens$S(this.rd$());
} else {
tokens=$I$(3).getTokens$S(this.rd$());
nThisLine=tokens.length;
}for (var i=0; i < nThisLine; i++) {
mos[i]=Clazz.new_($I$(9));
data[i]=Clazz.new_($I$(5));
var sym;
if (isNOtype) {
mos[i].put$TK$TV("occupancy", Float.valueOf$F($I$(3).parseFloat$S(tokens[i + 2])));
} else {
sym=tokens[i];
mos[i].put$TK$TV("symmetry", sym);
if (sym.indexOf$S("O") >= 0) mos[i].put$TK$TV("occupancy", Float.valueOf$F(2));
 else if (sym.indexOf$S("V") >= 0) mos[i].put$TK$TV("occupancy", Float.valueOf$F(0));
}}
if (isNOtype) continue;
this.line=this.rd$().substring$I(21);
tokens=this.getTokens$();
if (tokens.length != nThisLine) tokens=org.jmol.adapter.smarter.AtomSetCollectionReader.getStrings$S$I$I(this.line, nThisLine, 10);
for (var i=0; i < nThisLine; i++) {
mos[i].put$TK$TV("energy", Float.valueOf$S(tokens[i]));
}
continue;
} else if (this.line.length$() < 21 || (this.line.charAt$I(5) != " " && !$I$(3).isDigit$C(this.line.charAt$I(5)) ) ) {
continue;
}try {
this.line=$I$(3).rep$S$S$S(this.line, " 0 ", "0  ");
tokens=this.getTokens$();
var type=tokens[tokens.length - nThisLine - 1 ].substring$I(1);
if ($I$(3).isDigit$C(type.charAt$I(0))) type=type.substring$I(1);
if (!$I$(10).isQuantumBasisSupported$C(type.charAt$I(0)) && "XYZ".indexOf$I(type.charAt$I(0)) >= 0 ) type=(type.length$() == 2 ? "D" : "F") + type;
if (!$I$(10).isQuantumBasisSupported$C(type.charAt$I(0))) continue;
tokens=org.jmol.adapter.smarter.AtomSetCollectionReader.getStrings$S$I$I(this.line.substring$I(this.line.length$() - 10 * nThisLine), nThisLine, 10);
for (var i=0; i < nThisLine; i++) data[i].addLast$TV(tokens[i]);

} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(2).error$S("Error reading Gaussian file Molecular Orbitals at line: " + this.line);
break;
} else {
throw e;
}
}
}
this.addMOData$I$javajs_util_LstA$java_util_MapA(nThisLine, data, mos);
this.setMOData$Z(this.moModelSet != this.asc.atomSetCount);
this.moModelSet=this.asc.atomSetCount;
});

Clazz.newMeth(C$, 'readFrequencies$S$Z', function (key, mustHave) {
this.discardLinesUntilContains2$S$S(key, ":");
if (this.line == null  && mustHave ) throw (Clazz.new_(Clazz.load('Exception').c$$S,["No frequencies encountered"]));
this.line=this.rd$();
var ac=this.asc.getLastAtomSetAtomCount$();
var data=Clazz.array(String, [ac, null]);
var temp=null;
var atomIndices=Clazz.array(Integer.TYPE, [ac]);
while (this.line != null  && this.line.length$() > 20 ){
var symmetries=$I$(3).getTokens$S(this.rd$());
this.discardLinesUntilContains$S(" Frequencies");
this.isHighPrecision=(this.line.indexOf$S("---") > 0);
if (this.isHighPrecision ? !this.allowHighPrecision : this.haveHighPrecision) return;
if (this.isHighPrecision && !this.haveHighPrecision ) {
this.appendLoadNote$S("high precision vibrational modes enabled. Use filter \'NOHP\' to disable.");
this.haveHighPrecision=true;
}if (temp == null ) temp=Clazz.array(String, [this.isHighPrecision ? 3 : 1, 0]);
var width=(this.isHighPrecision ? 22 : 15);
var frequencies=$I$(3).getTokensAt$S$I(this.line, width);
var red_masses=$I$(3).getTokensAt$S$I(this.discardLinesUntilContains$S(this.isHighPrecision ? "Reduced masses" : "Red. masses"), width);
var frc_consts=$I$(3).getTokensAt$S$I(this.discardLinesUntilContains$S(this.isHighPrecision ? "Force constants" : "Frc consts"), width);
var intensities=$I$(3).getTokensAt$S$I(this.discardLinesUntilContains$S(this.isHighPrecision ? "IR Intensities" : "IR Inten"), width);
var iAtom0=this.asc.ac;
var frequencyCount=frequencies.length;
var ignore=Clazz.array(Boolean.TYPE, [frequencyCount]);
for (var i=0; i < frequencyCount; ++i) {
ignore[i]=!this.doGetVibration$I(++this.vibrationNumber);
if (ignore[i]) continue;
this.asc.cloneAtomSetWithBonds$Z(true);
var name=this.asc.setAtomSetFrequency$I$S$S$S$S(this.vibrationNumber, "Calculation " + this.calculationNumber, symmetries[i], frequencies[i], null);
this.appendLoadNote$S("model " + this.asc.atomSetCount + ": " + name );
this.namedSets.set$I(this.asc.iSet);
this.asc.setAtomSetModelProperty$S$S("ReducedMass", red_masses[i] + " AMU");
this.asc.setAtomSetModelProperty$S$S("ForceConstant", frc_consts[i] + " mDyne/A");
this.asc.setAtomSetModelProperty$S$S("IRIntensity", intensities[i] + " KM/Mole");
}
this.discardLinesUntilContains$S(" Atom ");
if (this.isHighPrecision) {
while (true){
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, 1, ac, ignore, false, 23, 10, null, 9, temp);
if (temp[0] == null ) break;
}
} else {
var nLines=0;
while (true){
this.fillDataBlockFixed$SAA$I$I$I(temp, 0, 0, 0);
if (temp[0].length < 10) break;
atomIndices[nLines]=Integer.valueOf$S(temp[0][0]).intValue$() - 1;
data[nLines++]=temp[0];
}
this.fillFrequencyData$I$I$I$ZA$Z$I$I$IA$I$SAA(iAtom0, nLines, ac, ignore, true, 0, 0, atomIndices, 0, data);
}}
});

Clazz.newMeth(C$, 'readDipoleMoment$', function () {
var tokens=$I$(3).getTokens$S(this.rd$());
if (tokens.length != 8) return;
var dipole=$I$(11).new3$F$F$F(this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[3]), this.parseFloatStr$S(tokens[5]));
$I$(2).info$S("Molecular dipole for model " + this.asc.atomSetCount + " = " + dipole );
this.asc.setCurrentModelInfo$S$O("dipole", dipole);
});

Clazz.newMeth(C$, 'readPartialCharges$', function () {
this.rd$();
var ac=this.asc.ac;
var i0=this.asc.getLastAtomSetAtomIndex$();
var atoms=this.asc.atoms;
for (var i=i0; i < ac; ++i) {
while (atoms[i].elementNumber == 0)++i;

var charge=this.parseFloatStr$S($I$(3).getTokens$S(this.rd$())[2]);
atoms[i].partialCharge=charge;
}
$I$(2).info$S("Mulliken charges found for Model " + this.asc.atomSetCount);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:19 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
