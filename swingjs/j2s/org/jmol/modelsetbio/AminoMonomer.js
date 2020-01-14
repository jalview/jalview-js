(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.P3','org.jmol.util.Logger','org.jmol.util.Escape','javajs.util.M3','javajs.util.A4','javajs.util.Quat','javajs.util.PT','org.jmol.c.STR','javajs.util.BS']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AminoMonomer", null, 'org.jmol.modelsetbio.AlphaMonomer');
C$.interestingAminoAtomIDs=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.interestingAminoAtomIDs=Clazz.array(Byte.TYPE, -1, [2, ~4, 1, 3, ~64]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.nhChecked=false;
this.ptTemp=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.nhChecked=false;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
}, 1);

Clazz.newMeth(C$, 'validateAndAllocate$org_jmol_modelset_Chain$S$I$I$I$IA$org_jmol_modelset_AtomA', function (chain, group3, seqcode, firstAtomIndex, lastAtomIndex, specialAtomIndexes, atoms) {
var offsets=P$.Monomer.scanForOffsets$I$IA$BA(firstAtomIndex, specialAtomIndexes, C$.interestingAminoAtomIDs);
if (offsets == null ) return null;
P$.Monomer.checkOptional$BA$B$I$I(offsets, ($b$[0] = 1, $b$[0]), firstAtomIndex, specialAtomIndexes[5]);
if (atoms[firstAtomIndex].isHetero$() && !C$.isBondedCorrectly$I$BA$org_jmol_modelset_AtomA(firstAtomIndex, offsets, atoms) ) return null;
return Clazz.new_(C$).set2$org_jmol_modelset_Chain$S$I$I$I$BA(chain, group3, seqcode, firstAtomIndex, lastAtomIndex, offsets);
}, 1);

Clazz.newMeth(C$, 'isBondedCorrectlyRange$I$I$I$BA$org_jmol_modelset_AtomA', function (offset1, offset2, firstAtomIndex, offsets, atoms) {
var atomIndex1=firstAtomIndex + (offsets[offset1] & 255);
var atomIndex2=firstAtomIndex + (offsets[offset2] & 255);
return (atomIndex1 != atomIndex2 && atoms[atomIndex1].isBonded$org_jmol_modelset_Atom(atoms[atomIndex2]) );
}, 1);

Clazz.newMeth(C$, 'isBondedCorrectly$I$BA$org_jmol_modelset_AtomA', function (firstAtomIndex, offsets, atoms) {
return (C$.isBondedCorrectlyRange$I$I$I$BA$org_jmol_modelset_AtomA(2, 0, firstAtomIndex, offsets, atoms) && C$.isBondedCorrectlyRange$I$I$I$BA$org_jmol_modelset_AtomA(0, 3, firstAtomIndex, offsets, atoms) && (!P$.Monomer.have$BA$B(offsets, ($b$[0] = 1, $b$[0])) || C$.isBondedCorrectlyRange$I$I$I$BA$org_jmol_modelset_AtomA(3, 1, firstAtomIndex, offsets, atoms) )  );
}, 1);

Clazz.newMeth(C$, 'isAminoMonomer$', function () {
return true;
});

Clazz.newMeth(C$, 'getNitrogenAtom$', function () {
return this.getAtomFromOffsetIndex$I(2);
});

Clazz.newMeth(C$, 'getCarbonylCarbonAtom$', function () {
return this.getAtomFromOffsetIndex$I(3);
});

Clazz.newMeth(C$, 'getCarbonylOxygenAtom$', function () {
return this.getWingAtom$();
});

Clazz.newMeth(C$, 'getInitiatorAtom$', function () {
return this.getNitrogenAtom$();
});

Clazz.newMeth(C$, 'getTerminatorAtom$', function () {
return this.getAtomFromOffsetIndex$I(P$.Monomer.have$BA$B(this.offsets, ($b$[0] = 4, $b$[0])) ? ($b$[0] = 4, $b$[0]) : ($b$[0] = 3, $b$[0]));
});

Clazz.newMeth(C$, 'hasOAtom$', function () {
return P$.Monomer.have$BA$B(this.offsets, ($b$[0] = 1, $b$[0]));
});

Clazz.newMeth(C$, 'isConnectedAfter$org_jmol_modelsetbio_Monomer', function (possiblyPreviousMonomer) {
if (possiblyPreviousMonomer == null ) return true;
var other=possiblyPreviousMonomer;
return other.getCarbonylCarbonAtom$().isBonded$org_jmol_modelset_Atom(this.getNitrogenAtom$());
});

Clazz.newMeth(C$, 'findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$H$H', function (x, y, closest, madBegin, madEnd) {
var competitor=closest[0];
var nitrogen=this.getNitrogenAtom$();
var marBegin=($s$[0] = ((madBegin/2|0)), $s$[0]);
if (marBegin < 1200) marBegin=($s$[0] = 1200, $s$[0]);
if (nitrogen.sZ == 0) return;
var radiusBegin=(this.scaleToScreen$I$I(nitrogen.sZ, marBegin)|0);
if (radiusBegin < 4) radiusBegin=4;
var ccarbon=this.getCarbonylCarbonAtom$();
var marEnd=($s$[0] = ((madEnd/2|0)), $s$[0]);
if (marEnd < 1200) marEnd=($s$[0] = 1200, $s$[0]);
var radiusEnd=(this.scaleToScreen$I$I(nitrogen.sZ, marEnd)|0);
if (radiusEnd < 4) radiusEnd=4;
var alpha=this.getLeadAtom$();
if (this.isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom(alpha, x, y, ((radiusBegin + radiusEnd)/2|0), competitor) || this.isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom(nitrogen, x, y, radiusBegin, competitor) || this.isCursorOnTopOf$org_jmol_modelset_Atom$I$I$I$org_jmol_modelset_Atom(ccarbon, x, y, radiusEnd, competitor)  ) closest[0]=alpha;
});

Clazz.newMeth(C$, 'resetHydrogenPoint$', function () {
this.nhChecked=false;
this.nitrogenHydrogenPoint=null;
});

Clazz.newMeth(C$, 'getNitrogenHydrogenPoint$', function () {
if (this.nitrogenHydrogenPoint == null  && !this.nhChecked ) {
this.nhChecked=true;
this.nitrogenHydrogenPoint=this.getExplicitNH$();
}return this.nitrogenHydrogenPoint;
});

Clazz.newMeth(C$, 'getExplicitNH$', function () {
var nitrogen=this.getNitrogenAtom$();
var h=null;
var bonds=nitrogen.bonds;
if (bonds != null ) for (var i=0; i < bonds.length; i++) if ((h=bonds[i].getOtherAtom$org_jmol_modelset_Atom(nitrogen)).getElementNumber$() == 1) return h;

return null;
});

Clazz.newMeth(C$, 'getNHPoint$javajs_util_P3$javajs_util_V3$Z$Z', function (aminoHydrogenPoint, vNH, jmolHPoint, dsspIgnoreHydrogens) {
if (this.monomerIndex <= 0 || this.groupID == 15 ) return false;
var nitrogenPoint=this.getNitrogenAtom$();
var nhPoint=this.getNitrogenHydrogenPoint$();
if (nhPoint != null  && !dsspIgnoreHydrogens ) {
vNH.sub2$javajs_util_T3$javajs_util_T3(nhPoint, nitrogenPoint);
aminoHydrogenPoint.setT$javajs_util_T3(nhPoint);
return true;
}var prev=this.bioPolymer.monomers[this.monomerIndex - 1];
if (jmolHPoint) {
vNH.sub2$javajs_util_T3$javajs_util_T3(nitrogenPoint, this.getLeadAtom$());
vNH.normalize$();
var v=$I$(1).newVsub$javajs_util_T3$javajs_util_T3(nitrogenPoint, prev.getCarbonylCarbonAtom$());
v.normalize$();
vNH.add$javajs_util_T3(v);
} else {
var oxygen=prev.getCarbonylOxygenAtom$();
if (oxygen == null ) return false;
vNH.sub2$javajs_util_T3$javajs_util_T3(prev.getCarbonylCarbonAtom$(), oxygen);
}vNH.normalize$();
aminoHydrogenPoint.add2$javajs_util_T3$javajs_util_T3(nitrogenPoint, vNH);
this.nitrogenHydrogenPoint=$I$(2).newP$javajs_util_T3(aminoHydrogenPoint);
if ($I$(3).debugging) $I$(3).debug$S("draw ID \"pta" + this.monomerIndex + "_" + nitrogenPoint.i + "\" " + $I$(4).eP$javajs_util_T3(nitrogenPoint) + $I$(4).eP$javajs_util_T3(aminoHydrogenPoint) + " # " + nitrogenPoint );
return true;
});

Clazz.newMeth(C$, 'getQuaternionFrameCenter$C', function (qType) {
if (this.monomerIndex < 0) return null;
switch (qType.$c()) {
default:
case 97:
case 98:
case 99:
case 67:
return this.getQuaternionFrameCenterAlpha$C(qType);
case 110:
return this.getNitrogenAtom$();
case 112:
case 80:
return this.getCarbonylCarbonAtom$();
case 113:
if (this.monomerIndex == this.bioPolymer.monomerCount - 1) return null;
var mNext=(this.bioPolymer.monomers[this.monomerIndex + 1]);
var pt=Clazz.new_($I$(2));
pt.ave$javajs_util_T3$javajs_util_T3(this.getCarbonylCarbonAtom$(), mNext.getNitrogenAtom$());
return pt;
}
});

Clazz.newMeth(C$, 'getQuaternion$C', function (qType) {
if (this.monomerIndex < 0) return null;
var ptC=this.getCarbonylCarbonAtom$();
var ptCa=this.getLeadAtom$();
var vA=Clazz.new_($I$(1));
var vB=Clazz.new_($I$(1));
var vC=null;
switch (qType.$c()) {
case 97:
case 110:
if (this.monomerIndex == 0 || this.groupID == 15 ) return null;
vC=Clazz.new_($I$(1));
if (this.ptTemp == null ) this.ptTemp=Clazz.new_($I$(2));
this.getNHPoint$javajs_util_P3$javajs_util_V3$Z$Z(this.ptTemp, vC, true, false);
vB.sub2$javajs_util_T3$javajs_util_T3(ptCa, this.getNitrogenAtom$());
vB.cross$javajs_util_T3$javajs_util_T3(vC, vB);
Clazz.new_($I$(5)).setAA$javajs_util_A4($I$(6).newVA$javajs_util_V3$F(vB, -0.29670596)).rotate$javajs_util_T3(vC);
vA.cross$javajs_util_T3$javajs_util_T3(vB, vC);
break;
case 98:
return this.getQuaternionAlpha$C("b");
case 99:
vA.sub2$javajs_util_T3$javajs_util_T3(ptC, ptCa);
vB.sub2$javajs_util_T3$javajs_util_T3(this.getNitrogenAtom$(), ptCa);
break;
case 112:
case 120:
if (this.monomerIndex == this.bioPolymer.monomerCount - 1) return null;
vA.sub2$javajs_util_T3$javajs_util_T3(ptCa, ptC);
vB.sub2$javajs_util_T3$javajs_util_T3((this.bioPolymer.monomers[this.monomerIndex + 1]).getNitrogenAtom$(), ptC);
break;
case 113:
if (this.monomerIndex == this.bioPolymer.monomerCount - 1) return null;
var mNext=(this.bioPolymer.monomers[this.monomerIndex + 1]);
vB.sub2$javajs_util_T3$javajs_util_T3(mNext.getLeadAtom$(), mNext.getNitrogenAtom$());
vA.sub2$javajs_util_T3$javajs_util_T3(ptCa, ptC);
break;
default:
return null;
}
return $I$(7).getQuaternionFrameV$javajs_util_V3$javajs_util_V3$javajs_util_V3$Z(vA, vB, vC, false);
});

Clazz.newMeth(C$, 'getStructureId$', function () {
if (this.proteinStructure == null  || this.proteinStructure.structureID == null  ) return "";
return this.proteinStructure.structureID;
});

Clazz.newMeth(C$, 'getProteinStructureTag$', function () {
if (this.proteinStructure == null  || this.proteinStructure.structureID == null  ) return null;
var tag="%3N %3ID";
tag=$I$(8).formatStringI$S$S$I(tag, "N", this.proteinStructure.serialID);
tag=$I$(8).formatStringS$S$S$S(tag, "ID", this.proteinStructure.structureID);
if (this.proteinStructure.type === $I$(9).SHEET ) tag += $I$(8).formatStringI$S$S$I("%2SC", "SC", this.proteinStructure.strandCount);
return tag;
});

Clazz.newMeth(C$, 'getBSSideChain$', function () {
var bs=Clazz.new_($I$(10));
this.setAtomBits$javajs_util_BS(bs);
p$1.clear$javajs_util_BS$org_jmol_modelset_Atom$Z.apply(this, [bs, this.getLeadAtom$(), true]);
p$1.clear$javajs_util_BS$org_jmol_modelset_Atom$Z.apply(this, [bs, this.getCarbonylCarbonAtom$(), false]);
p$1.clear$javajs_util_BS$org_jmol_modelset_Atom$Z.apply(this, [bs, this.getCarbonylOxygenAtom$(), false]);
p$1.clear$javajs_util_BS$org_jmol_modelset_Atom$Z.apply(this, [bs, this.getNitrogenAtom$(), true]);
return bs;
});

Clazz.newMeth(C$, 'clear$javajs_util_BS$org_jmol_modelset_Atom$Z', function (bs, a, andH) {
if (a == null ) return;
bs.clear$I(a.i);
if (!andH) return;
var b=a.bonds;
var h;
for (var j=b.length; --j >= 0; ) if ((h=b[j].getOtherAtom$org_jmol_modelset_Atom(a)).getElementNumber$() == 1) bs.clear$I(h.i);

}, p$1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:12 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
