(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'javajs.util.V3','javajs.util.P3','javajs.util.BS']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BioPolymer", null, null, 'org.jmol.modelset.Structure');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type=0;
this.invalidControl=false;
this.unitVectorX=$I$(1).new3$F$F$F(1, 0, 0);
},1);

C$.$fields$=[['Z',['hasStructure','invalidLead','invalidControl','hasWingPoints','twistedSheets','haveParameters'],'F',['sheetSmoothing'],'I',['type','bioPolymerIndexInModel','monomerCount','cyclicFlag','selectedMonomerCount'],'O',['model','org.jmol.modelset.Model','monomers','org.jmol.modelsetbio.Monomer[]','leadMidpoints','javajs.util.P3[]','+leadPoints','+controlPoints','wingVectors','javajs.util.V3[]','leadAtomIndices','int[]','reversed','javajs.util.BS','unitVectorX','javajs.util.V3','bsSelectedMonomers','javajs.util.BS']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$org_jmol_modelsetbio_MonomerA', function (monomers) {
this.monomers=monomers;
this.monomerCount=monomers.length;
for (var i=this.monomerCount; --i >= 0; ) monomers[i].setBioPolymer$org_jmol_modelsetbio_BioPolymer$I(this, i);

this.model=monomers[0].getModel$();
});

Clazz.newMeth(C$, 'setAtomBits$javajs_util_BS', function (bs) {
this.getRange$javajs_util_BS$Z(bs, true);
});

Clazz.newMeth(C$, 'setAtomBitsAndClear$javajs_util_BS$javajs_util_BS', function (bs, bsOut) {
for (var i=this.monomerCount; --i >= 0; ) this.monomers[i].setAtomBitsAndClear$javajs_util_BS$javajs_util_BS(bs, bsOut);

});

Clazz.newMeth(C$, 'getRange$javajs_util_BS$Z', function (bs, isMutated) {
if (this.monomerCount == 0) return;
if (isMutated) {
for (var i=this.monomerCount; --i >= 0; ) this.monomers[i].setAtomBits$javajs_util_BS(bs);

} else {
bs.setBits$I$I(this.monomers[0].firstAtomIndex, this.monomers[this.monomerCount - 1].lastAtomIndex + 1);
}});

Clazz.newMeth(C$, 'clearStructures$', function () {
});

Clazz.newMeth(C$, 'getLeadAtomIndices$', function () {
if (this.leadAtomIndices == null ) {
this.leadAtomIndices=Clazz.array(Integer.TYPE, [this.monomerCount]);
this.invalidLead=true;
}if (this.invalidLead) {
for (var i=this.monomerCount; --i >= 0; ) this.leadAtomIndices[i]=this.monomers[i].leadAtomIndex;

this.invalidLead=false;
}return this.leadAtomIndices;
});

Clazz.newMeth(C$, 'getIndex$I$I$I$I', function (chainID, seqcode, istart, iend) {
var i;
for (i=this.monomerCount; --i >= 0; ) {
var m=this.monomers[i];
if (m.chain.chainID == chainID && m.seqcode == seqcode  && (istart < 0 || istart == m.firstAtomIndex  || iend == m.lastAtomIndex ) ) break;
}
return i;
});

Clazz.newMeth(C$, 'getLeadPoint$I', function (monomerIndex) {
return this.monomers[monomerIndex].getLeadAtom$();
});

Clazz.newMeth(C$, 'getInitiatorPoint', function () {
return this.monomers[0].getInitiatorAtom$();
}, p$1);

Clazz.newMeth(C$, 'getTerminatorPoint', function () {
return this.monomers[this.monomerCount - 1].getTerminatorAtom$();
}, p$1);

Clazz.newMeth(C$, 'getLeadMidPoint$I$javajs_util_P3', function (i, midPoint) {
if (i == this.monomerCount) {
--i;
} else if (i > 0) {
midPoint.ave$javajs_util_T3$javajs_util_T3(this.getLeadPoint$I(i), this.getLeadPoint$I(i - 1));
return;
}midPoint.setT$javajs_util_T3(this.getLeadPoint$I(i));
});

Clazz.newMeth(C$, 'getWingPoint$I', function (polymerIndex) {
return this.monomers[polymerIndex].getWingAtom$();
});

Clazz.newMeth(C$, 'setConformation$javajs_util_BS', function (bsSelected) {
var atoms=this.model.ms.at;
for (var i=this.monomerCount; --i >= 0; ) this.monomers[i].updateOffsetsForAlternativeLocations$org_jmol_modelset_AtomA$javajs_util_BS(atoms, bsSelected);

this.recalculateLeadMidpointsAndWingVectors$();
});

Clazz.newMeth(C$, 'recalculateLeadMidpointsAndWingVectors$', function () {
this.invalidLead=this.invalidControl=true;
this.getLeadAtomIndices$();
this.resetHydrogenPoints$();
p$1.calcLeadMidpointsAndWingVectors.apply(this, []);
});

Clazz.newMeth(C$, 'resetHydrogenPoints$', function () {
});

Clazz.newMeth(C$, 'getLeadMidpoints$', function () {
if (this.leadMidpoints == null ) p$1.calcLeadMidpointsAndWingVectors.apply(this, []);
return this.leadMidpoints;
});

Clazz.newMeth(C$, 'getLeadPoints$', function () {
if (this.leadPoints == null ) p$1.calcLeadMidpointsAndWingVectors.apply(this, []);
return this.leadPoints;
});

Clazz.newMeth(C$, 'getControlPoints$Z$F$Z', function (isTraceAlpha, sheetSmoothing, invalidate) {
if (invalidate) this.invalidControl=true;
return (!isTraceAlpha ? this.leadMidpoints : sheetSmoothing == 0  ? this.leadPoints : p$1.getControlPoints2$F.apply(this, [sheetSmoothing]));
});

Clazz.newMeth(C$, 'getControlPoints2$F', function (sheetSmoothing) {
if (!this.invalidControl && sheetSmoothing == this.sheetSmoothing  ) return this.controlPoints;
this.getLeadPoints$();
var v=Clazz.new_($I$(1,1));
if (this.controlPoints == null ) this.controlPoints=Clazz.array($I$(2), [this.monomerCount + 1]);
if (!Float.isNaN$F(sheetSmoothing)) this.sheetSmoothing=sheetSmoothing;
for (var i=0; i < this.monomerCount; i++) this.controlPoints[i]=this.getControlPoint$I$javajs_util_V3(i, v);

this.controlPoints[this.monomerCount]=p$1.getTerminatorPoint.apply(this, []);
this.invalidControl=false;
return this.controlPoints;
}, p$1);

Clazz.newMeth(C$, 'getControlPoint$I$javajs_util_V3', function (i, v) {
return this.leadPoints[i];
});

Clazz.newMeth(C$, 'getWingVectors$', function () {
if (this.leadMidpoints == null ) p$1.calcLeadMidpointsAndWingVectors.apply(this, []);
return this.wingVectors;
});

Clazz.newMeth(C$, 'calcLeadMidpointsAndWingVectors', function () {
if (this.leadMidpoints == null ) {
this.leadMidpoints=Clazz.array($I$(2), [this.monomerCount + 1]);
this.leadPoints=Clazz.array($I$(2), [this.monomerCount + 1]);
this.wingVectors=Clazz.array($I$(1), [this.monomerCount + 1]);
this.sheetSmoothing=1.4E-45;
}if (this.reversed == null ) this.reversed=$I$(3).newN$I(this.monomerCount);
 else this.reversed.clearAll$();
this.twistedSheets=this.model.ms.vwr.getBoolean$I(603979968);
var vectorA=Clazz.new_($I$(1,1));
var vectorB=Clazz.new_($I$(1,1));
var vectorC=Clazz.new_($I$(1,1));
var vectorD=Clazz.new_($I$(1,1));
var leadPointPrev;
var leadPoint;
this.leadMidpoints[0]=p$1.getInitiatorPoint.apply(this, []);
this.leadPoints[0]=leadPoint=this.getLeadPoint$I(0);
var previousVectorD=null;
for (var i=1; i < this.monomerCount; ++i) {
leadPointPrev=leadPoint;
this.leadPoints[i]=leadPoint=this.getLeadPoint$I(i);
var midpoint=Clazz.new_($I$(2,1));
midpoint.ave$javajs_util_T3$javajs_util_T3(leadPoint, leadPointPrev);
this.leadMidpoints[i]=midpoint;
if (this.hasWingPoints) {
vectorA.sub2$javajs_util_T3$javajs_util_T3(leadPoint, leadPointPrev);
vectorB.sub2$javajs_util_T3$javajs_util_T3(leadPointPrev, this.getWingPoint$I(i - 1));
vectorC.cross$javajs_util_T3$javajs_util_T3(vectorA, vectorB);
vectorD.cross$javajs_util_T3$javajs_util_T3(vectorA, vectorC);
vectorD.normalize$();
if (!this.twistedSheets && previousVectorD != null   && previousVectorD.angle$javajs_util_V3(vectorD) > 1.5707963267948966  ) {
this.reversed.set$I(i);
vectorD.scale$F(-1);
}previousVectorD=this.wingVectors[i]=$I$(1).newV$javajs_util_T3(vectorD);
}}
this.leadPoints[this.monomerCount]=this.leadMidpoints[this.monomerCount]=p$1.getTerminatorPoint.apply(this, []);
if (!this.hasWingPoints) {
if (this.monomerCount < 3) {
this.wingVectors[1]=this.unitVectorX;
} else {
var previousVectorC=null;
for (var i=1; i < this.monomerCount; ++i) {
vectorA.sub2$javajs_util_T3$javajs_util_T3(this.leadMidpoints[i], this.leadPoints[i]);
vectorB.sub2$javajs_util_T3$javajs_util_T3(this.leadPoints[i], this.leadMidpoints[i + 1]);
vectorC.cross$javajs_util_T3$javajs_util_T3(vectorA, vectorB);
vectorC.normalize$();
if (previousVectorC != null  && previousVectorC.angle$javajs_util_V3(vectorC) > 1.5707963267948966  ) vectorC.scale$F(-1);
previousVectorC=this.wingVectors[i]=$I$(1).newV$javajs_util_T3(vectorC);
}
}}this.wingVectors[0]=this.wingVectors[1];
this.wingVectors[this.monomerCount]=this.wingVectors[this.monomerCount - 1];
}, p$1);

Clazz.newMeth(C$, 'findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$HA$I$javajs_util_BS', function (xMouse, yMouse, closest, mads, myVisibilityFlag, bsNot) {
for (var i=this.monomerCount; --i >= 0; ) {
if ((this.monomers[i].shapeVisibilityFlags & myVisibilityFlag) == 0) continue;
var a=this.monomers[i].getLeadAtom$();
if (!a.checkVisible$() || bsNot != null  && bsNot.get$I(a.i)  ) continue;
if (mads[i] > 0 || mads[i + 1] > 0 ) this.monomers[i].findNearestAtomIndex$I$I$org_jmol_modelset_AtomA$H$H(xMouse, yMouse, closest, mads[i], mads[i + 1]);
}
});

Clazz.newMeth(C$, 'getSelectedMonomerCount$', function () {
return this.selectedMonomerCount;
});

Clazz.newMeth(C$, 'calcSelectedMonomersCount$javajs_util_BS', function (bsSelected) {
this.selectedMonomerCount=0;
if (this.bsSelectedMonomers == null ) this.bsSelectedMonomers=Clazz.new_($I$(3,1));
this.bsSelectedMonomers.clearAll$();
for (var i=0; i < this.monomerCount; i++) {
if (this.monomers[i].isSelected$javajs_util_BS(bsSelected)) {
++this.selectedMonomerCount;
this.bsSelectedMonomers.set$I(i);
}}
});

Clazz.newMeth(C$, 'isMonomerSelected$I', function (i) {
return (i >= 0 && this.bsSelectedMonomers.get$I(i) );
});

Clazz.newMeth(C$, 'getPolymerPointsAndVectors$I$javajs_util_BS$javajs_util_Lst$Z$F', function (last, bs, vList, isTraceAlpha, sheetSmoothing) {
var points=this.getControlPoints$Z$F$Z(isTraceAlpha, sheetSmoothing, false);
var vectors=this.getWingVectors$();
var count=this.monomerCount;
for (var j=0; j < count; j++) if (bs.get$I(this.monomers[j].leadAtomIndex)) {
vList.addLast$O(Clazz.array($I$(2), -1, [points[j], $I$(2).newP$javajs_util_T3(vectors[j])]));
last=j;
} else if (last != 2147483646) {
vList.addLast$O(Clazz.array($I$(2), -1, [points[j], $I$(2).newP$javajs_util_T3(vectors[j])]));
last=2147483646;
}
if (last + 1 < count) vList.addLast$O(Clazz.array($I$(2), -1, [points[last + 1], $I$(2).newP$javajs_util_T3(vectors[last + 1])]));
return last;
});

Clazz.newMeth(C$, 'getSequence$', function () {
var buf=Clazz.array(Character.TYPE, [this.monomerCount]);
for (var i=0; i < this.monomerCount; i++) buf[i]=this.monomers[i].getGroup1$();

return String.valueOf$CA(buf);
});

Clazz.newMeth(C$, 'getPolymerSequenceAtoms$I$I$javajs_util_BS$javajs_util_BS', function (group1, nGroups, bsInclude, bsResult) {
for (var i=Math.min(this.monomerCount, group1 + nGroups); --i >= group1; ) this.monomers[i].getMonomerSequenceAtoms$javajs_util_BS$javajs_util_BS(bsInclude, bsResult);

});

Clazz.newMeth(C$, 'getProteinStructure$I', function (monomerIndex) {
return null;
});

Clazz.newMeth(C$, 'calcParameters$', function () {
this.haveParameters=true;
return this.calcEtaThetaAngles$() || this.calcPhiPsiAngles$() ;
});

Clazz.newMeth(C$, 'calcEtaThetaAngles$', function () {
return false;
});

Clazz.newMeth(C$, 'calcPhiPsiAngles$', function () {
return false;
});

Clazz.newMeth(C$, 'calculateRamachandranHelixAngle$I$C', function (m, qtype) {
return NaN;
});

Clazz.newMeth(C$, 'isNucleic$', function () {
return (this.monomerCount > 0 && Clazz.instanceOf(this, "org.jmol.modelsetbio.NucleicPolymer") );
});

Clazz.newMeth(C$, 'getRangeGroups$I$javajs_util_BS$javajs_util_BS', function (nResidues, bsAtoms, bsResult) {
var bsTemp=Clazz.new_($I$(3,1));
for (var i=0; i < this.monomerCount; i++) {
if (!this.monomers[i].isSelected$javajs_util_BS(bsAtoms)) continue;
bsTemp.setBits$I$I(Math.max(0, i - nResidues), i + nResidues + 1 );
i+=nResidues - 1;
}
for (var i=bsTemp.nextSetBit$I(0); i >= 0 && i < this.monomerCount ; i=bsTemp.nextSetBit$I(i + 1)) this.monomers[i].setAtomBits$javajs_util_BS(bsResult);

});

Clazz.newMeth(C$, 'calcRasmolHydrogenBonds$org_jmol_modelsetbio_BioPolymer$javajs_util_BS$javajs_util_BS$javajs_util_Lst$I$IAAA$Z$Z', function (polymer, bsA, bsB, vHBonds, nMaxPerResidue, min, checkDistances, dsspIgnoreHydrogens) {
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'isCyclic$', function () {
return ((this.cyclicFlag == 0 ? (this.cyclicFlag=(this.monomerCount >= 4 && this.monomers[0].isConnectedAfter$org_jmol_modelsetbio_Monomer(this.monomers[this.monomerCount - 1]) ) ? 1 : -1) : this.cyclicFlag) == 1);
});
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:14 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
