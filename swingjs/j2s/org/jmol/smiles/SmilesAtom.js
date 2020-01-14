(function(){var P$=Clazz.newPackage("org.jmol.smiles"),I$=[[0,'org.jmol.smiles.SmilesBond','javajs.util.AU','org.jmol.util.Logger','org.jmol.util.Elements','org.jmol.viewer.JC']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "SmilesAtom", null, 'javajs.util.P3', 'org.jmol.util.Node');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.patternIndex=0;
this.pattern=null;
this.primitiveType=0;
this.isAND=false;
this.subAtoms=null;
this.nSubAtoms=0;
this.index=0;
this.referance=null;
this.residueName=null;
this.residueChar=null;
this.insCode='\0';
this.isBioAtom=false;
this.isBioResidue=false;
this.isBioAtomWild=false;
this.bioType='\0';
this.isLeadAtom=false;
this.notBondedIndex=0;
this.notCrossLinked=false;
this.aromaticAmbiguous=false;
this.covalentHydrogenCount=0;
this.not=false;
this.selected=false;
this.hasSymbol=false;
this.elementDefined=false;
this.atomType=null;
this.bioAtomName=null;
this.isFirst=false;
this.jmolIndex=0;
this.elementNumber=0;
this.atomNumber=0;
this.residueNumber=0;
this.explicitHydrogenCount=0;
this.implicitHydrogenCount=0;
this.parent=null;
this.bonds=null;
this.bondCount=0;
this.iNested=0;
this.isAromatic=false;
this.atomicMass=0;
this.charge=0;
this.matchingIndex=0;
this.stereo=null;
this.component=0;
this.matchingComponent=0;
this.atomSite=0;
this.degree=0;
this.nonhydrogenDegree=0;
this.valence=0;
this.connectivity=0;
this.ringMembership=0;
this.ringSize=0;
this.ringConnectivity=0;
this.matchingNode=null;
this.hasSubpattern=false;
this.mapIndex=0;
this.atomClass=0;
this.symbol=null;
this.isTopoAtom=false;
this.missingHydrogenCount=0;
this.cipChirality=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.patternIndex=-1;
this.bioType="\u0000";
this.notBondedIndex=-1;
this.aromaticAmbiguous=true;
this.covalentHydrogenCount=-1;
this.isFirst=true;
this.jmolIndex=-1;
this.elementNumber=-2;
this.atomNumber=-2147483648;
this.residueNumber=-2147483648;
this.explicitHydrogenCount=-2147483648;
this.implicitHydrogenCount=-2147483648;
this.bonds=Clazz.array($I$(1), [4]);
this.iNested=0;
this.atomicMass=-2147483648;
this.charge=-2147483648;
this.matchingIndex=-1;
this.component=-2147483648;
this.degree=-1;
this.nonhydrogenDegree=-1;
this.valence=0;
this.connectivity=-1;
this.ringMembership=-2147483648;
this.ringSize=-2147483648;
this.ringConnectivity=-1;
this.mapIndex=-1;
this.atomClass=NaN;
}, 1);

Clazz.newMeth(C$, 'allowSmilesUnbracketed$S', function (xx) {
return ("B, C, N, O, P, S, F, Cl, Br, I, *,".indexOf$S(xx + ",") >= 0);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'getAtomType$', function () {
return (this.atomType == null  ? this.bioAtomName : this.atomType);
});

Clazz.newMeth(C$, 'getChiralClass$', function () {
return (this.stereo == null  ? -2147483648 : this.stereo.getChiralClass$org_jmol_smiles_SmilesAtom(this));
});

Clazz.newMeth(C$, 'isDefined$', function () {
return (this.hasSubpattern || this.iNested != 0  || this.isBioAtom  || this.component != -2147483648  || this.elementNumber != -2  || this.nSubAtoms > 0 );
});

Clazz.newMeth(C$, 'setBioAtom$C', function (bioType) {
this.isBioAtom=(bioType != "\u0000");
this.bioType=bioType;
if (this.parent != null ) {
this.parent.bioType=bioType;
this.parent.isBioAtom=this.isBioAtom;
this.parent.isBioAtomWild=this.isBioAtomWild;
}});

Clazz.newMeth(C$, 'setAtomName$S', function (name) {
if (name == null ) return;
if (name.length$() > 0) this.bioAtomName=name;
if (name.equals$O("\u0000")) this.isLeadAtom=true;
if (this.parent != null ) {
this.parent.bioAtomName=name;
}});

Clazz.newMeth(C$, 'setBonds$org_jmol_smiles_SmilesBondA', function (bonds) {
this.bonds=bonds;
});

Clazz.newMeth(C$, 'addSubAtom$org_jmol_smiles_SmilesAtom$Z', function (sAtom, isAND) {
this.isAND=isAND;
if (this.subAtoms == null ) this.subAtoms=Clazz.array(C$, [2]);
if (this.nSubAtoms >= this.subAtoms.length) this.subAtoms=$I$(2).doubleLength$O(this.subAtoms);
sAtom.setIndex$I(this.index);
sAtom.parent=this;
this.subAtoms[this.nSubAtoms++]=sAtom;
this.setSymbol$S("*");
this.hasSymbol=false;
return sAtom;
});

Clazz.newMeth(C$, 'setIndex$I', function (index) {
this.index=index;
return this;
});

Clazz.newMeth(C$, 'setTopoAtom$I$I$S$I$I', function (iComponent, ptAtom, symbol, charge, patternIndex) {
this.component=iComponent;
this.index=ptAtom;
this.patternIndex=patternIndex;
this.setSymbol$S(symbol);
this.charge=charge;
this.isTopoAtom=true;
return this;
});

Clazz.newMeth(C$, 'setHydrogenCount$', function () {
this.missingHydrogenCount=this.explicitHydrogenCount;
if (this.explicitHydrogenCount != -2147483648) return true;
var count=C$.getDefaultCount$I$Z(this.elementNumber, this.isAromatic);
if (count < 0) {
this.missingHydrogenCount=0;
return (count == -1);
}if (this.elementNumber == 7 && this.isAromatic  && this.bondCount == 2 ) {
if (this.bonds[0].order == 1 && this.bonds[1].order == 1 ) count++;
}for (var i=0; i < this.bondCount; i++) {
var bond=this.bonds[i];
switch (bond.order) {
case 81:
if (this.elementNumber == 7) {
$I$(3).info$S("Ambiguous bonding to aromatic N found -- MF may be in error");
}count-=1;
break;
case 1025:
case 1041:
case 65537:
case 65538:
count-=1;
break;
case 2:
count-=(this.isAromatic && this.elementNumber == 6  ? 1 : 2);
break;
case 1:
case 3:
case 4:
count-=bond.order;
break;
}
}
if (count >= 0) this.missingHydrogenCount=this.explicitHydrogenCount=count;
return true;
});

Clazz.newMeth(C$, 'getDefaultCount$I$Z', function (elementNumber, isAromatic) {
switch (elementNumber) {
case 0:
case -1:
case -2:
return -1;
case 6:
return (isAromatic ? 3 : 4);
case 8:
case 16:
return 2;
case 7:
return (isAromatic ? 2 : 3);
case 5:
case 15:
return 3;
case 9:
case 17:
case 35:
case 53:
return 1;
}
return -2;
}, 1);

Clazz.newMeth(C$, 'getIndex$', function () {
return this.index;
});

Clazz.newMeth(C$, 'setSymbol$S', function (symbol) {
this.symbol=symbol;
this.isAromatic=symbol.equals$O(symbol.toLowerCase$());
this.hasSymbol=true;
this.elementDefined=true;
if (symbol.equals$O("*")) {
this.isAromatic=false;
this.elementNumber=-2;
return true;
}if (symbol.equals$O("Xx")) {
this.elementNumber=0;
return true;
}this.aromaticAmbiguous=false;
if (symbol.equals$O("a") || symbol.equals$O("A") ) {
if (this.elementNumber < 0) this.elementNumber=-1;
return true;
}if (this.isAromatic) symbol=symbol.substring$I$I(0, 1).toUpperCase$() + (symbol.length$() == 1 ? "" : symbol.substring$I(1));
this.elementNumber=$I$(4).elementNumberFromSymbol$S$Z(symbol, true);
return (this.elementNumber != 0);
});

Clazz.newMeth(C$, 'getElementNumber$', function () {
return this.elementNumber;
});

Clazz.newMeth(C$, 'getAtomicMass$', function () {
return this.atomicMass;
});

Clazz.newMeth(C$, 'getAtomNumber$', function () {
return this.atomNumber;
});

Clazz.newMeth(C$, 'setAtomicMass$I', function (mass) {
this.atomicMass=mass;
});

Clazz.newMeth(C$, 'getCharge$', function () {
return this.charge;
});

Clazz.newMeth(C$, 'setCharge$I', function (charge) {
this.charge=charge;
});

Clazz.newMeth(C$, 'getMatchingAtomIndex$', function () {
return this.matchingIndex;
});

Clazz.newMeth(C$, 'getMatchingAtom$', function () {
return this.matchingNode == null  ? this : this.matchingNode;
});

Clazz.newMeth(C$, 'setMatchingAtom$org_jmol_util_Node$I', function (jmolAtom, index) {
this.matchingNode=jmolAtom;
this.matchingIndex=index;
});

Clazz.newMeth(C$, 'setExplicitHydrogenCount$I', function (count) {
this.explicitHydrogenCount=count;
});

Clazz.newMeth(C$, 'setImplicitHydrogenCount$I', function (count) {
this.implicitHydrogenCount=count;
});

Clazz.newMeth(C$, 'setDegree$I', function (degree) {
this.degree=degree;
});

Clazz.newMeth(C$, 'setNonhydrogenDegree$I', function (degree) {
this.nonhydrogenDegree=degree;
});

Clazz.newMeth(C$, 'setValence$I', function (valence) {
this.valence=valence;
});

Clazz.newMeth(C$, 'setConnectivity$I', function (connectivity) {
this.connectivity=connectivity;
});

Clazz.newMeth(C$, 'setRingMembership$I', function (rm) {
this.ringMembership=rm;
});

Clazz.newMeth(C$, 'setRingSize$I', function (rs) {
this.ringSize=rs;
if (this.ringSize == 500 || this.ringSize == 600 ) this.isAromatic=true;
});

Clazz.newMeth(C$, 'setRingConnectivity$I', function (rc) {
this.ringConnectivity=rc;
});

Clazz.newMeth(C$, 'getModelIndex$', function () {
return this.component;
});

Clazz.newMeth(C$, 'getMoleculeNumber$Z', function (inModel) {
return this.component;
});

Clazz.newMeth(C$, 'getAtomSite$', function () {
return this.atomSite;
});

Clazz.newMeth(C$, 'getFormalCharge$', function () {
return this.charge;
});

Clazz.newMeth(C$, 'getIsotopeNumber$', function () {
return this.atomicMass;
});

Clazz.newMeth(C$, 'getAtomicAndIsotopeNumber$', function () {
return $I$(4).getAtomicAndIsotopeNumber$I$I(this.elementNumber, this.atomicMass);
});

Clazz.newMeth(C$, 'getAtomName$', function () {
return this.bioAtomName == null  ? "" : this.bioAtomName;
});

Clazz.newMeth(C$, 'getGroup3$Z', function (allowNull) {
return this.residueName == null  ? "" : this.residueName;
});

Clazz.newMeth(C$, 'getGroup1$C', function (c0) {
return this.residueChar == null  ? "" : this.residueChar;
});

Clazz.newMeth(C$, 'addBond$org_jmol_smiles_SmilesBond', function (bond) {
if (this.bondCount >= this.bonds.length) this.bonds=$I$(2).doubleLength$O(this.bonds);
this.bonds[this.bondCount]=bond;
this.bondCount++;
});

Clazz.newMeth(C$, 'setBondArray$', function () {
if (this.bonds.length > this.bondCount) this.bonds=$I$(2).arrayCopyObject$O$I(this.bonds, this.bondCount);
if (this.subAtoms != null  && this.subAtoms.length > this.nSubAtoms ) this.subAtoms=$I$(2).arrayCopyObject$O$I(this.subAtoms, this.subAtoms.length);
for (var i=0; i < this.bonds.length; i++) {
var b=this.bonds[i];
if (this.isBioAtom && b.order == 17 ) b.order=112;
if (b.atom1.index > b.atom2.index) {
b.switchAtoms$();
}}
});

Clazz.newMeth(C$, 'getEdges$', function () {
return (this.parent != null  ? this.parent.getEdges$() : this.bonds);
});

Clazz.newMeth(C$, 'getBond$I', function (number) {
return (this.parent != null  ? this.parent.getBond$I(number) : number >= 0 && number < this.bondCount  ? this.bonds[number] : null);
});

Clazz.newMeth(C$, 'getCovalentBondCount$', function () {
return this.getBondCount$();
});

Clazz.newMeth(C$, 'getBondCount$', function () {
return (this.parent != null  ? this.parent.getBondCount$() : this.bondCount);
});

Clazz.newMeth(C$, 'getCovalentBondCountPlusMissingH$', function () {
return this.getBondCount$() + (this.isTopoAtom ? 0 : this.missingHydrogenCount);
});

Clazz.newMeth(C$, 'getTotalHydrogenCount$', function () {
return this.getCovalentHydrogenCount$() + (this.isTopoAtom ? 0 : this.missingHydrogenCount);
});

Clazz.newMeth(C$, 'getImplicitHydrogenCount$', function () {
return this.implicitHydrogenCount;
});

Clazz.newMeth(C$, 'getExplicitHydrogenCount$', function () {
return this.explicitHydrogenCount;
});

Clazz.newMeth(C$, 'getMatchingBondedAtom$I', function (i) {
if (this.parent != null ) return this.parent.getMatchingBondedAtom$I(i);
if (i >= this.bondCount) return -1;
var b=this.bonds[i];
return (b.atom1 === this  ? b.atom2 : b.atom1).matchingIndex;
});

Clazz.newMeth(C$, 'getBondedAtomIndex$I', function (j) {
return (this.parent != null  ? this.parent.getBondedAtomIndex$I(j) : this.bonds[j].getOtherAtom$org_jmol_smiles_SmilesAtom(this).index);
});

Clazz.newMeth(C$, 'getCovalentHydrogenCount$', function () {
if (this.covalentHydrogenCount >= 0) return this.covalentHydrogenCount;
if (this.parent != null ) return (this.covalentHydrogenCount=this.parent.getCovalentHydrogenCount$());
this.covalentHydrogenCount=0;
for (var k=0; k < this.bonds.length; k++) if (this.bonds[k].getOtherAtom$org_jmol_smiles_SmilesAtom(this).elementNumber == 1) this.covalentHydrogenCount++;

return this.covalentHydrogenCount;
});

Clazz.newMeth(C$, 'getValence$', function () {
if (this.parent != null ) return this.parent.getValence$();
var n=this.valence;
if (n <= 0 && this.bonds != null  ) for (var i=this.bonds.length; --i >= 0; ) n+=this.bonds[i].getValence$();

this.valence=n;
return n;
});

Clazz.newMeth(C$, 'getTotalValence$', function () {
return this.getValence$() + (this.isTopoAtom ? 0 : this.missingHydrogenCount);
});

Clazz.newMeth(C$, 'getBondTo$org_jmol_smiles_SmilesAtom', function (atom) {
if (this.parent != null ) return this.parent.getBondTo$org_jmol_smiles_SmilesAtom(atom);
var bond;
for (var k=0; k < this.bonds.length; k++) {
if ((bond=this.bonds[k]) == null ) continue;
if (atom == null  ? bond.atom2 === this  : bond.getOtherAtom$org_jmol_smiles_SmilesAtom(this) === atom ) return bond;
}
return null;
});

Clazz.newMeth(C$, 'getBondNotTo$org_jmol_smiles_SmilesAtom$Z', function (atom, allowH) {
var bond;
for (var k=0; k < this.bonds.length; k++) {
if ((bond=this.bonds[k]) == null ) continue;
var atom2=bond.getOtherAtom$org_jmol_smiles_SmilesAtom(this);
if (atom !== atom2  && (allowH || atom2.elementNumber != 1 ) ) return bond;
}
return null;
});

Clazz.newMeth(C$, 'isLeadAtom$', function () {
return this.isLeadAtom;
});

Clazz.newMeth(C$, 'getOffsetResidueAtom$S$I', function (name, offset) {
if (this.isBioAtom) {
if (offset == 0) return this.index;
for (var k=0; k < this.bonds.length; k++) if (this.bonds[k].getAtomIndex1$() == this.index && this.bonds[k].order == 96 ) return this.bonds[k].getOtherAtom$org_jmol_smiles_SmilesAtom(this).index;

}return -1;
});

Clazz.newMeth(C$, 'getGroupBits$javajs_util_BS', function (bs) {
bs.set$I(this.index);
return;
});

Clazz.newMeth(C$, 'isCrossLinked$org_jmol_util_Node', function (node) {
var bond=this.getBondTo$org_jmol_smiles_SmilesAtom(node);
return bond.isHydrogen$();
});

Clazz.newMeth(C$, 'getCrossLinkVector$javajs_util_Lst$Z$Z', function (vLinks, crosslinkCovalent, crosslinkHBond) {
var haveCrossLinks=false;
for (var k=0; k < this.bonds.length; k++) if (this.bonds[k].order == 112) {
if (vLinks == null ) return true;
vLinks.addLast$TV(Integer.valueOf$I(this.index));
vLinks.addLast$TV(Integer.valueOf$I(this.bonds[k].getOtherAtom$org_jmol_smiles_SmilesAtom(this).index));
vLinks.addLast$TV(Integer.valueOf$I(this.bonds[k].getOtherAtom$org_jmol_smiles_SmilesAtom(this).index));
haveCrossLinks=true;
}
return haveCrossLinks;
});

Clazz.newMeth(C$, 'getBioStructureTypeName$', function () {
return null;
});

Clazz.newMeth(C$, 'getInsertionCode$', function () {
return this.insCode;
});

Clazz.newMeth(C$, 'getResno$', function () {
return this.residueNumber;
});

Clazz.newMeth(C$, 'getChainID$', function () {
return 0;
});

Clazz.newMeth(C$, 'getChainIDStr$', function () {
return "";
});

Clazz.newMeth(C$, 'getAtomLabel$I$I$I$I$F$I$Z$S', function (atomicNumber, isotopeNumber, valence, charge, osclass, nH, isAromatic, stereo) {
var sym=$I$(4).elementSymbolFromNumber$I(atomicNumber);
if (isAromatic) {
sym=sym.toLowerCase$();
if (atomicNumber != 6) valence=2147483647;
}var count=(valence == 2147483647 || isotopeNumber != 0  || charge != 0  || !Float.isNaN$F(osclass)  || stereo != null  && stereo.length$() > 0   ? -1 : C$.getDefaultCount$I$Z(atomicNumber, false));
return (count == valence ? sym : "[" + (isotopeNumber <= 0 ? "" : "" + isotopeNumber) + sym + (stereo == null  ? "" : stereo) + (nH > 1 ? "H" + nH : nH == 1 ? "H" : "") + (charge < 0 && charge != -2147483648  ? "" + charge : charge > 0 ? "+" + charge : "") + (Float.isNaN$F(osclass) ? "" : ":" + (osclass|0)) + "]" );
}, 1);

Clazz.newMeth(C$, 'getBioSmilesType$', function () {
return this.bioType;
});

Clazz.newMeth(C$, 'isNucleic$', function () {
return this.bioType == "n" || this.bioType == "r"  || this.bioType == "d" ;
});

Clazz.newMeth(C$, 'isPurine$', function () {
return this.residueChar != null  && this.isNucleic$()  && "AG".indexOf$S(this.residueChar) >= 0 ;
});

Clazz.newMeth(C$, 'isPyrimidine$', function () {
return this.residueChar != null  && this.isNucleic$()  && "CTUI".indexOf$S(this.residueChar) >= 0 ;
});

Clazz.newMeth(C$, 'isDeleted$', function () {
return false;
});

Clazz.newMeth(C$, 'findAtomsLike$S', function (substring) {
return null;
});

Clazz.newMeth(C$, 'toString', function () {
var s=(this.residueChar != null  || this.residueName != null   ? (this.residueChar == null  ? this.residueName : this.residueChar) + "." + this.bioAtomName  : (this.bioAtomName != null  && this.atomNumber != -2147483648  ? null : this.elementNumber == -1 ? "A" : this.elementNumber == -2 ? "*" : $I$(4).elementSymbolFromNumber$I(this.elementNumber)));
if (s == null ) return this.bioAtomName + " #" + this.atomNumber ;
if (this.isAromatic) s=s.toLowerCase$();
var s2="";
for (var i=0; i < this.bondCount; i++) s2 += this.bonds[i].getOtherAtom$org_jmol_smiles_SmilesAtom(this).index + ", ";

return "[" + s + '.' + this.index + (this.matchingIndex >= 0 ? "(" + this.matchingNode + ")"  : "") + "]" + s2 + "(" + new Float(this.x).toString() + "," + new Float(this.y).toString() + "," + new Float(this.z).toString() + ")" ;
});

Clazz.newMeth(C$, 'getFloatProperty$S', function (property) {
if (property == "property_atomclass") return this.atomClass;
return NaN;
});

Clazz.newMeth(C$, 'getMass$', function () {
return this.atomicMass;
});

Clazz.newMeth(C$, 'getCIPChirality$Z', function (doCalculate) {
return $I$(5).getCIPChiralityName$I(this.cipChirality & ~224);
});

Clazz.newMeth(C$, 'setCIPChirality$I', function (c) {
this.cipChirality=c;
});

Clazz.newMeth(C$, 'getCIPChiralityCode$', function () {
return this.cipChirality;
});

Clazz.newMeth(C$, 'getXYZ$', function () {
return this;
});

Clazz.newMeth(C$, 'getStereo$', function () {
return this.stereo;
});

Clazz.newMeth(C$, 'getPatternIndex$', function () {
return this.patternIndex;
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:35:55 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
