(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'javajs.util.Measure','javajs.util.P3','javajs.util.V3','org.jmol.modelset.HBond','org.jmol.util.Logger','org.jmol.c.STR']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AminoPolymer", null, 'org.jmol.modelsetbio.AlphaPolymer');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.structureList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_jmol_modelsetbio_MonomerA$I', function (monomers, pt0) {
C$.superclazz.c$$org_jmol_modelsetbio_MonomerA$I.apply(this, [monomers, pt0]);
C$.$init$.apply(this);
this.type=1;
for (var i=0; i < this.monomerCount; ++i) if (!(monomers[i]).hasOAtom$()) return;

this.hasWingPoints=true;
}, 1);

Clazz.newMeth(C$, 'resetHydrogenPoints$', function () {
var ps;
var psLast=null;
for (var i=0; i < this.monomerCount; i++) {
if ((ps=this.getProteinStructure$I(i)) != null  && ps !== psLast  ) (psLast=ps).resetAxes$();
(this.monomers[i]).resetHydrogenPoint$();
}
});

Clazz.newMeth(C$, 'calcPhiPsiAngles$', function () {
for (var i=0; i < this.monomerCount - 1; ++i) p$1.calcPhiPsiAngles2$org_jmol_modelsetbio_AminoMonomer$org_jmol_modelsetbio_AminoMonomer.apply(this, [this.monomers[i], this.monomers[i + 1]]);

return true;
});

Clazz.newMeth(C$, 'calcPhiPsiAngles2$org_jmol_modelsetbio_AminoMonomer$org_jmol_modelsetbio_AminoMonomer', function (residue1, residue2) {
var nitrogen1=residue1.getNitrogenAtom$();
var alphacarbon1=residue1.getLeadAtom$();
var carbon1=residue1.getCarbonylCarbonAtom$();
var nitrogen2=residue2.getNitrogenAtom$();
var alphacarbon2=residue2.getLeadAtom$();
var carbon2=residue2.getCarbonylCarbonAtom$();
residue2.setGroupParameter$I$F(1111490569, $I$(1).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(carbon1, nitrogen2, alphacarbon2, carbon2, true));
residue1.setGroupParameter$I$F(1111490570, $I$(1).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(nitrogen1, alphacarbon1, carbon1, nitrogen2, true));
residue1.setGroupParameter$I$F(1111490568, $I$(1).computeTorsion$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_T3$Z(alphacarbon1, carbon1, nitrogen2, alphacarbon2, true));
}, p$1);

Clazz.newMeth(C$, 'calculateRamachandranHelixAngle$I$C', function (m, qtype) {
var psiLast=(m == 0 ? NaN : this.monomers[m - 1].getGroupParameter$I(1111490570));
var psi=this.monomers[m].getGroupParameter$I(1111490570);
var phi=this.monomers[m].getGroupParameter$I(1111490569);
var phiNext=(m == this.monomerCount - 1 ? NaN : this.monomers[m + 1].getGroupParameter$I(1111490569));
var psiNext=(m == this.monomerCount - 1 ? NaN : this.monomers[m + 1].getGroupParameter$I(1111490570));
switch (qtype.$c()) {
default:
case 112:
case 114:
case 80:
var dPhi=((phiNext - phi) / 2 * 3.141592653589793 / 180);
var dPsi=((psiNext - psi) / 2 * 3.141592653589793 / 180);
return (57.29577951308232 * 2 * Math.acos(Math.cos(dPsi) * Math.cos(dPhi) - Math.sin(dPsi) * Math.sin(dPhi) / 3));
case 99:
case 67:
return (psi - psiLast + phiNext - phi);
}
});

Clazz.newMeth(C$, 'calcRasmolHydrogenBonds$org_jmol_modelsetbio_BioPolymer$javajs_util_BS$javajs_util_BS$javajs_util_Lst$I$IAAA$Z$Z', function (polymer, bsA, bsB, vHBonds, nMaxPerResidue, min, checkDistances, dsspIgnoreHydrogens) {
if (polymer == null ) polymer=this;
if (!(Clazz.instanceOf(polymer, "org.jmol.modelsetbio.AminoPolymer"))) return;
var pt=Clazz.new_($I$(2));
var vNH=Clazz.new_($I$(3));
var source;
var min1=(min == null  ? Clazz.array(Integer.TYPE, [2, 3]) : null);
for (var i=1; i < this.monomerCount; ++i) {
if (min == null ) {
min1[0][0]=min1[1][0]=this.bioPolymerIndexInModel;
min1[0][1]=min1[1][1]=-2147483648;
min1[0][2]=min1[1][2]=0;
} else {
min1=min[i];
}if ((source=(this.monomers[i])).getNHPoint$javajs_util_P3$javajs_util_V3$Z$Z(pt, vNH, checkDistances, dsspIgnoreHydrogens)) {
var isInA=(bsA == null  || bsA.get$I(source.getNitrogenAtom$().i) );
if (!isInA) continue;
if (!checkDistances && source.getCarbonylOxygenAtom$() == null  ) continue;
p$1.checkRasmolHydrogenBond$org_jmol_modelsetbio_AminoMonomer$org_jmol_modelsetbio_BioPolymer$I$javajs_util_P3$javajs_util_BS$javajs_util_Lst$IAA$Z.apply(this, [source, polymer, i, pt, (isInA ? bsB : bsA), vHBonds, min1, checkDistances]);
}}
});

Clazz.newMeth(C$, 'checkRasmolHydrogenBond$org_jmol_modelsetbio_AminoMonomer$org_jmol_modelsetbio_BioPolymer$I$javajs_util_P3$javajs_util_BS$javajs_util_Lst$IAA$Z', function (source, polymer, indexDonor, hydrogenPoint, bsB, vHBonds, min, checkDistances) {
var sourceAlphaPoint=source.getLeadAtom$();
var sourceNitrogenPoint=source.getNitrogenAtom$();
var nitrogen=source.getNitrogenAtom$();
var m;
for (var i=polymer.monomerCount; --i >= 0; ) {
if (polymer === this  && (i == indexDonor || i + 1 == indexDonor ) ) continue;
var target=polymer.monomers[i];
var oxygen=target.getCarbonylOxygenAtom$();
if (oxygen == null  || bsB != null  && !bsB.get$I(oxygen.i)  ) continue;
var targetAlphaPoint=target.getLeadAtom$();
var dist2=sourceAlphaPoint.distanceSquared$javajs_util_T3(targetAlphaPoint);
if (dist2 >= 81.0 ) continue;
var energy=p$1.calcHbondEnergy$javajs_util_P3$javajs_util_P3$org_jmol_modelsetbio_AminoMonomer$Z.apply(this, [sourceNitrogenPoint, hydrogenPoint, target, checkDistances]);
if (energy < min[0][2]) {
m=min[1];
min[1]=min[0];
min[0]=m;
} else if (energy < min[1][2]) {
m=min[1];
} else {
continue;
}m[0]=polymer.bioPolymerIndexInModel;
m[1]=(energy < -500 ? i : -1 - i);
m[2]=energy;
}
if (vHBonds != null ) for (var i=0; i < 2; i++) if (min[i][1] >= 0) p$1.addResidueHydrogenBond$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$I$F$javajs_util_Lst.apply(this, [nitrogen, ((polymer).monomers[min[i][1]]).getCarbonylOxygenAtom$(), (polymer === this  ? indexDonor : -99), min[i][1], min[i][2] / 1000.0, vHBonds]);

}, p$1);

Clazz.newMeth(C$, 'calcHbondEnergy$javajs_util_P3$javajs_util_P3$org_jmol_modelsetbio_AminoMonomer$Z', function (nitrogenPoint, hydrogenPoint, target, checkDistances) {
var targetOxygenPoint=target.getCarbonylOxygenAtom$();
if (targetOxygenPoint == null ) return 0;
var distON2=targetOxygenPoint.distanceSquared$javajs_util_T3(nitrogenPoint);
if (distON2 < 0.25 ) return 0;
var distOH2=targetOxygenPoint.distanceSquared$javajs_util_T3(hydrogenPoint);
if (distOH2 < 0.25 ) return 0;
var targetCarbonPoint=target.getCarbonylCarbonAtom$();
var distCH2=targetCarbonPoint.distanceSquared$javajs_util_T3(hydrogenPoint);
if (distCH2 < 0.25 ) return 0;
var distCN2=targetCarbonPoint.distanceSquared$javajs_util_T3(nitrogenPoint);
if (distCN2 < 0.25 ) return 0;
var distOH=Math.sqrt(distOH2);
var distCH=Math.sqrt(distCH2);
var distCN=Math.sqrt(distCN2);
var distON=Math.sqrt(distON2);
var energy=$I$(4).getEnergy$D$D$D$D(distOH, distCH, distCN, distON);
var isHbond=(energy < -500 && (!checkDistances || distCN > distCH  && distOH <= 3.0   ) );
return (!isHbond && checkDistances  || energy < -9900  ? 0 : energy);
}, p$1);

Clazz.newMeth(C$, 'addResidueHydrogenBond$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$I$F$javajs_util_Lst', function (nitrogen, oxygen, indexAminoGroup, indexCarbonylGroup, energy, vHBonds) {
var order;
switch (indexAminoGroup - indexCarbonylGroup) {
case 2:
order=6144;
break;
case 3:
order=8192;
break;
case 4:
order=10240;
break;
case 5:
order=12288;
break;
case -3:
order=14336;
break;
case -4:
order=16384;
break;
default:
order=4096;
}
vHBonds.addLast$TV(Clazz.new_($I$(4).c$$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$H$F,[nitrogen, oxygen, order, 1, 0, energy]));
}, p$1);

Clazz.newMeth(C$, 'calculateStructures$Z', function (alphaOnly) {
if (alphaOnly) return;
if (this.structureList == null ) this.structureList=this.model.ms.getStructureList$();
var structureTags=Clazz.array(Character.TYPE, [this.monomerCount]);
for (var i=0; i < this.monomerCount - 1; ++i) {
var leadingResidue=this.monomers[i];
var trailingResidue=this.monomers[i + 1];
var phi=trailingResidue.getGroupParameter$I(1111490569);
var psi=leadingResidue.getGroupParameter$I(1111490570);
if (p$1.isHelix$F$F.apply(this, [psi, phi])) {
structureTags[i]=(phi < 0  && psi < 25   ? "4" : "3");
} else if (p$1.isSheet$F$F.apply(this, [psi, phi])) {
structureTags[i]="s";
} else if (p$1.isTurn$F$F.apply(this, [psi, phi])) {
structureTags[i]="t";
} else {
structureTags[i]="n";
}if ($I$(5).debugging) $I$(5).debug$S((0 + this.monomers[0].chain.chainID) + " aminopolymer:" + i + " " + new Float(trailingResidue.getGroupParameter$I(1111490569)).toString() + "," + new Float(leadingResidue.getGroupParameter$I(1111490570)).toString() + " " + structureTags[i] );
}
for (var start=0; start < this.monomerCount; ++start) {
if (structureTags[start] == "4") {
var end;
for (end=start + 1; end < this.monomerCount && structureTags[end] == "4" ; ++end) {
}
end--;
if (end >= start + 3) {
this.addStructureProtected$org_jmol_c_STR$S$I$I$I$I($I$(6).HELIX, null, 0, 0, start, end);
}start=end;
}}
for (var start=0; start < this.monomerCount; ++start) {
if (structureTags[start] == "3") {
var end;
for (end=start + 1; end < this.monomerCount && structureTags[end] == "3" ; ++end) {
}
end--;
if (end >= start + 3) {
this.addStructureProtected$org_jmol_c_STR$S$I$I$I$I($I$(6).HELIX, null, 0, 0, start, end);
}start=end;
}}
for (var start=0; start < this.monomerCount; ++start) {
if (structureTags[start] == "s") {
var end;
for (end=start + 1; end < this.monomerCount && structureTags[end] == "s" ; ++end) {
}
end--;
if (end >= start + 2) {
this.addStructureProtected$org_jmol_c_STR$S$I$I$I$I($I$(6).SHEET, null, 0, 0, start, end);
}start=end;
}}
for (var start=0; start < this.monomerCount; ++start) {
if (structureTags[start] == "t") {
var end;
for (end=start + 1; end < this.monomerCount && structureTags[end] == "t" ; ++end) {
}
end--;
if (end >= start + 2) {
this.addStructureProtected$org_jmol_c_STR$S$I$I$I$I($I$(6).TURN, null, 0, 0, start, end);
}start=end;
}}
});

Clazz.newMeth(C$, 'isTurn$F$F', function (psi, phi) {
return C$.checkPhiPsi$FA$F$F(this.structureList.get$O($I$(6).TURN), psi, phi);
}, p$1);

Clazz.newMeth(C$, 'isSheet$F$F', function (psi, phi) {
return C$.checkPhiPsi$FA$F$F(this.structureList.get$O($I$(6).SHEET), psi, phi);
}, p$1);

Clazz.newMeth(C$, 'isHelix$F$F', function (psi, phi) {
return C$.checkPhiPsi$FA$F$F(this.structureList.get$O($I$(6).HELIX), psi, phi);
}, p$1);

Clazz.newMeth(C$, 'checkPhiPsi$FA$F$F', function (list, psi, phi) {
for (var i=0; i < list.length; i+=4) if (phi >= list[i]  && phi <= list[i + 1]   && psi >= list[i + 2]   && psi <= list[i + 3]  ) return true;

return false;
}, 1);

Clazz.newMeth(C$, 'setStructureList$java_util_Map', function (structureList) {
this.structureList=structureList;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-13 22:36:20 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
