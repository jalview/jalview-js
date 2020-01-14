(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'javajs.util.BS','org.jmol.modelset.Bond','org.jmol.modelset.BondIteratorSelected','org.jmol.util.C','javajs.util.AU','org.jmol.util.Edge','org.jmol.modelset.HBond','org.jmol.util.BSUtil','org.jmol.util.Logger','org.jmol.modelset.BondSet']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "BondCollection", null, 'org.jmol.modelset.AtomCollection');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bo=null;
this.bondCount=0;
this.numCached=null;
this.freeBonds=null;
this.molecules=null;
this.moleculeCount=0;
this.defaultCovalentMad=0;
this.bsAromaticSingle=null;
this.bsAromaticDouble=null;
this.bsAromatic=null;
this.haveHiddenBonds=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'setupBC$', function () {
this.bsAromatic=Clazz.new_($I$(1));
this.numCached=Clazz.array(Integer.TYPE, [5]);
this.freeBonds=Clazz.array($I$(2), [5, null, null]);
for (var i=5; --i > 0; ) this.freeBonds[i]=Clazz.array($I$(2), [200, null]);

this.setupAC$();
});

Clazz.newMeth(C$, 'releaseModelSetBC$', function () {
this.bo=null;
this.freeBonds=null;
this.releaseModelSetAC$();
});

Clazz.newMeth(C$, 'getBondIteratorForType$I$javajs_util_BS', function (bondType, bsAtoms) {
return Clazz.new_($I$(3).c$$org_jmol_modelset_BondA$I$I$javajs_util_BS$Z,[this.bo, this.bondCount, bondType, bsAtoms, this.vwr.getBoolean$I(603979812)]);
});

Clazz.newMeth(C$, 'getBondIterator$javajs_util_BS', function (bsBonds) {
return Clazz.new_($I$(3).c$$org_jmol_modelset_BondA$I$I$javajs_util_BS$Z,[this.bo, this.bondCount, 131071, bsBonds, false]);
});

Clazz.newMeth(C$, 'getBondColix1$I', function (i) {
return $I$(4).getColixInherited$H$H(this.bo[i].colix, this.bo[i].atom1.colixAtom);
});

Clazz.newMeth(C$, 'getBondColix2$I', function (i) {
return $I$(4).getColixInherited$H$H(this.bo[i].colix, this.bo[i].atom2.colixAtom);
});

Clazz.newMeth(C$, 'getBondCountInModel$I', function (modelIndex) {
var n=0;
for (var i=this.bondCount; --i >= 0; ) if (this.bo[i].atom1.mi == modelIndex) n++;

return n;
});

Clazz.newMeth(C$, 'getBondsForSelectedAtoms$javajs_util_BS$Z', function (bsAtoms, bondSelectionModeOr) {
var bs=Clazz.new_($I$(1));
for (var iBond=0; iBond < this.bondCount; ++iBond) {
var bond=this.bo[iBond];
var isSelected1=bsAtoms.get$I(bond.atom1.i);
var isSelected2=bsAtoms.get$I(bond.atom2.i);
if (bondSelectionModeOr ? isSelected1 || isSelected2  : isSelected1 && isSelected2 ) bs.set$I(iBond);
}
return bs;
});

Clazz.newMeth(C$, 'bondAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z$Z', function (atom1, atom2, order, mad, bsBonds, energy, addGroup, isNew) {
var bond=this.getOrAddBond$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z(atom1, atom2, order, mad, bsBonds, energy, true);
if (isNew) {
bond.order|=131072;
if (addGroup) {
atom1.group=atom2.group;
atom1.group.addAtoms$I(atom1.i);
}}return bond;
});

Clazz.newMeth(C$, 'getOrAddBond$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z', function (atom, atomOther, order, mad, bsBonds, energy, overrideBonding) {
var i;
if (order == 131071 || order == 65535 ) order=1;
if (atom.isBonded$org_jmol_modelset_Atom(atomOther)) {
i=atom.getBond$org_jmol_modelset_Atom(atomOther).index;
if (overrideBonding) {
this.bo[i].setOrder$I(order);
this.bo[i].setMad$H(mad);
if (Clazz.instanceOf(this.bo[i], "org.jmol.modelset.HBond")) (this.bo[i]).energy=energy;
}} else {
if (this.bondCount == this.bo.length) this.bo=$I$(5).arrayCopyObject$O$I(this.bo, this.bondCount + 250);
i=this.setBond$I$org_jmol_modelset_Bond(this.bondCount++, this.bondMutually$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$F(atom, atomOther, order, mad, energy)).index;
}if (bsBonds != null ) bsBonds.set$I(i);
return this.bo[i];
});

Clazz.newMeth(C$, 'setBond$I$org_jmol_modelset_Bond', function (index, bond) {
return this.bo[bond.index=index]=bond;
});

Clazz.newMeth(C$, 'bondMutually$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$F', function (atom, atomOther, order, mad, energy) {
var bond;
if ($I$(6).isOrderH$I(order)) {
bond=Clazz.new_($I$(7).c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H$F,[atom, atomOther, order, mad, 0, energy]);
} else {
bond=Clazz.new_($I$(2).c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H,[atom, atomOther, order, mad, 0]);
}p$1.addBondToAtom$org_jmol_modelset_Atom$org_jmol_modelset_Bond.apply(this, [atom, bond]);
p$1.addBondToAtom$org_jmol_modelset_Atom$org_jmol_modelset_Bond.apply(this, [atomOther, bond]);
return bond;
});

Clazz.newMeth(C$, 'addBondToAtom$org_jmol_modelset_Atom$org_jmol_modelset_Bond', function (atom, bond) {
if (atom.bonds == null ) {
atom.bonds=Clazz.array($I$(2), [1]);
atom.bonds[0]=bond;
} else {
atom.bonds=p$1.addToBonds$org_jmol_modelset_Bond$org_jmol_modelset_BondA.apply(this, [bond, atom.bonds]);
}}, p$1);

Clazz.newMeth(C$, 'addToBonds$org_jmol_modelset_Bond$org_jmol_modelset_BondA', function (newBond, oldBonds) {
var newBonds;
if (oldBonds == null ) {
if (this.numCached[1] > 0) newBonds=this.freeBonds[1][--this.numCached[1]];
 else newBonds=Clazz.array($I$(2), [1]);
newBonds[0]=newBond;
} else {
var oldLength=oldBonds.length;
var newLength=oldLength + 1;
if (newLength < 5 && this.numCached[newLength] > 0 ) newBonds=this.freeBonds[newLength][--this.numCached[newLength]];
 else newBonds=Clazz.array($I$(2), [newLength]);
newBonds[oldLength]=newBond;
for (var i=oldLength; --i >= 0; ) newBonds[i]=oldBonds[i];

if (oldLength < 5 && this.numCached[oldLength] < 200 ) this.freeBonds[oldLength][this.numCached[oldLength]++]=oldBonds;
}return newBonds;
}, p$1);

Clazz.newMeth(C$, 'addHBond$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$F', function (atom1, atom2, order, energy) {
if (this.bondCount == this.bo.length) this.bo=$I$(5).arrayCopyObject$O$I(this.bo, this.bondCount + 250);
return this.setBond$I$org_jmol_modelset_Bond(this.bondCount++, this.bondMutually$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$F(atom1, atom2, order, 1, energy)).index;
});

Clazz.newMeth(C$, 'deleteAllBonds2$', function () {
this.vwr.setShapeProperty$I$S$O(1, "reset", null);
for (var i=this.bondCount; --i >= 0; ) {
this.bo[i].deleteAtomReferences$();
this.bo[i]=null;
}
this.bondCount=0;
});

Clazz.newMeth(C$, 'getDefaultMadFromOrder$I', function (order) {
return ($s$[0] = ($I$(6).isOrderH$I(order) ? 1 : order == 32768 ? (Math.floor(this.vwr.getFloat$I(570425406) * 2000)|0) : this.defaultCovalentMad), $s$[0]);
});

Clazz.newMeth(C$, 'deleteConnections$F$F$I$javajs_util_BS$javajs_util_BS$Z$Z', function (minD, maxD, order, bsA, bsB, isBonds, matchNull) {
var minDIsFraction=(minD < 0 );
var maxDIsFraction=(maxD < 0 );
var isFractional=(minDIsFraction || maxDIsFraction );
minD=this.fixD$F$Z(minD, minDIsFraction);
maxD=this.fixD$F$Z(maxD, maxDIsFraction);
var bsDelete=Clazz.new_($I$(1));
var nDeleted=0;
var newOrder=order|=131072;
if (!matchNull && $I$(6).isOrderH$I(order) ) order=30720;
var bsBonds;
if (isBonds) {
bsBonds=bsA;
} else {
bsBonds=Clazz.new_($I$(1));
for (var i=bsA.nextSetBit$I(0); i >= 0; i=bsA.nextSetBit$I(i + 1)) {
var a=this.at[i];
if (a.bonds != null ) for (var j=a.bonds.length; --j >= 0; ) if (bsB.get$I(a.getBondedAtomIndex$I(j))) bsBonds.set$I(a.bonds[j].index);

}
}for (var i=bsBonds.nextSetBit$I(0); i < this.bondCount && i >= 0 ; i=bsBonds.nextSetBit$I(i + 1)) {
var bond=this.bo[i];
if (!this.isInRange$org_jmol_modelset_Atom$org_jmol_modelset_Atom$F$F$Z$Z$Z(bond.atom1, bond.atom2, minD, maxD, minDIsFraction, maxDIsFraction, isFractional)) continue;
if (matchNull || newOrder == (bond.order & ~256 | 131072)  || (order & bond.order & 30720 ) != 0 ) {
bsDelete.set$I(i);
nDeleted++;
}}
if (nDeleted > 0) this.dBm$javajs_util_BS$Z(bsDelete, false);
return Clazz.array(Integer.TYPE, -1, [0, nDeleted]);
});

Clazz.newMeth(C$, 'fixD$F$Z', function (d, isF) {
return (isF ? -d : d * d);
});

Clazz.newMeth(C$, 'isInRange$org_jmol_modelset_Atom$org_jmol_modelset_Atom$F$F$Z$Z$Z', function (atom1, atom2, minD, maxD, minFrac, maxfrac, isFractional) {
var d2=atom1.distanceSquared$javajs_util_T3(atom2);
if (isFractional) {
var dAB=Math.sqrt(d2);
var dABcalc=atom1.getBondingRadius$() + atom2.getBondingRadius$();
return ((minFrac ? dAB >= dABcalc * minD  : d2 >= minD ) && (maxfrac ? dAB <= dABcalc * maxD  : d2 <= maxD ) );
}return (d2 >= minD  && d2 <= maxD  );
});

Clazz.newMeth(C$, 'dBm$javajs_util_BS$Z', function (bsBonds, isFullModel) {
(this).deleteBonds$javajs_util_BS$Z(bsBonds, isFullModel);
});

Clazz.newMeth(C$, 'dBb$javajs_util_BS$Z', function (bsBond, isFullModel) {
var iDst=bsBond.nextSetBit$I(0);
if (iDst < 0) return;
(this).resetMolecules$();
var modelIndexLast=-1;
var n=bsBond.cardinality$();
for (var iSrc=iDst; iSrc < this.bondCount; ++iSrc) {
var bond=this.bo[iSrc];
if (n > 0 && bsBond.get$I(iSrc) ) {
n--;
if (!isFullModel) {
var modelIndex=bond.atom1.mi;
if (modelIndex != modelIndexLast) (this).am[modelIndexLast=modelIndex].resetBoundCount$();
}bond.deleteAtomReferences$();
} else {
this.setBond$I$org_jmol_modelset_Bond(iDst++, bond);
}}
for (var i=this.bondCount; --i >= iDst; ) this.bo[i]=null;

this.bondCount=iDst;
var sets=this.vwr.getShapeProperty$I$S(1, "sets");
if (sets != null ) for (var i=0; i < sets.length; i++) $I$(8).deleteBits$javajs_util_BS$javajs_util_BS(sets[i], bsBond);

$I$(8).deleteBits$javajs_util_BS$javajs_util_BS(this.bsAromatic, bsBond);
});

Clazz.newMeth(C$, 'resetAromatic$', function () {
for (var i=this.bondCount; --i >= 0; ) {
var bond=this.bo[i];
if (bond.isAromatic$()) bond.setOrder$I(515);
}
});

Clazz.newMeth(C$, 'assignAromaticBondsBs$Z$javajs_util_BS', function (isUserCalculation, bsBonds) {
if (!isUserCalculation) this.bsAromatic=Clazz.new_($I$(1));
this.bsAromaticSingle=Clazz.new_($I$(1));
this.bsAromaticDouble=Clazz.new_($I$(1));
var isAll=(bsBonds == null );
var i0=(isAll ? this.bondCount - 1 : bsBonds.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsBonds.nextSetBit$I(i + 1))) {
var bond=this.bo[i];
if (this.bsAromatic.get$I(i)) bond.setOrder$I(515);
switch (bond.order & ~131072) {
case 515:
if (!p$1.assignAromaticMustBeSingle$org_jmol_modelset_Atom.apply(this, [bond.atom1]) && !p$1.assignAromaticMustBeSingle$org_jmol_modelset_Atom.apply(this, [bond.atom2]) ) {
this.bsAromatic.set$I(i);
break;
}bond.order=513;
case 513:
this.bsAromaticSingle.set$I(i);
break;
case 514:
this.bsAromaticDouble.set$I(i);
break;
}
}
var bond;
isAll=(bsBonds == null );
i0=(isAll ? this.bondCount - 1 : bsBonds.nextSetBit$I(0));
var bsTest=Clazz.new_($I$(1));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsBonds.nextSetBit$I(i + 1))) {
bond=this.bo[i];
if (!bond.is$I(515) || this.bsAromaticDouble.get$I(i) || this.bsAromaticSingle.get$I(i)  ) continue;
bsTest.set$I(i);
if (bond.atom1.getElementNumber$() == 8 || bond.atom2.getElementNumber$() == 8 ) {
if (!p$1.assignAromaticDouble$org_jmol_modelset_Bond.apply(this, [bond])) p$1.assignAromaticSingle$org_jmol_modelset_Bond.apply(this, [bond]);
} else {
bsTest.set$I(i);
}}
for (var i=bsTest.nextSetBit$I(0); i >= 0; i=bsTest.nextSetBit$I(i + 1)) if (!p$1.assignAromaticDouble$org_jmol_modelset_Bond.apply(this, [bond=this.bo[i]])) p$1.assignAromaticSingle$org_jmol_modelset_Bond.apply(this, [bond]);

var bsModels=Clazz.new_($I$(1));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsBonds.nextSetBit$I(i + 1))) {
bond=this.bo[i];
if (this.bsAromaticDouble.get$I(i)) {
if (!bond.is$I(514)) {
this.bsAromatic.set$I(i);
bsModels.set$I(bond.atom1.mi);
bond.setOrder$I(514);
}} else if (this.bsAromaticSingle.get$I(i) || bond.isAromatic$() ) {
if (!bond.is$I(513)) {
this.bsAromatic.set$I(i);
bond.setOrder$I(513);
}}}
var models=(this).am;
for (var i=bsModels.nextSetBit$I(0); i >= 0; i=bsModels.nextSetBit$I(i + 1)) if (models[i].isBioModel) models[i].isPdbWithMultipleBonds=true;

p$1.assignAromaticNandO$javajs_util_BS.apply(this, [bsBonds]);
this.bsAromaticSingle=null;
this.bsAromaticDouble=null;
});

Clazz.newMeth(C$, 'assignAromaticDouble$org_jmol_modelset_Bond', function (bond) {
var bondIndex=bond.index;
if (this.bsAromaticSingle.get$I(bondIndex)) return false;
if (this.bsAromaticDouble.get$I(bondIndex)) return true;
this.bsAromaticDouble.set$I(bondIndex);
if (!p$1.assignAromaticSingleForAtom$org_jmol_modelset_Atom$I.apply(this, [bond.atom1, bondIndex]) || !p$1.assignAromaticSingleForAtom$org_jmol_modelset_Atom$I.apply(this, [bond.atom2, bondIndex]) ) {
this.bsAromaticDouble.clear$I(bondIndex);
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'assignAromaticSingle$org_jmol_modelset_Bond', function (bond) {
var bondIndex=bond.index;
if (this.bsAromaticDouble.get$I(bondIndex)) return false;
if (this.bsAromaticSingle.get$I(bondIndex)) return true;
this.bsAromaticSingle.set$I(bondIndex);
if (!p$1.assignAromaticDoubleForAtom$org_jmol_modelset_Atom.apply(this, [bond.atom1]) || !p$1.assignAromaticDoubleForAtom$org_jmol_modelset_Atom.apply(this, [bond.atom2]) ) {
this.bsAromaticSingle.clear$I(bondIndex);
return false;
}return true;
}, p$1);

Clazz.newMeth(C$, 'assignAromaticSingleForAtom$org_jmol_modelset_Atom$I', function (atom, notBondIndex) {
var bonds=atom.bonds;
if (bonds == null ) return false;
for (var i=bonds.length; --i >= 0; ) {
var bond=bonds[i];
var bondIndex=bond.index;
if (bondIndex == notBondIndex || !bond.isAromatic$()  || this.bsAromaticSingle.get$I(bondIndex) ) continue;
if (this.bsAromaticDouble.get$I(bondIndex) || !p$1.assignAromaticSingle$org_jmol_modelset_Bond.apply(this, [bond]) ) {
return false;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'assignAromaticDoubleForAtom$org_jmol_modelset_Atom', function (atom) {
var bonds=atom.bonds;
if (bonds == null ) return false;
var haveDouble=false;
var lastBond=-1;
for (var i=bonds.length; --i >= 0; ) {
if (this.bsAromaticDouble.get$I(bonds[i].index)) haveDouble=true;
if (bonds[i].isAromatic$()) lastBond=i;
}
for (var i=bonds.length; --i >= 0; ) {
var bond=bonds[i];
var bondIndex=bond.index;
if (!bond.isAromatic$() || this.bsAromaticDouble.get$I(bondIndex) || this.bsAromaticSingle.get$I(bondIndex)  ) continue;
if (!haveDouble && p$1.assignAromaticDouble$org_jmol_modelset_Bond.apply(this, [bond]) ) haveDouble=true;
 else if ((haveDouble || i < lastBond ) && !p$1.assignAromaticSingle$org_jmol_modelset_Bond.apply(this, [bond]) ) {
return false;
}}
return haveDouble;
}, p$1);

Clazz.newMeth(C$, 'allowAromaticBond$org_jmol_modelset_Bond', function (b) {
if (p$1.assignAromaticMustBeSingle$org_jmol_modelset_Atom.apply(this, [b.atom1]) || p$1.assignAromaticMustBeSingle$org_jmol_modelset_Atom.apply(this, [b.atom2]) ) return false;
switch (b.getCovalentOrder$()) {
case 1:
case 2:
return b.atom1.getCovalentBondCount$() <= 3 && b.atom2.getCovalentBondCount$() <= 3 ;
default:
return false;
}
});

Clazz.newMeth(C$, 'assignAromaticMustBeSingle$org_jmol_modelset_Atom', function (atom) {
var n=atom.getElementNumber$();
switch (n) {
case 6:
case 7:
case 8:
case 16:
break;
default:
return true;
}
var nAtoms=atom.getValence$();
switch (n) {
case 6:
return (nAtoms == 4);
case 7:
return (atom.group.getNitrogenAtom$() === atom  || nAtoms == 3 && atom.getFormalCharge$() < 1  );
case 8:
return (atom.group.getCarbonylOxygenAtom$() !== atom  && nAtoms == 2  && atom.getFormalCharge$() < 1 );
case 16:
return (atom.group.groupID == 5 || nAtoms == 2 && atom.getFormalCharge$() < 1  );
}
return false;
}, p$1);

Clazz.newMeth(C$, 'assignAromaticNandO$javajs_util_BS', function (bsSelected) {
var bond;
var isAll=(bsSelected == null );
var i0=(isAll ? this.bondCount - 1 : bsSelected.nextSetBit$I(0));
for (var i=i0; i >= 0; i=(isAll ? i - 1 : bsSelected.nextSetBit$I(i + 1))) {
bond=this.bo[i];
if (!bond.is$I(513)) continue;
var atom1;
var atom2=bond.atom2;
var n1;
var n2=atom2.getElementNumber$();
if (n2 == 7 || n2 == 8 ) {
n1=n2;
atom1=atom2;
atom2=bond.atom1;
n2=atom2.getElementNumber$();
} else {
atom1=bond.atom1;
n1=atom1.getElementNumber$();
}if (n1 != 7 && n1 != 8 ) continue;
var valence=atom1.getValence$();
if (valence < 0) continue;
var bondorder=atom1.getCovalentBondCount$();
var charge=atom1.getFormalCharge$();
switch (n1) {
case 7:
if (valence == 3 && bondorder == 3  && charge < 1  && n2 == 6  && atom2.getValence$() == 3 ) bond.setOrder$I(514);
break;
case 8:
if (valence == 1 && charge == 0  && (n2 == 14 || n2 == 16 ) ) bond.setOrder$I(514);
break;
}
}
}, p$1);

Clazz.newMeth(C$, 'getAtomBitsMDb$I$O', function (tokType, specInfo) {
var bs=Clazz.new_($I$(1));
switch (tokType) {
default:
return this.getAtomBitsMDa$I$O$javajs_util_BS(tokType, specInfo, bs);
case 1677721602:
var bsBonds=specInfo;
for (var i=bsBonds.nextSetBit$I(0); i >= 0; i=bsBonds.nextSetBit$I(i + 1)) {
bs.set$I(this.bo[i].atom1.i);
bs.set$I(this.bo[i].atom2.i);
}
return bs;
case 1073742331:
for (var i=this.bondCount; --i >= 0; ) if (this.bo[i].isAromatic$()) {
bs.set$I(this.bo[i].atom1.i);
bs.set$I(this.bo[i].atom2.i);
}
return bs;
}
});

Clazz.newMeth(C$, 'assignBond$I$C', function (bondIndex, type) {
var bondOrder=type.$c() - 48;
var bond=this.bo[bondIndex];
(this).clearDB$I(bond.atom1.i);
switch (type.$c()) {
case 48:
case 49:
case 50:
case 51:
break;
case 112:
case 109:
bondOrder=($I$(6).getBondOrderNumberFromOrder$I(bond.getCovalentOrder$()).charCodeAt$I(0)) - 48 + (type == "p" ? 1 : -1);
if (bondOrder > 3) bondOrder=1;
 else if (bondOrder < 0) bondOrder=3;
break;
default:
return null;
}
var bsAtoms=Clazz.new_($I$(1));
try {
if (bondOrder == 0) {
var bs=Clazz.new_($I$(1));
bs.set$I(bond.index);
bsAtoms.set$I(bond.atom1.i);
bsAtoms.set$I(bond.atom2.i);
this.dBm$javajs_util_BS$Z(bs, false);
return bsAtoms;
}bond.setOrder$I(bondOrder | 131072);
if (bond.atom1.getElementNumber$() != 1 && bond.atom2.getElementNumber$() != 1 ) {
this.removeUnnecessaryBonds$org_jmol_modelset_Atom$Z(bond.atom1, false);
this.removeUnnecessaryBonds$org_jmol_modelset_Atom$Z(bond.atom2, false);
}bsAtoms.set$I(bond.atom1.i);
bsAtoms.set$I(bond.atom2.i);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
$I$(9).error$S("Exception in seBondOrder: " + e.toString());
} else {
throw e;
}
}
return bsAtoms;
});

Clazz.newMeth(C$, 'removeUnnecessaryBonds$org_jmol_modelset_Atom$Z', function (atom, deleteAtom) {
var bs=Clazz.new_($I$(1));
var bsBonds=Clazz.new_($I$(1));
var bonds=atom.bonds;
if (bonds == null ) return;
for (var i=0; i < bonds.length; i++) if (bonds[i].isCovalent$()) {
var atom2=bonds[i].getOtherAtom$org_jmol_modelset_Atom(atom);
if (atom2.getElementNumber$() == 1) bs.set$I(bonds[i].getOtherAtom$org_jmol_modelset_Atom(atom).i);
} else {
bsBonds.set$I(bonds[i].index);
}
if (bsBonds.nextSetBit$I(0) >= 0) this.dBm$javajs_util_BS$Z(bsBonds, false);
if (deleteAtom) bs.set$I(atom.i);
if (bs.nextSetBit$I(0) >= 0) this.vwr.deleteAtoms$javajs_util_BS$Z(bs, false);
});

Clazz.newMeth(C$, 'displayBonds$org_jmol_modelset_BondSet$Z', function (bs, isDisplay) {
if (!isDisplay) this.haveHiddenBonds=true;
for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) if (i < this.bondCount && this.bo[i].mad != 0 ) this.bo[i].setShapeVisibility$Z(isDisplay);

});

Clazz.newMeth(C$, 'getAtomsConnected$F$F$I$javajs_util_BS', function (min, max, intType, bs) {
var isBonds=Clazz.instanceOf(bs, "org.jmol.modelset.BondSet");
var bsResult=(isBonds ? Clazz.new_($I$(10)) : Clazz.new_($I$(1)));
var nBonded=Clazz.array(Integer.TYPE, [this.ac]);
var i;
var ishbond=(intType == 30720);
var isall=(intType == 65535);
for (var ibond=0; ibond < this.bondCount; ibond++) {
var bond=this.bo[ibond];
if (isall || bond.is$I(intType) || ishbond && bond.isHydrogen$()   ) {
if (isBonds) {
bsResult.set$I(ibond);
} else {
if (bs.get$I(bond.atom1.i)) {
nBonded[i=bond.atom2.i]++;
bsResult.set$I(i);
}if (bs.get$I(bond.atom2.i)) {
nBonded[i=bond.atom1.i]++;
bsResult.set$I(i);
}}}}
if (isBonds) return bsResult;
var nonbonded=(min == 0 );
for (i=this.ac; --i >= 0; ) {
var n=nBonded[i];
if (n < min  || n > max  ) bsResult.clear$I(i);
 else if (nonbonded && n == 0 ) bsResult.set$I(i);
}
return bsResult;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:13 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
