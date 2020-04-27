(function(){var P$=Clazz.newPackage("org.jmol.modelsetbio"),p$1={},I$=[[0,'java.util.Hashtable','org.jmol.c.STR','org.jmol.modelset.Group','javajs.util.SB','org.jmol.modelsetbio.BioModel','org.jmol.modelsetbio.AminoMonomer','org.jmol.modelsetbio.AlphaMonomer','org.jmol.modelsetbio.NucleicMonomer','org.jmol.modelsetbio.PhosphorusMonomer','org.jmol.modelsetbio.CarbohydrateMonomer','javajs.util.BS','javajs.util.V3','javajs.util.P4','javajs.util.P3','Boolean','java.util.Arrays','javajs.util.Measure','org.jmol.util.Logger','org.jmol.util.BSUtil','javajs.util.PT','org.jmol.modelsetbio.Monomer','org.jmol.modelsetbio.AminoPolymer','org.jmol.modelsetbio.AlphaPolymer','org.jmol.modelsetbio.NucleicPolymer','org.jmol.modelsetbio.PhosphorusPolymer','org.jmol.modelsetbio.CarbohydratePolymer','javajs.util.AU']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BioResolver", null, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastSetH=-2147483648;
this.maxSerial=0;
this.baseBondIndex=0;
},1);

C$.$fields$=[['Z',['haveHsAlready'],'I',['lastSetH','maxSerial','baseBondIndex'],'O',['vwr','org.jmol.viewer.Viewer','vAB','javajs.util.V3','+vNorm','plane','javajs.util.P4','ml','org.jmol.modelset.ModelLoader','ms','org.jmol.modelset.ModelSet','bsAddedMask','javajs.util.BS','+bsAddedHydrogens','+bsAtomsForHs','htBondMap','java.util.Map','+htGroupBonds','hNames','String[]','bsAssigned','javajs.util.BS']]
,['I',['group3Count','ATOMID_MAX'],'H',['group3NameCount'],'O',['htGroup','java.util.Map','types','org.jmol.c.STR[]','mytypes','int[]','htPdbBondInfo','java.util.Map','pdbBondInfo','String[]','pdbHydrogenCount','int[]','predefinedGroup1Names','char[]','predefinedGroup3Names','String[]','+specialAtomNames','htSpecialAtoms','java.util.Map','argbsAmino','int[]','+argbsNucleic','+argbsChainAtom','+argbsChainHetero','+argbsShapely']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLoader$org_jmol_modelset_ModelLoader', function (modelLoader) {
this.ml=modelLoader;
this.bsAddedMask=null;
this.lastSetH=-2147483648;
this.maxSerial=0;
this.haveHsAlready=false;
if (modelLoader == null ) {
this.ms=null;
this.bsAddedHydrogens=this.bsAtomsForHs=this.bsAssigned=null;
this.htBondMap=null;
this.htGroupBonds=null;
this.hNames=null;
} else {
$I$(3).specialAtomNames=C$.specialAtomNames;
this.ms=modelLoader.ms;
this.vwr=modelLoader.ms.vwr;
modelLoader.specialAtomIndexes=Clazz.array(Integer.TYPE, [C$.ATOMID_MAX]);
}return this;
});

Clazz.newMeth(C$, 'setViewer$org_jmol_viewer_Viewer', function (vwr) {
this.vwr=vwr;
if ($I$(3).standardGroupList == null ) {
var s=Clazz.new_($I$(4,1));
for (var i=1; i < 42; i++) s.append$S(",[").append$S(C$.predefinedGroup3Names[i]).append$S("]");

s.append$S(",[AHR],[ALL],[AMU],[ARA],[ARB],[BDF],[BDR],[BGC],[BMA],[FCA],[FCB],[FRU],[FUC],[FUL],[GAL],[GLA],[GLC],[GXL],[GUP],[LXC],[MAN],[RAM],[RIB],[RIP],[XYP],[XYS],[CBI],[CT3],[CTR],[CTT],[LAT],[MAB],[MAL],[MLR],[MTT],[SUC],[TRE],[GCU],[MTL],[NAG],[NDG],[RHA],[SOR],[SOL],[SOE],[XYL],[A2G],[LBT],[NGA],[SIA],[SLB],[AFL],[AGC],[GLB],[NAN],[RAA]");
C$.group3Count=(s.length$()/6|0);
$I$(3).standardGroupList=s.toString();
for (var i=0, n=C$.predefinedGroup3Names.length; i < n; ++i) C$.addGroup3Name$S(C$.predefinedGroup3Names[i].trim$());

}return this;
});

Clazz.newMeth(C$, 'getBioModel$I$I$S$java_util_Properties$java_util_Map', function (modelIndex, trajectoryBaseIndex, jmolData, modelProperties, modelAuxiliaryInfo) {
return Clazz.new_($I$(5,1).c$$org_jmol_modelset_ModelSet$I$I$S$java_util_Properties$java_util_Map,[this.ms, modelIndex, trajectoryBaseIndex, jmolData, modelProperties, modelAuxiliaryInfo]);
});

Clazz.newMeth(C$, 'distinguishAndPropagateGroup$org_jmol_modelset_Chain$S$I$I$I$IA$org_jmol_modelset_AtomA', function (chain, group3, seqcode, firstAtomIndex, lastAtomIndex, specialAtomIndexes, atoms) {
var mask=0;
for (var i=C$.ATOMID_MAX; --i >= 0; ) specialAtomIndexes[i]=-2147483648;

for (var i=lastAtomIndex; i >= firstAtomIndex; --i) {
var specialAtomID=atoms[i].atomID;
if (specialAtomID <= 0) continue;
if (specialAtomID < 14) {
mask|=(1 << specialAtomID);
}specialAtomIndexes[specialAtomID]=i;
}
var m=null;
if ((mask & 14) == 14) m=$I$(6).validateAndAllocate$org_jmol_modelset_Chain$S$I$I$I$IA$org_jmol_modelset_AtomA(chain, group3, seqcode, firstAtomIndex, lastAtomIndex, specialAtomIndexes, atoms);
 else if (mask == 4) m=$I$(7).validateAndAllocateA$org_jmol_modelset_Chain$S$I$I$I$IA(chain, group3, seqcode, firstAtomIndex, lastAtomIndex, specialAtomIndexes);
 else if (((mask & 8128) == 8128)) m=$I$(8).validateAndAllocate$org_jmol_modelset_Chain$S$I$I$I$IA(chain, group3, seqcode, firstAtomIndex, lastAtomIndex, specialAtomIndexes);
 else if (mask == 8192) m=$I$(9).validateAndAllocateP$org_jmol_modelset_Chain$S$I$I$I$IA(chain, group3, seqcode, firstAtomIndex, lastAtomIndex, specialAtomIndexes);
 else if (C$.checkCarbohydrate$S(group3)) m=$I$(10).validateAndAllocate$org_jmol_modelset_Chain$S$I$I$I(chain, group3, seqcode, firstAtomIndex, lastAtomIndex);
return (m != null  && m.leadAtomIndex >= 0  ? m : null);
});

Clazz.newMeth(C$, 'setHaveHsAlready$Z', function (b) {
this.haveHsAlready=b;
});

Clazz.newMeth(C$, 'initializeHydrogenAddition$', function () {
this.baseBondIndex=this.ms.bondCount;
this.bsAddedHydrogens=Clazz.new_($I$(11,1));
this.bsAtomsForHs=Clazz.new_($I$(11,1));
this.htBondMap=Clazz.new_($I$(1,1));
this.htGroupBonds=Clazz.new_($I$(1,1));
this.hNames=Clazz.array(String, [3]);
this.vAB=Clazz.new_($I$(12,1));
this.vNorm=Clazz.new_($I$(12,1));
this.plane=Clazz.new_($I$(13,1));
});

Clazz.newMeth(C$, 'addImplicitHydrogenAtoms$org_jmol_api_JmolAdapter$I$I', function (adapter, iGroup, nH) {
var group3=this.ml.getGroup3$I(iGroup);
var nH1;
if (this.haveHsAlready || group3 == null   || (nH1=C$.getStandardPdbHydrogenCount$S(group3)) == 0 ) return;
nH=(nH1 < 0 ? -1 : nH1 + nH);
var model=null;
var iFirst=this.ml.getFirstAtomIndex$I(iGroup);
var ac=this.ms.ac;
if (nH < 0) {
if (ac - iFirst == 1) return;
model=this.vwr.getLigandModel$S$S$S$S(group3, "ligand_", "_data", null);
if (model == null ) return;
nH=adapter.getHydrogenAtomCount$O(model);
if (nH < 1) return;
}p$1.getBondInfo$org_jmol_api_JmolAdapter$S$O.apply(this, [adapter, group3, model]);
this.ms.am[this.ms.at[iFirst].mi].isPdbWithMultipleBonds=true;
this.bsAtomsForHs.setBits$I$I(iFirst, ac);
this.bsAddedHydrogens.setBits$I$I(ac, ac + nH);
var isHetero=this.ms.at[iFirst].isHetero$();
var xyz=$I$(14).new3$F$F$F(NaN, NaN, NaN);
var a=this.ms.at[iFirst];
for (var i=0; i < nH; i++) this.ms.addAtom$I$org_jmol_modelset_Group$I$S$S$I$I$I$javajs_util_P3$F$javajs_util_V3$I$F$F$F$javajs_util_Lst$Z$B$javajs_util_BS(a.mi, a.group, 1, "H", null, 0, a.getSeqID$(), 0, xyz, NaN, null, 0, 0, 1, 0, null, isHetero, 0, null).delete$javajs_util_BS(null);

});

Clazz.newMeth(C$, 'getBondInfo$org_jmol_api_JmolAdapter$S$O', function (adapter, group3, model) {
if (this.htGroupBonds.get$O(group3) != null ) return;
var bondInfo=(model == null  ? p$1.getPdbBondInfo$S$Z.apply(this, [group3, this.vwr.g.legacyHAddition]) : p$1.getLigandBondInfo$org_jmol_api_JmolAdapter$O$S.apply(this, [adapter, model, group3]));
if (bondInfo == null ) return;
this.htGroupBonds.put$O$O(group3, $I$(15).TRUE);
for (var i=0; i < bondInfo.length; i++) {
if (bondInfo[i] == null ) continue;
if (bondInfo[i][1].charAt$I(0) == "H") this.htBondMap.put$O$O(group3 + "." + bondInfo[i][0] , bondInfo[i][1]);
 else this.htBondMap.put$O$O(group3 + ":" + bondInfo[i][0] + ":" + bondInfo[i][1] , bondInfo[i][2]);
}
}, p$1);

Clazz.newMeth(C$, 'getLigandBondInfo$org_jmol_api_JmolAdapter$O$S', function (adapter, model, group3) {
var dataIn=adapter.getBondList$O(model);
var htAtoms=Clazz.new_($I$(1,1));
var iterAtom=adapter.getAtomIterator$O(model);
while (iterAtom.hasNext$())htAtoms.put$O$O(iterAtom.getAtomName$(), iterAtom.getXYZ$());

var bondInfo=Clazz.array(String, [dataIn.length * 2, null]);
var n=0;
for (var i=0; i < dataIn.length; i++) {
var b=dataIn[i];
if (b[0].charAt$I(0) != "H") bondInfo[n++]=Clazz.array(String, -1, [b[0], b[1], b[2], b[1].startsWith$S("H") ? "0" : "1"]);
if (b[1].charAt$I(0) != "H") bondInfo[n++]=Clazz.array(String, -1, [b[1], b[0], b[2], b[0].startsWith$S("H") ? "0" : "1"]);
}
$I$(16).sort$OA$java_util_Comparator(bondInfo, this);
var t;
for (var i=0; i < n; ) {
t=bondInfo[i];
var a1=t[0];
var nH=0;
var nC=0;
for (; i < n && (t=bondInfo[i])[0].equals$O(a1) ; i++) {
if (t[3].equals$O("0")) {
nH++;
continue;
}if (t[3].equals$O("1")) nC++;
}
var pt=i - nH - nC ;
if (nH == 1) continue;
switch (nC) {
case 1:
var sep=(nH == 2 ? "@" : "|");
for (var j=1; j < nH; j++) {
bondInfo[pt][1] += sep + bondInfo[pt + j][1];
bondInfo[pt + j]=null;
}
continue;
case 2:
if (nH != 2) continue;
var name=bondInfo[pt][0];
var name1=bondInfo[pt + nH][1];
var name2=bondInfo[pt + nH + 1 ][1];
var factor=name1.compareTo$S(name2);
(function(a,f){return f.apply(null,a)})([htAtoms.get$O(name1), htAtoms.get$O(name), htAtoms.get$O(name2), this.vNorm, this.vAB, this.plane],$I$(17).getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4);
var d=(function(a,f){return f.apply(null,a)})([this.plane, htAtoms.get$O(bondInfo[pt][1])],$I$(17).distanceToPlane$javajs_util_P4$javajs_util_T3) * factor;
bondInfo[pt][1]=(d > 0  ? bondInfo[pt][1] + "@" + bondInfo[pt + 1][1]  : bondInfo[pt + 1][1] + "@" + bondInfo[pt][1] );
bondInfo[pt + 1]=null;
}
}
for (var i=0; i < n; i++) {
if ((t=bondInfo[i]) != null  && t[1].charAt$I(0) != "H"  && t[0].compareTo$S(t[1]) > 0 ) {
bondInfo[i]=null;
continue;
}if (t != null ) $I$(18).info$S(" ligand " + group3 + ": " + bondInfo[i][0] + " - " + bondInfo[i][1] + " order " + bondInfo[i][2] );
}
return bondInfo;
}, p$1);

Clazz.newMeth(C$, ['compare$SA$SA','compare$O$O'], function (a, b) {
return (b == null  ? (a == null  ? 0 : -1) : a == null  ? 1 : a[0].compareTo$S(b[0]) < 0 ? -1 : a[0].compareTo$S(b[0]) > 0 ? 1 : a[3].compareTo$S(b[3]) < 0 ? -1 : a[3].compareTo$S(b[3]) > 0 ? 1 : a[1].compareTo$S(b[1]) < 0 ? -1 : a[1].compareTo$S(b[1]) > 0 ? 1 : 0);
});

Clazz.newMeth(C$, 'finalizeHydrogens$', function () {
this.vwr.getLigandModel$S$S$S$S(null, null, null, null);
p$1.finalizePdbMultipleBonds.apply(this, []);
p$1.addHydrogens.apply(this, []);
});

Clazz.newMeth(C$, 'addHydrogens', function () {
if (this.bsAddedHydrogens.nextSetBit$I(0) < 0) return;
this.bsAddedMask=$I$(19).copy$javajs_util_BS(this.bsAddedHydrogens);
p$1.finalizePdbCharges.apply(this, []);
var nTotal=Clazz.array(Integer.TYPE, [1]);
var pts=this.ms.calculateHydrogens$javajs_util_BS$IA$Z$Z$javajs_util_Lst(this.bsAtomsForHs, nTotal, true, false, null);
var groupLast=null;
var ipt=0;
for (var i=0; i < pts.length; i++) {
if (pts[i] == null ) continue;
var atom=this.ms.at[i];
var g=atom.group;
if (g !== groupLast ) {
groupLast=g;
ipt=g.lastAtomIndex;
while (this.bsAddedHydrogens.get$I(ipt))ipt--;

}var gName=atom.getGroup3$Z(false);
var aName=atom.getAtomName$();
var hName=this.htBondMap.get$O(gName + "." + aName );
if (hName == null ) continue;
var isChiral=hName.contains$CharSequence("@");
var isMethyl=(hName.endsWith$S("?") || hName.indexOf$S("|") >= 0 );
var n=pts[i].length;
if (n == 3 && !isMethyl  && hName.equals$O("H@H2") ) {
hName="H|H2|H3";
isMethyl=true;
isChiral=false;
}if (isChiral && n == 3  || isMethyl != (n == 3)  ) {
(function(a,f){return f.apply(null,a)})(["Error adding H atoms to " + gName + g.getResno$() + ": " + pts[i].length + " atoms should not be added to " + aName ],$I$(18).info$S);
continue;
}var pt=hName.indexOf$S("@");
switch (pts[i].length) {
case 1:
if (pt > 0) hName=hName.substring$I$I(0, pt);
p$1.setHydrogen$I$I$S$javajs_util_P3.apply(this, [i, ++ipt, hName, pts[i][0]]);
break;
case 2:
var hName1;
var hName2;
var d=-1;
var bonds=atom.bonds;
if (bonds != null ) switch (bonds.length) {
case 2:
var atom1=bonds[0].getOtherAtom$org_jmol_modelset_Atom(atom);
var atom2=bonds[1].getOtherAtom$org_jmol_modelset_Atom(atom);
var factor=atom1.getAtomName$().compareTo$S(atom2.getAtomName$());
d=(function(a,f){return f.apply(null,a)})([$I$(17).getPlaneThroughPoints$javajs_util_T3$javajs_util_T3$javajs_util_T3$javajs_util_V3$javajs_util_V3$javajs_util_P4(atom1, atom, atom2, this.vNorm, this.vAB, this.plane), pts[i][0]],$I$(17).distanceToPlane$javajs_util_P4$javajs_util_T3) * factor;
break;
}
if (pt < 0) {
(function(a,f){return f.apply(null,a)})(["Error adding H atoms to " + gName + g.getResno$() + ": expected to only need 1 H but needed 2" ],$I$(18).info$S);
hName1=hName2="H";
} else if (d < 0 ) {
hName2=hName.substring$I$I(0, pt);
hName1=hName.substring$I(pt + 1);
} else {
hName1=hName.substring$I$I(0, pt);
hName2=hName.substring$I(pt + 1);
}p$1.setHydrogen$I$I$S$javajs_util_P3.apply(this, [i, ++ipt, hName1, pts[i][0]]);
p$1.setHydrogen$I$I$S$javajs_util_P3.apply(this, [i, ++ipt, hName2, pts[i][1]]);
break;
case 3:
var pt1=hName.indexOf$I("|");
if (pt1 >= 0) {
var pt2=hName.lastIndexOf$I("|");
this.hNames[0]=hName.substring$I$I(0, pt1);
this.hNames[1]=hName.substring$I$I(pt1 + 1, pt2);
this.hNames[2]=hName.substring$I(pt2 + 1);
} else {
this.hNames[0]=hName.replace$C$C("?", "1");
this.hNames[1]=hName.replace$C$C("?", "2");
this.hNames[2]=hName.replace$C$C("?", "3");
}p$1.setHydrogen$I$I$S$javajs_util_P3.apply(this, [i, ++ipt, this.hNames[0], pts[i][0]]);
p$1.setHydrogen$I$I$S$javajs_util_P3.apply(this, [i, ++ipt, this.hNames[1], pts[i][2]]);
p$1.setHydrogen$I$I$S$javajs_util_P3.apply(this, [i, ++ipt, this.hNames[2], pts[i][1]]);
break;
}
}
p$1.deleteUnneededAtoms.apply(this, []);
this.ms.fixFormalCharges$javajs_util_BS($I$(19).newBitSet2$I$I(this.ml.baseAtomIndex, this.ml.ms.ac));
}, p$1);

Clazz.newMeth(C$, 'deleteUnneededAtoms', function () {
var bsBondsDeleted=Clazz.new_($I$(11,1));
for (var i=this.bsAtomsForHs.nextSetBit$I(0); i >= 0; i=this.bsAtomsForHs.nextSetBit$I(i + 1)) {
var atom=this.ms.at[i];
if (!atom.isHetero$() || atom.getElementNumber$() != 8  || atom.getFormalCharge$() != 0  || atom.getCovalentBondCount$() != 2 ) continue;
var bonds=atom.bonds;
var atom1=bonds[0].getOtherAtom$org_jmol_modelset_Atom(atom);
var atomH=bonds[1].getOtherAtom$org_jmol_modelset_Atom(atom);
if (atom1.getElementNumber$() == 1) {
var a=atom1;
atom1=atomH;
atomH=a;
}if (atomH.getElementNumber$() != 1) continue;
var bonds1=atom1.bonds;
for (var j=0; j < bonds1.length; j++) {
if (bonds1[j].order == 2) {
var atomO=bonds1[j].getOtherAtom$org_jmol_modelset_Atom(atom1);
if (atomO.getElementNumber$() == 8) {
this.bsAddedHydrogens.set$I(atomH.i);
atomH.delete$javajs_util_BS(bsBondsDeleted);
break;
}}}
}
this.ms.deleteBonds$javajs_util_BS$Z(bsBondsDeleted, true);
p$1.deleteAtoms$javajs_util_BS.apply(this, [this.bsAddedHydrogens]);
}, p$1);

Clazz.newMeth(C$, 'deleteAtoms$javajs_util_BS', function (bsDeletedAtoms) {
var mapOldToNew=Clazz.array(Integer.TYPE, [this.ms.ac]);
var mapNewToOld=Clazz.array(Integer.TYPE, [this.ms.ac - bsDeletedAtoms.cardinality$()]);
var n=this.ml.baseAtomIndex;
var models=this.ms.am;
var atoms=this.ms.at;
for (var i=this.ml.baseAtomIndex; i < this.ms.ac; i++) {
models[atoms[i].mi].bsAtoms.clear$I(i);
models[atoms[i].mi].bsAtomsDeleted.clear$I(i);
if (bsDeletedAtoms.get$I(i)) {
mapOldToNew[i]=n - 1;
models[atoms[i].mi].act--;
} else {
mapNewToOld[n]=i;
mapOldToNew[i]=n++;
}}
this.ms.msInfo.put$O$O("bsDeletedAtoms", bsDeletedAtoms);
for (var i=this.ml.baseGroupIndex; i < this.ml.groups.length; i++) {
var g=this.ml.groups[i];
if (g.firstAtomIndex >= this.ml.baseAtomIndex) {
g.firstAtomIndex=mapOldToNew[g.firstAtomIndex];
g.lastAtomIndex=mapOldToNew[g.lastAtomIndex];
if (g.leadAtomIndex >= 0) g.leadAtomIndex=mapOldToNew[g.leadAtomIndex];
}}
this.ms.adjustAtomArrays$IA$I$I(mapNewToOld, this.ml.baseAtomIndex, n);
this.ms.calcBoundBoxDimensions$javajs_util_BS$F(null, 1);
this.ms.resetMolecules$();
this.ms.validateBspf$Z(false);
this.bsAddedMask=$I$(19).deleteBits$javajs_util_BS$javajs_util_BS(this.bsAddedMask, bsDeletedAtoms);
for (var i=this.ml.baseModelIndex; i < this.ms.mc; i++) {
p$1.fixAnnotations$I$S$I.apply(this, [i, "domains", 1073741925]);
p$1.fixAnnotations$I$S$I.apply(this, [i, "validation", 1073742189]);
}
}, p$1);

Clazz.newMeth(C$, 'fixAnnotations$I$S$I', function (i, name, type) {
var o=this.ml.ms.getInfo$I$S(i, name);
if (o != null ) {
var dbObj=(this.ms.am[i]).getCachedAnnotationMap$S$O(name, o);
if (dbObj != null ) this.vwr.getAnnotationParser$Z(false).fixAtoms$I$org_jmol_script_SV$javajs_util_BS$I$I(i, dbObj, this.bsAddedMask, type, 20);
}}, p$1);

Clazz.newMeth(C$, 'finalizePdbCharges', function () {
var atoms=this.ms.at;
for (var i=this.bsAtomsForHs.nextSetBit$I(0); i >= 0; i=this.bsAtomsForHs.nextSetBit$I(i + 1)) {
var a=atoms[i];
if (a.group.getNitrogenAtom$() === a  && a.getCovalentBondCount$() == 1 ) a.setFormalCharge$I(1);
if ((i=this.bsAtomsForHs.nextClearBit$I(i + 1)) < 0) break;
}
}, p$1);

Clazz.newMeth(C$, 'finalizePdbMultipleBonds', function () {
var htKeysUsed=Clazz.new_($I$(1,1));
var bondCount=this.ms.bondCount;
var bonds=this.ms.bo;
for (var i=this.baseBondIndex; i < bondCount; i++) {
var a1=bonds[i].atom1;
var a2=bonds[i].atom2;
var g=a1.group;
if (g !== a2.group ) continue;
var key=Clazz.new_($I$(4,1)).append$S(g.getGroup3$());
key.append$S(":");
var n1=a1.getAtomName$();
var n2=a2.getAtomName$();
if (n1.compareTo$S(n2) > 0) key.append$S(n2).append$S(":").append$S(n1);
 else key.append$S(n1).append$S(":").append$S(n2);
var skey=key.toString();
var type=this.htBondMap.get$O(skey);
if (type == null ) continue;
htKeysUsed.put$O$O(skey, $I$(15).TRUE);
bonds[i].setOrder$I($I$(20).parseInt$S(type));
}
for (var key, $key = this.htBondMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (htKeysUsed.get$O(key) != null ) continue;
if (key.indexOf$S(":") < 0) {
htKeysUsed.put$O$O(key, $I$(15).TRUE);
continue;
}var value=this.htBondMap.get$O(key);
(function(a,f){return f.apply(null,a)})(["bond " + key + " was not used; order=" + value ],$I$(18).info$S);
if (this.htBondMap.get$O(key).equals$O("1")) {
htKeysUsed.put$O$O(key, $I$(15).TRUE);
continue;
}}
var htKeysBad=Clazz.new_($I$(1,1));
for (var key, $key = this.htBondMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (htKeysUsed.get$O(key) != null ) continue;
htKeysBad.put$O$O(key.substring$I$I(0, key.lastIndexOf$S(":")), this.htBondMap.get$O(key));
}
if (htKeysBad.isEmpty$()) return;
for (var i=0; i < bondCount; i++) {
var a1=bonds[i].atom1;
var a2=bonds[i].atom2;
if (a1.group === a2.group ) continue;
var value;
if ((value=htKeysBad.get$O(a1.getGroup3$Z(false) + ":" + a1.getAtomName$() )) == null  && ((value=htKeysBad.get$O(a2.getGroup3$Z(false) + ":" + a2.getAtomName$() )) == null ) ) continue;
bonds[i].setOrder$I($I$(20).parseInt$S(value));
$I$(18).info$S("assigning order " + bonds[i].order + " to bond " + bonds[i] );
}
}, p$1);

Clazz.newMeth(C$, 'setHydrogen$I$I$S$javajs_util_P3', function (iTo, iAtom, name, pt) {
if (!this.bsAddedHydrogens.get$I(iAtom)) return;
var atoms=this.ms.at;
if (this.lastSetH == -2147483648 || atoms[iAtom].mi != atoms[this.lastSetH].mi ) this.maxSerial=(this.ms.getInfo$I$S(atoms[this.lastSetH=iAtom].mi, "PDB_CONECT_firstAtom_count_max"))[2];
this.bsAddedHydrogens.clear$I(iAtom);
this.ms.setAtomName$I$S$Z(iAtom, name, false);
atoms[iAtom].setT$javajs_util_T3(pt);
this.ms.setAtomNumber$I$I$Z(iAtom, ++this.maxSerial, false);
atoms[iAtom].atomSymmetry=atoms[iTo].atomSymmetry;
this.ml.undeleteAtom$I(iAtom);
this.ms.bondAtoms$org_jmol_modelset_Atom$org_jmol_modelset_Atom$I$H$javajs_util_BS$F$Z$Z(atoms[iTo], atoms[iAtom], 1, this.ms.getDefaultMadFromOrder$I(1), null, 0, true, false);
}, p$1);

Clazz.newMeth(C$, 'fixPropertyValue$javajs_util_BS$O$Z', function (bsAtoms, data, toHydrogens) {
var atoms=this.ms.at;
var fData=data;
var newData=Clazz.array(Float.TYPE, [bsAtoms.cardinality$()]);
var lastData=0;
for (var pt=0, iAtom=0, i=bsAtoms.nextSetBit$I(0); i >= 0; i=bsAtoms.nextSetBit$I(i + 1), iAtom++) {
if (atoms[i].getElementNumber$() == 1) {
if (!toHydrogens) continue;
} else {
lastData=fData[pt++];
}newData[iAtom]=lastData;
}
return newData;
});

Clazz.newMeth(C$, 'allocateBioPolymer$org_jmol_modelset_GroupA$I$Z$I', function (groups, firstGroupIndex, checkConnections, pt0) {
var previous=null;
var count=0;
for (var i=firstGroupIndex; i < groups.length; ++i) {
var group=groups[i];
var current;
if (!(Clazz.instanceOf(group, "org.jmol.modelsetbio.Monomer")) || (current=group).bioPolymer != null   || previous != null  && previous.getClass$() !== current.getClass$()    || checkConnections && !current.isConnectedAfter$org_jmol_modelsetbio_Monomer(previous)  ) break;
previous=current;
count++;
}
if (count < 2) return null;
var monomers=Clazz.array($I$(21), [count]);
for (var j=0; j < count; ++j) monomers[j]=groups[firstGroupIndex + j];

if (Clazz.instanceOf(previous, "org.jmol.modelsetbio.AminoMonomer")) return Clazz.new_($I$(22,1).c$$org_jmol_modelsetbio_MonomerA$I,[monomers, pt0]);
if (Clazz.instanceOf(previous, "org.jmol.modelsetbio.AlphaMonomer")) return Clazz.new_($I$(23,1).c$$org_jmol_modelsetbio_MonomerA$I,[monomers, pt0]);
if (Clazz.instanceOf(previous, "org.jmol.modelsetbio.NucleicMonomer")) return Clazz.new_($I$(24,1).c$$org_jmol_modelsetbio_MonomerA,[monomers]);
if (Clazz.instanceOf(previous, "org.jmol.modelsetbio.PhosphorusMonomer")) return Clazz.new_($I$(25,1).c$$org_jmol_modelsetbio_MonomerA,[monomers]);
if (Clazz.instanceOf(previous, "org.jmol.modelsetbio.CarbohydrateMonomer")) return Clazz.new_($I$(26,1).c$$org_jmol_modelsetbio_MonomerA,[monomers]);
(function(a,f){return f.apply(null,a)})(["Polymer.allocatePolymer() ... no matching polymer for monomor " + previous],$I$(18).error$S);
throw Clazz.new_(Clazz.load('NullPointerException'));
}, 1);

Clazz.newMeth(C$, 'iterateOverAllNewStructures$org_jmol_api_JmolAdapter$O', function (adapter, atomSetCollection) {
var iterStructure=adapter.getStructureIterator$O(atomSetCollection);
if (iterStructure == null ) return;
var bs=iterStructure.getStructuredModels$();
if (bs != null ) for (var i=bs.nextSetBit$I(0); i >= 0; i=bs.nextSetBit$I(i + 1)) this.ml.structuresDefinedInFile.set$I(this.ml.baseModelIndex + i);

while (iterStructure.hasNext$())if (iterStructure.getStructureType$() !== $I$(2).TURN ) p$1.setStructure$org_jmol_api_JmolAdapterStructureIterator.apply(this, [iterStructure]);

iterStructure=adapter.getStructureIterator$O(atomSetCollection);
while (iterStructure.hasNext$())if (iterStructure.getStructureType$() === $I$(2).TURN ) p$1.setStructure$org_jmol_api_JmolAdapterStructureIterator.apply(this, [iterStructure]);

});

Clazz.newMeth(C$, 'setStructure$org_jmol_api_JmolAdapterStructureIterator', function (iterStructure) {
var t=iterStructure.getSubstructureType$();
var id=iterStructure.getStructureID$();
var serID=iterStructure.getSerialID$();
var count=iterStructure.getStrandCount$();
var atomRange=iterStructure.getAtomIndices$();
var modelRange=iterStructure.getModelIndices$();
var bsAll=iterStructure.getBSAll$();
var m0;
var m1;
var models=this.ms.am;
if (this.ml.isTrajectory) {
m0=m1=modelRange[0];
} else {
m0=modelRange[0] + this.ml.baseModelIndex;
m1=modelRange[1] + this.ml.baseModelIndex;
}this.ml.structuresDefinedInFile.setBits$I$I(m0, m1 + 1);
var bs;
var m;
if (bsAll != null ) {
for (var i=m0, t0; i <= m1; i++) if (Clazz.instanceOf((m=models[i]), "org.jmol.modelsetbio.BioModel")) for (var j=0; j < 5; j++) if ((bs=bsAll[t0=C$.mytypes[j]]) != null ) (m).addStructureByBS$I$I$org_jmol_c_STR$javajs_util_BS(0, t0, C$.types[j], bs);


return;
}var startChainID=iterStructure.getStartChainID$();
var startSequenceNumber=iterStructure.getStartSequenceNumber$();
var startInsertionCode=iterStructure.getStartInsertionCode$();
var endSequenceNumber=iterStructure.getEndSequenceNumber$();
var endChainID=iterStructure.getEndChainID$();
var endInsertionCode=iterStructure.getEndInsertionCode$();
var type=(t === $I$(2).NOT  ? $I$(2).NONE : t);
var startSeqCode=$I$(3).getSeqcodeFor$I$C(startSequenceNumber, startInsertionCode);
var endSeqCode=$I$(3).getSeqcodeFor$I$C(endSequenceNumber, endInsertionCode);
if (this.bsAssigned == null ) this.bsAssigned=Clazz.new_($I$(11,1));
for (var i=m0, i0=0; i <= m1; i++) if (Clazz.instanceOf((m=models[i]), "org.jmol.modelsetbio.BioModel")) (m).addSecondaryStructure$org_jmol_c_STR$S$I$I$I$I$I$I$I$I$javajs_util_BS(type, id, serID, count, startChainID, startSeqCode, endChainID, endSeqCode, (i0=m.firstAtomIndex) + atomRange[0], i0 + atomRange[1], this.bsAssigned);

}, p$1);

Clazz.newMeth(C$, 'setGroupLists$I', function (ipt) {
this.ml.group3Lists[ipt + 1]=$I$(3).standardGroupList;
this.ml.group3Counts[ipt + 1]=Clazz.array(Integer.TYPE, [C$.group3Count + 10]);
if (this.ml.group3Lists[0] == null ) {
this.ml.group3Lists[0]=$I$(3).standardGroupList;
this.ml.group3Counts[0]=Clazz.array(Integer.TYPE, [C$.group3Count + 10]);
}});

Clazz.newMeth(C$, 'isKnownPDBGroup$S$I', function (g3, max) {
var pt=C$.knownGroupID$S(g3);
return (pt > 0 ? pt < max : max == 2147483647 && C$.checkCarbohydrate$S(g3) );
});

Clazz.newMeth(C$, 'lookupSpecialAtomID$S', function (name) {
if (C$.htSpecialAtoms == null ) {
C$.htSpecialAtoms=Clazz.new_($I$(1,1));
for (var i=C$.specialAtomNames.length; --i >= 0; ) {
var specialAtomName=C$.specialAtomNames[i];
if (specialAtomName != null ) C$.htSpecialAtoms.put$O$O(specialAtomName, Byte.valueOf$B(($b$[0] = i, $b$[0])));
}
}var boxedAtomID=C$.htSpecialAtoms.get$O(name);
return (boxedAtomID == null  ? ($b$[0] = 0, $b$[0]) : boxedAtomID.byteValue$());
});

Clazz.newMeth(C$, 'getPdbBondInfo$S$Z', function (group3, isLegacy) {
if (C$.htPdbBondInfo == null ) C$.htPdbBondInfo=Clazz.new_($I$(1,1));
var info=C$.htPdbBondInfo.get$O(group3);
if (info != null ) return info;
var pt=C$.knownGroupID$S(group3);
if (pt < 0 || pt > C$.pdbBondInfo.length ) return null;
var s=C$.pdbBondInfo[pt];
if (isLegacy && (pt=s.indexOf$S("O3\'")) >= 0 ) s=s.substring$I$I(0, pt);
var temp=$I$(20).getTokens$S(s);
info=Clazz.array(String, [(temp.length/2|0), null]);
for (var i=0, p=0; i < info.length; i++) {
var source=temp[p++];
var target=temp[p++];
if (target.length$() == 1) switch ((target.charCodeAt$I(0))) {
case 78:
target="H@H2";
break;
case 66:
target="HB3@HB2";
break;
case 68:
target="HD3@HD2";
break;
case 71:
target="HG3@HG2";
break;
case 50:
target="H2\'@H2\'\'";
break;
case 53:
target="H5\'\'@H5\'";
break;
}
if (target.charAt$I(0) != "H" && source.compareTo$S(target) > 0 ) {
s=target;
target=source;
source=s;
}info[i]=Clazz.array(String, -1, [source, target, (target.startsWith$S("H") ? "1" : "2")]);
}
C$.htPdbBondInfo.put$O$O(group3, info);
return info;
}, p$1);

Clazz.newMeth(C$, 'knownGroupID$S', function (group3) {
if (group3 == null  || group3.length$() == 0 ) return $s$[0] = 0, $s$[0];
var boxedGroupID=C$.htGroup.get$O(group3);
return (boxedGroupID == null  ? ($s$[0] = -1, $s$[0]) : boxedGroupID.shortValue$());
}, 1);

Clazz.newMeth(C$, 'checkCarbohydrate$S', function (group3) {
return (group3 != null  && ",[AHR],[ALL],[AMU],[ARA],[ARB],[BDF],[BDR],[BGC],[BMA],[FCA],[FCB],[FRU],[FUC],[FUL],[GAL],[GLA],[GLC],[GXL],[GUP],[LXC],[MAN],[RAM],[RIB],[RIP],[XYP],[XYS],[CBI],[CT3],[CTR],[CTT],[LAT],[MAB],[MAL],[MLR],[MTT],[SUC],[TRE],[GCU],[MTL],[NAG],[NDG],[RHA],[SOR],[SOL],[SOE],[XYL],[A2G],[LBT],[NGA],[SIA],[SLB],[AFL],[AGC],[GLB],[NAN],[RAA]".indexOf$S("[" + group3.toUpperCase$() + "]" ) >= 0 );
}, 1);

Clazz.newMeth(C$, 'isHetero$S', function (group3) {
switch (group3.length$()) {
case 1:
group3 += "  ";
break;
case 2:
group3 += " ";
break;
case 3:
break;
default:
return true;
}
var pt=$I$(3).standardGroupList.indexOf$S(group3);
return (pt < 0 || (pt/6|0) + 1 >= 42 );
});

Clazz.newMeth(C$, 'toStdAmino3$S', function (g1) {
if (g1.length$() == 0) return "";
var s=Clazz.new_($I$(4,1));
var pt=C$.knownGroupID$S("==A");
if (pt < 0) {
for (var i=1; i <= 20; i++) {
pt=C$.knownGroupID$S(C$.predefinedGroup3Names[i]);
C$.htGroup.put$O$O("==" + C$.predefinedGroup1Names[i], Short.valueOf$H(($s$[0] = pt, $s$[0])));
}
}for (var i=0, n=g1.length$(); i < n; i++) {
var ch=g1.charAt$I(i);
pt=C$.knownGroupID$S("==" + ch);
if (pt < 0) pt=23;
s.append$S(" ").append$S(C$.predefinedGroup3Names[pt]);
}
return s.toString().substring$I(1);
});

Clazz.newMeth(C$, 'getGroupID$S', function (g3) {
return C$.getGroupIdFor$S(g3);
});

Clazz.newMeth(C$, 'getGroupIdFor$S', function (group3) {
if (group3 != null ) group3=group3.trim$();
var groupID=C$.knownGroupID$S(group3);
return (groupID == -1 ? C$.addGroup3Name$S(group3) : groupID);
}, 1);

Clazz.newMeth(C$, 'addGroup3Name$S', function (group3) {
if (C$.group3NameCount == $I$(3).group3Names.length) $I$(3).group3Names=(function(a,f){return f.apply(null,a)})([$I$(3).group3Names],$I$(27).doubleLengthS$SA);
var groupID=($s$[0]=C$.group3NameCount,C$.group3NameCount=(++$s$[0],$s$[0]),--$s$[0],$s$[0]);
$I$(3).group3Names[groupID]=group3;
C$.htGroup.put$O$O(group3, Short.valueOf$H(groupID));
return groupID;
}, 1);

Clazz.newMeth(C$, 'getStandardPdbHydrogenCount$S', function (group3) {
var pt=C$.knownGroupID$S(group3);
return (pt < 0 || pt >= C$.pdbHydrogenCount.length  ? -1 : C$.pdbHydrogenCount[pt]);
}, 1);

Clazz.newMeth(C$, 'getSpecialAtomName$I', function (atomID) {
return C$.specialAtomNames[atomID];
}, 1);

Clazz.newMeth(C$, 'getArgbs$I', function (tok) {
switch (tok) {
case 2097166:
return C$.argbsNucleic;
case 2097154:
return C$.argbsAmino;
case 1073742144:
return C$.argbsShapely;
case 1140850689:
return C$.argbsChainAtom;
case 1612709894:
return C$.argbsChainHetero;
}
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.htGroup=Clazz.new_($I$(1,1));
C$.types=Clazz.array($I$(2), -1, [$I$(2).HELIXPI, $I$(2).HELIXALPHA, $I$(2).SHEET, $I$(2).HELIX310, $I$(2).TURN]);
C$.mytypes=Clazz.array(Integer.TYPE, -1, [0, 2, 3, 4, 6]);
C$.pdbBondInfo=Clazz.array(String, -1, ["", "N N CA HA C O CB HB?", "N N CA HA C O CB B CG G CD D NE HE CZ NH1 NH1 HH11@HH12 NH2 HH22@HH21", "N N CA HA C O CB B CG OD1 ND2 HD21@HD22", "N N CA HA C O CB B CG OD1", "N N CA HA C O CB B SG HG", "N N CA HA C O CB B CG G CD OE1 NE2 HE22@HE21", "N N CA HA C O CB B CG G CD OE1", "N N CA HA2@HA3 C O", "N N CA HA C O CB B CG CD2 ND1 CE1 ND1 HD1 CD2 HD2 CE1 HE1 NE2 HE2", "N N CA HA C O CB HB CG1 HG13@HG12 CG2 HG2? CD1 HD1?", "N N CA HA C O CB B CG HG CD1 HD1? CD2 HD2?", "N N CA HA C O CB B CG G CD HD2@HD3 CE HE3@HE2 NZ HZ?", "N N CA HA C O CB B CG G CE HE?", "N N CA HA C O CB B CG CD1 CD1 HD1 CD2 CE2 CD2 HD2 CE1 CZ CE1 HE1 CE2 HE2 CZ HZ", "N H CA HA C O CB B CG G CD D", "N N CA HA C O CB B OG HG", "N N CA HA C O CB HB OG1 HG1 CG2 HG2?", "N N CA HA C O CB B CG CD1 CD1 HD1 CD2 CE2 NE1 HE1 CE3 CZ3 CE3 HE3 CZ2 CH2 CZ2 HZ2 CZ3 HZ3 CH2 HH2", "N N CA HA C O CB B CG CD1 CD1 HD1 CD2 CE2 CD2 HD2 CE1 CZ CE1 HE1 CE2 HE2 OH HH", "N N CA HA C O CB HB CG1 HG1? CG2 HG2?", "N N CA HA C O CB B", "N N CA HA C O CB B CG G", "", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' H2\' O2\' HO2\' C1\' H1\' C8 N7 C8 H8 C5 C4 C6 O6 N1 H1 C2 N3 N2 H22@H21 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' H2\' O2\' HO2\' C1\' H1\' C2 O2 N3 C4 N4 H41@H42 C5 C6 C5 H5 C6 H6 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' H2\' O2\' HO2\' C1\' H1\' C8 N7 C8 H8 C5 C4 C6 N1 N6 H61@H62 C2 N3 C2 H2 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' 2 C1\' H1\' C2 O2 N3 H3 C4 O4 C5 C6 C7 H7? C6 H6 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' H2\' O2\' HO2\' C1\' H1\' C2 O2 N3 H3 C4 O4 C5 C6 C5 H5 C6 H6 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' H2\' O2\' HO2\' C1\' H1\' C8 N7 C8 H8 C5 C4 C6 O6 N1 H1 C2 N3 C2 H2 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' 2 C1\' H1\' C8 N7 C8 H8 C5 C4 C6 O6 N1 H1 C2 N3 N2 H22@H21 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' 2 C1\' H1\' C2 O2 N3 C4 N4 H41@H42 C5 C6 C5 H5 C6 H6 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' 2 C1\' H1\' C8 N7 C8 H8 C5 C4 C6 N1 N6 H61@H62 C2 N3 C2 H2 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' 2 C1\' H1\' C2 O2 N3 H3 C4 O4 C5 C6 C7 H7? C6 H6 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' 2 C1\' H1\' C2 O2 N3 H3 C4 O4 C5 C6 C5 H5 C6 H6 O3\' HO3\' O5\' HO5\'", "P OP1 C5\' 5 C4\' H4\' C3\' H3\' C2\' 2 C1\' H1\' C8 N7 C8 H8 C5 C4 C6 O6 N1 H1 C2 N3 C2 H2 O3\' HO3\' O5\' HO5\'"]);
C$.pdbHydrogenCount=Clazz.array(Integer.TYPE, -1, [0, 6, 16, 7, 6, 6, 9, 8, 4, 9, 12, 12, 14, 10, 10, 8, 6, 8, 11, 10, 10, 3, 5, 0, 13, 13, 13, -1, 12, 12, 13, 13, 13, 14, 12, 12]);
C$.predefinedGroup1Names=Clazz.array(Character.TYPE, -1, ["\u0000", "A", "R", "N", "D", "C", "Q", "E", "G", "H", "I", "L", "K", "M", "F", "P", "S", "T", "W", "Y", "V", "A", "G", "?", "G", "C", "A", "T", "U", "I", "G", "C", "A", "T", "U", "I", "G", "C", "A", "T", "U", "I"]);
C$.predefinedGroup3Names=Clazz.array(String, -1, ["   ", "ALA", "ARG", "ASN", "ASP", "CYS", "GLN", "GLU", "GLY", "HIS", "ILE", "LEU", "LYS", "MET", "PHE", "PRO", "SER", "THR", "TRP", "TYR", "VAL", "ASX", "GLX", "UNK", "G  ", "C  ", "A  ", "T  ", "U  ", "I  ", "DG ", "DC ", "DA ", "DT ", "DU ", "DI ", "+G ", "+C ", "+A ", "+T ", "+U ", "+I ", "HOH", "DOD", "WAT", "UREA", "PO4", "SO4", "UNL"]);
C$.specialAtomNames=Clazz.array(String, -1, [null, "N", "CA", "C", "O", "O1", "O5\'", "C5\'", "C4\'", "C3\'", "O3\'", "C2\'", "C1\'", "P", "OD1", "OD2", "OE1", "OE2", "SG", null, null, null, null, null, null, null, null, null, null, null, null, null, "N1", "C2", "N3", "C4", "C5", "C6", "O2", "N7", "C8", "N9", "N4", "N2", "N6", "C5M", "O6", "O4", "S4", "C7", "H1", "H2", "H3", null, null, null, null, null, null, null, null, null, null, null, "OXT", "H", "1H", "2H", "3H", "HA", "1HA", "2HA", "H5T", "O5T", "O1P", "OP1", "O2P", "OP2", "O4\'", "O2\'", "1H5\'", "2H5\'", "H4\'", "H3\'", "1H2\'", "2H2\'", "2HO\'", "H1\'", "H3T", "HO3\'", "HO5\'", "HA2", "HA3", "HA2", "H5\'", "H5\'\'", "H2\'", "H2\'\'", "HO2\'", "O3P", "OP3"]);
C$.ATOMID_MAX=C$.specialAtomNames.length;
C$.argbsAmino=Clazz.array(Integer.TYPE, -1, [-4284306, -3618616, -15443201, -16720676, -1701366, -1645056, -16720676, -1701366, -1315861, -8224046, -15760881, -15760881, -15443201, -1645056, -13487446, -2320766, -354816, -354816, -4957516, -13487446, -15760881, -38476, -38476, -4284306]);
C$.argbsNucleic=Clazz.array(Integer.TYPE, -1, [-4284306, -6250336, -15760881, -1645056, -1701366, -15443201, -16720676, -16720676, -15760881, -1645056, -1701366, -15443201, -16720676, -16720676, -15760881, -1645056, -1701366, -15443201, -16720676, -16720676]);
C$.argbsChainAtom=Clazz.array(Integer.TYPE, -1, [-1, -4140801, -5177424, -16184, -128, -16129, -5181200, -12176, -1015680, -663885, -16728065, -3318692, -10039894, -6632142, -1146130, -16724271, -16711809, -12799119, -16777077, -4343957, -16751616, -8388608, -8355840, -8388480, -16744320, -4684277, -5103070]);
C$.argbsChainHetero=Clazz.array(Integer.TYPE, -1, [-1, -7298865, -8335464, -3174224, -3158160, -3174193, -8339264, -3170208, -4173712, -3821949, -16734257, -4895668, -11094638, -7686870, -4296002, -16730463, -16724113, -13329567, -16777029, -5922981, -16739328, -5242880, -5197824, -5242704, -16731984, -1526253, -4050382]);
C$.argbsShapely=Clazz.array(Integer.TYPE, -1, [-65281, -16777092, -33680, -7536756, -6291390, -144, -46004, -10092544, -1, -9408257, -16757760, -12231099, -12105800, -11318190, -4677566, -11382190, -36798, -4699136, -11581952, -7573428, -29441, -65281, -65281, -65281, -36752, -29621, -6250241, -6226016, -32640, -8323073, -36752, -29621, -6250241, -6226016, -32640, -8323073, -36752, -29621, -6250241, -6226016, -32640, -8323073]);
{
{

}
};
};
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-18 20:01:14 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
