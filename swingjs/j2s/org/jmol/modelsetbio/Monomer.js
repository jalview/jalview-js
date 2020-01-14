(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),I$=[[0,'org.jmol.util.Logger','org.jmol.c.STR','javajs.util.Quat','org.jmol.viewer.JC','javajs.util.P3','org.jmol.util.Escape','javajs.util.Measure','org.jmol.modelsetbio.BioResolver']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Monomer", null, 'org.jmol.modelset.Group');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.bioPolymer=null;
this.offsets=null;
this.monomerIndex=0;
this.phi=0;
this.psi=0;
this.omega=0;
this.straightness=0;
this.mu=0;
this.theta=0;
this.backboneBlockVis=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.monomerIndex=-1;
this.phi=NaN;
this.psi=NaN;
this.omega=NaN;
this.straightness=NaN;
this.mu=NaN;
this.theta=NaN;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'have$BA$B', function (offsets, n) {
return (offsets[n] & 255) != 255;
}, 1);

Clazz.newMeth(C$, 'set2$org_jmol_modelset_Chain$S$I$I$I$BA', function (chain, group3, seqcode, firstAtomIndex, lastAtomIndex, interestingAtomOffsets) {
this.setGroup$org_jmol_modelset_Chain$S$I$I$I(chain, group3, seqcode, firstAtomIndex, lastAtomIndex);
this.offsets=interestingAtomOffsets;
this.setLeadAtomIndex$();
return this;
});

Clazz.newMeth(C$, 'setLeadAtomIndex$', function () {
var offset=this.offsets[0] & 255;
if (offset != 255) this.leadAtomIndex=this.firstAtomIndex + offset;
});

Clazz.newMeth(C$, 'setBioPolymer$org_jmol_modelsetbio_BioPolymer$I', function (polymer, index) {
this.bioPolymer=polymer;
this.monomerIndex=index;
});

Clazz.newMeth(C$, 'getSelectedMonomerCount$', function () {
return (this.bioPolymer == null  ? 0 : this.bioPolymer.getSelectedMonomerCount$());
});

Clazz.newMeth(C$, 'getSelectedMonomerIndex$', function () {
return (this.bioPolymer == null  || !this.bioPolymer.isMonomerSelected$I(this.monomerIndex)  ? -1 : this.monomerIndex);
});

Clazz.newMeth(C$, 'getBioPolymerLength$', function () {
return (this.bioPolymer == null  ? 0 : this.bioPolymer.monomerCount);
});

Clazz.newMeth(C$, 'getMonomerIndex$', function () {
return this.monomerIndex;
});

Clazz.newMeth(C$, 'getAtomIndex$S$I', function (name, offset) {
if (this.bioPolymer != null ) {
var groups=this.bioPolymer.monomers;
var ipt=this.monomerIndex + offset;
if (ipt >= 0 && ipt < groups.length ) {
var m=groups[ipt];
if (offset == 1 && !m.isConnectedPrevious$() ) return -1;
if ("\0".equals$O(name)) return m.leadAtomIndex;
var atoms=this.chain.model.ms.at;
for (var i=m.firstAtomIndex; i <= m.lastAtomIndex; i++) if (name == null  || name.equalsIgnoreCase$S(atoms[i].getAtomName$()) ) return i;

}}return -1;
});

Clazz.newMeth(C$, 'getBioPolymerIndexInModel$', function () {
return (this.bioPolymer == null  ? -1 : this.bioPolymer.bioPolymerIndexInModel);
});

Clazz.newMeth(C$, 'scanForOffsets$I$IA$BA', function (firstAtomIndex, specialAtomIndexes, interestingAtomIDs) {
var interestingCount=interestingAtomIDs.length;
var offsets=Clazz.array(Byte.TYPE, [interestingCount]);
for (var i=interestingCount; --i >= 0; ) {
var atomIndex;
var atomID=interestingAtomIDs[i];
if (atomID < 0) {
atomIndex=specialAtomIndexes[~atomID];
} else {
atomIndex=specialAtomIndexes[atomID];
if (atomIndex < 0) return null;
}var offset;
if (atomIndex < 0) offset=255;
 else {
offset=atomIndex - firstAtomIndex;
if (offset < 0 || offset > 254 ) {
$I$(1).warn$S("Monomer.scanForOffsets i=" + i + " atomID=" + atomID + " atomIndex:" + atomIndex + " firstAtomIndex:" + firstAtomIndex + " offset out of 0-254 range. Groups aren't organized correctly. Is this really a protein?: " + offset );
if (atomID < 0) {
offset=255;
} else {
}}}offsets[i]=((offset|0)|0);
}
return offsets;
}, 1);

Clazz.newMeth(C$, 'getProteinStructureType$', function () {
return $I$(2).NONE;
});

Clazz.newMeth(C$, 'isHelix$', function () {
return false;
});

Clazz.newMeth(C$, 'isSheet$', function () {
return false;
});

Clazz.newMeth(C$, 'setStrucNo$I', function (id) {
});

Clazz.newMeth(C$, 'getAtomFromOffsetIndex$I', function (offsetIndex) {
if (offsetIndex > this.offsets.length) return null;
var offset=this.offsets[offsetIndex] & 255;
return (offset == 255 ? null : this.chain.model.ms.at[this.firstAtomIndex + offset]);
});

Clazz.newMeth(C$, 'getSpecialAtom$BA$B', function (interestingIDs, specialAtomID) {
for (var i=interestingIDs.length; --i >= 0; ) {
var interestingID=interestingIDs[i];
if (interestingID < 0) interestingID=-interestingID;
if (specialAtomID == interestingID) {
var offset=this.offsets[i] & 255;
return (offset == 255 ? null : this.chain.model.ms.at[this.firstAtomIndex + offset]);
}}
return null;
});

Clazz.newMeth(C$, 'getSpecialAtomPoint$BA$B', function (interestingIDs, specialAtomID) {
for (var i=interestingIDs.length; --i >= 0; ) {
var interestingID=interestingIDs[i];
if (interestingID < 0) interestingID=-interestingID;
if (specialAtomID == interestingID) {
var offset=this.offsets[i] & 255;
return (offset == 255 ? null : this.chain.model.ms.at[this.firstAtomIndex + offset]);
}}
return null;
});

Clazz.newMeth(C$, 'isLeadAtom$I', function (atomIndex) {
return atomIndex == this.leadAtomIndex;
});

Clazz.newMeth(C$, 'getLeadAtom$', function () {
return this.getAtomFromOffsetIndex$I(0);
});

Clazz.newMeth(C$, 'getWingAtom$', function () {
return this.getAtomFromOffsetIndex$I(1);
});

Clazz.newMeth(C$, 'getInitiatorAtom$', function () {
return this.getLeadAtom$();
});

Clazz.newMeth(C$, 'getTerminatorAtom$', function () {
return this.getLeadAtom$();
});

Clazz.newMeth(C$, 'findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$H$H', function (x, y, closest, madBegin, madEnd) {
});

Clazz.newMeth(C$, 'getMyInfo$javajs_util_P3', function (ptTemp) {
var info=this.getGroupInfo$I$javajs_util_P3(this.groupIndex, ptTemp);
info.put$TK$TV("chain", this.chain.getIDStr$());
var seqNum=this.getResno$();
if (seqNum > 0) info.put$TK$TV("sequenceNumber", Integer.valueOf$I(seqNum));
var insCode=this.getInsertionCode$();
if (insCode.$c() != 0 ) info.put$TK$TV("insertionCode", "" + insCode);
var f=this.getGroupParameter$I(1111490569);
if (!Float.isNaN$F(f)) info.put$TK$TV("phi", Float.valueOf$F(f));
f=this.getGroupParameter$I(1111490570);
if (!Float.isNaN$F(f)) info.put$TK$TV("psi", Float.valueOf$F(f));
f=this.getGroupParameter$I(1111490565);
if (!Float.isNaN$F(f)) info.put$TK$TV("mu", Float.valueOf$F(f));
f=this.getGroupParameter$I(1111490576);
if (!Float.isNaN$F(f)) info.put$TK$TV("theta", Float.valueOf$F(f));
var structure=this.getStructure$();
if (Clazz.instanceOf(structure, "org.jmol.modelsetbio.ProteinStructure")) {
info.put$TK$TV("structureId", Integer.valueOf$I((structure).strucNo));
info.put$TK$TV("structureType", (structure).type.getBioStructureTypeName$Z(false));
}info.put$TK$TV("shapeVisibilityFlags", Integer.valueOf$I(this.shapeVisibilityFlags));
return info;
});

Clazz.newMeth(C$, 'getStructureId$', function () {
var structure=this.getStructure$();
return (Clazz.instanceOf(structure, "org.jmol.modelsetbio.ProteinStructure") ? (structure).type.getBioStructureTypeName$Z(false) : "");
});

Clazz.newMeth(C$, 'updateOffsetsForAlternativeLocations$org_jmol_modelset_AtomA$javajs_util_BS', function (atoms, bsSelected) {
for (var offsetIndex=this.offsets.length; --offsetIndex >= 0; ) {
var offset=this.offsets[offsetIndex] & 255;
if (offset == 255) continue;
var iThis=this.firstAtomIndex + offset;
var atom=atoms[iThis];
var thisID=($b$[0] = atom.atomID, $b$[0]);
if (atom.altloc.$c() == 0 ) continue;
var nScan=this.lastAtomIndex - this.firstAtomIndex;
for (var i=1; i <= nScan; i++) {
var iNew=iThis + i;
if (iNew > this.lastAtomIndex) iNew-=nScan + 1;
var offsetNew=iNew - this.firstAtomIndex;
if (offsetNew < 0 || offsetNew > 255  || iNew == iThis  || !bsSelected.get$I(iNew) ) continue;
var atomID=($b$[0] = atoms[iNew].atomID, $b$[0]);
if (atomID != thisID || atomID == 0 && !atoms[iNew].getAtomName$().equals$O(atom.getAtomName$())  ) continue;
this.offsets[offsetIndex]=((offsetNew|0)|0);
atoms[iNew].nBackbonesDisplayed=atom.nBackbonesDisplayed;
break;
}
}
this.setLeadAtomIndex$();
});

Clazz.newMeth(C$, 'getMonomerSequenceAtoms$javajs_util_BS$javajs_util_BS', function (bsInclude, bsResult) {
this.setAtomBits$javajs_util_BS(bsResult);
bsResult.and$javajs_util_BS(bsInclude);
});

Clazz.newMeth(C$, 'checkOptional$BA$B$I$I', function (offsets, atom, firstAtomIndex, index) {
if (C$.have$BA$B(offsets, ($b$[0] = atom, $b$[0]))) return true;
if (index < 0) return false;
offsets[atom]=(((index - firstAtomIndex)|0)|0);
return true;
}, 1);

Clazz.newMeth(C$, 'getQuaternionFrameCenter$C', function (qtype) {
return null;
});

Clazz.newMeth(C$, 'getHelixData2$I$C$I', function (tokType, qType, mStep) {
if (this.monomerIndex < 0) return null;
var iPrev=this.monomerIndex - mStep;
var prev=(mStep < 1 || this.monomerIndex <= 0  ? null : this.bioPolymer.monomers[iPrev]);
var q2=this.getQuaternion$C(qType);
var q1=(mStep < 1 ? $I$(3).getQuaternionFrameV$javajs_util_V3$javajs_util_V3$javajs_util_V3$Z($I$(4).axisX, $I$(4).axisY, $I$(4).axisZ, false) : prev == null  ? null : prev.getQuaternion$C(qType));
if (q1 == null  || q2 == null  ) return this.getHelixData$I$C$I(tokType, qType, mStep);
var a=(mStep < 1 ? $I$(5).new3$F$F$F(0, 0, 0) : prev.getQuaternionFrameCenter$C(qType));
var b=this.getQuaternionFrameCenter$C(qType);
return (a == null  || b == null   ? this.getHelixData$I$C$I(tokType, qType, mStep) : $I$(6).escapeHelical$S$I$javajs_util_P3$javajs_util_P3$javajs_util_T3A((tokType == 135176 ? "helixaxis" + this.getUniqueID$() : null), tokType, a, b, $I$(7).computeHelicalAxis$javajs_util_P3$javajs_util_P3$javajs_util_Quat(a, b, q2.div$javajs_util_Quat(q1))));
});

Clazz.newMeth(C$, 'getUniqueID$', function () {
var cid=this.chain.chainID;
var a=this.getLeadAtom$();
var id=(a == null  ? "" : "_" + a.mi) + "_" + this.getResno$() + (cid == 0 ? "" : "_" + cid) ;
var aid=(a == null  ? "\u0000" : this.getLeadAtom$().altloc);
if (aid != "\u0000") id += "_" + aid;
return id;
});

Clazz.newMeth(C$, 'isCrossLinked$org_jmol_modelset_Group', function (g) {
for (var i=this.firstAtomIndex; i <= this.lastAtomIndex; i++) if (this.getCrossLinkGroup$I$javajs_util_Lst$org_jmol_modelset_Group$Z$Z$Z(i, null, g, true, true, false)) return true;

return false;
});

Clazz.newMeth(C$, 'getCrossLinkVector$javajs_util_Lst$Z$Z', function (vReturn, crosslinkCovalent, crosslinkHBond) {
var isNotCheck=(vReturn == null );
for (var i=this.firstAtomIndex; i <= this.lastAtomIndex; i++) if (this.getCrossLinkGroup$I$javajs_util_Lst$org_jmol_modelset_Group$Z$Z$Z(i, vReturn, null, crosslinkCovalent, crosslinkHBond, isNotCheck) && isNotCheck ) return true;

return !isNotCheck && vReturn.size$() > 0 ;
});

Clazz.newMeth(C$, 'getCrossLinkGroup$I$javajs_util_Lst$org_jmol_modelset_Group$Z$Z$Z', function (i, vReturn, group, crosslinkCovalent, crosslinkHBond, isNotCheck) {
var atom=this.chain.model.ms.at[i];
var bonds=atom.bonds;
var ibp=this.getBioPolymerIndexInModel$();
if (ibp < 0 || bonds == null  ) return false;
var haveCrossLink=false;
var checkPrevious=(!isNotCheck && vReturn == null   && group == null  );
for (var j=0; j < bonds.length; j++) {
var b=bonds[j];
if (b.isCovalent$() ? !crosslinkCovalent : !crosslinkHBond) continue;
var a=b.getOtherAtom$org_jmol_modelset_Atom(atom);
var g=a.group;
if (group != null  && g !== group  ) continue;
var iPolymer=g.getBioPolymerIndexInModel$();
var igroup=g.getMonomerIndex$();
if (checkPrevious) {
if (iPolymer == ibp && igroup == this.monomerIndex - 1 ) return true;
} else if (iPolymer >= 0 && igroup >= 0  && (iPolymer != ibp || igroup < this.monomerIndex - 1  || igroup > this.monomerIndex + 1 ) ) {
haveCrossLink=true;
if (group != null  || vReturn == null  ) break;
vReturn.addLast$TV(Integer.valueOf$I(i));
vReturn.addLast$TV(Integer.valueOf$I(a.i));
vReturn.addLast$TV(Integer.valueOf$I(g.leadAtomIndex));
}}
return haveCrossLink;
});

Clazz.newMeth(C$, 'isConnectedPrevious$', function () {
return true;
});

Clazz.newMeth(C$, 'setGroupParameter$I$F', function (tok, f) {
switch (tok) {
case 1111490569:
this.phi=f;
break;
case 1111490570:
this.psi=f;
break;
case 1111490568:
this.omega=f;
break;
case 1111490565:
this.mu=f;
break;
case 1111490576:
this.theta=f;
break;
case 1111490574:
this.straightness=f;
break;
}
});

Clazz.newMeth(C$, 'getGroupParameter$I', function (tok) {
if (this.bioPolymer == null ) return 0;
if (!this.bioPolymer.haveParameters) this.bioPolymer.calcParameters$();
switch (tok) {
case 1094713361:
return 1;
case 1111490568:
return this.omega;
case 1111490569:
return this.phi;
case 1111490570:
return this.psi;
case 1111490565:
return this.mu;
case 1111490576:
return this.theta;
case 1111490574:
return this.straightness;
}
return NaN;
});

Clazz.newMeth(C$, 'getGroup1$', function () {
return (this.groupID < $I$(8).predefinedGroup1Names.length ? $I$(8).predefinedGroup1Names[this.groupID] : this.group1.$c() > 1  ? this.group1 : this.group1.$c() == 1  ? "?" : (this.group1=this.getGroup1b$()));
});

Clazz.newMeth(C$, 'getGroup1b$', function () {
return "?";
});

Clazz.newMeth(C$, 'setGroupID$S', function (group3) {
this.groupID=$I$(8).getGroupIdFor$S(group3);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:10 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
