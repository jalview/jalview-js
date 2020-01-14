(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'javajs.util.Lst','javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GamessUKReader", null, 'org.jmol.adapter.readers.quantum.GamessReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.symmetries=null;
this.occupancies=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.indexOf$S("BASIS OPTIONS") >= 0) {
this.readBasisInfo$();
return true;
}if (this.line.indexOf$S("$CONTRL OPTIONS") >= 0) {
this.readControlInfo$();
return true;
}if (this.line.indexOf$S("contracted primitive functions") >= 0) {
this.readGaussianBasis$S$S("======================================================", "======");
return false;
}if (this.line.indexOf$S("molecular geometry") >= 0) {
if (!this.doGetModel$I$S(++this.modelNumber, null)) return this.checkLastModel$();
this.atomNames=Clazz.new_($I$(1));
this.readAtomsInBohrCoordinates$();
return true;
}if (!this.doProcessLines) return true;
if (this.line.indexOf$S("FREQUENCY_INFO_WOULD_BE_HERE") >= 0) {
return true;
}if (this.line.indexOf$S("SYMMETRY ASSIGNMENT") >= 0) {
p$1.readOrbitalSymmetryAndOccupancy.apply(this, []);
return false;
}if (this.line.indexOf$S("- ALPHA SET -") >= 0) this.alphaBeta="alpha";
 else if (this.line.indexOf$S("- BETA SET -") >= 0) this.alphaBeta="beta";
 else if (this.line.indexOf$S("eigenvectors") >= 0) {
this.readMolecularOrbitals$I(3);
p$1.setOrbitalSymmetryAndOccupancy.apply(this, []);
return false;
}return this.checkNboLine$();
});

Clazz.newMeth(C$, 'readAtomsInBohrCoordinates$', function () {
this.discardLinesUntilContains$S("*****");
this.discardLinesUntilContains$S("atom");
this.discardLinesUntilContains$S("*****");
this.asc.newAtomSet$();
while (this.rd$() != null  && this.line.indexOf$S("*****") < 0 ){
if (this.line.charAt$I(14) == " ") continue;
var tokens=this.getTokens$();
var atomicNumber=(this.parseFloatStr$S(tokens[2])|0);
var atom=this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(null, tokens, 3, 0.5291772);
atom.elementSymbol=org.jmol.adapter.smarter.AtomSetCollectionReader.getElementSymbol$I(atomicNumber);
this.atomNames.addLast$TV(atom.atomName=tokens[1]);
}
});

Clazz.newMeth(C$, 'fixShellTag$S', function (tag) {
return tag.substring$I(1).toUpperCase$();
});

Clazz.newMeth(C$, 'readOrbitalSymmetryAndOccupancy', function () {
this.readLines$I(4);
this.symmetries=Clazz.new_($I$(1));
this.occupancies=Clazz.new_($I$(1));
while (this.rd$() != null  && this.line.indexOf$S("====") < 0 ){
var tokens=$I$(2).getTokens$S(this.line.substring$I(20));
this.symmetries.addLast$TV(tokens[0] + " " + tokens[1] );
this.occupancies.addLast$TV(Float.valueOf$F(this.parseFloatStr$S(tokens[5])));
}
}, p$1);

Clazz.newMeth(C$, 'setOrbitalSymmetryAndOccupancy', function () {
if (this.symmetries.size$() < this.orbitals.size$()) return;
for (var i=this.orbitals.size$(); --i >= 0; ) {
var mo=this.orbitals.get$I(i);
mo.put$TK$TV("symmetry", this.symmetries.get$I(i));
mo.put$TK$TV("occupancy", this.occupancies.get$I(i));
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:59 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
