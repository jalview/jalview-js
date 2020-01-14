(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'org.jmol.util.Logger','javajs.util.Lst','javajs.util.PT','javajs.util.V3']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GamessUSReader", null, 'org.jmol.adapter.readers.quantum.GamessReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lowdenCharges=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.lowdenCharges=this.checkAndRemoveFilterKey$S("CHARGE=LOW");
C$.superclazz.prototype.initializeReader$.apply(this, []);
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.startsWith$S(" $DATA")) return p$1.readInputDeck.apply(this, []);
if (this.line.indexOf$S("***************") >= 0) $I$(1).info$S(this.rd$());
var isBohr;
if (this.line.indexOf$S("FINAL ENERGY IS") >= 0 || this.line.indexOf$S("TOTAL ENERGY = ") >= 0  || this.line.indexOf$S("FINAL RHF ENERGY IS") >= 0 ) this.readEnergy$();
if (this.line.indexOf$S("BASIS OPTIONS") >= 0) {
this.readBasisInfo$();
return true;
}if (this.line.indexOf$S("$CONTRL OPTIONS") >= 0) {
this.readControlInfo$();
return true;
}if (this.line.indexOf$S("ATOMIC BASIS SET") >= 0) {
this.readGaussianBasis$S$S("SHELL TYPE", "TOTAL");
return false;
}if ((isBohr=this.line.indexOf$S("COORDINATES (BOHR)") >= 0) || this.line.indexOf$S("COORDINATES OF ALL ATOMS ARE (ANGS)") >= 0 ) {
if (!this.doGetModel$I$S(++this.modelNumber, null)) return this.checkLastModel$();
this.atomNames=Clazz.new_($I$(2));
if (isBohr) this.readAtomsInBohrCoordinates$();
 else p$1.readAtomsInAngstromCoordinates.apply(this, []);
return true;
}if (!this.doProcessLines) return true;
if (this.line.indexOf$S("FREQUENCIES IN CM") >= 0) {
this.readFrequencies$();
return true;
}if (this.line.indexOf$S("SUMMARY OF THE EFFECTIVE FRAGMENT") >= 0) {
this.readEFPInBohrCoordinates$();
return false;
}if (this.line.indexOf$S("  TOTAL MULLIKEN AND LOWDIN ATOMIC POPULATIONS") >= 0) {
this.readPartialCharges$();
return false;
}if (this.line.indexOf$S("ELECTROSTATIC MOMENTS") >= 0) {
this.readDipoleMoment$();
return true;
}if (this.line.indexOf$S("- ALPHA SET -") >= 0) this.alphaBeta="alpha";
 else if (this.line.indexOf$S("- BETA SET -") >= 0) this.alphaBeta="beta";
 else if (this.line.indexOf$S("  EIGENVECTORS") >= 0 || this.line.indexOf$S("  INITIAL GUESS ORBITALS") >= 0  || this.line.indexOf$S("  MCSCF OPTIMIZED ORBITALS") >= 0  || this.line.indexOf$S("  MCSCF NATURAL ORBITALS") >= 0  || this.line.indexOf$S("  MOLECULAR ORBITALS") >= 0 && this.line.indexOf$S("  MOLECULAR ORBITALS LOCALIZED BY THE POPULATION METHOD") < 0  ) {
if (!this.filterMO$()) return true;
this.readMolecularOrbitals$I(1);
return false;
}if (this.line.indexOf$S("EDMISTON-RUEDENBERG ENERGY LOCALIZED ORBITALS") >= 0 || this.line.indexOf$S("  THE PIPEK-MEZEY POPULATION LOCALIZED ORBITALS ARE") >= 0 ) {
if (!this.filterMO$()) return true;
this.readMolecularOrbitals$I(0);
return false;
}if (this.line.indexOf$S("  NATURAL ORBITALS IN ATOMIC ORBITAL BASIS") >= 0) {
if (!this.filterMO$()) return true;
this.readMolecularOrbitals$I(2);
return false;
}return this.checkNboLine$();
});

Clazz.newMeth(C$, 'readInputDeck', function () {
this.readLines$I(2);
this.asc.newAtomSet$();
while (this.rd$().indexOf$S("$END") < 0){
var tokens=this.getTokens$();
if (tokens.length > 4) this.addAtomXYZSymName$SA$I$S$S(tokens, 2, tokens[0], null).elementNumber=($s$[0] = this.parseIntStr$S(tokens[1]), $s$[0]);
}
return (this.continuing=false);
}, p$1);

Clazz.newMeth(C$, 'readMolecularOrbitals$I', function (headerType) {
this.setCalculationType$();
C$.superclazz.prototype.readMolecularOrbitals$I.apply(this, [headerType]);
});

Clazz.newMeth(C$, 'readEFPInBohrCoordinates$', function () {
var acInFirstModel=this.asc.ac;
this.discardLinesUntilContains$S("MULTIPOLE COORDINATES");
this.rd$();
this.rd$();
while (this.rd$() != null  && this.line.length$() >= 72 ){
var atomName=this.line.substring$I$I(1, 2);
if (atomName.charAt$I(0) == "Z") atomName=this.line.substring$I$I(2, 3);
 else if (this.parseFloatRange$S$I$I(this.line, 67, 73) == 0 ) continue;
var x=this.parseFloatRange$S$I$I(this.line, 8, 25);
var y=this.parseFloatRange$S$I$I(this.line, 25, 40);
var z=this.parseFloatRange$S$I$I(this.line, 40, 56);
if (Float.isNaN$F(x) || Float.isNaN$F(y) || Float.isNaN$F(z)  ) break;
var atom=this.asc.addNewAtom$();
atom.atomName=atomName + (++acInFirstModel);
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, x * 0.5291772, y * 0.5291772, z * 0.5291772);
this.atomNames.addLast$TV(atomName);
}
});

Clazz.newMeth(C$, 'readAtomsInBohrCoordinates$', function () {
this.rd$();
var atomName;
this.asc.newAtomSet$();
var n=0;
while (this.rd$() != null  && (atomName=this.parseTokenRange$S$I$I(this.line, 1, 11)) != null  ){
var x=this.parseFloatRange$S$I$I(this.line, 17, 37);
var y=this.parseFloatRange$S$I$I(this.line, 37, 57);
var z=this.parseFloatRange$S$I$I(this.line, 57, 77);
if (Float.isNaN$F(x) || Float.isNaN$F(y) || Float.isNaN$F(z)  ) break;
var atom=this.asc.addNewAtom$();
atom.elementSymbol=org.jmol.adapter.smarter.AtomSetCollectionReader.getElementSymbol$I(this.parseIntRange$S$I$I(this.line, 11, 14));
atom.atomName=atom.elementSymbol + (++n);
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, x * 0.5291772, y * 0.5291772, z * 0.5291772);
this.atomNames.addLast$TV(atomName);
}
});

Clazz.newMeth(C$, 'readAtomsInAngstromCoordinates', function () {
this.rd$();
this.rd$();
var atomName;
this.asc.newAtomSet$();
var n=0;
while (this.rd$() != null  && (atomName=this.parseTokenRange$S$I$I(this.line, 1, 11)) != null  ){
var x=this.parseFloatRange$S$I$I(this.line, 16, 31);
var y=this.parseFloatRange$S$I$I(this.line, 31, 46);
var z=this.parseFloatRange$S$I$I(this.line, 46, 61);
if (Float.isNaN$F(x) || Float.isNaN$F(y) || Float.isNaN$F(z)  ) break;
var atom=this.asc.addNewAtom$();
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, x, y, z);
atom.elementSymbol=org.jmol.adapter.smarter.AtomSetCollectionReader.getElementSymbol$I(this.parseIntRange$S$I$I(this.line, 11, 14));
atom.atomName=atom.elementSymbol + (++n);
this.atomNames.addLast$TV(atomName);
}
if (this.line.indexOf$S("COORDINATES OF FRAGMENT MULTIPOLE CENTERS (ANGS)") >= 0) {
this.rd$();
this.rd$();
this.rd$();
while (this.rd$() != null  && (atomName=this.parseTokenRange$S$I$I(this.line, 1, 2)) != null  ){
if (this.parseTokenRange$S$I$I(this.line, 1, 2).equals$O("Z")) atomName=this.parseTokenRange$S$I$I(this.line, 2, 3);
 else if (this.parseTokenRange$S$I$I(this.line, 1, 9).equals$O("FRAGNAME")) continue;
 else atomName=this.parseTokenRange$S$I$I(this.line, 1, 2);
var x=this.parseFloatRange$S$I$I(this.line, 16, 31);
var y=this.parseFloatRange$S$I$I(this.line, 31, 46);
var z=this.parseFloatRange$S$I$I(this.line, 46, 61);
if (Float.isNaN$F(x) || Float.isNaN$F(y) || Float.isNaN$F(z)  ) break;
var atom=this.asc.addNewAtom$();
atom.atomName=atomName + (++n);
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, x, y, z);
this.atomNames.addLast$TV(atomName);
}
}}, p$1);

Clazz.newMeth(C$, 'fixShellTag$S', function (tag) {
return tag;
});

Clazz.newMeth(C$, 'readPartialCharges$', function () {
var tokens=null;
var searchstr=(this.lowdenCharges ? "LOW.POP." : "MULL.POP.");
while (this.rd$() != null  && ("".equals$O(this.line.trim$()) || this.line.indexOf$S("ATOM") >= 0 ) ){
tokens=this.getTokens$();
}
var poploc=0;
for (; ++poploc < tokens.length; ) if (searchstr.equals$O(tokens[poploc])) break;

if (++poploc >= tokens.length || !"CHARGE".equals$O(tokens[poploc++]) ) return;
var atoms=this.asc.atoms;
var startAtom=this.asc.getLastAtomSetAtomIndex$();
var endAtom=this.asc.ac;
for (var i=startAtom; i < endAtom && this.rd$() != null  ; ++i) atoms[i].partialCharge=this.parseFloatStr$S($I$(3).getTokens$S(this.prevline)[poploc]);

});

Clazz.newMeth(C$, 'readDipoleMoment$', function () {
var tokens=null;
this.rd$();
while (this.line != null  && ("".equals$O(this.line.trim$()) || this.line.indexOf$S("DX") < 0 ) ){
this.rd$();
}
tokens=this.getTokens$();
if (tokens.length != 5) return;
if ("DX".equals$O(tokens[0]) && "DY".equals$O(tokens[1]) && "DZ".equals$O(tokens[2])  ) {
tokens=$I$(3).getTokens$S(this.rd$());
var dipole=$I$(4).new3$F$F$F(this.parseFloatStr$S(tokens[0]), this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]));
$I$(1).info$S("Molecular dipole for model " + this.asc.atomSetCount + " = " + dipole );
this.asc.setCurrentModelInfo$S$O("dipole", dipole);
}});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:58 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
