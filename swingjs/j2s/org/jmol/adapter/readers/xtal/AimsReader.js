(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'org.jmol.util.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AimsReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['globalDoApplySymmetry','isFractional'],'I',['nLatticeVectors']]]

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
(function(a,f){return f.apply(null,a)})(["ignoring translation symmetry for more or less than 3 dimensions(which is currently neither supported by FHI-aims"],$I$(1).warn$S);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
