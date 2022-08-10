(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "AbinitReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['inputOnly'],'I',['nAtom','nType'],'O',['znucl','float[]','+typeArray','+cellLattice']]]

Clazz.newMeth(C$, 'initializeReader$', function () {
this.setSpaceGroupName$S("P1");
this.doApplySymmetry=true;
this.setFractionalCoordinates$Z(false);
this.inputOnly=this.checkFilterKey$S("INPUT");
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.contains$CharSequence("natom")) {
p$1.readNoatom.apply(this, []);
} else if (this.line.contains$CharSequence("ntypat") || this.line.contains$CharSequence("ntype") ) {
p$1.readNotypes.apply(this, []);
} else if (this.line.contains$CharSequence("typat") || this.line.contains$CharSequence("type") ) {
p$1.readTypesequence.apply(this, []);
} else if (this.line.contains$CharSequence("Pseudopotential")) {
p$1.readAtomSpecies.apply(this, []);
} else if (this.line.contains$CharSequence("Symmetries :")) {
p$1.readSpaceGroup.apply(this, []);
} else if (this.line.contains$CharSequence("Real(R)+Recip(G)")) {
p$1.readIntiallattice.apply(this, []);
if (this.inputOnly) this.continuing=false;
} else if (this.line.contains$CharSequence("xcart")) {
p$1.readAtoms.apply(this, []);
}return true;
});

Clazz.newMeth(C$, 'readNoatom', function () {
var tokens=this.getTokens$();
if (tokens.length <= 2) this.nAtom=this.parseIntStr$S(tokens[1]);
}, p$1);

Clazz.newMeth(C$, 'readNotypes', function () {
var tokens=this.getTokens$();
if (tokens.length <= 2) this.nType=this.parseIntStr$S(tokens[1]);
}, p$1);

Clazz.newMeth(C$, 'readTypesequence', function () {
this.fillFloatArray$S$I$FA(this.line.substring$I(12), 0, this.typeArray=Clazz.array(Float.TYPE, [this.nAtom]));
}, p$1);

Clazz.newMeth(C$, 'readAtomSpecies', function () {
this.znucl=Clazz.array(Float.TYPE, [this.nType]);
for (var i=0; i < this.nType; i++) {
this.discardLinesUntilContains$S("zion");
var tokens=this.getTokens$();
this.znucl[i]=this.parseFloatStr$S(tokens[tokens[0] === "-"  ? 1 : 0]);
}
}, p$1);

Clazz.newMeth(C$, 'readSpaceGroup', function () {
}, p$1);

Clazz.newMeth(C$, 'readIntiallattice', function () {
var f=0;
this.cellLattice=Clazz.array(Float.TYPE, [9]);
for (var i=0; i < 9; i++) {
if (i % 3 == 0) {
this.line=this.rd$().substring$I(6);
f=this.parseFloatStr$S(this.line);
}this.cellLattice[i]=f * 0.5291772;
f=this.parseFloat$();
}
p$1.applySymmetry.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'applySymmetry', function () {
if (this.cellLattice == null ) return;
this.setSpaceGroupName$S("P1");
for (var i=0; i < 3; i++) this.addExplicitLatticeVector$I$FA$I(i, this.cellLattice, i * 3);

var atoms=this.asc.atoms;
var i0=this.asc.getAtomSetAtomIndex$I(this.asc.iSet);
if (!this.iHaveFractionalCoordinates) for (var i=this.asc.ac; --i >= i0; ) this.setAtomCoord$org_jmol_adapter_smarter_Atom(atoms[i]);

this.applySymmetryAndSetTrajectory$();
}, p$1);

Clazz.newMeth(C$, 'readAtoms', function () {
this.asc.newAtomSet$();
this.iHaveFractionalCoordinates=false;
var i0=this.asc.ac;
this.line=this.line.substring$I(12);
while (this.line != null  && !this.line.contains$CharSequence("x") ){
var atom=this.asc.addNewAtom$();
this.setAtomCoordScaled$org_jmol_adapter_smarter_Atom$SA$I$F(atom, this.getTokens$(), 0, 0.5291772);
this.rd$();
}
this.discardLinesUntilContains$S("z");
if (this.znucl == null ) this.fillFloatArray$S$I$FA(this.line.substring$I(12), 0, this.znucl=Clazz.array(Float.TYPE, [this.nType]));
var atoms=this.asc.atoms;
for (var i=0; i < this.nAtom; i++) atoms[i + i0].elementNumber=($s$[0] = this.znucl[(this.typeArray[i]|0) - 1], $s$[0]);

p$1.applySymmetry.apply(this, []);
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:28 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
