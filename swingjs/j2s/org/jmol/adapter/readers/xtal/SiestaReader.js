(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={};
var C$=Clazz.newClass(P$, "SiestaReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.noAtoms=0;
this.unitCellData=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.unitCellData=Clazz.array(Float.TYPE, [9]);
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.doApplySymmetry=true;
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.contains$CharSequence("%block LatticeVectors")) {
if (this.doGetModel$I$S(++this.modelNumber, null)) p$1.readCellThenAtomsCartesian.apply(this, []);
return true;
} else if (this.line.contains$CharSequence("outcoor: Atomic coordinates")) {
if (this.doGetModel$I$S(++this.modelNumber, null)) p$1.readAtomsCartGeomThenCell.apply(this, []);
return true;
}return true;
});

Clazz.newMeth(C$, 'setCell', function () {
this.fillFloatArray$S$I$FA(null, 0, this.unitCellData);
this.addExplicitLatticeVector$I$FA$I(0, this.unitCellData, 0);
this.addExplicitLatticeVector$I$FA$I(1, this.unitCellData, 3);
this.addExplicitLatticeVector$I$FA$I(2, this.unitCellData, 6);
}, p$1);

Clazz.newMeth(C$, 'readCellThenAtomsCartesian', function () {
p$1.newAtomSet.apply(this, []);
p$1.setCell.apply(this, []);
this.discardLinesUntilContains$S("AtomicCoordinatesFormat Ang");
this.rd$();
this.setFractionalCoordinates$Z(false);
while (this.rd$() != null  && this.line.indexOf$S("%endblock Atomic") < 0 ){
var tokens=this.getTokens$();
this.addAtomXYZSymName$SA$I$S$S(tokens, 0, null, tokens[4]);
}
this.noAtoms=this.asc.ac;
}, p$1);

Clazz.newMeth(C$, 'newAtomSet', function () {
this.applySymmetryAndSetTrajectory$();
this.asc.newAtomSet$();
this.setSpaceGroupName$S("P1");
this.setFractionalCoordinates$Z(false);
}, p$1);

Clazz.newMeth(C$, 'readAtomsCartGeomThenCell', function () {
this.readLines$I(1);
p$1.newAtomSet.apply(this, []);
var atom0=this.asc.ac;
for (var i=0; i < this.noAtoms; i++) {
var tokens=this.getTokens$();
var atom=this.asc.addNewAtom$();
atom.atomName=tokens[4];
var x=this.parseFloatStr$S(tokens[0]);
var y=this.parseFloatStr$S(tokens[1]);
var z=this.parseFloatStr$S(tokens[2]);
atom.set$F$F$F(x, y, z);
this.rd$();
}
this.discardLinesUntilContains$S("outcell: Unit cell vectors");
p$1.setCell.apply(this, []);
var atoms=this.asc.atoms;
var ac=this.asc.ac;
for (var i=atom0; i < ac; i++) this.setAtomCoord$org_jmol_adapter_smarter_Atom(atoms[i]);

this.discardLinesUntilContains$S("siesta: E_KS(eV) = ");
var tokens=this.getTokens$();
var energy=Double.valueOf$D(Double.parseDouble$S(tokens[3]));
this.asc.setAtomSetEnergy$S$F("" + energy.toString(), energy.floatValue$());
this.asc.setCurrentModelInfo$S$O("Energy", energy);
this.asc.setInfo$S$O("Energy", energy);
this.asc.setAtomSetName$S("Energy = " + energy.toString() + " eV" );
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:50 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
