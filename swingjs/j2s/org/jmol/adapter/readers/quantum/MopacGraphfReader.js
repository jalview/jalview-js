(function(){var P$=Clazz.newPackage("org.jmol.adapter.readers.quantum"),p$1={},I$=[[0,'javajs.util.Lst','javajs.util.AU','java.util.Hashtable']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "MopacGraphfReader", null, 'org.jmol.adapter.readers.quantum.MopacSlaterReader');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.ac=0;
this.nCoefficients=0;
this.invMatrix=null;
this.isNewFormat=false;
this.orbitalData=null;
this.orbitalInfo=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initializeReader$', function () {
this.alphaBeta="alpha";
});

Clazz.newMeth(C$, 'checkLine$', function () {
p$1.readAtoms.apply(this, []);
if (this.doReadMolecularOrbitals) {
p$1.readSlaterBasis.apply(this, []);
p$1.readMolecularOrbitals$Z.apply(this, [false]);
if (p$1.readKeywords.apply(this, [])) p$1.readMolecularOrbitals$Z.apply(this, [true]);
}this.continuing=false;
return false;
});

Clazz.newMeth(C$, 'readAtoms', function () {
this.asc.newAtomSet$();
this.ac=this.parseIntStr$S(this.line);
this.atomicNumbers=Clazz.array(Integer.TYPE, [this.ac]);
for (var i=0; i < this.ac; i++) {
this.rd$();
this.atomicNumbers[i]=this.parseIntRange$S$I$I(this.line, 0, 4);
var atom=this.asc.addNewAtom$();
this.setAtomCoordXYZ$org_jmol_adapter_smarter_Atom$F$F$F(atom, this.parseFloatRange$S$I$I(this.line, 4, 17), this.parseFloatRange$S$I$I(this.line, 17, 29), this.parseFloatRange$S$I$I(this.line, 29, 41));
if (this.line.length$() > 41) atom.partialCharge=this.parseFloatStr$S(this.line.substring$I(41));
atom.elementSymbol=org.jmol.adapter.smarter.AtomSetCollectionReader.getElementSymbol$I(this.atomicNumbers[i]);
}
}, p$1);

Clazz.newMeth(C$, 'readSlaterBasis', function () {
this.nCoefficients=0;
var values=Clazz.array(Float.TYPE, [3]);
for (var iAtom=0; iAtom < this.ac; iAtom++) {
org.jmol.adapter.smarter.AtomSetCollectionReader.getTokensFloat$S$FA$I(this.rd$(), values, 3);
var atomicNumber=this.atomicNumbers[iAtom];
var zeta;
if ((zeta=values[0]) != 0 ) {
this.createSphericalSlaterByType$I$I$S$F$F(iAtom, atomicNumber, "S", zeta, 1);
}if ((zeta=values[1]) != 0 ) {
this.createSphericalSlaterByType$I$I$S$F$F(iAtom, atomicNumber, "Px", zeta, 1);
this.createSphericalSlaterByType$I$I$S$F$F(iAtom, atomicNumber, "Py", zeta, 1);
this.createSphericalSlaterByType$I$I$S$F$F(iAtom, atomicNumber, "Pz", zeta, 1);
}if ((zeta=values[2]) != 0 ) {
this.createSphericalSlaterByType$I$I$S$F$F(iAtom, atomicNumber, "Dx2-y2", zeta, 1);
this.createSphericalSlaterByType$I$I$S$F$F(iAtom, atomicNumber, "Dxz", zeta, 1);
this.createSphericalSlaterByType$I$I$S$F$F(iAtom, atomicNumber, "Dz2", zeta, 1);
this.createSphericalSlaterByType$I$I$S$F$F(iAtom, atomicNumber, "Dyz", zeta, 1);
this.createSphericalSlaterByType$I$I$S$F$F(iAtom, atomicNumber, "Dxy", zeta, 1);
}}
this.nCoefficients=this.slaters.size$();
this.setSlaters$Z$Z(true, false);
}, p$1);

Clazz.newMeth(C$, 'readMolecularOrbitals$Z', function (isBeta) {
if (isBeta) this.alphaBeta="beta";
var list=null;
if (this.rd$() == null ) return;
this.isNewFormat=(this.line.indexOf$S("ORBITAL") >= 0);
if (this.isNewFormat) {
this.orbitalData=Clazz.new_($I$(1));
if (this.line.length$() > 10) this.orbitalInfo=Clazz.new_($I$(1));
} else {
list=Clazz.array(Float.TYPE, [this.nCoefficients, this.nCoefficients]);
}for (var iMo=0; iMo < this.nCoefficients; iMo++) {
if (iMo != 0) this.rd$();
var data;
if (this.isNewFormat) {
if (this.line == null  || this.line.indexOf$S("ORBITAL") < 0  || this.line.indexOf$S("ORBITAL_LIST") >= 0 ) break;
this.orbitalData.addLast$TV(data=Clazz.array(Float.TYPE, [this.nCoefficients]));
if (this.orbitalInfo != null ) this.orbitalInfo.addLast$TV(this.line);
this.rd$();
} else {
data=list[iMo];
}this.fillFloatArray$S$I$FA(this.line, 15, data);
}
if (this.invMatrix == null ) {
if (this.isNewFormat && this.line.indexOf$S("MATRIX") < 0 ) this.rd$();
this.invMatrix=$I$(2).newFloat2$I(this.nCoefficients);
for (var iMo=0; iMo < this.nCoefficients; iMo++) this.fillFloatArray$S$I$FA(null, 15, this.invMatrix[iMo]=Clazz.array(Float.TYPE, [iMo + 1]));

}this.nOrbitals=(this.orbitalData == null  ? this.nCoefficients : this.orbitalData.size$());
if (this.orbitalData != null ) {
list=$I$(2).newFloat2$I(this.nOrbitals);
for (var i=this.nOrbitals; --i >= 0; ) list[i]=this.orbitalData.get$I(i);

}var list2=Clazz.array(Float.TYPE, [this.nOrbitals, this.nCoefficients]);
for (var i=0; i < this.nOrbitals; i++) for (var j=0; j < this.nCoefficients; j++) {
for (var k=0; k < this.nCoefficients; k++) list2[i][j] += (list[i][k] * (k >= j ? this.invMatrix[k][j] : this.invMatrix[j][k]));

if (Math.abs(list2[i][j]) < 1.0E-4 ) list2[i][j]=0;
}

if (this.isNewFormat && this.orbitalInfo == null   && this.line != null   && this.line.indexOf$S("ORBITAL_LIST") < 0 ) this.rd$();
var values=Clazz.array(Float.TYPE, [2]);
for (var iMo=0; iMo < this.nOrbitals; iMo++) {
var mo=Clazz.new_($I$(3));
if (this.orbitalInfo != null ) {
this.line=this.orbitalInfo.get$I(iMo);
var tokens=this.getTokens$();
mo.put$TK$TV("energy", Float.valueOf$F(this.parseFloatStr$S(tokens[3])));
mo.put$TK$TV("occupancy", Float.valueOf$F(this.parseFloatStr$S(tokens[1])));
} else if (this.rd$() != null ) {
org.jmol.adapter.smarter.AtomSetCollectionReader.getTokensFloat$S$FA$I(this.line, values, 2);
mo.put$TK$TV("energy", Float.valueOf$F(values[0]));
mo.put$TK$TV("occupancy", Float.valueOf$F(values[1]));
}mo.put$TK$TV("coefficients", list2[iMo]);
if (isBeta) mo.put$TK$TV("type", "beta");
this.line="\n";
if (this.filterMO$()) this.setMO$java_util_Map(mo);
}
this.setMOs$S("eV");
}, p$1);

Clazz.newMeth(C$, 'readKeywords', function () {
if (this.rd$() == null  || this.line.indexOf$S(" Keywords:") < 0 ) return false;
this.moData.put$TK$TV("calculationType", this.calculationType=this.line.substring$I(11).trim$());
var isUHF=(this.line.indexOf$S("UHF") >= 0);
if (isUHF) {
for (var i=this.orbitals.size$(); --i >= 0; ) {
this.orbitals.get$I(i).put$TK$TV("type", "alpha");
}
}return isUHF;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
