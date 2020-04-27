(function(){var P$=Clazz.newPackage("org.jmol.modelset"),p$1={},I$=[[0,'javajs.util.BS','org.jmol.c.STR','org.jmol.util.Logger','javajs.util.Quat','org.jmol.util.Escape','org.jmol.util.BSUtil','java.util.Hashtable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Group", null, null, 'org.jmol.modelset.Structure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.firstAtomIndex=-1;
this.leadAtomIndex=-1;
},1);

C$.$fields$=[['C',['group1'],'I',['groupIndex','firstAtomIndex','leadAtomIndex','lastAtomIndex','seqcode','selectedIndex','shapeVisibilityFlags'],'H',['groupID'],'O',['chain','org.jmol.modelset.Chain','bsAdded','javajs.util.BS','dssrNT','java.util.Map']]
,['S',['standardGroupList'],'O',['group3Names','String[]','+specialAtomNames']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setGroup$org_jmol_modelset_Chain$S$I$I$I', function (chain, group3, seqcode, firstAtomIndex, lastAtomIndex) {
this.chain=chain;
this.seqcode=seqcode;
this.firstAtomIndex=firstAtomIndex;
this.lastAtomIndex=lastAtomIndex;
if (group3 != null  && group3.length$() > 0 ) this.setGroupID$S(group3);
return this;
});

Clazz.newMeth(C$, 'setGroupID$S', function (group3) {
});

Clazz.newMeth(C$, 'isAdded$I', function (atomIndex) {
return this.bsAdded != null  && this.bsAdded.get$I(atomIndex) ;
});

Clazz.newMeth(C$, 'addAtoms$I', function (atomIndex) {
if (this.bsAdded == null ) this.bsAdded=Clazz.new_($I$(1,1));
this.bsAdded.set$I(atomIndex);
});

Clazz.newMeth(C$, 'setAtomBits$javajs_util_BS', function (bs) {
bs.setBits$I$I(this.firstAtomIndex, this.lastAtomIndex + 1);
if (this.bsAdded != null ) bs.or$javajs_util_BS(this.bsAdded);
});

Clazz.newMeth(C$, 'setAtomBitsAndClear$javajs_util_BS$javajs_util_BS', function (bs, bsOut) {
bs.setBits$I$I(this.firstAtomIndex, this.lastAtomIndex + 1);
bsOut.clearBits$I$I(this.firstAtomIndex, this.lastAtomIndex + 1);
if (this.bsAdded != null ) {
bs.or$javajs_util_BS(this.bsAdded);
bsOut.andNot$javajs_util_BS(this.bsAdded);
}});

Clazz.newMeth(C$, 'isSelected$javajs_util_BS', function (bs) {
var pt=bs.nextSetBit$I(this.firstAtomIndex);
return (pt >= 0 && pt <= this.lastAtomIndex  || this.bsAdded != null  && this.bsAdded.intersects$javajs_util_BS(bs)  );
});

Clazz.newMeth(C$, 'setShapeVisibility$I$Z', function (visFlag, isVisible) {
if (isVisible) {
this.shapeVisibilityFlags|=visFlag;
} else {
this.shapeVisibilityFlags&=~visFlag;
}});

Clazz.newMeth(C$, 'getGroup3$', function () {
return (this.groupID < 1 ? "" : C$.group3Names[this.groupID]);
});

Clazz.newMeth(C$, 'getGroup1$', function () {
return (this.group1 == "\u0000" ? "?" : this.group1);
});

Clazz.newMeth(C$, 'getBioPolymerLength$', function () {
return 0;
});

Clazz.newMeth(C$, 'getMonomerIndex$', function () {
return -1;
});

Clazz.newMeth(C$, 'getStructure$', function () {
return null;
});

Clazz.newMeth(C$, 'getStrucNo$', function () {
return 0;
});

Clazz.newMeth(C$, 'getProteinStructureType$', function () {
return $I$(2).NOT;
});

Clazz.newMeth(C$, 'getProteinStructureSubType$', function () {
return this.getProteinStructureType$();
});

Clazz.newMeth(C$, 'setProteinStructureType$org_jmol_c_STR$I', function (type, monomerIndexCurrent) {
return -1;
});

Clazz.newMeth(C$, 'isProtein$', function () {
return (this.groupID >= 1 && this.groupID < 24 );
});

Clazz.newMeth(C$, 'isNucleic$', function () {
return (this.groupID >= 24 && this.groupID < 42 );
});

Clazz.newMeth(C$, 'isDna$', function () {
return this.isDnaByID$();
});

Clazz.newMeth(C$, 'isRna$', function () {
return this.isRnaByID$();
});

Clazz.newMeth(C$, 'isPurine$', function () {
return this.isPurineByID$();
});

Clazz.newMeth(C$, 'isPurineByID$', function () {
return (this.isNucleic$() && ((153957 & (1 << (this.groupID - 24))) != 0)  || "AGag".indexOf$I(this.getGroup1$()) >= 0 );
});

Clazz.newMeth(C$, 'isPyrimidine$', function () {
return this.isPyrimidineByID$();
});

Clazz.newMeth(C$, 'isPyrimidineByID$', function () {
return (this.isNucleic$() && (108186 & (1 << (this.groupID - 24))) != 0 );
});

Clazz.newMeth(C$, 'isRnaByID$', function () {
return (this.isNucleic$() && (196663 & (1 << (this.groupID - 24))) != 0 );
});

Clazz.newMeth(C$, 'isDnaByID$', function () {
return (this.isNucleic$() && (65480 & (1 << (this.groupID - 24))) != 0 );
});

Clazz.newMeth(C$, 'isCarbohydrate$', function () {
return false;
});

Clazz.newMeth(C$, 'getResno$', function () {
return (this.seqcode == -2147483648 ? 0 : this.seqcode >> 8);
});

Clazz.newMeth(C$, 'setResno$I', function (i) {
this.seqcode=C$.getSeqcodeFor$I$C(i, this.getInsertionCode$());
});

Clazz.newMeth(C$, 'getSeqNumberFor$I', function (seqcode) {
return (C$.haveSequenceNumber$I(seqcode) ? seqcode >> 8 : 2147483647);
}, 1);

Clazz.newMeth(C$, 'haveSequenceNumber$I', function (seqcode) {
return ((seqcode & 128) != 0);
}, 1);

Clazz.newMeth(C$, 'getSeqcodeString$', function () {
return C$.getSeqcodeStringFor$I(this.seqcode);
});

Clazz.newMeth(C$, 'getSeqcodeFor$I$C', function (seqNo, insCode) {
if (seqNo == -2147483648) return seqNo;
if (!((insCode >= "A" && insCode <= "Z" ) || (insCode >= "a" && insCode <= "z" ) || (insCode >= "0" && insCode <= "9" ) || insCode == "?"   || insCode == "*" )) {
if (insCode != " " && insCode != "\u0000" ) $I$(3).warn$S("unrecognized insertionCode:" + insCode);
insCode="\u0000";
}return ((seqNo == 2147483647 ? 0 : (seqNo << 8) | 128)) + insCode.$c();
}, 1);

Clazz.newMeth(C$, 'getSeqcodeStringFor$I', function (seqcode) {
if (seqcode == -2147483648) return null;
var s="" + (seqcode >> 8);
if ((seqcode & 127) != 0) s += "^" + String.fromCharCode((seqcode & 127));
return s;
}, 1);

Clazz.newMeth(C$, 'getInsertionCode$', function () {
return (this.seqcode == -2147483648 ? "\u0000" : String.fromCharCode((this.seqcode & 127)));
});

Clazz.newMeth(C$, 'getInsCode$', function () {
return (this.seqcode & 127);
});

Clazz.newMeth(C$, 'getInsertionCodeFor$I', function (seqcode) {
return (seqcode & 127);
}, 1);

Clazz.newMeth(C$, 'getInsertionCodeChar$I', function (seqcode) {
return (seqcode == -2147483648 ? "\u0000" : String.fromCharCode((seqcode & 127)));
}, 1);

Clazz.newMeth(C$, 'scaleToScreen$I$I', function (Z, mar) {
return this.chain.model.ms.vwr.tm.scaleToScreen$I$I(Z, mar);
});

Clazz.newMeth(C$, 'isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom', function (atom, x, y, radius, champ) {
return this.chain.model.ms.isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom(atom, x, y, radius, champ);
});

Clazz.newMeth(C$, 'getModel$', function () {
return this.chain.model;
});

Clazz.newMeth(C$, 'getSelectedMonomerCount$', function () {
return 0;
});

Clazz.newMeth(C$, 'getSelectedMonomerIndex$', function () {
return -1;
});

Clazz.newMeth(C$, 'isLeadAtom$I', function (atomIndex) {
return false;
});

Clazz.newMeth(C$, 'getLeadAtomOr$org_jmol_modelset_Atom', function (atom) {
var a=this.getLeadAtom$();
return (a == null  ? atom : a);
});

Clazz.newMeth(C$, 'getLeadAtom$', function () {
return null;
});

Clazz.newMeth(C$, 'getQuaternion$C', function (qType) {
return null;
});

Clazz.newMeth(C$, 'getQuaternionFrame$org_jmol_modelset_AtomA', function (atoms) {
if (this.lastAtomIndex - this.firstAtomIndex < 3) return null;
var pt=this.firstAtomIndex;
return $I$(4).getQuaternionFrame$javajs_util_P3$javajs_util_T3$javajs_util_T3(atoms[pt], atoms[++pt], atoms[++pt]);
});

Clazz.newMeth(C$, 'setStrucNo$I', function (i) {
});

Clazz.newMeth(C$, 'getHelixData$I$C$I', function (tokType, qType, mStep) {
return $I$(5).escapeHelical$S$I$javajs_util_P3$javajs_util_P3$javajs_util_T3A(null, tokType, null, null, null);
});

Clazz.newMeth(C$, 'isWithinStructure$org_jmol_c_STR', function (type) {
return false;
});

Clazz.newMeth(C$, 'getProteinStructureTag$', function () {
return null;
});

Clazz.newMeth(C$, 'getStructureId$', function () {
return "";
});

Clazz.newMeth(C$, 'getBioPolymerIndexInModel$', function () {
return -1;
});

Clazz.newMeth(C$, 'isCrossLinked$org_jmol_modelset_Group', function (g) {
return false;
});

Clazz.newMeth(C$, 'getCrossLinkVector$javajs_util_Lst$Z$Z', function (vReturn, crosslinkCovalent, crosslinkHBond) {
return false;
});

Clazz.newMeth(C$, 'isConnectedPrevious$', function () {
return false;
});

Clazz.newMeth(C$, 'getNitrogenAtom$', function () {
return null;
});

Clazz.newMeth(C$, 'getCarbonylOxygenAtom$', function () {
return null;
});

Clazz.newMeth(C$, 'fixIndices$I$javajs_util_BS', function (atomsDeleted, bsDeleted) {
this.firstAtomIndex-=atomsDeleted;
this.leadAtomIndex-=atomsDeleted;
this.lastAtomIndex-=atomsDeleted;
if (this.bsAdded != null ) $I$(6).deleteBits$javajs_util_BS$javajs_util_BS(this.bsAdded, bsDeleted);
});

Clazz.newMeth(C$, 'getGroupInfo$I$javajs_util_P3', function (igroup, ptTemp) {
var infoGroup=Clazz.new_($I$(7,1));
infoGroup.put$O$O("groupIndex", Integer.valueOf$I(igroup));
infoGroup.put$O$O("groupID", Short.valueOf$H(this.groupID));
var s=this.getSeqcodeString$();
if (s != null ) infoGroup.put$O$O("seqCode", s);
infoGroup.put$O$O("_apt1", Integer.valueOf$I(this.firstAtomIndex));
infoGroup.put$O$O("_apt2", Integer.valueOf$I(this.lastAtomIndex));
if (this.bsAdded != null ) infoGroup.put$O$O("addedAtoms", this.bsAdded);
infoGroup.put$O$O("atomInfo1", this.chain.model.ms.getAtomInfo$I$S$javajs_util_P3(this.firstAtomIndex, null, ptTemp));
infoGroup.put$O$O("atomInfo2", this.chain.model.ms.getAtomInfo$I$S$javajs_util_P3(this.lastAtomIndex, null, ptTemp));
infoGroup.put$O$O("visibilityFlags", Integer.valueOf$I(this.shapeVisibilityFlags));
return infoGroup;
});

Clazz.newMeth(C$, 'getMinZ$org_jmol_modelset_AtomA$IA', function (atoms, minZ) {
minZ[0]=2147483647;
for (var i=this.firstAtomIndex; i <= this.lastAtomIndex; i++) p$1.checkMinZ$org_jmol_modelset_Atom$IA.apply(this, [atoms[i], minZ]);

if (this.bsAdded != null ) for (var i=this.bsAdded.nextSetBit$I(0); i >= 0; i=this.bsAdded.nextSetBit$I(i + 1)) p$1.checkMinZ$org_jmol_modelset_Atom$IA.apply(this, [atoms[i], minZ]);

});

Clazz.newMeth(C$, 'checkMinZ$org_jmol_modelset_Atom$IA', function (atom, minZ) {
var z=atom.sZ - ($s$[0] = atom.sD/2, $s$[0]) - 2;
if (z < minZ[0]) minZ[0]=Math.max(1, z);
}, p$1);

Clazz.newMeth(C$, 'getGroupParameter$I', function (tok) {
return NaN;
});

Clazz.newMeth(C$, 'getAtomIndex$S$I', function (name, offset) {
return -1;
});

Clazz.newMeth(C$, 'getBSSideChain$', function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'toString', function () {
return "[" + this.getGroup3$() + "-" + this.getSeqcodeString$() + "]" ;
});

Clazz.newMeth(C$, 'isNucleicMonomer$', function () {
return false;
});

C$.$static$=function(){C$.$static$=0;
C$.group3Names=Clazz.array(String, [128]);
};
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:12 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
