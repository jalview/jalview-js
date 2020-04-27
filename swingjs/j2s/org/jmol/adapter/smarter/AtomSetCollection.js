(function(){var P$=Clazz.newPackage("org.jmol.adapter.smarter"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.adapter.smarter.Atom','org.jmol.adapter.smarter.Bond','org.jmol.adapter.smarter.Structure','Boolean','java.util.Properties','org.jmol.adapter.smarter.SmarterJmolAdapter','javajs.util.Lst','javajs.util.P3','javajs.util.V3','javajs.util.BS','javajs.util.AU','java.util.Collections','org.jmol.util.Logger','org.jmol.api.Interface','org.jmol.util.BSUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AtomSetCollection");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atomSetInfo=Clazz.new_($I$(1,1));
this.atoms=Clazz.array($I$(2), [256]);
this.bonds=Clazz.array($I$(3), [256]);
this.structures=Clazz.array($I$(4), [16]);
this.iSet=-1;
this.atomSetNumbers=Clazz.array(Integer.TYPE, [16]);
this.atomSetAtomIndexes=Clazz.array(Integer.TYPE, [16]);
this.atomSetAtomCounts=Clazz.array(Integer.TYPE, [16]);
this.atomSetBondCounts=Clazz.array(Integer.TYPE, [16]);
this.atomSetAuxiliaryInfo=Clazz.array($I$(1), [16]);
this.trajectoryStepCount=0;
this.checkSpecial=true;
this.atomSymbolicMap=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['coordinatesAreFractional','isTrajectory','doFixPeriodic','allowMultiple','haveAnisou','checkLatticeOnly','checkSpecial','haveUnitCell'],'I',['ac','bondCount','structureCount','atomSetCount','iSet','trajectoryStepCount','baseSymmetryAtomCount','bondIndex0','vibScale'],'S',['fileTypeName','collectionName','errorMessage'],'O',['reader','org.jmol.adapter.smarter.AtomSetCollectionReader','bsAtoms','javajs.util.BS','atomSetInfo','java.util.Map','atoms','org.jmol.adapter.smarter.Atom[]','bonds','org.jmol.adapter.smarter.Bond[]','structures','org.jmol.adapter.smarter.Structure[]','atomSetNumbers','int[]','+atomSetAtomIndexes','+atomSetAtomCounts','+atomSetBondCounts','atomSetAuxiliaryInfo','java.util.Map[]','trajectorySteps','javajs.util.Lst','+vibrationSteps','+trajectoryNames','+readerList','bsStructuredModels','javajs.util.BS','xtalSymmetry','org.jmol.adapter.smarter.XtalSymmetry','atomSymbolicMap','java.util.Map']]
,['O',['globalBooleans','String[]']]]

Clazz.newMeth(C$, 'setCollectionName$S', function (collectionName) {
if (collectionName != null  && (collectionName=collectionName.trim$()).length$() > 0 ) this.collectionName=collectionName;
});

Clazz.newMeth(C$, 'clearGlobalBoolean$I', function (globalIndex) {
this.atomSetInfo.remove$O(C$.globalBooleans[globalIndex]);
});

Clazz.newMeth(C$, 'setGlobalBoolean$I', function (globalIndex) {
this.setInfo$S$O(C$.globalBooleans[globalIndex], $I$(5).TRUE);
});

Clazz.newMeth(C$, 'getGlobalBoolean$I', function (globalIndex) {
return (this.atomSetInfo.get$O(C$.globalBooleans[globalIndex]) === $I$(5).TRUE );
});

Clazz.newMeth(C$, 'c$$S$org_jmol_adapter_smarter_AtomSetCollectionReader$org_jmol_adapter_smarter_AtomSetCollectionA$javajs_util_Lst', function (fileTypeName, reader, array, list) {
;C$.$init$.apply(this);
this.fileTypeName=fileTypeName;
this.reader=reader;
this.allowMultiple=(reader == null  || reader.desiredVibrationNumber < 0 );
var p=Clazz.new_($I$(6,1));
p.put$O$O("PATH_KEY", ".PATH");
p.put$O$O("PATH_SEPARATOR", $I$(7).PATH_SEPARATOR);
this.setInfo$S$O("properties", p);
if (array != null ) {
var n=0;
this.readerList=Clazz.new_($I$(8,1));
for (var i=0; i < array.length; i++) if (array[i] != null  && (array[i].ac > 0 || array[i].reader != null  && array[i].reader.mustFinalizeModelSet  ) ) this.appendAtomSetCollection$I$org_jmol_adapter_smarter_AtomSetCollection(n++, array[i]);

if (n > 1) this.setInfo$S$O("isMultiFile", $I$(5).TRUE);
} else if (list != null ) {
this.setInfo$S$O("isMultiFile", $I$(5).TRUE);
p$1.appendAtomSetCollectionList$javajs_util_Lst.apply(this, [list]);
}}, 1);

Clazz.newMeth(C$, 'appendAtomSetCollectionList$javajs_util_Lst', function (list) {
var n=list.size$();
if (n == 0) {
this.errorMessage="No file found!";
return;
}for (var i=0; i < n; i++) {
var o=list.get$I(i);
if (Clazz.instanceOf(o, "javajs.util.Lst")) p$1.appendAtomSetCollectionList$javajs_util_Lst.apply(this, [o]);
 else this.appendAtomSetCollection$I$org_jmol_adapter_smarter_AtomSetCollection(i, o);
}
}, p$1);

Clazz.newMeth(C$, 'setTrajectory$', function () {
if (!this.isTrajectory) this.trajectorySteps=Clazz.new_($I$(8,1));
this.isTrajectory=true;
var n=(this.bsAtoms == null  ? this.ac : this.bsAtoms.cardinality$());
if (n == 0) return;
var trajectoryStep=Clazz.array($I$(9), [n]);
var haveVibrations=(n > 0 && this.atoms[0].vib != null   && !Float.isNaN$F(this.atoms[0].vib.z) );
var vibrationStep=(haveVibrations ? Clazz.array($I$(10), [n]) : null);
var prevSteps=(this.trajectoryStepCount == 0 ? null : this.trajectorySteps.get$I(this.trajectoryStepCount - 1));
for (var i=0, ii=0; i < this.ac; i++) {
if (this.bsAtoms != null  && !this.bsAtoms.get$I(i) ) continue;
var pt=$I$(9).newP$javajs_util_T3(this.atoms[i]);
if (this.doFixPeriodic && prevSteps != null  ) pt=C$.fixPeriodic$javajs_util_P3$javajs_util_P3(pt, prevSteps[i]);
trajectoryStep[ii]=pt;
if (haveVibrations) vibrationStep[ii]=this.atoms[i].vib;
ii++;
}
if (haveVibrations) {
if (this.vibrationSteps == null ) {
this.vibrationSteps=Clazz.new_($I$(8,1));
for (var i=0; i < this.trajectoryStepCount; i++) this.vibrationSteps.addLast$O(null);

}this.vibrationSteps.addLast$O(vibrationStep);
}this.trajectorySteps.addLast$O(trajectoryStep);
this.trajectoryStepCount++;
});

Clazz.newMeth(C$, 'appendAtomSetCollection$I$org_jmol_adapter_smarter_AtomSetCollection', function (collectionIndex, collection) {
if (collection.reader != null  && collection.reader.mustFinalizeModelSet ) this.readerList.addLast$O(collection.reader);
var existingAtomsCount=this.ac;
this.setInfo$S$O("loadState", collection.atomSetInfo.get$O("loadState"));
if (collection.bsAtoms != null ) {
if (this.bsAtoms == null ) this.bsAtoms=Clazz.new_($I$(11,1));
for (var i=collection.bsAtoms.nextSetBit$I(0); i >= 0; i=collection.bsAtoms.nextSetBit$I(i + 1)) this.bsAtoms.set$I(existingAtomsCount + i);

}var clonedAtoms=0;
var atomSetCount0=this.atomSetCount;
for (var atomSetNum=0; atomSetNum < collection.atomSetCount; atomSetNum++) {
this.newAtomSet$();
var info=this.atomSetAuxiliaryInfo[this.iSet]=collection.atomSetAuxiliaryInfo[atomSetNum];
var atomInfo=info.get$O("PDB_CONECT_firstAtom_count_max");
if (atomInfo != null ) atomInfo[0]+=existingAtomsCount;
this.setCurrentModelInfo$S$O("title", collection.collectionName);
this.setAtomSetName$S(collection.getAtomSetName$I(atomSetNum));
for (var atomNum=0; atomNum < collection.atomSetAtomCounts[atomSetNum]; atomNum++) {
try {
if (this.bsAtoms != null ) this.bsAtoms.set$I(this.ac);
this.newCloneAtom$org_jmol_adapter_smarter_Atom(collection.atoms[clonedAtoms]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.errorMessage="appendAtomCollection error: " + e;
} else {
throw e;
}
}
clonedAtoms++;
}
this.atomSetNumbers[this.iSet]=(collectionIndex < 0 ? this.iSet + 1 : ((collectionIndex + 1) * 1000000) + collection.atomSetNumbers[atomSetNum]);
}
for (var bondNum=0; bondNum < collection.bondCount; bondNum++) {
var bond=collection.bonds[bondNum];
this.addNewBondWithOrder$I$I$I(bond.atomIndex1 + existingAtomsCount, bond.atomIndex2 + existingAtomsCount, bond.order);
}
for (var i=C$.globalBooleans.length; --i >= 0; ) if (collection.getGlobalBoolean$I(i)) this.setGlobalBoolean$I(i);

for (var i=0; i < collection.structureCount; i++) {
var s=collection.structures[i];
this.addStructure$org_jmol_adapter_smarter_Structure(s);
s.modelStartEnd[0]+=atomSetCount0;
s.modelStartEnd[1]+=atomSetCount0;
}
});

Clazz.newMeth(C$, 'setNoAutoBond$', function () {
this.setInfo$S$O("noAutoBond", $I$(5).TRUE);
});

Clazz.newMeth(C$, 'freeze$Z', function (reverseModels) {
if (this.atomSetCount == 1 && this.collectionName == null  ) this.collectionName=this.getAtomSetAuxiliaryInfoValue$I$S(0, "name");
if (reverseModels) p$1.reverseAtomSets.apply(this, []);
if (this.trajectoryStepCount > 1) p$1.finalizeTrajectory.apply(this, []);
p$1.getList$Z.apply(this, [true]);
p$1.getList$Z.apply(this, [false]);
for (var i=0; i < this.atomSetCount; i++) {
this.setModelInfoForSet$S$O$I("initialAtomCount", Integer.valueOf$I(this.atomSetAtomCounts[i]), i);
this.setModelInfoForSet$S$O$I("initialBondCount", Integer.valueOf$I(this.atomSetBondCounts[i]), i);
}
});

Clazz.newMeth(C$, 'reverseAtomSets', function () {
p$1.reverseArray$IA.apply(this, [this.atomSetAtomIndexes]);
p$1.reverseArray$IA.apply(this, [this.atomSetNumbers]);
p$1.reverseArray$IA.apply(this, [this.atomSetAtomCounts]);
p$1.reverseArray$IA.apply(this, [this.atomSetBondCounts]);
C$.reverseList$javajs_util_Lst(this.trajectorySteps);
C$.reverseList$javajs_util_Lst(this.trajectoryNames);
C$.reverseList$javajs_util_Lst(this.vibrationSteps);
p$1.reverseObject$OA.apply(this, [this.atomSetAuxiliaryInfo]);
for (var i=0; i < this.ac; i++) this.atoms[i].atomSetIndex=this.atomSetCount - 1 - this.atoms[i].atomSetIndex ;

for (var i=0; i < this.structureCount; i++) {
var m=this.structures[i].modelStartEnd[0];
if (m >= 0) {
this.structures[i].modelStartEnd[0]=this.atomSetCount - 1 - this.structures[i].modelStartEnd[1] ;
this.structures[i].modelStartEnd[1]=this.atomSetCount - 1 - m ;
}}
for (var i=0; i < this.bondCount; i++) this.bonds[i].atomSetIndex=this.atomSetCount - 1 - this.atoms[this.bonds[i].atomIndex1].atomSetIndex ;

p$1.reverseSets$org_jmol_adapter_smarter_AtomSetObjectA$I.apply(this, [this.bonds, this.bondCount]);
var lists=$I$(12).createArrayOfArrayList$I(this.atomSetCount);
for (var i=0; i < this.atomSetCount; i++) lists[i]=Clazz.new_($I$(8,1));

for (var i=0; i < this.ac; i++) lists[this.atoms[i].atomSetIndex].addLast$O(this.atoms[i]);

var newIndex=Clazz.array(Integer.TYPE, [this.ac]);
var n=this.ac;
for (var i=this.atomSetCount; --i >= 0; ) for (var j=lists[i].size$(); --j >= 0; ) {
var a=this.atoms[--n]=lists[i].get$I(j);
newIndex[a.index]=n;
a.index=n;
}

for (var i=0; i < this.bondCount; i++) {
this.bonds[i].atomIndex1=newIndex[this.bonds[i].atomIndex1];
this.bonds[i].atomIndex2=newIndex[this.bonds[i].atomIndex2];
}
for (var i=0; i < this.atomSetCount; i++) {
var conect=this.getAtomSetAuxiliaryInfoValue$I$S(i, "PDB_CONECT_firstAtom_count_max");
if (conect == null ) continue;
conect[0]=newIndex[conect[0]];
conect[1]=this.atomSetAtomCounts[i];
}
}, p$1);

Clazz.newMeth(C$, 'reverseSets$org_jmol_adapter_smarter_AtomSetObjectA$I', function (o, n) {
var lists=$I$(12).createArrayOfArrayList$I(this.atomSetCount);
for (var i=0; i < this.atomSetCount; i++) lists[i]=Clazz.new_($I$(8,1));

for (var i=0; i < n; i++) {
var index=o[i].atomSetIndex;
if (index < 0) return;
lists[o[i].atomSetIndex].addLast$O(o[i]);
}
for (var i=this.atomSetCount; --i >= 0; ) for (var j=lists[i].size$(); --j >= 0; ) o[--n]=lists[i].get$I(j);


}, p$1);

Clazz.newMeth(C$, 'reverseObject$OA', function (o) {
var n=this.atomSetCount;
for (var i=(n/2|0); --i >= 0; ) $I$(12).swap$OA$I$I(o, i, n - 1 - i );

}, p$1);

Clazz.newMeth(C$, 'reverseList$javajs_util_Lst', function (list) {
if (list == null ) return;
$I$(13).reverse$java_util_List(list);
}, 1);

Clazz.newMeth(C$, 'reverseArray$IA', function (a) {
var n=this.atomSetCount;
for (var i=(n/2|0); --i >= 0; ) $I$(12).swapInt$IA$I$I(a, i, n - 1 - i );

}, p$1);

Clazz.newMeth(C$, 'getList$Z', function (isAltLoc) {
var i;
for (i=this.ac; --i >= 0; ) if (this.atoms[i] != null  && (isAltLoc ? this.atoms[i].altLoc : this.atoms[i].insertionCode) != "\u0000" ) break;

if (i < 0) return;
var lists=Clazz.array(String, [this.atomSetCount]);
for (i=0; i < this.atomSetCount; i++) lists[i]="";

var pt;
for (i=0; i < this.ac; i++) {
if (this.atoms[i] == null ) continue;
var id=(isAltLoc ? this.atoms[i].altLoc : this.atoms[i].insertionCode);
if (id != "\u0000" && lists[pt=this.atoms[i].atomSetIndex].indexOf$I(id) < 0 ) lists[pt] += id;
}
var type=(isAltLoc ? "altLocs" : "insertionCodes");
for (i=0; i < this.atomSetCount; i++) if (lists[i].length$() > 0) this.setModelInfoForSet$S$O$I(type, lists[i], i);

}, p$1);

Clazz.newMeth(C$, 'finish$', function () {
if (this.reader != null ) this.reader.finalizeModelSet$();
 else if (this.readerList != null ) for (var i=0; i < this.readerList.size$(); i++) this.readerList.get$I(i).finalizeModelSet$();

this.atoms=null;
this.atomSetAtomCounts=Clazz.array(Integer.TYPE, [16]);
this.atomSetAuxiliaryInfo=Clazz.array($I$(1), [16]);
this.atomSetInfo=Clazz.new_($I$(1,1));
this.atomSetCount=0;
this.atomSetNumbers=Clazz.array(Integer.TYPE, [16]);
this.atomSymbolicMap=Clazz.new_($I$(1,1));
this.bonds=null;
this.iSet=-1;
this.readerList=null;
this.xtalSymmetry=null;
this.structures=Clazz.array($I$(4), [16]);
this.structureCount=0;
this.trajectorySteps=null;
this.vibrationSteps=null;
});

Clazz.newMeth(C$, 'discardPreviousAtoms$', function () {
for (var i=this.ac; --i >= 0; ) this.atoms[i]=null;

this.ac=0;
this.atomSymbolicMap.clear$();
this.atomSetCount=0;
this.iSet=-1;
for (var i=this.atomSetAuxiliaryInfo.length; --i >= 0; ) {
this.atomSetAtomCounts[i]=0;
this.atomSetBondCounts[i]=0;
this.atomSetAuxiliaryInfo[i]=null;
}
});

Clazz.newMeth(C$, 'removeCurrentAtomSet$', function () {
if (this.iSet < 0) return;
var ai=this.atomSetAtomIndexes[this.iSet];
if (this.bsAtoms != null ) this.bsAtoms.clearBits$I$I(ai, this.ac);
this.ac=ai;
this.atomSetAtomCounts[this.iSet]=0;
this.iSet--;
this.atomSetCount--;
this.reader.doCheckUnitCell=false;
});

Clazz.newMeth(C$, 'getHydrogenAtomCount$', function () {
var n=0;
for (var i=0; i < this.ac; i++) if (this.atoms[i].elementNumber == 1 || this.atoms[i].elementSymbol.equals$O("H") ) n++;

return n;
});

Clazz.newMeth(C$, 'newCloneAtom$org_jmol_adapter_smarter_Atom', function (atom) {
var clone=atom.getClone$();
this.addAtom$org_jmol_adapter_smarter_Atom(clone);
return clone;
});

Clazz.newMeth(C$, 'cloneFirstAtomSet$I', function (atomCount) {
if (!this.allowMultiple) return 0;
this.newAtomSet$();
if (atomCount == 0) atomCount=this.atomSetAtomCounts[0];
for (var i=0; i < atomCount; ++i) this.newCloneAtom$org_jmol_adapter_smarter_Atom(this.atoms[i]);

return this.ac;
});

Clazz.newMeth(C$, 'cloneAtomSetWithBonds$Z', function (isLast) {
var nBonds=this.atomSetBondCounts[isLast ? this.iSet : 0];
var atomIncrement=(isLast ? this.cloneLastAtomSet$() : this.cloneFirstAtomSet$I(0));
if (atomIncrement > 0) for (var i=0; i < nBonds; i++) {
var bond=this.bonds[this.bondCount - nBonds];
this.addNewBondWithOrder$I$I$I(bond.atomIndex1 + atomIncrement, bond.atomIndex2 + atomIncrement, bond.order);
}
});

Clazz.newMeth(C$, 'cloneLastAtomSet$', function () {
return this.cloneLastAtomSetFromPoints$I$javajs_util_P3A(0, null);
});

Clazz.newMeth(C$, 'cloneLastAtomSetFromPoints$I$javajs_util_P3A', function (ac, pts) {
if (!this.allowMultiple) return 0;
var count=(ac > 0 ? ac : this.getLastAtomSetAtomCount$());
var atomIndex=this.getLastAtomSetAtomIndex$();
this.newAtomSet$();
for (var i=0; i < count; ++i) {
var atom=this.newCloneAtom$org_jmol_adapter_smarter_Atom(this.atoms[atomIndex++]);
if (pts != null ) atom.setT$javajs_util_T3(pts[i]);
}
return count;
});

Clazz.newMeth(C$, 'getLastAtomSetAtomCount$', function () {
return this.atomSetAtomCounts[this.iSet];
});

Clazz.newMeth(C$, 'getLastAtomSetAtomIndex$', function () {
return this.ac - this.atomSetAtomCounts[this.iSet];
});

Clazz.newMeth(C$, 'addNewAtom$', function () {
return this.addAtom$org_jmol_adapter_smarter_Atom(Clazz.new_($I$(2,1)));
});

Clazz.newMeth(C$, 'addAtom$org_jmol_adapter_smarter_Atom', function (atom) {
if (this.ac == this.atoms.length) {
if (this.ac > 200000) this.atoms=$I$(12).ensureLength$O$I(this.atoms, this.ac + 50000);
 else this.atoms=$I$(12).doubleLength$O(this.atoms);
}if (this.atomSetCount == 0) this.newAtomSet$();
atom.index=this.ac;
this.atoms[this.ac++]=atom;
atom.atomSetIndex=this.iSet;
atom.atomSite=this.atomSetAtomCounts[this.iSet]++;
return atom;
});

Clazz.newMeth(C$, 'addAtomWithMappedName$org_jmol_adapter_smarter_Atom', function (atom) {
var atomName=this.addAtom$org_jmol_adapter_smarter_Atom(atom).atomName;
if (atomName != null ) this.atomSymbolicMap.put$O$O(atomName, atom);
});

Clazz.newMeth(C$, 'addAtomWithMappedSerialNumber$org_jmol_adapter_smarter_Atom', function (atom) {
var atomSerial=this.addAtom$org_jmol_adapter_smarter_Atom(atom).atomSerial;
if (atomSerial != -2147483648) this.atomSymbolicMap.put$O$O("" + atomSerial, atom);
});

Clazz.newMeth(C$, 'getAtomFromName$S', function (atomName) {
return this.atomSymbolicMap.get$O(atomName);
});

Clazz.newMeth(C$, 'getAtomIndex$S', function (name) {
var a=this.atomSymbolicMap.get$O(name);
return (a == null  ? -1 : a.index);
});

Clazz.newMeth(C$, 'addNewBondWithOrder$I$I$I', function (atomIndex1, atomIndex2, order) {
if (atomIndex1 >= 0 && atomIndex1 < this.ac  && atomIndex2 >= 0  && atomIndex2 < this.ac  && atomIndex1 != atomIndex2 ) this.addBond$org_jmol_adapter_smarter_Bond(Clazz.new_($I$(3,1).c$$I$I$I,[atomIndex1, atomIndex2, order]));
});

Clazz.newMeth(C$, 'addNewBondFromNames$S$S$I', function (atomName1, atomName2, order) {
this.addNewBondWithOrderA$org_jmol_adapter_smarter_Atom$org_jmol_adapter_smarter_Atom$I(this.getAtomFromName$S(atomName1), this.getAtomFromName$S(atomName2), order);
});

Clazz.newMeth(C$, 'addNewBondWithOrderA$org_jmol_adapter_smarter_Atom$org_jmol_adapter_smarter_Atom$I', function (atom1, atom2, order) {
if (atom1 != null  && atom2 != null  ) this.addNewBondWithOrder$I$I$I(atom1.index, atom2.index, order);
});

Clazz.newMeth(C$, 'addBond$org_jmol_adapter_smarter_Bond', function (bond) {
if (this.trajectoryStepCount > 0) return;
if (bond.atomIndex1 < 0 || bond.atomIndex2 < 0  || bond.order < 0  || bond.atomIndex1 == bond.atomIndex2  || this.atoms[bond.atomIndex1].atomSetIndex != this.atoms[bond.atomIndex2].atomSetIndex ) {
if ($I$(14).debugging) {
(function(a,f){return f.apply(null,a)})([">>>>>>BAD BOND:" + bond.atomIndex1 + "-" + bond.atomIndex2 + " order=" + bond.order ],$I$(14).debug$S);
}return;
}if (this.bondCount == this.bonds.length) this.bonds=$I$(12).arrayCopyObject$O$I(this.bonds, this.bondCount + 1024);
this.bonds[this.bondCount++]=bond;
this.atomSetBondCounts[this.iSet]++;
});

Clazz.newMeth(C$, 'finalizeStructures$', function () {
if (this.structureCount == 0) return;
this.bsStructuredModels=Clazz.new_($I$(11,1));
var map=Clazz.new_($I$(1,1));
for (var i=0; i < this.structureCount; i++) {
var s=this.structures[i];
if (s.modelStartEnd[0] == -1) {
s.modelStartEnd[0]=0;
s.modelStartEnd[1]=this.atomSetCount - 1;
}this.bsStructuredModels.setBits$I$I(s.modelStartEnd[0], s.modelStartEnd[1] + 1);
if (s.strandCount == 0) continue;
var key=s.structureID + " " + s.modelStartEnd[0] ;
var v=map.get$O(key);
var count=(v == null  ? 0 : v.intValue$()) + 1;
map.put$O$O(key, Integer.valueOf$I(count));
}
for (var i=0; i < this.structureCount; i++) {
var s=this.structures[i];
if (s.strandCount == 1) s.strandCount=map.get$O(s.structureID + " " + s.modelStartEnd[0] ).intValue$();
}
});

Clazz.newMeth(C$, 'addStructure$org_jmol_adapter_smarter_Structure', function (structure) {
if (this.structureCount == this.structures.length) this.structures=$I$(12).arrayCopyObject$O$I(this.structures, this.structureCount + 32);
this.structures[this.structureCount++]=structure;
});

Clazz.newMeth(C$, 'addVibrationVectorWithSymmetry$I$F$F$F$Z', function (iatom, vx, vy, vz, withSymmetry) {
if (!withSymmetry) {
this.addVibrationVector$I$F$F$F(iatom, vx, vy, vz);
return;
}var atomSite=this.atoms[iatom].atomSite;
var atomSetIndex=this.atoms[iatom].atomSetIndex;
for (var i=iatom; i < this.ac && this.atoms[i].atomSetIndex == atomSetIndex ; i++) {
if (this.atoms[i].atomSite == atomSite) this.addVibrationVector$I$F$F$F(i, vx, vy, vz);
}
});

Clazz.newMeth(C$, 'addVibrationVector$I$F$F$F', function (iatom, x, y, z) {
if (!this.allowMultiple) iatom=iatom % this.ac;
return (this.atoms[iatom].vib=$I$(10).new3$F$F$F(x, y, z));
});

Clazz.newMeth(C$, 'setCoordinatesAreFractional$Z', function (tf) {
this.coordinatesAreFractional=tf;
this.setCurrentModelInfo$S$O("coordinatesAreFractional", $I$(5).valueOf$Z(tf));
if (tf) this.setGlobalBoolean$I(0);
});

Clazz.newMeth(C$, 'setAnisoBorU$org_jmol_adapter_smarter_Atom$FA$I', function (atom, data, type) {
this.haveAnisou=true;
atom.anisoBorU=data;
data[6]=type;
});

Clazz.newMeth(C$, 'setU$org_jmol_adapter_smarter_Atom$I$F', function (atom, i, val) {
var data=atom.anisoBorU;
if (data == null ) this.setAnisoBorU$org_jmol_adapter_smarter_Atom$FA$I(atom, data=Clazz.array(Float.TYPE, [8]), 8);
data[i]=val;
});

Clazz.newMeth(C$, 'getXSymmetry$', function () {
if (this.xtalSymmetry == null ) this.xtalSymmetry=($I$(15).getOption$S$org_jmol_viewer_Viewer$S("adapter.smarter.XtalSymmetry", this.reader.vwr, "file")).set$org_jmol_adapter_smarter_AtomSetCollectionReader(this.reader);
return this.xtalSymmetry;
});

Clazz.newMeth(C$, 'getSymmetry$', function () {
return this.getXSymmetry$().getSymmetry$();
});

Clazz.newMeth(C$, 'setSymmetry$org_jmol_api_SymmetryInterface', function (symmetry) {
return (symmetry == null  ? null : this.getXSymmetry$().setSymmetry$org_jmol_api_SymmetryInterface(symmetry));
});

Clazz.newMeth(C$, 'setTensors$', function () {
if (this.haveAnisou) this.getXSymmetry$().setTensors$();
});

Clazz.newMeth(C$, 'setInfo$S$O', function (key, value) {
if (value == null ) this.atomSetInfo.remove$O(key);
 else this.atomSetInfo.put$O$O(key, value);
});

Clazz.newMeth(C$, 'setAtomSetCollectionPartialCharges$S', function (auxKey) {
if (!this.atomSetInfo.containsKey$O(auxKey)) return false;
var atomData=this.atomSetInfo.get$O(auxKey);
var n=atomData.size$();
for (var i=this.ac; --i >= 0; ) this.atoms[i].partialCharge=atomData.get$I(i % n).floatValue$();

$I$(14).info$S("Setting partial charges type " + auxKey);
return true;
});

Clazz.newMeth(C$, 'mapPartialCharge$S$F', function (atomName, charge) {
this.getAtomFromName$S(atomName).partialCharge=charge;
});

Clazz.newMeth(C$, 'fixPeriodic$javajs_util_P3$javajs_util_P3', function (pt, pt0) {
pt.x=C$.fixPoint$F$F(pt.x, pt0.x);
pt.y=C$.fixPoint$F$F(pt.y, pt0.y);
pt.z=C$.fixPoint$F$F(pt.z, pt0.z);
return pt;
}, 1);

Clazz.newMeth(C$, 'fixPoint$F$F', function (x, x0) {
while (x - x0 > 0.9 ){
x -= 1;
}
while (x - x0 < -0.9 ){
x += 1;
}
return x;
}, 1);

Clazz.newMeth(C$, 'finalizeTrajectoryAs$javajs_util_Lst$javajs_util_Lst', function (trajectorySteps, vibrationSteps) {
this.trajectorySteps=trajectorySteps;
this.vibrationSteps=vibrationSteps;
this.trajectoryStepCount=trajectorySteps.size$();
p$1.finalizeTrajectory.apply(this, []);
});

Clazz.newMeth(C$, 'finalizeTrajectory', function () {
if (this.trajectoryStepCount == 0) return;
var trajectory=this.trajectorySteps.get$I(0);
var vibrations=(this.vibrationSteps == null  ? null : this.vibrationSteps.get$I(0));
var n=(this.bsAtoms == null  ? this.ac : this.bsAtoms.cardinality$());
if (this.vibrationSteps != null  && vibrations != null   && vibrations.length < n  || trajectory.length < n ) {
this.errorMessage="File cannot be loaded as a trajectory";
return;
}var v=Clazz.new_($I$(10,1));
for (var i=0, ii=0; i < this.ac; i++) {
if (this.bsAtoms != null  && !this.bsAtoms.get$I(i) ) continue;
if (this.vibrationSteps != null ) this.atoms[i].vib=(vibrations == null  ? v : vibrations[ii]);
if (trajectory[ii] != null ) this.atoms[i].setT$javajs_util_T3(trajectory[ii]);
ii++;
}
this.setInfo$S$O("trajectorySteps", this.trajectorySteps);
if (this.vibrationSteps != null ) this.setInfo$S$O("vibrationSteps", this.vibrationSteps);
}, p$1);

Clazz.newMeth(C$, 'newAtomSet$', function () {
this.newAtomSetClear$Z(true);
});

Clazz.newMeth(C$, 'newAtomSetClear$Z', function (doClearMap) {
if (!this.allowMultiple && this.iSet >= 0 ) this.reader.discardPreviousAtoms$();
this.bondIndex0=this.bondCount;
if (this.isTrajectory) this.reader.discardPreviousAtoms$();
this.iSet=this.atomSetCount++;
if (this.atomSetCount > this.atomSetNumbers.length) {
this.atomSetAtomIndexes=$I$(12).doubleLengthI$IA(this.atomSetAtomIndexes);
this.atomSetAtomCounts=$I$(12).doubleLengthI$IA(this.atomSetAtomCounts);
this.atomSetBondCounts=$I$(12).doubleLengthI$IA(this.atomSetBondCounts);
this.atomSetAuxiliaryInfo=$I$(12).doubleLength$O(this.atomSetAuxiliaryInfo);
}this.atomSetAtomIndexes[this.iSet]=this.ac;
if (this.atomSetCount + this.trajectoryStepCount > this.atomSetNumbers.length) {
this.atomSetNumbers=$I$(12).doubleLengthI$IA(this.atomSetNumbers);
}if (this.isTrajectory) {
this.atomSetNumbers[this.iSet + this.trajectoryStepCount]=this.atomSetCount + this.trajectoryStepCount;
} else {
this.atomSetNumbers[this.iSet]=this.atomSetCount;
}if (doClearMap) this.atomSymbolicMap.clear$();
this.setCurrentModelInfo$S$O("title", this.collectionName);
});

Clazz.newMeth(C$, 'getAtomSetAtomIndex$I', function (i) {
if (i < 0) System.out.println$S("??");
return this.atomSetAtomIndexes[i];
});

Clazz.newMeth(C$, 'getAtomSetAtomCount$I', function (i) {
return this.atomSetAtomCounts[i];
});

Clazz.newMeth(C$, 'getAtomSetBondCount$I', function (i) {
return this.atomSetBondCounts[i];
});

Clazz.newMeth(C$, 'setAtomSetName$S', function (atomSetName) {
if (atomSetName == null ) return;
if (this.isTrajectory) {
p$1.setTrajectoryName$S.apply(this, [atomSetName]);
return;
}var name0=(this.iSet < 0 ? null : this.getAtomSetName$I(this.iSet));
this.setModelInfoForSet$S$O$I("name", atomSetName, this.iSet);
if (this.reader != null  && atomSetName.length$() > 0  && !atomSetName.equals$O(name0) ) this.reader.appendLoadNote$S(atomSetName);
if (!this.allowMultiple) this.setCollectionName$S(atomSetName);
});

Clazz.newMeth(C$, 'setTrajectoryName$S', function (name) {
if (this.trajectoryStepCount == 0) return;
if (this.trajectoryNames == null ) {
this.trajectoryNames=Clazz.new_($I$(8,1));
}for (var i=this.trajectoryNames.size$(); i < this.trajectoryStepCount; i++) this.trajectoryNames.addLast$O(null);

this.trajectoryNames.set$I$O(this.trajectoryStepCount - 1, name);
}, p$1);

Clazz.newMeth(C$, 'setCurrentAtomSetNumber$I', function (atomSetNumber) {
this.setAtomSetNumber$I$I(this.iSet + (this.isTrajectory ? this.trajectoryStepCount : 0), atomSetNumber);
});

Clazz.newMeth(C$, 'setAtomSetNumber$I$I', function (index, atomSetNumber) {
this.atomSetNumbers[index]=atomSetNumber;
});

Clazz.newMeth(C$, 'setAtomSetModelProperty$S$S', function (key, value) {
this.setAtomSetModelPropertyForSet$S$S$I(key, value, this.iSet);
});

Clazz.newMeth(C$, 'setAtomSetModelPropertyForSet$S$S$I', function (key, value, atomSetIndex) {
var p=this.getAtomSetAuxiliaryInfoValue$I$S(atomSetIndex, "modelProperties");
if (p == null ) this.setModelInfoForSet$S$O$I("modelProperties", p=Clazz.new_($I$(6,1)), atomSetIndex);
p.put$O$O(key, value);
if (key.startsWith$S(".")) p.put$O$O(key.substring$I(1), value);
});

Clazz.newMeth(C$, 'setAtomProperties$S$O$I$Z', function (key, data, atomSetIndex, isGroup) {
if (Clazz.instanceOf(data, "java.lang.String") && !(data).endsWith$S("\n") ) data=data + "\n";
if (atomSetIndex < 0) atomSetIndex=this.iSet;
var p=this.getAtomSetAuxiliaryInfoValue$I$S(atomSetIndex, "atomProperties");
if (p == null ) this.setModelInfoForSet$S$O$I("atomProperties", p=Clazz.new_($I$(1,1)), atomSetIndex);
p.put$O$O(key, data);
});

Clazz.newMeth(C$, 'setAtomSetPartialCharges$S', function (auxKey) {
if (!this.atomSetAuxiliaryInfo[this.iSet].containsKey$O(auxKey)) {
return false;
}var atomData=this.getAtomSetAuxiliaryInfoValue$I$S(this.iSet, auxKey);
for (var i=atomData.size$(); --i >= 0; ) {
this.atoms[i].partialCharge=atomData.get$I(i).floatValue$();
}
return true;
});

Clazz.newMeth(C$, 'getAtomSetAuxiliaryInfoValue$I$S', function (index, key) {
return this.atomSetAuxiliaryInfo[index >= 0 ? index : this.iSet].get$O(key);
});

Clazz.newMeth(C$, 'setCurrentModelInfo$S$O', function (key, value) {
this.setModelInfoForSet$S$O$I(key, value, this.iSet);
});

Clazz.newMeth(C$, 'setModelInfoForSet$S$O$I', function (key, value, atomSetIndex) {
if (atomSetIndex < 0) return;
if (this.atomSetAuxiliaryInfo[atomSetIndex] == null ) this.atomSetAuxiliaryInfo[atomSetIndex]=Clazz.new_($I$(1,1));
if (value == null ) this.atomSetAuxiliaryInfo[atomSetIndex].remove$O(key);
 else this.atomSetAuxiliaryInfo[atomSetIndex].put$O$O(key, value);
});

Clazz.newMeth(C$, 'getAtomSetNumber$I', function (atomSetIndex) {
return this.atomSetNumbers[atomSetIndex >= this.atomSetCount ? 0 : atomSetIndex];
});

Clazz.newMeth(C$, 'getAtomSetName$I', function (atomSetIndex) {
if (this.trajectoryNames != null  && atomSetIndex < this.trajectoryNames.size$() ) return this.trajectoryNames.get$I(atomSetIndex);
if (atomSetIndex >= this.atomSetCount) atomSetIndex=this.atomSetCount - 1;
return this.getAtomSetAuxiliaryInfoValue$I$S(atomSetIndex, "name");
});

Clazz.newMeth(C$, 'getAtomSetAuxiliaryInfo$I', function (atomSetIndex) {
var i=(atomSetIndex >= this.atomSetCount ? this.atomSetCount - 1 : atomSetIndex);
return (i < 0 ? null : this.atomSetAuxiliaryInfo[i]);
});

Clazz.newMeth(C$, 'setAtomSetEnergy$S$F', function (energyString, value) {
if (this.iSet < 0) return;
(function(a,f){return f.apply(null,a)})(["Energy for model " + (this.iSet + 1) + " = " + energyString ],$I$(14).info$S);
this.setCurrentModelInfo$S$O("EnergyString", energyString);
this.setCurrentModelInfo$S$O("Energy", Float.valueOf$F(value));
this.setAtomSetModelProperty$S$S("Energy", "" + new Float(value).toString());
});

Clazz.newMeth(C$, 'setAtomSetFrequency$I$S$S$S$S', function (mode, pathKey, label, freq, units) {
this.setAtomSetModelProperty$S$S("FreqValue", freq);
freq += " " + (units == null  ? "cm^-1" : units);
var name=(label == null  ? "" : label + " ") + freq;
this.setAtomSetName$S(name);
this.setAtomSetModelProperty$S$S("Frequency", freq);
this.setAtomSetModelProperty$S$S("Mode", "" + mode);
this.setModelInfoForSet$S$O$I("vibrationalMode", Integer.valueOf$I(mode), this.iSet);
if (label != null ) this.setAtomSetModelProperty$S$S("FrequencyLabel", label);
this.setAtomSetModelProperty$S$S(".PATH", (pathKey == null  ? "" : pathKey + $I$(7).PATH_SEPARATOR + "Frequencies" ) + "Frequencies");
return name;
});

Clazz.newMeth(C$, 'getBondList$', function () {
var info=Clazz.array(String, [this.bondCount, null]);
for (var i=0; i < this.bondCount; i++) {
info[i]=Clazz.array(String, -1, [this.atoms[this.bonds[i].atomIndex1].atomName, this.atoms[this.bonds[i].atomIndex2].atomName, "" + this.bonds[i].order]);
}
return info;
});

Clazz.newMeth(C$, 'centralize$', function () {
var pt=Clazz.new_($I$(9,1));
for (var i=0; i < this.atomSetCount; i++) {
var n=this.atomSetAtomCounts[i];
var atom0=this.atomSetAtomIndexes[i];
pt.set$F$F$F(0, 0, 0);
for (var j=atom0 + n; --j >= atom0; ) pt.add$javajs_util_T3(this.atoms[j]);

pt.scale$F(1.0 / n);
for (var j=atom0 + n; --j >= atom0; ) this.atoms[j].sub$javajs_util_T3(pt);

}
});

Clazz.newMeth(C$, 'mergeTrajectories$org_jmol_adapter_smarter_AtomSetCollection', function (a) {
if (!this.isTrajectory || !a.isTrajectory || this.vibrationSteps != null   ) return;
for (var i=0; i < a.trajectoryStepCount; i++) this.trajectorySteps.add$I$O(this.trajectoryStepCount++, a.trajectorySteps.get$I(i));

this.setInfo$S$O("trajectorySteps", this.trajectorySteps);
this.setInfo$S$O("ignoreUnitCell", a.atomSetInfo.get$O("ignoreUnitCell"));
});

Clazz.newMeth(C$, 'removeAtomSet$I', function (imodel) {
if (this.bsAtoms == null ) this.bsAtoms=$I$(16).newBitSet2$I$I(0, this.ac);
var i0=this.atomSetAtomIndexes[imodel];
var nAtoms=this.atomSetAtomCounts[imodel];
var i1=i0 + nAtoms;
this.bsAtoms.clearBits$I$I(i0, i1);
for (var i=i1; i < this.ac; i++) this.atoms[i].atomSetIndex--;

for (var i=imodel + 1; i < this.atomSetCount; i++) {
this.atomSetAuxiliaryInfo[i - 1]=this.atomSetAuxiliaryInfo[i];
this.atomSetAtomIndexes[i - 1]=this.atomSetAtomIndexes[i];
this.atomSetBondCounts[i - 1]=this.atomSetBondCounts[i];
this.atomSetAtomCounts[i - 1]=this.atomSetAtomCounts[i];
this.atomSetNumbers[i - 1]=this.atomSetNumbers[i];
}
for (var i=0; i < this.bondCount; i++) this.bonds[i].atomSetIndex=this.atoms[this.bonds[i].atomIndex1].atomSetIndex;

this.atomSetAuxiliaryInfo[--this.atomSetCount]=null;
var n=0;
for (var i=0; i < this.structureCount; i++) {
var s=this.structures[i];
if (s.modelStartEnd[0] == imodel && s.modelStartEnd[1] == imodel ) {
this.structures[i]=null;
n++;
}}
if (n > 0) {
var ss=Clazz.array($I$(4), [this.structureCount - n]);
for (var i=0, pt=0; i < this.structureCount; i++) if (this.structures[i] != null ) ss[pt++]=this.structures[i];

this.structures=ss;
}});

Clazz.newMeth(C$, 'removeLastUnselectedAtoms$', function () {
var n=this.ac;
var nremoved=0;
var i0=this.getLastAtomSetAtomIndex$();
var nnow=0;
for (var i=i0; i < n; i++) {
if (!this.bsAtoms.get$I(i)) {
nremoved++;
this.ac--;
this.atoms[i]=null;
continue;
}if (nremoved > 0) {
this.atoms[this.atoms[i].index=i - nremoved]=this.atoms[i];
this.atoms[i]=null;
}nnow++;
}
this.atomSetAtomCounts[this.iSet]=nnow;
if (nnow == 0) {
this.iSet--;
this.atomSetCount--;
} else {
this.bsAtoms.setBits$I$I(i0, i0 + nnow);
}});

Clazz.newMeth(C$, 'checkNoEmptyModel$', function () {
while (this.atomSetCount > 0 && this.atomSetAtomCounts[this.atomSetCount - 1] == 0 )this.atomSetCount--;

});

C$.$static$=function(){C$.$static$=0;
C$.globalBooleans=Clazz.array(String, -1, ["someModelsHaveFractionalCoordinates", "someModelsHaveSymmetry", "someModelsHaveUnitcells", "someModelsHaveCONECT", "isPDB", "someModelsHaveDomains", "someModelsHaveValidations"]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:03 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
