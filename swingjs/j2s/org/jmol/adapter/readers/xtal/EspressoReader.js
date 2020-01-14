(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.xtal"),p$1={},I$=[[0,'javajs.util.PT']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "EspressoReader", null, 'org.jmol.adapter.smarter.AtomSetCollectionReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.cellParams=null;
this.totEnergy=null;
this.endFlag=false;
this.aPar=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.setSpaceGroupName$S("P1");
this.doApplySymmetry=true;
});

Clazz.newMeth(C$, 'checkLine$', function () {
if (this.line.contains$CharSequence("lattice parameter (a_0)") || this.line.contains$CharSequence("lattice parameter (alat)") ) {
p$1.readAparam.apply(this, []);
} else if (this.line.contains$CharSequence("crystal axes:")) {
p$1.readCellParam$Z.apply(this, [false]);
} else if (this.line.contains$CharSequence("CELL_PARAMETERS (")) {
p$1.readCellParam$Z.apply(this, [true]);
} else if (this.line.contains$CharSequence("Cartesian axes")) {
this.discardLinesUntilContains$S("positions (");
if (this.doGetModel$I$S(++this.modelNumber, null)) p$1.readAtoms.apply(this, []);
} else if (this.line.contains$CharSequence("POSITIONS (")) {
if (this.doGetModel$I$S(++this.modelNumber, null)) p$1.readAtoms.apply(this, []);
} else if (this.line.contains$CharSequence("!    total energy")) {
p$1.readEnergy.apply(this, []);
} else if (this.line.contains$CharSequence("A final scf")) {
this.endFlag=true;
}return true;
});

Clazz.newMeth(C$, 'readAparam', function () {
this.aPar=this.parseFloatStr$S(this.getTokens$()[4]) * 0.5291772;
}, p$1);

Clazz.newMeth(C$, 'readCellParam$Z', function (andAPar) {
var i0=(andAPar ? 0 : 3);
if (this.line.contains$CharSequence("bohr")) this.aPar=0.5291772;
if (andAPar && this.line.contains$CharSequence("=") ) this.aPar=this.parseFloatStr$S(this.line.substring$I(this.line.indexOf$S("=") + 1)) * 0.5291772;
this.cellParams=Clazz.array(Float.TYPE, [9]);
for (var n=0, i=0; n < 3; n++) {
var tokens=$I$(1).getTokens$S(this.rd$());
this.cellParams[i++]=this.parseFloatStr$S(tokens[i0]) * this.aPar;
this.cellParams[i++]=this.parseFloatStr$S(tokens[i0 + 1]) * this.aPar;
this.cellParams[i++]=this.parseFloatStr$S(tokens[i0 + 2]) * this.aPar;
}
}, p$1);

Clazz.newMeth(C$, 'newAtomSet', function () {
this.asc.newAtomSet$();
if (this.totEnergy != null ) p$1.setEnergy.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setCellParams', function () {
if (this.cellParams != null ) {
this.addExplicitLatticeVector$I$FA$I(0, this.cellParams, 0);
this.addExplicitLatticeVector$I$FA$I(1, this.cellParams, 3);
this.addExplicitLatticeVector$I$FA$I(2, this.cellParams, 6);
this.setSpaceGroupName$S("P1");
}}, p$1);

Clazz.newMeth(C$, 'readAtoms', function () {
p$1.newAtomSet.apply(this, []);
var isAlat=(this.line.contains$CharSequence("alat") || this.line.contains$CharSequence("a_0") );
var firstStr=(this.line.contains$CharSequence("site n."));
var isFractional=this.line.contains$CharSequence("crystal");
var isBohr=this.line.contains$CharSequence("bohr");
var isAngstrom=this.line.contains$CharSequence("angstrom");
if (isAlat || isFractional || isAngstrom  ) p$1.setCellParams.apply(this, []);
this.setFractionalCoordinates$Z(isFractional);
while (this.rd$() != null  && this.line.length$() > 45 ){
var tokens=this.getTokens$();
var atom=this.asc.addNewAtom$();
atom.atomName=tokens[(isBohr || tokens.length == 4  || !firstStr  ? 0 : 1)];
var i1=(isBohr || tokens.length == 4  || !firstStr  ? 1 : tokens.length - 4);
var x=this.parseFloatStr$S(tokens[i1++]);
var y=this.parseFloatStr$S(tokens[i1++]);
var z=this.parseFloatStr$S(tokens[i1++]);
atom.set$F$F$F(x, y, z);
if (isBohr) {
atom.scale$F(0.5291772);
} else if (isAlat) {
atom.scale$F(this.aPar);
}this.setAtomCoord$org_jmol_adapter_smarter_Atom(atom);
}
this.applySymmetryAndSetTrajectory$();
if (this.endFlag) this.discardLinesUntilContains$S("Harris-Foulkes estimate");
}, p$1);

Clazz.newMeth(C$, 'readEnergy', function () {
this.totEnergy=Double.valueOf$D(Double.parseDouble$S($I$(1).getTokens$S(this.line.substring$I(this.line.indexOf$S("=") + 1))[0]));
}, p$1);

Clazz.newMeth(C$, 'setEnergy', function () {
this.asc.setAtomSetEnergy$S$F("" + this.totEnergy.toString(), this.totEnergy.floatValue$());
this.asc.setInfo$S$O("Energy", this.totEnergy);
this.asc.setAtomSetName$S("E = " + this.totEnergy.toString() + " Ry" );
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:14 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
