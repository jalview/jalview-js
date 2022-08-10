(function(){var P$=Clazz.newPackage("org.jmol.smiles"),p$1={},I$=[[0,'org.jmol.smiles.SmilesSearch','org.jmol.smiles.SmilesStereo','junit.framework.Assert','org.jmol.smiles.SmilesMatcher','org.jmol.smiles.SmilesBond']],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TestSmilesParser", null, 'junit.framework.TestCase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S', function (arg0) {
;C$.superclazz.c$$S.apply(this,[arg0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'testChapter1_01$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomH=molecule.addAtom$();
atomH.setCharge$I(1);
atomH.setSymbol$S("H");
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[H+]", molecule);
});

Clazz.newMeth(C$, 'testChapter1_02$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC=molecule.addAtom$();
atomC.setSymbol$S("C");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C", molecule);
});

Clazz.newMeth(C$, 'testChapter1_03$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO=molecule.addAtom$();
atomO.setSymbol$S("O");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("O", molecule);
});

Clazz.newMeth(C$, 'testChapter1_04$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO=molecule.addAtom$();
atomO.setCharge$I(1);
atomO.setSymbol$S("O");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[OH3+]", molecule);
});

Clazz.newMeth(C$, 'testChapter1_05$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomH1=molecule.addAtom$();
atomH1.setAtomicMass$I(2);
atomH1.setSymbol$S("H");
var atomO=molecule.addAtom$();
atomO.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomH1, atomO, 1, false);
var atomH2=molecule.addAtom$();
atomH2.setAtomicMass$I(2);
atomH2.setSymbol$S("H");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomO, atomH2, 1, false);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[2H]O[2H]", molecule);
});

Clazz.newMeth(C$, 'testChapter1_06$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomAu=molecule.addAtom$();
atomAu.setSymbol$S("Au");
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[Au]", molecule);
});

Clazz.newMeth(C$, 'testChapter1_07$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
var atomO=molecule.addAtom$();
atomO.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomO, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("CCO", molecule);
});

Clazz.newMeth(C$, 'testChapter1_08$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO1=molecule.addAtom$();
atomO1.setSymbol$S("O");
var atomC=molecule.addAtom$();
atomC.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomO1, atomC, 2, true);
var atomO2=molecule.addAtom$();
atomO2.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC, atomO2, 2, true);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("O=C=O", molecule);
});

Clazz.newMeth(C$, 'testChapter1_09$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC=molecule.addAtom$();
atomC.setSymbol$S("C");
var atomN=molecule.addAtom$();
atomN.setSymbol$S("N");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC, atomN, 3, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C#N", molecule);
});

Clazz.newMeth(C$, 'testChapter1_10$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
var atomO1=molecule.addAtom$();
atomO1.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomO1, 2, true);
var atomO2=molecule.addAtom$();
atomO2.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomO2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("CC(=O)O", molecule);
});

Clazz.newMeth(C$, 'testChapter1_11$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
var atomC6=molecule.addAtom$();
atomC6.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC5, atomC6, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC6, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C1CCCCC1", molecule);
});

Clazz.newMeth(C$, 'testChapter1_12$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
var atomC6=molecule.addAtom$();
atomC6.setSymbol$S("C");
var atomC7=molecule.addAtom$();
atomC7.setSymbol$S("C");
var atomC8=molecule.addAtom$();
atomC8.setSymbol$S("C");
var atomC9=molecule.addAtom$();
atomC9.setSymbol$S("C");
var atomC0=molecule.addAtom$();
atomC0.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC0, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC8, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC5, atomC6, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC6, atomC7, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC7, atomC8, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC8, atomC9, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC9, atomC0, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC7]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC7]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC8]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC9]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC9]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC0]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC0]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C1CC2CCCCC2CC1", molecule);
});

Clazz.newMeth(C$, 'testChapter1_13$', function () {
});

Clazz.newMeth(C$, 'testChapter1_14$', function () {
});

Clazz.newMeth(C$, 'testChapter1_15$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1025, true);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 2, true);
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1025, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C/C=C/C", molecule);
});

Clazz.newMeth(C$, 'testChapter1_16$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomN=molecule.addAtom$();
atomN.setSymbol$S("N");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomN]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomN]);
var atomC1=molecule.addAtom$();
atomC1.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[4, 2, 0, null, null]);
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomN, atomC1, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC3, 1, true);
var atomO1=molecule.addAtom$();
atomO1.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomO1, 2, true);
var atomO2=molecule.addAtom$();
atomO2.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomO2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("N[C@@H](C)C(=O)O", molecule);
});

Clazz.newMeth(C$, 'testChapter1_17$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO1=molecule.addAtom$();
atomO1.setSymbol$S("O");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO1]);
var atomC1=molecule.addAtom$();
atomC1.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[4, 1, 0, null, null]);
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomO1, atomC1, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
var b1=this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, null, 1, true);
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
var atomC6=molecule.addAtom$();
atomC6.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[4, 1, 0, null, null]);
atomC6.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC5, atomC6, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
b1.setAtom2$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesSearch(atomC6, molecule);
var atomO2=molecule.addAtom$();
atomO2.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC6, atomO2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("O[C@H]1CCCC[C@H]1O", molecule);
});

Clazz.newMeth(C$, 'testChapter2_01$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomS=molecule.addAtom$();
atomS.setSymbol$S("S");
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[S]", molecule);
});

Clazz.newMeth(C$, 'testChapter2_02$', function () {
this.testChapter1_06$();
});

Clazz.newMeth(C$, 'testChapter2_03$', function () {
this.testChapter1_02$();
});

Clazz.newMeth(C$, 'testChapter2_04$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomP=molecule.addAtom$();
atomP.setSymbol$S("P");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomP]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomP]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomP]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("P", molecule);
});

Clazz.newMeth(C$, 'testChapter2_05$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomS=molecule.addAtom$();
atomS.setSymbol$S("S");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomS]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomS]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("S", molecule);
});

Clazz.newMeth(C$, 'testChapter2_06$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomCl=molecule.addAtom$();
atomCl.setSymbol$S("Cl");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomCl]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("Cl", molecule);
});

Clazz.newMeth(C$, 'testChapter2_07$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO=molecule.addAtom$();
atomO.setCharge$I(-1);
atomO.setSymbol$S("O");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[OH-]", molecule);
});

Clazz.newMeth(C$, 'testChapter2_08$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO=molecule.addAtom$();
atomO.setCharge$I(-1);
atomO.setSymbol$S("O");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[OH-1]", molecule);
});

Clazz.newMeth(C$, 'testChapter2_09$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomFe=molecule.addAtom$();
atomFe.setCharge$I(2);
atomFe.setSymbol$S("Fe");
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[Fe+2]", molecule);
});

Clazz.newMeth(C$, 'testChapter2_10$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomFe=molecule.addAtom$();
atomFe.setCharge$I(2);
atomFe.setSymbol$S("Fe");
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[Fe++]", molecule);
});

Clazz.newMeth(C$, 'testChapter2_11$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomU=molecule.addAtom$();
atomU.setAtomicMass$I(235);
atomU.setSymbol$S("U");
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[235U]", molecule);
});

Clazz.newMeth(C$, 'testChapter2_12$', function () {
var molecule=Clazz.new_($I$(1,1));
var atom=molecule.addAtom$();
atom.setCharge$I(2);
atom.setSymbol$S("*");
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[*+2]", molecule);
});

Clazz.newMeth(C$, 'testChapter3_01$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("CC", molecule);
});

Clazz.newMeth(C$, 'testChapter3_02$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C-C", molecule);
});

Clazz.newMeth(C$, 'testChapter3_03$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[CH3]-[CH3]", molecule);
});

Clazz.newMeth(C$, 'testChapter3_04$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC=molecule.addAtom$();
atomC.setSymbol$S("C");
var atomO=molecule.addAtom$();
atomO.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC, atomO, 2, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C=O", molecule);
});

Clazz.newMeth(C$, 'testChapter3_05$', function () {
this.testChapter1_09$();
});

Clazz.newMeth(C$, 'testChapter3_06$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C=C", molecule);
});

Clazz.newMeth(C$, 'testChapter3_07$', function () {
});

Clazz.newMeth(C$, 'testChapter3_08$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 2, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C=CC=C", molecule);
});

Clazz.newMeth(C$, 'testChapter3_09$', function () {
});

Clazz.newMeth(C$, 'testChapter4_01$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC4, 1, true);
var atomO1=molecule.addAtom$();
atomO1.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomO1, 2, true);
var atomO2=molecule.addAtom$();
atomO2.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomO2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("CC(C)C(=O)O", molecule);
});

Clazz.newMeth(C$, 'testChapter4_02$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomF1=molecule.addAtom$();
atomF1.setSymbol$S("F");
var atomC=molecule.addAtom$();
atomC.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomF1, atomC, 1, true);
var atomF2=molecule.addAtom$();
atomF2.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC, atomF2, 1, true);
var atomF3=molecule.addAtom$();
atomF3.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC, atomF3, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("FC(F)F", molecule);
});

Clazz.newMeth(C$, 'testChapter4_03$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC=molecule.addAtom$();
atomC.setSymbol$S("C");
var atomF1=molecule.addAtom$();
atomF1.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC, atomF1, 1, true);
var atomF2=molecule.addAtom$();
atomF2.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC, atomF2, 1, true);
var atomF3=molecule.addAtom$();
atomF3.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC, atomF3, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C(F)(F)F", molecule);
});

Clazz.newMeth(C$, 'testChapter4_04$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO1=molecule.addAtom$();
atomO1.setSymbol$S("O");
var atomCl=molecule.addAtom$();
atomCl.setSymbol$S("Cl");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomO1, atomCl, 2, true);
var atomO2=molecule.addAtom$();
atomO2.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCl, atomO2, 2, true);
var atomO3=molecule.addAtom$();
atomO3.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCl, atomO3, 2, true);
var atomO4=molecule.addAtom$();
atomO4.setCharge$I(-1);
atomO4.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCl, atomO4, 1, true);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("O=Cl(=O)(=O)[O-]", molecule);
});

Clazz.newMeth(C$, 'testChapter4_05$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomCl=molecule.addAtom$();
atomCl.setSymbol$S("Cl");
var atomO1=molecule.addAtom$();
atomO1.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCl, atomO1, 2, true);
var atomO2=molecule.addAtom$();
atomO2.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCl, atomO2, 2, true);
var atomO3=molecule.addAtom$();
atomO3.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCl, atomO3, 2, true);
var atomO4=molecule.addAtom$();
atomO4.setCharge$I(-1);
atomO4.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCl, atomO4, 1, true);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("Cl(=O)(=O)(=O)[O-]", molecule);
});

Clazz.newMeth(C$, 'testChapter4_06$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1, true);
var atomO1=molecule.addAtom$();
atomO1.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC5, atomO1, 2, true);
var atomO2=molecule.addAtom$();
atomO2.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC5, atomO2, 1, true);
var atomC6=molecule.addAtom$();
atomC6.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC6, 1, true);
var atomC7=molecule.addAtom$();
atomC7.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC6, atomC7, 1, true);
var atomC8=molecule.addAtom$();
atomC8.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC7, atomC8, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC7]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC7]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC8]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC8]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC8]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("CCCC(C(=O)O)CCC", molecule);
});

Clazz.newMeth(C$, 'testChapter5_01$', function () {
this.testChapter1_11$();
});

Clazz.newMeth(C$, 'testChapter5_02$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
var atomC6=molecule.addAtom$();
atomC6.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC6, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC5, atomC6, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C1=CCCCC1", molecule);
});

Clazz.newMeth(C$, 'testChapter5_03$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
var atomC6=molecule.addAtom$();
atomC6.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC6, 2, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC5, atomC6, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C=1CCCCC1", molecule);
});

Clazz.newMeth(C$, 'testChapter5_04$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
var atomC6=molecule.addAtom$();
atomC6.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC6, 2, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC5, atomC6, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C1CCCCC=1", molecule);
});

Clazz.newMeth(C$, 'testChapter5_05$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
var atomC6=molecule.addAtom$();
atomC6.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC6, 2, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC5, atomC6, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C=1CCCCC=1", molecule);
});

Clazz.newMeth(C$, 'testChapter5_06$', function () {
});

Clazz.newMeth(C$, 'testChapter5_07$', function () {
});

Clazz.newMeth(C$, 'testChapter5_08$', function () {
});

Clazz.newMeth(C$, 'testChapter5_09$', function () {
});

Clazz.newMeth(C$, 'testChapter6_01$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomNa=molecule.addAtom$();
atomNa.setCharge$I(1);
atomNa.setSymbol$S("Na");
var atomCl=molecule.addAtom$();
atomCl.setCharge$I(-1);
atomCl.setSymbol$S("Cl");
});

Clazz.newMeth(C$, 'testChapter6_02$', function () {
});

Clazz.newMeth(C$, 'testChapter6_03$', function () {
});

Clazz.newMeth(C$, 'testChapter6_04$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
var atomO=molecule.addAtom$();
atomO.setSymbol$S("O");
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomO, atomC2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
});

Clazz.newMeth(C$, 'testChapter6_05$', function () {
this.testChapter1_07$();
});

Clazz.newMeth(C$, 'testChapter7_01$', function () {
this.testChapter1_02$();
});

Clazz.newMeth(C$, 'testChapter7_02$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC=molecule.addAtom$();
atomC.setSymbol$S("C");
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[C]", molecule);
});

Clazz.newMeth(C$, 'testChapter7_03$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC=molecule.addAtom$();
atomC.setAtomicMass$I(12);
atomC.setSymbol$S("C");
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[12C]", molecule);
});

Clazz.newMeth(C$, 'testChapter7_04$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC=molecule.addAtom$();
atomC.setAtomicMass$I(13);
atomC.setSymbol$S("C");
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[13C]", molecule);
});

Clazz.newMeth(C$, 'testChapter7_05$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC=molecule.addAtom$();
atomC.setAtomicMass$I(13);
atomC.setSymbol$S("C");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("[13CH4]", molecule);
});

Clazz.newMeth(C$, 'testChapter7_06$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomF1=molecule.addAtom$();
atomF1.setSymbol$S("F");
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomF1, atomC1, 1025, true);
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
var atomF2=molecule.addAtom$();
atomF2.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomF2, 1025, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("F/C=C/F", molecule);
});

Clazz.newMeth(C$, 'testChapter7_07$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomF1=molecule.addAtom$();
atomF1.setSymbol$S("F");
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomF1, atomC1, 1041, true);
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
var atomF2=molecule.addAtom$();
atomF2.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomF2, 1041, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("F\\C=C\\F", molecule);
});

Clazz.newMeth(C$, 'testChapter7_08$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomF1=molecule.addAtom$();
atomF1.setSymbol$S("F");
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomF1, atomC1, 1025, true);
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
var atomF2=molecule.addAtom$();
atomF2.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomF2, 1041, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("F/C=C\\F", molecule);
});

Clazz.newMeth(C$, 'testChapter7_09$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomF1=molecule.addAtom$();
atomF1.setSymbol$S("F");
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomF1, atomC1, 1041, true);
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
var atomF2=molecule.addAtom$();
atomF2.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomF2, 1025, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("F\\C=C/F", molecule);
});

Clazz.newMeth(C$, 'testChapter7_10$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomF=molecule.addAtom$();
atomF.setSymbol$S("F");
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomF, atomC1, 1025, true);
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1025, true);
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 2, true);
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1025, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("F/C=C/C=C/C", molecule);
});

Clazz.newMeth(C$, 'testChapter7_11$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomF=molecule.addAtom$();
atomF.setSymbol$S("F");
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomF, atomC1, 1025, true);
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1025, true);
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 2, true);
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("F/C=C/C=CC", molecule);
});

Clazz.newMeth(C$, 'testChapter7_12$', function () {
this.testChapter1_16$();
});

Clazz.newMeth(C$, 'testChapter7_13$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomN=molecule.addAtom$();
atomN.setSymbol$S("N");
var atomC1=molecule.addAtom$();
atomC1.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[4, 1, 0, null, null]);
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomN, atomC1, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
var atomC2=molecule.addAtom$();
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC3, 1, true);
var atomO1=molecule.addAtom$();
atomO1.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomO1, 2, true);
var atomO2=molecule.addAtom$();
atomO2.setSymbol$S("O");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomO2, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomN]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomN]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO2]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("N[C@H](C)C(=O)O", molecule);
});

Clazz.newMeth(C$, 'testChapter7_14$', function () {
this.testChapter1_17$();
});

Clazz.newMeth(C$, 'testChapter7_15$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC1]);
var b1=this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, null, 1, true);
var atomC2=molecule.addAtom$();
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 1, true);
atomC2.setSymbol$S("C");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC2]);
var atomC3=molecule.addAtom$();
atomC3.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[4, 1, 0, null, null]);
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC3]);
var b2=this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, null, 1, true);
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
var atomC5=molecule.addAtom$();
atomC5.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC4, atomC5, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC5]);
var atomC6=molecule.addAtom$();
atomC6.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC5, atomC6, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC6]);
var atomC7=molecule.addAtom$();
atomC7.setSymbol$S("C");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC7]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC7]);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC6, atomC7, 1, true);
var atomC8=molecule.addAtom$();
atomC8.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[4, 1, 0, null, null]);
atomC8.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC7, atomC8, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC8]);
b2.setAtom2$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesSearch(atomC8, molecule);
var atomC9=molecule.addAtom$();
atomC9.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC8, atomC9, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC9]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC9]);
var atomC0=molecule.addAtom$();
atomC0.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC9, atomC0, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC0]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC0]);
b1.setAtom2$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesSearch(atomC0, molecule);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("C1C[C@H]2CCCC[C@H]2CC1", molecule);
});

Clazz.newMeth(C$, 'testChapter7_16$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO=molecule.addAtom$();
atomO.setSymbol$S("O");
var atomC1=molecule.addAtom$();
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomO, atomC1, 1, true);
var atomCl=molecule.addAtom$();
atomCl.setSymbol$S("Cl");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomCl, 1, true);
var atomC2=molecule.addAtom$();
atomC2.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[2, 1, 0, null, null]);
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 2, true);
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
var atomF=molecule.addAtom$();
atomF.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomF, 1, true);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("OC(Cl)=[C@]=C(C)F", molecule);
});

Clazz.newMeth(C$, 'testChapter7_17$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO=molecule.addAtom$();
atomO.setSymbol$S("O");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomO]);
var atomC1=molecule.addAtom$();
atomC1.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomO, atomC1, 1, true);
var atomCl=molecule.addAtom$();
atomCl.setSymbol$S("Cl");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomCl, 1, true);
var atomC2=molecule.addAtom$();
atomC2.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[2, 1, 0, null, null]);
atomC2.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC1, atomC2, 2, true);
var atomC3=molecule.addAtom$();
atomC3.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC2, atomC3, 2, true);
var atomC4=molecule.addAtom$();
atomC4.setSymbol$S("C");
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC4]);
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomC4, 1, true);
var atomF=molecule.addAtom$();
atomF.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC3, atomF, 1, true);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("OC(Cl)=[C@AL1]=C(C)F", molecule);
});

Clazz.newMeth(C$, 'testChapter7_18$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomF=molecule.addAtom$();
atomF.setSymbol$S("F");
var atomPo=molecule.addAtom$();
atomPo.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[7, 1, 0, null, null]);
atomPo.setSymbol$S("Po");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomF, atomPo, 1, true);
var atomCl=molecule.addAtom$();
atomCl.setSymbol$S("Cl");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomPo, atomCl, 1, true);
var atomBr=molecule.addAtom$();
atomBr.setSymbol$S("Br");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomPo, atomBr, 1, true);
var atomI=molecule.addAtom$();
atomI.setSymbol$S("I");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomPo, atomI, 1, true);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("F[Po@SP1](Cl)(Br)I", molecule);
});

Clazz.newMeth(C$, 'testChapter7_19$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO=molecule.addAtom$();
atomO.setSymbol$S("O");
var atomC=molecule.addAtom$();
atomC.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomO, atomC, 2, true);
var atomAs=molecule.addAtom$();
atomAs.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[5, 1, 0, null, null]);
atomAs.setSymbol$S("As");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC, atomAs, 1, true);
var atomF=molecule.addAtom$();
atomF.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomAs, atomF, 1, true);
var atomCl=molecule.addAtom$();
atomCl.setSymbol$S("Cl");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomAs, atomCl, 1, true);
var atomBr=molecule.addAtom$();
atomBr.setSymbol$S("Br");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomAs, atomBr, 1, true);
var atomS=molecule.addAtom$();
atomS.setSymbol$S("S");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomAs, atomS, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomS]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("O=C[As@](F)(Cl)(Br)S", molecule);
});

Clazz.newMeth(C$, 'testChapter7_20$', function () {
var molecule=Clazz.new_($I$(1,1));
var atomO=molecule.addAtom$();
atomO.setSymbol$S("O");
var atomC=molecule.addAtom$();
atomC.setSymbol$S("C");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomO, atomC, 2, true);
var atomCo=molecule.addAtom$();
atomCo.stereo=Clazz.new_($I$(2,1).c$$I$I$I$S$S,[6, 1, 0, null, null]);
atomCo.setSymbol$S("Co");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomC, atomCo, 1, true);
var atomF=molecule.addAtom$();
atomF.setSymbol$S("F");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCo, atomF, 1, true);
var atomCl=molecule.addAtom$();
atomCl.setSymbol$S("Cl");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCo, atomCl, 1, true);
var atomBr=molecule.addAtom$();
atomBr.setSymbol$S("Br");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCo, atomBr, 1, true);
var atomI=molecule.addAtom$();
atomI.setSymbol$S("I");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCo, atomI, 1, true);
var atomS=molecule.addAtom$();
atomS.setSymbol$S("S");
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(atomCo, atomS, 1, true);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomC]);
p$1.addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom.apply(this, [molecule, atomS]);
C$.checkMolecule$S$org_jmol_smiles_SmilesSearch("O=C[Co@](F)(Cl)(Br)(I)S", molecule);
});

Clazz.newMeth(C$, 'checkMolecule$S$org_jmol_smiles_SmilesSearch', function (smiles, expected) {
System.out.print$S("Checking " + smiles + "..." );
try {
$I$(3,"assertTrue$Z",[Clazz.new_($I$(4,1)).areEqualTest$S$org_jmol_smiles_SmilesSearch(smiles, expected)]);
System.out.println$S("OK");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(3).assertTrue$Z(false);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z', function (atom1, atom2, bondType, isExplicitH) {
var b=Clazz.new_($I$(5,1).c$$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z,[atom1, atom2, bondType, false]);
if (!isExplicitH || atom2 == null  ) return b;
if (atom1.getElementNumber$() == 1) p$1.addExplicitH$org_jmol_smiles_SmilesAtom.apply(this, [atom2]);
if (atom2.getElementNumber$() == 1) p$1.addExplicitH$org_jmol_smiles_SmilesAtom.apply(this, [atom1]);
return b;
});

Clazz.newMeth(C$, 'addExplicitH$org_jmol_smiles_SmilesAtom', function (bonded) {
var n=bonded.getExplicitHydrogenCount$();
if (n < 0) n=0;
bonded.setExplicitHydrogenCount$I(n + 1);
}, p$1);

Clazz.newMeth(C$, 'addHydrogen$org_jmol_smiles_SmilesSearch$org_jmol_smiles_SmilesAtom', function (molecule, bonded) {
var atomH=molecule.addAtom$();
atomH.setSymbol$S("H");
if (bonded != null ) {
this.createBond$org_jmol_smiles_SmilesAtom$org_jmol_smiles_SmilesAtom$I$Z(bonded, atomH, 1, false);
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:58 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
