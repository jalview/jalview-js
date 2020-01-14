(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'org.jmol.util.Logger']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AimsReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.globalDoApplySymmetry=false;
this.isFractional=false;
this.nLatticeVectors=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.globalDoApplySymmetry=this.doApplySymmetry;
this.doApplySymmetry=true;
this.isFractional=true;
});

Clazz.newMeth(C$, 'checkLine$', function () {
var tokens=this.getTokens$();
if (tokens.length == 0) return true;
if (tokens[0].equals$O("lattice_vector")) {
p$1.readLatticeVector$SA.apply(this, [tokens]);
return true;
}if (tokens[0].equals$O("atom")) {
p$1.readAtom$SA$Z.apply(this, [tokens, false]);
return true;
}if (tokens[0].equals$O("atom_frac")) {
p$1.readAtom$SA$Z.apply(this, [tokens, true]);
return true;
}if (tokens[0].equals$O("multipole")) {
p$1.readMultipole$SA.apply(this, [tokens]);
return true;
}return true;
});

Clazz.newMeth(C$, 'finalizeSubclassReader$', function () {
this.doApplySymmetry=this.globalDoApplySymmetry;
if (this.nLatticeVectors == 1 || this.nLatticeVectors == 2 ) {
$I$(1).warn$S("ignoring translation symmetry for more or less than 3 dimensions(which is currently neither supported by FHI-aims");
}this.finalizeReaderASCR$();
});

Clazz.newMeth(C$, 'readLatticeVector$SA', function (tokens) {
if (tokens.length < 4) {
$I$(1).warn$S("cannot read line with FHI-aims lattice vector: " + this.line);
} else if (this.nLatticeVectors == 3) {
$I$(1).warn$S("more than 3 FHI-aims lattice vectors found with line: " + this.line);
} else {
this.addExplicitLatticeVector$I$FA$I(this.nLatticeVectors++, Clazz.array(Float.TYPE, -1, [this.parseFloatStr$S(tokens[1]), this.parseFloatStr$S(tokens[2]), this.parseFloatStr$S(tokens[3])]), 0);
this.setFractionalCoordinates$Z(this.nLatticeVectors == 3);
}}, p$1);

Clazz.newMeth(C$, 'readAtom$SA$Z', function (tokens, isFractional) {
if (tokens.length < 5) {
$I$(1).warn$S("cannot read line with FHI-aims line: " + this.line);
return;
}if (this.isFractional != isFractional ) this.setFractionalCoordinates$Z(this.isFractional=isFractional);
this.addAtomXYZSymName$SA$I$S$S(tokens, 1, tokens[4], null);
}, p$1);

Clazz.newMeth(C$, 'readMultipole$SA', function (tokens) {
if (tokens.length < 6) {
$I$(1).warn$S("cannot read line with FHI-aims atom data: " + this.line);
return;
}var order=this.parseIntStr$S(tokens[4]);
if (order > 0) {
$I$(1).warn$S("multipole line ignored since only monopoles are currently supported: " + this.line);
return;
}if (this.isFractional) this.setFractionalCoordinates$Z(this.isFractional=false);
this.addAtomXYZSymName$SA$I$S$S(tokens, 1, null, null).partialCharge=this.parseFloatStr$S(tokens[5]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:07 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
